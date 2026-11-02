# GRPO — source and claim ledger

## Source identity

- Primary: [DeepSeekMath: Pushing the Limits of Mathematical Reasoning in Open Language Models](https://arxiv.org/abs/2402.03300v3)
- Adopted version: `2402.03300v3`. Checked 2026-11-02.
- Implementation: [verl grpo](https://github.com/verl-project/verl/blob/3fdf2b548882a8aeccf0842c2150d9c9f1790a55/docs/algo/grpo.md), commit `3fdf2b548882a8aeccf0842c2150d9c9f1790a55`.
- Documentation SHA-256: `d43fb13fba50523c0a39fec81e56bb300dd4468ddfd331b193a9a6bedf646b9c`.
- PDF SHA-256: `6cc20b3c5b8d25b8b53868fc4ec1792c144f07d67bdf7395138efd4422197e7b`.
- Experimental evidence page visually inspected: PDF p. 12; original images are not republished.

## Source locators

§§2–4; §4.1 equations 3–5; Table 5; §5 and Appendix A; verl GRPO Advanced Extensions

## Claim mapping

### background

Source locator: §§2–3 data/pretraining; §4.1 Eqs.3–5

1. DeepSeekMath combines mathematical corpus mining, continued pretraining, instruction tuning, and reinforcement learning. It starts from DeepSeek-Coder-Base-v1.5 7B and mines 120B mathematical tokens. Its final reasoning performance cannot all be attributed to GRPO.

### mechanism

Source locator: §§2–3 data/pretraining; §4.1 Eqs.3–5

1. Sample G answers for a question and score outcomes or intermediate steps. Under outcome supervision, all tokens in an answer share a normalized reward advantage. Process supervision constructs token advantages from subsequent step rewards rather than broadcasting one scalar.

2. Original GRPO averages token losses within each answer and then averages answers, while adding a KL term relative to a reference policy. The reference, old sampling, and current trainable policies have different roles even though no critic is used.

### math

Source locator: §§2–3 data/pretraining; §4.1 Eqs.3–5

1. Ri is answer i’s reward, Ti its valid token count, and ri,t=πθ/πold. Advantages encode relative rank within a group: both all-correct and all-wrong groups lack outcome-reward contrast. The demo uses population standard deviation and explicitly returns zero at zero variance. This concerns the reward gradient; a KL term may still update the policy.

2. DrGRPO is subsequent work: it removes group standard-deviation scaling and replaces per-answer length averaging with a fixed scale. The default token-mean aggregation in verl also differs from the original paper’s equal weighting of sequences. These three settings must be distinguished.

### evidence

Source locator: Table 5; §5 and Appendix A

1. In Table 5’s tool-free CoT results, DeepSeekMath-Instruct 7B scores 46.8% on MATH and the RL model scores 51.7%; GSM8K rises from 82.9% to 88.2%. This compares the instruction and RL stages of the same system.

2. The paper studies online versus offline training, outcome versus process supervision, and iterative RL, alongside code pretraining and corpus quality. The 60.9% self-consistency result uses 64 samples and extra inference compute; it is not the same metric as 51.7% for a single solution.

### limits

Source locator: Interpretive analysis of assumptions and scope in §§2–3 data/pretraining; §4.1 Eqs.3–5; empirical limits in Table 5; §5 and Appendix A

1. Binary-reward standard deviation varies with question difficulty, so normalization implicitly reweights questions. Removing a critic reduces resident-model overhead, but group sampling still costs compute.

### implementation

Source locator: Pinned verl docs/algo/grpo.md; implementation-specific settings

1. verl uses adv_estimator=grpo and group sampling n>1. Inspect loss_agg_mode, norm_adv_by_std_in_grpo, and KL settings before identifying the variant.

## Foundations and reading task

Generate multiple answers to one question and use them as each other’s reference. Rewards [0,0,1,1] have mean 0.5: wrong answers are below the mean, correct answers above it. Dividing by standard deviation rescales the differences by the group’s spread; it creates no new correctness labels.

Question: Why can an all-correct group provide no GRPO update signal?

Answer: All rewards equal their group mean, so centered rewards and standard deviation are zero. The demo sets advantages to zero. Success alone does not identify which answer should become more probable relative to the others.

These are general definitions and worked teaching examples, not experimental observations. Reader comprehension has been editorially reviewed; no human rereading study was conducted.

## Visual and interaction audit

- Method panels: author-method paraphrases, mapped to the method/algorithm locators above; not an experimental workflow run.
- Formula panel: teaching notation, with omitted conditions and approximations explained in both languages.
- Interactive lab: synthetic inputs except the baseline documentation filter. Outputs are deterministic evaluations of the displayed formulas, not measured performance.
- Evidence table (when present): exact transcribed values; the metric, model, comparison conditions, and source page are given beside the table. No values are inferred from plotted curves.
- Limits and implementation notes distinguish paper claims, required assumptions, and later engineering choices.
- Browser and numerical acceptance results are recorded in `reports/verl-validation.md`.
