#!/usr/bin/env python3
"""Read-only checks for this repository's paper explainer pages.

Usage:
  python3 check_page.py --root REPO --slug paper-slug [--page-only]
  python3 check_page.py --root REPO --all

Requires Python 3.9+ and Node.js on PATH for JavaScript syntax checks. Exit
codes: 0 = checks passed (possibly with warnings), 1 = failed checks, 2 = usage
error.

Checks literal HTML, unknown elements (such as an unescaped "<LOD"), local
asset links, CSS url()/imports, inline and local external JavaScript syntax,
the shared Research Atlas page contract (body class, data-paper, shared CSS/JS
order, AtlasPaper.init, a language-neutral shortTitle), README/sources.md
presence, the papers/README.md entry, and catalogue integration. Paper pages
must be linked from a themes[].p record; documentation pages are recognised
from collections[].items with type "document". Pages rendered by a generator
print a NOTE naming their editorial source.

It never executes page JavaScript, fetches URLs or writes files. Runtime
content, anchor targets, translation completeness and scientific accuracy need
browser and evidence review. Absolute URLs are not fetched; remote script or
style dependencies are reported as warnings. Root-relative links can include
the repo folder name as their GitHub Pages project prefix.
"""

import argparse
import datetime
from html.parser import HTMLParser
import json
from pathlib import Path
import re
import shutil
import subprocess
import sys
from urllib.parse import unquote, urlsplit


JS_TYPES = {
    "", "module", "text/javascript", "application/javascript",
    "text/ecmascript", "application/ecmascript", "application/x-javascript",
    "text/jscript", "text/livescript", "text/x-javascript",
    "text/x-ecmascript", "application/x-ecmascript",
} | {"text/javascript1.{}".format(version) for version in range(6)}
CSS_URL = re.compile(
    r"url\(\s*(?:\"([^\"]*)\"|'([^']*)'|([^)]*?))\s*\)", re.I
)
CSS_IMPORT = re.compile(r"@import\s+(?:\"([^\"]+)\"|'([^']+)')", re.I)
CJK = re.compile(r"[\u3400-\u9fff\uf900-\ufaff]")
SHORT_TITLE = re.compile(r"shortTitle\s*:\s*(['\"`])(.*?)\1")
KNOWN_TAGS = set("""
a abbr address area article aside audio b base bdi bdo blockquote body br button canvas caption cite code
col colgroup data datalist dd del details dfn dialog div dl dt em embed fieldset figcaption figure footer
form h1 h2 h3 h4 h5 h6 head header hgroup hr html i iframe img input ins kbd label legend li link main map
mark menu meta meter nav noscript object ol optgroup option output p param picture pre progress q rp rt
ruby s samp script search section select slot small source span strong style sub summary sup table tbody
td template textarea tfoot th thead time title tr track u ul var video wbr
svg g path rect circle ellipse line polyline polygon text tspan textpath defs use symbol marker clippath
mask pattern lineargradient radialgradient stop image foreignobject desc filter fegaussianblur feoffset
feblend fecolormatrix fecomposite feflood femerge femergenode fedropshadow animate animatetransform set
math mi mo mn ms mtext mspace mrow mfrac msqrt mroot msub msup msubsup munder mover munderover mtable mtr
mtd mstyle mpadded mphantom menclose semantics annotation annotation-xml mprescripts none
""".split())
GENERATORS = re.compile(r"Editorial source:\s*([^\n]+)")


class Report:
    def __init__(self, quiet=False):
        self.errors = 0
        self.warnings = 0
        self.quiet = quiet

    def error(self, message):
        self.errors += 1
        print("ERROR: " + message)

    def warn(self, message):
        self.warnings += 1
        print("WARN: " + message)

    def note(self, message):
        if not self.quiet:
            print("NOTE: " + message)


SHARED_SELECTOR = re.compile(r"\.atlas-(?!paper\b)|(?:^|[\s,>+~(])(?:html|body|:root)(?![\w-])")


def overrides_shared_styles(path):
    """True when a stylesheet that loads after paper.css targets shared page-frame selectors."""
    try:
        css = path.read_text(encoding="utf-8")
    except (OSError, UnicodeDecodeError):
        return True
    css = re.sub(r"/\*.*?\*/", "", css, flags=re.S)
    selectors = re.findall(r"([^{}]+)\{", css)
    return any(SHARED_SELECTOR.search(s) for s in selectors if not s.strip().startswith("@"))


