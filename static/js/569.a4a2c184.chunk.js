/*! For license information please see 569.a4a2c184.chunk.js.LICENSE.txt */
"use strict";(self.webpackChunkreact_homework_template=self.webpackChunkreact_homework_template||[]).push([[569],{437:function(t,r,e){e.d(r,{s:function(){return s}});var n,o=e(689),a=e(87),i=e(168),c=e(867).ZP.li(n||(n=(0,i.Z)(["\n  display: flex;\n  flex-wrap: wrap;\n  border: solid;\n  :hover {\n    box-shadow: rgba(0, 0, 0, 0.17) 0px -23px 25px 0px inset,\n      rgba(0, 0, 0, 0.15) 0px -36px 30px 0px inset,\n      rgba(0, 0, 0, 0.1) 0px -79px 40px 0px inset,\n      rgba(0, 0, 0, 0.06) 0px 2px 1px, rgba(0, 0, 0, 0.09) 0px 4px 2px,\n      rgba(0, 0, 0, 0.09) 0px 8px 4px, rgba(0, 0, 0, 0.09) 0px 16px 8px,\n      rgba(0, 0, 0, 0.09) 0px 32px 16px;\n  }\n"]))),u=e(184),s=function(t){var r=t.movie,e=t.movQuery,n=(0,o.TH)();return(0,u.jsx)(u.Fragment,{children:r.map((function(t){var r=t.id,o=t.poster_path,i=t.original_title,s=t.name;return(0,u.jsx)(c,{children:(0,u.jsxs)(a.rU,{to:"/movies/".concat(r),state:{from:n,movQuery:e},children:[(0,u.jsx)("img",{width:300,height:450,src:o?"https://image.tmdb.org/t/p/w500".concat(o):"https://1.bp.blogspot.com/-B6PlJJwEsy8/VHhWIUnOShI/AAAAAAAABoM/La-gR8X-b2w/s1600/oacPJDv4TS4.jpg",alt:"poster"}),(0,u.jsx)("p",{children:i||s})]})},r)}))})}},569:function(t,r,e){e.r(r),e.d(r,{default:function(){return y}});var n,o=e(861),a=e(439),i=e(791),c=e(877),u=e(87),s=e(437),l=e(168),f=e(867).ZP.ul(n||(n=(0,l.Z)(["\n  display: flex;\n  flex-wrap: wrap;\n  gap: 20px;\n"]))),h=e(14),p=e(184);function v(){v=function(){return r};var t,r={},e=Object.prototype,n=e.hasOwnProperty,o=Object.defineProperty||function(t,r,e){t[r]=e.value},a="function"==typeof Symbol?Symbol:{},i=a.iterator||"@@iterator",c=a.asyncIterator||"@@asyncIterator",u=a.toStringTag||"@@toStringTag";function s(t,r,e){return Object.defineProperty(t,r,{value:e,enumerable:!0,configurable:!0,writable:!0}),t[r]}try{s({},"")}catch(t){s=function(t,r,e){return t[r]=e}}function l(t,r,e,n){var a=r&&r.prototype instanceof d?r:d,i=Object.create(a.prototype),c=new S(n||[]);return o(i,"_invoke",{value:k(t,e,c)}),i}function f(t,r,e){try{return{type:"normal",arg:t.call(r,e)}}catch(t){return{type:"throw",arg:t}}}r.wrap=l;var h="suspendedStart",p="executing",y="completed",g={};function d(){}function m(){}function w(){}var x={};s(x,i,(function(){return this}));var b=Object.getPrototypeOf,L=b&&b(b(G([])));L&&L!==e&&n.call(L,i)&&(x=L);var E=w.prototype=d.prototype=Object.create(x);function _(t){["next","throw","return"].forEach((function(r){s(t,r,(function(t){return this._invoke(r,t)}))}))}function j(t,r){function e(o,a,i,c){var u=f(t[o],t,a);if("throw"!==u.type){var s=u.arg,l=s.value;return l&&"object"==typeof l&&n.call(l,"__await")?r.resolve(l.__await).then((function(t){e("next",t,i,c)}),(function(t){e("throw",t,i,c)})):r.resolve(l).then((function(t){s.value=t,i(s)}),(function(t){return e("throw",t,i,c)}))}c(u.arg)}var a;o(this,"_invoke",{value:function(t,n){function o(){return new r((function(r,o){e(t,n,r,o)}))}return a=a?a.then(o,o):o()}})}function k(r,e,n){var o=h;return function(a,i){if(o===p)throw new Error("Generator is already running");if(o===y){if("throw"===a)throw i;return{value:t,done:!0}}for(n.method=a,n.arg=i;;){var c=n.delegate;if(c){var u=O(c,n);if(u){if(u===g)continue;return u}}if("next"===n.method)n.sent=n._sent=n.arg;else if("throw"===n.method){if(o===h)throw o=y,n.arg;n.dispatchException(n.arg)}else"return"===n.method&&n.abrupt("return",n.arg);o=p;var s=f(r,e,n);if("normal"===s.type){if(o=n.done?y:"suspendedYield",s.arg===g)continue;return{value:s.arg,done:n.done}}"throw"===s.type&&(o=y,n.method="throw",n.arg=s.arg)}}}function O(r,e){var n=e.method,o=r.iterator[n];if(o===t)return e.delegate=null,"throw"===n&&r.iterator.return&&(e.method="return",e.arg=t,O(r,e),"throw"===e.method)||"return"!==n&&(e.method="throw",e.arg=new TypeError("The iterator does not provide a '"+n+"' method")),g;var a=f(o,r.iterator,e.arg);if("throw"===a.type)return e.method="throw",e.arg=a.arg,e.delegate=null,g;var i=a.arg;return i?i.done?(e[r.resultName]=i.value,e.next=r.nextLoc,"return"!==e.method&&(e.method="next",e.arg=t),e.delegate=null,g):i:(e.method="throw",e.arg=new TypeError("iterator result is not an object"),e.delegate=null,g)}function P(t){var r={tryLoc:t[0]};1 in t&&(r.catchLoc=t[1]),2 in t&&(r.finallyLoc=t[2],r.afterLoc=t[3]),this.tryEntries.push(r)}function Z(t){var r=t.completion||{};r.type="normal",delete r.arg,t.completion=r}function S(t){this.tryEntries=[{tryLoc:"root"}],t.forEach(P,this),this.reset(!0)}function G(r){if(r||""===r){var e=r[i];if(e)return e.call(r);if("function"==typeof r.next)return r;if(!isNaN(r.length)){var o=-1,a=function e(){for(;++o<r.length;)if(n.call(r,o))return e.value=r[o],e.done=!1,e;return e.value=t,e.done=!0,e};return a.next=a}}throw new TypeError(typeof r+" is not iterable")}return m.prototype=w,o(E,"constructor",{value:w,configurable:!0}),o(w,"constructor",{value:m,configurable:!0}),m.displayName=s(w,u,"GeneratorFunction"),r.isGeneratorFunction=function(t){var r="function"==typeof t&&t.constructor;return!!r&&(r===m||"GeneratorFunction"===(r.displayName||r.name))},r.mark=function(t){return Object.setPrototypeOf?Object.setPrototypeOf(t,w):(t.__proto__=w,s(t,u,"GeneratorFunction")),t.prototype=Object.create(E),t},r.awrap=function(t){return{__await:t}},_(j.prototype),s(j.prototype,c,(function(){return this})),r.AsyncIterator=j,r.async=function(t,e,n,o,a){void 0===a&&(a=Promise);var i=new j(l(t,e,n,o),a);return r.isGeneratorFunction(e)?i:i.next().then((function(t){return t.done?t.value:i.next()}))},_(E),s(E,u,"Generator"),s(E,i,(function(){return this})),s(E,"toString",(function(){return"[object Generator]"})),r.keys=function(t){var r=Object(t),e=[];for(var n in r)e.push(n);return e.reverse(),function t(){for(;e.length;){var n=e.pop();if(n in r)return t.value=n,t.done=!1,t}return t.done=!0,t}},r.values=G,S.prototype={constructor:S,reset:function(r){if(this.prev=0,this.next=0,this.sent=this._sent=t,this.done=!1,this.delegate=null,this.method="next",this.arg=t,this.tryEntries.forEach(Z),!r)for(var e in this)"t"===e.charAt(0)&&n.call(this,e)&&!isNaN(+e.slice(1))&&(this[e]=t)},stop:function(){this.done=!0;var t=this.tryEntries[0].completion;if("throw"===t.type)throw t.arg;return this.rval},dispatchException:function(r){if(this.done)throw r;var e=this;function o(n,o){return c.type="throw",c.arg=r,e.next=n,o&&(e.method="next",e.arg=t),!!o}for(var a=this.tryEntries.length-1;a>=0;--a){var i=this.tryEntries[a],c=i.completion;if("root"===i.tryLoc)return o("end");if(i.tryLoc<=this.prev){var u=n.call(i,"catchLoc"),s=n.call(i,"finallyLoc");if(u&&s){if(this.prev<i.catchLoc)return o(i.catchLoc,!0);if(this.prev<i.finallyLoc)return o(i.finallyLoc)}else if(u){if(this.prev<i.catchLoc)return o(i.catchLoc,!0)}else{if(!s)throw new Error("try statement without catch or finally");if(this.prev<i.finallyLoc)return o(i.finallyLoc)}}}},abrupt:function(t,r){for(var e=this.tryEntries.length-1;e>=0;--e){var o=this.tryEntries[e];if(o.tryLoc<=this.prev&&n.call(o,"finallyLoc")&&this.prev<o.finallyLoc){var a=o;break}}a&&("break"===t||"continue"===t)&&a.tryLoc<=r&&r<=a.finallyLoc&&(a=null);var i=a?a.completion:{};return i.type=t,i.arg=r,a?(this.method="next",this.next=a.finallyLoc,g):this.complete(i)},complete:function(t,r){if("throw"===t.type)throw t.arg;return"break"===t.type||"continue"===t.type?this.next=t.arg:"return"===t.type?(this.rval=this.arg=t.arg,this.method="return",this.next="end"):"normal"===t.type&&r&&(this.next=r),g},finish:function(t){for(var r=this.tryEntries.length-1;r>=0;--r){var e=this.tryEntries[r];if(e.finallyLoc===t)return this.complete(e.completion,e.afterLoc),Z(e),g}},catch:function(t){for(var r=this.tryEntries.length-1;r>=0;--r){var e=this.tryEntries[r];if(e.tryLoc===t){var n=e.completion;if("throw"===n.type){var o=n.arg;Z(e)}return o}}throw new Error("illegal catch attempt")},delegateYield:function(r,e,n){return this.delegate={iterator:G(r),resultName:e,nextLoc:n},"next"===this.method&&(this.arg=t),g}},r}var y=function(){var t,r=(0,i.useState)(""),e=(0,a.Z)(r,2),n=e[0],l=e[1],y=(0,i.useState)([]),g=(0,a.Z)(y,2),d=g[0],m=g[1],w=(0,u.lr)(),x=(0,a.Z)(w,2),b=x[0],L=x[1],E=null!==(t=b.get("query"))&&void 0!==t?t:"";(0,i.useEffect)((function(){var t=new AbortController;function r(){return(r=(0,o.Z)(v().mark((function r(){var e;return v().wrap((function(r){for(;;)switch(r.prev=r.next){case 0:return r.prev=0,r.next=3,(0,c.gH)(E,t.signal);case 3:e=r.sent,m(e.results),r.next=10;break;case 7:r.prev=7,r.t0=r.catch(0),console.log(r.t0);case 10:case"end":return r.stop()}}),r,null,[[0,7]])})))).apply(this,arguments)}return function(){r.apply(this,arguments)}(),function(){return t.abort()}}),[E]);return(0,p.jsxs)("div",{children:[(0,p.jsxs)("form",{onSubmit:function(t){t.preventDefault(),""===t.target.elements.search.value&&h.ZP.error("Enter the name of the movie"),L({query:t.target.elements.search.value}),console.log(t.target.elements.search.value)},children:[(0,p.jsx)("input",{onChange:function(t){var r=t.target;l(r.value)},value:n,name:"search",type:"text",placeholder:"Search film name"}),(0,p.jsx)("button",{type:"submit",children:"Submit"})]}),(0,p.jsx)("div",{children:(0,p.jsx)(f,{children:d.length>0&&(0,p.jsx)(s.s,{movie:d,movQuery:E})})})]})}},877:function(t,r,e){e.d(r,{M1:function(){return l},TP:function(){return s},gH:function(){return u},tx:function(){return f},u5:function(){return c}});var n=e(861),o=e(243);function a(){a=function(){return r};var t,r={},e=Object.prototype,n=e.hasOwnProperty,o=Object.defineProperty||function(t,r,e){t[r]=e.value},i="function"==typeof Symbol?Symbol:{},c=i.iterator||"@@iterator",u=i.asyncIterator||"@@asyncIterator",s=i.toStringTag||"@@toStringTag";function l(t,r,e){return Object.defineProperty(t,r,{value:e,enumerable:!0,configurable:!0,writable:!0}),t[r]}try{l({},"")}catch(t){l=function(t,r,e){return t[r]=e}}function f(t,r,e,n){var a=r&&r.prototype instanceof d?r:d,i=Object.create(a.prototype),c=new S(n||[]);return o(i,"_invoke",{value:k(t,e,c)}),i}function h(t,r,e){try{return{type:"normal",arg:t.call(r,e)}}catch(t){return{type:"throw",arg:t}}}r.wrap=f;var p="suspendedStart",v="executing",y="completed",g={};function d(){}function m(){}function w(){}var x={};l(x,c,(function(){return this}));var b=Object.getPrototypeOf,L=b&&b(b(G([])));L&&L!==e&&n.call(L,c)&&(x=L);var E=w.prototype=d.prototype=Object.create(x);function _(t){["next","throw","return"].forEach((function(r){l(t,r,(function(t){return this._invoke(r,t)}))}))}function j(t,r){function e(o,a,i,c){var u=h(t[o],t,a);if("throw"!==u.type){var s=u.arg,l=s.value;return l&&"object"==typeof l&&n.call(l,"__await")?r.resolve(l.__await).then((function(t){e("next",t,i,c)}),(function(t){e("throw",t,i,c)})):r.resolve(l).then((function(t){s.value=t,i(s)}),(function(t){return e("throw",t,i,c)}))}c(u.arg)}var a;o(this,"_invoke",{value:function(t,n){function o(){return new r((function(r,o){e(t,n,r,o)}))}return a=a?a.then(o,o):o()}})}function k(r,e,n){var o=p;return function(a,i){if(o===v)throw new Error("Generator is already running");if(o===y){if("throw"===a)throw i;return{value:t,done:!0}}for(n.method=a,n.arg=i;;){var c=n.delegate;if(c){var u=O(c,n);if(u){if(u===g)continue;return u}}if("next"===n.method)n.sent=n._sent=n.arg;else if("throw"===n.method){if(o===p)throw o=y,n.arg;n.dispatchException(n.arg)}else"return"===n.method&&n.abrupt("return",n.arg);o=v;var s=h(r,e,n);if("normal"===s.type){if(o=n.done?y:"suspendedYield",s.arg===g)continue;return{value:s.arg,done:n.done}}"throw"===s.type&&(o=y,n.method="throw",n.arg=s.arg)}}}function O(r,e){var n=e.method,o=r.iterator[n];if(o===t)return e.delegate=null,"throw"===n&&r.iterator.return&&(e.method="return",e.arg=t,O(r,e),"throw"===e.method)||"return"!==n&&(e.method="throw",e.arg=new TypeError("The iterator does not provide a '"+n+"' method")),g;var a=h(o,r.iterator,e.arg);if("throw"===a.type)return e.method="throw",e.arg=a.arg,e.delegate=null,g;var i=a.arg;return i?i.done?(e[r.resultName]=i.value,e.next=r.nextLoc,"return"!==e.method&&(e.method="next",e.arg=t),e.delegate=null,g):i:(e.method="throw",e.arg=new TypeError("iterator result is not an object"),e.delegate=null,g)}function P(t){var r={tryLoc:t[0]};1 in t&&(r.catchLoc=t[1]),2 in t&&(r.finallyLoc=t[2],r.afterLoc=t[3]),this.tryEntries.push(r)}function Z(t){var r=t.completion||{};r.type="normal",delete r.arg,t.completion=r}function S(t){this.tryEntries=[{tryLoc:"root"}],t.forEach(P,this),this.reset(!0)}function G(r){if(r||""===r){var e=r[c];if(e)return e.call(r);if("function"==typeof r.next)return r;if(!isNaN(r.length)){var o=-1,a=function e(){for(;++o<r.length;)if(n.call(r,o))return e.value=r[o],e.done=!1,e;return e.value=t,e.done=!0,e};return a.next=a}}throw new TypeError(typeof r+" is not iterable")}return m.prototype=w,o(E,"constructor",{value:w,configurable:!0}),o(w,"constructor",{value:m,configurable:!0}),m.displayName=l(w,s,"GeneratorFunction"),r.isGeneratorFunction=function(t){var r="function"==typeof t&&t.constructor;return!!r&&(r===m||"GeneratorFunction"===(r.displayName||r.name))},r.mark=function(t){return Object.setPrototypeOf?Object.setPrototypeOf(t,w):(t.__proto__=w,l(t,s,"GeneratorFunction")),t.prototype=Object.create(E),t},r.awrap=function(t){return{__await:t}},_(j.prototype),l(j.prototype,u,(function(){return this})),r.AsyncIterator=j,r.async=function(t,e,n,o,a){void 0===a&&(a=Promise);var i=new j(f(t,e,n,o),a);return r.isGeneratorFunction(e)?i:i.next().then((function(t){return t.done?t.value:i.next()}))},_(E),l(E,s,"Generator"),l(E,c,(function(){return this})),l(E,"toString",(function(){return"[object Generator]"})),r.keys=function(t){var r=Object(t),e=[];for(var n in r)e.push(n);return e.reverse(),function t(){for(;e.length;){var n=e.pop();if(n in r)return t.value=n,t.done=!1,t}return t.done=!0,t}},r.values=G,S.prototype={constructor:S,reset:function(r){if(this.prev=0,this.next=0,this.sent=this._sent=t,this.done=!1,this.delegate=null,this.method="next",this.arg=t,this.tryEntries.forEach(Z),!r)for(var e in this)"t"===e.charAt(0)&&n.call(this,e)&&!isNaN(+e.slice(1))&&(this[e]=t)},stop:function(){this.done=!0;var t=this.tryEntries[0].completion;if("throw"===t.type)throw t.arg;return this.rval},dispatchException:function(r){if(this.done)throw r;var e=this;function o(n,o){return c.type="throw",c.arg=r,e.next=n,o&&(e.method="next",e.arg=t),!!o}for(var a=this.tryEntries.length-1;a>=0;--a){var i=this.tryEntries[a],c=i.completion;if("root"===i.tryLoc)return o("end");if(i.tryLoc<=this.prev){var u=n.call(i,"catchLoc"),s=n.call(i,"finallyLoc");if(u&&s){if(this.prev<i.catchLoc)return o(i.catchLoc,!0);if(this.prev<i.finallyLoc)return o(i.finallyLoc)}else if(u){if(this.prev<i.catchLoc)return o(i.catchLoc,!0)}else{if(!s)throw new Error("try statement without catch or finally");if(this.prev<i.finallyLoc)return o(i.finallyLoc)}}}},abrupt:function(t,r){for(var e=this.tryEntries.length-1;e>=0;--e){var o=this.tryEntries[e];if(o.tryLoc<=this.prev&&n.call(o,"finallyLoc")&&this.prev<o.finallyLoc){var a=o;break}}a&&("break"===t||"continue"===t)&&a.tryLoc<=r&&r<=a.finallyLoc&&(a=null);var i=a?a.completion:{};return i.type=t,i.arg=r,a?(this.method="next",this.next=a.finallyLoc,g):this.complete(i)},complete:function(t,r){if("throw"===t.type)throw t.arg;return"break"===t.type||"continue"===t.type?this.next=t.arg:"return"===t.type?(this.rval=this.arg=t.arg,this.method="return",this.next="end"):"normal"===t.type&&r&&(this.next=r),g},finish:function(t){for(var r=this.tryEntries.length-1;r>=0;--r){var e=this.tryEntries[r];if(e.finallyLoc===t)return this.complete(e.completion,e.afterLoc),Z(e),g}},catch:function(t){for(var r=this.tryEntries.length-1;r>=0;--r){var e=this.tryEntries[r];if(e.tryLoc===t){var n=e.completion;if("throw"===n.type){var o=n.arg;Z(e)}return o}}throw new Error("illegal catch attempt")},delegateYield:function(r,e,n){return this.delegate={iterator:G(r),resultName:e,nextLoc:n},"next"===this.method&&(this.arg=t),g}},r}o.Z.defaults.baseURL="https://api.themoviedb.org/3/";var i="0faef55576804b8824855a6bbe4c2da0",c=function(){var t=(0,n.Z)(a().mark((function t(r){var e;return a().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,o.Z.get("trending/all/day?api_key=".concat(i),{signal:r});case 2:return e=t.sent,t.abrupt("return",e.data);case 4:case"end":return t.stop()}}),t)})));return function(r){return t.apply(this,arguments)}}(),u=function(){var t=(0,n.Z)(a().mark((function t(r,e){var n;return a().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,o.Z.get("/search/movie?api_key=".concat(i,"&query=").concat(r),{signal:e});case 2:return n=t.sent,t.abrupt("return",n.data);case 4:case"end":return t.stop()}}),t)})));return function(r,e){return t.apply(this,arguments)}}(),s=function(){var t=(0,n.Z)(a().mark((function t(r,e){var n;return a().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,o.Z.get("/movie/".concat(r,"?api_key=").concat(i),{signal:e.current.signal});case 2:return n=t.sent,t.abrupt("return",n);case 4:case"end":return t.stop()}}),t)})));return function(r,e){return t.apply(this,arguments)}}(),l=function(){var t=(0,n.Z)(a().mark((function t(r,e){var n;return a().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,o.Z.get("/movie/".concat(r,"/credits?api_key=").concat(i," "),{signal:e.current.signal});case 2:return n=t.sent,t.abrupt("return",n.data);case 4:case"end":return t.stop()}}),t)})));return function(r,e){return t.apply(this,arguments)}}(),f=function(){var t=(0,n.Z)(a().mark((function t(r,e){var n;return a().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,o.Z.get("/movie/".concat(r,"/reviews?api_key=").concat(i," "),{signal:e.current.signal});case 2:return n=t.sent,t.abrupt("return",n.data);case 4:case"end":return t.stop()}}),t)})));return function(r,e){return t.apply(this,arguments)}}()}}]);
//# sourceMappingURL=569.a4a2c184.chunk.js.map