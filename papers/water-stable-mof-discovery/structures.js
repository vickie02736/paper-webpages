/* CSD atom coordinates and explicit bonds; orthographic finite-cell viewer, not a pore calculation. */
(() => {
  'use strict';
  let lang = 'zh';
  const pick = p => p[lang === 'en' ? 1 : 0];
  const palette = {C:'#b8c2d0',H:'#ffffff',O:'#ff706e',N:'#789aff',F:'#b6e68c',S:'#ffd36f',Co:'#f3a2d8',Ni:'#70df99',Mo:'#7de3ff'};
  const viewers = [];
  for (const ref of ['iqecis','yezkul']) {
    const host=document.getElementById('structure-'+ref),canvas=host.querySelector('canvas'),status=host.querySelector('[role="status"]'),retry=host.querySelector('[data-view="retry"]');
    const s={ref,host,canvas,status,retry,data:null,error:false,loading:true,x:.45,y:.55,zoom:1,hydrogen:false,epoch:0};viewers.push(s);
    const ctx=canvas.getContext('2d');
    function project(p){const center=s.data.corners[7].map(v=>v/2),v=p.map((t,i)=>t-center[i]),cy=Math.cos(s.y),sy=Math.sin(s.y),cx=Math.cos(s.x),sx=Math.sin(s.x),x=v[0]*cy+v[2]*sy,z=-v[0]*sy+v[2]*cy;return [x,v[1]*cx-z*sx,v[1]*sx+z*cx];}
    s.draw=()=>{
      if(!s.data||!ctx)return;
      const w=canvas.clientWidth,h=canvas.clientHeight;if(!w||!h)return;
      const ratio=Math.min(devicePixelRatio||1,2);canvas.width=w*ratio;canvas.height=h*ratio;ctx.setTransform(ratio,0,0,ratio,0,0);ctx.clearRect(0,0,w,h);ctx.fillStyle='#07111f';ctx.fillRect(0,0,w,h);
      const scale=Math.min(w,h)*.87/45*s.zoom; // Same Angstrom scale in both equally sized viewports.
      const point=p=>{const q=project(p);return [w/2+q[0]*scale,h/2-q[1]*scale,q[2]]};
      const pts=s.data.atoms.map(a=>point(a.slice(1))),corners=s.data.corners.map(point),items=[];
      for(const [i,j] of s.data.cellEdges)items.push({z:(corners[i][2]+corners[j][2])/2,line:[corners[i],corners[j]],cell:true});
      const visible=i=>s.hydrogen||s.data.atoms[i][0]!=='H';
      for(const [i,j] of s.data.bonds)if(visible(i)&&visible(j))items.push({z:(pts[i][2]+pts[j][2])/2,line:[pts[i],pts[j]]});
      s.data.atoms.forEach((a,i)=>{if(visible(i))items.push({z:pts[i][2],p:pts[i],elem:a[0]})});
      items.sort((a,b)=>a.z-b.z);
      for(const item of items){if(item.line){const [a,b]=item.line;ctx.strokeStyle=item.cell?'#56718c':'#8c9caf';ctx.lineWidth=item.cell?1:Math.max(.85,scale*.09);ctx.setLineDash(item.cell?[4,4]:[]);ctx.beginPath();ctx.moveTo(a[0],a[1]);ctx.lineTo(b[0],b[1]);ctx.stroke();}else{const [x,y]=item.p,rad=scale*(item.elem==='H'?.14:['Co','Ni','Mo'].includes(item.elem)?.48:.29),g=ctx.createRadialGradient(x-rad*.3,y-rad*.3,rad*.05,x,y,rad);g.addColorStop(0,'#ffffff');g.addColorStop(.35,palette[item.elem]||'#dddddd');g.addColorStop(1,palette[item.elem]||'#dddddd');ctx.fillStyle=g;ctx.beginPath();ctx.arc(x,y,Math.max(rad,1),0,Math.PI*2);ctx.fill();}}
      ctx.setLineDash([]);ctx.fillStyle='#07111f';ctx.fillRect(8,h-39,Math.max(5*scale+16,72),34);ctx.strokeStyle='#f4f7fb';ctx.lineWidth=2;ctx.beginPath();ctx.moveTo(16,h-15);ctx.lineTo(16+5*scale,h-15);ctx.stroke();ctx.fillStyle='#f4f7fb';ctx.font='12px system-ui';ctx.fillText('5 Å',16,h-23);canvas.dataset.scale=scale.toFixed(4);canvas.dataset.rotation=[s.x,s.y].map(v=>v.toFixed(3)).join(',');canvas.dataset.zoom=s.zoom.toFixed(2);canvas.dataset.hydrogen=String(s.hydrogen);
    };
    s.labels=()=>{
      canvas.setAttribute('aria-label',pick([ref.toUpperCase()+' 的 CSD 晶体结构。方向键旋转，加减键缩放，Home 复位；下方有等效按钮。',ref.toUpperCase()+' CSD crystal structure. Arrow keys rotate, plus/minus zoom and Home resets; equivalent buttons follow.']));
      status.textContent=s.loading?pick(['正在读取晶体坐标…','Loading crystal coordinates…']):s.error?pick(['结构加载失败，可重试；下方原图与文字仍可阅读。','Structure loading failed. Retry, or use the original figure and text below.']):pick(['已载入真实坐标；当前'+(s.hydrogen?'显示':'隐藏')+'氢原子。','Real coordinates loaded; hydrogen atoms are '+(s.hydrogen?'shown.':'hidden.')]);
      retry.hidden=!s.error;
      host.querySelectorAll('[data-view]').forEach(b=>{if(b.dataset.view==='hydrogen')b.setAttribute('aria-pressed',String(s.hydrogen));else if(b.dataset.view!=='retry')b.disabled=!s.data});
      const legend=host.querySelector('.atom-legend');legend.replaceChildren();
      if(s.data)for(const elem of Object.keys(palette).filter(e=>s.data.atoms.some(a=>a[0]===e)&&(s.hydrogen||e!=='H'))){const item=document.createElement('span'),dot=document.createElement('i');dot.style.backgroundColor=palette[elem];dot.setAttribute('aria-hidden','true');item.append(dot,document.createTextNode(elem));legend.append(item);}
    };
    async function load(){const epoch=++s.epoch;s.loading=true;s.error=false;s.labels();try{const r=await fetch('assets/structures/'+ref+'.json');if(!r.ok)throw Error('structure HTTP '+r.status);const d=await r.json();if(epoch!==s.epoch)return;if(d.refcode!==ref.toUpperCase()||!d.atoms?.length||!d.bonds?.length)throw Error('structure identity');s.data=d;s.loading=false;s.labels();s.draw();}catch(e){if(epoch!==s.epoch)return;s.loading=false;s.error=true;s.labels();}}
    const action=k=>{if(k==='retry'){load();return}if(!s.data)return;if(k==='left')s.y-=.25;if(k==='right')s.y+=.25;if(k==='up')s.x-=.25;if(k==='down')s.x+=.25;if(k==='in')s.zoom=Math.min(2,s.zoom*1.15);if(k==='out')s.zoom=Math.max(.6,s.zoom/1.15);if(k==='axis'){s.x=0;s.y=0;s.zoom=1}if(k==='reset'){s.x=.45;s.y=.55;s.zoom=1}if(k==='hydrogen')s.hydrogen=!s.hydrogen;s.draw();s.labels()};
    host.querySelectorAll('[data-view]').forEach(b=>b.addEventListener('click',()=>action(b.dataset.view)));
    canvas.addEventListener('keydown',e=>{const k={ArrowLeft:'left',ArrowRight:'right',ArrowUp:'up',ArrowDown:'down','+':'in','=':'in','-':'out',Home:'reset'}[e.key];if(k){e.preventDefault();action(k)}});
    let drag=null;canvas.addEventListener('pointerdown',e=>{if(!s.data)return;drag={x:e.clientX,y:e.clientY};canvas.setPointerCapture(e.pointerId)});canvas.addEventListener('pointermove',e=>{if(!drag)return;s.y+=(e.clientX-drag.x)*.01;s.x+=(e.clientY-drag.y)*.01;drag={x:e.clientX,y:e.clientY};s.draw()});for(const ev of ['pointerup','pointercancel'])canvas.addEventListener(ev,()=>drag=null);
    new ResizeObserver(s.draw).observe(canvas);load();
  }
  window.DiscoveryStructures={setLanguage(value){lang=value==='en'?'en':'zh';viewers.forEach(s=>s.labels())}};
})();
