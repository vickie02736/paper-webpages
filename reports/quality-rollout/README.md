# High-school teaching quality rollout

The authorized scope is the three existing pilots followed by 25 further MOF/REE explainers in five batches. The original working checkout is preserved; release work uses a separate checkout based on origin/main. All original article URLs, creation dates and publication dates are retained.

`progress.json` tracks the 25 pages. `baseline-hashes.json` records starting file hashes. Each batch will add its before-audit, source evidence, reading tasks and three separate validation results. Human comprehension remains untested until reader feedback.

## Initial three pilots

Scientific verification and teaching reviews are in the four linked report directories: [UiO-66](../uio66-buffer-quality-pilot/review-after.md), [ML transfer](../discovery-quality-transfer/review.md), [real structures / high-school prerequisites](../discovery-high-school/review.md), and [review transfer](../standards-high-school-transfer/review.md).

Release checks: all 43 full static page checks; full 43-page browser regression (3,993 actions); high-school structure checks (108 actions); review-transfer checks (324 actions). Catalogue and publication metadata checks are rerun in the release checkout with the existing Playwright installation. The initial missing Playwright-module error in two check commands was an environment lookup issue, not a page failure; the commands were rerun with the configured module path.

Deployments target the existing GitHub Pages source, main branch, repository root. Content is committed before generating update timestamps. A release is confirmed only when Pages reports the corresponding commit and the online content/assets match.

- Batch 1: [before audit](batch-1-before.md), [science / teaching / technical review](batch-1-review.md), [browser checks](batch-1-technical.json).

- Batch 2: [before audit](batch-2-before.md), [science / teaching / technical review](batch-2-review.md), [browser checks](batch-2-technical.json).

- Batch 3: [before audit](batch-3-before.md), [science / teaching / technical review](batch-3-review.md), [browser checks](batch-3-technical.json).

- Batch 4: [before audit](batch-4-before.md), [science / teaching / technical review](batch-4-review.md), [browser checks](batch-4-technical.json).

- Batch 5: [before audit](batch-5-before.md), [science / teaching / technical review](batch-5-review.md), [browser checks](batch-5-technical.json).
