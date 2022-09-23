import{r as h}from"./chunks/index.9794e4f7.js";/* empty css                          */function $t(e){return e&&e.__esModule&&Object.prototype.hasOwnProperty.call(e,"default")?e.default:e}let Ut={data:""},jt=e=>typeof window=="object"?((e?e.querySelector("#_goober"):window._goober)||Object.assign((e||document.head).appendChild(document.createElement("style")),{innerHTML:" ",id:"_goober"})).firstChild:e||Ut,qt=/(?:([\u0080-\uFFFF\w-%@]+) *:? *([^{;]+?);|([^;}{]*?) *{)|(}\s*)/g,Lt=/\/\*[^]*?\*\/|  +/g,Be=/\n+/g,S=(e,t)=>{let r="",a="",n="";for(let i in e){let s=e[i];i[0]=="@"?i[1]=="i"?r=i+" "+s+";":a+=i[1]=="f"?S(s,i):i+"{"+S(s,i[1]=="k"?"":t)+"}":typeof s=="object"?a+=S(s,t?t.replace(/([^,])+/g,o=>i.replace(/(^:.*)|([^,])+/g,u=>/&/.test(u)?u.replace(/&/g,o):o?o+" "+u:u)):i):s!=null&&(i=/^--/.test(i)?i:i.replace(/[A-Z]/g,"-$&").toLowerCase(),n+=S.p?S.p(i,s):i+":"+s+";")}return r+(t&&n?t+"{"+n+"}":n)+a},R={},lt=e=>{if(typeof e=="object"){let t="";for(let r in e)t+=r+lt(e[r]);return t}return e},Bt=(e,t,r,a,n)=>{let i=lt(e),s=R[i]||(R[i]=(u=>{let f=0,c=11;for(;f<u.length;)c=101*c+u.charCodeAt(f++)>>>0;return"go"+c})(i));if(!R[s]){let u=i!==e?e:(f=>{let c,p,l=[{}];for(;c=qt.exec(f.replace(Lt,""));)c[4]?l.shift():c[3]?(p=c[3].replace(Be," ").trim(),l.unshift(l[0][p]=l[0][p]||{})):l[0][c[1]]=c[2].replace(Be," ").trim();return l[0]})(e);R[s]=S(n?{["@keyframes "+s]:u}:u,r?"":"."+s)}let o=r&&R.g?R.g:null;return r&&(R.g=R[s]),((u,f,c,p)=>{p?f.data=f.data.replace(p,u):f.data.indexOf(u)===-1&&(f.data=c?u+f.data:f.data+u)})(R[s],t,a,o),s},kt=(e,t,r)=>e.reduce((a,n,i)=>{let s=t[i];if(s&&s.call){let o=s(r),u=o&&o.props&&o.props.className||/^go/.test(o)&&o;s=u?"."+u:o&&typeof o=="object"?o.props?"":S(o,""):o===!1?"":o}return a+n+(s??"")},"");function Z(e){let t=this||{},r=e.call?e(t.p):e;return Bt(r.unshift?r.raw?kt(r,[].slice.call(arguments,1),t.p):r.reduce((a,n)=>Object.assign(a,n&&n.call?n(t.p):n),{}):r,jt(t.target),t.g,t.o,t.k)}let ft,Re,Oe;Z.bind({g:1});let O=Z.bind({k:1});function Ft(e,t,r,a){S.p=t,ft=e,Re=r,Oe=a}function C(e,t){let r=this||{};return function(){let a=arguments;function n(i,s){let o=Object.assign({},i),u=o.className||n.className;r.p=Object.assign({theme:Re&&Re()},o),r.o=/ *go\d+/.test(u),o.className=Z.apply(r,a)+(u?" "+u:""),t&&(o.ref=s);let f=e;return e[0]&&(f=o.as||e,delete o.as),Oe&&f[0]&&Oe(o),ft(f,o)}return t?t(n):n}}var It=e=>typeof e=="function",K=(e,t)=>It(e)?e(t):e,Mt=(()=>{let e=0;return()=>(++e).toString()})(),ct=(()=>{let e;return()=>{if(e===void 0&&typeof window<"u"){let t=matchMedia("(prefers-reduced-motion: reduce)");e=!t||t.matches}return e}})(),Ht=20,W=new Map,zt=1e3,ke=e=>{if(W.has(e))return;let t=setTimeout(()=>{W.delete(e),P({type:4,toastId:e})},zt);W.set(e,t)},Jt=e=>{let t=W.get(e);t&&clearTimeout(t)},Ae=(e,t)=>{switch(t.type){case 0:return{...e,toasts:[t.toast,...e.toasts].slice(0,Ht)};case 1:return t.toast.id&&Jt(t.toast.id),{...e,toasts:e.toasts.map(i=>i.id===t.toast.id?{...i,...t.toast}:i)};case 2:let{toast:r}=t;return e.toasts.find(i=>i.id===r.id)?Ae(e,{type:1,toast:r}):Ae(e,{type:0,toast:r});case 3:let{toastId:a}=t;return a?ke(a):e.toasts.forEach(i=>{ke(i.id)}),{...e,toasts:e.toasts.map(i=>i.id===a||a===void 0?{...i,visible:!1}:i)};case 4:return t.toastId===void 0?{...e,toasts:[]}:{...e,toasts:e.toasts.filter(i=>i.id!==t.toastId)};case 5:return{...e,pausedAt:t.time};case 6:let n=t.time-(e.pausedAt||0);return{...e,pausedAt:void 0,toasts:e.toasts.map(i=>({...i,pauseDuration:i.pauseDuration+n}))}}},V=[],X={toasts:[],pausedAt:void 0},P=e=>{X=Ae(X,e),V.forEach(t=>{t(X)})},Wt={blank:4e3,error:4e3,success:2e3,loading:1/0,custom:4e3},Vt=(e={})=>{let[t,r]=h.exports.useState(X);h.exports.useEffect(()=>(V.push(r),()=>{let n=V.indexOf(r);n>-1&&V.splice(n,1)}),[t]);let a=t.toasts.map(n=>{var i,s;return{...e,...e[n.type],...n,duration:n.duration||((i=e[n.type])==null?void 0:i.duration)||e?.duration||Wt[n.type],style:{...e.style,...(s=e[n.type])==null?void 0:s.style,...n.style}}});return{...t,toasts:a}},Xt=(e,t="blank",r)=>({createdAt:Date.now(),visible:!0,type:t,ariaProps:{role:"status","aria-live":"polite"},message:e,pauseDuration:0,...r,id:r?.id||Mt()}),z=e=>(t,r)=>{let a=Xt(t,e,r);return P({type:2,toast:a}),a.id},x=(e,t)=>z("blank")(e,t);x.error=z("error");x.success=z("success");x.loading=z("loading");x.custom=z("custom");x.dismiss=e=>{P({type:3,toastId:e})};x.remove=e=>P({type:4,toastId:e});x.promise=(e,t,r)=>{let a=x.loading(t.loading,{...r,...r?.loading});return e.then(n=>(x.success(K(t.success,n),{id:a,...r,...r?.success}),n)).catch(n=>{x.error(K(t.error,n),{id:a,...r,...r?.error})}),e};var Yt=(e,t)=>{P({type:1,toast:{id:e,height:t}})},Qt=()=>{P({type:5,time:Date.now()})},Kt=e=>{let{toasts:t,pausedAt:r}=Vt(e);h.exports.useEffect(()=>{if(r)return;let i=Date.now(),s=t.map(o=>{if(o.duration===1/0)return;let u=(o.duration||0)+o.pauseDuration-(i-o.createdAt);if(u<0){o.visible&&x.dismiss(o.id);return}return setTimeout(()=>x.dismiss(o.id),u)});return()=>{s.forEach(o=>o&&clearTimeout(o))}},[t,r]);let a=h.exports.useCallback(()=>{r&&P({type:6,time:Date.now()})},[r]),n=h.exports.useCallback((i,s)=>{let{reverseOrder:o=!1,gutter:u=8,defaultPosition:f}=s||{},c=t.filter(m=>(m.position||f)===(i.position||f)&&m.height),p=c.findIndex(m=>m.id===i.id),l=c.filter((m,F)=>F<p&&m.visible).length;return c.filter(m=>m.visible).slice(...o?[l+1]:[0,l]).reduce((m,F)=>m+(F.height||0)+u,0)},[t]);return{toasts:t,handlers:{updateHeight:Yt,startPause:Qt,endPause:a,calculateOffset:n}}},Gt=O`
from {
  transform: scale(0) rotate(45deg);
	opacity: 0;
}
to {
 transform: scale(1) rotate(45deg);
  opacity: 1;
}`,Zt=O`
from {
  transform: scale(0);
  opacity: 0;
}
to {
  transform: scale(1);
  opacity: 1;
}`,er=O`
from {
  transform: scale(0) rotate(90deg);
	opacity: 0;
}
to {
  transform: scale(1) rotate(90deg);
	opacity: 1;
}`,tr=C("div")`
  width: 20px;
  opacity: 0;
  height: 20px;
  border-radius: 10px;
  background: ${e=>e.primary||"#ff4b4b"};
  position: relative;
  transform: rotate(45deg);

  animation: ${Gt} 0.3s cubic-bezier(0.175, 0.885, 0.32, 1.275)
    forwards;
  animation-delay: 100ms;

  &:after,
  &:before {
    content: '';
    animation: ${Zt} 0.15s ease-out forwards;
    animation-delay: 150ms;
    position: absolute;
    border-radius: 3px;
    opacity: 0;
    background: ${e=>e.secondary||"#fff"};
    bottom: 9px;
    left: 4px;
    height: 2px;
    width: 12px;
  }

  &:before {
    animation: ${er} 0.15s ease-out forwards;
    animation-delay: 180ms;
    transform: rotate(90deg);
  }
`,rr=O`
  from {
    transform: rotate(0deg);
  }
  to {
    transform: rotate(360deg);
  }
`,nr=C("div")`
  width: 12px;
  height: 12px;
  box-sizing: border-box;
  border: 2px solid;
  border-radius: 100%;
  border-color: ${e=>e.secondary||"#e0e0e0"};
  border-right-color: ${e=>e.primary||"#616161"};
  animation: ${rr} 1s linear infinite;
`,ar=O`
from {
  transform: scale(0) rotate(45deg);
	opacity: 0;
}
to {
  transform: scale(1) rotate(45deg);
	opacity: 1;
}`,ir=O`
0% {
	height: 0;
	width: 0;
	opacity: 0;
}
40% {
  height: 0;
	width: 6px;
	opacity: 1;
}
100% {
  opacity: 1;
  height: 10px;
}`,sr=C("div")`
  width: 20px;
  opacity: 0;
  height: 20px;
  border-radius: 10px;
  background: ${e=>e.primary||"#61d345"};
  position: relative;
  transform: rotate(45deg);

  animation: ${ar} 0.3s cubic-bezier(0.175, 0.885, 0.32, 1.275)
    forwards;
  animation-delay: 100ms;
  &:after {
    content: '';
    box-sizing: border-box;
    animation: ${ir} 0.2s ease-out forwards;
    opacity: 0;
    animation-delay: 200ms;
    position: absolute;
    border-right: 2px solid;
    border-bottom: 2px solid;
    border-color: ${e=>e.secondary||"#fff"};
    bottom: 6px;
    left: 6px;
    height: 10px;
    width: 6px;
  }
`,or=C("div")`
  position: absolute;
`,ur=C("div")`
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
  min-width: 20px;
  min-height: 20px;
`,lr=O`
from {
  transform: scale(0.6);
  opacity: 0.4;
}
to {
  transform: scale(1);
  opacity: 1;
}`,fr=C("div")`
  position: relative;
  transform: scale(0.6);
  opacity: 0.4;
  min-width: 20px;
  animation: ${lr} 0.3s 0.12s cubic-bezier(0.175, 0.885, 0.32, 1.275)
    forwards;
`,cr=({toast:e})=>{let{icon:t,type:r,iconTheme:a}=e;return t!==void 0?typeof t=="string"?h.exports.createElement(fr,null,t):t:r==="blank"?null:h.exports.createElement(ur,null,h.exports.createElement(nr,{...a}),r!=="loading"&&h.exports.createElement(or,null,r==="error"?h.exports.createElement(tr,{...a}):h.exports.createElement(sr,{...a})))},dr=e=>`
0% {transform: translate3d(0,${e*-200}%,0) scale(.6); opacity:.5;}
100% {transform: translate3d(0,0,0) scale(1); opacity:1;}
`,pr=e=>`
0% {transform: translate3d(0,0,-1px) scale(1); opacity:1;}
100% {transform: translate3d(0,${e*-150}%,-1px) scale(.6); opacity:0;}
`,hr="0%{opacity:0;} 100%{opacity:1;}",mr="0%{opacity:1;} 100%{opacity:0;}",vr=C("div")`
  display: flex;
  align-items: center;
  background: #fff;
  color: #363636;
  line-height: 1.3;
  will-change: transform;
  box-shadow: 0 3px 10px rgba(0, 0, 0, 0.1), 0 3px 3px rgba(0, 0, 0, 0.05);
  max-width: 350px;
  pointer-events: auto;
  padding: 8px 10px;
  border-radius: 8px;
`,yr=C("div")`
  display: flex;
  justify-content: center;
  margin: 4px 10px;
  color: inherit;
  flex: 1 1 auto;
  white-space: pre-line;
`,br=(e,t)=>{let r=e.includes("top")?1:-1,[a,n]=ct()?[hr,mr]:[dr(r),pr(r)];return{animation:t?`${O(a)} 0.35s cubic-bezier(.21,1.02,.73,1) forwards`:`${O(n)} 0.4s forwards cubic-bezier(.06,.71,.55,1)`}},Er=h.exports.memo(({toast:e,position:t,style:r,children:a})=>{let n=e.height?br(e.position||t||"top-center",e.visible):{opacity:0},i=h.exports.createElement(cr,{toast:e}),s=h.exports.createElement(yr,{...e.ariaProps},K(e.message,e));return h.exports.createElement(vr,{className:e.className,style:{...n,...r,...e.style}},typeof a=="function"?a({icon:i,message:s}):h.exports.createElement(h.exports.Fragment,null,i,s))});Ft(h.exports.createElement);var xr=({id:e,className:t,style:r,onHeightUpdate:a,children:n})=>{let i=h.exports.useCallback(s=>{if(s){let o=()=>{let u=s.getBoundingClientRect().height;a(e,u)};o(),new MutationObserver(o).observe(s,{subtree:!0,childList:!0,characterData:!0})}},[e,a]);return h.exports.createElement("div",{ref:i,className:t,style:r},n)},gr=(e,t)=>{let r=e.includes("top"),a=r?{top:0}:{bottom:0},n=e.includes("center")?{justifyContent:"center"}:e.includes("right")?{justifyContent:"flex-end"}:{};return{left:0,right:0,display:"flex",position:"absolute",transition:ct()?void 0:"all 230ms cubic-bezier(.21,1.02,.73,1)",transform:`translateY(${t*(r?1:-1)}px)`,...a,...n}},wr=Z`
  z-index: 9999;
  > * {
    pointer-events: auto;
  }
`,J=16,Rr=({reverseOrder:e,position:t="top-center",toastOptions:r,gutter:a,children:n,containerStyle:i,containerClassName:s})=>{let{toasts:o,handlers:u}=Kt(r);return h.exports.createElement("div",{style:{position:"fixed",zIndex:9999,top:J,left:J,right:J,bottom:J,pointerEvents:"none",...i},className:s,onMouseEnter:u.startPause,onMouseLeave:u.endPause},o.map(f=>{let c=f.position||t,p=u.calculateOffset(f,{reverseOrder:e,gutter:a,defaultPosition:t}),l=gr(c,p);return h.exports.createElement(xr,{id:f.id,key:f.id,onHeightUpdate:u.updateHeight,className:f.visible?wr:"",style:l},f.type==="custom"?K(f.message,f):n?n(f):h.exports.createElement(Er,{toast:f,position:c}))}))},Or=x,dt={exports:{}},Ce={exports:{}},pt=function(t,r){return function(){for(var n=new Array(arguments.length),i=0;i<n.length;i++)n[i]=arguments[i];return t.apply(r,n)}},Ar=pt,_e=Object.prototype.toString,Pe=function(e){return function(t){var r=_e.call(t);return e[r]||(e[r]=r.slice(8,-1).toLowerCase())}}(Object.create(null));function T(e){return e=e.toLowerCase(),function(r){return Pe(r)===e}}function Te(e){return Array.isArray(e)}function G(e){return typeof e>"u"}function Sr(e){return e!==null&&!G(e)&&e.constructor!==null&&!G(e.constructor)&&typeof e.constructor.isBuffer=="function"&&e.constructor.isBuffer(e)}var ht=T("ArrayBuffer");function Cr(e){var t;return typeof ArrayBuffer<"u"&&ArrayBuffer.isView?t=ArrayBuffer.isView(e):t=e&&e.buffer&&ht(e.buffer),t}function _r(e){return typeof e=="string"}function Pr(e){return typeof e=="number"}function mt(e){return e!==null&&typeof e=="object"}function Y(e){if(Pe(e)!=="object")return!1;var t=Object.getPrototypeOf(e);return t===null||t===Object.prototype}var Tr=T("Date"),Nr=T("File"),Dr=T("Blob"),$r=T("FileList");function Ne(e){return _e.call(e)==="[object Function]"}function Ur(e){return mt(e)&&Ne(e.pipe)}function jr(e){var t="[object FormData]";return e&&(typeof FormData=="function"&&e instanceof FormData||_e.call(e)===t||Ne(e.toString)&&e.toString()===t)}var qr=T("URLSearchParams");function Lr(e){return e.trim?e.trim():e.replace(/^\s+|\s+$/g,"")}function Br(){return typeof navigator<"u"&&(navigator.product==="ReactNative"||navigator.product==="NativeScript"||navigator.product==="NS")?!1:typeof window<"u"&&typeof document<"u"}function De(e,t){if(!(e===null||typeof e>"u"))if(typeof e!="object"&&(e=[e]),Te(e))for(var r=0,a=e.length;r<a;r++)t.call(null,e[r],r,e);else for(var n in e)Object.prototype.hasOwnProperty.call(e,n)&&t.call(null,e[n],n,e)}function Se(){var e={};function t(n,i){Y(e[i])&&Y(n)?e[i]=Se(e[i],n):Y(n)?e[i]=Se({},n):Te(n)?e[i]=n.slice():e[i]=n}for(var r=0,a=arguments.length;r<a;r++)De(arguments[r],t);return e}function kr(e,t,r){return De(t,function(n,i){r&&typeof n=="function"?e[i]=Ar(n,r):e[i]=n}),e}function Fr(e){return e.charCodeAt(0)===65279&&(e=e.slice(1)),e}function Ir(e,t,r,a){e.prototype=Object.create(t.prototype,a),e.prototype.constructor=e,r&&Object.assign(e.prototype,r)}function Mr(e,t,r){var a,n,i,s={};t=t||{};do{for(a=Object.getOwnPropertyNames(e),n=a.length;n-- >0;)i=a[n],s[i]||(t[i]=e[i],s[i]=!0);e=Object.getPrototypeOf(e)}while(e&&(!r||r(e,t))&&e!==Object.prototype);return t}function Hr(e,t,r){e=String(e),(r===void 0||r>e.length)&&(r=e.length),r-=t.length;var a=e.indexOf(t,r);return a!==-1&&a===r}function zr(e){if(!e)return null;var t=e.length;if(G(t))return null;for(var r=new Array(t);t-- >0;)r[t]=e[t];return r}var Jr=function(e){return function(t){return e&&t instanceof e}}(typeof Uint8Array<"u"&&Object.getPrototypeOf(Uint8Array)),y={isArray:Te,isArrayBuffer:ht,isBuffer:Sr,isFormData:jr,isArrayBufferView:Cr,isString:_r,isNumber:Pr,isObject:mt,isPlainObject:Y,isUndefined:G,isDate:Tr,isFile:Nr,isBlob:Dr,isFunction:Ne,isStream:Ur,isURLSearchParams:qr,isStandardBrowserEnv:Br,forEach:De,merge:Se,extend:kr,trim:Lr,stripBOM:Fr,inherits:Ir,toFlatObject:Mr,kindOf:Pe,kindOfTest:T,endsWith:Hr,toArray:zr,isTypedArray:Jr,isFileList:$r},U=y;function Fe(e){return encodeURIComponent(e).replace(/%3A/gi,":").replace(/%24/g,"$").replace(/%2C/gi,",").replace(/%20/g,"+").replace(/%5B/gi,"[").replace(/%5D/gi,"]")}var vt=function(t,r,a){if(!r)return t;var n;if(a)n=a(r);else if(U.isURLSearchParams(r))n=r.toString();else{var i=[];U.forEach(r,function(u,f){u===null||typeof u>"u"||(U.isArray(u)?f=f+"[]":u=[u],U.forEach(u,function(p){U.isDate(p)?p=p.toISOString():U.isObject(p)&&(p=JSON.stringify(p)),i.push(Fe(f)+"="+Fe(p))}))}),n=i.join("&")}if(n){var s=t.indexOf("#");s!==-1&&(t=t.slice(0,s)),t+=(t.indexOf("?")===-1?"?":"&")+n}return t},Wr=y;function ee(){this.handlers=[]}ee.prototype.use=function(t,r,a){return this.handlers.push({fulfilled:t,rejected:r,synchronous:a?a.synchronous:!1,runWhen:a?a.runWhen:null}),this.handlers.length-1};ee.prototype.eject=function(t){this.handlers[t]&&(this.handlers[t]=null)};ee.prototype.forEach=function(t){Wr.forEach(this.handlers,function(a){a!==null&&t(a)})};var Vr=ee,Xr=y,Yr=function(t,r){Xr.forEach(t,function(n,i){i!==r&&i.toUpperCase()===r.toUpperCase()&&(t[r]=n,delete t[i])})},yt=y;function L(e,t,r,a,n){Error.call(this),this.message=e,this.name="AxiosError",t&&(this.code=t),r&&(this.config=r),a&&(this.request=a),n&&(this.response=n)}yt.inherits(L,Error,{toJSON:function(){return{message:this.message,name:this.name,description:this.description,number:this.number,fileName:this.fileName,lineNumber:this.lineNumber,columnNumber:this.columnNumber,stack:this.stack,config:this.config,code:this.code,status:this.response&&this.response.status?this.response.status:null}}});var bt=L.prototype,Et={};["ERR_BAD_OPTION_VALUE","ERR_BAD_OPTION","ECONNABORTED","ETIMEDOUT","ERR_NETWORK","ERR_FR_TOO_MANY_REDIRECTS","ERR_DEPRECATED","ERR_BAD_RESPONSE","ERR_BAD_REQUEST","ERR_CANCELED"].forEach(function(e){Et[e]={value:e}});Object.defineProperties(L,Et);Object.defineProperty(bt,"isAxiosError",{value:!0});L.from=function(e,t,r,a,n,i){var s=Object.create(bt);return yt.toFlatObject(e,s,function(u){return u!==Error.prototype}),L.call(s,e.message,t,r,a,n),s.name=e.name,i&&Object.assign(s,i),s};var k=L,xt={silentJSONParsing:!0,forcedJSONParsing:!0,clarifyTimeoutError:!1},w=y;function Qr(e,t){t=t||new FormData;var r=[];function a(i){return i===null?"":w.isDate(i)?i.toISOString():w.isArrayBuffer(i)||w.isTypedArray(i)?typeof Blob=="function"?new Blob([i]):Buffer.from(i):i}function n(i,s){if(w.isPlainObject(i)||w.isArray(i)){if(r.indexOf(i)!==-1)throw Error("Circular reference detected in "+s);r.push(i),w.forEach(i,function(u,f){if(!w.isUndefined(u)){var c=s?s+"."+f:f,p;if(u&&!s&&typeof u=="object"){if(w.endsWith(f,"{}"))u=JSON.stringify(u);else if(w.endsWith(f,"[]")&&(p=w.toArray(u))){p.forEach(function(l){!w.isUndefined(l)&&t.append(c,a(l))});return}}n(u,c)}}),r.pop()}else t.append(s,a(i))}return n(e),t}var gt=Qr,ue,Ie;function Kr(){if(Ie)return ue;Ie=1;var e=k;return ue=function(r,a,n){var i=n.config.validateStatus;!n.status||!i||i(n.status)?r(n):a(new e("Request failed with status code "+n.status,[e.ERR_BAD_REQUEST,e.ERR_BAD_RESPONSE][Math.floor(n.status/100)-4],n.config,n.request,n))},ue}var le,Me;function Gr(){if(Me)return le;Me=1;var e=y;return le=e.isStandardBrowserEnv()?function(){return{write:function(a,n,i,s,o,u){var f=[];f.push(a+"="+encodeURIComponent(n)),e.isNumber(i)&&f.push("expires="+new Date(i).toGMTString()),e.isString(s)&&f.push("path="+s),e.isString(o)&&f.push("domain="+o),u===!0&&f.push("secure"),document.cookie=f.join("; ")},read:function(a){var n=document.cookie.match(new RegExp("(^|;\\s*)("+a+")=([^;]*)"));return n?decodeURIComponent(n[3]):null},remove:function(a){this.write(a,"",Date.now()-864e5)}}}():function(){return{write:function(){},read:function(){return null},remove:function(){}}}(),le}var Zr=function(t){return/^([a-z][a-z\d+\-.]*:)?\/\//i.test(t)},en=function(t,r){return r?t.replace(/\/+$/,"")+"/"+r.replace(/^\/+/,""):t},tn=Zr,rn=en,wt=function(t,r){return t&&!tn(r)?rn(t,r):r},fe,He;function nn(){if(He)return fe;He=1;var e=y,t=["age","authorization","content-length","content-type","etag","expires","from","host","if-modified-since","if-unmodified-since","last-modified","location","max-forwards","proxy-authorization","referer","retry-after","user-agent"];return fe=function(a){var n={},i,s,o;return a&&e.forEach(a.split(`
`),function(f){if(o=f.indexOf(":"),i=e.trim(f.substr(0,o)).toLowerCase(),s=e.trim(f.substr(o+1)),i){if(n[i]&&t.indexOf(i)>=0)return;i==="set-cookie"?n[i]=(n[i]?n[i]:[]).concat([s]):n[i]=n[i]?n[i]+", "+s:s}}),n},fe}var ce,ze;function an(){if(ze)return ce;ze=1;var e=y;return ce=e.isStandardBrowserEnv()?function(){var r=/(msie|trident)/i.test(navigator.userAgent),a=document.createElement("a"),n;function i(s){var o=s;return r&&(a.setAttribute("href",o),o=a.href),a.setAttribute("href",o),{href:a.href,protocol:a.protocol?a.protocol.replace(/:$/,""):"",host:a.host,search:a.search?a.search.replace(/^\?/,""):"",hash:a.hash?a.hash.replace(/^#/,""):"",hostname:a.hostname,port:a.port,pathname:a.pathname.charAt(0)==="/"?a.pathname:"/"+a.pathname}}return n=i(window.location.href),function(o){var u=e.isString(o)?i(o):o;return u.protocol===n.protocol&&u.host===n.host}}():function(){return function(){return!0}}(),ce}var de,Je;function te(){if(Je)return de;Je=1;var e=k,t=y;function r(a){e.call(this,a??"canceled",e.ERR_CANCELED),this.name="CanceledError"}return t.inherits(r,e,{__CANCEL__:!0}),de=r,de}var pe,We;function sn(){return We||(We=1,pe=function(t){var r=/^([-+\w]{1,25})(:?\/\/|:)/.exec(t);return r&&r[1]||""}),pe}var he,Ve;function Xe(){if(Ve)return he;Ve=1;var e=y,t=Kr(),r=Gr(),a=vt,n=wt,i=nn(),s=an(),o=xt,u=k,f=te(),c=sn();return he=function(l){return new Promise(function(F,N){var I=l.data,M=l.headers,H=l.responseType,D;function je(){l.cancelToken&&l.cancelToken.unsubscribe(D),l.signal&&l.signal.removeEventListener("abort",D)}e.isFormData(I)&&e.isStandardBrowserEnv()&&delete M["Content-Type"];var d=new XMLHttpRequest;if(l.auth){var Tt=l.auth.username||"",Nt=l.auth.password?unescape(encodeURIComponent(l.auth.password)):"";M.Authorization="Basic "+btoa(Tt+":"+Nt)}var ie=n(l.baseURL,l.url);d.open(l.method.toUpperCase(),a(ie,l.params,l.paramsSerializer),!0),d.timeout=l.timeout;function qe(){if(!!d){var g="getAllResponseHeaders"in d?i(d.getAllResponseHeaders()):null,$=!H||H==="text"||H==="json"?d.responseText:d.response,_={data:$,status:d.status,statusText:d.statusText,headers:g,config:l,request:d};t(function(oe){F(oe),je()},function(oe){N(oe),je()},_),d=null}}if("onloadend"in d?d.onloadend=qe:d.onreadystatechange=function(){!d||d.readyState!==4||d.status===0&&!(d.responseURL&&d.responseURL.indexOf("file:")===0)||setTimeout(qe)},d.onabort=function(){!d||(N(new u("Request aborted",u.ECONNABORTED,l,d)),d=null)},d.onerror=function(){N(new u("Network Error",u.ERR_NETWORK,l,d,d)),d=null},d.ontimeout=function(){var $=l.timeout?"timeout of "+l.timeout+"ms exceeded":"timeout exceeded",_=l.transitional||o;l.timeoutErrorMessage&&($=l.timeoutErrorMessage),N(new u($,_.clarifyTimeoutError?u.ETIMEDOUT:u.ECONNABORTED,l,d)),d=null},e.isStandardBrowserEnv()){var Le=(l.withCredentials||s(ie))&&l.xsrfCookieName?r.read(l.xsrfCookieName):void 0;Le&&(M[l.xsrfHeaderName]=Le)}"setRequestHeader"in d&&e.forEach(M,function($,_){typeof I>"u"&&_.toLowerCase()==="content-type"?delete M[_]:d.setRequestHeader(_,$)}),e.isUndefined(l.withCredentials)||(d.withCredentials=!!l.withCredentials),H&&H!=="json"&&(d.responseType=l.responseType),typeof l.onDownloadProgress=="function"&&d.addEventListener("progress",l.onDownloadProgress),typeof l.onUploadProgress=="function"&&d.upload&&d.upload.addEventListener("progress",l.onUploadProgress),(l.cancelToken||l.signal)&&(D=function(g){!d||(N(!g||g&&g.type?new f:g),d.abort(),d=null)},l.cancelToken&&l.cancelToken.subscribe(D),l.signal&&(l.signal.aborted?D():l.signal.addEventListener("abort",D))),I||(I=null);var se=c(ie);if(se&&["http","https","file"].indexOf(se)===-1){N(new u("Unsupported protocol "+se+":",u.ERR_BAD_REQUEST,l));return}d.send(I)})},he}var me,Ye;function on(){return Ye||(Ye=1,me=null),me}var v=y,Qe=Yr,Ke=k,un=xt,ln=gt,fn={"Content-Type":"application/x-www-form-urlencoded"};function Ge(e,t){!v.isUndefined(e)&&v.isUndefined(e["Content-Type"])&&(e["Content-Type"]=t)}function cn(){var e;return(typeof XMLHttpRequest<"u"||typeof process<"u"&&Object.prototype.toString.call(process)==="[object process]")&&(e=Xe()),e}function dn(e,t,r){if(v.isString(e))try{return(t||JSON.parse)(e),v.trim(e)}catch(a){if(a.name!=="SyntaxError")throw a}return(r||JSON.stringify)(e)}var re={transitional:un,adapter:cn(),transformRequest:[function(t,r){if(Qe(r,"Accept"),Qe(r,"Content-Type"),v.isFormData(t)||v.isArrayBuffer(t)||v.isBuffer(t)||v.isStream(t)||v.isFile(t)||v.isBlob(t))return t;if(v.isArrayBufferView(t))return t.buffer;if(v.isURLSearchParams(t))return Ge(r,"application/x-www-form-urlencoded;charset=utf-8"),t.toString();var a=v.isObject(t),n=r&&r["Content-Type"],i;if((i=v.isFileList(t))||a&&n==="multipart/form-data"){var s=this.env&&this.env.FormData;return ln(i?{"files[]":t}:t,s&&new s)}else if(a||n==="application/json")return Ge(r,"application/json"),dn(t);return t}],transformResponse:[function(t){var r=this.transitional||re.transitional,a=r&&r.silentJSONParsing,n=r&&r.forcedJSONParsing,i=!a&&this.responseType==="json";if(i||n&&v.isString(t)&&t.length)try{return JSON.parse(t)}catch(s){if(i)throw s.name==="SyntaxError"?Ke.from(s,Ke.ERR_BAD_RESPONSE,this,null,this.response):s}return t}],timeout:0,xsrfCookieName:"XSRF-TOKEN",xsrfHeaderName:"X-XSRF-TOKEN",maxContentLength:-1,maxBodyLength:-1,env:{FormData:on()},validateStatus:function(t){return t>=200&&t<300},headers:{common:{Accept:"application/json, text/plain, */*"}}};v.forEach(["delete","get","head"],function(t){re.headers[t]={}});v.forEach(["post","put","patch"],function(t){re.headers[t]=v.merge(fn)});var $e=re,pn=y,hn=$e,mn=function(t,r,a){var n=this||hn;return pn.forEach(a,function(s){t=s.call(n,t,r)}),t},ve,Ze;function Rt(){return Ze||(Ze=1,ve=function(t){return!!(t&&t.__CANCEL__)}),ve}var et=y,ye=mn,vn=Rt(),yn=$e,bn=te();function be(e){if(e.cancelToken&&e.cancelToken.throwIfRequested(),e.signal&&e.signal.aborted)throw new bn}var En=function(t){be(t),t.headers=t.headers||{},t.data=ye.call(t,t.data,t.headers,t.transformRequest),t.headers=et.merge(t.headers.common||{},t.headers[t.method]||{},t.headers),et.forEach(["delete","get","head","post","put","patch","common"],function(n){delete t.headers[n]});var r=t.adapter||yn.adapter;return r(t).then(function(n){return be(t),n.data=ye.call(t,n.data,n.headers,t.transformResponse),n},function(n){return vn(n)||(be(t),n&&n.response&&(n.response.data=ye.call(t,n.response.data,n.response.headers,t.transformResponse))),Promise.reject(n)})},E=y,Ot=function(t,r){r=r||{};var a={};function n(c,p){return E.isPlainObject(c)&&E.isPlainObject(p)?E.merge(c,p):E.isPlainObject(p)?E.merge({},p):E.isArray(p)?p.slice():p}function i(c){if(E.isUndefined(r[c])){if(!E.isUndefined(t[c]))return n(void 0,t[c])}else return n(t[c],r[c])}function s(c){if(!E.isUndefined(r[c]))return n(void 0,r[c])}function o(c){if(E.isUndefined(r[c])){if(!E.isUndefined(t[c]))return n(void 0,t[c])}else return n(void 0,r[c])}function u(c){if(c in r)return n(t[c],r[c]);if(c in t)return n(void 0,t[c])}var f={url:s,method:s,data:s,baseURL:o,transformRequest:o,transformResponse:o,paramsSerializer:o,timeout:o,timeoutMessage:o,withCredentials:o,adapter:o,responseType:o,xsrfCookieName:o,xsrfHeaderName:o,onUploadProgress:o,onDownloadProgress:o,decompress:o,maxContentLength:o,maxBodyLength:o,beforeRedirect:o,transport:o,httpAgent:o,httpsAgent:o,cancelToken:o,socketPath:o,responseEncoding:o,validateStatus:u};return E.forEach(Object.keys(t).concat(Object.keys(r)),function(p){var l=f[p]||i,m=l(p);E.isUndefined(m)&&l!==u||(a[p]=m)}),a},Ee,tt;function At(){return tt||(tt=1,Ee={version:"0.27.2"}),Ee}var xn=At().version,A=k,Ue={};["object","boolean","number","function","string","symbol"].forEach(function(e,t){Ue[e]=function(a){return typeof a===e||"a"+(t<1?"n ":" ")+e}});var rt={};Ue.transitional=function(t,r,a){function n(i,s){return"[Axios v"+xn+"] Transitional option '"+i+"'"+s+(a?". "+a:"")}return function(i,s,o){if(t===!1)throw new A(n(s," has been removed"+(r?" in "+r:"")),A.ERR_DEPRECATED);return r&&!rt[s]&&(rt[s]=!0,console.warn(n(s," has been deprecated since v"+r+" and will be removed in the near future"))),t?t(i,s,o):!0}};function gn(e,t,r){if(typeof e!="object")throw new A("options must be an object",A.ERR_BAD_OPTION_VALUE);for(var a=Object.keys(e),n=a.length;n-- >0;){var i=a[n],s=t[i];if(s){var o=e[i],u=o===void 0||s(o,i,e);if(u!==!0)throw new A("option "+i+" must be "+u,A.ERR_BAD_OPTION_VALUE);continue}if(r!==!0)throw new A("Unknown option "+i,A.ERR_BAD_OPTION)}}var wn={assertOptions:gn,validators:Ue},St=y,Rn=vt,nt=Vr,at=En,ne=Ot,On=wt,Ct=wn,j=Ct.validators;function B(e){this.defaults=e,this.interceptors={request:new nt,response:new nt}}B.prototype.request=function(t,r){typeof t=="string"?(r=r||{},r.url=t):r=t||{},r=ne(this.defaults,r),r.method?r.method=r.method.toLowerCase():this.defaults.method?r.method=this.defaults.method.toLowerCase():r.method="get";var a=r.transitional;a!==void 0&&Ct.assertOptions(a,{silentJSONParsing:j.transitional(j.boolean),forcedJSONParsing:j.transitional(j.boolean),clarifyTimeoutError:j.transitional(j.boolean)},!1);var n=[],i=!0;this.interceptors.request.forEach(function(m){typeof m.runWhen=="function"&&m.runWhen(r)===!1||(i=i&&m.synchronous,n.unshift(m.fulfilled,m.rejected))});var s=[];this.interceptors.response.forEach(function(m){s.push(m.fulfilled,m.rejected)});var o;if(!i){var u=[at,void 0];for(Array.prototype.unshift.apply(u,n),u=u.concat(s),o=Promise.resolve(r);u.length;)o=o.then(u.shift(),u.shift());return o}for(var f=r;n.length;){var c=n.shift(),p=n.shift();try{f=c(f)}catch(l){p(l);break}}try{o=at(f)}catch(l){return Promise.reject(l)}for(;s.length;)o=o.then(s.shift(),s.shift());return o};B.prototype.getUri=function(t){t=ne(this.defaults,t);var r=On(t.baseURL,t.url);return Rn(r,t.params,t.paramsSerializer)};St.forEach(["delete","get","head","options"],function(t){B.prototype[t]=function(r,a){return this.request(ne(a||{},{method:t,url:r,data:(a||{}).data}))}});St.forEach(["post","put","patch"],function(t){function r(a){return function(i,s,o){return this.request(ne(o||{},{method:t,headers:a?{"Content-Type":"multipart/form-data"}:{},url:i,data:s}))}}B.prototype[t]=r(),B.prototype[t+"Form"]=r(!0)});var An=B,xe,it;function Sn(){if(it)return xe;it=1;var e=te();function t(r){if(typeof r!="function")throw new TypeError("executor must be a function.");var a;this.promise=new Promise(function(s){a=s});var n=this;this.promise.then(function(i){if(!!n._listeners){var s,o=n._listeners.length;for(s=0;s<o;s++)n._listeners[s](i);n._listeners=null}}),this.promise.then=function(i){var s,o=new Promise(function(u){n.subscribe(u),s=u}).then(i);return o.cancel=function(){n.unsubscribe(s)},o},r(function(s){n.reason||(n.reason=new e(s),a(n.reason))})}return t.prototype.throwIfRequested=function(){if(this.reason)throw this.reason},t.prototype.subscribe=function(a){if(this.reason){a(this.reason);return}this._listeners?this._listeners.push(a):this._listeners=[a]},t.prototype.unsubscribe=function(a){if(!!this._listeners){var n=this._listeners.indexOf(a);n!==-1&&this._listeners.splice(n,1)}},t.source=function(){var a,n=new t(function(s){a=s});return{token:n,cancel:a}},xe=t,xe}var ge,st;function Cn(){return st||(st=1,ge=function(t){return function(a){return t.apply(null,a)}}),ge}var we,ot;function _n(){if(ot)return we;ot=1;var e=y;return we=function(r){return e.isObject(r)&&r.isAxiosError===!0},we}var ut=y,Pn=pt,Q=An,Tn=Ot,Nn=$e;function _t(e){var t=new Q(e),r=Pn(Q.prototype.request,t);return ut.extend(r,Q.prototype,t),ut.extend(r,t),r.create=function(n){return _t(Tn(e,n))},r}var b=_t(Nn);b.Axios=Q;b.CanceledError=te();b.CancelToken=Sn();b.isCancel=Rt();b.VERSION=At().version;b.toFormData=gt;b.AxiosError=k;b.Cancel=b.CanceledError;b.all=function(t){return Promise.all(t)};b.spread=Cn();b.isAxiosError=_n();Ce.exports=b;Ce.exports.default=b;(function(e){e.exports=Ce.exports})(dt);const Dn=$t(dt.exports);var q={exports:{}},ae={};/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var $n=h.exports,Un=Symbol.for("react.element"),jn=Symbol.for("react.fragment"),qn=Object.prototype.hasOwnProperty,Ln=$n.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,Bn={key:!0,ref:!0,__self:!0,__source:!0};function Pt(e,t,r){var a,n={},i=null,s=null;r!==void 0&&(i=""+r),t.key!==void 0&&(i=""+t.key),t.ref!==void 0&&(s=t.ref);for(a in t)qn.call(t,a)&&!Bn.hasOwnProperty(a)&&(n[a]=t[a]);if(e&&e.defaultProps)for(a in t=e.defaultProps,t)n[a]===void 0&&(n[a]=t[a]);return{$$typeof:Un,type:e,key:i,ref:s,props:n,_owner:Ln.current}}ae.Fragment=jn;ae.jsx=Pt;ae.jsxs=Pt;(function(e){e.exports=ae})(q);function In(){const[e,t]=h.exports.useState("");return q.exports.jsxs("form",{className:"newsletter",onSubmit:async r=>{r.preventDefault();const a=await Dn.post("https://jsonplaceholder.typicode.com/users");console.log(a),Or.success(`Thanks for subscribing ${e}!`)},children:[q.exports.jsx("h1",{children:"Subscribe for more content"}),q.exports.jsx("input",{type:"text",placeholder:"your@email.com",onChange:r=>t(r.target.value)}),q.exports.jsx("button",{children:"Subscribe"}),q.exports.jsx(Rr,{})]})}export{In as default};
