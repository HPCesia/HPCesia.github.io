window.addEventListener("load",(()=>{let e=[]
const t=document.getElementById("search-mask"),n=document.querySelector("#local-search .search-dialog")
window.openSearch=()=>{utils.animateIn(t,"to_show 0.5s"),n.style.display="flex",setTimeout((()=>{document.querySelector("#local-search .search-box-input").focus()}),100),document.addEventListener("keydown",(function e(t){"Escape"===t.code&&(s(),document.removeEventListener("keydown",e))})),c(),window.addEventListener("resize",c)}
const c=()=>{window.innerWidth<768&&n.style.setProperty("--search-height",window.innerHeight+"px")},s=()=>{utils.animateOut(n,"search_close .5s"),utils.animateOut(t,"to_hide 0.5s"),window.removeEventListener("resize",c)};(()=>{const e=document.querySelectorAll("#local-search .tag-list")
e.length>0&&e.forEach((e=>e.addEventListener("click",(e=>s()))))})()
document.addEventListener("keydown",(function(e){e.ctrlKey&&"k"===e.key&&(e.preventDefault(),openSearch())}))
t.addEventListener("click",s),utils.addEventListenerPjax(document.querySelector("#local-search .search-close-button"),"click",s)
const a=()=>{utils.addEventListenerPjax(document.querySelector("#search-button > .search"),"click",openSearch),GLOBAL_CONFIG.right_menu&&document.getElementById("menu-search").addEventListener("click",(function(){rm.hideRightMenu(),openSearch()
let e=document.getElementsByClassName("search-box-input")[0],t=document.createEvent("HTMLEvents")
t.initEvent("input",!0,!0),e.value=selectTextNow,e.dispatchEvent(t)}))}
a()
let o="",i=0
let l=[]
function r(){const t=document.getElementById("search-results")
document.getElementById("search-input").addEventListener("input",(function(n){t.innerHTML="",o=this.value.trim(),""!==o?(l=function(t){const n=new RegExp(t.split("").join(".*"),"i")
return e.filter((e=>n.test(e.title)||n.test(e.content)))}(o),d(l,i),function(e){const t=Math.ceil(e/10),n=document.getElementById("search-pagination")
n.innerHTML=""
const c=document.createElement("ul")
c.className="pagination-list"
for(let e=0;e<t;e++){const t=document.createElement("li")
t.className="pagination-item",t.textContent=e+1,e===i&&t.classList.add("select"),t.addEventListener("click",(function(){i=e,d(l,e),document.querySelectorAll(".pagination-item").forEach((function(e){e.classList.remove("select")})),t.classList.add("select")})),c.appendChild(t)}n.appendChild(c)}(l.length)):function(){const e=document.getElementById("search-results"),t=document.getElementById("search-pagination"),n=document.getElementById("search-tips")
e.innerHTML="",t.innerHTML="",n.innerHTML=""}()}))}function d(e,t){const n=document.getElementById("search-results")
n.innerHTML=""
const c=document.getElementById("search-tips")
c.innerHTML=""
const s=10*t,a=s+10
if(!e.length){const e=document.createElement("span")
return e.className="search-result-empty",e.textContent=GLOBAL_CONFIG.lang.search.empty.replace(/\$\{query}/,o),void n.appendChild(e)}e.slice(s,a).forEach((function(e){const t=document.createElement("li")
t.className="search-result-item"
const c=document.createElement("a")
c.className="search-result-title",c.href=e.link,c.innerHTML=function(e,t){const n=new RegExp(`(${t.split(" ").join("|")})`,"gi")
return e.replace(n,"<em>$1</em>")}(e.title,o),t.appendChild(c),n.appendChild(t)}))
const i=document.createElement("span")
i.className="search-result-count",i.innerHTML=GLOBAL_CONFIG.lang.search.count.replace(/\$\{count}/,e.length),c.appendChild(i)}fetch(GLOBAL_CONFIG.localsearch.path).then((e=>e.text())).then((t=>{let n=(new DOMParser).parseFromString(t,"text/xml").getElementsByTagName("entry")
for(let t=0;t<n.length;t++){let c=n[t],s=c.getElementsByTagName("title")[0].textContent,a=c.getElementsByTagName("url")[0].textContent,o=c.getElementsByTagName("content")[0].textContent
e.push({title:s,link:a,content:o})}})).catch((e=>console.error("Error loading search data:",e))),r(),window.addEventListener("DOMContentLoaded",(e=>{r()})),window.addEventListener("pjax:complete",(()=>{a()}))}))
