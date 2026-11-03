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

1. Read the core formula as follows: score each sampled action using probability ratio × advantage, compare that score with a clipped candidate, take the more conservative one, then average over a batch. This objective is maximized.

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

## Expanded teaching modules

### #ppo-star-s — S · Situation: play, then learn

As a teaching example, imagine a game character learning to finish a level. Given the current screen, it chooses left, right or jump. A policy is the rule that assigns probabilities to these actions based on the situation. Feedback such as the game score indicates performance. Training aims to increase the total score over time.

A training iteration first runs a batch of games under the current policy, recording observations, actions and feedback, then uses those records to update the policy. This experience comes from the old policy before the update, not the new policy after it.

Compact reading points:

- Observe the game → choose an action → receive feedback.
- Policy: assign probabilities to left, right and jump.
- Collect records with the old policy, then update it to seek a higher total score.

Background: PPO v2 abstract, §2.1 and §5 Algorithm 1. The game character is a teaching scenario, not a reported experiment.

### #ppo-star-t — T · Task: reuse experience carefully

Collecting experience requires interacting with the environment, so discarding a batch after one update wastes an opportunity to learn from it. Repeated updates also carry risk: an action that looks good in these records may partly owe its success to chance. Repeatedly raising its probability moves the new policy away from the policy that collected the data, so those records no longer directly represent what the new policy will encounter.

PPO asks whether the same batch can support several epochs of minibatch updates while reducing the risk of damaging performance through excessive changes. TRPO already uses constrained optimization to limit policy changes. PPO seeks a simpler approach compatible with ordinary gradient optimization.

Compact reading points:

- More updates: learn more from experience already collected.
- Too much change: chance successes can be reinforced and performance damaged.
- Goal: several updates per batch with less risk from excessive policy changes.

Source: PPO v2 §§1–2.2. The paper reports that repeated optimization of the ordinary policy-gradient objective on the same trajectory often causes destructively large updates in practice.

### #ppo-star-a — A · Action: more change need not earn more credit

This page focuses on PPO-Clip. It estimates how much better a sampled action is than usual behavior in that state, then compares the probability of that same action under the new and old policies. Their ratio is r in the formulas below.

For a teaching example, suppose the old policy chooses an action with probability 20%, and the sample estimates that action as better than usual. With clipping width ε=0.2, increasing its probability from 20% to 24% gives a ratio of 1.2. Raising it further to 30% gives 1.5, but no longer increases this sample’s contribution to the clipped PPO objective. The 20% increase is relative: moving from 20% to 24% adds 4 percentage points.

This is the concrete meaning of removing the incentive for a large update: this sample stops earning a higher objective value from further changes in the estimated beneficial direction. The actual probability is not forcibly capped at 24%; other samples and shared parameters can still move it. If a change worsens this sample’s objective, the min in the formula retains that worse score.

Compact reading points:

- Teaching assumptions: the same action, advantage A=1 and clip width ε=0.2.
- Above 24%, this sample earns no further objective credit; its actual probability can still change.
- 20%→24% is a 20% relative increase, or 4 percentage points.

Teaching comparison: Old policy 20% (r=1 · score 1); At the threshold 24% (r=1.2 · score 1.2); Increase further 30% (r=1.5 · score stays 1.2). Scores are one sample’s objective values, not game rewards.

Source: PPO v2 §3, Eq.7 and Figure 1. The 20%→24%→30% example is a teaching calculation with fixed positive advantage, not experimental data or a hard probability constraint.

### #ppo-star-r — R · Result: reuse, without guaranteed improvement

The algorithm alternates between collecting a batch and optimizing on that batch for several epochs. The paper compares it on simulated robotic locomotion and Atari games: PPO outperforms the compared methods on its continuous-control tests; on Atari, its sample efficiency is better than A2C and similar to ACER. The evidence section below gives the tasks, metrics and comparison conditions.

These results support the method’s practical value in those experiments. They do not guarantee that every update improves actual return or enforce a hard bound on the full policy change. As you read the formulas, keep three questions in mind: how good was the action, how much did its probability change, and when does further change stop increasing the objective?

