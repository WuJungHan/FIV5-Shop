(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-665f8e15"],{"1dde":function(t,e,c){var a=c("d039"),o=c("b622"),s=c("2d00"),i=o("species");t.exports=function(t){return s>=51||!a((function(){var e=[],c=e.constructor={};return c[i]=function(){return{foo:1}},1!==e[t](Boolean).foo}))}},"2c10":function(t,e,c){"use strict";var a=c("7a23");function o(t,e,c,o,s,i){var n=Object(a["D"])("loading");return Object(a["w"])(),Object(a["e"])(n,{active:s.isLoading,"onUpdate:active":e[1]||(e[1]=function(t){return s.isLoading=t})},null,8,["active"])}var s={data:function(){return{isLoading:!0}},methods:{isloading:function(){var t=this;setTimeout((function(){t.isLoading=!1}),2e3)}},created:function(){this.isloading()}};s.render=o;e["a"]=s},8418:function(t,e,c){"use strict";var a=c("c04e"),o=c("9bf2"),s=c("5c6c");t.exports=function(t,e,c){var i=a(e);i in t?o.f(t,i,s(0,c)):t[i]=c}},"99af":function(t,e,c){"use strict";var a=c("23e7"),o=c("d039"),s=c("e8b5"),i=c("861d"),n=c("7b0b"),r=c("50c4"),l=c("8418"),u=c("65f0"),d=c("1dde"),b=c("b622"),f=c("2d00"),h=b("isConcatSpreadable"),O=9007199254740991,j="Maximum allowed index exceeded",p=f>=51||!o((function(){var t=[];return t[h]=!1,t.concat()[0]!==t})),v=d("concat"),g=function(t){if(!i(t))return!1;var e=t[h];return void 0!==e?!!e:s(t)},w=!p||!v;a({target:"Array",proto:!0,forced:w},{concat:function(t){var e,c,a,o,s,i=n(this),d=u(i,0),b=0;for(e=-1,a=arguments.length;e<a;e++)if(s=-1===e?i:arguments[e],g(s)){if(o=r(s.length),b+o>O)throw TypeError(j);for(c=0;c<o;c++,b++)c in s&&l(d,b,s[c])}else{if(b>=O)throw TypeError(j);l(d,b++,s)}return d.length=b,d}})},b0c0:function(t,e,c){var a=c("83ab"),o=c("9bf2").f,s=Function.prototype,i=s.toString,n=/^\s*function ([^ (]*)/,r="name";a&&!(r in s)&&o(s,r,{configurable:!0,get:function(){try{return i.call(this).match(n)[1]}catch(t){return""}}})},d1f0:function(t,e,c){"use strict";c.r(e);c("b0c0");var a=c("7a23"),o=Object(a["g"])('<div class="row text-center"><div class="col-4"><h5 class="fw-bold pt-3">STEP 01</h5><p class="fs-5 fw-bold">確認訂單商品</p></div><div class="col-4"><h5 class="fw-bold pt-3">STEP 02</h5><p class="fs-5 fw-bold">輸入訂購資料</p></div><div class="col-4 bg-secondary"><h5 class="fw-bold pt-3">STEP 03</h5><p class="fs-5 fw-bold">付款/完成訂單</p></div></div>',1),s={class:"mx-auto text-start w-75"},i=Object(a["i"])("h2",{class:"fw-bold"},"訂單資訊",-1),n={class:"table"},r=Object(a["i"])("thead",{class:"bg-secondary"},[Object(a["i"])("tr",null,[Object(a["i"])("th",{scope:"col"},"品名"),Object(a["i"])("th",{scope:"col"},"類別"),Object(a["i"])("th",{scope:"col"},"數量"),Object(a["i"])("th",{scope:"col"},"價格")])],-1),l=Object(a["i"])("td",null,null,-1),u=Object(a["i"])("td",null,null,-1),d=Object(a["i"])("td",null,null,-1),b={class:"text-end"},f=Object(a["i"])("h2",{class:"fw-bold"},"訂購人資料",-1),h={class:"table"},O={class:"text-start"},j={class:"bg-secondary row"},p=Object(a["i"])("td",{class:"col-4 fw-bold"},"姓名：",-1),v={class:"col-8"},g={class:"row"},w=Object(a["i"])("td",{class:"col-4 fw-bold"},"電話：",-1),m={class:"col-8"},y={class:"row"},x=Object(a["i"])("td",{class:"col-4 fw-bold"},"地址：",-1),k={class:"col-8"},P={class:"row"},C=Object(a["i"])("td",{class:"col-4 fw-bold"},"信箱：",-1),G={class:"col-8"},T={class:"row"},$=Object(a["i"])("td",{class:"col-4 fw-bold"},"備註：",-1),L={class:"col-8"},q={class:"mb-3"},E={class:"d-flex justify-content-between"},_=Object(a["h"])("回上頁"),S=Object(a["h"])("完成訂單");function D(t,e,c,D,A,B){var J=Object(a["D"])("Loading"),N=Object(a["D"])("router-link"),Q=Object(a["D"])("btn");return Object(a["w"])(),Object(a["e"])(a["a"],null,[Object(a["i"])("div",null,[Object(a["i"])(J)]),o,Object(a["i"])("section",s,[Object(a["i"])("div",null,[i,Object(a["i"])("table",n,[r,Object(a["i"])("tbody",null,[(Object(a["w"])(!0),Object(a["e"])(a["a"],null,Object(a["B"])(A.cartProduct,(function(t){return Object(a["w"])(),Object(a["e"])("tr",{key:t.id},[Object(a["i"])("td",null,Object(a["G"])(t.product.title),1),Object(a["i"])("td",null,Object(a["G"])(t.product.category),1),Object(a["i"])("td",null,Object(a["G"])(t.qty)+"/"+Object(a["G"])(t.product.unit),1),Object(a["i"])("td",null,"＄"+Object(a["G"])(t.final_total),1)])})),128)),Object(a["i"])("tr",null,[l,u,d,Object(a["i"])("td",b,"總計：＄"+Object(a["G"])(A.countPrice),1)])])])]),Object(a["i"])("div",null,[f,Object(a["i"])("table",h,[Object(a["i"])("tbody",O,[Object(a["i"])("tr",j,[p,Object(a["i"])("td",v,Object(a["G"])(A.data.user.name),1)]),Object(a["i"])("tr",g,[w,Object(a["i"])("td",m,Object(a["G"])(A.data.user.tel),1)]),Object(a["i"])("tr",y,[x,Object(a["i"])("td",k,Object(a["G"])(A.data.user.address),1)]),Object(a["i"])("tr",P,[C,Object(a["i"])("td",G,Object(a["G"])(A.data.user.email),1)]),Object(a["i"])("tr",T,[$,Object(a["i"])("td",L,Object(a["G"])(A.data.message),1)])])])])]),Object(a["i"])("div",q,[Object(a["i"])("div",E,[Object(a["i"])(N,{class:"btn btn-primary",to:"/check-orderer"},{default:Object(a["N"])((function(){return[_]})),_:1}),Object(a["i"])(Q,{class:"btn btn-primary",onClick:B.finishCheckOut_goToComplete},{default:Object(a["N"])((function(){return[S]})),_:1},8,["onClick"])])])],64)}c("99af"),c("159b");var A=c("2c10"),B={components:{Loading:A["a"]},data:function(){return{cartProduct:[],countPrice:0,data:{user:{email:"",name:"",tel:"",address:""},message:""}}},methods:{getCartList:function(){var t=this,e="".concat("https://vue3-course-api.hexschool.io/","api/").concat("eva29485577","/cart");this.$http.get(e).then((function(e){e.data.success?(t.cartProduct=e.data.data.carts,console.log(t.cartProduct)):alert(e.data.message)})).catch((function(t){console.log(t)}))},countAllPrice:function(){var t=this,e="".concat("https://vue3-course-api.hexschool.io/","api/").concat("eva29485577","/cart");this.$http.get(e).then((function(e){e.data.success?e.data.data.carts.forEach((function(e){t.countPrice+=e.final_total})):alert(e.data.message)})).catch((function(t){console.log(t)}))},goToCheckOrderer:function(){this.$router.push("/order-complete")},receiveQuery:function(){this.data.message=this.$route.query.message,this.data.user.email=this.$route.query.email,this.data.user.name=this.$route.query.name,this.data.user.tel=this.$route.query.tel,this.data.user.address=this.$route.query.address},finishCheckOut_goToComplete:function(){var t=this;if(!0===window.confirm("已確定資料無誤，確定送出訂單嗎?")){var e=this.data,c="".concat("https://vue3-course-api.hexschool.io/","api/").concat("eva29485577","/order");this.$http.post(c,{data:e}).then((function(e){e.data.success?(alert(e.data.message),t.goToCheckOrderer()):alert(e.data.message)})).catch((function(t){console.log(t)}))}}},created:function(){this.getCartList(),this.countAllPrice(),this.receiveQuery()}};B.render=D;e["default"]=B}}]);
//# sourceMappingURL=chunk-665f8e15.a371dd01.js.map