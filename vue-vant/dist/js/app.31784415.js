(function(t){function e(e){for(var r,i,a=e[0],u=e[1],l=e[2],f=0,s=[];f<a.length;f++)i=a[f],Object.prototype.hasOwnProperty.call(o,i)&&o[i]&&s.push(o[i][0]),o[i]=0;for(r in u)Object.prototype.hasOwnProperty.call(u,r)&&(t[r]=u[r]);p&&p(e);while(s.length)s.shift()();return c.push.apply(c,l||[]),n()}function n(){for(var t,e=0;e<c.length;e++){for(var n=c[e],r=!0,a=1;a<n.length;a++){var u=n[a];0!==o[u]&&(r=!1)}r&&(c.splice(e--,1),t=i(i.s=n[0]))}return t}var r={},o={app:0},c=[];function i(e){if(r[e])return r[e].exports;var n=r[e]={i:e,l:!1,exports:{}};return t[e].call(n.exports,n,n.exports,i),n.l=!0,n.exports}i.m=t,i.c=r,i.d=function(t,e,n){i.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:n})},i.r=function(t){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},i.t=function(t,e){if(1&e&&(t=i(t)),8&e)return t;if(4&e&&"object"===typeof t&&t&&t.__esModule)return t;var n=Object.create(null);if(i.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var r in t)i.d(n,r,function(e){return t[e]}.bind(null,r));return n},i.n=function(t){var e=t&&t.__esModule?function(){return t["default"]}:function(){return t};return i.d(e,"a",e),e},i.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},i.p="/";var a=window["webpackJsonp"]=window["webpackJsonp"]||[],u=a.push.bind(a);a.push=e,a=a.slice();for(var l=0;l<a.length;l++)e(a[l]);var p=u;c.push([0,"chunk-vendors"]),n()})({0:function(t,e,n){t.exports=n("56d7")},"56d7":function(t,e,n){"use strict";n.r(e);n("be39");var r=n("efa0"),o=(n("9cb7"),n("66fd")),c=(n("5246"),n("6b41")),i=(n("e260"),n("e6cf"),n("cca6"),n("a79d"),n("2b0e")),a=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{attrs:{id:"app"}},[n("van-nav-bar",{attrs:{title:"购物车","left-text":"返回","right-text":"按钮","left-arrow":""},on:{"click-left":t.onClickLeft,"click-right":t.onClickRight}}),n("van-card",{attrs:{num:"2",price:"2.00",desc:"描述信息",title:"商品标题",thumb:"https://img.yzcdn.cn/vant/ipad.jpeg"}}),n("van-card",{attrs:{num:"2",tag:"标签",price:"2.00",desc:"描述信息",title:"商品标题",thumb:"https://img.yzcdn.cn/vant/ipad.jpeg","origin-price":"10.00"}}),n("van-submit-bar",{attrs:{price:3050,"button-text":"提交订单"},on:{submit:t.onSubmit},scopedSlots:t._u([{key:"tip",fn:function(){return[t._v(" 你的收货地址不支持同城送, "),n("span",{on:{click:t.onClickEditAddress}},[t._v("修改地址")])]},proxy:!0}])},[n("van-checkbox",{model:{value:t.checked,callback:function(e){t.checked=e},expression:"checked"}},[t._v("全选")])],1)],1)},u=[],l={methods:{onClickLeft:function(){alert("返回")},onClickRight:function(){alert("按钮")}}},p=l,f=n("2877"),s=Object(f["a"])(p,a,u,!1,null,null,null),d=s.exports;i["a"].use(c["a"]),i["a"].use(o["a"]),i["a"].use(r["a"]),i["a"].config.productionTip=!1,new i["a"]({render:function(t){return t(d)}}).$mount("#app")}});
//# sourceMappingURL=app.31784415.js.map