# PPO

[独立讲解页 / Independent explainer](index.html) · [专题目录 / Collection](../../collections/verl-algorithms/)

对已经获益的动作，停止奖励过大的概率变化。裁剪改变优化目标，却不把整个策略锁在一个硬边界内。

Stop rewarding excessively large probability changes in the beneficial direction. Clipping changes the objective; it does not put the entire policy inside a hard boundary.

- Source: [Proximal Policy Optimization Algorithms](https://arxiv.org/abs/1707.06347v2)
- [Evidence ledger](sources.md)
- Chinese / English; Intuition / Mechanism / Research; keyboard-operable teaching interaction.
- Editorial source: `references/verl-explainers.json`; render with `python3 scripts/build-verl-explainers.py`.
- Shared runtime: `assets/verl.js`, `assets/verl-math.js`; no external runtime services.
