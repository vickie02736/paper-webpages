<?xml version='1.0' encoding='utf-8'?>
<map version="1.0.1">
  <node TEXT="AI 顶会 A 框架研究地图 | 2026-10-20">
    <node TEXT="以 2023–2026 正式顶会论文为主，补充 2020–2022 年的必要入口；以官方会议、论文集和作者论文为核验依据。" />
    <node TEXT="分类与阅读脉络为本次整理，不表示严格引用继承、唯一分类或尚无人研究的空白。A 是可复用的问题或算法框架；同一方法也可能是相对于更早框架的 A+B。" />
    <node TEXT="优化与决策｜下一步采集什么、采取什么行动？" POSITION="right" FOLDED="true">
      <node TEXT="Bayesian Optimization｜贝叶斯优化" FOLDED="true">
        <node TEXT="原问题：在昂贵评估预算内，怎样找到高价值候选？" />
        <node TEXT="输入与输出：历史查询与数值反馈 → 概率代理模型 → 下一次查询" />
        <node TEXT="已有扩展轴：采集函数数值稳定性、部分评估、语言知识、多任务经验迁移" />
        <node TEXT="代表论文与阅读顺序">
          <node TEXT="LogEI｜NeurIPS 2023｜近年代表" LINK="https://papers.neurips.cc/paper_files/paper/2023/hash/419f72cbd568ad62183f8132a3605a2a-Abstract-Conference.html">
            <node TEXT="Unexpected Improvements to Expected Improvement for Bayesian Optimization" />
            <node TEXT="检查 EI 的数值问题；是理解和实现 BO 的近年入口。" />
          </node>
          <node TEXT="LLAMBO｜ICLR 2024｜已有扩展" LINK="https://proceedings.iclr.cc/paper_files/paper/2024/hash/84b8d9fcb4e262fcd429544697e1e720-Abstract-Conference.html">
            <node TEXT="Large Language Models to Enhance Bayesian Optimization" />
            <node TEXT="将 LLM 的上下文理解与领域知识用于 BO 的多个组成环节。" />
          </node>
          <node TEXT="p-KGFN｜ICML 2024｜已有扩展" LINK="https://proceedings.mlr.press/v235/buathong24a.html">
            <node TEXT="Bayesian Optimization of Function Networks with Partial Evaluations" />
            <node TEXT="选择评估函数网络的哪个节点以及输入，显式考虑成本。" />
          </node>
          <node TEXT="BOLT｜ICLR 2026｜2026 扩展" LINK="https://proceedings.iclr.cc/paper_files/paper/2026/hash/a4a3689e5ca538e340f58cdd29f513a9-Abstract-Conference.html">
            <node TEXT="Scaling Multi-Task Bayesian Optimization with Large Language Models" />
            <node TEXT="把历史 BO 运行蒸馏进 LLM，用于新任务初始化；测试代理仍是单任务。" />
          </node>
          <node TEXT="LGBO｜ICLR 2026｜2026 扩展" LINK="https://proceedings.iclr.cc/paper_files/paper/2026/hash/85381f4549b5ddf1d48e2e287d7d3d15-Abstract-Conference.html">
            <node TEXT="Unleashing LLMs in Bayesian Optimization: Preference-Guided Framework for Scientific Discovery" />
            <node TEXT="将 LLM 偏好持续纳入每轮优化，而不只用于初始化。" />
          </node>
        </node>
      </node>
      <node TEXT="Active Learning｜主动学习" FOLDED="true">
        <node TEXT="原问题：标注预算有限时，应该向谁查询哪些标签？" />
        <node TEXT="输入与输出：未标注池与已有标签 → 查询策略 → 新标签与模型更新" />
        <node TEXT="已有扩展轴：批量多样性、偏好标签、带收敛理论的查询规则" />
        <node TEXT="代表论文与阅读顺序">
          <node TEXT="BADGE｜ICLR 2020｜较早入口" LINK="https://openreview.net/pdf?id=ryghZJBKPS">
            <node TEXT="Deep Batch Active Learning by Diverse, Uncertain Gradient Lower Bounds" />
            <node TEXT="用梯度嵌入同时处理不确定性和批量多样性。" />
          </node>
          <node TEXT="Active DPO｜ICML 2024｜已有扩展" LINK="https://proceedings.mlr.press/v235/muldrew24a.html">
            <node TEXT="Active Preference Learning for Large Language Models" />
            <node TEXT="为 DPO 主动挑选需要获取偏好的 prompt/completion 对。" />
          </node>
          <node TEXT="Gradient-free AL｜ICML 2025｜已有扩展" LINK="https://proceedings.mlr.press/v267/zhang25db.html">
            <node TEXT="Active Learning of Deep Neural Networks via Gradient-Free Cutting Planes" />
            <node TEXT="以切平面训练与查询构造深度主动学习，并分析收敛。" />
          </node>
        </node>
      </node>
      <node TEXT="Offline Reinforcement Learning｜离线强化学习" FOLDED="true">
        <node TEXT="原问题：只有固定历史轨迹时，怎样学习决策策略？" />
        <node TEXT="输入与输出：固定状态、动作、奖励轨迹 → 策略；训练中无新增环境交互" />
        <node TEXT="已有扩展轴：行为约束、分布外动作、稳定训练与实现细节" />
        <node TEXT="代表论文与阅读顺序">
          <node TEXT="TD3+BC｜NeurIPS 2021｜较早入口" LINK="https://proceedings.neurips.cc/paper_files/paper/2021/hash/a8166da05c5a094f7dc03724b41886e5-Abstract.html">
            <node TEXT="A Minimalist Approach to Offline Reinforcement Learning" />
            <node TEXT="用行为克隆项与数据归一化构建简洁离线 RL 基线。" />
          </node>
          <node TEXT="ReBRAC｜NeurIPS 2023｜近年代表" LINK="https://papers.neurips.cc/paper_files/paper/2023/hash/26cce1e512793f2072fd27c391e04652-Abstract-Conference.html">
            <node TEXT="Revisiting the Minimalist Approach to Offline Reinforcement Learning" />
            <node TEXT="重新检查简洁框架中的实现与正则化设计。" />
          </node>
        </node>
      </node>
    </node>
    <node TEXT="生成与候选探索｜怎样产生分布丰富、满足结构要求的候选？" POSITION="right" FOLDED="true">
      <node TEXT="Diffusion Models｜扩散模型" FOLDED="true">
        <node TEXT="原问题：怎样从噪声逐步生成数据样本？" />
        <node TEXT="输入与输出：数据分布与噪声过程 → 去噪模型 → 生成样本" />
        <node TEXT="已有扩展轴：Transformer 骨干、离散图、晶体周期性与几何对称性" />
        <node TEXT="代表论文与阅读顺序">
          <node TEXT="DDPM｜NeurIPS 2020｜较早基础" LINK="https://proceedings.neurips.cc/paper/2020/file/4c5bcfec8584af0d967f1ab10179ca4b-Paper.pdf">
            <node TEXT="Denoising Diffusion Probabilistic Models" />
            <node TEXT="建立常用的逐步加噪、学习去噪生成路线。" />
          </node>
          <node TEXT="DiT｜ICCV 2023｜近年代表" LINK="https://openaccess.thecvf.com/content/ICCV2023/papers/Peebles_Scalable_Diffusion_Models_with_Transformers_ICCV_2023_paper.pdf">
            <node TEXT="Scalable Diffusion Models with Transformers" />
            <node TEXT="以 Transformer 扩展扩散模型的架构与规模。" />
          </node>
          <node TEXT="DiGress｜ICLR 2023｜已有扩展" LINK="https://openreview.net/pdf?id=UaAD-Nu86WX">
            <node TEXT="DiGress: Discrete Denoising Diffusion for Graph Generation" />
            <node TEXT="直接在离散节点和边类型上建模图扩散。" />
          </node>
          <node TEXT="DiffCSP｜NeurIPS 2023｜已有扩展" LINK="https://proceedings.neurips.cc/paper_files/paper/2023/hash/38b787fc530d0b31825827e2cc306656-Abstract.html">
            <node TEXT="Crystal Structure Prediction by Joint Equivariant Diffusion" />
            <node TEXT="联合处理晶格和原子坐标，纳入晶体几何与周期性。" />
          </node>
        </node>
      </node>
      <node TEXT="Flow Matching｜流匹配" FOLDED="true">
        <node TEXT="原问题：怎样学习从简单分布到目标分布的传输过程？" />
        <node TEXT="输入与输出：源与目标分布、概率路径 → 速度场或转移率 → 采样" />
        <node TEXT="已有扩展轴：一般几何空间、离散状态空间" />
        <node TEXT="代表论文与阅读顺序">
          <node TEXT="Flow Matching｜ICLR 2023｜框架入口" LINK="https://openreview.net/forum?id=PqvMRDCJT9t">
            <node TEXT="Flow Matching for Generative Modeling" />
            <node TEXT="以向量场回归训练连续归一化流，是这一框架的入口。" />
          </node>
          <node TEXT="Riemannian FM｜ICLR 2024｜已有扩展" LINK="https://openreview.net/forum?id=g7ohDlTITL">
            <node TEXT="Flow Matching on General Geometries" />
            <node TEXT="将流匹配推广到流形等一般几何空间。" />
          </node>
          <node TEXT="Discrete FM｜NeurIPS 2024｜已有扩展" LINK="https://proceedings.neurips.cc/paper_files/paper/2024/hash/f0d629a734b56a642701bba7bc8bb3ed-Abstract-Conference.html">
            <node TEXT="Discrete Flow Matching" />
            <node TEXT="将概率路径与采样机制扩展到离散数据。" />
          </node>
        </node>
      </node>
      <node TEXT="GFlowNets｜生成流网络" FOLDED="true">
        <node TEXT="原问题：怎样按奖励比例生成多种高价值组合对象？" />
        <node TEXT="输入与输出：构造动作、终态奖励 → 随机策略 → 多样高奖励样本" />
        <node TEXT="已有扩展轴：轨迹信用分配、多目标条件化、分布式学习与泛化" />
        <node TEXT="代表论文与阅读顺序">
          <node TEXT="Trajectory Balance｜NeurIPS 2022｜较早入口" LINK="https://papers.neurips.cc/paper_files/paper/2022/hash/27b51baca8377a0cf109f6ecc15a0f70-Abstract-Conference.html">
            <node TEXT="Trajectory Balance: Improved Credit Assignment in GFlowNets" />
            <node TEXT="以完整轨迹平衡训练生成策略。" />
          </node>
          <node TEXT="MO-GFlowNets｜ICML 2023｜已有扩展" LINK="https://proceedings.mlr.press/v202/jain23a.html">
            <node TEXT="Multi-Objective GFlowNets" />
            <node TEXT="把多目标权衡纳入条件化生成。" />
          </node>
          <node TEXT="SAL｜ICLR 2025｜已有扩展" LINK="https://proceedings.iclr.cc/paper_files/paper/2025/hash/000eba875068854d5ff003b1fa534cd6-Abstract-Conference.html">
            <node TEXT="Generalization and Distributed Learning of GFlowNets" />
            <node TEXT="研究泛化界，并以子图异步学习分解训练。" />
          </node>
        </node>
      </node>
    </node>
    <node TEXT="知识与文献｜怎样表示、检索与提取可用知识？" POSITION="right" FOLDED="true">
      <node TEXT="Retrieval-Augmented Generation｜检索增强生成" FOLDED="true">
        <node TEXT="原问题：怎样让生成回答利用可检索的外部知识？" />
        <node TEXT="输入与输出：问题与语料库 → 检索证据 → 条件生成回答" />
        <node TEXT="已有扩展轴：是否检索、自我评估、逐步分解与检索决策" />
        <node TEXT="代表论文与阅读顺序">
          <node TEXT="RAG｜NeurIPS 2020｜较早基础" LINK="https://proceedings.neurips.cc/paper/2020/file/6b493230205f780e1bc26945df7481e5-Paper.pdf">
            <node TEXT="Retrieval-Augmented Generation for Knowledge-Intensive NLP Tasks" />
            <node TEXT="将参数模型与外部非参数检索记忆结合。" />
          </node>
          <node TEXT="Self-RAG｜ICLR 2024｜已有扩展" LINK="https://proceedings.iclr.cc/paper_files/paper/2024/hash/25f7be9694d7b32d5cc670927b8091e1-Abstract-Conference.html">
            <node TEXT="Self-RAG: Learning to Retrieve, Generate, and Critique through Self-Reflection" />
            <node TEXT="学习按需检索，并用反思标记评估生成。" />
          </node>
          <node TEXT="DeepRAG｜ICLR 2026｜2026 扩展" LINK="https://proceedings.iclr.cc/paper_files/paper/2026/hash/bdff657cb9351656c025da8e1dc538a4-Abstract-Conference.html">
            <node TEXT="DeepRAG: Thinking to Retrieve Step by Step for Large Language Models" />
            <node TEXT="将检索增强推理建模为 MDP，逐步选择检索或参数化推理。" />
          </node>
        </node>
      </node>
      <node TEXT="Text Embeddings / Dense Retrieval｜文本嵌入与稠密检索" FOLDED="true">
        <node TEXT="原问题：怎样把文本映射为适合相似性与检索的表示？" />
        <node TEXT="输入与输出：文本、任务说明与训练对 → 向量表示 → 相似性或排序" />
        <node TEXT="已有扩展轴：合成训练数据、池化方式、对比式指令训练" />
        <node TEXT="代表论文与阅读顺序">
          <node TEXT="LLM text embeddings｜ACL 2024｜近年代表" LINK="https://aclanthology.org/2024.acl-long.642/">
            <node TEXT="Improving Text Embeddings with Large Language Models" />
            <node TEXT="使用 LLM 合成多样训练数据，训练通用文本嵌入。" />
          </node>
          <node TEXT="NV-Embed｜ICLR 2025｜已有扩展" LINK="https://proceedings.iclr.cc/paper_files/paper/2025/hash/c4bf73386022473a652a18941e9ea6f8-Abstract-Conference.html">
            <node TEXT="NV-Embed: Improved Techniques for Training LLMs as Generalist Embedding Models" />
            <node TEXT="组合潜在注意力池化、双向注意力与两阶段对比训练。" />
          </node>
        </node>
      </node>
      <node TEXT="Universal Information Extraction｜通用信息抽取" FOLDED="true">
        <node TEXT="原问题：怎样把非结构化文献转成指定的结构化信息？" />
        <node TEXT="输入与输出：文本与 schema 或指令 → 实体、关系、事件或表格" />
        <node TEXT="已有扩展轴：统一结构生成、按需指令、输出结构变化" />
        <node TEXT="代表论文与阅读顺序">
          <node TEXT="UIE｜ACL 2022｜较早入口" LINK="https://aclanthology.org/2022.acl-long.395/">
            <node TEXT="Unified Structure Generation for Universal Information Extraction" />
            <node TEXT="以统一结构语言和 schema 引导不同信息抽取任务。" />
          </node>
          <node TEXT="Instruct and Extract｜EMNLP 2023｜已有扩展" LINK="https://aclanthology.org/2023.emnlp-main.620/">
            <node TEXT="Instruct and Extract: Instruction Tuning for On-Demand Information Extraction" />
            <node TEXT="按自然语言指令抽取目标信息，并输出结构化表格。" />
          </node>
        </node>
      </node>
    </node>
    <node TEXT="智能体与推理｜怎样把语言生成变为可执行的推理和行动？" POSITION="right" FOLDED="true">
      <node TEXT="Tool-Using Language Agents｜工具型语言智能体" FOLDED="true">
        <node TEXT="原问题：怎样根据观察进行推理、调用工具并更新行为？" />
        <node TEXT="输入与输出：任务、工具、环境观察 → 推理与行动循环 → 任务结果" />
        <node TEXT="已有扩展轴：调用时机、参数选择、环境反馈与记忆" />
        <node TEXT="代表论文与阅读顺序">
          <node TEXT="ReAct｜ICLR 2023｜框架入口" LINK="https://openreview.net/pdf?id=WE_vluYUL-X">
            <node TEXT="ReAct: Synergizing Reasoning and Acting in Language Models" />
            <node TEXT="交替生成推理与行动，并利用环境观察继续决策。" />
          </node>
          <node TEXT="Toolformer｜NeurIPS 2023｜近年代表" LINK="https://papers.nips.cc/paper/2023/hash/d842425e4bf79ba039352da0f658a906-Abstract-Conference.html">
            <node TEXT="Toolformer: Language Models Can Teach Themselves to Use Tools" />
            <node TEXT="自监督学习 API 调用的选择、时机、参数及结果利用。" />
          </node>
          <node TEXT="Reflexion｜NeurIPS 2023｜已有扩展" LINK="https://papers.neurips.cc/paper_files/paper/2023/hash/1b44b878bb782e6954cd888628510e90-Abstract-Conference.html">
            <node TEXT="Reflexion: Language Agents with Verbal Reinforcement Learning" />
            <node TEXT="将反馈转成语言反思记忆，以改进后续尝试。" />
          </node>
        </node>
      </node>
      <node TEXT="Search-Based LLM Reasoning｜基于搜索的语言模型推理" FOLDED="true">
        <node TEXT="原问题：怎样探索、比较和修正多条推理路径？" />
        <node TEXT="输入与输出：任务与候选思考 → 采样、评估与搜索 → 答案或行动" />
        <node TEXT="已有扩展轴：多路径聚合、树搜索、推理与环境行动结合" />
        <node TEXT="代表论文与阅读顺序">
          <node TEXT="Self-Consistency｜ICLR 2023｜近年代表" LINK="https://openreview.net/pdf?id=1PL1NIMMrw">
            <node TEXT="Self-Consistency Improves Chain of Thought Reasoning in Language Models" />
            <node TEXT="采样多条推理路径，并对答案作边缘化聚合。" />
          </node>
          <node TEXT="Tree of Thoughts｜NeurIPS 2023｜框架入口" LINK="https://papers.nips.cc/paper/2023/hash/271db9922b8d1f4dd7aaef84ed5ac703-Abstract-Conference.html">
            <node TEXT="Tree of Thoughts: Deliberate Problem Solving with Large Language Models" />
            <node TEXT="把思考作为搜索节点，允许评估与回溯。" />
          </node>
          <node TEXT="LATS｜ICML 2024｜已有扩展" LINK="https://proceedings.mlr.press/v235/zhou24r.html">
            <node TEXT="Language Agent Tree Search Unifies Reasoning, Acting, and Planning in Language Models" />
            <node TEXT="将语言推理、环境行动、评估和树搜索合并。" />
          </node>
        </node>
      </node>
      <node TEXT="Multi-Agent LLM Systems｜多智能体语言系统" FOLDED="true">
        <node TEXT="原问题：怎样组织多个模型分工、通信并形成结果？" />
        <node TEXT="输入与输出：角色、模型、消息与协作规则 → 集体决策或产物" />
        <node TEXT="已有扩展轴：角色流程、通信协议、多样性与共识聚合" />
        <node TEXT="代表论文与阅读顺序">
          <node TEXT="MetaGPT｜ICLR 2024｜近年代表" LINK="https://proceedings.iclr.cc/paper_files/paper/2024/hash/6507b115562bb0a305f1958ccc87355a-Abstract-Conference.html">
            <node TEXT="MetaGPT: Meta Programming for A Multi-Agent Collaborative Framework" />
            <node TEXT="用标准作业流程组织多角色软件开发协作。" />
          </node>
          <node TEXT="ReConcile｜ACL 2024｜近年代表" LINK="https://aclanthology.org/2024.acl-long.381/">
            <node TEXT="ReConcile: Round-Table Conference Improves Reasoning via Consensus among Diverse LLMs" />
            <node TEXT="以多轮讨论与置信加权投票形成共识。" />
          </node>
        </node>
      </node>
    </node>
    <node TEXT="评价与可靠性｜怎样判断输出的质量、事实性与可置信程度？" POSITION="left" FOLDED="true">
      <node TEXT="LLM-as-a-Judge｜语言模型作为评审" FOLDED="true">
        <node TEXT="原问题：怎样让模型对开放式输出作可用的评分或排序？" />
        <node TEXT="输入与输出：待评输出、参考材料与标准 → 分数、排序或评语" />
        <node TEXT="已有扩展轴：位置与冗长偏差、评价标准、可复现的专用评估器" />
        <node TEXT="代表论文与阅读顺序">
          <node TEXT="MT-Bench / Arena｜NeurIPS · Datasets &amp; Benchmarks 2023｜框架入口" LINK="https://papers.neurips.cc/paper_files/paper/2023/hash/91f18a1287b398d378ef22505bf41832-Abstract-Datasets_and_Benchmarks.html">
            <node TEXT="Judging LLM-as-a-Judge with MT-Bench and Chatbot Arena" />
            <node TEXT="研究 LLM 评审的可用性、偏差及与人类偏好的关联。" />
          </node>
          <node TEXT="G-Eval｜EMNLP 2023｜近年代表" LINK="https://aclanthology.org/2023.emnlp-main.153/">
            <node TEXT="G-Eval: NLG Evaluation using GPT-4 with Better Human Alignment" />
            <node TEXT="用推理与结构化评分流程改善评价一致性。" />
          </node>
          <node TEXT="Prometheus｜ICLR 2024｜已有扩展" LINK="https://proceedings.iclr.cc/paper_files/paper/2024/hash/803485352e61e3ebf41221e4776c9fd4-Abstract-Conference.html">
            <node TEXT="Prometheus: Inducing Fine-Grained Evaluation Capability in Language Models" />
            <node TEXT="训练开放评估模型，依据评分标准和参考答案作细粒度评价。" />
          </node>
        </node>
      </node>
      <node TEXT="Atomic Factuality Evaluation｜原子事实评价" FOLDED="true">
        <node TEXT="原问题：长回答里哪些具体陈述有证据支持？" />
        <node TEXT="输入与输出：生成文本 → 事实分解、检索与核验 → 事实性指标" />
        <node TEXT="已有扩展轴：核验粒度、知识源、精确率与长回答完整性" />
        <node TEXT="代表论文与阅读顺序">
          <node TEXT="FActScore｜EMNLP 2023｜框架入口" LINK="https://aclanthology.org/2023.emnlp-main.741/">
            <node TEXT="FActScore: Fine-Grained Atomic Evaluation of Factual Precision in Long Form Text Generation" />
            <node TEXT="将回答拆为原子事实，并计算被知识源支持的比例。" />
          </node>
          <node TEXT="SAFE / LongFact｜NeurIPS 2024｜已有扩展" LINK="https://proceedings.neurips.cc/paper_files/paper/2024/hash/937ae0e83eb08d2cb8627fe1def8c751-Abstract-Conference.html">
            <node TEXT="Long-form Factuality in Large Language Models" />
            <node TEXT="通过搜索与多步推理核验事实，并考察长回答的事实覆盖。" />
          </node>
        </node>
      </node>
      <node TEXT="Conformal Prediction / Risk Control｜共形预测与风险控制" FOLDED="true">
        <node TEXT="原问题：怎样用校准数据为预测集合或风险提供统计保证？" />
        <node TEXT="输入与输出：校准数据、损失与目标风险 → 集合、阈值或受控生成" />
        <node TEXT="已有扩展轴：语言输出集合、事实性、校准与测试分布变化" />
        <node TEXT="代表论文与阅读顺序">
          <node TEXT="Conformal Risk Control｜ICLR 2024｜框架入口" LINK="https://proceedings.iclr.cc/paper_files/paper/2024/hash/f3549ef9b5ff520a7e41ff3cc306ab2b-Abstract-Conference.html">
            <node TEXT="Conformal Risk Control" />
            <node TEXT="将覆盖率控制推广至单调损失的期望风险控制。" />
          </node>
          <node TEXT="Conformal LM｜ICLR 2024｜已有扩展" LINK="https://proceedings.iclr.cc/paper_files/paper/2024/hash/31421b112e5f7faf4fc577b74e45dab2-Abstract-Conference.html">
            <node TEXT="Conformal Language Modeling" />
            <node TEXT="校准生成采样与拒绝规则，构造带性能保证的回答集合。" />
          </node>
          <node TEXT="Conformal Factuality｜ICML 2024｜已有扩展" LINK="https://proceedings.mlr.press/v235/mohri24a.html">
            <node TEXT="Language Models with Conformal Factuality Guarantees" />
            <node TEXT="逐步降低回答的具体程度，以控制事实正确性风险。" />
          </node>
          <node TEXT="CoFact｜ICLR 2026｜2026 扩展" LINK="https://proceedings.iclr.cc/paper_files/paper/2026/hash/bd074b828bbd782d4bece89306caff84-Abstract-Conference.html">
            <node TEXT="CoFact: Conformal Factuality Guarantees for Language Models under Covariate Shift" />
            <node TEXT="用在线密度比估计重加权校准数据，分析协变量变化下的风险。" />
          </node>
          <node TEXT="DS-CP｜ICML 2026｜2026 扩展" LINK="https://proceedings.mlr.press/v306/lin26t.html">
            <node TEXT="Domain-Shift-Aware Conformal Prediction for Large Language Models" />
            <node TEXT="根据测试 prompt 与校准样本的接近程度进行重加权。" />
          </node>
        </node>
      </node>
    </node>
    <node TEXT="训练、适应与压缩｜怎样改变模型、训练数据或部署时的行为？" POSITION="left" FOLDED="true">
      <node TEXT="Preference Optimization｜偏好优化" FOLDED="true">
        <node TEXT="原问题：怎样用偏好反馈调整生成分布？" />
        <node TEXT="输入与输出：偏好或好坏标签、参考策略 → 对齐后的生成策略" />
        <node TEXT="已有扩展轴：参考模型需求、反馈形式与奖励参数化" />
        <node TEXT="代表论文与阅读顺序">
          <node TEXT="DPO｜NeurIPS 2023｜框架入口" LINK="https://proceedings.neurips.cc/paper_files/paper/2023/hash/a85b405ed65c6477a4fe8302b5e06ce7-Abstract.html">
            <node TEXT="Direct Preference Optimization: Your Language Model Is Secretly a Reward Model" />
            <node TEXT="通过偏好分类目标直接优化策略。" />
          </node>
          <node TEXT="SimPO｜NeurIPS 2024｜已有扩展" LINK="https://papers.nips.cc/paper_files/paper/2024/hash/e099c1c9699814af0be873a175361713-Abstract-Conference.html">
            <node TEXT="SimPO: Simple Preference Optimization with a Reference-Free Reward" />
            <node TEXT="使用平均对数概率奖励，移除参考模型需求。" />
          </node>
          <node TEXT="KTO｜ICML 2024｜已有扩展" LINK="https://proceedings.mlr.press/v235/ethayarajh24a.html">
            <node TEXT="Model Alignment as Prospect Theoretic Optimization" />
            <node TEXT="以人类效用建模利用二元好坏反馈，不要求成对偏好。" />
          </node>
        </node>
      </node>
      <node TEXT="Knowledge Distillation｜知识蒸馏" FOLDED="true">
        <node TEXT="原问题：怎样把大教师的能力转移给较小学生？" />
        <node TEXT="输入与输出：教师分布与训练样本 → 蒸馏目标 → 学生模型" />
        <node TEXT="已有扩展轴：KL 方向、训练与推理分布差异、学生生成样本" />
        <node TEXT="代表论文与阅读顺序">
          <node TEXT="MiniLLM｜ICLR 2024｜近年代表" LINK="https://proceedings.iclr.cc/paper_files/paper/2024/hash/8ac015d409635f196f9e3e9dcfb9a94e-Abstract-Conference.html">
            <node TEXT="MiniLLM: Knowledge Distillation of Large Language Models" />
            <node TEXT="研究适合自回归语言模型蒸馏的反向 KL 目标。" />
          </node>
          <node TEXT="DistiLLM｜ICML 2024｜已有扩展" LINK="https://proceedings.mlr.press/v235/ko24c.html">
            <node TEXT="DistiLLM: Towards Streamlined Distillation for Large Language Models" />
            <node TEXT="结合偏斜 KL 目标与高效利用学生样本的离策略方法。" />
          </node>
          <node TEXT="DistiLLM-2｜ICML 2025｜已有扩展" LINK="https://proceedings.mlr.press/v267/ko25a.html">
            <node TEXT="DistiLLM-2: A Contrastive Approach Boosts the Distillation of LLMs" />
            <node TEXT="以对比式方法进一步改进语言模型蒸馏。" />
          </node>
        </node>
      </node>
      <node TEXT="Machine Unlearning｜机器遗忘" FOLDED="true">
        <node TEXT="原问题：怎样移除指定数据影响，同时保留模型效用？" />
        <node TEXT="输入与输出：已训练模型、遗忘与保留集合 → 更新后的模型" />
        <node TEXT="已有扩展轴：保留能力、遗忘效果、后续微调后的恢复" />
        <node TEXT="代表论文与阅读顺序">
          <node TEXT="LLM Unlearning｜NeurIPS 2024｜近年代表" LINK="https://proceedings.neurips.cc/paper_files/paper/2024/hash/be52acf6bccf4a8c0a90fe2f5cfcead3-Abstract-Conference.html">
            <node TEXT="Large Language Model Unlearning" />
            <node TEXT="研究面向生成式语言模型的选择性遗忘。" />
          </node>
          <node TEXT="ILU｜ICML 2025｜已有扩展" LINK="https://proceedings.mlr.press/v267/wang25en.html">
            <node TEXT="Invariance Makes LLM Unlearning Resilient Even to Unanticipated Downstream Fine-Tuning" />
            <node TEXT="将对后续微调的韧性纳入遗忘优化目标。" />
          </node>
        </node>
      </node>
      <node TEXT="Dataset Distillation｜数据集蒸馏" FOLDED="true">
        <node TEXT="原问题：怎样以少量合成样本保留大数据集的训练效用？" />
        <node TEXT="输入与输出：原始训练集与学习算法 → 小型合成训练集" />
        <node TEXT="已有扩展轴：分布匹配质量、代表性采样与优化成本" />
        <node TEXT="代表论文与阅读顺序">
          <node TEXT="IDM｜CVPR 2023｜近年代表" LINK="https://openaccess.thecvf.com/content/CVPR2023/html/Zhao_Improved_Distribution_Matching_for_Dataset_Condensation_CVPR_2023_paper.html">
            <node TEXT="Improved Distribution Matching for Dataset Condensation" />
            <node TEXT="改善特征数量与嵌入有效性等分布匹配问题。" />
          </node>
          <node TEXT="DREAM｜ICCV 2023｜近年代表" LINK="https://openaccess.thecvf.com/content/ICCV2023/html/Liu_DREAM_Efficient_Dataset_Distillation_by_Representative_Matching_ICCV_2023_paper.html">
            <node TEXT="DREAM: Efficient Dataset Distillation by Representative Matching" />
            <node TEXT="以代表性样本构建更稳定的匹配目标。" />
          </node>
        </node>
      </node>
      <node TEXT="Test-Time Adaptation｜测试时适应" FOLDED="true">
        <node TEXT="原问题：部署后遇到分布变化，怎样用有限反馈调整模型？" />
        <node TEXT="输入与输出：预训练模型、测试数据流与允许的反馈 → 在线适应" />
        <node TEXT="已有扩展轴：动态数据流、相关采样、廉价二元反馈" />
        <node TEXT="代表论文与阅读顺序">
          <node TEXT="SAR｜ICLR 2023｜近年代表" LINK="https://openreview.net/pdf?id=g2YraF75Tj">
            <node TEXT="Towards Stable Test-Time Adaptation in Dynamic Wild World" />
            <node TEXT="研究动态测试环境中的稳定适应。" />
          </node>
          <node TEXT="RoTTA｜CVPR 2023｜近年代表" LINK="https://openaccess.thecvf.com/content/CVPR2023/html/Yuan_Robust_Test-Time_Adaptation_in_Dynamic_Scenarios_CVPR_2023_paper.html">
            <node TEXT="Robust Test-Time Adaptation in Dynamic Scenarios" />
            <node TEXT="处理动态流中相关采样、分布变化与归一化问题。" />
          </node>
          <node TEXT="BiTTA｜ICML 2025｜已有扩展" LINK="https://proceedings.mlr.press/v267/lee25g.html">
            <node TEXT="Test-Time Adaptation with Binary Feedback" />
            <node TEXT="允许少量正确或错误反馈，减少人工标注负担。" />
          </node>
        </node>
      </node>
    </node>
    <node TEXT="结构化科学建模｜怎样把几何、动力学与结构关系纳入学习？" POSITION="left" FOLDED="true">
      <node TEXT="Equivariant Graph Learning｜等变图学习" FOLDED="true">
        <node TEXT="原问题：怎样让几何预测遵守旋转、平移等对称性？" />
        <node TEXT="输入与输出：三维图与特征 → 等变表示 → 能量、力或其他几何属性" />
        <node TEXT="已有扩展轴：高阶表示、等变注意力、表达能力与计算成本" />
        <node TEXT="代表论文与阅读顺序">
          <node TEXT="Equiformer｜ICLR 2023｜框架入口" LINK="https://openreview.net/pdf?id=KwmPfARgOTD">
            <node TEXT="Equiformer: Equivariant Graph Attention Transformer for 3D Atomistic Graphs" />
            <node TEXT="在原子三维图上使用等变特征与注意力。" />
          </node>
          <node TEXT="EquiformerV2｜ICLR 2024｜已有扩展" LINK="https://proceedings.iclr.cc/paper_files/paper/2024/hash/ab12e8f3443c1a789f595b18d8c597b4-Abstract-Conference.html">
            <node TEXT="EquiformerV2: Improved Equivariant Transformer for Scaling to Higher-Degree Representations" />
            <node TEXT="改善高阶等变表示的扩展与计算效率。" />
          </node>
        </node>
      </node>
      <node TEXT="Neural Operators / PDE Surrogates｜神经算子与 PDE 代理" FOLDED="true">
        <node TEXT="原问题：怎样学习函数或物理场到解场的映射？" />
        <node TEXT="输入与输出：初边值、几何、系数或离散场 → 解算子或解场" />
        <node TEXT="已有扩展轴：网格与分辨率、变化几何、物理状态聚合" />
        <node TEXT="代表论文与阅读顺序">
          <node TEXT="FNO｜ICLR 2021｜较早基础" LINK="https://openreview.net/pdf/53c47f849d1cd4d21b865caf7d774e07a5c42aa4.pdf">
            <node TEXT="Fourier Neural Operator for Parametric Partial Differential Equations" />
            <node TEXT="以傅里叶空间的算子层学习参数化 PDE 解映射。" />
          </node>
          <node TEXT="GINO｜NeurIPS 2023｜已有扩展" LINK="https://papers.neurips.cc/paper_files/paper/2023/hash/70518ea42831f02afc3a2828993935ad-Abstract-Conference.html">
            <node TEXT="Geometry-Informed Neural Operator for Large-Scale 3D PDEs" />
            <node TEXT="组合图和傅里叶算子，处理变化几何与大规模三维 PDE。" />
          </node>
          <node TEXT="Transolver｜ICML 2024｜已有扩展" LINK="https://proceedings.mlr.press/v235/wu24r.html">
            <node TEXT="Transolver: A Fast Transformer Solver for PDEs on General Geometries" />
            <node TEXT="以物理状态切片聚合处理一般几何上的求解。" />
          </node>
        </node>
      </node>
      <node TEXT="Time-Series Forecasting / Foundation Models｜时间序列预测与基础模型" FOLDED="true">
        <node TEXT="原问题：怎样从历史序列预测未来，并迁移到新序列？" />
        <node TEXT="输入与输出：历史数值、时间结构与预训练经验 → 未来序列" />
        <node TEXT="已有扩展轴：patch 表征、零样本跨域、模型与数据规模" />
        <node TEXT="代表论文与阅读顺序">
          <node TEXT="PatchTST｜ICLR 2023｜近年代表" LINK="https://openreview.net/pdf?id=Jbdc0vTOcol">
            <node TEXT="A Time Series Is Worth 64 Words: Long-Term Forecasting with Transformers" />
            <node TEXT="通过时间 patch 与通道独立设计改进长期预测。" />
          </node>
          <node TEXT="TimesFM｜ICML 2024｜已有扩展" LINK="https://proceedings.mlr.press/v235/das24c.html">
            <node TEXT="A Decoder-Only Foundation Model for Time-Series Forecasting" />
            <node TEXT="用预训练解码器开展跨数据集零样本预测。" />
          </node>
          <node TEXT="Time-MoE｜ICLR 2025｜已有扩展" LINK="https://proceedings.iclr.cc/paper_files/paper/2025/hash/558d48c1f08675daa636e09bfe94a89e-Abstract-Conference.html">
            <node TEXT="Time-MoE: Billion-Scale Time Series Foundation Models with Mixture of Experts" />
            <node TEXT="以混合专家架构扩展时间序列基础模型。" />
          </node>
        </node>
      </node>
      <node TEXT="Differentiable Causal Discovery｜可微因果发现" FOLDED="true">
        <node TEXT="原问题：在建模与可识别性假设下，怎样从数据恢复因果图？" />
        <node TEXT="输入与输出：观察或干预数据、结构假设 → DAG 或候选结构" />
        <node TEXT="已有扩展轴：无环约束、数值稳定性、稀疏性与扩展规模" />
        <node TEXT="代表论文与阅读顺序">
          <node TEXT="DAGMA｜NeurIPS 2022｜较早入口" LINK="https://papers.neurips.cc/paper_files/paper/2022/hash/36e2967f87c3362e37cf988781a887ad-Abstract-Conference.html">
            <node TEXT="DAGMA: Learning DAGs via M-Matrices and a Log-Determinant Acyclicity Characterization" />
            <node TEXT="以连续无环性刻画构造 DAG 学习优化。" />
          </node>
          <node TEXT="SDCD｜ICML 2024｜已有扩展" LINK="https://proceedings.mlr.press/v235/nazaret24a.html">
            <node TEXT="Stable Differentiable Causal Discovery" />
            <node TEXT="以更稳定的无环约束和稀疏训练改进因果发现。" />
          </node>
        </node>
      </node>
    </node>
    <node TEXT="视觉与三维感知｜怎样从图像得到可操作的对象与几何表示？" POSITION="left" FOLDED="true">
      <node TEXT="Promptable Segmentation｜可提示分割" FOLDED="true">
        <node TEXT="原问题：怎样根据点、框等提示得到目标掩膜？" />
        <node TEXT="输入与输出：图像或视频与提示 → 对象掩膜或时序掩膜" />
        <node TEXT="已有扩展轴：图像到视频、跨帧记忆与交互修正" />
        <node TEXT="代表论文与阅读顺序">
          <node TEXT="SAM｜ICCV 2023｜框架入口" LINK="https://openaccess.thecvf.com/content/ICCV2023/html/Kirillov_Segment_Anything_ICCV_2023_paper.html">
            <node TEXT="Segment Anything" />
            <node TEXT="建立可提示、可迁移的图像分割模型。" />
          </node>
          <node TEXT="SAM 2｜ICLR 2025｜已有扩展" LINK="https://proceedings.iclr.cc/paper_files/paper/2025/hash/45c1f6a8cbf2da59ebf2c802b4f742cd-Abstract-Conference.html">
            <node TEXT="SAM 2: Segment Anything in Images and Videos" />
            <node TEXT="将图像分割扩展到带记忆的视频分割。" />
          </node>
        </node>
      </node>
      <node TEXT="Monocular Depth Estimation｜单目深度估计" FOLDED="true">
        <node TEXT="原问题：怎样从单张图像估计场景深度？" />
        <node TEXT="输入与输出：单张 RGB 图像 → 相对或度量深度图" />
        <node TEXT="已有扩展轴：无标注数据、合成监督、伪标签与泛化" />
        <node TEXT="代表论文与阅读顺序">
          <node TEXT="Depth Anything｜CVPR 2024｜近年代表" LINK="https://openaccess.thecvf.com/content/CVPR2024/html/Yang_Depth_Anything_Unleashing_the_Power_of_Large-Scale_Unlabeled_Data_CVPR_2024_paper.html">
            <node TEXT="Depth Anything: Unleashing the Power of Large-Scale Unlabeled Data" />
            <node TEXT="利用大规模无标注数据学习通用深度表示。" />
          </node>
          <node TEXT="Depth Anything V2｜NeurIPS 2024｜已有扩展" LINK="https://proceedings.neurips.cc/paper_files/paper/2024/hash/26cfdcd8fe6fd75cc53e92963a656c58-Abstract-Conference.html">
            <node TEXT="Depth Anything V2" />
            <node TEXT="改进深度模型的数据与训练路线，提升细节与稳健性。" />
          </node>
        </node>
      </node>
      <node TEXT="Feed-Forward 3D Reconstruction｜前馈三维重建" FOLDED="true">
        <node TEXT="原问题：怎样从多张图像恢复相机与场景几何？" />
        <node TEXT="输入与输出：图像集合 → 点图、深度、相机或对应关系" />
        <node TEXT="已有扩展轴：图像对到多视图、联合几何输出、前馈推理" />
        <node TEXT="代表论文与阅读顺序">
          <node TEXT="DUSt3R｜CVPR 2024｜框架入口" LINK="https://openaccess.thecvf.com/content/CVPR2024/html/Wang_DUSt3R_Geometric_3D_Vision_Made_Easy_CVPR_2024_paper.html">
            <node TEXT="DUSt3R: Geometric 3D Vision Made Easy" />
            <node TEXT="用图像对直接预测点图，简化三维几何恢复。" />
          </node>
          <node TEXT="VGGT｜CVPR 2025｜已有扩展" LINK="https://openaccess.thecvf.com/content/CVPR2025/html/Wang_VGGT_Visual_Geometry_Grounded_Transformer_CVPR_2025_paper.html">
            <node TEXT="VGGT: Visual Geometry Grounded Transformer" />
            <node TEXT="以图像集合联合预测多种三维几何量。" />
          </node>
        </node>
      </node>
    </node>
    <node TEXT="六条概念阅读路线（整理关系）" FOLDED="true" POSITION="right">
      <node TEXT="外部知识如何参与回答">
        <node TEXT="抽取与表示 → 检索生成 → 证据核验 → 风险控制" />
        <node TEXT="Universal Information Extraction｜通用信息抽取">
          <node TEXT="UIE｜ACL 2022" LINK="https://aclanthology.org/2022.acl-long.395/" />
          <node TEXT="Instruct and Extract｜EMNLP 2023" LINK="https://aclanthology.org/2023.emnlp-main.620/" />
        </node>
        <node TEXT="Text Embeddings / Dense Retrieval｜文本嵌入与稠密检索">
          <node TEXT="LLM text embeddings｜ACL 2024" LINK="https://aclanthology.org/2024.acl-long.642/" />
          <node TEXT="NV-Embed｜ICLR 2025" LINK="https://proceedings.iclr.cc/paper_files/paper/2025/hash/c4bf73386022473a652a18941e9ea6f8-Abstract-Conference.html" />
        </node>
        <node TEXT="Retrieval-Augmented Generation｜检索增强生成">
          <node TEXT="RAG｜NeurIPS 2020" LINK="https://proceedings.neurips.cc/paper/2020/file/6b493230205f780e1bc26945df7481e5-Paper.pdf" />
          <node TEXT="Self-RAG｜ICLR 2024" LINK="https://proceedings.iclr.cc/paper_files/paper/2024/hash/25f7be9694d7b32d5cc670927b8091e1-Abstract-Conference.html" />
          <node TEXT="DeepRAG｜ICLR 2026" LINK="https://proceedings.iclr.cc/paper_files/paper/2026/hash/bdff657cb9351656c025da8e1dc538a4-Abstract-Conference.html" />
        </node>
        <node TEXT="Atomic Factuality Evaluation｜原子事实评价">
          <node TEXT="FActScore｜EMNLP 2023" LINK="https://aclanthology.org/2023.emnlp-main.741/" />
          <node TEXT="SAFE / LongFact｜NeurIPS 2024" LINK="https://proceedings.neurips.cc/paper_files/paper/2024/hash/937ae0e83eb08d2cb8627fe1def8c751-Abstract-Conference.html" />
        </node>
        <node TEXT="Conformal Prediction / Risk Control｜共形预测与风险控制">
          <node TEXT="Conformal Risk Control｜ICLR 2024" LINK="https://proceedings.iclr.cc/paper_files/paper/2024/hash/f3549ef9b5ff520a7e41ff3cc306ab2b-Abstract-Conference.html" />
          <node TEXT="Conformal LM｜ICLR 2024" LINK="https://proceedings.iclr.cc/paper_files/paper/2024/hash/31421b112e5f7faf4fc577b74e45dab2-Abstract-Conference.html" />
          <node TEXT="Conformal Factuality｜ICML 2024" LINK="https://proceedings.mlr.press/v235/mohri24a.html" />
          <node TEXT="CoFact｜ICLR 2026" LINK="https://proceedings.iclr.cc/paper_files/paper/2026/hash/bd074b828bbd782d4bece89306caff84-Abstract-Conference.html" />
          <node TEXT="DS-CP｜ICML 2026" LINK="https://proceedings.mlr.press/v306/lin26t.html" />
        </node>
      </node>
      <node TEXT="有限预算下如何发现候选">
        <node TEXT="昂贵目标优化、标签采集与多样候选生成，是相邻但不同的任务" />
        <node TEXT="Bayesian Optimization｜贝叶斯优化">
          <node TEXT="LogEI｜NeurIPS 2023" LINK="https://papers.neurips.cc/paper_files/paper/2023/hash/419f72cbd568ad62183f8132a3605a2a-Abstract-Conference.html" />
          <node TEXT="LLAMBO｜ICLR 2024" LINK="https://proceedings.iclr.cc/paper_files/paper/2024/hash/84b8d9fcb4e262fcd429544697e1e720-Abstract-Conference.html" />
          <node TEXT="p-KGFN｜ICML 2024" LINK="https://proceedings.mlr.press/v235/buathong24a.html" />
          <node TEXT="BOLT｜ICLR 2026" LINK="https://proceedings.iclr.cc/paper_files/paper/2026/hash/a4a3689e5ca538e340f58cdd29f513a9-Abstract-Conference.html" />
          <node TEXT="LGBO｜ICLR 2026" LINK="https://proceedings.iclr.cc/paper_files/paper/2026/hash/85381f4549b5ddf1d48e2e287d7d3d15-Abstract-Conference.html" />
        </node>
        <node TEXT="Active Learning｜主动学习">
          <node TEXT="BADGE｜ICLR 2020" LINK="https://openreview.net/pdf?id=ryghZJBKPS" />
          <node TEXT="Active DPO｜ICML 2024" LINK="https://proceedings.mlr.press/v235/muldrew24a.html" />
          <node TEXT="Gradient-free AL｜ICML 2025" LINK="https://proceedings.mlr.press/v267/zhang25db.html" />
        </node>
        <node TEXT="GFlowNets｜生成流网络">
          <node TEXT="Trajectory Balance｜NeurIPS 2022" LINK="https://papers.neurips.cc/paper_files/paper/2022/hash/27b51baca8377a0cf109f6ecc15a0f70-Abstract-Conference.html" />
          <node TEXT="MO-GFlowNets｜ICML 2023" LINK="https://proceedings.mlr.press/v202/jain23a.html" />
          <node TEXT="SAL｜ICLR 2025" LINK="https://proceedings.iclr.cc/paper_files/paper/2025/hash/000eba875068854d5ff003b1fa534cd6-Abstract-Conference.html" />
        </node>
      </node>
      <node TEXT="语言模型如何完成复杂任务">
        <node TEXT="工具行动 → 多路径搜索 → 多角色协作" />
        <node TEXT="Tool-Using Language Agents｜工具型语言智能体">
          <node TEXT="ReAct｜ICLR 2023" LINK="https://openreview.net/pdf?id=WE_vluYUL-X" />
          <node TEXT="Toolformer｜NeurIPS 2023" LINK="https://papers.nips.cc/paper/2023/hash/d842425e4bf79ba039352da0f658a906-Abstract-Conference.html" />
          <node TEXT="Reflexion｜NeurIPS 2023" LINK="https://papers.neurips.cc/paper_files/paper/2023/hash/1b44b878bb782e6954cd888628510e90-Abstract-Conference.html" />
        </node>
        <node TEXT="Search-Based LLM Reasoning｜基于搜索的语言模型推理">
          <node TEXT="Self-Consistency｜ICLR 2023" LINK="https://openreview.net/pdf?id=1PL1NIMMrw" />
          <node TEXT="Tree of Thoughts｜NeurIPS 2023" LINK="https://papers.nips.cc/paper/2023/hash/271db9922b8d1f4dd7aaef84ed5ac703-Abstract-Conference.html" />
          <node TEXT="LATS｜ICML 2024" LINK="https://proceedings.mlr.press/v235/zhou24r.html" />
        </node>
        <node TEXT="Multi-Agent LLM Systems｜多智能体语言系统">
          <node TEXT="MetaGPT｜ICLR 2024" LINK="https://proceedings.iclr.cc/paper_files/paper/2024/hash/6507b115562bb0a305f1958ccc87355a-Abstract-Conference.html" />
          <node TEXT="ReConcile｜ACL 2024" LINK="https://aclanthology.org/2024.acl-long.381/" />
        </node>
      </node>
      <node TEXT="结构化对象如何生成">
        <node TEXT="去噪、概率传输、奖励驱动构造，是三种并行生成路线" />
        <node TEXT="Diffusion Models｜扩散模型">
          <node TEXT="DDPM｜NeurIPS 2020" LINK="https://proceedings.neurips.cc/paper/2020/file/4c5bcfec8584af0d967f1ab10179ca4b-Paper.pdf" />
          <node TEXT="DiT｜ICCV 2023" LINK="https://openaccess.thecvf.com/content/ICCV2023/papers/Peebles_Scalable_Diffusion_Models_with_Transformers_ICCV_2023_paper.pdf" />
          <node TEXT="DiGress｜ICLR 2023" LINK="https://openreview.net/pdf?id=UaAD-Nu86WX" />
          <node TEXT="DiffCSP｜NeurIPS 2023" LINK="https://proceedings.neurips.cc/paper_files/paper/2023/hash/38b787fc530d0b31825827e2cc306656-Abstract.html" />
        </node>
        <node TEXT="Flow Matching｜流匹配">
          <node TEXT="Flow Matching｜ICLR 2023" LINK="https://openreview.net/forum?id=PqvMRDCJT9t" />
          <node TEXT="Riemannian FM｜ICLR 2024" LINK="https://openreview.net/forum?id=g7ohDlTITL" />
          <node TEXT="Discrete FM｜NeurIPS 2024" LINK="https://proceedings.neurips.cc/paper_files/paper/2024/hash/f0d629a734b56a642701bba7bc8bb3ed-Abstract-Conference.html" />
        </node>
        <node TEXT="GFlowNets｜生成流网络">
          <node TEXT="Trajectory Balance｜NeurIPS 2022" LINK="https://papers.neurips.cc/paper_files/paper/2022/hash/27b51baca8377a0cf109f6ecc15a0f70-Abstract-Conference.html" />
          <node TEXT="MO-GFlowNets｜ICML 2023" LINK="https://proceedings.mlr.press/v202/jain23a.html" />
          <node TEXT="SAL｜ICLR 2025" LINK="https://proceedings.iclr.cc/paper_files/paper/2025/hash/000eba875068854d5ff003b1fa534cd6-Abstract-Conference.html" />
        </node>
      </node>
      <node TEXT="科学系统如何表征与模拟">
        <node TEXT="对称性 → 场映射 → 时间变化 → 因果结构；各自建模目标不同" />
        <node TEXT="Equivariant Graph Learning｜等变图学习">
          <node TEXT="Equiformer｜ICLR 2023" LINK="https://openreview.net/pdf?id=KwmPfARgOTD" />
          <node TEXT="EquiformerV2｜ICLR 2024" LINK="https://proceedings.iclr.cc/paper_files/paper/2024/hash/ab12e8f3443c1a789f595b18d8c597b4-Abstract-Conference.html" />
        </node>
        <node TEXT="Neural Operators / PDE Surrogates｜神经算子与 PDE 代理">
          <node TEXT="FNO｜ICLR 2021" LINK="https://openreview.net/pdf/53c47f849d1cd4d21b865caf7d774e07a5c42aa4.pdf" />
          <node TEXT="GINO｜NeurIPS 2023" LINK="https://papers.neurips.cc/paper_files/paper/2023/hash/70518ea42831f02afc3a2828993935ad-Abstract-Conference.html" />
          <node TEXT="Transolver｜ICML 2024" LINK="https://proceedings.mlr.press/v235/wu24r.html" />
        </node>
        <node TEXT="Time-Series Forecasting / Foundation Models｜时间序列预测与基础模型">
          <node TEXT="PatchTST｜ICLR 2023" LINK="https://openreview.net/pdf?id=Jbdc0vTOcol" />
          <node TEXT="TimesFM｜ICML 2024" LINK="https://proceedings.mlr.press/v235/das24c.html" />
          <node TEXT="Time-MoE｜ICLR 2025" LINK="https://proceedings.iclr.cc/paper_files/paper/2025/hash/558d48c1f08675daa636e09bfe94a89e-Abstract-Conference.html" />
        </node>
        <node TEXT="Differentiable Causal Discovery｜可微因果发现">
          <node TEXT="DAGMA｜NeurIPS 2022" LINK="https://papers.neurips.cc/paper_files/paper/2022/hash/36e2967f87c3362e37cf988781a887ad-Abstract-Conference.html" />
          <node TEXT="SDCD｜ICML 2024" LINK="https://proceedings.mlr.press/v235/nazaret24a.html" />
        </node>
      </node>
      <node TEXT="模型如何用反馈改变行为">
        <node TEXT="偏好学习、能力迁移、选择性遗忘与部署适应，是四类不同更新目标" />
        <node TEXT="Preference Optimization｜偏好优化">
          <node TEXT="DPO｜NeurIPS 2023" LINK="https://proceedings.neurips.cc/paper_files/paper/2023/hash/a85b405ed65c6477a4fe8302b5e06ce7-Abstract.html" />
          <node TEXT="SimPO｜NeurIPS 2024" LINK="https://papers.nips.cc/paper_files/paper/2024/hash/e099c1c9699814af0be873a175361713-Abstract-Conference.html" />
          <node TEXT="KTO｜ICML 2024" LINK="https://proceedings.mlr.press/v235/ethayarajh24a.html" />
        </node>
        <node TEXT="Knowledge Distillation｜知识蒸馏">
          <node TEXT="MiniLLM｜ICLR 2024" LINK="https://proceedings.iclr.cc/paper_files/paper/2024/hash/8ac015d409635f196f9e3e9dcfb9a94e-Abstract-Conference.html" />
          <node TEXT="DistiLLM｜ICML 2024" LINK="https://proceedings.mlr.press/v235/ko24c.html" />
          <node TEXT="DistiLLM-2｜ICML 2025" LINK="https://proceedings.mlr.press/v267/ko25a.html" />
        </node>
        <node TEXT="Machine Unlearning｜机器遗忘">
          <node TEXT="LLM Unlearning｜NeurIPS 2024" LINK="https://proceedings.neurips.cc/paper_files/paper/2024/hash/be52acf6bccf4a8c0a90fe2f5cfcead3-Abstract-Conference.html" />
          <node TEXT="ILU｜ICML 2025" LINK="https://proceedings.mlr.press/v267/wang25en.html" />
        </node>
        <node TEXT="Test-Time Adaptation｜测试时适应">
          <node TEXT="SAR｜ICLR 2023" LINK="https://openreview.net/pdf?id=g2YraF75Tj" />
          <node TEXT="RoTTA｜CVPR 2023" LINK="https://openaccess.thecvf.com/content/CVPR2023/html/Yuan_Robust_Test-Time_Adaptation_in_Dynamic_Scenarios_CVPR_2023_paper.html" />
          <node TEXT="BiTTA｜ICML 2025" LINK="https://proceedings.mlr.press/v267/lee25g.html" />
        </node>
      </node>
    </node>
  </node>
</map>