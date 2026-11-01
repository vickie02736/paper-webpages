# MOF SNAP — Temperature-driven active learning

[Open the explainer](index.html) · [中文版](index.html?lang=zh) · [English](index.html?lang=en) · [Evidence and figure audit](sources.md) · [Verification record](QA.md)

中英双语讲解 Sharma 与 Sanvito 的 *Quantum-accurate machine learning potentials for metal-organic frameworks using temperature driven active learning*，npj Computational Materials **10**, 237 (2024), [DOI: 10.1038/s41524-024-01427-y](https://doi.org/10.1038/s41524-024-01427-y)。沿用 Research Atlas 共享阅读系统，默认中文；无需框架、运行时 CDN 或登录。

A bilingual explanation of how CBAD structural selection and a temperature curriculum build separate SNAP potentials for ZIF-8 and MOF-5. The page uses the shared Research Atlas reading system and local assets.

## Explore / 交互内容

- 用教学键长与分箱宽度检查 CBAD“任一新分箱即接受”的条件；显示当前索引与选择反馈。Invented bond-length examples demonstrate the novelty rule without claiming a new simulation.
- 切换 SI 表 1 的全部九组实际分辨率，比较 ZIF-8 训练集大小。Explore all nine reported resolution/count pairs with a zero-based count bar.
- 分步查看 MOF-5 的 51 → 100 → 147 → 195 → … → 487 → 537 → 596 构型流程与模型更替。Inspect reported workflow states, DFT labeling and supplemental sampling.
- 阅读全部八幅原图及对应双语解读，播放兼容转码的补充视频，下载原始资料。Browse eight source-figure crops with bilingual notes and play the supplementary movie.
- 展开公式、标量监督值计算、VDOS、数据相关性及适用范围等研究细节。Expand details without losing the current interaction state when switching language.

## Scientific scope / 科学范围

CBAD 是构型筛选规则；SNAP 用双谱描述符拟合能量。ZIF-8 的 672 构型来自 AIMD 候选池，MOF-5 的 596 构型来自温度驱动的 SNAP–MD 流程及后续补样。训练与测试误差明确区分。生产 MD 外加 D3(BJ)，ZIF-8 另有 ZBL 排斥。

CBAD selects configurations; SNAP fits bispectrum descriptors. ZIF-8 uses an AIMD-generated candidate pool, whereas MOF-5 uses successive SNAP-driven MD. Reported errors preserve their training/test identity. Production MD includes external D3(BJ), and ZIF-8 also uses ZBL.

SI 伪代码的接受条件、正文与 SI 的末阶段温度扫描范围存在差异，页面与 [sources.md](sources.md) 保留说明。约 600 个训练构型与 1000 K 采样不构成任意 MOF 的数据量或稳定性保证。补充视频是有偏置的元动力学可视化，不直接给出无偏动力学速率。

The evidence record documents the SI acceptance-condition inconsistency and the main/SI final-ramp descriptions. Sampling counts and temperatures remain specific to this study. The biased metadynamics movie does not measure an unbiased rotation rate.

## Local files and attribution / 本地资料与署名

- [Article PDF, 13 pages](assets/article.pdf)
- [Supporting information, 18 pages](assets/supplementary.pdf)
- [Original supplementary movie](assets/supplementary-movie-1.mp4)
- [Compatible movie](assets/movie-web.mp4)
- [Publisher article](https://www.nature.com/articles/s41524-024-01427-y)
- [Author code](https://github.com/asharma-ms/MOF_MLP_2024)
- [Author data](https://doi.org/10.5281/zenodo.11176257)

Original figures and materials: Sharma & Sanvito (2024), © The Author(s) 2024, [CC BY 4.0](https://creativecommons.org/licenses/by/4.0/). Figures are cropped/rasterized; structures, data points and scales are preserved. The player uses a compatible transcode and a real movie-frame poster; the original video remains available. New text, translations and teaching examples are explanatory additions, with no new fitted potential or simulation result.

## Verification / 检查

Run from the repository root:

```bash
python3 .agents/skills/paper-webpage/scripts/check_page.py --root "$PWD" --slug mof-snap-active-learning
node scripts/check-explainers.cjs
```

Serve over local HTTP for browser checks. Scientific claim/figure checks are recorded in [sources.md](sources.md); actual browser, responsive, language/state and publication checks are recorded separately by the publishing task. The scientific audit does not substitute for running those checks.
