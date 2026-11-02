(() => {
  'use strict';
  const data = window.KINETIC_DATA;
  const state = { language: 'zh', route: 0, gas: 0, capacity: 0 };
  const el = id => document.getElementById(id);
  const tr = pair => pair[state.language === 'en' ? 1 : 0];
  const setText = (id, value) => { el(id).textContent = value; };
  const pressed = (key, value) => document.querySelectorAll('[data-' + key + ']').forEach(button => {
    button.setAttribute('aria-pressed', String(Number(button.dataset[key]) === value));
  });
  const routes = [
    { y: [210, 100, 280], title: ['基准：多孔相被重排能垒留住', 'Baseline: a barrier preserves the porous phase'], description: ['示意终态比多孔初态低，但转变仍需跨越能垒。曲线不表示实测材料，也不指定反应所需时间。', 'The schematic final state lies below the porous state, but conversion requires crossing a barrier. This is not a measured material or a specified reaction time.'], limit: ['该图假定比较相同组分的多孔相和致密相。水解或与氧化剂反应需要另行定义反应物和产物。', 'The comparison assumes porous and dense phases of the same constituents. Hydrolysis and reactions with oxidants require separately defined reactants and products.'] },
    { y: [210, 45, 280], title: ['更惰性的金属：抬高重排过渡态', 'A more inert metal raises the rearrangement transition state'], description: ['示意中初、终态保持原位，过渡态升高，因此从多孔相出发的能垒增大。驱动力没有随之改变。', 'Initial and final states remain fixed while the transition state rises. The barrier from the porous phase increases without changing the driving force.'], limit: ['真实材料可能同时改变配位、键强度和相能量。这一按钮只隔离图 2b 所强调的概念效应。', 'Real materials may also change coordination, bond strength and phase energies. This button isolates the conceptual effect emphasized in Fig. 2b.'] },
    { y: [270, 100, 340], title: ['更强的键：相对断键过渡态稳定骨架', 'Stronger bonds stabilize the framework relative to bond breaking'], description: ['示意中多孔相与含相同键的致密相一起降低，断键过渡态保持原位。能垒增大，但两端能量差仍与基准相同。', 'The porous phase and the dense phase containing the same bonds both move down, while the bond-breaking transition state stays fixed. The barrier grows but the endpoint difference remains unchanged.'], limit: ['这是图 2d 的定性论证，不是对所有配体替换都成立的恒等数值关系；其他反应通道仍须检验。', 'This is the qualitative argument in Fig. 2d, rather than a numerical identity for every linker substitution. Other reaction channels still need checking.'] }
  ];
  function curve(values, compact) {
    const [start, top, end] = values;
    if (compact) return `M75 ${start} C155 ${start} 175 ${top} 240 ${top} C305 ${top} 325 ${end} 405 ${end}`;
    return `M80 ${start} C220 ${start} 250 ${top} 360 ${top} C470 ${top} 500 ${end} 680 ${end}`;
  }
  function renderRoute() {
    const item = routes[state.route], [start, top, end] = item.y;
    setText('route-title', tr(item.title));
    setText('route-description', tr(item.description));
    setText('route-limit', tr(item.limit));
    setText('energy-title', tr(['重排能垒的定性示意', 'Qualitative rearrangement barrier']));
    setText('energy-description', tr(item.description));
    const compact = window.matchMedia('(max-width:650px)').matches;
    const x = compact ? { start: 75, top: 240, end: 405, barrier: 263, difference: 430, middle: 240, axis: 465 } : { start: 80, top: 360, end: 680, barrier: 402, difference: 714, middle: 390, axis: 740 };
    el('energy-plot').setAttribute('viewBox', `0 0 ${compact ? 480 : 780} 440`);
    el('energy-content').innerHTML = `<path d="M55 20 V390 H${x.axis}" fill="none" stroke="#a8b4c7" stroke-width="1.5"/>
      <path d="${curve(routes[0].y, compact)}" fill="none" stroke="#a8b4c7" stroke-width="2" stroke-dasharray="7 7"/>
      <path d="${curve(item.y, compact)}" fill="none" stroke="#7de3ff" stroke-width="4"/>
      <path d="M${x.barrier-7} ${top} H${x.barrier+7} M${x.barrier} ${top} V${start} M${x.barrier-7} ${start} H${x.barrier+7}" fill="none" stroke="#c5a5ff" stroke-width="2"/>
      <path d="M${x.difference-7} ${start} H${x.difference+7} M${x.difference} ${start} V${end} M${x.difference-7} ${end} H${x.difference+7}" fill="none" stroke="#ffbd89" stroke-width="2"/>
      <text x="${x.start}" y="${start + 35}">${tr(['多孔相', 'Porous phase'])}</text>
      <text x="${x.top}" y="${top - 15}" text-anchor="middle">${tr(['过渡态', 'Transition state'])}</text>
      <text x="${x.end}" y="${end + 35}" text-anchor="end">${tr(['致密相', 'Dense phase'])}</text>
      <text x="${x.middle}" y="428" text-anchor="middle">${tr(['反应坐标（非时间）', 'Reaction coordinate (not time)'])}</text>
      <text transform="translate(24 205) rotate(-90)" text-anchor="middle">${tr(['能量（定性）', 'Energy (qualitative)'])}</text>`;
    pressed('route', state.route);
  }
  function renderGas() {
    const gas = data.gases[state.gas];
    for (const key of ['title', 'chemistry', 'example', 'limit']) setText('gas-' + key, tr(gas[key]));
    setText('gas-source', tr(['综述位置：', 'Review location: ']) + gas.source);
    pressed('gas', state.gas);
  }
  function renderCapacity() {
    const titles = [['静态 NH₃ 容量', 'Static NH₃ capacity'], ['干气 NH₃ 突破容量', 'Dry NH₃ breakthrough capacity'], ['湿气 NH₃ 突破容量', 'Humid NH₃ breakthrough capacity']];
    setText('capacity-title', tr(titles[state.capacity]));
    setText('capacity-basis', tr(state.capacity === 0
      ? ['纯 NH₃ · 1 bar · 298 K · 表 2 · mmol g⁻¹', 'Pure NH₃ · 1 bar · 298 K · Table 2 · mmol g⁻¹']
      : state.capacity === 1 ? ['1000 ppm NH₃ · 干气 · 298 K · 表 3 · mmol g⁻¹', '1000 ppm NH₃ · dry · 298 K · Table 3 · mmol g⁻¹']
        : ['1000 ppm NH₃ · 80% RH · 298 K · 表 3 · mmol g⁻¹', '1000 ppm NH₃ · 80% RH · 298 K · Table 3 · mmol g⁻¹']));
    setText('capacity-warning', tr(state.capacity === 2
      ? ['HKUST-1 的湿态容量比干态大，但综述同时指出它会发生结构反应；容量增加不能作为耐久性提升的证据。', 'HKUST-1 has greater humid than dry uptake, while the review also describes framework reaction. Increased uptake does not establish improved durability.']
      : ['高容量与可逆循环是不同证据。保留原压力和测试模式，再与结构、孔隙及反应产物一起解释。', 'High uptake and reversible cycling are different evidence. Interpret the stated pressure and test mode together with structure, porosity and products.']));
    const chart = el('ammonia-chart');
    chart.setAttribute('aria-label', tr(['氨容量，单位毫摩尔每克，量尺零至二十', 'Ammonia capacity in millimoles per gram, zero-to-twenty scale']));
    chart.replaceChildren();
    for (const item of data.rows) {
      const value = item.values[state.capacity];
      const row = document.createElement('div'); row.className = 'capacity-row';
      const heading = document.createElement('div'); heading.className = 'capacity-heading';
      const name = document.createElement('span'); name.textContent = item.name;
      const number = document.createElement('strong'); number.textContent = value.toFixed(2) + ' mmol g⁻¹';
      heading.append(name, number);
      const track = document.createElement('div'); track.className = 'capacity-track'; track.setAttribute('aria-hidden', 'true');
      const bar = document.createElement('div'); bar.className = 'capacity-bar'; bar.style.width = (value * 5) + '%';
      track.append(bar); row.append(heading, track); chart.append(row);
    }
    const axis = document.createElement('div'); axis.className = 'axis'; axis.setAttribute('aria-hidden', 'true');
    const first = document.createElement('span'); first.textContent = '0';
    const last = document.createElement('span'); last.textContent = '20 mmol g⁻¹';
    axis.append(first, last); chart.append(axis);
    pressed('capacity', state.capacity);
  }
  for (const [key, render] of [['route', renderRoute], ['gas', renderGas], ['capacity', renderCapacity]]) {
    document.querySelectorAll('[data-' + key + ']').forEach(button => button.addEventListener('click', () => {
      state[key] = Number(button.dataset[key]); render();
    }));
  }
  function languageChange(language) {
    state.language = language === 'en' ? 'en' : 'zh';
    document.body.dataset.lang = state.language;
    renderRoute(); renderGas(); renderCapacity();
  }
  window.matchMedia('(max-width:650px)').addEventListener('change', renderRoute);
  AtlasPaper.init({depth:window.PaperLesson.depth,
    shortTitle: 'MOF · H₂O · NH₃',
    title: { zh: 'MOF 动力学稳定性：为什么结构能留下来？', en: 'MOF kinetic stability: why does the structure persist?' },
    sections: [
      { id: 'idea', zh: '核心思想', en: 'Core idea' },
      { id: 'barriers', zh: '重排能垒', en: 'Barriers' },
      { id: 'chemistry', zh: '金属与配体', en: 'Metals and linkers' },
      { id: 'gases', zh: '气体化学', en: 'Gas chemistry' },
      { id: 'ammonia', zh: '氨容量', en: 'Ammonia' },
      { id: 'pressure', zh: '压力与时间', en: 'Exposure' },
      { id: 'cycles', zh: '捕集与再生', en: 'Capture and release' },
      { id: 'ree', zh: 'REE 联系', en: 'REE connection' },
      { id: 'limits', zh: '证据边界', en: 'Limits' },
      { id: 'sources', zh: '来源', en: 'Sources' }
    ],
    legacyHeader: null, allowBoth: false, onLanguageChange: languageChange
  });
})();
