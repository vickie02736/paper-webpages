# Source and evidence ledger

## Final batch verification

Catalogue integrated on 2026-11-02. Complete article/SI review and page-specific scientific QA are recorded below. Final production checks pass: all 43 pages pass the full static checker and browser regression (3,649 interaction actions); catalogue, taxonomy and production bibliography checks also pass. Earlier draft/pending notes describe development stages and are superseded by this verification. Deployment is verified against the final pushed commit in GitHub Pages build history.

## Version and metadata

Ashlee J. Howarth, Yangyang Liu, Peng Li, Zhanyong Li, Timothy C. Wang, Joseph T. Hupp and Omar K. Farha, *Chemical, thermal and mechanical stabilities of metal–organic frameworks*, Nature Reviews Materials 1, 15018 (2016), [DOI](https://doi.org/10.1038/natrevmats.2015.18).

Full institutional-access publisher PDF acquired through IAB, cache `/tmp/mof-ree-sources/mof-stability-three-axes.pdf`. All scientific sections/captions on pp. 1–12 read, with references through p. 15 available. Figs. 1–6 and Box 1 visually checked from rendered PDF contact sheets. No structure redrawn from cartoons or figure coordinates. Publisher HTML and attachment list checked: six downloadable main-figure PowerPoint exports, no separate scientific SI/appendix listed. The exports do not supply an independent experimental methods/data supplement.

First online 9 February 2016, verified PDF first page and publisher `citation_online_date`; PDF issue imprint March 2016. DOI's embedded 2015 is not the publication year. Acceptance date is not provided in the checked publisher article history and is left unknown. Seven ordered authors; all Northwestern University chemistry; Farha additionally King Abdulaziz University chemistry. Detailed affiliation strings verified on PDF p. 1 and publisher author information. Howarth and Liu contributed equally.

## Claim and display mappings

- Core definition: pp. 1–2, “Stability of metal–organic frameworks”. Functional resistance to structural degradation differs from thermodynamic preference over denser polymorphs. Axis selector is a teaching organization of chemical, thermal and mechanical challenge/measurement/interpretive limits, not a quantitative stability metric.
- Chemical: pp. 3–5, chemical-stability discussion. Hydrolysis gives protonated linker and hydroxide/water-ligated node; acidic/basic conditions and substitution kinetics matter. Strongly coordinating ions, notably phosphate, differ from weakly coordinating acid/base testing. Retained PXRD can miss partial degradation; gas sorption complements order measurements. Solution component accounting is an explicitly explained evaluation extension, not an experimental dataset in this review.
- Fig. 1 legend: § means both PXRD and gas sorption, * acid tests not reported, ‡ base tests not reported, arrows extend beyond plotted pH 0/14. Missing tests are not instability. Different duration/temperature/solution/methods prevent a universal cross-material score. No exact pH bars are re-digitized. Historical “not reported” statements remain scoped to the 2016 review.
- Thermal: pp. 5–7. TGA can show guest/coordinated solvent loss and decomposition; node dehydration, phase transitions, amorphization and other changes need additional measurements. Typical 50–100 °C/100–200 °C examples are not universal material boundaries. TGA plateau does not establish a porous crystalline state. In situ PXRD, post-cycle CO2/N2 sorption and DSC provide complementary evidence. Atmosphere-specific behaviour retained; no generic TGA trace or lifetime invented.
- Hydrothermal: pp. 7–8. Steam pressure/temperature and exposure followed by structural/porosity checks. Liquid water clusters versus isolated vapour molecules can produce different access to pores. MIL-53/MOF-5 computational comparison used qualitatively to explain activation barriers versus bond strength; numerical barriers not pooled into an empirical lifetime ranking.
- Mechanical: p. 8. Specific reviewed ZIF-8 study reports irreversible amorphization above 0.34 GPa by in situ XRD, with separate pressure/porosity experiments up to 1.2 GPa. Page gives only the source-specific 0.34 GPa example, not a universal safe processing limit. Pressing/milling, defects, guest occupancy, anisotropy and geometry matter. Capillary collapse during activation can resemble hydrolytic degradation; comparison across wet/exchanged/activated states is teaching analysis motivated by the source, not a new measured sequence.
- Mechanical quantities: p. 8, shear/bulk/Young's moduli, hardness, nanoindentation and anisotropy. Ideal-crystal calculations versus actual defects explicitly separated. No computational modulus is assigned to an unspecified synthesized batch. No general equivalence between indentation and pellet survival.
- Design: pp. 4–8 and Fig. 3. Bond strength/lability, modulation/error correction, node/linker exchange, shielding/catenation and accessibility trade-offs. Ideal UiO-66 12-connected Zr6 node; 6/8/10/12 connectivity counts linker carboxylates at a cluster, not metal count or single-Zr coordination. No novel cluster geometry drawn. Defects can supply catalytic sites while modifying mechanics. No guaranteed mapping from high metal valence/hydrophobicity/connectivity to universally stable MOF.
- Application scope: pp. 9–12. Aqueous and hot-gas catalysis needs both persistence and active-site access; the source explicitly states that no single MOF embodies all listed extreme stability limits. Detailed reaction cartoons are not reproduced, and catalyst turnover figures are not relabelled adsorption capacities. The page's REE connection is explicitly an analysis extension; this review contains no new REE adsorption/selectivity dataset.
- Report checker: teaching tool synthesized from source evaluation logic. Three axes each have three evidence states: missing/one incomplete signal/complementary post-exposure structure and porosity. Outputs discuss what is supported and still missing, without predicting “stable” as a binary outcome, summing scores, inventing measurements, extrapolating pH/temperature/time or assuming that a completed reading applies to another matrix. Three application scenarios (aqueous uptake/acid strip, pellets, hot humid gas) alter the exposure context; state changes never change source data. Presets only set hypothetical reporting choices. Final chemical composition and working-material evidence are recommended as analysis, not falsely attributed experimental results.

## Supplement and figure audit

The six PowerPoint exports are the article's Figs. 1–6. Original PDF figures/Box 1 inspected as source context; no geometry or numerical dataset copied into the teaching selector. The exact Fig. 1 annotation semantics and Fig. 3 connection-count meaning are preserved. The review text sometimes points to Fig. 2 panels differently from the caption (PCN-426/Eu framework); no panel-specific identity is reused without the caption mapping. No new claim depends on those inconsistent cross-references.

## Validation

JS syntax and page-only static checks pass. Playwright checks pass at 1440, 768 and 390 px in both languages: all nine sections, all three axis selections, three application scenarios, all nine evidence choices, presets/reset, native-select typeahead, keyboard Enter/Space/Tab, details expansion, language-state persistence and direct-English refresh; no horizontal overflow or console/page errors. Screenshots saved to `reports/mof-ree-qa/axes-*`; mobile hero, desktop core and tablet report visually inspected. Mobile hero shortened to avoid a single-character orphan; affected screenshots and full browser checks rerun. Catalog-generated author/date metadata, catalog integration and publication remain pending.

Source PDF SHA-256: `0725932f6e13fb1f0ca5855813b39dde5e9551b98b327afe41fc784ed7583d18`.

## High-school teaching revision — 2026-11-02

P1 background / evidence chain: core “全局热力学最低能量” precedes a concrete account of useful pores. Thermal “TGA 平台” is correct but methods are not connected visually; mechanical drying loss needs an explicit competing pathway. Add object definitions, complementary measurement flow and drying comparison.

New method guide: Source: Review stability-assessment and thermal-stability sections; Box 1 provides the MOF structural definition.

New evidence comparison: Source: Review mechanical-stability discussion of drying and capillary forces.

Reread the review thermal/mechanical discussions and Box 1. Definitions and capillary interpretation follow the review, not new experiments. No independent scientific SI is listed; figure slide exports are not SI. Proposed diagnostic controls are marked as explainer inference.

Reader task: Check: why does a TGA plateau not establish intact pores? TGA measures net mass change. Rearrangement or pore collapse can occur without a corresponding large loss of matter. Diffraction and pore measurements, with heating conditions, are still needed.

Scientific observations, author explanations and teaching calculations remain distinct. Existing datasets are unchanged; no unverified atomic structure is drawn. The technical and teaching audits are recorded separately in [the rollout](../../reports/quality-rollout/README.md). Human comprehension has not been tested.
