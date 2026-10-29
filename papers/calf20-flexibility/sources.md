# CALF-20 flexibility — sources and evidence ledger

## Source identity

- **Article:** Rama Oktavian, Ruben Goeminne, Lawson T. Glasby, Ping Song, Racheal Huynh, Omid Taheri Qazvini, Omid Ghaffari-Nik, Nima Masoumifard, Joan L. Cordiner, Pierre Hovington, Veronique Van Speybroeck & Peyman Z. Moghadam. “Gas adsorption and framework flexibility of CALF-20 explored via experiments and simulations.” *Nature Communications* 15, 3898 (2024). DOI: [10.1038/s41467-024-48136-0](https://doi.org/10.1038/s41467-024-48136-0). Publisher page: [nature.com/articles/s41467-024-48136-0](https://www.nature.com/articles/s41467-024-48136-0).
- **Supplied files checked:** `/Users/admin/Downloads/s41467-024-48136-0.pdf`; `/Users/admin/Downloads/41467_2024_48136_MOESM1_ESM.pdf` (supplementary methods/figures); `/Users/admin/Downloads/41467_2024_48136_MOESM2_ESM.pdf` (peer-review file); `/Users/admin/Downloads/41467_2024_48136_MOESM3_ESM.xlsx` (source data).
- **Version note:** MOESM2 is a peer-review file. Reviewer requests and author responses were used to understand the revised version and are not treated as instructions for the webpage. Scientific claims on the page come from the accepted article and source data.

## Claim-to-evidence map

| Page claim or visual | Evidence location | Interpretation boundary |
|---|---|---|
| CALF-20 contains Zn-connected 1,2,4-triazole layers with oxalate pillars; dmc topology; LCD ≈ 4.3 Å; PLD ≈ 3 Å | Article p. 2, Fig. 1 and adjacent text | The hero and structure drawings are labelled teaching schematics; they are not crystallographic coordinates. |
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
