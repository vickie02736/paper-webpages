# Evidence ledger

- Weiß, J.-B. et al. **Flux-mediated ligand exchange restructures metal–organic framework glasses.** *Nature Materials* (2026). DOI: [10.1038/s41563-026-02712-5](https://doi.org/10.1038/s41563-026-02712-5).
- 正文与图注核对范围：Abstract、Main/Results §§ Preparation of ZIF precursors and phen mixtures; Thermal behaviour and glass formation; Structural characterization; Porosity and mechanical properties; Magnetic properties; Applicability beyond ZIFs；Discussion；Methods；Supplementary information 入口。
- 关键数值：ZIF-62(Co/Zn) 第二次 DSC 的 Tg 约 206/184 °C（未改性约 312/314 °C）；gphen₁.₃₃ZIF-12 的 Tg 约 125 °C；Co-ZIF-62 CO₂ 吸附 2.42→0.37 mmol g⁻¹；压入模量 7.2→8.6 GPa；Curie–Weiss θCW 为 −25.19(8) K。
- 解释边界：Co 体系的配体交换证据较强；Zn 体系主要是 Tg 下降而拓扑保持；Ni(inic)₂ 产物更准确地称为 MOF 衍生配位络合物玻璃；“膜分离潜力”仍是待验证方向。

## Audit 2026-11-08

核对出版社正式网页版正文、图注与 Methods（DOI 10.1038/s41563-026-02712-5）；补充信息只核对正文引用的位置，未声称逐页审阅 SI。

- `#foundations`、`#pointer-lab`、`teaching.js`（中英文）：新增教学连接计数图，依据 Structural characterization 与 Fig. 4f。ZIF-12 改性前 CN=4、连接度=4；gphen₁.₃₃ZIF-12 平均模型有三个 bim N、同一 phen 的两个 N，CN=5；两个 bim 桥联、一个端基，连接度=2。约 0.33 当量 phen 不结合，图中省略但文字标明。不是原子坐标或键角，不能套用到含混合配位环境的 ZIF-62(Co)。
- `#core`：406→300 °C 的加工温度比较 → 400→300 °C（Magnetic properties 中实际比较玻璃的制备温度）；406 °C 保留为 pristine ZIF-62(Co) 熔点（Thermal behaviour）。
- `#thermal`：Zn 样品完全非晶 → 保留少量 ZIF-zni 晶相（Thermal behaviour 冷却后描述）。
- `#thermal` 温度条形图：Tg Co 312→206 °C、Zn 314→184 °C，统一 0–350 °C 量尺。来源 Thermal behaviour 与 Fig. 2；不是峰值加工温度。
- `#thermal` 吸附条形图：同一 Co-ZIF-62 系列、195 K/100 kPa，晶体 4.72、未改性玻璃 2.42、phen 玻璃 0.37 mmol/g，统一 0–5 量尺。来源 Porosity and mechanical properties；正文引 Supplementary Figs. 129–131，本页数值取正文，未估读图。
- `#mechanism` / `page.js`（中英文）：Zn 稳定机制的确定陈述 → 明确为作者提出的异质性/可访问构型解释；来源 Structural characterization 最后一段。
- `#properties`：保留 7.2(2)、8.6(2) GPa 的原文不确定度与硬度/断裂韧性区别；不把模量提高称为韧性提高（Porosity and mechanical properties / Fig. 5a）。
- `terms.json` 与 `terms-data.js`：新增术语、单位和测量含义；解释性背景不作为新增实验结果。
- 交互检查：中英文、三视口、两种结构状态×四个 pointer、Co/Zn/Ni 面板、术语弹窗键盘关闭与焦点恢复通过；浏览器补充扫描 0 failure，英文参考文献提示为正常引用。
