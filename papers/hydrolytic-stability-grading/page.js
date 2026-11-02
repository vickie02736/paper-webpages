(() => {
  'use strict';
  const ids = ['exposure', 'duration', 'order', 'porosity', 'trajectory', 'activation'];
  const controls = Object.fromEntries(ids.map(id => [id, document.getElementById(id)]));
  const levels = {
    zh: ['20 °C · 20% RH', '25 °C · 50% RH', '50 °C · 50% RH', '室温液态水', '80 °C · 90% RH', '沸水'],
    en: ['20 °C · 20% RH', '25 °C · 50% RH', '50 °C · 50% RH', 'Liquid water at room temperature', '80 °C · 90% RH', 'Boiling water']
  };
  for (let i = 1; i <= 6; i++) controls.exposure.add(new Option('', String(i)));
  controls.exposure.value = '4';
  let lang = 'zh';
  function localizeOptions() {
    const en = lang === 'en';
    controls.exposure.querySelectorAll('option').forEach((o, i) => {
      o.textContent = `${en ? 'Level' : '级别'} ${i + 1} · ${levels[lang][i]}`;
    });
    document.querySelectorAll('option[data-zh]').forEach(o => { o.textContent = o.dataset[lang]; });
  }
  function render() {
    const en = lang === 'en';
    const value = Object.fromEntries(ids.map(id => [id, controls[id].value]));
    const hours = Number(value.duration);
    const valid = value.duration !== '' && Number.isFinite(hours) && hours >= 0.1 && hours <= 100000;
    controls.duration.setAttribute('aria-invalid', String(!valid));
    const category = value.order === 'unknown' || value.porosity === 'unknown' ? '?' :
      ({'retained-retained': 'A', 'lost-retained': 'B', 'retained-lost': 'C', 'lost-lost': 'D'})[`${value.order}-${value.porosity}`];
    document.getElementById('grade').textContent = valid ? `${value.exposure}${category}` : '—';
    document.querySelectorAll('.category').forEach(el => { el.classList.toggle('selected', valid && el.id === `cat-${category}`); });
    if (!valid) {
      document.getElementById('report-text').textContent = en ? 'Enter a duration from 0.1 to 100,000 hours.' : '请输入 0.1–100,000 小时内的暴露时长。';
      document.getElementById('report-limit').textContent = en ? 'This input range is a display constraint for the teaching tool, not a range prescribed by the paper.' : '此输入范围是教学工具的显示约束，不是论文规定的实验范围。';
      return;
    }
    const describe = id => controls[id].selectedOptions[0].textContent;
    document.getElementById('report-text').textContent = en ?
      `Teaching scenario: ${levels.en[Number(value.exposure) - 1]}, ${hours.toLocaleString('en')} h. ${describe('order')}; ${describe('porosity')}. Further exposure: ${describe('trajectory').toLowerCase()}. Activation: ${describe('activation').toLowerCase()}.` :
      `教学场景：${levels.zh[Number(value.exposure) - 1]}，${hours.toLocaleString('zh')} h。${describe('order')}；${describe('porosity')}。后续暴露：${describe('trajectory')}。活化：${describe('activation')}。`;
    const notes = [];
    if (category === '?') notes.push(en ? 'The category cannot be assigned: at least one observation is missing or uncertain. “?” is a teaching marker, not an additional category proposed in Table 3.' : '至少有一项表征缺失或不确定，无法判定类别。“?” 是教学标记，不是表 3 提出的额外类别。');
    else notes.push(en ? `Category ${category} follows the qualitative mapping in Table 3. The paper supplies no universal numerical retention threshold.` : `类别 ${category} 按表 3 的定性对应关系生成；论文没有规定统一的保留率阈值。`);
    if (hours !== 24) notes.push(en ? 'The authors propose 24 h as an initial test. This scenario uses another duration, which must remain part of its report.' : '作者建议以 24 h 作为初始测试；本场景采用其他时长，需要在报告中保留。');
    if (value.trajectory === 'unknown') notes.push(en ? 'A single exposure does not establish a stable plateau.' : '单次暴露不能证明此后已达到稳定平台。');
    if (value.trajectory === 'decline') notes.push(en ? 'Continued decline must be reported alongside the grade.' : '持续下降的趋势需要与分级一起报告。');
    if (value.trajectory === 'plateau') notes.push(en ? 'A plateau applies only within the tested conditions and duration.' : '平台只适用于已测试的条件与时长范围。');
    if (value.activation === 'missing') notes.push(en ? 'The activation method is still missing.' : '仍缺少活化方法记录。');
    notes.push(en ? 'This classification does not establish metal/linker mass balance or performance in a REE-containing solution.' : '此分类尚不能证明金属与配体的质量收支，也不能证明含 REE 溶液中的性能。');
    document.getElementById('report-limit').textContent = notes.join(' ');
  }
  function preset(values) { ids.forEach((id, i) => { controls[id].value = String(values[i]); }); render(); }
  ids.forEach(id => controls[id].addEventListener('input', render));
  document.getElementById('missing-example').addEventListener('click', () => preset([6, 168, 'retained', 'unknown', 'unknown', 'missing']));
  document.getElementById('porous-example').addEventListener('click', () => preset([5, 24, 'lost', 'retained', 'plateau', 'reported']));
  document.getElementById('reset').addEventListener('click', () => preset([4, 24, 'retained', 'unknown', 'unknown', 'missing']));
  window.AtlasPaper.init({depth:window.PaperLesson.depth,
    shortTitle: 'MOF · A–D',
    title: {zh: 'MOF 水稳定性：分级之前，先把条件说清', en: 'MOF water stability: state the conditions before grading'},
    sections: [
      {id:'core',zh:'核心问题',en:'Core idea'}, {id:'levels',zh:'暴露条件',en:'Exposure'},
      {id:'matrix',zh:'结果分类',en:'Outcomes'}, {id:'builder',zh:'交互记录',en:'Report builder'},
      {id:'assessment',zh:'表征证据',en:'Assessment'}, {id:'cases',zh:'时间与案例',en:'Time and cases'},
      {id:'limits',zh:'边界与联系',en:'Limits'}, {id:'sources',zh:'来源',en:'Sources'}
    ],
    allowBoth: false,
    onLanguageChange(next) { lang = next; localizeOptions(); render(); }
  });
})();
