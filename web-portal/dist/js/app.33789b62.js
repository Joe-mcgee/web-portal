(function(e){function t(t){for(var n,i,u=t[0],c=t[1],s=t[2],d=0,p=[];d<u.length;d++)i=u[d],Object.prototype.hasOwnProperty.call(a,i)&&a[i]&&p.push(a[i][0]),a[i]=0;for(n in c)Object.prototype.hasOwnProperty.call(c,n)&&(e[n]=c[n]);f&&f(t);while(p.length)p.shift()();return o.push.apply(o,s||[]),r()}function r(){for(var e,t=0;t<o.length;t++){for(var r=o[t],n=!0,u=1;u<r.length;u++){var c=r[u];0!==a[c]&&(n=!1)}n&&(o.splice(t--,1),e=i(i.s=r[0]))}return e}var n={},a={app:0},o=[];function i(t){if(n[t])return n[t].exports;var r=n[t]={i:t,l:!1,exports:{}};return e[t].call(r.exports,r,r.exports,i),r.l=!0,r.exports}i.m=e,i.c=n,i.d=function(e,t,r){i.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:r})},i.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},i.t=function(e,t){if(1&t&&(e=i(e)),8&t)return e;if(4&t&&"object"===typeof e&&e&&e.__esModule)return e;var r=Object.create(null);if(i.r(r),Object.defineProperty(r,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var n in e)i.d(r,n,function(t){return e[t]}.bind(null,n));return r},i.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return i.d(t,"a",t),t},i.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},i.p="/";var u=window["webpackJsonp"]=window["webpackJsonp"]||[],c=u.push.bind(u);u.push=t,u=u.slice();for(var s=0;s<u.length;s++)t(u[s]);var f=c;o.push([0,"chunk-vendors"]),r()})({0:function(e,t,r){e.exports=r("56d7")},"012a":function(e,t,r){e.exports=r.p+"img/about-big.ea4b0891.jpeg"},"0197":function(e,t,r){e.exports=r.p+"img/about-large.9717d726.jpeg"},"31d5":function(e,t,r){e.exports=r.p+"img/spiral-cat.23379b28.gif"},"3b25":function(e,t,r){var n={"./about-large.jpeg":"0197","./archive-large.jpeg":"7cbd","./blog-large.jpeg":"fab7","./contact-large.jpeg":"9146","./finish-large.jpeg":"f8d4","./projects-large.jpeg":"5ef1"};function a(e){var t=o(e);return r(t)}function o(e){if(!r.o(n,e)){var t=new Error("Cannot find module '"+e+"'");throw t.code="MODULE_NOT_FOUND",t}return n[e]}a.keys=function(){return Object.keys(n)},a.resolve=o,e.exports=a,a.id="3b25"},"50b2":function(e,t,r){e.exports=r.p+"img/test-block.a907c2f8.png"},"56d7":function(e,t,r){"use strict";r.r(t);r("e260"),r("e6cf"),r("cca6"),r("a79d");var n=r("2b0e"),a=function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("div",{attrs:{id:"app"}},[r("router-view",e._b({},"router-view",e.myProps,!1))],1)},o=[],i=r("5530");function u(e){var t=window.innerWidth,r=window.innerHeight,n=t/Math.phi,a=t-n,o=t/e;return{width:t,height:r,a:n,b:a,squareEdge:o}}Math.phi=(1+Math.sqrt(5))/2;var c={name:"app",data:function(){return u(21)},created:function(){var e=this;window.addEventListener("resize",(function(){var t=u(21);Object.assign(e.$data,t)}))},destroyed:function(){window.removeEventListener("resize",(function(){}))},computed:{myProps:function(){return{nestData:Object(i["a"])({},this.$data)}}}},s=c,f=(r("5c0b"),r("2877")),d=Object(f["a"])(s,a,o,!1,null,null,null),p=d.exports,l=r("8c4f"),g=function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("div",{staticClass:"home"},[r("open-base",{attrs:{nestData:e.nestData,url:e.background},on:{mousemove:e.hoverEffect}},[r("about",{attrs:{areas:e.areas,nestData:e.nestData}}),r("projects",{attrs:{areas:e.areas,nestData:e.nestData}}),r("blog",{attrs:{areas:e.areas,nestData:e.nestData}}),r("archive",{attrs:{areas:e.areas,nestData:e.nestData}}),r("contact",{attrs:{areas:e.areas,nestData:e.nestData}}),r("finish",{attrs:{areas:e.areas,nestData:e.nestData}}),r("vortex",{on:{click:e.shift}}),r("hover-effect",{attrs:{nestData:e.nestData,mouseX:e.mouseX,mouseY:e.mouseY}}),r("foot")],1)],1)},b=[],m=(r("96cf"),r("1da1")),h=r("bc3a"),v=r.n(h);function j(){return w.apply(this,arguments)}function w(){return w=Object(m["a"])(regeneratorRuntime.mark((function e(){var t,r;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return t="https://".concat("api.tbh.ninja"),e.next=3,v.a.get("".concat(t,"/projects"));case 3:return r=e.sent,e.abrupt("return",r.data);case 5:case"end":return e.stop()}}),e)}))),w.apply(this,arguments)}r("c975"),r("a9e3");var x=r("8785"),O=r("9c56");function y(){var e=Object(x["a"])(["\n  display: grid;\n  grid-row: 1;\n  grid-column: 1;\n  justify-content: center;\n  align-content: center;\n"]);return y=function(){return e},e}function D(){var e=Object(x["a"])(["\n    background-image: url(",");\n    background-size: contain;\n    display: grid;\n    width: 100%;\n    grid-template-rows: repeat(",", ","px);\n    grid-template-columns: repeat(",", ","px);\n    height: 100%;\n    border: 2px solid;\n    border-image-source: linear-gradient(42.5deg, #ffc400, #003bff);\n    border-image-slice: 1;\n    grid-row: ",";\n    grid-column: ",";\n  "]);return D=function(){return e},e}function E(){return{areas:Array,nestData:{a:Number,b:Number,height:Number,squareEdge:Number,width:Number}}}function N(){return u(window)}function _(e){switch(e){case 0:return"14/27";case 1:return"14/22";case 2:return"22/27";case 3:return"24/27";case 4:return"22/24";case 5:return"22/23"}}function k(e){switch(e){case 0:return"1/14";case 1:return"14/-1";case 2:return"17/-1";case 3:return"14/17";case 4:return"14/16";case 5:return"16/17"}}function q(e){var t=1,r=1,n=1;while(t<=e){var a=n-r;n+=a,t++}return n}function A(e,t){return t=t||"div",Object(O["a"])(t,E())(D(),(function(t){switch(t.areas?t.areas.indexOf(e):0){case 0:return r("620d")("./".concat(e,"-big.jpeg"));case 1:return"projects"===e?r("5e87")("./".concat(e,"-large.gif")):r("3b25")("./".concat(e,"-large.jpeg"))}}),(function(t){var r=t.areas?t.areas.indexOf(e):1;return q(r)}),(function(e){if("undefined"===typeof e.nestData){var t=N();return t.squareEdge}return""!==e.nestData?e.nestData.squareEdge:N().squareEdge}),(function(t){var r=t.areas?t.areas.indexOf(e):1;return q(r)}),(function(e){if("undefined"===typeof e.nestData){var t=N();return t.squareEdge}return""!==e.nestData?e.nestData.squareEdge:N().squareEdge}),(function(t){var r=t.areas?t.areas.indexOf(e):0;return _(r)}),(function(t){var r=t.areas?t.areas.indexOf(e):0;return k(r)}))}function C(e){return Object(O["a"])(e)(y())}function M(){var e=Object(x["a"])(["\n    background-image: url(",");\n    background-size: contain;\n    background-repeat: no-repeat;\n    display: grid;\n    width: 100%;\n    height: 100%;\n    grid-template-rows: repeat(26, ","px);\n    grid-template-columns: repeat(21, ","px);\n  "]);return M=function(){return e},e}function P(){return{url:String,nestData:{a:Number,b:Number,height:Number,squareEdge:Number,width:Number}}}function $(){return u(window)}function F(e){return Object(O["a"])(e,P())(M(),(function(e){return e.url?e.url:r("50b2")}),(function(e){if("undefined"===typeof e.nestData){var t=$();return t.squareEdge}return""!==e.nestData?e.nestData.squareEdge:$().squareEdge}),(function(e){if("undefined"===typeof e.nestData){var t=$();return t.squareEdge}return""!==e.nestData?e.nestData.squareEdge:$().squareEdge}))}function S(){var e=Object(x["a"])(["\n    background-image: url(",");\n    background-size: contain;\n    display: grid;\n    width: 100%;\n    height: 100%;\n    border: 2px solid #ffc400;\n    grid-row: 23;\n    grid-column:16;\n  "]);return S=function(){return e},e}function T(){return{nestData:{a:Number,b:Number,height:Number,squareEdge:Number,width:Number}}}function X(e){return Object(O["a"])(e,T())(S(),(function(e){return r("a257")}))}function Y(){var e=Object(x["a"])(["\n    display: grid;\n    width: 100%;\n    height: 100%;\n    border-top: 3px solid;\n    border-image-slice: 1;\n    border-image-source: linear-gradient(42.5deg, #ffc400, #003bff);\n    grid-row: 14/15;\n    grid-column: -1 / 1;\n  "]);return Y=function(){return e},e}function G(){return{url:String,nestData:{a:Number,b:Number,height:Number,squareEdge:Number,width:Number}}}function R(e){return Object(O["a"])(e,G())(Y())}r("99af");function U(){var e=Object(x["a"])(["\n    pointer-events: none;\n    display: grid;\n    width: 100%;\n    height: 100%; \n    border: 2px solid;\n    border-image-source: linear-gradient(137.5deg, #003bff, #ffc400);\n    border-image-slice: 1;\n    grid-row: ",";\n    grid-column: ",";\n  "]);return U=function(){return e},e}function z(){return{nestData:{a:Number,b:Number,height:Number,squareEdge:Number,width:Number},mouseX:Number,mouseY:Number}}function H(){return u(window)}function L(e){return Object(O["a"])(e,z())(U(),(function(e){"undefined"===typeof e.nestData&&(e.nestData=H());var t=e.mouseY?e.mouseY:1,r=Math.floor(t/e.nestData.squareEdge);return"".concat(r+1,"/").concat(r+2)}),(function(e){"undefined"===typeof e.nestData&&(e.nestData=H());var t=e.mouseX?e.mouseX:1,r=Math.floor(t/e.nestData.squareEdge);return"".concat(r+1,"/").concat(r+2)}))}var B=function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("div",[r("information-variant-grid",{attrs:{fillColor:"#003bff"}})],1)},J=[],V=r("da50"),I=C(V["a"]),W={name:"About",props:{areas:Array},components:{InformationVariantGrid:I},data:function(){return{}}},K=W,Q=Object(f["a"])(K,B,J,!1,null,null,null),Z=Q.exports,ee=function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("div",[r("flask-grid",{attrs:{fillColor:"#003bff"}})],1)},te=[],re=r("9cf2"),ne=C(re["a"]),ae={name:"Projects",props:{areas:Array},components:{FlaskGrid:ne},data:function(){return{projects:Array}},created:function(){var e=this;return Object(m["a"])(regeneratorRuntime.mark((function t(){return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return t.next=2,j();case 2:e.projects=t.sent;case 3:case"end":return t.stop()}}),t)})))()}},oe=ae,ie=Object(f["a"])(oe,ee,te,!1,null,null,null),ue=ie.exports,ce=function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("div",[r("typewriter-grid",{attrs:{fillColor:"#003bff"}})],1)},se=[],fe=r("7312"),de=C(fe["a"]),pe={name:"Blog",props:{areas:Array},components:{TypewriterGrid:de},data:function(){return{}}},le=pe,ge=Object(f["a"])(le,ce,se,!1,null,null,null),be=ge.exports,me=function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("div",[r("human-greeting-proximity-grid",{attrs:{fillColor:"#003bff"}})],1)},he=[],ve=r("1e5b"),je=C(ve["a"]),we={name:"Contact",props:{areas:Array},components:{HumanGreetingProximityGrid:je},data:function(){return{}}},xe=we,Oe=Object(f["a"])(xe,me,he,!1,null,null,null),ye=Oe.exports,De=function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("div",[r("script-text-outline-grid",{attrs:{fillColor:"#003bff"}})],1)},Ee=[],Ne=r("a3c9"),_e=C(Ne["a"]),ke={name:"Archive",props:{areas:Array},components:{ScriptTextOutlineGrid:_e},data:function(){return{}}},qe=ke,Ae=Object(f["a"])(qe,De,Ee,!1,null,null,null),Ce=Ae.exports,Me=function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("div",[r("flag-grid",{attrs:{fillColor:"#003bff"}})],1)},Pe=[],$e=r("7259"),Fe=C($e["a"]),Se={name:"Finish",props:{areas:Array},components:{FlagGrid:Fe},data:function(){return{}},created:function(){console.log(this.$props)}},Te=Se,Xe=Object(f["a"])(Te,Me,Pe,!1,null,null,null),Ye=Xe.exports,Ge=F("div"),Re=R("div"),Ue=L("div"),ze=A("about",Z),He=A("projects",ue),Le=A("blog",be),Be=A("contact",ye),Je=A("archive",Ce),Ve=A("finish",Ye),Ie=X("div"),We={name:"Home",components:{OpenBase:Ge,Foot:Re,HoverEffect:Ue,About:ze,Projects:He,Blog:Le,Archive:Je,Contact:Be,Finish:Ve,Vortex:Ie},props:{nestData:Object},data:function(){return{background:r("31d5"),mouseX:0,mouseY:0,areas:["about","projects","blog","contact","archive","finish"]}},created:function(){return Object(m["a"])(regeneratorRuntime.mark((function e(){return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return e.t0=console,e.next=3,j();case 3:e.t1=e.sent,e.t0.log.call(e.t0,e.t1);case 5:case"end":return e.stop()}}),e)})))()},destroyed:function(){},methods:{hoverEffect:function(e){this.mouseX=e.pageX,this.mouseY=e.pageY},shift:function(e){this.areas.push(this.areas.shift())}}},Ke=We,Qe=Object(f["a"])(Ke,g,b,!1,null,null,null),Ze=Qe.exports;n["a"].use(l["a"]);var et=[{path:"/",name:"Home",component:Ze}],tt=new l["a"]({mode:"history",base:"/",routes:et}),rt=tt;n["a"].config.productionTip=!1,new n["a"]({router:rt,render:function(e){return e(p)}}).$mount("#app")},"5c0b":function(e,t,r){"use strict";var n=r("9c0c"),a=r.n(n);a.a},"5e87":function(e,t,r){var n={"./projects-large.gif":"fa84"};function a(e){var t=o(e);return r(t)}function o(e){if(!r.o(n,e)){var t=new Error("Cannot find module '"+e+"'");throw t.code="MODULE_NOT_FOUND",t}return n[e]}a.keys=function(){return Object.keys(n)},a.resolve=o,e.exports=a,a.id="5e87"},"5ef1":function(e,t,r){e.exports=r.p+"img/projects-large.495d6bdd.jpeg"},"620d":function(e,t,r){var n={"./about-big.jpeg":"012a","./archive-big.jpeg":"6ff1","./blog-big.jpeg":"80ee","./contact-big.jpeg":"dcd2","./finish-big.jpeg":"b7c1","./projects-big.jpeg":"e031"};function a(e){var t=o(e);return r(t)}function o(e){if(!r.o(n,e)){var t=new Error("Cannot find module '"+e+"'");throw t.code="MODULE_NOT_FOUND",t}return n[e]}a.keys=function(){return Object.keys(n)},a.resolve=o,e.exports=a,a.id="620d"},"6ff1":function(e,t,r){e.exports=r.p+"img/archive-big.d05131f5.jpeg"},"7cbd":function(e,t,r){e.exports=r.p+"img/archive-large.3c104d92.jpeg"},"80ee":function(e,t,r){e.exports=r.p+"img/blog-big.2182df23.jpeg"},9146:function(e,t,r){e.exports=r.p+"img/contact-large.f3218c63.jpeg"},"9c0c":function(e,t,r){},a257:function(e,t,r){e.exports=r.p+"img/vortex.2c09db4a.gif"},b7c1:function(e,t,r){e.exports=r.p+"img/finish-big.9516ad49.jpeg"},dcd2:function(e,t,r){e.exports=r.p+"img/contact-big.242ce462.jpeg"},e031:function(e,t,r){e.exports=r.p+"img/projects-big.b6b54e56.jpeg"},f8d4:function(e,t,r){e.exports=r.p+"img/finish-large.e30d3f5f.jpeg"},fa84:function(e,t,r){e.exports=r.p+"img/projects-large.8238592f.gif"},fab7:function(e,t,r){e.exports=r.p+"img/blog-large.6398c423.jpeg"}});
//# sourceMappingURL=app.33789b62.js.map