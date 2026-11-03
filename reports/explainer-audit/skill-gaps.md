# paper-webpage Skill 在本次审计中的不足

记录在按现行 `.agents/skills/paper-webpage/SKILL.md` 执行全站审计时，Skill 错误、沉默、矛盾或误导的地方，供后续修订使用。

| # | 场景 | Skill 的说法 | 实际需要 |
|---|---|---|---|
| G1 | 审计 60 篇页面 | 只给出单个 `--slug` 的检查命令，没有全站或批量模式 | 循环所有 `papers/*/`；需要 `--all` 和全站审计流程（静态、脚本、浏览器、内容分批） |
| G2 | 3 篇 verl 文档页 | “论文页发布前必须通过默认完整检查”；`--page-only` 仅用于纯概念页 | 文档页登记在目录 `collections[].items`（`type: "document"`），默认检查必然报错；检查器应识别文档条目 |
| G3 | 约 30 页的逻辑写在 `page.js`／`data.js` | 静态检查覆盖“内联 JavaScript 语法” | 外部本地脚本只检查存在性，需另行 `node --check` |
| G4 | 修复 verl 与 RL 页的文字 | 未提到生成页 | 15 篇 verl 页由 `references/verl-explainers.json` + `scripts/build-verl-explainers.py` 生成，`trm`、`batch-size-invariance` 由 `scripts/build-rl-foundations.py` 生成；直接改 HTML 会被覆盖 |
| G5 | 全站回归 | 只点名 `check-explainers`、`check-reading`、`check-ncu1-reader` | 完整清单还包括 `check-catalog`、`check-taxonomy`、`build-paper-metadata --check`、`check-paper-metadata`、`check-verl`、`check-rl-foundations` |
| G6 | 署名“单位：未核实” | 接入站点一节不提 `paperMetadata`、署名资源和 `build-paper-metadata.cjs` | 新页需在 `paperMetadata` 录入作者、单位与日期，并加载 `bibliography.css/js`、`paper-metadata.js`；生成后提交 |
| G7 | CALF-20 英文顶栏显示中文 | `AtlasPaper.init` 参数说明未规定 `shortTitle` 的语言 | `shortTitle` 是单一字符串，两种语言共用，必须语言中立；检查器可对其中的中文字符报警 |
| G8 | README 漏列 15 页、计数过期、表格断裂 | 只说“更新仓库和论文集合 README 中相关的入口” | 需要可检查的约束：每个 `papers/<slug>/` 在 `papers/README.md` 有入口；计数从目录数据核对 |
| G9 | 中文模式的英文来源定位 | “正式引用可保留原文”，未说明章节定位中的说明性词语 | 明确：章节号、图表号可保留；说明性短语需本地化 |
| G10 | “检查并修复”类请求 | “先交付评估结果，再修改页面”；“未获相应更正授权时不擅自改写” | 需定义授权：用户要求“检查并解决”即授权修复有原文定位支持的问题；无法定位的仍只报告 |
| G11 | 语言残留扫描 | 没有可复用的检查方法 | 记录可复用的启发式：英文模式查可见中文；中文模式查长英文句；排除标题、作者、引用、公式与 `data-language-example` |

## 内容核对子任务报告的不足（第二轮）

| # | 场景 | Skill 的说法 | 实际需要 | 处理 |
|---|---|---|---|---|
| G12 | 读取原文 | “优先读取正文、图表及必要 SI” | WebFetch 读不了 PDF／DOCX 和多数付费页；需 `curl` + `pdftotext`、DOCX 转文本、`pdftoppm` 渲染读图，并核对 SHA-256 | `references/source-access.md` |
| G13 | 原文缓存 | 未提及 | 4／7 份证据记录指向已消失的 Downloads 或 `/tmp` 文件；需持久缓存位置与来源记录 | 同上 |
| G14 | 付费正式版 | 未说明退路 | Europe PMC 全文 XML、作者预印本、figshare SI 的顺序，以及如何记录实际核对的版本 | 同上 |
| G15 | 科学问题分级 | P0／P1／P2 只按“必须／明显／可选”定义 | 按错误类型定义：试剂名错而数值不变是否为 P0 | `SKILL.md` §6 |
| G16 | 补记审计 | 未规定 `sources.md` 中审计条目的格式与旧结论的处理 | 统一 “Audit YYYY-MM-DD” 条目；错误旧结论加注被取代，不删除；生成页用 `ledgerNotes` | `SKILL.md` §3 |
| G17 | 措辞漂移 | 未提及 | 作者推测写成事实、条件被转述得更宽或更窄（“沸水”与“高温水”、漏掉“全部 8 个”）是最常见的错误类型 | `explanation-quality.md` |
| G18 | 原文自相矛盾 | 只覆盖正文与 SI 冲突 | 表与图、正文与表、图注互相矛盾时采用哪一个、如何披露 | 同上 |
| G19 | 图中读数 | 未要求记录读数方法 | 两处“已对照原图”的结论在高分辨率复读后被推翻 | 同上 |
| G20 | 教学交互 | “标注为教学映射”即视为足够 | 阈值须与论文条件一致；显示逻辑不得自动添加 “>” 等限定；编造的百分比不能像数据 | 同上 |
| G21 | RL 页面 | 未要求区分概率来自哪个策略 | DPPO 的 μ／π_old、SPIN 的 λ 方向、不同轮次结果并列都属此类 | `ai-figures.md` |
| G22 | 化学／材料页 | 只有 AI 图示核查参考 | 单位（mg/g、mmol/g，Kd 的 mL/g 与 mL/mg）、SF 方向、等温线与动力学条件、热力学自洽、试剂身份 | `references/materials-figures.md` |
| G23 | 纯文字修复的验证 | 修改任务一律要求三屏宽完整浏览器检查 | 需要与改动规模相称的轻量路径 | `validation.md` |
| G24 | 样式顺序 | 规则允许“共享附加样式”在后，检查器对页面自带附加样式也报警 | Ln 参考页被误报 | `check_page.py` |
| G25 | 双语一致性 | 无工具 | 英文中的全角标点、同段中英数字不一致需要自动提示 | `sweep_pages.cjs` |
