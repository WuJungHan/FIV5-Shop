(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-9204d794"],{"057f":function(t,e,n){var r=n("fc6a"),c=n("241c").f,i={}.toString,o="object"==typeof window&&window&&Object.getOwnPropertyNames?Object.getOwnPropertyNames(window):[],a=function(t){try{return c(t)}catch(e){return o.slice()}};t.exports.f=function(t){return o&&"[object Window]"==i.call(t)?a(t):c(r(t))}},"1dde":function(t,e,n){var r=n("d039"),c=n("b622"),i=n("2d00"),o=c("species");t.exports=function(t){return i>=51||!r((function(){var e=[],n=e.constructor={};return n[o]=function(){return{foo:1}},1!==e[t](Boolean).foo}))}},"21a6":function(t,e,n){"use strict";n("abab")},"3a5e":function(t,e,n){"use strict";var r=n("7a23");function c(t,e,n,c,i,o){var a=Object(r["D"])("loading",!0);return Object(r["w"])(),Object(r["e"])(a,{active:i.isLoading,"onUpdate:active":e[1]||(e[1]=function(t){return i.isLoading=t})},null,8,["active"])}var i={data:function(){return{isLoading:!0}},methods:{isloading:function(){var t=this;setTimeout((function(){t.isLoading=!1}),2e3)}},created:function(){this.isloading()}};i.render=c;e["a"]=i},"3c46":function(t,e,n){"use strict";n.r(e);n("a4d3"),n("e01a");var r=n("7a23"),c={class:"container mt-3 mb-3"},i={class:"border-bottom pb-3 mb-3 d-flex"},o=Object(r["h"])("FIV5品牌首頁/"),a=Object(r["h"])("FIV5手造/"),u={class:"row"},f={class:"col-12 col-md-6"},s={class:"product-img"},l={class:"col-12 col-md-6 d-flex flex-column justify-content-center"},d={class:"fw-bolder"},b={key:0},p=Object(r["h"])(" 原價:"),h={class:"line-through"},g=Object(r["h"])(" 特價:"),v={class:"text-danger fw-bold fs-5"},O=Object(r["h"])(" 數量: "),m=Object(r["h"])("回上頁");function y(t,e,n,y,j,w){var S=Object(r["D"])("Loading"),x=Object(r["D"])("router-link");return Object(r["w"])(),Object(r["e"])("main",c,[Object(r["i"])(S),Object(r["i"])("ul",i,[Object(r["i"])("li",null,[Object(r["i"])(x,{class:"me-1","aria-current":"page",to:"/index"},{default:Object(r["O"])((function(){return[o]})),_:1})]),Object(r["i"])("li",null,[Object(r["i"])(x,{class:"me-1","aria-current":"page",to:"/products"},{default:Object(r["O"])((function(){return[a]})),_:1})]),Object(r["i"])("li",null,[Object(r["i"])(x,{"aria-current":"page",to:"/product/:id"},{default:Object(r["O"])((function(){return[Object(r["h"])(Object(r["G"])(j.product.category)+"-"+Object(r["G"])(j.product.title),1)]})),_:1})])]),Object(r["i"])("div",u,[Object(r["i"])("div",f,[Object(r["i"])("div",s,[Object(r["i"])("div",{class:"mx-auto",style:[{height:"500px","max-width":"500px","background-size":"contain","background-position":"center","background-repeat":"no-repeat"},{"background-image":"url(".concat(j.product.imageUrl,")")}]},null,4)])]),Object(r["i"])("div",l,[Object(r["i"])("div",null,[Object(r["i"])("h2",d,Object(r["G"])(j.product.title),1),Object(r["i"])("p",null,Object(r["G"])(j.product.category),1),Object(r["i"])("h3",null,Object(r["G"])(j.product.description),1),Object(r["i"])("p",null,Object(r["G"])(j.product.content),1),j.product.price?(Object(r["w"])(),Object(r["e"])("p",b,[p,Object(r["i"])("span",h,Object(r["G"])(t.$toCurrency(j.product.origin_price)),1),g,Object(r["i"])("span",v,Object(r["G"])(t.$toCurrency(j.product.price)),1)])):Object(r["f"])("",!0),Object(r["i"])("p",null,[O,Object(r["P"])(Object(r["i"])("input",{min:"1",max:"99",type:"number","onUpdate:modelValue":e[1]||(e[1]=function(t){return j.qty=t})},null,512),[[r["K"],j.qty,void 0,{number:!0}]])]),Object(r["i"])("button",{type:"button",class:"btn btn-success me-3",onClick:e[2]||(e[2]=function(t){return w.addCart()})}," 加入購物車 "),Object(r["i"])(x,{class:"btn btn-primary",to:"/products"},{default:Object(r["O"])((function(){return[m]})),_:1})])])])])}n("99af"),n("a9e3");var j=n("3a5e"),w=n("e4f3"),S={components:{Loading:j["a"]},data:function(){return{product:{},id:"",qty:1}},methods:{getProduct:function(){var t=this,e="".concat("https://vue3-course-api.hexschool.io/","api/").concat("eva29485577","/product/").concat(this.id);this.$http.get(e).then((function(e){e.data.success?t.product=e.data.product:t.$swal({title:e.data.message,icon:"error"})})).catch((function(e){t.$swal({title:e,icon:"error"})}))},addCart:function(){var t=this,e="".concat("https://vue3-course-api.hexschool.io/","api/").concat("eva29485577","/cart"),n={product_id:this.id,qty:Number(this.qty)};this.$http.post(e,{data:n}).then((function(e){e.data.success?(t.$swal({title:e.data.message}),w["a"].emit("updata-cart")):t.$swal({title:e.data.message,icon:"error"})})).catch((function(e){t.$swal({title:e,icon:"error"})}))}},created:function(){var t=this.$route.params.id;this.id=t,this.getProduct()}};n("21a6");S.render=y;e["default"]=S},5899:function(t,e){t.exports="\t\n\v\f\r                　\u2028\u2029\ufeff"},"58a8":function(t,e,n){var r=n("1d80"),c=n("5899"),i="["+c+"]",o=RegExp("^"+i+i+"*"),a=RegExp(i+i+"*$"),u=function(t){return function(e){var n=String(r(e));return 1&t&&(n=n.replace(o,"")),2&t&&(n=n.replace(a,"")),n}};t.exports={start:u(1),end:u(2),trim:u(3)}},7156:function(t,e,n){var r=n("861d"),c=n("d2bb");t.exports=function(t,e,n){var i,o;return c&&"function"==typeof(i=e.constructor)&&i!==n&&r(o=i.prototype)&&o!==n.prototype&&c(t,o),t}},"746f":function(t,e,n){var r=n("428f"),c=n("5135"),i=n("e538"),o=n("9bf2").f;t.exports=function(t){var e=r.Symbol||(r.Symbol={});c(e,t)||o(e,t,{value:i.f(t)})}},8418:function(t,e,n){"use strict";var r=n("c04e"),c=n("9bf2"),i=n("5c6c");t.exports=function(t,e,n){var o=r(e);o in t?c.f(t,o,i(0,n)):t[o]=n}},"99af":function(t,e,n){"use strict";var r=n("23e7"),c=n("d039"),i=n("e8b5"),o=n("861d"),a=n("7b0b"),u=n("50c4"),f=n("8418"),s=n("65f0"),l=n("1dde"),d=n("b622"),b=n("2d00"),p=d("isConcatSpreadable"),h=9007199254740991,g="Maximum allowed index exceeded",v=b>=51||!c((function(){var t=[];return t[p]=!1,t.concat()[0]!==t})),O=l("concat"),m=function(t){if(!o(t))return!1;var e=t[p];return void 0!==e?!!e:i(t)},y=!v||!O;r({target:"Array",proto:!0,forced:y},{concat:function(t){var e,n,r,c,i,o=a(this),l=s(o,0),d=0;for(e=-1,r=arguments.length;e<r;e++)if(i=-1===e?o:arguments[e],m(i)){if(c=u(i.length),d+c>h)throw TypeError(g);for(n=0;n<c;n++,d++)n in i&&f(l,d,i[n])}else{if(d>=h)throw TypeError(g);f(l,d++,i)}return l.length=d,l}})},a4d3:function(t,e,n){"use strict";var r=n("23e7"),c=n("da84"),i=n("d066"),o=n("c430"),a=n("83ab"),u=n("4930"),f=n("fdbf"),s=n("d039"),l=n("5135"),d=n("e8b5"),b=n("861d"),p=n("825a"),h=n("7b0b"),g=n("fc6a"),v=n("c04e"),O=n("5c6c"),m=n("7c73"),y=n("df75"),j=n("241c"),w=n("057f"),S=n("7418"),x=n("06cf"),N=n("9bf2"),I=n("d1e7"),E=n("9112"),k=n("6eeb"),P=n("5692"),_=n("f772"),$=n("d012"),A=n("90e3"),C=n("b622"),G=n("e538"),T=n("746f"),F=n("d44e"),L=n("69f3"),V=n("b727").forEach,M=_("hidden"),q="Symbol",U="prototype",D=C("toPrimitive"),J=L.set,R=L.getterFor(q),X=Object[U],Y=c.Symbol,z=i("JSON","stringify"),B=x.f,K=N.f,Q=w.f,W=I.f,H=P("symbols"),Z=P("op-symbols"),tt=P("string-to-symbol-registry"),et=P("symbol-to-string-registry"),nt=P("wks"),rt=c.QObject,ct=!rt||!rt[U]||!rt[U].findChild,it=a&&s((function(){return 7!=m(K({},"a",{get:function(){return K(this,"a",{value:7}).a}})).a}))?function(t,e,n){var r=B(X,e);r&&delete X[e],K(t,e,n),r&&t!==X&&K(X,e,r)}:K,ot=function(t,e){var n=H[t]=m(Y[U]);return J(n,{type:q,tag:t,description:e}),a||(n.description=e),n},at=f?function(t){return"symbol"==typeof t}:function(t){return Object(t)instanceof Y},ut=function(t,e,n){t===X&&ut(Z,e,n),p(t);var r=v(e,!0);return p(n),l(H,r)?(n.enumerable?(l(t,M)&&t[M][r]&&(t[M][r]=!1),n=m(n,{enumerable:O(0,!1)})):(l(t,M)||K(t,M,O(1,{})),t[M][r]=!0),it(t,r,n)):K(t,r,n)},ft=function(t,e){p(t);var n=g(e),r=y(n).concat(pt(n));return V(r,(function(e){a&&!lt.call(n,e)||ut(t,e,n[e])})),t},st=function(t,e){return void 0===e?m(t):ft(m(t),e)},lt=function(t){var e=v(t,!0),n=W.call(this,e);return!(this===X&&l(H,e)&&!l(Z,e))&&(!(n||!l(this,e)||!l(H,e)||l(this,M)&&this[M][e])||n)},dt=function(t,e){var n=g(t),r=v(e,!0);if(n!==X||!l(H,r)||l(Z,r)){var c=B(n,r);return!c||!l(H,r)||l(n,M)&&n[M][r]||(c.enumerable=!0),c}},bt=function(t){var e=Q(g(t)),n=[];return V(e,(function(t){l(H,t)||l($,t)||n.push(t)})),n},pt=function(t){var e=t===X,n=Q(e?Z:g(t)),r=[];return V(n,(function(t){!l(H,t)||e&&!l(X,t)||r.push(H[t])})),r};if(u||(Y=function(){if(this instanceof Y)throw TypeError("Symbol is not a constructor");var t=arguments.length&&void 0!==arguments[0]?String(arguments[0]):void 0,e=A(t),n=function(t){this===X&&n.call(Z,t),l(this,M)&&l(this[M],e)&&(this[M][e]=!1),it(this,e,O(1,t))};return a&&ct&&it(X,e,{configurable:!0,set:n}),ot(e,t)},k(Y[U],"toString",(function(){return R(this).tag})),k(Y,"withoutSetter",(function(t){return ot(A(t),t)})),I.f=lt,N.f=ut,x.f=dt,j.f=w.f=bt,S.f=pt,G.f=function(t){return ot(C(t),t)},a&&(K(Y[U],"description",{configurable:!0,get:function(){return R(this).description}}),o||k(X,"propertyIsEnumerable",lt,{unsafe:!0}))),r({global:!0,wrap:!0,forced:!u,sham:!u},{Symbol:Y}),V(y(nt),(function(t){T(t)})),r({target:q,stat:!0,forced:!u},{for:function(t){var e=String(t);if(l(tt,e))return tt[e];var n=Y(e);return tt[e]=n,et[n]=e,n},keyFor:function(t){if(!at(t))throw TypeError(t+" is not a symbol");if(l(et,t))return et[t]},useSetter:function(){ct=!0},useSimple:function(){ct=!1}}),r({target:"Object",stat:!0,forced:!u,sham:!a},{create:st,defineProperty:ut,defineProperties:ft,getOwnPropertyDescriptor:dt}),r({target:"Object",stat:!0,forced:!u},{getOwnPropertyNames:bt,getOwnPropertySymbols:pt}),r({target:"Object",stat:!0,forced:s((function(){S.f(1)}))},{getOwnPropertySymbols:function(t){return S.f(h(t))}}),z){var ht=!u||s((function(){var t=Y();return"[null]"!=z([t])||"{}"!=z({a:t})||"{}"!=z(Object(t))}));r({target:"JSON",stat:!0,forced:ht},{stringify:function(t,e,n){var r,c=[t],i=1;while(arguments.length>i)c.push(arguments[i++]);if(r=e,(b(e)||void 0!==t)&&!at(t))return d(e)||(e=function(t,e){if("function"==typeof r&&(e=r.call(this,t,e)),!at(e))return e}),c[1]=e,z.apply(null,c)}})}Y[U][D]||E(Y[U],D,Y[U].valueOf),F(Y,q),$[M]=!0},a9e3:function(t,e,n){"use strict";var r=n("83ab"),c=n("da84"),i=n("94ca"),o=n("6eeb"),a=n("5135"),u=n("c6b6"),f=n("7156"),s=n("c04e"),l=n("d039"),d=n("7c73"),b=n("241c").f,p=n("06cf").f,h=n("9bf2").f,g=n("58a8").trim,v="Number",O=c[v],m=O.prototype,y=u(d(m))==v,j=function(t){var e,n,r,c,i,o,a,u,f=s(t,!1);if("string"==typeof f&&f.length>2)if(f=g(f),e=f.charCodeAt(0),43===e||45===e){if(n=f.charCodeAt(2),88===n||120===n)return NaN}else if(48===e){switch(f.charCodeAt(1)){case 66:case 98:r=2,c=49;break;case 79:case 111:r=8,c=55;break;default:return+f}for(i=f.slice(2),o=i.length,a=0;a<o;a++)if(u=i.charCodeAt(a),u<48||u>c)return NaN;return parseInt(i,r)}return+f};if(i(v,!O(" 0o1")||!O("0b1")||O("+0x1"))){for(var w,S=function(t){var e=arguments.length<1?0:t,n=this;return n instanceof S&&(y?l((function(){m.valueOf.call(n)})):u(n)!=v)?f(new O(j(e)),n,S):j(e)},x=r?b(O):"MAX_VALUE,MIN_VALUE,NaN,NEGATIVE_INFINITY,POSITIVE_INFINITY,EPSILON,isFinite,isInteger,isNaN,isSafeInteger,MAX_SAFE_INTEGER,MIN_SAFE_INTEGER,parseFloat,parseInt,isInteger,fromString,range".split(","),N=0;x.length>N;N++)a(O,w=x[N])&&!a(S,w)&&h(S,w,p(O,w));S.prototype=m,m.constructor=S,o(c,v,S)}},abab:function(t,e,n){},e01a:function(t,e,n){"use strict";var r=n("23e7"),c=n("83ab"),i=n("da84"),o=n("5135"),a=n("861d"),u=n("9bf2").f,f=n("e893"),s=i.Symbol;if(c&&"function"==typeof s&&(!("description"in s.prototype)||void 0!==s().description)){var l={},d=function(){var t=arguments.length<1||void 0===arguments[0]?void 0:String(arguments[0]),e=this instanceof d?new s(t):void 0===t?s():s(t);return""===t&&(l[e]=!0),e};f(d,s);var b=d.prototype=s.prototype;b.constructor=d;var p=b.toString,h="Symbol(test)"==String(s("test")),g=/^Symbol\((.*)\)[^)]+$/;u(b,"description",{configurable:!0,get:function(){var t=a(this)?this.valueOf():this,e=p.call(t);if(o(l,t))return"";var n=h?e.slice(7,-1):e.replace(g,"$1");return""===n?void 0:n}}),r({global:!0,forced:!0},{Symbol:d})}},e4f3:function(t,e,n){"use strict";var r=function(t){return{all:t=t||new Map,on:function(e,n){var r=t.get(e);r?r.push(n):t.set(e,[n])},off:function(e,n){var r=t.get(e);r&&(n?r.splice(r.indexOf(n)>>>0,1):t.set(e,[]))},emit:function(e,n){var r=t.get(e);r&&r.slice().map((function(t){t(n)})),(r=t.get("*"))&&r.slice().map((function(t){t(e,n)}))}}},c=r();e["a"]=c},e538:function(t,e,n){var r=n("b622");e.f=r}}]);
//# sourceMappingURL=chunk-9204d794.907ba0bd.js.map