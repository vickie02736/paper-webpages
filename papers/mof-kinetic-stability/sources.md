# Evidence ledger: kinetic stability of MOFs

## Final batch verification

Catalogue integrated on 2026-11-02. Complete article/SI review and page-specific scientific QA are recorded below. Final production checks pass: all 43 pages pass the full static checker and browser regression (3,649 interaction actions); catalogue, taxonomy and production bibliography checks also pass. Earlier draft/pending notes describe development stages and are superseded by this verification. Deployment is verified against the final pushed commit in GitHub Pages build history.

## Source identity, metadata and reading

Rieth, Adam J.; Wright, Ashley M.; Dincă, Mircea. **Kinetic stability of metal–organic frameworks for corrosive and coordinating gas capture.** *Nature Reviews Materials* **4**, 708–725 (2019). [DOI 10.1038/s41578-019-0140-1](https://doi.org/10.1038/s41578-019-0140-1).

- [Publisher article](https://www.nature.com/articles/s41578-019-0140-1) confirmed full access through University College London. Full 18-page publisher PDF obtained through authorized browser access. The pre-existing unauthenticated `.html`/`.txt` cache contains an abstract preview and references; it was **not** used as a substitute for full-body reading.
- All scientific prose through Outlook (physical pp. 1–14 / printed pp. 708–721), complete figure captions, Tables 1–5 and the end matter were read. References are not represented as separately read original studies.
- Figs. 1–6 visually checked in the PDF. Contact sheet `/tmp/mof-ree-sources/kinetic-pages/figures-contact.png` contains physical pp. 2/3/4/6/10/14. No atomic structure is redrawn or redistributed.
- The full-access publisher HTML has no supplementary-material/MediaObjects/appendix links or supplementary section. The PDF has no embedded attachments. Record: **no separate SI or appendix listed**; cited studies' SI is not treated as an attachment of this review.
- Publisher metadata: accepted **2019-08-14**; published online and version of record **2019-09-13**; issue date **November 2019**, without an invented day. A received date is not shown and remains unverified.
- All three ordered authors share: Department of Chemistry, Massachusetts Institute of Technology, Cambridge, MA, USA. Metadata is recorded in the batch manifest for later catalog integration; shared bylines remain pending that step.

## Conceptual energy diagram: scope and audit

Page `#idea`, `#barriers`, `#chemistry` follows printed pp. 708–711 and Figs. 1–3.

The source distinguishes the porous-phase energy penalty from the barrier to transition/rearrangement. Calorimetric evidence covers particular evacuated materials (including MOF-5, HKUST-1, ZIFs and zeolites), not every MOF at every temperature or guest loading. Guest inclusion changes the comparison. The explainer avoids elevating the review's broad framing into a universal measured free-energy theorem.

The fixed-composition porous-to-dense transformation is kept distinct from hydrolysis involving additional water and different products. The page does not equate their ΔG values. Its SVG is **qualitative teaching**, rather than digitized calculations, a measured transition state or a prediction of reaction rates. No units, free-energy values, temperature, rate constant or lifetime are assigned.

Three selectable states implement the argument in Fig. 2:

- Baseline: porous initial state, a higher transition state and lower dense final state.
- More inert metal (Fig. 2b): initial/final levels remain fixed; the transition state rises. The barrier increases and endpoint difference stays fixed within this isolated illustration.
- Stronger heterolytic metal–ligand bonding (Fig. 2d): both phases containing the bonds move down relative to the bond-breaking transition state; endpoint difference remains fixed and the barrier grows. This is not claimed as a numerical identity for all substitutions.

Desktop y-coordinates are [initial, transition, final] = [210,100,280], [210,45,280], [270,100,340]. Downward screen coordinates mean lower energy. These are arbitrary graphical coordinates and do not appear as energies to the reader. The two endpoints shift by the same amount in the stronger-bond branch. Phone layout changes horizontal coordinates/viewBox only, preserving all vertical relationships; the full diagram fits rather than hiding an endpoint off screen. Purple bracket = barrier; orange bracket = endpoint difference; grey dashed curve = baseline; cyan = selection. The x-axis explicitly says reaction coordinate, not time.

Metal-aquo water-exchange rates in Fig. 2a are solution-complex descriptors, not solid-framework leaching constants or service lifetimes. The Cu²⁺ discussion (pp. 709–710) distinguishes thermodynamic complex formation from rapid axial exchange associated with Jahn–Teller distortion. Donor basicity/heterolytic bond strength, charge density, node/linker connectivity and shielding are discussed as related, pathway-dependent factors. The page does not numerically fit a pKa–stability relationship or call all low-valent ions soft acids.

## Six gas branches and every quantitative claim

- **H₂O:** pp. 712–715, Figs. 3/4 and Table 1. Water coordination, hydrolysis, capillary effects, pore filling and vapour/liquid differences remain distinct. CAU-10/binder-coated heat exchanger: negligible loss after **10,000 cycles**, as reviewed on p. 713, ref. 107. The page retains the coating/protocol context and does not assign this lifetime to all Al MOFs.
- **NH₃:** pp. 715–716, Fig. 5/Tables 2/3. HKUST-1 loses crystallinity in **under 2 h** of the cited NH₃ exposure (p. 715, ref. 133). Anhydrous/humid products differ (ref. 69). Time is not extrapolated across concentrations. Co₂Cl₂BBTA retains structure around **1 mbar** but loses crystallinity at **1 bar** NH₃ (pp. 715–716, ref. 42). This pressure comparison is not a generic lifetime model.
- **H₂S:** pp. 716–717. Ligand protonation, metal coordination and possible sulfide products are considered. Cr-MIL-53/V-MIL-47 are reported stable up to **18 bar H₂S**, while Fe-MIL-53 decomposes under similar conditions (p. 717, refs. 32/152). Missing long-duration or humidity information is not invented, and no mixed-natural-gas service life is inferred.
- **SO₂:** pp. 718–719, Tables 4/5. Water/oxygen can change acid-gas chemistry. ZIF-8 loses about **70% surface area** after **20 ppm SO₂, 85% RH, 10 days** (p. 719, ref. 175). The denominator is surface area, not dissolved metal or fraction of cleaved bonds. Pure-water or dry-SO₂ resistance is not substituted for this exposure.
- **NOₓ:** pp. 719–720. NO and NO₂ are separate chemical cases. UiO-66-NH₂ NO₂ capture involves linker chemistry (refs. 196/197); MFM-300 has reversible NO₂ capture over **five cycles** without loss of capacity/crystallinity (ref. 198). The review explicitly lacks detailed material analysis after the humid breakthrough example; the page preserves that limit. No medical efficacy, biocompatibility recommendation or current exposure threshold is presented.
- **Cl₂/Br₂:** pp. 720–721 and Fig. 6. Amine-promoted ring chlorination/acid capture is consumptive. Co₂Cl₂BTDD undergoes Co²⁺/Co³⁺ oxidation/coordination to Co₂Cl₂X₂BTDD, followed by reductive X₂ release and recovery of parent material. **Three Br₂ capture–release cycles** are reported (ref. 209). The page does not redraw octahedral coordination or infer industrial lifetime from three cycles.

`#cycles` explains the last example qualitatively. Structural survival need not mean unchanged metal oxidation state. Uptake, release and recovery of a material are separate observations.

## NH₃ capacity audit: all 12 displayed values

Page `#ammonia` uses review Tables 2/3, p. 715/716, with Fig. 5 used as a visual cross-check. Display order: HKUST-1, Co₂Cl₂BTDD, Co₂Cl₂BBTA, Cu₂Cl₂BTDD.

- **Static**, pure NH₃, **1 bar and 298 K**, Table 2: **12.10, 12.00, 17.95, 16.74 mmol g⁻¹**, respectively. Review refs. 132, 40, 42, 42. The temperature-exception Al-MFM-300 row is not used.
- **Dry breakthrough**, **1000 ppm NH₃ and 298 K**, Table 3: **6.76, 4.75, 8.53, 7.52 mmol g⁻¹**, respectively. Review refs. 218, 42, 42, 42.
- **Humid breakthrough**, **1000 ppm NH₃, 80% RH and 298 K**, Table 3: **10.12, 3.37, 4.34, 5.73 mmol g⁻¹**, respectively. Same review row identities.

Every mode uses a fixed zero-origin **0–20 mmol g⁻¹** scale. Bar percentage = uptake/20×100; displayed values and bars use the same local rows. All 12 values and widths are independently checked by browser QA.

These data share nominal conditions within a mode but come from different studies, batches and potentially breakthrough thresholds. They are not advertised as a newly controlled benchmark. Static/dynamic ratios are not described as deactivation fractions. The higher humid HKUST-1 value explicitly does **not** establish durability or reversible storage. The source reports framework reaction independently of capacity.

## Boundaries, source inconsistencies and extensions

- Fig. 4's capacity axes say **90% RH**, while Table 1 says **95% RH**. The explainer discloses this mismatch and does not redraw that dataset or calculate working capacity from it. Its water discussion uses qualitative trends and separately specified cycling examples.
- “STP” is used loosely in the review alongside 298 K/1 bar. The explainer spells out pressure and temperature and does not silently equate 298 K with a different standard temperature.
- Some Table 2 Al-MFM-300 entries are duplicated/temperature-qualified; they are excluded from the chart. Table 4 naming and different SO₂ measurement contexts are not silently harmonized into new rankings.
- Short-term harsh-gas screening as a guide to long-term mild conditions is the review authors' outlook, not a validated universal accelerated-aging law. No year conversion is calculated.
- Historical “first”/“highest” statements are not presented as current records. Industrial history, regulatory thresholds and medical recommendations are outside the page's claims.
- `#ree` is an **explainer extension**, clearly labelled in both languages. It distinguishes support integrity, target-binding kinetics and reversible stripping. The review supplies no REE uptake, selectivity or liquid-phase rate data. Gas evidence is not directly transferred to actual aqueous feed or stripping solutions.
- Related explainers have independent sources and are not treated as measurements made in this paper.

## Implementation and validation

Ten sections; full Chinese/English interface; three energy routes, six gas branches, three capacity modes/four materials. Shared navigation and local data run without a remote runtime. SVG labels/title/description and chart accessibility names switch language. State, details and focus persist across language changes.

`/tmp/kinetic-qa.cjs` checks all ten sections at 1440/768/390 px in both languages, all three barrier relationships, all six gas branches, all twelve numerical values and bar widths, details, keyboard Enter/Space, focus, language/state persistence and direct English refresh. Page-only static check passes. Screenshots are saved to `reports/mof-ree-qa/kinetic-*.png`; representative desktop/tablet/phone screenshots are inspected, including the adjusted full-width mobile diagram. No console errors or document overflow. Catalog metadata/integration and publication remain pending for the complete batch.

## Source file audit

`/tmp/mof-ree-sources/mof-kinetic-stability.pdf`: **2,520,521 bytes**, SHA-256 `0fd95f9e4021e0dcf9d297fd1b251186cf5ea895a692c8d5a6d372f39066ce48`.

The subscription PDF remains outside the repository. Cached page text and figure contacts support auditing but are not published as the article.

## High-school teaching revision — 2026-11-02

P1 terminology / reading structure: idea opens with “量热…亚稳态”, while ammonia jumps from static to breakthrough capacity. Define the physical object and barrier first, explain axes before controls and depict the two measurement questions separately.

New method guide: Source: Review Fig. 2 and discussions of kinetic stability and aquo-ion exchange.

New evidence comparison: Source: Review Tables 2–3 and Fig. 5. The page retains its four selected materials, not a uniform benchmark of all reviewed data.

Reread main kinetic-stability discussion, Fig. 2, Fig. 5 and Tables 2–3. The four-page subset conditions are retained; full Fig. 5 spans other concentrations/one static temperature exception and is not generalized. No SI is listed. No lifetime or absolute energy is inferred from the teaching curves.

Reader task: Check: does higher static ammonia uptake guarantee a better protective filter? No. A filter must delay outlet breakthrough at the target concentration, humidity and flow rate; degradation and use conditions also matter. Pure-gas equilibrium capacity cannot replace that breakthrough test.

Scientific observations, author explanations and teaching calculations remain distinct. Existing datasets are unchanged; no unverified atomic structure is drawn. The technical and teaching audits are recorded separately in [the rollout](../../reports/quality-rollout/README.md). Human comprehension has not been tested.

## Audit 2026-11-03

Second-pass content audit of the site-wide explainer review (`reports/explainer-audit/content-findings.md`). Each correction cites its source location; claims not listed were rechecked and left unchanged.

- Ammonia source note (zh/en): disclosed a source inconsistency. Table 3 (p. 716) lists Cu₂Cl₂BTDD 1000 ppm 7.52/5.73 (ref. 42), while Fig. 5b (p. 717) labels the same bars Cu₂Cl₂BBTA and the caption names HKUST-1, Co₂Cl₂BBTA and Cu₂Cl₂BBTA. The page follows Table 3.
