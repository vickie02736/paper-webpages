(() => {
 'use strict';const d=window.FUNCTIONALIZED_DATA,el=id=>document.getElementById(id),NS='http://www.w3.org/2000/svg';let lang='zh';const tr=(zh,en)=>lang==='en'?en:zh;
 function rank(container,values,max){const target=el(container);target.replaceChildren();values.forEach((value,i)=>{const line=document.createElement('div');line.className='rank-row';const label=document.createElement('span');label.textContent=d.materials[i].name;const track=document.createElement('div');track.className='track';const fill=document.createElement('div');fill.className='fill';fill.style.width=value/max*100+'%';track.append(fill);const output=document.createElement('strong');output.textContent=String(value);line.append(label,track,output);target.append(line);});}
 function svg(tag,attrs,text){const n=document.createElementNS(NS,tag);for(const [k,v] of Object.entries(attrs))n.setAttribute(k,v);if(text!==undefined)n.textContent=text;return n;}
 const index=()=>d.elements.indexOf(el('element').value);
 function model(){
  const fit=d.fits[index()],ce=Number(el('ce').value), L=c=>fit.qm*fit.kl*c/(1+fit.kl*c),F=c=>fit.kf*Math.pow(c,1/fit.n);
  el('ce-label').textContent=`${fit.element}³⁺ · Cₑ = ${ce} mg/L`;
  el('model-values').textContent=`Langmuir: ${L(ce).toFixed(2)} mg/g · Freundlich: ${F(ce).toFixed(2)} mg/g`;
  el('fit-parameters').textContent=`qₘ = ${fit.qm} mg/g · Kᴸ = ${fit.kl} L/mg · R²ᴸ = ${fit.rl.toFixed(3)}; Kᶠ = ${fit.kf}, n = ${fit.n}, R²ᶠ = ${fit.rf.toFixed(3)}. `+tr('参数来自表 3；不在此重新拟合。','Parameters from Table 3; no refitting is performed here.');
  const g=el('plot-content');g.replaceChildren();const x=v=>60+v/60*370,y=v=>280-v/100*235;
  for(let t=0;t<=100;t+=25){g.append(svg('line',{x1:x(0),x2:x(60),y1:y(t),y2:y(t),stroke:'#293a50'}));g.append(svg('text',{x:49,y:y(t)+5,'text-anchor':'end',fill:'#a8b4c7','font-size':18},String(t)));}
  for(let t=0;t<=60;t+=20)g.append(svg('text',{x:x(t),y:303,'text-anchor':'middle',fill:'#a8b4c7','font-size':18},String(t)));
  g.append(svg('line',{x1:x(0),x2:x(60),y1:y(0),y2:y(0),stroke:'#a8b4c7'}));g.append(svg('line',{x1:x(0),x2:x(0),y1:y(0),y2:y(100),stroke:'#a8b4c7'}));
  g.append(svg('text',{x:60,y:22,fill:'#f4f7fb','font-size':18},tr('模型 q / mg·g⁻¹','Model q / mg·g⁻¹')));g.append(svg('text',{x:245,y:330,'text-anchor':'middle',fill:'#a8b4c7','font-size':18},'Cₑ / mg·L⁻¹'));
  for(const [fn,color] of [[L,'#7de3ff'],[F,'#ffb471']]){const path=Array.from({length:121},(_,i)=>`${i?'L':'M'}${x(i/2).toFixed(2)},${y(fn(i/2)).toFixed(2)}`).join(' ');g.append(svg('path',{d:path,stroke:color,'stroke-width':3,fill:'none'}));g.append(svg('circle',{cx:x(ce),cy:y(fn(ce)),r:5,fill:color,stroke:'#07111f','stroke-width':2}));}
  g.append(svg('line',{x1:x(ce),x2:x(ce),y1:y(0),y2:y(100),stroke:'#a8b4c7','stroke-dasharray':'4 4','stroke-width':1}));
  el('model-plot').setAttribute('aria-label',tr(`${fit.element} 的模型曲线。平衡浓度 ${ce} mg/L：Langmuir ${L(ce).toFixed(2)}，Freundlich ${F(ce).toFixed(2)} mg/g。`,`${fit.element} fitted curves. At equilibrium concentration ${ce} mg/L: Langmuir ${L(ce).toFixed(2)}, Freundlich ${F(ce).toFixed(2)} mg/g.`));
 }
 function render(){
  const i=index(),element=d.elements[i],values=d.materials.map(m=>m.q[i]);rank('area-chart',d.materials.map(m=>m.bet),4000);rank('capacity-chart',values,100);
  el('capacity-title').textContent=tr(`${element}³⁺ 单离子吸附量`,`${element}³⁺ single-ion uptake`);
  const pmida=values[4],deta=values[3];
  el('ranking-note').textContent=tr(`表 2：PMIDA ${pmida} mg/g，DETA ${deta} mg/g。`+(pmida>deta?'这一元素的 PMIDA 数值较高。':'这一元素的 DETA 数值较高，不能套用“PMIDA 对所有元素都最高”的概括。'),`Table 2: PMIDA ${pmida} mg/g; DETA ${deta} mg/g. `+(pmida>deta?'PMIDA has the higher value for this element.':'DETA has the higher value for this element; a blanket PMIDA-highest ranking would misrepresent the table.'));
  model();
 }
 el('element').addEventListener('change',render);el('ce').addEventListener('input',model);
 window.AtlasPaper.init({depth:window.PaperLesson.depth,shortTitle:'Cr-MIL-101 · REE',title:{zh:'Cr-MIL-101：功能化改变的不只是表面积',en:'Cr-MIL-101: functionalization changes more than surface area'},sections:[{id:'core',zh:'核心问题',en:'Core question'},{id:'routes',zh:'接枝路径',en:'Attachment routes'},{id:'tradeoff',zh:'容量比较',en:'Compare uptake'},{id:'models',zh:'模型实验室',en:'Model lab'},{id:'selectivity',zh:'选择性',en:'Selectivity'},{id:'regeneration',zh:'再生',en:'Regeneration'},{id:'limits',zh:'机制与边界',en:'Mechanisms and limits'},{id:'sources',zh:'来源',en:'Sources'}],allowBoth:false,onLanguageChange(value){lang=value==='en'?'en':'zh';document.body.dataset.lang=lang;render();}});
})();
