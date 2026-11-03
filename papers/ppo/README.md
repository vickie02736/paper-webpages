# PPO

[讲解页 / Explainer](index.html) · [人工智能与计算 / Artificial Intelligence & Computing](../../?theme=ai&q=verl#themes)

一批经验，多学几遍；改动太大，表现可能变差。先看故事与算例，再逐层展开公式。

Learn repeatedly from one batch; change the policy too much and performance can drop. Start with a story and example, then unpack the formulas.

- Source: [Proximal Policy Optimization Algorithms](https://arxiv.org/abs/1707.06347v2)
- [Evidence ledger](sources.md)
- Chinese / English; Intuition / Mechanism / Research; keyboard-operable teaching interaction.
- Editorial source: `references/verl-explainers.json`; render with `python3 scripts/build-verl-explainers.py`.
- Shared runtime: `assets/verl.js`, `assets/verl-math.js`; no external runtime services.
- Expanded formula lesson: STAR background, symbol guide, signed clipping cases, five-stage training walkthrough and three-step GAE calculation; dedicated assets `assets/ppo-lesson.css` and `assets/ppo-lesson.js`.
- Supplementary source: GAE `1506.02438v6`; see the version note on the PPO v2 GAE exponent.
- Acceptance: `node scripts/check-ppo-lesson.cjs` (set `PAPER_BASE_URL` to a local HTTP server).
- Cumulative reading layers: Intuition gives the STAR story, probability comparison and essential evidence/limits; Mechanism adds notation, clipping and GAE; Research adds derivations, assumptions and experimental details. Longer original explanations remain in native disclosures.
