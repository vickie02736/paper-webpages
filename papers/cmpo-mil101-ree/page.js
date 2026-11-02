(() => {
  'use strict';
  const data = window.CmpoData;
  let lang = 'zh', stage = 3, evidence = 'parent';
  const time = document.getElementById('time'), ratio = document.getElementById('liquid-solid');
  const stages = {
    zh:[
      ['MIL-101(Cr) 母体','水热合成并洗涤的多孔载体；芳香连接体用于后续锚定。','P：未检出；尚未引入完整 CMPO 型基团。'],
      ['MIL-101-Cl：建立氯甲基锚点','在硝基甲烷中进行氯甲基化；面积和孔容与母体接近。','P：未检出；该中间体在所测 Eu 对照中未报告吸附。'],
      ['MIL-101-NH₂：接入二胺连接臂','与 1,4-二氨基丁烷反应，提供后续偶联所需的胺。','二胺估计负载 1.8 mmol/g；P 未检出。名称中的 NH₂ 不代表直接使用氨基对苯二甲酸合成。'],
      ['MIL-101-LIG：完成含磷基团','用 CDI 促成与二乙基膦酰乙酸的酰胺偶联。','表中 P 含量 1.55 wt%，CMPO 型基团估计 0.5 mmol/g；保留的 PXRD 特征支持主要晶体结构仍在。']
    ],
    en:[
      ['Parent MIL-101(Cr)','A hydrothermally synthesized and washed porous support; aromatic linkers provide sites for subsequent anchoring.','P: not detected; completed CMPO-type groups have not yet been introduced.'],
      ['MIL-101-Cl: chloromethyl anchoring sites','Chloromethylation in nitromethane leaves area and pore volume close to those of the parent.','P: not detected; no Eu uptake is reported for this intermediate in the tested control.'],
      ['MIL-101-NH₂: a diamine spacer','Reaction with 1,4-diaminobutane introduces amines for subsequent coupling.','Estimated diamine loading: 1.8 mmol/g; P not detected. The NH₂ name does not mean synthesis from aminoterephthalic acid.'],
      ['MIL-101-LIG: completed phosphorus groups','CDI enables amide coupling to diethylphosphonoacetic acid.','Tabulated P content: 1.55 wt%; estimated CMPO-type groups: 0.5 mmol/g. Retained PXRD features support persistence of the major crystalline structure.']
    ]
  };
  const evidenceText = {
    zh:{
      parent:['未改性 MIL-101 的长期酸浸','SI 图 S1–S2：HCl 调整的 pH 0 和 pH 4，分别处理 3 天及约两个月。PXRD 与 N₂ 等温线保留主要特征；作者报告面积由约 2000 增至 3000–近 4000 m²/g，并以洗去堵孔残留物解释。','这是未改性母体的测试，不能当成最终 CMPO 吸附剂已完成两个月的吸附–再生循环。面积增加也不能单独证明所有组分零浸出。','来源：SI §1、图 S1–S2；面积口径为 Langmuir。'],
      ligand:['最终吸附剂的 P 含量变化','正文以固体 XRF 的 P 含量估计功能基团保留：例子从 0.40 降至 0.38 mmol P/g，24 h 后约降低 5%。作者据此讨论基团连接较稳定。','这不等于测得全部溶液中游离配体的质量收支。P/g 会受样品质量与组成变化影响，也不证明 Cr 与连接体完全没有流失。','来源：正文“Adsorbent stability”；处理后水/丙酮洗涤、120 °C 真空干燥 24 h 再表征。'],
      porosity:['另一批 CMPO 吸附剂的 Eu 暴露','SI 表 S1：初始 Eu 100 mg/L、pH 4、25 °C、24 h。Langmuir 面积 2151 → 1780 m²/g，孔容 0.97 → 0.87 cm³/g；等温线保留主要形状。','由表计算，面积约降低 17.2%、孔容约降低 10.3%。这些是单位质量指标的变化，不是框架分解百分比；也不能与正文不同批次的 1390 m²/g 串联。','来源：SI §2、表 S1、图 S3。作者将下降归因于吸附 Eu 增重和 N₂ 吸附变化，未提供完整质量收支来唯一确定原因。']
    },
    en:{
      parent:['Long-term acid exposure of the unfunctionalized parent','SI Figs. S1–S2: HCl-adjusted pH 0 and pH 4, each for 3 days and about two months. Major PXRD and N₂-isotherm features persist. The authors report area rising from about 2000 to 3000–nearly 4000 m²/g, attributed to removal of pore-blocking residues.','This tests the unfunctionalized parent, not two months of adsorption/regeneration cycling of the completed CMPO adsorbent. Increased area alone does not prove zero component release.','Source: SI §1 and Figs. S1–S2; area uses the Langmuir method.'],
      ligand:['P-content change in the completed adsorbent','The main text estimates functional-group retention by solid XRF P content: an example falls from 0.40 to 0.38 mmol P/g after 24 h, about a 5% decrease. The authors interpret this as stable attachment.','This is not a full mass balance of dissolved free ligand. P/g can change with sample mass/composition and does not establish zero Cr or linker release.','Source: main “Adsorbent stability”; after exposure, samples are washed with water/acetone and vacuum dried at 120 °C for 24 h before characterization.'],
      porosity:['Eu exposure of a different CMPO-adsorbent batch','SI Table S1: initial Eu 100 mg/L, pH 4, 25 °C, 24 h. Langmuir area changes from 2151 to 1780 m²/g and pore volume from 0.97 to 0.87 cm³/g, with the main isotherm shape retained.','Calculated decreases are about 17.2% in area and 10.3% in pore volume. These are mass-specific measurements, not percentages of framework decomposition, and are not consecutive with the different main-text batch at 1390 m²/g.','Source: SI §2, Table S1 and Fig. S3. The authors attribute the decreases to Eu mass and altered N₂ sorption; no full balance uniquely identifies the cause.']
    }
  };
  data.stages.forEach((row,i) => {
    const button = document.createElement('button'); button.type='button';button.dataset.stage=String(i);button.textContent=row[0];button.setAttribute('aria-pressed','false');
    button.addEventListener('click',()=>{stage=i;renderStage();});document.getElementById('stage-buttons').append(button);
    const tr=document.createElement('tr');tr.innerHTML=`<th scope="row">${row[0]}</th><td>${row[1]}</td><td>${row[2]}</td><td>${row[3].toFixed(2)}</td><td data-p-nondetect="${row[4] === null}">${row[4]===null?'':row[4]}</td><td>${row[5]===null?'—':row[5]}</td>`;document.getElementById('stage-table').append(tr);
  });
  function bar(ion,value,max,suffix){return `<div class="bar-row"><span>${ion}</span><div class="track"><div class="fill" style="width:${value/max*100}%"></div></div><span>${value.toFixed(suffix==='%'?1:0)}${suffix}</span></div>`;}
  document.getElementById('kd-chart').innerHTML=data.kd.map(([ion,kd])=>bar(ion,kd,160,'')).join('');
  function renderStage(){
    const row=data.stages[stage],text=stages[lang][stage];
    document.getElementById('stage-title').textContent=text[0];document.getElementById('stage-method').textContent=text[1];document.getElementById('stage-loading').textContent=text[2];
    document.getElementById('stage-area').textContent=`${row[1]} m²/g`;
    document.getElementById('stage-volume').textContent=`${row[2]} cm³/g`;
    document.getElementById('stage-area-bar').style.width=`${row[1]/3500*100}%`;
    document.getElementById('stage-volume-bar').style.width=`${row[2]/1.5*100}%`;
    document.querySelectorAll('[data-stage]').forEach(b=>b.setAttribute('aria-pressed',String(Number(b.dataset.stage)===stage)));
    document.querySelectorAll('[data-p-nondetect="true"]').forEach(td=>{td.textContent=lang==='en'?'Not detected':'未检出';});
  }
  function renderModel(){
    const en=lang==='en',value=Number(ratio.value),t=Number(time.value),fraction=1-Math.exp(-.0071*t),qt=9.93*fraction;
    document.getElementById('ratio-label').textContent=`V/m = ${value} mL/g`;
    document.getElementById('fraction-chart').innerHTML=data.kd.map(([ion,kd])=>bar(ion,kd/(kd+value)*100,100,'%')).join('');
    document.getElementById('fraction-note').textContent=en?`Teaching calculation at fixed reported Kd: Eu ${(149/(149+value)*100).toFixed(1)}%, Y ${(48/(48+value)*100).toFixed(1)}%, Zn ${(17/(17+value)*100).toFixed(1)}% of the initial dissolved amount transfers to the solid under the mass-balance assumptions. Bars use 0–100%. These are not measured recovery values.`:`固定原文 Kd 的教学计算：在质量守恒假设下，初始溶解量中 Eu ${ (149/(149+value)*100).toFixed(1)}%、Y ${(48/(48+value)*100).toFixed(1)}%、Zn ${(17/(17+value)*100).toFixed(1)}% 转移到固体。条形固定量尺 0–100%；这些不是报告的实测回收率。`;
    document.getElementById('time-label').textContent=`t = ${t} min`;
    document.getElementById('kinetic-bar').style.width=`${fraction*100}%`;
    document.getElementById('kinetic-output').textContent=en?`Calculated PFO value at ${t} min: q(t) = ${qt.toFixed(2)} mg/g, ${(fraction*100).toFixed(1)}% of the fitted equilibrium amount 9.93 mg/g. This uses the reported k with q(0)=0.`:`${t} min 的 PFO 计算值：q(t) = ${qt.toFixed(2)} mg/g，为拟合平衡量 9.93 mg/g 的 ${(fraction*100).toFixed(1)}%。使用原文 k，并取 q(0)=0。`;
  }
  function renderEvidence(){const text=evidenceText[lang][evidence];['evidence-title','evidence-result','evidence-limit','evidence-source'].forEach((id,i)=>{document.getElementById(id).textContent=text[i];});document.querySelectorAll('[data-evidence]').forEach(b=>b.setAttribute('aria-pressed',String(b.dataset.evidence===evidence)));}
  ratio.addEventListener('input',renderModel);time.addEventListener('input',renderModel);
  document.querySelectorAll('[data-evidence]').forEach(b=>b.addEventListener('click',()=>{evidence=b.dataset.evidence;renderEvidence();}));
  window.AtlasPaper.init({shortTitle:'CMPO@MIL-101',title:{zh:'CMPO@MIL-101：Eu 吸附与稳定性证据',en:'CMPO@MIL-101: Eu uptake and stability evidence'},sections:[{id:'core',zh:'核心思想',en:'Core idea'},{id:'route',zh:'三步改性',en:'Functionalization'},{id:'uptake',zh:'容量含义',en:'Uptake metrics'},{id:'competition',zh:'混合选择性',en:'Competition'},{id:'kinetics',zh:'动力学',en:'Kinetics'},{id:'stability',zh:'稳定性证据',en:'Stability evidence'},{id:'limits',zh:'边界与联系',en:'Limits'},{id:'sources',zh:'来源',en:'Sources'}],allowBoth:false,onLanguageChange(next){lang=next;renderStage();renderModel();renderEvidence();}});
})();
