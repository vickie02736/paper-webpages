from pathlib import Path
import requests,hashlib,json,sys,subprocess
root=Path(__file__).resolve().parents[2];b=int(sys.argv[1]);out=root/'reports/quality-rollout';pr=json.loads((out/'progress.json').read_text());head=subprocess.check_output(['git','rev-parse','HEAD'],cwd=root,text=True).strip();build=json.loads(subprocess.check_output(['gh','api','repos/vickie02736/paper-webpages/pages/builds/latest'],cwd=root,text=True));assert build['status']=='built' and build['commit']==head,build
base='https://vickie02736.github.io/paper-webpages/';checks=[]
for row in pr['batches'][b-1]['papers']:
 slug=row['slug'];rel=f'papers/{slug}/';r=requests.get(base+rel,timeout=60);r.raise_for_status()
 for marker in ['id="lesson-primer"','id="lesson-evidence"','paper-lesson.js']:assert marker in r.text,(slug,marker)
 checks.append({'path':rel,'status':r.status_code,'newLessonMarkers':True});row.update(status='published',commit=head)
for rel in ['assets/paper-lesson.js','assets/paper-lesson.css']:
 r=requests.get(base+rel,timeout=60);r.raise_for_status();assert hashlib.sha256(r.content).digest()==hashlib.sha256((root/rel).read_bytes()).digest();checks.append({'path':rel,'sha256Matches':True})
c=requests.get(base+'references/paper-catalog.json',timeout=60);c.raise_for_status();online=c.json();local=json.loads((root/'references/paper-catalog.json').read_text());baseline=json.loads(subprocess.check_output(['git','show','7176d21:references/paper-catalog.json'],cwd=root,text=True))
for key in ['explainers','explainerCreatedAt']:
 assert online[key]==local[key]==baseline[key],key
for row in pr['batches'][b-1]['papers']:assert './papers/'+row['slug']+'/' in c.text
checks.append({'path':'references/paper-catalog.json','entriesPresent':True,'firstDatesAndCreationTimesUnchanged':True})
(out/f'release-batch-{b}.json').write_text(json.dumps({'commit':head,'pagesBuild':build['status'],'onlineChecks':checks},indent=2)+'\n');(out/'progress.json').write_text(json.dumps(pr,indent=2)+'\n');print('VERIFIED published batch',b,head)
