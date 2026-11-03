# PMIDA–MIL-101：来源与证据记录

本次核对日期：2026-10-29。页面继续采用用户提供的正文 `am-2026-16452u.pdf` 和 SI `am-2026-16452u_si_001.docx`；正式来源为 [DOI 10.1021/acsami.6c16452](https://doi.org/10.1021/acsami.6c16452)。正文与 SI 的不一致不通过样式优化消除。

## 页面模块与证据

- 首屏、研究问题与机制：正文 Abstract、§2、§3、Figure 5；PMIDA 增加供体配位，不能将其线性解释为新增独立吸附位点。原子、路径和孔窗口绘图为教学示意，不是晶体坐标或实际 MD 轨迹。
- 三档负载：1.2、2.1、3.0 mmol/g，见正文合成方法。容量面板使用 Langmuir 饱和容量；Figure 5a 的单一初始浓度摄取量是不同物理量。
- 负载为 1.2：正文报告 Nd/Gd/Dy 容量 0.67/0.64/0.78 mmol/g；SI Table S4 为 0.49/0.60/0.59。页面已有冲突说明，保留正文值及其标注。
- 负载为 2.1：SI Table S4 为 0.87/0.85/1.06 mmol/g；质量容量由摩尔质量换算，应继续标“约”和换算来源。
- 负载为 3.0：正文 Figure 4a 及相邻文字报告约 1.1/1.1/1.2 mmol/g，160/175/195 mg/g。不得用已四舍五入的摩尔值反推更精确的质量值。
- 配位与 TCS：正文 Figure 5、SI §S9 / Tables S6–S11。总配位数约 9；配体氧与水氧贡献分别解释。正文 TCS 11.28→15.26 ×10⁻¹⁸ J 与 SI 加权结果的差异在页面研究深度已有说明。未在本次视觉改进中重新拟合或改变几何数据。
- 公式：正文 Eqs. (4)、(5) 与 SI §S6、§S9。保留 n=2 有效供体位点假设、RDF/CN/TCS 的定义和近似；网页示意连接数量不作为实验配位数测量。
- pH、Fe(III) 与再生：Figures 4c、6、7；SI §§S10–S13。容量、竞争条件、酸浓度、解吸率和 MOF 损失分别阅读；孔窗口排斥 Fe 物种属于作者解释，Fe 未被直接纳入相应 MD。
- 知识地图与自测：依据上述模块组织教学，不增加新实验结论。

## 本次检查范围与限制

读取正文及 SI 表格文字，核对来源身份、容量取值及已有冲突说明。DOM、双语、交互及布局检查另见仓库 `reports/reading-improvements.md`。未重新开展 MD、拟合或源图数字化；未将既有证据记录视为所有模型状态都重新独立核验通过。页面科学文案、数值和公式保持原样。

## Audit 2026-11-03

Rechecked against the preserved publisher-text extraction of the main article (`/tmp/paper-sources/am-2026-16452u.txt`). The SI docx was not available in this session, so SI-only values (Table S4 at 2.1 mmol g⁻¹, Table S11-derived TCS ≈ 14.6, the 11.86% desorption-step MOF loss in §S13) were not re-verified.

- Capacity evidence card (`EV.capacity.s`, zh/en): conditions for the Langmuir q<sub>max</sub> were given as “initial REE 0.2 mmol L⁻¹”. §2.3 states isotherms used initial REE 0–0.4 mmol L⁻¹ over 24 h at 20 °C; 0.2 mmol L⁻¹ is the kinetic/standard solution (Figure 4 caption “unless otherwise specified”). Corrected to separate isotherm and kinetic conditions.
- Fe(III) qualifier (critical card and `EV.fe.s`, zh/en): “inhibition grows with loading” stated as fact; §3.4 says the inhibitory effect “seemed to be more pronounced at higher PMIDA loadings”. Wording changed to “appears stronger at higher loading”, attributed to the authors.

Consistent with the main text: loadings 1.2/2.1/3 mmol g⁻¹ (§2.1); q<sub>max</sub> 0.67/0.64/0.78 mmol g⁻¹ (97/101/127 mg g⁻¹) and 1.1/1.1/1.2 mmol g⁻¹ (160/175/195 mg g⁻¹) (§3.2, Figure 4a); 1 h within 7% of 24 h (0.62/0.62/0.80); pH 2→6 uptake 0.03/0.11/0.08 → 0.67/0.71/0.80 and PMIDA pKa values (Figure 4c); Figure 5a values 0.62/0.57/0.80; N<sub>ligand–REE</sub> 3.71–4.44 and 4.98–5.42 (Eq. 4); CN<sub>total</sub> 8.97–9.01 and Eq. 5; CN<sub>ligand</sub> 4.46→5.80, TCS 11.28→15.26 ×10⁻¹⁸ J; cations per window 1/1.45/1.64; 2/4/5 ligands per window; 1.2 nm pentagonal windows; MD 300 K, 40 ns + 20 ns; Fe(III) 12.9% and ~0.3% at 1:100; elution 89.0/97.6/98.2% (0.1 M) and 91.9/83.2/86.2% (0.01 M); 2–8.7% loss after one cycle; Cr leaching 7.96% (§3.5); >150 solvent-extraction stages (§1).

Second-pass corrections (site-wide audit):

- Data notes (zh/en): added the Eq. 4 check at 1.2 mmol g⁻¹. 2.4/q<sub>max</sub> with §3.2 values 0.67/0.64/0.78 gives 3.58/3.75/3.08; with SI Table S4 (0.49/0.60/0.59, as recorded above) 4.90/4.00/4.07. §3.3 reports 3.71 ± 0.17–4.44 ± 0.18. At 3.0 mmol g⁻¹ the equation reproduces 5.0–5.45 vs reported 4.98–5.42.

## Bibliographic metadata

Checked 2026-11-01. The shared byline uses the ordered manuscript authors and explicitly mapped publication-time affiliations stored under this paper’s original source URL in [`paper-catalog.json`](../../references/paper-catalog.json). Metadata is generated with `node scripts/build-paper-metadata.cjs`; the same record is used on the homepage.

- [Publisher-deposited Crossref record; author affiliations and explicit published-online / accepted fields](https://api.crossref.org/works/10.1021/acsami.6c16452) — authors, affiliations, dates.published.

Paper dates: published = 2026-10-14; accepted = unverified. Source precision is retained; undisclosed acceptance is not inferred from conference notifications. Unverified fields remain explicit. This bibliography update does not revise the scientific content or figures.
