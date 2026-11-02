# DRO — source and claim ledger

## Source identity

- Primary: [Offline Regularised Reinforcement Learning for Large Language Models Alignment](https://arxiv.org/abs/2405.19107v1)
- Adopted version: `2405.19107v1`. Checked 2026-11-02.
- Implementation: [verl dro](https://github.com/verl-project/verl/blob/3fdf2b548882a8aeccf0842c2150d9c9f1790a55/docs/algo/dro.md), commit `3fdf2b548882a8aeccf0842c2150d9c9f1790a55`.
- Documentation SHA-256: `189efbee81d5ae55252684867e8b64da391fc0d711f57f734e175bb58c28a0a1`.
- PDF SHA-256: `26a3bd02786e1ca349f55abe4e233f73d7dad99c48d57aaecb67b3af6ab80173`.
- Experimental evidence page visually inspected: PDF p. 8; original images are not republished.

## Source locators

§3.1–3.3 equations 1–8; §4.1 Figures 1–5; Appendices B/C; verl compute_policy_loss_dro

## Claim mapping

### background

Source locator: §§3.1–3.3 Eqs.1–8; verl compute_policy_loss_dro

1. DPO usually needs preference pairs, whereas a user’s rating often concerns one answer. Richemond and colleagues study offline feedback with joint policy and soft-value learning. This is distinct from similarly named pointwise-alignment or diffusion-model methods.

### mechanism

Source locator: §§3.1–3.3 Eqs.1–8; verl compute_policy_loss_dro

1. The KL-regularized optimum satisfies π*∝πref exp(r/τ), with normalizer exp(V*/τ). Taking logs relates reward, soft value, and the policy log ratio; DRO minimizes the squared residual of that relationship.

2. Original DRO-V learns both Vϕ and πθ. Its policy derivative can be rewritten using a reward-minus-value log-probability term and a quadratic log-ratio penalty. verl receives externally constructed advantages; its loss does not automatically train the paper’s value network.

### math

Source locator: §§3.1–3.3 Eqs.1–8; verl compute_policy_loss_dro; Appendix B Eq.15 and Algorithm 2 (DRO-P)

1. R is scalar feedback, τ>0 a regularization scale, and Vϕ approximates a policy-dependent soft value. Arbitrarily replacing it with a mean does not preserve the objective. The second expression uses verl notation; the caller must establish the roles of πold and the original πref.

2. The demo fixes A and the old probability and varies current probability and β to show reward, quadratic, and total terms. It compares a single-token objective with fixed advantages, not DRO-V’s value learning, offline distribution, or full training.

3. Appendix B also proposes DRO-P. Eliminating the optimal soft value yields a conditional variance of the residual. Estimating that variance exactly requires multiple responses per prompt; practical Algorithm 2 approximates it across a batch to accommodate single-response data (Eq.15). DRO-V, DRO-P’s batch approximation, and verl’s externally supplied advantages are distinct; similar objective expressions do not establish implementation equivalence.

### evidence

Source locator: §4.1 Figures 1–5 (PDF pp.8–9); Appendices B/C

1. Figures 1/2 report pairwise evaluation of T5-L and T5-XL in the UltraFeedback setting: DRO-V versus KTO wins 63.4%±1.0% and 57.5%±0.8%. Errors are standard deviations over five evaluation folds of 1,000 prompts, not confidence intervals.

2. Section 4.1 and appendices study policy/value learning rates, regularization, initialization, and parameter sharing. KTO receives a regularization search while DRO-V uses a default. Findings support the reported models and evaluation, not current large-model verl runs.

### limits

Source locator: Interpretive analysis of assumptions and scope in §§3.1–3.3 Eqs.1–8; verl compute_policy_loss_dro; empirical limits in §4.1 Figures 1–5 (PDF pp.8–9); Appendices B/C

1. Offline coverage, reward quality, and value-approximation error still matter. The quadratic term penalizes sampled log ratios, not exact full-distribution KL, and alone does not guarantee stability for arbitrary off-policy data.

### implementation

Source locator: Pinned verl docs/algo/dro.md; implementation-specific settings

1. verl requires loss_mode=dro and dro_beta>0; the caller constructs advantages. Sources record both paper and code objectives so external inputs are not mistaken for automatically supplied components.

## Foundations and reading task

Preference pairs rank two answers to one prompt; single-response feedback rates or approves just one answer. DRO studies learning from the latter. A reference policy supplies a probability anchor, regularization discourages deviation, and the soft value is a learned prompt- and policy-related quantity rather than an arbitrary constant.

Question: When current and old probabilities match, what is the quadratic log-ratio penalty? Is the whole objective also zero?

Answer: log(π/πold)=log 1=0, so the penalty vanishes. The reward term log π·A is generally nonzero; zero penalty does not imply zero learning signal.

These are general definitions and worked teaching examples, not experimental observations. Reader comprehension has been editorially reviewed; no human rereading study was conducted.

## Visual and interaction audit

- Method panels: author-method paraphrases, mapped to the method/algorithm locators above; not an experimental workflow run.
- Formula panel: teaching notation, with omitted conditions and approximations explained in both languages.
- Interactive lab: synthetic inputs except the baseline documentation filter. Outputs are deterministic evaluations of the displayed formulas, not measured performance.
- Evidence table (when present): exact transcribed values; the metric, model, comparison conditions, and source page are given beside the table. No values are inferred from plotted curves.
- Limits and implementation notes distinguish paper claims, required assumptions, and later engineering choices.
- Browser and numerical acceptance results are recorded in `reports/verl-validation.md`.

- [Code verification: compute_policy_loss_dro](https://github.com/verl-project/verl/blob/3fdf2b548882a8aeccf0842c2150d9c9f1790a55/verl/trainer/ppo/core_algos.py): Function compute_policy_loss_dro: beta>0; pg_losses=−(log_prob*advantages−0.5*beta*log_ratio.square()); response-mask aggregation and optional IS weights.
