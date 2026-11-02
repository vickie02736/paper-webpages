# GPG

[独立讲解页 / Independent explainer](index.html) · [专题目录 / Collection](../../collections/verl-algorithms/)

保留直接策略梯度，去掉组内标准差缩放，并按有效样本比例校正梯度幅度。简单目标仍需要认真处理批次统计。

Keep direct policy gradients, remove group standard-deviation scaling, and correct gradient magnitude for the fraction of informative samples. A simple objective still requires careful batch statistics.

- Source: [GPG: A Simple and Strong Reinforcement Learning Baseline for Model Reasoning](https://arxiv.org/abs/2504.02546v4)
- [Evidence ledger](sources.md)
- Chinese / English; Intuition / Mechanism / Research; keyboard-operable teaching interaction.
- Editorial source: `references/verl-explainers.json`; render with `python3 scripts/build-verl-explainers.py`.
- Shared runtime: `assets/verl.js`, `assets/verl-math.js`; no external runtime services.
