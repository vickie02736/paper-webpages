# Updating the paper catalogue

The homepage reads `paper-catalog.json` (schema `v: 2`). The catalogue has six primary themes and 490 unique paper records. Each record occurs in exactly one `themes[].p`; related methods and reading routes reference its immutable `id`. Primary theme counts sum to the global paper total. Route and related-reading references never increase it.

## Primary classification

The navigation order is MOF, AI, general chemistry/materials, robotics/lab automation, mathematics/modelling foundations, and life sciences/drug discovery/medicine. `theme.id` is stable; `n` is an identical compatibility key. Display names, roles and descriptions use `{zh,en}`. The homepage creates its theme shells from these definitions rather than hard-coded labels.

MOF-specific models, simulations and experiments belong to `mof`. Cross-material interatomic potentials and representations belong to `chemistry-materials`; general algorithms to `ai`; general experimental execution platforms to `robotics-lab`; mathematical analyses to `mathematics`. The combined `life-medicine` theme retains distinct biological, drug and medical tasks. Editorial boundary decisions and all original entries are recorded in `taxonomy-migration.json`.

Inside MOF, **MOF Stability / MOF 稳定性** is separate from machine-learning potentials and molecular simulation. **Rare-Earth Adsorption & Separation / 稀土吸附与分离** contains MOF coordination-site, adsorption-mechanism and selective-separation work. LanM proteins remain non-MOF comparisons in general chemistry/materials and are reachable through MOF’s related readings.

Each `theme.groups[]` has an immutable `id` and `categoryId`, with bilingual `category` and `topic` objects. Each paper has `topicId` plus a compatibility index `g`. `theme.g` and `theme.ge` are generated compatibility labels in the same order; update them with structured groups. The renderer uses structured labels, so slashes inside names cannot split a category incorrectly. Keep IDs unchanged when changing display names or moving array positions.

## Paper identity, tags and references

Keep each paper’s `id` unchanged. The initial IDs were minted from exact source URLs; do not regenerate them after a source-link or title correction. Search source URL, DOI and preprint aliases before adding a paper. A newly discovered version of the same work should extend the existing record’s aliases, not become another primary record. `u` remains the authoritative source link and the bibliographic metadata key.

`aliases` preserves old names and taxonomy labels for search. `legacyContexts` retains each original theme, bilingual group label and perspective-specific introduction; it is searchable. The migration ledger maps every original occurrence to one paper and primary category. New material does not require invented legacy contexts; use an empty array when there is no prior record.

`tagIds` refers to `taxonomyTags`: object, method, task and application are separate dimensions, each with a bilingual name. Assign tags only when supported by the paper. The UI combines same-dimension choices with OR and different dimensions with AND. Publication metadata tags in the older top-level `tags` translation map are independent of these research tags. Spell out machine-learning interatomic potentials and retain MLP/MLIP aliases; do not confuse that meaning with multilayer perceptrons.

`relatedPaperIds` lists references whose primary home is another theme. `researchRoutes[]` retains three curated reference collections with bilingual questions, stages, notes and `paperIds`; they are not rendered on the homepage. Related-paper links display the primary theme and open the unique entry. A reference does not claim that a method has already been validated in a different domain.

## Search and state

Search includes both languages, theme/category names, tags, old context, aliases, authors, affiliations and dates. Supported query parameters are `q`, `lang`, `explainers=1`, `theme=<id>`, repeated `tag=<id>` and `paper=<id>`. A direct paper link isolates one record; changing the global search or clearing filters releases it. Preserve other URL parameters and anchors. Language defaults to Chinese and uses the existing `atlas-lang` preference.

The catalogue refreshes on load, focus, foreground return, explainer-filter change, and every 60 seconds while visible. A malformed schema, duplicate primary identity or broken route reference must retain the last working catalogue. Stable IDs preserve category expansion across translation and metadata refreshes. Related readings do not inflate search or theme counts.

