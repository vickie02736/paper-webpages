# Paper Webpages

Interactive, visual explanations of scientific papers and research concepts.

**Homepage:** [Research Atlas](index.html)

This repository collects the paper explainer webpages and research maps created by Kewei Zhu. The explainers are stored directly in the repository as self-contained HTML pages, so they can be opened through GitHub Pages without ChatGPT sign-in. Each paper lives in its own folder under [`papers/`](papers/), while the six research themes are stored under [`references/roadmaps/`](references/roadmaps/).

## Six research themes

- [AI Top Conferences — A Framework Research Map](references/roadmaps/ai-top-conference-map.mm)
- [Metal–Organic Frameworks — Recent Progress Map](references/roadmaps/mof-recent-progress-map.mm)
- [Robotics — Recent Progress Map](references/roadmaps/robotics-recent-progress-map.mm)
- [AI for Chemistry / Materials — Machine Learning for Chemistry and Materials Map](references/roadmaps/ai-chemistry-materials-map.mm)
- [AI for Life Sciences — Drug Discovery, Biology and Medicine Map](references/roadmaps/ai-life-sciences-map.mm)
- [Mathematics — AI for Math, Math for AI and Pure Mathematics Map](references/roadmaps/mathematics-map.mm)

## Paper explainers

- [RAG — Retrieval-Augmented Generation for Knowledge-Intensive NLP Tasks](papers/rag/)
- [Self-RAG — Learning to Retrieve, Generate, and Critique through Self-Reflection](papers/self-rag/)
- [DeepRAG — Thinking to Retrieve Step by Step for Large Language Models](papers/deeprag/)

- [NV-Embed — Improved Techniques for Training LLMs as Generalist Embedding Models](papers/nv-embed/)

## Repository layout

```text
index.html
robots.txt
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

The explainers are designed as progressive, visual learning experiences: start with the central idea, then explore the mechanism, evidence, limitations, and broader connections.

## Search visibility

The repository is public so that the webpages can be shared and deployed. The accompanying `robots.txt` and homepage `noindex` metadata ask search engines not to crawl or index the deployed site, but public GitHub repositories and public URLs can still be discovered or indexed.

The homepage reads `references/paper-catalog.json` to build expandable paper menus from the six FreeMind roadmaps. When a new explainer is added, its `page` field can point to the local HTML page so the menu changes from “Webpage coming soon” to “Explainer”.
