#!/usr/bin/env node
// Schema, migration preservation and the research-oriented navigation contract.
const assert=require('node:assert/strict');
const fs=require('node:fs');
const path=require('node:path');
const {execFileSync}=require('node:child_process');
const root=path.resolve(__dirname,'..');
const catalog=JSON.parse(fs.readFileSync(path.join(root,'references/paper-catalog.json'),'utf8'));
const migration=JSON.parse(fs.readFileSync(path.join(root,'references/taxonomy-migration.json'),'utf8'));
const before=JSON.parse(execFileSync('git',['show',migration.sourceCommit+':references/paper-catalog.json'],{cwd:root,encoding:'utf8',maxBuffer:20*1024*1024}));
const papers=catalog.themes.flatMap(t=>t.p);
const sources=new Map(papers.map(p=>[p.u,p]));
const ids=new Set(papers.map(p=>p.id));
const expansion=JSON.parse(fs.readFileSync(path.join(root,'reports/mof-ree-catalog-candidates.json'),'utf8'));
const baseline=JSON.parse(execFileSync('git',['show',expansion.baselineCommit+':references/paper-catalog.json'],{cwd:root,encoding:'utf8',maxBuffer:20*1024*1024}));
assert.equal(expansion.records.length,28);
assert.equal(new Set(expansion.records.map(p=>p.id)).size,28);
for(const p of expansion.records){
 const actual=sources.get(p.u);assert(actual,'Every explicitly inventoried addition exists');
 assert.equal(actual.id,p.id);assert.equal(actual.p,p.plannedPath);assert.equal(actual.topicId,JSON.parse(fs.readFileSync(path.join(root,'reports/mof-taxonomy-regroup.json'),'utf8')).papers.find(m=>m.paperId===p.id)?.to.topicId??p.topicId);
 assert(p.sourceComplete&&p.draftExists,'Every addition has complete scientific sources and a page');
 assert(!baseline.themes.some(t=>t.p.some(old=>old.id===p.id)),'New IDs do not replace baseline identities');
}
const verl=JSON.parse(fs.readFileSync(path.join(root,'reports/verl-catalog-additions.json'),'utf8'));
const verlBaseline=JSON.parse(execFileSync('git',['show',verl.baselineCommit+':references/paper-catalog.json'],{cwd:root,encoding:'utf8',maxBuffer:20*1024*1024}));
assert.equal(verl.records.length,11);assert.equal(new Set(verl.records.map(p=>p.id)).size,11);
assert.equal(verl.updatedRecords.length,1);assert.equal(verl.updatedRecords[0].id,'paper-3e01248237a0');
assert.deepEqual(verl.updatedRecords[0].allowedFields,['p']);assert.equal(verl.updatedRecords[0].p,'./papers/grpo/');
const placement=JSON.parse(fs.readFileSync(path.join(root,'reports/verl-theme-placement.json'),'utf8'));
assert.equal(placement.paperId,'paper-3e01248237a0');
assert.deepEqual(placement.allowedPaperFields,['g','topicId']);
assert.deepEqual(placement.from,{primaryThemeId:'mathematics',topicId:'mathematics-mathematical-reasoning-proof-discovery-266b7787ecae',g:16});
assert.deepEqual(placement.to,{primaryThemeId:'ai',topicId:'ai-training-adaptation-rl-post-training',g:37});
const applyVerlPlacement=p=>{if(p.id===placement.paperId){p.g=placement.to.g;p.topicId=placement.to.topicId;}return p;};
const regroup=JSON.parse(fs.readFileSync(path.join(root,'reports/mof-taxonomy-regroup.json'),'utf8'));
assert.equal(regroup.themeId,'mof');assert.deepEqual(regroup.allowedPaperFields,['g','topicId']);assert.equal(regroup.papers.length,96);
const regroupMoves=new Map(regroup.papers.map(m=>[m.paperId,m]));
const applyPlacement=p=>{applyVerlPlacement(p);const m=regroupMoves.get(p.id);if(m){p.g=m.to.g;p.topicId=m.to.topicId;}return p;};
const regroupedTopic=(id,topicId)=>regroupMoves.has(id)?regroupMoves.get(id).to.topicId:topicId;
for(const t of verlBaseline.themes)for(const original of t.p){
 const expected=applyPlacement(structuredClone(original));
 if(original.id===verl.updatedRecords[0].id)expected.p=verl.updatedRecords[0].p;
 assert.deepEqual(sources.get(original.u),expected,'Every pre-verl record is preserved except the inventoried GRPO link and user-requested AI placement');
}
const metadataFixes=JSON.parse(fs.readFileSync(path.join(root,'reports/explainer-audit/metadata-corrections.json'),'utf8')).corrections;
const corrected=(key,k,v)=>{const fix=key==='paperMetadata'&&metadataFixes.find(c=>c.u===k);if(!fix)return v;const e=structuredClone(v);for(const a of e.authors)if(a.name in fix.authorAffiliations)a.affiliations=fix.authorAffiliations[a.name];for(const[i,loc]of Object.entries(fix.sourceLocators||{}))e.sources[i].locator=loc;return e;};
for(const key of ['paperMetadata','explainers','explainerCreatedAt'])for(const[k,v]of Object.entries(verlBaseline[key]))assert.deepEqual(catalog[key][k],corrected(key,k,v),'Pre-verl '+key+' preserved');
for(const addition of verl.records){const actual=sources.get(addition.u);assert(actual);assert.equal(actual.id,addition.id);assert.equal(actual.p,addition.path);assert.equal(actual.topicId,addition.topicId);assert(!verlBaseline.themes.some(t=>t.p.some(p=>p.id===addition.id)));}
for(const t of baseline.themes)for(const p of t.p){const expected=applyPlacement(structuredClone(p));if(p.id===verl.updatedRecords[0].id)expected.p=verl.updatedRecords[0].p;assert.deepEqual(sources.get(p.u),expected,'Original audit baseline retained with explicit placement correction');}
const rl=JSON.parse(fs.readFileSync(path.join(root,'reports/rl-foundations-additions.json'),'utf8'));
const rlBaseline=JSON.parse(execFileSync('git',['show',rl.baselineCommit+':references/paper-catalog.json'],{cwd:root,encoding:'utf8',maxBuffer:20*1024*1024}));
assert.equal(rl.records.length,2);assert.equal(rlBaseline.themes.flatMap(t=>t.p).length,490);
for(const t of rlBaseline.themes)for(const p of t.p)assert.deepEqual(sources.get(p.u),applyPlacement(structuredClone(p)),'Every pre-TRM paper record unchanged except the inventoried MOF regroup');
for(const key of ['paperMetadata','explainers','explainerCreatedAt'])for(const[k,v]of Object.entries(rlBaseline[key]))assert.deepEqual(catalog[key][k],corrected(key,k,v),'Pre-TRM '+key+' preserved');
// Explainer wording can evolve; identities, placement and links remain fixed.
const explainerText=new Map(JSON.parse(fs.readFileSync(path.join(root,'references/verl-explainers.json'),'utf8')).map(d=>[d.slug,d]));
const expectedCollections=structuredClone(rlBaseline.collections);
for(const c of expectedCollections)for(const item of c.items){const d=explainerText.get(item.id);if(d){item.title=d.title;item.summary=d.lead;}}
assert.deepEqual(catalog.collections,expectedCollections,'Collection identities preserved and wording synchronized with the editorial source');
for(const addition of rl.records){const p=sources.get(addition.u);assert(p);assert.equal(p.id,addition.id);assert.equal(p.p,addition.path);assert.equal(p.topicId,addition.topicId);assert(!rlBaseline.themes.some(t=>t.p.some(old=>old.u===p.u)));}
const collection=catalog.collections.find(c=>c.id==='verl-algorithms');assert(collection);
assert.equal(collection.items.length,15);assert.equal(new Set(collection.items.map(i=>i.path)).size,15);
assert.equal(collection.items.filter(i=>i.type==='paper').length,12);
assert.equal(collection.presentation,'theme');assert.equal(collection.themeId,'ai');
for(const item of collection.items){const ai=catalog.themes.find(t=>t.id==='ai');if(item.type==='paper')assert(ai.p.some(p=>p.id===item.paperId));else assert(ai.groups.some(g=>g.id===item.topicId));}
assert(catalog.themes.find(t=>t.id==='mathematics').relatedPaperIds.includes(placement.paperId));
assert.deepEqual(collection.items.filter(i=>i.type==='document').map(i=>i.path),verl.documentPages);
for(const item of collection.items){assert(fs.existsSync(path.join(root,item.path,'index.html')));assert(catalog.explainers[item.path]);if(item.type==='paper')assert(papers.some(p=>p.id===item.paperId&&p.p===item.path));else assert(!item.paperId&&!papers.some(p=>p.p===item.path));}
assert.equal(Object.keys(catalog.explainers).length,61);
assert.equal(papers.length,493);assert.equal(sources.size,493);assert.equal(ids.size,493);
assert.deepEqual(catalog.themes.map(t=>[t.id,t.p.length]),[['mof',96],['ai',104],['chemistry-materials',74],['robotics-lab',72],['mathematics',77],['life-medicine',70]]);
assert.equal(migration.mapping.length,451);
assert.equal(migration.mapping.flatMap(m=>m.old).length,463);
assert.equal(papers.flatMap(p=>p.legacyContexts).length,463);
for(const key of ['paperMetadata','explainers','explainerCreatedAt'])for(const[k,v]of Object.entries(baseline[key]))assert.deepEqual(catalog[key][k],corrected(key,k,v),key+' baseline entries preserved');
for(const key of ['tags','venues'])assert.deepEqual(catalog[key],before[key],key+' preserved');
for(const theme of before.themes)for(const p of theme.p){
 const target=sources.get(p.u);assert(target,'Every original source survives');assert.equal(target.t,p.t);
 if(p.p)assert.equal(target.p,p.p,'Explainer URL preserved');
 assert(target.legacyContexts.some(c=>c.theme===theme.n&&c.group===theme.g[p.g]&&c.summary.zh===p.d&&c.summary.en===p.e),'Every old perspective survives');
}
const groupIDs=new Set();
for(const t of catalog.themes){
 for(const [i,g] of t.groups.entries()){
  assert(!groupIDs.has(g.id));groupIDs.add(g.id);
  for(const name of [g.category,g.topic])assert(name.zh&&name.en);
  assert.equal(t.g[i],g.category.zh+' / '+g.topic.zh);assert.equal(t.ge[i],g.category.en+' / '+g.topic.en);
 }
 for(const p of t.p){assert.equal(p.topicId,t.groups[p.g].id);for(const tag of p.tagIds)assert(catalog.taxonomyTags[tag]);}
 for(const id of t.relatedPaperIds){assert(ids.has(id));assert(!t.p.some(p=>p.id===id));}
}
for(const route of catalog.researchRoutes)for(const stage of route.stages)for(const id of stage.paperIds)assert(ids.has(id));
for(const m of migration.mapping){const p=sources.get(m.sourceUrl),expected=m.paperId===placement.paperId?placement.to:m;assert.equal(p.id,m.paperId);assert.equal(p.topicId,regroupedTopic(p.id,expected.topicId));assert(catalog.themes.find(t=>t.id===expected.primaryThemeId).p.includes(p));}
assert.equal(catalog.researchRoutes.length,3);
assert.equal(new Set(papers.filter(p=>p.p).map(p=>p.p)).size,58);
for(const p of papers.filter(p=>p.p))assert(fs.existsSync(path.join(root,p.p,'index.html')));
const mof=catalog.themes.find(t=>t.id==='mof');
const categoryCount=name=>mof.p.filter(p=>mof.groups[p.g].category.zh===name).length;
assert.equal(categoryCount('MOF 稳定性'),14);assert.equal(categoryCount('稀土吸附与分离'),20);assert.equal(categoryCount('玻璃态 MOF'),2);assert.equal(new Set(mof.groups.map(g=>g.categoryId)).size,6);assert.equal(mof.groups.length,16);
for(const m of regroup.papers){const p=mof.p.find(x=>x.id===m.paperId);assert(p);assert.equal(p.topicId,m.to.topicId);assert.equal(p.g,m.to.g);}
for(const id of regroup.retiredTopicIds)assert(!mof.groups.some(g=>g.id===id));
assert.equal(mof.relatedPaperIds.length,5);
console.log('PASS taxonomy: original451records/463contexts preserved;28MOF+11verl+2RL+1SAM additions;493papers/58paper+3document explainers;96/104/74/72/77/70 primary counts;explicit GRPO theme correction;immutable baseline metadata and dates.');
if(process.argv.includes('--data-only'))process.exit(0);
const {chromium}=require(process.env.PAPER_PLAYWRIGHT_MODULE||'playwright');
(async()=>{
 const base=(process.env.PAPER_BASE_URL||'http://127.0.0.1:8768/').replace(/\/?$/,'/');
 const out=process.env.PAPER_QA_DIR||'/tmp/mof-taxonomy-navigation';fs.mkdirSync(out,{recursive:true});
 const browser=await chromium.launch({headless:true,...(process.env.PAPER_CHROMIUM_EXECUTABLE?{executablePath:process.env.PAPER_CHROMIUM_EXECUTABLE}:{})});
 try{
  const page=await browser.newPage({viewport:{width:1440,height:1000},reducedMotion:'reduce'});const errors=[];
  page.on('pageerror',e=>errors.push(e.message));page.on('response',r=>{if(r.status()>=400&&r.url().startsWith(base))errors.push(r.url()+': '+r.status());});
  await page.goto(base);await page.waitForFunction(()=>!document.querySelector('#only-explainers').disabled);
  assert.equal(await page.locator('#catalog .paper-row').count(),493);
  assert.deepEqual(await page.locator('.theme-menu').evaluateAll(nodes=>nodes.map(n=>n.dataset.theme)),catalog.themes.map(t=>t.id));
  await page.locator('#theme-filter').selectOption('mof');
  assert.equal(await page.locator('#catalog .paper-row').count(),96);
  const stability=page.locator('[data-theme="mof"] .category-menu').filter({has:page.locator('.group-title',{hasText:/^MOF 稳定性$/})});
  const ree=page.locator('[data-theme="mof"] .category-menu').filter({has:page.locator('.group-title',{hasText:/^稀土吸附与分离$/})});
  assert.equal(await stability.locator('.paper-row').count(),14);assert.equal(await ree.locator('.paper-row').count(),20);
  await ree.screenshot({path:path.join(out,'mof-ree-1440-zh.png')});
  await stability.screenshot({path:path.join(out,'mof-stability-1440-zh.png')});
  const stableKey=await stability.locator('.group-toggle').first().getAttribute('data-key');
  await stability.locator('.group-toggle').first().click();
  await page.locator('#lang-toggle').click();
  assert.equal(await page.locator('.group-toggle').filter({hasText:'MOF Stability'}).first().getAttribute('data-key'),stableKey);
  assert.equal(await page.locator('.group-toggle').filter({hasText:'MOF Stability'}).first().getAttribute('aria-expanded'),'false');
  await page.locator('.tag-filters > summary').click();
  await page.locator('[data-filter-tag="application:ree"]').check();assert.equal(await page.locator('#catalog .paper-row').count(),20);
  await page.reload();await page.waitForFunction(()=>!document.querySelector('#only-explainers').disabled);
  assert.equal(await page.locator('#catalog .paper-row').count(),20);assert.equal(await page.locator('html').getAttribute('lang'),'en');
  await page.locator('#clear-search').click();
  await page.locator('.tag-filters > summary').click();
  await page.locator('[data-filter-tag="method:mlip"]').check();assert.equal(await page.locator('#catalog .paper-row').count(),13);
  await page.locator('[data-filter-tag="object:mof"]').check();assert.equal(await page.locator('#catalog .paper-row').count(),3,'Different tag dimensions use AND');
  await page.locator('[data-filter-tag="task:stability"]').check();assert.equal(await page.locator('#catalog .paper-row').count(),0);
  assert(await page.locator('.empty-state').first().isVisible()===false || await page.locator('#catalog-status').textContent()==='0 matching papers');
  await page.locator('#clear-search').click();
  await page.locator('[data-filter-tag="method:mlip"]').check();await page.locator('[data-filter-tag="method:equivariance"]').check();
  const expected=papers.filter(p=>p.tagIds.includes('method:mlip')||p.tagIds.includes('method:equivariance')).length;
  assert.equal(await page.locator('#catalog .paper-row').count(),expected,'Same tag dimension uses OR');
  await page.locator('#clear-search').click();
  for(const [query,count] of [['AIRS',1],['LLM-NERRE',1],['MLIP',13]]){await page.locator('#catalog-search').fill(query);assert.equal(await page.locator('#catalog .paper-row').count(),count,query);}
  await page.locator('#clear-search').click();
  const target=papers[0].id;await page.goto(base+'?lang=en&paper='+target);await page.waitForFunction(()=>!document.querySelector('#only-explainers').disabled);
  assert.equal(await page.locator('#catalog .paper-row').count(),1);assert.equal(new URL(page.url()).searchParams.get('paper'),target);
  assert.equal(await page.locator('#catalog .paper-row').getAttribute('data-paper-id'),target);
  await page.reload();await page.waitForFunction(()=>!document.querySelector('#only-explainers').disabled);assert.equal(await page.locator('#catalog .paper-row').count(),1);
  await page.locator('#clear-search').click();
  await page.locator('[data-theme="mof"] > summary').click();
  const related=page.locator('[data-theme="mof"] .related-papers');await related.locator('summary').click();assert.equal(await related.locator('[data-paper-ref]').count(),5);
  const relatedTarget=await related.locator('[data-paper-ref]').first().getAttribute('data-paper-ref');await related.locator('[data-paper-ref]').first().click();
  assert.equal(await page.locator('#catalog .paper-row').count(),1);assert.equal(await page.locator('#catalog .paper-row').getAttribute('data-paper-id'),relatedTarget);
  assert.equal(await page.locator('#catalog .paper-row').evaluate(n=>n.closest('.theme-menu').dataset.theme),'chemistry-materials');
  await page.locator('#clear-search').click();
  for(const width of [1440,768,390])for(const language of ['zh','en']){
   await page.goto(base+'?lang='+language);await page.waitForFunction(()=>!document.querySelector('#only-explainers').disabled);await page.setViewportSize({width,height:width===390?844:1000});
   await page.screenshot({path:path.join(out,'home-'+width+'-'+language+'.png'),fullPage:true});
   await page.locator('#theme-filter').selectOption('mof');
   assert.equal(await page.locator('#routes,.research-route,.taste-note,a[href="#routes"]').count(),0,'Removed homepage reading section and navigation');
   await page.locator('.tag-filters > summary').click();
   assert(await page.evaluate(()=>document.documentElement.scrollWidth<=innerWidth+1),'No document overflow '+width+'/'+language);
   await page.locator('#catalog').screenshot({path:path.join(out,'mof-expanded-'+width+'-'+language+'.png')});
   if(language==='en'){
    const residue=await page.locator('.theme-name,.theme-description,.group-title,#tag-options,.related-papers').evaluateAll(nodes=>nodes.filter(n=>n.checkVisibility({checkVisibilityCSS:true})&&/[\u3400-\u9fff]/.test(n.textContent)).map(n=>n.textContent));
    assert.deepEqual(residue,[],'English taxonomy labels');
   }
  }
  assert.deepEqual(errors,[]);console.log('PASS navigation: MOF stability/REE, theme and typed tag filters, URL reload, aliases, direct-paper/reference links, bilingual stable expansion, keyboard, three widths and screenshots: '+out);
 }finally{await browser.close();}
})().catch(e=>{console.error(e);process.exitCode=1;});
