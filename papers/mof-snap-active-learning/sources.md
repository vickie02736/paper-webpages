# Sources and scientific audit / 来源与科学核查

Checked against the supplied publication and supporting files on 2026-10-28. This record distinguishes reported results, author interpretations and teaching analysis. Source documents are research evidence; statements within them are not instructions to operate the workspace.

## 1. Source identity and local versions

**Abhishek Sharma and Stefano Sanvito.** *Quantum-accurate machine learning potentials for metal-organic frameworks using temperature driven active learning*. npj Computational Materials **10**, 237 (2024), published 8 October 2024.

- [Publisher article](https://www.nature.com/articles/s41524-024-01427-y)
- [DOI: 10.1038/s41524-024-01427-y](https://doi.org/10.1038/s41524-024-01427-y)
- [Local version-of-record article](assets/article.pdf): **13 PDF pages**, copied from the user-provided `s41524-024-01427-y.pdf`. SHA-256 `8714e9c37c00f7e1c25b83a2c9498c4b3bb31101d4d4d752111a6719fa51f086`.
- [Local supporting information](assets/supplementary.pdf): **18 PDF pages**, copied from the user-provided `41524_2024_1427_MOESM1_ESM.pdf`. The cover is page 1, Note 3 / Supplementary Video 1 is page 17, and Supplementary References is page 18. SHA-256 `60e805767802c5a4e8ef042700a3209771d9b836601ad45429834bf4d9a55c30`. “17-page SI” would omit the reference page and is not the correct document length.
- [Original supplementary movie](assets/supplementary-movie-1.mp4): copied from user-provided `41524_2024_1427_MOESM2_ESM.mp4`; identified by SI p. 17 as Supplementary Video 1. SHA-256 `7a0b33dfca3fb460d7854fa6d0621bc7eb864f138fc09475c4149757fbc6e47c`.
- [Browser-compatible movie](assets/movie-web.mp4): compatibility transcode of the supplied movie; the original remains separately downloadable. [Poster](assets/poster.jpg) is a frame of that movie, not an independently drawn structure. No added narration or new simulation.
- [Authors’ code](https://github.com/asharma-ms/MOF_MLP_2024), reported in main article ref. 82 and SI ref. 1. The paper calls the Python library `dam`. Linking the repository does not mean that its current code or example simulations were rerun for this explainer.
- [Authors’ dataset, Zenodo DOI 10.5281/zenodo.11176257](https://doi.org/10.5281/zenodo.11176257), reported in main article ref. 81. No raw trajectories were refitted or resimulated here.

All page and figure references below use the printed/PDF page numbers of these supplied files. They do not silently substitute a later preprint or another model checkpoint.

## 2. Reproduction and attribution

The article p. 13 states **Creative Commons Attribution 4.0 International**. Credit: **Sharma & Sanvito (2024), © The Author(s) 2024**, DOI above; [CC BY 4.0 license](https://creativecommons.org/licenses/by/4.0/). The article says images/third-party material are covered unless a separate credit indicates otherwise; no separate exclusion is shown for the reproduced figures. Original figures retain their original colors and English labels, with bilingual explanations beside them. The explainer does not imply author endorsement.

Images are figure-region crops/rasterizations of the local article, without moving points, changing axes, recoloring the source data or redrawing atomic structures. Original figure captions are supplied in the downloadable PDF; the page’s nearby captions are new explanatory text and include figure/page attribution. No neural image generation was used for scientific structures, data or the movie poster.

Figure asset inventory, independently viewed against the source:

- `assets/figure-1.png`, 1069 × 715: **Fig. 1, article p. 2**. Both panels and both lower building-unit diagrams retained. ZIF-8 Zn–N and MOF-5 Zn–O coordination environments remain distinct. Atom colors and Ca/Cb/Cc, H/Ha/Hb, O2/O4 labels retained.
- `assets/figure-2.png`, 1504 × 784: **Fig. 2, article p. 3**. CBAD type lists, arrows, branch question and “No → include/update” preserved. The source’s own labeling is preserved rather than cosmetically corrected.
- `assets/figure-3.png`, 1504 × 1097: **Fig. 3, article p. 5**. All learning-curve and training-parity panels, legends, units and residual plots retained. The explicit training-data heading is present.
- `assets/figure-4.png`, 1488 × 850: **Fig. 4, article p. 6**. Random perturbation, previous-model MD, CBAD selection, DFT labeling and next-model fit retained with arrow directions.
- `assets/figure-5.png`, 1496 × 1204: **Fig. 5, article p. 7**. Training/test rows, parity axes, errors and numeric metric annotations retained.
- `assets/figure-6.png`, 1496 × 1419: **Fig. 6, article p. 8**. Both materials and temperature/pressure scans retained. Pressure units differ between panels (GPa for ZIF-8; bar for MOF-5) and must not be merged onto an invented common axis.
- `assets/figure-7.png`, 1003 × 1138: **Fig. 7, article p. 9**. Both VDOS plots, decreasing wavenumber axes and native amplitudes retained.
- `assets/figure-8.png`, 1496 × 605: **Fig. 8, article p. 9**. Two-dimensional free-energy surface and color scale, local structure/CV definitions, and 250/300/350 K projected curves all retained. No synthetic free-energy surface replaces the source data.

## 3. Central claims and data-generation routes

**Reported, main pp. 2–5 and Fig. 1:** separate SNAPs are fitted for two materials, not one transferable potential shared by them. ZIF-8 contains **276 atoms** per simulation cell; MOF-5 contains **424**. Each has four elements but **seven atom types** distinguished by chemical environment. Fig. 1 displays larger supercells to expose pores: 2 × 2 × 2 for ZIF-8 and 1 × 1 × 2 for MOF-5. Those displayed supercells are not the cells used in all calculations.

**Reported, main pp. 4–5; SI Figs. 2–5:** ZIF-8 establishes learning curves using the expensive AIMD route. Ten 1 ps trajectories at 100–1000 K in 100 K increments, with 0.5 fs timesteps, produce approximately **20,000 candidate configurations**. CBAD selects subsets. The final property model uses **672 training configurations**. Test A has **4956 AIMD configurations**, sampled at 100–500 K; Test B has **2379 classical-MD configurations**, generated with the Weng et al. force field at 500 K. This route has already incurred the initial AIMD cost.

**Reported, main pp. 4–6 Fig. 4; SI Note 2 / Table 2:** MOF-5 instead uses progressively retrained SNAP MD to generate candidates, requesting DFT labels only for selected configurations. The temperature curriculum reaches **487** structures; supplemental trajectory sampling brings the final training count to **596**. The test set contains **1191** structures. Avoid attributing the AIMD-free candidate-generation claim to the ZIF-8 route.

## 4. CBAD rule, resolution data and teaching assumptions

**Reported rule, main pp. 2–3, Fig. 2:** CBAD means cell parameters, bond distances, bond angles and dihedral angles. The six cell parameters are a, b, c, α, β, γ. Bond/angle/dihedral coordinates are partitioned into chemically defined types and can have several values of each type in one structure. For value θ and the corresponding positive resolution Δ, the index is `int(θ/Δ)`. Store visited integer values for each coordinate type. **Accept if at least one corresponding bin is new; then update the lists.** If all bins are already covered, skip the candidate. Selection is order dependent.

### Discrepancy in SI pseudocode

SI Fig. 1 p. 2 increments `check` for each novel value but ends with `check == 6 + nbonds + angles + dihedrals`, which would require all checked values to be novel. Its caption, the main p. 3 prose and Fig. 2 instead consistently specify **at least one** new value. The displayed zero-valued resolution initialization is also a placeholder, not executable division parameters. This explainer follows the main-text/Fig. 2 acceptance rule and records the conflict; it does not present the SI pseudocode as a runnable implementation or claim an author-issued correction.

### Actual SI Table 1 values

Source: SI p. 3, Supplementary Table 1. Each row below gives **(Δcl [Å], Δca [°], Δb [Å], Δa [°], Δd [°]) → training configurations**. The resolution selector displays these nine discrete rows. Its count bar starts at zero, ends at 2132 and is computed as `count / 2132`; it is not an error curve or an interpolated physical law.

1. (2.0, 64.0, 1.0, 50.0, 100.0) → **45**.
2. (1.0, 32.0, 0.5, 30.0, 60.0) → **68**.
3. (0.5, 16.0, 0.5, 20.0, 40.0) → **104**.
4. (0.2, 8.0, 0.2, 10.0, 20.0) → **227**.
5. (0.05, 4.0, 0.05, 5.0, 10.0) → **489**.
6. (0.02, 4.0, 0.05, 5.0, 10.0) → **609**.
7. (0.02, 4.0, 0.04, 4.0, 8.0) → **672**, the final ZIF-8 selection.
8. (0.01, 2.0, 0.02, 2.0, 4.0) → **1230**.
9. (0.005, 1.0, 0.01, 1.0, 2.0) → **2132**.

### Single-coordinate demonstration

`#bond`, `#bin-width`, `#bin-track`, `#bin-feedback`, `#bin-math` use **invented positive bond lengths**, clearly labeled teaching values: retained same-type values **1.98, 2.01, 2.04 Å**; candidate **1.90–2.18 Å**, step 0.01 Å; available Δb **0.02, 0.05, 0.10 Å**. All other CBAD coordinates are assumed already covered. The widget compares the candidate to a fixed reference set; accepting a candidate does **not** mutate that set. Changing Δ recomputes all indices consistently.

The positive-coordinate choice avoids confusing integer truncation with mathematical floor for negative dihedral angles. A small numerical epsilon prevents floating-point representations of decimal boundary values from silently moving a nominal boundary to the preceding bin. At the default Δb = 0.05 Å, visited bins are 39 and 40; candidate 2.09 Å is bin 41 and is accepted. Candidate 2.04 Å is bin 40 and is skipped. At Δb = 0.10 Å, candidate 2.09 Å shares visited bin 20 and is skipped. This is an explanation of the criterion, not execution of `dam`, SNAP or DFT, and supplies no new atomic trajectory.

**Teaching analysis:** the method tracks marginal coordinate coverage rather than the full joint Cartesian configuration grid. Seeing every angle separately does not prove that every combination has been sampled. Novel-bin detection is not calibrated predictive uncertainty or an energy-error bound. Main p. 3 motivates the simplification from roughly M^N_CBAD to N_CBAD × M; the explicit caution about joint coverage is the explainer’s analysis.

## 5. MOF-5 workflow: every displayed state

Source: main pp. 4–6 Fig. 4; SI Note 2 and Table 2, pp. 7–8. The page presents known stages only; it does not interpolate hidden steps or claim every temperature adds 50 configurations.

- **Step 0 / MLP0 / 51 total:** generate 200 perturbed structures from the experimental crystal; CBAD selects 50; add the experimental structure; label and fit. Initial high energies partly reflect riding-model C–H distances of 0.95/0.98 Å versus DFT equilibrium distances >1.0 Å, not high-temperature sampling.
- **Step 1 / 100 K / MLP0 → MLP1 / 100 total:** 50 independent ~1 ps MD trajectories with differing initial structures/velocities. At most one CBAD-selected configuration per trajectory; **49 new** structures are DFT labeled.
- **Step 2 / 200 K / MLP1 → MLP2 / 147 total:** **47 new** configurations.
- **Step 3 / 300 K / MLP2 → MLP3 / 195 total:** **48 new** configurations.
- Intermediate rounds increase temperature by 100 K. The page skips states 4–9; SI Fig. 10 p. 12 independently gives Step 5 = 280 configurations, but no intermediate invented series is plotted.
- **Step 10 / 1000 K / MLP9 → MLP10 / 487 total:** **47 new** added to the preceding 440. Sampling at 1000 K broadens the candidate distribution; it is not an experimental stability test.
- **Step 11 / 400 K / MLP10 / 537 total:** **50 extra** configurations are randomly sampled at least 10 ps apart, DFT labeled and added. SI Table 2 does not list a newly fitted potential here; the page correctly shows no refit yet.
- **Step 12 / 10–500 K according to SI / MLP10 → final MLP11 / 596 total:** **59 extra** configurations, sampled at least 10 ps apart; final model is trained on all 596 and used for property simulations.

### Main/SI ramp descriptions

Main p. 5 describes MD with MLP10 and temperature ramping **10–1000 K** for generating the **1191 test structures** and some additional training structures, alongside another 400 K simulation. SI Table 2 / Note 2 explicitly specify **10–500 K** in the final training-supplementation step. The interactive sequence follows the more detailed SI step description and keeps the main-text test-sampling range separate. The discrepancy is visible on the page, rather than silently resolved into a single invented temperature range.

The HTML/CSS workflow represents **training-data generation**: previous potential/seed → candidate generation → selection/supplementation → DFT energy/force/stress labels → expanded fit. Production MD does not require DFT at every timestep. Postcurriculum random supplementation is not mislabeled CBAD novelty selection.

## 6. SNAP equation, label counts and physical corrections

Source: main pp. 3–4, “Training the SNAP”; pp. 10–11 Methods.

The article’s unnumbered energy equation is a sum of atomic energies, each linear in bispectrum components. The page writes the equivalent teaching notation:

`E_SNAP = Σ_i Σ_l β_{t(i),l} B_{i,l}`, with `F_i = −∇_{r_i} E`.

Here i indexes atoms; l indexes bispectrum components; t(i) indicates atom type; β are fitted coefficients. The derivative identity is the standard force relation, included for teaching. The model is linear in β, not necessarily linear in atomic positions. It is not a neural-network architecture.

- Bispectrum components describe the local environment within a radial cutoff and are rotationally invariant.
- Expansion **2J = 8** yields **56 components per atom type**; **7 types × 56 = 392 coefficients** for each material’s separate model.
- Energy, force and virial-stress labels are fit with **ridge regression**. Species-dependent cutoff radii and weights are optimized against errors; LAMMPS generates descriptors, SciPy supports optimization.
- Per configuration there are **3Nₐ + 7 scalar labels**: one energy, 3Nₐ force components, six independent stress components. The expanded detail’s `(3 × 424 + 7) × 596 = 762,284` is directly recomputed teaching arithmetic. It does not mean 762,284 independent structures or statistically independent targets.

The page’s second formula summarizes the actual production-MD energy:

`E_MD = E_SNAP + E_D3(BJ) + E_ZBL [ZIF-8 only]`.

DFT training labels use CP2K/QUICKSTEP, PBE, MOLOPT basis/GTH pseudopotentials and a **1000 Ry density-grid cutoff**, **without D3**. Geometry/cell optimization includes D3(BJ). LAMMPS MD adds external Grimme D3(BJ) energy/force/stress contributions at every step. Thus the diagram does not imply SNAP has learned D3 from those labels.

ZIF-8 additionally uses a ZBL repulsive term for **Hb–Ha, Hb–N, Hb–Zn, Ha–Cb, Ha–N, Ha–Zn**, with **1.8/2.3 Å inner/outer cutoffs**. These pairs exceed 2.5 Å in training configurations, so ZBL is zero there. MOF-5 has no ZBL term. The safeguard does not establish coverage of bond breaking or arbitrary collisions.

## 7. Accuracy: exact splits, metrics and units

The visible metric cards use the respective **original figure-caption rounding**, not a unified leaderboard. Energy errors are per atom, force errors per component, and stresses are virial-stress components. **RMSE and MAE are distinct**; no cross-unit average is computed.

### ZIF-8 model fitted on 672 configurations

**Main Fig. 3b p. 5 explicitly says “training data”.** Its caption-rounded training RMSE **0.7 meV/atom, 86 meV Å⁻¹, 29.5 MPa** is therefore shown as training error. It is not called a held-out test score.

Independent check of SI Fig. 3 p. 5 gives:

- Training (672): RMSE **0.731 meV/atom; 86.517 meV Å⁻¹; 29.463 MPa**. MAE **0.560; 59.738; 21.823** in the same respective units.
- Test A (4956 AIMD structures, 100–500 K): RMSE **0.572; 63.912; 24.357**. MAE **0.494; 46.049; 18.326**.
- Test B (2379 classical-MD structures, 500 K): RMSE **0.500; 83.739; 33.809**. MAE **0.396; 61.167; 26.303**.

The page identifies test counts/routes and links to SI parity plots rather than misusing the training card as test performance. Unit conversions from source panels are eV/atom → meV/atom ×1000, eV/Å → meV/Å ×1000, GPa → MPa ×1000.

### MOF-5 model fitted on 596 configurations

Main **Fig. 5 p. 7** distinguishes upper training and lower test rows. The visible card reports caption-rounded **test RMSE 0.6 meV/atom, 84 meV Å⁻¹, 11.6 MPa**, **1191 test structures**.

Panel annotations give:

- Training (596): RMSE **1.358 meV/atom; 158.638 meV Å⁻¹; 29.128 MPa**. MAE **0.971; 102.343; 19.100**.
- Test (1191): RMSE **0.638; 83.880; 11.586**. MAE **0.556; 62.075; 8.947**.

**Author explanation, main p. 5:** test configurations generated with the 487-configuration MLP10 are less distorted and occupy narrower ranges than the deliberately broad training data. Smaller test than training errors are thus distribution-dependent, not proof of arbitrary out-of-distribution reliability. ZIF-8 and MOF-5 splits are not matched datasets for ranking materials.

### Learning-curve cautions

Main p. 4 and SI Figs. 4–5 p. 6: near-600-configuration saturation is setup-specific. Sequential AIMD candidates can remain correlated; shuffling removes a small energy-error increase observed at larger training counts. SI Fig. 7 p. 9: MOF-5 errors can rise as training diversity expands beyond ~300 structures, then fall when later trajectory supplementation is less diverse. No monotonic interpolated accuracy curve is fabricated.

## 8. Physical validation and conditions

### Lattice response and thermal expansion

Main pp. 5–6; **Fig. 6 p. 8**. Five independent **600 ps** NPT simulations, **1 fs** timestep; first **100 ps** discarded, remaining **500 ps** analyzed, using **10 ps** averaging windows. Temperature scans use **1 bar** for both materials. Pressure scans use **300 K for ZIF-8**, **250 K for MOF-5**. The original caption calls the bars **variance over the MD trajectory**; the explainer preserves that stated definition rather than recasting them as standard deviation, prediction uncertainty or confidence intervals.

Reported **linear** thermal-expansion coefficients at **300 K**:

- ZIF-8: **+7.1 × 10⁻⁶ K⁻¹**, against author-cited experimental references **+6.5 to +11.9 × 10⁻⁶ K⁻¹**.
- MOF-5: **−13.3 × 10⁻⁶ K⁻¹**, against **−13.1 × 10⁻⁶ K⁻¹** from Lock et al. (article ref. 52).

The signs describe expansion/contraction over the studied conditions; they are not universal all-temperature laws. Main pp. 5–6 report MOF-5 lattice parameter **26.02 Å at 100 K**, compared with **25.89 Å** experimental data, and an approximately **0.5% overestimate** in both materials attributed by the authors to the chosen GGA/PBE reference. This bounds the phrase “quantum-accurate”. No thermal-strain simulator is presented on this page.

### Vibrational density of states

Main pp. 6–7; **Fig. 7 p. 9**; SI Figs. **11–14 pp. 13–16**. VDOS is obtained from the Fourier transform of the mass-averaged velocity autocorrelation. **1 ps NPT at 300 K** precedes **500 ps NVE**; configurations/velocities sampled every **2 fs**. NVE conserves energy rather than thermostating the trajectory at a fixed temperature.

Main broad regions are below approximately **1700 cm⁻¹** and above approximately **2900 cm⁻¹**. The former contains numerous framework/linker motions, including low-frequency collective modes; it does not mean every mode below 1700 cm⁻¹ is a collective lattice mode. MOF-5 C–H stretching predicted around **3050–3250 cm⁻¹** is somewhat above the cited **2900–3100 cm⁻¹** experimental region.

**Teaching analysis:** VDOS peak positions can be compared with IR/Raman literature, but VDOS amplitudes do not represent IR/Raman intensities because the observables/selection rules differ. The page explicitly avoids claiming a quantitative equality of the spectra.

### MOF-5 phenylene rotation, free energy and movie

Main pp. 7–9; **Fig. 8 p. 9**; SI **Note 3 / Fig. 15 / Supplementary Video 1 p. 17**.

- Ordinary room-temperature MD did **not** show ring rotation in the authors’ simulations. Training data span Cc–Cb–Ca–O2 dihedrals −180° to +180°; this motivated using the model to sample transition regions.
- Well-tempered metadynamics uses **two dihedral collective variables**, one at each side of a ring, defined in Fig. 8b. The NVT ensemble gives **Helmholtz free energy**.
- Fig. 8c displays **250, 300, 350 K** curves. Integrating over the other CV gives a one-dimensional projected barrier of approximately **0.46 eV**. The article cites **0.49 eV** experimental reference (ref. 63). Previous simulations quoted in the paper give energy barriers without entropy, so they must not silently be treated as identical free-energy measurements.
- **Author mechanism:** a rigid-framework, anticorrelated diagonal path exceeds **0.6 eV**; oxygen wobbling relative to Zn relaxes the strict correlation and permits a lower-barrier route.
- SI Fig. 15 examines 250 K trajectories at **200 ps** and **12000 ps** and reports barrier convergence to a plateau after approximately **5 ns**.
- The movie visualizes a **biased metadynamics trajectory**, not an unbiased waiting-time or rotation-rate measurement. Its playback duration cannot be equated with a real-time rotational rate. The movie attribution is to Supplementary Video 1; no new movie trajectory was generated here.

**Reproduction details, Methods pp. 10–11:** LAMMPS patched with PLUMED; Gaussian width **0.1 rad**, initial height **0.05 eV**, bias factor **12**, grid spacing **0.05 rad**, bias deposition every **100 steps** (10⁴ ns⁻¹ at 1 fs timestep). Stability restraints include upper walls on **four nearby Zn–O distances at 2.4 Å** and upper/lower walls on **two O2–Zn–Zn–O2 dihedrals at ±0.85 rad**. The article reports force-constant values 25 in eV/Å² and eV/rad² notation respectively. These simulations should not be described as an entirely unrestrained framework trajectory; the page’s Fig. 8 note flags the restraints and points here.

## 9. Boundaries and interpretation

**Reported discussion, main p. 10:** tests cover two framework chemistries. Current training data are likely insufficient for bond breaking, chemical reactions, adsorption chemistry and catalysis. The authors call this a data-coverage limitation, not an intrinsic inability of every SNAP model. Separate MOF models are not evidence of cross-composition transfer.

The cited **0.35 s per MD step on one core**, including SNAP and D3, is a specific reported implementation result, not a speed test run for this webpage or a hardware-independent speedup factor. The paper acknowledges that deep-learning potentials may achieve lower force errors; linear parameter count alone does not settle inference cost, since descriptor evaluation matters.

**Explainer analysis:** ~600 configurations is not a universal sample budget; 1000 K sampling is not evidence of experimental stability; marginal coverage does not supply error bounds; low energy errors do not alone verify dynamics, reaction pathways or transfer. These analyses are distinguished from new experimental or simulation results. No new MD, DFT or fitted model is claimed.

## 10. Complete page-module inventory and scientific disposition

This inventory includes HTML/CSS figures and collapsed content, not only image assets. “Source consistent” means checked against cited scientific content; runtime/accessibility/layout validation is a separate process.

- **Hero original-structure panel:** Fig. 1 crop and both coordination environments; source consistent, no coordinate redraw.
- **Hero numeric strip (672/596, 392, 0.46 eV):** pp. 3–5, SI Table 2, Fig. 8; source consistent with separate material models and free-energy scope.
- **Background comparison panels:** ZIF-8 AIMD pool vs MOF-5 SNAP-generated candidates; pp. 4–5, SI Note 2; source consistent.
- **CBAD toy-bin diagram and dynamic accept/skip text:** main p. 3/Fig. 2 criterion; values are teaching assumptions, not paper measurements. Positive-coordinate truncation and fixed reference set declared.
- **Collapsed CBAD research discussion:** marginal/joint distinction is labeled teaching analysis; order dependence and SI inconsistency are evidence-backed.
- **Resolution controls, five displayed Δ values, count, bar and feedback:** all nine SI Table 1 rows transcribed; zero-based count scale; no invented error values.
- **Seven-state HTML/CSS workflow and cumulative counts:** SI Table 2 Steps 0,1,2,3,10,11,12; exact counts and previous/resulting model identities; postcurriculum random sampling distinguished from CBAD; main/SI range discrepancy retained.
- **Collapsed label-count calculation:** `(3Nₐ + 7)N_config`; exact arithmetic 762,284; scalar labels distinguished from independent configurations.
- **SNAP sum/force formula and 56/7/392 cards:** pp. 3–4; equivalent type-index teaching notation, ridge regression and invariance explained.
- **MD-energy decomposition panel and collapsed training/inference details:** Methods pp. 10–11; D3 outside SNAP labels, ZIF-only ZBL and cutoffs; source consistent.
- **MOF-5 test metrics / ZIF-8 training metrics:** respective Fig. 5 / Fig. 3b captions and plot headings; metrics, units, rounding and splits kept distinct.
- **Thermal-expansion readout:** pp. 5–6, Fig. 6; signs, linear coefficients, 300 K and 1 bar conditions matched.
- **Rotation readout:** pp. 7–9, Fig. 8; two-CV Helmholtz free energy, author flexibility mechanism, projected barrier and experimental comparison; source consistent.
- **Collapsed VDOS discussion:** Fig. 7, SI Figs. 11–14; simulation sequence and peak-region comparison; spectral-intensity distinction is teaching analysis.
- **Eight figure-reader states:** full inventory above; original axes, labels and panel scope preserved; bilingual annotations independently compared for all states.
- **Movie/player/poster and explanatory caption:** SI p. 17, main p. 8; compatible derivative and original downloadable file; bias/rate distinction stated.
- **Six limitations and research takeaway:** main p. 10 plus clearly identified coverage/validation analysis; no universal accuracy/sample/stability guarantee.
- **Source links and downloads:** article, complete 18-page SI, original movie, code/data references, license and this record; version identity retained.

Scientific review found the original figure crops and core quantities consistent with the supplied sources. Browser behavior, concurrent image-load states, language/state retention, responsive layout and final publication status must be recorded from actual execution; source comparison does not by itself certify those behaviors.
