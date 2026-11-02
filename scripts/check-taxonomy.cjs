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
 assert.equal(actual.id,p.id);assert.equal(actual.p,p.plannedPath);assert.equal(actual.topicId,p.topicId);
 assert(p.sourceComplete&&p.draftExists,'Every addition has complete scientific sources and a page');
 assert(!baseline.themes.some(t=>t.p.some(old=>old.id===p.id)),'New IDs do not replace baseline identities');
}
for(const t of baseline.themes)for(const p of t.p)assert.deepEqual(sources.get(p.u),p,'Every baseline record is preserved in full');
assert.equal(papers.length,479);assert.equal(sources.size,479);assert.equal(ids.size,479);
assert.deepEqual(catalog.themes.map(t=>[t.id,t.p.length]),[['mof',96],['ai',90],['chemistry-materials',73],['robotics-lab',72],['mathematics',78],['life-medicine',70]]);
assert.equal(migration.mapping.length,451);
assert.equal(migration.mapping.flatMap(m=>m.old).length,463);
assert.equal(papers.flatMap(p=>p.legacyContexts).length,463);
for(const key of ['paperMetadata','explainers','explainerCreatedAt'])for(const[k,v]of Object.entries(baseline[key]))assert.deepEqual(catalog[key][k],v,key+' baseline entries preserved');
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
for(const m of migration.mapping){const p=sources.get(m.sourceUrl);assert.equal(p.id,m.paperId);assert.equal(p.topicId,m.topicId);assert(catalog.themes.find(t=>t.id===m.primaryThemeId).p.includes(p));}
assert.equal(catalog.researchRoutes.length,3);
assert.equal(new Set(papers.filter(p=>p.p).map(p=>p.p)).size,43);
for(const p of papers.filter(p=>p.p))assert(fs.existsSync(path.join(root,p.p,'index.html')));
const mof=catalog.themes.find(t=>t.id==='mof');
const categoryCount=name=>mof.p.filter(p=>mof.groups[p.g].category.zh===name).length;
assert.equal(categoryCount('MOF 稳定性'),14);assert.equal(categoryCount('稀土吸附与分离'),20);
assert.equal(mof.relatedPaperIds.length,5);
console.log('PASS taxonomy: original451records/463contexts preserved;28explicit additions;479papers/43explainers;96/90/73/72/78/70 primary counts;immutable baseline metadata and dates.');
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
  assert.equal(await page.locator('#catalog .paper-row').count(),479);
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
