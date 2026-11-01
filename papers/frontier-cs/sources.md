# FrontierCS 2 — evidence and visual inventory

Reviewed 2026-11-01. Main version: Mang, Chai et al., **FrontierCS 2: A Benchmark for Computer Science R&D**, arXiv:2610.29932v1, submitted 2026-10-21. This is an educational explainer, not an independent benchmark replication.

## Primary sources

1. [Paper full text, version 1](https://arxiv.org/html/2610.29932v1), including Appendix D (statistical model and fitting).
2. [Official site](https://frontier-cs.org/), snapshot marked updated 2026-10-31. Its live leaderboard is not reproduced.
3. [Official evaluation repository](https://github.com/FrontierCS/FrontierCS-2), README “How a task works”, task layout, train/store-final/final interfaces. Accessed 2026-11-01.
4. [Original FrontierCS paper](https://arxiv.org/abs/2512.15699v1), abstract: 156 open-ended algorithmic/research problems.
5. [Original benchmark v1.1 website](https://frontier-cs.org/v1/), accessed 2026-11-01: 179 algorithmic problems, changed scoring, scores not comparable to v1.0. This is a later snapshot, not the original paper's problem count.

## Claims and locations

- `glance`: 48 tasks, 13 domains — paper abstract and §1. Five-hour wall-clock budget — §4 and repository README. Publication metadata — arXiv version record. These numbers describe the public evaluated release, not the unreleased private set.
- `question`: problem statement/program vs repository/patch — Table 1, §§1–2. Version distinction comes from sources 4–5; no original-version results are ranked against version 2.
- `pipeline`: subtract contribution, retain dependencies/interfaces, restrict editable files — §3 and Fig. 2 caption. Structured LWE exception explicitly retained (§3 footnote 1). Agent/judge isolation, development score and sanitized message, final selection by agent, missing final = 0 — §4, Fig. 3 caption, repository README. Five-hour iteration and task feedback caps follow README.
- `pass`: thresholds — §3 SVG-EAR example: latency ≤0.96 reference; PSNR tolerance 0.25 dB; SSIM 0.01; LPIPS 0.005. All-workload/all-metric condition — §§4–5.1. “Beats” means meeting the task threshold, not strict numerical dominance in every metric.
- `evidence`: 12 reported agents, once per task — §§1, 5.1. Highest reported run pass rate 58%, Claude Opus 5.5/Claude Code; 16 tasks with no passing agent — abstract/§1. No exact per-agent results inferred from bar heights.
- SVG-EAR case — §6.3, Fig. 10 caption: GPT-6 Astra faster on every clip and closer to full attention on average, but misses quality on two clips. No unreported point coordinates redrawn.
- BBQ case — §6.2, Fig. 9 caption: register-based counters, faster circuit, largest passing circuit by lookup-table count on largest tested tree; final score ignores size. No unverified speedup displayed.
- QuarterPIR case — §6.1, Fig. 8 caption: two-checksum mechanism, client knows the two groups that may differ, privacy preserved under task constraint, contribution not fully captured by pass or final score. No new cryptographic guarantee claimed.
- `fci`: §5.2 and Appendix D steps 2–5, 9–11, Eqs. (1)–(7), Table 4. Group duplicate outcomes; normalize score margins; share run effect; conditional logistic probability; Kimi K2.7 anchor; ten FCI points = one logit; FDI uses probability of ALL groups integrated over the shared run effect, NOT one metric group's logistic probability.
- Appendix D details retained: reference median over runs, task score spread selection rule delegated explicitly to appendix; scale floor 5.78; failed positive margin censored at ≥0; exact tie omits margin term; 500 task-bootstrap refits with hyperparameters fixed, 90% FCI intervals; FDI intervals computed separately, not attributed to the same bootstrap.
- `limits`: budget truncation counts unfinished runs as missing-final/zero, NOT best-so-far patch — §5.3 and Appendix D step 12. More than 100 private tasks — abstract and §7. Generalisation boundaries and recommended reading unit are explicitly explainer analysis; unscored area limitation is reported in §§6.2, 7.

## Visual and interaction inventory

1. Numeric overview cards (`glance`): original counts and time budget, no implied quantitative bar scale. Checked against sources above.
2. Four-step HTML method diagram (`pipeline`, all four selectable states): teaching schematic. Build → edit/development feedback → choose final → hidden final. Feedback loop expressed in text, not mistaken for model training; hidden reference stays with judge. All state explanations checked in Chinese and English.
3. Two-clip pass-rule lab (`pass`): **invented teaching inputs**, not recorded model outputs or a complete judge. Clip A fixed ratio 0.90 and PSNR difference −0.10 dB; clip B ratio adjustable 0.80–1.10 and PSNR difference −0.50–0 dB. Mean is arithmetic over two clips. Partial check is conjunction of A/B latency ≤0.96 and PSNR ≥−0.25; range restricts differences to nonpositive values. SSIM, LPIPS and other workloads explicitly omitted; four-check success never claims real task PASS. At default B=(0.94,−0.35), mean=(0.92,−0.225), yet B fails quality. At B=(0.96,−0.25) all four checks meet thresholds. At (1.10,0), latency fails. Reset restores default. Readouts use fixed units, no empirical total score.
4. Evidence cards and case-study details (`evidence`): no reconstructed experimental chart, no invented missing model results. 58% retained at reported precision.
5. FCI equation and probability bar (`fci`): teaching evaluation of p=logistic(z); linear bar on 0–100% probability scale, generated from same p as readout. z=−3,0,3 yields about 4.7%,50.0%,95.3%. Conditional on a single group's z; explicitly NOT full task probability, fitted FCI or calibrated forecast. Odds multiplier applies with same run effect.
6. Research formulas and expanded statistical description (`fci details`): explanatory notation maps to Appendix D, no equation-number claim for a modified full likelihood. No fitting executed locally.

No external image reader, simulated physical system, training pipeline, attention heatmap or unlabelled experimental data. Image-loading/rapid-image-switch tests therefore not applicable.
