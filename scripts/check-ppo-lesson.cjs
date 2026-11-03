#!/usr/bin/env node
'use strict';
const assert=require('node:assert/strict'),fs=require('node:fs'),path=require('node:path');
const P=require('../assets/ppo-lesson.js'),M=require('../assets/verl-math.js');
const near=(a,b)=>assert(Math.abs(a-b)<1e-10,`${a} != ${b}`);
// Expected cases independently evaluated from PPO Eq.7 and Figure 1.
for(const [r,a,obj,slope] of [[1.5,1,1.2,0],[.5,1,.5,1],[.5,-1,-.8,0],[1.5,-1,-1.5,-1],[1,0,0,0]]){
 const t=P.clipTerms(r,a,.2);near(t.objective,obj);near(t.slope,slope);near(M.ppo(r,a,.2),obj);
}
for(const a of [-1,1]){
 assert.equal(P.clipTerms(a>0?1.2:.8,a,.2).slope,null);
 near(P.clipTerms(a>0?.8:1.2,a,.2).slope,a);
}
for(const eps of [.05,.2,.5])for(const a of [-2,-.1,0,.1,2])for(const r of [.05,.5,1-eps,1,1+eps,1.8,2]){
 near(P.clipTerms(r,a,eps).objective,M.ppo(r,a,eps));
 assert(P.clipTerms(r,a,eps).objective<=r*a+1e-10);
}
const R=[0,0,1],V=[.4,.5,.6,0],g=P.gae(R,V,.9,.8);
g.deltas.forEach((x,i)=>near(x,[.05,.04,.4][i]));g.advantages.forEach((x,i)=>near(x,[.28616,.328,.4][i]));
P.gae(R,V,.9,0).advantages.forEach((x,i)=>near(x,g.deltas[i]));
P.gae(R,V,.9,1).advantages.forEach((x,i)=>near(x,[.41,.4,.4][i]));
// At lambda=1, compare against discounted return plus final bootstrap, not the recurrence.
for(const gamma of [0,.9,1]){
 const values=[.4,.5,.6,.7];
 P.gae(R,values,gamma,1).advantages.forEach((x,t)=>near(x,R.slice(t).reduce((s,r,l)=>s+gamma**l*r,0)+gamma**(R.length-t)*values.at(-1)-values[t]));
}
assert.throws(()=>P.gae([1],[0],.9,.8));
const entry=require('../references/verl-explainers.json').find(x=>x.slug==='ppo');
for(const blocks of Object.values(entry.lesson))for(const b of blocks){assert(b.title.zh&&b.title.en);for(const p of b.paragraphs)assert(p.zh&&p.en);}
console.log('PASS PPO lesson numerical branches, kinks, GAE endpoints, bootstrap identity and bilingual manuscript.');
if(process.argv.includes('--data-only'))process.exit(0);
const {chromium}=require(process.env.PAPER_PLAYWRIGHT_MODULE||'playwright');
const base=process.env.PAPER_BASE_URL||'http://127.0.0.1:8876/';
const out=process.env.PAPER_QA_DIR||'/tmp/ppo-lesson/qa';fs.mkdirSync(out,{recursive:true});
(async()=>{const browser=await chromium.launch({headless:true});try{
 const page=await browser.newPage(),errors=[];page.on('pageerror',e=>errors.push(e.message));page.on('requestfailed',r=>errors.push(r.url()));
 const set=async(id,value)=>page.locator('#'+id).evaluate((e,v)=>{e.value=String(v);e.dispatchEvent(new Event('input',{bubbles:true}));},value);
 await page.goto(base+'papers/ppo/?lang=zh');
 assert(await page.locator('#ppo-star-a').isVisible());
 assert(!(await page.locator('#ppo-ratio').isVisible()));
 assert(!(await page.locator('#ppo-gae').isVisible()));
 await page.locator('[data-ppo-depth="mechanism"]').focus();
 await page.locator('[data-ppo-depth="mechanism"]').press('Enter');
 assert(await page.locator('#ppo-ratio').isVisible());
 assert.equal(await page.locator('[data-depth="mechanism"]').getAttribute('aria-pressed'),'true');
 await page.locator('#ppo-star-a .ppo-prose-details summary').click();
 await page.locator('[data-ppo-depth="intuition"]').focus();
 await page.locator('[data-ppo-depth="intuition"]').press('Space');
 assert(!(await page.locator('#ppo-ratio').isVisible()));
 assert(await page.locator('#ppo-star-a .ppo-prose-details').evaluate(e=>e.open));
 await page.locator('[data-atlas-lang="en"]').evaluate(e=>e.click());
 assert(await page.locator('[data-ppo-depth="intuition"]').evaluate(e=>e===document.activeElement));
 assert((await page.locator('[data-depth="intuition"]').getAttribute('title')).includes('STAR'));
 assert(await page.locator('#ppo-star-a .ppo-prose-details').evaluate(e=>e.open));
 await page.locator('[data-atlas-lang="zh"]').click();
 await page.locator('[data-depth="mechanism"]').click();
 await page.locator('[data-ppo-step="3"]').click();assert((await page.locator('#ppo-step-detail').innerText()).includes('K'));
 await page.locator('[data-depth="mechanism"]').click();assert(await page.locator('#ppo-gae-lab').isVisible());assert(!(await page.locator('#ppo-gradient').isVisible()));
 assert((await page.locator('#ppo-gae-results').innerText()).includes('0.28616'));
 await set('ppo-lambda',0);assert((await page.locator('#ppo-gae-results').innerText()).includes('0.05'));
 await page.locator('#ppo-gae-reset').click();
 await page.locator('#ppo-lambda').focus();await page.locator('#ppo-lambda').press('ArrowRight');assert.equal(await page.locator('#ppo-lambda').inputValue(),'0.81');
 await page.locator('[data-ppo-preset="2"]').click();assert((await page.locator('#lab-results').innerText()).includes('-0.8'));
 await page.locator('#a').focus();await page.locator('[data-atlas-lang="en"]').evaluate(e=>e.click());assert.equal(await page.locator('#a').inputValue(),'-1');assert.equal(await page.locator('#a').evaluate(e=>e===document.activeElement),true);assert.equal(await page.locator('#ppo-lambda').inputValue(),'0.81');assert((await page.locator('#ppo-step-detail').innerText()).includes('minibatches'));
 await page.locator('[data-depth="research"]').click();await page.locator('#ppo-check-min summary').click();
 await page.locator('[data-atlas-lang="zh"]').click();assert(await page.locator('#ppo-check-min').evaluate(e=>e.open));
 for(const [r,a,text] of [[1.5,1,'1.2'],[.5,1,'0.5'],[.5,-1,'-0.8'],[1.5,-1,'-1.5'],[1,0,'0']]){await set('r',r);await set('a',a);assert.equal((await page.locator('#lab-results .metric strong').allTextContents())[0],text);}
 await set('r',1.2);await set('a',1);assert((await page.locator('#lab-results').innerText()).includes('边界不可导'));
 await page.locator('#reset-lab').click();assert.equal(await page.locator('#r').inputValue(),'1.4');
 await page.setViewportSize({width:390,height:844});
 await page.locator('#ppo-curve').focus();await page.locator('#ppo-curve').evaluate(e=>e.scrollLeft=120);
 await page.locator('[data-atlas-lang="en"]').evaluate(e=>e.click());assert(await page.locator('#ppo-curve').evaluate(e=>e===document.activeElement&&e.scrollLeft===120));
 await page.locator('#ppo-gae-table').focus();await page.locator('#ppo-gae-table').evaluate(e=>e.scrollLeft=90);
 await page.locator('[data-atlas-lang="zh"]').evaluate(e=>e.click());assert(await page.locator('#ppo-gae-table').evaluate(e=>e===document.activeElement&&e.scrollLeft===90));
 for(const width of [1440,768,390])for(const lang of ['zh','en']){
  await page.setViewportSize({width,height:1000});await page.goto(base+'papers/ppo/?lang='+lang);
  for(const depth of ['intuition','mechanism','research']){
   await page.locator(`[data-depth="${depth}"]`).click();
   assert(await page.evaluate(()=>document.documentElement.scrollWidth<=innerWidth+1),`overflow ${width} ${lang} ${depth}`);
   assert(await page.locator('#ppo-gradient').isVisible()=== (depth==='research'));
   assert(await page.locator('#ppo-ratio').isVisible()===(depth!=='intuition'));
   assert(await page.locator('#ppo-protocol').isVisible()===(depth==='research'));
   assert(await page.locator('#ppo-limits-map').isVisible());
   assert.equal(await page.locator(`[data-ppo-depth="${depth}"]`).getAttribute('aria-pressed'),'true');
  }
  for(const details of await page.locator('main details').all())await details.evaluate(e=>e.open=true);
  await page.screenshot({path:path.join(out,`${width}-${lang}-full.png`),fullPage:true});
  for(const id of ['ppo-loop','ppo-min','ppo-gae-lab','lab','ppo-atari']){
   await page.locator('#'+id).scrollIntoViewIfNeeded();await page.locator('#'+id).screenshot({style:'.atlas-header,.atlas-skip { visibility:hidden !important; }',path:path.join(out,`${width}-${lang}-${id}.png`)});
  }
  for(const link of await page.locator('.atlas-nav a').all()){await link.click();const id=(await link.getAttribute('href')).split('#')[1];assert(await page.locator('#'+id).count()===1);}
  assert(!/NaN|undefined|Infinity/.test(await page.locator('#lab-results').innerText()));
 }
 // Previously cached PPO markup must still work with the refreshed shared runtime.
 const legacy=await browser.newPage();const oldHtml=fs.readFileSync(path.resolve(__dirname,'../papers/ppo/index.html'),'utf8').replace('<script src="../../assets/ppo-lesson.js"></script>','').replace(/(<script id="page-data" type="application\/json">)([\s\S]*?)(<\/script>)/,(_,a,json,z)=>{const d=JSON.parse(json);delete d.ppoSteps;return a+JSON.stringify(d)+z;});
 await legacy.route('**/papers/ppo/**',r=>r.fulfill({body:oldHtml,contentType:'text/html'}));await legacy.goto(base+'papers/ppo/?lang=en');assert((await legacy.locator('#lab-results').innerText()).includes('1.2'));await legacy.close();
 assert.deepEqual(errors,[]);console.log('PASS PPO browser: 3 widths × 2 languages × 3 depths, formulas and diagrams, presets, GAE, keyboard, language state/focus, disclosures, reset, anchors and screenshots.');
}finally{await browser.close();}})().catch(e=>{console.error(e);process.exitCode=1;});
