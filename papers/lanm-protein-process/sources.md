# Sources and evidence log

## Primary sources

- Dong, Z. et al. “Bridging Hydrometallurgy and Biochemistry: A Protein-Based Process for Recovery and Separation of Rare Earth Elements.” *ACS Central Science* 7 (2021), 1798–1808. DOI: [10.1021/acscentsci.1c00724](https://doi.org/10.1021/acscentsci.1c00724). The page uses the user-supplied `/Users/admin/Downloads/oc1c00724.pdf` copy for page and figure checks.
- Supporting information: [oc1c00724_si_001.pdf](https://pubs.acs.org/doi/suppl/10.1021/acscentsci.1c00724/suppl_file/oc1c00724_si_001.pdf), checked against `/Users/admin/Downloads/oc1c00724_si_001.pdf`.

## Claims used on the page

| Page claim | Evidence location | How it is represented |
|---|---|---|
| LanM is immobilised through a C-terminal cysteine on porous agarose; about 97% loads within 3 h; loading density 2.47 ± 0.54 μmol/mL agarose | Main text Fig. 1, pp. 1799–1800 | Reported result in the overview and mechanism step 1 |
| Immobilised LanM binds down to pH 2.4, drops at pH 2.2, and is nearly inactive at pH ≤ 1.7; pH 1.5 HCl desorbs REE | Main text Fig. 2, pp. 1800–1801 | Discrete evidence in the pH section; the slider between points is explicitly labelled a teaching mapping |
| Column capacity is 5.77 ± 0.67 μmol Nd/mL beads, approximately 2:1 Nd:LanM; capacity shows no visible decline over 10 adsorption/desorption cycles | Main text Fig. 2, pp. 1800–1801 | Capacity card and workflow evidence note |
| Y/Nd separation: citrate then pH gives Y 95.8% recovery / 99.4% purity and Nd 99.7% recovery / >99.9% purity | Main text Fig. 4, pp. 1802–1803; SI Table S4 | Feed selector for Y/Nd |
| Equimolar Dy/Nd: two-pH route gives Dy 76.2% recovery / 99.9% purity and Nd 76.8% / 99.9%; citrate + pH raises Dy recovery to 94.2% | Main text Fig. 4, pp. 1802–1803; SI Table S4 | Feed selector for Dy/Nd |
| PRB fly-ash leachate contains about 0.043 mol% REE (~150 μM); REE breakthrough occurs after ~30 BV; >96.5% of REE is in the most concentrated 3.9 BV fraction; total REE purity is 88.2%, a 2040-fold increase | Main text Fig. 5, pp. 1804–1805; SI Tables S6–S8 | PRB feed selector and original Fig. 5 crop |
| PRB grouping uses pH 2.3 for HREE and pH 1.7 for LREE; reported recovery/purity are HREE 82% / 72.6% and LREE 80% / 98.8% | Main text Fig. 5, pp. 1804–1805; SI Tables S7–S8 | Evidence cards and original Fig. 5 notes |
| Column conditions: Bio-Rad Econo-Column 5 cm × 0.5 cm, generally 0.5 mL/min; PRB preparation uses 1 M HCl at 85 °C for 4 h and pH adjustment before filtration | SI Methods S2–S8; SI Tables S6–S8 | Research-depth annotations |

## Interpretation boundaries

- The pH slider interpolates between reported discrete conditions to teach the direction of the equilibrium shift. It is not an additional measured curve.
- The hero and mechanism diagrams are teaching schematics; they do not reproduce protein or bead coordinates.
- “Purity”, “recovery”, “capacity”, “breakthrough” and “purification factor” are kept as separate quantities. The page does not convert one into another.
- The paper identifies higher capacity/surface area, Fe/Si pretreatment and continuous/rotating-column scale-up as open engineering issues (main text p. 1805).

## Audit 2026-11-03

Rechecked against the publisher full text archived in Europe PMC (PMC8614107, full-text XML). The SI PDF was not re-read in this session.

- Evidence section, Y/Nd feed (`feeds.ynd`, zh/en): the purity bar showed “>99.7%”, a value the paper does not report (Y 99.4% purity / 95.8% recovery with 15 mM citrate; Nd >99.9% purity / 99.7% recovery after the pH step; main text, Figure 4D). The bars now show the Nd product explicitly: “Nd purity >99.9%”, “Nd recovery 99.7%”.
- Evidence section, Dy/Nd feed (`feeds.dynd`, zh/en): the generic purity display added a “>” qualifier to the reported 99.9% two-pH Dy purity. Now “Dy purity 99.9%”, “Dy recovery 76.2%”; the reading text adds the reported citrate/pH trade-off (Dy 94.2% at 99.1% purity; Nd then 94.6% purity) and the pH 2.1 → 1.7 steps (main text, Figures S3C/S4A discussion).
- Evidence section, bar labels (zh/en): the static labels “总稀土纯度 / REE purity”, “目标回收 / target recovery” and “富集倍数 / enrichment” were shown for every feed. Labels are now set per feed. For PRB the recovery value is “>96.5%” (“over 96.5% of the REEs” in the most concentrated 3.9 BV fractions) and 2040× is labelled a purity gain (“2040-fold increase in purity”, Figure 5C text), not concentration enrichment. Non-numeric step labels (“2 steps”, “2-step pH”) are now bilingual.
- pH teaching mapping (`updatePh`, zh/en): the capture regime ended at pH 4.4, so pH 2.4–4.3 (including the pH 3.5 wash used in Figure 5) was labelled an “HREE elution window”. Main text Figure 2A states immobilised LanM binds Nd down to pH 2.4, with ~50% loss at pH 2.2; Figure 5 caption uses a pH 3.5 wash and pH 2.3 HREE elution; the Dy/Nd scheme uses pH 2.1. Thresholds changed to capture ≥ 2.4, HREE window 2.1–2.4; status text now cites these conditions. The bar percentages remain unchanged teaching values.

Consistent with the main text: 12 kDa LanM; ~97% loaded within 3 h, 2.47 ± 0.54 μmol/mL; capacity 5.77 ± 0.67 μmol/mL, ~2:1 Nd:LanM; 10 cycles (pH 3.0 / 1.5) with no capacity loss; PRB 0.043 mol% (~150 μM) REE, mM Na/Mg/Al/Ca/Sr, breakthrough after 30 BV, >96.5% in 3.9 BV, 88.2% purity, 2040-fold; HREE 82% / 72.6% at pH 2.3, LREE 80% / 98.8% at pH 1.7; 29.1 BV load, 10 BV pH 3.5 wash, 16 BV pH 2.3, 10 BV pH 1.7; purification factors 100–500,000 vs 10–5000 (DEHPA), except Fe and Si; rotating-column scale-up as future step.

Second-pass corrections (site-wide audit):

- Connection card (zh/en): the Hans-LanM mechanism was summarised as “flexible sites and cooperative binding”. Mattocks et al., Nature 2023 (abstract; see the Hans-LanM explainer) attribute the amplification to a carboxylate shift that rearranges a second-sphere hydrogen-bonding network, i.e. metal-sensitive dimerization.

## Bibliographic metadata

Checked 2026-11-01. The shared byline uses the ordered manuscript authors and explicitly mapped publication-time affiliations stored under this paper’s original source URL in [`paper-catalog.json`](../../references/paper-catalog.json). Metadata is generated with `node scripts/build-paper-metadata.cjs`; the same record is used on the homepage.

- [Publisher-deposited Crossref record; author affiliations and explicit published-online / accepted fields](https://api.crossref.org/works/10.1021/acscentsci.1c00724) — authors, affiliations, dates.published.
- [Publisher full text archived in Europe PMC: article-meta contrib-group, aff, pub-date and history](https://www.ebi.ac.uk/europepmc/webservices/rest/PMC8614107/fullTextXML) — authors, affiliations, dates.published.

Paper dates: published = 2021-10-08; accepted = notDisclosed. Source precision is retained; undisclosed acceptance is not inferred from conference notifications. Unverified fields remain explicit. This bibliography update does not revise the scientific content or figures.

## Audit 2026-11-03 (publisher access)

Rechecked the hero claim against the Europe PMC full text (PMC8614107).

- “12 kDa LanM” confirmed: “the discovery of lanmodulin (LanM), a small (12 kDa) …” (Introduction). The two earlier audit passes disagreed; this resolves it. No page change.
