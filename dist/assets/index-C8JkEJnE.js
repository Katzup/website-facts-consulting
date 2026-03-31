function Ty(e,t){for(var n=0;n<t.length;n++){const i=t[n];if(typeof i!="string"&&!Array.isArray(i)){for(const r in i)if(r!=="default"&&!(r in e)){const a=Object.getOwnPropertyDescriptor(i,r);a&&Object.defineProperty(e,r,a.get?a:{enumerable:!0,get:()=>i[r]})}}}return Object.freeze(Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}))}(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const r of document.querySelectorAll('link[rel="modulepreload"]'))i(r);new MutationObserver(r=>{for(const a of r)if(a.type==="childList")for(const s of a.addedNodes)s.tagName==="LINK"&&s.rel==="modulepreload"&&i(s)}).observe(document,{childList:!0,subtree:!0});function n(r){const a={};return r.integrity&&(a.integrity=r.integrity),r.referrerPolicy&&(a.referrerPolicy=r.referrerPolicy),r.crossOrigin==="use-credentials"?a.credentials="include":r.crossOrigin==="anonymous"?a.credentials="omit":a.credentials="same-origin",a}function i(r){if(r.ep)return;r.ep=!0;const a=n(r);fetch(r.href,a)}})();function Om(e){return e&&e.__esModule&&Object.prototype.hasOwnProperty.call(e,"default")?e.default:e}var Lm={exports:{}},fs={},Fm={exports:{}},L={};/**
 * @license React
 * react.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Nr=Symbol.for("react.element"),Py=Symbol.for("react.portal"),Ey=Symbol.for("react.fragment"),Ay=Symbol.for("react.strict_mode"),jy=Symbol.for("react.profiler"),Ny=Symbol.for("react.provider"),My=Symbol.for("react.context"),Ry=Symbol.for("react.forward_ref"),Iy=Symbol.for("react.suspense"),Dy=Symbol.for("react.memo"),zy=Symbol.for("react.lazy"),_u=Symbol.iterator;function Oy(e){return e===null||typeof e!="object"?null:(e=_u&&e[_u]||e["@@iterator"],typeof e=="function"?e:null)}var _m={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},Bm=Object.assign,Vm={};function yi(e,t,n){this.props=e,this.context=t,this.refs=Vm,this.updater=n||_m}yi.prototype.isReactComponent={};yi.prototype.setState=function(e,t){if(typeof e!="object"&&typeof e!="function"&&e!=null)throw Error("setState(...): takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,e,t,"setState")};yi.prototype.forceUpdate=function(e){this.updater.enqueueForceUpdate(this,e,"forceUpdate")};function Um(){}Um.prototype=yi.prototype;function rc(e,t,n){this.props=e,this.context=t,this.refs=Vm,this.updater=n||_m}var ac=rc.prototype=new Um;ac.constructor=rc;Bm(ac,yi.prototype);ac.isPureReactComponent=!0;var Bu=Array.isArray,Wm=Object.prototype.hasOwnProperty,sc={current:null},qm={key:!0,ref:!0,__self:!0,__source:!0};function $m(e,t,n){var i,r={},a=null,s=null;if(t!=null)for(i in t.ref!==void 0&&(s=t.ref),t.key!==void 0&&(a=""+t.key),t)Wm.call(t,i)&&!qm.hasOwnProperty(i)&&(r[i]=t[i]);var o=arguments.length-2;if(o===1)r.children=n;else if(1<o){for(var l=Array(o),c=0;c<o;c++)l[c]=arguments[c+2];r.children=l}if(e&&e.defaultProps)for(i in o=e.defaultProps,o)r[i]===void 0&&(r[i]=o[i]);return{$$typeof:Nr,type:e,key:a,ref:s,props:r,_owner:sc.current}}function Ly(e,t){return{$$typeof:Nr,type:e.type,key:t,ref:e.ref,props:e.props,_owner:e._owner}}function oc(e){return typeof e=="object"&&e!==null&&e.$$typeof===Nr}function Fy(e){var t={"=":"=0",":":"=2"};return"$"+e.replace(/[=:]/g,function(n){return t[n]})}var Vu=/\/+/g;function Vs(e,t){return typeof e=="object"&&e!==null&&e.key!=null?Fy(""+e.key):t.toString(36)}function ma(e,t,n,i,r){var a=typeof e;(a==="undefined"||a==="boolean")&&(e=null);var s=!1;if(e===null)s=!0;else switch(a){case"string":case"number":s=!0;break;case"object":switch(e.$$typeof){case Nr:case Py:s=!0}}if(s)return s=e,r=r(s),e=i===""?"."+Vs(s,0):i,Bu(r)?(n="",e!=null&&(n=e.replace(Vu,"$&/")+"/"),ma(r,t,n,"",function(c){return c})):r!=null&&(oc(r)&&(r=Ly(r,n+(!r.key||s&&s.key===r.key?"":(""+r.key).replace(Vu,"$&/")+"/")+e)),t.push(r)),1;if(s=0,i=i===""?".":i+":",Bu(e))for(var o=0;o<e.length;o++){a=e[o];var l=i+Vs(a,o);s+=ma(a,t,n,l,r)}else if(l=Oy(e),typeof l=="function")for(e=l.call(e),o=0;!(a=e.next()).done;)a=a.value,l=i+Vs(a,o++),s+=ma(a,t,n,l,r);else if(a==="object")throw t=String(e),Error("Objects are not valid as a React child (found: "+(t==="[object Object]"?"object with keys {"+Object.keys(e).join(", ")+"}":t)+"). If you meant to render a collection of children, use an array instead.");return s}function Ur(e,t,n){if(e==null)return e;var i=[],r=0;return ma(e,i,"","",function(a){return t.call(n,a,r++)}),i}function _y(e){if(e._status===-1){var t=e._result;t=t(),t.then(function(n){(e._status===0||e._status===-1)&&(e._status=1,e._result=n)},function(n){(e._status===0||e._status===-1)&&(e._status=2,e._result=n)}),e._status===-1&&(e._status=0,e._result=t)}if(e._status===1)return e._result.default;throw e._result}var Se={current:null},pa={transition:null},By={ReactCurrentDispatcher:Se,ReactCurrentBatchConfig:pa,ReactCurrentOwner:sc};function Hm(){throw Error("act(...) is not supported in production builds of React.")}L.Children={map:Ur,forEach:function(e,t,n){Ur(e,function(){t.apply(this,arguments)},n)},count:function(e){var t=0;return Ur(e,function(){t++}),t},toArray:function(e){return Ur(e,function(t){return t})||[]},only:function(e){if(!oc(e))throw Error("React.Children.only expected to receive a single React element child.");return e}};L.Component=yi;L.Fragment=Ey;L.Profiler=jy;L.PureComponent=rc;L.StrictMode=Ay;L.Suspense=Iy;L.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=By;L.act=Hm;L.cloneElement=function(e,t,n){if(e==null)throw Error("React.cloneElement(...): The argument must be a React element, but you passed "+e+".");var i=Bm({},e.props),r=e.key,a=e.ref,s=e._owner;if(t!=null){if(t.ref!==void 0&&(a=t.ref,s=sc.current),t.key!==void 0&&(r=""+t.key),e.type&&e.type.defaultProps)var o=e.type.defaultProps;for(l in t)Wm.call(t,l)&&!qm.hasOwnProperty(l)&&(i[l]=t[l]===void 0&&o!==void 0?o[l]:t[l])}var l=arguments.length-2;if(l===1)i.children=n;else if(1<l){o=Array(l);for(var c=0;c<l;c++)o[c]=arguments[c+2];i.children=o}return{$$typeof:Nr,type:e.type,key:r,ref:a,props:i,_owner:s}};L.createContext=function(e){return e={$$typeof:My,_currentValue:e,_currentValue2:e,_threadCount:0,Provider:null,Consumer:null,_defaultValue:null,_globalName:null},e.Provider={$$typeof:Ny,_context:e},e.Consumer=e};L.createElement=$m;L.createFactory=function(e){var t=$m.bind(null,e);return t.type=e,t};L.createRef=function(){return{current:null}};L.forwardRef=function(e){return{$$typeof:Ry,render:e}};L.isValidElement=oc;L.lazy=function(e){return{$$typeof:zy,_payload:{_status:-1,_result:e},_init:_y}};L.memo=function(e,t){return{$$typeof:Dy,type:e,compare:t===void 0?null:t}};L.startTransition=function(e){var t=pa.transition;pa.transition={};try{e()}finally{pa.transition=t}};L.unstable_act=Hm;L.useCallback=function(e,t){return Se.current.useCallback(e,t)};L.useContext=function(e){return Se.current.useContext(e)};L.useDebugValue=function(){};L.useDeferredValue=function(e){return Se.current.useDeferredValue(e)};L.useEffect=function(e,t){return Se.current.useEffect(e,t)};L.useId=function(){return Se.current.useId()};L.useImperativeHandle=function(e,t,n){return Se.current.useImperativeHandle(e,t,n)};L.useInsertionEffect=function(e,t){return Se.current.useInsertionEffect(e,t)};L.useLayoutEffect=function(e,t){return Se.current.useLayoutEffect(e,t)};L.useMemo=function(e,t){return Se.current.useMemo(e,t)};L.useReducer=function(e,t,n){return Se.current.useReducer(e,t,n)};L.useRef=function(e){return Se.current.useRef(e)};L.useState=function(e){return Se.current.useState(e)};L.useSyncExternalStore=function(e,t,n){return Se.current.useSyncExternalStore(e,t,n)};L.useTransition=function(){return Se.current.useTransition()};L.version="18.3.1";Fm.exports=L;var g=Fm.exports;const Vy=Om(g),ms=Ty({__proto__:null,default:Vy},[g]);/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Uy=g,Wy=Symbol.for("react.element"),qy=Symbol.for("react.fragment"),$y=Object.prototype.hasOwnProperty,Hy=Uy.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,Gy={key:!0,ref:!0,__self:!0,__source:!0};function Gm(e,t,n){var i,r={},a=null,s=null;n!==void 0&&(a=""+n),t.key!==void 0&&(a=""+t.key),t.ref!==void 0&&(s=t.ref);for(i in t)$y.call(t,i)&&!Gy.hasOwnProperty(i)&&(r[i]=t[i]);if(e&&e.defaultProps)for(i in t=e.defaultProps,t)r[i]===void 0&&(r[i]=t[i]);return{$$typeof:Wy,type:e,key:a,ref:s,props:r,_owner:Hy.current}}fs.Fragment=qy;fs.jsx=Gm;fs.jsxs=Gm;Lm.exports=fs;var u=Lm.exports,Km={exports:{}},Fe={},Qm={exports:{}},Ym={};/**
 * @license React
 * scheduler.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */(function(e){function t(A,M){var z=A.length;A.push(M);e:for(;0<z;){var V=z-1>>>1,ce=A[V];if(0<r(ce,M))A[V]=M,A[z]=ce,z=V;else break e}}function n(A){return A.length===0?null:A[0]}function i(A){if(A.length===0)return null;var M=A[0],z=A.pop();if(z!==M){A[0]=z;e:for(var V=0,ce=A.length,Br=ce>>>1;V<Br;){var on=2*(V+1)-1,Bs=A[on],ln=on+1,Vr=A[ln];if(0>r(Bs,z))ln<ce&&0>r(Vr,Bs)?(A[V]=Vr,A[ln]=z,V=ln):(A[V]=Bs,A[on]=z,V=on);else if(ln<ce&&0>r(Vr,z))A[V]=Vr,A[ln]=z,V=ln;else break e}}return M}function r(A,M){var z=A.sortIndex-M.sortIndex;return z!==0?z:A.id-M.id}if(typeof performance=="object"&&typeof performance.now=="function"){var a=performance;e.unstable_now=function(){return a.now()}}else{var s=Date,o=s.now();e.unstable_now=function(){return s.now()-o}}var l=[],c=[],d=1,f=null,m=3,x=!1,w=!1,v=!1,b=typeof setTimeout=="function"?setTimeout:null,p=typeof clearTimeout=="function"?clearTimeout:null,h=typeof setImmediate<"u"?setImmediate:null;typeof navigator<"u"&&navigator.scheduling!==void 0&&navigator.scheduling.isInputPending!==void 0&&navigator.scheduling.isInputPending.bind(navigator.scheduling);function y(A){for(var M=n(c);M!==null;){if(M.callback===null)i(c);else if(M.startTime<=A)i(c),M.sortIndex=M.expirationTime,t(l,M);else break;M=n(c)}}function C(A){if(v=!1,y(A),!w)if(n(l)!==null)w=!0,mt(k);else{var M=n(c);M!==null&&ee(C,M.startTime-A)}}function k(A,M){w=!1,v&&(v=!1,p(T),T=-1),x=!0;var z=m;try{for(y(M),f=n(l);f!==null&&(!(f.expirationTime>M)||A&&!W());){var V=f.callback;if(typeof V=="function"){f.callback=null,m=f.priorityLevel;var ce=V(f.expirationTime<=M);M=e.unstable_now(),typeof ce=="function"?f.callback=ce:f===n(l)&&i(l),y(M)}else i(l);f=n(l)}if(f!==null)var Br=!0;else{var on=n(c);on!==null&&ee(C,on.startTime-M),Br=!1}return Br}finally{f=null,m=z,x=!1}}var P=!1,S=null,T=-1,D=5,N=-1;function W(){return!(e.unstable_now()-N<D)}function F(){if(S!==null){var A=e.unstable_now();N=A;var M=!0;try{M=S(!0,A)}finally{M?it():(P=!1,S=null)}}else P=!1}var it;if(typeof h=="function")it=function(){h(F)};else if(typeof MessageChannel<"u"){var rt=new MessageChannel,Ti=rt.port2;rt.port1.onmessage=F,it=function(){Ti.postMessage(null)}}else it=function(){b(F,0)};function mt(A){S=A,P||(P=!0,it())}function ee(A,M){T=b(function(){A(e.unstable_now())},M)}e.unstable_IdlePriority=5,e.unstable_ImmediatePriority=1,e.unstable_LowPriority=4,e.unstable_NormalPriority=3,e.unstable_Profiling=null,e.unstable_UserBlockingPriority=2,e.unstable_cancelCallback=function(A){A.callback=null},e.unstable_continueExecution=function(){w||x||(w=!0,mt(k))},e.unstable_forceFrameRate=function(A){0>A||125<A?console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"):D=0<A?Math.floor(1e3/A):5},e.unstable_getCurrentPriorityLevel=function(){return m},e.unstable_getFirstCallbackNode=function(){return n(l)},e.unstable_next=function(A){switch(m){case 1:case 2:case 3:var M=3;break;default:M=m}var z=m;m=M;try{return A()}finally{m=z}},e.unstable_pauseExecution=function(){},e.unstable_requestPaint=function(){},e.unstable_runWithPriority=function(A,M){switch(A){case 1:case 2:case 3:case 4:case 5:break;default:A=3}var z=m;m=A;try{return M()}finally{m=z}},e.unstable_scheduleCallback=function(A,M,z){var V=e.unstable_now();switch(typeof z=="object"&&z!==null?(z=z.delay,z=typeof z=="number"&&0<z?V+z:V):z=V,A){case 1:var ce=-1;break;case 2:ce=250;break;case 5:ce=1073741823;break;case 4:ce=1e4;break;default:ce=5e3}return ce=z+ce,A={id:d++,callback:M,priorityLevel:A,startTime:z,expirationTime:ce,sortIndex:-1},z>V?(A.sortIndex=z,t(c,A),n(l)===null&&A===n(c)&&(v?(p(T),T=-1):v=!0,ee(C,z-V))):(A.sortIndex=ce,t(l,A),w||x||(w=!0,mt(k))),A},e.unstable_shouldYield=W,e.unstable_wrapCallback=function(A){var M=m;return function(){var z=m;m=M;try{return A.apply(this,arguments)}finally{m=z}}}})(Ym);Qm.exports=Ym;var Ky=Qm.exports;/**
 * @license React
 * react-dom.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Qy=g,Oe=Ky;function E(e){for(var t="https://reactjs.org/docs/error-decoder.html?invariant="+e,n=1;n<arguments.length;n++)t+="&args[]="+encodeURIComponent(arguments[n]);return"Minified React error #"+e+"; visit "+t+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}var Xm=new Set,ir={};function En(e,t){li(e,t),li(e+"Capture",t)}function li(e,t){for(ir[e]=t,e=0;e<t.length;e++)Xm.add(t[e])}var Ct=!(typeof window>"u"||typeof window.document>"u"||typeof window.document.createElement>"u"),_o=Object.prototype.hasOwnProperty,Yy=/^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/,Uu={},Wu={};function Xy(e){return _o.call(Wu,e)?!0:_o.call(Uu,e)?!1:Yy.test(e)?Wu[e]=!0:(Uu[e]=!0,!1)}function Zy(e,t,n,i){if(n!==null&&n.type===0)return!1;switch(typeof t){case"function":case"symbol":return!0;case"boolean":return i?!1:n!==null?!n.acceptsBooleans:(e=e.toLowerCase().slice(0,5),e!=="data-"&&e!=="aria-");default:return!1}}function Jy(e,t,n,i){if(t===null||typeof t>"u"||Zy(e,t,n,i))return!0;if(i)return!1;if(n!==null)switch(n.type){case 3:return!t;case 4:return t===!1;case 5:return isNaN(t);case 6:return isNaN(t)||1>t}return!1}function Te(e,t,n,i,r,a,s){this.acceptsBooleans=t===2||t===3||t===4,this.attributeName=i,this.attributeNamespace=r,this.mustUseProperty=n,this.propertyName=e,this.type=t,this.sanitizeURL=a,this.removeEmptyString=s}var he={};"children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style".split(" ").forEach(function(e){he[e]=new Te(e,0,!1,e,null,!1,!1)});[["acceptCharset","accept-charset"],["className","class"],["htmlFor","for"],["httpEquiv","http-equiv"]].forEach(function(e){var t=e[0];he[t]=new Te(t,1,!1,e[1],null,!1,!1)});["contentEditable","draggable","spellCheck","value"].forEach(function(e){he[e]=new Te(e,2,!1,e.toLowerCase(),null,!1,!1)});["autoReverse","externalResourcesRequired","focusable","preserveAlpha"].forEach(function(e){he[e]=new Te(e,2,!1,e,null,!1,!1)});"allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture disableRemotePlayback formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope".split(" ").forEach(function(e){he[e]=new Te(e,3,!1,e.toLowerCase(),null,!1,!1)});["checked","multiple","muted","selected"].forEach(function(e){he[e]=new Te(e,3,!0,e,null,!1,!1)});["capture","download"].forEach(function(e){he[e]=new Te(e,4,!1,e,null,!1,!1)});["cols","rows","size","span"].forEach(function(e){he[e]=new Te(e,6,!1,e,null,!1,!1)});["rowSpan","start"].forEach(function(e){he[e]=new Te(e,5,!1,e.toLowerCase(),null,!1,!1)});var lc=/[\-:]([a-z])/g;function cc(e){return e[1].toUpperCase()}"accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height".split(" ").forEach(function(e){var t=e.replace(lc,cc);he[t]=new Te(t,1,!1,e,null,!1,!1)});"xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type".split(" ").forEach(function(e){var t=e.replace(lc,cc);he[t]=new Te(t,1,!1,e,"http://www.w3.org/1999/xlink",!1,!1)});["xml:base","xml:lang","xml:space"].forEach(function(e){var t=e.replace(lc,cc);he[t]=new Te(t,1,!1,e,"http://www.w3.org/XML/1998/namespace",!1,!1)});["tabIndex","crossOrigin"].forEach(function(e){he[e]=new Te(e,1,!1,e.toLowerCase(),null,!1,!1)});he.xlinkHref=new Te("xlinkHref",1,!1,"xlink:href","http://www.w3.org/1999/xlink",!0,!1);["src","href","action","formAction"].forEach(function(e){he[e]=new Te(e,1,!1,e.toLowerCase(),null,!0,!0)});function uc(e,t,n,i){var r=he.hasOwnProperty(t)?he[t]:null;(r!==null?r.type!==0:i||!(2<t.length)||t[0]!=="o"&&t[0]!=="O"||t[1]!=="n"&&t[1]!=="N")&&(Jy(t,n,r,i)&&(n=null),i||r===null?Xy(t)&&(n===null?e.removeAttribute(t):e.setAttribute(t,""+n)):r.mustUseProperty?e[r.propertyName]=n===null?r.type===3?!1:"":n:(t=r.attributeName,i=r.attributeNamespace,n===null?e.removeAttribute(t):(r=r.type,n=r===3||r===4&&n===!0?"":""+n,i?e.setAttributeNS(i,t,n):e.setAttribute(t,n))))}var Et=Qy.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED,Wr=Symbol.for("react.element"),On=Symbol.for("react.portal"),Ln=Symbol.for("react.fragment"),dc=Symbol.for("react.strict_mode"),Bo=Symbol.for("react.profiler"),Zm=Symbol.for("react.provider"),Jm=Symbol.for("react.context"),fc=Symbol.for("react.forward_ref"),Vo=Symbol.for("react.suspense"),Uo=Symbol.for("react.suspense_list"),mc=Symbol.for("react.memo"),Dt=Symbol.for("react.lazy"),ep=Symbol.for("react.offscreen"),qu=Symbol.iterator;function Pi(e){return e===null||typeof e!="object"?null:(e=qu&&e[qu]||e["@@iterator"],typeof e=="function"?e:null)}var J=Object.assign,Us;function Li(e){if(Us===void 0)try{throw Error()}catch(n){var t=n.stack.trim().match(/\n( *(at )?)/);Us=t&&t[1]||""}return`
`+Us+e}var Ws=!1;function qs(e,t){if(!e||Ws)return"";Ws=!0;var n=Error.prepareStackTrace;Error.prepareStackTrace=void 0;try{if(t)if(t=function(){throw Error()},Object.defineProperty(t.prototype,"props",{set:function(){throw Error()}}),typeof Reflect=="object"&&Reflect.construct){try{Reflect.construct(t,[])}catch(c){var i=c}Reflect.construct(e,[],t)}else{try{t.call()}catch(c){i=c}e.call(t.prototype)}else{try{throw Error()}catch(c){i=c}e()}}catch(c){if(c&&i&&typeof c.stack=="string"){for(var r=c.stack.split(`
`),a=i.stack.split(`
`),s=r.length-1,o=a.length-1;1<=s&&0<=o&&r[s]!==a[o];)o--;for(;1<=s&&0<=o;s--,o--)if(r[s]!==a[o]){if(s!==1||o!==1)do if(s--,o--,0>o||r[s]!==a[o]){var l=`
`+r[s].replace(" at new "," at ");return e.displayName&&l.includes("<anonymous>")&&(l=l.replace("<anonymous>",e.displayName)),l}while(1<=s&&0<=o);break}}}finally{Ws=!1,Error.prepareStackTrace=n}return(e=e?e.displayName||e.name:"")?Li(e):""}function ex(e){switch(e.tag){case 5:return Li(e.type);case 16:return Li("Lazy");case 13:return Li("Suspense");case 19:return Li("SuspenseList");case 0:case 2:case 15:return e=qs(e.type,!1),e;case 11:return e=qs(e.type.render,!1),e;case 1:return e=qs(e.type,!0),e;default:return""}}function Wo(e){if(e==null)return null;if(typeof e=="function")return e.displayName||e.name||null;if(typeof e=="string")return e;switch(e){case Ln:return"Fragment";case On:return"Portal";case Bo:return"Profiler";case dc:return"StrictMode";case Vo:return"Suspense";case Uo:return"SuspenseList"}if(typeof e=="object")switch(e.$$typeof){case Jm:return(e.displayName||"Context")+".Consumer";case Zm:return(e._context.displayName||"Context")+".Provider";case fc:var t=e.render;return e=e.displayName,e||(e=t.displayName||t.name||"",e=e!==""?"ForwardRef("+e+")":"ForwardRef"),e;case mc:return t=e.displayName||null,t!==null?t:Wo(e.type)||"Memo";case Dt:t=e._payload,e=e._init;try{return Wo(e(t))}catch{}}return null}function tx(e){var t=e.type;switch(e.tag){case 24:return"Cache";case 9:return(t.displayName||"Context")+".Consumer";case 10:return(t._context.displayName||"Context")+".Provider";case 18:return"DehydratedFragment";case 11:return e=t.render,e=e.displayName||e.name||"",t.displayName||(e!==""?"ForwardRef("+e+")":"ForwardRef");case 7:return"Fragment";case 5:return t;case 4:return"Portal";case 3:return"Root";case 6:return"Text";case 16:return Wo(t);case 8:return t===dc?"StrictMode":"Mode";case 22:return"Offscreen";case 12:return"Profiler";case 21:return"Scope";case 13:return"Suspense";case 19:return"SuspenseList";case 25:return"TracingMarker";case 1:case 0:case 17:case 2:case 14:case 15:if(typeof t=="function")return t.displayName||t.name||null;if(typeof t=="string")return t}return null}function Xt(e){switch(typeof e){case"boolean":case"number":case"string":case"undefined":return e;case"object":return e;default:return""}}function tp(e){var t=e.type;return(e=e.nodeName)&&e.toLowerCase()==="input"&&(t==="checkbox"||t==="radio")}function nx(e){var t=tp(e)?"checked":"value",n=Object.getOwnPropertyDescriptor(e.constructor.prototype,t),i=""+e[t];if(!e.hasOwnProperty(t)&&typeof n<"u"&&typeof n.get=="function"&&typeof n.set=="function"){var r=n.get,a=n.set;return Object.defineProperty(e,t,{configurable:!0,get:function(){return r.call(this)},set:function(s){i=""+s,a.call(this,s)}}),Object.defineProperty(e,t,{enumerable:n.enumerable}),{getValue:function(){return i},setValue:function(s){i=""+s},stopTracking:function(){e._valueTracker=null,delete e[t]}}}}function qr(e){e._valueTracker||(e._valueTracker=nx(e))}function np(e){if(!e)return!1;var t=e._valueTracker;if(!t)return!0;var n=t.getValue(),i="";return e&&(i=tp(e)?e.checked?"true":"false":e.value),e=i,e!==n?(t.setValue(e),!0):!1}function Na(e){if(e=e||(typeof document<"u"?document:void 0),typeof e>"u")return null;try{return e.activeElement||e.body}catch{return e.body}}function qo(e,t){var n=t.checked;return J({},t,{defaultChecked:void 0,defaultValue:void 0,value:void 0,checked:n??e._wrapperState.initialChecked})}function $u(e,t){var n=t.defaultValue==null?"":t.defaultValue,i=t.checked!=null?t.checked:t.defaultChecked;n=Xt(t.value!=null?t.value:n),e._wrapperState={initialChecked:i,initialValue:n,controlled:t.type==="checkbox"||t.type==="radio"?t.checked!=null:t.value!=null}}function ip(e,t){t=t.checked,t!=null&&uc(e,"checked",t,!1)}function $o(e,t){ip(e,t);var n=Xt(t.value),i=t.type;if(n!=null)i==="number"?(n===0&&e.value===""||e.value!=n)&&(e.value=""+n):e.value!==""+n&&(e.value=""+n);else if(i==="submit"||i==="reset"){e.removeAttribute("value");return}t.hasOwnProperty("value")?Ho(e,t.type,n):t.hasOwnProperty("defaultValue")&&Ho(e,t.type,Xt(t.defaultValue)),t.checked==null&&t.defaultChecked!=null&&(e.defaultChecked=!!t.defaultChecked)}function Hu(e,t,n){if(t.hasOwnProperty("value")||t.hasOwnProperty("defaultValue")){var i=t.type;if(!(i!=="submit"&&i!=="reset"||t.value!==void 0&&t.value!==null))return;t=""+e._wrapperState.initialValue,n||t===e.value||(e.value=t),e.defaultValue=t}n=e.name,n!==""&&(e.name=""),e.defaultChecked=!!e._wrapperState.initialChecked,n!==""&&(e.name=n)}function Ho(e,t,n){(t!=="number"||Na(e.ownerDocument)!==e)&&(n==null?e.defaultValue=""+e._wrapperState.initialValue:e.defaultValue!==""+n&&(e.defaultValue=""+n))}var Fi=Array.isArray;function Jn(e,t,n,i){if(e=e.options,t){t={};for(var r=0;r<n.length;r++)t["$"+n[r]]=!0;for(n=0;n<e.length;n++)r=t.hasOwnProperty("$"+e[n].value),e[n].selected!==r&&(e[n].selected=r),r&&i&&(e[n].defaultSelected=!0)}else{for(n=""+Xt(n),t=null,r=0;r<e.length;r++){if(e[r].value===n){e[r].selected=!0,i&&(e[r].defaultSelected=!0);return}t!==null||e[r].disabled||(t=e[r])}t!==null&&(t.selected=!0)}}function Go(e,t){if(t.dangerouslySetInnerHTML!=null)throw Error(E(91));return J({},t,{value:void 0,defaultValue:void 0,children:""+e._wrapperState.initialValue})}function Gu(e,t){var n=t.value;if(n==null){if(n=t.children,t=t.defaultValue,n!=null){if(t!=null)throw Error(E(92));if(Fi(n)){if(1<n.length)throw Error(E(93));n=n[0]}t=n}t==null&&(t=""),n=t}e._wrapperState={initialValue:Xt(n)}}function rp(e,t){var n=Xt(t.value),i=Xt(t.defaultValue);n!=null&&(n=""+n,n!==e.value&&(e.value=n),t.defaultValue==null&&e.defaultValue!==n&&(e.defaultValue=n)),i!=null&&(e.defaultValue=""+i)}function Ku(e){var t=e.textContent;t===e._wrapperState.initialValue&&t!==""&&t!==null&&(e.value=t)}function ap(e){switch(e){case"svg":return"http://www.w3.org/2000/svg";case"math":return"http://www.w3.org/1998/Math/MathML";default:return"http://www.w3.org/1999/xhtml"}}function Ko(e,t){return e==null||e==="http://www.w3.org/1999/xhtml"?ap(t):e==="http://www.w3.org/2000/svg"&&t==="foreignObject"?"http://www.w3.org/1999/xhtml":e}var $r,sp=function(e){return typeof MSApp<"u"&&MSApp.execUnsafeLocalFunction?function(t,n,i,r){MSApp.execUnsafeLocalFunction(function(){return e(t,n,i,r)})}:e}(function(e,t){if(e.namespaceURI!=="http://www.w3.org/2000/svg"||"innerHTML"in e)e.innerHTML=t;else{for($r=$r||document.createElement("div"),$r.innerHTML="<svg>"+t.valueOf().toString()+"</svg>",t=$r.firstChild;e.firstChild;)e.removeChild(e.firstChild);for(;t.firstChild;)e.appendChild(t.firstChild)}});function rr(e,t){if(t){var n=e.firstChild;if(n&&n===e.lastChild&&n.nodeType===3){n.nodeValue=t;return}}e.textContent=t}var qi={animationIterationCount:!0,aspectRatio:!0,borderImageOutset:!0,borderImageSlice:!0,borderImageWidth:!0,boxFlex:!0,boxFlexGroup:!0,boxOrdinalGroup:!0,columnCount:!0,columns:!0,flex:!0,flexGrow:!0,flexPositive:!0,flexShrink:!0,flexNegative:!0,flexOrder:!0,gridArea:!0,gridRow:!0,gridRowEnd:!0,gridRowSpan:!0,gridRowStart:!0,gridColumn:!0,gridColumnEnd:!0,gridColumnSpan:!0,gridColumnStart:!0,fontWeight:!0,lineClamp:!0,lineHeight:!0,opacity:!0,order:!0,orphans:!0,tabSize:!0,widows:!0,zIndex:!0,zoom:!0,fillOpacity:!0,floodOpacity:!0,stopOpacity:!0,strokeDasharray:!0,strokeDashoffset:!0,strokeMiterlimit:!0,strokeOpacity:!0,strokeWidth:!0},ix=["Webkit","ms","Moz","O"];Object.keys(qi).forEach(function(e){ix.forEach(function(t){t=t+e.charAt(0).toUpperCase()+e.substring(1),qi[t]=qi[e]})});function op(e,t,n){return t==null||typeof t=="boolean"||t===""?"":n||typeof t!="number"||t===0||qi.hasOwnProperty(e)&&qi[e]?(""+t).trim():t+"px"}function lp(e,t){e=e.style;for(var n in t)if(t.hasOwnProperty(n)){var i=n.indexOf("--")===0,r=op(n,t[n],i);n==="float"&&(n="cssFloat"),i?e.setProperty(n,r):e[n]=r}}var rx=J({menuitem:!0},{area:!0,base:!0,br:!0,col:!0,embed:!0,hr:!0,img:!0,input:!0,keygen:!0,link:!0,meta:!0,param:!0,source:!0,track:!0,wbr:!0});function Qo(e,t){if(t){if(rx[e]&&(t.children!=null||t.dangerouslySetInnerHTML!=null))throw Error(E(137,e));if(t.dangerouslySetInnerHTML!=null){if(t.children!=null)throw Error(E(60));if(typeof t.dangerouslySetInnerHTML!="object"||!("__html"in t.dangerouslySetInnerHTML))throw Error(E(61))}if(t.style!=null&&typeof t.style!="object")throw Error(E(62))}}function Yo(e,t){if(e.indexOf("-")===-1)return typeof t.is=="string";switch(e){case"annotation-xml":case"color-profile":case"font-face":case"font-face-src":case"font-face-uri":case"font-face-format":case"font-face-name":case"missing-glyph":return!1;default:return!0}}var Xo=null;function pc(e){return e=e.target||e.srcElement||window,e.correspondingUseElement&&(e=e.correspondingUseElement),e.nodeType===3?e.parentNode:e}var Zo=null,ei=null,ti=null;function Qu(e){if(e=Ir(e)){if(typeof Zo!="function")throw Error(E(280));var t=e.stateNode;t&&(t=ys(t),Zo(e.stateNode,e.type,t))}}function cp(e){ei?ti?ti.push(e):ti=[e]:ei=e}function up(){if(ei){var e=ei,t=ti;if(ti=ei=null,Qu(e),t)for(e=0;e<t.length;e++)Qu(t[e])}}function dp(e,t){return e(t)}function fp(){}var $s=!1;function mp(e,t,n){if($s)return e(t,n);$s=!0;try{return dp(e,t,n)}finally{$s=!1,(ei!==null||ti!==null)&&(fp(),up())}}function ar(e,t){var n=e.stateNode;if(n===null)return null;var i=ys(n);if(i===null)return null;n=i[t];e:switch(t){case"onClick":case"onClickCapture":case"onDoubleClick":case"onDoubleClickCapture":case"onMouseDown":case"onMouseDownCapture":case"onMouseMove":case"onMouseMoveCapture":case"onMouseUp":case"onMouseUpCapture":case"onMouseEnter":(i=!i.disabled)||(e=e.type,i=!(e==="button"||e==="input"||e==="select"||e==="textarea")),e=!i;break e;default:e=!1}if(e)return null;if(n&&typeof n!="function")throw Error(E(231,t,typeof n));return n}var Jo=!1;if(Ct)try{var Ei={};Object.defineProperty(Ei,"passive",{get:function(){Jo=!0}}),window.addEventListener("test",Ei,Ei),window.removeEventListener("test",Ei,Ei)}catch{Jo=!1}function ax(e,t,n,i,r,a,s,o,l){var c=Array.prototype.slice.call(arguments,3);try{t.apply(n,c)}catch(d){this.onError(d)}}var $i=!1,Ma=null,Ra=!1,el=null,sx={onError:function(e){$i=!0,Ma=e}};function ox(e,t,n,i,r,a,s,o,l){$i=!1,Ma=null,ax.apply(sx,arguments)}function lx(e,t,n,i,r,a,s,o,l){if(ox.apply(this,arguments),$i){if($i){var c=Ma;$i=!1,Ma=null}else throw Error(E(198));Ra||(Ra=!0,el=c)}}function An(e){var t=e,n=e;if(e.alternate)for(;t.return;)t=t.return;else{e=t;do t=e,t.flags&4098&&(n=t.return),e=t.return;while(e)}return t.tag===3?n:null}function pp(e){if(e.tag===13){var t=e.memoizedState;if(t===null&&(e=e.alternate,e!==null&&(t=e.memoizedState)),t!==null)return t.dehydrated}return null}function Yu(e){if(An(e)!==e)throw Error(E(188))}function cx(e){var t=e.alternate;if(!t){if(t=An(e),t===null)throw Error(E(188));return t!==e?null:e}for(var n=e,i=t;;){var r=n.return;if(r===null)break;var a=r.alternate;if(a===null){if(i=r.return,i!==null){n=i;continue}break}if(r.child===a.child){for(a=r.child;a;){if(a===n)return Yu(r),e;if(a===i)return Yu(r),t;a=a.sibling}throw Error(E(188))}if(n.return!==i.return)n=r,i=a;else{for(var s=!1,o=r.child;o;){if(o===n){s=!0,n=r,i=a;break}if(o===i){s=!0,i=r,n=a;break}o=o.sibling}if(!s){for(o=a.child;o;){if(o===n){s=!0,n=a,i=r;break}if(o===i){s=!0,i=a,n=r;break}o=o.sibling}if(!s)throw Error(E(189))}}if(n.alternate!==i)throw Error(E(190))}if(n.tag!==3)throw Error(E(188));return n.stateNode.current===n?e:t}function hp(e){return e=cx(e),e!==null?gp(e):null}function gp(e){if(e.tag===5||e.tag===6)return e;for(e=e.child;e!==null;){var t=gp(e);if(t!==null)return t;e=e.sibling}return null}var vp=Oe.unstable_scheduleCallback,Xu=Oe.unstable_cancelCallback,ux=Oe.unstable_shouldYield,dx=Oe.unstable_requestPaint,re=Oe.unstable_now,fx=Oe.unstable_getCurrentPriorityLevel,hc=Oe.unstable_ImmediatePriority,yp=Oe.unstable_UserBlockingPriority,Ia=Oe.unstable_NormalPriority,mx=Oe.unstable_LowPriority,xp=Oe.unstable_IdlePriority,ps=null,ct=null;function px(e){if(ct&&typeof ct.onCommitFiberRoot=="function")try{ct.onCommitFiberRoot(ps,e,void 0,(e.current.flags&128)===128)}catch{}}var Je=Math.clz32?Math.clz32:vx,hx=Math.log,gx=Math.LN2;function vx(e){return e>>>=0,e===0?32:31-(hx(e)/gx|0)|0}var Hr=64,Gr=4194304;function _i(e){switch(e&-e){case 1:return 1;case 2:return 2;case 4:return 4;case 8:return 8;case 16:return 16;case 32:return 32;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return e&4194240;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return e&130023424;case 134217728:return 134217728;case 268435456:return 268435456;case 536870912:return 536870912;case 1073741824:return 1073741824;default:return e}}function Da(e,t){var n=e.pendingLanes;if(n===0)return 0;var i=0,r=e.suspendedLanes,a=e.pingedLanes,s=n&268435455;if(s!==0){var o=s&~r;o!==0?i=_i(o):(a&=s,a!==0&&(i=_i(a)))}else s=n&~r,s!==0?i=_i(s):a!==0&&(i=_i(a));if(i===0)return 0;if(t!==0&&t!==i&&!(t&r)&&(r=i&-i,a=t&-t,r>=a||r===16&&(a&4194240)!==0))return t;if(i&4&&(i|=n&16),t=e.entangledLanes,t!==0)for(e=e.entanglements,t&=i;0<t;)n=31-Je(t),r=1<<n,i|=e[n],t&=~r;return i}function yx(e,t){switch(e){case 1:case 2:case 4:return t+250;case 8:case 16:case 32:case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return t+5e3;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return-1;case 134217728:case 268435456:case 536870912:case 1073741824:return-1;default:return-1}}function xx(e,t){for(var n=e.suspendedLanes,i=e.pingedLanes,r=e.expirationTimes,a=e.pendingLanes;0<a;){var s=31-Je(a),o=1<<s,l=r[s];l===-1?(!(o&n)||o&i)&&(r[s]=yx(o,t)):l<=t&&(e.expiredLanes|=o),a&=~o}}function tl(e){return e=e.pendingLanes&-1073741825,e!==0?e:e&1073741824?1073741824:0}function wp(){var e=Hr;return Hr<<=1,!(Hr&4194240)&&(Hr=64),e}function Hs(e){for(var t=[],n=0;31>n;n++)t.push(e);return t}function Mr(e,t,n){e.pendingLanes|=t,t!==536870912&&(e.suspendedLanes=0,e.pingedLanes=0),e=e.eventTimes,t=31-Je(t),e[t]=n}function wx(e,t){var n=e.pendingLanes&~t;e.pendingLanes=t,e.suspendedLanes=0,e.pingedLanes=0,e.expiredLanes&=t,e.mutableReadLanes&=t,e.entangledLanes&=t,t=e.entanglements;var i=e.eventTimes;for(e=e.expirationTimes;0<n;){var r=31-Je(n),a=1<<r;t[r]=0,i[r]=-1,e[r]=-1,n&=~a}}function gc(e,t){var n=e.entangledLanes|=t;for(e=e.entanglements;n;){var i=31-Je(n),r=1<<i;r&t|e[i]&t&&(e[i]|=t),n&=~r}}var U=0;function bp(e){return e&=-e,1<e?4<e?e&268435455?16:536870912:4:1}var Cp,vc,kp,Sp,Tp,nl=!1,Kr=[],Vt=null,Ut=null,Wt=null,sr=new Map,or=new Map,Ot=[],bx="mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset submit".split(" ");function Zu(e,t){switch(e){case"focusin":case"focusout":Vt=null;break;case"dragenter":case"dragleave":Ut=null;break;case"mouseover":case"mouseout":Wt=null;break;case"pointerover":case"pointerout":sr.delete(t.pointerId);break;case"gotpointercapture":case"lostpointercapture":or.delete(t.pointerId)}}function Ai(e,t,n,i,r,a){return e===null||e.nativeEvent!==a?(e={blockedOn:t,domEventName:n,eventSystemFlags:i,nativeEvent:a,targetContainers:[r]},t!==null&&(t=Ir(t),t!==null&&vc(t)),e):(e.eventSystemFlags|=i,t=e.targetContainers,r!==null&&t.indexOf(r)===-1&&t.push(r),e)}function Cx(e,t,n,i,r){switch(t){case"focusin":return Vt=Ai(Vt,e,t,n,i,r),!0;case"dragenter":return Ut=Ai(Ut,e,t,n,i,r),!0;case"mouseover":return Wt=Ai(Wt,e,t,n,i,r),!0;case"pointerover":var a=r.pointerId;return sr.set(a,Ai(sr.get(a)||null,e,t,n,i,r)),!0;case"gotpointercapture":return a=r.pointerId,or.set(a,Ai(or.get(a)||null,e,t,n,i,r)),!0}return!1}function Pp(e){var t=pn(e.target);if(t!==null){var n=An(t);if(n!==null){if(t=n.tag,t===13){if(t=pp(n),t!==null){e.blockedOn=t,Tp(e.priority,function(){kp(n)});return}}else if(t===3&&n.stateNode.current.memoizedState.isDehydrated){e.blockedOn=n.tag===3?n.stateNode.containerInfo:null;return}}}e.blockedOn=null}function ha(e){if(e.blockedOn!==null)return!1;for(var t=e.targetContainers;0<t.length;){var n=il(e.domEventName,e.eventSystemFlags,t[0],e.nativeEvent);if(n===null){n=e.nativeEvent;var i=new n.constructor(n.type,n);Xo=i,n.target.dispatchEvent(i),Xo=null}else return t=Ir(n),t!==null&&vc(t),e.blockedOn=n,!1;t.shift()}return!0}function Ju(e,t,n){ha(e)&&n.delete(t)}function kx(){nl=!1,Vt!==null&&ha(Vt)&&(Vt=null),Ut!==null&&ha(Ut)&&(Ut=null),Wt!==null&&ha(Wt)&&(Wt=null),sr.forEach(Ju),or.forEach(Ju)}function ji(e,t){e.blockedOn===t&&(e.blockedOn=null,nl||(nl=!0,Oe.unstable_scheduleCallback(Oe.unstable_NormalPriority,kx)))}function lr(e){function t(r){return ji(r,e)}if(0<Kr.length){ji(Kr[0],e);for(var n=1;n<Kr.length;n++){var i=Kr[n];i.blockedOn===e&&(i.blockedOn=null)}}for(Vt!==null&&ji(Vt,e),Ut!==null&&ji(Ut,e),Wt!==null&&ji(Wt,e),sr.forEach(t),or.forEach(t),n=0;n<Ot.length;n++)i=Ot[n],i.blockedOn===e&&(i.blockedOn=null);for(;0<Ot.length&&(n=Ot[0],n.blockedOn===null);)Pp(n),n.blockedOn===null&&Ot.shift()}var ni=Et.ReactCurrentBatchConfig,za=!0;function Sx(e,t,n,i){var r=U,a=ni.transition;ni.transition=null;try{U=1,yc(e,t,n,i)}finally{U=r,ni.transition=a}}function Tx(e,t,n,i){var r=U,a=ni.transition;ni.transition=null;try{U=4,yc(e,t,n,i)}finally{U=r,ni.transition=a}}function yc(e,t,n,i){if(za){var r=il(e,t,n,i);if(r===null)no(e,t,i,Oa,n),Zu(e,i);else if(Cx(r,e,t,n,i))i.stopPropagation();else if(Zu(e,i),t&4&&-1<bx.indexOf(e)){for(;r!==null;){var a=Ir(r);if(a!==null&&Cp(a),a=il(e,t,n,i),a===null&&no(e,t,i,Oa,n),a===r)break;r=a}r!==null&&i.stopPropagation()}else no(e,t,i,null,n)}}var Oa=null;function il(e,t,n,i){if(Oa=null,e=pc(i),e=pn(e),e!==null)if(t=An(e),t===null)e=null;else if(n=t.tag,n===13){if(e=pp(t),e!==null)return e;e=null}else if(n===3){if(t.stateNode.current.memoizedState.isDehydrated)return t.tag===3?t.stateNode.containerInfo:null;e=null}else t!==e&&(e=null);return Oa=e,null}function Ep(e){switch(e){case"cancel":case"click":case"close":case"contextmenu":case"copy":case"cut":case"auxclick":case"dblclick":case"dragend":case"dragstart":case"drop":case"focusin":case"focusout":case"input":case"invalid":case"keydown":case"keypress":case"keyup":case"mousedown":case"mouseup":case"paste":case"pause":case"play":case"pointercancel":case"pointerdown":case"pointerup":case"ratechange":case"reset":case"resize":case"seeked":case"submit":case"touchcancel":case"touchend":case"touchstart":case"volumechange":case"change":case"selectionchange":case"textInput":case"compositionstart":case"compositionend":case"compositionupdate":case"beforeblur":case"afterblur":case"beforeinput":case"blur":case"fullscreenchange":case"focus":case"hashchange":case"popstate":case"select":case"selectstart":return 1;case"drag":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"mousemove":case"mouseout":case"mouseover":case"pointermove":case"pointerout":case"pointerover":case"scroll":case"toggle":case"touchmove":case"wheel":case"mouseenter":case"mouseleave":case"pointerenter":case"pointerleave":return 4;case"message":switch(fx()){case hc:return 1;case yp:return 4;case Ia:case mx:return 16;case xp:return 536870912;default:return 16}default:return 16}}var Ft=null,xc=null,ga=null;function Ap(){if(ga)return ga;var e,t=xc,n=t.length,i,r="value"in Ft?Ft.value:Ft.textContent,a=r.length;for(e=0;e<n&&t[e]===r[e];e++);var s=n-e;for(i=1;i<=s&&t[n-i]===r[a-i];i++);return ga=r.slice(e,1<i?1-i:void 0)}function va(e){var t=e.keyCode;return"charCode"in e?(e=e.charCode,e===0&&t===13&&(e=13)):e=t,e===10&&(e=13),32<=e||e===13?e:0}function Qr(){return!0}function ed(){return!1}function _e(e){function t(n,i,r,a,s){this._reactName=n,this._targetInst=r,this.type=i,this.nativeEvent=a,this.target=s,this.currentTarget=null;for(var o in e)e.hasOwnProperty(o)&&(n=e[o],this[o]=n?n(a):a[o]);return this.isDefaultPrevented=(a.defaultPrevented!=null?a.defaultPrevented:a.returnValue===!1)?Qr:ed,this.isPropagationStopped=ed,this}return J(t.prototype,{preventDefault:function(){this.defaultPrevented=!0;var n=this.nativeEvent;n&&(n.preventDefault?n.preventDefault():typeof n.returnValue!="unknown"&&(n.returnValue=!1),this.isDefaultPrevented=Qr)},stopPropagation:function(){var n=this.nativeEvent;n&&(n.stopPropagation?n.stopPropagation():typeof n.cancelBubble!="unknown"&&(n.cancelBubble=!0),this.isPropagationStopped=Qr)},persist:function(){},isPersistent:Qr}),t}var xi={eventPhase:0,bubbles:0,cancelable:0,timeStamp:function(e){return e.timeStamp||Date.now()},defaultPrevented:0,isTrusted:0},wc=_e(xi),Rr=J({},xi,{view:0,detail:0}),Px=_e(Rr),Gs,Ks,Ni,hs=J({},Rr,{screenX:0,screenY:0,clientX:0,clientY:0,pageX:0,pageY:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,getModifierState:bc,button:0,buttons:0,relatedTarget:function(e){return e.relatedTarget===void 0?e.fromElement===e.srcElement?e.toElement:e.fromElement:e.relatedTarget},movementX:function(e){return"movementX"in e?e.movementX:(e!==Ni&&(Ni&&e.type==="mousemove"?(Gs=e.screenX-Ni.screenX,Ks=e.screenY-Ni.screenY):Ks=Gs=0,Ni=e),Gs)},movementY:function(e){return"movementY"in e?e.movementY:Ks}}),td=_e(hs),Ex=J({},hs,{dataTransfer:0}),Ax=_e(Ex),jx=J({},Rr,{relatedTarget:0}),Qs=_e(jx),Nx=J({},xi,{animationName:0,elapsedTime:0,pseudoElement:0}),Mx=_e(Nx),Rx=J({},xi,{clipboardData:function(e){return"clipboardData"in e?e.clipboardData:window.clipboardData}}),Ix=_e(Rx),Dx=J({},xi,{data:0}),nd=_e(Dx),zx={Esc:"Escape",Spacebar:" ",Left:"ArrowLeft",Up:"ArrowUp",Right:"ArrowRight",Down:"ArrowDown",Del:"Delete",Win:"OS",Menu:"ContextMenu",Apps:"ContextMenu",Scroll:"ScrollLock",MozPrintableKey:"Unidentified"},Ox={8:"Backspace",9:"Tab",12:"Clear",13:"Enter",16:"Shift",17:"Control",18:"Alt",19:"Pause",20:"CapsLock",27:"Escape",32:" ",33:"PageUp",34:"PageDown",35:"End",36:"Home",37:"ArrowLeft",38:"ArrowUp",39:"ArrowRight",40:"ArrowDown",45:"Insert",46:"Delete",112:"F1",113:"F2",114:"F3",115:"F4",116:"F5",117:"F6",118:"F7",119:"F8",120:"F9",121:"F10",122:"F11",123:"F12",144:"NumLock",145:"ScrollLock",224:"Meta"},Lx={Alt:"altKey",Control:"ctrlKey",Meta:"metaKey",Shift:"shiftKey"};function Fx(e){var t=this.nativeEvent;return t.getModifierState?t.getModifierState(e):(e=Lx[e])?!!t[e]:!1}function bc(){return Fx}var _x=J({},Rr,{key:function(e){if(e.key){var t=zx[e.key]||e.key;if(t!=="Unidentified")return t}return e.type==="keypress"?(e=va(e),e===13?"Enter":String.fromCharCode(e)):e.type==="keydown"||e.type==="keyup"?Ox[e.keyCode]||"Unidentified":""},code:0,location:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,repeat:0,locale:0,getModifierState:bc,charCode:function(e){return e.type==="keypress"?va(e):0},keyCode:function(e){return e.type==="keydown"||e.type==="keyup"?e.keyCode:0},which:function(e){return e.type==="keypress"?va(e):e.type==="keydown"||e.type==="keyup"?e.keyCode:0}}),Bx=_e(_x),Vx=J({},hs,{pointerId:0,width:0,height:0,pressure:0,tangentialPressure:0,tiltX:0,tiltY:0,twist:0,pointerType:0,isPrimary:0}),id=_e(Vx),Ux=J({},Rr,{touches:0,targetTouches:0,changedTouches:0,altKey:0,metaKey:0,ctrlKey:0,shiftKey:0,getModifierState:bc}),Wx=_e(Ux),qx=J({},xi,{propertyName:0,elapsedTime:0,pseudoElement:0}),$x=_e(qx),Hx=J({},hs,{deltaX:function(e){return"deltaX"in e?e.deltaX:"wheelDeltaX"in e?-e.wheelDeltaX:0},deltaY:function(e){return"deltaY"in e?e.deltaY:"wheelDeltaY"in e?-e.wheelDeltaY:"wheelDelta"in e?-e.wheelDelta:0},deltaZ:0,deltaMode:0}),Gx=_e(Hx),Kx=[9,13,27,32],Cc=Ct&&"CompositionEvent"in window,Hi=null;Ct&&"documentMode"in document&&(Hi=document.documentMode);var Qx=Ct&&"TextEvent"in window&&!Hi,jp=Ct&&(!Cc||Hi&&8<Hi&&11>=Hi),rd=" ",ad=!1;function Np(e,t){switch(e){case"keyup":return Kx.indexOf(t.keyCode)!==-1;case"keydown":return t.keyCode!==229;case"keypress":case"mousedown":case"focusout":return!0;default:return!1}}function Mp(e){return e=e.detail,typeof e=="object"&&"data"in e?e.data:null}var Fn=!1;function Yx(e,t){switch(e){case"compositionend":return Mp(t);case"keypress":return t.which!==32?null:(ad=!0,rd);case"textInput":return e=t.data,e===rd&&ad?null:e;default:return null}}function Xx(e,t){if(Fn)return e==="compositionend"||!Cc&&Np(e,t)?(e=Ap(),ga=xc=Ft=null,Fn=!1,e):null;switch(e){case"paste":return null;case"keypress":if(!(t.ctrlKey||t.altKey||t.metaKey)||t.ctrlKey&&t.altKey){if(t.char&&1<t.char.length)return t.char;if(t.which)return String.fromCharCode(t.which)}return null;case"compositionend":return jp&&t.locale!=="ko"?null:t.data;default:return null}}var Zx={color:!0,date:!0,datetime:!0,"datetime-local":!0,email:!0,month:!0,number:!0,password:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0};function sd(e){var t=e&&e.nodeName&&e.nodeName.toLowerCase();return t==="input"?!!Zx[e.type]:t==="textarea"}function Rp(e,t,n,i){cp(i),t=La(t,"onChange"),0<t.length&&(n=new wc("onChange","change",null,n,i),e.push({event:n,listeners:t}))}var Gi=null,cr=null;function Jx(e){Wp(e,0)}function gs(e){var t=Vn(e);if(np(t))return e}function e0(e,t){if(e==="change")return t}var Ip=!1;if(Ct){var Ys;if(Ct){var Xs="oninput"in document;if(!Xs){var od=document.createElement("div");od.setAttribute("oninput","return;"),Xs=typeof od.oninput=="function"}Ys=Xs}else Ys=!1;Ip=Ys&&(!document.documentMode||9<document.documentMode)}function ld(){Gi&&(Gi.detachEvent("onpropertychange",Dp),cr=Gi=null)}function Dp(e){if(e.propertyName==="value"&&gs(cr)){var t=[];Rp(t,cr,e,pc(e)),mp(Jx,t)}}function t0(e,t,n){e==="focusin"?(ld(),Gi=t,cr=n,Gi.attachEvent("onpropertychange",Dp)):e==="focusout"&&ld()}function n0(e){if(e==="selectionchange"||e==="keyup"||e==="keydown")return gs(cr)}function i0(e,t){if(e==="click")return gs(t)}function r0(e,t){if(e==="input"||e==="change")return gs(t)}function a0(e,t){return e===t&&(e!==0||1/e===1/t)||e!==e&&t!==t}var tt=typeof Object.is=="function"?Object.is:a0;function ur(e,t){if(tt(e,t))return!0;if(typeof e!="object"||e===null||typeof t!="object"||t===null)return!1;var n=Object.keys(e),i=Object.keys(t);if(n.length!==i.length)return!1;for(i=0;i<n.length;i++){var r=n[i];if(!_o.call(t,r)||!tt(e[r],t[r]))return!1}return!0}function cd(e){for(;e&&e.firstChild;)e=e.firstChild;return e}function ud(e,t){var n=cd(e);e=0;for(var i;n;){if(n.nodeType===3){if(i=e+n.textContent.length,e<=t&&i>=t)return{node:n,offset:t-e};e=i}e:{for(;n;){if(n.nextSibling){n=n.nextSibling;break e}n=n.parentNode}n=void 0}n=cd(n)}}function zp(e,t){return e&&t?e===t?!0:e&&e.nodeType===3?!1:t&&t.nodeType===3?zp(e,t.parentNode):"contains"in e?e.contains(t):e.compareDocumentPosition?!!(e.compareDocumentPosition(t)&16):!1:!1}function Op(){for(var e=window,t=Na();t instanceof e.HTMLIFrameElement;){try{var n=typeof t.contentWindow.location.href=="string"}catch{n=!1}if(n)e=t.contentWindow;else break;t=Na(e.document)}return t}function kc(e){var t=e&&e.nodeName&&e.nodeName.toLowerCase();return t&&(t==="input"&&(e.type==="text"||e.type==="search"||e.type==="tel"||e.type==="url"||e.type==="password")||t==="textarea"||e.contentEditable==="true")}function s0(e){var t=Op(),n=e.focusedElem,i=e.selectionRange;if(t!==n&&n&&n.ownerDocument&&zp(n.ownerDocument.documentElement,n)){if(i!==null&&kc(n)){if(t=i.start,e=i.end,e===void 0&&(e=t),"selectionStart"in n)n.selectionStart=t,n.selectionEnd=Math.min(e,n.value.length);else if(e=(t=n.ownerDocument||document)&&t.defaultView||window,e.getSelection){e=e.getSelection();var r=n.textContent.length,a=Math.min(i.start,r);i=i.end===void 0?a:Math.min(i.end,r),!e.extend&&a>i&&(r=i,i=a,a=r),r=ud(n,a);var s=ud(n,i);r&&s&&(e.rangeCount!==1||e.anchorNode!==r.node||e.anchorOffset!==r.offset||e.focusNode!==s.node||e.focusOffset!==s.offset)&&(t=t.createRange(),t.setStart(r.node,r.offset),e.removeAllRanges(),a>i?(e.addRange(t),e.extend(s.node,s.offset)):(t.setEnd(s.node,s.offset),e.addRange(t)))}}for(t=[],e=n;e=e.parentNode;)e.nodeType===1&&t.push({element:e,left:e.scrollLeft,top:e.scrollTop});for(typeof n.focus=="function"&&n.focus(),n=0;n<t.length;n++)e=t[n],e.element.scrollLeft=e.left,e.element.scrollTop=e.top}}var o0=Ct&&"documentMode"in document&&11>=document.documentMode,_n=null,rl=null,Ki=null,al=!1;function dd(e,t,n){var i=n.window===n?n.document:n.nodeType===9?n:n.ownerDocument;al||_n==null||_n!==Na(i)||(i=_n,"selectionStart"in i&&kc(i)?i={start:i.selectionStart,end:i.selectionEnd}:(i=(i.ownerDocument&&i.ownerDocument.defaultView||window).getSelection(),i={anchorNode:i.anchorNode,anchorOffset:i.anchorOffset,focusNode:i.focusNode,focusOffset:i.focusOffset}),Ki&&ur(Ki,i)||(Ki=i,i=La(rl,"onSelect"),0<i.length&&(t=new wc("onSelect","select",null,t,n),e.push({event:t,listeners:i}),t.target=_n)))}function Yr(e,t){var n={};return n[e.toLowerCase()]=t.toLowerCase(),n["Webkit"+e]="webkit"+t,n["Moz"+e]="moz"+t,n}var Bn={animationend:Yr("Animation","AnimationEnd"),animationiteration:Yr("Animation","AnimationIteration"),animationstart:Yr("Animation","AnimationStart"),transitionend:Yr("Transition","TransitionEnd")},Zs={},Lp={};Ct&&(Lp=document.createElement("div").style,"AnimationEvent"in window||(delete Bn.animationend.animation,delete Bn.animationiteration.animation,delete Bn.animationstart.animation),"TransitionEvent"in window||delete Bn.transitionend.transition);function vs(e){if(Zs[e])return Zs[e];if(!Bn[e])return e;var t=Bn[e],n;for(n in t)if(t.hasOwnProperty(n)&&n in Lp)return Zs[e]=t[n];return e}var Fp=vs("animationend"),_p=vs("animationiteration"),Bp=vs("animationstart"),Vp=vs("transitionend"),Up=new Map,fd="abort auxClick cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");function tn(e,t){Up.set(e,t),En(t,[e])}for(var Js=0;Js<fd.length;Js++){var eo=fd[Js],l0=eo.toLowerCase(),c0=eo[0].toUpperCase()+eo.slice(1);tn(l0,"on"+c0)}tn(Fp,"onAnimationEnd");tn(_p,"onAnimationIteration");tn(Bp,"onAnimationStart");tn("dblclick","onDoubleClick");tn("focusin","onFocus");tn("focusout","onBlur");tn(Vp,"onTransitionEnd");li("onMouseEnter",["mouseout","mouseover"]);li("onMouseLeave",["mouseout","mouseover"]);li("onPointerEnter",["pointerout","pointerover"]);li("onPointerLeave",["pointerout","pointerover"]);En("onChange","change click focusin focusout input keydown keyup selectionchange".split(" "));En("onSelect","focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" "));En("onBeforeInput",["compositionend","keypress","textInput","paste"]);En("onCompositionEnd","compositionend focusout keydown keypress keyup mousedown".split(" "));En("onCompositionStart","compositionstart focusout keydown keypress keyup mousedown".split(" "));En("onCompositionUpdate","compositionupdate focusout keydown keypress keyup mousedown".split(" "));var Bi="abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),u0=new Set("cancel close invalid load scroll toggle".split(" ").concat(Bi));function md(e,t,n){var i=e.type||"unknown-event";e.currentTarget=n,lx(i,t,void 0,e),e.currentTarget=null}function Wp(e,t){t=(t&4)!==0;for(var n=0;n<e.length;n++){var i=e[n],r=i.event;i=i.listeners;e:{var a=void 0;if(t)for(var s=i.length-1;0<=s;s--){var o=i[s],l=o.instance,c=o.currentTarget;if(o=o.listener,l!==a&&r.isPropagationStopped())break e;md(r,o,c),a=l}else for(s=0;s<i.length;s++){if(o=i[s],l=o.instance,c=o.currentTarget,o=o.listener,l!==a&&r.isPropagationStopped())break e;md(r,o,c),a=l}}}if(Ra)throw e=el,Ra=!1,el=null,e}function H(e,t){var n=t[ul];n===void 0&&(n=t[ul]=new Set);var i=e+"__bubble";n.has(i)||(qp(t,e,2,!1),n.add(i))}function to(e,t,n){var i=0;t&&(i|=4),qp(n,e,i,t)}var Xr="_reactListening"+Math.random().toString(36).slice(2);function dr(e){if(!e[Xr]){e[Xr]=!0,Xm.forEach(function(n){n!=="selectionchange"&&(u0.has(n)||to(n,!1,e),to(n,!0,e))});var t=e.nodeType===9?e:e.ownerDocument;t===null||t[Xr]||(t[Xr]=!0,to("selectionchange",!1,t))}}function qp(e,t,n,i){switch(Ep(t)){case 1:var r=Sx;break;case 4:r=Tx;break;default:r=yc}n=r.bind(null,t,n,e),r=void 0,!Jo||t!=="touchstart"&&t!=="touchmove"&&t!=="wheel"||(r=!0),i?r!==void 0?e.addEventListener(t,n,{capture:!0,passive:r}):e.addEventListener(t,n,!0):r!==void 0?e.addEventListener(t,n,{passive:r}):e.addEventListener(t,n,!1)}function no(e,t,n,i,r){var a=i;if(!(t&1)&&!(t&2)&&i!==null)e:for(;;){if(i===null)return;var s=i.tag;if(s===3||s===4){var o=i.stateNode.containerInfo;if(o===r||o.nodeType===8&&o.parentNode===r)break;if(s===4)for(s=i.return;s!==null;){var l=s.tag;if((l===3||l===4)&&(l=s.stateNode.containerInfo,l===r||l.nodeType===8&&l.parentNode===r))return;s=s.return}for(;o!==null;){if(s=pn(o),s===null)return;if(l=s.tag,l===5||l===6){i=a=s;continue e}o=o.parentNode}}i=i.return}mp(function(){var c=a,d=pc(n),f=[];e:{var m=Up.get(e);if(m!==void 0){var x=wc,w=e;switch(e){case"keypress":if(va(n)===0)break e;case"keydown":case"keyup":x=Bx;break;case"focusin":w="focus",x=Qs;break;case"focusout":w="blur",x=Qs;break;case"beforeblur":case"afterblur":x=Qs;break;case"click":if(n.button===2)break e;case"auxclick":case"dblclick":case"mousedown":case"mousemove":case"mouseup":case"mouseout":case"mouseover":case"contextmenu":x=td;break;case"drag":case"dragend":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"dragstart":case"drop":x=Ax;break;case"touchcancel":case"touchend":case"touchmove":case"touchstart":x=Wx;break;case Fp:case _p:case Bp:x=Mx;break;case Vp:x=$x;break;case"scroll":x=Px;break;case"wheel":x=Gx;break;case"copy":case"cut":case"paste":x=Ix;break;case"gotpointercapture":case"lostpointercapture":case"pointercancel":case"pointerdown":case"pointermove":case"pointerout":case"pointerover":case"pointerup":x=id}var v=(t&4)!==0,b=!v&&e==="scroll",p=v?m!==null?m+"Capture":null:m;v=[];for(var h=c,y;h!==null;){y=h;var C=y.stateNode;if(y.tag===5&&C!==null&&(y=C,p!==null&&(C=ar(h,p),C!=null&&v.push(fr(h,C,y)))),b)break;h=h.return}0<v.length&&(m=new x(m,w,null,n,d),f.push({event:m,listeners:v}))}}if(!(t&7)){e:{if(m=e==="mouseover"||e==="pointerover",x=e==="mouseout"||e==="pointerout",m&&n!==Xo&&(w=n.relatedTarget||n.fromElement)&&(pn(w)||w[kt]))break e;if((x||m)&&(m=d.window===d?d:(m=d.ownerDocument)?m.defaultView||m.parentWindow:window,x?(w=n.relatedTarget||n.toElement,x=c,w=w?pn(w):null,w!==null&&(b=An(w),w!==b||w.tag!==5&&w.tag!==6)&&(w=null)):(x=null,w=c),x!==w)){if(v=td,C="onMouseLeave",p="onMouseEnter",h="mouse",(e==="pointerout"||e==="pointerover")&&(v=id,C="onPointerLeave",p="onPointerEnter",h="pointer"),b=x==null?m:Vn(x),y=w==null?m:Vn(w),m=new v(C,h+"leave",x,n,d),m.target=b,m.relatedTarget=y,C=null,pn(d)===c&&(v=new v(p,h+"enter",w,n,d),v.target=y,v.relatedTarget=b,C=v),b=C,x&&w)t:{for(v=x,p=w,h=0,y=v;y;y=Rn(y))h++;for(y=0,C=p;C;C=Rn(C))y++;for(;0<h-y;)v=Rn(v),h--;for(;0<y-h;)p=Rn(p),y--;for(;h--;){if(v===p||p!==null&&v===p.alternate)break t;v=Rn(v),p=Rn(p)}v=null}else v=null;x!==null&&pd(f,m,x,v,!1),w!==null&&b!==null&&pd(f,b,w,v,!0)}}e:{if(m=c?Vn(c):window,x=m.nodeName&&m.nodeName.toLowerCase(),x==="select"||x==="input"&&m.type==="file")var k=e0;else if(sd(m))if(Ip)k=r0;else{k=n0;var P=t0}else(x=m.nodeName)&&x.toLowerCase()==="input"&&(m.type==="checkbox"||m.type==="radio")&&(k=i0);if(k&&(k=k(e,c))){Rp(f,k,n,d);break e}P&&P(e,m,c),e==="focusout"&&(P=m._wrapperState)&&P.controlled&&m.type==="number"&&Ho(m,"number",m.value)}switch(P=c?Vn(c):window,e){case"focusin":(sd(P)||P.contentEditable==="true")&&(_n=P,rl=c,Ki=null);break;case"focusout":Ki=rl=_n=null;break;case"mousedown":al=!0;break;case"contextmenu":case"mouseup":case"dragend":al=!1,dd(f,n,d);break;case"selectionchange":if(o0)break;case"keydown":case"keyup":dd(f,n,d)}var S;if(Cc)e:{switch(e){case"compositionstart":var T="onCompositionStart";break e;case"compositionend":T="onCompositionEnd";break e;case"compositionupdate":T="onCompositionUpdate";break e}T=void 0}else Fn?Np(e,n)&&(T="onCompositionEnd"):e==="keydown"&&n.keyCode===229&&(T="onCompositionStart");T&&(jp&&n.locale!=="ko"&&(Fn||T!=="onCompositionStart"?T==="onCompositionEnd"&&Fn&&(S=Ap()):(Ft=d,xc="value"in Ft?Ft.value:Ft.textContent,Fn=!0)),P=La(c,T),0<P.length&&(T=new nd(T,e,null,n,d),f.push({event:T,listeners:P}),S?T.data=S:(S=Mp(n),S!==null&&(T.data=S)))),(S=Qx?Yx(e,n):Xx(e,n))&&(c=La(c,"onBeforeInput"),0<c.length&&(d=new nd("onBeforeInput","beforeinput",null,n,d),f.push({event:d,listeners:c}),d.data=S))}Wp(f,t)})}function fr(e,t,n){return{instance:e,listener:t,currentTarget:n}}function La(e,t){for(var n=t+"Capture",i=[];e!==null;){var r=e,a=r.stateNode;r.tag===5&&a!==null&&(r=a,a=ar(e,n),a!=null&&i.unshift(fr(e,a,r)),a=ar(e,t),a!=null&&i.push(fr(e,a,r))),e=e.return}return i}function Rn(e){if(e===null)return null;do e=e.return;while(e&&e.tag!==5);return e||null}function pd(e,t,n,i,r){for(var a=t._reactName,s=[];n!==null&&n!==i;){var o=n,l=o.alternate,c=o.stateNode;if(l!==null&&l===i)break;o.tag===5&&c!==null&&(o=c,r?(l=ar(n,a),l!=null&&s.unshift(fr(n,l,o))):r||(l=ar(n,a),l!=null&&s.push(fr(n,l,o)))),n=n.return}s.length!==0&&e.push({event:t,listeners:s})}var d0=/\r\n?/g,f0=/\u0000|\uFFFD/g;function hd(e){return(typeof e=="string"?e:""+e).replace(d0,`
`).replace(f0,"")}function Zr(e,t,n){if(t=hd(t),hd(e)!==t&&n)throw Error(E(425))}function Fa(){}var sl=null,ol=null;function ll(e,t){return e==="textarea"||e==="noscript"||typeof t.children=="string"||typeof t.children=="number"||typeof t.dangerouslySetInnerHTML=="object"&&t.dangerouslySetInnerHTML!==null&&t.dangerouslySetInnerHTML.__html!=null}var cl=typeof setTimeout=="function"?setTimeout:void 0,m0=typeof clearTimeout=="function"?clearTimeout:void 0,gd=typeof Promise=="function"?Promise:void 0,p0=typeof queueMicrotask=="function"?queueMicrotask:typeof gd<"u"?function(e){return gd.resolve(null).then(e).catch(h0)}:cl;function h0(e){setTimeout(function(){throw e})}function io(e,t){var n=t,i=0;do{var r=n.nextSibling;if(e.removeChild(n),r&&r.nodeType===8)if(n=r.data,n==="/$"){if(i===0){e.removeChild(r),lr(t);return}i--}else n!=="$"&&n!=="$?"&&n!=="$!"||i++;n=r}while(n);lr(t)}function qt(e){for(;e!=null;e=e.nextSibling){var t=e.nodeType;if(t===1||t===3)break;if(t===8){if(t=e.data,t==="$"||t==="$!"||t==="$?")break;if(t==="/$")return null}}return e}function vd(e){e=e.previousSibling;for(var t=0;e;){if(e.nodeType===8){var n=e.data;if(n==="$"||n==="$!"||n==="$?"){if(t===0)return e;t--}else n==="/$"&&t++}e=e.previousSibling}return null}var wi=Math.random().toString(36).slice(2),ot="__reactFiber$"+wi,mr="__reactProps$"+wi,kt="__reactContainer$"+wi,ul="__reactEvents$"+wi,g0="__reactListeners$"+wi,v0="__reactHandles$"+wi;function pn(e){var t=e[ot];if(t)return t;for(var n=e.parentNode;n;){if(t=n[kt]||n[ot]){if(n=t.alternate,t.child!==null||n!==null&&n.child!==null)for(e=vd(e);e!==null;){if(n=e[ot])return n;e=vd(e)}return t}e=n,n=e.parentNode}return null}function Ir(e){return e=e[ot]||e[kt],!e||e.tag!==5&&e.tag!==6&&e.tag!==13&&e.tag!==3?null:e}function Vn(e){if(e.tag===5||e.tag===6)return e.stateNode;throw Error(E(33))}function ys(e){return e[mr]||null}var dl=[],Un=-1;function nn(e){return{current:e}}function G(e){0>Un||(e.current=dl[Un],dl[Un]=null,Un--)}function q(e,t){Un++,dl[Un]=e.current,e.current=t}var Zt={},be=nn(Zt),Ae=nn(!1),bn=Zt;function ci(e,t){var n=e.type.contextTypes;if(!n)return Zt;var i=e.stateNode;if(i&&i.__reactInternalMemoizedUnmaskedChildContext===t)return i.__reactInternalMemoizedMaskedChildContext;var r={},a;for(a in n)r[a]=t[a];return i&&(e=e.stateNode,e.__reactInternalMemoizedUnmaskedChildContext=t,e.__reactInternalMemoizedMaskedChildContext=r),r}function je(e){return e=e.childContextTypes,e!=null}function _a(){G(Ae),G(be)}function yd(e,t,n){if(be.current!==Zt)throw Error(E(168));q(be,t),q(Ae,n)}function $p(e,t,n){var i=e.stateNode;if(t=t.childContextTypes,typeof i.getChildContext!="function")return n;i=i.getChildContext();for(var r in i)if(!(r in t))throw Error(E(108,tx(e)||"Unknown",r));return J({},n,i)}function Ba(e){return e=(e=e.stateNode)&&e.__reactInternalMemoizedMergedChildContext||Zt,bn=be.current,q(be,e),q(Ae,Ae.current),!0}function xd(e,t,n){var i=e.stateNode;if(!i)throw Error(E(169));n?(e=$p(e,t,bn),i.__reactInternalMemoizedMergedChildContext=e,G(Ae),G(be),q(be,e)):G(Ae),q(Ae,n)}var gt=null,xs=!1,ro=!1;function Hp(e){gt===null?gt=[e]:gt.push(e)}function y0(e){xs=!0,Hp(e)}function rn(){if(!ro&&gt!==null){ro=!0;var e=0,t=U;try{var n=gt;for(U=1;e<n.length;e++){var i=n[e];do i=i(!0);while(i!==null)}gt=null,xs=!1}catch(r){throw gt!==null&&(gt=gt.slice(e+1)),vp(hc,rn),r}finally{U=t,ro=!1}}return null}var Wn=[],qn=0,Va=null,Ua=0,Ue=[],We=0,Cn=null,vt=1,yt="";function un(e,t){Wn[qn++]=Ua,Wn[qn++]=Va,Va=e,Ua=t}function Gp(e,t,n){Ue[We++]=vt,Ue[We++]=yt,Ue[We++]=Cn,Cn=e;var i=vt;e=yt;var r=32-Je(i)-1;i&=~(1<<r),n+=1;var a=32-Je(t)+r;if(30<a){var s=r-r%5;a=(i&(1<<s)-1).toString(32),i>>=s,r-=s,vt=1<<32-Je(t)+r|n<<r|i,yt=a+e}else vt=1<<a|n<<r|i,yt=e}function Sc(e){e.return!==null&&(un(e,1),Gp(e,1,0))}function Tc(e){for(;e===Va;)Va=Wn[--qn],Wn[qn]=null,Ua=Wn[--qn],Wn[qn]=null;for(;e===Cn;)Cn=Ue[--We],Ue[We]=null,yt=Ue[--We],Ue[We]=null,vt=Ue[--We],Ue[We]=null}var Ie=null,Re=null,Q=!1,Ze=null;function Kp(e,t){var n=qe(5,null,null,0);n.elementType="DELETED",n.stateNode=t,n.return=e,t=e.deletions,t===null?(e.deletions=[n],e.flags|=16):t.push(n)}function wd(e,t){switch(e.tag){case 5:var n=e.type;return t=t.nodeType!==1||n.toLowerCase()!==t.nodeName.toLowerCase()?null:t,t!==null?(e.stateNode=t,Ie=e,Re=qt(t.firstChild),!0):!1;case 6:return t=e.pendingProps===""||t.nodeType!==3?null:t,t!==null?(e.stateNode=t,Ie=e,Re=null,!0):!1;case 13:return t=t.nodeType!==8?null:t,t!==null?(n=Cn!==null?{id:vt,overflow:yt}:null,e.memoizedState={dehydrated:t,treeContext:n,retryLane:1073741824},n=qe(18,null,null,0),n.stateNode=t,n.return=e,e.child=n,Ie=e,Re=null,!0):!1;default:return!1}}function fl(e){return(e.mode&1)!==0&&(e.flags&128)===0}function ml(e){if(Q){var t=Re;if(t){var n=t;if(!wd(e,t)){if(fl(e))throw Error(E(418));t=qt(n.nextSibling);var i=Ie;t&&wd(e,t)?Kp(i,n):(e.flags=e.flags&-4097|2,Q=!1,Ie=e)}}else{if(fl(e))throw Error(E(418));e.flags=e.flags&-4097|2,Q=!1,Ie=e}}}function bd(e){for(e=e.return;e!==null&&e.tag!==5&&e.tag!==3&&e.tag!==13;)e=e.return;Ie=e}function Jr(e){if(e!==Ie)return!1;if(!Q)return bd(e),Q=!0,!1;var t;if((t=e.tag!==3)&&!(t=e.tag!==5)&&(t=e.type,t=t!=="head"&&t!=="body"&&!ll(e.type,e.memoizedProps)),t&&(t=Re)){if(fl(e))throw Qp(),Error(E(418));for(;t;)Kp(e,t),t=qt(t.nextSibling)}if(bd(e),e.tag===13){if(e=e.memoizedState,e=e!==null?e.dehydrated:null,!e)throw Error(E(317));e:{for(e=e.nextSibling,t=0;e;){if(e.nodeType===8){var n=e.data;if(n==="/$"){if(t===0){Re=qt(e.nextSibling);break e}t--}else n!=="$"&&n!=="$!"&&n!=="$?"||t++}e=e.nextSibling}Re=null}}else Re=Ie?qt(e.stateNode.nextSibling):null;return!0}function Qp(){for(var e=Re;e;)e=qt(e.nextSibling)}function ui(){Re=Ie=null,Q=!1}function Pc(e){Ze===null?Ze=[e]:Ze.push(e)}var x0=Et.ReactCurrentBatchConfig;function Mi(e,t,n){if(e=n.ref,e!==null&&typeof e!="function"&&typeof e!="object"){if(n._owner){if(n=n._owner,n){if(n.tag!==1)throw Error(E(309));var i=n.stateNode}if(!i)throw Error(E(147,e));var r=i,a=""+e;return t!==null&&t.ref!==null&&typeof t.ref=="function"&&t.ref._stringRef===a?t.ref:(t=function(s){var o=r.refs;s===null?delete o[a]:o[a]=s},t._stringRef=a,t)}if(typeof e!="string")throw Error(E(284));if(!n._owner)throw Error(E(290,e))}return e}function ea(e,t){throw e=Object.prototype.toString.call(t),Error(E(31,e==="[object Object]"?"object with keys {"+Object.keys(t).join(", ")+"}":e))}function Cd(e){var t=e._init;return t(e._payload)}function Yp(e){function t(p,h){if(e){var y=p.deletions;y===null?(p.deletions=[h],p.flags|=16):y.push(h)}}function n(p,h){if(!e)return null;for(;h!==null;)t(p,h),h=h.sibling;return null}function i(p,h){for(p=new Map;h!==null;)h.key!==null?p.set(h.key,h):p.set(h.index,h),h=h.sibling;return p}function r(p,h){return p=Kt(p,h),p.index=0,p.sibling=null,p}function a(p,h,y){return p.index=y,e?(y=p.alternate,y!==null?(y=y.index,y<h?(p.flags|=2,h):y):(p.flags|=2,h)):(p.flags|=1048576,h)}function s(p){return e&&p.alternate===null&&(p.flags|=2),p}function o(p,h,y,C){return h===null||h.tag!==6?(h=fo(y,p.mode,C),h.return=p,h):(h=r(h,y),h.return=p,h)}function l(p,h,y,C){var k=y.type;return k===Ln?d(p,h,y.props.children,C,y.key):h!==null&&(h.elementType===k||typeof k=="object"&&k!==null&&k.$$typeof===Dt&&Cd(k)===h.type)?(C=r(h,y.props),C.ref=Mi(p,h,y),C.return=p,C):(C=Sa(y.type,y.key,y.props,null,p.mode,C),C.ref=Mi(p,h,y),C.return=p,C)}function c(p,h,y,C){return h===null||h.tag!==4||h.stateNode.containerInfo!==y.containerInfo||h.stateNode.implementation!==y.implementation?(h=mo(y,p.mode,C),h.return=p,h):(h=r(h,y.children||[]),h.return=p,h)}function d(p,h,y,C,k){return h===null||h.tag!==7?(h=xn(y,p.mode,C,k),h.return=p,h):(h=r(h,y),h.return=p,h)}function f(p,h,y){if(typeof h=="string"&&h!==""||typeof h=="number")return h=fo(""+h,p.mode,y),h.return=p,h;if(typeof h=="object"&&h!==null){switch(h.$$typeof){case Wr:return y=Sa(h.type,h.key,h.props,null,p.mode,y),y.ref=Mi(p,null,h),y.return=p,y;case On:return h=mo(h,p.mode,y),h.return=p,h;case Dt:var C=h._init;return f(p,C(h._payload),y)}if(Fi(h)||Pi(h))return h=xn(h,p.mode,y,null),h.return=p,h;ea(p,h)}return null}function m(p,h,y,C){var k=h!==null?h.key:null;if(typeof y=="string"&&y!==""||typeof y=="number")return k!==null?null:o(p,h,""+y,C);if(typeof y=="object"&&y!==null){switch(y.$$typeof){case Wr:return y.key===k?l(p,h,y,C):null;case On:return y.key===k?c(p,h,y,C):null;case Dt:return k=y._init,m(p,h,k(y._payload),C)}if(Fi(y)||Pi(y))return k!==null?null:d(p,h,y,C,null);ea(p,y)}return null}function x(p,h,y,C,k){if(typeof C=="string"&&C!==""||typeof C=="number")return p=p.get(y)||null,o(h,p,""+C,k);if(typeof C=="object"&&C!==null){switch(C.$$typeof){case Wr:return p=p.get(C.key===null?y:C.key)||null,l(h,p,C,k);case On:return p=p.get(C.key===null?y:C.key)||null,c(h,p,C,k);case Dt:var P=C._init;return x(p,h,y,P(C._payload),k)}if(Fi(C)||Pi(C))return p=p.get(y)||null,d(h,p,C,k,null);ea(h,C)}return null}function w(p,h,y,C){for(var k=null,P=null,S=h,T=h=0,D=null;S!==null&&T<y.length;T++){S.index>T?(D=S,S=null):D=S.sibling;var N=m(p,S,y[T],C);if(N===null){S===null&&(S=D);break}e&&S&&N.alternate===null&&t(p,S),h=a(N,h,T),P===null?k=N:P.sibling=N,P=N,S=D}if(T===y.length)return n(p,S),Q&&un(p,T),k;if(S===null){for(;T<y.length;T++)S=f(p,y[T],C),S!==null&&(h=a(S,h,T),P===null?k=S:P.sibling=S,P=S);return Q&&un(p,T),k}for(S=i(p,S);T<y.length;T++)D=x(S,p,T,y[T],C),D!==null&&(e&&D.alternate!==null&&S.delete(D.key===null?T:D.key),h=a(D,h,T),P===null?k=D:P.sibling=D,P=D);return e&&S.forEach(function(W){return t(p,W)}),Q&&un(p,T),k}function v(p,h,y,C){var k=Pi(y);if(typeof k!="function")throw Error(E(150));if(y=k.call(y),y==null)throw Error(E(151));for(var P=k=null,S=h,T=h=0,D=null,N=y.next();S!==null&&!N.done;T++,N=y.next()){S.index>T?(D=S,S=null):D=S.sibling;var W=m(p,S,N.value,C);if(W===null){S===null&&(S=D);break}e&&S&&W.alternate===null&&t(p,S),h=a(W,h,T),P===null?k=W:P.sibling=W,P=W,S=D}if(N.done)return n(p,S),Q&&un(p,T),k;if(S===null){for(;!N.done;T++,N=y.next())N=f(p,N.value,C),N!==null&&(h=a(N,h,T),P===null?k=N:P.sibling=N,P=N);return Q&&un(p,T),k}for(S=i(p,S);!N.done;T++,N=y.next())N=x(S,p,T,N.value,C),N!==null&&(e&&N.alternate!==null&&S.delete(N.key===null?T:N.key),h=a(N,h,T),P===null?k=N:P.sibling=N,P=N);return e&&S.forEach(function(F){return t(p,F)}),Q&&un(p,T),k}function b(p,h,y,C){if(typeof y=="object"&&y!==null&&y.type===Ln&&y.key===null&&(y=y.props.children),typeof y=="object"&&y!==null){switch(y.$$typeof){case Wr:e:{for(var k=y.key,P=h;P!==null;){if(P.key===k){if(k=y.type,k===Ln){if(P.tag===7){n(p,P.sibling),h=r(P,y.props.children),h.return=p,p=h;break e}}else if(P.elementType===k||typeof k=="object"&&k!==null&&k.$$typeof===Dt&&Cd(k)===P.type){n(p,P.sibling),h=r(P,y.props),h.ref=Mi(p,P,y),h.return=p,p=h;break e}n(p,P);break}else t(p,P);P=P.sibling}y.type===Ln?(h=xn(y.props.children,p.mode,C,y.key),h.return=p,p=h):(C=Sa(y.type,y.key,y.props,null,p.mode,C),C.ref=Mi(p,h,y),C.return=p,p=C)}return s(p);case On:e:{for(P=y.key;h!==null;){if(h.key===P)if(h.tag===4&&h.stateNode.containerInfo===y.containerInfo&&h.stateNode.implementation===y.implementation){n(p,h.sibling),h=r(h,y.children||[]),h.return=p,p=h;break e}else{n(p,h);break}else t(p,h);h=h.sibling}h=mo(y,p.mode,C),h.return=p,p=h}return s(p);case Dt:return P=y._init,b(p,h,P(y._payload),C)}if(Fi(y))return w(p,h,y,C);if(Pi(y))return v(p,h,y,C);ea(p,y)}return typeof y=="string"&&y!==""||typeof y=="number"?(y=""+y,h!==null&&h.tag===6?(n(p,h.sibling),h=r(h,y),h.return=p,p=h):(n(p,h),h=fo(y,p.mode,C),h.return=p,p=h),s(p)):n(p,h)}return b}var di=Yp(!0),Xp=Yp(!1),Wa=nn(null),qa=null,$n=null,Ec=null;function Ac(){Ec=$n=qa=null}function jc(e){var t=Wa.current;G(Wa),e._currentValue=t}function pl(e,t,n){for(;e!==null;){var i=e.alternate;if((e.childLanes&t)!==t?(e.childLanes|=t,i!==null&&(i.childLanes|=t)):i!==null&&(i.childLanes&t)!==t&&(i.childLanes|=t),e===n)break;e=e.return}}function ii(e,t){qa=e,Ec=$n=null,e=e.dependencies,e!==null&&e.firstContext!==null&&(e.lanes&t&&(Ee=!0),e.firstContext=null)}function He(e){var t=e._currentValue;if(Ec!==e)if(e={context:e,memoizedValue:t,next:null},$n===null){if(qa===null)throw Error(E(308));$n=e,qa.dependencies={lanes:0,firstContext:e}}else $n=$n.next=e;return t}var hn=null;function Nc(e){hn===null?hn=[e]:hn.push(e)}function Zp(e,t,n,i){var r=t.interleaved;return r===null?(n.next=n,Nc(t)):(n.next=r.next,r.next=n),t.interleaved=n,St(e,i)}function St(e,t){e.lanes|=t;var n=e.alternate;for(n!==null&&(n.lanes|=t),n=e,e=e.return;e!==null;)e.childLanes|=t,n=e.alternate,n!==null&&(n.childLanes|=t),n=e,e=e.return;return n.tag===3?n.stateNode:null}var zt=!1;function Mc(e){e.updateQueue={baseState:e.memoizedState,firstBaseUpdate:null,lastBaseUpdate:null,shared:{pending:null,interleaved:null,lanes:0},effects:null}}function Jp(e,t){e=e.updateQueue,t.updateQueue===e&&(t.updateQueue={baseState:e.baseState,firstBaseUpdate:e.firstBaseUpdate,lastBaseUpdate:e.lastBaseUpdate,shared:e.shared,effects:e.effects})}function xt(e,t){return{eventTime:e,lane:t,tag:0,payload:null,callback:null,next:null}}function $t(e,t,n){var i=e.updateQueue;if(i===null)return null;if(i=i.shared,_&2){var r=i.pending;return r===null?t.next=t:(t.next=r.next,r.next=t),i.pending=t,St(e,n)}return r=i.interleaved,r===null?(t.next=t,Nc(i)):(t.next=r.next,r.next=t),i.interleaved=t,St(e,n)}function ya(e,t,n){if(t=t.updateQueue,t!==null&&(t=t.shared,(n&4194240)!==0)){var i=t.lanes;i&=e.pendingLanes,n|=i,t.lanes=n,gc(e,n)}}function kd(e,t){var n=e.updateQueue,i=e.alternate;if(i!==null&&(i=i.updateQueue,n===i)){var r=null,a=null;if(n=n.firstBaseUpdate,n!==null){do{var s={eventTime:n.eventTime,lane:n.lane,tag:n.tag,payload:n.payload,callback:n.callback,next:null};a===null?r=a=s:a=a.next=s,n=n.next}while(n!==null);a===null?r=a=t:a=a.next=t}else r=a=t;n={baseState:i.baseState,firstBaseUpdate:r,lastBaseUpdate:a,shared:i.shared,effects:i.effects},e.updateQueue=n;return}e=n.lastBaseUpdate,e===null?n.firstBaseUpdate=t:e.next=t,n.lastBaseUpdate=t}function $a(e,t,n,i){var r=e.updateQueue;zt=!1;var a=r.firstBaseUpdate,s=r.lastBaseUpdate,o=r.shared.pending;if(o!==null){r.shared.pending=null;var l=o,c=l.next;l.next=null,s===null?a=c:s.next=c,s=l;var d=e.alternate;d!==null&&(d=d.updateQueue,o=d.lastBaseUpdate,o!==s&&(o===null?d.firstBaseUpdate=c:o.next=c,d.lastBaseUpdate=l))}if(a!==null){var f=r.baseState;s=0,d=c=l=null,o=a;do{var m=o.lane,x=o.eventTime;if((i&m)===m){d!==null&&(d=d.next={eventTime:x,lane:0,tag:o.tag,payload:o.payload,callback:o.callback,next:null});e:{var w=e,v=o;switch(m=t,x=n,v.tag){case 1:if(w=v.payload,typeof w=="function"){f=w.call(x,f,m);break e}f=w;break e;case 3:w.flags=w.flags&-65537|128;case 0:if(w=v.payload,m=typeof w=="function"?w.call(x,f,m):w,m==null)break e;f=J({},f,m);break e;case 2:zt=!0}}o.callback!==null&&o.lane!==0&&(e.flags|=64,m=r.effects,m===null?r.effects=[o]:m.push(o))}else x={eventTime:x,lane:m,tag:o.tag,payload:o.payload,callback:o.callback,next:null},d===null?(c=d=x,l=f):d=d.next=x,s|=m;if(o=o.next,o===null){if(o=r.shared.pending,o===null)break;m=o,o=m.next,m.next=null,r.lastBaseUpdate=m,r.shared.pending=null}}while(!0);if(d===null&&(l=f),r.baseState=l,r.firstBaseUpdate=c,r.lastBaseUpdate=d,t=r.shared.interleaved,t!==null){r=t;do s|=r.lane,r=r.next;while(r!==t)}else a===null&&(r.shared.lanes=0);Sn|=s,e.lanes=s,e.memoizedState=f}}function Sd(e,t,n){if(e=t.effects,t.effects=null,e!==null)for(t=0;t<e.length;t++){var i=e[t],r=i.callback;if(r!==null){if(i.callback=null,i=n,typeof r!="function")throw Error(E(191,r));r.call(i)}}}var Dr={},ut=nn(Dr),pr=nn(Dr),hr=nn(Dr);function gn(e){if(e===Dr)throw Error(E(174));return e}function Rc(e,t){switch(q(hr,t),q(pr,e),q(ut,Dr),e=t.nodeType,e){case 9:case 11:t=(t=t.documentElement)?t.namespaceURI:Ko(null,"");break;default:e=e===8?t.parentNode:t,t=e.namespaceURI||null,e=e.tagName,t=Ko(t,e)}G(ut),q(ut,t)}function fi(){G(ut),G(pr),G(hr)}function eh(e){gn(hr.current);var t=gn(ut.current),n=Ko(t,e.type);t!==n&&(q(pr,e),q(ut,n))}function Ic(e){pr.current===e&&(G(ut),G(pr))}var Y=nn(0);function Ha(e){for(var t=e;t!==null;){if(t.tag===13){var n=t.memoizedState;if(n!==null&&(n=n.dehydrated,n===null||n.data==="$?"||n.data==="$!"))return t}else if(t.tag===19&&t.memoizedProps.revealOrder!==void 0){if(t.flags&128)return t}else if(t.child!==null){t.child.return=t,t=t.child;continue}if(t===e)break;for(;t.sibling===null;){if(t.return===null||t.return===e)return null;t=t.return}t.sibling.return=t.return,t=t.sibling}return null}var ao=[];function Dc(){for(var e=0;e<ao.length;e++)ao[e]._workInProgressVersionPrimary=null;ao.length=0}var xa=Et.ReactCurrentDispatcher,so=Et.ReactCurrentBatchConfig,kn=0,Z=null,oe=null,ue=null,Ga=!1,Qi=!1,gr=0,w0=0;function ge(){throw Error(E(321))}function zc(e,t){if(t===null)return!1;for(var n=0;n<t.length&&n<e.length;n++)if(!tt(e[n],t[n]))return!1;return!0}function Oc(e,t,n,i,r,a){if(kn=a,Z=t,t.memoizedState=null,t.updateQueue=null,t.lanes=0,xa.current=e===null||e.memoizedState===null?S0:T0,e=n(i,r),Qi){a=0;do{if(Qi=!1,gr=0,25<=a)throw Error(E(301));a+=1,ue=oe=null,t.updateQueue=null,xa.current=P0,e=n(i,r)}while(Qi)}if(xa.current=Ka,t=oe!==null&&oe.next!==null,kn=0,ue=oe=Z=null,Ga=!1,t)throw Error(E(300));return e}function Lc(){var e=gr!==0;return gr=0,e}function st(){var e={memoizedState:null,baseState:null,baseQueue:null,queue:null,next:null};return ue===null?Z.memoizedState=ue=e:ue=ue.next=e,ue}function Ge(){if(oe===null){var e=Z.alternate;e=e!==null?e.memoizedState:null}else e=oe.next;var t=ue===null?Z.memoizedState:ue.next;if(t!==null)ue=t,oe=e;else{if(e===null)throw Error(E(310));oe=e,e={memoizedState:oe.memoizedState,baseState:oe.baseState,baseQueue:oe.baseQueue,queue:oe.queue,next:null},ue===null?Z.memoizedState=ue=e:ue=ue.next=e}return ue}function vr(e,t){return typeof t=="function"?t(e):t}function oo(e){var t=Ge(),n=t.queue;if(n===null)throw Error(E(311));n.lastRenderedReducer=e;var i=oe,r=i.baseQueue,a=n.pending;if(a!==null){if(r!==null){var s=r.next;r.next=a.next,a.next=s}i.baseQueue=r=a,n.pending=null}if(r!==null){a=r.next,i=i.baseState;var o=s=null,l=null,c=a;do{var d=c.lane;if((kn&d)===d)l!==null&&(l=l.next={lane:0,action:c.action,hasEagerState:c.hasEagerState,eagerState:c.eagerState,next:null}),i=c.hasEagerState?c.eagerState:e(i,c.action);else{var f={lane:d,action:c.action,hasEagerState:c.hasEagerState,eagerState:c.eagerState,next:null};l===null?(o=l=f,s=i):l=l.next=f,Z.lanes|=d,Sn|=d}c=c.next}while(c!==null&&c!==a);l===null?s=i:l.next=o,tt(i,t.memoizedState)||(Ee=!0),t.memoizedState=i,t.baseState=s,t.baseQueue=l,n.lastRenderedState=i}if(e=n.interleaved,e!==null){r=e;do a=r.lane,Z.lanes|=a,Sn|=a,r=r.next;while(r!==e)}else r===null&&(n.lanes=0);return[t.memoizedState,n.dispatch]}function lo(e){var t=Ge(),n=t.queue;if(n===null)throw Error(E(311));n.lastRenderedReducer=e;var i=n.dispatch,r=n.pending,a=t.memoizedState;if(r!==null){n.pending=null;var s=r=r.next;do a=e(a,s.action),s=s.next;while(s!==r);tt(a,t.memoizedState)||(Ee=!0),t.memoizedState=a,t.baseQueue===null&&(t.baseState=a),n.lastRenderedState=a}return[a,i]}function th(){}function nh(e,t){var n=Z,i=Ge(),r=t(),a=!tt(i.memoizedState,r);if(a&&(i.memoizedState=r,Ee=!0),i=i.queue,Fc(ah.bind(null,n,i,e),[e]),i.getSnapshot!==t||a||ue!==null&&ue.memoizedState.tag&1){if(n.flags|=2048,yr(9,rh.bind(null,n,i,r,t),void 0,null),de===null)throw Error(E(349));kn&30||ih(n,t,r)}return r}function ih(e,t,n){e.flags|=16384,e={getSnapshot:t,value:n},t=Z.updateQueue,t===null?(t={lastEffect:null,stores:null},Z.updateQueue=t,t.stores=[e]):(n=t.stores,n===null?t.stores=[e]:n.push(e))}function rh(e,t,n,i){t.value=n,t.getSnapshot=i,sh(t)&&oh(e)}function ah(e,t,n){return n(function(){sh(t)&&oh(e)})}function sh(e){var t=e.getSnapshot;e=e.value;try{var n=t();return!tt(e,n)}catch{return!0}}function oh(e){var t=St(e,1);t!==null&&et(t,e,1,-1)}function Td(e){var t=st();return typeof e=="function"&&(e=e()),t.memoizedState=t.baseState=e,e={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:vr,lastRenderedState:e},t.queue=e,e=e.dispatch=k0.bind(null,Z,e),[t.memoizedState,e]}function yr(e,t,n,i){return e={tag:e,create:t,destroy:n,deps:i,next:null},t=Z.updateQueue,t===null?(t={lastEffect:null,stores:null},Z.updateQueue=t,t.lastEffect=e.next=e):(n=t.lastEffect,n===null?t.lastEffect=e.next=e:(i=n.next,n.next=e,e.next=i,t.lastEffect=e)),e}function lh(){return Ge().memoizedState}function wa(e,t,n,i){var r=st();Z.flags|=e,r.memoizedState=yr(1|t,n,void 0,i===void 0?null:i)}function ws(e,t,n,i){var r=Ge();i=i===void 0?null:i;var a=void 0;if(oe!==null){var s=oe.memoizedState;if(a=s.destroy,i!==null&&zc(i,s.deps)){r.memoizedState=yr(t,n,a,i);return}}Z.flags|=e,r.memoizedState=yr(1|t,n,a,i)}function Pd(e,t){return wa(8390656,8,e,t)}function Fc(e,t){return ws(2048,8,e,t)}function ch(e,t){return ws(4,2,e,t)}function uh(e,t){return ws(4,4,e,t)}function dh(e,t){if(typeof t=="function")return e=e(),t(e),function(){t(null)};if(t!=null)return e=e(),t.current=e,function(){t.current=null}}function fh(e,t,n){return n=n!=null?n.concat([e]):null,ws(4,4,dh.bind(null,t,e),n)}function _c(){}function mh(e,t){var n=Ge();t=t===void 0?null:t;var i=n.memoizedState;return i!==null&&t!==null&&zc(t,i[1])?i[0]:(n.memoizedState=[e,t],e)}function ph(e,t){var n=Ge();t=t===void 0?null:t;var i=n.memoizedState;return i!==null&&t!==null&&zc(t,i[1])?i[0]:(e=e(),n.memoizedState=[e,t],e)}function hh(e,t,n){return kn&21?(tt(n,t)||(n=wp(),Z.lanes|=n,Sn|=n,e.baseState=!0),t):(e.baseState&&(e.baseState=!1,Ee=!0),e.memoizedState=n)}function b0(e,t){var n=U;U=n!==0&&4>n?n:4,e(!0);var i=so.transition;so.transition={};try{e(!1),t()}finally{U=n,so.transition=i}}function gh(){return Ge().memoizedState}function C0(e,t,n){var i=Gt(e);if(n={lane:i,action:n,hasEagerState:!1,eagerState:null,next:null},vh(e))yh(t,n);else if(n=Zp(e,t,n,i),n!==null){var r=ke();et(n,e,i,r),xh(n,t,i)}}function k0(e,t,n){var i=Gt(e),r={lane:i,action:n,hasEagerState:!1,eagerState:null,next:null};if(vh(e))yh(t,r);else{var a=e.alternate;if(e.lanes===0&&(a===null||a.lanes===0)&&(a=t.lastRenderedReducer,a!==null))try{var s=t.lastRenderedState,o=a(s,n);if(r.hasEagerState=!0,r.eagerState=o,tt(o,s)){var l=t.interleaved;l===null?(r.next=r,Nc(t)):(r.next=l.next,l.next=r),t.interleaved=r;return}}catch{}finally{}n=Zp(e,t,r,i),n!==null&&(r=ke(),et(n,e,i,r),xh(n,t,i))}}function vh(e){var t=e.alternate;return e===Z||t!==null&&t===Z}function yh(e,t){Qi=Ga=!0;var n=e.pending;n===null?t.next=t:(t.next=n.next,n.next=t),e.pending=t}function xh(e,t,n){if(n&4194240){var i=t.lanes;i&=e.pendingLanes,n|=i,t.lanes=n,gc(e,n)}}var Ka={readContext:He,useCallback:ge,useContext:ge,useEffect:ge,useImperativeHandle:ge,useInsertionEffect:ge,useLayoutEffect:ge,useMemo:ge,useReducer:ge,useRef:ge,useState:ge,useDebugValue:ge,useDeferredValue:ge,useTransition:ge,useMutableSource:ge,useSyncExternalStore:ge,useId:ge,unstable_isNewReconciler:!1},S0={readContext:He,useCallback:function(e,t){return st().memoizedState=[e,t===void 0?null:t],e},useContext:He,useEffect:Pd,useImperativeHandle:function(e,t,n){return n=n!=null?n.concat([e]):null,wa(4194308,4,dh.bind(null,t,e),n)},useLayoutEffect:function(e,t){return wa(4194308,4,e,t)},useInsertionEffect:function(e,t){return wa(4,2,e,t)},useMemo:function(e,t){var n=st();return t=t===void 0?null:t,e=e(),n.memoizedState=[e,t],e},useReducer:function(e,t,n){var i=st();return t=n!==void 0?n(t):t,i.memoizedState=i.baseState=t,e={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:e,lastRenderedState:t},i.queue=e,e=e.dispatch=C0.bind(null,Z,e),[i.memoizedState,e]},useRef:function(e){var t=st();return e={current:e},t.memoizedState=e},useState:Td,useDebugValue:_c,useDeferredValue:function(e){return st().memoizedState=e},useTransition:function(){var e=Td(!1),t=e[0];return e=b0.bind(null,e[1]),st().memoizedState=e,[t,e]},useMutableSource:function(){},useSyncExternalStore:function(e,t,n){var i=Z,r=st();if(Q){if(n===void 0)throw Error(E(407));n=n()}else{if(n=t(),de===null)throw Error(E(349));kn&30||ih(i,t,n)}r.memoizedState=n;var a={value:n,getSnapshot:t};return r.queue=a,Pd(ah.bind(null,i,a,e),[e]),i.flags|=2048,yr(9,rh.bind(null,i,a,n,t),void 0,null),n},useId:function(){var e=st(),t=de.identifierPrefix;if(Q){var n=yt,i=vt;n=(i&~(1<<32-Je(i)-1)).toString(32)+n,t=":"+t+"R"+n,n=gr++,0<n&&(t+="H"+n.toString(32)),t+=":"}else n=w0++,t=":"+t+"r"+n.toString(32)+":";return e.memoizedState=t},unstable_isNewReconciler:!1},T0={readContext:He,useCallback:mh,useContext:He,useEffect:Fc,useImperativeHandle:fh,useInsertionEffect:ch,useLayoutEffect:uh,useMemo:ph,useReducer:oo,useRef:lh,useState:function(){return oo(vr)},useDebugValue:_c,useDeferredValue:function(e){var t=Ge();return hh(t,oe.memoizedState,e)},useTransition:function(){var e=oo(vr)[0],t=Ge().memoizedState;return[e,t]},useMutableSource:th,useSyncExternalStore:nh,useId:gh,unstable_isNewReconciler:!1},P0={readContext:He,useCallback:mh,useContext:He,useEffect:Fc,useImperativeHandle:fh,useInsertionEffect:ch,useLayoutEffect:uh,useMemo:ph,useReducer:lo,useRef:lh,useState:function(){return lo(vr)},useDebugValue:_c,useDeferredValue:function(e){var t=Ge();return oe===null?t.memoizedState=e:hh(t,oe.memoizedState,e)},useTransition:function(){var e=lo(vr)[0],t=Ge().memoizedState;return[e,t]},useMutableSource:th,useSyncExternalStore:nh,useId:gh,unstable_isNewReconciler:!1};function Ye(e,t){if(e&&e.defaultProps){t=J({},t),e=e.defaultProps;for(var n in e)t[n]===void 0&&(t[n]=e[n]);return t}return t}function hl(e,t,n,i){t=e.memoizedState,n=n(i,t),n=n==null?t:J({},t,n),e.memoizedState=n,e.lanes===0&&(e.updateQueue.baseState=n)}var bs={isMounted:function(e){return(e=e._reactInternals)?An(e)===e:!1},enqueueSetState:function(e,t,n){e=e._reactInternals;var i=ke(),r=Gt(e),a=xt(i,r);a.payload=t,n!=null&&(a.callback=n),t=$t(e,a,r),t!==null&&(et(t,e,r,i),ya(t,e,r))},enqueueReplaceState:function(e,t,n){e=e._reactInternals;var i=ke(),r=Gt(e),a=xt(i,r);a.tag=1,a.payload=t,n!=null&&(a.callback=n),t=$t(e,a,r),t!==null&&(et(t,e,r,i),ya(t,e,r))},enqueueForceUpdate:function(e,t){e=e._reactInternals;var n=ke(),i=Gt(e),r=xt(n,i);r.tag=2,t!=null&&(r.callback=t),t=$t(e,r,i),t!==null&&(et(t,e,i,n),ya(t,e,i))}};function Ed(e,t,n,i,r,a,s){return e=e.stateNode,typeof e.shouldComponentUpdate=="function"?e.shouldComponentUpdate(i,a,s):t.prototype&&t.prototype.isPureReactComponent?!ur(n,i)||!ur(r,a):!0}function wh(e,t,n){var i=!1,r=Zt,a=t.contextType;return typeof a=="object"&&a!==null?a=He(a):(r=je(t)?bn:be.current,i=t.contextTypes,a=(i=i!=null)?ci(e,r):Zt),t=new t(n,a),e.memoizedState=t.state!==null&&t.state!==void 0?t.state:null,t.updater=bs,e.stateNode=t,t._reactInternals=e,i&&(e=e.stateNode,e.__reactInternalMemoizedUnmaskedChildContext=r,e.__reactInternalMemoizedMaskedChildContext=a),t}function Ad(e,t,n,i){e=t.state,typeof t.componentWillReceiveProps=="function"&&t.componentWillReceiveProps(n,i),typeof t.UNSAFE_componentWillReceiveProps=="function"&&t.UNSAFE_componentWillReceiveProps(n,i),t.state!==e&&bs.enqueueReplaceState(t,t.state,null)}function gl(e,t,n,i){var r=e.stateNode;r.props=n,r.state=e.memoizedState,r.refs={},Mc(e);var a=t.contextType;typeof a=="object"&&a!==null?r.context=He(a):(a=je(t)?bn:be.current,r.context=ci(e,a)),r.state=e.memoizedState,a=t.getDerivedStateFromProps,typeof a=="function"&&(hl(e,t,a,n),r.state=e.memoizedState),typeof t.getDerivedStateFromProps=="function"||typeof r.getSnapshotBeforeUpdate=="function"||typeof r.UNSAFE_componentWillMount!="function"&&typeof r.componentWillMount!="function"||(t=r.state,typeof r.componentWillMount=="function"&&r.componentWillMount(),typeof r.UNSAFE_componentWillMount=="function"&&r.UNSAFE_componentWillMount(),t!==r.state&&bs.enqueueReplaceState(r,r.state,null),$a(e,n,r,i),r.state=e.memoizedState),typeof r.componentDidMount=="function"&&(e.flags|=4194308)}function mi(e,t){try{var n="",i=t;do n+=ex(i),i=i.return;while(i);var r=n}catch(a){r=`
Error generating stack: `+a.message+`
`+a.stack}return{value:e,source:t,stack:r,digest:null}}function co(e,t,n){return{value:e,source:null,stack:n??null,digest:t??null}}function vl(e,t){try{console.error(t.value)}catch(n){setTimeout(function(){throw n})}}var E0=typeof WeakMap=="function"?WeakMap:Map;function bh(e,t,n){n=xt(-1,n),n.tag=3,n.payload={element:null};var i=t.value;return n.callback=function(){Ya||(Ya=!0,El=i),vl(e,t)},n}function Ch(e,t,n){n=xt(-1,n),n.tag=3;var i=e.type.getDerivedStateFromError;if(typeof i=="function"){var r=t.value;n.payload=function(){return i(r)},n.callback=function(){vl(e,t)}}var a=e.stateNode;return a!==null&&typeof a.componentDidCatch=="function"&&(n.callback=function(){vl(e,t),typeof i!="function"&&(Ht===null?Ht=new Set([this]):Ht.add(this));var s=t.stack;this.componentDidCatch(t.value,{componentStack:s!==null?s:""})}),n}function jd(e,t,n){var i=e.pingCache;if(i===null){i=e.pingCache=new E0;var r=new Set;i.set(t,r)}else r=i.get(t),r===void 0&&(r=new Set,i.set(t,r));r.has(n)||(r.add(n),e=V0.bind(null,e,t,n),t.then(e,e))}function Nd(e){do{var t;if((t=e.tag===13)&&(t=e.memoizedState,t=t!==null?t.dehydrated!==null:!0),t)return e;e=e.return}while(e!==null);return null}function Md(e,t,n,i,r){return e.mode&1?(e.flags|=65536,e.lanes=r,e):(e===t?e.flags|=65536:(e.flags|=128,n.flags|=131072,n.flags&=-52805,n.tag===1&&(n.alternate===null?n.tag=17:(t=xt(-1,1),t.tag=2,$t(n,t,1))),n.lanes|=1),e)}var A0=Et.ReactCurrentOwner,Ee=!1;function Ce(e,t,n,i){t.child=e===null?Xp(t,null,n,i):di(t,e.child,n,i)}function Rd(e,t,n,i,r){n=n.render;var a=t.ref;return ii(t,r),i=Oc(e,t,n,i,a,r),n=Lc(),e!==null&&!Ee?(t.updateQueue=e.updateQueue,t.flags&=-2053,e.lanes&=~r,Tt(e,t,r)):(Q&&n&&Sc(t),t.flags|=1,Ce(e,t,i,r),t.child)}function Id(e,t,n,i,r){if(e===null){var a=n.type;return typeof a=="function"&&!Gc(a)&&a.defaultProps===void 0&&n.compare===null&&n.defaultProps===void 0?(t.tag=15,t.type=a,kh(e,t,a,i,r)):(e=Sa(n.type,null,i,t,t.mode,r),e.ref=t.ref,e.return=t,t.child=e)}if(a=e.child,!(e.lanes&r)){var s=a.memoizedProps;if(n=n.compare,n=n!==null?n:ur,n(s,i)&&e.ref===t.ref)return Tt(e,t,r)}return t.flags|=1,e=Kt(a,i),e.ref=t.ref,e.return=t,t.child=e}function kh(e,t,n,i,r){if(e!==null){var a=e.memoizedProps;if(ur(a,i)&&e.ref===t.ref)if(Ee=!1,t.pendingProps=i=a,(e.lanes&r)!==0)e.flags&131072&&(Ee=!0);else return t.lanes=e.lanes,Tt(e,t,r)}return yl(e,t,n,i,r)}function Sh(e,t,n){var i=t.pendingProps,r=i.children,a=e!==null?e.memoizedState:null;if(i.mode==="hidden")if(!(t.mode&1))t.memoizedState={baseLanes:0,cachePool:null,transitions:null},q(Gn,Me),Me|=n;else{if(!(n&1073741824))return e=a!==null?a.baseLanes|n:n,t.lanes=t.childLanes=1073741824,t.memoizedState={baseLanes:e,cachePool:null,transitions:null},t.updateQueue=null,q(Gn,Me),Me|=e,null;t.memoizedState={baseLanes:0,cachePool:null,transitions:null},i=a!==null?a.baseLanes:n,q(Gn,Me),Me|=i}else a!==null?(i=a.baseLanes|n,t.memoizedState=null):i=n,q(Gn,Me),Me|=i;return Ce(e,t,r,n),t.child}function Th(e,t){var n=t.ref;(e===null&&n!==null||e!==null&&e.ref!==n)&&(t.flags|=512,t.flags|=2097152)}function yl(e,t,n,i,r){var a=je(n)?bn:be.current;return a=ci(t,a),ii(t,r),n=Oc(e,t,n,i,a,r),i=Lc(),e!==null&&!Ee?(t.updateQueue=e.updateQueue,t.flags&=-2053,e.lanes&=~r,Tt(e,t,r)):(Q&&i&&Sc(t),t.flags|=1,Ce(e,t,n,r),t.child)}function Dd(e,t,n,i,r){if(je(n)){var a=!0;Ba(t)}else a=!1;if(ii(t,r),t.stateNode===null)ba(e,t),wh(t,n,i),gl(t,n,i,r),i=!0;else if(e===null){var s=t.stateNode,o=t.memoizedProps;s.props=o;var l=s.context,c=n.contextType;typeof c=="object"&&c!==null?c=He(c):(c=je(n)?bn:be.current,c=ci(t,c));var d=n.getDerivedStateFromProps,f=typeof d=="function"||typeof s.getSnapshotBeforeUpdate=="function";f||typeof s.UNSAFE_componentWillReceiveProps!="function"&&typeof s.componentWillReceiveProps!="function"||(o!==i||l!==c)&&Ad(t,s,i,c),zt=!1;var m=t.memoizedState;s.state=m,$a(t,i,s,r),l=t.memoizedState,o!==i||m!==l||Ae.current||zt?(typeof d=="function"&&(hl(t,n,d,i),l=t.memoizedState),(o=zt||Ed(t,n,o,i,m,l,c))?(f||typeof s.UNSAFE_componentWillMount!="function"&&typeof s.componentWillMount!="function"||(typeof s.componentWillMount=="function"&&s.componentWillMount(),typeof s.UNSAFE_componentWillMount=="function"&&s.UNSAFE_componentWillMount()),typeof s.componentDidMount=="function"&&(t.flags|=4194308)):(typeof s.componentDidMount=="function"&&(t.flags|=4194308),t.memoizedProps=i,t.memoizedState=l),s.props=i,s.state=l,s.context=c,i=o):(typeof s.componentDidMount=="function"&&(t.flags|=4194308),i=!1)}else{s=t.stateNode,Jp(e,t),o=t.memoizedProps,c=t.type===t.elementType?o:Ye(t.type,o),s.props=c,f=t.pendingProps,m=s.context,l=n.contextType,typeof l=="object"&&l!==null?l=He(l):(l=je(n)?bn:be.current,l=ci(t,l));var x=n.getDerivedStateFromProps;(d=typeof x=="function"||typeof s.getSnapshotBeforeUpdate=="function")||typeof s.UNSAFE_componentWillReceiveProps!="function"&&typeof s.componentWillReceiveProps!="function"||(o!==f||m!==l)&&Ad(t,s,i,l),zt=!1,m=t.memoizedState,s.state=m,$a(t,i,s,r);var w=t.memoizedState;o!==f||m!==w||Ae.current||zt?(typeof x=="function"&&(hl(t,n,x,i),w=t.memoizedState),(c=zt||Ed(t,n,c,i,m,w,l)||!1)?(d||typeof s.UNSAFE_componentWillUpdate!="function"&&typeof s.componentWillUpdate!="function"||(typeof s.componentWillUpdate=="function"&&s.componentWillUpdate(i,w,l),typeof s.UNSAFE_componentWillUpdate=="function"&&s.UNSAFE_componentWillUpdate(i,w,l)),typeof s.componentDidUpdate=="function"&&(t.flags|=4),typeof s.getSnapshotBeforeUpdate=="function"&&(t.flags|=1024)):(typeof s.componentDidUpdate!="function"||o===e.memoizedProps&&m===e.memoizedState||(t.flags|=4),typeof s.getSnapshotBeforeUpdate!="function"||o===e.memoizedProps&&m===e.memoizedState||(t.flags|=1024),t.memoizedProps=i,t.memoizedState=w),s.props=i,s.state=w,s.context=l,i=c):(typeof s.componentDidUpdate!="function"||o===e.memoizedProps&&m===e.memoizedState||(t.flags|=4),typeof s.getSnapshotBeforeUpdate!="function"||o===e.memoizedProps&&m===e.memoizedState||(t.flags|=1024),i=!1)}return xl(e,t,n,i,a,r)}function xl(e,t,n,i,r,a){Th(e,t);var s=(t.flags&128)!==0;if(!i&&!s)return r&&xd(t,n,!1),Tt(e,t,a);i=t.stateNode,A0.current=t;var o=s&&typeof n.getDerivedStateFromError!="function"?null:i.render();return t.flags|=1,e!==null&&s?(t.child=di(t,e.child,null,a),t.child=di(t,null,o,a)):Ce(e,t,o,a),t.memoizedState=i.state,r&&xd(t,n,!0),t.child}function Ph(e){var t=e.stateNode;t.pendingContext?yd(e,t.pendingContext,t.pendingContext!==t.context):t.context&&yd(e,t.context,!1),Rc(e,t.containerInfo)}function zd(e,t,n,i,r){return ui(),Pc(r),t.flags|=256,Ce(e,t,n,i),t.child}var wl={dehydrated:null,treeContext:null,retryLane:0};function bl(e){return{baseLanes:e,cachePool:null,transitions:null}}function Eh(e,t,n){var i=t.pendingProps,r=Y.current,a=!1,s=(t.flags&128)!==0,o;if((o=s)||(o=e!==null&&e.memoizedState===null?!1:(r&2)!==0),o?(a=!0,t.flags&=-129):(e===null||e.memoizedState!==null)&&(r|=1),q(Y,r&1),e===null)return ml(t),e=t.memoizedState,e!==null&&(e=e.dehydrated,e!==null)?(t.mode&1?e.data==="$!"?t.lanes=8:t.lanes=1073741824:t.lanes=1,null):(s=i.children,e=i.fallback,a?(i=t.mode,a=t.child,s={mode:"hidden",children:s},!(i&1)&&a!==null?(a.childLanes=0,a.pendingProps=s):a=Ss(s,i,0,null),e=xn(e,i,n,null),a.return=t,e.return=t,a.sibling=e,t.child=a,t.child.memoizedState=bl(n),t.memoizedState=wl,e):Bc(t,s));if(r=e.memoizedState,r!==null&&(o=r.dehydrated,o!==null))return j0(e,t,s,i,o,r,n);if(a){a=i.fallback,s=t.mode,r=e.child,o=r.sibling;var l={mode:"hidden",children:i.children};return!(s&1)&&t.child!==r?(i=t.child,i.childLanes=0,i.pendingProps=l,t.deletions=null):(i=Kt(r,l),i.subtreeFlags=r.subtreeFlags&14680064),o!==null?a=Kt(o,a):(a=xn(a,s,n,null),a.flags|=2),a.return=t,i.return=t,i.sibling=a,t.child=i,i=a,a=t.child,s=e.child.memoizedState,s=s===null?bl(n):{baseLanes:s.baseLanes|n,cachePool:null,transitions:s.transitions},a.memoizedState=s,a.childLanes=e.childLanes&~n,t.memoizedState=wl,i}return a=e.child,e=a.sibling,i=Kt(a,{mode:"visible",children:i.children}),!(t.mode&1)&&(i.lanes=n),i.return=t,i.sibling=null,e!==null&&(n=t.deletions,n===null?(t.deletions=[e],t.flags|=16):n.push(e)),t.child=i,t.memoizedState=null,i}function Bc(e,t){return t=Ss({mode:"visible",children:t},e.mode,0,null),t.return=e,e.child=t}function ta(e,t,n,i){return i!==null&&Pc(i),di(t,e.child,null,n),e=Bc(t,t.pendingProps.children),e.flags|=2,t.memoizedState=null,e}function j0(e,t,n,i,r,a,s){if(n)return t.flags&256?(t.flags&=-257,i=co(Error(E(422))),ta(e,t,s,i)):t.memoizedState!==null?(t.child=e.child,t.flags|=128,null):(a=i.fallback,r=t.mode,i=Ss({mode:"visible",children:i.children},r,0,null),a=xn(a,r,s,null),a.flags|=2,i.return=t,a.return=t,i.sibling=a,t.child=i,t.mode&1&&di(t,e.child,null,s),t.child.memoizedState=bl(s),t.memoizedState=wl,a);if(!(t.mode&1))return ta(e,t,s,null);if(r.data==="$!"){if(i=r.nextSibling&&r.nextSibling.dataset,i)var o=i.dgst;return i=o,a=Error(E(419)),i=co(a,i,void 0),ta(e,t,s,i)}if(o=(s&e.childLanes)!==0,Ee||o){if(i=de,i!==null){switch(s&-s){case 4:r=2;break;case 16:r=8;break;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:r=32;break;case 536870912:r=268435456;break;default:r=0}r=r&(i.suspendedLanes|s)?0:r,r!==0&&r!==a.retryLane&&(a.retryLane=r,St(e,r),et(i,e,r,-1))}return Hc(),i=co(Error(E(421))),ta(e,t,s,i)}return r.data==="$?"?(t.flags|=128,t.child=e.child,t=U0.bind(null,e),r._reactRetry=t,null):(e=a.treeContext,Re=qt(r.nextSibling),Ie=t,Q=!0,Ze=null,e!==null&&(Ue[We++]=vt,Ue[We++]=yt,Ue[We++]=Cn,vt=e.id,yt=e.overflow,Cn=t),t=Bc(t,i.children),t.flags|=4096,t)}function Od(e,t,n){e.lanes|=t;var i=e.alternate;i!==null&&(i.lanes|=t),pl(e.return,t,n)}function uo(e,t,n,i,r){var a=e.memoizedState;a===null?e.memoizedState={isBackwards:t,rendering:null,renderingStartTime:0,last:i,tail:n,tailMode:r}:(a.isBackwards=t,a.rendering=null,a.renderingStartTime=0,a.last=i,a.tail=n,a.tailMode=r)}function Ah(e,t,n){var i=t.pendingProps,r=i.revealOrder,a=i.tail;if(Ce(e,t,i.children,n),i=Y.current,i&2)i=i&1|2,t.flags|=128;else{if(e!==null&&e.flags&128)e:for(e=t.child;e!==null;){if(e.tag===13)e.memoizedState!==null&&Od(e,n,t);else if(e.tag===19)Od(e,n,t);else if(e.child!==null){e.child.return=e,e=e.child;continue}if(e===t)break e;for(;e.sibling===null;){if(e.return===null||e.return===t)break e;e=e.return}e.sibling.return=e.return,e=e.sibling}i&=1}if(q(Y,i),!(t.mode&1))t.memoizedState=null;else switch(r){case"forwards":for(n=t.child,r=null;n!==null;)e=n.alternate,e!==null&&Ha(e)===null&&(r=n),n=n.sibling;n=r,n===null?(r=t.child,t.child=null):(r=n.sibling,n.sibling=null),uo(t,!1,r,n,a);break;case"backwards":for(n=null,r=t.child,t.child=null;r!==null;){if(e=r.alternate,e!==null&&Ha(e)===null){t.child=r;break}e=r.sibling,r.sibling=n,n=r,r=e}uo(t,!0,n,null,a);break;case"together":uo(t,!1,null,null,void 0);break;default:t.memoizedState=null}return t.child}function ba(e,t){!(t.mode&1)&&e!==null&&(e.alternate=null,t.alternate=null,t.flags|=2)}function Tt(e,t,n){if(e!==null&&(t.dependencies=e.dependencies),Sn|=t.lanes,!(n&t.childLanes))return null;if(e!==null&&t.child!==e.child)throw Error(E(153));if(t.child!==null){for(e=t.child,n=Kt(e,e.pendingProps),t.child=n,n.return=t;e.sibling!==null;)e=e.sibling,n=n.sibling=Kt(e,e.pendingProps),n.return=t;n.sibling=null}return t.child}function N0(e,t,n){switch(t.tag){case 3:Ph(t),ui();break;case 5:eh(t);break;case 1:je(t.type)&&Ba(t);break;case 4:Rc(t,t.stateNode.containerInfo);break;case 10:var i=t.type._context,r=t.memoizedProps.value;q(Wa,i._currentValue),i._currentValue=r;break;case 13:if(i=t.memoizedState,i!==null)return i.dehydrated!==null?(q(Y,Y.current&1),t.flags|=128,null):n&t.child.childLanes?Eh(e,t,n):(q(Y,Y.current&1),e=Tt(e,t,n),e!==null?e.sibling:null);q(Y,Y.current&1);break;case 19:if(i=(n&t.childLanes)!==0,e.flags&128){if(i)return Ah(e,t,n);t.flags|=128}if(r=t.memoizedState,r!==null&&(r.rendering=null,r.tail=null,r.lastEffect=null),q(Y,Y.current),i)break;return null;case 22:case 23:return t.lanes=0,Sh(e,t,n)}return Tt(e,t,n)}var jh,Cl,Nh,Mh;jh=function(e,t){for(var n=t.child;n!==null;){if(n.tag===5||n.tag===6)e.appendChild(n.stateNode);else if(n.tag!==4&&n.child!==null){n.child.return=n,n=n.child;continue}if(n===t)break;for(;n.sibling===null;){if(n.return===null||n.return===t)return;n=n.return}n.sibling.return=n.return,n=n.sibling}};Cl=function(){};Nh=function(e,t,n,i){var r=e.memoizedProps;if(r!==i){e=t.stateNode,gn(ut.current);var a=null;switch(n){case"input":r=qo(e,r),i=qo(e,i),a=[];break;case"select":r=J({},r,{value:void 0}),i=J({},i,{value:void 0}),a=[];break;case"textarea":r=Go(e,r),i=Go(e,i),a=[];break;default:typeof r.onClick!="function"&&typeof i.onClick=="function"&&(e.onclick=Fa)}Qo(n,i);var s;n=null;for(c in r)if(!i.hasOwnProperty(c)&&r.hasOwnProperty(c)&&r[c]!=null)if(c==="style"){var o=r[c];for(s in o)o.hasOwnProperty(s)&&(n||(n={}),n[s]="")}else c!=="dangerouslySetInnerHTML"&&c!=="children"&&c!=="suppressContentEditableWarning"&&c!=="suppressHydrationWarning"&&c!=="autoFocus"&&(ir.hasOwnProperty(c)?a||(a=[]):(a=a||[]).push(c,null));for(c in i){var l=i[c];if(o=r!=null?r[c]:void 0,i.hasOwnProperty(c)&&l!==o&&(l!=null||o!=null))if(c==="style")if(o){for(s in o)!o.hasOwnProperty(s)||l&&l.hasOwnProperty(s)||(n||(n={}),n[s]="");for(s in l)l.hasOwnProperty(s)&&o[s]!==l[s]&&(n||(n={}),n[s]=l[s])}else n||(a||(a=[]),a.push(c,n)),n=l;else c==="dangerouslySetInnerHTML"?(l=l?l.__html:void 0,o=o?o.__html:void 0,l!=null&&o!==l&&(a=a||[]).push(c,l)):c==="children"?typeof l!="string"&&typeof l!="number"||(a=a||[]).push(c,""+l):c!=="suppressContentEditableWarning"&&c!=="suppressHydrationWarning"&&(ir.hasOwnProperty(c)?(l!=null&&c==="onScroll"&&H("scroll",e),a||o===l||(a=[])):(a=a||[]).push(c,l))}n&&(a=a||[]).push("style",n);var c=a;(t.updateQueue=c)&&(t.flags|=4)}};Mh=function(e,t,n,i){n!==i&&(t.flags|=4)};function Ri(e,t){if(!Q)switch(e.tailMode){case"hidden":t=e.tail;for(var n=null;t!==null;)t.alternate!==null&&(n=t),t=t.sibling;n===null?e.tail=null:n.sibling=null;break;case"collapsed":n=e.tail;for(var i=null;n!==null;)n.alternate!==null&&(i=n),n=n.sibling;i===null?t||e.tail===null?e.tail=null:e.tail.sibling=null:i.sibling=null}}function ve(e){var t=e.alternate!==null&&e.alternate.child===e.child,n=0,i=0;if(t)for(var r=e.child;r!==null;)n|=r.lanes|r.childLanes,i|=r.subtreeFlags&14680064,i|=r.flags&14680064,r.return=e,r=r.sibling;else for(r=e.child;r!==null;)n|=r.lanes|r.childLanes,i|=r.subtreeFlags,i|=r.flags,r.return=e,r=r.sibling;return e.subtreeFlags|=i,e.childLanes=n,t}function M0(e,t,n){var i=t.pendingProps;switch(Tc(t),t.tag){case 2:case 16:case 15:case 0:case 11:case 7:case 8:case 12:case 9:case 14:return ve(t),null;case 1:return je(t.type)&&_a(),ve(t),null;case 3:return i=t.stateNode,fi(),G(Ae),G(be),Dc(),i.pendingContext&&(i.context=i.pendingContext,i.pendingContext=null),(e===null||e.child===null)&&(Jr(t)?t.flags|=4:e===null||e.memoizedState.isDehydrated&&!(t.flags&256)||(t.flags|=1024,Ze!==null&&(Nl(Ze),Ze=null))),Cl(e,t),ve(t),null;case 5:Ic(t);var r=gn(hr.current);if(n=t.type,e!==null&&t.stateNode!=null)Nh(e,t,n,i,r),e.ref!==t.ref&&(t.flags|=512,t.flags|=2097152);else{if(!i){if(t.stateNode===null)throw Error(E(166));return ve(t),null}if(e=gn(ut.current),Jr(t)){i=t.stateNode,n=t.type;var a=t.memoizedProps;switch(i[ot]=t,i[mr]=a,e=(t.mode&1)!==0,n){case"dialog":H("cancel",i),H("close",i);break;case"iframe":case"object":case"embed":H("load",i);break;case"video":case"audio":for(r=0;r<Bi.length;r++)H(Bi[r],i);break;case"source":H("error",i);break;case"img":case"image":case"link":H("error",i),H("load",i);break;case"details":H("toggle",i);break;case"input":$u(i,a),H("invalid",i);break;case"select":i._wrapperState={wasMultiple:!!a.multiple},H("invalid",i);break;case"textarea":Gu(i,a),H("invalid",i)}Qo(n,a),r=null;for(var s in a)if(a.hasOwnProperty(s)){var o=a[s];s==="children"?typeof o=="string"?i.textContent!==o&&(a.suppressHydrationWarning!==!0&&Zr(i.textContent,o,e),r=["children",o]):typeof o=="number"&&i.textContent!==""+o&&(a.suppressHydrationWarning!==!0&&Zr(i.textContent,o,e),r=["children",""+o]):ir.hasOwnProperty(s)&&o!=null&&s==="onScroll"&&H("scroll",i)}switch(n){case"input":qr(i),Hu(i,a,!0);break;case"textarea":qr(i),Ku(i);break;case"select":case"option":break;default:typeof a.onClick=="function"&&(i.onclick=Fa)}i=r,t.updateQueue=i,i!==null&&(t.flags|=4)}else{s=r.nodeType===9?r:r.ownerDocument,e==="http://www.w3.org/1999/xhtml"&&(e=ap(n)),e==="http://www.w3.org/1999/xhtml"?n==="script"?(e=s.createElement("div"),e.innerHTML="<script><\/script>",e=e.removeChild(e.firstChild)):typeof i.is=="string"?e=s.createElement(n,{is:i.is}):(e=s.createElement(n),n==="select"&&(s=e,i.multiple?s.multiple=!0:i.size&&(s.size=i.size))):e=s.createElementNS(e,n),e[ot]=t,e[mr]=i,jh(e,t,!1,!1),t.stateNode=e;e:{switch(s=Yo(n,i),n){case"dialog":H("cancel",e),H("close",e),r=i;break;case"iframe":case"object":case"embed":H("load",e),r=i;break;case"video":case"audio":for(r=0;r<Bi.length;r++)H(Bi[r],e);r=i;break;case"source":H("error",e),r=i;break;case"img":case"image":case"link":H("error",e),H("load",e),r=i;break;case"details":H("toggle",e),r=i;break;case"input":$u(e,i),r=qo(e,i),H("invalid",e);break;case"option":r=i;break;case"select":e._wrapperState={wasMultiple:!!i.multiple},r=J({},i,{value:void 0}),H("invalid",e);break;case"textarea":Gu(e,i),r=Go(e,i),H("invalid",e);break;default:r=i}Qo(n,r),o=r;for(a in o)if(o.hasOwnProperty(a)){var l=o[a];a==="style"?lp(e,l):a==="dangerouslySetInnerHTML"?(l=l?l.__html:void 0,l!=null&&sp(e,l)):a==="children"?typeof l=="string"?(n!=="textarea"||l!=="")&&rr(e,l):typeof l=="number"&&rr(e,""+l):a!=="suppressContentEditableWarning"&&a!=="suppressHydrationWarning"&&a!=="autoFocus"&&(ir.hasOwnProperty(a)?l!=null&&a==="onScroll"&&H("scroll",e):l!=null&&uc(e,a,l,s))}switch(n){case"input":qr(e),Hu(e,i,!1);break;case"textarea":qr(e),Ku(e);break;case"option":i.value!=null&&e.setAttribute("value",""+Xt(i.value));break;case"select":e.multiple=!!i.multiple,a=i.value,a!=null?Jn(e,!!i.multiple,a,!1):i.defaultValue!=null&&Jn(e,!!i.multiple,i.defaultValue,!0);break;default:typeof r.onClick=="function"&&(e.onclick=Fa)}switch(n){case"button":case"input":case"select":case"textarea":i=!!i.autoFocus;break e;case"img":i=!0;break e;default:i=!1}}i&&(t.flags|=4)}t.ref!==null&&(t.flags|=512,t.flags|=2097152)}return ve(t),null;case 6:if(e&&t.stateNode!=null)Mh(e,t,e.memoizedProps,i);else{if(typeof i!="string"&&t.stateNode===null)throw Error(E(166));if(n=gn(hr.current),gn(ut.current),Jr(t)){if(i=t.stateNode,n=t.memoizedProps,i[ot]=t,(a=i.nodeValue!==n)&&(e=Ie,e!==null))switch(e.tag){case 3:Zr(i.nodeValue,n,(e.mode&1)!==0);break;case 5:e.memoizedProps.suppressHydrationWarning!==!0&&Zr(i.nodeValue,n,(e.mode&1)!==0)}a&&(t.flags|=4)}else i=(n.nodeType===9?n:n.ownerDocument).createTextNode(i),i[ot]=t,t.stateNode=i}return ve(t),null;case 13:if(G(Y),i=t.memoizedState,e===null||e.memoizedState!==null&&e.memoizedState.dehydrated!==null){if(Q&&Re!==null&&t.mode&1&&!(t.flags&128))Qp(),ui(),t.flags|=98560,a=!1;else if(a=Jr(t),i!==null&&i.dehydrated!==null){if(e===null){if(!a)throw Error(E(318));if(a=t.memoizedState,a=a!==null?a.dehydrated:null,!a)throw Error(E(317));a[ot]=t}else ui(),!(t.flags&128)&&(t.memoizedState=null),t.flags|=4;ve(t),a=!1}else Ze!==null&&(Nl(Ze),Ze=null),a=!0;if(!a)return t.flags&65536?t:null}return t.flags&128?(t.lanes=n,t):(i=i!==null,i!==(e!==null&&e.memoizedState!==null)&&i&&(t.child.flags|=8192,t.mode&1&&(e===null||Y.current&1?le===0&&(le=3):Hc())),t.updateQueue!==null&&(t.flags|=4),ve(t),null);case 4:return fi(),Cl(e,t),e===null&&dr(t.stateNode.containerInfo),ve(t),null;case 10:return jc(t.type._context),ve(t),null;case 17:return je(t.type)&&_a(),ve(t),null;case 19:if(G(Y),a=t.memoizedState,a===null)return ve(t),null;if(i=(t.flags&128)!==0,s=a.rendering,s===null)if(i)Ri(a,!1);else{if(le!==0||e!==null&&e.flags&128)for(e=t.child;e!==null;){if(s=Ha(e),s!==null){for(t.flags|=128,Ri(a,!1),i=s.updateQueue,i!==null&&(t.updateQueue=i,t.flags|=4),t.subtreeFlags=0,i=n,n=t.child;n!==null;)a=n,e=i,a.flags&=14680066,s=a.alternate,s===null?(a.childLanes=0,a.lanes=e,a.child=null,a.subtreeFlags=0,a.memoizedProps=null,a.memoizedState=null,a.updateQueue=null,a.dependencies=null,a.stateNode=null):(a.childLanes=s.childLanes,a.lanes=s.lanes,a.child=s.child,a.subtreeFlags=0,a.deletions=null,a.memoizedProps=s.memoizedProps,a.memoizedState=s.memoizedState,a.updateQueue=s.updateQueue,a.type=s.type,e=s.dependencies,a.dependencies=e===null?null:{lanes:e.lanes,firstContext:e.firstContext}),n=n.sibling;return q(Y,Y.current&1|2),t.child}e=e.sibling}a.tail!==null&&re()>pi&&(t.flags|=128,i=!0,Ri(a,!1),t.lanes=4194304)}else{if(!i)if(e=Ha(s),e!==null){if(t.flags|=128,i=!0,n=e.updateQueue,n!==null&&(t.updateQueue=n,t.flags|=4),Ri(a,!0),a.tail===null&&a.tailMode==="hidden"&&!s.alternate&&!Q)return ve(t),null}else 2*re()-a.renderingStartTime>pi&&n!==1073741824&&(t.flags|=128,i=!0,Ri(a,!1),t.lanes=4194304);a.isBackwards?(s.sibling=t.child,t.child=s):(n=a.last,n!==null?n.sibling=s:t.child=s,a.last=s)}return a.tail!==null?(t=a.tail,a.rendering=t,a.tail=t.sibling,a.renderingStartTime=re(),t.sibling=null,n=Y.current,q(Y,i?n&1|2:n&1),t):(ve(t),null);case 22:case 23:return $c(),i=t.memoizedState!==null,e!==null&&e.memoizedState!==null!==i&&(t.flags|=8192),i&&t.mode&1?Me&1073741824&&(ve(t),t.subtreeFlags&6&&(t.flags|=8192)):ve(t),null;case 24:return null;case 25:return null}throw Error(E(156,t.tag))}function R0(e,t){switch(Tc(t),t.tag){case 1:return je(t.type)&&_a(),e=t.flags,e&65536?(t.flags=e&-65537|128,t):null;case 3:return fi(),G(Ae),G(be),Dc(),e=t.flags,e&65536&&!(e&128)?(t.flags=e&-65537|128,t):null;case 5:return Ic(t),null;case 13:if(G(Y),e=t.memoizedState,e!==null&&e.dehydrated!==null){if(t.alternate===null)throw Error(E(340));ui()}return e=t.flags,e&65536?(t.flags=e&-65537|128,t):null;case 19:return G(Y),null;case 4:return fi(),null;case 10:return jc(t.type._context),null;case 22:case 23:return $c(),null;case 24:return null;default:return null}}var na=!1,xe=!1,I0=typeof WeakSet=="function"?WeakSet:Set,j=null;function Hn(e,t){var n=e.ref;if(n!==null)if(typeof n=="function")try{n(null)}catch(i){ne(e,t,i)}else n.current=null}function kl(e,t,n){try{n()}catch(i){ne(e,t,i)}}var Ld=!1;function D0(e,t){if(sl=za,e=Op(),kc(e)){if("selectionStart"in e)var n={start:e.selectionStart,end:e.selectionEnd};else e:{n=(n=e.ownerDocument)&&n.defaultView||window;var i=n.getSelection&&n.getSelection();if(i&&i.rangeCount!==0){n=i.anchorNode;var r=i.anchorOffset,a=i.focusNode;i=i.focusOffset;try{n.nodeType,a.nodeType}catch{n=null;break e}var s=0,o=-1,l=-1,c=0,d=0,f=e,m=null;t:for(;;){for(var x;f!==n||r!==0&&f.nodeType!==3||(o=s+r),f!==a||i!==0&&f.nodeType!==3||(l=s+i),f.nodeType===3&&(s+=f.nodeValue.length),(x=f.firstChild)!==null;)m=f,f=x;for(;;){if(f===e)break t;if(m===n&&++c===r&&(o=s),m===a&&++d===i&&(l=s),(x=f.nextSibling)!==null)break;f=m,m=f.parentNode}f=x}n=o===-1||l===-1?null:{start:o,end:l}}else n=null}n=n||{start:0,end:0}}else n=null;for(ol={focusedElem:e,selectionRange:n},za=!1,j=t;j!==null;)if(t=j,e=t.child,(t.subtreeFlags&1028)!==0&&e!==null)e.return=t,j=e;else for(;j!==null;){t=j;try{var w=t.alternate;if(t.flags&1024)switch(t.tag){case 0:case 11:case 15:break;case 1:if(w!==null){var v=w.memoizedProps,b=w.memoizedState,p=t.stateNode,h=p.getSnapshotBeforeUpdate(t.elementType===t.type?v:Ye(t.type,v),b);p.__reactInternalSnapshotBeforeUpdate=h}break;case 3:var y=t.stateNode.containerInfo;y.nodeType===1?y.textContent="":y.nodeType===9&&y.documentElement&&y.removeChild(y.documentElement);break;case 5:case 6:case 4:case 17:break;default:throw Error(E(163))}}catch(C){ne(t,t.return,C)}if(e=t.sibling,e!==null){e.return=t.return,j=e;break}j=t.return}return w=Ld,Ld=!1,w}function Yi(e,t,n){var i=t.updateQueue;if(i=i!==null?i.lastEffect:null,i!==null){var r=i=i.next;do{if((r.tag&e)===e){var a=r.destroy;r.destroy=void 0,a!==void 0&&kl(t,n,a)}r=r.next}while(r!==i)}}function Cs(e,t){if(t=t.updateQueue,t=t!==null?t.lastEffect:null,t!==null){var n=t=t.next;do{if((n.tag&e)===e){var i=n.create;n.destroy=i()}n=n.next}while(n!==t)}}function Sl(e){var t=e.ref;if(t!==null){var n=e.stateNode;switch(e.tag){case 5:e=n;break;default:e=n}typeof t=="function"?t(e):t.current=e}}function Rh(e){var t=e.alternate;t!==null&&(e.alternate=null,Rh(t)),e.child=null,e.deletions=null,e.sibling=null,e.tag===5&&(t=e.stateNode,t!==null&&(delete t[ot],delete t[mr],delete t[ul],delete t[g0],delete t[v0])),e.stateNode=null,e.return=null,e.dependencies=null,e.memoizedProps=null,e.memoizedState=null,e.pendingProps=null,e.stateNode=null,e.updateQueue=null}function Ih(e){return e.tag===5||e.tag===3||e.tag===4}function Fd(e){e:for(;;){for(;e.sibling===null;){if(e.return===null||Ih(e.return))return null;e=e.return}for(e.sibling.return=e.return,e=e.sibling;e.tag!==5&&e.tag!==6&&e.tag!==18;){if(e.flags&2||e.child===null||e.tag===4)continue e;e.child.return=e,e=e.child}if(!(e.flags&2))return e.stateNode}}function Tl(e,t,n){var i=e.tag;if(i===5||i===6)e=e.stateNode,t?n.nodeType===8?n.parentNode.insertBefore(e,t):n.insertBefore(e,t):(n.nodeType===8?(t=n.parentNode,t.insertBefore(e,n)):(t=n,t.appendChild(e)),n=n._reactRootContainer,n!=null||t.onclick!==null||(t.onclick=Fa));else if(i!==4&&(e=e.child,e!==null))for(Tl(e,t,n),e=e.sibling;e!==null;)Tl(e,t,n),e=e.sibling}function Pl(e,t,n){var i=e.tag;if(i===5||i===6)e=e.stateNode,t?n.insertBefore(e,t):n.appendChild(e);else if(i!==4&&(e=e.child,e!==null))for(Pl(e,t,n),e=e.sibling;e!==null;)Pl(e,t,n),e=e.sibling}var fe=null,Xe=!1;function jt(e,t,n){for(n=n.child;n!==null;)Dh(e,t,n),n=n.sibling}function Dh(e,t,n){if(ct&&typeof ct.onCommitFiberUnmount=="function")try{ct.onCommitFiberUnmount(ps,n)}catch{}switch(n.tag){case 5:xe||Hn(n,t);case 6:var i=fe,r=Xe;fe=null,jt(e,t,n),fe=i,Xe=r,fe!==null&&(Xe?(e=fe,n=n.stateNode,e.nodeType===8?e.parentNode.removeChild(n):e.removeChild(n)):fe.removeChild(n.stateNode));break;case 18:fe!==null&&(Xe?(e=fe,n=n.stateNode,e.nodeType===8?io(e.parentNode,n):e.nodeType===1&&io(e,n),lr(e)):io(fe,n.stateNode));break;case 4:i=fe,r=Xe,fe=n.stateNode.containerInfo,Xe=!0,jt(e,t,n),fe=i,Xe=r;break;case 0:case 11:case 14:case 15:if(!xe&&(i=n.updateQueue,i!==null&&(i=i.lastEffect,i!==null))){r=i=i.next;do{var a=r,s=a.destroy;a=a.tag,s!==void 0&&(a&2||a&4)&&kl(n,t,s),r=r.next}while(r!==i)}jt(e,t,n);break;case 1:if(!xe&&(Hn(n,t),i=n.stateNode,typeof i.componentWillUnmount=="function"))try{i.props=n.memoizedProps,i.state=n.memoizedState,i.componentWillUnmount()}catch(o){ne(n,t,o)}jt(e,t,n);break;case 21:jt(e,t,n);break;case 22:n.mode&1?(xe=(i=xe)||n.memoizedState!==null,jt(e,t,n),xe=i):jt(e,t,n);break;default:jt(e,t,n)}}function _d(e){var t=e.updateQueue;if(t!==null){e.updateQueue=null;var n=e.stateNode;n===null&&(n=e.stateNode=new I0),t.forEach(function(i){var r=W0.bind(null,e,i);n.has(i)||(n.add(i),i.then(r,r))})}}function Ke(e,t){var n=t.deletions;if(n!==null)for(var i=0;i<n.length;i++){var r=n[i];try{var a=e,s=t,o=s;e:for(;o!==null;){switch(o.tag){case 5:fe=o.stateNode,Xe=!1;break e;case 3:fe=o.stateNode.containerInfo,Xe=!0;break e;case 4:fe=o.stateNode.containerInfo,Xe=!0;break e}o=o.return}if(fe===null)throw Error(E(160));Dh(a,s,r),fe=null,Xe=!1;var l=r.alternate;l!==null&&(l.return=null),r.return=null}catch(c){ne(r,t,c)}}if(t.subtreeFlags&12854)for(t=t.child;t!==null;)zh(t,e),t=t.sibling}function zh(e,t){var n=e.alternate,i=e.flags;switch(e.tag){case 0:case 11:case 14:case 15:if(Ke(t,e),at(e),i&4){try{Yi(3,e,e.return),Cs(3,e)}catch(v){ne(e,e.return,v)}try{Yi(5,e,e.return)}catch(v){ne(e,e.return,v)}}break;case 1:Ke(t,e),at(e),i&512&&n!==null&&Hn(n,n.return);break;case 5:if(Ke(t,e),at(e),i&512&&n!==null&&Hn(n,n.return),e.flags&32){var r=e.stateNode;try{rr(r,"")}catch(v){ne(e,e.return,v)}}if(i&4&&(r=e.stateNode,r!=null)){var a=e.memoizedProps,s=n!==null?n.memoizedProps:a,o=e.type,l=e.updateQueue;if(e.updateQueue=null,l!==null)try{o==="input"&&a.type==="radio"&&a.name!=null&&ip(r,a),Yo(o,s);var c=Yo(o,a);for(s=0;s<l.length;s+=2){var d=l[s],f=l[s+1];d==="style"?lp(r,f):d==="dangerouslySetInnerHTML"?sp(r,f):d==="children"?rr(r,f):uc(r,d,f,c)}switch(o){case"input":$o(r,a);break;case"textarea":rp(r,a);break;case"select":var m=r._wrapperState.wasMultiple;r._wrapperState.wasMultiple=!!a.multiple;var x=a.value;x!=null?Jn(r,!!a.multiple,x,!1):m!==!!a.multiple&&(a.defaultValue!=null?Jn(r,!!a.multiple,a.defaultValue,!0):Jn(r,!!a.multiple,a.multiple?[]:"",!1))}r[mr]=a}catch(v){ne(e,e.return,v)}}break;case 6:if(Ke(t,e),at(e),i&4){if(e.stateNode===null)throw Error(E(162));r=e.stateNode,a=e.memoizedProps;try{r.nodeValue=a}catch(v){ne(e,e.return,v)}}break;case 3:if(Ke(t,e),at(e),i&4&&n!==null&&n.memoizedState.isDehydrated)try{lr(t.containerInfo)}catch(v){ne(e,e.return,v)}break;case 4:Ke(t,e),at(e);break;case 13:Ke(t,e),at(e),r=e.child,r.flags&8192&&(a=r.memoizedState!==null,r.stateNode.isHidden=a,!a||r.alternate!==null&&r.alternate.memoizedState!==null||(Wc=re())),i&4&&_d(e);break;case 22:if(d=n!==null&&n.memoizedState!==null,e.mode&1?(xe=(c=xe)||d,Ke(t,e),xe=c):Ke(t,e),at(e),i&8192){if(c=e.memoizedState!==null,(e.stateNode.isHidden=c)&&!d&&e.mode&1)for(j=e,d=e.child;d!==null;){for(f=j=d;j!==null;){switch(m=j,x=m.child,m.tag){case 0:case 11:case 14:case 15:Yi(4,m,m.return);break;case 1:Hn(m,m.return);var w=m.stateNode;if(typeof w.componentWillUnmount=="function"){i=m,n=m.return;try{t=i,w.props=t.memoizedProps,w.state=t.memoizedState,w.componentWillUnmount()}catch(v){ne(i,n,v)}}break;case 5:Hn(m,m.return);break;case 22:if(m.memoizedState!==null){Vd(f);continue}}x!==null?(x.return=m,j=x):Vd(f)}d=d.sibling}e:for(d=null,f=e;;){if(f.tag===5){if(d===null){d=f;try{r=f.stateNode,c?(a=r.style,typeof a.setProperty=="function"?a.setProperty("display","none","important"):a.display="none"):(o=f.stateNode,l=f.memoizedProps.style,s=l!=null&&l.hasOwnProperty("display")?l.display:null,o.style.display=op("display",s))}catch(v){ne(e,e.return,v)}}}else if(f.tag===6){if(d===null)try{f.stateNode.nodeValue=c?"":f.memoizedProps}catch(v){ne(e,e.return,v)}}else if((f.tag!==22&&f.tag!==23||f.memoizedState===null||f===e)&&f.child!==null){f.child.return=f,f=f.child;continue}if(f===e)break e;for(;f.sibling===null;){if(f.return===null||f.return===e)break e;d===f&&(d=null),f=f.return}d===f&&(d=null),f.sibling.return=f.return,f=f.sibling}}break;case 19:Ke(t,e),at(e),i&4&&_d(e);break;case 21:break;default:Ke(t,e),at(e)}}function at(e){var t=e.flags;if(t&2){try{e:{for(var n=e.return;n!==null;){if(Ih(n)){var i=n;break e}n=n.return}throw Error(E(160))}switch(i.tag){case 5:var r=i.stateNode;i.flags&32&&(rr(r,""),i.flags&=-33);var a=Fd(e);Pl(e,a,r);break;case 3:case 4:var s=i.stateNode.containerInfo,o=Fd(e);Tl(e,o,s);break;default:throw Error(E(161))}}catch(l){ne(e,e.return,l)}e.flags&=-3}t&4096&&(e.flags&=-4097)}function z0(e,t,n){j=e,Oh(e)}function Oh(e,t,n){for(var i=(e.mode&1)!==0;j!==null;){var r=j,a=r.child;if(r.tag===22&&i){var s=r.memoizedState!==null||na;if(!s){var o=r.alternate,l=o!==null&&o.memoizedState!==null||xe;o=na;var c=xe;if(na=s,(xe=l)&&!c)for(j=r;j!==null;)s=j,l=s.child,s.tag===22&&s.memoizedState!==null?Ud(r):l!==null?(l.return=s,j=l):Ud(r);for(;a!==null;)j=a,Oh(a),a=a.sibling;j=r,na=o,xe=c}Bd(e)}else r.subtreeFlags&8772&&a!==null?(a.return=r,j=a):Bd(e)}}function Bd(e){for(;j!==null;){var t=j;if(t.flags&8772){var n=t.alternate;try{if(t.flags&8772)switch(t.tag){case 0:case 11:case 15:xe||Cs(5,t);break;case 1:var i=t.stateNode;if(t.flags&4&&!xe)if(n===null)i.componentDidMount();else{var r=t.elementType===t.type?n.memoizedProps:Ye(t.type,n.memoizedProps);i.componentDidUpdate(r,n.memoizedState,i.__reactInternalSnapshotBeforeUpdate)}var a=t.updateQueue;a!==null&&Sd(t,a,i);break;case 3:var s=t.updateQueue;if(s!==null){if(n=null,t.child!==null)switch(t.child.tag){case 5:n=t.child.stateNode;break;case 1:n=t.child.stateNode}Sd(t,s,n)}break;case 5:var o=t.stateNode;if(n===null&&t.flags&4){n=o;var l=t.memoizedProps;switch(t.type){case"button":case"input":case"select":case"textarea":l.autoFocus&&n.focus();break;case"img":l.src&&(n.src=l.src)}}break;case 6:break;case 4:break;case 12:break;case 13:if(t.memoizedState===null){var c=t.alternate;if(c!==null){var d=c.memoizedState;if(d!==null){var f=d.dehydrated;f!==null&&lr(f)}}}break;case 19:case 17:case 21:case 22:case 23:case 25:break;default:throw Error(E(163))}xe||t.flags&512&&Sl(t)}catch(m){ne(t,t.return,m)}}if(t===e){j=null;break}if(n=t.sibling,n!==null){n.return=t.return,j=n;break}j=t.return}}function Vd(e){for(;j!==null;){var t=j;if(t===e){j=null;break}var n=t.sibling;if(n!==null){n.return=t.return,j=n;break}j=t.return}}function Ud(e){for(;j!==null;){var t=j;try{switch(t.tag){case 0:case 11:case 15:var n=t.return;try{Cs(4,t)}catch(l){ne(t,n,l)}break;case 1:var i=t.stateNode;if(typeof i.componentDidMount=="function"){var r=t.return;try{i.componentDidMount()}catch(l){ne(t,r,l)}}var a=t.return;try{Sl(t)}catch(l){ne(t,a,l)}break;case 5:var s=t.return;try{Sl(t)}catch(l){ne(t,s,l)}}}catch(l){ne(t,t.return,l)}if(t===e){j=null;break}var o=t.sibling;if(o!==null){o.return=t.return,j=o;break}j=t.return}}var O0=Math.ceil,Qa=Et.ReactCurrentDispatcher,Vc=Et.ReactCurrentOwner,$e=Et.ReactCurrentBatchConfig,_=0,de=null,ae=null,pe=0,Me=0,Gn=nn(0),le=0,xr=null,Sn=0,ks=0,Uc=0,Xi=null,Pe=null,Wc=0,pi=1/0,ht=null,Ya=!1,El=null,Ht=null,ia=!1,_t=null,Xa=0,Zi=0,Al=null,Ca=-1,ka=0;function ke(){return _&6?re():Ca!==-1?Ca:Ca=re()}function Gt(e){return e.mode&1?_&2&&pe!==0?pe&-pe:x0.transition!==null?(ka===0&&(ka=wp()),ka):(e=U,e!==0||(e=window.event,e=e===void 0?16:Ep(e.type)),e):1}function et(e,t,n,i){if(50<Zi)throw Zi=0,Al=null,Error(E(185));Mr(e,n,i),(!(_&2)||e!==de)&&(e===de&&(!(_&2)&&(ks|=n),le===4&&Lt(e,pe)),Ne(e,i),n===1&&_===0&&!(t.mode&1)&&(pi=re()+500,xs&&rn()))}function Ne(e,t){var n=e.callbackNode;xx(e,t);var i=Da(e,e===de?pe:0);if(i===0)n!==null&&Xu(n),e.callbackNode=null,e.callbackPriority=0;else if(t=i&-i,e.callbackPriority!==t){if(n!=null&&Xu(n),t===1)e.tag===0?y0(Wd.bind(null,e)):Hp(Wd.bind(null,e)),p0(function(){!(_&6)&&rn()}),n=null;else{switch(bp(i)){case 1:n=hc;break;case 4:n=yp;break;case 16:n=Ia;break;case 536870912:n=xp;break;default:n=Ia}n=qh(n,Lh.bind(null,e))}e.callbackPriority=t,e.callbackNode=n}}function Lh(e,t){if(Ca=-1,ka=0,_&6)throw Error(E(327));var n=e.callbackNode;if(ri()&&e.callbackNode!==n)return null;var i=Da(e,e===de?pe:0);if(i===0)return null;if(i&30||i&e.expiredLanes||t)t=Za(e,i);else{t=i;var r=_;_|=2;var a=_h();(de!==e||pe!==t)&&(ht=null,pi=re()+500,yn(e,t));do try{_0();break}catch(o){Fh(e,o)}while(!0);Ac(),Qa.current=a,_=r,ae!==null?t=0:(de=null,pe=0,t=le)}if(t!==0){if(t===2&&(r=tl(e),r!==0&&(i=r,t=jl(e,r))),t===1)throw n=xr,yn(e,0),Lt(e,i),Ne(e,re()),n;if(t===6)Lt(e,i);else{if(r=e.current.alternate,!(i&30)&&!L0(r)&&(t=Za(e,i),t===2&&(a=tl(e),a!==0&&(i=a,t=jl(e,a))),t===1))throw n=xr,yn(e,0),Lt(e,i),Ne(e,re()),n;switch(e.finishedWork=r,e.finishedLanes=i,t){case 0:case 1:throw Error(E(345));case 2:dn(e,Pe,ht);break;case 3:if(Lt(e,i),(i&130023424)===i&&(t=Wc+500-re(),10<t)){if(Da(e,0)!==0)break;if(r=e.suspendedLanes,(r&i)!==i){ke(),e.pingedLanes|=e.suspendedLanes&r;break}e.timeoutHandle=cl(dn.bind(null,e,Pe,ht),t);break}dn(e,Pe,ht);break;case 4:if(Lt(e,i),(i&4194240)===i)break;for(t=e.eventTimes,r=-1;0<i;){var s=31-Je(i);a=1<<s,s=t[s],s>r&&(r=s),i&=~a}if(i=r,i=re()-i,i=(120>i?120:480>i?480:1080>i?1080:1920>i?1920:3e3>i?3e3:4320>i?4320:1960*O0(i/1960))-i,10<i){e.timeoutHandle=cl(dn.bind(null,e,Pe,ht),i);break}dn(e,Pe,ht);break;case 5:dn(e,Pe,ht);break;default:throw Error(E(329))}}}return Ne(e,re()),e.callbackNode===n?Lh.bind(null,e):null}function jl(e,t){var n=Xi;return e.current.memoizedState.isDehydrated&&(yn(e,t).flags|=256),e=Za(e,t),e!==2&&(t=Pe,Pe=n,t!==null&&Nl(t)),e}function Nl(e){Pe===null?Pe=e:Pe.push.apply(Pe,e)}function L0(e){for(var t=e;;){if(t.flags&16384){var n=t.updateQueue;if(n!==null&&(n=n.stores,n!==null))for(var i=0;i<n.length;i++){var r=n[i],a=r.getSnapshot;r=r.value;try{if(!tt(a(),r))return!1}catch{return!1}}}if(n=t.child,t.subtreeFlags&16384&&n!==null)n.return=t,t=n;else{if(t===e)break;for(;t.sibling===null;){if(t.return===null||t.return===e)return!0;t=t.return}t.sibling.return=t.return,t=t.sibling}}return!0}function Lt(e,t){for(t&=~Uc,t&=~ks,e.suspendedLanes|=t,e.pingedLanes&=~t,e=e.expirationTimes;0<t;){var n=31-Je(t),i=1<<n;e[n]=-1,t&=~i}}function Wd(e){if(_&6)throw Error(E(327));ri();var t=Da(e,0);if(!(t&1))return Ne(e,re()),null;var n=Za(e,t);if(e.tag!==0&&n===2){var i=tl(e);i!==0&&(t=i,n=jl(e,i))}if(n===1)throw n=xr,yn(e,0),Lt(e,t),Ne(e,re()),n;if(n===6)throw Error(E(345));return e.finishedWork=e.current.alternate,e.finishedLanes=t,dn(e,Pe,ht),Ne(e,re()),null}function qc(e,t){var n=_;_|=1;try{return e(t)}finally{_=n,_===0&&(pi=re()+500,xs&&rn())}}function Tn(e){_t!==null&&_t.tag===0&&!(_&6)&&ri();var t=_;_|=1;var n=$e.transition,i=U;try{if($e.transition=null,U=1,e)return e()}finally{U=i,$e.transition=n,_=t,!(_&6)&&rn()}}function $c(){Me=Gn.current,G(Gn)}function yn(e,t){e.finishedWork=null,e.finishedLanes=0;var n=e.timeoutHandle;if(n!==-1&&(e.timeoutHandle=-1,m0(n)),ae!==null)for(n=ae.return;n!==null;){var i=n;switch(Tc(i),i.tag){case 1:i=i.type.childContextTypes,i!=null&&_a();break;case 3:fi(),G(Ae),G(be),Dc();break;case 5:Ic(i);break;case 4:fi();break;case 13:G(Y);break;case 19:G(Y);break;case 10:jc(i.type._context);break;case 22:case 23:$c()}n=n.return}if(de=e,ae=e=Kt(e.current,null),pe=Me=t,le=0,xr=null,Uc=ks=Sn=0,Pe=Xi=null,hn!==null){for(t=0;t<hn.length;t++)if(n=hn[t],i=n.interleaved,i!==null){n.interleaved=null;var r=i.next,a=n.pending;if(a!==null){var s=a.next;a.next=r,i.next=s}n.pending=i}hn=null}return e}function Fh(e,t){do{var n=ae;try{if(Ac(),xa.current=Ka,Ga){for(var i=Z.memoizedState;i!==null;){var r=i.queue;r!==null&&(r.pending=null),i=i.next}Ga=!1}if(kn=0,ue=oe=Z=null,Qi=!1,gr=0,Vc.current=null,n===null||n.return===null){le=1,xr=t,ae=null;break}e:{var a=e,s=n.return,o=n,l=t;if(t=pe,o.flags|=32768,l!==null&&typeof l=="object"&&typeof l.then=="function"){var c=l,d=o,f=d.tag;if(!(d.mode&1)&&(f===0||f===11||f===15)){var m=d.alternate;m?(d.updateQueue=m.updateQueue,d.memoizedState=m.memoizedState,d.lanes=m.lanes):(d.updateQueue=null,d.memoizedState=null)}var x=Nd(s);if(x!==null){x.flags&=-257,Md(x,s,o,a,t),x.mode&1&&jd(a,c,t),t=x,l=c;var w=t.updateQueue;if(w===null){var v=new Set;v.add(l),t.updateQueue=v}else w.add(l);break e}else{if(!(t&1)){jd(a,c,t),Hc();break e}l=Error(E(426))}}else if(Q&&o.mode&1){var b=Nd(s);if(b!==null){!(b.flags&65536)&&(b.flags|=256),Md(b,s,o,a,t),Pc(mi(l,o));break e}}a=l=mi(l,o),le!==4&&(le=2),Xi===null?Xi=[a]:Xi.push(a),a=s;do{switch(a.tag){case 3:a.flags|=65536,t&=-t,a.lanes|=t;var p=bh(a,l,t);kd(a,p);break e;case 1:o=l;var h=a.type,y=a.stateNode;if(!(a.flags&128)&&(typeof h.getDerivedStateFromError=="function"||y!==null&&typeof y.componentDidCatch=="function"&&(Ht===null||!Ht.has(y)))){a.flags|=65536,t&=-t,a.lanes|=t;var C=Ch(a,o,t);kd(a,C);break e}}a=a.return}while(a!==null)}Vh(n)}catch(k){t=k,ae===n&&n!==null&&(ae=n=n.return);continue}break}while(!0)}function _h(){var e=Qa.current;return Qa.current=Ka,e===null?Ka:e}function Hc(){(le===0||le===3||le===2)&&(le=4),de===null||!(Sn&268435455)&&!(ks&268435455)||Lt(de,pe)}function Za(e,t){var n=_;_|=2;var i=_h();(de!==e||pe!==t)&&(ht=null,yn(e,t));do try{F0();break}catch(r){Fh(e,r)}while(!0);if(Ac(),_=n,Qa.current=i,ae!==null)throw Error(E(261));return de=null,pe=0,le}function F0(){for(;ae!==null;)Bh(ae)}function _0(){for(;ae!==null&&!ux();)Bh(ae)}function Bh(e){var t=Wh(e.alternate,e,Me);e.memoizedProps=e.pendingProps,t===null?Vh(e):ae=t,Vc.current=null}function Vh(e){var t=e;do{var n=t.alternate;if(e=t.return,t.flags&32768){if(n=R0(n,t),n!==null){n.flags&=32767,ae=n;return}if(e!==null)e.flags|=32768,e.subtreeFlags=0,e.deletions=null;else{le=6,ae=null;return}}else if(n=M0(n,t,Me),n!==null){ae=n;return}if(t=t.sibling,t!==null){ae=t;return}ae=t=e}while(t!==null);le===0&&(le=5)}function dn(e,t,n){var i=U,r=$e.transition;try{$e.transition=null,U=1,B0(e,t,n,i)}finally{$e.transition=r,U=i}return null}function B0(e,t,n,i){do ri();while(_t!==null);if(_&6)throw Error(E(327));n=e.finishedWork;var r=e.finishedLanes;if(n===null)return null;if(e.finishedWork=null,e.finishedLanes=0,n===e.current)throw Error(E(177));e.callbackNode=null,e.callbackPriority=0;var a=n.lanes|n.childLanes;if(wx(e,a),e===de&&(ae=de=null,pe=0),!(n.subtreeFlags&2064)&&!(n.flags&2064)||ia||(ia=!0,qh(Ia,function(){return ri(),null})),a=(n.flags&15990)!==0,n.subtreeFlags&15990||a){a=$e.transition,$e.transition=null;var s=U;U=1;var o=_;_|=4,Vc.current=null,D0(e,n),zh(n,e),s0(ol),za=!!sl,ol=sl=null,e.current=n,z0(n),dx(),_=o,U=s,$e.transition=a}else e.current=n;if(ia&&(ia=!1,_t=e,Xa=r),a=e.pendingLanes,a===0&&(Ht=null),px(n.stateNode),Ne(e,re()),t!==null)for(i=e.onRecoverableError,n=0;n<t.length;n++)r=t[n],i(r.value,{componentStack:r.stack,digest:r.digest});if(Ya)throw Ya=!1,e=El,El=null,e;return Xa&1&&e.tag!==0&&ri(),a=e.pendingLanes,a&1?e===Al?Zi++:(Zi=0,Al=e):Zi=0,rn(),null}function ri(){if(_t!==null){var e=bp(Xa),t=$e.transition,n=U;try{if($e.transition=null,U=16>e?16:e,_t===null)var i=!1;else{if(e=_t,_t=null,Xa=0,_&6)throw Error(E(331));var r=_;for(_|=4,j=e.current;j!==null;){var a=j,s=a.child;if(j.flags&16){var o=a.deletions;if(o!==null){for(var l=0;l<o.length;l++){var c=o[l];for(j=c;j!==null;){var d=j;switch(d.tag){case 0:case 11:case 15:Yi(8,d,a)}var f=d.child;if(f!==null)f.return=d,j=f;else for(;j!==null;){d=j;var m=d.sibling,x=d.return;if(Rh(d),d===c){j=null;break}if(m!==null){m.return=x,j=m;break}j=x}}}var w=a.alternate;if(w!==null){var v=w.child;if(v!==null){w.child=null;do{var b=v.sibling;v.sibling=null,v=b}while(v!==null)}}j=a}}if(a.subtreeFlags&2064&&s!==null)s.return=a,j=s;else e:for(;j!==null;){if(a=j,a.flags&2048)switch(a.tag){case 0:case 11:case 15:Yi(9,a,a.return)}var p=a.sibling;if(p!==null){p.return=a.return,j=p;break e}j=a.return}}var h=e.current;for(j=h;j!==null;){s=j;var y=s.child;if(s.subtreeFlags&2064&&y!==null)y.return=s,j=y;else e:for(s=h;j!==null;){if(o=j,o.flags&2048)try{switch(o.tag){case 0:case 11:case 15:Cs(9,o)}}catch(k){ne(o,o.return,k)}if(o===s){j=null;break e}var C=o.sibling;if(C!==null){C.return=o.return,j=C;break e}j=o.return}}if(_=r,rn(),ct&&typeof ct.onPostCommitFiberRoot=="function")try{ct.onPostCommitFiberRoot(ps,e)}catch{}i=!0}return i}finally{U=n,$e.transition=t}}return!1}function qd(e,t,n){t=mi(n,t),t=bh(e,t,1),e=$t(e,t,1),t=ke(),e!==null&&(Mr(e,1,t),Ne(e,t))}function ne(e,t,n){if(e.tag===3)qd(e,e,n);else for(;t!==null;){if(t.tag===3){qd(t,e,n);break}else if(t.tag===1){var i=t.stateNode;if(typeof t.type.getDerivedStateFromError=="function"||typeof i.componentDidCatch=="function"&&(Ht===null||!Ht.has(i))){e=mi(n,e),e=Ch(t,e,1),t=$t(t,e,1),e=ke(),t!==null&&(Mr(t,1,e),Ne(t,e));break}}t=t.return}}function V0(e,t,n){var i=e.pingCache;i!==null&&i.delete(t),t=ke(),e.pingedLanes|=e.suspendedLanes&n,de===e&&(pe&n)===n&&(le===4||le===3&&(pe&130023424)===pe&&500>re()-Wc?yn(e,0):Uc|=n),Ne(e,t)}function Uh(e,t){t===0&&(e.mode&1?(t=Gr,Gr<<=1,!(Gr&130023424)&&(Gr=4194304)):t=1);var n=ke();e=St(e,t),e!==null&&(Mr(e,t,n),Ne(e,n))}function U0(e){var t=e.memoizedState,n=0;t!==null&&(n=t.retryLane),Uh(e,n)}function W0(e,t){var n=0;switch(e.tag){case 13:var i=e.stateNode,r=e.memoizedState;r!==null&&(n=r.retryLane);break;case 19:i=e.stateNode;break;default:throw Error(E(314))}i!==null&&i.delete(t),Uh(e,n)}var Wh;Wh=function(e,t,n){if(e!==null)if(e.memoizedProps!==t.pendingProps||Ae.current)Ee=!0;else{if(!(e.lanes&n)&&!(t.flags&128))return Ee=!1,N0(e,t,n);Ee=!!(e.flags&131072)}else Ee=!1,Q&&t.flags&1048576&&Gp(t,Ua,t.index);switch(t.lanes=0,t.tag){case 2:var i=t.type;ba(e,t),e=t.pendingProps;var r=ci(t,be.current);ii(t,n),r=Oc(null,t,i,e,r,n);var a=Lc();return t.flags|=1,typeof r=="object"&&r!==null&&typeof r.render=="function"&&r.$$typeof===void 0?(t.tag=1,t.memoizedState=null,t.updateQueue=null,je(i)?(a=!0,Ba(t)):a=!1,t.memoizedState=r.state!==null&&r.state!==void 0?r.state:null,Mc(t),r.updater=bs,t.stateNode=r,r._reactInternals=t,gl(t,i,e,n),t=xl(null,t,i,!0,a,n)):(t.tag=0,Q&&a&&Sc(t),Ce(null,t,r,n),t=t.child),t;case 16:i=t.elementType;e:{switch(ba(e,t),e=t.pendingProps,r=i._init,i=r(i._payload),t.type=i,r=t.tag=$0(i),e=Ye(i,e),r){case 0:t=yl(null,t,i,e,n);break e;case 1:t=Dd(null,t,i,e,n);break e;case 11:t=Rd(null,t,i,e,n);break e;case 14:t=Id(null,t,i,Ye(i.type,e),n);break e}throw Error(E(306,i,""))}return t;case 0:return i=t.type,r=t.pendingProps,r=t.elementType===i?r:Ye(i,r),yl(e,t,i,r,n);case 1:return i=t.type,r=t.pendingProps,r=t.elementType===i?r:Ye(i,r),Dd(e,t,i,r,n);case 3:e:{if(Ph(t),e===null)throw Error(E(387));i=t.pendingProps,a=t.memoizedState,r=a.element,Jp(e,t),$a(t,i,null,n);var s=t.memoizedState;if(i=s.element,a.isDehydrated)if(a={element:i,isDehydrated:!1,cache:s.cache,pendingSuspenseBoundaries:s.pendingSuspenseBoundaries,transitions:s.transitions},t.updateQueue.baseState=a,t.memoizedState=a,t.flags&256){r=mi(Error(E(423)),t),t=zd(e,t,i,n,r);break e}else if(i!==r){r=mi(Error(E(424)),t),t=zd(e,t,i,n,r);break e}else for(Re=qt(t.stateNode.containerInfo.firstChild),Ie=t,Q=!0,Ze=null,n=Xp(t,null,i,n),t.child=n;n;)n.flags=n.flags&-3|4096,n=n.sibling;else{if(ui(),i===r){t=Tt(e,t,n);break e}Ce(e,t,i,n)}t=t.child}return t;case 5:return eh(t),e===null&&ml(t),i=t.type,r=t.pendingProps,a=e!==null?e.memoizedProps:null,s=r.children,ll(i,r)?s=null:a!==null&&ll(i,a)&&(t.flags|=32),Th(e,t),Ce(e,t,s,n),t.child;case 6:return e===null&&ml(t),null;case 13:return Eh(e,t,n);case 4:return Rc(t,t.stateNode.containerInfo),i=t.pendingProps,e===null?t.child=di(t,null,i,n):Ce(e,t,i,n),t.child;case 11:return i=t.type,r=t.pendingProps,r=t.elementType===i?r:Ye(i,r),Rd(e,t,i,r,n);case 7:return Ce(e,t,t.pendingProps,n),t.child;case 8:return Ce(e,t,t.pendingProps.children,n),t.child;case 12:return Ce(e,t,t.pendingProps.children,n),t.child;case 10:e:{if(i=t.type._context,r=t.pendingProps,a=t.memoizedProps,s=r.value,q(Wa,i._currentValue),i._currentValue=s,a!==null)if(tt(a.value,s)){if(a.children===r.children&&!Ae.current){t=Tt(e,t,n);break e}}else for(a=t.child,a!==null&&(a.return=t);a!==null;){var o=a.dependencies;if(o!==null){s=a.child;for(var l=o.firstContext;l!==null;){if(l.context===i){if(a.tag===1){l=xt(-1,n&-n),l.tag=2;var c=a.updateQueue;if(c!==null){c=c.shared;var d=c.pending;d===null?l.next=l:(l.next=d.next,d.next=l),c.pending=l}}a.lanes|=n,l=a.alternate,l!==null&&(l.lanes|=n),pl(a.return,n,t),o.lanes|=n;break}l=l.next}}else if(a.tag===10)s=a.type===t.type?null:a.child;else if(a.tag===18){if(s=a.return,s===null)throw Error(E(341));s.lanes|=n,o=s.alternate,o!==null&&(o.lanes|=n),pl(s,n,t),s=a.sibling}else s=a.child;if(s!==null)s.return=a;else for(s=a;s!==null;){if(s===t){s=null;break}if(a=s.sibling,a!==null){a.return=s.return,s=a;break}s=s.return}a=s}Ce(e,t,r.children,n),t=t.child}return t;case 9:return r=t.type,i=t.pendingProps.children,ii(t,n),r=He(r),i=i(r),t.flags|=1,Ce(e,t,i,n),t.child;case 14:return i=t.type,r=Ye(i,t.pendingProps),r=Ye(i.type,r),Id(e,t,i,r,n);case 15:return kh(e,t,t.type,t.pendingProps,n);case 17:return i=t.type,r=t.pendingProps,r=t.elementType===i?r:Ye(i,r),ba(e,t),t.tag=1,je(i)?(e=!0,Ba(t)):e=!1,ii(t,n),wh(t,i,r),gl(t,i,r,n),xl(null,t,i,!0,e,n);case 19:return Ah(e,t,n);case 22:return Sh(e,t,n)}throw Error(E(156,t.tag))};function qh(e,t){return vp(e,t)}function q0(e,t,n,i){this.tag=e,this.key=n,this.sibling=this.child=this.return=this.stateNode=this.type=this.elementType=null,this.index=0,this.ref=null,this.pendingProps=t,this.dependencies=this.memoizedState=this.updateQueue=this.memoizedProps=null,this.mode=i,this.subtreeFlags=this.flags=0,this.deletions=null,this.childLanes=this.lanes=0,this.alternate=null}function qe(e,t,n,i){return new q0(e,t,n,i)}function Gc(e){return e=e.prototype,!(!e||!e.isReactComponent)}function $0(e){if(typeof e=="function")return Gc(e)?1:0;if(e!=null){if(e=e.$$typeof,e===fc)return 11;if(e===mc)return 14}return 2}function Kt(e,t){var n=e.alternate;return n===null?(n=qe(e.tag,t,e.key,e.mode),n.elementType=e.elementType,n.type=e.type,n.stateNode=e.stateNode,n.alternate=e,e.alternate=n):(n.pendingProps=t,n.type=e.type,n.flags=0,n.subtreeFlags=0,n.deletions=null),n.flags=e.flags&14680064,n.childLanes=e.childLanes,n.lanes=e.lanes,n.child=e.child,n.memoizedProps=e.memoizedProps,n.memoizedState=e.memoizedState,n.updateQueue=e.updateQueue,t=e.dependencies,n.dependencies=t===null?null:{lanes:t.lanes,firstContext:t.firstContext},n.sibling=e.sibling,n.index=e.index,n.ref=e.ref,n}function Sa(e,t,n,i,r,a){var s=2;if(i=e,typeof e=="function")Gc(e)&&(s=1);else if(typeof e=="string")s=5;else e:switch(e){case Ln:return xn(n.children,r,a,t);case dc:s=8,r|=8;break;case Bo:return e=qe(12,n,t,r|2),e.elementType=Bo,e.lanes=a,e;case Vo:return e=qe(13,n,t,r),e.elementType=Vo,e.lanes=a,e;case Uo:return e=qe(19,n,t,r),e.elementType=Uo,e.lanes=a,e;case ep:return Ss(n,r,a,t);default:if(typeof e=="object"&&e!==null)switch(e.$$typeof){case Zm:s=10;break e;case Jm:s=9;break e;case fc:s=11;break e;case mc:s=14;break e;case Dt:s=16,i=null;break e}throw Error(E(130,e==null?e:typeof e,""))}return t=qe(s,n,t,r),t.elementType=e,t.type=i,t.lanes=a,t}function xn(e,t,n,i){return e=qe(7,e,i,t),e.lanes=n,e}function Ss(e,t,n,i){return e=qe(22,e,i,t),e.elementType=ep,e.lanes=n,e.stateNode={isHidden:!1},e}function fo(e,t,n){return e=qe(6,e,null,t),e.lanes=n,e}function mo(e,t,n){return t=qe(4,e.children!==null?e.children:[],e.key,t),t.lanes=n,t.stateNode={containerInfo:e.containerInfo,pendingChildren:null,implementation:e.implementation},t}function H0(e,t,n,i,r){this.tag=t,this.containerInfo=e,this.finishedWork=this.pingCache=this.current=this.pendingChildren=null,this.timeoutHandle=-1,this.callbackNode=this.pendingContext=this.context=null,this.callbackPriority=0,this.eventTimes=Hs(0),this.expirationTimes=Hs(-1),this.entangledLanes=this.finishedLanes=this.mutableReadLanes=this.expiredLanes=this.pingedLanes=this.suspendedLanes=this.pendingLanes=0,this.entanglements=Hs(0),this.identifierPrefix=i,this.onRecoverableError=r,this.mutableSourceEagerHydrationData=null}function Kc(e,t,n,i,r,a,s,o,l){return e=new H0(e,t,n,o,l),t===1?(t=1,a===!0&&(t|=8)):t=0,a=qe(3,null,null,t),e.current=a,a.stateNode=e,a.memoizedState={element:i,isDehydrated:n,cache:null,transitions:null,pendingSuspenseBoundaries:null},Mc(a),e}function G0(e,t,n){var i=3<arguments.length&&arguments[3]!==void 0?arguments[3]:null;return{$$typeof:On,key:i==null?null:""+i,children:e,containerInfo:t,implementation:n}}function $h(e){if(!e)return Zt;e=e._reactInternals;e:{if(An(e)!==e||e.tag!==1)throw Error(E(170));var t=e;do{switch(t.tag){case 3:t=t.stateNode.context;break e;case 1:if(je(t.type)){t=t.stateNode.__reactInternalMemoizedMergedChildContext;break e}}t=t.return}while(t!==null);throw Error(E(171))}if(e.tag===1){var n=e.type;if(je(n))return $p(e,n,t)}return t}function Hh(e,t,n,i,r,a,s,o,l){return e=Kc(n,i,!0,e,r,a,s,o,l),e.context=$h(null),n=e.current,i=ke(),r=Gt(n),a=xt(i,r),a.callback=t??null,$t(n,a,r),e.current.lanes=r,Mr(e,r,i),Ne(e,i),e}function Ts(e,t,n,i){var r=t.current,a=ke(),s=Gt(r);return n=$h(n),t.context===null?t.context=n:t.pendingContext=n,t=xt(a,s),t.payload={element:e},i=i===void 0?null:i,i!==null&&(t.callback=i),e=$t(r,t,s),e!==null&&(et(e,r,s,a),ya(e,r,s)),s}function Ja(e){if(e=e.current,!e.child)return null;switch(e.child.tag){case 5:return e.child.stateNode;default:return e.child.stateNode}}function $d(e,t){if(e=e.memoizedState,e!==null&&e.dehydrated!==null){var n=e.retryLane;e.retryLane=n!==0&&n<t?n:t}}function Qc(e,t){$d(e,t),(e=e.alternate)&&$d(e,t)}function K0(){return null}var Gh=typeof reportError=="function"?reportError:function(e){console.error(e)};function Yc(e){this._internalRoot=e}Ps.prototype.render=Yc.prototype.render=function(e){var t=this._internalRoot;if(t===null)throw Error(E(409));Ts(e,t,null,null)};Ps.prototype.unmount=Yc.prototype.unmount=function(){var e=this._internalRoot;if(e!==null){this._internalRoot=null;var t=e.containerInfo;Tn(function(){Ts(null,e,null,null)}),t[kt]=null}};function Ps(e){this._internalRoot=e}Ps.prototype.unstable_scheduleHydration=function(e){if(e){var t=Sp();e={blockedOn:null,target:e,priority:t};for(var n=0;n<Ot.length&&t!==0&&t<Ot[n].priority;n++);Ot.splice(n,0,e),n===0&&Pp(e)}};function Xc(e){return!(!e||e.nodeType!==1&&e.nodeType!==9&&e.nodeType!==11)}function Es(e){return!(!e||e.nodeType!==1&&e.nodeType!==9&&e.nodeType!==11&&(e.nodeType!==8||e.nodeValue!==" react-mount-point-unstable "))}function Hd(){}function Q0(e,t,n,i,r){if(r){if(typeof i=="function"){var a=i;i=function(){var c=Ja(s);a.call(c)}}var s=Hh(t,i,e,0,null,!1,!1,"",Hd);return e._reactRootContainer=s,e[kt]=s.current,dr(e.nodeType===8?e.parentNode:e),Tn(),s}for(;r=e.lastChild;)e.removeChild(r);if(typeof i=="function"){var o=i;i=function(){var c=Ja(l);o.call(c)}}var l=Kc(e,0,!1,null,null,!1,!1,"",Hd);return e._reactRootContainer=l,e[kt]=l.current,dr(e.nodeType===8?e.parentNode:e),Tn(function(){Ts(t,l,n,i)}),l}function As(e,t,n,i,r){var a=n._reactRootContainer;if(a){var s=a;if(typeof r=="function"){var o=r;r=function(){var l=Ja(s);o.call(l)}}Ts(t,s,e,r)}else s=Q0(n,t,e,r,i);return Ja(s)}Cp=function(e){switch(e.tag){case 3:var t=e.stateNode;if(t.current.memoizedState.isDehydrated){var n=_i(t.pendingLanes);n!==0&&(gc(t,n|1),Ne(t,re()),!(_&6)&&(pi=re()+500,rn()))}break;case 13:Tn(function(){var i=St(e,1);if(i!==null){var r=ke();et(i,e,1,r)}}),Qc(e,1)}};vc=function(e){if(e.tag===13){var t=St(e,134217728);if(t!==null){var n=ke();et(t,e,134217728,n)}Qc(e,134217728)}};kp=function(e){if(e.tag===13){var t=Gt(e),n=St(e,t);if(n!==null){var i=ke();et(n,e,t,i)}Qc(e,t)}};Sp=function(){return U};Tp=function(e,t){var n=U;try{return U=e,t()}finally{U=n}};Zo=function(e,t,n){switch(t){case"input":if($o(e,n),t=n.name,n.type==="radio"&&t!=null){for(n=e;n.parentNode;)n=n.parentNode;for(n=n.querySelectorAll("input[name="+JSON.stringify(""+t)+'][type="radio"]'),t=0;t<n.length;t++){var i=n[t];if(i!==e&&i.form===e.form){var r=ys(i);if(!r)throw Error(E(90));np(i),$o(i,r)}}}break;case"textarea":rp(e,n);break;case"select":t=n.value,t!=null&&Jn(e,!!n.multiple,t,!1)}};dp=qc;fp=Tn;var Y0={usingClientEntryPoint:!1,Events:[Ir,Vn,ys,cp,up,qc]},Ii={findFiberByHostInstance:pn,bundleType:0,version:"18.3.1",rendererPackageName:"react-dom"},X0={bundleType:Ii.bundleType,version:Ii.version,rendererPackageName:Ii.rendererPackageName,rendererConfig:Ii.rendererConfig,overrideHookState:null,overrideHookStateDeletePath:null,overrideHookStateRenamePath:null,overrideProps:null,overridePropsDeletePath:null,overridePropsRenamePath:null,setErrorHandler:null,setSuspenseHandler:null,scheduleUpdate:null,currentDispatcherRef:Et.ReactCurrentDispatcher,findHostInstanceByFiber:function(e){return e=hp(e),e===null?null:e.stateNode},findFiberByHostInstance:Ii.findFiberByHostInstance||K0,findHostInstancesForRefresh:null,scheduleRefresh:null,scheduleRoot:null,setRefreshHandler:null,getCurrentFiber:null,reconcilerVersion:"18.3.1-next-f1338f8080-20240426"};if(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__<"u"){var ra=__REACT_DEVTOOLS_GLOBAL_HOOK__;if(!ra.isDisabled&&ra.supportsFiber)try{ps=ra.inject(X0),ct=ra}catch{}}Fe.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=Y0;Fe.createPortal=function(e,t){var n=2<arguments.length&&arguments[2]!==void 0?arguments[2]:null;if(!Xc(t))throw Error(E(200));return G0(e,t,null,n)};Fe.createRoot=function(e,t){if(!Xc(e))throw Error(E(299));var n=!1,i="",r=Gh;return t!=null&&(t.unstable_strictMode===!0&&(n=!0),t.identifierPrefix!==void 0&&(i=t.identifierPrefix),t.onRecoverableError!==void 0&&(r=t.onRecoverableError)),t=Kc(e,1,!1,null,null,n,!1,i,r),e[kt]=t.current,dr(e.nodeType===8?e.parentNode:e),new Yc(t)};Fe.findDOMNode=function(e){if(e==null)return null;if(e.nodeType===1)return e;var t=e._reactInternals;if(t===void 0)throw typeof e.render=="function"?Error(E(188)):(e=Object.keys(e).join(","),Error(E(268,e)));return e=hp(t),e=e===null?null:e.stateNode,e};Fe.flushSync=function(e){return Tn(e)};Fe.hydrate=function(e,t,n){if(!Es(t))throw Error(E(200));return As(null,e,t,!0,n)};Fe.hydrateRoot=function(e,t,n){if(!Xc(e))throw Error(E(405));var i=n!=null&&n.hydratedSources||null,r=!1,a="",s=Gh;if(n!=null&&(n.unstable_strictMode===!0&&(r=!0),n.identifierPrefix!==void 0&&(a=n.identifierPrefix),n.onRecoverableError!==void 0&&(s=n.onRecoverableError)),t=Hh(t,null,e,1,n??null,r,!1,a,s),e[kt]=t.current,dr(e),i)for(e=0;e<i.length;e++)n=i[e],r=n._getVersion,r=r(n._source),t.mutableSourceEagerHydrationData==null?t.mutableSourceEagerHydrationData=[n,r]:t.mutableSourceEagerHydrationData.push(n,r);return new Ps(t)};Fe.render=function(e,t,n){if(!Es(t))throw Error(E(200));return As(null,e,t,!1,n)};Fe.unmountComponentAtNode=function(e){if(!Es(e))throw Error(E(40));return e._reactRootContainer?(Tn(function(){As(null,null,e,!1,function(){e._reactRootContainer=null,e[kt]=null})}),!0):!1};Fe.unstable_batchedUpdates=qc;Fe.unstable_renderSubtreeIntoContainer=function(e,t,n,i){if(!Es(n))throw Error(E(200));if(e==null||e._reactInternals===void 0)throw Error(E(38));return As(e,t,n,!1,i)};Fe.version="18.3.1-next-f1338f8080-20240426";function Kh(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(Kh)}catch(e){console.error(e)}}Kh(),Km.exports=Fe;var Zc=Km.exports;const Z0=Om(Zc);var Qh,Gd=Zc;Qh=Gd.createRoot,Gd.hydrateRoot;/**
 * @remix-run/router v1.23.2
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */function wr(){return wr=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var i in n)Object.prototype.hasOwnProperty.call(n,i)&&(e[i]=n[i])}return e},wr.apply(this,arguments)}var Bt;(function(e){e.Pop="POP",e.Push="PUSH",e.Replace="REPLACE"})(Bt||(Bt={}));const Kd="popstate";function J0(e){e===void 0&&(e={});function t(i,r){let{pathname:a,search:s,hash:o}=i.location;return Ml("",{pathname:a,search:s,hash:o},r.state&&r.state.usr||null,r.state&&r.state.key||"default")}function n(i,r){return typeof r=="string"?r:es(r)}return tw(t,n,null,e)}function se(e,t){if(e===!1||e===null||typeof e>"u")throw new Error(t)}function Jc(e,t){if(!e){typeof console<"u"&&console.warn(t);try{throw new Error(t)}catch{}}}function ew(){return Math.random().toString(36).substr(2,8)}function Qd(e,t){return{usr:e.state,key:e.key,idx:t}}function Ml(e,t,n,i){return n===void 0&&(n=null),wr({pathname:typeof e=="string"?e:e.pathname,search:"",hash:""},typeof t=="string"?bi(t):t,{state:n,key:t&&t.key||i||ew()})}function es(e){let{pathname:t="/",search:n="",hash:i=""}=e;return n&&n!=="?"&&(t+=n.charAt(0)==="?"?n:"?"+n),i&&i!=="#"&&(t+=i.charAt(0)==="#"?i:"#"+i),t}function bi(e){let t={};if(e){let n=e.indexOf("#");n>=0&&(t.hash=e.substr(n),e=e.substr(0,n));let i=e.indexOf("?");i>=0&&(t.search=e.substr(i),e=e.substr(0,i)),e&&(t.pathname=e)}return t}function tw(e,t,n,i){i===void 0&&(i={});let{window:r=document.defaultView,v5Compat:a=!1}=i,s=r.history,o=Bt.Pop,l=null,c=d();c==null&&(c=0,s.replaceState(wr({},s.state,{idx:c}),""));function d(){return(s.state||{idx:null}).idx}function f(){o=Bt.Pop;let b=d(),p=b==null?null:b-c;c=b,l&&l({action:o,location:v.location,delta:p})}function m(b,p){o=Bt.Push;let h=Ml(v.location,b,p);c=d()+1;let y=Qd(h,c),C=v.createHref(h);try{s.pushState(y,"",C)}catch(k){if(k instanceof DOMException&&k.name==="DataCloneError")throw k;r.location.assign(C)}a&&l&&l({action:o,location:v.location,delta:1})}function x(b,p){o=Bt.Replace;let h=Ml(v.location,b,p);c=d();let y=Qd(h,c),C=v.createHref(h);s.replaceState(y,"",C),a&&l&&l({action:o,location:v.location,delta:0})}function w(b){let p=r.location.origin!=="null"?r.location.origin:r.location.href,h=typeof b=="string"?b:es(b);return h=h.replace(/ $/,"%20"),se(p,"No window.location.(origin|href) available to create URL for href: "+h),new URL(h,p)}let v={get action(){return o},get location(){return e(r,s)},listen(b){if(l)throw new Error("A history only accepts one active listener");return r.addEventListener(Kd,f),l=b,()=>{r.removeEventListener(Kd,f),l=null}},createHref(b){return t(r,b)},createURL:w,encodeLocation(b){let p=w(b);return{pathname:p.pathname,search:p.search,hash:p.hash}},push:m,replace:x,go(b){return s.go(b)}};return v}var Yd;(function(e){e.data="data",e.deferred="deferred",e.redirect="redirect",e.error="error"})(Yd||(Yd={}));function nw(e,t,n){return n===void 0&&(n="/"),iw(e,t,n)}function iw(e,t,n,i){let r=typeof t=="string"?bi(t):t,a=eu(r.pathname||"/",n);if(a==null)return null;let s=Yh(e);rw(s);let o=null;for(let l=0;o==null&&l<s.length;++l){let c=gw(a);o=mw(s[l],c)}return o}function Yh(e,t,n,i){t===void 0&&(t=[]),n===void 0&&(n=[]),i===void 0&&(i="");let r=(a,s,o)=>{let l={relativePath:o===void 0?a.path||"":o,caseSensitive:a.caseSensitive===!0,childrenIndex:s,route:a};l.relativePath.startsWith("/")&&(se(l.relativePath.startsWith(i),'Absolute route path "'+l.relativePath+'" nested under path '+('"'+i+'" is not valid. An absolute child route path ')+"must start with the combined path of all its parent routes."),l.relativePath=l.relativePath.slice(i.length));let c=Qt([i,l.relativePath]),d=n.concat(l);a.children&&a.children.length>0&&(se(a.index!==!0,"Index routes must not have child routes. Please remove "+('all child routes from route path "'+c+'".')),Yh(a.children,t,d,c)),!(a.path==null&&!a.index)&&t.push({path:c,score:dw(c,a.index),routesMeta:d})};return e.forEach((a,s)=>{var o;if(a.path===""||!((o=a.path)!=null&&o.includes("?")))r(a,s);else for(let l of Xh(a.path))r(a,s,l)}),t}function Xh(e){let t=e.split("/");if(t.length===0)return[];let[n,...i]=t,r=n.endsWith("?"),a=n.replace(/\?$/,"");if(i.length===0)return r?[a,""]:[a];let s=Xh(i.join("/")),o=[];return o.push(...s.map(l=>l===""?a:[a,l].join("/"))),r&&o.push(...s),o.map(l=>e.startsWith("/")&&l===""?"/":l)}function rw(e){e.sort((t,n)=>t.score!==n.score?n.score-t.score:fw(t.routesMeta.map(i=>i.childrenIndex),n.routesMeta.map(i=>i.childrenIndex)))}const aw=/^:[\w-]+$/,sw=3,ow=2,lw=1,cw=10,uw=-2,Xd=e=>e==="*";function dw(e,t){let n=e.split("/"),i=n.length;return n.some(Xd)&&(i+=uw),t&&(i+=ow),n.filter(r=>!Xd(r)).reduce((r,a)=>r+(aw.test(a)?sw:a===""?lw:cw),i)}function fw(e,t){return e.length===t.length&&e.slice(0,-1).every((i,r)=>i===t[r])?e[e.length-1]-t[t.length-1]:0}function mw(e,t,n){let{routesMeta:i}=e,r={},a="/",s=[];for(let o=0;o<i.length;++o){let l=i[o],c=o===i.length-1,d=a==="/"?t:t.slice(a.length)||"/",f=pw({path:l.relativePath,caseSensitive:l.caseSensitive,end:c},d),m=l.route;if(!f)return null;Object.assign(r,f.params),s.push({params:r,pathname:Qt([a,f.pathname]),pathnameBase:bw(Qt([a,f.pathnameBase])),route:m}),f.pathnameBase!=="/"&&(a=Qt([a,f.pathnameBase]))}return s}function pw(e,t){typeof e=="string"&&(e={path:e,caseSensitive:!1,end:!0});let[n,i]=hw(e.path,e.caseSensitive,e.end),r=t.match(n);if(!r)return null;let a=r[0],s=a.replace(/(.)\/+$/,"$1"),o=r.slice(1);return{params:i.reduce((c,d,f)=>{let{paramName:m,isOptional:x}=d;if(m==="*"){let v=o[f]||"";s=a.slice(0,a.length-v.length).replace(/(.)\/+$/,"$1")}const w=o[f];return x&&!w?c[m]=void 0:c[m]=(w||"").replace(/%2F/g,"/"),c},{}),pathname:a,pathnameBase:s,pattern:e}}function hw(e,t,n){t===void 0&&(t=!1),n===void 0&&(n=!0),Jc(e==="*"||!e.endsWith("*")||e.endsWith("/*"),'Route path "'+e+'" will be treated as if it were '+('"'+e.replace(/\*$/,"/*")+'" because the `*` character must ')+"always follow a `/` in the pattern. To get rid of this warning, "+('please change the route path to "'+e.replace(/\*$/,"/*")+'".'));let i=[],r="^"+e.replace(/\/*\*?$/,"").replace(/^\/*/,"/").replace(/[\\.*+^${}|()[\]]/g,"\\$&").replace(/\/:([\w-]+)(\?)?/g,(s,o,l)=>(i.push({paramName:o,isOptional:l!=null}),l?"/?([^\\/]+)?":"/([^\\/]+)"));return e.endsWith("*")?(i.push({paramName:"*"}),r+=e==="*"||e==="/*"?"(.*)$":"(?:\\/(.+)|\\/*)$"):n?r+="\\/*$":e!==""&&e!=="/"&&(r+="(?:(?=\\/|$))"),[new RegExp(r,t?void 0:"i"),i]}function gw(e){try{return e.split("/").map(t=>decodeURIComponent(t).replace(/\//g,"%2F")).join("/")}catch(t){return Jc(!1,'The URL path "'+e+'" could not be decoded because it is is a malformed URL segment. This is probably due to a bad percent '+("encoding ("+t+").")),e}}function eu(e,t){if(t==="/")return e;if(!e.toLowerCase().startsWith(t.toLowerCase()))return null;let n=t.endsWith("/")?t.length-1:t.length,i=e.charAt(n);return i&&i!=="/"?null:e.slice(n)||"/"}const vw=/^(?:[a-z][a-z0-9+.-]*:|\/\/)/i,yw=e=>vw.test(e);function xw(e,t){t===void 0&&(t="/");let{pathname:n,search:i="",hash:r=""}=typeof e=="string"?bi(e):e,a;if(n)if(yw(n))a=n;else{if(n.includes("//")){let s=n;n=n.replace(/\/\/+/g,"/"),Jc(!1,"Pathnames cannot have embedded double slashes - normalizing "+(s+" -> "+n))}n.startsWith("/")?a=Zd(n.substring(1),"/"):a=Zd(n,t)}else a=t;return{pathname:a,search:Cw(i),hash:kw(r)}}function Zd(e,t){let n=t.replace(/\/+$/,"").split("/");return e.split("/").forEach(r=>{r===".."?n.length>1&&n.pop():r!=="."&&n.push(r)}),n.length>1?n.join("/"):"/"}function po(e,t,n,i){return"Cannot include a '"+e+"' character in a manually specified "+("`to."+t+"` field ["+JSON.stringify(i)+"].  Please separate it out to the ")+("`to."+n+"` field. Alternatively you may provide the full path as ")+'a string in <Link to="..."> and the router will parse it for you.'}function ww(e){return e.filter((t,n)=>n===0||t.route.path&&t.route.path.length>0)}function Zh(e,t){let n=ww(e);return t?n.map((i,r)=>r===n.length-1?i.pathname:i.pathnameBase):n.map(i=>i.pathnameBase)}function Jh(e,t,n,i){i===void 0&&(i=!1);let r;typeof e=="string"?r=bi(e):(r=wr({},e),se(!r.pathname||!r.pathname.includes("?"),po("?","pathname","search",r)),se(!r.pathname||!r.pathname.includes("#"),po("#","pathname","hash",r)),se(!r.search||!r.search.includes("#"),po("#","search","hash",r)));let a=e===""||r.pathname==="",s=a?"/":r.pathname,o;if(s==null)o=n;else{let f=t.length-1;if(!i&&s.startsWith("..")){let m=s.split("/");for(;m[0]==="..";)m.shift(),f-=1;r.pathname=m.join("/")}o=f>=0?t[f]:"/"}let l=xw(r,o),c=s&&s!=="/"&&s.endsWith("/"),d=(a||s===".")&&n.endsWith("/");return!l.pathname.endsWith("/")&&(c||d)&&(l.pathname+="/"),l}const Qt=e=>e.join("/").replace(/\/\/+/g,"/"),bw=e=>e.replace(/\/+$/,"").replace(/^\/*/,"/"),Cw=e=>!e||e==="?"?"":e.startsWith("?")?e:"?"+e,kw=e=>!e||e==="#"?"":e.startsWith("#")?e:"#"+e;function Sw(e){return e!=null&&typeof e.status=="number"&&typeof e.statusText=="string"&&typeof e.internal=="boolean"&&"data"in e}const eg=["post","put","patch","delete"];new Set(eg);const Tw=["get",...eg];new Set(Tw);/**
 * React Router v6.30.3
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */function br(){return br=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var i in n)Object.prototype.hasOwnProperty.call(n,i)&&(e[i]=n[i])}return e},br.apply(this,arguments)}const tu=g.createContext(null),Pw=g.createContext(null),jn=g.createContext(null),js=g.createContext(null),an=g.createContext({outlet:null,matches:[],isDataRoute:!1}),tg=g.createContext(null);function Ew(e,t){let{relative:n}=t===void 0?{}:t;zr()||se(!1);let{basename:i,navigator:r}=g.useContext(jn),{hash:a,pathname:s,search:o}=rg(e,{relative:n}),l=s;return i!=="/"&&(l=s==="/"?i:Qt([i,s])),r.createHref({pathname:l,search:o,hash:a})}function zr(){return g.useContext(js)!=null}function Ns(){return zr()||se(!1),g.useContext(js).location}function ng(e){g.useContext(jn).static||g.useLayoutEffect(e)}function ig(){let{isDataRoute:e}=g.useContext(an);return e?Vw():Aw()}function Aw(){zr()||se(!1);let e=g.useContext(tu),{basename:t,future:n,navigator:i}=g.useContext(jn),{matches:r}=g.useContext(an),{pathname:a}=Ns(),s=JSON.stringify(Zh(r,n.v7_relativeSplatPath)),o=g.useRef(!1);return ng(()=>{o.current=!0}),g.useCallback(function(c,d){if(d===void 0&&(d={}),!o.current)return;if(typeof c=="number"){i.go(c);return}let f=Jh(c,JSON.parse(s),a,d.relative==="path");e==null&&t!=="/"&&(f.pathname=f.pathname==="/"?t:Qt([t,f.pathname])),(d.replace?i.replace:i.push)(f,d.state,d)},[t,i,s,a,e])}function jw(){let{matches:e}=g.useContext(an),t=e[e.length-1];return t?t.params:{}}function rg(e,t){let{relative:n}=t===void 0?{}:t,{future:i}=g.useContext(jn),{matches:r}=g.useContext(an),{pathname:a}=Ns(),s=JSON.stringify(Zh(r,i.v7_relativeSplatPath));return g.useMemo(()=>Jh(e,JSON.parse(s),a,n==="path"),[e,s,a,n])}function Nw(e,t){return Mw(e,t)}function Mw(e,t,n,i){zr()||se(!1);let{navigator:r}=g.useContext(jn),{matches:a}=g.useContext(an),s=a[a.length-1],o=s?s.params:{};s&&s.pathname;let l=s?s.pathnameBase:"/";s&&s.route;let c=Ns(),d;if(t){var f;let b=typeof t=="string"?bi(t):t;l==="/"||(f=b.pathname)!=null&&f.startsWith(l)||se(!1),d=b}else d=c;let m=d.pathname||"/",x=m;if(l!=="/"){let b=l.replace(/^\//,"").split("/");x="/"+m.replace(/^\//,"").split("/").slice(b.length).join("/")}let w=nw(e,{pathname:x}),v=Ow(w&&w.map(b=>Object.assign({},b,{params:Object.assign({},o,b.params),pathname:Qt([l,r.encodeLocation?r.encodeLocation(b.pathname).pathname:b.pathname]),pathnameBase:b.pathnameBase==="/"?l:Qt([l,r.encodeLocation?r.encodeLocation(b.pathnameBase).pathname:b.pathnameBase])})),a,n,i);return t&&v?g.createElement(js.Provider,{value:{location:br({pathname:"/",search:"",hash:"",state:null,key:"default"},d),navigationType:Bt.Pop}},v):v}function Rw(){let e=Bw(),t=Sw(e)?e.status+" "+e.statusText:e instanceof Error?e.message:JSON.stringify(e),n=e instanceof Error?e.stack:null,r={padding:"0.5rem",backgroundColor:"rgba(200,200,200, 0.5)"};return g.createElement(g.Fragment,null,g.createElement("h2",null,"Unexpected Application Error!"),g.createElement("h3",{style:{fontStyle:"italic"}},t),n?g.createElement("pre",{style:r},n):null,null)}const Iw=g.createElement(Rw,null);class Dw extends g.Component{constructor(t){super(t),this.state={location:t.location,revalidation:t.revalidation,error:t.error}}static getDerivedStateFromError(t){return{error:t}}static getDerivedStateFromProps(t,n){return n.location!==t.location||n.revalidation!=="idle"&&t.revalidation==="idle"?{error:t.error,location:t.location,revalidation:t.revalidation}:{error:t.error!==void 0?t.error:n.error,location:n.location,revalidation:t.revalidation||n.revalidation}}componentDidCatch(t,n){console.error("React Router caught the following error during render",t,n)}render(){return this.state.error!==void 0?g.createElement(an.Provider,{value:this.props.routeContext},g.createElement(tg.Provider,{value:this.state.error,children:this.props.component})):this.props.children}}function zw(e){let{routeContext:t,match:n,children:i}=e,r=g.useContext(tu);return r&&r.static&&r.staticContext&&(n.route.errorElement||n.route.ErrorBoundary)&&(r.staticContext._deepestRenderedBoundaryId=n.route.id),g.createElement(an.Provider,{value:t},i)}function Ow(e,t,n,i){var r;if(t===void 0&&(t=[]),n===void 0&&(n=null),i===void 0&&(i=null),e==null){var a;if(!n)return null;if(n.errors)e=n.matches;else if((a=i)!=null&&a.v7_partialHydration&&t.length===0&&!n.initialized&&n.matches.length>0)e=n.matches;else return null}let s=e,o=(r=n)==null?void 0:r.errors;if(o!=null){let d=s.findIndex(f=>f.route.id&&(o==null?void 0:o[f.route.id])!==void 0);d>=0||se(!1),s=s.slice(0,Math.min(s.length,d+1))}let l=!1,c=-1;if(n&&i&&i.v7_partialHydration)for(let d=0;d<s.length;d++){let f=s[d];if((f.route.HydrateFallback||f.route.hydrateFallbackElement)&&(c=d),f.route.id){let{loaderData:m,errors:x}=n,w=f.route.loader&&m[f.route.id]===void 0&&(!x||x[f.route.id]===void 0);if(f.route.lazy||w){l=!0,c>=0?s=s.slice(0,c+1):s=[s[0]];break}}}return s.reduceRight((d,f,m)=>{let x,w=!1,v=null,b=null;n&&(x=o&&f.route.id?o[f.route.id]:void 0,v=f.route.errorElement||Iw,l&&(c<0&&m===0?(Uw("route-fallback"),w=!0,b=null):c===m&&(w=!0,b=f.route.hydrateFallbackElement||null)));let p=t.concat(s.slice(0,m+1)),h=()=>{let y;return x?y=v:w?y=b:f.route.Component?y=g.createElement(f.route.Component,null):f.route.element?y=f.route.element:y=d,g.createElement(zw,{match:f,routeContext:{outlet:d,matches:p,isDataRoute:n!=null},children:y})};return n&&(f.route.ErrorBoundary||f.route.errorElement||m===0)?g.createElement(Dw,{location:n.location,revalidation:n.revalidation,component:v,error:x,children:h(),routeContext:{outlet:null,matches:p,isDataRoute:!0}}):h()},null)}var ag=function(e){return e.UseBlocker="useBlocker",e.UseRevalidator="useRevalidator",e.UseNavigateStable="useNavigate",e}(ag||{}),sg=function(e){return e.UseBlocker="useBlocker",e.UseLoaderData="useLoaderData",e.UseActionData="useActionData",e.UseRouteError="useRouteError",e.UseNavigation="useNavigation",e.UseRouteLoaderData="useRouteLoaderData",e.UseMatches="useMatches",e.UseRevalidator="useRevalidator",e.UseNavigateStable="useNavigate",e.UseRouteId="useRouteId",e}(sg||{});function Lw(e){let t=g.useContext(tu);return t||se(!1),t}function Fw(e){let t=g.useContext(Pw);return t||se(!1),t}function _w(e){let t=g.useContext(an);return t||se(!1),t}function og(e){let t=_w(),n=t.matches[t.matches.length-1];return n.route.id||se(!1),n.route.id}function Bw(){var e;let t=g.useContext(tg),n=Fw(),i=og();return t!==void 0?t:(e=n.errors)==null?void 0:e[i]}function Vw(){let{router:e}=Lw(ag.UseNavigateStable),t=og(sg.UseNavigateStable),n=g.useRef(!1);return ng(()=>{n.current=!0}),g.useCallback(function(r,a){a===void 0&&(a={}),n.current&&(typeof r=="number"?e.navigate(r):e.navigate(r,br({fromRouteId:t},a)))},[e,t])}const Jd={};function Uw(e,t,n){Jd[e]||(Jd[e]=!0)}function Ww(e,t){e==null||e.v7_startTransition,e==null||e.v7_relativeSplatPath}function Rl(e){se(!1)}function qw(e){let{basename:t="/",children:n=null,location:i,navigationType:r=Bt.Pop,navigator:a,static:s=!1,future:o}=e;zr()&&se(!1);let l=t.replace(/^\/*/,"/"),c=g.useMemo(()=>({basename:l,navigator:a,static:s,future:br({v7_relativeSplatPath:!1},o)}),[l,o,a,s]);typeof i=="string"&&(i=bi(i));let{pathname:d="/",search:f="",hash:m="",state:x=null,key:w="default"}=i,v=g.useMemo(()=>{let b=eu(d,l);return b==null?null:{location:{pathname:b,search:f,hash:m,state:x,key:w},navigationType:r}},[l,d,f,m,x,w,r]);return v==null?null:g.createElement(jn.Provider,{value:c},g.createElement(js.Provider,{children:n,value:v}))}function $w(e){let{children:t,location:n}=e;return Nw(Il(t),n)}new Promise(()=>{});function Il(e,t){t===void 0&&(t=[]);let n=[];return g.Children.forEach(e,(i,r)=>{if(!g.isValidElement(i))return;let a=[...t,r];if(i.type===g.Fragment){n.push.apply(n,Il(i.props.children,a));return}i.type!==Rl&&se(!1),!i.props.index||!i.props.children||se(!1);let s={id:i.props.id||a.join("-"),caseSensitive:i.props.caseSensitive,element:i.props.element,Component:i.props.Component,index:i.props.index,path:i.props.path,loader:i.props.loader,action:i.props.action,errorElement:i.props.errorElement,ErrorBoundary:i.props.ErrorBoundary,hasErrorBoundary:i.props.ErrorBoundary!=null||i.props.errorElement!=null,shouldRevalidate:i.props.shouldRevalidate,handle:i.props.handle,lazy:i.props.lazy};i.props.children&&(s.children=Il(i.props.children,a)),n.push(s)}),n}/**
 * React Router DOM v6.30.3
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */function Dl(){return Dl=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var i in n)Object.prototype.hasOwnProperty.call(n,i)&&(e[i]=n[i])}return e},Dl.apply(this,arguments)}function Hw(e,t){if(e==null)return{};var n={},i=Object.keys(e),r,a;for(a=0;a<i.length;a++)r=i[a],!(t.indexOf(r)>=0)&&(n[r]=e[r]);return n}function Gw(e){return!!(e.metaKey||e.altKey||e.ctrlKey||e.shiftKey)}function Kw(e,t){return e.button===0&&(!t||t==="_self")&&!Gw(e)}const Qw=["onClick","relative","reloadDocument","replace","state","target","to","preventScrollReset","viewTransition"],Yw="6";try{window.__reactRouterVersion=Yw}catch{}const Xw="startTransition",ef=ms[Xw];function Zw(e){let{basename:t,children:n,future:i,window:r}=e,a=g.useRef();a.current==null&&(a.current=J0({window:r,v5Compat:!0}));let s=a.current,[o,l]=g.useState({action:s.action,location:s.location}),{v7_startTransition:c}=i||{},d=g.useCallback(f=>{c&&ef?ef(()=>l(f)):l(f)},[l,c]);return g.useLayoutEffect(()=>s.listen(d),[s,d]),g.useEffect(()=>Ww(i),[i]),g.createElement(qw,{basename:t,children:n,location:o.location,navigationType:o.action,navigator:s,future:i})}const Jw=typeof window<"u"&&typeof window.document<"u"&&typeof window.document.createElement<"u",eb=/^(?:[a-z][a-z0-9+.-]*:|\/\/)/i,ai=g.forwardRef(function(t,n){let{onClick:i,relative:r,reloadDocument:a,replace:s,state:o,target:l,to:c,preventScrollReset:d,viewTransition:f}=t,m=Hw(t,Qw),{basename:x}=g.useContext(jn),w,v=!1;if(typeof c=="string"&&eb.test(c)&&(w=c,Jw))try{let y=new URL(window.location.href),C=c.startsWith("//")?new URL(y.protocol+c):new URL(c),k=eu(C.pathname,x);C.origin===y.origin&&k!=null?c=k+C.search+C.hash:v=!0}catch{}let b=Ew(c,{relative:r}),p=tb(c,{replace:s,state:o,target:l,preventScrollReset:d,relative:r,viewTransition:f});function h(y){i&&i(y),y.defaultPrevented||p(y)}return g.createElement("a",Dl({},m,{href:w||b,onClick:v||a?i:h,ref:n,target:l}))});var tf;(function(e){e.UseScrollRestoration="useScrollRestoration",e.UseSubmit="useSubmit",e.UseSubmitFetcher="useSubmitFetcher",e.UseFetcher="useFetcher",e.useViewTransitionState="useViewTransitionState"})(tf||(tf={}));var nf;(function(e){e.UseFetcher="useFetcher",e.UseFetchers="useFetchers",e.UseScrollRestoration="useScrollRestoration"})(nf||(nf={}));function tb(e,t){let{target:n,replace:i,state:r,preventScrollReset:a,relative:s,viewTransition:o}=t===void 0?{}:t,l=ig(),c=Ns(),d=rg(e,{relative:s});return g.useCallback(f=>{if(Kw(f,n)){f.preventDefault();let m=i!==void 0?i:es(c)===es(d);l(e,{replace:m,state:r,preventScrollReset:a,relative:s,viewTransition:o})}},[c,l,d,i,r,n,e,a,s,o])}const lg=g.createContext({});function nb(e){const t=g.useRef(null);return t.current===null&&(t.current=e()),t.current}const nu=g.createContext(null),cg=g.createContext({transformPagePoint:e=>e,isStatic:!1,reducedMotion:"never"});function ib(e=!0){const t=g.useContext(nu);if(t===null)return[!0,null];const{isPresent:n,onExitComplete:i,register:r}=t,a=g.useId();g.useEffect(()=>{e&&r(a)},[e]);const s=g.useCallback(()=>e&&i&&i(a),[a,i,e]);return!n&&i?[!1,s]:[!0]}const iu=typeof window<"u",rb=iu?g.useLayoutEffect:g.useEffect,De=e=>e;let ug=De;function ru(e){let t;return()=>(t===void 0&&(t=e()),t)}const hi=(e,t,n)=>{const i=t-e;return i===0?1:(n-e)/i},wt=e=>e*1e3,bt=e=>e/1e3,ab={useManualTiming:!1};function sb(e){let t=new Set,n=new Set,i=!1,r=!1;const a=new WeakSet;let s={delta:0,timestamp:0,isProcessing:!1};function o(c){a.has(c)&&(l.schedule(c),e()),c(s)}const l={schedule:(c,d=!1,f=!1)=>{const x=f&&i?t:n;return d&&a.add(c),x.has(c)||x.add(c),c},cancel:c=>{n.delete(c),a.delete(c)},process:c=>{if(s=c,i){r=!0;return}i=!0,[t,n]=[n,t],t.forEach(o),t.clear(),i=!1,r&&(r=!1,l.process(c))}};return l}const aa=["read","resolveKeyframes","update","preRender","render","postRender"],ob=40;function dg(e,t){let n=!1,i=!0;const r={delta:0,timestamp:0,isProcessing:!1},a=()=>n=!0,s=aa.reduce((p,h)=>(p[h]=sb(a),p),{}),{read:o,resolveKeyframes:l,update:c,preRender:d,render:f,postRender:m}=s,x=()=>{const p=performance.now();n=!1,r.delta=i?1e3/60:Math.max(Math.min(p-r.timestamp,ob),1),r.timestamp=p,r.isProcessing=!0,o.process(r),l.process(r),c.process(r),d.process(r),f.process(r),m.process(r),r.isProcessing=!1,n&&t&&(i=!1,e(x))},w=()=>{n=!0,i=!0,r.isProcessing||e(x)};return{schedule:aa.reduce((p,h)=>{const y=s[h];return p[h]=(C,k=!1,P=!1)=>(n||w(),y.schedule(C,k,P)),p},{}),cancel:p=>{for(let h=0;h<aa.length;h++)s[aa[h]].cancel(p)},state:r,steps:s}}const{schedule:K,cancel:Jt,state:me,steps:ho}=dg(typeof requestAnimationFrame<"u"?requestAnimationFrame:De,!0),fg=g.createContext({strict:!1}),rf={animation:["animate","variants","whileHover","whileTap","exit","whileInView","whileFocus","whileDrag"],exit:["exit"],drag:["drag","dragControls"],focus:["whileFocus"],hover:["whileHover","onHoverStart","onHoverEnd"],tap:["whileTap","onTap","onTapStart","onTapCancel"],pan:["onPan","onPanStart","onPanSessionStart","onPanEnd"],inView:["whileInView","onViewportEnter","onViewportLeave"],layout:["layout","layoutId"]},gi={};for(const e in rf)gi[e]={isEnabled:t=>rf[e].some(n=>!!t[n])};function lb(e){for(const t in e)gi[t]={...gi[t],...e[t]}}const cb=new Set(["animate","exit","variants","initial","style","values","variants","transition","transformTemplate","custom","inherit","onBeforeLayoutMeasure","onAnimationStart","onAnimationComplete","onUpdate","onDragStart","onDrag","onDragEnd","onMeasureDragConstraints","onDirectionLock","onDragTransitionEnd","_dragX","_dragY","onHoverStart","onHoverEnd","onViewportEnter","onViewportLeave","globalTapTarget","ignoreStrict","viewport"]);function ts(e){return e.startsWith("while")||e.startsWith("drag")&&e!=="draggable"||e.startsWith("layout")||e.startsWith("onTap")||e.startsWith("onPan")||e.startsWith("onLayout")||cb.has(e)}let mg=e=>!ts(e);function ub(e){e&&(mg=t=>t.startsWith("on")?!ts(t):e(t))}try{ub(require("@emotion/is-prop-valid").default)}catch{}function db(e,t,n){const i={};for(const r in e)r==="values"&&typeof e.values=="object"||(mg(r)||n===!0&&ts(r)||!t&&!ts(r)||e.draggable&&r.startsWith("onDrag"))&&(i[r]=e[r]);return i}function fb(e){if(typeof Proxy>"u")return e;const t=new Map,n=(...i)=>e(...i);return new Proxy(n,{get:(i,r)=>r==="create"?e:(t.has(r)||t.set(r,e(r)),t.get(r))})}const Ms=g.createContext({});function Cr(e){return typeof e=="string"||Array.isArray(e)}function Rs(e){return e!==null&&typeof e=="object"&&typeof e.start=="function"}const au=["animate","whileInView","whileFocus","whileHover","whileTap","whileDrag","exit"],su=["initial",...au];function Is(e){return Rs(e.animate)||su.some(t=>Cr(e[t]))}function pg(e){return!!(Is(e)||e.variants)}function mb(e,t){if(Is(e)){const{initial:n,animate:i}=e;return{initial:n===!1||Cr(n)?n:void 0,animate:Cr(i)?i:void 0}}return e.inherit!==!1?t:{}}function pb(e){const{initial:t,animate:n}=mb(e,g.useContext(Ms));return g.useMemo(()=>({initial:t,animate:n}),[af(t),af(n)])}function af(e){return Array.isArray(e)?e.join(" "):e}const hb=Symbol.for("motionComponentSymbol");function Kn(e){return e&&typeof e=="object"&&Object.prototype.hasOwnProperty.call(e,"current")}function gb(e,t,n){return g.useCallback(i=>{i&&e.onMount&&e.onMount(i),t&&(i?t.mount(i):t.unmount()),n&&(typeof n=="function"?n(i):Kn(n)&&(n.current=i))},[t])}const ou=e=>e.replace(/([a-z])([A-Z])/gu,"$1-$2").toLowerCase(),vb="framerAppearId",hg="data-"+ou(vb),{schedule:lu}=dg(queueMicrotask,!1),gg=g.createContext({});function yb(e,t,n,i,r){var a,s;const{visualElement:o}=g.useContext(Ms),l=g.useContext(fg),c=g.useContext(nu),d=g.useContext(cg).reducedMotion,f=g.useRef(null);i=i||l.renderer,!f.current&&i&&(f.current=i(e,{visualState:t,parent:o,props:n,presenceContext:c,blockInitialAnimation:c?c.initial===!1:!1,reducedMotionConfig:d}));const m=f.current,x=g.useContext(gg);m&&!m.projection&&r&&(m.type==="html"||m.type==="svg")&&xb(f.current,n,r,x);const w=g.useRef(!1);g.useInsertionEffect(()=>{m&&w.current&&m.update(n,c)});const v=n[hg],b=g.useRef(!!v&&!(!((a=window.MotionHandoffIsComplete)===null||a===void 0)&&a.call(window,v))&&((s=window.MotionHasOptimisedAnimation)===null||s===void 0?void 0:s.call(window,v)));return rb(()=>{m&&(w.current=!0,window.MotionIsMounted=!0,m.updateFeatures(),lu.render(m.render),b.current&&m.animationState&&m.animationState.animateChanges())}),g.useEffect(()=>{m&&(!b.current&&m.animationState&&m.animationState.animateChanges(),b.current&&(queueMicrotask(()=>{var p;(p=window.MotionHandoffMarkAsComplete)===null||p===void 0||p.call(window,v)}),b.current=!1))}),m}function xb(e,t,n,i){const{layoutId:r,layout:a,drag:s,dragConstraints:o,layoutScroll:l,layoutRoot:c}=t;e.projection=new n(e.latestValues,t["data-framer-portal-id"]?void 0:vg(e.parent)),e.projection.setOptions({layoutId:r,layout:a,alwaysMeasureLayout:!!s||o&&Kn(o),visualElement:e,animationType:typeof a=="string"?a:"both",initialPromotionConfig:i,layoutScroll:l,layoutRoot:c})}function vg(e){if(e)return e.options.allowProjection!==!1?e.projection:vg(e.parent)}function wb({preloadedFeatures:e,createVisualElement:t,useRender:n,useVisualState:i,Component:r}){var a,s;e&&lb(e);function o(c,d){let f;const m={...g.useContext(cg),...c,layoutId:bb(c)},{isStatic:x}=m,w=pb(c),v=i(c,x);if(!x&&iu){Cb();const b=kb(m);f=b.MeasureLayout,w.visualElement=yb(r,v,m,t,b.ProjectionNode)}return u.jsxs(Ms.Provider,{value:w,children:[f&&w.visualElement?u.jsx(f,{visualElement:w.visualElement,...m}):null,n(r,c,gb(v,w.visualElement,d),v,x,w.visualElement)]})}o.displayName=`motion.${typeof r=="string"?r:`create(${(s=(a=r.displayName)!==null&&a!==void 0?a:r.name)!==null&&s!==void 0?s:""})`}`;const l=g.forwardRef(o);return l[hb]=r,l}function bb({layoutId:e}){const t=g.useContext(lg).id;return t&&e!==void 0?t+"-"+e:e}function Cb(e,t){g.useContext(fg).strict}function kb(e){const{drag:t,layout:n}=gi;if(!t&&!n)return{};const i={...t,...n};return{MeasureLayout:t!=null&&t.isEnabled(e)||n!=null&&n.isEnabled(e)?i.MeasureLayout:void 0,ProjectionNode:i.ProjectionNode}}const Sb=["animate","circle","defs","desc","ellipse","g","image","line","filter","marker","mask","metadata","path","pattern","polygon","polyline","rect","stop","switch","symbol","svg","text","tspan","use","view"];function cu(e){return typeof e!="string"||e.includes("-")?!1:!!(Sb.indexOf(e)>-1||/[A-Z]/u.test(e))}function sf(e){const t=[{},{}];return e==null||e.values.forEach((n,i)=>{t[0][i]=n.get(),t[1][i]=n.getVelocity()}),t}function uu(e,t,n,i){if(typeof t=="function"){const[r,a]=sf(i);t=t(n!==void 0?n:e.custom,r,a)}if(typeof t=="string"&&(t=e.variants&&e.variants[t]),typeof t=="function"){const[r,a]=sf(i);t=t(n!==void 0?n:e.custom,r,a)}return t}const zl=e=>Array.isArray(e),Tb=e=>!!(e&&typeof e=="object"&&e.mix&&e.toValue),Pb=e=>zl(e)?e[e.length-1]||0:e,we=e=>!!(e&&e.getVelocity);function Ta(e){const t=we(e)?e.get():e;return Tb(t)?t.toValue():t}function Eb({scrapeMotionValuesFromProps:e,createRenderState:t,onUpdate:n},i,r,a){const s={latestValues:Ab(i,r,a,e),renderState:t()};return n&&(s.onMount=o=>n({props:i,current:o,...s}),s.onUpdate=o=>n(o)),s}const yg=e=>(t,n)=>{const i=g.useContext(Ms),r=g.useContext(nu),a=()=>Eb(e,t,i,r);return n?a():nb(a)};function Ab(e,t,n,i){const r={},a=i(e,{});for(const m in a)r[m]=Ta(a[m]);let{initial:s,animate:o}=e;const l=Is(e),c=pg(e);t&&c&&!l&&e.inherit!==!1&&(s===void 0&&(s=t.initial),o===void 0&&(o=t.animate));let d=n?n.initial===!1:!1;d=d||s===!1;const f=d?o:s;if(f&&typeof f!="boolean"&&!Rs(f)){const m=Array.isArray(f)?f:[f];for(let x=0;x<m.length;x++){const w=uu(e,m[x]);if(w){const{transitionEnd:v,transition:b,...p}=w;for(const h in p){let y=p[h];if(Array.isArray(y)){const C=d?y.length-1:0;y=y[C]}y!==null&&(r[h]=y)}for(const h in v)r[h]=v[h]}}}return r}const Ci=["transformPerspective","x","y","z","translateX","translateY","translateZ","scale","scaleX","scaleY","rotate","rotateX","rotateY","rotateZ","skew","skewX","skewY"],Nn=new Set(Ci),xg=e=>t=>typeof t=="string"&&t.startsWith(e),wg=xg("--"),jb=xg("var(--"),du=e=>jb(e)?Nb.test(e.split("/*")[0].trim()):!1,Nb=/var\(--(?:[\w-]+\s*|[\w-]+\s*,(?:\s*[^)(\s]|\s*\((?:[^)(]|\([^)(]*\))*\))+\s*)\)$/iu,bg=(e,t)=>t&&typeof e=="number"?t.transform(e):e,Pt=(e,t,n)=>n>t?t:n<e?e:n,ki={test:e=>typeof e=="number",parse:parseFloat,transform:e=>e},kr={...ki,transform:e=>Pt(0,1,e)},sa={...ki,default:1},Or=e=>({test:t=>typeof t=="string"&&t.endsWith(e)&&t.split(" ").length===1,parse:parseFloat,transform:t=>`${t}${e}`}),Rt=Or("deg"),dt=Or("%"),R=Or("px"),Mb=Or("vh"),Rb=Or("vw"),of={...dt,parse:e=>dt.parse(e)/100,transform:e=>dt.transform(e*100)},Ib={borderWidth:R,borderTopWidth:R,borderRightWidth:R,borderBottomWidth:R,borderLeftWidth:R,borderRadius:R,radius:R,borderTopLeftRadius:R,borderTopRightRadius:R,borderBottomRightRadius:R,borderBottomLeftRadius:R,width:R,maxWidth:R,height:R,maxHeight:R,top:R,right:R,bottom:R,left:R,padding:R,paddingTop:R,paddingRight:R,paddingBottom:R,paddingLeft:R,margin:R,marginTop:R,marginRight:R,marginBottom:R,marginLeft:R,backgroundPositionX:R,backgroundPositionY:R},Db={rotate:Rt,rotateX:Rt,rotateY:Rt,rotateZ:Rt,scale:sa,scaleX:sa,scaleY:sa,scaleZ:sa,skew:Rt,skewX:Rt,skewY:Rt,distance:R,translateX:R,translateY:R,translateZ:R,x:R,y:R,z:R,perspective:R,transformPerspective:R,opacity:kr,originX:of,originY:of,originZ:R},lf={...ki,transform:Math.round},fu={...Ib,...Db,zIndex:lf,size:R,fillOpacity:kr,strokeOpacity:kr,numOctaves:lf},zb={x:"translateX",y:"translateY",z:"translateZ",transformPerspective:"perspective"},Ob=Ci.length;function Lb(e,t,n){let i="",r=!0;for(let a=0;a<Ob;a++){const s=Ci[a],o=e[s];if(o===void 0)continue;let l=!0;if(typeof o=="number"?l=o===(s.startsWith("scale")?1:0):l=parseFloat(o)===0,!l||n){const c=bg(o,fu[s]);if(!l){r=!1;const d=zb[s]||s;i+=`${d}(${c}) `}n&&(t[s]=c)}}return i=i.trim(),n?i=n(t,r?"":i):r&&(i="none"),i}function mu(e,t,n){const{style:i,vars:r,transformOrigin:a}=e;let s=!1,o=!1;for(const l in t){const c=t[l];if(Nn.has(l)){s=!0;continue}else if(wg(l)){r[l]=c;continue}else{const d=bg(c,fu[l]);l.startsWith("origin")?(o=!0,a[l]=d):i[l]=d}}if(t.transform||(s||n?i.transform=Lb(t,e.transform,n):i.transform&&(i.transform="none")),o){const{originX:l="50%",originY:c="50%",originZ:d=0}=a;i.transformOrigin=`${l} ${c} ${d}`}}const Fb={offset:"stroke-dashoffset",array:"stroke-dasharray"},_b={offset:"strokeDashoffset",array:"strokeDasharray"};function Bb(e,t,n=1,i=0,r=!0){e.pathLength=1;const a=r?Fb:_b;e[a.offset]=R.transform(-i);const s=R.transform(t),o=R.transform(n);e[a.array]=`${s} ${o}`}function cf(e,t,n){return typeof e=="string"?e:R.transform(t+n*e)}function Vb(e,t,n){const i=cf(t,e.x,e.width),r=cf(n,e.y,e.height);return`${i} ${r}`}function pu(e,{attrX:t,attrY:n,attrScale:i,originX:r,originY:a,pathLength:s,pathSpacing:o=1,pathOffset:l=0,...c},d,f){if(mu(e,c,f),d){e.style.viewBox&&(e.attrs.viewBox=e.style.viewBox);return}e.attrs=e.style,e.style={};const{attrs:m,style:x,dimensions:w}=e;m.transform&&(w&&(x.transform=m.transform),delete m.transform),w&&(r!==void 0||a!==void 0||x.transform)&&(x.transformOrigin=Vb(w,r!==void 0?r:.5,a!==void 0?a:.5)),t!==void 0&&(m.x=t),n!==void 0&&(m.y=n),i!==void 0&&(m.scale=i),s!==void 0&&Bb(m,s,o,l,!1)}const hu=()=>({style:{},transform:{},transformOrigin:{},vars:{}}),Cg=()=>({...hu(),attrs:{}}),gu=e=>typeof e=="string"&&e.toLowerCase()==="svg";function kg(e,{style:t,vars:n},i,r){Object.assign(e.style,t,r&&r.getProjectionStyles(i));for(const a in n)e.style.setProperty(a,n[a])}const Sg=new Set(["baseFrequency","diffuseConstant","kernelMatrix","kernelUnitLength","keySplines","keyTimes","limitingConeAngle","markerHeight","markerWidth","numOctaves","targetX","targetY","surfaceScale","specularConstant","specularExponent","stdDeviation","tableValues","viewBox","gradientTransform","pathLength","startOffset","textLength","lengthAdjust"]);function Tg(e,t,n,i){kg(e,t,void 0,i);for(const r in t.attrs)e.setAttribute(Sg.has(r)?r:ou(r),t.attrs[r])}const ns={};function Ub(e){Object.assign(ns,e)}function Pg(e,{layout:t,layoutId:n}){return Nn.has(e)||e.startsWith("origin")||(t||n!==void 0)&&(!!ns[e]||e==="opacity")}function vu(e,t,n){var i;const{style:r}=e,a={};for(const s in r)(we(r[s])||t.style&&we(t.style[s])||Pg(s,e)||((i=n==null?void 0:n.getValue(s))===null||i===void 0?void 0:i.liveStyle)!==void 0)&&(a[s]=r[s]);return a}function Eg(e,t,n){const i=vu(e,t,n);for(const r in e)if(we(e[r])||we(t[r])){const a=Ci.indexOf(r)!==-1?"attr"+r.charAt(0).toUpperCase()+r.substring(1):r;i[a]=e[r]}return i}function Wb(e,t){try{t.dimensions=typeof e.getBBox=="function"?e.getBBox():e.getBoundingClientRect()}catch{t.dimensions={x:0,y:0,width:0,height:0}}}const uf=["x","y","width","height","cx","cy","r"],qb={useVisualState:yg({scrapeMotionValuesFromProps:Eg,createRenderState:Cg,onUpdate:({props:e,prevProps:t,current:n,renderState:i,latestValues:r})=>{if(!n)return;let a=!!e.drag;if(!a){for(const o in r)if(Nn.has(o)){a=!0;break}}if(!a)return;let s=!t;if(t)for(let o=0;o<uf.length;o++){const l=uf[o];e[l]!==t[l]&&(s=!0)}s&&K.read(()=>{Wb(n,i),K.render(()=>{pu(i,r,gu(n.tagName),e.transformTemplate),Tg(n,i)})})}})},$b={useVisualState:yg({scrapeMotionValuesFromProps:vu,createRenderState:hu})};function Ag(e,t,n){for(const i in t)!we(t[i])&&!Pg(i,n)&&(e[i]=t[i])}function Hb({transformTemplate:e},t){return g.useMemo(()=>{const n=hu();return mu(n,t,e),Object.assign({},n.vars,n.style)},[t])}function Gb(e,t){const n=e.style||{},i={};return Ag(i,n,e),Object.assign(i,Hb(e,t)),i}function Kb(e,t){const n={},i=Gb(e,t);return e.drag&&e.dragListener!==!1&&(n.draggable=!1,i.userSelect=i.WebkitUserSelect=i.WebkitTouchCallout="none",i.touchAction=e.drag===!0?"none":`pan-${e.drag==="x"?"y":"x"}`),e.tabIndex===void 0&&(e.onTap||e.onTapStart||e.whileTap)&&(n.tabIndex=0),n.style=i,n}function Qb(e,t,n,i){const r=g.useMemo(()=>{const a=Cg();return pu(a,t,gu(i),e.transformTemplate),{...a.attrs,style:{...a.style}}},[t]);if(e.style){const a={};Ag(a,e.style,e),r.style={...a,...r.style}}return r}function Yb(e=!1){return(n,i,r,{latestValues:a},s)=>{const l=(cu(n)?Qb:Kb)(i,a,s,n),c=db(i,typeof n=="string",e),d=n!==g.Fragment?{...c,...l,ref:r}:{},{children:f}=i,m=g.useMemo(()=>we(f)?f.get():f,[f]);return g.createElement(n,{...d,children:m})}}function Xb(e,t){return function(i,{forwardMotionProps:r}={forwardMotionProps:!1}){const s={...cu(i)?qb:$b,preloadedFeatures:e,useRender:Yb(r),createVisualElement:t,Component:i};return wb(s)}}function jg(e,t){if(!Array.isArray(t))return!1;const n=t.length;if(n!==e.length)return!1;for(let i=0;i<n;i++)if(t[i]!==e[i])return!1;return!0}function Ds(e,t,n){const i=e.getProps();return uu(i,t,n!==void 0?n:i.custom,e)}const Zb=ru(()=>window.ScrollTimeline!==void 0);class Jb{constructor(t){this.stop=()=>this.runAll("stop"),this.animations=t.filter(Boolean)}get finished(){return Promise.all(this.animations.map(t=>"finished"in t?t.finished:t))}getAll(t){return this.animations[0][t]}setAll(t,n){for(let i=0;i<this.animations.length;i++)this.animations[i][t]=n}attachTimeline(t,n){const i=this.animations.map(r=>{if(Zb()&&r.attachTimeline)return r.attachTimeline(t);if(typeof n=="function")return n(r)});return()=>{i.forEach((r,a)=>{r&&r(),this.animations[a].stop()})}}get time(){return this.getAll("time")}set time(t){this.setAll("time",t)}get speed(){return this.getAll("speed")}set speed(t){this.setAll("speed",t)}get startTime(){return this.getAll("startTime")}get duration(){let t=0;for(let n=0;n<this.animations.length;n++)t=Math.max(t,this.animations[n].duration);return t}runAll(t){this.animations.forEach(n=>n[t]())}flatten(){this.runAll("flatten")}play(){this.runAll("play")}pause(){this.runAll("pause")}cancel(){this.runAll("cancel")}complete(){this.runAll("complete")}}class e1 extends Jb{then(t,n){return Promise.all(this.animations).then(t).catch(n)}}function yu(e,t){return e?e[t]||e.default||e:void 0}const Ol=2e4;function Ng(e){let t=0;const n=50;let i=e.next(t);for(;!i.done&&t<Ol;)t+=n,i=e.next(t);return t>=Ol?1/0:t}function xu(e){return typeof e=="function"}function df(e,t){e.timeline=t,e.onfinish=null}const wu=e=>Array.isArray(e)&&typeof e[0]=="number",t1={linearEasing:void 0};function n1(e,t){const n=ru(e);return()=>{var i;return(i=t1[t])!==null&&i!==void 0?i:n()}}const is=n1(()=>{try{document.createElement("div").animate({opacity:0},{easing:"linear(0, 1)"})}catch{return!1}return!0},"linearEasing"),Mg=(e,t,n=10)=>{let i="";const r=Math.max(Math.round(t/n),2);for(let a=0;a<r;a++)i+=e(hi(0,r-1,a))+", ";return`linear(${i.substring(0,i.length-2)})`};function Rg(e){return!!(typeof e=="function"&&is()||!e||typeof e=="string"&&(e in Ll||is())||wu(e)||Array.isArray(e)&&e.every(Rg))}const Vi=([e,t,n,i])=>`cubic-bezier(${e}, ${t}, ${n}, ${i})`,Ll={linear:"linear",ease:"ease",easeIn:"ease-in",easeOut:"ease-out",easeInOut:"ease-in-out",circIn:Vi([0,.65,.55,1]),circOut:Vi([.55,0,1,.45]),backIn:Vi([.31,.01,.66,-.59]),backOut:Vi([.33,1.53,.69,.99])};function Ig(e,t){if(e)return typeof e=="function"&&is()?Mg(e,t):wu(e)?Vi(e):Array.isArray(e)?e.map(n=>Ig(n,t)||Ll.easeOut):Ll[e]}const Qe={x:!1,y:!1};function Dg(){return Qe.x||Qe.y}function i1(e,t,n){var i;if(e instanceof Element)return[e];if(typeof e=="string"){let r=document;const a=(i=void 0)!==null&&i!==void 0?i:r.querySelectorAll(e);return a?Array.from(a):[]}return Array.from(e)}function zg(e,t){const n=i1(e),i=new AbortController,r={passive:!0,...t,signal:i.signal};return[n,r,()=>i.abort()]}function ff(e){return t=>{t.pointerType==="touch"||Dg()||e(t)}}function r1(e,t,n={}){const[i,r,a]=zg(e,n),s=ff(o=>{const{target:l}=o,c=t(o);if(typeof c!="function"||!l)return;const d=ff(f=>{c(f),l.removeEventListener("pointerleave",d)});l.addEventListener("pointerleave",d,r)});return i.forEach(o=>{o.addEventListener("pointerenter",s,r)}),a}const Og=(e,t)=>t?e===t?!0:Og(e,t.parentElement):!1,bu=e=>e.pointerType==="mouse"?typeof e.button!="number"||e.button<=0:e.isPrimary!==!1,a1=new Set(["BUTTON","INPUT","SELECT","TEXTAREA","A"]);function s1(e){return a1.has(e.tagName)||e.tabIndex!==-1}const Ui=new WeakSet;function mf(e){return t=>{t.key==="Enter"&&e(t)}}function go(e,t){e.dispatchEvent(new PointerEvent("pointer"+t,{isPrimary:!0,bubbles:!0}))}const o1=(e,t)=>{const n=e.currentTarget;if(!n)return;const i=mf(()=>{if(Ui.has(n))return;go(n,"down");const r=mf(()=>{go(n,"up")}),a=()=>go(n,"cancel");n.addEventListener("keyup",r,t),n.addEventListener("blur",a,t)});n.addEventListener("keydown",i,t),n.addEventListener("blur",()=>n.removeEventListener("keydown",i),t)};function pf(e){return bu(e)&&!Dg()}function l1(e,t,n={}){const[i,r,a]=zg(e,n),s=o=>{const l=o.currentTarget;if(!pf(o)||Ui.has(l))return;Ui.add(l);const c=t(o),d=(x,w)=>{window.removeEventListener("pointerup",f),window.removeEventListener("pointercancel",m),!(!pf(x)||!Ui.has(l))&&(Ui.delete(l),typeof c=="function"&&c(x,{success:w}))},f=x=>{d(x,n.useGlobalTarget||Og(l,x.target))},m=x=>{d(x,!1)};window.addEventListener("pointerup",f,r),window.addEventListener("pointercancel",m,r)};return i.forEach(o=>{!s1(o)&&o.getAttribute("tabindex")===null&&(o.tabIndex=0),(n.useGlobalTarget?window:o).addEventListener("pointerdown",s,r),o.addEventListener("focus",c=>o1(c,r),r)}),a}function c1(e){return e==="x"||e==="y"?Qe[e]?null:(Qe[e]=!0,()=>{Qe[e]=!1}):Qe.x||Qe.y?null:(Qe.x=Qe.y=!0,()=>{Qe.x=Qe.y=!1})}const Lg=new Set(["width","height","top","left","right","bottom",...Ci]);let Pa;function u1(){Pa=void 0}const ft={now:()=>(Pa===void 0&&ft.set(me.isProcessing||ab.useManualTiming?me.timestamp:performance.now()),Pa),set:e=>{Pa=e,queueMicrotask(u1)}};function Cu(e,t){e.indexOf(t)===-1&&e.push(t)}function ku(e,t){const n=e.indexOf(t);n>-1&&e.splice(n,1)}class Su{constructor(){this.subscriptions=[]}add(t){return Cu(this.subscriptions,t),()=>ku(this.subscriptions,t)}notify(t,n,i){const r=this.subscriptions.length;if(r)if(r===1)this.subscriptions[0](t,n,i);else for(let a=0;a<r;a++){const s=this.subscriptions[a];s&&s(t,n,i)}}getSize(){return this.subscriptions.length}clear(){this.subscriptions.length=0}}function Fg(e,t){return t?e*(1e3/t):0}const hf=30,d1=e=>!isNaN(parseFloat(e));class f1{constructor(t,n={}){this.version="11.18.2",this.canTrackVelocity=null,this.events={},this.updateAndNotify=(i,r=!0)=>{const a=ft.now();this.updatedAt!==a&&this.setPrevFrameValue(),this.prev=this.current,this.setCurrent(i),this.current!==this.prev&&this.events.change&&this.events.change.notify(this.current),r&&this.events.renderRequest&&this.events.renderRequest.notify(this.current)},this.hasAnimated=!1,this.setCurrent(t),this.owner=n.owner}setCurrent(t){this.current=t,this.updatedAt=ft.now(),this.canTrackVelocity===null&&t!==void 0&&(this.canTrackVelocity=d1(this.current))}setPrevFrameValue(t=this.current){this.prevFrameValue=t,this.prevUpdatedAt=this.updatedAt}onChange(t){return this.on("change",t)}on(t,n){this.events[t]||(this.events[t]=new Su);const i=this.events[t].add(n);return t==="change"?()=>{i(),K.read(()=>{this.events.change.getSize()||this.stop()})}:i}clearListeners(){for(const t in this.events)this.events[t].clear()}attach(t,n){this.passiveEffect=t,this.stopPassiveEffect=n}set(t,n=!0){!n||!this.passiveEffect?this.updateAndNotify(t,n):this.passiveEffect(t,this.updateAndNotify)}setWithVelocity(t,n,i){this.set(n),this.prev=void 0,this.prevFrameValue=t,this.prevUpdatedAt=this.updatedAt-i}jump(t,n=!0){this.updateAndNotify(t),this.prev=t,this.prevUpdatedAt=this.prevFrameValue=void 0,n&&this.stop(),this.stopPassiveEffect&&this.stopPassiveEffect()}get(){return this.current}getPrevious(){return this.prev}getVelocity(){const t=ft.now();if(!this.canTrackVelocity||this.prevFrameValue===void 0||t-this.updatedAt>hf)return 0;const n=Math.min(this.updatedAt-this.prevUpdatedAt,hf);return Fg(parseFloat(this.current)-parseFloat(this.prevFrameValue),n)}start(t){return this.stop(),new Promise(n=>{this.hasAnimated=!0,this.animation=t(n),this.events.animationStart&&this.events.animationStart.notify()}).then(()=>{this.events.animationComplete&&this.events.animationComplete.notify(),this.clearAnimation()})}stop(){this.animation&&(this.animation.stop(),this.events.animationCancel&&this.events.animationCancel.notify()),this.clearAnimation()}isAnimating(){return!!this.animation}clearAnimation(){delete this.animation}destroy(){this.clearListeners(),this.stop(),this.stopPassiveEffect&&this.stopPassiveEffect()}}function Sr(e,t){return new f1(e,t)}function m1(e,t,n){e.hasValue(t)?e.getValue(t).set(n):e.addValue(t,Sr(n))}function p1(e,t){const n=Ds(e,t);let{transitionEnd:i={},transition:r={},...a}=n||{};a={...a,...i};for(const s in a){const o=Pb(a[s]);m1(e,s,o)}}function h1(e){return!!(we(e)&&e.add)}function Fl(e,t){const n=e.getValue("willChange");if(h1(n))return n.add(t)}function _g(e){return e.props[hg]}const Bg=(e,t,n)=>(((1-3*n+3*t)*e+(3*n-6*t))*e+3*t)*e,g1=1e-7,v1=12;function y1(e,t,n,i,r){let a,s,o=0;do s=t+(n-t)/2,a=Bg(s,i,r)-e,a>0?n=s:t=s;while(Math.abs(a)>g1&&++o<v1);return s}function Lr(e,t,n,i){if(e===t&&n===i)return De;const r=a=>y1(a,0,1,e,n);return a=>a===0||a===1?a:Bg(r(a),t,i)}const Vg=e=>t=>t<=.5?e(2*t)/2:(2-e(2*(1-t)))/2,Ug=e=>t=>1-e(1-t),Wg=Lr(.33,1.53,.69,.99),Tu=Ug(Wg),qg=Vg(Tu),$g=e=>(e*=2)<1?.5*Tu(e):.5*(2-Math.pow(2,-10*(e-1))),Pu=e=>1-Math.sin(Math.acos(e)),Hg=Ug(Pu),Gg=Vg(Pu),Kg=e=>/^0[^.\s]+$/u.test(e);function x1(e){return typeof e=="number"?e===0:e!==null?e==="none"||e==="0"||Kg(e):!0}const Ji=e=>Math.round(e*1e5)/1e5,Eu=/-?(?:\d+(?:\.\d+)?|\.\d+)/gu;function w1(e){return e==null}const b1=/^(?:#[\da-f]{3,8}|(?:rgb|hsl)a?\((?:-?[\d.]+%?[,\s]+){2}-?[\d.]+%?\s*(?:[,/]\s*)?(?:\b\d+(?:\.\d+)?|\.\d+)?%?\))$/iu,Au=(e,t)=>n=>!!(typeof n=="string"&&b1.test(n)&&n.startsWith(e)||t&&!w1(n)&&Object.prototype.hasOwnProperty.call(n,t)),Qg=(e,t,n)=>i=>{if(typeof i!="string")return i;const[r,a,s,o]=i.match(Eu);return{[e]:parseFloat(r),[t]:parseFloat(a),[n]:parseFloat(s),alpha:o!==void 0?parseFloat(o):1}},C1=e=>Pt(0,255,e),vo={...ki,transform:e=>Math.round(C1(e))},vn={test:Au("rgb","red"),parse:Qg("red","green","blue"),transform:({red:e,green:t,blue:n,alpha:i=1})=>"rgba("+vo.transform(e)+", "+vo.transform(t)+", "+vo.transform(n)+", "+Ji(kr.transform(i))+")"};function k1(e){let t="",n="",i="",r="";return e.length>5?(t=e.substring(1,3),n=e.substring(3,5),i=e.substring(5,7),r=e.substring(7,9)):(t=e.substring(1,2),n=e.substring(2,3),i=e.substring(3,4),r=e.substring(4,5),t+=t,n+=n,i+=i,r+=r),{red:parseInt(t,16),green:parseInt(n,16),blue:parseInt(i,16),alpha:r?parseInt(r,16)/255:1}}const _l={test:Au("#"),parse:k1,transform:vn.transform},Qn={test:Au("hsl","hue"),parse:Qg("hue","saturation","lightness"),transform:({hue:e,saturation:t,lightness:n,alpha:i=1})=>"hsla("+Math.round(e)+", "+dt.transform(Ji(t))+", "+dt.transform(Ji(n))+", "+Ji(kr.transform(i))+")"},ye={test:e=>vn.test(e)||_l.test(e)||Qn.test(e),parse:e=>vn.test(e)?vn.parse(e):Qn.test(e)?Qn.parse(e):_l.parse(e),transform:e=>typeof e=="string"?e:e.hasOwnProperty("red")?vn.transform(e):Qn.transform(e)},S1=/(?:#[\da-f]{3,8}|(?:rgb|hsl)a?\((?:-?[\d.]+%?[,\s]+){2}-?[\d.]+%?\s*(?:[,/]\s*)?(?:\b\d+(?:\.\d+)?|\.\d+)?%?\))/giu;function T1(e){var t,n;return isNaN(e)&&typeof e=="string"&&(((t=e.match(Eu))===null||t===void 0?void 0:t.length)||0)+(((n=e.match(S1))===null||n===void 0?void 0:n.length)||0)>0}const Yg="number",Xg="color",P1="var",E1="var(",gf="${}",A1=/var\s*\(\s*--(?:[\w-]+\s*|[\w-]+\s*,(?:\s*[^)(\s]|\s*\((?:[^)(]|\([^)(]*\))*\))+\s*)\)|#[\da-f]{3,8}|(?:rgb|hsl)a?\((?:-?[\d.]+%?[,\s]+){2}-?[\d.]+%?\s*(?:[,/]\s*)?(?:\b\d+(?:\.\d+)?|\.\d+)?%?\)|-?(?:\d+(?:\.\d+)?|\.\d+)/giu;function Tr(e){const t=e.toString(),n=[],i={color:[],number:[],var:[]},r=[];let a=0;const o=t.replace(A1,l=>(ye.test(l)?(i.color.push(a),r.push(Xg),n.push(ye.parse(l))):l.startsWith(E1)?(i.var.push(a),r.push(P1),n.push(l)):(i.number.push(a),r.push(Yg),n.push(parseFloat(l))),++a,gf)).split(gf);return{values:n,split:o,indexes:i,types:r}}function Zg(e){return Tr(e).values}function Jg(e){const{split:t,types:n}=Tr(e),i=t.length;return r=>{let a="";for(let s=0;s<i;s++)if(a+=t[s],r[s]!==void 0){const o=n[s];o===Yg?a+=Ji(r[s]):o===Xg?a+=ye.transform(r[s]):a+=r[s]}return a}}const j1=e=>typeof e=="number"?0:e;function N1(e){const t=Zg(e);return Jg(e)(t.map(j1))}const en={test:T1,parse:Zg,createTransformer:Jg,getAnimatableNone:N1},M1=new Set(["brightness","contrast","saturate","opacity"]);function R1(e){const[t,n]=e.slice(0,-1).split("(");if(t==="drop-shadow")return e;const[i]=n.match(Eu)||[];if(!i)return e;const r=n.replace(i,"");let a=M1.has(t)?1:0;return i!==n&&(a*=100),t+"("+a+r+")"}const I1=/\b([a-z-]*)\(.*?\)/gu,Bl={...en,getAnimatableNone:e=>{const t=e.match(I1);return t?t.map(R1).join(" "):e}},D1={...fu,color:ye,backgroundColor:ye,outlineColor:ye,fill:ye,stroke:ye,borderColor:ye,borderTopColor:ye,borderRightColor:ye,borderBottomColor:ye,borderLeftColor:ye,filter:Bl,WebkitFilter:Bl},ju=e=>D1[e];function ev(e,t){let n=ju(e);return n!==Bl&&(n=en),n.getAnimatableNone?n.getAnimatableNone(t):void 0}const z1=new Set(["auto","none","0"]);function O1(e,t,n){let i=0,r;for(;i<e.length&&!r;){const a=e[i];typeof a=="string"&&!z1.has(a)&&Tr(a).values.length&&(r=e[i]),i++}if(r&&n)for(const a of t)e[a]=ev(n,r)}const vf=e=>e===ki||e===R,yf=(e,t)=>parseFloat(e.split(", ")[t]),xf=(e,t)=>(n,{transform:i})=>{if(i==="none"||!i)return 0;const r=i.match(/^matrix3d\((.+)\)$/u);if(r)return yf(r[1],t);{const a=i.match(/^matrix\((.+)\)$/u);return a?yf(a[1],e):0}},L1=new Set(["x","y","z"]),F1=Ci.filter(e=>!L1.has(e));function _1(e){const t=[];return F1.forEach(n=>{const i=e.getValue(n);i!==void 0&&(t.push([n,i.get()]),i.set(n.startsWith("scale")?1:0))}),t}const vi={width:({x:e},{paddingLeft:t="0",paddingRight:n="0"})=>e.max-e.min-parseFloat(t)-parseFloat(n),height:({y:e},{paddingTop:t="0",paddingBottom:n="0"})=>e.max-e.min-parseFloat(t)-parseFloat(n),top:(e,{top:t})=>parseFloat(t),left:(e,{left:t})=>parseFloat(t),bottom:({y:e},{top:t})=>parseFloat(t)+(e.max-e.min),right:({x:e},{left:t})=>parseFloat(t)+(e.max-e.min),x:xf(4,13),y:xf(5,14)};vi.translateX=vi.x;vi.translateY=vi.y;const wn=new Set;let Vl=!1,Ul=!1;function tv(){if(Ul){const e=Array.from(wn).filter(i=>i.needsMeasurement),t=new Set(e.map(i=>i.element)),n=new Map;t.forEach(i=>{const r=_1(i);r.length&&(n.set(i,r),i.render())}),e.forEach(i=>i.measureInitialState()),t.forEach(i=>{i.render();const r=n.get(i);r&&r.forEach(([a,s])=>{var o;(o=i.getValue(a))===null||o===void 0||o.set(s)})}),e.forEach(i=>i.measureEndState()),e.forEach(i=>{i.suspendedScrollY!==void 0&&window.scrollTo(0,i.suspendedScrollY)})}Ul=!1,Vl=!1,wn.forEach(e=>e.complete()),wn.clear()}function nv(){wn.forEach(e=>{e.readKeyframes(),e.needsMeasurement&&(Ul=!0)})}function B1(){nv(),tv()}class Nu{constructor(t,n,i,r,a,s=!1){this.isComplete=!1,this.isAsync=!1,this.needsMeasurement=!1,this.isScheduled=!1,this.unresolvedKeyframes=[...t],this.onComplete=n,this.name=i,this.motionValue=r,this.element=a,this.isAsync=s}scheduleResolve(){this.isScheduled=!0,this.isAsync?(wn.add(this),Vl||(Vl=!0,K.read(nv),K.resolveKeyframes(tv))):(this.readKeyframes(),this.complete())}readKeyframes(){const{unresolvedKeyframes:t,name:n,element:i,motionValue:r}=this;for(let a=0;a<t.length;a++)if(t[a]===null)if(a===0){const s=r==null?void 0:r.get(),o=t[t.length-1];if(s!==void 0)t[0]=s;else if(i&&n){const l=i.readValue(n,o);l!=null&&(t[0]=l)}t[0]===void 0&&(t[0]=o),r&&s===void 0&&r.set(t[0])}else t[a]=t[a-1]}setFinalKeyframe(){}measureInitialState(){}renderEndStyles(){}measureEndState(){}complete(){this.isComplete=!0,this.onComplete(this.unresolvedKeyframes,this.finalKeyframe),wn.delete(this)}cancel(){this.isComplete||(this.isScheduled=!1,wn.delete(this))}resume(){this.isComplete||this.scheduleResolve()}}const iv=e=>/^-?(?:\d+(?:\.\d+)?|\.\d+)$/u.test(e),V1=/^var\(--(?:([\w-]+)|([\w-]+), ?([a-zA-Z\d ()%#.,-]+))\)/u;function U1(e){const t=V1.exec(e);if(!t)return[,];const[,n,i,r]=t;return[`--${n??i}`,r]}function rv(e,t,n=1){const[i,r]=U1(e);if(!i)return;const a=window.getComputedStyle(t).getPropertyValue(i);if(a){const s=a.trim();return iv(s)?parseFloat(s):s}return du(r)?rv(r,t,n+1):r}const av=e=>t=>t.test(e),W1={test:e=>e==="auto",parse:e=>e},sv=[ki,R,dt,Rt,Rb,Mb,W1],wf=e=>sv.find(av(e));class ov extends Nu{constructor(t,n,i,r,a){super(t,n,i,r,a,!0)}readKeyframes(){const{unresolvedKeyframes:t,element:n,name:i}=this;if(!n||!n.current)return;super.readKeyframes();for(let l=0;l<t.length;l++){let c=t[l];if(typeof c=="string"&&(c=c.trim(),du(c))){const d=rv(c,n.current);d!==void 0&&(t[l]=d),l===t.length-1&&(this.finalKeyframe=c)}}if(this.resolveNoneKeyframes(),!Lg.has(i)||t.length!==2)return;const[r,a]=t,s=wf(r),o=wf(a);if(s!==o)if(vf(s)&&vf(o))for(let l=0;l<t.length;l++){const c=t[l];typeof c=="string"&&(t[l]=parseFloat(c))}else this.needsMeasurement=!0}resolveNoneKeyframes(){const{unresolvedKeyframes:t,name:n}=this,i=[];for(let r=0;r<t.length;r++)x1(t[r])&&i.push(r);i.length&&O1(t,i,n)}measureInitialState(){const{element:t,unresolvedKeyframes:n,name:i}=this;if(!t||!t.current)return;i==="height"&&(this.suspendedScrollY=window.pageYOffset),this.measuredOrigin=vi[i](t.measureViewportBox(),window.getComputedStyle(t.current)),n[0]=this.measuredOrigin;const r=n[n.length-1];r!==void 0&&t.getValue(i,r).jump(r,!1)}measureEndState(){var t;const{element:n,name:i,unresolvedKeyframes:r}=this;if(!n||!n.current)return;const a=n.getValue(i);a&&a.jump(this.measuredOrigin,!1);const s=r.length-1,o=r[s];r[s]=vi[i](n.measureViewportBox(),window.getComputedStyle(n.current)),o!==null&&this.finalKeyframe===void 0&&(this.finalKeyframe=o),!((t=this.removedTransforms)===null||t===void 0)&&t.length&&this.removedTransforms.forEach(([l,c])=>{n.getValue(l).set(c)}),this.resolveNoneKeyframes()}}const bf=(e,t)=>t==="zIndex"?!1:!!(typeof e=="number"||Array.isArray(e)||typeof e=="string"&&(en.test(e)||e==="0")&&!e.startsWith("url("));function q1(e){const t=e[0];if(e.length===1)return!0;for(let n=0;n<e.length;n++)if(e[n]!==t)return!0}function $1(e,t,n,i){const r=e[0];if(r===null)return!1;if(t==="display"||t==="visibility")return!0;const a=e[e.length-1],s=bf(r,t),o=bf(a,t);return!s||!o?!1:q1(e)||(n==="spring"||xu(n))&&i}const H1=e=>e!==null;function zs(e,{repeat:t,repeatType:n="loop"},i){const r=e.filter(H1),a=t&&n!=="loop"&&t%2===1?0:r.length-1;return!a||i===void 0?r[a]:i}const G1=40;class lv{constructor({autoplay:t=!0,delay:n=0,type:i="keyframes",repeat:r=0,repeatDelay:a=0,repeatType:s="loop",...o}){this.isStopped=!1,this.hasAttemptedResolve=!1,this.createdAt=ft.now(),this.options={autoplay:t,delay:n,type:i,repeat:r,repeatDelay:a,repeatType:s,...o},this.updateFinishedPromise()}calcStartTime(){return this.resolvedAt?this.resolvedAt-this.createdAt>G1?this.resolvedAt:this.createdAt:this.createdAt}get resolved(){return!this._resolved&&!this.hasAttemptedResolve&&B1(),this._resolved}onKeyframesResolved(t,n){this.resolvedAt=ft.now(),this.hasAttemptedResolve=!0;const{name:i,type:r,velocity:a,delay:s,onComplete:o,onUpdate:l,isGenerator:c}=this.options;if(!c&&!$1(t,i,r,a))if(s)this.options.duration=0;else{l&&l(zs(t,this.options,n)),o&&o(),this.resolveFinishedPromise();return}const d=this.initPlayback(t,n);d!==!1&&(this._resolved={keyframes:t,finalKeyframe:n,...d},this.onPostResolved())}onPostResolved(){}then(t,n){return this.currentFinishedPromise.then(t,n)}flatten(){this.options.type="keyframes",this.options.ease="linear"}updateFinishedPromise(){this.currentFinishedPromise=new Promise(t=>{this.resolveFinishedPromise=t})}}const X=(e,t,n)=>e+(t-e)*n;function yo(e,t,n){return n<0&&(n+=1),n>1&&(n-=1),n<1/6?e+(t-e)*6*n:n<1/2?t:n<2/3?e+(t-e)*(2/3-n)*6:e}function K1({hue:e,saturation:t,lightness:n,alpha:i}){e/=360,t/=100,n/=100;let r=0,a=0,s=0;if(!t)r=a=s=n;else{const o=n<.5?n*(1+t):n+t-n*t,l=2*n-o;r=yo(l,o,e+1/3),a=yo(l,o,e),s=yo(l,o,e-1/3)}return{red:Math.round(r*255),green:Math.round(a*255),blue:Math.round(s*255),alpha:i}}function rs(e,t){return n=>n>0?t:e}const xo=(e,t,n)=>{const i=e*e,r=n*(t*t-i)+i;return r<0?0:Math.sqrt(r)},Q1=[_l,vn,Qn],Y1=e=>Q1.find(t=>t.test(e));function Cf(e){const t=Y1(e);if(!t)return!1;let n=t.parse(e);return t===Qn&&(n=K1(n)),n}const kf=(e,t)=>{const n=Cf(e),i=Cf(t);if(!n||!i)return rs(e,t);const r={...n};return a=>(r.red=xo(n.red,i.red,a),r.green=xo(n.green,i.green,a),r.blue=xo(n.blue,i.blue,a),r.alpha=X(n.alpha,i.alpha,a),vn.transform(r))},X1=(e,t)=>n=>t(e(n)),Fr=(...e)=>e.reduce(X1),Wl=new Set(["none","hidden"]);function Z1(e,t){return Wl.has(e)?n=>n<=0?e:t:n=>n>=1?t:e}function J1(e,t){return n=>X(e,t,n)}function Mu(e){return typeof e=="number"?J1:typeof e=="string"?du(e)?rs:ye.test(e)?kf:nC:Array.isArray(e)?cv:typeof e=="object"?ye.test(e)?kf:eC:rs}function cv(e,t){const n=[...e],i=n.length,r=e.map((a,s)=>Mu(a)(a,t[s]));return a=>{for(let s=0;s<i;s++)n[s]=r[s](a);return n}}function eC(e,t){const n={...e,...t},i={};for(const r in n)e[r]!==void 0&&t[r]!==void 0&&(i[r]=Mu(e[r])(e[r],t[r]));return r=>{for(const a in i)n[a]=i[a](r);return n}}function tC(e,t){var n;const i=[],r={color:0,var:0,number:0};for(let a=0;a<t.values.length;a++){const s=t.types[a],o=e.indexes[s][r[s]],l=(n=e.values[o])!==null&&n!==void 0?n:0;i[a]=l,r[s]++}return i}const nC=(e,t)=>{const n=en.createTransformer(t),i=Tr(e),r=Tr(t);return i.indexes.var.length===r.indexes.var.length&&i.indexes.color.length===r.indexes.color.length&&i.indexes.number.length>=r.indexes.number.length?Wl.has(e)&&!r.values.length||Wl.has(t)&&!i.values.length?Z1(e,t):Fr(cv(tC(i,r),r.values),n):rs(e,t)};function uv(e,t,n){return typeof e=="number"&&typeof t=="number"&&typeof n=="number"?X(e,t,n):Mu(e)(e,t)}const iC=5;function dv(e,t,n){const i=Math.max(t-iC,0);return Fg(n-e(i),t-i)}const te={stiffness:100,damping:10,mass:1,velocity:0,duration:800,bounce:.3,visualDuration:.3,restSpeed:{granular:.01,default:2},restDelta:{granular:.005,default:.5},minDuration:.01,maxDuration:10,minDamping:.05,maxDamping:1},wo=.001;function rC({duration:e=te.duration,bounce:t=te.bounce,velocity:n=te.velocity,mass:i=te.mass}){let r,a,s=1-t;s=Pt(te.minDamping,te.maxDamping,s),e=Pt(te.minDuration,te.maxDuration,bt(e)),s<1?(r=c=>{const d=c*s,f=d*e,m=d-n,x=ql(c,s),w=Math.exp(-f);return wo-m/x*w},a=c=>{const f=c*s*e,m=f*n+n,x=Math.pow(s,2)*Math.pow(c,2)*e,w=Math.exp(-f),v=ql(Math.pow(c,2),s);return(-r(c)+wo>0?-1:1)*((m-x)*w)/v}):(r=c=>{const d=Math.exp(-c*e),f=(c-n)*e+1;return-wo+d*f},a=c=>{const d=Math.exp(-c*e),f=(n-c)*(e*e);return d*f});const o=5/e,l=sC(r,a,o);if(e=wt(e),isNaN(l))return{stiffness:te.stiffness,damping:te.damping,duration:e};{const c=Math.pow(l,2)*i;return{stiffness:c,damping:s*2*Math.sqrt(i*c),duration:e}}}const aC=12;function sC(e,t,n){let i=n;for(let r=1;r<aC;r++)i=i-e(i)/t(i);return i}function ql(e,t){return e*Math.sqrt(1-t*t)}const oC=["duration","bounce"],lC=["stiffness","damping","mass"];function Sf(e,t){return t.some(n=>e[n]!==void 0)}function cC(e){let t={velocity:te.velocity,stiffness:te.stiffness,damping:te.damping,mass:te.mass,isResolvedFromDuration:!1,...e};if(!Sf(e,lC)&&Sf(e,oC))if(e.visualDuration){const n=e.visualDuration,i=2*Math.PI/(n*1.2),r=i*i,a=2*Pt(.05,1,1-(e.bounce||0))*Math.sqrt(r);t={...t,mass:te.mass,stiffness:r,damping:a}}else{const n=rC(e);t={...t,...n,mass:te.mass},t.isResolvedFromDuration=!0}return t}function fv(e=te.visualDuration,t=te.bounce){const n=typeof e!="object"?{visualDuration:e,keyframes:[0,1],bounce:t}:e;let{restSpeed:i,restDelta:r}=n;const a=n.keyframes[0],s=n.keyframes[n.keyframes.length-1],o={done:!1,value:a},{stiffness:l,damping:c,mass:d,duration:f,velocity:m,isResolvedFromDuration:x}=cC({...n,velocity:-bt(n.velocity||0)}),w=m||0,v=c/(2*Math.sqrt(l*d)),b=s-a,p=bt(Math.sqrt(l/d)),h=Math.abs(b)<5;i||(i=h?te.restSpeed.granular:te.restSpeed.default),r||(r=h?te.restDelta.granular:te.restDelta.default);let y;if(v<1){const k=ql(p,v);y=P=>{const S=Math.exp(-v*p*P);return s-S*((w+v*p*b)/k*Math.sin(k*P)+b*Math.cos(k*P))}}else if(v===1)y=k=>s-Math.exp(-p*k)*(b+(w+p*b)*k);else{const k=p*Math.sqrt(v*v-1);y=P=>{const S=Math.exp(-v*p*P),T=Math.min(k*P,300);return s-S*((w+v*p*b)*Math.sinh(T)+k*b*Math.cosh(T))/k}}const C={calculatedDuration:x&&f||null,next:k=>{const P=y(k);if(x)o.done=k>=f;else{let S=0;v<1&&(S=k===0?wt(w):dv(y,k,P));const T=Math.abs(S)<=i,D=Math.abs(s-P)<=r;o.done=T&&D}return o.value=o.done?s:P,o},toString:()=>{const k=Math.min(Ng(C),Ol),P=Mg(S=>C.next(k*S).value,k,30);return k+"ms "+P}};return C}function Tf({keyframes:e,velocity:t=0,power:n=.8,timeConstant:i=325,bounceDamping:r=10,bounceStiffness:a=500,modifyTarget:s,min:o,max:l,restDelta:c=.5,restSpeed:d}){const f=e[0],m={done:!1,value:f},x=T=>o!==void 0&&T<o||l!==void 0&&T>l,w=T=>o===void 0?l:l===void 0||Math.abs(o-T)<Math.abs(l-T)?o:l;let v=n*t;const b=f+v,p=s===void 0?b:s(b);p!==b&&(v=p-f);const h=T=>-v*Math.exp(-T/i),y=T=>p+h(T),C=T=>{const D=h(T),N=y(T);m.done=Math.abs(D)<=c,m.value=m.done?p:N};let k,P;const S=T=>{x(m.value)&&(k=T,P=fv({keyframes:[m.value,w(m.value)],velocity:dv(y,T,m.value),damping:r,stiffness:a,restDelta:c,restSpeed:d}))};return S(0),{calculatedDuration:null,next:T=>{let D=!1;return!P&&k===void 0&&(D=!0,C(T),S(T)),k!==void 0&&T>=k?P.next(T-k):(!D&&C(T),m)}}}const uC=Lr(.42,0,1,1),dC=Lr(0,0,.58,1),mv=Lr(.42,0,.58,1),fC=e=>Array.isArray(e)&&typeof e[0]!="number",mC={linear:De,easeIn:uC,easeInOut:mv,easeOut:dC,circIn:Pu,circInOut:Gg,circOut:Hg,backIn:Tu,backInOut:qg,backOut:Wg,anticipate:$g},Pf=e=>{if(wu(e)){ug(e.length===4);const[t,n,i,r]=e;return Lr(t,n,i,r)}else if(typeof e=="string")return mC[e];return e};function pC(e,t,n){const i=[],r=n||uv,a=e.length-1;for(let s=0;s<a;s++){let o=r(e[s],e[s+1]);if(t){const l=Array.isArray(t)?t[s]||De:t;o=Fr(l,o)}i.push(o)}return i}function hC(e,t,{clamp:n=!0,ease:i,mixer:r}={}){const a=e.length;if(ug(a===t.length),a===1)return()=>t[0];if(a===2&&t[0]===t[1])return()=>t[1];const s=e[0]===e[1];e[0]>e[a-1]&&(e=[...e].reverse(),t=[...t].reverse());const o=pC(t,i,r),l=o.length,c=d=>{if(s&&d<e[0])return t[0];let f=0;if(l>1)for(;f<e.length-2&&!(d<e[f+1]);f++);const m=hi(e[f],e[f+1],d);return o[f](m)};return n?d=>c(Pt(e[0],e[a-1],d)):c}function gC(e,t){const n=e[e.length-1];for(let i=1;i<=t;i++){const r=hi(0,t,i);e.push(X(n,1,r))}}function vC(e){const t=[0];return gC(t,e.length-1),t}function yC(e,t){return e.map(n=>n*t)}function xC(e,t){return e.map(()=>t||mv).splice(0,e.length-1)}function as({duration:e=300,keyframes:t,times:n,ease:i="easeInOut"}){const r=fC(i)?i.map(Pf):Pf(i),a={done:!1,value:t[0]},s=yC(n&&n.length===t.length?n:vC(t),e),o=hC(s,t,{ease:Array.isArray(r)?r:xC(t,r)});return{calculatedDuration:e,next:l=>(a.value=o(l),a.done=l>=e,a)}}const wC=e=>{const t=({timestamp:n})=>e(n);return{start:()=>K.update(t,!0),stop:()=>Jt(t),now:()=>me.isProcessing?me.timestamp:ft.now()}},bC={decay:Tf,inertia:Tf,tween:as,keyframes:as,spring:fv},CC=e=>e/100;class Ru extends lv{constructor(t){super(t),this.holdTime=null,this.cancelTime=null,this.currentTime=0,this.playbackSpeed=1,this.pendingPlayState="running",this.startTime=null,this.state="idle",this.stop=()=>{if(this.resolver.cancel(),this.isStopped=!0,this.state==="idle")return;this.teardown();const{onStop:l}=this.options;l&&l()};const{name:n,motionValue:i,element:r,keyframes:a}=this.options,s=(r==null?void 0:r.KeyframeResolver)||Nu,o=(l,c)=>this.onKeyframesResolved(l,c);this.resolver=new s(a,o,n,i,r),this.resolver.scheduleResolve()}flatten(){super.flatten(),this._resolved&&Object.assign(this._resolved,this.initPlayback(this._resolved.keyframes))}initPlayback(t){const{type:n="keyframes",repeat:i=0,repeatDelay:r=0,repeatType:a,velocity:s=0}=this.options,o=xu(n)?n:bC[n]||as;let l,c;o!==as&&typeof t[0]!="number"&&(l=Fr(CC,uv(t[0],t[1])),t=[0,100]);const d=o({...this.options,keyframes:t});a==="mirror"&&(c=o({...this.options,keyframes:[...t].reverse(),velocity:-s})),d.calculatedDuration===null&&(d.calculatedDuration=Ng(d));const{calculatedDuration:f}=d,m=f+r,x=m*(i+1)-r;return{generator:d,mirroredGenerator:c,mapPercentToKeyframes:l,calculatedDuration:f,resolvedDuration:m,totalDuration:x}}onPostResolved(){const{autoplay:t=!0}=this.options;this.play(),this.pendingPlayState==="paused"||!t?this.pause():this.state=this.pendingPlayState}tick(t,n=!1){const{resolved:i}=this;if(!i){const{keyframes:T}=this.options;return{done:!0,value:T[T.length-1]}}const{finalKeyframe:r,generator:a,mirroredGenerator:s,mapPercentToKeyframes:o,keyframes:l,calculatedDuration:c,totalDuration:d,resolvedDuration:f}=i;if(this.startTime===null)return a.next(0);const{delay:m,repeat:x,repeatType:w,repeatDelay:v,onUpdate:b}=this.options;this.speed>0?this.startTime=Math.min(this.startTime,t):this.speed<0&&(this.startTime=Math.min(t-d/this.speed,this.startTime)),n?this.currentTime=t:this.holdTime!==null?this.currentTime=this.holdTime:this.currentTime=Math.round(t-this.startTime)*this.speed;const p=this.currentTime-m*(this.speed>=0?1:-1),h=this.speed>=0?p<0:p>d;this.currentTime=Math.max(p,0),this.state==="finished"&&this.holdTime===null&&(this.currentTime=d);let y=this.currentTime,C=a;if(x){const T=Math.min(this.currentTime,d)/f;let D=Math.floor(T),N=T%1;!N&&T>=1&&(N=1),N===1&&D--,D=Math.min(D,x+1),!!(D%2)&&(w==="reverse"?(N=1-N,v&&(N-=v/f)):w==="mirror"&&(C=s)),y=Pt(0,1,N)*f}const k=h?{done:!1,value:l[0]}:C.next(y);o&&(k.value=o(k.value));let{done:P}=k;!h&&c!==null&&(P=this.speed>=0?this.currentTime>=d:this.currentTime<=0);const S=this.holdTime===null&&(this.state==="finished"||this.state==="running"&&P);return S&&r!==void 0&&(k.value=zs(l,this.options,r)),b&&b(k.value),S&&this.finish(),k}get duration(){const{resolved:t}=this;return t?bt(t.calculatedDuration):0}get time(){return bt(this.currentTime)}set time(t){t=wt(t),this.currentTime=t,this.holdTime!==null||this.speed===0?this.holdTime=t:this.driver&&(this.startTime=this.driver.now()-t/this.speed)}get speed(){return this.playbackSpeed}set speed(t){const n=this.playbackSpeed!==t;this.playbackSpeed=t,n&&(this.time=bt(this.currentTime))}play(){if(this.resolver.isScheduled||this.resolver.resume(),!this._resolved){this.pendingPlayState="running";return}if(this.isStopped)return;const{driver:t=wC,onPlay:n,startTime:i}=this.options;this.driver||(this.driver=t(a=>this.tick(a))),n&&n();const r=this.driver.now();this.holdTime!==null?this.startTime=r-this.holdTime:this.startTime?this.state==="finished"&&(this.startTime=r):this.startTime=i??this.calcStartTime(),this.state==="finished"&&this.updateFinishedPromise(),this.cancelTime=this.startTime,this.holdTime=null,this.state="running",this.driver.start()}pause(){var t;if(!this._resolved){this.pendingPlayState="paused";return}this.state="paused",this.holdTime=(t=this.currentTime)!==null&&t!==void 0?t:0}complete(){this.state!=="running"&&this.play(),this.pendingPlayState=this.state="finished",this.holdTime=null}finish(){this.teardown(),this.state="finished";const{onComplete:t}=this.options;t&&t()}cancel(){this.cancelTime!==null&&this.tick(this.cancelTime),this.teardown(),this.updateFinishedPromise()}teardown(){this.state="idle",this.stopDriver(),this.resolveFinishedPromise(),this.updateFinishedPromise(),this.startTime=this.cancelTime=null,this.resolver.cancel()}stopDriver(){this.driver&&(this.driver.stop(),this.driver=void 0)}sample(t){return this.startTime=0,this.tick(t,!0)}}const kC=new Set(["opacity","clipPath","filter","transform"]);function SC(e,t,n,{delay:i=0,duration:r=300,repeat:a=0,repeatType:s="loop",ease:o="easeInOut",times:l}={}){const c={[t]:n};l&&(c.offset=l);const d=Ig(o,r);return Array.isArray(d)&&(c.easing=d),e.animate(c,{delay:i,duration:r,easing:Array.isArray(d)?"linear":d,fill:"both",iterations:a+1,direction:s==="reverse"?"alternate":"normal"})}const TC=ru(()=>Object.hasOwnProperty.call(Element.prototype,"animate")),ss=10,PC=2e4;function EC(e){return xu(e.type)||e.type==="spring"||!Rg(e.ease)}function AC(e,t){const n=new Ru({...t,keyframes:e,repeat:0,delay:0,isGenerator:!0});let i={done:!1,value:e[0]};const r=[];let a=0;for(;!i.done&&a<PC;)i=n.sample(a),r.push(i.value),a+=ss;return{times:void 0,keyframes:r,duration:a-ss,ease:"linear"}}const pv={anticipate:$g,backInOut:qg,circInOut:Gg};function jC(e){return e in pv}class Ef extends lv{constructor(t){super(t);const{name:n,motionValue:i,element:r,keyframes:a}=this.options;this.resolver=new ov(a,(s,o)=>this.onKeyframesResolved(s,o),n,i,r),this.resolver.scheduleResolve()}initPlayback(t,n){let{duration:i=300,times:r,ease:a,type:s,motionValue:o,name:l,startTime:c}=this.options;if(!o.owner||!o.owner.current)return!1;if(typeof a=="string"&&is()&&jC(a)&&(a=pv[a]),EC(this.options)){const{onComplete:f,onUpdate:m,motionValue:x,element:w,...v}=this.options,b=AC(t,v);t=b.keyframes,t.length===1&&(t[1]=t[0]),i=b.duration,r=b.times,a=b.ease,s="keyframes"}const d=SC(o.owner.current,l,t,{...this.options,duration:i,times:r,ease:a});return d.startTime=c??this.calcStartTime(),this.pendingTimeline?(df(d,this.pendingTimeline),this.pendingTimeline=void 0):d.onfinish=()=>{const{onComplete:f}=this.options;o.set(zs(t,this.options,n)),f&&f(),this.cancel(),this.resolveFinishedPromise()},{animation:d,duration:i,times:r,type:s,ease:a,keyframes:t}}get duration(){const{resolved:t}=this;if(!t)return 0;const{duration:n}=t;return bt(n)}get time(){const{resolved:t}=this;if(!t)return 0;const{animation:n}=t;return bt(n.currentTime||0)}set time(t){const{resolved:n}=this;if(!n)return;const{animation:i}=n;i.currentTime=wt(t)}get speed(){const{resolved:t}=this;if(!t)return 1;const{animation:n}=t;return n.playbackRate}set speed(t){const{resolved:n}=this;if(!n)return;const{animation:i}=n;i.playbackRate=t}get state(){const{resolved:t}=this;if(!t)return"idle";const{animation:n}=t;return n.playState}get startTime(){const{resolved:t}=this;if(!t)return null;const{animation:n}=t;return n.startTime}attachTimeline(t){if(!this._resolved)this.pendingTimeline=t;else{const{resolved:n}=this;if(!n)return De;const{animation:i}=n;df(i,t)}return De}play(){if(this.isStopped)return;const{resolved:t}=this;if(!t)return;const{animation:n}=t;n.playState==="finished"&&this.updateFinishedPromise(),n.play()}pause(){const{resolved:t}=this;if(!t)return;const{animation:n}=t;n.pause()}stop(){if(this.resolver.cancel(),this.isStopped=!0,this.state==="idle")return;this.resolveFinishedPromise(),this.updateFinishedPromise();const{resolved:t}=this;if(!t)return;const{animation:n,keyframes:i,duration:r,type:a,ease:s,times:o}=t;if(n.playState==="idle"||n.playState==="finished")return;if(this.time){const{motionValue:c,onUpdate:d,onComplete:f,element:m,...x}=this.options,w=new Ru({...x,keyframes:i,duration:r,type:a,ease:s,times:o,isGenerator:!0}),v=wt(this.time);c.setWithVelocity(w.sample(v-ss).value,w.sample(v).value,ss)}const{onStop:l}=this.options;l&&l(),this.cancel()}complete(){const{resolved:t}=this;t&&t.animation.finish()}cancel(){const{resolved:t}=this;t&&t.animation.cancel()}static supports(t){const{motionValue:n,name:i,repeatDelay:r,repeatType:a,damping:s,type:o}=t;if(!n||!n.owner||!(n.owner.current instanceof HTMLElement))return!1;const{onUpdate:l,transformTemplate:c}=n.owner.getProps();return TC()&&i&&kC.has(i)&&!l&&!c&&!r&&a!=="mirror"&&s!==0&&o!=="inertia"}}const NC={type:"spring",stiffness:500,damping:25,restSpeed:10},MC=e=>({type:"spring",stiffness:550,damping:e===0?2*Math.sqrt(550):30,restSpeed:10}),RC={type:"keyframes",duration:.8},IC={type:"keyframes",ease:[.25,.1,.35,1],duration:.3},DC=(e,{keyframes:t})=>t.length>2?RC:Nn.has(e)?e.startsWith("scale")?MC(t[1]):NC:IC;function zC({when:e,delay:t,delayChildren:n,staggerChildren:i,staggerDirection:r,repeat:a,repeatType:s,repeatDelay:o,from:l,elapsed:c,...d}){return!!Object.keys(d).length}const Iu=(e,t,n,i={},r,a)=>s=>{const o=yu(i,e)||{},l=o.delay||i.delay||0;let{elapsed:c=0}=i;c=c-wt(l);let d={keyframes:Array.isArray(n)?n:[null,n],ease:"easeOut",velocity:t.getVelocity(),...o,delay:-c,onUpdate:m=>{t.set(m),o.onUpdate&&o.onUpdate(m)},onComplete:()=>{s(),o.onComplete&&o.onComplete()},name:e,motionValue:t,element:a?void 0:r};zC(o)||(d={...d,...DC(e,d)}),d.duration&&(d.duration=wt(d.duration)),d.repeatDelay&&(d.repeatDelay=wt(d.repeatDelay)),d.from!==void 0&&(d.keyframes[0]=d.from);let f=!1;if((d.type===!1||d.duration===0&&!d.repeatDelay)&&(d.duration=0,d.delay===0&&(f=!0)),f&&!a&&t.get()!==void 0){const m=zs(d.keyframes,o);if(m!==void 0)return K.update(()=>{d.onUpdate(m),d.onComplete()}),new e1([])}return!a&&Ef.supports(d)?new Ef(d):new Ru(d)};function OC({protectedKeys:e,needsAnimating:t},n){const i=e.hasOwnProperty(n)&&t[n]!==!0;return t[n]=!1,i}function hv(e,t,{delay:n=0,transitionOverride:i,type:r}={}){var a;let{transition:s=e.getDefaultTransition(),transitionEnd:o,...l}=t;i&&(s=i);const c=[],d=r&&e.animationState&&e.animationState.getState()[r];for(const f in l){const m=e.getValue(f,(a=e.latestValues[f])!==null&&a!==void 0?a:null),x=l[f];if(x===void 0||d&&OC(d,f))continue;const w={delay:n,...yu(s||{},f)};let v=!1;if(window.MotionHandoffAnimation){const p=_g(e);if(p){const h=window.MotionHandoffAnimation(p,f,K);h!==null&&(w.startTime=h,v=!0)}}Fl(e,f),m.start(Iu(f,m,x,e.shouldReduceMotion&&Lg.has(f)?{type:!1}:w,e,v));const b=m.animation;b&&c.push(b)}return o&&Promise.all(c).then(()=>{K.update(()=>{o&&p1(e,o)})}),c}function $l(e,t,n={}){var i;const r=Ds(e,t,n.type==="exit"?(i=e.presenceContext)===null||i===void 0?void 0:i.custom:void 0);let{transition:a=e.getDefaultTransition()||{}}=r||{};n.transitionOverride&&(a=n.transitionOverride);const s=r?()=>Promise.all(hv(e,r,n)):()=>Promise.resolve(),o=e.variantChildren&&e.variantChildren.size?(c=0)=>{const{delayChildren:d=0,staggerChildren:f,staggerDirection:m}=a;return LC(e,t,d+c,f,m,n)}:()=>Promise.resolve(),{when:l}=a;if(l){const[c,d]=l==="beforeChildren"?[s,o]:[o,s];return c().then(()=>d())}else return Promise.all([s(),o(n.delay)])}function LC(e,t,n=0,i=0,r=1,a){const s=[],o=(e.variantChildren.size-1)*i,l=r===1?(c=0)=>c*i:(c=0)=>o-c*i;return Array.from(e.variantChildren).sort(FC).forEach((c,d)=>{c.notify("AnimationStart",t),s.push($l(c,t,{...a,delay:n+l(d)}).then(()=>c.notify("AnimationComplete",t)))}),Promise.all(s)}function FC(e,t){return e.sortNodePosition(t)}function _C(e,t,n={}){e.notify("AnimationStart",t);let i;if(Array.isArray(t)){const r=t.map(a=>$l(e,a,n));i=Promise.all(r)}else if(typeof t=="string")i=$l(e,t,n);else{const r=typeof t=="function"?Ds(e,t,n.custom):t;i=Promise.all(hv(e,r,n))}return i.then(()=>{e.notify("AnimationComplete",t)})}const BC=su.length;function gv(e){if(!e)return;if(!e.isControllingVariants){const n=e.parent?gv(e.parent)||{}:{};return e.props.initial!==void 0&&(n.initial=e.props.initial),n}const t={};for(let n=0;n<BC;n++){const i=su[n],r=e.props[i];(Cr(r)||r===!1)&&(t[i]=r)}return t}const VC=[...au].reverse(),UC=au.length;function WC(e){return t=>Promise.all(t.map(({animation:n,options:i})=>_C(e,n,i)))}function qC(e){let t=WC(e),n=Af(),i=!0;const r=l=>(c,d)=>{var f;const m=Ds(e,d,l==="exit"?(f=e.presenceContext)===null||f===void 0?void 0:f.custom:void 0);if(m){const{transition:x,transitionEnd:w,...v}=m;c={...c,...v,...w}}return c};function a(l){t=l(e)}function s(l){const{props:c}=e,d=gv(e.parent)||{},f=[],m=new Set;let x={},w=1/0;for(let b=0;b<UC;b++){const p=VC[b],h=n[p],y=c[p]!==void 0?c[p]:d[p],C=Cr(y),k=p===l?h.isActive:null;k===!1&&(w=b);let P=y===d[p]&&y!==c[p]&&C;if(P&&i&&e.manuallyAnimateOnMount&&(P=!1),h.protectedKeys={...x},!h.isActive&&k===null||!y&&!h.prevProp||Rs(y)||typeof y=="boolean")continue;const S=$C(h.prevProp,y);let T=S||p===l&&h.isActive&&!P&&C||b>w&&C,D=!1;const N=Array.isArray(y)?y:[y];let W=N.reduce(r(p),{});k===!1&&(W={});const{prevResolvedValues:F={}}=h,it={...F,...W},rt=ee=>{T=!0,m.has(ee)&&(D=!0,m.delete(ee)),h.needsAnimating[ee]=!0;const A=e.getValue(ee);A&&(A.liveStyle=!1)};for(const ee in it){const A=W[ee],M=F[ee];if(x.hasOwnProperty(ee))continue;let z=!1;zl(A)&&zl(M)?z=!jg(A,M):z=A!==M,z?A!=null?rt(ee):m.add(ee):A!==void 0&&m.has(ee)?rt(ee):h.protectedKeys[ee]=!0}h.prevProp=y,h.prevResolvedValues=W,h.isActive&&(x={...x,...W}),i&&e.blockInitialAnimation&&(T=!1),T&&(!(P&&S)||D)&&f.push(...N.map(ee=>({animation:ee,options:{type:p}})))}if(m.size){const b={};m.forEach(p=>{const h=e.getBaseTarget(p),y=e.getValue(p);y&&(y.liveStyle=!0),b[p]=h??null}),f.push({animation:b})}let v=!!f.length;return i&&(c.initial===!1||c.initial===c.animate)&&!e.manuallyAnimateOnMount&&(v=!1),i=!1,v?t(f):Promise.resolve()}function o(l,c){var d;if(n[l].isActive===c)return Promise.resolve();(d=e.variantChildren)===null||d===void 0||d.forEach(m=>{var x;return(x=m.animationState)===null||x===void 0?void 0:x.setActive(l,c)}),n[l].isActive=c;const f=s(l);for(const m in n)n[m].protectedKeys={};return f}return{animateChanges:s,setActive:o,setAnimateFunction:a,getState:()=>n,reset:()=>{n=Af(),i=!0}}}function $C(e,t){return typeof t=="string"?t!==e:Array.isArray(t)?!jg(t,e):!1}function cn(e=!1){return{isActive:e,protectedKeys:{},needsAnimating:{},prevResolvedValues:{}}}function Af(){return{animate:cn(!0),whileInView:cn(),whileHover:cn(),whileTap:cn(),whileDrag:cn(),whileFocus:cn(),exit:cn()}}class sn{constructor(t){this.isMounted=!1,this.node=t}update(){}}class HC extends sn{constructor(t){super(t),t.animationState||(t.animationState=qC(t))}updateAnimationControlsSubscription(){const{animate:t}=this.node.getProps();Rs(t)&&(this.unmountControls=t.subscribe(this.node))}mount(){this.updateAnimationControlsSubscription()}update(){const{animate:t}=this.node.getProps(),{animate:n}=this.node.prevProps||{};t!==n&&this.updateAnimationControlsSubscription()}unmount(){var t;this.node.animationState.reset(),(t=this.unmountControls)===null||t===void 0||t.call(this)}}let GC=0;class KC extends sn{constructor(){super(...arguments),this.id=GC++}update(){if(!this.node.presenceContext)return;const{isPresent:t,onExitComplete:n}=this.node.presenceContext,{isPresent:i}=this.node.prevPresenceContext||{};if(!this.node.animationState||t===i)return;const r=this.node.animationState.setActive("exit",!t);n&&!t&&r.then(()=>n(this.id))}mount(){const{register:t}=this.node.presenceContext||{};t&&(this.unmount=t(this.id))}unmount(){}}const QC={animation:{Feature:HC},exit:{Feature:KC}};function Pr(e,t,n,i={passive:!0}){return e.addEventListener(t,n,i),()=>e.removeEventListener(t,n)}function _r(e){return{point:{x:e.pageX,y:e.pageY}}}const YC=e=>t=>bu(t)&&e(t,_r(t));function er(e,t,n,i){return Pr(e,t,YC(n),i)}const jf=(e,t)=>Math.abs(e-t);function XC(e,t){const n=jf(e.x,t.x),i=jf(e.y,t.y);return Math.sqrt(n**2+i**2)}class vv{constructor(t,n,{transformPagePoint:i,contextWindow:r,dragSnapToOrigin:a=!1}={}){if(this.startEvent=null,this.lastMoveEvent=null,this.lastMoveEventInfo=null,this.handlers={},this.contextWindow=window,this.updatePoint=()=>{if(!(this.lastMoveEvent&&this.lastMoveEventInfo))return;const f=Co(this.lastMoveEventInfo,this.history),m=this.startEvent!==null,x=XC(f.offset,{x:0,y:0})>=3;if(!m&&!x)return;const{point:w}=f,{timestamp:v}=me;this.history.push({...w,timestamp:v});const{onStart:b,onMove:p}=this.handlers;m||(b&&b(this.lastMoveEvent,f),this.startEvent=this.lastMoveEvent),p&&p(this.lastMoveEvent,f)},this.handlePointerMove=(f,m)=>{this.lastMoveEvent=f,this.lastMoveEventInfo=bo(m,this.transformPagePoint),K.update(this.updatePoint,!0)},this.handlePointerUp=(f,m)=>{this.end();const{onEnd:x,onSessionEnd:w,resumeAnimation:v}=this.handlers;if(this.dragSnapToOrigin&&v&&v(),!(this.lastMoveEvent&&this.lastMoveEventInfo))return;const b=Co(f.type==="pointercancel"?this.lastMoveEventInfo:bo(m,this.transformPagePoint),this.history);this.startEvent&&x&&x(f,b),w&&w(f,b)},!bu(t))return;this.dragSnapToOrigin=a,this.handlers=n,this.transformPagePoint=i,this.contextWindow=r||window;const s=_r(t),o=bo(s,this.transformPagePoint),{point:l}=o,{timestamp:c}=me;this.history=[{...l,timestamp:c}];const{onSessionStart:d}=n;d&&d(t,Co(o,this.history)),this.removeListeners=Fr(er(this.contextWindow,"pointermove",this.handlePointerMove),er(this.contextWindow,"pointerup",this.handlePointerUp),er(this.contextWindow,"pointercancel",this.handlePointerUp))}updateHandlers(t){this.handlers=t}end(){this.removeListeners&&this.removeListeners(),Jt(this.updatePoint)}}function bo(e,t){return t?{point:t(e.point)}:e}function Nf(e,t){return{x:e.x-t.x,y:e.y-t.y}}function Co({point:e},t){return{point:e,delta:Nf(e,yv(t)),offset:Nf(e,ZC(t)),velocity:JC(t,.1)}}function ZC(e){return e[0]}function yv(e){return e[e.length-1]}function JC(e,t){if(e.length<2)return{x:0,y:0};let n=e.length-1,i=null;const r=yv(e);for(;n>=0&&(i=e[n],!(r.timestamp-i.timestamp>wt(t)));)n--;if(!i)return{x:0,y:0};const a=bt(r.timestamp-i.timestamp);if(a===0)return{x:0,y:0};const s={x:(r.x-i.x)/a,y:(r.y-i.y)/a};return s.x===1/0&&(s.x=0),s.y===1/0&&(s.y=0),s}const xv=1e-4,ek=1-xv,tk=1+xv,wv=.01,nk=0-wv,ik=0+wv;function Le(e){return e.max-e.min}function rk(e,t,n){return Math.abs(e-t)<=n}function Mf(e,t,n,i=.5){e.origin=i,e.originPoint=X(t.min,t.max,e.origin),e.scale=Le(n)/Le(t),e.translate=X(n.min,n.max,e.origin)-e.originPoint,(e.scale>=ek&&e.scale<=tk||isNaN(e.scale))&&(e.scale=1),(e.translate>=nk&&e.translate<=ik||isNaN(e.translate))&&(e.translate=0)}function tr(e,t,n,i){Mf(e.x,t.x,n.x,i?i.originX:void 0),Mf(e.y,t.y,n.y,i?i.originY:void 0)}function Rf(e,t,n){e.min=n.min+t.min,e.max=e.min+Le(t)}function ak(e,t,n){Rf(e.x,t.x,n.x),Rf(e.y,t.y,n.y)}function If(e,t,n){e.min=t.min-n.min,e.max=e.min+Le(t)}function nr(e,t,n){If(e.x,t.x,n.x),If(e.y,t.y,n.y)}function sk(e,{min:t,max:n},i){return t!==void 0&&e<t?e=i?X(t,e,i.min):Math.max(e,t):n!==void 0&&e>n&&(e=i?X(n,e,i.max):Math.min(e,n)),e}function Df(e,t,n){return{min:t!==void 0?e.min+t:void 0,max:n!==void 0?e.max+n-(e.max-e.min):void 0}}function ok(e,{top:t,left:n,bottom:i,right:r}){return{x:Df(e.x,n,r),y:Df(e.y,t,i)}}function zf(e,t){let n=t.min-e.min,i=t.max-e.max;return t.max-t.min<e.max-e.min&&([n,i]=[i,n]),{min:n,max:i}}function lk(e,t){return{x:zf(e.x,t.x),y:zf(e.y,t.y)}}function ck(e,t){let n=.5;const i=Le(e),r=Le(t);return r>i?n=hi(t.min,t.max-i,e.min):i>r&&(n=hi(e.min,e.max-r,t.min)),Pt(0,1,n)}function uk(e,t){const n={};return t.min!==void 0&&(n.min=t.min-e.min),t.max!==void 0&&(n.max=t.max-e.min),n}const Hl=.35;function dk(e=Hl){return e===!1?e=0:e===!0&&(e=Hl),{x:Of(e,"left","right"),y:Of(e,"top","bottom")}}function Of(e,t,n){return{min:Lf(e,t),max:Lf(e,n)}}function Lf(e,t){return typeof e=="number"?e:e[t]||0}const Ff=()=>({translate:0,scale:1,origin:0,originPoint:0}),Yn=()=>({x:Ff(),y:Ff()}),_f=()=>({min:0,max:0}),ie=()=>({x:_f(),y:_f()});function Ve(e){return[e("x"),e("y")]}function bv({top:e,left:t,right:n,bottom:i}){return{x:{min:t,max:n},y:{min:e,max:i}}}function fk({x:e,y:t}){return{top:t.min,right:e.max,bottom:t.max,left:e.min}}function mk(e,t){if(!t)return e;const n=t({x:e.left,y:e.top}),i=t({x:e.right,y:e.bottom});return{top:n.y,left:n.x,bottom:i.y,right:i.x}}function ko(e){return e===void 0||e===1}function Gl({scale:e,scaleX:t,scaleY:n}){return!ko(e)||!ko(t)||!ko(n)}function fn(e){return Gl(e)||Cv(e)||e.z||e.rotate||e.rotateX||e.rotateY||e.skewX||e.skewY}function Cv(e){return Bf(e.x)||Bf(e.y)}function Bf(e){return e&&e!=="0%"}function os(e,t,n){const i=e-n,r=t*i;return n+r}function Vf(e,t,n,i,r){return r!==void 0&&(e=os(e,r,i)),os(e,n,i)+t}function Kl(e,t=0,n=1,i,r){e.min=Vf(e.min,t,n,i,r),e.max=Vf(e.max,t,n,i,r)}function kv(e,{x:t,y:n}){Kl(e.x,t.translate,t.scale,t.originPoint),Kl(e.y,n.translate,n.scale,n.originPoint)}const Uf=.999999999999,Wf=1.0000000000001;function pk(e,t,n,i=!1){const r=n.length;if(!r)return;t.x=t.y=1;let a,s;for(let o=0;o<r;o++){a=n[o],s=a.projectionDelta;const{visualElement:l}=a.options;l&&l.props.style&&l.props.style.display==="contents"||(i&&a.options.layoutScroll&&a.scroll&&a!==a.root&&Zn(e,{x:-a.scroll.offset.x,y:-a.scroll.offset.y}),s&&(t.x*=s.x.scale,t.y*=s.y.scale,kv(e,s)),i&&fn(a.latestValues)&&Zn(e,a.latestValues))}t.x<Wf&&t.x>Uf&&(t.x=1),t.y<Wf&&t.y>Uf&&(t.y=1)}function Xn(e,t){e.min=e.min+t,e.max=e.max+t}function qf(e,t,n,i,r=.5){const a=X(e.min,e.max,r);Kl(e,t,n,a,i)}function Zn(e,t){qf(e.x,t.x,t.scaleX,t.scale,t.originX),qf(e.y,t.y,t.scaleY,t.scale,t.originY)}function Sv(e,t){return bv(mk(e.getBoundingClientRect(),t))}function hk(e,t,n){const i=Sv(e,n),{scroll:r}=t;return r&&(Xn(i.x,r.offset.x),Xn(i.y,r.offset.y)),i}const Tv=({current:e})=>e?e.ownerDocument.defaultView:null,gk=new WeakMap;class vk{constructor(t){this.openDragLock=null,this.isDragging=!1,this.currentDirection=null,this.originPoint={x:0,y:0},this.constraints=!1,this.hasMutatedConstraints=!1,this.elastic=ie(),this.visualElement=t}start(t,{snapToCursor:n=!1}={}){const{presenceContext:i}=this.visualElement;if(i&&i.isPresent===!1)return;const r=d=>{const{dragSnapToOrigin:f}=this.getProps();f?this.pauseAnimation():this.stopAnimation(),n&&this.snapToCursor(_r(d).point)},a=(d,f)=>{const{drag:m,dragPropagation:x,onDragStart:w}=this.getProps();if(m&&!x&&(this.openDragLock&&this.openDragLock(),this.openDragLock=c1(m),!this.openDragLock))return;this.isDragging=!0,this.currentDirection=null,this.resolveConstraints(),this.visualElement.projection&&(this.visualElement.projection.isAnimationBlocked=!0,this.visualElement.projection.target=void 0),Ve(b=>{let p=this.getAxisMotionValue(b).get()||0;if(dt.test(p)){const{projection:h}=this.visualElement;if(h&&h.layout){const y=h.layout.layoutBox[b];y&&(p=Le(y)*(parseFloat(p)/100))}}this.originPoint[b]=p}),w&&K.postRender(()=>w(d,f)),Fl(this.visualElement,"transform");const{animationState:v}=this.visualElement;v&&v.setActive("whileDrag",!0)},s=(d,f)=>{const{dragPropagation:m,dragDirectionLock:x,onDirectionLock:w,onDrag:v}=this.getProps();if(!m&&!this.openDragLock)return;const{offset:b}=f;if(x&&this.currentDirection===null){this.currentDirection=yk(b),this.currentDirection!==null&&w&&w(this.currentDirection);return}this.updateAxis("x",f.point,b),this.updateAxis("y",f.point,b),this.visualElement.render(),v&&v(d,f)},o=(d,f)=>this.stop(d,f),l=()=>Ve(d=>{var f;return this.getAnimationState(d)==="paused"&&((f=this.getAxisMotionValue(d).animation)===null||f===void 0?void 0:f.play())}),{dragSnapToOrigin:c}=this.getProps();this.panSession=new vv(t,{onSessionStart:r,onStart:a,onMove:s,onSessionEnd:o,resumeAnimation:l},{transformPagePoint:this.visualElement.getTransformPagePoint(),dragSnapToOrigin:c,contextWindow:Tv(this.visualElement)})}stop(t,n){const i=this.isDragging;if(this.cancel(),!i)return;const{velocity:r}=n;this.startAnimation(r);const{onDragEnd:a}=this.getProps();a&&K.postRender(()=>a(t,n))}cancel(){this.isDragging=!1;const{projection:t,animationState:n}=this.visualElement;t&&(t.isAnimationBlocked=!1),this.panSession&&this.panSession.end(),this.panSession=void 0;const{dragPropagation:i}=this.getProps();!i&&this.openDragLock&&(this.openDragLock(),this.openDragLock=null),n&&n.setActive("whileDrag",!1)}updateAxis(t,n,i){const{drag:r}=this.getProps();if(!i||!oa(t,r,this.currentDirection))return;const a=this.getAxisMotionValue(t);let s=this.originPoint[t]+i[t];this.constraints&&this.constraints[t]&&(s=sk(s,this.constraints[t],this.elastic[t])),a.set(s)}resolveConstraints(){var t;const{dragConstraints:n,dragElastic:i}=this.getProps(),r=this.visualElement.projection&&!this.visualElement.projection.layout?this.visualElement.projection.measure(!1):(t=this.visualElement.projection)===null||t===void 0?void 0:t.layout,a=this.constraints;n&&Kn(n)?this.constraints||(this.constraints=this.resolveRefConstraints()):n&&r?this.constraints=ok(r.layoutBox,n):this.constraints=!1,this.elastic=dk(i),a!==this.constraints&&r&&this.constraints&&!this.hasMutatedConstraints&&Ve(s=>{this.constraints!==!1&&this.getAxisMotionValue(s)&&(this.constraints[s]=uk(r.layoutBox[s],this.constraints[s]))})}resolveRefConstraints(){const{dragConstraints:t,onMeasureDragConstraints:n}=this.getProps();if(!t||!Kn(t))return!1;const i=t.current,{projection:r}=this.visualElement;if(!r||!r.layout)return!1;const a=hk(i,r.root,this.visualElement.getTransformPagePoint());let s=lk(r.layout.layoutBox,a);if(n){const o=n(fk(s));this.hasMutatedConstraints=!!o,o&&(s=bv(o))}return s}startAnimation(t){const{drag:n,dragMomentum:i,dragElastic:r,dragTransition:a,dragSnapToOrigin:s,onDragTransitionEnd:o}=this.getProps(),l=this.constraints||{},c=Ve(d=>{if(!oa(d,n,this.currentDirection))return;let f=l&&l[d]||{};s&&(f={min:0,max:0});const m=r?200:1e6,x=r?40:1e7,w={type:"inertia",velocity:i?t[d]:0,bounceStiffness:m,bounceDamping:x,timeConstant:750,restDelta:1,restSpeed:10,...a,...f};return this.startAxisValueAnimation(d,w)});return Promise.all(c).then(o)}startAxisValueAnimation(t,n){const i=this.getAxisMotionValue(t);return Fl(this.visualElement,t),i.start(Iu(t,i,0,n,this.visualElement,!1))}stopAnimation(){Ve(t=>this.getAxisMotionValue(t).stop())}pauseAnimation(){Ve(t=>{var n;return(n=this.getAxisMotionValue(t).animation)===null||n===void 0?void 0:n.pause()})}getAnimationState(t){var n;return(n=this.getAxisMotionValue(t).animation)===null||n===void 0?void 0:n.state}getAxisMotionValue(t){const n=`_drag${t.toUpperCase()}`,i=this.visualElement.getProps(),r=i[n];return r||this.visualElement.getValue(t,(i.initial?i.initial[t]:void 0)||0)}snapToCursor(t){Ve(n=>{const{drag:i}=this.getProps();if(!oa(n,i,this.currentDirection))return;const{projection:r}=this.visualElement,a=this.getAxisMotionValue(n);if(r&&r.layout){const{min:s,max:o}=r.layout.layoutBox[n];a.set(t[n]-X(s,o,.5))}})}scalePositionWithinConstraints(){if(!this.visualElement.current)return;const{drag:t,dragConstraints:n}=this.getProps(),{projection:i}=this.visualElement;if(!Kn(n)||!i||!this.constraints)return;this.stopAnimation();const r={x:0,y:0};Ve(s=>{const o=this.getAxisMotionValue(s);if(o&&this.constraints!==!1){const l=o.get();r[s]=ck({min:l,max:l},this.constraints[s])}});const{transformTemplate:a}=this.visualElement.getProps();this.visualElement.current.style.transform=a?a({},""):"none",i.root&&i.root.updateScroll(),i.updateLayout(),this.resolveConstraints(),Ve(s=>{if(!oa(s,t,null))return;const o=this.getAxisMotionValue(s),{min:l,max:c}=this.constraints[s];o.set(X(l,c,r[s]))})}addListeners(){if(!this.visualElement.current)return;gk.set(this.visualElement,this);const t=this.visualElement.current,n=er(t,"pointerdown",l=>{const{drag:c,dragListener:d=!0}=this.getProps();c&&d&&this.start(l)}),i=()=>{const{dragConstraints:l}=this.getProps();Kn(l)&&l.current&&(this.constraints=this.resolveRefConstraints())},{projection:r}=this.visualElement,a=r.addEventListener("measure",i);r&&!r.layout&&(r.root&&r.root.updateScroll(),r.updateLayout()),K.read(i);const s=Pr(window,"resize",()=>this.scalePositionWithinConstraints()),o=r.addEventListener("didUpdate",({delta:l,hasLayoutChanged:c})=>{this.isDragging&&c&&(Ve(d=>{const f=this.getAxisMotionValue(d);f&&(this.originPoint[d]+=l[d].translate,f.set(f.get()+l[d].translate))}),this.visualElement.render())});return()=>{s(),n(),a(),o&&o()}}getProps(){const t=this.visualElement.getProps(),{drag:n=!1,dragDirectionLock:i=!1,dragPropagation:r=!1,dragConstraints:a=!1,dragElastic:s=Hl,dragMomentum:o=!0}=t;return{...t,drag:n,dragDirectionLock:i,dragPropagation:r,dragConstraints:a,dragElastic:s,dragMomentum:o}}}function oa(e,t,n){return(t===!0||t===e)&&(n===null||n===e)}function yk(e,t=10){let n=null;return Math.abs(e.y)>t?n="y":Math.abs(e.x)>t&&(n="x"),n}class xk extends sn{constructor(t){super(t),this.removeGroupControls=De,this.removeListeners=De,this.controls=new vk(t)}mount(){const{dragControls:t}=this.node.getProps();t&&(this.removeGroupControls=t.subscribe(this.controls)),this.removeListeners=this.controls.addListeners()||De}unmount(){this.removeGroupControls(),this.removeListeners()}}const $f=e=>(t,n)=>{e&&K.postRender(()=>e(t,n))};class wk extends sn{constructor(){super(...arguments),this.removePointerDownListener=De}onPointerDown(t){this.session=new vv(t,this.createPanHandlers(),{transformPagePoint:this.node.getTransformPagePoint(),contextWindow:Tv(this.node)})}createPanHandlers(){const{onPanSessionStart:t,onPanStart:n,onPan:i,onPanEnd:r}=this.node.getProps();return{onSessionStart:$f(t),onStart:$f(n),onMove:i,onEnd:(a,s)=>{delete this.session,r&&K.postRender(()=>r(a,s))}}}mount(){this.removePointerDownListener=er(this.node.current,"pointerdown",t=>this.onPointerDown(t))}update(){this.session&&this.session.updateHandlers(this.createPanHandlers())}unmount(){this.removePointerDownListener(),this.session&&this.session.end()}}const Ea={hasAnimatedSinceResize:!0,hasEverUpdated:!1};function Hf(e,t){return t.max===t.min?0:e/(t.max-t.min)*100}const Di={correct:(e,t)=>{if(!t.target)return e;if(typeof e=="string")if(R.test(e))e=parseFloat(e);else return e;const n=Hf(e,t.target.x),i=Hf(e,t.target.y);return`${n}% ${i}%`}},bk={correct:(e,{treeScale:t,projectionDelta:n})=>{const i=e,r=en.parse(e);if(r.length>5)return i;const a=en.createTransformer(e),s=typeof r[0]!="number"?1:0,o=n.x.scale*t.x,l=n.y.scale*t.y;r[0+s]/=o,r[1+s]/=l;const c=X(o,l,.5);return typeof r[2+s]=="number"&&(r[2+s]/=c),typeof r[3+s]=="number"&&(r[3+s]/=c),a(r)}};class Ck extends g.Component{componentDidMount(){const{visualElement:t,layoutGroup:n,switchLayoutGroup:i,layoutId:r}=this.props,{projection:a}=t;Ub(kk),a&&(n.group&&n.group.add(a),i&&i.register&&r&&i.register(a),a.root.didUpdate(),a.addEventListener("animationComplete",()=>{this.safeToRemove()}),a.setOptions({...a.options,onExitComplete:()=>this.safeToRemove()})),Ea.hasEverUpdated=!0}getSnapshotBeforeUpdate(t){const{layoutDependency:n,visualElement:i,drag:r,isPresent:a}=this.props,s=i.projection;return s&&(s.isPresent=a,r||t.layoutDependency!==n||n===void 0?s.willUpdate():this.safeToRemove(),t.isPresent!==a&&(a?s.promote():s.relegate()||K.postRender(()=>{const o=s.getStack();(!o||!o.members.length)&&this.safeToRemove()}))),null}componentDidUpdate(){const{projection:t}=this.props.visualElement;t&&(t.root.didUpdate(),lu.postRender(()=>{!t.currentAnimation&&t.isLead()&&this.safeToRemove()}))}componentWillUnmount(){const{visualElement:t,layoutGroup:n,switchLayoutGroup:i}=this.props,{projection:r}=t;r&&(r.scheduleCheckAfterUnmount(),n&&n.group&&n.group.remove(r),i&&i.deregister&&i.deregister(r))}safeToRemove(){const{safeToRemove:t}=this.props;t&&t()}render(){return null}}function Pv(e){const[t,n]=ib(),i=g.useContext(lg);return u.jsx(Ck,{...e,layoutGroup:i,switchLayoutGroup:g.useContext(gg),isPresent:t,safeToRemove:n})}const kk={borderRadius:{...Di,applyTo:["borderTopLeftRadius","borderTopRightRadius","borderBottomLeftRadius","borderBottomRightRadius"]},borderTopLeftRadius:Di,borderTopRightRadius:Di,borderBottomLeftRadius:Di,borderBottomRightRadius:Di,boxShadow:bk};function Sk(e,t,n){const i=we(e)?e:Sr(e);return i.start(Iu("",i,t,n)),i.animation}function Tk(e){return e instanceof SVGElement&&e.tagName!=="svg"}const Pk=(e,t)=>e.depth-t.depth;class Ek{constructor(){this.children=[],this.isDirty=!1}add(t){Cu(this.children,t),this.isDirty=!0}remove(t){ku(this.children,t),this.isDirty=!0}forEach(t){this.isDirty&&this.children.sort(Pk),this.isDirty=!1,this.children.forEach(t)}}function Ak(e,t){const n=ft.now(),i=({timestamp:r})=>{const a=r-n;a>=t&&(Jt(i),e(a-t))};return K.read(i,!0),()=>Jt(i)}const Ev=["TopLeft","TopRight","BottomLeft","BottomRight"],jk=Ev.length,Gf=e=>typeof e=="string"?parseFloat(e):e,Kf=e=>typeof e=="number"||R.test(e);function Nk(e,t,n,i,r,a){r?(e.opacity=X(0,n.opacity!==void 0?n.opacity:1,Mk(i)),e.opacityExit=X(t.opacity!==void 0?t.opacity:1,0,Rk(i))):a&&(e.opacity=X(t.opacity!==void 0?t.opacity:1,n.opacity!==void 0?n.opacity:1,i));for(let s=0;s<jk;s++){const o=`border${Ev[s]}Radius`;let l=Qf(t,o),c=Qf(n,o);if(l===void 0&&c===void 0)continue;l||(l=0),c||(c=0),l===0||c===0||Kf(l)===Kf(c)?(e[o]=Math.max(X(Gf(l),Gf(c),i),0),(dt.test(c)||dt.test(l))&&(e[o]+="%")):e[o]=c}(t.rotate||n.rotate)&&(e.rotate=X(t.rotate||0,n.rotate||0,i))}function Qf(e,t){return e[t]!==void 0?e[t]:e.borderRadius}const Mk=Av(0,.5,Hg),Rk=Av(.5,.95,De);function Av(e,t,n){return i=>i<e?0:i>t?1:n(hi(e,t,i))}function Yf(e,t){e.min=t.min,e.max=t.max}function Be(e,t){Yf(e.x,t.x),Yf(e.y,t.y)}function Xf(e,t){e.translate=t.translate,e.scale=t.scale,e.originPoint=t.originPoint,e.origin=t.origin}function Zf(e,t,n,i,r){return e-=t,e=os(e,1/n,i),r!==void 0&&(e=os(e,1/r,i)),e}function Ik(e,t=0,n=1,i=.5,r,a=e,s=e){if(dt.test(t)&&(t=parseFloat(t),t=X(s.min,s.max,t/100)-s.min),typeof t!="number")return;let o=X(a.min,a.max,i);e===a&&(o-=t),e.min=Zf(e.min,t,n,o,r),e.max=Zf(e.max,t,n,o,r)}function Jf(e,t,[n,i,r],a,s){Ik(e,t[n],t[i],t[r],t.scale,a,s)}const Dk=["x","scaleX","originX"],zk=["y","scaleY","originY"];function em(e,t,n,i){Jf(e.x,t,Dk,n?n.x:void 0,i?i.x:void 0),Jf(e.y,t,zk,n?n.y:void 0,i?i.y:void 0)}function tm(e){return e.translate===0&&e.scale===1}function jv(e){return tm(e.x)&&tm(e.y)}function nm(e,t){return e.min===t.min&&e.max===t.max}function Ok(e,t){return nm(e.x,t.x)&&nm(e.y,t.y)}function im(e,t){return Math.round(e.min)===Math.round(t.min)&&Math.round(e.max)===Math.round(t.max)}function Nv(e,t){return im(e.x,t.x)&&im(e.y,t.y)}function rm(e){return Le(e.x)/Le(e.y)}function am(e,t){return e.translate===t.translate&&e.scale===t.scale&&e.originPoint===t.originPoint}class Lk{constructor(){this.members=[]}add(t){Cu(this.members,t),t.scheduleRender()}remove(t){if(ku(this.members,t),t===this.prevLead&&(this.prevLead=void 0),t===this.lead){const n=this.members[this.members.length-1];n&&this.promote(n)}}relegate(t){const n=this.members.findIndex(r=>t===r);if(n===0)return!1;let i;for(let r=n;r>=0;r--){const a=this.members[r];if(a.isPresent!==!1){i=a;break}}return i?(this.promote(i),!0):!1}promote(t,n){const i=this.lead;if(t!==i&&(this.prevLead=i,this.lead=t,t.show(),i)){i.instance&&i.scheduleRender(),t.scheduleRender(),t.resumeFrom=i,n&&(t.resumeFrom.preserveOpacity=!0),i.snapshot&&(t.snapshot=i.snapshot,t.snapshot.latestValues=i.animationValues||i.latestValues),t.root&&t.root.isUpdating&&(t.isLayoutDirty=!0);const{crossfade:r}=t.options;r===!1&&i.hide()}}exitAnimationComplete(){this.members.forEach(t=>{const{options:n,resumingFrom:i}=t;n.onExitComplete&&n.onExitComplete(),i&&i.options.onExitComplete&&i.options.onExitComplete()})}scheduleRender(){this.members.forEach(t=>{t.instance&&t.scheduleRender(!1)})}removeLeadSnapshot(){this.lead&&this.lead.snapshot&&(this.lead.snapshot=void 0)}}function Fk(e,t,n){let i="";const r=e.x.translate/t.x,a=e.y.translate/t.y,s=(n==null?void 0:n.z)||0;if((r||a||s)&&(i=`translate3d(${r}px, ${a}px, ${s}px) `),(t.x!==1||t.y!==1)&&(i+=`scale(${1/t.x}, ${1/t.y}) `),n){const{transformPerspective:c,rotate:d,rotateX:f,rotateY:m,skewX:x,skewY:w}=n;c&&(i=`perspective(${c}px) ${i}`),d&&(i+=`rotate(${d}deg) `),f&&(i+=`rotateX(${f}deg) `),m&&(i+=`rotateY(${m}deg) `),x&&(i+=`skewX(${x}deg) `),w&&(i+=`skewY(${w}deg) `)}const o=e.x.scale*t.x,l=e.y.scale*t.y;return(o!==1||l!==1)&&(i+=`scale(${o}, ${l})`),i||"none"}const mn={type:"projectionFrame",totalNodes:0,resolvedTargetDeltas:0,recalculatedProjection:0},Wi=typeof window<"u"&&window.MotionDebug!==void 0,So=["","X","Y","Z"],_k={visibility:"hidden"},sm=1e3;let Bk=0;function To(e,t,n,i){const{latestValues:r}=t;r[e]&&(n[e]=r[e],t.setStaticValue(e,0),i&&(i[e]=0))}function Mv(e){if(e.hasCheckedOptimisedAppear=!0,e.root===e)return;const{visualElement:t}=e.options;if(!t)return;const n=_g(t);if(window.MotionHasOptimisedAnimation(n,"transform")){const{layout:r,layoutId:a}=e.options;window.MotionCancelOptimisedAnimation(n,"transform",K,!(r||a))}const{parent:i}=e;i&&!i.hasCheckedOptimisedAppear&&Mv(i)}function Rv({attachResizeListener:e,defaultParent:t,measureScroll:n,checkIsScrollRoot:i,resetTransform:r}){return class{constructor(s={},o=t==null?void 0:t()){this.id=Bk++,this.animationId=0,this.children=new Set,this.options={},this.isTreeAnimating=!1,this.isAnimationBlocked=!1,this.isLayoutDirty=!1,this.isProjectionDirty=!1,this.isSharedProjectionDirty=!1,this.isTransformDirty=!1,this.updateManuallyBlocked=!1,this.updateBlockedByResize=!1,this.isUpdating=!1,this.isSVG=!1,this.needsReset=!1,this.shouldResetTransform=!1,this.hasCheckedOptimisedAppear=!1,this.treeScale={x:1,y:1},this.eventHandlers=new Map,this.hasTreeAnimated=!1,this.updateScheduled=!1,this.scheduleUpdate=()=>this.update(),this.projectionUpdateScheduled=!1,this.checkUpdateFailed=()=>{this.isUpdating&&(this.isUpdating=!1,this.clearAllSnapshots())},this.updateProjection=()=>{this.projectionUpdateScheduled=!1,Wi&&(mn.totalNodes=mn.resolvedTargetDeltas=mn.recalculatedProjection=0),this.nodes.forEach(Wk),this.nodes.forEach(Kk),this.nodes.forEach(Qk),this.nodes.forEach(qk),Wi&&window.MotionDebug.record(mn)},this.resolvedRelativeTargetAt=0,this.hasProjected=!1,this.isVisible=!0,this.animationProgress=0,this.sharedNodes=new Map,this.latestValues=s,this.root=o?o.root||o:this,this.path=o?[...o.path,o]:[],this.parent=o,this.depth=o?o.depth+1:0;for(let l=0;l<this.path.length;l++)this.path[l].shouldResetTransform=!0;this.root===this&&(this.nodes=new Ek)}addEventListener(s,o){return this.eventHandlers.has(s)||this.eventHandlers.set(s,new Su),this.eventHandlers.get(s).add(o)}notifyListeners(s,...o){const l=this.eventHandlers.get(s);l&&l.notify(...o)}hasListeners(s){return this.eventHandlers.has(s)}mount(s,o=this.root.hasTreeAnimated){if(this.instance)return;this.isSVG=Tk(s),this.instance=s;const{layoutId:l,layout:c,visualElement:d}=this.options;if(d&&!d.current&&d.mount(s),this.root.nodes.add(this),this.parent&&this.parent.children.add(this),o&&(c||l)&&(this.isLayoutDirty=!0),e){let f;const m=()=>this.root.updateBlockedByResize=!1;e(s,()=>{this.root.updateBlockedByResize=!0,f&&f(),f=Ak(m,250),Ea.hasAnimatedSinceResize&&(Ea.hasAnimatedSinceResize=!1,this.nodes.forEach(lm))})}l&&this.root.registerSharedNode(l,this),this.options.animate!==!1&&d&&(l||c)&&this.addEventListener("didUpdate",({delta:f,hasLayoutChanged:m,hasRelativeTargetChanged:x,layout:w})=>{if(this.isTreeAnimationBlocked()){this.target=void 0,this.relativeTarget=void 0;return}const v=this.options.transition||d.getDefaultTransition()||eS,{onLayoutAnimationStart:b,onLayoutAnimationComplete:p}=d.getProps(),h=!this.targetLayout||!Nv(this.targetLayout,w)||x,y=!m&&x;if(this.options.layoutRoot||this.resumeFrom&&this.resumeFrom.instance||y||m&&(h||!this.currentAnimation)){this.resumeFrom&&(this.resumingFrom=this.resumeFrom,this.resumingFrom.resumingFrom=void 0),this.setAnimationOrigin(f,y);const C={...yu(v,"layout"),onPlay:b,onComplete:p};(d.shouldReduceMotion||this.options.layoutRoot)&&(C.delay=0,C.type=!1),this.startAnimation(C)}else m||lm(this),this.isLead()&&this.options.onExitComplete&&this.options.onExitComplete();this.targetLayout=w})}unmount(){this.options.layoutId&&this.willUpdate(),this.root.nodes.remove(this);const s=this.getStack();s&&s.remove(this),this.parent&&this.parent.children.delete(this),this.instance=void 0,Jt(this.updateProjection)}blockUpdate(){this.updateManuallyBlocked=!0}unblockUpdate(){this.updateManuallyBlocked=!1}isUpdateBlocked(){return this.updateManuallyBlocked||this.updateBlockedByResize}isTreeAnimationBlocked(){return this.isAnimationBlocked||this.parent&&this.parent.isTreeAnimationBlocked()||!1}startUpdate(){this.isUpdateBlocked()||(this.isUpdating=!0,this.nodes&&this.nodes.forEach(Yk),this.animationId++)}getTransformTemplate(){const{visualElement:s}=this.options;return s&&s.getProps().transformTemplate}willUpdate(s=!0){if(this.root.hasTreeAnimated=!0,this.root.isUpdateBlocked()){this.options.onExitComplete&&this.options.onExitComplete();return}if(window.MotionCancelOptimisedAnimation&&!this.hasCheckedOptimisedAppear&&Mv(this),!this.root.isUpdating&&this.root.startUpdate(),this.isLayoutDirty)return;this.isLayoutDirty=!0;for(let d=0;d<this.path.length;d++){const f=this.path[d];f.shouldResetTransform=!0,f.updateScroll("snapshot"),f.options.layoutRoot&&f.willUpdate(!1)}const{layoutId:o,layout:l}=this.options;if(o===void 0&&!l)return;const c=this.getTransformTemplate();this.prevTransformTemplateValue=c?c(this.latestValues,""):void 0,this.updateSnapshot(),s&&this.notifyListeners("willUpdate")}update(){if(this.updateScheduled=!1,this.isUpdateBlocked()){this.unblockUpdate(),this.clearAllSnapshots(),this.nodes.forEach(om);return}this.isUpdating||this.nodes.forEach(Hk),this.isUpdating=!1,this.nodes.forEach(Gk),this.nodes.forEach(Vk),this.nodes.forEach(Uk),this.clearAllSnapshots();const o=ft.now();me.delta=Pt(0,1e3/60,o-me.timestamp),me.timestamp=o,me.isProcessing=!0,ho.update.process(me),ho.preRender.process(me),ho.render.process(me),me.isProcessing=!1}didUpdate(){this.updateScheduled||(this.updateScheduled=!0,lu.read(this.scheduleUpdate))}clearAllSnapshots(){this.nodes.forEach($k),this.sharedNodes.forEach(Xk)}scheduleUpdateProjection(){this.projectionUpdateScheduled||(this.projectionUpdateScheduled=!0,K.preRender(this.updateProjection,!1,!0))}scheduleCheckAfterUnmount(){K.postRender(()=>{this.isLayoutDirty?this.root.didUpdate():this.root.checkUpdateFailed()})}updateSnapshot(){this.snapshot||!this.instance||(this.snapshot=this.measure())}updateLayout(){if(!this.instance||(this.updateScroll(),!(this.options.alwaysMeasureLayout&&this.isLead())&&!this.isLayoutDirty))return;if(this.resumeFrom&&!this.resumeFrom.instance)for(let l=0;l<this.path.length;l++)this.path[l].updateScroll();const s=this.layout;this.layout=this.measure(!1),this.layoutCorrected=ie(),this.isLayoutDirty=!1,this.projectionDelta=void 0,this.notifyListeners("measure",this.layout.layoutBox);const{visualElement:o}=this.options;o&&o.notify("LayoutMeasure",this.layout.layoutBox,s?s.layoutBox:void 0)}updateScroll(s="measure"){let o=!!(this.options.layoutScroll&&this.instance);if(this.scroll&&this.scroll.animationId===this.root.animationId&&this.scroll.phase===s&&(o=!1),o){const l=i(this.instance);this.scroll={animationId:this.root.animationId,phase:s,isRoot:l,offset:n(this.instance),wasRoot:this.scroll?this.scroll.isRoot:l}}}resetTransform(){if(!r)return;const s=this.isLayoutDirty||this.shouldResetTransform||this.options.alwaysMeasureLayout,o=this.projectionDelta&&!jv(this.projectionDelta),l=this.getTransformTemplate(),c=l?l(this.latestValues,""):void 0,d=c!==this.prevTransformTemplateValue;s&&(o||fn(this.latestValues)||d)&&(r(this.instance,c),this.shouldResetTransform=!1,this.scheduleRender())}measure(s=!0){const o=this.measurePageBox();let l=this.removeElementScroll(o);return s&&(l=this.removeTransform(l)),tS(l),{animationId:this.root.animationId,measuredBox:o,layoutBox:l,latestValues:{},source:this.id}}measurePageBox(){var s;const{visualElement:o}=this.options;if(!o)return ie();const l=o.measureViewportBox();if(!(((s=this.scroll)===null||s===void 0?void 0:s.wasRoot)||this.path.some(nS))){const{scroll:d}=this.root;d&&(Xn(l.x,d.offset.x),Xn(l.y,d.offset.y))}return l}removeElementScroll(s){var o;const l=ie();if(Be(l,s),!((o=this.scroll)===null||o===void 0)&&o.wasRoot)return l;for(let c=0;c<this.path.length;c++){const d=this.path[c],{scroll:f,options:m}=d;d!==this.root&&f&&m.layoutScroll&&(f.wasRoot&&Be(l,s),Xn(l.x,f.offset.x),Xn(l.y,f.offset.y))}return l}applyTransform(s,o=!1){const l=ie();Be(l,s);for(let c=0;c<this.path.length;c++){const d=this.path[c];!o&&d.options.layoutScroll&&d.scroll&&d!==d.root&&Zn(l,{x:-d.scroll.offset.x,y:-d.scroll.offset.y}),fn(d.latestValues)&&Zn(l,d.latestValues)}return fn(this.latestValues)&&Zn(l,this.latestValues),l}removeTransform(s){const o=ie();Be(o,s);for(let l=0;l<this.path.length;l++){const c=this.path[l];if(!c.instance||!fn(c.latestValues))continue;Gl(c.latestValues)&&c.updateSnapshot();const d=ie(),f=c.measurePageBox();Be(d,f),em(o,c.latestValues,c.snapshot?c.snapshot.layoutBox:void 0,d)}return fn(this.latestValues)&&em(o,this.latestValues),o}setTargetDelta(s){this.targetDelta=s,this.root.scheduleUpdateProjection(),this.isProjectionDirty=!0}setOptions(s){this.options={...this.options,...s,crossfade:s.crossfade!==void 0?s.crossfade:!0}}clearMeasurements(){this.scroll=void 0,this.layout=void 0,this.snapshot=void 0,this.prevTransformTemplateValue=void 0,this.targetDelta=void 0,this.target=void 0,this.isLayoutDirty=!1}forceRelativeParentToResolveTarget(){this.relativeParent&&this.relativeParent.resolvedRelativeTargetAt!==me.timestamp&&this.relativeParent.resolveTargetDelta(!0)}resolveTargetDelta(s=!1){var o;const l=this.getLead();this.isProjectionDirty||(this.isProjectionDirty=l.isProjectionDirty),this.isTransformDirty||(this.isTransformDirty=l.isTransformDirty),this.isSharedProjectionDirty||(this.isSharedProjectionDirty=l.isSharedProjectionDirty);const c=!!this.resumingFrom||this!==l;if(!(s||c&&this.isSharedProjectionDirty||this.isProjectionDirty||!((o=this.parent)===null||o===void 0)&&o.isProjectionDirty||this.attemptToResolveRelativeTarget||this.root.updateBlockedByResize))return;const{layout:f,layoutId:m}=this.options;if(!(!this.layout||!(f||m))){if(this.resolvedRelativeTargetAt=me.timestamp,!this.targetDelta&&!this.relativeTarget){const x=this.getClosestProjectingParent();x&&x.layout&&this.animationProgress!==1?(this.relativeParent=x,this.forceRelativeParentToResolveTarget(),this.relativeTarget=ie(),this.relativeTargetOrigin=ie(),nr(this.relativeTargetOrigin,this.layout.layoutBox,x.layout.layoutBox),Be(this.relativeTarget,this.relativeTargetOrigin)):this.relativeParent=this.relativeTarget=void 0}if(!(!this.relativeTarget&&!this.targetDelta)){if(this.target||(this.target=ie(),this.targetWithTransforms=ie()),this.relativeTarget&&this.relativeTargetOrigin&&this.relativeParent&&this.relativeParent.target?(this.forceRelativeParentToResolveTarget(),ak(this.target,this.relativeTarget,this.relativeParent.target)):this.targetDelta?(this.resumingFrom?this.target=this.applyTransform(this.layout.layoutBox):Be(this.target,this.layout.layoutBox),kv(this.target,this.targetDelta)):Be(this.target,this.layout.layoutBox),this.attemptToResolveRelativeTarget){this.attemptToResolveRelativeTarget=!1;const x=this.getClosestProjectingParent();x&&!!x.resumingFrom==!!this.resumingFrom&&!x.options.layoutScroll&&x.target&&this.animationProgress!==1?(this.relativeParent=x,this.forceRelativeParentToResolveTarget(),this.relativeTarget=ie(),this.relativeTargetOrigin=ie(),nr(this.relativeTargetOrigin,this.target,x.target),Be(this.relativeTarget,this.relativeTargetOrigin)):this.relativeParent=this.relativeTarget=void 0}Wi&&mn.resolvedTargetDeltas++}}}getClosestProjectingParent(){if(!(!this.parent||Gl(this.parent.latestValues)||Cv(this.parent.latestValues)))return this.parent.isProjecting()?this.parent:this.parent.getClosestProjectingParent()}isProjecting(){return!!((this.relativeTarget||this.targetDelta||this.options.layoutRoot)&&this.layout)}calcProjection(){var s;const o=this.getLead(),l=!!this.resumingFrom||this!==o;let c=!0;if((this.isProjectionDirty||!((s=this.parent)===null||s===void 0)&&s.isProjectionDirty)&&(c=!1),l&&(this.isSharedProjectionDirty||this.isTransformDirty)&&(c=!1),this.resolvedRelativeTargetAt===me.timestamp&&(c=!1),c)return;const{layout:d,layoutId:f}=this.options;if(this.isTreeAnimating=!!(this.parent&&this.parent.isTreeAnimating||this.currentAnimation||this.pendingAnimation),this.isTreeAnimating||(this.targetDelta=this.relativeTarget=void 0),!this.layout||!(d||f))return;Be(this.layoutCorrected,this.layout.layoutBox);const m=this.treeScale.x,x=this.treeScale.y;pk(this.layoutCorrected,this.treeScale,this.path,l),o.layout&&!o.target&&(this.treeScale.x!==1||this.treeScale.y!==1)&&(o.target=o.layout.layoutBox,o.targetWithTransforms=ie());const{target:w}=o;if(!w){this.prevProjectionDelta&&(this.createProjectionDeltas(),this.scheduleRender());return}!this.projectionDelta||!this.prevProjectionDelta?this.createProjectionDeltas():(Xf(this.prevProjectionDelta.x,this.projectionDelta.x),Xf(this.prevProjectionDelta.y,this.projectionDelta.y)),tr(this.projectionDelta,this.layoutCorrected,w,this.latestValues),(this.treeScale.x!==m||this.treeScale.y!==x||!am(this.projectionDelta.x,this.prevProjectionDelta.x)||!am(this.projectionDelta.y,this.prevProjectionDelta.y))&&(this.hasProjected=!0,this.scheduleRender(),this.notifyListeners("projectionUpdate",w)),Wi&&mn.recalculatedProjection++}hide(){this.isVisible=!1}show(){this.isVisible=!0}scheduleRender(s=!0){var o;if((o=this.options.visualElement)===null||o===void 0||o.scheduleRender(),s){const l=this.getStack();l&&l.scheduleRender()}this.resumingFrom&&!this.resumingFrom.instance&&(this.resumingFrom=void 0)}createProjectionDeltas(){this.prevProjectionDelta=Yn(),this.projectionDelta=Yn(),this.projectionDeltaWithTransform=Yn()}setAnimationOrigin(s,o=!1){const l=this.snapshot,c=l?l.latestValues:{},d={...this.latestValues},f=Yn();(!this.relativeParent||!this.relativeParent.options.layoutRoot)&&(this.relativeTarget=this.relativeTargetOrigin=void 0),this.attemptToResolveRelativeTarget=!o;const m=ie(),x=l?l.source:void 0,w=this.layout?this.layout.source:void 0,v=x!==w,b=this.getStack(),p=!b||b.members.length<=1,h=!!(v&&!p&&this.options.crossfade===!0&&!this.path.some(Jk));this.animationProgress=0;let y;this.mixTargetDelta=C=>{const k=C/1e3;cm(f.x,s.x,k),cm(f.y,s.y,k),this.setTargetDelta(f),this.relativeTarget&&this.relativeTargetOrigin&&this.layout&&this.relativeParent&&this.relativeParent.layout&&(nr(m,this.layout.layoutBox,this.relativeParent.layout.layoutBox),Zk(this.relativeTarget,this.relativeTargetOrigin,m,k),y&&Ok(this.relativeTarget,y)&&(this.isProjectionDirty=!1),y||(y=ie()),Be(y,this.relativeTarget)),v&&(this.animationValues=d,Nk(d,c,this.latestValues,k,h,p)),this.root.scheduleUpdateProjection(),this.scheduleRender(),this.animationProgress=k},this.mixTargetDelta(this.options.layoutRoot?1e3:0)}startAnimation(s){this.notifyListeners("animationStart"),this.currentAnimation&&this.currentAnimation.stop(),this.resumingFrom&&this.resumingFrom.currentAnimation&&this.resumingFrom.currentAnimation.stop(),this.pendingAnimation&&(Jt(this.pendingAnimation),this.pendingAnimation=void 0),this.pendingAnimation=K.update(()=>{Ea.hasAnimatedSinceResize=!0,this.currentAnimation=Sk(0,sm,{...s,onUpdate:o=>{this.mixTargetDelta(o),s.onUpdate&&s.onUpdate(o)},onComplete:()=>{s.onComplete&&s.onComplete(),this.completeAnimation()}}),this.resumingFrom&&(this.resumingFrom.currentAnimation=this.currentAnimation),this.pendingAnimation=void 0})}completeAnimation(){this.resumingFrom&&(this.resumingFrom.currentAnimation=void 0,this.resumingFrom.preserveOpacity=void 0);const s=this.getStack();s&&s.exitAnimationComplete(),this.resumingFrom=this.currentAnimation=this.animationValues=void 0,this.notifyListeners("animationComplete")}finishAnimation(){this.currentAnimation&&(this.mixTargetDelta&&this.mixTargetDelta(sm),this.currentAnimation.stop()),this.completeAnimation()}applyTransformsToTarget(){const s=this.getLead();let{targetWithTransforms:o,target:l,layout:c,latestValues:d}=s;if(!(!o||!l||!c)){if(this!==s&&this.layout&&c&&Iv(this.options.animationType,this.layout.layoutBox,c.layoutBox)){l=this.target||ie();const f=Le(this.layout.layoutBox.x);l.x.min=s.target.x.min,l.x.max=l.x.min+f;const m=Le(this.layout.layoutBox.y);l.y.min=s.target.y.min,l.y.max=l.y.min+m}Be(o,l),Zn(o,d),tr(this.projectionDeltaWithTransform,this.layoutCorrected,o,d)}}registerSharedNode(s,o){this.sharedNodes.has(s)||this.sharedNodes.set(s,new Lk),this.sharedNodes.get(s).add(o);const c=o.options.initialPromotionConfig;o.promote({transition:c?c.transition:void 0,preserveFollowOpacity:c&&c.shouldPreserveFollowOpacity?c.shouldPreserveFollowOpacity(o):void 0})}isLead(){const s=this.getStack();return s?s.lead===this:!0}getLead(){var s;const{layoutId:o}=this.options;return o?((s=this.getStack())===null||s===void 0?void 0:s.lead)||this:this}getPrevLead(){var s;const{layoutId:o}=this.options;return o?(s=this.getStack())===null||s===void 0?void 0:s.prevLead:void 0}getStack(){const{layoutId:s}=this.options;if(s)return this.root.sharedNodes.get(s)}promote({needsReset:s,transition:o,preserveFollowOpacity:l}={}){const c=this.getStack();c&&c.promote(this,l),s&&(this.projectionDelta=void 0,this.needsReset=!0),o&&this.setOptions({transition:o})}relegate(){const s=this.getStack();return s?s.relegate(this):!1}resetSkewAndRotation(){const{visualElement:s}=this.options;if(!s)return;let o=!1;const{latestValues:l}=s;if((l.z||l.rotate||l.rotateX||l.rotateY||l.rotateZ||l.skewX||l.skewY)&&(o=!0),!o)return;const c={};l.z&&To("z",s,c,this.animationValues);for(let d=0;d<So.length;d++)To(`rotate${So[d]}`,s,c,this.animationValues),To(`skew${So[d]}`,s,c,this.animationValues);s.render();for(const d in c)s.setStaticValue(d,c[d]),this.animationValues&&(this.animationValues[d]=c[d]);s.scheduleRender()}getProjectionStyles(s){var o,l;if(!this.instance||this.isSVG)return;if(!this.isVisible)return _k;const c={visibility:""},d=this.getTransformTemplate();if(this.needsReset)return this.needsReset=!1,c.opacity="",c.pointerEvents=Ta(s==null?void 0:s.pointerEvents)||"",c.transform=d?d(this.latestValues,""):"none",c;const f=this.getLead();if(!this.projectionDelta||!this.layout||!f.target){const v={};return this.options.layoutId&&(v.opacity=this.latestValues.opacity!==void 0?this.latestValues.opacity:1,v.pointerEvents=Ta(s==null?void 0:s.pointerEvents)||""),this.hasProjected&&!fn(this.latestValues)&&(v.transform=d?d({},""):"none",this.hasProjected=!1),v}const m=f.animationValues||f.latestValues;this.applyTransformsToTarget(),c.transform=Fk(this.projectionDeltaWithTransform,this.treeScale,m),d&&(c.transform=d(m,c.transform));const{x,y:w}=this.projectionDelta;c.transformOrigin=`${x.origin*100}% ${w.origin*100}% 0`,f.animationValues?c.opacity=f===this?(l=(o=m.opacity)!==null&&o!==void 0?o:this.latestValues.opacity)!==null&&l!==void 0?l:1:this.preserveOpacity?this.latestValues.opacity:m.opacityExit:c.opacity=f===this?m.opacity!==void 0?m.opacity:"":m.opacityExit!==void 0?m.opacityExit:0;for(const v in ns){if(m[v]===void 0)continue;const{correct:b,applyTo:p}=ns[v],h=c.transform==="none"?m[v]:b(m[v],f);if(p){const y=p.length;for(let C=0;C<y;C++)c[p[C]]=h}else c[v]=h}return this.options.layoutId&&(c.pointerEvents=f===this?Ta(s==null?void 0:s.pointerEvents)||"":"none"),c}clearSnapshot(){this.resumeFrom=this.snapshot=void 0}resetTree(){this.root.nodes.forEach(s=>{var o;return(o=s.currentAnimation)===null||o===void 0?void 0:o.stop()}),this.root.nodes.forEach(om),this.root.sharedNodes.clear()}}}function Vk(e){e.updateLayout()}function Uk(e){var t;const n=((t=e.resumeFrom)===null||t===void 0?void 0:t.snapshot)||e.snapshot;if(e.isLead()&&e.layout&&n&&e.hasListeners("didUpdate")){const{layoutBox:i,measuredBox:r}=e.layout,{animationType:a}=e.options,s=n.source!==e.layout.source;a==="size"?Ve(f=>{const m=s?n.measuredBox[f]:n.layoutBox[f],x=Le(m);m.min=i[f].min,m.max=m.min+x}):Iv(a,n.layoutBox,i)&&Ve(f=>{const m=s?n.measuredBox[f]:n.layoutBox[f],x=Le(i[f]);m.max=m.min+x,e.relativeTarget&&!e.currentAnimation&&(e.isProjectionDirty=!0,e.relativeTarget[f].max=e.relativeTarget[f].min+x)});const o=Yn();tr(o,i,n.layoutBox);const l=Yn();s?tr(l,e.applyTransform(r,!0),n.measuredBox):tr(l,i,n.layoutBox);const c=!jv(o);let d=!1;if(!e.resumeFrom){const f=e.getClosestProjectingParent();if(f&&!f.resumeFrom){const{snapshot:m,layout:x}=f;if(m&&x){const w=ie();nr(w,n.layoutBox,m.layoutBox);const v=ie();nr(v,i,x.layoutBox),Nv(w,v)||(d=!0),f.options.layoutRoot&&(e.relativeTarget=v,e.relativeTargetOrigin=w,e.relativeParent=f)}}}e.notifyListeners("didUpdate",{layout:i,snapshot:n,delta:l,layoutDelta:o,hasLayoutChanged:c,hasRelativeTargetChanged:d})}else if(e.isLead()){const{onExitComplete:i}=e.options;i&&i()}e.options.transition=void 0}function Wk(e){Wi&&mn.totalNodes++,e.parent&&(e.isProjecting()||(e.isProjectionDirty=e.parent.isProjectionDirty),e.isSharedProjectionDirty||(e.isSharedProjectionDirty=!!(e.isProjectionDirty||e.parent.isProjectionDirty||e.parent.isSharedProjectionDirty)),e.isTransformDirty||(e.isTransformDirty=e.parent.isTransformDirty))}function qk(e){e.isProjectionDirty=e.isSharedProjectionDirty=e.isTransformDirty=!1}function $k(e){e.clearSnapshot()}function om(e){e.clearMeasurements()}function Hk(e){e.isLayoutDirty=!1}function Gk(e){const{visualElement:t}=e.options;t&&t.getProps().onBeforeLayoutMeasure&&t.notify("BeforeLayoutMeasure"),e.resetTransform()}function lm(e){e.finishAnimation(),e.targetDelta=e.relativeTarget=e.target=void 0,e.isProjectionDirty=!0}function Kk(e){e.resolveTargetDelta()}function Qk(e){e.calcProjection()}function Yk(e){e.resetSkewAndRotation()}function Xk(e){e.removeLeadSnapshot()}function cm(e,t,n){e.translate=X(t.translate,0,n),e.scale=X(t.scale,1,n),e.origin=t.origin,e.originPoint=t.originPoint}function um(e,t,n,i){e.min=X(t.min,n.min,i),e.max=X(t.max,n.max,i)}function Zk(e,t,n,i){um(e.x,t.x,n.x,i),um(e.y,t.y,n.y,i)}function Jk(e){return e.animationValues&&e.animationValues.opacityExit!==void 0}const eS={duration:.45,ease:[.4,0,.1,1]},dm=e=>typeof navigator<"u"&&navigator.userAgent&&navigator.userAgent.toLowerCase().includes(e),fm=dm("applewebkit/")&&!dm("chrome/")?Math.round:De;function mm(e){e.min=fm(e.min),e.max=fm(e.max)}function tS(e){mm(e.x),mm(e.y)}function Iv(e,t,n){return e==="position"||e==="preserve-aspect"&&!rk(rm(t),rm(n),.2)}function nS(e){var t;return e!==e.root&&((t=e.scroll)===null||t===void 0?void 0:t.wasRoot)}const iS=Rv({attachResizeListener:(e,t)=>Pr(e,"resize",t),measureScroll:()=>({x:document.documentElement.scrollLeft||document.body.scrollLeft,y:document.documentElement.scrollTop||document.body.scrollTop}),checkIsScrollRoot:()=>!0}),Po={current:void 0},Dv=Rv({measureScroll:e=>({x:e.scrollLeft,y:e.scrollTop}),defaultParent:()=>{if(!Po.current){const e=new iS({});e.mount(window),e.setOptions({layoutScroll:!0}),Po.current=e}return Po.current},resetTransform:(e,t)=>{e.style.transform=t!==void 0?t:"none"},checkIsScrollRoot:e=>window.getComputedStyle(e).position==="fixed"}),rS={pan:{Feature:wk},drag:{Feature:xk,ProjectionNode:Dv,MeasureLayout:Pv}};function pm(e,t,n){const{props:i}=e;e.animationState&&i.whileHover&&e.animationState.setActive("whileHover",n==="Start");const r="onHover"+n,a=i[r];a&&K.postRender(()=>a(t,_r(t)))}class aS extends sn{mount(){const{current:t}=this.node;t&&(this.unmount=r1(t,n=>(pm(this.node,n,"Start"),i=>pm(this.node,i,"End"))))}unmount(){}}class sS extends sn{constructor(){super(...arguments),this.isActive=!1}onFocus(){let t=!1;try{t=this.node.current.matches(":focus-visible")}catch{t=!0}!t||!this.node.animationState||(this.node.animationState.setActive("whileFocus",!0),this.isActive=!0)}onBlur(){!this.isActive||!this.node.animationState||(this.node.animationState.setActive("whileFocus",!1),this.isActive=!1)}mount(){this.unmount=Fr(Pr(this.node.current,"focus",()=>this.onFocus()),Pr(this.node.current,"blur",()=>this.onBlur()))}unmount(){}}function hm(e,t,n){const{props:i}=e;e.animationState&&i.whileTap&&e.animationState.setActive("whileTap",n==="Start");const r="onTap"+(n==="End"?"":n),a=i[r];a&&K.postRender(()=>a(t,_r(t)))}class oS extends sn{mount(){const{current:t}=this.node;t&&(this.unmount=l1(t,n=>(hm(this.node,n,"Start"),(i,{success:r})=>hm(this.node,i,r?"End":"Cancel")),{useGlobalTarget:this.node.props.globalTapTarget}))}unmount(){}}const Ql=new WeakMap,Eo=new WeakMap,lS=e=>{const t=Ql.get(e.target);t&&t(e)},cS=e=>{e.forEach(lS)};function uS({root:e,...t}){const n=e||document;Eo.has(n)||Eo.set(n,{});const i=Eo.get(n),r=JSON.stringify(t);return i[r]||(i[r]=new IntersectionObserver(cS,{root:e,...t})),i[r]}function dS(e,t,n){const i=uS(t);return Ql.set(e,n),i.observe(e),()=>{Ql.delete(e),i.unobserve(e)}}const fS={some:0,all:1};class mS extends sn{constructor(){super(...arguments),this.hasEnteredView=!1,this.isInView=!1}startObserver(){this.unmount();const{viewport:t={}}=this.node.getProps(),{root:n,margin:i,amount:r="some",once:a}=t,s={root:n?n.current:void 0,rootMargin:i,threshold:typeof r=="number"?r:fS[r]},o=l=>{const{isIntersecting:c}=l;if(this.isInView===c||(this.isInView=c,a&&!c&&this.hasEnteredView))return;c&&(this.hasEnteredView=!0),this.node.animationState&&this.node.animationState.setActive("whileInView",c);const{onViewportEnter:d,onViewportLeave:f}=this.node.getProps(),m=c?d:f;m&&m(l)};return dS(this.node.current,s,o)}mount(){this.startObserver()}update(){if(typeof IntersectionObserver>"u")return;const{props:t,prevProps:n}=this.node;["amount","margin","root"].some(pS(t,n))&&this.startObserver()}unmount(){}}function pS({viewport:e={}},{viewport:t={}}={}){return n=>e[n]!==t[n]}const hS={inView:{Feature:mS},tap:{Feature:oS},focus:{Feature:sS},hover:{Feature:aS}},gS={layout:{ProjectionNode:Dv,MeasureLayout:Pv}},Yl={current:null},zv={current:!1};function vS(){if(zv.current=!0,!!iu)if(window.matchMedia){const e=window.matchMedia("(prefers-reduced-motion)"),t=()=>Yl.current=e.matches;e.addListener(t),t()}else Yl.current=!1}const yS=[...sv,ye,en],xS=e=>yS.find(av(e)),gm=new WeakMap;function wS(e,t,n){for(const i in t){const r=t[i],a=n[i];if(we(r))e.addValue(i,r);else if(we(a))e.addValue(i,Sr(r,{owner:e}));else if(a!==r)if(e.hasValue(i)){const s=e.getValue(i);s.liveStyle===!0?s.jump(r):s.hasAnimated||s.set(r)}else{const s=e.getStaticValue(i);e.addValue(i,Sr(s!==void 0?s:r,{owner:e}))}}for(const i in n)t[i]===void 0&&e.removeValue(i);return t}const vm=["AnimationStart","AnimationComplete","Update","BeforeLayoutMeasure","LayoutMeasure","LayoutAnimationStart","LayoutAnimationComplete"];class bS{scrapeMotionValuesFromProps(t,n,i){return{}}constructor({parent:t,props:n,presenceContext:i,reducedMotionConfig:r,blockInitialAnimation:a,visualState:s},o={}){this.current=null,this.children=new Set,this.isVariantNode=!1,this.isControllingVariants=!1,this.shouldReduceMotion=null,this.values=new Map,this.KeyframeResolver=Nu,this.features={},this.valueSubscriptions=new Map,this.prevMotionValues={},this.events={},this.propEventSubscriptions={},this.notifyUpdate=()=>this.notify("Update",this.latestValues),this.render=()=>{this.current&&(this.triggerBuild(),this.renderInstance(this.current,this.renderState,this.props.style,this.projection))},this.renderScheduledAt=0,this.scheduleRender=()=>{const x=ft.now();this.renderScheduledAt<x&&(this.renderScheduledAt=x,K.render(this.render,!1,!0))};const{latestValues:l,renderState:c,onUpdate:d}=s;this.onUpdate=d,this.latestValues=l,this.baseTarget={...l},this.initialValues=n.initial?{...l}:{},this.renderState=c,this.parent=t,this.props=n,this.presenceContext=i,this.depth=t?t.depth+1:0,this.reducedMotionConfig=r,this.options=o,this.blockInitialAnimation=!!a,this.isControllingVariants=Is(n),this.isVariantNode=pg(n),this.isVariantNode&&(this.variantChildren=new Set),this.manuallyAnimateOnMount=!!(t&&t.current);const{willChange:f,...m}=this.scrapeMotionValuesFromProps(n,{},this);for(const x in m){const w=m[x];l[x]!==void 0&&we(w)&&w.set(l[x],!1)}}mount(t){this.current=t,gm.set(t,this),this.projection&&!this.projection.instance&&this.projection.mount(t),this.parent&&this.isVariantNode&&!this.isControllingVariants&&(this.removeFromVariantTree=this.parent.addVariantChild(this)),this.values.forEach((n,i)=>this.bindToMotionValue(i,n)),zv.current||vS(),this.shouldReduceMotion=this.reducedMotionConfig==="never"?!1:this.reducedMotionConfig==="always"?!0:Yl.current,this.parent&&this.parent.children.add(this),this.update(this.props,this.presenceContext)}unmount(){gm.delete(this.current),this.projection&&this.projection.unmount(),Jt(this.notifyUpdate),Jt(this.render),this.valueSubscriptions.forEach(t=>t()),this.valueSubscriptions.clear(),this.removeFromVariantTree&&this.removeFromVariantTree(),this.parent&&this.parent.children.delete(this);for(const t in this.events)this.events[t].clear();for(const t in this.features){const n=this.features[t];n&&(n.unmount(),n.isMounted=!1)}this.current=null}bindToMotionValue(t,n){this.valueSubscriptions.has(t)&&this.valueSubscriptions.get(t)();const i=Nn.has(t),r=n.on("change",o=>{this.latestValues[t]=o,this.props.onUpdate&&K.preRender(this.notifyUpdate),i&&this.projection&&(this.projection.isTransformDirty=!0)}),a=n.on("renderRequest",this.scheduleRender);let s;window.MotionCheckAppearSync&&(s=window.MotionCheckAppearSync(this,t,n)),this.valueSubscriptions.set(t,()=>{r(),a(),s&&s(),n.owner&&n.stop()})}sortNodePosition(t){return!this.current||!this.sortInstanceNodePosition||this.type!==t.type?0:this.sortInstanceNodePosition(this.current,t.current)}updateFeatures(){let t="animation";for(t in gi){const n=gi[t];if(!n)continue;const{isEnabled:i,Feature:r}=n;if(!this.features[t]&&r&&i(this.props)&&(this.features[t]=new r(this)),this.features[t]){const a=this.features[t];a.isMounted?a.update():(a.mount(),a.isMounted=!0)}}}triggerBuild(){this.build(this.renderState,this.latestValues,this.props)}measureViewportBox(){return this.current?this.measureInstanceViewportBox(this.current,this.props):ie()}getStaticValue(t){return this.latestValues[t]}setStaticValue(t,n){this.latestValues[t]=n}update(t,n){(t.transformTemplate||this.props.transformTemplate)&&this.scheduleRender(),this.prevProps=this.props,this.props=t,this.prevPresenceContext=this.presenceContext,this.presenceContext=n;for(let i=0;i<vm.length;i++){const r=vm[i];this.propEventSubscriptions[r]&&(this.propEventSubscriptions[r](),delete this.propEventSubscriptions[r]);const a="on"+r,s=t[a];s&&(this.propEventSubscriptions[r]=this.on(r,s))}this.prevMotionValues=wS(this,this.scrapeMotionValuesFromProps(t,this.prevProps,this),this.prevMotionValues),this.handleChildMotionValue&&this.handleChildMotionValue(),this.onUpdate&&this.onUpdate(this)}getProps(){return this.props}getVariant(t){return this.props.variants?this.props.variants[t]:void 0}getDefaultTransition(){return this.props.transition}getTransformPagePoint(){return this.props.transformPagePoint}getClosestVariantNode(){return this.isVariantNode?this:this.parent?this.parent.getClosestVariantNode():void 0}addVariantChild(t){const n=this.getClosestVariantNode();if(n)return n.variantChildren&&n.variantChildren.add(t),()=>n.variantChildren.delete(t)}addValue(t,n){const i=this.values.get(t);n!==i&&(i&&this.removeValue(t),this.bindToMotionValue(t,n),this.values.set(t,n),this.latestValues[t]=n.get())}removeValue(t){this.values.delete(t);const n=this.valueSubscriptions.get(t);n&&(n(),this.valueSubscriptions.delete(t)),delete this.latestValues[t],this.removeValueFromRenderState(t,this.renderState)}hasValue(t){return this.values.has(t)}getValue(t,n){if(this.props.values&&this.props.values[t])return this.props.values[t];let i=this.values.get(t);return i===void 0&&n!==void 0&&(i=Sr(n===null?void 0:n,{owner:this}),this.addValue(t,i)),i}readValue(t,n){var i;let r=this.latestValues[t]!==void 0||!this.current?this.latestValues[t]:(i=this.getBaseTargetFromProps(this.props,t))!==null&&i!==void 0?i:this.readValueFromInstance(this.current,t,this.options);return r!=null&&(typeof r=="string"&&(iv(r)||Kg(r))?r=parseFloat(r):!xS(r)&&en.test(n)&&(r=ev(t,n)),this.setBaseTarget(t,we(r)?r.get():r)),we(r)?r.get():r}setBaseTarget(t,n){this.baseTarget[t]=n}getBaseTarget(t){var n;const{initial:i}=this.props;let r;if(typeof i=="string"||typeof i=="object"){const s=uu(this.props,i,(n=this.presenceContext)===null||n===void 0?void 0:n.custom);s&&(r=s[t])}if(i&&r!==void 0)return r;const a=this.getBaseTargetFromProps(this.props,t);return a!==void 0&&!we(a)?a:this.initialValues[t]!==void 0&&r===void 0?void 0:this.baseTarget[t]}on(t,n){return this.events[t]||(this.events[t]=new Su),this.events[t].add(n)}notify(t,...n){this.events[t]&&this.events[t].notify(...n)}}class Ov extends bS{constructor(){super(...arguments),this.KeyframeResolver=ov}sortInstanceNodePosition(t,n){return t.compareDocumentPosition(n)&2?1:-1}getBaseTargetFromProps(t,n){return t.style?t.style[n]:void 0}removeValueFromRenderState(t,{vars:n,style:i}){delete n[t],delete i[t]}handleChildMotionValue(){this.childSubscription&&(this.childSubscription(),delete this.childSubscription);const{children:t}=this.props;we(t)&&(this.childSubscription=t.on("change",n=>{this.current&&(this.current.textContent=`${n}`)}))}}function CS(e){return window.getComputedStyle(e)}class kS extends Ov{constructor(){super(...arguments),this.type="html",this.renderInstance=kg}readValueFromInstance(t,n){if(Nn.has(n)){const i=ju(n);return i&&i.default||0}else{const i=CS(t),r=(wg(n)?i.getPropertyValue(n):i[n])||0;return typeof r=="string"?r.trim():r}}measureInstanceViewportBox(t,{transformPagePoint:n}){return Sv(t,n)}build(t,n,i){mu(t,n,i.transformTemplate)}scrapeMotionValuesFromProps(t,n,i){return vu(t,n,i)}}class SS extends Ov{constructor(){super(...arguments),this.type="svg",this.isSVGTag=!1,this.measureInstanceViewportBox=ie}getBaseTargetFromProps(t,n){return t[n]}readValueFromInstance(t,n){if(Nn.has(n)){const i=ju(n);return i&&i.default||0}return n=Sg.has(n)?n:ou(n),t.getAttribute(n)}scrapeMotionValuesFromProps(t,n,i){return Eg(t,n,i)}build(t,n,i){pu(t,n,this.isSVGTag,i.transformTemplate)}renderInstance(t,n,i,r){Tg(t,n,i,r)}mount(t){this.isSVGTag=gu(t.tagName),super.mount(t)}}const TS=(e,t)=>cu(e)?new SS(t):new kS(t,{allowProjection:e!==g.Fragment}),PS=Xb({...QC,...hS,...rS,...gS},TS),I=fb(PS);/**
 * @license lucide-react v0.446.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const ES=e=>e.replace(/([a-z0-9])([A-Z])/g,"$1-$2").toLowerCase(),Lv=(...e)=>e.filter((t,n,i)=>!!t&&i.indexOf(t)===n).join(" ");/**
 * @license lucide-react v0.446.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */var AS={xmlns:"http://www.w3.org/2000/svg",width:24,height:24,viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:2,strokeLinecap:"round",strokeLinejoin:"round"};/**
 * @license lucide-react v0.446.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const jS=g.forwardRef(({color:e="currentColor",size:t=24,strokeWidth:n=2,absoluteStrokeWidth:i,className:r="",children:a,iconNode:s,...o},l)=>g.createElement("svg",{ref:l,...AS,width:t,height:t,stroke:e,strokeWidth:i?Number(n)*24/Number(t):n,className:Lv("lucide",r),...o},[...s.map(([c,d])=>g.createElement(c,d)),...Array.isArray(a)?a:[a]]));/**
 * @license lucide-react v0.446.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const B=(e,t)=>{const n=g.forwardRef(({className:i,...r},a)=>g.createElement(jS,{ref:a,iconNode:t,className:Lv(`lucide-${ES(e)}`,i),...r}));return n.displayName=`${e}`,n};/**
 * @license lucide-react v0.446.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Ao=B("ArrowLeft",[["path",{d:"m12 19-7-7 7-7",key:"1l729n"}],["path",{d:"M19 12H5",key:"x3x0zl"}]]);/**
 * @license lucide-react v0.446.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Er=B("ArrowRight",[["path",{d:"M5 12h14",key:"1ays0h"}],["path",{d:"m12 5 7 7-7 7",key:"xquz4c"}]]);/**
 * @license lucide-react v0.446.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const NS=B("Award",[["path",{d:"m15.477 12.89 1.515 8.526a.5.5 0 0 1-.81.47l-3.58-2.687a1 1 0 0 0-1.197 0l-3.586 2.686a.5.5 0 0 1-.81-.469l1.514-8.526",key:"1yiouv"}],["circle",{cx:"12",cy:"8",r:"6",key:"1vp47v"}]]);/**
 * @license lucide-react v0.446.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const MS=B("BookOpen",[["path",{d:"M12 7v14",key:"1akyts"}],["path",{d:"M3 18a1 1 0 0 1-1-1V4a1 1 0 0 1 1-1h5a4 4 0 0 1 4 4 4 4 0 0 1 4-4h5a1 1 0 0 1 1 1v13a1 1 0 0 1-1 1h-6a3 3 0 0 0-3 3 3 3 0 0 0-3-3z",key:"ruj8y"}]]);/**
 * @license lucide-react v0.446.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const RS=B("Bookmark",[["path",{d:"m19 21-7-4-7 4V5a2 2 0 0 1 2-2h10a2 2 0 0 1 2 2v16z",key:"1fy3hk"}]]);/**
 * @license lucide-react v0.446.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const IS=B("Brain",[["path",{d:"M12 5a3 3 0 1 0-5.997.125 4 4 0 0 0-2.526 5.77 4 4 0 0 0 .556 6.588A4 4 0 1 0 12 18Z",key:"l5xja"}],["path",{d:"M12 5a3 3 0 1 1 5.997.125 4 4 0 0 1 2.526 5.77 4 4 0 0 1-.556 6.588A4 4 0 1 1 12 18Z",key:"ep3f8r"}],["path",{d:"M15 13a4.5 4.5 0 0 1-3-4 4.5 4.5 0 0 1-3 4",key:"1p4c4q"}],["path",{d:"M17.599 6.5a3 3 0 0 0 .399-1.375",key:"tmeiqw"}],["path",{d:"M6.003 5.125A3 3 0 0 0 6.401 6.5",key:"105sqy"}],["path",{d:"M3.477 10.896a4 4 0 0 1 .585-.396",key:"ql3yin"}],["path",{d:"M19.938 10.5a4 4 0 0 1 .585.396",key:"1qfode"}],["path",{d:"M6 18a4 4 0 0 1-1.967-.516",key:"2e4loj"}],["path",{d:"M19.967 17.484A4 4 0 0 1 18 18",key:"159ez6"}]]);/**
 * @license lucide-react v0.446.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const DS=B("Briefcase",[["path",{d:"M16 20V4a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v16",key:"jecpp"}],["rect",{width:"20",height:"14",x:"2",y:"6",rx:"2",key:"i6l2r4"}]]);/**
 * @license lucide-react v0.446.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const zS=B("Calculator",[["rect",{width:"16",height:"20",x:"4",y:"2",rx:"2",key:"1nb95v"}],["line",{x1:"8",x2:"16",y1:"6",y2:"6",key:"x4nwl0"}],["line",{x1:"16",x2:"16",y1:"14",y2:"18",key:"wjye3r"}],["path",{d:"M16 10h.01",key:"1m94wz"}],["path",{d:"M12 10h.01",key:"1nrarc"}],["path",{d:"M8 10h.01",key:"19clt8"}],["path",{d:"M12 14h.01",key:"1etili"}],["path",{d:"M8 14h.01",key:"6423bh"}],["path",{d:"M12 18h.01",key:"mhygvu"}],["path",{d:"M8 18h.01",key:"lrp35t"}]]);/**
 * @license lucide-react v0.446.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const ls=B("Calendar",[["path",{d:"M8 2v4",key:"1cmpym"}],["path",{d:"M16 2v4",key:"4m81vk"}],["rect",{width:"18",height:"18",x:"3",y:"4",rx:"2",key:"1hopcy"}],["path",{d:"M3 10h18",key:"8toen8"}]]);/**
 * @license lucide-react v0.446.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const OS=B("ChartColumn",[["path",{d:"M3 3v16a2 2 0 0 0 2 2h16",key:"c24i48"}],["path",{d:"M18 17V9",key:"2bz60n"}],["path",{d:"M13 17V5",key:"1frdt8"}],["path",{d:"M8 17v-3",key:"17ska0"}]]);/**
 * @license lucide-react v0.446.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const LS=B("ChartPie",[["path",{d:"M21 12c.552 0 1.005-.449.95-.998a10 10 0 0 0-8.953-8.951c-.55-.055-.998.398-.998.95v8a1 1 0 0 0 1 1z",key:"pzmjnu"}],["path",{d:"M21.21 15.89A10 10 0 1 1 8 2.83",key:"k2fpak"}]]);/**
 * @license lucide-react v0.446.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const FS=B("Check",[["path",{d:"M20 6 9 17l-5-5",key:"1gmf2c"}]]);/**
 * @license lucide-react v0.446.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const _S=B("ChevronDown",[["path",{d:"m6 9 6 6 6-6",key:"qrunsl"}]]);/**
 * @license lucide-react v0.446.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Xl=B("Clock",[["circle",{cx:"12",cy:"12",r:"10",key:"1mglay"}],["polyline",{points:"12 6 12 12 16 14",key:"68esgv"}]]);/**
 * @license lucide-react v0.446.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const BS=B("ExternalLink",[["path",{d:"M15 3h6v6",key:"1q9fwt"}],["path",{d:"M10 14 21 3",key:"gplh6r"}],["path",{d:"M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6",key:"a6xqqp"}]]);/**
 * @license lucide-react v0.446.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const VS=B("Filter",[["polygon",{points:"22 3 2 3 10 12.46 10 19 14 21 14 12.46 22 3",key:"1yg77f"}]]);/**
 * @license lucide-react v0.446.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const US=B("FolderOpen",[["path",{d:"m6 14 1.5-2.9A2 2 0 0 1 9.24 10H20a2 2 0 0 1 1.94 2.5l-1.54 6a2 2 0 0 1-1.95 1.5H4a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h3.9a2 2 0 0 1 1.69.9l.81 1.2a2 2 0 0 0 1.67.9H18a2 2 0 0 1 2 2v2",key:"usdka0"}]]);/**
 * @license lucide-react v0.446.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const WS=B("Instagram",[["rect",{width:"20",height:"20",x:"2",y:"2",rx:"5",ry:"5",key:"2e1cvw"}],["path",{d:"M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z",key:"9exkf1"}],["line",{x1:"17.5",x2:"17.51",y1:"6.5",y2:"6.5",key:"r4j83e"}]]);/**
 * @license lucide-react v0.446.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const qS=B("Linkedin",[["path",{d:"M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z",key:"c2jq9f"}],["rect",{width:"4",height:"12",x:"2",y:"9",key:"mk3on5"}],["circle",{cx:"4",cy:"4",r:"2",key:"bt5ra8"}]]);/**
 * @license lucide-react v0.446.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Fv=B("Mail",[["rect",{width:"20",height:"16",x:"2",y:"4",rx:"2",key:"18n3k1"}],["path",{d:"m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7",key:"1ocrg3"}]]);/**
 * @license lucide-react v0.446.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const $S=B("Menu",[["line",{x1:"4",x2:"20",y1:"12",y2:"12",key:"1e0a9i"}],["line",{x1:"4",x2:"20",y1:"6",y2:"6",key:"1owob3"}],["line",{x1:"4",x2:"20",y1:"18",y2:"18",key:"yk5zj1"}]]);/**
 * @license lucide-react v0.446.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const HS=B("Phone",[["path",{d:"M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z",key:"foiqr5"}]]);/**
 * @license lucide-react v0.446.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const GS=B("Play",[["polygon",{points:"6 3 20 12 6 21 6 3",key:"1oa8hb"}]]);/**
 * @license lucide-react v0.446.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const KS=B("Quote",[["path",{d:"M16 3a2 2 0 0 0-2 2v6a2 2 0 0 0 2 2 1 1 0 0 1 1 1v1a2 2 0 0 1-2 2 1 1 0 0 0-1 1v2a1 1 0 0 0 1 1 6 6 0 0 0 6-6V5a2 2 0 0 0-2-2z",key:"rib7q0"}],["path",{d:"M5 3a2 2 0 0 0-2 2v6a2 2 0 0 0 2 2 1 1 0 0 1 1 1v1a2 2 0 0 1-2 2 1 1 0 0 0-1 1v2a1 1 0 0 0 1 1 6 6 0 0 0 6-6V5a2 2 0 0 0-2-2z",key:"1ymkrd"}]]);/**
 * @license lucide-react v0.446.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const QS=B("RefreshCw",[["path",{d:"M3 12a9 9 0 0 1 9-9 9.75 9.75 0 0 1 6.74 2.74L21 8",key:"v9h5vc"}],["path",{d:"M21 3v5h-5",key:"1q7to0"}],["path",{d:"M21 12a9 9 0 0 1-9 9 9.75 9.75 0 0 1-6.74-2.74L3 16",key:"3uifl3"}],["path",{d:"M8 16H3v5",key:"1cv678"}]]);/**
 * @license lucide-react v0.446.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const YS=B("Share2",[["circle",{cx:"18",cy:"5",r:"3",key:"gq8acd"}],["circle",{cx:"6",cy:"12",r:"3",key:"w7nqdw"}],["circle",{cx:"18",cy:"19",r:"3",key:"1xt0gg"}],["line",{x1:"8.59",x2:"15.42",y1:"13.51",y2:"17.49",key:"47mynk"}],["line",{x1:"15.41",x2:"8.59",y1:"6.51",y2:"10.49",key:"1n3mei"}]]);/**
 * @license lucide-react v0.446.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const XS=B("ShoppingCart",[["circle",{cx:"8",cy:"21",r:"1",key:"jimo8o"}],["circle",{cx:"19",cy:"21",r:"1",key:"13723u"}],["path",{d:"M2.05 2.05h2l2.66 12.42a2 2 0 0 0 2 1.58h9.78a2 2 0 0 0 1.95-1.57l1.65-7.43H5.12",key:"9zh506"}]]);/**
 * @license lucide-react v0.446.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const ZS=B("Target",[["circle",{cx:"12",cy:"12",r:"10",key:"1mglay"}],["circle",{cx:"12",cy:"12",r:"6",key:"1vlfrh"}],["circle",{cx:"12",cy:"12",r:"2",key:"1c9p78"}]]);/**
 * @license lucide-react v0.446.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const _v=B("TrendingUp",[["polyline",{points:"22 7 13.5 15.5 8.5 10.5 2 17",key:"126l90"}],["polyline",{points:"16 7 22 7 22 13",key:"kwv8wd"}]]);/**
 * @license lucide-react v0.446.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Zl=B("User",[["path",{d:"M19 21v-2a4 4 0 0 0-4-4H9a4 4 0 0 0-4 4v2",key:"975kel"}],["circle",{cx:"12",cy:"7",r:"4",key:"17ys0d"}]]);/**
 * @license lucide-react v0.446.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Bv=B("Users",[["path",{d:"M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2",key:"1yyitq"}],["circle",{cx:"9",cy:"7",r:"4",key:"nufk8"}],["path",{d:"M22 21v-2a4 4 0 0 0-3-3.87",key:"kshegd"}],["path",{d:"M16 3.13a4 4 0 0 1 0 7.75",key:"1da9ce"}]]);/**
 * @license lucide-react v0.446.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Vv=B("X",[["path",{d:"M18 6 6 18",key:"1bl5f8"}],["path",{d:"m6 6 12 12",key:"d8bk6v"}]]);/**
 * @license lucide-react v0.446.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const JS=B("Zap",[["path",{d:"M4 14a1 1 0 0 1-.78-1.63l9.9-10.2a.5.5 0 0 1 .86.46l-1.92 6.02A1 1 0 0 0 13 10h7a1 1 0 0 1 .78 1.63l-9.9 10.2a.5.5 0 0 1-.86-.46l1.92-6.02A1 1 0 0 0 11 14z",key:"1xq2db"}]]);function ym(e,t){if(typeof e=="function")return e(t);e!=null&&(e.current=t)}function Os(...e){return t=>{let n=!1;const i=e.map(r=>{const a=ym(r,t);return!n&&typeof a=="function"&&(n=!0),a});if(n)return()=>{for(let r=0;r<i.length;r++){const a=i[r];typeof a=="function"?a():ym(e[r],null)}}}}function Mn(...e){return g.useCallback(Os(...e),e)}var eT=Symbol.for("react.lazy"),cs=ms[" use ".trim().toString()];function tT(e){return typeof e=="object"&&e!==null&&"then"in e}function Uv(e){return e!=null&&typeof e=="object"&&"$$typeof"in e&&e.$$typeof===eT&&"_payload"in e&&tT(e._payload)}function nT(e){const t=rT(e),n=g.forwardRef((i,r)=>{let{children:a,...s}=i;Uv(a)&&typeof cs=="function"&&(a=cs(a._payload));const o=g.Children.toArray(a),l=o.find(sT);if(l){const c=l.props.children,d=o.map(f=>f===l?g.Children.count(c)>1?g.Children.only(null):g.isValidElement(c)?c.props.children:null:f);return u.jsx(t,{...s,ref:r,children:g.isValidElement(c)?g.cloneElement(c,void 0,d):null})}return u.jsx(t,{...s,ref:r,children:a})});return n.displayName=`${e}.Slot`,n}var iT=nT("Slot");function rT(e){const t=g.forwardRef((n,i)=>{let{children:r,...a}=n;if(Uv(r)&&typeof cs=="function"&&(r=cs(r._payload)),g.isValidElement(r)){const s=lT(r),o=oT(a,r.props);return r.type!==g.Fragment&&(o.ref=i?Os(i,s):s),g.cloneElement(r,o)}return g.Children.count(r)>1?g.Children.only(null):null});return t.displayName=`${e}.SlotClone`,t}var aT=Symbol("radix.slottable");function sT(e){return g.isValidElement(e)&&typeof e.type=="function"&&"__radixId"in e.type&&e.type.__radixId===aT}function oT(e,t){const n={...t};for(const i in t){const r=e[i],a=t[i];/^on[A-Z]/.test(i)?r&&a?n[i]=(...o)=>{const l=a(...o);return r(...o),l}:r&&(n[i]=r):i==="style"?n[i]={...r,...a}:i==="className"&&(n[i]=[r,a].filter(Boolean).join(" "))}return{...e,...n}}function lT(e){var i,r;let t=(i=Object.getOwnPropertyDescriptor(e.props,"ref"))==null?void 0:i.get,n=t&&"isReactWarning"in t&&t.isReactWarning;return n?e.ref:(t=(r=Object.getOwnPropertyDescriptor(e,"ref"))==null?void 0:r.get,n=t&&"isReactWarning"in t&&t.isReactWarning,n?e.props.ref:e.props.ref||e.ref)}function Wv(e){var t,n,i="";if(typeof e=="string"||typeof e=="number")i+=e;else if(typeof e=="object")if(Array.isArray(e)){var r=e.length;for(t=0;t<r;t++)e[t]&&(n=Wv(e[t]))&&(i&&(i+=" "),i+=n)}else for(n in e)e[n]&&(i&&(i+=" "),i+=n);return i}function qv(){for(var e,t,n=0,i="",r=arguments.length;n<r;n++)(e=arguments[n])&&(t=Wv(e))&&(i&&(i+=" "),i+=t);return i}const xm=e=>typeof e=="boolean"?`${e}`:e===0?"0":e,wm=qv,cT=(e,t)=>n=>{var i;if((t==null?void 0:t.variants)==null)return wm(e,n==null?void 0:n.class,n==null?void 0:n.className);const{variants:r,defaultVariants:a}=t,s=Object.keys(r).map(c=>{const d=n==null?void 0:n[c],f=a==null?void 0:a[c];if(d===null)return null;const m=xm(d)||xm(f);return r[c][m]}),o=n&&Object.entries(n).reduce((c,d)=>{let[f,m]=d;return m===void 0||(c[f]=m),c},{}),l=t==null||(i=t.compoundVariants)===null||i===void 0?void 0:i.reduce((c,d)=>{let{class:f,className:m,...x}=d;return Object.entries(x).every(w=>{let[v,b]=w;return Array.isArray(b)?b.includes({...a,...o}[v]):{...a,...o}[v]===b})?[...c,f,m]:c},[]);return wm(e,s,l,n==null?void 0:n.class,n==null?void 0:n.className)},Du="-",uT=e=>{const t=fT(e),{conflictingClassGroups:n,conflictingClassGroupModifiers:i}=e;return{getClassGroupId:s=>{const o=s.split(Du);return o[0]===""&&o.length!==1&&o.shift(),$v(o,t)||dT(s)},getConflictingClassGroupIds:(s,o)=>{const l=n[s]||[];return o&&i[s]?[...l,...i[s]]:l}}},$v=(e,t)=>{var s;if(e.length===0)return t.classGroupId;const n=e[0],i=t.nextPart.get(n),r=i?$v(e.slice(1),i):void 0;if(r)return r;if(t.validators.length===0)return;const a=e.join(Du);return(s=t.validators.find(({validator:o})=>o(a)))==null?void 0:s.classGroupId},bm=/^\[(.+)\]$/,dT=e=>{if(bm.test(e)){const t=bm.exec(e)[1],n=t==null?void 0:t.substring(0,t.indexOf(":"));if(n)return"arbitrary.."+n}},fT=e=>{const{theme:t,prefix:n}=e,i={nextPart:new Map,validators:[]};return pT(Object.entries(e.classGroups),n).forEach(([a,s])=>{Jl(s,i,a,t)}),i},Jl=(e,t,n,i)=>{e.forEach(r=>{if(typeof r=="string"){const a=r===""?t:Cm(t,r);a.classGroupId=n;return}if(typeof r=="function"){if(mT(r)){Jl(r(i),t,n,i);return}t.validators.push({validator:r,classGroupId:n});return}Object.entries(r).forEach(([a,s])=>{Jl(s,Cm(t,a),n,i)})})},Cm=(e,t)=>{let n=e;return t.split(Du).forEach(i=>{n.nextPart.has(i)||n.nextPart.set(i,{nextPart:new Map,validators:[]}),n=n.nextPart.get(i)}),n},mT=e=>e.isThemeGetter,pT=(e,t)=>t?e.map(([n,i])=>{const r=i.map(a=>typeof a=="string"?t+a:typeof a=="object"?Object.fromEntries(Object.entries(a).map(([s,o])=>[t+s,o])):a);return[n,r]}):e,hT=e=>{if(e<1)return{get:()=>{},set:()=>{}};let t=0,n=new Map,i=new Map;const r=(a,s)=>{n.set(a,s),t++,t>e&&(t=0,i=n,n=new Map)};return{get(a){let s=n.get(a);if(s!==void 0)return s;if((s=i.get(a))!==void 0)return r(a,s),s},set(a,s){n.has(a)?n.set(a,s):r(a,s)}}},Hv="!",gT=e=>{const{separator:t,experimentalParseClassName:n}=e,i=t.length===1,r=t[0],a=t.length,s=o=>{const l=[];let c=0,d=0,f;for(let b=0;b<o.length;b++){let p=o[b];if(c===0){if(p===r&&(i||o.slice(b,b+a)===t)){l.push(o.slice(d,b)),d=b+a;continue}if(p==="/"){f=b;continue}}p==="["?c++:p==="]"&&c--}const m=l.length===0?o:o.substring(d),x=m.startsWith(Hv),w=x?m.substring(1):m,v=f&&f>d?f-d:void 0;return{modifiers:l,hasImportantModifier:x,baseClassName:w,maybePostfixModifierPosition:v}};return n?o=>n({className:o,parseClassName:s}):s},vT=e=>{if(e.length<=1)return e;const t=[];let n=[];return e.forEach(i=>{i[0]==="["?(t.push(...n.sort(),i),n=[]):n.push(i)}),t.push(...n.sort()),t},yT=e=>({cache:hT(e.cacheSize),parseClassName:gT(e),...uT(e)}),xT=/\s+/,wT=(e,t)=>{const{parseClassName:n,getClassGroupId:i,getConflictingClassGroupIds:r}=t,a=[],s=e.trim().split(xT);let o="";for(let l=s.length-1;l>=0;l-=1){const c=s[l],{modifiers:d,hasImportantModifier:f,baseClassName:m,maybePostfixModifierPosition:x}=n(c);let w=!!x,v=i(w?m.substring(0,x):m);if(!v){if(!w){o=c+(o.length>0?" "+o:o);continue}if(v=i(m),!v){o=c+(o.length>0?" "+o:o);continue}w=!1}const b=vT(d).join(":"),p=f?b+Hv:b,h=p+v;if(a.includes(h))continue;a.push(h);const y=r(v,w);for(let C=0;C<y.length;++C){const k=y[C];a.push(p+k)}o=c+(o.length>0?" "+o:o)}return o};function bT(){let e=0,t,n,i="";for(;e<arguments.length;)(t=arguments[e++])&&(n=Gv(t))&&(i&&(i+=" "),i+=n);return i}const Gv=e=>{if(typeof e=="string")return e;let t,n="";for(let i=0;i<e.length;i++)e[i]&&(t=Gv(e[i]))&&(n&&(n+=" "),n+=t);return n};function CT(e,...t){let n,i,r,a=s;function s(l){const c=t.reduce((d,f)=>f(d),e());return n=yT(c),i=n.cache.get,r=n.cache.set,a=o,o(l)}function o(l){const c=i(l);if(c)return c;const d=wT(l,n);return r(l,d),d}return function(){return a(bT.apply(null,arguments))}}const $=e=>{const t=n=>n[e]||[];return t.isThemeGetter=!0,t},Kv=/^\[(?:([a-z-]+):)?(.+)\]$/i,kT=/^\d+\/\d+$/,ST=new Set(["px","full","screen"]),TT=/^(\d+(\.\d+)?)?(xs|sm|md|lg|xl)$/,PT=/\d+(%|px|r?em|[sdl]?v([hwib]|min|max)|pt|pc|in|cm|mm|cap|ch|ex|r?lh|cq(w|h|i|b|min|max))|\b(calc|min|max|clamp)\(.+\)|^0$/,ET=/^(rgba?|hsla?|hwb|(ok)?(lab|lch)|color-mix)\(.+\)$/,AT=/^(inset_)?-?((\d+)?\.?(\d+)[a-z]+|0)_-?((\d+)?\.?(\d+)[a-z]+|0)/,jT=/^(url|image|image-set|cross-fade|element|(repeating-)?(linear|radial|conic)-gradient)\(.+\)$/,pt=e=>si(e)||ST.has(e)||kT.test(e),Nt=e=>Si(e,"length",LT),si=e=>!!e&&!Number.isNaN(Number(e)),jo=e=>Si(e,"number",si),zi=e=>!!e&&Number.isInteger(Number(e)),NT=e=>e.endsWith("%")&&si(e.slice(0,-1)),O=e=>Kv.test(e),Mt=e=>TT.test(e),MT=new Set(["length","size","percentage"]),RT=e=>Si(e,MT,Qv),IT=e=>Si(e,"position",Qv),DT=new Set(["image","url"]),zT=e=>Si(e,DT,_T),OT=e=>Si(e,"",FT),Oi=()=>!0,Si=(e,t,n)=>{const i=Kv.exec(e);return i?i[1]?typeof t=="string"?i[1]===t:t.has(i[1]):n(i[2]):!1},LT=e=>PT.test(e)&&!ET.test(e),Qv=()=>!1,FT=e=>AT.test(e),_T=e=>jT.test(e),BT=()=>{const e=$("colors"),t=$("spacing"),n=$("blur"),i=$("brightness"),r=$("borderColor"),a=$("borderRadius"),s=$("borderSpacing"),o=$("borderWidth"),l=$("contrast"),c=$("grayscale"),d=$("hueRotate"),f=$("invert"),m=$("gap"),x=$("gradientColorStops"),w=$("gradientColorStopPositions"),v=$("inset"),b=$("margin"),p=$("opacity"),h=$("padding"),y=$("saturate"),C=$("scale"),k=$("sepia"),P=$("skew"),S=$("space"),T=$("translate"),D=()=>["auto","contain","none"],N=()=>["auto","hidden","clip","visible","scroll"],W=()=>["auto",O,t],F=()=>[O,t],it=()=>["",pt,Nt],rt=()=>["auto",si,O],Ti=()=>["bottom","center","left","left-bottom","left-top","right","right-bottom","right-top","top"],mt=()=>["solid","dashed","dotted","double","none"],ee=()=>["normal","multiply","screen","overlay","darken","lighten","color-dodge","color-burn","hard-light","soft-light","difference","exclusion","hue","saturation","color","luminosity"],A=()=>["start","end","center","between","around","evenly","stretch"],M=()=>["","0",O],z=()=>["auto","avoid","all","avoid-page","page","left","right","column"],V=()=>[si,O];return{cacheSize:500,separator:":",theme:{colors:[Oi],spacing:[pt,Nt],blur:["none","",Mt,O],brightness:V(),borderColor:[e],borderRadius:["none","","full",Mt,O],borderSpacing:F(),borderWidth:it(),contrast:V(),grayscale:M(),hueRotate:V(),invert:M(),gap:F(),gradientColorStops:[e],gradientColorStopPositions:[NT,Nt],inset:W(),margin:W(),opacity:V(),padding:F(),saturate:V(),scale:V(),sepia:M(),skew:V(),space:F(),translate:F()},classGroups:{aspect:[{aspect:["auto","square","video",O]}],container:["container"],columns:[{columns:[Mt]}],"break-after":[{"break-after":z()}],"break-before":[{"break-before":z()}],"break-inside":[{"break-inside":["auto","avoid","avoid-page","avoid-column"]}],"box-decoration":[{"box-decoration":["slice","clone"]}],box:[{box:["border","content"]}],display:["block","inline-block","inline","flex","inline-flex","table","inline-table","table-caption","table-cell","table-column","table-column-group","table-footer-group","table-header-group","table-row-group","table-row","flow-root","grid","inline-grid","contents","list-item","hidden"],float:[{float:["right","left","none","start","end"]}],clear:[{clear:["left","right","both","none","start","end"]}],isolation:["isolate","isolation-auto"],"object-fit":[{object:["contain","cover","fill","none","scale-down"]}],"object-position":[{object:[...Ti(),O]}],overflow:[{overflow:N()}],"overflow-x":[{"overflow-x":N()}],"overflow-y":[{"overflow-y":N()}],overscroll:[{overscroll:D()}],"overscroll-x":[{"overscroll-x":D()}],"overscroll-y":[{"overscroll-y":D()}],position:["static","fixed","absolute","relative","sticky"],inset:[{inset:[v]}],"inset-x":[{"inset-x":[v]}],"inset-y":[{"inset-y":[v]}],start:[{start:[v]}],end:[{end:[v]}],top:[{top:[v]}],right:[{right:[v]}],bottom:[{bottom:[v]}],left:[{left:[v]}],visibility:["visible","invisible","collapse"],z:[{z:["auto",zi,O]}],basis:[{basis:W()}],"flex-direction":[{flex:["row","row-reverse","col","col-reverse"]}],"flex-wrap":[{flex:["wrap","wrap-reverse","nowrap"]}],flex:[{flex:["1","auto","initial","none",O]}],grow:[{grow:M()}],shrink:[{shrink:M()}],order:[{order:["first","last","none",zi,O]}],"grid-cols":[{"grid-cols":[Oi]}],"col-start-end":[{col:["auto",{span:["full",zi,O]},O]}],"col-start":[{"col-start":rt()}],"col-end":[{"col-end":rt()}],"grid-rows":[{"grid-rows":[Oi]}],"row-start-end":[{row:["auto",{span:[zi,O]},O]}],"row-start":[{"row-start":rt()}],"row-end":[{"row-end":rt()}],"grid-flow":[{"grid-flow":["row","col","dense","row-dense","col-dense"]}],"auto-cols":[{"auto-cols":["auto","min","max","fr",O]}],"auto-rows":[{"auto-rows":["auto","min","max","fr",O]}],gap:[{gap:[m]}],"gap-x":[{"gap-x":[m]}],"gap-y":[{"gap-y":[m]}],"justify-content":[{justify:["normal",...A()]}],"justify-items":[{"justify-items":["start","end","center","stretch"]}],"justify-self":[{"justify-self":["auto","start","end","center","stretch"]}],"align-content":[{content:["normal",...A(),"baseline"]}],"align-items":[{items:["start","end","center","baseline","stretch"]}],"align-self":[{self:["auto","start","end","center","stretch","baseline"]}],"place-content":[{"place-content":[...A(),"baseline"]}],"place-items":[{"place-items":["start","end","center","baseline","stretch"]}],"place-self":[{"place-self":["auto","start","end","center","stretch"]}],p:[{p:[h]}],px:[{px:[h]}],py:[{py:[h]}],ps:[{ps:[h]}],pe:[{pe:[h]}],pt:[{pt:[h]}],pr:[{pr:[h]}],pb:[{pb:[h]}],pl:[{pl:[h]}],m:[{m:[b]}],mx:[{mx:[b]}],my:[{my:[b]}],ms:[{ms:[b]}],me:[{me:[b]}],mt:[{mt:[b]}],mr:[{mr:[b]}],mb:[{mb:[b]}],ml:[{ml:[b]}],"space-x":[{"space-x":[S]}],"space-x-reverse":["space-x-reverse"],"space-y":[{"space-y":[S]}],"space-y-reverse":["space-y-reverse"],w:[{w:["auto","min","max","fit","svw","lvw","dvw",O,t]}],"min-w":[{"min-w":[O,t,"min","max","fit"]}],"max-w":[{"max-w":[O,t,"none","full","min","max","fit","prose",{screen:[Mt]},Mt]}],h:[{h:[O,t,"auto","min","max","fit","svh","lvh","dvh"]}],"min-h":[{"min-h":[O,t,"min","max","fit","svh","lvh","dvh"]}],"max-h":[{"max-h":[O,t,"min","max","fit","svh","lvh","dvh"]}],size:[{size:[O,t,"auto","min","max","fit"]}],"font-size":[{text:["base",Mt,Nt]}],"font-smoothing":["antialiased","subpixel-antialiased"],"font-style":["italic","not-italic"],"font-weight":[{font:["thin","extralight","light","normal","medium","semibold","bold","extrabold","black",jo]}],"font-family":[{font:[Oi]}],"fvn-normal":["normal-nums"],"fvn-ordinal":["ordinal"],"fvn-slashed-zero":["slashed-zero"],"fvn-figure":["lining-nums","oldstyle-nums"],"fvn-spacing":["proportional-nums","tabular-nums"],"fvn-fraction":["diagonal-fractions","stacked-fractions"],tracking:[{tracking:["tighter","tight","normal","wide","wider","widest",O]}],"line-clamp":[{"line-clamp":["none",si,jo]}],leading:[{leading:["none","tight","snug","normal","relaxed","loose",pt,O]}],"list-image":[{"list-image":["none",O]}],"list-style-type":[{list:["none","disc","decimal",O]}],"list-style-position":[{list:["inside","outside"]}],"placeholder-color":[{placeholder:[e]}],"placeholder-opacity":[{"placeholder-opacity":[p]}],"text-alignment":[{text:["left","center","right","justify","start","end"]}],"text-color":[{text:[e]}],"text-opacity":[{"text-opacity":[p]}],"text-decoration":["underline","overline","line-through","no-underline"],"text-decoration-style":[{decoration:[...mt(),"wavy"]}],"text-decoration-thickness":[{decoration:["auto","from-font",pt,Nt]}],"underline-offset":[{"underline-offset":["auto",pt,O]}],"text-decoration-color":[{decoration:[e]}],"text-transform":["uppercase","lowercase","capitalize","normal-case"],"text-overflow":["truncate","text-ellipsis","text-clip"],"text-wrap":[{text:["wrap","nowrap","balance","pretty"]}],indent:[{indent:F()}],"vertical-align":[{align:["baseline","top","middle","bottom","text-top","text-bottom","sub","super",O]}],whitespace:[{whitespace:["normal","nowrap","pre","pre-line","pre-wrap","break-spaces"]}],break:[{break:["normal","words","all","keep"]}],hyphens:[{hyphens:["none","manual","auto"]}],content:[{content:["none",O]}],"bg-attachment":[{bg:["fixed","local","scroll"]}],"bg-clip":[{"bg-clip":["border","padding","content","text"]}],"bg-opacity":[{"bg-opacity":[p]}],"bg-origin":[{"bg-origin":["border","padding","content"]}],"bg-position":[{bg:[...Ti(),IT]}],"bg-repeat":[{bg:["no-repeat",{repeat:["","x","y","round","space"]}]}],"bg-size":[{bg:["auto","cover","contain",RT]}],"bg-image":[{bg:["none",{"gradient-to":["t","tr","r","br","b","bl","l","tl"]},zT]}],"bg-color":[{bg:[e]}],"gradient-from-pos":[{from:[w]}],"gradient-via-pos":[{via:[w]}],"gradient-to-pos":[{to:[w]}],"gradient-from":[{from:[x]}],"gradient-via":[{via:[x]}],"gradient-to":[{to:[x]}],rounded:[{rounded:[a]}],"rounded-s":[{"rounded-s":[a]}],"rounded-e":[{"rounded-e":[a]}],"rounded-t":[{"rounded-t":[a]}],"rounded-r":[{"rounded-r":[a]}],"rounded-b":[{"rounded-b":[a]}],"rounded-l":[{"rounded-l":[a]}],"rounded-ss":[{"rounded-ss":[a]}],"rounded-se":[{"rounded-se":[a]}],"rounded-ee":[{"rounded-ee":[a]}],"rounded-es":[{"rounded-es":[a]}],"rounded-tl":[{"rounded-tl":[a]}],"rounded-tr":[{"rounded-tr":[a]}],"rounded-br":[{"rounded-br":[a]}],"rounded-bl":[{"rounded-bl":[a]}],"border-w":[{border:[o]}],"border-w-x":[{"border-x":[o]}],"border-w-y":[{"border-y":[o]}],"border-w-s":[{"border-s":[o]}],"border-w-e":[{"border-e":[o]}],"border-w-t":[{"border-t":[o]}],"border-w-r":[{"border-r":[o]}],"border-w-b":[{"border-b":[o]}],"border-w-l":[{"border-l":[o]}],"border-opacity":[{"border-opacity":[p]}],"border-style":[{border:[...mt(),"hidden"]}],"divide-x":[{"divide-x":[o]}],"divide-x-reverse":["divide-x-reverse"],"divide-y":[{"divide-y":[o]}],"divide-y-reverse":["divide-y-reverse"],"divide-opacity":[{"divide-opacity":[p]}],"divide-style":[{divide:mt()}],"border-color":[{border:[r]}],"border-color-x":[{"border-x":[r]}],"border-color-y":[{"border-y":[r]}],"border-color-s":[{"border-s":[r]}],"border-color-e":[{"border-e":[r]}],"border-color-t":[{"border-t":[r]}],"border-color-r":[{"border-r":[r]}],"border-color-b":[{"border-b":[r]}],"border-color-l":[{"border-l":[r]}],"divide-color":[{divide:[r]}],"outline-style":[{outline:["",...mt()]}],"outline-offset":[{"outline-offset":[pt,O]}],"outline-w":[{outline:[pt,Nt]}],"outline-color":[{outline:[e]}],"ring-w":[{ring:it()}],"ring-w-inset":["ring-inset"],"ring-color":[{ring:[e]}],"ring-opacity":[{"ring-opacity":[p]}],"ring-offset-w":[{"ring-offset":[pt,Nt]}],"ring-offset-color":[{"ring-offset":[e]}],shadow:[{shadow:["","inner","none",Mt,OT]}],"shadow-color":[{shadow:[Oi]}],opacity:[{opacity:[p]}],"mix-blend":[{"mix-blend":[...ee(),"plus-lighter","plus-darker"]}],"bg-blend":[{"bg-blend":ee()}],filter:[{filter:["","none"]}],blur:[{blur:[n]}],brightness:[{brightness:[i]}],contrast:[{contrast:[l]}],"drop-shadow":[{"drop-shadow":["","none",Mt,O]}],grayscale:[{grayscale:[c]}],"hue-rotate":[{"hue-rotate":[d]}],invert:[{invert:[f]}],saturate:[{saturate:[y]}],sepia:[{sepia:[k]}],"backdrop-filter":[{"backdrop-filter":["","none"]}],"backdrop-blur":[{"backdrop-blur":[n]}],"backdrop-brightness":[{"backdrop-brightness":[i]}],"backdrop-contrast":[{"backdrop-contrast":[l]}],"backdrop-grayscale":[{"backdrop-grayscale":[c]}],"backdrop-hue-rotate":[{"backdrop-hue-rotate":[d]}],"backdrop-invert":[{"backdrop-invert":[f]}],"backdrop-opacity":[{"backdrop-opacity":[p]}],"backdrop-saturate":[{"backdrop-saturate":[y]}],"backdrop-sepia":[{"backdrop-sepia":[k]}],"border-collapse":[{border:["collapse","separate"]}],"border-spacing":[{"border-spacing":[s]}],"border-spacing-x":[{"border-spacing-x":[s]}],"border-spacing-y":[{"border-spacing-y":[s]}],"table-layout":[{table:["auto","fixed"]}],caption:[{caption:["top","bottom"]}],transition:[{transition:["none","all","","colors","opacity","shadow","transform",O]}],duration:[{duration:V()}],ease:[{ease:["linear","in","out","in-out",O]}],delay:[{delay:V()}],animate:[{animate:["none","spin","ping","pulse","bounce",O]}],transform:[{transform:["","gpu","none"]}],scale:[{scale:[C]}],"scale-x":[{"scale-x":[C]}],"scale-y":[{"scale-y":[C]}],rotate:[{rotate:[zi,O]}],"translate-x":[{"translate-x":[T]}],"translate-y":[{"translate-y":[T]}],"skew-x":[{"skew-x":[P]}],"skew-y":[{"skew-y":[P]}],"transform-origin":[{origin:["center","top","top-right","right","bottom-right","bottom","bottom-left","left","top-left",O]}],accent:[{accent:["auto",e]}],appearance:[{appearance:["none","auto"]}],cursor:[{cursor:["auto","default","pointer","wait","text","move","help","not-allowed","none","context-menu","progress","cell","crosshair","vertical-text","alias","copy","no-drop","grab","grabbing","all-scroll","col-resize","row-resize","n-resize","e-resize","s-resize","w-resize","ne-resize","nw-resize","se-resize","sw-resize","ew-resize","ns-resize","nesw-resize","nwse-resize","zoom-in","zoom-out",O]}],"caret-color":[{caret:[e]}],"pointer-events":[{"pointer-events":["none","auto"]}],resize:[{resize:["none","y","x",""]}],"scroll-behavior":[{scroll:["auto","smooth"]}],"scroll-m":[{"scroll-m":F()}],"scroll-mx":[{"scroll-mx":F()}],"scroll-my":[{"scroll-my":F()}],"scroll-ms":[{"scroll-ms":F()}],"scroll-me":[{"scroll-me":F()}],"scroll-mt":[{"scroll-mt":F()}],"scroll-mr":[{"scroll-mr":F()}],"scroll-mb":[{"scroll-mb":F()}],"scroll-ml":[{"scroll-ml":F()}],"scroll-p":[{"scroll-p":F()}],"scroll-px":[{"scroll-px":F()}],"scroll-py":[{"scroll-py":F()}],"scroll-ps":[{"scroll-ps":F()}],"scroll-pe":[{"scroll-pe":F()}],"scroll-pt":[{"scroll-pt":F()}],"scroll-pr":[{"scroll-pr":F()}],"scroll-pb":[{"scroll-pb":F()}],"scroll-pl":[{"scroll-pl":F()}],"snap-align":[{snap:["start","end","center","align-none"]}],"snap-stop":[{snap:["normal","always"]}],"snap-type":[{snap:["none","x","y","both"]}],"snap-strictness":[{snap:["mandatory","proximity"]}],touch:[{touch:["auto","none","manipulation"]}],"touch-x":[{"touch-pan":["x","left","right"]}],"touch-y":[{"touch-pan":["y","up","down"]}],"touch-pz":["touch-pinch-zoom"],select:[{select:["none","text","all","auto"]}],"will-change":[{"will-change":["auto","scroll","contents","transform",O]}],fill:[{fill:[e,"none"]}],"stroke-w":[{stroke:[pt,Nt,jo]}],stroke:[{stroke:[e,"none"]}],sr:["sr-only","not-sr-only"],"forced-color-adjust":[{"forced-color-adjust":["auto","none"]}]},conflictingClassGroups:{overflow:["overflow-x","overflow-y"],overscroll:["overscroll-x","overscroll-y"],inset:["inset-x","inset-y","start","end","top","right","bottom","left"],"inset-x":["right","left"],"inset-y":["top","bottom"],flex:["basis","grow","shrink"],gap:["gap-x","gap-y"],p:["px","py","ps","pe","pt","pr","pb","pl"],px:["pr","pl"],py:["pt","pb"],m:["mx","my","ms","me","mt","mr","mb","ml"],mx:["mr","ml"],my:["mt","mb"],size:["w","h"],"font-size":["leading"],"fvn-normal":["fvn-ordinal","fvn-slashed-zero","fvn-figure","fvn-spacing","fvn-fraction"],"fvn-ordinal":["fvn-normal"],"fvn-slashed-zero":["fvn-normal"],"fvn-figure":["fvn-normal"],"fvn-spacing":["fvn-normal"],"fvn-fraction":["fvn-normal"],"line-clamp":["display","overflow"],rounded:["rounded-s","rounded-e","rounded-t","rounded-r","rounded-b","rounded-l","rounded-ss","rounded-se","rounded-ee","rounded-es","rounded-tl","rounded-tr","rounded-br","rounded-bl"],"rounded-s":["rounded-ss","rounded-es"],"rounded-e":["rounded-se","rounded-ee"],"rounded-t":["rounded-tl","rounded-tr"],"rounded-r":["rounded-tr","rounded-br"],"rounded-b":["rounded-br","rounded-bl"],"rounded-l":["rounded-tl","rounded-bl"],"border-spacing":["border-spacing-x","border-spacing-y"],"border-w":["border-w-s","border-w-e","border-w-t","border-w-r","border-w-b","border-w-l"],"border-w-x":["border-w-r","border-w-l"],"border-w-y":["border-w-t","border-w-b"],"border-color":["border-color-s","border-color-e","border-color-t","border-color-r","border-color-b","border-color-l"],"border-color-x":["border-color-r","border-color-l"],"border-color-y":["border-color-t","border-color-b"],"scroll-m":["scroll-mx","scroll-my","scroll-ms","scroll-me","scroll-mt","scroll-mr","scroll-mb","scroll-ml"],"scroll-mx":["scroll-mr","scroll-ml"],"scroll-my":["scroll-mt","scroll-mb"],"scroll-p":["scroll-px","scroll-py","scroll-ps","scroll-pe","scroll-pt","scroll-pr","scroll-pb","scroll-pl"],"scroll-px":["scroll-pr","scroll-pl"],"scroll-py":["scroll-pt","scroll-pb"],touch:["touch-x","touch-y","touch-pz"],"touch-x":["touch"],"touch-y":["touch"],"touch-pz":["touch"]},conflictingClassGroupModifiers:{"font-size":["leading"]}}},VT=CT(BT);function zu(...e){return VT(qv(e))}const UT=cT("inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-md text-sm font-medium transition-all disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none [&_svg:not([class*='size-'])]:size-4 shrink-0 [&_svg]:shrink-0 outline-none focus-visible:border-ring focus-visible:ring-ring/50 focus-visible:ring-[3px] aria-invalid:ring-destructive/20 dark:aria-invalid:ring-destructive/40 aria-invalid:border-destructive",{variants:{variant:{default:"bg-primary text-primary-foreground hover:bg-primary/90",destructive:"bg-destructive text-white hover:bg-destructive/90 focus-visible:ring-destructive/20 dark:focus-visible:ring-destructive/40 dark:bg-destructive/60",outline:"border bg-background shadow-xs hover:bg-accent hover:text-accent-foreground dark:bg-input/30 dark:border-input dark:hover:bg-input/50",secondary:"bg-secondary text-secondary-foreground hover:bg-secondary/80",ghost:"hover:bg-accent hover:text-accent-foreground dark:hover:bg-accent/50",link:"text-primary underline-offset-4 hover:underline"},size:{default:"h-9 px-4 py-2 has-[>svg]:px-3",sm:"h-8 rounded-md gap-1.5 px-3 has-[>svg]:px-2.5",lg:"h-10 rounded-md px-6 has-[>svg]:px-4",icon:"size-9","icon-sm":"size-8","icon-lg":"size-10"}},defaultVariants:{variant:"default",size:"default"}});function ze({className:e,variant:t="default",size:n="default",asChild:i=!1,...r}){const a=i?iT:"button";return u.jsx(a,{"data-slot":"button","data-variant":t,"data-size":n,className:zu(UT({variant:t,size:n,className:e})),...r})}function Yt(e,t,{checkForDefaultPrevented:n=!0}={}){return function(r){if(e==null||e(r),n===!1||!r.defaultPrevented)return t==null?void 0:t(r)}}function WT(e,t){const n=g.createContext(t),i=a=>{const{children:s,...o}=a,l=g.useMemo(()=>o,Object.values(o));return u.jsx(n.Provider,{value:l,children:s})};i.displayName=e+"Provider";function r(a){const s=g.useContext(n);if(s)return s;if(t!==void 0)return t;throw new Error(`\`${a}\` must be used within \`${e}\``)}return[i,r]}function qT(e,t=[]){let n=[];function i(a,s){const o=g.createContext(s),l=n.length;n=[...n,s];const c=f=>{var p;const{scope:m,children:x,...w}=f,v=((p=m==null?void 0:m[e])==null?void 0:p[l])||o,b=g.useMemo(()=>w,Object.values(w));return u.jsx(v.Provider,{value:b,children:x})};c.displayName=a+"Provider";function d(f,m){var v;const x=((v=m==null?void 0:m[e])==null?void 0:v[l])||o,w=g.useContext(x);if(w)return w;if(s!==void 0)return s;throw new Error(`\`${f}\` must be used within \`${a}\``)}return[c,d]}const r=()=>{const a=n.map(s=>g.createContext(s));return function(o){const l=(o==null?void 0:o[e])||a;return g.useMemo(()=>({[`__scope${e}`]:{...o,[e]:l}}),[o,l])}};return r.scopeName=e,[i,$T(r,...t)]}function $T(...e){const t=e[0];if(e.length===1)return t;const n=()=>{const i=e.map(r=>({useScope:r(),scopeName:r.scopeName}));return function(a){const s=i.reduce((o,{useScope:l,scopeName:c})=>{const f=l(a)[`__scope${c}`];return{...o,...f}},{});return g.useMemo(()=>({[`__scope${t.scopeName}`]:s}),[s])}};return n.scopeName=t.scopeName,n}var Ar=globalThis!=null&&globalThis.document?g.useLayoutEffect:()=>{},HT=ms[" useId ".trim().toString()]||(()=>{}),GT=0;function No(e){const[t,n]=g.useState(HT());return Ar(()=>{n(i=>i??String(GT++))},[e]),e||(t?`radix-${t}`:"")}var KT=ms[" useInsertionEffect ".trim().toString()]||Ar;function QT({prop:e,defaultProp:t,onChange:n=()=>{},caller:i}){const[r,a,s]=YT({defaultProp:t,onChange:n}),o=e!==void 0,l=o?e:r;{const d=g.useRef(e!==void 0);g.useEffect(()=>{const f=d.current;f!==o&&console.warn(`${i} is changing from ${f?"controlled":"uncontrolled"} to ${o?"controlled":"uncontrolled"}. Components should not switch from controlled to uncontrolled (or vice versa). Decide between using a controlled or uncontrolled value for the lifetime of the component.`),d.current=o},[o,i])}const c=g.useCallback(d=>{var f;if(o){const m=XT(d)?d(e):d;m!==e&&((f=s.current)==null||f.call(s,m))}else a(d)},[o,e,a,s]);return[l,c]}function YT({defaultProp:e,onChange:t}){const[n,i]=g.useState(e),r=g.useRef(n),a=g.useRef(t);return KT(()=>{a.current=t},[t]),g.useEffect(()=>{var s;r.current!==n&&((s=a.current)==null||s.call(a,n),r.current=n)},[n,r]),[n,i,a]}function XT(e){return typeof e=="function"}function ZT(e){const t=JT(e),n=g.forwardRef((i,r)=>{const{children:a,...s}=i,o=g.Children.toArray(a),l=o.find(tP);if(l){const c=l.props.children,d=o.map(f=>f===l?g.Children.count(c)>1?g.Children.only(null):g.isValidElement(c)?c.props.children:null:f);return u.jsx(t,{...s,ref:r,children:g.isValidElement(c)?g.cloneElement(c,void 0,d):null})}return u.jsx(t,{...s,ref:r,children:a})});return n.displayName=`${e}.Slot`,n}function JT(e){const t=g.forwardRef((n,i)=>{const{children:r,...a}=n;if(g.isValidElement(r)){const s=iP(r),o=nP(a,r.props);return r.type!==g.Fragment&&(o.ref=i?Os(i,s):s),g.cloneElement(r,o)}return g.Children.count(r)>1?g.Children.only(null):null});return t.displayName=`${e}.SlotClone`,t}var eP=Symbol("radix.slottable");function tP(e){return g.isValidElement(e)&&typeof e.type=="function"&&"__radixId"in e.type&&e.type.__radixId===eP}function nP(e,t){const n={...t};for(const i in t){const r=e[i],a=t[i];/^on[A-Z]/.test(i)?r&&a?n[i]=(...o)=>{const l=a(...o);return r(...o),l}:r&&(n[i]=r):i==="style"?n[i]={...r,...a}:i==="className"&&(n[i]=[r,a].filter(Boolean).join(" "))}return{...e,...n}}function iP(e){var i,r;let t=(i=Object.getOwnPropertyDescriptor(e.props,"ref"))==null?void 0:i.get,n=t&&"isReactWarning"in t&&t.isReactWarning;return n?e.ref:(t=(r=Object.getOwnPropertyDescriptor(e,"ref"))==null?void 0:r.get,n=t&&"isReactWarning"in t&&t.isReactWarning,n?e.props.ref:e.props.ref||e.ref)}var rP=["a","button","div","form","h2","h3","img","input","label","li","nav","ol","p","select","span","svg","ul"],At=rP.reduce((e,t)=>{const n=ZT(`Primitive.${t}`),i=g.forwardRef((r,a)=>{const{asChild:s,...o}=r,l=s?n:t;return typeof window<"u"&&(window[Symbol.for("radix-ui")]=!0),u.jsx(l,{...o,ref:a})});return i.displayName=`Primitive.${t}`,{...e,[t]:i}},{});function aP(e,t){e&&Zc.flushSync(()=>e.dispatchEvent(t))}function jr(e){const t=g.useRef(e);return g.useEffect(()=>{t.current=e}),g.useMemo(()=>(...n)=>{var i;return(i=t.current)==null?void 0:i.call(t,...n)},[])}function sP(e,t=globalThis==null?void 0:globalThis.document){const n=jr(e);g.useEffect(()=>{const i=r=>{r.key==="Escape"&&n(r)};return t.addEventListener("keydown",i,{capture:!0}),()=>t.removeEventListener("keydown",i,{capture:!0})},[n,t])}var oP="DismissableLayer",ec="dismissableLayer.update",lP="dismissableLayer.pointerDownOutside",cP="dismissableLayer.focusOutside",km,Yv=g.createContext({layers:new Set,layersWithOutsidePointerEventsDisabled:new Set,branches:new Set}),Xv=g.forwardRef((e,t)=>{const{disableOutsidePointerEvents:n=!1,onEscapeKeyDown:i,onPointerDownOutside:r,onFocusOutside:a,onInteractOutside:s,onDismiss:o,...l}=e,c=g.useContext(Yv),[d,f]=g.useState(null),m=(d==null?void 0:d.ownerDocument)??(globalThis==null?void 0:globalThis.document),[,x]=g.useState({}),w=Mn(t,S=>f(S)),v=Array.from(c.layers),[b]=[...c.layersWithOutsidePointerEventsDisabled].slice(-1),p=v.indexOf(b),h=d?v.indexOf(d):-1,y=c.layersWithOutsidePointerEventsDisabled.size>0,C=h>=p,k=fP(S=>{const T=S.target,D=[...c.branches].some(N=>N.contains(T));!C||D||(r==null||r(S),s==null||s(S),S.defaultPrevented||o==null||o())},m),P=mP(S=>{const T=S.target;[...c.branches].some(N=>N.contains(T))||(a==null||a(S),s==null||s(S),S.defaultPrevented||o==null||o())},m);return sP(S=>{h===c.layers.size-1&&(i==null||i(S),!S.defaultPrevented&&o&&(S.preventDefault(),o()))},m),g.useEffect(()=>{if(d)return n&&(c.layersWithOutsidePointerEventsDisabled.size===0&&(km=m.body.style.pointerEvents,m.body.style.pointerEvents="none"),c.layersWithOutsidePointerEventsDisabled.add(d)),c.layers.add(d),Sm(),()=>{n&&c.layersWithOutsidePointerEventsDisabled.size===1&&(m.body.style.pointerEvents=km)}},[d,m,n,c]),g.useEffect(()=>()=>{d&&(c.layers.delete(d),c.layersWithOutsidePointerEventsDisabled.delete(d),Sm())},[d,c]),g.useEffect(()=>{const S=()=>x({});return document.addEventListener(ec,S),()=>document.removeEventListener(ec,S)},[]),u.jsx(At.div,{...l,ref:w,style:{pointerEvents:y?C?"auto":"none":void 0,...e.style},onFocusCapture:Yt(e.onFocusCapture,P.onFocusCapture),onBlurCapture:Yt(e.onBlurCapture,P.onBlurCapture),onPointerDownCapture:Yt(e.onPointerDownCapture,k.onPointerDownCapture)})});Xv.displayName=oP;var uP="DismissableLayerBranch",dP=g.forwardRef((e,t)=>{const n=g.useContext(Yv),i=g.useRef(null),r=Mn(t,i);return g.useEffect(()=>{const a=i.current;if(a)return n.branches.add(a),()=>{n.branches.delete(a)}},[n.branches]),u.jsx(At.div,{...e,ref:r})});dP.displayName=uP;function fP(e,t=globalThis==null?void 0:globalThis.document){const n=jr(e),i=g.useRef(!1),r=g.useRef(()=>{});return g.useEffect(()=>{const a=o=>{if(o.target&&!i.current){let l=function(){Zv(lP,n,c,{discrete:!0})};const c={originalEvent:o};o.pointerType==="touch"?(t.removeEventListener("click",r.current),r.current=l,t.addEventListener("click",r.current,{once:!0})):l()}else t.removeEventListener("click",r.current);i.current=!1},s=window.setTimeout(()=>{t.addEventListener("pointerdown",a)},0);return()=>{window.clearTimeout(s),t.removeEventListener("pointerdown",a),t.removeEventListener("click",r.current)}},[t,n]),{onPointerDownCapture:()=>i.current=!0}}function mP(e,t=globalThis==null?void 0:globalThis.document){const n=jr(e),i=g.useRef(!1);return g.useEffect(()=>{const r=a=>{a.target&&!i.current&&Zv(cP,n,{originalEvent:a},{discrete:!1})};return t.addEventListener("focusin",r),()=>t.removeEventListener("focusin",r)},[t,n]),{onFocusCapture:()=>i.current=!0,onBlurCapture:()=>i.current=!1}}function Sm(){const e=new CustomEvent(ec);document.dispatchEvent(e)}function Zv(e,t,n,{discrete:i}){const r=n.originalEvent.target,a=new CustomEvent(e,{bubbles:!1,cancelable:!0,detail:n});t&&r.addEventListener(e,t,{once:!0}),i?aP(r,a):r.dispatchEvent(a)}var Mo="focusScope.autoFocusOnMount",Ro="focusScope.autoFocusOnUnmount",Tm={bubbles:!1,cancelable:!0},pP="FocusScope",Jv=g.forwardRef((e,t)=>{const{loop:n=!1,trapped:i=!1,onMountAutoFocus:r,onUnmountAutoFocus:a,...s}=e,[o,l]=g.useState(null),c=jr(r),d=jr(a),f=g.useRef(null),m=Mn(t,v=>l(v)),x=g.useRef({paused:!1,pause(){this.paused=!0},resume(){this.paused=!1}}).current;g.useEffect(()=>{if(i){let v=function(y){if(x.paused||!o)return;const C=y.target;o.contains(C)?f.current=C:It(f.current,{select:!0})},b=function(y){if(x.paused||!o)return;const C=y.relatedTarget;C!==null&&(o.contains(C)||It(f.current,{select:!0}))},p=function(y){if(document.activeElement===document.body)for(const k of y)k.removedNodes.length>0&&It(o)};document.addEventListener("focusin",v),document.addEventListener("focusout",b);const h=new MutationObserver(p);return o&&h.observe(o,{childList:!0,subtree:!0}),()=>{document.removeEventListener("focusin",v),document.removeEventListener("focusout",b),h.disconnect()}}},[i,o,x.paused]),g.useEffect(()=>{if(o){Em.add(x);const v=document.activeElement;if(!o.contains(v)){const p=new CustomEvent(Mo,Tm);o.addEventListener(Mo,c),o.dispatchEvent(p),p.defaultPrevented||(hP(wP(ey(o)),{select:!0}),document.activeElement===v&&It(o))}return()=>{o.removeEventListener(Mo,c),setTimeout(()=>{const p=new CustomEvent(Ro,Tm);o.addEventListener(Ro,d),o.dispatchEvent(p),p.defaultPrevented||It(v??document.body,{select:!0}),o.removeEventListener(Ro,d),Em.remove(x)},0)}}},[o,c,d,x]);const w=g.useCallback(v=>{if(!n&&!i||x.paused)return;const b=v.key==="Tab"&&!v.altKey&&!v.ctrlKey&&!v.metaKey,p=document.activeElement;if(b&&p){const h=v.currentTarget,[y,C]=gP(h);y&&C?!v.shiftKey&&p===C?(v.preventDefault(),n&&It(y,{select:!0})):v.shiftKey&&p===y&&(v.preventDefault(),n&&It(C,{select:!0})):p===h&&v.preventDefault()}},[n,i,x.paused]);return u.jsx(At.div,{tabIndex:-1,...s,ref:m,onKeyDown:w})});Jv.displayName=pP;function hP(e,{select:t=!1}={}){const n=document.activeElement;for(const i of e)if(It(i,{select:t}),document.activeElement!==n)return}function gP(e){const t=ey(e),n=Pm(t,e),i=Pm(t.reverse(),e);return[n,i]}function ey(e){const t=[],n=document.createTreeWalker(e,NodeFilter.SHOW_ELEMENT,{acceptNode:i=>{const r=i.tagName==="INPUT"&&i.type==="hidden";return i.disabled||i.hidden||r?NodeFilter.FILTER_SKIP:i.tabIndex>=0?NodeFilter.FILTER_ACCEPT:NodeFilter.FILTER_SKIP}});for(;n.nextNode();)t.push(n.currentNode);return t}function Pm(e,t){for(const n of e)if(!vP(n,{upTo:t}))return n}function vP(e,{upTo:t}){if(getComputedStyle(e).visibility==="hidden")return!0;for(;e;){if(t!==void 0&&e===t)return!1;if(getComputedStyle(e).display==="none")return!0;e=e.parentElement}return!1}function yP(e){return e instanceof HTMLInputElement&&"select"in e}function It(e,{select:t=!1}={}){if(e&&e.focus){const n=document.activeElement;e.focus({preventScroll:!0}),e!==n&&yP(e)&&t&&e.select()}}var Em=xP();function xP(){let e=[];return{add(t){const n=e[0];t!==n&&(n==null||n.pause()),e=Am(e,t),e.unshift(t)},remove(t){var n;e=Am(e,t),(n=e[0])==null||n.resume()}}}function Am(e,t){const n=[...e],i=n.indexOf(t);return i!==-1&&n.splice(i,1),n}function wP(e){return e.filter(t=>t.tagName!=="A")}var bP="Portal",ty=g.forwardRef((e,t)=>{var o;const{container:n,...i}=e,[r,a]=g.useState(!1);Ar(()=>a(!0),[]);const s=n||r&&((o=globalThis==null?void 0:globalThis.document)==null?void 0:o.body);return s?Z0.createPortal(u.jsx(At.div,{...i,ref:t}),s):null});ty.displayName=bP;function CP(e,t){return g.useReducer((n,i)=>t[n][i]??n,e)}var Ls=e=>{const{present:t,children:n}=e,i=kP(t),r=typeof n=="function"?n({present:i.isPresent}):g.Children.only(n),a=Mn(i.ref,SP(r));return typeof n=="function"||i.isPresent?g.cloneElement(r,{ref:a}):null};Ls.displayName="Presence";function kP(e){const[t,n]=g.useState(),i=g.useRef(null),r=g.useRef(e),a=g.useRef("none"),s=e?"mounted":"unmounted",[o,l]=CP(s,{mounted:{UNMOUNT:"unmounted",ANIMATION_OUT:"unmountSuspended"},unmountSuspended:{MOUNT:"mounted",ANIMATION_END:"unmounted"},unmounted:{MOUNT:"mounted"}});return g.useEffect(()=>{const c=la(i.current);a.current=o==="mounted"?c:"none"},[o]),Ar(()=>{const c=i.current,d=r.current;if(d!==e){const m=a.current,x=la(c);e?l("MOUNT"):x==="none"||(c==null?void 0:c.display)==="none"?l("UNMOUNT"):l(d&&m!==x?"ANIMATION_OUT":"UNMOUNT"),r.current=e}},[e,l]),Ar(()=>{if(t){let c;const d=t.ownerDocument.defaultView??window,f=x=>{const v=la(i.current).includes(CSS.escape(x.animationName));if(x.target===t&&v&&(l("ANIMATION_END"),!r.current)){const b=t.style.animationFillMode;t.style.animationFillMode="forwards",c=d.setTimeout(()=>{t.style.animationFillMode==="forwards"&&(t.style.animationFillMode=b)})}},m=x=>{x.target===t&&(a.current=la(i.current))};return t.addEventListener("animationstart",m),t.addEventListener("animationcancel",f),t.addEventListener("animationend",f),()=>{d.clearTimeout(c),t.removeEventListener("animationstart",m),t.removeEventListener("animationcancel",f),t.removeEventListener("animationend",f)}}else l("ANIMATION_END")},[t,l]),{isPresent:["mounted","unmountSuspended"].includes(o),ref:g.useCallback(c=>{i.current=c?getComputedStyle(c):null,n(c)},[])}}function la(e){return(e==null?void 0:e.animationName)||"none"}function SP(e){var i,r;let t=(i=Object.getOwnPropertyDescriptor(e.props,"ref"))==null?void 0:i.get,n=t&&"isReactWarning"in t&&t.isReactWarning;return n?e.ref:(t=(r=Object.getOwnPropertyDescriptor(e,"ref"))==null?void 0:r.get,n=t&&"isReactWarning"in t&&t.isReactWarning,n?e.props.ref:e.props.ref||e.ref)}var Io=0;function TP(){g.useEffect(()=>{const e=document.querySelectorAll("[data-radix-focus-guard]");return document.body.insertAdjacentElement("afterbegin",e[0]??jm()),document.body.insertAdjacentElement("beforeend",e[1]??jm()),Io++,()=>{Io===1&&document.querySelectorAll("[data-radix-focus-guard]").forEach(t=>t.remove()),Io--}},[])}function jm(){const e=document.createElement("span");return e.setAttribute("data-radix-focus-guard",""),e.tabIndex=0,e.style.outline="none",e.style.opacity="0",e.style.position="fixed",e.style.pointerEvents="none",e}var lt=function(){return lt=Object.assign||function(t){for(var n,i=1,r=arguments.length;i<r;i++){n=arguments[i];for(var a in n)Object.prototype.hasOwnProperty.call(n,a)&&(t[a]=n[a])}return t},lt.apply(this,arguments)};function ny(e,t){var n={};for(var i in e)Object.prototype.hasOwnProperty.call(e,i)&&t.indexOf(i)<0&&(n[i]=e[i]);if(e!=null&&typeof Object.getOwnPropertySymbols=="function")for(var r=0,i=Object.getOwnPropertySymbols(e);r<i.length;r++)t.indexOf(i[r])<0&&Object.prototype.propertyIsEnumerable.call(e,i[r])&&(n[i[r]]=e[i[r]]);return n}function PP(e,t,n){if(n||arguments.length===2)for(var i=0,r=t.length,a;i<r;i++)(a||!(i in t))&&(a||(a=Array.prototype.slice.call(t,0,i)),a[i]=t[i]);return e.concat(a||Array.prototype.slice.call(t))}var Aa="right-scroll-bar-position",ja="width-before-scroll-bar",EP="with-scroll-bars-hidden",AP="--removed-body-scroll-bar-size";function Do(e,t){return typeof e=="function"?e(t):e&&(e.current=t),e}function jP(e,t){var n=g.useState(function(){return{value:e,callback:t,facade:{get current(){return n.value},set current(i){var r=n.value;r!==i&&(n.value=i,n.callback(i,r))}}}})[0];return n.callback=t,n.facade}var NP=typeof window<"u"?g.useLayoutEffect:g.useEffect,Nm=new WeakMap;function MP(e,t){var n=jP(null,function(i){return e.forEach(function(r){return Do(r,i)})});return NP(function(){var i=Nm.get(n);if(i){var r=new Set(i),a=new Set(e),s=n.current;r.forEach(function(o){a.has(o)||Do(o,null)}),a.forEach(function(o){r.has(o)||Do(o,s)})}Nm.set(n,e)},[e]),n}function RP(e){return e}function IP(e,t){t===void 0&&(t=RP);var n=[],i=!1,r={read:function(){if(i)throw new Error("Sidecar: could not `read` from an `assigned` medium. `read` could be used only with `useMedium`.");return n.length?n[n.length-1]:e},useMedium:function(a){var s=t(a,i);return n.push(s),function(){n=n.filter(function(o){return o!==s})}},assignSyncMedium:function(a){for(i=!0;n.length;){var s=n;n=[],s.forEach(a)}n={push:function(o){return a(o)},filter:function(){return n}}},assignMedium:function(a){i=!0;var s=[];if(n.length){var o=n;n=[],o.forEach(a),s=n}var l=function(){var d=s;s=[],d.forEach(a)},c=function(){return Promise.resolve().then(l)};c(),n={push:function(d){s.push(d),c()},filter:function(d){return s=s.filter(d),n}}}};return r}function DP(e){e===void 0&&(e={});var t=IP(null);return t.options=lt({async:!0,ssr:!1},e),t}var iy=function(e){var t=e.sideCar,n=ny(e,["sideCar"]);if(!t)throw new Error("Sidecar: please provide `sideCar` property to import the right car");var i=t.read();if(!i)throw new Error("Sidecar medium not found");return g.createElement(i,lt({},n))};iy.isSideCarExport=!0;function zP(e,t){return e.useMedium(t),iy}var ry=DP(),zo=function(){},Fs=g.forwardRef(function(e,t){var n=g.useRef(null),i=g.useState({onScrollCapture:zo,onWheelCapture:zo,onTouchMoveCapture:zo}),r=i[0],a=i[1],s=e.forwardProps,o=e.children,l=e.className,c=e.removeScrollBar,d=e.enabled,f=e.shards,m=e.sideCar,x=e.noRelative,w=e.noIsolation,v=e.inert,b=e.allowPinchZoom,p=e.as,h=p===void 0?"div":p,y=e.gapMode,C=ny(e,["forwardProps","children","className","removeScrollBar","enabled","shards","sideCar","noRelative","noIsolation","inert","allowPinchZoom","as","gapMode"]),k=m,P=MP([n,t]),S=lt(lt({},C),r);return g.createElement(g.Fragment,null,d&&g.createElement(k,{sideCar:ry,removeScrollBar:c,shards:f,noRelative:x,noIsolation:w,inert:v,setCallbacks:a,allowPinchZoom:!!b,lockRef:n,gapMode:y}),s?g.cloneElement(g.Children.only(o),lt(lt({},S),{ref:P})):g.createElement(h,lt({},S,{className:l,ref:P}),o))});Fs.defaultProps={enabled:!0,removeScrollBar:!0,inert:!1};Fs.classNames={fullWidth:ja,zeroRight:Aa};var OP=function(){if(typeof __webpack_nonce__<"u")return __webpack_nonce__};function LP(){if(!document)return null;var e=document.createElement("style");e.type="text/css";var t=OP();return t&&e.setAttribute("nonce",t),e}function FP(e,t){e.styleSheet?e.styleSheet.cssText=t:e.appendChild(document.createTextNode(t))}function _P(e){var t=document.head||document.getElementsByTagName("head")[0];t.appendChild(e)}var BP=function(){var e=0,t=null;return{add:function(n){e==0&&(t=LP())&&(FP(t,n),_P(t)),e++},remove:function(){e--,!e&&t&&(t.parentNode&&t.parentNode.removeChild(t),t=null)}}},VP=function(){var e=BP();return function(t,n){g.useEffect(function(){return e.add(t),function(){e.remove()}},[t&&n])}},ay=function(){var e=VP(),t=function(n){var i=n.styles,r=n.dynamic;return e(i,r),null};return t},UP={left:0,top:0,right:0,gap:0},Oo=function(e){return parseInt(e||"",10)||0},WP=function(e){var t=window.getComputedStyle(document.body),n=t[e==="padding"?"paddingLeft":"marginLeft"],i=t[e==="padding"?"paddingTop":"marginTop"],r=t[e==="padding"?"paddingRight":"marginRight"];return[Oo(n),Oo(i),Oo(r)]},qP=function(e){if(e===void 0&&(e="margin"),typeof window>"u")return UP;var t=WP(e),n=document.documentElement.clientWidth,i=window.innerWidth;return{left:t[0],top:t[1],right:t[2],gap:Math.max(0,i-n+t[2]-t[0])}},$P=ay(),oi="data-scroll-locked",HP=function(e,t,n,i){var r=e.left,a=e.top,s=e.right,o=e.gap;return n===void 0&&(n="margin"),`
  .`.concat(EP,` {
   overflow: hidden `).concat(i,`;
   padding-right: `).concat(o,"px ").concat(i,`;
  }
  body[`).concat(oi,`] {
    overflow: hidden `).concat(i,`;
    overscroll-behavior: contain;
    `).concat([t&&"position: relative ".concat(i,";"),n==="margin"&&`
    padding-left: `.concat(r,`px;
    padding-top: `).concat(a,`px;
    padding-right: `).concat(s,`px;
    margin-left:0;
    margin-top:0;
    margin-right: `).concat(o,"px ").concat(i,`;
    `),n==="padding"&&"padding-right: ".concat(o,"px ").concat(i,";")].filter(Boolean).join(""),`
  }
  
  .`).concat(Aa,` {
    right: `).concat(o,"px ").concat(i,`;
  }
  
  .`).concat(ja,` {
    margin-right: `).concat(o,"px ").concat(i,`;
  }
  
  .`).concat(Aa," .").concat(Aa,` {
    right: 0 `).concat(i,`;
  }
  
  .`).concat(ja," .").concat(ja,` {
    margin-right: 0 `).concat(i,`;
  }
  
  body[`).concat(oi,`] {
    `).concat(AP,": ").concat(o,`px;
  }
`)},Mm=function(){var e=parseInt(document.body.getAttribute(oi)||"0",10);return isFinite(e)?e:0},GP=function(){g.useEffect(function(){return document.body.setAttribute(oi,(Mm()+1).toString()),function(){var e=Mm()-1;e<=0?document.body.removeAttribute(oi):document.body.setAttribute(oi,e.toString())}},[])},KP=function(e){var t=e.noRelative,n=e.noImportant,i=e.gapMode,r=i===void 0?"margin":i;GP();var a=g.useMemo(function(){return qP(r)},[r]);return g.createElement($P,{styles:HP(a,!t,r,n?"":"!important")})},tc=!1;if(typeof window<"u")try{var ca=Object.defineProperty({},"passive",{get:function(){return tc=!0,!0}});window.addEventListener("test",ca,ca),window.removeEventListener("test",ca,ca)}catch{tc=!1}var In=tc?{passive:!1}:!1,QP=function(e){return e.tagName==="TEXTAREA"},sy=function(e,t){if(!(e instanceof Element))return!1;var n=window.getComputedStyle(e);return n[t]!=="hidden"&&!(n.overflowY===n.overflowX&&!QP(e)&&n[t]==="visible")},YP=function(e){return sy(e,"overflowY")},XP=function(e){return sy(e,"overflowX")},Rm=function(e,t){var n=t.ownerDocument,i=t;do{typeof ShadowRoot<"u"&&i instanceof ShadowRoot&&(i=i.host);var r=oy(e,i);if(r){var a=ly(e,i),s=a[1],o=a[2];if(s>o)return!0}i=i.parentNode}while(i&&i!==n.body);return!1},ZP=function(e){var t=e.scrollTop,n=e.scrollHeight,i=e.clientHeight;return[t,n,i]},JP=function(e){var t=e.scrollLeft,n=e.scrollWidth,i=e.clientWidth;return[t,n,i]},oy=function(e,t){return e==="v"?YP(t):XP(t)},ly=function(e,t){return e==="v"?ZP(t):JP(t)},eE=function(e,t){return e==="h"&&t==="rtl"?-1:1},tE=function(e,t,n,i,r){var a=eE(e,window.getComputedStyle(t).direction),s=a*i,o=n.target,l=t.contains(o),c=!1,d=s>0,f=0,m=0;do{if(!o)break;var x=ly(e,o),w=x[0],v=x[1],b=x[2],p=v-b-a*w;(w||p)&&oy(e,o)&&(f+=p,m+=w);var h=o.parentNode;o=h&&h.nodeType===Node.DOCUMENT_FRAGMENT_NODE?h.host:h}while(!l&&o!==document.body||l&&(t.contains(o)||t===o));return(d&&Math.abs(f)<1||!d&&Math.abs(m)<1)&&(c=!0),c},ua=function(e){return"changedTouches"in e?[e.changedTouches[0].clientX,e.changedTouches[0].clientY]:[0,0]},Im=function(e){return[e.deltaX,e.deltaY]},Dm=function(e){return e&&"current"in e?e.current:e},nE=function(e,t){return e[0]===t[0]&&e[1]===t[1]},iE=function(e){return`
  .block-interactivity-`.concat(e,` {pointer-events: none;}
  .allow-interactivity-`).concat(e,` {pointer-events: all;}
`)},rE=0,Dn=[];function aE(e){var t=g.useRef([]),n=g.useRef([0,0]),i=g.useRef(),r=g.useState(rE++)[0],a=g.useState(ay)[0],s=g.useRef(e);g.useEffect(function(){s.current=e},[e]),g.useEffect(function(){if(e.inert){document.body.classList.add("block-interactivity-".concat(r));var v=PP([e.lockRef.current],(e.shards||[]).map(Dm),!0).filter(Boolean);return v.forEach(function(b){return b.classList.add("allow-interactivity-".concat(r))}),function(){document.body.classList.remove("block-interactivity-".concat(r)),v.forEach(function(b){return b.classList.remove("allow-interactivity-".concat(r))})}}},[e.inert,e.lockRef.current,e.shards]);var o=g.useCallback(function(v,b){if("touches"in v&&v.touches.length===2||v.type==="wheel"&&v.ctrlKey)return!s.current.allowPinchZoom;var p=ua(v),h=n.current,y="deltaX"in v?v.deltaX:h[0]-p[0],C="deltaY"in v?v.deltaY:h[1]-p[1],k,P=v.target,S=Math.abs(y)>Math.abs(C)?"h":"v";if("touches"in v&&S==="h"&&P.type==="range")return!1;var T=window.getSelection(),D=T&&T.anchorNode,N=D?D===P||D.contains(P):!1;if(N)return!1;var W=Rm(S,P);if(!W)return!0;if(W?k=S:(k=S==="v"?"h":"v",W=Rm(S,P)),!W)return!1;if(!i.current&&"changedTouches"in v&&(y||C)&&(i.current=k),!k)return!0;var F=i.current||k;return tE(F,b,v,F==="h"?y:C)},[]),l=g.useCallback(function(v){var b=v;if(!(!Dn.length||Dn[Dn.length-1]!==a)){var p="deltaY"in b?Im(b):ua(b),h=t.current.filter(function(k){return k.name===b.type&&(k.target===b.target||b.target===k.shadowParent)&&nE(k.delta,p)})[0];if(h&&h.should){b.cancelable&&b.preventDefault();return}if(!h){var y=(s.current.shards||[]).map(Dm).filter(Boolean).filter(function(k){return k.contains(b.target)}),C=y.length>0?o(b,y[0]):!s.current.noIsolation;C&&b.cancelable&&b.preventDefault()}}},[]),c=g.useCallback(function(v,b,p,h){var y={name:v,delta:b,target:p,should:h,shadowParent:sE(p)};t.current.push(y),setTimeout(function(){t.current=t.current.filter(function(C){return C!==y})},1)},[]),d=g.useCallback(function(v){n.current=ua(v),i.current=void 0},[]),f=g.useCallback(function(v){c(v.type,Im(v),v.target,o(v,e.lockRef.current))},[]),m=g.useCallback(function(v){c(v.type,ua(v),v.target,o(v,e.lockRef.current))},[]);g.useEffect(function(){return Dn.push(a),e.setCallbacks({onScrollCapture:f,onWheelCapture:f,onTouchMoveCapture:m}),document.addEventListener("wheel",l,In),document.addEventListener("touchmove",l,In),document.addEventListener("touchstart",d,In),function(){Dn=Dn.filter(function(v){return v!==a}),document.removeEventListener("wheel",l,In),document.removeEventListener("touchmove",l,In),document.removeEventListener("touchstart",d,In)}},[]);var x=e.removeScrollBar,w=e.inert;return g.createElement(g.Fragment,null,w?g.createElement(a,{styles:iE(r)}):null,x?g.createElement(KP,{noRelative:e.noRelative,gapMode:e.gapMode}):null)}function sE(e){for(var t=null;e!==null;)e instanceof ShadowRoot&&(t=e.host,e=e.host),e=e.parentNode;return t}const oE=zP(ry,aE);var cy=g.forwardRef(function(e,t){return g.createElement(Fs,lt({},e,{ref:t,sideCar:oE}))});cy.classNames=Fs.classNames;var lE=function(e){if(typeof document>"u")return null;var t=Array.isArray(e)?e[0]:e;return t.ownerDocument.body},zn=new WeakMap,da=new WeakMap,fa={},Lo=0,uy=function(e){return e&&(e.host||uy(e.parentNode))},cE=function(e,t){return t.map(function(n){if(e.contains(n))return n;var i=uy(n);return i&&e.contains(i)?i:(console.error("aria-hidden",n,"in not contained inside",e,". Doing nothing"),null)}).filter(function(n){return!!n})},uE=function(e,t,n,i){var r=cE(t,Array.isArray(e)?e:[e]);fa[n]||(fa[n]=new WeakMap);var a=fa[n],s=[],o=new Set,l=new Set(r),c=function(f){!f||o.has(f)||(o.add(f),c(f.parentNode))};r.forEach(c);var d=function(f){!f||l.has(f)||Array.prototype.forEach.call(f.children,function(m){if(o.has(m))d(m);else try{var x=m.getAttribute(i),w=x!==null&&x!=="false",v=(zn.get(m)||0)+1,b=(a.get(m)||0)+1;zn.set(m,v),a.set(m,b),s.push(m),v===1&&w&&da.set(m,!0),b===1&&m.setAttribute(n,"true"),w||m.setAttribute(i,"true")}catch(p){console.error("aria-hidden: cannot operate on ",m,p)}})};return d(t),o.clear(),Lo++,function(){s.forEach(function(f){var m=zn.get(f)-1,x=a.get(f)-1;zn.set(f,m),a.set(f,x),m||(da.has(f)||f.removeAttribute(i),da.delete(f)),x||f.removeAttribute(n)}),Lo--,Lo||(zn=new WeakMap,zn=new WeakMap,da=new WeakMap,fa={})}},dE=function(e,t,n){n===void 0&&(n="data-aria-hidden");var i=Array.from(Array.isArray(e)?e:[e]),r=lE(e);return r?(i.push.apply(i,Array.from(r.querySelectorAll("[aria-live], script"))),uE(i,r,n,"aria-hidden")):function(){return null}};function fE(e){const t=mE(e),n=g.forwardRef((i,r)=>{const{children:a,...s}=i,o=g.Children.toArray(a),l=o.find(hE);if(l){const c=l.props.children,d=o.map(f=>f===l?g.Children.count(c)>1?g.Children.only(null):g.isValidElement(c)?c.props.children:null:f);return u.jsx(t,{...s,ref:r,children:g.isValidElement(c)?g.cloneElement(c,void 0,d):null})}return u.jsx(t,{...s,ref:r,children:a})});return n.displayName=`${e}.Slot`,n}function mE(e){const t=g.forwardRef((n,i)=>{const{children:r,...a}=n;if(g.isValidElement(r)){const s=vE(r),o=gE(a,r.props);return r.type!==g.Fragment&&(o.ref=i?Os(i,s):s),g.cloneElement(r,o)}return g.Children.count(r)>1?g.Children.only(null):null});return t.displayName=`${e}.SlotClone`,t}var pE=Symbol("radix.slottable");function hE(e){return g.isValidElement(e)&&typeof e.type=="function"&&"__radixId"in e.type&&e.type.__radixId===pE}function gE(e,t){const n={...t};for(const i in t){const r=e[i],a=t[i];/^on[A-Z]/.test(i)?r&&a?n[i]=(...o)=>{const l=a(...o);return r(...o),l}:r&&(n[i]=r):i==="style"?n[i]={...r,...a}:i==="className"&&(n[i]=[r,a].filter(Boolean).join(" "))}return{...e,...n}}function vE(e){var i,r;let t=(i=Object.getOwnPropertyDescriptor(e.props,"ref"))==null?void 0:i.get,n=t&&"isReactWarning"in t&&t.isReactWarning;return n?e.ref:(t=(r=Object.getOwnPropertyDescriptor(e,"ref"))==null?void 0:r.get,n=t&&"isReactWarning"in t&&t.isReactWarning,n?e.props.ref:e.props.ref||e.ref)}var _s="Dialog",[dy]=qT(_s),[yE,nt]=dy(_s),fy=e=>{const{__scopeDialog:t,children:n,open:i,defaultOpen:r,onOpenChange:a,modal:s=!0}=e,o=g.useRef(null),l=g.useRef(null),[c,d]=QT({prop:i,defaultProp:r??!1,onChange:a,caller:_s});return u.jsx(yE,{scope:t,triggerRef:o,contentRef:l,contentId:No(),titleId:No(),descriptionId:No(),open:c,onOpenChange:d,onOpenToggle:g.useCallback(()=>d(f=>!f),[d]),modal:s,children:n})};fy.displayName=_s;var my="DialogTrigger",py=g.forwardRef((e,t)=>{const{__scopeDialog:n,...i}=e,r=nt(my,n),a=Mn(t,r.triggerRef);return u.jsx(At.button,{type:"button","aria-haspopup":"dialog","aria-expanded":r.open,"aria-controls":r.contentId,"data-state":Fu(r.open),...i,ref:a,onClick:Yt(e.onClick,r.onOpenToggle)})});py.displayName=my;var Ou="DialogPortal",[xE,hy]=dy(Ou,{forceMount:void 0}),gy=e=>{const{__scopeDialog:t,forceMount:n,children:i,container:r}=e,a=nt(Ou,t);return u.jsx(xE,{scope:t,forceMount:n,children:g.Children.map(i,s=>u.jsx(Ls,{present:n||a.open,children:u.jsx(ty,{asChild:!0,container:r,children:s})}))})};gy.displayName=Ou;var us="DialogOverlay",vy=g.forwardRef((e,t)=>{const n=hy(us,e.__scopeDialog),{forceMount:i=n.forceMount,...r}=e,a=nt(us,e.__scopeDialog);return a.modal?u.jsx(Ls,{present:i||a.open,children:u.jsx(bE,{...r,ref:t})}):null});vy.displayName=us;var wE=fE("DialogOverlay.RemoveScroll"),bE=g.forwardRef((e,t)=>{const{__scopeDialog:n,...i}=e,r=nt(us,n);return u.jsx(cy,{as:wE,allowPinchZoom:!0,shards:[r.contentRef],children:u.jsx(At.div,{"data-state":Fu(r.open),...i,ref:t,style:{pointerEvents:"auto",...i.style}})})}),Pn="DialogContent",yy=g.forwardRef((e,t)=>{const n=hy(Pn,e.__scopeDialog),{forceMount:i=n.forceMount,...r}=e,a=nt(Pn,e.__scopeDialog);return u.jsx(Ls,{present:i||a.open,children:a.modal?u.jsx(CE,{...r,ref:t}):u.jsx(kE,{...r,ref:t})})});yy.displayName=Pn;var CE=g.forwardRef((e,t)=>{const n=nt(Pn,e.__scopeDialog),i=g.useRef(null),r=Mn(t,n.contentRef,i);return g.useEffect(()=>{const a=i.current;if(a)return dE(a)},[]),u.jsx(xy,{...e,ref:r,trapFocus:n.open,disableOutsidePointerEvents:!0,onCloseAutoFocus:Yt(e.onCloseAutoFocus,a=>{var s;a.preventDefault(),(s=n.triggerRef.current)==null||s.focus()}),onPointerDownOutside:Yt(e.onPointerDownOutside,a=>{const s=a.detail.originalEvent,o=s.button===0&&s.ctrlKey===!0;(s.button===2||o)&&a.preventDefault()}),onFocusOutside:Yt(e.onFocusOutside,a=>a.preventDefault())})}),kE=g.forwardRef((e,t)=>{const n=nt(Pn,e.__scopeDialog),i=g.useRef(!1),r=g.useRef(!1);return u.jsx(xy,{...e,ref:t,trapFocus:!1,disableOutsidePointerEvents:!1,onCloseAutoFocus:a=>{var s,o;(s=e.onCloseAutoFocus)==null||s.call(e,a),a.defaultPrevented||(i.current||(o=n.triggerRef.current)==null||o.focus(),a.preventDefault()),i.current=!1,r.current=!1},onInteractOutside:a=>{var l,c;(l=e.onInteractOutside)==null||l.call(e,a),a.defaultPrevented||(i.current=!0,a.detail.originalEvent.type==="pointerdown"&&(r.current=!0));const s=a.target;((c=n.triggerRef.current)==null?void 0:c.contains(s))&&a.preventDefault(),a.detail.originalEvent.type==="focusin"&&r.current&&a.preventDefault()}})}),xy=g.forwardRef((e,t)=>{const{__scopeDialog:n,trapFocus:i,onOpenAutoFocus:r,onCloseAutoFocus:a,...s}=e,o=nt(Pn,n),l=g.useRef(null),c=Mn(t,l);return TP(),u.jsxs(u.Fragment,{children:[u.jsx(Jv,{asChild:!0,loop:!0,trapped:i,onMountAutoFocus:r,onUnmountAutoFocus:a,children:u.jsx(Xv,{role:"dialog",id:o.contentId,"aria-describedby":o.descriptionId,"aria-labelledby":o.titleId,"data-state":Fu(o.open),...s,ref:c,onDismiss:()=>o.onOpenChange(!1)})}),u.jsxs(u.Fragment,{children:[u.jsx(PE,{titleId:o.titleId}),u.jsx(AE,{contentRef:l,descriptionId:o.descriptionId})]})]})}),Lu="DialogTitle",SE=g.forwardRef((e,t)=>{const{__scopeDialog:n,...i}=e,r=nt(Lu,n);return u.jsx(At.h2,{id:r.titleId,...i,ref:t})});SE.displayName=Lu;var wy="DialogDescription",TE=g.forwardRef((e,t)=>{const{__scopeDialog:n,...i}=e,r=nt(wy,n);return u.jsx(At.p,{id:r.descriptionId,...i,ref:t})});TE.displayName=wy;var by="DialogClose",Cy=g.forwardRef((e,t)=>{const{__scopeDialog:n,...i}=e,r=nt(by,n);return u.jsx(At.button,{type:"button",...i,ref:t,onClick:Yt(e.onClick,()=>r.onOpenChange(!1))})});Cy.displayName=by;function Fu(e){return e?"open":"closed"}var ky="DialogTitleWarning",[fA,Sy]=WT(ky,{contentName:Pn,titleName:Lu,docsSlug:"dialog"}),PE=({titleId:e})=>{const t=Sy(ky),n=`\`${t.contentName}\` requires a \`${t.titleName}\` for the component to be accessible for screen reader users.

If you want to hide the \`${t.titleName}\`, you can wrap it with our VisuallyHidden component.

For more information, see https://radix-ui.com/primitives/docs/components/${t.docsSlug}`;return g.useEffect(()=>{e&&(document.getElementById(e)||console.error(n))},[n,e]),null},EE="DialogDescriptionWarning",AE=({contentRef:e,descriptionId:t})=>{const i=`Warning: Missing \`Description\` or \`aria-describedby={undefined}\` for {${Sy(EE).contentName}}.`;return g.useEffect(()=>{var a;const r=(a=e.current)==null?void 0:a.getAttribute("aria-describedby");t&&r&&(document.getElementById(t)||console.warn(i))},[i,e,t]),null},jE=fy,NE=py,ME=gy,RE=vy,IE=yy,DE=Cy;function zE({...e}){return u.jsx(jE,{"data-slot":"sheet",...e})}function OE({...e}){return u.jsx(NE,{"data-slot":"sheet-trigger",...e})}function LE({...e}){return u.jsx(ME,{"data-slot":"sheet-portal",...e})}function FE({className:e,...t}){return u.jsx(RE,{"data-slot":"sheet-overlay",className:zu("data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 fixed inset-0 z-50 bg-black/50",e),...t})}function _E({className:e,children:t,side:n="right",...i}){return u.jsxs(LE,{children:[u.jsx(FE,{}),u.jsxs(IE,{"data-slot":"sheet-content",className:zu("bg-background data-[state=open]:animate-in data-[state=closed]:animate-out fixed z-50 flex flex-col gap-4 shadow-lg transition ease-in-out data-[state=closed]:duration-300 data-[state=open]:duration-500",n==="right"&&"data-[state=closed]:slide-out-to-right data-[state=open]:slide-in-from-right inset-y-0 right-0 h-full w-3/4 border-l sm:max-w-sm",n==="left"&&"data-[state=closed]:slide-out-to-left data-[state=open]:slide-in-from-left inset-y-0 left-0 h-full w-3/4 border-r sm:max-w-sm",n==="top"&&"data-[state=closed]:slide-out-to-top data-[state=open]:slide-in-from-top inset-x-0 top-0 h-auto border-b",n==="bottom"&&"data-[state=closed]:slide-out-to-bottom data-[state=open]:slide-in-from-bottom inset-x-0 bottom-0 h-auto border-t",e),...i,children:[t,u.jsxs(DE,{className:"ring-offset-background focus:ring-ring data-[state=open]:bg-secondary absolute top-4 right-4 rounded-xs opacity-70 transition-opacity hover:opacity-100 focus:ring-2 focus:ring-offset-2 focus:outline-hidden disabled:pointer-events-none",children:[u.jsx(Vv,{className:"size-4"}),u.jsx("span",{className:"sr-only",children:"Close"})]})]})]})}const nc=()=>{const[e,t]=g.useState(!1);g.useEffect(()=>{const r=()=>{t(window.scrollY>50)};return window.addEventListener("scroll",r,{passive:!0}),()=>window.removeEventListener("scroll",r)},[]);const n=[{name:"Home",href:"#home"},{name:"Services",href:"#services"},{name:"Books",href:"#books"},{name:"About",href:"#about"},{name:"Blog",href:"#blog"},{name:"Contact",href:"#contact"}],i=r=>{const a=document.querySelector(r);a&&a.scrollIntoView({behavior:"smooth"})};return u.jsx(I.header,{initial:{y:-100},animate:{y:0},transition:{duration:.6,ease:[.25,.46,.45,.94]},className:`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${e?"bg-dark-blue/95 backdrop-blur-md shadow-lg":"bg-transparent"}`,children:u.jsx("div",{className:"max-w-[1200px] mx-auto px-4 sm:px-6 lg:px-8",children:u.jsxs("div",{className:"flex items-center justify-between h-32",children:[u.jsx("a",{href:"#home",onClick:r=>{r.preventDefault(),i("#home")},className:"flex items-center",children:u.jsx("img",{src:"/images/facts-logo-inverted.png",alt:"FACTS Consulting",className:"h-48 w-auto"})}),u.jsxs("nav",{className:"hidden md:flex items-center gap-8",children:[n.map(r=>u.jsx("a",{href:r.href,onClick:a=>{a.preventDefault(),i(r.href)},className:"text-text-secondary hover:text-accent-gold transition-colors duration-200 text-sm font-medium",children:r.name},r.name)),u.jsx(ze,{onClick:()=>window.open("https://calendly.com/bobkatz","_blank"),className:"bg-accent-gold text-dark-blue hover:bg-accent-gold-hover font-semibold px-6",children:"Schedule a Free Consultation"})]}),u.jsxs(zE,{children:[u.jsx(OE,{asChild:!0,className:"md:hidden",children:u.jsx(ze,{variant:"ghost",size:"icon",className:"text-white",children:u.jsx($S,{className:"h-6 w-6"})})}),u.jsx(_E,{side:"right",className:"bg-dark-blue border-card-bg w-[280px]",children:u.jsxs("div",{className:"flex flex-col gap-8 mt-8",children:[n.map(r=>u.jsx("a",{href:r.href,onClick:a=>{a.preventDefault(),i(r.href)},className:"text-white hover:text-accent-gold transition-colors duration-200 text-lg font-medium",children:r.name},r.name)),u.jsx(ze,{onClick:()=>window.open("https://calendly.com/bobkatz","_blank"),className:"bg-accent-gold text-dark-blue hover:bg-accent-gold-hover font-semibold w-full",children:"Schedule a Free Consultation"})]})})]})]})})})},BE=()=>{const e={hidden:{opacity:0},visible:{opacity:1,transition:{staggerChildren:.15,delayChildren:.3}}},t={hidden:{opacity:0,y:40},visible:{opacity:1,y:0,transition:{duration:.8,ease:[.25,.46,.45,.94]}}},n=i=>{const r=document.querySelector(i);r&&r.scrollIntoView({behavior:"smooth"})};return u.jsxs("section",{id:"home",className:"relative min-h-screen flex items-center bg-dark-blue overflow-hidden",children:[u.jsx("div",{className:"absolute inset-0 bg-gradient-to-br from-dark-blue via-dark-blue to-navy"}),u.jsx("div",{className:"absolute top-20 right-10 w-72 h-72 bg-accent-gold/5 rounded-full blur-3xl"}),u.jsx("div",{className:"absolute bottom-20 left-10 w-96 h-96 bg-accent-gold/3 rounded-full blur-3xl"}),u.jsx("div",{className:"relative z-10 max-w-[1200px] mx-auto px-4 sm:px-6 lg:px-8 py-32",children:u.jsxs("div",{className:"grid lg:grid-cols-2 gap-12 items-center",children:[u.jsxs(I.div,{variants:e,initial:"hidden",animate:"visible",className:"max-w-xl",children:[u.jsxs(I.div,{variants:t,className:"flex items-center gap-2 mb-6",children:[u.jsx("span",{className:"w-8 h-[2px] bg-accent-gold"}),u.jsx("span",{className:"text-accent-gold text-sm font-medium tracking-wider uppercase",children:"Finance, Analytics and AI Consulting"})]}),u.jsxs(I.h1,{variants:t,className:"text-4xl sm:text-5xl lg:text-6xl font-bold text-white leading-tight mb-6",children:["Smarter Finance. Sharper Analytics.",u.jsx("br",{}),"Real ROI & ROAI."]}),u.jsxs(I.p,{variants:t,className:"text-lg text-text-secondary mb-4",children:[u.jsx("span",{className:"text-accent-gold font-semibold",children:"F"}),"inance |"," ",u.jsx("span",{className:"text-accent-gold font-semibold",children:"A"}),"nalytics |"," ",u.jsx("span",{className:"text-accent-gold font-semibold",children:"C"}),"onsulting |"," ",u.jsx("span",{className:"text-accent-gold font-semibold",children:"T"}),"echnology"," ",u.jsx("span",{className:"text-accent-gold font-semibold",children:"S"}),"olutions"]}),u.jsx(I.p,{variants:t,className:"text-text-secondary text-lg leading-relaxed mb-8",children:"We help SMB finance teams build AI-augmented analytics, automate close and reporting workflows, and finally get real ROI from their data — without hiring a full data team."}),u.jsxs(I.div,{variants:t,className:"flex flex-wrap gap-4",children:[u.jsxs(ze,{onClick:()=>window.open("https://calendly.com/bobkatz","_blank"),className:"bg-accent-gold text-dark-blue hover:bg-accent-gold-hover font-semibold px-8 py-6 text-base animate-pulse-glow",children:["Schedule a Free Consultation",u.jsx(Er,{className:"ml-2 h-5 w-5"})]}),u.jsx(ze,{onClick:()=>n("#services"),variant:"outline",className:"border-2 border-accent-gold text-accent-gold hover:bg-accent-gold/10 font-semibold px-8 py-6 text-base",children:"Explore Our Services"})]})]}),u.jsxs(I.div,{initial:{opacity:0,scale:.95},animate:{opacity:1,scale:1},transition:{duration:1,delay:.5,ease:[.25,.46,.45,.94]},className:"relative hidden lg:block",children:[u.jsxs("div",{className:"relative rounded-2xl overflow-hidden shadow-2xl",children:[u.jsx("img",{src:"/images/hero-visual.jpg",alt:"Business Transformation",className:"w-full h-auto object-cover"}),u.jsx("div",{className:"absolute inset-0 bg-gradient-to-t from-dark-blue/30 to-transparent"})]}),u.jsxs(I.div,{initial:{opacity:0,y:20},animate:{opacity:1,y:0},transition:{duration:.8,delay:1},className:"absolute -bottom-6 -left-6 bg-card-bg border border-accent-gold/20 rounded-xl p-6 shadow-card",children:[u.jsx("div",{className:"text-3xl font-bold text-accent-gold",children:"150+"}),u.jsx("div",{className:"text-text-secondary text-sm",children:"Finance Teams Served"})]})]})]})}),u.jsx(I.div,{initial:{opacity:0},animate:{opacity:1},transition:{delay:1.5},className:"absolute bottom-8 left-1/2 -translate-x-1/2",children:u.jsxs(I.div,{animate:{y:[0,10,0]},transition:{duration:2,repeat:1/0,ease:"easeInOut"},className:"flex flex-col items-center gap-2 cursor-pointer",onClick:()=>n("#pillars"),children:[u.jsx("span",{className:"text-text-secondary text-sm",children:"Scroll to explore"}),u.jsx(_S,{className:"w-5 h-5 text-accent-gold"})]})})]})},VE=({icon:e,title:t,description:n,index:i})=>u.jsxs(I.div,{initial:{opacity:0,y:30},whileInView:{opacity:1,y:0},viewport:{once:!0,margin:"-50px"},transition:{duration:.6,delay:i*.1,ease:[.25,.46,.45,.94]},whileHover:{y:-8},className:"group bg-white rounded-2xl p-8 shadow-card hover:shadow-card-hover transition-all duration-300 will-change-transform",children:[u.jsx(I.div,{className:"w-14 h-14 bg-dark-blue rounded-xl flex items-center justify-center mb-6 group-hover:bg-accent-gold transition-colors duration-300",whileHover:{scale:1.1},transition:{duration:.2},children:u.jsx("div",{className:"text-accent-gold group-hover:text-dark-blue transition-colors duration-300",children:e})}),u.jsx("h3",{className:"text-xl font-semibold text-dark-blue mb-3",children:t}),u.jsx("p",{className:"text-gray-600 leading-relaxed",children:n})]}),UE=()=>{const e=[{icon:u.jsx(_v,{className:"w-7 h-7"}),title:"Finance",description:"Strategic financial planning, FP&A, treasury management, and accounting optimization to strengthen your financial foundation."},{icon:u.jsx(OS,{className:"w-7 h-7"}),title:"Analytics",description:"Data-driven insights, predictive analytics, and business intelligence to inform strategic decision-making."},{icon:u.jsx(Bv,{className:"w-7 h-7"}),title:"Consulting",description:"Expert advisory services for operational excellence, risk management, and sustainable business growth."},{icon:u.jsx(QS,{className:"w-7 h-7"}),title:"Transformation",description:"End-to-end digital transformation, process reengineering, and change management for the modern enterprise."}];return u.jsx("section",{id:"pillars",className:"py-24 bg-light-bg",children:u.jsxs("div",{className:"max-w-[1200px] mx-auto px-4 sm:px-6 lg:px-8",children:[u.jsxs(I.div,{initial:{opacity:0,y:30},whileInView:{opacity:1,y:0},viewport:{once:!0},transition:{duration:.6,ease:[.25,.46,.45,.94]},className:"text-center mb-16",children:[u.jsxs("div",{className:"flex items-center justify-center gap-2 mb-4",children:[u.jsx("span",{className:"w-8 h-[2px] bg-accent-gold"}),u.jsx("span",{className:"text-accent-gold text-sm font-medium tracking-wider uppercase",children:"Our Expertise"}),u.jsx("span",{className:"w-8 h-[2px] bg-accent-gold"})]}),u.jsx("h2",{className:"text-3xl sm:text-4xl font-bold text-dark-blue mb-4",children:"The FACTS Advantage"}),u.jsx("p",{className:"text-gray-600 text-lg max-w-2xl mx-auto",children:"We bring together four core disciplines to deliver comprehensive solutions that drive measurable business results."})]}),u.jsx("div",{className:"grid sm:grid-cols-2 lg:grid-cols-4 gap-6",children:e.map((t,n)=>u.jsx(VE,{icon:t.icon,title:t.title,description:t.description,index:n},t.title))})]})})},WE=({icon:e,title:t,description:n,features:i,index:r})=>u.jsxs(I.div,{initial:{opacity:0,y:30},whileInView:{opacity:1,y:0},viewport:{once:!0,margin:"-50px"},transition:{duration:.6,delay:r*.15,ease:[.25,.46,.45,.94]},whileHover:{y:-4},className:"group bg-card-bg rounded-2xl p-8 border border-transparent hover:border-accent-gold/30 transition-all duration-300 will-change-transform",children:[u.jsx("div",{className:"w-12 h-12 bg-accent-gold/10 rounded-xl flex items-center justify-center mb-6 group-hover:bg-accent-gold/20 transition-colors duration-300",children:u.jsx("div",{className:"text-accent-gold",children:e})}),u.jsx("h3",{className:"text-xl font-semibold text-white mb-3",children:t}),u.jsx("p",{className:"text-text-secondary mb-6 leading-relaxed",children:n}),u.jsx("ul",{className:"space-y-3",children:i.map((a,s)=>u.jsxs("li",{className:"flex items-start gap-3",children:[u.jsx(FS,{className:"w-5 h-5 text-accent-gold flex-shrink-0 mt-0.5"}),u.jsx("span",{className:"text-text-secondary text-sm",children:a})]},s))})]}),qE=()=>{const e=[{icon:u.jsx(zS,{className:"w-6 h-6"}),title:"Financial Advisory",description:"Expert guidance for complex financial challenges and strategic planning.",features:["CFO Advisory Services","Financial Planning & Analysis","Treasury Management","M&A Support"]},{icon:u.jsx(LS,{className:"w-6 h-6"}),title:"Data Analytics",description:"Transform data into actionable business intelligence and insights.",features:["Business Intelligence","Predictive Analytics","Data Visualization","Performance Metrics"]},{icon:u.jsx(DS,{className:"w-6 h-6"}),title:"Business Consulting",description:"Strategic consulting to drive operational excellence and growth.",features:["Process Optimization","Risk Management","Compliance Advisory","Strategic Planning"]},{icon:u.jsx(JS,{className:"w-6 h-6"}),title:"Technology",description:"Implement and optimize the technology stack that powers your finance function—from planning tools to AI-powered analytics.",features:["Adaptive Planning & Anaplan","AI/ML Implementation","Workflow Automation","Systems Integration"]},{icon:u.jsx(IS,{className:"w-6 h-6"}),title:"AI Services",description:"Leverage artificial intelligence to automate processes and gain competitive insights.",features:["AI Strategy & Roadmap","Machine Learning Implementation","Process Automation","Intelligent Analytics"]},{icon:u.jsx(MS,{className:"w-6 h-6"}),title:"Accounting Services",description:"Accurate, timely, and compliant financial reporting and bookkeeping.",features:["Bookkeeping","Financial Reporting","Audit Support","GAAP/IFRS Compliance"]}];return u.jsx("section",{id:"services",className:"py-24 bg-dark-blue",children:u.jsxs("div",{className:"max-w-[1200px] mx-auto px-4 sm:px-6 lg:px-8",children:[u.jsxs(I.div,{initial:{opacity:0,y:30},whileInView:{opacity:1,y:0},viewport:{once:!0},transition:{duration:.6,ease:[.25,.46,.45,.94]},className:"text-center mb-16",children:[u.jsxs("div",{className:"flex items-center justify-center gap-2 mb-4",children:[u.jsx("span",{className:"w-8 h-[2px] bg-accent-gold"}),u.jsx("span",{className:"text-accent-gold text-sm font-medium tracking-wider uppercase",children:"What We Offer"}),u.jsx("span",{className:"w-8 h-[2px] bg-accent-gold"})]}),u.jsx("h2",{className:"text-3xl sm:text-4xl font-bold text-white mb-4",children:"Our Services"}),u.jsx("p",{className:"text-text-secondary text-lg max-w-2xl mx-auto",children:"Comprehensive solutions tailored to your business needs, delivered by experienced professionals with a track record of success."})]}),u.jsx("div",{className:"grid sm:grid-cols-2 lg:grid-cols-3 gap-6",children:e.map((t,n)=>u.jsx(WE,{icon:t.icon,title:t.title,description:t.description,features:t.features,index:n},t.title))})]})})},$E=[{id:"1",title:"The SMB CEO's Data-Driven Playbook",subtitle:"100 Critical Questions with Analytical Frameworks for Success",description:"A comprehensive guide for CEOs of small and medium businesses. Covers everything from financial metrics to team performance, giving you the questions you need to ask—and the frameworks to find the answers.",targetAudience:"CEOs of SMBs (50–500 employees)",format:["Hardcover","Paperback","Kindle"],price:"$29.99",amazonLink:"https://amazon.com",coverImage:"/images/book-cover-ceo.png",status:"available"},{id:"2",title:"The SMB CFO's Financial Analytics Handbook",subtitle:"Unlocking Profitability and Growth",description:"The essential guide for CFOs looking to transform their finance function with analytics, AI, and modern tools.",targetAudience:"CFOs, VPs of Finance, Controllers",format:["Hardcover","Paperback","Kindle"],price:"$34.99",amazonLink:"#",coverImage:"/images/book-cover-cfo.png",status:"coming-soon"},{id:"3",title:"The SMB COO's Operations Excellence Blueprint",subtitle:"Mastering Processes, People & Profitability",description:"Practical frameworks for operations leaders who need to scale efficiently without losing quality.",targetAudience:"COOs, Operations Directors",format:["Hardcover","Paperback","Kindle"],price:"$29.99",amazonLink:"#",coverImage:"/images/book-cover-coo.png",status:"coming-soon"},{id:"4",title:"The SMB CTO's Technology Leadership Guide",subtitle:"Practical Strategies for Small & Medium Businesses",description:"A comprehensive guide for technology leaders covering infrastructure, security, team building, and digital transformation.",targetAudience:"CTOs, CIOs, VP of Engineering",format:["Hardcover","Paperback","Kindle"],price:"$34.99",amazonLink:"#",coverImage:"/images/book-cover-cto.png",status:"coming-soon"}],HE=[{id:"anomaly_detection",title:"Anomaly Detection",coverImage:"/images/anomaly_detection_cover.png"},{id:"dead_reckoning",title:"Dead Reckoning",coverImage:"/images/dead_reckoning_cover.png"},{id:"gradient_descent",title:"Gradient Descent",coverImage:"/images/gradient_descent_cover.png"},{id:"katz_centrality",title:"Katz Centrality",coverImage:"/images/katz_centrality_cover.png"},{id:"latent_factor",title:"Latent Factor",coverImage:"/images/latent_factor_cover.png"},{id:"markov_chain",title:"Markov Chain",coverImage:"/images/markov_chain_cover.png"},{id:"monte_carlo",title:"Monte Carlo",coverImage:"/images/monte_carlo_cover.png"},{id:"null_hypothesis",title:"Null Hypothesis",coverImage:"/images/null_hypothesis_cover.png"},{id:"overfitting",title:"Overfitting",coverImage:"/images/overfitting_cover.png"},{id:"selection_bias",title:"Selection Bias",coverImage:"/images/selection_bias_cover.png"},{id:"survivorship_bias",title:"Survivorship Bias",coverImage:"/images/survivorship_bias_cover.png"}],GE=[{id:"the_confidence_interval",title:"The Confidence Interval",coverImage:"/images/the_confidence_interval_cover.png"},{id:"the_deduction",title:"The Deduction",coverImage:"/images/the_deduction_cover.png"},{id:"the_false_positive",title:"The False Positive",coverImage:"/images/the_false_positive_cover.png"},{id:"the_hidden_variable",title:"The Hidden Variable",coverImage:"/images/the_hidden_variable_cover.png"},{id:"the_holdout",title:"The Holdout",coverImage:"/images/the_holdout_cover.png"},{id:"the_outlier",title:"The Outlier",coverImage:"/images/the_outlier_cover.png"},{id:"the_posterior",title:"The Posterior",coverImage:"/images/the_posterior_cover.png"},{id:"the_prior",title:"The Prior",coverImage:"/images/the_prior_cover.png"},{id:"type_ii",title:"Type II",coverImage:"/images/type_ii_cover.png"},{id:"null_and_void",title:"Null and Void",coverImage:"/images/null_and_void_cover.png"},{id:"ground_truth",title:"Ground Truth",coverImage:"/images/ground_truth_cover.png"},{id:"regression",title:"Regression",coverImage:"/images/regression_cover.png"},{id:"signal_to_noise",title:"Signal to Noise",coverImage:"/images/signal_to_noise_cover.png"},{id:"the_black_swan",title:"The Black Swan",coverImage:"/images/the_black_swan_cover.png"}],KE=[{id:"bayesian_prior",title:"Bayesian Prior",coverImage:"/images/bayesian_prior_cover.png"},{id:"causal_inference",title:"Causal Inference",coverImage:"/images/causal_inference_cover.png"},{id:"convergence",title:"Convergence",coverImage:"/images/convergence_cover.png"},{id:"decision_tree",title:"Decision Tree",coverImage:"/images/decision_tree_cover.png"},{id:"ensemble",title:"Ensemble",coverImage:"/images/ensemble_cover.png"},{id:"entropy",title:"Entropy",coverImage:"/images/entropy_cover.png"},{id:"the_eigenvalue",title:"The Eigenvalue",coverImage:"/images/the_eigenvalue_cover.png"},{id:"the_gradient",title:"The Gradient",coverImage:"/images/the_gradient_cover.png"},{id:"overfitting_sf",title:"Overfitting",coverImage:"/images/overfitting_sf_cover.png"},{id:"principal_components",title:"Principal Components",coverImage:"/images/principal_components_cover.png"},{id:"random_walk",title:"Random Walk",coverImage:"/images/random_walk_cover.png"},{id:"signal",title:"Signal",coverImage:"/images/signal_cover.png"}],QE=({book:e,index:t})=>u.jsxs(I.div,{initial:{opacity:0,y:20},whileInView:{opacity:1,y:0},viewport:{once:!0},transition:{duration:.4,delay:t*.04},className:"group cursor-pointer",children:[u.jsxs("div",{className:"aspect-[2/3] relative overflow-hidden rounded-lg shadow-lg group-hover:shadow-xl transition-shadow duration-300",children:[u.jsx("img",{src:e.coverImage,alt:e.title,className:"w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"}),u.jsx("div",{className:"absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-3",children:u.jsx("span",{className:"text-white text-xs font-medium leading-tight",children:e.title})})]}),u.jsx("p",{className:"mt-2 text-text-secondary text-xs text-center leading-tight line-clamp-2",children:e.title})]},e.id),Fo=({title:e,description:t,books:n,accentColor:i,delay:r=0})=>u.jsxs(I.div,{initial:{opacity:0,y:20},whileInView:{opacity:1,y:0},viewport:{once:!0},transition:{duration:.6,delay:r},className:"mb-16",children:[u.jsxs("h3",{className:"text-2xl font-bold text-white mb-2 flex items-center gap-3",children:[u.jsx("span",{className:`w-2 h-8 ${i} rounded-full`}),e]}),u.jsx("p",{className:"text-text-secondary mb-8 ml-5",children:t}),u.jsx("div",{className:"grid grid-cols-3 sm:grid-cols-4 md:grid-cols-6 lg:grid-cols-6 gap-4",children:n.map((a,s)=>u.jsx(QE,{book:a,index:s},a.id))})]}),YE=()=>u.jsxs("section",{id:"books",className:"py-24 bg-dark-blue relative overflow-hidden",children:[u.jsx("div",{className:"absolute inset-0 bg-gradient-to-br from-dark-blue via-navy to-dark-blue"}),u.jsx("div",{className:"absolute top-0 right-0 w-96 h-96 bg-accent-gold/5 rounded-full blur-3xl"}),u.jsx("div",{className:"absolute bottom-0 left-0 w-72 h-72 bg-accent-gold/3 rounded-full blur-3xl"}),u.jsxs("div",{className:"relative z-10 max-w-[1200px] mx-auto px-4 sm:px-6 lg:px-8",children:[u.jsxs(I.div,{initial:{opacity:0,y:30},whileInView:{opacity:1,y:0},viewport:{once:!0},transition:{duration:.6},className:"text-center mb-16",children:[u.jsxs("div",{className:"flex items-center justify-center gap-2 mb-4",children:[u.jsx("span",{className:"w-8 h-[2px] bg-accent-gold"}),u.jsx("span",{className:"text-accent-gold text-sm font-medium tracking-wider uppercase",children:"Publications"}),u.jsx("span",{className:"w-8 h-[2px] bg-accent-gold"})]}),u.jsx("h2",{className:"text-3xl sm:text-4xl lg:text-5xl font-bold text-white mb-6",children:"Data-Driven Playbooks for the C-Suite"}),u.jsx("p",{className:"text-text-secondary text-lg max-w-2xl mx-auto",children:"Practical guides, frameworks, and questions to help executives make better decisions and drive real ROI from their data."})]}),u.jsx("div",{className:"grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-24",children:$E.map((e,t)=>u.jsxs(I.div,{initial:{opacity:0,y:30},whileInView:{opacity:1,y:0},viewport:{once:!0},transition:{duration:.6,delay:t*.1},className:"bg-card-bg border border-accent-gold/20 rounded-2xl overflow-hidden shadow-card hover:shadow-card-hover transition-all duration-300",children:[u.jsxs("div",{className:"aspect-[2/3] relative overflow-hidden",children:[e.status==="coming-soon"&&u.jsx("div",{className:"absolute top-4 right-4 bg-accent-gold text-dark-blue text-xs font-bold px-3 py-1 rounded-full z-10",children:"Coming Soon"}),u.jsx("img",{src:e.coverImage,alt:e.title,className:"w-full h-full object-cover"})]}),u.jsxs("div",{className:"p-6",children:[u.jsx("p",{className:"text-text-secondary text-sm mb-4 line-clamp-3",children:e.description}),u.jsxs("div",{className:"space-y-2 mb-6",children:[u.jsxs("div",{className:"flex items-center gap-2 text-sm",children:[u.jsx("span",{className:"text-accent-gold",children:"Target:"}),u.jsx("span",{className:"text-text-secondary",children:e.targetAudience})]}),u.jsxs("div",{className:"flex items-center gap-2 text-sm",children:[u.jsx("span",{className:"text-accent-gold",children:"Formats:"}),u.jsx("span",{className:"text-text-secondary",children:e.format.join(", ")})]}),u.jsxs("div",{className:"flex items-center gap-2 text-sm",children:[u.jsx("span",{className:"text-accent-gold",children:"Price:"}),u.jsx("span",{className:"text-white font-semibold",children:e.price})]})]}),e.status==="available"?u.jsxs(ze,{onClick:()=>window.open(e.amazonLink,"_blank"),className:"w-full bg-accent-gold text-dark-blue hover:bg-accent-gold-hover font-semibold",children:[u.jsx(XS,{className:"w-4 h-4 mr-2"}),"Buy on Amazon"]}):u.jsx(ze,{disabled:!0,variant:"outline",className:"w-full border-accent-gold/50 text-accent-gold/50 cursor-not-allowed",children:"Coming Soon"})]})]},e.id))}),u.jsxs(I.div,{initial:{opacity:0,y:20},whileInView:{opacity:1,y:0},viewport:{once:!0},transition:{duration:.6},className:"text-center mb-12",children:[u.jsxs("div",{className:"flex items-center justify-center gap-2 mb-4",children:[u.jsx("span",{className:"w-8 h-[2px] bg-accent-gold"}),u.jsx("span",{className:"text-accent-gold text-sm font-medium tracking-wider uppercase",children:"Fiction Series"}),u.jsx("span",{className:"w-8 h-[2px] bg-accent-gold"})]}),u.jsx("h2",{className:"text-3xl sm:text-4xl font-bold text-white mb-4",children:"Data Science Fiction"}),u.jsx("p",{className:"text-text-secondary text-lg max-w-2xl mx-auto",children:"Where algorithms meet narrative — three fiction series that bring data science concepts to life through gripping stories."})]}),u.jsx(Fo,{title:"Analytics Thrillers",description:"11 gripping thrillers where data science, statistics, and machine learning collide with crime and conspiracy.",books:HE,accentColor:"bg-purple-500",delay:0}),u.jsx(Fo,{title:"Data Science Mysteries",description:"14 mysteries in the tradition of Agatha Christie, Raymond Chandler, and Stieg Larsson — solved with data.",books:GE,accentColor:"bg-accent-gold",delay:.1}),u.jsx(Fo,{title:"Analytics SF Series",description:"12 science fiction novels exploring AI, algorithms, and the future of humanity through the lens of data science.",books:KE,accentColor:"bg-blue-500",delay:.2}),u.jsx(I.div,{initial:{opacity:0,y:30},whileInView:{opacity:1,y:0},viewport:{once:!0},transition:{duration:.6,delay:.4},className:"mt-4 text-center",children:u.jsxs("div",{className:"bg-card-bg border border-accent-gold/20 rounded-2xl p-8 max-w-2xl mx-auto",children:[u.jsx("h3",{className:"text-xl font-bold text-white mb-4",children:"Bulk Orders & Corporate Licensing"}),u.jsx("p",{className:"text-text-secondary mb-6",children:"Interested in purchasing multiple copies for your leadership team or organization? Contact us for volume discounts and corporate licensing options."}),u.jsxs(ze,{onClick:()=>window.location.href="mailto:books@factsconsulting.com",variant:"outline",className:"border-2 border-accent-gold text-accent-gold hover:bg-accent-gold/10 font-semibold px-8",children:[u.jsx(BS,{className:"w-4 h-4 mr-2"}),"Contact for Bulk Orders"]})]})})]})]}),XE=()=>{const[e,t]=g.useState(!1);return u.jsxs("section",{className:"py-24 bg-dark-blue relative overflow-hidden",children:[u.jsx("div",{className:"absolute top-0 right-0 w-96 h-96 bg-accent-gold/5 rounded-full blur-3xl"}),u.jsx("div",{className:"absolute bottom-0 left-0 w-72 h-72 bg-accent-gold/3 rounded-full blur-3xl"}),u.jsxs("div",{className:"max-w-[1200px] mx-auto px-4 sm:px-6 lg:px-8 relative z-10",children:[u.jsxs(I.div,{initial:{opacity:0,y:30},whileInView:{opacity:1,y:0},viewport:{once:!0},transition:{duration:.6,ease:[.25,.46,.45,.94]},className:"text-center mb-12",children:[u.jsxs("div",{className:"flex items-center justify-center gap-2 mb-4",children:[u.jsx("span",{className:"w-8 h-[2px] bg-accent-gold"}),u.jsx("span",{className:"text-accent-gold text-sm font-medium tracking-wider uppercase",children:"Learn More"}),u.jsx("span",{className:"w-8 h-[2px] bg-accent-gold"})]}),u.jsx("h2",{className:"text-3xl sm:text-4xl font-bold text-white mb-4",children:"See How FACTS Can Transform Your Business"}),u.jsx("p",{className:"text-text-secondary text-lg max-w-2xl mx-auto",children:"Watch our explainer video to understand how our comprehensive approach to finance, analytics, consulting, and transformation delivers results."})]}),u.jsxs(I.div,{initial:{opacity:0,scale:.95},whileInView:{opacity:1,scale:1},viewport:{once:!0},transition:{duration:.6,delay:.2,ease:[.25,.46,.45,.94]},className:"relative max-w-4xl mx-auto",children:[u.jsx("div",{className:"relative rounded-2xl overflow-hidden shadow-2xl border border-accent-gold/20",children:e?u.jsxs("div",{className:"relative aspect-video bg-navy",children:[u.jsx("iframe",{width:"100%",height:"100%",src:"https://www.youtube.com/embed/VvI1cPaXksM?autoplay=1",title:"FACTS Consulting Explainer Video",frameBorder:"0",allow:"accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture",allowFullScreen:!0,className:"absolute inset-0"}),u.jsx("button",{onClick:()=>t(!1),className:"absolute top-4 right-4 w-10 h-10 bg-dark-blue/80 rounded-full flex items-center justify-center text-white hover:bg-dark-blue transition-colors z-10",children:u.jsx(Vv,{className:"w-5 h-5"})})]}):u.jsxs("div",{className:"relative aspect-video bg-navy",children:[u.jsx("img",{src:"/images/analytics-visual.jpg",alt:"Video thumbnail",className:"w-full h-full object-cover opacity-60"}),u.jsx("div",{className:"absolute inset-0 bg-gradient-to-t from-dark-blue/80 via-dark-blue/40 to-transparent"}),u.jsx("div",{className:"absolute inset-0 flex items-center justify-center",children:u.jsx(I.button,{whileHover:{scale:1.1},whileTap:{scale:.95},onClick:()=>t(!0),className:"w-20 h-20 bg-accent-gold rounded-full flex items-center justify-center shadow-lg hover:shadow-accent-gold/30 transition-shadow duration-300",children:u.jsx(GS,{className:"w-8 h-8 text-dark-blue ml-1",fill:"currentColor"})})}),u.jsxs("div",{className:"absolute bottom-6 left-6 right-6",children:[u.jsxs("div",{className:"flex items-center gap-3 mb-2",children:[u.jsx("span",{className:"px-3 py-1 bg-accent-gold/20 rounded-full text-accent-gold text-xs font-medium",children:"Explainer Video"}),u.jsx("span",{className:"text-text-secondary text-sm",children:"2:30 min"})]}),u.jsx("h3",{className:"text-white text-xl font-semibold",children:"The FACTS Approach to Business Transformation"})]})]})}),u.jsx(I.div,{initial:{opacity:0,y:20},whileInView:{opacity:1,y:0},viewport:{once:!0},transition:{duration:.5,delay:.4},className:"grid sm:grid-cols-3 gap-6 mt-8",children:[{title:"Our Process",desc:"How we work with clients"},{title:"Success Stories",desc:"Real results from real businesses"},{title:"Get Started",desc:"Your journey with FACTS"}].map((n,i)=>u.jsxs("div",{className:"bg-card-bg rounded-xl p-6 border border-accent-gold/10 text-center",children:[u.jsx("h4",{className:"text-white font-semibold mb-1",children:n.title}),u.jsx("p",{className:"text-text-secondary text-sm",children:n.desc})]},i))})]})]})]})},ZE=({end:e,duration:t=2e3,start:n=0})=>{const[i,r]=g.useState(n),[a,s]=g.useState(!1),o=g.useRef(null),l=g.useRef(!1);return g.useEffect(()=>{const c=new IntersectionObserver(([d])=>{d.isIntersecting&&!l.current&&(s(!0),l.current=!0)},{threshold:.3});return o.current&&c.observe(o.current),()=>c.disconnect()},[]),g.useEffect(()=>{if(!a)return;let c,d;const f=m=>{c||(c=m);const x=Math.min((m-c)/t,1),w=1-Math.pow(1-x,3),v=Math.floor(n+(e-n)*w);r(v),x<1&&(d=requestAnimationFrame(f))};return d=requestAnimationFrame(f),()=>cancelAnimationFrame(d)},[a,e,t,n]),{count:i,ref:o}},JE=({value:e,suffix:t="",label:n})=>{const{count:i,ref:r}=ZE({end:e,duration:2e3});return u.jsxs("div",{ref:r,className:"text-center",children:[u.jsxs("div",{className:"text-4xl sm:text-5xl font-bold text-accent-gold mb-2",children:[i,t]}),u.jsx("div",{className:"text-text-secondary text-sm",children:n})]})},eA=()=>{const e=[{icon:u.jsx(NS,{className:"w-5 h-5"}),text:"Industry-specialized knowledge"},{icon:u.jsx(Bv,{className:"w-5 h-5"}),text:"People-first approach"},{icon:u.jsx(ZS,{className:"w-5 h-5"}),text:"Outcome-driven solutions"},{icon:u.jsx(_v,{className:"w-5 h-5"}),text:"Proven track record"}],t=[{value:150,suffix:"+",label:"Clients Served"},{value:500,suffix:"+",label:"Projects Completed"},{value:25,suffix:"+",label:"Years Experience"},{value:98,suffix:"%",label:"Client Satisfaction"}];return u.jsx("section",{id:"about",className:"py-24 bg-navy",children:u.jsxs("div",{className:"max-w-[1200px] mx-auto px-4 sm:px-6 lg:px-8",children:[u.jsxs("div",{className:"grid lg:grid-cols-2 gap-8 mb-16",children:[u.jsx(I.div,{initial:{opacity:0,x:-30},whileInView:{opacity:1,x:0},viewport:{once:!0},transition:{duration:.6,ease:[.25,.46,.45,.94]},className:"relative",children:u.jsxs("div",{className:"relative rounded-2xl overflow-hidden shadow-card",children:[u.jsx("img",{src:"/images/team-meeting.jpg",alt:"FACTS Consulting Team",className:"w-full h-64 object-cover"}),u.jsx("div",{className:"absolute inset-0 bg-gradient-to-t from-dark-blue/60 to-transparent"}),u.jsxs("div",{className:"absolute bottom-4 left-4",children:[u.jsx("span",{className:"px-3 py-1 bg-accent-gold/20 rounded-full text-accent-gold text-xs font-medium",children:"Our Team"}),u.jsx("p",{className:"text-white text-sm mt-1",children:"Expert consultants at work"})]})]})}),u.jsx(I.div,{initial:{opacity:0,x:30},whileInView:{opacity:1,x:0},viewport:{once:!0},transition:{duration:.6,ease:[.25,.46,.45,.94]},className:"relative",children:u.jsxs("div",{className:"relative rounded-2xl overflow-hidden shadow-card",children:[u.jsx("img",{src:"/images/partnership.jpg",alt:"Business Partnership",className:"w-full h-64 object-cover"}),u.jsx("div",{className:"absolute inset-0 bg-gradient-to-t from-dark-blue/60 to-transparent"}),u.jsxs("div",{className:"absolute bottom-4 left-4",children:[u.jsx("span",{className:"px-3 py-1 bg-accent-gold/20 rounded-full text-accent-gold text-xs font-medium",children:"Partnership"}),u.jsx("p",{className:"text-white text-sm mt-1",children:"Building lasting relationships"})]})]})})]}),u.jsxs("div",{className:"grid lg:grid-cols-2 gap-16 items-center",children:[u.jsxs(I.div,{initial:{opacity:0,y:30},whileInView:{opacity:1,y:0},viewport:{once:!0},transition:{duration:.6,ease:[.25,.46,.45,.94]},children:[u.jsxs("div",{className:"flex items-center gap-2 mb-4",children:[u.jsx("span",{className:"w-8 h-[2px] bg-accent-gold"}),u.jsx("span",{className:"text-accent-gold text-sm font-medium tracking-wider uppercase",children:"Why FACTS"})]}),u.jsx("h2",{className:"text-3xl sm:text-4xl font-bold text-white mb-6",children:"Why Choose FACTS?"}),u.jsx("p",{className:"text-text-secondary text-lg leading-relaxed mb-8",children:"We combine deep industry expertise with innovative approaches to deliver measurable results. Our team of seasoned professionals brings decades of experience across finance, analytics, and transformation."}),u.jsx("div",{className:"space-y-4",children:e.map((n,i)=>u.jsxs(I.div,{initial:{opacity:0,x:-20},whileInView:{opacity:1,x:0},viewport:{once:!0},transition:{duration:.4,delay:i*.1,ease:[.25,.46,.45,.94]},className:"flex items-center gap-4",children:[u.jsx("div",{className:"w-10 h-10 bg-accent-gold/10 rounded-lg flex items-center justify-center flex-shrink-0",children:u.jsx("div",{className:"text-accent-gold",children:n.icon})}),u.jsx("span",{className:"text-white font-medium",children:n.text})]},i))})]}),u.jsx(I.div,{initial:{opacity:0,y:30},whileInView:{opacity:1,y:0},viewport:{once:!0},transition:{duration:.6,ease:[.25,.46,.45,.94]},className:"grid grid-cols-2 gap-6",children:t.map((n,i)=>u.jsx(I.div,{initial:{opacity:0,y:20},whileInView:{opacity:1,y:0},viewport:{once:!0},transition:{duration:.5,delay:i*.1,ease:[.25,.46,.45,.94]},className:"bg-card-bg rounded-2xl p-6 border border-accent-gold/10 text-center",children:u.jsx(JE,{value:n.value,suffix:n.suffix,label:n.label})},n.label))})]})]})})},tA=({quote:e,author:t,role:n,index:i})=>u.jsxs(I.div,{initial:{opacity:0,y:30},whileInView:{opacity:1,y:0},viewport:{once:!0,margin:"-50px"},transition:{duration:.6,delay:i*.15,ease:[.25,.46,.45,.94]},whileHover:{y:-4},className:"bg-white rounded-2xl p-8 shadow-card hover:shadow-card-hover transition-all duration-300 will-change-transform",children:[u.jsx("div",{className:"w-12 h-12 bg-accent-gold/10 rounded-xl flex items-center justify-center mb-6",children:u.jsx(KS,{className:"w-6 h-6 text-accent-gold"})}),u.jsxs("p",{className:"text-gray-700 leading-relaxed mb-6 text-lg",children:['"',e,'"']}),u.jsxs("div",{className:"flex items-center gap-4",children:[u.jsx("div",{className:"w-12 h-12 bg-dark-blue rounded-full flex items-center justify-center",children:u.jsx("span",{className:"text-accent-gold font-semibold text-lg",children:t.split(" ").map(r=>r[0]).join("")})}),u.jsxs("div",{children:[u.jsx("div",{className:"font-semibold text-dark-blue",children:t}),u.jsx("div",{className:"text-gray-500 text-sm",children:n})]})]})]}),nA=()=>{const e=[{quote:"FACTS transformed our financial operations, reducing month-end close time by 60% and improving reporting accuracy dramatically.",author:"Sarah Mitchell",role:"CFO, TechVentures Inc."},{quote:"Their analytics expertise helped us uncover insights that drove a 25% increase in operational efficiency.",author:"Michael Chen",role:"COO, Global Manufacturing Co."},{quote:"The team's strategic guidance was instrumental in our successful acquisition and integration process.",author:"Jennifer Rodriguez",role:"CEO, Healthcare Solutions Group"}];return u.jsx("section",{className:"py-24 bg-light-bg",children:u.jsxs("div",{className:"max-w-[1200px] mx-auto px-4 sm:px-6 lg:px-8",children:[u.jsxs(I.div,{initial:{opacity:0,y:30},whileInView:{opacity:1,y:0},viewport:{once:!0},transition:{duration:.6,ease:[.25,.46,.45,.94]},className:"text-center mb-16",children:[u.jsxs("div",{className:"flex items-center justify-center gap-2 mb-4",children:[u.jsx("span",{className:"w-8 h-[2px] bg-accent-gold"}),u.jsx("span",{className:"text-accent-gold text-sm font-medium tracking-wider uppercase",children:"Testimonials"}),u.jsx("span",{className:"w-8 h-[2px] bg-accent-gold"})]}),u.jsx("h2",{className:"text-3xl sm:text-4xl font-bold text-dark-blue mb-4",children:"What Our Clients Say"}),u.jsx("p",{className:"text-gray-600 text-lg max-w-2xl mx-auto",children:"Trusted by businesses across industries to deliver results that matter."})]}),u.jsx("div",{className:"grid md:grid-cols-2 lg:grid-cols-3 gap-6",children:e.map((t,n)=>u.jsx(tA,{quote:t.quote,author:t.author,role:t.role,index:n},t.author))})]})})},zm=({post:e,index:t,featured:n=!1})=>{const i=r=>new Date(r).toLocaleDateString("en-US",{month:"short",day:"numeric",year:"numeric"});return n?u.jsx(I.article,{initial:{opacity:0,y:30},whileInView:{opacity:1,y:0},viewport:{once:!0},transition:{duration:.6,delay:t*.1,ease:[.25,.46,.45,.94]},className:"group bg-white rounded-2xl overflow-hidden shadow-card hover:shadow-card-hover transition-all duration-300 will-change-transform",children:u.jsx(ai,{to:`/blog/${e.slug}`,className:"block",children:u.jsxs("div",{className:"grid md:grid-cols-2",children:[u.jsxs("div",{className:"relative h-64 md:h-full overflow-hidden",children:[u.jsx("img",{src:e.image,alt:e.title,className:"w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"}),u.jsx("div",{className:"absolute top-4 left-4",children:u.jsx("span",{className:"px-3 py-1 bg-accent-gold text-dark-blue text-xs font-semibold rounded-full",children:e.category})})]}),u.jsxs("div",{className:"p-8 flex flex-col justify-center",children:[u.jsxs("div",{className:"flex items-center gap-4 text-sm text-gray-500 mb-4",children:[u.jsxs("span",{className:"flex items-center gap-1",children:[u.jsx(ls,{className:"w-4 h-4"}),i(e.date)]}),u.jsxs("span",{className:"flex items-center gap-1",children:[u.jsx(Xl,{className:"w-4 h-4"}),e.readTime]})]}),u.jsx("h3",{className:"text-2xl font-bold text-dark-blue mb-3 group-hover:text-accent-gold transition-colors duration-200",children:e.title}),u.jsx("p",{className:"text-gray-600 mb-6 line-clamp-3",children:e.excerpt}),u.jsxs("div",{className:"flex items-center justify-between mt-auto",children:[u.jsxs("span",{className:"flex items-center gap-2 text-sm text-gray-500",children:[u.jsx(Zl,{className:"w-4 h-4"}),e.author]}),u.jsxs("span",{className:"flex items-center gap-2 text-accent-gold font-semibold group/btn",children:["Read More",u.jsx(Er,{className:"w-4 h-4 group-hover/btn:translate-x-1 transition-transform"})]})]})]})]})})}):u.jsx(I.article,{initial:{opacity:0,y:30},whileInView:{opacity:1,y:0},viewport:{once:!0},transition:{duration:.6,delay:t*.1,ease:[.25,.46,.45,.94]},whileHover:{y:-4},className:"group bg-white rounded-2xl overflow-hidden shadow-card hover:shadow-card-hover transition-all duration-300 will-change-transform",children:u.jsxs(ai,{to:`/blog/${e.slug}`,className:"block",children:[u.jsxs("div",{className:"relative h-48 overflow-hidden",children:[u.jsx("img",{src:e.image,alt:e.title,className:"w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"}),u.jsx("div",{className:"absolute top-4 left-4",children:u.jsx("span",{className:"px-3 py-1 bg-accent-gold text-dark-blue text-xs font-semibold rounded-full",children:e.category})})]}),u.jsxs("div",{className:"p-6",children:[u.jsxs("div",{className:"flex items-center gap-4 text-sm text-gray-500 mb-3",children:[u.jsxs("span",{className:"flex items-center gap-1",children:[u.jsx(ls,{className:"w-4 h-4"}),i(e.date)]}),u.jsxs("span",{className:"flex items-center gap-1",children:[u.jsx(Xl,{className:"w-4 h-4"}),e.readTime]})]}),u.jsx("h3",{className:"text-lg font-bold text-dark-blue mb-2 group-hover:text-accent-gold transition-colors duration-200 line-clamp-2",children:e.title}),u.jsx("p",{className:"text-gray-600 text-sm mb-4 line-clamp-2",children:e.excerpt}),u.jsxs("div",{className:"flex items-center justify-between",children:[u.jsxs("span",{className:"flex items-center gap-1 text-xs text-gray-500",children:[u.jsx(Zl,{className:"w-3 h-3"}),e.author]}),u.jsxs("span",{className:"flex items-center gap-1 text-accent-gold text-sm font-semibold group/btn",children:["Read",u.jsx(Er,{className:"w-3 h-3 group-hover/btn:translate-x-1 transition-transform"})]})]})]})]})})},ds=[{id:"1",title:"Navigating the Post-Financial Crisis Landscape: A CFO's Guide",excerpt:"Key strategies for financial recovery and building resilient financial operations in the aftermath of the 2008 crisis.",content:`The global financial crisis of 2008 fundamentally changed how businesses approach financial management. As we move through 2010, CFOs face a landscape marked by increased regulatory scrutiny, tighter credit markets, and stakeholders demanding greater transparency. This article explores the essential strategies for navigating this new environment.

## Building Financial Resilience

The crisis taught us that financial resilience is not optional—it's essential for survival. Organizations that weathered the storm best were those with strong cash reserves, diversified revenue streams, and conservative debt levels. Today's CFOs must prioritize:

### Cash Flow Management
Cash is king, now more than ever. Implementing robust cash flow forecasting systems, optimizing working capital, and maintaining adequate liquidity buffers should be top priorities. Many organizations discovered during the crisis that their cash flow models were inadequate for extreme scenarios.

### Scenario Planning
Traditional budgeting approaches proved insufficient during the crisis. Forward-looking CFOs are now implementing dynamic scenario planning that models multiple economic outcomes and their potential impacts on the business.

## Regulatory Compliance

The Dodd-Frank Act and other regulatory responses to the crisis have created new compliance burdens. Financial leaders must stay ahead of evolving requirements while ensuring their organizations maintain operational efficiency.

## Stakeholder Communication

Investors, board members, and employees all demand more frequent and transparent financial communication. Developing clear, consistent messaging about financial performance and strategy has become a critical CFO responsibility.

The organizations that thrive in this new environment will be those that learned from the crisis and adapted their financial management approaches accordingly.`,author:"Michael Chen, Senior Financial Advisor",date:"2010-03-15",category:"Finance",image:"/images/hero-visual.jpg",readTime:"8 min",slug:"navigating-post-crisis-landscape"},{id:"2",title:"The Rise of FP&A: Transforming Finance from Accounting to Strategy",excerpt:"How Financial Planning and Analysis is evolving from a back-office function to a strategic business partner.",content:`Financial Planning and Analysis (FP&A) has undergone a dramatic transformation over the past decade. What was once viewed primarily as a budgeting and reporting function has evolved into a critical strategic capability that drives business decisions.

## The Evolution of FP&A

Traditional finance functions focused heavily on historical reporting—what happened last month, last quarter, last year. While this information remains important, modern FP&A teams are increasingly focused on forward-looking analysis that helps leaders make better decisions about the future.

### Key Drivers of Change

Several factors have driven this evolution:

**Technology Advancements**: Modern FP&A systems can process vast amounts of data and generate insights that would have been impossible just a few years ago. Cloud-based solutions have made sophisticated analytics accessible to organizations of all sizes.

**Business Complexity**: Global operations, multiple product lines, and diverse customer segments require more sophisticated planning approaches than traditional spreadsheets can support.

**Competitive Pressure**: Organizations need to make decisions faster and with greater confidence. FP&A provides the analytical foundation for agile decision-making.

## Best Practices for Modern FP&A

### Integrated Planning
Breaking down silos between financial planning, sales forecasting, and operational planning creates a more coherent and realistic view of the business.

### Driver-Based Modeling
Rather than simply extrapolating historical trends, leading FP&A teams build models based on the key drivers of business performance.

### Continuous Planning
Annual budgeting cycles are giving way to continuous planning processes that allow organizations to adapt quickly to changing conditions.

## The Future of FP&A

As we look ahead, FP&A will continue to evolve. Predictive analytics, artificial intelligence, and machine learning will enable even more sophisticated forecasting and scenario analysis. The FP&A function will become increasingly embedded in business operations, providing real-time insights that drive action.

Organizations that invest in building world-class FP&A capabilities will have a significant competitive advantage in an increasingly complex business environment.`,author:"Sarah Mitchell, FP&A Director",date:"2012-06-22",category:"Finance",image:"/images/team-meeting.jpg",readTime:"7 min",slug:"rise-of-fpa-strategy"},{id:"3",title:"Treasury Management in a Low-Interest-Rate Environment",excerpt:"Strategies for optimizing cash management and investment returns when traditional options offer minimal yield.",content:`The Federal Reserve's decision to maintain near-zero interest rates has created significant challenges for corporate treasury managers. Traditional cash management strategies that relied on interest income are no longer viable, forcing treasury professionals to rethink their approaches.

## The New Reality

For decades, treasury managers could rely on money market funds, commercial paper, and short-term government securities to generate meaningful returns on excess cash. Today's environment requires fundamentally different thinking about cash management.

### Preserving Principal
In a low-yield environment, the primary objective shifts from maximizing returns to preserving principal and maintaining liquidity. This requires a more conservative approach to cash investments.

### Opportunity Cost
Organizations must carefully evaluate the opportunity cost of holding excess cash. In many cases, deploying cash into business operations or strategic investments may generate better returns than any financial instrument.

## Alternative Strategies

### Supply Chain Finance
Programs that allow suppliers to receive early payment in exchange for discounts can generate effective returns while strengthening supplier relationships.

### Strategic Investments
Some organizations are deploying excess cash into strategic acquisitions or investments that align with their business objectives.

### Debt Reduction
With borrowing costs at historic lows, reducing debt may not be the optimal strategy, but organizations with high-cost debt should consider refinancing opportunities.

## Risk Management

The search for yield can lead to taking inappropriate risks. Treasury managers must maintain discipline and avoid reaching for yield in ways that could jeopardize the organization's financial stability.

## Looking Ahead

While interest rates will eventually rise, the timing and magnitude of increases remain uncertain. Treasury managers should prepare for multiple scenarios and maintain flexibility in their cash management strategies.

The current environment requires creativity and discipline, but organizations that adapt their treasury management approaches can still optimize their financial position despite challenging market conditions.`,author:"David Park, Treasury Manager",date:"2014-09-08",category:"Finance",image:"/images/analytics-visual.jpg",readTime:"6 min",slug:"treasury-low-interest-rates"},{id:"4",title:"M&A Due Diligence: Lessons from Failed Deals",excerpt:"Critical lessons from merger and acquisition failures and how to avoid common pitfalls in the due diligence process.",content:`The history of mergers and acquisitions is littered with failed deals—transactions that destroyed value rather than creating it. Understanding why these deals failed is essential for any organization considering an acquisition or merger.

## The High Cost of Failure

Failed M&A transactions can be extraordinarily expensive. Beyond the direct costs of advisory fees and integration expenses, failed deals can damage organizational morale, distract management attention, and destroy shareholder value.

## Common Failure Patterns

### Cultural Incompatibility
Many deals fail because the acquiring organization underestimates the importance of cultural fit. Differences in management styles, decision-making processes, and organizational values can undermine even the most strategically sound transactions.

### Overpayment
Competitive auction processes and strategic desperation can lead to overpayment. When acquisition prices reflect optimistic assumptions that fail to materialize, the deal is destined to disappoint.

### Integration Challenges
The period immediately following closing is critical. Organizations that fail to plan for integration—or that execute poorly—often find that expected synergies fail to materialize.

### Due Diligence Gaps
Inadequate due diligence can leave acquiring organizations exposed to risks they didn't understand. This is particularly common in areas like environmental liabilities, intellectual property disputes, and regulatory compliance.

## Best Practices for Success

### Rigorous Due Diligence
Comprehensive due diligence should extend beyond financial analysis to include operational, cultural, and strategic assessment.

### Conservative Valuation
Base valuations on realistic assumptions rather than best-case scenarios. Build in appropriate margins of safety.

### Integration Planning
Develop detailed integration plans before closing, with clear accountability and milestone tracking.

### Cultural Assessment
Invest time in understanding the target organization's culture and developing plans for cultural integration.

## The Path Forward

M&A remains a powerful tool for growth and value creation, but success requires discipline, thoroughness, and realistic expectations. Organizations that learn from the failures of others can improve their odds of achieving successful outcomes.`,author:"Jennifer Rodriguez, M&A Advisor",date:"2016-11-30",category:"Finance",image:"/images/partnership.jpg",readTime:"8 min",slug:"ma-due-diligence-lessons"},{id:"5",title:"Working Capital Optimization: Unlocking Hidden Value",excerpt:"Practical strategies for improving cash conversion cycles and freeing up cash trapped in operations.",content:`Working capital represents a significant investment for most businesses, yet many organizations fail to optimize their cash conversion cycles. Improving working capital management can free up substantial cash while reducing financing costs and operational risk.

## Understanding the Cash Conversion Cycle

The cash conversion cycle measures how long it takes for a company to convert its investments in inventory and other resources into cash flows from sales. A shorter cycle means less cash tied up in operations and improved liquidity.

### Components of the Cycle

**Days Inventory Outstanding (DIO)**: How long inventory sits before being sold.
**Days Sales Outstanding (DSO)**: How long it takes to collect payment from customers.
**Days Payable Outstanding (DPO)**: How long the company takes to pay its suppliers.

The cash conversion cycle equals DIO plus DSO minus DPO.

## Inventory Optimization

### Demand Forecasting
Improved forecasting reduces the need for safety stock and minimizes obsolete inventory. Modern demand planning systems use statistical methods to generate more accurate predictions.

### Just-in-Time Approaches
Where feasible, just-in-time inventory systems can dramatically reduce inventory levels while maintaining service levels.

### SKU Rationalization
Many organizations carry too many product variants. Rationalizing SKUs can reduce complexity and inventory requirements.

## Receivables Management

### Credit Policy Review
Regular review of credit policies ensures that credit terms align with customer risk profiles and competitive requirements.

### Collection Processes
Structured collection processes with clear escalation procedures can reduce DSO without damaging customer relationships.

### Electronic Payments
Encouraging customers to use electronic payment methods can accelerate cash collection.

## Payables Strategy

### Supplier Negotiations
Negotiating favorable payment terms with suppliers can extend DPO without damaging relationships.

### Early Payment Programs
Where suppliers offer discounts for early payment, the effective return on these programs often exceeds alternative investment returns.

## The Bottom Line

Working capital optimization is not a one-time exercise but an ongoing process of continuous improvement. Organizations that master this discipline can generate significant competitive advantages through improved cash flow and reduced financing costs.`,author:"Robert Kim, Working Capital Specialist",date:"2018-02-14",category:"Finance",image:"/images/hero-visual.jpg",readTime:"7 min",slug:"working-capital-optimization"},{id:"6",title:"The CFO's Role in Enterprise Risk Management",excerpt:"How chief financial officers are expanding their responsibilities to encompass comprehensive enterprise risk management.",content:`The financial crisis of 2008 highlighted the critical importance of effective risk management. In its aftermath, CFOs are increasingly taking on broader responsibility for enterprise risk management (ERM), recognizing that financial performance cannot be separated from the management of business risks.

## The Evolution of Risk Management

Traditional risk management often operated in silos, with different departments managing their own risks independently. This approach failed to capture the interconnected nature of business risks and their potential cumulative impacts.

### The Case for Integration

Enterprise risk management takes a holistic view of risk across the organization. Rather than managing risks in isolation, ERM considers how different risks interact and how they might affect the organization's ability to achieve its strategic objectives.

## The CFO's Unique Position

CFOs are uniquely positioned to lead ERM efforts because of their:

**Cross-Functional Visibility**: Finance touches every part of the organization, giving CFOs visibility into risks across business units.

**Analytical Capabilities**: Financial analysis skills translate well to risk assessment and quantification.

**Board Access**: CFOs typically have strong relationships with board members and can effectively communicate risk information.

**Incentive Alignment**: CFO compensation is often tied to financial performance, creating natural alignment with risk management objectives.

## Key Risk Categories

### Strategic Risks
Risks related to the organization's strategy, including competitive threats, market shifts, and technological disruption.

### Operational Risks
Risks arising from day-to-day operations, including supply chain disruptions, equipment failures, and human error.

### Financial Risks
Risks related to financial performance, including market risk, credit risk, and liquidity risk.

### Compliance Risks
Risks related to regulatory compliance and legal obligations.

## Implementing ERM

Successful ERM implementation requires:

**Executive Commitment**: Risk management must be a priority for senior leadership.
**Risk Culture**: The organization must develop a culture where risk awareness is embedded in decision-making.
**Risk Appetite**: Clear articulation of the organization's risk appetite helps guide risk-taking decisions.
**Risk Metrics**: Effective measurement and reporting of risk exposures enables informed decision-making.

## The Path Forward

As business environments become increasingly complex and volatile, the importance of effective enterprise risk management will only grow. CFOs who embrace this expanded role will be well-positioned to help their organizations navigate uncertainty and achieve sustainable success.`,author:"Lisa Thompson, Risk Management Director",date:"2020-05-20",category:"Finance",image:"/images/team-meeting.jpg",readTime:"8 min",slug:"cfo-enterprise-risk-management"},{id:"7",title:"Cost Reduction Strategies That Preserve Value",excerpt:"How to cut costs strategically without undermining the capabilities that drive competitive advantage.",content:`In challenging economic environments, cost reduction becomes a priority for most organizations. However, not all cost cuts are created equal. Indiscriminate cost cutting can damage the capabilities that create competitive advantage, ultimately destroying more value than it saves.

## The Cost Reduction Dilemma

Organizations face a fundamental tension: the need to reduce costs while maintaining the capabilities that drive success. Cutting too deeply can undermine customer service, product quality, and employee morale—all of which can have long-term negative consequences.

### The Value of Strategic Cost Management

Strategic cost management takes a differentiated approach to cost reduction, recognizing that not all costs are equal. Some costs are investments in capabilities that create competitive advantage; others are simply waste that should be eliminated.

## Framework for Strategic Cost Reduction

### 1. Understand Cost Drivers
Before cutting costs, understand what drives them. Activity-based costing and process analysis can reveal where costs are truly incurred and why.

### 2. Differentiate Strategic from Non-Strategic Costs
Identify which costs support capabilities that create competitive advantage. These should be protected, even enhanced, while non-strategic costs are targeted for reduction.

### 3. Focus on Process Improvement
Many costs are the result of inefficient processes. Improving processes can reduce costs while actually improving outcomes.

### 4. Consider Structural Changes
Sometimes cost reduction requires structural changes—consolidating facilities, reorganizing operations, or changing business models.

## Common Pitfalls to Avoid

### Across-the-Board Cuts
Requiring all departments to cut costs by the same percentage fails to recognize that some areas may be already efficient while others have significant waste.

### Short-Term Focus
Cost reductions that create long-term problems—such as damaging customer relationships or losing key talent—often destroy more value than they save.

### Ignoring Implementation Costs
Some cost reduction initiatives have significant implementation costs that must be factored into the analysis.

## Best Practices for Success

### Engage Employees
Employees often have the best ideas for cost reduction. Engaging them in the process can generate better ideas and improve implementation.

### Measure and Monitor
Establish clear metrics for cost reduction initiatives and monitor progress regularly.

### Communicate Transparently
Clear communication about why cost reduction is necessary and how decisions are made helps maintain employee engagement.

## Conclusion

Effective cost reduction requires strategic thinking, not just financial analysis. Organizations that take a thoughtful, differentiated approach can reduce costs while preserving—and even enhancing—the capabilities that drive competitive advantage.`,author:"Mark Williams, Cost Management Consultant",date:"2022-08-12",category:"Finance",image:"/images/analytics-visual.jpg",readTime:"7 min",slug:"cost-reduction-preserve-value"},{id:"8",title:"Financial Reporting in the Age of Real-Time Data",excerpt:"How modern technology is transforming financial reporting from periodic snapshots to continuous monitoring.",content:`The traditional monthly close process is becoming increasingly anachronistic in a world where business moves at digital speed. Modern finance organizations are transforming their reporting capabilities to provide real-time visibility into financial performance.

## The Limitations of Traditional Reporting

Monthly or quarterly financial reports served businesses well in an era when information moved slowly and decisions could wait. Today's business environment demands faster insight and more agile decision-making.

### The Cost of Delay

When financial information is weeks old by the time it's reported, opportunities may be missed and problems may fester. Real-time visibility enables faster response to both opportunities and challenges.

## Enabling Technologies

### Cloud-Based ERP Systems
Modern cloud ERP systems can process transactions in real-time, eliminating the batch processing delays that characterized older systems.

### Data Integration Platforms
Integration platforms can consolidate data from multiple sources, providing a unified view of financial performance across the organization.

### Visualization Tools
Modern visualization tools make it easy to present complex financial data in intuitive, actionable formats.

### Mobile Access
Mobile capabilities ensure that financial information is available whenever and wherever it's needed.

## The Continuous Close

Some organizations are moving toward a "continuous close" model where financial records are always up-to-date, eliminating the need for a traditional month-end close process.

### Benefits
- Faster access to financial information
- Reduced month-end workload
- Earlier identification of issues
- More time for analysis and insight

### Challenges
- Requires robust processes and controls
- May require significant technology investment
- Cultural change for finance organizations

## Best Practices for Real-Time Reporting

### Start with Key Metrics
Focus initial efforts on the metrics that matter most to business decisions.

### Ensure Data Quality
Real-time reporting is only valuable if the underlying data is accurate.

### Build Analytical Capabilities
Technology enables reporting, but people generate insight. Invest in building analytical capabilities within the finance team.

### Maintain Appropriate Controls
Real-time processing doesn't mean abandoning financial controls. Ensure that appropriate controls are maintained.

## The Future of Financial Reporting

As technology continues to evolve, financial reporting will become increasingly real-time and increasingly integrated with operational data. Finance organizations that embrace this transformation will be better positioned to support agile decision-making in a fast-moving business environment.`,author:"Amanda Foster, Financial Systems Director",date:"2024-11-03",category:"Finance",image:"/images/hero-visual.jpg",readTime:"6 min",slug:"financial-reporting-real-time"},{id:"9",title:"Capital Structure Optimization: Balancing Debt and Equity",excerpt:"Strategic approaches to determining the optimal mix of debt and equity financing for your organization.",content:`Capital structure decisions have profound implications for organizational value, risk, and flexibility. Determining the optimal mix of debt and equity requires careful analysis of multiple factors and ongoing monitoring as conditions change.

## The Capital Structure Trade-off

Debt and equity each have advantages and disadvantages. Debt is typically cheaper and provides tax benefits, but increases financial risk. Equity is more expensive but provides greater flexibility and lower risk.

### The Cost of Capital

The weighted average cost of capital (WACC) combines the costs of debt and equity, weighted by their proportions in the capital structure. Minimizing WACC maximizes firm value—at least in theory.

### Practical Considerations

In practice, capital structure decisions must consider:
- Industry norms and competitive positioning
- Business risk and cash flow stability
- Growth opportunities and capital requirements
- Market conditions and access to capital
- Management preferences and risk tolerance

## Debt Capacity Analysis

Determining how much debt an organization can support requires analysis of:

### Cash Flow Coverage
Can the organization generate sufficient cash flow to service debt obligations under various scenarios?

### Covenant Compliance
Will the organization be able to maintain compliance with debt covenants under stress?

### Credit Ratings
What impact will additional debt have on credit ratings and borrowing costs?

### Financial Flexibility
Will the debt level leave adequate flexibility to respond to opportunities or challenges?

## Optimal Capital Structure

While theory suggests an optimal capital structure, in practice the optimal structure is a range rather than a precise point. Organizations should aim to stay within this range while maintaining flexibility to adjust as conditions change.

### Dynamic Capital Structure

Smart organizations view capital structure as dynamic rather than static. They adjust their mix of debt and equity in response to changing market conditions, business needs, and opportunities.

## Implementation Considerations

### Communication
Clear communication with investors, rating agencies, and other stakeholders about capital structure strategy is essential.

### Governance
Capital structure decisions should involve appropriate governance, with board oversight of significant changes.

### Monitoring
Ongoing monitoring of capital structure metrics ensures the organization stays within its target range.

## Conclusion

Capital structure optimization is both an art and a science. While analytical frameworks provide guidance, judgment and experience are essential for making sound decisions in a complex and changing environment.`,author:"James Peterson, Corporate Finance Advisor",date:"2025-01-25",category:"Finance",image:"/images/partnership.jpg",readTime:"8 min",slug:"capital-structure-optimization"},{id:"10",title:"Financial Transformation: Building the Finance Function of the Future",excerpt:"A comprehensive framework for transforming finance from a transactional function to a strategic business partner.",content:`The finance function is undergoing a fundamental transformation. Technology is automating traditional accounting and reporting activities, creating opportunities for finance professionals to focus on higher-value activities that drive business performance.

## The Case for Transformation

Traditional finance functions spend the majority of their time on transactional activities—processing transactions, reconciling accounts, and producing reports. While these activities are necessary, they add limited value to the business.

### The Opportunity

Technology can automate many transactional activities, freeing finance professionals to focus on analysis, insight, and decision support. This transformation can significantly increase the value that finance delivers to the organization.

## The Transformation Framework

### 1. Process Standardization and Automation
Standardize processes across the organization and implement automation to reduce manual effort and improve efficiency.

### 2. Data and Analytics
Build capabilities to collect, integrate, and analyze data from across the organization, generating insights that drive better decisions.

### 3. Business Partnership
Position finance professionals as business partners who work alongside operational leaders to drive performance.

### 4. Talent and Culture
Develop the skills and culture needed for a transformed finance function, emphasizing analytical and communication capabilities.

## Key Transformation Initiatives

### Shared Services and Outsourcing
Consolidating transactional activities into shared service centers or outsourcing them can generate significant efficiency gains.

### Cloud-Based Systems
Modern cloud-based financial systems offer greater functionality, lower costs, and easier integration than traditional on-premise solutions.

### Advanced Analytics
Investing in advanced analytics capabilities enables finance to generate deeper insights and more accurate predictions.

### Continuous Improvement
Establishing a culture of continuous improvement ensures that the finance function continues to evolve and improve over time.

## Overcoming Transformation Challenges

### Change Management
Transformation requires significant change, which can meet resistance. Effective change management is essential for success.

### Talent Gaps
The transformed finance function requires different skills than the traditional function. Addressing talent gaps through training and recruitment is critical.

### Technology Investment
Transformation requires technology investment. Building a compelling business case and securing funding can be challenging.

## The Path Forward

Financial transformation is a journey, not a destination. Organizations that embrace this journey and continuously evolve their finance functions will be best positioned to support business success in an increasingly complex environment.`,author:"Catherine Lee, Finance Transformation Leader",date:"2026-02-10",category:"Finance",image:"/images/team-meeting.jpg",readTime:"9 min",slug:"financial-transformation-future"},{id:"11",title:"Business Intelligence: From Data to Decision",excerpt:"How organizations are leveraging business intelligence tools to transform raw data into actionable insights.",content:`The explosion of data available to businesses has created both opportunities and challenges. Organizations that can effectively harness this data gain significant competitive advantages. Business intelligence (BI) provides the tools and frameworks for turning data into actionable insights.

## The BI Evolution

Business intelligence has evolved significantly over the past decade. What began as simple reporting tools has grown into sophisticated platforms that can analyze massive datasets and generate predictive insights.

### From Reporting to Analytics

Traditional BI focused primarily on historical reporting—what happened last month or last quarter. Modern BI encompasses a much broader range of capabilities, including:

- **Descriptive Analytics**: Understanding what happened
- **Diagnostic Analytics**: Understanding why it happened
- **Predictive Analytics**: Predicting what will happen
- **Prescriptive Analytics**: Recommending what to do

## Key BI Capabilities

### Data Integration
Modern BI platforms can integrate data from multiple sources—ERP systems, CRM platforms, external databases, and more—creating a unified view of business performance.

### Self-Service Analytics
User-friendly interfaces enable business users to access and analyze data without relying on IT or data specialists.

### Visualization
Powerful visualization capabilities make it easy to present complex data in intuitive, actionable formats.

### Mobile Access
Mobile BI ensures that decision-makers have access to critical information wherever they are.

## Implementing BI Successfully

### Start with Business Questions
Effective BI implementations begin with clear business questions. What decisions need to be made? What information would improve those decisions?

### Ensure Data Quality
BI is only as good as the data it analyzes. Investing in data quality is essential for BI success.

### Build Analytical Capabilities
Technology enables BI, but people generate insight. Building analytical capabilities throughout the organization is critical.

### Focus on Adoption
BI tools provide no value if they're not used. Focus on user adoption through training, support, and demonstrating value.

## The Future of BI

As technology continues to evolve, BI will become increasingly sophisticated. Artificial intelligence and machine learning will enable more advanced analytics, while natural language interfaces will make BI accessible to even more users.

Organizations that invest in BI capabilities today will be well-positioned to leverage these future advances and maintain competitive advantage.`,author:"Brian Chen, BI Solutions Architect",date:"2010-07-20",category:"Analytics",image:"/images/analytics-visual.jpg",readTime:"7 min",slug:"business-intelligence-data-decision"},{id:"12",title:"Predictive Analytics: Forecasting the Future",excerpt:"How predictive analytics is helping organizations anticipate trends and make proactive decisions.",content:`Predictive analytics uses statistical techniques and machine learning algorithms to analyze historical data and make predictions about future events. Organizations across industries are leveraging predictive analytics to anticipate customer behavior, forecast demand, identify risks, and optimize operations.

## The Power of Prediction

The ability to predict future outcomes with reasonable accuracy provides significant competitive advantages. Organizations can:

- Anticipate customer needs and preferences
- Optimize inventory and resource allocation
- Identify and mitigate risks before they materialize
- Target marketing efforts more effectively
- Improve operational efficiency

## Key Predictive Analytics Techniques

### Regression Analysis
Regression models identify relationships between variables and can predict outcomes based on input factors.

### Time Series Analysis
Time series techniques analyze patterns in historical data to forecast future values.

### Classification Models
Classification algorithms categorize data into predefined groups, enabling applications like customer segmentation and fraud detection.

### Machine Learning
Advanced machine learning techniques can identify complex patterns in large datasets that traditional statistical methods might miss.

## Applications Across Industries

### Retail
Demand forecasting, customer churn prediction, and personalized marketing.

### Financial Services
Credit risk assessment, fraud detection, and algorithmic trading.

### Healthcare
Patient outcome prediction, disease progression modeling, and resource optimization.

### Manufacturing
Predictive maintenance, quality control, and supply chain optimization.

## Building Predictive Analytics Capabilities

### Data Foundation
Predictive analytics requires high-quality historical data. Organizations must invest in data collection, integration, and quality management.

### Analytical Talent
Effective predictive analytics requires skilled data scientists and analysts who understand both the techniques and the business context.

### Technology Infrastructure
Modern predictive analytics requires appropriate technology infrastructure, including data platforms, analytical tools, and computing resources.

### Business Integration
Predictive insights must be integrated into business processes and decision-making to generate value.

## Challenges and Considerations

### Model Accuracy
Predictive models are never perfect. Understanding and communicating model limitations is essential.

### Data Privacy
Predictive analytics often involves sensitive data. Organizations must ensure appropriate privacy protections.

### Ethical Considerations
Predictive models can perpetuate biases present in historical data. Organizations must be mindful of ethical implications.

## The Path Forward

Predictive analytics is becoming increasingly accessible to organizations of all sizes. Cloud-based platforms and pre-built solutions are lowering the barriers to entry, while advances in artificial intelligence are expanding what's possible.

Organizations that invest in predictive analytics capabilities will be better positioned to anticipate change and make proactive decisions in an increasingly complex business environment.`,author:"Dr. Emily Watson, Data Science Director",date:"2012-10-15",category:"Analytics",image:"/images/hero-visual.jpg",readTime:"8 min",slug:"predictive-analytics-forecasting"},{id:"13",title:"Data Visualization: Making Complex Data Understandable",excerpt:"Best practices for creating visualizations that communicate insights clearly and drive action.",content:`The human brain processes visual information far more efficiently than text or numbers. Effective data visualization can transform complex datasets into clear, actionable insights that drive better decision-making.

## The Power of Visualization

Well-designed visualizations can:
- Reveal patterns and trends hidden in raw data
- Communicate complex information quickly
- Engage audiences more effectively than tables of numbers
- Support storytelling with data
- Drive action by making insights clear

## Principles of Effective Visualization

### Know Your Audience
Different audiences have different needs. Executives may need high-level summaries, while analysts require detailed views. Design visualizations for the intended audience.

### Choose the Right Chart Type
Different chart types serve different purposes:
- **Bar charts** for comparing categories
- **Line charts** for showing trends over time
- **Pie charts** for showing proportions (use sparingly)
- **Scatter plots** for showing relationships
- **Heat maps** for showing patterns in matrices

### Simplify and Focus
Remove unnecessary elements that don't contribute to understanding. Focus attention on the key insights you want to communicate.

### Use Color Strategically
Color can highlight important information, encode data values, and create visual hierarchy. Use it intentionally, not decoratively.

## Common Visualization Mistakes

### Chart Junk
Unnecessary decorations that distract from the data.

### Misleading Scales
Manipulating axis scales to exaggerate or minimize differences.

### Overloading
Trying to show too much information in a single visualization.

### Inappropriate Chart Types
Using chart types that don't effectively communicate the data.

## Tools and Technologies

### Business Intelligence Platforms
Modern BI platforms include robust visualization capabilities that integrate with data sources and enable interactive exploration.

### Specialized Visualization Tools
Tools like Tableau and Power BI offer advanced visualization capabilities for power users.

### Programming Libraries
For custom visualizations, libraries like D3.js provide virtually unlimited flexibility.

## Building a Data Visualization Culture

### Training and Education
Help employees understand visualization principles and best practices.

### Standards and Guidelines
Establish organizational standards for consistent, effective visualizations.

### Sharing and Collaboration
Create opportunities for teams to share effective visualizations and learn from each other.

## The Future of Data Visualization

Advances in technology are expanding visualization possibilities. Interactive visualizations, real-time dashboards, and augmented reality are opening new frontiers for data communication.

Organizations that invest in data visualization capabilities will be better positioned to leverage their data assets and drive data-informed decision-making.`,author:"Jessica Park, Data Visualization Specialist",date:"2014-01-08",category:"Analytics",image:"/images/analytics-visual.jpg",readTime:"6 min",slug:"data-visualization-best-practices"},{id:"14",title:"Big Data: Opportunities and Challenges for Enterprise Analytics",excerpt:"Understanding the implications of big data for enterprise analytics and how to build capabilities to leverage it.",content:`The term "big data" has become ubiquitous in business discussions, but what does it really mean for enterprise analytics? This article explores the opportunities and challenges that big data presents for organizations seeking to leverage analytics for competitive advantage.

## What is Big Data?

Big data is typically characterized by the "three Vs":

### Volume
The sheer quantity of data being generated. Organizations now collect data from countless sources—transactions, sensors, social media, and more.

### Velocity
The speed at which data is generated and must be processed. Real-time analytics requires processing data as it's created.

### Variety
The different types of data being collected. Structured data in databases, unstructured text, images, video, and more.

## Opportunities

### Deeper Insights
More data can enable deeper insights into customer behavior, operational performance, and market trends.

### Real-Time Analytics
The ability to analyze data in real-time enables faster, more responsive decision-making.

### New Data Sources
Big data technologies make it feasible to analyze data sources that were previously too difficult or expensive to process.

### Competitive Advantage
Organizations that effectively leverage big data can gain significant competitive advantages.

## Challenges

### Technology Infrastructure
Big data requires appropriate technology infrastructure for storage, processing, and analysis.

### Data Quality
More data doesn't necessarily mean better data. Ensuring data quality at scale is a significant challenge.

### Talent Shortage
There's a shortage of professionals with the skills needed to work with big data technologies.

### Privacy and Security
Collecting and analyzing large volumes of data raises significant privacy and security concerns.

## Building Big Data Capabilities

### Start with Business Objectives
Don't pursue big data for its own sake. Start with clear business objectives and determine what data and analytics are needed to achieve them.

### Invest in Infrastructure
Big data requires appropriate technology infrastructure. Cloud-based solutions can reduce upfront investment and provide scalability.

### Develop Talent
Build or acquire the skills needed to work with big data technologies. This may include data engineers, data scientists, and analysts.

### Ensure Data Governance
Establish appropriate data governance practices to ensure data quality, privacy, and security.

## The Path Forward

Big data is not a panacea, but it does present significant opportunities for organizations that can effectively leverage it. Success requires clear objectives, appropriate technology, skilled talent, and strong data governance.

Organizations that thoughtfully build big data capabilities will be well-positioned to compete in an increasingly data-driven business environment.`,author:"Michael Torres, Big Data Architect",date:"2016-04-22",category:"Analytics",image:"/images/team-meeting.jpg",readTime:"7 min",slug:"big-data-enterprise-analytics"},{id:"15",title:"Customer Analytics: Understanding and Predicting Behavior",excerpt:"How customer analytics is transforming marketing, sales, and customer service strategies.",content:`Understanding customer behavior has always been critical to business success. Customer analytics provides the tools and techniques for analyzing customer data to understand preferences, predict behavior, and optimize customer interactions.

## The Customer Analytics Revolution

The digital transformation of business has created unprecedented opportunities for customer analytics. Every digital interaction generates data that can be analyzed to understand customer behavior.

### Data Sources

**Transaction Data**: Purchase history, order values, product preferences.
**Digital Behavior**: Website visits, clicks, time on site, navigation patterns.
**Social Media**: Social interactions, sentiment, influence.
**Customer Service**: Support interactions, complaints, satisfaction scores.

## Key Customer Analytics Applications

### Customer Segmentation
Grouping customers based on shared characteristics enables targeted marketing and personalized service.

### Churn Prediction
Identifying customers at risk of leaving allows proactive retention efforts.

### Lifetime Value Analysis
Understanding the long-term value of different customer segments helps prioritize acquisition and retention investments.

### Next Best Action
Predicting which products or services a customer is most likely to be interested in enables personalized recommendations.

### Sentiment Analysis
Analyzing customer sentiment from social media, reviews, and other sources provides early warning of issues and opportunities.

## Implementing Customer Analytics

### Data Integration
Customer data often resides in multiple systems. Integration is essential for a complete customer view.

### Identity Resolution
Connecting data from different sources to individual customers can be challenging but is essential for accurate analysis.

### Privacy Compliance
Customer analytics must comply with privacy regulations and respect customer preferences.

### Actionable Insights
Analytics must generate insights that can be acted upon to improve customer experiences and business outcomes.

## Organizational Capabilities

### Technology
Customer analytics requires appropriate technology for data collection, integration, storage, and analysis.

### Skills
Effective customer analytics requires skills in data science, statistics, and domain expertise.

### Processes
Analytics insights must be integrated into business processes to generate value.

### Culture
A customer-centric culture that values data-driven decision-making is essential.

## The Future of Customer Analytics

Advances in artificial intelligence and machine learning are expanding the possibilities for customer analytics. Real-time personalization, predictive customer service, and automated customer journey optimization are becoming increasingly feasible.

Organizations that invest in customer analytics capabilities will be better positioned to attract, retain, and grow profitable customer relationships.`,author:"Rachel Kim, Customer Analytics Lead",date:"2018-07-12",category:"Analytics",image:"/images/partnership.jpg",readTime:"8 min",slug:"customer-analytics-behavior"},{id:"16",title:"Operational Analytics: Driving Efficiency Through Data",excerpt:"How organizations are using analytics to optimize operations and reduce costs.",content:`Operational analytics applies data analysis techniques to operational processes, enabling organizations to identify inefficiencies, optimize resource allocation, and improve performance. From manufacturing to logistics to service delivery, operational analytics is transforming how organizations manage their operations.

## The Case for Operational Analytics

Operational excellence has always been a source of competitive advantage. Operational analytics takes operational excellence to a new level by providing data-driven insights that enable continuous improvement.

### Key Benefits

**Cost Reduction**: Identifying and eliminating waste reduces costs.
**Quality Improvement**: Analyzing quality data helps identify and address root causes of defects.
**Speed Enhancement**: Understanding process bottlenecks enables targeted improvements.
**Resource Optimization**: Better resource allocation improves efficiency and reduces costs.

## Applications Across Industries

### Manufacturing
Quality control, predictive maintenance, production optimization, and supply chain management.

### Logistics
Route optimization, fleet management, warehouse operations, and delivery scheduling.

### Healthcare
Patient flow optimization, resource allocation, and clinical quality improvement.

### Financial Services
Process automation, fraud detection, and risk management.

## Key Analytical Techniques

### Process Mining
Analyzing event logs to understand actual process flows and identify deviations from intended processes.

### Root Cause Analysis
Systematically investigating problems to identify underlying causes rather than symptoms.

### Simulation
Modeling processes to test improvement scenarios before implementation.

### Optimization
Using mathematical techniques to find optimal solutions to complex resource allocation problems.

## Implementation Best Practices

### Start with High-Impact Areas
Focus initial efforts on areas with significant improvement potential.

### Ensure Data Availability
Operational analytics requires data. Ensure that relevant data is being captured and is accessible.

### Build Cross-Functional Teams
Operational improvements often require coordination across functions. Build teams with appropriate representation.

### Measure Results
Establish clear metrics for improvement initiatives and track progress.

### Create a Culture of Continuous Improvement
Operational analytics should be part of an ongoing commitment to excellence, not a one-time project.

## Technology Enablers

### IoT Sensors
Internet of Things sensors generate real-time data on equipment performance, environmental conditions, and more.

### Advanced Analytics Platforms
Modern analytics platforms can process large volumes of operational data and generate actionable insights.

### Visualization Tools
Visualization makes operational data accessible to front-line managers and operators.

## The Path Forward

As technology continues to advance, operational analytics will become increasingly sophisticated and accessible. Organizations that embrace operational analytics will be better positioned to compete on efficiency and quality.

Operational excellence is no longer just about following best practices—it's about continuously using data to identify and implement better practices.`,author:"Thomas Wright, Operations Analytics Consultant",date:"2020-09-28",category:"Analytics",image:"/images/hero-visual.jpg",readTime:"7 min",slug:"operational-analytics-efficiency"},{id:"17",title:"Data Governance: Foundation for Analytics Success",excerpt:"Why data governance is essential for effective analytics and how to build a governance framework.",content:`Data governance provides the framework for managing data assets effectively. Without proper governance, even the most sophisticated analytics capabilities will fail to deliver reliable insights. This article explores why data governance matters and how to build an effective governance program.

## What is Data Governance?

Data governance encompasses the policies, processes, and organizational structures that ensure data is managed as a valuable organizational asset. It addresses questions like:

- Who is responsible for data quality?
- How is data defined and documented?
- Who has access to what data?
- How is data protected and secured?
- How are data-related decisions made?

## Why Data Governance Matters

### Data Quality
Poor data quality undermines analytics. Governance establishes accountability for data quality and processes to maintain it.

### Consistency
Without governance, different parts of the organization may use different definitions and calculations, leading to inconsistent results.

### Compliance
Regulatory requirements for data privacy, security, and reporting require governance frameworks.

### Trust
Effective governance builds trust in data and analytics, encouraging data-driven decision-making.

## Key Components of Data Governance

### Data Stewardship
Assigning responsibility for data assets to specific individuals or roles.

### Data Quality Management
Establishing standards for data quality and processes to monitor and improve quality.

### Metadata Management
Documenting what data means, where it comes from, and how it's used.

### Data Security
Protecting data from unauthorized access and ensuring appropriate use.

### Data Lifecycle Management
Managing data from creation through archival or deletion.

## Building a Governance Program

### Executive Sponsorship
Effective governance requires executive sponsorship to establish authority and secure resources.

### Stakeholder Engagement
Engage stakeholders from across the organization to ensure governance meets diverse needs.

### Phased Implementation
Start with high-priority areas and expand governance over time.

### Technology Support
Governance tools can automate many governance activities and provide visibility into data assets.

### Continuous Improvement
Governance is not a one-time project. Continuously refine governance based on experience and changing needs.

## Organizational Considerations

### Centralized vs. Federated
Governance can be centralized in a single team or federated across business units. Each approach has advantages and disadvantages.

### Governance Council
Many organizations establish a governance council with representatives from key stakeholder groups to make governance decisions.

### Data Stewards
Data stewards are individuals assigned responsibility for specific data domains.

## The Path Forward

Data governance is foundational for analytics success. Organizations that invest in governance will be better positioned to leverage their data assets effectively and reliably.

While governance may not be glamorous, it's essential. The organizations that succeed with analytics are those that take governance seriously.`,author:"Patricia Moore, Data Governance Director",date:"2022-12-05",category:"Analytics",image:"/images/team-meeting.jpg",readTime:"8 min",slug:"data-governance-analytics-success"},{id:"18",title:"Real-Time Analytics: The Need for Speed",excerpt:"How real-time analytics is enabling faster decision-making and more responsive operations.",content:`In today's fast-moving business environment, the ability to analyze data and act on insights in real-time provides significant competitive advantages. Real-time analytics enables organizations to respond immediately to changing conditions, capitalize on opportunities, and mitigate risks.

## The Case for Real-Time

Traditional analytics often involves batch processing—data is collected, processed, and analyzed on a scheduled basis. While this approach works for many applications, it has limitations:

- Insights are delayed, potentially missing time-sensitive opportunities
- Problems may worsen before they're detected
- Customer interactions lack personalization based on current context

Real-time analytics addresses these limitations by processing and analyzing data as it's generated.

## Real-Time Analytics Applications

### Financial Services
Real-time fraud detection, algorithmic trading, and risk monitoring.

### E-Commerce
Real-time personalization, dynamic pricing, and inventory management.

### Manufacturing
Real-time quality monitoring, predictive maintenance, and production optimization.

### Healthcare
Real-time patient monitoring, clinical decision support, and resource allocation.

## Technology Requirements

### Stream Processing
Technologies like Apache Kafka and Apache Flink enable processing of data streams in real-time.

### In-Memory Computing
In-memory databases and computing platforms provide the speed needed for real-time analysis.

### Event-Driven Architecture
Systems designed to respond to events as they occur enable real-time responsiveness.

### Low-Latency Infrastructure
Network and computing infrastructure must be optimized for low latency.

## Implementation Considerations

### Not Everything Needs to Be Real-Time
Real-time analytics is more complex and expensive than batch processing. Focus real-time efforts on applications where timeliness truly matters.

### Data Quality at Speed
Maintaining data quality in real-time systems is challenging. Build appropriate validation and cleansing into real-time pipelines.

### Scalability
Real-time systems must handle varying loads. Design for scalability from the start.

### Fault Tolerance
Real-time systems must be resilient. Design for failure and ensure continuous operation.

## Organizational Impact

### Decision-Making
Real-time analytics enables faster, more responsive decision-making.

### Operations
Real-time visibility into operations enables immediate response to issues and opportunities.

### Customer Experience
Real-time personalization can significantly enhance customer experiences.

## The Path Forward

Advances in technology are making real-time analytics increasingly accessible. Cloud-based platforms, managed services, and improved tools are lowering the barriers to entry.

Organizations that identify appropriate use cases and build real-time analytics capabilities will be better positioned to compete in a fast-moving business environment.`,author:"Daniel Lee, Real-Time Systems Architect",date:"2024-03-18",category:"Analytics",image:"/images/analytics-visual.jpg",readTime:"7 min",slug:"real-time-analytics-speed"},{id:"19",title:"Analytics Talent: Building the Team You Need",excerpt:"Strategies for recruiting, developing, and retaining analytics talent in a competitive market.",content:`The demand for analytics talent far exceeds supply. Organizations that want to build analytics capabilities must develop effective strategies for attracting, developing, and retaining the people they need.

## The Analytics Talent Landscape

Analytics roles span a wide spectrum, from data engineers who build data pipelines to data scientists who develop sophisticated models to analysts who generate business insights.

### Key Roles

**Data Engineers**: Build and maintain data infrastructure and pipelines.
**Data Scientists**: Develop advanced analytical models and algorithms.
**Data Analysts**: Analyze data to generate business insights.
**Analytics Translators**: Bridge the gap between technical teams and business stakeholders.

## Recruiting Strategies

### Define Roles Clearly
Analytics roles vary widely. Clearly define what you need before recruiting.

### Look Beyond Traditional Sources
Consider candidates from adjacent fields—physics, engineering, economics—who may have relevant analytical skills.

### Emphasize Impact
Analytics professionals are often motivated by the opportunity to make a difference. Emphasize the impact they'll have.

### Offer Competitive Compensation
In a tight market, competitive compensation is essential.

## Developing Analytics Talent

### Training Programs
Invest in training to develop analytics skills in existing employees.

### Mentorship
Pair junior analytics professionals with experienced mentors.

### Cross-Functional Exposure
Give analytics professionals exposure to different business areas to broaden their understanding.

### Conference and Learning Opportunities
Support attendance at conferences and other learning opportunities.

## Retaining Analytics Talent

### Challenging Work
Analytics professionals want interesting, challenging problems to solve.

### Career Paths
Provide clear career paths that allow advancement without requiring management roles.

### Recognition
Recognize and reward analytics contributions.

### Tools and Technology
Provide modern tools and technology that enable analytics professionals to be productive.

## Alternative Approaches

### Outsourcing
Consider outsourcing some analytics activities to specialized firms.

### Partnerships
Partner with universities or research institutions to access talent.

### Automation
Invest in automation and self-service analytics to reduce the need for specialized talent.

## Building an Analytics Culture

Beyond individual talent, building analytics capabilities requires an organizational culture that values data-driven decision-making.

### Executive Support
Leadership must visibly support analytics initiatives.

### Data Access
Make data accessible to those who need it.

### Decision Processes
Integrate analytics into decision-making processes.

### Success Stories
Share success stories that demonstrate the value of analytics.

## The Path Forward

Building analytics talent is a long-term investment. Organizations that take a strategic approach to talent will be better positioned to leverage analytics for competitive advantage.

The analytics talent shortage isn't going away. Organizations that develop effective strategies for attracting, developing, and retaining talent will have a significant advantage.`,author:"Michelle Garcia, Talent Acquisition Director",date:"2025-06-30",category:"Analytics",image:"/images/partnership.jpg",readTime:"8 min",slug:"analytics-talent-building-team"},{id:"20",title:"The Analytics Maturity Model: Assessing Your Organization",excerpt:"A framework for assessing analytics capabilities and planning your analytics journey.",content:`Organizations vary widely in their analytics capabilities. Understanding where your organization stands and where you want to go is essential for planning your analytics journey. The analytics maturity model provides a framework for this assessment.

## Levels of Analytics Maturity

### Level 1: Descriptive
Organizations at this level focus on understanding what happened. They produce reports and dashboards that describe historical performance.

**Characteristics**:
- Reactive reporting
- Limited integration of data sources
- Focus on historical data
- Manual processes

### Level 2: Diagnostic
Organizations at this level seek to understand why things happened. They perform analysis to identify root causes and drivers of performance.

**Characteristics**:
- Ad hoc analysis
- Some data integration
- Focus on understanding causes
- Growing analytical skills

### Level 3: Predictive
Organizations at this level use data to predict what will happen. They build models that forecast future outcomes.

**Characteristics**:
- Predictive modeling
- Integrated data platforms
- Focus on future outcomes
- Advanced analytical capabilities

### Level 4: Prescriptive
Organizations at this level use analytics to recommend actions. They optimize decisions based on analytical insights.

**Characteristics**:
- Optimization and simulation
- Real-time analytics
- Focus on decision support
- Embedded analytics in processes

### Level 5: Cognitive
Organizations at this level use artificial intelligence and machine learning to automate decision-making and continuously learn.

**Characteristics**:
- AI and machine learning
- Autonomous decision-making
- Continuous learning
- Competitive advantage through analytics

## Assessing Your Organization

### Technology
What analytics technologies are in place? Are they integrated? Do they support advanced analytics?

### Data
Is data accessible, integrated, and of high quality? Are there data governance practices in place?

### People
What analytics skills exist in the organization? Is there a culture of data-driven decision-making?

### Processes
Are analytics integrated into business processes? Are insights acted upon?

### Strategy
Is analytics aligned with business strategy? Is there executive support for analytics initiatives?

## Planning Your Journey

### Set Realistic Goals
Be honest about your current state and set realistic goals for advancement.

### Prioritize Investments
Focus investments on areas that will have the greatest impact on business outcomes.

### Build Foundations
Ensure foundational capabilities—data, technology, governance—are in place before pursuing advanced analytics.

### Measure Progress
Establish metrics to track progress toward higher maturity levels.

## Common Pitfalls

### Trying to Skip Levels
Analytics maturity builds on foundations. Trying to implement advanced analytics without basic capabilities in place is likely to fail.

### Technology-First Approach
Technology enables analytics, but people and processes are equally important.

### Ignoring Culture
Analytics maturity requires a culture that values data-driven decision-making.

## The Path Forward

The analytics maturity model provides a roadmap for building analytics capabilities. Organizations that thoughtfully progress through the maturity levels will be well-positioned to leverage analytics for competitive advantage.

Remember that maturity is a journey, not a destination. Even organizations at high maturity levels continue to evolve their capabilities as technology and business needs change.`,author:"Steven Adams, Analytics Strategy Consultant",date:"2026-01-15",category:"Analytics",image:"/images/team-meeting.jpg",readTime:"9 min",slug:"analytics-maturity-model-assessment"},{id:"21",title:"The Art of Management Consulting: Building Client Relationships",excerpt:"Essential principles for establishing trust and delivering value as a management consultant.",content:`Management consulting is fundamentally a relationship business. While analytical skills and industry knowledge are essential, the ability to build strong client relationships ultimately determines success. This article explores the principles that separate exceptional consultants from the merely competent.

## The Foundation of Trust

Trust is the currency of consulting. Clients invite consultants into their organizations, share sensitive information, and rely on their advice for critical decisions. Building this trust requires consistency, integrity, and genuine commitment to client success.

### Demonstrating Competence
Clients must believe that their consultants have the expertise to help them succeed. This competence must be demonstrated through:

**Thorough Preparation**: Understanding the client's industry, competitive position, and challenges before engaging.

**Quality Deliverables**: Producing work that reflects deep thinking and attention to detail.

**Thoughtful Recommendations**: Providing advice that is practical, actionable, and tailored to the client's situation.

### Showing Genuine Care
Clients can tell when consultants are primarily focused on their own interests versus the client's success. Genuine care manifests in:

**Listening Actively**: Taking time to truly understand client concerns and perspectives.

**Going the Extra Mile**: Doing what's needed, not just what's contracted.

**Being Available**: Responding promptly and being accessible when needed.

## Communication Excellence

Effective communication is essential for building relationships and ensuring that recommendations are implemented.

### Clarity and Simplicity
Complex ideas must be communicated clearly. The best consultants can explain sophisticated concepts in terms that any stakeholder can understand.

### Regular Updates
Keeping clients informed of progress, challenges, and emerging insights builds confidence and enables course corrections.

### Managing Expectations
Being clear about what can be delivered, when, and at what cost prevents misunderstandings and disappointments.

## Navigating Difficult Conversations

Consulting often involves telling clients things they don't want to hear. The ability to deliver difficult messages constructively is a critical skill.

### Being Direct but Diplomatic
Address issues head-on while respecting the client's perspective and maintaining the relationship.

### Focusing on Solutions
When identifying problems, always pair them with potential solutions.

### Timing Matters
Choose the right moment and setting for difficult conversations.

## Building Long-Term Partnerships

The most successful consultants view each engagement as the beginning of a long-term relationship, not a one-time transaction.

### Staying Connected
Maintain contact with clients between engagements through periodic check-ins and sharing relevant insights.

### Adding Value Continuously
Look for opportunities to help clients even when not formally engaged.

### Asking for Feedback
Regularly seek feedback on performance and use it to improve.

## The Path Forward

Building strong client relationships is both an art and a science. While techniques can be learned, genuine commitment to client success must come from within. Consultants who master this art will enjoy fulfilling careers and make lasting impacts on the organizations they serve.`,author:"Patricia Williams, Senior Managing Partner",date:"2010-05-12",category:"Consulting",image:"/images/partnership.jpg",readTime:"8 min",slug:"art-of-management-consulting"},{id:"22",title:"Strategic Planning: From Analysis to Action",excerpt:"A practical framework for developing strategic plans that actually get implemented.",content:`Many organizations invest significant time and resources in strategic planning, only to see their plans gather dust on shelves. The gap between planning and execution is one of the most persistent challenges in business. This article provides a practical framework for developing strategic plans that lead to real action and results.

## Why Strategic Plans Fail

Understanding why plans fail is the first step toward creating plans that succeed. Common failure modes include:

### Lack of Clarity
Plans that are vague or overly complex fail to provide clear direction for the organization.

### Insufficient Buy-In
When key stakeholders aren't genuinely committed to the plan, implementation suffers.

### Unrealistic Goals
Overly ambitious goals that ignore organizational capabilities and market realities set the stage for failure.

### Poor Execution
Even good plans fail when execution is weak. This often stems from inadequate resources, unclear accountability, or insufficient monitoring.

## A Framework for Effective Strategic Planning

### 1. Start with a Clear Purpose
Every strategic plan should answer a fundamental question: What are we trying to achieve? This purpose should be:

- **Compelling**: Something that motivates and inspires the organization
- **Clear**: Easily understood by everyone in the organization
- **Achievable**: Realistic given the organization's capabilities and circumstances

### 2. Conduct Rigorous Analysis
Good strategy is grounded in deep understanding of:

**Market Dynamics**: Industry trends, competitive landscape, customer needs.

**Organizational Capabilities**: Strengths, weaknesses, and distinctive competencies.

**External Factors**: Regulatory environment, technological change, economic conditions.

### 3. Develop Clear Strategic Priorities
Focus is essential. Most organizations can only effectively pursue a limited number of strategic initiatives simultaneously. Identify the 3-5 priorities that will have the greatest impact on achieving your purpose.

### 4. Define Specific Initiatives
For each strategic priority, define specific initiatives with:

- Clear objectives
- Assigned accountability
- Required resources
- Timeline and milestones
- Success metrics

### 5. Build Organizational Alignment
Ensure that the entire organization understands and is committed to the strategy through:

- Clear communication
- Involvement of key stakeholders in planning
- Alignment of individual and team goals with strategic priorities

### 6. Implement with Discipline
Execution requires:

**Regular Review**: Monitor progress against milestones and adjust as needed.

**Resource Reallocation**: Be willing to shift resources to high-priority initiatives.

**Problem Solving**: Address obstacles quickly and decisively.

**Celebration of Progress**: Recognize and celebrate achievements along the way.

## The Path Forward

Effective strategic planning is both an analytical and a social process. It requires rigorous analysis to identify the right priorities, and skillful engagement to build the commitment needed for successful implementation. Organizations that master both dimensions will be well-positioned to achieve their strategic aspirations.`,author:"David Chen, Strategy Practice Leader",date:"2012-09-18",category:"Consulting",image:"/images/team-meeting.jpg",readTime:"9 min",slug:"strategic-planning-action"},{id:"23",title:"Change Management: Leading Successful Transformations",excerpt:"Proven approaches for managing organizational change and ensuring lasting adoption.",content:`Organizational change is hard. Studies consistently show that the majority of change initiatives fail to achieve their intended outcomes. Yet some organizations succeed repeatedly. This article explores the approaches that distinguish successful change efforts from failed ones.

## Understanding Change Resistance

Resistance to change is natural and inevitable. Understanding its sources is essential for addressing it effectively.

### Sources of Resistance

**Fear of Loss**: Change often threatens established power, relationships, or ways of working.

**Uncertainty**: People naturally prefer the known to the unknown.

**Lack of Trust**: If people don't trust those leading the change, they'll resist it.

**Different Perspectives**: What looks like resistance may simply be different priorities or concerns.

## A Framework for Leading Change

### 1. Create a Compelling Case
People need to understand why change is necessary. The case for change should:

- Connect to organizational purpose and strategy
- Acknowledge the pain of change while emphasizing the pain of not changing
- Be communicated consistently and repeatedly

### 2. Build a Guiding Coalition
Major change requires leadership from multiple levels and functions. The guiding coalition should:

- Include respected influencers across the organization
- Have the credibility and authority to drive change
- Be genuinely committed to the change effort

### 3. Develop a Clear Vision
The vision should paint a picture of the future that is:

- Desirable: Something people want to be part of
- Clear: Easy to understand and communicate
- Flexible: Adaptable as circumstances change

### 4. Communicate the Vision
Effective communication requires:

- Multiple channels: Use various methods to reach different audiences
- Two-way dialogue: Listen to concerns and questions
- Behavioral consistency: Leaders' actions must align with their words

### 5. Empower Action
Remove obstacles and enable people to act on the vision:

- Address systems and structures that undermine the change
- Provide necessary training and resources
- Recognize and reward progress

### 6. Generate Short-Term Wins
Early successes build momentum and credibility:

- Identify achievable early milestones
- Celebrate accomplishments visibly
- Use wins to build support for continued change

### 7. Consolidate Gains
Use early successes as a foundation for further change:

- Build on credibility from early wins
- Address deeper structural issues
- Continue to develop change leadership

### 8. Anchor Changes in Culture
Ensure that changes stick by embedding them in organizational culture:

- Connect changes to organizational values
- Demonstrate how new approaches improve results
- Develop next-generation leaders who embody the changes

## The Path Forward

Leading change is one of the most challenging and important responsibilities of leadership. While there are no guarantees, following proven approaches significantly increases the odds of success. Organizations that develop strong change management capabilities will be better positioned to adapt and thrive in a changing world.`,author:"Margaret Rodriguez, Change Management Expert",date:"2014-03-25",category:"Consulting",image:"/images/hero-visual.jpg",readTime:"8 min",slug:"change-management-transformations"},{id:"24",title:"Operational Excellence: The Consulting Perspective",excerpt:"How consultants help organizations achieve and sustain operational excellence.",content:`Operational excellence is a journey, not a destination. It requires continuous improvement, disciplined execution, and a culture that values efficiency and quality. This article explores how consulting engagements help organizations achieve and sustain operational excellence.

## The Operational Excellence Imperative

In an increasingly competitive global economy, operational excellence is not optional. Organizations that fail to optimize their operations face cost disadvantages, quality problems, and customer dissatisfaction that can threaten their survival.

### The Consulting Role
Consultants bring several unique contributions to operational excellence efforts:

**External Perspective**: Fresh eyes can see opportunities that internal teams miss due to familiarity.

**Benchmarking Knowledge**: Consultants can compare performance against industry best practices.

**Methodology Expertise**: Proven approaches and tools accelerate improvement efforts.

**Change Management**: Experience driving change across multiple organizations.

## Key Operational Excellence Levers

### Process Optimization
Most operational improvements come from better processes. Key approaches include:

**Process Mapping**: Documenting current processes to identify inefficiencies and bottlenecks.

**Lean Principles**: Eliminating waste and non-value-added activities.

**Six Sigma**: Reducing variation and improving quality through statistical methods.

**Automation**: Using technology to eliminate manual effort and reduce errors.

### Organizational Design
The right organizational structure enables efficient operations:

**Clear Accountability**: Ensuring everyone knows their responsibilities.

**Appropriate Span of Control**: Balancing oversight with empowerment.

**Effective Coordination**: Enabling seamless collaboration across functions.

### Performance Management
What gets measured gets managed:

**Key Metrics**: Identifying the metrics that truly drive performance.

**Regular Review**: Monitoring performance and taking corrective action.

**Continuous Improvement**: Building a culture of ongoing improvement.

## The Consulting Engagement Model

### Diagnostic Phase
Understanding current state and improvement opportunities:

- Process observation and documentation
- Data analysis and benchmarking
- Stakeholder interviews
- Opportunity identification and prioritization

### Design Phase
Developing solutions and implementation plans:

- Process redesign
- Organizational structure recommendations
- Technology requirements
- Implementation roadmap

### Implementation Phase
Executing the improvement plan:

- Pilot testing
- Training and change management
- Full rollout
- Performance monitoring

### Sustainment Phase
Ensuring lasting results:

- Performance management system implementation
- Continuous improvement processes
- Capability building
- Ongoing support

## Common Pitfalls

### Focusing Only on Cost
Operational excellence is about more than cost reduction. Quality, speed, and flexibility matter too.

### Ignoring Culture
Sustainable improvement requires cultural change, not just process change.

### Insufficient Follow-Through
Initial improvements often fade without sustained attention and discipline.

## The Path Forward

Operational excellence is an ongoing journey. Organizations that embrace continuous improvement as a core value will be best positioned to compete and succeed in a dynamic business environment.`,author:"Thomas Kim, Operations Consultant",date:"2016-11-08",category:"Consulting",image:"/images/analytics-visual.jpg",readTime:"7 min",slug:"operational-excellence-consulting"},{id:"25",title:"The Consultant's Toolkit: Essential Frameworks and Methodologies",excerpt:"A guide to the analytical frameworks and methodologies that drive consulting success.",content:`Consultants rely on a variety of frameworks and methodologies to structure their thinking and deliver value to clients. This article provides an overview of the essential tools in the consultant's toolkit.

## Strategy Frameworks

### Porter's Five Forces
Analyzes industry structure and competitive dynamics through five forces: threat of new entrants, bargaining power of suppliers, bargaining power of buyers, threat of substitutes, and competitive rivalry.

### SWOT Analysis
Evaluates organizational Strengths, Weaknesses, Opportunities, and Threats to inform strategic choices.

### The BCG Matrix
Categorizes business units or products into four quadrants (Stars, Cash Cows, Question Marks, Dogs) based on market growth and relative market share.

### Value Chain Analysis
Examines the sequence of activities that create value for customers to identify competitive advantages.

## Problem-Solving Methodologies

### Hypothesis-Driven Problem Solving
Rather than gathering all possible data, develop hypotheses early and test them through targeted analysis. This approach is more efficient and focused.

### Issue Trees
Break complex problems into component parts arranged in a logical hierarchy, enabling systematic analysis.

### MECE Principle
Ensure that analysis is Mutually Exclusive (no overlaps) and Collectively Exhaustive (no gaps) for comprehensive coverage.

### The 80/20 Rule (Pareto Principle)
Focus on the vital few factors that drive the majority of results rather than trying to address everything.

## Analysis Techniques

### Financial Analysis
- **Ratio Analysis**: Evaluating performance through financial ratios
- **DCF Modeling**: Valuing investments through discounted cash flows
- **Scenario Analysis**: Testing outcomes under different assumptions

### Market Analysis
- **Market Sizing**: Estimating total addressable market
- **Segmentation**: Dividing markets into meaningful customer groups
- **Competitive Positioning**: Mapping competitive landscape

### Operational Analysis
- **Process Mapping**: Documenting and analyzing workflows
- **Capacity Analysis**: Evaluating resource constraints
- **Benchmarking**: Comparing performance against best practices

## Communication Frameworks

### Pyramid Principle
Structure communications with the main point first, supported by key arguments, each backed by evidence.

### SCQA Framework
Structure problem statements through Situation, Complication, Question, and Answer.

### Storytelling
Craft compelling narratives that engage audiences and make recommendations memorable.

## Implementation Approaches

### Project Management
- **Work Breakdown Structure**: Decomposing projects into manageable tasks
- **Gantt Charts**: Visualizing project timelines
- **Risk Management**: Identifying and mitigating project risks

### Change Management
- **Stakeholder Analysis**: Understanding and engaging key stakeholders
- **Communication Planning**: Ensuring effective information flow
- **Training and Development**: Building necessary capabilities

## The Path Forward

Frameworks and methodologies are tools, not answers. The best consultants know when to apply which tools and how to adapt them to specific situations. Mastery of these tools, combined with judgment and creativity, enables consultants to deliver exceptional value to their clients.`,author:"Jennifer Lee, Consulting Methodology Expert",date:"2018-06-14",category:"Consulting",image:"/images/team-meeting.jpg",readTime:"9 min",slug:"consultants-toolkit-frameworks"},{id:"26",title:"Digital Transformation Consulting: Navigating the Digital Age",excerpt:"How consultants help organizations successfully navigate digital transformation.",content:`Digital transformation has become a strategic imperative for organizations across industries. Yet the failure rate of digital transformation efforts remains alarmingly high. This article explores how consulting engagements help organizations successfully navigate the complexities of digital transformation.

## The Digital Transformation Challenge

Digital transformation is about more than technology. It requires fundamental changes to business models, operating models, and organizational culture. The complexity of these changes explains why so many transformation efforts struggle.

### Common Failure Modes

**Technology-First Approach**: Focusing on technology without addressing business processes and people.

**Lack of Strategic Clarity**: Pursuing digital initiatives without clear connection to business strategy.

**Insufficient Leadership Commitment**: Transformation requires sustained executive attention and support.

**Organizational Resistance**: Cultural and political obstacles can derail even well-designed initiatives.

## The Consulting Approach

### Strategic Assessment
Understanding the digital opportunity and threat landscape:

- Industry digital disruption analysis
- Competitive digital capabilities assessment
- Customer digital expectations evaluation
- Internal digital readiness assessment

### Vision and Roadmap Development
Creating a compelling digital vision and practical implementation plan:

- Digital ambition definition
- Priority use case identification
- Technology architecture planning
- Implementation sequencing

### Implementation Support
Executing the transformation plan:

- Agile delivery approaches
- Vendor selection and management
- Change management and training
- Performance monitoring and optimization

## Key Digital Transformation Areas

### Customer Experience
Using digital technologies to enhance customer interactions:

- Omnichannel engagement
- Personalization at scale
- Self-service capabilities
- Real-time responsiveness

### Operations
Digitizing internal processes for efficiency and agility:

- Process automation
- Predictive analytics
- Connected operations
- Real-time visibility

### Business Models
Developing new digitally-enabled business models:

- Platform strategies
- Subscription models
- Data monetization
- Ecosystem partnerships

### Workforce
Enabling digital ways of working:

- Collaboration tools
- Remote work capabilities
- Digital skills development
- Agile ways of working

## Critical Success Factors

### Executive Commitment
Digital transformation requires sustained C-suite attention and visible leadership.

### Customer-Centricity
Successful transformations start with customer needs and work backward.

### Agile Approaches
Traditional project management approaches are ill-suited to digital transformation. Agile methods enable faster learning and adaptation.

### Talent and Culture
Building digital capabilities requires both technical skills and cultural change.

### Ecosystem Thinking
No organization can do everything itself. Partner ecosystems accelerate transformation.

## The Path Forward

Digital transformation is not a one-time project but an ongoing journey. Organizations that embrace continuous digital evolution will be best positioned to thrive in an increasingly digital world.`,author:"Michael Park, Digital Transformation Leader",date:"2020-08-30",category:"Consulting",image:"/images/hero-visual.jpg",readTime:"8 min",slug:"digital-transformation-consulting"},{id:"27",title:"Organizational Design: Creating High-Performing Structures",excerpt:"Principles and practices for designing organizations that execute strategy effectively.",content:`Organizational design is one of the most powerful levers for improving performance. The right structure enables strategy execution, while the wrong structure creates friction and undermines effectiveness. This article explores principles and practices for creating high-performing organizational structures.

## The Design Imperative

Organizations are not designed randomly. They evolve in response to strategic priorities, market conditions, and leadership preferences. However, intentional design is essential for ensuring that structure supports strategy.

### When to Redesign

Organizational redesign may be needed when:

- Strategy changes significantly
- Growth creates complexity and coordination challenges
- Performance gaps indicate structural problems
- Market conditions require different capabilities
- Mergers or acquisitions create integration needs

## Design Principles

### Alignment with Strategy
Structure should follow strategy. The organizational design must support the organization's strategic priorities and competitive approach.

### Clarity of Accountability
Everyone should know what they're responsible for and how their performance will be measured.

### Efficient Coordination
The design should enable necessary collaboration without creating excessive bureaucracy.

### Appropriate Span of Control
Managers should have enough direct reports to be efficient but not so many that they can't provide adequate oversight.

### Flexibility
Designs should accommodate future change without requiring constant restructuring.

## Common Organizational Models

### Functional Structure
Organized by functional expertise (sales, marketing, operations, etc.). Best for organizations that need deep functional expertise and efficiency.

### Divisional Structure
Organized by product, geography, or customer segment. Best for organizations that need to tailor offerings to different markets.

### Matrix Structure
Combines functional and divisional reporting. Best for organizations that need both functional excellence and market responsiveness.

### Network Structure
Relies heavily on partnerships and outsourcing. Best for organizations that need flexibility and access to specialized capabilities.

## The Design Process

### 1. Define Design Criteria
Based on strategy, identify what the new structure must accomplish.

### 2. Assess Current State
Understand the strengths and weaknesses of the current design.

### 3. Develop Design Options
Create alternative designs that meet the criteria.

### 4. Evaluate and Select
Assess options against criteria and select the best design.

### 5. Plan Implementation
Develop detailed plans for transitioning to the new structure.

### 6. Execute and Refine
Implement the design and make adjustments based on experience.

## Implementation Challenges

### Political Resistance
Redesigns often threaten established power structures and create resistance.

### Transition Management
Moving from old to new structure requires careful management of people and processes.

### Capability Gaps
New structures may require capabilities that don't exist in the organization.

### Cultural Fit
Designs must align with organizational culture or culture must evolve.

## The Path Forward

Organizational design is both an art and a science. While principles provide guidance, each situation is unique and requires thoughtful application. Organizations that master organizational design will be better positioned to execute their strategies effectively.`,author:"Susan Thompson, Organization Design Expert",date:"2022-04-19",category:"Consulting",image:"/images/partnership.jpg",readTime:"7 min",slug:"organizational-design-high-performing"},{id:"28",title:"Performance Improvement: A Systematic Approach",excerpt:"Methodologies for diagnosing performance gaps and implementing sustainable improvements.",content:`Every organization has opportunities to improve performance. The challenge is identifying the highest-impact opportunities and implementing changes that stick. This article provides a systematic approach to performance improvement.

## The Performance Improvement Challenge

Performance gaps can arise from many sources: inefficient processes, inadequate capabilities, poor strategy, or external factors. Effective improvement requires accurate diagnosis before prescribing solutions.

### Common Mistakes

**Jumping to Solutions**: Implementing fixes before understanding root causes.

**Focusing on Symptoms**: Addressing visible problems while missing underlying causes.

**Ignoring System Effects**: Making changes that improve one area while harming another.

**Insufficient Follow-Through**: Starting improvements without sustaining them.

## The Performance Improvement Framework

### 1. Define Performance Objectives
Clarity about what you're trying to achieve is essential:

- What metrics define success?
- What are the current baselines?
- What improvement targets are appropriate?

### 2. Analyze Current Performance
Understand what's driving current results:

- Process analysis
- Data analysis
- Benchmarking
- Stakeholder input

### 3. Identify Root Causes
Distinguish symptoms from underlying causes:

- Use techniques like 5 Whys and fishbone diagrams
- Consider multiple perspectives
- Validate hypotheses with data

### 4. Develop Solutions
Design interventions that address root causes:

- Generate multiple options
- Evaluate based on impact and feasibility
- Select the best combination of interventions

### 5. Implement Changes
Execute the improvement plan:

- Pilot when possible
- Build organizational support
- Provide necessary training and resources
- Monitor progress closely

### 6. Sustain Improvements
Ensure that gains are maintained:

- Embed changes in processes and systems
- Continue performance monitoring
- Build continuous improvement capabilities

## Key Improvement Methodologies

### Lean
Focuses on eliminating waste and maximizing value. Key tools include value stream mapping, 5S, and Kaizen events.

### Six Sigma
Focuses on reducing variation and defects. Uses DMAIC (Define, Measure, Analyze, Improve, Control) methodology.

### Total Quality Management
Comprehensive approach to quality improvement involving all employees.

### Business Process Reengineering
Radical redesign of core processes to achieve dramatic improvements.

## Critical Success Factors

### Leadership Commitment
Performance improvement requires visible, sustained leadership support.

### Employee Engagement
Front-line employees often have the best improvement ideas and must be engaged for changes to succeed.

### Data-Driven Approach
Decisions should be based on data rather than opinion or intuition.

### Continuous Focus
Performance improvement is not a one-time project but an ongoing discipline.

## The Path Forward

Sustainable performance improvement requires systematic approaches, engaged people, and disciplined execution. Organizations that build these capabilities will continuously improve their competitive position.`,author:"Robert Martinez, Performance Improvement Director",date:"2024-07-22",category:"Consulting",image:"/images/analytics-visual.jpg",readTime:"8 min",slug:"performance-improvement-systematic"},{id:"29",title:"The Future of Consulting: Trends and Implications",excerpt:"Emerging trends shaping the consulting industry and what they mean for clients and consultants.",content:`The consulting industry is undergoing significant transformation. Technology, changing client needs, and new competitive dynamics are reshaping how consulting services are delivered and consumed. This article explores key trends and their implications.

## Major Industry Trends

### Digital Disruption
Technology is transforming consulting delivery:

- **AI and Automation**: Routine analytical tasks are increasingly automated, changing the nature of consulting work.
- **Data Analytics**: Advanced analytics capabilities are becoming table stakes for consulting firms.
- **Digital Delivery**: Remote collaboration tools enable new delivery models.

### Specialization vs. Integration
Clients need both specialized expertise and integrated solutions:

- Boutique firms offer deep expertise in specific areas
- Large firms provide end-to-end capabilities and global reach
- Partnerships and alliances bridge the gap

### Alternative Delivery Models
New models are challenging traditional time-and-materials approaches:

- **Outcome-based pricing**: Tying fees to results
- **Subscription models**: Ongoing advisory relationships
- **Productized services**: Standardized offerings at fixed prices
- **Platform models**: Technology-enabled self-service

### Talent Dynamics
The war for talent is intensifying:

- Competition from technology firms for top analytical talent
- Changing career preferences among younger professionals
- Gig economy creating new talent models

## Implications for Clients

### More Choices
Clients have more options than ever, from traditional firms to boutiques to technology-enabled alternatives.

### Higher Expectations
Clients expect faster, more data-driven, and more technology-enabled consulting.

### Value Focus
Clients are increasingly focused on measurable outcomes and ROI.

### Capability Building
Clients want consultants to transfer knowledge and build internal capabilities, not just deliver recommendations.

## Implications for Consultants

### Evolving Skill Sets
Success requires combining traditional consulting skills with technology fluency and industry expertise.

### New Delivery Models
Consultants must adapt to new ways of working and pricing their services.

### Continuous Learning
Rapid change requires ongoing investment in skill development.

### Collaboration
Partnerships and ecosystem thinking are increasingly important.

## The Path Forward

The consulting industry will continue to evolve. Success will require adaptability, continuous learning, and genuine focus on client value. Both clients and consultants who embrace these changes will be best positioned to thrive.

The fundamental value proposition of consulting—bringing external expertise and perspective to help organizations solve difficult problems—remains as relevant as ever. The methods and models for delivering that value are what must evolve.`,author:"Andrew Wilson, Consulting Industry Analyst",date:"2025-10-05",category:"Consulting",image:"/images/team-meeting.jpg",readTime:"7 min",slug:"future-of-consulting-trends"},{id:"30",title:"Building a Consulting Career: Lessons from the Field",excerpt:"Practical advice for developing a successful and fulfilling consulting career.",content:`Consulting offers unique opportunities for professional growth, intellectual challenge, and impact. It also demands exceptional commitment and continuous development. This article shares lessons from experienced consultants for building a successful career.

## The Consulting Career Path

Consulting careers typically progress through distinct stages:

### Analyst/Associate
The entry level focuses on learning analytical skills, understanding industries, and supporting project teams. Success requires:

- Strong analytical capabilities
- Attention to detail
- Willingness to work hard
- Eagerness to learn

### Consultant/Manager
Mid-level consultants take on more responsibility for client relationships and project delivery. Success requires:

- Project management skills
- Client communication abilities
- Team leadership
- Thought leadership development

### Principal/Director
Senior consultants lead major engagements and develop new business. Success requires:

- Expertise in specific domains
- Strong client relationships
- Business development skills
- Team development capabilities

### Partner/Managing Director
Firm leaders set strategy, build the business, and develop talent. Success requires:

- Vision and strategic thinking
- Exceptional client relationships
- Firm building commitment
- Industry thought leadership

## Keys to Success

### Develop Expertise
Build deep knowledge in specific industries or functional areas. Generalists have limited value in a specialized world.

### Build Relationships
Consulting is a relationship business. Invest in building genuine, lasting relationships with clients and colleagues.

### Deliver Excellence
Reputation is built on consistent delivery of high-quality work. Never compromise on quality.

### Communicate Effectively
The ability to communicate complex ideas clearly is essential. Work continuously to improve communication skills.

### Embrace Feedback
Seek and act on feedback. Continuous improvement requires honest self-assessment.

### Maintain Balance
Consulting can be all-consuming. Successful consultants find ways to maintain personal balance and avoid burnout.

## Common Pitfalls

### Focusing Only on Analysis
Consulting is about solving problems and driving change, not just doing analysis. Always connect analysis to actionable recommendations.

### Neglecting Relationship Building
Technical skills are necessary but not sufficient. Relationships are what sustain careers.

### Resisting Feedback
Defensiveness prevents growth. Embrace feedback as a gift.

### Burning Out
Unsustainable work patterns ultimately hurt performance and career longevity.

## The Path Forward

A consulting career can be incredibly rewarding, offering opportunities to work on important problems, learn continuously, and make a real difference. Success requires talent, hard work, and a genuine commitment to client success. Those who embrace these challenges will find consulting a fulfilling and impactful profession.`,author:"Elizabeth Brown, Senior Partner",date:"2026-01-28",category:"Consulting",image:"/images/partnership.jpg",readTime:"8 min",slug:"building-consulting-career"},{id:"31",title:"Enterprise Transformation: A CEO's Guide to Large-Scale Change",excerpt:"Essential principles for leading enterprise-wide transformation initiatives.",content:`Enterprise transformation is one of the most challenging undertakings in business. It requires changing how thousands of people work, often while continuing to run the business. This article provides guidance for CEOs leading large-scale transformation efforts.

## The Transformation Imperative

Markets evolve, technologies disrupt, and competitive dynamics shift. Organizations that fail to transform risk obsolescence. Yet transformation is extraordinarily difficult, with failure rates estimated at 70% or higher.

### Why Transformations Fail

**Lack of Vision**: Without a clear, compelling vision, transformation efforts lack direction and motivation.

**Insufficient Leadership Commitment**: Transformation requires sustained C-suite attention. Part-time leadership produces part-time results.

**Underestimating Change Management**: Technical solutions are the easy part. Changing behavior is the hard part.

**Poor Execution**: Even good plans fail without disciplined implementation.

## The CEO's Role

### Set the Vision
The CEO must articulate a compelling vision that answers:

- Why must we change?
- What will the transformed organization look like?
- How will we get there?

### Build the Leadership Team
Transformation requires a coalition of committed leaders. The CEO must:

- Ensure alignment among the executive team
- Address resistance at the leadership level
- Model the desired behaviors

### Allocate Resources
Transformation requires investment. The CEO must ensure adequate funding and talent.

### Maintain Focus
Day-to-day operations compete for attention. The CEO must keep transformation on the agenda.

### Communicate Relentlessly
The CEO's voice is essential for maintaining momentum and engagement.

## Key Transformation Levers

### Strategy
Clarify or redefine strategic direction to guide transformation efforts.

### Operating Model
Redesign how work gets done to support strategic objectives.

### Culture
Shape values, norms, and behaviors to enable new ways of working.

### Talent
Develop or acquire the capabilities needed for the transformed organization.

### Technology
Leverage technology as an enabler of transformation.

## The Transformation Journey

### Phase 1: Prepare
Build the case for change, assemble the leadership team, and develop the transformation roadmap.

### Phase 2: Pilot
Test elements of the transformation to learn and build momentum.

### Phase 3: Scale
Roll out transformation initiatives across the organization.

### Phase 4: Sustain
Embed changes in organizational systems and culture.

## Measuring Success

Define clear metrics to track transformation progress:

- Financial performance
- Operational metrics
- Employee engagement
- Customer satisfaction
- Cultural indicators

## The Path Forward

Enterprise transformation is not for the faint of heart. It requires courage, commitment, and persistence. But for organizations facing fundamental challenges, transformation is not optional—it's essential for survival and success.`,author:"James Richardson, Transformation Advisor",date:"2010-09-03",category:"Transformation",image:"/images/hero-visual.jpg",readTime:"9 min",slug:"enterprise-transformation-ceo-guide"},{id:"32",title:"Agile Transformation: Beyond Methodology to Mindset",excerpt:"How organizations are successfully adopting agile ways of working at scale.",content:`Agile has evolved from a software development methodology to a comprehensive approach to organizational effectiveness. This article explores how leading organizations are successfully implementing agile transformation at scale.

## The Agile Evolution

Agile began as an alternative to traditional software development approaches. Its success in technology has led to broader application across organizational functions and industries.

### What Agile Means Today

Modern agile encompasses:

- **Iterative Delivery**: Working in short cycles with frequent feedback
- **Cross-Functional Teams**: Bringing together diverse skills to deliver value
- **Customer-Centricity**: Focusing on customer needs and rapid response
- **Empowerment**: Giving teams autonomy to make decisions
- **Continuous Improvement**: Constantly learning and adapting

## The Transformation Challenge

Adopting agile at scale is fundamentally different from implementing agile in isolated teams.

### Common Obstacles

**Structural Barriers**: Traditional hierarchies and functional silos conflict with agile principles.

**Cultural Resistance**: Agile requires different mindsets and behaviors that may not come naturally.

**Skill Gaps**: Agile ways of working require new capabilities.

**Leadership Misalignment**: Leaders must model agile behaviors, not just endorse them.

## Keys to Successful Agile Transformation

### Start with Why
Be clear about why agile is being adopted and what problems it will solve.

### Leadership Commitment
Leaders must embrace agile principles in their own work, not just sponsor the transformation.

### Pilot and Learn
Start with pilots to build experience and demonstrate value before scaling.

### Redesign Structures
Adapt organizational structures to support agile ways of working:

- Flatter hierarchies
- Cross-functional teams
- Dynamic resource allocation
- Outcome-based metrics

### Invest in Capabilities
Build the skills and mindsets needed for agile:

- Training and coaching
- Communities of practice
- Learning from experience

### Adapt Governance
Traditional governance models often conflict with agile. Adapt:

- Funding approaches
- Decision-making processes
- Performance management
- Career development

## Measuring Agile Success

### Output Metrics
- Velocity and throughput
- Quality indicators
- Time to market

### Outcome Metrics
- Customer satisfaction
- Business value delivered
- Employee engagement

### Health Metrics
- Team morale
- Sustainable pace
- Technical excellence

## The Path Forward

Agile transformation is a journey, not a destination. Organizations that embrace agile as a mindset rather than just a methodology will be better positioned to adapt and thrive in a rapidly changing world.`,author:"Sarah Mitchell, Agile Transformation Coach",date:"2012-12-10",category:"Transformation",image:"/images/team-meeting.jpg",readTime:"8 min",slug:"agile-transformation-mindset"},{id:"33",title:"Cultural Transformation: Shaping Organizational DNA",excerpt:"Approaches for fundamentally changing organizational culture to support strategic objectives.",content:`Culture is often described as "the way we do things around here." It's the invisible force that shapes behavior, influences decisions, and determines how work gets done. When strategy requires new ways of working, culture must often change. This article explores approaches for cultural transformation.

## Understanding Culture

Culture exists at multiple levels:

### Artifacts
Visible elements like dress code, office layout, and rituals.

### Espoused Values
Stated beliefs and values that guide behavior.

### Basic Assumptions
Unconscious, taken-for-granted beliefs that truly drive behavior.

Lasting cultural change requires addressing all three levels, with particular attention to basic assumptions.

## When Cultural Transformation is Needed

### Strategy Shifts
New strategies often require different cultural attributes. For example:

- Innovation strategies require risk-taking and experimentation
- Customer-focused strategies require service orientation and responsiveness
- Operational excellence strategies require discipline and continuous improvement

### Performance Problems
Persistent performance issues may indicate cultural barriers.

### Mergers and Acquisitions
Combining organizations requires cultural integration.

### External Changes
Market shifts, regulatory changes, or technological disruption may require cultural adaptation.

## Approaches to Cultural Transformation

### 1. Define the Target Culture
Be specific about what the new culture should look like:

- What behaviors should be encouraged?
- What behaviors should be discouraged?
- What values should guide decisions?

### 2. Assess Current Culture
Understand the starting point:

- Surveys and assessments
- Focus groups and interviews
- Observation of actual behavior

### 3. Identify Cultural Gaps
Compare current and target cultures to identify specific gaps.

### 4. Design Interventions
Develop targeted interventions to close cultural gaps:

**Leadership Modeling**: Leaders must embody the desired culture.

**Storytelling**: Share stories that illustrate desired behaviors.

**Rituals and Symbols**: Create visible reminders of cultural aspirations.

**Systems Alignment**: Ensure HR, performance management, and other systems support the desired culture.

**Training and Development**: Build skills and mindsets aligned with target culture.

### 5. Monitor and Adjust
Track cultural change and adjust interventions as needed.

## Critical Success Factors

### Leadership Commitment
Cultural transformation requires visible, sustained leadership commitment.

### Patience
Culture changes slowly. Expect years, not months, for fundamental shifts.

### Consistency
Mixed messages undermine cultural change. Ensure consistency across all signals.

### Employee Involvement
Engage employees in defining and shaping the new culture.

## The Path Forward

Cultural transformation is one of the most challenging organizational changes, but also one of the most impactful. Organizations that successfully shape their culture to support strategic objectives gain a powerful competitive advantage.`,author:"David Park, Culture Change Expert",date:"2014-06-22",category:"Transformation",image:"/images/partnership.jpg",readTime:"7 min",slug:"cultural-transformation-dna"},{id:"34",title:"Technology Transformation: Modernizing for the Digital Age",excerpt:"Strategies for transforming legacy technology environments to enable digital business.",content:`Legacy technology is one of the biggest barriers to digital transformation. Years of accumulated technical debt, outdated systems, and fragmented architectures prevent organizations from moving quickly and competing effectively. This article explores strategies for technology transformation.

## The Legacy Challenge

Most established organizations operate complex technology environments that have evolved over decades. These environments present multiple challenges:

### Technical Debt
Years of shortcuts and quick fixes create maintenance burdens and limit flexibility.

### Outdated Systems
Legacy systems may lack the capabilities needed for modern business requirements.

### Fragmented Architecture
Multiple systems that don't integrate well create inefficiencies and data silos.

### Skills Scarcity
Technologies that were mainstream years ago may now have limited talent pools.

## Transformation Strategies

### Modernization Approaches

**Replatform**: Move applications to modern infrastructure without significant code changes.

**Refactor**: Restructure existing code to improve maintainability and performance.

**Rearchitect**: Materially alter the application architecture to enable new capabilities.

**Rebuild**: Rewrite applications from scratch using modern technologies.

**Replace**: Substitute legacy applications with commercial or SaaS alternatives.

### Cloud Migration
Moving to cloud infrastructure is often a cornerstone of technology transformation:

**Infrastructure as a Service (IaaS)**: Lift and shift existing workloads to cloud infrastructure.

**Platform as a Service (PaaS)**: Leverage cloud platforms for application development and deployment.

**Software as a Service (SaaS)**: Replace custom applications with cloud-based alternatives.

### API-First Architecture
Building APIs to expose capabilities and enable integration:

- Internal APIs for system integration
- External APIs for partner and customer access
- Microservices architecture for flexibility

### Data Modernization
Transforming how data is managed and leveraged:

- Data lakes and warehouses
- Real-time data processing
- Advanced analytics capabilities
- Data governance frameworks

## Managing Transformation Risk

### Phased Approach
Break transformation into manageable phases to reduce risk.

### Parallel Operation
Run new and old systems in parallel during transition.

### Comprehensive Testing
Invest in thorough testing to catch issues before they impact operations.

### Rollback Planning
Have contingency plans in case new systems don't perform as expected.

## Enabling Factors

### Business Alignment
Technology transformation must serve business objectives.

### Adequate Investment
Underinvestment leads to shortcuts that create future technical debt.

### Talent and Skills
Ensure access to necessary technical capabilities.

### Change Management
Technology changes require changes in how people work.

## The Path Forward

Technology transformation is essential for digital competitiveness. Organizations that successfully modernize their technology environments will be better positioned to innovate, adapt, and compete in a digital world.`,author:"Michael Torres, Technology Transformation Lead",date:"2016-10-15",category:"Transformation",image:"/images/analytics-visual.jpg",readTime:"8 min",slug:"technology-transformation-modernizing"},{id:"35",title:"Post-Merger Integration: Capturing Transformation Value",excerpt:"Best practices for integrating merged organizations to achieve anticipated synergies.",content:`Mergers and acquisitions promise significant value creation, but realizing that value requires successful integration. This article explores best practices for post-merger integration that captures anticipated synergies while maintaining business momentum.

## The Integration Challenge

Post-merger integration is one of the most complex organizational challenges. It involves:

- Combining operations, systems, and cultures
- Retaining key talent
- Maintaining customer relationships
- Achieving projected synergies
- Managing stakeholder expectations

All while continuing to run the business.

### Why Integrations Fail

**Cultural Clashes**: Incompatible cultures create friction and undermine collaboration.

**Talent Loss**: Key people leave during uncertainty, taking critical knowledge and relationships.

**Customer Disruption**: Integration activities distract from customer focus, leading to attrition.

**Synergy Shortfalls**: Projected synergies fail to materialize due to poor execution.

**Integration Fatigue**: Prolonged integration efforts exhaust the organization.

## Integration Approaches

### Integration Strategy
Define how the combined organization will operate:

**Absorption**: One organization absorbs the other.

**Preservation**: Both organizations operate largely independently.

**Best of Both**: Select best practices from each organization.

**Transformation**: Create an entirely new operating model.

### Integration Planning
Develop detailed plans before closing:

- Integration governance structure
- Work streams and accountability
- Timeline and milestones
- Communication plans
- Risk mitigation strategies

### Speed vs. Care
Balance the need for rapid integration with the need for thoughtful execution:

- Quick wins build momentum
- Careful planning prevents problems
- Phased approaches may be appropriate for complex integrations

## Critical Success Factors

### Leadership Alignment
Ensure the combined leadership team is aligned on vision, strategy, and approach.

### Clear Governance
Establish clear decision-making authority and processes.

### Talent Retention
Identify and retain critical talent from both organizations.

### Customer Focus
Maintain relentless focus on customers throughout integration.

### Communication
Communicate frequently and transparently with all stakeholders.

### Cultural Integration
Actively work to shape a unified culture:

- Define desired cultural attributes
- Identify and address cultural gaps
- Model desired behaviors
- Celebrate integration successes

## Measuring Integration Success

### Financial Metrics
- Synergy realization
- Revenue retention
- Cost reduction

### Operational Metrics
- Integration milestone achievement
- System integration
- Process harmonization

### People Metrics
- Employee retention
- Engagement scores
- Cultural integration indicators

### Customer Metrics
- Customer retention
- Satisfaction scores
- Market share

## The Path Forward

Successful post-merger integration requires disciplined planning, rapid execution, and unwavering focus on value creation. Organizations that master integration will be better positioned to use M&A as a strategic growth tool.`,author:"Jennifer Adams, M&A Integration Expert",date:"2018-04-08",category:"Transformation",image:"/images/team-meeting.jpg",readTime:"9 min",slug:"post-merger-integration-value"},{id:"36",title:"Process Transformation: Reimagining How Work Gets Done",excerpt:"Approaches for fundamentally redesigning business processes to achieve breakthrough performance.",content:`Business processes are the engines that drive organizational performance. When processes are inefficient or ineffective, the entire organization suffers. This article explores approaches for process transformation that deliver breakthrough results.

## The Case for Process Transformation

Incremental improvement can only take organizations so far. Sometimes, fundamental redesign is needed to achieve dramatic performance gains.

### When Transformation is Needed

**Persistent Performance Gaps**: When incremental improvements fail to close performance gaps.

**Strategic Shifts**: When strategy changes require new ways of working.

**Technology Enablers**: When new technologies make previously impossible processes feasible.

**Competitive Pressure**: When competitors achieve breakthrough performance that must be matched.

## Process Transformation Approaches

### Business Process Reengineering (BPR)
Radical redesign of core processes to achieve dramatic improvements:

- Start with a clean slate
- Challenge fundamental assumptions
- Leverage technology as an enabler
- Focus on outcomes, not activities

### Lean Transformation
Eliminating waste and maximizing value flow:

- Value stream mapping
- Waste elimination
- Continuous flow
- Pull systems
- Perfection pursuit

### Six Sigma
Reducing variation and improving quality:

- Define critical processes
- Measure current performance
- Analyze root causes
- Improve processes
- Control to sustain gains

### Digital Process Automation
Using technology to transform processes:

- Robotic process automation (RPA)
- Workflow automation
- AI-powered decision making
- Intelligent document processing

## The Transformation Process

### 1. Identify Transformation Opportunities
Prioritize processes with the greatest improvement potential:

- Strategic importance
- Current performance gaps
- Improvement feasibility
- Resource requirements

### 2. Understand Current State
Map and analyze existing processes:

- Process mapping
- Data analysis
- Stakeholder input
- Benchmarking

### 3. Design Future State
Envision the transformed process:

- Challenge assumptions
- Apply best practices
- Leverage technology
- Design for outcomes

### 4. Plan Implementation
Develop detailed implementation plans:

- Phasing and sequencing
- Resource requirements
- Change management
- Risk mitigation

### 5. Execute and Sustain
Implement changes and ensure lasting results:

- Pilot testing
- Training and support
- Performance monitoring
- Continuous improvement

## Critical Success Factors

### Executive Sponsorship
Process transformation requires visible leadership commitment.

### Cross-Functional Collaboration
Most processes span functions, requiring cross-functional effort.

### Customer Focus
Design processes from the customer perspective.

### Technology Enablement
Leverage technology as a transformation enabler.

### Change Management
Process changes require changes in how people work.

## The Path Forward

Process transformation can deliver dramatic performance improvements, but it requires commitment, discipline, and a willingness to challenge the status quo. Organizations that embrace process transformation will be better positioned to compete and succeed.`,author:"Robert Kim, Process Transformation Expert",date:"2020-02-28",category:"Transformation",image:"/images/hero-visual.jpg",readTime:"8 min",slug:"process-transformation-reimagining"},{id:"37",title:"Workforce Transformation: Building the Organization of the Future",excerpt:"Strategies for developing the workforce capabilities needed for tomorrow's challenges.",content:`The nature of work is changing rapidly. Automation, artificial intelligence, and shifting skill requirements are transforming workforce needs. This article explores strategies for workforce transformation that prepare organizations for the future.

## The Workforce Challenge

Multiple forces are reshaping workforce requirements:

### Technology Disruption
Automation and AI are eliminating some jobs while creating new ones with different skill requirements.

### Skill Obsolescence
Skills that were valuable yesterday may be irrelevant tomorrow.

### Talent Shortages
Critical skills are increasingly scarce and competitive.

### Changing Expectations
Workers increasingly seek purpose, flexibility, and development opportunities.

### Demographic Shifts
Aging populations in many regions are changing workforce composition.

## Workforce Transformation Strategies

### Strategic Workforce Planning
Anticipate future workforce needs:

- Forecast skill requirements
- Assess current capabilities
- Identify gaps
- Develop plans to close gaps

### Talent Acquisition
Attract the talent needed for the future:

- Employer branding
- Diverse sourcing channels
- Skills-based hiring
- Candidate experience

### Learning and Development
Build capabilities in the existing workforce:

- Reskilling programs
- Upskilling initiatives
- Continuous learning culture
- Experiential learning

### Performance Management
Evolve performance management for new ways of working:

- Continuous feedback
- Goal alignment
- Development focus
- Recognition and rewards

### Organizational Design
Structure work to optimize human and machine collaboration:

- Role redesign
- Team structures
- Decision rights
- Workflow optimization

### Culture and Engagement
Create an environment where people want to work:

- Purpose and meaning
- Flexibility and autonomy
- Inclusion and belonging
- Growth opportunities

## Key Transformation Levers

### Automation Strategy
Be intentional about what to automate and what to keep human:

- Identify automation opportunities
- Assess feasibility and value
- Plan for human-machine collaboration
- Manage transition

### Skills-Based Organization
Focus on skills rather than jobs:

- Skills taxonomy
- Skills assessment
- Skills-based assignments
- Skills-based compensation

### Gig Economy Integration
Leverage flexible talent:

- Freelancer platforms
- Project-based work
- Talent marketplaces
- Alumni networks

## Measuring Workforce Transformation

### Capability Metrics
- Skills coverage
- Learning completion
- Certification achievement

### Engagement Metrics
- Employee satisfaction
- Retention rates
- Net Promoter Score

### Performance Metrics
- Productivity indicators
- Quality measures
- Innovation outcomes

### Diversity Metrics
- Representation
- Inclusion scores
- Equity measures

## The Path Forward

Workforce transformation is not a one-time project but an ongoing imperative. Organizations that continuously develop their workforce capabilities will be best positioned to adapt and thrive in a changing world.`,author:"Lisa Chen, Workforce Transformation Leader",date:"2022-09-12",category:"Transformation",image:"/images/partnership.jpg",readTime:"7 min",slug:"workforce-transformation-future"},{id:"38",title:"Customer-Centric Transformation: Putting Customers at the Center",excerpt:"How organizations are transforming to become truly customer-centric.",content:`Customer-centricity has become a strategic imperative. Organizations that fail to put customers at the center of their operations risk losing market share to competitors who do. This article explores how organizations are successfully transforming to become customer-centric.

## The Customer-Centric Imperative

Customers have more choices and higher expectations than ever before. They expect:

- Personalized experiences
- Seamless interactions across channels
- Quick resolution of issues
- Proactive communication
- Value for money

Organizations that meet these expectations build loyalty and advocacy. Those that don't face churn and negative word-of-mouth.

## Dimensions of Customer-Centric Transformation

### Strategy
Align organizational strategy around customer needs:

- Customer segmentation
- Value proposition design
- Customer lifetime value focus
- Market-driven innovation

### Culture
Build a culture that values customers:

- Customer-first mindset
- Employee empowerment
- Accountability for customer outcomes
- Celebration of customer success

### Organization
Structure around customer needs:

- Customer-centric teams
- Journey-based organization
- Cross-functional collaboration
- Customer success functions

### Processes
Design processes from the customer perspective:

- Journey mapping
- Pain point elimination
- Friction reduction
- Proactive service

### Technology
Leverage technology to enhance customer experience:

- CRM systems
- Omnichannel platforms
- Personalization engines
- Customer analytics

### Measurement
Track customer-centric metrics:

- Net Promoter Score (NPS)
- Customer Satisfaction (CSAT)
- Customer Effort Score (CES)
- Customer lifetime value
- Churn rates

## Transformation Approaches

### Journey-Led Transformation
Redesign experiences around customer journeys rather than internal functions.

### Voice of Customer Programs
Systematically capture and act on customer feedback.

### Employee Engagement
Engaged employees create engaged customers. Focus on the employee experience.

### Rapid Experimentation
Test and learn approaches to customer experience improvement.

## Common Pitfalls

### Lip Service
Claiming customer-centricity without making real changes.

### Siloed Efforts
Customer-centric initiatives that don't span the organization.

### Technology-First
Focusing on technology without addressing culture and processes.

### Short-Term Focus
Sacrificing long-term customer relationships for short-term gains.

## The Path Forward

Customer-centric transformation requires changes across strategy, culture, organization, processes, and technology. Organizations that successfully make these changes will build sustainable competitive advantage through customer loyalty and advocacy.`,author:"Amanda Foster, Customer Experience Expert",date:"2024-05-20",category:"Transformation",image:"/images/team-meeting.jpg",readTime:"8 min",slug:"customer-centric-transformation"},{id:"39",title:"Sustainability Transformation: Building a Responsible Business",excerpt:"How organizations are integrating sustainability into their core business strategy and operations.",content:`Sustainability has evolved from a peripheral concern to a strategic imperative. Stakeholders—investors, customers, employees, and regulators—increasingly expect organizations to operate responsibly. This article explores how organizations are transforming to embed sustainability into their core business.

## The Sustainability Imperative

Multiple forces are driving sustainability transformation:

### Investor Pressure
ESG (Environmental, Social, Governance) factors increasingly influence investment decisions.

### Regulatory Requirements
Governments worldwide are implementing stricter environmental and social regulations.

### Customer Expectations
Consumers prefer to buy from responsible companies.

### Employee Demands
Talent increasingly wants to work for organizations that align with their values.

### Competitive Advantage
Sustainability can drive efficiency, innovation, and brand differentiation.

## Dimensions of Sustainability Transformation

### Environmental
Reducing environmental impact:

- Carbon footprint reduction
- Renewable energy adoption
- Circular economy practices
- Sustainable supply chains
- Waste reduction

### Social
Creating positive social impact:

- Diversity, equity, and inclusion
- Fair labor practices
- Community engagement
- Human rights protection
- Employee wellbeing

### Governance
Operating with integrity and transparency:

- Ethical business practices
- Board diversity
- Executive compensation alignment
- Stakeholder engagement
- Transparent reporting

## Transformation Strategies

### Strategy Integration
Embed sustainability into business strategy:

- Materiality assessment
- Sustainability goals
- Strategic initiatives
- Resource allocation

### Operating Model Changes
Adapt operations for sustainability:

- Sustainable sourcing
- Green manufacturing
- Efficient logistics
- Product lifecycle management

### Innovation
Develop sustainable products and services:

- Eco-friendly design
- Sharing economy models
- Circular business models
- Clean technology

### Partnership
Collaborate for greater impact:

- Industry initiatives
- NGO partnerships
- Government collaboration
- Supplier engagement

### Measurement and Reporting
Track and communicate progress:

- Sustainability metrics
- ESG reporting
- Stakeholder communication
- Continuous improvement

## Business Case for Sustainability

### Cost Reduction
Efficiency improvements reduce costs.

### Revenue Growth
Sustainable products can command premium prices and access new markets.

### Risk Mitigation
Proactive sustainability management reduces regulatory and reputational risks.

### Talent Attraction
Purpose-driven organizations attract and retain talent.

### Innovation Driver
Sustainability challenges drive innovation.

## The Path Forward

Sustainability transformation is not just about doing good—it's about doing well. Organizations that embed sustainability into their core business will be better positioned for long-term success in a world where environmental and social responsibility is increasingly expected.`,author:"Thomas Wright, Sustainability Transformation Leader",date:"2025-08-15",category:"Transformation",image:"/images/hero-visual.jpg",readTime:"9 min",slug:"sustainability-transformation-responsible"},{id:"40",title:"Measuring Transformation Success: Metrics That Matter",excerpt:"A framework for tracking and measuring the success of transformation initiatives.",content:`Transformation initiatives represent significant investments of time, money, and organizational energy. Yet many organizations struggle to measure whether their transformations are succeeding. This article provides a framework for measuring transformation success.

## The Measurement Challenge

Transformation is complex and multifaceted. Simple metrics often fail to capture the full picture, while comprehensive measurement can become overwhelming.

### Common Measurement Problems

**Focusing on Activities**: Measuring what was done rather than what was achieved.

**Lagging Indicators**: Relying on metrics that only show results after it's too late to adjust.

**Siloed Metrics**: Different parts of the organization measuring different things.

**Metric Fatigue**: Tracking too many metrics, obscuring what really matters.

## A Framework for Transformation Metrics

### Financial Metrics
The ultimate measure of transformation success:

- Revenue growth
- Cost reduction
- Profitability improvement
- Return on investment
- Shareholder returns

### Operational Metrics
How well operations are performing:

- Process efficiency
- Quality indicators
- Speed and responsiveness
- Resource utilization
- Error rates

### Customer Metrics
How customers are responding:

- Customer satisfaction
- Net Promoter Score
- Customer retention
- Market share
- Customer lifetime value

### People Metrics
How employees are engaged and performing:

- Employee engagement
- Retention rates
- Skills development
- Diversity and inclusion
- Leadership effectiveness

### Transformation-Specific Metrics
Progress on transformation initiatives:

- Initiative completion
- Milestone achievement
- Adoption rates
- Capability development
- Cultural change indicators

## Leading vs. Lagging Indicators

### Lagging Indicators
Show results after they occur:

- Financial performance
- Customer retention
- Employee turnover

### Leading Indicators
Predict future results:

- Initiative progress
- Engagement trends
- Skill development
- Behavioral changes

Effective measurement includes both types of indicators.

## Implementing a Measurement System

### 1. Define Success
Be clear about what success looks like for your transformation.

### 2. Identify Key Metrics
Select a focused set of metrics that indicate progress toward success.

### 3. Establish Baselines
Measure current performance to enable comparison.

### 4. Set Targets
Define specific, measurable targets for improvement.

### 5. Create Reporting Cadence
Regular reporting enables course correction.

### 6. Review and Adjust
Periodically review metrics and adjust as needed.

## Governance and Accountability

### Executive Dashboard
High-level metrics for leadership oversight.

### Initiative-Level Tracking
Detailed metrics for transformation work streams.

### Accountability
Clear ownership for metric performance.

### Transparency
Share metrics broadly to drive engagement and accountability.

## The Path Forward

Effective measurement is essential for transformation success. Organizations that implement robust measurement systems will be better positioned to track progress, make adjustments, and ultimately achieve their transformation objectives.`,author:"Catherine Lee, Transformation Measurement Expert",date:"2026-02-05",category:"Transformation",image:"/images/analytics-visual.jpg",readTime:"7 min",slug:"measuring-transformation-success"},{id:"41",title:"The Rise of Machine Learning: From Research to Business Value",excerpt:"How machine learning is moving from academic research to practical business applications.",content:`Machine learning has emerged from the research lab to become a powerful business tool. Organizations across industries are leveraging machine learning to improve decision-making, automate processes, and create new value. This article explores the journey from research to business value.

## The Machine Learning Revolution

Machine learning—a subset of artificial intelligence that enables systems to learn from data—has experienced explosive growth in capability and adoption.

### Key Drivers

**Data Explosion**: The availability of massive datasets enables more sophisticated models.

**Computing Power**: Advances in hardware, particularly GPUs, make complex model training feasible.

**Algorithm Advances**: New techniques like deep learning have dramatically improved performance.

**Tool Democratization**: Open-source tools and cloud services make machine learning accessible.

## Business Applications

### Customer Insights
- Customer segmentation
- Churn prediction
- Lifetime value modeling
- Sentiment analysis

### Operations
- Demand forecasting
- Predictive maintenance
- Quality control
- Supply chain optimization

### Finance
- Fraud detection
- Risk assessment
- Algorithmic trading
- Credit scoring

### Marketing
- Personalization
- Campaign optimization
- Content recommendation
- Attribution modeling

## From Experiment to Production

### The Machine Learning Lifecycle

**Problem Definition**: Clearly articulate the business problem to be solved.

**Data Preparation**: Collect, clean, and prepare training data.

**Model Development**: Build and train machine learning models.

**Evaluation**: Assess model performance against business objectives.

**Deployment**: Integrate models into production systems.

**Monitoring**: Track model performance and retrain as needed.

### Common Challenges

**Data Quality**: Machine learning requires high-quality, relevant data.

**Talent Scarcity**: Skilled data scientists and ML engineers are in high demand.

**Production Integration**: Moving from prototypes to production systems is complex.

**Model Governance**: Ensuring models are fair, explainable, and compliant.

## Building Machine Learning Capabilities

### Technology Infrastructure
- Data platforms
- ML development environments
- Model deployment infrastructure
- Monitoring tools

### Talent
- Data scientists
- ML engineers
- Domain experts
- Product managers

### Processes
- ML development lifecycle
- Model governance
- Experiment tracking
- Continuous integration/deployment

## The Path Forward

Machine learning is rapidly becoming a core business capability. Organizations that invest in building ML capabilities will be better positioned to compete in an increasingly data-driven world.

The journey from research to business value requires not just technical expertise, but also business acumen, change management, and disciplined execution.`,author:"Dr. James Peterson, Machine Learning Scientist",date:"2010-11-20",category:"AI",image:"/images/analytics-visual.jpg",readTime:"8 min",slug:"rise-of-machine-learning"},{id:"42",title:"Natural Language Processing: Unlocking the Value of Text",excerpt:"How NLP is enabling organizations to extract insights from unstructured text data.",content:`The vast majority of business data is unstructured text—emails, documents, social media posts, customer feedback, and more. Natural Language Processing (NLP) provides the tools to unlock value from this text data. This article explores how organizations are leveraging NLP for competitive advantage.

## The Text Data Opportunity

Organizations generate and collect enormous volumes of text data:

- Customer communications
- Internal documents
- Social media content
- News and research
- Regulatory filings
- Support tickets

Traditionally, this data was difficult to analyze at scale. NLP changes that.

## NLP Capabilities

### Text Classification
Automatically categorize documents:

- Sentiment analysis
- Topic classification
- Intent detection
- Spam filtering

### Information Extraction
Pull structured information from unstructured text:

- Named entity recognition
- Relationship extraction
- Event detection
- Key phrase extraction

### Text Generation
Create human-like text:

- Content creation
- Summarization
- Translation
- Chatbot responses

### Question Answering
Automatically answer questions from text:

- Document search
- Knowledge base queries
- Customer support automation
- Research assistance

## Business Applications

### Customer Experience
- Analyze customer feedback at scale
- Automate support responses
- Monitor social media sentiment
- Personalize communications

### Knowledge Management
- Search across document repositories
- Automatically tag and categorize content
- Generate document summaries
- Extract key insights

### Compliance
- Monitor communications for policy violations
- Analyze regulatory documents
- Automate contract review
- Detect fraud indicators

### Market Intelligence
- Monitor news and social media
- Analyze competitor communications
- Track industry trends
- Identify emerging risks

## Implementing NLP Solutions

### Technology Options
- Cloud NLP services (AWS, Google, Azure)
- Open-source libraries (spaCy, NLTK, Transformers)
- Pre-trained models
- Custom model development

### Data Requirements
- Quality training data
- Domain-specific vocabulary
- Annotated examples
- Continuous feedback

### Integration Considerations
- API-based deployment
- Batch vs. real-time processing
- Model versioning
- Performance monitoring

## The Path Forward

Advances in deep learning have dramatically improved NLP capabilities. Pre-trained models like BERT and GPT have made sophisticated NLP accessible to organizations without massive data science teams.

Organizations that invest in NLP capabilities will be better positioned to leverage their text data assets for competitive advantage.`,author:"Dr. Emily Watson, NLP Research Director",date:"2012-08-14",category:"AI",image:"/images/team-meeting.jpg",readTime:"7 min",slug:"natural-language-processing-value"},{id:"43",title:"Computer Vision: Seeing the World Through AI",excerpt:"How computer vision is transforming industries from manufacturing to healthcare.",content:`Computer vision—the ability of machines to interpret and understand visual information—has advanced dramatically in recent years. From facial recognition to medical imaging analysis, computer vision is transforming industries and creating new possibilities.

## The Computer Vision Revolution

Computer vision has evolved from a research curiosity to a practical technology with widespread business applications.

### Key Advances

**Deep Learning**: Convolutional neural networks have dramatically improved image recognition accuracy.

**Training Data**: Large labeled datasets enable training of sophisticated models.

**Computing Power**: GPUs and specialized hardware enable real-time processing.

**Pre-trained Models**: Transfer learning allows organizations to leverage pre-trained models.

## Core Capabilities

### Image Classification
Identify what objects are in an image:

- Product identification
- Quality inspection
- Content moderation
- Medical diagnosis support

### Object Detection
Locate and identify multiple objects in images:

- Autonomous vehicles
- Surveillance systems
- Retail analytics
- Industrial inspection

### Image Segmentation
Identify boundaries of objects at the pixel level:

- Medical imaging
- Autonomous navigation
- Photo editing
- Augmented reality

### Facial Recognition
Identify individuals from facial features:

- Security systems
- Identity verification
- Personalization
- Access control

## Industry Applications

### Manufacturing
- Quality inspection
- Defect detection
- Assembly verification
- Safety monitoring

### Healthcare
- Medical imaging analysis
- Disease detection
- Surgical assistance
- Patient monitoring

### Retail
- Inventory management
- Customer analytics
- Visual search
- Automated checkout

### Automotive
- Autonomous driving
- Driver monitoring
- Parking assistance
- Collision avoidance

### Agriculture
- Crop monitoring
- Disease detection
- Yield estimation
- Automated harvesting

## Implementation Considerations

### Data Requirements
Computer vision requires large amounts of labeled training data.

### Infrastructure
Depending on the application, significant computing resources may be needed.

### Privacy Concerns
Facial recognition and surveillance applications raise important privacy considerations.

### Model Maintenance
Computer vision models need ongoing monitoring and retraining.

## The Path Forward

Computer vision technology continues to advance rapidly. As models become more accurate and easier to deploy, adoption will accelerate across industries.

Organizations that understand computer vision capabilities and applications will be better positioned to leverage this transformative technology.`,author:"Dr. Michael Chen, Computer Vision Expert",date:"2014-02-28",category:"AI",image:"/images/hero-visual.jpg",readTime:"8 min",slug:"computer-vision-transforming"},{id:"44",title:"AI Ethics: Building Responsible AI Systems",excerpt:"Why ethical considerations are critical for AI development and deployment.",content:`As artificial intelligence becomes more powerful and pervasive, ethical considerations have moved to the forefront. Organizations that deploy AI systems must grapple with issues of fairness, transparency, privacy, and accountability. This article explores the emerging field of AI ethics.

## The Ethics Imperative

AI systems increasingly make decisions that affect people's lives:

- Hiring and promotion
- Loan approvals
- Medical diagnoses
- Criminal sentencing
- Content recommendations

When these systems are biased, opaque, or unaccountable, real harm can result.

### High-Profile Failures

**Biased Algorithms**: Systems that discriminate against certain groups.

**Privacy Violations**: AI systems that collect and use personal data inappropriately.

**Opaque Decisions**: AI systems that can't explain their decisions.

**Autonomous Weapons**: AI systems that can make life-or-death decisions.

## Key Ethical Principles

### Fairness
AI systems should treat all individuals and groups fairly:

- Avoid discriminatory outcomes
- Test for bias across demographic groups
- Consider disparate impact
- Enable recourse for affected individuals

### Transparency
AI systems should be explainable and interpretable:

- Document how systems work
- Provide explanations for decisions
- Enable audit and oversight
- Communicate limitations

### Privacy
AI systems should respect individual privacy:

- Minimize data collection
- Secure personal information
- Enable user control
- Comply with regulations

### Accountability
Clear responsibility for AI system outcomes:

- Define ownership
- Establish governance
- Enable redress
- Learn from failures

### Safety
AI systems should be safe and reliable:

- Test thoroughly
- Monitor performance
- Plan for failures
- Consider unintended consequences

## Implementing AI Ethics

### Governance
Establish organizational structures for AI ethics:

- Ethics boards
- Review processes
- Policy frameworks
- Training programs

### Technical Approaches
Build ethics into AI systems:

- Fairness constraints
- Explainability techniques
- Privacy-preserving methods
- Safety mechanisms

### Stakeholder Engagement
Involve diverse perspectives:

- Affected communities
- Subject matter experts
- Ethicists
- Regulators

## The Path Forward

AI ethics is not just a compliance issue—it's a business imperative. Organizations that build ethical AI systems will earn trust, avoid regulatory problems, and create more sustainable value.

The field of AI ethics is evolving rapidly. Organizations must stay informed and adapt their approaches as understanding and best practices develop.`,author:"Dr. Sarah Mitchell, AI Ethics Researcher",date:"2016-07-10",category:"AI",image:"/images/partnership.jpg",readTime:"9 min",slug:"ai-ethics-responsible-systems"},{id:"45",title:"Deep Learning: The Engine Behind the AI Revolution",excerpt:"Understanding deep learning and its transformative impact on artificial intelligence.",content:`Deep learning has emerged as the driving force behind the current AI revolution. From image recognition to natural language processing, deep learning models are achieving human-level performance on tasks that were previously thought to require human intelligence. This article provides an accessible introduction to deep learning.

## What is Deep Learning?

Deep learning is a subset of machine learning based on artificial neural networks with multiple layers—hence "deep." These layered networks can learn increasingly complex representations of data.

### How It Works

**Neural Networks**: Inspired by biological brains, artificial neurons process information and learn patterns.

**Layers**: Each layer learns to transform input data into increasingly abstract representations.

**Training**: Networks learn by adjusting connections based on errors, using a process called backpropagation.

**Data Requirements**: Deep learning typically requires large amounts of training data.

## Key Architectures

### Convolutional Neural Networks (CNNs)
Designed for image processing:

- Image classification
- Object detection
- Facial recognition
- Medical imaging

### Recurrent Neural Networks (RNNs)
Designed for sequential data:

- Natural language processing
- Speech recognition
- Time series prediction
- Text generation

### Transformers
State-of-the-art for many tasks:

- Language models (BERT, GPT)
- Translation
- Question answering
- Text summarization

### Generative Adversarial Networks (GANs)
Generate new content:

- Image generation
- Style transfer
- Data augmentation
- Deepfakes

## Why Deep Learning Works

### Representation Learning
Deep learning automatically learns the right representations from raw data, rather than requiring hand-engineered features.

### Scalability
Performance improves with more data and larger models—unlike traditional approaches that plateau.

### Transfer Learning
Pre-trained models can be fine-tuned for new tasks with limited data.

### End-to-End Learning
Single models can learn complex mappings from input to output.

## Business Applications

### Computer Vision
- Quality inspection
- Autonomous vehicles
- Medical diagnosis
- Security systems

### Natural Language Processing
- Chatbots
- Translation
- Content generation
- Sentiment analysis

### Speech and Audio
- Voice assistants
- Speech-to-text
- Music generation
- Sound classification

### Recommendation Systems
- Product recommendations
- Content personalization
- Ad targeting
- Playlist generation

## Challenges and Limitations

### Data Requirements
Deep learning needs lots of labeled data.

### Computational Cost
Training large models requires significant compute resources.

### Interpretability
Deep learning models are often "black boxes."

### Robustness
Models can be fooled by adversarial examples.

## The Path Forward

Deep learning continues to advance rapidly. As models become more efficient, easier to train, and more interpretable, adoption will accelerate across industries.

Organizations that understand deep learning capabilities and limitations will be better positioned to leverage this transformative technology.`,author:"Dr. David Kim, Deep Learning Researcher",date:"2018-10-05",category:"AI",image:"/images/analytics-visual.jpg",readTime:"8 min",slug:"deep-learning-ai-revolution"},{id:"46",title:"AI-Powered Automation: Transforming Business Operations",excerpt:"How intelligent automation is going beyond RPA to transform how work gets done.",content:`Automation has evolved from simple rule-based systems to intelligent systems that can learn, adapt, and make decisions. AI-powered automation is transforming business operations across industries, enabling organizations to work faster, smarter, and more efficiently.

## The Evolution of Automation

### Rule-Based Automation
Traditional automation follows predefined rules:

- Robotic Process Automation (RPA)
- Workflow automation
- Business rules engines

### AI-Powered Automation
Intelligent systems that can handle variability:

- Machine learning models
- Natural language understanding
- Computer vision
- Cognitive decision-making

## Types of Intelligent Automation

### Intelligent Document Processing
Automatically extract information from documents:

- Invoice processing
- Contract analysis
- Form extraction
- Claims processing

### Conversational AI
Automate customer and employee interactions:

- Chatbots
- Virtual assistants
- Voice interfaces
- Automated support

### Intelligent Decision Support
Augment human decision-making:

- Credit decisions
- Fraud detection
- Risk assessment
- Resource allocation

### Autonomous Systems
Self-operating systems that require minimal human intervention:

- Autonomous vehicles
- Robotic systems
- Smart manufacturing
- Automated trading

## Implementation Strategies

### Identify Opportunities
Look for processes that are:

- High-volume
- Rule-based with some variability
- Data-intensive
- Currently manual

### Assess Feasibility
Evaluate technical and business viability:

- Data availability
- Complexity of decisions
- Integration requirements
- ROI potential

### Start with Pilots
Test and learn before scaling:

- Prove the concept
- Refine the approach
- Build organizational confidence
- Measure results

### Scale with Governance
Expand successful pilots with appropriate oversight:

- Performance monitoring
- Model management
- Change management
- Continuous improvement

## Business Benefits

### Efficiency
- Faster processing
- 24/7 operation
- Reduced errors
- Lower costs

### Quality
- Consistent execution
- Reduced human error
- Compliance adherence
- Audit trails

### Scalability
- Handle volume spikes
- Expand without proportional headcount
- Rapid deployment
- Flexible capacity

### Employee Experience
- Eliminate tedious tasks
- Focus on higher-value work
- Faster turnaround
- Better work-life balance

## The Path Forward

AI-powered automation is not about replacing humans—it's about augmenting human capabilities and freeing people to focus on work that requires creativity, judgment, and empathy.

Organizations that embrace intelligent automation will be better positioned to compete in an increasingly digital economy.`,author:"Robert Martinez, Intelligent Automation Leader",date:"2020-12-18",category:"AI",image:"/images/hero-visual.jpg",readTime:"7 min",slug:"ai-powered-automation-operations"},{id:"47",title:"MLOps: Operationalizing Machine Learning at Scale",excerpt:"Best practices for deploying and managing machine learning models in production.",content:`Deploying machine learning models to production is just the beginning. Keeping them running effectively, monitoring their performance, and updating them as conditions change requires disciplined operational practices. MLOps—the intersection of machine learning and DevOps—provides the framework for operationalizing ML at scale.

## The MLOps Challenge

Many organizations struggle to move ML models from experimentation to production:

### Common Problems

**Deployment Complexity**: ML models have dependencies on data, code, and infrastructure.

**Model Drift**: Model performance degrades as data distributions change.

**Reproducibility**: It's hard to reproduce results and track model versions.

**Collaboration**: Data scientists and operations teams often work in silos.

**Monitoring**: Traditional monitoring doesn't capture ML-specific issues.

## MLOps Principles

### Automation
Automate as much of the ML lifecycle as possible:

- Data pipelines
- Model training
- Testing and validation
- Deployment
- Monitoring

### Version Control
Track versions of everything:

- Code
- Data
- Models
- Configurations
- Experiments

### Reproducibility
Ensure that results can be reproduced:

- Documented workflows
- Containerized environments
- Dependency management
- Experiment tracking

### Testing
Test ML systems thoroughly:

- Unit tests for code
- Integration tests for pipelines
- Model performance tests
- Bias and fairness tests

### Monitoring
Monitor ML systems in production:

- Model performance metrics
- Data quality
- System health
- Business outcomes

## The MLOps Lifecycle

### Data Management
- Data collection and validation
- Feature engineering
- Data versioning
- Data quality monitoring

### Model Development
- Experiment tracking
- Model training
- Hyperparameter tuning
- Model evaluation

### Deployment
- Model packaging
- A/B testing
- Canary deployments
- Rollback capabilities

### Operations
- Performance monitoring
- Model retraining
- Incident response
- Continuous improvement

## MLOps Tools and Platforms

### Experiment Tracking
- MLflow
- Weights & Biases
- TensorBoard

### Model Registry
- MLflow Model Registry
- AWS SageMaker Model Registry
- Azure ML Model Registry

### Pipeline Orchestration
- Kubeflow
- Apache Airflow
- Prefect

### Monitoring
- Evidently AI
- WhyLabs
- Arize AI

## Building MLOps Capabilities

### Team Structure
Bring together data scientists, ML engineers, and operations:

- Shared goals and metrics
- Collaborative workflows
- Cross-functional teams

### Governance
Establish policies and standards:

- Model approval processes
- Quality gates
- Security requirements
- Compliance standards

### Culture
Foster a culture of operational excellence:

- Ownership mindset
- Continuous improvement
- Learning from failures
- Celebrating successes

## The Path Forward

MLOps is essential for organizations that want to scale their machine learning capabilities. By adopting MLOps practices, organizations can deploy models faster, maintain them more effectively, and generate more value from their ML investments.`,author:"Lisa Park, MLOps Engineer",date:"2022-05-30",category:"AI",image:"/images/team-meeting.jpg",readTime:"9 min",slug:"mlops-operationalizing-ml"},{id:"48",title:"Generative AI: The Next Frontier of Artificial Intelligence",excerpt:"How generative AI is creating new possibilities for content creation and business innovation.",content:`Generative AI—systems that can create new content rather than just analyze existing content—has emerged as one of the most exciting and transformative areas of artificial intelligence. From text generation to image synthesis, generative AI is opening new possibilities across industries.

## The Generative AI Revolution

Generative AI models can create:

- Text (articles, code, poetry)
- Images (art, photography, design)
- Audio (music, speech, sound effects)
- Video (animation, deepfakes)
- 3D models and designs

### Key Technologies

**Large Language Models (LLMs)**: Models like GPT that can generate human-like text.

**Diffusion Models**: Techniques for generating high-quality images from text descriptions.

**Generative Adversarial Networks (GANs)**: Systems where two neural networks compete to generate realistic content.

**Variational Autoencoders (VAEs)**: Models that learn to generate new data similar to training data.

## Business Applications

### Content Creation
- Marketing copy
- Product descriptions
- Social media content
- Blog articles
- Email campaigns

### Design and Creative
- Graphic design
- Logo generation
- Interior design
- Fashion design
- Architectural concepts

### Software Development
- Code generation
- Documentation
- Test case creation
- Bug fixing
- Code review

### Customer Experience
- Personalized recommendations
- Chatbot responses
- Product customization
- Interactive experiences

### Research and Development
- Drug discovery
- Material science
- Protein folding
- Design optimization

## Opportunities and Risks

### Opportunities

**Productivity**: Automate creative tasks and accelerate content production.

**Personalization**: Create customized content at scale.

**Innovation**: Explore new design spaces and generate novel ideas.

**Accessibility**: Lower barriers to creative expression.

### Risks

**Quality Control**: Generated content may contain errors or biases.

**Copyright Issues**: Training data and generated content raise intellectual property questions.

**Misinformation**: Generative AI can create convincing fake content.

**Job Displacement**: Automation of creative work may impact employment.

## Implementing Generative AI

### Use Case Selection
Focus on applications where generative AI adds clear value:

- High-volume content needs
- Personalization requirements
- Creative exploration
- Efficiency opportunities

### Model Selection
Choose appropriate models for your needs:

- Pre-trained models (GPT, DALL-E, Stable Diffusion)
- Fine-tuned models for specific domains
- Custom models for proprietary use cases

### Governance
Establish policies for responsible use:

- Content review processes
- Bias detection and mitigation
- Usage guidelines
- Ethical standards

## The Path Forward

Generative AI is advancing rapidly, with new capabilities emerging constantly. Organizations that understand and responsibly leverage generative AI will be better positioned to innovate and compete.

The key is to approach generative AI thoughtfully—identifying valuable use cases, managing risks, and ensuring that human judgment remains central to the creative process.`,author:"Dr. Amanda Foster, Generative AI Researcher",date:"2024-09-08",category:"AI",image:"/images/analytics-visual.jpg",readTime:"8 min",slug:"generative-ai-frontier"},{id:"49",title:"AI Strategy: Building Competitive Advantage with Artificial Intelligence",excerpt:"A framework for developing and executing an AI strategy that drives business value.",content:`Artificial intelligence has moved from experimental technology to strategic imperative. Organizations that effectively leverage AI gain significant competitive advantages, while those that fall behind risk obsolescence. This article provides a framework for developing and executing an AI strategy.

## The Strategic Imperative

AI is not just a technology initiative—it's a business strategy that can:

- Create new products and services
- Transform customer experiences
- Optimize operations
- Enable better decisions
- Generate competitive advantages

### Why AI Strategies Fail

**Technology-First Thinking**: Focusing on AI capabilities rather than business problems.

**Isolated Pilots**: Running disconnected experiments without scaling plans.

**Insufficient Investment**: Underinvesting in data, talent, and infrastructure.

**Change Management Gaps**: Ignoring the organizational changes AI requires.

## The AI Strategy Framework

### 1. Assess Current State
Understand your starting point:

- Data assets and quality
- Technical infrastructure
- Talent and capabilities
- Use case opportunities
- Competitive landscape

### 2. Define AI Ambition
Be clear about what you want to achieve:

- Business objectives
- Competitive positioning
- Transformation scope
- Timeline and milestones

### 3. Identify Priority Use Cases
Focus on high-value, feasible applications:

- Customer-facing opportunities
- Operational improvements
- Decision support
- New business models

### 4. Build Enabling Capabilities
Invest in foundational capabilities:

- Data infrastructure
- Technology platforms
- Talent and skills
- Governance frameworks

### 5. Execute and Scale
Move from pilots to production:

- Agile delivery
- Performance measurement
- Continuous improvement
- Organizational change

## Key Strategic Choices

### Build vs. Buy vs. Partner
Decide how to acquire AI capabilities:

- **Build**: Develop internal capabilities for strategic differentiators.
- **Buy**: Purchase solutions for common use cases.
- **Partner**: Collaborate for specialized expertise.

### Centralized vs. Federated
Determine how to organize AI efforts:

- **Centralized**: Coordinated approach with shared resources.
- **Federated**: Distributed AI embedded in business units.
- **Hybrid**: Centralized platform with federated application.

### Make vs. Buy Talent
Decide how to acquire AI talent:

- Hire data scientists and engineers
- Upskill existing employees
- Engage consultants and contractors

## Governance and Ethics

### AI Governance
Establish oversight for AI initiatives:

- Investment decisions
- Model approval
- Risk management
- Performance monitoring

### Ethical AI
Ensure responsible AI development:

- Fairness and bias mitigation
- Transparency and explainability
- Privacy protection
- Accountability

## Measuring AI Success

### Business Metrics
- Revenue impact
- Cost savings
- Customer satisfaction
- Competitive position

### Operational Metrics
- Model performance
- Deployment velocity
- Data quality
- System reliability

### Capability Metrics
- Talent development
- Use case pipeline
- Technology maturity
- Cultural adoption

## The Path Forward

AI strategy is not a one-time exercise but an ongoing journey. Organizations that continuously evolve their AI capabilities and applications will be best positioned to compete in an increasingly AI-driven world.

Success requires not just technical excellence, but also business acumen, organizational change management, and ethical leadership.`,author:"Dr. Thomas Wright, AI Strategy Consultant",date:"2025-11-25",category:"AI",image:"/images/partnership.jpg",readTime:"9 min",slug:"ai-strategy-competitive-advantage"},{id:"50",title:"The Future of AI: Trends and Implications for Business",excerpt:"Emerging trends in artificial intelligence and what they mean for organizations.",content:`Artificial intelligence is evolving rapidly, with new capabilities and applications emerging constantly. Understanding where AI is heading helps organizations prepare for the future and position themselves to leverage new opportunities. This article explores key trends shaping the future of AI.

## Major AI Trends

### Multimodal AI
AI systems that can process and generate multiple types of content:

- Text, images, audio, and video together
- More natural human-computer interaction
- Richer understanding of context
- New application possibilities

### AI Agents
Autonomous systems that can perform complex tasks:

- Goal-directed behavior
- Tool use and integration
- Multi-step reasoning
- Collaboration with humans

### Edge AI
AI processing on local devices rather than in the cloud:

- Reduced latency
- Improved privacy
- Lower bandwidth requirements
- New application scenarios

### Explainable AI
AI systems that can explain their decisions:

- Regulatory compliance
- User trust
- Debugging and improvement
- Ethical requirements

### AI-Human Collaboration
Systems designed to augment rather than replace humans:

- Human-in-the-loop
- Collaborative decision-making
- Skill augmentation
- Creative partnership

### Foundation Models
Large pre-trained models that can be adapted to many tasks:

- Reduced training requirements
- Faster time to value
- Improved performance
- Democratized access

## Industry Implications

### Healthcare
- Personalized medicine
- Drug discovery acceleration
- Diagnostic assistance
- Remote patient monitoring

### Finance
- Real-time risk assessment
- Personalized financial advice
- Fraud prevention
- Algorithmic trading

### Manufacturing
- Predictive maintenance
- Quality optimization
- Supply chain intelligence
- Autonomous operations

### Retail
- Hyper-personalization
- Demand forecasting
- Visual search
- Automated service

### Education
- Personalized learning
- Intelligent tutoring
- Automated assessment
- Skill development

## Preparing for the Future

### Invest in Data
Data is the foundation of AI. Organizations must:

- Collect relevant data
- Ensure data quality
- Enable data access
- Maintain data governance

### Build Talent
AI requires diverse skills:

- Data scientists and engineers
- Domain experts
- Ethicists
- Change managers

### Experiment and Learn
Stay ahead through continuous experimentation:

- Pilot new technologies
- Learn from failures
- Share knowledge
- Adapt quickly

### Address Ethics Proactively
Build trust through responsible AI:

- Fairness and transparency
- Privacy protection
- Human oversight
- Accountability

## The Path Forward

The future of AI is both exciting and uncertain. Organizations that stay informed, experiment continuously, and build responsible AI practices will be best positioned to leverage AI for competitive advantage.

The key is to approach AI not as a technology to be adopted, but as a capability to be developed—one that requires ongoing investment, learning, and adaptation.`,author:"Dr. Catherine Lee, AI Futurist",date:"2026-01-20",category:"AI",image:"/images/hero-visual.jpg",readTime:"8 min",slug:"future-of-ai-trends"}],iA=e=>ds.find(t=>t.slug===e),rA=e=>ds.filter(t=>t.category===e),aA=()=>["Finance","Analytics","Consulting","Transformation","AI"],sA=()=>{const[e,t]=g.useState(null),[n,i]=g.useState(null),r=aA(),a=g.useMemo(()=>{const d=new Set(ds.map(f=>new Date(f.date).getFullYear()));return Array.from(d).sort((f,m)=>m-f)},[]),s=g.useMemo(()=>{let d=[...ds];return e&&(d=d.filter(f=>f.category===e)),n&&(d=d.filter(f=>new Date(f.date).getFullYear()===n)),d},[e,n]),o=s[0],l=s.slice(1,4),c=d=>new Date(d).toLocaleDateString("en-US",{month:"short",day:"numeric",year:"numeric"});return u.jsx("section",{id:"blog",className:"py-24 bg-light-bg",children:u.jsxs("div",{className:"max-w-[1200px] mx-auto px-4 sm:px-6 lg:px-8",children:[u.jsxs(I.div,{initial:{opacity:0,y:30},whileInView:{opacity:1,y:0},viewport:{once:!0},transition:{duration:.6,ease:[.25,.46,.45,.94]},className:"text-center mb-12",children:[u.jsxs("div",{className:"flex items-center justify-center gap-2 mb-4",children:[u.jsx("span",{className:"w-8 h-[2px] bg-accent-gold"}),u.jsx("span",{className:"text-accent-gold text-sm font-medium tracking-wider uppercase",children:"Insights & Resources"}),u.jsx("span",{className:"w-8 h-[2px] bg-accent-gold"})]}),u.jsx("h2",{className:"text-3xl sm:text-4xl font-bold text-dark-blue mb-4",children:"Latest from Our Blog"}),u.jsx("p",{className:"text-gray-600 text-lg max-w-2xl mx-auto",children:"Expert insights, industry trends, and practical advice to help your business thrive."})]}),u.jsxs(I.div,{initial:{opacity:0,y:20},whileInView:{opacity:1,y:0},viewport:{once:!0},transition:{duration:.5,delay:.2},className:"mb-12",children:[u.jsxs("div",{className:"flex items-center gap-2 mb-4 text-dark-blue",children:[u.jsx(VS,{className:"w-5 h-5"}),u.jsx("span",{className:"font-semibold",children:"Filter Articles"})]}),u.jsxs("div",{className:"mb-6",children:[u.jsxs("div",{className:"flex items-center gap-2 mb-3 text-gray-600",children:[u.jsx(US,{className:"w-4 h-4"}),u.jsx("span",{className:"text-sm font-medium",children:"By Service Category"})]}),u.jsxs("div",{className:"flex flex-wrap gap-2",children:[u.jsx("button",{onClick:()=>t(null),className:`px-4 py-2 rounded-full text-sm font-medium transition-all duration-200 ${e===null?"bg-accent-gold text-dark-blue":"bg-white border border-gray-200 text-gray-600 hover:border-accent-gold hover:text-accent-gold"}`,children:"All Categories"}),r.map(d=>u.jsx("button",{onClick:()=>t(d),className:`px-4 py-2 rounded-full text-sm font-medium transition-all duration-200 ${e===d?"bg-accent-gold text-dark-blue":"bg-white border border-gray-200 text-gray-600 hover:border-accent-gold hover:text-accent-gold"}`,children:d},d))]})]}),u.jsxs("div",{children:[u.jsxs("div",{className:"flex items-center gap-2 mb-3 text-gray-600",children:[u.jsx(ls,{className:"w-4 h-4"}),u.jsx("span",{className:"text-sm font-medium",children:"By Year"})]}),u.jsxs("div",{className:"flex flex-wrap gap-2",children:[u.jsx("button",{onClick:()=>i(null),className:`px-4 py-2 rounded-full text-sm font-medium transition-all duration-200 ${n===null?"bg-accent-gold text-dark-blue":"bg-white border border-gray-200 text-gray-600 hover:border-accent-gold hover:text-accent-gold"}`,children:"All Years"}),a.map(d=>u.jsx("button",{onClick:()=>i(d),className:`px-4 py-2 rounded-full text-sm font-medium transition-all duration-200 ${n===d?"bg-accent-gold text-dark-blue":"bg-white border border-gray-200 text-gray-600 hover:border-accent-gold hover:text-accent-gold"}`,children:d},d))]})]}),u.jsxs("div",{className:"mt-4 text-gray-500 text-sm",children:["Showing ",s.length," article",s.length!==1?"s":"",e&&` in ${e}`,n&&` from ${n}`]})]}),o&&u.jsx("div",{className:"mb-8",children:u.jsx(zm,{post:o,index:0,featured:!0})}),l.length>0&&u.jsx("div",{className:"grid md:grid-cols-3 gap-6 mb-12",children:l.map((d,f)=>u.jsx(zm,{post:d,index:f+1},d.id))}),s.length>4&&u.jsxs(I.div,{initial:{opacity:0,y:20},whileInView:{opacity:1,y:0},viewport:{once:!0},transition:{duration:.5,delay:.3},className:"mt-12",children:[u.jsx("h3",{className:"text-xl font-bold text-dark-blue mb-6",children:"More Articles"}),u.jsx("div",{className:"space-y-4",children:s.slice(4).map((d,f)=>u.jsx(I.article,{initial:{opacity:0,y:20},whileInView:{opacity:1,y:0},viewport:{once:!0},transition:{duration:.4,delay:f*.05},className:"bg-white rounded-xl p-6 shadow-card hover:shadow-card-hover transition-all duration-300",children:u.jsx(ai,{to:`/blog/${d.slug}`,className:"block",children:u.jsxs("div",{className:"flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4",children:[u.jsxs("div",{className:"flex-1",children:[u.jsxs("div",{className:"flex items-center gap-3 mb-2",children:[u.jsx("span",{className:"px-3 py-1 bg-accent-gold/10 text-accent-gold text-xs font-semibold rounded-full",children:d.category}),u.jsx("span",{className:"text-gray-400 text-sm",children:c(d.date)}),u.jsx("span",{className:"text-gray-400 text-sm",children:d.readTime})]}),u.jsx("h4",{className:"text-lg font-semibold text-dark-blue group-hover:text-accent-gold transition-colors",children:d.title}),u.jsx("p",{className:"text-gray-600 text-sm mt-1 line-clamp-2",children:d.excerpt})]}),u.jsxs("span",{className:"inline-flex items-center gap-1 px-4 py-2 border border-accent-gold text-accent-gold text-sm font-medium rounded-lg hover:bg-accent-gold hover:text-dark-blue transition-colors shrink-0",children:["Read",u.jsx(Er,{className:"ml-1 h-4 w-4"})]})]})})},d.id))})]}),s.length===0&&u.jsxs("div",{className:"text-center py-12",children:[u.jsx("p",{className:"text-gray-500 text-lg",children:"No articles found for the selected filters."}),u.jsx(ze,{onClick:()=>{t(null),i(null)},variant:"outline",className:"mt-4 border-accent-gold text-accent-gold hover:bg-accent-gold hover:text-dark-blue",children:"Clear Filters"})]})]})})},oA=()=>u.jsxs("section",{id:"contact",className:"py-24 relative overflow-hidden",children:[u.jsx("div",{className:"absolute inset-0 bg-gradient-to-br from-dark-blue via-navy to-dark-blue"}),u.jsx("div",{className:"absolute top-0 left-1/4 w-96 h-96 bg-accent-gold/5 rounded-full blur-3xl"}),u.jsx("div",{className:"absolute bottom-0 right-1/4 w-72 h-72 bg-accent-gold/3 rounded-full blur-3xl"}),u.jsx("div",{className:"relative z-10 max-w-[1200px] mx-auto px-4 sm:px-6 lg:px-8",children:u.jsxs(I.div,{initial:{opacity:0,y:30},whileInView:{opacity:1,y:0},viewport:{once:!0},transition:{duration:.6,ease:[.25,.46,.45,.94]},className:"text-center max-w-3xl mx-auto",children:[u.jsxs("div",{className:"flex items-center justify-center gap-2 mb-4",children:[u.jsx("span",{className:"w-8 h-[2px] bg-accent-gold"}),u.jsx("span",{className:"text-accent-gold text-sm font-medium tracking-wider uppercase",children:"Get Started"}),u.jsx("span",{className:"w-8 h-[2px] bg-accent-gold"})]}),u.jsx("h2",{className:"text-3xl sm:text-4xl lg:text-5xl font-bold text-white mb-6",children:"Ready to Transform Your Business?"}),u.jsx("p",{className:"text-text-secondary text-lg mb-10 leading-relaxed",children:"Let's discuss how FACTS can help you achieve your goals. Schedule a consultation with our team of experts and discover the difference strategic consulting can make."}),u.jsxs("div",{className:"flex flex-wrap justify-center gap-4",children:[u.jsxs(ze,{onClick:()=>window.open("https://calendly.com/bobkatz","_blank"),className:"bg-accent-gold text-dark-blue hover:bg-accent-gold-hover font-semibold px-8 py-6 text-base animate-pulse-glow",children:["Schedule a Consultation",u.jsx(Er,{className:"ml-2 h-5 w-5"})]}),u.jsxs(ze,{onClick:()=>window.location.href="mailto:info@factsconsulting.com",variant:"outline",className:"border-2 border-accent-gold text-accent-gold hover:bg-accent-gold/10 font-semibold px-8 py-6 text-base",children:[u.jsx(Fv,{className:"mr-2 h-5 w-5"}),"Contact Us"]})]})]})})]}),ic=()=>{const e=i=>{const r=document.querySelector(i);r&&r.scrollIntoView({behavior:"smooth"})},t=[{name:"Home",href:"#home"},{name:"About Us",href:"#about"},{name:"Services",href:"#services"},{name:"Contact",href:"#contact"}],n=["Financial Advisory","Data Analytics","Business Consulting","Digital Transformation"];return u.jsxs("footer",{className:"bg-dark-blue border-t border-accent-gold/10",children:[u.jsx("div",{className:"max-w-[1200px] mx-auto px-4 sm:px-6 lg:px-8 py-16",children:u.jsxs("div",{className:"grid sm:grid-cols-2 lg:grid-cols-4 gap-10",children:[u.jsxs(I.div,{initial:{opacity:0,y:20},whileInView:{opacity:1,y:0},viewport:{once:!0},transition:{duration:.5},className:"lg:col-span-1",children:[u.jsx("a",{href:"#home",onClick:i=>{i.preventDefault(),e("#home")},className:"flex items-center gap-4 mb-4",children:u.jsx("img",{src:"/images/facts-logo-inverted.png",alt:"FACTS",className:"h-48 w-auto"})}),u.jsx("p",{className:"text-text-secondary text-sm mb-2",children:"Finance | Analytics | Consulting | Transformation Services"}),u.jsx("p",{className:"text-text-secondary text-sm leading-relaxed",children:"Strategic consulting partner for financial transformation and business growth."})]}),u.jsxs(I.div,{initial:{opacity:0,y:20},whileInView:{opacity:1,y:0},viewport:{once:!0},transition:{duration:.5,delay:.1},children:[u.jsx("h4",{className:"text-white font-semibold mb-4",children:"Quick Links"}),u.jsx("ul",{className:"space-y-3",children:t.map(i=>u.jsx("li",{children:u.jsx("a",{href:i.href,onClick:r=>{r.preventDefault(),e(i.href)},className:"text-text-secondary hover:text-accent-gold transition-colors duration-200 text-sm",children:i.name})},i.name))})]}),u.jsxs(I.div,{initial:{opacity:0,y:20},whileInView:{opacity:1,y:0},viewport:{once:!0},transition:{duration:.5,delay:.2},children:[u.jsx("h4",{className:"text-white font-semibold mb-4",children:"Services"}),u.jsx("ul",{className:"space-y-3",children:n.map(i=>u.jsx("li",{children:u.jsx("span",{className:"text-text-secondary text-sm",children:i})},i))})]}),u.jsxs(I.div,{initial:{opacity:0,y:20},whileInView:{opacity:1,y:0},viewport:{once:!0},transition:{duration:.5,delay:.3},children:[u.jsx("h4",{className:"text-white font-semibold mb-4",children:"Contact"}),u.jsxs("ul",{className:"space-y-3",children:[u.jsx("li",{children:u.jsxs("a",{href:"mailto:info@factsconsulting.com",className:"text-text-secondary hover:text-accent-gold transition-colors duration-200 text-sm flex items-center gap-2",children:[u.jsx(Fv,{className:"w-4 h-4"}),"info@factsconsulting.com"]})}),u.jsx("li",{children:u.jsxs("a",{href:"tel:+15551234567",className:"text-text-secondary hover:text-accent-gold transition-colors duration-200 text-sm flex items-center gap-2",children:[u.jsx(HS,{className:"w-4 h-4"}),"(555) 123-4567"]})})]}),u.jsxs("div",{className:"flex items-center gap-4 mt-6",children:[u.jsx("a",{href:"https://www.linkedin.com",target:"_blank",rel:"noopener noreferrer",className:"w-10 h-10 bg-card-bg rounded-lg flex items-center justify-center text-text-secondary hover:text-accent-gold hover:bg-accent-gold/10 transition-all duration-200",children:u.jsx(qS,{className:"w-5 h-5"})}),u.jsx("a",{href:"https://www.instagram.com/factservicesfirm",target:"_blank",rel:"noopener noreferrer",className:"w-10 h-10 bg-card-bg rounded-lg flex items-center justify-center text-text-secondary hover:text-accent-gold hover:bg-accent-gold/10 transition-all duration-200",children:u.jsx(WS,{className:"w-5 h-5"})})]})]})]})}),u.jsx("div",{className:"border-t border-accent-gold/10",children:u.jsx("div",{className:"max-w-[1200px] mx-auto px-4 sm:px-6 lg:px-8 py-6",children:u.jsxs("div",{className:"flex flex-col sm:flex-row justify-between items-center gap-4",children:[u.jsx("p",{className:"text-text-secondary text-sm",children:"© 2025 FACTS Consulting. All rights reserved."}),u.jsx("p",{className:"text-text-secondary text-sm",children:"Made with precision and expertise"})]})})})]})},lA=()=>{const{slug:e}=jw(),t=ig(),n=e?iA(e):void 0;if(!n)return u.jsxs("div",{className:"min-h-screen bg-light-bg",children:[u.jsx(nc,{}),u.jsx("main",{className:"pt-32 pb-24",children:u.jsxs("div",{className:"max-w-[1200px] mx-auto px-4 sm:px-6 lg:px-8 text-center",children:[u.jsx("h1",{className:"text-3xl font-bold text-dark-blue mb-4",children:"Article Not Found"}),u.jsx("p",{className:"text-gray-600 mb-8",children:"The article you're looking for doesn't exist."}),u.jsxs(ze,{onClick:()=>t("/#blog"),className:"bg-accent-gold text-dark-blue hover:bg-accent-gold-hover",children:[u.jsx(Ao,{className:"mr-2 h-4 w-4"}),"Back to Blog"]})]})}),u.jsx(ic,{})]});const i=rA(n.category).filter(s=>s.id!==n.id).slice(0,3),r=s=>new Date(s).toLocaleDateString("en-US",{month:"long",day:"numeric",year:"numeric"}),a=s=>s.split(`

`).map((o,l)=>{if(o.startsWith("## "))return`<h2 class="text-2xl font-bold text-dark-blue mt-8 mb-4" key="${l}">${o.replace("## ","")}</h2>`;if(o.startsWith("### "))return`<h3 class="text-xl font-semibold text-dark-blue mt-6 mb-3" key="${l}">${o.replace("### ","")}</h3>`;if(o.startsWith("- ")){const c=o.split(`
`).map(d=>d.replace("- ",""));return`<ul class="list-disc list-inside mb-4 text-gray-700 space-y-1" key="${l}">${c.map(d=>`<li>${d}</li>`).join("")}</ul>`}return o.startsWith("**")&&o.endsWith("**")?`<p class="font-semibold text-dark-blue mb-4" key="${l}">${o.replace(/\*\*/g,"")}</p>`:`<p class="mb-4 text-gray-700 leading-relaxed" key="${l}">${o}</p>`}).join("");return u.jsxs("div",{className:"min-h-screen bg-light-bg",children:[u.jsx(nc,{}),u.jsxs("main",{className:"pt-24 pb-24",children:[u.jsxs("div",{className:"relative bg-dark-blue py-16 mb-12",children:[u.jsx("div",{className:"absolute inset-0 bg-gradient-to-br from-dark-blue via-navy to-dark-blue"}),u.jsx("div",{className:"absolute top-0 right-0 w-96 h-96 bg-accent-gold/5 rounded-full blur-3xl"}),u.jsx("div",{className:"relative z-10 max-w-[1200px] mx-auto px-4 sm:px-6 lg:px-8",children:u.jsxs(I.div,{initial:{opacity:0,y:20},animate:{opacity:1,y:0},transition:{duration:.5},children:[u.jsxs(ai,{to:"/#blog",className:"inline-flex items-center text-text-secondary hover:text-accent-gold transition-colors mb-6",children:[u.jsx(Ao,{className:"mr-2 h-4 w-4"}),"Back to Blog"]}),u.jsxs("div",{className:"flex items-center gap-3 mb-4",children:[u.jsx("span",{className:"px-3 py-1 bg-accent-gold text-dark-blue text-sm font-semibold rounded-full",children:n.category}),u.jsxs("span",{className:"flex items-center gap-1 text-text-secondary text-sm",children:[u.jsx(ls,{className:"h-4 w-4"}),r(n.date)]}),u.jsxs("span",{className:"flex items-center gap-1 text-text-secondary text-sm",children:[u.jsx(Xl,{className:"h-4 w-4"}),n.readTime]})]}),u.jsx("h1",{className:"text-3xl sm:text-4xl lg:text-5xl font-bold text-white mb-6 max-w-4xl",children:n.title}),u.jsxs("div",{className:"flex items-center gap-4",children:[u.jsx("div",{className:"w-12 h-12 bg-accent-gold rounded-full flex items-center justify-center",children:u.jsx("span",{className:"text-dark-blue font-bold text-lg",children:n.author.split(" ").map(s=>s[0]).join("").slice(0,2)})}),u.jsx("div",{children:u.jsxs("div",{className:"flex items-center gap-2 text-white",children:[u.jsx(Zl,{className:"h-4 w-4"}),u.jsx("span",{className:"font-medium",children:n.author})]})})]})]})})]}),u.jsx("div",{className:"max-w-[1200px] mx-auto px-4 sm:px-6 lg:px-8",children:u.jsxs("div",{className:"grid lg:grid-cols-3 gap-12",children:[u.jsxs(I.div,{className:"lg:col-span-2",initial:{opacity:0,y:20},animate:{opacity:1,y:0},transition:{duration:.5,delay:.2},children:[u.jsx("div",{className:"rounded-2xl overflow-hidden mb-8 shadow-card",children:u.jsx("img",{src:n.image,alt:n.title,className:"w-full h-64 sm:h-80 object-cover"})}),u.jsx("article",{className:"prose prose-lg max-w-none",dangerouslySetInnerHTML:{__html:a(n.content)}}),u.jsx("div",{className:"mt-12 pt-8 border-t border-gray-200",children:u.jsxs("div",{className:"flex items-center justify-between",children:[u.jsxs("div",{className:"flex items-center gap-4",children:[u.jsx("span",{className:"text-gray-600 font-medium",children:"Share this article:"}),u.jsxs("div",{className:"flex gap-2",children:[u.jsx("button",{className:"w-10 h-10 bg-card-bg rounded-lg flex items-center justify-center text-text-secondary hover:text-accent-gold hover:bg-accent-gold/10 transition-all",children:u.jsx(YS,{className:"h-5 w-5"})}),u.jsx("button",{className:"w-10 h-10 bg-card-bg rounded-lg flex items-center justify-center text-text-secondary hover:text-accent-gold hover:bg-accent-gold/10 transition-all",children:u.jsx(RS,{className:"h-5 w-5"})})]})]}),u.jsxs(ze,{onClick:()=>t("/#blog"),variant:"outline",className:"border-accent-gold text-accent-gold hover:bg-accent-gold hover:text-dark-blue",children:[u.jsx(Ao,{className:"mr-2 h-4 w-4"}),"Back to Blog"]})]})})]}),u.jsxs(I.div,{className:"lg:col-span-1",initial:{opacity:0,y:20},animate:{opacity:1,y:0},transition:{duration:.5,delay:.3},children:[i.length>0&&u.jsxs("div",{className:"bg-white rounded-2xl p-6 shadow-card mb-6",children:[u.jsxs("h3",{className:"text-lg font-bold text-dark-blue mb-4",children:["More in ",n.category]}),u.jsx("div",{className:"space-y-4",children:i.map(s=>u.jsxs(ai,{to:`/blog/${s.slug}`,className:"block group",children:[u.jsx("h4",{className:"text-sm font-medium text-dark-blue group-hover:text-accent-gold transition-colors line-clamp-2",children:s.title}),u.jsxs("p",{className:"text-xs text-gray-500 mt-1",children:[r(s.date)," • ",s.readTime]})]},s.id))})]}),u.jsxs("div",{className:"bg-white rounded-2xl p-6 shadow-card",children:[u.jsx("h3",{className:"text-lg font-bold text-dark-blue mb-4",children:"Browse by Category"}),u.jsx("div",{className:"flex flex-wrap gap-2",children:["Finance","Analytics","Consulting","Transformation","AI"].map(s=>u.jsx(ai,{to:"/#blog",className:`px-3 py-1 rounded-full text-sm transition-all ${s===n.category?"bg-accent-gold text-dark-blue":"bg-gray-100 text-gray-600 hover:bg-accent-gold/20 hover:text-accent-gold"}`,children:s},s))})]})]})]})})]}),u.jsx(ic,{})]})};function cA(){return u.jsxs(u.Fragment,{children:[u.jsx(nc,{}),u.jsxs("main",{children:[u.jsx(BE,{}),u.jsx(UE,{}),u.jsx(qE,{}),u.jsx(YE,{}),u.jsx(XE,{}),u.jsx(eA,{}),u.jsx(nA,{}),u.jsx(sA,{}),u.jsx(oA,{})]}),u.jsx(ic,{})]})}function uA(){return u.jsx(Zw,{children:u.jsxs($w,{children:[u.jsx(Rl,{path:"/",element:u.jsx(cA,{})}),u.jsx(Rl,{path:"/blog/:slug",element:u.jsx(lA,{})})]})})}Qh(document.getElementById("root")).render(u.jsx(g.StrictMode,{children:u.jsx(uA,{})}));
