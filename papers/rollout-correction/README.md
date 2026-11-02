# Rollout Correction

[讲解页 / Explainer](index.html) · [人工智能与计算 / Artificial Intelligence & Computing](../../?theme=ai&q=verl#themes)

把真实采样分布、PPO 的旧策略锚点和当前策略分开，分别处理数据分布偏移与优化更新。

Separate the actual sampling distribution, PPO’s old-policy anchor, and the current policy to handle data-distribution shift and optimization updates independently.

- Source: [Rollout Correction](https://verl.readthedocs.io/en/latest/algo/rollout_corr.html)
- [Evidence ledger](sources.md)
- Chinese / English; Intuition / Mechanism / Research; keyboard-operable teaching interaction.
- Editorial source: `references/verl-explainers.json`; render with `python3 scripts/build-verl-explainers.py`.
- Shared runtime: `assets/verl.js`, `assets/verl-math.js`; no external runtime services.
