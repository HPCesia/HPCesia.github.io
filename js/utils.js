(()=>{const t={throttle:(t,e,{leading:o=!0,trailing:n=!0}={})=>{let a,i=0
const s=(e,n)=>{a=i=!1===o?0:Date.now(),t.apply(e,n)}
return function(){const t=Date.now()
i||!1!==o||(i=t)
const r=e-(t-i)
r<=0||r>e?(a&&clearTimeout(a),s(this,arguments)):a||!1===n||(a=setTimeout((()=>s(this,arguments)),r))}},fadeIn:(t,e)=>{t.style.display="block",t.style.animation=`to_show ${e}s`},fadeOut:(t,e)=>{const o=()=>{t.style.display="none",t.style.animation="",t.removeEventListener("animationend",o)}
t.addEventListener("animationend",o),t.style.animation=`to_hide ${e}s`},sidebarPaddingR:()=>{const t=window.innerWidth-document.body.clientWidth
t>0&&(document.body.style.paddingRight=`${t}px`)},snackbarShow:(t,e=!1,o=5e3)=>{Snackbar.show({text:t,showAction:e,duration:o,pos:"top-center"})},copy:async t=>{const e=await navigator.clipboard.writeText(t).then((()=>GLOBAL_CONFIG.lang.copy.success)).catch((()=>GLOBAL_CONFIG.lang.copy.error))
utils.snackbarShow(e,!1,2e3)},getEleTop:t=>{let e=t.offsetTop
for(;t.offsetParent;)e+=(t=t.offsetParent).offsetTop
return e},siblings:(t,e)=>[...t.parentNode.children].filter((o=>o!==t&&(!e||o.matches(e)))),randomNum:t=>Math.floor(Math.random()*t),timeDiff:(t,e)=>Math.floor((e.getTime()-t.getTime())/864e5),scrollToDest:(t,e=500)=>{const o=window.pageYOffset,n=document.getElementById("page-header").classList.contains("nav-fixed")
if(t=o>t||n?t-70:t,"scrollBehavior"in document.documentElement.style)return void window.scrollTo({top:t,behavior:"smooth"})
const a=t-o,i=n=>{const s=n-(start||n)
s<e?(window.scrollTo(0,o+a*s/e),window.requestAnimationFrame(i)):window.scrollTo(0,t)}
window.requestAnimationFrame(i)},isMobile:()=>/Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent),isHidden:t=>0===t.offsetHeight&&0===t.offsetWidth,animateIn:(t,e)=>{Object.assign(t.style,{display:"block",animation:e})},animateOut:(t,e)=>{const o=()=>{t.style.display="",t.style.animation="",t.removeEventListener("animationend",o)}
t.addEventListener("animationend",o),t.style.animation=e},wrap:(t,e,o)=>{const n=document.createElement(e)
Object.entries(o).forEach((([t,e])=>n.setAttribute(t,e))),t.parentNode.insertBefore(n,t),n.appendChild(t)},lazyloadImg:()=>{window.lazyLoadInstance=new LazyLoad({elements_selector:"img",threshold:0,data_src:"lazy-src",callback_error:t=>t.src=GLOBAL_CONFIG.lazyload.error})},lightbox:function(t){const e=GLOBAL_CONFIG.lightbox,o={class:"fancybox","data-fancybox":"gallery"}
"mediumZoom"===e?mediumZoom&&mediumZoom(t,{background:"var(--efu-card-bg)"}):"fancybox"===e&&(t.forEach((t=>{"A"!==t.parentNode.tagName&&(o.href=o["data-thumb"]=t.dataset.lazySrc||t.src,o["data-caption"]=t.title||t.alt||"",utils.wrap(t,"a",o))})),window.fancyboxRun||(Fancybox.bind("[data-fancybox]",{Hash:!1,animated:!0,Thumbs:{showOnStart:!1},Images:{Panzoom:{maxScale:4}},Carousel:{transition:"slide"},Toolbar:{display:{left:["infobar"],middle:["zoomIn","zoomOut","toggle1to1","rotateCCW","rotateCW","flipX","flipY"],right:["slideshow","thumbs","close"]}}}),window.fancyboxRun=!0))},diffDate:(t,e=!1)=>{const o=new Date,n=new Date(t),a=o-n,{time:i}=GLOBAL_CONFIG.lang,s=Math.floor(a/864e5)
if(!e)return s
const r=Math.floor(a/6e4),l=Math.floor(a/36e5),d=Math.floor(a/2592e6)
return d>12?n.toISOString().slice(0,10):d>=1?`${d} ${i.month}`:s>=1?`${s} ${i.day}`:l>=1?`${l} ${i.hour}`:r>=1?`${r} ${i.min}`:i.just},loadComment:(t,e)=>{const o="IntersectionObserver"in window?new IntersectionObserver((t=>{t[0].isIntersecting&&(e(),o.disconnect())}),{threshold:[0]}):null
o?o.observe(t):e()},escapeHtml:t=>t.replace(/[&<"']/g,(t=>({"&":"&amp;","<":"&lt;",'"':"&quot;","'":"&#039;"}[t])))}
window.utils={...window.utils,...t}})()
