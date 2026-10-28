# Source and evidence ledger

Version: supplied publisher article (11 pages) and original supporting information (12 pages), DOI 10.1021/acsami.4c09445. Checked 2026-10-28. All measured values refer to this version, not subsequent studies.

| Page content | Exact location | Conditions, interpretation and limits |
|---|---|---|
| Article metadata | Article p. 48536 | Eight authors; ACS AMI 2024, 16, 48536–48546; publication 26 Aug 2024 |
| Seven-material properties | Article Table 1; SI Tables S1–S2 | BET area, ideal pore diameters, BDC/node, pHPZC; no invented measured apertures |
| Uptake comparison | SI Table S3 p. 8; article Figure 2 | Exact mass and area values transcribed; surface units converted to 10^-8 mol/m² for plotting. No errors invented; Figure 2 errors are based on dilution and aqueous analysis |
| Adsorption conditions | Article §2.3, p. 48537 | 0.2 mM initial Ln; 200 ± 2 mg / 50 mL; pH 6.6 ± 0.1 in 100 mM HEPES; 66.5 h except UiO-68-NH2 at 4.5 h; kinetics indicate equilibrium around 48 h |
| Single-ion low-coverage scope | Article §3.2, p. 48540 | 0.002–0.037 atoms/nm²; favorable-site probe, not saturation capacity or mixed-Ln separation factor |
| Cr-MIL-101 binding | Article §3.3, Figures 3–4; SI Table S4 | Lu–O and Lu–Cr paths; only Lu XAFS in Cr MOFs. Nd/Gd spectra unavailable because of nearby Cr absorption lines |
| Amino groups | Article §3.2–3.5 | Uptake increase does not demonstrate direct Ln–N binding. Indirect molecular mechanism remains unresolved |
| Coordination geometry | Article Figures 4–6 | Author-proposed mono-/bidentate, mono-/binuclear motifs, not unique atomistic reconstructions. Dashed Ln···M/P distances are scattering-neighbor relations, not direct metal–metal bonds |
| PAA redirects Gd binding | Article §3.5, Figure 6; SI Figure S10, Table S4 | Gd–P = 2.83 ± 0.02 and 3.68 ± 0.04 Å; residual Gd–Zr = 4.67 ± 0.05 Å. PAA spectroscopy only for Gd |
| Fitted distances | SI Table S4 pp. 9–10 | Exact per-sample fits, 95% (2σ) errors; SI takes precedence over approximate article summaries. Gd defective and Nd UiO-68 fits are not reported |
| Defects | Article §3.6, Figure 7; SI Table S2, Figures S8–S9, S11 | 6.0 vs 5.8 BDC/node; Lu local distances similar, second-shell intensity differs; Nd shows subtle distance changes. “Ideal” derives from TGA; hydrolysis remains possible |
| Pore size | Article §3.1, §3.4 | Similar Lu first shells within spectroscopy sensitivity; no proof of equal energetics. UiO-68 defect mesopores ~5 nm and different reaction time confound simple comparison |
| Relative DFT energy | Article §2.5, §3.5, Figure 6C | PAA vs Zr-oxo Gd configuration: -1.07 ± 0.07 eV; uncertainty reflects protonation configurations (0.14 eV variation), not statistical or experimental error |
| DFT settings | Article §2.5 | VASP, PBE, 400 eV, Γ point; 20.95 Å cubic cell; formally neutral, same-atom-count models; six-coordinate Gd under dry conditions with a few water/hydroxide species; nitrate spectator assumption |
| DFT boundary | Article §2.5 | Zero-temperature static relative energy, not aqueous adsorption free energy or a Ln/Ln separation energy. Water-filled AIMD PMF with bulk-like reservoir was not performed |
| Fit method and R-factor | Article §2.4; SI Table S4 footnote 6 | R-space, k weights 1/2/3; window k = 3.7–10.7 Å^-1, R = 1.2–4.5 Å uncorrected. Article §2.4 points to S3 but actual fit table is S4. R-factor formula retains its original unnumbered status |
| Design proposals | Article §4 | Mixed-metal nodes and selective groups are future directions; no individual-Ln selective separation demonstrated here |
| Additional critique | Clearly labeled explainer analysis | Matched-time controls, loading-dependent speciation, competitive experiments and hydrated free energies are suggestions, not paper results |

