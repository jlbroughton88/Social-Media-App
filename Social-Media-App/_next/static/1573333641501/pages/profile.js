(window.webpackJsonp=window.webpackJsonp||[]).push([[15],{"W+IF":function(n,t,e){"use strict";e.r(t);var r=e("ln6h"),u=e.n(r),o=e("eVuF"),a=e.n(o);function i(n,t,e,r,u,o,i){try{var c=n[o](i),s=c.value}catch(l){return void e(l)}c.done?t(s):a.a.resolve(s).then(r,u)}function c(n){return function(){var t=this,e=arguments;return new a.a(function(r,u){var o=n.apply(t,e);function a(n){i(o,r,u,a,c,"next",n)}function c(n){i(o,r,u,a,c,"throw",n)}a(void 0)})}}var s=e("q1tI"),l=e.n(s),f=e("JAUf"),p=e("q15l"),d=e.n(p),w=l.a.createElement,v=function(n){return w("div",null,w(f.default,null),"Profile",n.userName)};v.getInitialProps=c(u.a.mark(function n(){var t,e;return u.a.wrap(function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,d()("http://localhost:5000/api/user/personal");case 2:return t=n.sent,n.next=5,t.text();case 5:return e=n.sent,console.log(e),n.abrupt("return",{user:e});case 8:case"end":return n.stop()}},n)}));t.default=v},q15l:function(n,t,e){"use strict";t.__esModule=!0,t.default=void 0;var r=window.fetch;t.default=r},u1GD:function(n,t,e){(window.__NEXT_P=window.__NEXT_P||[]).push(["/profile",function(){return e("W+IF")}])}},[["u1GD",0,1]]]);