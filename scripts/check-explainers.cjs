#!/usr/bin/env node
/* Run with Playwright available in NODE_PATH or PAPER_PLAYWRIGHT_MODULE.
 * Optional: PAPER_CHROMIUM_EXECUTABLE, PAPER_BASE_URL, PAPER_QA_DIR.
 * Without PAPER_BASE_URL this script serves the repository on an ephemeral port.
 */
const assert = require('node:assert/strict');
const fs = require('node:fs');
const path = require('node:path');
const os = require('node:os');
const http = require('node:http');
const {chromium} = require(process.env.PAPER_PLAYWRIGHT_MODULE || 'playwright');

const root = path.resolve(__dirname, '..');
const slugs = fs.readdirSync(path.join(root, 'papers')).filter(slug => fs.existsSync(path.join(root, 'papers', slug, 'index.html'))).sort();
const screenshots = process.env.PAPER_QA_DIR || path.join(os.tmpdir(), 'paper-webpages-qa');
fs.mkdirSync(screenshots, {recursive: true});
let server;
async function serve() {
  server = http.createServer((request, response) => {
    let file = path.resolve(root, '.' + decodeURIComponent(new URL(request.url, 'http://localhost').pathname));
    if (file !== root && !file.startsWith(root + path.sep)) { response.writeHead(403).end(); return; }
    try {
      if (fs.statSync(file).isDirectory()) file = path.join(file, 'index.html');
      const types = {'.html': 'text/html; charset=utf-8', '.css': 'text/css', '.js': 'text/javascript', '.png': 'image/png'};
      response.writeHead(200, {'Content-Type': types[path.extname(file)] || 'application/octet-stream'});
      response.end(fs.readFileSync(file));
    } catch (_) { response.writeHead(404).end(); }
  });
  await new Promise(resolve => server.listen(0, '127.0.0.1', resolve));
  return 'http://127.0.0.1:' + server.address().port + '/';
}

async function englishResidue(page) {
  return page.evaluate(() => {
    const result = [];
    const main = document.querySelector('main');
    const walker = document.createTreeWalker(main, NodeFilter.SHOW_TEXT);
    let node;
    while ((node = walker.nextNode())) {
      if (!/[\u3400-\u9fff]/.test(node.data) || node.parentElement.closest('script,style,[data-language-example]')) continue;
      const range = document.createRange();
      range.selectNodeContents(node);
      if (node.parentElement.checkVisibility({checkVisibilityCSS: true}) && [...range.getClientRects()].some(r => r.width && r.height)) result.push(node.data.trim());
    }
    for (const element of main.querySelectorAll('[aria-label],[title],[alt]')) {
      if (!element.checkVisibility({checkVisibilityCSS: true}) || element.closest('[data-language-example]')) continue;
      for (const attribute of ['aria-label', 'title', 'alt']) {
        const value = element.getAttribute(attribute);
        if (/[\u3400-\u9fff]/.test(value || '')) result.push(attribute + ': ' + value);
      }
    }
    return [...new Set(result)];
  });
}

async function checkContent(page, label, lang) {
  if (lang === 'en') assert.deepEqual(await englishResidue(page), [], label + ': English text and accessibility labels');
}

async function buttonPaths(page) {
  return page.evaluate(() => {
    function selector(element) {
      if (element.id) return '#' + CSS.escape(element.id);
      const parent = element.parentElement;
      if (!parent) return element.tagName.toLowerCase();
      const sameTag = [...parent.children].filter(child => child.tagName === element.tagName);
      return selector(parent) + ' > ' + element.tagName.toLowerCase() + ':nth-of-type(' + (sameTag.indexOf(element) + 1) + ')';
    }
    return [...document.querySelectorAll('main button, main [role="button"], main .flow-node')]
      .filter(element => !element.disabled && element.checkVisibility({checkVisibilityCSS: true}) && element.getClientRects().length)
      .map(selector);
  });
}

