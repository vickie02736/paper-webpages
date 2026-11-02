(() => {
  'use strict';
  const data=window.DUAL_DATA, metric=document.getElementById('metric'),aggregation=document.getElementById('aggregation'),water=document.getElementById('water-count');
  let lang='zh', material=3, path='UMCM-1';
  const t=(z,e)=>lang==='zh'?z:e;
  const svgNS='http://www.w3.org/2000/svg';
  const x=n=>90+(n-1)/15*720,y=v=>65+(50-v)/250*300;
  const show=v=>v===null?t('缺失','Missing'):v.toFixed(1);
  function modelName(){const m=data.models[material];return m.name+(m.spin?' · '+(m.spin==='singlet'?t('单重态','singlet'):t('三重态','triplet')):'');}
  function svgText(xp,yp,value,anchor='middle'){return `<text x="${xp}" y="${yp}" text-anchor="${anchor}">${value}</text>`;}
  function localize(){
    metric.options[0].textContent=t('自由能 G · 298.15 K / 1 atm','Free energy G · 298.15 K / 1 atm');
    metric.options[1].textContent=t('吸附能 E','Adsorption energy E');
    aggregation.options[0].textContent=t('平均：全部客体水','Average: all guest water');aggregation.options[1].textContent=t('逐步：新加入的水','Stepwise: newly added water');
    water.setAttribute('aria-label',t('选择已报告的客体水分子数','Choose a reported guest-water count'));
  }
  function render(){
    const m=data.models[material],a=aggregation.value,k=metric.value,idx=Number(water.value),n=data.n[idx],v=m[a][k][idx];
    document.querySelectorAll('[data-material]').forEach(b=>b.setAttribute('aria-pressed',String(Number(b.dataset.material)===material)));
    const key=(a==='average'?t('平均','Average'):t('逐步','Stepwise'))+' '+k;
    document.getElementById('energy-output').textContent=`${modelName()} · n = ${n} · ${key}: ${show(v)}${v===null?'':' kJ mol⁻¹'}`;
    document.getElementById('plot-title').textContent=`${modelName()} · ${key}`;
    document.getElementById('plot-desc').textContent=t('SI 表 S1 的计算值。横轴为客体水数 1–16，纵轴固定为 −200 至 +50 kJ mol⁻¹；虚线仅引导阅读，缺失值不补零。','Calculated Table S1 values. Guest count 1–16 on x; fixed y range −200 to +50 kJ mol⁻¹. Dashed lines guide reading; missing values remain missing.');
    const ticks=[-200,-150,-100,-50,0,50];
    document.getElementById('plot-grid').innerHTML=ticks.map(v=>`<path d="M90 ${y(v)} H810"/>`).join('')+'<path d="M90 65 V365 H810"/>';
    document.getElementById('plot-labels').innerHTML=ticks.map(v=>svgText(76,y(v)+6,String(v),'end')).join('')+data.n.map(n=>svgText(x(n),400,String(n))).join('')+svgText(450,447,t('客体水数 n','Guest-water count n'))+svgText(90,32,`${key} / kJ mol⁻¹`,'start');
    let d='',newSegment=true;const pts=[];
    m[a][k].forEach((value,i)=>{if(value===null){newSegment=true;return;}d+=(newSegment?'M':'L')+x(data.n[i])+' '+y(value)+' ';newSegment=false;pts.push(`<circle cx="${x(data.n[i])}" cy="${y(value)}" r="${i===idx?7:4}" class="${i===idx?'selected':''}"/>`);});
    document.getElementById('energy-line').setAttribute('d',d);document.getElementById('energy-points').innerHTML=pts.join('');
    let reading;
    if(v===null)reading=t('SI 表 S1 未提供 MIL-127(Fe) 在 n = 16 的结果。缺失不表示零结合能，也不表示该状态必然不稳定。','Table S1 provides no MIL-127(Fe) n = 16 result. Missing does not mean zero binding energy or establish instability.');
    else if(k==='E')reading=t('E 描述此计算模型的能量变化，不包含与 G 相同的完整热/熵贡献；不能只用负 E 判定某温压下每一步都自发，更不能据此预测耐水寿命。','E describes a model energy change without the same full thermal/entropic contributions as G. Negative E alone does not establish a spontaneous step at a given temperature/pressure or predict a hydrolytic lifetime.');
    else if(a==='average')reading=t('负的平均 G 表示相对于所定义分离参考态，整个 n 水簇形成在该模型标准条件下有利；它不会保证从前一个 n 状态继续加水也有利。','Negative average G favours formation of the complete n-water cluster relative to the defined separated reference at the model conditions. It does not guarantee a favourable increment from the previous n state.');
    else if(v>0)reading=t('此新增步骤的每水自由能变化为正，尽管整个含水簇的平均 G 仍可能为负。单个不利步骤也不证明后续所有加水都不利。','This increment has a positive per-water free-energy change, although the entire cluster may still have negative average G. One unfavourable increment does not make every subsequent addition unfavourable.');
    else reading=t('此新增步骤在模型标准条件下的每水 G 为负。这里的“逐步”跨越相邻已报告 n 值，不一定每次只加一个水，也不构成实验湿度阈值。','This increment has negative per-water G at the model conditions. A step spans consecutive reported n values and may add more than one molecule. It is not an experimental humidity threshold.');
    document.getElementById('energy-reading').textContent=reading;
    document.getElementById('energy-table').innerHTML=data.n.map((n,i)=>`<tr><th scope="row">${n}</th>${[m.average.E[i],m.average.G[i],m.stepwise.E[i],m.stepwise.G[i]].map(v=>`<td>${show(v)}</td>`).join('')}</tr>`).join('');
  }
  const paths={
    'UMCM-1':{levels:[['Reactants',0],['INT0',-25.2],['TS0',2.8],["INT0′",-25.2],['TS1',-6.5],['INT1',-26.3],['TS2',93.3],['INT2',62.4],['Product',22.3]],zh:'图 3 的较小模型：形成 INT1 对应一个羧酸根 O 脱离的局部失稳。后续完整脱离路径有更高能级；多水降低后续势垒的可能性未在本研究直接计算。线上的能级均有各自参考点，不能把 TS1 = −6.5 当作负活化能。',en:'The smaller Fig. 3 model reaches local destabilization at INT1 with one carboxylate O detached. Further detachment involves higher levels. Facilitation by additional water is not calculated here. TS1 = −6.5 is relative to reactants, not a negative local activation barrier.'},
    'HKUST-1':{levels:[['Reactants',0],['hk-TS1',26.8],['hk-INT1',-13.9],['hk-product',-10.4]],zh:'图 4：单重态 HKUST-1 的轴向水参与第一段反应。hk-INT1 之后没有经 IRC 确认的过渡态，因此最后的稳定产物能级不能证明已找到连续、完整的反应路径。',en:'Fig. 4 follows an axial water on singlet HKUST-1. No transition state beyond hk-INT1 is confirmed by IRC; the stable proposed product does not establish a complete connected pathway.'},
    'MIL-127(Fe)':{levels:[['Reactants',0],['mi-TS1',47.6],['mi-INT1',29.3],['mi-product',51.1]],zh:'图 5：第一步相对 HKUST-1 更高，形成的中间体与拟议产物也更高。mi-INT1 后未确认进一步路径；这支持所试局部模型更难水解的解释，不提供实际运行时间。',en:'Fig. 5 has a higher first level than HKUST-1 and uphill intermediate/proposed product. No further path beyond mi-INT1 is confirmed. This supports a harder-to-hydrolyse local model, without supplying an operational lifetime.'}
  };
  function renderPath(){document.querySelectorAll('[data-path]').forEach(b=>b.setAttribute('aria-pressed',String(b.dataset.path===path)));const a=paths[path];document.getElementById('path-title').textContent=path+' · '+t('相对 G / kJ mol⁻¹','relative G / kJ mol⁻¹');document.getElementById('path-levels').innerHTML=a.levels.map(([name,v])=>`<div class="level"><span>${name==='Reactants'?t('初始反应物','Initial reactants'):name==='Product'?t('产物','Product'):name}</span><strong>${v.toFixed(1)}</strong></div>`).join('');document.getElementById('path-note').textContent=a[lang];}
  document.querySelectorAll('[data-material]').forEach(b=>b.addEventListener('click',()=>{material=Number(b.dataset.material);render();}));
  document.querySelectorAll('[data-path]').forEach(b=>b.addEventListener('click',()=>{path=b.dataset.path;renderPath();}));
  [metric,aggregation].forEach(c=>c.addEventListener('change',render));water.addEventListener('input',render);
  document.getElementById('reset').addEventListener('click',()=>{material=3;metric.value='G';aggregation.value='average';water.value='0';render();});
  window.AtlasPaper.init({depth:window.PaperLesson.depth,shortTitle:'MOF · H₂O',title:{zh:'水对 MOF 稳定性的双重作用',en:'The dual impact of water on MOF stability'},sections:[{id:'core',zh:'核心思想',en:'Core idea'},{id:'models',zh:'模型',en:'Models'},{id:'sites',zh:'位点',en:'Sites'},{id:'condensation',zh:'加水能量',en:'Water energies'},{id:'paths',zh:'水解路径',en:'Hydrolysis'},{id:'spin',zh:'自旋',en:'Spin'},{id:'protection',zh:'保护网络',en:'Protection'},{id:'reproducibility',zh:'SI 与坐标',en:'SI / coordinates'},{id:'ree',zh:'REE 联系',en:'REE connection'},{id:'sources',zh:'来源',en:'Sources'}],allowBoth:false,onLanguageChange(next){lang=next;localize();render();renderPath();}});
})();
