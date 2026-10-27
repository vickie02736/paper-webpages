# NCU-1 nanotraps — Rationally designed nanotrap structures for efficient separation of rare earth elements over a single step

[Open interactive explainer](https://vickie02736.github.io/paper-webpages/papers/ncu1-nanotraps/) · [English version](https://vickie02736.github.io/paper-webpages/papers/ncu1-nanotraps/?lang=en)

采用 Research Atlas 统一深色主题、无衬线字体、顶部导航与语言控件的中英双语交互讲解页；切换语言保留结构视图、计算离子、容量来源、二元离子对、教学滑块、原图及展开状态。以用户提供的 7 页正式论文与 47 页补充材料为依据。通过四个原图视图阅读框架、互穿、口袋与计算吸附构型，切换正文报告容量与 SI 拟合容量、比较六组二元离子对，并用教学质量平衡计算区分分离因子、回收率与纯度。原图阅读器及可展开细节将论据连接到其适用范围。

A static bilingual explainer using the shared Research Atlas dark theme, sans-serif typography, header, section navigation and language controls. Language switching preserves the selected structure view, calculated ion, capacity source, binary pair, teaching slider, figure and expanded details. Based on the supplied seven-page publisher article and 47-page supplementary information. Read the framework, interpenetration, pocket and calculated adsorption configurations through four original-figure views, switch between main-text capacity values and SI fitted capacities, compare six binary ion pairs, and use a teaching mass-balance calculation to distinguish separation factor, recovery and purity. An original-figure reader and expandable details connect each claim to its evidence and scope.

正文第 2 页与 SI Table 3 的容量数值不同，页面分别标注；高分离因子不等于已测得的产品纯度。四个结构视图不是合成步骤或时间序列；教学质量平衡不是新增实验或经过验证的物理模拟。详细来源、条件与差异处理见 [sources.md](sources.md)。

The main text on page 2 and SI Table 3 give different capacity values, which the page labels separately. A high separation factor does not establish measured product purity. The four structure views are not synthesis steps or a time sequence; the teaching mass balance is not a new experiment or validated physical simulation. See [sources.md](sources.md) for sources, conditions and treatment of discrepancies.

Source: Qing-Hua Hu, An-Min Song, Xin Gao, Yu-Zhen Shi, Wei Jiang, Ru-Ping Liang and Jian-Ding Qiu. *Nature Communications* **15**, 1558 (2024). [Publisher article and supplementary information](https://www.nature.com/articles/s41467-024-45810-1) · [DOI](https://doi.org/10.1038/s41467-024-45810-1).

First published: 2026-10-27 (UTC). The static page uses local assets and requires no sign-in or runtime CDN.

更正（2026-10-27）：第 02 节及首屏结构图改用原文图像的直接局部视图，替换此前不能准确表示 NCU-1 的立体框架与通用配位示意。前三个视图分别为图 2b、2c、2d；第四个视图切换图 5d、5e、5f 的 Pr、Dy、Al 计算构型。图 2d 的紫色球标示空隙，不是实际吸附的稀土离子。原始 PNG 通过 SVG 视口裁切显示，没有重绘结构、改色或添加原子／键覆盖层。

Correction (2026-10-27): section 02 and the hero now use direct views of original artwork, replacing the earlier three-dimensional framework and generic coordination schematics that did not accurately represent NCU-1. The first three views show Figs. 2b, 2c and 2d; the fourth switches between the original Pr, Dy and Al calculated configurations in Figs. 5d, 5e and 5f. Purple spheres in Fig. 2d mark voids, not actual adsorbed REEs. SVG viewports clip the existing PNGs without redrawing structures, recolouring, or overlaying atoms or bonds.

本次更正验证（2026-10-27）：完整页面检查器通过（0 警告）；Chrome 检查通过，覆盖图 2b–d、图 5d–f 的面板／能量对应、中英文切换、状态与焦点保留、键盘操作和完整原图链接。1440 px、390 px、320 px 视口无横向溢出；页面无脚本或资源错误。

Correction validation (2026-10-27): the full page checker passed with zero warnings. Chrome checks verified the Fig. 2b–d and Fig. 5d–f panel/energy mapping, both languages, state and focus preservation, keyboard operation and full-figure links. No horizontal overflow at 1440, 390 or 320 px; no script or resource errors.

原图阅读器修复（2026-10-27）：第 06 节在新图加载期间隐藏旧图并显示双语提示，等待图片解码完成后显示；缓存已加载图片，忽略过期请求，并为失败或超时提供重试。图像、图注、选中按钮与原图链接保持一致；手机端图片按比例缩放，避免覆盖图注。图号保留原论文的 2、3、5、6。

Figure-reader fix (2026-10-27): section 06 hides stale artwork while loading, shows bilingual feedback, and displays the selected image after decoding. Decoded images are cached, outdated requests cannot overwrite the current selection, and failed or timed-out loads offer a retry. Artwork, caption, selected button and original-image link stay aligned. Responsive image sizing keeps artwork clear of the caption. Figure numbers retain the article's 2, 3, 5 and 6.

回归检查：`node scripts/check-ncu1-reader.cjs`（从仓库根目录运行；Playwright 与 Chromium 配置同 `scripts/check-explainers.cjs`）。检查实际解码和四张不同的图像、慢加载、失败重试、快速切换、超时后迟到的请求、加载中切换语言、键盘操作，以及 1440／768／390 px 下的图片边界和图注位置。截图保存于 `PAPER_QA_DIR`，默认使用系统临时目录。

Regression check: run `node scripts/check-ncu1-reader.cjs` from the repository root, using the Playwright/Chromium configuration of `scripts/check-explainers.cjs`. It verifies four distinct decoded images, delayed/failed/racing/timed-out requests, retry, language switching during loading, keyboard controls, and image/caption geometry at 1440, 768 and 390 px. Screenshots go to `PAPER_QA_DIR` or the system temporary directory.
