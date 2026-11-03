# 全站讲解页审计（60 篇）

审计基线：`main` @ `5be5034`，分支 `fix/explainer-audit`。范围：`papers/` 下全部 60 个讲解页（57 篇论文页 + 3 篇 verl 文档页），以及首页目录、README 和论文目录数据。

Audit baseline `main` @ `5be5034`. Scope: all 60 explainers (57 paper pages and 3 verl documentation pages), the catalogue, and the repository READMEs. Scientific verification, explanation review and technical checks are reported separately; passing one does not substitute for another.

## 1. 技术检查（已实际运行）

| 检查 | 结果 |
|---|---|
| `check_page.py`（57 篇默认模式；3 篇文档页 `--page-only`） | 60/60 通过 |
| 文档页按默认模式运行 | 3/3 报错 “catalogue has no paper p”（检查器缺陷，见 [skill-gaps.md](skill-gaps.md)） |
| `node --check`：`assets/*.js` 与全部 `page.js`／`data.js` | 全部通过 |
| `check-taxonomy --data-only`、`build-paper-metadata --check`、`check-paper-metadata` | 通过 |
| `check-catalog`、`check-explainers`（7185 个交互用例）、`check-reading`（586 个章节截图）、`check-ncu1-reader`、`check-verl`、`check-rl-foundations` | 通过 |
| 补充 Playwright 扫描（60 页 × 中/英 × 1440/768/390）：控制台与页面错误、失败请求、坏图、横向溢出、失效锚点与本地链接、未识别标签（如被吞掉的 `<LOD`）、可见 `undefined`／`NaN`、无名称控件、语言残留 | 见下表 |
| 来源链接：每页是否链接目录中的原文 `u`／文档 `source`；`README.md`、`sources.md` 是否存在 | 60/60 通过 |

补充扫描未发现控制台错误、失败请求、坏图、溢出、失效锚点或链接、未识别标签及无名称控件。4 处 `undefined` 命中均为英文正文中的正常用词（如 “the ratio is undefined”），属误报。

## 2. 问题清单

状态：**已复现**＝实际运行或截图确认；**疑似**＝需原文核对；**未验证**＝资料不可得。

### P0 必须修复

无技术类 P0。科学内容类 P0 有 3 项（TMA 试剂身份、SBA-15 接枝配体、LanM 未报告的纯度值），均已修正，见第 3 节。

### P1 明显提升

| # | 位置 | 问题 | 状态 | 处理 |
|---|---|---|---|---|
| T1 | `papers/calf20-flexibility/index.html` `AtlasPaper.init` | `shortTitle:'CALF-20 柔性'` 为单语字符串，英文模式顶栏仍显示中文（截图 1440 en） | 已复现 | 改为语言中立的 `CALF-20` |
| T2 | `papers/README.md` 论文表 | 表格中间有空行，CALF-20 与 LanM 两行脱离表格，渲染为裸竖线文本 | 已复现 | 删除空行 |
| T3 | `README.md`、`papers/README.md` | 15 篇 verl 页（12 篇论文、3 篇文档）在两个 README 中都没有入口，只有主题搜索链接 | 已复现 | 补充列表 |
| T4 | `README.md` “Classification and filters” | “do not affect the 479-paper total” 与同文件 “492 papers”、目录指南及 `check-taxonomy` 结果（492）矛盾 | 已复现 | 改为 492 |
| T5 | `README.md` “all 43 explainers share … bylines” | 实际 57 篇论文页加载署名；3 篇文档页按设计无署名 | 已复现 | 改为 57 篇论文讲解页 |
| T6 | `README.md`、`papers/README.md` | 称仅 Ln 与 PMIDA 保留中英对照，实际 CALF-20 也启用 `allowBoth:true` 并显示 “Parallel／中英对照” | 已复现 | 补充 CALF-20 |

### P2 可选优化

| # | 位置 | 问题 | 状态 | 处理 |
|---|---|---|---|---|
| T7 | 15 篇 verl 页的来源定位行（`references/verl-explainers.json` 的 `locator`）、`batch-size-invariance` 目标函数章节定位（`scripts/build-rl-foundations.py`） | 中文模式显示英文说明性定位文字（如 “§3 experiments and ablations”）。章节号属正式定位，但说明词未本地化 | 已复现 | 在生成器源中加入中文定位并重新生成 |
| T8 | `papers/moftransformer/index.html` 来源列表 | 中文模式下 Figshare 与文档链接说明为英文 | 已复现 | 改为成对双语 |
| T9 | `paperMetadata`（GRPO／DeepSeekMath） | 11 位作者单位全部为空，页面署名显示“单位：未核实”；arXiv PDF 首页印有单位 | 已复现 | 按 PDF 第 1 页上标补录（Shao 1,2；Wang、Zhu 1,3；其余 1），重新生成署名子集 |

保留项（不视为问题）：原论文标题、作者名和正式引用在中文模式保留英文；元数据中经核对确实未公开或无法核实的日期按目录指南显示“未核实”，不猜测补齐。

## 3. 科学内容核对

按 AI/RL（3 批）与 MOF/REE（5 批）分批，以各页 `sources.md` 和可获取的原文／SI 为准，逐页核对标题数值、表格行列、公式、方法箭头、实验条件与中英限定词。每页有两轮独立核对；只有一轮发现的问题在修改前再次对照原文。结果见 [content-findings.md](content-findings.md)。

- 共修正 3 项 P0、11 项 P1，其余为 P2，涉及 42 页（14 篇生成页、28 篇手写页）；其余 18 页无需修改。
- 生成页的问题在编辑源中修正并重新生成；原文自身的不一致在页面与证据记录中披露，不擅自改值。
- 原文不可得或两轮结论冲突的条目未改动，列在结果文件的“未修改，仅记录”一节。

## 4. 未验证与限制

- 技术检查通过只证明所检查的实现行为，不证明读者理解充分；本次未进行真人试读。
- 出版社付费或拒绝访问（403）的原文与 SI 只能核对页面与其证据记录的一致性，已在内容结果中逐篇标注。
