# Evidence ledger — functionalized Cr-MIL-101 (2018)

## Final batch verification

Catalogue integrated on 2026-11-02. Complete article/SI review and page-specific scientific QA are recorded below. Final production checks pass: all 43 pages pass the full static checker and browser regression (3,649 interaction actions); catalogue, taxonomy and production bibliography checks also pass. Earlier draft/pending notes describe development stages and are superseded by this verification. Deployment is verified against the final pushed commit in GitHub Pages build history.

Status: local bilingual draft, full scientific text and all SI scientific sections read. Catalog integration and publication pending.

## Sources and identity

- Yu-Ri Lee, Kwangsun Yu, Seenu Ravi, Wha-Seung Ahn. *Selective Adsorption of Rare Earth Elements over Functionalized Cr-MIL-101*. ACS Applied Materials & Interfaces **10**, 23918–23927 (2018). [DOI](https://doi.org/10.1021/acsami.8b07130).
- Full [publisher article](https://pubs.acs.org/aamick/article/10/28/23918/708431/Selective-Adsorption-of-Rare-Earth-Elements-over), accessed with the UCL-enabled Chrome session and saved through ordinary Save Page. All scientific sections read, including the `.block-child-p` paragraphs omitted by an initial paragraph-only text extraction. Those paragraphs contain screening conditions, equations (1)/(2), concentration ranges and pH adjustment; they were separately read in full.
- [Official ACS SI record](https://acs.figshare.com/articles/journal_contribution/Selective_Adsorption_of_Rare_Earth_Elements_over_Functionalized_Cr-MIL-101/6736544); [PDF](https://ndownloader.figshare.com/files/12282365), `am8b07130_si_001.pdf`, 13 pages. Read SI-1–SI-4 and all figure captions; rendered and visually inspected equations on S4/S5 and Figures S1–S7 on S6–S12. S13 contains references. No additional scientific attachment listed in the inspected SI record.
- Main Scheme 1 and Figures 8, 10 and 11 downloaded from observed publisher image links and visually inspected. Original Scheme 1 confirms a linker-NH₂ → amide-coupled PMIDA route, rather than a generic Cr-node-bound PMIDA structure.
- Author order confirmed in main metadata and SI cover. All four authors: Department of Chemistry and Chemical Engineering, Inha University, Incheon, Republic of Korea.
- Publisher history: received 2018-05-02; accepted 2018-06-20; published online 2018-07-03; issue 2018-07-18. Pages confirmed in citation_firstpage/citation_lastpage metadata.

## Claim ledger

- Study scope: main Abstract, Experimental and Results. Five materials; La, Ce, Nd, Sm and Gd tested, detailed Gd pH, isotherm, kinetic, transition-metal competition and regeneration experiments. No complete lanthanide mixture.
- Attachment routes: main Figure 1, Scheme 1, preparation and characterization; SI-1, S2. NH₂ on BDC linker introduced by direct synthesis; PMIDA coupled using DCC; ED/DETA grafted to dehydrated Cr sites. The page uses chemical route descriptions, not an invented atomic structure or coordination geometry.
- BET values: main Table 1. Pristine 3680, NH₂ 1870, ED 2340, DETA 2112, PMIDA 989 m²/g. Pore volume discrepancy between prose (2.08 cm³/g pristine) and Table 1 (2.01) is avoided by not displaying that quantity.
- All 25 uptake values: main Table 2, displayed by ion and material. These are single-ion screening qₑ values, not fitted qₘ. The material order in the page follows pristine/NH₂/ED/DETA/PMIDA; numeric columns are remapped accordingly.
- Screening conditions: main Experimental, `.block-child-p` content. Initial 100 mg/L each in separate solutions; 15 mg in 15 mL; 150 rpm; 6 h; 25 °C; 0.45 μm PET separation; ICP-OES. Table 2’s caption does not separately specify pH, so the page does not assign it the later optimized pH without evidence.
- Mass balance: main equation (1). qₑ=(Cᵢ−Cₑ)V/m with V in L and m in g. V/m=1 L/g is a teaching calculation from the stated experiment. The 100 mg/g ceiling for this feed is not the material saturation capacity.
- Isotherms: main Table 3/Figure 8 and SI-3/Figure S3. Five sets of qₘ,Kᴸ,R²ᴸ,n,Kᶠ,R²ᶠ preserved in data.js. Model lab computes q=qₘKᴸCₑ/(1+KᴸCₑ) and q=KᶠCₑ^(1/n), rather than refitting or digitizing raw points. Cₑ is equilibrium concentration. Fixed Cₑ domain 0–60 mg/L and q range 0–100 mg/g; outputs explicitly labeled model calculations. No new measurements or uncertain experimental points implied.
- Model interpretation: main §3 Isotherms calls the Langmuir fit evidence of monolayer adsorption. The explainer limits that statement: better fit supports this description but does not uniquely establish microscopic site uniformity. This is an explicit teaching assessment of inference strength.
- Kinetics: main Figure 9/Table 5 and SI-4/Figure S4. Approximately 120 min to equilibrium. PFO qₑ,cal86.6, k₁0.046 min⁻¹, R²0.953; PSO qₑ,cal89.3, k₂0.002 g·mg⁻¹·min⁻¹, R²0.994. The article infers chemisorption as rate-limiting; the page marks that as interpretation rather than an independently determined pathway. Method contact times10–240 min and discussion0–6 h are not silently combined into a new sampled time series.
- pH: main Figure 7 and accompanying text; main methods. Tested range2–6; Gd capacity rises strongly between pH3 and5.5. No generalized hydroxide precipitation threshold for all REEs, concentrations and media is presented. Zeta potential SI S2, FTIR SI S5 and mapping SI S6 support group participation without proving a unique coordination number or geometry.
- Selectivity: main Selectivity Tests/Figure10. 50 mg/L each Gd,Al,Fe,Ni,Zn,Co; 15mg/15mL; pH5.5;6h. Approx90% denotes Gd share of adsorbed ion amount. It is not feed recovery, strip-product purity, or adjacent-lanthanide separation. The article does not make the mass-versus-mole normalization explicit enough to convert this into a new numerical composition; no synthetic breakdown of the other bars is created.
- Regeneration: main methods, Figure11, Reusability; SI S7. 0.1M HCl,2h, five cycles. PMIDA capacity declines modestly in the original figure, whereas DETA falls more after the third cycle. No precise cycle values are invented because raw values are not tabulated. FTIR supports retained PMIDA-related bands and weakened DETA bands; no quantitative absence-of-leaching claim is inferred.
- Generalization: one synthetic study and limited cycles; no verified long-term column operation, full Cr/linker mass balance or industrial-feed validation is claimed by the explainer.
- Distinct related page: `../pmida-mil101/` covers Liu et al.2026, DOI10.1021/acsami.6c16452. The 2018 article’s route and datasets remain separate.

## Source inconsistencies and interpretation limits retained

- Abstract/conclusion summarize an overall ranking with PMIDA highest. Table2 actually reports DETA above PMIDA for La39.7vs37.2, Ce52.8vs48.3 and Nd67.5vs63.9mg/g; PMIDA is above DETA for Sm69.1vs68.9 and Gd87.7vs73.6. The interactive ranking follows the table and explicitly exposes this difference in both languages.
- Main text sometimes calls90.0mg/g “measured”, but Table3 identifies it as Langmuir qₘ. The page keeps measured screening87.7 separate from fitted90.0.
- The pH discussion mentions regeneration atpH3, while the method states0.1M HCl. The page uses the explicit method and discloses the difference.
- SI-3’s Freundlich explanation refers to Kᴸ in places where the displayed equation uses Kᶠ. The page follows the equation and Table3. It does not propagate the inconsistent symbol.
- “No loss of functional groups” is stronger than can be quantified from capacity and FTIR alone. The page presents the supporting observations and limits rather than repeating that claim as a proven zero-leaching result.

## Checks

Page-only static and JS syntax pass. Browser checks pass at1440/768/390px, allfive element selections and model endpoints, bilingual preservation of ion/concentration/details, English direct URL and reload, range-arrow and details keyboard, no overflow or console errors. Screenshots of desktop hero, mobile ranking, tablet model and mobile English model viewed. Axis text enlarged after mobile inspection; affected screenshot check repeated separately. Shared metadata remains pending catalog integration.

## Source fingerprints

- `functionalized-cr-mil101.html`: SHA-256 `ac233ee89090be7db28c485b9fb99c8450659fe66b8889d415d26ada91fdae3e`; 2301773 bytes.
- `functionalized-cr-mil101--am8b07130_si_001.pdf`: SHA-256 `61d2f000e8da8842ab21b605c1bf8faaa300374074131066155fbc62b4cf4846`; 1540611 bytes.
