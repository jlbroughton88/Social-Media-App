(window.webpackJsonp=window.webpackJsonp||[]).push([[7],{"W+IF":function(n,e,t){"use strict";t.r(e);var r=t("ln6h"),u=t.n(r),o=t("eVuF"),a=t.n(o);function i(n,e,t,r,u,o,i){try{var c=n[o](i),s=c.value}catch(l){return void t(l)}c.done?e(s):a.a.resolve(s).then(r,u)}function c(n){return function(){var e=this,t=arguments;return new a.a(function(r,u){var o=n.apply(e,t);function a(n){i(o,r,u,a,c,"next",n)}function c(n){i(o,r,u,a,c,"throw",n)}a(void 0)})}}var s=t("q1tI"),l=t.n(s),f=t("JAUf"),p=t("q15l"),d=t.n(p),w=l.a.createElement,v=function(n){return console.log(n),w("div",null,w(f.default,null),"Profile",n.userName)};v.getInitialProps=c(u.a.mark(function n(){var e,t;return u.a.wrap(function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,d()("http://localhost:5000/api/user/makepersonal");case 2:return e=n.sent,n.next=5,e.text();case 5:return t=n.sent,n.abrupt("return",{user:t});case 7:case"end":return n.stop()}},n)}));e.default=v},q15l:function(n,e,t){"use strict";e.__esModule=!0,e.default=void 0;var r=window.fetch;e.default=r},u1GD:function(n,e,t){(window.__NEXT_P=window.__NEXT_P||[]).push(["/profile",function(){return t("W+IF")}])}},[["u1GD",0,1]]]);