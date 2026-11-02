# OTB

[独立讲解页 / Independent explainer](index.html) · [专题目录 / Collection](../../collections/verl-algorithms/)

用生成过程累计的梯度能量估计每个位置的奖励基线，减少长序列中的方差，并避免把 padding 当作真实样本。

Estimate a reward baseline at each position using accumulated gradient energy, reducing long-sequence variance while avoiding treatment of padding as real samples.

- Source: [The Optimal Token Baseline: Variance Reduction for Long-Horizon LLM-RL](https://arxiv.org/abs/2602.07078v2)
- [Evidence ledger](sources.md)
- Chinese / English; Intuition / Mechanism / Research; keyboard-operable teaching interaction.
- Editorial source: `references/verl-explainers.json`; render with `python3 scripts/build-verl-explainers.py`.
- Shared runtime: `assets/verl.js`, `assets/verl-math.js`; no external runtime services.
