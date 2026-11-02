# Algorithm Baselines — source and claim ledger

## Source identity

- Primary: [Algorithm Baselines](https://verl.readthedocs.io/en/latest/algo/baseline.html)
- Adopted version: `documentation snapshot 2026-11-02`. Checked 2026-11-02.
- Implementation: [verl baseline](https://github.com/verl-project/verl/blob/3fdf2b548882a8aeccf0842c2150d9c9f1790a55/docs/algo/baseline.md), commit `3fdf2b548882a8aeccf0842c2150d9c9f1790a55`.
- Documentation SHA-256: `5496008fe6255626c2a57d87ca5f713075f8643f78dffc2485c6a1eca868deb1`.

## Source locators

verl Algorithm Baselines: GSM8k table; DAPO math-17k; Notes [1]–[2]

## Claim mapping

### background

Source locator: GSM8k, DAPO math-17k, Coding related datasets; Notes [1]–[2]

1. Algorithm Baselines in verl is a collection of reproduction entry points. It mixes model sizes, training methods, and hardware, with some rows explicitly using MATH or GEO3k. This is a documentation guide, not a fabricated paper citation.

### mechanism

Source locator: GSM8k, DAPO math-17k, Coding related datasets; Notes [1]–[2]

1. First fix the dataset and base model, then check training data, answer extraction, sample count, maximum length, and tool access. Backend changes may accompany numerical differences, different scripts, or other parameters; one score cannot identify causality.

2. The selector preserves the documentation’s model, method, score, and log links. A combination without records shows an empty state. A matching model and dataset is necessary but does not prove all experimental conditions match.

### math

Source locator: GSM8k, DAPO math-17k, Coding related datasets; Notes [1]–[2]

1. A difference Δ=s2−s1 is meaningful only on a common scale. Accuracy rising from 50 to 55 is a five-percentage-point increase and a 10% relative increase; these are different quantities.

2. Some older GSM8K runs extract only answers after ####. Format mismatches can lower scores, so changes in reasoning ability must be distinguished from answer-extraction failure. Documentation versions and log links are more informative than a highest-score label.

### evidence

Source locator: All 30 table rows; original per-row command/log links; documentation update 2025-06-18

1. GSM8K records for Qwen2-7B-Instruct include GRPO 89.0, FSDP2 89.8, Megatron 89.6, and GPG 88.0. These are documented run scores; this page does not infer statistically significant backend or algorithm superiority.

2. SPPO’s 65.6 for Qwen2.5-7B-Instruct is explicitly on MATH and cannot be ranked alongside SPIN’s GSM8K 92. Each row links to its source script or log so omitted conditions can be inspected.

### limits

Source locator: Interpretive analysis of assumptions and scope in GSM8k, DAPO math-17k, Coding related datasets; Notes [1]–[2]; empirical limits in All 30 table rows; original per-row command/log links; documentation update 2025-06-18

1. The documentation does not supply seed variance, confidence intervals, or fully matched budgets for every record. Missing information remains unknown; unsupported significance tests and aggregate rankings are not invented.

### implementation

Source locator: Pinned verl docs/algo/baseline.md; implementation-specific settings

1. Source links retain run scripts, logs, and evaluation notes. This page runs no training and does not claim the results were reproduced in the current environment.

## Foundations and reading task

Training data updates a model; test data checks performance on other questions. Interpret scores with the model, questions, answer-extraction rules, and sampling budget. Correctly solving 60 of 100 questions gives 60%, but changing questions or allowing repeated attempts changes what another 60% means.

Question: Can MATH’s 65.6 and GSM8K’s 64.02 directly establish which algorithm is better?

Answer: No. The evaluation sets, models, and training conditions differ. Filter to the same evaluation set and model, then inspect sampling, length, and scoring in the logs. Without matched conditions they remain separate run records.

These are general definitions and worked teaching examples, not experimental observations. Reader comprehension has been editorially reviewed; no human rereading study was conducted.

## Visual and interaction audit

- Method panels: author-method paraphrases, mapped to the method/algorithm locators above; not an experimental workflow run.
- Formula panel: teaching notation, with omitted conditions and approximations explained in both languages.
- Interactive lab: synthetic inputs except the baseline documentation filter. Outputs are deterministic evaluations of the displayed formulas, not measured performance.
- Evidence table (when present): exact transcribed values; the metric, model, comparison conditions, and source page are given beside the table. No values are inferred from plotted curves.
- Limits and implementation notes distinguish paper claims, required assumptions, and later engineering choices.
- Browser and numerical acceptance results are recorded in `reports/verl-validation.md`.
