window.DESIGN_DATA = {
  "strategies": [
    {
      "title": [
        "选择耐水的配位单元",
        "Choose water-resistant coordination units"
      ],
      "input": [
        "选择合适的金属、供体基团与节点连接方式。",
        "Choose suitable metals, donor groups and node connectivity."
      ],
      "effect": [
        "匹配的配位化学可稳定骨架；高连接节点能提供多个结构约束。",
        "Compatible coordination chemistry stabilizes the framework; highly connected nodes provide multiple constraints."
      ],
      "test": [
        "核对竞争配体、局部缺陷与金属/连接体释放，而不只看同名材料。",
        "Test competing ligands, local defects and metal/linker release for the actual sample."
      ],
      "limit": [
        "HSAB 是设计线索，不是免测试的稳定性判定公式。金属价态之外，配位结构和反应动力学同样重要。",
        "HSAB is a design heuristic, rather than a substitute for testing. Coordination geometry and substitution kinetics matter alongside metal valence."
      ],
      "examples": [
        [
          "UiO-66",
          "表 1 汇总：pH 0–12 水溶液，2 个月；原始研究编号 87。该条件属于被引研究，不是对所有 UiO-66 的保证。",
          "Table 1 reports pH 0–12 aqueous solutions for 2 months (review ref. 87). These conditions belong to the cited study, rather than every UiO-66 sample."
        ],
        [
          "MIL-101(Cr)",
          "表 1 汇总：pH 0–12 水溶液，2 个月；原始研究编号 76。应另查功能化以后是否仍保留同样表现。",
          "Table 1 reports pH 0–12 solutions for 2 months (ref. 76). Functionalization requires renewed testing."
        ]
      ],
      "source": "§§2.2, 2.4.1; Table 1; Figs. 1–7"
    },
    {
      "title": [
        "用含氮连接体改变配位化学",
        "Change coordination chemistry with N-donor linkers"
      ],
      "input": [
        "选择咪唑、吡唑等供体，并匹配金属与配位构型。",
        "Select donors such as imidazolates or pyrazolates and match the metal and coordination environment."
      ],
      "effect": [
        "稳定的金属–氮连接及节点周围的局部环境，可以形成耐水结构。",
        "Stable metal–nitrogen connections and local node environments can support water resistance."
      ],
      "test": [
        "分别考察水、酸、碱及温度；沸水耐受不等于强酸耐受。",
        "Test water, acids, bases and temperature separately; boiling-water tolerance does not establish strong-acid tolerance."
      ],
      "limit": [
        "综述把若干低价金属/N 连接体系归于软金属/软配体路线。这里保留具体材料证据，不把所有低价金属一概视作软酸。",
        "The review groups several low-valent metal/N-donor systems as a soft-metal/soft-ligand route. This page retains material-specific evidence without classifying all low-valent ions as soft acids."
      ],
      "examples": [
        [
          "ZIF-8 / MAF-4",
          "表 1：沸水 7 天，原始研究编号 114、115。此处没有把它换算成任意酸性水相中的寿命。",
          "Table 1: boiling water for 7 days, refs. 114/115. This is not converted into a lifetime in acidic aqueous feeds."
        ],
        [
          "Ni₃(BTP)₂",
          "表 1 与 §2.4.2：沸水及 pH 2–14 的沸腾水溶液，2 周；原始研究编号 128。",
          "Table 1 and §2.4.2: boiling water and boiling aqueous solutions across pH 2–14 for 2 weeks, ref. 128."
        ]
      ],
      "source": "§2.4.2; Table 1; Figs. 8–12"
    },
    {
      "title": [
        "调节孔、刚性和连接性",
        "Adjust pores, rigidity and connectivity"
      ],
      "input": [
        "互穿、孔空间分隔、刚性连接体、配体电荷调整或金属置换。",
        "Interpenetration, pore-space partition, rigid linkers, ligand-charge changes or metal metathesis."
      ],
      "effect": [
        "更多约束、更小孔或不同配位连接可提高抗变化能力；这些改动常同时改变多种性质。",
        "Additional constraints, smaller pores or different coordination connections can resist change; multiple properties often change together."
      ],
      "test": [
        "同时测孔隙、目标物传质及改性前后的稳定性，检验是否牺牲可用孔体积。",
        "Measure porosity, target transport and stability before/after modification to identify loss of accessible pore volume."
      ],
      "limit": [
        "结构刚性可以影响能量与反应路径；孔工程不能统一等同于已测得的热力学稳定性提高。",
        "Rigidity can influence energies and reaction paths. Pore engineering is not itself a measurement of improved thermodynamic stability."
      ],
      "examples": [
        [
          "FJU-90",
          "§2.4.3.2：用 Tripp 分隔 FJU-88 的孔并增加连接；新结构在水中 1 天或空气中 1 个月后仍可保持。原始研究编号 154。",
          "§2.4.3.2: Tripp partitions FJU-88 pores and adds connections; the resulting framework persists after 1 day in water or 1 month in air (ref. 154)."
        ],
        [
          "PCN-426-Cr",
          "§2.4.3.5：Mg 节点经金属置换并氧化为 Cr 体系后，报告耐 4 M HCl 及 pH 12 碱液。此处不补写该段未列的时长。",
          "§2.4.3.5: metal exchange and oxidation convert Mg nodes to a Cr system reported stable in 4 M HCl and at pH 12. No exposure duration is added where the section does not specify one."
        ]
      ],
      "source": "§2.4.3; Figs. 13–17"
    },
    {
      "title": [
        "阻碍水接近易变位点",
        "Restrict water access to labile sites"
      ],
      "input": [
        "在连接体、节点或颗粒表面引入疏水基团与保护层。",
        "Introduce hydrophobic groups or protective layers on linkers, nodes or particle surfaces."
      ],
      "effect": [
        "减少水接触或进入，或在敏感位点附近形成位阻，从而延缓水解过程。",
        "Reduce contact or entry, or sterically shield sensitive sites, to delay hydrolysis."
      ],
      "test": [
        "检验涂层完整性、孔道通行和质量归一化；湿气、浸水与解吸液须分别测试。",
        "Check coating integrity, pore access and mass normalization; test humidity, immersion and stripping solutions separately."
      ],
      "limit": [
        "疏水保护可能同时降低目标物可接近性。表面接触角、结晶性和实际分离性能需要分别测量。",
        "Hydrophobic protection may reduce target access. Surface contact angle, crystallinity and separation performance are separate measurements."
      ],
      "examples": [
        [
          "NH₂-UiO-66(Zr)-shp",
          "§2.4.4.2：苯基硅烷后修饰后，报告在 0.1 M NaOH 中至少 5 h 的耐受；原始研究编号 169。",
          "§2.4.4.2: phenylsilane post-modification gives reported resistance in 0.1 M NaOH for at least 5 h, ref. 169."
        ],
        [
          "PN@MOF-5",
          "§3.4.1：聚萘修饰样品在 40% RH 暴露 40 h 后保留结晶性与孔隙；这是湿空气条件，不是液态水浸泡。",
          "§3.4.1: polynaphthylene modification retains crystallinity and porosity after 40 h at 40% RH. This is humid-air exposure, rather than liquid-water immersion."
        ]
      ],
      "source": "§2.4.4; §3.4.1; Figs. 18–24, 36"
    }
  ],
  "scenarios": [
    {
      "title": [
        "烟气：在 CO₂ 低分压下捕集",
        "Flue gas: capture at low CO₂ partial pressure"
      ],
      "context": [
        "综述以约 15% CO₂ 的烟气为应用背景，同时讨论水竞争。下列容量取自 0.15 bar CO₂、298 K 的吸附数据。",
        "The review discusses flue gas with about 15% CO₂ and competing water. The capacities below use CO₂ at 0.15 bar and 298 K."
      ],
      "basis": [
        "容量条件：CO₂ 0.15 bar，298 K；单位 mmol g⁻¹；固定量尺 0–2.5。",
        "Capacity basis: CO₂ 0.15 bar, 298 K; mmol g⁻¹; fixed axis 0–2.5."
      ],
      "caution": [
        "这是等温线容量，不是同一湿烟气突破实验。表中“耐水”描述也不是这三个样品在同一进料下的统一测试。",
        "These are isotherm capacities, rather than one common humid-flue-gas breakthrough test. Water-resistance labels also come from different protocols."
      ],
      "rows": [
        [
          "UiO-66",
          0.37
        ],
        [
          "UiO-66-(OH)₂",
          1.92
        ],
        [
          "FJI-H14",
          2.3
        ]
      ],
      "max": 2.5,
      "source": "Table 2; §3.4.1"
    },
    {
      "title": [
        "空气：需要痕量区间的亲和力",
        "Air: affinity in the trace regime"
      ],
      "context": [
        "综述用约 400 ppm 讨论痕量捕集。这里沿用历史测试浓度，不把它当作今日实时大气浓度。表 3 脚注 a 标明所选三项为 400 ppm。",
        "The review discusses trace capture around 400 ppm. This is the historical test concentration, rather than a current atmospheric reading. Table 3 footnote a identifies all three selected entries as 400 ppm."
      ],
      "basis": [
        "容量条件：CO₂ 400 ppm，298 K；单位 mmol g⁻¹；固定量尺 0–1.5。",
        "Capacity basis: CO₂ 400 ppm, 298 K; mmol g⁻¹; fixed axis 0–1.5."
      ],
      "caution": [
        "这些数值不能单独证明在真实空气、水汽和长期再生条件下的净捕集效率。不同材料的水耐受和再生方法仍需单独比较。",
        "These values do not establish net capture from real air with water and prolonged regeneration. Water resistance and regeneration methods still require separate comparison."
      ],
      "rows": [
        [
          "NJU-Bai53",
          0.64
        ],
        [
          "SIFSIX-3-Cu",
          1.24
        ],
        [
          "NbOFFIVE-1-Ni",
          1.3
        ]
      ],
      "max": 1.5,
      "source": "Table 3, footnote a; §3.4.2"
    },
    {
      "title": [
        "天然气净化：容量与分离是两层证据",
        "Natural-gas purification: uptake and separation differ"
      ],
      "context": [
        "综述讨论从 CH₄ 中移除 CO₂。下面比较同构 MUF-16 系列的纯 CO₂ 容量；它们不是 CO₂/CH₄ 混合进料中的工作容量。",
        "The review considers removal of CO₂ from CH₄. Below are pure-CO₂ capacities for the isostructural MUF-16 series, rather than working capacities from CO₂/CH₄ feeds."
      ],
      "basis": [
        "容量条件：纯 CO₂ 1 atm，293 K；单位 mmol g⁻¹；固定量尺 0–2.5。",
        "Capacity basis: pure CO₂ at 1 atm, 293 K; mmol g⁻¹; fixed axis 0–2.5."
      ],
      "caution": [
        "CH₄ 吸附、突破顺序、混合气配比、湿度和循环决定实际净化表现。MUF-16(Ni) 在表 4 为 2.14、正文为 2.13 mmol g⁻¹；图中采用表 4。不要将 1 atm 纯气容量与 0.15 bar 烟气数据直接排名。",
        "CH₄ uptake, breakthrough order, feed ratio, humidity and cycling govern purification. MUF-16(Ni) is 2.14 in Table 4 and 2.13 mmol g⁻¹ in the prose; this chart uses Table 4. Do not rank pure-gas 1 atm data directly against 0.15 bar flue-gas data."
      ],
      "rows": [
        [
          "MUF-16 (Co)",
          2.13
        ],
        [
          "MUF-16 (Ni)",
          2.14
        ],
        [
          "MUF-16 (Mn)",
          2.25
        ]
      ],
      "max": 2.5,
      "source": "Table 4; §3.4.3; Fig. 44"
    }
  ]
};
