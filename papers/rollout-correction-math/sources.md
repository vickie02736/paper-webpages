# Rollout Correction Math — source and claim ledger

## Source identity

- Primary: [Rollout Correction Math](https://verl.readthedocs.io/en/latest/algo/rollout_corr_math.html)
- Adopted version: `documentation snapshot 2026-11-02`. Checked 2026-11-02.
- Implementation: [verl rollout_corr_math](https://github.com/verl-project/verl/blob/3fdf2b548882a8aeccf0842c2150d9c9f1790a55/docs/algo/rollout_corr_math.md), commit `3fdf2b548882a8aeccf0842c2150d9c9f1790a55`.
- Documentation SHA-256: `da6b8d6b7d2c872f9dcb983f29de3f906b1eef625f6af4d4b8ad908b0458b2f4`.

## Source locators

verl rollout_corr_math §§1.1–2.4 and Algorithmic Components; author blog series Parts 1–3; arXiv:2512.23075

## Claim mapping

### background

Source locator: Math guide §§1.1–1.3 and §2; Hilton et al. §2; TRM §§2–5

1. Comparing only the final token’s conditional probability generally cannot correct a whole trajectory distribution. In autoregressive generation the state is the generated prefix, whose probability depends on earlier actions.

### mechanism

Source locator: Math guide §§1.1–1.3 and §2; Hilton et al. §2; TRM §§2–5

1. If the target π is supported by behavior distribution μ, then Eπ[f]=Eμ[(π/μ)f]. With the same initial distribution and transitions, environment factors cancel from a trajectory-density ratio, leaving a product of action-probability ratios.

2. Three-policy decoupling factors πθ/μ into πθ/πold and πold/μ. PPO clipping already changes the original importance-sampling objective. Additional weight truncation or rejection masks introduce further approximations that should be identified separately.

### math

Source locator: Math guide §§1.1–1.3 and §2; Hilton et al. §2; TRM §§2–5

1. Summing in log space reduces numerical overflow but does not eliminate statistical heavy tails. ESS diagnoses concentration of batch weights; it is not an exact count of independent correlated samples. It is undefined when all weights are zero.

2. The demo assumes an identical conditional ratio at each step and varies ratio and length to show token, sequence-product, and truncated weights. This illustrates scale; it neither assumes real LLM ratios are constant nor represents a training curve.

### evidence

Source locator: Math guide §§3–4: aggregation, rejection, and diagnostics; no new training results

1. The document develops REINFORCE, PPO, and the three-policy framework. Token-level correction may be an engineering bias–stability compromise. Correct conditional ratios alone do not make a full-trajectory estimator unbiased.

2. The authors’ analysis discusses bias, variance associated with χ² divergence, and long-sequence tail risk. Mathematical identities, conditional derivations, and implementation heuristics are separated here; sliders evaluate only the stated formulas.

### limits

Source locator: Interpretive analysis of assumptions and scope in Math guide §§1.1–1.3 and §2; Hilton et al. §2; TRM §§2–5; empirical limits in Math guide §§3–4: aggregation, rejection, and diagnostics; no new training results

1. Clipping can reduce variance while adding bias; self-normalized IS also has finite-sample bias. Actual updates involve advantage estimation, parameter dependence, and stop-gradient choices, so checking the weight formula alone is not a correctness proof.

### implementation

Source locator: Pinned verl docs/algo/rollout_corr_math.md; implementation-specific settings

1. Cross-linked to the usage guide. πold is the PPO anchor rather than a long-term reference policy; keep that distinction when mapping symbols to code.

## Foundations and reading task

A conditional probability describes the next token given the text already generated. A sequence probability multiplies those conditional probabilities. Small per-step probability differences can accumulate over a long answer. Logarithms turn products into sums, improving arithmetic without removing statistical risk.

Question: If each token ratio is 1.1, is the weight of a 20-step sequence still 1.1?

Answer: No. The sequence weight is 1.1²⁰≈6.7275. Capping it at 3 limits the sample’s contribution but changes the weighted expectation and generally introduces bias.

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
