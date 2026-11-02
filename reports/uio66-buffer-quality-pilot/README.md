# UiO-66 buffer explainer: local quality pilot

本轮仅精修 `papers/uio66-buffer-stability/`，未提交、推送或发布。标准仍是待用户评价的草案，尚未写入 Skill。

- [第二轮：逐项反馈、科学核验、讲解与技术审查](feedback-round2.md)
- [第二轮方法交互检查](round2/feedback-check.json)
- [改写前具体问题](audit-before.md)
- [可复用验收标准草案与试读任务](standard-draft.md)
- [分别记录科学、讲解和技术审查](review-after.md)
- [技术结果](technical-check.json)

本地预览：http://127.0.0.1:8876/papers/uio66-buffer-stability/ 。英文加 `?lang=en`。如果服务已停止，从仓库根目录运行 `python3 -m http.server 8876 --bind 127.0.0.1`。

复查脚本从仓库根目录执行，Playwright用 `PAPER_PLAYWRIGHT_MODULE` 指向可用安装：`node reports/uio66-buffer-quality-pilot/check-pilot.cjs` 和 `node reports/uio66-buffer-quality-pilot/check-reading.cjs`。两者需要上面的本地服务。默认完整静态检查：`python3 .agents/skills/paper-webpage/scripts/check_page.py --root . --slug uio66-buffer-stability`。

before-*.png保存原页；after-*.png是宽度/语言/层次矩阵；section-*.png是长元素截图，可能包含吸顶栏捕获伪影；viewport-*.png与final-hero-*.png为正常阅读视口，用于实际布局复核。查看了手机英文证据推理、手机中文比较、平板中文方法及桌面英文机制等代表图。截图和自动检查不构成学习效果测试。

第二轮新增专项：`node reports/uio66-buffer-quality-pilot/check-feedback.cjs`，运行环境同上；截图与结果在 `round2/`。第一轮报告保留为历史，本轮结论以 `feedback-round2.md` 为准。
