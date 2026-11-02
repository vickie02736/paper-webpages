# TRM and batch size-invariance — validation

Checked 2026-11-02. Baseline: `f460bef0596d5d6ce1228e59676145b347b583ae`; publication target: existing GitHub Pages deployment from `origin/main`, root directory.

## Delivered scope and preservation

- Two real paper studies: `papers/trm/` and `papers/batch-size-invariance/`, both under AI / Training & Adaptation / Reinforcement Learning & Language Model Post-training.
- Each has complete Chinese/English, cumulative Intuition/Mechanism/Research, two numerical teaching labs, a reading task, README and source ledger.
- Existing Rollout Correction and mathematics pages gain links to the original-paper studies; their earlier TRM v1 attribution remains intact. New TRM content explicitly adopts v5.
- Explicit addition audit: `rl-foundations-additions.json`. All 490 baseline records, source identities, explainer paths, bibliography records and initial creation/publication dates compare equal. The original 15-item collection and its three document identities compare equal.
- Totals: 492 papers, 57 linked paper explainers, 3 documentation explainers, 60 pages. AI contains 104 real papers and 3 documentation articles.

## Scientific verification

TRM v5 (2026-06-26): §§1–5, Algorithm 1, Table 1, Figures 1–3, and relevant Appendices D–G checked. Source images actually viewed: PDF pp.1, 6, 8, 10–11. The ratio-direction error in the prose example is recorded in the source ledger; the page uses the equation-defined ratio. Centered value surrogate, global versus sampled conditions, stop-gradient mask, fixed original batch denominator, KL direction, padding, finite-sum bounds and length bias are explicit. Curves are described qualitatively; no pixel-derived endpoints or invented error bars.

Batch size-invariance: arXiv v3 (2022-09-24) including Appendices A–E, formal NeurIPS 2022 record and author code link checked. Source images viewed: PDF pp.1, 6–8, 19. Tables and formulas retain their metric, normalization, sample/seed counts and conditions. Table 5 values are difference-in-differences and Z-scores, not returns. EWMA is a parameter average; startup normalization is distinguished from steady-state age. The small-batch and single-policy-epoch requirements, Heist exception, PPG auxiliary-phase qualification and computational cost remain visible.

Bibliography has verified author lists and explicit institution mappings. TRM authors without affiliation markers remain unmapped; formal TRM publication and paper-specific acceptance dates are unverified. No dates or affiliations are inferred from conference notification schedules or author reputation.

## Editorial review

Prerequisites explain token, rollout, policy, advantage, KL/TV, importance ratios, SGD, Adam, EWMA and PPG where used. Each page has a reproducible exercise with worked reasoning. Both languages distinguish source-reported experiments from teaching calculations. Progressive levels preserve the caveats at the default level. No human rereading study was performed; automated checks do not establish reader comprehension.

## Technical verification

- Static checker: all 60 pages pass, 0 failures; the 3 documentation studies use `--page-only`, with live catalogue entry checks separately.
- `check-rl-foundations.cjs`: independent numerical assertions plus 143 browser interaction/layout/anchor cases; both languages, all three depths, 1440/768/390px, min/max inputs, signed and zero advantages, zero/threshold KL, padding exclusion, reset, keyboard range operation, focus/scroll/input/detail preservation, refresh, titles, catalogue discovery, resources and console.
- `check-explainers.cjs`: all 60 pages, 7,185 interaction cases, including denied local storage. The final mobile-only chart-label and two-column table refinement was followed by the complete two-paper browser check again.
- `check-catalog.cjs`: paper/document counts, creation-time recent ordering, search, updates/failure recovery, languages and widths pass.
- `check-taxonomy.cjs`: immutable legacy audit and 490-record immediate baseline, explicit two-record additions, theme navigation and counts pass.
- `check-paper-metadata.cjs` and `build-paper-metadata.cjs --check`: source metadata and all paper bylines pass.
- `check-verl.cjs`: original 15 labs, document recents, paper-only counts, collection identities, 3-width bilingual checks pass.
- JS syntax and `git diff --check` pass. No new remote runtime dependency or training service.

Screenshots saved in `/tmp/rl-foundations-qa/` (full pages, first screens and evidence/lab sections). Both first-screen contact sheets and representative section captures were actually viewed, including both languages and all three widths. Mobile chart labels were enlarged and the scaling table made fully visible after visual review. Fixed navigation is hidden only during section capture to avoid screenshot overlay artefacts; ordinary viewport screenshots and anchor checks retain it.

Committed review previews: [TRM](rl-foundations-qa/trm-review-sheet.png), [batch size-invariance](rl-foundations-qa/batch-size-invariance-review-sheet.png), [browser result](rl-foundations-qa/results.json).

Publication uses a content commit followed by the existing timestamp generator, then a separate generated-metadata commit and an ordinary push. The build commit and live URLs are checked after deployment, not inferred from local test success.
