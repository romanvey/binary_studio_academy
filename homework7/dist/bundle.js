!function(t){function e(r){if(n[r])return n[r].exports;var o=n[r]={i:r,l:!1,exports:{}};return t[r].call(o.exports,o,o.exports,e),o.l=!0,o.exports}var n={};e.m=t,e.c=n,e.d=function(t,n,r){e.o(t,n)||Object.defineProperty(t,n,{configurable:!1,enumerable:!0,get:r})},e.n=function(t){var n=t&&t.__esModule?function(){return t.default}:function(){return t};return e.d(n,"a",n),n},e.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},e.p="./dist/",e(e.s=0)}([function(t,e,n){"use strict";function r(t){return!isNaN(parseFloat(t))}Object.defineProperty(e,"__esModule",{value:!0});var o=n(1);n(2);var i,s,a=n(7),l=n(8),c=new o.PlayerUI(document.getElementById("f1-name"),document.getElementById("f1-health"),document.getElementById("f1-damage"),document.getElementById("f1-HP")),u=new o.PlayerUI(document.getElementById("f2-name"),document.getElementById("f2-health"),document.getElementById("f2-damage"),document.getElementById("f2-HP")),f=new o.Controller(document.getElementById("info"),document.getElementById("fight-reset"),document.getElementById("fight-start"),document.getElementById("arr")),p=new l.Fight(c,u,f);window.onload=function(){f.reset.addEventListener("click",function(){p.resetFight()}),f.fight.addEventListener("click",function(){console.log("HOOH"),i=new a.Fighter(c.name.value,Number(c.damage.value),Number(c.health.value)),s=new a.ImprovedFighter(u.name.value,Number(u.damage.value),Number(u.health.value));var t=[];f.points.value.split(",").forEach(function(e){if(console.log(e,r(e)),r(e)){var n=Number(e);t.push(n)}}),console.log(i),console.log(s),console.log(t),p.fight(i,s,t)})}},function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var r=function(){function t(t,e,n,r){this.name=t,this.health=e,this.damage=n,this.hp=r}return t}();e.PlayerUI=r;var o=function(){function t(t,e,n,r){this.info=t,this.reset=e,this.fight=n,this.points=r}return t}();e.Controller=o},function(t,e,n){var r=n(3);"string"==typeof r&&(r=[[t.i,r,""]]);var o={};o.transform=void 0;n(5)(r,o);r.locals&&(t.exports=r.locals)},function(t,e,n){e=t.exports=n(4)(void 0),e.push([t.i,"body{font-family:Poppins,sans-serif;background-color:#fafafa}#logo-cont{display:-webkit-box;display:-ms-flexbox;display:flex;-webkit-box-pack:center;-ms-flex-pack:center;justify-content:center}#logo{font-size:56px}.cont p{font-weight:700}.fighter{padding:10px;-webkit-box-orient:vertical;-webkit-box-direction:normal;-ms-flex-direction:column;flex-direction:column;width:500px;margin:-20px 100px 0;border:1px solid #000;border-radius:10px}.cont,.fighter{display:-webkit-box;display:-ms-flexbox;display:flex}.cont{-webkit-box-pack:justify;-ms-flex-pack:justify;justify-content:space-between}.fighter-img{width:250px;height:250px;border:4px solid #000;border-radius:10px;margin-bottom:60px;-webkit-box-align:center;-ms-flex-align:center;align-items:center}#f1-HP,#f2-HP{margin-top:15px;font-size:30px;font-weight:700;-ms-flex-item-align:center;align-self:center}#info,.button{text-align:center}.button{background-color:#fff;color:#000;border:2px solid #555;padding:15px 32px;text-decoration:none;display:inline-block;font-size:16px;margin:4px 2px;cursor:pointer}#arr{width:500px;padding:12px 20px;margin:4px 20px 0 8px;border:1px solid #ccc;border-radius:4px}.info-cont{margin-top:20px;display:-webkit-box;display:-ms-flexbox;display:flex;-webkit-box-pack:center;-ms-flex-pack:center;justify-content:center}input{text-align:center}",""])},function(t,e){function n(t,e){var n=t[1]||"",o=t[3];if(!o)return n;if(e&&"function"==typeof btoa){var i=r(o);return[n].concat(o.sources.map(function(t){return"/*# sourceURL="+o.sourceRoot+t+" */"})).concat([i]).join("\n")}return[n].join("\n")}function r(t){return"/*# sourceMappingURL=data:application/json;charset=utf-8;base64,"+btoa(unescape(encodeURIComponent(JSON.stringify(t))))+" */"}t.exports=function(t){var e=[];return e.toString=function(){return this.map(function(e){var r=n(e,t);return e[2]?"@media "+e[2]+"{"+r+"}":r}).join("")},e.i=function(t,n){"string"==typeof t&&(t=[[null,t,""]]);for(var r={},o=0;o<this.length;o++){var i=this[o][0];"number"==typeof i&&(r[i]=!0)}for(o=0;o<t.length;o++){var s=t[o];"number"==typeof s[0]&&r[s[0]]||(n&&!s[2]?s[2]=n:n&&(s[2]="("+s[2]+") and ("+n+")"),e.push(s))}},e}},function(t,e,n){function r(t,e){for(var n=0;n<t.length;n++){var r=t[n],o=h[r.id];if(o){o.refs++;for(var i=0;i<o.parts.length;i++)o.parts[i](r.parts[i]);for(;i<r.parts.length;i++)o.parts.push(u(r.parts[i],e))}else{for(var s=[],i=0;i<r.parts.length;i++)s.push(u(r.parts[i],e));h[r.id]={id:r.id,refs:1,parts:s}}}}function o(t,e){for(var n=[],r={},o=0;o<t.length;o++){var i=t[o],s=e.base?i[0]+e.base:i[0],a=i[1],l=i[2],c=i[3],u={css:a,media:l,sourceMap:c};r[s]?r[s].parts.push(u):n.push(r[s]={id:s,parts:[u]})}return n}function i(t,e){var n=v(t.insertInto);if(!n)throw new Error("Couldn't find a style target. This probably means that the value for the 'insertInto' parameter is invalid.");var r=b[b.length-1];if("top"===t.insertAt)r?r.nextSibling?n.insertBefore(e,r.nextSibling):n.appendChild(e):n.insertBefore(e,n.firstChild),b.push(e);else{if("bottom"!==t.insertAt)throw new Error("Invalid value for parameter 'insertAt'. Must be 'top' or 'bottom'.");n.appendChild(e)}}function s(t){if(null===t.parentNode)return!1;t.parentNode.removeChild(t);var e=b.indexOf(t);e>=0&&b.splice(e,1)}function a(t){var e=document.createElement("style");return t.attrs.type="text/css",c(e,t.attrs),i(t,e),e}function l(t){var e=document.createElement("link");return t.attrs.type="text/css",t.attrs.rel="stylesheet",c(e,t.attrs),i(t,e),e}function c(t,e){Object.keys(e).forEach(function(n){t.setAttribute(n,e[n])})}function u(t,e){var n,r,o,i;if(e.transform&&t.css){if(!(i=e.transform(t.css)))return function(){};t.css=i}if(e.singleton){var c=y++;n=g||(g=a(e)),r=f.bind(null,n,c,!1),o=f.bind(null,n,c,!0)}else t.sourceMap&&"function"==typeof URL&&"function"==typeof URL.createObjectURL&&"function"==typeof URL.revokeObjectURL&&"function"==typeof Blob&&"function"==typeof btoa?(n=l(e),r=d.bind(null,n,e),o=function(){s(n),n.href&&URL.revokeObjectURL(n.href)}):(n=a(e),r=p.bind(null,n),o=function(){s(n)});return r(t),function(e){if(e){if(e.css===t.css&&e.media===t.media&&e.sourceMap===t.sourceMap)return;r(t=e)}else o()}}function f(t,e,n,r){var o=n?"":r.css;if(t.styleSheet)t.styleSheet.cssText=w(e,o);else{var i=document.createTextNode(o),s=t.childNodes;s[e]&&t.removeChild(s[e]),s.length?t.insertBefore(i,s[e]):t.appendChild(i)}}function p(t,e){var n=e.css,r=e.media;if(r&&t.setAttribute("media",r),t.styleSheet)t.styleSheet.cssText=n;else{for(;t.firstChild;)t.removeChild(t.firstChild);t.appendChild(document.createTextNode(n))}}function d(t,e,n){var r=n.css,o=n.sourceMap,i=void 0===e.convertToAbsoluteUrls&&o;(e.convertToAbsoluteUrls||i)&&(r=x(r)),o&&(r+="\n/*# sourceMappingURL=data:application/json;base64,"+btoa(unescape(encodeURIComponent(JSON.stringify(o))))+" */");var s=new Blob([r],{type:"text/css"}),a=t.href;t.href=URL.createObjectURL(s),a&&URL.revokeObjectURL(a)}var h={},m=function(t){var e;return function(){return void 0===e&&(e=t.apply(this,arguments)),e}}(function(){return window&&document&&document.all&&!window.atob}),v=function(t){var e={};return function(n){return void 0===e[n]&&(e[n]=t.call(this,n)),e[n]}}(function(t){return document.querySelector(t)}),g=null,y=0,b=[],x=n(6);t.exports=function(t,e){if("undefined"!=typeof DEBUG&&DEBUG&&"object"!=typeof document)throw new Error("The style-loader cannot be used in a non-browser environment");e=e||{},e.attrs="object"==typeof e.attrs?e.attrs:{},e.singleton||(e.singleton=m()),e.insertInto||(e.insertInto="head"),e.insertAt||(e.insertAt="bottom");var n=o(t,e);return r(n,e),function(t){for(var i=[],s=0;s<n.length;s++){var a=n[s],l=h[a.id];l.refs--,i.push(l)}if(t){r(o(t,e),e)}for(var s=0;s<i.length;s++){var l=i[s];if(0===l.refs){for(var c=0;c<l.parts.length;c++)l.parts[c]();delete h[l.id]}}}};var w=function(){var t=[];return function(e,n){return t[e]=n,t.filter(Boolean).join("\n")}}()},function(t,e){t.exports=function(t){var e="undefined"!=typeof window&&window.location;if(!e)throw new Error("fixUrls requires window.location");if(!t||"string"!=typeof t)return t;var n=e.protocol+"//"+e.host,r=n+e.pathname.replace(/\/[^\/]*$/,"/");return t.replace(/url\s*\(((?:[^)(]|\((?:[^)(]+|\([^)(]*\))*\))*)\)/gi,function(t,e){var o=e.trim().replace(/^"(.*)"$/,function(t,e){return e}).replace(/^'(.*)'$/,function(t,e){return e});if(/^(#|data:|http:\/\/|https:\/\/|file:\/\/\/)/i.test(o))return t;var i;return i=0===o.indexOf("//")?o:0===o.indexOf("/")?n+o:r+o.replace(/^\.\//,""),"url("+JSON.stringify(i)+")"})}},function(t,e,n){"use strict";var r=this&&this.__extends||function(){var t=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(t,e){t.__proto__=e}||function(t,e){for(var n in e)e.hasOwnProperty(n)&&(t[n]=e[n])};return function(e,n){function r(){this.constructor=e}t(e,n),e.prototype=null===n?Object.create(n):(r.prototype=n.prototype,new r)}}();Object.defineProperty(e,"__esModule",{value:!0});var o=function(){function t(t,e,n){var r=this;this.isAlive=function(){return r.health>0},this.name=t,this.power=e,this.health=n}return t.prototype.setDamage=function(t){this.health-=t,this.isAlive&&console.log("health: "+this.health+" ("+this.name+" HP)")},t.prototype.hit=function(t,e){t.setDamage(this.power*e)},t}();e.Fighter=o;var i=function(t){function e(e,n,r){return t.call(this,e,n,r)||this}return r(e,t),e.prototype.doubleHit=function(e,n){t.prototype.hit.call(this,e,2*n)},e}(o);e.ImprovedFighter=i},function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var r=function(){function t(t,e,n){this.playerOneUI=t,this.playerTwoUI=e,this.controller=n}return t.prototype._hitting=function(t,e,n,r){var o=this;return t==e.length?void(this.controller.info.textContent="DRAW!"):(t%2==0?(this.playerTwoUI.hp.innerHTML=r.health+' <span style="color: red">- '+n.power*e[t]+"</span> = "+(r.health-n.power*e[t])+" HP",n.hit(r,e[t]),this.controller.info.innerHTML='<span style="color: red">'+n.name+'</span> hit <span style="color: red">'+r.name+"</span>"):(this.playerOneUI.hp.innerHTML=n.health+' <span style="color: red">- '+r.power*e[t]+"</span> = "+(n.health-r.power*e[t])+" HP",r.hit(n,e[t]),this.controller.info.innerHTML='<span style="color: red">'+r.name+'</span> hit <span style="color: red">'+n.name+"</span>"),n.isAlive()?r.isAlive()?void(this._timerId=setTimeout(function(){o._hitting(t+1,e,n,r)},3e3)):(this.controller.info.innerHTML='<span style="color: red">'+n.name+"</span> wins!!!",void clearTimeout(this._timerId)):(this.controller.info.innerHTML='<span style="color: red">'+r.name+"</span> wins!!!",void clearTimeout(this._timerId)))},t.prototype.fight=function(t,e,n){var r=this;this.resetFight(),this.controller.info.innerHTML='<span style="color: red">Fight started!</span>';this._timerId=setTimeout(function(){r._hitting(0,n,t,e)},3e3)},t.prototype.resetFight=function(){this.playerOneUI.hp.textContent=this.playerOneUI.health.value+" HP",this.playerTwoUI.hp.textContent=this.playerTwoUI.health.value+" HP",this.controller.info.textContent="For start press 'Fight!'",clearTimeout(this._timerId)},t}();e.Fight=r}]);
//# sourceMappingURL=bundle.js.map