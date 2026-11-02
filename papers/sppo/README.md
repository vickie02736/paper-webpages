# SPPO

[独立讲解页 / Independent explainer](index.html) · [专题目录 / Collection](../../collections/verl-algorithms/)

直接建模答案之间的胜率，把偏好对齐写成常和博弈，通过自博弈逼近不容易被对手利用的策略。

Model pairwise win probabilities directly, formulate alignment as a constant-sum game, and use self-play to approach a less exploitable policy.

- Source: [Self-Play Preference Optimization for Language Model Alignment](https://arxiv.org/abs/2405.00675v5)
- [Evidence ledger](sources.md)
- Chinese / English; Intuition / Mechanism / Research; keyboard-operable teaching interaction.
- Editorial source: `references/verl-explainers.json`; render with `python3 scripts/build-verl-explainers.py`.
- Shared runtime: `assets/verl.js`, `assets/verl-math.js`; no external runtime services.
