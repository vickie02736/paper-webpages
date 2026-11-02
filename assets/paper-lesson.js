(() => {
  'use strict';
  const depth=document.getElementById('lesson-depth');
  if(!depth)return;
  let level=1;
  const notes={zh:['直觉：先认识对象、读核心证据与边界。','机制：展开方法为何这样设计，以及公式怎样使用。','研究：展开原有实验细节、模型假设与补充说明。'],en:['Intuition: meet the objects and read the core evidence and limits.','Mechanism: expand the method rationale and how the equations are used.','Research: expand experimental detail, model assumptions and supporting discussion.']};
  function render(){
    depth.querySelectorAll('button').forEach(button=>{const active=Number(button.dataset.depth)===level;button.setAttribute('aria-pressed',String(active));button.classList.toggle('active',active)});
    document.querySelectorAll('[data-lesson-level]').forEach(el=>el.hidden=Number(el.dataset.lessonLevel)>level);
    document.querySelectorAll('.lesson-hint').forEach(el=>el.hidden=Number(el.dataset.forLevel)<=level);
    const lang=document.documentElement.lang.startsWith('en')?'en':'zh';
    document.getElementById('lesson-depth-note').textContent=notes[lang][level-1];
  }
  depth.addEventListener('click',event=>{const button=event.target.closest('button[data-depth]');if(!button||!depth.contains(button))return;level=Number(button.dataset.depth);render()});
  new MutationObserver(render).observe(document.documentElement,{attributes:true,attributeFilter:['lang']});
  window.PaperLesson={depth};
  render();
})();