## Publication dates and explainers

When a new explainer is ready:

1. Add its self-contained page at `papers/<slug>/index.html`.
2. Find the matching paper object in `references/paper-catalog.json`.
3. Set its `p` field to `./papers/<slug>/`.
4. Add `"./papers/<slug>/": "YYYY-MM-DD"` (the date it was first published, in UTC) to the top-level `explainers` map. Keep this first-publication date unchanged when updating an existing explainer.
5. Commit the explainer content and its catalogue entry, then run `node scripts/update-explainer-updates.cjs` from the repository root.
6. Check the generated catalogue and the homepage, commit the catalogue update, then push both commits and wait for GitHub Pages to rebuild.

The homepage's recent-explainers section shows explainers first created within the last seven UTC calendar days, newest creation first. Creations on the same day are ordered by their precise timestamps; the section hides itself when there are none. Updating an existing page does not reset this window or move the page to the top. The top-level `explainerCreatedAt` map holds immutable UTC ISO creation timestamps separately from the first-publication dates in `explainers`.

The script preserves existing valid `explainerCreatedAt` values. For a missing value, it finds the earliest addition of `papers/<slug>/index.html` with Git's `--follow --diff-filter=A` history and uses that precise time only if its UTC date matches the first-publication date; missing history or a different UTC date falls back to midnight UTC on the original first-publication date. Invalid paths, first-publication dates, or existing creation timestamps stop generation with an error; creation timestamps must fall on their corresponding first-publication UTC date.

For later updates, commit the explainer changes first, run `node scripts/update-explainer-updates.cjs`, check and commit the generated catalogue, then push. The script also continues to generate `explainerUpdates` from each `papers/<slug>/` directory's latest Git commit, including its local resources, for compatibility with the publication workflow; those update timestamps do not determine the homepage's recent list. Update times without Git history fall back to the first-publication date at midnight UTC, and earlier commit times are clamped to that date. Uncommitted edits are not included, so run the script after committing the page content; existing creation times and first-publication dates stay unchanged.

## Chinese and English

Each paper retains `s`, `se` where needed, `t`, `m`, `d` and `e`. Every new theme, category, topic, tag and route requires complete `zh` and `en` labels. The old `tags` and `venues` maps translate publication metadata. Keep the source title and exact original URL. Set `p` on the one primary paper record; references reuse it automatically.

## Checks

- `node scripts/check-taxonomy.cjs --data-only`: all original identities, contexts, counts, metadata, paths and structured references.
- `node scripts/check-catalog.cjs`: automatic refresh, combined search, failure recovery, immutable creation ordering, language and responsive layouts.
- `node scripts/check-taxonomy.cjs`: the data checks plus MOF stability/REE, typed tags, aliases, direct-paper/reference links and responsive screenshots. Serve the repository locally and set `PAPER_BASE_URL` (default `http://127.0.0.1:8768/`).
- `node scripts/build-paper-metadata.cjs --check` and `node scripts/check-paper-metadata.cjs`: preserve bibliographic records and author/affiliation/date searches.

Browser checks accept `PAPER_PLAYWRIGHT_MODULE`, `PAPER_CHROMIUM_EXECUTABLE`, `PAPER_BASE_URL` where supported, and `PAPER_QA_DIR`. The taxonomy migration baseline is immutable; a future intentional collection-size change must update the count contract together with an explicit inventory audit, not simply weaken the preservation checks.

## Authors, affiliations and paper dates

The top-level `paperMetadata` map uses the exact existing paper source URL (`u`) as its key. Cross-theme listings reuse one record; `p`, `explainers`, `explainerCreatedAt` and `explainerUpdates` continue to describe the explainer, separately from the paper's dates. Recent-explainer ordering is unchanged.

Each record contains:

