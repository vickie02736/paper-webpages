# PPO formula lesson — 2026-11-03

## Baseline and scope

- Baseline: `main` at `c92a56c4c9ab3627f4a73a8c3518b30b4caf358a`; clean index and working tree. Work isolated on `codex/ppo-formula-lesson`.
- The original generator reproduced all tracked outputs without changes before editing. PPO static checks and the existing numerical checks passed.
- User requested a complete PPO explanation with clearer formulas and diagrams. This update retains all eight original section anchors, the original URL, valid scientific claims, catalogue entry and creation/publication dates.

## Findings and resolution

- P1, `#math` / Chinese and English, reproduced: the short formula summary left the reasoning between probability ratio, advantage, clipping, minimum and optimization implicit. Added symbol definitions, five connected steps, signed examples, empirical averaging, loss signs and a research-level chain-rule derivation. Sources: PPO v2 §§2–3, Eqs.1–7, Figure 1.
- P1, `#math`, reproduced: TD/GAE appeared without a worked trajectory or explicit terminal conditions. Added a three-step deterministic calculation, gamma/lambda controls, fixed-value assumptions, bootstrap distinction and explicit summation limits. Sources: PPO §5; GAE v6 §3 Eqs.16–18.
- P1, `#mechanism`, reproduced: two prose panels did not visualize the fixed batch, fixed old-policy anchor and outer sampling loop. Retained the panels and added five selectable stages with labelled data flow. Source: PPO Algorithm 1.
- P2, `#lab`, reproduced: the final curve alone did not show why the minimum was needed. Added raw/candidate/final curves on shared axes, clipping thresholds, intermediate arithmetic, signed presets and a zero-advantage case. Source: PPO Eq.7 and Figure 1.
- P2, original-source discrepancy, verified visually: PPO v2 p.5 Eqs.10–11 print the final exponent as `T−t+1`. The page explicitly states its consistent zero-based summation limits and cross-checks the powers against GAE v6 Eq.16. This is disclosed rather than silently changing a quoted equation.

## Implementation and evidence

- Editorial source: the PPO entry in `references/verl-explainers.json`; optional `lesson` blocks provide bilingual text, formulas, tables, reading levels and source locators.
- `scripts/build-verl-explainers.py` renders the lesson and evidence ledger. Other 14 verl explainers and the collection reproduce unchanged. The PPO README documents dedicated assets and acceptance checks.
- `assets/ppo-lesson.js` provides the calculation/visual modules; `assets/ppo-lesson.css` is scoped to PPO. Shared `assets/verl.js` delegates only for the enriched PPO payload. Its original PPO path remains available for cached old HTML; the enriched page versions the shared-runtime URL.
- Formula controls, selected stage, disclosures, keyboard focus and local chart/table scroll survive language changes. Charts use common calculated scales; their colors and dash patterns have a textual legend.
- Original figures were inspected but are not republished. PDF/source files and hashes are recorded in `papers/ppo/sources.md`, with the audit kept in the editorial source's `ledgerNotes`.
- Table 1 includes the original clipping values, a no-clipping baseline and all remaining KL rows in an expansion. Table 2 retains both metrics and the tie count. No error bars or new empirical results are invented.

## Validation

Run from the worktree with `PAPER_PLAYWRIGHT_MODULE` pointing to the existing Playwright installation and `PAPER_BASE_URL=http://127.0.0.1:8876/` for scripts requiring a server. Logs and screenshots are in `/tmp/ppo-lesson/`.

- Static: `check_page.py --all`, all 60 pages; JS syntax and `git diff --check`.
- Numerical: `check-ppo-lesson.cjs` covers positive/negative/zero advantage, both effective kinks, inactive boundaries, clip-width endpoints, the lower-bound property, GAE default values and lambda endpoints, and an independent discounted-return/bootstrap identity. Expected defaults: residuals `[0.05,0.04,0.4]`, advantages `[0.28616,0.328,0.4]`.
- Browser: PPO-specific checks cover 1440/768/390px, both languages and all three depths; signed cases, GAE controls, keyboard inputs, resets, stage state, disclosure state, focused inputs, chart/table focus and horizontal scroll, anchors and compatibility with the previous runtime payload shape.
- Regression: `check-verl.cjs` checks all 15 labs and collection/catalogue integration. Its keyboard selector now targets the lab's range rather than accidentally selecting a hidden advanced GAE control.
- Site regression: `check-explainers.cjs` covers all 60 explainers and 7,273 interaction cases; `check-reading.cjs` covers reading/anchor/keyboard behavior and section captures.
- Supplemental sweep: PPO has zero failures or hints across both languages and three widths. Taxonomy data and generated bibliography checks pass.
- Visual inspection: original PPO PDF pp.3,5,6,8 and GAE p.5; desktop positive/negative clipping curves, mobile signed explanations and GAE, and desktop/tablet/mobile flow and evidence sections. UI screenshots are distinct from scientific source checks.

## Limits and delivery

These controls evaluate formulas on declared teaching inputs. No model training or experimental reproduction was performed. Editorial review checks the explanations and learning questions; no human comprehension study or actual assistive-technology session was conducted.

Publish through the existing GitHub Pages `main`/root configuration. Content changes are committed before running the existing update-metadata script; existing creation/publication dates must remain unchanged. Final deployment status is verified against the published commit and live content.

## STAR opening revision — 2026-11-03

- Baseline: clean `037dad77f85cb403fda52aeb7713b08ff270d4f5`; the old opening passed static checks and rendered correctly, but introduced the abstract phrase “限制一次更新的诱惑” and several technical terms before explaining the research problem (P1, reproduced).
- Replaced the title and lead with the concrete problem of reusing experience while avoiding overly large policy changes. Added four bilingual STAR blocks before the retained foundations: policy-based trial and error, the reuse/change-size trade-off, a fixed-positive-advantage 20%→24%→30% clipping example, and scoped experimental outcomes without an improvement guarantee. The example distinguishes a 20% relative increase from 4 percentage points.
- Rechecked PPO v2 abstract, introduction, §§2–3, Algorithm 1 and §6 conclusions. The new source-ledger audit maps the added claims and teaching example to those locations. Original formulas, calculations, evidence, anchors and definitions remain intact.
- The generator now renders an optional introductory lesson area. All other 14 generated explainers remain byte-for-byte unchanged; the collection changes only its PPO search text and summary. Catalogue and README titles match the editorial source.
- The taxonomy check previously froze editorial titles/summaries while asserting collection identity preservation. It now compares those two fields against the current editorial source, retaining exact historical checks for all identities, placement, links and other collection fields. This permits reviewed wording updates without allowing a stale catalogue.
- Validation for this revision: all 60 pages pass static checks; PPO numerical/browser checks pass at three widths, two languages and three depths; all 15 verl labs and collection integration pass; catalogue regression, taxonomy data checks and bibliography freshness pass. Supplemental PPO sweep reports zero failures and zero hints. Targeted browser inspection verifies STAR order and saves 30 hero/STAR screenshots across three widths and both languages; representative desktop, tablet and phone captures were visually inspected. Logs and captures: `/tmp/ppo-star/`.
- No shared browser runtime or calculation logic changed. This revision uses the scoped PPO/verl/catalogue checks above; the prior full-site interaction and reading results remain recorded separately and are not presented as new runs.
