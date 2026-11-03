# 浏览器验证操作参考

## 最低覆盖

- 1440、768、390px 首屏及全部章节，图表、长标题、全部深度和展开内容；保存并查看截图。
- 中英文、支持的对照模式、刷新、直接英文 URL、语言/深度切换后的输入、选择、展开、焦点和滚动状态。
- 键盘 Tab/Enter/Space、焦点、可访问名称与对比度；图片慢加载、失败/重试、快速切换、适用的空状态；控制台、资源、锚点、链接和横向溢出。
- 修改共享资源时运行全部页面静态检查、共享 JS 语法检查及全站回归；单页改动按影响范围验证。
- 科学内容任务按证据清单核对实际显示的两种语言及相关状态，尤其是方法箭头、公式分支、数值行列、单位与量尺；纯样式任务确认这些语义未被改动。

### 纯文字修正的轻量路径

只改正文或标签文字、不改布局、控件、图形计算或共享资源时，可用以下检查代替上面的完整覆盖：

1. 静态检查该页（`check_page.py --slug`），对改过的外部脚本运行 `node --check`；生成页运行其生成器与专项检查。
2. `node .agents/skills/paper-webpage/scripts/sweep_pages.cjs --slugs <改动页>`：两种语言、三种屏宽下无错误、溢出、未知标签与语言残留。
3. 在浏览器中打开改动所在章节或交互状态，中英文各看一次改后的完整句子（含被折叠或由脚本生成的文本）。

改动涉及交互逻辑、图形量尺、HTML 结构或共享文件时，回到完整覆盖。

## 环境

默认使用 **Node.js 版 `playwright` 与 Chromium** 执行浏览器检查，与[现有回归脚本](../../../../scripts/check-explainers.cjs)一致。从仓库根目录确认模块可加载，优先复用可用安装；新 worktree 也要重新检查，不能假定它拥有原工作区的 `node_modules`。

```bash
cd "$(git rev-parse --show-toplevel)"
node -p "require.resolve(process.env.PAPER_PLAYWRIGHT_MODULE || 'playwright')"
```

模块缺失时，若项目已有依赖清单，沿用其包管理器与锁文件；当前无依赖清单时，可只安装本地检查工具：

```bash
npm install --no-save --package-lock=false playwright
./node_modules/.bin/playwright install chromium
```

- 仅缺少 Chromium 时，使用对应 Playwright 安装的 CLI 执行 `install chromium`；上述相对路径适用于仓库本地安装。将 `node_modules/` 加入本地 Git 排除规则，避免把检查依赖带入页面提交或发布。
- 外部安装可用 `PAPER_PLAYWRIGHT_MODULE` 指向可解析的模块绝对路径，或通过 `NODE_PATH` 提供；`PAPER_CHROMIUM_EXECUTABLE` 可指定已有且兼容的 Chromium。回归脚本未设置 `PAPER_BASE_URL` 时自动启动本地 HTTP 服务，截图默认写入系统临时目录下的 `paper-webpages-qa`，可用 `PAPER_QA_DIR` 覆盖。
- 安装或复用后，用回归脚本或针对本次页面的 Playwright 脚本实际启动无头 Chromium，完成页面加载、交互和截图，再关闭浏览器。模块解析或版本命令成功只说明依赖可见，不能替代浏览器运行验证。
- 通过本地 HTTP 服务检查 1440px、768px、390px 视口下的首屏、图表、公式和长标题；展开详情及各深度后也应无页面横向溢出。检查中英文、图内标签、动态反馈、可访问标签、Tab/Enter 操作及控制台／资源错误，并保存、实际查看代表性截图。针对图表及展开状态补充截图，不能仅凭首屏截图判断整页通过。
- 核对章节目标未被吸顶栏遮挡；在已操作滑块、图表、测验或展开项后双向切换语言，验证状态、焦点及滚动位置。检查直接英文链接、刷新记忆、跨页语言和存储不可用场景。
- 涉及科学结构的模块，逐项检查所有材料／物种及会改变拓扑、连线或配位的图形状态，并与来源对照；不能只看默认图或抽查一个材料。
- 图片切换覆盖冷缓存、慢加载、加载失败和快速连续切换；等待图片实际加载／解码成功后核对图像、图号、图注及选中状态一致，确认失败提示和过期请求处理有效，不能仅凭按钮高亮、说明变化或 `src` 已赋值判定通过。
- 对方法图逐项核对箭头方向、训练／推理阶段、状态条件与公式；对定量图独立核对源表数值、指标、划分及量尺。浏览器运行与语言回归通过只证明其已检查的行为，不证明科学正确；在两种语言及相关交互状态下核对实际显示结果。
- 修改共享资源时，对全部讲解页运行静态检查，并运行 `node --check assets/paper.js`。
- 新增页面、统一全站风格或修改共享资源时，从仓库根目录运行 `node scripts/check-explainers.cjs`。它自动发现全部 `papers/*/index.html`，检查共享框架、双语交互与状态、三种屏宽和存储回退，并保存截图；没有单页筛选参数。单页小改按影响范围编写或执行针对该页的 Playwright 检查。回归脚本不能代替键盘操作、完整控制台／网络错误检查及图表目视核对，按本次改动补齐实际覆盖。
- 依赖缺失时先按上述步骤安装或复用；仍不可用时，使用可用的实际浏览器核对并准确记录未运行项。
- 对修改页面重点检查改动及其关联功能。记录已运行检查与结果；工具不可用时说明未验证项目，不能以静态检查代替运行检查。关键内容或交互尚未确认时保留本地成果。


