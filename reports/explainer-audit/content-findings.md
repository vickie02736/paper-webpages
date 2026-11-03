# 科学内容核对结果（60 篇）

Scientific content findings for the site-wide explainer audit. Batches: AI/RL (A1 PPO–GPG, A2 OTB–batch-size-invariance, A3 RAG–MOF-SNAP) and MOF/REE (M1–M5). Each page was checked against its adopted source version (arXiv/proceedings PDF, publisher text or SI, pinned verl docs); PDF and doc SHA-256 hashes matched the ledgers wherever recorded. Two independent passes covered every page; single-pass findings were rechecked against the source before being applied.

级别：**P0** 事实、数值、物种／试剂身份、公式或方向错误；**P1** 条件、归属、关键限定词缺失或混用不同轮次／检查点；**P2** 定位、标签、措辞或可复现性说明。状态：**已修正**（本轮）、**已修正（并行）**（同一审计中由页面修复子任务完成）、**未修改**（原文不可得或两轮结论冲突，只记录）。

逐条的修改前后文字见 `git diff` 与各页 `sources.md` 的 “Audit 2026-11-03” 条目；生成页记录在 `references/verl-explainers.json` 的 `ledgerNotes` 与生成的 `sources.md`。

## 生成页（编辑源：`references/verl-explainers.json`、`assets/verl.js`、`scripts/build-rl-foundations.py`）

| 页面 | 级别 | 问题 | 原文依据 | 状态 |
|---|---|---|---|---|
| dppo | P1 | 把信赖域锚点写成“旧策略／旧到新”；论文要求以原始采样策略 μ 为锚点 | §5.2 Takeaway 2；附录 E；§7 设置 | 已修正（正文、机制、滑块与曲线标签） |
| dppo | P2 | 表 2 写 UltraFeedback，§7.2 与图 10 写 HH-RLHF | 表 2；§7.2；图 10 | 已在页面与证据记录披露 |
| spin | P1 | 63.16（第 3 轮，表 4）与 6.78（第 2 轮，表 6）并列为同一结果；λ 被写成“更新尺度” | 附录表 4、6（p.17）；式 4.3；注 5.5 | 已修正；证据页 16→17；行标签 “SPIN Iter3” |
| spin | P2 | 数据量比较归到附录 B；两处表格范围互相矛盾 | §6.3 图 5；附录 B 表 1、2、4–6 | 已修正 |
| entropy-mechanism | P1 | 表 2 Avg. 列被称作“七基准平均”，但不等于七列简单平均（32B GRPO 45.17 vs 45.8） | 表 2（p.12），本轮复算 | 已修正（标为论文报告值） |
| direct-reward-optimization | P2 | 列出论文没有做的“初始化”消融 | §4.1 图 3–5；附录 C | 已修正 |
| verl-algorithm-baselines | P2 | 把文档中的 89/88 写成 89.0/88.0 | baseline.md GSM8K 表 | 已修正；ReMax 7B／3B 脚本不一致记入证据记录 |
| grpo | P2 | 定位写 §4.1 式 3–5，式 5 在 §5.2.1；公式未写裁剪区间、未定义 ε/β | §4.1 式 3–4；§5.2.1 | 已修正 |
| dapo | P2 | v2 只有式 (7)–(13)；首行应为 Naive GRPO | §3.4；表 1 | 已修正 |
| gpg | P2 | 限制定位指向 §3/§4；未说明“无偏”是作者主张；行标签未区分 F_norm | v4 §2.2、§3.4；表 1 | 已修正 |
| otb | P2 | 证据定位写 §6.4，应为 §§6.2–6.3 | §6.2 图 8–9；§6.3 图 10 | 已修正 |
| on-policy-distillation | P2 | 定位漏掉支持“on-policy 比例”的图 8 | 图 8（p.8） | 已修正 |
| sppo | P2 | 表 3 的非单调只出现在 Mistral 一行；正文 28.52 与表 28.53 不一致 | 表 3；p.16 | 已修正并记入证据记录 |
| rollout-correction-math | P2 | 页面 ESS 为条数，verl 指标为 ESS/N | rollout_corr.md “Effective Sample Size” | 已补充说明 |
| trm | P2 | 1677 与 ≤4.1 取自表 1 的不同列；式 9 第二因子是期望优势偏移 | 表 1（p.6）；式 9；§4.4 | 已修正（本轮对 v5 PDF 复核） |
| batch-size-invariance | P2 | 中文漏掉“后 8 个游戏全部”；优势窗口消融只在 /256 显著 | §5.3；附录 E | 已修正（本轮复核） |
| ppo、opo、rollout-correction | — | 无问题 | — | — |

