#!/usr/bin/env node
/* Run with Playwright in NODE_PATH or PAPER_PLAYWRIGHT_MODULE.
 * Optional: PAPER_CHROMIUM_EXECUTABLE, PAPER_BASE_URL, PAPER_QA_DIR.
 * Without PAPER_BASE_URL, serve this repository on an ephemeral local port.
 */
const assert = require('node:assert/strict');
const fs = require('node:fs');
const path = require('node:path');
const os = require('node:os');
const http = require('node:http');
const {chromium} = require(process.env.PAPER_PLAYWRIGHT_MODULE || 'playwright');

const root = path.resolve(__dirname, '..');
const source = JSON.parse(fs.readFileSync(path.join(root, 'references/paper-catalog.json'), 'utf8'));
const screenshots = process.env.PAPER_QA_DIR || path.join(os.tmpdir(), 'paper-catalog-qa');
const clone = value => JSON.parse(JSON.stringify(value));
const delay = ms => new Promise(resolve => setTimeout(resolve, ms));
let server;
async function serve() {
  server = http.createServer((request, response) => {
    let file = path.resolve(root, '.' + decodeURIComponent(new URL(request.url, 'http://localhost').pathname));
    if (file !== root && !file.startsWith(root + path.sep)) { response.writeHead(403).end(); return; }
    try {
      if (fs.statSync(file).isDirectory()) file = path.join(file, 'index.html');
      const types = {'.html': 'text/html; charset=utf-8', '.css': 'text/css', '.js': 'text/javascript', '.json': 'application/json'};
      response.writeHead(200, {'Content-Type': types[path.extname(file)] || 'application/octet-stream'});
      response.end(fs.readFileSync(file));
    } catch (_) { response.writeHead(404).end(); }
  });
  await new Promise(resolve => server.listen(0, '127.0.0.1', resolve));
  return 'http://127.0.0.1:' + server.address().port + '/';
}
async function eventually(check, label) {
  for (let attempt = 0; attempt < 100; attempt++) {
    if (await check()) return;
    await delay(30);
  }
  assert.fail(label);
}

