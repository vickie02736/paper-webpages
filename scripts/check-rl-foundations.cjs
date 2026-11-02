#!/usr/bin/env node
'use strict';
const assert=require('node:assert/strict'),fs=require('node:fs'),path=require('node:path');
const M=require('../assets/rl-foundations-math.js');
const near=(a,b)=>assert(Math.abs(a-b)<1e-9,`${a} ≠ ${b}`);
near(M.kl(.5,.9),-.5*Math.log(.36));near(M.kl(.4,.4),0);
const rejected=M.mask(.9,6,.05,1);assert(!rejected.accepted&&rejected.cleanAccepted);near(rejected.signal,-1.56);assert(rejected.coefficients.every(x=>x===0));
const padded=M.mask(.9,2,.05,1);assert(padded.accepted);near(padded.signal,.54);assert(padded.rows.slice(2).every(x=>!x.valid));
assert(M.mask(.9,6,M.kl(.5,.9),1).accepted,'Threshold is inclusive');near(M.mask(.9,6,0,1).signal,0);
assert(M.mask(.9,2,.05,0).coefficients.every(x=>x===0));assert(M.mask(.9,2,.05,-1).coefficients.slice(0,2).every(x=>x<0));
near(M.ratios(.2,.4,.6,1,.2).value,2.4);near(M.ratios(.2,.4,.6,-1,.2).value,-3);near(M.ratios(.2,.4,.6,-1,.2).derivative,-5);
for(const A of [-1,0,1])for(const q of [.1,.2,.35,.4,.6,.9]){const r=M.ratios(.2,.4,q,A,.2),h=1e-5;near(r.derivative,(M.ratios(.2,.4,q+h,A,.2).value-M.ratios(.2,.4,q-h,A,.2).value)/(2*h));}
for(const c of [1,4,16,64,256]){const r=M.scale(c,true);near(r.sampleAge,65536);near(r.phaseSamples,2097152);near(r.beta/(1-r.beta),r.H);near(M.scale(c,false).sampleAge,65536/c);}
near(M.scale(4,true).adam,.00025);near(M.scale(4,true).beta,32/33);near(M.scale(4,true).sgd,.000125);
assert.deepEqual(M.bounds(1,.001),{classical:0,pm:0});near(M.bounds(2,.0001).pm,.0002);
console.log('PASS independent numerical checks: KL direction, masks/padding, fixed batch normalization, signed clipping, derivatives, EWMA sample age and horizon bounds.');
if(process.argv.includes('--math-only'))process.exit(0);
const {chromium}=require(process.env.PAPER_PLAYWRIGHT_MODULE||'playwright');
(async()=>{const base=process.env.PAPER_BASE_URL||'http://127.0.0.1:8768/',out=process.env.PAPER_QA_DIR||'/tmp/rl-foundations-qa';fs.mkdirSync(out,{recursive:true});const browser=await chromium.launch({headless:true});const errors=[];let cases=0;
try{const page=await browser.newPage({viewport:{width:1440,height:1000},reducedMotion:'reduce'});page.on('pageerror',e=>errors.push(e.message));page.on('response',r=>{if(r.status()>=400&&r.url().startsWith(base))errors.push(r.status()+' '+r.url());});
const set=async(id,value)=>{await page.locator('#'+id).evaluate((e,v)=>{e.value=v;e.dispatchEvent(new Event('input',{bubbles:true}));e.dispatchEvent(new Event('change',{bubbles:true}));},String(value));};
for(const slug of ['trm','batch-size-invariance']){
 await page.goto(base+'papers/'+slug+'/?lang=zh&qa=rl');assert.equal(await page.locator('.atlas-header').count(),1);assert.equal(await page.locator('.atlas-bibliography').count(),1,'Bibliography mounted');
 const original=await page.locator('main input,main select').evaluateAll(es=>es.map(e=>[e.id,e.value]));
 for(const [id]of original){const element=page.locator('#'+id),type=await element.evaluate(e=>e.tagName);if(type==='SELECT'){for(const v of await element.locator('option').evaluateAll(es=>es.map(e=>e.value))){await element.selectOption(v);cases++;}}else{for(const bound of ['min','max']){await set(id,await element.getAttribute(bound));assert(!/NaN|Infinity/.test(await page.locator('.results').allTextContents()),id+' finite');cases++;}}}
 for(const lab of await page.locator('[data-lab]').all())await lab.locator('.reset').click();assert.deepEqual(await page.locator('main input,main select').evaluateAll(es=>es.map(e=>[e.id,e.value])),original);
 const first=page.locator('main input').first();await first.focus();const prev=await first.inputValue();await first.press('ArrowRight');assert.notEqual(await first.inputValue(),prev,'Keyboard operates range');
 await page.locator('.reading-task details summary').click();const inputs=await page.locator('main input,main select').evaluateAll(es=>es.map(e=>[e.id,e.value]));
 await page.evaluate(()=>scrollTo(0,900));const y=await page.evaluate(()=>scrollY);
 for(const l of ['en','zh']){await page.locator(`[data-atlas-lang="${l}"]`).click();assert.equal(await page.evaluate(()=>scrollY),y);assert.equal(await page.locator(`[data-atlas-lang="${l}"]`).evaluate(e=>e===document.activeElement),true);}
 for(const depth of ['mechanism','research','intuition']){await page.locator(`[data-depth="${depth}"]`).click();assert.equal(await page.locator(`[data-depth="${depth}"]`).getAttribute('aria-pressed'),'true');}
 assert.deepEqual(await page.locator('main input,main select').evaluateAll(es=>es.map(e=>[e.id,e.value])),inputs);assert(await page.locator('.reading-task details').getAttribute('open')!==null);
 for(const width of [1440,768,390])for(const l of ['zh','en']){await page.setViewportSize({width,height:width===390?844:1000});await page.locator(`[data-atlas-lang="${l}"]`).click();for(const depth of ['intuition','mechanism','research']){await page.locator(`[data-depth="${depth}"]`).click();assert(await page.evaluate(()=>document.documentElement.scrollWidth<=innerWidth+1),'Overflow '+slug+'/'+width+'/'+l+'/'+depth);if(l==='en'){const residue=await page.locator('main [data-zh][data-en]').evaluateAll(es=>es.filter(e=>e.checkVisibility({checkVisibilityCSS:true})&&/[\u3400-\u9fff]/.test(e.textContent)).map(e=>e.textContent));assert.deepEqual(residue,[]);}cases++;}
 await page.screenshot({path:path.join(out,`${slug}-${width}-${l}-full.png`),fullPage:true});await page.evaluate(()=>scrollTo(0,0));await page.screenshot({path:path.join(out,`${slug}-${width}-${l}-hero.png`)});
 for(const id of slug==='trm'?['lab','theory','evidence']:['objective','scaling','evidence']){await page.locator('#'+id).screenshot({style:'.atlas-header,.atlas-skip{visibility:hidden!important}',path:path.join(out,`${slug}-${width}-${l}-${id}.png`)});}
 for(const link of await page.locator('.atlas-nav a').all()){await link.click();const id=(await link.getAttribute('href')).slice(1);assert.equal(await page.locator('#'+id).count(),1);const pos=await page.locator('#'+id).boundingBox(),header=await page.locator('.atlas-header').boundingBox();assert(pos.y>=header.height-5,'Anchor obscured: '+id);cases++;}
 }
 await page.reload();assert.equal(await page.locator('html').getAttribute('lang'),'en');assert.equal(new URL(page.url()).searchParams.get('qa'),'rl');
}
await page.goto(base+'?lang=en&theme=ai');await page.waitForFunction(()=>!document.querySelector('#only-explainers').disabled);assert.equal(await page.locator('#catalog .paper-row').count(),104);assert.equal(await page.locator('#catalog .document-row').count(),3);
for(const [query,slug]of [['Trust Region Masking','trm'],['Batch size-invariance','batch-size-invariance']]){await page.locator('#catalog-search').fill(query);assert.equal(await page.locator('#catalog .paper-row').count(),1);assert.equal(await page.locator(`#catalog a[href*="papers/${slug}/"]`).count(),1);}
assert.deepEqual(errors,[]);console.log('PASS two-paper browser checks: '+cases+' interaction/layout/anchor cases, both languages, three depths, 1440/768/390, keyboard/focus/state/reset, catalogue and resources.');fs.writeFileSync(path.join(out,'results.json'),JSON.stringify({cases,errors,widths:[1440,768,390],languages:['zh','en'],slugs:['trm','batch-size-invariance']},null,2));
}finally{await browser.close();}})().catch(e=>{console.error(e);process.exitCode=1;});
