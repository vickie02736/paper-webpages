(() => {
  'use strict';
  const data = window.BENCHMARK_DATA;
  const el = id => document.getElementById(id);
  let language = 'zh';
  const tr = (zh, en) => language === 'en' ? en : zh;
  const measures = {
    crystal: {zh:'相对结晶度',en:'Relative crystallinity',max:200},
    bet: {zh:'BET 面积保留率',en:'BET area retention',max:600},
    co2: {zh:'CO₂ 容量保留率',en:'CO₂ uptake retention',max:160},
    mass: {zh:'校正质量保留率',en:'Corrected mass retention',max:125}
  };
  const notes = {
    'UiO-66':['64% 结晶度与 90.7% BET 保留率同时出现；质量保留率为 72.74%。三种证据没有给出同一个“分数”。','64% crystallinity coexists with 90.7% BET retention and 72.74% mass retention. The three measurements do not yield a single score.'],
    'UiO-67':['BET 从 1751.57 降至 38.95 m²/g（S2），但仍回收 90.81% 校正质量。固体留下来，孔隙却几乎消失。','BET area falls from 1751.57 to 38.95 m²/g (S2), while corrected mass retention is 90.81%. Solid remains, but almost all measured porosity is lost.'],
    'UiO-68':['结晶度仅 14%，BET 保留率 3.6%，质量却为 106.18%。高质量保留不能证明原框架保留。','Crystallinity is only 14% and BET retention 3.6%, while mass retention is 106.18%. High mass retention cannot establish preservation of the original framework.'],
    'CAU-10-H':['结晶度 104%，BET 保留率却只有 62.2%。衍射有序与气体可及孔道脱耦。','Crystallinity is 104%, but BET retention is only 62.2%. Diffraction order and gas-accessible porosity are decoupled.'],
    'MOF-74(Ni)':['结晶度为 122%，CO₂ 容量保留率为 45.8%。S2 的 N₂ BET 为 14 → 6 m²/g，S4 保留率为 42.9%；但图 S23e 蓝色水处理曲线位于红色原始曲线上方，与图注及表格方向不符。本页沿用表格数值，未据该图反推 BET。','Crystallinity is 122%, but CO₂ uptake retention is 45.8%. S2 gives N₂ BET areas of 14 → 6 m²/g and S4 gives 42.9% retention. In Figure S23e, however, the blue hydrated curve lies above the red pristine curve, conflicting with the caption and tables. This page follows the tables and does not infer BET areas from that plot.'],
    'MOF-74(Zn)':['567% BET 保留率来自很低的基线：19.4 → 110 m²/g（S2）。CO₂ 容量却从 1.32 降至 0.53 mmol/g。百分比变大不等于功能全部恢复。','The 567% BET ratio has a very low baseline: 19.4 → 110 m²/g (S2). CO₂ uptake instead falls from 1.32 to 0.53 mmol/g. A larger percentage is not complete functional recovery.'],
    'MIL-101(Cr)':['S4 给出 92% 结晶度、97.4% BET 与 98.27% 质量保留。S1 的结晶度为 93%，本页保留并说明这一原文差异。','S4 reports 92% crystallinity, 97.4% BET and 98.27% mass retention. S1 gives 93% crystallinity; this source discrepancy is explicitly retained.'],
    'Cu-HKUST-1':['116.5% 衍射积分强度伴随相变；它不是“116.5% 原始晶相”。作者因此提醒不能仅以这一比例判断稳定性。','The 116.5% diffraction-intensity ratio accompanies a phase change. It is not 116.5% of the original crystalline phase; the ratio alone cannot establish stability.'],
    'MIL-53(Fe)':['水处理后出现不同相；CO₂ 保留率 155.4% 与 BET 保留率 40.2% 方向相反。需结合原始等温线与相变阅读。','A different phase appears after treatment. CO₂ retention of 155.4% and BET retention of 40.2% move in opposite directions; read the isotherms alongside the phase change.'],
    'dptz-CuTiF6':['92% 结晶度、98% 质量，但 BET 仅保留 17.3%，CO₂ 保留 57.5%。三维有序结构的信号不保证孔道可用。','Crystallinity is 92% and mass retention 98%, but BET and CO₂ retention are only 17.3% and 57.5%. Order does not guarantee accessible pores.'],
    'ZIF-8':['结晶度为 80.9%，BET 面积从 1303 升至 1580 m²/g。作者提出清洗孔道等解释；这里没有将其当成已被单独证明的机制。','Crystallinity is 80.9%, while BET area rises from 1303 to 1580 m²/g. The authors suggest pore cleaning and related explanations; these are not uniquely established mechanisms.'],
    'ZIF-zni':['BET 与 CO₂ 的初始绝对值都很低（3.07 m²/g；0.1758 mmol/g）。相对值接近 100% 不能说明它有很高的绝对容量。','Both pristine absolute values are low (BET 3.07 m²/g; CO₂ 0.1758 mmol/g). A ratio near 100% does not imply high absolute capacity.']
  };
  ['material-a','material-b'].forEach(id => data.forEach(row => {
    const option = document.createElement('option'); option.value = row.name; option.textContent = row.name; el(id).append(option);
  }));
  el('material-a').value = 'CAU-10-H';
  el('material-b').value = 'UiO-67';
  const find = id => data.find(row => row.name === el(id).value);
  const value = number => number === null ? '—' : String(number);
  function renderComparison() {
    const metric = el('metric').value, measure = measures[metric];
    const selected = [find('material-a'),find('material-b')];
    const chart = el('comparison'); chart.replaceChildren();
    selected.forEach(row => {
      const line = document.createElement('div'); line.className = 'bar-row';
      const name = document.createElement('span'); name.textContent = row.name;
      const track = document.createElement('div'); track.className = 'track'; track.style.setProperty('--hundred',(100 / measure.max * 100)+'%');
      const fill = document.createElement('div'); fill.className = 'fill'; fill.style.width = ((row[metric] ?? 0) / measure.max * 100)+'%'; track.append(fill);
      const label = document.createElement('strong'); label.textContent = value(row[metric])+(row[metric] === null ? '' : '%');
      line.append(name,track,label); chart.append(line);
    });
    const description = selected.map(row => row.name+': '+(row[metric] === null ? tr('该表未报告','unreported in this table') : row[metric]+'%')).join('; ');
    chart.setAttribute('aria-label',measure[language]+'. '+description);
    el('axis-max').textContent = measure.max+'%';
    el('chart-description').textContent = measure[language]+' · '+description;
    selected.forEach((row,i) => {
      const n = notes[row.name] || [
        `SI 图 ${row.figure} 提供该材料的原始表征；应结合峰位、绝对吸附值和组成证据判断。`,
        `SI Figure ${row.figure} contains the original characterization. Interpret it with peak positions, absolute uptake and compositional evidence.`
      ];
      const node = el(i ? 'case-b' : 'case-a'); node.replaceChildren();
      const heading = document.createElement('strong'); heading.textContent = row.name;
      const paragraph = document.createElement('p'); paragraph.textContent = n[language === 'en' ? 1 : 0];
      node.append(heading,paragraph);
    });
  }
  function renderTable() {
    const query = el('search').value.trim().toLowerCase(), sort = el('sort').value;
    const rows = data.filter(row => row.name.toLowerCase().includes(query));
    if (sort !== 'original') rows.sort((a,b) => (b[sort] ?? -Infinity) - (a[sort] ?? -Infinity));
    const fragment = document.createDocumentFragment();
    rows.forEach(row => {
      const trNode = document.createElement('tr');
      [row.name,value(row.crystal),value(row.bet),value(row.co2),value(row.mass),row.figure].forEach(text => {const td=document.createElement('td');td.textContent=text;trNode.append(td);});
      fragment.append(trNode);
    });
    el('data-rows').replaceChildren(fragment);
    el('count').textContent = tr(`显示 ${rows.length} / 51 种材料。`,`Showing ${rows.length} of 51 materials.`);
  }
  function calculateMass() {
    const fields = ['mp','mh','wp','wh'];
    const numbers = fields.map(id => Number(el(id).value));
    if (fields.some(id => !el(id).value.trim() || !el(id).checkValidity()) || numbers.some(n => !Number.isFinite(n))) {
      el('mass-output').textContent = tr('请输入有效的质量与质量分数；初始质量和初始 w 必须大于零。','Enter valid masses and fractions; pristine mass and pristine w must be greater than zero.');return;
    }
    const [mp,mh,wp,wh] = numbers;
    const raw = mh/mp*100, corrected=mh*wh/(mp*wp)*100;
    const output=el('mass-output');output.replaceChildren();
    output.append(document.createTextNode(tr('直接称重比：','Raw mass ratio: ')+raw.toFixed(2)+'% · '+tr('TGA 校正后：','After TGA correction: ')));
    const strong=document.createElement('strong');strong.textContent=corrected.toFixed(2)+'%';output.append(strong);
  }
  ['material-a','material-b','metric'].forEach(id => el(id).addEventListener('change',renderComparison));
  el('search').addEventListener('input',renderTable);el('sort').addEventListener('change',renderTable);
  ['mp','mh','wp','wh'].forEach(id => el(id).addEventListener('input',calculateMass));
  function preset(values) {['mp','mh','wp','wh'].forEach((id,i)=>el(id).value=values[i]);calculateMass();}
  el('preset-cr').addEventListener('click',()=>preset([30,47.4,82,51]));
  el('preset-uio').addEventListener('click',()=>preset([30,26.67,88,72]));
  window.AtlasPaper.init({
    shortTitle:'MOF · H₂O',
    title:{zh:'MOF 水稳定性：三个指标，三个问题',en:'MOF water stability: three measures, three questions'},
    sections:[{id:'core',zh:'核心问题',en:'Core question'},{id:'method',zh:'实验流程',en:'Workflow'},{id:'metrics',zh:'三个指标',en:'Three measures'},{id:'evidence',zh:'51 材料比较',en:'Compare 51 materials'},{id:'mass',zh:'质量校正',en:'Mass correction'},{id:'interpretation',zh:'设计启发',en:'Design insights'},{id:'limits',zh:'证据边界',en:'Evidence limits'},{id:'sources',zh:'来源',en:'Sources'}],
    legacyHeader:null,allowBoth:false,
    onLanguageChange(lang) {
      language=lang;document.body.dataset.lang=lang;
      document.querySelectorAll('option[data-zh]').forEach(option=>option.textContent=option.dataset[lang]);
      renderComparison();renderTable();calculateMass();
    }
  });
})();
