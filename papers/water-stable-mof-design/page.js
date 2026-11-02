(() => {
  'use strict';
  const data = window.DESIGN_DATA;
  const state = { language: 'zh', strategy: 0, scenario: 0 };
  const byId = id => document.getElementById(id);
  const choose = pair => pair[state.language === 'en' ? 1 : 0];
  const text = (id, value) => { byId(id).textContent = value; };
  const setPressed = (selector, key, value) => {
    document.querySelectorAll(selector).forEach(button => {
      button.setAttribute('aria-pressed', String(Number(button.dataset[key]) === value));
    });
  };
  function renderStrategy() {
    const item = data.strategies[state.strategy];
    ['title', 'input', 'effect', 'test', 'limit'].forEach(key => text('strategy-' + key, choose(item[key])));
    text('strategy-source', choose(['综述位置：', 'Review location: ']) + item.source);
    const container = byId('strategy-examples');
    container.replaceChildren();
    for (const example of item.examples) {
      const article = document.createElement('article');
      article.className = 'example';
      const heading = document.createElement('h4');
      heading.textContent = example[0];
      const detail = document.createElement('p');
      detail.textContent = example[state.language === 'en' ? 2 : 1];
      article.append(heading, detail);
      container.append(article);
    }
    setPressed('[data-strategy]', 'strategy', state.strategy);
  }
  const questions = {
    pxrd: ['周期结构是否仍保留？', 'Does periodic order remain?'],
    pores: ['孔隙是否仍可接近，处理后怎样再活化？', 'Are pores accessible, and how was the sample reactivated?'],
    leach: ['节点金属、连接体或官能团释放了多少？', 'How much node metal, linker or functional group was released?'],
    function: ['目标物能否在实际进料和循环中被回收？', 'Can the target be recovered from the actual feed across cycles?']
  };
  function renderEvidence() {
    const checked = [...document.querySelectorAll('[data-check]')];
    const missing = checked.filter(input => !input.checked);
    const container = byId('evidence-output');
    container.replaceChildren();
    const heading = document.createElement('h3');
    heading.textContent = choose(missing.length ? ['尚待覆盖的问题', 'Questions still to cover'] : ['四类信息均已列入方案', 'All four information types are in the plan']);
    container.append(heading);
    if (missing.length) {
      const list = document.createElement('ul');
      for (const input of missing) {
        const li = document.createElement('li');
        li.textContent = choose(questions[input.dataset.check]);
        list.append(li);
      }
      container.append(list);
    } else {
      const paragraph = document.createElement('p');
      paragraph.textContent = choose(['仍须核对结果、测试条件、物料衡算和检测灵敏度。列入测量不等于已经证明稳定。', 'Results, conditions, mass balances and detection sensitivity still need checking. Planning measurements does not establish stability.']);
      container.append(paragraph);
    }
  }
  function renderScenario() {
    const item = data.scenarios[state.scenario];
    ['title', 'context', 'basis', 'caution'].forEach(key => text('scenario-' + key, choose(item[key])));
    text('scenario-source', choose(['综述位置：', 'Review location: ']) + item.source);
    const container = byId('capacity-chart');
    container.setAttribute('aria-label', choose(['所列条件下的 CO₂ 容量，单位毫摩尔每克', 'CO₂ capacity under the stated conditions, in millimoles per gram']));
    container.replaceChildren();
    for (const [name, capacity] of item.rows) {
      const row = document.createElement('div');
      row.className = 'capacity-row';
      const heading = document.createElement('div');
      heading.className = 'capacity-heading';
      const label = document.createElement('span');
      label.textContent = name;
      const value = document.createElement('strong');
      value.textContent = capacity.toFixed(2) + ' mmol g⁻¹';
      heading.append(label, value);
      const track = document.createElement('div');
      track.className = 'capacity-track';
      track.setAttribute('aria-hidden', 'true');
      const bar = document.createElement('div');
      bar.className = 'capacity-bar';
      bar.style.width = (100 * capacity / item.max) + '%';
      track.append(bar);
      row.append(heading, track);
      container.append(row);
    }
    const axis = document.createElement('div');
    axis.className = 'axis';
    axis.setAttribute('aria-hidden', 'true');
    const start = document.createElement('span');
    start.textContent = '0';
    const end = document.createElement('span');
    end.textContent = item.max.toFixed(1) + ' mmol g⁻¹';
    axis.append(start, end);
    container.append(axis);
    setPressed('[data-scenario]', 'scenario', state.scenario);
  }
  document.querySelectorAll('[data-strategy]').forEach(button => button.addEventListener('click', () => {
    state.strategy = Number(button.dataset.strategy);
    renderStrategy();
  }));
  document.querySelectorAll('[data-scenario]').forEach(button => button.addEventListener('click', () => {
    state.scenario = Number(button.dataset.scenario);
    renderScenario();
  }));
  document.querySelectorAll('[data-check]').forEach(input => input.addEventListener('change', renderEvidence));
  byId('reset-evidence').addEventListener('click', () => {
    document.querySelectorAll('[data-check]').forEach(input => { input.checked = input.dataset.check === 'pxrd'; });
    renderEvidence();
  });
  function renderLanguage(language) {
    state.language = language === 'en' ? 'en' : 'zh';
    document.body.dataset.lang = state.language;
    renderStrategy();
    renderEvidence();
    renderScenario();
  }
  AtlasPaper.init({depth:window.PaperLesson.depth,
    shortTitle: 'MOF · H₂O · CO₂',
    title: { zh: '耐水 MOF：从构筑策略到 CO₂ 捕集', en: 'Water-resistant MOFs: design and CO₂ capture' },
    sections: [
      { id: 'question', zh: '两个问题', en: 'Two questions' },
      { id: 'energy', zh: '终点与速率', en: 'Energy and rates' },
      { id: 'design', zh: '设计策略', en: 'Design' },
      { id: 'evidence', zh: '证据检查', en: 'Evidence' },
      { id: 'capture', zh: '捕集机制', en: 'Capture sites' },
      { id: 'scenarios', zh: '应用条件', en: 'Applications' },
      { id: 'tradeoffs', zh: '性能权衡', en: 'Tradeoffs' },
      { id: 'ree', zh: 'REE 联系', en: 'REE connection' },
      { id: 'reading', zh: '阅读边界', en: 'Reading limits' },
      { id: 'sources', zh: '来源', en: 'Sources' }
    ],
    legacyHeader: null,
    allowBoth: false,
    onLanguageChange: renderLanguage
  });
})();
