(function(n){function e(e){for(var c,r,a=e[0],d=e[1],h=e[2],i=0,f=[];i<a.length;i++)r=a[i],Object.prototype.hasOwnProperty.call(u,r)&&u[r]&&f.push(u[r][0]),u[r]=0;for(c in d)Object.prototype.hasOwnProperty.call(d,c)&&(n[c]=d[c]);l&&l(e);while(f.length)f.shift()();return o.push.apply(o,h||[]),t()}function t(){for(var n,e=0;e<o.length;e++){for(var t=o[e],c=!0,r=1;r<t.length;r++){var a=t[r];0!==u[a]&&(c=!1)}c&&(o.splice(e--,1),n=d(d.s=t[0]))}return n}var c={},r={app:0},u={app:0},o=[];function a(n){return d.p+"js/"+({}[n]||n)+"."+{"chunk-01abe96c":"f23c123d","chunk-13c24a46":"939e5b38","chunk-169911ac":"758800d7","chunk-2b84b5d7":"26e16ada","chunk-2d0a4a37":"844ab6f2","chunk-2d0b5d6a":"3834e1a6","chunk-2d0b684f":"446aea1a","chunk-2d0e5e97":"386181eb","chunk-2d228876":"e72c9922","chunk-304d4c36":"43d86bee","chunk-36d948ec":"3542c287","chunk-378a50d0":"de4977de","chunk-37e4a68a":"556e6977","chunk-3be2e30a":"acb1b6b2","chunk-665f8e15":"a371dd01","chunk-722d94a6":"63cfc51e","chunk-81ce77c6":"6b93dc71","chunk-96a3faa8":"3b291b01","chunk-981b7b70":"d58587d1"}[n]+".js"}function d(e){if(c[e])return c[e].exports;var t=c[e]={i:e,l:!1,exports:{}};return n[e].call(t.exports,t,t.exports,d),t.l=!0,t.exports}d.e=function(n){var e=[],t={"chunk-01abe96c":1,"chunk-13c24a46":1,"chunk-169911ac":1,"chunk-304d4c36":1,"chunk-722d94a6":1,"chunk-81ce77c6":1,"chunk-981b7b70":1};r[n]?e.push(r[n]):0!==r[n]&&t[n]&&e.push(r[n]=new Promise((function(e,t){for(var c="css/"+({}[n]||n)+"."+{"chunk-01abe96c":"f5f460b7","chunk-13c24a46":"387231da","chunk-169911ac":"f5f460b7","chunk-2b84b5d7":"31d6cfe0","chunk-2d0a4a37":"31d6cfe0","chunk-2d0b5d6a":"31d6cfe0","chunk-2d0b684f":"31d6cfe0","chunk-2d0e5e97":"31d6cfe0","chunk-2d228876":"31d6cfe0","chunk-304d4c36":"97bbb32b","chunk-36d948ec":"31d6cfe0","chunk-378a50d0":"31d6cfe0","chunk-37e4a68a":"31d6cfe0","chunk-3be2e30a":"31d6cfe0","chunk-665f8e15":"31d6cfe0","chunk-722d94a6":"d1ba7f8c","chunk-81ce77c6":"d84b3cfc","chunk-96a3faa8":"31d6cfe0","chunk-981b7b70":"aedceba4"}[n]+".css",u=d.p+c,o=document.getElementsByTagName("link"),a=0;a<o.length;a++){var h=o[a],i=h.getAttribute("data-href")||h.getAttribute("href");if("stylesheet"===h.rel&&(i===c||i===u))return e()}var f=document.getElementsByTagName("style");for(a=0;a<f.length;a++){h=f[a],i=h.getAttribute("data-href");if(i===c||i===u)return e()}var l=document.createElement("link");l.rel="stylesheet",l.type="text/css",l.onload=e,l.onerror=function(e){var c=e&&e.target&&e.target.src||u,o=new Error("Loading CSS chunk "+n+" failed.\n("+c+")");o.code="CSS_CHUNK_LOAD_FAILED",o.request=c,delete r[n],l.parentNode.removeChild(l),t(o)},l.href=u;var b=document.getElementsByTagName("head")[0];b.appendChild(l)})).then((function(){r[n]=0})));var c=u[n];if(0!==c)if(c)e.push(c[2]);else{var o=new Promise((function(e,t){c=u[n]=[e,t]}));e.push(c[2]=o);var h,i=document.createElement("script");i.charset="utf-8",i.timeout=120,d.nc&&i.setAttribute("nonce",d.nc),i.src=a(n);var f=new Error;h=function(e){i.onerror=i.onload=null,clearTimeout(l);var t=u[n];if(0!==t){if(t){var c=e&&("load"===e.type?"missing":e.type),r=e&&e.target&&e.target.src;f.message="Loading chunk "+n+" failed.\n("+c+": "+r+")",f.name="ChunkLoadError",f.type=c,f.request=r,t[1](f)}u[n]=void 0}};var l=setTimeout((function(){h({type:"timeout",target:i})}),12e4);i.onerror=i.onload=h,document.head.appendChild(i)}return Promise.all(e)},d.m=n,d.c=c,d.d=function(n,e,t){d.o(n,e)||Object.defineProperty(n,e,{enumerable:!0,get:t})},d.r=function(n){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(n,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(n,"__esModule",{value:!0})},d.t=function(n,e){if(1&e&&(n=d(n)),8&e)return n;if(4&e&&"object"===typeof n&&n&&n.__esModule)return n;var t=Object.create(null);if(d.r(t),Object.defineProperty(t,"default",{enumerable:!0,value:n}),2&e&&"string"!=typeof n)for(var c in n)d.d(t,c,function(e){return n[e]}.bind(null,c));return t},d.n=function(n){var e=n&&n.__esModule?function(){return n["default"]}:function(){return n};return d.d(e,"a",e),e},d.o=function(n,e){return Object.prototype.hasOwnProperty.call(n,e)},d.p="/FIV5-Shop/dist/",d.oe=function(n){throw console.error(n),n};var h=window["webpackJsonp"]=window["webpackJsonp"]||[],i=h.push.bind(h);h.push=e,h=h.slice();for(var f=0;f<h.length;f++)e(h[f]);var l=i;o.push([0,"chunk-vendors"]),t()})({0:function(n,e,t){n.exports=t("56d7")},5071:function(n,e,t){},"56d7":function(n,e,t){"use strict";t.r(e);t("e260"),t("e6cf"),t("cca6"),t("a79d"),t("159b"),t("b64b");var c=t("7a23"),r=t("bc3a"),u=t.n(r),o=t("2106"),a=t.n(o),d=t("1157"),h=t.n(d),i=(t("7b17"),t("8a14")),f=(t("fe26"),t("7bb1")),l=t("3aa8"),b=t("cbdf"),p=t("9457");function s(n,e,t,r,u,o){var a=Object(c["D"])("router-view");return Object(c["w"])(),Object(c["e"])(a)}var k={};t("9e3a");k.render=s;var m=k,v=(t("d3b7"),t("3ca3"),t("ddb0"),t("6c02")),g=[{path:"/:pathMatch(.*)*",component:function(){return t.e("chunk-2d0e5e97").then(t.bind(null,"9703"))}},{path:"/",component:function(){return t.e("chunk-304d4c36").then(t.bind(null,"de8a"))},children:[{path:"",component:function(){return t.e("chunk-722d94a6").then(t.bind(null,"3d9c"))}},{path:"index",component:function(){return t.e("chunk-981b7b70").then(t.bind(null,"766f"))}},{path:"products",component:function(){return t.e("chunk-81ce77c6").then(t.bind(null,"5d74"))}},{path:"product/:id",component:function(){return t.e("chunk-13c24a46").then(t.bind(null,"3c46"))}},{path:"discount",component:function(){return t.e("chunk-2d0a4a37").then(t.bind(null,"06fa"))}},{path:"shop",component:function(){return t.e("chunk-2d0b5d6a").then(t.bind(null,"1b36"))}},{path:"login",component:function(){return t.e("chunk-96a3faa8").then(t.bind(null,"ba1e"))}},{path:"cart",component:function(){return t.e("chunk-37e4a68a").then(t.bind(null,"5727"))},children:[{path:"",component:function(){return t.e("chunk-2b84b5d7").then(t.bind(null,"f171"))}},{path:"/check-orderer",component:function(){return t.e("chunk-378a50d0").then(t.bind(null,"1d62"))}},{path:"/check-order-complete",component:function(){return t.e("chunk-665f8e15").then(t.bind(null,"d1f0"))}},{path:"/order-complete",component:function(){return t.e("chunk-169911ac").then(t.bind(null,"95e3"))}}]}]},{path:"/dashboard",component:function(){return t.e("chunk-01abe96c").then(t.bind(null,"7277"))},children:[{path:"/orders",component:function(){return t.e("chunk-3be2e30a").then(t.bind(null,"5651"))}},{path:"/order/:id",component:function(){return t.e("chunk-2d228876").then(t.bind(null,"da25"))}},{path:"/product-management",component:function(){return t.e("chunk-36d948ec").then(t.bind(null,"6d16"))}},{path:"/coupon-set",component:function(){return t.e("chunk-2d0b684f").then(t.bind(null,"1e05"))}}]}],y=Object(v["a"])({history:Object(v["b"])(),routes:g,scrollBehavior:function(){return{top:0,behavior:"smooth"}}}),O=y;window.$=h.a,Object.keys(l["a"]).forEach((function(n){Object(f["e"])(n,l["a"][n])})),Object(f["d"])({generateMessage:Object(b["a"])({zh_TW:p}),validateOnInput:!0}),Object(b["b"])("zh_TW");var j=Object(c["d"])(m);j.component("Form",f["c"]),j.component("Field",f["b"]),j.component("ErrorMessage",f["a"]),j.component("Loading",i["a"]),j.use(a.a,u.a),j.use(O),j.mount("#app")},"9e3a":function(n,e,t){"use strict";t("5071")}});
//# sourceMappingURL=app.d60cf247.js.map