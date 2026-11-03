# TRM — evidence ledger

- Adopted version: [arXiv 2512.23075v5 · 2026-06-26](https://arxiv.org/abs/2512.23075v5). Checked 2026-11-02.
- PDF SHA-256: `a7f33a185f9f3802c2490abd79a0296c1b665700a856e0d2b7d9912b0428410e`
- Bibliography evidence: source first page and arXiv submission history; formal conference record where explicitly listed.

## Section-to-source map

- **Why long answers are harder to stabilize**: §§1–2; §4.4, Remark 4.3.
- **From token checks to sequence masks**: Eq. (22)–(23); Algorithm 1; §§4.1–4.3; Appendix E.
- **Inspect the mask**: Algorithm 1; Eq. (22)–(23); synthetic binary example.
- **What the theory can certify**: Remark 2.1; Theorems 3.3–3.8; Table 1; Theorem 4.2 & Remark 4.3; Appendix G.
- **What the experiments support**: §5; Eq. (25); Figures 1–3, PDF pp. 10–11.
- **Costs, length bias, and version boundaries**: §4.4; Appendix E–G; Figures 1–3.

## Scientific / version notes

- Original PDF pp. 1, 6, 8, 10–11 visually inspected: byline, Table 1, Algorithm 1 and Figures 1–3.
- §4.1 numerical example prints πroll=0.9, πθ=0.001 yet calls their defined ratio about 900. With Eq. (2) direction it is 1/900. This page uses the equation-defined direction, not that reversed numerical example.
- Value bounds use centered L′ as required by Remark 2.1; uncentered advantage form is not silently substituted.
- Eq. (12) is evaluated as an exact finite sum; Eq. (14) scaling is not treated as an exact finite-sum identity.
- v5 Theorem 4.2 requires the global precondition; Remark 4.3 and Appendix G qualify the masked objective. Acceptance on a sampled path does not certify all reachable contexts.
- Experiments do not identify enough raw values for numerical curve reconstruction; no pixel-derived endpoints or synthetic accuracy curves.
- TRM first-page author affiliations are mapped only where numbered: Jiacai Liu → Fudan; Jiawei Xu, Ziniu Li, Baoxiang Wang → CUHK Shenzhen. Unmarked authors remain unmapped. Formal publication/acceptance unverified.
- Audit 2026-11-03: Table 1 (PDF p.6) gives 1,677 classical and ≤8.2 unified in the KL-only column (ε via Pinsker) and 839 / ≤4.1 in the KL+TV column; the page now keeps the columns apart (§4.4 itself contrasts 1677 with 4.1 as 409×). Eq. (9)’s second factor is the expected advantage shift g_t, not an effect of later updates.

## Visual inventory

- CSS method flow: original teaching paraphrase of the methods, not a training run.
- Formula blocks: source objectives in explicit teaching notation; gradient coefficients are distinguished from gradients.
- Interactive token/ratio/scale displays: synthetic calculations from the stated formula; no experimental predictions. Axes, units and denominator are displayed.
- Evidence tables: source-reported values only; exact locations and conditions are adjacent. Original figures are linked, not republished.
- Source PDF images inspected locally; browser screenshots and numerical checks recorded in `reports/rl-foundations-validation.md`.

## Bilingual editorial claims

- A language model assigns probabilities to the next token, an encoded text unit that need not equal a word or character. A rollout generates an answer one token at a time. Reinforcement learning uses the answer’s reward to favor useful responses.
- The rollout engine and training model may assign different probabilities because of precision, kernels, expert routing, or stale parameters. Earlier choices change later contexts, so mismatch in a long answer is not just a collection of independent one-step errors.
- TRM compares distributions at each position and zeroes the entire answer’s contribution if any position exceeds a threshold. It chooses which trajectories contribute to an update; it does not project the model itself back into a safe region.
- Key limit: passing checks on sampled answers does not establish the theoretical condition at every possible context. TRM v5 explicitly separates these claims; a high acceptance rate does not ensure that the masked objective approximates the original objective.
- Rescore the same prefixes: the training policy assigns probabilities to all candidate tokens.
- Keep or zero the entire sequence: normalize by the original batch of N answers, then update.
- cₜ is the prompt plus preceding output; yₜ is the selected token; v ranges over the vocabulary. The denominator of ρ must be the actual sampling policy. KL runs from πroll to πθ, uses natural logarithms, and is measured in nats. It compares full distributions, not one token’s probability difference.
- Aᵢ=Rᵢ−b is reward advantage relative to baseline b. Mᵢ is binary and treated as constant during backpropagation; the expression describes the paper’s stop-gradient update. N is the original batch size, not the accepted count. Padding is excluded from maxima, sums, and lengths.
- Standard PPO clipping depends on the sign of advantage; it does not zero both sides. For A<0 and large ρ, the unclipped branch still has a gradient. TRM masks all valid positions in the answer together, sacrificing reliable positions along with the outlier.
- Without stored full-vocabulary logits, Appendix E proposes k₂(ρ)=½(log ρ)² for maximum-outlier detection and k₃(ρ)=ρ−1−log ρ for average drift. Under full support, the expectation of k₃ under the rollout distribution equals this KL. A single sampled value is not exact KL, and k₂ is not an unbiased KL estimator.
- Each position has two candidates, rollout probabilities [0.5, 0.5], and the first candidate is selected. The first answer’s training probabilities are [0.52, 0.54, q, 0.48, 0.51, 0.53]. The second uses 0.52 everywhere and advantage −0.5. Both answers have the same valid length; the original batch size is N=2.
- Try q=0.9 and δ=0.05, then change valid length from 6 to 2. Why does rejection become acceptance?
- The outlier is at position 3. At length 2 it is padding, excluded from both the maximum and update sum. The remaining maximum KL is about 0.00321, below 0.05. Padding probabilities must not change the answer’s mask.
- The paper decomposes the gap between reward change and its surrogate into context-distribution shift times the expected advantage shift at each position. The KL chain rule and Pinsker’s inequality bound the shift one way; TV coupling bounds it another. Taking the minimum of valid bounds can tighten the result.
- TV, total variation distance, is half the sum of absolute differences between two discrete probability distributions, ranging from 0 to 1. It measures the probability mass that must be reassigned to make them agree. KL is zero for identical distributions but generally has no upper bound of 1.
- J is expected sequence reward with R∈[0,1]; T is the fixed or consistently padded theoretical horizon. Here δ bounds maximum KL over all reachable contexts, not merely one sampled batch. L′ is the centered reward-form surrogate, zero at πθ=πroll. For fixed b, the unmasked advantage form L differs by T(Jroll−b): the gradients agree but the values need not.
- The demo evaluates the capped sum in Eq. (12) and the classical KL bound. It does not simulate rewards or compute the full minimum B*. A smaller bound still requires checking whether L′ exceeds it before the relevant theorem certifies improvement.
- Research detail: Mixed bounds additionally use trajectory KL or TV. Adaptive bounds retain expected TV by position and choose the tighter route for the remaining horizon. Table 1 uses T=4096 and δ=10⁻⁴: the KL-only column (ε derived via Pinsker) gives about 1677 for the classical bound and ≤8.2 unified; with ε=0.005, trajectory KL=0.01 and TV=0.05 (KL+TV column) the classical bound is 839 and the unified bound ≤4.1. §4.4 contrasts 1677 with 4.1 as a 409× improvement. This is a theoretical parameter calculation, not an AIME improvement.
- Under the global condition every trajectory passes, M≡1, and the masked and full objectives coincide. If rejection occurs, Appendix G’s precondition-free result uses reward-form L′masked and pays for accepted-region error BA, rejection rate r, and trajectory TV. It does not directly prove monotonic improvement for the algorithm’s stop-gradient advantage update.
- Experiments train Qwen3-8B-Base on deduplicated DAPO-MATH-17k in a Zero-RL setup: GRPO group size 16, batch size 32, learning rate 10⁻⁶, vLLM sampling and PyTorch FSDP training. AIME25 evaluation uses temperature 1.0, top-p 0.95, and avg@32.
- The “Log Absolute PPL Gap” in Eq. (25) averages log-probability differences within each answer, takes an absolute value, then averages across answers. It is not maximum token KL. These figures provide no multi-seed error bands or sufficiently detailed numerical tables for exact endpoints, so only their qualitative trends are summarized.
- A length-independent threshold is not length-neutral selection. Under an illustrative i.i.d. per-position violation probability p, acceptance is (1−p)ᵀ. Long reasoning chains have more chances to fail and may be systematically underrepresented.
- Appendix F proposes weighted, normalized LN-TRM and SER based on mean |ρ−1|. They change the selection criterion and guarantee conditions, and have no corresponding ablation in Figures 1–3. “No extra model inference” also does not eliminate the storage, transfer, and computation costs of full-vocabulary logits.
- Relation to the Rollout Correction topic: importance sampling changes probability weights; TRM chooses trajectories to discard. They address different parts of the estimator. The existing topic cites early v1; this page adopts v5 and retains its explicit qualifications about global assumptions and masked objectives.
- Why can one token’s distribution shift affect an entire answer? Study TRM through sequence masks, error bounds, and mathematical-reasoning experiments.
- This study distinguishes paper reports, derivations, and teaching computations. Original figures were inspected; plotted curves are not converted into precise numbers by eye. See the ledger for versions, caveats, and visual provenance.

## Reading review

Prerequisites and a reproducible reading task are supplied in both languages. Scientific review, editorial review and technical verification are separate. No human rereading study has been performed.
