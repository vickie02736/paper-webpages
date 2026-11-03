# DPPO — source and claim ledger

## Source identity

- Primary: [Rethinking the Trust Region in LLM Reinforcement Learning](https://arxiv.org/abs/2602.04879v3)
- Adopted version: `2602.04879v3`. Checked 2026-11-02.
- Implementation: [verl dppo](https://github.com/verl-project/verl/blob/3fdf2b548882a8aeccf0842c2150d9c9f1790a55/docs/algo/dppo.md), commit `3fdf2b548882a8aeccf0842c2150d9c9f1790a55`.
- Documentation SHA-256: `293272e4588b437a8ef70c2ecf29c28c6fc9dd990c71e6e2a696f7aff8b75ad2`.
- PDF SHA-256: `e27a6333f8e3b7790145d25e1be19bf7e6164c9c4ae1651ccc2640bf8302eb3c`.
- Experimental evidence page visually inspected: PDF p. 24; original images are not republished.

## Source locators

§§3–4.4 equations 11–16; §7; Appendix B; Appendix F.3–F.5; Table 2

## Claim mapping

### background

Source locator: §§3–4.4 Eqs.11–16; Appendix B

1. Relative change and distributional change differ. Moving a probability from 0.001 to 0.002 doubles its ratio while moving little mass. A smaller relative change to a common action can move much more mass. The paper revisits trust-region bounds for finite-horizon language-model tasks.

### mechanism

Source locator: §§3–4.4 Eqs.11–16; Appendix B

1. Full-vocabulary divergence is expensive. The Binary approximation groups the sampled token against the rest of the vocabulary; Top-K retains more probability information. These coarse-grained divergences lower-bound the full divergence rather than measuring it exactly.

2. The mask also considers advantage direction: it suppresses a term outside the divergence threshold when the beneficial update would move further from the rollout policy μ, while allowing updates back toward the anchor. DPPO here means Divergence PPO, not Diffusion Policy Optimization.

### math

Source locator: §§3–4.4 Eqs.11–16; Appendix B

1. p is the rollout (behavior) policy μ’s probability of the sampled token and q the current training policy π’s probability; KL runs from μ to π. The paper anchors the trust region to the original rollout policy μ, not a recomputed old training-policy probability (§5.2 Takeaway 2; Appendix E). The demo keeps probabilities inside (0,1) to avoid log(0), displaying r=q/p, Binary-TV, Binary-KL, and the update mask. Thresholds use different scales and are not equivalent strengths.

2. The theoretical bound, divergence approximation, and practical dynamic mask are three levels. A lower bound above a threshold indicates substantial true change, but a small lower bound does not prove the full-policy divergence is small.

### evidence

Source locator: §7; Appendix F.1 Table 2 (PDF p.24), F.3–F.5

1. Mathematical-RL experiments on Qwen3-30B-A3B-Base compare router-replay settings, LoRA, and several objectives. Training stability and inference–training mismatch should be read together rather than selecting only peak points.

2. Appendix F.3 compares Binary and Top-K, F.4 studies threshold sensitivity, and F.5 extends models and tasks. Table 2 separately reports RLHF on Qwen3-4B-Instruct-2507 with UltraFeedback (Table 2 states UltraFeedback; the §7.2 text and Figure 10 caption say HH-RLHF). The original evidence page is linked rather than inventing exact values from curves.

3. Table 2 uses step-150 checkpoints: length-controlled win rates are 59.39%, 77.05%, and 80.90% for the initial model, GRPO, and DPPO. Later checkpoints earn higher training rewards but worse AlpacaEval scores, showing that learned rewards and external evaluation are not interchangeable.

### limits

Source locator: Interpretive analysis of assumptions and scope in §§3–4.4 Eqs.11–16; Appendix B; empirical limits in §7; Appendix F.1 Table 2 (PDF p.24), F.3–F.5

1. Approximate divergences can miss changes elsewhere in the vocabulary, and thresholds require task-specific validation. Experimental coverage is not a universal guarantee; theoretical assumptions remain distinct from approximations in neural implementations.

### implementation

Source locator: Pinned verl docs/algo/dppo.md; implementation-specific settings

1. The verl documentation implements Binary-TV and Binary-KL (loss_mode=dppo_tv/dppo_kl). Top-K is in the original repository and should not be presented as an available verl configuration.

## Foundations and reading task

Increasing an action’s probability from 1% to 2% doubles its ratio but moves one percentage point. Reducing 80% to 60% changes the ratio less while moving twenty points. Divergence measures distributional change; the binary approximation groups the chosen token against every other token.

Question: With p=0.05, q=0.1, A>0, and TV threshold 0.1, do both DPPO and PPO with ε=0.2 suppress the term?

Answer: PPO sees ratio 2 above 1.2 and plateaus. Binary-TV is |0.05−0.1|=0.05, below 0.1, so DPPO permits the term. This compares specified thresholds, not universal algorithm quality.

These are general definitions and worked teaching examples, not experimental observations. Reader comprehension has been editorially reviewed; no human rereading study was conducted.

## Visual and interaction audit

- Method panels: author-method paraphrases, mapped to the method/algorithm locators above; not an experimental workflow run.
- Formula panel: teaching notation, with omitted conditions and approximations explained in both languages.
- Interactive lab: synthetic inputs except the baseline documentation filter. Outputs are deterministic evaluations of the displayed formulas, not measured performance.
- Evidence table (when present): exact transcribed values; the metric, model, comparison conditions, and source page are given beside the table. No values are inferred from plotted curves.
- Limits and implementation notes distinguish paper claims, required assumptions, and later engineering choices.
- Browser and numerical acceptance results are recorded in `reports/verl-validation.md`.

## Version and audit notes

- Audit 2026-11-03: the trust-region anchor is the rollout (behavior) policy μ (§5.2 Takeaway 2; Appendix E; §7 setup), not a recomputed old policy. Page wording corrected from “old policy / old to new”.
- Source inconsistency: Table 2 and Appendix F.1 name UltraFeedback for the Qwen3-4B-Instruct-2507 RLHF run, while §7.2 and the Figure 10 caption say HH-RLHF. The page follows Table 2 and discloses the conflict.
- Not verified: whether verl’s dppo_tv/dppo_kl losses anchor to rollout log-probabilities or recomputed old_log_prob depends on the rollout-correction mode; the pinned doc does not state it and the code was not run.
