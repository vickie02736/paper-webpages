# PPO — source and claim ledger

## Source identity

- Primary: [Proximal Policy Optimization Algorithms](https://arxiv.org/abs/1707.06347v2)
- Adopted version: `1707.06347v2`. Checked 2026-11-02.
- Implementation: [verl ppo](https://github.com/verl-project/verl/blob/3fdf2b548882a8aeccf0842c2150d9c9f1790a55/docs/algo/ppo.md), commit `3fdf2b548882a8aeccf0842c2150d9c9f1790a55`.
- Documentation SHA-256: `48fe658d2c04ddef720daa978f8723746035fda62ac647fd28a8b97ea03b7c16`.
- PDF SHA-256: `e78feadadbdbb0b601b3c2bcc81404722cd431a489b307545f9b7bea1e8c4f5b`.
- Experimental evidence page visually inspected: PDF p. 6; original images are not republished.

## Source locators

§§2–5; equations 7, 9, 11–12; Algorithm 1; §6.1 Table 1; §6.4 Table 2

## Claim mapping

### background

Source locator: §§2–5; Eqs.7,9,11–12; Algorithm 1

1. Ordinary policy gradients increase or decrease action probabilities according to sampled returns. Reusing a batch can move the new policy far from the sampling policy. TRPO controls updates through constrained optimization; PPO seeks a surrogate suitable for minibatch first-order optimization. The original experiments concern continuous control and Atari, with language-model training a later application.

### mechanism

Source locator: §§2–5; Eqs.7,9,11–12; Algorithm 1

1. Collect trajectories using the old policy, estimate advantages, optimize the fixed batch over several minibatch epochs, and then refresh the sampling policy. Old probabilities anchor the collected batch; they are distinct from a long-term frozen reference model used in language-model alignment.

2. A positive advantage means better than baseline; a negative one means worse. Taking the smaller objective removes additional incentive only when a beneficial change crosses its boundary. Changes that worsen the objective remain penalized.

### math

Source locator: §§2–5; Eqs.7,9,11–12; Algorithm 1

1. πθ is the trainable policy, πold the sampling policy, r their probability ratio at the same state and action, A a fixed advantage, and ε the clip width. For A>0 and r>1+ε, the objective is (1+ε)A; for A<0 and r<1−ε, it is (1−ε)A. Otherwise it remains rA.

2. The actor–critic implementation forms δt=rewardt+γV(st+1)−V(st), then sums later TD residuals with powers of γλ to obtain GAE. Value error and an entropy bonus can enter the joint objective. The paper also studies adaptive KL penalties, so PPO is a family rather than only a clipping formula.

### evidence

Source locator: §6.1 Table 1; §6.4 Table 2

1. Table 1 uses three seeds on each of seven continuous-control environments. Scores are normalized within each environment so the random policy is zero and the best result is one, then averaged across 21 runs. ε=0.2 scores 0.82 versus −0.39 without clipping or penalties. These are normalized returns, not success rates.

2. Atari Table 2 depends on the metric: PPO wins 30 of 49 games on mean reward over training, but 19 on the final-100-episode metric, where ACER wins 28. Sample efficiency and final performance support different conclusions.

### limits

Source locator: Interpretive analysis of assumptions and scope in §§2–5; Eqs.7,9,11–12; Algorithm 1; empirical limits in §6.1 Table 1; §6.4 Table 2

1. Clipping guarantees neither a bound on every action ratio nor a KL constraint. Shared parameters and repeated updates can alter unsampled actions; the demo plateau only means this sampled term has zero derivative with respect to r.

2. LLM implementations must additionally distinguish token versus sequence aggregation, reward versus loss KL, and probability mismatch between inference and training engines. Control-task evidence does not establish an optimal LLM configuration.

### implementation

Source locator: Pinned verl docs/algo/ppo.md; implementation-specific settings

1. PPO in verl normally uses GAE and a critic. The implementation note explains their roles; experimental claims refer to the original paper.

## Foundations and reading task

A policy is a rule assigning probabilities to possible next actions. A language model usually emits a token, a small text fragment, at each step. Reward scores performance; advantage measures performance relative to a baseline. Moving probability from 0.2 to 0.3 gives a ratio of 0.3/0.2=1.5, not a 1.5-percentage-point increase. These quantities guide model updates.

Question: With A=−1, r=0.5, and ε=0.2, what are the PPO objective and its local derivative?

Answer: min(−0.5,−0.8)=−0.8. This is the lower plateau for a negative advantage, so the local derivative with respect to r is zero. It does not make every neural-network gradient zero.

These are general definitions and worked teaching examples, not experimental observations. Reader comprehension has been editorially reviewed; no human rereading study was conducted.

## Visual and interaction audit

- Method panels: author-method paraphrases, mapped to the method/algorithm locators above; not an experimental workflow run.
- Formula panel: teaching notation, with omitted conditions and approximations explained in both languages.
- Interactive lab: synthetic inputs except the baseline documentation filter. Outputs are deterministic evaluations of the displayed formulas, not measured performance.
- Evidence table (when present): exact transcribed values; the metric, model, comparison conditions, and source page are given beside the table. No values are inferred from plotted curves.
- Limits and implementation notes distinguish paper claims, required assumptions, and later engineering choices.
- Browser and numerical acceptance results are recorded in `reports/verl-validation.md`.