def srcset_urls(value):
    """Extract ordinary srcset URLs while retaining commas within data URLs."""
    position = 0
    while position < len(value):
        while position < len(value) and (value[position].isspace() or value[position] == ","):
            position += 1
        start = position
        while position < len(value) and not value[position].isspace():
            position += 1
        url = value[start:position]
        if not url:
            return
        if url.endswith(","):
            yield url.rstrip(",")
            continue
        yield url
        depth = 0
        while position < len(value):
            char = value[position]
            position += 1
            if char == "(":
                depth += 1
            elif char == ")":
                depth = max(0, depth - 1)
            elif char == "," and not depth:
                break


class PageParser(HTMLParser):
    def __init__(self, report):
        super().__init__(convert_charrefs=True)
        self.report = report
        self.language = ""
        self.charset = False
        self.viewport = False
        self.title_parts = []
        self.ids = set()
        self.references = []
        self.styles = []
        self.scripts = []
        self.stylesheets = []
        self.body = None
        self.unknown = []
        self._title = False
        self._style = False
        self._script = None

    def handle_starttag(self, tag, attributes):
        attrs = dict(attributes)
        line = self.getpos()[0]
        if tag not in KNOWN_TAGS and "-" not in tag:
            self.unknown.append((tag, line))
        element_id = attrs.get("id")
        if element_id:
            if element_id in self.ids:
                self.report.error("line {}: duplicate id {!r}".format(line, element_id))
            self.ids.add(element_id)
        if tag == "html":
            self.language = (attrs.get("lang") or "").strip()
        elif tag == "body":
            self.body = attrs
        elif tag == "title":
            self._title = True
        elif tag == "meta":
            charset = attrs.get("charset") or ""
            if (attrs.get("http-equiv") or "").lower() == "content-type":
                found = re.search(r"charset\s*=\s*([\w-]+)", attrs.get("content") or "", re.I)
                if found:
                    charset = found.group(1)
            if charset.lower().replace("-", "").replace("_", "") == "utf8":
                self.charset = True
            if (attrs.get("name") or "").lower() == "viewport":
                self.viewport = bool(re.search(
                    r"(?:^|[,;])\s*width\s*=\s*device-width(?:\s*[,;]|\s*$)",
                    attrs.get("content") or "", re.I
                ))
        elif tag == "base":
            self.report.error("line {}: base URLs are unsupported; use document-relative links".format(line))
        elif tag == "style":
            self._style = True
        elif tag == "script":
            self._script = {
                "line": line, "type": (attrs.get("type") or "").split(";", 1)[0].strip().lower(),
                "src": attrs.get("src"), "id": attrs.get("id"), "parts": [],
            }
        if tag == "link" and "stylesheet" in (attrs.get("rel") or "").lower().split() and attrs.get("href"):
            self.stylesheets.append((attrs["href"], line))
        for attr in ("href", "src", "poster"):
            if attrs.get(attr):
                dependency = tag == "script" or (
                    tag == "link" and "stylesheet" in (attrs.get("rel") or "").lower().split()
                )
                self.references.append((attrs[attr], line, dependency))
        if attrs.get("srcset"):
            self.references.extend((url, line, False) for url in srcset_urls(attrs["srcset"]))
        if attrs.get("style"):
            self.styles.append(attrs["style"])

    def handle_endtag(self, tag):
        if tag == "title":
            self._title = False
        elif tag == "style":
            self._style = False
        elif tag == "script" and self._script is not None:
            self.scripts.append(self._script)
            self._script = None

    def handle_data(self, data):
        if self._title:
            self.title_parts.append(data)
        if self._style:
            self.styles.append(data)
        if self._script is not None:
            self._script["parts"].append(data)


