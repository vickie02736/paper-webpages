# MOFTransformer evidence record

## Primary sources

1. Kang, Y., Park, H., Smit, B. & Kim, J. “A multi-modal pre-training transformer for universal transfer learning in metal–organic frameworks.” *Nature Machine Intelligence* 5, 309–318 (2023). Published online 13 March 2023. DOI: [10.1038/s42256-023-00628-2](https://doi.org/10.1038/s42256-023-00628-2). Local copy supplied as `s42256-023-00628-2.pdf`.
2. Supplementary Information, DOI and title as above. Local copy supplied as `42256_2023_628_MOESM1_ESM.pdf`.

## Claims and evidence locations

| Page claim | Evidence | Interpretation used here |
|---|---|---|
| MOFTransformer combines local and global MOF features for transfer learning | Main text pp. 1–2 (article pp. 309–310), Fig. 1 (article pp. 310–311) | The page labels atom-based graph embeddings as local and methane energy-grid embeddings as global. |
| Input construction | Fig. 1b, article p. 311: 30 × 30 × 30 Å grid, 5 Å patches, 216 patches; `[CLS]`, `[SEP]`, `[VOL]`; 12 blocks, hidden size 768, 12 heads | The architecture diagram is a teaching redraw; it preserves the token order and dimensions but is not a reproduction of crystal coordinates. |
| Pre-training tasks | Main text pp. 3–4 (article pp. 312–313): MTP predicts 1,079 topologies, VFP predicts accessible void fraction, MOC classifies metal/linker atoms; MTP accuracy 0.97, MOC accuracy 0.98, VFP MAE 0.01 | Task cards and values are reported results. |
| Property dependence on global/local features | Fig. 2, article pp. 311–312; Supplementary Fig. S3 | H₂ uptake and diffusivity track accessible volume/topology more strongly; band gap depends more on local chemistry; O₂ diffusivity and CO₂ Henry coefficient are more complex. |
| Fine-tuning comparison | Fig. 3c, article p. 313; Table 1, article pp. 313–314 | Table explorer reports the exact R²/MAE/accuracy values and dataset sizes from Table 1. “Original paper” is the baseline column in Table 1. |
| Interpretability | Figs. 4–5, article pp. 314–315 | H₂ uptake/diffusivity give higher attention to energy-grid features, while band-gap prediction gives higher attention to atom features. For H₂ uptake, the eight highest-attention IRMOF-1 patches are near metal atoms; high-attention patches use a score threshold >0.008 and tend to be within 20 kJ mol⁻¹ of the unit-cell minimum energy. |
| Pre-training and fine-tuning details | Methods, article p. 316; Methods pp. 316–317 | Pre-training: AdamW, 10⁻⁴ learning rate, 10⁻² weight decay, batch 1,024, 100 epochs, split 800,000/126,611/100,000. Fine-tuning: batch 32, 20 epochs, 0.8/0.1/0.1 split, standardized targets. |
| hMOF construction and data | Methods, article p. 316; Supplementary Note S4, SI p. 5 | 1M hMOFs for pre-training and 20k for fine-tuning; PORMAKE with ToBaCCo, CoREMOF and RCSR building blocks/topologies; UFF/LAMMPS optimization. SI reports 719 node blocks, 234 edge blocks and 1,775 topologies in the 1M set. |
| Unique atoms and ablation | Supplementary Notes S1–S2, SI pp. 2–3 | Atoms are grouped by element identity through up to three connected bonds; MTP/VFP help uptake/diffusivity, MOC helps band gap, and all three tasks perform best overall. Performance gains from 500k to 1M pre-training examples are small. |

## Data, code and limits

- Model, embeddings and fine-tuning data: [Figshare 21155506](https://doi.org/10.6084/m9.figshare.21155506).
- UFF-optimised 1M hMOF CIF files: [Figshare 21810147](https://doi.org/10.6084/m9.figshare.21810147).
- Code and documentation: [GitHub](https://github.com/hspark1212/MOFTransformer), [documentation](https://hspark1212.github.io/MOFTransformer), and version 1.0.1 on [PyPI](https://pypi.org/project/moftransformer/1.0.1/).
- The page distinguishes paper-reported results from teaching redraws. The paper evaluates public databases, molecular simulations and text-mined labels; it does not validate new predictions with a prospective synthesis experiment. Energy grids use a methane probe with UFF/TraPPE and fixed 30 Å interpolation, with `[VOL]` added to retain original cell-volume information. PBE band gaps have known open-shell transition-metal error modes. Attention scores are model-dependent relevance signals, not causal proof.

## Bibliographic metadata

Checked 2026-11-01. The shared byline uses the ordered manuscript authors and explicitly mapped publication-time affiliations stored under this paper’s original source URL in [`paper-catalog.json`](../../references/paper-catalog.json). Metadata is generated with `node scripts/build-paper-metadata.cjs`; the same record is used on the homepage.

- [Author information; About this article / publication history](https://www.nature.com/articles/s42256-023-00628-2) — dates.published, dates.accepted, affiliations, authors.

Paper dates: published = 2023-03-13; accepted = 2023-02-06. Source precision is retained; undisclosed acceptance is not inferred from conference notifications. Unverified fields remain explicit. This bibliography update does not revise the scientific content or figures.

## Audit 2026-11-03

The Nature Machine Intelligence version of record is not open access from this environment (only the abstract was retrievable). Re-checked against the open Supplementary Information PDF (Springer ESM) and the ChemRxiv v2 preprint (doi:10.26434/chemrxiv-2022-hcjzc-v2, 2023-01-18, the version immediately preceding publication): all seven Table 1 rows (values, baselines, dataset sizes 5,286 / 8,183 / 2,148 / 3,098, thermal MAE 45 vs 44 °C); pre-training accuracies MTP 0.97, MOC 0.98, VFP MAE 0.01 and 1,079 topologies; 30 Å grid / 5 Å patches / 216 patches, L = 12, H = 768, A = 12, normalised-volume `[VOL]`; CGCNN output without pooling; Methods hyperparameters (AdamW, 10⁻⁴, 10⁻², batch 1,024, 100 epochs, 800,000 / 126,611 / 100,000; fine-tune batch 32, 20 epochs, 0.8 / 0.1 / 0.1, standardisation); GCMC 100 bar / 77 K / 10k cycles; MD 77 K, NVT, 1 fs, 3M cycles; QMOF v13 20,373 PBE structures; IRMOF-1 eight highest-attention patches among 6×6×6 near metals, threshold 0.008, < 20 kJ mol⁻¹; SI Notes S1 (three connected bonds), S2 (all three tasks lowest MAE across all properties), S3 (open-shell PBE underestimation), S4 (719 / 234 / 1,775). Article page numbers in the table above were not re-verified against the paywalled version of record.

- P1 · `#why` transfer card, Chinese only: “先用无监督式的结构任务预训练” → “先用面向结构的任务预训练”, matching the English “Pre-train on structure-oriented tasks”. MTP, VFP and MOC are supervised heads on labels obtained from structure construction (topology; metal-node vs linker atoms) or Zeo++ geometry (void fraction) (ChemRxiv v2 “Pre-training” results paragraph; article p. 312 per ledger); the paper does not describe them as unsupervised.
- Not changed, noted: Table 1 bars are scaled to the larger value of each pair (`v / max`), so the better model always fills the track and no axis is shown; ratios are preserved from zero, but a fixed 0–1 axis for R² / accuracy would read more faithfully.

Second-pass corrections (site-wide audit):

- Architecture formula and walk-through head node (zh/en): “MLP head” overstated the head. The preprint Methods say fine-tuning adds “a single dense layer to the class token”, and the MTP head likewise “consists of a single dense layer”.
