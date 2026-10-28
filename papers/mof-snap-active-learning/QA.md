# Verification record — 2026-10-28

Scientific evidence and interpretation are documented independently in [sources.md](sources.md). No DFT, SNAP fitting or molecular simulation was rerun for this page.

## Executed checks

- Page static checker: **PASS**, zero warnings. Metadata, local assets, catalogue link, duplicate IDs and inline JavaScript syntax checked.
- Shared JavaScript syntax: `node --check assets/paper.js` **PASS**.
- Final `node scripts/check-explainers.cjs`: **PASS** all **12 pages / 1403 interaction cases**, including Chinese/English, interaction-state and scroll retention, direct/stored language selection, denied storage and 1440 / 768 / 390 px layouts.
- `node scripts/check-catalog.cjs`: **PASS**, including catalogue counts, searches/filter combinations, refresh and failure recovery, immutable creation-time ordering and bilingual layouts.
- Independent page-specific browser checks: **158/158 PASS**, zero unexpected runtime/resource errors; [machine-readable report](qa/interaction-report.json).
- All nine SI Table 1 rows, seven workflow states and 87 bond-length/resolution combinations were compared with independent expectations. The candidate bin remains visible throughout the input range.
- Every original figure decoded and matched its selected number, image, alternative text, description and source, in both languages. Delayed/rapid switching ignored stale requests; forced failure hid stale imagery and retry recovered.
- Expanded details remained within all three viewport widths. Section anchors cleared the sticky header. Language switches preserved control values, details, focus, scroll and video time.
- Browser-compatible video decoded at 776 × 742, duration 19 s. Playback and seeking passed using an HTTP server with byte-range support. At approximately 9.61 s, the playhead remained unchanged across a language round trip. The original supplied bytes are preserved separately.
- Original PDF/video hashes and eight source-figure crops were independently checked. Source structure images retain their aspect ratios and full relevant panels.
- Scoped PDF Git attributes preserve binary originals; `git diff --check` passed for the staged change.

The initial plain Python HTTP server does not support byte-range requests, so browser seeking under that server clamps to zero. The video was therefore checked with a range-capable server; this was a local serving limitation, not a source-video defect.

## Representative screenshots

- [1440 px Chinese overview](qa/desktop-zh.png)
- [390 px English overview](qa/mobile-en.png)
- [CBAD teaching interaction, Chinese](qa/cbad-zh.png)
- [Original figure reader and movie, English](qa/figures-en.png)

Additional full-page screenshots, both languages at all three widths, and scripts/logs were retained in the task's `/tmp/paper-1427/` QA directories. These automated and visual checks establish the tested behavior; they do not substitute for the separate scientific source audit.

## Publication

This content is prepared on an isolated branch based on the current `origin/main`, including the concurrently published MOFTransformer page. Both catalogue entries and README links were preserved when integrating the two changes. The original working directory's unrelated edits are excluded. First-publication date is 2026-10-28; immutable creation and modification timestamps are generated after the content commit using the repository's existing script. The final Pages build, deployed text/assets, catalogue entry and recent-list position are checked after pushing; the live status is reported in the chat.