Compact reading points:

- Collect a batch → learn for several epochs → sample again with the new policy.
- The paper tests continuous control and Atari; the results support practical usefulness.
- Good benchmark results do not guarantee improvement or a hard bound on each policy change.

Source: PPO v2 §§1, 5 (Algorithm 1) and 6.2–6.3; clipping behavior in §3 Figures 1–2. Experimental findings are not a guarantee for individual updates.

### #ppo-start — Start with reward, return, value and advantage

Imagine an agent making three decisions and receiving 1 point only if it succeeds at the end. State s is the information it sees; action a is its choice. Policy π assigns probabilities to the available actions in that state. Parameters θ are the adjustable numbers in its neural network.

Immediate reward Rₜ is the score at this step. Return Gₜ adds this and later rewards. The discount γ (gamma, from 0 to 1) weights future rewards: one step away gets γ, two steps away get γ². This page uses capital R for reward to distinguish it from probability ratio r.

With rewards [0,0,1] and γ=0.9, the first reward is 0 but its return is 0+0.9×0+0.9²×1=0.81. A later outcome can therefore inform an earlier decision.

Value V(s) estimates expected return from a state when following the policy. Q(s,a) estimates return after first choosing a and then following that policy. Advantage A=Q−V measures how much better that action is than usual behavior in the state; it is neither the immediate reward nor a success probability.

The true Q and V are usually unknown. The actor assigns action probabilities; the critic predicts V. Sampled outcomes and value predictions produce an estimated advantage Â. The hat means an estimate, which can contain noise and error.

Compact reading points:

- Reward R: the score now. Return G: accumulated score from now onward.
- Value V: expected performance. Advantage A: how much better this action is than usual.
- The actor chooses actions; the critic estimates value; Â is an imperfect advantage estimate.

```text
Gₜ = Rₜ + γRₜ₊₁ + γ²Rₜ₊₂ + …
A(s,a) = Q(s,a) − V(s)
```

Definitions: GAE v6, §2, Eqs. 4–5 (discounted values and advantage); the example is not an experiment.

### #ppo-loop — One PPO iteration: what stays fixed and what changes?

This is a teaching decomposition of the paper’s actor–critic algorithm. Select a stage to inspect its inputs and outputs. Arrows show data flow and the outer loop; no model is being trained.

Source: PPO v2, p. 5, Eqs. 9, 11–12 and Algorithm 1.

### #ppo-anchor-question — Why not reuse the first batch forever?



### #ppo-symbols — Read the symbols before the operations



Source: PPO v2, p. 3, Eqs. 6–7 and Figure 1; examples are teaching calculations.

### #ppo-ratio — ① Probability ratio: how much more likely is the same action?

r=new probability÷old probability. If old=0.2 and new=0.3, r=1.5: the probability is 1.5 times its old value, a 50% relative increase and a 10-percentage-point absolute increase. A ratio is not a probability and can exceed 1.

r=1 means this action’s probability in this state is unchanged; r>1 means increased; r<1 means decreased. State and action must match and the old probability must be positive. Implementations often exponentiate the difference of log probabilities.

Here log is the natural logarithm and exp(x)=eˣ is its inverse. Since log p−log q=log(p/q), subtracting logs and exponentiating is equivalent to dividing probabilities, often useful when probabilities are very small.

Compact reading points:

- Old probability 0.2, new probability 0.3 → r=0.3/0.2=1.5.
- r>1: choose more often. r<1: choose less often. A ratio can exceed 1.
- Compare the same state and action, with positive old probability.

```text
rₜ(θ) = πθ(aₜ|sₜ) / πold(aₜ|sₜ)
rₜ(θ) = exp(log πθ(aₜ|sₜ) − log πold(aₜ|sₜ))
```

Source: PPO v2, p. 3, Eqs. 6–7 and Figure 1; examples are teaching calculations.

### #ppo-score — ② Why multiply by advantage? Start with unclipped rA

A>0 means better than baseline: increasing its probability increases rA. For A<0, decreasing its probability makes rA less negative, also increasing the objective. A=0 supplies no actor update signal from this term.

