(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-bd9119d0"],{"1dde":function(t,e,c){var n=c("d039"),o=c("b622"),a=c("2d00"),i=o("species");t.exports=function(t){return a>=51||!n((function(){var e=[],c=e.constructor={};return c[i]=function(){return{foo:1}},1!==e[t](Boolean).foo}))}},"2c10":function(t,e,c){"use strict";var n=c("7a23");function o(t,e,c,o,a,i){var r=Object(n["D"])("loading");return Object(n["w"])(),Object(n["e"])(r,{active:a.isLoading,"onUpdate:active":e[1]||(e[1]=function(t){return a.isLoading=t})},null,8,["active"])}var a={data:function(){return{isLoading:!0}},methods:{isloading:function(){var t=this;setTimeout((function(){t.isLoading=!1}),2e3)}},created:function(){this.isloading()}};a.render=o;e["a"]=a},8418:function(t,e,c){"use strict";var n=c("c04e"),o=c("9bf2"),a=c("5c6c");t.exports=function(t,e,c){var i=n(e);i in t?o.f(t,i,a(0,c)):t[i]=c}},"99af":function(t,e,c){"use strict";var n=c("23e7"),o=c("d039"),a=c("e8b5"),i=c("861d"),r=c("7b0b"),s=c("50c4"),l=c("8418"),d=c("65f0"),u=c("1dde"),b=c("b622"),f=c("2d00"),p=b("isConcatSpreadable"),h=9007199254740991,j="Maximum allowed index exceeded",O=f>=51||!o((function(){var t=[];return t[p]=!1,t.concat()[0]!==t})),v=u("concat"),m=function(t){if(!i(t))return!1;var e=t[p];return void 0!==e?!!e:a(t)},g=!O||!v;n({target:"Array",proto:!0,forced:g},{concat:function(t){var e,c,n,o,a,i=r(this),u=d(i,0),b=0;for(e=-1,n=arguments.length;e<n;e++)if(a=-1===e?i:arguments[e],m(a)){if(o=s(a.length),b+o>h)throw TypeError(j);for(c=0;c<o;c++,b++)c in a&&l(u,b,a[c])}else{if(b>=h)throw TypeError(j);l(u,b++,a)}return u.length=b,u}})},e4f3:function(t,e,c){"use strict";var n=function(t){return{all:t=t||new Map,on:function(e,c){var n=t.get(e);n?n.push(c):t.set(e,[c])},off:function(e,c){var n=t.get(e);n&&(c?n.splice(n.indexOf(c)>>>0,1):t.set(e,[]))},emit:function(e,c){var n=t.get(e);n&&n.slice().map((function(t){t(c)})),(n=t.get("*"))&&n.slice().map((function(t){t(e,c)}))}}},o=n();e["a"]=o},f171:function(t,e,c){"use strict";c.r(e);var n=c("7a23"),o=Object(n["g"])('<div class="row text-center"><div class="col-4 bg-secondary"><h5 class="fw-bold pt-3">STEP 01</h5><p class="fs-5 fw-bold">確認訂單商品</p></div><div class="col-4"><h5 class="fw-bold pt-3">STEP 02</h5><p class="fs-5 fw-bold">輸入訂購資料</p></div><div class="col-4"><h5 class="fw-bold pt-3">STEP 03</h5><p class="fs-5 fw-bold">付款/完成訂單</p></div></div>',1),a={class:"content"},i={class:"table-wrap"},r={class:"table table-hover"},s=Object(n["i"])("thead",null,[Object(n["i"])("tr",null,[Object(n["i"])("th",{scope:"col",class:"text-center"},"商品資訊"),Object(n["i"])("th",{scope:"col",class:"d-none d-sm-table-cell"},[Object(n["h"])("商品名稱 "),Object(n["i"])("i",{class:"bi bi-alarm"})]),Object(n["i"])("th",{scope:"col"},"數量"),Object(n["i"])("th",{scope:"col",class:"d-none d-md-table-cell"},"單價"),Object(n["i"])("th",{scope:"col",class:"d-none d-md-table-cell"},"折扣價"),Object(n["i"])("th",{scope:"col"},"小計"),Object(n["i"])("th",{scope:"col"},"刪除")])],-1),l={class:"d-flex align-items-center"},d={class:"d-black d-sm-none text-center"},u={class:"d-none d-sm-table-cell"},b={class:"d-none d-md-table-cell"},f={class:"d-none d-md-table-cell"},p={class:"row justify-content-md-end text-md-end"},h={class:"col-12 col-md-9"},j={class:"col-12 col-md-3"},O={class:"mb-3"},v={class:"d-flex justify-content-between"},m=Object(n["h"])("下一步");function g(t,e,c,g,w,y){var P=Object(n["D"])("Loading"),$=Object(n["D"])("router-link");return Object(n["w"])(),Object(n["e"])(n["a"],null,[Object(n["i"])("div",null,[Object(n["i"])(P)]),o,Object(n["i"])("div",a,[Object(n["i"])("div",i,[Object(n["i"])("table",r,[s,Object(n["i"])("tbody",null,[(Object(n["w"])(!0),Object(n["e"])(n["a"],null,Object(n["B"])(w.cartProduct,(function(e){return Object(n["w"])(),Object(n["e"])("tr",{key:e.id},[Object(n["i"])("td",l,[Object(n["i"])("div",d,Object(n["G"])(e.product.title),1),Object(n["i"])("img",{style:{width:"150px",height:"150px","background-size":"cover","background-position":"center"},src:e.product.imageUrl},null,8,["src"])]),Object(n["i"])("td",u,Object(n["G"])(e.product.title),1),Object(n["i"])("td",null,[Object(n["P"])(Object(n["i"])("input",{min:"1",max:"99",type:"number","onUpdate:modelValue":function(t){return e.qty=t},class:"form-control",ref:"qty",onChange:function(t){return y.updataProductQty(e)}},null,40,["onUpdate:modelValue","onChange"]),[[n["K"],e.qty,void 0,{number:!0}]])]),Object(n["i"])("td",b,Object(n["G"])(t.$toCurrency(e.product.origin_price)),1),Object(n["i"])("td",f,Object(n["G"])(t.$toCurrency(e.product.price)),1),Object(n["i"])("td",null,Object(n["G"])(t.$toCurrency(e.total)),1),Object(n["i"])("td",null,[Object(n["i"])("button",{type:"button",class:"btn btn-primary",onClick:function(t){return y.deleteProduct(e.id)}}," 刪除 ",8,["onClick"])])])})),128))])])]),Object(n["i"])("div",p,[Object(n["i"])("div",h,"共"+Object(n["G"])(w.cartProduct.length)+"項",1),Object(n["i"])("div",j,"總金額: "+Object(n["G"])(t.$toCurrency(y.countTotalPrice)),1)]),Object(n["i"])("div",O,[Object(n["i"])("div",v,[Object(n["i"])("button",{type:"button",class:"btn btn-primary",onClick:e[1]||(e[1]=function(){return y.deleteAllProducts&&y.deleteAllProducts.apply(y,arguments)})}," 清空購物車 "),Object(n["i"])($,{class:"btn btn-primary",to:"/check-orderer"},{default:Object(n["O"])((function(){return[m]})),_:1})])])])],64)}c("159b"),c("99af");var w=c("2c10"),y=c("e4f3"),P={components:{Loading:w["a"]},data:function(){return{id:"",cartProduct:[]}},computed:{countTotalPrice:function(){var t=0;return this.cartProduct.forEach((function(e){t+=e.product.price*e.qty})),t}},methods:{getCartList:function(){var t=this,e="".concat("https://vue3-course-api.hexschool.io/","api/").concat("eva29485577","/cart");this.$http.get(e).then((function(e){e.data.success?t.cartProduct=e.data.data.carts:t.$swal({title:e.data.message,icon:"error"})})).catch((function(e){t.$swal({title:e,icon:"error"})}))},deleteProduct:function(t){var e=this,c="".concat("https://vue3-course-api.hexschool.io/","api/").concat("eva29485577","/cart/").concat(t);this.$http.delete(c).then((function(t){t.data.success?(e.$swal({title:t.data.message}),e.getCartList(),e.countPrice=0,y["a"].emit("updata-cart")):e.$swal({title:t.data.message,icon:"error"})})).catch((function(t){e.$swal({title:t,icon:"error"})}))},deleteAllProducts:function(){var t=this,e="".concat("https://vue3-course-api.hexschool.io/","api/").concat("eva29485577","/carts");this.$http.delete(e).then((function(e){e.data.success?(t.$swal({title:e.data.message}),t.getCartList(),t.countPrice=0,y["a"].emit("updata-cart")):t.$swal({title:e.data.message,icon:"error"})})).catch((function(e){t.$swal({title:e,icon:"error"})}))},productQtyAdd:function(){},productQtySubtract:function(){},updataProductQty:function(t){var e=this;if(t.qty>0){var c={product_id:t.id,qty:t.qty},n="".concat("https://vue3-course-api.hexschool.io/","api/").concat("eva29485577","/cart/").concat(t.id);this.$http.put(n,{data:c}).then((function(t){t.data.success?(e.$swal({title:t.data.message}),e.getCartList(),e.countPrice=0):e.$swal({title:t.data.message,icon:"error"})})).catch((function(t){e.$swal({title:t,icon:"error"})}))}else this.$swal({title:"數量不可小於零",icon:"error"})}},created:function(){this.getCartList()}};P.render=g;e["default"]=P}}]);
//# sourceMappingURL=chunk-bd9119d0.4c70bf43.js.map