async function snapshot(page) {
  return page.evaluate(() => ({
    inputs: [...document.querySelectorAll('main input, main select')].map(e => [e.id, e.value]),
    pressed: [...document.querySelectorAll('main .active, main .selected, main .correct, main .wrong, main [aria-pressed="true"]')]
      .map(e => [e.id, [...e.classList].sort().join(' '), [...e.attributes].filter(a => a.name.startsWith('data-') && !/i18n|copy|translation/.test(a.name)).map(a => [a.name, a.value])]),
    details: [...document.querySelectorAll('main details')].map(e => e.open)
  }));
}

(async () => {
  const base = (process.env.PAPER_BASE_URL || await serve()).replace(/\/?$/, '/');
  const browser = await chromium.launch({headless: true, ...(process.env.PAPER_CHROMIUM_EXECUTABLE ? {executablePath: process.env.PAPER_CHROMIUM_EXECUTABLE} : {})});
  let actions = 0;
  try {
    for (const slug of slugs) {
      const context = await browser.newContext({viewport: {width: 1440, height: 1000}, reducedMotion: 'reduce'});
      const page = await context.newPage();
      const errors = [];
      page.on('pageerror', error => errors.push(error.message));
      page.on('response', response => {
        if (response.status() >= 400 && response.url().startsWith(base) && !response.url().endsWith('favicon.ico')) errors.push('HTTP ' + response.status() + ': ' + response.url());
      });
      const url = new URL('papers/' + slug + '/', base);
      await page.goto(url.href + '?lang=zh&qa=1');
      assert.equal(await page.locator('.atlas-header').count(), 1, slug + ': exactly one shared header');
      const duplicates = await page.evaluate(() => {
        const ids = [...document.querySelectorAll('[id]')].map(e => e.id);
        return ids.filter((id, index) => ids.indexOf(id) !== index);
      });
      assert.deepEqual(duplicates, [], slug + ': unique runtime IDs');

      for (const lang of ['zh', 'en']) {
        await page.locator('[data-atlas-lang="' + lang + '"]').click();
        const depths = await page.locator('.atlas-depth button').count();
        for (let depth = 0; depth < Math.max(1, depths); depth++) {
          if (depths) await page.locator('.atlas-depth button').nth(depth).click();
          await page.locator('main details').evaluateAll(elements => elements.forEach(e => { e.open = true; }));
          await checkContent(page, slug + '/' + depth, lang);
          for (const selector of await buttonPaths(page)) {
            const button = page.locator(selector);
            if (!await button.count() || !await button.isVisible() || !await button.isEnabled()) continue;
            await button.evaluate(e => e.click());
            actions++;
            await checkContent(page, slug + ': ' + selector, lang);
          }
          const selectIds = await page.locator('main select[id]').evaluateAll(elements => elements.map(e => e.id));
          for (const id of selectIds) {
            const select = page.locator('[id="' + id + '"]');
            const values = await select.locator('option').evaluateAll(elements => elements.filter(e => !e.disabled).map(e => e.value));
            for (const value of values) {
              await select.selectOption(value);
              actions++;
              await checkContent(page, slug + ': ' + id + '=' + value, lang);
            }
          }
          const ranges = await page.locator('main input[type="range"][id]').evaluateAll(elements => elements.map(e => ({id: e.id, min: +e.min || 0, max: +e.max || 100, step: +e.step || 1})));
          for (const range of ranges) {
            for (const value of [range.min, range.min + Math.floor((range.max - range.min) / range.step / 2) * range.step, range.max]) {
              await page.locator('[id="' + range.id + '"]').evaluate((e, value) => { e.value = value; e.dispatchEvent(new Event('input', {bubbles: true})); e.dispatchEvent(new Event('change', {bubbles: true})); }, String(value));
              actions++;
              await checkContent(page, slug + ': ' + range.id, lang);
            }
          }
        }
      }

      const before = await snapshot(page);
      await page.evaluate(() => window.scrollTo({top: 900, behavior: 'instant'}));
      const scroll = await page.evaluate(() => scrollY);
      await page.locator('[data-atlas-lang="zh"]').click();
      await page.locator('[data-atlas-lang="en"]').click();
      assert.deepEqual(await snapshot(page), before, slug + ': language roundtrip preserves experiment state');
      assert.equal(await page.evaluate(() => scrollY), scroll, slug + ': language roundtrip preserves scroll');
      assert.equal(await page.locator('[data-atlas-lang="en"]').evaluate(e => e === document.activeElement), true, slug + ': language control keeps focus');
      assert.equal(new URL(page.url()).searchParams.get('qa'), '1', slug + ': other query parameters survive');
      assert.equal(new URL(await page.locator('.atlas-brand').getAttribute('href')).searchParams.get('lang'), 'en', slug + ': home link carries language');
      await page.goto(url.href);
      assert.equal(await page.locator('html').getAttribute('lang'), 'en', slug + ': saved language survives a fresh visit');
      if (await page.locator('[data-atlas-lang="both"]').count()) {
        await page.locator('[data-atlas-lang="both"]').click();
        assert.equal(await page.locator('body').getAttribute('data-lang'), 'both');
        assert.equal(await page.evaluate(() => localStorage.getItem('atlas-lang')), 'en', slug + ': parallel mode does not overwrite saved language');
      }

      for (const width of [1440, 768, 390]) {
        await page.setViewportSize({width, height: width === 390 ? 844 : 1000});
        for (const lang of ['zh', 'en']) {
          await page.goto(url.href + '?lang=' + lang);
          const geometry = await page.evaluate(() => ({viewport: innerWidth, document: document.documentElement.scrollWidth}));
          assert.ok(geometry.document <= geometry.viewport + 1, slug + '/' + lang + '/' + width + ': no document overflow: ' + JSON.stringify(geometry));
          assert.equal(await page.locator('.atlas-nav').isVisible(), true, slug + ': section navigation remains available');
          await checkContent(page, slug + '/' + width, lang);
          await page.screenshot({path: path.join(screenshots, slug + '-' + width + '-' + lang + '.png')});
          const depthCount = await page.locator('.atlas-depth button').count();
          for (let depth = 0; depth < depthCount; depth++) {
            await page.locator('.atlas-depth button').nth(depth).click();
            await page.locator('main details').evaluateAll(elements => elements.forEach(e => { e.open = true; }));
            assert.ok(await page.evaluate(() => document.documentElement.scrollWidth <= innerWidth + 1), slug + '/' + lang + '/' + width + '/' + depth + ': expanded content stays within the viewport');
            await checkContent(page, slug + '/' + width + '/' + depth, lang);
          }
        }
      }
      assert.deepEqual(errors, [], slug + ': no browser or resource errors');
      await context.close();

      const denied = await browser.newContext();
      await denied.addInitScript(() => Object.defineProperty(window, 'localStorage', {get() { throw new DOMException('Storage unavailable', 'SecurityError'); }}));
      const noStorage = await denied.newPage();
      const storageErrors = [];
      noStorage.on('pageerror', e => storageErrors.push(e.message));
      await noStorage.goto(url.href + '?lang=invalid#' + (slug === 'e5-mistral' ? 'overview' : 'glance'));
      assert.equal(await noStorage.locator('html').getAttribute('lang'), 'zh-CN', slug + ': invalid language falls back to Chinese without storage');
      await noStorage.locator('[data-atlas-lang="en"]').click();
      assert.equal(await noStorage.locator('html').getAttribute('lang'), 'en', slug + ': switching works without storage');
      assert.ok(new URL(noStorage.url()).hash, slug + ': language switch retains hash');
      assert.deepEqual(storageErrors, [], slug + ': denied storage causes no errors');
      await denied.close();
      console.log('PASS ' + slug + ': interactions, language/state, 3 widths, denied storage');
    }
    console.log('PASS all ' + slugs.length + ' explainers; ' + actions + ' interaction cases; screenshots: ' + screenshots);
  } finally {
    await browser.close();
    if (server) await new Promise(resolve => server.close(resolve));
  }
})().catch(error => { console.error(error); if (server) server.close(); process.exitCode = 1; });
