# Source and evidence ledger

## Final batch verification

Catalogue integrated on 2026-11-02. Complete article/SI review and page-specific scientific QA are recorded below. Final production checks pass: all 43 pages pass the full static checker and browser regression (3,649 interaction actions); catalogue, taxonomy and production bibliography checks also pass. Earlier draft/pending notes describe development stages and are superseded by this verification. Deployment is verified against the final pushed commit in GitHub Pages build history.

## Versions read

Zhenning Lou, Xin Xiao, Mengnan Huang, Yuejiao Wang, Zhiqiang Xing and Ying Xiong, “Acrylic Acid-Functionalized Metal–Organic Frameworks for Sc(III) Selective Adsorption,” ACS Applied Materials & Interfaces 11, 11772–11781 (2019). [DOI](https://doi.org/10.1021/acsami.9b00476).

Full publisher HTML downloaded through the UCL-authorized browser to `/tmp/mof-ree-sources/acrylic-mil101-scandium.html`. All scientific main sections and tables read, including `.block-child-p` methods and equations; extraction: `acrylic-mil101-scandium-full-body.txt`. Main Figures 1, 4, 7 and 8 rendered from publisher SVG and viewed; Schemes 1–2 viewed. Main Eq. 8 MathML inspected directly to verify the logarithm and fraction.

Official [SI record](https://acs.figshare.com/articles/journal_contribution/Acrylic_Acid-Functionalized_Metal_Organic_Frameworks_for_Sc_III_Selective_Adsorption/7857038), [PDF](https://ndownloader.figshare.com/files/14628941), `am9b00476_si_001.pdf`, all 8 pages read. All scientific SI pages rendered and reviewed as contact sheets; Table S1 separately viewed at full size. SI contains Figs. S1–S5 and Tables S1–S2, with no separate appendix listed.

All six authors are affiliated with College of Chemistry, Liaoning University, Shenyang 110036, China. Accepted 10 March 2019; first online 11 March 2019; issue publication 27 March 2019. Publisher metadata, article history and SI cover agree on author order and affiliation; online and issue dates are kept distinct.

## Claims and data mappings

- Preparation: §§2.2–2.3, §3.1 and Scheme 1. x is AA feed mass during hydrothermal synthesis, y is AA feed mass during the subsequent polymerization per 0.1 g first-stage material. Neither is a final mass fraction. x = 0.072 g is selected for polymerization; y = 0.075 g is chosen for further adsorption studies. The y = 0.1 g composition has slightly higher screening uptake but little additional titrated carboxyl content.
- Route explorer: main Table 1. Rows retain the exact six material names, measured screening capacities (mg/g), titrated carboxyl content (mmol/g) and N₂ BET areas (m²/g). Uptake and BET use independent fixed scales, 0–70 mg/g and 0–2600 m²/g. Selecting another composition does not attribute the selected 0.075-AA material’s mixture/reuse results to it. No error bars are invented from source tables.
- Screening conditions: §2.3 and Fig. 1. pH 4.5, 303 K, 24 h; general method 10 mg/10 mL, initial concentration reported as 50–80 mg/L for pH tests. The page does not assign one unreported concentration to all Table 1 rows.
- Capacity definitions: Table 1 gives selected-material screening uptake 62.45 mg/g; Table 2 gives measured kinetic equilibrium uptake 40.19 mg/g at 303 K and initial Sc 45 mg/L; Table 3 gives fitted Langmuir qmax 90.21 mg/g. They are not interchangeable. Four qmax values (Sc 90.21, Nd 104.59, Gd 58.29, Er 74.94 mg/g) use a fixed 0–120 mg/g scale and are explicitly labelled model parameters. SI Fig. S1 supports isotherm context.
- Kinetics/pH: §§3.2, 3.4; Figs. 1, 3 and 5, Table 2. Approximately 5 h equilibrium in these runs; pH 1–4.5 avoids higher-pH Sc precipitation; isoelectric point approximately 2.3. The page does not infer a unique mechanism from pseudo-second-order or Langmuir fit quality. Temperature decrease in uptake is restricted to the studied conditions.
- Mixture explorer: §2.3, §3.6, main Eq. 8, Fig. 7 and SI Table S1. All 15 Sc/X pairs at five pH values are transcribed: 75 values. Initial concentration is 20 mg/L for each ion, solid/liquid ratio 1 g/L, 303 K. Equal mass feed is not equal molar feed. All bars use the same fixed dimensionless 0–3 scale as the table. No uptake percentage is digitized or inferred from Sel.
- Eq. 8 is `SelSc/X = log[(qe/Ce)Sc/(qe/Ce)X]`. The base is not supplied; SI Table S1 has no raw per-ion qe/Ce. The page preserves reported Sel, without describing 2.31 as a 2.31-fold preference, a recovery percentage or product purity. No exponentiation or correction is performed. Authors’ preference for Sc at pH ≥ 2, Nd/Gd in separately composed light/middle mixtures, and no obvious heavy-REE preference are reported in their tested context.
- Mechanism: §3.5–3.6, Fig. 6, Scheme 2, SI S3–S4. FTIR/XPS changes and lower pH support the authors’ coordination/proton-exchange interpretation. These do not establish a unique coordination number, binding geometry or stoichiometry. SI S4 does not identify coordination numbers for tabulated ionic-radius trends; no precise size matching is drawn.
- Competing impurity ions: §3.7 and Fig. 5b. Cu/Zn/Mn/Co/Al competition inhibits Sc; the reported 2:1 coexisting-ion/Sc concentration ratio gives about 62% Sc adsorption. This is separate from the 16-REE mixture.
- Elution explorer: SI Table S2, eight acid/concentration/rate entries, exact reported percentages on 0–100%. 0.3 M HCl gives 89.18%, exceeding the other listed conditions; no general monotonic acidity claim follows.
- Regeneration: §2.4, §3.8 and Fig. 8. Adsorb 20 mg/L Sc at pH 4.5 for 5 h; 0.3 M HCl at 303 K for 3 h, rinse and dry at 323 K overnight, five cycles. Absolute adsorption percentage at cycle five is around or above 80%; this is not explicitly an 80% initial-capacity retention metric. The declining trend is retained without inventing exact cycle values from the plot.
- Acid stability: §3.3 and Fig. 4. Residual mass above 87% after a 24 h 0.3 M HCl exposure plus retained XRD features is a specific observation, not an “87% stability” score or zero mass loss. No unmeasured Cr or linker release is filled in.
- Leaching evidence: SI Fig. S5 and §3.8. AA reference retention time 3.36 min; no corresponding peak reported in post-adsorption solution. No quantitative detection limit, complete Cr/linker balance or polymer-fragment analysis is supplied. The page does not turn nondetection into zero leaching.

## Source inconsistencies and exclusions

Main Table 4’s predecessor Cr-MIL-101 row attributes values 70.90/90.00 to a DETA material, whereas the verified earlier 2018 article assigns corresponding Langmuir values to PMIDA-MIL-101. Other comparisons also use different pH and protocols. No universal cross-paper capacity ranking is reproduced. SI S5’s named instrument is not reconciled with its stated liquid-chromatography conditions; no instrument validation or detection-limit claim is made. These issues do not change the transcribed Tables 1/3/S1/S2 values.

## Validation

JS syntax and `check_page.py --page-only` pass. `/tmp/acrylic-qa.cjs` checks all six routes, all five pH values, 15 displayed pair rows, bilingual preserved selection/details, keyboard Enter/Space/Tab, direct-English reload, all nine sections at 1440/768/390 px in both languages, no overflow or console errors. Screenshots saved in `reports/mof-ree-qa/acrylic-*`; representative mobile hero/selectivity, desktop route comparison and tablet regeneration viewed. Catalog metadata/byline integration and final publication checks remain pending.

## Source hashes

- `acrylic-mil101-scandium.html` SHA-256: `3b8d92b7f2bad466070be9e0c136a2f025487e5bdd1b9b0afd4752a154aae1d3`
- `acrylic-mil101-scandium--am9b00476_si_001.pdf` SHA-256: `5b3550ff176d86d5e4e6018f4cadea46be9772eca41b086874db6321c87e9cd3`
