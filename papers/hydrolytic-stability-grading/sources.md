# Evidence ledger

## Final batch verification

Catalogue integrated on 2026-11-02. Complete article/SI review and page-specific scientific QA are recorded below. Final production checks pass: all 43 pages pass the full static checker and browser regression (3,649 interaction actions); catalogue, taxonomy and production bibliography checks also pass. Earlier draft/pending notes describe development stages and are superseded by this verification. Deployment is verified against the final pushed commit in GitHub Pages build history.

## Source and reading scope

Benjamin S. Gelfand and George K. H. Shimizu, “Parameterizing and grading hydrolytic stability in metal–organic frameworks,” Dalton Transactions 45, 3668–3678 (2016), [DOI](https://doi.org/10.1039/C5DT04049C).

Complete scientific text, tables and figure captions read through the publisher HTML. The 12-page publisher PDF (cover plus 11 article pages) was downloaded to `/tmp/mof-ree-sources/hydrolytic-stability-grading.pdf`; PDF pages 7–8 were rendered and viewed to check the exposure and category tables. The publisher’s Supplementary data section lists an author-manuscript alternative, with no independent scientific SI or appendix. It is not described as an unread SI.

The PDF title page verifies both authors at the Department of Chemistry, University of Calgary, Calgary, Alberta T2N 1N4, Canada. Received 16 October 2015; accepted and first published 27 November 2015. The 2016 issue year differs from first online publication.

## Claims and interactive mappings

- Core: §§1–2, 4–5. Exposure conditions, assessment and duration must remain explicit; the proposal is not a universal quantitative ranking.
- Exposure cards and selector: Table 2 and §5.5. Levels 1–6 are respectively 20 °C/20% RH; 25 °C/50% RH; 50 °C/50% RH; water immersion (room temperature in §5.5); 80 °C/90% RH; boiling water. No continuous severity model or implication that passing a level proves all lower levels is supplied.
- Outcome cards and builder: Table 3. A retains crystallinity/porosity; B retains some porosity while order is lost; C retains some order while porosity is lost; D loses both. No numerical retained/lost cutoff is invented. Missing or uncertain measurements produce “?” as an explicitly identified teaching marker, not a fifth proposed category.
- Duration, repeat exposure and activation: §5.5. The authors suggest 24 h as an initial exposure, followed by further exposure to distinguish plateau from continuing deterioration. The tool’s 0.1–100,000 h input constraint is a UI limit, not a paper recommendation. Presets are teaching scenarios without material identities.
- Complementary measurements: §§4.1–4.4. Partial dissolution may leave a crystalline residue; PXRD and gas adsorption have different sensitivities. Probe gas, temperature, activation and functional performance remain relevant. Do not infer absence of dissolution from peaks alone.
- Time example: §§3.2, 5.1, 6.3 and 6.6. Reviewed CALF-28 batches begin around 700–800 m²/g, decline to about 500 after 24 h at 80 °C/90% RH, then plateau within the reported tests. MIL-53(Al) develops a growing gamma-AlO(OH) surface layer in boiling water. These are cases summarized by this perspective, not new experiments.
- REE connection: §5.2 separately proposes 50 mM potassium phosphate buffer, pH 7, 37 °C for biological tests. This article supplies no REE capacity or selectivity; additional REE-solution conditions and leaching measurements are the explainer’s methodological connection.

## Source inconsistencies and scope choices

§5.2 gives 20 °C/50% RH for mild conditions, whereas Table 2 and §5.5 give 25 °C/50% RH. The page explicitly follows Table 2. Some case labels do not consistently match Table 2–3 definitions (including CALF-25 boiling-water 4D, DMOF humidity labels and ZIF-8 labels without sorption evidence). They are not used as the interactive answer key. The page retains qualitative limits rather than correcting source experiments or inventing missing results.

## Verification

`check_page.py --page-only` and JS syntax checks pass. `/tmp/grading-qa.cjs` covers 1440/768/390 px, both languages, every section, A–D and missing evidence, six exposure levels, invalid/empty duration, presets, state preservation, direct English/reload, native-select keyboard typeahead and Space/Enter on details. No overflow or console errors. Representative desktop, tablet and mobile screenshots saved in `reports/mof-ree-qa/grading-*` and viewed. Native popup arrow selection is not asserted by the headless Mac test; typeahead changes selection and rendered output.

Shared author/date byline remains pending proper catalog metadata integration. Final catalog and publication checks are still required.

Publisher PDF SHA-256: `bea360b1b403fe4d30f5cebd0bf96aec52aec5bfea29d440c831a63342e36566`.

## High-school teaching revision — 2026-11-02

P1, background/terminology: the original exposure cards used RH and the matrix used crystallinity/porosity before explaining their measurement. The builder is retained and introduced through a three-step reporting rationale.

New method guide: Source: Main Tables 2–3; §§3–5.5.

New evidence comparison: Source: Main Table 3; §5.5. Hypothetical examples, not new experimental records.

Rechecked main §§3–5.5 and Tables 2–3. A/B/C/D mapping and missing-evidence logic are preserved. The publisher lists no independent scientific SI. Added examples are explicitly hypothetical, with no numerical severity or lifetime conversion.

Reader task: Check: why is PXRD alone insufficient for 6A? 6 only identifies boiling-water exposure. A additionally requires retained order and porosity; without the pore measurement the letter lacks evidence. Duration must still be reported.

Scientific observations, author explanations and teaching calculations remain distinct. Existing datasets are unchanged; no unverified atomic structure is drawn. The technical and teaching audits are recorded separately in [the rollout](../../reports/quality-rollout/README.md). Human comprehension has not been tested.

## Audit 2026-11-03

Second-pass content audit of the site-wide explainer review (`reports/explainer-audit/content-findings.md`). Each correction cites its source location; claims not listed were rechecked and left unchanged.

- Ledger locator: the phosphate-buffer proposal is in §5.2 “Nature of water treatments” (p. 3673), not §5.5. Page text unchanged.