## 手写页

| 页面 | 级别 | 问题 | 原文依据 | 状态 |
|---|---|---|---|---|
| dual-functional-uio66-gd | P0 | TMA 写成均苯三甲酸，实为偏苯三甲酸（1,2,4-） | §2.1；摘要 | 已修正（并行）；本轮同步 `lessons.json` |
| mil101-sba15-lu-y | P0 | SBA-15 接枝的是 1,4-PA 酰胺配体，不是膦酸基团 | §1；§2.1.1.1 | 已修正（并行）；本轮同步 `lessons.json` |
| lanm-protein-process | P0／P1 | Y/Nd 纯度 “>99.7%” 论文未报告；pH 滑块把 2.4–4.3 标成 HREE 洗脱窗；各进料共用错误指标标签 | 图 4D 段落；图 2A；图 5 图注 | 已修正（并行） |
| lanm-protein-process | P2 | Hans-LanM 机制概括为“柔性位点与协同结合” | Hans-LanM 摘要（第二配位层氢键网络） | 已修正 |
| mof-snap-active-learning | P1 | 1700 cm⁻¹ 以下被说成集体骨架运动 | 正文 pp.6–7 VDOS 段 | 已修正（本轮对文章 PDF 复核） |
| pmida-mil101 | P1 | 等温线条件写成 0.2 mmol L⁻¹ | §2.3；图 4 图注 | 已修正（并行） |
| pmida-mil101 | P2 | 1.2 mmol g⁻¹ 时式 4 无法复现 3.71–4.44 | §3.2–3.3；SI 表 S4 | 已在数据核对注记披露 |
| dga-mil101-europium | P1 | 低吸附竞争离子写入 Fe，图 10 无 Fe | 图 10 横轴 | 已修正（并行） |
| dga-mil101-europium | P2 | β 值的条件在正文与 SI 图 S6 不同 | SI §6／图 S6 | 已在页面披露 |
| dtpa-mil101-ammonium | P1 | Zeta 曲线过零点区间描述错误 | 图 3h（放大复读） | 已修正（并行） |
| hkust1-lutetium | P1 | pH 3 值取正文 113.35，图 3a 标注为 111.35 | 图 3a（400 dpi） | 已修正（并行） |
| hkust1-lutetium | P2 | ΔG 随温度变化方向与负 ΔH 矛盾未说明 | 表 2（讲解者复算） | 已补充 |
| moftransformer | P1 | 中文把监督预训练任务写成“无监督式” | ChemRxiv v2 Pre-training | 已修正（并行） |
| moftransformer | P2 | “MLP head” 实为单层全连接头 | 预印本 Methods | 已修正 |
| deeprag | P2 | 开源承诺出自可复现性声明而非结论；两种 T 混为一谈；终止判断箭头顺序；Avg 图未标节选 | p.10；式 3；算法 1；§3.1；表 1 | 已修正；`sources.md` §5.2→§5.4（并行） |
| rag | P2 | 作者推测写成事实（BART 补全、RAG-Token 组合线索）；高亮总是最后一根柱；未标节选基线 | §4.3；表 1–2 | 已修正 |
| self-rag | P2 | 检索来源按任务不同；“六项全部最佳”有 ASQA str-em 例外；英文全角逗号 | §4.3；§5.1；表 2 | 已修正（逗号为并行修正） |
| e5-mistral | P2 | 负例挖掘归到合成模板；低资源解释是作者归因 | 附录 A；§4.4 | 已修正 |
| nv-embed | P2 | “与 MTEB 训练实践重叠”含糊；英文滑块标签含全角冒号（新增的扫描提示发现） | §4.1 | 已修正 |
| frontier-cs | P2 | Structured LWE 没有保留的最终套件 | 附录 A p.24 | 已修正 |
| calf20-flexibility | P2 | “湿烟气”应限定为较低湿度；`#flexibility` 的 `<h2>` 未闭合 | p.1、p.4 | 已修正 |
| uio66-zif8-ree | P2 | 竞争面板公式用未定义的 D | SI 式 11 | 已修正 |
| organophosphorus-mil101 | P2 | 中文未说 H50 为三者最高 | 摘要 | 已修正 |
| mof-stability-three-axes | P2 | 把限制水接近易损键归于网络互穿 | pp.3–4、p.7 | 已修正 |
| water-stable-mof-discovery | P2 | “同一个 MLP 模型”实为每种划分分别训练 | ChemRxiv §2d；SI 表 S10 | 已修正 |
| uio66-dangling-linkers | P2 | C3 是分裂为两组分，不只是展宽 | Results 图 1c 段 | 已修正 |
| water-dual-impact | P2 | 教学能垒用的 TS0 只是水的位置调整 | §2.3；图 3 | 已补充说明 |
| mof-hydrolysis-atomistic | P2 | IRMOF-1 的 1.06×10⁻¹⁰ h 与论文 Eyring 式不符；页首只引预印本 | 表 2；出版记录 | 已补充说明；页首署名已修正（并行） |
| mof-kinetic-stability | P2 | 表 3 与图 5b 对 Cu₂Cl₂BTDD/BBTA 标注不一致 | 表 3 p.716；图 5b p.717 | 已在页面披露 |
| ree-mof-protocol | P2 | ZF4 细胞活力主要随时间而非剂量变化 | 补充图 14 | 已修正 |
| ree-mof-critical-review | P2 | “Ce 检测限”易被读成铈 | §3.3 Kd 公式 | 已修正（并行） |
| water-stability-review | P2 | MIL-100(Fe) 40 次循环后容量略降；“沸水”应为“高温水”；IUPAC 类型 I–VI | SI 表 S5；§4.1；§1.2 | 已修正（并行） |
| hydrolytic-stability-grading | P2 | 证据记录中的磷酸缓冲液定位应为 §5.2 | §5.2 p.3673 | 已修正（仅 `sources.md`） |
| ln-local-coordination、ncu1-nanotraps、hans-lanm-dimer、ree-mof-targeted-review、ree-porous-framework-review、cmpo-mil101-ree、functionalized-cr-mil101、acrylic-mil101-scandium、uio66-buffer-stability、water-stable-mof-design、hydrolytic-stability-benchmark、mil100-water-matrices、defect-phosphate-uio66-yb | — | 无需修改 | — | — |

