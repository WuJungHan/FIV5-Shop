(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-6b2108a0"],{"1dde":function(t,e,c){var n=c("d039"),r=c("b622"),i=c("2d00"),l=r("species");t.exports=function(t){return i>=51||!n((function(){var e=[],c=e.constructor={};return c[l]=function(){return{foo:1}},1!==e[t](Boolean).foo}))}},"3a5e":function(t,e,c){"use strict";var n=c("7a23");function r(t,e,c,r,i,l){var o=Object(n["D"])("loading",!0);return Object(n["w"])(),Object(n["e"])(o,{active:i.isLoading,"onUpdate:active":e[1]||(e[1]=function(t){return i.isLoading=t})},null,8,["active"])}var i={data:function(){return{isLoading:!0}},methods:{isloading:function(){var t=this;setTimeout((function(){t.isLoading=!1}),2e3)}},created:function(){this.isloading()}};i.render=r;e["a"]=i},8418:function(t,e,c){"use strict";var n=c("c04e"),r=c("9bf2"),i=c("5c6c");t.exports=function(t,e,c){var l=n(e);l in t?r.f(t,l,i(0,c)):t[l]=c}},"99af":function(t,e,c){"use strict";var n=c("23e7"),r=c("d039"),i=c("e8b5"),l=c("861d"),o=c("7b0b"),a=c("50c4"),u=c("8418"),b=c("65f0"),d=c("1dde"),s=c("b622"),O=c("2d00"),j=s("isConcatSpreadable"),f=9007199254740991,h="Maximum allowed index exceeded",p=O>=51||!r((function(){var t=[];return t[j]=!1,t.concat()[0]!==t})),g=d("concat"),v=function(t){if(!l(t))return!1;var e=t[j];return void 0!==e?!!e:i(t)},w=!p||!g;n({target:"Array",proto:!0,forced:w},{concat:function(t){var e,c,n,r,i,l=o(this),d=b(l,0),s=0;for(e=-1,n=arguments.length;e<n;e++)if(i=-1===e?l:arguments[e],v(i)){if(r=a(i.length),s+r>f)throw TypeError(h);for(c=0;c<r;c++,s++)c in i&&u(d,s,i[c])}else{if(s>=f)throw TypeError(h);u(d,s++,i)}return d.length=s,d}})},b0c0:function(t,e,c){var n=c("83ab"),r=c("9bf2").f,i=Function.prototype,l=i.toString,o=/^\s*function ([^ (]*)/,a="name";n&&!(a in i)&&r(i,a,{configurable:!0,get:function(){try{return l.call(this).match(o)[1]}catch(t){return""}}})},da25:function(t,e,c){"use strict";c.r(e);c("b0c0");var n=c("7a23"),r={key:0,class:"container mt-3"},i={class:"d-flex justify-content-between"},l=Object(n["i"])("h2",{class:"fw-bold"},"訂單詳情",-1),o=Object(n["h"])("回訂單列表"),a={class:"table"},u=Object(n["i"])("th",{class:"w-25"},"訂單編號：",-1),b=Object(n["i"])("td",null,"訂單產生日期：",-1),d=Object(n["i"])("td",null,"訂單金額：",-1),s=Object(n["i"])("td",null,"付款狀態：",-1),O=Object(n["i"])("tr",null,[Object(n["i"])("td",null,"出貨狀態："),Object(n["i"])("td",null,"未出貨")],-1),j=Object(n["i"])("h2",{class:"fw-bold"},"訂購人資料",-1),f={class:"table"},h=Object(n["i"])("th",{class:"w-25"},"姓名：",-1),p=Object(n["i"])("td",null,"電話：",-1),g=Object(n["i"])("td",null,"地址：",-1),v=Object(n["i"])("td",null,"信箱：",-1),w=Object(n["i"])("td",null,"備註：",-1),m=Object(n["i"])("h2",{class:"fw-bold"},"訂購產品清單",-1),y={class:"table"},G=Object(n["i"])("thead",null,[Object(n["i"])("tr",null,[Object(n["i"])("th",{scope:"col"},"商品"),Object(n["i"])("th",{scope:"col"},"品名"),Object(n["i"])("th",{scope:"col"},"類別"),Object(n["i"])("th",{scope:"col"},"數量"),Object(n["i"])("th",{scope:"col"},"價格")])],-1),k=Object(n["i"])("tr",null,[Object(n["i"])("td"),Object(n["i"])("td"),Object(n["i"])("td")],-1);function D(t,e,c,D,_,x){var L=Object(n["D"])("Loading"),S=Object(n["D"])("router-link");return Object(n["w"])(),Object(n["e"])(n["a"],null,[Object(n["i"])("div",null,[Object(n["i"])(L)]),_.checkSuccess?(Object(n["w"])(),Object(n["e"])("div",r,[Object(n["i"])("div",i,[l,Object(n["i"])(S,{class:"btn btn-primary",to:"/orders"},{default:Object(n["O"])((function(){return[o]})),_:1})]),Object(n["i"])("table",a,[Object(n["i"])("thead",null,[Object(n["i"])("tr",null,[u,Object(n["i"])("th",null,Object(n["G"])(_.id),1)])]),Object(n["i"])("tbody",null,[Object(n["i"])("tr",null,[b,Object(n["i"])("td",null,Object(n["G"])(new Date(1e3*_.order.create_at).getFullYear()+"/"+(new Date(1e3*_.order.create_at).getMonth()+1)+"/"+new Date(1e3*_.order.create_at).getDate()+" "+new Date(1e3*_.order.create_at).getHours()+":"+new Date(1e3*_.order.create_at).getMinutes()+":"+new Date(1e3*_.order.create_at).getSeconds()),1)]),Object(n["i"])("tr",null,[d,Object(n["i"])("td",null,"＄"+Object(n["G"])(t.$toCurrency(_.order.total)),1)]),Object(n["i"])("tr",null,[s,Object(n["i"])("td",null,Object(n["G"])(_.order.is_paid?"付款完成":"未付款"),1)]),O])]),j,Object(n["i"])("table",f,[Object(n["i"])("thead",null,[Object(n["i"])("tr",null,[h,Object(n["i"])("th",null,Object(n["G"])(_.order.user.name),1)])]),Object(n["i"])("tbody",null,[Object(n["i"])("tr",null,[p,Object(n["i"])("td",null,Object(n["G"])(_.order.user.tel),1)]),Object(n["i"])("tr",null,[g,Object(n["i"])("td",null,Object(n["G"])(_.order.user.address),1)]),Object(n["i"])("tr",null,[v,Object(n["i"])("td",null,Object(n["G"])(_.order.user.email),1)]),Object(n["i"])("tr",null,[w,Object(n["i"])("td",null,Object(n["G"])(_.order.message),1)])])]),m,Object(n["i"])("table",y,[G,Object(n["i"])("tbody",null,[(Object(n["w"])(!0),Object(n["e"])(n["a"],null,Object(n["B"])(_.order.products,(function(e){return Object(n["w"])(),Object(n["e"])("tr",{key:e.id},[Object(n["i"])("td",null,[Object(n["i"])("img",{style:{height:"120px","background-size":"cover","background-position":"center","background-repeat":"no-repeat"},src:e.product.imageUrl},null,8,["src"])]),Object(n["i"])("td",null,Object(n["G"])(e.product.title),1),Object(n["i"])("td",null,Object(n["G"])(e.product.category),1),Object(n["i"])("td",null,Object(n["G"])(e.qty)+"/"+Object(n["G"])(e.product.unit),1),Object(n["i"])("td",null,"＄"+Object(n["G"])(t.$toCurrency(e.final_total)),1)])})),128)),k])])])):Object(n["f"])("",!0)],64)}c("99af"),c("159b");var _=c("3a5e"),x={components:{Loading:_["a"]},data:function(){return{checkSuccess:"",order:{},id:""}},methods:{getOrdersList:function(){var t=this,e="".concat("https://vue3-course-api.hexschool.io/","api/").concat("eva29485577","/admin/orders");this.$http.get(e).then((function(e){if(e.data.success){var c=e.data.orders;t.checkSuccess=!0,c.forEach((function(e){e.id===t.id&&(t.order=e)}))}else t.$swal({title:e.data.message,icon:"error"})})).catch((function(e){t.$swal({title:e,icon:"error"})}))},upDataOrder:function(){}},created:function(){var t=this.$route.params.id;this.id=t,this.getOrdersList()}};x.render=D;e["default"]=x}}]);
//# sourceMappingURL=chunk-6b2108a0.c79d4db0.js.map