- `authors`: ordered `{name, affiliations: [id], aliases?, equalContribution?, corresponding?}` entries. Keep the names and order printed in the cited paper version. Set contribution/correspondence flags only when explicit. An empty affiliation list means that person's mapping is unverified; do not infer it from an email domain, present-day profile or author order.
- `affiliations`: `{id, name, zh?, aliases?}` entries with the publication-time byline wording. Keep present addresses separate from byline affiliations. `zh` is an optional reliable translation of the **whole** affiliation; `aliases` may include reliable institution names in Chinese/English and common acronyms. Aliases affect search, not the displayed byline. Avoid ambiguous city-only aliases (Cambridge, MA is not the University of Cambridge).
- `dates.published` and `dates.accepted`, plus `dates.preprint` when a preprint's initial deposit is verified: `{status, value?, source?}`. Status is `verified`, `notDisclosed`, `unverified` or `notApplicable`. A verified value is exactly `YYYY`, `YYYY-MM` or `YYYY-MM-DD`, preserving source precision. Do not pad unknown months/days. Never substitute a conference's notification date, event date or issue year for an individual acceptance date.
- `sources`: `{url, fields, locator}` evidence records. Use the original publisher/proceedings/manuscript, or its archived copy; a publisher-deposited Crossref/PubMed record is identified as such. Record the relevant author block, numbered affiliations, publication history or explicit online-publication field. Retain version numbers for preprints. `checkedAt` is the metadata verification date; `notes` records access limitations, unresolved fields and any manually reviewed chronology exception.

Formal publication uses the first online date, not the print/issue date. Keep the existing citation's issue year when different. A proceedings statement disclosing only the publication year retains year precision. The arXiv v1 submission date is **Preprint posted**, separately from revisions, formal publication and acceptance. `notDisclosed` means the inspected official record does not disclose the date; `unverified` means available evidence has not established it. Missing dates are visible, not guessed.

Both global and theme searches index every author's name/aliases and every affiliation's original name, reliable Chinese name and aliases, including folded content. They retain the existing case/diacritic normalization and all-keyword matching and combine with the explainer filter.

After editing metadata, run:

```bash
node scripts/build-paper-metadata.cjs
node scripts/build-paper-metadata.cjs --check
node scripts/check-paper-metadata.cjs
```

The generator validates coverage, source links, affiliation references, date precision and chronology. It writes the offline 55-paper-page subset to `assets/paper-metadata.js` and the current missing-information ledger to [`paper-metadata-audit.md`](paper-metadata-audit.md). Commit both generated files with the catalogue. Do not hand-edit the subset. Also run the existing catalogue and explainer regressions when publishing.

Pages load `bibliography.css`, `bibliography.js` and the generated `paper-metadata.js` before `paper.js`. The shared controller mounts one byline under the title and remounts it after dynamic body rebuilds. Native details, stable paper keys and captured state preserve expansion/focus during language changes, depth changes and catalogue refresh. A short summary shows the first author and first mapped affiliation, with additional affiliations available in the complete list.

## Explainer collections

Optional `collections` records provide navigation without adding papers. Each collection has `id`, `themeId`, local `path`, bilingual `title` and `summary`, and `items`. Items contain stable `id`, explainer `path`, `type` (`paper` or `document`), bilingual `title` and `summary`, and original `source`. Paper items additionally reference an existing `paperId` whose explainer path matches. Documentation items never have a paper ID or bibliography record.

The verl collection includes 12 paper pages and 3 documentation pages. Its navigation page is not another explainer. The paper-only filter counts 55 linked papers; the publication maps contain 58 independent explainers. Recent explainers resolve documentation through collections and remain unique by path. Collections carry language into internal links and appear in their primary theme. Malformed collection data retains the last valid catalogue.

`reports/verl-catalog-additions.json` inventories 11 new papers, the sole allowed DeepSeekMath link change, and the 3 document pages against the immutable pre-verl commit. The older taxonomy and MOF audits remain in force.