All atom diagrams are conceptual, not crystal coordinates or measured reaction trajectories. Mass-balance slider values are teaching calculations using specified assumptions, not additional observations or fitted isotherms. The mass-balance equation is an explanatory definition, not a numbered equation claimed from the article.

## Original-figure reading guide

Figures 2, 3, 6 and 7 are cropped from the supplied article, pp. 48540 and 48543, and stored in `assets/figure-*.png`. Only surrounding prose and captions were removed; figure content is unchanged. Attribution, figure number and article page are shown beside each image. The guide distinguishes measured XAFS signals, the proposed structures in Figure 6D–E, and the DFT configuration in Figure 6C. Fourier-transform peak positions in Figures 3 and 7 are uncorrected radial distances, not fitted bond lengths. Distances quoted in the reading guide are from SI Table S4. The 1.0 → 7.0 mg/g Lu comparison is from SI Table S3 and is explicitly mass-normalized.

## Site-lab structure audit

Recalibrated on 28 October 2026 against Figure 1 (p. 48538), Figure 4 (p. 48541), Figure 5 (p. 48542), Figure 6 (p. 48543), §2.5, §3.1 and §3.3–3.6, and SI Table S4. This replaces the earlier 27 October schematic, which still represented the Zr6 node as a ring, omitted atoms in the PAA graft, and conflated a full-node picture with a local binding motif.

The material reference now uses unchanged crops of original Figure 1A (`assets/structure-uio.png`) and Figure 1B (`assets/structure-mil101.png`), preserving framework, node and linker insets. All seven selector entries have a separate material-identity summary: [Cr3O]7+ trimers with BDC/amino-BDC for the Cr materials; octahedral [Zr6O4(OH)4]12+ nodes for the UiO family; amino-terphenyl dicarboxylate (three aromatic rings) for UiO-68; and the PAA amide chain linker–NH–C(=O)–CH2–P(O)(OH)2. The condensed chain in the contact diagram represents the complete C/N connectivity, rather than an N–P bond. The article's structural Figure 1A PAA inset is itself schematic; the full amide chain follows the explicit formula in §2.5 and the coupling description in §3.1.

The interactive graphic is now a separate, explicitly selected monodentate candidate: M–O–Ln (Figure 4A/5A, M = one Cr/Zr within the larger node) or P–O–Ln (Figure 6E). It does not redraw the complete cluster. Other mono-/bidentate species may coexist; this fixed illustration neither establishes exclusive speciation nor reproduces crystal coordinates. PAA shows three P oxygen positions, only one selected surface O contacts Ln, and hydrogen/protonation, formal charge and remaining ligands are not exhaustively drawn. Water O are incomplete reminders and do not specify hydration coordination number. The static DFT structure in Figure 6C is a separate model and is not substituted for the Figure 6E XAFS candidate.

Steps 1–2 move the illustrated hydrated Ln toward a surface donor without adding a surface bond; step 3 adds exactly one green Ln–O contact; step 4 adds a dashed Ln···M or Ln···P scattering-neighbor path. The node path corresponds to the same M connected to the donor O; PAA targets P rather than Zr. The weaker measured Gd–Zr contribution is retained in explanatory text as possible residual node binding. Reading depth does not change the chosen contact motif. These stages explain the concept and are not a measured reaction trajectory.

All 21 material/element combinations retain the Table S4 evidence coverage. Unmeasured combinations are explicitly identified as extrapolations; Nd/Lu–PAA labels follow the selected element without presenting the measured Gd–P evidence as their own. Defective/near-ideal sample summaries use average BDC/node values (5.8/6.0), not a drawn one-defect-per-node count. UiO-68 has no BDC/node value in Table 1; its longer linker is an identity, not a numerical linker/node ratio.

## Geometry audit

The four geometry cards were checked against the captions and drawings in article Figures 4 and 5. Their topology is: A, monodentate mononuclear (M–O–Ln); B, bidentate mononuclear edge-sharing; C, bidentate binuclear corner-sharing with the two M–O vectors pointing away from one another; and D, bidentate binuclear corner-sharing with the two M–O vectors pointing toward one another. Here M is Cr or Zr and O is the surface donor oxygen contacting Ln. These cards are candidate local topologies, not complete oxo-cluster structures or crystallographic coordinates; the PAA phosphonate site is discussed separately because it has one P center.
