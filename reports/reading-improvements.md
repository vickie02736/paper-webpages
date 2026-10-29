# 论文页阅读改进记录

## 基线与范围

- 仓库：paper-webpages；分支：codex/unify-paper-style；起始 HEAD：71c3b447e55aac3835ab650c8a62da47780679f3；开始时工作区干净；未发现适用 AGENTS.md。
- 保留全部 11 篇：calf20-flexibility、deeprag、e5-mistral、lanm-protein-process、ln-local-coordination、moftransformer、ncu1-nanotraps、nv-embed、pmida-mil101、rag、self-rag。未新增或减少文章。
- 目录 JSON、原有 URL、首次发布日期和来源链接保留；初次交付为本地版本；用户随后明确要求发布，最终整合记录见文末。

## 审计与设计

P0：CALF-20 的按钮被重建导致键盘焦点丢失、深度选中态错误、英文深度按钮及辅助标签不完整；LanM 的 tablist 无 tab 子元素、白底图注对比度不足；三篇原图页面缺少失败及重试反馈。

P1：各页首屏长标题、手机纵向堆叠、图注可读性、章节节奏与快速阅读入口。共享 CSS 调整标题/间距/来源文字，各页通过 atlas-reading 显式接入；共享控制器增加机制—证据—局限的真实锚点入口。图形坐标、尺度及数据保持原样。LanM 和 MOFTransformer 手机首屏指标改为紧凑三列。图片反馈及阅读入口同时维护双语。

P2：原图异步解码与尺寸预留；减少重复绑定。E5-Mistral/NV-Embed 的旧翻译器排除共享阅读组件，防止原文缓存覆盖共享组件语言。

## 科学审计：需单独处理的问题

1. **CALF-20 相变方向**：页面 `#limits` 中写“cp→lp … 376 MPa”；原文 pp. 5–6、Figure 5 及相邻文字说明约 376 MPa 是 lp→cp，压力降至约 111 MPa 以下才由 cp 回到 lp。证据：提供的 `s41467-024-48136-0.pdf`，DOI https://doi.org/10.1038/s41467-024-48136-0。本次按用户要求记录，不修改科学文案。
2. **LanM 纯度显示**：`updateFeed()` 对所有大于 99 的纯度自动加“>”；Y/Nd 状态的数据字段为 99.7，与正文说明中的 Nd >99.9% 不一致；Dy/Nd 的 99.9% 也被显示为 >99.9%。对照正文 Figure 4 和 SI Table S4；不要把回收率 99.7% 当作纯度。保留现状，需单独确认更正。
3. **CALF-20 小概率柱形**：氢键图使用 `Math.max(1,v*100)`，零值和小于 1% 的概率仍有至少 1% 高度。图旁数值未改变，但柱形可误示非零概率。本次不改变图表尺度或实验数据；单独列为科学图示更正项。
4. **PMIDA 原文/SI 冲突**：1.2 mmol/g 的饱和容量和高负载 TCS 存在来源差异，页面已有注记；本次补建 sources.md，不抹去差异。

已读取 11 篇来源身份、既有证据清单及相关原文文本；AI 五篇正式 PDF 均成功获取，本地材料论文及相关 SI 可读。本次重点复核来源边界和上述具体疑点。没有重新独立核验所有原图坐标、全部公式和每个交互科学状态；因此不声称全面科学认证。上述科学疑点已向用户披露，按原要求保留证据记录，本次阅读改进不擅自修改科学表述。

## 修改文件与用户收益

- `assets/paper.css`：标题、章节间距、图注、阅读路径和图片状态样式；长页面更易浏览。
- `assets/paper.js`：跳至正文焦点、阅读路径、双语原图状态和重试；网络失败和连续切换时状态更清楚。
- `papers/*/index.html`（全部 11 篇）：启用阅读样式；CALF-20、LanM、Ln、NCU-1、E5-Mistral、NV-Embed 同时修复相关交互或兼容问题。
- `papers/pmida-mil101/sources.md`：补充来源和差异记录。
- `scripts/check-reading.cjs`：补充键盘、锚点、图片异常与逐章节截图检查。
- Skill 及验证参考文档：网页验证完成后先展示 diff，再应用。

## 验证结果

- 最终 11 页静态检查全部通过，0 警告；共享 JS 与新增检查脚本语法检查、git diff --check 通过。
- 现有 `node scripts/check-explainers.cjs` 全部通过：11 页、1,487 个交互用例，中英文/状态保留、三视口及禁用存储。
- 新增 `node scripts/check-reading.cjs` 全部通过：三视口双语全页截图，88 个研究深度章节截图，正文跳转焦点、有效内部锚点、键盘焦点、无 undefined 标签、图片加载成功/失败/重试、NCU-1 慢加载/连续切换/加载中切语言。正常加载未出现 JS 或 HTTP 资源错误。
- 检查 11 页的章节截图汇总；对首屏及相关图形、图注、表格进行目视核对。手机端 Self-RAG 主张表使用容器内横向滚动，保留表格内容；宽表和公式容器可用键盘聚焦。
- 修复位置实测对比度：LanM 白底图注 9.17:1；RAG 序号 7.47:1；PMIDA 地图符号 11.42:1。LanM SVG 在 reduced-motion 下已暂停 SMIL 动画。
- 保留核对：原有 11 篇全部存在、原有字面 ID 与外部来源 URL 保留，目录 JSON 与基线逐字节一致，首次发布日期未改。
- 27 个去重外链的 HEAD 检查：21 个成功；5 个 ACS 链接被服务器以 403 拒绝，1 个 Springer SI 链接 DNS 解析失败。不能把这 6 个链接列为已确认失效，也不能列为通过；完整列表见下方。
- 科学文案、公式、实验数据和图表尺度未改；新增 PMIDA 来源记录、补全辅助标签和 LanM 图内中文翻译。科学疑点单独保留。
- 未验证：真实屏幕阅读器的语音体验、全量文字/图形的自动化 WCAG 审计、全部科学状态的独立源图复核、跨浏览器表现、Lighthouse/真实网络性能基准。没有异步结果集的页面不额外制造空状态；现有缺失实验值由回归中的图表切换覆盖。

