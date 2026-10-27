#!/usr/bin/env node
// Uses the same Playwright/Chromium and QA-directory environment variables as check-explainers.cjs.
// PAPER_BASE_URL optionally targets a deployed copy; otherwise an ephemeral local server is used.
const assert = require('node:assert/strict');
const fs = require('node:fs');
const path = require('node:path');
const os = require('node:os');
const http = require('node:http');
const {createHash} = require('node:crypto');
const {chromium} = require(process.env.PAPER_PLAYWRIGHT_MODULE || 'playwright');
const root = path.resolve(__dirname, '..');
const screenshots = process.env.PAPER_QA_DIR || path.join(os.tmpdir(), 'ncu1-reader-qa');
const sizes = {2: [970, 735], 3: [1080, 830], 5: [1060, 665], 6: [700, 540]};
fs.mkdirSync(screenshots, {recursive: true});
let server;
async function serve() {
  server = http.createServer((request, response) => {
    let file = path.resolve(root, '.' + decodeURIComponent(new URL(request.url, 'http://localhost').pathname));
    if (file !== root && !file.startsWith(root + path.sep)) return response.writeHead(403).end();
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
async function ready(page, number, lang = 'zh') {
  await page.waitForFunction(n => {
    const image = document.getElementById('figure-image');
    return document.getElementById('figure-display').dataset.load === 'ready' &&
      image.dataset.figure === String(n) && image.complete && image.naturalWidth > 0;
  }, number);
  const image = page.locator('#figure-image');
  await image.evaluate(image => image.decode());
  assert.equal(await image.isVisible(), true, 'decoded image is visible');
  assert.deepEqual(await image.evaluate(image => [image.naturalWidth, image.naturalHeight]), sizes[number]);
  assert.match(new URL(await image.getAttribute('src'), page.url()).pathname, new RegExp('figure-' + number + '\\.png$'));
  assert.equal(await page.locator('#figure-controls [aria-pressed="true"]').getAttribute('data-figure'), String(number));
  assert.match(await page.locator('#figure-caption').innerText(), new RegExp((lang === 'en' ? 'Fig\\. ' : '图 ') + number + ' ·'));
  assert.match(new URL(await page.locator('#figure-link').getAttribute('href'), page.url()).pathname, new RegExp('figure-' + number + '\\.png$'));
  assert.equal(await page.locator('#figure-status').isVisible(), false);
  assert.equal(await page.locator('#figure-display').getAttribute('aria-busy'), 'false');
  const geometry = await image.evaluate(image => {
    const art = image.getBoundingClientRect(), box = document.getElementById('figure-display').getBoundingClientRect();
    return {contained: art.top >= box.top - 1 && art.bottom <= box.bottom + 1,
      captionBelow: document.getElementById('figure-caption').getBoundingClientRect().top >= art.bottom - 1};
  });
  assert.equal(geometry.contained && geometry.captionBelow, true, 'image fits its frame without overlapping the caption');
}
async function status(page, value, number, lang = 'zh') {
  await page.locator('#figure-display[data-load="' + value + '"]').waitFor();
  assert.equal(await page.locator('#figure-image').isVisible(), false, 'stale bitmap stays hidden');
  assert.equal(await page.locator('#figure-link').isVisible(), false, 'stale artwork cannot be opened');
  const message = await page.locator('#figure-status-text').innerText();
  assert.ok(message.includes(String(number)), message);
  assert.match(message, lang === 'en' ? (value === 'loading' ? /Loading/ : /could not be loaded/) : (value === 'loading' ? /正在加载/ : /未能加载/));
  assert.equal(await page.locator('#figure-retry').isVisible(), value === 'error');
}
async function choose(page, number) { await page.locator('#figure-controls [data-figure="' + number + '"]').click(); }
function gateImage(page, number) {
  let release, requested;
  const hold = new Promise(resolve => { release = resolve; });
  const started = new Promise(resolve => { requested = resolve; });
  const pattern = '**/assets/figure-' + number + '.png';
  const handler = async route => { requested(); await hold; await route.continue(); };
  return page.route(pattern, handler).then(() => ({started, release, pattern, handler}));
}
(async () => {
  const base = (process.env.PAPER_BASE_URL || await serve()).replace(/\/?$/, '/');
  const url = new URL('papers/ncu1-nanotraps/?lang=zh#figures', base).href;
  const browser = await chromium.launch({headless: true, ...(process.env.PAPER_CHROMIUM_EXECUTABLE ? {executablePath: process.env.PAPER_CHROMIUM_EXECUTABLE} : {})});
  const errors = [];
  async function fresh() {
    const context = await browser.newContext({viewport: {width: 1440, height: 1000}, reducedMotion: 'reduce'});
    const page = await context.newPage();
    page.on('pageerror', error => errors.push(error.message));
    return {context, page};
  }
  try {
    // Cold-cache transitions: decode and compare the rendered bitmaps, not just src or button state.
    {
      const {context, page} = await fresh();
      await page.goto(url, {waitUntil: 'domcontentloaded'});
      const hashes = new Set();
      for (const number of [2, 3, 5, 6]) {
        await choose(page, number); await ready(page, number);
        hashes.add(createHash('sha256').update(await page.locator('#figure-image').screenshot()).digest('hex'));
      }
      assert.equal(hashes.size, 4, 'all four displayed bitmaps differ');
      for (const lang of ['en', 'zh']) {
        await page.locator('[data-atlas-lang="' + lang + '"]').click();
        await ready(page, 6, lang);
      }
      await page.locator('#figure-controls [data-figure="3"]').focus();
      await page.keyboard.press('Enter'); await ready(page, 3);
      assert.equal(await page.locator('#figure-controls [data-figure="3"]').evaluate(button => button === document.activeElement), true);
      for (const width of [1440, 768, 390]) {
        await page.setViewportSize({width, height: 1000});
        for (const lang of ['zh', 'en']) {
          await page.locator('[data-atlas-lang="' + lang + '"]').click();
          for (const number of [2, 3, 5, 6]) {
            await choose(page, number); await ready(page, number, lang);
            assert.ok(await page.evaluate(() => document.documentElement.scrollWidth <= innerWidth + 1), width + ': no horizontal overflow');
          }
          await page.locator('#figures').scrollIntoViewIfNeeded();
          await page.screenshot({path: path.join(screenshots, 'reader-' + width + '-' + lang + '.png')});
        }
      }
      await context.close();
    }
    // A delayed earlier selection must never overwrite a later decoded figure.
    {
      const {context, page} = await fresh();
      const gate = await gateImage(page, 3);
      await page.goto(url, {waitUntil: 'domcontentloaded'}); await ready(page, 2);
      await choose(page, 3); await gate.started; await status(page, 'loading', 3);
      await page.locator('[data-atlas-lang="en"]').click(); await status(page, 'loading', 3, 'en');
      await choose(page, 5); await ready(page, 5, 'en');
      gate.release();
      await page.waitForFunction(() => figureLoads.get(3).status === 'ready');
      await ready(page, 5, 'en');
      await context.close();
    }
    // Failure and retry, including keyboard focus and translated feedback.
    {
      const {context, page} = await fresh();
      const pattern = '**/assets/figure-6.png';
      const abort = route => route.abort();
      await page.route(pattern, abort);
      await page.goto(url, {waitUntil: 'domcontentloaded'}); await ready(page, 2);
      await choose(page, 6); await status(page, 'error', 6);
      await page.locator('[data-atlas-lang="en"]').click(); await status(page, 'error', 6, 'en');
      await page.unroute(pattern, abort);
      await page.locator('#figure-retry').focus(); await page.keyboard.press('Enter');
      await ready(page, 6, 'en');
      assert.equal(await page.locator('#figure-controls [data-figure="6"]').evaluate(button => button === document.activeElement), true, 'retry retains a usable focus target');
      await context.close();
    }
    // A timed-out request finishing late stays an error until an explicit retry.
    {
      const {context, page} = await fresh();
      await page.clock.install();
      const gate = await gateImage(page, 6);
      await page.goto(url, {waitUntil: 'domcontentloaded'}); await ready(page, 2);
      await choose(page, 6); await gate.started; await status(page, 'loading', 6);
      await page.clock.fastForward(30001); await status(page, 'error', 6);
      gate.release();
      await page.waitForFunction(() => figureLoads.get(6).image.complete && figureLoads.get(6).image.naturalWidth > 0);
      await status(page, 'error', 6);
      await page.locator('#figure-retry').click(); await ready(page, 6);
      await context.close();
    }
    assert.deepEqual(errors, [], 'no uncaught browser errors');
    console.log('PASS NCU-1: distinct decoded images; bilingual/keyboard controls; 3 widths; delayed, failed, racing and timed-out loads; retry. Screenshots: ' + screenshots);
  } finally {
    await browser.close();
    if (server) await new Promise(resolve => server.close(resolve));
  }
})().catch(error => { console.error(error); if (server) server.close(); process.exitCode = 1; });
