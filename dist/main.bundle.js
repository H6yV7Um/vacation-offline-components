module.exports=function(e){var t={};function n(r){if(t[r])return t[r].exports;var o=t[r]={i:r,l:!1,exports:{}};return e[r].call(o.exports,o,o.exports,n),o.l=!0,o.exports}return n.m=e,n.c=t,n.d=function(e,t,r){n.o(e,t)||Object.defineProperty(e,t,{configurable:!1,enumerable:!0,get:r})},n.r=function(e){Object.defineProperty(e,"__esModule",{value:!0})},n.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return n.d(t,"a",t),t},n.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},n.p="",n(n.s=9)}([function(e,t,n){var r=n(7);"string"==typeof r&&(r=[[e.i,r,""]]);var o={transform:void 0},i=n(5)(r,o);r.locals&&(e.exports=r.locals),e.exports.__universal__=i.__universal__},function(e,t){e.exports=require("react")},function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var r,o=n(1),i=(r=o)&&r.__esModule?r:{default:r};var a=n(0);t.default=function(e){var t=e.uid,n=void 0===t?"":t;if(!n)return null;var r="";return"undefined"!=typeof window&&(r=window.location.href),i.default.createElement("div",{className:a.offline_side_nav},i.default.createElement("a",{target:"_blank",href:"http://order.package.ctripcorp.com/Tour-Order-Orderoperate/pkgorderlistNew.aspx?uid="+n+"&OrderListType=QueryUserOrder&QueryValue="+n},"订单查询"),i.default.createElement("a",{target:"_blank",href:"http://booking.package.ctripcorp.com//Package-Booking-PkgOrderTrack/Orders/Home/SearchResult/?uid="+n},"追单订单"),i.default.createElement("a",{target:"_blank",href:"http://booking.package.ctripcorp.com//Package-Booking-PkgOrderTrack/Orders/Home/Input?from="+r+"&uid="+n},"意向单"))}},function(e,t){e.exports=function(e){var t="undefined"!=typeof window&&window.location;if(!t)throw new Error("fixUrls requires window.location");if(!e||"string"!=typeof e)return e;var n=t.protocol+"//"+t.host,r=n+t.pathname.replace(/\/[^\/]*$/,"/");return e.replace(/url\s*\(((?:[^)(]|\((?:[^)(]+|\([^)(]*\))*\))*)\)/gi,function(e,t){var o,i=t.trim().replace(/^"(.*)"$/,function(e,t){return t}).replace(/^'(.*)'$/,function(e,t){return t});return/^(#|data:|http:\/\/|https:\/\/|file:\/\/\/)/i.test(i)?e:(o=0===i.indexOf("//")?i:0===i.indexOf("/")?n+i:r+i.replace(/^\.\//,""),"url("+JSON.stringify(o)+")")})}},function(e,t){function n(e){this.id=e,this.content=[],this.attrs={}}n.prototype.setAttribute=function(e,t){null==t?delete this.attrs[e]:this.attrs[e]=t},n.prototype.toString=function(e){var t=this.content.join(null==e?"\n":e),n="",r=this.attrs;return Object.keys(this.attrs).forEach(function(e){n+=e+'="'+r[e]+'" '}),n.length>0&&(n=" "+n.slice(0,-1)),"<style"+n+">"+t+"</style>"},e.exports=n},function(e,t,n){var r,o,i,a=n(4),l=function(e){var t;return function(){return void 0===t&&(t=e.apply(this,arguments)),t}},s="data-universal",c="ssr",f=[],u={},d=null,p=0,h=[];function b(){}function _(){for(var e,t=[].slice.call(document.getElementsByTagName("style"),0),n=0;n<t.length;n++)(e=t[n]).getAttribute(s)===c&&e.parentNode.removeChild(e)}function m(e,t){for(var n=[],r={},o=0;o<e.length;o++){var i=e[o],a=t.base?i[0]+t.base:i[0],l={css:i[1],media:i[2],sourceMap:i[3]};r[a]?r[a].parts.push(l):n.push(r[a]={id:a,parts:[l]})}return n}function v(e,t){for(var n=0;n<e.length;n++){var r=e[n],o=u[r.id];if(o){o.refs++;for(var i=0;i<o.parts.length;i++)o.parts[i](r.parts[i]);for(;i<r.parts.length;i++)o.parts.push(k(r.parts[i],t))}else{var a=[];for(i=0;i<r.parts.length;i++)a.push(k(r.parts[i],t));u[r.id]={id:r.id,refs:1,parts:a}}}}function g(e,t){var n=o(e.insertInto);if(!n)throw new Error("Couldn't find a style target. This probably means that the value for the 'insertInto' parameter is invalid.");var r=h[h.length-1];if("top"===e.insertAt)r?r.nextSibling?n.insertBefore(t,r.nextSibling):n.appendChild(t):n.insertBefore(t,n.firstChild),h.push(t);else{if("bottom"!==e.insertAt)throw new Error("Invalid value for parameter 'insertAt'. Must be 'top' or 'bottom'.");n.appendChild(t)}}function x(e){if(null===e.parentNode)return!1;e.parentNode.removeChild(e);var t=h.indexOf(e);t>=0&&h.splice(t,1)}function y(e){var t=document.createElement("style");return e.attrs.type="text/css",w(t,e.attrs),g(e,t),t}function w(e,t){Object.keys(t).forEach(function(n){e.setAttribute(n,t[n])})}function k(e,t){var n,r,o,a;if(t.transform&&e.css){if(!(a=t.transform(e.css)))return function(){};e.css=a}if(t.singleton){var l=p++;n=d||(d=y(t)),r=U.bind(null,n,l,!1),o=U.bind(null,n,l,!0)}else e.sourceMap&&"function"==typeof URL&&"function"==typeof URL.createObjectURL&&"function"==typeof URL.revokeObjectURL&&"function"==typeof Blob&&"function"==typeof btoa?(n=function(e){var t=document.createElement("link");return e.attrs.type="text/css",e.attrs.rel="stylesheet",w(t,e.attrs),g(e,t),t}(t),r=function(e,t,n){var r=n.css,o=n.sourceMap,a=void 0===t.convertToAbsoluteUrls&&o;(t.convertToAbsoluteUrls||a)&&(r=i(r));o&&(r+="\n/*# sourceMappingURL=data:application/json;base64,"+btoa(unescape(encodeURIComponent(JSON.stringify(o))))+" */");var l=new Blob([r],{type:"text/css"}),s=e.href;e.href=URL.createObjectURL(l),s&&URL.revokeObjectURL(s)}.bind(null,n,t),o=function(){x(n),n.href&&URL.revokeObjectURL(n.href)}):(n=y(t),r=function(e,t){var n=t.css,r=t.media;r&&e.setAttribute("media",r);if(e.styleSheet)e.styleSheet.cssText=n;else{for(;e.firstChild;)e.removeChild(e.firstChild);e.appendChild(document.createTextNode(n))}}.bind(null,n),o=function(){x(n)});return r(e),function(t){if(t){if(t.css===e.css&&t.media===e.media&&t.sourceMap===e.sourceMap)return;r(e=t)}else o()}}e.exports=function(e,t){(t=t||{}).attrs="object"==typeof t.attrs?t.attrs:{};var h,g=m(e,t);return b.__universal__=void 0,"object"==typeof window&&window.document?(r=l(function(){return window&&document&&document.all&&!window.atob}),t.singleton||(t.singleton=r()),t.insertInto||(t.insertInto="head"),t.insertAt||(t.insertAt="bottom"),i=n(3),h={},o=function(e){if(void 0===h[e]){var t=function(e){return document.querySelector(e)}.call(this,e);if(t instanceof window.HTMLIFrameElement)try{t=t.contentDocument.head}catch(e){t=null}h[e]=t}return h[e]},v(g,t),setTimeout(_,16),function(e){for(var n=[],r=0;r<g.length;r++){var o=g[r];(i=u[o.id]).refs--,n.push(i)}e&&v(m(e,t),t);for(r=0;r<n.length;r++){var i;if(0===(i=n[r]).refs){for(var a=0;a<i.parts.length;a++)i.parts[a]();delete u[i.id]}}}):(r=l(function(){return!("object"!=typeof navigator||!navigator.userAgent)&&/MSIE [5-9]\b/i.test(navigator.userAgent)}),t.singleton||(t.singleton=r()),function(e,t){for(var n=0;n<e.length;n++)for(var r=e[n],o=0;o<r.parts.length;o++)i(r.parts[o],t,r.id);return b.__universal__=f,b;function i(e,t,n){var r,o;if(t.transform&&e.css){if(!(o=t.transform(e.css)))return b;e.css=o}if(t.attrs.type="text/css",t.attrs[s]=c,t.singleton){var i=p++;t.attrs["data-singleton"]="singleton",(r=d||(d=l(t,n))).content.splice(i,1,e.css),-1===f.indexOf(r)&&f.push(r)}else(r=l(t,n)).content.push(e.css),e.media&&r.setAttribute("media",e.media),f.push(r);return b}function l(e,t){var n=new a(t);return Object.keys(e.attrs).forEach(function(t){n.setAttribute(t,e.attrs[t])}),n}}(g,t))};var E,O=(E=[],function(e,t){return E[e]=t,E.filter(Boolean).join("\n")});function U(e,t,n,r){var o=n?"":r.css;if(e.styleSheet)e.styleSheet.cssText=O(t,o);else{var i=document.createTextNode(o),a=e.childNodes;a[t]&&e.removeChild(a[t]),a.length?e.insertBefore(i,a[t]):e.appendChild(i)}}},function(e,t){e.exports=function(e){var t=[];return t.toString=function(){return this.map(function(t){var n=function(e,t){var n=e[1]||"",r=e[3];if(!r)return n;if(t&&"function"==typeof btoa){var o=(a=r,"/*# sourceMappingURL=data:application/json;charset=utf-8;base64,"+btoa(unescape(encodeURIComponent(JSON.stringify(a))))+" */"),i=r.sources.map(function(e){return"/*# sourceURL="+r.sourceRoot+e+" */"});return[n].concat(i).concat([o]).join("\n")}var a;return[n].join("\n")}(t,e);return t[2]?"@media "+t[2]+"{"+n+"}":n}).join("")},t.i=function(e,n){"string"==typeof e&&(e=[[null,e,""]]);for(var r={},o=0;o<this.length;o++){var i=this[o][0];"number"==typeof i&&(r[i]=!0)}for(o=0;o<e.length;o++){var a=e[o];"number"==typeof a[0]&&r[a[0]]||(n&&!a[2]?a[2]=n:n&&(a[2]="("+a[2]+") and ("+n+")"),t.push(a))}},t}},function(e,t,n){(t=e.exports=n(6)(!1)).push([e.i,"html, body, div, dl, dt, dd, ul, ol, li, h1, h2, h3, h4, h5, h6, pre, code, form, fieldset, legend, input, textarea, p, blockquote, th, td, em, button { margin:0; padding:0; }\r\nul li, ol li { list-style:none; }\r\n.offline_header_box, .offline_side_nav{ font-size:12px; line-height:1.5; font-family:Tahoma,Simsun,sans-serif; color:#333; background:#fff; }\r\n.offline_header_box img { margin:0; padding:0; border:0; }\r\n.offline_header_box em { font-style:normal;font-weight:400}\r\n.offline_header_box a { color:#0065bb; text-decoration:none; outline:none; }\r\n.offline_header_box a:hover { text-decoration:underline; }\r\n\r\n.basefix,.layoutfix { *zoom:1; }\r\n.basefix:after,.layoutfix:after { clear:both; content:'.'; display:block; height:0; overflow:hidden; }\r\n.float_left { float:left !important; }\r\n.float_right { float:right !important; }\r\n.offline_header_box .color_blue{color:#0087cc;}\r\n.offline_header_box .color_orange{color:#ff6600;}\r\n.weibo{ background-image: url(http://picint.sh.ctriptravel.com/offline_book/new_icon.png);background-repeat: no-repeat;}\r\n.weibo{ width:20px; height:23px; display:inline-block; vertical-align:-5px;}\r\n.weibo.v1{ background-position:-33px -10px;}\r\n.weibo.v2{ background-position:-77px -10px;}\r\n.weibo.v3{ background-position:-113px -10px;}\r\n.weibo.v4{ background-position:-152px -10px;}\r\n.weibo.v5{ background-position:-194px -10px;}\r\n.crown_box{ display:inline-block; position:relative; cursor:pointer;}\r\n.crown_icon{ background-image: url(http://picint.sh.ctriptravel.com/offline_book/huang.png);background-repeat: no-repeat;}\r\n.crown_icon{ width:15px; height:15px; display:inline-block;margin-left:3px;vertical-align:middle;}\r\n.crown_icon1{background-position:-11px -7px;}\r\n.crown_icon2{background-position:-29px -7px;}\r\n.crown_icon3{background-position:-50px -7px;}\r\n.crown_icon4{background-position:-72px -7px;}\r\n.crown_icon5{background-position:-96px -7px;}\r\n.troublesome_box { position: absolute; z-index: 100; top:32px; left:10px; display:none;  }\r\n.troublesome_box .alert_info { background-color:#FFF5D1; border:1px solid #FFB533; padding:3px; white-space:nowrap; color:#333; font-size:12px; padding-left:10px; line-height:18px;}\r\n.troublesome_box b, .troublesome_box i { position:absolute; height:0; width:0; line-height:0; font-size:0; border-left:0 none; top:-10px; left:20px;}\r\n.troublesome_box b { border-right: 5px dashed transparent; border-top: 5px dashed transparent; border-bottom: 5px solid #FFB533; border-left: 5px dashed transparent; }\r\n.troublesome_box i { border-right: 5px dashed transparent; border-top: 5px dashed transparent; border-bottom: 5px solid #FFF5D1; border-left: 5px dashed transparent; top:-8px; }\r\n.crown_box:hover .troublesome_box{ display:block;}\r\n.offline_header_box{background:#f9f9f9;margin-bottom:20px;padding:10px 0;}\r\n.offline_header_con{width:980px;margin:0 auto;overflow:hidden;}\r\n.offline_logo{float:left;}\r\n.offline_header_nav{float:right;width:790px;}\r\n.offline_header_nav li{float:left;margin-right:10px;padding-right:10px;line-height:36px;position:relative;}\r\n.offline_header_nav li:after{content:\"\";position:absolute;right:0;top:50%;margin-top:-5px;height:12px;width:1px;background:#999;}\r\n.offline_header_nav em{color:#999;display:inline-block;}\r\n.offline_side_nav{ position:fixed; right:10px; z-index:9999; width:40px; border:1px solid #bfdfff; border-bottom:0; font-size:12px; background:#f8fcfe; color:#0087cc; top:0px; _position:absolute; }\r\n.offline_side_nav a{ display:block; border-bottom:1px solid #bfdfff; text-align:center; padding:10px 5px; color:#0065bb; text-decoration:none; outline:none;}\r\n.offline_side_nav a:hover{ background:#39a7ee; color:#ffffff; text-decoration:none;}\r\n\r\n.slide_index_nav{margin-top:10px;}\r\n.slide_nav_item{margin:0 5px;width:14px;height:14px;cursor:pointer;}\r\n\r\n\r\n",""]),t.locals={offline_header_box:"offline_header_box",offline_side_nav:"offline_side_nav",basefix:"basefix",layoutfix:"layoutfix",float_left:"float_left",float_right:"float_right",color_blue:"color_blue",color_orange:"color_orange",weibo:"weibo",v1:"v1",v2:"v2",v3:"v3",v4:"v4",v5:"v5",crown_box:"crown_box",crown_icon:"crown_icon",crown_icon1:"crown_icon1",crown_icon2:"crown_icon2",crown_icon3:"crown_icon3",crown_icon4:"crown_icon4",crown_icon5:"crown_icon5",troublesome_box:"troublesome_box",alert_info:"alert_info",offline_header_con:"offline_header_con",offline_logo:"offline_logo",offline_header_nav:"offline_header_nav",slide_index_nav:"slide_index_nav",slide_nav_item:"slide_nav_item"}},function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var r,o=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},i=function(){function e(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}return function(t,n,r){return n&&e(t.prototype,n),r&&e(t,r),t}}(),a=n(1),l=(r=a)&&r.__esModule?r:{default:r};var s=n(0),c=function(e){function t(){return function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,t),function(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}(this,(t.__proto__||Object.getPrototypeOf(t)).apply(this,arguments))}return function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}(t,l.default.PureComponent),i(t,[{key:"renderUserInfo",value:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},t=[],n=e.basicInfo||{};return n.UserName&&t.push(l.default.createElement("li",{key:"UserName"},l.default.createElement("em",null,"姓名："),l.default.createElement("span",null,n.UserName))),n.Uid&&t.push(l.default.createElement("li",{key:"Uid"},l.default.createElement("em",null,"用户名："),l.default.createElement("a",{className:s.color_blue,target:"_blank",href:"http://service.sh.ctriptravel.com/cii/crm/memberdetail.asp?uid="+n.Uid},n.Uid))),n.CtripCardNo&&t.push(l.default.createElement("li",{key:"CtripCardNo"},l.default.createElement("em",null,"卡号："),l.default.createElement("span",{className:s.color_orange},n.CtripCardNo))),n.UserGradeName&&t.push(l.default.createElement("li",{key:"UserCrownName"},l.default.createElement("em",null,"级别："),l.default.createElement("span",null,n.UserGradeName))),n.Ani&&t.push(l.default.createElement("li",{key:"Ani"},l.default.createElement("em",null,"主叫号码："),l.default.createElement("span",null,n.Ani))),n.Experience&&t.push(l.default.createElement("li",{key:"Experience"},l.default.createElement("em",null,"积分："),l.default.createElement("span",null,n.Experience))),(e.UserProfileInfo||[]).forEach(function(e){t.push(l.default.createElement("li",{key:e.Name},l.default.createElement("em",null,e.Name,"："),l.default.createElement("span",null,e.Value)))}),t}},{key:"render",value:function(){var e=this.props.userInfo;return e&&(e.basicInfo=o({},e.TagUserInfo,e.UserInfo)),l.default.createElement("div",{className:s.offline_header_box},l.default.createElement("div",{className:s.offline_header_con},l.default.createElement("img",{className:s.offline_logo,src:"http://picint.sh.ctriptravel.com/offline_book/indent_logo.png"}),l.default.createElement("ul",{className:s.offline_header_nav},this.renderUserInfo(e))))}}]),t}();t.default=c},function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.SideNav=t.Header=void 0;var r=i(n(8)),o=i(n(2));function i(e){return e&&e.__esModule?e:{default:e}}n(0);t.Header=r.default,t.SideNav=o.default}]);