/* Shared, offline bibliography presentation. Data is maintained in the catalogue. */
(() => {
  'use strict';
  const states = new Map();
  const esc = value => String(value || '').replace(/[&<>"']/g, ch => ({'&':'&amp;', '<':'&lt;', '>':'&gt;', '"':'&quot;', "'":'&#39;'}[ch]));
  const labels = {
    zh: {authors:'作者', affiliations:'单位', details:'完整作者与单位', published:'发表', accepted:'录用', preprint:'首次公开（预印本）', unverified:'未核实', notDisclosed:'未公开', notApplicable:'不适用', sources:'元数据来源', equal:'同等贡献', corresponding:'通讯作者', affiliationUnknown:'单位对应关系未核实', moreUnits:'个其他单位', dateMeaning:'发表指首次在线发表，卷期年份仍见引文；日期保留原文公开精度。录用日期仅采用单篇论文明确公布的记录。'},
    en: {authors:'Authors', affiliations:'Affiliations', details:'All authors and affiliations', published:'Published', accepted:'Accepted', preprint:'Preprint posted', unverified:'Unverified', notDisclosed:'Not disclosed', notApplicable:'Not applicable', sources:'Metadata sources', equal:'Equal contribution', corresponding:'Corresponding author', affiliationUnknown:'Affiliation mapping unverified', moreUnits:'other affiliations', dateMeaning:'Published means first online publication; the citation retains the issue year. Dates retain the precision disclosed by the source. Acceptance uses only an explicitly disclosed individual-paper date.'}
  };
  const text = (lang, key) => lang === 'both' ? labels.zh[key] + ' / ' + labels.en[key] : labels[lang === 'en' ? 'en' : 'zh'][key];
  const affiliationName = (item, lang) => lang === 'en' ? item.name : lang === 'both' && item.zh ? item.zh + ' / ' + item.name : item.zh || item.name;
  function captureState() {
    document.querySelectorAll('.atlas-bibliography').forEach(owner => states.set(owner.dataset.biblioKey, owner.querySelector('details').open));
  }
  function html(metadata, lang = 'zh', key = '') {
    const previous = [...document.querySelectorAll('.atlas-bibliography')].find(owner => owner.dataset.biblioKey === key);
    if (previous) states.set(key, previous.querySelector('details').open);
    const m = metadata || {};
    const authors = m.authors || [];
    const affiliations = m.affiliations || [];
    const first = authors[0];
    const units = first ? (first.affiliations || []).map(id => affiliations.find(a => a.id === id)).filter(Boolean) : [];
    const summary = first ? first.name + (authors.length > 1 ? (lang === 'en' ? ' et al.' : lang === 'both' ? ' 等 / et al.' : ' 等') : '') : text(lang, 'authors') + ': ' + text(lang, 'unverified');
    const dates = ['published', 'accepted', 'preprint'].filter(type => type !== 'preprint' || m.dates?.preprint).map(type => {
      const date = m.dates?.[type];
      const value = date?.value ? '<time datetime="' + esc(date.value) + '">' + esc(date.value) + '</time>' : esc(text(lang, date?.status || 'unverified'));
      return '<span><b>' + esc(text(lang, type)) + '</b> ' + value + '</span>';
    }).join('');
    const fullAuthors = authors.length ? authors.map(a => {
      const ids = (a.affiliations || []).join(', ');
      const roles = [a.equalContribution ? text(lang, 'equal') : '', a.corresponding ? text(lang, 'corresponding') : ''].filter(Boolean).join('; ');
      return '<li><span>' + esc(a.name) + '</span>' + (ids ? ' <sup>' + esc(ids) + '</sup>' : ' <small>(' + esc(text(lang, 'affiliationUnknown')) + ')</small>') + (roles ? ' <small>[' + esc(roles) + ']</small>' : '') + '</li>';
    }).join('') : '<li>' + esc(text(lang, 'unverified')) + '</li>';
    const fullUnits = affiliations.length ? affiliations.map(a => '<li><b>' + esc(a.id) + '.</b> ' + esc(affiliationName(a, lang)) + '</li>').join('') : '<li>' + esc(text(lang, 'unverified')) + '</li>';
    const sources = (m.sources || []).filter(s => /^https:\/\//.test(s.url)).map((s, i) => '<a href="' + esc(s.url) + '" title="' + esc(s.locator) + '" target="_blank" rel="noopener">' + esc(text(lang, 'sources')) + ' ' + (i + 1) + '</a>').join(' · ');
    const briefUnits = units.length ? affiliationName(units[0], lang) + (units.length > 1 ? ' (+' + (units.length - 1) + ' ' + text(lang, 'moreUnits') + ')' : '') : text(lang, 'affiliations') + ': ' + text(lang, 'unverified');
    return '<div class="atlas-bibliography" data-biblio-key="' + esc(key) + '" data-biblio-lang="' + esc(lang) + '"><details' + (states.get(key) ? ' open' : '') + '><summary data-biblio-focus="summary"><span class="atlas-byline">' + esc(summary) + ' · ' + esc(briefUnits) + '</span><span class="atlas-biblio-more">' + esc(text(lang, 'details')) + '</span></summary><div class="atlas-biblio-body"><h5>' + esc(text(lang, 'authors')) + '</h5><ol class="atlas-biblio-authors">' + fullAuthors + '</ol><h5>' + esc(text(lang, 'affiliations')) + '</h5><ul class="atlas-biblio-units">' + fullUnits + '</ul><p class="atlas-biblio-sources">' + esc(text(lang, 'dateMeaning')) + '</p>' + (sources ? '<p class="atlas-biblio-sources">' + sources + '</p>' : '') + '</div></details><div class="atlas-biblio-dates">' + dates + '</div></div>';
  }
  function searchText(m) {
    return m ? [...(m.authors || []).flatMap(a => [a.name, ...(a.aliases || [])]), ...(m.affiliations || []).flatMap(a => [a.name, a.zh, ...(a.aliases || [])])].filter(Boolean).join(' ') : '';
  }
  document.addEventListener('toggle', event => {
    const owner = event.target.closest?.('.atlas-bibliography');
    if (owner && event.target.tagName === 'DETAILS' && event.target.isConnected) states.set(owner.dataset.biblioKey, event.target.open);
  }, true);
  let lastFocus = null;
  document.addEventListener('focusin', event => {
    const owner = event.target.closest?.('.atlas-bibliography');
    lastFocus = owner ? {key: owner.dataset.biblioKey, index: [...owner.querySelectorAll('summary,a')].indexOf(event.target)} : null;
  });
  function captureFocus() { return lastFocus && {...lastFocus}; }
  function restoreFocus(saved) {
    if (!saved) return;
    const owner = [...document.querySelectorAll('.atlas-bibliography')].find(n => n.dataset.biblioKey === saved.key);
    owner?.querySelectorAll('summary,a')[saved.index]?.focus({preventScroll: true});
  }
  function mountPaper(lang) {
    const slug = document.body.dataset.paper;
    const m = window.AtlasPaperMetadata?.[slug];
    const heading = document.querySelector('main .hero h1, main h1');
    if (!heading) return;
    let owner = heading.nextElementSibling;
    if (owner?.classList.contains('atlas-bibliography') && owner.dataset.biblioLang === lang) return;
    const saved = captureFocus();
    if (owner?.classList.contains('atlas-bibliography')) owner.remove();
    heading.insertAdjacentHTML('afterend', html(m, lang, 'paper:' + slug));
    if (saved?.key === 'paper:' + slug) restoreFocus(saved);
  }
  window.PaperBibliography = {html, searchText, mountPaper, captureFocus, restoreFocus, captureState};
})();
