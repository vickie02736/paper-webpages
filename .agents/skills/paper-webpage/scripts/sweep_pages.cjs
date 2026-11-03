#!/usr/bin/env node
/*
Read-only browser sweep of rendered explainers, complementing scripts/check-*.cjs.

Usage (from the repository root):
  PAPER_PLAYWRIGHT_MODULE=/abs/path/to/playwright \
  node .agents/skills/paper-webpage/scripts/sweep_pages.cjs [--slugs a,b] [--out report.json]

For every papers/<slug>/index.html, in zh and en at 1440/768/390 px, with the
deepest reading depth selected and all <details> opened, it records:
- failures (exit 1): page errors, console errors/warnings, failed local requests
  and HTTP >= 400, horizontal overflow, broken or alt-less images, dead in-page
  anchors and local links, unknown elements (e.g. an unescaped "<LOD"), unnamed
  controls, and Chinese in the English page title or accessible attributes;
- hints (review by hand, exit 0): visible Chinese text in English mode, long
  English sentences in Chinese mode, full-width punctuation in English text,
  numbers that appear in only one language within a section, and the words
  undefined/NaN/[object Object]. Paper titles, author names, citations and
  formal locators can legitimately remain in English; "undefined" can be a
  normal English word; numbers written as words ("two") show up as mismatches.
*/
const {chromium} = require(process.env.PAPER_PLAYWRIGHT_MODULE || 'playwright');
const fs = require('node:fs'), path = require('node:path'), http = require('node:http');

const root = process.cwd();
const arg = name => { const i = process.argv.indexOf(name); return i > 0 ? process.argv[i + 1] : null; };
const only = arg('--slugs') ? arg('--slugs').split(',') : null;
const out = arg('--out');
const slugs = fs.readdirSync(path.join(root, 'papers'))
  .filter(s => fs.existsSync(path.join(root, 'papers', s, 'index.html')) && (!only || only.includes(s))).sort();
const types = {'.html': 'text/html; charset=utf-8', '.js': 'text/javascript', '.css': 'text/css', '.png': 'image/png', '.jpg': 'image/jpeg', '.svg': 'image/svg+xml', '.json': 'application/json', '.mp4': 'video/mp4', '.pdf': 'application/pdf', '.md': 'text/markdown; charset=utf-8'};
const HINTS = new Set(['zh-in-en', 'en-in-zh', 'bad-value', 'fullwidth-in-en', 'number-mismatch']);

