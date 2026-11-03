# Final main and complete SI evidence ledger

## Final batch verification

Catalogue integrated on 2026-11-02. Complete article/SI review and page-specific scientific QA are recorded below. Final production checks pass: all 43 pages pass the full static checker and browser regression (3,649 interaction actions); catalogue, taxonomy and production bibliography checks also pass. Earlier draft/pending notes describe development stages and are superseded by this verification. Deployment is verified against the final pushed commit in GitHub Pages build history.

DOI https://doi.org/10.1016/j.cplett.2025.142314

Final publisher HTML read in full, saved through native Chrome on2026-11-02. Main §§1–4, Table1 lattice values and Table2 energy/time rows compared against previously read17-page arXivv1; numerical rows retained. Main figures1–4 and graphical abstract individually visually inspected. Preprint is a secondary version, no longer the sole basis.

Official SI https://ars.els-cdn.com/content/image/1-s2.0-S0009261425004543-mmc1.docx downloaded via native Chrome. Complete XML text includes floating textboxes not exposed by python-docx paragraphs. Renderer produced only1page and omitted floating illustrations, so this output alone was not treated as complete. All textboxes/captions extracted and read; all5 unique PNGs inspected directly. Media image3=S1IRMOF10(700ps), image1=S2IRMOF14(1500ps), image7=S3MOF177(1500ps), image5=S4ZIF4(3000ps), image9=S5ZnMOF74(700ps); paired duplicate media hashes not extra figures. All trajectories/FES/configurations inspected, no atom redraw.

SI defines Eads=E(MOF+water)-E(MOF)-E(water), each mean potential energy; no added zero-point/entropy correction claimed. Final Table2 retains +28.14kcal/mol ZIF4, not silently changed. SI does not resolve the reason for the sign or provide statistical error/convergence evidence. Figures illustrate biased paths, not unbiased reaction clocks or bulk lifetimes. Main statements of±1kcal/mol retain undefined uncertainty interpretation.

Metadata from expanded publisher history: received2025-05-28,revised/accepted2025-07-31,firstonline2025-08-05,VOR2025-08-07. Author order/mappings unchanged; final affiliationc is MIT Open Learning, Massachusetts Institute of Technology, Cambridge02139,MA,USA. RichaSharmacorresponding from SI.

## Display and interaction mapping

- Idea/method/path: final§§1–3,Fig1,SIenergydefinitionandS1–S5. Low-water single-event scope,3nsNVT300K,.25fs,bias100,width.1Å,reported5kJheightper1000steps,upperwalls. SeparateNPT300K1bar.5ns. No claim Gaussianheightunitmol−1 was printed. Textpath3states and distance definitions preserve separateO/Nprotonation; no atomicredraw.
- Barrier selector7states/fixedbarplot: finalTable2;9/15/19/11/13/33/35kcal/mol forIRMOF1/10/14,MOF177,ZnMOF74,ZIF90,ZIF4;fixed0–40scale. Eads−5.40/−5.40/−4.62/−6.09/−11.70/−16.05/+28.14kcal/mol. Reportedtimes1.06e−10/3.8e−6/3.1e−3/4.6e−9/1.3e−7/4.9e7/1.4e9h,notexperimentalservice.
- Time selector3states: final§3EyringequationandTable2;biased450/2200psnotunbiasedwaitingtime;firstorder300Klocalestimateversusunmeasuredservice. Finalconclusion'sbroadstableatroomtemperatureclaiminconsistentwithshortmodeledtimes,disclosed.
- Sensitivityslider: teachingratioτ2/τ1=exp(ΔΔG/RT),T300K,R.00198720425864083kcal/molK;0–5step.1. Sameprefactorassumption,noabsolutelifetime;0=1,1≈5.351,5=4389.5949. Doesn'tinterpretundefined±1asCI.
- Correlationselector2states: finalFig4A/Bincludes7new+2priorredpointsZIF7/8,R²~.85;Fig4Conly3IRMOF,R²1. No inventedpointcoordinates/refit/generalcausality.
- Limits/source: finalSIreadandstillunresolveduncertaintiesratherthanaccessgaps. NoREE/liquidimmersion/regenerationtestinpaper.

mof-hydrolysis-atomistic-publisher.html SHA256 a177cc252fb2e6489bfdd00a4d4bab3b748161d1774d56486aa5caa9fefa467a
mof-hydrolysis-atomistic-si.docx SHA256 513f7cf0f17b67f552dd025c0625961850eb2070fa76b86dc5ee8a740bfa8094

## High-school teaching revision — 2026-11-02

P1, terminology and inference gap: the original method immediately used CV, ReaxFF, NVT and biased trajectories; the sensitivity equation lacked a high-school exponential bridge. The revision defines objects before equations and retains all seven reported model rows.

New method guide: Source: Final main §2, Figs. 1–3, Table 2; SI Figs. S1–S5 and adsorption-energy definition.

New evidence comparison: Source: Main §3 Eyring relation and Table 2; derived teaching ratio, no new simulation.

Reread final main methods/Eyring discussion and SI energy definition. Added only the explicitly hypothetical 300 K ratio exp(1/(R*300)) = 5.35; no absolute lifetime, new fitted energy or measured uncertainty is supplied.

Reader task: Check: does reaction at 450 ps in a biased trajectory mean failure after 450 ps? No. Bias changes event timing, the event is local, and bulk failure has not been defined. Unbiased rates, propagation and functional loss require additional evidence.

Scientific observations, author explanations and teaching calculations remain distinct. Existing datasets are unchanged; no unverified atomic structure is drawn. The technical and teaching audits are recorded separately in [the rollout](../../reports/quality-rollout/README.md). Human comprehension has not been tested.

## Audit 2026-11-03

Rechecked against the cached final publisher text and SI: Table 2 (all seven barrier, Eads and time rows), §2 methods (AMS 2023.102, PLUMED, bias factor 100, 5 kJ / 0.1 Å Gaussians every 1000 steps, NVT 300 K 3 ns 0.25 fs; NPT 300 K 1 bar 0.5 ns), §3 (≈5 Å placement vs ≈3.5 Å IRMOF-1 start, 450/2200 ps initiation, path-maximum barrier without saddle point, first-order Eyring at 300 K), Fig. 4 caption (R² ≈ 0.85 for A/B with red ZIF-7/ZIF-8 from Yang et al.; R² = 1.0 for C), conclusion "all stable at room temperature", SI Figs. S1–S5 order. Teaching ratio exp(1/(R·300 K)) = 5.35 and the 5 kcal/mol endpoint 4389.6 recompute correctly.

- P2, `index.html` hero byline (zh/en): `arXiv:2507.16197v1 · 2025-07-22` → `Chemical Physics Letters · 142314 · first online 2025-08-05 (preprint arXiv:2507.16197v1 · 2025-07-22)`. The page and this ledger are based on the final article; first-online date from the publisher history recorded above. Not part of the lesson layer.

Second-pass corrections (site-wide audit):

- Model panel, IRMOF-1 (`page.js`, zh/en): added a notice. τ = 1/k with k = (k_BT/h)·exp(−ΔG‡/RT) at 300 K reproduces the other six Table 2 times within ~1% (e.g. 15 kcal/mol → 3.8 × 10⁻⁶ h) but gives 1.6 × 10⁻¹⁰ h for 9 kcal/mol, not the tabulated 1.06 × 10⁻¹⁰ h. The reported value is retained.
