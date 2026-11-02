# Batch 1 — before audit


P0: no new numerical error established by this pass. P1 teaching gaps below are reproduced in the existing pages. Earlier full static/browser baseline is saved in /tmp/mof-quality-release-qa.


## hydrolytic-stability-grading

Original example: 把分级扩展成一条可读记录 Turn a grade into a readable report 下面是按表 2–3 整理的教学场景，不是对某种真实材料的新鉴定。选择条件与表征结果，观察同一编号为什么还需要完整的实验记录。 This is a teaching scenario based on Tables 2–3, rather than a new assessment of a real material. Select conditions and observations to see why a grade still needs a full experimental record. 暴露级别 Exposure level 单次时长 / h Exposure duration

P1, background/terminology: the original exposure cards used RH and the matrix used crystallinity/porosity before explaining their measurement. The builder is retained and introduced through a three-step reporting rationale.

Acceptance task: Check: why is PXRD alone insufficient for 6A?

Rechecked main §§3–5.5 and Tables 2–3. A/B/C/D mapping and missing-evidence logic are preserved. The publisher lists no independent scientific SI. Added examples are explicitly hypothetical, with no numerical severity or lifetime conversion.



## mof-hydrolysis-atomistic

Original example: 用两个距离追踪反应，再用偏置促进采样 Track two distances and apply bias to improve sampling CV-1 是 Zn 与水氧 Oᵥ 的距离；CV-2 是配体 O（或 ZIF 中 N）与水氢 Hᵥ 的距离。它们把“水靠近”和“质子转移”投影到二维自由能空间。 CV-1 is the distance from Zn to water Oᵥ. CV-2 is the distance from linker O, or N in a ZIF, to water Hᵥ. They project water approach and proton transfer onto a two-dimensional free-energy space. 

P1, terminology and inference gap: the original method immediately used CV, ReaxFF, NVT and biased trajectories; the sensitivity equation lacked a high-school exponential bridge. The revision defines objects before equations and retains all seven reported model rows.

Acceptance task: Check: does reaction at 450 ps in a biased trajectory mean failure after 450 ps?

Reread final main methods/Eyring discussion and SI energy definition. Added only the explicitly hypothetical 300 K ratio exp(1/(R*300)) = 5.35; no absolute lifetime, new fitted energy or measured uncertainty is supplied.



## mil100-water-matrices

Original example: 把衍射、孔隙和溶液证据放在一起 Read diffraction, porosity and solution evidence together 正文图 1–3 显示，去离子水 20 °C 最长 28 d、或最高 30 °C 暴露 24 h 后，MIL-100(Fe) 的主要 PXRD 与 FTIR 特征仍在。低角度峰强度比改变、低温样品背景变宽，提示结构环境发生变化。 Main Figures 1–3 retain characteristic PXRD and FTIR features after up to 28 d in DI water at 20 °C or 24 h up to 30 °C. Changed low-angle intensity ratios and br

P1, background/formula gap: the page used matrix, BET and hydrogen-ion activity before an intuitive measurement story. Added a two-sided workflow and a pH scale example; retained the existing explicit main/SI discrepancies.

Acceptance task: Check: are retained PXRD peaks, lower BET area and falling pH contradictory?

Reread main results/methods, Table 1 and SI S4–S6. No conflicting iron concentration is selected as uniquely correct. The added 6→3 example is hypothetical and uses the pH definition, not a digitized experimental trace.



## cmpo-mil101-ree

Original example: 三步改性，孔隙与负载逐步改变 Three functionalization steps change porosity and loading 先在芳香连接体上建立锚点，再通过 1,4-二氨基丁烷连接臂与二乙基膦酰乙酸偶联。这里保留作者的“CMPO 型”称呼，不把本研究的基团等同于每一种萃取剂中的 CMPO 分子。 An anchoring site on the aromatic linker is followed by a 1,4-diaminobutane spacer and coupling to diethylphosphonoacetic acid. “CMPO-type” retains the authors’ terminology without equating 

P1, background/denominator gap: the original opening used chelating groups and separation factors before defining them. Added scaffold/group/ion prerequisites, synthesis-purpose flow and a worked distribution-to-transfer example.

Acceptance task: Check: why can 12.46 mg/g and 3.2 not directly rank the same performance?

Reread main synthesis, adsorption equations and Table 2 plus SI batch/porosity notes. Worked r=149/549=0.2714 uses the reported rounded Kd and V/m with explicit mass-balance assumptions; the published SF remains 3.2, not replaced by rounded-Kd division.



## defect-phosphate-uio66-yb

Original example: “缺陷数”来自模型与表征 Defect counts depend on models and characterization EPR 信号 EPR signal TGA 估计 TGA estimate 改变理论失重假设，会怎样？ What if the theoretical mass-loss assumption changes? 教学敏感性：固定 ST2 报告失重为 20.71%，只改变理论完整材料失重 L。沿用 SI 的 n = 6(1 − 20.71/L)。这不是新测得的缺陷数，也不代表真实合成一定产生该构型。 Teaching sensitivity: fix reported ST2 loss at 20.71% and vary theoretical intact-ma

P1, terminology/evidence gap: EPR, TGA, zeta potential and modeled defects appeared before operational definitions. Added their roles, the TGA inference chain and a paired capacity/selectivity comparison.

Acceptance task: Check: do lower area and larger reported pore width prove more total porosity?

Reread final main §3.1/§3.2, Fig.7, eqs.12–13 and SI TGA model/Table S1/Fig.S2. Preserved TGA assumptions, Ar rather than N2 measurement, distinct single-ion/mixture conditions and the existing main/SI kinetic inconsistency.

