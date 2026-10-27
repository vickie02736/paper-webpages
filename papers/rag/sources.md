# RAG visual evidence ledger

Checked 2026-10-27 against the [published NeurIPS 2020 paper](https://proceedings.neurips.cc/paper/2020/file/6b493230205f780e1bc26945df7481e5-Paper.pdf), Lewis et al., *Retrieval-Augmented Generation for Knowledge-Intensive NLP Tasks*. Page references below use the PDF's printed page numbers. Original PDF pages 2, 6, 7 and 8 were rendered and visually inspected; text extraction alone was not used to interpret the multirow table headers.

## Diagram and interaction inventory

| Page module / states | Original evidence | Result and boundary |
|---|---|---|
| Hero: parametric plus non-parametric memory | Figure 1, p. 2; §§2.2–2.4, pp. 3–4 | A simplified conceptual redraw, now labeled as such. BART is parametric memory; the retrieved text/document index is non-parametric memory. No architectural measurements are implied. |
| Intuition cards and the three-route landscape | Introduction, pp. 1–2; §5, p. 9 | Pedagogical comparison, not an empirical figure or exhaustive history. Contribution labels are explainer synthesis. |
| Method flow: four selectable nodes and four steps | Figure 1, p. 2; §§2.1–2.4, pp. 3–4; §3, p. 4 | Corrected the ambiguous parallel-arrow layout to an explicit query → MIPS/document index → conditional generation → marginalization path. BART also receives x and its generated prefix. Query encoder and BART are fine-tuned; document encoder/index remain fixed. 21M non-overlapping 100-word chunks and BART-large's 400M parameters match the paper. |
| RAG-Sequence / RAG-Token formula switch | §2.1, p. 3; §2.5, p. 4 | Both displayed probability expressions match the sum/product order. The original displays are unnumbered, so the former “Equation 1–2” label was removed. A Sequence term shares z across output tokens, but the final model sums across documents; it does not simply choose a single document. Token marginalization uses the same retrieved top-K set rather than retrieving again for each token. |
| Sequence/Token token strips | §2.1, p. 3 | Qualitative teaching paths, not sampled outputs or measured evidence assignments. The Sequence strip explicitly represents one conditional path within the multi-document sum. |
| Hemingway document-support strip | Figure 2, p. 7; §4.3, p. 6 | Qualitative summary of the document posterior: Doc 2 supports “Sun”, Doc 1 supports the other title, then posteriors flatten. No posterior values or heatmap are reconstructed. Distinguish this posterior from the retriever prior pη(z\|x). Parametric completion is the paper's supported interpretation, not proof that each later token ignores retrieval. |
| QA bars: NQ, TQA-standard, TQA-Wiki, WQ, CT | Table 1, p. 6; §3.1 and Appendix D | Exact Match test scores. The two TriviaQA test splits are now separate selectable charts. Values match their own columns; missing original results are not treated as zeros. RAG-Sequence leads NQ, CT and TQA-Wiki; RAG-Token leads WQ; DPR leads standard TQA. Bar lengths use a fixed 0–100 scale. |
| Generation bars: Jeopardy Q-BLEU-1 / MS-MARCO Rouge-L | Table 2, p. 6 | Test scores: Jeopardy BART 19.7, Sequence 21.4, Token 22.2; MS-MARCO BART 38.2, Token 40.1, Sequence 40.8. Fixed 0–100 scales, with distinct metrics labeled. These charts contain generation scores, not FEVER classification scores. |
| Human preference: four bars | Table 4, p. 8; §4.3, p. 6 | RAG-Token versus BART over 452 generated pairs: factuality 42.7% versus 7.1%; specificity 37.4% versus 16.8%. Now explicitly labeled as selected outcomes: both-good, both-poor and no-majority categories are omitted, so pairs of bars do not sum to 100%. |
| Index hot-swap: matched cards and mismatched note | §4.5, pp. 7–8 | Same NQ RAG model, 82 world leaders whose identity changed. Matched: 2016 index/2016 leaders 70%; 2018/2018 68%. Mismatched: 2018 index/2016 leaders 12%; 2016 index/2018 leaders 4%. The note now states directions and sample scope explicitly. |
| Retriever ablation table: five selected model rows, six metric columns | Table 6, p. 8 | Development-set results, separate from Tables 1–2 test scores. Two copied columns were misidentified and have been corrected, detailed below. This is a selected-column/row excerpt, not the full original table. Each learned-retrieval variant improves on its own frozen counterpart in the displayed columns. The FEVER statement refers to original classification columns not shown here. |
| Claim → evidence → boundary → next-question timeline | Table 1, p. 6; §§4.1, 5–6 | Corrected its all-datasets claim to distinguish standard TQA from TQA-Wiki and the RAG family from RAG-Sequence. The future questions are explainer analysis. |
| Three-answer self-test and five takeaways | §2.1; §4.3; §4.5 | Teaching checks consistent with token-level marginalization. “Can switch evidence” is a latent-mixture interpretation, not a hard document-selector trace. No benchmark numbers are inferred from the quiz. |

## Corrected quantitative transcription

The former Table 6 excerpt copied the original **Jeopardy BLEU-1** column into a column labeled **Jeopardy Q-BLEU-1**, then copied the original **Jeopardy Q-BLEU-1** into **MS-MARCO Rouge-L**. The original's two-level headers must be followed jointly with the task and split.

| Model | Former mislabeled “QB-1 / R-L” | Correct Jeopardy Q-BLEU-1 (dev) | Correct MS-MARCO Rouge-L (dev) |
|---|---|---:|---:|
| RAG-Token-BM25 | 17.5 / 22.3 | 22.3 | 55.5 |
| RAG-Token-Frozen | 16.7 / 21.7 | 21.7 | 55.9 |
| RAG-Token | 17.9 / 22.6 | 22.6 | 56.2 |
| RAG-Sequence-Frozen | 11.8 / 19.6 | 19.6 | 56.7 |
| RAG-Sequence | 15.3 / 21.5 | 21.5 | 57.2 |

Table 1's standard TQA scores are DPR 57.9, RAG-Token 55.2 and RAG-Sequence 56.8. Its **separate TQA-Wiki split** gives T5-11B 50.1, T5-11B+SSM 60.5, RAG-Token 66.1 and RAG-Sequence 68.0. These cannot be ranked as one common evaluation. WQ is RAG-Token 45.5 versus RAG-Sequence 45.2, so the former blanket claim that Sequence wins all tasks was false.

## Validation limits

Static checks verify syntax/resources/catalogue links; they cannot detect mislabeled metric columns, mixed evaluation splits or incorrect scientific relations. Browser interaction/language/layout checks are recorded by the containing audit task. The page contains HTML/CSS conceptual diagrams and bars, not an original-image reader; image download/race tests therefore do not apply to this page. Quantitative correctness here is established by the paper/table cross-check above.
