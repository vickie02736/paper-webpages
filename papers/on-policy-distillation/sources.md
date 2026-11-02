# OPD / GKD — source and claim ledger

## Source identity

- Primary: [On-Policy Distillation of Language Models: Learning from Self-Generated Mistakes](https://arxiv.org/abs/2306.13649v3)
- Adopted version: `2306.13649v3`. Checked 2026-11-02.
- Implementation: [verl opd](https://github.com/verl-project/verl/blob/3fdf2b548882a8aeccf0842c2150d9c9f1790a55/docs/algo/opd.md), commit `3fdf2b548882a8aeccf0842c2150d9c9f1790a55`.
- Documentation SHA-256: `0b81ce31f08a243ad96a53a4d78bfce2b2b5b6d367a0e673500a96bb95bc651c`.
- PDF SHA-256: `a81c71fa0cd15506642092790d854347f030c29ee1d6aa643b55aa51348e6869`.
- Experimental evidence page visually inspected: PDF p. 9; original images are not republished.

## Source locators

§3.1 Algorithm 1; §3.2; §§4.1–4.4 Figures 7/9/10; Appendix A.4/A.6/A.7; Thinking Machines 2025; verl OPD Loss Variants

## Claim mapping

### background

Source locator: §3.1 Algorithm 1; §3.2 divergences; later Thinking Machines loss/pseudocode separately

1. Conventional sequence distillation mainly uses teacher answers, so the student seldom trains on prefixes caused by its own mistakes. GKD jointly designs the state distribution and the divergence: both what distribution to imitate and where to imitate it.

### mechanism

Source locator: §3.1 Algorithm 1; §3.2 divergences; later Thinking Machines loss/pseudocode separately

1. GKD mixes student-generated and fixed supervised data using fraction λ. At the chosen prefixes it computes token-distribution differences and directly backpropagates through student parameters, treating the sampled sequence as fixed for that update.

2. Subsequent Thinking Machines and verl PG OPD use logν(y)−logπ(y) as sampled-token feedback for a policy-gradient update. Stop-gradient choices, reward signs, and sampling distributions must be distinguished from GKD’s direct divergence gradient.

### math

Source locator: §3.1 Algorithm 1; §3.2 divergences; later Thinking Machines loss/pseudocode separately

1. ν is the teacher and π the student. Forward KL emphasizes coverage of teacher mass, while reverse KL often favors modes, but the outcome depends on task and decoding. An individual sampled log-probability difference can be negative; KL nonnegativity applies to the full expectation.

2. The demo uses two teaching states: a typical teacher prefix and a student-error prefix, with different teacher conditionals. Switching state recomputes complete binary divergences, illustrating prefix-dependent supervision rather than an unconditional teacher label.

### evidence

Source locator: §§4.1–4.4; Figures 7–10; Appendices A.4/A.6/A.7

1. The original paper evaluates XSum summarization, WMT translation, GSM8K arithmetic reasoning, and FLAN instruction distillation. These use ROUGE, BLEU, or accuracy and are not ranked on one common scale.

2. Figure 10 studies instruction distillation from FLAN T5-XL to T5-Base and reports gains in task-averaged MMLU and BBH. Reverse KL outperforms forward KL in that setting. GSM8K uses an external calculator and compares on-policy fractions; that protocol must be retained.

### limits

Source locator: Interpretive analysis of assumptions and scope in §3.1 Algorithm 1; §3.2 divergences; later Thinking Machines loss/pseudocode separately; empirical limits in §§4.1–4.4; Figures 7–10; Appendices A.4/A.6/A.7

1. The teacher can be unreliable on erroneous student prefixes, and vocabulary, tokenizer, and probability interfaces constrain the available signal. Reducing state mismatch does not guarantee correction of every mistake or surpassing the teacher.

### implementation

Source locator: Pinned verl docs/algo/opd.md; implementation-specific settings

1. verl distinguishes GKD OPD from PG OPD and supports teacher routing. This page centers on 2024 GKD, labeling the 2025 blog and 2026 documentation separately rather than attributing later engineering features to the original paper.

## Foundations and reading task

Distillation trains a smaller student to learn a teacher’s output distribution: probabilities for candidate tokens, not only one correct answer. On-policy distillation lets the student generate prefixes first, then asks the teacher for feedback on those prefixes, including states caused by student errors.

Question: Does a negative sampled-token log teacher/student probability gap violate nonnegative KL?

Answer: No. An individual token’s difference may be negative; KL nonnegativity concerns an expectation over the full distribution. This feedback also uses the negative reverse-KL direction, so both sign and sampling distribution matter.

These are general definitions and worked teaching examples, not experimental observations. Reader comprehension has been editorially reviewed; no human rereading study was conducted.

## Visual and interaction audit

- Method panels: author-method paraphrases, mapped to the method/algorithm locators above; not an experimental workflow run.
- Formula panel: teaching notation, with omitted conditions and approximations explained in both languages.
- Interactive lab: synthetic inputs except the baseline documentation filter. Outputs are deterministic evaluations of the displayed formulas, not measured performance.
- Evidence table (when present): exact transcribed values; the metric, model, comparison conditions, and source page are given beside the table. No values are inferred from plotted curves.
- Limits and implementation notes distinguish paper claims, required assumptions, and later engineering choices.
- Browser and numerical acceptance results are recorded in `reports/verl-validation.md`.

- [Later method: Thinking Machines (2025)](https://thinkingmachines.ai/blog/on-policy-distillation/): Implementation / Loss function: reverse KL; pseudocode; sampled student tokens with teacher feedback. This is a separate later source, not a GKD result.
