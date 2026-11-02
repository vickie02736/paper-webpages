(() => {
  'use strict';
  const data = window.WATER_REVIEW_DATA;
  const state = {language: 'zh', application: 0, category: 0, material: 0, design: 0};
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
    document.querySelector('.sequence').setAttribute('aria-label', state.language === 'en' ? 'Workflow to test structural and functional recovery' : '结构与功能恢复的验证路径');
  }
  Object.keys(fields).forEach(key => {
    document.querySelectorAll('[data-' + key + ']').forEach(button => button.addEventListener('click', () => {
      state[key] = Number(button.dataset[key]); renderGroup(key);
    }));
  });
  window.AtlasPaper.init({
    shortTitle: 'MOF · H₂O', title: {zh: 'MOF 水稳定性：从标签回到测试证据', en: 'MOF water stability: from labels to test evidence'},
    sections: [
      {id:'question',zh:'核心问题',en:'Question'},{id:'application',zh:'应用测试',en:'Application tests'},
      {id:'classes',zh:'类别与置信度',en:'Categories and confidence'},{id:'affinity',zh:'吸水与亲和性',en:'Uptake and affinity'},
      {id:'breathing',zh:'柔性与损伤',en:'Flexibility and damage'},{id:'cases',zh:'SI 材料档案',en:'SI dossiers'},
      {id:'mechanism',zh:'机制与模拟',en:'Mechanisms and models'},{id:'mixtures',zh:'混合物',en:'Mixtures'},
      {id:'design',zh:'保护策略',en:'Protection'},{id:'ree',zh:'联系 REE',en:'REE extension'},{id:'sources',zh:'来源',en:'Sources'}
    ], depth: null, legacyHeader: null, allowBoth: false,
    onLanguageChange(lang) { state.language = lang; render(); }
  });
})();
