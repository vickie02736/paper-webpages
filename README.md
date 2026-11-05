# Paper Webpages

Interactive, visual explanations of scientific papers and research concepts.

**Open the homepage:** [Research Atlas](https://vickie02736.github.io/paper-webpages/) · [English version](https://vickie02736.github.io/paper-webpages/?lang=en)

This repository collects the paper explainer webpages and research maps created by Kewei Zhu. The explainers are static HTML pages with shared local styles and navigation, so they can be opened through GitHub Pages without ChatGPT sign-in. Each paper lives in its own folder under [`papers/`](papers/), while the primary catalogue is stored in [`references/paper-catalog.json`](references/paper-catalog.json), alongside the preserved research reading maps.

## Research around MOF + AI

Six primary themes organize 493 papers, with one primary record per paper:

- [Metal–Organic Frameworks / 金属有机框架](https://vickie02736.github.io/paper-webpages/?theme=mof): 96 papers. Includes separate **MOF Stability / MOF 稳定性** and **Rare-Earth Adsorption & Separation / 稀土吸附与分离** subcategories.
- [Artificial Intelligence & Computing / 人工智能与计算](https://vickie02736.github.io/paper-webpages/?theme=ai): 104 papers and 3 documentation articles.
- [General Chemistry & Materials / 通用化学与材料](https://vickie02736.github.io/paper-webpages/?theme=chemistry-materials): 73 papers.
- [Robotics & Lab Automation / 机器人与实验自动化](https://vickie02736.github.io/paper-webpages/?theme=robotics-lab): 72 papers.
- [Mathematics & Modelling Foundations / 数学与建模基础](https://vickie02736.github.io/paper-webpages/?theme=mathematics): 77 papers.
- [Life Sciences, Drug Discovery & Medicine / 生命科学、药物与医学](https://vickie02736.github.io/paper-webpages/?theme=life-medicine): 70 papers.

The homepage proceeds directly from its introduction to the six-theme catalogue. MOF retains five related methods/comparisons whose primary home is general chemistry and materials.

The library supports collecting ideas and developing research judgment. The existing [FreeMind reading collections](references/roadmaps/) retain their original explanatory context and filenames.

## Paper explainers

- [TRM — Trust Region Masking](papers/trm/) — arXiv v5, sequence masks and long-horizon error bounds.
- [Batch size-invariance for policy optimization](papers/batch-size-invariance/) — NeurIPS 2022, PPO-EWMA and batch scaling.

- [RAG — Retrieval-Augmented Generation for Knowledge-Intensive NLP Tasks](papers/rag/)
- [Self-RAG — Learning to Retrieve, Generate, and Critique through Self-Reflection](papers/self-rag/)
- [DeepRAG — Thinking to Retrieve Step by Step for Large Language Models](papers/deeprag/)

- [E5-Mistral — Improving Text Embeddings with Large Language Models](papers/e5-mistral/)

- [NV-Embed — Improved Techniques for Training LLMs as Generalist Embedding Models](papers/nv-embed/)

- [Ln local coordination — Lanthanides in Cr- and Zr-based MOFs](papers/ln-local-coordination/)

- [NCU-1 nanotraps — Rationally designed nanotrap structures for efficient separation of rare earth elements over a single step](papers/ncu1-nanotraps/)
- [PMIDA–MIL-101 — Rare-earth adsorption and ligand loading](papers/pmida-mil101/)
- [ATZ-BTC-Zn — Ion-exchange-assisted separation of adjacent rare earths](papers/atz-btc-zn/)
- [Hans-LanM dimer — Enhanced rare-earth separation with a metal-sensitive lanmodulin dimer](papers/hans-lanm-dimer/)
- [MOF SNAP — Quantum-accurate potentials with temperature-driven active learning](papers/mof-snap-active-learning/)

- [MOFTransformer — Multimodal pre-training for universal MOF transfer learning](papers/moftransformer/)

- [AI-SAM — AI-guided discovery of self-assembled monolayers for perovskite solar cells](papers/ai-sam-perovskite/)

- [CALF-20 — Gas adsorption and framework flexibility](papers/calf20-flexibility/)
- [LanM — Protein-based rare-earth recovery and separation](papers/lanm-protein-process/)


- [FrontierCS 2 — A Benchmark for Computer Science R&D](papers/frontier-cs/) — PDF-audited task/judge diagrams, complete 12-agent results, three case studies and 29 related efforts

## MOF stability and rare-earth expansion

28 additional bilingual explainers cover 12 stability papers and 16 rare-earth adsorption/separation papers. All final main articles and listed supplementary materials were read; evidence ledgers distinguish experimental reports, model results and teaching calculations.

- [Water stability review](papers/water-stability-review/)
- [Three axes of stability](papers/mof-stability-three-axes/)
- [Hydrolytic stability grading](papers/hydrolytic-stability-grading/)
- [Kinetic stability](papers/mof-kinetic-stability/)
- [UiO-66 in buffers](papers/uio66-buffer-stability/)
- [Water-stable MOF design](papers/water-stable-mof-design/)
- [Hydrolytic stability benchmark](papers/hydrolytic-stability-benchmark/)
- [Discovering water-stable MOFs](papers/water-stable-mof-discovery/)
- [Atomistic hydrolysis](papers/mof-hydrolysis-atomistic/)
- [Water’s dual impact](papers/water-dual-impact/)
- [UiO-66 dangling linkers](papers/uio66-dangling-linkers/)
- [MIL-100 water matrices](papers/mil100-water-matrices/)
- [Rethinking REE recovery](papers/ree-mof-critical-review/)
- [Targeted MOF adsorption](papers/ree-mof-targeted-review/)
- [MOF/COF selectivity](papers/ree-porous-framework-review/)
- [REE MOF protocol](papers/ree-mof-protocol/)
- [CMPO–MIL-101](papers/cmpo-mil101-ree/)
- [Functionalized Cr-MIL-101](papers/functionalized-cr-mil101/)
- [Acrylic MIL-101 and Sc](papers/acrylic-mil101-scandium/)
- [Dual-functional UiO-66 and Gd](papers/dual-functional-uio66-gd/)
- [UiO-66/ZIF-8 REE uptake](papers/uio66-zif8-ree/)
- [Organophosphorus MIL-101](papers/organophosphorus-mil101/)
- [DGA–MIL-101 and Eu](papers/dga-mil101-europium/)
- [MIL-101/SBA-15 and Lu/Y](papers/mil101-sba15-lu-y/)
- [DTPA–MIL-101 in ammonium](papers/dtpa-mil101-ammonium/)
- [HKUST-1 and Lu](papers/hkust1-lutetium/)
- [Defect/phosphate UiO-66 and Yb](papers/defect-phosphate-uio66-yb/)
- [Boroxine MOF and REEs](papers/boroxine-mof-ree/)

The 28 MOF/REE pages now include high-school prerequisites and cumulative Intuition, Mechanism and Research reading paths. Scientific evidence, teaching review and technical checks are recorded separately in the [quality rollout](reports/quality-rollout/README.md), including per-page reading tasks and deployment records. Human comprehension remains subject to reader feedback.

## Repository layout

```text
index.html
robots.txt
assets/
  paper.css
  paper.js
papers/
  <paper-slug>/
    index.html
    README.md
references/
  paper-catalog.json
  paper-catalog-guide.md
  roadmaps/
    *.mm
```

The explainers share the Research Atlas navy-and-cyan reading style, a two-row sticky header, accessible section navigation and reading progress. All 61 pages support complete Chinese/English switching, including interactive feedback, and remember the homepage's language preference. Ln local coordination, PMIDA–MIL-101 and CALF-20 also retain their parallel bilingual mode. Paper-specific diagrams, experiments and learning-depth options remain tailored to the subject.

Start with the central idea, then explore the mechanism, evidence, limitations, and broader connections. See the [explainer implementation guide](papers/README.md#shared-reading-system) for the common styles and language controller.

## Search visibility

The repository is public so that the webpages can be shared and deployed. The accompanying `robots.txt` and homepage `noindex` metadata ask search engines not to crawl or index the deployed site, but public GitHub repositories and public URLs can still be discovered or indexed.

The homepage reads `references/paper-catalog.json` to build primary themes and structured subcategories. The FreeMind maps are reading collections, rather than the canonical classification tree. When a new explainer is added, its `p` field can point to the local HTML page so the menu changes from “Webpage coming soon” to “Explainer”.

The homepage is bilingual. It opens in Chinese; the `EN` / `中文` button in the header switches languages, and the choice is remembered in the browser. Add `?lang=en` to a link to open the English version directly, and `?q=` to open it with a search already filled in (for example `?lang=en&q=protein+design`).

Select **Only papers with explainers / 仅显示已有讲解** beside the catalogue search to show papers with an available explainer. This filter combines with the global and theme searches, uses each paper’s single explainer link, and can be linked directly with `?explainers=1`.

With a search active, the explainer filter shows matching / total explainer counts; **Clear search / 清除搜索** clears global and theme queries while keeping the current filter setting. Published catalogue updates sync automatically while preserving searches, the filter, language and expanded sections; a failed refresh keeps the current results.

The **Explainers from the past week / 近一周的讲解页** section includes explainers first created within the last seven UTC calendar days, ordered by their precise creation time, including creations on the same day; updating an existing page does not return it to the list or move it to the top. Before publishing, run `node scripts/update-explainer-updates.cjs` after committing the explainer changes to initialise missing creation timestamps from Git history while preserving existing creation times and first-publication dates; see the [catalogue guide](references/paper-catalog-guide.md).

The homepage and all 58 paper explainers share expandable publication-time author/affiliation bylines and separate Published, Accepted and Preprint posted dates. Search includes full author lists, reliable Chinese/English institution names and acronyms. Metadata is maintained once per source URL in the catalogue; see the [schema and generation steps](references/paper-catalog-guide.md#authors-affiliations-and-paper-dates) and [unverified-information ledger](references/paper-metadata-audit.md).

## Classification and filters

Use the primary-theme selector and the expandable cross-disciplinary tags alongside global or within-theme search. Tags have separate object, method, task and application dimensions: selections within one dimension use OR; different dimensions use AND. For example, `?theme=mof&tag=application%3Aree` selects MOF rare-earth adsorption/separation, and `?tag=object%3Amof&tag=method%3Amlip` selects MOF interatomic potentials. `MLP`, `MLIP` and the old `AIRS` abbreviation are searchable aliases; the synthesis paper now displays its original abbreviation, AIRES.

A paper reference uses `?paper=<stable-id>` and opens the primary entry. Existing `?q=`, `?lang=`, `?explainers=1`, `#themes`, `#recent` and all explainer paths remain valid. Related readings show the primary theme and do not affect the 492-paper total. A migration ledger preserves all 463 old listings: [`taxonomy-migration.json`](references/taxonomy-migration.json).

Run `node scripts/check-taxonomy.cjs --data-only` for migration and schema checks. Browser checks are described in the [catalogue guide](references/paper-catalog-guide.md).

## verl algorithm explainers

[Read the verl articles in Artificial Intelligence & Computing](?theme=ai&q=verl#themes). The theme lists each paper and documentation article directly, with bilingual content, teaching interactions and evidence ledgers.

- [PPO: why can reusing a batch lead to overly large policy updates?](papers/ppo/) — paper
- [GRPO: answers to one question provide a baseline](papers/grpo/) — paper
- [DAPO: keeping long-reasoning training productive](papers/dapo/) — paper
- [SPIN: turn the previous model into an opponent](papers/spin/) — paper
- [SPPO: preferences can form cycles](papers/sppo/) — paper
- [Entropy mechanisms: why exploration runs out early](papers/entropy-mechanism/) — paper
- [OPO: how should a baseline be weighted?](papers/opo/) — paper
- [Reading baselines: align conditions before comparing](papers/verl-algorithm-baselines/) — documentation
- [GPG: reconsider the weights in policy gradients](papers/gpg/) — paper
- [Rollout correction: who actually generated the data?](papers/rollout-correction/) — documentation
- [The mathematics: change of measure and long-sequence variance](papers/rollout-correction-math/) — documentation
- [OTB: a baseline that changes across tokens](papers/otb/) — paper
- [DPPO: from probability ratios to divergence](papers/dppo/) — paper
- [On-policy distillation: teach along the student’s path](papers/on-policy-distillation/) — paper
- [DRO: alignment from single-response feedback](papers/direct-reward-optimization/) — paper
