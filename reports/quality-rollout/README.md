# MOF／REE 高中基础讲解提升：交付索引

已完成并发布：三篇样板、固化后的 paper-webpage Skill，以及按五批推进的其余 25 篇。没有暂缓页面。原工作区成果保留；发布使用基于 origin/main 的独立工作区。

Completed and published: three pilots, the reusable Skill and all 25 additional explainers. Original URLs, anchors, identities, initial publication dates and creation times are retained.

[在线 MOF 讲解目录](https://vickie02736.github.io/paper-webpages/?theme=mof&explainers=1&lang=zh) · [English](https://vickie02736.github.io/paper-webpages/?theme=mof&explainers=1&lang=en) · [进度记录](progress.json) · [Skill](../../.agents/skills/paper-webpage/SKILL.md)

## 三类验收分别记录

- **科学内容**：新增解释、公式、计算与方法关系对照相应正文、关键图表和相关 SI；未列独立 SI 的论文明确记录。观测、作者解释、讲解者推断和教学假设分别标注。保留原文／SI 冲突与未证实结论。综述的被引原论文并未全部独立重读。
- **讲解质量**：每篇有原页问题、知识依赖、方法目的、证据比较与阅读任务；提供完整中英文和直觉／机制／研究层次。25 篇原有正文全部保留，部分内容渐进展开。自审证明覆盖与可追溯，**没有进行真人理解测试**。
- **技术行为**：最终全站 43 页静态、目录、分类和文献元数据检查通过。各批完成全站浏览器回归，最后一次为 **5,751 次交互检查**。25 篇专项共覆盖 450 个视口／语言／深度组合、4,590 次锚点检查；检查 1440／768／390 px、中英文、键盘、焦点、切换后的状态与滚动、展开项、英文刷新、溢出及资源／页面错误。代表截图已实际查看。新讲解层文字与控件对比度最低约 8.00:1。没有真实屏幕阅读器试用。

沿用静态 HTML 和本地 CSS/JavaScript，没有新增运行时框架或外部服务。数据哈希和章节保留见各批 invariants；另见[正文保留记录](content-retention.json)和[对比度记录](lesson-contrast.json)。后者只评价新讲解层，不是整站无障碍认证。

## 首次发布：三篇样板

- [UiO-66／缓冲液](https://vickie02736.github.io/paper-webpages/papers/uio66-buffer-stability/?lang=zh)：测量对象、百分数分母、固液证据与原图导读。
- [水稳定 MOF 机器学习发现](https://vickie02736.github.io/paper-webpages/papers/water-stable-mof-discovery/?lang=zh)：真实结构、GCMC／STP／VPOV、标签来源、模型边界与分组验证。
- [水稳定性综述](https://vickie02736.github.io/paper-webpages/papers/water-stability-review/?lang=zh)：异质条件、矛盾证据与自由能原图导读。

发布提交 `7176d21`，Pages 构建与线上资源已验证：[发布记录](release-initial.json)。首次检查包括全站 43 页静态与 3,993 次浏览器交互、结构专项 108 次、综述迁移专项 324 次，以及 UiO-66 和发现页专项。两个检查最初缺少 Playwright 路径，配置既有安装路径后重新通过；不是页面错误。

分项报告：[UiO-66](../uio66-buffer-quality-pilot/review-after.md)、[机器学习迁移](../discovery-quality-transfer/review.md)、[高中基础与真实结构](../discovery-high-school/review.md)、[综述迁移](../standards-high-school-transfer/review.md)。

## 第 1 批：5 篇已上线

- [水稳定性分级](https://vickie02736.github.io/paper-webpages/papers/hydrolytic-stability-grading/?lang=zh) — 自检：只测 PXRD，为什么不能给出 6A？
- [原子尺度水解](https://vickie02736.github.io/paper-webpages/papers/mof-hydrolysis-atomistic/?lang=zh) — 自检：偏置轨迹在 450 ps 出现反应，能说材料450 ps后失效吗？
- [MIL-100 水介质](https://vickie02736.github.io/paper-webpages/papers/mil100-water-matrices/?lang=zh) — 自检：保留PXRD峰、BET下降、pH下降，三个结果矛盾吗？
- [CMPO–MIL-101](https://vickie02736.github.io/paper-webpages/papers/cmpo-mil101-ree/?lang=zh) — 自检：为什么不能把12.46 mg/g与3.2放在一起直接排名？
- [缺陷／磷酸基 UiO-66–Yb](https://vickie02736.github.io/paper-webpages/papers/defect-phosphate-uio66-yb/?lang=zh) — 自检：面积下降、报告孔宽增大，是否证明总孔隙增加？

暂缓：无。科学核验与讲解任务审查已完成；技术专项 90 个组合通过，全站 43 页回归 4223 次交互通过。Pages 构建对应 `89ad64a`，线上模块、目录入口与共享资源已核对。

[原页问题](batch-1-before.md) · [科学／讲解／技术报告](batch-1-review.md) · [交互结果](batch-1-technical.json) · [数据与锚点保留](batch-1-invariants.json) · [代表截图](batch-1-screens/) · [发布记录](release-batch-1.json)

## 第 2 批：5 篇已上线

- [稳定性的三个维度](https://vickie02736.github.io/paper-webpages/papers/mof-stability-three-axes/?lang=zh) — TGA 有平台，为什么还不能说孔道完整？
- [动力学稳定性](https://vickie02736.github.io/paper-webpages/papers/mof-kinetic-stability/?lang=zh) — 一种材料静态吸氨更多，就一定更适合防护滤床吗？
- [耐水 MOF 设计](https://vickie02736.github.io/paper-webpages/papers/water-stable-mof-design/?lang=zh) — 加上拒水层后衍射峰保留，就完成了捕集材料优化吗？
- [水解稳定性基准](https://vickie02736.github.io/paper-webpages/papers/hydrolytic-stability-benchmark/?lang=zh) — 校正质量接近 100%，能说明孔道全部可用吗？
- [水的双重作用](https://vickie02736.github.io/paper-webpages/papers/water-dual-impact/?lang=zh) — 把所有能级一起上移 10 kJ/mol，局部能垒会改变吗？

暂缓：无。科学核验与讲解任务审查已完成；技术专项 90 个组合通过，全站 43 页回归 4871 次交互通过。Pages 构建对应 `0423e3f`，线上模块、目录入口与共享资源已核对。

[原页问题](batch-2-before.md) · [科学／讲解／技术报告](batch-2-review.md) · [交互结果](batch-2-technical.json) · [数据与锚点保留](batch-2-invariants.json) · [代表截图](batch-2-screens/) · [发布记录](release-batch-2.json)

## 第 3 批：5 篇已上线

- [UiO-66 悬挂连接端](https://vickie02736.github.io/paper-webpages/papers/uio66-dangling-linkers/?lang=zh) — 干燥后谱图恢复，能否证明湿态一年都没有局部变化？
- [稀土回收批判性综述](https://vickie02736.github.io/paper-webpages/papers/ree-mof-critical-review/?lang=zh) — 拟二级动力学拟合很好，能否单独证明化学配位？
- [定向吸附综述](https://vickie02736.github.io/paper-webpages/papers/ree-mof-targeted-review/?lang=zh) — 稀土／铁分离很好，能否说明能制得高纯钕？
- [MOF／COF 选择性综述](https://vickie02736.github.io/paper-webpages/papers/ree-porous-framework-review/?lang=zh) — COF 由共价键连接，就能默认耐强酸强碱吗？
- [REE 捕集与回收实验程序](https://vickie02736.github.io/paper-webpages/papers/ree-mof-protocol/?lang=zh) — 四次连续加载去除率都高，为什么不能推出四次再生成功？

暂缓：无。科学核验与讲解任务审查已完成；技术专项 90 个组合通过，全站 43 页回归 5123 次交互通过。Pages 构建对应 `437739d`，线上模块、目录入口与共享资源已核对。

[原页问题](batch-3-before.md) · [科学／讲解／技术报告](batch-3-review.md) · [交互结果](batch-3-technical.json) · [数据与锚点保留](batch-3-invariants.json) · [代表截图](batch-3-screens/) · [发布记录](release-batch-3.json)

## 第 4 批：5 篇已上线

- [功能化 Cr-MIL-101](https://vickie02736.github.io/paper-webpages/papers/functionalized-cr-mil101/?lang=zh) — PMIDA 对 Gd 容量最高，能否说它对所有被测稀土都最高？
- [丙烯酸 MIL-101–Sc](https://vickie02736.github.io/paper-webpages/papers/acrylic-mil101-scandium/?lang=zh) — Sc/La 的 Sel = 2.31，可以读成 2.31 倍或 2.31% 回收吗？
- [双官能团 UiO-66–Gd](https://vickie02736.github.io/paper-webpages/papers/dual-functional-uio66-gd/?lang=zh) — 改性后容量约提高 4.94 倍，能否推断吸附也快了 4.94 倍？
- [UiO-66／ZIF-8](https://vickie02736.github.io/paper-webpages/papers/uio66-zif8-ree/?lang=zh) — 复合物超过 U6N，就证明超过两种母体了吗？
- [有机磷 MIL-101](https://vickie02736.github.io/paper-webpages/papers/organophosphorus-mil101/?lang=zh) — 衍射峰保留，为什么还需测含磷基团和溶液 P？

暂缓：无。科学核验与讲解任务审查已完成；技术专项 90 个组合通过，全站 43 页回归 5427 次交互通过。Pages 构建对应 `dc6be69`，线上模块、目录入口与共享资源已核对。

[原页问题](batch-4-before.md) · [科学／讲解／技术报告](batch-4-review.md) · [交互结果](batch-4-technical.json) · [数据与锚点保留](batch-4-invariants.json) · [代表截图](batch-4-screens/) · [发布记录](release-batch-4.json)

## 第 5 批：5 篇已上线

- [DGA–MIL-101–Eu](https://vickie02736.github.io/paper-webpages/papers/dga-mil101-europium/?lang=zh) — 两个去除率只差 40 个百分点，为什么 β 不等于 1.8？
- [MIL-101／SBA-15–Lu/Y](https://vickie02736.github.io/paper-webpages/papers/mil101-sba15-lu-y/?lang=zh) — Sips 的 Qₘ 更大且 R² 很高，就证明吸附剂装得更多吗？
- [含铵体系 DTPA–MIL-101](https://vickie02736.github.io/paper-webpages/papers/dtpa-mil101-ammonium/?lang=zh) — 铵氮浓度变化小，就证明吸附后固体不含铵吗？
- [HKUST-1–Lu](https://vickie02736.github.io/paper-webpages/papers/hkust1-lutetium/?lang=zh) — 痕量实验去除率高，能否验证 512.82 mg/g 的容量？
- [硼氧六环 MOF](https://vickie02736.github.io/paper-webpages/papers/boroxine-mof-ree/?lang=zh) — 得到 Yb₂O₃ 的衍射峰，就证明纯度和总回收率了吗？

暂缓：无。科学核验与讲解任务审查已完成；技术专项 90 个组合通过，全站 43 页回归 5751 次交互通过。Pages 构建对应 `43c3448`，线上模块、目录入口与共享资源已核对。

[原页问题](batch-5-before.md) · [科学／讲解／技术报告](batch-5-review.md) · [交互结果](batch-5-technical.json) · [数据与锚点保留](batch-5-invariants.json) · [代表截图](batch-5-screens/) · [发布记录](release-batch-5.json)

## 最终部署与保留范围

最终内容发布提交为 `43c344846cda72d9144ddaa2ab8f296550a21a47`。Pages 成功构建后完成[48 项线上一致性检查](final-online.json)：28 篇页面 HTML、独立数据文件、共享讲解资源、目录、代表原图、IQECIS／YEZKUL 结构资源，以及 GitHub 上的 Skill 源文件均与本地一致。本文档随后汇总已经发生的发布结果，不修改页面科学内容。

目录仍为 479 篇论文、43 个讲解入口。首次发布日期、创建时间和原 URL 保留；内容先提交，再运行现有更新时间脚本并提交目录变化。更新旧页没有被伪装成新建页面。

实际理解效果仍需读者试读。未解决的原文／SI 差异、未给出的条件和机制边界保留在各页，不以技术通过替代科学证据。

Authoring and validation: [authored lessons](lessons.json), [scoped renderer](refine_pages.py), [browser checks](check-batch.cjs), [final rendering](capture-final.cjs), [release verification](verify_release.py). These are development tools, not a site runtime.