For A=−1, moving r from 1 to 0.5 changes rA from −1 to −0.5. Since −0.5>−1, maximization encourages choosing that action less often. “Beneficial” here means the direction indicated by the advantage estimate, not a guarantee of higher real returns.

Compact reading points:

- A>0: raising probability increases rA.
- A<0: lowering probability makes rA less negative, improving the objective.
- A=0: no policy signal from this term. Estimated benefit does not guarantee actual improvement.

Source: PPO v2, p. 3, Eqs. 6–7 and Figure 1; examples are teaching calculations.

### #ppo-clamp — ③ clip produces a candidate value

With ε=0.2, the interval is [0.8,1.2]. clip returns 0.8 below that interval, 1.2 above it, and the input inside it. It changes a candidate ratio in the objective; it does not overwrite the model’s probabilities.

A larger ε moves the plateau farther away, allowing a larger beneficial-direction change before extra incentive disappears. Actual update size is not determined by ε alone.

Compact reading points:

- ε=0.2 → the candidate ratio stays in [0.8,1.2].
- Below 0.8 return 0.8; above 1.2 return 1.2; otherwise keep the input.
- clip changes a candidate in the objective, not the model output itself.

```text
clip(r, 1−ε, 1+ε) = min(max(r, 1−ε), 1+ε)
```

Source: PPO v2, p. 3, Eqs. 6–7 and Figure 1; examples are teaching calculations.

### #ppo-min — ④ Why min as well? Retain the penalty for worsening changes

Because the objective is maximized, taking the smaller value is conservative. With A=1 and r=1.5, the raw term is 1.5 and the clipped candidate is 1.2. Choosing 1.2 removes extra reward for increasing beyond the upper boundary.

With A=−1 and r=0.5, the raw term is −0.5 and the clipped candidate is −0.8. min selects −0.8, the more negative number. Reducing r further no longer improves this sampled term, so the negative-advantage plateau is on the lower side.

Conversely, A=−1 and r=1.5 makes a bad action more likely: min(−1.5,−1.2)=−1.5 retains the penalty. Using clip alone would plateau on both sides and erase the corrective signal in this worsening direction too.

Compact reading points:

- A good action increased too far: min(1.5,1.2)=1.2, with no extra credit.
- A bad action decreased too far: min(−0.5,−0.8)=−0.8, also a plateau.
- A bad action chosen more often: min(−1.5,−1.2)=−1.5, retaining the penalty.

Source: PPO v2, p. 3, Eqs. 6–7 and Figure 1; examples are teaching calculations.

### #ppo-piecewise — Work through all four cases



```text
ℓ(r,A) = (1+ε)A   if A>0 and r>1+ε
ℓ(r,A) = (1−ε)A   if A<0 and r<1−ε
ℓ(r,A) = rA       otherwise
```

Source: PPO v2, p. 3, Eqs. 6–7 and Figure 1; examples are teaching calculations.

### #ppo-average — ⑤ From one term to a batch: average over samples

Capital L is the batch objective; lowercase ℓ is one sampled term. Ê means add the terms and divide by sample count B. Terms 1.2 and −0.8 average to 0.2. This is a surrogate value, not a success rate or the actual reward of this iteration.

Within an actor update on this batch, states, actions, old probabilities and advantages are fixed. Changing θ changes current probabilities and therefore r. A plateaued sampled term stops contributing a gradient, but other samples, value terms or entropy terms may still change shared parameters.

Σ means summation, with i running from 1 to B. Training software usually minimizes a loss, so negate the objective: Jactor=−LCLIP. Minimizing Jactor is equivalent to maximizing LCLIP; it does not reverse the intended learning direction.

Compact reading points:

- Score each sample, add the scores and divide by batch size B.
- Old probabilities and advantages stay fixed within a batch; current parameters θ change.
- Other terms can move shared parameters even when one term plateaus. The loss can be −L.

```text
LCLIP(θ) = (1/B) ∑ᵢ₌₁ᴮ ℓ(rᵢ(θ), Âᵢ)
Jactor(θ) = −LCLIP(θ)
```

Source: PPO v2, p. 3, Eqs. 6–7 and Figure 1; examples are teaching calculations.

