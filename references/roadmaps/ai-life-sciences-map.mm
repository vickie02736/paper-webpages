<?xml version='1.0' encoding='utf-8'?>
<map version="1.0.1">
  <node TEXT="AI for Life Sciences 研究地图｜药物、生物与医疗｜截至 2026-10-25">
    <node TEXT="以 2021–2026 年正式发表的期刊与顶会论文为主，补充少量 2018–2020 年的必要入口；以 Crossref、OpenReview 与出版方页面为核验依据，年份采用正式引用年份。" />
    <node TEXT="分类与阅读路线为本次整理，不表示严格引用继承、唯一分类或尚无人研究的空白。同一方法可能同时属于多个方向，这里只放在最直接的一个子方向下。" />
    <node TEXT="蛋白质结构与设计｜怎样从序列理解结构，并按功能设计新蛋白？" POSITION="right" FOLDED="true">
      <node TEXT="Protein Structure Prediction｜蛋白质结构预测" FOLDED="true">
        <node TEXT="原问题：只给定氨基酸序列时，怎样预测原子级三维结构？" />
        <node TEXT="输入与输出：序列与多序列比对或语言模型表征 → 三维坐标与置信度" />
        <node TEXT="已有扩展轴：去掉多序列比对、扩展到复合物与小分子、置信度校准" />
        <node TEXT="代表论文与阅读顺序">
          <node TEXT="AlphaFold2｜Nature 2021｜较早入口" LINK="https://www.nature.com/articles/s41586-021-03819-2">
            <node TEXT="Highly accurate protein structure prediction with AlphaFold" />
            <node TEXT="以 Evoformer 与结构模块端到端预测结构；CASP14 达到接近实验精度。" />
          </node>
          <node TEXT="RoseTTAFold｜Science 2021｜较早入口" LINK="https://www.science.org/doi/10.1126/science.abj8754">
            <node TEXT="Accurate prediction of protein structures and interactions using a three-track neural network" />
            <node TEXT="序列、距离图与三维坐标三条通路并行交换信息。" />
          </node>
          <node TEXT="ESMFold｜Science 2023｜近年代表" LINK="https://www.science.org/doi/10.1126/science.ade2574">
            <node TEXT="Evolutionary-scale prediction of atomic-level protein structure with a language model" />
            <node TEXT="只用蛋白质语言模型表征预测结构，速度快一个数量级。" />
          </node>
          <node TEXT="AlphaFold 3｜Nature 2024｜已有扩展" LINK="https://www.nature.com/articles/s41586-024-07487-w">
            <node TEXT="Accurate structure prediction of biomolecular interactions with AlphaFold 3" />
            <node TEXT="以扩散模块统一预测蛋白、核酸、小分子与修饰的复合物。" />
          </node>
        </node>
      </node>
      <node TEXT="Protein Language Models｜蛋白质语言模型" FOLDED="true">
        <node TEXT="原问题：不依赖结构标注，怎样从海量序列中学到功能与进化信息？" />
        <node TEXT="输入与输出：未标注蛋白序列 → 自监督表征或生成模型 → 下游性质、结构与新序列" />
        <node TEXT="已有扩展轴：模型规模、条件生成、多模态（序列、结构、功能）联合建模" />
        <node TEXT="代表论文与阅读顺序">
          <node TEXT="ESM-1b｜PNAS 2021｜较早入口" LINK="https://doi.org/10.1073/pnas.2016239118">
            <node TEXT="Biological structure and function emerge from scaling unsupervised learning to 250 million protein sequences" />
            <node TEXT="掩码语言模型的表征中自然出现二级结构与接触信息。" />
          </node>
          <node TEXT="ProtTrans｜IEEE TPAMI 2022｜近年代表" LINK="https://doi.org/10.1109/tpami.2021.3095381">
            <node TEXT="ProtTrans: Toward Understanding the Language of Life Through Self-Supervised Learning" />
            <node TEXT="系统比较多种 Transformer 架构在蛋白序列上的自监督预训练。" />
          </node>
          <node TEXT="ProGen｜Nature Biotechnology 2023｜已有扩展" LINK="https://www.nature.com/articles/s41587-022-01618-2">
            <node TEXT="Large language models generate functional protein sequences across diverse families" />
            <node TEXT="条件语言模型生成的溶菌酶经实验验证具有活性。" />
          </node>
          <node TEXT="ESM3｜Science 2025｜2026 扩展" LINK="https://www.science.org/doi/10.1126/science.ads0018">
            <node TEXT="Simulating 500 million years of evolution with a language model" />
            <node TEXT="序列、结构与功能三种模态联合生成；设计出远离天然序列的荧光蛋白。" />
          </node>
        </node>
      </node>
      <node TEXT="De Novo Protein Design｜从头蛋白设计" FOLDED="true">
        <node TEXT="原问题：给定功能或几何约束，怎样设计自然界不存在的新蛋白？" />
        <node TEXT="输入与输出：目标形状、结合位点或对称性 → 主链结构 → 氨基酸序列 → 实验验证" />
        <node TEXT="已有扩展轴：主链生成、逆折叠序列设计、可编程条件、实验成功率" />
        <node TEXT="代表论文与阅读顺序">
          <node TEXT="ProteinMPNN｜Science 2022｜较早入口" LINK="https://www.science.org/doi/10.1126/science.add2187">
            <node TEXT="Robust deep learning–based protein sequence design using ProteinMPNN" />
            <node TEXT="给定主链结构预测可折叠的序列，实验成功率大幅提高。" />
          </node>
          <node TEXT="FrameDiff｜ICML 2023｜近年代表" LINK="https://proceedings.mlr.press/v202/yim23a.html">
            <node TEXT="SE(3) diffusion model with application to protein backbone generation" />
            <node TEXT="在 SE(3) 刚体框架流形上做扩散，直接生成蛋白主链。" />
          </node>
          <node TEXT="RFdiffusion｜Nature 2023｜近年代表" LINK="https://www.nature.com/articles/s41586-023-06415-8">
            <node TEXT="De novo design of protein structure and function with RFdiffusion" />
            <node TEXT="微调 RoseTTAFold 做扩散去噪，设计结合蛋白与对称组装体。" />
          </node>
          <node TEXT="Chroma｜Nature 2023｜已有扩展" LINK="https://www.nature.com/articles/s41586-023-06728-8">
            <node TEXT="Illuminating protein space with a programmable generative model" />
            <node TEXT="用可组合的条件约束（形状、对称、语义）编程式生成蛋白。" />
          </node>
        </node>
      </node>
    </node>
    <node TEXT="分子相互作用与复合物｜小分子怎样与靶点结合，结合是否可信？" POSITION="right" FOLDED="true">
      <node TEXT="Molecular Docking｜分子对接" FOLDED="true">
        <node TEXT="原问题：给定蛋白与小分子，怎样预测结合构象？" />
        <node TEXT="输入与输出：蛋白结构与配体图 → 配体在口袋中的三维位姿与置信度" />
        <node TEXT="已有扩展轴：盲对接、生成式位姿采样、物理合理性检验" />
        <node TEXT="代表论文与阅读顺序">
          <node TEXT="EquiBind｜ICML 2022｜较早入口" LINK="https://proceedings.mlr.press/v162/stark22b.html">
            <node TEXT="EquiBind: Geometric Deep Learning for Drug Binding Structure Prediction" />
            <node TEXT="SE(3) 等变图网络一次前向预测结合位姿，速度远超传统对接。" />
          </node>
          <node TEXT="DiffDock｜ICLR 2023｜近年代表" LINK="https://openreview.net/forum?id=kKF8_K-mBbS">
            <node TEXT="DiffDock: Diffusion Steps, Twists, and Turns for Molecular Docking" />
            <node TEXT="在平移、旋转和扭转角空间做扩散，把对接看成生成问题。" />
          </node>
          <node TEXT="PoseBusters｜Chemical Science 2024｜已有扩展" LINK="https://doi.org/10.1039/d3sc04185a">
            <node TEXT="PoseBusters: AI-based docking methods fail to generate physically valid poses or generalise to novel sequences" />
            <node TEXT="检查键长、碰撞等物理合理性，发现许多深度学习位姿并不可信。" />
          </node>
        </node>
      </node>
      <node TEXT="Biomolecular Complex Modeling｜生物分子复合物建模" FOLDED="true">
        <node TEXT="原问题：怎样同时预测蛋白与配体、核酸等组成的整体复合物结构？" />
        <node TEXT="输入与输出：蛋白序列与配体或核酸 → 全原子复合物结构" />
        <node TEXT="已有扩展轴：全原子表示、蛋白构象变化、配体特异性" />
        <node TEXT="代表论文与阅读顺序">
          <node TEXT="NeuralPLexer｜Nature Machine Intelligence 2024｜近年代表" LINK="https://www.nature.com/articles/s42256-024-00792-z">
            <node TEXT="State-specific protein–ligand complex structure prediction with a multiscale deep generative model" />
            <node TEXT="多尺度扩散模型生成配体结合态的蛋白构象。" />
          </node>
          <node TEXT="DynamicBind｜Nature Communications 2024｜已有扩展" LINK="https://www.nature.com/articles/s41467-024-45461-2">
            <node TEXT="DynamicBind: predicting ligand-specific protein-ligand complex structure with a deep equivariant generative model" />
            <node TEXT="从 AlphaFold 预测的无配体结构出发，恢复配体诱导的构象。" />
          </node>
          <node TEXT="RoseTTAFold All-Atom｜Science 2024｜已有扩展" LINK="https://www.science.org/doi/10.1126/science.adl2528">
            <node TEXT="Generalized biomolecular modeling and design with RoseTTAFold All-Atom" />
            <node TEXT="把 RoseTTAFold 推广到全原子复合物，并用于设计小分子结合蛋白。" />
          </node>
        </node>
      </node>
      <node TEXT="Virtual Screening &amp; Activity Prediction｜虚拟筛选与活性预测" FOLDED="true">
        <node TEXT="原问题：在巨大的化合物库中，怎样快速找到真正有活性的分子？" />
        <node TEXT="输入与输出：化合物库与靶点或表型数据 → 活性打分 → 排名靠前的候选与实验验证" />
        <node TEXT="已有扩展轴：表型筛选、对比学习检索、可解释子结构" />
        <node TEXT="代表论文与阅读顺序">
          <node TEXT="Halicin｜Cell 2020｜较早入口" LINK="https://doi.org/10.1016/j.cell.2020.01.021">
            <node TEXT="A Deep Learning Approach to Antibiotic Discovery" />
            <node TEXT="图网络筛选上亿分子，发现结构新颖的抗生素 halicin。" />
          </node>
          <node TEXT="DrugCLIP｜NeurIPS 2023｜近年代表" LINK="https://proceedings.neurips.cc/paper_files/paper/2023/hash/8bd31288ad8e9a31d519fdeede7ee47d-Abstract-Conference.html">
            <node TEXT="DrugCLIP: Contrastive Protein-Molecule Representation Learning for Virtual Screening" />
            <node TEXT="把虚拟筛选当作口袋与分子的对比检索，速度远快于对接。" />
          </node>
          <node TEXT="Explainable antibiotics｜Nature 2024｜已有扩展" LINK="https://www.nature.com/articles/s41586-023-06887-8">
            <node TEXT="Discovery of a structural class of antibiotics with explainable deep learning" />
            <node TEXT="用可解释图网络定位决定活性的子结构，发现一类新抗生素。" />
          </node>
        </node>
      </node>
    </node>
    <node TEXT="分子生成与药物设计｜怎样生成有活性、可合成的候选分子？" POSITION="right" FOLDED="true">
      <node TEXT="3D Molecule Generation｜三维分子生成" FOLDED="true">
        <node TEXT="原问题：怎样直接生成满足几何与靶点口袋约束的三维分子？" />
        <node TEXT="输入与输出：原子类型与坐标（可选靶点口袋） → 新分子的三维结构" />
        <node TEXT="已有扩展轴：等变扩散、口袋条件、亲和力联合预测" />
        <node TEXT="代表论文与阅读顺序">
          <node TEXT="EDM｜ICML 2022｜较早入口" LINK="https://proceedings.mlr.press/v162/hoogeboom22a.html">
            <node TEXT="Equivariant Diffusion for Molecule Generation in 3D" />
            <node TEXT="E(3) 等变扩散同时生成原子类型与坐标。" />
          </node>
          <node TEXT="Pocket2Mol｜ICML 2022｜近年代表" LINK="https://proceedings.mlr.press/v162/peng22b.html">
            <node TEXT="Pocket2Mol: Efficient Molecular Sampling Based on 3D Protein Pockets" />
            <node TEXT="以口袋为条件逐原子自回归生成分子。" />
          </node>
          <node TEXT="TargetDiff｜ICLR 2023｜已有扩展" LINK="https://openreview.net/forum?id=kJqXEPXMsE0">
            <node TEXT="3D Equivariant Diffusion for Target-Aware Molecule Generation and Affinity Prediction" />
            <node TEXT="口袋条件扩散生成分子，并用同一模型估计结合亲和力。" />
          </node>
          <node TEXT="DiffSBDD｜Nature Computational Science 2024｜已有扩展" LINK="https://www.nature.com/articles/s43588-024-00737-x">
            <node TEXT="Structure-based drug design with equivariant diffusion models" />
            <node TEXT="统一处理从头生成、片段生长与骨架替换等设计任务。" />
          </node>
        </node>
      </node>
      <node TEXT="Molecular Representation &amp; Property Prediction｜分子表征与性质预测" FOLDED="true">
        <node TEXT="原问题：怎样学到通用的分子表示，以较少标注预测性质？" />
        <node TEXT="输入与输出：分子图、SMILES 或三维构象 → 预训练表征 → 性质与活性预测" />
        <node TEXT="已有扩展轴：自监督预训练、三维几何信息、跨任务迁移" />
        <node TEXT="代表论文与阅读顺序">
          <node TEXT="MolCLR｜Nature Machine Intelligence 2022｜较早入口" LINK="https://www.nature.com/articles/s42256-022-00447-x">
            <node TEXT="Molecular contrastive learning of representations via graph neural networks" />
            <node TEXT="对分子图做增强后对比学习，用于少标注性质预测。" />
          </node>
          <node TEXT="GEM｜Nature Machine Intelligence 2022｜近年代表" LINK="https://www.nature.com/articles/s42256-021-00438-4">
            <node TEXT="Geometry-enhanced molecular representation learning for property prediction" />
            <node TEXT="把键长、键角等几何信息纳入图网络预训练。" />
          </node>
          <node TEXT="Uni-Mol｜ICLR 2023｜已有扩展" LINK="https://openreview.net/forum?id=6K2RM6wVqKu">
            <node TEXT="Uni-Mol: A Universal 3D Molecular Representation Learning Framework" />
            <node TEXT="基于三维坐标的 Transformer 预训练，同时服务分子与口袋任务。" />
          </node>
        </node>
      </node>
      <node TEXT="Retrosynthesis &amp; Synthesis Planning｜逆合成与合成规划" FOLDED="true">
        <node TEXT="原问题：给定目标分子，怎样规划可行的合成路线？" />
        <node TEXT="输入与输出：目标分子 → 单步逆合成预测 → 多步路线搜索 → 可购原料" />
        <node TEXT="已有扩展轴：单步模型精度、多步搜索、反应表示与可解释性" />
        <node TEXT="代表论文与阅读顺序">
          <node TEXT="3N-MCTS｜Nature 2018｜较早入口" LINK="https://www.nature.com/articles/nature25978">
            <node TEXT="Planning chemical syntheses with deep neural networks and symbolic AI" />
            <node TEXT="神经网络策略结合蒙特卡洛树搜索规划多步合成路线。" />
          </node>
          <node TEXT="Retro*｜ICML 2020｜较早入口" LINK="https://proceedings.mlr.press/v119/chen20k.html">
            <node TEXT="Retro*: Learning Retrosynthetic Planning with Neural Guided A* Search" />
            <node TEXT="用学习的代价估计引导 A* 风格的与或树搜索。" />
          </node>
          <node TEXT="LocalRetro｜JACS Au 2021｜近年代表" LINK="https://doi.org/10.1021/jacsau.1c00246">
            <node TEXT="Deep Retrosynthetic Reaction Prediction using Local Reactivity and Global Attention" />
            <node TEXT="只在局部反应中心预测反应模板，再用全局注意力补充上下文。" />
          </node>
          <node TEXT="R-SMILES｜Chemical Science 2022｜已有扩展" LINK="https://doi.org/10.1039/d2sc02763a">
            <node TEXT="Root-aligned SMILES: a tight representation for chemical reaction prediction" />
            <node TEXT="对齐反应物与产物 SMILES 的起点，降低序列模型的学习难度。" />
          </node>
        </node>
      </node>
    </node>
    <node TEXT="基因组与单细胞｜怎样从序列和细胞状态读出调控规律？" POSITION="right" FOLDED="true">
      <node TEXT="Genomic Sequence Models｜基因组序列模型" FOLDED="true">
        <node TEXT="原问题：怎样直接从 DNA 序列预测调控活性与功能？" />
        <node TEXT="输入与输出：DNA 序列 → 表达、染色质信号或生成的新序列" />
        <node TEXT="已有扩展轴：长程依赖、单碱基分辨率、跨物种预训练与生成" />
        <node TEXT="代表论文与阅读顺序">
          <node TEXT="Enformer｜Nature Methods 2021｜较早入口" LINK="https://www.nature.com/articles/s41592-021-01252-x">
            <node TEXT="Effective gene expression prediction from sequence by integrating long-range interactions" />
            <node TEXT="用 Transformer 捕捉约 100 kb 范围内的增强子与基因相互作用。" />
          </node>
          <node TEXT="HyenaDNA｜NeurIPS 2023｜近年代表" LINK="https://proceedings.neurips.cc/paper_files/paper/2023/hash/86ab6927ee4ae9bde4247793c46797c7-Abstract-Conference.html">
            <node TEXT="HyenaDNA: Long-Range Genomic Sequence Modeling at Single Nucleotide Resolution" />
            <node TEXT="用隐式长卷积在百万碱基上下文中做单碱基建模。" />
          </node>
          <node TEXT="Evo｜Science 2024｜已有扩展" LINK="https://www.science.org/doi/10.1126/science.ado9336">
            <node TEXT="Sequence modeling and design from molecular to genome scale with Evo" />
            <node TEXT="在原核基因组上训练长上下文模型，可生成 CRISPR 系统等功能序列。" />
          </node>
          <node TEXT="Nucleotide Transformer｜Nature Methods 2025｜已有扩展" LINK="https://www.nature.com/articles/s41592-024-02523-z">
            <node TEXT="Nucleotide Transformer: building and evaluating robust foundation models for human genomics" />
            <node TEXT="多物种基因组预训练，系统评估在人类基因组任务上的迁移。" />
          </node>
        </node>
      </node>
      <node TEXT="Single-Cell Foundation Models｜单细胞基础模型" FOLDED="true">
        <node TEXT="原问题：怎样从海量单细胞数据中学到可迁移的细胞与基因表示？" />
        <node TEXT="输入与输出：单细胞表达谱 → 细胞与基因表示 → 注释、整合与网络推断" />
        <node TEXT="已有扩展轴：生成式建模、预训练规模、零样本可靠性" />
        <node TEXT="代表论文与阅读顺序">
          <node TEXT="scVI｜Nature Methods 2018｜较早入口" LINK="https://www.nature.com/articles/s41592-018-0229-2">
            <node TEXT="Deep generative modeling for single-cell transcriptomics" />
            <node TEXT="变分自编码器同时处理批次效应、测序深度与降维。" />
          </node>
          <node TEXT="Geneformer｜Nature 2023｜近年代表" LINK="https://www.nature.com/articles/s41586-023-06139-9">
            <node TEXT="Transfer learning enables predictions in network biology" />
            <node TEXT="在约三千万单细胞上预训练，按基因表达排序作为输入。" />
          </node>
          <node TEXT="scGPT｜Nature Methods 2024｜近年代表" LINK="https://www.nature.com/articles/s41592-024-02201-0">
            <node TEXT="scGPT: toward building a foundation model for single-cell multi-omics using generative AI" />
            <node TEXT="生成式预训练用于细胞注释、批次整合与扰动预测。" />
          </node>
          <node TEXT="Zero-shot scFM｜Genome Biology 2025｜已有扩展" LINK="https://doi.org/10.1186/s13059-025-03574-x">
            <node TEXT="Zero-shot evaluation reveals limitations of single-cell foundation models" />
            <node TEXT="零样本评测显示现有单细胞基础模型常不如简单基线。" />
          </node>
        </node>
      </node>
      <node TEXT="Perturbation &amp; Variant Effect Prediction｜扰动与变异效应预测" FOLDED="true">
        <node TEXT="原问题：基因扰动或突变会怎样改变细胞状态和疾病风险？" />
        <node TEXT="输入与输出：扰动或变异 → 表达变化或致病性评分" />
        <node TEXT="已有扩展轴：未见扰动组合、进化先验、蛋白质语言模型" />
        <node TEXT="代表论文与阅读顺序">
          <node TEXT="EVE｜Nature 2021｜较早入口" LINK="https://www.nature.com/articles/s41586-021-04043-8">
            <node TEXT="Disease variant prediction with deep generative models of evolutionary data" />
            <node TEXT="只用进化序列训练生成模型，无监督预测错义变异致病性。" />
          </node>
          <node TEXT="CPA｜Molecular Systems Biology 2023｜近年代表" LINK="https://doi.org/10.15252/msb.202211517">
            <node TEXT="Predicting cellular responses to complex perturbations in high-throughput screens" />
            <node TEXT="在隐空间中分解细胞状态与药物、剂量等扰动效应。" />
          </node>
          <node TEXT="AlphaMissense｜Science 2023｜已有扩展" LINK="https://www.science.org/doi/10.1126/science.adg7492">
            <node TEXT="Accurate proteome-wide missense variant effect prediction with AlphaMissense" />
            <node TEXT="在 AlphaFold 基础上微调，给出全蛋白组错义变异致病性评分。" />
          </node>
          <node TEXT="GEARS｜Nature Biotechnology 2024｜已有扩展" LINK="https://www.nature.com/articles/s41587-023-01905-6">
            <node TEXT="Predicting transcriptional outcomes of novel multigene perturbations with GEARS" />
            <node TEXT="把基因关系知识图纳入模型，预测未见多基因扰动的效果。" />
          </node>
        </node>
      </node>
    </node>
    <node TEXT="医学影像与病理｜怎样从医学图像中得到可用于诊断的结构与信号？" POSITION="right" FOLDED="true">
      <node TEXT="Medical Image Segmentation｜医学图像分割" FOLDED="true">
        <node TEXT="原问题：怎样在不同模态、器官和医院数据上可靠地分割解剖结构与病灶？" />
        <node TEXT="输入与输出：CT、MRI 等图像（可选提示） → 像素级分割掩码" />
        <node TEXT="已有扩展轴：自动配置、可提示分割、全身多结构覆盖" />
        <node TEXT="代表论文与阅读顺序">
          <node TEXT="nnU-Net｜Nature Methods 2021｜较早入口" LINK="https://www.nature.com/articles/s41592-020-01008-z">
            <node TEXT="nnU-Net: a self-configuring method for deep learning-based biomedical image segmentation" />
            <node TEXT="按数据集特征自动配置 U-Net 流程，成为分割强基线。" />
          </node>
          <node TEXT="TotalSegmentator｜Radiology: Artificial Intelligence 2023｜近年代表" LINK="https://doi.org/10.1148/ryai.230024">
            <node TEXT="TotalSegmentator: Robust Segmentation of 104 Anatomic Structures in CT Images" />
            <node TEXT="一个模型分割 CT 中 104 种解剖结构，并开源使用。" />
          </node>
          <node TEXT="MedSAM｜Nature Communications 2024｜已有扩展" LINK="https://www.nature.com/articles/s41467-024-44824-z">
            <node TEXT="Segment anything in medical images" />
            <node TEXT="在百万级医学图像掩码上微调 SAM，实现通用可提示分割。" />
          </node>
        </node>
      </node>
      <node TEXT="Computational Pathology Foundation Models｜计算病理基础模型" FOLDED="true">
        <node TEXT="原问题：怎样从吉像素级全切片图像中学习通用的病理表示？" />
        <node TEXT="输入与输出：全切片病理图像（可选文本） → 切片或区域表示 → 诊断、分型与预后" />
        <node TEXT="已有扩展轴：弱监督多实例学习、自监督预训练规模、视觉语言对齐、全切片上下文" />
        <node TEXT="代表论文与阅读顺序">
          <node TEXT="CLAM｜Nature Biomedical Engineering 2021｜较早入口" LINK="https://www.nature.com/articles/s41551-020-00682-w">
            <node TEXT="Data-efficient and weakly supervised computational pathology on whole-slide images" />
            <node TEXT="只用切片级标签，用注意力多实例学习定位诊断区域。" />
          </node>
          <node TEXT="UNI｜Nature Medicine 2024｜近年代表" LINK="https://www.nature.com/articles/s41591-024-02857-3">
            <node TEXT="Towards a general-purpose foundation model for computational pathology" />
            <node TEXT="在一亿多张病理图块上自监督预训练的通用视觉编码器。" />
          </node>
          <node TEXT="CONCH｜Nature Medicine 2024｜近年代表" LINK="https://www.nature.com/articles/s41591-024-02856-4">
            <node TEXT="A visual-language foundation model for computational pathology" />
            <node TEXT="用病理图文对做对比与生成预训练，支持零样本分类与检索。" />
          </node>
          <node TEXT="Prov-GigaPath｜Nature 2024｜已有扩展" LINK="https://www.nature.com/articles/s41586-024-07441-w">
            <node TEXT="A whole-slide foundation model for digital pathology from real-world data" />
            <node TEXT="用长序列模型建模整张切片的上下文，基于真实世界数据训练。" />
          </node>
        </node>
      </node>
      <node TEXT="Medical Vision-Language Foundation Models｜医学视觉语言与基础模型" FOLDED="true">
        <node TEXT="原问题：怎样利用报告文本或大规模未标注图像训练通用医学影像模型？" />
        <node TEXT="输入与输出：医学图像与报告或未标注图像 → 通用表示 → 零样本诊断、问答与下游任务" />
        <node TEXT="已有扩展轴：免标注监督、跨疾病泛化、对话式医学助手" />
        <node TEXT="代表论文与阅读顺序">
          <node TEXT="CheXzero｜Nature Biomedical Engineering 2022｜较早入口" LINK="https://www.nature.com/articles/s41551-022-00936-9">
            <node TEXT="Expert-level detection of pathologies from unannotated chest X-ray images via self-supervised learning" />
            <node TEXT="用胸片与报告做对比学习，零样本检测多种病变。" />
          </node>
          <node TEXT="RETFound｜Nature 2023｜近年代表" LINK="https://www.nature.com/articles/s41586-023-06555-x">
            <node TEXT="A foundation model for generalizable disease detection from retinal images" />
            <node TEXT="在一百多万张视网膜图像上自监督预训练，迁移到眼病与全身疾病预测。" />
          </node>
          <node TEXT="LLaVA-Med｜NeurIPS 2023｜已有扩展" LINK="https://proceedings.neurips.cc/paper_files/paper/2023/hash/5abcdf8ecdcacba028c6662789194572-Abstract-Datasets_and_Benchmarks.html">
            <node TEXT="LLaVA-Med: Training a Large Language-and-Vision Assistant for Biomedicine in One Day" />
            <node TEXT="用 PubMed 图文数据和自动生成的指令数据训练医学多模态助手。" />
          </node>
        </node>
      </node>
    </node>
    <node TEXT="临床与医学大模型｜语言模型怎样参与问答、诊断与临床记录？" POSITION="right" FOLDED="true">
      <node TEXT="Medical Question Answering｜医学问答大模型" FOLDED="true">
        <node TEXT="原问题：通用或医学专用语言模型掌握了多少临床知识，答案是否安全？" />
        <node TEXT="输入与输出：医学考试题或消费者健康问题 → 答案与解释 → 自动与人工评估" />
        <node TEXT="已有扩展轴：领域微调、人类专家多维评估、考试之外的真实问题" />
        <node TEXT="代表论文与阅读顺序">
          <node TEXT="ChatGPT on USMLE｜PLOS Digital Health 2023｜较早入口" LINK="https://doi.org/10.1371/journal.pdig.0000198">
            <node TEXT="Performance of ChatGPT on USMLE: Potential for AI-assisted medical education using large language models" />
            <node TEXT="未经专门训练的 ChatGPT 接近美国医师执照考试及格线。" />
          </node>
          <node TEXT="Med-PaLM｜Nature 2023｜近年代表" LINK="https://www.nature.com/articles/s41586-023-06291-2">
            <node TEXT="Large language models encode clinical knowledge" />
            <node TEXT="提出 MultiMedQA 基准与人类多维评估框架。" />
          </node>
          <node TEXT="Med-PaLM 2｜Nature Medicine 2025｜已有扩展" LINK="https://www.nature.com/articles/s41591-024-03423-7">
            <node TEXT="Toward expert-level medical question answering with large language models" />
            <node TEXT="医学微调与集成推理使医学考试题达到专家水平。" />
          </node>
        </node>
      </node>
      <node TEXT="Diagnostic Dialogue &amp; Clinical Decision-Making｜诊断对话与临床决策" FOLDED="true">
        <node TEXT="原问题：语言模型能否在多轮问诊和真实病例中做出可靠诊断与决策？" />
        <node TEXT="输入与输出：患者对话或病历信息 → 问诊、鉴别诊断与处置建议" />
        <node TEXT="已有扩展轴：自博弈模拟训练、鉴别诊断辅助、真实病例中的局限" />
        <node TEXT="代表论文与阅读顺序">
          <node TEXT="Clinical LLM limits｜Nature Medicine 2024｜近年代表" LINK="https://www.nature.com/articles/s41591-024-03097-1">
            <node TEXT="Evaluation and mitigation of the limitations of large language models in clinical decision-making" />
            <node TEXT="基于真实病例的评测显示模型在完整诊疗流程中明显弱于医生。" />
          </node>
          <node TEXT="AMIE｜Nature 2025｜已有扩展" LINK="https://www.nature.com/articles/s41586-025-08866-7">
            <node TEXT="Towards conversational diagnostic artificial intelligence" />
            <node TEXT="用自博弈模拟问诊训练诊断对话模型，并与全科医生对比。" />
          </node>
          <node TEXT="AMIE DDx｜Nature 2025｜已有扩展" LINK="https://www.nature.com/articles/s41586-025-08869-4">
            <node TEXT="Towards accurate differential diagnosis with large language models" />
            <node TEXT="评估语言模型独立及辅助医生给出鉴别诊断列表的效果。" />
          </node>
        </node>
      </node>
      <node TEXT="Clinical Notes &amp; EHR Models｜临床文本与电子病历模型" FOLDED="true">
        <node TEXT="原问题：怎样从电子病历和临床文本中做预测、生成摘要？" />
        <node TEXT="输入与输出：临床笔记与病历序列 → 风险预测、摘要或疾病轨迹" />
        <node TEXT="已有扩展轴：院内预训练、临床摘要质量、生成式疾病进程建模" />
        <node TEXT="代表论文与阅读顺序">
          <node TEXT="GatorTron｜npj Digital Medicine 2022｜较早入口" LINK="https://www.nature.com/articles/s41746-022-00742-2">
            <node TEXT="A large language model for electronic health records" />
            <node TEXT="在九百多亿词临床文本上训练的大型临床语言模型。" />
          </node>
          <node TEXT="NYUTron｜Nature 2023｜近年代表" LINK="https://www.nature.com/articles/s41586-023-06160-y">
            <node TEXT="Health system-scale language models are all-purpose prediction engines" />
            <node TEXT="在医院系统笔记上预训练，并在院内前瞻部署预测再入院等结局。" />
          </node>
          <node TEXT="Clinical summarization｜Nature Medicine 2024｜已有扩展" LINK="https://www.nature.com/articles/s41591-024-02855-5">
            <node TEXT="Adapted large language models can outperform medical experts in clinical text summarization" />
            <node TEXT="经适配的模型在多类临床摘要任务中常被医生评为优于专家摘要。" />
          </node>
          <node TEXT="Delphi-2M｜Nature 2025｜2026 扩展" LINK="https://www.nature.com/articles/s41586-025-09529-3">
            <node TEXT="Learning the natural history of human disease with generative transformers" />
            <node TEXT="生成式 Transformer 建模个体一生中一千多种疾病的发生轨迹。" />
          </node>
        </node>
      </node>
    </node>
    <node TEXT="可靠性、公平与评测｜医学 AI 在真实临床场景中是否可靠、公平？" POSITION="right" FOLDED="true">
      <node TEXT="Fairness &amp; Bias｜公平性与偏差" FOLDED="true">
        <node TEXT="原问题：医学 AI 是否会对不同人群表现不一，偏差从何而来？" />
        <node TEXT="输入与输出：模型与分人群数据 → 分组性能差异与偏差来源分析" />
        <node TEXT="已有扩展轴：漏诊偏差、敏感属性的隐式编码、去偏方法的泛化" />
        <node TEXT="代表论文与阅读顺序">
          <node TEXT="Underdiagnosis bias｜Nature Medicine 2021｜较早入口" LINK="https://www.nature.com/articles/s41591-021-01595-0">
            <node TEXT="Underdiagnosis bias of artificial intelligence algorithms applied to chest radiographs in under-served patient populations" />
            <node TEXT="胸片模型对女性、年轻、少数族裔等群体漏诊率更高。" />
          </node>
          <node TEXT="Race recognition｜The Lancet Digital Health 2022｜近年代表" LINK="https://doi.org/10.1016/s2589-7500(22)00063-2">
            <node TEXT="AI recognition of patient race in medical imaging: a modelling study" />
            <node TEXT="模型能从医学图像中识别自报种族，而人类无法做到。" />
          </node>
          <node TEXT="Fair imaging limits｜Nature Medicine 2024｜已有扩展" LINK="https://www.nature.com/articles/s41591-024-03113-4">
            <node TEXT="The limits of fair medical imaging AI in real-world generalization" />
            <node TEXT="依赖人口学捷径的模型更不公平；院内去偏不一定能迁移到新医院。" />
          </node>
        </node>
      </node>
      <node TEXT="Clinical Validation &amp; Deployment｜临床验证与部署" FOLDED="true">
        <node TEXT="原问题：实验室结果能否转化为真实临床中的可靠收益？" />
        <node TEXT="输入与输出：已部署模型或干预 → 外部验证或随机试验 → 临床结局与工作量" />
        <node TEXT="已有扩展轴：外部验证、前瞻性随机试验、报告规范" />
        <node TEXT="代表论文与阅读顺序">
          <node TEXT="CONSORT-AI｜Nature Medicine 2020｜较早入口" LINK="https://www.nature.com/articles/s41591-020-1034-x">
            <node TEXT="Reporting guidelines for clinical trial reports for interventions involving artificial intelligence: the CONSORT-AI extension" />
            <node TEXT="为 AI 干预的临床试验报告补充专门条目。" />
          </node>
          <node TEXT="Epic sepsis validation｜JAMA Internal Medicine 2021｜近年代表" LINK="https://doi.org/10.1001/jamainternmed.2021.2626">
            <node TEXT="External Validation of a Widely Implemented Proprietary Sepsis Prediction Model in Hospitalized Patients" />
            <node TEXT="广泛部署的商业脓毒症模型在外部验证中表现远低于宣称水平。" />
          </node>
          <node TEXT="MASAI｜The Lancet Oncology 2023｜已有扩展" LINK="https://doi.org/10.1016/s1470-2045(23)00298-x">
            <node TEXT="Artificial intelligence-supported screen reading versus standard double reading in the Mammography Screening with Artificial Intelligence trial (MASAI): a clinical safety analysis of a randomised, controlled, non-inferiority, single-blinded, screening accuracy study" />
            <node TEXT="随机试验显示 AI 辅助乳腺筛查可减少阅片工作量且不降低检出率。" />
          </node>
        </node>
      </node>
      <node TEXT="Human–AI Deferral &amp; Robustness｜人机协作与稳健性" FOLDED="true">
        <node TEXT="原问题：模型何时应该交给医生决定，怎样防止训练数据被污染？" />
        <node TEXT="输入与输出：模型置信度与医生判断或训练语料 → 交接决策或攻击后的模型行为" />
        <node TEXT="已有扩展轴：互补性交接、数据投毒、安全监测" />
        <node TEXT="代表论文与阅读顺序">
          <node TEXT="CoDoC｜Nature Medicine 2023｜近年代表" LINK="https://www.nature.com/articles/s41591-023-02437-x">
            <node TEXT="Enhancing the reliability and accuracy of AI-enabled diagnosis via complementarity-driven deferral to clinicians" />
            <node TEXT="学习何时信任 AI、何时交给医生，使人机组合优于任一方。" />
          </node>
          <node TEXT="Medical data poisoning｜Nature Medicine 2025｜已有扩展" LINK="https://www.nature.com/articles/s41591-024-03445-1">
            <node TEXT="Medical large language models are vulnerable to data-poisoning attacks" />
            <node TEXT="极少量被污染的训练语料就能让医学模型传播错误信息。" />
          </node>
        </node>
      </node>
    </node>
    <node TEXT="实验闭环与科学智能体｜AI 怎样参与设计、执行和迭代实验？" POSITION="right" FOLDED="true">
      <node TEXT="Self-Driving Labs｜自动化实验室" FOLDED="true">
        <node TEXT="原问题：怎样让机器人与算法自主规划并执行化学或生物实验？" />
        <node TEXT="输入与输出：实验目标与可用设备 → 规划、执行、测量 → 下一轮实验" />
        <node TEXT="已有扩展轴：移动机器人、语言模型规划、工具调用" />
        <node TEXT="代表论文与阅读顺序">
          <node TEXT="Mobile robotic chemist｜Nature 2020｜较早入口" LINK="https://www.nature.com/articles/s41586-020-2442-2">
            <node TEXT="A mobile robotic chemist" />
            <node TEXT="移动机器人结合贝叶斯优化，八天内自主完成近七百次实验。" />
          </node>
          <node TEXT="Coscientist｜Nature 2023｜近年代表" LINK="https://www.nature.com/articles/s41586-023-06792-0">
            <node TEXT="Autonomous chemical research with large language models" />
            <node TEXT="语言模型调用搜索、文档与实验硬件，自主设计并执行反应。" />
          </node>
          <node TEXT="ChemCrow｜Nature Machine Intelligence 2024｜已有扩展" LINK="https://www.nature.com/articles/s42256-024-00832-8">
            <node TEXT="Augmenting large language models with chemistry tools" />
            <node TEXT="为语言模型接入 18 种化学工具，完成合成规划等任务。" />
          </node>
        </node>
      </node>
      <node TEXT="Biological Research Agents｜生物科研智能体" FOLDED="true">
        <node TEXT="原问题：语言模型智能体能否设计生物实验并提出可验证的新方案？" />
        <node TEXT="输入与输出：研究目标 → 多智能体讨论或工具调用 → 实验设计与候选分子" />
        <node TEXT="已有扩展轴：扰动实验设计、基因编辑自动化、多智能体协作" />
        <node TEXT="代表论文与阅读顺序">
          <node TEXT="BioDiscoveryAgent｜ICLR 2025｜近年代表" LINK="https://proceedings.iclr.cc/paper_files/paper/2025/hash/4252dc94531833029000f85dc5fac792-Abstract-Conference.html">
            <node TEXT="BioDiscoveryAgent: An AI Agent for Designing Genetic Perturbation Experiments" />
            <node TEXT="智能体逐轮选择要敲除的基因，提高遗传筛选的命中率。" />
          </node>
          <node TEXT="Virtual Lab｜Nature 2025｜2026 扩展" LINK="https://www.nature.com/articles/s41586-025-09442-9">
            <node TEXT="The Virtual Lab of AI agents designs new SARS-CoV-2 nanobodies" />
            <node TEXT="多个 AI 智能体分工讨论，设计并经实验验证新纳米抗体。" />
          </node>
          <node TEXT="CRISPR-GPT｜Nature Biomedical Engineering 2025｜2026 扩展" LINK="https://www.nature.com/articles/s41551-025-01463-z">
            <node TEXT="CRISPR-GPT for agentic automation of gene-editing experiments" />
            <node TEXT="智能体协助完成从选择编辑系统到设计向导 RNA 的基因编辑流程。" />
          </node>
        </node>
      </node>
      <node TEXT="ML-Guided Protein Engineering｜机器学习引导的蛋白工程" FOLDED="true">
        <node TEXT="原问题：实验预算有限时，怎样用模型选择下一批突变体？" />
        <node TEXT="输入与输出：少量突变体活性数据 → 预测模型与获取函数 → 下一轮突变体" />
        <node TEXT="已有扩展轴：少样本学习、主动学习、定向进化闭环" />
        <node TEXT="代表论文与阅读顺序">
          <node TEXT="Low-N engineering｜Nature Methods 2021｜较早入口" LINK="https://www.nature.com/articles/s41592-021-01100-y">
            <node TEXT="Low-N protein engineering with data-efficient deep learning" />
            <node TEXT="预训练表示加少量标注，就能指导蛋白工程。" />
          </node>
          <node TEXT="ALDE｜Nature Communications 2025｜已有扩展" LINK="https://www.nature.com/articles/s41467-025-55987-8">
            <node TEXT="Active learning-assisted directed evolution" />
            <node TEXT="把主动学习嵌入定向进化，处理突变之间的上位效应。" />
          </node>
          <node TEXT="Generative antibiotics｜Cell 2025｜2026 扩展" LINK="https://doi.org/10.1016/j.cell.2025.07.033">
            <node TEXT="A generative deep learning approach to de novo antibiotic design" />
            <node TEXT="生成模型从片段和从头两条路线设计抗生素，并经实验验证。" />
          </node>
        </node>
      </node>
    </node>
    <node TEXT="五条概念阅读路线（整理关系）" FOLDED="true" POSITION="right">
      <node TEXT="从序列到可设计蛋白">
        <node TEXT="语言模型表征 → 结构预测 → 从头设计 → 闭环工程" />
        <node TEXT="Protein Language Models｜蛋白质语言模型">
          <node TEXT="ESM-1b｜PNAS 2021" LINK="https://doi.org/10.1073/pnas.2016239118" />
          <node TEXT="ESM3｜Science 2025" LINK="https://www.science.org/doi/10.1126/science.ads0018" />
        </node>
        <node TEXT="Protein Structure Prediction｜蛋白质结构预测">
          <node TEXT="AlphaFold2｜Nature 2021" LINK="https://www.nature.com/articles/s41586-021-03819-2" />
          <node TEXT="AlphaFold 3｜Nature 2024" LINK="https://www.nature.com/articles/s41586-024-07487-w" />
        </node>
        <node TEXT="De Novo Protein Design｜从头蛋白设计">
          <node TEXT="ProteinMPNN｜Science 2022" LINK="https://www.science.org/doi/10.1126/science.add2187" />
          <node TEXT="RFdiffusion｜Nature 2023" LINK="https://www.nature.com/articles/s41586-023-06415-8" />
        </node>
        <node TEXT="ML-Guided Protein Engineering｜机器学习引导的蛋白工程">
          <node TEXT="Low-N engineering｜Nature Methods 2021" LINK="https://www.nature.com/articles/s41592-021-01100-y" />
          <node TEXT="ALDE｜Nature Communications 2025" LINK="https://www.nature.com/articles/s41467-025-55987-8" />
        </node>
      </node>
      <node TEXT="从靶点到候选药物">
        <node TEXT="复合物结构 → 对接与筛选 → 分子生成 → 合成规划" />
        <node TEXT="Biomolecular Complex Modeling｜生物分子复合物建模">
          <node TEXT="NeuralPLexer｜Nature Machine Intelligence 2024" LINK="https://www.nature.com/articles/s42256-024-00792-z" />
          <node TEXT="RoseTTAFold All-Atom｜Science 2024" LINK="https://www.science.org/doi/10.1126/science.adl2528" />
        </node>
        <node TEXT="Molecular Docking｜分子对接">
          <node TEXT="DiffDock｜ICLR 2023" LINK="https://openreview.net/forum?id=kKF8_K-mBbS" />
          <node TEXT="PoseBusters｜Chemical Science 2024" LINK="https://doi.org/10.1039/d3sc04185a" />
        </node>
        <node TEXT="3D Molecule Generation｜三维分子生成">
          <node TEXT="TargetDiff｜ICLR 2023" LINK="https://openreview.net/forum?id=kJqXEPXMsE0" />
          <node TEXT="DiffSBDD｜Nature Computational Science 2024" LINK="https://www.nature.com/articles/s43588-024-00737-x" />
        </node>
        <node TEXT="Retrosynthesis &amp; Synthesis Planning｜逆合成与合成规划">
          <node TEXT="Retro*｜ICML 2020" LINK="https://proceedings.mlr.press/v119/chen20k.html" />
          <node TEXT="LocalRetro｜JACS Au 2021" LINK="https://doi.org/10.1021/jacsau.1c00246" />
        </node>
      </node>
      <node TEXT="从序列到细胞状态">
        <node TEXT="基因组序列 → 变异效应 → 单细胞表示 → 扰动预测" />
        <node TEXT="Genomic Sequence Models｜基因组序列模型">
          <node TEXT="Enformer｜Nature Methods 2021" LINK="https://www.nature.com/articles/s41592-021-01252-x" />
          <node TEXT="Evo｜Science 2024" LINK="https://www.science.org/doi/10.1126/science.ado9336" />
        </node>
        <node TEXT="Perturbation &amp; Variant Effect Prediction｜扰动与变异效应预测">
          <node TEXT="EVE｜Nature 2021" LINK="https://www.nature.com/articles/s41586-021-04043-8" />
          <node TEXT="AlphaMissense｜Science 2023" LINK="https://www.science.org/doi/10.1126/science.adg7492" />
          <node TEXT="GEARS｜Nature Biotechnology 2024" LINK="https://www.nature.com/articles/s41587-023-01905-6" />
        </node>
        <node TEXT="Single-Cell Foundation Models｜单细胞基础模型">
          <node TEXT="Geneformer｜Nature 2023" LINK="https://www.nature.com/articles/s41586-023-06139-9" />
          <node TEXT="scGPT｜Nature Methods 2024" LINK="https://www.nature.com/articles/s41592-024-02201-0" />
          <node TEXT="Zero-shot scFM｜Genome Biology 2025" LINK="https://doi.org/10.1186/s13059-025-03574-x" />
        </node>
      </node>
      <node TEXT="从影像到可信诊断">
        <node TEXT="分割与表示 → 病理与视觉语言基础模型 → 公平性 → 人机协作" />
        <node TEXT="Medical Image Segmentation｜医学图像分割">
          <node TEXT="nnU-Net｜Nature Methods 2021" LINK="https://www.nature.com/articles/s41592-020-01008-z" />
          <node TEXT="MedSAM｜Nature Communications 2024" LINK="https://www.nature.com/articles/s41467-024-44824-z" />
        </node>
        <node TEXT="Computational Pathology Foundation Models｜计算病理基础模型">
          <node TEXT="UNI｜Nature Medicine 2024" LINK="https://www.nature.com/articles/s41591-024-02857-3" />
          <node TEXT="CONCH｜Nature Medicine 2024" LINK="https://www.nature.com/articles/s41591-024-02856-4" />
        </node>
        <node TEXT="Fairness &amp; Bias｜公平性与偏差">
          <node TEXT="Underdiagnosis bias｜Nature Medicine 2021" LINK="https://www.nature.com/articles/s41591-021-01595-0" />
          <node TEXT="Fair imaging limits｜Nature Medicine 2024" LINK="https://www.nature.com/articles/s41591-024-03113-4" />
        </node>
        <node TEXT="Human–AI Deferral &amp; Robustness｜人机协作与稳健性">
          <node TEXT="CoDoC｜Nature Medicine 2023" LINK="https://www.nature.com/articles/s41591-023-02437-x" />
        </node>
      </node>
      <node TEXT="从语言模型到临床与实验">
        <node TEXT="医学问答 → 诊断对话 → 临床验证 → 科研智能体" />
        <node TEXT="Medical Question Answering｜医学问答大模型">
          <node TEXT="Med-PaLM｜Nature 2023" LINK="https://www.nature.com/articles/s41586-023-06291-2" />
          <node TEXT="Med-PaLM 2｜Nature Medicine 2025" LINK="https://www.nature.com/articles/s41591-024-03423-7" />
        </node>
        <node TEXT="Diagnostic Dialogue &amp; Clinical Decision-Making｜诊断对话与临床决策">
          <node TEXT="Clinical LLM limits｜Nature Medicine 2024" LINK="https://www.nature.com/articles/s41591-024-03097-1" />
          <node TEXT="AMIE｜Nature 2025" LINK="https://www.nature.com/articles/s41586-025-08866-7" />
        </node>
        <node TEXT="Clinical Validation &amp; Deployment｜临床验证与部署">
          <node TEXT="Epic sepsis validation｜JAMA Internal Medicine 2021" LINK="https://doi.org/10.1001/jamainternmed.2021.2626" />
          <node TEXT="MASAI｜The Lancet Oncology 2023" LINK="https://doi.org/10.1016/s1470-2045(23)00298-x" />
        </node>
        <node TEXT="Biological Research Agents｜生物科研智能体">
          <node TEXT="BioDiscoveryAgent｜ICLR 2025" LINK="https://proceedings.iclr.cc/paper_files/paper/2025/hash/4252dc94531833029000f85dc5fac792-Abstract-Conference.html" />
          <node TEXT="Virtual Lab｜Nature 2025" LINK="https://www.nature.com/articles/s41586-025-09442-9" />
        </node>
      </node>
    </node>
  </node>
</map>
