(function(e){function t(t){for(var r,u,i=t[0],c=t[1],s=t[2],l=0,d=[];l<i.length;l++)u=i[l],Object.prototype.hasOwnProperty.call(o,u)&&o[u]&&d.push(o[u][0]),o[u]=0;for(r in c)Object.prototype.hasOwnProperty.call(c,r)&&(e[r]=c[r]);p&&p(t);while(d.length)d.shift()();return a.push.apply(a,s||[]),n()}function n(){for(var e,t=0;t<a.length;t++){for(var n=a[t],r=!0,u=1;u<n.length;u++){var c=n[u];0!==o[c]&&(r=!1)}r&&(a.splice(t--,1),e=i(i.s=n[0]))}return e}var r={},o={app:0},a=[];function u(e){return i.p+"js/"+({about:"about"}[e]||e)+"."+{about:"708cf491"}[e]+".js"}function i(t){if(r[t])return r[t].exports;var n=r[t]={i:t,l:!1,exports:{}};return e[t].call(n.exports,n,n.exports,i),n.l=!0,n.exports}i.e=function(e){var t=[],n=o[e];if(0!==n)if(n)t.push(n[2]);else{var r=new Promise((function(t,r){n=o[e]=[t,r]}));t.push(n[2]=r);var a,c=document.createElement("script");c.charset="utf-8",c.timeout=120,i.nc&&c.setAttribute("nonce",i.nc),c.src=u(e);var s=new Error;a=function(t){c.onerror=c.onload=null,clearTimeout(l);var n=o[e];if(0!==n){if(n){var r=t&&("load"===t.type?"missing":t.type),a=t&&t.target&&t.target.src;s.message="Loading chunk "+e+" failed.\n("+r+": "+a+")",s.name="ChunkLoadError",s.type=r,s.request=a,n[1](s)}o[e]=void 0}};var l=setTimeout((function(){a({type:"timeout",target:c})}),12e4);c.onerror=c.onload=a,document.head.appendChild(c)}return Promise.all(t)},i.m=e,i.c=r,i.d=function(e,t,n){i.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:n})},i.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},i.t=function(e,t){if(1&t&&(e=i(e)),8&t)return e;if(4&t&&"object"===typeof e&&e&&e.__esModule)return e;var n=Object.create(null);if(i.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var r in e)i.d(n,r,function(t){return e[t]}.bind(null,r));return n},i.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return i.d(t,"a",t),t},i.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},i.p="/",i.oe=function(e){throw console.error(e),e};var c=window["webpackJsonp"]=window["webpackJsonp"]||[],s=c.push.bind(c);c.push=t,c=c.slice();for(var l=0;l<c.length;l++)t(c[l]);var p=s;a.push([0,"chunk-vendors"]),n()})({0:function(e,t,n){e.exports=n("56d7")},"56d7":function(e,t,n){"use strict";n.r(t);n("e260"),n("e6cf"),n("cca6"),n("a79d");var r=n("2b0e"),o=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{attrs:{id:"app"}},[n("router-view",e._b({},"router-view",e.myProps,!1))],1)},a=[],u=n("5530");function i(e){var t=e.innerWidth,n=e.innerHeight,r=n>t,o=r?n:t,a=o/Math.phi,u=o-a,i=o/21;return console.log(i),{width:t,height:n,isPortrait:r,aPlusB:o,a:a,b:u,squareEdge:i}}Math.phi=(1+Math.sqrt(5))/2;var c={name:"app",data:function(){return i(window)},created:function(){var e=this;window.addEventListener("resize",(function(){var t=i(window);Object.assign(e.$data,t)}))},destroyed:function(){window.removeEventListener("resize",(function(){}))},computed:{myProps:function(){return console.log(Object(u["a"])({},this.$data)),{nestData:Object(u["a"])({},this.$data)}}}},s=c,l=(n("5c0b"),n("2877")),p=Object(l["a"])(s,o,a,!1,null,null,null),d=p.exports,f=(n("d3b7"),n("8c4f")),h=(n("a9e3"),n("8785")),m=n("9c56"),b=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"home"},[n("styled-img")],1)},v=[];function g(){var e=Object(h["a"])(["\nbackground-image: url(",");\nbackground-size: cover;\ngrid-column: 1 / -1;\ngrid-row: 1 / -1;\nwidth: 100%;\nheight: 100%;\n"]);return g=function(){return e},e}var w=m["a"].img(g(),n("9768")),y={name:"Home",components:{StyledImg:w},props:{nestData:Object},data:function(){return{}}},j=y,O=Object(l["a"])(j,b,v,!1,null,null,null),P=O.exports;function x(){var e=Object(h["a"])(["\n  display: grid;\n  width: 100%;\n  height: 100%;\n  grid-template-rows: repeat(",", ","px);\n\n  grid-template-columns: repeat(",", ","px);\n"]);return x=function(){return e},e}var E={nestData:{aPlusB:Number,a:Number,b:Number,height:Number,isPortrait:Boolean,squareEdge:Number,width:Number}},_=Object(m["a"])(P,E)(x(),(function(e){return e.nestData.isPortrait?"21":"13"}),(function(e){return e.nestData.squareEdge}),(function(e){return e.nestData.isPortrait?"13":"21"}),(function(e){return e.nestData.squareEdge})),k=_;r["a"].use(f["a"]);var D=[{path:"/",name:"Home",component:k},{path:"/about",name:"About",component:function(){return n.e("about").then(n.bind(null,"f820"))}}],M=new f["a"]({mode:"history",base:"/",routes:D}),q=M;r["a"].config.productionTip=!1,new r["a"]({router:q,render:function(e){return e(d)}}).$mount("#app")},"5c0b":function(e,t,n){"use strict";var r=n("9c0c"),o=n.n(r);o.a},9768:function(e,t,n){e.exports=n.p+"img/mercury-cat.974e28e8.png"},"9c0c":function(e,t,n){}});
//# sourceMappingURL=app.b3f42650.js.map