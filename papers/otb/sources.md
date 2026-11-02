# OTB — source and claim ledger

## Source identity

- Primary: [The Optimal Token Baseline: Variance Reduction for Long-Horizon LLM-RL](https://arxiv.org/abs/2602.07078v2)
- Adopted version: `2602.07078v2`. Checked 2026-11-02.
- Implementation: [verl otb](https://github.com/verl-project/verl/blob/3fdf2b548882a8aeccf0842c2150d9c9f1790a55/docs/algo/otb.md), commit `3fdf2b548882a8aeccf0842c2150d9c9f1790a55`.
- Documentation SHA-256: `f84c0c13652a3266bbed518321fec7896bf5883b5be47967bfd13ce580dccd4a`.
- PDF SHA-256: `bd012a787932b405658a7eca4d82b85eb300e992d3b25cf2a39eb91880f980fe`.
- Experimental evidence page visually inspected: PDF p. 6; original images are not republished.

## Source locators

§§3–5 equations 6–13; Figure 6; §6 Table 1; Appendices theoretical assumptions and training settings; verl OTB

## Claim mapping

### background

Source locator: §§3–5 Eqs.6–13; Figure 6; §5.3 proxy assumptions

1. Group means assign the same advantage throughout an answer, although token uncertainty and gradient magnitude vary. A global optimal baseline may also depend on energy from future tokens. OTB derives token-level baselines and implements a tractable proxy using forward probabilities.

### mechanism

Source locator: §§3–5 Eqs.6–13; Figure 6; §5.3 proxy assumptions

1. For sampled token y, the gradient of its softmax log probability with respect to logits is one-hot(y)−p. Its squared norm is 1−2p(y)+Σv p(v)². Accumulating these nonnegative quantities through the current token gives a realized-energy proxy.

2. Across answers to the same question, weight the return at a position by accumulated energy. Only valid tokens contribute to the baseline and output advantage; padding EOS from completed answers must not dilute answers still being generated.

### math

Source locator: §§3–5 Eqs.6–13; Figure 6; §5.3 proxy assumptions

1. G is reward-to-go, m the valid-token mask, and ε a numerical stabilizer. The terminal-binary-reward demo propagates the outcome to preceding valid tokens. Dense-reward or multi-turn tool tasks require the appropriate reward-to-go and mask definitions.

2. Logit gradients are not exact full-network gradients. The paper motivates the proxy using the final layer and RMSNorm, and discusses assumptions for extending it through the backbone. Population-baseline theory is distinct from properties of finite-group estimates.

### evidence

Source locator: §6.1 Table 1 (PDF p.6); §6.4; Appendix F

1. Table 1 reports peaks over the full training process. In single-turn Qwen3-8B-Base training, AIME25 scores are 25.31 for GRPO, 27.29 for OPO, and 30.31 for OTB; MATH500 scores are 90.50, 93.31, and 93.43. These are neither a common-step comparison nor final-checkpoint results.

2. Tool-integrated rows use Qwen2.5-7B and a different protocol and must be read separately. Group-size, collapse, and token-consumption analyses provide stability context rather than guaranteeing identical savings across rewards and models.

### limits

Source locator: Interpretive analysis of assumptions and scope in §§3–5 Eqs.6–13; Figure 6; §5.3 proxy assumptions; empirical limits in §6.1 Table 1 (PDF p.6); §6.4; Appendix F

1. Proxy choices, masking, and baseline dependence determine implementation semantics. With group size one, the baseline approaches its own return and learning signal can vanish. Tiny weights and all-padding states require explicit handling.

### implementation

Source locator: Pinned verl docs/algo/otb.md; implementation-specific settings

1. verl requires calculate_sum_pi_squared, and the documentation disables fused kernels that do not expose logits. With rollout IS, energy weights also use squared IS weights. The demo deliberately fixes the on-policy case.

## Foundations and reading task

Answers have different lengths, so short ones receive padding to fit rectangular arrays. Padding is not a generated action and must be excluded. OTB also varies the baseline by token position using a cumulative gradient-energy proxy instead of treating a long response as one uniform object.

Question: If only trajectory 1 has a valid token remaining and its return is 1, what are the baseline and advantages there?

Answer: With one nonzero-weight trajectory, the baseline is 1 and its advantage is zero. Trajectory 2 is padding, with zero weight and advantage. Too few valid samples can therefore eliminate the signal.

These are general definitions and worked teaching examples, not experimental observations. Reader comprehension has been editorially reviewed; no human rereading study was conducted.

## Visual and interaction audit

- Method panels: author-method paraphrases, mapped to the method/algorithm locators above; not an experimental workflow run.
- Formula panel: teaching notation, with omitted conditions and approximations explained in both languages.
- Interactive lab: synthetic inputs except the baseline documentation filter. Outputs are deterministic evaluations of the displayed formulas, not measured performance.
- Evidence table (when present): exact transcribed values; the metric, model, comparison conditions, and source page are given beside the table. No values are inferred from plotted curves.
- Limits and implementation notes distinguish paper claims, required assumptions, and later engineering choices.
- Browser and numerical acceptance results are recorded in `reports/verl-validation.md`.
