# Paper explainers

Each explainer is a static visual webpage using the shared Research Atlas reading system. The current collection includes:

| Paper | Venue | Page |
|---|---|---|
| RAG — Retrieval-Augmented Generation for Knowledge-Intensive NLP Tasks | NeurIPS 2020 | [Open page](rag/) |
| Self-RAG — Learning to Retrieve, Generate, and Critique through Self-Reflection | ICLR 2024 | [Open page](self-rag/) |
| DeepRAG — Thinking to Retrieve Step by Step for Large Language Models | ICLR 2026 | [Open page](deeprag/) |
| E5-Mistral — Improving Text Embeddings with Large Language Models | ACL 2024 | [Open page](e5-mistral/) |
| NV-Embed — Improved Techniques for Training LLMs as Generalist Embedding Models | ICLR 2025 | [Open page](nv-embed/) |
| Ln local coordination — Lanthanides in Cr- and Zr-based MOFs | ACS AMI 2024 | [Open page](ln-local-coordination/) |
| NCU-1 nanotraps — Rationally designed nanotrap structures for efficient separation of rare earth elements over a single step | Nature Communications 2024 | [Open page](ncu1-nanotraps/) |
| PMIDA–MIL-101 — Rare-earth adsorption and ligand loading | ACS AMI 2026 | [Open page](pmida-mil101/) |
| ATZ-BTC-Zn — Ion-exchange-assisted separation of adjacent rare earths | Advanced Functional Materials 2025 (online 2024) | [Open page](atz-btc-zn/) |
| Hans-LanM dimer — Enhanced rare-earth separation with a metal-sensitive lanmodulin dimer | Nature 2023 | [Open page](hans-lanm-dimer/) |
| MOFTransformer — A multi-modal pre-training transformer for universal transfer learning in metal–organic frameworks | Nature Machine Intelligence 2023 | [Open page](moftransformer/) |
| MOF SNAP — Quantum-accurate potentials with temperature-driven active learning | npj Computational Materials 2024 | [Open page](mof-snap-active-learning/) |

| CALF-20 — Gas adsorption and framework flexibility | Nature Communications 2024 | [Open page](calf20-flexibility/) |
| LanM — Protein-based rare-earth recovery and separation | ACS Central Science 2021 | [Open page](lanm-protein-process/) |

Opening these pages does not require ChatGPT sign-in. Each supports Chinese and English, including diagrams and interactive feedback. Ln local coordination and PMIDA–MIL-101 also offer parallel bilingual reading.


- [FrontierCS 2 — A Benchmark for Computer Science R&D](frontier-cs/) — arXiv 2026; PDF-audited bilingual guide with all 48 tasks, judge isolation, complete 12-agent results, three case studies, FCI/FDI and 29 related works.

## MOF stability and REE explainers

