(function(n){function e(e){for(var c,r,a=e[0],d=e[1],h=e[2],f=0,i=[];f<a.length;f++)r=a[f],Object.prototype.hasOwnProperty.call(u,r)&&u[r]&&i.push(u[r][0]),u[r]=0;for(c in d)Object.prototype.hasOwnProperty.call(d,c)&&(n[c]=d[c]);b&&b(e);while(i.length)i.shift()();return o.push.apply(o,h||[]),t()}function t(){for(var n,e=0;e<o.length;e++){for(var t=o[e],c=!0,r=1;r<t.length;r++){var a=t[r];0!==u[a]&&(c=!1)}c&&(o.splice(e--,1),n=d(d.s=t[0]))}return n}var c={},r={app:0},u={app:0},o=[];function a(n){return d.p+"js/"+({}[n]||n)+"."+{"chunk-0b102981":"af541d64","chunk-2a162c02":"285f6285","chunk-2d0a4a37":"e9734341","chunk-2d0b5d6a":"2b4f30b4","chunk-2d0b684f":"501d6998","chunk-2d0c8d5d":"cf09636f","chunk-2d0e5e97":"7bb843af","chunk-3027c14a":"b0920ef6","chunk-32fed056":"55785a62","chunk-3f6e2c2b":"3d66b2ab","chunk-576869f4":"94aa2267","chunk-6b2108a0":"c79d4db0","chunk-70fedcad":"dd8960cf","chunk-7945b94a":"26e42cf4","chunk-9204d794":"907ba0bd","chunk-96a3faa8":"1bad3a03","chunk-9be426c2":"eb8b451e","chunk-b35199e6":"09e2162f","chunk-ebf20b94":"18ffc5ae"}[n]+".js"}function d(e){if(c[e])return c[e].exports;var t=c[e]={i:e,l:!1,exports:{}};return n[e].call(t.exports,t,t.exports,d),t.l=!0,t.exports}d.e=function(n){var e=[],t={"chunk-0b102981":1,"chunk-32fed056":1,"chunk-576869f4":1,"chunk-9204d794":1,"chunk-9be426c2":1,"chunk-b35199e6":1,"chunk-ebf20b94":1};r[n]?e.push(r[n]):0!==r[n]&&t[n]&&e.push(r[n]=new Promise((function(e,t){for(var c="css/"+({}[n]||n)+"."+{"chunk-0b102981":"d69b2715","chunk-2a162c02":"31d6cfe0","chunk-2d0a4a37":"31d6cfe0","chunk-2d0b5d6a":"31d6cfe0","chunk-2d0b684f":"31d6cfe0","chunk-2d0c8d5d":"31d6cfe0","chunk-2d0e5e97":"31d6cfe0","chunk-3027c14a":"31d6cfe0","chunk-32fed056":"c1bf4c32","chunk-3f6e2c2b":"31d6cfe0","chunk-576869f4":"f5f460b7","chunk-6b2108a0":"31d6cfe0","chunk-70fedcad":"31d6cfe0","chunk-7945b94a":"31d6cfe0","chunk-9204d794":"387231da","chunk-96a3faa8":"31d6cfe0","chunk-9be426c2":"79284bdd","chunk-b35199e6":"97bbb32b","chunk-ebf20b94":"f5f460b7"}[n]+".css",u=d.p+c,o=document.getElementsByTagName("link"),a=0;a<o.length;a++){var h=o[a],f=h.getAttribute("data-href")||h.getAttribute("href");if("stylesheet"===h.rel&&(f===c||f===u))return e()}var i=document.getElementsByTagName("style");for(a=0;a<i.length;a++){h=i[a],f=h.getAttribute("data-href");if(f===c||f===u)return e()}var b=document.createElement("link");b.rel="stylesheet",b.type="text/css",b.onload=e,b.onerror=function(e){var c=e&&e.target&&e.target.src||u,o=new Error("Loading CSS chunk "+n+" failed.\n("+c+")");o.code="CSS_CHUNK_LOAD_FAILED",o.request=c,delete r[n],b.parentNode.removeChild(b),t(o)},b.href=u;var l=document.getElementsByTagName("head")[0];l.appendChild(b)})).then((function(){r[n]=0})));var c=u[n];if(0!==c)if(c)e.push(c[2]);else{var o=new Promise((function(e,t){c=u[n]=[e,t]}));e.push(c[2]=o);var h,f=document.createElement("script");f.charset="utf-8",f.timeout=120,d.nc&&f.setAttribute("nonce",d.nc),f.src=a(n);var i=new Error;h=function(e){f.onerror=f.onload=null,clearTimeout(b);var t=u[n];if(0!==t){if(t){var c=e&&("load"===e.type?"missing":e.type),r=e&&e.target&&e.target.src;i.message="Loading chunk "+n+" failed.\n("+c+": "+r+")",i.name="ChunkLoadError",i.type=c,i.request=r,t[1](i)}u[n]=void 0}};var b=setTimeout((function(){h({type:"timeout",target:f})}),12e4);f.onerror=f.onload=h,document.head.appendChild(f)}return Promise.all(e)},d.m=n,d.c=c,d.d=function(n,e,t){d.o(n,e)||Object.defineProperty(n,e,{enumerable:!0,get:t})},d.r=function(n){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(n,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(n,"__esModule",{value:!0})},d.t=function(n,e){if(1&e&&(n=d(n)),8&e)return n;if(4&e&&"object"===typeof n&&n&&n.__esModule)return n;var t=Object.create(null);if(d.r(t),Object.defineProperty(t,"default",{enumerable:!0,value:n}),2&e&&"string"!=typeof n)for(var c in n)d.d(t,c,function(e){return n[e]}.bind(null,c));return t},d.n=function(n){var e=n&&n.__esModule?function(){return n["default"]}:function(){return n};return d.d(e,"a",e),e},d.o=function(n,e){return Object.prototype.hasOwnProperty.call(n,e)},d.p="/FIV5-Shop/dist/",d.oe=function(n){throw console.error(n),n};var h=window["webpackJsonp"]=window["webpackJsonp"]||[],f=h.push.bind(h);h.push=e,h=h.slice();for(var i=0;i<h.length;i++)e(h[i]);var b=f;o.push([0,"chunk-vendors"]),t()})({0:function(n,e,t){n.exports=t("56d7")},5071:function(n,e,t){},"56d7":function(n,e,t){"use strict";t.r(e);t("e260"),t("e6cf"),t("cca6"),t("a79d"),t("159b"),t("b64b");var c=t("7a23"),r=t("bc3a"),u=t.n(r),o=t("2106"),a=t.n(o),d=t("1157"),h=t.n(d),f=(t("7b17"),t("8a14")),i=(t("fe26"),t("7bb1")),b=t("3aa8"),l=t("cbdf"),p=t("9457"),s=t("f9d5"),k=t.n(s);t("4413"),t("ac1f"),t("1276"),t("d3b7"),t("25f0"),t("5319"),t("a15b");function m(n){var e=n.toString().split(".");return e[0]=e[0].replace(/\B(?=(\d{3})+(?!\d))/g,","),e.join(".")}function v(n,e,t,r,u,o){var a=Object(c["D"])("router-view");return Object(c["w"])(),Object(c["e"])(a)}var g={};t("9e3a");g.render=v;var y=g,O=(t("3ca3"),t("ddb0"),t("6c02")),j=[{path:"/:pathMatch(.*)*",component:function(){return t.e("chunk-2d0e5e97").then(t.bind(null,"9703"))}},{path:"/",component:function(){return t.e("chunk-b35199e6").then(t.bind(null,"de8a"))},children:[{path:"",component:function(){return t.e("chunk-9be426c2").then(t.bind(null,"3d9c"))}},{path:"index",component:function(){return t.e("chunk-0b102981").then(t.bind(null,"766f"))}},{path:"products",component:function(){return t.e("chunk-32fed056").then(t.bind(null,"5d74"))}},{path:"product/:id",component:function(){return t.e("chunk-9204d794").then(t.bind(null,"3c46"))}},{path:"discount",component:function(){return t.e("chunk-2d0a4a37").then(t.bind(null,"06fa"))}},{path:"shop",component:function(){return t.e("chunk-2d0b5d6a").then(t.bind(null,"1b36"))}},{path:"login",component:function(){return t.e("chunk-96a3faa8").then(t.bind(null,"ba1e"))}},{path:"cart",component:function(){return t.e("chunk-2d0c8d5d").then(t.bind(null,"5727"))},children:[{path:"",component:function(){return t.e("chunk-3027c14a").then(t.bind(null,"f171"))}},{path:"/check-orderer",component:function(){return t.e("chunk-2a162c02").then(t.bind(null,"1d62"))}},{path:"/check-order-complete",component:function(){return t.e("chunk-7945b94a").then(t.bind(null,"d1f0"))}},{path:"/order-complete",component:function(){return t.e("chunk-ebf20b94").then(t.bind(null,"95e3"))}}]}]},{path:"/Dashboard",component:function(){return t.e("chunk-576869f4").then(t.bind(null,"7277"))},children:[{path:"/orders",component:function(){return t.e("chunk-70fedcad").then(t.bind(null,"5651"))}},{path:"/order/:id",component:function(){return t.e("chunk-6b2108a0").then(t.bind(null,"da25"))}},{path:"/product-management",component:function(){return t.e("chunk-3f6e2c2b").then(t.bind(null,"6d16"))}},{path:"/coupon-set",component:function(){return t.e("chunk-2d0b684f").then(t.bind(null,"1e05"))}}]}],w=Object(O["a"])({history:Object(O["b"])(),routes:j,scrollBehavior:function(){return{top:0,behavior:"smooth"}}}),E=w;window.$=h.a,Object.keys(b["a"]).forEach((function(n){Object(i["e"])(n,b["a"][n])})),Object(i["d"])({generateMessage:Object(l["a"])({zh_TW:p}),validateOnInput:!0}),Object(l["b"])("zh_TW");var P=Object(c["d"])(y);P.component("Form",i["c"]),P.component("Field",i["b"]),P.component("ErrorMessage",i["a"]),P.component("Loading",f["a"]),P.config.globalProperties.$toCurrency=m;var S={confirmButtonColor:"#41b882",cancelButtonColor:"#ff7674",icon:"success"};P.use(k.a,S),P.use(a.a,u.a),P.use(E),P.mount("#app")},"9e3a":function(n,e,t){"use strict";t("5071")}});
//# sourceMappingURL=app.b0d165d2.js.map