# Self-RAG：图示与交互核对记录

核对日期：2026-10-27。依据 ICLR 2024 正式会议版本，逐项检查页面的静态图示、动态文本、公式和数据状态；这份记录说明科学依据，不代替浏览器布局与交互回归。

- [正式论文记录](https://proceedings.iclr.cc/paper_files/paper/2024/hash/25f7be9694d7b32d5cc670927b8091e1-Abstract-Conference.html)
- [正式 PDF](https://proceedings.iclr.cc/paper_files/paper/2024/file/25f7be9694d7b32d5cc670927b8091e1-Paper-Conference.pdf)

以下页码为 PDF 内印刷页码。已渲染检查 Figure 1，并用正文、算法、公式及表格文本逐项交叉核对。图形均为网页 CSS/HTML 重绘，未使用未经核对的论文截图。

## 全部可视模块与状态

1. `#glance` 三阶段概览：Figure 1（p.2）、§3.1（pp.3–4）。是流程摘要，Retrieve、Generate、Critique 不是仅有三类 token。
2. `#intuition` 传统 RAG / Self-RAG 对照及写作者类比：Figure 1、§1、§3.1。类比是教学解释；不表示传统 RAG 的所有变体都始终检索。
3. `#landscape` 五个可点击背景节点及详情：§1–2、§3.1、§5。箭头组织论述，不表示运行时调用链；将“检索什么”改为“如何用证据”，避免暗示训练了新检索器。
4. `#mechanism .token-grid` 四类 token 的全部卡片状态：Table 1（p.3）。Retrieve 有 Yes / No / Continue；后三类是 ISREL、ISSUP、ISUSE。Continue 表示沿用已有证据。
5. 三阶段机制条：Algorithm 1（p.4）、§3.1。每篇文档先评价 ISREL，再生成候选；之后评价支持度与有用性。多文档并行，候选按批评分数排序。
6. `#retrieveProb` / `#threshold` 检索演示：Appendix A.4（p.19）的 Yes / (Yes + No) 阈值；输入为人为设定的归一化分数。覆盖小于、等于、大于阈值及 0/1 边界；比较使用严格大于。
7. 三个 passage 的选择状态：Figure 1（p.2）。d₁ 相关且支持充分；d₂ 不相关；d₃ 沿用原图 Partially 标注。支持度判断针对“候选陈述—证据”，不能由答案只覆盖一个州来推导。未触发检索时卡片停用，输出不再保证事实正确或 ISUSE=5。默认软排序不等于必须过滤掉所有不相关候选。
8. `#math` 分段评分与支持权重：Eq.(3–4)（p.6）、Appendix A.4。忠实保留论文 Eq.(3) 的 `p + S`，去掉原页面未经说明加入的 `log`。分数归一化、partial 半分、有用性映射已说明；低/中/高滑块文案仅解释偏好，不计算新实验结果。
9. 阈值的 88% / 57% / 24% 趋势条：Figure 3c（p.8）。三数仅为明确标出的教学示意，不能当成论文三档测量值。
10. GPT-4 → critic → generator → inference 训练图：Figure 2（p.5）、§3.2、Algorithm 2（p.17）。箭头概括离线反思标注与训练；推理无需额外 critic，文档在 loss 中被 mask。
11. `#metricSelect` 六种结果图状态：Table 2（p.8）。PopQA、TQA、PubHealth、ARC、Bio、ASQA citation precision；逐一核对四条柱的模型名、数值与指标。Ret-Llama2-chat 明确为 13B；所有柱从零起按百分比显示。ASQA 选择的是引用精度，不代表全部 ASQA 指标。
12. 训练规模 / 模型 / 检索器数据卡：§4.3、Appendix A.3–B.2。145,619 是精确实例总数；正文概述约 150k；默认 top five 来自 B.2。
13. `#critical` 主张—证据表及研究者卡片：Figure 3、§5.2、Appendix A.3 Table 4、Ethical Concerns。top-1 消融同时改变检索时机和候选数，已收窄因果解释；MAUVE 与引用精度的观测权衡不证明具体候选为何被筛除。未来研究条目是讲解者分析。
14. `#knowledge` 总结流程、五个记忆点、四个展开式自测：§3、Figure 3、Ethical Concerns。流程箭头用于知识组织；各自测答案已核对，特别保留仍可能产生未充分支持内容的限制。

所有上述说明同时维护中英文。语言切换、三种深度、五个背景节点、四个 token、两种检索决策、三个候选、权重区间、六个指标与四个自测展开状态均属于回归范围。

## 本次纠正

修正 token 类型计数、ISREL 生成时序、Eq.(3) 的概率项、ISSUP 与答案覆盖面的混淆、默认软排序被误写成硬过滤、未检索状态仍可选择证据且保证高 utility 的演示，以及 top-1 消融的过度归因。Table 2 数值未发现需要更改之处。

## Bibliographic metadata

Checked 2026-11-01. The shared byline uses the ordered manuscript authors and explicitly mapped publication-time affiliations stored under this paper’s original source URL in [`paper-catalog.json`](../../references/paper-catalog.json). Metadata is generated with `node scripts/build-paper-metadata.cjs`; the same record is used on the homepage.

- [Official article metadata](https://proceedings.iclr.cc/paper_files/paper/2024/hash/25f7be9694d7b32d5cc670927b8091e1-Abstract-Conference.html) — authors, dates.published.
- [PDF title page author block; printed names take precedence over proceedings account names](https://proceedings.iclr.cc/paper_files/paper/2024/file/25f7be9694d7b32d5cc670927b8091e1-Paper-Conference.pdf) — authors.
- [PDF first-page author superscripts and affiliation block](https://proceedings.iclr.cc/paper_files/paper/2024/file/25f7be9694d7b32d5cc670927b8091e1-Paper-Conference.pdf) — affiliations.
- [Author-submitted arXiv manuscript; ordered author list and first submission date (separate from formal publication)](https://arxiv.org/abs/2310.11511v1) — dates.preprint.
- [Official proceedings manuscript: no individual-paper acceptance date disclosed](https://proceedings.iclr.cc/paper_files/paper/2024/file/25f7be9694d7b32d5cc670927b8091e1-Paper-Conference.pdf) — dates.accepted.

Paper dates: published = 2024-05-31; accepted = notDisclosed; preprint = 2023-10-17. Source precision is retained; undisclosed acceptance is not inferred from conference notifications. Unverified fields remain explicit. This bibliography update does not revise the scientific content or figures.

## Audit 2026-11-03

Re-checked against the ICLR 2024 proceedings PDF: all 24 Table 2 values in the six `#metricSelect` states (p.8), Eq. (3–4) (p.6), Appendix A.4 ISREL/ISSUP/ISUSE score definitions and the Yes/(Yes+No) > δ threshold (pp.18–19), Algorithm 1 ordering (p.4), §4.3 defaults (150k pairs, top five Contriever-MS MARCO, weights 1.0/1.0/0.5), Appendix Table 3 total 145,619, B.1 training (4×A100 80GB, 3 epochs), Appendix Figure 4 critic accuracy (Llama2-7B Retrieve 93.8%), and §5.2 / Figure 3a–c ablation statements. No numerical or formula changes were needed.

- P2 · English copy for `static-22` began with a full-width Chinese comma (“，and calls the retriever …”); replaced with an ASCII comma. No scientific change.
- Not changed, noted: the “best non-proprietary model on all six tasks” sentence restates the paper's §5.1 claim; in Table 2 ASQA str-em, retrieval Alpaca 13B (34.8) is higher than Self-RAG 13B (31.7), so the claim holds for the page's selected metrics but not for every Table 2 column.

Second-pass corrections (site-wide audit):

- Retriever card (zh/en): added the per-task retrieval sources behind the charted results (§4.3 p. 7: web-search top five for biographies and open-domain QA; GTR-XXL top five for ASQA). The zh string also no longer leaves “top five documents” in English.
- Supported-claims card (zh/en): “best non-proprietary model on all six tasks” is the §5.1 claim; Table 2 ASQA str-em is an exception (Alpaca-13B + retrieval 34.8 vs Self-RAG 13B 31.7, p. 8). Now attributed and qualified.
