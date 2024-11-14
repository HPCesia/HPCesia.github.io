const coverColor=()=>{const e=PAGE_CONFIG.color
if(e)setThemeColors(e)
else{const e=document.getElementById("post-cover")?.src
e?handleApiColor(e):setDefaultThemeColors()}},handleApiColor=e=>{const o=JSON.parse(localStorage.getItem("Solitude"))||{postcolor:{}},t=o.postcolor[e]?.value
t?setThemeColors(t):img2color(e)},img2color=e=>{fetch(`${e}?imageAve`).then((e=>{if(!e.ok)throw new Error("Network response was not ok")
return e.json()})).then((({RGB:o})=>{const t=`#${o.slice(2)}`
setThemeColors(t),cacheColor(e,t)})).catch((e=>console.error("Error fetching color:",e)))},setThemeColors=e=>{if(!e)return setDefaultThemeColors()
const[o,t,r]=e.match(/\w\w/g).map((e=>parseInt(e,16))),l={main:e,op:`${e}23`,opDeep:`${e}dd`,none:`${e}00`}
Object.entries(l).forEach((([e,o])=>{document.documentElement.style.setProperty(`--efu-${e}`,o)})),adjustBrightness(o,t,r),document.getElementById("coverdiv").classList.add("loaded"),initThemeColor()},setDefaultThemeColors=()=>{["--efu-theme","--efu-theme-op","--efu-theme-op-deep","--efu-theme-none"].forEach(((e,o)=>{document.documentElement.style.setProperty(["--efu-main","--efu-main-op","--efu-main-op-deep","--efu-main-none"][o],`var(${e})`)})),initThemeColor()},cacheColor=(e,o)=>{const t=JSON.parse(localStorage.getItem("Solitude"))||{postcolor:{}}
t.postcolor[e]={value:o,expiration:Date.now()+coverColorConfig.time},localStorage.setItem("Solitude",JSON.stringify(t))},adjustBrightness=(e,o,t)=>{Math.round((299*e+587*o+114*t)/1e3)<125&&(document.querySelectorAll(".card-content").forEach((e=>{e.style.setProperty("--efu-card-bg","var(--efu-white)")})),document.querySelectorAll(".author-info__sayhi").forEach((e=>{e.style.setProperty("background","var(--efu-white-op)"),e.style.setProperty("color","var(--efu-white)")})))}
