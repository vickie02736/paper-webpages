# MOF-centred taxonomy migration validation

2026-11-02. Approved research-oriented scheme B, with the subsequent request for separate MOF Stability and Rare-Earth Adsorption & Separation subcategories. Based on published main commit `d819cb7`; the existing author/affiliation/date features were retained.

## Data preservation

- 463 old occurrences map to 451 stable primary paper IDs; no paper is omitted. Original bilingual perspective introductions remain in `legacyContexts`.
- Primary counts: MOF 68; AI 90; general chemistry/materials 73; robotics/lab automation 72; mathematics/modelling foundations 78; life sciences/drug discovery/medicine 70.
- MOF Stability: 2 papers. Rare-Earth Adsorption & Separation: 4 papers. Non-MOF comparison methods remain among the five MOF related references.
- All 15 explainer paths, first publication dates, immutable creation timestamps and all 451 bibliographic metadata records are unchanged.
- Every original node, explanatory text and source link in all six FreeMind maps was compared with the release baseline and preserved. Reference identity attributes and a classification note were added.
- Three bilingual routes refer to existing IDs; they do not add primary records. The migration ledger records every old occurrence and its new category.

## Executed checks

- `node scripts/check-taxonomy.cjs --data-only`: complete migration, stable/bilingual groups, references, primary counts and immutable metadata.
- `node scripts/check-taxonomy.cjs` with local HTTP: MOF stability/REE, same-dimension OR/cross-dimension AND tags, theme filtering, empty results, URL reload, legacy aliases, route and related-reference navigation, keyboard activation, bilingual expansion state and 1440/768/390px layouts.
- `node scripts/check-catalog.cjs`: initial and periodic refresh, focus/visibility, combined queries, filter state, recent-creation dates/order, duplicate-entity rejection, HTTP/JSON/schema/reference failure recovery and responsive layouts.
- `node scripts/check-paper-metadata.cjs`: author/affiliation/date search, refresh, focus, rendering safety and bibliography mounting on all explainers.
- `node scripts/build-paper-metadata.cjs --check`: generated metadata remains semantically consistent with the preserved source records.
- All 15 explainer `check_page.py` static checks passed.
- `node scripts/check-explainers.cjs`: all 15 pages passed, with 2,527 interaction cases, bilingual/depth state, three widths and denied-storage fallback.
- `node --check assets/catalog.js` and `git diff --check` passed.

Representative desktop Chinese and mobile English homepages, MOF stability and MOF REE screenshots were visually inspected. No clipping or document overflow was observed. Local browser screenshots were saved under `/tmp/mof-taxonomy-navigation`, `/tmp/mof-taxonomy-catalog-final`, `/tmp/mof-taxonomy-metadata` and `/tmp/mof-taxonomy-explainers`; these transient paths are not site dependencies.

This is a classification/navigation migration. It does not claim a new audit of every paper’s scientific conclusions or external URL availability. Publication verification is performed separately against the final Pages build and live catalogue.
