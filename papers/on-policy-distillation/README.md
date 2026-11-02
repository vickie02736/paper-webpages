# OPD / GKD

[讲解页 / Explainer](index.html) · [人工智能与计算 / Artificial Intelligence & Computing](../../?theme=ai&q=verl#themes)

学生先生成自己的轨迹，教师再对这些前缀给出分布反馈。训练时见到的状态因而更接近学生推理时真正遇到的状态。

The student generates its own trajectories and the teacher supplies distributional feedback on those prefixes, making training states closer to what the student actually encounters at inference.

- Source: [On-Policy Distillation of Language Models: Learning from Self-Generated Mistakes](https://arxiv.org/abs/2306.13649v3)
- [Evidence ledger](sources.md)
- Chinese / English; Intuition / Mechanism / Research; keyboard-operable teaching interaction.
- Editorial source: `references/verl-explainers.json`; render with `python3 scripts/build-verl-explainers.py`.
- Shared runtime: `assets/verl.js`, `assets/verl-math.js`; no external runtime services.
