(window.webpackJsonp=window.webpackJsonp||[]).push([[7],{"W+IF":function(n,e,t){"use strict";t.r(e);var o=t("ln6h"),r=t.n(o),u=t("eVuF"),a=t.n(u);function l(n,e,t,o,r,u,l){try{var i=n[u](l),c=i.value}catch(s){return void t(s)}i.done?e(c):a.a.resolve(c).then(o,r)}function i(n){return function(){var e=this,t=arguments;return new a.a(function(o,r){var u=n.apply(e,t);function a(n){l(u,o,r,a,i,"next",n)}function i(n){l(u,o,r,a,i,"throw",n)}a(void 0)})}}var c=t("q1tI"),s=t.n(c),f=t("JAUf"),w=t("q15l"),h=t.n(w),d=s.a.createElement;"#_=_"===window.location.hash&&(history.replaceState?history.replaceState(null,null,window.location.href.split("#")[0]):window.location.hash="");var p=function(n){return d("div",null,d(f.default,null),"Profile",d("h1",null,n.user))};p.getInitialProps=i(r.a.mark(function n(){var e,t;return r.a.wrap(function(n){for(;;)switch(n.prev=n.next){case 0:return console.log("fetching"),n.next=3,h()("http://localhost:5000/api/user/personal");case 3:return e=n.sent,console.log(e),console.log("fetched"),n.next=8,e.json();case 8:return t=n.sent,console.log(t),n.abrupt("return",{user:t.userName});case 11:case"end":return n.stop()}},n)}));e.default=p},q15l:function(n,e,t){"use strict";e.__esModule=!0,e.default=void 0;var o=window.fetch;e.default=o},u1GD:function(n,e,t){(window.__NEXT_P=window.__NEXT_P||[]).push(["/profile",function(){return t("W+IF")}])}},[["u1GD",0,1]]]);