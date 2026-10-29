#!/usr/bin/env python3
"""Read-only checks for this repository's paper explainer pages.

Usage: python3 check_page.py --root REPO --slug paper-slug [--page-only]
Requires Python 3 and Node.js on PATH for JavaScript syntax checks. Exit codes:
0 = checks passed (possibly with warnings), 1 = failed checks, 2 = usage error.

Checks literal HTML, local asset links, CSS url()/imports, inline JavaScript
syntax and the selected paper's catalogue integration. It never executes page
JavaScript, fetches URLs or writes files. Runtime-generated content, anchor
targets, translation completeness and scientific accuracy need browser/manual
review. CSS parsing covers ordinary url()/import syntax, not CSS escapes or
generated URLs. Absolute URLs are not fetched; remote script/style dependencies
are reported as warnings. Root-relative links can include the repo folder name
as their GitHub Pages project prefix.
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


class Report:
    def __init__(self):
        self.errors = 0
        self.warnings = 0

    def error(self, message):
        self.errors += 1
        print("ERROR: " + message)

    def warn(self, message):
        self.warnings += 1
        print("WARN: " + message)


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
        self._title = False
        self._style = False
        self._script = None

    def handle_starttag(self, tag, attributes):
        attrs = dict(attributes)
        line = self.getpos()[0]
        element_id = attrs.get("id")
        if element_id:
            if element_id in self.ids:
                self.report.error("line {}: duplicate id {!r}".format(line, element_id))
            self.ids.add(element_id)
        if tag == "html":
            self.language = (attrs.get("lang") or "").strip()
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
                "src": attrs.get("src"), "parts": [],
            }
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

    def check(self, value, source, context, dependency=False):
        key = (str(source), value, dependency)
        if key in self.seen_references:
            return
        self.seen_references.add(key)
        try:
            url = urlsplit(value.strip())
            if url.scheme or url.netloc:
                if dependency and (url.scheme in ("http", "https") or url.netloc):
                    self.report.warn("{}: remote script/style dependency {}".format(context, value))
                return
            if not url.path:
                return
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
        except (OSError, RuntimeError, ValueError) as exc:
            self.report.error("{}: invalid/outside-root local link {!r}: {}".format(context, value, exc))
            return
        if target.is_dir():
            try:
                target = (target / "index.html").resolve()
                target.relative_to(self.root)
            except (OSError, RuntimeError, ValueError) as exc:
                self.report.error("{}: invalid/outside-root directory index {!r}: {}".format(context, value, exc))
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


def check_page(root, page, report):
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
    resources = LocalResources(root, report)
    for value, line, dependency in parser.references:
        resources.check(value, page, "line {}".format(line), dependency)
    for style in parser.styles:
        resources.css(style, page)
    scripts = [script for script in parser.scripts if script["src"] is None and script["type"] in JS_TYPES]
    if parser._script is not None:
        report.error("unclosed script element")
    if scripts:
        node = shutil.which("node")
        if node is None:
            report.error("Node.js is required on PATH to check inline JavaScript")
            return
        for script in scripts:
            command = [node, "--check"]
            if script["type"] == "module":
                command.append("--input-type=module")
            try:
                result = subprocess.run(
                    command, input="".join(script["parts"]), text=True,
                    capture_output=True, timeout=15, check=False,
                )
            except (OSError, subprocess.TimeoutExpired) as exc:
                report.error("line {}: JavaScript syntax check failed: {}".format(script["line"], exc))
                continue
            if result.returncode:
                report.error("line {}: invalid inline JavaScript\n{}".format(
                    script["line"], (result.stderr or result.stdout).strip()
                ))


def check_catalog(root, slug, report):
    catalog_path = root / "references" / "paper-catalog.json"
    try:
        catalog_path.resolve().relative_to(root)
        catalog = json.loads(catalog_path.read_text(encoding="utf-8"))
    except (OSError, RuntimeError, UnicodeError, ValueError) as exc:
        report.error("cannot read catalogue {}: {}".format(catalog_path, exc))
        return
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
    if not matches:
        report.error("catalogue has no paper p pointing to " + target)
    sources = {record["u"] for record in matches if isinstance(record.get("u"), str) and record["u"]}
    for record in records:
        if isinstance(record.get("u"), str) and record["u"] in sources and record.get("p") not in (None, "", target):
            report.error("same paper source has conflicting explainer links: {!r} and {!r}".format(target, record["p"]))
    published = catalog["explainers"].get(target)
    try:
        if not isinstance(published, str) or not re.fullmatch(r"\d{4}-\d{2}-\d{2}", published):
            raise ValueError("expected YYYY-MM-DD")
        datetime.date.fromisoformat(published)
    except ValueError:
        report.error("explainers[{}] needs a real YYYY-MM-DD first-publication date".format(target))


def main():
    parser = argparse.ArgumentParser(description=__doc__, formatter_class=argparse.RawDescriptionHelpFormatter)
    parser.add_argument("--root", required=True, type=Path, help="paper-webpages repository root")
    parser.add_argument("--slug", required=True, help="lowercase letters/digits joined with hyphens")
    parser.add_argument("--page-only", action="store_true", help="skip catalogue checks for a concept page or before integration")
    args = parser.parse_args()
    if not re.fullmatch(r"[a-z0-9]+(?:-[a-z0-9]+)*", args.slug):
        parser.error("--slug must contain lowercase letters/digits joined with hyphens")
    try:
        root = args.root.resolve(strict=True)
    except (OSError, RuntimeError) as exc:
        parser.error("invalid --root: " + str(exc))
    if not root.is_dir():
        parser.error("--root must be a directory")
    report = Report()
    page = root / "papers" / args.slug / "index.html"
    try:
        page.resolve().relative_to(root)
    except (OSError, RuntimeError, ValueError):
        report.error("page path resolves outside the repository root")
    else:
        check_page(root, page, report)
    if args.page_only:
        report.warn("catalogue integration was skipped (--page-only); verify site navigation separately")
    else:
        check_catalog(root, args.slug, report)
    if report.errors:
        print("FAILED: {} error(s), {} warning(s)".format(report.errors, report.warnings))
        return 1
    print("PASS: {} static checks; {} warning(s). Browser and evidence review still required.".format(args.slug, report.warnings))
    return 0


if __name__ == "__main__":
    sys.exit(main())
