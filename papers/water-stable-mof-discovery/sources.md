# Evidence ledger — water-stable-mof-discovery

## Final batch verification

Catalogue integrated on 2026-11-02. Complete article/SI review and page-specific scientific QA are recorded below. Final production checks pass: all 43 pages pass the full static checker and browser regression (3,649 interaction actions); catalogue, taxonomy and production bibliography checks also pass. Earlier draft/pending notes describe development stages and are superseded by this verification. Deployment is verified against the final pushed commit in GitHub Pages build history.

## Primary versions and reading scope

- Ball, A. K.; Terrones, G. G.; Yue, S.; Kulik, H. J. *Data-Driven Discovery of Water-Stable Metal–Organic Frameworks with High Water Uptake Capacity*. ACS Applied Materials & Interfaces **17** (24), 35971–35985 (2025). DOI [10.1021/acsami.5c09320](https://doi.org/10.1021/acsami.5c09320).
- Full publisher HTML cached as `/tmp/mof-ree-sources/water-stable-mof-discovery.html`, 2,565,044 bytes, SHA256 `d56b857d585d99ccba0194c67fa645bd79cdcd14ff9d7e1d656f3c0eb2a79d0e`. Complete scientific §§1–4, captions and end matter read; Figs. 1–7 and graphical abstract visually checked. The publisher PDF endpoint returned 403; the complete HTML, not an abstract, supports the main-text reading.
- [Publisher SI](https://doi.org/10.1021/acsami.5c09320.s001), Figshare record 29245769, file 55142486, `am5c09320_si_001.pdf`: 15,568,747 bytes, **44 PDF pages**, SHA256 `b1ceea8f2f669199910cb6f9af2ffc67aa1829b2004d9a9605a9d3588f13e52d`, MD5 `46a58e59e0d8faa627f7c73b1ea4bee5`. All scientific text, Tables S1–S19, Figs. S1–S22 and references inspected; every page visually checked through eight rendered contact sheets. No separate Appendix listed.
- [Author code/data version 14751774](https://doi.org/10.5281/zenodo.14751774), linked by SI ref. 23 through concept DOI 14751773. ZIP 225,437,837 bytes, MD5 `51bfd7e97fed9a1758736e21c4464ca6`, verified against author-record metadata. Archive title uses an earlier “Ultrahigh” wording. All seven scientific READMEs, the complete screening notebook, portions of MLP feature/training code, GCMC input and force-field/water definitions read; five prediction CSVs counted. Hundreds of CIFs, all models and remaining scripts were not individually reviewed or executed. No retraining, GCMC rerun or whole-pipeline reproduction claimed.

## Metadata

Publisher: received 2025-05-11; revised 2025-05-20; accepted 2025-05-26; online 2025-06-05; issue 2025-06-18. Author order: Akash K. Ball [a], Gianmarco G. Terrones [a], Shuwen Yue [a], Heather J. Kulik [a,b]. a: Department of Chemical Engineering, MIT, Cambridge, MA 02139, USA. b: Department of Chemistry, MIT, same location. The SI cover duplicates Chemical Engineering for its second affiliation; publisher main metadata is used for Chemistry.

## Claim and visual-module audit

| Module / states | Primary location | Audit and interpretation |
| --- | --- | --- |
| `#question`, two separate prediction tasks | Main §§2–3, Fig. 1; SI S16/S18 | Classification of stability and regression of uptake are separate. Rigid GCMC cannot validate hydrolysis. Final 74 are computed candidates; no treatment or desalination validation claimed. |
| `#training`, all four step states | Main §§2.1–2.2, Fig. 1; SI §1, Figs. S1–S6 | 98 TS-labelled entries → 56 parents (<600 atoms); 4/13/39 unmodifiable/mono/di parents. 1,148 generated −248 overlapping =900 (56+844); 736 converged (45+691), 164 excluded. “TS” is an operational literature label (>one week submerged), not a free-energy determination. Failures remain missing, not zero. Candidate generation is not synthesis proof. |
| Descriptors and RFA | Main §2.3; SI feature/method tables; released training script | 14 geometry+176 RAC−28 invariant=162; selected MLP/FGS uses 11=7 geometric+4 RAC features. Train-only scaling and grouped splits checked in code; no invented neural-network wiring shown. Feature-selection and training CV are distinguished from test evaluation. |
| `#tradeoff`, IQECIS/YEZKUL | Main Fig. 3 and surrounding text; SI Fig. S8 | Exact unmodified IQECIS: Di8.13 Å, VPOV0.62, uptake0.22; YEZKUL: Di5.94 Å, VPOV0.26, uptake826.61 cm³(STP)/cm³. Qualitative pore-cost comparison only; no invented exact functionalized values. Omit invalid/ambiguous “138% lower” prose. Text cards are not atomistic drawings. |
| `#simulation`, conditions | Main §2.2; SI Text S1–S3/Figs. S4–S6; author simulation.input/water.def | 300 K, water-component pressure1 atm≈101.3kPa, rigid2³ supercell, UFF/EQeq, TIP4P/2005, 80k initialization+20k production,12.5Å,Ewald. Not RH or ordinary1-atm humid air. Author input has Lorentz–Berthelot mixing while prose uses arithmetic shorthand; no new mixing-rule calculation added. Last-five recorded-cycle relative SD<5%; simulations time-limited. |
| Charge/experiment checks | SI opening methods, Text S3/Fig. S6, pp.S19–S20 | 73 EQeq/DDEC pairs r.83,73%EQeq higher. Experimental comparison near saturation at298K differs from300K/1atm training conditions. ZIF8 classification disagrees; no universal accuracy validation. **S19–S20 here are page numbers, not table numbers.** |
| `#models`, all 3×6 states | SI Table S14; main Fig. 5 | Model order RFR,GBR,KRR-Laplace,KRR-RBF,MLP-RFA,MLP-all162. RS MAE[48,56,45,59,60,69],r[.94,.93,.95,.92,.93,.91]; FGS[81,72,66,78,59,78],r[.89,.91,.92,.90,.94,.90]; BMGS[135,129,123,117,128,273],r[.73,.73,.75,.78,.77,.06]. Single common zero-to300 axis; values directly generate bar widths. FGS tests groups but can share parents; BMGS tests new parents. MLP not claimed best on every metric. ZULNAX illustrates unseen chemistry. |
| SHAP statement | Main Fig. 6; SI feature analysis | Geometry80.7%,chemistry19.3% for selected MLP. Descriptive model attribution, not causal fractions or a universal law. |
| `#uncertainty`, two fixed states | SI Fig. S22 | All test MAE59.3 retained100%; cutoff0.21 →MAE43.6 retained≈50%. LSD uses10nearest training neighbours, normalized by maximum train/test latent distance. Not calibrated probability/CI. Exact code cutoff.21433013204008164; fixed reported endpoints avoid fabricating a continuous response or boundary calculator. |
| `#screen`, 5 DB×4 states | SI Tables S16/S18 | DB order BW,hMOF,ToBaCCo,US,CoRE. Initial[324300,137941,13513,54132,8342]=538228; stable[64117,10066,2167,12916,2917]=92183; distance-qualified[4843,264,4,326,390]=5827; HWU[28,36,0,1,9]=74. Common zero-to330000 axis; explicit0 retained for ToBaCCo. Threshold stable≥.7; HWU>639cm³(STP)/cm³ (training mean+SD), not engineering certification. No independent per-stage scaling. |
| `#candidates`, all 4 pairs | Main Fig. 7 | EHODOV(In,CoRE)ML653/GCMC839;WOJZOM(Sm,CoRE)653/715;MOF_6003944(V,hMOF)662/698;MOF_13909(Zn,hMOF)659/754. All cm³(STP)/cm³, common0–900axis. No extrapolated error bars; four uptake simulations do not establish74hydrolytic stabilities or a universal prediction lower bound. |
| `#ree` | Explicit explainer extension | No REE adsorption results in this study; nodeSm is not capturedSm. Proposes grouped validation and balances of target/node/linker under actual feed/stripping conditions. Not attributed to authors as their experimental result. |

## Published/archive inconsistencies kept visible

The displayed screen follows internally consistent final SI tables. Main §3.4 adds445known-stable experimental entries to92183 →92628, then quotes5849confident predictions=5437hypothetical+412experimental. SI S18 instead gives5827=5437+390; main conclusion follows5827. SI Fig.S21 caption gives92340. These populations are not silently conflated.

Archive CSV raw row counts and final flags: US23634/1;CoRE8175/9;BW321058/34;hMOF95445/58;ToBaCCo7260/0. Final flags total102, not published74. Data version is therefore not substituted for final publication, despite author linkage. Training raw CSV736rows×194columns includes190features plus identifiers/labels; published162features follow invariant removal. Code uses exact uptake cutoff639.2586211348091, rather than SI-rounded639. Page does not run a boundary calculator using rounded thresholds.

## Local validation

Static page-only check and browser QA are separate from this source audit. Browser report and screenshots are in `reports/mof-ree-qa/discovery-*`. Catalog integration and publication remain pending as part of the full28-paper batch; draft author byline will be supplied by catalog metadata at integration.
