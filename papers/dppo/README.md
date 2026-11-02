# DPPO

[讲解页 / Explainer](index.html) · [人工智能与计算 / Artificial Intelligence & Computing](../../?theme=ai&q=verl#themes)

同样的概率比，在低概率和高概率 token 上代表不同的分布变化。DPPO 使用散度近似定义更新掩码。

The same probability ratio represents different distributional changes for rare and common tokens. DPPO defines an update mask using an approximation to divergence.

- Source: [Rethinking the Trust Region in LLM Reinforcement Learning](https://arxiv.org/abs/2602.04879v3)
- [Evidence ledger](sources.md)
- Chinese / English; Intuition / Mechanism / Research; keyboard-operable teaching interaction.
- Editorial source: `references/verl-explainers.json`; render with `python3 scripts/build-verl-explainers.py`.
- Shared runtime: `assets/verl.js`, `assets/verl-math.js`; no external runtime services.
