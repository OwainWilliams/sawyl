const g=document.querySelectorAll(".__animateleft, .__animateright, .__animateup"),_=document.querySelectorAll(".__animatedown"),c=(a,r)=>{const l={root:null,rootMargin:`${r}px`,threshold:0},i=(e,m)=>{e.forEach(s=>{if(s.isIntersecting){const n=s.target;n.classList.add("__animate"),m.unobserve(n)}})},d=new IntersectionObserver(i,l);a.forEach(e=>{d.observe(e)})};c(g,0);c(_,100);const o=document.querySelector(".darkmodeToggle"),t=document.body,h=()=>{if(t.classList.toggle("dark-mode"),o.classList.toggle("__active"),t.classList.contains("dark-mode")){localStorage.setItem("theme","dark");return}localStorage.setItem("theme","light")};o.addEventListener("click",h);window.onload=()=>{localStorage.getItem("theme")==="dark"&&(t.classList.add("dark-mode"),o.classList.add("__active"))};
//# sourceMappingURL=main.js.map
