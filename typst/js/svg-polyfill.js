!function(){var e=!(!window.attachEvent||window.opera),t=/webkit\/(\d+)/i.test(navigator.userAgent)&&RegExp.$1<525,n=[],a=function(){for(var e=0;e<n.length;e++)n[e]()},o=document
o.ready=function(r){if(!e&&!t&&o.addEventListener)return o.addEventListener("DOMContentLoaded",r,!1)
if(!(n.push(r)>1))if(e)!function(){try{o.documentElement.doScroll("left"),a()}catch(e){setTimeout(arguments.callee,0)}}()
else if(t)var i=setInterval((function(){/^(loaded|complete)$/.test(o.readyState)&&(clearInterval(i),a())}),0)}}()
