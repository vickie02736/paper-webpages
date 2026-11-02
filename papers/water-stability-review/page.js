(() => {
  'use strict';
  const data = window.WATER_REVIEW_DATA;
  const state = {language: 'zh', application: 0, category: 0, material: 0, design: 0, depth: 1, energy: 0, conflict: null};
  const text = (id, pair) => { document.getElementById(id).textContent = pair[state.language === 'en' ? 1 : 0]; };
  const fields = {application: ['title','exposure','observe','limit'], category: ['title','rule','example','limit'], material: ['title','class','observation','counter','meaning'], design: ['title','method','evidence','cost']};
  function renderGroup(key) {
    const item = data[key][state[key]];
    fields[key].forEach(field => text(key + '-' + field, item[field]));
    if (item.source) text(key + '-source', ['来源位置：' + item.source, 'Source location: ' + item.source]);
    document.querySelectorAll('[data-' + key + ']').forEach(button => button.setAttribute('aria-pressed', String(Number(button.dataset[key]) === state[key])));
  }
  function render() {
    Object.keys(fields).forEach(renderGroup);
    renderTeaching();
    document.querySelector('.sequence').setAttribute('aria-label', state.language === 'en' ? 'Workflow to test structural and functional recovery' : '结构与功能恢复的验证路径');
  }
  Object.keys(fields).forEach(key => {
    document.querySelectorAll('[data-' + key + ']').forEach(button => button.addEventListener('click', () => {
      state[key] = Number(button.dataset[key]); renderGroup(key);
    }));
  });
  const tr = (zh,en) => state.language === 'en' ? en : zh;
  const energySteps = [
    ['先读轴，别把横轴当时间','Read the axes, not a time trace','纵轴 Free Energy 是自由能；越高表示这个图中的状态自由能越高。横轴 Reaction Coordinate 是从反应物到产物的变化路径，不是秒数，也不是分子行走的距离。图中没有数值刻度。','The vertical Free Energy axis compares state free energies. Reaction Coordinate on the horizontal axis follows the transformation from reactants to products; it is neither elapsed seconds nor a molecular travel distance. Neither axis has a numerical scale.','用途：能比较起点、峰顶、终点的相对高低；不能读出“几小时后分解”。','Use it to compare start, peak and endpoint levels. You cannot read a decomposition time in hours.'],
    ['两条路径的终点一样低','Both paths reach the same lower endpoint','Reactants 是反应物，Products 是产物。红、绿曲线起点相同、终点也相同，因此图中的水解自由能变化 ΔG 相同。两条路径都向较低终态走，不代表两者一样快。','Reactants are the starting substances; Products are the resulting substances. The red and green curves share their start and end levels, so their hydrolysis free-energy changes ΔG are the same. A lower endpoint does not imply equal speeds.','证据边界：这是作者的概念解释；没有测定某个材料的 ΔG 数值，也没有证明表中的历史类别对应这个数值。','Boundary: this is the authors’ conceptual explanation. It supplies no measured ΔG for a material and does not equate the historical classification with an energy measurement.'],
    ['峰更高，代表更大的障碍','A higher peak means a larger barrier','TS1、TS2 是两条路径的过渡态。绿色峰更高：从起点到峰顶的 Eₐ₁ 大于红色的 Eₐ₂。作者用它说明：即使最终水解有利，较大的反应障碍也可以延缓损伤。这里画的是自由能障碍，记作 ΔG‡，就是从起点到过渡态的自由能增量。','TS1 and TS2 are transition states. The green peak is higher: its barrier Eₐ₁ above the starting level exceeds the red Eₐ₂. The authors use this to show how a larger barrier can delay damage even when hydrolysis is favourable. This free-energy barrier is denoted ΔG‡: the increase from the starting state to the transition state.','不能由图计算寿命。要预测速率还需真实路径、能量和条件；水能否接近反应位置也很重要（§3.2）。','No lifetime can be calculated from this diagram. Rate prediction needs a real pathway, energies and conditions; water access to reactive sites also matters (§3.2).']
  ];
  const conflictFeedback = [
    ['不能据此说“修复”。两条记录来自不同研究；没有同一份受损样品经沸水处理后恢复的前后对照。','Repair is not established. The records come from separate studies, with no before/after test showing boiling water restored the same damaged sample.'],
    ['这个判断最有依据。保留两条结果，回查样品合成、缺陷、粒径、活化、暴露和测量条件；先确认哪些条件相同，再尝试解释差异。SI 条目不足以判定具体原因。','This is the best-supported conclusion. Retain both results and check synthesis, defects, particle size, activation, exposure and measurements. Establish what was comparable before explaining differences; these SI entries do not identify the specific cause.'],
    ['目前不能判定哪项错误。同名材料可能有不同样品与处理条件；“有冲突”提示要核对原始实验，而不是自动删除不合预期的结果。','The entries do not establish that either study is wrong. Samples and protocols may differ despite the same material name. Disagreement calls for examining the original experiments, rather than discarding an unexpected result.']
  ];
  function renderTeaching() {
    document.querySelectorAll('[data-min-depth]').forEach(el=>el.hidden=Number(el.dataset.minDepth)>state.depth);
    document.querySelectorAll('[data-depth]').forEach(el=>el.setAttribute('aria-pressed',String(Number(el.dataset.depth)===state.depth)));
    text('review-depth-note', [
      ['直觉：认识对象、读两条 SI 记录、区分终点与障碍。','机制：增加应用选择、分类档案、保护策略与公式。','研究：进一步展开模拟假设、历史分类与 REE 延伸。'][state.depth-1],
      ['Intuition: meet the material, compare SI records and read endpoints/barriers.','Mechanism: add application choices, category dossiers, protection and formulas.','Research: also open simulation assumptions, historical classification and REE extensions.'][state.depth-1]
    ]);
    const e=energySteps[state.energy];
    const box=document.getElementById('energy-step');box.replaceChildren();
    for(const [tag,z,en] of [['h4',e[0],e[1]],['p',e[2],e[3]],['p',e[4],e[5]]]){const el=document.createElement(tag);el.textContent=tr(z,en);box.append(el);}
    document.querySelectorAll('[data-energy]').forEach(el=>el.setAttribute('aria-pressed',String(Number(el.dataset.energy)===state.energy)));
    text('conflict-feedback',state.conflict===null?['先比较介质、时间和两种测量，再选择结论。每个选项都会解释能否从这两条记录推出。','Compare medium, duration and both measurements before choosing. Each option explains what can be inferred from the two records.']:conflictFeedback[state.conflict]);
    document.querySelectorAll('[data-conflict]').forEach(el=>el.setAttribute('aria-pressed',String(Number(el.dataset.conflict)===state.conflict)));
    document.getElementById('energy-original').alt=tr('原文图 28：两条水解反应路径的起终点相同，但绿色路径的自由能障碍高于红色路径。','Original Figure 28: two hydrolysis paths share endpoints, but the green path has a higher free-energy barrier than the red path.');
    renderImageStatus();
  }
  let imageState='loading';
  const original=document.getElementById('energy-original');
  function renderImageStatus(){text('energy-load-status',imageState==='loaded'?['原文图 28 · 已载入','Original Figure 28 · loaded']:imageState==='error'?['原图加载失败。可以重试，或通过下方论文链接查看；右侧文字仍可阅读。','The figure failed to load. Retry or use the article link below; the accompanying explanation remains available.']:['原图加载中…','Loading original figure…']);document.getElementById('energy-retry').hidden=imageState!=='error';}
  original.addEventListener('load',()=>{imageState='loaded';renderImageStatus()});
  original.addEventListener('error',()=>{imageState='error';renderImageStatus()});
  if(original.complete)imageState=original.naturalWidth?'loaded':'error';
  document.getElementById('energy-retry').addEventListener('click',()=>{imageState='loading';renderImageStatus();original.src='assets/figure-28.png?retry='+Date.now();});
  for(const key of ['depth','energy','conflict'])document.querySelectorAll('[data-'+key+']').forEach(el=>el.addEventListener('click',()=>{state[key]=Number(el.dataset[key]);renderTeaching();}));

  window.AtlasPaper.init({
    shortTitle: 'MOF · H₂O', title: {zh: 'MOF 水稳定性：从标签回到测试证据', en: 'MOF water stability: from labels to test evidence'},
    sections: [
      {id:'question',zh:'核心问题',en:'Question'},{id:'application',zh:'应用测试',en:'Application tests'},
      {id:'classes',zh:'类别与置信度',en:'Categories and confidence'},{id:'affinity',zh:'吸水与亲和性',en:'Uptake and affinity'},
      {id:'breathing',zh:'柔性与损伤',en:'Flexibility and damage'},{id:'cases',zh:'SI 材料档案',en:'SI dossiers'},
      {id:'mechanism',zh:'机制与模拟',en:'Mechanisms and models'},{id:'mixtures',zh:'混合物',en:'Mixtures'},
      {id:'design',zh:'保护策略',en:'Protection'},{id:'ree',zh:'联系 REE',en:'REE extension'},{id:'sources',zh:'来源',en:'Sources'}
    ], depth: document.getElementById('review-depth'), legacyHeader: null, allowBoth: false,
    onLanguageChange(lang) { state.language = lang; render(); }
  });
})();
