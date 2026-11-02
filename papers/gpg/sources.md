# GPG — source and claim ledger

## Source identity

- Primary: [GPG: A Simple and Strong Reinforcement Learning Baseline for Model Reasoning](https://arxiv.org/abs/2504.02546v4)
- Adopted version: `2504.02546v4`. Checked 2026-11-02.
- Implementation: [verl gpg](https://github.com/verl-project/verl/blob/3fdf2b548882a8aeccf0842c2150d9c9f1790a55/docs/algo/gpg.md), commit `3fdf2b548882a8aeccf0842c2150d9c9f1790a55`.
- Documentation SHA-256: `6dd7057afb564295c94f2f92e05e7d57f9a6e25de24af8088b0290f896f6ca04`.
- PDF SHA-256: `023f1aeb679c9dfe117f23963b9787f750a7261e9793a012842775139fb38745`.
- Experimental evidence page visually inspected: PDF p. 4; original images are not republished.

## Source locators

§2.2 equations 5–8; Table 1 (PDF p.4); §3 experiments and ablations; Appendix A

## Claim mapping

### background

Source locator: §2.2 Eqs.5–8; advantage normalization and AGE

1. In GRPO, groups with identical rewards contribute no within-group gradient, while standard-deviation normalization changes question weighting. GPG v4 studies a direct log-probability objective, informative-gradient scaling, and thresholding for extreme batches. It is more than a renamed GRPO.

### mechanism

Source locator: §2.2 Eqs.5–8; advantage normalization and AGE

1. Center each question’s rewards by its group mean without mandatory division by the group standard deviation. With fixed advantages, use the loss −logπ·A. The original method omits a critic, reference model, and PPO probability-ratio clipping.

2. If some groups are all correct or all wrong, the authors use α=B/(B−M) to recover the mean-gradient scale over informative samples. B and M must use consistent counting units; variable sequence lengths and distributed aggregation additionally require checking actual weights.

### math

Source locator: §2.2 Eqs.5–8; advantage normalization and AGE

1. B is the batch sample count and M the uninformative count. If all groups are degenerate, B−M=0; division is invalid. The demo marks no learning signal and sets the effective update to zero rather than displaying infinity.

2. With equal group sizes, group counts illustrate the same scaling. α corrects effective batch magnitude. Degenerate-group selection, finite-sample baselines, and data reuse still affect the estimator, so it should not be described unconditionally as unbiased for the original population objective.

### evidence

Source locator: Table 1 (PDF p.4); §3 experiments and ablations

1. In Table 1’s five-task mean for Qwen2.5-Math-7B, GPG without standard-deviation scaling or AGE scores 43.9; adding AGE gives 47.8 and adding the threshold setting gives 48.3. Removing normalization alone does not yield the full improvement.

2. The baseline row is printed as GPRO, interpreted as GRPO from the surrounding text; this transcription note is retained. Multimodal experiments use other models and datasets and are not merged with the five-task mathematical average.

### limits

Source locator: Interpretive analysis of assumptions and scope in §3 Eqs.5–7; advantage normalization and AGE; empirical limits in Table 1 (PDF p.4); §4 ablations

1. When few samples are informative, α can amplify noise; thresholding and global aggregation matter. A direct objective does not automatically correct stale-policy data and should be understood alongside rollout correction.

### implementation

Source locator: Pinned verl docs/algo/gpg.md; implementation-specific settings

1. verl uses adv_estimator=gpg and loss_mode=gpg. This guide reads arXiv v4; an earlier documentation summary does not establish implementation of every v4 ablation setting.

## Foundations and reading task

A gradient indicates which small parameter changes increase an objective. GPG multiplies log-probability gradients by within-group relative scores. Rewards [0,0,1,1] give centered signals [−0.5,−0.5,0.5,0.5]. A batch multiplier changes overall strength; it does not create new correctness labels.

Question: What is α for B=8 and M=4? What if M=8?

Answer: α=8/(8−4)=2. At M=8 no informative group remains and the denominator is zero, so the update should be skipped. An infinite multiplier does not mean stronger learning.

These are general definitions and worked teaching examples, not experimental observations. Reader comprehension has been editorially reviewed; no human rereading study was conducted.

## Visual and interaction audit

- Method panels: author-method paraphrases, mapped to the method/algorithm locators above; not an experimental workflow run.
- Formula panel: teaching notation, with omitted conditions and approximations explained in both languages.
- Interactive lab: synthetic inputs except the baseline documentation filter. Outputs are deterministic evaluations of the displayed formulas, not measured performance.
- Evidence table (when present): exact transcribed values; the metric, model, comparison conditions, and source page are given beside the table. No values are inferred from plotted curves.
- Limits and implementation notes distinguish paper claims, required assumptions, and later engineering choices.
- Browser and numerical acceptance results are recorded in `reports/verl-validation.md`.
