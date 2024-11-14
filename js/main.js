const sidebarFn=()=>{const e=document.getElementById("toggle-menu"),t=document.getElementById("sidebar-menus"),o=document.getElementById("menu-mask"),n=document.body,s=e=>{utils.sidebarPaddingR(),n.style.overflow=e?"hidden":"",utils[e?"fadeIn":"fadeOut"](o,.5),t.classList.toggle("open",e)},c=()=>{t.classList.contains("open")&&s(!1)}
e.addEventListener("click",(()=>s(!0))),o.addEventListener("click",c),window.addEventListener("resize",(()=>{utils.isHidden(e)&&t.classList.contains("open")&&c(),sco.refreshWaterFall()}))},scrollFn=()=>{let e=0
const t=document.getElementById("page-header"),o=document.getElementById("rightside")||null,n=utils.throttle((()=>{initThemeColor()
const n=window.scrollY||document.documentElement.scrollTop,s=n>e
e=n,n>0?(t.classList.toggle("nav-visible",!s),t.classList.add("nav-fixed"),o&&(o.style.cssText="opacity: 0.8; transform: translateX(-58px);")):(t.classList.remove("nav-fixed","nav-visible"),o&&(o.style.cssText="opacity: ''; transform: ''"))}),200)
window.addEventListener("scroll",n)},percent=()=>{const e=document.documentElement,t=document.body,o=window.pageYOffset||e.scrollTop,n=Math.max(t.scrollHeight,e.scrollHeight,t.offsetHeight,e.offsetHeight,t.clientHeight,e.clientHeight)-e.clientHeight,s=Math.round(o/n*100),c=document.querySelector("#nav-totop"),i=document.querySelector(".rs_show .top i"),l=document.querySelector("#percent"),a=window.scrollY+e.clientHeight>=(document.getElementById("post-comment")||document.getElementById("footer")).offsetTop
c?.classList.toggle("long",a||s>90),i?.classList.toggle("show",a||s>90),l.textContent=a||s>90?c?GLOBAL_CONFIG.lang.backtop:"":s,document.querySelectorAll(".needEndHide").forEach((e=>e.classList.toggle("hide",n-o<100)))},showTodayCard=()=>{const e=document.getElementById("todayCard"),t=document.querySelector(".topGroup")
t?.addEventListener("mouseleave",(()=>e?.classList.remove("hide")))},initObserver=()=>{const e=document.getElementById("post-comment"),t=document.getElementById("pagination"),o=document.querySelector(".comment-barrage")
e&&t&&new IntersectionObserver((e=>{e.forEach((e=>{t.classList.toggle("show-window",e.isIntersecting),GLOBAL_CONFIG.comment.commentBarrage&&(o.style.bottom=e.isIntersecting?"-200px":"0px")}))})).observe(e)},addCopyright=()=>{if(!GLOBAL_CONFIG.copyright)return
const{limit:e,author:t,link:o,source:n,info:s}=GLOBAL_CONFIG.copyright
document.body.addEventListener("copy",(c=>{c.preventDefault()
const i=window.getSelection().toString(),l=i.length>e?`${i}\n\n${t}\n${o}${window.location.href}\n${n}\n${s}`:i
c.clipboardData.setData("text",l)}))},asideStatus=()=>{const e=utils.saveToLocal.get("aside-status")
document.documentElement.classList.toggle("hide-aside","hide"===e)}
function initThemeColor(){const e=(window.scrollY||document.documentElement.scrollTop)>0?"--efu-card-bg":PAGE_CONFIG.is_post?"--efu-main":"--efu-background"
applyThemeColor(getComputedStyle(document.documentElement).getPropertyValue(e))}function applyThemeColor(e){const t=document.querySelector('meta[name="theme-color"]'),o=document.querySelector('meta[name="apple-mobile-web-app-status-bar-style"]')
t?.setAttribute("content",e),o?.setAttribute("content",e),window.matchMedia("(display-mode: standalone)").matches&&(document.body.style.backgroundColor=e)}const handleThemeChange=e=>{const t=window.globalFn?.themeChange||{}
Object.values(t).forEach((t=>t(e)))},sco={lastSayHello:"",wasPageHidden:!1,musicPlaying:!1,scrollTo(e){const t=document.getElementById(e)
if(t){const e=t.getBoundingClientRect().top+window.pageYOffset-80
window.scroll({top:e,behavior:"smooth"})}},musicToggle(e=!0){this.isMusicBind||this.musicBind()
const t=document.querySelector("#nav-music"),o=document.querySelector("meting-js"),n=document.getElementById("consoleMusic"),s=document.querySelector("#menu-music-toggle span"),c=document.querySelector("#menu-music-toggle i")
this.musicPlaying=!this.musicPlaying,t.classList.toggle("playing",this.musicPlaying),t.classList.toggle("stretch",this.musicPlaying),n?.classList.toggle("on",this.musicPlaying),"undefined"!=typeof rm&&rm?.menuItems.music[0]&&(s.textContent=this.musicPlaying?GLOBAL_CONFIG.right_menu.music.stop:GLOBAL_CONFIG.right_menu.music.start,c.className=this.musicPlaying?"solitude fas fa-pause":"solitude fas fa-play"),e&&(this.musicPlaying?o.aplayer.play():o.aplayer.pause())},musicBind(){const e=document.querySelector("#nav-music"),t=document.querySelector("#nav-music .aplayer-music"),o=document.querySelector("#nav-music .aplayer-button")
t?.addEventListener("click",(()=>{e.classList.toggle("stretch")})),o?.addEventListener("click",(()=>{this.musicToggle(!1)})),this.isMusicBind=!0},switchCommentBarrage(){const e=document.querySelector(".comment-barrage"),t=document.querySelector("#consoleCommentBarrage")
if(!e)return
const o="flex"===window.getComputedStyle(e).display
e.style.display=o?"none":"flex",t?.classList.toggle("on",!o),utils.saveToLocal.set("commentBarrageSwitch",!o,.2),rm?.menuItems.barrage&&rm.barrage(o)},switchHideAside(){const e=document.documentElement.classList,t=document.querySelector("#consoleHideAside"),o=e.contains("hide-aside")
utils.saveToLocal.set("aside-status",o?"show":"hide",1),e.toggle("hide-aside"),t.classList.toggle("on",!o)},switchKeyboard(){this.sco_keyboards=!this.sco_keyboards
const e=document.querySelector("#consoleKeyboard"),t=this.sco_keyboards?openKeyboard:closeKeyboard
e?.classList.toggle("on",this.sco_keyboards),t(),localStorage.setItem("keyboard",this.sco_keyboards),document.getElementById("keyboard-tips")?.classList.remove("show")},initConsoleState(){const e=document.querySelector("#consoleHideAside")
e&&e.classList.toggle("on",document.documentElement.classList.contains("hide-aside"))},changeSayHelloText(){const e=GLOBAL_CONFIG.aside.sayhello2,t=document.getElementById("author-info__sayhi")
let o
do{o=e[Math.floor(Math.random()*e.length)]}while(o===this.lastSayHello)
t.textContent=o,this.lastSayHello=o},switchDarkMode(){const e="dark"===document.documentElement.getAttribute("data-theme"),t=e?"light":"dark"
document.documentElement.setAttribute("data-theme",t),utils.saveToLocal.set("theme",t,.02),utils.snackbarShow(GLOBAL_CONFIG.lang.theme[t],!1,2e3),"object"==typeof rm&&rm.mode(!e)&&rm.hideRightMenu(),handleThemeChange(t)},hideTodayCard:()=>document.getElementById("todayCard").classList.add("hide"),toTop:()=>utils.scrollToDest(0),showConsole:()=>document.getElementById("console")?.classList.toggle("show",!0),hideConsole:()=>document.getElementById("console")?.classList.remove("show"),refreshWaterFall(){const e=new IntersectionObserver((e=>{e.forEach((e=>{e.isIntersecting&&setTimeout((()=>{waterfall(e.target).then((()=>{e.target.classList.add("show")}))}),300)}))}))
document.querySelectorAll(".waterfall").forEach((t=>e.observe(t)))},addRuntime(){const e=document.getElementById("runtimeshow")
e&&GLOBAL_CONFIG.runtime&&(e.innerText=utils.timeDiff(new Date(GLOBAL_CONFIG.runtime),new Date)+GLOBAL_CONFIG.lang.day)},toTalk(e){utils.scrollToDest(utils.getEleTop(document.getElementById("post-comment")),300),hpcesia.waitTwikoo((()=>{["#wl-edit",".el-textarea__inner","#veditor",".atk-textarea"].forEach((t=>{const o=document.querySelector(t)
o&&(o.value="> "+e.replace(/\n/g,"\n> ")+"\n\n",o.focus(),o.setSelectionRange(-1,-1),o.dispatchEvent(new Event("input",{bubble:!0,cancelable:!0})))})),utils.snackbarShow(GLOBAL_CONFIG.lang.totalk,!1,2e3)}))},initbbtalk(){document.querySelector("#bber-talk")&&new Swiper(".swiper-container",{direction:"vertical",loop:!0,autoplay:{delay:3e3,pauseOnMouseEnter:!0}})},addPhotoFigcaption(){document.querySelectorAll("#article-container img:not(.gallery-item img)").forEach((e=>{const t=e.getAttribute("alt")
t&&e.insertAdjacentHTML("afterend",`<div class="img-alt is-center">${utils.escapeHtml(t)}</div>`)}))},scrollToComment:()=>utils.scrollToDest(utils.getEleTop(document.getElementById("post-comment")),300),setTimeState(){const e=document.getElementById("author-info__sayhi")
if(e){const t=(new Date).getHours(),o=GLOBAL_CONFIG.aside.sayhello,n=function(){for(let e of["twikoo","WALINE_USER_META","WALINE_USER","_v_Cache_Meta","ArtalkUser"]){const t=localStorage.getItem(e)
if(t)return JSON.parse(t)}return null}(),s=n?n.nick||n.display_name:null,c=this.wasPageHidden?GLOBAL_CONFIG.aside.sayhello3.back+s:GLOBAL_CONFIG.aside.sayhello3.prefix+s,i=[{start:0,end:5,text:s?c:o.goodnight},{start:6,end:10,text:s?c:o.morning},{start:11,end:14,text:s?c:o.noon},{start:15,end:18,text:s?c:o.afternoon},{start:19,end:24,text:s?c:o.night}].find((e=>t>=e.start&&t<=e.end))
e.innerText=i.text}},tagPageActive(){const e=decodeURIComponent(window.location.pathname)
if(/\/tags\/.*?\//.test(e)){const t=e.split("/").slice(-2,-1)[0],o=document.getElementById(t)
o&&(document.querySelectorAll("a.select").forEach((e=>{e.classList.remove("select")})),o.classList.add("select"))}},categoriesBarActive(){const e=document.querySelector("#category-bar"),t=decodeURIComponent(window.location.pathname),o=t===GLOBAL_CONFIG.root
if(e){e.querySelectorAll(".category-bar-item").forEach((e=>e.classList.remove("select")))
const n=o?"category-bar-home":t.split("/").slice(-2,-1)[0],s=document.getElementById(n)
s&&s.classList.add("select")}},scrollCategoryBarToRight(){const e=document.getElementById("category-bar-items"),t=document.getElementById("category-bar-next")
if(e){const o=()=>e.scrollLeft+e.clientWidth>=e.scrollWidth-8,n=()=>{e.scroll({left:o()?0:e.clientWidth,behavior:"smooth"})}
e.addEventListener("scroll",(()=>{clearTimeout(this.timeoutId),this.timeoutId=setTimeout((()=>{t.style.transform=o()?"rotate(180deg)":""}),150)})),n()}},openAllTags(){document.querySelectorAll(".card-allinfo .card-tag-cloud").forEach((e=>e.classList.add("all-tags"))),document.getElementById("more-tags-btn")?.remove()},listenToPageInputPress(){const e=document.querySelector(".toPageGroup"),t=document.getElementById("toPageText")
if(!t)return
const o=document.getElementById("toPageButton"),n=document.querySelectorAll(".page-number"),s=+n[n.length-1].textContent
t&&1!==s?(t.addEventListener("keydown",(e=>{13===e.keyCode&&(sco.toPage(),pjax.loadUrl(o.href))})),t.addEventListener("input",(()=>{o.classList.toggle("haveValue",""!==t.value&&"0"!==t.value),+t.value>s&&(t.value=s)}))):e.style.display="none"},addNavBackgroundInit(){0!==document.documentElement.scrollTop&&document.getElementById("page-header").classList.add("nav-fixed","nav-visible")},toPage(){const e=document.querySelectorAll(".page-number"),t=parseInt(e[e.length-1].innerHTML),o=document.getElementById("toPageText"),n=parseInt(o.value)
document.getElementById("toPageButton").href=!isNaN(n)&&n<=t&&n>1?window.location.href.replace(/\/page\/\d+\/$/,"/")+"page/"+n+"/":"/"},owoBig(e){let t=document.getElementById("owo-big")
t||(t=document.createElement("div"),t.id="owo-big",document.body.appendChild(t))
document.addEventListener("mouseover",(o=>{const n=o.target,s=n.closest(e.item)
if(s&&n.closest(e.body)){const e=s.querySelector("img")?.src
e&&(t.innerHTML=`<img src="${e}" style="max-width: 100%; height: auto;">`,t.style.display="block",(e=>{const o=e.getBoundingClientRect()
t.style.left=o.left-t.offsetWidth/4+"px",t.style.top=`${o.top}px`})(s))}})),document.addEventListener("mouseout",(o=>{o.target.closest(e.item)&&o.target.closest(e.body)&&(t.style.display="none")}))},changeTimeFormat(e){e.forEach((e=>{const t=e.getAttribute("datetime")
e.textContent=utils.diffDate(t,!0),e.style.display="inline"}))},switchComments(){const e=document.getElementById("switch-btn")
if(!e)return
let t=!1
const o=document.getElementById("post-comment")
utils.addEventListenerPjax(e,"click",(()=>{o.classList.toggle("move"),t||"function"!=typeof loadTwoComment||(t=!0,loadTwoComment())}))}},hpcesia={applyLinkComment(e){const t=["#wl-edit",".el-textarea__inner","#veditor",".atk-textarea"]
utils.scrollToDest(utils.getEleTop(document.getElementById("post-comment")),300),setTimeout((()=>{t.forEach((t=>{const o=document.querySelector(t)
o&&("common"===e?(o.value="站点名称：\n站点地址：\n头像链接：\n站点描述：\n站点截图：",o.setSelectionRange(5,5)):(o.value="```yml\n- name: \n  link: \n  avatar: \n  descr: \n  siteshot: \n```",o.setSelectionRange(15,15)),o.focus(),o.dispatchEvent(new Event("input",{bubble:!0,cancelable:!0})))}))}),500)},switchHideBgImg(){const e=document.getElementById("global_bg")
"none"===e.style.backgroundImage?e.style.backgroundImage="":e.style.backgroundImage="none"},waitTwikoo(e,t=100){setTimeout((()=>{window.twikoo?e():hpcesia.waitTwikoo(e)}),t)}},addHighlight=()=>{const e=GLOBAL_CONFIG.highlight
if(!e)return
const{copy:t,expand:o,limit:n,syntax:s}=e,c="prismjs"===s,i=e.enable||t||o||n,l=1==!o?"closed":"",a="highlight.js"===s||"shiki"===s?document.querySelectorAll("figure.highlight"):document.querySelectorAll('pre[class*="language-"]')
if(!i&&!n||!a.length)return
const r=t?'<i class="solitude fas fa-copy copy-button"></i>':"<i></i>",d=n?'<i class="solitude fas fa-angles-down"></i>':"<i></i>",m=function(){this.classList.toggle("expand-done")},u=function(e){const t=e.target.classList
t.contains("expand")?(()=>{this.classList.toggle("closed")})():t.contains("copy-button")&&(e=>{const t=e.parentNode
t.classList.add("copy-true")
const o=window.getSelection(),n=document.createRange(),s=c?"pre code":"table .code pre"
var i
n.selectNodeContents(t.querySelectorAll(`${s}`)[0]),o.removeAllRanges(),o.addRange(n),document.execCommand("copy"),e.lastChild,i=GLOBAL_CONFIG.lang.copy.success,utils.snackbarShow(i,!1,2e3),o.removeAllRanges(),t.classList.remove("copy-true")})(this)},g=(e,t,o)=>{const s=document.createDocumentFragment()
if(i){const o=t.querySelector("figcaption")
let n=""
o&&(n=`<div class="caption">${o.innerHTML}</div>`,t.removeChild(o))
const c=document.createElement("div")
c.className=`highlight-tools ${l}`,c.innerHTML='<i class="solitude fas fa-angle-down expand"></i>'+e+n+r,utils.addEventListenerPjax(c,"click",u),s.appendChild(c)}if(n&&t.offsetHeight>n+30){const e=document.createElement("div")
e.className="code-expand-btn",e.innerHTML=d,utils.addEventListenerPjax(e,"click",m),s.appendChild(e)}"hl"===o?t.insertBefore(s,t.firstChild):t.parentNode.insertBefore(s,t)}
c?a.forEach((e=>{const t=e.getAttribute("data-language")||"Code",o=`<div class="code-lang">${utils.escapeHtml(t)}</div>`
utils.wrap(e,"figure",{class:"highlight"}),g(o,e)})):a.forEach((e=>{let t=e.getAttribute("class").split(" ")[1]
"plain"!==t&&void 0!==t||(t="Code")
const o=`<div class="code-lang">${utils.escapeHtml(t)}</div>`
g(o,e,"hl")}))}
class toc{static init(){const e=document.getElementById("card-toc")
if(!e||!e.querySelector(".toc a"))return void(e.style.display="none")
const t=document.querySelectorAll(".toc a")
t.forEach((e=>{e.addEventListener("click",(e=>{e.preventDefault(),utils.scrollToDest(utils.getEleTop(document.getElementById(decodeURI(("toc-text"===e.target.className?e.target.parentNode.hash:e.target.hash).replace("#","")))),300)}))})),this.active(t)}static active(e){const t=document.getElementById("article-container"),o=document.getElementById("toc-content"),n=t.querySelectorAll("h1,h2,h3,h4,h5,h6")
let s=""
const c=t=>{if(0===t)return!1
let c=""
if(n.forEach(((e,o)=>{t>utils.getEleTop(e)-80&&(c=o)})),s===c)return
s=c,document.querySelectorAll(".toc .active").forEach((e=>{e.classList.remove("active")}))
const i=e[s]
if(i){let t=e[s].parentNode
for(i.classList.add("active"),(e=>{const t=e.getBoundingClientRect().top,n=o.scrollTop
t>document.documentElement.clientHeight-100&&(o.scrollTop=n+150),t<100&&(o.scrollTop=n-150)})(i);!t.matches(".toc");t=t.parentNode)t.matches("li")&&t.classList.add("active")}}
window.tocScrollFn=utils.throttle((()=>{const e=window.scrollY||document.documentElement.scrollTop
c(e)}),100),window.addEventListener("scroll",tocScrollFn)}}class ref{static init(){document.querySelectorAll("a.ref").forEach((e=>{e.addEventListener("click",(e=>{e.preventDefault(),utils.scrollToDest(utils.getEleTop(document.getElementById(decodeURI(e.target.hash.replace("#","")))),300)}))}))}}class tabs{static init(){this.clickFnOfTabs(),this.backToTop()}static clickFnOfTabs(){document.querySelectorAll("#article-container .tab > button").forEach((e=>{e.addEventListener("click",(function(){const e=this.parentNode
if(!e.classList.contains("active")){const t=e.parentNode.nextElementSibling,o=utils.siblings(e,".active")[0]
o&&o.classList.remove("active"),e.classList.add("active")
const n=this.getAttribute("data-href").replace("#","");[...t.children].forEach((e=>{e.classList.toggle("active",e.id===n)}))}}))}))}static backToTop(){document.querySelectorAll("#article-container .tabs .tab-to-top").forEach((e=>{e.addEventListener("click",(function(){utils.scrollToDest(utils.getEleTop(this.parentElement.parentElement.parentNode),300)}))}))}static lureAddListener(){if(!GLOBAL_CONFIG.lure)return
const e=document.title
document.addEventListener("visibilitychange",(()=>{const{lure:t}=GLOBAL_CONFIG
document.title="hidden"===document.visibilityState?t.jump:t.back,"visible"===document.visibilityState&&setTimeout((()=>{document.title=e}),2e3)}))}static expireAddListener(){const{expire:e}=GLOBAL_CONFIG
if(!e)return
const t=document.querySelectorAll(".post-meta-date time"),o=t.length?t[t.length-1]:document.querySelector(".datatime")
if(!o)return
const n=Math.ceil(((new Date).getTime()-new Date(o.getAttribute("datetime")).getTime())/1e3/60/60/24)
if(e.time>n)return
const s=document.createElement("div")
s.className="expire",s.innerHTML=`<i class="solitude fas fa-circle-exclamation"></i>${e.text_prev}${-(e.time-n)}${e.text_next}`,document.getElementById("article-container").insertAdjacentElement("top"===e.position?"afterbegin":"beforeend",s)}}const scrollFnToDo=()=>{const{toc:e}=PAGE_CONFIG
if(e){const e=document.getElementById("card-toc"),t=e.querySelector(".toc-content"),o=(t.querySelectorAll(".toc-link"),e.querySelector(".toc-percentage"),t.classList.contains("is-expand"),t=>{const o=t.target.closest(".toc-link")
o&&(t.preventDefault(),utils.scrollToDest(utils.getEleTop(document.getElementById(decodeURI(o.getAttribute("href")).replace("#",""))),300),window.innerWidth<900&&e.classList.remove("open"))})
utils.addEventListenerPjax(t,"click",o)}},forPostFn=()=>{scrollFnToDo()}
window.refreshFn=()=>{const{is_home:e,is_page:t,page:o,is_post:n}=PAGE_CONFIG,{runtime:s,lazyload:c,lightbox:i,randomlink:l,covercolor:a,post_ai:r,lure:d,expire:m}=GLOBAL_CONFIG,u=(e||n?".post-meta-date time":".datatime")+", .webinfo-item time"
document.body.setAttribute("data-type",o),sco.changeTimeFormat(document.querySelectorAll(u)),s&&sco.addRuntime(),[scrollFn,sidebarFn,sco.addPhotoFigcaption,sco.setTimeState,sco.tagPageActive,sco.categoriesBarActive,sco.listenToPageInputPress,sco.addNavBackgroundInit,sco.refreshWaterFall].forEach((e=>e())),c.enable&&utils.lazyloadImg(),i&&utils.lightbox(document.querySelectorAll("#article-container img:not(.flink-avatar,.gallery-group img, .no-lightbox)")),l&&randomLinksList(),r&&n&&ai.init(),sco.switchComments(),initObserver(),e&&showTodayCard(),"function"==typeof updatePostsBasedOnComments&&updatePostsBasedOnComments(),(n||t)&&(addHighlight(),tabs.init(),ref.init()),n&&m&&tabs.expireAddListener(),a.enable&&coverColor(),PAGE_CONFIG.toc&&toc.init(),d&&tabs.lureAddListener(),forPostFn()},document.addEventListener("DOMContentLoaded",(()=>{[addCopyright,window.refreshFn,asideStatus,()=>window.onscroll=percent,sco.initConsoleState].forEach((e=>e()))})),document.addEventListener("visibilitychange",(()=>{document.hidden&&(sco.wasPageHidden=!0)})),window.onkeydown=e=>{const{keyCode:t,ctrlKey:o,shiftKey:n}=e;(123===t||o&&n&&67===t)&&utils.snackbarShow(GLOBAL_CONFIG.lang.f12,!1,3e3),27===t&&sco.hideConsole()},document.addEventListener("copy",(()=>{utils.snackbarShow(GLOBAL_CONFIG.lang.copy.success,!1,3e3)}))
