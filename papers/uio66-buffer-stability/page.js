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
 window.AtlasPaper.init({shortTitle:'UiO-66 · pH',title:{zh:'UiO-66 与缓冲液：看见固体之外的降解',en:'UiO-66 meets buffers: degradation beyond the remaining solid'},sections:[{id:'question',zh:'问题',en:'Question'},{id:'method',zh:'方法',en:'Methods'},{id:'explorer',zh:'条件实验室',en:'Condition explorer'},{id:'mechanisms',zh:'机制',en:'Mechanisms'},{id:'reading',zh:'证据合读',en:'Reading evidence'},{id:'data',zh:'完整数据',en:'All conditions'},{id:'limits',zh:'边界',en:'Limits'},{id:'sources',zh:'来源',en:'Sources'}],allowBoth:false,onLanguageChange(value){
  lang=value==='en'?'en':'zh';document.body.dataset.lang=lang;
  for(const select of [el('buffer'),el('table-filter')])for(const option of select.options)option.textContent=option.value==='all'?tr('全部介质','All media'):name(option.value);
  const waterOption=Array.from(el('concentration').options).find(o=>o.value==='null');if(waterOption)waterOption.textContent=tr('不适用','Not applicable');
  el('table-region').setAttribute('aria-label',tr('可横向滚动的完整条件表','All-condition table; scroll horizontally'));
  render();renderTable();
 }});
})();
