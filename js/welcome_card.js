let ipLocation
function getDistance(a,e,t,c){const{sin:o,cos:i,asin:s,PI:n,hypot:r}=Math
let p=(a,e)=>(a*=n/180,{x:i(e*=n/180)*i(a),y:i(e)*o(a),z:o(e)}),b=p(a,e),k=p(t,c),d=2*s(r(b.x-k.x,b.y-k.y,b.z-k.z)/2)*6371
return Math.round(d)}function showWelcome(){if(!ipLocation||!ipLocation.data)return void console.error("ipLocation data is not available.")
let a,e,t=getDistance(118.1,24.44,ipLocation.data.lng,ipLocation.data.lat),c=ipLocation.data.country
ipLocation.ip
switch(ipLocation.data.country){case"日本":a="よろしく，一起去看樱花吗"
break
case"美国":a="Let us live in peace!"
break
case"英国":a="想同你一起夜乘伦敦眼"
break
case"俄罗斯":a="干了这瓶伏特加！"
break
case"法国":a="C'est La Vie"
break
case"德国":a="Die Zeit verging im Fluge."
break
case"澳大利亚":a="一起去大堡礁吧！"
break
case"加拿大":a="拾起一片枫叶赠予你"
break
case"冰岛":a="许多人未曾谋面的故乡"
break
case"中国":switch(c=ipLocation.data.prov+" "+ipLocation.data.city+" "+ipLocation.data.district,ipLocation.data.prov){case"北京市":a="北——京——欢迎你~~~"
break
case"上海市":a="走在外滩，感受历史与现代的交融。"
break
case"广东省":switch(ipLocation.data.city){case"广州市":a="看小蛮腰，喝早茶了嘛~"
break
case"深圳市":a="今天你逛商场了嘛~"
break
default:a="带你感受广东的热情与美食！"}break
case"浙江省":switch(ipLocation.data.city){case"杭州市":a="西湖美景，三月天~"
break
case"宁波市":a="来宁波，感受大海的气息。"
break
default:a="这里是浙江，充满江南的韵味！"}break
case"四川省":switch(ipLocation.data.city){case"成都市":a="宽窄巷子，成都慢生活。"
break
case"绵阳市":a="享受科技城的宁静与创新。"
break
default:a="来四川，品麻辣火锅，赏壮丽山河。"}break
case"福建省":switch(ipLocation.data.city){case"厦门市":a="鼓浪屿听海，厦门美食让人流连忘返。"
break
case"福州市":a="有福之州，来此感受千年古城。"
break
default:a="福建山水如画，美景无处不在。"}break
case"山东省":switch(ipLocation.data.city){case"青岛市":a="来青岛喝啤酒，看大海吧！"
break
case"济南市":a="泉城济南，四面荷花三面柳。"
break
default:a="山东好客，欢迎来感受齐鲁文化！"}break
case"江苏省":switch(ipLocation.data.city){case"南京市":a="六朝古都南京，历史与现代的碰撞。"
break
case"苏州市":a="来苏州，感受园林之美。"
break
default:a="水乡泽国，江南佳丽地。"}break
case"河北省":a="燕赵大地，英雄辈出的河北，等你探索！"
break
case"河南省":switch(ipLocation.data.city){case"郑州市":a="中原大地，郑州是交通枢纽与历史重镇。"
break
case"洛阳市":a="千年古都洛阳，牡丹花开的城市。"
break
default:a="这里是河南，历史悠久文化灿烂。"}break
case"湖南省":if("长沙市"===ipLocation.data.city)a="热辣长沙，吃小龙虾逛黄兴路步行街。"
else a="湖南，烟雨迷蒙的湘江流过这片土地。"
break
case"湖北省":if("武汉市"===ipLocation.data.city)a="来大武汉，过长江大桥，吃热干面！"
else a="湖北，长江中游的明珠，风景秀丽。"
break
case"安徽省":if("合肥市"===ipLocation.data.city)a="创新之城合肥，科教文化汇聚地。"
else a="安徽山水，黄山、九华山欢迎你。"
break
case"广西壮族自治区":switch(ipLocation.data.city){case"桂林市":a="桂林山水甲天下，风景如画。"
break
case"南宁市":a="绿城南宁，宜居宜游。"
break
default:a="广西山清水秀，民俗风情浓郁。"}break
case"贵州省":a="来贵州，品茅台，赏黄果树瀑布。"
break
case"云南省":switch(ipLocation.data.city){case"昆明市":a="春城昆明，四季如春，风景秀丽。"
break
case"大理市":a="苍山洱海，大理古城，你来了就不想走。"
break
default:a="云南风景独特，风情万种。"}break
case"西藏自治区":a="世界屋脊西藏，神秘而纯净。"
break
case"新疆维吾尔自治区":a="辽阔新疆，民族风情与壮丽景观并存。"
break
case"内蒙古自治区":a="草原辽阔的内蒙古，等你来策马奔腾。"
break
case"宁夏回族自治区":a="宁夏，塞上江南，黄河流经的美丽地方。"
break
case"海南省":a="阳光、沙滩、椰风海韵，欢迎来海南度假。"
break
default:a="带我去你的城市逛逛吧！"}break
default:a="带我去你的国家逛逛吧"}let o=new Date
e=o.getHours()>=5&&o.getHours()<11?"<span>🌤️ 早上好，一日之计在于晨</span>":o.getHours()>=11&&o.getHours()<13?"<span>☀️ 中午好，记得午休喔~</span>":o.getHours()>=13&&o.getHours()<17?"<span>🕞 下午好，饮茶先啦！</span>":o.getHours()>=17&&o.getHours()<19?"<span>🚶‍♂️ 即将下班，记得按时吃饭~</span>":o.getHours()>=19&&o.getHours()<24?"<span>🌙 晚上好，夜生活嗨起来！</span>":"夜深了，早点休息，少熬夜"
let i=document.getElementById("welcome-info")
i&&(i.innerHTML=`欢迎来自 <b><span style="color: var(--efu-main)">${c}</span></b> 的朋友💖<br>当前位置距博主约 <b><span style="color: var(--efu-main)">${t.toFixed(2)}</span></b> 公里！<br>${e}<br>Tip：<b><span style="font-size: 15px;">${a}</span></b>`)}function handlePjaxComplete(){isHomePage()&&showWelcome()}function isHomePage(){return"/"===window.location.pathname||"/index.html"===window.location.pathname}fetch("https://api.76.al/api/ip/query?key=xeaxcXqeHL3DsdRRNscIfne6hf").then((a=>{if(!a.ok)throw new Error("Network response was not ok")
return a.json()})).then((a=>{ipLocation=a,isHomePage()&&showWelcome()})).catch((a=>console.error("Error:",a))),window.onload=function(){isHomePage()&&showWelcome(),document.addEventListener("pjax:complete",handlePjaxComplete)}
