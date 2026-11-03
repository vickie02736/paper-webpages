# 接入站点：目录、元数据、README 与生成页

[论文目录指南](../../../../references/paper-catalog-guide.md) 是目录结构的权威说明；本文件只列出制作和修改讲解页时必须同步的部分。两者冲突时以指南和 `scripts/check-*.cjs` 的实际约束为准。

## 页面类型

| 类型 | 目录登记位置 | 署名与元数据 | 静态检查 |
|---|---|---|---|
| 论文页 | 某个 `themes[].p` 记录的 `p: "./papers/<slug>/"`；相同 `u` 只对应一个讲解链接 | 必须：`paperMetadata[u]`，页面加载署名资源 | 默认模式 |
| 文档页（如 verl 文档） | `collections[].items` 中 `type: "document"`、`path` 指向本页；无 `paperId` | 无署名，不加载署名资源 | 默认模式（检查器识别文档条目） |
| 纯研究概念页 | 不伪造论文记录；从相关 README 或合适的主页知识入口接入 | 无 | `--page-only`，发布前另行核对实际入口 |

## 论文记录与讲解链接

- 为论文目录中的真实条目设置 `p: "./papers/<slug>/"`，补齐双语简介和必要的标签翻译。相同 `u` 标识同一论文；任一主题设置讲解链接即可共享，显式设置的链接应保持一致。
- 新论文尚未收录时，依据原文元数据和现有主题结构加入条目：保持 `id` 不变，填写 `topicId`、兼容索引 `g`、有依据的 `tagIds`、`aliases`、`legacyContexts`（无旧记录时为空数组）；仅在需要时同步对应研究路线。先按原文链接、DOI 与预印本别名查重，同一工作的新版本扩展现有记录的别名，不新增主记录。
- 不要为纯研究概念页伪造作者、会议或单篇论文记录。
- 文档页在 `collections[].items` 中提供稳定 `id`、`path`、`type: "document"`、双语 `title`／`summary`、可选双语 `shortTitle` 与原始 `source`；`presentation: "theme"` 时还需 `topicId`。文档页不计入论文数。

## 日期与时间元数据

- 为首次发布的论文页在顶层 `explainers` 写入 UTC 日期 `YYYY-MM-DD`；修改已有页面保留已有日期。若此前仅保存草稿，则在实际发布时确定日期。
- 首次创建时间单独存入顶层 `explainerCreatedAt`，使用 UTC ISO 精确时间，生成后保持不变。首页“近一周的讲解页”按首次创建时间筛选最近七个 UTC 日、按创建时间倒序，同日也区分先后；更新旧页不重新进入列表或置顶。已有脚本仅在缺少创建时间时从页面文件的 Git 首次新增提交初始化；其 UTC 日与首次发布日期不同或无历史时，回退首次发布日期的 UTC 午夜。最近更新时间仍保存在 `explainerUpdates` 以兼容发布流程，但不用于首页近期排序；不能通过改写首次日期或创建时间置顶。
- 两张时间表由 `node scripts/update-explainer-updates.cjs` 在内容提交后生成，流程见 [publishing.md](publishing.md)。静态检查在缺少条目时给出警告，在格式错误或创建时间不落在首次发布日期时报错。

## 署名、单位与论文日期

- 论文页加载 `../../assets/bibliography.css`、`bibliography.js` 和生成的 `paper-metadata.js`，且两个脚本位于 `paper.js` 之前；`paper.js` 在标题下挂载署名。
- 在 `paperMetadata`（键为原文 `u`）录入出版时的作者顺序与单位、`dates.published／accepted／preprint` 的状态与精度及 `sources` 证据。没有依据的单位留空、日期标为 `unverified` 或 `notDisclosed`，页面会如实显示“未核实”，不能猜测补齐。字段规则见目录指南“Authors, affiliations and paper dates”。
- 修改后运行 `node scripts/build-paper-metadata.cjs`，再运行 `--check` 与 `node scripts/check-paper-metadata.cjs`，并提交 `assets/paper-metadata.js` 与 `references/paper-metadata-audit.md`。不要手改生成的子集。
- `check-taxonomy.cjs` 要求已有 `paperMetadata` 记录与历史基线一致。补录或更正已有记录（如补齐单位映射）时，在 `reports/explainer-audit/metadata-corrections.json` 登记原文 `u`、证据和允许变化的字段，检查会只放行这些字段。

## README

- 更新页面自己的 `README.md`，以及仓库 `README.md` 和 `papers/README.md` 中的入口。每个 `papers/<slug>/` 都应在 `papers/README.md` 以 `(<slug>/)` 链接出现（静态检查会警告缺失）。
- README 中的数量（论文总数、讲解页数、带署名的页数等）从目录数据或检查脚本输出核对，不沿用旧数字；Markdown 表格内不要留空行，否则后续行脱离表格。
- 保留已有站点搜索可见性设置（`robots.txt` 与 `noindex`）。

## 生成页与编辑源

以下文件由脚本生成，直接修改 HTML 或生成文件会在下次生成时被覆盖。修改编辑源，运行生成器，核对生成差异只包含预期改动，再提交编辑源、生成器和生成结果。页面 `README.md` 中的 “Editorial source” 行标明来源，静态检查会以 NOTE 提示。

| 生成结果 | 编辑源 | 生成命令 | 专项检查 |
|---|---|---|---|
| 15 篇 verl 页（12 篇论文 + 3 篇文档）及 `collections/verl-algorithms/` | `references/verl-explainers.json` | `python3 scripts/build-verl-explainers.py` | `node scripts/check-verl.cjs` |
| `papers/trm/`、`papers/batch-size-invariance/` | `scripts/build-rl-foundations.py` 内的文稿 | `python3 scripts/build-rl-foundations.py` | `node scripts/check-rl-foundations.cjs` |
| `assets/paper-metadata.js`、`references/paper-metadata-audit.md` | `references/paper-catalog.json` 的 `paperMetadata` | `node scripts/build-paper-metadata.cjs` | `--check`、`check-paper-metadata.cjs` |
| `explainerCreatedAt`、`explainerUpdates` | Git 历史 | `node scripts/update-explainer-updates.cjs` | `check-catalog.cjs` |

- 生成页的双语文字以 `data-zh`／`data-en` 成对写入；来源定位等单语字段如含说明性英文，在编辑源中提供中文版本（verl：`locatorZh`、`claimLocatorsZh`；RL foundations：定位写成 `(中文, English)`），`sources.md` 仍保留英文定位。
- 修改生成器前先在未改动的编辑源上运行一次，确认输出与已提交页面一致，再开始修改。
- 生成的 `sources.md` 中“Visual and interaction audit”是固定模板；版本差异、原文不一致和逐项审计结论写入 verl 条目的 `ledgerNotes`（字符串数组，生成为 “Version and audit notes” 一节）。RL foundations 页的证据记录同样由脚本生成，审计结论写入脚本内的文稿。
- 25 篇 MOF／REE 页的教学层由 `reports/quality-rollout/refine_pages.py` 依据 `lessons.json` 一次性写入，已成为页面正文；不要重新运行该渲染器，修改直接在页面进行。

## 目录相关检查

- `node scripts/check-taxonomy.cjs --data-only`：原有身份、上下文、数量、元数据、路径与结构引用。
- `node scripts/check-catalog.cjs`：自动刷新、组合搜索、失败恢复、创建时间排序、语言与响应式布局。
- `node scripts/build-paper-metadata.cjs --check` 与 `node scripts/check-paper-metadata.cjs`：书目记录与作者、单位、日期搜索。
