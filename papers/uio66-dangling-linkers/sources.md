# Sources and evidence ledger

## Final batch verification

Catalogue integrated on 2026-11-02. Complete article/SI review and page-specific scientific QA are recorded below. Final production checks pass: all 43 pages pass the full static checker and browser regression (3,649 interaction actions); catalogue, taxonomy and production bibliography checks also pass. Earlier draft/pending notes describe development stages and are superseded by this verification. Deployment is verified against the final pushed commit in GitHub Pages build history.

## Final article and complete attachments

Yao Fu, Yifeng Yao, Subhradip Paul, Kenji Mochizuki and Gaël De Paëpe, *Water-generated dangling linkers in a metal-organic framework*, Nature Communications 17, 3805 (2026), DOI [10.1038/s41467-026-70247-z](https://doi.org/10.1038/s41467-026-70247-z).

All scientific article text, methods, captions and final 9-page publisher PDF read. Main Figs. 1–3 visually inspected. Entire 22-page Supplementary Information read: methods, Tables S1–S4, Figs. S1–S16 and references; all supplementary figures/tables visually inspected from page renders, with full-resolution inspection of S11/S12. Entire 13-page transparent peer-review file read, including author replies and subsequent reports. Review-stage fractions/assignments are not treated as final data. The SIMPSON archive is linked as a reproducibility resource; code and calculations were not rerun, and no new simulation curve is claimed.

Cache: `/tmp/mof-ree-sources/uio66-dangling-linkers.pdf`, `uio66-dangling-linkers.html`, `uio66-dangling-linkers-body.txt`, `uio66-dangling-linkers--41467_2026_70247_MOESM1_ESM.pdf` and `...MOESM2_ESM.pdf` plus extracted text. These source PDFs are not deployed assets.

Received 2025-07-02; accepted 2026-02-20; published online 2026-03-11. Publisher separately identifies version of record 2026-04-27; not substituted for first online date. Author order and affiliations verified publisher HTML and SI p. S1: Fu (Grenoble/Fudan), Yao (Zhejiang), Paul (Grenoble), Mochizuki (Zhejiang), De Paëpe (Grenoble). Corresponding Mochizuki and De Paëpe.

## Claims and experimental-state boundaries

- Core: abstract, main Results, Figs. 1–3 and conclusion. Water-induced reversible local detachment of a carboxylate end in UiO-66, not proof of full linker dissolution or global crystal collapse. Retained PXRD and changed local NMR are distinct observations. A dangling linker remains linked at its other end in the authors' interpretation; no generic drawing replaces actual coordination.
- States: main Fig. 1 and methods. Fresh, 26, 160, 320 H2O/u.c. and redried. Low 26 state similar 13C to fresh; 160/320 new C4 plus C3 broadening; redrying restores fresh-like spectrum. Similar main PXRD features across states. Selector reproduces qualitative state-specific observations without interpolating populations or producing invented spectra. 160-state DP quantification and 320-state chemical-shift reference kept separate.
- Synthesis/conditioning: main methods, SI. ZrCl4/H2BDC/HCl in DMF, 220°C/24h, washing DMF/methanol/water, 120°C/vacuum activation ~1 day; ambient exposure or 10–120 µL water/50mg powder gentle grinding. Redried overnight 120°C/vacuum. Dry-looking powder can contain adsorbed water; water count not RH or gravimetric uptake.
- Unit cell: SI Fig. S1 and methods, [Zr6O4(OH)4(BDC)6]4 = Zr24O16(OH)16(BDC)24, 24 BDC2− with four aromatic H each, total96. Formula Nwater = (96/2)Iwater/Iaromatic =48ratio. SI example55/100→26.4≈26. Slider is explicitly a teaching calculation, no interpolation of experiments or coupled chemistry. Mu3-OH overlap must be separated and relaxation adequate; 1H measured T1/recycle2–3s. Main BCD/BDC charge and SI H4BDC naming typographical inconsistencies not propagated.
- HETCOR: main Fig.1 and SI S4 (5ms and1ms respectively), C4 correlates6ppm region, not isolated mu3-OH0–3. Region includes shifted mu3-OH and hydrogen-bonded water, not all pure water. Cross-peaks proximity and absence constrained by sensitivity/motion, not unique proof alone.
- 1H DQ–SQ: main Fig.2, SI S5–S7 and Table S1. BABA recoupling at57/171µs and two-spin SIMPSON comparison provide distance sensitivity; no direct inversion of intensity into distance. Both proton count and motion affect signal. No new pulse-sequence simulation performed.
- DNP: main Fig.2/methods, SI S8–S10. Natural-abundance13C, ~100K, AMUPol10mM45µL/30mg, d6-glycerol/D2O/H2O60/30/10vol. Enhancement epsilon~60 of NMR signal, not uptake/performance. Spin diffusion can carry polarization inward without radical entry in pores. Short recoupling identifies C4–C2/C3; longer7.2/30ms C1–C4 and absentC4–C4 support mostly dispersed dangling sites/one-end detachment. Absence not proof every linker individually located. Results main calls2.4ms short mixing, methods2.5ms: page deliberately uses 'short' rather than implying one universally consistent duration.
- Quantification: final SI Fig.S13, 160water, carboxyl-13C labelled, room-temperature DP recycle200s/T1=38s, C4~30%/C1~70% carboxyl environments. Not percent leached linkers, collapsed solid or CP/DNP raw areas. Transparent review confirms DP added after request to resolve quantitative bias; superseded 22% review-stage figure not used.
- Reversibility vs durability: SI S3 sample with adsorbed water stored1year then DRIED before CP/PXRD. Similarity supports recovery, not unchanged hydrated local state for1year, quantitative no-leaching or constant adsorption capacity. Main reversibility experiment not a full durability/cycling protocol.

## Calculated candidates and figure audit

- Main Fig.3a crop is an original publisher figure, CC BY4.0, retained intact/A-I/B-I with front/side views, atom colors, hydrogen bonds, labels and energies. Extracted directly from PDF p.5 upper panel bounds52,45,416,225 at3x; no invented atomic coordinates or bond redrawing. Caption identifies crop/change, authors, figure, license and source. Mobile image is intentionally horizontally scrollable and has a full-resolution link.
- A points toward mu3-OH; B away. Favoured A-I is COO−+2H2O, with nearby mu3-OH hydrogen bond. SI S14 C4-nearestOH proton2.3Å(A-I)vs4.6Å(B-I); intact C3~4.5Å provides detection comparison. HETCOR absence of isolatedOH correlations forC4 supports A, conditioned on sensitivity/transfer. No COOH9–12ppm supports deprotonated candidate, rather than all high-shift protons being assigned COOH (TableS4 water H can shift strongly).
- All11candidate energies from SI S11/S12, carbon shifts TableS2 and mu3-OH5 TableS3; stored once in data.js for output/plot/table. Names reflect source variants. In order [energy,a,h,OH5]: A-I[-62.7,175.9,180.8,5.94]; A-IIvoid1[49.5,176.6,173.4,3.59]; A-IIvoid2[50.1,176.4,174.0,3.07]; A-III[80.3,176.2,176.5,6.70]; A-IVwater1[-49.5,176.1,174.1,2.69]; A-IVwater2[-50.2,176.3,174.1,2.57]; B-I[-20.1,175.0,178.9,1.81]; B-II[77.2,177.5,176.3,2.53]; B-III[8.3,177.0,176.8,1.96]; B-IV[-24.7,176.7,174.5,1.97]; B-V[10.5,191.5,187.7,1.89]. Energy kJ/mol, shifts ppm.
- Delta delta computed as h−a WITHIN SAME CANDIDATE, not h minus intact-reference173.4. Example A-I4.9. Experimental320water C1171.5/C4175.1→3.6ppm. Fixed −5..+6ppm plot uses same source data, marks calculation and single experimental reference separately. Absolute shifts offset; no fitted invented values. A-IIvoid1 +49.5 vs main simplifiedAII +50.1 (void2) explicitly distinguished. AIV lowerenergy cannot alone override incorrect relative shift/COOH evidence.
- Periodic CP2K PBE/D3 Gamma400Ry optimized; larger basis/SCCS energies. Capped cluster Gaussian NMR revTPSS/GIAO/SMD, adamantane1H1.8/13C38.5ppm references. Energy differences formation DeltaE, not Gibbs, activation or solid-state populations. No Boltzmann fractions, rate or lifetime inferred. No claim all candidate configurations exhaust true disorder.
- REE connection is explicitly explainer analysis. Source does not report REE capacity, selectivity or regeneration. Local attachment/metal and ligand leaching/function should be evaluated in actual feed/strip matrices.

## Validation

Page-only static and JS syntax checks pass. Browser checks pass in both languages at1440/768/390px: all10sections,5sample states,4evidence branches,11candidates, counting bounds, tables/details, Enter/Space/range keys/reset/focus, preserved state on language change and direct-English refresh. No page/console errors or horizontal page overflow. Original image loads with expected resolution. Screenshots saved in reports/mof-ree-qa/dangling-*; mobile hero, tablet geometry, desktop candidate plot and corrected mobile plot inspected. Plot text contrast verified after switching to shared --ink color; mobile plot labels increased to readable size. Catalog integration/publication pending.

## Source checksums

- `uio66-dangling-linkers.pdf`: `88a3e6f4dd9e2764eea8436401438713da0d0da4dc203fb59e5dd069908e90d7`
- `uio66-dangling-linkers--41467_2026_70247_MOESM1_ESM.pdf`: `399b3198257af38a53d0f91af8def38ee7a43e5eb50626837d7d37b6330c6690`
- `uio66-dangling-linkers--41467_2026_70247_MOESM2_ESM.pdf`: `0c2ab380b7c3e99beb82f3b2a980c2398a34033d15d836ec9c77ec1fd3054ebd`

## High-school teaching revision — 2026-11-02

P1 background / inference: core uses PXRD, solid-state NMR and dangling carboxylates before explaining measured objects. Evidence needs an observation→proximity→candidate-model chain; “约30%” needs explicit end-versus-linker counting. Preserve original Fig.3a and its guide.

New method guide: Source: Main Figs. 1–3; SI Figs. S4–S12 and Tables S1–S3; separate quantification in Fig. S13.

New evidence comparison: Source: Final SI Fig. S13; main structural interpretation and Fig. 3. Review-stage fractions do not replace the final result.

Reread main Figs.1–3 discussion and SI S1/S3/S13 descriptions. Kept final 160-water quantitative DP experiment distinct from CP/DNP and 320-water shift comparisons. No whole-linker leaching percentage is inferred. One-year redried evidence remains limited to recovery; no new atomic drawing.

Reader task: Check: does recovery after drying prove an unchanged wet structure for a year? No. SI Fig. S3 measures a sample redried after a year of hydrated storage. It supports recovery after drying, not unchanged wet-state connections, leaching or adsorption performance throughout storage.

Scientific observations, author explanations and teaching calculations remain distinct. Existing datasets are unchanged; no unverified atomic structure is drawn. The technical and teaching audits are recorded separately in [the rollout](../../reports/quality-rollout/README.md). Human comprehension has not been tested.
