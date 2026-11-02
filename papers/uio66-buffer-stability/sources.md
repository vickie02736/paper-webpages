# Evidence ledger — UiO-66 in buffers

## Final batch verification

Catalogue integrated on 2026-11-02. Complete article/SI review and page-specific scientific QA are recorded below. Final production checks pass: all 43 pages pass the full static checker and browser regression (3,649 interaction actions); catalogue, taxonomy and production bibliography checks also pass. Earlier draft/pending notes describe development stages and are superseded by this verification. Deployment is verified against the final pushed commit in GitHub Pages build history.

Status: local bilingual draft. Full scientific article and all 9 SI pages read; SI Tables S3/S4 and Figures S1–S4 visually checked. Main Figures 2, 4 and 9 visually checked. Catalog integration and publication pending.

## Source identity and version

- Daniel Bůžek, Slavomír Adamec, Kamil Lang, Jan Demel. *Metal–organic frameworks vs. buffers: case study of UiO-66 stability*. Inorganic Chemistry Frontiers **8**, 720–734 (2021). [DOI](https://doi.org/10.1039/D0QI00973C).
- Full publisher HTML obtained through the institutionally accessible Chrome session, canonical [RSC article](https://pubs.rsc.org/qi/article/8/3/720/698919/Metal-organic-frameworks-vs-buffers-case-study-of). All scientific sections, tables and figure captions were read, not just the abstract.
- [Electronic supplementary information](https://pubs.rsc.org/qi/article-supplement/698919/pdf/d0qi00973c1_suppl/), 9 pages, Tables S1–S4 and Figures S1–S4. Downloaded with Chrome Save Link As from the publisher link. This file is scientific supporting material, not a second abstract or metadata export.
- History explicitly reported by the publisher: received 11 August 2020; accepted 9 November 2020; first published 7 December 2020. The issue year is 2021. The HTML citation_publication_date (2021/02/09) is not used as the first-online date.
- Ordered authors and superscripts verified against main byline and SI p. 1: Bůžek (a,b), Adamec (b), Lang (a), Demel (a). (a) Institute of Inorganic Chemistry of the Czech Academy of Sciences, 250 68 Husinec-Řež, Czech Republic; (b) Faculty of Environment, Jan Evangelista Purkyně University, 400 96 Ústí nad Labem, Czech Republic.

## Claims mapped to evidence

- Starting material: main “Synthesis and characterization of UiO-66”; SI Figures S1/S2, pp. 6–7. BET 1395 m²/g; terephthalate:monocarboxylate 1:0.31 (acetate 0.18, formate 0.13). Defect-rich material, primarily missing clusters. No claim that this batch represents every UiO-66 preparation.
- Exposure: main “Stability of UiO-66 in buffer solutions” and Experimental. 50 mg solid in 50 mL medium, 25 ± 1 °C, 450 rpm, 4 h; triplicate experiments. The 1 M HEPES and 0.2 M PB preparation exceptions are accounted for in the source, rather than assuming every buffer was diluted identically.
- Linker denominator: main Table 1 footnotes and Experimental. Complete alkaline dissolution yields 446 ± 16 mg/L terephthalic acid. Percentage is relative to all linker, not relative to the sample mass.
- Zirconium denominator: SI Table S3, p. 4, and main Experimental. Acid digestion gives 335 ± 12 mg/L total Zr; TGA estimate 333 mg/L agrees. Percentage is relative to all Zr. It cannot be added to the linker percentage.
- Analytical scope: HPLC limit 0.01 mg/L; ICP-MS limit 0.001 mg/L. Zr assessed after 0.1 μm PTFE filtration. “Dissolved” is an operational fraction and excludes retained solids/colloids; no implied complete mass balance.
- All 30 conditions in `data.js`: main Table 1, paired with corresponding SI Table S3 zirconium entries. Columns preserved separately: concentration, initial/final pH, BET area, reported BET percentage decrease, linker at 15 min/4 h, time to complete linker release, Zr concentration/percentage and original ± values. No interpolated concentration points or kinetic fits.
- Phosphate example: main Table 1 and Figure 4; SI Table S3. 0.01 M PB: 99% linker release at 4 h, BET 128 m²/g / 91% decrease, Zr 0.08 ± 0.02 mg/L / 0.024 ± 0.006%. Residual UiO-66 diffraction lines do not prove preserved composition.
- TRIS example: main Table 1/Figure 2. 0.5 M, pH 7.5: 96% linker release despite retained diffraction lines. 1 M, pH 7.5: 100% release, 120 min to completion, colloid prevents recovery. TRIS at pH 9.0 and 0.05–1 M reaches complete linker release within 4 h.
- HEPES: main Table 1/Figure 3 and SI S3. 9.4–17% linker release across 0.01–1 M, with Zr below detection throughout. “Gentler” is not “inert”.
- NEM: main Table 1/Figure 5 and SI S3. Initial pH changes with concentration (8.2–10.2), so concentration-only causality is not claimed. At 0.1 M, 93% linker release while Zr is below detection.
- Water control: Table 1 and SI Figures S3/S4. pH 5.5 → 3.8; linker/Zr below detection, BET 1331 m²/g. Selected 24 h linker measurements below detection in water. Not a neutral-pH indefinite-stability claim.
- Saline buffers: main Figure 7 and SI buffer preparation, p. 3. Final 0.01 M buffer + 0.15 M NaCl; enhanced release compared with buffer alone. No exact numeric enhancement is invented from the ambiguous textual “20–30%” description.
- Temperature: main Figure 8 and accompanying discussion. 37 °C accelerates release compared with 25 °C. A 10–30 min approach to a medium-specific endpoint is not universally 100% release.
- Extended exposure and solubility: SI S4 (table p. 5, figure p. 9). Linker solubility is compared with actual released concentration, not incorrectly claimed to exceed the 446 mg/L total in every dilute buffer (0.01 M TRIS solubility is 302 mg/L, but actual release ≈45 mg/L).
- Metal speciation interpretation: main “Zirconium in buffers” and Figure 9. TRIS coordination and phosphate-related new solid phases are the authors’ interpretations, explicitly distinguished from measured dissolved concentrations. BET area of a reaction product is not equated to preserved UiO-66 pores.
- Relevance to REE: teaching inference only. The paper does not perform REE adsorption and supplies no REE capacity, selectivity or recovery result.

## Display and numerical rules

- `null` linker/Zr means below detection, never numerical zero. A hatched background is labeled <LOD and does not encode a zero-length measurement.
- `null` BET means solid could not be recovered due to colloid formation. `null` complete-release time means complete release not observed within 4 h. These cases have separate UI labels.
- Both percentage charts use a fixed 0–100% linear scale. Tiny measured bars are allowed to be tiny; values are written explicitly without inflating bar lengths. The Zr ± values are written beside the plot; no invented confidence-interval meaning or linker error bars.
- Original table rounding is preserved, including BET-loss values rather than silently recomputing from rounded areas, and Zr percentages rather than recomputing them from rounded mg/L. For example, 97 mg/L is paired with the reported 28%, not a recalculated 29%.
- Percentages refer to separate denominators. The chart pair is not a sum, overall stability score, or full mass balance.
- No framework structural drawing or molecular geometry was invented. No simulated kinetics or adsorption model was introduced.

## Source ambiguities avoided

- Main text contains a cluster formula inconsistent with standard UiO-66 notation; the page does not reproduce or silently correct a structural drawing based on it.
- SI Table S2 lists a phosphate hydrate formula whose mass/amount warrants checking before reproducing a preparation recipe. The page does not supply that recipe.
- Main methods mention activation at 100 °C after recovery, whereas the general adsorption subsection says 90 °C before measurement. The explainer states thermal vacuum activation without choosing one of these inconsistent settings as universal.

## Validation

Page-only static checks pass. Headless Chromium checks passed at 1440/768/390 px; all 30 condition states, LOD and missing-solid labels, presets, table filtering, bilingual state preservation, direct-English reload, native-select keyboard and details Space/Enter. No horizontal overflow or console errors. Representative hero screenshots at all widths and the mobile English explorer were viewed. Final catalog metadata and publication remain pending.

## Local source fingerprints

- `uio66-buffer-stability.html`: SHA-256 `3f1d3c1838f2af63af5d7185ac23f16562b6270f7b44bb272798dd1117d8470f`; 1196291 bytes.
- `uio66-buffer-stability-si.pdf`: SHA-256 `ffd7aec2dcad74c19f7a88d980fe28d83e8cb36fdc24966872a05ebcbc37eaf2`; 513052 bytes.