(async () => {
  const base = (process.env.PAPER_BASE_URL || await serve()).replace(/\/?$/, '/');
  fs.mkdirSync(screenshots, {recursive: true});
  const browser = await chromium.launch({headless: true, ...(process.env.PAPER_CHROMIUM_EXECUTABLE ? {executablePath: process.env.PAPER_CHROMIUM_EXECUTABLE} : {})});
  try {
    const context = await browser.newContext({viewport: {width: 1440, height: 1000}, reducedMotion: 'reduce'});
    const page = await context.newPage();
    const errors = [];
    page.on('pageerror', error => errors.push(error.message));
    await page.clock.install({time: new Date('2026-10-28T12:00:00Z')});
    const full = clone(source);
    Object.keys(full.explainers).forEach(pagePath => {
      full.explainers[pagePath] = '2026-10-27';
      (full.explainerUpdates ||= {})[pagePath] = '2026-10-27T12:00:00Z';
    });
    const stale = clone(full);
    stale.themes.find(theme => theme.n === 'Materials').p.forEach(paper => { paper.p = ''; });
    const key = paper => paper.u.toLowerCase().replace(/\/+$/, '');
    const explainerKeys = data => new Set(data.themes.flatMap(theme => theme.p.filter(paper => paper.p).map(key)));
    const explainerRows = data => {
      const keys = explainerKeys(data);
      return data.themes.flatMap(theme => theme.p.filter(paper => keys.has(key(paper))));
    };
    const fullTotal = explainerKeys(full).size;
    const staleTotal = explainerKeys(stale).size;
    const fullRows = explainerRows(full).length;
    const fullKeys = explainerKeys(full);
    const mofRows = full.themes.find(theme => theme.n === 'Materials').p.filter(paper => fullKeys.has(key(paper))).length;
    const outsideMofTotal = new Set(full.themes.filter(theme => theme.n !== 'Materials').flatMap(theme => theme.p.filter(paper => fullKeys.has(key(paper))).map(key))).size;
    const recentTotal = Object.keys(full.explainers).filter(pagePath => full.themes.some(theme => theme.p.some(paper => paper.p === pagePath))).length;
    const zhStatus = (matched, total) => matched === total ? '共 ' + total + ' 篇论文已有讲解' : '当前匹配 ' + matched + ' / 共 ' + total + ' 篇讲解';
    const enStatus = (matched, total) => matched === total ? total + ' papers with explainers' : 'Matching ' + matched + ' / ' + total + ' papers with explainers';
    const defaultStatus = (data, lang = 'zh') => {
      const entries = data.themes.flatMap(theme => theme.p);
      const unique = new Set(entries.map(key)).size;
      const explainers = new Set(entries.filter(paper => paper.p).map(key)).size;
      return lang === 'zh'
        ? '已有讲解 ' + explainers + ' 篇 · 论文 ' + unique + ' 篇（去重） · ' + data.themes.length + ' 个主题共 ' + entries.length + ' 条收录'
        : explainers + ' explainers · ' + unique + ' unique papers · ' + entries.length + ' listings across ' + data.themes.length + ' themes';
    };
    let current = stale;
    let failure = '';
    let requests = 0;
    const urls = [];
    await page.route('**/references/paper-catalog.json*', async route => {
      urls.push(route.request().url());
      const body = failure === 'json' ? '{' : JSON.stringify(current);
      await route.fulfill({status: failure === 'http' ? 500 : 200, contentType: 'application/json', body});
      requests++;
    });
    const status = page.locator('#catalog-status');
    const only = page.locator('#only-explainers');
    const global = page.locator('#catalog-search');
    const clear = page.locator('#clear-search');
    const ai = page.locator('[data-theme="AI / ML"]');
    const mof = page.locator('[data-theme="Materials"]');
    const statusIs = async text => eventually(async () => (await status.textContent()) === text, 'Expected status: ' + text + '; got: ' + await status.textContent());
    const requestAfter = async action => {
      const before = requests;
      await action();
      await eventually(() => requests > before, 'Catalogue refresh was requested');
      await delay(60);
    };
    const focusRefresh = () => requestAfter(() => page.evaluate(() => window.dispatchEvent(new Event('focus'))));
    const rowCount = () => page.locator('#catalog .paper-row').count();
    const screenshotTools = async label => {
      for (const width of [1440, 390]) {
        await page.setViewportSize({width, height: width === 390 ? 844 : 1000});
        await page.locator('.catalog-tools').screenshot({path: path.join(screenshots, 'catalog-tools-' + label + '-' + width + '.png')});
      }
      await page.setViewportSize({width: 1440, height: 1000});
    };
    await page.goto(base + '?qa=catalog');
    await eventually(() => only.isEnabled(), 'Initial catalogue loads');
    assert.equal(await only.isChecked(), false, 'The initial homepage defaults to the complete catalogue');
    await statusIs(defaultStatus(stale));
    current = full;
    await requestAfter(() => page.clock.fastForward(60000));
    await statusIs(defaultStatus(full));
    const fullListings = full.themes.reduce((sum, theme) => sum + theme.p.length, 0);
    assert.equal(await rowCount(), fullListings, 'Default mode renders every theme listing');
    await screenshotTools('default-zh');

    const extraListing = clone(full);
    const duplicate = clone(full.themes.find(theme => theme.n === 'AI / ML').p.find(paper => paper.p === './papers/rag/'));
    duplicate.p = '';
    duplicate.g = 0;
    extraListing.themes.find(theme => theme.n === 'Chemistry & Materials').p.push(duplicate);
    assert.equal(new Set(extraListing.themes.flatMap(theme => theme.p.map(key))).size, new Set(full.themes.flatMap(theme => theme.p.map(key))).size, 'Duplicate fixture adds no new independent paper');
    current = extraListing;
    await requestAfter(() => page.clock.fastForward(60000));
    await statusIs(defaultStatus(extraListing));
    assert.equal(await rowCount(), fullListings + 1, 'Default count adds a cross-theme listing without adding a unique paper or explainer');
    current = full;
    await focusRefresh();
    await statusIs(defaultStatus(full));
    assert.equal(await rowCount(), fullListings, 'Removing the duplicate restores default totals');

    current = stale;
    await requestAfter(() => only.check());
    await statusIs(zhStatus(staleTotal, staleTotal));
    assert.equal(await rowCount(), explainerRows(stale).length, 'Initial stale catalogue omits MOF explainers');
    const documentToken = await page.evaluate(() => (window.__catalogTestDocument = Math.random()));

    await requestAfter(() => only.uncheck());
    current = full;
    await requestAfter(() => only.check());
    await statusIs(zhStatus(fullTotal, fullTotal));
    assert.equal(await rowCount(), fullRows, 'A checkbox refresh picks up newly published MOF explainers');
    assert.equal(await mof.locator('.paper-row').count(), mofRows, 'MOF explainers appear without a reload');
    assert.equal(await mof.evaluate(element => element.open), true, 'Newly populated theme opens');

    await mof.locator('input').fill('this-query-cannot-match-any-paper');
    await statusIs(zhStatus(outsideMofTotal, fullTotal));
    await screenshotTools('matching-' + outsideMofTotal + '-of-' + fullTotal);
    await clear.click();
    await statusIs(zhStatus(fullTotal, fullTotal));
    await screenshotTools('all-' + fullTotal);
    assert.equal(await only.isChecked(), true, 'Clear search keeps the explainer filter');
    assert.equal(await mof.locator('input').inputValue(), '', 'Clear search removes theme queries');
    await global.fill('retrieval');
    const globalCount = await rowCount();
    assert.ok(globalCount > 1 && globalCount < fullRows, 'Global search narrows the explainer catalogue');
    await ai.locator('input').fill('self');
    assert.equal(await rowCount(), 1, 'Theme search combines with the global search');
    await page.locator('#lang-toggle').click();
    await statusIs(enStatus(1, fullTotal));
    assert.equal(await global.inputValue(), 'retrieval', 'Language switching retains global search');
    assert.equal(await ai.locator('input').inputValue(), 'self', 'Language switching retains theme search');

    // Refresh a changed catalogue while an input and a collapsed disclosure are in use.
    const disclosure = ai.locator('.group-toggle').first();
    await disclosure.click();
    await ai.locator('input').focus();
    const state = () => page.evaluate(() => ({
      lang: document.documentElement.lang,
      global: document.querySelector('#catalog-search').value,
      inputs: [...document.querySelectorAll('.theme-search input')].map(input => input.value),
      themes: [...document.querySelectorAll('.theme-menu')].map(theme => theme.open),
      groups: [...document.querySelectorAll('.group-toggle')].map(button => [button.dataset.key, button.getAttribute('aria-expanded')]),
      focusedTheme: document.activeElement.closest('.theme-menu')?.dataset.theme,
      checked: document.querySelector('#only-explainers').checked
    }));
    const beforeTimer = await state();
    const updated = clone(full);
    updated.explainers['./papers/rag/'] = '2026-10-01';
    updated.explainerUpdates['./papers/rag/'] = '2026-10-01T12:00:00Z';
    current = updated;
    await requestAfter(() => page.clock.fastForward(60000));
    assert.deepEqual(await state(), beforeTimer, 'Timer refresh preserves search, filter, language, expansion and focus');
    assert.equal(await page.locator('#recent-list .recent-item').count(), recentTotal - 1, 'Changed catalogue rebuilds the recent list');
    await statusIs(enStatus(1, fullTotal));
    assert.equal(await page.evaluate(() => window.__catalogTestDocument), documentToken, 'Updates preserve the same document');

    await clear.click();
    await statusIs(enStatus(fullTotal, fullTotal));
    const beforeIdentical = await page.locator('#catalog').innerHTML();
    await focusRefresh();
    await focusRefresh();
    assert.equal(await page.locator('#catalog').innerHTML(), beforeIdentical, 'Identical refreshes do not duplicate rows or rebuild controls');
    assert.equal(await rowCount(), fullRows);

    const recentLink = page.locator('#recent-list a').first();
    const recentHref = await recentLink.getAttribute('href');
    await recentLink.focus();
    const focusedRecentHref = () => page.evaluate(() => document.activeElement.closest('#recent-list') ? document.activeElement.getAttribute('href') : null);
    await requestAfter(() => page.clock.fastForward(60000));
    assert.equal(await focusedRecentHref(), recentHref, 'Unchanged timer refresh preserves recent-link focus');
    const changedRecent = clone(updated);
    changedRecent.themes.forEach(theme => theme.p.filter(paper => paper.p && new URL(paper.p, base).pathname === new URL(recentHref, page.url()).pathname).forEach(paper => { paper.t += ' — refreshed'; }));
    current = changedRecent;
    await requestAfter(() => page.clock.fastForward(60000));
    assert.equal(await focusedRecentHref(), recentHref, 'Changed recent markup restores focus to the surviving link');

    // A paper shared across themes should retain its explainer and count only once.
    const shared = clone(updated);
    const sharedPaper = clone(shared.themes.find(theme => theme.n === 'AI / ML').p.find(paper => paper.p === './papers/rag/'));
    sharedPaper.p = '';
    sharedPaper.g = 0;
    shared.themes.find(theme => theme.n === 'Chemistry & Materials').p.push(sharedPaper);
    current = shared;
    await focusRefresh();
    await statusIs(enStatus(fullTotal, fullTotal));
    assert.equal(await rowCount(), fullRows + 1, 'Shared paper appears in both themes');
    const sharedHref = new URL(await page.locator('[data-theme="Chemistry & Materials"] .paper-row .paper-actions a').last().getAttribute('href'), page.url());
    assert.ok(sharedHref.pathname.endsWith('/papers/rag/'), 'Shared listing reuses its explainer');
    assert.equal(sharedHref.searchParams.get('lang'), 'en', 'Shared explainer link carries the current language');
    current = updated;
    await focusRefresh();
    assert.equal(await rowCount(), fullRows, 'Rebuilding indexes removes obsolete shared listings');

    const beforeFailure = await page.locator('#catalog').innerHTML();
    for (failure of ['http', 'json']) {
      await focusRefresh();
      assert.equal(await page.locator('#catalog').innerHTML(), beforeFailure, failure + ' failure preserves the working catalogue');
      await statusIs(enStatus(fullTotal, fullTotal));
    }
    failure = '';
    for (const malformed of ['missing', 'number']) {
      current = clone(updated);
      if (malformed === 'missing') delete current.themes[0].p[0].m;
      else current.themes[0].p[0].m = 2026;
      await focusRefresh();
      assert.equal(await page.locator('#catalog').innerHTML(), beforeFailure, 'Valid JSON with ' + malformed + ' paper metadata preserves the working catalogue');
      await statusIs(enStatus(fullTotal, fullTotal));
    }
    current = full;
    await focusRefresh();
    assert.equal(await page.locator('#recent-list .recent-item').count(), recentTotal, 'Next successful refresh recovers recent entries');
    await page.evaluate(() => Object.defineProperty(document, 'hidden', {configurable: true, get: () => true}));
    const whileHidden = requests;
    await page.clock.fastForward(60000);
    assert.equal(requests, whileHidden, 'Timer skips background pages');
    await requestAfter(() => page.evaluate(() => {
      Object.defineProperty(document, 'hidden', {configurable: true, get: () => false});
      document.dispatchEvent(new Event('visibilitychange'));
    }));
    assert.ok(urls.every(url => /^\d+$/.test(new URL(url).searchParams.get('v'))), 'Every refresh uses a versioned URL');
    assert.ok(new Set(urls).size > 1, 'Later refreshes bypass earlier request URLs');
    assert.equal(new URL(page.url()).searchParams.get('qa'), 'catalog', 'Refreshes and controls retain unrelated URL parameters');

    for (const width of [1440, 768, 390]) {
      await page.setViewportSize({width, height: width === 390 ? 844 : 1000});
      for (const lang of ['zh', 'en']) {
        if (await page.locator('html').getAttribute('lang') !== (lang === 'zh' ? 'zh-CN' : 'en')) await page.locator('#lang-toggle').click();
        const geometry = await page.evaluate(() => ({viewport: innerWidth, document: document.documentElement.scrollWidth}));
        assert.ok(geometry.document <= geometry.viewport + 1, lang + '/' + width + ': no document overflow: ' + JSON.stringify(geometry));
        assert.equal(await rowCount(), fullRows, 'Responsive layout retains all explainers');
        await page.screenshot({path: path.join(screenshots, 'catalog-' + width + '-' + lang + '.png'), fullPage: true});
        await requestAfter(() => only.uncheck());
        await statusIs(defaultStatus(full, lang));
        assert.equal(await rowCount(), fullListings, 'Default responsive layout retains every listing');
        const defaultGeometry = await page.evaluate(() => ({viewport: innerWidth, document: document.documentElement.scrollWidth}));
        assert.ok(defaultGeometry.document <= defaultGeometry.viewport + 1, 'default/' + lang + '/' + width + ': no document overflow: ' + JSON.stringify(defaultGeometry));
        await page.locator('.catalog-tools').screenshot({path: path.join(screenshots, 'catalog-tools-default-' + lang + '-' + width + '.png')});
        await requestAfter(() => only.check());
        await statusIs(lang === 'zh' ? zhStatus(fullTotal, fullTotal) : enStatus(fullTotal, fullTotal));
      }
    }
    assert.deepEqual(errors, [], 'No uncaught browser errors');
    await context.close();

    const retryContext = await browser.newContext({reducedMotion: 'reduce'});
    const retryPage = await retryContext.newPage();
    const retryErrors = [];
    retryPage.on('pageerror', error => retryErrors.push(error.message));
    await retryPage.clock.install({time: new Date('2026-10-28T12:00:00Z')});
    let retryRequests = 0;
    let succeed = false;
    let release;
    const gate = new Promise(resolve => { release = resolve; });
    await retryPage.route('**/references/paper-catalog.json*', async route => {
      retryRequests++;
      if (succeed) await gate;
      await route.fulfill({status: succeed ? 200 : 500, contentType: 'application/json', body: JSON.stringify(full)});
    });
    await retryPage.goto(base + '?explainers=1&lang=zh');
    await eventually(async () => (await retryPage.locator('#catalog-status').textContent()) === '论文目录加载失败', 'Initial HTTP failure is reported');
    await retryPage.evaluate(() => Object.defineProperty(document, 'hidden', {configurable: true, get: () => true}));
    const failedRequests = retryRequests;
    await retryPage.clock.fastForward(60000);
    assert.equal(retryRequests, failedRequests, 'Failed bootstrap does not retry in the background');
    succeed = true;
    await retryPage.evaluate(() => {
      Object.defineProperty(document, 'hidden', {configurable: true, get: () => false});
      document.dispatchEvent(new Event('visibilitychange'));
      window.dispatchEvent(new Event('focus'));
      window.dispatchEvent(new Event('focus'));
    });
    await eventually(() => retryRequests > failedRequests, 'Restoring visibility retries bootstrap immediately');
    await delay(60);
    assert.equal(retryRequests, failedRequests + 1, 'Concurrent foreground signals share the initial retry');
    release();
    await eventually(() => retryPage.locator('#only-explainers').isEnabled(), 'Foreground retry successfully initializes the catalogue');
    assert.equal(await retryPage.locator('#catalog-status').textContent(), zhStatus(fullTotal, fullTotal));
    assert.equal(await retryPage.locator('.theme-search input').count(), full.themes.length, 'Successful retry initializes one search input per theme');
    await retryPage.clock.fastForward(60000);
    await delay(60);
    assert.equal(await retryPage.locator('.theme-search input').count(), full.themes.length, 'Subsequent timer updates do not initialize a second set of inputs');
    assert.deepEqual(retryErrors, [], 'Bootstrap recovery has no uncaught errors');
    await retryContext.close();
    console.log('PASS catalogue: default explainer/unique/listing counts, ' + staleTotal + '→' + fullTotal + ' live update, combined searches/counts, clear, language/state, timer/focus/visibility refresh, recent-link focus, shared papers, invalid-data/failure recovery, bootstrap retry, 3 widths in both modes');
    console.log('PASS screenshots: ' + screenshots);
  } finally {
    await browser.close();
    if (server) await new Promise(resolve => server.close(resolve));
  }
})().catch(error => { console.error(error); if (server) server.close(); process.exitCode = 1; });
