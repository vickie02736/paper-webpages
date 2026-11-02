# AI theme placement correction

User-requested navigation correction, 2026-11-02, based on published commit `fe5e64526d166f9dc6beae99fa9a1cf4227b3753`.

All verl articles now appear directly in **Artificial Intelligence & Computing**, under Training & Adaptation. SPIN, SPPO and DRO use Preference Optimization; GKD/OPD uses Knowledge Distillation; the remaining papers and three documentation articles use Reinforcement Learning & Language Model Post-training. Searching `verl`, globally or within AI, finds the 12 paper entries and 3 documentation entries without opening an intermediate collection. The `verl` query matches a whole token, so words containing those letters do not introduce unrelated articles.

DeepSeekMath moves from Mathematics to AI; its paper ID, title, source, metadata, explainer URL and legacy context remain unchanged. Mathematics retains a related-reading reference. The precise classification delta is inventoried in [verl-theme-placement.json](verl-theme-placement.json); the original migration and addition audit files are preserved.

Documentation uses the same row layout, theme/category disclosure, bilingual search and explainer links, while retaining its document label and separate count. It has no fabricated paper or bibliography record. Paper counts remain 490 globally; AI now has 102 papers plus 3 documentation articles, and Mathematics has 77 papers. There remain 55 paper explainers and 3 documentation explainers.

The collection metadata now requests direct theme presentation. Its original URL remains reachable, with article wording and a link to AI. Homepage collection-only promotion and “15 independent explainers” wording have been removed; all 15 page headers link back to the AI theme. Existing dates and creation timestamps are preserved.

## Verification

- All 58 page static checks pass, with the three document topics checked using `--page-only`.
- Full explainer regression passes: 58 pages, 6,921 interaction cases.
- Catalogue regression passes search and counts, 20-to-55 refresh, bilingual state and focus, creation-date ordering, failure recovery and three viewport widths. Document counts are asserted separately from paper totals.
- Taxonomy regression passes the preserved 451-record / 463-context baseline, subsequent additions, explicit DeepSeekMath relocation and all navigation checks.
- Bibliography generation and regression pass; metadata values remain unchanged, and generated ordering follows the new primary theme.
- verl-specific checks verify all 15 direct AI links, 12 paper plus 3 document search results at 1440/768/390 px in both languages, documentation-only search, language and explainer-filter state, and absence of collection-only promotion. All existing lab and recent-list checks pass.
- No scientific claims, formulas, evidence or lab calculations changed. Prior scientific verification remains recorded in [verl-validation.md](verl-validation.md).

Screenshots were saved and opened for inspection: [AI theme, desktop Chinese](verl-qa/ai-theme-desktop-zh.png), [documentation row, mobile Chinese](verl-qa/ai-document-mobile-zh.png). Full AI-theme screenshots in both languages at all three widths were also captured during the browser checks.

Publication uses the existing Pages branch, content commit followed by generated update timestamps. Final online acceptance checks the AI theme, the unqualified `?q=verl` search, all article links and their AI return navigation, and exact deployed resources.
