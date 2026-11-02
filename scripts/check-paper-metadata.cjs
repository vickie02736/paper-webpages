#!/usr/bin/env node
'use strict';
const assert = require('node:assert/strict');
const fs = require('node:fs');
const path = require('node:path');
const http = require('node:http');
const {chromium} = require(process.env.PAPER_PLAYWRIGHT_MODULE || 'playwright');
const root = path.resolve(__dirname, '..');
const catalog = JSON.parse(fs.readFileSync(path.join(root, 'references/paper-catalog.json'), 'utf8'));
const clone = value => JSON.parse(JSON.stringify(value));
const fixture = {
  authors: [{name:'First Author', affiliations:['1']}, {name:'Zöe Hiddenauthor', affiliations:['2'], corresponding:true}],
  affiliations: [{id:'1', name:'Massachusetts Institute of Technology', aliases:['MIT', '麻省理工学院']}, {id:'2', name:'University College London', aliases:['UCL', '伦敦大学学院']}],
  dates: {published:{value:'2024-02', status:'verified'}, accepted:{value:'2023-12-12', status:'verified'}, preprint:{value:'2023', status:'verified'}},
  sources: [{url:'https://example.org/paper', fields:['authors','affiliations'], locator:'Fixture'}]
};
let server;
(async () => {
  server = http.createServer((req, res) => {
    const file = path.resolve(root, '.' + new URL(req.url, 'http://localhost').pathname);
    if (!file.startsWith(root + '/') && file !== root) return res.writeHead(403).end();
    try {
      const target = fs.statSync(file).isDirectory() ? path.join(file, 'index.html') : file;
      const types = {'.html':'text/html', '.js':'text/javascript', '.css':'text/css', '.json':'application/json'};
      res.setHeader('Content-Type', (types[path.extname(target)] || 'application/octet-stream') + '; charset=utf-8');
      res.end(fs.readFileSync(target));
    } catch (_) { res.writeHead(404).end(); }
  });
  await new Promise(resolve => server.listen(0, '127.0.0.1', resolve));
  const base = 'http://127.0.0.1:' + server.address().port;
  const browser = await chromium.launch({headless:true, ...(process.env.PAPER_CHROMIUM_EXECUTABLE ? {executablePath:process.env.PAPER_CHROMIUM_EXECUTABLE} : {})});
  try {
    const page = await browser.newPage();
    const errors = [];
    page.on('pageerror', e => errors.push(e.message));
    const data = clone(catalog);
    const paper = data.themes[0].p[0];
    data.paperMetadata[paper.u] = fixture;
    await page.route('**/references/paper-catalog.json*', route => route.fulfill({json:data}));
    await page.goto(base + '/');
    const search = page.locator('#catalog-search');
    const rows = page.locator('.paper-row');
    for (const query of ['Hiddenauthor', 'zoe hiddenauthor', 'MIT', '麻省理工学院', 'UCL', '伦敦大学学院', 'Hiddenauthor MIT']) {
      await search.fill(query);
      await page.waitForTimeout(50);
      assert(await rows.filter({has:page.locator('.paper-title', {hasText:paper.t})}).count(), query + ': matches the fixture');
    }
    await search.fill('Hiddenauthor');
    const row = rows.first();
    const details = row.locator('.atlas-bibliography details');
    await details.locator('summary').click();
    assert(await details.getAttribute('open') !== null);
    await details.locator('summary').focus();
    await page.locator('#lang-toggle').evaluate(el => el.click());
    assert(await details.getAttribute('open') !== null, 'Language change retains expansion');
    assert(await details.locator('summary').evaluate(el => el === document.activeElement), 'Language change retains focus');
    assert((await row.locator('.atlas-biblio-dates').textContent()).includes('Published 2024-02'));
    assert((await row.locator('.atlas-biblio-dates').textContent()).includes('Accepted 2023-12-12'));
    assert((await row.locator('.atlas-biblio-dates').textContent()).includes('Preprint posted 2023'));
    await page.locator('[data-theme="' + data.themes[0].id + '"] .theme-search input').fill('伦敦大学学院');
    assert(await rows.count(), 'Theme search includes affiliations');
    data.paperMetadata[paper.u] = {...clone(fixture), authors:[...fixture.authors, {name:'Refreshed Author', affiliations:['1']}]};
    await details.locator('summary').focus();
    await page.evaluate(() => window.dispatchEvent(new Event('focus')));
    await page.waitForTimeout(300);
    assert((await row.locator('.atlas-biblio-authors').textContent()).includes('Refreshed Author'), 'Automatic refresh updates metadata');
    assert(await details.getAttribute('open') !== null, 'Automatic refresh retains expansion');
    assert(await details.locator('summary').evaluate(el => el === document.activeElement), 'Automatic refresh retains bibliography focus');
    await page.locator('#only-explainers').check();
    assert.equal(await rows.count(), 0, 'Author search combines with explainer filter');
    await page.locator('#only-explainers').uncheck();
    const out = process.env.PAPER_QA_DIR || '/tmp/paper-metadata-qa';
    fs.mkdirSync(out, {recursive:true});
    for (const width of [1440,768,390]) {
      await page.setViewportSize({width,height:1000});
      assert(await page.evaluate(() => document.documentElement.scrollWidth <= innerWidth + 1), 'Homepage overflow ' + width);
      await row.screenshot({path:path.join(out, 'metadata-home-' + width + '.png')});
    }
    await page.locator('[data-theme="' + data.themes[0].id + '"] .theme-search input').fill('');
    for (const [query, source] of [
      ['Douwe Kiela', '6b493230205f780e1bc26945df7481e5'],
      ['University College London', '6b493230205f780e1bc26945df7481e5'],
      ['伦敦大学学院', '6b493230205f780e1bc26945df7481e5'],
      ['UCL', '6b493230205f780e1bc26945df7481e5'],
      ['桑迪亚国家实验室', '10.1021/acsami.4c09445'],
      ['SNL', '10.1021/acsami.4c09445']
    ]) {
      await search.fill(query);
      assert(await rows.locator('.paper-actions a').evaluateAll((links, source) => links.some(a => a.href.includes(source)), source), 'Real catalogue search: ' + query);
    }
    await search.fill('');
    await page.setViewportSize({width:1440,height:1000});
    await page.screenshot({path:path.join(out,'metadata-real-home-1440.png')});
    // All explainers must mount exactly one component; rebuilt pages retain its state.
    for (const slug of fs.readdirSync(path.join(root,'papers')).filter(s => fs.existsSync(path.join(root,'papers',s,'index.html')))) {
      await page.goto(base + '/papers/' + slug + '/?lang=en');
      const documentPaths=(catalog.collections||[]).flatMap(c=>c.items).filter(i=>i.type==='document').map(i=>i.path);
      if(documentPaths.includes('./papers/'+slug+'/')){assert.equal(await page.locator('main .atlas-bibliography').count(),0,slug+': documentation must not invent a byline');continue;}
      const panel = page.locator('main > .atlas-bibliography, main .hero .atlas-bibliography');
      assert.equal(await page.locator('main .atlas-bibliography').count(), 1, slug + ': one byline');
      const summary = panel.locator('summary');
      await summary.click();
      await summary.focus();
      await page.locator('[data-atlas-lang="zh"]').evaluate(el => el.click());
      await page.waitForTimeout(60);
      assert(await panel.locator('details').getAttribute('open') !== null, slug + ': expansion retained');
      assert(await panel.locator('summary').evaluate(el => el === document.activeElement), slug + ': focus retained');
      // Native summary supports keyboard activation, including on pages rebuilding main.
      await panel.locator('summary').press('Space');
      assert.equal(await panel.locator('details').getAttribute('open'), null, slug + ': keyboard closes');
      await panel.locator('summary').press('Enter');
      assert(await panel.locator('details').getAttribute('open') !== null, slug + ': keyboard opens');
      for (const button of await page.locator('.atlas-depth button').all()) {
        await button.focus();
        await button.press('Enter');
        await page.waitForTimeout(30);
        assert.equal(await page.locator('main .atlas-bibliography').count(), 1, slug + ': one byline after depth');
        assert(await panel.locator('details').getAttribute('open') !== null, slug + ': depth retains expansion');
        assert(await button.evaluate(el => el === document.activeElement), slug + ': depth retains keyboard focus');
      }
      if (await page.locator('[data-atlas-lang="both"]').count()) {
        await page.locator('[data-atlas-lang="both"]').evaluate(el => el.click());
        assert((await panel.locator('.atlas-biblio-dates').textContent()).includes('发表 / Published'), slug + ': parallel date labels');
        assert(await panel.locator('details').getAttribute('open') !== null, slug + ': parallel retains expansion');
      }
      for (const width of [1440,768,390]) {
        await page.setViewportSize({width,height:1000});
        assert(await page.evaluate(() => document.documentElement.scrollWidth <= innerWidth + 1), slug + ': overflow ' + width);
      }
      if (['ncu1-nanotraps','frontier-cs','ln-local-coordination','rag'].includes(slug)) await panel.screenshot({path:path.join(out, 'metadata-' + slug + '.png')});
    }
    // Long names, safe escaping, and missing dates do not manufacture dates or HTML.
    const edge = await page.evaluate(() => {
      const m = {authors:[{name:'<img src=x onerror=alert(1)>', affiliations:[]}], affiliations:[], dates:{published:{status:'unverified'}, accepted:{status:'notDisclosed'}}};
      const host = document.createElement('div'); host.innerHTML = PaperBibliography.html(m,'en','edge');
      return {images:host.querySelectorAll('img').length, text:host.textContent, times:host.querySelectorAll('time').length};
    });
    assert.equal(edge.images,0); assert.equal(edge.times,0); assert(edge.text.includes('Not disclosed') && edge.text.includes('Unverified'));
    assert.deepEqual(errors, []);
    console.log('PASS metadata search, dates, refresh, focus, safe rendering and all explainer mounts; screenshots: ' + out);
  } finally { await browser.close(); }
})().catch(error => { console.error(error); process.exitCode = 1; }).finally(() => server?.close());
