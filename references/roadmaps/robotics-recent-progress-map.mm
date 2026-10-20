<?xml version='1.0' encoding='utf-8'?>
<map version="1.0.1">
  <node TEXT="机器人近年进展与 A 框架地图｜截至 2026-10-20">
    <node TEXT="以 2023–2026 年机器人学习与具身智能为主，保留 2021–2022 年必要入口；兼顾运动规划、软体与多机器人。覆盖 RSS、CoRL、ICRA、IROS、NeurIPS、ICLR、CVPR、ICML 及代表期刊。含 1 篇明确标注的技术报告。" />
    <node TEXT="年份按会议召开年、期刊正式发表年或技术报告年份；CoRL 2022 与 CoRL 2024 的 PMLR 论文集分别在 2023、2025 年出版。" />
    <node TEXT="A 表示可复用的研究任务或方法框架，是相对角色；一种既有 A+B 方法也可成为后续研究的 A。变量变化、AI 对应和阅读连线均为整理者归纳，不代表直接引用链、严格时间线或研究空白。图中多数变化已有文献探索。仿真、遥操作、自主执行与实机评测分别标注，不等同于产业成熟度。" />
    <node TEXT="数据、表示与通用策略｜怎样复用不同任务、场景和机器人积累的经验？" POSITION="right" FOLDED="true">
      <node TEXT="可扩展示教与机器人数据｜Scalable Demonstration and Robot Data" FOLDED="true">
        <node TEXT="原问题：怎样低成本获得可跨任务、场景或身体复用的机器人经验？" />
        <node TEXT="输入输出：示教接口、传感记录、动作与任务描述 → 标准化轨迹和训练数据" />
        <node TEXT="变化的变量（归纳）：从一个实验台的数据，扩展到跨机构、跨身体与无需随身携带机器人的采集。" />
        <node TEXT="已有扩展轴：动作语义与坐标对齐、场景覆盖、采集成本、示教到部署的接口" />
        <node TEXT="可关联 AI 框架（归纳）：多域数据学习、数据质量、分布覆盖、迁移学习" />
        <node TEXT="代表论文与验证范围">
          <node TEXT="Open X-Embodiment｜ICRA 2024｜实机数据＋跨身体学习" LINK="https://is.mpg.de/en/publications/openx24">
            <node TEXT="Open X-Embodiment: Robotic Learning Datasets and RT-X Models" />
            <node TEXT="整合多机构、多种机器人数据并训练 RT-X；跨身体训练不自动等于对任意新身体零样本部署。" />
            <node TEXT="发表状态：正式发表" />
          </node>
          <node TEXT="DROID｜RSS 2024｜实机示教数据" LINK="https://roboticsproceedings.org/rss20/p120.html">
            <node TEXT="DROID: A Large-Scale In-The-Wild Robot Manipulation Dataset" />
            <node TEXT="把操作数据采集扩展到多样真实场景，研究数据多样性与策略泛化。" />
            <node TEXT="发表状态：正式发表" />
          </node>
          <node TEXT="UMI｜RSS 2024｜手持示教＋实机策略" LINK="https://www.roboticsproceedings.org/rss20/p045.html">
            <node TEXT="Universal Manipulation Interface: In-The-Wild Robot Teaching Without In-The-Wild Robots" />
            <node TEXT="手持夹爪和腕部视觉采集示教，通过动作表示与延迟匹配迁移到实机；不是任意人类视频直接变动作。" />
            <node TEXT="发表状态：正式发表" />
          </node>
        </node>
      </node>
      <node TEXT="可迁移视觉表征｜Pretrained Sensorimotor Representations" FOLDED="true">
        <node TEXT="原问题：怎样把人类视频和通用视觉数据变成机器人能使用的感知特征？" />
        <node TEXT="输入输出：图像、视频、语言及预训练目标 → 特征 → 下游策略" />
        <node TEXT="变化的变量（归纳）：从单任务视觉编码器，扩展到多任务预训练，并把可迁移性作为评价对象。" />
        <node TEXT="已有扩展轴：视频时间结构、数据组成、冻结或微调、下游任务差异" />
        <node TEXT="可关联 AI 框架（归纳）：自监督学习、视频表示、视觉基础模型、迁移评测" />
        <node TEXT="代表论文与验证范围">
          <node TEXT="R3M｜CoRL 2022｜视频预训练＋仿真/实机" LINK="https://proceedings.mlr.press/v205/nair23a.html">
            <node TEXT="R3M: A Universal Visual Representation for Robot Manipulation" />
            <node TEXT="用人类视频学习视觉表示，再迁移到机器人操作；预训练表示本身不输出机器人动作。" />
            <node TEXT="发表状态：正式发表" />
          </node>
          <node TEXT="VC-1 / CortexBench｜NeurIPS 2023｜表示学习＋跨任务评测" LINK="https://proceedings.neurips.cc/paper_files/paper/2023/hash/022ca1bed6b574b962c48a2856eb207b-Abstract-Conference.html">
            <node TEXT="Where are we in the search for an Artificial Visual Cortex for Embodied Intelligence?" />
            <node TEXT="系统比较具身视觉表征，覆盖多类感知运动任务，提出 VC-1；研究视觉模块的通用性。" />
            <node TEXT="发表状态：正式发表" />
          </node>
        </node>
      </node>
      <node TEXT="通用策略与 VLA｜Generalist and Vision-Language-Action Policies" FOLDED="true">
        <node TEXT="原问题：一个模型怎样根据视觉和语言控制多任务、多个机器人？" />
        <node TEXT="输入输出：视觉、语言、机器人状态与身体接口 → 动作序列" />
        <node TEXT="变化的变量（归纳）：从共享视觉知识，扩展到共享动作模型、异构任务训练和未见身体迁移。" />
        <node TEXT="已有扩展轴：网络语义与动作对齐、动作头、身体接口、开放场景、训练分布" />
        <node TEXT="可关联 AI 框架（归纳）：多模态基础模型、序列建模、Flow Matching、跨域泛化" />
        <node TEXT="代表论文与验证范围">
          <node TEXT="RT-2｜CoRL 2023｜VLA＋实机操作" LINK="https://proceedings.mlr.press/v229/zitkovich23a.html">
            <node TEXT="RT-2: Vision-Language-Action Models Transfer Web Knowledge to Robotic Control" />
            <node TEXT="把机器人动作表示为 token，与视觉语言任务联合微调，检验网络知识向控制任务的迁移。" />
            <node TEXT="发表状态：正式发表" />
          </node>
          <node TEXT="Octo｜RSS 2024｜通用策略＋实机迁移" LINK="https://www.roboticsproceedings.org/rss20/p090.html">
            <node TEXT="Octo: An Open-Source Generalist Robot Policy" />
            <node TEXT="用大规模跨机器人数据预训练，支持语言或目标图像条件及新机器人微调；不等同于所有通用策略都是 VLM。" />
            <node TEXT="发表状态：正式发表" />
          </node>
          <node TEXT="OpenVLA｜CoRL 2024｜开源 VLA＋实机" LINK="https://proceedings.mlr.press/v270/kim25c.html">
            <node TEXT="OpenVLA: An Open-Source Vision-Language-Action Model" />
            <node TEXT="开放 VLA 权重与适配方法，研究多任务操作、语言 grounding 和新设置微调。" />
            <node TEXT="发表状态：正式发表" />
          </node>
          <node TEXT="π₀｜RSS 2025｜VLA＋实机多平台" LINK="https://roboticsproceedings.org/rss21/p010.html">
            <node TEXT="π₀: A Vision-Language-Action Flow Model for General Robot Control" />
            <node TEXT="结合预训练视觉语言模型和 flow 动作专家，生成连续动作块，支持不同机器人平台。" />
            <node TEXT="发表状态：正式发表" />
          </node>
          <node TEXT="π₀.₅｜CoRL 2025｜异构共训＋真实新场景" LINK="https://proceedings.mlr.press/v305/black25a.html">
            <node TEXT="π₀.₅: a Vision-Language-Action Model with Open-World Generalization" />
            <node TEXT="把多机器人、语义子任务与网络数据共训，检验未见家庭中的长任务泛化；结论限于论文测试条件。" />
            <node TEXT="发表状态：正式发表" />
          </node>
          <node TEXT="LAP｜RSS 2026｜跨身体迁移研究" LINK="https://roboticsproceedings.org/rss22/p203.html">
            <node TEXT="LAP: Language-Action Pre-training Enables Zero-Shot Cross-Embodiment Transfer" />
            <node TEXT="将低层动作表示为自然语言，测试未见身体上的零样本迁移；关键变量是动作语义与身体耦合方式。" />
            <node TEXT="发表状态：正式发表" />
          </node>
        </node>
      </node>
    </node>
    <node TEXT="操作策略与灵巧技能｜怎样把观测转为连续、精细且可泛化的动作？" POSITION="right" FOLDED="true">
      <node TEXT="生成式动作与时间一致性｜Generative and Temporally Extended Policies" FOLDED="true">
        <node TEXT="原问题：面对多解动作、动作抖动和推理延迟，怎样生成可执行动作序列？" />
        <node TEXT="输入输出：观测历史、任务条件 → 动作分布或动作块 → 滚动执行" />
        <node TEXT="变化的变量（归纳）：输出从单步动作扩展到多峰序列，推理与控制的时间安排也成为设计变量。" />
        <node TEXT="已有扩展轴：扩散或 flow、动作分块、时间聚合、采样延迟、流式反馈" />
        <node TEXT="可关联 AI 框架（归纳）：条件生成、潜变量模型、序列预测、在线推断" />
        <node TEXT="代表论文与验证范围">
          <node TEXT="Diffusion Policy｜RSS 2023｜仿真＋实机操作" LINK="https://roboticsproceedings.org/rss19/p026.html">
            <node TEXT="Diffusion Policy: Visuomotor Policy Learning via Action Diffusion" />
            <node TEXT="用条件去噪生成动作序列，并以滚动时域执行；适合表达多峰动作分布。" />
            <node TEXT="发表状态：正式发表" />
          </node>
          <node TEXT="ACT / ALOHA｜RSS 2023｜双臂实机＋模仿学习" LINK="https://www.roboticsproceedings.org/rss19/p016.html">
            <node TEXT="Learning Fine-Grained Bimanual Manipulation with Low-Cost Hardware" />
            <node TEXT="低成本双臂示教结合 Action Chunking with Transformers；动作块与时间聚合降低长序列误差。" />
            <node TEXT="发表状态：正式发表" />
          </node>
          <node TEXT="Streaming Flow Policy｜CoRL 2025｜生成策略与执行研究" LINK="https://proceedings.mlr.press/v305/jiang25a.html">
            <node TEXT="Streaming Flow Policy: Simplifying diffusion/flow-matching policies by treating action trajectories as flow trajectories" />
            <node TEXT="把动作轨迹本身作为 flow 轨迹，使动作在采样过程中流式输出，缩短感知到执行的等待。" />
            <node TEXT="发表状态：正式发表" />
          </node>
        </node>
      </node>
      <node TEXT="三维空间中的操作策略｜Spatially Grounded Manipulation Policies" FOLDED="true">
        <node TEXT="原问题：策略怎样在物体和相机变化后仍准确定位动作？" />
        <node TEXT="输入输出：RGB-D、多视图或点云、语言/接触条件 → 三维动作或末端位姿" />
        <node TEXT="变化的变量（归纳）：由像素到动作，扩展到显式空间表示与物理接触条件。" />
        <node TEXT="已有扩展轴：体素、多视图、点云、空间分辨率、接触点、计算代价" />
        <node TEXT="可关联 AI 框架（归纳）：三维表示、几何学习、注意力、空间条件生成" />
        <node TEXT="代表论文与验证范围">
          <node TEXT="PerAct｜CoRL 2022｜仿真＋实机" LINK="https://proceedings.mlr.press/v205/shridhar23a.html">
            <node TEXT="Perceiver-Actor: A Multi-Task Transformer for Robotic Manipulation" />
            <node TEXT="将 RGB-D 体素和语言编码为动作定位问题，学习多任务六自由度操作。" />
            <node TEXT="发表状态：正式发表" />
          </node>
          <node TEXT="RVT｜CoRL 2023｜仿真＋实机" LINK="https://proceedings.mlr.press/v229/goyal23a.html">
            <node TEXT="RVT: Robotic View Transformer for 3D Object Manipulation" />
            <node TEXT="通过虚拟视图重渲染与跨视图注意力使用三维信息，缓解稠密体素的计算负担。" />
            <node TEXT="发表状态：正式发表" />
          </node>
          <node TEXT="DP3｜RSS 2024｜仿真＋实机" LINK="https://roboticsproceedings.org/rss20/p067.html">
            <node TEXT="3D Diffusion Policy: Generalizable Visuomotor Policy Learning via Simple 3D Representations" />
            <node TEXT="用紧凑点云表示连接扩散动作模型，研究几何表示带来的操作泛化与数据效率。" />
            <node TEXT="发表状态：正式发表" />
          </node>
          <node TEXT="Contact-Anchored Policies｜RSS 2026｜仿真迭代＋实机" LINK="https://roboticsproceedings.org/rss22/p141.html">
            <node TEXT="Contact-Anchored Policies: Contact Conditioning Creates Strong Robot Utility Models" />
            <node TEXT="以空间接触点替代语言作为低层技能条件，组织模块化 utility models；验证聚焦三类基础操作技能。" />
            <node TEXT="发表状态：正式发表" />
          </node>
        </node>
      </node>
      <node TEXT="灵巧手示教与技能迁移｜Dexterous Demonstration Transfer" FOLDED="true">
        <node TEXT="原问题：怎样把人类手部运动转为机器人手臂与多指手能完成的技能？" />
        <node TEXT="输入输出：人类手部观测、运动捕捉及场景 → 重定向控制/训练轨迹 → 机器人技能" />
        <node TEXT="变化的变量（归纳）：从为单一手型定制遥操作，扩展到通用接口、便携采集和人手到机器手迁移。" />
        <node TEXT="已有扩展轴：形态差异、自遮挡、重定向、接触可行性、示教质量" />
        <node TEXT="可关联 AI 框架（归纳）：姿态估计、域适配、模仿学习、结构约束" />
        <node TEXT="代表论文与验证范围">
          <node TEXT="AnyTeleop｜RSS 2023｜仿真＋实机遥操作" LINK="https://roboticsproceedings.org/rss19/p015.html">
            <node TEXT="AnyTeleop: A General Vision-Based Dexterous Robot Arm-Hand Teleoperation System" />
            <node TEXT="统一不同机械臂、手型和相机配置；核心展示是人控制的遥操作接口，不能等同自主策略能力。" />
            <node TEXT="发表状态：正式发表" />
          </node>
          <node TEXT="DexCap / DexIL｜RSS 2024｜便携动捕＋实机模仿" LINK="https://www.roboticsproceedings.org/rss20/p043.html">
            <node TEXT="DexCap: Scalable and Portable Mocap Data Collection System for Dexterous Manipulation" />
            <node TEXT="采集真实人手动作与三维场景，并用 DexIL 学习灵巧机器人技能，连接示教与自主执行。" />
            <node TEXT="发表状态：正式发表" />
          </node>
        </node>
      </node>
    </node>
    <node TEXT="语言、规划与执行反馈｜怎样把目标分解为物理可行、可纠错的行动？" POSITION="right" FOLDED="true">
      <node TEXT="有物理落点的技能与程序规划｜Grounded Skill and Program Planning" FOLDED="true">
        <node TEXT="原问题：怎样把自然语言任务分解成机器人已有能力能执行的步骤？" />
        <node TEXT="输入输出：任务、环境观测、技能库/API → 技能序列或程序" />
        <node TEXT="变化的变量（归纳）：把可执行性、感知状态与程序结构加入语言推理。" />
        <node TEXT="已有扩展轴：技能价值函数、API、视觉语言 grounding、状态更新" />
        <node TEXT="可关联 AI 框架（归纳）：LLM 工具使用、程序合成、层级决策、多模态推理" />
        <node TEXT="代表论文与验证范围">
          <node TEXT="SayCan｜CoRL 2022｜语言规划＋实机技能" LINK="https://proceedings.mlr.press/v205/ichter23a.html">
            <node TEXT="Do As I Can, Not As I Say: Grounding Language in Robotic Affordances" />
            <node TEXT="以语言相关性和已学技能的可执行价值共同选择步骤；依赖技能库提供低层能力。" />
            <node TEXT="发表状态：正式发表" />
          </node>
          <node TEXT="Code as Policies｜ICRA 2023｜程序生成＋机器人实验" LINK="https://arxiv.org/abs/2209.07753">
            <node TEXT="Code as Policies: Language Model Programs for Embodied Control" />
            <node TEXT="语言模型组合感知输出与控制 API 生成策略程序，程序中可包含条件和反馈循环。" />
            <node TEXT="发表状态：正式发表" />
          </node>
          <node TEXT="PaLM-E｜ICML 2023｜多模态模型＋机器人任务" LINK="https://proceedings.mlr.press/v202/driess23a.html">
            <node TEXT="PaLM-E: An Embodied Multimodal Language Model" />
            <node TEXT="把连续传感输入接入语言模型，支持具身推理与高层规划；低层动作仍由相应系统执行。" />
            <node TEXT="发表状态：正式发表" />
          </node>
        </node>
      </node>
      <node TEXT="语言到空间约束｜Language-to-Spatial Constraints" FOLDED="true">
        <node TEXT="原问题：怎样超越固定技能词表，把语言意图转成具体运动目标？" />
        <node TEXT="输入输出：语言、图像/深度、物体或关键点 → 价值场/约束 → 轨迹" />
        <node TEXT="变化的变量（归纳）：输出从离散步骤，扩展为可以被运动优化器使用的空间关系。" />
        <node TEXT="已有扩展轴：三维价值图、关键点关系、阶段约束、在线感知" />
        <node TEXT="可关联 AI 框架（归纳）：结构化生成、视觉 grounding、约束优化、神经符号接口" />
        <node TEXT="代表论文与验证范围">
          <node TEXT="VoxPoser｜CoRL 2023｜空间规划＋实机" LINK="https://proceedings.mlr.press/v229/huang23b.html">
            <node TEXT="VoxPoser: Composable 3D Value Maps for Robotic Manipulation with Language Models" />
            <node TEXT="用语言模型和视觉模型构造三维价值图，再通过运动规划完成操作。" />
            <node TEXT="发表状态：正式发表" />
          </node>
          <node TEXT="ReKep｜CoRL 2024｜约束生成＋实机" LINK="https://proceedings.mlr.press/v270/huang25g.html">
            <node TEXT="ReKep: Spatio-Temporal Reasoning of Relational Keypoint Constraints for Robotic Manipulation" />
            <node TEXT="将任务表示为关键点间的时空约束，与优化器结合完成分阶段操作。" />
            <node TEXT="发表状态：正式发表" />
          </node>
        </node>
      </node>
      <node TEXT="闭环推理与失败恢复｜Closed-Loop Reasoning and Failure Recovery" FOLDED="true">
        <node TEXT="原问题：机器人执行偏离计划后，怎样发现问题并修改下一步？" />
        <node TEXT="输入输出：任务、执行历史、感知及成功信号 → 失败解释/新计划" />
        <node TEXT="变化的变量（归纳）：反馈和历史经验成为推理输入，计划可以随执行结果修改。" />
        <node TEXT="已有扩展轴：成功检测、经历摘要、因果解释、重规划、记忆质量" />
        <node TEXT="可关联 AI 框架（归纳）：智能体反馈循环、事件记忆、异常检测、可解释推理" />
        <node TEXT="代表论文与验证范围">
          <node TEXT="Inner Monologue｜CoRL 2022｜仿真＋实机" LINK="https://proceedings.mlr.press/v205/huang23c.html">
            <node TEXT="Inner Monologue: Embodied Reasoning through Planning with Language Models" />
            <node TEXT="把成功检测、场景描述和人类反馈回注语言规划器，形成执行中的闭环。" />
            <node TEXT="发表状态：正式发表" />
          </node>
          <node TEXT="REFLECT｜CoRL 2023｜多传感经历＋失败纠正" LINK="https://proceedings.mlr.press/v229/liu23g.html">
            <node TEXT="REFLECT: Summarizing Robot Experiences for Failure Explanation and Correction" />
            <node TEXT="从多传感历史构造层级摘要，再让语言模型解释失败并支持纠正。" />
            <node TEXT="发表状态：正式发表" />
          </node>
        </node>
      </node>
      <node TEXT="约束运动生成与优化｜Constrained Motion Generation" FOLDED="true">
        <node TEXT="原问题：怎样在障碍和动力学限制下快速产生可执行轨迹？" />
        <node TEXT="输入输出：几何、机器人模型、起终状态、约束 → 连续轨迹" />
        <node TEXT="变化的变量（归纳）：对非凸障碍结构作显式分解，或用并行计算搜索多个优化初值。" />
        <node TEXT="已有扩展轴：凸集图、路径与时间参数化、碰撞检测、GPU 并行、实时性" />
        <node TEXT="可关联 AI 框架（归纳）：图搜索、凸优化、非凸优化、并行算法" />
        <node TEXT="代表论文与验证范围">
          <node TEXT="GCS 运动规划｜Science Robotics 2023｜数学方法＋运动规划实验" LINK="https://arxiv.org/abs/2205.04422">
            <node TEXT="Motion Planning around Obstacles with Convex Optimization" />
            <node TEXT="结合凸集图与 Bézier 曲线处理避障、轨迹形状和速度约束；可行性结论依赖所建模的约束。" />
            <node TEXT="发表状态：正式发表" />
          </node>
          <node TEXT="cuRobo｜技术报告 / arXiv 2023｜并行规划系统" LINK="https://curobo.org/research/research.html">
            <node TEXT="cuRobo: Parallelized Collision-Free Minimum-Jerk Robot Motion Generation" />
            <node TEXT="以 GPU 并行优化加速逆运动学和轨迹生成；此处引用 2023 最小 jerk 技术报告，区别于早期 ICRA 版本。" />
            <node TEXT="发表状态：技术报告" />
          </node>
        </node>
      </node>
    </node>
    <node TEXT="感知、空间记忆与导航｜机器人怎样知道自己在哪里、周围是什么、下一步去哪？" POSITION="right" FOLDED="true">
      <node TEXT="开放词汇空间记忆｜Open-Vocabulary Spatial Memory" FOLDED="true">
        <node TEXT="原问题：地图怎样支持新概念查询、物体关系推理和后续规划？" />
        <node TEXT="输入输出：RGB-D/多视图、视觉语言特征 → 三维语义地图/场景图" />
        <node TEXT="变化的变量（归纳）：地图从几何占据扩展到开放语义和物体关系。" />
        <node TEXT="已有扩展轴：多模态查询、对象关联、关系结构、地图更新、语义误差" />
        <node TEXT="可关联 AI 框架（归纳）：开放词汇识别、多模态检索、知识图谱、三维融合" />
        <node TEXT="代表论文与验证范围">
          <node TEXT="ConceptFusion｜RSS 2023｜真实场景地图＋任务评测" LINK="https://roboticsproceedings.org/rss19/p066.html">
            <node TEXT="ConceptFusion: Open-set Multimodal 3D Mapping" />
            <node TEXT="把多模态特征融合到三维地图，支持语言、图像等开放集合查询。" />
            <node TEXT="发表状态：正式发表" />
          </node>
          <node TEXT="ConceptGraphs｜ICRA 2024｜真实场景图＋规划应用" LINK="https://concept-graphs.github.io/">
            <node TEXT="ConceptGraphs: Open-Vocabulary 3D Scene Graphs for Perception and Planning" />
            <node TEXT="在三维对象层组织开放词汇特征和关系，使地图更便于语义推理和规划。" />
            <node TEXT="发表状态：正式发表" />
          </node>
        </node>
      </node>
      <node TEXT="可泛化视觉导航｜Generalizable Visual Navigation" FOLDED="true">
        <node TEXT="原问题：怎样复用已有行驶经验，在新环境中探索或完成语言目标？" />
        <node TEXT="输入输出：视觉历史、图像/语言目标 → 路点或高层移动命令 → 底层控制" />
        <node TEXT="变化的变量（归纳）：目标条件导航扩展到探索与导航统一，以及语言指令到足式移动的层级接口。" />
        <node TEXT="已有扩展轴：目标模态、探索策略、历史记忆、移动底盘/足式身体" />
        <node TEXT="可关联 AI 框架（归纳）：基础策略、条件扩散、层级 VLA、目标条件学习" />
        <node TEXT="代表论文与验证范围">
          <node TEXT="ViNT｜CoRL 2023｜多数据预训练＋实机导航" LINK="https://proceedings.mlr.press/v229/shah23a.html">
            <node TEXT="ViNT: A Foundation Model for Visual Navigation" />
            <node TEXT="以通用到达目标任务在异构导航数据上预训练，再适配不同导航设置。" />
            <node TEXT="发表状态：正式发表" />
          </node>
          <node TEXT="NoMaD｜ICRA 2024｜实机导航与探索" LINK="https://general-navigation-models.github.io/nomad/index.html">
            <node TEXT="NoMaD: Goal Masked Diffusion Policies for Navigation and Exploration" />
            <node TEXT="用目标遮蔽把探索和目标导向行为统一到扩散策略，支持未见环境。" />
            <node TEXT="发表状态：正式发表" />
          </node>
          <node TEXT="NaVILA｜RSS 2025｜层级导航＋足式实机" LINK="https://roboticsproceedings.org/rss21/p018.html">
            <node TEXT="NaVILA: Legged Robot Vision-Language-Action Model for Navigation" />
            <node TEXT="高层 VLA 生成移动命令，实时低层运动策略执行并处理避障；两层运行频率与职责不同。" />
            <node TEXT="发表状态：正式发表" />
          </node>
        </node>
      </node>
      <node TEXT="学习式定位与稠密建图｜Learned Tracking and Dense Mapping" FOLDED="true">
        <node TEXT="原问题：怎样从相机序列同时估计运动与环境结构？" />
        <node TEXT="输入输出：单目、双目或 RGB-D 序列 → 相机轨迹、深度和稠密地图" />
        <node TEXT="变化的变量（归纳）：从学习匹配到可微几何迭代，再到具有渲染能力的高斯地图表示。" />
        <node TEXT="已有扩展轴：几何一致性、跟踪失效、地图表示、渲染、计算与内存" />
        <node TEXT="可关联 AI 框架（归纳）：可微优化、循环推断、三维高斯表示、几何学习" />
        <node TEXT="代表论文与验证范围">
          <node TEXT="DROID-SLAM｜NeurIPS 2021｜视觉 SLAM 数据集评测" LINK="https://proceedings.neurips.cc/paper/2021/hash/89fcd07f20b6785b92134bd6c1d0fa42-Abstract.html">
            <node TEXT="DROID-SLAM: Deep Visual SLAM for Monocular, Stereo, and RGB-D Cameras" />
            <node TEXT="在循环更新中联合优化相机位姿和逐像素深度；这是 SLAM 方法，与 DROID 操作数据集不同。" />
            <node TEXT="发表状态：正式发表" />
          </node>
          <node TEXT="SplaTAM｜CVPR 2024｜RGB-D SLAM 评测" LINK="https://openaccess.thecvf.com/content/CVPR2024/html/Keetha_SplaTAM_Splat_Track__Map_3D_Gaussians_for_Dense_RGB-D_CVPR_2024_paper.html">
            <node TEXT="SplaTAM: Splat, Track &amp; Map 3D Gaussians for Dense RGB-D SLAM" />
            <node TEXT="以可渲染三维高斯构建稠密地图并估计相机位姿；研究重点是定位建图，不直接等于完整导航系统。" />
            <node TEXT="发表状态：正式发表" />
          </node>
        </node>
      </node>
    </node>
    <node TEXT="足式、人形与移动操作｜复杂地形、平衡与操作怎样由同一身体协调？" POSITION="left" FOLDED="true">
      <node TEXT="感知驱动的足式运动｜Perceptive and Agile Locomotion" FOLDED="true">
        <node TEXT="原问题：怎样在感知噪声和复杂地形中保持稳定并完成敏捷动作？" />
        <node TEXT="输入输出：本体感觉、深度/地形观测、运动命令 → 关节控制" />
        <node TEXT="变化的变量（归纳）：从依赖本体感觉的稳态行走，扩展到利用不可靠外感知完成动态越障。" />
        <node TEXT="已有扩展轴：地形记忆、感知融合、奖励设计、特权信息蒸馏、仿真迁移" />
        <node TEXT="可关联 AI 框架（归纳）：强化学习、多模态融合、部分可观测控制、教师学生学习" />
        <node TEXT="代表论文与验证范围">
          <node TEXT="Perceptive Locomotion｜Science Robotics 2022｜仿真训练＋野外实机" LINK="https://leggedrobotics.github.io/rl-perceptiveloco/">
            <node TEXT="Learning robust perceptive locomotion for quadrupedal robots in the wild" />
            <node TEXT="融合外部感知与本体感觉，在感知受损时保持鲁棒性，并在真实复杂地形测试。" />
            <node TEXT="发表状态：正式发表" />
          </node>
          <node TEXT="Extreme Parkour｜ICRA 2024｜仿真训练＋四足实机" LINK="https://extreme-parkour.github.io/">
            <node TEXT="Extreme Parkour with Legged Robots" />
            <node TEXT="从前向深度图直接生成敏捷控制，用大规模 RL 应对不精确感知和执行器，完成跳跃、跨越等动作。" />
            <node TEXT="发表状态：正式发表" />
          </node>
        </node>
      </node>
      <node TEXT="人形运动与全身学习｜Humanoid Motion and Whole-Body Learning" FOLDED="true">
        <node TEXT="原问题：怎样把人类运动变为满足机器人平衡和动力学约束的全身技能？" />
        <node TEXT="输入输出：人类运动/视频、机器人状态 → 重定向目标 → 全身控制/自主技能" />
        <node TEXT="变化的变量（归纳）：从动作重定向和跟踪，扩展到遥操作采数、自主模仿及真实动力学校正。" />
        <node TEXT="已有扩展轴：身体比例差异、平衡、全身接触、残差动力学、遥操作与自主性" />
        <node TEXT="可关联 AI 框架（归纳）：运动生成、强化学习、域适配、残差模型、模仿学习" />
        <node TEXT="代表论文与验证范围">
          <node TEXT="H2O｜IROS 2024｜仿真训练＋人形遥操作" LINK="https://arxiv.org/abs/2403.04436">
            <node TEXT="Learning Human-to-Humanoid Real-Time Whole-Body Teleoperation" />
            <node TEXT="用单 RGB 相机输入实现人到人形的全身遥操作；人提供实时运动目标。" />
            <node TEXT="发表状态：正式发表" />
          </node>
          <node TEXT="HumanPlus｜CoRL 2024｜遥操作采集＋实机自主模仿" LINK="https://proceedings.mlr.press/v270/fu25a.html">
            <node TEXT="HumanPlus: Humanoid Shadowing and Imitation from Humans" />
            <node TEXT="先以仿真 RL 支持人形跟随人类，再用实机示教训练视觉技能；区分 shadowing 和自主执行两阶段。" />
            <node TEXT="发表状态：正式发表" />
          </node>
          <node TEXT="ASAP｜RSS 2025｜仿真校正＋人形实机" LINK="https://www.roboticsproceedings.org/rss21/p066.html">
            <node TEXT="ASAP: Aligning Simulation and Real-World Physics for Learning Agile Humanoid Whole-Body Skills" />
            <node TEXT="利用真实数据学习残差动作模型并回填仿真，改善敏捷动作跟踪；动作跟踪本身不包含开放任务规划。" />
            <node TEXT="发表状态：正式发表" />
          </node>
        </node>
      </node>
      <node TEXT="移动与操作的全身协调｜Whole-Body and Mobile Manipulation" FOLDED="true">
        <node TEXT="原问题：移动底座、手臂或腿怎样协同完成接触任务？" />
        <node TEXT="输入输出：任务、目标位姿、环境和全身状态 → 底座/肢体联合控制" />
        <node TEXT="变化的变量（归纳）：操作不再假设固定底座，也不再假设移动与操作必须使用不同肢体。" />
        <node TEXT="已有扩展轴：全身示教、移动与手部同步、支撑稳定性、肢体功能复用" />
        <node TEXT="可关联 AI 框架（归纳）：层级控制、联合策略、模仿学习、受约束强化学习" />
        <node TEXT="代表论文与验证范围">
          <node TEXT="Mobile ALOHA｜CoRL 2024｜轮式双臂实机" LINK="https://proceedings.mlr.press/v270/fu25b.html">
            <node TEXT="Mobile ALOHA: Learning Bimanual Mobile Manipulation using Low-Cost Whole-Body Teleoperation" />
            <node TEXT="把低成本双臂示教扩展到移动底座与全身示教，学习需要移动和操作协调的任务。" />
            <node TEXT="发表状态：正式发表" />
          </node>
          <node TEXT="Pedipulate｜ICRA 2024｜仿真训练＋四足实机" LINK="https://doi.org/10.1109/ICRA57147.2024.10611307">
            <node TEXT="Pedipulate: Enabling Manipulation Skills using a Quadruped Robot’s Leg" />
            <node TEXT="让一条腿跟踪操作目标，其他肢体与身体协同保持稳定，展示腿部操作而无需额外机械臂。" />
            <node TEXT="发表状态：正式发表" />
          </node>
        </node>
      </node>
    </node>
    <node TEXT="世界模型、仿真与迁移｜怎样在模型和仿真中学会技能，再得到真实有效的控制？" POSITION="left" FOLDED="true">
      <node TEXT="学习动力学与世界模型｜Learned Dynamics and World Models" FOLDED="true">
        <node TEXT="原问题：能否预测动作后果，并借助预测进行规划或学习？" />
        <node TEXT="输入输出：历史观测、动作、奖励/任务 → 未来状态/图像 → 规划或策略更新" />
        <node TEXT="变化的变量（归纳）：预测目标从局部状态转向潜在动力学、跨任务模型和可交互视觉模拟。" />
        <node TEXT="已有扩展轴：动作因果性、潜在状态、长时误差、模型利用、训练覆盖" />
        <node TEXT="可关联 AI 框架（归纳）：模型式强化学习、生成视频、潜变量动态系统、规划" />
        <node TEXT="代表论文与验证范围">
          <node TEXT="UniSim｜ICLR 2024｜生成模拟＋实机迁移实验" LINK="https://proceedings.iclr.cc/paper_files/paper/2024/hash/c4d66eae503694424123b93ac0fbaf17-Abstract-Conference.html">
            <node TEXT="Learning Interactive Real-World Simulators" />
            <node TEXT="以动作条件生成视觉交互经验，用于高层规划与低层学习，并报告特定任务的真实迁移；不等同于精确物理求解器。" />
            <node TEXT="发表状态：正式发表" />
          </node>
          <node TEXT="TD-MPC2｜ICLR 2024｜多类仿真控制任务" LINK="https://www.tdmpc2.com/">
            <node TEXT="TD-MPC2: Scalable, Robust World Models for Continuous Control" />
            <node TEXT="在学习的潜在世界模型中做局部轨迹优化，研究统一超参数和多任务扩展；核心结果来自仿真基准。" />
            <node TEXT="发表状态：正式发表" />
          </node>
          <node TEXT="DreamerV3｜Nature 2025｜虚拟环境与控制基准" LINK="https://www.nature.com/articles/s41586-025-08744-2">
            <node TEXT="Mastering diverse control tasks through world models" />
            <node TEXT="在模型想象的轨迹中学习 actor-critic，跨多种虚拟任务复用算法；广泛基准表现不能直接作为实机通用能力证据。" />
            <node TEXT="发表状态：正式发表" />
          </node>
        </node>
      </node>
      <node TEXT="弥合仿真与真实差异｜Closing Simulation-to-Reality Gaps" FOLDED="true">
        <node TEXT="原问题：仿真学到的策略怎样应对真实外观、动力学和底层控制差异？" />
        <node TEXT="输入输出：少量实景/实机数据、仿真和控制接口 → 校正环境/策略 → 实机测试" />
        <node TEXT="变化的变量（归纳）：迁移变量同时包括视觉外观、真实场景重建、动力学与控制器增益。" />
        <node TEXT="已有扩展轴：数字孪生、生成式域随机化、实机反馈、控制接口可学习性" />
        <node TEXT="可关联 AI 框架（归纳）：域适配、生成增强、系统辨识、优化与学习协同" />
        <node TEXT="代表论文与验证范围">
          <node TEXT="RialTo｜RSS 2024｜真实扫描→仿真 RL→实机" LINK="https://roboticsproceedings.org/rss20/p015.html">
            <node TEXT="Reconciling Reality through Simulation: A Real-To-Sim-to-Real Approach for Robust Manipulation" />
            <node TEXT="从少量真实观测构造数字孪生，在仿真中强化已有模仿策略，再回到真实操作测试。" />
            <node TEXT="发表状态：正式发表" />
          </node>
          <node TEXT="LucidSim｜CoRL 2024｜生成图像训练＋四足实机" LINK="https://proceedings.mlr.press/v270/yu25b.html">
            <node TEXT="Learning Visual Parkour from Generated Images" />
            <node TEXT="用生成模型丰富仿真视角图像，实现视觉策略到真实 RGB 观测的迁移。" />
            <node TEXT="发表状态：正式发表" />
          </node>
          <node TEXT="Tune to Learn｜RSS 2026｜控制接口与迁移实验" LINK="https://roboticsproceedings.org/rss22/p139.html">
            <node TEXT="Tune to Learn: How Controller Gains Shape Robot Policy Learning" />
            <node TEXT="研究增益如何影响模仿学习、RL 与仿真迁移；合适增益取决于学习方式，不能仅由期望刚度决定。" />
            <node TEXT="发表状态：正式发表" />
          </node>
        </node>
      </node>
      <node TEXT="可扩展物理任务环境｜Scalable Physical Task Environments" FOLDED="true">
        <node TEXT="原问题：怎样系统生成多样且可交互的机器人训练任务？" />
        <node TEXT="输入输出：资产、物理模型、任务定义与初始化 → 可交互训练/评测环境" />
        <node TEXT="变化的变量（归纳）：从小量固定任务，扩展到物体几何、家庭场景、物理状态与长任务组合。" />
        <node TEXT="已有扩展轴：几何变化、接触物理、状态谓词、任务组合、计算吞吐" />
        <node TEXT="可关联 AI 框架（归纳）：程序化数据生成、训练环境设计、组合泛化、基准设计" />
        <node TEXT="代表论文与验证范围">
          <node TEXT="ManiSkill2｜ICLR 2023｜操作仿真平台" LINK="https://openreview.net/pdf?id=b_CQDy9vrD1">
            <node TEXT="ManiSkill2: A Unified Benchmark for Generalizable Manipulation Skills" />
            <node TEXT="提供多类操作任务与对象变化，包含刚体和软体任务；用于技能训练和泛化评测。" />
            <node TEXT="发表状态：正式发表" />
          </node>
          <node TEXT="RoboCasa｜RSS 2024｜家庭任务仿真平台" LINK="https://www.roboticsproceedings.org/rss20/p050.html">
            <node TEXT="RoboCasa: Large-Scale Simulation of Household Tasks for Generalist Robots" />
            <node TEXT="通过可交互厨房场景、资产与任务扩展通用机器人学习数据；模拟成功仍需实机验证。" />
            <node TEXT="发表状态：正式发表" />
          </node>
          <node TEXT="BEHAVIOR-1K｜CoRL 2022｜日常活动仿真基准" LINK="https://proceedings.mlr.press/v205/li23a.html">
            <node TEXT="BEHAVIOR-1K: A Benchmark for Embodied AI with 1,000 Everyday Activities and Realistic Simulation" />
            <node TEXT="以日常活动与丰富物理状态定义长任务；1,000 种活动是任务范围，不是机器人已自主完成的实机能力。" />
            <node TEXT="发表状态：正式发表" />
          </node>
        </node>
      </node>
    </node>
    <node TEXT="接触、人机交互与身体设计｜除了视觉和算法，还需把什么纳入机器人系统？" POSITION="left" FOLDED="true">
      <node TEXT="触觉表示与接触反馈｜Tactile Representation and Contact Feedback" FOLDED="true">
        <node TEXT="原问题：怎样感知接触状态，并在精细操作中及时纠正动作？" />
        <node TEXT="输入输出：触觉图像/序列、视觉、力 → 接触表示/状态 → 闭环动作" />
        <node TEXT="变化的变量（归纳）：把接触信息从专用传感器特征扩展为可迁移表示，并让高频反馈参与控制。" />
        <node TEXT="已有扩展轴：传感器差异、静态/动态触觉、跨模态对齐、触觉与视觉频率" />
        <node TEXT="可关联 AI 框架（归纳）：自监督学习、多模态对齐、时序表示、分层控制" />
        <node TEXT="代表论文与验证范围">
          <node TEXT="Sparsh｜CoRL 2024｜真实触觉数据＋下游评测" LINK="https://proceedings.mlr.press/v270/higuera25a.html">
            <node TEXT="Sparsh: Self-supervised touch representations for vision-based tactile sensing" />
            <node TEXT="预训练通用视觉触觉表示，减少为每个任务和传感器手工设计感知模块的需求。" />
            <node TEXT="发表状态：正式发表" />
          </node>
          <node TEXT="AnyTouch｜ICLR 2025｜多传感触觉＋实机任务" LINK="https://gewu-lab.github.io/AnyTouch/">
            <node TEXT="Learning Unified Static-Dynamic Representation across Multiple Visuo-tactile Sensors" />
            <node TEXT="联合静态与动态、多传感器触觉信息，研究跨传感器迁移，并在真实精细倾倒中检验动态感知。" />
            <node TEXT="发表状态：正式发表" />
          </node>
          <node TEXT="Reactive Diffusion Policy｜RSS 2025｜视觉触觉/力闭环操作" LINK="https://roboticsproceedings.org/rss21/p052.html">
            <node TEXT="Reactive Diffusion Policy: Slow-Fast Visual-Tactile Policy Learning for Contact-Rich Manipulation" />
            <node TEXT="把慢速生成策略与快速触觉/力反馈控制分开，处理接触任务的实时反应需求。" />
            <node TEXT="发表状态：正式发表" />
          </node>
        </node>
      </node>
      <node TEXT="共享自主与交互纠正｜Shared Autonomy and Interactive Correction" FOLDED="true">
        <node TEXT="原问题：人怎样在任务进行中表达意图、修正机器人并留下可学习反馈？" />
        <node TEXT="输入输出：人类控制/语言纠正、观测、已有策略 → 辅助动作/更新策略" />
        <node TEXT="变化的变量（归纳）：人的角色从一次性提供示教，扩展到执行中协作和在线纠正。" />
        <node TEXT="已有扩展轴：自主权分配、意图保留、语言反馈、纠正数据、学习时机" />
        <node TEXT="可关联 AI 框架（归纳）：人机协同、条件生成、交互学习、层级策略" />
        <node TEXT="代表论文与验证范围">
          <node TEXT="To the Noise and Back｜RSS 2023｜共享控制研究" LINK="https://roboticsproceedings.org/rss19/p014.html">
            <node TEXT="To the Noise and Back: Diffusion for Shared Autonomy" />
            <node TEXT="将人类动作加噪后通过扩散先验纠正，使动作接近可行行为，同时尽量保留用户意图。" />
            <node TEXT="发表状态：正式发表" />
          </node>
          <node TEXT="Yell At Your Robot｜RSS 2024｜语言纠正＋实机长任务" LINK="https://www.roboticsproceedings.org/rss20/p025.html">
            <node TEXT="Yell At Your Robot: Improving On-the-Fly from Language Corrections" />
            <node TEXT="允许人用语言在执行中纠正，并利用纠正提高层级策略的长期任务表现。" />
            <node TEXT="发表状态：正式发表" />
          </node>
        </node>
      </node>
      <node TEXT="形态与控制协同设计｜Morphology and Controller Co-Design" FOLDED="true">
        <node TEXT="原问题：机器人身体形状、材料布局和控制怎样一起为任务优化？" />
        <node TEXT="输入输出：任务、材料/制造约束、模拟反馈 → 身体结构及控制" />
        <node TEXT="变化的变量（归纳）：把原本固定的身体也作为优化或生成变量。" />
        <node TEXT="已有扩展轴：形态与控制耦合、可微物理、制造约束、仿真到实体" />
        <node TEXT="可关联 AI 框架（归纳）：双层优化、生成设计、可微仿真、多目标搜索" />
        <node TEXT="代表论文与验证范围">
          <node TEXT="PreCo｜CoRL 2023｜模块化软体机器人仿真" LINK="https://proceedings.mlr.press/v229/wang23b.html">
            <node TEXT="PreCo: Enhancing Generalization in Co-Design of Modular Soft Robots via Brain-Body Pre-Training" />
            <node TEXT="预训练身体与控制协同表示，提升对不同任务和环境的设计泛化；主要证据来自模拟。" />
            <node TEXT="发表状态：正式发表" />
          </node>
          <node TEXT="DiffuseBot｜NeurIPS 2023｜物理生成＋模拟/制造示例" LINK="https://proceedings.neurips.cc/paper_files/paper/2023/hash/8b1008098947ad59144c18a78337f937-Abstract-Conference.html">
            <node TEXT="DiffuseBot: Breeding Soft Robots With Physics-Augmented Generative Diffusion Models" />
            <node TEXT="结合扩散生成和可微物理，同时优化形态与控制；论文含模拟与制造机器人示例。" />
            <node TEXT="发表状态：正式发表" />
          </node>
          <node TEXT="Efficient Automatic Design｜PNAS 2023｜可微设计＋实体软体实验" LINK="https://pmc.ncbi.nlm.nih.gov/articles/PMC10576117/">
            <node TEXT="Efficient automatic design of robots" />
            <node TEXT="将行为不足反传到结构设计，并制造气动软体机器人检验运动；设计计算与人工制造是不同阶段。" />
            <node TEXT="发表状态：正式发表" />
          </node>
        </node>
      </node>
    </node>
    <node TEXT="评测、可靠性与多机器人｜怎样知道系统有效，怎样在不确定和协同条件下运行？" POSITION="left" FOLDED="true">
      <node TEXT="泛化与可复现评测｜Generalization and Reproducible Evaluation" FOLDED="true">
        <node TEXT="原问题：怎样分开衡量技能学习、知识迁移和真实部署表现？" />
        <node TEXT="输入输出：策略、任务分布、扰动和配对实机实验 → 可比较评测证据" />
        <node TEXT="变化的变量（归纳）：从单场景成功率，扩展到迁移分解，以及仿真指标与实机排名的对应关系。" />
        <node TEXT="已有扩展轴：终身学习、空间/目标/对象变化、仿真真实性、实机相关性" />
        <node TEXT="可关联 AI 框架（归纳）：基准设计、分布外评测、数据质量、统计实验" />
        <node TEXT="代表论文与验证范围">
          <node TEXT="LIBERO｜NeurIPS 2023｜仿真终身学习基准" LINK="https://proceedings.neurips.cc/paper_files/paper/2023/hash/8c3c666820ea055a77726d66fc7d447f-Abstract-Datasets_and_Benchmarks.html">
            <node TEXT="LIBERO: Benchmarking Knowledge Transfer for Lifelong Robot Learning" />
            <node TEXT="围绕空间、对象、目标等知识迁移构造任务套件，用于分析学习和遗忘。" />
            <node TEXT="发表状态：正式发表" />
          </node>
          <node TEXT="SIMPLER｜CoRL 2024｜仿真与配对实机评测" LINK="https://proceedings.mlr.press/v270/li25c.html">
            <node TEXT="Evaluating Real-World Robot Manipulation Policies in Simulation" />
            <node TEXT="通过视觉匹配和变化聚合构造评测环境，检验仿真表现与实机策略表现的相关性。" />
            <node TEXT="发表状态：正式发表" />
          </node>
          <node TEXT="PolaRiS｜RSS 2026｜实景重建＋配对实机评测" LINK="https://roboticsproceedings.org/rss22/p062.html">
            <node TEXT="PolaRiS: Scalable Real-to-Sim Evaluations for Generalist Robot Policies" />
            <node TEXT="从真实场景视频重建交互仿真，检验通用策略排名与实机结果的相关性；仿真作为实机评测的补充。" />
            <node TEXT="发表状态：正式发表" />
          </node>
        </node>
      </node>
      <node TEXT="不确定性与安全约束决策｜Uncertainty and Safety-Constrained Decisions" FOLDED="true">
        <node TEXT="原问题：机器人何时应求助、约束动作或切换到回退策略？" />
        <node TEXT="输入输出：状态、候选行动、置信信息和安全约束 → 行动/求助/安全回退" />
        <node TEXT="变化的变量（归纳）：把答对任务以外的决策风险、约束和实时干预纳入系统。" />
        <node TEXT="已有扩展轴：校准集与覆盖假设、控制屏障、语义风险、监控与回退延迟" />
        <node TEXT="可关联 AI 框架（归纳）：共形预测、受约束生成、运行时监控、风险敏感规划" />
        <node TEXT="代表论文与验证范围">
          <node TEXT="KnowNo｜CoRL 2023｜理论＋仿真/实机求助" LINK="https://proceedings.mlr.press/v229/ren23a.html">
            <node TEXT="Robots That Ask For Help: Uncertainty Alignment for Large Language Model Planners" />
            <node TEXT="用共形预测校准语言规划器的候选集合并决定求助；保证对应任务选择及校准条件，不是任意碰撞安全。" />
            <node TEXT="发表状态：正式发表" />
          </node>
          <node TEXT="SafeDiffuser｜ICLR 2025｜理论＋规划/控制任务" LINK="https://proceedings.iclr.cc/paper_files/paper/2025/hash/f95606d8e870020085990d9650b4f2a1-Abstract-Conference.html">
            <node TEXT="SafeDiffuser: Safe Planning with Diffusion Probabilistic Models" />
            <node TEXT="把控制屏障式约束加入去噪过程，研究安全生成；保证取决于指定约束和系统假设。" />
            <node TEXT="发表状态：正式发表" />
          </node>
          <node TEXT="FORTRESS｜CoRL 2025｜仿真＋实机数据/四旋翼" LINK="https://proceedings.mlr.press/v305/ganai25a.html">
            <node TEXT="Real-Time Out-of-Distribution Failure Prevention via Multi-Modal Reasoning" />
            <node TEXT="低频推理预判风险，监控触发时快速生成回退轨迹，协调语义判断与实时动力学规划。" />
            <node TEXT="发表状态：正式发表" />
          </node>
        </node>
      </node>
      <node TEXT="多机器人协同与路径规划｜Multi-Robot Coordination and Pathfinding" FOLDED="true">
        <node TEXT="原问题：多台机器人怎样在共享空间中快速移动并避免相互阻塞？" />
        <node TEXT="输入输出：多机器人起终点、地图、局部观测和通信 → 协同路径/轨迹" />
        <node TEXT="变化的变量（归纳）：由单体避障扩展到联合冲突、拥堵、通信条件与分布式实时决策。" />
        <node TEXT="已有扩展轴：离散 MAPF 与连续飞行、集中/分散、可扩展性、通信和动力学" />
        <node TEXT="可关联 AI 框架（归纳）：多智能体搜索、组合优化、分布式规划、博弈与协同" />
        <node TEXT="代表论文与验证范围">
          <node TEXT="EGO-Swarm｜ICRA 2021｜分散规划＋无人机实机" LINK="https://ieeexplore.ieee.org/document/9561902/">
            <node TEXT="EGO-Swarm: A Fully Autonomous and Decentralized Quadrotor Swarm System in Cluttered Environments" />
            <node TEXT="无人机用局部感知与邻居轨迹进行分散规划，在拥挤环境协同飞行；需考虑具体感知通信条件。" />
            <node TEXT="发表状态：正式发表" />
          </node>
          <node TEXT="MAPF-LNS2｜AAAI 2022｜离散多智能体路径基准" LINK="https://ojs.aaai.org/index.php/AAAI/article/view/21266">
            <node TEXT="MAPF-LNS2: Fast Repairing for Multi-Agent Path Finding via Large Neighborhood Search" />
            <node TEXT="从可能有冲突的路径开始，反复选择局部机器人集合进行修复；离散结果还需运动执行接口。" />
            <node TEXT="发表状态：正式发表" />
          </node>
          <node TEXT="LaCAM｜AAAI 2023｜离散多智能体路径基准" LINK="https://ojs.aaai.org/index.php/AAAI/article/view/26377">
            <node TEXT="LaCAM: Search-Based Algorithm for Quick Multi-Agent Pathfinding" />
            <node TEXT="通过惰性约束与配置搜索加速大规模 MAPF；评价对象是路径算法，不直接说明实体集群部署成熟度。" />
            <node TEXT="发表状态：正式发表" />
          </node>
        </node>
      </node>
    </node>
    <node TEXT="六条概念阅读脉络（整理关系）" POSITION="right" FOLDED="true">
      <node TEXT="经验复用：从表征到跨身体策略">
        <node TEXT="R3M / VC-1 → Open X、DROID、UMI → Octo / OpenVLA → π₀ / π₀.₅ → LAP；依次关注特征、数据、动作模型和身体接口。" />
        <node TEXT="可迁移视觉表征">
          <node TEXT="R3M｜CoRL 2022" LINK="https://proceedings.mlr.press/v205/nair23a.html" />
          <node TEXT="VC-1 / CortexBench｜NeurIPS 2023" LINK="https://proceedings.neurips.cc/paper_files/paper/2023/hash/022ca1bed6b574b962c48a2856eb207b-Abstract-Conference.html" />
        </node>
        <node TEXT="可扩展示教与机器人数据">
          <node TEXT="Open X-Embodiment｜ICRA 2024" LINK="https://is.mpg.de/en/publications/openx24" />
          <node TEXT="DROID｜RSS 2024" LINK="https://roboticsproceedings.org/rss20/p120.html" />
          <node TEXT="UMI｜RSS 2024" LINK="https://www.roboticsproceedings.org/rss20/p045.html" />
        </node>
        <node TEXT="通用策略与 VLA">
          <node TEXT="RT-2｜CoRL 2023" LINK="https://proceedings.mlr.press/v229/zitkovich23a.html" />
          <node TEXT="Octo｜RSS 2024" LINK="https://www.roboticsproceedings.org/rss20/p090.html" />
          <node TEXT="OpenVLA｜CoRL 2024" LINK="https://proceedings.mlr.press/v270/kim25c.html" />
          <node TEXT="π₀｜RSS 2025" LINK="https://roboticsproceedings.org/rss21/p010.html" />
          <node TEXT="π₀.₅｜CoRL 2025" LINK="https://proceedings.mlr.press/v305/black25a.html" />
          <node TEXT="LAP｜RSS 2026" LINK="https://roboticsproceedings.org/rss22/p203.html" />
        </node>
      </node>
      <node TEXT="精细操作：从动作序列到接触闭环">
        <node TEXT="Diffusion Policy / ACT → 三维动作表示 → 灵巧示教迁移 → 高频触觉反馈；CAP 另展示接触点作为技能条件。" />
        <node TEXT="生成式动作与时间一致性">
          <node TEXT="Diffusion Policy｜RSS 2023" LINK="https://roboticsproceedings.org/rss19/p026.html" />
          <node TEXT="ACT / ALOHA｜RSS 2023" LINK="https://www.roboticsproceedings.org/rss19/p016.html" />
          <node TEXT="Streaming Flow Policy｜CoRL 2025" LINK="https://proceedings.mlr.press/v305/jiang25a.html" />
        </node>
        <node TEXT="三维空间中的操作策略">
          <node TEXT="PerAct｜CoRL 2022" LINK="https://proceedings.mlr.press/v205/shridhar23a.html" />
          <node TEXT="RVT｜CoRL 2023" LINK="https://proceedings.mlr.press/v229/goyal23a.html" />
          <node TEXT="DP3｜RSS 2024" LINK="https://roboticsproceedings.org/rss20/p067.html" />
          <node TEXT="Contact-Anchored Policies｜RSS 2026" LINK="https://roboticsproceedings.org/rss22/p141.html" />
        </node>
        <node TEXT="灵巧手示教与技能迁移">
          <node TEXT="AnyTeleop｜RSS 2023" LINK="https://roboticsproceedings.org/rss19/p015.html" />
          <node TEXT="DexCap / DexIL｜RSS 2024" LINK="https://www.roboticsproceedings.org/rss20/p043.html" />
        </node>
        <node TEXT="触觉表示与接触反馈">
          <node TEXT="Sparsh｜CoRL 2024" LINK="https://proceedings.mlr.press/v270/higuera25a.html" />
          <node TEXT="AnyTouch｜ICLR 2025" LINK="https://gewu-lab.github.io/AnyTouch/" />
          <node TEXT="Reactive Diffusion Policy｜RSS 2025" LINK="https://roboticsproceedings.org/rss21/p052.html" />
        </node>
      </node>
      <node TEXT="执行推理：从任务语义到可纠正行动">
        <node TEXT="技能/API → 空间约束 → 运动轨迹 → 执行反馈；人类纠正、求助和安全回退补足闭环。" />
        <node TEXT="有物理落点的技能与程序规划">
          <node TEXT="SayCan｜CoRL 2022" LINK="https://proceedings.mlr.press/v205/ichter23a.html" />
          <node TEXT="Code as Policies｜ICRA 2023" LINK="https://arxiv.org/abs/2209.07753" />
          <node TEXT="PaLM-E｜ICML 2023" LINK="https://proceedings.mlr.press/v202/driess23a.html" />
        </node>
        <node TEXT="语言到空间约束">
          <node TEXT="VoxPoser｜CoRL 2023" LINK="https://proceedings.mlr.press/v229/huang23b.html" />
          <node TEXT="ReKep｜CoRL 2024" LINK="https://proceedings.mlr.press/v270/huang25g.html" />
        </node>
        <node TEXT="约束运动生成与优化">
          <node TEXT="GCS 运动规划｜Science Robotics 2023" LINK="https://arxiv.org/abs/2205.04422" />
          <node TEXT="cuRobo｜技术报告 / arXiv 2023" LINK="https://curobo.org/research/research.html" />
        </node>
        <node TEXT="闭环推理与失败恢复">
          <node TEXT="Inner Monologue｜CoRL 2022" LINK="https://proceedings.mlr.press/v205/huang23c.html" />
          <node TEXT="REFLECT｜CoRL 2023" LINK="https://proceedings.mlr.press/v229/liu23g.html" />
        </node>
        <node TEXT="共享自主与交互纠正">
          <node TEXT="To the Noise and Back｜RSS 2023" LINK="https://roboticsproceedings.org/rss19/p014.html" />
          <node TEXT="Yell At Your Robot｜RSS 2024" LINK="https://www.roboticsproceedings.org/rss20/p025.html" />
        </node>
        <node TEXT="不确定性与安全约束决策">
          <node TEXT="KnowNo｜CoRL 2023" LINK="https://proceedings.mlr.press/v229/ren23a.html" />
          <node TEXT="SafeDiffuser｜ICLR 2025" LINK="https://proceedings.iclr.cc/paper_files/paper/2025/hash/f95606d8e870020085990d9650b4f2a1-Abstract-Conference.html" />
          <node TEXT="FORTRESS｜CoRL 2025" LINK="https://proceedings.mlr.press/v305/ganai25a.html" />
        </node>
      </node>
      <node TEXT="空间智能：从几何地图到语言导航">
        <node TEXT="DROID-SLAM / SplaTAM → ConceptFusion / ConceptGraphs → ViNT / NoMaD / NaVILA；几何、语义记忆和移动决策承担不同职责。" />
        <node TEXT="学习式定位与稠密建图">
          <node TEXT="DROID-SLAM｜NeurIPS 2021" LINK="https://proceedings.neurips.cc/paper/2021/hash/89fcd07f20b6785b92134bd6c1d0fa42-Abstract.html" />
          <node TEXT="SplaTAM｜CVPR 2024" LINK="https://openaccess.thecvf.com/content/CVPR2024/html/Keetha_SplaTAM_Splat_Track__Map_3D_Gaussians_for_Dense_RGB-D_CVPR_2024_paper.html" />
        </node>
        <node TEXT="开放词汇空间记忆">
          <node TEXT="ConceptFusion｜RSS 2023" LINK="https://roboticsproceedings.org/rss19/p066.html" />
          <node TEXT="ConceptGraphs｜ICRA 2024" LINK="https://concept-graphs.github.io/" />
        </node>
        <node TEXT="可泛化视觉导航">
          <node TEXT="ViNT｜CoRL 2023" LINK="https://proceedings.mlr.press/v229/shah23a.html" />
          <node TEXT="NoMaD｜ICRA 2024" LINK="https://general-navigation-models.github.io/nomad/index.html" />
          <node TEXT="NaVILA｜RSS 2025" LINK="https://roboticsproceedings.org/rss21/p018.html" />
        </node>
      </node>
      <node TEXT="身体能力：从地形适应到全身协同">
        <node TEXT="感知运动 → 人类动作重定向与实机校正 → 移动操作协调；形态协同设计进一步把身体本身纳入变量。" />
        <node TEXT="感知驱动的足式运动">
          <node TEXT="Perceptive Locomotion｜Science Robotics 2022" LINK="https://leggedrobotics.github.io/rl-perceptiveloco/" />
          <node TEXT="Extreme Parkour｜ICRA 2024" LINK="https://extreme-parkour.github.io/" />
        </node>
        <node TEXT="人形运动与全身学习">
          <node TEXT="H2O｜IROS 2024" LINK="https://arxiv.org/abs/2403.04436" />
          <node TEXT="HumanPlus｜CoRL 2024" LINK="https://proceedings.mlr.press/v270/fu25a.html" />
          <node TEXT="ASAP｜RSS 2025" LINK="https://www.roboticsproceedings.org/rss21/p066.html" />
        </node>
        <node TEXT="移动与操作的全身协调">
          <node TEXT="Mobile ALOHA｜CoRL 2024" LINK="https://proceedings.mlr.press/v270/fu25b.html" />
          <node TEXT="Pedipulate｜ICRA 2024" LINK="https://doi.org/10.1109/ICRA57147.2024.10611307" />
        </node>
        <node TEXT="形态与控制协同设计">
          <node TEXT="PreCo｜CoRL 2023" LINK="https://proceedings.mlr.press/v229/wang23b.html" />
          <node TEXT="DiffuseBot｜NeurIPS 2023" LINK="https://proceedings.neurips.cc/paper_files/paper/2023/hash/8b1008098947ad59144c18a78337f937-Abstract-Conference.html" />
          <node TEXT="Efficient Automatic Design｜PNAS 2023" LINK="https://pmc.ncbi.nlm.nih.gov/articles/PMC10576117/" />
        </node>
      </node>
      <node TEXT="可信迁移：从模拟经验到实机证据">
        <node TEXT="学习模型/物理仿真 → 多样任务 → 视觉和控制接口校正 → 配对实机评测；多机器人还要检验冲突、通信和规模。" />
        <node TEXT="学习动力学与世界模型">
          <node TEXT="UniSim｜ICLR 2024" LINK="https://proceedings.iclr.cc/paper_files/paper/2024/hash/c4d66eae503694424123b93ac0fbaf17-Abstract-Conference.html" />
          <node TEXT="TD-MPC2｜ICLR 2024" LINK="https://www.tdmpc2.com/" />
          <node TEXT="DreamerV3｜Nature 2025" LINK="https://www.nature.com/articles/s41586-025-08744-2" />
        </node>
        <node TEXT="可扩展物理任务环境">
          <node TEXT="ManiSkill2｜ICLR 2023" LINK="https://openreview.net/pdf?id=b_CQDy9vrD1" />
          <node TEXT="RoboCasa｜RSS 2024" LINK="https://www.roboticsproceedings.org/rss20/p050.html" />
          <node TEXT="BEHAVIOR-1K｜CoRL 2022" LINK="https://proceedings.mlr.press/v205/li23a.html" />
        </node>
        <node TEXT="弥合仿真与真实差异">
          <node TEXT="RialTo｜RSS 2024" LINK="https://roboticsproceedings.org/rss20/p015.html" />
          <node TEXT="LucidSim｜CoRL 2024" LINK="https://proceedings.mlr.press/v270/yu25b.html" />
          <node TEXT="Tune to Learn｜RSS 2026" LINK="https://roboticsproceedings.org/rss22/p139.html" />
        </node>
        <node TEXT="泛化与可复现评测">
          <node TEXT="LIBERO｜NeurIPS 2023" LINK="https://proceedings.neurips.cc/paper_files/paper/2023/hash/8c3c666820ea055a77726d66fc7d447f-Abstract-Datasets_and_Benchmarks.html" />
          <node TEXT="SIMPLER｜CoRL 2024" LINK="https://proceedings.mlr.press/v270/li25c.html" />
          <node TEXT="PolaRiS｜RSS 2026" LINK="https://roboticsproceedings.org/rss22/p062.html" />
        </node>
        <node TEXT="多机器人协同与路径规划">
          <node TEXT="EGO-Swarm｜ICRA 2021" LINK="https://ieeexplore.ieee.org/document/9561902/" />
          <node TEXT="MAPF-LNS2｜AAAI 2022" LINK="https://ojs.aaai.org/index.php/AAAI/article/view/21266" />
          <node TEXT="LaCAM｜AAAI 2023" LINK="https://ojs.aaai.org/index.php/AAAI/article/view/26377" />
        </node>
      </node>
    </node>
  </node>
</map>