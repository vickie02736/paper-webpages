# Rollout Correction — source and claim ledger

## Source identity

- Primary: [Rollout Correction](https://verl.readthedocs.io/en/latest/algo/rollout_corr.html)
- Adopted version: `documentation snapshot 2026-11-02`. Checked 2026-11-02.
- Implementation: [verl rollout_corr](https://github.com/verl-project/verl/blob/3fdf2b548882a8aeccf0842c2150d9c9f1790a55/docs/algo/rollout_corr.md), commit `3fdf2b548882a8aeccf0842c2150d9c9f1790a55`.
- Documentation SHA-256: `c569c2652d79c2fba6b4a957de7a8ac99ff96a3b66b867b7b09c07aad5299192`.

## Source locators

verl rollout_corr: Overview, Key Design Principle, Operating Modes, IS/RS configuration; linked author analysis and arXiv:2512.23075

## Claim mapping

### background

Source locator: Usage guide: Three Policies; IS; RS; Bypass versus Decoupled PPO

1. Even identical weights can yield different probabilities across inference and training engines because of precision, kernels, or implementation. Asynchronous sampling also introduces staleness. Treating recomputed training probabilities as actual sampling probabilities confuses two ratios.

### mechanism

Source locator: Usage guide: Three Policies; IS; RS; Bypass versus Decoupled PPO

1. Let μ be the actual rollout policy, πold the PPO anchor, and πθ the current policy. Decoupled mode corrects data with πold/μ and controls PPO updates with πθ/πold. Bypass mode uses μ directly as the anchor.

2. Importance sampling gives continuous weights; rejection sampling provides a keep/drop mask. Truncating weights or excluding outliers limits their influence but changes the estimator. Neither unconditionally removes bias.

### math

Source locator: Usage guide: Three Policies; IS; RS; Bypass versus Decoupled PPO

1. All probabilities must refer to the same prompt, prefix, token, and consistently defined sampling distribution. Importance ratios require positive behavior probability wherever the target has support. A finite weight cannot recover actions excluded by top-k truncation.

2. The demo decomposes ratios at one fixed state. Complete autoregressive trajectories involve prefix distributions, and sequence weights generally multiply conditional ratios; the separate mathematics page develops this distinction.

### evidence

Source locator: Usage guide: presets, diagnostics, implementation notes; no new training results

1. The official usage guide distinguishes decoupled, bypass, and policy-gradient modes and configures IS weights separately from RS masks. This guide checks those branches against documentation and a pinned implementation, without inventing performance bars.

2. Background includes the authors’ training–inference mismatch analysis and Trust Region Masking for Long-Horizon LLM Reinforcement Learning. They supply theory or experiments, but a preset’s suitability for a new model still requires validation.

### limits

Source locator: Interpretive analysis of assumptions and scope in Usage guide: Three Policies; IS; RS; Bypass versus Decoupled PPO; empirical limits in Usage guide: presets, diagnostics, implementation notes; no new training results

1. Correction cannot repair faulty rewards, token misalignment, or missing sampling probabilities. Long sequences can create heavy-tailed products of weights, allowing a few samples to dominate finite-batch gradients.

### implementation

Source locator: Pinned verl docs/algo/rollout_corr.md; implementation-specific settings

1. Establish the source of sampling probabilities before selecting mode, granularity, and thresholds. Monitor weights, rejection rates, and effective sample behavior. Presets and parameter names are tied to the commit recorded in sources.

## Foundations and reading task

Suppose an answer is actually sampled with probability 20%, but the target policy would sample it with probability 30%. An importance weight of 0.3/0.2=1.5 gives it more influence in a weighted average. Distinguish the policy generating data, the old update anchor, and the policy currently learning.

Question: With μ=0.2, πold=0.3, and πθ=0.4, what is the product of the two ratios?

Answer: (0.3/0.2)×(0.4/0.3)=2, equal to current probability divided by sampling probability. The old probability cancels algebraically, but separate clipping or masks change the objective.

These are general definitions and worked teaching examples, not experimental observations. Reader comprehension has been editorially reviewed; no human rereading study was conducted.

## Visual and interaction audit

- Method panels: author-method paraphrases, mapped to the method/algorithm locators above; not an experimental workflow run.
- Formula panel: teaching notation, with omitted conditions and approximations explained in both languages.
- Interactive lab: synthetic inputs except the baseline documentation filter. Outputs are deterministic evaluations of the displayed formulas, not measured performance.
- Evidence table (when present): exact transcribed values; the metric, model, comparison conditions, and source page are given beside the table. No values are inferred from plotted curves.
- Limits and implementation notes distinguish paper claims, required assumptions, and later engineering choices.
- Browser and numerical acceptance results are recorded in `reports/verl-validation.md`.

- [Foundation: Batch size-invariance for policy optimization](https://arxiv.org/abs/2110.00641): Section 2, decoupled clipped and KL-penalized objectives: separate behavior and proximal policies.

- [Later analysis: Trust Region Masking](https://arxiv.org/html/2512.23075v1): Sections 2–5: autoregressive context distributions, sequence-level versus token-level control. The teaching page does not claim to reproduce TRM training.

- [TRM paper study (v5)](../trm/): Related paper study, separately adopts v5 and its qualified guarantee; does not alter this topic’s original v1 source attribution.

- [Batch size-invariance paper study](../batch-size-invariance/): Hilton, Cobbe and Schulman, NeurIPS 2022; separate behavior and proximal policies.
