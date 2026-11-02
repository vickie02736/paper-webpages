(() => {
  'use strict';
  const data = window.PROTOCOL_DATA;
  const state = {language:'zh',step:0,stability:0,capacity:0,cycle:0,recovery:0,unit:0};
  const el = id => document.getElementById(id);
  const tr = a => a[state.language === 'en' ? 1 : 0];
  const text = (id,a) => { el(id).textContent = Array.isArray(a) ? tr(a) : a; };
  const pressed = key => document.querySelectorAll('[data-'+key+']').forEach(b => b.setAttribute('aria-pressed',String(Number(b.dataset[key])===state[key])));
  const number = value => new Intl.NumberFormat(state.language === 'en'?'en-GB':'zh-CN',{maximumFractionDigits:2}).format(value);
  const steps = [
    {title:['程序 1：制备并建立基线','Procedure 1: prepare and establish a baseline'],action:['分别制备原始、Fe 改性、磁性或微珠形态；记录活性组分、粒径和处理方式。名义 20% Fe 投料可扰乱结构，不能把增加投料一概当作增强。','Prepare the parent, Fe-modified, magnetic or bead form, recording active fraction, size and processing. Nominal 20% Fe feed can disrupt structure; more feed is not invariably better.'],evidence:['以 PXRD、气体吸附、形貌和成分建立使用前基线，再在明确介质中测浸出。BNMG-1 的局部配位与层内结构证据不等于完整三维堆积解析。','Establish pre-use diffraction, gas-sorption, morphology and composition baselines, then measure leaching in a defined medium. Local coordination and in-plane BNMG-1 evidence do not resolve its full three-dimensional stacking.'],limit:['回收得到固体、看到衍射峰或得到较低浸出，分别只是耐久性的一部分。','Recovering a solid, observing diffraction peaks and finding less leaching each address only part of durability.']},
    {title:['程序 2：用守恒与对照解释吸附','Procedure 2: interpret adsorption with balances and controls'],action:['改变接触时间、剂量、浓度、温度、pH 或竞争离子；对每一项保留浓度、体积、干基质量和取样记录。','Vary contact time, dose, concentration, temperature, pH or competing ions, retaining concentration, volume, dry mass and sampling records.'],evidence:['介质空白、无吸附剂离子对照与无目标离子的吸附剂浸出对照，帮助区分吸附、沉淀、容器损失和框架释放。独立时间点样品可避免反复取样改变体积。','Medium blanks, ion-only controls and sorbent-only leaching controls help distinguish uptake, precipitation, container loss and framework release. Separate samples at each time point avoid repeated withdrawals changing volume.'],limit:['去除率不是容量；模型拟合不是单独的机制证明。竞争结果也必须对应实际测试的混合物。','Removal is not capacity; fitting alone is not proof of mechanism. Competition results apply to the mixture actually tested.']},
    {title:['程序 3：分别记录再加载和再生','Procedure 3: distinguish reloading from regeneration'],action:['在不解吸的路线中，将已加载固体用于下一份新溶液；有解吸的路线则需记录洗脱、冲洗与功能恢复。','For the no-desorption route, transfer the loaded solid to a fresh solution. A desorption route also needs records of stripping, rinsing and restored function.'],evidence:['图 6C 展示的是四次无解吸的新溶液加载。应追踪累计负载、固体损失和残留目标物，而不只比较每次百分比。','Fig. 6C shows four fresh-solution loadings without desorption. Track cumulative loading, solid loss and retained target rather than only percentages.'],limit:['四次捕集不等于四次可逆再生，也没有确定何时达到饱和。','Four captures are not four reversible regenerations and do not locate saturation.']},
    {title:['程序 4：消解后分离回收产品','Procedure 4: digest and separate the recovered product'],action:['酸消解将目标 REE 和 Cu 转入溶液；氨处理后分离 REE 氢氧化物与含 Cu 上清液。','Acid digestion transfers REEs and Cu into solution; ammonia treatment separates REE hydroxides from a Cu-bearing supernatant.'],evidence:['记录消解液、上清液、沉淀、洗液及所有体积，结合结构表征、纯度与元素收支判断回收。','Track digestate, supernatant, precipitate, washings and all volumes; combine product characterization, purity and elemental balances.'],limit:['骨架在这条路线中被消耗。产品回收和吸附剂再生必须分开评价。','The framework is consumed in this route. Product recovery and sorbent regeneration require separate evaluation.']}
  ];
  function renderStep(){const s=steps[state.step];for(const k of ['title','action','evidence','limit'])text('step-'+k,s[k]);pressed('step');}
  function bars(id,rows,max,unit,label){
    const chart=el(id);chart.replaceChildren();chart.setAttribute('aria-label',label);
    for(const row of rows){
      const wrap=document.createElement('div');wrap.className='bar-row';
      const h=document.createElement('div');h.className='bar-heading';
      const name=document.createElement('span');name.textContent=row.name;
      const val=document.createElement('strong');val.textContent=number(row.value)+(row.sd!==undefined?' ± '+number(row.sd):'')+' '+unit;
      h.append(name,val);
      const track=document.createElement('div');track.className='bar-track';track.setAttribute('aria-hidden','true');
      const bar=document.createElement('div');bar.className='bar';bar.style.width=(row.value/max*100)+'%';
      track.append(bar);wrap.append(h,track);chart.append(wrap);
    }
    const axis=document.createElement('div');axis.className='axis';axis.setAttribute('aria-hidden','true');
    const zero=document.createElement('span');zero.textContent='0';const end=document.createElement('span');end.textContent=number(max)+' '+unit;
    axis.append(zero,end);chart.append(axis);
  }
  function renderStability(){
    const titles=[['水暴露 2 h 后：相对结晶性','After 2 h in water: relative crystallinity'],['水处理后：BET 保持率','After water treatment: BET retention'],['水处理后：Cu 释放','After water treatment: Cu release']];
    const notes=[['33.4%、86%、84% 是相对衍射指标，不是原相的绝对质量分数；有新相时尤其需要同时检查谱图。','33.4%, 86% and 84% are relative diffraction measures, not absolute mass fractions of the parent phase. New phases require inspection of the patterns.'],['SI 报告 BET 降低 93%、11%、58%；本图以 100% 减去降低值，得到 7%、89%、42%。这些保持率是派生计算。','The SI reports BET losses of 93%, 11% and 58%. Subtracting each loss from 100% gives the derived retentions of 7%, 89% and 42%.'],['分母为初始 Cu 含量。Fe₀.₁₀ 的 Cu 释放更低，但 BET 保持低于 Fe₀.₀₅；不存在仅凭一个指标确定的最佳材料。','The denominator is initial Cu content. Fe₀.₁₀ releases less Cu but retains less BET area than Fe₀.₀₅; a single metric does not identify a universally best material.']];
    text('stability-title',titles[state.stability]);text('stability-basis',['SI Note 3 · 补充图 8 · PXRD 明确为 2 h；其他指标时长未单列','SI Note 3 · Supplementary Fig. 8 · PXRD at 2 h; other assay durations not separately stated']);text('stability-note',notes[state.stability]);
    bars('stability-chart',data.stability.map(x=>({name:x.name,value:x.values[state.stability]})),100,'%',tr(titles[state.stability]));pressed('stability');
  }
  function renderCapacity(){
    text('capacity-title',state.capacity===0?['BNMG-1：表列实验吸附量','BNMG-1: tabulated experimental uptake']:['BNMG-1：Langmuir 拟合 qmax','BNMG-1: Langmuir fitted qmax']);
    text('capacity-note',state.capacity===0?['表 3 列名为实验吸附容量；它并不总是原始等温线的最高点，也不表示混合 REE 中的优先顺序。','Table 3 calls these experimental adsorption capacities. They are not always the highest raw isotherm points and do not rank mixed-REE preference.']:['qmax 是模型参数，必须连同浓度范围与拟合一起判断；不能只因拟合较好便证明单层吸附。','qmax is a model parameter, interpreted with the concentration range and fit; a good fit alone does not prove monolayer adsorption.']);
    bars('capacity-chart',data.capacity.map(x=>({name:x.name+'(III)',value:x.values[state.capacity]})),400,'mg g⁻¹',tr(['BNMG-1 的 REE 容量，0 至 400 毫克每克','BNMG-1 REE capacities, zero to 400 milligrams per gram']));pressed('capacity');
  }
  function renderCycle(){const ion=state.cycle===0?'Y':'Nd';text('cycle-title',ion+'(III) · '+tr(['连续新溶液加载，未解吸','successive fresh solutions, no stripping']));bars('cycle-chart',data.cycles[ion].map((x,i)=>({name:tr(['加载 '+(i+1),'Loading '+(i+1)]),value:x})),100,'%',tr(['四次加载的去除率','Removal over four loadings']));pressed('cycle');}
  function renderRecovery(){const r=data.recovery[state.recovery];
    text('recovery-title',r.ion+' / Cu · '+tr(['液相浓度','liquid-phase concentrations']));
    text('recovery-basis',['Source Data '+r.source+' · mg L⁻¹ · 均值 ± SD，n = 2 · 条长表示均值','Source Data '+r.source+' · mg L⁻¹ · mean ± SD, n = 2 · bars show means']);
    const rows=[{name:r.ion+' · '+tr(['消解后、沉淀前','after digestion, before precipitation']),p:r.targetBefore},{name:r.ion+' · '+tr(['回收后上清液','post-recovery supernatant']),p:r.targetAfter},{name:'Cu · '+tr(['消解后、沉淀前','after digestion, before precipitation']),p:r.cuBefore},{name:'Cu · '+tr(['回收后上清液','post-recovery supernatant']),p:r.cuAfter}].map(x=>({name:x.name,value:x.p[0],sd:x.p[1]}));
    bars('recovery-chart',rows,700,'mg L⁻¹',tr(['回收前后 REE 和 Cu 液相浓度','Liquid-phase REE and Cu concentrations before and after recovery']));
    text('recovery-note',['图示保留 Source Data 的“post-adsorption / post-recovery”两列；流程中的前者是已加载固体经消解后的液体。不同阶段的浓度下降不能在未知总体积时直接等同质量回收率。','The chart retains the Source Data post-adsorption/post-recovery columns; the former is the liquid obtained by digesting the loaded solid in the recovery workflow. Concentration changes across stages are not mass recoveries without the corresponding total volumes.']);pressed('recovery');
  }
  function renderMetrics(){
    const vals=['c0','ce','volume','mass'].map(id=>el(id).value.trim());const [c0,ce,v,m]=vals.map(Number);const out=el('metric-output');out.replaceChildren();
    if(vals.some(x=>x==='')||![c0,ce,v,m].every(Number.isFinite)||c0<=0||ce<0||ce>c0||v<=0||m<=0){out.textContent=tr(['请输入有限数值：C₀、V、m > 0，且 0 ≤ Cₑ ≤ C₀。','Enter finite values: C₀, V and m > 0, with 0 ≤ Cₑ ≤ C₀.']);out.dataset.valid='false';return;}
    const removal=100*(c0-ce)/c0,q=(c0-ce)*v/m,k=ce===0?null:q/ce*(state.unit===0?1:1000);out.dataset.valid='true';
    if(!Number.isFinite(removal)||!Number.isFinite(q)||(k!==null&&!Number.isFinite(k))){out.dataset.valid='false';out.textContent=tr(['输入超出计算范围，请调整数值。','Inputs exceed the calculation range; adjust the values.']);return;}
    const container=document.createElement('div');container.className='results';
    const rows=[[tr(['去除率 R','Removal R']),number(removal)+' %'],[tr(['平衡吸附量 qₑ','Equilibrium uptake qₑ']),number(q)+' mg g⁻¹'],['Kd',k===null?tr(['Cₑ = 0，无法给有限值','No finite value at Cₑ = 0']):number(k)+(state.unit===0?' L g⁻¹':' mL g⁻¹')]];
    for(const [label,value] of rows){const item=document.createElement('div');const l=document.createElement('span');l.textContent=label;const n=document.createElement('strong');n.textContent=value;item.append(l,n);container.append(item);}out.append(container);
    const note=document.createElement('p');note.className='small';note.textContent=tr(['教学计算 · 输入值不是新的实验数据 · 假定浓度下降均来自吸附','Teaching calculation · inputs are not new experimental data · all concentration loss is assumed to be adsorption']);out.append(note);pressed('unit');
  }
  for(const [key,render] of [['step',renderStep],['stability',renderStability],['capacity',renderCapacity],['cycle',renderCycle],['recovery',renderRecovery],['unit',renderMetrics]])document.querySelectorAll('[data-'+key+']').forEach(b=>b.addEventListener('click',()=>{state[key]=Number(b.dataset[key]);pressed(key);render();}));
  document.querySelectorAll('[data-preset]').forEach(b=>b.addEventListener('click',()=>{const vals=Number(b.dataset.preset)===0?[100,10,.05,.025]:[10,.05,.01,.005];['c0','ce','volume','mass'].forEach((id,i)=>{el(id).value=vals[i];});renderMetrics();}));
  ['c0','ce','volume','mass'].forEach(id=>el(id).addEventListener('input',renderMetrics));
  function renderLanguage(language){state.language=language==='en'?'en':'zh';document.body.dataset.lang=state.language;renderStep();renderStability();renderCapacity();renderCycle();renderRecovery();renderMetrics();}
  AtlasPaper.init({shortTitle:'MOF · REE · Protocol',title:{zh:'MOF 捕集与回收 REE：四个程序，三种质量守恒',en:'MOF capture and REE recovery: four procedures, three mass balances'},sections:[{id:'idea',zh:'核心思想',en:'Core idea'},{id:'workflow',zh:'四个程序',en:'Procedures'},{id:'stability',zh:'耐水证据',en:'Water stability'},{id:'metrics',zh:'吸附指标',en:'Metrics'},{id:'capacities',zh:'容量与拟合',en:'Capacities'},{id:'reuse',zh:'连续加载',en:'Reloading'},{id:'recovery',zh:'产品回收',en:'Recovery'},{id:'limits',zh:'证据边界',en:'Limits'},{id:'sources',zh:'来源',en:'Sources'}],legacyHeader:null,allowBoth:false,onLanguageChange:renderLanguage});
})();
