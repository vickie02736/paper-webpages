# verl independent explainers — acceptance record

Checked 2026-11-02. Scope: 12 independent paper studies and 3 independent documentation studies, plus one navigation collection. These are static teaching pages and calculations; no GPU training or experimental reproduction was performed.

## Inventory and preservation

- Collection: [all 15 pages](../collections/verl-algorithms/README.md). Every item has its own `index.html`, `README.md`, `sources.md`, and working lab.
- Starting publication baseline: `f29995b9ba1cfdb22d52088ca4586566eefc3b35`, 479 papers and 43 paper explainers. The final workspace also incorporates the existing-page teaching rollout through `b06f51f`.
- Final counts: **490 real papers, 55 linked paper explainers, 3 documentation explainers, 58 explainers total**. The collection itself adds no paper or explainer count.
- DeepSeekMath retains `paper-3e01248237a0`, its source, metadata and primary category; only its explainer link is added. Eleven other real papers are added after source-identity checks.
- The exact additions and sole permitted existing-record change are in [verl-catalog-additions.json](verl-catalog-additions.json). Original catalogue audit fixtures remain unchanged. Taxonomy regression checks the original 451 records / 463 contexts, the subsequent 28 MOF additions and this batch's 11 additions.
- All pre-existing publication dates, creation timestamps, source URLs, IDs and page paths are preserved. Remote updates are merged semantically, including their update timestamps. The existing timestamp generator is run after content commits.
- Optional `collections` supplies navigation and document identities. Homepage paper filters count only real records; recent explainers resolve documentation through the collection and deduplicate by page path.

## Scientific verification

The adopted paper versions, PDF hashes, documentation hashes, source links and claim-level section/equation/table locators are recorded separately in each page's `sources.md`. The authoritative bilingual manuscript is [verl-explainers.json](../references/verl-explainers.json).

All 12 primary PDFs were read with relevant methods, experiments and appendices. Their selected evidence pages were rendered and visually inspected: PPO p.6; DeepSeekMath p.12; DAPO p.9; SPIN p.16; SPPO p.16; Entropy Mechanism p.12; OPO p.6; GPG p.4; OTB p.6; DPPO p.24; GKD p.9; DRO p.8. Original figures are not republished. Exact table transcriptions and derived teaching plots are identified separately.

All 15 verl documentation files were checked against commit `3fdf2b548882a8aeccf0842c2150d9c9f1790a55`, including matching SHA-256 hashes. The rollout mathematics also distinguishes its supporting references; OPD separately attributes the later Thinking Machines method. The DRO implementation objective was checked against pinned source code.

Specific checks and distinctions:

- **PPO:** positive and negative advantage clipping, zero advantage, objective and derivative; normalized-return evidence is not labeled accuracy.
- **GRPO:** population group standard deviation, constant groups, optional standard-deviation removal; original GRPO, DrGRPO and implementation aggregation are distinguished. DeepSeekMath's data and pretraining context is retained.
- **DAPO:** asymmetric clipping, all-correct/all-wrong group filtering, overlength buffer; the paper's cumulative ablation and verl's separate score are not combined.
- **SPIN / SPPO:** reference generation versus optimization stages, original human demonstrations versus an online preference recipe, probability normalization and cyclic preference wins. SPPO uses the adopted version's Table 1 baseline 17.11 and records its discrepancy with the annotation.
- **Entropy:** exact entropy change and first-order covariance approximation, Clip-Cov versus KL-Cov; benchmark averages are not presented as wins on every benchmark.
- **OPO / GPG:** length-weighted baseline assumptions, on-policy scope, batch versus group statistics, zero-variance groups, and removal of group standardization. GPG controls keep the zero-variance-group count consistent with the displayed group.
- **Rollout topics:** sampling / old / current policy identities; old-to-sampling and current-to-old ratios; token versus sequence weights; truncation bias and rejection masks. Synthetic inputs do not imply validated convergence or speedup.
- **OTB:** cumulative logit-gradient energy proxy, token-wise baseline, padding and all-padding outputs. Peak-over-training evidence is not presented as a common-step result.
- **DPPO:** binary TV and old-to-new KL, sign-dependent update mask, contrast with PPO clipping; step-150 evaluation is distinguished from later reward optimization.
- **OPD / GKD:** feedback at student-visited prefixes, forward/reverse KL, full-distribution versus sampled-token feedback, direct differentiation versus later policy-gradient treatment.
- **DRO:** reward and quadratic log-ratio terms, positive regularization, original conditional objective versus batch approximation and supplied implementation advantages. Reported fold standard deviations are not relabeled confidence intervals.