### #ppo-gradient — From scores to parameter updates: why log and gradients?

∇θ is the vector describing how the objective changes when each parameter changes slightly. Moving a small step along it is gradient ascent. Code usually uses descent, so it minimizes Jactor=−LCLIP. Learning rate η is distinct from clip width ε.

Off the plateau, the chain rule gives ∇θ(rA)=A r ∇θ log πθ. Since ∇ log π=(∇π)/π, multiplying by r=πθ/πold gives the same derivative. At θ=θold, where r=1, this matches the ordinary policy-gradient term A∇ log π.

At an active clipping boundary there is a kink and generally no unique derivative. A numerical library can choose a subgradient convention. This page labels the kink rather than presenting one software convention as the unique mathematical answer.

Compact reading points:

- Maximize L, equivalently minimize −L.
- Off the clipping plateau, the chain rule carries objective changes back to θ.
- The active boundary is a kink. Learning rate η differs from clip width ε.

```text
θ ← θ + η ∇θLCLIP(θ)
∇θ(rₜÂₜ) = Âₜ rₜ ∇θ log πθ(aₜ|sₜ)
```

Source: PPO v2, §2.1 Eqs. 1–2 and §3 Eqs. 6–7; the chain rule is a teaching derivation.

### #ppo-importance — Why use old-policy data to evaluate a new policy?

At a fixed state s, weighting old-policy actions by πθ/πold changes an action average into a new-policy average. This requires old-policy support wherever the new policy has probability.

The new policy may also visit different states. Since these states still come from the old policy, rA is a local surrogate, not an exact correction of the new policy’s full trajectory distribution or a guarantee about real return. Clipping modifies this surrogate further.

Compact reading points:

- At a fixed state, the ratio reweights action averages, subject to a support condition.
- States still come from the old policy, so this does not exactly correct full new-policy trajectories.

```text
∑ₐ πold(a|s) [πθ(a|s)/πold(a|s)] A(s,a)
= ∑ₐ πθ(a|s) A(s,a)
```

Source: PPO v2, §§2.2–3, Eqs. 3–7; the fixed-state reweighting identity is a teaching derivation.

### #ppo-gae — Where advantage comes from: how much better than expected?

The critic predicts future return V(sₜ). After acting, we observe reward Rₜ and reach a new state with estimated remaining return V(sₜ₊₁). Thus Rₜ+γV(sₜ₊₁) is an updated estimate. Subtracting the previous V(sₜ) gives temporal-difference (TD) residual δₜ.

One residual can be noisy. Generalized advantage estimation (GAE) sums this and later residuals with powers of γλ. λ (lambda, from 0 to 1) controls the horizon: λ=0 uses only this step; larger λ weights later residuals more heavily. It does not simply enlarge every advantage because residuals can have either sign.

Compact reading points:

- δ: observed reward plus the next-state value estimate minus the original estimate.
- GAE: weight current and later δ by 1, γλ, (γλ)²…
- λ=0 uses only the current residual; larger λ gives later residuals more weight.

```text
δₜ = Rₜ + γV(sₜ₊₁) − V(sₜ)
Âₜ = δₜ + γλδₜ₊₁ + (γλ)²δₜ₊₂ + …
```

Source: PPO v2, p. 5, Eqs. 9, 11–12 and Algorithm 1.

### #ppo-gae-lab — Calculate a three-step trajectory

Teaching assumptions: R=[0,0,1], V=[0.4,0.5,0.6,0], and true termination after step 3. Terminal value is 0. This recomputes advantages without retraining the critic; V remains fixed when γ changes.

Source: PPO v2, p. 5, Eqs. 9, 11–12 and Algorithm 1.

### #ppo-gae-sum — GAE summation limits and the final state

Here t=0,…,T−1 indexes T actions and sT is the final state. Sum from l=0 to T−1−t; equivalently set ÂT=0 and recurse backward. At λ=1, intermediate value terms cancel, leaving discounted rewards plus the final-state bootstrap minus current value.

