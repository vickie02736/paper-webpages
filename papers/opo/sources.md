# OPO — source and claim ledger

## Source identity

- Primary: [On-Policy RL with Optimal Reward Baseline](https://arxiv.org/abs/2505.23585v2)
- Adopted version: `2505.23585v2`. Checked 2026-11-02.
- Implementation: [verl opo](https://github.com/verl-project/verl/blob/3fdf2b548882a8aeccf0842c2150d9c9f1790a55/docs/algo/opo.md), commit `3fdf2b548882a8aeccf0842c2150d9c9f1790a55`.
- Documentation SHA-256: `b6a574fc42a6585c347535753e8a0c3df9c9ff5d56edd66cfac2ec8757d9a8fb`.
- PDF SHA-256: `bc324dd15fade123c4e74f17a6fc9b33e29dfe57f84ef58d42959244085aefac`.
- Experimental evidence page visually inspected: PDF p. 6; original images are not republished.

## Source locators

§3.1–3.3 equations 5–12; Algorithm 1; §4.1–4.2 Tables 1/2; Appendix A

## Claim mapping

### background

Source locator: §3 optimal baseline, Eqs.7–12; Appendix A

1. A baseline is more than an average score. Trajectories have different gradient magnitudes, so a simple mean need not minimize estimator variance. Repeatedly updating on one batch also breaks exact sampling from current parameters and can increase policy drift. OPO studies both issues.

### mechanism

Source locator: §3 optimal baseline, Eqs.7–12; Appendix A

1. For a fixed prompt, the optimal scalar baseline weights rewards by squared score-function gradient norms. Computing a separate gradient for each trajectory is costly, so the authors assume approximately orthogonal token gradients with similarly distributed norms.

2. Under these approximations, trajectory energy is proportional to length and the baseline becomes a length-weighted reward. Sample a group for each prompt, form advantages, and perform a current-policy update. The original setting omits standard-deviation normalization, KL, and entropy regularization.

### math

Source locator: §3 optimal baseline, Eqs.7–12; Appendix A

1. Let g=∇logπ. Differentiating E[‖g‖²(R−b)²] with respect to b and setting it to zero gives the first expression, under conditions ensuring the baseline preserves the expected gradient. The second is the authors’ length approximation and finite-group estimate, not the exact optimum for every neural network.

2. Equal lengths recover the ordinary mean; identical rewards yield zero advantages. Including a sample in its own baseline estimate creates finite-sample dependence, so population-level theory should not be transferred unqualified to every small group.

### evidence

Source locator: §4.2 Tables 1–2 (PDF p.6); Appendix B

1. Table 2 uses exact on-policy training from the same SFT starting point and compares baseline settings. AIME 2024 pass@1 is 67.96% for GRPO and 68.50% for OPO; AIME 2025 pass@1 is 50.21% and 50.00%, so OPO does not lead everywhere.

2. AIME 2025 pass@16 is 81.33% versus 85.33%. Results average the final five checkpoints. Pass@16 estimates at least one success, not single-output accuracy or majority-vote performance.

### limits

Source locator: Interpretive analysis of assumptions and scope in §3 optimal baseline, Eqs.7–12; Appendix A; empirical limits in §4.2 Tables 1–2 (PDF p.6); Appendix B

1. Length is an energy proxy and gradient correlations can invalidate the approximation. Exact on-policy training restricts reuse, creating throughput and sample-efficiency tradeoffs. Table 1’s on/off-policy comparison also changes entropy regularization, so it is not a one-factor comparison.

### implementation

Source locator: Pinned verl docs/algo/opo.md; implementation-specific settings

1. verl uses adv_estimator=opo. Verify that one sampled batch corresponds to one optimization update; matching nominal minibatch and batch numbers alone does not establish exact on-policy behavior.

## Foundations and reading task

Policy gradients adjust generation probabilities using scores. Subtracting an appropriate baseline can reduce random update fluctuations while preserving the desired signal. An ordinary mean weights answers equally; a weighted mean divides the weighted sum by total weight. Rewards [0,1] with lengths [10,30] give a length-weighted baseline of 30/40=0.75.

Question: How does the length-weighted baseline compare with the ordinary mean when all answers have equal length?

Answer: The common length cancels between numerator and denominator, giving the ordinary mean. Unequal lengths change weights, but proximity to the optimum still depends on the gradient-proxy assumptions.

These are general definitions and worked teaching examples, not experimental observations. Reader comprehension has been editorially reviewed; no human rereading study was conducted.

## Visual and interaction audit

- Method panels: author-method paraphrases, mapped to the method/algorithm locators above; not an experimental workflow run.
- Formula panel: teaching notation, with omitted conditions and approximations explained in both languages.
- Interactive lab: synthetic inputs except the baseline documentation filter. Outputs are deterministic evaluations of the displayed formulas, not measured performance.
- Evidence table (when present): exact transcribed values; the metric, model, comparison conditions, and source page are given beside the table. No values are inferred from plotted curves.
- Limits and implementation notes distinguish paper claims, required assumptions, and later engineering choices.
- Browser and numerical acceptance results are recorded in `reports/verl-validation.md`.
