# 获取与固定原文

核对任何科学内容前先确定“实际读到的是哪一版、从哪里来、能否复查”。本文件是 SKILL.md 第 3 节的操作补充。

## 读取工具

- 网页抓取工具通常读不了 PDF、DOCX 和多数出版社付费页面，超时也不能当作“原文不可得”。PDF 用 `curl -L -o <文件> <URL>` 下载，再用 `pdftotext -layout` 抽取文本；DOCX 用 `textutil -convert txt`（macOS）或 `pandoc` 转换。
- 只出现在图中的数值（柱上标签、图例颜色、坐标交点、SF 标注）用 `pdftoppm -r 300 -f <页> -l <页> -png` 渲染后查看，必要时放大到 400 dpi；记录读数方法（如“图 3a 标签，400 dpi 渲染”）。文本抽取得到的数字不能代替图中标签。
- 表格含合并单元格时，优先解析出版社 HTML／XML（JATS）的行列结构；扁平文本会把相邻列串位。
- 下载后计算 `shasum -a 256`，与 `sources.md` 中记录的哈希比较；一致才说明审阅的是同一文件。新建记录时写入哈希。

## 机构访问与出版社拦截

在机构网络（如 UCL VPN，出口为 Jisc）上，出版社的 Cloudflare 检查仍会对 `curl` 返回 403 “Just a moment…”，这不代表没有订阅。用 `scripts/fetch_source.cjs` 在真实浏览器中打开论文页，保存含全文的 `landing.html`，再在页面内带 cookie 下载 PDF／SI：

| 出版社 | 可用方式 | 链接形式 |
|---|---|---|
| Wiley | 内置 Chromium 无头模式 | 正文 `…/doi/pdfdirect/<doi>?download=true`；SI `…/action/downloadSupplement?doi=…&file=…` |
| ACS | `CHROME=1`（已安装的 Chrome，持久配置） | 新版页面的 SI 在 `landing.html` 中以 `/…/article-supplement/<id>/docx/<稿号>_si_001/` 出现；正文全文已在页面中 |
| ScienceDirect | `CHROME=1`，`WAIT_TEXT=<标题关键词>` 等待约 10 s 的 Turnstile 自动通过 | 用 Crossref 的 `alternative-id` 得到 PII，打开 `/science/article/pii/<PII>` |
| Nature | `CHROME=1` | `…/articles/<id>.pdf` |

- 先确认出口网络（`curl -s https://ipinfo.io/org`）。浏览器页面若显示 “Access through your institution”／“Get Access”，才是真正没有权限。
- 若出现需要点击的验证框，用 `CHROME=1` 打开的窗口由用户点击一次即可；持久配置会保留通过状态。
- 页面全文 HTML 去掉标签后即可检索；表格行列（尤其 SI DOCX 的表）用 DOCX 的 `word/document.xml` 按 `<w:tr>`／`<w:tc>` 解析，`textutil` 的纯文本会丢失行标签。

## 来源顺序与版本

按以下顺序尝试，并在 `sources.md` 写明实际使用了哪一项：

1. 用户提供的本地文件。
2. `sources.md` 已记录、哈希一致的缓存。
3. 出版社开放全文或作者许可的接受稿；生物医学与化学期刊可试 Europe PMC `fullTextXML`／PMC。
4. 作者预印本（arXiv、ChemRxiv、Research Square）和公开 SI（figshare、Zenodo、出版社 ESM）。
5. 仅摘要：只能核对摘要中出现的主张，其余标为未验证。

- 预印本与正式版的页码、表号、数值可能不同。用预印本核对时说明“对照预印本 vX”，不要把预印本页码写成正式版页码。
- 文档类来源（如 verl）固定提交哈希，记录 `docCommit` 与 `docSha256`；配置键与默认值有疑问时对照同一提交的代码，未运行代码时写明。
- 证据记录中的本地路径若已失效，不能当作已核对；重新获取后更新路径与哈希，或把相关主张降为未验证。

## 缓存位置

- 原文与 SI 存放在仓库外的持久目录：`${PAPER_SOURCE_CACHE:-$HOME/paper-sources}/<slug>/`。不要只放在 `/tmp` 或 Downloads，这些位置会被清理；受版权限制的全文不提交到仓库。
- `sources.md` 记录文件名、来源 URL、获取日期与 SHA-256，而不是只写本机绝对路径。
- 机构订阅取得的缓存可用于核对，并注明“机构访问的出版社版本”；不得公开转载。
