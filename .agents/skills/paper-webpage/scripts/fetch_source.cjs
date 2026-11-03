#!/usr/bin/env node
/*
Fetch a paper's full-text page, PDF or SI through a real browser session, for
publishers whose Cloudflare checks reject curl even on an entitled network.

Usage:
  PAPER_PLAYWRIGHT_MODULE=/abs/path/to/playwright \
  node .agents/skills/paper-webpage/scripts/fetch_source.cjs <landingUrl> <outDir> [url=file ...]

  CHROME=1      use the installed Google Chrome with a persistent profile
                (~/paper-sources/.chrome-profile); needed for ACS and ScienceDirect
  HEADED=1      show the bundled Chromium window
  WAIT_TEXT=..  keep waiting until the landing page contains this text

The landing page is saved as <outDir>/landing.html (entitled publishers include
the full text). Each url=file is fetched inside the page with its cookies and,
if the server only offers a download, saved from the browser download.
*/
const {chromium} = require(process.env.PAPER_PLAYWRIGHT_MODULE || 'playwright');
const fs = require('node:fs'), path = require('node:path'), os = require('node:os');
const [landing, outDir, ...files] = process.argv.slice(2);
if (!landing || !outDir) { console.error('usage: fetch_source.cjs <landingUrl> <outDir> [url=file ...]'); process.exit(2); }

(async () => {
  fs.mkdirSync(outDir, {recursive: true});
  const args = ['--disable-blink-features=AutomationControlled'];
  const browser = process.env.CHROME === '1' ? null : await chromium.launch({headless: process.env.HEADED !== '1', args});
  const context = browser
    ? await browser.newContext({acceptDownloads: true, viewport: {width: 1280, height: 900},
        userAgent: 'Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/130.0.0.0 Safari/537.36'})
    : await chromium.launchPersistentContext(path.join(os.homedir(), 'paper-sources', '.chrome-profile'),
        {channel: 'chrome', headless: false, acceptDownloads: true, viewport: {width: 1280, height: 900}, args});
  await context.addInitScript(() => Object.defineProperty(navigator, 'webdriver', {get: () => undefined}));
  const page = context.pages()[0] || await context.newPage();
  await page.goto(landing, {waitUntil: 'domcontentloaded', timeout: 60000});
  const waitText = process.env.WAIT_TEXT;
  for (let i = 0; i < 150; i++) {
    let title = '', html = '';
    try { title = await page.title(); html = waitText ? await page.content() : ''; } catch {}
    if (!/just a moment|attention required/i.test(title) && (!waitText || html.includes(waitText))) break;
    await page.waitForTimeout(1000);
  }
  await page.waitForTimeout(2000);
  console.log('landing:', await page.title());
  fs.writeFileSync(path.join(outDir, 'landing.html'), await page.content());

  for (const spec of files) {
    const cut = spec.lastIndexOf('='), url = spec.slice(0, cut), target = path.join(outDir, spec.slice(cut + 1));
    const [status, type, b64] = await page.evaluate(async u => {
      try {
        const r = await fetch(u, {credentials: 'include'});
        const bytes = new Uint8Array(await r.arrayBuffer());
        let s = ''; for (let i = 0; i < bytes.length; i += 0x8000) s += String.fromCharCode(...bytes.subarray(i, i + 0x8000));
        return [r.status, r.headers.get('content-type') || '', btoa(s)];
      } catch (e) { return [0, String(e), '']; }
    }, url);
    if (status === 200 && !/text\/html/.test(type)) {
      fs.writeFileSync(target, Buffer.from(b64, 'base64'));
      console.log('fetched', status, type.slice(0, 40), fs.statSync(target).size, target);
      continue;
    }
    try {
      const download = page.waitForEvent('download', {timeout: 90000});
      page.goto(url, {timeout: 90000}).catch(() => {});
      await (await download).saveAs(target);
      console.log('downloaded', fs.statSync(target).size, target);
    } catch (e) { console.log('FAILED', status, type.slice(0, 40), url); }
  }
  await (browser ? browser.close() : context.close());
})().catch(e => { console.error(e); process.exit(1); });