At true termination V(sT)=0. If collection stops because its segment length is reached but the environment continues, retain V(sT) as an estimate of future return; truncation is not always termination. Smaller λ usually reduces dependence on distant random outcomes but relies more on possibly inaccurate values. This bias–variance tradeoff has no universally optimal setting.

Version note: PPO v2 p. 5 Eqs. 10–11 print the final exponent as T−t+1, inconsistent with the preceding powers ending at index T−1. This page uses explicit summation limits with final exponent T−1−t, cross-checked against GAE §3 Eq. 16, rather than transcribing that typesetting.

Compact reading points:

- True termination: final value is 0. Sampling truncation: usually retain a bootstrap value.
- Smaller λ depends more on value predictions; no universal choice optimizes the bias–variance trade-off.
- Version note: the sum below is explicitly reindexed; expand for the printed PPO v2 exponent discrepancy.

```text
Âₜ = ∑ₗ₌₀ᵀ⁻¹⁻ᵗ (γλ)ˡ δₜ₊ₗ
Âₜ = δₜ + γλÂₜ₊₁,    ÂT = 0
λ=1: Âₜ = ∑ₗ₌₀ᵀ⁻¹⁻ᵗ γˡRₜ₊ₗ + γᵀ⁻ᵗV(sT) − V(sₜ)
```

Source: PPO v2, §5; GAE v6, §3, Eqs. 10–16.

### #ppo-joint — The joint objective: policy, value error and entropy

The policy term LCLIP favors actions with better estimated advantage. Value error LVF=(Vθ−Vtarget)² trains the critic and carries a minus sign because the combined objective is maximized. Vtarget is a fixed value-training target; a common construction adds fixed Â to the sampled value estimate, but implementations must be checked.

Entropy H measures how spread out the action distribution is. For discrete actions, H=−Σπ log π; concentration on one action lowers entropy. A positive entropy coefficient encourages exploration without guaranteeing a good policy. c₁ and c₂ weight value error and entropy.

This decomposes Eq. 9 for a shared-parameter joint objective. Actor and critic can also be optimized separately. The continuous-control experiments in §6.1 do not share their parameters and use no entropy bonus, so these terms are not mandatory in every PPO experiment.

Compact reading points:

- Policy term: favor actions judged better by the advantage estimate.
- Subtract value error to train the critic; add entropy to encourage exploration.
- The joint form concerns shared parameters; §6.1 uses separate actor/critic networks and no entropy bonus.

```text
Ltotal = Êₜ[ℓₜCLIP − c₁(Vθ(sₜ)−Vₜtarget)² + c₂H(πθ(·|sₜ))]
Jtotal = −Ltotal
```

Source: PPO v2, p. 5 Eq. 9 and p. 6 §6.1; H denotes the paper’s S.

### #ppo-kl — PPO also includes a KL-penalty variant

KL measures a difference between complete action distributions, rather than only one sampled action. The paper uses KL(πold∥πθ): old-policy probabilities weight log ratios of old to current probabilities. KL is nonnegative but asymmetric; reversing it generally changes the value.

The KL-penalty objective subtracts β×KL; larger β penalizes the same distribution change more. In the paper, measured d>1.5dtarget doubles β and d<dtarget/1.5 halves it for the next update; otherwise β stays unchanged. This is a soft penalty, not a guarantee that d≤dtarget.

TRPO approximately solves an optimization problem with a mean-KL constraint. PPO-Clip instead modifies the objective for multiple epochs of first-order minibatch optimization. KL against a long-term reference in LLM alignment has a different role; πold cannot simply be replaced by πref.

Compact reading points:

- KL(πold∥πθ) compares full action distributions; reversing it usually changes the value.
- Larger β penalizes the same difference more; adaptation still gives a soft penalty.
- Sampling policy πold is distinct from the long-term LLM reference πref.

```text
KL(πold ∥ πθ) = ∑ₐ πold(a|s) log[πold(a|s)/πθ(a|s)]
LKL = Êₜ[rₜÂₜ − β KL(πold(·|sₜ) ∥ πθ(·|sₜ))]
```

Source: PPO v2, §2.2 Eqs. 3–5; §4 Eq. 8 and the β adaptation rule.

