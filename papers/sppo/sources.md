# SPPO — source and claim ledger

## Source identity

- Primary: [Self-Play Preference Optimization for Language Model Alignment](https://arxiv.org/abs/2405.00675v5)
- Adopted version: `2405.00675v5`. Checked 2026-11-02.
- Implementation: [verl sppo](https://github.com/verl-project/verl/blob/3fdf2b548882a8aeccf0842c2150d9c9f1790a55/docs/algo/sppo.md), commit `3fdf2b548882a8aeccf0842c2150d9c9f1790a55`.
- Documentation SHA-256: `7b12370f82df6cc529b468362c2662f2cd5eba0c1fc38bf90553ca6653c199a7`.
- PDF SHA-256: `cd41f7714748f65b520fd05a429ce848b11cfdb26adf01070d5de79511719265`.
- Experimental evidence page visually inspected: PDF p. 16; original images are not republished.

## Source locators

§4 equations 4.2–4.6; Algorithm 1; §5 Tables 1/3; Appendix A; verl SPPO Reproduce the Experiment

## Claim mapping

### background

Source locator: §4 Eqs.4.2–4.6; Algorithm 1

1. A fixed scalar reward orders answers, while preferences can cycle: A beats B, B beats C, and C beats A. SPPO uses general preference probabilities without requiring every comparison to follow a Bradley–Terry scalar reward.

### mechanism

Source locator: §4 Eqs.4.2–4.6; Algorithm 1

1. Sample several answers each round and use a preference oracle to estimate each answer’s win probability against the current policy. The experiments use PairRM, an external preference signal; the method is not judge-free.

2. An ideal exponential-weights update increases the weight of high-win-probability answers, then fits the target policy with a language model. The practical squared loss centers at 1/2 as an approximation to the normalization term. The theoretical policy mixture differs from finite-round neural training.

### math

Source locator: §4 Eqs.4.2–4.6; Algorithm 1

1. η is an update scale, P a preference probability, and πold the current opponent. The ideal log Z normalization is estimated or approximated by η/2; the latter is not an exact identity for arbitrary preferences and step sizes.

2. The demo uses a cyclic win matrix over three strategies. Changing the opponent mixture changes each candidate’s win rate; the uniform mixture gives each a rate of 1/2. This illustrates the game, not neural-network convergence.

### evidence

Source locator: §5 Table 1 (PDF p.16); Table 3

1. Table 1 reports AlpacaEval 2.0 length-controlled win rates of 17.11% for Mistral-7B-Instruct-v0.2 and 28.53% for SPPO iteration 3. The ordinary win rate is 31.02%; these metrics are not interchangeable.

2. The general-capability average in Table 3 does not rise monotonically every round. Best-of-16 introduces inference-time reranking and must be compared separately from single-generation results. The verl MATH reproduction uses a different model and evaluation protocol.

### limits

Source locator: Interpretive analysis of assumptions and scope in §4 Eqs.4.2–4.6; Algorithm 1; empirical limits in §5 Table 1 (PDF p.16); Table 3

1. Oracle bias, finite comparisons, and the log Z approximation can affect training. Guarantees in the ideal game do not establish safety under real human preferences or gains on every task.

### implementation

Source locator: Pinned verl docs/algo/sppo.md; implementation-specific settings

1. The verl SPPO recipe reports its internal MATH evaluation, not a reproduction of the original AlpacaEval experiment.

## Foundations and reading task

A preference probability is the chance that one answer is chosen over another. It need not reduce to one score per answer: A can beat B, B beat C, and C beat A. A mixed strategy randomly chooses among alternatives according to specified probabilities, reducing vulnerability to a particular opponent.

Question: In the teaching matrix, which candidate has the highest win rate against an opponent that always chooses A?

Answer: C wins with probability 0.8, versus 0.5 for A and 0.2 for B. Changing the opponent mixture can change the ranking, which a fixed scalar ordering struggles to represent.

These are general definitions and worked teaching examples, not experimental observations. Reader comprehension has been editorially reviewed; no human rereading study was conducted.

## Visual and interaction audit

- Method panels: author-method paraphrases, mapped to the method/algorithm locators above; not an experimental workflow run.
- Formula panel: teaching notation, with omitted conditions and approximations explained in both languages.
- Interactive lab: synthetic inputs except the baseline documentation filter. Outputs are deterministic evaluations of the displayed formulas, not measured performance.
- Evidence table (when present): exact transcribed values; the metric, model, comparison conditions, and source page are given beside the table. No values are inferred from plotted curves.
- Limits and implementation notes distinguish paper claims, required assumptions, and later engineering choices.
- Browser and numerical acceptance results are recorded in `reports/verl-validation.md`.

Version discrepancy: Table 1 of v5 prints 17.11 for the Mistral baseline; accompanying improvement annotations imply 17.10. We use the explicit table cell, and do not recompute the paper’s annotations.
