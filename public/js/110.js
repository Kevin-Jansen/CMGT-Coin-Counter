(self.webpackChunk=self.webpackChunk||[]).push([[110],{364:(e,t,a)=>{"use strict";a.d(t,{Z:()=>r});var i=a(645),s=a.n(i)()((function(e){return e[1]}));s.push([e.id,'.sk-circle[data-v-45288cdb]{position:relative}.sk-circle .sk-child[data-v-45288cdb]{width:100%;height:100%;position:absolute;left:0;top:0}.sk-circle .sk-child[data-v-45288cdb]:before{content:"";display:block;margin:0 auto;width:15%;height:15%;background-color:#333;border-radius:100%;-webkit-animation:sk-circleBounceDelay-data-v-45288cdb 1.2s ease-in-out infinite both;animation:sk-circleBounceDelay-data-v-45288cdb 1.2s ease-in-out infinite both}.sk-circle .sk-circle2[data-v-45288cdb]{transform:rotate(30deg)}.sk-circle .sk-circle3[data-v-45288cdb]{transform:rotate(60deg)}.sk-circle .sk-circle4[data-v-45288cdb]{transform:rotate(90deg)}.sk-circle .sk-circle5[data-v-45288cdb]{transform:rotate(120deg)}.sk-circle .sk-circle6[data-v-45288cdb]{transform:rotate(150deg)}.sk-circle .sk-circle7[data-v-45288cdb]{transform:rotate(180deg)}.sk-circle .sk-circle8[data-v-45288cdb]{transform:rotate(210deg)}.sk-circle .sk-circle9[data-v-45288cdb]{transform:rotate(240deg)}.sk-circle .sk-circle10[data-v-45288cdb]{transform:rotate(270deg)}.sk-circle .sk-circle11[data-v-45288cdb]{transform:rotate(300deg)}.sk-circle .sk-circle12[data-v-45288cdb]{transform:rotate(330deg)}.sk-circle .sk-circle2[data-v-45288cdb]:before{-webkit-animation-delay:-1.1s;animation-delay:-1.1s}.sk-circle .sk-circle3[data-v-45288cdb]:before{-webkit-animation-delay:-1s;animation-delay:-1s}.sk-circle .sk-circle4[data-v-45288cdb]:before{-webkit-animation-delay:-.9s;animation-delay:-.9s}.sk-circle .sk-circle5[data-v-45288cdb]:before{-webkit-animation-delay:-.8s;animation-delay:-.8s}.sk-circle .sk-circle6[data-v-45288cdb]:before{-webkit-animation-delay:-.7s;animation-delay:-.7s}.sk-circle .sk-circle7[data-v-45288cdb]:before{-webkit-animation-delay:-.6s;animation-delay:-.6s}.sk-circle .sk-circle8[data-v-45288cdb]:before{-webkit-animation-delay:-.5s;animation-delay:-.5s}.sk-circle .sk-circle9[data-v-45288cdb]:before{-webkit-animation-delay:-.4s;animation-delay:-.4s}.sk-circle .sk-circle10[data-v-45288cdb]:before{-webkit-animation-delay:-.3s;animation-delay:-.3s}.sk-circle .sk-circle11[data-v-45288cdb]:before{-webkit-animation-delay:-.2s;animation-delay:-.2s}.sk-circle .sk-circle12[data-v-45288cdb]:before{-webkit-animation-delay:-.1s;animation-delay:-.1s}@-webkit-keyframes sk-circleBounceDelay-data-v-45288cdb{0%,80%,to{transform:scale(0)}40%{transform:scale(1)}}@keyframes sk-circleBounceDelay-data-v-45288cdb{0%,80%,to{transform:scale(0)}40%{transform:scale(1)}}',""]);const r=s},645:e=>{"use strict";e.exports=function(e){var t=[];return t.toString=function(){return this.map((function(t){var a=e(t);return t[2]?"@media ".concat(t[2]," {").concat(a,"}"):a})).join("")},t.i=function(e,a,i){"string"==typeof e&&(e=[[null,e,""]]);var s={};if(i)for(var r=0;r<this.length;r++){var n=this[r][0];null!=n&&(s[n]=!0)}for(var c=0;c<e.length;c++){var o=[].concat(e[c]);i&&s[o[0]]||(a&&(o[2]?o[2]="".concat(a," and ").concat(o[2]):o[2]=a),t.push(o))}},t}},379:(e,t,a)=>{"use strict";var i,s=function(){return void 0===i&&(i=Boolean(window&&document&&document.all&&!window.atob)),i},r=function(){var e={};return function(t){if(void 0===e[t]){var a=document.querySelector(t);if(window.HTMLIFrameElement&&a instanceof window.HTMLIFrameElement)try{a=a.contentDocument.head}catch(e){a=null}e[t]=a}return e[t]}}(),n=[];function c(e){for(var t=-1,a=0;a<n.length;a++)if(n[a].identifier===e){t=a;break}return t}function o(e,t){for(var a={},i=[],s=0;s<e.length;s++){var r=e[s],o=t.base?r[0]+t.base:r[0],l=a[o]||0,d="".concat(o," ").concat(l);a[o]=l+1;var u=c(d),v={css:r[1],media:r[2],sourceMap:r[3]};-1!==u?(n[u].references++,n[u].updater(v)):n.push({identifier:d,updater:b(v,t),references:1}),i.push(d)}return i}function l(e){var t=document.createElement("style"),i=e.attributes||{};if(void 0===i.nonce){var s=a.nc;s&&(i.nonce=s)}if(Object.keys(i).forEach((function(e){t.setAttribute(e,i[e])})),"function"==typeof e.insert)e.insert(t);else{var n=r(e.insert||"head");if(!n)throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");n.appendChild(t)}return t}var d,u=(d=[],function(e,t){return d[e]=t,d.filter(Boolean).join("\n")});function v(e,t,a,i){var s=a?"":i.media?"@media ".concat(i.media," {").concat(i.css,"}"):i.css;if(e.styleSheet)e.styleSheet.cssText=u(t,s);else{var r=document.createTextNode(s),n=e.childNodes;n[t]&&e.removeChild(n[t]),n.length?e.insertBefore(r,n[t]):e.appendChild(r)}}function f(e,t,a){var i=a.css,s=a.media,r=a.sourceMap;if(s?e.setAttribute("media",s):e.removeAttribute("media"),r&&"undefined"!=typeof btoa&&(i+="\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(r))))," */")),e.styleSheet)e.styleSheet.cssText=i;else{for(;e.firstChild;)e.removeChild(e.firstChild);e.appendChild(document.createTextNode(i))}}var m=null,k=0;function b(e,t){var a,i,s;if(t.singleton){var r=k++;a=m||(m=l(t)),i=v.bind(null,a,r,!1),s=v.bind(null,a,r,!0)}else a=l(t),i=f.bind(null,a,t),s=function(){!function(e){if(null===e.parentNode)return!1;e.parentNode.removeChild(e)}(a)};return i(e),function(t){if(t){if(t.css===e.css&&t.media===e.media&&t.sourceMap===e.sourceMap)return;i(e=t)}else s()}}e.exports=function(e,t){(t=t||{}).singleton||"boolean"==typeof t.singleton||(t.singleton=s());var a=o(e=e||[],t);return function(e){if(e=e||[],"[object Array]"===Object.prototype.toString.call(e)){for(var i=0;i<a.length;i++){var s=c(a[i]);n[s].references--}for(var r=o(e,t),l=0;l<a.length;l++){var d=c(a[l]);0===n[d].references&&(n[d].updater(),n.splice(d,1))}a=r}}}},110:(e,t,a)=>{"use strict";a.r(t),a.d(t,{default:()=>o});const i={name:"Index",data:function(){return{name:null,isLoading:!1,errors:null}},props:{prevNames:String,error:String},created:function(){null!==this.prevNames&&(this.name=this.prevNames)},methods:{submitForm:function(){this.isLoading=!0;var e=new FormData;e.append("name",this.name),this.$inertia.post("fetch",e)}},updated:function(){this.errors=this.error,null!==this.errors&&(this.isLoading=!1)}};var s=a(379),r=a.n(s),n=a(364),c={insert:"head",singleton:!1};r()(n.Z,c);n.Z.locals;const o=(0,a(900).Z)(i,(function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",{staticClass:"text-center text-white px-8"},[a("inertia-link",{staticClass:"absolute top-0 right-0 p-8 z-50",attrs:{href:"/leaderboard"}},[e._v("Leaderboard")]),e._v(" "),a("h1",{staticClass:"text-5xl"},[e._v("CMGT Coins")]),e._v(" "),a("p",{staticClass:"text-2xl"},[e._v("Hoeveel heb jij er?")]),e._v(" "),a("form",{staticClass:"relative text-gray-600 mt-4",on:{submit:function(t){return t.preventDefault(),e.submitForm(t)}}},[a("label",{staticClass:"opacity-0 absolute",attrs:{for:"search"}},[e._v("Zoeken")]),e._v(" "),a("input",{directives:[{name:"model",rawName:"v-model",value:e.name,expression:"name"}],staticClass:"h-10 px-5 pr-10 rounded-full w-full text-sm focus:outline-none",class:e.isLoading?"bg-gray-300":"bg-white",staticStyle:{"box-shadow":"0 10px 15px -3px rgba(0, 0, 0, 0.1), 0 4px 6px -2px rgba(0, 0, 0, 0.05)"},attrs:{type:"search",name:"search",id:"search",placeholder:"Jouw naam",disabled:e.isLoading},domProps:{value:e.name},on:{change:function(t){e.errors=null},input:function(t){t.target.composing||(e.name=t.target.value)}}}),e._v(" "),a("button",{staticClass:"absolute right-0 top-0 mt-3 mr-4 focus:outline-none",attrs:{type:"submit","aria-label":"submit"}},[e.isLoading?e._e():a("svg",{staticClass:"h-4 w-4 fill-current",staticStyle:{"enable-background":"new 0 0 56.966 56.966"},attrs:{xmlns:"http://www.w3.org/2000/svg","xmlns:xlink":"http://www.w3.org/1999/xlink",version:"1.1",id:"Capa_1",x:"0px",y:"0px",viewBox:"0 0 56.966 56.966","xml:space":"preserve",width:"512px",height:"512px"}},[a("path",{attrs:{d:"M55.146,51.887L41.588,37.786c3.486-4.144,5.396-9.358,5.396-14.786c0-12.682-10.318-23-23-23s-23,10.318-23,23  s10.318,23,23,23c4.761,0,9.298-1.436,13.177-4.162l13.661,14.208c0.571,0.593,1.339,0.92,2.162,0.92  c0.779,0,1.518-0.297,2.079-0.837C56.255,54.982,56.293,53.08,55.146,51.887z M23.984,6c9.374,0,17,7.626,17,17s-7.626,17-17,17  s-17-7.626-17-17S14.61,6,23.984,6z"}})]),e._v(" "),e.isLoading?a("div",{staticClass:"sk-circle h-4 w-4"},[a("div",{staticClass:"sk-circle1 sk-child"}),e._v(" "),a("div",{staticClass:"sk-circle2 sk-child"}),e._v(" "),a("div",{staticClass:"sk-circle3 sk-child"}),e._v(" "),a("div",{staticClass:"sk-circle4 sk-child"}),e._v(" "),a("div",{staticClass:"sk-circle5 sk-child"}),e._v(" "),a("div",{staticClass:"sk-circle6 sk-child"}),e._v(" "),a("div",{staticClass:"sk-circle7 sk-child"}),e._v(" "),a("div",{staticClass:"sk-circle8 sk-child"}),e._v(" "),a("div",{staticClass:"sk-circle9 sk-child"}),e._v(" "),a("div",{staticClass:"sk-circle10 sk-child"}),e._v(" "),a("div",{staticClass:"sk-circle11 sk-child"}),e._v(" "),a("div",{staticClass:"sk-circle12 sk-child"})]):e._e()])]),e._v(" "),e._m(0),e._v(" "),e.errors?a("p",{staticClass:"text-red-500 mt-4"},[e._v(e._s(e.errors))]):e._e()],1)}),[function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("p",{staticClass:"text-sm mt-4"},[e._v("Voer de door jou gebruikte naam in, deze is hoofdlettergevoelig. "),a("br"),e._v("\n        Je kan ook meerdere namen opgeven door naam||naam in te voeren.\n    ")])}],!1,null,"45288cdb",null).exports}}]);