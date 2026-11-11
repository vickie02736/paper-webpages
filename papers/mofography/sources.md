# Evidence ledger — Mofography

## Fixed source and scope
- Version: ChemRxiv v1, posted 2026-11-06; not peer reviewed.
- Source: https://chemrxiv.org/doi/full/10.26434/chemrxiv.15011793/v1
- PDF: https://chemrxiv.org/doi/pdf/10.26434/chemrxiv.15011793/v1?redirectToLatest=false
- Retrieved 2026-11-11. Persistent cache: `$HOME/paper-sources/mofography/main.pdf`.
- SHA-256: `1aa7bbb544136bdc51d3b10500d5eee3ee3afcd8b5815c0342c6ff1a137dda13`.
- PDF has a ChemRxiv cover: PDF page = printed manuscript page + 1.
- Main manuscript checked for each claim below. Separate SI was not obtained: landing-page information and public software repository did not provide an identifiable SI PDF. The manuscript cites SI S1–S7; no claim here relies exclusively on them. Zenodo DOI is stated as pending in manuscript §5. Raw screening, GCMC trajectories, code performance and SI parameters were not independently reproduced.
- Software pointer verified via official repository README: https://github.com/mofography/mofography (master, inspected 2026-11-11). Page is a paper explainer, not a reproduction of the software.

## Claims and locators
- Overview/background: §§1–2.1, printed pp. 2–6. Pocket nodes, window edges, local versus global descriptors. Room analogy is editorial teaching, not a crystal model.
- Method: §3.1, printed pp. 20, 22–24; Figure 8. Signed distance field, seeds, padded dual watershed, distinct spatial fragments versus periodic identity. Both branches derive from padded grids; neither branch replaces the other. Defaults: spacing 0.5 Å, h 0.2 Å, mask 0.05 Å, threshold_abs 1.5 Å. No guessed topology or coordinates.
- Percolation: §§2.5, 3.5; printed pp. 14–16, 30–31. Nonzero accumulated periodic translation, not just a closed local ring. Teaching graph has A–B within a cell and B–A′ across cells; it percolates iff both windows pass the probe. Diameters 12, 6, 4 and 2–6 Å are invented. Boundary rule >= is explicitly a toy rule, not a claim about the package comparator.
- Benchmark: §2.2, printed pp. 7–9, Figure 2. 2,000 input, 1,999 valid; excluded BALMUW01_clean peak ~1.2 Å below 1.5 Å. LCD/PLD/LIS MAE <=0.22 Å and R²>=0.99; total/accessible SA MAFD 2.3%/9.6%; accessible PV MAFD 17.1%, R² 1.00. Probe radius 1.2 Å (not diameter); benchmark 0.5 Å spacing; PSD comparison 0.1 Å. Values transcribed from prose, no scatter digitization. Finite-grid error and accessibility thresholds are distinct from experimental validation.
- Application: §2.6, printed pp. 17–20 and Figure 7 (printed p.21). XEKJUT and LEVLEF: pX transfer to selected GCMC cases. ZIVCOY: redistribution across environments. ACODAZ target pocket mean composition ~21% oX, 21% mX, 58% pX, from prose p.19, not counted from snapshot; not bulk purity.
- Formula: §3.7, printed pp.33–35, Eqs.5,7,8. Pose sum uses framework–guest energy; beta=1/kBT; margin versus strongest competitor. Methods explicitly include KD/2 plus 0.1 Å margin. No absolute free energies or arbitrary probabilities computed on page.
- GCMC: §3.7, pp.33–35; Figure 7 caption p.21. Equimolar ternary reservoir, 298 K, 1.0 and 1.99 Pa; displayed snapshots specifically 1.99 Pa. Stage A vdW-only vs Stage B electrostatics and guest competition. GCMC explanation is statistical sampling, not real-time dynamics.
- Limits: §§2.6,3.7,4. Screening local preference is insufficient for mixture selectivity; static geometry cannot establish transport rates or industrial performance (latter distinction is editorial scope analysis).
- Byline: title page, printed p.1 / PDF p.2. Gopalan 1,2; Zheng 1; Azadpour 1; Shi 1; Sarkisov 2. Affiliations recorded as printed. Publication/acceptance dates not disclosed.

## Visual and interaction audit
- Figure 8: full PDF page 23 rendered with Poppler at 1800px longest dimension; visually inspected labels, dual branches, periodic fragments, graph and caption. No scientific crop, color or geometry edits.
- Figure 7: full PDF page 22 rendered at 1800px longest dimension; visually inspected all nine panels, isomer legend, hatching, target environments and snapshot condition. Bars are integral fractions, not GCMC compositions. Complete original caption retained; Chinese/English reading guide alongside.
- Original figures: Gopalan et al., ChemRxiv v1, CC BY 4.0. Local PNGs are renders only; English original labels are retained with bilingual explanations.
- Interactive SVG: all widths are explicit invented values; color plus dashed/solid encoding conveys blocked/passable; variable changes do not alter cavity size. Language switch preserves range value and expanded details.
- Formula and metric cards: source-derived text, not reconstructed quantitative plots. No unverified SI-only figures or values.

## Validation — 2026-11-11
- Static page check passed after Node was put on PATH; timestamp warnings are resolved by post-commit metadata generation.
- Catalogue schema/taxonomy preservation, generated bibliography consistency, metadata browser regression and catalogue browser regression passed. New record ID uses the catalogue's required 12-hex suffix.
- Targeted browser check: 1440/768/390 px × Chinese/English, all details expanded, images decoded, no horizontal overflow or page/resource errors; keyboard range movement, exact 4 Å toy threshold, reset, and language-preserved input/detail state passed. Desktop hero, mobile English application and interaction screenshots inspected.
- `sweep_pages.cjs --slugs mofography`: PASS, zero failures. Added a data favicon to avoid a missing-favicon console error.
- Whole-library `check-explainers.cjs` was attempted: it stops on an existing SVG control because SVG has no `.click()` method. A temporary adapter using a MouseEvent continued farther but stopped on an existing term-dialog intercepting pointer events. No whole-library pass is claimed; shared reader code and existing pages are unchanged. Targeted new-page and catalogue/bibliography coverage above passed.
- Scientific review: the main-text numbers, formulas, figure panels, assumptions, benchmark conditions and all toy states were checked against the locators above. SI-only details, raw simulation reproduction, real screen-reader use and human comprehension remain unverified.
