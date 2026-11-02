window.DISCOVERY_DATA = {
  "steps": [
    {
      "number": "98 → 56",
      "title": [
        "先筛计算规模",
        "Restrict the computational size"
      ],
      "text": [
        "WS24 的 98 个相应标签结构中，56 个满足原胞少于 600 个原子的限制。这个规模条件用于控制后续计算成本，不是水稳定性的额外实验。",
        "Of 98 entries with the relevant WS24 label, 56 have primitive cells below 600 atoms. This size restriction controls computational cost; it is not another stability experiment."
      ],
      "limit": [
        "不能把超过原子数限制的结构归为不稳定。",
        "Structures above the atom-count cutoff cannot be labelled unstable."
      ],
      "source": "Main §2.1; SI §1"
    },
    {
      "number": "4 + 13 + 39",
      "title": [
        "按可修饰位置分组",
        "Group by functionalization sites"
      ],
      "text": [
        "56 个母体中，4 个不可修饰、13 个可单修饰、39 个可双修饰。在 sp² C–H 上替换；双修饰按图距离等规则选位，旋转基团以减少原子重叠。",
        "Among 56 parents, four cannot be functionalized, 13 allow monofunctionalization and 39 allow difunctionalization. Substitution targets sp² C–H sites; graph-distance rules choose paired sites and group rotation reduces atomic overlap."
      ],
      "limit": [
        "这是生成候选结构的规则，不是证明所有修饰结构都可合成。",
        "These are candidate-generation rules, rather than proof that every derivative is synthesizable."
      ],
      "source": "Main §2.1; SI Figs. S1–S3"
    },
    {
      "number": "1,148 → 900",
      "title": [
        "删除几何碰撞的候选",
        "Remove overlapping candidates"
      ],
      "text": [
        "12 种官能团的组合给出 1,148 个初始结构；248 个因原子重叠被移除，留下 900 个，即 56 个母体和 844 个衍生物。",
        "Combinations of 12 groups yield 1,148 initial structures. Removing 248 with atomic overlaps leaves 900: 56 parents and 844 derivatives."
      ],
      "limit": [
        "几何筛查不能替代合成、化学稳定性与孔道可接近性的实验。",
        "Geometry filtering does not replace experiments on synthesis, chemical stability or pore access."
      ],
      "source": "Main §2.1; Fig. 1; SI §1"
    },
    {
      "number": "900 → 736",
      "title": [
        "只用收敛吸附量训练",
        "Train only on converged uptake"
      ],
      "text": [
        "在限定计算时间内，736 个 GCMC 结果满足收敛判据：45 个母体与 691 个修饰结构。164 个未收敛结果被排除。",
        "Within the time limit, 736 GCMC calculations meet the convergence criterion: 45 parents and 691 derivatives. The 164 nonconverged cases are excluded."
      ],
      "limit": [
        "未收敛代表该计算未提供可靠标签，不等于零吸附、孔塌陷或实验失败。",
        "Nonconvergence means no reliable label from that calculation, rather than zero uptake, pore collapse or experimental failure."
      ],
      "source": "Main §2.2; SI Figs. S4–S6"
    }
  ],
  "models": [
    "RFR",
    "GBR",
    "KRR (Laplace)",
    "KRR (RBF)",
    "MLP (RFA)",
    "MLP (162)"
  ],
  "splits": [
    {
      "title": [
        "随机划分：相近结构可跨两侧",
        "Random split: related derivatives can span both sets"
      ],
      "meaning": [
        "检验同一总体中留出的结构，母体与官能团家族可能已在训练集中出现。",
        "Tests held-out structures from the same overall population; their parent and group families can already occur in training."
      ],
      "mae": [
        48,
        56,
        45,
        59,
        60,
        69
      ],
      "r": [
        0.94,
        0.93,
        0.95,
        0.92,
        0.93,
        0.91
      ],
      "caution": [
        "该划分最低 MAE 是 Laplace KRR 的 45；不能据此声称 MLP 在每种指标上最好。",
        "Laplace KRR has the lowest MAE here, 45; MLP is not best on every metric."
      ]
    },
    {
      "title": [
        "官能团划分：未知修饰，已见母体",
        "Functional-group split: unseen groups, familiar parents"
      ],
      "meaning": [
        "按官能团家族分组；考察未见过的修饰。母体 MOF 仍可能与训练集共享。",
        "Groups are separated by functional-group family to test unseen modifications. Parent MOFs may still be shared with training."
      ],
      "mae": [
        81,
        72,
        66,
        78,
        59,
        78
      ],
      "r": [
        0.89,
        0.91,
        0.92,
        0.9,
        0.94,
        0.9
      ],
      "caution": [
        "MLP（RFA）MAE 59、r = 0.94；这是作者选择用于后续筛选的配置，不表示对陌生骨架已同样可靠。",
        "MLP (RFA) gives MAE 59 and r = 0.94. This is the chosen screening configuration, rather than proof of equal reliability on new frameworks."
      ]
    },
    {
      "title": [
        "母体划分：未知骨架及其衍生物",
        "Base-MOF split: unseen parents and their derivatives"
      ],
      "meaning": [
        "同一母体及其衍生物留在同一侧，更接近对新骨架、节点或连接体环境的迁移。",
        "A parent and its derivatives stay together, closer to transfer to new frameworks, nodes or linker environments."
      ],
      "mae": [
        135,
        129,
        123,
        117,
        128,
        273
      ],
      "r": [
        0.73,
        0.73,
        0.75,
        0.78,
        0.77,
        0.06
      ],
      "caution": [
        "误差普遍增大；RBF KRR 为 117，MLP（RFA）128，全部特征 MLP 为 273。未见化学环境（如 ZULNAX）是主要外推困难。",
        "Errors generally increase: RBF KRR gives 117, MLP (RFA) 128 and all-feature MLP 273. Unseen chemical environments, illustrated by ZULNAX, challenge extrapolation."
      ]
    }
  ],
  "uq": [
    {
      "title": [
        "不限制潜空间距离",
        "No latent-distance rejection"
      ],
      "retention": 100,
      "mae": 59.3,
      "note": [
        "保留整个测试集。这个 MAE 不是所有数据库候选的已知误差。",
        "The entire test set is retained. This MAE is not the known error on every database candidate."
      ]
    },
    {
      "title": [
        "使用论文报告阈值 LSD ≤ 0.21",
        "Use the reported LSD ≤ 0.21 cutoff"
      ],
      "retention": 50,
      "mae": 43.6,
      "note": [
        "保留约一半测试样本，另一半被拒绝。覆盖范围与准确性必须一起报告。",
        "About half the test set is retained and the rest rejected. Report coverage together with accuracy."
      ]
    }
  ],
  "databases": [
    "BW-DB",
    "hMOF",
    "ToBaCCo",
    "US-MOF",
    "CoRE"
  ],
  "stages": [
    {
      "title": [
        "初始候选集",
        "Initial candidate pool"
      ],
      "definition": [
        "四个假想结构库加 CoRE；按 SI 表 S16 的清理后口径。",
        "Four hypothetical-structure databases plus CoRE, using the cleaned scope in SI Table S16."
      ],
      "rows": [
        324300,
        137941,
        13513,
        54132,
        8342
      ],
      "source": "SI Table S16"
    },
    {
      "title": [
        "预测水稳定概率 ≥0.7",
        "Predicted stability probability ≥0.7"
      ],
      "definition": [
        "已有稳定性分类器的输出；仍需真实水相实验。",
        "Output from the existing stability classifier; aqueous experiments remain necessary."
      ],
      "rows": [
        64117,
        10066,
        2167,
        12916,
        2917
      ],
      "source": "SI Tables S16, S18"
    },
    {
      "title": [
        "通过潜空间距离筛查",
        "Pass the latent-distance screen"
      ],
      "definition": [
        "在预测稳定结构中保留水吸附模型适用范围内的预测。",
        "Among predicted stable structures, retain uptake predictions within the model’s distance criterion."
      ],
      "rows": [
        4843,
        264,
        4,
        326,
        390
      ],
      "source": "SI Table S18"
    },
    {
      "title": [
        "预测高吸水：>639 cm³(STP) cm⁻³",
        "Predicted high uptake: >639 cm³(STP) cm⁻³"
      ],
      "definition": [
        "继续要求预测水吸附量高于训练数据均值加一个标准差。",
        "Also require predicted uptake above the training mean plus one standard deviation."
      ],
      "rows": [
        28,
        36,
        0,
        1,
        9
      ],
      "source": "SI Table S18"
    }
  ],
  "candidates": [
    {
      "name": "EHODOV",
      "metal": "In",
      "database": "CoRE",
      "ml": 653,
      "gcmc": 839
    },
    {
      "name": "WOJZOM",
      "metal": "Sm",
      "database": "CoRE",
      "ml": 653,
      "gcmc": 715
    },
    {
      "name": "MOF_6003944",
      "metal": "V",
      "database": "hMOF",
      "ml": 662,
      "gcmc": 698
    },
    {
      "name": "MOF_13909",
      "metal": "Zn",
      "database": "hMOF",
      "ml": 659,
      "gcmc": 754
    }
  ]
};
