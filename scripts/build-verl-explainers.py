#!/usr/bin/env python3
"""Render independent offline pages from the reviewed bilingual manuscripts."""
import html,json
from pathlib import Path
ROOT=Path(__file__).resolve().parents[1]
DATA=json.loads((ROOT/'references/verl-explainers.json').read_text())
E=lambda s:html.escape(str(s),quote=True)
def pair(z,e):return {'zh':z,'en':e}
def tr(p,tag='span',attrs=''):
 return f'<{tag} data-zh="{E(p["zh"])}" data-en="{E(p["en"])}" {attrs}>{E(p["zh"])}</{tag}>'
def loc(d,key=None):
 en=d['claimLocators'][key] if key else d['locator'];zh=(d.get('claimLocatorsZh') or {}).get(key) if key else d.get('locatorZh')
 return tr(pair(zh,en)) if zh else E(en)
def link(url,p):return f'<a href="{E(url)}" target="_blank" rel="noopener">{tr(p)}</a>'
def paras(ps,extra=False):return '\n'.join(tr(p,'p','data-level="research"' if extra and i else '') for i,p in enumerate(ps))
def section(id,z,e,body,index):return f'<section id="{id}" aria-labelledby="{id}-title"><div class="section-num">{index:02}</div>'+tr(pair(z,e),'h2',f'id="{id}-title"')+body+'</section>'
LABELS={'Initial model':pair('初始模型','Initial model'),'No clipping':pair('无裁剪','No clipping'),'No clipping / penalty':pair('无裁剪或惩罚','No clipping / penalty'),'+ Overlong Filtering':pair('+ 超长过滤','+ Overlong filtering'),'+ Clip-Higher':pair('+ 上侧裁剪放宽','+ Clip-Higher'),'+ Soft Punishment':pair('+ 超长软惩罚','+ Soft punishment'),'+ Token Loss':pair('+ token 聚合损失','+ Token loss'),'+ Dynamic Sampling':pair('+ 动态采样','+ Dynamic sampling'),'Mistral Instruct':pair('Mistral 指令模型','Mistral Instruct'),'SPPO Iter1':pair('SPPO 第 1 轮','SPPO iteration 1'),'SPPO Iter2':pair('SPPO 第 2 轮','SPPO iteration 2'),'SPPO Iter3':pair('SPPO 第 3 轮','SPPO iteration 3')}
for i,d in enumerate(DATA):
 slug=d['slug'];folder=ROOT/'papers'/slug;folder.mkdir(parents=True,exist_ok=True)
 pinned=f'https://github.com/verl-project/verl/blob/{d["docCommit"]}/docs/algo/{d["doc"]}.md'
 d['docPinned']=pinned
 source=link(d['source'],pair('原论文 ↗' if d['arxiv'] else '原文档 ↗','Source paper ↗' if d['arxiv'] else 'Source documentation ↗'))
 hero=tr(pair('论文精读 · '+d['short'] if d['arxiv'] else '文档专题 · '+d['short'],'Paper close reading · '+d['short'] if d['arxiv'] else 'Documentation study · '+d['short']),'p','class="eyebrow"')+tr(d['title'],'h1')+tr(d['lead'],'p','class="reading-intro"')+f'<p class="source-note">{E(d["sourceTitle"])} · {E(d["version"])}</p><div class="source-links">{source}<a href="../../?theme=ai&amp;q=verl#themes">'+tr(pair('人工智能与计算','Artificial Intelligence & Computing'))+'</a></div>'
 body=section('background','研究问题','The research problem',tr(d['foundation'],'p','class="callout"')+tr(d['background'],'p'),1)
 body+=section('mechanism','方法怎样工作','How the method works','<ol class="mechanism-list">'+''.join(tr(p,'li') for p in d['mechanism'])+'</ol><p class="source-note">'+source+' · '+loc(d,'mechanism')+'</p>',2)
 body+=section('math','从符号到目标','From notation to objective',tr(d['math'][0],'p')+f'<pre class="formula" data-level="mechanism"><code>{E(d["formula"])}</code></pre>'+paras(d['math'][1:])+tr(pair('公式位置与假设见下方来源；这些简式保留教学所需的变量，省略项在正文说明。','See the source locators below for assumptions. These teaching expressions retain the relevant variables; omissions are explained in the text.'),'p','class="source-note"')+'<p class="source-note">'+source+' · '+loc(d,'math')+'</p>',3)
 body+=section('lab','动手改变一个条件','Change a condition',tr(pair('教学计算 · 控件只计算本页注明的公式，不运行模型训练或论文实验。' if slug!='verl-algorithm-baselines' else '文档记录筛选 · 不跨数据集排名，保留原始日志与配置来源。','Teaching computation · These controls evaluate the stated formulas, not model training or paper experiments.' if slug!='verl-algorithm-baselines' else 'Documentation filters · Records retain original logs and configurations; there is no cross-dataset ranking.'),'p','class="lab-note"')+'<div class="lab-layout"><div id="lab-controls" class="lab-controls"></div><div id="lab-results" class="lab-results" aria-live="polite" aria-atomic="true"></div></div>',4)
 ev=paras(d['evidence'],True)
 if d['rows']:
  ev+='<figure>'+tr(d['metric'],'figcaption')+'<div class="table-scroll"><table><thead><tr>'+tr(pair('原文比较条件','Condition in the source'),'th','scope="col"')+tr(pair('报告值','Reported value'),'th','scope="col"')+'</tr></thead><tbody>'
  for label,value in d['rows']:ev+='<tr><th scope="row">'+tr(LABELS.get(label,pair(label,label)))+f'</th><td>{value}</td></tr>'
  ev+='</tbody></table></div>'+tr(pair('数值转录自原文。指标、模型、聚合方式和误差含义见本节正文，不同表格之间不作统一排名。','Values transcribed from the source. Models, aggregation, metrics, and uncertainty are specified in this section; tables across pages are not one leaderboard.'),'p','class="source-note"')+'</figure>'
 if d['evidencePage']:ev+='<p>'+link('https://arxiv.org/pdf/'+d['version']+'#page='+str(d['evidencePage']),pair(f'对照原 PDF 第 {d["evidencePage"]} 页 ↗',f'Compare PDF page {d["evidencePage"]} ↗'))+'</p>'
 body+=section('evidence','怎样阅读证据','Reading the evidence',ev,5)
 body+=section('limits','适用条件与局限','Conditions and limitations',paras(d['limits'])+tr(d['readingQuestion'],'p','class="callout"')+'<details>'+tr(pair('展开推理','Show reasoning'),'summary')+tr(d['readingAnswer'],'p')+'</details>',6)
 body+=section('implementation','verl 实现附注','Implementation notes for verl',tr(d['implementation'],'p')+'<p>'+link(pinned,pair('固定版本的实现文档 ↗','Pinned implementation documentation ↗'))+'</p>',7)
 related=[]
 if slug=='rollout-correction':related=[DATA[10]]
 elif slug=='rollout-correction-math':related=[DATA[9]]
 else:related=[DATA[(i-1)%len(DATA)],DATA[(i+1)%len(DATA)]]
 sources=tr(pair('本文区分原论文报告、文档实现及教学计算。完整主张与图示核对记录可在 sources.md 查看。','This page separates paper reports, documented implementations, and teaching calculations. The complete claim and visual evidence ledger is in sources.md.'),'p')+'<p class="source-note">'+loc(d)+f'</p><div class="source-links">{source}{link(pinned,pair("固定文档版本 ↗","Pinned documentation ↗"))}<a href="sources.md">'+tr(pair('证据记录','Evidence ledger'))+'</a></div>'
 for s in d.get('extraSources',[]):sources+='<p>'+link(s['url'],pair(s['zh'],s['en']))+'</p>'
 sources+='<p>'+tr(pair('继续阅读','Continue reading'))+'</p><div class="related-links">'+''.join(f'<a href="../{r["slug"]}/">{E(r["short"])}</a>' for r in related)+'</div>'
 body+=section('sources','来源与延伸阅读','Sources and further reading',sources,8)
 depth='<div id="depth-control" class="depth-control">'+''.join(f'<button type="button" data-depth="{k}" aria-pressed="{str(k=="intuition").lower()}">'+tr(pair(z,e))+'</button>' for k,z,e in [('intuition','直觉','Intuition'),('mechanism','机制','Mechanism'),('research','研究','Research')])+'</div>'
 # Only runtime fields enter the embedded data block. Source evidence remains in the ledger.
 payload={k:d[k] for k in ['slug','short','title']}
 if 'baselines'in d:payload['baselines']=d['baselines']
 serialized=json.dumps(payload,ensure_ascii=False).replace('<',chr(92)+'u003c')
 bibliography='<script src="../../assets/bibliography.js"></script><script src="../../assets/paper-metadata.js"></script>' if d['arxiv'] else ''
 doc=f'''<!doctype html>
<html lang="zh-CN"><head><meta charset="UTF-8"><meta name="robots" content="noindex, nofollow, noarchive"><meta name="viewport" content="width=device-width, initial-scale=1"><title>{E(d['title']['zh'])} · Research Atlas</title><meta name="description" content="{E(d['lead']['zh'])}"><link rel="stylesheet" href="../../assets/verl.css"><link rel="stylesheet" href="../../assets/bibliography.css"><link rel="stylesheet" href="../../assets/paper.css"></head>
<body class="atlas-paper verl-page" data-paper="{slug}">{depth}<main id="main"><header class="hero">{hero}</header>{body}<footer><a href="../../">Research Atlas</a> · {E(d['short'])}</footer></main>
<script id="page-data" type="application/json">{serialized}</script>
{bibliography}<script src="../../assets/paper.js"></script><script src="../../assets/verl-math.js"></script><script src="../../assets/verl.js"></script></body></html>'''
 (folder/'index.html').write_text(doc)
 (folder/'README.md').write_text(f'# {d["short"]}\n\n[讲解页 / Explainer](index.html) · [人工智能与计算 / Artificial Intelligence & Computing](../../?theme=ai&q=verl#themes)\n\n{d["lead"]["zh"]}\n\n{d["lead"]["en"]}\n\n- Source: [{d["sourceTitle"]}]({d["source"]})\n- [Evidence ledger](sources.md)\n- Chinese / English; Intuition / Mechanism / Research; keyboard-operable teaching interaction.\n- Editorial source: `references/verl-explainers.json`; render with `python3 scripts/build-verl-explainers.py`.\n- Shared runtime: `assets/verl.js`, `assets/verl-math.js`; no external runtime services.\n')
 ledger=f'# {d["short"]} — source and claim ledger\n\n## Source identity\n\n- Primary: [{d["sourceTitle"]}]({d["source"]})\n- Adopted version: `{d["version"]}`. Checked 2026-11-02.\n- Implementation: [verl {d["doc"]}]({pinned}), commit `{d["docCommit"]}`.\n- Documentation SHA-256: `{d["docSha256"]}`.\n'
 if d['arxiv']:ledger+=f'- PDF SHA-256: `{d["pdfSha256"]}`.\n- Experimental evidence page visually inspected: PDF p. {d["evidencePage"]}; original images are not republished.\n'
 ledger+=f'\n## Source locators\n\n{d["locator"]}\n\n## Claim mapping\n\n'
 for field in ['background','mechanism','math','evidence','limits','implementation']:
  ps=d[field] if isinstance(d[field],list) else [d[field]]
  ledger+=f'### {field}\n\nSource locator: {d["claimLocators"][field]}\n\n'
  for j,p in enumerate(ps):ledger+=f'{j+1}. {p["en"]}\n\n'
 ledger+='## Foundations and reading task\n\n'+d['foundation']['en']+'\n\nQuestion: '+d['readingQuestion']['en']+'\n\nAnswer: '+d['readingAnswer']['en']+'\n\nThese are general definitions and worked teaching examples, not experimental observations. Reader comprehension has been editorially reviewed; no human rereading study was conducted.\n\n'
 ledger+='## Visual and interaction audit\n\n- Method panels: author-method paraphrases, mapped to the method/algorithm locators above; not an experimental workflow run.\n- Formula panel: teaching notation, with omitted conditions and approximations explained in both languages.\n- Interactive lab: synthetic inputs except the baseline documentation filter. Outputs are deterministic evaluations of the displayed formulas, not measured performance.\n- Evidence table (when present): exact transcribed values; the metric, model, comparison conditions, and source page are given beside the table. No values are inferred from plotted curves.\n- Limits and implementation notes distinguish paper claims, required assumptions, and later engineering choices.\n- Browser and numerical acceptance results are recorded in `reports/verl-validation.md`.\n'
 if d.get('ledgerNotes'):ledger+='\n## Version and audit notes\n\n'+''.join(f'- {n}\n' for n in d['ledgerNotes'])
 for s in d.get('extraSources',[]):ledger+=f'\n- [{s["en"]}]({s["url"]}): {s["locator"]}\n'
 (folder/'sources.md').write_text(ledger)
