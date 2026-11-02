# PPO-EWMA

[讲解页 / Explainer](index.html) · [人工智能与计算](../../?theme=ai#themes)

批量缩小后，怎样保留相近的学习行为？从三个策略的职责，到 EWMA 年龄、步长换算与 Procgen 消融。

How can smaller batches preserve similar learning behavior? Follow three policy roles, EWMA age, step-size scaling, and Procgen ablations.

- Adopted source: [NeurIPS 2022 · arXiv 2110.00641v3 · 2022-09-24](https://arxiv.org/abs/2110.00641v3)
- [Claim and visual ledger](sources.md)
- Full Chinese / English, Intuition / Mechanism / Research, keyboard-operable deterministic labs.
- Editorial source: `scripts/build-rl-foundations.py`; regenerate with Python 3.
- Local runtime: `assets/rl-foundations.js`, numerical functions: `assets/rl-foundations-math.js`.
- Validation: `reports/rl-foundations-validation.md`.
