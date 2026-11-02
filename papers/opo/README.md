# OPO

[讲解页 / Explainer](index.html) · [人工智能与计算 / Artificial Intelligence & Computing](../../?theme=ai&q=verl#themes)

严格使用当前策略采样，再以梯度方差为目标选择奖励基线。实用版本用答案长度近似梯度能量权重。

Sample strictly from the current policy, then choose a reward baseline to reduce gradient variance. The practical version approximates gradient-energy weights using answer lengths.

- Source: [On-Policy RL with Optimal Reward Baseline](https://arxiv.org/abs/2505.23585v2)
- [Evidence ledger](sources.md)
- Chinese / English; Intuition / Mechanism / Research; keyboard-operable teaching interaction.
- Editorial source: `references/verl-explainers.json`; render with `python3 scripts/build-verl-explainers.py`.
- Shared runtime: `assets/verl.js`, `assets/verl-math.js`; no external runtime services.
