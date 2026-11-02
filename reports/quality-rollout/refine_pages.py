"""Render authored, source-audited lesson additions into existing pages. No dataset edits."""
from pathlib import Path
from bs4 import BeautifulSoup
import json,sys,html,re
ROOT=Path(__file__).resolve().parents[2]
def bi(pair):return '<span class="lesson-zh">'+pair[0]+'</span><span class="lesson-en">'+pair[1]+'</span>'
def p(pair,cls=''):return '<p'+(' class="'+cls+'"' if cls else '')+'>'+bi(pair)+'</p>'
def h(pair,tag='h3'):return '<'+tag+'>'+bi(pair)+'</'+tag+'>'
def fragment(s):return BeautifulSoup(s,'html.parser')
all_lessons=json.loads((ROOT/'reports/quality-rollout/lessons.json').read_text())
for slug in sys.argv[1:]:
 d=all_lessons[slug];folder=ROOT/'papers'/slug;page=folder/'index.html';raw=page.read_text();s=BeautifulSoup(raw,'html.parser')
 if s.select_one('#lesson-primer'):raise SystemExit('Already refined: '+slug)
 original_ids={n['id'] for n in s.select('[id]')}
 hero=s.select_one('.hero');assert hero is not None,slug
 lead=hero.select_one('.lead')
 if lead is not None:
  old=fragment(str(lead));old.p['class']=['lesson-original-summary'];s.select_one('main section h2').insert_after(old)
  lead.clear();lead.append(fragment(bi(d['lead'])))
 depth='<div class="lesson-depth" id="lesson-depth">'+''.join('<button type="button" data-depth="'+str(i+1)+'" aria-pressed="'+str(i==0).lower()+'">'+bi(t)+'</button>' for i,t in enumerate([['直觉','Intuition'],['机制','Mechanism'],['研究','Research']]))+'</div><p id="lesson-depth-note" class="lesson-depth-note" role="status"></p>'
 hero.append(fragment(depth))
 primer='<div class="lesson-block" id="lesson-primer">'+p(['先搭起理解这篇论文的基础','Build the foundations for this paper'],'lesson-kicker')+h(d['foundationTitle'])+p(d['foundation'])+'<div class="lesson-terms">'+''.join('<div>'+h(x[0],'h4')+p(x[1])+'</div>' for x in d['terms'])+'</div>'+p(d['problem'])+'</div>'
 first=s.select_one('main section')
 if first.h2:first.h2.insert_after(fragment(primer))
 else:first.append(fragment(primer))
 method='<div class="lesson-block" id="lesson-method" data-lesson-level="2">'+p(['机制 · 这些步骤为什么不能省略','Mechanism · Why these steps matter'],'lesson-kicker')+h(d['methodTitle'])+'<ol class="lesson-flow">'+''.join('<li>'+h([re.sub(r'^\d+\s*[·.]\s*','',v) for v in x[0]],'h4')+p(x[1])+'</li>'for x in d['steps'])+'</ol>'+p(d['methodBoundary'],'lesson-boundary')+p(d['methodSource'],'lesson-source')+'</div>'
 target=s.select_one('#'+d['methodTarget']);assert target is not None;target.h2.insert_after(fragment(method))
 evidence='<div class="lesson-block" id="lesson-evidence">'+h(d['evidenceTitle'])+'<div class="lesson-pair">'+''.join('<div>'+h(x[0],'h4')+p(x[1])+'</div>' for x in d['comparison'])+'</div>'
 if d.get('equation'):evidence+='<p class="lesson-equation">'+bi(d['equation'])+'</p>'+p(d['equationMeaning'])
 evidence+=p(d['inference'],'lesson-boundary')+p(d['evidenceSource'],'lesson-source')+'<details class="lesson-check"><summary>'+bi(d['question'])+'</summary>'+p(d['answer'])+'</details></div>'
 target=s.select_one('#'+d['evidenceTarget']);assert target is not None;target.h2.insert_after(fragment(evidence))
 # Original scientific content stays intact; selected technical sections become progressive.
 for ident,level in d.get('depthSections',{}).items():
  sec=s.select_one('#'+ident);assert sec is not None
  first_para=sec.find('p',recursive=False)
  hidden=[]
  for child in sec.find_all(recursive=False):
   if child.name in ['h2'] or child is first_para or child.get('id','').startswith('lesson-'):continue
   if child.name=='p' and any(c in ['callout','small','source','note','warning'] for c in child.get('class',[])):continue
   child['data-lesson-level']=str(level);hidden.append(child)
  if hidden:sec.h2.insert_after(fragment('<p class="lesson-hint" data-for-level="'+str(level)+'">'+bi(['详细比较与操作可在'+('机制'if level==2 else'研究')+'层展开；本节保留核心判断。','Detailed comparisons and controls open at the '+('Mechanism'if level==2 else'Research')+' level; the core conclusion remains here.'])+'</p>'))
 for detail in s.select('main details:not(.lesson-check)'):detail['data-lesson-level']='3'
 s.head.append(fragment('<link rel="stylesheet" href="../../assets/paper-lesson.css">'))
 local=s.find('script',src='page.js');assert local is not None
 local.insert_before(fragment('<script src="../../assets/paper-lesson.js"></script>'))
 assert original_ids.issubset({n['id']for n in s.select('[id]')})
 page.write_text(str(s))
 js=folder/'page.js';j=js.read_text();assert 'PaperLesson.depth' not in j
 j,n=re.subn(r'(AtlasPaper\.init\(\s*\{)',r'\1depth:window.PaperLesson.depth,',j,count=1);assert n==1;js.write_text(j)
 readme=folder/'README.md';readme.write_text(readme.read_text()+'\n## High-school teaching revision\n\nIntroduces material-specific foundations, a method rationale, a worked evidence comparison and a reading checkpoint, with cumulative Intuition/Mechanism/Research controls. Original data and anchors are preserved. [Quality rollout and separate validation](../../reports/quality-rollout/README.md).\n')
 sources=folder/'sources.md';sources.write_text(sources.read_text()+'\n## High-school teaching revision — 2026-11-02\n\n'+d['audit']+'\n\nNew method guide: '+d['methodSource'][1]+'\n\nNew evidence comparison: '+d['evidenceSource'][1]+'\n\n'+d['science']+'\n\nReader task: '+d['question'][1]+' '+d['answer'][1]+'\n\nScientific observations, author explanations and teaching calculations remain distinct. Existing datasets are unchanged; no unverified atomic structure is drawn. The technical and teaching audits are recorded separately in [the rollout](../../reports/quality-rollout/README.md). Human comprehension has not been tested.\n')
 print('Refined',slug)
