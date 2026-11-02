(() => {
  'use strict';
  const data = window.GdData;
  let lang = 'zh', selected = 4, mixture = 'impurity';
  const ce = document.getElementById('ce');
  const chart = document.getElementById('material-chart');
  const table = document.getElementById('parameter-table');
  data.forEach((row, i) => {
    const item = document.createElement('article');
    item.className = 'material-row';
    item.innerHTML = `<button type="button" data-material="${i}" aria-pressed="false">${row[0]}</button><div class="dual-bars"><div><div class="bar-label uptake-label"></div><div class="track"><div class="fill" style="width:${row[3]}%"></div></div></div><div class="bet"><div class="bar-label bet-label"></div><div class="track"><div class="fill" style="width:${row[1] / 1500 * 100}%"></div></div></div></div>`;
    item.querySelector('button').addEventListener('click', () => { selected = i; renderMaterial(); });
    chart.append(item);
    const tr = document.createElement('tr');
    tr.innerHTML = `<th scope="row">${row[0]}</th>${row.slice(1).map(v => `<td>${v}</td>`).join('')}`;
    table.append(tr);
  });
  function renderMaterial() {
    const en = lang === 'en', row = data[selected], concentration = Number(ce.value);
    [...chart.children].forEach((item, i) => {
      item.classList.toggle('selected', i === selected);
      item.querySelector('button').setAttribute('aria-pressed', String(i === selected));
      item.querySelector('.uptake-label').textContent = `${en ? 'Fitted Q₀' : '拟合 Q₀'}: ${data[i][3]} mg/g`;
      item.querySelector('.bet-label').textContent = `BET: ${data[i][1]} m²/g`;
    });
    const base = data[0];
    document.getElementById('material-summary').textContent = en ?
      `${row[0]}: fitted Q₀ ${row[3]} mg/g, BET ${row[1]} m²/g and pore volume ${row[2]} cm³/g. The Q₀ ratio to pristine UiO-66 is ${(row[3] / base[3]).toFixed(2)}, calculated from rounded table values. Mixture and reuse results belong to the selected COOH(25)-ED material studied by the authors, regardless of the material displayed here.` :
      `${row[0]}：拟合 Q₀ 为 ${row[3]} mg/g，BET 为 ${row[1]} m²/g，总孔容 ${row[2]} cm³/g。由表中舍入值计算，Q₀ 是 UiO-66 的 ${(row[3] / base[3]).toFixed(2)} 倍。后文的混合选择性和再生结果属于作者所用 COOH(25)-ED 样品，不随这里的材料选择改变。`;
    const q = c => row[3] * row[4] * c / (1 + row[4] * c);
    const points = Array.from({length:101}, (_, c) => `${c ? 'L' : 'M'}${(65 + c * 5.45).toFixed(2)},${(275 - q(c) * 2.5).toFixed(2)}`).join(' ');
    document.getElementById('model-curve').setAttribute('d', points);
    const point = document.getElementById('model-point');
    point.setAttribute('cx', String(65 + concentration * 5.45));
    point.setAttribute('cy', String(275 - q(concentration) * 2.5));
    document.getElementById('ce-label').textContent = `Cₑ = ${concentration} mg/L`;
    document.getElementById('model-summary').textContent = en ?
      `Model calculation: ${row[0]}, Q₀ = ${row[3]} mg/g and b = ${row[4]} L/mg. At Cₑ = ${concentration} mg/L, the model gives qₑ = ${q(concentration).toFixed(2)} mg/g. This is a calculated point, not a new measurement.` :
      `模型计算：${row[0]}，Q₀ = ${row[3]} mg/g，b = ${row[4]} L/mg。Cₑ = ${concentration} mg/L 时，模型给出 qₑ = ${q(concentration).toFixed(2)} mg/g。这是计算点，不是新增测量。`;
    document.getElementById('plot-title').textContent = en ? 'Langmuir model for the selected material' : '所选材料的 Langmuir 模型';
    document.getElementById('plot-desc').textContent = en ?
      `Calculated curve for ${row[0]}. Horizontal axis Cₑ: 0–100 mg/L. Vertical axis qₑ: 0–100 mg/g. The highlighted teaching point is ${concentration} mg/L and ${q(concentration).toFixed(2)} mg/g.` :
      `${row[0]} 的计算曲线。横轴 Cₑ 为 0–100 mg/L，纵轴 qₑ 为 0–100 mg/g。突出显示的教学点为 ${concentration} mg/L、${q(concentration).toFixed(2)} mg/g。`;
  }
  function renderMixture() {
    const en = lang === 'en', impurity = mixture === 'impurity';
    document.querySelectorAll('[data-mixture]').forEach(button => button.setAttribute('aria-pressed', String(button.dataset.mixture === mixture)));
    document.getElementById('mixture-title').textContent = impurity ?
      (en ? 'Gd preference over the tested non-REE ions' : '对所测非稀土离子，Gd 更受偏好') :
      (en ? 'Within this REE mixture, Yb is preferred over Gd' : '在这组稀土中，Yb 的偏好高于 Gd');
    document.getElementById('mixture-ions').textContent = impurity ? 'Gd³⁺ · Na⁺ · Ca²⁺ · Mg²⁺ · Al³⁺ · Fe³⁺' : 'Yb³⁺ > Gd³⁺ > Nd³⁺ > La³⁺';
    document.getElementById('mixture-summary').textContent = impurity ?
      (en ? 'The authors report about 75% selectivity for Gd on their Kd-based percentage comparison. Al and Fe also contribute; the result concerns this six-ion feed.' : '作者按其基于 Kd 的百分比比较，报告约 75% 的 Gd 选择性。Al 与 Fe 也有吸附贡献；结论限于这组六离子进料。') :
      (en ? 'Fig. 6b and §3.6 report Yb > Gd > Nd > La. This favours the heavier ion in this four-REE set, rather than demonstrating a Gd-specific receptor.' : '图 6b 和 §3.6 给出 Yb > Gd > Nd > La。在这组四稀土进料中，较重离子更受偏好，不能据此称为 Gd 专一受体。');
    document.getElementById('mixture-boundary').textContent = en ?
      'Reported context from Fig. 6 and SI-2. These are different mixtures. No unreported bar percentages, recovery values or adjacent-lanthanide separation factors are inferred.' :
      '依据图 6 和 SI-2；这是两种不同混合体系。本页不补造逐离子条形百分比、回收率或相邻镧系离子分离系数。';
  }
  ce.addEventListener('input', renderMaterial);
  document.querySelectorAll('[data-mixture]').forEach(button => button.addEventListener('click', () => { mixture = button.dataset.mixture; renderMixture(); }));
  window.AtlasPaper.init({
    shortTitle:'UiO-66–COOH–ED',
    title:{zh:'双官能团 UiO-66：Gd 容量与选择性',en:'Dual-functional UiO-66: Gd uptake and selectivity'},
    sections:[{id:'core',zh:'核心问题',en:'Core idea'},{id:'synthesis',zh:'合成路线',en:'Preparation'},{id:'capacity',zh:'容量与孔隙',en:'Uptake and pores'},{id:'kinetics',zh:'动力学',en:'Kinetics'},{id:'ph',zh:'pH 与机制',en:'pH and mechanism'},{id:'selectivity',zh:'混合选择性',en:'Selectivity'},{id:'regeneration',zh:'酸洗再生',en:'Regeneration'},{id:'limits',zh:'边界与联系',en:'Limits'},{id:'sources',zh:'来源',en:'Sources'}],
    allowBoth:false,
    onLanguageChange(next) { lang = next; renderMaterial(); renderMixture(); }
  });
})();
