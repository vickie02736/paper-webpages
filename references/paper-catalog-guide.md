# Updating the paper catalogue

The homepage reads [`paper-catalog.json`](paper-catalog.json) and builds the six expandable menus automatically.

The default count separates available explainers, unique papers (deduplicated across themes by their source link), and total theme listings. A paper listed in two themes contributes one unique paper and two listings; the theme counts add up to the listing total.

It fetches the published catalogue with cache-bypassing requests on initial load, when the explainer filter is toggled, when the page returns to the foreground or the window regains focus, and every 60 seconds while in the foreground. This synchronizes published catalogue data without scanning page directories: new explainers still need a `p` entry and the publication workflow below.

Run `node scripts/check-catalog.cjs` with Playwright available to check automatic refresh, filter counts, state preservation and failure recovery. It accepts the same `PAPER_PLAYWRIGHT_MODULE`, `PAPER_CHROMIUM_EXECUTABLE`, `PAPER_BASE_URL` and `PAPER_QA_DIR` overrides as the explainer browser checks.

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

Within a theme, each paper appears once, under its topic in the roadmap's main categories. The "reading route" branches at the end of each roadmap only re-reference those papers, so they are not added to the catalogue.

A paper may also be listed in more than one theme. Use exactly the same `u` link in every theme so the homepage recognises it as the same paper, and write each `d` and `e` introduction from the perspective of its own theme. The homepage then shows "也收录于 / Also listed in" with the other theme and branch, counts the paper once in the overall total, and reuses an explainer: setting `p` in any one theme is enough for every listing to show it.

Leave `p` empty for papers that have an indexed source but no explainer page yet. The homepage will show "讲解页制作中 / Webpage coming soon" and keep the original-paper link visible.

## Chinese and English

The homepage shows Chinese by default and switches to English with the language button. Every entry therefore carries both languages:

| Field | Chinese | English |
|---|---|---|
| Paper introduction | `d` | `e` |
| Short name | `s` | `se`, only when `s` contains Chinese |
| Group label (`Category｜Question / Topic`) | theme `g` | theme `ge`, same order and format as `g` |
| Tag after " · " in `m` | as written | top-level `tags` map, keyed by the full text after the first " · " |
| Venue before " · " in `m` | as written | top-level `venues` map, only for venues written in Chinese |

When adding a paper, fill in `e` (and `se` if needed); when using a new tag or adding a subtopic, add the matching entry to `tags` or `ge`. Anything missing falls back to the Chinese text in English mode.
