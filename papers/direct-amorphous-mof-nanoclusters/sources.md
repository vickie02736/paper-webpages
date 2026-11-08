# Evidence ledger

- Baun, N. L. et al. **Direct synthesis of amorphous metal–organic frameworks from nanoclusters.** *Nature Communications* 17, 4992 (2026). DOI: [10.1038/s41467-026-71378-z](https://doi.org/10.1038/s41467-026-71378-z).
- 正文与图注核对范围：Abstract、Introduction、Results and discussion §§ Overview; Nanocluster synthesis and formation; aMOF synthesis & optimisation; Local structure and node defects; Extended structure; aMOF design principles；Methods；Supplementary information 入口。
- 关键数值：Fe₃O 相比 Cr₃O 的形成速率约快 18 倍；3 种路线 × 4 种组成 = 12 个样品；PDF 长程相关在约 30 Å 后消失；与晶体 PDF 的最高 Pearson 相关约 0.76；Fe-BDC(NC) 最大 N₂ 吸附约 135.8 cm³ g⁻¹。
- 解释边界：相干长度与节点缺陷是互补描述；TGA 饱和度为半定量；aMOF 不是自动对应某个已知晶体，也没有在本文中系统证明催化、吸附或传输性能优势。

## Audit 2026-11-08

核对出版社正式网页版正文、图注与 Methods（DOI 10.1038/s41467-026-71378-z）；未声称逐页审阅 SI。

- `#foundations`：新增 MOF、非晶和玻璃的区分。Introduction 明确研究不具有玻璃化转变的 aMOF，不能仅由缺少 Bragg 峰称为玻璃；不把熔融经历当作所有玻璃的必要制备条件。
- `#pointer-lab` / `teaching.js`（中英文）：新增 NC/OP/SW 路线图与四个 pointer；依据 Overview、Fig. 1a 和 Methods。NC 使用预制分离簇；OP 直接混合金属盐/连接体/碱；SW 先在溶液形成簇再加连接体，不先分离。M₃O 仅是核心单元简写，不是完整化学式。
- 流程图表示步骤，不构造虚假的原子坐标或三维网络；室温适用于 aMOF 组装，纳米簇前体的制备含 50 °C 加热和结晶（Methods / Nanocluster synthesis）。
- `#evidence`：PDF 本身呈弥散散射 → 总散射呈弥散特征，PDF 在 30 Å 后无可辨识结构相关；依据 Fig. 1c、Fig. 4 与 Extended structure，补充单位 30 Å=3 nm。
- `#structure`、`#principles`：去除“模糊版”“积木”类比，以局部基元/整体结构和配体交换定义解释；将额外交换导致无序明确为作者提出的可能机制（aMOF design principles）。
- `#limits`：135.8 cm³/g N₂ 最大吸附量补充 77 K 条件与体积/质量单位。来源 aMOF characterisation；正文引用 Supplementary Fig. 15，不作曲线估读。
- `terms.json`、`terms-data.js`：新增 PDF、相干长度、节点缺陷、Pearson、TGA、FT-IR 等背景定义。相干长度不是粒径；相关系数 0.76 不是原子结构相同百分比。
- 交互检查：中英文、三视口、三路线×四个 pointer、三种证据面板、术语弹窗键盘关闭与焦点恢复通过；浏览器补充扫描 0 failure，英文参考文献提示为正常引用。
