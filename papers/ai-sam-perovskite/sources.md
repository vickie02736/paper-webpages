# Evidence ledger

## Initial draft scope (superseded by the audit below)

- Source: Cai, F. et al., “AI-guided discovery of self-assembled monolayers combining synthetic accessibility and interfacial stability for perovskite solar cells”, Nature Synthesis, published online 2026-10-28, DOI [10.1038/s44160-026-01203-4](https://doi.org/10.1038/s44160-026-01203-4).
- The page uses the publisher HTML article and its public figure media URLs. The initial draft used the abstract, publication metadata and figure titles; full figure verification is documented below. Sources were accessed on 2026-11-05.

## Claims used on the page

- **Research question and framework:** the abstract describes an AI-guided framework combining graph neural-network retrosynthetic predictions, high-throughput DFT screening and expert chemical knowledge.
- **Search scale:** the abstract reports more than 90,000 structures from 308 fragments narrowed to 300 candidates.
- **Composite ranking:** the abstract names eight descriptors extending beyond intrinsic electronic properties, including synthesizability, hole reorganization energy λh, heteroatom content and aromaticity.
- **AI-1 mechanism:** the abstract reports favourable heteroatom functionality, robust S–Pb coordination at the buried interface, suppression of non-radiative recombination and a vital multifunctional methylthio side chain.
- **Device results:** the abstract reports 27.2% power-conversion efficiency and retention above 95% after 2,000 h maximum-power-point tracking at 65 °C.
- **Figures:** Fig. 1 is the AI-guided design workflow; Fig. 2 retrosynthetic prediction; Fig. 3 descriptor distributions/correlations; Fig. 4 photovoltaic characteristics; Fig. 5 mechanistic characterization.

## Visual and interaction audit

- The hero workflow and descriptor bars are teaching redraws. They preserve the paper’s sequence and named descriptors but do not claim reported weights, molecular coordinates or model reproduction.
- The workflow buttons expose the evidence chain from search space to device testing. Their copy distinguishes screening counts from experimental validation.
- The device switcher exposes three reported or mechanistically named states: 27.2% PCE, >95% retention after 2,000 h at 65 °C MPP tracking, and S–Pb coordination.
- Original figure images are publisher-hosted and captioned with the Nature figure numbers. The page does not alter their data.

## Evidence boundary

The page does not claim to retrain the MPNN, rerun DFT, reproduce device fabrication or generalize the reported durability to every SAM, perovskite composition or outdoor condition.

## Audit 2026-11-05 — final full-text review

Publisher full text obtained through a real browser using UCL institutional access. Read library construction, retrosynthesis, DFT scoring, synthesis/device characterization, mechanism, scope and relevant Methods. Visually inspected publisher Figs. 1–5 at 1200 px. Read relevant SI Note 1, Note 2 and certification captions (SI Figs. 33–34); not every SI spectrum was independently interpreted. No model or experiment was rerun.

- Hero/workflow, both languages: expert selection after DFT and 300 as a scored survivor set → expert filtering 308 to 24 before assembly of 300; DFT HOMO window −5.8 to −5.4 eV retains 124. Source: library construction, DFT sections and Fig. 1. The >90,000 space is combinatorial potential, not >90,000 completed calculations.
- Scoring: invented qualitative bar lengths removed. Replaced with all eight descriptor roles and actual Fig. 3j composite scores 100, 94.58, 93.97. Highest is scaled to 100, not an efficiency or probability. Same DFT protocol is gas-phase B3LYP/6-311G(d,p); limits follow the DFT and outlook sections, SI Note 1.
- Device switcher: added four distinct states. Fig. 4d champion AI-1 27.20%, 2PACz 25.25%; characterization text gives 20-device means AI-1 26.68%, AI-2 25.94%, AI-3 24.88%, 2PACz 24.79%; Fig. 4e and SI Figs. 33–34 give certified reverse 26.95%, forward 25.91%, stabilized 300 s 26.43%, area 0.052 cm².
- Stability: explicitly encapsulated devices, ambient air, 1-sun illumination, 65 °C MPP, 2,000 h (Fig. 4f and Methods). Abstract >95% versus main-text approximately 95% is disclosed. The 4,000 h T80 is extrapolated and never shown as an observed endpoint.
- Mechanism: statements now distinguish NMR/XPS evidence supporting S–Pb interaction from direct imaging/proof. Fig. 5c is a schematic; thickness-dependent luminescence analysis supplies a separate recombination line of evidence. No unverified SRV unit from the figure is copied.
- Full figures remain linked to publisher URLs with bilingual reading guides and full-caption links. Hero flow is a qualitative teaching restatement; no molecular coordinates are invented.

### Cached sources (outside the repository)

- `browser/landing.html`: SHA-256 `b45802b5674113ca6394500b2ab154da6de194c2994388db7b4cfb66f4fee6d6`; acquired 2026-11-05.
- `si.pdf`: SHA-256 `d00e7a39c9564b33e575b1aa923b06138d78f88ce44debcf268930114c77c78a`; acquired 2026-11-05.
- `fig1.png`: SHA-256 `b6f7f7a7734e585184815b5a789a293326401aa599c8ed54bc620733122035de`; acquired 2026-11-05.
- `fig2.png`: SHA-256 `721257bde4f6c3bce3839bf6c12e4a38a4d96bff62a17453615c578273757271`; acquired 2026-11-05.
- `fig3.png`: SHA-256 `9f8192933c94c8a57418e01dd1bfce60232e5e3add03114fec25328aac20f5f5`; acquired 2026-11-05.
- `fig4.png`: SHA-256 `a59ada29b9b9cdec567d8f499a6146db1626f04ec88be946f974f77a14053e3b`; acquired 2026-11-05.
- `fig5.png`: SHA-256 `127a8b7c55220a854f73d77bc0d0726ef2d1dea6808dc97e28b820dfab2ba8da`; acquired 2026-11-05.

SI source: https://static-content.springer.com/esm/art%3A10.1038%2Fs44160-026-01203-4/MediaObjects/44160_2026_1203_MOESM1_ESM.pdf
