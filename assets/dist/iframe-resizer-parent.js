(()=>{var e={113:function(e){e.exports=function(){"use strict";const e="[iframe-resizer]",t=t=>`${e}[${function(e){return window.top===window.self?`Parent page: ${e}`:window?.parentIFrame?.getId?`${window.parentIFrame.getId()}: ${e}`:`Nested parent page: ${e}`}(t)}]`,i=(e,...i)=>((e,i,...n)=>window?.console[e](t(i),...n))("warn",e,...i),n=(t,i)=>console?.warn((e=>t=>window.chrome?e(t.replaceAll("<br>","\n").replaceAll("<rb>","[31;1m").replaceAll("</>","[m").replaceAll("<b>","[1m").replaceAll("<i>","[3m").replaceAll("<u>","[4m")):e(t.replaceAll("<br>","\n").replaceAll(/<[/a-z]+>/gi,"")))((t=>(...i)=>[`${e}[${t}]`,...i].join(" "))(t))(i)),o="5.3.3",r="[iFrameSizer]",a=Object.freeze({max:1,scroll:1,bodyScroll:1,documentElementScroll:1}),s=(e,t,i,n)=>e.addEventListener(t,i,n||!1),l=(e,t,i)=>e.removeEventListener(t,i,!1),c=e=>{if(!e)return"";let t=-559038744,i=1103547984;for(let n,o=0;o<e.length;o++)n=e.codePointAt(o),t=Math.imul(t^n,2246822519),i=Math.imul(i^n,3266489917);return t^=Math.imul(t^i>>>15,1935289751),i^=Math.imul(i^t>>>15,3405138345),t^=i>>>16,i^=t>>>16,(2097152*(i>>>0)+(t>>>11)).toString(36)},d=e=>e.replaceAll(/[A-Za-z]/g,(e=>String.fromCodePoint((e<="Z"?90:122)>=(e=e.codePointAt(0)+19)?e:e-26))),u=["<iy><yi>Puchspk Spjluzl Rlf</><iy><iy>","<iy><yi>Tpzzpun Spjluzl Rlf</><iy><iy>","Aopz spiyhyf pz hchpshisl dpao ivao Jvttlyjphs huk Vwlu-Zvbyjl spjluzlz.<iy><iy><i>Jvttlyjphs Spjluzl</><iy>Mvy jvttlyjphs bzl, <p>pmyhtl-ylzpgly</> ylxbpylz h svd jvza vul aptl spjluzl mll. Mvy tvyl pumvythapvu cpzpa <b>oaawz://pmyhtl-ylzpgly.jvt/wypjpun</>.<iy><iy><i>Vwlu Zvbyjl Spjluzl</><iy>Pm fvb hyl bzpun aopz spiyhyf pu h uvu-jvttlyjphs vwlu zvbyjl wyvqlja aolu fvb jhu bzl pa mvy myll bukly aol alytz vm aol NWS C3 Spjluzl. Av jvumpyt fvb hjjlwa aolzl alytz, wslhzl zla aol <i>spjluzl</> rlf pu <p>pmyhtl-ylzpgly</> vwapvuz av <i>NWSc3</>.<iy><iy>Mvy tvyl pumvythapvu wslhzl zll: <b>oaawz://pmyhtl-ylzpgly.jvt/nws</>","<i>NWSc3 Spjluzl Clyzpvu</><iy><iy>Aopz clyzpvu vm <p>pmyhtl-ylzpgly</> pz ilpun bzlk bukly aol alytz vm aol <i>NWS C3</> spjluzl. Aopz spjluzl hssvdz fvb av bzl <p>pmyhtl-ylzpgly</> pu Vwlu Zvbyjl wyvqljaz, iba pa ylxbpylz fvby wyvqlja av il wbispj, wyvcpkl haaypibapvu huk il spjluzlk bukly clyzpvu 3 vy shaly vm aol NUB Nlulyhs Wbispj Spjluzl.<iy><iy>Pm fvb hyl bzpun aopz spiyhyf pu h uvu-vwlu zvbyjl wyvqlja vy dlizpal, fvb dpss ullk av wbyjohzl h svd jvza vul aptl jvttlyjphs spjluzl.<iy><iy>Mvy tvyl pumvythapvu cpzpa <b>oaawz://pmyhtl-ylzpgly.jvt/wypjpun</>."],f=["NWSc3","zvsv","wyv","ibzpulzz","vlt"],p=Object.fromEntries(["2cgs7fdf4xb","1c9ctcccr4z","1q2pc4eebgb","ueokt0969w","w2zxchhgqz","1umuxblj2e5"].map(((e,t)=>[e,Math.max(0,t-1)]))),h=e=>d(u[e]),m=e=>{const t=e[d("spjluzl")];if(!t)return-1;const i=t.split("-");let n=function(e=""){let t=-2;const i=c(d(e));return i in p&&(t=p[i]),t}(i[0]);return 0===n||(e=>e[2]===c(e[0]+e[1]))(i)||(n=-2),n},y={},g=Object.freeze({autoResize:!0,bodyBackground:null,bodyMargin:null,bodyPadding:null,checkOrigin:!0,direction:"vertical",inPageLinks:!1,heightCalculationMethod:"auto",id:"iFrameResizer",log:!1,license:void 0,mouseEvents:!0,offsetHeight:null,offsetWidth:null,postMessageTarget:null,sameDomain:!1,scrolling:!1,sizeHeight:!0,sizeWidth:!1,warningTimeout:5e3,tolerance:0,waitForLoad:!1,widthCalculationMethod:"auto",onClose:()=>!0,onClosed(){},onInit:!1,onMessage:null,onMouseEnter(){},onMouseLeave(){},onReady:e=>{"function"==typeof y[e.id].onInit&&(n(e.id,"\n[31;1mDeprecated Option[m\n\nThe [1monInit()[m function is deprecated and has been replaced with [1monReady()[m. It will be removed in a future version of iFrame Resizer.\n      "),y[e.id].onInit(e))},onResized(){},onScroll:()=>!0}),w={position:null,version:o};function b(e){function t(){R(C),k(),L("onResized",C)}function a(e){return"border-box"!==e.boxSizing?0:(e.paddingTop?parseInt(e.paddingTop,10):0)+(e.paddingBottom?parseInt(e.paddingBottom,10):0)}function c(e){return"border-box"!==e.boxSizing?0:(e.borderTopWidth?parseInt(e.borderTopWidth,10):0)+(e.borderBottomWidth?parseInt(e.borderBottomWidth,10):0)}const d=e=>A.slice(A.indexOf(":")+7+e),u=(e,t)=>(i,n)=>{const o={};var r,a;r=function(){M(`Send ${e} (${i})`,`${e}:${t()}`,n)},o[a=n]||(r(),o[a]=requestAnimationFrame((()=>{o[a]=null})))},f=(e,t)=>()=>{let i=!1;const n=t=>()=>{y[d]?i&&i!==t||(e(t,d),i=t,requestAnimationFrame((()=>{i=!1}))):c()},o=n("scroll"),r=n("resize window");function a(e,t){t(window,"scroll",o),t(window,"resize",r)}function c(){a(0,l),u.disconnect(),f.disconnect()}const d=P,u=new ResizeObserver(n("page observed")),f=new ResizeObserver(n("iframe observed"));a(0,s),u.observe(document.body,{attributes:!0,childList:!0,subtree:!0}),f.observe(y[d].iframe,{attributes:!0,childList:!1,subtree:!1}),y[d]&&(y[d][`stop${t}`]=c)},p=e=>()=>{e in y[P]&&(y[P][e](),delete y[P][e])},h=u("pageInfo",(function(){const e=document.body.getBoundingClientRect(),t=C.iframe.getBoundingClientRect(),{scrollY:i,scrollX:n,innerHeight:o,innerWidth:r}=window,{clientHeight:a,clientWidth:s}=document.documentElement;return JSON.stringify({iframeHeight:t.height,iframeWidth:t.width,clientHeight:Math.max(a,o||0),clientWidth:Math.max(s,r||0),offsetTop:parseInt(t.top-e.top,10),offsetLeft:parseInt(t.left-e.left,10),scrollTop:i,scrollLeft:n,documentHeight:a,documentWidth:s,windowHeight:o,windowWidth:r})})),m=u("parentInfo",(function(){const{iframe:e}=C,{scrollWidth:t,scrollHeight:i}=document.documentElement,{width:n,height:o,offsetLeft:r,offsetTop:a,pageLeft:s,pageTop:l,scale:c}=window.visualViewport;return JSON.stringify({iframe:e.getBoundingClientRect(),document:{scrollWidth:t,scrollHeight:i},viewport:{width:n,height:o,offsetLeft:r,offsetTop:a,pageLeft:s,pageTop:l,scale:c}})})),g=f(h,"PageInfo"),b=f(m,"ParentInfo"),z=p("stopPageInfo"),S=p("stopParentInfo");function F(e){const t=e.getBoundingClientRect();return T(),{x:Number(t.left)+Number(w.position.x),y:Number(t.top)+Number(w.position.y)}}function W(e){const t=e?F(C.iframe):{x:0,y:0},i=((e,t)=>({x:e.width+t.x,y:e.height+t.y}))(C,t),n=window.parentIframe||window.parentIFrame;n?function(t,i){t["scrollTo"+(e?"Offset":"")](i.x,i.y)}(n,i):function(e){w.position=e,N(P)}(i)}function N(e){const{x:t,y:i}=w.position,n=y[e]?.iframe;!1!==L("onScroll",{iframe:n,top:i,left:t,x:t,y:i})?k():$()}function O(e){let t={};if(0===C.width&&0===C.height){const e=d(9).split(":");t={x:e[1],y:e[0]}}else t={x:C.width,y:C.height};L(e,{iframe:C.iframe,screenX:Number(t.x),screenY:Number(t.y),type:C.type})}const L=(e,t)=>v(P,e,t);let A=e.data,C={},P=null;"[iFrameResizerChild]Ready"!==A?r===`${A}`.slice(0,13)&&A.slice(13).split(":")[0]in y&&(C=function(){const e=A.slice(13).split(":"),t=e[1]?Number(e[1]):0,i=y[e[0]]?.iframe,n=getComputedStyle(i);return{iframe:i,id:e[0],height:t+a(n)+c(n),width:Number(e[2]),type:e[3],msg:e[4]}}(),P=C.id,P?(function(e){if(!y[e])throw new Error(`${C.type} No settings for ${e}. Message was: ${A}`)}(P),C.type in{true:1,false:1,undefined:1}||(y[P].loaded=!0,(null!==C.iframe||(i(P,`The iframe (${C.id}) was not found.`),0))&&function(){const{origin:t,sameDomain:i}=e;if(i)return!0;let n=y[P]?.checkOrigin;if(n&&"null"!=`${t}`&&!(n.constructor===Array?function(){let e=0,i=!1;for(;e<n.length;e++)if(n[e]===t){i=!0;break}return i}():function(){const e=y[P]?.remoteHost;return t===e}()))throw new Error(`Unexpected message received from: ${t} for ${C.iframe.id}. Message was: ${e.data}. This error can be disabled by setting the checkOrigin: false option or by providing of array of trusted domains.`);return!0}()&&function(){switch(y[P]?.firstRun&&y[P]&&(y[P].firstRun=!1),C.type){case"close":j(C.iframe);break;case"message":r=d(6),L("onMessage",{iframe:C.iframe,message:JSON.parse(r)});break;case"mouseenter":O("onMouseEnter");break;case"mouseleave":O("onMouseLeave");break;case"autoResize":y[P].autoResize=JSON.parse(d(9));break;case"scrollBy":!function(){const e=C.width,t=C.height;(window.parentIframe||window).scrollBy(e,t)}();break;case"scrollTo":W(!1);break;case"scrollToOffset":W(!0);break;case"pageInfo":h("start",P),g();break;case"parentInfo":m("start",P),b();break;case"pageInfoStop":z();break;case"parentInfoStop":S();break;case"inPageLink":!function(e){const t=e.split("#")[1]||"",i=decodeURIComponent(t);let n=document.getElementById(i)||document.getElementsByName(i)[0];n?function(){const e=F(n);w.position={x:e.x,y:e.y},N(P),window.location.hash=t}():window.top!==window.self&&window.parentIFrame&&window.parentIFrame.moveToAnchor(t)}(d(9));break;case"title":!function(e,t){y[t]?.syncTitle&&(y[t].iframe.title=e)}(C.msg,P);break;case"reset":x(C);break;case"init":t(),function(e){try{y[e].sameDomain=!!y[e]?.iframe?.contentWindow?.iframeChildListener}catch(t){y[e].sameDomain=!1}}(P),(e=C.msg)!==o&&(void 0!==e||n(P,"<rb>Legacy version detected in iframe</>\n\nDetected legacy version of child page script. It is recommended to update the page in the iframe to use <b>@iframe-resizer/child</>.\n\nSee <u>https://iframe-resizer.com/setup/#child-page-setup</> for more details.\n")),E=!0,L("onReady",C.iframe);break;default:if(0===C.width&&0===C.height)return void i(P,`Unsupported message received (${C.type}), this is likely due to the iframe containing a later version of iframe-resizer than the parent page`);if(0===C.width||0===C.height)return;if(document.hidden)return;t()}var e,r}())):i("","iframeResizer received messageData without id, message was: ",A)):Object.keys(y).forEach((e=>{y[e].mode>=0&&M("iFrame requested init",I(e),e)}))}function v(e,t,i){let n=null,o=null;if(y[e]){if(n=y[e][t],"function"!=typeof n)throw new TypeError(`${t} on iFrame[${e}] is not a function`);"onClose"===t||"onScroll"===t?o=n(i):setTimeout((()=>n(i)))}return o}function z(e){const{id:t}=e;delete y[t]}function j(e){const{id:t}=e;if(!1!==v(t,"onClose",t)){try{e.parentNode&&e.remove()}catch(e){i(t,e)}v(t,"onClosed",t),z(e)}}function T(e){null===w.position&&(w.position={x:window.scrollX,y:window.scrollY})}function $(){w.position=null}function k(e){null!==w.position&&(window.scrollTo(w.position.x,w.position.y),$())}function x(e){T(e.id),R(e),M("reset","reset",e.id)}function R(e){function t(t){const i=`${e[t]}px`;e.iframe.style[t]=i}const{id:i}=e,{sizeHeight:n,sizeWidth:o}=y[i];n&&t("height"),o&&t("width")}function M(e,t,o,a){y[o]&&(y[o]?.postMessageTarget?function(){const{iframe:e,postMessageTarget:i,sameDomain:n,targetOrigin:a}=y[o];if(n)try{return void e.contentWindow.iframeChildListener(r+t)}catch(e){}i.postMessage(r+t,a)}():i(o,`[${e}] IFrame(${o}) not found`),a&&y[o]?.warningTimeout&&(y[o].msgTimeout=setTimeout((function(){if(void 0===y[o])return;const{iframe:e,loaded:t,loadErrorShown:i,waitForLoad:r}=y[o],{sandbox:a}=e;t||i||(y[o].loadErrorShown=!0,n(o,`\n<rb>No response from iFrame</>\n            \nThe iframe (<i>${o}</>) has not responded within ${y[o].warningTimeout/1e3} seconds. Check <b>@iframe-resizer/child</> package has been loaded in the iframe.\n${r?"\nThe <b>waitForLoad</> option is currently set to <i>'true'</>. If the iframe loads before the JavaScript runs, this option will prevent <i>iframe-resizer</> from initialising. To disable this, set the <b>waitForLoad</> option to <i>'false'</>.  \n":""}\n${!(a?.length>0)||a.contains("allow-scripts")&&a.contains("allow-same-origin")?"":"The iframe has the <b>sandbox</> attribute, please ensure it contains both the <i>'allow-same-origin'</> and <i>'allow-scripts'</> values."}\n\nThis message can be ignored if everything is working, or you can set the <b>warningTimeout</> option to a higher value or zero to suppress this warning.\n`))}),y[o].warningTimeout)))}function I(e){const t=y[e];return[e,"8",t.sizeWidth,t.log,"32",!0,t.autoResize,t.bodyMargin,t.heightCalculationMethod,t.bodyBackground,t.bodyPadding,t.tolerance,t.inPageLinks,"child",t.widthCalculationMethod,t.mouseEvents,t.offsetHeight,t.offsetWidth,t.sizeHeight,t.license,w.version,t.mode].join(":")}let S=0,E=!1,F=!1;const W=e=>t=>{function r(e){if(!e)return{};if("object"!=typeof e)throw new TypeError("Options is not an object");return("sizeWidth"in e||"sizeHeight"in e||"autoResize"in e)&&n(c,'<rb>Deprecated Option</>\n\nThe <b>sizeWidth</>, <b>sizeHeight</> and <b>autoResize</> options have been replaced with new <b>direction</> option which expects values of <i>"vertical"</>, <i>"horizontal"</> or <i>"horizontal"</>.\n'),e}function l(e){const t=y[e]?.iframe?.title;return""===t||void 0===t}const c=function(i){if(i&&"string"!=typeof i)throw new TypeError("Invalid id for iFrame. Expected String");return""!==i&&i||(i=function(){let t=e?.id||g.id+S++;return null!==document.getElementById(t)&&(t+=S++),t}(),t.id=i,(e||{}).log),i}(t.id);return c in y&&"iFrameResizer"in t?i(c,"Ignored iFrame, already setup."):(function(e){var i,o;y[c]={iframe:t,firstRun:!0,remoteHost:t?.src.split("/").slice(0,3).join("/"),...g,...r(e),mode:m(e),syncTitle:l(c)},function(){const{direction:e}=y[c];if("horizontal"===e)return y[c].sizeWidth=!0,void(y[c].sizeHeight=!1);if("none"===e)return y[c].sizeWidth=!1,y[c].sizeHeight=!1,void(y[c].autoResize=!1);if("vertical"!==e)throw new TypeError(c,`Direction value of "${e}" is not valid`)}(),(i=e?.offsetSize||e?.offset)&&("vertical"===y[c].direction?y[c].offsetHeight=i:y[c].offsetWidth=i),e?.offset&&n(c,"<rb>Deprecated option</>\n\n The <b>offset</> option has been renamed to <b>offsetSize</>. Use of the old name will be removed in a future version of <i>iframe-resizer</>."),null===y[c].postMessageTarget&&(y[c].postMessageTarget=t.contentWindow),y[c].targetOrigin=!0===y[c].checkOrigin?""===(o=y[c].remoteHost)||null!==o.match(/^(about:blank|javascript:|file:\/\/)/)?"*":o:"*"}(e),function(){const{mode:e}=y[c];var t;e<0&&n("Parent",`${h(e+2)}${h(2)}`),F||e<0||(F=!0,t=`v${o} (${(e=>d(f[e]))(e)})`,console.info(`%c[iframe-resizer] ${t}`,"font-weight: bold;"),e<1&&n("Parent",h(3)))}(),O(),function(){switch(t.style.overflow=!1===y[c]?.scrolling?"hidden":"auto",y[c]?.scrolling){case"omit":break;case!0:t.scrolling="yes";break;case!1:t.scrolling="no";break;default:t.scrolling=y[c]?y[c].scrolling:"no"}}(),function(){const{bodyMargin:e}=y[c];"number"!=typeof e&&"0"!==e||(y[c].bodyMargin=`${e}px`)}(),function(e){const{id:i}=t,{mode:n,waitForLoad:o}=y[i];-1!==n&&-2!==n&&(s(t,"load",(function(){M("iFrame.onload",`${e}:${E}`,i,!0),function(){const e=y[c]?.firstRun,i=y[c]?.heightCalculationMethod in a;!e&&i&&x({iframe:t,height:0,width:0,type:"init"})}()})),!1===o&&M("init",`${e}:${E}`,i,!0))}(I(c)),function(){if(y[c]){const{iframe:e}=y[c],t={close:j.bind(null,e),disconnect:z.bind(null,e),removeListeners(){n(c,"\n<rb>Deprecated Method Name</>\n\nThe [removeListeners()</> method has been renamed to [disconnect()</>.\n"),this.disconnect()},resize:M.bind(null,"Window resize","resize",c),moveToAnchor(e){M("Move to anchor",`moveToAnchor:${e}`,c)},sendMessage(e){M("Send Message",`message:${e=JSON.stringify(e)}`,c)}};e.iframeResizer=t,e.iFrameResizer=t}}()),t?.iFrameResizer};function N(){!1===document.hidden&&Object.keys(y).forEach((function(e){(e=>y[e]?.autoResize&&!y[e]?.firstRun)(e)&&M("Tab Visible","resize",e)}))}const O=(e=>{let t=!1;return function(){return t?void 0:(t=!0,Reflect.apply(e,this,arguments))}})((()=>{s(window,"message",b),s(document,"visibilitychange",N),window.iframeParentListener=e=>setTimeout((()=>b({data:e,sameDomain:!0})))})),L="[iframeResizer] ",A=function(){function e(e){switch(!0){case!e:throw new TypeError(`${L}iframe is not defined`);case!e.tagName:throw new TypeError(`${L}Not a valid DOM element`);case"IFRAME"!==e.tagName.toUpperCase():throw new TypeError(`${L}Expected <IFRAME> tag, found <${e.tagName}>`);default:t(e),i.push(e)}}let t,i;return function(n,o){if("undefined"==typeof window)return[];switch(t=W(n),i=[],typeof o){case"undefined":case"string":document.querySelectorAll(o||"iframe").forEach(e);break;case"object":e(o);break;default:throw new TypeError(`${L}Unexpected data type (${typeof o})`)}return Object.freeze(i)}}();return"undefined"!=typeof window&&(window.iFrameResize=window.iFrameResize||function(...e){n("","Deprecated: iFrameResize(), please use iframeResize()"),A(...e)}),A}()}},t={};function i(n){var o=t[n];if(void 0!==o)return o.exports;var r=t[n]={exports:{}};return e[n].call(r.exports,r,r.exports,i),r.exports}i.n=e=>{var t=e&&e.__esModule?()=>e.default:()=>e;return i.d(t,{a:t}),t},i.d=(e,t)=>{for(var n in t)i.o(t,n)&&!i.o(e,n)&&Object.defineProperty(e,n,{enumerable:!0,get:t[n]})},i.o=(e,t)=>Object.prototype.hasOwnProperty.call(e,t),(()=>{"use strict";var e=i(113);i.n(e)()({license:"GPLv3",waitForLoad:!0},".iframe-resizer")})()})();
//# sourceMappingURL=iframe-resizer-parent.js.map