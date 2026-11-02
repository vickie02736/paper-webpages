# PPO-EWMA — evidence ledger

- Adopted version: [NeurIPS 2022 · arXiv 2110.00641v3 · 2022-09-24](https://arxiv.org/abs/2110.00641v3). Checked 2026-11-02.
- PDF SHA-256: `cc87ae37cee41263da4d3e774f7aba5d3b82323aa0a4e8b5efe2031fc5c811ff`
- Bibliography evidence: source first page and arXiv submission history; formal conference record where explicitly listed.

## Section-to-source map

- **Why changing batch size changes behavior**: §§1–3; optimization and iteration batch definitions in §3.3.
- **Two references inside one objective**: §2, decoupled KL-penalized and clipped objectives; Appendix A.
- **Align learning progress by sample count**: §§3.1–3.3, §4; Appendices A–D; Tables 1, 3–4.
- **Which adjustments explain the results**: §§5.1–5.3; Figures 1–4; Appendix B, D, E; Table 5.
- **When to use it and when to revalidate**: §4 requirements; §§5.3, 6.2; Appendix B auxiliary phase, Appendix D.

## Scientific / version notes

- Adopt arXiv v3 for main text and complete appendices; official NeurIPS 2022 proceedings corroborate title, authors, affiliation and publication year. Formal record: https://papers.neurips.cc/paper_files/paper/2022/hash/6ceb6c2150bbf46fd75528a6cd6be793-Abstract-Conference.html . Initial preprint 2021-10-01. Paper-specific acceptance date unverified.
- Visually inspected PDF pp. 1, 6–8, 19: byline, Figures 1–4 and Table 5. Table 5 read from appendix p.19; experiment values are not read off plotted curves.
- Reported gaps 0.052 and 0.019: §5.2. Table 5 copied at Default/256: 0.709 (6.87), 0.224 (4.47), 0.041 (4.80), difference-in-differences and Z-scores.
- H=8 and β=8/9 use the exact stated center-of-mass choice; Table 4 rounds β to 0.889. Do not use rounded β as if it gave exactly H=8.
- EWMA is a normalized finite-history parameter average in Appendix A. Lab age is steady-state, not exact startup age.
- Three-policy demo uses synthetic probabilities and advantage; no state-distribution or arbitrary-off-policy unbiasedness claim.
- Scaling demo derives 65,536/8,192 from Appendix B; independent small-batch SGD/Adam rules, advantage window, Eπ=1 and PPG auxiliary-phase exception are retained.

## Visual inventory

- CSS method flow: original teaching paraphrase of the methods, not a training run.
- Formula blocks: source objectives in explicit teaching notation; gradient coefficients are distinguished from gradients.
- Interactive token/ratio/scale displays: synthetic calculations from the stated formula; no experimental predictions. Axes, units and denominator are displayed.
- Evidence tables: source-reported values only; exact locations and conditions are adjacent. Original figures are linked, not republished.
- Source PDF images inspected locally; browser screenshots and numerical checks recorded in `reports/rl-foundations-validation.md`.

## Bilingual editorial claims

- Batch size B is the number of samples used for an update. Smaller batches can save memory but cause more frequent, noisier updates. Here invariance means approximately comparable learning after the same number of environment samples, with compensating hyperparameter changes. It does not mean identical parameters after each step or equal runtime.
- Standard PPO gives one old policy two jobs: describe how data were sampled, and provide a recent anchor for limiting updates. Smaller batches change the anchor’s age, so changing the learning rate alone can still alter optimization. This paper separates the roles.
- Behavior policy πbehav: actually sampled the data; supplies the importance-weight denominator.
- Current policy πθ: being optimized; compared separately with the sampler and the recent anchor.
- An importance weight is target action probability divided by sampling probability; it corrects sampling preference. Proximal means a recent anchor near the current model. Advantage A estimates how much better an action is than a baseline: positive favors increasing its probability, negative favors decreasing it.
- s is the state, a the sampled action, and Ebehav the average over actual sampled data. ε is clip width; λ is the KL penalty strength (β in the paper, renamed here to distinguish it from averaging decay). Behavior and proximal policies are fixed; gradients flow through the current policy.
- Without clipping, w·r=πθ/πbehav, so the proximal policy cancels: it only controls where clipping or regularization acts. It cannot replace the behavior policy in the sampling denominator. This action-level correction also does not fully correct arbitrary stale state distributions or advantage estimates.
- This teaching example tracks the sampled action: pbehav=0.2, pprox=0.4, pθ=0.6, A=1, ε=0.2. Then w=2 and r=1.5; the unclipped signal is 3 and the clipped value is 2×1.2=2.4. Make A negative to inspect the other min branch, which can remain active.
- SGD, stochastic gradient descent, updates parameters using a direction estimated from the current minibatch. Adam also uses averages and magnitudes of past gradients to adapt each parameter’s step. PPG, Phasic Policy Gradient, separates policy learning from auxiliary learning, so samples per phase also matter.
- EWMA is an exponentially weighted moving average: recent model parameters get greater weight, and a single averaged model summarizes the history. The paper averages network parameters, not action probabilities. It updates the average after each policy-gradient step; PPG reinitializes it at the start of the next policy phase after auxiliary training.
- H is the steady-state EWMA mean age in gradient steps; βprox near 1 means an older anchor. c is the batch reduction factor. Dividing samples per step by c while multiplying H by c preserves age measured in samples, H×B. Wadv is the effective iteration window for advantage statistics, and Nπ is the number of policy iterations per PPG phase.
- Why do Adam and SGD differ? In the noise-dominated small-batch regime, Adam’s RMS-gradient denominator grows by about √c when batches shrink, already reducing part of the effective step. Its external step size is therefore divided by √c, while SGD uses linear scaling. Outside that regime the rules may not preserve behavior.
- Conversions start from Appendix B: 256 parallel environments, 256 steps per rollout, and 8 minibatches per epoch, giving iteration batch 65,536 and optimization batch 8,192; α=0.0005, H=8 (exact βprox=8/9), Nπ=32. The demo computes parameters deterministically; it does not predict learning curves.
- Appendix A normalizes finite-history EWMA: wnew=1+βw and θprox←θ/wnew+βwθprox/wnew, initialized with θprox=θ and w=1. Thus H=β/(1−β) is a steady-state age, not exact at the first step. Adam’s β₁ and β₂ can additionally become β₁^(1/c) and β₂^(1/c); most main experiments omit this optional adjustment.
- The main experiments use 16 Procgen games on hard difficulty and an IMPALA convolutional network, not LLMs. Runs usually last 100 million environment steps. Batch-invariance experiments use PPG-EWMA with one policy epoch, Eπ=1. Parallel environments drop from 256 to 64, 16, 4 and 1, spanning a factor of 256.
- Figure 2 plots environment steps against mean normalized return across games; shading is standard deviation over 3 seeds. Figure 3 compares batch sizes per game using the last 4 million steps, with standard-error bars and a square-root axis. Table 5 uses a stratified nonparametric test with Bonferroni correction for 16 comparisons, threshold 0.001/16. These uncertainty definitions are not interchangeable.
- Figure 1’s stale-data experiment supports the division of roles: retaining the true behavior denominator while anchoring updates to a recent policy is more robust than treating that recent policy as the sampler. Figure 4 uses 4 seeds; EWMA benefits both PPO and PPG on all 8 games held out from hyperparameter tuning, but the overall benefit is modest.
- The conditions matter: optimization batches must be sufficiently small. The invariance experiments scale optimization and iteration batches together and use Eπ=1. Repeated passes over tiny batches reuse the same data; the same conclusion does not automatically apply.
- Heist is a clear exception; changing Adam β₁ and β₂ in Appendix D does not remove its gap. To control runtime, the PPG auxiliary phase also keeps minibatch size per worker fixed and uses separate step-size adjustments. The paper does not establish invariance for arbitrary tasks, large batches, or LLM post-training.
- The averaged model requires additional parameter storage and forward passes. The paper estimates compute overhead excluding environment stepping at 30% for PPO and 2.3% for PPG; measured wall-clock increases in its implementation are 19% and 3%. Sample efficiency and runtime efficiency are different metrics.
- If batch size shrinks 4×, what happens if you only halve Adam’s step size and leave βprox unchanged?
- The optimizer follows square-root scaling, but the anchor remains 8 gradient steps old. With a quarter as many samples per step, its sample age falls from 65,536 to 16,384. H=32 and βprox=32/33 restore that age; advantage-statistics windows and PPG phase settings also need consideration.
- Relation to Rollout Correction: this paper provides original evidence for separating the sampling policy from the proximal anchor. TRM then addresses long-sequence mismatch and rejection masks. Their tasks, assumptions, and experimental settings differ.
- How can smaller batches preserve similar learning behavior? Follow three policy roles, EWMA age, step-size scaling, and Procgen ablations.
- This study distinguishes paper reports, derivations, and teaching computations. Original figures were inspected; plotted curves are not converted into precise numbers by eye. See the ledger for versions, caveats, and visual provenance.

## Reading review

Prerequisites and a reproducible reading task are supplied in both languages. Scientific review, editorial review and technical verification are separate. No human rereading study has been performed.