- [Water stability review](water-stability-review/) — Chemical Reviews 2014
- [Three axes of stability](mof-stability-three-axes/) — Nature Reviews Materials 2016
- [Hydrolytic stability grading](hydrolytic-stability-grading/) — Dalton Transactions 2016
- [Kinetic stability](mof-kinetic-stability/) — Nature Reviews Materials 2019
- [UiO-66 in buffers](uio66-buffer-stability/) — Inorganic Chemistry Frontiers 2021
- [Water-stable MOF design](water-stable-mof-design/) — Chemical Science 2024
- [Hydrolytic stability benchmark](hydrolytic-stability-benchmark/) — Chemistry of Materials 2025
- [Discovering water-stable MOFs](water-stable-mof-discovery/) — ACS Applied Materials & Interfaces 2025
- [Atomistic hydrolysis](mof-hydrolysis-atomistic/) — Chemical Physics Letters 2025
- [Water’s dual impact](water-dual-impact/) — Physical Chemistry Chemical Physics 2026
- [UiO-66 dangling linkers](uio66-dangling-linkers/) — Nature Communications 2026
- [MIL-100 water matrices](mil100-water-matrices/) — Environmental Technology & Innovation 2026
- [Rethinking REE recovery](ree-mof-critical-review/) — Coordination Chemistry Reviews 2026
- [Targeted MOF adsorption](ree-mof-targeted-review/) — Chemical Engineering Journal 2026
- [MOF/COF selectivity](ree-porous-framework-review/) — Separation and Purification Technology 2026
- [REE MOF protocol](ree-mof-protocol/) — Nature Protocols 2026
- [CMPO–MIL-101](cmpo-mil101-ree/) — Journal of Materials Science 2016
- [Functionalized Cr-MIL-101](functionalized-cr-mil101/) — ACS Applied Materials & Interfaces 2018
- [Acrylic MIL-101 and Sc](acrylic-mil101-scandium/) — ACS Applied Materials & Interfaces 2019
- [Dual-functional UiO-66 and Gd](dual-functional-uio66-gd/) — Industrial & Engineering Chemistry Research 2019
- [UiO-66/ZIF-8 REE uptake](uio66-zif8-ree/) — Chemical Engineering Journal 2020
- [Organophosphorus MIL-101](organophosphorus-mil101/) — Microporous and Mesoporous Materials 2021
- [DGA–MIL-101 and Eu](dga-mil101-europium/) — Minerals Engineering 2021
- [MIL-101/SBA-15 and Lu/Y](mil101-sba15-lu-y/) — Chemosphere 2021
- [DTPA–MIL-101 in ammonium](dtpa-mil101-ammonium/) — Environmental Research 2024
- [HKUST-1 and Lu](hkust1-lutetium/) — Annals of the New York Academy of Sciences 2025
- [Defect/phosphate UiO-66 and Yb](defect-phosphate-uio66-yb/) — Chemical Engineering Science 2026
- [Boroxine MOF and REEs](boroxine-mof-ree/) — Chemical Engineering Journal 2026

## Shared reading system

Pages load [`../assets/paper.css`](../assets/paper.css) after their local styles and [`../assets/paper.js`](../assets/paper.js) before their page script. Keep `class="atlas-paper"` and `data-paper="<slug>"` on the body. The shared stylesheet owns the navy/cyan palette, 1180px content width, typography, common controls and responsive header. Local CSS owns each paper's diagrams and layouts; scope SVG rules to their diagram containers.

Call `AtlasPaper.init({shortTitle, title: {zh, en}, sections: [{id, zh, en}], depth, legacyHeader, allowBoth, onLanguageChange})` at the end of the page script. It moves the optional existing depth control into the shared header, removes the legacy header, builds section navigation and progress, and invokes `onLanguageChange(lang)` synchronously at initialization and on every switch. The returned controller exposes `lang`, `setLanguage(lang)` and `refresh()`.

The controller resolves a supported `?lang=` value, then `atlas-lang`, then Chinese. It updates the URL without losing other parameters or the fragment, handles unavailable storage, and carries the selected language into links to the atlas and other explainers. Only `zh` and `en` persist in storage; `both` remains available on pages with `allowBoth: true`.

Keep translations explicit and render dynamic feedback from the current experiment state. A language switch must preserve sliders, selected charts and steps, answers, expanded details, focus and scroll position. Formal paper titles, identifiers, units and original figure images may retain their original language. No framework, build step or runtime CDN is required.

For validation, run the paper-webpage static checker for every changed slug, then serve the repository over HTTP and check Chinese/English interactions at desktop, tablet and phone widths. The browser regression script in [`../scripts/check-explainers.cjs`](../scripts/check-explainers.cjs) uses Playwright supplied by the execution environment; it does not add a runtime dependency to the site.

## Shared paper bibliography

Every explainer loads `../assets/bibliography.css`, `bibliography.js` and generated `paper-metadata.js` (adjusted to its directory depth). `paper.js` mounts the shared byline below the title and supports language/depth rebuilds. The local metadata subset is generated from the homepage catalogue, so paper dates and author affiliations agree across both views. Follow the [catalogue metadata guide](../references/paper-catalog-guide.md#authors-affiliations-and-paper-dates); unresolved fields are recorded in the [gap ledger](../references/paper-metadata-audit.md).
