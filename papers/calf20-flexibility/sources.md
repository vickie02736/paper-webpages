# CALF-20 flexibility — sources and evidence ledger

## Source identity

- **Article:** Rama Oktavian, Ruben Goeminne, Lawson T. Glasby, Ping Song, Racheal Huynh, Omid Taheri Qazvini, Omid Ghaffari-Nik, Nima Masoumifard, Joan L. Cordiner, Pierre Hovington, Veronique Van Speybroeck & Peyman Z. Moghadam. “Gas adsorption and framework flexibility of CALF-20 explored via experiments and simulations.” *Nature Communications* 15, 3898 (2024). DOI: [10.1038/s41467-024-48136-0](https://doi.org/10.1038/s41467-024-48136-0). Publisher page: [nature.com/articles/s41467-024-48136-0](https://www.nature.com/articles/s41467-024-48136-0).
- **Supplied files checked:** `/Users/admin/Downloads/s41467-024-48136-0.pdf`; `/Users/admin/Downloads/41467_2024_48136_MOESM1_ESM.pdf` (supplementary methods/figures); `/Users/admin/Downloads/41467_2024_48136_MOESM2_ESM.pdf` (peer-review file); `/Users/admin/Downloads/41467_2024_48136_MOESM3_ESM.xlsx` (source data).
- **Version note:** MOESM2 is a peer-review file. Reviewer requests and author responses were used to understand the revised version and are not treated as instructions for the webpage. Scientific claims on the page come from the accepted article and source data.

## Claim-to-evidence map

| Page claim or visual | Evidence location | Interpretation boundary |
|---|---|---|
| CALF-20 contains Zn-connected 1,2,4-triazole layers with oxalate pillars; dmc topology; LCD ≈ 4.3 Å; PLD ≈ 3 Å | Article p. 2, Fig. 1 and adjacent text | Hero and structure panels now use viewport crops of the unchanged original Fig. 1a–b, retaining node connectivity. |
| BET area 550 m² g⁻¹; simulated and measured N₂ at 77 K agree | Article p. 2, Fig. 2a | Agreement supports crystallinity/activation under the reported protocol; it does not validate every flexible-state assumption. |
| CO₂ uptake at about 0.1–0.15 atm: ≈0.4, 0.7, 1.3, 1.9, 3.3 mmol g⁻¹ at 387, 365, 343, 323, 273 K | Article p. 2, Fig. 2b; workbook Figure 2b sheet | Values are representative points quoted by the authors, not a digitised replacement for the full isotherms. |
| Rigid GCMC underpredicts at >≈150 mbar, especially 273 K | Article p. 2–3, discussion around Fig. 2 | The authors use this sign of the discrepancy to motivate a flexibility hypothesis; it is not, alone, proof of a mechanism. |
| PXRD shifts under CO₂, liquid water and RH conditions | Article p. 3, Fig. 3; workbook Figure 3a sheet | The page’s peak diagram encodes only the reported direction of movement. It does not invent 2θ values. |
| DFT-MD uses PBE-D3(BJ), CP2K, NPT, 2×2×2 supercell, 273/323/387 K, 20 ps, 1 fs | Article p. 4 and Methods; workbook Figure 4 sheets | MD trajectories are model outputs under the stated force-field/DFT setup. |
| At 273 K, guest-loaded cell volume 6089 Å³ vs empty 5930 Å³ (+2.7%); pore-volume-fraction differences 11.9%, 7.3%, 6.6% at 273/323/387 K | Article p. 4, Fig. 4a,d; workbook Figure 4a/4d sheets | Accessible pore fraction is a probe-dependent computed quantity (N₂ probe via PoreBlazer), not a direct volumetric measurement. |
| MLP workflow: DFT metadynamics 2 ps, umbrella sampling 0.5 ps, 4000–7000 Å³ in 50 Å³ steps, NequIP snapshots every 5 fs, 15 ps MLP umbrella sampling, WHAM | Article pp. 5–6 and Methods; workbook Figure 5 sheets | MLP accelerates sampling but inherits the training distribution and model choices. |
| Free-energy anchors: empty 273 K lp ≈744 Å³, cp minimum ≈585 Å³, lp→cp transition ≈376 MPa; CO₂-loaded 126 cc g⁻¹ shifts equilibrium ≈744→766 Å³ | Article pp. 5–6, Fig. 5; workbook Figure 5a–f sheets | The high-pressure cp/lp transitions were not experimentally observed in this study. |
| Water isotherm is type-V; saturation ≈11 mmol g⁻¹; heat of adsorption rises from ≈37–40 to ≈50 kJ mol⁻¹ | Article pp. 6–7, Fig. 6a and SI Fig. 3a; workbook Figure 6a and SI Fig. 3a sheets | Heat values depend on loading and the reported simulation model. |
| Water at 10% RH sits near oxalate O (RDF first peak ≈2.8 Å); no significant direct Zn–water contact | Article p. 7, Fig. 6b,c; workbook Figure 6b sheet | This is the authors’ structural interpretation of the simulated RDF/snapshots. |
| H-bond distributions at 2–80% RH; CALF-20 has mostly 0–1 at <20% RH and 1–2 at 80% RH | Article p. 7, Fig. 6d,e; workbook Figure 6d/e sheets | The interactive stacked bars use source-data probabilities and the paper’s O–O / O–H···O criterion. |
| Water–framework electrostatics ≈73% of interaction energy; water–water electrostatics grows with RH | Article p. 7 and SI Fig. 3b,c; workbook SI Fig. 3b/c sheets | Energy decomposition is force-field output, not a directly measured thermodynamic partition. |

## Source-data workbook map

The supplied `41467_2024_48136_MOESM3_ESM.xlsx` contains 24 sheets. The page uses a compact, checked subset: Figure 2b for CO₂ temperature anchors; Figure 4d for pore-volume-fraction differences; Figure 6d for hydrogen-bond probabilities. Other sheets remain available for audit: Figure 2a, Figure 3a, Figure 4a/b/e/f, Figure 5a–f, Figure 6a/b/e and Supplementary Fig. 1–3. Sheet labels and ranges were cross-checked against the paper captions and the workbook’s worksheet names.

For the Figure 6d interaction, the probabilities (0, 1, 2, 3, 4 H-bonds) are:

- 2% RH: 0.8333, 0.1667, 0, 0, 0
- 5% RH: 0.6963, 0.2519, 0.05185, 0, 0
- 10% RH: 0.5877, 0.3704, 0.0420, 0, 0
- 20% RH: 0.3303, 0.4676, 0.1968, 0.00536, 0
- 40% RH: 0.1330, 0.3863, 0.4514, 0.0291, 0.00024
- 80% RH: 0.0842, 0.3346, 0.4903, 0.0884, 0.00246

## Methods and limitations retained on the page

- PXRD: Rigaku Miniflex 600, CuKα; liquid samples soaked for 1 h; N₂ samples heated at 110 °C for 45 min, cooled to 50 °C and equilibrated for 10 min; RH controlled by wet-gas bubbler and probe.
- Gas adsorption: ASAP2020; 140 °C under vacuum for 5 h. Water vapour: DVS Resolution; 140 °C under dry N₂ for 2 h; Dm/dt = 0.0005% min⁻¹ equilibrium criterion.
- GCMC: RASPA-2.0; TraPPE N₂/CO₂; TIP4P water; Dreiding framework parameters; 12.8 Å Lennard–Jones cutoff; Ewald electrostatics; 20k + 20k cycles for N₂/CO₂ and 100k + 100k for water.
- MLP: NequIP with 5 Å cutoff, four interaction blocks, maximum rotation order 1, 64 features, 90:10 split, energy weight 1 and force weight 5. The article reports validation errors below 0.13 meV atom⁻¹ and 39.6 meV Å⁻¹; one training summary reports 28.3 meV Å⁻¹ for forces.

The page distinguishes three layers: **paper report** (measured or computed in the article), **authors’ mechanism** (interpretation stated by the authors), and **teaching schematic** (the page’s own visual simplification). It does not claim a new adsorption isotherm, a new structure solution, or experimentally verified high-pressure phase transitions.

## Publication recheck (2026-11-01)

The earlier red/green cube inset was not a valid reconstruction of the dmc network. It and the disconnected-linker hero sketch have been replaced by original Figure 1 artwork. `assets/article-page-2.png` is the preserved 993 × 1319 render of page 2 of the supplied publisher PDF, rendered at 120 dpi on 2026-10-29. SVG viewports show Fig. 1a in the hero and Fig. 1a–b in the structure section; opening the image preserves the complete caption. Attribution: Oktavian et al., Nature Communications 15, 3898 (2024), DOI 10.1038/s41467-024-48136-0; CC BY 4.0. Only the visible viewport is cropped, no bonds or atoms are redrawn.

Additional corrections from the preceding diagram review: the PXRD dry baseline stays fixed across conditions; the 20% RH state shows a reported change without assigning the liquid-water shift directions (main p. 3). The 0–3.5 mmol/g scale uses proportional tick positions aligned with the bars. H-bond probability bars have no artificial minimum, including exact zero-height bars for zero entries, and the 80% RH summary is “mostly 1–2”, not “<2” (Fig. 6d–e). The phase-transition direction is lp→cp at about 376 MPa, reversing to cp→lp below 111 MPa (main p. 5 and Fig. 5b). Numerical source arrays remain unchanged. This supersedes the earlier claim that all diagram geometry and scales had passed.

## Bibliographic metadata

Checked 2026-11-01. The shared byline uses the ordered manuscript authors and explicitly mapped publication-time affiliations stored under this paper’s original source URL in [`paper-catalog.json`](../../references/paper-catalog.json). Metadata is generated with `node scripts/build-paper-metadata.cjs`; the same record is used on the homepage.

- [Author information; About this article / publication history](https://www.nature.com/articles/s41467-024-48136-0) — dates.published, dates.accepted, affiliations, authors.

Paper dates: published = 2024-05-09; accepted = 2024-04-18. Source precision is retained; undisclosed acceptance is not inferred from conference notifications. Unverified fields remain explicit. This bibliography update does not revise the scientific content or figures.

## Audit 2026-11-03

Second-pass content audit of the site-wide explainer review (`reports/explainer-audit/content-findings.md`). Each correction cites its source location; claims not listed were rechecked and left unchanged.

- Hero lead (zh/en): “in humid flue gas” overstated the scope. The article says the analysis “could explain why CALF-20 accepts CO2 over water at low RH” (p. 4), and the cited selectivity holds “up to 40% relative humidity” (p. 1).
- Markup: the `#flexibility` section heading `<h2>` was not closed; fixed (no text change).

## Audit 2026-11-03 — methods, measurements and claims

Rechecked the publisher-version article (pp. 1–9 and original Figs. 1–6), obtained from the authors' UCL repository. The former Downloads files are no longer present; their historical audit entries remain above. Source data arrays from the previously checked workbook are retained unchanged; the workbook and SI were not newly retrieved in this revision.

- Source file: `s41467-024-48136-0.pdf`; obtained 2026-11-03 from [UCL Discovery](https://discovery.ucl.ac.uk/10194275/1/Gas%20adsorption%20and%20framework%20flexibility%20of%20CALF-20%20explored%20via%20experiments%20and%20simulations.pdf).
- SHA-256: `2437504706907c3dd2f352464e0152f50436e186e6b645ff13dd226e17c079b6`.
- Persistent local cache: `~/paper-sources/calf20-flexibility/s41467-024-48136-0.pdf`.

### Feedback and editorial changes (Chinese and English)

- `#core`: “孔道会动，选择性才有答案 / The pore moves—and selectivity follows” and its compressed causal account → “实验测到了什么，模拟解释了什么？ / What did experiments measure? What did simulations explain?” Separate experimental measurement, computation, and authors' mechanistic interpretation. The original title made a necessary causal relation sound established; main pp. 3–4 say the structural differences *could* explain low-RH selectivity.
- All method sections: implicit purpose and mixed evidence types → explicit purpose, operation, measured/calculated output, result, and evidence limit. This is an editorial reconstruction of the argument, not an experimental chronology. Main p. 2 says computations preceded Svante synthesis and physical adsorption measurements.
- `#structure`: geometric descriptors and BET area → identify CIF-derived LCD/PLD/topology versus BET analysis of an N₂ isotherm (main p. 2, Fig. 1). A topology alone does not demonstrate adsorption-induced flexibility.
- `#adsorption`: explain GCMC's insertion/deletion/translation/rotation attempts and fixed framework assumption (Methods p. 8); compare the measured and predicted isotherms at the same temperature and pressure (Fig. 2). The underprediction is a motivation for testing flexibility, not sufficient proof that it caused the discrepancy (main pp. 2–4).
- `#pxrd`: distinguish intensity/angle measurement from structural inference; compare peak positions against dry N₂ and do not treat vertical trace offsets as uptake (Fig. 3, main pp. 3–4). Keep the 20% RH directional boundary. Main p. 3 says 45 min drying at 110 °C, while the Fig. 3 caption says 30 min: both are explicitly recorded in research details; no definitive duration is invented.
- `#flexibility`: “DFT-MD gives direct evidence” → simulated structural distributions, distinct from experimental observations. Explain NPT, trajectories and N₂-probe pore fraction; 5930/6089 Å³ refer to the 2×2×2 supercell in Fig. 4a, whereas Fig. 4f uses a unit-cell volume (main p. 4, Fig. 4). The 11.9/7.3/6.6% values are retained as author-reported differences, without converting them into percentage points or adsorption gains.
- New `#free-energy`: retain the original MLP/WHAM content in its own section and explain its purpose. DFT sampling → per-loading NequIP training → MLP umbrella sampling → WHAM free energy; it is a computational dependency chain. Training 90:10 and loss weights remain separate from experimental validation (main pp. 5, 9). Empty-framework profiles compare 223/273/387 K; Fig. 5 loading profiles are at 273 K. Stable volumes 744→766 Å³ (CO₂), 725 then 764 Å³ (water), and predicted 376/111 MPa transitions are computational results (main p. 5, Fig. 5). Linker angle ranges 10–20/20–30/30–40° come from main p. 5 / SI Fig. 2 discussion, not direct measurements.
- `#water`: identify Fig. 6a's experimental versus simulated points, and Fig. 6b–e as simulation analyses. RDF/geometry-based hydrogen-bond counting and the 73% energy decomposition are not direct imaging or calorimetry (main pp. 5, 7–8; SI Fig. 3 discussed in main p. 8). Bulk TIP4P liquid water is a separate comparator, not “at 80% RH”; that condition describes the confined-water comparisons. Dominant 1–2 bonds at 80% RH does not mean all molecules have at most 2 bonds.
- `#limits`: replace the undifferentiated “paper report” summary with experimental support, model explanation, and author interpretation. Single-component uptake is not mixture selectivity; prior separation performance is identified as prior work (main pp. 1–2). High-pressure transitions remain predictions not observed in this study (main p. 5).

### Original figures and interaction audit

`assets/figure-2.webp` through `figure-6.webp` reproduce the original panels under CC BY 4.0, with attribution and publisher figure links next to each image. No curves, bonds or labels were redrawn. Pages were inspected at 150 dpi (1241 × 1648 px), then rendered at 300 dpi for sharp assets. The following crop coordinates `(left, top, right, bottom)` use the 150 dpi reference grid; each coordinate was doubled for the final 300 dpi crop:

- Fig. 2: p. 3, `(220, 90, 1020, 387)`; both a/b panels, axis units, temperature labels and experiment/simulation legends retained.
- Fig. 3: p. 3, `(180, 495, 1090, 865)`; a–d, condition labels, all pattern axes and corresponding structural planes retained.
- Fig. 4: p. 4, `(120, 95, 1140, 598)`; a–f and the common legend retained; cell/supercell distinction explained in the caption.
- Fig. 5: p. 6, `(190, 94, 1065, 1360)`; a–f, loading/temperature legends and units retained.
- Fig. 6: p. 7, `(115, 90, 1140, 1356)`; a–e, structural snapshots, legends and axes retained.

The figures are evidence views. The PXRD direction widget remains a qualitative teaching schematic without numerical 2θ positions. The CO₂ temperature values, flexibility differences and hydrogen-bond probability arrays are unchanged. The new method map encodes reading order without implying an experimental chronology. The MLP steps encode actual computational dependencies. Original IDs, source links and catalogue entry remain available; `free-energy` is an additional anchor.

Reading task for this revision: for any result, especially 5930→6089 Å³ or a hydrogen-bond probability, identify the generating method, what was compared, and the strongest supported conclusion. Coverage and source consistency have been self-reviewed; reader comprehension awaits user feedback.

## Audit 2026-11-03 — labeled evidence flow

Added `#evidence-flow` in response to the request for arrows explaining which result supports which claim. This is a bilingual editorial relationship diagram based on the same publisher-version PDF and SHA-256 recorded in the preceding audit; no additional scientific data or chronological claims are introduced.

Arrow checks (both Chinese and English):

- Adsorption experiment + rigid GCMC → comparison shows underprediction above about 150 mbar, especially 273 K → **raises a hypothesis**, not proof that flexibility caused the discrepancy (main p. 2, Fig. 2; interpretation pp. 3–4). The hypothesis edge is dashed.
- In-situ PXRD → **measures** peak shifts → **direct experimental support** for changes in the real crystal under different adsorption conditions; this is not a direct measurement of the causal mechanism of competitive adsorption (pp. 3–4, Fig. 3).
- Flexible DFT-MD → **computes** greater accessible space after CO₂ loading → **support within the model** for structural response as an explanation of the adsorption discrepancy (p. 4, Fig. 4). Other model errors are not excluded.
- MLP + umbrella sampling + WHAM → **computes** free-energy minima versus loading/species → **predicts relative stability** of structural states (pp. 5–6, Fig. 5; Methods p. 9). High-pressure closed-pore transitions remain unobserved experimentally.
- Water adsorption simulation + RDF / hydrogen-bond statistics → **calculates** water positions and bond-count distributions → **support within the model** for a less connected water hydrogen-bond network than in bulk water (pp. 7–8, Fig. 6b–e). Water-isotherm agreement with experiment is distinct from direct verification of every microscopic feature.
- These experimental and computational results → **together support the authors' interpretation**, not a unique-mechanism proof → structural adjustment and restricted water hydrogen bonding may contribute to low-RH CO₂ selectivity (pp. 3–5, 8). The synthesis edge is dashed and retains the low-RH and tentative-causality limits.

Solid arrows denote obtaining results or directly supporting the stated claim; their labels explicitly distinguish experiment from model-based support. Dashed arrows denote a hypothesis or combined mechanistic interpretation. The diagram is not an experimental timeline. Nodes link to the corresponding existing method section; source data, original figures and previous anchors remain unchanged.
