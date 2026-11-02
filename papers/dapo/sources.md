# DAPO — source and claim ledger

## Source identity

- Primary: [DAPO: An Open-Source LLM Reinforcement Learning System at Scale](https://arxiv.org/abs/2503.14476v2)
- Adopted version: `2503.14476v2`. Checked 2026-11-02.
- Implementation: [verl dapo](https://github.com/verl-project/verl/blob/3fdf2b548882a8aeccf0842c2150d9c9f1790a55/docs/algo/dapo.md), commit `3fdf2b548882a8aeccf0842c2150d9c9f1790a55`.
- Documentation SHA-256: `4ad9287e2d91dcf492e4a83f3711df4206d20444e5006c03f92208d7d14de0f9`.
- PDF SHA-256: `f01e4fd347530cadd68e5c36b1998532a6d1adb272c817e73b927453c26e9d79`.
- Experimental evidence page visually inspected: PDF p. 9; original images are not republished.

## Source locators

§§3.1–3.4 equations 8–14; Algorithm 1; §4.1–4.3 Table 1; verl DAPO FAQ

## Claim mapping

### background

Source locator: §§3.1–3.4 Eqs.8–14; Algorithm 1

1. Naive GRPO can suffer entropy collapse, an increasing share of zero-advantage groups, imbalanced long-answer weighting, and reward noise from truncation. DAPO contributes a reproducible training system and its components, rather than only a new loss.

### mechanism

Source locator: §§3.1–3.4 Eqs.8–14; Algorithm 1

1. Clip-Higher separates εlow and εhigh, increasing upward room for positively advantaged actions. Dynamic sampling filters all-correct or all-wrong reward groups and resamples until enough informative prompts are collected, changing batch composition and incurring extra generation.

2. Averaging all valid tokens avoids the extra dilution imposed on tokens in long answers by per-answer averaging. Overlong filtering and soft punishment address truncation noise through different mechanisms: one changes the loss mask, the other changes the reward.

### math

Source locator: §§3.1–3.4 Eqs.8–14; Algorithm 1

1. The first expression suppresses sampling conditions and reward-model details to highlight aggregation. The second is a teaching form for the buffer: L is maximum length, B buffer width, T generated length, and penalty coefficient one. Hard truncation and its mask are handled separately.

2. For binary correctness, dynamic sampling keeps groups with 0<number correct<G. General real-valued rewards require checking within-group variation rather than applying a correctness threshold. The demo shows clipping, group retention, and length penalty together.

### evidence

Source locator: §4.2 Table 1; §4.3 training dynamics

1. Table 1 progressively adds techniques on Qwen2.5-32B, increasing AIME 2024 avg@32 from 30 for naive GRPO to 50 for full DAPO. This is not an independent leave-one-component-out ablation; each difference depends on earlier components.

2. The paper’s 50 and the verl reproduction table’s 52 belong to different records; this page uses Table 1 of paper v2. Fewer training steps do not automatically mean proportionally fewer GPU hours because sampling and sequence length matter.

### limits

Source locator: Interpretive analysis of assumptions and scope in §§3.1–3.4 Eqs.8–14; Algorithm 1; empirical limits in §4.2 Table 1; §4.3 training dynamics

1. The heuristics interact and their gains depend on model, data, and context budget. A larger upper clipping boundary is not a theorem guaranteeing better exploration or preventing entropy collapse for every model.

### implementation

Source locator: Pinned verl docs/algo/dapo.md; implementation-specific settings

1. Inspect clip_ratio_low/high, filter_groups, token-mean, and overlong_buffer. The verl recipe does not make every filtering experiment in the paper an identical default.

## Foundations and reading task

A language model generates tokens probabilistically, producing answers of different lengths. Training increases the probability of relatively good answers. Clipping limits a sample’s incentive in the objective; filtering decides whether it contributes; a penalty changes its score. These act at different stages and are not interchangeable.

Question: With teaching values L=100 and B=20, what is the penalty at length 90? Does it keep an all-correct group?

Answer: The length penalty is −(90−80)/20=−0.5. Group filtering is separate: under the demo’s binary-correctness rule, an all-correct group is still dropped.

These are general definitions and worked teaching examples, not experimental observations. Reader comprehension has been editorially reviewed; no human rereading study was conducted.

## Visual and interaction audit

- Method panels: author-method paraphrases, mapped to the method/algorithm locators above; not an experimental workflow run.
- Formula panel: teaching notation, with omitted conditions and approximations explained in both languages.
- Interactive lab: synthetic inputs except the baseline documentation filter. Outputs are deterministic evaluations of the displayed formulas, not measured performance.
- Evidence table (when present): exact transcribed values; the metric, model, comparison conditions, and source page are given beside the table. No values are inferred from plotted curves.
- Limits and implementation notes distinguish paper claims, required assumptions, and later engineering choices.
- Browser and numerical acceptance results are recorded in `reports/verl-validation.md`.
