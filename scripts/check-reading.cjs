/* Additional reading/accessibility/image checks. Run with the same Playwright environment as check-explainers.cjs. */
const {chromium}=require(process.env.PAPER_PLAYWRIGHT_MODULE||'playwright');
const fs=require('node:fs'),path=require('node:path'),http=require('node:http'),os=require('node:os'),assert=require('node:assert/strict');
const root=path.resolve(__dirname,'..');
const slugs=fs.readdirSync(path.join(root,'papers')).filter(slug=>fs.existsSync(path.join(root,'papers',slug,'index.html'))).sort();
const out=process.env.PAPER_QA_DIR||path.join(os.tmpdir(),'paper-reading-qa');fs.mkdirSync(out,{recursive:true});
(async()=>{
 const server=http.createServer((req,res)=>{let f=path.resolve(root,'.'+new URL(req.url,'http://localhost').pathname);if(!f.startsWith(root+path.sep)&&f!==root)return res.writeHead(403).end();try{if(fs.statSync(f).isDirectory())f=path.join(f,'index.html');res.setHeader('Content-Type',({'.html':'text/html; charset=utf-8','.js':'text/javascript','.css':'text/css','.png':'image/png'})[path.extname(f)]||'application/octet-stream');res.end(fs.readFileSync(f));}catch{res.writeHead(404).end();}});
 await new Promise(r=>server.listen(0,'127.0.0.1',r));const base='http://127.0.0.1:'+server.address().port;
 const b=await chromium.launch({headless:true,...(process.env.PAPER_CHROMIUM_EXECUTABLE?{executablePath:process.env.PAPER_CHROMIUM_EXECUTABLE}:{})});let sections=0;
 try{
 for(const slug of slugs){
  const p=await b.newPage({reducedMotion:'reduce'});const errors=[];p.on('pageerror',e=>errors.push(e.message));p.on('response',r=>{if(r.status()>=400&&!r.url().endsWith('favicon.ico'))errors.push(r.status()+' '+r.url());});
  for(const width of [1440,768,390])for(const lang of ['zh','en']){
   await p.setViewportSize({width,height:width===390?844:1000});await p.goto(`${base}/papers/${slug}/?lang=${lang}`);
   const depth=p.locator('.atlas-depth button');if(await depth.count())await depth.last().click();
   await p.locator('main details').evaluateAll(es=>es.forEach(e=>e.open=true));
   await p.locator('img[data-atlas-figure]').evaluateAll(es=>es.forEach(e=>e.loading='eager'));
   await p.waitForFunction(()=>[...document.querySelectorAll('img[data-atlas-figure]')].every(e=>e.dataset.loadState==='ready'));
   assert.ok(await p.evaluate(()=>document.documentElement.scrollWidth<=innerWidth+1),slug+' overflow');
   assert.equal(await p.locator('[aria-label="undefined"]').count(),0,slug+' invalid ARIA');
   const links=await p.locator('main a[href^="#"]').evaluateAll(es=>es.map(e=>e.getAttribute('href')).filter(s=>s.length>1));
   for(const link of links)assert.ok(await p.evaluate(id=>!!document.getElementById(decodeURIComponent(id.slice(1))),link),slug+' anchor '+link);
   await p.screenshot({path:path.join(out,`${slug}-${width}-${lang}-full.png`),fullPage:true});
   if(width===390&&lang==='en'){
    for(const section of await p.locator('main section[id], main header.hero, main div.hero').all())if(await section.isVisible()){
     await section.screenshot({style:'.atlas-header,.atlas-skip { visibility: hidden !important; }',path:path.join(out,`${slug}-section-${sections++}.png`)});
    }
   }
  }
  await p.goto(`${base}/papers/${slug}/?lang=en`);await p.keyboard.press('Tab');
  assert.equal(await p.evaluate(()=>document.activeElement.className),'atlas-skip',slug+' skip focus');await p.keyboard.press('Enter');
  assert.equal(await p.evaluate(()=>document.activeElement.tagName),'MAIN',slug+' skip target');
  assert.deepEqual(errors,[],slug+' JS errors');await p.close();console.log('PASS reading '+slug);
 }
 const p=await b.newPage();await p.goto(base+'/papers/calf20-flexibility/?lang=en');
 for(const group of ['temp-controls','condition-controls','method-flow','flex-controls','rh-controls']){
  const btn=p.locator('#'+group+' button').last();await btn.focus();await p.keyboard.press('Enter');assert.equal(await btn.evaluate(e=>document.activeElement===e),true,group+' retains focus');assert.equal(await btn.getAttribute('aria-pressed'),'true');
 }
 await p.locator('[data-depth="2"]').click();assert.equal(await p.locator('.atlas-depth [aria-pressed="true"]').innerText(),'Research');
 await p.goto(base+'/papers/ln-local-coordination/?lang=en');
 for(let i=0;i<3;i++){await p.locator('[data-action="next"]').focus();await p.keyboard.press('Enter')}
 assert.notEqual(await p.evaluate(()=>document.activeElement.tagName),'BODY','last step focus');
 await p.close();
 for(const slug of ['ln-local-coordination','lanm-protein-process']){
  const p=await b.newPage();let fail=true;await p.route('**/*.png',r=>fail?r.abort():r.continue());await p.goto(`${base}/papers/${slug}/?lang=en`);
  await p.locator('main details').evaluateAll(es=>es.forEach(e=>e.open=true));await p.locator('img[data-atlas-figure]').evaluateAll(es=>es.forEach(e=>e.loading='eager'));
  await p.waitForFunction(()=>[...document.querySelectorAll('img[data-atlas-figure]')].every(e=>e.dataset.loadState==='error'));
  assert.ok(await p.getByText('Image could not load. Please retry.',{exact:true}).count());
  await p.locator('[data-atlas-lang="zh"]').click();assert.ok(await p.getByText('图片加载失败，请重试。',{exact:true}).count());
  fail=false;for(const retry of await p.locator('.atlas-image-status button').all())await retry.click();
  await p.waitForFunction(()=>[...document.querySelectorAll('img[data-atlas-figure]')].every(e=>e.dataset.loadState==='ready'));
  await p.close();console.log('PASS image failure/retry '+slug);
 }
 // NCU-1 owns its image lifecycle; scripts/check-ncu1-reader.cjs covers its failure and race paths.
 console.log(`PASS reading checks; ${sections} section captures; ${out}`);
 }finally{await b.close();await new Promise(r=>server.close(r));}
})().catch(e=>{console.error(e);process.exitCode=1});
