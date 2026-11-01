/* Reader-requested definitions, scoped to this paper. */
(() => {
  'use strict';
  const pair = (zh, en) => `<span class="paired"><span class="zh" lang="zh-CN">${zh}</span><span class="en" lang="en">${en}</span></span>`;
  const paragraph = (zh, en) => `<p>${pair(zh, en)}</p>`;
  const formula = (labelZh, labelEn, value) => `<div class="annotation-formula"><small>${pair(labelZh, labelEn)}</small><div>${value}</div></div>`;
  const definitions = {
    paa: {
      title: ['PAA · 膦酰乙酸', 'PAA · phosphonoacetic acid'],
      question: ['PAA 是什么？长什么样？', 'What is PAA, and what does it look like?'],
      body: paragraph('这里的 PAA 是膦酰乙酸（phosphonoacetic acid），一个带有羧酸端和膦酸端的小分子；在本文中不是聚丙烯酸。下面画的是连接关系式，不是三维构象。', 'Here PAA means phosphonoacetic acid: a small molecule with a carboxylic acid end and a phosphonic acid end. It does not mean poly(acrylic acid) in this paper. These formulas show connectivity, not a three-dimensional conformation.')
        + formula('游离 PAA · 左为羧酸端，右为膦酸端', 'Free PAA · carboxylic acid at left, phosphonic acid at right', '<span class="annotation-carboxyl">HO–C(=O)</span>–CH₂–<span class="annotation-phosphonate">P(=O)(OH)₂</span>')
        + formula('接到 MOF 后 · Ar 表示连接体芳环', 'After grafting · Ar denotes the linker aromatic ring', 'Ar–NH–<span class="annotation-carboxyl">C(=O)</span>–CH₂–<span class="annotation-phosphonate">P(=O)(OH)₂</span>')
        + paragraph('接枝时，羧酸端与 UiO-66-NH₂ 的氨基形成酰胺链 –NH–C(=O)–，留下膦酸端的 O 供 Gd 配位。酸式只用于说明连接关系；水中的质子化状态会随条件改变。本文 PAA 的局部 XAFS 证据只针对 Gd。', 'Grafting couples the carboxylic acid end to an amino group on UiO-66-NH₂ through an amide, –NH–C(=O)–, leaving phosphonate O donors available for Gd. The acid form illustrates connectivity; protonation in water depends on conditions. Local PAA XAFS evidence in this study is limited to Gd.')
    },
    complexing: {
      title: ['络合基团', 'Complexing groups'],
      question: ['络合基团是什么？', 'What is a complexing group?'],
      body: paragraph('络合基团是配体中能用供体原子与金属离子形成配位联系的部分。供体常见 O、N、S；它们可提供孤对电子。可把它理解为分子上能“抓住”金属的化学部位，例如羧酸盐 –COO⁻ 的 O、膦酸基的 O。', 'A complexing group is the part of a ligand whose donor atoms coordinate a metal ion. Common donors are O, N and S atoms with lone electron pairs. Examples include carboxylate –COO⁻ and phosphonate O donors.')
        + paragraph('同一配体用多个供体连接同一金属并形成环时，才称为螯合；络合不一定都是螯合。本文比较氨基化与 PAA 官能化：PAA 的膦酸氧有 Gd–P 近邻证据支持，增加 –NH₂ 后吸附量上升则不能单独证明 Ln–N 直接结合。', 'Chelation is the case in which multiple donors of the same ligand bind the same metal and form a ring; not every complex is a chelate. This study compares amination and PAA functionalization. Gd–P neighbor evidence supports phosphonate binding, whereas increased uptake after adding –NH₂ alone does not establish direct Ln–N binding.')
    },
    defects: {
      title: ['缺陷工程', 'Defect engineering'],
      question: ['缺陷工程是什么？', 'What is defect engineering?'],
      body: paragraph('缺陷工程是有目的地调节晶体偏离理想重复结构的位置、类型或数量。在 MOF 中，可包括缺失有机连接体或缺失节点；合成配方、调节剂等可影响这些缺陷。', 'Defect engineering deliberately controls the type, number or location of departures from an ideal repeating crystal structure. In MOFs, defects can include missing organic linkers or nodes; synthesis conditions and modulators can influence them.')
        + formula('本文的样品对照 · 平均 BDC / 节点', 'Sample comparison here · mean BDC / node', 'UiO-66-NH₂: 6.0 (ideal) / 5.8 (defective)')
        + paragraph('少一个连接体可能暴露更多含氧节点位点，也可能改变孔隙和水中稳定性，因此缺陷并非越多越好。5.8 是样品平均组成，不是每个节点恰好缺一个。本文也保留 Ln 促进 Zr–BDC 水解、产生可结合位点的解释，不能把吸附全部归因于预先存在的缺陷。', 'A missing linker may expose additional node oxygen sites and also change porosity and stability in water, so more defects are not automatically better. The value 5.8 is a sample average, not exactly one missing linker at each node. The paper also retains Ln-induced Zr–BDC hydrolysis as a possible source of binding sites; adsorption is not assigned entirely to pre-existing defects.')
    },
    lanthanides: {
      title: ['Nd、Gd、Lu 与轻／中／重 Ln', 'Nd, Gd, Lu and light/middle/heavy Ln'],
      question: ['Nd、Gd、Lu 分别是轻、中、重 Ln 吗？', 'Are Nd, Gd and Lu light, middle and heavy Ln?'],
      body: paragraph('是，按本文的选取方式：Nd（钕，neodymium）代表轻镧系，Gd（钆，gadolinium）代表中间镧系，Lu（镥，lutetium）代表重镧系。Ln 是镧系元素的通称；实验考察的是它们的三价离子 Nd³⁺、Gd³⁺、Lu³⁺。', 'Yes, in this paper Nd (neodymium) represents the light lanthanides, Gd (gadolinium) the intermediate lanthanides, and Lu (lutetium) the heavy lanthanides. Ln denotes lanthanides; the experiments examine their trivalent ions Nd³⁺, Gd³⁺ and Lu³⁺.')
        + formula('本文沿镧系选取的三个代表', 'Three representatives sampled across the series', 'Nd³⁺ → Gd³⁺ → Lu³⁺')
        + paragraph('轻／中／重是沿镧系序列的分组，不是离子的电荷大小；不同领域的分组边界可能不同，因此这里采用作者的表述。三个代表的结果也不能自动推广到整个镧系。', 'Light/middle/heavy describes grouping along the lanthanide series, not ionic charge. Boundaries vary across fields, so the labels here follow the authors. Results for these three representatives do not automatically establish behavior for the entire series.')
    },
    xafs: {
      title: ['XAFS · X 射线吸收精细结构', 'XAFS · X-ray absorption fine structure'],
      question: ['XAFS / X 射线是什么？如何展现精细结构？', 'What are X-rays and XAFS, and how is fine structure shown?'],
      body: paragraph('X 射线是一种高能、短波长的电磁辐射。XAFS 是用 X 射线测量某元素吸收边附近及以上的吸收随能量变化的方法；这里的“精细结构”是吸收谱上的细小变化，不是直接拍到的原子照片。', 'X-rays are high-energy, short-wavelength electromagnetic radiation. XAFS measures how absorption varies with energy near and above an element’s absorption edge. “Fine structure” means small variations in that spectrum, not a direct image of atoms.')
        + paragraph('吸收 X 射线可激发内层电子。边后出射的光电子波被邻近原子散射，返回波与出射波干涉，使吸收出现振荡；改变能量就改变波长和干涉条件。', 'Absorption can excite a core electron. Above the edge, the outgoing photoelectron wave scatters from neighbors and interferes with returning waves, producing oscillations in absorption. Changing energy changes the wavelength and interference.')
        + '<ol class="annotation-flow">'
        + `<li><strong>μ(E)</strong>${pair('扫入射能量 E，记录吸收系数 μ：看到吸收边及细小起伏。', 'Scan incident energy E and measure absorption μ: observe the edge and small variations.')}</li>`
        + `<li><strong>χ(k)</strong>${pair('扣平滑背景、归一化，换成光电子波数 k：更清楚地看振荡。', 'Subtract a smooth background, normalize and convert to photoelectron wavenumber k: isolate oscillations.')}</li>`
        + `<li><strong>|FT[kⁿχ(k)]|</strong>${pair('加权并傅里叶变换到 R 空间：分辨不同近邻壳层的贡献，再拟合距离、配位数与无序。', 'Weight and Fourier transform to R space: distinguish neighbor-shell contributions, then fit distances, coordination numbers and disorder.')}</li></ol>`
        + paragraph('近边区常称 XANES，较高能量的延伸区称 EXAFS。本文测 Nd、Gd、Lu 的 LⅢ 边；Figure 3A、C 是 R 空间变换；B 是截取第二壳层后反变换得到的波数空间信号。未校正相移的 R 峰位不能直接当作键长。', 'The near-edge region is called XANES and the extended region EXAFS. This paper measures the Nd, Gd and Lu LⅢ edges. Figure 3A and C show R-space transforms; B shows the isolated second-shell signal transformed back to wavenumber space. Without phase correction, R peak positions are not directly bond lengths.')
    },
    inner: {
      title: ['内层配位', 'Inner-sphere coordination'],
      question: ['内层配位是什么意思？', 'What does inner-sphere coordination mean?'],
      body: paragraph('指金属离子直接与表面或配体上的供体原子形成配位联系：该供体进入金属的第一配位层。在本文，表面 O 可以直接与 Ln 配位，因此形成 Ln–O–Cr/Zr，或 PAA 上的 Ln–O–P 局部连接。', 'The metal ion directly coordinates a donor atom on a surface or ligand; that donor enters its first coordination sphere. Here a surface O can bind Ln directly, giving local Ln–O–Cr/Zr contacts or Ln–O–P contacts at PAA.')
        + formula('直接的表面配位联系', 'Direct surface coordination contact', pair('Ln–O（表面）–M / Ln–O–P', 'Ln–O(surface)–M / Ln–O–P'))
        + paragraph('“内层”说的是离子与供体的配位关系，不是离子走进 MOF 孔内。Ln 不必失去全部水合水；直接配位的表面 O 与剩余水分子可以同时存在。若仍隔着水合层，主要靠静电接近，则属于外层结合的示意。', '“Inner-sphere” describes the coordination relationship, not entry into a MOF pore. Ln need not lose all hydration water: directly bound surface O and remaining water ligands can coexist. Association through an intervening hydration layer is an outer-sphere picture.')
        + paragraph('只有 Ln–O 第一壳层还不能区分水 O 与表面 O；本文还结合 Ln–Cr/Zr/P 外层散射路径及拟合来判断位点。', 'The first Ln–O shell alone cannot distinguish water O from surface O. This paper also uses outer-shell Ln–Cr/Zr/P scattering paths and fitting to assign sites.')
    }
  };
  const aliases = [
    ['complexing', '络合官能团|络合基团|complexing functional groups|complexing groups'],
    ['defects', '缺陷工程|defect engineering'],
    ['inner', '内层配位|内层配合物|内层络合|inner-sphere coordination|inner-sphere complexes|inner-sphere complexation|inner-sphere binding|inner-sphere'],
    ['xafs', 'XAFS|X[ −-]?射线|X-ray'],
    ['paa', 'PAA|膦酰乙酸'],
    ['lanthanides', 'Ln|Nd|Gd|Lu']
  ];
  const tokenPattern = new RegExp(aliases.map(([, pattern]) => pattern).join('|'), 'gi');
  const aliasPatterns = aliases.map(([key, pattern]) => [key, new RegExp(`^(?:${pattern})$`, 'i')]);
  let language = 'zh', activeTrigger = null, popup = null;
  const visible = node => !!node?.isConnected && node.getClientRects().length > 0;
  const markup = (key, text, className = 'annotation-term') => `<button type="button" class="${className}" data-ln-term="${key}" aria-haspopup="dialog" aria-controls="ln-term-dialog" aria-expanded="false">${text}</button>`;
  function guide() {
    return `<aside id="reading-notes" class="reading-notes"><details><summary>${pair('阅读批注 · 六个基础问题', 'Reading annotations · six starting questions')}</summary><div class="inside"><p>${pair('点击问题或正文中带点状下划线的术语查看解释。', 'Click a question or a dotted-underlined term in the text to read its definition.')}</p><div class="annotation-questions">${Object.entries(definitions).map(([key, value], i) => markup(key, `${i + 1}. ${pair(...value.question)}`, 'annotation-question')).join('')}</div><p class="source">${pair('依据：本文 §1、§2.4–2.5、§3.1、§3.3–3.6、Figures 1、3–6；通用定义：', 'Basis: article §1, §2.4–2.5, §3.1, §3.3–3.6 and Figures 1, 3–6; general definitions:')} <a href="https://goldbook.iupac.org/terms/view/L03518" target="_blank" rel="noopener">IUPAC</a> · <a href="https://docs.xrayabsorption.org/tutorials/XAFS_Overview.pdf" target="_blank" rel="noopener">${pair('Newville 的 XAFS 教程', 'Newville’s XAFS tutorial')}</a> · <a href="sources.md">${pair('证据记录', 'Evidence ledger')}</a></p></div></details></aside>`;
  }
  function annotate(root) {
    const walker = document.createTreeWalker(root, NodeFilter.SHOW_TEXT, {
      acceptNode(node) {
        if (!node.textContent.trim() || node.parentElement.closest('button,a,select,option,svg,math,script,style,textarea,code,[data-no-annotation]')) return NodeFilter.FILTER_REJECT;
        return NodeFilter.FILTER_ACCEPT;
      }
    });
    const nodes = []; while (walker.nextNode()) nodes.push(walker.currentNode);
    for (const node of nodes) {
      const value = node.textContent, parts = document.createDocumentFragment(); let cursor = 0, found = false;
      tokenPattern.lastIndex = 0;
      for (const match of value.matchAll(tokenPattern)) {
        const text = match[0], start = match.index, end = start + text.length;
        if (/^[A-Za-z]/.test(text) && /[A-Za-z]/.test(value[start - 1] || '') || /[A-Za-z]$/.test(text) && /[A-Za-z]/.test(value[end] || '')) continue;
        parts.append(document.createTextNode(value.slice(cursor, start)));
        const button = document.createElement('button');
        button.type = 'button'; button.className = 'annotation-term'; button.dataset.lnTerm = aliasPatterns.find(([, pattern]) => pattern.test(text))[0];
        button.textContent = text; button.setAttribute('aria-haspopup', 'dialog'); button.setAttribute('aria-controls', 'ln-term-dialog'); button.setAttribute('aria-expanded', 'false');
        parts.append(button); cursor = end; found = true;
      }
      if (found) { parts.append(document.createTextNode(value.slice(cursor))); node.replaceWith(parts); }
    }
  }
  function ensureDialog() {
    if (popup) return;
    popup = document.createElement('div'); popup.id = 'ln-term-dialog'; popup.className = 'ln-term-dialog'; popup.hidden = true;
    popup.setAttribute('role', 'dialog'); popup.setAttribute('aria-modal', 'false'); popup.setAttribute('aria-labelledby', 'ln-term-title');
    popup.innerHTML = '<div class="annotation-dialog-head"><h2 id="ln-term-title"></h2><button type="button" id="ln-term-close"></button></div><div id="ln-term-definition"></div>';
    document.body.append(popup);
    document.getElementById('ln-term-close').addEventListener('click', () => close(true));
  }
  function position() {
    if (popup.hidden || !visible(activeTrigger)) return;
    const rect = activeTrigger.getBoundingClientRect(), width = popup.offsetWidth, height = popup.offsetHeight;
    popup.style.left = Math.round(Math.max(12, Math.min(rect.left, innerWidth - width - 12))) + 'px';
    popup.style.top = Math.round(Math.max(12, Math.min(rect.bottom + 8 + height <= innerHeight - 12 ? rect.bottom + 8 : rect.top - height - 8, innerHeight - height - 12))) + 'px';
  }
  function updateDialog() {
    if (!activeTrigger || popup.hidden) return;
    const definition = definitions[activeTrigger.dataset.lnTerm];
    document.getElementById('ln-term-title').innerHTML = pair(...definition.title);
    document.getElementById('ln-term-definition').innerHTML = definition.body;
    const closeButton = document.getElementById('ln-term-close');
    closeButton.innerHTML = pair('关闭', 'Close'); closeButton.setAttribute('aria-label', language === 'en' ? 'Close annotation' : '关闭批注');
    position();
  }
  function close(restoreFocus = false) {
    const previous = activeTrigger; activeTrigger = null;
    if (popup) popup.hidden = true;
    document.querySelectorAll('[data-ln-term][aria-expanded="true"]').forEach(node => node.setAttribute('aria-expanded', 'false'));
    if (restoreFocus && visible(previous)) previous.focus({preventScroll: true});
  }
  function refresh(lang) {
    language = lang; ensureDialog(); annotate(document.getElementById('app'));
    if (activeTrigger && !visible(activeTrigger)) {
      const sibling = activeTrigger.closest('.paired')?.querySelectorAll(`[data-ln-term="${activeTrigger.dataset.lnTerm}"]`);
      const replacement = sibling && [...sibling].find(visible);
      if (replacement) { activeTrigger.setAttribute('aria-expanded', 'false'); activeTrigger = replacement; replacement.setAttribute('aria-expanded', 'true'); }
      else { close(); return; }
    }
    updateDialog();
  }
  document.addEventListener('click', event => {
    const trigger = event.target.closest('[data-ln-term]');
    if (trigger) {
      if (trigger === activeTrigger && !popup.hidden) { close(true); return; }
      close(); activeTrigger = trigger; trigger.setAttribute('aria-expanded', 'true'); popup.hidden = false; popup.scrollTop = 0;
      updateDialog(); document.getElementById('ln-term-close').focus({preventScroll: true}); return;
    }
    if (!event.target.closest('#ln-term-dialog') && !event.target.closest('[data-atlas-lang]')) close();
  });
  document.addEventListener('keydown', event => { if (event.key === 'Escape' && popup && !popup.hidden) { event.preventDefault(); close(true); } });
  window.addEventListener('resize', position); window.addEventListener('scroll', position, {passive: true});
  window.LnAnnotations = {guide, refresh};
})();
