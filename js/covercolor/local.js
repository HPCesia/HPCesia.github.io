const coverColor=()=>{const e=PAGE_CONFIG.color||document.getElementById("post-cover")?.src
if(e)return localColor(e)
setDefaultThemeColors()},setDefaultThemeColors=()=>{Object.entries({"--efu-main":"var(--efu-theme)","--efu-main-op":"var(--efu-theme-op)","--efu-main-op-deep":"var(--efu-theme-op-deep)","--efu-main-none":"var(--efu-theme-none)"}).forEach((([e,o])=>{document.documentElement.style.setProperty(e,o)})),initThemeColor()},localColor=e=>{const o=new ColorThief,t=new Image
t.crossOrigin="Anonymous",t.onload=()=>setThemeColors(rgbToHex(o.getColor(t))),t.onerror=()=>console.error("Image Error"),t.src=e},rgbToHex=([e,o,t])=>"#"+[e,o,t].map((e=>Math.floor(.8*e).toString(16).padStart(2,"0"))).join(""),setThemeColors=(e,o=null,t=null,r=null)=>{if(!e)return setDefaultThemeColors()
const n={"--efu-main":e,"--efu-main-op":e+"23","--efu-main-op-deep":e+"dd","--efu-main-none":e+"00"}
Object.entries(n).forEach((([e,o])=>{document.documentElement.style.setProperty(e,o)})),o&&t&&r&&Math.round((299*parseInt(o)+587*parseInt(t)+114*parseInt(r))/1e3)<125&&(adjustCardStyles(),e=LightenDarkenColor(e,50),setThemeColors(e)),document.getElementById("coverdiv").classList.add("loaded"),initThemeColor()},adjustCardStyles=()=>{const e=document.getElementsByClassName("card-content")
Array.from(e).forEach((e=>{e.style.setProperty("--efu-card-bg","var(--efu-white)")}))
const o=document.getElementsByClassName("author-info__sayhi")
Array.from(o).forEach((e=>{e.style.setProperty("background","var(--efu-white-op)"),e.style.setProperty("color","var(--efu-white)")}))}
