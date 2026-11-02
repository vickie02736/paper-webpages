(function () {
      const STRINGS = {
        zh: {
          allThemes: "全部主分类",
          themeFilter: "主分类",
          tagFilters: "跨学科标签",
          object: "研究对象",
          method: "方法",
          task: "任务",
          application: "应用",
          related: "相关方法与对照",
          relatedNote: "这些论文主归其他主题，通过此处关联阅读。",
          docTitle: '研究图谱 · Kewei Zhu',
          metaDesc: '以 MOF 与 AI 为核心的研究图谱，连接化学材料、实验机器人、数学基础、生命科学与交互式论文讲解。',
          brandSub: 'Kewei Zhu · 可视化研究笔记',
          navAria: '主导航',
          navThemes: '主题',
          navExplainers: '论文讲解',
          heroEyebrow: '研究的可视化索引',
          heroTitle: 'MOF + AI，<br>连接下一步。',
          heroText: '以<strong>金属有机框架与人工智能</strong>为核心的灵感库：连接高通量筛选、机器学习势与自动实验，从数学基础和兄弟领域积累问题、方法与判断。',
          catalogEyebrow: '研究目录',
          catalogTitle: '探索六个主题',
          catalogText: '展开主分类浏览论文。可按标题、作者、单位、方法、子方向、会议或年份搜索，多个词不分先后；主题内搜索会在此基础上进一步筛选。',
          searchPlaceholder: '搜索论文、作者或单位，例如 MIT 或 蛋白设计',
          searchAria: '搜索全部论文',
          onlyExplainers: '仅显示已有讲解',
          themeSearch: '在本主题内搜索论文、作者或单位…',
          themeSearchAria: '在主题内搜索：',
          loading: '正在加载论文目录…',
          loadingShort: '加载中…',
          footerText: '为慢读、清晰的问题与更好的联系而建。',
          footerLink: '查看仓库 ↗',
          toggle: 'EN',
          toggleAria: 'Switch to English',
          status: function (n, k, listed, explained) { return '已有讲解 ' + explained + ' 篇 · 文献 ' + n + ' 篇 · ' + k + ' 个主分类'; },
          matching: function (n) { return n + ' 篇匹配的论文'; },
          explainerMatching: function (n, total) { return n === total ? '共 ' + total + ' 篇论文已有讲解' : '当前匹配 ' + n + ' / 共 ' + total + ' 篇讲解'; },
          clearSearch: '清除搜索',
          count: function (shown, total, searching) { return (searching ? shown + ' / ' : '') + total + ' 篇'; },
          original: '原文 ↗',
          explainer: '讲解页 ↗',
          comingSoon: '讲解页制作中',
          local: '本仓库提供',
          hosted: '托管讲解页',
          indexed: '已收录原文',
          noMatch: '没有匹配的论文。',
          also: '也收录于：',
          alsoSep: '；',
          otherTopics: '其他',
          recentEyebrow: '近一周的讲解页',
          recentTitle: '最近新增的交互式讲解',
          openExplainer: '打开讲解页 ↗',
          createdOn: function (date) { return (date.getUTCMonth() + 1) + ' 月 ' + date.getUTCDate() + ' 日 ' + date.toLocaleTimeString('en-GB', {hour: '2-digit', minute: '2-digit', timeZone: 'UTC'}) + ' UTC 创建'; },
          unavailable: '论文目录加载失败',
          unavailableText: '无法加载论文目录，请查看仓库 README。'
        },
        en: {
          allThemes: "All primary themes",
          themeFilter: "Primary theme",
          tagFilters: "Cross-disciplinary tags",
          object: "Object",
          method: "Method",
          task: "Task",
          application: "Application",
          related: "Related methods & comparisons",
          relatedNote: "These references have their primary home in another theme.",
          docTitle: 'Research Atlas · Kewei Zhu',
          metaDesc: 'A research atlas centred on MOFs and AI, connecting chemistry, laboratory robotics, mathematical foundations, life sciences and interactive explainers.',
          brandSub: 'Kewei Zhu · visual research notes',
          navAria: 'Main navigation',
          navThemes: 'Themes',
          navExplainers: 'Paper explainers',
          heroEyebrow: 'A visual index of research',
          heroTitle: 'MOF + AI.<br>Ideas into discovery.',
          heroText: 'An idea library centred on <strong>metal–organic frameworks and AI</strong>: connecting high-throughput screening, machine-learning potentials and automated experiments with mathematical foundations and insights from neighbouring fields.',
          catalogEyebrow: 'Research catalogue',
          catalogTitle: 'Explore the six themes',
          catalogText: 'Open a primary theme to browse its papers. Search by title, author, affiliation, method, topic, conference, or year; words can appear in any order, and a theme\'s own search narrows the results further.',
          searchPlaceholder: 'Search papers, authors or affiliations, e.g. MIT',
          searchAria: 'Search all papers',
          onlyExplainers: 'Only papers with explainers',
          themeSearch: 'Search papers, authors or affiliations in this theme…',
          themeSearchAria: 'Search within theme: ',
          loading: 'Loading paper catalogue…',
          loadingShort: 'Loading…',
          footerText: 'Built for slow reading, clear questions, and better connections.',
          footerLink: 'View repository ↗',
          toggle: '中文',
          toggleAria: '切换到中文',
          status: function (n, k, listed, explained) { return explained + ' explainers · ' + n + ' papers · ' + k + ' primary themes'; },
          matching: function (n) { return n + (n === 1 ? ' matching paper' : ' matching papers'); },
          explainerMatching: function (n, total) { return n === total ? total + (total === 1 ? ' paper with an explainer' : ' papers with explainers') : 'Matching ' + n + ' / ' + total + ' papers with explainers'; },
          clearSearch: 'Clear search',
          count: function (shown, total, searching) { return (searching ? shown + ' / ' : '') + total + ' papers'; },
          original: 'Original ↗',
          explainer: 'Explainer ↗',
          comingSoon: 'Webpage coming soon',
          local: 'Available in this repository',
          hosted: 'Hosted explainer',
          indexed: 'Source paper indexed',
          noMatch: 'No papers match this search.',
          also: 'Also listed in: ',
          alsoSep: '; ',
          otherTopics: 'Other topics',
          recentEyebrow: 'Explainers from the past week',
          recentTitle: 'Recently added interactive explainers',
          openExplainer: 'Open explainer ↗',
          createdOn: function (date) { return 'Created ' + date.toLocaleString('en-GB', {day: 'numeric', month: 'short', hour: '2-digit', minute: '2-digit', timeZone: 'UTC'}) + ' UTC'; },
          unavailable: 'Paper catalogue unavailable',
          unavailableText: 'The catalogue could not be loaded. Please open the repository README.'
        }
      };
      const storedLang = function () {
        try { return window.localStorage.getItem('atlas-lang'); } catch (error) { return null; }
      };
      const urlLang = new URLSearchParams(window.location.search).get('lang');
      let lang = urlLang === 'en' || urlLang === 'zh' ? urlLang : (storedLang() === 'en' ? 'en' : 'zh');
      const t = function (key) { return STRINGS[lang][key]; };

      const globalSearch = document.getElementById('catalog-search');
      const onlyExplainers = document.getElementById('only-explainers');
      const status = document.getElementById('catalog-status');
      const clearSearch = document.getElementById('clear-search');
      const toggle = document.getElementById('lang-toggle');
      let themeRoots = [];
      const themeFilter = document.getElementById('theme-filter');
      const selectedTags = new Set(new URLSearchParams(location.search).getAll('tag'));
      let selectedTheme = new URLSearchParams(location.search).get('theme') || '';
      let selectedPaper = new URLSearchParams(location.search).get('paper') || '';
      const entityIndex = new Map();
      const textOf = value => value?.[lang] || '';
      const filteredByFacets = paper => (!selectedPaper || paper.id === selectedPaper) && (!selectedTheme || paper.primaryTheme === selectedTheme) && ['object','method','task','application'].every(type => {
        const chosen = [...selectedTags].filter(id => catalogData.taxonomyTags[id]?.type === type);
        return !chosen.length || chosen.some(id => paper.tagIds.includes(id));
      });
      const esc = function (value) {
        return String(value || '').replace(/[&<>"']/g, function (ch) {
          return ({'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;',"'":'&#39;'}[ch]);
        });
      };
      const safeUrl = function (value) {
        if (!/^https:\/\//.test(value) && !/^\.\//.test(value)) return '#';
        if (/^\.\/(papers|collections)\//.test(value)) {
          const url = new URL(value, window.location.href);
          url.searchParams.set('lang', lang);
          return url.href;
        }
        return value;
      };
      const normalize = function (value) {
        return String(value || '').normalize('NFKD').replace(/[\u0300-\u036f]/g, '')
          .replace(/[\u2010-\u2015\u2212]/g, '-').toLowerCase();
      };
      const tokens = function (query) { return normalize(query).split(/\s+/).filter(Boolean); };
      const matches = function (paper, terms) {
        return terms.every(function (term) { return /^(airs|aires|mlp|mlip|ree)$/.test(term) ? paper.searchWords.has(term) : paper.haystack.includes(term); });
      };
      const paperKey = function (paper) { return paper.id; };
      const themeTitle = function (name) {
        const root = themeRoots.find(function (r) { return r.dataset.theme === name; });
        return root ? root.dataset['title' + (lang === 'en' ? 'En' : 'Zh')] : name;
      };

      let catalogData = null;
      const listings = {};
      const sharedPage = {};
      const explainerPath = function (paper) { return paper.p || sharedPage[paperKey(paper)] || ''; };
      const groupLabel = function (theme, groupId) { const g = theme.groups[groupId]; return textOf(g.category) + ' / ' + textOf(g.topic); };
      const categoryText = function (category) { return lang === 'en' ? category.replace('｜', ' — ') : category; };
      const shortName = function (paper) { return lang === 'en' ? (paper.se || paper.s) : paper.s; };
      const metaText = function (paper) {
        if (lang !== 'en') return paper.m;
        const separator = paper.m.indexOf(' · ');
        const venue = separator < 0 ? paper.m : paper.m.slice(0, separator);
        const tag = separator < 0 ? '' : paper.m.slice(separator + 3);
        return (catalogData.venues[venue] || venue) + (tag ? ' · ' + (catalogData.tags[tag] || tag) : '');
      };
      const paperHref = function (id) {
        const url = new URL('./', location.href); if (lang === 'en') url.searchParams.set('lang','en');
        url.searchParams.set('paper',id); url.hash='themes'; return url.href;
      };
      const referenceLink = function (id) {
        const entry=entityIndex.get(id); if (!entry) return '';
        return '<a class="paper-ref" data-paper-ref="'+esc(id)+'" href="'+esc(paperHref(id))+'">'+esc(shortName(entry.paper))+'</a><small> · '+esc(textOf(entry.theme.name))+'</small>';
      };
      const alsoListed = function (theme, paper) {
        return paper.tagIds.length ? '<div class="paper-tags">'+paper.tagIds.map(id => '<button type="button" data-tag="'+esc(id)+'" aria-pressed="'+selectedTags.has(id)+'">'+esc(textOf(catalogData.taxonomyTags[id].name))+'</button>').join('')+'</div>' : '';
      };
      const renderFilters = function () {
        const focused=document.activeElement;
        const oldValue=selectedTheme;
        const options='<option value="">'+esc(t('allThemes'))+'</option>'+catalogData.themes.map(theme=>'<option value="'+esc(theme.id)+'">'+esc(textOf(theme.name))+'</option>').join('');
        if(themeFilter.innerHTML!==options)themeFilter.innerHTML=options;
        themeFilter.value=oldValue;
        const filters=document.getElementById('tag-options');
        const filterFocus=focused?.dataset.filterTag;
        const tagHTML=['object','method','task','application'].map(type=>'<fieldset><legend>'+esc(t(type))+'</legend>'+Object.values(catalogData.taxonomyTags).filter(tag=>tag.type===type).map(tag=>'<label><input type="checkbox" data-filter-tag="'+esc(tag.id)+'"'+(selectedTags.has(tag.id)?' checked':'')+'>'+esc(textOf(tag.name))+'</label>').join('')+'</fieldset>').join('');
        if(filters.innerHTML!==tagHTML){filters.innerHTML=tagHTML;if(filterFocus)[...filters.querySelectorAll('input')].find(n=>n.dataset.filterTag===filterFocus)?.focus({preventScroll:true});}
        document.getElementById('tag-filter-label').textContent=t('tagFilters')+(selectedTags.size?' · '+selectedTags.size:'');
      };

      const themeQueries = {};
      const expandState = {saved: {}, search: {}};
      const renderTheme = function (theme, root, globalTerms) {
        const themeTerms = tokens(themeQueries[theme.n]);
        const searching = globalTerms.length > 0 || themeTerms.length > 0 || onlyExplainers.checked || selectedTags.size > 0 || Boolean(selectedTheme || selectedPaper);
        const store = searching ? expandState.search : expandState.saved;
        const visible = theme.p.filter(function (paper) {
          return filteredByFacets(paper) && (!onlyExplainers.checked || explainerPath(paper)) && matches(paper, globalTerms) && matches(paper, themeTerms);
        });
        const groups = {};
        visible.forEach(function (paper) { (groups[paper.g] ||= []).push(paper); });
        root.querySelector('.theme-count').textContent = t('count')(visible.length, theme.p.length, searching);
        const categories = {};
        Object.keys(groups).forEach(function (groupId) {
          const stableCategory = theme.groups[groupId].categoryId;
          (categories[stableCategory] ||= []).push(groupId);
        });
        const disclosure = function (key, label, body, className) {
          const expanded = key in store ? store[key] : searching;
          return '<section class="paper-group ' + className + '"><button class="group-toggle" type="button" data-key="' + esc(key) + '" aria-expanded="' + expanded + '"><span class="group-title">' + esc(label) + '</span><span class="group-chevron" aria-hidden="true">' + (expanded ? '−' : '＋') + '</span></button><div class="group-content"' + (expanded ? '' : ' hidden') + '>' + body + '</div></section>';
        };
        const html = Object.keys(categories).map(function (stableCategory) {
          const groupIds = categories[stableCategory];
          const displayCategory = textOf(theme.groups[groupIds[0]].category);
          const topics = groupIds.map(function (groupId) {
            const rows = groups[groupId].map(function (paper) {
              const pagePath = explainerPath(paper);
              const localPage = pagePath && /^\.\//.test(pagePath);
              const summary = lang === 'en' ? paper.e : paper.d;
              const page = pagePath ? '<a href="' + safeUrl(pagePath) + '" target="_blank" rel="noopener">' + esc(t('explainer')) + '</a>' : '<span class="status">' + esc(t('comingSoon')) + '</span>';
              return '<article class="paper-row" id="'+esc(paper.id)+'" data-paper-id="'+esc(paper.id)+'"><div class="paper-key">' + esc(shortName(paper)) + '</div>' +
                '<div><h4 class="paper-title" lang="en">' + esc(paper.t) + '</h4>' + PaperBibliography.html(catalogData.paperMetadata?.[paper.u], lang, theme.n + ':' + paper.u) + (summary ? '<p class="paper-summary">' + esc(summary) + '</p>' : '') + '<p class="paper-meta">' + esc(metaText(paper)) + '</p>' + alsoListed(theme, paper) + '</div>' +
                '<div class="paper-info">' + esc(localPage ? t('local') : (pagePath ? t('hosted') : t('indexed'))) + '</div>' +
                '<div class="paper-actions"><a href="' + safeUrl(paper.u) + '" target="_blank" rel="noopener">' + esc(t('original')) + '</a>' + page + '</div></article>';
            }).join('');
            return disclosure(theme.n + '\ntopic\n' + theme.groups[groupId].id, textOf(theme.groups[groupId].topic), rows, 'topic-menu');
          }).join('');
          return disclosure(theme.n + '\ncategory\n' + stableCategory, displayCategory ? categoryText(displayCategory) : t('otherTopics'), topics, 'category-menu');
        }).join('');
        const bibliographyFocus = PaperBibliography.captureFocus();
        root.querySelector('.paper-groups').innerHTML = html || '<div class="empty-state">' + esc(t('noMatch')) + '</div>';
        root.querySelectorAll('.group-toggle').forEach(function (button) {
          button.addEventListener('click', function () {
            const open = button.getAttribute('aria-expanded') === 'true';
            const content = button.nextElementSibling;
            button.setAttribute('aria-expanded', String(!open));
            content.hidden = open;
            button.querySelector('.group-chevron').textContent = open ? '＋' : '−';
            store[button.dataset.key] = !open;
          });
        });
        PaperBibliography.restoreFocus(bibliographyFocus);
        const related=root.querySelector('.related-papers');
        const relatedIds=theme.relatedPaperIds.filter(id=>{const p=entityIndex.get(id)?.paper;return p&&(!onlyExplainers.checked||explainerPath(p))&&matches(p,globalTerms)&&matches(p,themeTerms)&&(!selectedPaper||p.id===selectedPaper);});
        const relatedOpen=related.open;
        const relatedHTML='<summary>'+esc(t('related'))+' · '+relatedIds.length+'</summary><p>'+esc(t('relatedNote'))+'</p><ul>'+relatedIds.map(id=>'<li>'+referenceLink(id)+'</li>').join('')+'</ul>';
        if(related.innerHTML!==relatedHTML)related.innerHTML=relatedHTML;
        related.open=relatedOpen; related.hidden=!relatedIds.length || Boolean(selectedTags.size || selectedTheme && selectedTheme!==theme.id);
        return visible;
      };

      const applyStatic = function () {
        document.documentElement.lang = lang === 'en' ? 'en' : 'zh-CN';
        document.title = t('docTitle');
        document.querySelector('meta[name="description"]').setAttribute('content', t('metaDesc'));
        document.querySelectorAll('[data-i18n]').forEach(function (el) {
          if (el.dataset.i18n === 'loading' && catalogData) return;
          if (el.dataset.i18n === 'loadingShort' && catalogData) return;
          el.textContent = t(el.dataset.i18n);
        });
        document.querySelectorAll('[data-i18n-html]').forEach(function (el) { el.innerHTML = t(el.dataset.i18nHtml); });
        document.querySelectorAll('[data-i18n-placeholder]').forEach(function (el) { el.placeholder = t(el.dataset.i18nPlaceholder); });
        document.querySelectorAll('[data-i18n-aria]').forEach(function (el) { el.setAttribute('aria-label', t(el.dataset.i18nAria)); });
        themeRoots.forEach(function (root) {
          const suffix = lang === 'en' ? 'En' : 'Zh';
          root.querySelector('.theme-name').innerHTML = esc(root.dataset['title' + suffix]) + '<small>' + esc(root.dataset['sub' + suffix]) + '</small>';
          const input = root.querySelector('.theme-search input');
          if (input) {
            input.placeholder = t('themeSearch');
            input.setAttribute('aria-label', t('themeSearchAria') + root.dataset['title' + suffix]);
          }
        });
        toggle.textContent = t('toggle');
        toggle.setAttribute('aria-label', t('toggleAria'));
        toggle.setAttribute('aria-pressed', String(lang === 'en'));
      };
      const syncUrl = function () {
        const url = new URL(window.location.href);
        if(selectedTheme)url.searchParams.set('theme',selectedTheme);else url.searchParams.delete('theme');
        if(selectedPaper)url.searchParams.set('paper',selectedPaper);else url.searchParams.delete('paper');
        url.searchParams.delete('tag');selectedTags.forEach(id=>url.searchParams.append('tag',id));
        const q = globalSearch.value.trim();
        if (q) url.searchParams.set('q', q); else url.searchParams.delete('q');
        if (onlyExplainers.checked) url.searchParams.set('explainers', '1'); else url.searchParams.delete('explainers');
        if (lang === 'en') url.searchParams.set('lang', 'en'); else url.searchParams.delete('lang');
        window.history.replaceState(null, '', url);
      };
      let rerender = function () {};
      toggle.addEventListener('click', function () {
        lang = lang === 'en' ? 'zh' : 'en';
        try { window.localStorage.setItem('atlas-lang', lang); } catch (error) { /* storage unavailable */ }
        applyStatic();
        rerender();
        syncUrl();
      });
      applyStatic();

      const readCatalog = function () {
        const url = new URL('./references/paper-catalog.json', window.location.href);
        url.searchParams.set('v', String(Date.now()));
        const controller = new AbortController();
        const timeout = window.setTimeout(function () { controller.abort(); }, 15000);
        return fetch(url, {cache: 'no-store', signal: controller.signal}).then(function (response) {
          if (!response.ok) throw new Error('catalog');
          return response.json();
        }).then(function (data) {
          if (!data || data.v !== 2 || !Array.isArray(data.themes) || !data.themes.length || !data.taxonomyTags || !Array.isArray(data.researchRoutes)) throw new Error('catalog');
          const bilingual = value => value && ['zh','en'].every(k=>typeof value[k]==='string'&&value[k]);
          const seen=new Set(), sourceURLs=new Set(), themes=new Set();
          for(const theme of data.themes){
            if(!theme||!/^[-a-z0-9]+$/.test(theme.id)||theme.n!==theme.id||themes.has(theme.id)||!bilingual(theme.name)||!bilingual(theme.role)||!bilingual(theme.description)||!Array.isArray(theme.groups)||!Array.isArray(theme.g)||!Array.isArray(theme.ge)||theme.g.length!==theme.groups.length||theme.ge.length!==theme.groups.length||!theme.g.every(v=>typeof v==='string')||!theme.ge.every(v=>typeof v==='string')||!Array.isArray(theme.p)||!Array.isArray(theme.relatedPaperIds))throw new Error('theme');
            themes.add(theme.id);const groupIds=new Set();
            for(const group of theme.groups){if(!group||!/^[-a-z0-9]+$/.test(group.id)||!/^[-a-z0-9]+$/.test(group.categoryId)||groupIds.has(group.id)||!bilingual(group.category)||!bilingual(group.topic))throw new Error('group');groupIds.add(group.id);}
            for(const paper of theme.p){
              if(!paper||!/^paper-[a-f0-9]{12}$/.test(paper.id)||seen.has(paper.id)||sourceURLs.has(paper.u)||!['s','t','u','m','d','e'].every(k=>typeof paper[k]==='string')||!/^https:\/\//.test(paper.u)||!Number.isInteger(paper.g)||theme.groups[paper.g]?.id!==paper.topicId||!Array.isArray(paper.aliases)||!paper.aliases.every(v=>typeof v==='string')||!Array.isArray(paper.legacyContexts)||paper.legacyContexts.some(c=>!c||!['theme','group','groupEn'].every(k=>typeof c[k]==='string')||!bilingual(c.summary))||!Array.isArray(paper.tagIds)||paper.tagIds.some(id=>!data.taxonomyTags[id])||paper.p&&!/^\.\/papers\/[a-z0-9-]+\/$/.test(paper.p))throw new Error('paper');
              seen.add(paper.id);sourceURLs.add(paper.u);
            }
          }
          for(const [id,tag] of Object.entries(data.taxonomyTags))if(tag.id!==id||!['object','method','task','application'].includes(tag.type)||!bilingual(tag.name))throw new Error('tag');
          for(const theme of data.themes)if(theme.relatedPaperIds.some(id=>!seen.has(id)||theme.p.some(p=>p.id===id)))throw new Error('related');
          for(const route of data.researchRoutes)if(!/^[-a-z0-9]+$/.test(route.id)||!bilingual(route.name)||!bilingual(route.question)||!Array.isArray(route.stages)||route.stages.some(s=>!bilingual(s.name)||!bilingual(s.note)||!Array.isArray(s.paperIds)||s.paperIds.some(id=>!seen.has(id))))throw new Error('route');
          if(data.collections!==undefined){
            if(!Array.isArray(data.collections))throw new Error('collections');
            const collectionIds=new Set();
            for(const collection of data.collections){
              if(!collection||!/^[-a-z0-9]+$/.test(collection.id)||collectionIds.has(collection.id)||!themes.has(collection.themeId)||!/^\.\/collections\/[a-z0-9-]+\/$/.test(collection.path)||!bilingual(collection.title)||!bilingual(collection.summary)||!Array.isArray(collection.items))throw new Error('collection');
              collectionIds.add(collection.id);const paths=new Set();
              for(const item of collection.items){
                if(!item||!/^[-a-z0-9]+$/.test(item.id)||!/^\.\/papers\/[a-z0-9-]+\/$/.test(item.path)||paths.has(item.path)||!['paper','document'].includes(item.type)||!bilingual(item.title)||!bilingual(item.summary)||!/^https:\/\//.test(item.source))throw new Error('collection item');
                paths.add(item.path);
                if(item.type==='paper'&&!data.themes.some(t=>t.p.some(p=>p.id===item.paperId&&p.p===item.path))||item.type==='document'&&item.paperId)throw new Error('collection paper identity');
              }
            }
          }
          return data;
        }).finally(function () { window.clearTimeout(timeout); });
      };
      const ensureThemeRoots = function (data) {
        const catalog=document.getElementById('catalog');
        const existing=new Map(themeRoots.map(root=>[root.dataset.theme,root]));
        data.themes.forEach((theme,i)=>{
          let root=existing.get(theme.id);
          if(!root){root=document.createElement('details');root.className='theme-menu';root.dataset.theme=theme.id;root.id='theme-'+theme.id;
            root.innerHTML='<summary><span class="theme-number"></span><span class="theme-name"></span><span class="theme-count"></span><span class="chevron" aria-hidden="true">＋</span></summary><div class="theme-body"><p class="theme-description"></p><div class="theme-search"><input type="search"></div><div class="paper-groups"></div><details class="related-papers" hidden></details></div>';}
          root.dataset.titleZh=theme.name.zh;root.dataset.titleEn=theme.name.en;root.dataset.subZh=theme.role.zh;root.dataset.subEn=theme.role.en;
          root.querySelector('.theme-number').textContent=String(i+1).padStart(2,'0');
          if(catalog.children[i]!==root)catalog.insertBefore(root,catalog.children[i]||null);
        });
        existing.forEach((root,id)=>{if(!data.themes.some(t=>t.id===id))root.remove();});
        themeRoots=[...catalog.querySelectorAll('.theme-menu')];
      };
      const initializeCatalog = function (data) {
        const byName = {};
        let total = 0;
        let listingTotal = 0;
        let explainerTotal = 0;
        let revision = JSON.stringify(data);
        const indexCatalog = function (next) {
          data = next;
          catalogData = data;
          data.tags = data.tags || {};
          data.venues = data.venues || {};
          ensureThemeRoots(data);
          entityIndex.clear();
          [byName, listings, sharedPage].forEach(function (map) {
            Object.keys(map).forEach(function (key) { delete map[key]; });
          });
          data.themes.forEach(function (theme) {
            byName[theme.n] = theme;
            theme.ge = theme.ge || theme.g;
            theme.p.forEach(function (paper) {
              paper.primaryTheme=theme.id;entityIndex.set(paper.id,{paper,theme});
              const key = paperKey(paper);
              (listings[key] ||= []).push({theme: theme, groupId: paper.g});
              if (paper.p && !sharedPage[key]) sharedPage[key] = paper.p;
              const separator = paper.m.indexOf(' · ');
              const venue = separator < 0 ? paper.m : paper.m.slice(0, separator);
              const tag = separator < 0 ? '' : paper.m.slice(separator + 3);
              paper.haystack = normalize([paper.id, paper.u, paper.s, paper.se, paper.m, data.venues[venue], data.tags[tag], paper.t, paper.d, paper.e,
                theme.name.zh,theme.name.en,theme.role.zh,theme.role.en,theme.g[paper.g],theme.ge[paper.g],...paper.aliases,...paper.legacyContexts.flatMap(c=>[c.theme,c.group,c.groupEn,c.summary.zh,c.summary.en]),...paper.tagIds.flatMap(id=>[id,data.taxonomyTags[id].name.zh,data.taxonomyTags[id].name.en]),PaperBibliography.searchText(data.paperMetadata?.[paper.u])].join(' '));
              paper.searchWords = new Set(paper.haystack.split(/[^\p{L}\p{N}]+/u));
            });
          });
          total = Object.keys(listings).length;
          listingTotal = data.themes.reduce(function (sum, theme) { return sum + theme.p.length; }, 0);
          explainerTotal = Object.keys(sharedPage).length;
          if(selectedTheme&&!byName[selectedTheme])selectedTheme='';
          if(selectedPaper&&!entityIndex.has(selectedPaper))selectedPaper='';
          selectedTags.forEach(id=>{if(!data.taxonomyTags[id])selectedTags.delete(id);});
          applyStatic();
        };
        indexCatalog(data);
        const shown = {};
        let openBeforeSearch = null;
        const updateStatus = function () {
          const hasSearch = Boolean(selectedTheme || selectedPaper || selectedTags.size) || tokens(globalSearch.value).length > 0 || Object.values(themeQueries).some(function (query) { return tokens(query).length; });
          clearSearch.hidden = !hasSearch;
          if (!hasSearch && !onlyExplainers.checked) {
            status.textContent = t('status')(total, data.themes.length, listingTotal, explainerTotal);
            return;
          }
          const matched = new Set();
          Object.keys(shown).forEach(function (name) {
            shown[name].forEach(function (paper) { matched.add(paperKey(paper)); });
          });
          status.textContent = t(onlyExplainers.checked ? 'explainerMatching' : 'matching')(matched.size, explainerTotal);
        };
        const renderAll = function (preserveOpen) {
          const globalTerms = tokens(globalSearch.value);
          const searching = globalTerms.length > 0 || onlyExplainers.checked || Boolean(selectedTheme || selectedPaper || selectedTags.size);
          if (searching && !openBeforeSearch) openBeforeSearch = Object.fromEntries(themeRoots.map(root => [root.dataset.theme,root.open]));
          themeRoots.forEach(function (root) {
            const name = root.dataset.theme;
            shown[name] = renderTheme(byName[name], root, globalTerms);
            if (searching && !preserveOpen) root.open = shown[name].length > 0;
            root.classList.toggle('no-match', searching && !shown[name].length);
            root.querySelector('.theme-description').textContent=textOf(byName[name].description);
            let collectionLinks=root.querySelector('.collection-links');
            const collections=(data.collections||[]).filter(c=>c.themeId===name);
            if(!collectionLinks){collectionLinks=document.createElement('div');collectionLinks.className='collection-links';root.querySelector('.theme-description').after(collectionLinks);}
            collectionLinks.hidden=!collections.length;
            collectionLinks.innerHTML=collections.map(c=>'<p><a class="button" href="'+safeUrl(c.path)+'">'+esc(textOf(c.title))+' ↗</a><br><span>'+esc(textOf(c.summary))+'</span></p>').join('');
          });
          if (!searching && openBeforeSearch) {
            themeRoots.forEach(function (root, i) { root.open = Boolean(openBeforeSearch[root.dataset.theme]); });
            openBeforeSearch = null;
          }
          updateStatus();
          renderFilters();
        };
        const recent = document.getElementById('recent');
        const renderRecent = function () {
          const day = 86400000;
          const now = Date.now();
          const today = Math.floor(now / day) * day;
          const items = Object.keys(data.explainers || {}).map(function (path) {
            const added = new Date(data.explainers[path] + 'T00:00:00Z');
            const timestamp = (data.explainerCreatedAt || {})[path];
            const created = timestamp ? new Date(timestamp) : added;
            const first = !isNaN(created) && created.toISOString().slice(0, 10) === data.explainers[path] ? created : added;
            let entry = null;
            data.themes.some(function (theme) {
              const paper = theme.p.find(function (p) { return p.p === path; });
              if (paper) entry = {theme: theme, paper: paper};
              return Boolean(paper);
            });
            if(!entry){
              for(const collection of data.collections||[]){const document=collection.items.find(item=>item.path===path);if(document){entry={document:document,collection:collection};break;}}
            }
            return {path: path, created: first, entry: entry};
          }).filter(function (item) {
            return item.entry && !isNaN(item.created) && item.created >= today - 6 * day && item.created <= now;
          }).sort(function (a, b) { return b.created - a.created || a.path.localeCompare(b.path); });
          recent.hidden = !items.length;
          const recentList = document.getElementById('recent-list');
          const focused = document.activeElement;
          const focusHref = recentList.contains(focused) ? focused.getAttribute('href') : null;
          const html = items.map(function (item) {
            if(item.entry.document){
              const doc=item.entry.document;
              return '<div class="recent-item"><div><h4>'+esc(textOf(doc.title))+'</h4><p class="recent-meta">'+(lang==='en'?'Documentation study':'文档专题')+' · <time datetime="'+item.created.toISOString()+'">'+esc(t('createdOn')(item.created))+'</time></p></div><a class="button" href="'+safeUrl(item.path)+'" target="_blank" rel="noopener">'+esc(t('openExplainer'))+'</a></div>';
            }
            const paper = item.entry.paper;
            return '<div class="recent-item"><div><h4 lang="en">' + esc(paper.t) + '</h4><p class="recent-meta"><b>' + esc(shortName(paper)) + '</b> · ' +
              esc(themeTitle(item.entry.theme.n)) + ' · <time datetime="' + item.created.toISOString() + '">' + esc(t('createdOn')(item.created)) + '</time></p>' + PaperBibliography.html(data.paperMetadata?.[paper.u], lang, 'recent:' + paper.u) + '</div>' +
              '<a class="button" href="' + safeUrl(item.path) + '" target="_blank" rel="noopener">' + esc(t('openExplainer')) + '</a></div>';
          }).join('');
          if (recentList.innerHTML !== html) {
            const bibliographyFocus = PaperBibliography.captureFocus();
            recentList.innerHTML = html;
            PaperBibliography.restoreFocus(bibliographyFocus);
            if (focusHref) {
              const replacement = Array.from(recentList.querySelectorAll('a')).find(function (node) { return node.getAttribute('href') === focusHref; });
              if (replacement) replacement.focus({preventScroll: true});
            }
          }
        };
        rerender = function () {
          renderAll(true);
          renderRecent();
        };
        let refreshing = null;
        const refreshCatalog = function () {
          if (refreshing) return refreshing;
          refreshing = readCatalog().then(function (next) {
            const nextRevision = JSON.stringify(next);
            if (nextRevision === revision) { renderRecent(); return; }
            const previouslyEmpty = new Set(themeRoots.filter(root=>!shown[root.dataset.theme]?.length).map(root=>root.dataset.theme));
            const focused = document.activeElement;
            const focusKey = focused && focused.closest('.paper-groups') ? focused.dataset.key : null;
            const focusHref = focused && focused.closest('.paper-row') ? focused.getAttribute('href') : null;
            const focusTheme = focused && focused.closest('.theme-menu');
            const scroll = {x: window.scrollX, y: window.scrollY};
            indexCatalog(next);
            revision = nextRevision;
            rerender();
            themeRoots.forEach(function (root, i) {
              if (onlyExplainers.checked && previouslyEmpty.has(root.dataset.theme) && shown[root.dataset.theme].length) root.open = true;
            });
            if (focusTheme && (focusKey || focusHref)) {
              const selector = focusKey ? '.group-toggle' : '.paper-actions a';
              const replacement = Array.from(focusTheme.querySelectorAll(selector)).find(function (node) {
                return focusKey ? node.dataset.key === focusKey : node.getAttribute('href') === focusHref;
              });
              if (replacement) replacement.focus({preventScroll: true});
            }
            window.scrollTo(scroll.x, scroll.y);
          }).catch(function () {
            // Keep the current catalogue and filters available during a network failure.
          }).finally(function () { refreshing = null; });
          return refreshing;
        };
        globalSearch.addEventListener('input', function () {
          selectedPaper='';
          expandState.search = {};
          renderAll();
          syncUrl();
        });
        clearSearch.addEventListener('click', function () {
          globalSearch.value = '';selectedTheme='';selectedPaper='';selectedTags.clear();
          Object.keys(themeQueries).forEach(function (name) { delete themeQueries[name]; });
          themeRoots.forEach(function (root) { root.querySelector('.theme-search input').value = ''; });
          expandState.search = {};
          renderAll();
          syncUrl();
        });
        onlyExplainers.addEventListener('change', function () {
          expandState.search = {};
          renderAll();
          syncUrl();
          refreshCatalog();
        });
        document.getElementById('catalog').addEventListener('input',function(event){
          if(!event.target.matches('.theme-search input'))return;
          const name=event.target.closest('.theme-menu').dataset.theme;
          themeQueries[name]=event.target.value;expandState.search={};renderAll(true);syncUrl();
        });
        themeFilter.addEventListener('change',()=>{selectedTheme=themeFilter.value;selectedPaper='';expandState.search={};renderAll();syncUrl();});
        document.getElementById('tag-options').addEventListener('change',event=>{
          const id=event.target.dataset.filterTag;if(!id)return;
          if(event.target.checked)selectedTags.add(id);else selectedTags.delete(id);
          selectedPaper='';expandState.search={};renderAll();syncUrl();
        });
        document.addEventListener('click',event=>{
          const ref=event.target.closest('[data-paper-ref]');
          if(ref&&!event.metaKey&&!event.ctrlKey&&!event.shiftKey&&!event.altKey){
            event.preventDefault();selectedPaper=ref.dataset.paperRef;selectedTheme='';selectedTags.clear();globalSearch.value='';onlyExplainers.checked=false;
            Object.keys(themeQueries).forEach(k=>delete themeQueries[k]);themeRoots.forEach(r=>r.querySelector('input').value='');
            expandState.search={};renderAll();syncUrl();document.getElementById('themes').scrollIntoView();
            const heading=document.getElementById(selectedPaper)?.querySelector('.paper-title');if(heading){heading.tabIndex=-1;heading.focus({preventScroll:true});}
          }
          const chip=event.target.closest('[data-tag]');if(chip){const id=chip.dataset.tag;if(selectedTags.has(id))selectedTags.delete(id);else selectedTags.add(id);selectedPaper='';expandState.search={};renderAll();syncUrl();document.querySelector('.tag-filters').open=true;document.querySelector('[data-filter-tag="'+id+'"]')?.focus({preventScroll:true});}
        });
        applyStatic();
        const initialParams = new URLSearchParams(window.location.search);
        const initialQuery = initialParams.get('q');
        if (initialQuery) globalSearch.value = initialQuery;
        onlyExplainers.checked = initialParams.get('explainers') === '1';
        onlyExplainers.disabled = false;
        renderAll();
        renderRecent();
        document.addEventListener('visibilitychange', function () { if (!document.hidden) refreshCatalog(); });
        window.addEventListener('focus', refreshCatalog);
        window.addEventListener('pageshow', function (event) { if (event.persisted) refreshCatalog(); });
        window.setInterval(function () { if (!document.hidden) refreshCatalog(); }, 60000);
        if (initialQuery || onlyExplainers.checked || selectedPaper || selectedTheme || selectedTags.size) document.getElementById('themes').scrollIntoView();
      };
      let starting = null;
      const loadCatalog = function () {
        if (starting || catalogData || document.hidden) return;
        starting = readCatalog().then(initializeCatalog).catch(function () {
          status.textContent = t('unavailable');
          window.setTimeout(loadCatalog, 60000);
        }).finally(function () { starting = null; });
      };
      document.addEventListener('visibilitychange', function () { if (!document.hidden && !catalogData) loadCatalog(); });
      window.addEventListener('focus', function () { if (!catalogData) loadCatalog(); });
      loadCatalog();
    }());
