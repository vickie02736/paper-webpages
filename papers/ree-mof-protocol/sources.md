# Evidence ledger — REE MOF protocol

## Final batch verification

Catalogue integrated on 2026-11-02. Complete article/SI review and page-specific scientific QA are recorded below. Final production checks pass: all 43 pages pass the full static checker and browser regression (3,649 interaction actions); catalogue, taxonomy and production bibliography checks also pass. Earlier draft/pending notes describe development stages and are superseded by this verification. Deployment is verified against the final pushed commit in GitHub Pages build history.

## Source identity and reading coverage

Menon, Dhruv; Bhadane, Prathmesh; Mahato, Priya; Goyal, Prateek; Lynch, Iseult; Chakraborty, Swaroop; Misra, Superb K. **Selective heavy-metal sequestration and rare-earth element recovery using metal–organic frameworks.** Nature Protocols (2026). DOI [10.1038/s41596-026-01425-y](https://doi.org/10.1038/s41596-026-01425-y).

- Publisher version of record: [article and attachments](https://www.nature.com/articles/s41596-026-01425-y). UCL-authorized publisher PDF acquired. The final PDF has 42 physical pages. Complete scientific text, all captions, Figs. 1–8, Tables 1–4, Boxes 1–3 and Extended Data Figs. 1–6 were read; all pages visually checked using seven contact sheets. The cached extracted body contains a placeholder publication date; the final PDF page 35 gives **24 August 2026**. Accepted **2 July 2026**, received **17 September 2025**.
- [Supplementary information](https://static-content.springer.com/esm/art%3A10.1038%2Fs41596-026-01425-y/MediaObjects/41596_2026_1425_MOESM1_ESM.pdf): 16 physical pages, Notes 1–3, Supplementary Figs. 1–15, Tables 1–3 and references. All scientific text/captions/tables read; all pages visually checked using three contact sheets. No separately listed appendix beyond this SI and main-document extended data.
- Five original XLSX Source Data files (MOESM2–6) cover Figs. 4–8: 14 worksheets. Read-only audit of all populated cells for labels, units, numeric types/ranges/endpoints, formula/error cells and anomalous appended blocks. Small numeric tables (Fig. 5, Fig. 6, Fig. 8A/B) read cell by cell. Large spectra audited as arrays, without claiming manual interpretation of every numeric point, redoing BET, refitting isotherms or refining diffraction. Originals were not edited, recalculated or exported. SHA-256, per-column ranges/counts/endpoints and checks are cached in `/tmp/mof-ree-sources/protocol-workbook-audit.json`.
- Source Data URLs use the same attachment prefix as SI, replacing `MOESM1_ESM.pdf` with `MOESM2_ESM.xlsx` through `MOESM6_ESM.xlsx`. All links appear on the page.
- Local scientific cache: `/tmp/mof-ree-sources/ree-mof-protocol.pdf`, `ree-mof-protocol-body.txt`, `ree-mof-protocol-si.txt`, original attachments and the `protocol-main-visual/` and `protocol-si-visual/` directories. Copyrighted originals are not copied into the public page directory.

## Claim and visual map

1. **Core scope and four procedures:** main introduction, development/applications/limitations, Fig. 2, Procedures 1–4 and Boxes 1–3. This is a protocol consolidating earlier studies, not a newly validated universal MOF screen. The four step choices are a teaching reorganization of the four numbered procedures. The Fig. 2 caption mentions six procedures/modules; page follows the explicitly numbered four. Each interactive state retains inputs, evidence and limitations.
2. **Material variants:** Procedure 1A–E, Figs. 1/3/4 and Extended Data Figs. 1–5; SI Notes 1/2 and Figs. 1–7. HKUST-1, nominal Fe0.05/0.1/0.2, BNMG-1, magnetic iMOF and CA–BNMG-1. Fe fractions refer to precursor feed; no uniform site substitution is inferred. Nominal Fe0.2 disrupts crystallinity. Authors offer explanations involving Fe-rich domains, whose interpretation differs across passages; the page does not turn those hypotheses into an isolated causal demonstration.
3. **Structure:** SI Note 2; main crystallographic methods. 3DED supports BNMG-1 in-plane structure, EXAFS local Cu–N environment; stacking disorder prevents full three-dimensional resolution. Fig. 1 is schematic. No atomic coordinate/topology drawing is invented on the page.
4. **Water evidence panel:** SI Note 3, physical page 4 and Supplementary Fig. 8. Relative crystallinity after water exposure explicitly stated as t=2 h: HKUST-1 33.4%, Fe0.05 86%, Fe0.10 84%. Same paragraph reports BET losses of93/11/58% and Cu release11.7/5.48/3.61%; it does not separately restate exposure duration for those assays. Page keeps this distinction visible. Derived BET retentions =100 minus loss:7/89/42%. Cu release denominator is initial Cu. Fixed0–100% chart, consistent across views; relative crystallinity is not absolute parent-phase mass. Three material rows retain identity in all views. Lower Cu release of Fe0.10 coexists with lower BET retention than Fe0.05, so no universal best score is invented.
5. **BNMG water behaviour:** SI Note 3 and Supplementary Fig. 9. Bragg features retained up to48 h; morphology evolves at24/48 h. Cu~0.2% at2 h and~4% at24 h; pH3~5.6%,pH9~5% without silently assigning those pH measurements the24 h duration. SI Table1 separately reports bare BNMG~20% Cu at24 h and beads<1% at24 h,<5% at96 h. These originate from different comparisons and are not combined into one time series.
6. **Shaping/safety:** Procedure1E uses1 g CA+0.2 g MOF;20wt% relative to CA is16.7wt% of those two solids, a derived feed calculation rather than measured retained composition. DMSO is used. Supplementary Fig.14 ZF4 response is dose/time dependent, n=3, not blanket nontoxicity. Tables1/2 lab-reagent/oven costs are not current plant economics or LCA. No global sustainability conclusion from those estimates.
7. **Metric calculator:** main Procedure2, Eqs.1/4/5. R=100(C0−Ce)/C0; qe=(C0−Ce)V/m; Kd=qe/Ce. C mg/L,V L,m g gives q mg/g and Kd L/g;×1000 converts to Table3 mL/g. Inputs are explicitly teaching values, not measurements. Initial preset100,10,.05,.025 yields90%,180mg/g,18L/g=18000mL/g. Low-concentration preset10,.05,.01,.005 yields99.5%,19.9mg/g,398L/g. Volume and mass fixed; no precipitation, vessel loss or sampling correction. Invalid/non-finite/empty values rejected; Ce0 leaves finite R/q but no finite Kd. Below-detection values need a bound. Kd and removal are conditional; single-ion values do not establish mixture separation factors.
8. **Capacity chart:** main Table3, physical page32. Five BNMG-1 REEs, experimental/Langmuir columns: Nd351/355.8,Y343/323.1,Dy335/331,Tb337/329,Eu345/333mg/g. Chart fixed0–400mg/g and starts at zero. No sixth REE or Gd measurement is invented. Table's experimental label preserved; not renamed highest observed. Source Data5E includes Nd379.80207mg/g at Ce357.02854mg/L, above the table entry351. Y fitted323.1 is below experimental343; this difference is retained. Isotherms are separate-ion experiments, not competitive preference. Figs.5C/5D/5E: dose differs between metals1000mg/L and REEs500mg/L. Linearized fitting in the methods and more general discussion of nonlinear fitting are not presented as one uniform workflow. PSO/Langmuir fit is not independent proof of chemisorption/monolayer mechanism.
9. **Reloading chart:** Fig.6C and MOESM4 sheet6C, B3:B6(Y),C3:C6(Nd). Y99.56/99.14/98.6/97.6%; Nd99.36/99.68/99.92/99.8%. Extraction script read the original workbook directly into `data.js`. No uncertainty supplied for this sheet, so none invented. Four fresh solutions without stripping, C0=10mg/L,sorbent500mg/L,12h/loading. Fixed0–100% scale; not truncated near100. At fixed V/m, each100% loading equals20mg/g, four at most80mg/g ignoring losses, explicitly a teaching upper bound. Does not establish regenerated cycles or saturation lifetime.
10. **Recovery process:** Procedure4, anticipated results, Fig.8 and Supplementary Fig.13.1%HNO3,80°C12h digests framework; NH4OH gives REE hydroxide precipitate and Cu-ammine-bearing supernatant. Destructive product recovery rather than nondestructive regeneration. Nd(OH)3 crystalline and Y(OH)3·xH2O amorphous; not metallic REEs. Elemental colocalization alone does not establish quantitative product purity.
11. **Recovery concentration chart:** MOESM6 sheets8A/B, rows4/5, B/C post-recovery mean/SD,D/E post-adsorption mean/SD. Y target1.26±.9 versus125.82±3.96mg/L; Cu478.86±29.74 versus587.9±35.66. Nd target.7±.23 versus81.65±2.76; Cu580.77±2.77 versus623.62±11.27. Main Fig.8 caption gives mean±SD,n=2. Bar lengths show means on fixed0–700mg/L scale; numeric text retains SD, without fabricating replicate points. Ordering before/after is explicitly tied to digestion/precipitation workflow; original sheet labels preserved in explanation. Source Fig.8A rounds one Cu value587.89 versus sheet587.9; workbook governs chart. Authors report~99% recovery; no independent mass yield calculated because NH4OH1:1 addition/aliquot withdrawal require volume/dilution normalization not fully specified with these columns. Hundredsmg/L Cu conflicts with prose 'only trace' and is not described as trace. Residual Cu in liquid is not automatically product contamination, nor proof of pure product; product analysis is separate.
12. **Application extension:** Supplementary Fig.15 canal/artifical seawater examples use Pb10mg/L,pH7.5,not REE real-water validation. Main mixture example Fig.6B is Pb/Na/Mg/Ca; no adjacent-lanthanide separation inferred. Flow-through and long-term regeneration/LCA are not established by the four batch loadings.

## Explicit source discrepancies

- Procedure2A:1000mg/L Nd stock100mL uses~304mg Nd nitrate hexahydrate, but adjacent note labels303.85mg as100mg/L without consistent volume. Another example specifies50mL100mg/L yet says5mL1000mg/L stock+95mL water: actually100mL50mg/L. Teaching correction5mL stock made up to50mL follows C1V1=C2V2; not a reproduced experimental result.
- Sampling text includes ≤10% withdrawal and then ≥50% supernatant. Page does not merge them into a consistent repeated-withdrawal recipe; independent vials are a qualified option.
- Table4 has positive ΔH for Cd28.47,Mn29.50,Ni31.01,Nd33.06kJ/mol; negative Pb−75.54,Y−56.92. No blanket exothermic claim. Dimensional qe/Ce is not inserted into ln K for absolute free energy without a standard state.
- MOESM3 sheet5D Nd logKd:6.67265 at500mg/L dose,5.81113 at750,5.6786 at1000. Dose does not monotonically improve every dataset.
- MOESM2 sheet4B A–L have initial gas-sorption data followed by appended diffraction-like values, e.g. A60=5.55549 and end A7562=79.9716, invalid as P/P0. Chart does not plot this mixed block or recalculate BET. M–X retain short sorption/desorption blocks; no silent cleaning of original workbook performed.
- SI bare-BNMG24h Cu~4% versus~20% remains unresolved across Note3/Table1. SI green claims do not erase DMSO used in the bead procedure. All discrepancies are interpreted narrowly, not allegations of misconduct.

## Metadata evidence

Publisher final PDF author block (p36) and SI p2:
1. Dhruv Menon: Department of Chemical Engineering and Biotechnology, University of Cambridge, Cambridge, UK.
2. Prathmesh Bhadane;3.Priya Mahato;4.Prateek Goyal: Department of Materials Engineering, Indian Institute of Technology Gandhinagar, Palaj, India.
5. Iseult Lynch;6.Swaroop Chakraborty: School of Geography, Earth and Environmental Sciences, University of Birmingham, Birmingham, UK; and Centre for Environmental Research and Justice (CERJ), University of Birmingham, Birmingham, UK.
7. Superb K. Misra: same IIT Gandhinagar affiliation as2–4.

The publisher author spelling/order governs; no accepted date inferred from publication date. First online2026-08-24; accepted2026-07-02; received2025-09-17. Catalogue integration pending with the batch.

## Review and publication state

Scientific reading and bounded workbook audit complete. Bilingual draft has nine sections and four-step/three-stability/two-capacity/two-loading/two-recovery choices plus a unit-aware teaching calculator. Page-only static checks passed. Browser QA passed for all nine sections/hero/details at1440/768/390px in zh/en; all13 branches at every viewport/language, exact values and fixed chart scales, calculator units/presets/invalid/Ce0/overflow handling, keyboard Enter/Space, focus, selection/input/detail preservation across languages, direct-English reload, anchors, local resources, console and horizontal overflow. Saved screenshots in `reports/mof-ree-qa/`; representative1440zh hero,390en metrics,768en recovery were viewed. Regular viewport captures also verified that the sticky header/skip-link artefacts in full-element screenshots are capture artefacts, not actual layout overlaps. Report:`protocol-result.txt`. Shared catalogue, README collection integration and publication remain pending. No source PDFs/XLSX files are redistributed.

## Cached original SHA-256

- `ree-mof-protocol.pdf`: `46a810915134c8a50abc48d8ed158682464be581f2bc049f7d892b908352965c`
- `ree-mof-protocol--41596_2026_1425_MOESM1_ESM.pdf`: `c9be1616e5d875ffc455376e48c429c8df8bb75948e19f32282df3a6604b17ba`
- `ree-mof-protocol--41596_2026_1425_MOESM2_ESM.xlsx`: `fc3d5a74834ee4a582300be4d17f5792585aa88647ab95b7d62357c258611d64`
- `ree-mof-protocol--41596_2026_1425_MOESM3_ESM.xlsx`: `591ccc347cb731aad619bac61737f5df86ef08c55606068961370b2403cac599`
- `ree-mof-protocol--41596_2026_1425_MOESM4_ESM.xlsx`: `90515903d38f005c810584d1d1192606da9cb050a06d3656527907b50ba36dbf`
- `ree-mof-protocol--41596_2026_1425_MOESM5_ESM.xlsx`: `b9b888782be67fc078169004a74fbd747c1e618aadf2921f43555ebed63f57e0`
- `ree-mof-protocol--41596_2026_1425_MOESM6_ESM.xlsx`: `0e2f990c70ffb049d5bcf6e9d1b32e4c639d37bb65fbb3af888ac2abb4790e55`

## High-school teaching revision — 2026-11-02

P1 terminology / process evidence: recovery correctly says digestion but leaves a novice to reconstruct the Cu/REE liquid-solid routes. Reuse says “不解吸” without contrasting the omitted regeneration step. Add instrument definition, material-flow sequence and loading-versus-regeneration comparison.

New method guide: Source: Main Procedure 4, Fig. 3 and recovery results; SI product characterization.

New evidence comparison: Source: Main Fig. 6C, Procedures 3–4 and Source Data for Fig. 6C.

Reread final main Procedure4/Fig3 and Fig6C/Procedure3 plus relevant SI. Acid digestion and hydroxide precipitation are preserved with stated conditions; no quantitative Cu-free claim. SourceData loading interpretation retained and no original arrays refitted. Existing SI leaching discrepancies remain separate.

Reader task: Check: why do four high-removal loadings not prove four successful regenerations? Because the adsorbed REEs were not removed between loadings. This does not test desorption, regenerant damage, post-regeneration selectivity or final product purity.

Scientific observations, author explanations and teaching calculations remain distinct. Existing datasets are unchanged; no unverified atomic structure is drawn. The technical and teaching audits are recorded separately in [the rollout](../../reports/quality-rollout/README.md). Human comprehension has not been tested.

## Audit 2026-11-03

Second-pass content audit of the site-wide explainer review (`reports/explainer-audit/content-findings.md`). Each correction cites its source location; claims not listed were rechecked and left unchanged.

- Beads/cells paragraph (zh/en): “depends on dose and 24/48/72 h exposure” corrected. Supplementary Fig. 14 (SI p. 10) shows viability ~85–90% at every dose at 24/48 h and ~60–65% at every dose at 72 h; the caption reports no significant reduction during adsorption timescales. Values read from the plotted bars.
