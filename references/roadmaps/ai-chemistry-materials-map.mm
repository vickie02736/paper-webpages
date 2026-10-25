<?xml version='1.0' encoding='utf-8'?>
<map version="1.0.1">
  <node TEXT="AI for Chemistry / Materials 研究地图｜化学与材料中的机器学习｜截至 2026-10-25">
    <node TEXT="以 2018–2026 年正式发表的期刊与顶会论文为主，补充少量更早的必要入口；以 Crossref、OpenReview、arXiv 与出版方页面为核验依据，年份采用正式引用年份。本主题收录通用的化学与材料 AI 方法，MOF 专用研究见 MOF 主题。" />
    <node TEXT="分类与阅读路线为本次整理，不表示严格引用继承或领域穷尽。部分论文同时收录在其他主题，这里的简介按化学与材料的视角撰写。" />
    <node TEXT="量子化学与电子结构｜怎样用机器学习求解或近似电子结构？" POSITION="right" FOLDED="true">
      <node TEXT="Neural Network Wavefunctions｜神经网络波函数" FOLDED="true">
        <node TEXT="原问题：不依赖经验近似，怎样直接求解多电子薛定谔方程？" />
        <node TEXT="输入与输出：原子核位置与电子数 → 神经网络波函数 → 变分蒙特卡洛优化 → 能量与性质" />
        <node TEXT="已有扩展轴：反对称网络结构、自注意力波函数、激发态" />
        <node TEXT="代表论文与阅读顺序">
          <node TEXT="FermiNet｜Physical Review Research 2020｜较早入口" LINK="https://doi.org/10.1103/physrevresearch.2.033429">
            <node TEXT="Ab initio solution of the many-electron Schrödinger equation with deep neural networks" />
            <node TEXT="用满足反对称性的深度网络表示波函数，精度接近耦合簇。" />
          </node>
          <node TEXT="PauliNet｜Nature Chemistry 2020｜较早入口" LINK="https://www.nature.com/articles/s41557-020-0544-y">
            <node TEXT="Deep-neural-network solution of the electronic Schrödinger equation" />
            <node TEXT="在 Hartree–Fock 基础上加入神经网络修正，内置物理约束。" />
          </node>
          <node TEXT="Psiformer｜ICLR 2023｜近年代表" LINK="https://openreview.net/forum?id=xveTeHVlF7j">
            <node TEXT="A Self-Attention Ansatz for Ab-initio Quantum Chemistry" />
            <node TEXT="用自注意力替代 FermiNet 的部分结构，在更大分子上更准确。" />
          </node>
          <node TEXT="Neural excited states｜Science 2024｜已有扩展" LINK="https://www.science.org/doi/10.1126/science.adn0137">
            <node TEXT="Accurate computation of quantum excited states with neural networks" />
            <node TEXT="把神经网络变分方法从基态扩展到激发态。" />
          </node>
        </node>
      </node>
      <node TEXT="Machine-Learned Density Functionals｜机器学习密度泛函" FOLDED="true">
        <node TEXT="原问题：怎样学习更准确的交换关联泛函，同时保持密度泛函理论的计算效率？" />
        <node TEXT="输入与输出：电子密度与相关特征 → 神经网络交换关联泛函 → 自洽计算的能量与密度" />
        <node TEXT="已有扩展轴：物理约束、分数电荷与自旋条件、与自洽求解耦合训练" />
        <node TEXT="代表论文与阅读顺序">
          <node TEXT="KS regularizer｜Physical Review Letters 2021｜较早入口" LINK="https://doi.org/10.1103/physrevlett.126.036401">
            <node TEXT="Kohn-Sham Equations as Regularizer: Building Prior Knowledge into Machine-Learned Physics" />
            <node TEXT="把 Kohn–Sham 自洽求解嵌入训练过程，学到的泛函泛化更好。" />
          </node>
          <node TEXT="DM21｜Science 2021｜近年代表" LINK="https://www.science.org/doi/10.1126/science.abj6511">
            <node TEXT="Pushing the frontiers of density functionals by solving the fractional electron problem" />
            <node TEXT="在训练中加入分数电荷与分数自旋约束，缓解离域误差。" />
          </node>
        </node>
      </node>
      <node TEXT="Electronic Hamiltonians &amp; Quantum Properties｜电子哈密顿量与量子性质" FOLDED="true">
        <node TEXT="原问题：怎样绕过昂贵的自洽计算，直接预测电子结构与量子化学性质？" />
        <node TEXT="输入与输出：分子或晶体结构 → 哈密顿量矩阵、轨道或量子性质" />
        <node TEXT="已有扩展轴：标准数据集、轨道特征、哈密顿量等变预测" />
        <node TEXT="代表论文与阅读顺序">
          <node TEXT="QM9｜Scientific Data 2014｜较早入口" LINK="https://www.nature.com/articles/sdata.2014.22">
            <node TEXT="Quantum chemistry structures and properties of 134 kilo molecules" />
            <node TEXT="13 万个小分子的 DFT 结构与性质，是分子机器学习的基础基准。" />
          </node>
          <node TEXT="SchNOrb｜Nature Communications 2019｜近年代表" LINK="https://www.nature.com/articles/s41467-019-12875-2">
            <node TEXT="Unifying machine learning and quantum chemistry with a deep neural network for molecular wavefunctions" />
            <node TEXT="预测分子在原子轨道基下的哈密顿量，进而得到波函数与性质。" />
          </node>
          <node TEXT="OrbNet｜The Journal of Chemical Physics 2020｜已有扩展" LINK="https://doi.org/10.1063/5.0021955">
            <node TEXT="OrbNet: Deep learning for quantum chemistry using symmetry-adapted atomic-orbital features" />
            <node TEXT="以低成本半经验计算得到的轨道特征作为图网络输入。" />
          </node>
          <node TEXT="DeepH｜Nature Computational Science 2022｜已有扩展" LINK="https://www.nature.com/articles/s43588-022-00265-6">
            <node TEXT="Deep-learning density functional theory Hamiltonian for efficient ab initio electronic-structure calculation" />
            <node TEXT="利用局域性与等变性预测晶体的 DFT 哈密顿量，可扩展到大体系。" />
          </node>
        </node>
      </node>
    </node>
    <node TEXT="机器学习原子间势｜怎样以接近第一性原理的精度做大规模模拟？" POSITION="right" FOLDED="true">
      <node TEXT="Descriptors &amp; Deep Potentials｜描述符与深度势" FOLDED="true">
        <node TEXT="原问题：怎样从第一性原理数据中学习势能面，替代昂贵的 DFT 分子动力学？" />
        <node TEXT="输入与输出：原子构型与 DFT 能量、力 → 局域环境描述或网络表示 → 原子能量与力" />
        <node TEXT="已有扩展轴：对称函数描述符、高斯过程势、端到端连续卷积、大规模并行" />
        <node TEXT="代表论文与阅读顺序">
          <node TEXT="Behler–Parrinello｜Physical Review Letters 2007｜较早入口" LINK="https://doi.org/10.1103/physrevlett.98.146401">
            <node TEXT="Generalized Neural-Network Representation of High-Dimensional Potential-Energy Surfaces" />
            <node TEXT="把总能量分解为原子能量之和，并用对称函数描述局域环境。" />
          </node>
          <node TEXT="GAP｜Physical Review Letters 2010｜较早入口" LINK="https://doi.org/10.1103/physrevlett.104.136403">
            <node TEXT="Gaussian Approximation Potentials: The Accuracy of Quantum Mechanics, without the Electrons" />
            <node TEXT="用高斯过程回归拟合原子能量，开创 GAP 系列势函数。" />
          </node>
          <node TEXT="SchNet｜NeurIPS 2017｜近年代表" LINK="https://proceedings.neurips.cc/paper_files/paper/2017/hash/303ed4c69846ab36c2904d3ba8573050-Abstract.html">
            <node TEXT="SchNet: A continuous-filter convolutional neural network for modeling quantum interactions" />
            <node TEXT="连续滤波卷积直接从原子坐标学习，无需手工描述符。" />
          </node>
          <node TEXT="DeePMD｜Physical Review Letters 2018｜近年代表" LINK="https://doi.org/10.1103/physrevlett.120.143001">
            <node TEXT="Deep Potential Molecular Dynamics: A Scalable Model with the Accuracy of Quantum Mechanics" />
            <node TEXT="可扩展的深度势分子动力学，后续发展为 DeePMD-kit 生态。" />
          </node>
        </node>
      </node>
      <node TEXT="Equivariant Interatomic Potentials｜等变原子间势" FOLDED="true">
        <node TEXT="原问题：怎样把旋转等变性写进模型，用更少数据得到更准的力场？" />
        <node TEXT="输入与输出：原子图与相对位置 → 等变消息传递或注意力 → 能量与力" />
        <node TEXT="已有扩展轴：张量积等变网络、高阶消息、严格局域以便并行、等变注意力" />
        <node TEXT="代表论文与阅读顺序">
          <node TEXT="NequIP｜Nature Communications 2022｜近年代表" LINK="https://www.nature.com/articles/s41467-022-29939-5">
            <node TEXT="E(3)-equivariant graph neural networks for data-efficient and accurate interatomic potentials" />
            <node TEXT="E(3) 等变图网络大幅提高数据效率，少量训练数据即可达到高精度。" />
          </node>
          <node TEXT="MACE｜NeurIPS 2022｜近年代表" LINK="https://proceedings.neurips.cc/paper_files/paper/2022/hash/4a36c3c51af11ed9f34615b81edb5bbc-Abstract-Conference.html">
            <node TEXT="MACE: Higher Order Equivariant Message Passing Neural Networks for Fast and Accurate Force Fields" />
            <node TEXT="高阶等变消息使两层网络即可达到高精度，速度更快。" />
          </node>
          <node TEXT="Allegro｜Nature Communications 2023｜已有扩展" LINK="https://www.nature.com/articles/s41467-023-36329-y">
            <node TEXT="Learning local equivariant representations for large-scale atomistic dynamics" />
            <node TEXT="严格局域的等变结构便于并行，可模拟上亿原子。" />
          </node>
          <node TEXT="Equiformer｜ICLR 2023｜已有扩展" LINK="https://openreview.net/pdf?id=KwmPfARgOTD">
            <node TEXT="Equiformer: Equivariant Graph Attention Transformer for 3D Atomistic Graphs" />
            <node TEXT="把注意力机制推广到等变特征，在分子与催化数据集上预测能量与力。" />
          </node>
        </node>
      </node>
      <node TEXT="Universal Interatomic Potentials｜通用原子间势" FOLDED="true">
        <node TEXT="原问题：能否训练一个覆盖整个元素周期表、开箱即用的原子间势？" />
        <node TEXT="输入与输出：大规模 DFT 弛豫轨迹 → 预训练通用势 → 直接或微调用于新材料模拟" />
        <node TEXT="已有扩展轴：三体相互作用、电荷与磁矩信息、基础模型式预训练与微调" />
        <node TEXT="代表论文与阅读顺序">
          <node TEXT="M3GNet｜Nature Computational Science 2022｜近年代表" LINK="https://www.nature.com/articles/s43588-022-00349-3">
            <node TEXT="A universal graph deep learning interatomic potential for the periodic table" />
            <node TEXT="在 Materials Project 弛豫数据上训练覆盖 89 种元素的通用势。" />
          </node>
          <node TEXT="CHGNet｜Nature Machine Intelligence 2023｜已有扩展" LINK="https://www.nature.com/articles/s42256-023-00716-3">
            <node TEXT="CHGNet as a pretrained universal neural network potential for charge-informed atomistic modelling" />
            <node TEXT="把磁矩作为电荷状态的代理，模拟含电荷转移的过程。" />
          </node>
          <node TEXT="MACE-MP-0｜arXiv 2023｜预印本" LINK="https://arxiv.org/abs/2401.00096">
            <node TEXT="A foundation model for atomistic materials chemistry" />
            <node TEXT="在 Materials Project 数据上训练的 MACE 基础模型，可用于多种化学体系。" />
          </node>
        </node>
      </node>
    </node>
    <node TEXT="材料性质预测与表示｜怎样从晶体结构预测材料性质？" POSITION="right" FOLDED="true">
      <node TEXT="Crystal Graph Networks｜晶体图神经网络" FOLDED="true">
        <node TEXT="原问题：怎样把周期性晶体表示成图，直接从结构预测性质？" />
        <node TEXT="输入与输出：晶体结构 → 原子图（可含键角） → 形成能、带隙、模量等性质" />
        <node TEXT="已有扩展轴：晶体图卷积、全局状态、键角信息" />
        <node TEXT="代表论文与阅读顺序">
          <node TEXT="CGCNN｜Physical Review Letters 2018｜较早入口" LINK="https://doi.org/10.1103/physrevlett.120.145301">
            <node TEXT="Crystal Graph Convolutional Neural Networks for an Accurate and Interpretable Prediction of Material Properties" />
            <node TEXT="把晶体表示为多重图，用卷积网络预测多种 DFT 性质。" />
          </node>
          <node TEXT="MEGNet｜Chemistry of Materials 2019｜近年代表" LINK="https://doi.org/10.1021/acs.chemmater.9b01294">
            <node TEXT="Graph Networks as a Universal Machine Learning Framework for Molecules and Crystals" />
            <node TEXT="加入全局状态变量，同一框架处理分子与晶体。" />
          </node>
          <node TEXT="ALIGNN｜npj Computational Materials 2021｜已有扩展" LINK="https://www.nature.com/articles/s41524-021-00650-1">
            <node TEXT="Atomistic Line Graph Neural Network for improved materials property predictions" />
            <node TEXT="通过线图显式建模键角，提升多种性质的预测精度。" />
          </node>
        </node>
      </node>
      <node TEXT="Materials Data &amp; Benchmarks｜材料数据与基准" FOLDED="true">
        <node TEXT="原问题：怎样构建可复用的大规模材料数据，并公平比较预测方法？" />
        <node TEXT="输入与输出：高通量计算或实验数据 → 开放数据库与标准任务 → 方法比较" />
        <node TEXT="已有扩展轴：开放计算数据库、标准测试集、大规模非平衡结构数据" />
        <node TEXT="代表论文与阅读顺序">
          <node TEXT="Materials Project｜APL Materials 2013｜较早入口" LINK="https://doi.org/10.1063/1.4812323">
            <node TEXT="Commentary: The Materials Project: A materials genome approach to accelerating materials innovation" />
            <node TEXT="开放的高通量 DFT 材料数据库，是许多材料模型的训练来源。" />
          </node>
          <node TEXT="Matbench｜npj Computational Materials 2020｜近年代表" LINK="https://www.nature.com/articles/s41524-020-00406-3">
            <node TEXT="Benchmarking materials property prediction methods: the Matbench test set and Automatminer reference algorithm" />
            <node TEXT="13 项标准任务与自动化基线，统一比较材料性质预测方法。" />
          </node>
          <node TEXT="OMat24｜Nature Computational Science 2026｜2026 扩展" LINK="https://www.nature.com/articles/s43588-026-00996-w">
            <node TEXT="The Open Materials 2024 (OMat24) inorganic materials dataset and models" />
            <node TEXT="一亿多个非平衡结构的 DFT 数据集，用于训练通用势。" />
          </node>
        </node>
      </node>
      <node TEXT="Transfer &amp; Multimodal Representations｜迁移与多模态表示" FOLDED="true">
        <node TEXT="原问题：数据稀少的材料性质，怎样借助预训练与多种结构信息来预测？" />
        <node TEXT="输入与输出：大量无标签或多源结构数据 → 预训练表示 → 小样本性质预测" />
        <node TEXT="已有扩展轴：自监督预训练、多模态输入、跨体系迁移" />
        <node TEXT="代表论文与阅读顺序">
          <node TEXT="Crystal Twins｜npj Computational Materials 2022｜近年代表" LINK="https://www.nature.com/articles/s41524-022-00921-5">
            <node TEXT="Crystal twins: self-supervised learning for crystalline material property prediction" />
            <node TEXT="对晶体图做增强后自监督预训练，提升小数据性质预测。" />
          </node>
          <node TEXT="MOFTransformer｜Nature Machine Intelligence 2023｜已有扩展" LINK="https://www.nature.com/articles/s42256-023-00628-2">
            <node TEXT="A multi-modal pre-training transformer for universal transfer learning in metal–organic frameworks" />
            <node TEXT="结合原子图与能量网格的多模态预训练，是多孔材料迁移学习的代表。" />
          </node>
        </node>
      </node>
    </node>
    <node TEXT="晶体结构生成与发现｜怎样生成稳定的新晶体并大规模发现材料？" POSITION="right" FOLDED="true">
      <node TEXT="Crystal Generative Models｜晶体生成模型" FOLDED="true">
        <node TEXT="原问题：怎样生成满足周期性与对称性、且稳定的新晶体结构？" />
        <node TEXT="输入与输出：组成或噪声 → 晶格、原子类型与分数坐标 → 候选晶体与稳定性评估" />
        <node TEXT="已有扩展轴：变分扩散、晶格与坐标联合扩散、黎曼流匹配、语言模型生成" />
        <node TEXT="代表论文与阅读顺序">
          <node TEXT="CDVAE｜ICLR 2022｜较早入口" LINK="https://openreview.net/forum?id=03RLpj-tc_">
            <node TEXT="Crystal Diffusion Variational Autoencoder for Periodic Material Generation" />
            <node TEXT="结合变分自编码器与扩散去噪生成周期性晶体。" />
          </node>
          <node TEXT="DiffCSP｜NeurIPS 2023｜近年代表" LINK="https://proceedings.neurips.cc/paper_files/paper/2023/hash/38b787fc530d0b31825827e2cc306656-Abstract.html">
            <node TEXT="Crystal Structure Prediction by Joint Equivariant Diffusion" />
            <node TEXT="对晶格与分数坐标联合扩散，用于晶体结构预测。" />
          </node>
          <node TEXT="Crystal-text LLM｜ICLR 2024｜已有扩展" LINK="https://proceedings.iclr.cc/paper_files/paper/2024/hash/5dc6d1c81754c32008c9667339b3fdd3-Abstract-Conference.html">
            <node TEXT="Fine-Tuned Language Models Generate Stable Inorganic Materials as Text" />
            <node TEXT="把晶体写成文本，微调大语言模型生成稳定材料。" />
          </node>
          <node TEXT="FlowMM｜ICML 2024｜已有扩展" LINK="https://proceedings.mlr.press/v235/miller24a.html">
            <node TEXT="FlowMM: Generating Materials with Riemannian Flow Matching" />
            <node TEXT="在晶体的对称流形上做黎曼流匹配，生成更高效。" />
          </node>
        </node>
      </node>
      <node TEXT="Conditional Inverse Design｜条件逆向设计" FOLDED="true">
        <node TEXT="原问题：给定目标性质，怎样直接生成满足要求的材料？" />
        <node TEXT="输入与输出：目标化学、对称性或性质 → 条件生成模型 → 候选材料 → 计算或实验验证" />
        <node TEXT="已有扩展轴：连续表示逆向设计、扩散模型条件微调、实验合成验证" />
        <node TEXT="代表论文与阅读顺序">
          <node TEXT="iMatGen｜Matter 2019｜较早入口" LINK="https://doi.org/10.1016/j.matt.2019.08.017">
            <node TEXT="Inverse Design of Solid-State Materials via a Continuous Representation" />
            <node TEXT="用图像式连续表示和生成模型做固体材料逆向设计。" />
          </node>
          <node TEXT="MOFDiff｜ICLR 2024｜已有扩展" LINK="https://proceedings.iclr.cc/paper_files/paper/2024/hash/47547ee84e3fbbcbbbbad7c1fd9a973b-Abstract-Conference.html">
            <node TEXT="MOFDiff: Coarse-grained Diffusion for Metal-Organic Framework Design" />
            <node TEXT="以粗粒化构筑单元做扩散生成，处理大型框架材料。" />
          </node>
          <node TEXT="MatterGen｜Nature 2025｜近年代表" LINK="https://www.nature.com/articles/s41586-025-08628-5">
            <node TEXT="A generative model for inorganic materials design" />
            <node TEXT="可按化学、对称性与磁性等条件生成稳定无机材料，并经实验合成验证。" />
          </node>
        </node>
      </node>
      <node TEXT="Large-Scale Materials Discovery｜大规模材料发现" FOLDED="true">
        <node TEXT="原问题：怎样用机器学习在巨大的组成与结构空间中高效筛选稳定材料？" />
        <node TEXT="输入与输出：候选组成与结构 → 稳定性预测与 DFT 验证 → 新稳定材料" />
        <node TEXT="已有扩展轴：热力学稳定性预测、主动学习式扩展、实验验证" />
        <node TEXT="代表论文与阅读顺序">
          <node TEXT="Stability prediction｜Chemistry of Materials 2017｜较早入口" LINK="https://doi.org/10.1021/acs.chemmater.7b00156">
            <node TEXT="Predicting the Thermodynamic Stability of Solids Combining Density Functional Theory and Machine Learning" />
            <node TEXT="用机器学习预筛钙钛矿稳定性，再用 DFT 验证。" />
          </node>
          <node TEXT="Perovskite screening｜Nature Communications 2018｜近年代表" LINK="https://www.nature.com/articles/s41467-018-05761-w">
            <node TEXT="Accelerated discovery of stable lead-free hybrid organic-inorganic perovskites via machine learning" />
            <node TEXT="结合机器学习与 DFT 筛选无铅杂化钙钛矿光伏材料。" />
          </node>
          <node TEXT="GNoME｜Nature 2023｜已有扩展" LINK="https://www.nature.com/articles/s41586-023-06735-9">
            <node TEXT="Scaling deep learning for materials discovery" />
            <node TEXT="主动学习扩展图网络与 DFT 循环，预测出数十万种新的稳定晶体。" />
          </node>
        </node>
      </node>
    </node>
    <node TEXT="分子与反应｜怎样预测反应结果、规划合成并优化条件？" POSITION="right" FOLDED="true">
      <node TEXT="Reaction Outcome Prediction｜反应结果预测" FOLDED="true">
        <node TEXT="原问题：给定反应物与条件，怎样预测产物和产率？" />
        <node TEXT="输入与输出：反应物、试剂与条件 → 图网络或序列模型 → 产物结构或产率" />
        <node TEXT="已有扩展轴：高通量实验数据、图卷积反应性预测、带不确定性的序列翻译" />
        <node TEXT="代表论文与阅读顺序">
          <node TEXT="C–N coupling yields｜Science 2018｜较早入口" LINK="https://www.science.org/doi/10.1126/science.aar5169">
            <node TEXT="Predicting reaction performance in C–N cross-coupling using machine learning" />
            <node TEXT="用高通量实验数据训练随机森林预测偶联反应产率。" />
          </node>
          <node TEXT="WLDN reactivity｜Chemical Science 2019｜近年代表" LINK="https://doi.org/10.1039/c8sc04228d">
            <node TEXT="A graph-convolutional neural network model for the prediction of chemical reactivity" />
            <node TEXT="先预测反应中心，再枚举并排序候选产物。" />
          </node>
          <node TEXT="Molecular Transformer｜ACS Central Science 2019｜已有扩展" LINK="https://doi.org/10.1021/acscentsci.9b00576">
            <node TEXT="Molecular Transformer: A Model for Uncertainty-Calibrated Chemical Reaction Prediction" />
            <node TEXT="把反应预测当作 SMILES 翻译，并给出校准后的不确定性。" />
          </node>
        </node>
      </node>
      <node TEXT="Retrosynthesis &amp; Synthesis Planning｜逆合成与合成规划" FOLDED="true">
        <node TEXT="原问题：给定目标分子，怎样规划并执行可行的合成路线？" />
        <node TEXT="输入与输出：目标分子 → 单步逆合成与多步搜索 → 合成路线 → 自动化执行" />
        <node TEXT="已有扩展轴：搜索算法、局部反应模板、与自动化合成平台结合" />
        <node TEXT="代表论文与阅读顺序">
          <node TEXT="3N-MCTS｜Nature 2018｜较早入口" LINK="https://www.nature.com/articles/nature25978">
            <node TEXT="Planning chemical syntheses with deep neural networks and symbolic AI" />
            <node TEXT="神经网络加蒙特卡洛树搜索，开启数据驱动的合成规划。" />
          </node>
          <node TEXT="Retro*｜ICML 2020｜较早入口" LINK="https://proceedings.mlr.press/v119/chen20k.html">
            <node TEXT="Retro*: Learning Retrosynthetic Planning with Neural Guided A* Search" />
            <node TEXT="用学习的合成代价引导与或树搜索，路线更短。" />
          </node>
          <node TEXT="LocalRetro｜JACS Au 2021｜近年代表" LINK="https://doi.org/10.1021/jacsau.1c00246">
            <node TEXT="Deep Retrosynthetic Reaction Prediction using Local Reactivity and Global Attention" />
            <node TEXT="结合化学局部性原理与全局注意力的单步逆合成模型。" />
          </node>
          <node TEXT="AI-planned flow synthesis｜Science 2019｜已有扩展" LINK="https://www.science.org/doi/10.1126/science.aax1566">
            <node TEXT="A robotic platform for flow synthesis of organic compounds informed by AI planning" />
            <node TEXT="AI 规划路线后由机器人流动化学平台自动执行合成。" />
          </node>
        </node>
      </node>
      <node TEXT="Reaction Optimization｜反应条件优化" FOLDED="true">
        <node TEXT="原问题：实验预算有限时，怎样快速找到最优反应条件？" />
        <node TEXT="输入与输出：反应条件空间 → 代理模型与采集函数 → 下一批实验 → 产率反馈" />
        <node TEXT="已有扩展轴：化学专用贝叶斯优化、闭环自动实验、条件的普适性" />
        <node TEXT="代表论文与阅读顺序">
          <node TEXT="Phoenics｜ACS Central Science 2018｜较早入口" LINK="https://doi.org/10.1021/acscentsci.8b00307">
            <node TEXT="Phoenics: A Bayesian Optimizer for Chemistry" />
            <node TEXT="面向化学实验的贝叶斯优化器，支持并行批量实验。" />
          </node>
          <node TEXT="Bayesian reaction optimization｜Nature 2021｜近年代表" LINK="https://www.nature.com/articles/s41586-021-03213-y">
            <node TEXT="Bayesian reaction optimization as a tool for chemical synthesis" />
            <node TEXT="系统比较贝叶斯优化与化学家，前者更高效且更稳定。" />
          </node>
          <node TEXT="General Suzuki conditions｜Science 2022｜已有扩展" LINK="https://www.science.org/doi/10.1126/science.adc8743">
            <node TEXT="Closed-loop optimization of general reaction conditions for heteroaryl Suzuki-Miyaura coupling" />
            <node TEXT="闭环优化寻找对多种底物都适用的通用反应条件。" />
          </node>
        </node>
      </node>
    </node>
    <node TEXT="催化与能源材料｜怎样用 AI 筛选催化剂、电池与能源材料？" POSITION="right" FOLDED="true">
      <node TEXT="Catalyst Datasets &amp; Models｜催化数据集与模型" FOLDED="true">
        <node TEXT="原问题：怎样构建大规模催化计算数据，训练预测吸附能与反应活性的模型？" />
        <node TEXT="输入与输出：催化剂表面与吸附物构型 → DFT 弛豫数据 → 能量与力的机器学习模型" />
        <node TEXT="已有扩展轴：金属与合金表面、氧化物电催化剂、主动学习筛选" />
        <node TEXT="代表论文与阅读顺序">
          <node TEXT="CO₂ electrocatalysts｜Nature 2020｜较早入口" LINK="https://www.nature.com/articles/s41586-020-2242-8">
            <node TEXT="Accelerated discovery of CO2 electrocatalysts using active machine learning" />
            <node TEXT="主动学习筛选合金催化剂，发现高效 CO₂ 还原的铜铝催化剂。" />
          </node>
          <node TEXT="OC20｜ACS Catalysis 2021｜近年代表" LINK="https://doi.org/10.1021/acscatal.0c04525">
            <node TEXT="Open Catalyst 2020 (OC20) Dataset and Community Challenges" />
            <node TEXT="上百万次 DFT 弛豫构成的催化数据集与社区挑战。" />
          </node>
          <node TEXT="OC22｜ACS Catalysis 2023｜已有扩展" LINK="https://doi.org/10.1021/acscatal.2c05426">
            <node TEXT="The Open Catalyst 2022 (OC22) Dataset and Challenges for Oxide Electrocatalysts" />
            <node TEXT="把数据集扩展到氧化物电催化剂，用于析氧等反应。" />
          </node>
        </node>
      </node>
      <node TEXT="Adsorption Energy Search｜吸附能与构型搜索" FOLDED="true">
        <node TEXT="原问题：怎样快速找到吸附物在表面上的最低能量构型？" />
        <node TEXT="输入与输出：表面与吸附物 → 机器学习势生成并弛豫大量构型 → 少量 DFT 验证 → 吸附能" />
        <node TEXT="已有扩展轴：主动学习跨体系筛选、机器学习势加速、DFT 验证比例" />
        <node TEXT="代表论文与阅读顺序">
          <node TEXT="Intermetallic active learning｜Nature Catalysis 2018｜较早入口" LINK="https://www.nature.com/articles/s41929-018-0142-1">
            <node TEXT="Active learning across intermetallics to guide discovery of electrocatalysts for CO2 reduction and H2 evolution" />
            <node TEXT="自动化 DFT 工作流结合主动学习，在大量金属间化合物中筛选催化剂。" />
          </node>
          <node TEXT="AdsorbML｜npj Computational Materials 2023｜近年代表" LINK="https://www.nature.com/articles/s41524-023-01121-5">
            <node TEXT="AdsorbML: a leap in efficiency for adsorption energy calculations using generalizable machine learning potentials" />
            <node TEXT="用机器学习势筛选构型，只对少数候选做 DFT，计算量大幅降低。" />
          </node>
        </node>
      </node>
      <node TEXT="Battery &amp; Electrolyte Discovery｜电池与电解质发现" FOLDED="true">
        <node TEXT="原问题：怎样用数据和模型加速电池寿命评估、充电协议设计与新电解质发现？" />
        <node TEXT="输入与输出：早期循环数据或候选材料 → 预测模型与优化 → 寿命、协议或候选电解质" />
        <node TEXT="已有扩展轴：早期寿命预测、闭环协议优化、大规模电解质筛选与实验验证" />
        <node TEXT="代表论文与阅读顺序">
          <node TEXT="Battery cycle life｜Nature Energy 2019｜较早入口" LINK="https://www.nature.com/articles/s41560-019-0356-8">
            <node TEXT="Data-driven prediction of battery cycle life before capacity degradation" />
            <node TEXT="只用前 100 个循环的数据预测锂电池寿命。" />
          </node>
          <node TEXT="Fast-charging optimization｜Nature 2020｜近年代表" LINK="https://www.nature.com/articles/s41586-020-1994-5">
            <node TEXT="Closed-loop optimization of fast-charging protocols for batteries with machine learning" />
            <node TEXT="早期寿命预测结合贝叶斯优化，大幅缩短快充协议筛选时间。" />
          </node>
          <node TEXT="Solid electrolyte screening｜Journal of the American Chemical Society 2024｜已有扩展" LINK="https://doi.org/10.1021/jacs.4c03849">
            <node TEXT="Accelerating Computational Materials Discovery with Machine Learning and Cloud High-Performance Computing: from Large-Scale Screening to Experimental Validation" />
            <node TEXT="机器学习与云计算筛选三千多万候选，合成验证新型固态电解质。" />
          </node>
        </node>
      </node>
    </node>
    <node TEXT="化学语言模型与文献知识｜语言模型怎样读懂化学文献并做预测？" POSITION="right" FOLDED="true">
      <node TEXT="Materials Text Mining｜材料文本挖掘" FOLDED="true">
        <node TEXT="原问题：怎样从海量化学与材料文献中自动提取知识和合成信息？" />
        <node TEXT="输入与输出：论文文本 → 词嵌入或信息抽取模型 → 材料知识、合成配方与结构化数据库" />
        <node TEXT="已有扩展轴：无监督词向量、合成配方抽取、大语言模型结构化抽取" />
        <node TEXT="代表论文与阅读顺序">
          <node TEXT="Materials word embeddings｜Nature 2019｜较早入口" LINK="https://www.nature.com/articles/s41586-019-1335-8">
            <node TEXT="Unsupervised word embeddings capture latent knowledge from materials science literature" />
            <node TEXT="在摘要上训练的词向量能提前数年“预测”新热电材料。" />
          </node>
          <node TEXT="Synthesis recipes｜Scientific Data 2019｜近年代表" LINK="https://www.nature.com/articles/s41597-019-0224-1">
            <node TEXT="Text-mined dataset of inorganic materials synthesis recipes" />
            <node TEXT="从文献中自动抽取三万多条固相合成配方。" />
          </node>
          <node TEXT="LLM-NERRE｜Nature Communications 2024｜已有扩展" LINK="https://www.nature.com/articles/s41467-024-45563-x">
            <node TEXT="Structured information extraction from scientific text with large language models" />
            <node TEXT="微调大语言模型把材料文献转为结构化的实体与关系。" />
          </node>
        </node>
      </node>
      <node TEXT="LLMs for Chemical Prediction &amp; Evaluation｜化学预测与评测中的大语言模型" FOLDED="true">
        <node TEXT="原问题：大语言模型能否直接做化学性质预测，它的化学知识与推理有多可靠？" />
        <node TEXT="输入与输出：自然语言描述的化学问题 → 微调或提示的大语言模型 → 预测或答案 → 与专家对比" />
        <node TEXT="已有扩展轴：小样本微调预测、系统知识评测、与化学家对照" />
        <node TEXT="代表论文与阅读顺序">
          <node TEXT="LLM predictive chemistry｜Nature Machine Intelligence 2024｜近年代表" LINK="https://www.nature.com/articles/s42256-023-00788-1">
            <node TEXT="Leveraging large language models for predictive chemistry" />
            <node TEXT="把化学问题写成问答并微调 GPT，小数据下可比肩专用模型。" />
          </node>
          <node TEXT="ChemBench｜Nature Chemistry 2025｜已有扩展" LINK="https://www.nature.com/articles/s41557-025-01815-x">
            <node TEXT="A framework for evaluating the chemical knowledge and reasoning abilities of large language models against the expertise of chemists" />
            <node TEXT="两千多道题系统评测大模型的化学知识，并与化学家对比。" />
          </node>
        </node>
      </node>
      <node TEXT="Chemistry Agents｜化学智能体" FOLDED="true">
        <node TEXT="原问题：语言模型怎样调用化学工具或与人协作，完成设计与实验任务？" />
        <node TEXT="输入与输出：研究目标 → 语言模型规划与工具调用或人机对话 → 合成方案与实验结果" />
        <node TEXT="已有扩展轴：专业工具集成、人机协同实验、自动化平台执行" />
        <node TEXT="代表论文与阅读顺序">
          <node TEXT="GPT-4 Reticular Chemist｜Angewandte Chemie International Edition 2023｜较早入口" LINK="https://onlinelibrary.wiley.com/doi/full/10.1002/anie.202311983">
            <node TEXT="A GPT-4 Reticular Chemist for Guiding MOF Discovery" />
            <node TEXT="化学家与 GPT-4 对话协作，迭代完成材料合成与表征。" />
          </node>
          <node TEXT="ChemCrow｜Nature Machine Intelligence 2024｜近年代表" LINK="https://www.nature.com/articles/s42256-024-00832-8">
            <node TEXT="Augmenting large language models with chemistry tools" />
            <node TEXT="语言模型调用专业化学工具完成合成规划与分子设计。" />
          </node>
        </node>
      </node>
    </node>
    <node TEXT="自主实验与可靠性｜自主实验室能否可靠地加速发现？" POSITION="right" FOLDED="true">
      <node TEXT="Autonomous Laboratories｜自主实验室" FOLDED="true">
        <node TEXT="原问题：怎样让机器人与算法自主完成从计划到合成、表征的完整实验循环？" />
        <node TEXT="输入与输出：目标材料或反应 → 自主规划 → 机器人合成与表征 → 结果解析与下一轮实验" />
        <node TEXT="已有扩展轴：移动机器人、无机材料自主合成、语言模型驱动、探索性合成" />
        <node TEXT="代表论文与阅读顺序">
          <node TEXT="Mobile robotic chemist｜Nature 2020｜较早入口" LINK="https://www.nature.com/articles/s41586-020-2442-2">
            <node TEXT="A mobile robotic chemist" />
            <node TEXT="移动机器人在普通实验室中自主开展光催化材料优化。" />
          </node>
          <node TEXT="A-Lab｜Nature 2023｜近年代表" LINK="https://www.nature.com/articles/s41586-023-06734-w">
            <node TEXT="An autonomous laboratory for the accelerated synthesis of inorganic materials" />
            <node TEXT="结合计算、文献知识与主动学习，17 天内自主合成多种目标无机材料。" />
          </node>
          <node TEXT="Coscientist｜Nature 2023｜近年代表" LINK="https://www.nature.com/articles/s41586-023-06792-0">
            <node TEXT="Autonomous chemical research with large language models" />
            <node TEXT="语言模型规划并控制实验硬件，完成偶联反应的设计与优化。" />
          </node>
          <node TEXT="Exploratory synthesis robots｜Nature 2024｜已有扩展" LINK="https://www.nature.com/articles/s41586-024-08173-7">
            <node TEXT="Autonomous mobile robots for exploratory synthetic chemistry" />
            <node TEXT="移动机器人共享仪器，并用多种表征数据做探索性合成决策。" />
          </node>
        </node>
      </node>
      <node TEXT="Critical Evaluation of AI Discovery｜对 AI 发现结果的检验" FOLDED="true">
        <node TEXT="原问题：AI 宣称发现的新材料是否真的新颖、稳定、被成功合成？" />
        <node TEXT="输入与输出：机器学习预测或自主实验结果 → 独立评估与基准 → 可靠性结论" />
        <node TEXT="已有扩展轴：稳定性预测的误差传播、预测性基准、对新颖性与合成结果的复核" />
        <node TEXT="代表论文与阅读顺序">
          <node TEXT="Stability examination｜npj Computational Materials 2020｜较早入口" LINK="https://www.nature.com/articles/s41524-020-00362-y">
            <node TEXT="A critical examination of compound stability predictions from machine-learned formation energies" />
            <node TEXT="形成能预测准确并不代表稳定性判断准确。" />
          </node>
          <node TEXT="Matbench Discovery｜Nature Machine Intelligence 2025｜近年代表" LINK="https://www.nature.com/articles/s42256-025-01055-1">
            <node TEXT="A framework to evaluate machine learning crystal stability predictions" />
            <node TEXT="用前瞻性筛选任务评估模型预测晶体稳定性的实际效果。" />
          </node>
          <node TEXT="GNoME perspective｜Chemistry of Materials 2024｜已有扩展" LINK="https://doi.org/10.1021/acs.chemmater.4c00643">
            <node TEXT="Artificial Intelligence Driving Materials Discovery? Perspective on the Article: Scaling Deep Learning for Materials Discovery" />
            <node TEXT="从化学角度质疑大规模预测材料的新颖性与实用性。" />
          </node>
          <node TEXT="A-Lab challenges｜PRX Energy 2024｜已有扩展" LINK="https://doi.org/10.1103/prxenergy.3.011002">
            <node TEXT="Challenges in High-Throughput Inorganic Materials Prediction and Autonomous Synthesis" />
            <node TEXT="复核自主实验室的结构表征，指出合成结论需要更严格的证据。" />
          </node>
        </node>
      </node>
    </node>
    <node TEXT="六条概念阅读路线（整理关系）" FOLDED="true" POSITION="right">
      <node TEXT="从电子结构到原子模拟">
        <node TEXT="神经网络波函数 → 机器学习泛函 → 原子间势 → 通用势" />
        <node TEXT="Neural Network Wavefunctions｜神经网络波函数">
          <node TEXT="FermiNet｜Physical Review Research 2020" LINK="https://doi.org/10.1103/physrevresearch.2.033429" />
          <node TEXT="Psiformer｜ICLR 2023" LINK="https://openreview.net/forum?id=xveTeHVlF7j" />
        </node>
        <node TEXT="Machine-Learned Density Functionals｜机器学习密度泛函">
          <node TEXT="DM21｜Science 2021" LINK="https://www.science.org/doi/10.1126/science.abj6511" />
        </node>
        <node TEXT="Equivariant Interatomic Potentials｜等变原子间势">
          <node TEXT="NequIP｜Nature Communications 2022" LINK="https://www.nature.com/articles/s41467-022-29939-5" />
          <node TEXT="MACE｜NeurIPS 2022" LINK="https://proceedings.neurips.cc/paper_files/paper/2022/hash/4a36c3c51af11ed9f34615b81edb5bbc-Abstract-Conference.html" />
        </node>
        <node TEXT="Universal Interatomic Potentials｜通用原子间势">
          <node TEXT="M3GNet｜Nature Computational Science 2022" LINK="https://www.nature.com/articles/s43588-022-00349-3" />
          <node TEXT="CHGNet｜Nature Machine Intelligence 2023" LINK="https://www.nature.com/articles/s42256-023-00716-3" />
        </node>
      </node>
      <node TEXT="从性质预测到材料生成">
        <node TEXT="晶体图网络 → 数据与基准 → 生成模型 → 条件逆向设计" />
        <node TEXT="Crystal Graph Networks｜晶体图神经网络">
          <node TEXT="CGCNN｜Physical Review Letters 2018" LINK="https://doi.org/10.1103/physrevlett.120.145301" />
          <node TEXT="ALIGNN｜npj Computational Materials 2021" LINK="https://www.nature.com/articles/s41524-021-00650-1" />
        </node>
        <node TEXT="Materials Data &amp; Benchmarks｜材料数据与基准">
          <node TEXT="Materials Project｜APL Materials 2013" LINK="https://doi.org/10.1063/1.4812323" />
          <node TEXT="Matbench｜npj Computational Materials 2020" LINK="https://www.nature.com/articles/s41524-020-00406-3" />
        </node>
        <node TEXT="Crystal Generative Models｜晶体生成模型">
          <node TEXT="CDVAE｜ICLR 2022" LINK="https://openreview.net/forum?id=03RLpj-tc_" />
          <node TEXT="DiffCSP｜NeurIPS 2023" LINK="https://proceedings.neurips.cc/paper_files/paper/2023/hash/38b787fc530d0b31825827e2cc306656-Abstract.html" />
        </node>
        <node TEXT="Conditional Inverse Design｜条件逆向设计">
          <node TEXT="MatterGen｜Nature 2025" LINK="https://www.nature.com/articles/s41586-025-08628-5" />
        </node>
      </node>
      <node TEXT="从预测到可信发现">
        <node TEXT="大规模筛选 → 稳定性检验 → 自主合成 → 独立复核" />
        <node TEXT="Large-Scale Materials Discovery｜大规模材料发现">
          <node TEXT="GNoME｜Nature 2023" LINK="https://www.nature.com/articles/s41586-023-06735-9" />
        </node>
        <node TEXT="Critical Evaluation of AI Discovery｜对 AI 发现结果的检验">
          <node TEXT="Stability examination｜npj Computational Materials 2020" LINK="https://www.nature.com/articles/s41524-020-00362-y" />
          <node TEXT="Matbench Discovery｜Nature Machine Intelligence 2025" LINK="https://www.nature.com/articles/s42256-025-01055-1" />
          <node TEXT="GNoME perspective｜Chemistry of Materials 2024" LINK="https://doi.org/10.1021/acs.chemmater.4c00643" />
          <node TEXT="A-Lab challenges｜PRX Energy 2024" LINK="https://doi.org/10.1103/prxenergy.3.011002" />
        </node>
        <node TEXT="Autonomous Laboratories｜自主实验室">
          <node TEXT="A-Lab｜Nature 2023" LINK="https://www.nature.com/articles/s41586-023-06734-w" />
        </node>
      </node>
      <node TEXT="从反应数据到自动合成">
        <node TEXT="反应预测 → 逆合成规划 → 条件优化 → 自主实验" />
        <node TEXT="Reaction Outcome Prediction｜反应结果预测">
          <node TEXT="Molecular Transformer｜ACS Central Science 2019" LINK="https://doi.org/10.1021/acscentsci.9b00576" />
        </node>
        <node TEXT="Retrosynthesis &amp; Synthesis Planning｜逆合成与合成规划">
          <node TEXT="3N-MCTS｜Nature 2018" LINK="https://www.nature.com/articles/nature25978" />
          <node TEXT="AI-planned flow synthesis｜Science 2019" LINK="https://www.science.org/doi/10.1126/science.aax1566" />
        </node>
        <node TEXT="Reaction Optimization｜反应条件优化">
          <node TEXT="Bayesian reaction optimization｜Nature 2021" LINK="https://www.nature.com/articles/s41586-021-03213-y" />
        </node>
        <node TEXT="Autonomous Laboratories｜自主实验室">
          <node TEXT="Mobile robotic chemist｜Nature 2020" LINK="https://www.nature.com/articles/s41586-020-2442-2" />
          <node TEXT="Coscientist｜Nature 2023" LINK="https://www.nature.com/articles/s41586-023-06792-0" />
        </node>
      </node>
      <node TEXT="从文献到智能体">
        <node TEXT="文本挖掘 → 大模型预测 → 知识评测 → 化学智能体" />
        <node TEXT="Materials Text Mining｜材料文本挖掘">
          <node TEXT="Materials word embeddings｜Nature 2019" LINK="https://www.nature.com/articles/s41586-019-1335-8" />
          <node TEXT="LLM-NERRE｜Nature Communications 2024" LINK="https://www.nature.com/articles/s41467-024-45563-x" />
        </node>
        <node TEXT="LLMs for Chemical Prediction &amp; Evaluation｜化学预测与评测中的大语言模型">
          <node TEXT="LLM predictive chemistry｜Nature Machine Intelligence 2024" LINK="https://www.nature.com/articles/s42256-023-00788-1" />
          <node TEXT="ChemBench｜Nature Chemistry 2025" LINK="https://www.nature.com/articles/s41557-025-01815-x" />
        </node>
        <node TEXT="Chemistry Agents｜化学智能体">
          <node TEXT="GPT-4 Reticular Chemist｜Angewandte Chemie International Edition 2023" LINK="https://onlinelibrary.wiley.com/doi/full/10.1002/anie.202311983" />
          <node TEXT="ChemCrow｜Nature Machine Intelligence 2024" LINK="https://www.nature.com/articles/s42256-024-00832-8" />
        </node>
      </node>
      <node TEXT="从催化到能源器件">
        <node TEXT="主动学习筛选 → 催化数据集 → 吸附能加速 → 电池闭环优化" />
        <node TEXT="Adsorption Energy Search｜吸附能与构型搜索">
          <node TEXT="Intermetallic active learning｜Nature Catalysis 2018" LINK="https://www.nature.com/articles/s41929-018-0142-1" />
          <node TEXT="AdsorbML｜npj Computational Materials 2023" LINK="https://www.nature.com/articles/s41524-023-01121-5" />
        </node>
        <node TEXT="Catalyst Datasets &amp; Models｜催化数据集与模型">
          <node TEXT="OC20｜ACS Catalysis 2021" LINK="https://doi.org/10.1021/acscatal.0c04525" />
          <node TEXT="OC22｜ACS Catalysis 2023" LINK="https://doi.org/10.1021/acscatal.2c05426" />
        </node>
        <node TEXT="Battery &amp; Electrolyte Discovery｜电池与电解质发现">
          <node TEXT="Battery cycle life｜Nature Energy 2019" LINK="https://www.nature.com/articles/s41560-019-0356-8" />
          <node TEXT="Fast-charging optimization｜Nature 2020" LINK="https://www.nature.com/articles/s41586-020-1994-5" />
        </node>
      </node>
    </node>
  </node>
</map>
