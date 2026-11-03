# SPIN — source and claim ledger

## Source identity

- Primary: [Self-Play Fine-Tuning Converts Weak Language Models to Strong Language Models](https://arxiv.org/abs/2401.01335v3)
- Adopted version: `2401.01335v3`. Checked 2026-11-02.
- Implementation: [verl spin](https://github.com/verl-project/verl/blob/3fdf2b548882a8aeccf0842c2150d9c9f1790a55/docs/algo/spin.md), commit `3fdf2b548882a8aeccf0842c2150d9c9f1790a55`.
- Documentation SHA-256: `3673dabbb432d594ec47c923474632183f8d73fded6ec25a62aadd9cdc881e49`.
- PDF SHA-256: `796c894bd81eedeb9b4048b62a1849281782b93345966c6aafc4701ead6e6cc4`.
- Experimental evidence page visually inspected: PDF p. 17; original images are not republished.

## Source locators

§4 equation 4.7 and Algorithm 1; §5 Theorems 5.2/5.4; §6; §6.3 Figure 5; Appendix B Tables 1, 2, 4–6; verl SPIN Our Online DPO Implementation

## Claim mapping

### background

Source locator: §4 Eq.4.7 and Algorithm 1; §5 Theorems 5.2/5.4

1. Extra SFT can plateau quickly. SPIN starts with an SFT model and demonstration data, treating the current model as an opponent. No additional annotation does not mean no human data. The target is the demonstration distribution, not automatic discovery of truth beyond it.

### mechanism

Source locator: §4 Eq.4.7 and Algorithm 1; §5 Theorems 5.2/5.4

1. Freeze the old model each round and generate answers to demonstration prompts. Human answer y and generated answer y′ form the training pair; the updated model becomes the next opponent. Original SPIN does not use an external reward model to rerank two generated answers.

2. The self-play discriminator can be written as a log probability ratio between new and old policies. With a logistic loss its form resembles DPO, but pair construction, iterative updates, and the target distribution differ. Similar loss expressions do not make the full algorithms identical.

### math

Source locator: §4 Eq.4.7 and Algorithm 1; §5 Theorems 5.2/5.4

1. x is a demonstration prompt, y its demonstration answer, y′ an old-policy sample, and λ the regularization parameter of Eq. 4.3; a larger λ yields a smaller change between successive opponents (Remark 5.5). Raising the demonstration’s relative probability ratio and lowering the generated answer’s ratio increases z and reduces loss.

2. Equation 4.7 allows a general convex decreasing loss. The optimality conclusions in Theorems 5.2 and 5.4 rely on representability of the target distribution and optimization assumptions. Finite neural networks, samples, and approximate optimization do not inherit an unconditional convergence guarantee.

### evidence

Source locator: §6; §6.3 Figure 5; Appendix B Tables 1, 2, 4–6

1. Starting from zephyr-7b-sft-full and a 50k-prompt subset of Ultrachat200k, the paper raises the six-task Open LLM Leaderboard average from 58.14 (SFT) to 63.16 at iteration 3 (Appendix Table 4) and MT-Bench from 5.94 to 6.78 at iteration 2 (Appendix Table 6, which reports no iteration 3). The two metrics differ in scale and in the iteration reported.

2. §6.3 (Figure 5) compares data quantity; Appendix B Tables 4–5 compare iteration count and additional SFT, and Table 1 lists each task’s few-shot protocol. Aggregate scores can hide task differences, and generating training pairs has its own time cost.

### limits

Source locator: Interpretive analysis of assumptions and scope in §4 Eq.4.7 and Algorithm 1; §5 Theorems 5.2/5.4; empirical limits in §6; §6.3 Figure 5; Appendix B Tables 1, 2, 4–6

1. Errors or gaps in demonstrations constrain the target distribution. Self-play does not create reliable supervision from nothing; overfitting, diversity, and transfer to unseen tasks still require evaluation.

### implementation

Source locator: Pinned verl docs/algo/spin.md; implementation-specific settings

1. The verl SPIN recipe describes online DPO, reward-based ranking, and an updatable reference model. These are implementation choices inspired by SPIN and are separated from the original paper.

## Foundations and reading task

Supervised fine-tuning teaches a model to imitate prompt–demonstration pairs. SPIN reuses those demonstrations and asks the previous model to answer their prompts, providing a comparison. Training therefore receives the prompt, demonstration, and model answer; it is not an unrestricted debate that automatically determines truth.

Question: Does each new round require new preference labels? Does that imply no human supervision?

Answer: Original SPIN reuses fixed demonstrations and regenerates opponent answers, avoiding new preference labels each round. The demonstrations still supply human supervision, whose quality and coverage constrain the target.

These are general definitions and worked teaching examples, not experimental observations. Reader comprehension has been editorially reviewed; no human rereading study was conducted.

## Visual and interaction audit

- Method panels: author-method paraphrases, mapped to the method/algorithm locators above; not an experimental workflow run.
- Formula panel: teaching notation, with omitted conditions and approximations explained in both languages.
- Interactive lab: synthetic inputs except the baseline documentation filter. Outputs are deterministic evaluations of the displayed formulas, not measured performance.
- Evidence table (when present): exact transcribed values; the metric, model, comparison conditions, and source page are given beside the table. No values are inferred from plotted curves.
- Limits and implementation notes distinguish paper claims, required assumptions, and later engineering choices.
- Browser and numerical acceptance results are recorded in `reports/verl-validation.md`.

## Version and audit notes

- Audit 2026-11-03: 63.16 is SPIN iteration 3 (Appendix Table 4, PDF p.17); MT-Bench 6.78 is iteration 2 (Table 6, p.17, no iteration-3 row). The evidence page moved from p.16 (Table 3, SPIN+DPO) to p.17. λ is the Eq. 4.3 regularization parameter (Remark 5.5), not an update scale. The data-quantity study is §6.3 Figure 5.