### 外链未确认项

- https://doi.org/10.1021/acsami.4c09445 — HTTP Error 403: Forbidden
- https://doi.org/10.1021/acsami.6c16452 — HTTP Error 403: Forbidden
- https://doi.org/10.1021/acscentsci.1c00724 — HTTP Error 403: Forbidden
- https://pubs.acs.org/doi/10.1021/acscentsci.1c00724 — HTTP Error 403: Forbidden
- https://pubs.acs.org/doi/suppl/10.1021/acscentsci.1c00724/suppl_file/oc1c00724_si_001.pdf — HTTP Error 403: Forbidden
- https://static-content.springer-cdn.com/esm/art%3A10.1038%2Fs41467-024-45810-1/MediaObjects/41467_2024_45810_MOESM1_ESM.pdf — <urlopen error [Errno 8] nodename nor servname provided, or not known>

## Skill 与发布剩余事项

已先展示完整 diff，再应用四阶段流程、任务分流、文章保留约束和验证参考文档；完整差异保存在 `paper-webpage-skill.diff`。保持既有站点和发布约束。`quick_validate.py` 校验通过，全部 Skill 相对引用路径可解析。系统 Python 缺少 PyYAML，验证时仅在 `/tmp/paper-skill-validation-deps` 安装验证依赖，未增加项目运行依赖。

本地预览：http://127.0.0.1:8765/ 。初次交付时文件未提交。后续发布使用最新 main 的既有时间元数据脚本；科学疑点、无法访问的外链及真实辅助技术体验仍作为明确遗留项记录。不要通过改写首次发布日期代替更新时间流程。

## 完整修改文件清单

- [.agents/skills/paper-webpage/SKILL.md](../.agents/skills/paper-webpage/SKILL.md)
- [.agents/skills/paper-webpage/references/validation.md](../.agents/skills/paper-webpage/references/validation.md)
- [assets/paper.css](../assets/paper.css)
- [assets/paper.js](../assets/paper.js)
- [papers/calf20-flexibility/index.html](../papers/calf20-flexibility/index.html)
- [papers/deeprag/index.html](../papers/deeprag/index.html)
- [papers/e5-mistral/index.html](../papers/e5-mistral/index.html)
- [papers/lanm-protein-process/index.html](../papers/lanm-protein-process/index.html)
- [papers/ln-local-coordination/index.html](../papers/ln-local-coordination/index.html)
- [papers/moftransformer/index.html](../papers/moftransformer/index.html)
- [papers/ncu1-nanotraps/index.html](../papers/ncu1-nanotraps/index.html)
- [papers/nv-embed/index.html](../papers/nv-embed/index.html)
- [papers/pmida-mil101/index.html](../papers/pmida-mil101/index.html)
- [papers/pmida-mil101/sources.md](../papers/pmida-mil101/sources.md)
- [papers/rag/index.html](../papers/rag/index.html)
- [papers/self-rag/index.html](../papers/self-rag/index.html)
- [reports/paper-webpage-skill.diff](../reports/paper-webpage-skill.diff)
- [reports/reading-improvements.md](../reports/reading-improvements.md)
- [scripts/check-reading.cjs](../scripts/check-reading.cjs)

## 发布整合（2026-10-29）

用户在本地交付后明确要求发布。发布版本基于远端 main 48d9362，在独立工作区整合；保留远端 ATZ-BTC-Zn、Hans-LanM、MOF SNAP 及其目录入口，加入本次原有 CALF-20、LanM 两篇，合计 14 篇。沿用两边已有首次发布日期；新增缺失创建时间按既有脚本规则处理，保留远端所有创建时间。

保留远端 NCU-1 原图、独立加载/错误/过期请求处理，以及 MOFTransformer 方法图修正。NCU-1 仅接入阅读样式，不重复安装第二套图片控制器；其异常场景由现有 check-ncu1-reader.cjs 验证。阅读专项脚本改为自动发现所有文章。

Skill 在原方案上保留远端术语收集与批量更新流程，以及首页按不可变创建时间排序的规则；完整发布合并 diff 在应用前展示，并保存为 publish-paper-skill.diff。

发布整合后的验证：全部 14 页静态检查通过、0 警告；JavaScript 语法、差异空白、Skill 格式及引用路径通过。全站浏览器回归通过 1,649 个交互用例；阅读专项通过，保存 114 个章节截图；NCU-1 独立测试通过冷缓存/慢加载/失败/重试/竞争请求/超时及键盘和双语状态；目录回归通过 14 篇计数、自动刷新、搜索/筛选状态、创建时间排序、失败恢复及三视口中英文。重新查看 NCU-1、MOFTransformer 以及远端三篇新增页面的三视口首屏，未发现合并导致的布局回退。

发布文件还包括两篇完整页面目录（README、sources.md、LanM 原图）、两个集合 README、目录 JSON 及发布 Skill 合并 diff。远端三篇新增文章的页面文件逐字节保留；原始 11 篇和远端 12 篇的所有目录入口及既有日期均通过保留断言。上述测试与科学遗留项分别记录，测试通过不表示科学疑点已更正。
