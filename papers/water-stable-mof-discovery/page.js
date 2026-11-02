(() => {
  'use strict';
  const data = window.DISCOVERY_DATA;
  const state = { language: 'zh', step: 0, split: 0, uq: 0, stage: 0, candidate: 0 };
  const el = id => document.getElementById(id);
  const choose = pair => pair[state.language === 'en' ? 1 : 0];
  const text = (id, value) => { el(id).textContent = value; };
  const format = value => value.toLocaleString('en-US');
  function pressed(key) {
    document.querySelectorAll('[data-' + key + ']').forEach(button => {
      button.setAttribute('aria-pressed', String(Number(button.dataset[key]) === state[key]));
    });
  }
  function chart(id, rows, maximum, axisLabel, accessibleName) {
    const container = el(id);
    container.replaceChildren();
    container.setAttribute('aria-label', accessibleName);
    rows.forEach(([name, value, label]) => {
      const row = document.createElement('div');
      row.className = 'chart-row';
      const heading = document.createElement('div');
      heading.className = 'chart-heading';
      const title = document.createElement('span');
      title.textContent = name;
      const number = document.createElement('strong');
      number.textContent = label;
      heading.append(title, number);
      const track = document.createElement('div');
      track.className = 'track';
      track.setAttribute('aria-hidden', 'true');
      const bar = document.createElement('div');
      bar.className = 'bar';
      bar.style.width = (100 * value / maximum) + '%';
      track.append(bar);
      row.append(heading, track);
      container.append(row);
    });
    const axis = document.createElement('div');
    axis.className = 'axis';
    axis.setAttribute('aria-hidden', 'true');
    const zero = document.createElement('span');
    zero.textContent = '0';
    const limit = document.createElement('span');
    limit.textContent = axisLabel;
    axis.append(zero, limit);
    container.append(axis);
  }
  function renderStep() {
    const item = data.steps[state.step];
    text('step-number', item.number);
    ['title', 'text', 'limit'].forEach(key => text('step-' + key, choose(item[key])));
    text('step-source', choose(['来源位置：', 'Source location: ']) + item.source);
    pressed('step');
  }
  function renderModels() {
    const item = data.splits[state.split];
    ['title', 'meaning', 'caution'].forEach(key => text('split-' + key, choose(item[key])));
    chart('model-chart', data.models.map((name, i) => [name, item.mae[i], 'MAE ' + item.mae[i] + ' · r = ' + item.r[i].toFixed(2)]),
      300, '300 cm³(STP) cm⁻³', choose(['六种模型的测试集平均绝对误差与相关系数', 'Test mean absolute error and correlation for six models']));
    pressed('split');
  }
  function renderUncertainty() {
    const item = data.uq[state.uq];
    text('uq-title', choose(item.title));
    text('uq-retention', (state.uq ? '≈' : '') + item.retention + '%');
    text('uq-mae', item.mae.toFixed(1) + ' cm³(STP) cm⁻³');
    text('uq-note', choose(item.note));
    el('uq-bar').style.width = item.retention + '%';
    pressed('uq');
  }
  function renderScreen() {
    const item = data.stages[state.stage];
    text('stage-title', choose(item.title));
    text('stage-definition', choose(item.definition));
    text('stage-total', format(item.rows.reduce((a, b) => a + b, 0)) + choose([' 个结构', ' structures']));
    text('stage-source', choose(['来源位置：', 'Source location: ']) + item.source);
    chart('database-chart', data.databases.map((name, i) => [name, item.rows[i], format(item.rows[i])]),
      330000, choose(['330,000 个结构', '330,000 structures']), choose(['五个数据库的结构数', 'Structure counts in five databases']));
    pressed('stage');
  }
  function renderCandidate() {
    const item = data.candidates[state.candidate];
    text('candidate-title', item.name);
    text('candidate-context', item.database + choose([' 数据库；框架节点：', ' database; framework node: ']) + item.metal +
      choose(['。单位：cm³(STP) cm⁻³；来源：正文图 7。', '. Unit: cm³(STP) cm⁻³; source: main Fig. 7.']));
    chart('candidate-chart', [
      [choose(['MLP 预测', 'MLP prediction']), item.ml, String(item.ml)],
      [choose(['后续 GCMC', 'Subsequent GCMC']), item.gcmc, String(item.gcmc)]
    ], 900, '900 cm³(STP) cm⁻³', choose(['MLP 与 GCMC 的水吸附量比较', 'Water uptake compared between MLP and GCMC']));
    pressed('candidate');
  }
  const renders = { step: renderStep, split: renderModels, uq: renderUncertainty, stage: renderScreen, candidate: renderCandidate };
  Object.keys(renders).forEach(key => {
    document.querySelectorAll('[data-' + key + ']').forEach(button => button.addEventListener('click', () => {
      state[key] = Number(button.dataset[key]);
      renders[key]();
    }));
  });
  function renderLanguage(language) {
    state.language = language === 'en' ? 'en' : 'zh';
    document.body.dataset.lang = state.language;
    Object.values(renders).forEach(render => render());
  }
  AtlasPaper.init({
    shortTitle: 'MOF · H₂O · ML',
    title: { zh: '水稳定与高吸水 MOF 的机器学习筛选', en: 'Machine-learning discovery of water-stable, high-uptake MOFs' },
    sections: [
      { id: 'question', zh: '两个预测', en: 'Two predictions' },
      { id: 'training', zh: '训练集', en: 'Training data' },
      { id: 'tradeoff', zh: '亲水与孔隙', en: 'Affinity and pores' },
      { id: 'simulation', zh: '模拟条件', en: 'Simulation' },
      { id: 'models', zh: '分组测试', en: 'Data splits' },
      { id: 'uncertainty', zh: '误差与覆盖', en: 'Error and coverage' },
      { id: 'screen', zh: '逐库筛选', en: 'Database screen' },
      { id: 'candidates', zh: '四例核验', en: 'Four candidates' },
      { id: 'ree', zh: 'REE 联系', en: 'REE connection' },
      { id: 'sources', zh: '来源与范围', en: 'Sources' }
    ],
    legacyHeader: null,
    allowBoth: false,
    onLanguageChange: renderLanguage
  });
})();
