# Evidence ledger: water stability and adsorption in MOFs

## Final batch verification

Catalogue integrated on 2026-11-02. Complete article/SI review and page-specific scientific QA are recorded below. Final production checks pass: all 43 pages pass the full static checker and browser regression (3,649 interaction actions); catalogue, taxonomy and production bibliography checks also pass. Earlier draft/pending notes describe development stages and are superseded by this verification. Deployment is verified against the final pushed commit in GitHub Pages build history.

## Identity, version, metadata and reading

Nicholas C. Burtch; Himanshu Jasuja; Krista S. Walton. **Water Stability and Adsorption in Metal–Organic Frameworks.** *Chemical Reviews* **114**(20), 10575–10612 (2014). [DOI](https://doi.org/10.1021/cr5002589).

- Full publisher HTML: [ACS version of record](https://pubs.acs.org/chreay/article/114/20/10575/1481608/Water-Stability-and-Adsorption-in-Metal-Organic). Complete scientific prose §§1–6, all six main tables and captions read. The cleaned scientific-text extraction is 161,664 characters; tables were also extracted separately to avoid omitting cells not represented as prose.
- All main Figs. 1–31 visually reviewed in six figure contacts. The graphical abstract was also inspected; the other three non-numbered images are author portraits. No ACS figure, atomic structure or subscription body is redistributed.
- [Publisher SI record](https://acs.figshare.com/articles/journal_contribution/Water_Stability_and_Adsorption_in_Metal_Organic_Frameworks/2242471), one PDF `cr5002589_si_001.pdf`, **36 physical pages**. All Tables S1–S24 read; S1 is image-only and was read visually at full-page scale. All 36 pages visually checked, including the reference section. A form-feed count of 37 is not a 37-page document. No separate appendix is listed. References are not represented as independently read original papers.
- Received 2014-05-14; published online **2014-09-29**; issue date **2014-10-22**. An accepted date was not found and is not invented.
- All three ordered authors share: School of Chemical & Biomolecular Engineering, Georgia Institute of Technology, 311 Ferst Drive NW, Atlanta, Georgia 30332, United States. Metadata is also stored in the batch manifest for later catalog integration.

## Reading records and integrity

Source cache remains outside the repository:

- `/tmp/mof-ree-sources/water-stability-review.html`: SHA-256 `025e0c14f9389dbb2cb6ce65a1dea34a17562e8f1f56bd72967d59fc5e1050a3`.
- `/tmp/mof-ree-sources/water-stability-review-clean.txt`: cleaned scientific prose, excluding the separate six-table extraction.
- `/tmp/mof-ree-sources/review-main-tables.json`: six main tables, rows including headers = 10, 8, 26, 119, 43, 23; all read. Duplicated HTML presentations were removed for reading, without removing scientific rows.
- `/tmp/mof-ree-sources/water-stability-review--cr5002589_si_001.pdf`: SHA-256 `572199378a6cd43083a68f949a017bfbc268631188e672e0b0003c9813657511`.
- Main visual contacts: `/tmp/mof-ree-sources/review-visual/main-1-6.png` through `main-31-31.png`; SI contacts cover every page in groups of six. Image-only criteria table: `SI-criteria-S4.png`.

## Main question and application selector

Page `#question` and `#application`: main §1 and Table 1. Crystallinity, accessible porosity and useful cyclic performance are distinct observations. The page does not claim PXRD alone measures every local defect or that BET alone establishes function.

All five selector states retain the table's different contexts:

1. Single-pass gas capture: prolonged ambient exposure; PXRD and BET.
2. Cyclic industrial adsorption: relevant gas mixture and PSA/TSA regeneration; PXRD, BET and cyclic adsorption capacity.
3. Gas storage: prolonged relevant exposure; PXRD and BET.
4. Membranes/thin films: relevant operating conditions; PXRD, BET and morphology by SEM/TEM/AFM.
5. Aqueous operation: immersion/stirring in the relevant medium; PXRD, BET and solid mass loss after filtration.

Interpretive caveats about actual membrane performance and REE mass balances are explicitly explanatory extensions, not additional experiments performed by Table 1. The recommendations are not advertised as a complete current standard.

## Category versus confidence

Page `#classes`: main Table 2, Tables 3–6, §4.1–4.4; SI Table S1 (p. S4) and S2–S24.

- The historical “thermodynamically stable” label is operational: at least a week in neutral room-temperature liquid water, or at least one day in acidic/basic/high-temperature water. This is an endurance category, **not a measured sign of a defined hydrolysis ΔG**. Conditions of each record take priority over a bare category.
- High kinetic stability: evidence at high humidity, with poorer liquid-water results **or insufficient liquid-water testing**. The review explicitly discusses under-tested MIL-53(Cr); the page does not assert every member was proven to fail in liquid water.
- Low kinetic stability: evidence under lower moisture; no invented universal RH boundary or lifetime.
- Unstable: rapid damage in the tested conditions. Main §4.4 explicitly notes low-confidence exceptions tested only in liquid water; the page does not transfer their failure automatically to trace vapour.
- Original high/medium/low confidence reflects the strength and breadth of characterization and literature support. It is separate from the category and is not a probability of correct prediction, measurement uncertainty interval or intrinsic material property.

Selected category examples are mapped directly: MIL-101(Cr), high; La-BTB, low, both in the original thermodynamic category; UiO-66 and MIL-100(Fe), high kinetic/high confidence; HKUST-1, low kinetic/high confidence; MOF-5, unstable/high confidence.

**Source inconsistency:** main §4.1 lists MIL-100(Cr) among high-confidence examples, whereas main Table 3 and SI Table S3 assign **medium**. The page does not use that prose list to upgrade the evidence grade and does not silently change the table. This concerns MIL-100(Cr), distinct from the MIL-100(Fe) dossier.

## Isotherms, flexible phases and mixed adsorbates

`#affinity`: §2.1, Figs. 1–14. Temperature-fixed P/P₀ means pressure relative to saturation vapour pressure. Low-pressure affinity, ultimate pore filling, water clustering, hysteresis and cyclic working capacity remain distinct. No invented/digitized isotherm, capacity ranking or temperature conversion is plotted. The source used its then-cited IUPAC classification; the page does not call that 2014 account the complete current standard.

`#breathing`: §2.1.1, Figs. 15–19 (MIL-53, other flexible systems); §2.4/Fig. 25 gives computational context. The three-column exposure–recovery workflow is qualitative teaching, not crystal-coordinate geometry or a new measured cycle trace. Large/narrow-pore transitions can be reversible; reversibility must be observed under specified regeneration conditions rather than inferred from hysteresis or a new diffraction phase alone.

`#mixtures`: §2.2, Figs. 20–22. HKUST-1's limited water preload can improve CO₂ capture while extensive hydration reduces capacity. Initial humid NH₃ uptake can be enhanced despite irreversible changes evident in reuse/PXRD/NMR/N₂ adsorption. No capacity or humid/dry ratio is invented. Water-assisted reactive capture is not equated with reversible adsorption. §2.3/Fig. 23 discusses Fe³⁺ sensing involving cation exchange in MIL-53(Al), not REE capture in this review.

## SI dossiers: each state and its conditions

`#cases`, local `data.js`:

- **MIL-101(Cr), Table S2 p. S5, review SI refs. 2, 5–7.** Boiling water one week: PXRD/BET unchanged. Separate 40-cycle water isobars: 140↔40 °C, 5.6 kPa, little capacity loss and retained porosity. **Countercondition:** 50% steam at 300 °C gives crystallinity loss/major BET loss. Different protocols remain separate; no universal steam-stable claim.
- **UiO-66, Table S8 p. S11.** Vapour/isotherm studies show retained PXRD/BET, alongside shorter immersion/boiling tests assessed by PXRD. **SI ref. 39:** two days in liquid water gives major BET loss without major PXRD change. A day in 0.1 M NaOH gives crystallinity loss. The result does not establish all UiO-66 batches fail identically.
- **MIL-100(Fe), Tables S5–S6 pp. S8–S9, SI refs. 6, 37–39.** Includes a week of boiling-water PXRD/BET retention, 40 water-isobar cycles and six water-vapour isotherms with retained BET. **Counterevidence:** two days in liquid water produces major BET loss with PXRD largely retained. Neither result is deleted; no controlled one-batch lifetime is inferred.
- **HKUST-1, Table S16 p. S19.** Multiple vapour/cycle entries show BET or uptake losses despite limited PXRD change. Liquid water at 323 K for one day gives crystallinity loss. A separate 50 mol% steam/200 °C entry retains PXRD with only minor BET loss. These protocols are not merged into an Arrhenius plot or lifetime curve.
- **La-BTB, Table S4 p. S7.** Three days at 60 or 100 °C in water, pH 2 HCl or pH 14 NaOH: PXRD retained. The row lacks corresponding BET evidence. Original low confidence is retained; no porosity or REE adsorption is invented.
- **MOF-5, Table S21 p. S24.** 10 mol% water vapour at 40 °C gives new PXRD peaks and major BET loss; one-hour immersion gives PXRD/BET/SEM changes. Air-exposure times vary among studies. No single universal damage time is assigned.

All page values and source locations above are directly traceable to SI entries, rather than new independent review of every cited paper.

## Mechanism, computation and design trade-offs

`#mechanism`: §§2.4, 3, 5.1; Figs. 24–28. General definitions ΔG = G(products)−G(reactants) and ΔG‡ = G(transition state)−G(reactants) clarify endpoint energetics versus kinetic barriers. Reaction/speciation conditions must be specified. No numerical free energies, rate constants or lifetime are supplied. The source's Fig. 28 draws the same hydrolysis endpoint difference with different barriers; the page does not equate metal inertness with proof of thermodynamic favourability/unfavourability. Node/SBU connectivity is kept distinct from each constituent metal's coordination number.

Simulation scope: fixed-topology adsorption GCMC cannot itself break framework bonds. Transport MD, reactive models and first-principles routes ask different questions. Water model, charges, polarization, selected defects, finite size/time and lattice constraints limit conclusions. The page does not portray every periodic model as inherently defect-free or every MD model as reactive.

`#design`: §5.2.1/5.2.2; overview Fig. 29 and specific Figs. 30–31.

- **Surface carbon on IRMOF-1**, §5.2.1, **Fig. 30**: treatments at 480/510/530 °C reduce BET by approximately 10/20/50%. At 550 °C the product is ZnO@amorphous carbon, no longer intact parent MOF. Improved 34% RH air exposure over 14 days and 510 °C coated sample's two-hour liquid-water PXRD are kept distinct from week-long porosity evidence.
- **Internal polymer protection of HKUST-1**, §5.2.2 (not main Fig. 31): perfluorohexane-derived PECVD protection, about 30% BET/pore-volume cost, improved moisture/liquid structural and NH₃ results. Limiting water clusters near reactive sites is a proposed mechanism, not proof of complete water exclusion.
- **Bio-MOF-11@Bio-MOF-14**, §5.2.1, **Fig. 31**: core–shell material retains PXRD after one day in water versus damage to the uncoated core. No long-term capacity or universal shell transport is inferred.

All design values are textual with their conditions; no quantitative bars distort a comparison among different observables. Original structural cartoons are not redrawn.

## REE extension and boundaries

`#ree` is labelled an **explainer extension** in both languages. The review is not an REE-adsorption paper. Actual feed, competing species, support leaching, target-element mass balance, precipitation, transport and stripping/regeneration are proposed reading/test considerations. No REE capacity, selectivity, medical efficacy or environmental compliance threshold is attributed to this source. Linked later explainers are separate sources and not retroactively assigned to the 2014 review.

## Implementation and validation

Eleven sections; fully bilingual static prose, headings and 18 selectable states (five applications, four categories, six material dossiers and three designs). A textual three-stage workflow is labelled teaching. No remote rendering or subscription images are needed. Dynamic text updates preserve controls, focus and open details during language changes.

Static page-only check passes. `/tmp/water-review-qa.cjs` passes all 11 sections at 1440/768/390 px in Chinese and English, verifies opposite-language static spans are hidden, all 18 selectable states and critical conditions/source locations, details, keyboard Enter/Space, focus, state preservation and direct English URL/reload. No console errors or document overflow. Screenshots are saved as `reports/mof-ree-qa/water-review-*.png`. A screenshot review identified missing scoped language CSS; this was fixed and the full responsive run repeated. Final desktop/tablet/phone screenshots were inspected. Catalog integration and publication remain pending for the entire batch.
