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
| LanM fixed-bed separation — Bridging Hydrometallurgy and Biochemistry | ACS Central Science 2021 | [Open page](lanm-protein-process/) |

Opening these pages does not require ChatGPT sign-in. Each supports Chinese and English, including diagrams and interactive feedback. Ln local coordination and PMIDA–MIL-101 also offer parallel bilingual reading.

## Shared reading system

Pages load [`../assets/paper.css`](../assets/paper.css) after their local styles and [`../assets/paper.js`](../assets/paper.js) before their page script. Keep `class="atlas-paper"` and `data-paper="<slug>"` on the body. The shared stylesheet owns the navy/cyan palette, 1180px content width, typography, common controls and responsive header. Local CSS owns each paper's diagrams and layouts; scope SVG rules to their diagram containers.

Call `AtlasPaper.init({shortTitle, title: {zh, en}, sections: [{id, zh, en}], depth, legacyHeader, allowBoth, onLanguageChange})` at the end of the page script. It moves the optional existing depth control into the shared header, removes the legacy header, builds section navigation and progress, and invokes `onLanguageChange(lang)` synchronously at initialization and on every switch. The returned controller exposes `lang`, `setLanguage(lang)` and `refresh()`.

The controller resolves a supported `?lang=` value, then `atlas-lang`, then Chinese. It updates the URL without losing other parameters or the fragment, handles unavailable storage, and carries the selected language into links to the atlas and other explainers. Only `zh` and `en` persist in storage; `both` remains available on pages with `allowBoth: true`.

Keep translations explicit and render dynamic feedback from the current experiment state. A language switch must preserve sliders, selected charts and steps, answers, expanded details, focus and scroll position. Formal paper titles, identifiers, units and original figure images may retain their original language. No framework, build step or runtime CDN is required.

For validation, run the paper-webpage static checker for every changed slug, then serve the repository over HTTP and check Chinese/English interactions at desktop, tablet and phone widths. The browser regression script in [`../scripts/check-explainers.cjs`](../scripts/check-explainers.cjs) uses Playwright supplied by the execution environment; it does not add a runtime dependency to the site.
