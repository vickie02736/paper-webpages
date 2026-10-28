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
