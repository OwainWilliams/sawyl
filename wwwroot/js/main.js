const m=document.querySelectorAll(".__animateleft, .__animateright, .__animateup"),_=document.querySelectorAll(".__animatedown"),o=(a,r)=>{const s={root:null,rootMargin:`${r}px`,threshold:0},c=(e,l)=>{e.forEach(t=>{if(t.isIntersecting){const n=t.target;n.classList.add("__animate"),l.unobserve(n)}})},i=new IntersectionObserver(c,s);a.forEach(e=>{i.observe(e)})};o(m,0);o(_,100);
//# sourceMappingURL=main.js.map
