# Entropy Mechanism

[独立讲解页 / Independent explainer](index.html) · [专题目录 / Collection](../../collections/verl-algorithms/)

策略越来越确信已有答案时，训练可能失去探索空间。论文从概率与更新的协方差解释熵变化，并选择性约束高协方差 token。

As a policy becomes more confident in familiar answers, training may lose exploration capacity. The paper relates entropy changes to covariance between probabilities and updates, then selectively constrains high-covariance tokens.

- Source: [The Entropy Mechanism of Reinforcement Learning for Reasoning Language Models](https://arxiv.org/abs/2505.22617v1)
- [Evidence ledger](sources.md)
- Chinese / English; Intuition / Mechanism / Research; keyboard-operable teaching interaction.
- Editorial source: `references/verl-explainers.json`; render with `python3 scripts/build-verl-explainers.py`.
- Shared runtime: `assets/verl.js`, `assets/verl-math.js`; no external runtime services.
