# Source and evidence ledger

## Final batch verification

Catalogue integrated on 2026-11-02. Complete article/SI review and page-specific scientific QA are recorded below. Final production checks pass: all 43 pages pass the full static checker and browser regression (3,649 interaction actions); catalogue, taxonomy and production bibliography checks also pass. Earlier draft/pending notes describe development stages and are superseded by this verification. Deployment is verified against the final pushed commit in GitHub Pages build history.

## Versions and metadata

Imteaz Ahmed, Yu-Ri Lee, Kwangsun Yu, Samiran Bhattacharjee and Wha-Seung Ahn, *Gd3+ Adsorption over Carboxylic- and Amino-Group Dual-Functionalized UiO-66*, Industrial & Engineering Chemistry Research 58, 2324–2332 (2019), [DOI](https://doi.org/10.1021/acs.iecr.8b05220).

Complete publisher scientific HTML read, including the `.block-child-p` temperature section. Cache: `/tmp/mof-ree-sources/dual-functional-uio66-gd.html`, full extraction `dual-functional-uio66-gd-full-prose.txt`. Main Scheme 1 and Figures 1, 2, 6 and 7 visually checked using saved publisher images. Figure file suffixes differ from figure numbers; assignments checked against the HTML captions.

Official [SI record](https://acs.figshare.com/articles/journal_contribution/Gd_Adsorption_over_Carboxylic-_and_Amino-Group_Dual-Functionalized_UiO-66/7650005), [PDF](https://ndownloader.figshare.com/files/14212280), `ie8b05220_si_001.pdf`: all 16 pages read; SI-1–SI-6, Tables S1–S3, Figures S1–S6. All pages rendered and reviewed; kinetic/isotherm tables and pH/PXRD page separately viewed at full size. No separate appendix is listed.

Accepted 14 January 2019; first online 30 January 2019; issue date 13 February 2019, verified in article history. The `citation_publication_date` meta value is the issue date, not the online date. Authors Ahmed, Lee, Yu and Ahn: Department of Chemistry and Chemical Engineering, Inha University, Incheon 402-751, Republic of Korea. Bhattacharjee: Centre for Advanced Research in Sciences (CARS), University of Dhaka, Dhaka 1000, Bangladesh. Author order and affiliations checked against publisher meta and SI cover.

## Claim and display mappings

- Preparation: §§2.2–3.1, Scheme 1, SI-1. TPA/TMA feed mixtures create nominal COOH(10)/(25) materials; percentages are not measured final site occupancies. Parent ZrCl4/TPA/HCl/DMF synthesis at 180 °C, 24 h; DMF purification 150 °C, 5 h. ED route: 500 mg MOF, 50 mL toluene, 0.54 g ED, 12 h reflux. Authors interpret FTIR and elemental analysis as amide attachment; no uniquely refined local structure is asserted or redrawn. N values about 1.08/1.84%; direct UiO-66-ED control 0.13% N and about 20.2 mg/g measured 6 h uptake.
- Material explorer: main Table 1 and SI Table S2. All five rows preserve BET, pore volume, Langmuir Q0/b/R2 and Freundlich n/Kf/R2. Q0 bars fixed at 0–100 mg/g; BET bars at 0–1500 m2/g. Table provides no errors. The material selection affects only model/chart outputs and does not attribute later mixture/reuse data to another formulation. Q0 ratios are explicitly calculated from rounded table values; 79/16 = 4.9375, displayed 4.94. No binding-site density or normalized-area advantage is inferred.
- Langmuir explorer: SI Eq. S4 rearranged as qe = Q0*b*Ce/(1+b*Ce). Recalculated using exact reported rounded Q0 and b parameters; not measured points. Teaching Ce range 0–100 mg/L and fixed qe scale 0–100 mg/g are explicit. No claim that every concentration displayed was measured; the source initial isotherm concentration range is 10–150 mg/L.
- Conditions: SI-2, SI-3. General method 15 mg/15 mL, 25 °C, 0.45 µm PET filtration, ICP-OES. pH adjusted with 0.1 M HCl/NaOH; kinetics pH 6 and initial Gd 100 mg/L. Isotherm pH is not independently specified beside the SI isotherm sentence; the page does not silently assign pH 6 to every material/table result.
- Kinetics: §3.2 and SI Table S1. Textual approximate 90% times 2/3 h and full times 4/6 h for COOH(25)/COOH(25)-ED. PSO R2 0.994/0.965 vs PFO 0.971/0.817, reported as fit comparisons without unique mechanism inference. No model curve reconstructed because qe parameters are absent and the source figure has ambiguities.
- pH/mechanism: §3.4, Figure 4, SI S4–S5. pH 2–7 study, uptake high around pH 6; near-zero zeta at pH 2 becomes more negative. The authors avoid >7 owing to hydroxide risk; no universal precipitation threshold is claimed. FTIR and pH trends support their O/N binding interpretation without unique coordination number or geometry. No general statement that Na/Ca/Mg cannot coordinate is adopted.
- Temperature: §3.5, Figure 5 and Table 2. Uptake increases at 25–45 °C. Thermodynamic values are not used for extrapolation: the entropy column is labelled kJ/mol (lacking /K) but 140 is consistent with J/mol/K in the displayed G=H–TS values; Kd is dimensioned in SI-6. No corrected thermodynamic values are substituted without a sourced standard-state treatment.
- Mixture toggle: §3.6, Fig. 6, SI-2/SI-6. Each feed 40 mg/L per ion, 15 mg/15 mL, 25 °C, pH 6, 6 h. Equal mass is not equal molar concentration. Non-REE feed Gd/Na/Ca/Mg/Al/Fe gives authors’ approx. 75% Kd-based percentage selectivity, not established feed recovery or eluate purity. Four-REE feed Yb/Gd/Nd/La gives Yb > Gd > Nd > La. Different mixtures are not quantitatively pooled; bar percentages are not digitized.
- SI Eq. S6 uses concentrations mg/L and V/m in mL/g, so Kd is mL/g. Text describes comparing Kd on percentage basis but supplies no per-ion raw concentrations or explicit normalized-percentage equation; page does not invent either or infer adjacent-REE separation factors.
- Reuse: §3.7, Fig. 7, SI-2/S6. Saturate in 100 mg/L Gd at pH 6; 0.1 M HCl for 2 h, recover/wash/dry; five cycles. Text reports >95% initial uptake at cycle two, around 92% at cycle five, and retained PXRD. No zero-leaching/full-composition retention claim; post-cycle BET/full Zr-linker-ED balance absent.

## Source discrepancies retained

The main text lists ZrCl2 among reagents, while SI-1 gives ZrCl4 in synthesis; synthesis description follows SI-1. Main §3.2 reports the ED material has higher capacity and slower kinetics, but Fig. 2b’s legend/curve ordering is difficult to reconcile with the capacity trend; no labels or digitized points are corrected here. SI gives kinetic duration 10–240 min while the main figure extends to about 360 min. Main abstract’s no-noticeable-loss wording is qualified by specific §3.7 retention values; conclusion says four reuses, consistent with five adsorption cycles but not an independent longer lifetime. Main conclusion gives a 4.7-fold improvement versus 4.9 earlier; page explicitly computes from the rounded Table 1 values and does not conflate these figures. Tabulated per-area values and a claimed 7.9-fold enhancement are not used as a precise normalized ranking. No cross-paper ranking from SI Table S3 is reproduced under unmatched conditions.

## Validation

JS syntax and page-only static checks pass. `/tmp/gd-qa.cjs` passes all five materials, exact default model output, range Home/End/Arrow control, both competition contexts, details/table, bilingual state retention, keyboard buttons/details/Tab, direct English/reload and all nine sections at 1440/768/390 px. No horizontal document overflow or console errors. Screenshots saved in `reports/mof-ree-qa/gd-*`; mobile hero and model plot, tablet selectivity viewed. Mobile SVG label size increased and the plot re-rendered/viewed. Catalog metadata/byline integration and final publication pending.

## Source hashes

- `dual-functional-uio66-gd.html` SHA-256: `c61a002c51f6e0ca04f70c7b7d9b02ad5b82db701e2768ad055191e5c266c559`
- `dual-functional-uio66-gd--ie8b05220_si_001.pdf` SHA-256: `74911581aa0421147b830b4b955efe4ce034238a5e3bc4b3e0d47e2863524a28`

## High-school teaching revision — 2026-11-02

P1 prerequisite / mathematical meaning: synthesis lists TPA/TMA and ED without a novice definition; capacity labels Q0 but its saturation meaning needs a worked point. Explain feed names and input/output flow, derive half-loading and contrast capacity with time.

New method guide: Source: Main §§2.2–3.2, Scheme 1; SI-1 and Tables S1–S2.

New evidence comparison: Source: Main Table 1; SI Eq. S4 and Table S2. The half-loading point follows directly from this equation.

Reread main synthesis and §3.2 text, SI1 and EqS4/TableS2. 39.5mg/g and6.99mg/L are derived from Q0=79,b=.143 and labeled model calculations. Preserved kinetic figure ambiguity and missing isotherm-pH specificity; no unique O/N geometry or rate improvement inferred.

Reader task: Check: does a 4.94-fold fitted capacity increase imply 4.94-fold faster uptake? No. Capacity compares endpoint amounts; kinetics compares progress toward them. The article’s text reports slower equilibration for the ED material, with the kinetic-figure labeling issue retained.

Scientific observations, author explanations and teaching calculations remain distinct. Existing datasets are unchanged; no unverified atomic structure is drawn. The technical and teaching audits are recorded separately in [the rollout](../../reports/quality-rollout/README.md). Human comprehension has not been tested.