## 未修改，仅记录

| 页面 | 内容 | 原因 |
|---|---|---|
| atz-btc-zn | 尾矿 “pH 约 5.5”、Langmuir R² 0.831–0.999、合成用量 | Wiley 正文与 SI 返回 403，证据记录无对应条目；需原文确认 |
| lanm-protein-process | 页首 “12 kDa” | 两轮结论冲突（一轮称正文未给出，另一轮称已核对） |
| pmida-mil101 | 11.86% 解吸损失、TCS 所在 SI 表（S10 或 S11）、“高比表面积”措辞 | SI 不可得 |
| moftransformer | “QMOF v13” | ChemRxiv 被 Cloudflare 拦截，正式版付费 |
| boroxine-mof-ree | 表 S10–S12 是否对应赣州样品 | 仅表 S14 写明赣州；正文可能另有说明，未核到 |
| organophosphorus-mil101 | 循环后 P=O 特征“显著减弱”与正文“消失” | 图 S14 近乎平直，现有措辞可辩护 |
| rag | 正文 “17%” 与表 4 的 11.7% | 原文自身不一致，页面采用表格 |
| 付费期刊页（M4、M5 多篇） | 仅见于正文的数值 | 只与页面证据记录核对一致 |

## 限制

- 图中读数（SF 标签、图例颜色、柱高）依据高分辨率渲染或页面中的原图裁切；只有文本抽取的部分不能核对图中独有的值。
- 本轮未进行真人试读；技术检查与科学核对分别记录，互不替代。