### #ppo-protocol — How were these scores obtained?

Each environment is trained for one million timesteps. Mean total reward over the final 100 episodes is linearly normalized within that environment, then averaged over 21 runs: 7 environments × 3 random seeds. Policies use a two-layer MLP with 64 units per layer, tanh activations and Gaussian actions.

0.82 is a normalized score in this comparison, not an 82% success rate or proof that ε=0.2 is universally optimal. The −0.39 no-clipping score reflects a very poor HalfCheetah result; the table provides no numerical uncertainties to turn into error bars.

Source: PPO v2, p. 6 §6.1 and Table 1.

### #ppo-kl-results — Expand the remaining KL comparisons in Table 1



Source: PPO v2, Table 1; adaptive KL starts with β=1.

### #ppo-atari — Table 2: learning quickly and finishing well are different

For each of 49 Atari games, each metric is averaged over 3 trials before comparing A2C, ACER and PPO. The entries count games won, not rewards or success rates. Mean reward throughout training emphasizes learning speed; the last 100 episodes emphasize final performance.

Source: PPO v2, p. 8 §6.4 and Table 2.

### #ppo-check-min — Check: does A=−1, r=1.5, ε=0.2 reach a plateau?



### #ppo-check-kl — Check: why can KL grow after a plateau appears?



### #ppo-llm — Keep these roles distinct in language models

For a language model, the state is usually the prompt and generated prefix, and the action is the next token. The actor gives token probabilities and the critic estimates future return from that prefix; reward may arrive only after the response ends. This is a role mapping, not a claim that the 2017 paper ran LLM experiments.

This page explains basic PPO-Clip. verl also supports different advantage estimators, KL configurations and extensions such as dual-clip. Engineering choices about old_log_prob, actual rollout probabilities, reference probabilities and token/sequence aggregation must be checked separately; this teaching curve does not represent every configuration.

Source: pinned verl docs/algo/ppo.md, Key Components and Advanced Extensions; original paper and later implementation are distinct.

### #ppo-math-map — Three questions behind the formula



Compact reading points:

- Was the action better than usual? → advantage A.
- How much did its probability change? → ratio r.
- Should further change earn credit? → clip and min limit the extra incentive.

### #ppo-evidence-map — Read the comparison conditions first



Compact reading points:

- Table 1: 7 continuous-control environments × 3 seeds, totaling 21 runs.
- Normalize within each environment: random policy=0, best result=1, then average.
- 0.82 is normalized return, not an 82% success rate; ε=0.2 need not always be best.

### #ppo-limits-map — Keep three limits in mind



Compact reading points:

- A single score plateau does not freeze the entire policy.
- Clipping guarantees neither improvement nor a hard bound on distributional change (KL).
- The original paper studies control and games; it does not validate a particular LLM configuration.


## Version and audit notes

## Audit 2026-11-03

Rechecked PPO 1707.06347v2 against the PDF (SHA-256 unchanged), including visually inspected PDF pp. 3, 5, 6 and 8. Supplemented definitions with GAE 1506.02438v6 and retained the pinned verl documentation commit.

