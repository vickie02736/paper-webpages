# Evidence ledger

## Final batch verification

Catalogue integrated on 2026-11-02. Complete article/SI review and page-specific scientific QA are recorded below. Final production checks pass: all 43 pages pass the full static checker and browser regression (3,649 interaction actions); catalogue, taxonomy and production bibliography checks also pass. Earlier draft/pending notes describe development stages and are superseded by this verification. Deployment is verified against the final pushed commit in GitHub Pages build history.

Status: local draft in the 28-paper expansion. Catalogue integration, shared bibliography and publication are pending. Source review and page QA are complete. Checked 2026-11-02.

## Versions inspected

- Yadav, Ankit K.; Kenny, Mitchell S.; Musa, Emmanuel N.; Walz, Timothy J.; Gładysiak, Andrzej; Stylianou, Kyriakos C. **Hydrolytic Stability of Metal–Organic Frameworks: An Experimental Study**. Chemistry of Materials 37(24), 9965–9984 (2025). DOI [10.1021/acs.chemmater.5c02564](https://doi.org/10.1021/acs.chemmater.5c02564).
- Full publisher HTML opened through the user's UCL subscription and saved through Chrome's ordinary Save Page interface. The main scientific text from Abstract through Conclusion and data-availability/SI descriptions was read. [Publisher article](https://pubs.acs.org/cmatex/article/37/24/9965/3690611/Hydrolytic-Stability-of-Metal-Organic-Frameworks). Local cache SHA-256: `87027dcfa3095f87a1926de583a7c55c6d8d16ec8d0b1f84de481d084a1a092c`.
- [Official ACS Figshare record](https://acs.figshare.com/articles/journal_contribution/Hydrolytic_Stability_of_Metal_Organic_Frameworks_An_Experimental_Study/30781121), published 2025-12-03; one scientific attachment, `cm5c02564_si_001.pdf`, 5,557,426 bytes, **181 PDF pages**. [Official file](https://ndownloader.figshare.com/files/60085451). SHA-256: `214e99662939022761fe7694cfa7933428580512548fbedf5403816e72f16ee8`.
- All 181 SI pages were read and visually checked, including the common methods, every row of Tables S1–S7, all 51 material-specific synthesis/characterization sections, Figures S1–S51 and the reference list. Table S4 was visually compared with the complete 51-row transcription. This includes structural illustrations, PXRD, TGA, FTIR, N₂/CO₂ sorption and selected SEM. Main Figures 1–9 and the graphical abstract were also visually checked. The page does not reproduce the simplified acid–base ion assignments of main Figure 7 or treat cross-material comparisons as isolated causal experiments. No independent appendix or additional data attachment is listed in the inspected ACS supporting-information record.
- Originals remain in a local reading cache and are not redistributed in this repository. The page includes factual table transcriptions and new teaching graphics; it does not republish the complete article or SI.

## Claim and display audit

- **50 MOFs plus one zeolite, all synthesized in-house:** Abstract, §1 material inventory, §2.1. Zeolite 13X is deliberately retained and is not relabelled as a MOF.
- **Treatment workflow:** SI S4: 30 mg pristine material, 5 mL deionized water, 24 h at ambient conditions; filtration using preweighed 55 mm Whatman no. 1 paper; filtrate discarded; 72 h air drying, weighing and characterization. SI S5: vacuum activation at 120 °C for 15 h before gas sorption. This tests a treatment sequence, not hydrolysis alone during in-liquid exposure.
- **PXRD measure:** §2.2 and SI S4–S5. Background-subtracted integrated intensities, hydrated/pristine ×100. The page calls this relative crystallinity, preserving the paper's terminology, and distinguishes it from absolute crystalline phase fraction. Phase transformations invalidate an interpretation as intact original-phase retention.
- **BET and CO₂:** §2.3 and SI S5, Tables S2 and S4. BET from N₂ at 77 K; selected CO₂ at 298 K, ratios of 1 bar uptake. These are separate columns and separate selectable metrics. Unreported CO₂ is null, not zero; numeric zero has a distinct meaning.
- **Mass measure and calculator:** §2.4, SI S5 and Table S3. `R = mh × wh / (mp × wp) × 100`, with w as a solvent-free plateau mass fraction. MIL-101(Cr): mp=30 mg, mh=47.40 mg, wp=82%, wh=51%; calculated 98.2683%, displayed 98.27%. Raw weighed ratio is 158%. UiO-66: 30, 26.67, 88%, 72%; calculated 72.7364%, displayed 72.74%. Editable values are a teaching calculation, never labelled measured observations.
- **51-row comparison:** SI Table S4, S9. `data.js` preserves every row, both gas values when present, and published precision as numeric values. It splits BET/CO₂ without combining their rankings. Figure S1–S51 mapping follows the material inventory, including the inserted extra UiO-66 batch pages; figure numbers do not shift with PDF page numbers.
- **Chart scale:** Fixed metric-specific ranges: crystallinity 0–200%; BET 0–600%; CO₂ 0–160%; mass 0–125%. All start at zero, fit all S4 values and show a 100% reference. Bar lengths and labels derive from the same data. Missing values use an em dash and an explicit description. No composite score or universal stable/unstable cutoff is invented.
- **UiO comparison:** §3.2, §3.8.3, Figure 8; S4 and Figures S30/S36/S38. UiO-66/67/68 crystallinity 64/8/14%, BET 90.7/2.2/3.6%. Source interpretation includes linker flexibility and drying stress; the page does not claim an isolated causal experiment on linker length.
- **UiO-67 absolute area:** S2: 1751.57→38.95 m²/g; S4 mass 90.81%. Its recovery does not prove intact accessible framework.
- **CAU-10-H:** §3.3, S2/S4 and Figure S7: 104% crystallinity, 62.2% BET retention. Main text suggests several possible causes and says further work is needed; no unique mechanism is asserted.
- **MOF-74:** §2.3, §3.4, §3.9, S2/S4 and Figures S23/S24. S4: Ni crystallinity122%, BET42.9%, CO₂45.8%; Zn crystallinity157.3%, BET567.0%, CO₂40.2%. S2 gives Zn absolute BET19.4→110 m²/g, CO₂1.32→0.53 mmol/g; Ni pristine BET14 m²/g. The very low BET baselines and unlike probes are kept visible. The page does not repeat the main text's blanket statement that both N₂ BET values decrease, because S2 shows otherwise for Zn.
- **MIL-101(Cr):** §3.4, S2/S3/S4, Figure S16. S4 values 92/97.4/98.27%. S2 areas2731.84→2660.84 m²/g. The separately calculated S1 value93% differs from S4; no fabricated reconciliation.
- **Phase changes:** §2.2 and §3.4; Cu(bpy)I, Cu-HKUST-1 and MIL-53(Fe), Figures S9/S10/S21. S4 intensity ratios136/116.5/132.4% do not measure retention of an unchanged original phase. Cu-HKUST-1 and MIL-53(Fe) case notes make this explicit.
- **ZIF-8:** §3.6, S2/S4, Figure S45. Crystallinity80.9%, BET1303→1580m²/g; pore cleaning/impurity removal remains author interpretation. **ZIF-zni:** pristine BET3.07m²/g and CO₂0.1758mmol/g, S2. Retaining a small capacity is not a high-capacity application result.
- **Al-PyrMOF and mCBMOF-1:** §3.3/§3.4/§3.8.5, S2/S4, Figures S5/S13. Al-PyrMOF BET98.6%, mass99.85%; mCBMOF-1 crystallinity102%, BET591→635m²/g. Mechanistic factors are explicitly attributed to authors, not presented as individually controlled demonstrations.
- **Batch variation:** SI S105–S106, Tables S5–S7 and Figure S30g–i. Three independently synthesized batches, each tested by the same workflow. Crystallinity64.0799/72.5481/54.5361%; reported standard deviations7.3577/2.1926/2.5011 percentage points for crystallinity/BET/mass. These are not repeated cycles, universal uncertainties, confidence intervals or a significance threshold for all materials. Main text §3.9 uses repeated-hydration language, but the explicit SI experimental description governs this page's interpretation.
- **REE connection:** No REE adsorption experiment is reported here. Actual-water leaching, competitive uptake and regeneration controls are labelled explainer analysis. They are not attributed to the experimental dataset.

## Numerical differences retained

Full comparison follows **S4** consistently. S1/S2 are cited separately when needed for absolute values. Relevant discrepancies include MIL-101(Cr) crystallinity92% (S4) versus93% (S1), MIL-167 CO₂99.8% (S4) versus99.97% (S2), ZU-36-Ni CO₂78.7% (S4) versus78.6% (S2), and minor rounding in other rows. The page does not silently recalculate or blend columns from different source tables.

## Figure and caption discrepancies

- **Figure S23e, S80, MOF-74(Ni):** the blue hydrated N₂ curve lies above the red pristine curve, whereas its caption and Table S2 report BET 14→6 m²/g, consistent with S4 retention42.9%. The discrepancy remains unresolved; both the selected-material note and limitations section identify it. No curve was digitized, relabelled or used to recalculate BET.
- **Figure S14e, S53:** the mCBMOF-2 section caption names mCBMOF-1. The caption values818→1004m²/g agree with the mCBMOF-2 row in Table S2. The page follows S4 material identities and does not infer an identity correction for the plotted curves.
- **Figure S29e, plot S99/caption S100:** the Ru-HKUST-1 section caption names Al-BMOF. Values894→570m²/g match the Ru-HKUST-1 row in Table S2. The full comparison follows Table S4.
- **Other context exclusions:** the MIL-140A-Br synthesis formula and its chain-SBU illustration are not mutually consistent; the page does not redraw an atomic structure. The ZIF-67 S44a caption says octahedra, while its diagram depicts tetrahedral coordination; no structural drawing is derived from that caption. Some reagent mass/mmol pairs in the ZIF synthesis sections are inconsistent; this page is not a synthesis recipe. Thermal “stable up to” captions are not interpreted as water-exposure lifetimes.

## Bibliography evidence

Publisher author block and article history: six authors in the order above; all mapped to Materials Discovery Laboratory (MaD Lab), Department of Chemistry, Oregon State University, Corvallis, Oregon 97331, United States. Accepted 2025-11-17; first published online 2025-12-03; issue date2025-12-23. The issue date in `citation_publication_date` is not substituted for first online publication. Shared catalogue record is pending integration.

## Verification remaining

- Completed: full main/SI text and figure review; bilingual review of static prose and selected-material notes; all51 data rows checked against S4. Page-only static check passed.
- Completed: all8 sections at1440/768/390px in both languages; all51 material choices and all4 measure controls, missing data, table search/sort/empty state, valid/invalid mass inputs, calculator presets, keyboard Enter/Space, focus and state retention, direct English URL/reload, anchors, console and overflow. Representative screenshots were saved and viewed in `reports/mof-ree-qa/`; final browser report is `benchmark-final-result.txt`.
- Integrate immutable catalogue identity, source-backed author metadata, publication dates and README entries with the other 27 additions.
- Run complete site checks and publish the final collection; this draft has not been pushed.
