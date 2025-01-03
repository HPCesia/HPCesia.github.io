const ignoredEvent=function(){const t={}
let e,n
return function(o,i,s){n=(new Date).getTime(),e=t[s=s||"ignored event"]?n-t[s]:n,e>i&&(t[s]=n,o())}}(),fc=(t,e)=>{const n=[]
for(let o=0;o<t.length;o++){const i=t[o]
e(i)&&n.push(i)}return n},overLappingBox=(t,e)=>!(t.right<e.left||t.left>e.right||t.bottom<e.top||t.top>e.bottom),almostOverLapping=(t,e)=>{const n=t.getBoundingClientRect(),o=e.getBoundingClientRect()
return overLappingBox(n,o)&&Math.abs(n.left-o.left)+Math.abs(n.right-o.right)<.5*Math.max(n.width,o.width)&&Math.abs(n.bottom-o.bottom)+Math.abs(n.top-o.top)<.5*Math.max(n.height,o.height)},gr=window.typstGetRelatedElements=t=>{let e=t.relatedElements
return null==e&&(e=t.relatedElements=searchIntersections(t)),e},getRelatedElements=t=>gr(t.target),findAncestor=(t,e)=>{for(;t&&!t.classList.contains(e);)t=t.parentElement
return t}
function findGlyphListForText(t){const e=findAncestor(t,"typst-text")
return e&&fc(e.children,(t=>"use"===t.tagName))}const searchIntersections=function(t){const e=findAncestor(t,"typst-group")
return e&&fc(e.children,(e=>almostOverLapping(e,t)))}
function nextNode(t){if(t.hasChildNodes())return t.firstChild
for(;t&&!t.nextSibling;)t=t.parentNode
return t?t.nextSibling:null}function getRangeSelectedNodes(t,e){var n=t.startContainer,o=t.endContainer
if(n==o){if(e(n))return[n]
if(e(n.parentElement))return[n.parentElement]}for(var i=[];n&&n!=o;)e(n=nextNode(n))&&i.push(n)
for(n=t.startContainer;n&&n!=t.commonAncestorContainer;)e(n)&&i.unshift(n),n=n.parentNode
return i}function getSelectedNodes(t){if(window.getSelection){var e=window.getSelection()
if(!e.isCollapsed){if(1===e.rangeCount)return getRangeSelectedNodes(e.getRangeAt(0),t)
let n=[]
for(let o=0,i=e.rangeCount;o<i;o++)n.push(...getRangeSelectedNodes(e.getRangeAt(o),t))
return n}}return[]}function getGlyphLenShape(t){return t.map((t=>{const e=t.getAttribute("href"),n=document.getElementById(e.slice(1))
return 1+Number.parseInt(n?.getAttribute("data-liga-len")||"0")}))}function getGlyphAdvanceShape(t){return t.map((t=>Number.parseInt(t.getAttribute("x")||"0")))}const linkmove=t=>ignoredEvent((()=>gr(t)?.forEach((t=>t.classList.add("hover")))),200,"mouse-move"),linkleave=t=>gr(t)?.forEach((t=>t.classList.remove("hover"))),semaLinkEnter=(t,e)=>()=>{const n=e.parentElement?.getAttribute("href")||e.parentElement?.getAttribute("xlink:href")
t.getAttribute("href")!==n&&t.setAttribute("href",n||"")}
window.typstProcessSvg=function(t,e){for(var n=t.getElementsByClassName("pseudo-link"),o=0;o<n.length;o++){var i=n[o]
i.addEventListener("mousemove",(t=>linkmove(t.target))),i.addEventListener("mouseleave",(t=>linkleave(t.target)))}if((e?.layoutText??!0)&&setTimeout((()=>{const e=document.createElement("style")
e.innerHTML=".tsel { font-family: monospace; text-align-last: left !important; -moz-text-size-adjust: none; -webkit-text-size-adjust: none; text-size-adjust: none; overflow: hidden; }\n.tsel span { position: relative !important; width: fit-content !important;  }",document.getElementsByTagName("head")[0].appendChild(e),window.layoutText(t)}),0),t.addEventListener("click",(t=>{let e=t.target
for(;e;){const n=e.getAttribute("data-span")
if(n){console.log("source-span of this svg element",n)
const e=document.body||document.firstElementChild,o=e.getBoundingClientRect(),i=window.innerWidth||0
return void triggerRipple(e,t.clientX-o.left+.015*i,t.clientY-o.top+.015*i,"typst-debug-react-ripple","typst-debug-react-ripple-effect .4s linear")}e=e.parentElement}})),window.location.hash){const e=window.location.hash.split("-")
if(2===e.length&&"#loc"===e[0]){const n=e[1].split("x")
if(3===n.length){const e=Number.parseInt(n[0]),o=Number.parseFloat(n[1]),i=Number.parseFloat(n[2])
window.handleTypstLocation(t,e,o,i)}}}}
const LB="\n".codePointAt(0)
function triggerRipple(t,e,n,o,i){const s=document.createElement("div")
s.className=o,s.style.left=`${e}px`,s.style.top=`${n}px`,t.appendChild(s),s.style.animation=i,s.onanimationend=()=>{t.removeChild(s)}}window.layoutText=async function(t){const e=Array.from(t.querySelectorAll(".tsel, .typst-content-hint, .pseudo-link")),n=performance.now(),o=document.createElementNS("http://www.w3.org/1999/xhtml","canvas").getContext("2d")
o.font="128px monospace"
const i=o.measureText("A").width,s=t.getBoundingClientRect(),r=s.left+window.scrollX,l=s.top+window.scrollY,a=(t,e,n)=>{var o=t.getScreenCTM()
return o?{x:o.a*e+o.c*n+o.e-r,y:o.b*e+o.d*n+o.f-l}:{x:0,y:0}}
let c
const d=t.parentElement
if(d)if(t.nextElementSibling?.classList.contains("typst-semantic-layer"))c=t.nextElementSibling
else{c=document.createElement("div")
const e=document.createElement("div")
e.style.position="relative",d.replaceChild(e,t),e.appendChild(t),e.appendChild(c),c.classList.add("typst-semantic-layer"),c.style.position="absolute",c.style.left="0",c.style.top="0",c.style.zIndex="1",c.style.float="left"
const n=t.getAttribute("width")
c.style.width=`${n}px`
const o=t.getAttribute("height")
c.style.height=`${o}px`}else c=void 0
let p={left:0,right:0,bottom:0,top:0},u=[]
const h=(t,e="span")=>{const n=document.createElement(e),o=t.getBBox(),i=a(t,o.x,o.y),s=a(t,o.x+o.width,o.y+o.height),r=Math.min(i.x,s.x)+window.scrollX,l=Math.min(i.y,s.y)+window.scrollY,c=Math.abs(i.x-s.x),d=Math.abs(i.y-s.y),h=d/2,m={left:r-h,top:l-h,right:r+c+h,bottom:l+d+h}
return overLappingBox(p,m)?(p.left=Math.min(p.left,m.left),p.top=Math.min(p.top,m.top),p.right=Math.max(p.right,m.right),p.bottom=Math.max(p.bottom,m.bottom)):(u.push([n,p]),p=m),n.classList.add("tsel"),n.style.position="absolute",n.style.left=`${r}px`,n.style.top=`${l}px`,n.style.width=`${c}px`,n.style.height=`${d}px`,n},m=(t,o)=>{const s=e.slice(t,o)
for(let t of s){const e=t.parentElement
if(c){if(t.classList.contains("typst-content-hint")){const e=h(t)
e.style.fontSize="0.1px",e.style.width="0.1px",e.style.height="0.1px"
const n=Number.parseInt(t.getAttribute("data-hint")||"0",16)||LB
e.innerHTML=n===LB?"<br/>":`&#x${n.toString(16)};`,c.append(e)
continue}if(t.classList.contains("pseudo-link")){const e=h(t,"a")
e.style.cursor="pointer",e.addEventListener("mousemove",(()=>linkmove(t))),e.addEventListener("mouseleave",(()=>linkleave(t))),e.onclick=()=>{t.dispatchEvent(new MouseEvent("click",{bubbles:!0}))},e.addEventListener("mouseenter",(()=>{const n=t.parentElement?.getAttribute("href")||t.parentElement?.getAttribute("xlink:href")
e.getAttribute("href")!==n&&e.setAttribute("href",n||"")})),c.append(e)
continue}}if(t.style.fontSize){const n=[],o=t.innerText,s=i*Number.parseFloat(t.style.fontSize)/128
{const e=findGlyphListForText(t)
if(!e)continue
const i=getGlyphLenShape(e),r=getGlyphAdvanceShape(e).map((t=>t/16))
let l,a=!1,c=0,d=0,p=0,u=0
for(let t of o){if(c>=r.length){a=!0
break}let e=r[c]
i[c]>1&&(e+=d*s),d++,d>=i[c]&&(c++,d=0)
const o=document.createElement("span")
o.textContent=t,o.classList.add("tsel-tok"),l&&(l.style.letterSpacing=e-u-s+"px"),l=o,u=e,n.push(o),p+=1}if(a)continue}if(t.innerHTML="",c){const o=Number.parseFloat(t.style.fontSize||"0"),i=Math.abs(a(e,0,o).y-a(e,0,0).y)
{const t=i/o
for(let e of n)e.style.letterSpacing=Number.parseFloat(e.style.letterSpacing||"0")*t+"px"}const s=h(e)
s.style.fontSize=`${i}px`,s.append(...n),c.append(s)}else t.append(...n)}}console.log(`layoutText ${e.length} elements used since ${performance.now()-n} ms`)}
for(let t=0;t<e.length;t+=100){const e=t
await new Promise((t=>{setTimeout((()=>{m(e,e+100),t(void 0)}))}))}if(c&&0!=p.right&&u.push([null,p]),c){const t=performance.now()
let e=0
for(let[t,n]of u){if(e<u.length-1){let t=u[e+1][1],o=n.left<t.left,i=n.top<t.top,s=n.right<t.right,r=n.bottom<t.bottom
o!=s&&(n.left=Math.min(n.left,t.left),n.right=Math.max(n.right,t.right)),i!=r&&(n.top=Math.min(n.top,t.top),n.bottom=Math.max(n.bottom,t.bottom))}const o=document.createElement("span")
o.style.zIndex="-1",o.style.position="absolute",o.style.left=`${n.left}px`,o.style.top=`${n.top}px`,o.style.width=n.right-n.left+"px",o.style.height=n.bottom-n.top+"px",o.dir="ltr",o.style.unicodeBidi="isolated",c.insertBefore(o,t),e++}console.log(`layout paragraph used since ${performance.now()-t} ms`)}},window.handleTypstLocation=function(t,e,n,o,i){if(t.classList.contains("typst-semantic-layer"))return(t=t.firstElementChild)&&window.handleTypstLocation(t,e,n,o,i)
const s=i?.behavior||"smooth",r=window.assignSemaHash||((t,e,n)=>{location.hash=`loc-${t}x${e.toFixed(2)}x${n.toFixed(2)}`})
let l=t
const a=t=>{const i=.01*window.innerWidth,a=.01*window.innerHeight,c=Number.parseFloat(l.getAttribute("data-width")||l.getAttribute("width")||"0")||0,d=Number.parseFloat(l.getAttribute("data-height")||l.getAttribute("height")||"0")||0,p=l.getBoundingClientRect(),u={left:p.left,top:p.top,width:p.width,height:p.height},h=7*i,m=38.2*a,g=t.transform?.baseVal?.consolidate()?.matrix
g&&(u.left+=g.e/c*u.width,u.top+=g.f/d*u.height)
const f=document.body||document.firstElementChild,y=f.getBoundingClientRect(),b=u.left-y.left+n/c*u.width-h,w=u.top-y.top+o/d*u.height-m,v=b+h,x=w+m
window.scrollTo({behavior:s,left:b,top:w}),"instant"!==s&&triggerRipple(f,v,x,"typst-jump-ripple","typst-jump-ripple-effect .4s linear"),r(e,n,o)}
if(i?.isDom)return void a(l)
if(l=findAncestor(t,"typst-doc"),!l)return void console.warn("no typst-doc or typst-svg-page found",t)
const c=l.children
let d=0
for(let t=0;t<c.length;t++)("g"===c[t].tagName||"stub"===c[t].tagName)&&d++,d==e&&a(c[t])}
var scriptTag=document.currentScript
if(scriptTag){console.log("new svg util updated 37  ",performance.now())
const t=findAncestor(scriptTag,"typst-doc")
t&&window.typstProcessSvg(t)}function findLinkInSvg(t,e,n){const o=t.getBoundingClientRect()
if(!(e[0]<o.left-1||e[0]>o.right+1||e[1]<o.top-1||e[1]>o.bottom+1)){if(t.classList.contains("pseudo-link"))return t
for(let o=0;o<t.children.length;o++){const i=findLinkInSvg(t.children[o],e,n)
if(i)return i}}}window.typstBindSemantics=function(t,e,n){"typstBindCustomSemantics"in window&&window.typstBindCustomSemantics(t,e,n),n.addEventListener("mousemove",(t=>{ignoredEvent((()=>{if("A"===t.target?.tagName){const n=t.target
if(n.cachedTarget)return
const o=findLinkInSvg(e,[t.clientX,t.clientY],t.target)
if(o){o.dispatchEvent(new MouseEvent("mousemove",{bubbles:!0}))
const t=semaLinkEnter(o,n)
n.addEventListener("mouseenter",(()=>{o.dispatchEvent(new MouseEvent("mouseenter",{bubbles:!0})),t()})),n.addEventListener("mousemove",(()=>{o.dispatchEvent(new MouseEvent("mousemove",{bubbles:!0})),linkmove(o)})),n.addEventListener("mouseleave",(()=>{o.dispatchEvent(new MouseEvent("mouseleave",{bubbles:!0})),linkleave(o)}))}}}),100,"mouseenter")}))}
