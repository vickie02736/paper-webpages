(() => {
 'use strict';
 const data=window.BUFFER_DATA, el=id=>document.getElementById(id);
 let lang='zh'; const tr=(zh,en)=>lang==='en'?en:zh;
 const groups={water:['水对照','Water control'],tris75:['TRIS · pH 7.5','TRIS · pH 7.5'],tris9:['TRIS · pH 9.0','TRIS · pH 9.0'],hepes:['HEPES','HEPES'],pb:['磷酸盐 PB','Phosphate PB'],nem:['NEM','NEM'],nacl:['NaCl 对照','NaCl control']};
 const name=key=>groups[key][lang==='en'?1:0];
 const label=v=>v===null?'<LOD':String(v);
 function addOption(select,value,text){const o=document.createElement('option');o.value=value;o.textContent=text;select.append(o);}
 for(const key of Object.keys(groups))addOption(el('buffer'),key,name(key));
 addOption(el('table-filter'),'all','');for(const key of Object.keys(groups))addOption(el('table-filter'),key,name(key));
 el('buffer').value='pb';
 function concentrations(previous='.01'){
  const list=data.filter(r=>r.group===el('buffer').value), select=el('concentration');select.replaceChildren();
  list.forEach(r=>addOption(select,String(r.c),r.c===null?tr('不适用','Not applicable'):String(r.c)));
  select.value=list.some(r=>String(r.c)===String(Number(previous)))?String(Number(previous)):String(list[0].c);
 }
 concentrations();
 function selected(){return data.find(r=>r.group===el('buffer').value && String(r.c)===el('concentration').value);}
 function bar(container,text,value){
  const row=document.createElement('div');row.className='barrow';
  const time=document.createElement('span');time.textContent=text;
  const track=document.createElement('div');track.className='track'+(value===null?' lod':'');
  if(value!==null){const fill=document.createElement('div');fill.className='fill';fill.style.width=value+'%';track.append(fill);}
  const number=document.createElement('strong');number.textContent=label(value)+(value===null?'':'%');
  row.append(time,track,number);container.append(row);
 }
 const notes={
  water:['水对照会酸化到 pH 3.8。配体与锆均低于检测限；这一结果不是固定中性 pH 下的耐受试验。','The water control acidifies to pH 3.8. Both linker and zirconium are below detection; this is not a test at fixed neutral pH.'],
  tris75:['TRIS 的浓度升高时，配体释放和滤液中的锆都大幅增加。0.5 M 条件下释放 96% 配体，仍保留 UiO-66 衍射线；1 M 时形成胶体，无法回收用于 BET 的固体。','Increasing TRIS concentration strongly increases both linker release and zirconium in the filtrate. At 0.5 M, 96% of linker is released despite retained UiO-66 diffraction lines. At 1 M, colloid formation prevents solid recovery for BET.'],
  tris9:['初始 pH 9.0 比 7.5 的 TRIS 条件更具破坏性。0.05–1 M 在 4 h 内均达到全部配体释放；滤液中的锆仍不足全部总锆，提示还须考虑其他金属去向。','TRIS at initial pH 9.0 is more destructive than at pH 7.5. Across 0.05–1 M, complete linker release occurs within 4 h. Filtered zirconium remains below total Zr, requiring consideration of other metal-containing phases.'],
  hepes:['HEPES 的锆读数均低于检测限，但所有测试浓度都测到配体释放。低金属浸出不足以证明整个框架组成未变。','Zirconium is below detection throughout HEPES tests, but every concentration produces measurable linker release. Low metal leaching does not establish unchanged framework composition.'],
  pb:['0.01 M PB 的配体释放为 99%，而滤液中的锆仅为总锆的 0.024%。作者结合固体表征提出磷酸锆相关新固相的解释；更高 PB 浓度下的 BET 回升不能解释为原 UiO-66 恢复。','At 0.01 M PB, linker release is 99%, while filtered zirconium is only 0.024% of total Zr. The authors interpret the solid characterization in terms of phosphate-related zirconium phases. Higher BET area at more concentrated PB does not establish recovery of the original UiO-66.'],
  nem:['NEM 同时改变浓度和初始 pH，不能把这组趋势全部归因于浓度。在 0.1 M 时已释放 93% 配体，而锆仍低于检测限。','Both concentration and initial pH vary in NEM, so this trend cannot be attributed solely to concentration. At 0.1 M, 93% of linker is released while zirconium remains below detection.'],
  nacl:['NaCl 单独造成的配体释放较小，pH 也会下降；但加入缓冲液后不再是同一个化学环境。盐水缓冲液的结果需独立判断。','NaCl alone produces little linker release and pH also falls. Combining salt with a buffer creates a different chemical environment, whose behaviour must be assessed separately.']
 };
 function render(){
  const r=selected();
  el('condition-status').textContent=name(r.group)+' · '+(r.c===null?tr('水对照','water control'):r.c+' mol/L')+' · 25 ± 1 °C · 50 mg / 50 mL';
  const lc=el('linker-chart');lc.replaceChildren();bar(lc,'15 min',r.l15);bar(lc,'4 h',r.l4);
  lc.setAttribute('role','img');lc.setAttribute('aria-label',tr('配体释放：','Linker release: ')+`15 min ${label(r.l15)}${r.l15===null?'':'%'}; 4 h ${label(r.l4)}${r.l4===null?'':'%'}`);
  const zc=el('zirconium-chart');zc.replaceChildren();bar(zc,'4 h',r.zr===null?null:r.zr[2]);
  zc.setAttribute('role','img');zc.setAttribute('aria-label',tr('4 h 滤液中的锆：','Zirconium in 4 h filtrate: ')+(r.zr===null?tr('低于检测限','below detection limit'):r.zr[2]+'%'));
  el('zirconium-value').textContent=r.zr===null?'<LOD':r.zr[2]+' ± '+r.zr[3]+'%';
  el('zirconium-error').textContent=r.zr===null?tr('低于 0.001 mg/L；不等同于零。','Below 0.001 mg/L; not equivalent to zero.'):r.zr[0]+' ± '+r.zr[1]+' mg/L · '+tr('SI 表 S3 报告的数值及 ±。','values and ± as reported in SI Table S3.');
  el('ph-value').textContent=r.ph0+' → '+r.ph4;
  el('bet-value').textContent=r.bet===null?tr('无法回收固体','Solid not recovered'):r.bet+' m²/g';
  el('complete-value').textContent=r.complete===null?tr('4 h 内未达到','Not reached within 4 h'):r.complete+' min';
  el('case-note').textContent=notes[r.group][lang==='en'?1:0];
 }
 function renderTable(){
  const selectedGroup=el('table-filter').value, rows=data.filter(r=>selectedGroup==='all'||r.group===selectedGroup), fragment=document.createDocumentFragment();
  rows.forEach(r=>{const node=document.createElement('tr');
   const values=[name(r.group),r.c===null?'—':r.c,r.ph0+' → '+r.ph4,r.bet===null?'—':r.bet,r.betLoss===null?'—':r.betLoss,label(r.l15),label(r.l4),r.zr===null?'<LOD':r.zr[2]+' ± '+r.zr[3]];
   values.forEach(v=>{const td=document.createElement('td');td.textContent=v;node.append(td);});fragment.append(node);
  });el('table-rows').replaceChildren(fragment);el('row-count').textContent=tr(`显示 ${rows.length} / 30 个条件。`,`Showing ${rows.length} of 30 conditions.`);
 }
 el('buffer').addEventListener('change',()=>{const previous=el('concentration').value;concentrations(previous);render();});
 el('concentration').addEventListener('change',render);el('table-filter').addEventListener('change',renderTable);
 function preset(group,c){el('buffer').value=group;concentrations(String(c));render();}
 el('example-pb').addEventListener('click',()=>preset('pb',.01));el('example-tris').addEventListener('click',()=>preset('tris9',1));el('example-hepes').addEventListener('click',()=>preset('hepes',1));
 const pair=(zh,en)=>tr(zh,en);
 let depth=1, evidence=0, answer=null, methodStep=0;
 const evidenceCopy=[
  [
   ['观察 1 · 晶相','Observation 1 · Crystalline phase'],
   ['仍有衍射峰，能确定什么？','What do residual peaks establish?'],
   ['图4红色曲线仍有UiO-66衍射线。它说明回收固体中仍有产生这种有序图样的相；并未量化这一相占原样的多少。原图强度经过归一化，尤其不能把“峰仍高”读成“材料大多还在”。','The red pattern in Figure 4 retains UiO-66 diffraction lines. Some phase in the recovered solid still produces this ordered pattern; this does not quantify its fraction of the original sample. Intensities are normalized, so apparently strong peaks do not establish that most material survives.'],
   ['此时仍缺：连接体有没有离开、原有孔隙保留多少。继续加入第二条证据。','Still missing: has linker left, and how much accessible porosity remains? Add the second channel.']
  ],[
   ['观察 2 · 化学组成','Observation 2 · Composition'],
   ['连接体释放 99%，改变了判断','99% linker release changes the conclusion'],
   ['HPLC给出4 h连接体释放99%（Table 1）。释放分母是原样全部连接体。因此即使有残余晶相，也不能再称原框架的化学组成基本保留。99%不是“整个样品质量损失99%”，也不能用它直接计算残余晶体百分比。','HPLC gives 99% linker release at 4 h (Table 1), relative to all initial linker. Residual crystallinity therefore cannot justify largely preserved framework composition. This is not 99% loss of total sample mass, nor a direct measure of residual crystalline fraction.'],
   ['还要追问：如果连接体离开，锆在哪里？看第三步。','Next question: if linker has left, where is the Zr? Add the third channel.']
  ],[
   ['观察 3 → 作者解释 → 边界','Observation 3 → Interpretation → Boundary'],
   ['锆读数很低，也可以伴随严重组成损失','Low filtrate Zr can coexist with major compositional loss'],
   ['同条件下，SI表S3给出滤液锆0.024 ± 0.006%；BET为128 m²/g，对照原样1395 m²/g（Table 1）。这些测量合起来支持：连接体大量离开、可及表面积下降，锆却没有等比例留在滤液。','For the same condition, SI Table S3 gives filtrate Zr of 0.024 ± 0.006%; BET area is 128 m²/g versus 1395 m²/g for the parent (Table 1). Together these support extensive linker loss and decreased accessible area without a proportional Zr fraction remaining in the filtrate.'],
   ['作者以磷酸盐相关新固相解释锆的去向，并结合较高PB浓度下的PXRD、吸附和形貌变化。此解释与数据一致，但没有为0.01 M样品定量确定各锆物种比例。结论是原框架没有完整保留；不是把所有未检出的锆都指定为同一种沉淀。','The authors interpret Zr fate in terms of phosphate-related new solids, also using diffraction, adsorption and morphology at higher PB concentrations. This is consistent with the evidence but does not quantify each Zr species in the 0.01 M sample. The conclusion is loss of framework integrity, not assignment of all undetected Zr to one precipitate.']
  ]
 ];
 const comp={chemistry:{a:['tris75',.5],b:['hepes',.5],text:['相同起始pH7.5、相同0.5 M、4 h：TRIS释放96%连接体，HEPES为15%，两者终点pH均7.5。这直接显示缓冲液化学环境的差别；不是“所有pH7.5溶液一样”。但缓冲容量、离子组成等也随介质改变，不能把差值唯一归为某个微观速率常数。来源：Table 1、SI Table S3。','Same initial pH 7.5, 0.5 M and 4 h: TRIS releases 96% linker versus 15% in HEPES; both end at pH 7.5. This directly shows that buffers at the same pH need not behave alike. Buffer capacity and ionic composition also change with medium, so the difference cannot be assigned uniquely to one microscopic rate constant. Sources: Table 1, SI Table S3.']},ph:{a:['tris75',.01],b:['tris9',.01],text:['0.01 M TRIS、4 h：初始pH7.5时释放10%，pH9.0时释放49%。但终点分别是7.0和8.2，并非两个全程恒pH试验；酸碱形式比例也改变。因此支持“这两套配方结果不同”，不能据两点拟合只依赖pH的普适速率。来源：Table 1、Figure 2、SI Table S2。','At 0.01 M TRIS after 4 h, initial pH 7.5 gives 10% release and pH 9.0 gives 49%. Endpoints are pH 7.0 and 8.2, so neither is a perfectly fixed-pH exposure; acid/base component ratios also change. This supports different outcomes for these formulations, not a universal pH-only rate fitted to two points. Sources: Table 1, Figure 2, SI Table S2.']},porosity:{a:['pb',.05],b:['pb',.2],text:['PB从0.05到0.2 M，BET由38升至248 m²/g，但两组4 h都释放100%连接体，图4也不再显示原UiO-66晶相。把面积回升解读为“更稳定”会忽略组成与相身份；作者提出新磷酸锆相关固相贡献面积。起始pH相同，终点pH不同，仍须保留条件。来源：Table 1、Figure 4、SI Table S3。','From 0.05 to 0.2 M PB, BET rises from 38 to 248 m²/g, but both release 100% of linker by 4 h and Figure 4 no longer shows the parent crystalline phase. Reading the area increase as improved stability ignores composition and phase identity; the authors propose an area contribution from a new phosphate-related Zr solid. Initial pH is shared but final pH differs. Sources: Table 1, Figure 4, SI Table S3.']}};
 function renderPilot(){
  document.querySelectorAll('[data-diagram-zh]').forEach(n=>n.textContent=n.dataset[lang==='en'?'diagramEn':'diagramZh']);
  document.querySelectorAll('[data-method-step]').forEach(b=>b.setAttribute('aria-pressed',String(+b.dataset.methodStep===methodStep)));
  document.querySelectorAll('.method-scene').forEach((n,i)=>n.hidden=i!==methodStep);
  el('method-steps').setAttribute('aria-label',tr('逐步查看实验设计','Explore the experimental design step by step'));
  el('method-status').textContent=tr(['步骤 1 / 4：给结构与两种组分分别建立参照。','步骤 2 / 4：同批分样，控制暴露；锆实验使用塑料容器。','步骤 3 / 4：连接体时间序列与锆终点来自平行实验。','步骤 4 / 4：处理回收固体，与液相读数共同判断。'][methodStep],['Step 1 / 4: establish structural and separate component references.','Step 2 / 4: split the batch for controlled exposures; use plastic for Zr trials.','Step 3 / 4: linker time courses and Zr endpoints come from parallel experiments.','Step 4 / 4: prepare recovered solids and interpret them alongside liquid measurements.'][methodStep]);
  for(const option of el('comparison').options)option.textContent=option.dataset[lang];
  const x=evidenceCopy[evidence], pick=a=>a[lang==='en'?1:0];
  el('evidence-output').innerHTML='<span class="evidence-tag">'+pick(x[0])+'</span><h3>'+pick(x[1])+'</h3><p>'+pick(x[2])+'</p><p>'+pick(x[3])+'</p>';
  document.querySelectorAll('[data-evidence]').forEach(b=>b.setAttribute('aria-pressed',String(+b.dataset.evidence===evidence)));
  const c=comp[el('comparison').value];
  el('comparison-output').innerHTML='<div class="comparison-grid">'+[c.a,c.b].map(([g,v])=>{const r=data.find(d=>d.group===g&&d.c===v);return '<article class="panel"><h3>'+name(g)+' · '+v+' M</h3><dl><dt>'+tr('4 h 连接体释放','4 h linker release')+'</dt><dd>'+r.l4+'%</dd><dt>'+tr('4 h 滤液锆 / 总锆','4 h filtrate Zr / total Zr')+'</dt><dd>'+(r.zr?r.zr[2]+' ± '+r.zr[3]+'%':'&lt;LOD')+'</dd><dt>BET</dt><dd>'+r.bet+' m²/g</dd><dt>'+tr('初始 → 4 h pH','Initial → 4 h pH')+'</dt><dd>'+r.ph0+' → '+r.ph4+'</dd></dl></article>';}).join('')+'</div><p>'+pick(c.text)+'</p>';
  const feedback={intact:['这个理由把“滤液中的元素”误当成“全部材料”。锆可能留在其他固相或被过滤截留；93%的连接体释放已经否定原组成基本保留。还需要锆的分相质量平衡，才能解释低读数。','This confuses the measured liquid fraction with the whole material. Zr may occupy other solids or be retained during filtration. The 93% linker release already rules out largely preserved composition; a phase-resolved Zr mass balance is needed to explain the low reading.'],changed:['有依据。连接体流失直接说明组成显著改变，BET下降说明可及面积减少；残余峰只表明仍有有序相。滤液锆<LOD不足以确定其全部去向。这里的判断用到了两条独立证据，而没有把作者提出的水解/新固相解释写成已定量证实。来源：Figure 5、Table 1、SI Table S3。','Supported. Linker loss directly establishes substantial compositional change, while lower BET indicates reduced accessible area. Residual peaks establish remaining order; filtrate Zr <LOD does not resolve all Zr fates. This uses independent evidence without treating the authors’ hydrolysis/new-solid explanation as quantitatively proven. Sources: Figure 5, Table 1, SI Table S3.'],dissolved:['分母用错了。93%是“原样连接体”的释放比例，不是“50 mg整个样品”的溶解比例。锆还可能在残余物中；需要回收量和完整组分质量平衡才能讨论总材料去向。','The denominator is wrong. 93% is the released fraction of initial linker, not dissolution of 93% of the full 50 mg sample. Zr may remain in residues; total material fate needs recovered mass and a complete component balance.']};
  el('quiz-feedback').textContent=answer?pick(feedback[answer]):tr('先选择一个理由，再查看反馈。','Choose a reason to see feedback.');
  el('depth-note').textContent=tr(['直觉：问题、证据判断与迁移练习。机制层继续解释分母、原图和作用路径。','机制：在直觉层基础上展开公式、原图导读与配对比较。研究层补充SI和验证设计。','研究：显示全部方法细节、30条条件、SI替代解释检验和进一步验证方向。'][depth-1],['Intuition: question, evidence reasoning and a transfer task. Mechanism adds denominators, figure reading and pathways.','Mechanism: adds formulas, figure reading and paired comparisons. Research adds the SI and validation design.','Research: all methods, 30 conditions, SI checks of alternative explanations and proposed follow-up tests.'][depth-1]);
  el('evidence-buttons').setAttribute('aria-label',tr('逐步加入实验证据','Add experimental evidence step by step'));
  el('quiz-buttons').setAttribute('aria-label',tr('选择有依据的判断','Choose a supported conclusion'));
  el('figure4').alt=tr('原文图4：PB中连接体释放随时间增加；归一化PXRD、氮气吸附与SEM对比。各坐标和结果在下方逐项解释。','Original Figure 4: linker release in PB versus time, normalized PXRD, nitrogen adsorption and SEM comparisons. Axes and findings are explained below.');
  el('figure4-pxrd').alt=tr('原文图4的PXRD面板：黑色原样与红色0.01 M PB处理后的曲线有对应峰；图中保留0.05、0.1和0.2 M曲线及完整坐标。','PXRD panel from original Figure 4: corresponding peaks in the black parent and red 0.01 M PB patterns; 0.05, 0.1 and 0.2 M curves and complete axes are retained.');
  el('figure9').alt=tr('原文图9：不同浓度TRIS、PB、NEM中4小时滤液锆比例；各面板量尺不同并有断轴。精确值见完整条件表。','Original Figure 9: filtrate Zr at 4 h for different TRIS, PB and NEM concentrations. Panel scales differ and include broken axes; exact values appear in the condition table.');
  for(const id of ['figure4-region','figure9-region'])el(id).setAttribute('aria-label',tr('原图区域，可用方向键横向滚动','Original figure; use arrow keys to scroll horizontally'));
  document.querySelectorAll('.image-status').forEach(n=>updateImageStatus(n));
 }
 function setDepth(next){
  const position=scrollY;depth=next;document.body.dataset.depth=String(next);
  document.querySelectorAll('[data-min-depth]').forEach(n=>n.hidden=+n.dataset.minDepth>depth);
  document.querySelectorAll('[data-max-depth]').forEach(n=>n.hidden=+n.dataset.maxDepth<depth);
  document.querySelectorAll('[data-depth]').forEach(b=>{if(b.tagName!=='BUTTON')return;const yes=+b.dataset.depth===depth;b.classList.toggle('active',yes);b.setAttribute('aria-pressed',String(yes));});
  renderPilot();window.scrollTo({top:position,behavior:'instant'});
 }
 function updateImageStatus(n){const state=n.dataset.state;n.querySelector('span').textContent=state==='error'?tr('原图加载失败；文字导读仍可阅读。','Figure failed to load; the written guide remains available.'):tr('正在加载原图…','Loading figure…');n.querySelector('button').textContent=tr('重试','Retry');n.querySelector('button').hidden=state!=='error';}
 for(const id of ['figure4','figure9','figure4-pxrd']){const img=el(id),notice=document.createElement('div');notice.className='image-status';notice.dataset.state='loading';notice.dataset.figure=id;notice.setAttribute('role','status');notice.innerHTML='<span></span><button type="button"></button>';img.parentElement.after(notice);const success=()=>{notice.hidden=true;img.hidden=false;},failure=()=>{notice.hidden=false;notice.dataset.state='error';img.hidden=true;updateImageStatus(notice);};img.addEventListener('load',success);img.addEventListener('error',failure);notice.querySelector('button').addEventListener('click',()=>{notice.dataset.state='loading';updateImageStatus(notice);img.src=img.getAttribute('src').split('?')[0]+'?retry='+Date.now();});if(img.complete){if(img.naturalWidth)success();else failure();}}
 document.querySelectorAll('[data-evidence]').forEach(b=>b.addEventListener('click',()=>{evidence=+b.dataset.evidence;renderPilot();}));
 document.querySelectorAll('[data-method-step]').forEach(b=>b.addEventListener('click',()=>{methodStep=+b.dataset.methodStep;renderPilot();}));
 document.querySelectorAll('[data-answer]').forEach(b=>b.addEventListener('click',()=>{answer=b.dataset.answer;document.querySelectorAll('[data-answer]').forEach(x=>x.setAttribute('aria-pressed',String(x===b)));renderPilot();}));
 el('comparison').addEventListener('change',renderPilot);
 el('depth-controls').querySelectorAll('button').forEach(b=>b.addEventListener('click',()=>setDepth(+b.dataset.depth)));
 setDepth(1);

 window.AtlasPaper.init({depth:el('depth-controls'),shortTitle:'UiO-66 · pH',title:{zh:'UiO-66 遇上缓冲液：晶体还在，框架就完整吗？',en:'UiO-66 in buffers: when crystals hide damage'},sections:[{id:'question',zh:'问题',en:'Question'},{id:'method',zh:'方法',en:'Methods'},{id:'reading',zh:'证据推理',en:'Evidence reasoning'},{id:'mechanisms',zh:'机制',en:'Mechanisms'},{id:'explorer',zh:'条件比较',en:'Compare conditions'},{id:'data',zh:'完整数据',en:'All conditions'},{id:'limits',zh:'边界',en:'Limits'},{id:'sources',zh:'来源',en:'Sources'}],allowBoth:false,onLanguageChange(value){
  lang=value==='en'?'en':'zh';document.body.dataset.lang=lang;
  for(const select of [el('buffer'),el('table-filter')])for(const option of select.options)option.textContent=option.value==='all'?tr('全部介质','All media'):name(option.value);
  const waterOption=Array.from(el('concentration').options).find(o=>o.value==='null');if(waterOption)waterOption.textContent=tr('不适用','Not applicable');
  el('table-region').setAttribute('aria-label',tr('可横向滚动的完整条件表','All-condition table; scroll horizontally'));
  render();renderTable();renderPilot();
 }});
})();
