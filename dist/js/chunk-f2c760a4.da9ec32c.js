(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-f2c760a4"],{"1dde":function(n,t,e){var o=e("d039"),r=e("b622"),i=e("2d00"),c=r("species");n.exports=function(n){return i>=51||!o((function(){var t=[],e=t.constructor={};return e[c]=function(){return{foo:1}},1!==t[n](Boolean).foo}))}},"2c10":function(n,t,e){"use strict";var o=e("7a23");function r(n,t,e,r,i,c){var a=Object(o["D"])("loading");return Object(o["w"])(),Object(o["e"])(a,{active:i.isLoading,"onUpdate:active":t[1]||(t[1]=function(n){return i.isLoading=n})},null,8,["active"])}var i={data:function(){return{isLoading:!0}},methods:{isloading:function(){var n=this;setTimeout((function(){n.isLoading=!1}),2e3)}},created:function(){this.isloading()}};i.render=r;t["a"]=i},"30f7":function(n,t,e){"use strict";e.r(t);var o=e("7a23"),r=Object(o["i"])("main",{class:"container"},null,-1);function i(n,t,e,i,c,a){var u=Object(o["D"])("Loading");return Object(o["w"])(),Object(o["e"])(o["a"],null,[Object(o["i"])("div",null,[Object(o["i"])(u)]),r],64)}e("99af");var c=e("2c10"),a={components:{Loading:c["a"]},data:function(){return{id:"",orders:[]}},methods:{getOrdersList:function(){var n=this,t="".concat("https://vue3-course-api.hexschool.io/","api/").concat("eva29485577","/admin/orders");this.$http.get(t).then((function(t){console.log(t),n.orders=t.data.orders})).catch((function(n){console.log(n)}))}},created:function(){this.getOrdersList()}};a.render=i;t["default"]=a},8418:function(n,t,e){"use strict";var o=e("c04e"),r=e("9bf2"),i=e("5c6c");n.exports=function(n,t,e){var c=o(t);c in n?r.f(n,c,i(0,e)):n[c]=e}},"99af":function(n,t,e){"use strict";var o=e("23e7"),r=e("d039"),i=e("e8b5"),c=e("861d"),a=e("7b0b"),u=e("50c4"),s=e("8418"),d=e("65f0"),f=e("1dde"),l=e("b622"),v=e("2d00"),h=l("isConcatSpreadable"),b=9007199254740991,g="Maximum allowed index exceeded",p=v>=51||!r((function(){var n=[];return n[h]=!1,n.concat()[0]!==n})),w=f("concat"),O=function(n){if(!c(n))return!1;var t=n[h];return void 0!==t?!!t:i(n)},j=!p||!w;o({target:"Array",proto:!0,forced:j},{concat:function(n){var t,e,o,r,i,c=a(this),f=d(c,0),l=0;for(t=-1,o=arguments.length;t<o;t++)if(i=-1===t?c:arguments[t],O(i)){if(r=u(i.length),l+r>b)throw TypeError(g);for(e=0;e<r;e++,l++)e in i&&s(f,l,i[e])}else{if(l>=b)throw TypeError(g);s(f,l++,i)}return f.length=l,f}})}}]);
//# sourceMappingURL=chunk-f2c760a4.da9ec32c.js.map