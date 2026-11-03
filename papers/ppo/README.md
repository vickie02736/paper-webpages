# PPO

[讲解页 / Explainer](index.html) · [人工智能与计算 / Artificial Intelligence & Computing](../../?theme=ai&q=verl#themes)

先从背景说起：模型通过试错收集经验，再调整各个动作的选择概率。同一批经验多学几遍能减少采样需求，但也可能把原本有用的策略改坏。PPO 怎样处理这个矛盾？

Start with the setting: a model collects experience through trial and error, then adjusts action probabilities. Learning repeatedly from one batch can reduce the need for new samples, but can also damage a useful policy. How does PPO address this trade-off?

- Source: [Proximal Policy Optimization Algorithms](https://arxiv.org/abs/1707.06347v2)
- [Evidence ledger](sources.md)
- Chinese / English; Intuition / Mechanism / Research; keyboard-operable teaching interaction.
- Editorial source: `references/verl-explainers.json`; render with `python3 scripts/build-verl-explainers.py`.
- Shared runtime: `assets/verl.js`, `assets/verl-math.js`; no external runtime services.
- Expanded formula lesson: STAR background, symbol guide, signed clipping cases, five-stage training walkthrough and three-step GAE calculation; dedicated assets `assets/ppo-lesson.css` and `assets/ppo-lesson.js`.
- Supplementary source: GAE `1506.02438v6`; see the version note on the PPO v2 GAE exponent.
- Acceptance: `node scripts/check-ppo-lesson.cjs` (set `PAPER_BASE_URL` to a local HTTP server).
