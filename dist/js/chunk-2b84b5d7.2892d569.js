(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-2b84b5d7"],{"1dde":function(t,c,e){var i=e("d039"),n=e("b622"),o=e("2d00"),r=n("species");t.exports=function(t){return o>=51||!i((function(){var c=[],e=c.constructor={};return e[r]=function(){return{foo:1}},1!==c[t](Boolean).foo}))}},"2c10":function(t,c,e){"use strict";var i=e("7a23");function n(t,c,e,n,o,r){var a=Object(i["D"])("loading");return Object(i["w"])(),Object(i["e"])(a,{active:o.isLoading,"onUpdate:active":c[1]||(c[1]=function(t){return o.isLoading=t})},null,8,["active"])}var o={data:function(){return{isLoading:!0}},methods:{isloading:function(){var t=this;setTimeout((function(){t.isLoading=!1}),2e3)}},created:function(){this.isloading()}};o.render=n;c["a"]=o},8418:function(t,c,e){"use strict";var i=e("c04e"),n=e("9bf2"),o=e("5c6c");t.exports=function(t,c,e){var r=i(c);r in t?n.f(t,r,o(0,e)):t[r]=e}},"99af":function(t,c,e){"use strict";var i=e("23e7"),n=e("d039"),o=e("e8b5"),r=e("861d"),a=e("7b0b"),l=e("50c4"),s=e("8418"),d=e("65f0"),u=e("1dde"),b=e("b622"),f=e("2d00"),j=b("isConcatSpreadable"),O=9007199254740991,h="Maximum allowed index exceeded",p=f>=51||!n((function(){var t=[];return t[j]=!1,t.concat()[0]!==t})),v=u("concat"),g=function(t){if(!r(t))return!1;var c=t[j];return void 0!==c?!!c:o(t)},w=!p||!v;i({target:"Array",proto:!0,forced:w},{concat:function(t){var c,e,i,n,o,r=a(this),u=d(r,0),b=0;for(c=-1,i=arguments.length;c<i;c++)if(o=-1===c?r:arguments[c],g(o)){if(n=l(o.length),b+n>O)throw TypeError(h);for(e=0;e<n;e++,b++)e in o&&s(u,b,o[e])}else{if(b>=O)throw TypeError(h);s(u,b++,o)}return u.length=b,u}})},f171:function(t,c,e){"use strict";e.r(c);var i=e("7a23"),n=Object(i["g"])('<div class="row text-center"><div class="col-4 bg-secondary"><h5 class="fw-bold pt-3">STEP 01</h5><p class="fs-5 fw-bold">確認訂單商品</p></div><div class="col-4"><h5 class="fw-bold pt-3">STEP 02</h5><p class="fs-5 fw-bold">輸入訂購資料</p></div><div class="col-4"><h5 class="fw-bold pt-3">STEP 03</h5><p class="fs-5 fw-bold">付款/完成訂單</p></div></div>',1),o={class:"content"},r={class:"table-wrap"},a={class:"table table-hover"},l=Object(i["i"])("thead",null,[Object(i["i"])("tr",null,[Object(i["i"])("th",{scope:"col",class:"text-center"},"商品資訊"),Object(i["i"])("th",{scope:"col"},"商品名稱"),Object(i["i"])("th",{scope:"col"},"數量"),Object(i["i"])("th",{scope:"col"},"單價"),Object(i["i"])("th",{scope:"col"},"折扣價"),Object(i["i"])("th",{scope:"col"},"小計"),Object(i["i"])("th",{scope:"col"},"刪除")])],-1),s={class:"d-flex align-items-center"},d=Object(i["i"])("td",null,[Object(i["i"])("button",{type:"button",class:"btn btn-primary"},"刪除")],-1),u={class:"row"},b=Object(i["i"])("div",{class:"col-0 col-md-7"},null,-1),f={class:"col-12 col-md-1"},j={class:"col-12 col-md-4"},O=Object(i["h"])("下一步");function h(t,c,e,h,p,v){var g=Object(i["D"])("Loading"),w=Object(i["D"])("router-link");return Object(i["w"])(),Object(i["e"])(i["a"],null,[Object(i["i"])("div",null,[Object(i["i"])(g)]),n,Object(i["i"])("div",o,[Object(i["i"])("div",r,[Object(i["i"])("table",a,[l,Object(i["i"])("tbody",null,[(Object(i["w"])(!0),Object(i["e"])(i["a"],null,Object(i["B"])(p.cartProduct,(function(t){return Object(i["w"])(),Object(i["e"])("tr",{key:t.id},[Object(i["i"])("td",s,[Object(i["i"])("img",{src:t.product.imageUrl,alt:"",style:{width:"150px",height:"150px"}},null,8,["src"])]),Object(i["i"])("td",null,Object(i["G"])(t.product.title),1),Object(i["i"])("td",null,Object(i["G"])(t.qty),1),Object(i["i"])("td",null,Object(i["G"])(t.product.origin_price),1),Object(i["i"])("td",null,Object(i["G"])(t.product.price),1),Object(i["i"])("td",null,Object(i["G"])(t.total),1),d])})),128))])])]),Object(i["i"])("div",u,[b,Object(i["i"])("div",f,"共"+Object(i["G"])(p.cartProduct.length)+"項",1),Object(i["i"])("div",j,"總金額:"+Object(i["G"])(p.countPrice),1)]),Object(i["i"])("div",null,[Object(i["i"])("div",null,[Object(i["i"])(w,{class:"btn btn-primary",to:"/check-orderer"},{default:Object(i["M"])((function(){return[O]})),_:1})])])])],64)}e("99af"),e("159b");var p=e("2c10"),v={components:{Loading:p["a"]},data:function(){return{id:"",cartProduct:[],countPrice:0}},methods:{getCartList:function(){var t=this,c="".concat("https://vue3-course-api.hexschool.io/","api/").concat("eva29485577","/cart");this.$http.get(c).then((function(c){t.cartProduct=c.data.data.carts})).catch((function(t){console.log(t)}))},countAllPrice:function(){var t=this,c="".concat("https://vue3-course-api.hexschool.io/","api/").concat("eva29485577","/cart");this.$http.get(c).then((function(c){c.data.data.carts.forEach((function(c){t.countPrice+=c.final_total}))})).catch((function(t){console.log(t)}))}},created:function(){this.getCartList(),this.countAllPrice()}};v.render=h;c["default"]=v}}]);
//# sourceMappingURL=chunk-2b84b5d7.2892d569.js.map