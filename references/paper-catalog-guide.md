# Updating the paper catalogue

The homepage reads [`paper-catalog.json`](paper-catalog.json) and builds the six expandable menus automatically.

When a new explainer is ready:

1. Add its self-contained page at `papers/<slug>/index.html`.
2. Find the matching paper object in `references/paper-catalog.json`.
3. Set its `p` field to `./papers/<slug>/`.
4. Add `"./papers/<slug>/": "YYYY-MM-DD"` (the date it was published, in UTC) to the top-level `explainers` map. Explainers dated within the last seven days are listed in the homepage's recent-explainers section, newest first; the section hides itself when there are none.
5. Commit the change and wait for GitHub Pages to rebuild.

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
