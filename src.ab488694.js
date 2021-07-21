parcelRequire=function(e,r,t,n){var i,o="function"==typeof parcelRequire&&parcelRequire,u="function"==typeof require&&require;function f(t,n){if(!r[t]){if(!e[t]){var i="function"==typeof parcelRequire&&parcelRequire;if(!n&&i)return i(t,!0);if(o)return o(t,!0);if(u&&"string"==typeof t)return u(t);var c=new Error("Cannot find module '"+t+"'");throw c.code="MODULE_NOT_FOUND",c}p.resolve=function(r){return e[t][1][r]||r},p.cache={};var l=r[t]=new f.Module(t);e[t][0].call(l.exports,p,l,l.exports,this)}return r[t].exports;function p(e){return f(p.resolve(e))}}f.isParcelRequire=!0,f.Module=function(e){this.id=e,this.bundle=f,this.exports={}},f.modules=e,f.cache=r,f.parent=o,f.register=function(r,t){e[r]=[function(e,r){r.exports=t},{}]};for(var c=0;c<t.length;c++)try{f(t[c])}catch(e){i||(i=e)}if(t.length){var l=f(t[t.length-1]);"object"==typeof exports&&"undefined"!=typeof module?module.exports=l:"function"==typeof define&&define.amd?define(function(){return l}):n&&(this[n]=l)}if(parcelRequire=f,i)throw i;return f}({"saRr":[function(require,module,exports) {
"use strict";var e;Object.defineProperty(exports,"__esModule",{value:!0}),exports.default=o;var t=new Uint8Array(16);function o(){if(!e&&!(e="undefined"!=typeof crypto&&crypto.getRandomValues&&crypto.getRandomValues.bind(crypto)||"undefined"!=typeof msCrypto&&"function"==typeof msCrypto.getRandomValues&&msCrypto.getRandomValues.bind(msCrypto)))throw new Error("crypto.getRandomValues() not supported. See https://github.com/uuidjs/uuid#getrandomvalues-not-supported");return e(t)}
},{}],"Kfyb":[function(require,module,exports) {
"use strict";Object.defineProperty(exports,"__esModule",{value:!0}),exports.default=void 0;var e=/^(?:[0-9a-f]{8}-[0-9a-f]{4}-[1-5][0-9a-f]{3}-[89ab][0-9a-f]{3}-[0-9a-f]{12}|00000000-0000-0000-0000-000000000000)$/i;exports.default=e;
},{}],"dh4g":[function(require,module,exports) {
"use strict";Object.defineProperty(exports,"__esModule",{value:!0}),exports.default=void 0;var e=t(require("./regex.js"));function t(e){return e&&e.__esModule?e:{default:e}}function r(t){return"string"==typeof t&&e.default.test(t)}var u=r;exports.default=u;
},{"./regex.js":"Kfyb"}],"Okf7":[function(require,module,exports) {
"use strict";Object.defineProperty(exports,"__esModule",{value:!0}),exports.default=void 0;var e=r(require("./validate.js"));function r(e){return e&&e.__esModule?e:{default:e}}for(var t=[],i=0;i<256;++i)t.push((i+256).toString(16).substr(1));function o(r){var i=arguments.length>1&&void 0!==arguments[1]?arguments[1]:0,o=(t[r[i+0]]+t[r[i+1]]+t[r[i+2]]+t[r[i+3]]+"-"+t[r[i+4]]+t[r[i+5]]+"-"+t[r[i+6]]+t[r[i+7]]+"-"+t[r[i+8]]+t[r[i+9]]+"-"+t[r[i+10]]+t[r[i+11]]+t[r[i+12]]+t[r[i+13]]+t[r[i+14]]+t[r[i+15]]).toLowerCase();if(!(0,e.default)(o))throw TypeError("Stringified UUID is invalid");return o}var u=o;exports.default=u;
},{"./validate.js":"dh4g"}],"ds1e":[function(require,module,exports) {
"use strict";Object.defineProperty(exports,"__esModule",{value:!0}),exports.default=void 0;var e,r,s=o(require("./rng.js")),n=o(require("./stringify.js"));function o(e){return e&&e.__esModule?e:{default:e}}var u=0,t=0;function a(o,a,l){var d=a&&l||0,i=a||new Array(16),c=(o=o||{}).node||e,v=void 0!==o.clockseq?o.clockseq:r;if(null==c||null==v){var f=o.random||(o.rng||s.default)();null==c&&(c=e=[1|f[0],f[1],f[2],f[3],f[4],f[5]]),null==v&&(v=r=16383&(f[6]<<8|f[7]))}var q=void 0!==o.msecs?o.msecs:Date.now(),m=void 0!==o.nsecs?o.nsecs:t+1,p=q-u+(m-t)/1e4;if(p<0&&void 0===o.clockseq&&(v=v+1&16383),(p<0||q>u)&&void 0===o.nsecs&&(m=0),m>=1e4)throw new Error("uuid.v1(): Can't create more than 10M uuids/sec");u=q,t=m,r=v;var w=(1e4*(268435455&(q+=122192928e5))+m)%4294967296;i[d++]=w>>>24&255,i[d++]=w>>>16&255,i[d++]=w>>>8&255,i[d++]=255&w;var _=q/4294967296*1e4&268435455;i[d++]=_>>>8&255,i[d++]=255&_,i[d++]=_>>>24&15|16,i[d++]=_>>>16&255,i[d++]=v>>>8|128,i[d++]=255&v;for(var g=0;g<6;++g)i[d+g]=c[g];return a||(0,n.default)(i)}var l=a;exports.default=l;
},{"./rng.js":"saRr","./stringify.js":"Okf7"}],"i9qQ":[function(require,module,exports) {
"use strict";Object.defineProperty(exports,"__esModule",{value:!0}),exports.default=void 0;var e=r(require("./validate.js"));function r(e){return e&&e.__esModule?e:{default:e}}function t(r){if(!(0,e.default)(r))throw TypeError("Invalid UUID");var t,s=new Uint8Array(16);return s[0]=(t=parseInt(r.slice(0,8),16))>>>24,s[1]=t>>>16&255,s[2]=t>>>8&255,s[3]=255&t,s[4]=(t=parseInt(r.slice(9,13),16))>>>8,s[5]=255&t,s[6]=(t=parseInt(r.slice(14,18),16))>>>8,s[7]=255&t,s[8]=(t=parseInt(r.slice(19,23),16))>>>8,s[9]=255&t,s[10]=(t=parseInt(r.slice(24,36),16))/1099511627776&255,s[11]=t/4294967296&255,s[12]=t>>>24&255,s[13]=t>>>16&255,s[14]=t>>>8&255,s[15]=255&t,s}var s=t;exports.default=s;
},{"./validate.js":"dh4g"}],"jljL":[function(require,module,exports) {
"use strict";Object.defineProperty(exports,"__esModule",{value:!0}),exports.default=s,exports.URL=exports.DNS=void 0;var e=t(require("./stringify.js")),r=t(require("./parse.js"));function t(e){return e&&e.__esModule?e:{default:e}}function n(e){e=unescape(encodeURIComponent(e));for(var r=[],t=0;t<e.length;++t)r.push(e.charCodeAt(t));return r}var a="6ba7b810-9dad-11d1-80b4-00c04fd430c8";exports.DNS=a;var o="6ba7b811-9dad-11d1-80b4-00c04fd430c8";function s(t,s,u){function i(t,a,o,i){if("string"==typeof t&&(t=n(t)),"string"==typeof a&&(a=(0,r.default)(a)),16!==a.length)throw TypeError("Namespace must be array-like (16 iterable integer values, 0-255)");var d=new Uint8Array(16+t.length);if(d.set(a),d.set(t,a.length),(d=u(d))[6]=15&d[6]|s,d[8]=63&d[8]|128,o){i=i||0;for(var f=0;f<16;++f)o[i+f]=d[f];return o}return(0,e.default)(d)}try{i.name=t}catch(d){}return i.DNS=a,i.URL=o,i}exports.URL=o;
},{"./stringify.js":"Okf7","./parse.js":"i9qQ"}],"z990":[function(require,module,exports) {
"use strict";function n(n){if("string"==typeof n){var t=unescape(encodeURIComponent(n));n=new Uint8Array(t.length);for(var o=0;o<t.length;++o)n[o]=t.charCodeAt(o)}return r(e(u(n),8*n.length))}function r(n){for(var r=[],t=32*n.length,e=0;e<t;e+=8){var u=n[e>>5]>>>e%32&255,o=parseInt("0123456789abcdef".charAt(u>>>4&15)+"0123456789abcdef".charAt(15&u),16);r.push(o)}return r}function t(n){return 14+(n+64>>>9<<4)+1}function e(n,r){n[r>>5]|=128<<r%32,n[t(r)-1]=r;for(var e=1732584193,u=-271733879,f=-1732584194,a=271733878,v=0;v<n.length;v+=16){var s=e,d=u,p=f,g=a;e=c(e,u,f,a,n[v],7,-680876936),a=c(a,e,u,f,n[v+1],12,-389564586),f=c(f,a,e,u,n[v+2],17,606105819),u=c(u,f,a,e,n[v+3],22,-1044525330),e=c(e,u,f,a,n[v+4],7,-176418897),a=c(a,e,u,f,n[v+5],12,1200080426),f=c(f,a,e,u,n[v+6],17,-1473231341),u=c(u,f,a,e,n[v+7],22,-45705983),e=c(e,u,f,a,n[v+8],7,1770035416),a=c(a,e,u,f,n[v+9],12,-1958414417),f=c(f,a,e,u,n[v+10],17,-42063),u=c(u,f,a,e,n[v+11],22,-1990404162),e=c(e,u,f,a,n[v+12],7,1804603682),a=c(a,e,u,f,n[v+13],12,-40341101),f=c(f,a,e,u,n[v+14],17,-1502002290),e=i(e,u=c(u,f,a,e,n[v+15],22,1236535329),f,a,n[v+1],5,-165796510),a=i(a,e,u,f,n[v+6],9,-1069501632),f=i(f,a,e,u,n[v+11],14,643717713),u=i(u,f,a,e,n[v],20,-373897302),e=i(e,u,f,a,n[v+5],5,-701558691),a=i(a,e,u,f,n[v+10],9,38016083),f=i(f,a,e,u,n[v+15],14,-660478335),u=i(u,f,a,e,n[v+4],20,-405537848),e=i(e,u,f,a,n[v+9],5,568446438),a=i(a,e,u,f,n[v+14],9,-1019803690),f=i(f,a,e,u,n[v+3],14,-187363961),u=i(u,f,a,e,n[v+8],20,1163531501),e=i(e,u,f,a,n[v+13],5,-1444681467),a=i(a,e,u,f,n[v+2],9,-51403784),f=i(f,a,e,u,n[v+7],14,1735328473),e=h(e,u=i(u,f,a,e,n[v+12],20,-1926607734),f,a,n[v+5],4,-378558),a=h(a,e,u,f,n[v+8],11,-2022574463),f=h(f,a,e,u,n[v+11],16,1839030562),u=h(u,f,a,e,n[v+14],23,-35309556),e=h(e,u,f,a,n[v+1],4,-1530992060),a=h(a,e,u,f,n[v+4],11,1272893353),f=h(f,a,e,u,n[v+7],16,-155497632),u=h(u,f,a,e,n[v+10],23,-1094730640),e=h(e,u,f,a,n[v+13],4,681279174),a=h(a,e,u,f,n[v],11,-358537222),f=h(f,a,e,u,n[v+3],16,-722521979),u=h(u,f,a,e,n[v+6],23,76029189),e=h(e,u,f,a,n[v+9],4,-640364487),a=h(a,e,u,f,n[v+12],11,-421815835),f=h(f,a,e,u,n[v+15],16,530742520),e=l(e,u=h(u,f,a,e,n[v+2],23,-995338651),f,a,n[v],6,-198630844),a=l(a,e,u,f,n[v+7],10,1126891415),f=l(f,a,e,u,n[v+14],15,-1416354905),u=l(u,f,a,e,n[v+5],21,-57434055),e=l(e,u,f,a,n[v+12],6,1700485571),a=l(a,e,u,f,n[v+3],10,-1894986606),f=l(f,a,e,u,n[v+10],15,-1051523),u=l(u,f,a,e,n[v+1],21,-2054922799),e=l(e,u,f,a,n[v+8],6,1873313359),a=l(a,e,u,f,n[v+15],10,-30611744),f=l(f,a,e,u,n[v+6],15,-1560198380),u=l(u,f,a,e,n[v+13],21,1309151649),e=l(e,u,f,a,n[v+4],6,-145523070),a=l(a,e,u,f,n[v+11],10,-1120210379),f=l(f,a,e,u,n[v+2],15,718787259),u=l(u,f,a,e,n[v+9],21,-343485551),e=o(e,s),u=o(u,d),f=o(f,p),a=o(a,g)}return[e,u,f,a]}function u(n){if(0===n.length)return[];for(var r=8*n.length,e=new Uint32Array(t(r)),u=0;u<r;u+=8)e[u>>5]|=(255&n[u/8])<<u%32;return e}function o(n,r){var t=(65535&n)+(65535&r);return(n>>16)+(r>>16)+(t>>16)<<16|65535&t}function f(n,r){return n<<r|n>>>32-r}function a(n,r,t,e,u,a){return o(f(o(o(r,n),o(e,a)),u),t)}function c(n,r,t,e,u,o,f){return a(r&t|~r&e,n,r,u,o,f)}function i(n,r,t,e,u,o,f){return a(r&e|t&~e,n,r,u,o,f)}function h(n,r,t,e,u,o,f){return a(r^t^e,n,r,u,o,f)}function l(n,r,t,e,u,o,f){return a(t^(r|~e),n,r,u,o,f)}Object.defineProperty(exports,"__esModule",{value:!0}),exports.default=void 0;var v=n;exports.default=v;
},{}],"Nc2A":[function(require,module,exports) {
"use strict";Object.defineProperty(exports,"__esModule",{value:!0}),exports.default=void 0;var e=t(require("./v35.js")),r=t(require("./md5.js"));function t(e){return e&&e.__esModule?e:{default:e}}var u=(0,e.default)("v3",48,r.default),d=u;exports.default=d;
},{"./v35.js":"jljL","./md5.js":"z990"}],"HQTZ":[function(require,module,exports) {
"use strict";Object.defineProperty(exports,"__esModule",{value:!0}),exports.default=void 0;var e=t(require("./rng.js")),r=t(require("./stringify.js"));function t(e){return e&&e.__esModule?e:{default:e}}function u(t,u,n){var a=(t=t||{}).random||(t.rng||e.default)();if(a[6]=15&a[6]|64,a[8]=63&a[8]|128,u){n=n||0;for(var f=0;f<16;++f)u[n+f]=a[f];return u}return(0,r.default)(a)}var n=u;exports.default=n;
},{"./rng.js":"saRr","./stringify.js":"Okf7"}],"F2vf":[function(require,module,exports) {
"use strict";function r(r,e,t,a){switch(r){case 0:return e&t^~e&a;case 1:return e^t^a;case 2:return e&t^e&a^t&a;case 3:return e^t^a}}function e(r,e){return r<<e|r>>>32-e}function t(t){var a=[1518500249,1859775393,2400959708,3395469782],o=[1732584193,4023233417,2562383102,271733878,3285377520];if("string"==typeof t){var n=unescape(encodeURIComponent(t));t=[];for(var s=0;s<n.length;++s)t.push(n.charCodeAt(s))}else Array.isArray(t)||(t=Array.prototype.slice.call(t));t.push(128);for(var f=t.length/4+2,u=Math.ceil(f/16),c=new Array(u),l=0;l<u;++l){for(var i=new Uint32Array(16),v=0;v<16;++v)i[v]=t[64*l+4*v]<<24|t[64*l+4*v+1]<<16|t[64*l+4*v+2]<<8|t[64*l+4*v+3];c[l]=i}c[u-1][14]=8*(t.length-1)/Math.pow(2,32),c[u-1][14]=Math.floor(c[u-1][14]),c[u-1][15]=8*(t.length-1)&4294967295;for(var h=0;h<u;++h){for(var p=new Uint32Array(80),y=0;y<16;++y)p[y]=c[h][y];for(var d=16;d<80;++d)p[d]=e(p[d-3]^p[d-8]^p[d-14]^p[d-16],1);for(var A=o[0],g=o[1],w=o[2],M=o[3],x=o[4],U=0;U<80;++U){var C=Math.floor(U/20),_=e(A,5)+r(C,g,w,M)+x+a[C]+p[U]>>>0;x=M,M=w,w=e(g,30)>>>0,g=A,A=_}o[0]=o[0]+A>>>0,o[1]=o[1]+g>>>0,o[2]=o[2]+w>>>0,o[3]=o[3]+M>>>0,o[4]=o[4]+x>>>0}return[o[0]>>24&255,o[0]>>16&255,o[0]>>8&255,255&o[0],o[1]>>24&255,o[1]>>16&255,o[1]>>8&255,255&o[1],o[2]>>24&255,o[2]>>16&255,o[2]>>8&255,255&o[2],o[3]>>24&255,o[3]>>16&255,o[3]>>8&255,255&o[3],o[4]>>24&255,o[4]>>16&255,o[4]>>8&255,255&o[4]]}Object.defineProperty(exports,"__esModule",{value:!0}),exports.default=void 0;var a=t;exports.default=a;
},{}],"oZbo":[function(require,module,exports) {
"use strict";Object.defineProperty(exports,"__esModule",{value:!0}),exports.default=void 0;var e=t(require("./v35.js")),r=t(require("./sha1.js"));function t(e){return e&&e.__esModule?e:{default:e}}var u=(0,e.default)("v5",80,r.default),s=u;exports.default=s;
},{"./v35.js":"jljL","./sha1.js":"F2vf"}],"Bkgj":[function(require,module,exports) {
"use strict";Object.defineProperty(exports,"__esModule",{value:!0}),exports.default=void 0;var e="00000000-0000-0000-0000-000000000000";exports.default=e;
},{}],"kmp0":[function(require,module,exports) {
"use strict";Object.defineProperty(exports,"__esModule",{value:!0}),exports.default=void 0;var e=r(require("./validate.js"));function r(e){return e&&e.__esModule?e:{default:e}}function t(r){if(!(0,e.default)(r))throw TypeError("Invalid UUID");return parseInt(r.substr(14,1),16)}var u=t;exports.default=u;
},{"./validate.js":"dh4g"}],"D6fo":[function(require,module,exports) {
"use strict";Object.defineProperty(exports,"__esModule",{value:!0}),Object.defineProperty(exports,"v1",{enumerable:!0,get:function(){return e.default}}),Object.defineProperty(exports,"v3",{enumerable:!0,get:function(){return r.default}}),Object.defineProperty(exports,"v4",{enumerable:!0,get:function(){return t.default}}),Object.defineProperty(exports,"v5",{enumerable:!0,get:function(){return n.default}}),Object.defineProperty(exports,"NIL",{enumerable:!0,get:function(){return u.default}}),Object.defineProperty(exports,"version",{enumerable:!0,get:function(){return i.default}}),Object.defineProperty(exports,"validate",{enumerable:!0,get:function(){return o.default}}),Object.defineProperty(exports,"stringify",{enumerable:!0,get:function(){return f.default}}),Object.defineProperty(exports,"parse",{enumerable:!0,get:function(){return s.default}});var e=a(require("./v1.js")),r=a(require("./v3.js")),t=a(require("./v4.js")),n=a(require("./v5.js")),u=a(require("./nil.js")),i=a(require("./version.js")),o=a(require("./validate.js")),f=a(require("./stringify.js")),s=a(require("./parse.js"));function a(e){return e&&e.__esModule?e:{default:e}}
},{"./v1.js":"ds1e","./v3.js":"Nc2A","./v4.js":"HQTZ","./v5.js":"oZbo","./nil.js":"Bkgj","./version.js":"kmp0","./validate.js":"dh4g","./stringify.js":"Okf7","./parse.js":"i9qQ"}],"QCba":[function(require,module,exports) {
"use strict";Object.defineProperty(exports,"__esModule",{value:!0});var t=require("uuid"),e=function(){function e(){var e=this;this.doWork=function(){var t=document.getElementById("original");e.showResult(t)},this.uuid_en=new Map,this.uuid_ja=new Map,this.uuid_index=new Array,this.newline_replace=t.v4();var n=document.getElementById("original");this.showResult(n)}return e.prototype.showResult=function(t){var e=(new DOMParser).parseFromString(t.value,"text/html"),n=document.getElementById("translated"),i=this.content_to_uuid(e.documentElement),o=document.getElementById("converted"),r=document.getElementById("original-string-list");if(o&&o.replaceWith(i),r&&(r.innerHTML=this.uuid_list_to_string(this.uuid_en)),n){var l=this.translated_text_to_map(n.value);console.log(l);var u=this.content_from_uuid(i,l);o.replaceWith(u)}},e.prototype.translated_text_to_map=function(t){for(var e=t.split("\n"),n=new Map,i=0;i<e.length;i++)e[i]=e[i].replace(this.newline_replace,"\n"),n.set(this.uuid_index[i],e[i]);return n},e.prototype.uuid_list_to_string=function(t){var e=this,n="";return t.forEach(function(t,i){e.uuid_index.push(i),n=n+t+"\n"}),'<textarea class="form-control" id=1>'+n+"</textarea></li>"},e.prototype.content_to_uuid=function(e){var n=e;if(n.children.length>0){if("P"==n.tagName||"LI"==n.tagName)if(r=n.textContent){var i=t.v4();this.uuid_en.set(i,r),n.textContent=r.replace("\n",this.newline_replace),n.textContent=i}for(var o=0;o<n.children.length;o++)this.content_to_uuid(n.children[o])}else{var r;if(r=n.textContent){i=t.v4();this.uuid_en.set(i,r),n.textContent=r.replace("\n",this.newline_replace),n.textContent=i}}return n},e.prototype.content_from_uuid=function(t,e){var n=t;if(n.children.length>0){if("P"==n.tagName||"LI"==n.tagName)if(o=n.textContent)(r=e.get(o))&&(n.textContent=r);for(var i=0;i<n.children.length;i++)this.content_to_uuid(n.children[i])}else{var o,r;if(o=n.textContent)(r=e.get(o))&&(n.textContent=r)}return n},e.prototype.show_content=function(t){if(t.children.length>0)for(var e=0;e<t.children.length;e++)this.show_content(t.children[e]);else{var n=t.textContent;n&&console.log(n)}},e}();window.onload=function(){var t,n,i,o=new e;null===(t=document.getElementById("original"))||void 0===t||t.addEventListener("input",o.doWork),null===(n=document.getElementById("translated"))||void 0===n||n.addEventListener("input",o.doWork),null===(i=document.getElementById("char_limit"))||void 0===i||i.addEventListener("change",o.doWork)};
},{"uuid":"D6fo"}]},{},["QCba"], null)
//# sourceMappingURL=src.ab488694.js.map