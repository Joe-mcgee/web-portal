(function(e){function r(r){for(var n,i,u=r[0],c=r[1],s=r[2],l=0,d=[];l<u.length;l++)i=u[l],Object.prototype.hasOwnProperty.call(a,i)&&a[i]&&d.push(a[i][0]),a[i]=0;for(n in c)Object.prototype.hasOwnProperty.call(c,n)&&(e[n]=c[n]);f&&f(r);while(d.length)d.shift()();return o.push.apply(o,s||[]),t()}function t(){for(var e,r=0;r<o.length;r++){for(var t=o[r],n=!0,u=1;u<t.length;u++){var c=t[u];0!==a[c]&&(n=!1)}n&&(o.splice(r--,1),e=i(i.s=t[0]))}return e}var n={},a={app:0},o=[];function i(r){if(n[r])return n[r].exports;var t=n[r]={i:r,l:!1,exports:{}};return e[r].call(t.exports,t,t.exports,i),t.l=!0,t.exports}i.m=e,i.c=n,i.d=function(e,r,t){i.o(e,r)||Object.defineProperty(e,r,{enumerable:!0,get:t})},i.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},i.t=function(e,r){if(1&r&&(e=i(e)),8&r)return e;if(4&r&&"object"===typeof e&&e&&e.__esModule)return e;var t=Object.create(null);if(i.r(t),Object.defineProperty(t,"default",{enumerable:!0,value:e}),2&r&&"string"!=typeof e)for(var n in e)i.d(t,n,function(r){return e[r]}.bind(null,n));return t},i.n=function(e){var r=e&&e.__esModule?function(){return e["default"]}:function(){return e};return i.d(r,"a",r),r},i.o=function(e,r){return Object.prototype.hasOwnProperty.call(e,r)},i.p="/";var u=window["webpackJsonp"]=window["webpackJsonp"]||[],c=u.push.bind(u);u.push=r,u=u.slice();for(var s=0;s<u.length;s++)r(u[s]);var f=c;o.push([0,"chunk-vendors"]),t()})({0:function(e,r,t){e.exports=t("56d7")},"012a":function(e,r,t){e.exports=t.p+"img/about-big.ea4b0891.jpeg"},"0197":function(e,r,t){e.exports=t.p+"img/about-large.9717d726.jpeg"},"31d5":function(e,r,t){e.exports=t.p+"img/spiral-cat.23379b28.gif"},"3b25":function(e,r,t){var n={"./about-large.jpeg":"0197","./archive-large.jpeg":"7cbd","./blog-large.jpeg":"fab7","./contact-large.jpeg":"9146","./finish-large.jpeg":"f8d4","./projects-large.jpeg":"5ef1"};function a(e){var r=o(e);return t(r)}function o(e){if(!t.o(n,e)){var r=new Error("Cannot find module '"+e+"'");throw r.code="MODULE_NOT_FOUND",r}return n[e]}a.keys=function(){return Object.keys(n)},a.resolve=o,e.exports=a,a.id="3b25"},"50b2":function(e,r,t){e.exports=t.p+"img/test-block.a907c2f8.png"},"56d7":function(e,r,t){"use strict";t.r(r);t("e260"),t("e6cf"),t("cca6"),t("a79d");var n=t("2b0e"),a=function(){var e=this,r=e.$createElement,t=e._self._c||r;return t("div",{attrs:{id:"app"}},[t("router-view",e._b({},"router-view",e.myProps,!1))],1)},o=[],i=t("5530");function u(){var e=window.innerWidth,r=window.innerHeight,t=e/Math.phi,n=e-t,a=e/21;return{width:e,height:r,a:t,b:n,squareEdge:a}}Math.phi=(1+Math.sqrt(5))/2;var c={name:"app",data:function(){return u()},created:function(){var e=this;window.addEventListener("resize",(function(){var r=u();Object.assign(e.$data,r)}))},destroyed:function(){window.removeEventListener("resize",(function(){}))},computed:{myProps:function(){return{nestData:Object(i["a"])({},this.$data)}}}},s=c,f=(t("5c0b"),t("2877")),l=Object(f["a"])(s,a,o,!1,null,null,null),d=l.exports,p=t("8c4f"),g=function(){var e=this,r=e.$createElement,t=e._self._c||r;return t("div",{staticClass:"home"},[t("open-base",{attrs:{nestData:e.nestData,url:e.background},on:{mousemove:e.hoverEffect}},[t("about",{attrs:{areas:e.areas}}),t("projects",{attrs:{areas:e.areas}}),t("blog",{attrs:{areas:e.areas}}),t("archive",{attrs:{areas:e.areas}}),t("contact",{attrs:{areas:e.areas}}),t("finish",{attrs:{areas:e.areas}}),t("vortex",{on:{click:e.shift}}),t("hover-effect",{attrs:{nestData:e.nestData,mouseX:e.mouseX,mouseY:e.mouseY}}),t("foot")],1)],1)},b=[],m=(t("96cf"),t("1da1"));t("bc3a");t("c975");var h=t("8785"),v=t("9c56");function j(){var e=Object(h["a"])(["\n    background-image: url(",");\n    background-size: contain;\n    display: grid;\n    width: 100%;\n    height: 100%;\n    border: 2px solid;\n    border-image-source: linear-gradient(42.5deg, #ffc400, #003bff);\n    border-image-slice: 1;\n    grid-row: ",";\n    grid-column: ",";\n  "]);return j=function(){return e},e}function w(){return{areas:Array}}function x(e){switch(e){case 0:return"14/27";case 1:return"14/22";case 2:return"22/27";case 3:return"24/27";case 4:return"22/24";case 5:return"22/23"}}function y(e){switch(e){case 0:return"1/14";case 1:return"14/-1";case 2:return"17/-1";case 3:return"14/17";case 4:return"14/16";case 5:return"16/17"}}function O(e,r){return r=r||"div",Object(v["a"])(r,w())(j(),(function(r){switch(r.areas?r.areas.indexOf(e):0){case 0:return t("620d")("./".concat(e,"-big.jpeg"));case 1:return t("3b25")("./".concat(e,"-large.jpeg"))}}),(function(r){var t=r.areas?r.areas.indexOf(e):0;return x(t)}),(function(r){var t=r.areas?r.areas.indexOf(e):0;return y(t)}))}t("a9e3");function E(){var e=Object(h["a"])(["\n    background-image: url(",");\n    background-size: contain;\n    background-repeat: no-repeat;\n    display: grid;\n    width: 100%;\n    height: 100%;\n    grid-template-rows: repeat(26, ","px);\n    grid-template-columns: repeat(21, ","px);\n  "]);return E=function(){return e},e}function _(){return{url:String,nestData:{a:Number,b:Number,height:Number,squareEdge:Number,width:Number}}}function D(){return u(window)}function N(e){return Object(v["a"])(e,_())(E(),(function(e){return e.url?e.url:t("50b2")}),(function(e){if("undefined"===typeof e.nestData){var r=D();return r.squareEdge}return""!==e.nestData?e.nestData.squareEdge:D().squareEdge}),(function(e){if("undefined"===typeof e.nestData){var r=D();return r.squareEdge}return""!==e.nestData?e.nestData.squareEdge:D().squareEdge}))}function k(){var e=Object(h["a"])(["\n    background-image: url(",");\n    background-size: contain;\n    display: grid;\n    width: 100%;\n    height: 100%;\n    border: 2px solid #ffc400;\n    grid-row: 23;\n    grid-column:16;\n  "]);return k=function(){return e},e}function q(){return{nestData:{a:Number,b:Number,height:Number,squareEdge:Number,width:Number}}}function C(e){return Object(v["a"])(e,q())(k(),(function(e){return t("a257")}))}function P(){var e=Object(h["a"])(["\n    display: grid;\n    width: 100%;\n    height: 100%;\n    border-top: 3px solid;\n    border-image-slice: 1;\n    border-image-source: linear-gradient(42.5deg, #ffc400, #003bff);\n    grid-row: 14/15;\n    grid-column: -1 / 1;\n  "]);return P=function(){return e},e}function A(){return{url:String,nestData:{a:Number,b:Number,height:Number,squareEdge:Number,width:Number}}}function M(e){return Object(v["a"])(e,A())(P())}t("99af");function $(){var e=Object(h["a"])(["\n    pointer-events: none;\n    display: grid;\n    width: 100%;\n    height: 100%; \n    border: 2px solid;\n    border-image-source: linear-gradient(137.5deg, #003bff, #ffc400);\n    border-image-slice: 1;\n    grid-row: ",";\n    grid-column: ",";\n  "]);return $=function(){return e},e}function S(){return{nestData:{a:Number,b:Number,height:Number,squareEdge:Number,width:Number},mouseX:Number,mouseY:Number}}function X(){return u(window)}function Y(e){return Object(v["a"])(e,S())($(),(function(e){"undefined"===typeof e.nestData&&(e.nestData=X());var r=e.mouseY?e.mouseY:1,t=Math.floor(r/e.nestData.squareEdge);return"".concat(t+1,"/").concat(t+2)}),(function(e){"undefined"===typeof e.nestData&&(e.nestData=X());var r=e.mouseX?e.mouseX:1,t=Math.floor(r/e.nestData.squareEdge);return"".concat(t+1,"/").concat(t+2)}))}var F=function(){var e=this,r=e.$createElement,t=e._self._c||r;return t("div",[t("information-variant",{attrs:{fillColor:"#003bff"}})],1)},T=[],z=t("da50"),H={name:"About",props:{areas:Array},components:{InformationVariant:z["a"]},data:function(){return{}}},L=H,U=Object(f["a"])(L,F,T,!1,null,null,null),B=U.exports,J=function(){var e=this,r=e.$createElement,t=e._self._c||r;return t("div",[t("flask",{attrs:{fillColor:"#003bff"}})],1)},R=[],V=t("9cf2"),G={name:"Projects",props:{areas:Array},components:{Flask:V["a"]},data:function(){return{}}},I=G,W=Object(f["a"])(I,J,R,!1,null,null,null),K=W.exports,Q=function(){var e=this,r=e.$createElement,t=e._self._c||r;return t("div",[t("typewriter",{attrs:{fillColor:"#003bff"}})],1)},Z=[],ee=t("7312"),re={name:"Blog",props:{areas:Array},components:{Typewriter:ee["a"]},data:function(){return{}}},te=re,ne=Object(f["a"])(te,Q,Z,!1,null,null,null),ae=ne.exports,oe=function(){var e=this,r=e.$createElement,t=e._self._c||r;return t("div",[t("human-greeting-proximity",{attrs:{fillColor:"#003bff"}})],1)},ie=[],ue=t("1e5b"),ce={name:"Contact",props:{areas:Array},components:{HumanGreetingProximity:ue["a"]},data:function(){return{}}},se=ce,fe=Object(f["a"])(se,oe,ie,!1,null,null,null),le=fe.exports,de=function(){var e=this,r=e.$createElement,t=e._self._c||r;return t("div",[t("script-text-outline",{attrs:{fillColor:"#003bff"}})],1)},pe=[],ge=t("a3c9"),be={name:"Archive",props:{areas:Array},components:{ScriptTextOutline:ge["a"]},data:function(){return{}}},me=be,he=Object(f["a"])(me,de,pe,!1,null,null,null),ve=he.exports,je=function(){var e=this,r=e.$createElement,t=e._self._c||r;return t("div",[t("flag-checkered",{attrs:{fillColor:"#003bff"}})],1)},we=[],xe=t("7259"),ye={name:"Finish",props:{areas:Array},components:{FlagCheckered:xe["a"]},data:function(){return{}}},Oe=ye,Ee=Object(f["a"])(Oe,je,we,!1,null,null,null),_e=Ee.exports,De=N("div"),Ne=M("div"),ke=Y("div"),qe=O("about",B),Ce=O("projects",K),Pe=O("blog",ae),Ae=O("contact",le),Me=O("archive",ve),$e=O("finish",_e),Se=C("div"),Xe={name:"Home",components:{OpenBase:De,Foot:Ne,HoverEffect:ke,About:qe,Projects:Ce,Blog:Pe,Archive:Me,Contact:Ae,Finish:$e,Vortex:Se},props:{nestData:Object},data:function(){return{background:t("31d5"),mouseX:0,mouseY:0,areas:["about","projects","blog","contact","archive","finish"]}},created:function(){return Object(m["a"])(regeneratorRuntime.mark((function e(){return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:case"end":return e.stop()}}),e)})))()},destroyed:function(){},methods:{hoverEffect:function(e){this.mouseX=e.pageX,this.mouseY=e.pageY},shift:function(e){this.areas.push(this.areas.shift())}}},Ye=Xe,Fe=Object(f["a"])(Ye,g,b,!1,null,null,null),Te=Fe.exports;n["a"].use(p["a"]);var ze=[{path:"/",name:"Home",component:Te}],He=new p["a"]({mode:"history",base:"/",routes:ze}),Le=He;n["a"].config.productionTip=!1,new n["a"]({router:Le,render:function(e){return e(d)}}).$mount("#app")},"5c0b":function(e,r,t){"use strict";var n=t("9c0c"),a=t.n(n);a.a},"5ef1":function(e,r,t){e.exports=t.p+"img/projects-large.495d6bdd.jpeg"},"620d":function(e,r,t){var n={"./about-big.jpeg":"012a","./archive-big.jpeg":"6ff1","./blog-big.jpeg":"80ee","./contact-big.jpeg":"dcd2","./finish-big.jpeg":"b7c1","./projects-big.jpeg":"e031"};function a(e){var r=o(e);return t(r)}function o(e){if(!t.o(n,e)){var r=new Error("Cannot find module '"+e+"'");throw r.code="MODULE_NOT_FOUND",r}return n[e]}a.keys=function(){return Object.keys(n)},a.resolve=o,e.exports=a,a.id="620d"},"6ff1":function(e,r,t){e.exports=t.p+"img/archive-big.d05131f5.jpeg"},"7cbd":function(e,r,t){e.exports=t.p+"img/archive-large.3c104d92.jpeg"},"80ee":function(e,r,t){e.exports=t.p+"img/blog-big.2182df23.jpeg"},9146:function(e,r,t){e.exports=t.p+"img/contact-large.f3218c63.jpeg"},"9c0c":function(e,r,t){},a257:function(e,r,t){e.exports=t.p+"img/vortex.2c09db4a.gif"},b7c1:function(e,r,t){e.exports=t.p+"img/finish-big.9516ad49.jpeg"},dcd2:function(e,r,t){e.exports=t.p+"img/contact-big.242ce462.jpeg"},e031:function(e,r,t){e.exports=t.p+"img/projects-big.b6b54e56.jpeg"},f8d4:function(e,r,t){e.exports=t.p+"img/finish-large.e30d3f5f.jpeg"},fab7:function(e,r,t){e.exports=t.p+"img/blog-large.6398c423.jpeg"}});
//# sourceMappingURL=app.eb044458.js.map