(async () => {
  const server = http.createServer((req, res) => {
    let file = path.resolve(root, '.' + decodeURIComponent(new URL(req.url, 'http://x').pathname));
    if (!file.startsWith(root)) return res.writeHead(403).end();
    try {
      if (fs.statSync(file).isDirectory()) file = path.join(file, 'index.html');
      res.setHeader('Content-Type', types[path.extname(file)] || 'application/octet-stream');
      res.end(fs.readFileSync(file));
    } catch { res.writeHead(404).end(); }
  });
  await new Promise(resolve => server.listen(0, '127.0.0.1', resolve));
  const base = 'http://127.0.0.1:' + server.address().port;
  const browser = await chromium.launch({headless: true, ...(process.env.PAPER_CHROMIUM_EXECUTABLE ? {executablePath: process.env.PAPER_CHROMIUM_EXECUTABLE} : {})});
  const report = {};
  let failures = 0;
  try {
    for (const slug of slugs) {
      const issues = [];
      const add = (kind, detail) => { if (!issues.some(i => i.kind === kind && i.detail === detail)) issues.push({kind, detail}); };
      const page = await browser.newPage({reducedMotion: 'reduce'});
      page.on('pageerror', e => add('pageerror', e.message.slice(0, 200)));
      page.on('console', m => { if (m.type() === 'error' || m.type() === 'warning') add('console-' + m.type(), m.text().slice(0, 200)); });
      page.on('requestfailed', r => { if (r.url().startsWith(base)) add('requestfailed', r.url().replace(base, '')); });
      page.on('response', r => { if (r.url().startsWith(base) && r.status() >= 400 && !r.url().endsWith('favicon.ico')) add('http' + r.status(), r.url().replace(base, '')); });
      const numbers = {};
      for (const lang of ['zh', 'en']) {
        for (const width of [1440, 768, 390]) {
          await page.setViewportSize({width, height: width === 390 ? 844 : 1000});
          await page.goto(`${base}/papers/${slug}/?lang=${lang}`, {waitUntil: 'load'});
          const depth = page.locator('.atlas-depth button');
          if (await depth.count()) await depth.last().click();
          await page.locator('main details').evaluateAll(es => es.forEach(e => { e.open = true; }));
          await page.waitForTimeout(150);
          const overflow = await page.evaluate(() => {
            const extra = document.documentElement.scrollWidth - innerWidth;
            if (extra <= 1) return null;
            const clipped = el => { for (let p = el.parentElement; p; p = p.parentElement) { const o = getComputedStyle(p).overflowX; if (o === 'auto' || o === 'scroll' || o === 'hidden') return true; } return false; };
            const wide = [...document.querySelectorAll('main *')]
              .filter(e => { const r = e.getBoundingClientRect(); return r.right > innerWidth + 1 && r.width > 0 && !clipped(e); })
              .slice(0, 3).map(e => e.tagName.toLowerCase() + (e.id ? '#' + e.id : ''));
            return extra + 'px ' + wide.join(',');
          });
          if (overflow) add('overflow-' + width, lang + ' ' + overflow);
          if (width !== 1440) continue;
          await page.locator('img').evaluateAll(es => es.forEach(e => { e.loading = 'eager'; }));
          const found = await page.evaluate(async lang => {
            const results = [];
            const visible = el => { if (!el) return false; const s = getComputedStyle(el); return s.display !== 'none' && s.visibility !== 'hidden' && el.getClientRects().length > 0; };
            const mathml = /^(math|m[a-z]+|semantics|annotation(-xml)?|none)$/;
            for (const el of document.querySelectorAll('body *')) {
              if (el instanceof HTMLUnknownElement && !mathml.test(el.tagName.toLowerCase())) results.push(['unknown-tag', '<' + el.tagName.toLowerCase() + '> near "' + (el.parentElement?.textContent || '').trim().slice(0, 80) + '"']);
            }
            for (const img of document.images) {
              if (!visible(img)) continue;
              if (!img.complete) await new Promise(r => { img.addEventListener('load', r, {once: true}); img.addEventListener('error', r, {once: true}); setTimeout(r, 4000); });
              if (img.complete && img.naturalWidth === 0) results.push(['broken-img', img.getAttribute('src')]);
              if (!img.hasAttribute('alt')) results.push(['img-no-alt', img.getAttribute('src')]);
            }
            for (const a of document.querySelectorAll('a[href^="#"]')) {
              const id = decodeURIComponent(a.getAttribute('href').slice(1));
              if (id && !document.getElementById(id)) results.push(['dead-anchor', '#' + id]);
            }
            const local = [...new Set([...document.querySelectorAll('a[href]')].map(a => a.href.split('#')[0]).filter(h => h.startsWith(location.origin)))];
            for (const href of local) { try { const r = await fetch(href); if (r.status >= 400) results.push(['dead-link', href.replace(location.origin, '')]); } catch { results.push(['dead-link', href]); } }
            for (const c of document.querySelectorAll('button, [role=button], input, select, textarea')) {
              if (!visible(c) || c.type === 'hidden') continue;
              const name = (c.getAttribute('aria-label') || c.textContent || c.getAttribute('title') || (c.labels && c.labels[0] && c.labels[0].textContent) || c.getAttribute('aria-labelledby') || '').trim();
              if (!name) results.push(['unnamed-control', c.outerHTML.slice(0, 100)]);
            }
            const cjk = /[\u4e00-\u9fff]/;
            const zhAllowed = el => el.closest('script,style,code,pre,math,[data-language-example],[data-atlas-lang],[lang^="zh"]:not(html),[aria-hidden="true"]');
            const enAllowed = el => el.closest('script,style,code,pre,math,.formula,[lang^="en"]:not(html),cite,[class*="byline"],[class*="biblio"],[aria-hidden="true"]');
            const numbers = {};
            const walker = document.createTreeWalker(document.body, NodeFilter.SHOW_TEXT);
            for (let n = walker.nextNode(); n; n = walker.nextNode()) {
              const text = n.textContent.replace(/\s+/g, ' ').trim();
              const el = n.parentElement;
              if (!text || !visible(el) || el.closest('script,style')) continue;
              const section = el.closest('main section[id]')?.id;
              if (section) for (const m of text.matchAll(/\d+(?:,\d{3}(?!\d))*(?:\.\d+)?/g)) {
                const v = m[0].replace(/,/g, '');
                if (v.length > 1) (numbers[section] ||= new Set()).add(v);
              }
              if (/\b(undefined|NaN)\b|\[object Object\]/.test(text) && !el.closest('code,pre')) results.push(['bad-value', lang + ' ' + text.slice(0, 100)]);
              if (lang === 'en' && cjk.test(text) && !zhAllowed(el)) results.push(['zh-in-en', text.slice(0, 80)]);
              if (lang === 'en' && !cjk.test(text) && /[，。；：！？、]/.test(text) && !zhAllowed(el)) results.push(['fullwidth-in-en', text.slice(0, 80)]);
              if (lang === 'zh' && !cjk.test(text) && !enAllowed(el) && (text.match(/[A-Za-z]{3,}/g) || []).length >= 6 && /[a-z]{3,} [a-z]{3,} [a-z]{3,}/.test(text)) results.push(['en-in-zh', text.slice(0, 80)]);
            }
            if (lang === 'en' && cjk.test(document.title)) results.push(['zh-title-in-en', document.title]);
            if (lang === 'en') for (const el of document.querySelectorAll('[aria-label],[title],img[alt]')) {
              if (el.closest('[data-language-example],[lang^="zh"]:not(html)') || el.hasAttribute('data-atlas-lang')) continue;
              for (const attr of ['aria-label', 'title', 'alt']) { const v = el.getAttribute(attr); if (v && cjk.test(v)) results.push(['zh-attr-in-en', attr + '="' + v.slice(0, 60) + '"']); }
            }
            return {results, numbers: Object.fromEntries(Object.entries(numbers).map(([k, v]) => [k, [...v]]))};
          }, lang);
          for (const [kind, detail] of found.results) add(kind, detail);
          numbers[lang] = found.numbers;
        }
      }
      for (const id of new Set([...Object.keys(numbers.zh || {}), ...Object.keys(numbers.en || {})])) {
        const zh = new Set(numbers.zh?.[id] || []), en = new Set(numbers.en?.[id] || []);
        const zhOnly = [...zh].filter(v => !en.has(v)), enOnly = [...en].filter(v => !zh.has(v));
        if (zhOnly.length || enOnly.length) add('number-mismatch', '#' + id + ' zh-only [' + zhOnly.slice(0, 8).join(' ') + '] en-only [' + enOnly.slice(0, 8).join(' ') + ']');
      }
      await page.close();
      report[slug] = issues;
      const hard = issues.filter(i => !HINTS.has(i.kind));
      failures += hard.length;
      for (const i of issues) console.log((HINTS.has(i.kind) ? 'HINT ' : 'FAIL ') + slug + ' | ' + i.kind + ' | ' + i.detail);
      if (!hard.length) console.log('PASS ' + slug + (issues.length ? ' (' + issues.length + ' hint(s))' : ''));
    }
  } finally {
    await browser.close();
    server.close();
  }
  if (out) fs.writeFileSync(out, JSON.stringify(report, null, 1));
  console.log((failures ? 'FAILED' : 'PASS') + ': ' + slugs.length + ' pages, ' + failures + ' failure(s). Hints need manual review; this does not verify scientific content.');
  process.exit(failures ? 1 : 0);
})().catch(e => { console.error(e); process.exit(2); });
