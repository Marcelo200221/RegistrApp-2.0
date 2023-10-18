"use strict";(self.webpackChunkapp=self.webpackChunkapp||[]).push([[8592],{9262:(y,_,r)=>{r.d(_,{c:()=>i});var v=r(8411),c=r(967),u=r(9203);const i=(n,s)=>{let e,t;const d=(a,w,p)=>{if(typeof document>"u")return;const E=document.elementFromPoint(a,w);E&&s(E)?E!==e&&(o(),l(E,p)):o()},l=(a,w)=>{e=a,t||(t=e);const p=e;(0,v.w)(()=>p.classList.add("ion-activated")),w()},o=(a=!1)=>{if(!e)return;const w=e;(0,v.w)(()=>w.classList.remove("ion-activated")),a&&t!==e&&e.click(),e=void 0};return(0,u.createGesture)({el:n,gestureName:"buttonActiveDrag",threshold:0,onStart:a=>d(a.currentX,a.currentY,c.a),onMove:a=>d(a.currentX,a.currentY,c.b),onEnd:()=>{o(!0),(0,c.h)(),t=void 0}})}},4874:(y,_,r)=>{r.d(_,{g:()=>c});var v=r(6225);const c=()=>{if(void 0!==v.w)return v.w.Capacitor}},5149:(y,_,r)=>{r.d(_,{g:()=>v});const v=(s,e,t,d,l)=>u(s[1],e[1],t[1],d[1],l).map(o=>c(s[0],e[0],t[0],d[0],o)),c=(s,e,t,d,l)=>l*(3*e*Math.pow(l-1,2)+l*(-3*t*l+3*t+d*l))-s*Math.pow(l-1,3),u=(s,e,t,d,l)=>n((d-=l)-3*(t-=l)+3*(e-=l)-(s-=l),3*t-6*e+3*s,3*e-3*s,s).filter(a=>a>=0&&a<=1),n=(s,e,t,d)=>{if(0===s)return((s,e,t)=>{const d=e*e-4*s*t;return d<0?[]:[(-e+Math.sqrt(d))/(2*s),(-e-Math.sqrt(d))/(2*s)]})(e,t,d);const l=(3*(t/=s)-(e/=s)*e)/3,o=(2*e*e*e-9*e*t+27*(d/=s))/27;if(0===l)return[Math.pow(-o,1/3)];if(0===o)return[Math.sqrt(-l),-Math.sqrt(-l)];const a=Math.pow(o/2,2)+Math.pow(l/3,3);if(0===a)return[Math.pow(o/2,.5)-e/3];if(a>0)return[Math.pow(-o/2+Math.sqrt(a),1/3)-Math.pow(o/2+Math.sqrt(a),1/3)-e/3];const w=Math.sqrt(Math.pow(-l/3,3)),p=Math.acos(-o/(2*Math.sqrt(Math.pow(-l/3,3)))),E=2*Math.pow(w,1/3);return[E*Math.cos(p/3)-e/3,E*Math.cos((p+2*Math.PI)/3)-e/3,E*Math.cos((p+4*Math.PI)/3)-e/3]}},5085:(y,_,r)=>{r.d(_,{i:()=>v});const v=c=>c&&""!==c.dir?"rtl"===c.dir.toLowerCase():"rtl"===document?.dir.toLowerCase()},2779:(y,_,r)=>{r.r(_),r.d(_,{startFocusVisible:()=>i});const v="ion-focused",u=["Tab","ArrowDown","Space","Escape"," ","Shift","Enter","ArrowLeft","ArrowRight","ArrowUp","Home","End"],i=n=>{let s=[],e=!0;const t=n?n.shadowRoot:document,d=n||document.body,l=M=>{s.forEach(g=>g.classList.remove(v)),M.forEach(g=>g.classList.add(v)),s=M},o=()=>{e=!1,l([])},a=M=>{e=u.includes(M.key),e||l([])},w=M=>{if(e&&void 0!==M.composedPath){const g=M.composedPath().filter(m=>!!m.classList&&m.classList.contains("ion-focusable"));l(g)}},p=()=>{t.activeElement===d&&l([])};return t.addEventListener("keydown",a),t.addEventListener("focusin",w),t.addEventListener("focusout",p),t.addEventListener("touchstart",o,{passive:!0}),t.addEventListener("mousedown",o),{destroy:()=>{t.removeEventListener("keydown",a),t.removeEventListener("focusin",w),t.removeEventListener("focusout",p),t.removeEventListener("touchstart",o),t.removeEventListener("mousedown",o)},setFocus:l}}},5487:(y,_,r)=>{r.d(_,{c:()=>c});var v=r(839);const c=s=>{const e=s;let t;return{hasLegacyControl:()=>{if(void 0===t){const l=void 0!==e.label||u(e),o=e.hasAttribute("aria-label")||e.hasAttribute("aria-labelledby")&&null===e.shadowRoot,a=(0,v.h)(e);t=!0===e.legacy||!l&&!o&&null!==a}return t}}},u=s=>null!==s.shadowRoot&&!!(i.includes(s.tagName)&&null!==s.querySelector('[slot="label"]')||n.includes(s.tagName)&&""!==s.textContent),i=["ION-RANGE"],n=["ION-TOGGLE","ION-CHECKBOX","ION-RADIO"]},967:(y,_,r)=>{r.d(_,{I:()=>c,a:()=>e,b:()=>t,c:()=>s,d:()=>l,h:()=>d});var v=r(4874),c=function(o){return o.Heavy="HEAVY",o.Medium="MEDIUM",o.Light="LIGHT",o}(c||{});const i={getEngine(){const o=window.TapticEngine;if(o)return o;const a=(0,v.g)();return a?.isPluginAvailable("Haptics")?a.Plugins.Haptics:void 0},available(){if(!this.getEngine())return!1;const a=(0,v.g)();return"web"!==a?.getPlatform()||typeof navigator<"u"&&void 0!==navigator.vibrate},isCordova:()=>void 0!==window.TapticEngine,isCapacitor:()=>void 0!==(0,v.g)(),impact(o){const a=this.getEngine();if(!a)return;const w=this.isCapacitor()?o.style:o.style.toLowerCase();a.impact({style:w})},notification(o){const a=this.getEngine();if(!a)return;const w=this.isCapacitor()?o.type:o.type.toLowerCase();a.notification({type:w})},selection(){const o=this.isCapacitor()?c.Light:"light";this.impact({style:o})},selectionStart(){const o=this.getEngine();o&&(this.isCapacitor()?o.selectionStart():o.gestureSelectionStart())},selectionChanged(){const o=this.getEngine();o&&(this.isCapacitor()?o.selectionChanged():o.gestureSelectionChanged())},selectionEnd(){const o=this.getEngine();o&&(this.isCapacitor()?o.selectionEnd():o.gestureSelectionEnd())}},n=()=>i.available(),s=()=>{n()&&i.selection()},e=()=>{n()&&i.selectionStart()},t=()=>{n()&&i.selectionChanged()},d=()=>{n()&&i.selectionEnd()},l=o=>{n()&&i.impact(o)}},8360:(y,_,r)=>{r.d(_,{I:()=>s,a:()=>l,b:()=>n,c:()=>w,d:()=>E,f:()=>o,g:()=>d,i:()=>t,p:()=>p,r:()=>M,s:()=>a});var v=r(5861),c=r(839),u=r(6710);const n="ion-content",s=".ion-content-scroll-host",e=`${n}, ${s}`,t=g=>"ION-CONTENT"===g.tagName,d=function(){var g=(0,v.Z)(function*(m){return t(m)?(yield new Promise(f=>(0,c.c)(m,f)),m.getScrollElement()):m});return function(f){return g.apply(this,arguments)}}(),l=g=>g.querySelector(s)||g.querySelector(e),o=g=>g.closest(e),a=(g,m)=>t(g)?g.scrollToTop(m):Promise.resolve(g.scrollTo({top:0,left:0,behavior:m>0?"smooth":"auto"})),w=(g,m,f,O)=>t(g)?g.scrollByPoint(m,f,O):Promise.resolve(g.scrollBy({top:f,left:m,behavior:O>0?"smooth":"auto"})),p=g=>(0,u.b)(g,n),E=g=>{if(t(g)){const f=g.scrollY;return g.scrollY=!1,f}return g.style.setProperty("overflow","hidden"),!0},M=(g,m)=>{t(g)?g.scrollY=m:g.style.removeProperty("overflow")}},5307:(y,_,r)=>{r.d(_,{a:()=>v,b:()=>w,c:()=>e,d:()=>p,e:()=>D,f:()=>s,g:()=>E,h:()=>u,i:()=>c,j:()=>O,k:()=>C,l:()=>t,m:()=>o,n:()=>M,o:()=>l,p:()=>n,q:()=>i,r:()=>f,s:()=>h,t:()=>a,u:()=>g,v:()=>m,w:()=>d});const v="data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' class='ionicon' viewBox='0 0 512 512'><path stroke-linecap='square' stroke-miterlimit='10' stroke-width='48' d='M244 400L100 256l144-144M120 256h292' class='ionicon-fill-none'/></svg>",c="data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' class='ionicon' viewBox='0 0 512 512'><path stroke-linecap='round' stroke-linejoin='round' stroke-width='48' d='M112 268l144 144 144-144M256 392V100' class='ionicon-fill-none'/></svg>",u="data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' class='ionicon' viewBox='0 0 512 512'><path d='M368 64L144 256l224 192V64z'/></svg>",i="data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' class='ionicon' viewBox='0 0 512 512'><path d='M64 144l192 224 192-224H64z'/></svg>",n="data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' class='ionicon' viewBox='0 0 512 512'><path d='M448 368L256 144 64 368h384z'/></svg>",s="data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' class='ionicon' viewBox='0 0 512 512'><path stroke-linecap='round' stroke-linejoin='round' d='M416 128L192 384l-96-96' class='ionicon-fill-none ionicon-stroke-width'/></svg>",e="data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' class='ionicon' viewBox='0 0 512 512'><path stroke-linecap='round' stroke-linejoin='round' stroke-width='48' d='M328 112L184 256l144 144' class='ionicon-fill-none'/></svg>",t="data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' class='ionicon' viewBox='0 0 512 512'><path stroke-linecap='round' stroke-linejoin='round' stroke-width='48' d='M112 184l144 144 144-144' class='ionicon-fill-none'/></svg>",d="data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' class='ionicon' viewBox='0 0 512 512'><path d='M136 208l120-104 120 104M136 304l120 104 120-104' stroke-width='48' stroke-linecap='round' stroke-linejoin='round' class='ionicon-fill-none'/></svg>",l="data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' class='ionicon' viewBox='0 0 512 512'><path stroke-linecap='round' stroke-linejoin='round' stroke-width='48' d='M184 112l144 144-144 144' class='ionicon-fill-none'/></svg>",o="data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' class='ionicon' viewBox='0 0 512 512'><path stroke-linecap='round' stroke-linejoin='round' stroke-width='48' d='M184 112l144 144-144 144' class='ionicon-fill-none'/></svg>",a="data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' class='ionicon' viewBox='0 0 512 512'><path d='M289.94 256l95-95A24 24 0 00351 127l-95 95-95-95a24 24 0 00-34 34l95 95-95 95a24 24 0 1034 34l95-95 95 95a24 24 0 0034-34z'/></svg>",w="data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' class='ionicon' viewBox='0 0 512 512'><path d='M256 48C141.31 48 48 141.31 48 256s93.31 208 208 208 208-93.31 208-208S370.69 48 256 48zm75.31 260.69a16 16 0 11-22.62 22.62L256 278.63l-52.69 52.68a16 16 0 01-22.62-22.62L233.37 256l-52.68-52.69a16 16 0 0122.62-22.62L256 233.37l52.69-52.68a16 16 0 0122.62 22.62L278.63 256z'/></svg>",p="data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' class='ionicon' viewBox='0 0 512 512'><path d='M400 145.49L366.51 112 256 222.51 145.49 112 112 145.49 222.51 256 112 366.51 145.49 400 256 289.49 366.51 400 400 366.51 289.49 256 400 145.49z'/></svg>",E="data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' class='ionicon' viewBox='0 0 512 512'><circle cx='256' cy='256' r='192' stroke-linecap='round' stroke-linejoin='round' class='ionicon-fill-none ionicon-stroke-width'/></svg>",M="data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' class='ionicon' viewBox='0 0 512 512'><circle cx='256' cy='256' r='48'/><circle cx='416' cy='256' r='48'/><circle cx='96' cy='256' r='48'/></svg>",g="data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' class='ionicon' viewBox='0 0 512 512'><path stroke-linecap='round' stroke-miterlimit='10' d='M80 160h352M80 256h352M80 352h352' class='ionicon-fill-none ionicon-stroke-width'/></svg>",m="data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' class='ionicon' viewBox='0 0 512 512'><path d='M64 384h384v-42.67H64zm0-106.67h384v-42.66H64zM64 128v42.67h384V128z'/></svg>",f="data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' class='ionicon' viewBox='0 0 512 512'><path stroke-linecap='round' stroke-linejoin='round' d='M400 256H112' class='ionicon-fill-none ionicon-stroke-width'/></svg>",O="data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' class='ionicon' viewBox='0 0 512 512'><path stroke-linecap='round' stroke-linejoin='round' d='M96 256h320M96 176h320M96 336h320' class='ionicon-fill-none ionicon-stroke-width'/></svg>",C="data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' class='ionicon' viewBox='0 0 512 512'><path stroke-linecap='square' stroke-linejoin='round' stroke-width='44' d='M118 304h276M118 208h276' class='ionicon-fill-none'/></svg>",h="data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' class='ionicon' viewBox='0 0 512 512'><path d='M221.09 64a157.09 157.09 0 10157.09 157.09A157.1 157.1 0 00221.09 64z' stroke-miterlimit='10' class='ionicon-fill-none ionicon-stroke-width'/><path stroke-linecap='round' stroke-miterlimit='10' d='M338.29 338.29L448 448' class='ionicon-fill-none ionicon-stroke-width'/></svg>",D="data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' class='ionicon' viewBox='0 0 512 512'><path d='M464 428L339.92 303.9a160.48 160.48 0 0030.72-94.58C370.64 120.37 298.27 48 209.32 48S48 120.37 48 209.32s72.37 161.32 161.32 161.32a160.48 160.48 0 0094.58-30.72L428 464zM209.32 319.69a110.38 110.38 0 11110.37-110.37 110.5 110.5 0 01-110.37 110.37z'/></svg>"},2894:(y,_,r)=>{r.d(_,{c:()=>i,g:()=>n});var v=r(6225),c=r(839),u=r(6710);const i=(e,t,d)=>{let l,o;void 0!==v.w&&"MutationObserver"in v.w&&(l=new MutationObserver(E=>{for(const M of E)for(const g of M.addedNodes)if(g.nodeType===Node.ELEMENT_NODE&&g.slot===t)return d(),void(0,c.r)(()=>a(g))}),l.observe(e,{childList:!0}));const a=E=>{var M;o&&(o.disconnect(),o=void 0),o=new MutationObserver(g=>{d();for(const m of g)for(const f of m.removedNodes)f.nodeType===Node.ELEMENT_NODE&&f.slot===t&&p()}),o.observe(null!==(M=E.parentElement)&&void 0!==M?M:E,{subtree:!0,childList:!0})},p=()=>{o&&(o.disconnect(),o=void 0)};return{destroy:()=>{l&&(l.disconnect(),l=void 0),p()}}},n=(e,t,d)=>{const l=null==e?0:e.toString().length,o=s(l,t);if(void 0===d)return o;try{return d(l,t)}catch(a){return(0,u.a)("Exception in provided `counterFormatter`.",a),o}},s=(e,t)=>`${e} / ${t}`},7484:(y,_,r)=>{r.d(_,{K:()=>i,a:()=>u});var v=r(4874),c=function(n){return n.Unimplemented="UNIMPLEMENTED",n.Unavailable="UNAVAILABLE",n}(c||{}),u=function(n){return n.Body="body",n.Ionic="ionic",n.Native="native",n.None="none",n}(u||{});const i={getEngine(){const n=(0,v.g)();if(n?.isPluginAvailable("Keyboard"))return n.Plugins.Keyboard},getResizeMode(){const n=this.getEngine();return n?.getResizeMode?n.getResizeMode().catch(s=>{if(s.code!==c.Unimplemented)throw s}):Promise.resolve(void 0)}}},1612:(y,_,r)=>{r.r(_),r.d(_,{KEYBOARD_DID_CLOSE:()=>n,KEYBOARD_DID_OPEN:()=>i,copyVisualViewport:()=>C,keyboardDidClose:()=>g,keyboardDidOpen:()=>E,keyboardDidResize:()=>M,resetKeyboardAssist:()=>l,setKeyboardClose:()=>p,setKeyboardOpen:()=>w,startKeyboardAssist:()=>o,trackViewportChanges:()=>O});var v=r(7484);r(4874),r(6225);const i="ionKeyboardDidShow",n="ionKeyboardDidHide";let e={},t={},d=!1;const l=()=>{e={},t={},d=!1},o=h=>{if(v.K.getEngine())a(h);else{if(!h.visualViewport)return;t=C(h.visualViewport),h.visualViewport.onresize=()=>{O(h),E()||M(h)?w(h):g(h)&&p(h)}}},a=h=>{h.addEventListener("keyboardDidShow",D=>w(h,D)),h.addEventListener("keyboardDidHide",()=>p(h))},w=(h,D)=>{m(h,D),d=!0},p=h=>{f(h),d=!1},E=()=>!d&&e.width===t.width&&(e.height-t.height)*t.scale>150,M=h=>d&&!g(h),g=h=>d&&t.height===h.innerHeight,m=(h,D)=>{const L=new CustomEvent(i,{detail:{keyboardHeight:D?D.keyboardHeight:h.innerHeight-t.height}});h.dispatchEvent(L)},f=h=>{const D=new CustomEvent(n);h.dispatchEvent(D)},O=h=>{e=Object.assign({},t),t=C(h.visualViewport)},C=h=>({width:Math.round(h.width),height:Math.round(h.height),offsetTop:h.offsetTop,offsetLeft:h.offsetLeft,pageTop:h.pageTop,pageLeft:h.pageLeft,scale:h.scale})},3459:(y,_,r)=>{r.d(_,{c:()=>s});var v=r(5861),c=r(6225),u=r(7484);const i=e=>void 0===c.d||e===u.a.None||void 0===e?null:c.d.querySelector("ion-app")??c.d.body,n=e=>{const t=i(e);return null===t?0:t.clientHeight},s=function(){var e=(0,v.Z)(function*(t){let d,l,o,a;const w=function(){var m=(0,v.Z)(function*(){const f=yield u.K.getResizeMode(),O=void 0===f?void 0:f.mode;d=()=>{void 0===a&&(a=n(O)),o=!0,p(o,O)},l=()=>{o=!1,p(o,O)},null==c.w||c.w.addEventListener("keyboardWillShow",d),null==c.w||c.w.addEventListener("keyboardWillHide",l)});return function(){return m.apply(this,arguments)}}(),p=(m,f)=>{t&&t(m,E(f))},E=m=>{if(0===a||a===n(m))return;const f=i(m);return null!==f?new Promise(O=>{const h=new ResizeObserver(()=>{f.clientHeight===a&&(h.disconnect(),O())});h.observe(f)}):void 0};return yield w(),{init:w,destroy:()=>{null==c.w||c.w.removeEventListener("keyboardWillShow",d),null==c.w||c.w.removeEventListener("keyboardWillHide",l),d=l=void 0},isKeyboardVisible:()=>o}});return function(d){return e.apply(this,arguments)}}()},3830:(y,_,r)=>{r.d(_,{c:()=>c});var v=r(5861);const c=()=>{let u;return{lock:function(){var n=(0,v.Z)(function*(){const s=u;let e;return u=new Promise(t=>e=t),void 0!==s&&(yield s),e});return function(){return n.apply(this,arguments)}}()}}},5857:(y,_,r)=>{r.d(_,{c:()=>u});var v=r(6225),c=r(839);const u=(i,n,s)=>{let e;const t=()=>!(void 0===n()||void 0!==i.label||null===s()),l=()=>{const a=n();if(void 0===a)return;if(!t())return void a.style.removeProperty("width");const w=s().scrollWidth;if(0===w&&null===a.offsetParent&&void 0!==v.w&&"IntersectionObserver"in v.w){if(void 0!==e)return;const p=e=new IntersectionObserver(E=>{1===E[0].intersectionRatio&&(l(),p.disconnect(),e=void 0)},{threshold:.01,root:i});p.observe(a)}else a.style.setProperty("width",.75*w+"px")};return{calculateNotchWidth:()=>{t()&&(0,c.r)(()=>{l()})},destroy:()=>{e&&(e.disconnect(),e=void 0)}}}},3781:(y,_,r)=>{r.d(_,{S:()=>c});const c={bubbles:{dur:1e3,circles:9,fn:(u,i,n)=>{const s=u*i/n-u+"ms",e=2*Math.PI*i/n;return{r:5,style:{top:32*Math.sin(e)+"%",left:32*Math.cos(e)+"%","animation-delay":s}}}},circles:{dur:1e3,circles:8,fn:(u,i,n)=>{const s=i/n,e=u*s-u+"ms",t=2*Math.PI*s;return{r:5,style:{top:32*Math.sin(t)+"%",left:32*Math.cos(t)+"%","animation-delay":e}}}},circular:{dur:1400,elmDuration:!0,circles:1,fn:()=>({r:20,cx:48,cy:48,fill:"none",viewBox:"24 24 48 48",transform:"translate(0,0)",style:{}})},crescent:{dur:750,circles:1,fn:()=>({r:26,style:{}})},dots:{dur:750,circles:3,fn:(u,i)=>({r:6,style:{left:32-32*i+"%","animation-delay":-110*i+"ms"}})},lines:{dur:1e3,lines:8,fn:(u,i,n)=>({y1:14,y2:26,style:{transform:`rotate(${360/n*i+(i<n/2?180:-180)}deg)`,"animation-delay":u*i/n-u+"ms"}})},"lines-small":{dur:1e3,lines:8,fn:(u,i,n)=>({y1:12,y2:20,style:{transform:`rotate(${360/n*i+(i<n/2?180:-180)}deg)`,"animation-delay":u*i/n-u+"ms"}})},"lines-sharp":{dur:1e3,lines:12,fn:(u,i,n)=>({y1:17,y2:29,style:{transform:`rotate(${30*i+(i<6?180:-180)}deg)`,"animation-delay":u*i/n-u+"ms"}})},"lines-sharp-small":{dur:1e3,lines:12,fn:(u,i,n)=>({y1:12,y2:20,style:{transform:`rotate(${30*i+(i<6?180:-180)}deg)`,"animation-delay":u*i/n-u+"ms"}})}}},8663:(y,_,r)=>{r.r(_),r.d(_,{createSwipeBackGesture:()=>n});var v=r(839),c=r(5085),u=r(9203);r(619);const n=(s,e,t,d,l)=>{const o=s.ownerDocument.defaultView;let a=(0,c.i)(s);const p=f=>a?-f.deltaX:f.deltaX;return(0,u.createGesture)({el:s,gestureName:"goback-swipe",gesturePriority:101,threshold:10,canStart:f=>(a=(0,c.i)(s),(f=>{const{startX:C}=f;return a?C>=o.innerWidth-50:C<=50})(f)&&e()),onStart:t,onMove:f=>{const C=p(f)/o.innerWidth;d(C)},onEnd:f=>{const O=p(f),C=o.innerWidth,h=O/C,D=(f=>a?-f.velocityX:f.velocityX)(f),L=D>=0&&(D>.2||O>C/2),P=(L?1-h:h)*C;let T=0;if(P>5){const A=P/Math.abs(D);T=Math.min(A,540)}l(L,h<=0?.01:(0,v.l)(0,h,.9999),T)}})}},7063:(y,_,r)=>{r.d(_,{w:()=>v});const v=(i,n,s)=>{if(typeof MutationObserver>"u")return;const e=new MutationObserver(t=>{s(c(t,n))});return e.observe(i,{childList:!0,subtree:!0}),e},c=(i,n)=>{let s;return i.forEach(e=>{for(let t=0;t<e.addedNodes.length;t++)s=u(e.addedNodes[t],n)||s}),s},u=(i,n)=>1!==i.nodeType?void 0:(i.tagName===n.toUpperCase()?[i]:Array.from(i.querySelectorAll(n))).find(e=>e.value===i.value)},189:(y,_,r)=>{r.d(_,{V:()=>i});var v=r(5861),c=r(6689),u=r(2014);let i=(()=>{class n{constructor(e){this.storage=e,this.storage.create()}Setvalue(e,t){var d=this;return(0,v.Z)(function*(){const l=yield d.storage.set(e,t);console.log(l)})()}Getvalue(e){var t=this;return(0,v.Z)(function*(){const d=yield t.storage.get(e);console.log(d)})()}static#e=this.\u0275fac=function(t){return new(t||n)(c.LFG(u.K))};static#t=this.\u0275prov=c.Yz7({token:n,factory:n.\u0275fac,providedIn:"root"})}return n})()}}]);