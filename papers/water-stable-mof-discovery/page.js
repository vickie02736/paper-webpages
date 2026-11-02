(() => {
  'use strict';
  const data = window.DISCOVERY_DATA;
  const state = { language: 'zh', step: 0, split: 0, uq: 0, stage: 0, candidate: 0, depth: 1, answer: null };
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
    const purposes = [
      ['目的：先让后续计算在有限资源内可执行。这个选择同时会影响训练集覆盖的结构尺寸。','Purpose: make the calculations tractable. This choice also affects the structural sizes represented in training.'],
      ['目的：在母体上系统改变连接体化学，观察吸水量怎样变化；衍生物不能当作彼此毫无关系的样本。','Purpose: vary linker chemistry systematically within parents. Derivatives are related samples, not wholly independent families.'],
      ['目的：排除生成规则留下的几何冲突；这是计算输入的检查，不是实验水稳定性的测试。','Purpose: remove geometric conflicts left by generation rules. This checks computational inputs, not experimental water stability.'],
      ['目的：给回归模型提供可用的数值标签。排除难收敛结构还限定了模型学习到的范围，不能把缺失标签填成零。','Purpose: provide usable regression labels. Excluding difficult cases also limits what the model learns; missing labels must not become zeros.']
    ];
    text('step-purpose', choose(purposes[state.step]));
    pressed('step');
  }
  function renderModels() {
    const item = data.splits[state.split];
    ['title', 'meaning', 'caution'].forEach(key => text('split-' + key, choose(item[key])));
    chart('model-chart', data.models.map((name, i) => [name, item.mae[i], 'MAE ' + item.mae[i] + ' · r = ' + item.r[i].toFixed(2)]),
      300, '300 cm³(STP) cm⁻³', choose(['六种模型的测试集平均绝对误差与相关系数', 'Test mean absolute error and correlation for six models']));
    pressed('split');
    renderSplitToy();
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
  function renderSplitToy() {
    document.querySelectorAll('#split-toy td[data-parent]').forEach(cell => {
      const row = cell.dataset.parent, col = Number(cell.dataset.group);
      const test = state.split === 0 ? ({A:3,B:1,C:2}[row] === col) : state.split === 1 ? col === 3 : row === 'C';
      cell.classList.toggle('held-out', test);
      cell.querySelector('.split-assignment').textContent = choose(test ? ['测试','Test'] : ['训练','Train']);
    });
    const insight = [
      ['随机示例：两侧都有 A/B/C 母体和 G1/G2/G3。测试的是留出的组合，不能据此宣称检验了完全陌生的母体。随机划分不是天然无效；关键是它是否对应实际用途。','Random example: both sides contain parents A/B/C and groups G1/G2/G3. The held-out combinations do not test wholly unfamiliar parents. Random splitting is not inherently invalid; its relevance depends on the intended use.'],
      ['官能团示例：G3 整列留出，但测试中的 A/B/C 母体已在训练中出现。问题变成：已见框架能否迁移到未见修饰？原文还指出不同组之间可能化学相似。','Group example: all G3 entries are held out, but test parents A/B/C also occur in training. Can familiar frameworks transfer to unseen modifications? The paper also notes that different groups can be chemically similar.'],
      ['母体示例：C 的整行留出，训练只见过 A/B。问题变成：能否预测一个陌生框架家族？这更接近筛选新母体，但一次划分的成绩不是任意新材料的保证。','Parent example: the whole C row is held out; training contains A/B only. Can the model predict an unfamiliar framework family? This better matches new-parent screening, but one split cannot guarantee performance on every new material.']
    ];
    text('split-insight', choose(insight[state.split]));
  }
  function renderLearning() {
    el('split-controls').setAttribute('aria-label', choose(['选择训练测试划分','Choose a training/test split']));
    el('transfer-options').setAttribute('aria-label', choose(['选择最相关的测试','Choose the most relevant evaluation']));
    el('figure5-region').setAttribute('aria-label', choose(['原图5，可用方向键横向滚动','Original Figure 5; use arrow keys to scroll horizontally']));
    el('figure5').alt = choose(['原文图5：上下两行分别为MLP与KRR-RBF，左右两列为官能团与母体划分；横轴是GCMC参照吸水量，纵轴是预测值，黑框标记ZULNAX家族的低估。','Original Figure 5: MLP and KRR-RBF in top and bottom rows; functional-group and base-MOF splits in left and right columns. Horizontal GCMC reference uptake versus vertical prediction; boxes mark the underpredicted ZULNAX family.']);
    const notes = [
      ['直觉：分清标签、模拟、预测与测试问题。机制层补公式、原图和特征；研究层补参数、版本与验证细节。','Intuition: distinguish labels, simulations, predictions and test questions. Mechanism adds formulas, figures and features; Research adds parameters, versions and validation details.'],
      ['机制：显示MAE算例、原文图5导读与结构特征路径。研究层继续展开复现参数与归档差异。','Mechanism: adds the MAE example, original Figure 5 guide and feature pathway. Research adds reproduction settings and archive discrepancies.'],
      ['研究：显示全部现有内容，包括模拟配置、特征选择、验证与数据版本差异；仍不等于已复现作者计算。','Research: all content, including simulation settings, feature selection, validation and data-version differences. This does not claim computational reproduction.']
    ];
    text('depth-note', choose(notes[state.depth - 1]));
    const feedback = {
      random: ['随机划分可能把新样本的近亲放在训练集。平均误差低并不说明模型见过“全新母体”这一难度；应看按母体留出的测试，并保留其误差和适用范围。','Random splitting may place close relatives of test samples in training. Low average error does not evaluate the wholly new-parent task; use parent-held-out results and retain their error and applicability limits.'],
      group: ['官能团划分隔离修饰组，但允许同一母体跨训练与测试。新官能团与新框架不是同一个问题；原图5显示母体划分的误差明显更大。','Functional-group splitting separates modifications but can share parent frameworks between training and test. A new group and a new framework are different tasks; Figure 5 shows much larger errors for the latter.'],
      parent: ['有依据。把整类母体及其衍生物留出，最接近此场景。仍须核对新材料是否超出训练经验、模拟假设是否适用；BMGS不是实验水稳定性证明，74个候选也不是74次实验证实。','Supported. Holding out a parent and its derivatives best matches this scenario. You still need applicability and simulation-assumption checks. BMGS is not an experimental water-stability test, and 74 candidates do not mean 74 experimental validations.']
    };
    text('transfer-feedback', state.answer ? choose(feedback[state.answer]) : choose(['先选一个理由。此练习检验方法迁移，不要求背诵候选数量。','Choose a reason. This task tests transfer of the evaluation logic, not recall of a candidate count.']));
    document.querySelectorAll('[data-answer]').forEach(button => button.setAttribute('aria-pressed', String(button.dataset.answer === state.answer)));
    renderImageStatus();
  }
  function setDepth(value) {
    const position = scrollY;
    state.depth = value;
    document.body.dataset.depth = String(value);
    document.querySelectorAll('[data-min-depth]').forEach(node => node.hidden = Number(node.dataset.minDepth) > value);
    document.querySelectorAll('button[data-depth]').forEach(button => button.setAttribute('aria-pressed', String(Number(button.dataset.depth) === value)));
    renderLearning();
    window.scrollTo({top:position, behavior:'instant'});
  }
  let figureState = 'loading';
  function renderImageStatus() {
    const status = el('figure5-status');
    status.hidden = figureState === 'loaded';
    status.querySelector('span').textContent = choose(figureState === 'error' ? ['原图加载失败，文字导读仍可阅读。','The figure failed to load; the written guide remains available.'] : ['正在加载原图…','Loading the original figure…']);
    el('figure5-retry').hidden = figureState !== 'error';
    el('figure5').hidden = figureState !== 'loaded';
  }
  el('figure5').addEventListener('load', () => { figureState = 'loaded'; renderImageStatus(); });
  el('figure5').addEventListener('error', () => { figureState = 'error'; renderImageStatus(); });
  if (el('figure5').complete) figureState = el('figure5').naturalWidth ? 'loaded' : 'error';
  el('figure5-retry').addEventListener('click', () => { figureState = 'loading'; renderImageStatus(); el('figure5').src = 'assets/figure-5.png?retry=' + Date.now(); });
  document.querySelectorAll('button[data-depth]').forEach(button => button.addEventListener('click', () => setDepth(Number(button.dataset.depth))));
  document.querySelectorAll('[data-answer]').forEach(button => button.addEventListener('click', () => { state.answer = button.dataset.answer; renderLearning(); }));
  Object.keys(renders).forEach(key => {
    document.querySelectorAll('[data-' + key + ']').forEach(button => button.addEventListener('click', () => {
      state[key] = Number(button.dataset[key]);
      renders[key]();
    }));
  });
  function renderLanguage(language) {
    state.language = language === 'en' ? 'en' : 'zh';
    document.body.dataset.lang = state.language;
    window.DiscoveryStructures?.setLanguage(state.language);
    document.querySelector('#structure-original img').alt = choose(['原文图3：IQECIS与YEZKUL的框架、连接体、最大包容球及孔体积和吸水量对照。','Original Figure 3 comparing IQECIS and YEZKUL frameworks, linkers, largest included spheres, pore volumes and uptake.']);
    Object.values(renders).forEach(render => render());
    renderLearning();
  }
  setDepth(1);
  AtlasPaper.init({
    depth: el('depth-controls'),
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