## 全站脚本与补充扫描

从仓库根目录运行；浏览器脚本共用 `PAPER_PLAYWRIGHT_MODULE`、`PAPER_CHROMIUM_EXECUTABLE`、`PAPER_QA_DIR`。全站审计时把每条命令的输出存入 `/tmp/<任务>/` 便于引用。

| 命令 | 覆盖 |
|---|---|
| `python3 .agents/skills/paper-webpage/scripts/check_page.py --root . --all` | 全部页面的静态检查（含外部脚本语法、页面框架约定、目录、时间表、README 入口） |
| `node scripts/check-explainers.cjs` | 全部讲解页的共享框架、双语交互与状态、三种屏宽、存储回退（约 7000 个用例） |
| `node scripts/check-reading.cjs`、`node scripts/check-ncu1-reader.cjs` | 正文跳转、锚点、全页截图、原图失败／重试；NCU-1 独立阅读器 |
| `node scripts/check-verl.cjs`、`node scripts/check-rl-foundations.cjs` | 生成页的数值、交互和集合页 |
| `node scripts/check-catalog.cjs`、`node scripts/check-taxonomy.cjs --data-only` | 首页目录、计数、刷新、分类与迁移 |
| `node scripts/build-paper-metadata.cjs --check`、`node scripts/check-paper-metadata.cjs` | 署名子集是否过期、作者／单位／日期搜索 |
| `node .agents/skills/paper-webpage/scripts/sweep_pages.cjs [--slugs a,b] [--out r.json]` | 补充扫描：控制台、失败请求、坏图、溢出、失效锚点与本地链接、未知标签、无名称控件，以及语言残留、英文中的全角标点、同一章节中英数字不一致与 `undefined`／`NaN` 提示 |

`sweep_pages.cjs` 的 HINT 需人工判读：原论文标题、作者、正式引用、章节编号与原文档标题可保留英文；“the ratio is undefined”之类属正常英文；英文把数字写成单词（twenty）或中文用“万”计数（2100 万 vs 21M）会产生数字不一致提示。确认后的问题再写入报告。

## 阅读改进补充检查

- 本仓库 `node scripts/check-reading.cjs` 补充检查正文跳转焦点、页面锚点、三视口全页截图、研究深度章节截图、CALF-20 选择器焦点、Ln 步进终点，以及共享原图失败/重试。NCU-1 使用独立阅读器，另运行 `node scripts/check-ncu1-reader.cjs` 覆盖慢加载、失败、重试、快速切换和超时。使用与全站回归相同的 Playwright 环境变量。
- 表格和公式容器横向滚动时检查键盘可达性；新控件要验证选中状态和重置行为。不存在某类图片或空状态时记录不适用，不为测试而引入无用界面。
- 核对文章清单、目录入口、原 URL 和首次发布日期未减少或改变；保留全部有效内容。
- 检查真实屏幕阅读器和远端链接时明确实际覆盖范围；工具不可用或服务器拒绝请求，记录为未验证，不声称通过。
