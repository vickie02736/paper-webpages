# DRO

[讲解页 / Explainer](index.html) · [人工智能与计算 / Artificial Intelligence & Computing](../../?theme=ai&q=verl#themes)

从提示、回答、标量反馈三元组出发，以正则化最优策略的关系构造平方目标；在实现中必须保留 soft advantage 的含义。

Start from prompt–response–scalar-feedback triples and derive a squared objective from the regularized optimal policy, preserving the meaning of the soft advantage in implementations.

- Source: [Offline Regularised Reinforcement Learning for Large Language Models Alignment](https://arxiv.org/abs/2405.19107v1)
- [Evidence ledger](sources.md)
- Chinese / English; Intuition / Mechanism / Research; keyboard-operable teaching interaction.
- Editorial source: `references/verl-explainers.json`; render with `python3 scripts/build-verl-explainers.py`.
- Shared runtime: `assets/verl.js`, `assets/verl-math.js`; no external runtime services.
