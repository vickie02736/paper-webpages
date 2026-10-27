# Hans-LanM dimer — 稀土敏感的蛋白二聚化与分离

[打开中文讲解](./?lang=zh) · [Open English explainer](./?lang=en) · [来源与证据 / Evidence ledger](sources.md)

Mattocks 等关于 Hans-LanM 的中英双语交互讲解。正式论文：*Enhanced rare-earth separation with a metal-sensitive lanmodulin dimer*, *Nature* **618**, 87–93 (2023)，2023 年 5 月 31 日在线发表。DOI：[10.1038/s41586-023-05945-5](https://doi.org/10.1038/s41586-023-05945-5)。内容依据用户提供的 23 页出版社 PDF（含 Methods 和 Extended Data）与 56 页补充材料核对。

页面从微小离子半径差异出发，解释局部配位、第二配位层氢键网络与二聚界面之间的联系，再阅读结合和组装实验，以及野生型与 R100K 突变体的 Nd/Dy 柱分离证据。交互帮助读者探索配位到二聚化的机制、比较实验选择性，并在明确假设下计算蛋白浓度对二聚平衡的影响。展开内容提供研究细节；语言切换保留交互状态。

页面区分金属结合的表观解离常数与蛋白二聚解离常数、结构机制与测量结果、产品纯度与回收率。二聚平衡计算是教学模型，不是柱分离性能预测；详细条件、证据位置和解释范围见 [sources.md](sources.md)。

This bilingual explainer follows how small differences in rare-earth ionic radius affect local coordination, second-sphere hydrogen bonds and the Hans-LanM dimer interface. It connects binding and assembly experiments to Nd/Dy column separation, distinguishing wild-type protein from the R100K mutant. Interactive views explore the coordination-to-dimer mechanism and experimental selectivity; a stated-assumption calculation illustrates how protein concentration affects dimer equilibrium. Expandable details support deeper reading, and language switching preserves interaction state.

The page distinguishes apparent metal-binding constants from protein dimer dissociation constants, mechanistic interpretation from measured results, and product purity from recovery. The equilibrium calculation is a teaching model rather than a prediction of column performance. The evidence ledger records exact source locations, experimental conditions and interpretation limits.

## Files

- `index.html`: static bilingual explainer and page-specific interactions.
- `assets/`: local original-figure assets where used.
- `sources.md`: source versions, evidence locations, conditions and teaching-model definitions.
- Shared reading system: `../../assets/paper.css` and `../../assets/paper.js`.

First publication date: 2026-10-27 (UTC). Publication target: GitHub Pages from `origin/main`.

## Validation

2026-10-27: the full page checker passed with zero warnings. The repository browser regression passed for all 10 explainers (1,327 interaction cases), including Chinese/English, language and state persistence, blocked storage and 1440/768/390 px layouts. Focused browser checks verified keyboard input, the 3 mM preset, WT/R100K product values, mechanism selection, figure and quiz state, expanded details, header clearance at anchors and the homepage English link. Original-figure crops and representative desktop/tablet/phone screenshots were visually inspected.

All core content and interactions use local assets; no runtime CDN is required.
