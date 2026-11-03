(() => {
  'use strict';
  const state={language:'zh',ph:0,temperature:0,mixture:0,cyclemetric:0,radiation:0,mechanism:0};
  const el=id=>document.getElementById(id);
  const tr=pair=>pair[state.language==='en'?1:0];
  const text=(id,value)=>{el(id).textContent=Array.isArray(value)?tr(value):value;};
  const num=(x,d=2)=>new Intl.NumberFormat(state.language==='en'?'en-GB':'zh-CN',{maximumFractionDigits:d}).format(x);
  const pressed=key=>document.querySelectorAll('[data-'+key+']').forEach(b=>b.setAttribute('aria-pressed',String(Number(b.dataset[key])===state[key])));
  function bars(id,rows,max,unit,label){
    const box=el(id);box.replaceChildren();box.setAttribute('aria-label',label);
    rows.forEach(row=>{
      const wrap=document.createElement('div');wrap.className='bar-row';
      const heading=document.createElement('div');heading.className='bar-heading';
      const name=document.createElement('span');name.textContent=row.name;
      const value=document.createElement('strong');value.textContent=num(row.value)+' '+unit;
      heading.append(name,value);
      const track=document.createElement('div');track.className='bar-track';track.setAttribute('aria-hidden','true');
      const bar=document.createElement('div');bar.className='bar'+(row.alt?' alt':'');bar.style.width=(row.value/max*100)+'%';
      track.append(bar);wrap.append(heading,track);box.append(wrap);
    });
    const axis=document.createElement('div');axis.className='axis';axis.setAttribute('aria-hidden','true');
    const lo=document.createElement('span');lo.textContent='0';const hi=document.createElement('span');hi.textContent=num(max)+' '+unit;axis.append(lo,hi);box.append(axis);
  }
  function renderPh(){
    const ph=[3,4,5,6,6.5][state.ph],q=[111.35,183.01,178.38,180.01,182.33][state.ph];
    text('ph-title','pH '+ph+' · '+tr(['报告吸附量','reported uptake']));text('ph-value',num(q)+' mg/g');
    text('ph-note',state.ph===0?['pH 3 下吸附量较低。图 3a 的柱标注为 111.35 mg/g，而 §3.2 正文写为 113.35 mg/g；本页按图中标注显示并保留这一差异。作者将较酸条件下的框架降解和材料损失与这一趋势联系起来；该段没有给出对应的 Cu/BTC 浸出收支。','Uptake is lower at pH 3. Fig. 3a labels this bar 111.35 mg/g, while the §3.2 text gives 113.35 mg/g; the figure label is shown and the discrepancy retained. The authors associate this trend with framework degradation and material loss in more acidic conditions; that section does not provide a corresponding Cu/BTC leaching balance.']:['在 pH 4–6.5 的这些测点，吸附量约为 178–183 mg/g。pH 6 是后续选用条件，而不是已经证明的任意水样最优值。','At these pH 4–6.5 points, uptake is about 178–183 mg/g. pH 6 is selected for subsequent tests rather than established as optimal for every water matrix.']);pressed('ph');
  }
  function renderCapacity(){
    const t=[303,313,323][state.temperature],q=[512.82,500,375.94][state.temperature];
    text('capacity-title',t+' K · '+tr(['等温线结果','isotherm result']));
    const rows=[{name:tr(['Langmuir 拟合 qₘ','Langmuir fitted qₘ']),value:q}];
    if(state.temperature===0)rows.push({name:tr(['最高报告实测 qₑ','Highest reported measured qₑ']),value:485.87,alt:true});
    bars('capacity-chart',rows,600,'mg/g',tr(['容量对比，固定零至六百毫克每克','Capacity comparison on a fixed zero-to-600 mg/g scale']));
    text('capacity-note',state.temperature===0?['青色为模型参数，紫色为报告实测值。二者来自不同含义的量；较好的拟合不证明唯一的单层吸附机制。','Cyan is a model parameter; purple is a reported measurement. Their meanings differ, and a good fit does not establish a unique monolayer mechanism.']:state.temperature===1?['313 K 的拟合 qₘ 为 500.00 mg/g。这里只显示表 1 参数，未从图中反推未报告的实测最大值。','The fitted qₘ at 313 K is 500.00 mg/g. Only the Table 1 parameter is shown; no unreported measured maximum is reverse-digitized.']:['323 K 采用表 1 的 375.94 mg/g；正文段落写为 375.93 mg/g。保留此差异，不将其当作独立实验结果。','The 323 K value follows Table 1: 375.94 mg/g. The paragraph gives 375.93 mg/g. This discrepancy is retained rather than treated as a separate experiment.']);pressed('temperature');
  }
  function renderTrace(){
    const ce=Number(el('trace-ce').value),r=(50-ce)/50*100,removed=(50-ce)*.4,q=removed/1000/.05;
    text('trace-label','Cₑ = '+num(ce)+' µg/L');const box=el('trace-output');box.replaceChildren();
    const results=document.createElement('div');results.className='results';
    [[tr(['去除率 R','Removal R']),num(r)+' %'],[tr(['移出水相的 Lu','Lu removed from water']),num(removed)+' µg'],[tr(['对应负载 qₑ','Corresponding loading qₑ']),num(q,3)+' mg/g']].forEach(([label,value])=>{const item=document.createElement('div');const l=document.createElement('span');l.textContent=label;const v=document.createElement('strong');v.textContent=value;item.append(l,v);results.append(item);});box.append(results);
  }
  function renderMixture(){
    const ree=state.mixture===1;
    text('mixture-title',ree?['三种稀土竞争：Lu 质量吸附量较高','Three-REE competition: higher Lu mass uptake']:['七离子体系：Lu 与常见非稀土离子','Seven-ion mixture: Lu and common non-REE ions']);
    text('mixture-conditions',ree?['Lu / Yb / Gd 各 500 mg/L · pH 6 · 正文 §3.5、SI 图 S3','Lu / Yb / Gd each at 500 mg/L · pH 6 · main §3.5 and SI Fig. S3']:['Lu / Ca / Mg / Co / Zn / Na / K 各 100 mg/L · pH 6 · 正文图 5a','Lu / Ca / Mg / Co / Zn / Na / K each at 100 mg/L · pH 6 · main Fig. 5a']);
    if(ree)bars('mixture-chart',[{name:'Lu(III)',value:239.35},{name:'Yb(III)',value:153.17},{name:'Gd(III)',value:95.64}],300,'mg/g',tr(['三稀土混合物中的质量吸附量，零至三百毫克每克','Mass uptake from the three-REE mixture, zero to 300 mg/g']));
    else {el('mixture-chart').replaceChildren();el('mixture-chart').removeAttribute('aria-label');}
    text('mixture-note',ree?['柱高采用正文报告值，固定 0–300 mg/g；原图误差线未说明统计定义，本页不赋予新的误差或显著性结论。','Bars use reported text values on a fixed 0–300 mg/g scale. The source does not define the statistical meaning of its error bars here; no new uncertainties or significance claims are assigned.']:['图 5a 中 Lu 的吸附量高于各非稀土竞争者。这里只作定性比较；不把约 96 mg/g 的 Lu 吸附量改写成 96% 去除率，也不数字化各竞争者的近似柱高。','Lu uptake in Fig. 5a exceeds that of the non-REE competitors. This is a qualitative comparison: approximately 96 mg/g of Lu is not 96% removal, and approximate competitor bars are not digitized.']);pressed('mixture');
  }
  function renderCycle(){
    const relative=state.cyclemetric===1,raw=[485.87,312.25,120.52];
    text('cycle-title',relative?['以新鲜材料报告值作归一化参考','Normalized to the reported fresh-material reference']:['新鲜样品与再生后的吸附量','Uptake of fresh and regenerated material']);
    bars('cycle-chart',raw.map((value,i)=>({name:i===0?tr(['新鲜材料参考值','Fresh-material reference']):tr(['第 '+(i+1)+' 轮吸附','Adsorption cycle '+(i+1)]),value:relative?value/raw[0]*100:value,alt:i>0})),relative?100:550,relative?'%':'mg/g',tr(['新鲜和再生材料吸附性能','Fresh and regenerated material adsorption performance']));
    text('cycle-note',relative?['保持率是以正文新鲜样品实测值 485.87 mg/g 为分母计算的比较。图 5b 第一根柱与此值相近，但未另附精确数字；本页不把柱高数字化成新数据。','Retention is calculated using the reported fresh-sample measurement of 485.87 mg/g as reference. The first bar in Fig. 5b is close to it but has no separate exact annotation; it is not digitized into new data.']:['固定 0–550 mg/g 量尺。485.87 mg/g 来自正文新鲜样品实测结果；312.25 与 120.52 mg/g 是正文明确给出的第二、三轮值。','Fixed 0–550 mg/g scale. The 485.87 mg/g reference is the fresh-sample measurement in the text; 312.25 and 120.52 mg/g are its explicit cycle-two and cycle-three values.']);pressed('cyclemetric');
  }
  const radiation=[
    {title:['容量：保留较高水平','Capacity: substantial uptake remains'],evidence:['S2a 的未辐照样品柱高较高，三个辐照样品仍保留较高吸附量。这里不从图中提取精确百分比，也不采用“完全无损”的表述。','The unirradiated bar in S2a is higher, while all three irradiated samples retain substantial uptake. No exact percentages are digitized and no loss-free claim is adopted.'],limit:['图中没有完整重复次数、误差定义或显著性检验，不能用肉眼相近来替代统计等效性。','Replicate counts, error definitions and significance tests are not fully given; visual similarity does not establish statistical equivalence.']},
    {title:['FTIR：主要振动特征仍可比较','FTIR: major vibrational features remain comparable'],evidence:['S2b 给出未辐照、50、100、200 kGy 样品的 FTIR。主要特征仍可辨认，但曲线并非完全重合。','S2b compares unirradiated material with 50, 100 and 200 kGy samples. Major features remain recognizable, while the spectra are not identical.'],limit:['FTIR 不能单独确定长程晶体结构、可用孔容、溶解损失或所有位点的完整性。','FTIR alone does not establish long-range crystallinity, accessible pore volume, dissolution loss or integrity of every site.']},
    {title:['SEM：晶体外形与表面纹理分别看','SEM: distinguish crystal outline from surface texture'],evidence:['S2c–f 的标尺均为 8 µm。辐照后的多面体外形仍可辨认，但表面比未辐照图粗糙；这种可见差异不宜被描述为形貌完全不变。','S2c–f use 8 µm scale bars. Polyhedral outlines remain recognizable after irradiation, with visibly rougher surfaces than the unirradiated image. This is not unchanged morphology.'],limit:['这些是选取的显微视野，不足以量化整个样品的缺陷比例或证明全部晶体都保持原结构。','Selected microscopy fields do not quantify the bulk defect fraction or prove that every crystal retains its original structure.']}
  ];
  function renderRadiation(){const r=radiation[state.radiation];text('radiation-label','SI · '+['S2a','S2b','S2c–f'][state.radiation]+' · 50 / 100 / 200 kGy');for(const key of ['title','evidence','limit'])text('radiation-'+key,r[key]);pressed('radiation');}
  const mechanisms=[
    {title:['FTIR 与 Lu 相关结合','FTIR and Lu-associated binding'],evidence:['吸附后谱带位移和强度变化，以及作者归属于 Lu–O 的 538 cm⁻¹ 信号，支持其提出的含氧基团参与结合解释。','Band shifts and intensity changes after uptake, including a signal at 538 cm⁻¹ assigned by the authors to Lu–O, support their proposed participation of oxygen-bearing groups.'],limit:['这是谱学解释，不能唯一确定 Lu 的配位数、键合位点或所有信号的来源。原图该处还写为 La–O，与研究对象 Lu 的标注不一致。','This is a spectroscopic interpretation rather than a unique coordination number, site or signal origin. The figure labels this feature La–O, inconsistent with the Lu system.']},
    {title:['XPS 确认表面检测到 Lu','XPS detects Lu at the surface'],evidence:['吸附后出现 Lu 信号，作者报告其相对原子百分比为 0.11%；Cu 的相对原子百分比由 3.99% 变为 3.16%。','A Lu signal appears after uptake, reported as 0.11 atomic percent, while relative Cu changes from 3.99 to 3.16 atomic percent.'],limit:['这支持 Lu 与所测固体相关，但相对百分比下降不能直接证明损失了多少 Cu，或 Lu 按某一固定比例取代 Cu。','This supports Lu association with the tested solid. A relative percentage decrease does not quantify Cu loss or establish fixed-stoichiometry Cu replacement by Lu.']},
    {title:['部分 Cu–Lu 交换是作者的机制提议','Partial Cu–Lu exchange is a mechanistic proposal'],evidence:['作者综合 XPS、FTIR 和不同洗脱处理，提出离子交换或部分 Cu 被 Lu 替换的解释。','Combining XPS, FTIR and different stripping treatments, the authors propose ion exchange or partial replacement of Cu by Lu.'],limit:['需要测定溶液中释放的 Cu、固体中的 Lu/Cu 收支和吸附后结构，才能检验交换程度。现有证据不建立唯一的交换计量或保持完好的新框架。','Dissolved Cu release, Lu/Cu balances and post-uptake structure are needed to test exchange extent. The evidence does not establish a unique exchange stoichiometry or an intact new framework.']}
  ];
  function renderMechanism(){const m=mechanisms[state.mechanism];for(const key of ['title','evidence','limit'])text('mechanism-'+key,m[key]);pressed('mechanism');}
  const renderers={ph:renderPh,temperature:renderCapacity,mixture:renderMixture,cyclemetric:renderCycle,radiation:renderRadiation,mechanism:renderMechanism};
  Object.entries(renderers).forEach(([key,render])=>document.querySelectorAll('[data-'+key+']').forEach(button=>button.addEventListener('click',()=>{state[key]=Number(button.dataset[key]);render();})));
  el('trace-ce').addEventListener('input',renderTrace);
  function renderLanguage(language){state.language=language==='en'?'en':'zh';document.body.dataset.lang=state.language;Object.values(renderers).forEach(render=>render());renderTrace();}
  AtlasPaper.init({depth:window.PaperLesson.depth,shortTitle:'HKUST-1 · Lu',title:{zh:'HKUST-1 捕集 Lu：容量与痕量去除',en:'HKUST-1 captures Lu: capacity and trace removal'},sections:[{id:'idea',zh:'核心思想',en:'Core idea'},{id:'conditions',zh:'实验条件',en:'Conditions'},{id:'capacity',zh:'容量与拟合',en:'Capacity'},{id:'trace',zh:'痕量守恒',en:'Trace balance'},{id:'competition',zh:'竞争体系',en:'Competition'},{id:'reuse',zh:'再生循环',en:'Reuse'},{id:'stability',zh:'辐照证据',en:'Irradiation'},{id:'mechanism',zh:'机制解释',en:'Mechanism'},{id:'limits',zh:'研究边界',en:'Limits'},{id:'sources',zh:'来源',en:'Sources'}],legacyHeader:null,allowBoth:false,onLanguageChange:renderLanguage});
})();
