---
name: paper-webpage
description: "为 Research Atlas 仓库（papers/<slug>/）创建、更新、审计和发布中英双语论文讲解页：核对原文证据并维护 sources.md，沿用统一深色阅读框架，接入目录与署名元数据，单页或全站检查。Creates, updates, audits and publishes bilingual paper explainer pages (Research Atlas, papers/<slug>/, verl and MOF/REE explainers): evidence checks against the paper and SI, shared page framework, catalogue and paperMetadata integration, site-wide audits and GitHub Pages publishing. 制作或修复讲解页、检查图表/公式/数值、批量审计讲解页、术语解释或发布时使用；普通论文问答、摘要或仅咨询样式不触发制作与发布。"
---

# 论文讲解页（Research Atlas explainer）

将原始研究材料制作成可独立访问、可追溯证据的学习网页，并保持全站一致。

术语：**讲解页**＝`papers/<slug>/` 下的页面，分为**论文页**（对应目录中的一篇论文）和**文档页**（`collections` 中 `type: "document"`，如 verl 文档）；**目录**＝`references/paper-catalog.json`；**证据记录**＝页面目录内的 `sources.md`；**生成页**＝由脚本从编辑源生成的页面。

## 1. 判定任务类型

| 类型 | 典型请求 | 必做 | 读取 |
|---|---|---|---|
| 纯样式 | 排版、配色、间距、响应式、不改科学含义的控件文案 | 核对受影响的显示与行为；不强制补录证据或重读 SI | [implementation.md](references/implementation.md) |
| 交互修复 | 焦点、切换、加载、错误反馈 | 同上；若涉及计算、数值、量尺、状态分支或科学输出，同时按科学内容核验 | implementation.md、[validation.md](references/validation.md) |
| 科学内容 | 新建页；新增/修改结论、公式、数据、方法或结构图、科学翻译；用户要求科学审阅 | 核对相应原文、图表及必要 SI，维护 `sources.md` | 第 3 节、[source-access.md](references/source-access.md)、[explanation-quality.md](references/explanation-quality.md)；AI 页另读 [ai-figures.md](references/ai-figures.md)，化学／材料页另读 [materials-figures.md](references/materials-figures.md) |
| 咨询与审阅 | “看看有什么问题”“评估一下” | 只交付问题清单（第 6 节模板），不改页面、不接入、不发布 | 按问题类型 |
| 全站审计 | “检查所有讲解页”“全站核查” | 第 5 节流程 | validation.md |
| 接入站点 | 新页、改目录、署名、README | 目录、元数据、时间表、README 同步 | [site-integration.md](references/site-integration.md) |
| 发布 | 新建或更新页的默认终点；用户要求上线、推送 | 发布流程 | [publishing.md](references/publishing.md) |
| 术语问答 | 阅读中连续问“这个词是什么意思” | 先暂存、后批量更新 | [term-batching.md](references/term-batching.md) |

仅改变外观不自动触发完整科学审阅；明确的科学审计要求也不能以“样式任务”为由跳过。

## 2. 硬性规则

