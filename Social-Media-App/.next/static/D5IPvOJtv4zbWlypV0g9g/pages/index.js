(window.webpackJsonp=window.webpackJsonp||[]).push([[6],{RNiq:function(e,n,t){"use strict";t.r(n);var r=t("q1tI"),o=t.n(r),s=t("JAUf"),u=(t("zgjP"),o.a.createElement);n.default=function(e){return u("div",null,u(s.default,null),"Hello")}},"m/Gl":function(e,n,t){"use strict";t.r(n),n.default=function(e,n){return n=n||{},new Promise(function(t,r){var o=new XMLHttpRequest,s=[],u=[],i={},l=function(){return{ok:2==(o.status/100|0),statusText:o.statusText,status:o.status,url:o.responseURL,text:function(){return Promise.resolve(o.responseText)},json:function(){return Promise.resolve(JSON.parse(o.responseText))},blob:function(){return Promise.resolve(new Blob([o.response]))},clone:l,headers:{keys:function(){return s},entries:function(){return u},get:function(e){return i[e.toLowerCase()]},has:function(e){return e.toLowerCase()in i}}}};for(var a in o.open(n.method||"get",e,!0),o.onload=function(){o.getAllResponseHeaders().replace(/^(.*?):[^\S\n]*([\s\S]*?)$/gm,function(e,n,t){s.push(n=n.toLowerCase()),u.push([n,t]),i[n]=i[n]?i[n]+","+t:t}),t(l())},o.onerror=r,o.withCredentials="include"==n.credentials,n.headers)o.setRequestHeader(a,n.headers[a]);o.send(n.body||null)})}},vlRD:function(e,n,t){(window.__NEXT_P=window.__NEXT_P||[]).push(["/",function(){return t("RNiq")}])},zgjP:function(e,n,t){e.exports=window.fetch||(window.fetch=t("m/Gl").default||t("m/Gl"))}},[["vlRD",1,0]]]);