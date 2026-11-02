window.KINETIC_DATA = {
  "gases": [
    {
      "title": [
        "H₂O：吸水量和循环稳定性分开测",
        "H₂O: measure uptake and cycling separately"
      ],
      "chemistry": [
        "水可以配位、促进水解，也可能通过毛细作用导致孔坍塌。孔径与亲水性决定吸水台阶位置；液态水与水蒸气耐受并不相同。",
        "Water can coordinate, promote hydrolysis or cause capillary collapse. Pore size and hydrophilicity influence filling steps; liquid-water and vapour stability differ."
      ],
      "example": [
        "综述报告 CAU-10/粘结剂热交换器涂层在 10000 次水循环后容量损失很小。该数值属于特定涂层和工况，不是所有铝 MOF 的统一寿命。",
        "The review reports negligible capacity loss for a CAU-10/binder heat-exchanger coating after 10,000 water cycles. This is a particular coating and protocol, rather than a lifetime for all Al MOFs."
      ],
      "limit": [
        "吸水多，不证明吸脱水后孔隙仍完整。台阶湿度、工作容量、滞后和再生也要检查。",
        "High uptake does not establish intact pores after cycling. Check filling humidity, working capacity, hysteresis and regeneration."
      ],
      "source": "H₂O section, pp. 712–715; Figs. 3–4; Table 1"
    },
    {
      "title": [
        "NH₃：强亲和力可能伴随结构反应",
        "NH₃: strong affinity can accompany framework reaction"
      ],
      "chemistry": [
        "NH₃ 可强配位于开放金属位点，并引起配体置换。水存在时，反应环境也会改变。",
        "NH₃ binds strongly at open metal sites and can displace ligands. Water also changes the reaction environment."
      ],
      "example": [
        "HKUST-1 虽有较高静态容量，综述报告其暴露 NH₃ 后不到 2 h 失去结晶性。含水与无水条件下的分解产物也不同。",
        "HKUST-1 has high static capacity, yet the review reports loss of crystallinity in under 2 h of NH₃ exposure. Products differ between humid and anhydrous conditions."
      ],
      "limit": [
        "突破容量、等温线容量、暴露时间和可逆性分别报告。此处的不到 2 h 不被外推到所有 NH₃ 浓度。",
        "Report breakthrough uptake, isotherm capacity, exposure time and reversibility separately. The under-2-h observation is not extrapolated to every concentration."
      ],
      "source": "NH₃ section, pp. 715–716; Fig. 5; Tables 2–3"
    },
    {
      "title": [
        "H₂S：配位、质子化与硫化物驱动",
        "H₂S: coordination, protonation and sulfide formation"
      ],
      "chemistry": [
        "除与金属配位外，H₂S 还可能使连接体质子化，并形成含硫金属产物。单纯增加结合亲和力未必保护框架。",
        "Alongside coordination, H₂S can protonate linkers and form metal sulfur-containing products. Increasing affinity does not necessarily preserve a framework."
      ],
      "example": [
        "综述比较 Cr-MIL-53、V-MIL-47 在高至 18 bar H₂S 下的耐受，以及 Fe-MIL-53 在相似条件下的分解。",
        "The review contrasts reported tolerance of Cr-MIL-53 and V-MIL-47 up to 18 bar H₂S with decomposition of Fe-MIL-53 under similar conditions."
      ],
      "limit": [
        "高压暴露证据须与湿度、时间和循环对应，不能直接推出混合天然气中的长期寿命。",
        "High-pressure exposure needs humidity, duration and cycling context; it does not directly establish service in mixed natural gas."
      ],
      "source": "H₂S section, pp. 716–717"
    },
    {
      "title": [
        "SO₂：湿度可能开启新的降解路径",
        "SO₂: humidity can enable new degradation routes"
      ],
      "chemistry": [
        "水、SO₂ 与氧气的组合可带来酸性含硫产物，促进连接体质子化和水解。干气耐受与湿气耐受可能差别很大。",
        "Water, SO₂ and oxygen can produce acidic sulfur species, promoting linker protonation and hydrolysis. Dry- and humid-gas stability can differ substantially."
      ],
      "example": [
        "ZIF-8 在 20 ppm SO₂、85% RH 下暴露 10 天，综述报告表面积降低约 70%。因此耐纯水或干 SO₂ 不能代替湿酸气测试。",
        "For ZIF-8 exposed to 20 ppm SO₂ at 85% RH for 10 days, the review reports about 70% loss of surface area. Water or dry-SO₂ tolerance cannot replace humid acid-gas tests."
      ],
      "limit": [
        "这里比较的是特定暴露后的表面积，不是 70% 的金属浸出或直接测得的断键比例。",
        "The number describes post-exposure surface area, rather than 70% metal leaching or a measured fraction of broken bonds."
      ],
      "source": "SO₂ section, pp. 718–719; Tables 4–5"
    },
    {
      "title": [
        "NOₓ：捕集过程也可能改变连接体",
        "NOₓ: capture can alter the linker"
      ],
      "chemistry": [
        "NO 与 NO₂ 的反应性和可逆性不同；NO₂ 可引发氧化还原及官能团反应。高去除量可能包含不可逆化学转化。",
        "NO and NO₂ differ in reactivity and reversibility. NO₂ can initiate redox and functional-group reactions, so removal can include irreversible conversion."
      ],
      "example": [
        "综述报告 UiO-66-NH₂ 捕集 NO₂ 时涉及氨基与芳环反应；MFM-300 则报告可逆 NO₂ 捕集并在 5 次循环中维持容量和结晶性。",
        "The review describes amine/aromatic reactions during NO₂ capture by UiO-66-NH₂, whereas MFM-300 exhibits reversible capture with capacity/crystallinity retained over five cycles."
      ],
      "limit": [
        "MFM-300 的湿态突破后详细材料分析未在该讨论中给出；不能将干态循环结论自动扩展到湿态长期完整性。",
        "Detailed post-humid-breakthrough material analysis is not given in that discussion. Dry cycling does not establish long-term wet-state integrity."
      ],
      "source": "NOₓ section, pp. 719–720"
    },
    {
      "title": [
        "Cl₂ / Br₂：区分消耗性反应与可逆氧化还原",
        "Cl₂ / Br₂: distinguish consumptive and reversible redox capture"
      ],
      "chemistry": [
        "芳环卤化可消耗材料；合适的金属氧化还原与配位变化，也能提供另一种捕集–释放路径。",
        "Aromatic halogenation can consume the material. Suitable metal redox and coordination changes can provide a separate capture–release route."
      ],
      "example": [
        "Co₂Cl₂BTDD 氧化生成 Co₂Cl₂X₂BTDD（X = Cl 或 Br），加热后还原释放 X₂。综述报告 Br₂ 捕集–释放 3 次循环。",
        "Co₂Cl₂BTDD oxidizes to Co₂Cl₂X₂BTDD (X = Cl or Br); heating releases X₂ reductively. The review reports three Br₂ capture–release cycles."
      ],
      "limit": [
        "能捕获卤素不等于保持原有氧化态；可逆性必须由释放和结构恢复共同验证。",
        "Capture does not require an unchanged oxidation state. Release and structural recovery jointly test reversibility."
      ],
      "source": "Halogens section, pp. 720–721; Fig. 6"
    }
  ],
  "rows": [
    {
      "name": "HKUST-1",
      "values": [
        12.1,
        6.76,
        10.12
      ]
    },
    {
      "name": "Co₂Cl₂BTDD",
      "values": [
        12,
        4.75,
        3.37
      ]
    },
    {
      "name": "Co₂Cl₂BBTA",
      "values": [
        17.95,
        8.53,
        4.34
      ]
    },
    {
      "name": "Cu₂Cl₂BTDD",
      "values": [
        16.74,
        7.52,
        5.73
      ]
    }
  ]
};
