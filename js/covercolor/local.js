const coverColor=()=>{const e=PAGE_CONFIG.color||document.getElementById("post-cover")?.src
e?localColor(e):setDefaultThemeColors()},setDefaultThemeColors=()=>{Object.entries({"--efu-main":"var(--efu-theme)","--efu-main-op":"var(--efu-theme-op)","--efu-main-op-deep":"var(--efu-theme-op-deep)","--efu-main-none":"var(--efu-theme-none)"}).forEach((([e,o])=>{document.documentElement.style.setProperty(e,o)})),initThemeColor()},localColor=e=>{const o=new ColorThief,t=new Image
t.crossOrigin="Anonymous",t.onload=()=>{const e=o.getColor(t)
setThemeColors(rgbToHex(e),...e)},t.onerror=()=>console.error("Image Error"),t.src=e},rgbToHex=([e,o,t])=>"#"+[e,o,t].map((e=>Math.floor(.8*e).toString(16).padStart(2,"0"))).join(""),setThemeColors=(e,o=null,t=null,r=null)=>{if(!e)return setDefaultThemeColors()
const n={"--efu-main":e,"--efu-main-op":e+"23","--efu-main-op-deep":e+"dd","--efu-main-none":e+"00"}
Object.entries(n).forEach((([e,o])=>{document.documentElement.style.setProperty(e,o)})),null!==o&&null!==t&&null!==r&&Math.round((299*o+587*t+114*r)/1e3)<125&&(adjustCardStyles(),e=LightenDarkenColor(e,50),setThemeColors(e)),document.getElementById("coverdiv").classList.add("loaded"),initThemeColor()},LightenDarkenColor=(e,o)=>{let t=!1
"#"===e[0]&&(e=e.slice(1),t=!0)
let r=parseInt(e,16),n=(r>>16)+o,l=(r>>8&255)+o,a=(255&r)+o
return n=Math.max(Math.min(n,255),0),l=Math.max(Math.min(l,255),0),a=Math.max(Math.min(a,255),0),(t?"#":"")+((1<<24)+(n<<16)+(l<<8)+a).toString(16).slice(1)},adjustCardStyles=()=>{document.querySelectorAll(".card-content").forEach((e=>{e.style.setProperty("--efu-card-bg","var(--efu-white)")})),document.querySelectorAll(".author-info__sayhi").forEach((e=>{e.style.setProperty("background","var(--efu-white-op)"),e.style.setProperty("color","var(--efu-white)")}))}