- papers/ppo/index.html #math, Chinese/English: compact formula and GAE prose → symbol definitions, ratio interpretation, signed worked cases, batch averaging, chain-rule derivation, explicit GAE limits, joint-objective signs and directed KL. PPO §§2–5, Eqs.1–12, Figure 1 and Algorithm 1.
- #ppo-loop, both languages: two prose method panels → retained panels plus five selectable stages; fixed old probabilities/advantages, K epochs and outer refresh are explicit. PPO Algorithm 1, p.5.
- #lab: one objective curve → raw, clipped-candidate and min curves computed from the same inputs; explicit boundary lines, signed branches, kinks and zero advantage. PPO §3 Eq.7, Figure 1; synthetic inputs, not measured data.
- #ppo-gae-lab: no worked trajectory → R=[0,0,1], V=[0.4,0.5,0.6,0], true termination, fixed critic values; default gamma=.9/lambda=.8 gives deltas [.05,.04,.4] and advantages [.28616,.328,.4]. Teaching data only.
- #ppo-gae-sum: compact description without index caveat → explicit sum l=0..T-1-t and note that PPO v2 Eqs.10–11 print T-t+1 in the last exponent. Verified visually; consistent powers follow GAE §3 Eq.16. This is a stated reindexing, not silent transcription of the printed inconsistency.
- #evidence: selected clip rows → preserved rows plus no-clip baseline, all remaining Table 1 rows in an expansion, full Table 2 at research depth; last-100-episode metric, 21-run aggregation, architecture and lack of tabulated uncertainty explicit. PPO pp.6,8.
- #implementation: terse role note → token/prefix mapping and distinctions between original PPO and pinned verl extensions. No LLM performance claim added.
- Original valid content and eight section anchors retained; original formula claims incorporated into the expanded derivation. See reports/ppo-formula-lesson.md for separate technical, scientific and editorial checks.
- Source files retrieved 2026-11-03: 1707.06347v2.pdf from https://arxiv.org/pdf/1707.06347v2, SHA-256 e78feadadbdbb0b601b3c2bcc81404722cd431a489b307545f9b7bea1e8c4f5b; 1506.02438v6.pdf from https://arxiv.org/pdf/1506.02438v6, SHA-256 5aa736ccf3517a1f36d0ca8146982e69beaf9a2bdccac2ae324f780743bc045e; verl-ppo.md from the pinned commit, SHA-256 48fe658d2c04ddef720daa978f8723746035fda62ac647fd28a8b97ea03b7c16. Public originals remain outside the repository in the persistent paper-source cache.
## Audit 2026-11-03 — STAR opening

Rechecked the cached PPO 1707.06347v2 introduction, §§2–3, Algorithm 1 and the experimental conclusions in §6.

- Hero title/lead, Chinese and English: the abstract metaphor about an update incentive → a concrete question about reusing a batch without overly large policy changes. Catalogue and README labels follow the same title.
- #background, both languages: definitions before the research motivation → an added STAR sequence before the retained definitions. S explains policy-based trial and error; T establishes the data-reuse/update-size trade-off and TRPO context; A introduces the clipped objective with a declared fixed-positive-advantage teaching example (20% to 24% to 30%, epsilon 0.2); R states the paper’s scoped empirical conclusions and absence of per-update guarantees. Sources: PPO v2 abstract, §§1–3, §5 Algorithm 1, §§6.2–6.3.
- The example’s 20% relative increase is explicitly distinguished from the 4-percentage-point absolute increase. Clipping changes one sample’s objective contribution and does not cap the actual probability. All previous lesson modules, original section anchors and evidence remain. No calculation logic or experimental values changed.
## Audit 2026-11-03 — concise reading layers

Reorganized the verified PPO v2 lesson after reading feedback without changing the underlying formulas or empirical values.

- #background / STAR, Chinese and English: long paragraphs → short points, with the complete prior explanation and citations in native disclosures. The 20%→24%→30% teaching example is now a labelled comparison: fixed A=1, epsilon=0.2, ratios 1/1.2/1.5 and single-term scores 1/1.2/1.2, independently checked against Eq.7. Scores are explicitly not game rewards; the actual probability is not capped.
- Reading guide and depth controls: previously unnamed differences → cumulative layers (intuition: story/example/evidence/limits; mechanism: symbols, signed clipping and GAE; research: gradients, importance-sampling assumptions, KL and detailed experimental protocols). Critical limitations remain in the default layer.
- #math and #evidence: compact reading maps precede the preserved detailed derivations and original result table. Probability/advantage definitions and experimental qualifications remain available. All original lesson IDs and content paragraphs are retained; summaries do not replace the underlying evidence.
- Visual audit: probability comparison is a teaching diagram, not measured performance or a time series. Source: PPO v2 §3 Eq.7/Figure 1. Reading-layer organization is editorial guidance, not a scientific result. Original claim locators and version caveats continue to apply.

- [GAE paper: value, advantage and generalized advantage estimation](https://arxiv.org/abs/1506.02438v6): §2 Eqs. 4–5; §3 Eqs. 10–16. Supplementary definitions and derivations, not PPO experimental evidence.
