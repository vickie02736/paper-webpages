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
    if (main) main.tabIndex = -1;
    const skip = create('a', 'atlas-skip');
    skip.href = '#' + (main?.id || 'paper-content');
    document.body.prepend(skip, header);
    const motionPreference = window.matchMedia('(prefers-reduced-motion: reduce)');
    function syncMotion() {
      main?.querySelectorAll('svg').forEach(svg => {
        if (motionPreference.matches) svg.pauseAnimations?.();
        else svg.unpauseAnimations?.();
      });
    }
    motionPreference.addEventListener('change', syncMotion);
    const figureStates = new WeakMap();
    const copy = (zh, en) => lang === 'en' ? en : lang === 'both' ? zh + ' / ' + en : zh;
    function readingRoute() {
      const hero = main?.querySelector('.hero');
      if (!hero || !document.body.classList.contains('atlas-reading')) return;
      let route = hero.querySelector('.atlas-reading-route');
      if (!route) {
        route = create('nav', 'atlas-reading-route');
        const targets = [
          ['method', 'mechanism', 'walkthrough', 'lab', 'instruction', 'structure', 'overview'],
          ['evidence', 'capacity', 'adsorption'],
          ['critical', 'limits']
        ].map(ids => ids.map(id => options.sections.find(s => s.id === id)).find(Boolean)).filter(Boolean);
        for (const section of targets) {
          const link = create('a');
          link.href = '#' + section.id;
          link.dataset.routeSection = section.id;
          route.append(link);
        }
        const lead = hero.querySelector('.lead, .lede, .hero-lead');
        if (lead) lead.after(route); else hero.append(route);
      }
      route.setAttribute('aria-label', copy('阅读路径', 'Reading route'));
      for (const link of route.children) {
        const section = options.sections.find(s => s.id === link.dataset.routeSection);
        const label = copy(section.zh, section.en) + ' ↗';
        if (link.textContent !== label) link.textContent = label;
      }
    }
    function syncFigures() {
      main?.querySelectorAll('img[data-atlas-figure]').forEach(img => {
        let record = figureStates.get(img);
        if (!record) {
          const status = create('div', 'atlas-image-status');
          status.setAttribute('role', 'status');
          const message = create('span');
          const retry = create('button');
          retry.type = 'button';
          status.append(message, retry);
          const link = img.closest('a');
          (link || img).after(status);
          record = {status, message, retry, src: null, state: 'loading', version: 0};
          figureStates.set(img, record);
          const paint = () => {
            img.dataset.loadState = record.state;
            img.setAttribute('aria-busy', String(record.state === 'loading'));
            const label = record.state === 'ready' ? copy('图片已加载。', 'Image loaded.') : record.state === 'error' ? copy('图片加载失败，请重试。', 'Image could not load. Please retry.') : copy('正在加载原图…', 'Loading original figure…');
            if (message.textContent !== label) message.textContent = label;
            const retryLabel = copy('重试图片', 'Retry image');
            if (retry.textContent !== retryLabel) retry.textContent = retryLabel;
            // Keep the retry control focused until the retry finishes.
            retry.hidden = record.state !== 'error' && document.activeElement !== retry;
            retry.disabled = false;
            status.hidden = record.state === 'ready' && document.activeElement !== retry;
          };
          record.paint = paint;
          record.check = async () => {
            const version = record.version;
            if (!img.complete) return;
            try {
              if (!img.naturalWidth) throw new Error('Image unavailable');
              await img.decode();
              if (version !== record.version || !img.isConnected) return;
              record.state = 'ready';
            } catch (_) {
              if (version !== record.version || !img.isConnected) return;
              record.state = 'error';
            }
            paint();
          };
          img.addEventListener('load', () => { if (record.src === img.getAttribute('src')) record.check(); });
          img.addEventListener('error', () => {
            if (record.src === img.getAttribute('src') && img.complete && !img.naturalWidth) {
              record.state = 'error'; paint();
            }
          });
          link?.addEventListener('click', event => { if (record.state !== 'ready') event.preventDefault(); });
          retry.addEventListener('click', () => {
            if (record.state !== 'error') return;
            record.version++;
            record.state = 'loading'; paint();
            img.src = record.src;
            record.check();
          });
          retry.addEventListener('blur', paint);
        }
        const src = img.getAttribute('src');
        if (src !== record.src) {
          record.src = src;
          record.version++;
          record.state = 'loading';
          record.paint();
          record.check();
        } else record.paint();
      });
    }
    let scheduled = false;
    function updateNavigation() {
      scheduled = false;
      const offset = header.getBoundingClientRect().height;
      document.documentElement.style.setProperty('--atlas-header-height', offset + 'px');
      main?.querySelectorAll('.table-wrap,.formula-box,.equation,.formula,.card:has(> table)').forEach(region => {
        const overflow = region.scrollWidth > region.clientWidth + 1 && /auto|scroll/.test(getComputedStyle(region).overflowX);
        if (overflow && !region.hasAttribute('tabindex')) { region.tabIndex = 0; region.dataset.atlasScroll = 'true'; }
        if (region.dataset.atlasScroll) {
          region.tabIndex = overflow ? 0 : -1;
          region.setAttribute('aria-label', copy('可横向滚动的表格或公式', 'Horizontally scrollable table or formula'));
        }
      });
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
      readingRoute();
      syncFigures();
      syncMotion();
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
    if (main) new MutationObserver(() => {
      readingRoute(); syncFigures(); syncMotion(); updateLinks(); scheduleNavigation();
    }).observe(main, {childList: true, subtree: true, attributes: true, attributeFilter: ['src']});
    setLanguage(lang);
    return {get lang() { return lang; }, setLanguage, refresh() { updateLinks(); scheduleNavigation(); }};
  }
  window.AtlasPaper = {init};
})();