# The collection is navigation, not a sixteenth explainer or fictitious paper.
f=ROOT/'collections/verl-algorithms';f.mkdir(parents=True,exist_ok=True)
cards=''
for d in DATA:
 searchable=' '.join([d['short'],d['title']['zh'],d['title']['en'],d['lead']['zh'],d['lead']['en']])
 cards+=f'<li class="collection-card" data-search="{E(searchable.lower())}">'+tr(pair('论文精读' if d['arxiv'] else '文档专题','Paper study' if d['arxiv'] else 'Documentation study'),'span','class="eyebrow"')+f'<h2><a href="../../papers/{d["slug"]}/">{E(d["short"])}</a></h2>'+tr(d['lead'],'p')+'</li>'
(f/'index.html').write_text('''<!doctype html><html lang="zh-CN"><head><meta charset="UTF-8"><meta name="robots" content="noindex, nofollow, noarchive"><meta name="viewport" content="width=device-width,initial-scale=1"><title>verl 算法精读 · Research Atlas</title><meta name="description" content="人工智能与计算主题中的强化学习与后训练文章。"><link rel="stylesheet" href="../../assets/verl.css"><link rel="stylesheet" href="../../assets/paper.css"></head><body class="atlas-paper verl-page" data-paper="verl-algorithms"><main id="main"><header class="hero">'''+tr(pair('人工智能与计算 · 训练与适应','Artificial Intelligence & Computing · Training & Adaptation'),'p','class="eyebrow"')+tr(pair('理解 verl 背后的算法','Understand the algorithms behind verl'),'h1')+tr(pair('从目标函数、更新信号和实验口径理解强化学习与后训练。全部文章已收录于人工智能与计算主题。','Understand reinforcement learning and post-training through objectives, update signals and evaluation protocols. All articles are listed under Artificial Intelligence & Computing.'),'p','class="reading-intro"')+'''</header><section id="explore">'''+tr(pair('选择文章开始阅读','Choose an article'),'h2')+tr(pair('搜索名称、问题或方法','Search names, problems, or methods'),'label','for="collection-search"')+'<input type="search" id="collection-search"><p id="collection-count" aria-live="polite"></p><ul class="collection-grid">'+cards+'</ul></section><footer><a href="../../?theme=ai&amp;q=verl#themes">'+tr(pair('人工智能与计算','Artificial Intelligence & Computing'))+'</a></footer></main><script src="../../assets/paper.js"></script><script src="../../assets/verl-collection.js"></script></body></html>')
(f/'README.md').write_text('# verl algorithms\n\n[Artificial Intelligence & Computing](../../?theme=ai&q=verl#themes) — all articles are listed directly in their theme. This existing index remains available at its original URL; it does not add a paper or explainer count.\n\n'+''.join(f'- [{d["short"]}](../../papers/{d["slug"]}/) — '+('paper' if d['arxiv'] else 'documentation')+'\n' for d in DATA))
print('Rendered 15 independent pages and one navigation collection')
