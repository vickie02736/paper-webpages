# Updating the paper catalogue

The homepage reads [`paper-catalog.json`](paper-catalog.json) and builds the three expandable menus automatically.

When a new explainer is ready:

1. Add its self-contained page at `papers/<slug>/index.html`.
2. Find the matching paper object in `references/paper-catalog.json`.
3. Set its `p` field to `./papers/<slug>/`.
4. Commit the change and wait for GitHub Pages to rebuild.

Leave `p` empty for papers that have an indexed source but no explainer page yet. The homepage will show `Webpage coming soon` and keep the original-paper link visible.
