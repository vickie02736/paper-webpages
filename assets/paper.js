/* Common static-site chrome. Each explainer owns its content and experiment state. */
(() => {
  'use strict';
  function init(options) {
    // Anchor clearance belongs to the sections, not the sticky header's controls.
    document.documentElement.style.scrollPaddingTop = '0px';
    const languages = options.allowBoth ? ['zh', 'en', 'both'] : ['zh', 'en'];
    let stored;
    try { stored = localStorage.getItem('atlas-lang'); } catch (_) {}
    const requested = new URLSearchParams(location.search).get('lang');
    let lang = languages.includes(requested) ? requested : ['zh', 'en'].includes(stored) ? stored : 'zh';
    const create = (tag, className, text) => {
      const node = document.createElement(tag);
      if (className) node.className = className;
      if (text !== undefined) node.textContent = text;
      return node;
    };
    const header = create('header', 'atlas-header');
    const bar = create('div', 'atlas-bar');
    const brand = create('a', 'atlas-brand');
    brand.href = '../../';
    brand.append(create('span', 'atlas-mark', '↖'));
    const brandCopy = create('span', 'atlas-brand-copy');
    brandCopy.append(create('span', '', 'RESEARCH ATLAS'), create('span', 'atlas-paper-name', options.shortTitle));
    brand.append(brandCopy);
    const actions = create('div', 'atlas-actions');
    if (options.depth) {
      options.depth.classList.add('atlas-depth');
      actions.append(options.depth);
    }
    const language = create('div', 'atlas-language');
    language.setAttribute('role', 'group');
    languages.forEach(value => {
      const button = create('button', '', value === 'zh' ? '中文' : value === 'en' ? 'EN' : '中英对照');
      button.type = 'button';
      button.dataset.atlasLang = value;
      button.addEventListener('click', () => setLanguage(value));
      language.append(button);
    });
    actions.append(language);
    bar.append(brand, actions);
    const nav = create('nav', 'atlas-nav');
    (options.sections || []).forEach(section => {
      const link = create('a');
      link.href = '#' + section.id;
      link.dataset.section = section.id;
      nav.append(link);
    });
    const progress = create('div', 'atlas-progress');
    progress.setAttribute('aria-hidden', 'true');
    const fill = create('span');
    progress.append(fill);
    header.append(bar, nav, progress);
    if (options.legacyHeader) options.legacyHeader.remove();
    const main = document.querySelector('main');
    if (main && !main.id) main.id = 'paper-content';
    const skip = create('a', 'atlas-skip');
    skip.href = '#' + (main?.id || 'paper-content');
    document.body.prepend(skip, header);
    let scheduled = false;
    function updateNavigation() {
      scheduled = false;
      const offset = header.getBoundingClientRect().height;
      document.documentElement.style.setProperty('--atlas-header-height', offset + 'px');
      const total = document.documentElement.scrollHeight - innerHeight;
      fill.style.width = (total > 0 ? Math.min(100, Math.max(0, scrollY / total * 100)) : 0) + '%';
      let current = null;
      for (const link of nav.children) {
        const section = document.getElementById(link.dataset.section);
        link.hidden = !section;
        if (section && (!current || section.getBoundingClientRect().top <= offset + 36)) current = link;
      }
      for (const link of nav.children) {
        if (link === current) link.setAttribute('aria-current', 'location');
        else link.removeAttribute('aria-current');
      }
    }
    function scheduleNavigation() {
      if (!scheduled) { scheduled = true; requestAnimationFrame(updateNavigation); }
    }
    function updateLinks() {
      document.querySelectorAll('a[href]').forEach(link => {
        const raw = link.getAttribute('href');
        if (!raw || raw.startsWith('#') || link.hasAttribute('download')) return;
        let url;
        try { url = new URL(raw, location.href); } catch (_) { return; }
        if (url.origin !== location.origin || !['http:', 'https:', 'file:'].includes(url.protocol)) return;
        const home = new URL('../../', location.href);
        if (url.pathname !== home.pathname && !url.pathname.startsWith(home.pathname + 'papers/')) return;
        url.searchParams.set('lang', lang === 'both' && !url.pathname.includes('/papers/') ? 'zh' : lang);
        link.href = url.href;
      });
    }
    function depthLabels() {
      if (!options.depth) return;
      options.depth.setAttribute('role', 'group');
      options.depth.setAttribute('aria-label', lang === 'en' ? 'Reading depth' : '阅读深度');
      options.depth.querySelectorAll('button').forEach(button => {
        if (button.classList.contains('active')) button.setAttribute('aria-pressed', 'true');
        else if (!button.hasAttribute('aria-pressed')) button.setAttribute('aria-pressed', 'false');
      });
    }
    function setLanguage(next) {
      if (!languages.includes(next)) return;
      lang = next;
      const position = scrollY;
      const focused = document.activeElement;
      document.documentElement.lang = lang === 'en' ? 'en' : 'zh-CN';
      document.body.dataset.lang = lang;
      document.title = options.title[lang === 'en' ? 'en' : 'zh'];
      language.setAttribute('aria-label', lang === 'en' ? 'Page language' : '页面语言');
      brand.setAttribute('aria-label', lang === 'en' ? 'Back to Research Atlas' : '返回 Research Atlas');
      skip.textContent = lang === 'en' ? 'Skip to content' : '跳到正文';
      nav.setAttribute('aria-label', lang === 'en' ? 'Page sections' : '章节导航');
      [...nav.children].forEach((link, index) => {
        const section = options.sections[index];
        link.textContent = lang === 'both' ? section.zh + ' / ' + section.en : section[lang];
      });
      language.querySelectorAll('button').forEach(button => {
        const active = button.dataset.atlasLang === lang;
        button.classList.toggle('active', active);
        button.setAttribute('aria-pressed', String(active));
        if (button.dataset.atlasLang === 'both') button.textContent = lang === 'en' ? 'Parallel' : '中英对照';
      });
      try { if (lang !== 'both') localStorage.setItem('atlas-lang', lang); } catch (_) {}
      try {
        const url = new URL(location.href);
        url.searchParams.set('lang', lang);
        history.replaceState(null, '', url);
      } catch (_) {}
      if (options.onLanguageChange) options.onLanguageChange(lang);
      depthLabels();
      updateLinks();
      updateNavigation();
      if (focused?.isConnected && focused !== document.body) focused.focus({preventScroll: true});
      window.scrollTo({top: position, behavior: 'instant'});
    }
    options.depth?.addEventListener('click', () => {
      queueMicrotask(() => {
        options.depth.querySelectorAll('button').forEach(button => {
          if (button.classList.contains('active')) button.setAttribute('aria-pressed', 'true');
          else if (options.depth.querySelector('.active')) button.setAttribute('aria-pressed', 'false');
        });
      });
    });
    window.addEventListener('scroll', scheduleNavigation, {passive: true});
    window.addEventListener('resize', scheduleNavigation);
    if (typeof ResizeObserver !== 'undefined') new ResizeObserver(scheduleNavigation).observe(header);
    if (main) new MutationObserver(() => { updateLinks(); scheduleNavigation(); }).observe(main, {childList: true, subtree: true});
    setLanguage(lang);
    return {get lang() { return lang; }, setLanguage, refresh() { updateLinks(); scheduleNavigation(); }};
  }
  window.AtlasPaper = {init};
})();