- **只增不删**：现有文章只能保留或增加，不得删除、合并替代、下架或移除目录入口；新增文章不能替代旧文。优化不得删减有效内容，可重排或渐进展开。保留原 slug、URL、来源链接、章节 ID、首次发布日期、`explainerCreatedAt` 和目录结构。
- **科学内容不随外观改变**：不得为了视觉效果改变事实、实验值、统计含义、公式、尺度或证据边界。
- **生成页改编辑源**：15 篇 verl 页、`trm`、`batch-size-invariance` 与 `assets/paper-metadata.js` 均为生成结果。页面 `README.md` 的 “Editorial source” 行和静态检查的 NOTE 会指出来源；修改编辑源并重新生成，见 [site-integration.md](references/site-integration.md#生成页与编辑源)。
- **并发与边界**：开始时记录分支、HEAD、暂存与未暂存差异；已有改动可能来自其他任务，避免覆盖，提交时按文件或片段核对边界。工作期间有其他进程使用同一仓库时，不运行 `git stash`、`git checkout -- .` 等会改写工作区的命令。

### 交付终点与授权

- **新建或更新讲解页**：默认终点是本地制作、目录接入、检查与 GitHub Pages 发布。用户指定本地交付、草稿、PR 或其他语言、深度、风格、范围时，以用户为准。
- **咨询、审阅、演练**：只交付结果，不修改、不接入、不发布。
- **“检查并修复／解决”**：授权修复所发现的问题。技术、目录、双语和文档问题直接修复；科学内容只修改能定位到原文章节、图表、页码或 SI 的错误，并同步 `sources.md`；不能定位的列为疑似或未验证，不擅自改写。范围大或修复方式会实质改变页面时，先交付问题清单再动手。
- 发现授权范围外的疑似科学错误时，单独记录页面位置、原文依据和建议。

## 3. 资料与证据

- 接受本地 PDF、正式论文链接、DOI 或研究主题。优先读取用户给定版本的正文、图表及必要 SI；联网时使用出版社、正式会议、作者或预印本原始来源。下载、文本抽取、图中读数、哈希核对、付费页退路与缓存位置见 [source-access.md](references/source-access.md)；网页抓取失败不等于原文不可得。若为研究主题，先确认支撑讲解的核心文献，而非把主题编成一篇论文。先在目录中按标题、DOI、原文链接查重；slug 使用简短的小写英文与连字符。
- 对关键结论、公式、数值和实验条件记录出处，能定位到章节、图表、页码或 SI 项目。新建页面或修改科学内容时维护同目录 `sources.md`：记录版本、来源链接、关键主张与证据位置，以及解释范围。纯样式或控件文案修改按改动范围核对，避免扩展成整篇证据补录。示例见 [Ln 局部配位的 sources.md](../../../papers/ln-local-coordination/sources.md)，不复制其中仅适用于该论文的限制。
- 区分“论文报告”“作者提出的机制”“教学示意/计算”“讲解者分析”。保留单位、基线、数据集、实验条件及不确定性的含义；重绘图形应能追溯数据，教学滑块不得冒充新实验或经过验证的物理模拟。
- 自绘科学结构逐项对照原文图、正文及 SI，核对维度、拓扑、连接关系和材料／物种间的配位差异；简化绘图仍须保留这些科学关系，标注“教学示意、非晶体坐标”不能补救错误结构。无法可靠重绘时，使用注明出处的原图或裁切图，保留相关结构与必要上下文。
- 核查 AI／ML 方法图、公式和实验图表时读取 [ai-figures.md](references/ai-figures.md)。清点图表时包括 HTML／CSS 流程、隐藏层次、交互输出及结果表，逐项记录核对来源和结论，不能仅统计 `img`／SVG。
- 只有摘要或部分正文时，先尝试根据标题、DOI 或作者提供的链接获取公开原文及 SI；仍不可得时，制作范围限于已核对的内容，明确缺口。可继续设计结构和整理来源；无法支持关键结论时保留本地草稿，列出所需材料，待核对后再发布。
- 原文与 SI 冲突时说明采用的版本和理由。补充研究应独立标注，避免把后续成果归到原论文。原文内部矛盾、作者推测语气和条件范围的转述规则见 [explanation-quality.md](references/explanation-quality.md#措辞忠实与原文矛盾)。
- 审阅或修正已有页面时，在 `sources.md` 末尾追加 `## Audit YYYY-MM-DD`：一句说明核对了哪一版来源，再逐条写“位置（文件／元素，中英文）：原表述 → 新表述，原文位置”。已有记录中的错误结论不删除，追加说明其被哪次审计取代。生成页的 `sources.md` 会被覆盖，把同样内容写入编辑源的 `ledgerNotes`（见 [site-integration.md](references/site-integration.md#生成页与编辑源)）。
- 讲解要让读者重建“研究问题 → 既有不足 → 方法为何这样设计 → 证据支持什么 → 仍未证明什么”，避免只改写摘要。默认读者有高中知识、尚不熟悉该领域，中文默认并提供完整英文切换；只有目标读者的差异会实质改变讲解且尚不明确时才确认这一项。具体验收方法见 [explanation-quality.md](references/explanation-quality.md)。

## 4. 工作流

复制并逐项勾选：

```
- [ ] 基线：git rev-parse --show-toplevel；记录分支/HEAD/未提交差异；读适用的 AGENTS.md、仓库 README、目标页面及其 README/sources.md
- [ ] 判定任务类型与交付终点（第 1、2 节）；生成页找到编辑源
- [ ] 已有页面：先运行静态检查与浏览器检查，按第 6 节模板列出 P0/P1/P2 问题
- [ ] 资料与证据（第 3 节），按范围更新 sources.md
- [ ] 设计：逐项写明目的、影响文件、用户收益与验证方法；共享修改说明跨页影响
- [ ] 实施（implementation.md；涉及目录/署名/README 时 site-integration.md）
- [ ] 验证：静态 → 仓库脚本 → 浏览器 → 科学核对，分别记录，任何一类通过都不能代替其他类别
- [ ] 交付：第 6 节摘要；需要发布时按 publishing.md
```

设计时优先处理核心结论与图示层次、章节密度、机制—证据—局限关联、图例/单位/来源、交互反馈、双语完整性及手机和键盘体验；只修改与本次任务有关的文件。审阅只报告结果；修改任务必须实际验证，修复后重跑受影响检查。

## 5. 全站审计模式

1. **同步与分支**：基于最新发布分支新建工作分支；记录基线提交。
2. **静态**：`check_page.py --all`；另对 `assets/*.js` 运行 `node --check`。
3. **仓库脚本**：运行 [validation.md](references/validation.md#全站脚本与补充扫描) 表中的全部脚本，日志存入 `/tmp/<任务>/`。
4. **补充扫描**：`sweep_pages.cjs`；逐条判读 HINT，抽看各类页面在三种屏宽、两种语言下的截图（脚本不会发现顶栏语言残留、署名缺口之类的可见问题）。
5. **记录**：在 `reports/<任务>/README.md` 按第 6 节模板写问题清单，标注已复现／疑似／未验证。
6. **科学核对分批**：按论文类型分批（每批 6–9 页），可交给并行子代理，并在任务说明中要求先读 source-access.md 及对应的图示核查参考。子代理只读：不得修改仓库，临时文件只写 `/tmp/<任务>/`，按统一格式返回“页面位置、当前中英文、原文位置与原文内容、建议修改”；由主代理复核并实施修改，避免并发编辑。只有一个子代理报告、或两份报告结论冲突的问题，主代理先对照原文复核再改。
7. **修复与复验**：技术与双语问题先修；科学问题按第 2 节授权规则处理；重跑全部检查后按类别提交。

## 6. 工具与模板

| 工具 | 用途 |
|---|---|
| `python3 .agents/skills/paper-webpage/scripts/check_page.py --root . --slug <slug>`（或 `--all`） | 只读静态检查：元数据、重复 ID、未知标签、本地资源、内联与外部脚本语法、页面框架约定（body、共享 CSS/JS 顺序、`AtlasPaper.init`、语言中立的 `shortTitle`）、README/证据记录、`papers/README.md` 入口、目录登记（论文页或文档页）、`paperMetadata`、时间表；生成页给出 NOTE。退出码 0 通过、1 有问题、2 参数错误。`--page-only` 仅用于纯概念页或接入目录前 |
| `node .agents/skills/paper-webpage/scripts/sweep_pages.cjs` | 只读浏览器补充扫描，见 validation.md |
| `scripts/check-*.cjs`、`scripts/build-*.{py,cjs}` | 仓库回归与生成器，见 validation.md、site-integration.md |

静态检查不执行 JavaScript、不请求远端资源，也不证明科学内容正确；动态 DOM、页面内锚点、双语完整性和交互仍需浏览器核对。

问题清单模板：

```markdown
| # | 位置（文件:行／元素／JSON 键） | 问题 | 依据或复现方法 | 状态（已复现／疑似／未验证） | 处理 |
```

按 P0 必须修复、P1 明显提升、P2 可选优化分组；科学问题另列“原文位置”“当前中英文”“建议中英文”，并按错误类型定级：

- **P0**：事实、数值、单位、物种／试剂／材料身份、公式或方向（箭头、KL 方向、参数作用方向）错误，即使其他数字都正确。
- **P1**：实验条件、证据归属（作者推测写成事实、二手来源写成本文结果）、关键限定词缺失，或把不同轮次、检查点、表格列的结果并列。
- **P2**：章节／图表定位、标签、措辞、未标明的节选或可补充的原文不一致说明。

交付摘要模板：

```markdown
- 结果：一句话说明改了什么、是否已发布
- 文件：…（生成页列出编辑源）
- 用户收益：…
- 科学内容／引用变更：…（对应 sources.md 条目）
- 已运行检查与结果：静态／脚本／浏览器／科学，分别列出
- 未验证项与原因：…
- 预览或线上链接；发布剩余事项
- 核对：原有文章与入口全部保留；新增文章：…
```

关键内容或交互尚未确认时保留本地成果。
