from pathlib import Path
import json,sys,hashlib,subprocess,re
from bs4 import BeautifulSoup
root=Path(__file__).resolve().parents[2];b=int(sys.argv[1]);out=root/'reports/quality-rollout'
progress=json.loads((out/'progress.json').read_text());batch=progress['batches'][b-1];D=json.loads((out/'lessons.json').read_text());baseline=json.loads((out/'baseline-hashes.json').read_text());tech=json.loads((out/f'batch-{b}-technical.json').read_text());assert tech['status']=='PASS'
log=Path(f'/tmp/mof-quality-batch{b}-all.log').read_text();match=re.search(r'PASS all 43 explainers; (\d+) interaction cases',log);assert match
assert 'PASS catalogue:' in Path(f'/tmp/mof-quality-batch{b}-catalog.log').read_text()
lines=[f'# Batch {b} — separate validation', '\n## Scientific verification\n']
invariants={}
for row in batch['papers']:
 slug=row['slug'];folder=root/'papers'/slug
 for name,digest in baseline[slug].items():
  if name=='data.js':assert hashlib.sha256((folder/name).read_bytes()).hexdigest()==digest
 old=subprocess.check_output(['git','show','7176d21:papers/'+slug+'/index.html'],cwd=root,text=True)
 oldids={x['id'] for x in BeautifulSoup(old,'html.parser').select('[id]')};newids={x['id'] for x in BeautifulSoup((folder/'index.html').read_text(),'html.parser').select('[id]')};assert oldids<=newids
 subprocess.run(['python3','.agents/skills/paper-webpage/scripts/check_page.py','--root',str(root),'--slug',slug],cwd=root,check=True)
 invariants[slug]={'originalIDsRetained':True,'originalDatasetUnchanged':True}
 lines+=['### '+slug,D[slug]['science'],'Method locator: '+D[slug]['methodSource'][1],'Evidence locator: '+D[slug]['evidenceSource'][1]]
 row['status']='validated-for-publication'
lines+=['\n## Teaching review\n','Each page has a source-specific prerequisite map, method-purpose flow, paired evidence explanation and a self-check. These additions address the before-audit, preserve experimental conditions and keep limits visible. They are not a generic abstract rewrite. Controls reveal meaningful method/research layers; original scientific controls and data remain.']
for row in batch['papers']:
 d=D[row['slug']];lines+=['- '+row['slug']+': '+d['question'][1]+' Answer: '+d['answer'][1]]
lines+=['Human learning outcomes have not been tested. The review establishes explanatory coverage and evidence traceability, not comprehension.','\n## Technical verification\n',f'PASS: full static checks for five pages; {tech["viewportLanguageDepthCombinations"]} viewport/language/depth combinations; {tech["sectionAnchorChecks"]} anchor checks; final text rendering at three widths in both languages; full 43-page browser regression with {match.group(1)} interaction actions; catalogue and immutable-date checks.', 'Keyboard Enter/Space, native disclosure, focus, language/depth state, direct English reload, overflow and resource/page errors were checked. Screenshots of the new foundations, method and evidence sections were inspected. Representative final screenshots are in the adjacent batch folder. No new image loader or physical simulation was introduced; source accuracy is reviewed separately. A real screen-reader session was not performed.','\n## Release\n','Validated for the existing GitHub Pages publication workflow. Exact build and online-marker verification are recorded separately after pushing.']
(out/f'batch-{b}-review.md').write_text('\n\n'.join(lines)+'\n');(out/f'batch-{b}-invariants.json').write_text(json.dumps(invariants,indent=2)+'\n');(out/'progress.json').write_text(json.dumps(progress,indent=2)+'\n')
readme=out/'README.md';readme.write_text(readme.read_text()+f'\n- Batch {b}: [before audit](batch-{b}-before.md), [science / teaching / technical review](batch-{b}-review.md), [browser checks](batch-{b}-technical.json).\n')
print('Batch',b,'ready with preserved data and anchors')
