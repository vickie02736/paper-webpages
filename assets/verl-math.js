/* Teaching computations, not a training implementation. Natural logarithms throughout. */
(function(root){
'use strict';
const mean=a=>a.reduce((s,x)=>s+x,0)/a.length;
const clamp=(x,l,h)=>Math.min(h,Math.max(l,x));
const kl=(p,q)=>p*Math.log(p/q)+(1-p)*Math.log((1-p)/(1-q));
const entropy=p=>-p*Math.log(p)-(1-p)*Math.log(1-p);
const ppo=(r,a,lo=.2,hi=lo)=>Math.min(r*a,clamp(r,1-lo,1+hi)*a);
const ppoActive=(r,a,lo=.2,hi=lo)=>!(a>0&&r>1+hi||a<0&&r<1-lo);
const advantages=(rewards,normalize=true)=>{const b=mean(rewards),sd=Math.sqrt(mean(rewards.map(r=>(r-b)**2)));return {b,sd,a:rewards.map(r=>sd===0?0:(r-b)/(normalize?sd:1))};};
const weighted=(r,w)=>r.reduce((s,x,i)=>s+x*w[i],0)/w.reduce((s,x)=>s+x,0);
const otb=(probabilities,rewards,lengths)=>{const energy=probabilities.map((ps,i)=>{let cumulative=0;return ps.map((p,t)=>{if(t>=lengths[i])return 0;cumulative+=2*(1-p)**2;return cumulative;});});return probabilities[0].map((_,t)=>{const weights=energy.map(e=>e[t]),total=weights.reduce((a,b)=>a+b,0),b=total?weighted(rewards,weights):0;return {weights,b,a:rewards.map((r,i)=>t<lengths[i]?r-b:0),mask:lengths.map(l=>+(t<l))};});};
const api={mean,clamp,kl,entropy,ppo,ppoActive,advantages,weighted,otb};
if(typeof module==='object')module.exports=api;else root.VerlMath=api;
})(typeof window==='object'?window:globalThis);
