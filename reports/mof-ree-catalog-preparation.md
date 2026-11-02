# MOF / REE catalogue integration

All 28 final primary articles and publisher-listed supporting materials have been read. Their bilingual interactive pages and individual evidence ledgers are complete. Where no independent SI/Appendix is listed, this was checked in the publisher links and complete article.

The catalogue contains 479 unique papers and 43 explainers, including 96 MOF records. Original 451 records, 463 legacy contexts, 15 explainer paths and immutable publication/creation times are preserved. The 28 additions cover 12 stability papers and 16 REE adsorption/separation papers. Each new record has a stable ID, an existing topic, bilingual summary, primary-source authors/affiliations and first-online/accepted-or-not-disclosed dates.

Final verification passes: full static checks for all 43 pages; production metadata generation and all-page bylines; taxonomy preservation; catalogue search, filters, refresh/failure recovery and creation-time recent ordering; and all-explainer regression with 3,649 interaction actions in Chinese/English at 1440, 768 and 390 px. Scientific output branches, numbers, scales and source limitations were checked separately for each new page. Logs and representative screenshots are in `mof-ree-qa/`.

The candidates JSON retains the explicit 28-paper inventory and is marked integrated. Copyrighted full articles and SI remain outside the repository. Publication targets the existing root GitHub Pages deployment on `origin/main`; release completion requires an exact-final-commit successful build plus live page/catalogue/resource verification after push.
