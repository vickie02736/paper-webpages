# Entropy Mechanism — source and claim ledger

## Source identity

- Primary: [The Entropy Mechanism of Reinforcement Learning for Reasoning Language Models](https://arxiv.org/abs/2505.22617v1)
- Adopted version: `2505.22617v1`. Checked 2026-11-02.
- Implementation: [verl entropy](https://github.com/verl-project/verl/blob/3fdf2b548882a8aeccf0842c2150d9c9f1790a55/docs/algo/entropy.md), commit `3fdf2b548882a8aeccf0842c2150d9c9f1790a55`.
- Documentation SHA-256: `37290607b2ababf5ed32cbfd21bfd51a1fc1c8ba0761c1505079f1ca6710bae1`.
- PDF SHA-256: `8663280efe90c34f801776cbe5051dd3b700327d27940310e3a17f183e5f4f51`.
- Experimental evidence page visually inspected: PDF p. 12; original images are not republished.

## Source locators

§2.4 empirical fit; §3.1 entropy dynamics; §4.1–4.3; Table 2; Figures 9–10

## Claim mapping

### background

Source locator: §2.4 empirical fit; §3.1 entropy dynamics; §4.1–4.2 Eqs.10–14

1. Entropy measures distributional uncertainty, not answer quality. The study observes rapid entropy decline followed by performance saturation in multiple reasoning-RL runs. Its fit R=−a exp(H)+b describes particular training conditions rather than a universal law for all models.

### mechanism

Source locator: §2.4 empirical fit; §3.1 entropy dynamics; §4.1–4.2 Eqs.10–14

1. Softmax probabilities are determined by logits. Updates favoring already-probable actions can concentrate the distribution, whereas increasing rare-action probabilities can raise entropy. The effect depends on the full distribution and update direction, not only one token’s reward.

2. Clip-Cov selectively masks updates for certain high-covariance tokens, while KL-Cov constrains high-covariance tokens. The paper also compares ordinary entropy bonuses and reference KL: stabilizing entropy alone does not guarantee better performance.

### math

Source locator: §2.4 empirical fit; §3.1 entropy dynamics; §4.1–4.2 Eqs.10–14

1. Logs are natural and entropy is in nats. The final expression is a first-order teaching expansion for a small softmax-logit perturbation: substitute dp=p(dz−Epdz) into dH=−Σlog(p)dp. For finite steps, the page computes entropy before and after the update directly rather than treating the approximation as exact.

2. The demo has two actions and controls the initial probability and one logit increment. It explains the direction of entropy change. Full Clip-Cov/KL-Cov additionally require batch statistics, selection thresholds, and a loss definition; the two-action demo does not reproduce reported experiments.

3. Equation 10 defines Cᵢ=(log πᵢ−mean log π)(Aᵢ−mean A) over sampled tokens. Clip-Cov randomly selects a small fraction within a specified covariance range and zeros their gradients. KL-Cov selects a top-ranked fraction and applies an old-to-current-policy KL penalty at those positions (Eqs.11–14). This differs from simply widening PPO’s probability-ratio clip interval.

### evidence

Source locator: §4.3 Table 2 (PDF p.12); Figures 9–10

1. Table 2’s seven-benchmark average for Qwen2.5-32B is 45.8 for GRPO, 47.2 for Clip-Higher, 50.3 for Clip-Cov, and 52.2 for KL-Cov. AIME and AMC use avg@32. The aggregate spans benchmarks and is not a single-dataset accuracy.

2. Different methods lead on different benchmarks: for 32B MATH-500, Clip-Cov scores 87.0 and KL-Cov 84.6. Their tradeoffs differ; aggregate improvements do not imply improvements on every component.

### limits

Source locator: Interpretive analysis of assumptions and scope in §2.4 empirical fit; §3.1 entropy dynamics; §4.1–4.2 Eqs.10–14; empirical limits in §4.3 Table 2 (PDF p.12); Figures 9–10

1. Correlation, curve fitting, and mechanistic analysis have different scopes. High entropy can reflect diverse good answers or ineffective random output. Quality, length, and sampling budget must be evaluated together.

### implementation

Source locator: Pinned verl docs/algo/entropy.md; implementation-specific settings

1. verl provides an entropy-mechanism recipe. Its batch-selection and loss settings should be versioned; changing entropy_coeff alone does not reproduce Clip-Cov.

## Foundations and reading task

With two possible actions, [0.5,0.5] is less predictable than [0.99,0.01]. Entropy quantifies that uncertainty, not correctness. Logits are adjustable scores converted by softmax into probabilities summing to one. Increasing one logit generally increases that action’s probability.

Question: Starting at p=0.5, does increasing only action 1’s logit raise or lower entropy?

Answer: The distribution moves away from uniform toward action 1, lowering entropy. This neither determines whether action 1 is correct nor establishes a performance gain or loss.

These are general definitions and worked teaching examples, not experimental observations. Reader comprehension has been editorially reviewed; no human rereading study was conducted.

## Visual and interaction audit

- Method panels: author-method paraphrases, mapped to the method/algorithm locators above; not an experimental workflow run.
- Formula panel: teaching notation, with omitted conditions and approximations explained in both languages.
- Interactive lab: synthetic inputs except the baseline documentation filter. Outputs are deterministic evaluations of the displayed formulas, not measured performance.
- Evidence table (when present): exact transcribed values; the metric, model, comparison conditions, and source page are given beside the table. No values are inferred from plotted curves.
- Limits and implementation notes distinguish paper claims, required assumptions, and later engineering choices.
- Browser and numerical acceptance results are recorded in `reports/verl-validation.md`.
