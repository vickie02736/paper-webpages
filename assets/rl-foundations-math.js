/* Deterministic teaching calculations; objectives and assumptions are in the pages. */
(function(root,factory){const api=factory();if(typeof module==='object'&&module.exports)module.exports=api;else root.RLFoundationsMath=api;})(typeof window==='object'?window:globalThis,function(){
'use strict';
const kl=(p,q)=>{if(!(p>0&&p<1&&q>0&&q<1))throw new RangeError('Probabilities must lie strictly between zero and one');return p*Math.log(p/q)+(1-p)*Math.log((1-p)/(1-q));};
function mask(q,length,delta,a){
 const probabilities=[.52,.54,q,.48,.51,.53];
 const rows=probabilities.map((x,i)=>({position:i+1,q:x,r:x/.5,kl:kl(.5,x),valid:i<length}));
 const valid=rows.filter(x=>x.valid),maximum=Math.max(...valid.map(x=>x.kl));
 const accepted=maximum<=delta,cleanAccepted=kl(.5,.52)<=delta;
 const sum=valid.reduce((s,x)=>s+x.r,0);
 return {rows,maximum,mean:valid.reduce((s,x)=>s+x.kl,0)/length,accepted,cleanAccepted,acceptedCount:+accepted + +cleanAccepted,signal:(accepted?a*sum/2:0)+(cleanAccepted?-.5*length*1.04/2:0),coefficients:rows.map(x=>x.valid&&accepted?a*x.r/2:0)};
}
function bounds(T,delta){let sum=0;for(let t=0;t<T;t++)sum+=Math.min(1,Math.sqrt(t*delta/2));return {classical:T*(T-1)*delta,pm:4*Math.min(1,Math.sqrt(delta/2))*sum};}
function ratios(behav,prox,current,A,eps){const w=prox/behav,r=current/prox,clipped=Math.min(1+eps,Math.max(1-eps,r)),value=w*Math.min(r*A,clipped*A),active=A>0?r<1+eps:A<0?r>1-eps:false,kink=A!==0&&Math.abs(r-(A>0?1+eps:1-eps))<1e-10;return {w,r,importance:current/behav,value,derivative:active?A/behav:0,kink};}
function scale(c,adjust){const H=adjust?8*c:8,B=8192/c;return {optimization:B,iteration:65536/c,adam:.0005/Math.sqrt(c),sgd:.0005/c,H,beta:H/(1+H),sampleAge:H*B,phaseIterations:32*c,phaseSamples:65536/c*32*c,advWindow:c};}
return {kl,mask,bounds,ratios,scale};
});
