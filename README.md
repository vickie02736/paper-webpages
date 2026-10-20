# Paper Webpages

Interactive, visual explanations of scientific papers and research concepts.

This repository collects the paper explainer webpages created by Kewei Zhu. Each paper lives in its own folder under [`papers/`](papers/), with supporting assets kept close to the page that uses them.

## Paper explainers

- [RAG — Retrieval-Augmented Generation for Knowledge-Intensive NLP Tasks](papers/rag/)
- [Self-RAG — Learning to Retrieve, Generate, and Critique through Self-Reflection](papers/self-rag/)
- [DeepRAG — Thinking to Retrieve Step by Step for Large Language Models](papers/deeprag/)

## Repository layout

```text
papers/
  <paper-slug>/
    index.html
    assets/
references/
  reading-roadmaps/
templates/
```

The explainers are designed as progressive, visual learning experiences: start with the central idea, then explore the mechanism, evidence, limitations, and broader connections.

## Search visibility

The repository is public so that the webpages can be shared and deployed. The accompanying `robots.txt` asks search engines not to crawl the deployed site, but public GitHub repositories and public URLs can still be discovered or indexed.