class LocalResources:
    def __init__(self, root, report):
        self.root = root
        self.report = report
        self.seen_css = set()
        self.seen_references = set()

    def resolve(self, value, source):
        """Return the local file a link points to, or None for remote/empty links."""
        url = urlsplit(value.strip())
        if url.scheme or url.netloc or not url.path:
            return None
        path = unquote(url.path)
        if path.startswith("/"):
            relative = path.lstrip("/")
            prefix = self.root.name + "/"
            if relative == self.root.name:
                relative = ""
            elif relative.startswith(prefix):
                relative = relative[len(prefix):]
            target = (self.root / relative).resolve()
        else:
            target = (source.parent / path).resolve()
        target.relative_to(self.root)
        if target.is_dir():
            target = (target / "index.html").resolve()
            target.relative_to(self.root)
        return target

    def check(self, value, source, context, dependency=False):
        key = (str(source), value, dependency)
        if key in self.seen_references:
            return
        self.seen_references.add(key)
        url = urlsplit(value.strip())
        if url.scheme or url.netloc:
            if dependency and (url.scheme in ("http", "https") or url.netloc):
                self.report.warn("{}: remote script/style dependency {}".format(context, value))
            return
        try:
            target = self.resolve(value, source)
        except (OSError, RuntimeError, ValueError) as exc:
            self.report.error("{}: invalid/outside-root local link {!r}: {}".format(context, value, exc))
            return
        if target is None:
            return
        if not target.is_file():
            self.report.error("{}: missing local resource {!r}".format(context, value))
        elif target.suffix.lower() == ".css" and target not in self.seen_css:
            self.seen_css.add(target)
            try:
                self.css(target.read_text(encoding="utf-8"), target)
            except (OSError, UnicodeError) as exc:
                self.report.error("cannot read CSS {}: {}".format(target, exc))

    def css(self, text, source):
        text = re.sub(r"/\*.*?\*/", "", text, flags=re.S)
        for pattern in (CSS_URL, CSS_IMPORT):
            for match in pattern.finditer(text):
                value = next((part for part in match.groups() if part is not None), "").strip()
                self.check(value, source, "CSS in " + str(source), dependency=True)


class Context:
    """State shared across pages in one run (catalogue, syntax-check cache)."""

    def __init__(self, root, report):
        self.root = root
        self.report = report
        self.node = shutil.which("node")
        self.checked_js = {}
        self.catalog = None
        self.catalog_error = None
        catalog_path = root / "references" / "paper-catalog.json"
        try:
            catalog_path.resolve().relative_to(root)
            self.catalog = json.loads(catalog_path.read_text(encoding="utf-8"))
        except (OSError, RuntimeError, UnicodeError, ValueError) as exc:
            self.catalog_error = "cannot read catalogue {}: {}".format(catalog_path, exc)
        try:
            self.papers_readme = (root / "papers" / "README.md").read_text(encoding="utf-8")
        except (OSError, UnicodeError):
            self.papers_readme = None

    def node_check(self, source, module=False, label=""):
        if self.node is None:
            self.report.error("Node.js is required on PATH to check JavaScript")
            return None
        command = [self.node, "--check"]
        if module:
            command.append("--input-type=module")
        try:
            result = subprocess.run(command, input=source, text=True, capture_output=True, timeout=15, check=False)
        except (OSError, subprocess.TimeoutExpired) as exc:
            return "{}: JavaScript syntax check failed: {}".format(label, exc)
        if result.returncode:
            return "{}: invalid JavaScript\n{}".format(label, (result.stderr or result.stdout).strip())
        return ""

    def external_js(self, path, module):
        key = (path, module)
        if key not in self.checked_js:
            try:
                text = path.read_text(encoding="utf-8")
            except (OSError, UnicodeError) as exc:
                self.checked_js[key] = ("cannot read script {}: {}".format(path, exc), "")
            else:
                problem = self.node_check(text, module, str(path.relative_to(self.root)))
                self.checked_js[key] = (problem or "", text)
        return self.checked_js[key]

    def document_item(self, target):
        if not isinstance(self.catalog, dict):
            return None
        for collection in self.catalog.get("collections") or []:
            for item in (collection or {}).get("items") or []:
                if isinstance(item, dict) and item.get("type") == "document" and item.get("path") == target:
                    return item
        return None


def check_page(ctx, slug, page, report):
    try:
        html = page.read_text(encoding="utf-8")
    except (OSError, UnicodeError) as exc:
        report.error("cannot read page {}: {}".format(page, exc))
        return
    parser = PageParser(report)
    parser.feed(html)
    parser.close()
    if not "".join(parser.title_parts).strip():
        report.error("page needs a nonempty title")
    if not parser.language:
        report.error("page needs an html lang attribute")
    if not parser.charset:
        report.error("page needs a UTF-8 charset declaration")
    if not parser.viewport:
        report.error("page needs viewport metadata with width=device-width")
    for tag, line in parser.unknown:
        report.warn("line {}: unknown element <{}>; escape literal '<' in text (for example &lt;LOD)".format(line, tag))
    resources = LocalResources(ctx.root, report)
    for value, line, dependency in parser.references:
        resources.check(value, page, "line {}".format(line), dependency)
    for style in parser.styles:
        resources.css(style, page)
    if parser._script is not None:
        report.error("unclosed script element")

    script_texts = []
    for script in parser.scripts:
        if script["type"] not in JS_TYPES:
            if script["type"] == "application/json":
                try:
                    data = json.loads("".join(script["parts"]))
                except ValueError as exc:
                    report.error("line {}: invalid JSON script: {}".format(script["line"], exc))
                else:
                    if isinstance(data, dict) and isinstance(data.get("short"), str):
                        script_texts.append("shortTitle:" + json.dumps(data["short"], ensure_ascii=False))
            continue
        module = script["type"] == "module"
        if script["src"] is None:
            text = "".join(script["parts"])
            problem = ctx.node_check(text, module, "line {} inline script".format(script["line"]))
            if problem:
                report.error(problem)
            script_texts.append(text)
            continue
        try:
            target = resources.resolve(script["src"], page)
        except (OSError, RuntimeError, ValueError):
            continue
        if target is None or not target.is_file():
            continue
        problem, text = ctx.external_js(target, module)
        if problem:
            report.error(problem)
        script_texts.append(text)
    check_contract(ctx, slug, page, parser, resources, "\n".join(script_texts), report)


