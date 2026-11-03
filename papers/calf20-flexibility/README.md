# CALF-20 methods and evidence explainer

`index.html` is the directly editable bilingual Research Atlas explainer for Oktavian et al., “Gas adsorption and framework flexibility of CALF-20 explored via experiments and simulations”, *Nature Communications* 15, 3898 (2024), DOI [10.1038/s41467-024-48136-0](https://doi.org/10.1038/s41467-024-48136-0).

The reading path follows methods and their evidential roles: structure input; adsorption measurements versus rigid GCMC; experimental PXRD; flexible DFT-MD; MLP-assisted free-energy sampling; water adsorption, RDF and hydrogen-bond analysis. Each method states its purpose, operation, result and evidence limit. Experimental measurements, model predictions and authors' interpretations are explicitly distinguished in Chinese and English.

Original Figure 1 viewports and attributed Figures 2–6 retain the paper's axes, legends and scientific artwork. Figure links open full-sized local assets or the publisher's original figure/caption. The verified temperature, pore-fraction and hydrogen-bond controls remain available; secondary detail is progressively disclosed. The source file, provenance, crop coordinates, scientific corrections and reader feedback are documented in [`sources.md`](sources.md).

All previous section IDs remain valid, with `free-energy` added for the MLP/WHAM method. Shared metadata provides publication-time authors, affiliations and dates; these are distinct from explainer creation/update dates. The page uses shared local CSS/JS without new runtime dependencies.

## Validation — 2026-11-03

- Static page checker: passed, zero warnings. Bilingual browser sweep: passed, zero failures or hints.
- Focused browser checks: 103 assertions passed across 1440/768/390 px, Chinese/English/parallel reading, all three depths, every selector state, preserved selections and disclosure state across language changes, keyboard activation/focus, anchor clearance, direct English URL/refresh, and original-image loading/failure/retry.
- Original CO₂, pore-fraction and hydrogen-bond arrays were compared with the pre-edit page and are unchanged. Source figures and the displayed evidence labels were visually reviewed. No true screen-reader session or new SI/workbook retrieval was performed.
- Original section anchors, catalogue entry, first-publication date and creation timestamp are preserved. Scientific provenance and limits are recorded separately in `sources.md`; passing browser checks is not evidence that readers understand the explanation.
