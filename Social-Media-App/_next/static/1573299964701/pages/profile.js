(window.webpackJsonp=window.webpackJsonp||[]).push([[7],{"W+IF":function(n,t,e){"use strict";e.r(t);var r=e("ln6h"),o=e.n(r),u=e("eVuF"),i=e.n(u);function a(n,t,e,r,o,u,a){try{var c=n[u](a),f=c.value}catch(l){return void e(l)}c.done?t(f):i.a.resolve(f).then(r,o)}var c=e("hfKm"),f=e.n(c);function l(n,t){for(var e=0;e<t.length;e++){var r=t[e];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),f()(n,r.key,r)}}var s=e("XVgq"),p=e.n(s),h=e("Z7t5"),w=e.n(h);function y(n){return(y="function"===typeof w.a&&"symbol"===typeof p.a?function(n){return typeof n}:function(n){return n&&"function"===typeof w.a&&n.constructor===w.a&&n!==w.a.prototype?"symbol":typeof n})(n)}function v(n){return(v="function"===typeof w.a&&"symbol"===y(p.a)?function(n){return y(n)}:function(n){return n&&"function"===typeof w.a&&n.constructor===w.a&&n!==w.a.prototype?"symbol":y(n)})(n)}function d(n,t){return!t||"object"!==v(t)&&"function"!==typeof t?function(n){if(void 0===n)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return n}(n):t}var _=e("Bhuq"),b=e.n(_),m=e("TRZx"),g=e.n(m);function k(n){return(k=g.a?b.a:function(n){return n.__proto__||b()(n)})(n)}var q=e("SqZg"),E=e.n(q);function S(n,t){return(S=g.a||function(n,t){return n.__proto__=t,n})(n,t)}var T=e("q1tI"),x=e.n(T),I=e("JAUf"),P=e("q15l"),F=e.n(P),J=x.a.createElement,N=function(n){function t(){return function(n,t){if(!(n instanceof t))throw new TypeError("Cannot call a class as a function")}(this,t),d(this,k(t).apply(this,arguments))}var e,r,u;return function(n,t){if("function"!==typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");n.prototype=E()(t&&t.prototype,{constructor:{value:n,writable:!0,configurable:!0}}),t&&S(n,t)}(t,x.a.Component),e=t,r=[{key:"componentWillMount",value:function(){this.setState({user:this.props.user})}},{key:"render",value:function(){return J("div",null,J(I.default,null),"Profile",J("h1",null,this.state.user.userName))}}],u=[{key:"getInitialProps",value:function(){var n,t=(n=o.a.mark(function n(t){var e;return o.a.wrap(function(n){for(;;)switch(n.prev=n.next){case 0:return e=t.req,F()("http://localhost:5000/api/user/personal").then(function(n){return n.json()}).then(function(n){return console.log(n)}),n.abrupt("return",e);case 3:case"end":return n.stop()}},n)}),function(){var t=this,e=arguments;return new i.a(function(r,o){var u=n.apply(t,e);function i(n){a(u,r,o,i,c,"next",n)}function c(n){a(u,r,o,i,c,"throw",n)}i(void 0)})});return function(n){return t.apply(this,arguments)}}()}],r&&l(e.prototype,r),u&&l(e,u),t}();"#_=_"===window.location.hash&&(history.replaceState?history.replaceState(null,null,window.location.href.split("#")[0]):window.location.hash="");t.default=N},q15l:function(n,t,e){"use strict";t.__esModule=!0,t.default=void 0;var r=window.fetch;t.default=r},u1GD:function(n,t,e){(window.__NEXT_P=window.__NEXT_P||[]).push(["/profile",function(){return e("W+IF")}])}},[["u1GD",0,1]]]);