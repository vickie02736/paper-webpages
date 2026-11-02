(() => {
  'use strict';
  const data = window.AcrylicData;
  const pHs = [1, 2, 3, 4, 4.5];
  let lang = 'zh', selectedRoute = 4, selectedPH = 4;
  const num = value => Number.isInteger(value) ? String(value) : String(value);
  const routeChart = document.getElementById('route-chart');
  data.routes.forEach((row, i) => {
    const item = document.createElement('article');
    item.className = 'route-row';
    item.innerHTML = `<button type="button" data-route="${i}" aria-pressed="false">${row[0]}</button><div class="dual-bars"><div><div class="route-capacity-label"></div><div class="track"><div class="fill" style="width:${row[1] / 70 * 100}%"></div></div></div><div><div class="route-bet-label"></div><div class="track"><div class="fill" style="background:#d9abff;width:${row[3] / 2600 * 100}%"></div></div></div></div>`;
    item.querySelector('button').addEventListener('click', () => { selectedRoute = i; renderRoute(); });
    routeChart.append(item);
  });
  pHs.forEach((pH, i) => {
    const button = document.createElement('button');
    button.type = 'button';
    button.textContent = `pH ${pH}`;
    button.dataset.phIndex = String(i);
    button.addEventListener('click', () => { selectedPH = i; renderPH(); });
    document.getElementById('ph-buttons').append(button);
  });
  document.getElementById('sel-table').innerHTML = data.sel.map(row => `<tr><th scope="row">Sc/${row[0]}</th>${row.slice(1).map(v => `<td>${num(v)}</td>`).join('')}</tr>`).join('');
  function bar(label, value, max, suffix = '') {
    return `<div class="selrow"><span>${label}</span><div class="track"><div class="fill" style="width:${value / max * 100}%"></div></div><span>${num(value)}${suffix}</span></div>`;
  }
  document.getElementById('qmax-chart').innerHTML = data.qmax.map(([ion, value]) => bar(ion, value, 120)).join('');
  document.getElementById('elution-chart').innerHTML = data.elution.map(([acid, concentration, value]) => `<div class="eluent-row"><p>${acid} · ${concentration} mol/L · ${value.toFixed(2)}%</p><div class="track"><div class="fill" style="width:${value}%"></div></div></div>`).join('');
  function renderRoute() {
    const en = lang === 'en';
    [...routeChart.children].forEach((item, i) => {
      const row = data.routes[i];
      item.classList.toggle('selected-route', i === selectedRoute);
      item.querySelector('button').setAttribute('aria-pressed', String(i === selectedRoute));
      item.querySelector('.route-capacity-label').textContent = `${en ? 'Sc uptake' : 'Sc 吸附量'}: ${row[1].toFixed(2)} mg/g`;
      item.querySelector('.route-bet-label').textContent = `BET: ${row[3].toFixed(2)} m²/g`;
    });
    const row = data.routes[selectedRoute];
    const selectedByAuthors = selectedRoute === 4;
    const statement = en ?
      `${row[0]}: Sc screening uptake ${row[1].toFixed(2)} mg/g; titrated carboxyl groups ${row[2].toFixed(2)} mmol/g; BET ${row[3].toFixed(2)} m²/g. ${selectedByAuthors ? 'The authors select this material for subsequent tests.' : 'The subsequent mixture and reuse results belong to the authors’ selected 0.075-AA material, not automatically to this composition.'}` :
      `${row[0]}：Sc 筛选吸附量 ${row[1].toFixed(2)} mg/g；羧基滴定值 ${row[2].toFixed(2)} mmol/g；BET ${row[3].toFixed(2)} m²/g。${selectedByAuthors ? '作者选用此材料进行后续实验。' : '后续混合吸附与再生结果属于作者选用的 0.075-AA 材料，不能自动归于当前配方。'}`;
    document.getElementById('route-summary').textContent = statement;
  }
  function renderPH() {
    const en = lang === 'en', pH = pHs[selectedPH];
    document.querySelectorAll('#ph-buttons button').forEach((b, i) => { b.setAttribute('aria-pressed', String(i === selectedPH)); });
    document.getElementById('selectivity-chart').innerHTML = data.sel.map(row => bar(`Sc/${row[0]}`, row[selectedPH + 1], 3)).join('');
    document.getElementById('ph-title').textContent = `pH ${pH} · ${en ? 'reported Sel' : '原文 Sel'}`;
    const values = data.sel.map(row => row[selectedPH + 1]);
    const min = Math.min(...values), max = Math.max(...values);
    document.getElementById('ph-note').textContent = en ?
      `The 15 reported Sel values span ${num(min)}–${num(max)}. ${selectedPH === 0 ? 'The authors report weak uptake at pH 1; do not equate these values with a high Sc recovery.' : 'The authors describe preference for Sc in this pH range. The numbers describe relative partitioning, not how much of the feed is recovered.'} Bars and the full table share the same source data.` :
      `15 个报告的 Sel 值范围为 ${num(min)}–${num(max)}。${selectedPH === 0 ? '作者在 pH 1 下报告的吸附较弱；这些数值不能等同于高 Sc 回收率。' : '作者在此 pH 范围内观察到 Sc 优先吸附。数值描述相对分配，不能直接给出进料的回收比例。'}条形图与完整表格使用同一组源数据。`;
  }
  function render() { renderRoute(); renderPH(); }
  window.AtlasPaper.init({
    shortTitle: 'AA–MIL-101',
    title: {zh:'丙烯酸改性 MIL-101：容量增加之后，Sc 选择性如何？',en:'Acrylic-acid MIL-101: capacity and Sc selectivity'},
    sections:[
      {id:'core',zh:'核心问题',en:'Core idea'}, {id:'synthesis',zh:'制备路线',en:'Preparation'},
      {id:'tradeoff',zh:'羧基与孔隙',en:'Sites and pores'}, {id:'capacity',zh:'容量含义',en:'Uptake metrics'},
      {id:'selectivity',zh:'混合选择性',en:'Selectivity'}, {id:'mechanism',zh:'机制证据',en:'Mechanism'},
      {id:'regeneration',zh:'酸洗与再生',en:'Regeneration'}, {id:'limits',zh:'边界与联系',en:'Limits'},
      {id:'sources',zh:'来源',en:'Sources'}
    ],
    allowBoth:false,
    onLanguageChange(next) { lang = next; render(); }
  });
})();
