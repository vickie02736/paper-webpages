# SPIN

[独立讲解页 / Independent explainer](index.html) · [专题目录 / Collection](../../collections/verl-algorithms/)

反复区分固定的人类示范与当前模型生成的答案，持续利用已有 SFT 数据，而不必每轮购买新的偏好标注。

Repeatedly distinguish fixed human demonstrations from model-generated answers, extracting more value from existing SFT data without collecting new preference labels every round.

- Source: [Self-Play Fine-Tuning Converts Weak Language Models to Strong Language Models](https://arxiv.org/abs/2401.01335v3)
- [Evidence ledger](sources.md)
- Chinese / English; Intuition / Mechanism / Research; keyboard-operable teaching interaction.
- Editorial source: `references/verl-explainers.json`; render with `python3 scripts/build-verl-explainers.py`.
- Shared runtime: `assets/verl.js`, `assets/verl-math.js`; no external runtime services.