def check_contract(ctx, slug, page, parser, resources, scripts, report):
    body = parser.body or {}
    classes = (body.get("class") or "").split()
    if "atlas-paper" not in classes:
        report.error('body needs class="atlas-paper"')
    if body.get("data-paper") != slug:
        report.error("body data-paper={!r} must equal the slug {!r}".format(body.get("data-paper"), slug))

    def local(value):
        try:
            target = resources.resolve(value, page)
        except (OSError, RuntimeError, ValueError):
            return None
        return target.relative_to(ctx.root).as_posix() if target else None

    sheets = [local(href) for href, _ in parser.stylesheets]
    if "assets/paper.css" not in sheets:
        report.error("page must load the shared assets/paper.css")
    else:
        later = [sheet for sheet in sheets[sheets.index("assets/paper.css") + 1:] if sheet and not sheet.startswith("assets/")]
        overriding = [sheet for sheet in later if overrides_shared_styles(ctx.root / sheet)]
        if overriding:
            report.warn("page stylesheet(s) {} load after assets/paper.css and restyle shared selectors (.atlas-* components, html, body or :root); load page styles first, component add-ons may follow".format(", ".join(overriding)))
    sources = [local(script["src"]) for script in parser.scripts if script["src"]]
    if "assets/paper.js" not in sources:
        report.error("page must load the shared assets/paper.js")
    elif ctx.document_item("./papers/{}/".format(slug)) is None:
        position = sources.index("assets/paper.js")
        for required in ("assets/bibliography.js", "assets/paper-metadata.js"):
            if required not in sources[:position]:
                report.error("paper pages must load {} before assets/paper.js".format(required))
        if "assets/bibliography.css" not in sheets:
            report.error("paper pages must load assets/bibliography.css")
    if "AtlasPaper.init" not in scripts:
        report.error("no AtlasPaper.init call found in inline or local scripts")
    for match in SHORT_TITLE.finditer(scripts):
        if CJK.search(match.group(2)):
            report.error("shortTitle {!r} is shown in both languages; use a language-neutral title".format(match.group(2)))

    folder = page.parent
    for name in ("README.md", "sources.md"):
        if not (folder / name).is_file():
            report.warn("papers/{}/{} is missing".format(slug, name))
    try:
        readme = (folder / "README.md").read_text(encoding="utf-8")
    except (OSError, UnicodeError):
        readme = ""
    generator = GENERATORS.search(readme)
    if generator:
        report.note("generated page; edit the editorial source and regenerate: " + generator.group(1).strip())
    if ctx.papers_readme is not None and "({}/)".format(slug) not in ctx.papers_readme:
        report.warn("papers/README.md has no entry linking ({}/)".format(slug))


