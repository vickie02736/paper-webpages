# Evidence ledger: water-stable MOF design

## Final batch verification

Catalogue integrated on 2026-11-02. Complete article/SI review and page-specific scientific QA are recorded below. Final production checks pass: all 43 pages pass the full static checker and browser regression (3,649 interaction actions); catalogue, taxonomy and production bibliography checks also pass. Earlier draft/pending notes describe development stages and are superseded by this verification. Deployment is verified against the final pushed commit in GitHub Pages build history.

## Source identity and reading scope

Xiao, Cao; Tian, Jindou; Chen, Qihui; Hong, Maochun. **Water-stable metal–organic frameworks (MOFs): rational construction and carbon dioxide capture.** *Chemical Science* **15**, 1570–1610 (2024). DOI [10.1039/D3SC06076D](https://doi.org/10.1039/D3SC06076D).

- [Publisher full text](https://pubs.rsc.org/sc/article/15/5/1570/827909/Water-stable-metal-organic-frameworks-MOFs).
- [PMC archive, PMC10829030](https://pmc.ncbi.nlm.nih.gov/articles/PMC10829030/).
- Full publisher PDF: 42 physical pages = one publisher showcase cover plus the 41-page article. Complete scientific prose, §§1–4, figure/scheme captions and Tables 1–4 read. Tables 1–4 were also extracted row by row from the complete XML. References are not represented as separately read original studies.
- Figs. 1–44 and Schemes 1–4 inspected in the publisher PDF; seven six-page contact sheets are cached under `/tmp/mof-ree-sources/design-visual/`. Figure and table labels were checked against the scientific text. No atomic structure from this review is redrawn on the explainer.
- Neither the publisher's article links nor the complete XML lists a supplementary-material file or separate appendix. This is recorded as **none listed**, rather than treating each cited study's SI as an attachment of this review. No claim is made to have read all original studies and their SI.
- Review license: CC BY-NC 4.0. Numerous figures are third-party reproductions with separate permissions. This page redistributes none of those figures; its workflow and capacity bars are original explanatory renderings.

## Metadata verified from article/publisher

- Received 2023-11-13; accepted 2024-01-03; published online 2024-01-10. Issue 15(5), 2024-02-07. PMC's collection date 2024-01-31 is not used as the issue date.
- Ordered authors and affiliations: Cao Xiao [a,b]; Jindou Tian [a]; Qihui Chen [a,b]; Maochun Hong [a,b]. The author name is Cao Xiao, with Xiao as surname.
- a: State Key Laboratory of Structural Chemistry, Fujian Institute of Research on the Structure of Matter, Chinese Academy of Sciences, Fuzhou 350002, P. R. China.
- b: University of Chinese Academy of Sciences, Beijing 100049, P. R. China.
- Catalog metadata is still to be integrated; the shared byline is not treated as verified until that step passes.

## Core narrative and evidence locations

- `#question`, `#evidence`: §2.1 distinguishes PXRD (ordered structure) from gas adsorption (porosity), notes partial dissolution in aqueous applications, and calls for NMR and ICP as needed. Four-checkbox output is an **explainer teaching checklist**, not an experimental classification, statistical confidence or stability grade. All four selected still leaves interpretation, sensitivity and mass balances to check.
- `#energy`: §§2.2/2.3 and Schemes 2/3 distinguish the hydrolysis free-energy change from barriers/kinetics. The displayed ΔG relation is the thermodynamic identity for a specified process. No numerical free-energy profile, barrier, lifetime or measured entropy is invented. Surface hydrophobicity does not prove positive reaction ΔG.
- `#design`: §2.4 and Scheme 1 organize coordination-unit matching, pore engineering and hydrophobic strategies. The four page categories overlap. Text workflow arrows connect design, effect and test; they do not depict metal–ligand bond geometry, a mechanism trajectory or a quantitative causal model.
- `#capture`: §3.3.1, Figs. 25–28: open metal sites, polar environments, hydrogen bonding and confinement can act together. Site assignments in the review rely on diffraction/spectroscopy/computation rather than a universal adsorption-heat threshold.
- `#capture`: §3.3.2, Figs. 29/30: amines and appropriate basic oxygen sites form carbamate, carbamic-acid or carbonate/bicarbonate species. The dry/humid IRMOF-74-III-(CH₂NH₂)₂ example is taken from Fig. 29b and its prose. The page gives neither a universal reaction stoichiometry nor an atomic drawing and explicitly allows reversibility and coexisting physisorption.
- `#tradeoffs`: §2.4.4, §3.4 and §4 discuss pore/access changes, high-humidity capture, real-condition cycles, processability and economics. Contact angle remains a surface measurement, not an independent proof of internal structural stability. Ln-MOF examples in §2.4.1/§3.4.1 contain lanthanides as framework components and capture CO₂; they do not establish dissolved-REE capture.
- `#ree`: **explainer extension**, not REE results from this review. Actual aqueous feed/stripping conditions, metal/linker release, possible exchange/precipitation and access of hydrated ions must be measured. Links connect to separate explainers and do not transfer their results to this paper.

## Design-example audit: all eight displayed examples

- UiO-66: Table 1, review ref. 87; pH 0–12 aqueous solutions, 2 months. Page states this as the cited study's test, not a universal guarantee for every batch/defect population.
- MIL-101(Cr): Table 1, ref. 76; pH 0–12 aqueous solutions, 2 months. Functionalized derivatives require separate verification.
- ZIF-8/MAF-4: Table 1, refs. 114/115; boiling water for 7 days. No acidic-feed lifetime is inferred.
- Ni₃(BTP)₂: Table 1 and §2.4.2, ref. 128; boiling water and boiling aqueous pH 2–14 solutions for 2 weeks. These are reported exposure conditions, not a rate constant.
- FJU-90: §2.4.3.2/Fig. 14, ref. 154; Tripp pore partition and extra coordination connections; retains structure after 1 day in water or 1 month in air. The page does not assign a single-variable causal effect or a new pore size.
- PCN-426-Cr: §2.4.3.5/Fig. 17, ref. 161; Mg-node material undergoes exchange/oxidation; reported resistance in 4 M HCl and at pH 12. No exposure duration is supplied where this section does not specify one.
- NH₂-UiO-66(Zr)-shp: §2.4.4.2/Fig. 21, ref. 169; phenylsilane post-modification, 0.1 M NaOH for at least 5 h.
- PN@MOF-5: §3.4.1/Fig. 36, ref. 222; crystallinity/porosity retained after 40 h at 40% RH. This is explicitly humid air, not liquid immersion.

## Capacity chart: every value and its meaning

Values are review-compiled uptake data, not a newly harmonized experimental benchmark. Within each group temperature and capacity measurement pressure match. No data interpolation is used. Text values and bar widths use the same `data.js` rows, with zero-origin fixed group axes; width = capacity / axis maximum. Units throughout are mmol g⁻¹.

**Flue-gas context:** Table 2, §3.4.1. Capacity measurement at CO₂ 0.15 bar and 298 K. UiO-66 0.37; UiO-66-(OH)₂ 1.92; FJI-H14 2.30. Axis 0–2.5. These are isotherm capacities, not a common humid mixed-gas breakthrough run. Review humidity/pH labels are not silently mapped to capacity measurement conditions.

**Trace-air context:** Table 3 footnote a and §3.4.2. Capacity measurement at CO₂ 400 ppm and 298 K. NJU-Bai53 0.64; SIFSIX-3-Cu 1.24; NbOFFIVE-1-Ni 1.30. Axis 0–1.5. The 400 ppm value is the review's historical experimental concentration, not today's atmosphere. Regeneration energy or real-air capture performance is not computed from uptake.

**Natural-gas context:** Table 4, §3.4.3 and Fig. 44. **Pure CO₂**, 1 atm and 293 K: MUF-16 (Co) 2.13; MUF-16 (Ni) 2.14; MUF-16 (Mn) 2.25. Axis 0–2.5. The review prose gives Ni as 2.13 whereas Table 4 gives 2.14; the page explicitly reports this discrepancy and uses the table value. No curve coordinates were digitized. These capacities are not equated to CO₂/CH₄ mixed-feed working capacity.

The three groups are not combined into a global ranking. Selectivity is discussed conceptually; values from different IAST/Henry formulations, feed ratios or temperatures are not mixed into the chart. Adsorption heat is not presented as complete regeneration energy.

## Wording and source inconsistencies handled

- The review's broad “soft metals” grouping includes several borderline ions. The explainer uses concrete M–N examples and a qualified HSAB heuristic rather than treating all low-valent metals as soft acids.
- The source initially describes chemisorption as irreversible, then explicitly discusses reversible amine reactions. The page follows the chemistry and later section: formation of a new species may be reversible under appropriate regeneration conditions.
- The source's claim that hydrolysis necessarily increases entropy is not promoted to a universal rule. No sign of ΔS is assigned for all hydrolysis reactions.
- The source's “strong polarity” language for CO₂ and “spherical N₂” description are not repeated. The page makes no molecular-dipole or shape diagram requiring that oversimplification.
- Table 1 contains apparent Y/Tb identity swaps in two FTZB formula rows. These are not used in the explainer's data or structures. Table 1 is a source map, not copied as an error-free database.
- MAF-stu-1 pH endpoints differ between prose and Table 1; that example is not used for numeric pH claims.
- MUF-16(Ni) discrepancy is exposed alongside the displayed chart, as above.
- A strategy category does not establish that a thermodynamic free energy has been measured. Hydrophobic protection/pore engineering may affect multiple thermodynamic and kinetic factors.

## Implementation and validation

- Ten semantic sections, complete Chinese/English text, shared Research Atlas navigation and offline local data. No structural image loader, remote runtime, fabricated structure or numerical simulator.
- Four design selectors, eight source examples, all 16 evidence-checkbox states, three chart groups/nine numerical rows. Keyboard Enter/Space, native checkboxes, reset, focus indicators, language-state persistence, details persistence, direct English URL/refresh verified.
- `/tmp/design-qa.cjs`: all ten sections at 1440/768/390 px in both languages; exact nine numerical outputs and zero-origin bar proportions independently checked; no console errors or document overflow. Full-page/section/state screenshots saved to `reports/mof-ree-qa/design-*.png`; representative phone, tablet and desktop images viewed.
- `check_page.py --slug water-stable-mof-design --page-only` passes. Catalog integration, verified shared metadata and the full default checker are still pending, along with batch publication.

## Local source audit hashes

Cache files are outside the repository; no subscription PDF is committed.

- `water-stable-mof-design.pdf`: 5,070,519 bytes; SHA-256 `0865cb30e927b00a91b5518db019c9d761090527e657b4ed9777e6078765a499`.
- `water-stable-mof-design-full.xml`: 690,733 bytes; SHA-256 `f355ed8310eac00316ab5b8285732d5ffc8be04f0c80fcb13240905b1fe7cb55`.
