(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-4b803447"],{"057f":function(t,e,n){var r=n("fc6a"),c=n("241c").f,o={}.toString,i="object"==typeof window&&window&&Object.getOwnPropertyNames?Object.getOwnPropertyNames(window):[],a=function(t){try{return c(t)}catch(e){return i.slice()}};t.exports.f=function(t){return i&&"[object Window]"==o.call(t)?a(t):c(r(t))}},"0857":function(t,e,n){"use strict";n("91d5")},"1dde":function(t,e,n){var r=n("d039"),c=n("b622"),o=n("2d00"),i=c("species");t.exports=function(t){return o>=51||!r((function(){var e=[],n=e.constructor={};return n[i]=function(){return{foo:1}},1!==e[t](Boolean).foo}))}},"2c10":function(t,e,n){"use strict";var r=n("7a23");function c(t,e,n,c,o,i){var a=Object(r["D"])("loading");return Object(r["w"])(),Object(r["e"])(a,{active:o.isLoading,"onUpdate:active":e[1]||(e[1]=function(t){return o.isLoading=t})},null,8,["active"])}var o={data:function(){return{isLoading:!0}},methods:{isloading:function(){var t=this;setTimeout((function(){t.isLoading=!1}),2e3)}},created:function(){this.isloading()}};o.render=c;e["a"]=o},"5d74":function(t,e,n){"use strict";n.r(e);n("a4d3"),n("e01a");var r=n("7a23"),c={class:"container mt-3"},o={class:"d-flex justify-content-between border-bottom"},i={class:""},a=Object(r["h"])("FIV5品牌首頁"),u=Object(r["h"])("/ "),s=Object(r["h"])("FIV5手造"),f=Object(r["i"])("div",{class:"d-flex d-none d-md-block"},[Object(r["i"])("input",{class:"me-2",type:"search",placeholder:"請輸入產品名稱","aria-label":"Search"}),Object(r["i"])("button",{class:"btn btn-outline-primary",type:""},"尋找手造")],-1),l={class:"row mt-3"},d={class:"col-12 col-md-2"},b={class:"list-group text-center"},p={class:""},g={class:""},h={class:""},v={class:""},O={class:"col-12 col-md-10 d-flex flex-wrap"},m={class:"my-card-img-div"},y={class:"card-body"},j={class:"card-title border-bottom pb-2 fw-bold fs-3"},w={class:"card-text fw-bold"},P=Object(r["h"])("原價:"),S={class:"line-through"},k=Object(r["h"])(" 特價:"),x={class:"text-danger fw-bold fs-5"},C={class:"d-grid gap-2 d-md-flex justify-content-md-end"};function E(t,e,n,E,L,_){var N=Object(r["D"])("Loading"),T=Object(r["D"])("router-link");return Object(r["w"])(),Object(r["e"])("main",c,[Object(r["i"])(N),Object(r["i"])("nav",o,[Object(r["i"])("div",i,[Object(r["i"])(T,{class:"","aria-current":"page",to:"/index"},{default:Object(r["O"])((function(){return[a]})),_:1}),u,Object(r["i"])(T,{class:"","aria-current":"page",to:"/products"},{default:Object(r["O"])((function(){return[s]})),_:1})]),f]),Object(r["i"])("div",l,[Object(r["i"])("div",d,[Object(r["i"])("div",b,[Object(r["i"])("ul",null,[Object(r["i"])("li",null,[Object(r["i"])("button",{type:"button",class:"list-group-item list-group-item-action pt-3 pb-3 fs-5 fw-bold","aria-current":"true",onClick:e[1]||(e[1]=function(t){return _.getProducts()})}," 全部商品 ")]),Object(r["i"])("li",p,[Object(r["i"])("button",{type:"button",class:"list-group-item list-group-item-action pt-3 pb-3 fs-5 fw-bold","aria-current":"true",onClick:e[2]||(e[2]=function(t){return _.getRingProducts()})}," 手造戒指 ")]),Object(r["i"])("li",g,[Object(r["i"])("button",{type:"button",class:"list-group-item list-group-item-action pt-3 pb-3 fs-5 fw-bold","aria-current":"true",onClick:e[3]||(e[3]=function(t){return _.getLoversRingProducts()})}," 手造對戒 ")]),Object(r["i"])("li",h,[Object(r["i"])("button",{type:"button",class:"list-group-item list-group-item-action pt-3 pb-3 fs-5 fw-bold","aria-current":"true",onClick:e[4]||(e[4]=function(t){return _.getBraceletProducts()})}," 手造手鐲 ")]),Object(r["i"])("li",v,[Object(r["i"])("button",{type:"button",class:"list-group-item list-group-item-action pt-3 pb-3 fs-5 fw-bold","aria-current":"true",onClick:e[5]||(e[5]=function(t){return _.getNecklaceProducts()})}," 手造項鍊 ")])])])]),Object(r["i"])("div",O,[(Object(r["w"])(!0),Object(r["e"])(r["a"],null,Object(r["B"])(L.products,(function(t){return Object(r["w"])(),Object(r["e"])("div",{key:t.id,class:"card mb-3 me-5  my-card animate__animated animate__fadeIn",style:{width:"18rem"}},[Object(r["i"])("div",m,[Object(r["i"])("div",{class:"card-img-top my-card-img",style:[{height:"220px","background-size":"cover","background-position":"center"},{"background-image":"url(".concat(t.imageUrl,")")}]},null,4)]),Object(r["i"])("div",y,[Object(r["i"])("h5",j,Object(r["G"])(t.title),1),Object(r["i"])("p",w,Object(r["G"])(t.category),1),Object(r["i"])("p",null,Object(r["G"])(t.description),1),Object(r["i"])("p",null,Object(r["G"])(t.content),1),Object(r["i"])("p",null,[P,Object(r["i"])("span",S,Object(r["G"])(t.origin_price),1),k,Object(r["i"])("span",x,Object(r["G"])(t.price),1)])]),Object(r["i"])("div",C,[Object(r["i"])("button",{class:"btn btn-outline-primary me-md-2",type:"button",onClick:function(e){return _.goToProductPage(t)}},"產品詳情",8,["onClick"]),Object(r["i"])("button",{class:"btn btn-primary",type:"button",onClick:function(e){return _.addCart(t.id)}},"立即選購",8,["onClick"])])])})),128))])])])}n("159b"),n("99af");var L=n("2c10"),_=n("e4f3"),N={components:{Loading:L["a"]},data:function(){return{products:[],categoryProducts:[]}},methods:{getProducts:function(){this.products=this.categoryProducts},goToProductPage:function(t){this.$router.push("/product/".concat(t.id))},getRingProducts:function(){var t=[];this.categoryProducts.forEach((function(e){"戒指"===e.category&&t.push(e)})),this.products=t},getLoversRingProducts:function(){var t=[];this.categoryProducts.forEach((function(e){"對戒"===e.category&&t.push(e)})),this.products=t},getBraceletProducts:function(){var t=[];this.categoryProducts.forEach((function(e){"手鐲"===e.category&&t.push(e)})),this.products=t},getNecklaceProducts:function(){var t=[];this.categoryProducts.forEach((function(e){"項鍊"===e.category&&t.push(e)})),this.products=t},addCart:function(t){var e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:1,n="".concat("https://vue3-course-api.hexschool.io/","api/").concat("eva29485577","/cart"),r={product_id:t,qty:e};this.$http.post(n,{data:r}).then((function(t){t.data.success?(alert(t.data.message),_["a"].emit("updata-cart")):alert(t.data.message)})).catch((function(t){console.log(t)}))}},created:function(){var t=this,e="".concat("https://vue3-course-api.hexschool.io/","api/").concat("eva29485577","/products");this.$http.get(e).then((function(e){t.products=e.data.products,t.categoryProducts=e.data.products})).catch((function(t){console.log(t)}))}};n("0857");N.render=E;e["default"]=N},"746f":function(t,e,n){var r=n("428f"),c=n("5135"),o=n("e538"),i=n("9bf2").f;t.exports=function(t){var e=r.Symbol||(r.Symbol={});c(e,t)||i(e,t,{value:o.f(t)})}},8418:function(t,e,n){"use strict";var r=n("c04e"),c=n("9bf2"),o=n("5c6c");t.exports=function(t,e,n){var i=r(e);i in t?c.f(t,i,o(0,n)):t[i]=n}},"91d5":function(t,e,n){},"99af":function(t,e,n){"use strict";var r=n("23e7"),c=n("d039"),o=n("e8b5"),i=n("861d"),a=n("7b0b"),u=n("50c4"),s=n("8418"),f=n("65f0"),l=n("1dde"),d=n("b622"),b=n("2d00"),p=d("isConcatSpreadable"),g=9007199254740991,h="Maximum allowed index exceeded",v=b>=51||!c((function(){var t=[];return t[p]=!1,t.concat()[0]!==t})),O=l("concat"),m=function(t){if(!i(t))return!1;var e=t[p];return void 0!==e?!!e:o(t)},y=!v||!O;r({target:"Array",proto:!0,forced:y},{concat:function(t){var e,n,r,c,o,i=a(this),l=f(i,0),d=0;for(e=-1,r=arguments.length;e<r;e++)if(o=-1===e?i:arguments[e],m(o)){if(c=u(o.length),d+c>g)throw TypeError(h);for(n=0;n<c;n++,d++)n in o&&s(l,d,o[n])}else{if(d>=g)throw TypeError(h);s(l,d++,o)}return l.length=d,l}})},a4d3:function(t,e,n){"use strict";var r=n("23e7"),c=n("da84"),o=n("d066"),i=n("c430"),a=n("83ab"),u=n("4930"),s=n("fdbf"),f=n("d039"),l=n("5135"),d=n("e8b5"),b=n("861d"),p=n("825a"),g=n("7b0b"),h=n("fc6a"),v=n("c04e"),O=n("5c6c"),m=n("7c73"),y=n("df75"),j=n("241c"),w=n("057f"),P=n("7418"),S=n("06cf"),k=n("9bf2"),x=n("d1e7"),C=n("9112"),E=n("6eeb"),L=n("5692"),_=n("f772"),N=n("d012"),T=n("90e3"),G=n("b622"),$=n("e538"),B=n("746f"),D=n("d44e"),F=n("69f3"),I=n("b727").forEach,J=_("hidden"),R="Symbol",M="prototype",U=G("toPrimitive"),V=F.set,q=F.getterFor(R),z=Object[M],A=c.Symbol,Q=o("JSON","stringify"),W=S.f,H=k.f,K=w.f,X=x.f,Y=L("symbols"),Z=L("op-symbols"),tt=L("string-to-symbol-registry"),et=L("symbol-to-string-registry"),nt=L("wks"),rt=c.QObject,ct=!rt||!rt[M]||!rt[M].findChild,ot=a&&f((function(){return 7!=m(H({},"a",{get:function(){return H(this,"a",{value:7}).a}})).a}))?function(t,e,n){var r=W(z,e);r&&delete z[e],H(t,e,n),r&&t!==z&&H(z,e,r)}:H,it=function(t,e){var n=Y[t]=m(A[M]);return V(n,{type:R,tag:t,description:e}),a||(n.description=e),n},at=s?function(t){return"symbol"==typeof t}:function(t){return Object(t)instanceof A},ut=function(t,e,n){t===z&&ut(Z,e,n),p(t);var r=v(e,!0);return p(n),l(Y,r)?(n.enumerable?(l(t,J)&&t[J][r]&&(t[J][r]=!1),n=m(n,{enumerable:O(0,!1)})):(l(t,J)||H(t,J,O(1,{})),t[J][r]=!0),ot(t,r,n)):H(t,r,n)},st=function(t,e){p(t);var n=h(e),r=y(n).concat(pt(n));return I(r,(function(e){a&&!lt.call(n,e)||ut(t,e,n[e])})),t},ft=function(t,e){return void 0===e?m(t):st(m(t),e)},lt=function(t){var e=v(t,!0),n=X.call(this,e);return!(this===z&&l(Y,e)&&!l(Z,e))&&(!(n||!l(this,e)||!l(Y,e)||l(this,J)&&this[J][e])||n)},dt=function(t,e){var n=h(t),r=v(e,!0);if(n!==z||!l(Y,r)||l(Z,r)){var c=W(n,r);return!c||!l(Y,r)||l(n,J)&&n[J][r]||(c.enumerable=!0),c}},bt=function(t){var e=K(h(t)),n=[];return I(e,(function(t){l(Y,t)||l(N,t)||n.push(t)})),n},pt=function(t){var e=t===z,n=K(e?Z:h(t)),r=[];return I(n,(function(t){!l(Y,t)||e&&!l(z,t)||r.push(Y[t])})),r};if(u||(A=function(){if(this instanceof A)throw TypeError("Symbol is not a constructor");var t=arguments.length&&void 0!==arguments[0]?String(arguments[0]):void 0,e=T(t),n=function(t){this===z&&n.call(Z,t),l(this,J)&&l(this[J],e)&&(this[J][e]=!1),ot(this,e,O(1,t))};return a&&ct&&ot(z,e,{configurable:!0,set:n}),it(e,t)},E(A[M],"toString",(function(){return q(this).tag})),E(A,"withoutSetter",(function(t){return it(T(t),t)})),x.f=lt,k.f=ut,S.f=dt,j.f=w.f=bt,P.f=pt,$.f=function(t){return it(G(t),t)},a&&(H(A[M],"description",{configurable:!0,get:function(){return q(this).description}}),i||E(z,"propertyIsEnumerable",lt,{unsafe:!0}))),r({global:!0,wrap:!0,forced:!u,sham:!u},{Symbol:A}),I(y(nt),(function(t){B(t)})),r({target:R,stat:!0,forced:!u},{for:function(t){var e=String(t);if(l(tt,e))return tt[e];var n=A(e);return tt[e]=n,et[n]=e,n},keyFor:function(t){if(!at(t))throw TypeError(t+" is not a symbol");if(l(et,t))return et[t]},useSetter:function(){ct=!0},useSimple:function(){ct=!1}}),r({target:"Object",stat:!0,forced:!u,sham:!a},{create:ft,defineProperty:ut,defineProperties:st,getOwnPropertyDescriptor:dt}),r({target:"Object",stat:!0,forced:!u},{getOwnPropertyNames:bt,getOwnPropertySymbols:pt}),r({target:"Object",stat:!0,forced:f((function(){P.f(1)}))},{getOwnPropertySymbols:function(t){return P.f(g(t))}}),Q){var gt=!u||f((function(){var t=A();return"[null]"!=Q([t])||"{}"!=Q({a:t})||"{}"!=Q(Object(t))}));r({target:"JSON",stat:!0,forced:gt},{stringify:function(t,e,n){var r,c=[t],o=1;while(arguments.length>o)c.push(arguments[o++]);if(r=e,(b(e)||void 0!==t)&&!at(t))return d(e)||(e=function(t,e){if("function"==typeof r&&(e=r.call(this,t,e)),!at(e))return e}),c[1]=e,Q.apply(null,c)}})}A[M][U]||C(A[M],U,A[M].valueOf),D(A,R),N[J]=!0},e01a:function(t,e,n){"use strict";var r=n("23e7"),c=n("83ab"),o=n("da84"),i=n("5135"),a=n("861d"),u=n("9bf2").f,s=n("e893"),f=o.Symbol;if(c&&"function"==typeof f&&(!("description"in f.prototype)||void 0!==f().description)){var l={},d=function(){var t=arguments.length<1||void 0===arguments[0]?void 0:String(arguments[0]),e=this instanceof d?new f(t):void 0===t?f():f(t);return""===t&&(l[e]=!0),e};s(d,f);var b=d.prototype=f.prototype;b.constructor=d;var p=b.toString,g="Symbol(test)"==String(f("test")),h=/^Symbol\((.*)\)[^)]+$/;u(b,"description",{configurable:!0,get:function(){var t=a(this)?this.valueOf():this,e=p.call(t);if(i(l,t))return"";var n=g?e.slice(7,-1):e.replace(h,"$1");return""===n?void 0:n}}),r({global:!0,forced:!0},{Symbol:d})}},e4f3:function(t,e,n){"use strict";var r=function(t){return{all:t=t||new Map,on:function(e,n){var r=t.get(e);r?r.push(n):t.set(e,[n])},off:function(e,n){var r=t.get(e);r&&(n?r.splice(r.indexOf(n)>>>0,1):t.set(e,[]))},emit:function(e,n){var r=t.get(e);r&&r.slice().map((function(t){t(n)})),(r=t.get("*"))&&r.slice().map((function(t){t(e,n)}))}}},c=r();e["a"]=c},e538:function(t,e,n){var r=n("b622");e.f=r}}]);
//# sourceMappingURL=chunk-4b803447.4e3075cb.js.map