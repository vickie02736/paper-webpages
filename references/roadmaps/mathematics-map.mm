<?xml version='1.0' encoding='utf-8'?>
<map version="1.0.1">
  <node TEXT="Mathematics 研究地图｜AI for Math、Math for AI 与纯数学近年进展｜截至 2026-10-25">
    <node TEXT="AI 相关论文以顶会与 Nature、Science、PNAS 等期刊为主；纯数学论文以 Annals of Mathematics、JAMS、Publ. IHÉS 等期刊为主。近年重大结果尚未正式发表时引用 arXiv，标签写“预印本”。以 Crossref、OpenReview、arXiv 与出版方页面为核验依据。" />
    <node TEXT="分类与阅读路线为本次整理，不表示严格引用继承或领域穷尽。纯数学部分只选取近十余年代表性突破，用于提供阅读入口，而非完整综述。" />
    <node TEXT="形式化定理证明｜机器怎样在形式系统中写出可被检验的证明？" POSITION="right" FOLDED="true">
      <node TEXT="Formal Libraries &amp; Benchmarks｜形式化数学库与评测" FOLDED="true">
        <node TEXT="原问题：怎样把数学知识写成机器可检验的形式，并为自动证明提供统一环境？" />
        <node TEXT="输入与输出：定义、定理与证明 → 证明助手中的形式化库 → 可交互的证明环境与基准" />
        <node TEXT="已有扩展轴：统一数学库、交互工具链、跨系统基准、检索增强证明" />
        <node TEXT="代表论文与阅读顺序">
          <node TEXT="mathlib｜CPP 2020｜较早入口" LINK="https://doi.org/10.1145/3372885.3373824">
            <node TEXT="The lean mathematical library" />
            <node TEXT="社区共建的 Lean 统一数学库，是当前 AI 形式化证明的主要语料。" />
          </node>
          <node TEXT="Lean 4｜CADE 2021｜较早入口" LINK="https://doi.org/10.1007/978-3-030-79876-5_37">
            <node TEXT="The Lean 4 Theorem Prover and Programming Language" />
            <node TEXT="证明助手与函数式编程语言合一，便于编写自动化策略。" />
          </node>
          <node TEXT="miniF2F｜ICLR 2022｜近年代表" LINK="https://openreview.net/forum?id=9ZPegFuFTFv">
            <node TEXT="MiniF2F: a cross-system benchmark for formal Olympiad-level mathematics" />
            <node TEXT="488 道奥赛与高中竞赛题，在多个证明助手中形式化。" />
          </node>
          <node TEXT="LeanDojo｜NeurIPS 2023｜已有扩展" LINK="https://proceedings.neurips.cc/paper_files/paper/2023/hash/4441469427094f8873d0fecb0c4e1cee-Abstract-Datasets_and_Benchmarks.html">
            <node TEXT="LeanDojo: Theorem Proving with Retrieval-Augmented Language Models" />
            <node TEXT="开源 Lean 交互工具链与数据集，并提出检索前提的证明器 ReProver。" />
          </node>
        </node>
      </node>
      <node TEXT="Neural Proof Search｜神经证明搜索" FOLDED="true">
        <node TEXT="原问题：怎样让语言模型在证明助手中逐步生成策略并搜索出完整证明？" />
        <node TEXT="输入与输出：形式化定理陈述 → 模型生成证明步骤 → 证明助手反馈 → 完整证明" />
        <node TEXT="已有扩展轴：在线训练、非形式化草图引导、证明器反馈强化学习" />
        <node TEXT="代表论文与阅读顺序">
          <node TEXT="GPT-f｜arXiv 2020｜预印本" LINK="https://arxiv.org/abs/2009.03393">
            <node TEXT="Generative Language Modeling for Automated Theorem Proving" />
            <node TEXT="首批把 Transformer 语言模型用于 Metamath 证明生成，部分证明被收录进官方库。" />
          </node>
          <node TEXT="HTPS｜NeurIPS 2022｜近年代表" LINK="https://proceedings.neurips.cc/paper_files/paper/2022/hash/a8901c5e85fb8e1823bbf0f755053672-Abstract-Conference.html">
            <node TEXT="HyperTree Proof Search for Neural Theorem Proving" />
            <node TEXT="借鉴 AlphaZero 的超树搜索与在线训练，提高形式化证明成功率。" />
          </node>
          <node TEXT="Draft, Sketch, and Prove｜ICLR 2023｜已有扩展" LINK="https://openreview.net/forum?id=SMa9EAovKMC">
            <node TEXT="Draft, Sketch, and Prove: Guiding Formal Theorem Provers with Informal Proofs" />
            <node TEXT="先写非形式化证明，再转成形式化草图，由自动证明器补全细节。" />
          </node>
          <node TEXT="DeepSeek-Prover-V1.5｜ICLR 2025｜已有扩展" LINK="https://proceedings.iclr.cc/paper_files/paper/2025/hash/b3b55c366d641c07180c40e4f978f311-Abstract-Conference.html">
            <node TEXT="DeepSeek-Prover-V1.5: Harnessing Proof Assistant Feedback for Reinforcement Learning and Monte-Carlo Tree Search" />
            <node TEXT="用证明助手反馈做强化学习，并结合蒙特卡洛树搜索探索证明路径。" />
          </node>
        </node>
      </node>
      <node TEXT="Olympiad Reasoning &amp; Autoformalization｜奥赛级推理与自动形式化" FOLDED="true">
        <node TEXT="原问题：怎样让机器解决奥赛级难题，并把自然语言数学自动翻译成形式化语言？" />
        <node TEXT="输入与输出：自然语言题目 → 形式化陈述或几何构造 → 符号引擎或证明助手验证" />
        <node TEXT="已有扩展轴：合成数据、自动形式化、强化学习自我对弈" />
        <node TEXT="代表论文与阅读顺序">
          <node TEXT="Autoformalization｜NeurIPS 2022｜较早入口" LINK="https://proceedings.neurips.cc/paper_files/paper/2022/hash/d0c6bc641a56bebee9d985b937307367-Abstract-Conference.html">
            <node TEXT="Autoformalization with Large Language Models" />
            <node TEXT="大型语言模型能把部分竞赛题陈述正确翻译成 Isabelle 形式化语言。" />
          </node>
          <node TEXT="AlphaGeometry｜Nature 2024｜近年代表" LINK="https://www.nature.com/articles/s41586-023-06747-5">
            <node TEXT="Solving olympiad geometry without human demonstrations" />
            <node TEXT="用上亿条合成数据训练语言模型提出辅助构造，结合符号推理求解几何题。" />
          </node>
          <node TEXT="AlphaProof｜Nature 2026｜2026 扩展" LINK="https://www.nature.com/articles/s41586-025-09833-y">
            <node TEXT="Olympiad-level formal mathematical reasoning with reinforcement learning" />
            <node TEXT="在 Lean 中自动形式化大量题目并做强化学习，IMO 2024 达到银牌水平。" />
          </node>
        </node>
      </node>
    </node>
    <node TEXT="数学推理大模型｜语言模型怎样可靠地解题与推理？" POSITION="right" FOLDED="true">
      <node TEXT="Math Pretraining &amp; Benchmarks｜数学预训练与评测" FOLDED="true">
        <node TEXT="原问题：怎样衡量并提升语言模型的数学解题能力？" />
        <node TEXT="输入与输出：数学题与解答语料 → 预训练或微调 → 最终答案准确率" />
        <node TEXT="已有扩展轴：竞赛级基准、数学语料继续预训练、验证器重排" />
        <node TEXT="代表论文与阅读顺序">
          <node TEXT="MATH｜NeurIPS 2021｜较早入口" LINK="https://datasets-benchmarks-proceedings.neurips.cc/paper_files/paper/2021/hash/be83ab3ecd0db773eb2dc1b0a17836a1-Abstract-round2.html">
            <node TEXT="Measuring Mathematical Problem Solving With the MATH Dataset" />
            <node TEXT="一万多道竞赛题与逐步解答，是数学推理的主要基准之一。" />
          </node>
          <node TEXT="GSM8K｜arXiv 2021｜预印本" LINK="https://arxiv.org/abs/2110.14168">
            <node TEXT="Training Verifiers to Solve Math Word Problems" />
            <node TEXT="发布 GSM8K 小学应用题集，并用验证器从多个候选解中挑选答案。" />
          </node>
          <node TEXT="Minerva｜NeurIPS 2022｜近年代表" LINK="https://proceedings.neurips.cc/paper_files/paper/2022/hash/18abbeef8cfe9203fdf9053c9c4fe191-Abstract-Conference.html">
            <node TEXT="Solving Quantitative Reasoning Problems with Language Models" />
            <node TEXT="在数学与科学网页、论文上继续预训练，大幅提升定量推理。" />
          </node>
          <node TEXT="Llemma｜ICLR 2024｜已有扩展" LINK="https://proceedings.iclr.cc/paper_files/paper/2024/hash/b225f5c7cd13615e9558c3931fa4e66f-Abstract-Conference.html">
            <node TEXT="Llemma: An Open Language Model for Mathematics" />
            <node TEXT="公开数学语料 Proof-Pile-2 与开源数学基础模型。" />
          </node>
        </node>
      </node>
      <node TEXT="Process Supervision &amp; Reward Models｜过程监督与奖励模型" FOLDED="true">
        <node TEXT="原问题：只看最终答案不够时，怎样评估和奖励每一步推理？" />
        <node TEXT="输入与输出：逐步解答 → 步骤级正确性标注或自动估计 → 过程奖励模型 → 选解或强化学习" />
        <node TEXT="已有扩展轴：人工步骤标注、自动过程标注、组相对策略优化" />
        <node TEXT="代表论文与阅读顺序">
          <node TEXT="Let's Verify｜ICLR 2024｜近年代表" LINK="https://proceedings.iclr.cc/paper_files/paper/2024/hash/aca97732e30bcf1303bc22ac3924fd16-Abstract-Conference.html">
            <node TEXT="Let's Verify Step by Step" />
            <node TEXT="发布 PRM800K 步骤级标注，过程监督优于只看结果的监督。" />
          </node>
          <node TEXT="Math-Shepherd｜ACL 2024｜已有扩展" LINK="https://aclanthology.org/2024.acl-long.510/">
            <node TEXT="Math-Shepherd: Verify and Reinforce LLMs Step-by-step without Human Annotations" />
            <node TEXT="用后续采样能否得到正确答案自动估计步骤质量，无需人工标注。" />
          </node>
          <node TEXT="DeepSeekMath｜arXiv 2024｜预印本" LINK="https://arxiv.org/abs/2402.03300">
            <node TEXT="DeepSeekMath: Pushing the Limits of Mathematical Reasoning in Open Language Models" />
            <node TEXT="大规模数学语料预训练，并提出组相对策略优化 GRPO。" />
          </node>
        </node>
      </node>
      <node TEXT="Reinforcement Learning &amp; Test-Time Compute｜强化学习与测试时计算" FOLDED="true">
        <node TEXT="原问题：怎样让模型通过自我改进和更多推理时计算解决更难的问题？" />
        <node TEXT="输入与输出：题目与可验证答案 → 采样推理链 → 奖励与更新或推理时搜索" />
        <node TEXT="已有扩展轴：自举推理、可验证奖励强化学习、计算最优的推理时搜索" />
        <node TEXT="代表论文与阅读顺序">
          <node TEXT="STaR｜NeurIPS 2022｜较早入口" LINK="https://proceedings.neurips.cc/paper_files/paper/2022/hash/639a9a172c044fbb64175b5fad42e9a5-Abstract-Conference.html">
            <node TEXT="STaR: Bootstrapping Reasoning With Reasoning" />
            <node TEXT="用模型自己生成且答案正确的推理链迭代微调自身。" />
          </node>
          <node TEXT="Test-time compute｜ICLR 2025｜近年代表" LINK="https://proceedings.iclr.cc/paper_files/paper/2025/hash/1b623663fd9b874366f3ce019fdfdd44-Abstract-Conference.html">
            <node TEXT="Scaling LLM Test-Time Compute Optimally Can be More Effective than Scaling Parameters for Reasoning" />
            <node TEXT="按题目难度分配推理时计算，可抵过更大的模型。" />
          </node>
          <node TEXT="DeepSeek-R1｜Nature 2025｜2026 扩展" LINK="https://www.nature.com/articles/s41586-025-09422-z">
            <node TEXT="DeepSeek-R1 incentivizes reasoning in LLMs through reinforcement learning" />
            <node TEXT="只用可验证奖励的大规模强化学习，就能激发长链推理与自我反思。" />
          </node>
        </node>
      </node>
    </node>
    <node TEXT="AI 辅助数学发现｜AI 怎样帮助提出猜想、找到构造和新算法？" POSITION="right" FOLDED="true">
      <node TEXT="ML-Guided Conjectures｜机器学习引导猜想" FOLDED="true">
        <node TEXT="原问题：怎样用机器学习从数学数据中发现值得证明的规律？" />
        <node TEXT="输入与输出：数学对象的大量实例与不变量 → 模型发现关联或模式 → 人类提出并证明猜想" />
        <node TEXT="已有扩展轴：归因分析引导直觉、自动生成公式猜想、统计模式发现" />
        <node TEXT="代表论文与阅读顺序">
          <node TEXT="Ramanujan Machine｜Nature 2021｜较早入口" LINK="https://www.nature.com/articles/s41586-021-03229-4">
            <node TEXT="Generating conjectures on fundamental constants with the Ramanujan Machine" />
            <node TEXT="自动搜索连分数公式，提出关于基本常数的新猜想。" />
          </node>
          <node TEXT="AI-guided intuition｜Nature 2021｜近年代表" LINK="https://www.nature.com/articles/s41586-021-04086-x">
            <node TEXT="Advancing mathematics by guiding human intuition with AI" />
            <node TEXT="在纽结理论与表示论中用机器学习指引数学家发现新定理。" />
          </node>
          <node TEXT="Murmurations｜Experimental Mathematics 2025｜已有扩展" LINK="https://doi.org/10.1080/10586458.2024.2382361">
            <node TEXT="Murmurations of elliptic curves" />
            <node TEXT="机器学习实验揭示椭圆曲线系数平均值中的振荡现象。" />
          </node>
        </node>
      </node>
      <node TEXT="Program Search for Constructions｜程序搜索与组合构造" FOLDED="true">
        <node TEXT="原问题：怎样自动找到打破已知界的组合构造或反例？" />
        <node TEXT="输入与输出：评分函数 → 搜索候选对象或生成它们的程序 → 更好的构造或反例" />
        <node TEXT="已有扩展轴：强化学习搜索反例、语言模型演化程序、局部搜索与生成模型交替" />
        <node TEXT="代表论文与阅读顺序">
          <node TEXT="Wagner constructions｜arXiv 2021｜预印本" LINK="https://arxiv.org/abs/2104.14516">
            <node TEXT="Constructions in combinatorics via neural networks" />
            <node TEXT="用交叉熵强化学习自动找到多个图论猜想的反例。" />
          </node>
          <node TEXT="FunSearch｜Nature 2024｜近年代表" LINK="https://www.nature.com/articles/s41586-023-06924-6">
            <node TEXT="Mathematical discoveries from program search with large language models" />
            <node TEXT="语言模型与评估器迭代演化程序，得到帽集问题的新构造。" />
          </node>
          <node TEXT="PatternBoost｜arXiv 2024｜预印本" LINK="https://arxiv.org/abs/2411.00566">
            <node TEXT="PatternBoost: Constructions in Mathematics with a Little Help from AI" />
            <node TEXT="交替使用局部搜索与 Transformer 生成，构造极值组合对象。" />
          </node>
          <node TEXT="AlphaEvolve｜arXiv 2025｜预印本" LINK="https://arxiv.org/abs/2506.13131">
            <node TEXT="AlphaEvolve: A coding agent for scientific and algorithmic discovery" />
            <node TEXT="演化式编码智能体改进 4×4 复矩阵乘法与多个数学构造的已知界。" />
          </node>
        </node>
      </node>
      <node TEXT="Algorithm &amp; Symbolic Discovery｜算法与符号发现" FOLDED="true">
        <node TEXT="原问题：机器能否发现比人类设计更好的算法，或完成符号数学推导？" />
        <node TEXT="输入与输出：问题的形式化表示 → 强化学习或序列模型 → 新算法、积分或李雅普诺夫函数" />
        <node TEXT="已有扩展轴：张量分解游戏、汇编级程序搜索、符号序列到序列模型" />
        <node TEXT="代表论文与阅读顺序">
          <node TEXT="Symbolic integration｜ICLR 2020｜较早入口" LINK="https://openreview.net/forum?id=S1eZYeHFDS">
            <node TEXT="Deep Learning For Symbolic Mathematics" />
            <node TEXT="把积分与常微分方程求解当作序列翻译任务。" />
          </node>
          <node TEXT="AlphaTensor｜Nature 2022｜近年代表" LINK="https://www.nature.com/articles/s41586-022-05172-4">
            <node TEXT="Discovering faster matrix multiplication algorithms with reinforcement learning" />
            <node TEXT="把矩阵乘法算法设计变成张量分解游戏，刷新若干规模的最少乘法数。" />
          </node>
          <node TEXT="AlphaDev｜Nature 2023｜已有扩展" LINK="https://www.nature.com/articles/s41586-023-06004-9">
            <node TEXT="Faster sorting algorithms discovered using deep reinforcement learning" />
            <node TEXT="在汇编层面搜索出更快的短序列排序算法，被并入 LLVM 标准库。" />
          </node>
          <node TEXT="Lyapunov functions｜NeurIPS 2024｜已有扩展" LINK="https://proceedings.neurips.cc/paper_files/paper/2024/hash/aa280e73c4e23e765fde232571116d3b-Abstract-Conference.html">
            <node TEXT="Global Lyapunov functions: a long-standing open problem in mathematics, with symbolic transformers" />
            <node TEXT="用合成数据训练 Transformer 为非多项式动力系统寻找李雅普诺夫函数。" />
          </node>
        </node>
      </node>
    </node>
    <node TEXT="优化理论｜训练算法为什么能收敛，何时稳定？" POSITION="right" FOLDED="true">
      <node TEXT="Adaptive Optimizers｜自适应优化器" FOLDED="true">
        <node TEXT="原问题：自适应学习率方法在什么条件下收敛，怎样正确地加入正则？" />
        <node TEXT="输入与输出：随机梯度 → 一阶与二阶矩估计 → 参数更新与收敛保证" />
        <node TEXT="已有扩展轴：收敛反例与修正、权重衰减解耦、非凸收敛分析" />
        <node TEXT="代表论文与阅读顺序">
          <node TEXT="Adam｜ICLR 2015｜较早入口" LINK="https://arxiv.org/abs/1412.6980">
            <node TEXT="Adam: A Method for Stochastic Optimization" />
            <node TEXT="用梯度一阶与二阶矩的指数滑动估计自适应调整步长。" />
          </node>
          <node TEXT="AMSGrad｜ICLR 2018｜近年代表" LINK="https://openreview.net/forum?id=ryQu7f-RZ">
            <node TEXT="On the Convergence of Adam and Beyond" />
            <node TEXT="构造 Adam 不收敛的反例，并提出带长期记忆的修正 AMSGrad。" />
          </node>
          <node TEXT="AdamW｜ICLR 2019｜已有扩展" LINK="https://openreview.net/forum?id=Bkg6RiCqY7">
            <node TEXT="Decoupled Weight Decay Regularization" />
            <node TEXT="指出 Adam 中 L2 正则不等于权重衰减，并将两者解耦。" />
          </node>
        </node>
      </node>
      <node TEXT="Edge of Stability &amp; Sharpness｜稳定性边缘与锐度" FOLDED="true">
        <node TEXT="原问题：大学习率下训练为何仍能稳定，损失曲面的锐度与泛化有什么关系？" />
        <node TEXT="输入与输出：损失曲面的 Hessian 与学习率 → 训练动力学与锐度变化 → 稳定性与泛化" />
        <node TEXT="已有扩展轴：经验现象刻画、锐度最小化、自稳定机制的理论解释" />
        <node TEXT="代表论文与阅读顺序">
          <node TEXT="Edge of Stability｜ICLR 2021｜较早入口" LINK="https://openreview.net/forum?id=jh-rTtvkGeM">
            <node TEXT="Gradient Descent on Neural Networks Typically Occurs at the Edge of Stability" />
            <node TEXT="全批量梯度下降中锐度会上升到 2/学习率附近并停留。" />
          </node>
          <node TEXT="SAM｜ICLR 2021｜近年代表" LINK="https://openreview.net/forum?id=6Tm1mposlrM">
            <node TEXT="Sharpness-Aware Minimization for Efficiently Improving Generalization" />
            <node TEXT="最小化邻域内最坏损失，寻找更平坦的极小值。" />
          </node>
          <node TEXT="Self-stabilization｜ICLR 2023｜已有扩展" LINK="https://openreview.net/forum?id=nhKHA59gXz">
            <node TEXT="Self-Stabilization: The Implicit Bias of Gradient Descent at the Edge of Stability" />
            <node TEXT="用三阶项解释梯度下降如何自动把锐度拉回稳定阈值。" />
          </node>
        </node>
      </node>
      <node TEXT="Implicit Bias &amp; Overparameterization｜隐式偏置与过参数化" FOLDED="true">
        <node TEXT="原问题：过参数化网络的非凸训练为什么能找到全局最优，又偏好什么样的解？" />
        <node TEXT="输入与输出：过参数化模型与梯度下降 → 收敛速率与极限解的刻画" />
        <node TEXT="已有扩展轴：可分数据上的最大间隔偏置、宽网络全局收敛、深层网络收敛" />
        <node TEXT="代表论文与阅读顺序">
          <node TEXT="Implicit bias｜JMLR 2018｜较早入口" LINK="https://jmlr.org/papers/v19/18-188.html">
            <node TEXT="The Implicit Bias of Gradient Descent on Separable Data" />
            <node TEXT="线性可分数据上梯度下降方向收敛到最大间隔解。" />
          </node>
          <node TEXT="GD over-parameterized｜ICLR 2019｜近年代表" LINK="https://openreview.net/forum?id=S1eK3i09YQ">
            <node TEXT="Gradient Descent Provably Optimizes Over-parameterized Neural Networks" />
            <node TEXT="足够宽的两层 ReLU 网络上梯度下降线性收敛到零训练损失。" />
          </node>
          <node TEXT="Over-parameterization theory｜ICML 2019｜已有扩展" LINK="https://proceedings.mlr.press/v97/allen-zhu19a.html">
            <node TEXT="A Convergence Theory for Deep Learning via Over-Parameterization" />
            <node TEXT="把全局收敛结果推广到深层全连接、卷积和残差网络。" />
          </node>
        </node>
      </node>
    </node>
    <node TEXT="泛化与深度学习理论｜过参数化网络为什么能泛化？" POSITION="right" FOLDED="true">
      <node TEXT="Infinite-Width Limits｜无限宽极限" FOLDED="true">
        <node TEXT="原问题：网络宽度趋于无穷时训练动力学会怎样，何时还会学习特征？" />
        <node TEXT="输入与输出：网络参数化方式与宽度 → 极限动力学（核或特征学习） → 泛化与超参数迁移" />
        <node TEXT="已有扩展轴：神经切线核、线性化、保持特征学习的参数化" />
        <node TEXT="代表论文与阅读顺序">
          <node TEXT="NTK｜NeurIPS 2018｜较早入口" LINK="https://proceedings.neurips.cc/paper_files/paper/2018/hash/5a4be1fa34e62bb8a6ec6b91d2462f5a-Abstract.html">
            <node TEXT="Neural Tangent Kernel: Convergence and Generalization in Neural Networks" />
            <node TEXT="无限宽网络的梯度下降等价于固定核的核回归。" />
          </node>
          <node TEXT="Wide networks as linear models｜NeurIPS 2019｜近年代表" LINK="https://proceedings.neurips.cc/paper_files/paper/2019/hash/0d1a9651497a38d8b1c3871c84528bd4-Abstract.html">
            <node TEXT="Wide Neural Networks of Any Depth Evolve as Linear Models Under Gradient Descent" />
            <node TEXT="宽网络训练中可用初始点处的一阶泰勒展开近似。" />
          </node>
          <node TEXT="Tensor Programs IV｜ICML 2021｜已有扩展" LINK="https://proceedings.mlr.press/v139/yang21c.html">
            <node TEXT="Tensor Programs IV: Feature Learning in Infinite-Width Neural Networks" />
            <node TEXT="指出 NTK 极限不学习特征，提出保持特征学习的最大更新参数化。" />
          </node>
        </node>
      </node>
      <node TEXT="Double Descent &amp; Benign Overfitting｜双下降与良性过拟合" FOLDED="true">
        <node TEXT="原问题：完全拟合含噪训练数据的模型为什么还能在测试集上表现良好？" />
        <node TEXT="输入与输出：模型复杂度、样本数与噪声 → 测试误差曲线与泛化界" />
        <node TEXT="已有扩展轴：随机标签实验、双下降曲线、线性模型中的精确刻画" />
        <node TEXT="代表论文与阅读顺序">
          <node TEXT="Rethinking generalization｜ICLR 2017｜较早入口" LINK="https://openreview.net/forum?id=Sy8gdB9xx">
            <node TEXT="Understanding deep learning requires rethinking generalization" />
            <node TEXT="网络能记住随机标签，说明传统复杂度度量无法解释泛化。" />
          </node>
          <node TEXT="Double descent｜PNAS 2019｜近年代表" LINK="https://doi.org/10.1073/pnas.1903070116">
            <node TEXT="Reconciling modern machine-learning practice and the classical bias–variance trade-off" />
            <node TEXT="提出越过插值阈值后测试误差再次下降的双下降曲线。" />
          </node>
          <node TEXT="Benign overfitting｜PNAS 2020｜已有扩展" LINK="https://doi.org/10.1073/pnas.1907378117">
            <node TEXT="Benign overfitting in linear regression" />
            <node TEXT="给出线性回归中插值解仍能良好泛化的充要条件。" />
          </node>
          <node TEXT="Deep double descent｜ICLR 2020｜已有扩展" LINK="https://openreview.net/forum?id=B1g5sA4twr">
            <node TEXT="Deep Double Descent: Where Bigger Models and More Data Hurt" />
            <node TEXT="在现代深度网络中观察到随模型规模、训练轮数变化的双下降。" />
          </node>
        </node>
      </node>
      <node TEXT="Grokking &amp; Scaling Laws｜顿悟与缩放律" FOLDED="true">
        <node TEXT="原问题：泛化何时突然出现，性能怎样随模型、数据与计算量变化？" />
        <node TEXT="输入与输出：训练过程或模型与数据规模 → 泛化时间点或幂律关系 → 机制解释与最优分配" />
        <node TEXT="已有扩展轴：机制可解释性、计算最优缩放、缩放律的理论解释" />
        <node TEXT="代表论文与阅读顺序">
          <node TEXT="Grokking｜arXiv 2022｜预印本" LINK="https://arxiv.org/abs/2201.02177">
            <node TEXT="Grokking: Generalization Beyond Overfitting on Small Algorithmic Datasets" />
            <node TEXT="小型算法数据集上网络在过拟合很久之后突然泛化。" />
          </node>
          <node TEXT="Grokking progress measures｜ICLR 2023｜近年代表" LINK="https://openreview.net/forum?id=9XFSbDPmdW">
            <node TEXT="Progress measures for grokking via mechanistic interpretability" />
            <node TEXT="逆向工程出模加法网络使用的傅里叶算法，解释顿悟过程。" />
          </node>
          <node TEXT="Chinchilla｜NeurIPS 2022｜已有扩展" LINK="https://proceedings.neurips.cc/paper_files/paper/2022/hash/c1e2faff6f588870935f114ebe04a3e5-Abstract-Conference.html">
            <node TEXT="An empirical analysis of compute-optimal large language model training" />
            <node TEXT="给定计算预算时，模型参数与训练词元数应同比增长。" />
          </node>
          <node TEXT="Explaining scaling laws｜PNAS 2024｜已有扩展" LINK="https://doi.org/10.1073/pnas.2311878121">
            <node TEXT="Explaining neural scaling laws" />
            <node TEXT="区分方差受限与分辨率受限两种区间，从理论上解释幂律缩放。" />
          </node>
        </node>
      </node>
    </node>
    <node TEXT="概率与生成模型的数学｜生成模型背后的随机过程与传输理论是什么？" POSITION="right" FOLDED="true">
      <node TEXT="Score-Based Diffusion｜分数与扩散过程" FOLDED="true">
        <node TEXT="原问题：怎样通过逆转加噪过程从噪声中生成数据？" />
        <node TEXT="输入与输出：数据分布 → 前向加噪过程与分数估计 → 逆向随机或常微分方程采样" />
        <node TEXT="已有扩展轴：分数匹配、连续时间 SDE 统一、概率流常微分方程" />
        <node TEXT="代表论文与阅读顺序">
          <node TEXT="Score matching｜JMLR 2005｜较早入口" LINK="https://jmlr.org/papers/v6/hyvarinen05a.html">
            <node TEXT="Estimation of Non-Normalized Statistical Models by Score Matching" />
            <node TEXT="匹配对数密度的梯度，绕开难以计算的归一化常数。" />
          </node>
          <node TEXT="Score SDE｜ICLR 2021｜近年代表" LINK="https://openreview.net/forum?id=PxTIG12RRHS">
            <node TEXT="Score-Based Generative Modeling through Stochastic Differential Equations" />
            <node TEXT="用连续时间 SDE 统一扩散与分数模型，并给出概率流常微分方程。" />
          </node>
          <node TEXT="Sampling is as easy as learning the score｜ICLR 2023｜已有扩展" LINK="https://openreview.net/forum?id=zyLVMgsZ0U_">
            <node TEXT="Sampling is as easy as learning the score: theory for diffusion models with minimal data assumptions" />
            <node TEXT="只要分数估计足够准，扩散模型就能以多项式复杂度采样。" />
          </node>
        </node>
      </node>
      <node TEXT="Optimal Transport &amp; Flow Matching｜最优传输与流匹配" FOLDED="true">
        <node TEXT="原问题：怎样学习一条把简单分布连续搬运到数据分布的路径？" />
        <node TEXT="输入与输出：源分布与目标分布 → 传输映射或速度场 → 常微分方程采样" />
        <node TEXT="已有扩展轴：动态最优传输、熵正则化、直线化路径与随机插值" />
        <node TEXT="代表论文与阅读顺序">
          <node TEXT="Benamou–Brenier｜Numerische Mathematik 2000｜较早入口" LINK="https://doi.org/10.1007/s002110050002">
            <node TEXT="A computational fluid mechanics solution to the Monge-Kantorovich mass transfer problem" />
            <node TEXT="把最优传输写成沿时间演化的密度与速度场的最小动能问题。" />
          </node>
          <node TEXT="Sinkhorn distances｜NeurIPS 2013｜较早入口" LINK="https://proceedings.neurips.cc/paper_files/paper/2013/hash/af21d0c97db2e27e13572cbf59eb343d-Abstract.html">
            <node TEXT="Sinkhorn Distances: Lightspeed Computation of Optimal Transport" />
            <node TEXT="加入熵正则后可用 Sinkhorn 迭代快速近似最优传输。" />
          </node>
          <node TEXT="Rectified Flow｜ICLR 2023｜已有扩展" LINK="https://openreview.net/forum?id=XVjTT1nw5z">
            <node TEXT="Flow Straight and Fast: Learning to Generate and Transfer Data with Rectified Flow" />
            <node TEXT="学习尽量走直线的传输路径，便于少步采样；与同期的流匹配思路相近。" />
          </node>
          <node TEXT="Stochastic interpolants｜ICLR 2023｜已有扩展" LINK="https://openreview.net/forum?id=li7qeBbCR1t">
            <node TEXT="Building Normalizing Flows with Stochastic Interpolants" />
            <node TEXT="用两分布之间的随机插值定义速度场，统一流与扩散。" />
          </node>
        </node>
      </node>
      <node TEXT="Convergence Theory of Diffusion Models｜扩散模型收敛理论" FOLDED="true">
        <node TEXT="原问题：扩散模型的采样误差与样本复杂度怎样依赖维数和分数误差？" />
        <node TEXT="输入与输出：分数估计误差与数据假设 → 采样分布与目标分布的距离界" />
        <node TEXT="已有扩展轴：多项式复杂度、对维数的近线性依赖、低维结构下的统计率" />
        <node TEXT="代表论文与阅读顺序">
          <node TEXT="Polynomial convergence｜NeurIPS 2022｜较早入口" LINK="https://proceedings.neurips.cc/paper_files/paper/2022/hash/8ff87c96935244b63503f542472462b3-Abstract-Conference.html">
            <node TEXT="Convergence for score-based generative modeling with polynomial complexity" />
            <node TEXT="首批给出分数生成模型多项式复杂度的收敛保证。" />
          </node>
          <node TEXT="Low-dimensional data｜ICML 2023｜近年代表" LINK="https://proceedings.mlr.press/v202/chen23o.html">
            <node TEXT="Score Approximation, Estimation and Distribution Recovery of Diffusion Models on Low-Dimensional Data" />
            <node TEXT="数据位于低维子空间时，样本复杂度取决于内在维数。" />
          </node>
          <node TEXT="Nearly d-linear bounds｜ICLR 2024｜已有扩展" LINK="https://proceedings.iclr.cc/paper_files/paper/2024/hash/9edce07129d2ec4c511a8783eb3d81b5-Abstract-Conference.html">
            <node TEXT="Nearly $d$-Linear Convergence Bounds for Diffusion Models via Stochastic Localization" />
            <node TEXT="用随机局部化给出对维数近线性依赖的收敛界。" />
          </node>
        </node>
      </node>
    </node>
    <node TEXT="几何与对称性｜怎样把对称性与几何结构写进模型？" POSITION="right" FOLDED="true">
      <node TEXT="Geometric Deep Learning｜几何深度学习" FOLDED="true">
        <node TEXT="原问题：怎样把卷积推广到图、流形和一般对称群上？" />
        <node TEXT="输入与输出：定义在图、流形或齐性空间上的信号 → 等变或不变的网络层" />
        <node TEXT="已有扩展轴：非欧数据、群卷积、齐性空间上的一般理论" />
        <node TEXT="代表论文与阅读顺序">
          <node TEXT="Geometric deep learning｜IEEE Signal Processing Magazine 2017｜较早入口" LINK="https://doi.org/10.1109/msp.2017.2693418">
            <node TEXT="Geometric Deep Learning: Going beyond Euclidean data" />
            <node TEXT="系统梳理图与流形上的深度学习方法。" />
          </node>
          <node TEXT="G-CNN｜ICML 2016｜近年代表" LINK="https://proceedings.mlr.press/v48/cohenc16.html">
            <node TEXT="Group Equivariant Convolutional Networks" />
            <node TEXT="把卷积推广到旋转、反射等离散群，提高参数效率。" />
          </node>
          <node TEXT="Homogeneous spaces｜NeurIPS 2019｜已有扩展" LINK="https://proceedings.neurips.cc/paper_files/paper/2019/hash/b9cfe8b6042cf759dc4c0cccb27a6737-Abstract.html">
            <node TEXT="A General Theory of Equivariant CNNs on Homogeneous Spaces" />
            <node TEXT="用纤维丛与诱导表示统一刻画齐性空间上的等变卷积。" />
          </node>
        </node>
      </node>
      <node TEXT="Equivariant Networks &amp; Universality｜等变网络与通用性" FOLDED="true">
        <node TEXT="原问题：满足物理对称性的网络能否表示所有等变函数，怎样高效实现？" />
        <node TEXT="输入与输出：带坐标的点集或图 → E(n) 等变消息传递或标量构造 → 等变输出" />
        <node TEXT="已有扩展轴：高效 E(n) 等变层、基于不变标量的通用构造、通用逼近定理" />
        <node TEXT="代表论文与阅读顺序">
          <node TEXT="Universal equivariant GNNs｜NeurIPS 2019｜较早入口" LINK="https://proceedings.neurips.cc/paper_files/paper/2019/hash/ea9268cb43f55d1d12380fb6ea5bf572-Abstract.html">
            <node TEXT="Universal Invariant and Equivariant Graph Neural Networks" />
            <node TEXT="证明一类不变与等变图网络对连续函数具有通用逼近能力。" />
          </node>
          <node TEXT="EGNN｜ICML 2021｜近年代表" LINK="https://proceedings.mlr.press/v139/satorras21a.html">
            <node TEXT="E(n) Equivariant Graph Neural Networks" />
            <node TEXT="只用相对距离更新坐标与特征，简洁实现 E(n) 等变。" />
          </node>
          <node TEXT="Scalars are universal｜NeurIPS 2021｜已有扩展" LINK="https://proceedings.neurips.cc/paper_files/paper/2021/hash/f1b0775946bc0329b35b823b86eeb5f5-Abstract.html">
            <node TEXT="Scalars are universal: Equivariant machine learning, structured like classical physics" />
            <node TEXT="证明任意 O(d) 等变函数都可由内积等不变标量构造。" />
          </node>
        </node>
      </node>
      <node TEXT="Expressive Power of GNNs｜图神经网络的表达能力" FOLDED="true">
        <node TEXT="原问题：图神经网络能区分哪些图，怎样突破 Weisfeiler–Leman 检验的限制？" />
        <node TEXT="输入与输出：图结构 → 消息传递或高阶网络 → 区分非同构图的能力" />
        <node TEXT="已有扩展轴：与 WL 检验等价、高阶 WL、可证明更强的架构" />
        <node TEXT="代表论文与阅读顺序">
          <node TEXT="GIN｜ICLR 2019｜较早入口" LINK="https://openreview.net/forum?id=ryGs6iA5Km">
            <node TEXT="How Powerful are Graph Neural Networks?" />
            <node TEXT="证明消息传递网络至多与 1-WL 检验一样强，并给出达到上界的 GIN。" />
          </node>
          <node TEXT="k-GNN｜AAAI 2019｜近年代表" LINK="https://doi.org/10.1609/aaai.v33i01.33014602">
            <node TEXT="Weisfeiler and Leman Go Neural: Higher-order Graph Neural Networks" />
            <node TEXT="建立 GNN 与 WL 的等价性，并提出对应高阶 WL 的 k-GNN。" />
          </node>
          <node TEXT="Provably powerful graph networks｜NeurIPS 2019｜已有扩展" LINK="https://proceedings.neurips.cc/paper_files/paper/2019/hash/bb04af0f7ecaee4aae62035497da1387-Abstract.html">
            <node TEXT="Provably Powerful Graph Networks" />
            <node TEXT="用矩阵乘法构造达到 3-WL 表达能力的图网络。" />
          </node>
        </node>
      </node>
    </node>
    <node TEXT="组合与加性组合｜离散结构中的极值与随机性边界在哪里？" POSITION="right" FOLDED="true">
      <node TEXT="Ramsey Theory｜Ramsey 理论" FOLDED="true">
        <node TEXT="原问题：多大的完全图在任意二染色下必然出现单色完全子图？" />
        <node TEXT="研究对象与结论：对角与非对角 Ramsey 数 → 上下界的指数或多项式阶改进" />
        <node TEXT="已有扩展轴：对角 Ramsey 数的指数改进、非对角 Ramsey 数的精确阶" />
        <node TEXT="代表论文与阅读顺序">
          <node TEXT="Diagonal Ramsey 2009｜Annals of Mathematics 2009｜较早入口" LINK="https://doi.org/10.4007/annals.2009.170.941">
            <node TEXT="A new upper bound for diagonal Ramsey numbers" />
            <node TEXT="对 Erdős–Szekeres 上界做出超多项式改进。" />
          </node>
          <node TEXT="Exponential Ramsey improvement｜Annals of Mathematics 2026｜近年代表" LINK="https://doi.org/10.4007/annals.2026.203.3.4">
            <node TEXT="An exponential improvement for diagonal Ramsey" />
            <node TEXT="首次把对角 Ramsey 数上界的底数从 4 降到 4−ε。" />
          </node>
          <node TEXT="r(4,t)｜Annals of Mathematics 2024｜已有扩展" LINK="https://doi.org/10.4007/annals.2024.199.2.8">
            <node TEXT="The asymptotics of r(4,t)" />
            <node TEXT="确定 r(4,t) 的阶，上下界只差对数因子。" />
          </node>
        </node>
      </node>
      <node TEXT="Thresholds &amp; Extremal Set Systems｜阈值与极值集合系统" FOLDED="true">
        <node TEXT="原问题：随机结构何时出现某种性质，集合系统中的极值结构有多大？" />
        <node TEXT="研究对象与结论：单调性质的阈值、向日葵、并封闭族与超立方体子图 → 新的界与猜想的证明" />
        <node TEXT="已有扩展轴：分数期望阈值、扩散引理改进、熵方法、谱方法" />
        <node TEXT="代表论文与阅读顺序">
          <node TEXT="Sensitivity conjecture｜Annals of Mathematics 2019｜较早入口" LINK="https://doi.org/10.4007/annals.2019.190.3.6">
            <node TEXT="Induced subgraphs of hypercubes and a proof of the Sensitivity Conjecture" />
            <node TEXT="用带符号邻接矩阵的两页证明解决了敏感度猜想。" />
          </node>
          <node TEXT="Sunflower lemma｜Annals of Mathematics 2021｜近年代表" LINK="https://doi.org/10.4007/annals.2021.194.3.5">
            <node TEXT="Improved bounds for the sunflower lemma" />
            <node TEXT="把 Erdős–Rado 向日葵引理的界改进到约 (log k)^k 量级。" />
          </node>
          <node TEXT="Fractional expectation thresholds｜Annals of Mathematics 2021｜近年代表" LINK="https://doi.org/10.4007/annals.2021.194.2.2">
            <node TEXT="Thresholds versus fractional expectation-thresholds" />
            <node TEXT="证明 Talagrand 的分数期望阈值猜想，是 Kahn–Kalai 猜想的弱形式。" />
          </node>
          <node TEXT="Union-closed sets｜arXiv 2022｜预印本" LINK="https://arxiv.org/abs/2211.09055">
            <node TEXT="A constant lower bound for the union-closed sets conjecture" />
            <node TEXT="用信息熵方法首次给出并封闭集合猜想的常数比例下界。" />
          </node>
          <node TEXT="Kahn–Kalai conjecture｜Journal of the American Mathematical Society 2024｜已有扩展" LINK="https://doi.org/10.1090/jams/1028">
            <node TEXT="A proof of the Kahn–Kalai conjecture" />
            <node TEXT="证明阈值至多是期望阈值的对数倍，解决 Kahn–Kalai 猜想。" />
          </node>
        </node>
      </node>
      <node TEXT="Additive Combinatorics｜加性组合" FOLDED="true">
        <node TEXT="原问题：稠密整数集合或向量空间子集中何时必然出现加法结构？" />
        <node TEXT="研究对象与结论：无等差数列集合、小倍集集合 → 密度上界与结构定理" />
        <node TEXT="已有扩展轴：拟多项式界、多项式 Freiman–Ruzsa 猜想、任意长度等差数列" />
        <node TEXT="代表论文与阅读顺序">
          <node TEXT="Kelley–Meka｜FOCS 2023｜近年代表" LINK="https://doi.org/10.1109/focs57990.2023.00059">
            <node TEXT="Strong Bounds for 3-Progressions" />
            <node TEXT="把无三项等差数列集合的密度上界改进到拟多项式级别。" />
          </node>
          <node TEXT="Marton's conjecture｜Annals of Mathematics 2025｜已有扩展" LINK="https://doi.org/10.4007/annals.2025.201.2.5">
            <node TEXT="On a conjecture of Marton" />
            <node TEXT="在特征 2 情形证明多项式 Freiman–Ruzsa 猜想，并很快完成 Lean 形式化。" />
          </node>
          <node TEXT="Szemerédi bounds｜arXiv 2024｜预印本" LINK="https://arxiv.org/abs/2402.17995">
            <node TEXT="Improved Bounds for Szemerédi's Theorem" />
            <node TEXT="对 k≥5 的 Szemerédi 定理给出首个类型更强的定量改进。" />
          </node>
        </node>
      </node>
    </node>
    <node TEXT="数论、几何与分析｜近年哪些长期猜想取得了突破？" POSITION="right" FOLDED="true">
      <node TEXT="Analytic Number Theory｜解析数论" FOLDED="true">
        <node TEXT="原问题：素数之间的间隔与分布能被控制到什么程度？" />
        <node TEXT="研究对象与结论：素数间隔、狄利克雷多项式与零点密度 → 新的定量结论" />
        <node TEXT="已有扩展轴：有界间隔、筛法改进、大值估计" />
        <node TEXT="代表论文与阅读顺序">
          <node TEXT="Bounded prime gaps｜Annals of Mathematics 2014｜较早入口" LINK="https://doi.org/10.4007/annals.2014.179.3.7">
            <node TEXT="Bounded gaps between primes" />
            <node TEXT="首次证明存在无穷多对间隔不超过七千万的素数。" />
          </node>
          <node TEXT="Small prime gaps｜Annals of Mathematics 2015｜近年代表" LINK="https://doi.org/10.4007/annals.2015.181.1.7">
            <node TEXT="Small gaps between primes" />
            <node TEXT="用多维筛法把间隔降到 600，并推广到多个素数。" />
          </node>
          <node TEXT="Large value estimates｜Annals of Mathematics 2026｜2026 扩展" LINK="https://doi.org/10.4007/annals.2026.203.2.6">
            <node TEXT="New large value estimates for Dirichlet polynomials" />
            <node TEXT="改进 Ingham 以来的零点密度估计，推进短区间素数分布。" />
          </node>
          <node TEXT="Symmetric power functoriality｜Publications mathématiques de l'IHÉS 2021｜已有扩展" LINK="https://doi.org/10.1007/s10240-021-00127-3">
            <node TEXT="Symmetric power functoriality for holomorphic modular forms" />
            <node TEXT="证明全纯模形式的对称幂函子性，属于朗兰兹纲领的重要进展。" />
          </node>
        </node>
      </node>
      <node TEXT="Geometry, Topology &amp; Langlands｜几何、拓扑与朗兰兹" FOLDED="true">
        <node TEXT="原问题：高维几何的最优结构、纽结的切片性质与几何朗兰兹对应能否被完全确定？" />
        <node TEXT="研究对象与结论：球堆积、纽结与几何朗兰兹猜想 → 最优性证明、反例或对应的构造" />
        <node TEXT="已有扩展轴：模形式构造辅助函数、纽结迹技术、范畴化朗兰兹对应" />
        <node TEXT="代表论文与阅读顺序">
          <node TEXT="Sphere packing in dimension 8｜Annals of Mathematics 2017｜较早入口" LINK="https://doi.org/10.4007/annals.2017.185.3.7">
            <node TEXT="The sphere packing problem in dimension 8" />
            <node TEXT="用模形式构造辅助函数，证明 E8 格是 8 维最密球堆积。" />
          </node>
          <node TEXT="Sphere packing in dimension 24｜Annals of Mathematics 2017｜近年代表" LINK="https://doi.org/10.4007/annals.2017.185.3.8">
            <node TEXT="The sphere packing problem in dimension 24" />
            <node TEXT="把同一方法推广到 24 维，证明 Leech 格最优。" />
          </node>
          <node TEXT="Conway knot｜Annals of Mathematics 2020｜已有扩展" LINK="https://doi.org/10.4007/annals.2020.191.2.5">
            <node TEXT="The Conway knot is not slice" />
            <node TEXT="用纽结迹技巧解决 Conway 纽结是否切片这一长期问题。" />
          </node>
          <node TEXT="Geometric Langlands｜arXiv 2024｜预印本" LINK="https://arxiv.org/abs/2405.03599">
            <node TEXT="Proof of the geometric Langlands conjecture I: construction of the functor" />
            <node TEXT="几何朗兰兹猜想证明系列的第一篇，构造朗兰兹函子。" />
          </node>
        </node>
      </node>
      <node TEXT="Harmonic Analysis &amp; PDE｜调和分析与偏微分方程" FOLDED="true">
        <node TEXT="原问题：包含各方向线段的集合能有多小，指数和与振荡积分能被怎样控制？" />
        <node TEXT="研究对象与结论：Kakeya 集、解耦不等式与指数和 → 维数、平均值与 L^p 估计" />
        <node TEXT="已有扩展轴：解耦理论、多线性方法、凸集体积估计" />
        <node TEXT="代表论文与阅读顺序">
          <node TEXT="Decoupling conjecture｜Annals of Mathematics 2015｜较早入口" LINK="https://doi.org/10.4007/annals.2015.182.1.9">
            <node TEXT="The proof of the $l^2$ Decoupling Conjecture" />
            <node TEXT="证明 ℓ² 解耦猜想，成为调和分析与数论共用的新工具。" />
          </node>
          <node TEXT="Vinogradov mean value｜Annals of Mathematics 2016｜近年代表" LINK="https://doi.org/10.4007/annals.2016.184.2.7">
            <node TEXT="Proof of the main conjecture in Vinogradov's mean value theorem for degrees higher than three" />
            <node TEXT="用解耦方法证明 Vinogradov 平均值定理的主猜想。" />
          </node>
          <node TEXT="Kakeya in three dimensions｜arXiv 2025｜预印本" LINK="https://arxiv.org/abs/2502.17655">
            <node TEXT="Volume estimates for unions of convex sets, and the Kakeya set conjecture in three dimensions" />
            <node TEXT="证明三维 Kakeya 集的 Hausdorff 维数必为 3。" />
          </node>
        </node>
      </node>
    </node>
    <node TEXT="五条概念阅读路线（整理关系）" FOLDED="true" POSITION="right">
      <node TEXT="从形式化到自动证明">
        <node TEXT="形式化库 → 证明搜索 → 自动形式化与奥赛 → 可验证强化学习" />
        <node TEXT="Formal Libraries &amp; Benchmarks｜形式化数学库与评测">
          <node TEXT="mathlib｜CPP 2020" LINK="https://doi.org/10.1145/3372885.3373824" />
          <node TEXT="LeanDojo｜NeurIPS 2023" LINK="https://proceedings.neurips.cc/paper_files/paper/2023/hash/4441469427094f8873d0fecb0c4e1cee-Abstract-Datasets_and_Benchmarks.html" />
        </node>
        <node TEXT="Neural Proof Search｜神经证明搜索">
          <node TEXT="HTPS｜NeurIPS 2022" LINK="https://proceedings.neurips.cc/paper_files/paper/2022/hash/a8901c5e85fb8e1823bbf0f755053672-Abstract-Conference.html" />
          <node TEXT="DeepSeek-Prover-V1.5｜ICLR 2025" LINK="https://proceedings.iclr.cc/paper_files/paper/2025/hash/b3b55c366d641c07180c40e4f978f311-Abstract-Conference.html" />
        </node>
        <node TEXT="Olympiad Reasoning &amp; Autoformalization｜奥赛级推理与自动形式化">
          <node TEXT="Autoformalization｜NeurIPS 2022" LINK="https://proceedings.neurips.cc/paper_files/paper/2022/hash/d0c6bc641a56bebee9d985b937307367-Abstract-Conference.html" />
          <node TEXT="AlphaProof｜Nature 2026" LINK="https://www.nature.com/articles/s41586-025-09833-y" />
        </node>
        <node TEXT="Reinforcement Learning &amp; Test-Time Compute｜强化学习与测试时计算">
          <node TEXT="DeepSeek-R1｜Nature 2025" LINK="https://www.nature.com/articles/s41586-025-09422-z" />
        </node>
      </node>
      <node TEXT="从解题到发现">
        <node TEXT="数学基准 → 过程监督 → 构造搜索 → 新定理与新算法" />
        <node TEXT="Math Pretraining &amp; Benchmarks｜数学预训练与评测">
          <node TEXT="MATH｜NeurIPS 2021" LINK="https://datasets-benchmarks-proceedings.neurips.cc/paper_files/paper/2021/hash/be83ab3ecd0db773eb2dc1b0a17836a1-Abstract-round2.html" />
          <node TEXT="Minerva｜NeurIPS 2022" LINK="https://proceedings.neurips.cc/paper_files/paper/2022/hash/18abbeef8cfe9203fdf9053c9c4fe191-Abstract-Conference.html" />
        </node>
        <node TEXT="Process Supervision &amp; Reward Models｜过程监督与奖励模型">
          <node TEXT="Let's Verify｜ICLR 2024" LINK="https://proceedings.iclr.cc/paper_files/paper/2024/hash/aca97732e30bcf1303bc22ac3924fd16-Abstract-Conference.html" />
        </node>
        <node TEXT="Program Search for Constructions｜程序搜索与组合构造">
          <node TEXT="FunSearch｜Nature 2024" LINK="https://www.nature.com/articles/s41586-023-06924-6" />
          <node TEXT="AlphaEvolve｜arXiv 2025" LINK="https://arxiv.org/abs/2506.13131" />
        </node>
        <node TEXT="ML-Guided Conjectures｜机器学习引导猜想">
          <node TEXT="AI-guided intuition｜Nature 2021" LINK="https://www.nature.com/articles/s41586-021-04086-x" />
        </node>
      </node>
      <node TEXT="从训练动力学到泛化">
        <node TEXT="优化器 → 稳定性边缘 → 无限宽极限 → 良性过拟合与缩放律" />
        <node TEXT="Adaptive Optimizers｜自适应优化器">
          <node TEXT="Adam｜ICLR 2015" LINK="https://arxiv.org/abs/1412.6980" />
          <node TEXT="AdamW｜ICLR 2019" LINK="https://openreview.net/forum?id=Bkg6RiCqY7" />
        </node>
        <node TEXT="Edge of Stability &amp; Sharpness｜稳定性边缘与锐度">
          <node TEXT="Edge of Stability｜ICLR 2021" LINK="https://openreview.net/forum?id=jh-rTtvkGeM" />
          <node TEXT="SAM｜ICLR 2021" LINK="https://openreview.net/forum?id=6Tm1mposlrM" />
        </node>
        <node TEXT="Infinite-Width Limits｜无限宽极限">
          <node TEXT="NTK｜NeurIPS 2018" LINK="https://proceedings.neurips.cc/paper_files/paper/2018/hash/5a4be1fa34e62bb8a6ec6b91d2462f5a-Abstract.html" />
          <node TEXT="Tensor Programs IV｜ICML 2021" LINK="https://proceedings.mlr.press/v139/yang21c.html" />
        </node>
        <node TEXT="Double Descent &amp; Benign Overfitting｜双下降与良性过拟合">
          <node TEXT="Double descent｜PNAS 2019" LINK="https://doi.org/10.1073/pnas.1903070116" />
          <node TEXT="Benign overfitting｜PNAS 2020" LINK="https://doi.org/10.1073/pnas.1907378117" />
        </node>
        <node TEXT="Grokking &amp; Scaling Laws｜顿悟与缩放律">
          <node TEXT="Grokking progress measures｜ICLR 2023" LINK="https://openreview.net/forum?id=9XFSbDPmdW" />
          <node TEXT="Chinchilla｜NeurIPS 2022" LINK="https://proceedings.neurips.cc/paper_files/paper/2022/hash/c1e2faff6f588870935f114ebe04a3e5-Abstract-Conference.html" />
        </node>
      </node>
      <node TEXT="从对称性到生成">
        <node TEXT="几何深度学习 → 等变网络 → 扩散与流 → 收敛理论" />
        <node TEXT="Geometric Deep Learning｜几何深度学习">
          <node TEXT="G-CNN｜ICML 2016" LINK="https://proceedings.mlr.press/v48/cohenc16.html" />
          <node TEXT="Homogeneous spaces｜NeurIPS 2019" LINK="https://proceedings.neurips.cc/paper_files/paper/2019/hash/b9cfe8b6042cf759dc4c0cccb27a6737-Abstract.html" />
        </node>
        <node TEXT="Equivariant Networks &amp; Universality｜等变网络与通用性">
          <node TEXT="EGNN｜ICML 2021" LINK="https://proceedings.mlr.press/v139/satorras21a.html" />
          <node TEXT="Scalars are universal｜NeurIPS 2021" LINK="https://proceedings.neurips.cc/paper_files/paper/2021/hash/f1b0775946bc0329b35b823b86eeb5f5-Abstract.html" />
        </node>
        <node TEXT="Optimal Transport &amp; Flow Matching｜最优传输与流匹配">
          <node TEXT="Benamou–Brenier｜Numerische Mathematik 2000" LINK="https://doi.org/10.1007/s002110050002" />
          <node TEXT="Stochastic interpolants｜ICLR 2023" LINK="https://openreview.net/forum?id=li7qeBbCR1t" />
        </node>
        <node TEXT="Convergence Theory of Diffusion Models｜扩散模型收敛理论">
          <node TEXT="Nearly d-linear bounds｜ICLR 2024" LINK="https://proceedings.iclr.cc/paper_files/paper/2024/hash/9edce07129d2ec4c511a8783eb3d81b5-Abstract-Conference.html" />
        </node>
      </node>
      <node TEXT="AI 与纯数学的交汇">
        <node TEXT="构造搜索 → 组合极值 → 形式化验证 → 长期猜想" />
        <node TEXT="Program Search for Constructions｜程序搜索与组合构造">
          <node TEXT="Wagner constructions｜arXiv 2021" LINK="https://arxiv.org/abs/2104.14516" />
          <node TEXT="PatternBoost｜arXiv 2024" LINK="https://arxiv.org/abs/2411.00566" />
        </node>
        <node TEXT="Ramsey Theory｜Ramsey 理论">
          <node TEXT="Exponential Ramsey improvement｜Annals of Mathematics 2026" LINK="https://doi.org/10.4007/annals.2026.203.3.4" />
        </node>
        <node TEXT="Additive Combinatorics｜加性组合">
          <node TEXT="Kelley–Meka｜FOCS 2023" LINK="https://doi.org/10.1109/focs57990.2023.00059" />
          <node TEXT="Marton's conjecture｜Annals of Mathematics 2025" LINK="https://doi.org/10.4007/annals.2025.201.2.5" />
        </node>
        <node TEXT="Harmonic Analysis &amp; PDE｜调和分析与偏微分方程">
          <node TEXT="Kakeya in three dimensions｜arXiv 2025" LINK="https://arxiv.org/abs/2502.17655" />
        </node>
      </node>
    </node>
  </node>
</map>