New paper metadata comes from the adopted PDFs and arXiv records. Unsupported publication or acceptance dates remain explicitly unverified. DAPO's 37-name PDF contribution list is documented against the shorter abstract list; two unmarked OTB affiliations remain unmapped rather than guessed. Shared bibliography components load only for actual papers.

## Editorial review

Each page provides a research problem, method, symbol explanations and assumptions, evidence with conditions, limitations, and a separate implementation note. All 15 include bilingual foundations, a reproducible teaching example and a reading question with an expandable answer. The three depths progressively expose derivation and research detail while preserving the primary evidence limits.

Editorial self-review and source comparison are complete. **No human rereading study was conducted.** Technical checks and the existence of reading questions do not establish that a novice reader will understand every explanation.

## Technical verification

- All 58 pages pass the skill's static checker; the three document topics use `--page-only`, with real collection and homepage entry points checked separately.
- Full `check-explainers.cjs` regression covers all pages at 1440, 768 and 390 px, both languages, all depths, input boundaries, state/focus retention, denied storage, console/resource errors and overflow. Final integrated run: **58 pages, 6,921 interaction cases, all passed**.
- `check-verl.cjs` passes independent numeric assertions, signed PPO boundaries, constant groups, weighted baselines, entropy/KL direction, OTB padding/all-padding, all 15 labs, reset, keyboard operation, anchors, language/depth state, collection search and empty results, document recents, paper-only counts, and invalid-collection recovery.
- `check-catalog.cjs` passes live refresh, immutable creation-date sorting, bilingual searches, focus/recovery behavior and responsive layout. Its totals distinguish 55 linked papers from 58 explainers.
- `check-taxonomy.cjs` passes catalogue preservation and classification checks; its browser suite passes navigation, filters, URL reload, direct-paper/reference links, bilingual expansion and keyboard behavior.
- `check-paper-metadata.cjs` passes dates, search, refresh, safe rendering and all byline mounts, including zero bylines on documentation pages. `build-paper-metadata.cjs --check` passes in the final publication workspace.
- Shared and new JavaScript syntax checks and `git diff --check` pass.

Reproduction uses the repository's Playwright checks over HTTP. Set `PAPER_PLAYWRIGHT_MODULE` to an installed Playwright module when dependencies are outside this worktree, and optionally set `PAPER_BASE_URL` / `PAPER_QA_DIR`. The numeric subset can be run with `node scripts/check-verl.cjs --data-only`; catalogue preservation can be run with `node scripts/check-taxonomy.cjs --data-only`.

## Viewed screenshots

All 15 labs were captured in both languages at the three widths, and every page received a visual spot check. Full-page screenshots include research-depth content. The following representative final screenshots are retained in the repository and were actually opened for inspection:

- [Collection, desktop Chinese](verl-qa/collection-desktop-zh.png)
- [PPO objective and gradient, desktop English](verl-qa/ppo-desktop-en.png)
- [Baseline filter and records, tablet Chinese](verl-qa/baselines-tablet-zh.png)
- [Sequence weights, mobile English](verl-qa/sequence-weights-mobile-en.png)
- [OTB energy, baseline and padding, mobile Chinese](verl-qa/otb-mobile-zh.png)

Wide token tables intentionally scroll inside their containers on mobile. Plot ticks use compact scientific notation for large sequence weights. No unresolved critical evidence or interaction issue remains in this batch.

## Publication target

GitHub Pages is configured for `origin/main`, repository root, at <https://vickie02736.github.io/paper-webpages/>. The collection entry is <https://vickie02736.github.io/paper-webpages/collections/verl-algorithms/>. A successful build containing the final timestamp commit and per-page online checks are required before reporting publication complete.
