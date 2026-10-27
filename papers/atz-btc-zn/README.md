# ATZ-BTC-Zn — 离子交换辅助的稀土纳米陷阱

[打开中文讲解](./?lang=zh) · [Open English explainer](./?lang=en) · [来源与证据 / Evidence ledger](sources.md)

Song 等关于 ATZ-BTC-Zn 分离稀土离子的中英双语交互讲解。论文于 2024 年 12 月 20 日在线发表，正式引用为 *Advanced Functional Materials* **2025, 35, 2419093**，DOI：[10.1002/adfm.202419093](https://doi.org/10.1002/adfm.202419093)。内容核对用户提供的 12 页正文与 SI DOCX，区分论文数据、作者机制、教学计算和讲解者分析。

四个交互模块帮助理解结构、指标和证据：

- **机制分步**：查看水合反离子、通道、离子交换和开放纳米口袋之间的关系。
- **实测指标切换**：对比 SI Table S3 的 Langmuir 容量与拟合亲和常数，以及 Table S2 的实际尾矿水捕获率，保留各自的单位和条件。
- **二元分离与质量守恒**：选择六组论文报告的 SF，再改变进料组成与总吸附比例，观察假设 SF 恒定时两相组成和回收率的变化。计算明确标为教学模型，不是新实验或工艺预测。
- **原图阅读器**：结合 Figures 1、2、3、6，区分结构、吸附数据、滤液富集与 DFT 结果。接近该节时预加载原图；切换时显示加载状态，加载失败可重试，避免新图标题下仍显示旧图。

页面特别说明最大 SF = 908 对应非严格相邻的 La/Nd；SF、容量、捕获率和产品纯度各有不同含义。正文与 SI 的实验条件差异保存在证据记录中。

This bilingual explainer covers the ionic Zn MOF ATZ-BTC-Zn and the proposed ion-exchange-assisted nanotrap mechanism. Four interactions explore the mechanism, compare source-specific measured metrics, examine binary separation with a hypothetical mass balance, and guide reading of original Figures 1, 2, 3 and 6. The page distinguishes source data, proposed mechanisms, teaching calculations and editorial analysis. A reported SF does not establish an arbitrary product purity or recovery.

## Files

- `index.html`: static bilingual page, page-specific diagrams and interaction logic.
- `assets/`: original-figure crops from the supplied article.
- `sources.md`: exact evidence locations, source-version hashes, transcribed plotting values, model definitions and source discrepancies.
- Shared reading system: `../../assets/paper.css` and `../../assets/paper.js`.

## Validation

Checked 2026-10-27:

- Full static page/catalogue checker: PASS, zero warnings.
- Repository browser regression: all 9 explainers, 1291 interaction cases; Chinese/English, state/scroll/focus preservation, 1440/768/390 px and denied-storage fallback all passed.
- Additional page checks: 150 binary mass-balance cases (six SFs × five feed compositions × five phase splits), bounded compositions/recovery, keyboard Enter/ArrowRight, 30 anchor positions, expanded details at all three widths in both languages and the homepage entry passed.
- Desktop/tablet/phone screenshots, mechanism, separation calculator and figure-reader layouts visually reviewed. Original-figure proportions and narrow-screen expanded formulas checked after local layout fixes. Representative screenshots are retained in `/tmp/atz-btc-zn-qa/` on the task host.
- Independent scientific review confirmed all 14 metric rows, six SF values and the mass-balance equations against the supplied article/SI. The CO₂ pore-analysis label in the evidence ledger was corrected.
- Publication target: GitHub Pages from `origin/main`; live content is verified after pushing the validated version.

静态检查、全站回归与本页专项验证均通过；关键排版与原图已目视核对。发布目标为 `origin/main` 的 GitHub Pages，推送后核对线上内容。

## Figure-switching fix (2026-10-27)

The reader preloads nearby figures, swaps decoded images, and shows bilingual loading/retry feedback. A delayed or failed download cannot leave the previous image visible under the newly selected figure caption. Rapid selections display only the last requested figure.

Targeted browser checks passed for delayed downloads, decoded image pixels against each local source image, rapid switching, failed-load retry, language switching during a pending download and 1440/768/390 px layouts. The full repository browser regression and static checker were also rerun. Scientific content and first-publication date are unchanged.
