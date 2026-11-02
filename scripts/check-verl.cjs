#!/usr/bin/env node
'use strict';
const assert=require('node:assert/strict'),fs=require('node:fs'),path=require('node:path');
const root=path.resolve(__dirname,'..'),M=require('../assets/verl-math.js'),data=require('../references/verl-explainers.json');
const near=(a,b)=>assert(Math.abs(a-b)<1e-9,`${a} != ${b}`);
near(M.ppo(1.5,1,.2),1.2);near(M.ppo(.5,-1,.2),-.8);near(M.ppo(1.5,-1,.2),-1.5);near(M.ppo(.5,1,.2),.5);near(M.ppo(2,0,.2),0);
assert(!M.ppoActive(1.5,1,.2));assert(!M.ppoActive(.5,-1,.2));assert(M.ppoActive(.5,1,.2));
assert.deepEqual(M.advantages([0,0,1,1]).a,[-1,-1,1,1]);assert.deepEqual(M.advantages([1,1,1,1]).a,[0,0,0,0]);
near(M.weighted([0,1,0,1],[10,20,40,80]),2/3);near(M.entropy(.5),Math.log(2));near(M.kl(.5,.25),.5*Math.log(4/3));assert(M.kl(.25,.5)!==M.kl(.5,.25));
const otb=M.otb([[.8,.8,.8],[.4,.4,.4]],[1,0],[3,2]);near(otb[0].b,.1);near(otb[1].b,.1);assert.equal(otb[2].b,1);assert.deepEqual(otb[2].mask,[1,0]);assert.equal(otb[2].a[1],0);assert.equal(otb[2].weights[1],0);
assert.deepEqual(M.otb([[.8],[.4]],[1,0],[0,0])[0],{weights:[0,0],b:0,a:[0,0],mask:[0,0]});
assert.equal(data.length,15);assert.equal(data.filter(d=>d.arxiv).length,12);assert.equal(data.filter(d=>!d.arxiv).length,3);
const catalog=require('../references/paper-catalog.json'),collection=catalog.collections.find(c=>c.id==='verl-algorithms');
assert.equal(new Set(collection.items.map(i=>i.path)).size,15);
for(const d of data){for(const field of ['title','lead','background','implementation'])assert(d[field].zh&&d[field].en);for(const field of ['mechanism','math','evidence','limits'])assert(d[field].every(p=>p.zh&&p.en));}
console.log('PASS scientific boundaries: signed PPO clipping, constant groups, weighted baselines, entropy/KL direction, OTB padding/all-padding.');
if(process.argv.includes('--data-only'))process.exit(0);
const {chromium}=require(process.env.PAPER_PLAYWRIGHT_MODULE||'playwright');
const base=(process.env.PAPER_BASE_URL||'http://127.0.0.1:8768/').replace(/\/?$/,'/');
const out=process.env.PAPER_QA_DIR||'/tmp/verl-specific-qa';fs.mkdirSync(out,{recursive:true});
(async()=>{const browser=await chromium.launch({headless:true});try{
 const p=await browser.newPage({viewport:{width:1440,height:1000},reducedMotion:'reduce'}),errors=[];p.on('pageerror',e=>errors.push(e.message));
 const set=async(id,value)=>p.locator('#'+id).evaluate((e,v)=>{e.value=v;e.dispatchEvent(new Event('input',{bubbles:true}));e.dispatchEvent(new Event('change',{bubbles:true}));},String(value));
 for(const d of data){
  await p.goto(base+'papers/'+d.slug+'/?lang=en#lab');
  assert((await p.locator('#lab-results').innerText()).trim().length>30);
  assert(!/NaN|Infinity|undefined/.test(await p.locator('#lab-results').innerText()),d.slug+' finite outputs');
  const range=p.locator('main input[type=range]').first();
  if(await range.count()){
   await range.focus();const before=await range.inputValue();await range.press('ArrowRight');assert.notEqual(await range.inputValue(),before,d.slug+' keyboard changes range');
   const after=await range.inputValue();await p.locator('[data-depth="research"]').evaluate(e=>e.click());await p.locator('[data-atlas-lang="zh"]').evaluate(e=>e.click());assert.equal(await range.inputValue(),after,d.slug+' state preserved');assert(await range.evaluate(e=>e===document.activeElement),d.slug+' programmatic language change retains focused input');
  }
  for(const link of await p.locator('.atlas-nav a').all()){const href=await link.getAttribute('href');const id=href?.split('#')[1];if(id)assert.equal(await p.locator('[id="'+id+'"]').count(),1,d.slug+' nav target');}
  await p.locator('[data-depth="research"]').evaluate(e=>e.click());
  for(const width of [1440,768,390]){
   await p.setViewportSize({width,height:width===390?844:1000});
   for(const l of ['zh','en']){await p.locator('[data-atlas-lang="'+l+'"]').evaluate(e=>e.click());await p.locator('#lab').scrollIntoViewIfNeeded();await p.screenshot({path:path.join(out,d.slug+'-lab-'+width+'-'+l+'.png')});}
  }
  await p.setViewportSize({width:1440,height:1000});
  await p.screenshot({path:path.join(out,d.slug+'-research-full.png'),fullPage:true});
 }
 await p.goto(base+'papers/ppo/?lang=en');await set('r',.5);await set('a',-1);assert((await p.locator('#lab-results').innerText()).includes('-0.8'));await p.locator('#reset-lab').click();assert.equal(await p.locator('#r').inputValue(),'1.4');
 await p.goto(base+'papers/grpo/?lang=en');for(let i=0;i<4;i++)await set('r'+i,1);assert.deepEqual(await p.locator('#lab-results tbody tr td:last-child').allTextContents(),['0','0','0','0']);
 await p.goto(base+'papers/dapo/?lang=en');await set('correct',4);await set('length',100);assert((await p.locator('#lab-results').innerText()).includes('Drop'));assert((await p.locator('#lab-results').innerText()).includes('-1'));
 await p.goto(base+'papers/dppo/?lang=en');assert.deepEqual(await p.locator('.metrics strong').allTextContents(),['2','0.05','0.0167','Allowed','Suppressed']);
 await p.goto(base+'papers/verl-algorithm-baselines/?lang=en');await p.locator('#dataset').selectOption('LeetCode');await p.locator('#model').selectOption('google/gemma-2-2b-it');assert((await p.locator('#lab-results').innerText()).includes('No records'));
 await p.goto(base+'collections/verl-algorithms/?lang=en');assert.equal(await p.locator('.collection-card').count(),15);await p.locator('#collection-search').fill('SPPO');assert.equal(await p.locator('.collection-card:visible').count(),1);await p.locator('#collection-search').fill('unfindable');assert.equal(await p.locator('.collection-card:visible').count(),0);await p.locator('[data-atlas-lang="zh"]').click();assert.equal(await p.locator('#collection-search').inputValue(),'unfindable');await p.locator('#collection-search').fill('');
 for(const width of [1440,768,390]){await p.setViewportSize({width,height:1000});assert(await p.evaluate(()=>document.documentElement.scrollWidth<=innerWidth+1));await p.screenshot({path:path.join(out,'collection-'+width+'.png'),fullPage:true});}
 await p.goto(base+'?lang=en');await p.waitForFunction(()=>!document.querySelector('#only-explainers').disabled);assert.equal(await p.locator('#catalog .paper-row').count(),490);assert.equal(await p.locator('.collection-links a').count(),0);assert.equal(await p.locator('#theme-ai .document-row').count(),3);
 const recentPaths=await p.locator('#recent-list .recent-item>a').evaluateAll(es=>es.map(e=>new URL(e.href).pathname));assert.equal(new Set(recentPaths).size,recentPaths.length);
 for(const item of collection.items.filter(i=>i.type==='document'))assert(recentPaths.some(p=>p.endsWith(item.path.slice(1))));
 await p.locator('#only-explainers').check();assert.equal(await p.locator('#catalog .paper-row').count(),55);
 // All verl articles belong to the AI catalogue and participate in its normal search.
 await p.goto(base+'?q=verl&lang=en');await p.waitForFunction(()=>!document.querySelector('#only-explainers').disabled);assert.equal(await p.locator('#catalog .paper-row').count(),12);assert.equal(await p.locator('#catalog .document-row').count(),3);
 for(const width of [1440,768,390])for(const lang of ['zh','en']){
  await p.setViewportSize({width,height:1000});await p.goto(base+'?theme=ai&q=verl&lang='+lang+'#themes');await p.waitForFunction(()=>!document.querySelector('#only-explainers').disabled);
  assert.equal(await p.locator('#theme-ai .paper-row:visible').count(),12);assert.equal(await p.locator('#theme-ai .document-row:visible').count(),3);
  assert.equal(await p.locator('#theme-ai #paper-3e01248237a0').count(),1);assert.equal(await p.locator('#theme-mathematics #paper-3e01248237a0').count(),0);
  const paths=await p.locator('#theme-ai .paper-actions a').evaluateAll(es=>es.map(e=>new URL(e.href).pathname));for(const item of collection.items)assert(paths.some(path=>path.endsWith(item.path.slice(1))));
  assert(!/15 个独立|15 independent/.test(await p.locator('#theme-ai').innerText()));assert(await p.evaluate(()=>document.documentElement.scrollWidth<=innerWidth+1));
  await p.locator('#theme-ai').screenshot({path:path.join(out,'ai-verl-'+width+'-'+lang+'.png')});
 }
 await p.locator('#catalog-search').fill('rollout-correction-math');assert.equal(await p.locator('#catalog .paper-row').count(),0);assert.equal(await p.locator('#theme-ai .document-row:visible').count(),1);assert.equal(await p.locator('#theme-ai').getAttribute('open'),'');
 await p.locator('#lang-toggle').click();assert.equal(await p.locator('#catalog-search').inputValue(),'rollout-correction-math');assert.equal(await p.locator('#theme-ai .document-row:visible').count(),1);
 await p.locator('#only-explainers').check();assert.equal(await p.locator('#theme-ai .document-row:visible').count(),1);
 await p.goto(base+'?lang=en');await p.waitForFunction(()=>!document.querySelector('#only-explainers').disabled);await p.locator('#only-explainers').check();assert.equal(await p.locator('#catalog .paper-row').count(),55);
 // Reject malformed collection references and retain the previous working catalogue.
 const bad=structuredClone(catalog);bad.collections[0].items[0].paperId='paper-000000000000';await p.route('**/references/paper-catalog.json*',route=>route.fulfill({json:bad}));await p.evaluate(()=>window.dispatchEvent(new Event('focus')));await p.waitForTimeout(200);assert.equal(await p.locator('#catalog .paper-row').count(),55);
 assert.deepEqual(errors,[]);console.log('PASS verl: 15 labs, bilingual research-depth screenshots at 3 widths, keyboard/state, independent numerical checks, collection search, document recents, paper-only counts, invalid-collection recovery.');
 }finally{await browser.close();}})().catch(e=>{console.error(e);process.exitCode=1;});
