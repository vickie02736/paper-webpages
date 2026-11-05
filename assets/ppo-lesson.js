/* PPO teaching computations and views. No optimizer or trained model is run. */
(function(root){
'use strict';
const esc=s=>String(s).replace(/[&<>"']/g,c=>({'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;',"'":'&#39;'}[c]));
const num=x=>Number.isFinite(x)?String(+x.toFixed(6)):'—';
function clipTerms(r,a,eps){
 const clipped=Math.min(1+eps,Math.max(1-eps,r)),raw=r*a,candidate=clipped*a;
 const kink=a!==0&&Math.abs(r-(a>0?1+eps:1-eps))<1e-9;
 const plateau=a>0&&r>1+eps||a<0&&r<1-eps;
 return {clipped,raw,candidate,objective:Math.min(raw,candidate),slope:kink?null:plateau?0:a,kink,plateau};
}
function gae(rewards,values,gamma,lambda){
 if(values.length!==rewards.length+1)throw new Error('GAE requires T rewards and T+1 values');
 const deltas=rewards.map((r,t)=>r+gamma*values[t+1]-values[t]);
 const advantages=Array(rewards.length);let next=0;
 for(let t=rewards.length-1;t>=0;t--)advantages[t]=next=deltas[t]+gamma*lambda*next;
 return {deltas,advantages};
}
function plot(r,a,eps,lang){
 const tx=(z,e)=>lang==='en'?e:z,xmin=.05,xmax=2;
 const xs=[...new Set([...Array.from({length:201},(_,i)=>xmin+(xmax-xmin)*i/200),1-eps,1,1+eps])].sort((a,b)=>a-b);
 const vals=xs.flatMap(x=>{const t=clipTerms(x,a,eps);return [t.raw,t.candidate,t.objective];});
 let low=Math.min(0,...vals),high=Math.max(0,...vals);if(low===high){low=-1;high=1;}
 const span=high-low;low-=span*.12;high+=span*.12;
 const px=x=>78+(x-xmin)/(xmax-xmin)*620,py=y=>285-(y-low)/(high-low)*230;
 const line=field=>xs.map(x=>`${px(x).toFixed(3)},${py(clipTerms(x,a,eps)[field]).toFixed(3)}`).join(' ');
 const yticks=Array.from({length:5},(_,i)=>low+(high-low)*i/4).map(y=>`<text x="68" y="${py(y)+5}" text-anchor="end">${num(+y.toFixed(2))}</text>`).join('');
 const xticks=[.05,.5,1,1.5,2].map(x=>`<text x="${px(x)}" y="310" text-anchor="middle">${num(x)}</text>`).join('');
 const thresholds=[1-eps,1+eps].map((x,i)=>`<line class="ppo-bound" x1="${px(x)}" y1="45" x2="${px(x)}" y2="285"/><text x="${px(x)}" y="${i?24:42}" text-anchor="middle">${i?'1+ε':'1−ε'}=${num(x)}</text>`).join('');
 return `<svg class="ppo-plot" viewBox="0 0 760 354" role="img" aria-label="${esc(tx('同一坐标下的原始项、裁剪候选项与最终目标；当前 r='+num(r)+'，A='+num(a)+'，ε='+num(eps),'Raw term, clipped candidate and final objective on common axes; current r='+num(r)+', A='+num(a)+', ε='+num(eps)))}"><title>${esc(tx('裁剪目标与两个候选分数','Clipped objective and its two candidate scores'))}</title><rect class="ppo-band" x="${px(1-eps)}" y="45" width="${px(1+eps)-px(1-eps)}" height="240"/><line class="ppo-axis" x1="78" x2="698" y1="285" y2="285"/><line class="ppo-axis" x1="78" x2="78" y1="45" y2="285"/><line class="ppo-zero" x1="78" x2="698" y1="${py(0)}" y2="${py(0)}"/>${yticks}${xticks}${thresholds}<polyline class="ppo-final-halo" points="${line('objective')}"/><polyline class="ppo-raw" points="${line('raw')}"/><polyline class="ppo-candidate" points="${line('candidate')}"/><polyline class="ppo-final" points="${line('objective')}"/><circle cx="${px(r)}" cy="${py(clipTerms(r,a,eps).objective)}" r="6" class="ppo-current"/><text x="388" y="341" text-anchor="middle">${esc(tx('横轴：概率比 r · 纵轴：单项分数 ℓ（优势的单位）','x: probability ratio r · y: term score ℓ (advantage units)'))}</text></svg>`;
}
function renderClip(r,a,eps,lang){
 const tx=(z,e)=>lang==='en'?e:z,t=clipTerms(r,a,eps);
 const metric=(z,e,value)=>`<div class="metric"><span>${tx(z,e)}</span><strong>${esc(value)}</strong></div>`;
 const reason=a===0?tx('A=0：所有项都等于 0，没有来自该项的 actor 更新信号。','A=0: all terms are 0; this term supplies no actor update signal.'):
 t.kink?tx('当前正好位于有效裁剪边界，是折角，没有唯一局部导数。','This is exactly the active clipping boundary: a kink with no unique local derivative.'):
 t.plateau?tx(a>0?'正优势且越过上界：继续增加 r 不再增加分数。':'负优势且低于下界：继续减小 r 不再增加分数。',a>0?'Positive advantage above the upper boundary: increasing r no longer improves the score.':'Negative advantage below the lower boundary: decreasing r no longer improves the score.'):
 tx('当前保留 rA，局部斜率为 A。向变坏方向越界时仍保留纠正信号。','The objective keeps rA here, with local slope A. Worsening changes retain a corrective signal even beyond a boundary.');
 return `<div class="metrics">${metric('裁剪目标','Clipped objective',num(t.objective))}${metric('对 r 的导数','Derivative w.r.t. r',t.kink?tx('边界不可导','Kink'):num(t.slope))}</div><div class="ppo-calculation"><p>${tx('先计算两个候选分数，再选较小值（目标要最大化）：','Compute both candidate scores, then select the minimum (the objective is maximized):')}</p><p><code>rA = ${num(r)} × (${num(a)}) = ${num(t.raw)}</code></p><p><code>clip(r)A = ${num(t.clipped)} × (${num(a)}) = ${num(t.candidate)}</code></p><p><code>min(${num(t.raw)}, ${num(t.candidate)}) = ${num(t.objective)}</code></p></div><p class="ppo-chart-hint">${tx('窄屏可横向滑动图表；键盘聚焦后可用方向键滚动。','On narrow screens, scroll the chart horizontally; focus it to scroll with arrow keys.')}</p><figure class="ppo-curve-figure" id="ppo-curve" tabindex="0">${plot(r,a,eps,lang)}<figcaption class="ppo-legend"><span class="ppo-legend-raw">${tx('虚线：rA','Dashed: rA')}</span><span class="ppo-legend-candidate">${tx('点线：clip(r)A','Dotted: clip(r)A')}</span><span class="ppo-legend-final">${tx('青色实线：min','Cyan solid: min')}</span><span>${tx('橙点：当前输入','Orange point: current input')}</span></figcaption></figure><p class="callout">${reason}</p><p class="lab-note">${tx('各曲线重合时表示分数相等；青色粗线标识最终目标。阴影是裁剪参考区间，不是策略的硬边界。平台只针对当前采样项；同一网络的其他项仍可能有梯度。曲线按公式 7 计算，是教学示意。','Overlapping curves have equal scores; the thick cyan line identifies the final objective. Shading marks the clipping reference interval, not a hard policy boundary. A plateau applies only to this sampled term; other network terms can still have gradients. Curves evaluate Eq. 7 as a teaching illustration.')}</p>`;
}
let state=null;
function mount(data,rerender){
 if(!data.ppoSteps)return;
 state={steps:data.ppoSteps,step:0,lang:'zh',depth:'intuition',guide:data.ppoReadingGuide||[]};
 const simple=document.createElement('div');simple.id='ppo-beginner-lab';
 simple.innerHTML='<label for="ppo-new-prob"><span data-zh="只改变：现在选择这个动作的概率" data-en="Change only: the current probability of this action">只改变：现在选择这个动作的概率</span></label><input id="ppo-new-prob" type="range" min="10" max="40" step="1" value="20"><div id="ppo-beginner-result" aria-live="polite"></div>';
 document.querySelector('#lab .lab-layout').before(simple);
 simple.querySelector('input').addEventListener('input',()=>refresh(state.lang));
 document.querySelectorAll('[data-ppo-depth]').forEach(b=>b.addEventListener('click',()=>document.querySelector('#depth-control [data-depth="'+b.dataset.ppoDepth+'"]').click()));
 document.querySelectorAll('#depth-control [data-depth]').forEach(b=>b.addEventListener('click',()=>{state.depth=b.dataset.depth;refresh(state.lang);}));
 const presets=[['正优势 · 提高概率','Positive · increase',1.5,1],['正优势 · 降低概率','Positive · decrease',.5,1],['负优势 · 降低概率','Negative · decrease',.5,-1],['负优势 · 提高概率','Negative · increase',1.5,-1],['零优势','Zero advantage',1,0]];
 const holder=document.createElement('div');holder.className='ppo-presets';
 holder.innerHTML='<p><span data-zh="代入典型情况（ε=0.2）" data-en="Try a case (ε=0.2)">代入典型情况（ε=0.2）</span></p>'+presets.map(([z,e,r,a],i)=>`<button type="button" data-ppo-preset="${i}" data-r="${r}" data-a="${a}" aria-pressed="false"><span data-zh="${z}" data-en="${e}">${z}</span></button>`).join('');
 document.getElementById('lab-controls').append(holder);
 holder.addEventListener('click',e=>{const b=e.target.closest('[data-ppo-preset]');if(!b)return;document.getElementById('r').value=b.dataset.r;document.getElementById('a').value=b.dataset.a;document.getElementById('eps').value=.2;rerender();});
 document.querySelectorAll('[data-ppo-step]').forEach(b=>b.addEventListener('click',()=>{state.step=+b.dataset.ppoStep;refresh(state.lang);}));
 for(const id of ['ppo-gamma','ppo-lambda'])document.getElementById(id).addEventListener('input',()=>refresh(state.lang));
 document.getElementById('ppo-gae-reset').addEventListener('click',()=>{document.getElementById('ppo-gamma').value=.9;document.getElementById('ppo-lambda').value=.8;refresh(state.lang);});
}
function refreshGuide(){
 if(!state)return;
 document.body.dataset.ppoReadingDepth=state.depth;
 document.querySelectorAll('[data-ppo-depth]').forEach(b=>b.setAttribute('aria-pressed',String(b.dataset.ppoDepth===state.depth)));
 for(const g of state.guide){const b=document.querySelector('#depth-control [data-depth="'+g.depth+'"]');if(b)b.title=g.text[state.lang];}
}
function refresh(lang){
 if(!state)return;state.lang=lang;const tx=(z,e)=>lang==='en'?e:z;
 refreshGuide();
 document.querySelectorAll('[data-ppo-step]').forEach(b=>b.setAttribute('aria-pressed',String(+b.dataset.ppoStep===state.step)));
 const step=state.steps[state.step];document.getElementById('ppo-step-detail').textContent=(state.depth==='intuition'&&step.intuitionText?step.intuitionText:step.text)[lang];
 const probability=+document.getElementById('ppo-new-prob').value,ratio=probability/20;
 document.getElementById('ppo-beginner-result').innerHTML='<p>'+tx('教学设定：旧概率 20%；动作比通常表现好 1 分；相对增加 20% 后停止额外加分。','Teaching settings: old probability 20%; the action is 1 point better than usual; extra credit stops after a 20% relative increase.')+'</p><p>'+tx('现在的概率：','Current probability: ')+probability+'%</p><p>'+probability+'% ÷ 20% = '+num(ratio)+'</p><p>'+tx('未裁剪分数：','Raw score: ')+num(ratio)+' × 1 = '+num(ratio)+'</p><p>'+tx('PPO 单条分数：','PPO sample score: ')+num(clipTerms(ratio,1,.2).objective)+'</p><p>'+tx(probability>=24?'达到或超过 24%：继续提高概率，这条经验也不再多加分。':'低于 24%：提高概率仍可增加这条经验的分数。',probability>=24?'At or above 24%: further increases earn no extra credit for this sample.':'Below 24%: increasing probability can still increase this sample’s score.')+'</p><p>'+tx('这是训练目标分数，不是游戏奖励，也不是概率的硬上限。切到“机制”可查看正负优势和完整曲线。','This is an objective score, not game reward or a hard probability cap. Select Mechanism for signed advantages and full curves.')+'</p>';
 document.querySelectorAll('[data-ppo-preset]').forEach(b=>b.setAttribute('aria-pressed',String(+b.dataset.r===+document.getElementById('r').value&&+b.dataset.a===+document.getElementById('a').value&&+document.getElementById('eps').value===.2)));
 const gamma=+document.getElementById('ppo-gamma').value,lambda=+document.getElementById('ppo-lambda').value;
 document.getElementById('ppo-gamma-value').value=num(gamma);document.getElementById('ppo-lambda-value').value=num(lambda);
 const rewards=[0,0,1],values=[.4,.5,.6,0],g=gae(rewards,values,gamma,lambda),weight=gamma*lambda;
 const head=tx(['步骤 t','奖励 Rₜ','V(sₜ)','V(sₜ₊₁)','TD 残差 δₜ','优势 Âₜ'],['Step t','Reward Rₜ','V(sₜ)','V(sₜ₊₁)','TD residual δₜ','Advantage Âₜ']);
 const focused=document.activeElement?.id;
 const scroll=document.getElementById('ppo-gae-table')?.scrollLeft||0;
 document.getElementById('ppo-gae-results').innerHTML=`<div class="table-scroll" id="ppo-gae-table" tabindex="0"><table><caption>${tx('固定三步轨迹 · 所有数值为教学假设','Fixed three-step trajectory · all numbers are teaching assumptions')}</caption><thead><tr>${head.map(h=>`<th scope="col">${h}</th>`).join('')}</tr></thead><tbody>${rewards.map((R,t)=>`<tr><th scope="row">${t}</th>${[R,values[t],values[t+1],g.deltas[t],g.advantages[t]].map(v=>`<td>${num(v)}</td>`).join('')}</tr>`).join('')}</tbody></table></div><div class="ppo-calculation"><p>${tx('以第一步为例：','For the first step:')}</p><p><code>δ₀ = 0 + ${num(gamma)} × 0.5 − 0.4 = ${num(g.deltas[0])}</code></p><p><code>γλ = ${num(gamma)} × ${num(lambda)} = ${num(weight)}</code></p><p><code>Â₀ = (${num(g.deltas[0])}) + ${num(weight)} × (${num(g.deltas[1])}) + ${num(weight**2)} × (${num(g.deltas[2])}) = ${num(g.advantages[0])}</code></p></div><p class="lab-note">${tx('权重从 1、γλ、(γλ)² 递减；λ=0 时只留下当前残差，λ=1 时相邻价值项相消。这里的三步轨迹与裁剪实验室的正负优势预设是各自独立的教学输入。','Weights are 1, γλ and (γλ)². At λ=0 only the current residual remains; at λ=1 adjacent value terms cancel. This trajectory and the signed presets in the clipping lab are separate teaching inputs.')}</p>`;
 document.getElementById('ppo-gae-table').scrollLeft=scroll;
 if(focused==='ppo-gae-table')document.getElementById(focused).focus({preventScroll:true});
}
const api={clipTerms,gae,renderClip,mount,refresh};
if(typeof module==='object')module.exports=api;else root.PpoLesson=api;
})(typeof window==='object'?window:globalThis);