def check_catalog(ctx, slug, report):
    if ctx.catalog_error:
        report.error(ctx.catalog_error)
        return
    catalog = ctx.catalog
    if not isinstance(catalog, dict) or not isinstance(catalog.get("themes"), list) or not isinstance(catalog.get("explainers"), dict):
        report.error("catalogue needs themes (array) and explainers (object)")
        return
    records = []
    for index, theme in enumerate(catalog["themes"]):
        if not isinstance(theme, dict) or not isinstance(theme.get("p"), list):
            report.error("catalogue theme {} needs a paper array p".format(index))
            continue
        for record in theme["p"]:
            if not isinstance(record, dict):
                report.error("catalogue theme {} contains a non-object paper".format(index))
                continue
            records.append(record)
    target = "./papers/{}/".format(slug)
    matches = [record for record in records if record.get("p") == target]
    document = ctx.document_item(target)
    if not matches and document is None:
        report.error("catalogue has no paper p (themes[].p) or collection document item pointing to " + target)
    if matches and document is not None:
        report.error(target + " is both a paper explainer and a collection document item")
    sources = {record["u"] for record in matches if isinstance(record.get("u"), str) and record["u"]}
    for record in records:
        if isinstance(record.get("u"), str) and record["u"] in sources and record.get("p") not in (None, "", target):
            report.error("same paper source has conflicting explainer links: {!r} and {!r}".format(target, record["p"]))
    metadata = catalog.get("paperMetadata")
    if isinstance(metadata, dict):
        for source in sources:
            if source not in metadata:
                report.warn("paperMetadata has no record for {}; the byline will be empty (run scripts/build-paper-metadata.cjs after adding it)".format(source))
    published = catalog["explainers"].get(target)
    try:
        if not isinstance(published, str) or not re.fullmatch(r"\d{4}-\d{2}-\d{2}", published):
            raise ValueError("expected YYYY-MM-DD")
        published_date = datetime.date.fromisoformat(published)
    except ValueError:
        report.error("explainers[{}] needs a real YYYY-MM-DD first-publication date".format(target))
        published_date = None
    for key in ("explainerCreatedAt", "explainerUpdates"):
        value = (catalog.get(key) or {}).get(target)
        if value is None:
            report.warn("{}[{}] is missing; commit the page, then run node scripts/update-explainer-updates.cjs".format(key, target))
            continue
        try:
            moment = datetime.datetime.fromisoformat(str(value).replace("Z", "+00:00"))
        except ValueError:
            report.error("{}[{}] must be a UTC ISO timestamp, got {!r}".format(key, target, value))
            continue
        if key == "explainerCreatedAt" and published_date and moment.date() != published_date:
            report.error("explainerCreatedAt[{}] must fall on its first-publication UTC date {}".format(target, published))


def check_slug(ctx, slug, page_only, report):
    page = ctx.root / "papers" / slug / "index.html"
    try:
        page.resolve().relative_to(ctx.root)
    except (OSError, RuntimeError, ValueError):
        report.error("page path resolves outside the repository root")
        return
    if not page.is_file():
        report.error("missing page papers/{}/index.html".format(slug))
        return
    check_page(ctx, slug, page, report)
    if page_only:
        report.warn("catalogue integration was skipped (--page-only); verify site navigation separately")
    else:
        check_catalog(ctx, slug, report)


def main():
    parser = argparse.ArgumentParser(description=__doc__, formatter_class=argparse.RawDescriptionHelpFormatter)
    parser.add_argument("--root", required=True, type=Path, help="paper-webpages repository root")
    target = parser.add_mutually_exclusive_group(required=True)
    target.add_argument("--slug", help="lowercase letters/digits joined with hyphens")
    target.add_argument("--all", action="store_true", help="check every papers/*/index.html")
    parser.add_argument("--page-only", action="store_true", help="skip catalogue checks for a concept page or before integration")
    parser.add_argument("--quiet", action="store_true", help="omit NOTE lines and per-page PASS lines")
    args = parser.parse_args()
    if args.slug and not re.fullmatch(r"[a-z0-9]+(?:-[a-z0-9]+)*", args.slug):
        parser.error("--slug must contain lowercase letters/digits joined with hyphens")
    try:
        root = args.root.resolve(strict=True)
    except (OSError, RuntimeError) as exc:
        parser.error("invalid --root: " + str(exc))
    if not root.is_dir():
        parser.error("--root must be a directory")
    report = Report(args.quiet)
    ctx = Context(root, report)
    if args.slug:
        check_slug(ctx, args.slug, args.page_only, report)
        if report.errors:
            print("FAILED: {} error(s), {} warning(s)".format(report.errors, report.warnings))
            return 1
        print("PASS: {} static checks; {} warning(s). Browser and evidence review still required.".format(args.slug, report.warnings))
        return 0
    slugs = sorted(path.parent.name for path in (root / "papers").glob("*/index.html"))
    failed = []
    for slug in slugs:
        print("== " + slug)
        before = report.errors
        check_slug(ctx, slug, args.page_only, report)
        if report.errors > before:
            failed.append(slug)
        elif not args.quiet:
            print("PASS: " + slug)
    print("{}: {} pages, {} failed, {} error(s), {} warning(s). Browser and evidence review still required.".format(
        "FAILED" if failed else "PASS", len(slugs), len(failed), report.errors, report.warnings))
    if failed:
        print("Failed pages: " + ", ".join(failed))
    return 1 if failed else 0


if __name__ == "__main__":
    sys.exit(main())
