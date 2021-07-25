(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-378a50d0"],{"1d62":function(e,a,t){"use strict";t.r(a);t("b0c0");var r=t("7a23"),l=Object(r["g"])('<div class="row text-center"><div class="col-4"><h5 class="fw-bold pt-3">STEP 01</h5><p class="fs-5 fw-bold">確認訂單商品</p></div><div class="col-4 bg-secondary"><h5 class="fw-bold pt-3">STEP 02</h5><p class="fs-5 fw-bold">輸入訂購資料</p></div><div class="col-4"><h5 class="fw-bold pt-3">STEP 03</h5><p class="fs-5 fw-bold">付款/完成訂單</p></div></div>',1),i={class:"content w-75 mx-auto"},s={class:"row"},d={class:"col-12"},c={class:"mb-3"},n=Object(r["i"])("h2",{class:"fw-bold"},"請填寫訂購資料",-1),o=Object(r["i"])("label",{for:"orderName"},"姓名",-1),u=Object(r["i"])("div",{id:"orderNameHelp",class:"form-text text-warning fs-5"},null,-1),b=Object(r["i"])("label",{for:"orderTel"},"電話",-1),m=Object(r["i"])("div",{id:"orderTelHelp",class:"form-text text-warning fs-5"},null,-1),f=Object(r["i"])("label",{for:"orderAddress"},"地址",-1),O=Object(r["i"])("div",{id:"orderAddressHelp",class:"form-text text-warning fs-5"},null,-1),j=Object(r["i"])("label",{for:"ordererEmail"},"信箱",-1),p=Object(r["i"])("div",{id:"ordererEmailHelp",class:"form-text text-warning fs-5 mb-5"},null,-1),v=Object(r["i"])("label",{for:"message"},"備註",-1),h=Object(r["i"])("br",null,null,-1),g={class:"mb-3"},w={class:"d-flex justify-content-between"},x=Object(r["h"])("回上頁"),y=Object(r["h"])("下一步");function k(e,a,t,k,V,T){var E=Object(r["D"])("Loading"),H=Object(r["D"])("Field"),D=Object(r["D"])("ErrorMessage"),N=Object(r["D"])("Form"),C=Object(r["D"])("router-link"),L=Object(r["D"])("btn");return Object(r["w"])(),Object(r["e"])(r["a"],null,[Object(r["i"])("div",null,[Object(r["i"])(E)]),l,Object(r["i"])("section",i,[Object(r["i"])("div",s,[Object(r["i"])("div",d,[Object(r["i"])(N,{class:"fs-5 text"},{default:Object(r["N"])((function(e){var t=e.errors;return[Object(r["i"])("div",c,[n,o,Object(r["i"])(H,{type:"name",class:["form-control",{"is-invalid":t["姓名"]}],id:"orderName","aria-describedby":"orderNameHelp",name:"姓名",placeholder:"請輸入姓名",rules:"required",modelValue:V.data.user.name,"onUpdate:modelValue":a[1]||(a[1]=function(e){return V.data.user.name=e})},null,8,["class","modelValue"]),Object(r["i"])(D,{name:"姓名",class:"invalid-feedback"}),u,b,Object(r["i"])(H,{type:"tel",class:["form-control",{"is-invalid":t["電話"]}],id:"orderTel","aria-describedby":"orderTelHelp",name:"電話",placeholder:"請輸入電話",rules:"required|min:8|numeric",modelValue:V.data.user.tel,"onUpdate:modelValue":a[2]||(a[2]=function(e){return V.data.user.tel=e}),modelModifiers:{number:!0}},null,8,["class","modelValue"]),Object(r["i"])(D,{name:"電話",class:"invalid-feedback"}),m,f,Object(r["i"])(H,{type:"address",class:["form-control",{"is-invalid":t["地址"]}],id:"orderAddress","aria-describedby":"orderAddressHelp",name:"地址",placeholder:"請輸入地址",rules:"required",modelValue:V.data.user.address,"onUpdate:modelValue":a[3]||(a[3]=function(e){return V.data.user.address=e})},null,8,["class","modelValue"]),Object(r["i"])(D,{name:"地址",class:"invalid-feedback"}),O,j,Object(r["i"])(H,{type:"email",class:["form-control",{"is-invalid":t["信箱"]}],id:"ordererEmail","aria-describedby":"ordererEmailHelp",name:"信箱",placeholder:"請輸入信箱",rules:"email|required",modelValue:V.data.user.email,"onUpdate:modelValue":a[4]||(a[4]=function(e){return V.data.user.email=e})},null,8,["class","modelValue"]),Object(r["i"])(D,{name:"信箱",class:"invalid-feedback"}),p,v,h,Object(r["O"])(Object(r["i"])("textarea",{id:"message",name:"message","onUpdate:modelValue":a[5]||(a[5]=function(e){return V.data.message=e}),style:{resize:"none",width:"100%",height:"80px"},maxlength:"30",placeholder:"請輸入備註,最多30個字"},null,512),[[r["J"],V.data.message]])])]})),_:1})])])]),Object(r["i"])("div",g,[Object(r["i"])("div",w,[Object(r["i"])(C,{class:"btn btn-primary",to:"/cart"},{default:Object(r["N"])((function(){return[x]})),_:1}),Object(r["i"])(L,{class:"btn btn-primary",onClick:T.goToCheckOrderComplete},{default:Object(r["N"])((function(){return[y]})),_:1},8,["onClick"])])])],64)}var V=t("2c10"),T={components:{Loading:V["a"]},data:function(){return{data:{user:{email:"",name:"",tel:"",address:""},message:""}}},methods:{goToCheckOrderComplete:function(){""!==this.data.user.email&&""!==this.data.user.name&&""!==this.data.user.tel&&""!==this.data.user.address?this.$router.push("check-order-complete"):alert("請將資料填寫完畢")}},created:function(){}};T.render=k;a["default"]=T},"2c10":function(e,a,t){"use strict";var r=t("7a23");function l(e,a,t,l,i,s){var d=Object(r["D"])("loading");return Object(r["w"])(),Object(r["e"])(d,{active:i.isLoading,"onUpdate:active":a[1]||(a[1]=function(e){return i.isLoading=e})},null,8,["active"])}var i={data:function(){return{isLoading:!0}},methods:{isloading:function(){var e=this;setTimeout((function(){e.isLoading=!1}),2e3)}},created:function(){this.isloading()}};i.render=l;a["a"]=i},b0c0:function(e,a,t){var r=t("83ab"),l=t("9bf2").f,i=Function.prototype,s=i.toString,d=/^\s*function ([^ (]*)/,c="name";r&&!(c in i)&&l(i,c,{configurable:!0,get:function(){try{return s.call(this).match(d)[1]}catch(e){return""}}})}}]);
//# sourceMappingURL=chunk-378a50d0.61092349.js.map