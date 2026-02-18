function mS(n,i){for(var s=0;s<i.length;s++){const r=i[s];if(typeof r!="string"&&!Array.isArray(r)){for(const l in r)if(l!=="default"&&!(l in n)){const d=Object.getOwnPropertyDescriptor(r,l);d&&Object.defineProperty(n,l,d.get?d:{enumerable:!0,get:()=>r[l]})}}}return Object.freeze(Object.defineProperty(n,Symbol.toStringTag,{value:"Module"}))}(function(){const i=document.createElement("link").relList;if(i&&i.supports&&i.supports("modulepreload"))return;for(const l of document.querySelectorAll('link[rel="modulepreload"]'))r(l);new MutationObserver(l=>{for(const d of l)if(d.type==="childList")for(const f of d.addedNodes)f.tagName==="LINK"&&f.rel==="modulepreload"&&r(f)}).observe(document,{childList:!0,subtree:!0});function s(l){const d={};return l.integrity&&(d.integrity=l.integrity),l.referrerPolicy&&(d.referrerPolicy=l.referrerPolicy),l.crossOrigin==="use-credentials"?d.credentials="include":l.crossOrigin==="anonymous"?d.credentials="omit":d.credentials="same-origin",d}function r(l){if(l.ep)return;l.ep=!0;const d=s(l);fetch(l.href,d)}})();function Hv(n){return n&&n.__esModule&&Object.prototype.hasOwnProperty.call(n,"default")?n.default:n}var Uu={exports:{}},Fs={};var Gg;function pS(){if(Gg)return Fs;Gg=1;var n=Symbol.for("react.transitional.element"),i=Symbol.for("react.fragment");function s(r,l,d){var f=null;if(d!==void 0&&(f=""+d),l.key!==void 0&&(f=""+l.key),"key"in l){d={};for(var h in l)h!=="key"&&(d[h]=l[h])}else d=l;return l=d.ref,{$$typeof:n,type:r,key:f,ref:l!==void 0?l:null,props:d}}return Fs.Fragment=i,Fs.jsx=s,Fs.jsxs=s,Fs}var Yg;function gS(){return Yg||(Yg=1,Uu.exports=pS()),Uu.exports}var v=gS(),qu={exports:{}},le={};var Kg;function yS(){if(Kg)return le;Kg=1;var n=Symbol.for("react.transitional.element"),i=Symbol.for("react.portal"),s=Symbol.for("react.fragment"),r=Symbol.for("react.strict_mode"),l=Symbol.for("react.profiler"),d=Symbol.for("react.consumer"),f=Symbol.for("react.context"),h=Symbol.for("react.forward_ref"),p=Symbol.for("react.suspense"),m=Symbol.for("react.memo"),y=Symbol.for("react.lazy"),b=Symbol.for("react.activity"),S=Symbol.iterator;function C(M){return M===null||typeof M!="object"?null:(M=S&&M[S]||M["@@iterator"],typeof M=="function"?M:null)}var R={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},A=Object.assign,D={};function z(M,q,W){this.props=M,this.context=q,this.refs=D,this.updater=W||R}z.prototype.isReactComponent={},z.prototype.setState=function(M,q){if(typeof M!="object"&&typeof M!="function"&&M!=null)throw Error("takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,M,q,"setState")},z.prototype.forceUpdate=function(M){this.updater.enqueueForceUpdate(this,M,"forceUpdate")};function O(){}O.prototype=z.prototype;function L(M,q,W){this.props=M,this.context=q,this.refs=D,this.updater=W||R}var X=L.prototype=new O;X.constructor=L,A(X,z.prototype),X.isPureReactComponent=!0;var G=Array.isArray;function Z(){}var K={H:null,A:null,T:null,S:null},H=Object.prototype.hasOwnProperty;function se(M,q,W){var Q=W.ref;return{$$typeof:n,type:M,key:q,ref:Q!==void 0?Q:null,props:W}}function we(M,q){return se(M.type,q,M.props)}function Oe(M){return typeof M=="object"&&M!==null&&M.$$typeof===n}function Be(M){var q={"=":"=0",":":"=2"};return"$"+M.replace(/[=:]/g,function(W){return q[W]})}var jt=/\/+/g;function ut(M,q){return typeof M=="object"&&M!==null&&M.key!=null?Be(""+M.key):q.toString(36)}function Ie(M){switch(M.status){case"fulfilled":return M.value;case"rejected":throw M.reason;default:switch(typeof M.status=="string"?M.then(Z,Z):(M.status="pending",M.then(function(q){M.status==="pending"&&(M.status="fulfilled",M.value=q)},function(q){M.status==="pending"&&(M.status="rejected",M.reason=q)})),M.status){case"fulfilled":return M.value;case"rejected":throw M.reason}}throw M}function V(M,q,W,Q,re){var fe=typeof M;(fe==="undefined"||fe==="boolean")&&(M=null);var oe=!1;if(M===null)oe=!0;else switch(fe){case"bigint":case"string":case"number":oe=!0;break;case"object":switch(M.$$typeof){case n:case i:oe=!0;break;case y:return oe=M._init,V(oe(M._payload),q,W,Q,re)}}if(oe)return re=re(M),oe=Q===""?"."+ut(M,0):Q,G(re)?(W="",oe!=null&&(W=oe.replace(jt,"$&/")+"/"),V(re,q,W,"",function(en){return en})):re!=null&&(Oe(re)&&(re=we(re,W+(re.key==null||M&&M.key===re.key?"":(""+re.key).replace(jt,"$&/")+"/")+oe)),q.push(re)),1;oe=0;var tt=Q===""?".":Q+":";if(G(M))for(var Ne=0;Ne<M.length;Ne++)Q=M[Ne],fe=tt+ut(Q,Ne),oe+=V(Q,q,W,fe,re);else if(Ne=C(M),typeof Ne=="function")for(M=Ne.call(M),Ne=0;!(Q=M.next()).done;)Q=Q.value,fe=tt+ut(Q,Ne++),oe+=V(Q,q,W,fe,re);else if(fe==="object"){if(typeof M.then=="function")return V(Ie(M),q,W,Q,re);throw q=String(M),Error("Objects are not valid as a React child (found: "+(q==="[object Object]"?"object with keys {"+Object.keys(M).join(", ")+"}":q)+"). If you meant to render a collection of children, use an array instead.")}return oe}function Y(M,q,W){if(M==null)return M;var Q=[],re=0;return V(M,Q,"","",function(fe){return q.call(W,fe,re++)}),Q}function I(M){if(M._status===-1){var q=M._result;q=q(),q.then(function(W){(M._status===0||M._status===-1)&&(M._status=1,M._result=W)},function(W){(M._status===0||M._status===-1)&&(M._status=2,M._result=W)}),M._status===-1&&(M._status=0,M._result=q)}if(M._status===1)return M._result.default;throw M._result}var he=typeof reportError=="function"?reportError:function(M){if(typeof window=="object"&&typeof window.ErrorEvent=="function"){var q=new window.ErrorEvent("error",{bubbles:!0,cancelable:!0,message:typeof M=="object"&&M!==null&&typeof M.message=="string"?String(M.message):String(M),error:M});if(!window.dispatchEvent(q))return}else if(typeof process=="object"&&typeof process.emit=="function"){process.emit("uncaughtException",M);return}console.error(M)},pe={map:Y,forEach:function(M,q,W){Y(M,function(){q.apply(this,arguments)},W)},count:function(M){var q=0;return Y(M,function(){q++}),q},toArray:function(M){return Y(M,function(q){return q})||[]},only:function(M){if(!Oe(M))throw Error("React.Children.only expected to receive a single React element child.");return M}};return le.Activity=b,le.Children=pe,le.Component=z,le.Fragment=s,le.Profiler=l,le.PureComponent=L,le.StrictMode=r,le.Suspense=p,le.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE=K,le.__COMPILER_RUNTIME={__proto__:null,c:function(M){return K.H.useMemoCache(M)}},le.cache=function(M){return function(){return M.apply(null,arguments)}},le.cacheSignal=function(){return null},le.cloneElement=function(M,q,W){if(M==null)throw Error("The argument must be a React element, but you passed "+M+".");var Q=A({},M.props),re=M.key;if(q!=null)for(fe in q.key!==void 0&&(re=""+q.key),q)!H.call(q,fe)||fe==="key"||fe==="__self"||fe==="__source"||fe==="ref"&&q.ref===void 0||(Q[fe]=q[fe]);var fe=arguments.length-2;if(fe===1)Q.children=W;else if(1<fe){for(var oe=Array(fe),tt=0;tt<fe;tt++)oe[tt]=arguments[tt+2];Q.children=oe}return se(M.type,re,Q)},le.createContext=function(M){return M={$$typeof:f,_currentValue:M,_currentValue2:M,_threadCount:0,Provider:null,Consumer:null},M.Provider=M,M.Consumer={$$typeof:d,_context:M},M},le.createElement=function(M,q,W){var Q,re={},fe=null;if(q!=null)for(Q in q.key!==void 0&&(fe=""+q.key),q)H.call(q,Q)&&Q!=="key"&&Q!=="__self"&&Q!=="__source"&&(re[Q]=q[Q]);var oe=arguments.length-2;if(oe===1)re.children=W;else if(1<oe){for(var tt=Array(oe),Ne=0;Ne<oe;Ne++)tt[Ne]=arguments[Ne+2];re.children=tt}if(M&&M.defaultProps)for(Q in oe=M.defaultProps,oe)re[Q]===void 0&&(re[Q]=oe[Q]);return se(M,fe,re)},le.createRef=function(){return{current:null}},le.forwardRef=function(M){return{$$typeof:h,render:M}},le.isValidElement=Oe,le.lazy=function(M){return{$$typeof:y,_payload:{_status:-1,_result:M},_init:I}},le.memo=function(M,q){return{$$typeof:m,type:M,compare:q===void 0?null:q}},le.startTransition=function(M){var q=K.T,W={};K.T=W;try{var Q=M(),re=K.S;re!==null&&re(W,Q),typeof Q=="object"&&Q!==null&&typeof Q.then=="function"&&Q.then(Z,he)}catch(fe){he(fe)}finally{q!==null&&W.types!==null&&(q.types=W.types),K.T=q}},le.unstable_useCacheRefresh=function(){return K.H.useCacheRefresh()},le.use=function(M){return K.H.use(M)},le.useActionState=function(M,q,W){return K.H.useActionState(M,q,W)},le.useCallback=function(M,q){return K.H.useCallback(M,q)},le.useContext=function(M){return K.H.useContext(M)},le.useDebugValue=function(){},le.useDeferredValue=function(M,q){return K.H.useDeferredValue(M,q)},le.useEffect=function(M,q){return K.H.useEffect(M,q)},le.useEffectEvent=function(M){return K.H.useEffectEvent(M)},le.useId=function(){return K.H.useId()},le.useImperativeHandle=function(M,q,W){return K.H.useImperativeHandle(M,q,W)},le.useInsertionEffect=function(M,q){return K.H.useInsertionEffect(M,q)},le.useLayoutEffect=function(M,q){return K.H.useLayoutEffect(M,q)},le.useMemo=function(M,q){return K.H.useMemo(M,q)},le.useOptimistic=function(M,q){return K.H.useOptimistic(M,q)},le.useReducer=function(M,q,W){return K.H.useReducer(M,q,W)},le.useRef=function(M){return K.H.useRef(M)},le.useState=function(M){return K.H.useState(M)},le.useSyncExternalStore=function(M,q,W){return K.H.useSyncExternalStore(M,q,W)},le.useTransition=function(){return K.H.useTransition()},le.version="19.2.3",le}var Xg;function tf(){return Xg||(Xg=1,qu.exports=yS()),qu.exports}var w=tf();const vS=Hv(w),nf=mS({__proto__:null,default:vS},[w]);var Fu={exports:{}},Hs={},Hu={exports:{}},Iu={};var Wg;function bS(){return Wg||(Wg=1,(function(n){function i(V,Y){var I=V.length;V.push(Y);e:for(;0<I;){var he=I-1>>>1,pe=V[he];if(0<l(pe,Y))V[he]=Y,V[I]=pe,I=he;else break e}}function s(V){return V.length===0?null:V[0]}function r(V){if(V.length===0)return null;var Y=V[0],I=V.pop();if(I!==Y){V[0]=I;e:for(var he=0,pe=V.length,M=pe>>>1;he<M;){var q=2*(he+1)-1,W=V[q],Q=q+1,re=V[Q];if(0>l(W,I))Q<pe&&0>l(re,W)?(V[he]=re,V[Q]=I,he=Q):(V[he]=W,V[q]=I,he=q);else if(Q<pe&&0>l(re,I))V[he]=re,V[Q]=I,he=Q;else break e}}return Y}function l(V,Y){var I=V.sortIndex-Y.sortIndex;return I!==0?I:V.id-Y.id}if(n.unstable_now=void 0,typeof performance=="object"&&typeof performance.now=="function"){var d=performance;n.unstable_now=function(){return d.now()}}else{var f=Date,h=f.now();n.unstable_now=function(){return f.now()-h}}var p=[],m=[],y=1,b=null,S=3,C=!1,R=!1,A=!1,D=!1,z=typeof setTimeout=="function"?setTimeout:null,O=typeof clearTimeout=="function"?clearTimeout:null,L=typeof setImmediate<"u"?setImmediate:null;function X(V){for(var Y=s(m);Y!==null;){if(Y.callback===null)r(m);else if(Y.startTime<=V)r(m),Y.sortIndex=Y.expirationTime,i(p,Y);else break;Y=s(m)}}function G(V){if(A=!1,X(V),!R)if(s(p)!==null)R=!0,Z||(Z=!0,Be());else{var Y=s(m);Y!==null&&Ie(G,Y.startTime-V)}}var Z=!1,K=-1,H=5,se=-1;function we(){return D?!0:!(n.unstable_now()-se<H)}function Oe(){if(D=!1,Z){var V=n.unstable_now();se=V;var Y=!0;try{e:{R=!1,A&&(A=!1,O(K),K=-1),C=!0;var I=S;try{t:{for(X(V),b=s(p);b!==null&&!(b.expirationTime>V&&we());){var he=b.callback;if(typeof he=="function"){b.callback=null,S=b.priorityLevel;var pe=he(b.expirationTime<=V);if(V=n.unstable_now(),typeof pe=="function"){b.callback=pe,X(V),Y=!0;break t}b===s(p)&&r(p),X(V)}else r(p);b=s(p)}if(b!==null)Y=!0;else{var M=s(m);M!==null&&Ie(G,M.startTime-V),Y=!1}}break e}finally{b=null,S=I,C=!1}Y=void 0}}finally{Y?Be():Z=!1}}}var Be;if(typeof L=="function")Be=function(){L(Oe)};else if(typeof MessageChannel<"u"){var jt=new MessageChannel,ut=jt.port2;jt.port1.onmessage=Oe,Be=function(){ut.postMessage(null)}}else Be=function(){z(Oe,0)};function Ie(V,Y){K=z(function(){V(n.unstable_now())},Y)}n.unstable_IdlePriority=5,n.unstable_ImmediatePriority=1,n.unstable_LowPriority=4,n.unstable_NormalPriority=3,n.unstable_Profiling=null,n.unstable_UserBlockingPriority=2,n.unstable_cancelCallback=function(V){V.callback=null},n.unstable_forceFrameRate=function(V){0>V||125<V?console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"):H=0<V?Math.floor(1e3/V):5},n.unstable_getCurrentPriorityLevel=function(){return S},n.unstable_next=function(V){switch(S){case 1:case 2:case 3:var Y=3;break;default:Y=S}var I=S;S=Y;try{return V()}finally{S=I}},n.unstable_requestPaint=function(){D=!0},n.unstable_runWithPriority=function(V,Y){switch(V){case 1:case 2:case 3:case 4:case 5:break;default:V=3}var I=S;S=V;try{return Y()}finally{S=I}},n.unstable_scheduleCallback=function(V,Y,I){var he=n.unstable_now();switch(typeof I=="object"&&I!==null?(I=I.delay,I=typeof I=="number"&&0<I?he+I:he):I=he,V){case 1:var pe=-1;break;case 2:pe=250;break;case 5:pe=1073741823;break;case 4:pe=1e4;break;default:pe=5e3}return pe=I+pe,V={id:y++,callback:Y,priorityLevel:V,startTime:I,expirationTime:pe,sortIndex:-1},I>he?(V.sortIndex=I,i(m,V),s(p)===null&&V===s(m)&&(A?(O(K),K=-1):A=!0,Ie(G,I-he))):(V.sortIndex=pe,i(p,V),R||C||(R=!0,Z||(Z=!0,Be()))),V},n.unstable_shouldYield=we,n.unstable_wrapCallback=function(V){var Y=S;return function(){var I=S;S=Y;try{return V.apply(this,arguments)}finally{S=I}}}})(Iu)),Iu}var Qg;function xS(){return Qg||(Qg=1,Hu.exports=bS()),Hu.exports}var Gu={exports:{}},dt={};var Zg;function wS(){if(Zg)return dt;Zg=1;var n=tf();function i(p){var m="https://react.dev/errors/"+p;if(1<arguments.length){m+="?args[]="+encodeURIComponent(arguments[1]);for(var y=2;y<arguments.length;y++)m+="&args[]="+encodeURIComponent(arguments[y])}return"Minified React error #"+p+"; visit "+m+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}function s(){}var r={d:{f:s,r:function(){throw Error(i(522))},D:s,C:s,L:s,m:s,X:s,S:s,M:s},p:0,findDOMNode:null},l=Symbol.for("react.portal");function d(p,m,y){var b=3<arguments.length&&arguments[3]!==void 0?arguments[3]:null;return{$$typeof:l,key:b==null?null:""+b,children:p,containerInfo:m,implementation:y}}var f=n.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE;function h(p,m){if(p==="font")return"";if(typeof m=="string")return m==="use-credentials"?m:""}return dt.__DOM_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE=r,dt.createPortal=function(p,m){var y=2<arguments.length&&arguments[2]!==void 0?arguments[2]:null;if(!m||m.nodeType!==1&&m.nodeType!==9&&m.nodeType!==11)throw Error(i(299));return d(p,m,null,y)},dt.flushSync=function(p){var m=f.T,y=r.p;try{if(f.T=null,r.p=2,p)return p()}finally{f.T=m,r.p=y,r.d.f()}},dt.preconnect=function(p,m){typeof p=="string"&&(m?(m=m.crossOrigin,m=typeof m=="string"?m==="use-credentials"?m:"":void 0):m=null,r.d.C(p,m))},dt.prefetchDNS=function(p){typeof p=="string"&&r.d.D(p)},dt.preinit=function(p,m){if(typeof p=="string"&&m&&typeof m.as=="string"){var y=m.as,b=h(y,m.crossOrigin),S=typeof m.integrity=="string"?m.integrity:void 0,C=typeof m.fetchPriority=="string"?m.fetchPriority:void 0;y==="style"?r.d.S(p,typeof m.precedence=="string"?m.precedence:void 0,{crossOrigin:b,integrity:S,fetchPriority:C}):y==="script"&&r.d.X(p,{crossOrigin:b,integrity:S,fetchPriority:C,nonce:typeof m.nonce=="string"?m.nonce:void 0})}},dt.preinitModule=function(p,m){if(typeof p=="string")if(typeof m=="object"&&m!==null){if(m.as==null||m.as==="script"){var y=h(m.as,m.crossOrigin);r.d.M(p,{crossOrigin:y,integrity:typeof m.integrity=="string"?m.integrity:void 0,nonce:typeof m.nonce=="string"?m.nonce:void 0})}}else m==null&&r.d.M(p)},dt.preload=function(p,m){if(typeof p=="string"&&typeof m=="object"&&m!==null&&typeof m.as=="string"){var y=m.as,b=h(y,m.crossOrigin);r.d.L(p,y,{crossOrigin:b,integrity:typeof m.integrity=="string"?m.integrity:void 0,nonce:typeof m.nonce=="string"?m.nonce:void 0,type:typeof m.type=="string"?m.type:void 0,fetchPriority:typeof m.fetchPriority=="string"?m.fetchPriority:void 0,referrerPolicy:typeof m.referrerPolicy=="string"?m.referrerPolicy:void 0,imageSrcSet:typeof m.imageSrcSet=="string"?m.imageSrcSet:void 0,imageSizes:typeof m.imageSizes=="string"?m.imageSizes:void 0,media:typeof m.media=="string"?m.media:void 0})}},dt.preloadModule=function(p,m){if(typeof p=="string")if(m){var y=h(m.as,m.crossOrigin);r.d.m(p,{as:typeof m.as=="string"&&m.as!=="script"?m.as:void 0,crossOrigin:y,integrity:typeof m.integrity=="string"?m.integrity:void 0})}else r.d.m(p)},dt.requestFormReset=function(p){r.d.r(p)},dt.unstable_batchedUpdates=function(p,m){return p(m)},dt.useFormState=function(p,m,y){return f.H.useFormState(p,m,y)},dt.useFormStatus=function(){return f.H.useHostTransitionStatus()},dt.version="19.2.3",dt}var Jg;function Iv(){if(Jg)return Gu.exports;Jg=1;function n(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(n)}catch(i){console.error(i)}}return n(),Gu.exports=wS(),Gu.exports}var $g;function SS(){if($g)return Hs;$g=1;var n=xS(),i=tf(),s=Iv();function r(e){var t="https://react.dev/errors/"+e;if(1<arguments.length){t+="?args[]="+encodeURIComponent(arguments[1]);for(var a=2;a<arguments.length;a++)t+="&args[]="+encodeURIComponent(arguments[a])}return"Minified React error #"+e+"; visit "+t+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}function l(e){return!(!e||e.nodeType!==1&&e.nodeType!==9&&e.nodeType!==11)}function d(e){var t=e,a=e;if(e.alternate)for(;t.return;)t=t.return;else{e=t;do t=e,(t.flags&4098)!==0&&(a=t.return),e=t.return;while(e)}return t.tag===3?a:null}function f(e){if(e.tag===13){var t=e.memoizedState;if(t===null&&(e=e.alternate,e!==null&&(t=e.memoizedState)),t!==null)return t.dehydrated}return null}function h(e){if(e.tag===31){var t=e.memoizedState;if(t===null&&(e=e.alternate,e!==null&&(t=e.memoizedState)),t!==null)return t.dehydrated}return null}function p(e){if(d(e)!==e)throw Error(r(188))}function m(e){var t=e.alternate;if(!t){if(t=d(e),t===null)throw Error(r(188));return t!==e?null:e}for(var a=e,o=t;;){var c=a.return;if(c===null)break;var u=c.alternate;if(u===null){if(o=c.return,o!==null){a=o;continue}break}if(c.child===u.child){for(u=c.child;u;){if(u===a)return p(c),e;if(u===o)return p(c),t;u=u.sibling}throw Error(r(188))}if(a.return!==o.return)a=c,o=u;else{for(var g=!1,x=c.child;x;){if(x===a){g=!0,a=c,o=u;break}if(x===o){g=!0,o=c,a=u;break}x=x.sibling}if(!g){for(x=u.child;x;){if(x===a){g=!0,a=u,o=c;break}if(x===o){g=!0,o=u,a=c;break}x=x.sibling}if(!g)throw Error(r(189))}}if(a.alternate!==o)throw Error(r(190))}if(a.tag!==3)throw Error(r(188));return a.stateNode.current===a?e:t}function y(e){var t=e.tag;if(t===5||t===26||t===27||t===6)return e;for(e=e.child;e!==null;){if(t=y(e),t!==null)return t;e=e.sibling}return null}var b=Object.assign,S=Symbol.for("react.element"),C=Symbol.for("react.transitional.element"),R=Symbol.for("react.portal"),A=Symbol.for("react.fragment"),D=Symbol.for("react.strict_mode"),z=Symbol.for("react.profiler"),O=Symbol.for("react.consumer"),L=Symbol.for("react.context"),X=Symbol.for("react.forward_ref"),G=Symbol.for("react.suspense"),Z=Symbol.for("react.suspense_list"),K=Symbol.for("react.memo"),H=Symbol.for("react.lazy"),se=Symbol.for("react.activity"),we=Symbol.for("react.memo_cache_sentinel"),Oe=Symbol.iterator;function Be(e){return e===null||typeof e!="object"?null:(e=Oe&&e[Oe]||e["@@iterator"],typeof e=="function"?e:null)}var jt=Symbol.for("react.client.reference");function ut(e){if(e==null)return null;if(typeof e=="function")return e.$$typeof===jt?null:e.displayName||e.name||null;if(typeof e=="string")return e;switch(e){case A:return"Fragment";case z:return"Profiler";case D:return"StrictMode";case G:return"Suspense";case Z:return"SuspenseList";case se:return"Activity"}if(typeof e=="object")switch(e.$$typeof){case R:return"Portal";case L:return e.displayName||"Context";case O:return(e._context.displayName||"Context")+".Consumer";case X:var t=e.render;return e=e.displayName,e||(e=t.displayName||t.name||"",e=e!==""?"ForwardRef("+e+")":"ForwardRef"),e;case K:return t=e.displayName||null,t!==null?t:ut(e.type)||"Memo";case H:t=e._payload,e=e._init;try{return ut(e(t))}catch{}}return null}var Ie=Array.isArray,V=i.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE,Y=s.__DOM_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE,I={pending:!1,data:null,method:null,action:null},he=[],pe=-1;function M(e){return{current:e}}function q(e){0>pe||(e.current=he[pe],he[pe]=null,pe--)}function W(e,t){pe++,he[pe]=e.current,e.current=t}var Q=M(null),re=M(null),fe=M(null),oe=M(null);function tt(e,t){switch(W(fe,t),W(re,e),W(Q,null),t.nodeType){case 9:case 11:e=(e=t.documentElement)&&(e=e.namespaceURI)?mg(e):0;break;default:if(e=t.tagName,t=t.namespaceURI)t=mg(t),e=pg(t,e);else switch(e){case"svg":e=1;break;case"math":e=2;break;default:e=0}}q(Q),W(Q,e)}function Ne(){q(Q),q(re),q(fe)}function en(e){e.memoizedState!==null&&W(oe,e);var t=Q.current,a=pg(t,e.type);t!==a&&(W(re,e),W(Q,a))}function Ln(e){re.current===e&&(q(Q),q(re)),oe.current===e&&(q(oe),Vs._currentValue=I)}var Pn,If;function va(e){if(Pn===void 0)try{throw Error()}catch(a){var t=a.stack.trim().match(/\n( *(at )?)/);Pn=t&&t[1]||"",If=-1<a.stack.indexOf(`
    at`)?" (<anonymous>)":-1<a.stack.indexOf("@")?"@unknown:0:0":""}return`
`+Pn+e+If}var Tl=!1;function Cl(e,t){if(!e||Tl)return"";Tl=!0;var a=Error.prepareStackTrace;Error.prepareStackTrace=void 0;try{var o={DetermineComponentFrameRoot:function(){try{if(t){var F=function(){throw Error()};if(Object.defineProperty(F.prototype,"props",{set:function(){throw Error()}}),typeof Reflect=="object"&&Reflect.construct){try{Reflect.construct(F,[])}catch(P){var B=P}Reflect.construct(e,[],F)}else{try{F.call()}catch(P){B=P}e.call(F.prototype)}}else{try{throw Error()}catch(P){B=P}(F=e())&&typeof F.catch=="function"&&F.catch(function(){})}}catch(P){if(P&&B&&typeof P.stack=="string")return[P.stack,B.stack]}return[null,null]}};o.DetermineComponentFrameRoot.displayName="DetermineComponentFrameRoot";var c=Object.getOwnPropertyDescriptor(o.DetermineComponentFrameRoot,"name");c&&c.configurable&&Object.defineProperty(o.DetermineComponentFrameRoot,"name",{value:"DetermineComponentFrameRoot"});var u=o.DetermineComponentFrameRoot(),g=u[0],x=u[1];if(g&&x){var T=g.split(`
`),j=x.split(`
`);for(c=o=0;o<T.length&&!T[o].includes("DetermineComponentFrameRoot");)o++;for(;c<j.length&&!j[c].includes("DetermineComponentFrameRoot");)c++;if(o===T.length||c===j.length)for(o=T.length-1,c=j.length-1;1<=o&&0<=c&&T[o]!==j[c];)c--;for(;1<=o&&0<=c;o--,c--)if(T[o]!==j[c]){if(o!==1||c!==1)do if(o--,c--,0>c||T[o]!==j[c]){var _=`
`+T[o].replace(" at new "," at ");return e.displayName&&_.includes("<anonymous>")&&(_=_.replace("<anonymous>",e.displayName)),_}while(1<=o&&0<=c);break}}}finally{Tl=!1,Error.prepareStackTrace=a}return(a=e?e.displayName||e.name:"")?va(a):""}function G0(e,t){switch(e.tag){case 26:case 27:case 5:return va(e.type);case 16:return va("Lazy");case 13:return e.child!==t&&t!==null?va("Suspense Fallback"):va("Suspense");case 19:return va("SuspenseList");case 0:case 15:return Cl(e.type,!1);case 11:return Cl(e.type.render,!1);case 1:return Cl(e.type,!0);case 31:return va("Activity");default:return""}}function Gf(e){try{var t="",a=null;do t+=G0(e,a),a=e,e=e.return;while(e);return t}catch(o){return`
Error generating stack: `+o.message+`
`+o.stack}}var Al=Object.prototype.hasOwnProperty,El=n.unstable_scheduleCallback,Ml=n.unstable_cancelCallback,Y0=n.unstable_shouldYield,K0=n.unstable_requestPaint,Tt=n.unstable_now,X0=n.unstable_getCurrentPriorityLevel,Yf=n.unstable_ImmediatePriority,Kf=n.unstable_UserBlockingPriority,po=n.unstable_NormalPriority,W0=n.unstable_LowPriority,Xf=n.unstable_IdlePriority,Q0=n.log,Z0=n.unstable_setDisableYieldValue,Qi=null,Ct=null;function Vn(e){if(typeof Q0=="function"&&Z0(e),Ct&&typeof Ct.setStrictMode=="function")try{Ct.setStrictMode(Qi,e)}catch{}}var At=Math.clz32?Math.clz32:e1,J0=Math.log,$0=Math.LN2;function e1(e){return e>>>=0,e===0?32:31-(J0(e)/$0|0)|0}var go=256,yo=262144,vo=4194304;function ba(e){var t=e&42;if(t!==0)return t;switch(e&-e){case 1:return 1;case 2:return 2;case 4:return 4;case 8:return 8;case 16:return 16;case 32:return 32;case 64:return 64;case 128:return 128;case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:return e&261888;case 262144:case 524288:case 1048576:case 2097152:return e&3932160;case 4194304:case 8388608:case 16777216:case 33554432:return e&62914560;case 67108864:return 67108864;case 134217728:return 134217728;case 268435456:return 268435456;case 536870912:return 536870912;case 1073741824:return 0;default:return e}}function bo(e,t,a){var o=e.pendingLanes;if(o===0)return 0;var c=0,u=e.suspendedLanes,g=e.pingedLanes;e=e.warmLanes;var x=o&134217727;return x!==0?(o=x&~u,o!==0?c=ba(o):(g&=x,g!==0?c=ba(g):a||(a=x&~e,a!==0&&(c=ba(a))))):(x=o&~u,x!==0?c=ba(x):g!==0?c=ba(g):a||(a=o&~e,a!==0&&(c=ba(a)))),c===0?0:t!==0&&t!==c&&(t&u)===0&&(u=c&-c,a=t&-t,u>=a||u===32&&(a&4194048)!==0)?t:c}function Zi(e,t){return(e.pendingLanes&~(e.suspendedLanes&~e.pingedLanes)&t)===0}function t1(e,t){switch(e){case 1:case 2:case 4:case 8:case 64:return t+250;case 16:case 32:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return t+5e3;case 4194304:case 8388608:case 16777216:case 33554432:return-1;case 67108864:case 134217728:case 268435456:case 536870912:case 1073741824:return-1;default:return-1}}function Wf(){var e=vo;return vo<<=1,(vo&62914560)===0&&(vo=4194304),e}function Dl(e){for(var t=[],a=0;31>a;a++)t.push(e);return t}function Ji(e,t){e.pendingLanes|=t,t!==268435456&&(e.suspendedLanes=0,e.pingedLanes=0,e.warmLanes=0)}function n1(e,t,a,o,c,u){var g=e.pendingLanes;e.pendingLanes=a,e.suspendedLanes=0,e.pingedLanes=0,e.warmLanes=0,e.expiredLanes&=a,e.entangledLanes&=a,e.errorRecoveryDisabledLanes&=a,e.shellSuspendCounter=0;var x=e.entanglements,T=e.expirationTimes,j=e.hiddenUpdates;for(a=g&~a;0<a;){var _=31-At(a),F=1<<_;x[_]=0,T[_]=-1;var B=j[_];if(B!==null)for(j[_]=null,_=0;_<B.length;_++){var P=B[_];P!==null&&(P.lane&=-536870913)}a&=~F}o!==0&&Qf(e,o,0),u!==0&&c===0&&e.tag!==0&&(e.suspendedLanes|=u&~(g&~t))}function Qf(e,t,a){e.pendingLanes|=t,e.suspendedLanes&=~t;var o=31-At(t);e.entangledLanes|=t,e.entanglements[o]=e.entanglements[o]|1073741824|a&261930}function Zf(e,t){var a=e.entangledLanes|=t;for(e=e.entanglements;a;){var o=31-At(a),c=1<<o;c&t|e[o]&t&&(e[o]|=t),a&=~c}}function Jf(e,t){var a=t&-t;return a=(a&42)!==0?1:Rl(a),(a&(e.suspendedLanes|t))!==0?0:a}function Rl(e){switch(e){case 2:e=1;break;case 8:e=4;break;case 32:e=16;break;case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:case 4194304:case 8388608:case 16777216:case 33554432:e=128;break;case 268435456:e=134217728;break;default:e=0}return e}function kl(e){return e&=-e,2<e?8<e?(e&134217727)!==0?32:268435456:8:2}function $f(){var e=Y.p;return e!==0?e:(e=window.event,e===void 0?32:Vg(e.type))}function eh(e,t){var a=Y.p;try{return Y.p=e,t()}finally{Y.p=a}}var _n=Math.random().toString(36).slice(2),it="__reactFiber$"+_n,gt="__reactProps$"+_n,Ya="__reactContainer$"+_n,zl="__reactEvents$"+_n,a1="__reactListeners$"+_n,i1="__reactHandles$"+_n,th="__reactResources$"+_n,$i="__reactMarker$"+_n;function Nl(e){delete e[it],delete e[gt],delete e[zl],delete e[a1],delete e[i1]}function Ka(e){var t=e[it];if(t)return t;for(var a=e.parentNode;a;){if(t=a[Ya]||a[it]){if(a=t.alternate,t.child!==null||a!==null&&a.child!==null)for(e=Sg(e);e!==null;){if(a=e[it])return a;e=Sg(e)}return t}e=a,a=e.parentNode}return null}function Xa(e){if(e=e[it]||e[Ya]){var t=e.tag;if(t===5||t===6||t===13||t===31||t===26||t===27||t===3)return e}return null}function es(e){var t=e.tag;if(t===5||t===26||t===27||t===6)return e.stateNode;throw Error(r(33))}function Wa(e){var t=e[th];return t||(t=e[th]={hoistableStyles:new Map,hoistableScripts:new Map}),t}function nt(e){e[$i]=!0}var nh=new Set,ah={};function xa(e,t){Qa(e,t),Qa(e+"Capture",t)}function Qa(e,t){for(ah[e]=t,e=0;e<t.length;e++)nh.add(t[e])}var s1=RegExp("^[:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD][:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD\\-.0-9\\u00B7\\u0300-\\u036F\\u203F-\\u2040]*$"),ih={},sh={};function o1(e){return Al.call(sh,e)?!0:Al.call(ih,e)?!1:s1.test(e)?sh[e]=!0:(ih[e]=!0,!1)}function xo(e,t,a){if(o1(t))if(a===null)e.removeAttribute(t);else{switch(typeof a){case"undefined":case"function":case"symbol":e.removeAttribute(t);return;case"boolean":var o=t.toLowerCase().slice(0,5);if(o!=="data-"&&o!=="aria-"){e.removeAttribute(t);return}}e.setAttribute(t,""+a)}}function wo(e,t,a){if(a===null)e.removeAttribute(t);else{switch(typeof a){case"undefined":case"function":case"symbol":case"boolean":e.removeAttribute(t);return}e.setAttribute(t,""+a)}}function hn(e,t,a,o){if(o===null)e.removeAttribute(a);else{switch(typeof o){case"undefined":case"function":case"symbol":case"boolean":e.removeAttribute(a);return}e.setAttributeNS(t,a,""+o)}}function Ot(e){switch(typeof e){case"bigint":case"boolean":case"number":case"string":case"undefined":return e;case"object":return e;default:return""}}function oh(e){var t=e.type;return(e=e.nodeName)&&e.toLowerCase()==="input"&&(t==="checkbox"||t==="radio")}function r1(e,t,a){var o=Object.getOwnPropertyDescriptor(e.constructor.prototype,t);if(!e.hasOwnProperty(t)&&typeof o<"u"&&typeof o.get=="function"&&typeof o.set=="function"){var c=o.get,u=o.set;return Object.defineProperty(e,t,{configurable:!0,get:function(){return c.call(this)},set:function(g){a=""+g,u.call(this,g)}}),Object.defineProperty(e,t,{enumerable:o.enumerable}),{getValue:function(){return a},setValue:function(g){a=""+g},stopTracking:function(){e._valueTracker=null,delete e[t]}}}}function jl(e){if(!e._valueTracker){var t=oh(e)?"checked":"value";e._valueTracker=r1(e,t,""+e[t])}}function rh(e){if(!e)return!1;var t=e._valueTracker;if(!t)return!0;var a=t.getValue(),o="";return e&&(o=oh(e)?e.checked?"true":"false":e.value),e=o,e!==a?(t.setValue(e),!0):!1}function So(e){if(e=e||(typeof document<"u"?document:void 0),typeof e>"u")return null;try{return e.activeElement||e.body}catch{return e.body}}var l1=/[\n"\\]/g;function Bt(e){return e.replace(l1,function(t){return"\\"+t.charCodeAt(0).toString(16)+" "})}function Ol(e,t,a,o,c,u,g,x){e.name="",g!=null&&typeof g!="function"&&typeof g!="symbol"&&typeof g!="boolean"?e.type=g:e.removeAttribute("type"),t!=null?g==="number"?(t===0&&e.value===""||e.value!=t)&&(e.value=""+Ot(t)):e.value!==""+Ot(t)&&(e.value=""+Ot(t)):g!=="submit"&&g!=="reset"||e.removeAttribute("value"),t!=null?Bl(e,g,Ot(t)):a!=null?Bl(e,g,Ot(a)):o!=null&&e.removeAttribute("value"),c==null&&u!=null&&(e.defaultChecked=!!u),c!=null&&(e.checked=c&&typeof c!="function"&&typeof c!="symbol"),x!=null&&typeof x!="function"&&typeof x!="symbol"&&typeof x!="boolean"?e.name=""+Ot(x):e.removeAttribute("name")}function lh(e,t,a,o,c,u,g,x){if(u!=null&&typeof u!="function"&&typeof u!="symbol"&&typeof u!="boolean"&&(e.type=u),t!=null||a!=null){if(!(u!=="submit"&&u!=="reset"||t!=null)){jl(e);return}a=a!=null?""+Ot(a):"",t=t!=null?""+Ot(t):a,x||t===e.value||(e.value=t),e.defaultValue=t}o=o??c,o=typeof o!="function"&&typeof o!="symbol"&&!!o,e.checked=x?e.checked:!!o,e.defaultChecked=!!o,g!=null&&typeof g!="function"&&typeof g!="symbol"&&typeof g!="boolean"&&(e.name=g),jl(e)}function Bl(e,t,a){t==="number"&&So(e.ownerDocument)===e||e.defaultValue===""+a||(e.defaultValue=""+a)}function Za(e,t,a,o){if(e=e.options,t){t={};for(var c=0;c<a.length;c++)t["$"+a[c]]=!0;for(a=0;a<e.length;a++)c=t.hasOwnProperty("$"+e[a].value),e[a].selected!==c&&(e[a].selected=c),c&&o&&(e[a].defaultSelected=!0)}else{for(a=""+Ot(a),t=null,c=0;c<e.length;c++){if(e[c].value===a){e[c].selected=!0,o&&(e[c].defaultSelected=!0);return}t!==null||e[c].disabled||(t=e[c])}t!==null&&(t.selected=!0)}}function ch(e,t,a){if(t!=null&&(t=""+Ot(t),t!==e.value&&(e.value=t),a==null)){e.defaultValue!==t&&(e.defaultValue=t);return}e.defaultValue=a!=null?""+Ot(a):""}function uh(e,t,a,o){if(t==null){if(o!=null){if(a!=null)throw Error(r(92));if(Ie(o)){if(1<o.length)throw Error(r(93));o=o[0]}a=o}a==null&&(a=""),t=a}a=Ot(t),e.defaultValue=a,o=e.textContent,o===a&&o!==""&&o!==null&&(e.value=o),jl(e)}function Ja(e,t){if(t){var a=e.firstChild;if(a&&a===e.lastChild&&a.nodeType===3){a.nodeValue=t;return}}e.textContent=t}var c1=new Set("animationIterationCount aspectRatio borderImageOutset borderImageSlice borderImageWidth boxFlex boxFlexGroup boxOrdinalGroup columnCount columns flex flexGrow flexPositive flexShrink flexNegative flexOrder gridArea gridRow gridRowEnd gridRowSpan gridRowStart gridColumn gridColumnEnd gridColumnSpan gridColumnStart fontWeight lineClamp lineHeight opacity order orphans scale tabSize widows zIndex zoom fillOpacity floodOpacity stopOpacity strokeDasharray strokeDashoffset strokeMiterlimit strokeOpacity strokeWidth MozAnimationIterationCount MozBoxFlex MozBoxFlexGroup MozLineClamp msAnimationIterationCount msFlex msZoom msFlexGrow msFlexNegative msFlexOrder msFlexPositive msFlexShrink msGridColumn msGridColumnSpan msGridRow msGridRowSpan WebkitAnimationIterationCount WebkitBoxFlex WebKitBoxFlexGroup WebkitBoxOrdinalGroup WebkitColumnCount WebkitColumns WebkitFlex WebkitFlexGrow WebkitFlexPositive WebkitFlexShrink WebkitLineClamp".split(" "));function dh(e,t,a){var o=t.indexOf("--")===0;a==null||typeof a=="boolean"||a===""?o?e.setProperty(t,""):t==="float"?e.cssFloat="":e[t]="":o?e.setProperty(t,a):typeof a!="number"||a===0||c1.has(t)?t==="float"?e.cssFloat=a:e[t]=(""+a).trim():e[t]=a+"px"}function fh(e,t,a){if(t!=null&&typeof t!="object")throw Error(r(62));if(e=e.style,a!=null){for(var o in a)!a.hasOwnProperty(o)||t!=null&&t.hasOwnProperty(o)||(o.indexOf("--")===0?e.setProperty(o,""):o==="float"?e.cssFloat="":e[o]="");for(var c in t)o=t[c],t.hasOwnProperty(c)&&a[c]!==o&&dh(e,c,o)}else for(var u in t)t.hasOwnProperty(u)&&dh(e,u,t[u])}function Ll(e){if(e.indexOf("-")===-1)return!1;switch(e){case"annotation-xml":case"color-profile":case"font-face":case"font-face-src":case"font-face-uri":case"font-face-format":case"font-face-name":case"missing-glyph":return!1;default:return!0}}var u1=new Map([["acceptCharset","accept-charset"],["htmlFor","for"],["httpEquiv","http-equiv"],["crossOrigin","crossorigin"],["accentHeight","accent-height"],["alignmentBaseline","alignment-baseline"],["arabicForm","arabic-form"],["baselineShift","baseline-shift"],["capHeight","cap-height"],["clipPath","clip-path"],["clipRule","clip-rule"],["colorInterpolation","color-interpolation"],["colorInterpolationFilters","color-interpolation-filters"],["colorProfile","color-profile"],["colorRendering","color-rendering"],["dominantBaseline","dominant-baseline"],["enableBackground","enable-background"],["fillOpacity","fill-opacity"],["fillRule","fill-rule"],["floodColor","flood-color"],["floodOpacity","flood-opacity"],["fontFamily","font-family"],["fontSize","font-size"],["fontSizeAdjust","font-size-adjust"],["fontStretch","font-stretch"],["fontStyle","font-style"],["fontVariant","font-variant"],["fontWeight","font-weight"],["glyphName","glyph-name"],["glyphOrientationHorizontal","glyph-orientation-horizontal"],["glyphOrientationVertical","glyph-orientation-vertical"],["horizAdvX","horiz-adv-x"],["horizOriginX","horiz-origin-x"],["imageRendering","image-rendering"],["letterSpacing","letter-spacing"],["lightingColor","lighting-color"],["markerEnd","marker-end"],["markerMid","marker-mid"],["markerStart","marker-start"],["overlinePosition","overline-position"],["overlineThickness","overline-thickness"],["paintOrder","paint-order"],["panose-1","panose-1"],["pointerEvents","pointer-events"],["renderingIntent","rendering-intent"],["shapeRendering","shape-rendering"],["stopColor","stop-color"],["stopOpacity","stop-opacity"],["strikethroughPosition","strikethrough-position"],["strikethroughThickness","strikethrough-thickness"],["strokeDasharray","stroke-dasharray"],["strokeDashoffset","stroke-dashoffset"],["strokeLinecap","stroke-linecap"],["strokeLinejoin","stroke-linejoin"],["strokeMiterlimit","stroke-miterlimit"],["strokeOpacity","stroke-opacity"],["strokeWidth","stroke-width"],["textAnchor","text-anchor"],["textDecoration","text-decoration"],["textRendering","text-rendering"],["transformOrigin","transform-origin"],["underlinePosition","underline-position"],["underlineThickness","underline-thickness"],["unicodeBidi","unicode-bidi"],["unicodeRange","unicode-range"],["unitsPerEm","units-per-em"],["vAlphabetic","v-alphabetic"],["vHanging","v-hanging"],["vIdeographic","v-ideographic"],["vMathematical","v-mathematical"],["vectorEffect","vector-effect"],["vertAdvY","vert-adv-y"],["vertOriginX","vert-origin-x"],["vertOriginY","vert-origin-y"],["wordSpacing","word-spacing"],["writingMode","writing-mode"],["xmlnsXlink","xmlns:xlink"],["xHeight","x-height"]]),d1=/^[\u0000-\u001F ]*j[\r\n\t]*a[\r\n\t]*v[\r\n\t]*a[\r\n\t]*s[\r\n\t]*c[\r\n\t]*r[\r\n\t]*i[\r\n\t]*p[\r\n\t]*t[\r\n\t]*:/i;function To(e){return d1.test(""+e)?"javascript:throw new Error('React has blocked a javascript: URL as a security precaution.')":e}function mn(){}var Pl=null;function Vl(e){return e=e.target||e.srcElement||window,e.correspondingUseElement&&(e=e.correspondingUseElement),e.nodeType===3?e.parentNode:e}var $a=null,ei=null;function hh(e){var t=Xa(e);if(t&&(e=t.stateNode)){var a=e[gt]||null;e:switch(e=t.stateNode,t.type){case"input":if(Ol(e,a.value,a.defaultValue,a.defaultValue,a.checked,a.defaultChecked,a.type,a.name),t=a.name,a.type==="radio"&&t!=null){for(a=e;a.parentNode;)a=a.parentNode;for(a=a.querySelectorAll('input[name="'+Bt(""+t)+'"][type="radio"]'),t=0;t<a.length;t++){var o=a[t];if(o!==e&&o.form===e.form){var c=o[gt]||null;if(!c)throw Error(r(90));Ol(o,c.value,c.defaultValue,c.defaultValue,c.checked,c.defaultChecked,c.type,c.name)}}for(t=0;t<a.length;t++)o=a[t],o.form===e.form&&rh(o)}break e;case"textarea":ch(e,a.value,a.defaultValue);break e;case"select":t=a.value,t!=null&&Za(e,!!a.multiple,t,!1)}}}var _l=!1;function mh(e,t,a){if(_l)return e(t,a);_l=!0;try{var o=e(t);return o}finally{if(_l=!1,($a!==null||ei!==null)&&(ur(),$a&&(t=$a,e=ei,ei=$a=null,hh(t),e)))for(t=0;t<e.length;t++)hh(e[t])}}function ts(e,t){var a=e.stateNode;if(a===null)return null;var o=a[gt]||null;if(o===null)return null;a=o[t];e:switch(t){case"onClick":case"onClickCapture":case"onDoubleClick":case"onDoubleClickCapture":case"onMouseDown":case"onMouseDownCapture":case"onMouseMove":case"onMouseMoveCapture":case"onMouseUp":case"onMouseUpCapture":case"onMouseEnter":(o=!o.disabled)||(e=e.type,o=!(e==="button"||e==="input"||e==="select"||e==="textarea")),e=!o;break e;default:e=!1}if(e)return null;if(a&&typeof a!="function")throw Error(r(231,t,typeof a));return a}var pn=!(typeof window>"u"||typeof window.document>"u"||typeof window.document.createElement>"u"),Ul=!1;if(pn)try{var ns={};Object.defineProperty(ns,"passive",{get:function(){Ul=!0}}),window.addEventListener("test",ns,ns),window.removeEventListener("test",ns,ns)}catch{Ul=!1}var Un=null,ql=null,Co=null;function ph(){if(Co)return Co;var e,t=ql,a=t.length,o,c="value"in Un?Un.value:Un.textContent,u=c.length;for(e=0;e<a&&t[e]===c[e];e++);var g=a-e;for(o=1;o<=g&&t[a-o]===c[u-o];o++);return Co=c.slice(e,1<o?1-o:void 0)}function Ao(e){var t=e.keyCode;return"charCode"in e?(e=e.charCode,e===0&&t===13&&(e=13)):e=t,e===10&&(e=13),32<=e||e===13?e:0}function Eo(){return!0}function gh(){return!1}function yt(e){function t(a,o,c,u,g){this._reactName=a,this._targetInst=c,this.type=o,this.nativeEvent=u,this.target=g,this.currentTarget=null;for(var x in e)e.hasOwnProperty(x)&&(a=e[x],this[x]=a?a(u):u[x]);return this.isDefaultPrevented=(u.defaultPrevented!=null?u.defaultPrevented:u.returnValue===!1)?Eo:gh,this.isPropagationStopped=gh,this}return b(t.prototype,{preventDefault:function(){this.defaultPrevented=!0;var a=this.nativeEvent;a&&(a.preventDefault?a.preventDefault():typeof a.returnValue!="unknown"&&(a.returnValue=!1),this.isDefaultPrevented=Eo)},stopPropagation:function(){var a=this.nativeEvent;a&&(a.stopPropagation?a.stopPropagation():typeof a.cancelBubble!="unknown"&&(a.cancelBubble=!0),this.isPropagationStopped=Eo)},persist:function(){},isPersistent:Eo}),t}var wa={eventPhase:0,bubbles:0,cancelable:0,timeStamp:function(e){return e.timeStamp||Date.now()},defaultPrevented:0,isTrusted:0},Mo=yt(wa),as=b({},wa,{view:0,detail:0}),f1=yt(as),Fl,Hl,is,Do=b({},as,{screenX:0,screenY:0,clientX:0,clientY:0,pageX:0,pageY:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,getModifierState:Gl,button:0,buttons:0,relatedTarget:function(e){return e.relatedTarget===void 0?e.fromElement===e.srcElement?e.toElement:e.fromElement:e.relatedTarget},movementX:function(e){return"movementX"in e?e.movementX:(e!==is&&(is&&e.type==="mousemove"?(Fl=e.screenX-is.screenX,Hl=e.screenY-is.screenY):Hl=Fl=0,is=e),Fl)},movementY:function(e){return"movementY"in e?e.movementY:Hl}}),yh=yt(Do),h1=b({},Do,{dataTransfer:0}),m1=yt(h1),p1=b({},as,{relatedTarget:0}),Il=yt(p1),g1=b({},wa,{animationName:0,elapsedTime:0,pseudoElement:0}),y1=yt(g1),v1=b({},wa,{clipboardData:function(e){return"clipboardData"in e?e.clipboardData:window.clipboardData}}),b1=yt(v1),x1=b({},wa,{data:0}),vh=yt(x1),w1={Esc:"Escape",Spacebar:" ",Left:"ArrowLeft",Up:"ArrowUp",Right:"ArrowRight",Down:"ArrowDown",Del:"Delete",Win:"OS",Menu:"ContextMenu",Apps:"ContextMenu",Scroll:"ScrollLock",MozPrintableKey:"Unidentified"},S1={8:"Backspace",9:"Tab",12:"Clear",13:"Enter",16:"Shift",17:"Control",18:"Alt",19:"Pause",20:"CapsLock",27:"Escape",32:" ",33:"PageUp",34:"PageDown",35:"End",36:"Home",37:"ArrowLeft",38:"ArrowUp",39:"ArrowRight",40:"ArrowDown",45:"Insert",46:"Delete",112:"F1",113:"F2",114:"F3",115:"F4",116:"F5",117:"F6",118:"F7",119:"F8",120:"F9",121:"F10",122:"F11",123:"F12",144:"NumLock",145:"ScrollLock",224:"Meta"},T1={Alt:"altKey",Control:"ctrlKey",Meta:"metaKey",Shift:"shiftKey"};function C1(e){var t=this.nativeEvent;return t.getModifierState?t.getModifierState(e):(e=T1[e])?!!t[e]:!1}function Gl(){return C1}var A1=b({},as,{key:function(e){if(e.key){var t=w1[e.key]||e.key;if(t!=="Unidentified")return t}return e.type==="keypress"?(e=Ao(e),e===13?"Enter":String.fromCharCode(e)):e.type==="keydown"||e.type==="keyup"?S1[e.keyCode]||"Unidentified":""},code:0,location:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,repeat:0,locale:0,getModifierState:Gl,charCode:function(e){return e.type==="keypress"?Ao(e):0},keyCode:function(e){return e.type==="keydown"||e.type==="keyup"?e.keyCode:0},which:function(e){return e.type==="keypress"?Ao(e):e.type==="keydown"||e.type==="keyup"?e.keyCode:0}}),E1=yt(A1),M1=b({},Do,{pointerId:0,width:0,height:0,pressure:0,tangentialPressure:0,tiltX:0,tiltY:0,twist:0,pointerType:0,isPrimary:0}),bh=yt(M1),D1=b({},as,{touches:0,targetTouches:0,changedTouches:0,altKey:0,metaKey:0,ctrlKey:0,shiftKey:0,getModifierState:Gl}),R1=yt(D1),k1=b({},wa,{propertyName:0,elapsedTime:0,pseudoElement:0}),z1=yt(k1),N1=b({},Do,{deltaX:function(e){return"deltaX"in e?e.deltaX:"wheelDeltaX"in e?-e.wheelDeltaX:0},deltaY:function(e){return"deltaY"in e?e.deltaY:"wheelDeltaY"in e?-e.wheelDeltaY:"wheelDelta"in e?-e.wheelDelta:0},deltaZ:0,deltaMode:0}),j1=yt(N1),O1=b({},wa,{newState:0,oldState:0}),B1=yt(O1),L1=[9,13,27,32],Yl=pn&&"CompositionEvent"in window,ss=null;pn&&"documentMode"in document&&(ss=document.documentMode);var P1=pn&&"TextEvent"in window&&!ss,xh=pn&&(!Yl||ss&&8<ss&&11>=ss),wh=" ",Sh=!1;function Th(e,t){switch(e){case"keyup":return L1.indexOf(t.keyCode)!==-1;case"keydown":return t.keyCode!==229;case"keypress":case"mousedown":case"focusout":return!0;default:return!1}}function Ch(e){return e=e.detail,typeof e=="object"&&"data"in e?e.data:null}var ti=!1;function V1(e,t){switch(e){case"compositionend":return Ch(t);case"keypress":return t.which!==32?null:(Sh=!0,wh);case"textInput":return e=t.data,e===wh&&Sh?null:e;default:return null}}function _1(e,t){if(ti)return e==="compositionend"||!Yl&&Th(e,t)?(e=ph(),Co=ql=Un=null,ti=!1,e):null;switch(e){case"paste":return null;case"keypress":if(!(t.ctrlKey||t.altKey||t.metaKey)||t.ctrlKey&&t.altKey){if(t.char&&1<t.char.length)return t.char;if(t.which)return String.fromCharCode(t.which)}return null;case"compositionend":return xh&&t.locale!=="ko"?null:t.data;default:return null}}var U1={color:!0,date:!0,datetime:!0,"datetime-local":!0,email:!0,month:!0,number:!0,password:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0};function Ah(e){var t=e&&e.nodeName&&e.nodeName.toLowerCase();return t==="input"?!!U1[e.type]:t==="textarea"}function Eh(e,t,a,o){$a?ei?ei.push(o):ei=[o]:$a=o,t=yr(t,"onChange"),0<t.length&&(a=new Mo("onChange","change",null,a,o),e.push({event:a,listeners:t}))}var os=null,rs=null;function q1(e){lg(e,0)}function Ro(e){var t=es(e);if(rh(t))return e}function Mh(e,t){if(e==="change")return t}var Dh=!1;if(pn){var Kl;if(pn){var Xl="oninput"in document;if(!Xl){var Rh=document.createElement("div");Rh.setAttribute("oninput","return;"),Xl=typeof Rh.oninput=="function"}Kl=Xl}else Kl=!1;Dh=Kl&&(!document.documentMode||9<document.documentMode)}function kh(){os&&(os.detachEvent("onpropertychange",zh),rs=os=null)}function zh(e){if(e.propertyName==="value"&&Ro(rs)){var t=[];Eh(t,rs,e,Vl(e)),mh(q1,t)}}function F1(e,t,a){e==="focusin"?(kh(),os=t,rs=a,os.attachEvent("onpropertychange",zh)):e==="focusout"&&kh()}function H1(e){if(e==="selectionchange"||e==="keyup"||e==="keydown")return Ro(rs)}function I1(e,t){if(e==="click")return Ro(t)}function G1(e,t){if(e==="input"||e==="change")return Ro(t)}function Y1(e,t){return e===t&&(e!==0||1/e===1/t)||e!==e&&t!==t}var Et=typeof Object.is=="function"?Object.is:Y1;function ls(e,t){if(Et(e,t))return!0;if(typeof e!="object"||e===null||typeof t!="object"||t===null)return!1;var a=Object.keys(e),o=Object.keys(t);if(a.length!==o.length)return!1;for(o=0;o<a.length;o++){var c=a[o];if(!Al.call(t,c)||!Et(e[c],t[c]))return!1}return!0}function Nh(e){for(;e&&e.firstChild;)e=e.firstChild;return e}function jh(e,t){var a=Nh(e);e=0;for(var o;a;){if(a.nodeType===3){if(o=e+a.textContent.length,e<=t&&o>=t)return{node:a,offset:t-e};e=o}e:{for(;a;){if(a.nextSibling){a=a.nextSibling;break e}a=a.parentNode}a=void 0}a=Nh(a)}}function Oh(e,t){return e&&t?e===t?!0:e&&e.nodeType===3?!1:t&&t.nodeType===3?Oh(e,t.parentNode):"contains"in e?e.contains(t):e.compareDocumentPosition?!!(e.compareDocumentPosition(t)&16):!1:!1}function Bh(e){e=e!=null&&e.ownerDocument!=null&&e.ownerDocument.defaultView!=null?e.ownerDocument.defaultView:window;for(var t=So(e.document);t instanceof e.HTMLIFrameElement;){try{var a=typeof t.contentWindow.location.href=="string"}catch{a=!1}if(a)e=t.contentWindow;else break;t=So(e.document)}return t}function Wl(e){var t=e&&e.nodeName&&e.nodeName.toLowerCase();return t&&(t==="input"&&(e.type==="text"||e.type==="search"||e.type==="tel"||e.type==="url"||e.type==="password")||t==="textarea"||e.contentEditable==="true")}var K1=pn&&"documentMode"in document&&11>=document.documentMode,ni=null,Ql=null,cs=null,Zl=!1;function Lh(e,t,a){var o=a.window===a?a.document:a.nodeType===9?a:a.ownerDocument;Zl||ni==null||ni!==So(o)||(o=ni,"selectionStart"in o&&Wl(o)?o={start:o.selectionStart,end:o.selectionEnd}:(o=(o.ownerDocument&&o.ownerDocument.defaultView||window).getSelection(),o={anchorNode:o.anchorNode,anchorOffset:o.anchorOffset,focusNode:o.focusNode,focusOffset:o.focusOffset}),cs&&ls(cs,o)||(cs=o,o=yr(Ql,"onSelect"),0<o.length&&(t=new Mo("onSelect","select",null,t,a),e.push({event:t,listeners:o}),t.target=ni)))}function Sa(e,t){var a={};return a[e.toLowerCase()]=t.toLowerCase(),a["Webkit"+e]="webkit"+t,a["Moz"+e]="moz"+t,a}var ai={animationend:Sa("Animation","AnimationEnd"),animationiteration:Sa("Animation","AnimationIteration"),animationstart:Sa("Animation","AnimationStart"),transitionrun:Sa("Transition","TransitionRun"),transitionstart:Sa("Transition","TransitionStart"),transitioncancel:Sa("Transition","TransitionCancel"),transitionend:Sa("Transition","TransitionEnd")},Jl={},Ph={};pn&&(Ph=document.createElement("div").style,"AnimationEvent"in window||(delete ai.animationend.animation,delete ai.animationiteration.animation,delete ai.animationstart.animation),"TransitionEvent"in window||delete ai.transitionend.transition);function Ta(e){if(Jl[e])return Jl[e];if(!ai[e])return e;var t=ai[e],a;for(a in t)if(t.hasOwnProperty(a)&&a in Ph)return Jl[e]=t[a];return e}var Vh=Ta("animationend"),_h=Ta("animationiteration"),Uh=Ta("animationstart"),X1=Ta("transitionrun"),W1=Ta("transitionstart"),Q1=Ta("transitioncancel"),qh=Ta("transitionend"),Fh=new Map,$l="abort auxClick beforeToggle cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");$l.push("scrollEnd");function Kt(e,t){Fh.set(e,t),xa(t,[e])}var ko=typeof reportError=="function"?reportError:function(e){if(typeof window=="object"&&typeof window.ErrorEvent=="function"){var t=new window.ErrorEvent("error",{bubbles:!0,cancelable:!0,message:typeof e=="object"&&e!==null&&typeof e.message=="string"?String(e.message):String(e),error:e});if(!window.dispatchEvent(t))return}else if(typeof process=="object"&&typeof process.emit=="function"){process.emit("uncaughtException",e);return}console.error(e)},Lt=[],ii=0,ec=0;function zo(){for(var e=ii,t=ec=ii=0;t<e;){var a=Lt[t];Lt[t++]=null;var o=Lt[t];Lt[t++]=null;var c=Lt[t];Lt[t++]=null;var u=Lt[t];if(Lt[t++]=null,o!==null&&c!==null){var g=o.pending;g===null?c.next=c:(c.next=g.next,g.next=c),o.pending=c}u!==0&&Hh(a,c,u)}}function No(e,t,a,o){Lt[ii++]=e,Lt[ii++]=t,Lt[ii++]=a,Lt[ii++]=o,ec|=o,e.lanes|=o,e=e.alternate,e!==null&&(e.lanes|=o)}function tc(e,t,a,o){return No(e,t,a,o),jo(e)}function Ca(e,t){return No(e,null,null,t),jo(e)}function Hh(e,t,a){e.lanes|=a;var o=e.alternate;o!==null&&(o.lanes|=a);for(var c=!1,u=e.return;u!==null;)u.childLanes|=a,o=u.alternate,o!==null&&(o.childLanes|=a),u.tag===22&&(e=u.stateNode,e===null||e._visibility&1||(c=!0)),e=u,u=u.return;return e.tag===3?(u=e.stateNode,c&&t!==null&&(c=31-At(a),e=u.hiddenUpdates,o=e[c],o===null?e[c]=[t]:o.push(t),t.lane=a|536870912),u):null}function jo(e){if(50<zs)throw zs=0,uu=null,Error(r(185));for(var t=e.return;t!==null;)e=t,t=e.return;return e.tag===3?e.stateNode:null}var si={};function Z1(e,t,a,o){this.tag=e,this.key=a,this.sibling=this.child=this.return=this.stateNode=this.type=this.elementType=null,this.index=0,this.refCleanup=this.ref=null,this.pendingProps=t,this.dependencies=this.memoizedState=this.updateQueue=this.memoizedProps=null,this.mode=o,this.subtreeFlags=this.flags=0,this.deletions=null,this.childLanes=this.lanes=0,this.alternate=null}function Mt(e,t,a,o){return new Z1(e,t,a,o)}function nc(e){return e=e.prototype,!(!e||!e.isReactComponent)}function gn(e,t){var a=e.alternate;return a===null?(a=Mt(e.tag,t,e.key,e.mode),a.elementType=e.elementType,a.type=e.type,a.stateNode=e.stateNode,a.alternate=e,e.alternate=a):(a.pendingProps=t,a.type=e.type,a.flags=0,a.subtreeFlags=0,a.deletions=null),a.flags=e.flags&65011712,a.childLanes=e.childLanes,a.lanes=e.lanes,a.child=e.child,a.memoizedProps=e.memoizedProps,a.memoizedState=e.memoizedState,a.updateQueue=e.updateQueue,t=e.dependencies,a.dependencies=t===null?null:{lanes:t.lanes,firstContext:t.firstContext},a.sibling=e.sibling,a.index=e.index,a.ref=e.ref,a.refCleanup=e.refCleanup,a}function Ih(e,t){e.flags&=65011714;var a=e.alternate;return a===null?(e.childLanes=0,e.lanes=t,e.child=null,e.subtreeFlags=0,e.memoizedProps=null,e.memoizedState=null,e.updateQueue=null,e.dependencies=null,e.stateNode=null):(e.childLanes=a.childLanes,e.lanes=a.lanes,e.child=a.child,e.subtreeFlags=0,e.deletions=null,e.memoizedProps=a.memoizedProps,e.memoizedState=a.memoizedState,e.updateQueue=a.updateQueue,e.type=a.type,t=a.dependencies,e.dependencies=t===null?null:{lanes:t.lanes,firstContext:t.firstContext}),e}function Oo(e,t,a,o,c,u){var g=0;if(o=e,typeof e=="function")nc(e)&&(g=1);else if(typeof e=="string")g=nS(e,a,Q.current)?26:e==="html"||e==="head"||e==="body"?27:5;else e:switch(e){case se:return e=Mt(31,a,t,c),e.elementType=se,e.lanes=u,e;case A:return Aa(a.children,c,u,t);case D:g=8,c|=24;break;case z:return e=Mt(12,a,t,c|2),e.elementType=z,e.lanes=u,e;case G:return e=Mt(13,a,t,c),e.elementType=G,e.lanes=u,e;case Z:return e=Mt(19,a,t,c),e.elementType=Z,e.lanes=u,e;default:if(typeof e=="object"&&e!==null)switch(e.$$typeof){case L:g=10;break e;case O:g=9;break e;case X:g=11;break e;case K:g=14;break e;case H:g=16,o=null;break e}g=29,a=Error(r(130,e===null?"null":typeof e,"")),o=null}return t=Mt(g,a,t,c),t.elementType=e,t.type=o,t.lanes=u,t}function Aa(e,t,a,o){return e=Mt(7,e,o,t),e.lanes=a,e}function ac(e,t,a){return e=Mt(6,e,null,t),e.lanes=a,e}function Gh(e){var t=Mt(18,null,null,0);return t.stateNode=e,t}function ic(e,t,a){return t=Mt(4,e.children!==null?e.children:[],e.key,t),t.lanes=a,t.stateNode={containerInfo:e.containerInfo,pendingChildren:null,implementation:e.implementation},t}var Yh=new WeakMap;function Pt(e,t){if(typeof e=="object"&&e!==null){var a=Yh.get(e);return a!==void 0?a:(t={value:e,source:t,stack:Gf(t)},Yh.set(e,t),t)}return{value:e,source:t,stack:Gf(t)}}var oi=[],ri=0,Bo=null,us=0,Vt=[],_t=0,qn=null,tn=1,nn="";function yn(e,t){oi[ri++]=us,oi[ri++]=Bo,Bo=e,us=t}function Kh(e,t,a){Vt[_t++]=tn,Vt[_t++]=nn,Vt[_t++]=qn,qn=e;var o=tn;e=nn;var c=32-At(o)-1;o&=~(1<<c),a+=1;var u=32-At(t)+c;if(30<u){var g=c-c%5;u=(o&(1<<g)-1).toString(32),o>>=g,c-=g,tn=1<<32-At(t)+c|a<<c|o,nn=u+e}else tn=1<<u|a<<c|o,nn=e}function sc(e){e.return!==null&&(yn(e,1),Kh(e,1,0))}function oc(e){for(;e===Bo;)Bo=oi[--ri],oi[ri]=null,us=oi[--ri],oi[ri]=null;for(;e===qn;)qn=Vt[--_t],Vt[_t]=null,nn=Vt[--_t],Vt[_t]=null,tn=Vt[--_t],Vt[_t]=null}function Xh(e,t){Vt[_t++]=tn,Vt[_t++]=nn,Vt[_t++]=qn,tn=t.id,nn=t.overflow,qn=e}var st=null,Le=null,xe=!1,Fn=null,Ut=!1,rc=Error(r(519));function Hn(e){var t=Error(r(418,1<arguments.length&&arguments[1]!==void 0&&arguments[1]?"text":"HTML",""));throw ds(Pt(t,e)),rc}function Wh(e){var t=e.stateNode,a=e.type,o=e.memoizedProps;switch(t[it]=e,t[gt]=o,a){case"dialog":ye("cancel",t),ye("close",t);break;case"iframe":case"object":case"embed":ye("load",t);break;case"video":case"audio":for(a=0;a<js.length;a++)ye(js[a],t);break;case"source":ye("error",t);break;case"img":case"image":case"link":ye("error",t),ye("load",t);break;case"details":ye("toggle",t);break;case"input":ye("invalid",t),lh(t,o.value,o.defaultValue,o.checked,o.defaultChecked,o.type,o.name,!0);break;case"select":ye("invalid",t);break;case"textarea":ye("invalid",t),uh(t,o.value,o.defaultValue,o.children)}a=o.children,typeof a!="string"&&typeof a!="number"&&typeof a!="bigint"||t.textContent===""+a||o.suppressHydrationWarning===!0||fg(t.textContent,a)?(o.popover!=null&&(ye("beforetoggle",t),ye("toggle",t)),o.onScroll!=null&&ye("scroll",t),o.onScrollEnd!=null&&ye("scrollend",t),o.onClick!=null&&(t.onclick=mn),t=!0):t=!1,t||Hn(e,!0)}function Qh(e){for(st=e.return;st;)switch(st.tag){case 5:case 31:case 13:Ut=!1;return;case 27:case 3:Ut=!0;return;default:st=st.return}}function li(e){if(e!==st)return!1;if(!xe)return Qh(e),xe=!0,!1;var t=e.tag,a;if((a=t!==3&&t!==27)&&((a=t===5)&&(a=e.type,a=!(a!=="form"&&a!=="button")||Au(e.type,e.memoizedProps)),a=!a),a&&Le&&Hn(e),Qh(e),t===13){if(e=e.memoizedState,e=e!==null?e.dehydrated:null,!e)throw Error(r(317));Le=wg(e)}else if(t===31){if(e=e.memoizedState,e=e!==null?e.dehydrated:null,!e)throw Error(r(317));Le=wg(e)}else t===27?(t=Le,aa(e.type)?(e=ku,ku=null,Le=e):Le=t):Le=st?Ft(e.stateNode.nextSibling):null;return!0}function Ea(){Le=st=null,xe=!1}function lc(){var e=Fn;return e!==null&&(wt===null?wt=e:wt.push.apply(wt,e),Fn=null),e}function ds(e){Fn===null?Fn=[e]:Fn.push(e)}var cc=M(null),Ma=null,vn=null;function In(e,t,a){W(cc,t._currentValue),t._currentValue=a}function bn(e){e._currentValue=cc.current,q(cc)}function uc(e,t,a){for(;e!==null;){var o=e.alternate;if((e.childLanes&t)!==t?(e.childLanes|=t,o!==null&&(o.childLanes|=t)):o!==null&&(o.childLanes&t)!==t&&(o.childLanes|=t),e===a)break;e=e.return}}function dc(e,t,a,o){var c=e.child;for(c!==null&&(c.return=e);c!==null;){var u=c.dependencies;if(u!==null){var g=c.child;u=u.firstContext;e:for(;u!==null;){var x=u;u=c;for(var T=0;T<t.length;T++)if(x.context===t[T]){u.lanes|=a,x=u.alternate,x!==null&&(x.lanes|=a),uc(u.return,a,e),o||(g=null);break e}u=x.next}}else if(c.tag===18){if(g=c.return,g===null)throw Error(r(341));g.lanes|=a,u=g.alternate,u!==null&&(u.lanes|=a),uc(g,a,e),g=null}else g=c.child;if(g!==null)g.return=c;else for(g=c;g!==null;){if(g===e){g=null;break}if(c=g.sibling,c!==null){c.return=g.return,g=c;break}g=g.return}c=g}}function ci(e,t,a,o){e=null;for(var c=t,u=!1;c!==null;){if(!u){if((c.flags&524288)!==0)u=!0;else if((c.flags&262144)!==0)break}if(c.tag===10){var g=c.alternate;if(g===null)throw Error(r(387));if(g=g.memoizedProps,g!==null){var x=c.type;Et(c.pendingProps.value,g.value)||(e!==null?e.push(x):e=[x])}}else if(c===oe.current){if(g=c.alternate,g===null)throw Error(r(387));g.memoizedState.memoizedState!==c.memoizedState.memoizedState&&(e!==null?e.push(Vs):e=[Vs])}c=c.return}e!==null&&dc(t,e,a,o),t.flags|=262144}function Lo(e){for(e=e.firstContext;e!==null;){if(!Et(e.context._currentValue,e.memoizedValue))return!0;e=e.next}return!1}function Da(e){Ma=e,vn=null,e=e.dependencies,e!==null&&(e.firstContext=null)}function ot(e){return Zh(Ma,e)}function Po(e,t){return Ma===null&&Da(e),Zh(e,t)}function Zh(e,t){var a=t._currentValue;if(t={context:t,memoizedValue:a,next:null},vn===null){if(e===null)throw Error(r(308));vn=t,e.dependencies={lanes:0,firstContext:t},e.flags|=524288}else vn=vn.next=t;return a}var J1=typeof AbortController<"u"?AbortController:function(){var e=[],t=this.signal={aborted:!1,addEventListener:function(a,o){e.push(o)}};this.abort=function(){t.aborted=!0,e.forEach(function(a){return a()})}},$1=n.unstable_scheduleCallback,ew=n.unstable_NormalPriority,Ke={$$typeof:L,Consumer:null,Provider:null,_currentValue:null,_currentValue2:null,_threadCount:0};function fc(){return{controller:new J1,data:new Map,refCount:0}}function fs(e){e.refCount--,e.refCount===0&&$1(ew,function(){e.controller.abort()})}var hs=null,hc=0,ui=0,di=null;function tw(e,t){if(hs===null){var a=hs=[];hc=0,ui=gu(),di={status:"pending",value:void 0,then:function(o){a.push(o)}}}return hc++,t.then(Jh,Jh),t}function Jh(){if(--hc===0&&hs!==null){di!==null&&(di.status="fulfilled");var e=hs;hs=null,ui=0,di=null;for(var t=0;t<e.length;t++)(0,e[t])()}}function nw(e,t){var a=[],o={status:"pending",value:null,reason:null,then:function(c){a.push(c)}};return e.then(function(){o.status="fulfilled",o.value=t;for(var c=0;c<a.length;c++)(0,a[c])(t)},function(c){for(o.status="rejected",o.reason=c,c=0;c<a.length;c++)(0,a[c])(void 0)}),o}var $h=V.S;V.S=function(e,t){Lp=Tt(),typeof t=="object"&&t!==null&&typeof t.then=="function"&&tw(e,t),$h!==null&&$h(e,t)};var Ra=M(null);function mc(){var e=Ra.current;return e!==null?e:ze.pooledCache}function Vo(e,t){t===null?W(Ra,Ra.current):W(Ra,t.pool)}function em(){var e=mc();return e===null?null:{parent:Ke._currentValue,pool:e}}var fi=Error(r(460)),pc=Error(r(474)),_o=Error(r(542)),Uo={then:function(){}};function tm(e){return e=e.status,e==="fulfilled"||e==="rejected"}function nm(e,t,a){switch(a=e[a],a===void 0?e.push(t):a!==t&&(t.then(mn,mn),t=a),t.status){case"fulfilled":return t.value;case"rejected":throw e=t.reason,im(e),e;default:if(typeof t.status=="string")t.then(mn,mn);else{if(e=ze,e!==null&&100<e.shellSuspendCounter)throw Error(r(482));e=t,e.status="pending",e.then(function(o){if(t.status==="pending"){var c=t;c.status="fulfilled",c.value=o}},function(o){if(t.status==="pending"){var c=t;c.status="rejected",c.reason=o}})}switch(t.status){case"fulfilled":return t.value;case"rejected":throw e=t.reason,im(e),e}throw za=t,fi}}function ka(e){try{var t=e._init;return t(e._payload)}catch(a){throw a!==null&&typeof a=="object"&&typeof a.then=="function"?(za=a,fi):a}}var za=null;function am(){if(za===null)throw Error(r(459));var e=za;return za=null,e}function im(e){if(e===fi||e===_o)throw Error(r(483))}var hi=null,ms=0;function qo(e){var t=ms;return ms+=1,hi===null&&(hi=[]),nm(hi,e,t)}function ps(e,t){t=t.props.ref,e.ref=t!==void 0?t:null}function Fo(e,t){throw t.$$typeof===S?Error(r(525)):(e=Object.prototype.toString.call(t),Error(r(31,e==="[object Object]"?"object with keys {"+Object.keys(t).join(", ")+"}":e)))}function sm(e){function t(k,E){if(e){var N=k.deletions;N===null?(k.deletions=[E],k.flags|=16):N.push(E)}}function a(k,E){if(!e)return null;for(;E!==null;)t(k,E),E=E.sibling;return null}function o(k){for(var E=new Map;k!==null;)k.key!==null?E.set(k.key,k):E.set(k.index,k),k=k.sibling;return E}function c(k,E){return k=gn(k,E),k.index=0,k.sibling=null,k}function u(k,E,N){return k.index=N,e?(N=k.alternate,N!==null?(N=N.index,N<E?(k.flags|=67108866,E):N):(k.flags|=67108866,E)):(k.flags|=1048576,E)}function g(k){return e&&k.alternate===null&&(k.flags|=67108866),k}function x(k,E,N,U){return E===null||E.tag!==6?(E=ac(N,k.mode,U),E.return=k,E):(E=c(E,N),E.return=k,E)}function T(k,E,N,U){var ae=N.type;return ae===A?_(k,E,N.props.children,U,N.key):E!==null&&(E.elementType===ae||typeof ae=="object"&&ae!==null&&ae.$$typeof===H&&ka(ae)===E.type)?(E=c(E,N.props),ps(E,N),E.return=k,E):(E=Oo(N.type,N.key,N.props,null,k.mode,U),ps(E,N),E.return=k,E)}function j(k,E,N,U){return E===null||E.tag!==4||E.stateNode.containerInfo!==N.containerInfo||E.stateNode.implementation!==N.implementation?(E=ic(N,k.mode,U),E.return=k,E):(E=c(E,N.children||[]),E.return=k,E)}function _(k,E,N,U,ae){return E===null||E.tag!==7?(E=Aa(N,k.mode,U,ae),E.return=k,E):(E=c(E,N),E.return=k,E)}function F(k,E,N){if(typeof E=="string"&&E!==""||typeof E=="number"||typeof E=="bigint")return E=ac(""+E,k.mode,N),E.return=k,E;if(typeof E=="object"&&E!==null){switch(E.$$typeof){case C:return N=Oo(E.type,E.key,E.props,null,k.mode,N),ps(N,E),N.return=k,N;case R:return E=ic(E,k.mode,N),E.return=k,E;case H:return E=ka(E),F(k,E,N)}if(Ie(E)||Be(E))return E=Aa(E,k.mode,N,null),E.return=k,E;if(typeof E.then=="function")return F(k,qo(E),N);if(E.$$typeof===L)return F(k,Po(k,E),N);Fo(k,E)}return null}function B(k,E,N,U){var ae=E!==null?E.key:null;if(typeof N=="string"&&N!==""||typeof N=="number"||typeof N=="bigint")return ae!==null?null:x(k,E,""+N,U);if(typeof N=="object"&&N!==null){switch(N.$$typeof){case C:return N.key===ae?T(k,E,N,U):null;case R:return N.key===ae?j(k,E,N,U):null;case H:return N=ka(N),B(k,E,N,U)}if(Ie(N)||Be(N))return ae!==null?null:_(k,E,N,U,null);if(typeof N.then=="function")return B(k,E,qo(N),U);if(N.$$typeof===L)return B(k,E,Po(k,N),U);Fo(k,N)}return null}function P(k,E,N,U,ae){if(typeof U=="string"&&U!==""||typeof U=="number"||typeof U=="bigint")return k=k.get(N)||null,x(E,k,""+U,ae);if(typeof U=="object"&&U!==null){switch(U.$$typeof){case C:return k=k.get(U.key===null?N:U.key)||null,T(E,k,U,ae);case R:return k=k.get(U.key===null?N:U.key)||null,j(E,k,U,ae);case H:return U=ka(U),P(k,E,N,U,ae)}if(Ie(U)||Be(U))return k=k.get(N)||null,_(E,k,U,ae,null);if(typeof U.then=="function")return P(k,E,N,qo(U),ae);if(U.$$typeof===L)return P(k,E,N,Po(E,U),ae);Fo(E,U)}return null}function J(k,E,N,U){for(var ae=null,Se=null,ne=E,de=E=0,be=null;ne!==null&&de<N.length;de++){ne.index>de?(be=ne,ne=null):be=ne.sibling;var Te=B(k,ne,N[de],U);if(Te===null){ne===null&&(ne=be);break}e&&ne&&Te.alternate===null&&t(k,ne),E=u(Te,E,de),Se===null?ae=Te:Se.sibling=Te,Se=Te,ne=be}if(de===N.length)return a(k,ne),xe&&yn(k,de),ae;if(ne===null){for(;de<N.length;de++)ne=F(k,N[de],U),ne!==null&&(E=u(ne,E,de),Se===null?ae=ne:Se.sibling=ne,Se=ne);return xe&&yn(k,de),ae}for(ne=o(ne);de<N.length;de++)be=P(ne,k,de,N[de],U),be!==null&&(e&&be.alternate!==null&&ne.delete(be.key===null?de:be.key),E=u(be,E,de),Se===null?ae=be:Se.sibling=be,Se=be);return e&&ne.forEach(function(la){return t(k,la)}),xe&&yn(k,de),ae}function ie(k,E,N,U){if(N==null)throw Error(r(151));for(var ae=null,Se=null,ne=E,de=E=0,be=null,Te=N.next();ne!==null&&!Te.done;de++,Te=N.next()){ne.index>de?(be=ne,ne=null):be=ne.sibling;var la=B(k,ne,Te.value,U);if(la===null){ne===null&&(ne=be);break}e&&ne&&la.alternate===null&&t(k,ne),E=u(la,E,de),Se===null?ae=la:Se.sibling=la,Se=la,ne=be}if(Te.done)return a(k,ne),xe&&yn(k,de),ae;if(ne===null){for(;!Te.done;de++,Te=N.next())Te=F(k,Te.value,U),Te!==null&&(E=u(Te,E,de),Se===null?ae=Te:Se.sibling=Te,Se=Te);return xe&&yn(k,de),ae}for(ne=o(ne);!Te.done;de++,Te=N.next())Te=P(ne,k,de,Te.value,U),Te!==null&&(e&&Te.alternate!==null&&ne.delete(Te.key===null?de:Te.key),E=u(Te,E,de),Se===null?ae=Te:Se.sibling=Te,Se=Te);return e&&ne.forEach(function(hS){return t(k,hS)}),xe&&yn(k,de),ae}function ke(k,E,N,U){if(typeof N=="object"&&N!==null&&N.type===A&&N.key===null&&(N=N.props.children),typeof N=="object"&&N!==null){switch(N.$$typeof){case C:e:{for(var ae=N.key;E!==null;){if(E.key===ae){if(ae=N.type,ae===A){if(E.tag===7){a(k,E.sibling),U=c(E,N.props.children),U.return=k,k=U;break e}}else if(E.elementType===ae||typeof ae=="object"&&ae!==null&&ae.$$typeof===H&&ka(ae)===E.type){a(k,E.sibling),U=c(E,N.props),ps(U,N),U.return=k,k=U;break e}a(k,E);break}else t(k,E);E=E.sibling}N.type===A?(U=Aa(N.props.children,k.mode,U,N.key),U.return=k,k=U):(U=Oo(N.type,N.key,N.props,null,k.mode,U),ps(U,N),U.return=k,k=U)}return g(k);case R:e:{for(ae=N.key;E!==null;){if(E.key===ae)if(E.tag===4&&E.stateNode.containerInfo===N.containerInfo&&E.stateNode.implementation===N.implementation){a(k,E.sibling),U=c(E,N.children||[]),U.return=k,k=U;break e}else{a(k,E);break}else t(k,E);E=E.sibling}U=ic(N,k.mode,U),U.return=k,k=U}return g(k);case H:return N=ka(N),ke(k,E,N,U)}if(Ie(N))return J(k,E,N,U);if(Be(N)){if(ae=Be(N),typeof ae!="function")throw Error(r(150));return N=ae.call(N),ie(k,E,N,U)}if(typeof N.then=="function")return ke(k,E,qo(N),U);if(N.$$typeof===L)return ke(k,E,Po(k,N),U);Fo(k,N)}return typeof N=="string"&&N!==""||typeof N=="number"||typeof N=="bigint"?(N=""+N,E!==null&&E.tag===6?(a(k,E.sibling),U=c(E,N),U.return=k,k=U):(a(k,E),U=ac(N,k.mode,U),U.return=k,k=U),g(k)):a(k,E)}return function(k,E,N,U){try{ms=0;var ae=ke(k,E,N,U);return hi=null,ae}catch(ne){if(ne===fi||ne===_o)throw ne;var Se=Mt(29,ne,null,k.mode);return Se.lanes=U,Se.return=k,Se}}}var Na=sm(!0),om=sm(!1),Gn=!1;function gc(e){e.updateQueue={baseState:e.memoizedState,firstBaseUpdate:null,lastBaseUpdate:null,shared:{pending:null,lanes:0,hiddenCallbacks:null},callbacks:null}}function yc(e,t){e=e.updateQueue,t.updateQueue===e&&(t.updateQueue={baseState:e.baseState,firstBaseUpdate:e.firstBaseUpdate,lastBaseUpdate:e.lastBaseUpdate,shared:e.shared,callbacks:null})}function Yn(e){return{lane:e,tag:0,payload:null,callback:null,next:null}}function Kn(e,t,a){var o=e.updateQueue;if(o===null)return null;if(o=o.shared,(Ce&2)!==0){var c=o.pending;return c===null?t.next=t:(t.next=c.next,c.next=t),o.pending=t,t=jo(e),Hh(e,null,a),t}return No(e,o,t,a),jo(e)}function gs(e,t,a){if(t=t.updateQueue,t!==null&&(t=t.shared,(a&4194048)!==0)){var o=t.lanes;o&=e.pendingLanes,a|=o,t.lanes=a,Zf(e,a)}}function vc(e,t){var a=e.updateQueue,o=e.alternate;if(o!==null&&(o=o.updateQueue,a===o)){var c=null,u=null;if(a=a.firstBaseUpdate,a!==null){do{var g={lane:a.lane,tag:a.tag,payload:a.payload,callback:null,next:null};u===null?c=u=g:u=u.next=g,a=a.next}while(a!==null);u===null?c=u=t:u=u.next=t}else c=u=t;a={baseState:o.baseState,firstBaseUpdate:c,lastBaseUpdate:u,shared:o.shared,callbacks:o.callbacks},e.updateQueue=a;return}e=a.lastBaseUpdate,e===null?a.firstBaseUpdate=t:e.next=t,a.lastBaseUpdate=t}var bc=!1;function ys(){if(bc){var e=di;if(e!==null)throw e}}function vs(e,t,a,o){bc=!1;var c=e.updateQueue;Gn=!1;var u=c.firstBaseUpdate,g=c.lastBaseUpdate,x=c.shared.pending;if(x!==null){c.shared.pending=null;var T=x,j=T.next;T.next=null,g===null?u=j:g.next=j,g=T;var _=e.alternate;_!==null&&(_=_.updateQueue,x=_.lastBaseUpdate,x!==g&&(x===null?_.firstBaseUpdate=j:x.next=j,_.lastBaseUpdate=T))}if(u!==null){var F=c.baseState;g=0,_=j=T=null,x=u;do{var B=x.lane&-536870913,P=B!==x.lane;if(P?(ve&B)===B:(o&B)===B){B!==0&&B===ui&&(bc=!0),_!==null&&(_=_.next={lane:0,tag:x.tag,payload:x.payload,callback:null,next:null});e:{var J=e,ie=x;B=t;var ke=a;switch(ie.tag){case 1:if(J=ie.payload,typeof J=="function"){F=J.call(ke,F,B);break e}F=J;break e;case 3:J.flags=J.flags&-65537|128;case 0:if(J=ie.payload,B=typeof J=="function"?J.call(ke,F,B):J,B==null)break e;F=b({},F,B);break e;case 2:Gn=!0}}B=x.callback,B!==null&&(e.flags|=64,P&&(e.flags|=8192),P=c.callbacks,P===null?c.callbacks=[B]:P.push(B))}else P={lane:B,tag:x.tag,payload:x.payload,callback:x.callback,next:null},_===null?(j=_=P,T=F):_=_.next=P,g|=B;if(x=x.next,x===null){if(x=c.shared.pending,x===null)break;P=x,x=P.next,P.next=null,c.lastBaseUpdate=P,c.shared.pending=null}}while(!0);_===null&&(T=F),c.baseState=T,c.firstBaseUpdate=j,c.lastBaseUpdate=_,u===null&&(c.shared.lanes=0),Jn|=g,e.lanes=g,e.memoizedState=F}}function rm(e,t){if(typeof e!="function")throw Error(r(191,e));e.call(t)}function lm(e,t){var a=e.callbacks;if(a!==null)for(e.callbacks=null,e=0;e<a.length;e++)rm(a[e],t)}var mi=M(null),Ho=M(0);function cm(e,t){e=Dn,W(Ho,e),W(mi,t),Dn=e|t.baseLanes}function xc(){W(Ho,Dn),W(mi,mi.current)}function wc(){Dn=Ho.current,q(mi),q(Ho)}var Dt=M(null),qt=null;function Xn(e){var t=e.alternate;W(Ge,Ge.current&1),W(Dt,e),qt===null&&(t===null||mi.current!==null||t.memoizedState!==null)&&(qt=e)}function Sc(e){W(Ge,Ge.current),W(Dt,e),qt===null&&(qt=e)}function um(e){e.tag===22?(W(Ge,Ge.current),W(Dt,e),qt===null&&(qt=e)):Wn()}function Wn(){W(Ge,Ge.current),W(Dt,Dt.current)}function Rt(e){q(Dt),qt===e&&(qt=null),q(Ge)}var Ge=M(0);function Io(e){for(var t=e;t!==null;){if(t.tag===13){var a=t.memoizedState;if(a!==null&&(a=a.dehydrated,a===null||Du(a)||Ru(a)))return t}else if(t.tag===19&&(t.memoizedProps.revealOrder==="forwards"||t.memoizedProps.revealOrder==="backwards"||t.memoizedProps.revealOrder==="unstable_legacy-backwards"||t.memoizedProps.revealOrder==="together")){if((t.flags&128)!==0)return t}else if(t.child!==null){t.child.return=t,t=t.child;continue}if(t===e)break;for(;t.sibling===null;){if(t.return===null||t.return===e)return null;t=t.return}t.sibling.return=t.return,t=t.sibling}return null}var xn=0,ce=null,De=null,Xe=null,Go=!1,pi=!1,ja=!1,Yo=0,bs=0,gi=null,aw=0;function qe(){throw Error(r(321))}function Tc(e,t){if(t===null)return!1;for(var a=0;a<t.length&&a<e.length;a++)if(!Et(e[a],t[a]))return!1;return!0}function Cc(e,t,a,o,c,u){return xn=u,ce=t,t.memoizedState=null,t.updateQueue=null,t.lanes=0,V.H=e===null||e.memoizedState===null?Km:_c,ja=!1,u=a(o,c),ja=!1,pi&&(u=fm(t,a,o,c)),dm(e),u}function dm(e){V.H=Ss;var t=De!==null&&De.next!==null;if(xn=0,Xe=De=ce=null,Go=!1,bs=0,gi=null,t)throw Error(r(300));e===null||We||(e=e.dependencies,e!==null&&Lo(e)&&(We=!0))}function fm(e,t,a,o){ce=e;var c=0;do{if(pi&&(gi=null),bs=0,pi=!1,25<=c)throw Error(r(301));if(c+=1,Xe=De=null,e.updateQueue!=null){var u=e.updateQueue;u.lastEffect=null,u.events=null,u.stores=null,u.memoCache!=null&&(u.memoCache.index=0)}V.H=Xm,u=t(a,o)}while(pi);return u}function iw(){var e=V.H,t=e.useState()[0];return t=typeof t.then=="function"?xs(t):t,e=e.useState()[0],(De!==null?De.memoizedState:null)!==e&&(ce.flags|=1024),t}function Ac(){var e=Yo!==0;return Yo=0,e}function Ec(e,t,a){t.updateQueue=e.updateQueue,t.flags&=-2053,e.lanes&=~a}function Mc(e){if(Go){for(e=e.memoizedState;e!==null;){var t=e.queue;t!==null&&(t.pending=null),e=e.next}Go=!1}xn=0,Xe=De=ce=null,pi=!1,bs=Yo=0,gi=null}function ht(){var e={memoizedState:null,baseState:null,baseQueue:null,queue:null,next:null};return Xe===null?ce.memoizedState=Xe=e:Xe=Xe.next=e,Xe}function Ye(){if(De===null){var e=ce.alternate;e=e!==null?e.memoizedState:null}else e=De.next;var t=Xe===null?ce.memoizedState:Xe.next;if(t!==null)Xe=t,De=e;else{if(e===null)throw ce.alternate===null?Error(r(467)):Error(r(310));De=e,e={memoizedState:De.memoizedState,baseState:De.baseState,baseQueue:De.baseQueue,queue:De.queue,next:null},Xe===null?ce.memoizedState=Xe=e:Xe=Xe.next=e}return Xe}function Ko(){return{lastEffect:null,events:null,stores:null,memoCache:null}}function xs(e){var t=bs;return bs+=1,gi===null&&(gi=[]),e=nm(gi,e,t),t=ce,(Xe===null?t.memoizedState:Xe.next)===null&&(t=t.alternate,V.H=t===null||t.memoizedState===null?Km:_c),e}function Xo(e){if(e!==null&&typeof e=="object"){if(typeof e.then=="function")return xs(e);if(e.$$typeof===L)return ot(e)}throw Error(r(438,String(e)))}function Dc(e){var t=null,a=ce.updateQueue;if(a!==null&&(t=a.memoCache),t==null){var o=ce.alternate;o!==null&&(o=o.updateQueue,o!==null&&(o=o.memoCache,o!=null&&(t={data:o.data.map(function(c){return c.slice()}),index:0})))}if(t==null&&(t={data:[],index:0}),a===null&&(a=Ko(),ce.updateQueue=a),a.memoCache=t,a=t.data[t.index],a===void 0)for(a=t.data[t.index]=Array(e),o=0;o<e;o++)a[o]=we;return t.index++,a}function wn(e,t){return typeof t=="function"?t(e):t}function Wo(e){var t=Ye();return Rc(t,De,e)}function Rc(e,t,a){var o=e.queue;if(o===null)throw Error(r(311));o.lastRenderedReducer=a;var c=e.baseQueue,u=o.pending;if(u!==null){if(c!==null){var g=c.next;c.next=u.next,u.next=g}t.baseQueue=c=u,o.pending=null}if(u=e.baseState,c===null)e.memoizedState=u;else{t=c.next;var x=g=null,T=null,j=t,_=!1;do{var F=j.lane&-536870913;if(F!==j.lane?(ve&F)===F:(xn&F)===F){var B=j.revertLane;if(B===0)T!==null&&(T=T.next={lane:0,revertLane:0,gesture:null,action:j.action,hasEagerState:j.hasEagerState,eagerState:j.eagerState,next:null}),F===ui&&(_=!0);else if((xn&B)===B){j=j.next,B===ui&&(_=!0);continue}else F={lane:0,revertLane:j.revertLane,gesture:null,action:j.action,hasEagerState:j.hasEagerState,eagerState:j.eagerState,next:null},T===null?(x=T=F,g=u):T=T.next=F,ce.lanes|=B,Jn|=B;F=j.action,ja&&a(u,F),u=j.hasEagerState?j.eagerState:a(u,F)}else B={lane:F,revertLane:j.revertLane,gesture:j.gesture,action:j.action,hasEagerState:j.hasEagerState,eagerState:j.eagerState,next:null},T===null?(x=T=B,g=u):T=T.next=B,ce.lanes|=F,Jn|=F;j=j.next}while(j!==null&&j!==t);if(T===null?g=u:T.next=x,!Et(u,e.memoizedState)&&(We=!0,_&&(a=di,a!==null)))throw a;e.memoizedState=u,e.baseState=g,e.baseQueue=T,o.lastRenderedState=u}return c===null&&(o.lanes=0),[e.memoizedState,o.dispatch]}function kc(e){var t=Ye(),a=t.queue;if(a===null)throw Error(r(311));a.lastRenderedReducer=e;var o=a.dispatch,c=a.pending,u=t.memoizedState;if(c!==null){a.pending=null;var g=c=c.next;do u=e(u,g.action),g=g.next;while(g!==c);Et(u,t.memoizedState)||(We=!0),t.memoizedState=u,t.baseQueue===null&&(t.baseState=u),a.lastRenderedState=u}return[u,o]}function hm(e,t,a){var o=ce,c=Ye(),u=xe;if(u){if(a===void 0)throw Error(r(407));a=a()}else a=t();var g=!Et((De||c).memoizedState,a);if(g&&(c.memoizedState=a,We=!0),c=c.queue,jc(gm.bind(null,o,c,e),[e]),c.getSnapshot!==t||g||Xe!==null&&Xe.memoizedState.tag&1){if(o.flags|=2048,yi(9,{destroy:void 0},pm.bind(null,o,c,a,t),null),ze===null)throw Error(r(349));u||(xn&127)!==0||mm(o,t,a)}return a}function mm(e,t,a){e.flags|=16384,e={getSnapshot:t,value:a},t=ce.updateQueue,t===null?(t=Ko(),ce.updateQueue=t,t.stores=[e]):(a=t.stores,a===null?t.stores=[e]:a.push(e))}function pm(e,t,a,o){t.value=a,t.getSnapshot=o,ym(t)&&vm(e)}function gm(e,t,a){return a(function(){ym(t)&&vm(e)})}function ym(e){var t=e.getSnapshot;e=e.value;try{var a=t();return!Et(e,a)}catch{return!0}}function vm(e){var t=Ca(e,2);t!==null&&St(t,e,2)}function zc(e){var t=ht();if(typeof e=="function"){var a=e;if(e=a(),ja){Vn(!0);try{a()}finally{Vn(!1)}}}return t.memoizedState=t.baseState=e,t.queue={pending:null,lanes:0,dispatch:null,lastRenderedReducer:wn,lastRenderedState:e},t}function bm(e,t,a,o){return e.baseState=a,Rc(e,De,typeof o=="function"?o:wn)}function sw(e,t,a,o,c){if(Jo(e))throw Error(r(485));if(e=t.action,e!==null){var u={payload:c,action:e,next:null,isTransition:!0,status:"pending",value:null,reason:null,listeners:[],then:function(g){u.listeners.push(g)}};V.T!==null?a(!0):u.isTransition=!1,o(u),a=t.pending,a===null?(u.next=t.pending=u,xm(t,u)):(u.next=a.next,t.pending=a.next=u)}}function xm(e,t){var a=t.action,o=t.payload,c=e.state;if(t.isTransition){var u=V.T,g={};V.T=g;try{var x=a(c,o),T=V.S;T!==null&&T(g,x),wm(e,t,x)}catch(j){Nc(e,t,j)}finally{u!==null&&g.types!==null&&(u.types=g.types),V.T=u}}else try{u=a(c,o),wm(e,t,u)}catch(j){Nc(e,t,j)}}function wm(e,t,a){a!==null&&typeof a=="object"&&typeof a.then=="function"?a.then(function(o){Sm(e,t,o)},function(o){return Nc(e,t,o)}):Sm(e,t,a)}function Sm(e,t,a){t.status="fulfilled",t.value=a,Tm(t),e.state=a,t=e.pending,t!==null&&(a=t.next,a===t?e.pending=null:(a=a.next,t.next=a,xm(e,a)))}function Nc(e,t,a){var o=e.pending;if(e.pending=null,o!==null){o=o.next;do t.status="rejected",t.reason=a,Tm(t),t=t.next;while(t!==o)}e.action=null}function Tm(e){e=e.listeners;for(var t=0;t<e.length;t++)(0,e[t])()}function Cm(e,t){return t}function Am(e,t){if(xe){var a=ze.formState;if(a!==null){e:{var o=ce;if(xe){if(Le){t:{for(var c=Le,u=Ut;c.nodeType!==8;){if(!u){c=null;break t}if(c=Ft(c.nextSibling),c===null){c=null;break t}}u=c.data,c=u==="F!"||u==="F"?c:null}if(c){Le=Ft(c.nextSibling),o=c.data==="F!";break e}}Hn(o)}o=!1}o&&(t=a[0])}}return a=ht(),a.memoizedState=a.baseState=t,o={pending:null,lanes:0,dispatch:null,lastRenderedReducer:Cm,lastRenderedState:t},a.queue=o,a=Im.bind(null,ce,o),o.dispatch=a,o=zc(!1),u=Vc.bind(null,ce,!1,o.queue),o=ht(),c={state:t,dispatch:null,action:e,pending:null},o.queue=c,a=sw.bind(null,ce,c,u,a),c.dispatch=a,o.memoizedState=e,[t,a,!1]}function Em(e){var t=Ye();return Mm(t,De,e)}function Mm(e,t,a){if(t=Rc(e,t,Cm)[0],e=Wo(wn)[0],typeof t=="object"&&t!==null&&typeof t.then=="function")try{var o=xs(t)}catch(g){throw g===fi?_o:g}else o=t;t=Ye();var c=t.queue,u=c.dispatch;return a!==t.memoizedState&&(ce.flags|=2048,yi(9,{destroy:void 0},ow.bind(null,c,a),null)),[o,u,e]}function ow(e,t){e.action=t}function Dm(e){var t=Ye(),a=De;if(a!==null)return Mm(t,a,e);Ye(),t=t.memoizedState,a=Ye();var o=a.queue.dispatch;return a.memoizedState=e,[t,o,!1]}function yi(e,t,a,o){return e={tag:e,create:a,deps:o,inst:t,next:null},t=ce.updateQueue,t===null&&(t=Ko(),ce.updateQueue=t),a=t.lastEffect,a===null?t.lastEffect=e.next=e:(o=a.next,a.next=e,e.next=o,t.lastEffect=e),e}function Rm(){return Ye().memoizedState}function Qo(e,t,a,o){var c=ht();ce.flags|=e,c.memoizedState=yi(1|t,{destroy:void 0},a,o===void 0?null:o)}function Zo(e,t,a,o){var c=Ye();o=o===void 0?null:o;var u=c.memoizedState.inst;De!==null&&o!==null&&Tc(o,De.memoizedState.deps)?c.memoizedState=yi(t,u,a,o):(ce.flags|=e,c.memoizedState=yi(1|t,u,a,o))}function km(e,t){Qo(8390656,8,e,t)}function jc(e,t){Zo(2048,8,e,t)}function rw(e){ce.flags|=4;var t=ce.updateQueue;if(t===null)t=Ko(),ce.updateQueue=t,t.events=[e];else{var a=t.events;a===null?t.events=[e]:a.push(e)}}function zm(e){var t=Ye().memoizedState;return rw({ref:t,nextImpl:e}),function(){if((Ce&2)!==0)throw Error(r(440));return t.impl.apply(void 0,arguments)}}function Nm(e,t){return Zo(4,2,e,t)}function jm(e,t){return Zo(4,4,e,t)}function Om(e,t){if(typeof t=="function"){e=e();var a=t(e);return function(){typeof a=="function"?a():t(null)}}if(t!=null)return e=e(),t.current=e,function(){t.current=null}}function Bm(e,t,a){a=a!=null?a.concat([e]):null,Zo(4,4,Om.bind(null,t,e),a)}function Oc(){}function Lm(e,t){var a=Ye();t=t===void 0?null:t;var o=a.memoizedState;return t!==null&&Tc(t,o[1])?o[0]:(a.memoizedState=[e,t],e)}function Pm(e,t){var a=Ye();t=t===void 0?null:t;var o=a.memoizedState;if(t!==null&&Tc(t,o[1]))return o[0];if(o=e(),ja){Vn(!0);try{e()}finally{Vn(!1)}}return a.memoizedState=[o,t],o}function Bc(e,t,a){return a===void 0||(xn&1073741824)!==0&&(ve&261930)===0?e.memoizedState=t:(e.memoizedState=a,e=Vp(),ce.lanes|=e,Jn|=e,a)}function Vm(e,t,a,o){return Et(a,t)?a:mi.current!==null?(e=Bc(e,a,o),Et(e,t)||(We=!0),e):(xn&42)===0||(xn&1073741824)!==0&&(ve&261930)===0?(We=!0,e.memoizedState=a):(e=Vp(),ce.lanes|=e,Jn|=e,t)}function _m(e,t,a,o,c){var u=Y.p;Y.p=u!==0&&8>u?u:8;var g=V.T,x={};V.T=x,Vc(e,!1,t,a);try{var T=c(),j=V.S;if(j!==null&&j(x,T),T!==null&&typeof T=="object"&&typeof T.then=="function"){var _=nw(T,o);ws(e,t,_,Nt(e))}else ws(e,t,o,Nt(e))}catch(F){ws(e,t,{then:function(){},status:"rejected",reason:F},Nt())}finally{Y.p=u,g!==null&&x.types!==null&&(g.types=x.types),V.T=g}}function lw(){}function Lc(e,t,a,o){if(e.tag!==5)throw Error(r(476));var c=Um(e).queue;_m(e,c,t,I,a===null?lw:function(){return qm(e),a(o)})}function Um(e){var t=e.memoizedState;if(t!==null)return t;t={memoizedState:I,baseState:I,baseQueue:null,queue:{pending:null,lanes:0,dispatch:null,lastRenderedReducer:wn,lastRenderedState:I},next:null};var a={};return t.next={memoizedState:a,baseState:a,baseQueue:null,queue:{pending:null,lanes:0,dispatch:null,lastRenderedReducer:wn,lastRenderedState:a},next:null},e.memoizedState=t,e=e.alternate,e!==null&&(e.memoizedState=t),t}function qm(e){var t=Um(e);t.next===null&&(t=e.alternate.memoizedState),ws(e,t.next.queue,{},Nt())}function Pc(){return ot(Vs)}function Fm(){return Ye().memoizedState}function Hm(){return Ye().memoizedState}function cw(e){for(var t=e.return;t!==null;){switch(t.tag){case 24:case 3:var a=Nt();e=Yn(a);var o=Kn(t,e,a);o!==null&&(St(o,t,a),gs(o,t,a)),t={cache:fc()},e.payload=t;return}t=t.return}}function uw(e,t,a){var o=Nt();a={lane:o,revertLane:0,gesture:null,action:a,hasEagerState:!1,eagerState:null,next:null},Jo(e)?Gm(t,a):(a=tc(e,t,a,o),a!==null&&(St(a,e,o),Ym(a,t,o)))}function Im(e,t,a){var o=Nt();ws(e,t,a,o)}function ws(e,t,a,o){var c={lane:o,revertLane:0,gesture:null,action:a,hasEagerState:!1,eagerState:null,next:null};if(Jo(e))Gm(t,c);else{var u=e.alternate;if(e.lanes===0&&(u===null||u.lanes===0)&&(u=t.lastRenderedReducer,u!==null))try{var g=t.lastRenderedState,x=u(g,a);if(c.hasEagerState=!0,c.eagerState=x,Et(x,g))return No(e,t,c,0),ze===null&&zo(),!1}catch{}if(a=tc(e,t,c,o),a!==null)return St(a,e,o),Ym(a,t,o),!0}return!1}function Vc(e,t,a,o){if(o={lane:2,revertLane:gu(),gesture:null,action:o,hasEagerState:!1,eagerState:null,next:null},Jo(e)){if(t)throw Error(r(479))}else t=tc(e,a,o,2),t!==null&&St(t,e,2)}function Jo(e){var t=e.alternate;return e===ce||t!==null&&t===ce}function Gm(e,t){pi=Go=!0;var a=e.pending;a===null?t.next=t:(t.next=a.next,a.next=t),e.pending=t}function Ym(e,t,a){if((a&4194048)!==0){var o=t.lanes;o&=e.pendingLanes,a|=o,t.lanes=a,Zf(e,a)}}var Ss={readContext:ot,use:Xo,useCallback:qe,useContext:qe,useEffect:qe,useImperativeHandle:qe,useLayoutEffect:qe,useInsertionEffect:qe,useMemo:qe,useReducer:qe,useRef:qe,useState:qe,useDebugValue:qe,useDeferredValue:qe,useTransition:qe,useSyncExternalStore:qe,useId:qe,useHostTransitionStatus:qe,useFormState:qe,useActionState:qe,useOptimistic:qe,useMemoCache:qe,useCacheRefresh:qe};Ss.useEffectEvent=qe;var Km={readContext:ot,use:Xo,useCallback:function(e,t){return ht().memoizedState=[e,t===void 0?null:t],e},useContext:ot,useEffect:km,useImperativeHandle:function(e,t,a){a=a!=null?a.concat([e]):null,Qo(4194308,4,Om.bind(null,t,e),a)},useLayoutEffect:function(e,t){return Qo(4194308,4,e,t)},useInsertionEffect:function(e,t){Qo(4,2,e,t)},useMemo:function(e,t){var a=ht();t=t===void 0?null:t;var o=e();if(ja){Vn(!0);try{e()}finally{Vn(!1)}}return a.memoizedState=[o,t],o},useReducer:function(e,t,a){var o=ht();if(a!==void 0){var c=a(t);if(ja){Vn(!0);try{a(t)}finally{Vn(!1)}}}else c=t;return o.memoizedState=o.baseState=c,e={pending:null,lanes:0,dispatch:null,lastRenderedReducer:e,lastRenderedState:c},o.queue=e,e=e.dispatch=uw.bind(null,ce,e),[o.memoizedState,e]},useRef:function(e){var t=ht();return e={current:e},t.memoizedState=e},useState:function(e){e=zc(e);var t=e.queue,a=Im.bind(null,ce,t);return t.dispatch=a,[e.memoizedState,a]},useDebugValue:Oc,useDeferredValue:function(e,t){var a=ht();return Bc(a,e,t)},useTransition:function(){var e=zc(!1);return e=_m.bind(null,ce,e.queue,!0,!1),ht().memoizedState=e,[!1,e]},useSyncExternalStore:function(e,t,a){var o=ce,c=ht();if(xe){if(a===void 0)throw Error(r(407));a=a()}else{if(a=t(),ze===null)throw Error(r(349));(ve&127)!==0||mm(o,t,a)}c.memoizedState=a;var u={value:a,getSnapshot:t};return c.queue=u,km(gm.bind(null,o,u,e),[e]),o.flags|=2048,yi(9,{destroy:void 0},pm.bind(null,o,u,a,t),null),a},useId:function(){var e=ht(),t=ze.identifierPrefix;if(xe){var a=nn,o=tn;a=(o&~(1<<32-At(o)-1)).toString(32)+a,t="_"+t+"R_"+a,a=Yo++,0<a&&(t+="H"+a.toString(32)),t+="_"}else a=aw++,t="_"+t+"r_"+a.toString(32)+"_";return e.memoizedState=t},useHostTransitionStatus:Pc,useFormState:Am,useActionState:Am,useOptimistic:function(e){var t=ht();t.memoizedState=t.baseState=e;var a={pending:null,lanes:0,dispatch:null,lastRenderedReducer:null,lastRenderedState:null};return t.queue=a,t=Vc.bind(null,ce,!0,a),a.dispatch=t,[e,t]},useMemoCache:Dc,useCacheRefresh:function(){return ht().memoizedState=cw.bind(null,ce)},useEffectEvent:function(e){var t=ht(),a={impl:e};return t.memoizedState=a,function(){if((Ce&2)!==0)throw Error(r(440));return a.impl.apply(void 0,arguments)}}},_c={readContext:ot,use:Xo,useCallback:Lm,useContext:ot,useEffect:jc,useImperativeHandle:Bm,useInsertionEffect:Nm,useLayoutEffect:jm,useMemo:Pm,useReducer:Wo,useRef:Rm,useState:function(){return Wo(wn)},useDebugValue:Oc,useDeferredValue:function(e,t){var a=Ye();return Vm(a,De.memoizedState,e,t)},useTransition:function(){var e=Wo(wn)[0],t=Ye().memoizedState;return[typeof e=="boolean"?e:xs(e),t]},useSyncExternalStore:hm,useId:Fm,useHostTransitionStatus:Pc,useFormState:Em,useActionState:Em,useOptimistic:function(e,t){var a=Ye();return bm(a,De,e,t)},useMemoCache:Dc,useCacheRefresh:Hm};_c.useEffectEvent=zm;var Xm={readContext:ot,use:Xo,useCallback:Lm,useContext:ot,useEffect:jc,useImperativeHandle:Bm,useInsertionEffect:Nm,useLayoutEffect:jm,useMemo:Pm,useReducer:kc,useRef:Rm,useState:function(){return kc(wn)},useDebugValue:Oc,useDeferredValue:function(e,t){var a=Ye();return De===null?Bc(a,e,t):Vm(a,De.memoizedState,e,t)},useTransition:function(){var e=kc(wn)[0],t=Ye().memoizedState;return[typeof e=="boolean"?e:xs(e),t]},useSyncExternalStore:hm,useId:Fm,useHostTransitionStatus:Pc,useFormState:Dm,useActionState:Dm,useOptimistic:function(e,t){var a=Ye();return De!==null?bm(a,De,e,t):(a.baseState=e,[e,a.queue.dispatch])},useMemoCache:Dc,useCacheRefresh:Hm};Xm.useEffectEvent=zm;function Uc(e,t,a,o){t=e.memoizedState,a=a(o,t),a=a==null?t:b({},t,a),e.memoizedState=a,e.lanes===0&&(e.updateQueue.baseState=a)}var qc={enqueueSetState:function(e,t,a){e=e._reactInternals;var o=Nt(),c=Yn(o);c.payload=t,a!=null&&(c.callback=a),t=Kn(e,c,o),t!==null&&(St(t,e,o),gs(t,e,o))},enqueueReplaceState:function(e,t,a){e=e._reactInternals;var o=Nt(),c=Yn(o);c.tag=1,c.payload=t,a!=null&&(c.callback=a),t=Kn(e,c,o),t!==null&&(St(t,e,o),gs(t,e,o))},enqueueForceUpdate:function(e,t){e=e._reactInternals;var a=Nt(),o=Yn(a);o.tag=2,t!=null&&(o.callback=t),t=Kn(e,o,a),t!==null&&(St(t,e,a),gs(t,e,a))}};function Wm(e,t,a,o,c,u,g){return e=e.stateNode,typeof e.shouldComponentUpdate=="function"?e.shouldComponentUpdate(o,u,g):t.prototype&&t.prototype.isPureReactComponent?!ls(a,o)||!ls(c,u):!0}function Qm(e,t,a,o){e=t.state,typeof t.componentWillReceiveProps=="function"&&t.componentWillReceiveProps(a,o),typeof t.UNSAFE_componentWillReceiveProps=="function"&&t.UNSAFE_componentWillReceiveProps(a,o),t.state!==e&&qc.enqueueReplaceState(t,t.state,null)}function Oa(e,t){var a=t;if("ref"in t){a={};for(var o in t)o!=="ref"&&(a[o]=t[o])}if(e=e.defaultProps){a===t&&(a=b({},a));for(var c in e)a[c]===void 0&&(a[c]=e[c])}return a}function Zm(e){ko(e)}function Jm(e){console.error(e)}function $m(e){ko(e)}function $o(e,t){try{var a=e.onUncaughtError;a(t.value,{componentStack:t.stack})}catch(o){setTimeout(function(){throw o})}}function ep(e,t,a){try{var o=e.onCaughtError;o(a.value,{componentStack:a.stack,errorBoundary:t.tag===1?t.stateNode:null})}catch(c){setTimeout(function(){throw c})}}function Fc(e,t,a){return a=Yn(a),a.tag=3,a.payload={element:null},a.callback=function(){$o(e,t)},a}function tp(e){return e=Yn(e),e.tag=3,e}function np(e,t,a,o){var c=a.type.getDerivedStateFromError;if(typeof c=="function"){var u=o.value;e.payload=function(){return c(u)},e.callback=function(){ep(t,a,o)}}var g=a.stateNode;g!==null&&typeof g.componentDidCatch=="function"&&(e.callback=function(){ep(t,a,o),typeof c!="function"&&($n===null?$n=new Set([this]):$n.add(this));var x=o.stack;this.componentDidCatch(o.value,{componentStack:x!==null?x:""})})}function dw(e,t,a,o,c){if(a.flags|=32768,o!==null&&typeof o=="object"&&typeof o.then=="function"){if(t=a.alternate,t!==null&&ci(t,a,c,!0),a=Dt.current,a!==null){switch(a.tag){case 31:case 13:return qt===null?dr():a.alternate===null&&Fe===0&&(Fe=3),a.flags&=-257,a.flags|=65536,a.lanes=c,o===Uo?a.flags|=16384:(t=a.updateQueue,t===null?a.updateQueue=new Set([o]):t.add(o),hu(e,o,c)),!1;case 22:return a.flags|=65536,o===Uo?a.flags|=16384:(t=a.updateQueue,t===null?(t={transitions:null,markerInstances:null,retryQueue:new Set([o])},a.updateQueue=t):(a=t.retryQueue,a===null?t.retryQueue=new Set([o]):a.add(o)),hu(e,o,c)),!1}throw Error(r(435,a.tag))}return hu(e,o,c),dr(),!1}if(xe)return t=Dt.current,t!==null?((t.flags&65536)===0&&(t.flags|=256),t.flags|=65536,t.lanes=c,o!==rc&&(e=Error(r(422),{cause:o}),ds(Pt(e,a)))):(o!==rc&&(t=Error(r(423),{cause:o}),ds(Pt(t,a))),e=e.current.alternate,e.flags|=65536,c&=-c,e.lanes|=c,o=Pt(o,a),c=Fc(e.stateNode,o,c),vc(e,c),Fe!==4&&(Fe=2)),!1;var u=Error(r(520),{cause:o});if(u=Pt(u,a),ks===null?ks=[u]:ks.push(u),Fe!==4&&(Fe=2),t===null)return!0;o=Pt(o,a),a=t;do{switch(a.tag){case 3:return a.flags|=65536,e=c&-c,a.lanes|=e,e=Fc(a.stateNode,o,e),vc(a,e),!1;case 1:if(t=a.type,u=a.stateNode,(a.flags&128)===0&&(typeof t.getDerivedStateFromError=="function"||u!==null&&typeof u.componentDidCatch=="function"&&($n===null||!$n.has(u))))return a.flags|=65536,c&=-c,a.lanes|=c,c=tp(c),np(c,e,a,o),vc(a,c),!1}a=a.return}while(a!==null);return!1}var Hc=Error(r(461)),We=!1;function rt(e,t,a,o){t.child=e===null?om(t,null,a,o):Na(t,e.child,a,o)}function ap(e,t,a,o,c){a=a.render;var u=t.ref;if("ref"in o){var g={};for(var x in o)x!=="ref"&&(g[x]=o[x])}else g=o;return Da(t),o=Cc(e,t,a,g,u,c),x=Ac(),e!==null&&!We?(Ec(e,t,c),Sn(e,t,c)):(xe&&x&&sc(t),t.flags|=1,rt(e,t,o,c),t.child)}function ip(e,t,a,o,c){if(e===null){var u=a.type;return typeof u=="function"&&!nc(u)&&u.defaultProps===void 0&&a.compare===null?(t.tag=15,t.type=u,sp(e,t,u,o,c)):(e=Oo(a.type,null,o,t,t.mode,c),e.ref=t.ref,e.return=t,t.child=e)}if(u=e.child,!Zc(e,c)){var g=u.memoizedProps;if(a=a.compare,a=a!==null?a:ls,a(g,o)&&e.ref===t.ref)return Sn(e,t,c)}return t.flags|=1,e=gn(u,o),e.ref=t.ref,e.return=t,t.child=e}function sp(e,t,a,o,c){if(e!==null){var u=e.memoizedProps;if(ls(u,o)&&e.ref===t.ref)if(We=!1,t.pendingProps=o=u,Zc(e,c))(e.flags&131072)!==0&&(We=!0);else return t.lanes=e.lanes,Sn(e,t,c)}return Ic(e,t,a,o,c)}function op(e,t,a,o){var c=o.children,u=e!==null?e.memoizedState:null;if(e===null&&t.stateNode===null&&(t.stateNode={_visibility:1,_pendingMarkers:null,_retryCache:null,_transitions:null}),o.mode==="hidden"){if((t.flags&128)!==0){if(u=u!==null?u.baseLanes|a:a,e!==null){for(o=t.child=e.child,c=0;o!==null;)c=c|o.lanes|o.childLanes,o=o.sibling;o=c&~u}else o=0,t.child=null;return rp(e,t,u,a,o)}if((a&536870912)!==0)t.memoizedState={baseLanes:0,cachePool:null},e!==null&&Vo(t,u!==null?u.cachePool:null),u!==null?cm(t,u):xc(),um(t);else return o=t.lanes=536870912,rp(e,t,u!==null?u.baseLanes|a:a,a,o)}else u!==null?(Vo(t,u.cachePool),cm(t,u),Wn(),t.memoizedState=null):(e!==null&&Vo(t,null),xc(),Wn());return rt(e,t,c,a),t.child}function Ts(e,t){return e!==null&&e.tag===22||t.stateNode!==null||(t.stateNode={_visibility:1,_pendingMarkers:null,_retryCache:null,_transitions:null}),t.sibling}function rp(e,t,a,o,c){var u=mc();return u=u===null?null:{parent:Ke._currentValue,pool:u},t.memoizedState={baseLanes:a,cachePool:u},e!==null&&Vo(t,null),xc(),um(t),e!==null&&ci(e,t,o,!0),t.childLanes=c,null}function er(e,t){return t=nr({mode:t.mode,children:t.children},e.mode),t.ref=e.ref,e.child=t,t.return=e,t}function lp(e,t,a){return Na(t,e.child,null,a),e=er(t,t.pendingProps),e.flags|=2,Rt(t),t.memoizedState=null,e}function fw(e,t,a){var o=t.pendingProps,c=(t.flags&128)!==0;if(t.flags&=-129,e===null){if(xe){if(o.mode==="hidden")return e=er(t,o),t.lanes=536870912,Ts(null,e);if(Sc(t),(e=Le)?(e=xg(e,Ut),e=e!==null&&e.data==="&"?e:null,e!==null&&(t.memoizedState={dehydrated:e,treeContext:qn!==null?{id:tn,overflow:nn}:null,retryLane:536870912,hydrationErrors:null},a=Gh(e),a.return=t,t.child=a,st=t,Le=null)):e=null,e===null)throw Hn(t);return t.lanes=536870912,null}return er(t,o)}var u=e.memoizedState;if(u!==null){var g=u.dehydrated;if(Sc(t),c)if(t.flags&256)t.flags&=-257,t=lp(e,t,a);else if(t.memoizedState!==null)t.child=e.child,t.flags|=128,t=null;else throw Error(r(558));else if(We||ci(e,t,a,!1),c=(a&e.childLanes)!==0,We||c){if(o=ze,o!==null&&(g=Jf(o,a),g!==0&&g!==u.retryLane))throw u.retryLane=g,Ca(e,g),St(o,e,g),Hc;dr(),t=lp(e,t,a)}else e=u.treeContext,Le=Ft(g.nextSibling),st=t,xe=!0,Fn=null,Ut=!1,e!==null&&Xh(t,e),t=er(t,o),t.flags|=4096;return t}return e=gn(e.child,{mode:o.mode,children:o.children}),e.ref=t.ref,t.child=e,e.return=t,e}function tr(e,t){var a=t.ref;if(a===null)e!==null&&e.ref!==null&&(t.flags|=4194816);else{if(typeof a!="function"&&typeof a!="object")throw Error(r(284));(e===null||e.ref!==a)&&(t.flags|=4194816)}}function Ic(e,t,a,o,c){return Da(t),a=Cc(e,t,a,o,void 0,c),o=Ac(),e!==null&&!We?(Ec(e,t,c),Sn(e,t,c)):(xe&&o&&sc(t),t.flags|=1,rt(e,t,a,c),t.child)}function cp(e,t,a,o,c,u){return Da(t),t.updateQueue=null,a=fm(t,o,a,c),dm(e),o=Ac(),e!==null&&!We?(Ec(e,t,u),Sn(e,t,u)):(xe&&o&&sc(t),t.flags|=1,rt(e,t,a,u),t.child)}function up(e,t,a,o,c){if(Da(t),t.stateNode===null){var u=si,g=a.contextType;typeof g=="object"&&g!==null&&(u=ot(g)),u=new a(o,u),t.memoizedState=u.state!==null&&u.state!==void 0?u.state:null,u.updater=qc,t.stateNode=u,u._reactInternals=t,u=t.stateNode,u.props=o,u.state=t.memoizedState,u.refs={},gc(t),g=a.contextType,u.context=typeof g=="object"&&g!==null?ot(g):si,u.state=t.memoizedState,g=a.getDerivedStateFromProps,typeof g=="function"&&(Uc(t,a,g,o),u.state=t.memoizedState),typeof a.getDerivedStateFromProps=="function"||typeof u.getSnapshotBeforeUpdate=="function"||typeof u.UNSAFE_componentWillMount!="function"&&typeof u.componentWillMount!="function"||(g=u.state,typeof u.componentWillMount=="function"&&u.componentWillMount(),typeof u.UNSAFE_componentWillMount=="function"&&u.UNSAFE_componentWillMount(),g!==u.state&&qc.enqueueReplaceState(u,u.state,null),vs(t,o,u,c),ys(),u.state=t.memoizedState),typeof u.componentDidMount=="function"&&(t.flags|=4194308),o=!0}else if(e===null){u=t.stateNode;var x=t.memoizedProps,T=Oa(a,x);u.props=T;var j=u.context,_=a.contextType;g=si,typeof _=="object"&&_!==null&&(g=ot(_));var F=a.getDerivedStateFromProps;_=typeof F=="function"||typeof u.getSnapshotBeforeUpdate=="function",x=t.pendingProps!==x,_||typeof u.UNSAFE_componentWillReceiveProps!="function"&&typeof u.componentWillReceiveProps!="function"||(x||j!==g)&&Qm(t,u,o,g),Gn=!1;var B=t.memoizedState;u.state=B,vs(t,o,u,c),ys(),j=t.memoizedState,x||B!==j||Gn?(typeof F=="function"&&(Uc(t,a,F,o),j=t.memoizedState),(T=Gn||Wm(t,a,T,o,B,j,g))?(_||typeof u.UNSAFE_componentWillMount!="function"&&typeof u.componentWillMount!="function"||(typeof u.componentWillMount=="function"&&u.componentWillMount(),typeof u.UNSAFE_componentWillMount=="function"&&u.UNSAFE_componentWillMount()),typeof u.componentDidMount=="function"&&(t.flags|=4194308)):(typeof u.componentDidMount=="function"&&(t.flags|=4194308),t.memoizedProps=o,t.memoizedState=j),u.props=o,u.state=j,u.context=g,o=T):(typeof u.componentDidMount=="function"&&(t.flags|=4194308),o=!1)}else{u=t.stateNode,yc(e,t),g=t.memoizedProps,_=Oa(a,g),u.props=_,F=t.pendingProps,B=u.context,j=a.contextType,T=si,typeof j=="object"&&j!==null&&(T=ot(j)),x=a.getDerivedStateFromProps,(j=typeof x=="function"||typeof u.getSnapshotBeforeUpdate=="function")||typeof u.UNSAFE_componentWillReceiveProps!="function"&&typeof u.componentWillReceiveProps!="function"||(g!==F||B!==T)&&Qm(t,u,o,T),Gn=!1,B=t.memoizedState,u.state=B,vs(t,o,u,c),ys();var P=t.memoizedState;g!==F||B!==P||Gn||e!==null&&e.dependencies!==null&&Lo(e.dependencies)?(typeof x=="function"&&(Uc(t,a,x,o),P=t.memoizedState),(_=Gn||Wm(t,a,_,o,B,P,T)||e!==null&&e.dependencies!==null&&Lo(e.dependencies))?(j||typeof u.UNSAFE_componentWillUpdate!="function"&&typeof u.componentWillUpdate!="function"||(typeof u.componentWillUpdate=="function"&&u.componentWillUpdate(o,P,T),typeof u.UNSAFE_componentWillUpdate=="function"&&u.UNSAFE_componentWillUpdate(o,P,T)),typeof u.componentDidUpdate=="function"&&(t.flags|=4),typeof u.getSnapshotBeforeUpdate=="function"&&(t.flags|=1024)):(typeof u.componentDidUpdate!="function"||g===e.memoizedProps&&B===e.memoizedState||(t.flags|=4),typeof u.getSnapshotBeforeUpdate!="function"||g===e.memoizedProps&&B===e.memoizedState||(t.flags|=1024),t.memoizedProps=o,t.memoizedState=P),u.props=o,u.state=P,u.context=T,o=_):(typeof u.componentDidUpdate!="function"||g===e.memoizedProps&&B===e.memoizedState||(t.flags|=4),typeof u.getSnapshotBeforeUpdate!="function"||g===e.memoizedProps&&B===e.memoizedState||(t.flags|=1024),o=!1)}return u=o,tr(e,t),o=(t.flags&128)!==0,u||o?(u=t.stateNode,a=o&&typeof a.getDerivedStateFromError!="function"?null:u.render(),t.flags|=1,e!==null&&o?(t.child=Na(t,e.child,null,c),t.child=Na(t,null,a,c)):rt(e,t,a,c),t.memoizedState=u.state,e=t.child):e=Sn(e,t,c),e}function dp(e,t,a,o){return Ea(),t.flags|=256,rt(e,t,a,o),t.child}var Gc={dehydrated:null,treeContext:null,retryLane:0,hydrationErrors:null};function Yc(e){return{baseLanes:e,cachePool:em()}}function Kc(e,t,a){return e=e!==null?e.childLanes&~a:0,t&&(e|=zt),e}function fp(e,t,a){var o=t.pendingProps,c=!1,u=(t.flags&128)!==0,g;if((g=u)||(g=e!==null&&e.memoizedState===null?!1:(Ge.current&2)!==0),g&&(c=!0,t.flags&=-129),g=(t.flags&32)!==0,t.flags&=-33,e===null){if(xe){if(c?Xn(t):Wn(),(e=Le)?(e=xg(e,Ut),e=e!==null&&e.data!=="&"?e:null,e!==null&&(t.memoizedState={dehydrated:e,treeContext:qn!==null?{id:tn,overflow:nn}:null,retryLane:536870912,hydrationErrors:null},a=Gh(e),a.return=t,t.child=a,st=t,Le=null)):e=null,e===null)throw Hn(t);return Ru(e)?t.lanes=32:t.lanes=536870912,null}var x=o.children;return o=o.fallback,c?(Wn(),c=t.mode,x=nr({mode:"hidden",children:x},c),o=Aa(o,c,a,null),x.return=t,o.return=t,x.sibling=o,t.child=x,o=t.child,o.memoizedState=Yc(a),o.childLanes=Kc(e,g,a),t.memoizedState=Gc,Ts(null,o)):(Xn(t),Xc(t,x))}var T=e.memoizedState;if(T!==null&&(x=T.dehydrated,x!==null)){if(u)t.flags&256?(Xn(t),t.flags&=-257,t=Wc(e,t,a)):t.memoizedState!==null?(Wn(),t.child=e.child,t.flags|=128,t=null):(Wn(),x=o.fallback,c=t.mode,o=nr({mode:"visible",children:o.children},c),x=Aa(x,c,a,null),x.flags|=2,o.return=t,x.return=t,o.sibling=x,t.child=o,Na(t,e.child,null,a),o=t.child,o.memoizedState=Yc(a),o.childLanes=Kc(e,g,a),t.memoizedState=Gc,t=Ts(null,o));else if(Xn(t),Ru(x)){if(g=x.nextSibling&&x.nextSibling.dataset,g)var j=g.dgst;g=j,o=Error(r(419)),o.stack="",o.digest=g,ds({value:o,source:null,stack:null}),t=Wc(e,t,a)}else if(We||ci(e,t,a,!1),g=(a&e.childLanes)!==0,We||g){if(g=ze,g!==null&&(o=Jf(g,a),o!==0&&o!==T.retryLane))throw T.retryLane=o,Ca(e,o),St(g,e,o),Hc;Du(x)||dr(),t=Wc(e,t,a)}else Du(x)?(t.flags|=192,t.child=e.child,t=null):(e=T.treeContext,Le=Ft(x.nextSibling),st=t,xe=!0,Fn=null,Ut=!1,e!==null&&Xh(t,e),t=Xc(t,o.children),t.flags|=4096);return t}return c?(Wn(),x=o.fallback,c=t.mode,T=e.child,j=T.sibling,o=gn(T,{mode:"hidden",children:o.children}),o.subtreeFlags=T.subtreeFlags&65011712,j!==null?x=gn(j,x):(x=Aa(x,c,a,null),x.flags|=2),x.return=t,o.return=t,o.sibling=x,t.child=o,Ts(null,o),o=t.child,x=e.child.memoizedState,x===null?x=Yc(a):(c=x.cachePool,c!==null?(T=Ke._currentValue,c=c.parent!==T?{parent:T,pool:T}:c):c=em(),x={baseLanes:x.baseLanes|a,cachePool:c}),o.memoizedState=x,o.childLanes=Kc(e,g,a),t.memoizedState=Gc,Ts(e.child,o)):(Xn(t),a=e.child,e=a.sibling,a=gn(a,{mode:"visible",children:o.children}),a.return=t,a.sibling=null,e!==null&&(g=t.deletions,g===null?(t.deletions=[e],t.flags|=16):g.push(e)),t.child=a,t.memoizedState=null,a)}function Xc(e,t){return t=nr({mode:"visible",children:t},e.mode),t.return=e,e.child=t}function nr(e,t){return e=Mt(22,e,null,t),e.lanes=0,e}function Wc(e,t,a){return Na(t,e.child,null,a),e=Xc(t,t.pendingProps.children),e.flags|=2,t.memoizedState=null,e}function hp(e,t,a){e.lanes|=t;var o=e.alternate;o!==null&&(o.lanes|=t),uc(e.return,t,a)}function Qc(e,t,a,o,c,u){var g=e.memoizedState;g===null?e.memoizedState={isBackwards:t,rendering:null,renderingStartTime:0,last:o,tail:a,tailMode:c,treeForkCount:u}:(g.isBackwards=t,g.rendering=null,g.renderingStartTime=0,g.last=o,g.tail=a,g.tailMode=c,g.treeForkCount=u)}function mp(e,t,a){var o=t.pendingProps,c=o.revealOrder,u=o.tail;o=o.children;var g=Ge.current,x=(g&2)!==0;if(x?(g=g&1|2,t.flags|=128):g&=1,W(Ge,g),rt(e,t,o,a),o=xe?us:0,!x&&e!==null&&(e.flags&128)!==0)e:for(e=t.child;e!==null;){if(e.tag===13)e.memoizedState!==null&&hp(e,a,t);else if(e.tag===19)hp(e,a,t);else if(e.child!==null){e.child.return=e,e=e.child;continue}if(e===t)break e;for(;e.sibling===null;){if(e.return===null||e.return===t)break e;e=e.return}e.sibling.return=e.return,e=e.sibling}switch(c){case"forwards":for(a=t.child,c=null;a!==null;)e=a.alternate,e!==null&&Io(e)===null&&(c=a),a=a.sibling;a=c,a===null?(c=t.child,t.child=null):(c=a.sibling,a.sibling=null),Qc(t,!1,c,a,u,o);break;case"backwards":case"unstable_legacy-backwards":for(a=null,c=t.child,t.child=null;c!==null;){if(e=c.alternate,e!==null&&Io(e)===null){t.child=c;break}e=c.sibling,c.sibling=a,a=c,c=e}Qc(t,!0,a,null,u,o);break;case"together":Qc(t,!1,null,null,void 0,o);break;default:t.memoizedState=null}return t.child}function Sn(e,t,a){if(e!==null&&(t.dependencies=e.dependencies),Jn|=t.lanes,(a&t.childLanes)===0)if(e!==null){if(ci(e,t,a,!1),(a&t.childLanes)===0)return null}else return null;if(e!==null&&t.child!==e.child)throw Error(r(153));if(t.child!==null){for(e=t.child,a=gn(e,e.pendingProps),t.child=a,a.return=t;e.sibling!==null;)e=e.sibling,a=a.sibling=gn(e,e.pendingProps),a.return=t;a.sibling=null}return t.child}function Zc(e,t){return(e.lanes&t)!==0?!0:(e=e.dependencies,!!(e!==null&&Lo(e)))}function hw(e,t,a){switch(t.tag){case 3:tt(t,t.stateNode.containerInfo),In(t,Ke,e.memoizedState.cache),Ea();break;case 27:case 5:en(t);break;case 4:tt(t,t.stateNode.containerInfo);break;case 10:In(t,t.type,t.memoizedProps.value);break;case 31:if(t.memoizedState!==null)return t.flags|=128,Sc(t),null;break;case 13:var o=t.memoizedState;if(o!==null)return o.dehydrated!==null?(Xn(t),t.flags|=128,null):(a&t.child.childLanes)!==0?fp(e,t,a):(Xn(t),e=Sn(e,t,a),e!==null?e.sibling:null);Xn(t);break;case 19:var c=(e.flags&128)!==0;if(o=(a&t.childLanes)!==0,o||(ci(e,t,a,!1),o=(a&t.childLanes)!==0),c){if(o)return mp(e,t,a);t.flags|=128}if(c=t.memoizedState,c!==null&&(c.rendering=null,c.tail=null,c.lastEffect=null),W(Ge,Ge.current),o)break;return null;case 22:return t.lanes=0,op(e,t,a,t.pendingProps);case 24:In(t,Ke,e.memoizedState.cache)}return Sn(e,t,a)}function pp(e,t,a){if(e!==null)if(e.memoizedProps!==t.pendingProps)We=!0;else{if(!Zc(e,a)&&(t.flags&128)===0)return We=!1,hw(e,t,a);We=(e.flags&131072)!==0}else We=!1,xe&&(t.flags&1048576)!==0&&Kh(t,us,t.index);switch(t.lanes=0,t.tag){case 16:e:{var o=t.pendingProps;if(e=ka(t.elementType),t.type=e,typeof e=="function")nc(e)?(o=Oa(e,o),t.tag=1,t=up(null,t,e,o,a)):(t.tag=0,t=Ic(null,t,e,o,a));else{if(e!=null){var c=e.$$typeof;if(c===X){t.tag=11,t=ap(null,t,e,o,a);break e}else if(c===K){t.tag=14,t=ip(null,t,e,o,a);break e}}throw t=ut(e)||e,Error(r(306,t,""))}}return t;case 0:return Ic(e,t,t.type,t.pendingProps,a);case 1:return o=t.type,c=Oa(o,t.pendingProps),up(e,t,o,c,a);case 3:e:{if(tt(t,t.stateNode.containerInfo),e===null)throw Error(r(387));o=t.pendingProps;var u=t.memoizedState;c=u.element,yc(e,t),vs(t,o,null,a);var g=t.memoizedState;if(o=g.cache,In(t,Ke,o),o!==u.cache&&dc(t,[Ke],a,!0),ys(),o=g.element,u.isDehydrated)if(u={element:o,isDehydrated:!1,cache:g.cache},t.updateQueue.baseState=u,t.memoizedState=u,t.flags&256){t=dp(e,t,o,a);break e}else if(o!==c){c=Pt(Error(r(424)),t),ds(c),t=dp(e,t,o,a);break e}else for(e=t.stateNode.containerInfo,e.nodeType===9?e=e.body:e=e.nodeName==="HTML"?e.ownerDocument.body:e,Le=Ft(e.firstChild),st=t,xe=!0,Fn=null,Ut=!0,a=om(t,null,o,a),t.child=a;a;)a.flags=a.flags&-3|4096,a=a.sibling;else{if(Ea(),o===c){t=Sn(e,t,a);break e}rt(e,t,o,a)}t=t.child}return t;case 26:return tr(e,t),e===null?(a=Eg(t.type,null,t.pendingProps,null))?t.memoizedState=a:xe||(a=t.type,e=t.pendingProps,o=vr(fe.current).createElement(a),o[it]=t,o[gt]=e,lt(o,a,e),nt(o),t.stateNode=o):t.memoizedState=Eg(t.type,e.memoizedProps,t.pendingProps,e.memoizedState),null;case 27:return en(t),e===null&&xe&&(o=t.stateNode=Tg(t.type,t.pendingProps,fe.current),st=t,Ut=!0,c=Le,aa(t.type)?(ku=c,Le=Ft(o.firstChild)):Le=c),rt(e,t,t.pendingProps.children,a),tr(e,t),e===null&&(t.flags|=4194304),t.child;case 5:return e===null&&xe&&((c=o=Le)&&(o=Hw(o,t.type,t.pendingProps,Ut),o!==null?(t.stateNode=o,st=t,Le=Ft(o.firstChild),Ut=!1,c=!0):c=!1),c||Hn(t)),en(t),c=t.type,u=t.pendingProps,g=e!==null?e.memoizedProps:null,o=u.children,Au(c,u)?o=null:g!==null&&Au(c,g)&&(t.flags|=32),t.memoizedState!==null&&(c=Cc(e,t,iw,null,null,a),Vs._currentValue=c),tr(e,t),rt(e,t,o,a),t.child;case 6:return e===null&&xe&&((e=a=Le)&&(a=Iw(a,t.pendingProps,Ut),a!==null?(t.stateNode=a,st=t,Le=null,e=!0):e=!1),e||Hn(t)),null;case 13:return fp(e,t,a);case 4:return tt(t,t.stateNode.containerInfo),o=t.pendingProps,e===null?t.child=Na(t,null,o,a):rt(e,t,o,a),t.child;case 11:return ap(e,t,t.type,t.pendingProps,a);case 7:return rt(e,t,t.pendingProps,a),t.child;case 8:return rt(e,t,t.pendingProps.children,a),t.child;case 12:return rt(e,t,t.pendingProps.children,a),t.child;case 10:return o=t.pendingProps,In(t,t.type,o.value),rt(e,t,o.children,a),t.child;case 9:return c=t.type._context,o=t.pendingProps.children,Da(t),c=ot(c),o=o(c),t.flags|=1,rt(e,t,o,a),t.child;case 14:return ip(e,t,t.type,t.pendingProps,a);case 15:return sp(e,t,t.type,t.pendingProps,a);case 19:return mp(e,t,a);case 31:return fw(e,t,a);case 22:return op(e,t,a,t.pendingProps);case 24:return Da(t),o=ot(Ke),e===null?(c=mc(),c===null&&(c=ze,u=fc(),c.pooledCache=u,u.refCount++,u!==null&&(c.pooledCacheLanes|=a),c=u),t.memoizedState={parent:o,cache:c},gc(t),In(t,Ke,c)):((e.lanes&a)!==0&&(yc(e,t),vs(t,null,null,a),ys()),c=e.memoizedState,u=t.memoizedState,c.parent!==o?(c={parent:o,cache:o},t.memoizedState=c,t.lanes===0&&(t.memoizedState=t.updateQueue.baseState=c),In(t,Ke,o)):(o=u.cache,In(t,Ke,o),o!==c.cache&&dc(t,[Ke],a,!0))),rt(e,t,t.pendingProps.children,a),t.child;case 29:throw t.pendingProps}throw Error(r(156,t.tag))}function Tn(e){e.flags|=4}function Jc(e,t,a,o,c){if((t=(e.mode&32)!==0)&&(t=!1),t){if(e.flags|=16777216,(c&335544128)===c)if(e.stateNode.complete)e.flags|=8192;else if(Fp())e.flags|=8192;else throw za=Uo,pc}else e.flags&=-16777217}function gp(e,t){if(t.type!=="stylesheet"||(t.state.loading&4)!==0)e.flags&=-16777217;else if(e.flags|=16777216,!zg(t))if(Fp())e.flags|=8192;else throw za=Uo,pc}function ar(e,t){t!==null&&(e.flags|=4),e.flags&16384&&(t=e.tag!==22?Wf():536870912,e.lanes|=t,wi|=t)}function Cs(e,t){if(!xe)switch(e.tailMode){case"hidden":t=e.tail;for(var a=null;t!==null;)t.alternate!==null&&(a=t),t=t.sibling;a===null?e.tail=null:a.sibling=null;break;case"collapsed":a=e.tail;for(var o=null;a!==null;)a.alternate!==null&&(o=a),a=a.sibling;o===null?t||e.tail===null?e.tail=null:e.tail.sibling=null:o.sibling=null}}function Pe(e){var t=e.alternate!==null&&e.alternate.child===e.child,a=0,o=0;if(t)for(var c=e.child;c!==null;)a|=c.lanes|c.childLanes,o|=c.subtreeFlags&65011712,o|=c.flags&65011712,c.return=e,c=c.sibling;else for(c=e.child;c!==null;)a|=c.lanes|c.childLanes,o|=c.subtreeFlags,o|=c.flags,c.return=e,c=c.sibling;return e.subtreeFlags|=o,e.childLanes=a,t}function mw(e,t,a){var o=t.pendingProps;switch(oc(t),t.tag){case 16:case 15:case 0:case 11:case 7:case 8:case 12:case 9:case 14:return Pe(t),null;case 1:return Pe(t),null;case 3:return a=t.stateNode,o=null,e!==null&&(o=e.memoizedState.cache),t.memoizedState.cache!==o&&(t.flags|=2048),bn(Ke),Ne(),a.pendingContext&&(a.context=a.pendingContext,a.pendingContext=null),(e===null||e.child===null)&&(li(t)?Tn(t):e===null||e.memoizedState.isDehydrated&&(t.flags&256)===0||(t.flags|=1024,lc())),Pe(t),null;case 26:var c=t.type,u=t.memoizedState;return e===null?(Tn(t),u!==null?(Pe(t),gp(t,u)):(Pe(t),Jc(t,c,null,o,a))):u?u!==e.memoizedState?(Tn(t),Pe(t),gp(t,u)):(Pe(t),t.flags&=-16777217):(e=e.memoizedProps,e!==o&&Tn(t),Pe(t),Jc(t,c,e,o,a)),null;case 27:if(Ln(t),a=fe.current,c=t.type,e!==null&&t.stateNode!=null)e.memoizedProps!==o&&Tn(t);else{if(!o){if(t.stateNode===null)throw Error(r(166));return Pe(t),null}e=Q.current,li(t)?Wh(t):(e=Tg(c,o,a),t.stateNode=e,Tn(t))}return Pe(t),null;case 5:if(Ln(t),c=t.type,e!==null&&t.stateNode!=null)e.memoizedProps!==o&&Tn(t);else{if(!o){if(t.stateNode===null)throw Error(r(166));return Pe(t),null}if(u=Q.current,li(t))Wh(t);else{var g=vr(fe.current);switch(u){case 1:u=g.createElementNS("http://www.w3.org/2000/svg",c);break;case 2:u=g.createElementNS("http://www.w3.org/1998/Math/MathML",c);break;default:switch(c){case"svg":u=g.createElementNS("http://www.w3.org/2000/svg",c);break;case"math":u=g.createElementNS("http://www.w3.org/1998/Math/MathML",c);break;case"script":u=g.createElement("div"),u.innerHTML="<script><\/script>",u=u.removeChild(u.firstChild);break;case"select":u=typeof o.is=="string"?g.createElement("select",{is:o.is}):g.createElement("select"),o.multiple?u.multiple=!0:o.size&&(u.size=o.size);break;default:u=typeof o.is=="string"?g.createElement(c,{is:o.is}):g.createElement(c)}}u[it]=t,u[gt]=o;e:for(g=t.child;g!==null;){if(g.tag===5||g.tag===6)u.appendChild(g.stateNode);else if(g.tag!==4&&g.tag!==27&&g.child!==null){g.child.return=g,g=g.child;continue}if(g===t)break e;for(;g.sibling===null;){if(g.return===null||g.return===t)break e;g=g.return}g.sibling.return=g.return,g=g.sibling}t.stateNode=u;e:switch(lt(u,c,o),c){case"button":case"input":case"select":case"textarea":o=!!o.autoFocus;break e;case"img":o=!0;break e;default:o=!1}o&&Tn(t)}}return Pe(t),Jc(t,t.type,e===null?null:e.memoizedProps,t.pendingProps,a),null;case 6:if(e&&t.stateNode!=null)e.memoizedProps!==o&&Tn(t);else{if(typeof o!="string"&&t.stateNode===null)throw Error(r(166));if(e=fe.current,li(t)){if(e=t.stateNode,a=t.memoizedProps,o=null,c=st,c!==null)switch(c.tag){case 27:case 5:o=c.memoizedProps}e[it]=t,e=!!(e.nodeValue===a||o!==null&&o.suppressHydrationWarning===!0||fg(e.nodeValue,a)),e||Hn(t,!0)}else e=vr(e).createTextNode(o),e[it]=t,t.stateNode=e}return Pe(t),null;case 31:if(a=t.memoizedState,e===null||e.memoizedState!==null){if(o=li(t),a!==null){if(e===null){if(!o)throw Error(r(318));if(e=t.memoizedState,e=e!==null?e.dehydrated:null,!e)throw Error(r(557));e[it]=t}else Ea(),(t.flags&128)===0&&(t.memoizedState=null),t.flags|=4;Pe(t),e=!1}else a=lc(),e!==null&&e.memoizedState!==null&&(e.memoizedState.hydrationErrors=a),e=!0;if(!e)return t.flags&256?(Rt(t),t):(Rt(t),null);if((t.flags&128)!==0)throw Error(r(558))}return Pe(t),null;case 13:if(o=t.memoizedState,e===null||e.memoizedState!==null&&e.memoizedState.dehydrated!==null){if(c=li(t),o!==null&&o.dehydrated!==null){if(e===null){if(!c)throw Error(r(318));if(c=t.memoizedState,c=c!==null?c.dehydrated:null,!c)throw Error(r(317));c[it]=t}else Ea(),(t.flags&128)===0&&(t.memoizedState=null),t.flags|=4;Pe(t),c=!1}else c=lc(),e!==null&&e.memoizedState!==null&&(e.memoizedState.hydrationErrors=c),c=!0;if(!c)return t.flags&256?(Rt(t),t):(Rt(t),null)}return Rt(t),(t.flags&128)!==0?(t.lanes=a,t):(a=o!==null,e=e!==null&&e.memoizedState!==null,a&&(o=t.child,c=null,o.alternate!==null&&o.alternate.memoizedState!==null&&o.alternate.memoizedState.cachePool!==null&&(c=o.alternate.memoizedState.cachePool.pool),u=null,o.memoizedState!==null&&o.memoizedState.cachePool!==null&&(u=o.memoizedState.cachePool.pool),u!==c&&(o.flags|=2048)),a!==e&&a&&(t.child.flags|=8192),ar(t,t.updateQueue),Pe(t),null);case 4:return Ne(),e===null&&xu(t.stateNode.containerInfo),Pe(t),null;case 10:return bn(t.type),Pe(t),null;case 19:if(q(Ge),o=t.memoizedState,o===null)return Pe(t),null;if(c=(t.flags&128)!==0,u=o.rendering,u===null)if(c)Cs(o,!1);else{if(Fe!==0||e!==null&&(e.flags&128)!==0)for(e=t.child;e!==null;){if(u=Io(e),u!==null){for(t.flags|=128,Cs(o,!1),e=u.updateQueue,t.updateQueue=e,ar(t,e),t.subtreeFlags=0,e=a,a=t.child;a!==null;)Ih(a,e),a=a.sibling;return W(Ge,Ge.current&1|2),xe&&yn(t,o.treeForkCount),t.child}e=e.sibling}o.tail!==null&&Tt()>lr&&(t.flags|=128,c=!0,Cs(o,!1),t.lanes=4194304)}else{if(!c)if(e=Io(u),e!==null){if(t.flags|=128,c=!0,e=e.updateQueue,t.updateQueue=e,ar(t,e),Cs(o,!0),o.tail===null&&o.tailMode==="hidden"&&!u.alternate&&!xe)return Pe(t),null}else 2*Tt()-o.renderingStartTime>lr&&a!==536870912&&(t.flags|=128,c=!0,Cs(o,!1),t.lanes=4194304);o.isBackwards?(u.sibling=t.child,t.child=u):(e=o.last,e!==null?e.sibling=u:t.child=u,o.last=u)}return o.tail!==null?(e=o.tail,o.rendering=e,o.tail=e.sibling,o.renderingStartTime=Tt(),e.sibling=null,a=Ge.current,W(Ge,c?a&1|2:a&1),xe&&yn(t,o.treeForkCount),e):(Pe(t),null);case 22:case 23:return Rt(t),wc(),o=t.memoizedState!==null,e!==null?e.memoizedState!==null!==o&&(t.flags|=8192):o&&(t.flags|=8192),o?(a&536870912)!==0&&(t.flags&128)===0&&(Pe(t),t.subtreeFlags&6&&(t.flags|=8192)):Pe(t),a=t.updateQueue,a!==null&&ar(t,a.retryQueue),a=null,e!==null&&e.memoizedState!==null&&e.memoizedState.cachePool!==null&&(a=e.memoizedState.cachePool.pool),o=null,t.memoizedState!==null&&t.memoizedState.cachePool!==null&&(o=t.memoizedState.cachePool.pool),o!==a&&(t.flags|=2048),e!==null&&q(Ra),null;case 24:return a=null,e!==null&&(a=e.memoizedState.cache),t.memoizedState.cache!==a&&(t.flags|=2048),bn(Ke),Pe(t),null;case 25:return null;case 30:return null}throw Error(r(156,t.tag))}function pw(e,t){switch(oc(t),t.tag){case 1:return e=t.flags,e&65536?(t.flags=e&-65537|128,t):null;case 3:return bn(Ke),Ne(),e=t.flags,(e&65536)!==0&&(e&128)===0?(t.flags=e&-65537|128,t):null;case 26:case 27:case 5:return Ln(t),null;case 31:if(t.memoizedState!==null){if(Rt(t),t.alternate===null)throw Error(r(340));Ea()}return e=t.flags,e&65536?(t.flags=e&-65537|128,t):null;case 13:if(Rt(t),e=t.memoizedState,e!==null&&e.dehydrated!==null){if(t.alternate===null)throw Error(r(340));Ea()}return e=t.flags,e&65536?(t.flags=e&-65537|128,t):null;case 19:return q(Ge),null;case 4:return Ne(),null;case 10:return bn(t.type),null;case 22:case 23:return Rt(t),wc(),e!==null&&q(Ra),e=t.flags,e&65536?(t.flags=e&-65537|128,t):null;case 24:return bn(Ke),null;case 25:return null;default:return null}}function yp(e,t){switch(oc(t),t.tag){case 3:bn(Ke),Ne();break;case 26:case 27:case 5:Ln(t);break;case 4:Ne();break;case 31:t.memoizedState!==null&&Rt(t);break;case 13:Rt(t);break;case 19:q(Ge);break;case 10:bn(t.type);break;case 22:case 23:Rt(t),wc(),e!==null&&q(Ra);break;case 24:bn(Ke)}}function As(e,t){try{var a=t.updateQueue,o=a!==null?a.lastEffect:null;if(o!==null){var c=o.next;a=c;do{if((a.tag&e)===e){o=void 0;var u=a.create,g=a.inst;o=u(),g.destroy=o}a=a.next}while(a!==c)}}catch(x){Me(t,t.return,x)}}function Qn(e,t,a){try{var o=t.updateQueue,c=o!==null?o.lastEffect:null;if(c!==null){var u=c.next;o=u;do{if((o.tag&e)===e){var g=o.inst,x=g.destroy;if(x!==void 0){g.destroy=void 0,c=t;var T=a,j=x;try{j()}catch(_){Me(c,T,_)}}}o=o.next}while(o!==u)}}catch(_){Me(t,t.return,_)}}function vp(e){var t=e.updateQueue;if(t!==null){var a=e.stateNode;try{lm(t,a)}catch(o){Me(e,e.return,o)}}}function bp(e,t,a){a.props=Oa(e.type,e.memoizedProps),a.state=e.memoizedState;try{a.componentWillUnmount()}catch(o){Me(e,t,o)}}function Es(e,t){try{var a=e.ref;if(a!==null){switch(e.tag){case 26:case 27:case 5:var o=e.stateNode;break;case 30:o=e.stateNode;break;default:o=e.stateNode}typeof a=="function"?e.refCleanup=a(o):a.current=o}}catch(c){Me(e,t,c)}}function an(e,t){var a=e.ref,o=e.refCleanup;if(a!==null)if(typeof o=="function")try{o()}catch(c){Me(e,t,c)}finally{e.refCleanup=null,e=e.alternate,e!=null&&(e.refCleanup=null)}else if(typeof a=="function")try{a(null)}catch(c){Me(e,t,c)}else a.current=null}function xp(e){var t=e.type,a=e.memoizedProps,o=e.stateNode;try{e:switch(t){case"button":case"input":case"select":case"textarea":a.autoFocus&&o.focus();break e;case"img":a.src?o.src=a.src:a.srcSet&&(o.srcset=a.srcSet)}}catch(c){Me(e,e.return,c)}}function $c(e,t,a){try{var o=e.stateNode;Pw(o,e.type,a,t),o[gt]=t}catch(c){Me(e,e.return,c)}}function wp(e){return e.tag===5||e.tag===3||e.tag===26||e.tag===27&&aa(e.type)||e.tag===4}function eu(e){e:for(;;){for(;e.sibling===null;){if(e.return===null||wp(e.return))return null;e=e.return}for(e.sibling.return=e.return,e=e.sibling;e.tag!==5&&e.tag!==6&&e.tag!==18;){if(e.tag===27&&aa(e.type)||e.flags&2||e.child===null||e.tag===4)continue e;e.child.return=e,e=e.child}if(!(e.flags&2))return e.stateNode}}function tu(e,t,a){var o=e.tag;if(o===5||o===6)e=e.stateNode,t?(a.nodeType===9?a.body:a.nodeName==="HTML"?a.ownerDocument.body:a).insertBefore(e,t):(t=a.nodeType===9?a.body:a.nodeName==="HTML"?a.ownerDocument.body:a,t.appendChild(e),a=a._reactRootContainer,a!=null||t.onclick!==null||(t.onclick=mn));else if(o!==4&&(o===27&&aa(e.type)&&(a=e.stateNode,t=null),e=e.child,e!==null))for(tu(e,t,a),e=e.sibling;e!==null;)tu(e,t,a),e=e.sibling}function ir(e,t,a){var o=e.tag;if(o===5||o===6)e=e.stateNode,t?a.insertBefore(e,t):a.appendChild(e);else if(o!==4&&(o===27&&aa(e.type)&&(a=e.stateNode),e=e.child,e!==null))for(ir(e,t,a),e=e.sibling;e!==null;)ir(e,t,a),e=e.sibling}function Sp(e){var t=e.stateNode,a=e.memoizedProps;try{for(var o=e.type,c=t.attributes;c.length;)t.removeAttributeNode(c[0]);lt(t,o,a),t[it]=e,t[gt]=a}catch(u){Me(e,e.return,u)}}var Cn=!1,Qe=!1,nu=!1,Tp=typeof WeakSet=="function"?WeakSet:Set,at=null;function gw(e,t){if(e=e.containerInfo,Tu=Ar,e=Bh(e),Wl(e)){if("selectionStart"in e)var a={start:e.selectionStart,end:e.selectionEnd};else e:{a=(a=e.ownerDocument)&&a.defaultView||window;var o=a.getSelection&&a.getSelection();if(o&&o.rangeCount!==0){a=o.anchorNode;var c=o.anchorOffset,u=o.focusNode;o=o.focusOffset;try{a.nodeType,u.nodeType}catch{a=null;break e}var g=0,x=-1,T=-1,j=0,_=0,F=e,B=null;t:for(;;){for(var P;F!==a||c!==0&&F.nodeType!==3||(x=g+c),F!==u||o!==0&&F.nodeType!==3||(T=g+o),F.nodeType===3&&(g+=F.nodeValue.length),(P=F.firstChild)!==null;)B=F,F=P;for(;;){if(F===e)break t;if(B===a&&++j===c&&(x=g),B===u&&++_===o&&(T=g),(P=F.nextSibling)!==null)break;F=B,B=F.parentNode}F=P}a=x===-1||T===-1?null:{start:x,end:T}}else a=null}a=a||{start:0,end:0}}else a=null;for(Cu={focusedElem:e,selectionRange:a},Ar=!1,at=t;at!==null;)if(t=at,e=t.child,(t.subtreeFlags&1028)!==0&&e!==null)e.return=t,at=e;else for(;at!==null;){switch(t=at,u=t.alternate,e=t.flags,t.tag){case 0:if((e&4)!==0&&(e=t.updateQueue,e=e!==null?e.events:null,e!==null))for(a=0;a<e.length;a++)c=e[a],c.ref.impl=c.nextImpl;break;case 11:case 15:break;case 1:if((e&1024)!==0&&u!==null){e=void 0,a=t,c=u.memoizedProps,u=u.memoizedState,o=a.stateNode;try{var J=Oa(a.type,c);e=o.getSnapshotBeforeUpdate(J,u),o.__reactInternalSnapshotBeforeUpdate=e}catch(ie){Me(a,a.return,ie)}}break;case 3:if((e&1024)!==0){if(e=t.stateNode.containerInfo,a=e.nodeType,a===9)Mu(e);else if(a===1)switch(e.nodeName){case"HEAD":case"HTML":case"BODY":Mu(e);break;default:e.textContent=""}}break;case 5:case 26:case 27:case 6:case 4:case 17:break;default:if((e&1024)!==0)throw Error(r(163))}if(e=t.sibling,e!==null){e.return=t.return,at=e;break}at=t.return}}function Cp(e,t,a){var o=a.flags;switch(a.tag){case 0:case 11:case 15:En(e,a),o&4&&As(5,a);break;case 1:if(En(e,a),o&4)if(e=a.stateNode,t===null)try{e.componentDidMount()}catch(g){Me(a,a.return,g)}else{var c=Oa(a.type,t.memoizedProps);t=t.memoizedState;try{e.componentDidUpdate(c,t,e.__reactInternalSnapshotBeforeUpdate)}catch(g){Me(a,a.return,g)}}o&64&&vp(a),o&512&&Es(a,a.return);break;case 3:if(En(e,a),o&64&&(e=a.updateQueue,e!==null)){if(t=null,a.child!==null)switch(a.child.tag){case 27:case 5:t=a.child.stateNode;break;case 1:t=a.child.stateNode}try{lm(e,t)}catch(g){Me(a,a.return,g)}}break;case 27:t===null&&o&4&&Sp(a);case 26:case 5:En(e,a),t===null&&o&4&&xp(a),o&512&&Es(a,a.return);break;case 12:En(e,a);break;case 31:En(e,a),o&4&&Mp(e,a);break;case 13:En(e,a),o&4&&Dp(e,a),o&64&&(e=a.memoizedState,e!==null&&(e=e.dehydrated,e!==null&&(a=Aw.bind(null,a),Gw(e,a))));break;case 22:if(o=a.memoizedState!==null||Cn,!o){t=t!==null&&t.memoizedState!==null||Qe,c=Cn;var u=Qe;Cn=o,(Qe=t)&&!u?Mn(e,a,(a.subtreeFlags&8772)!==0):En(e,a),Cn=c,Qe=u}break;case 30:break;default:En(e,a)}}function Ap(e){var t=e.alternate;t!==null&&(e.alternate=null,Ap(t)),e.child=null,e.deletions=null,e.sibling=null,e.tag===5&&(t=e.stateNode,t!==null&&Nl(t)),e.stateNode=null,e.return=null,e.dependencies=null,e.memoizedProps=null,e.memoizedState=null,e.pendingProps=null,e.stateNode=null,e.updateQueue=null}var Ve=null,vt=!1;function An(e,t,a){for(a=a.child;a!==null;)Ep(e,t,a),a=a.sibling}function Ep(e,t,a){if(Ct&&typeof Ct.onCommitFiberUnmount=="function")try{Ct.onCommitFiberUnmount(Qi,a)}catch{}switch(a.tag){case 26:Qe||an(a,t),An(e,t,a),a.memoizedState?a.memoizedState.count--:a.stateNode&&(a=a.stateNode,a.parentNode.removeChild(a));break;case 27:Qe||an(a,t);var o=Ve,c=vt;aa(a.type)&&(Ve=a.stateNode,vt=!1),An(e,t,a),Bs(a.stateNode),Ve=o,vt=c;break;case 5:Qe||an(a,t);case 6:if(o=Ve,c=vt,Ve=null,An(e,t,a),Ve=o,vt=c,Ve!==null)if(vt)try{(Ve.nodeType===9?Ve.body:Ve.nodeName==="HTML"?Ve.ownerDocument.body:Ve).removeChild(a.stateNode)}catch(u){Me(a,t,u)}else try{Ve.removeChild(a.stateNode)}catch(u){Me(a,t,u)}break;case 18:Ve!==null&&(vt?(e=Ve,vg(e.nodeType===9?e.body:e.nodeName==="HTML"?e.ownerDocument.body:e,a.stateNode),Ri(e)):vg(Ve,a.stateNode));break;case 4:o=Ve,c=vt,Ve=a.stateNode.containerInfo,vt=!0,An(e,t,a),Ve=o,vt=c;break;case 0:case 11:case 14:case 15:Qn(2,a,t),Qe||Qn(4,a,t),An(e,t,a);break;case 1:Qe||(an(a,t),o=a.stateNode,typeof o.componentWillUnmount=="function"&&bp(a,t,o)),An(e,t,a);break;case 21:An(e,t,a);break;case 22:Qe=(o=Qe)||a.memoizedState!==null,An(e,t,a),Qe=o;break;default:An(e,t,a)}}function Mp(e,t){if(t.memoizedState===null&&(e=t.alternate,e!==null&&(e=e.memoizedState,e!==null))){e=e.dehydrated;try{Ri(e)}catch(a){Me(t,t.return,a)}}}function Dp(e,t){if(t.memoizedState===null&&(e=t.alternate,e!==null&&(e=e.memoizedState,e!==null&&(e=e.dehydrated,e!==null))))try{Ri(e)}catch(a){Me(t,t.return,a)}}function yw(e){switch(e.tag){case 31:case 13:case 19:var t=e.stateNode;return t===null&&(t=e.stateNode=new Tp),t;case 22:return e=e.stateNode,t=e._retryCache,t===null&&(t=e._retryCache=new Tp),t;default:throw Error(r(435,e.tag))}}function sr(e,t){var a=yw(e);t.forEach(function(o){if(!a.has(o)){a.add(o);var c=Ew.bind(null,e,o);o.then(c,c)}})}function bt(e,t){var a=t.deletions;if(a!==null)for(var o=0;o<a.length;o++){var c=a[o],u=e,g=t,x=g;e:for(;x!==null;){switch(x.tag){case 27:if(aa(x.type)){Ve=x.stateNode,vt=!1;break e}break;case 5:Ve=x.stateNode,vt=!1;break e;case 3:case 4:Ve=x.stateNode.containerInfo,vt=!0;break e}x=x.return}if(Ve===null)throw Error(r(160));Ep(u,g,c),Ve=null,vt=!1,u=c.alternate,u!==null&&(u.return=null),c.return=null}if(t.subtreeFlags&13886)for(t=t.child;t!==null;)Rp(t,e),t=t.sibling}var Xt=null;function Rp(e,t){var a=e.alternate,o=e.flags;switch(e.tag){case 0:case 11:case 14:case 15:bt(t,e),xt(e),o&4&&(Qn(3,e,e.return),As(3,e),Qn(5,e,e.return));break;case 1:bt(t,e),xt(e),o&512&&(Qe||a===null||an(a,a.return)),o&64&&Cn&&(e=e.updateQueue,e!==null&&(o=e.callbacks,o!==null&&(a=e.shared.hiddenCallbacks,e.shared.hiddenCallbacks=a===null?o:a.concat(o))));break;case 26:var c=Xt;if(bt(t,e),xt(e),o&512&&(Qe||a===null||an(a,a.return)),o&4){var u=a!==null?a.memoizedState:null;if(o=e.memoizedState,a===null)if(o===null)if(e.stateNode===null){e:{o=e.type,a=e.memoizedProps,c=c.ownerDocument||c;t:switch(o){case"title":u=c.getElementsByTagName("title")[0],(!u||u[$i]||u[it]||u.namespaceURI==="http://www.w3.org/2000/svg"||u.hasAttribute("itemprop"))&&(u=c.createElement(o),c.head.insertBefore(u,c.querySelector("head > title"))),lt(u,o,a),u[it]=e,nt(u),o=u;break e;case"link":var g=Rg("link","href",c).get(o+(a.href||""));if(g){for(var x=0;x<g.length;x++)if(u=g[x],u.getAttribute("href")===(a.href==null||a.href===""?null:a.href)&&u.getAttribute("rel")===(a.rel==null?null:a.rel)&&u.getAttribute("title")===(a.title==null?null:a.title)&&u.getAttribute("crossorigin")===(a.crossOrigin==null?null:a.crossOrigin)){g.splice(x,1);break t}}u=c.createElement(o),lt(u,o,a),c.head.appendChild(u);break;case"meta":if(g=Rg("meta","content",c).get(o+(a.content||""))){for(x=0;x<g.length;x++)if(u=g[x],u.getAttribute("content")===(a.content==null?null:""+a.content)&&u.getAttribute("name")===(a.name==null?null:a.name)&&u.getAttribute("property")===(a.property==null?null:a.property)&&u.getAttribute("http-equiv")===(a.httpEquiv==null?null:a.httpEquiv)&&u.getAttribute("charset")===(a.charSet==null?null:a.charSet)){g.splice(x,1);break t}}u=c.createElement(o),lt(u,o,a),c.head.appendChild(u);break;default:throw Error(r(468,o))}u[it]=e,nt(u),o=u}e.stateNode=o}else kg(c,e.type,e.stateNode);else e.stateNode=Dg(c,o,e.memoizedProps);else u!==o?(u===null?a.stateNode!==null&&(a=a.stateNode,a.parentNode.removeChild(a)):u.count--,o===null?kg(c,e.type,e.stateNode):Dg(c,o,e.memoizedProps)):o===null&&e.stateNode!==null&&$c(e,e.memoizedProps,a.memoizedProps)}break;case 27:bt(t,e),xt(e),o&512&&(Qe||a===null||an(a,a.return)),a!==null&&o&4&&$c(e,e.memoizedProps,a.memoizedProps);break;case 5:if(bt(t,e),xt(e),o&512&&(Qe||a===null||an(a,a.return)),e.flags&32){c=e.stateNode;try{Ja(c,"")}catch(J){Me(e,e.return,J)}}o&4&&e.stateNode!=null&&(c=e.memoizedProps,$c(e,c,a!==null?a.memoizedProps:c)),o&1024&&(nu=!0);break;case 6:if(bt(t,e),xt(e),o&4){if(e.stateNode===null)throw Error(r(162));o=e.memoizedProps,a=e.stateNode;try{a.nodeValue=o}catch(J){Me(e,e.return,J)}}break;case 3:if(wr=null,c=Xt,Xt=br(t.containerInfo),bt(t,e),Xt=c,xt(e),o&4&&a!==null&&a.memoizedState.isDehydrated)try{Ri(t.containerInfo)}catch(J){Me(e,e.return,J)}nu&&(nu=!1,kp(e));break;case 4:o=Xt,Xt=br(e.stateNode.containerInfo),bt(t,e),xt(e),Xt=o;break;case 12:bt(t,e),xt(e);break;case 31:bt(t,e),xt(e),o&4&&(o=e.updateQueue,o!==null&&(e.updateQueue=null,sr(e,o)));break;case 13:bt(t,e),xt(e),e.child.flags&8192&&e.memoizedState!==null!=(a!==null&&a.memoizedState!==null)&&(rr=Tt()),o&4&&(o=e.updateQueue,o!==null&&(e.updateQueue=null,sr(e,o)));break;case 22:c=e.memoizedState!==null;var T=a!==null&&a.memoizedState!==null,j=Cn,_=Qe;if(Cn=j||c,Qe=_||T,bt(t,e),Qe=_,Cn=j,xt(e),o&8192)e:for(t=e.stateNode,t._visibility=c?t._visibility&-2:t._visibility|1,c&&(a===null||T||Cn||Qe||Ba(e)),a=null,t=e;;){if(t.tag===5||t.tag===26){if(a===null){T=a=t;try{if(u=T.stateNode,c)g=u.style,typeof g.setProperty=="function"?g.setProperty("display","none","important"):g.display="none";else{x=T.stateNode;var F=T.memoizedProps.style,B=F!=null&&F.hasOwnProperty("display")?F.display:null;x.style.display=B==null||typeof B=="boolean"?"":(""+B).trim()}}catch(J){Me(T,T.return,J)}}}else if(t.tag===6){if(a===null){T=t;try{T.stateNode.nodeValue=c?"":T.memoizedProps}catch(J){Me(T,T.return,J)}}}else if(t.tag===18){if(a===null){T=t;try{var P=T.stateNode;c?bg(P,!0):bg(T.stateNode,!1)}catch(J){Me(T,T.return,J)}}}else if((t.tag!==22&&t.tag!==23||t.memoizedState===null||t===e)&&t.child!==null){t.child.return=t,t=t.child;continue}if(t===e)break e;for(;t.sibling===null;){if(t.return===null||t.return===e)break e;a===t&&(a=null),t=t.return}a===t&&(a=null),t.sibling.return=t.return,t=t.sibling}o&4&&(o=e.updateQueue,o!==null&&(a=o.retryQueue,a!==null&&(o.retryQueue=null,sr(e,a))));break;case 19:bt(t,e),xt(e),o&4&&(o=e.updateQueue,o!==null&&(e.updateQueue=null,sr(e,o)));break;case 30:break;case 21:break;default:bt(t,e),xt(e)}}function xt(e){var t=e.flags;if(t&2){try{for(var a,o=e.return;o!==null;){if(wp(o)){a=o;break}o=o.return}if(a==null)throw Error(r(160));switch(a.tag){case 27:var c=a.stateNode,u=eu(e);ir(e,u,c);break;case 5:var g=a.stateNode;a.flags&32&&(Ja(g,""),a.flags&=-33);var x=eu(e);ir(e,x,g);break;case 3:case 4:var T=a.stateNode.containerInfo,j=eu(e);tu(e,j,T);break;default:throw Error(r(161))}}catch(_){Me(e,e.return,_)}e.flags&=-3}t&4096&&(e.flags&=-4097)}function kp(e){if(e.subtreeFlags&1024)for(e=e.child;e!==null;){var t=e;kp(t),t.tag===5&&t.flags&1024&&t.stateNode.reset(),e=e.sibling}}function En(e,t){if(t.subtreeFlags&8772)for(t=t.child;t!==null;)Cp(e,t.alternate,t),t=t.sibling}function Ba(e){for(e=e.child;e!==null;){var t=e;switch(t.tag){case 0:case 11:case 14:case 15:Qn(4,t,t.return),Ba(t);break;case 1:an(t,t.return);var a=t.stateNode;typeof a.componentWillUnmount=="function"&&bp(t,t.return,a),Ba(t);break;case 27:Bs(t.stateNode);case 26:case 5:an(t,t.return),Ba(t);break;case 22:t.memoizedState===null&&Ba(t);break;case 30:Ba(t);break;default:Ba(t)}e=e.sibling}}function Mn(e,t,a){for(a=a&&(t.subtreeFlags&8772)!==0,t=t.child;t!==null;){var o=t.alternate,c=e,u=t,g=u.flags;switch(u.tag){case 0:case 11:case 15:Mn(c,u,a),As(4,u);break;case 1:if(Mn(c,u,a),o=u,c=o.stateNode,typeof c.componentDidMount=="function")try{c.componentDidMount()}catch(j){Me(o,o.return,j)}if(o=u,c=o.updateQueue,c!==null){var x=o.stateNode;try{var T=c.shared.hiddenCallbacks;if(T!==null)for(c.shared.hiddenCallbacks=null,c=0;c<T.length;c++)rm(T[c],x)}catch(j){Me(o,o.return,j)}}a&&g&64&&vp(u),Es(u,u.return);break;case 27:Sp(u);case 26:case 5:Mn(c,u,a),a&&o===null&&g&4&&xp(u),Es(u,u.return);break;case 12:Mn(c,u,a);break;case 31:Mn(c,u,a),a&&g&4&&Mp(c,u);break;case 13:Mn(c,u,a),a&&g&4&&Dp(c,u);break;case 22:u.memoizedState===null&&Mn(c,u,a),Es(u,u.return);break;case 30:break;default:Mn(c,u,a)}t=t.sibling}}function au(e,t){var a=null;e!==null&&e.memoizedState!==null&&e.memoizedState.cachePool!==null&&(a=e.memoizedState.cachePool.pool),e=null,t.memoizedState!==null&&t.memoizedState.cachePool!==null&&(e=t.memoizedState.cachePool.pool),e!==a&&(e!=null&&e.refCount++,a!=null&&fs(a))}function iu(e,t){e=null,t.alternate!==null&&(e=t.alternate.memoizedState.cache),t=t.memoizedState.cache,t!==e&&(t.refCount++,e!=null&&fs(e))}function Wt(e,t,a,o){if(t.subtreeFlags&10256)for(t=t.child;t!==null;)zp(e,t,a,o),t=t.sibling}function zp(e,t,a,o){var c=t.flags;switch(t.tag){case 0:case 11:case 15:Wt(e,t,a,o),c&2048&&As(9,t);break;case 1:Wt(e,t,a,o);break;case 3:Wt(e,t,a,o),c&2048&&(e=null,t.alternate!==null&&(e=t.alternate.memoizedState.cache),t=t.memoizedState.cache,t!==e&&(t.refCount++,e!=null&&fs(e)));break;case 12:if(c&2048){Wt(e,t,a,o),e=t.stateNode;try{var u=t.memoizedProps,g=u.id,x=u.onPostCommit;typeof x=="function"&&x(g,t.alternate===null?"mount":"update",e.passiveEffectDuration,-0)}catch(T){Me(t,t.return,T)}}else Wt(e,t,a,o);break;case 31:Wt(e,t,a,o);break;case 13:Wt(e,t,a,o);break;case 23:break;case 22:u=t.stateNode,g=t.alternate,t.memoizedState!==null?u._visibility&2?Wt(e,t,a,o):Ms(e,t):u._visibility&2?Wt(e,t,a,o):(u._visibility|=2,vi(e,t,a,o,(t.subtreeFlags&10256)!==0||!1)),c&2048&&au(g,t);break;case 24:Wt(e,t,a,o),c&2048&&iu(t.alternate,t);break;default:Wt(e,t,a,o)}}function vi(e,t,a,o,c){for(c=c&&((t.subtreeFlags&10256)!==0||!1),t=t.child;t!==null;){var u=e,g=t,x=a,T=o,j=g.flags;switch(g.tag){case 0:case 11:case 15:vi(u,g,x,T,c),As(8,g);break;case 23:break;case 22:var _=g.stateNode;g.memoizedState!==null?_._visibility&2?vi(u,g,x,T,c):Ms(u,g):(_._visibility|=2,vi(u,g,x,T,c)),c&&j&2048&&au(g.alternate,g);break;case 24:vi(u,g,x,T,c),c&&j&2048&&iu(g.alternate,g);break;default:vi(u,g,x,T,c)}t=t.sibling}}function Ms(e,t){if(t.subtreeFlags&10256)for(t=t.child;t!==null;){var a=e,o=t,c=o.flags;switch(o.tag){case 22:Ms(a,o),c&2048&&au(o.alternate,o);break;case 24:Ms(a,o),c&2048&&iu(o.alternate,o);break;default:Ms(a,o)}t=t.sibling}}var Ds=8192;function bi(e,t,a){if(e.subtreeFlags&Ds)for(e=e.child;e!==null;)Np(e,t,a),e=e.sibling}function Np(e,t,a){switch(e.tag){case 26:bi(e,t,a),e.flags&Ds&&e.memoizedState!==null&&aS(a,Xt,e.memoizedState,e.memoizedProps);break;case 5:bi(e,t,a);break;case 3:case 4:var o=Xt;Xt=br(e.stateNode.containerInfo),bi(e,t,a),Xt=o;break;case 22:e.memoizedState===null&&(o=e.alternate,o!==null&&o.memoizedState!==null?(o=Ds,Ds=16777216,bi(e,t,a),Ds=o):bi(e,t,a));break;default:bi(e,t,a)}}function jp(e){var t=e.alternate;if(t!==null&&(e=t.child,e!==null)){t.child=null;do t=e.sibling,e.sibling=null,e=t;while(e!==null)}}function Rs(e){var t=e.deletions;if((e.flags&16)!==0){if(t!==null)for(var a=0;a<t.length;a++){var o=t[a];at=o,Bp(o,e)}jp(e)}if(e.subtreeFlags&10256)for(e=e.child;e!==null;)Op(e),e=e.sibling}function Op(e){switch(e.tag){case 0:case 11:case 15:Rs(e),e.flags&2048&&Qn(9,e,e.return);break;case 3:Rs(e);break;case 12:Rs(e);break;case 22:var t=e.stateNode;e.memoizedState!==null&&t._visibility&2&&(e.return===null||e.return.tag!==13)?(t._visibility&=-3,or(e)):Rs(e);break;default:Rs(e)}}function or(e){var t=e.deletions;if((e.flags&16)!==0){if(t!==null)for(var a=0;a<t.length;a++){var o=t[a];at=o,Bp(o,e)}jp(e)}for(e=e.child;e!==null;){switch(t=e,t.tag){case 0:case 11:case 15:Qn(8,t,t.return),or(t);break;case 22:a=t.stateNode,a._visibility&2&&(a._visibility&=-3,or(t));break;default:or(t)}e=e.sibling}}function Bp(e,t){for(;at!==null;){var a=at;switch(a.tag){case 0:case 11:case 15:Qn(8,a,t);break;case 23:case 22:if(a.memoizedState!==null&&a.memoizedState.cachePool!==null){var o=a.memoizedState.cachePool.pool;o!=null&&o.refCount++}break;case 24:fs(a.memoizedState.cache)}if(o=a.child,o!==null)o.return=a,at=o;else e:for(a=e;at!==null;){o=at;var c=o.sibling,u=o.return;if(Ap(o),o===a){at=null;break e}if(c!==null){c.return=u,at=c;break e}at=u}}}var vw={getCacheForType:function(e){var t=ot(Ke),a=t.data.get(e);return a===void 0&&(a=e(),t.data.set(e,a)),a},cacheSignal:function(){return ot(Ke).controller.signal}},bw=typeof WeakMap=="function"?WeakMap:Map,Ce=0,ze=null,ge=null,ve=0,Ee=0,kt=null,Zn=!1,xi=!1,su=!1,Dn=0,Fe=0,Jn=0,La=0,ou=0,zt=0,wi=0,ks=null,wt=null,ru=!1,rr=0,Lp=0,lr=1/0,cr=null,$n=null,Je=0,ea=null,Si=null,Rn=0,lu=0,cu=null,Pp=null,zs=0,uu=null;function Nt(){return(Ce&2)!==0&&ve!==0?ve&-ve:V.T!==null?gu():$f()}function Vp(){if(zt===0)if((ve&536870912)===0||xe){var e=yo;yo<<=1,(yo&3932160)===0&&(yo=262144),zt=e}else zt=536870912;return e=Dt.current,e!==null&&(e.flags|=32),zt}function St(e,t,a){(e===ze&&(Ee===2||Ee===9)||e.cancelPendingCommit!==null)&&(Ti(e,0),ta(e,ve,zt,!1)),Ji(e,a),((Ce&2)===0||e!==ze)&&(e===ze&&((Ce&2)===0&&(La|=a),Fe===4&&ta(e,ve,zt,!1)),sn(e))}function _p(e,t,a){if((Ce&6)!==0)throw Error(r(327));var o=!a&&(t&127)===0&&(t&e.expiredLanes)===0||Zi(e,t),c=o?Sw(e,t):fu(e,t,!0),u=o;do{if(c===0){xi&&!o&&ta(e,t,0,!1);break}else{if(a=e.current.alternate,u&&!xw(a)){c=fu(e,t,!1),u=!1;continue}if(c===2){if(u=t,e.errorRecoveryDisabledLanes&u)var g=0;else g=e.pendingLanes&-536870913,g=g!==0?g:g&536870912?536870912:0;if(g!==0){t=g;e:{var x=e;c=ks;var T=x.current.memoizedState.isDehydrated;if(T&&(Ti(x,g).flags|=256),g=fu(x,g,!1),g!==2){if(su&&!T){x.errorRecoveryDisabledLanes|=u,La|=u,c=4;break e}u=wt,wt=c,u!==null&&(wt===null?wt=u:wt.push.apply(wt,u))}c=g}if(u=!1,c!==2)continue}}if(c===1){Ti(e,0),ta(e,t,0,!0);break}e:{switch(o=e,u=c,u){case 0:case 1:throw Error(r(345));case 4:if((t&4194048)!==t)break;case 6:ta(o,t,zt,!Zn);break e;case 2:wt=null;break;case 3:case 5:break;default:throw Error(r(329))}if((t&62914560)===t&&(c=rr+300-Tt(),10<c)){if(ta(o,t,zt,!Zn),bo(o,0,!0)!==0)break e;Rn=t,o.timeoutHandle=gg(Up.bind(null,o,a,wt,cr,ru,t,zt,La,wi,Zn,u,"Throttled",-0,0),c);break e}Up(o,a,wt,cr,ru,t,zt,La,wi,Zn,u,null,-0,0)}}break}while(!0);sn(e)}function Up(e,t,a,o,c,u,g,x,T,j,_,F,B,P){if(e.timeoutHandle=-1,F=t.subtreeFlags,F&8192||(F&16785408)===16785408){F={stylesheets:null,count:0,imgCount:0,imgBytes:0,suspenseyImages:[],waitingForImages:!0,waitingForViewTransition:!1,unsuspend:mn},Np(t,u,F);var J=(u&62914560)===u?rr-Tt():(u&4194048)===u?Lp-Tt():0;if(J=iS(F,J),J!==null){Rn=u,e.cancelPendingCommit=J(Xp.bind(null,e,t,u,a,o,c,g,x,T,_,F,null,B,P)),ta(e,u,g,!j);return}}Xp(e,t,u,a,o,c,g,x,T)}function xw(e){for(var t=e;;){var a=t.tag;if((a===0||a===11||a===15)&&t.flags&16384&&(a=t.updateQueue,a!==null&&(a=a.stores,a!==null)))for(var o=0;o<a.length;o++){var c=a[o],u=c.getSnapshot;c=c.value;try{if(!Et(u(),c))return!1}catch{return!1}}if(a=t.child,t.subtreeFlags&16384&&a!==null)a.return=t,t=a;else{if(t===e)break;for(;t.sibling===null;){if(t.return===null||t.return===e)return!0;t=t.return}t.sibling.return=t.return,t=t.sibling}}return!0}function ta(e,t,a,o){t&=~ou,t&=~La,e.suspendedLanes|=t,e.pingedLanes&=~t,o&&(e.warmLanes|=t),o=e.expirationTimes;for(var c=t;0<c;){var u=31-At(c),g=1<<u;o[u]=-1,c&=~g}a!==0&&Qf(e,a,t)}function ur(){return(Ce&6)===0?(Ns(0),!1):!0}function du(){if(ge!==null){if(Ee===0)var e=ge.return;else e=ge,vn=Ma=null,Mc(e),hi=null,ms=0,e=ge;for(;e!==null;)yp(e.alternate,e),e=e.return;ge=null}}function Ti(e,t){var a=e.timeoutHandle;a!==-1&&(e.timeoutHandle=-1,Uw(a)),a=e.cancelPendingCommit,a!==null&&(e.cancelPendingCommit=null,a()),Rn=0,du(),ze=e,ge=a=gn(e.current,null),ve=t,Ee=0,kt=null,Zn=!1,xi=Zi(e,t),su=!1,wi=zt=ou=La=Jn=Fe=0,wt=ks=null,ru=!1,(t&8)!==0&&(t|=t&32);var o=e.entangledLanes;if(o!==0)for(e=e.entanglements,o&=t;0<o;){var c=31-At(o),u=1<<c;t|=e[c],o&=~u}return Dn=t,zo(),a}function qp(e,t){ce=null,V.H=Ss,t===fi||t===_o?(t=am(),Ee=3):t===pc?(t=am(),Ee=4):Ee=t===Hc?8:t!==null&&typeof t=="object"&&typeof t.then=="function"?6:1,kt=t,ge===null&&(Fe=1,$o(e,Pt(t,e.current)))}function Fp(){var e=Dt.current;return e===null?!0:(ve&4194048)===ve?qt===null:(ve&62914560)===ve||(ve&536870912)!==0?e===qt:!1}function Hp(){var e=V.H;return V.H=Ss,e===null?Ss:e}function Ip(){var e=V.A;return V.A=vw,e}function dr(){Fe=4,Zn||(ve&4194048)!==ve&&Dt.current!==null||(xi=!0),(Jn&134217727)===0&&(La&134217727)===0||ze===null||ta(ze,ve,zt,!1)}function fu(e,t,a){var o=Ce;Ce|=2;var c=Hp(),u=Ip();(ze!==e||ve!==t)&&(cr=null,Ti(e,t)),t=!1;var g=Fe;e:do try{if(Ee!==0&&ge!==null){var x=ge,T=kt;switch(Ee){case 8:du(),g=6;break e;case 3:case 2:case 9:case 6:Dt.current===null&&(t=!0);var j=Ee;if(Ee=0,kt=null,Ci(e,x,T,j),a&&xi){g=0;break e}break;default:j=Ee,Ee=0,kt=null,Ci(e,x,T,j)}}ww(),g=Fe;break}catch(_){qp(e,_)}while(!0);return t&&e.shellSuspendCounter++,vn=Ma=null,Ce=o,V.H=c,V.A=u,ge===null&&(ze=null,ve=0,zo()),g}function ww(){for(;ge!==null;)Gp(ge)}function Sw(e,t){var a=Ce;Ce|=2;var o=Hp(),c=Ip();ze!==e||ve!==t?(cr=null,lr=Tt()+500,Ti(e,t)):xi=Zi(e,t);e:do try{if(Ee!==0&&ge!==null){t=ge;var u=kt;t:switch(Ee){case 1:Ee=0,kt=null,Ci(e,t,u,1);break;case 2:case 9:if(tm(u)){Ee=0,kt=null,Yp(t);break}t=function(){Ee!==2&&Ee!==9||ze!==e||(Ee=7),sn(e)},u.then(t,t);break e;case 3:Ee=7;break e;case 4:Ee=5;break e;case 7:tm(u)?(Ee=0,kt=null,Yp(t)):(Ee=0,kt=null,Ci(e,t,u,7));break;case 5:var g=null;switch(ge.tag){case 26:g=ge.memoizedState;case 5:case 27:var x=ge;if(g?zg(g):x.stateNode.complete){Ee=0,kt=null;var T=x.sibling;if(T!==null)ge=T;else{var j=x.return;j!==null?(ge=j,fr(j)):ge=null}break t}}Ee=0,kt=null,Ci(e,t,u,5);break;case 6:Ee=0,kt=null,Ci(e,t,u,6);break;case 8:du(),Fe=6;break e;default:throw Error(r(462))}}Tw();break}catch(_){qp(e,_)}while(!0);return vn=Ma=null,V.H=o,V.A=c,Ce=a,ge!==null?0:(ze=null,ve=0,zo(),Fe)}function Tw(){for(;ge!==null&&!Y0();)Gp(ge)}function Gp(e){var t=pp(e.alternate,e,Dn);e.memoizedProps=e.pendingProps,t===null?fr(e):ge=t}function Yp(e){var t=e,a=t.alternate;switch(t.tag){case 15:case 0:t=cp(a,t,t.pendingProps,t.type,void 0,ve);break;case 11:t=cp(a,t,t.pendingProps,t.type.render,t.ref,ve);break;case 5:Mc(t);default:yp(a,t),t=ge=Ih(t,Dn),t=pp(a,t,Dn)}e.memoizedProps=e.pendingProps,t===null?fr(e):ge=t}function Ci(e,t,a,o){vn=Ma=null,Mc(t),hi=null,ms=0;var c=t.return;try{if(dw(e,c,t,a,ve)){Fe=1,$o(e,Pt(a,e.current)),ge=null;return}}catch(u){if(c!==null)throw ge=c,u;Fe=1,$o(e,Pt(a,e.current)),ge=null;return}t.flags&32768?(xe||o===1?e=!0:xi||(ve&536870912)!==0?e=!1:(Zn=e=!0,(o===2||o===9||o===3||o===6)&&(o=Dt.current,o!==null&&o.tag===13&&(o.flags|=16384))),Kp(t,e)):fr(t)}function fr(e){var t=e;do{if((t.flags&32768)!==0){Kp(t,Zn);return}e=t.return;var a=mw(t.alternate,t,Dn);if(a!==null){ge=a;return}if(t=t.sibling,t!==null){ge=t;return}ge=t=e}while(t!==null);Fe===0&&(Fe=5)}function Kp(e,t){do{var a=pw(e.alternate,e);if(a!==null){a.flags&=32767,ge=a;return}if(a=e.return,a!==null&&(a.flags|=32768,a.subtreeFlags=0,a.deletions=null),!t&&(e=e.sibling,e!==null)){ge=e;return}ge=e=a}while(e!==null);Fe=6,ge=null}function Xp(e,t,a,o,c,u,g,x,T){e.cancelPendingCommit=null;do hr();while(Je!==0);if((Ce&6)!==0)throw Error(r(327));if(t!==null){if(t===e.current)throw Error(r(177));if(u=t.lanes|t.childLanes,u|=ec,n1(e,a,u,g,x,T),e===ze&&(ge=ze=null,ve=0),Si=t,ea=e,Rn=a,lu=u,cu=c,Pp=o,(t.subtreeFlags&10256)!==0||(t.flags&10256)!==0?(e.callbackNode=null,e.callbackPriority=0,Mw(po,function(){return $p(),null})):(e.callbackNode=null,e.callbackPriority=0),o=(t.flags&13878)!==0,(t.subtreeFlags&13878)!==0||o){o=V.T,V.T=null,c=Y.p,Y.p=2,g=Ce,Ce|=4;try{gw(e,t,a)}finally{Ce=g,Y.p=c,V.T=o}}Je=1,Wp(),Qp(),Zp()}}function Wp(){if(Je===1){Je=0;var e=ea,t=Si,a=(t.flags&13878)!==0;if((t.subtreeFlags&13878)!==0||a){a=V.T,V.T=null;var o=Y.p;Y.p=2;var c=Ce;Ce|=4;try{Rp(t,e);var u=Cu,g=Bh(e.containerInfo),x=u.focusedElem,T=u.selectionRange;if(g!==x&&x&&x.ownerDocument&&Oh(x.ownerDocument.documentElement,x)){if(T!==null&&Wl(x)){var j=T.start,_=T.end;if(_===void 0&&(_=j),"selectionStart"in x)x.selectionStart=j,x.selectionEnd=Math.min(_,x.value.length);else{var F=x.ownerDocument||document,B=F&&F.defaultView||window;if(B.getSelection){var P=B.getSelection(),J=x.textContent.length,ie=Math.min(T.start,J),ke=T.end===void 0?ie:Math.min(T.end,J);!P.extend&&ie>ke&&(g=ke,ke=ie,ie=g);var k=jh(x,ie),E=jh(x,ke);if(k&&E&&(P.rangeCount!==1||P.anchorNode!==k.node||P.anchorOffset!==k.offset||P.focusNode!==E.node||P.focusOffset!==E.offset)){var N=F.createRange();N.setStart(k.node,k.offset),P.removeAllRanges(),ie>ke?(P.addRange(N),P.extend(E.node,E.offset)):(N.setEnd(E.node,E.offset),P.addRange(N))}}}}for(F=[],P=x;P=P.parentNode;)P.nodeType===1&&F.push({element:P,left:P.scrollLeft,top:P.scrollTop});for(typeof x.focus=="function"&&x.focus(),x=0;x<F.length;x++){var U=F[x];U.element.scrollLeft=U.left,U.element.scrollTop=U.top}}Ar=!!Tu,Cu=Tu=null}finally{Ce=c,Y.p=o,V.T=a}}e.current=t,Je=2}}function Qp(){if(Je===2){Je=0;var e=ea,t=Si,a=(t.flags&8772)!==0;if((t.subtreeFlags&8772)!==0||a){a=V.T,V.T=null;var o=Y.p;Y.p=2;var c=Ce;Ce|=4;try{Cp(e,t.alternate,t)}finally{Ce=c,Y.p=o,V.T=a}}Je=3}}function Zp(){if(Je===4||Je===3){Je=0,K0();var e=ea,t=Si,a=Rn,o=Pp;(t.subtreeFlags&10256)!==0||(t.flags&10256)!==0?Je=5:(Je=0,Si=ea=null,Jp(e,e.pendingLanes));var c=e.pendingLanes;if(c===0&&($n=null),kl(a),t=t.stateNode,Ct&&typeof Ct.onCommitFiberRoot=="function")try{Ct.onCommitFiberRoot(Qi,t,void 0,(t.current.flags&128)===128)}catch{}if(o!==null){t=V.T,c=Y.p,Y.p=2,V.T=null;try{for(var u=e.onRecoverableError,g=0;g<o.length;g++){var x=o[g];u(x.value,{componentStack:x.stack})}}finally{V.T=t,Y.p=c}}(Rn&3)!==0&&hr(),sn(e),c=e.pendingLanes,(a&261930)!==0&&(c&42)!==0?e===uu?zs++:(zs=0,uu=e):zs=0,Ns(0)}}function Jp(e,t){(e.pooledCacheLanes&=t)===0&&(t=e.pooledCache,t!=null&&(e.pooledCache=null,fs(t)))}function hr(){return Wp(),Qp(),Zp(),$p()}function $p(){if(Je!==5)return!1;var e=ea,t=lu;lu=0;var a=kl(Rn),o=V.T,c=Y.p;try{Y.p=32>a?32:a,V.T=null,a=cu,cu=null;var u=ea,g=Rn;if(Je=0,Si=ea=null,Rn=0,(Ce&6)!==0)throw Error(r(331));var x=Ce;if(Ce|=4,Op(u.current),zp(u,u.current,g,a),Ce=x,Ns(0,!1),Ct&&typeof Ct.onPostCommitFiberRoot=="function")try{Ct.onPostCommitFiberRoot(Qi,u)}catch{}return!0}finally{Y.p=c,V.T=o,Jp(e,t)}}function eg(e,t,a){t=Pt(a,t),t=Fc(e.stateNode,t,2),e=Kn(e,t,2),e!==null&&(Ji(e,2),sn(e))}function Me(e,t,a){if(e.tag===3)eg(e,e,a);else for(;t!==null;){if(t.tag===3){eg(t,e,a);break}else if(t.tag===1){var o=t.stateNode;if(typeof t.type.getDerivedStateFromError=="function"||typeof o.componentDidCatch=="function"&&($n===null||!$n.has(o))){e=Pt(a,e),a=tp(2),o=Kn(t,a,2),o!==null&&(np(a,o,t,e),Ji(o,2),sn(o));break}}t=t.return}}function hu(e,t,a){var o=e.pingCache;if(o===null){o=e.pingCache=new bw;var c=new Set;o.set(t,c)}else c=o.get(t),c===void 0&&(c=new Set,o.set(t,c));c.has(a)||(su=!0,c.add(a),e=Cw.bind(null,e,t,a),t.then(e,e))}function Cw(e,t,a){var o=e.pingCache;o!==null&&o.delete(t),e.pingedLanes|=e.suspendedLanes&a,e.warmLanes&=~a,ze===e&&(ve&a)===a&&(Fe===4||Fe===3&&(ve&62914560)===ve&&300>Tt()-rr?(Ce&2)===0&&Ti(e,0):ou|=a,wi===ve&&(wi=0)),sn(e)}function tg(e,t){t===0&&(t=Wf()),e=Ca(e,t),e!==null&&(Ji(e,t),sn(e))}function Aw(e){var t=e.memoizedState,a=0;t!==null&&(a=t.retryLane),tg(e,a)}function Ew(e,t){var a=0;switch(e.tag){case 31:case 13:var o=e.stateNode,c=e.memoizedState;c!==null&&(a=c.retryLane);break;case 19:o=e.stateNode;break;case 22:o=e.stateNode._retryCache;break;default:throw Error(r(314))}o!==null&&o.delete(t),tg(e,a)}function Mw(e,t){return El(e,t)}var mr=null,Ai=null,mu=!1,pr=!1,pu=!1,na=0;function sn(e){e!==Ai&&e.next===null&&(Ai===null?mr=Ai=e:Ai=Ai.next=e),pr=!0,mu||(mu=!0,Rw())}function Ns(e,t){if(!pu&&pr){pu=!0;do for(var a=!1,o=mr;o!==null;){if(e!==0){var c=o.pendingLanes;if(c===0)var u=0;else{var g=o.suspendedLanes,x=o.pingedLanes;u=(1<<31-At(42|e)+1)-1,u&=c&~(g&~x),u=u&201326741?u&201326741|1:u?u|2:0}u!==0&&(a=!0,sg(o,u))}else u=ve,u=bo(o,o===ze?u:0,o.cancelPendingCommit!==null||o.timeoutHandle!==-1),(u&3)===0||Zi(o,u)||(a=!0,sg(o,u));o=o.next}while(a);pu=!1}}function Dw(){ng()}function ng(){pr=mu=!1;var e=0;na!==0&&_w()&&(e=na);for(var t=Tt(),a=null,o=mr;o!==null;){var c=o.next,u=ag(o,t);u===0?(o.next=null,a===null?mr=c:a.next=c,c===null&&(Ai=a)):(a=o,(e!==0||(u&3)!==0)&&(pr=!0)),o=c}Je!==0&&Je!==5||Ns(e),na!==0&&(na=0)}function ag(e,t){for(var a=e.suspendedLanes,o=e.pingedLanes,c=e.expirationTimes,u=e.pendingLanes&-62914561;0<u;){var g=31-At(u),x=1<<g,T=c[g];T===-1?((x&a)===0||(x&o)!==0)&&(c[g]=t1(x,t)):T<=t&&(e.expiredLanes|=x),u&=~x}if(t=ze,a=ve,a=bo(e,e===t?a:0,e.cancelPendingCommit!==null||e.timeoutHandle!==-1),o=e.callbackNode,a===0||e===t&&(Ee===2||Ee===9)||e.cancelPendingCommit!==null)return o!==null&&o!==null&&Ml(o),e.callbackNode=null,e.callbackPriority=0;if((a&3)===0||Zi(e,a)){if(t=a&-a,t===e.callbackPriority)return t;switch(o!==null&&Ml(o),kl(a)){case 2:case 8:a=Kf;break;case 32:a=po;break;case 268435456:a=Xf;break;default:a=po}return o=ig.bind(null,e),a=El(a,o),e.callbackPriority=t,e.callbackNode=a,t}return o!==null&&o!==null&&Ml(o),e.callbackPriority=2,e.callbackNode=null,2}function ig(e,t){if(Je!==0&&Je!==5)return e.callbackNode=null,e.callbackPriority=0,null;var a=e.callbackNode;if(hr()&&e.callbackNode!==a)return null;var o=ve;return o=bo(e,e===ze?o:0,e.cancelPendingCommit!==null||e.timeoutHandle!==-1),o===0?null:(_p(e,o,t),ag(e,Tt()),e.callbackNode!=null&&e.callbackNode===a?ig.bind(null,e):null)}function sg(e,t){if(hr())return null;_p(e,t,!0)}function Rw(){qw(function(){(Ce&6)!==0?El(Yf,Dw):ng()})}function gu(){if(na===0){var e=ui;e===0&&(e=go,go<<=1,(go&261888)===0&&(go=256)),na=e}return na}function og(e){return e==null||typeof e=="symbol"||typeof e=="boolean"?null:typeof e=="function"?e:To(""+e)}function rg(e,t){var a=t.ownerDocument.createElement("input");return a.name=t.name,a.value=t.value,e.id&&a.setAttribute("form",e.id),t.parentNode.insertBefore(a,t),e=new FormData(e),a.parentNode.removeChild(a),e}function kw(e,t,a,o,c){if(t==="submit"&&a&&a.stateNode===c){var u=og((c[gt]||null).action),g=o.submitter;g&&(t=(t=g[gt]||null)?og(t.formAction):g.getAttribute("formAction"),t!==null&&(u=t,g=null));var x=new Mo("action","action",null,o,c);e.push({event:x,listeners:[{instance:null,listener:function(){if(o.defaultPrevented){if(na!==0){var T=g?rg(c,g):new FormData(c);Lc(a,{pending:!0,data:T,method:c.method,action:u},null,T)}}else typeof u=="function"&&(x.preventDefault(),T=g?rg(c,g):new FormData(c),Lc(a,{pending:!0,data:T,method:c.method,action:u},u,T))},currentTarget:c}]})}}for(var yu=0;yu<$l.length;yu++){var vu=$l[yu],zw=vu.toLowerCase(),Nw=vu[0].toUpperCase()+vu.slice(1);Kt(zw,"on"+Nw)}Kt(Vh,"onAnimationEnd"),Kt(_h,"onAnimationIteration"),Kt(Uh,"onAnimationStart"),Kt("dblclick","onDoubleClick"),Kt("focusin","onFocus"),Kt("focusout","onBlur"),Kt(X1,"onTransitionRun"),Kt(W1,"onTransitionStart"),Kt(Q1,"onTransitionCancel"),Kt(qh,"onTransitionEnd"),Qa("onMouseEnter",["mouseout","mouseover"]),Qa("onMouseLeave",["mouseout","mouseover"]),Qa("onPointerEnter",["pointerout","pointerover"]),Qa("onPointerLeave",["pointerout","pointerover"]),xa("onChange","change click focusin focusout input keydown keyup selectionchange".split(" ")),xa("onSelect","focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" ")),xa("onBeforeInput",["compositionend","keypress","textInput","paste"]),xa("onCompositionEnd","compositionend focusout keydown keypress keyup mousedown".split(" ")),xa("onCompositionStart","compositionstart focusout keydown keypress keyup mousedown".split(" ")),xa("onCompositionUpdate","compositionupdate focusout keydown keypress keyup mousedown".split(" "));var js="abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),jw=new Set("beforetoggle cancel close invalid load scroll scrollend toggle".split(" ").concat(js));function lg(e,t){t=(t&4)!==0;for(var a=0;a<e.length;a++){var o=e[a],c=o.event;o=o.listeners;e:{var u=void 0;if(t)for(var g=o.length-1;0<=g;g--){var x=o[g],T=x.instance,j=x.currentTarget;if(x=x.listener,T!==u&&c.isPropagationStopped())break e;u=x,c.currentTarget=j;try{u(c)}catch(_){ko(_)}c.currentTarget=null,u=T}else for(g=0;g<o.length;g++){if(x=o[g],T=x.instance,j=x.currentTarget,x=x.listener,T!==u&&c.isPropagationStopped())break e;u=x,c.currentTarget=j;try{u(c)}catch(_){ko(_)}c.currentTarget=null,u=T}}}}function ye(e,t){var a=t[zl];a===void 0&&(a=t[zl]=new Set);var o=e+"__bubble";a.has(o)||(cg(t,e,2,!1),a.add(o))}function bu(e,t,a){var o=0;t&&(o|=4),cg(a,e,o,t)}var gr="_reactListening"+Math.random().toString(36).slice(2);function xu(e){if(!e[gr]){e[gr]=!0,nh.forEach(function(a){a!=="selectionchange"&&(jw.has(a)||bu(a,!1,e),bu(a,!0,e))});var t=e.nodeType===9?e:e.ownerDocument;t===null||t[gr]||(t[gr]=!0,bu("selectionchange",!1,t))}}function cg(e,t,a,o){switch(Vg(t)){case 2:var c=rS;break;case 8:c=lS;break;default:c=Bu}a=c.bind(null,t,a,e),c=void 0,!Ul||t!=="touchstart"&&t!=="touchmove"&&t!=="wheel"||(c=!0),o?c!==void 0?e.addEventListener(t,a,{capture:!0,passive:c}):e.addEventListener(t,a,!0):c!==void 0?e.addEventListener(t,a,{passive:c}):e.addEventListener(t,a,!1)}function wu(e,t,a,o,c){var u=o;if((t&1)===0&&(t&2)===0&&o!==null)e:for(;;){if(o===null)return;var g=o.tag;if(g===3||g===4){var x=o.stateNode.containerInfo;if(x===c)break;if(g===4)for(g=o.return;g!==null;){var T=g.tag;if((T===3||T===4)&&g.stateNode.containerInfo===c)return;g=g.return}for(;x!==null;){if(g=Ka(x),g===null)return;if(T=g.tag,T===5||T===6||T===26||T===27){o=u=g;continue e}x=x.parentNode}}o=o.return}mh(function(){var j=u,_=Vl(a),F=[];e:{var B=Fh.get(e);if(B!==void 0){var P=Mo,J=e;switch(e){case"keypress":if(Ao(a)===0)break e;case"keydown":case"keyup":P=E1;break;case"focusin":J="focus",P=Il;break;case"focusout":J="blur",P=Il;break;case"beforeblur":case"afterblur":P=Il;break;case"click":if(a.button===2)break e;case"auxclick":case"dblclick":case"mousedown":case"mousemove":case"mouseup":case"mouseout":case"mouseover":case"contextmenu":P=yh;break;case"drag":case"dragend":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"dragstart":case"drop":P=m1;break;case"touchcancel":case"touchend":case"touchmove":case"touchstart":P=R1;break;case Vh:case _h:case Uh:P=y1;break;case qh:P=z1;break;case"scroll":case"scrollend":P=f1;break;case"wheel":P=j1;break;case"copy":case"cut":case"paste":P=b1;break;case"gotpointercapture":case"lostpointercapture":case"pointercancel":case"pointerdown":case"pointermove":case"pointerout":case"pointerover":case"pointerup":P=bh;break;case"toggle":case"beforetoggle":P=B1}var ie=(t&4)!==0,ke=!ie&&(e==="scroll"||e==="scrollend"),k=ie?B!==null?B+"Capture":null:B;ie=[];for(var E=j,N;E!==null;){var U=E;if(N=U.stateNode,U=U.tag,U!==5&&U!==26&&U!==27||N===null||k===null||(U=ts(E,k),U!=null&&ie.push(Os(E,U,N))),ke)break;E=E.return}0<ie.length&&(B=new P(B,J,null,a,_),F.push({event:B,listeners:ie}))}}if((t&7)===0){e:{if(B=e==="mouseover"||e==="pointerover",P=e==="mouseout"||e==="pointerout",B&&a!==Pl&&(J=a.relatedTarget||a.fromElement)&&(Ka(J)||J[Ya]))break e;if((P||B)&&(B=_.window===_?_:(B=_.ownerDocument)?B.defaultView||B.parentWindow:window,P?(J=a.relatedTarget||a.toElement,P=j,J=J?Ka(J):null,J!==null&&(ke=d(J),ie=J.tag,J!==ke||ie!==5&&ie!==27&&ie!==6)&&(J=null)):(P=null,J=j),P!==J)){if(ie=yh,U="onMouseLeave",k="onMouseEnter",E="mouse",(e==="pointerout"||e==="pointerover")&&(ie=bh,U="onPointerLeave",k="onPointerEnter",E="pointer"),ke=P==null?B:es(P),N=J==null?B:es(J),B=new ie(U,E+"leave",P,a,_),B.target=ke,B.relatedTarget=N,U=null,Ka(_)===j&&(ie=new ie(k,E+"enter",J,a,_),ie.target=N,ie.relatedTarget=ke,U=ie),ke=U,P&&J)t:{for(ie=Ow,k=P,E=J,N=0,U=k;U;U=ie(U))N++;U=0;for(var ae=E;ae;ae=ie(ae))U++;for(;0<N-U;)k=ie(k),N--;for(;0<U-N;)E=ie(E),U--;for(;N--;){if(k===E||E!==null&&k===E.alternate){ie=k;break t}k=ie(k),E=ie(E)}ie=null}else ie=null;P!==null&&ug(F,B,P,ie,!1),J!==null&&ke!==null&&ug(F,ke,J,ie,!0)}}e:{if(B=j?es(j):window,P=B.nodeName&&B.nodeName.toLowerCase(),P==="select"||P==="input"&&B.type==="file")var Se=Mh;else if(Ah(B))if(Dh)Se=G1;else{Se=H1;var ne=F1}else P=B.nodeName,!P||P.toLowerCase()!=="input"||B.type!=="checkbox"&&B.type!=="radio"?j&&Ll(j.elementType)&&(Se=Mh):Se=I1;if(Se&&(Se=Se(e,j))){Eh(F,Se,a,_);break e}ne&&ne(e,B,j),e==="focusout"&&j&&B.type==="number"&&j.memoizedProps.value!=null&&Bl(B,"number",B.value)}switch(ne=j?es(j):window,e){case"focusin":(Ah(ne)||ne.contentEditable==="true")&&(ni=ne,Ql=j,cs=null);break;case"focusout":cs=Ql=ni=null;break;case"mousedown":Zl=!0;break;case"contextmenu":case"mouseup":case"dragend":Zl=!1,Lh(F,a,_);break;case"selectionchange":if(K1)break;case"keydown":case"keyup":Lh(F,a,_)}var de;if(Yl)e:{switch(e){case"compositionstart":var be="onCompositionStart";break e;case"compositionend":be="onCompositionEnd";break e;case"compositionupdate":be="onCompositionUpdate";break e}be=void 0}else ti?Th(e,a)&&(be="onCompositionEnd"):e==="keydown"&&a.keyCode===229&&(be="onCompositionStart");be&&(xh&&a.locale!=="ko"&&(ti||be!=="onCompositionStart"?be==="onCompositionEnd"&&ti&&(de=ph()):(Un=_,ql="value"in Un?Un.value:Un.textContent,ti=!0)),ne=yr(j,be),0<ne.length&&(be=new vh(be,e,null,a,_),F.push({event:be,listeners:ne}),de?be.data=de:(de=Ch(a),de!==null&&(be.data=de)))),(de=P1?V1(e,a):_1(e,a))&&(be=yr(j,"onBeforeInput"),0<be.length&&(ne=new vh("onBeforeInput","beforeinput",null,a,_),F.push({event:ne,listeners:be}),ne.data=de)),kw(F,e,j,a,_)}lg(F,t)})}function Os(e,t,a){return{instance:e,listener:t,currentTarget:a}}function yr(e,t){for(var a=t+"Capture",o=[];e!==null;){var c=e,u=c.stateNode;if(c=c.tag,c!==5&&c!==26&&c!==27||u===null||(c=ts(e,a),c!=null&&o.unshift(Os(e,c,u)),c=ts(e,t),c!=null&&o.push(Os(e,c,u))),e.tag===3)return o;e=e.return}return[]}function Ow(e){if(e===null)return null;do e=e.return;while(e&&e.tag!==5&&e.tag!==27);return e||null}function ug(e,t,a,o,c){for(var u=t._reactName,g=[];a!==null&&a!==o;){var x=a,T=x.alternate,j=x.stateNode;if(x=x.tag,T!==null&&T===o)break;x!==5&&x!==26&&x!==27||j===null||(T=j,c?(j=ts(a,u),j!=null&&g.unshift(Os(a,j,T))):c||(j=ts(a,u),j!=null&&g.push(Os(a,j,T)))),a=a.return}g.length!==0&&e.push({event:t,listeners:g})}var Bw=/\r\n?/g,Lw=/\u0000|\uFFFD/g;function dg(e){return(typeof e=="string"?e:""+e).replace(Bw,`
`).replace(Lw,"")}function fg(e,t){return t=dg(t),dg(e)===t}function Re(e,t,a,o,c,u){switch(a){case"children":typeof o=="string"?t==="body"||t==="textarea"&&o===""||Ja(e,o):(typeof o=="number"||typeof o=="bigint")&&t!=="body"&&Ja(e,""+o);break;case"className":wo(e,"class",o);break;case"tabIndex":wo(e,"tabindex",o);break;case"dir":case"role":case"viewBox":case"width":case"height":wo(e,a,o);break;case"style":fh(e,o,u);break;case"data":if(t!=="object"){wo(e,"data",o);break}case"src":case"href":if(o===""&&(t!=="a"||a!=="href")){e.removeAttribute(a);break}if(o==null||typeof o=="function"||typeof o=="symbol"||typeof o=="boolean"){e.removeAttribute(a);break}o=To(""+o),e.setAttribute(a,o);break;case"action":case"formAction":if(typeof o=="function"){e.setAttribute(a,"javascript:throw new Error('A React form was unexpectedly submitted. If you called form.submit() manually, consider using form.requestSubmit() instead. If you\\'re trying to use event.stopPropagation() in a submit event handler, consider also calling event.preventDefault().')");break}else typeof u=="function"&&(a==="formAction"?(t!=="input"&&Re(e,t,"name",c.name,c,null),Re(e,t,"formEncType",c.formEncType,c,null),Re(e,t,"formMethod",c.formMethod,c,null),Re(e,t,"formTarget",c.formTarget,c,null)):(Re(e,t,"encType",c.encType,c,null),Re(e,t,"method",c.method,c,null),Re(e,t,"target",c.target,c,null)));if(o==null||typeof o=="symbol"||typeof o=="boolean"){e.removeAttribute(a);break}o=To(""+o),e.setAttribute(a,o);break;case"onClick":o!=null&&(e.onclick=mn);break;case"onScroll":o!=null&&ye("scroll",e);break;case"onScrollEnd":o!=null&&ye("scrollend",e);break;case"dangerouslySetInnerHTML":if(o!=null){if(typeof o!="object"||!("__html"in o))throw Error(r(61));if(a=o.__html,a!=null){if(c.children!=null)throw Error(r(60));e.innerHTML=a}}break;case"multiple":e.multiple=o&&typeof o!="function"&&typeof o!="symbol";break;case"muted":e.muted=o&&typeof o!="function"&&typeof o!="symbol";break;case"suppressContentEditableWarning":case"suppressHydrationWarning":case"defaultValue":case"defaultChecked":case"innerHTML":case"ref":break;case"autoFocus":break;case"xlinkHref":if(o==null||typeof o=="function"||typeof o=="boolean"||typeof o=="symbol"){e.removeAttribute("xlink:href");break}a=To(""+o),e.setAttributeNS("http://www.w3.org/1999/xlink","xlink:href",a);break;case"contentEditable":case"spellCheck":case"draggable":case"value":case"autoReverse":case"externalResourcesRequired":case"focusable":case"preserveAlpha":o!=null&&typeof o!="function"&&typeof o!="symbol"?e.setAttribute(a,""+o):e.removeAttribute(a);break;case"inert":case"allowFullScreen":case"async":case"autoPlay":case"controls":case"default":case"defer":case"disabled":case"disablePictureInPicture":case"disableRemotePlayback":case"formNoValidate":case"hidden":case"loop":case"noModule":case"noValidate":case"open":case"playsInline":case"readOnly":case"required":case"reversed":case"scoped":case"seamless":case"itemScope":o&&typeof o!="function"&&typeof o!="symbol"?e.setAttribute(a,""):e.removeAttribute(a);break;case"capture":case"download":o===!0?e.setAttribute(a,""):o!==!1&&o!=null&&typeof o!="function"&&typeof o!="symbol"?e.setAttribute(a,o):e.removeAttribute(a);break;case"cols":case"rows":case"size":case"span":o!=null&&typeof o!="function"&&typeof o!="symbol"&&!isNaN(o)&&1<=o?e.setAttribute(a,o):e.removeAttribute(a);break;case"rowSpan":case"start":o==null||typeof o=="function"||typeof o=="symbol"||isNaN(o)?e.removeAttribute(a):e.setAttribute(a,o);break;case"popover":ye("beforetoggle",e),ye("toggle",e),xo(e,"popover",o);break;case"xlinkActuate":hn(e,"http://www.w3.org/1999/xlink","xlink:actuate",o);break;case"xlinkArcrole":hn(e,"http://www.w3.org/1999/xlink","xlink:arcrole",o);break;case"xlinkRole":hn(e,"http://www.w3.org/1999/xlink","xlink:role",o);break;case"xlinkShow":hn(e,"http://www.w3.org/1999/xlink","xlink:show",o);break;case"xlinkTitle":hn(e,"http://www.w3.org/1999/xlink","xlink:title",o);break;case"xlinkType":hn(e,"http://www.w3.org/1999/xlink","xlink:type",o);break;case"xmlBase":hn(e,"http://www.w3.org/XML/1998/namespace","xml:base",o);break;case"xmlLang":hn(e,"http://www.w3.org/XML/1998/namespace","xml:lang",o);break;case"xmlSpace":hn(e,"http://www.w3.org/XML/1998/namespace","xml:space",o);break;case"is":xo(e,"is",o);break;case"innerText":case"textContent":break;default:(!(2<a.length)||a[0]!=="o"&&a[0]!=="O"||a[1]!=="n"&&a[1]!=="N")&&(a=u1.get(a)||a,xo(e,a,o))}}function Su(e,t,a,o,c,u){switch(a){case"style":fh(e,o,u);break;case"dangerouslySetInnerHTML":if(o!=null){if(typeof o!="object"||!("__html"in o))throw Error(r(61));if(a=o.__html,a!=null){if(c.children!=null)throw Error(r(60));e.innerHTML=a}}break;case"children":typeof o=="string"?Ja(e,o):(typeof o=="number"||typeof o=="bigint")&&Ja(e,""+o);break;case"onScroll":o!=null&&ye("scroll",e);break;case"onScrollEnd":o!=null&&ye("scrollend",e);break;case"onClick":o!=null&&(e.onclick=mn);break;case"suppressContentEditableWarning":case"suppressHydrationWarning":case"innerHTML":case"ref":break;case"innerText":case"textContent":break;default:if(!ah.hasOwnProperty(a))e:{if(a[0]==="o"&&a[1]==="n"&&(c=a.endsWith("Capture"),t=a.slice(2,c?a.length-7:void 0),u=e[gt]||null,u=u!=null?u[a]:null,typeof u=="function"&&e.removeEventListener(t,u,c),typeof o=="function")){typeof u!="function"&&u!==null&&(a in e?e[a]=null:e.hasAttribute(a)&&e.removeAttribute(a)),e.addEventListener(t,o,c);break e}a in e?e[a]=o:o===!0?e.setAttribute(a,""):xo(e,a,o)}}}function lt(e,t,a){switch(t){case"div":case"span":case"svg":case"path":case"a":case"g":case"p":case"li":break;case"img":ye("error",e),ye("load",e);var o=!1,c=!1,u;for(u in a)if(a.hasOwnProperty(u)){var g=a[u];if(g!=null)switch(u){case"src":o=!0;break;case"srcSet":c=!0;break;case"children":case"dangerouslySetInnerHTML":throw Error(r(137,t));default:Re(e,t,u,g,a,null)}}c&&Re(e,t,"srcSet",a.srcSet,a,null),o&&Re(e,t,"src",a.src,a,null);return;case"input":ye("invalid",e);var x=u=g=c=null,T=null,j=null;for(o in a)if(a.hasOwnProperty(o)){var _=a[o];if(_!=null)switch(o){case"name":c=_;break;case"type":g=_;break;case"checked":T=_;break;case"defaultChecked":j=_;break;case"value":u=_;break;case"defaultValue":x=_;break;case"children":case"dangerouslySetInnerHTML":if(_!=null)throw Error(r(137,t));break;default:Re(e,t,o,_,a,null)}}lh(e,u,x,T,j,g,c,!1);return;case"select":ye("invalid",e),o=g=u=null;for(c in a)if(a.hasOwnProperty(c)&&(x=a[c],x!=null))switch(c){case"value":u=x;break;case"defaultValue":g=x;break;case"multiple":o=x;default:Re(e,t,c,x,a,null)}t=u,a=g,e.multiple=!!o,t!=null?Za(e,!!o,t,!1):a!=null&&Za(e,!!o,a,!0);return;case"textarea":ye("invalid",e),u=c=o=null;for(g in a)if(a.hasOwnProperty(g)&&(x=a[g],x!=null))switch(g){case"value":o=x;break;case"defaultValue":c=x;break;case"children":u=x;break;case"dangerouslySetInnerHTML":if(x!=null)throw Error(r(91));break;default:Re(e,t,g,x,a,null)}uh(e,o,c,u);return;case"option":for(T in a)a.hasOwnProperty(T)&&(o=a[T],o!=null)&&(T==="selected"?e.selected=o&&typeof o!="function"&&typeof o!="symbol":Re(e,t,T,o,a,null));return;case"dialog":ye("beforetoggle",e),ye("toggle",e),ye("cancel",e),ye("close",e);break;case"iframe":case"object":ye("load",e);break;case"video":case"audio":for(o=0;o<js.length;o++)ye(js[o],e);break;case"image":ye("error",e),ye("load",e);break;case"details":ye("toggle",e);break;case"embed":case"source":case"link":ye("error",e),ye("load",e);case"area":case"base":case"br":case"col":case"hr":case"keygen":case"meta":case"param":case"track":case"wbr":case"menuitem":for(j in a)if(a.hasOwnProperty(j)&&(o=a[j],o!=null))switch(j){case"children":case"dangerouslySetInnerHTML":throw Error(r(137,t));default:Re(e,t,j,o,a,null)}return;default:if(Ll(t)){for(_ in a)a.hasOwnProperty(_)&&(o=a[_],o!==void 0&&Su(e,t,_,o,a,void 0));return}}for(x in a)a.hasOwnProperty(x)&&(o=a[x],o!=null&&Re(e,t,x,o,a,null))}function Pw(e,t,a,o){switch(t){case"div":case"span":case"svg":case"path":case"a":case"g":case"p":case"li":break;case"input":var c=null,u=null,g=null,x=null,T=null,j=null,_=null;for(P in a){var F=a[P];if(a.hasOwnProperty(P)&&F!=null)switch(P){case"checked":break;case"value":break;case"defaultValue":T=F;default:o.hasOwnProperty(P)||Re(e,t,P,null,o,F)}}for(var B in o){var P=o[B];if(F=a[B],o.hasOwnProperty(B)&&(P!=null||F!=null))switch(B){case"type":u=P;break;case"name":c=P;break;case"checked":j=P;break;case"defaultChecked":_=P;break;case"value":g=P;break;case"defaultValue":x=P;break;case"children":case"dangerouslySetInnerHTML":if(P!=null)throw Error(r(137,t));break;default:P!==F&&Re(e,t,B,P,o,F)}}Ol(e,g,x,T,j,_,u,c);return;case"select":P=g=x=B=null;for(u in a)if(T=a[u],a.hasOwnProperty(u)&&T!=null)switch(u){case"value":break;case"multiple":P=T;default:o.hasOwnProperty(u)||Re(e,t,u,null,o,T)}for(c in o)if(u=o[c],T=a[c],o.hasOwnProperty(c)&&(u!=null||T!=null))switch(c){case"value":B=u;break;case"defaultValue":x=u;break;case"multiple":g=u;default:u!==T&&Re(e,t,c,u,o,T)}t=x,a=g,o=P,B!=null?Za(e,!!a,B,!1):!!o!=!!a&&(t!=null?Za(e,!!a,t,!0):Za(e,!!a,a?[]:"",!1));return;case"textarea":P=B=null;for(x in a)if(c=a[x],a.hasOwnProperty(x)&&c!=null&&!o.hasOwnProperty(x))switch(x){case"value":break;case"children":break;default:Re(e,t,x,null,o,c)}for(g in o)if(c=o[g],u=a[g],o.hasOwnProperty(g)&&(c!=null||u!=null))switch(g){case"value":B=c;break;case"defaultValue":P=c;break;case"children":break;case"dangerouslySetInnerHTML":if(c!=null)throw Error(r(91));break;default:c!==u&&Re(e,t,g,c,o,u)}ch(e,B,P);return;case"option":for(var J in a)B=a[J],a.hasOwnProperty(J)&&B!=null&&!o.hasOwnProperty(J)&&(J==="selected"?e.selected=!1:Re(e,t,J,null,o,B));for(T in o)B=o[T],P=a[T],o.hasOwnProperty(T)&&B!==P&&(B!=null||P!=null)&&(T==="selected"?e.selected=B&&typeof B!="function"&&typeof B!="symbol":Re(e,t,T,B,o,P));return;case"img":case"link":case"area":case"base":case"br":case"col":case"embed":case"hr":case"keygen":case"meta":case"param":case"source":case"track":case"wbr":case"menuitem":for(var ie in a)B=a[ie],a.hasOwnProperty(ie)&&B!=null&&!o.hasOwnProperty(ie)&&Re(e,t,ie,null,o,B);for(j in o)if(B=o[j],P=a[j],o.hasOwnProperty(j)&&B!==P&&(B!=null||P!=null))switch(j){case"children":case"dangerouslySetInnerHTML":if(B!=null)throw Error(r(137,t));break;default:Re(e,t,j,B,o,P)}return;default:if(Ll(t)){for(var ke in a)B=a[ke],a.hasOwnProperty(ke)&&B!==void 0&&!o.hasOwnProperty(ke)&&Su(e,t,ke,void 0,o,B);for(_ in o)B=o[_],P=a[_],!o.hasOwnProperty(_)||B===P||B===void 0&&P===void 0||Su(e,t,_,B,o,P);return}}for(var k in a)B=a[k],a.hasOwnProperty(k)&&B!=null&&!o.hasOwnProperty(k)&&Re(e,t,k,null,o,B);for(F in o)B=o[F],P=a[F],!o.hasOwnProperty(F)||B===P||B==null&&P==null||Re(e,t,F,B,o,P)}function hg(e){switch(e){case"css":case"script":case"font":case"img":case"image":case"input":case"link":return!0;default:return!1}}function Vw(){if(typeof performance.getEntriesByType=="function"){for(var e=0,t=0,a=performance.getEntriesByType("resource"),o=0;o<a.length;o++){var c=a[o],u=c.transferSize,g=c.initiatorType,x=c.duration;if(u&&x&&hg(g)){for(g=0,x=c.responseEnd,o+=1;o<a.length;o++){var T=a[o],j=T.startTime;if(j>x)break;var _=T.transferSize,F=T.initiatorType;_&&hg(F)&&(T=T.responseEnd,g+=_*(T<x?1:(x-j)/(T-j)))}if(--o,t+=8*(u+g)/(c.duration/1e3),e++,10<e)break}}if(0<e)return t/e/1e6}return navigator.connection&&(e=navigator.connection.downlink,typeof e=="number")?e:5}var Tu=null,Cu=null;function vr(e){return e.nodeType===9?e:e.ownerDocument}function mg(e){switch(e){case"http://www.w3.org/2000/svg":return 1;case"http://www.w3.org/1998/Math/MathML":return 2;default:return 0}}function pg(e,t){if(e===0)switch(t){case"svg":return 1;case"math":return 2;default:return 0}return e===1&&t==="foreignObject"?0:e}function Au(e,t){return e==="textarea"||e==="noscript"||typeof t.children=="string"||typeof t.children=="number"||typeof t.children=="bigint"||typeof t.dangerouslySetInnerHTML=="object"&&t.dangerouslySetInnerHTML!==null&&t.dangerouslySetInnerHTML.__html!=null}var Eu=null;function _w(){var e=window.event;return e&&e.type==="popstate"?e===Eu?!1:(Eu=e,!0):(Eu=null,!1)}var gg=typeof setTimeout=="function"?setTimeout:void 0,Uw=typeof clearTimeout=="function"?clearTimeout:void 0,yg=typeof Promise=="function"?Promise:void 0,qw=typeof queueMicrotask=="function"?queueMicrotask:typeof yg<"u"?function(e){return yg.resolve(null).then(e).catch(Fw)}:gg;function Fw(e){setTimeout(function(){throw e})}function aa(e){return e==="head"}function vg(e,t){var a=t,o=0;do{var c=a.nextSibling;if(e.removeChild(a),c&&c.nodeType===8)if(a=c.data,a==="/$"||a==="/&"){if(o===0){e.removeChild(c),Ri(t);return}o--}else if(a==="$"||a==="$?"||a==="$~"||a==="$!"||a==="&")o++;else if(a==="html")Bs(e.ownerDocument.documentElement);else if(a==="head"){a=e.ownerDocument.head,Bs(a);for(var u=a.firstChild;u;){var g=u.nextSibling,x=u.nodeName;u[$i]||x==="SCRIPT"||x==="STYLE"||x==="LINK"&&u.rel.toLowerCase()==="stylesheet"||a.removeChild(u),u=g}}else a==="body"&&Bs(e.ownerDocument.body);a=c}while(a);Ri(t)}function bg(e,t){var a=e;e=0;do{var o=a.nextSibling;if(a.nodeType===1?t?(a._stashedDisplay=a.style.display,a.style.display="none"):(a.style.display=a._stashedDisplay||"",a.getAttribute("style")===""&&a.removeAttribute("style")):a.nodeType===3&&(t?(a._stashedText=a.nodeValue,a.nodeValue=""):a.nodeValue=a._stashedText||""),o&&o.nodeType===8)if(a=o.data,a==="/$"){if(e===0)break;e--}else a!=="$"&&a!=="$?"&&a!=="$~"&&a!=="$!"||e++;a=o}while(a)}function Mu(e){var t=e.firstChild;for(t&&t.nodeType===10&&(t=t.nextSibling);t;){var a=t;switch(t=t.nextSibling,a.nodeName){case"HTML":case"HEAD":case"BODY":Mu(a),Nl(a);continue;case"SCRIPT":case"STYLE":continue;case"LINK":if(a.rel.toLowerCase()==="stylesheet")continue}e.removeChild(a)}}function Hw(e,t,a,o){for(;e.nodeType===1;){var c=a;if(e.nodeName.toLowerCase()!==t.toLowerCase()){if(!o&&(e.nodeName!=="INPUT"||e.type!=="hidden"))break}else if(o){if(!e[$i])switch(t){case"meta":if(!e.hasAttribute("itemprop"))break;return e;case"link":if(u=e.getAttribute("rel"),u==="stylesheet"&&e.hasAttribute("data-precedence"))break;if(u!==c.rel||e.getAttribute("href")!==(c.href==null||c.href===""?null:c.href)||e.getAttribute("crossorigin")!==(c.crossOrigin==null?null:c.crossOrigin)||e.getAttribute("title")!==(c.title==null?null:c.title))break;return e;case"style":if(e.hasAttribute("data-precedence"))break;return e;case"script":if(u=e.getAttribute("src"),(u!==(c.src==null?null:c.src)||e.getAttribute("type")!==(c.type==null?null:c.type)||e.getAttribute("crossorigin")!==(c.crossOrigin==null?null:c.crossOrigin))&&u&&e.hasAttribute("async")&&!e.hasAttribute("itemprop"))break;return e;default:return e}}else if(t==="input"&&e.type==="hidden"){var u=c.name==null?null:""+c.name;if(c.type==="hidden"&&e.getAttribute("name")===u)return e}else return e;if(e=Ft(e.nextSibling),e===null)break}return null}function Iw(e,t,a){if(t==="")return null;for(;e.nodeType!==3;)if((e.nodeType!==1||e.nodeName!=="INPUT"||e.type!=="hidden")&&!a||(e=Ft(e.nextSibling),e===null))return null;return e}function xg(e,t){for(;e.nodeType!==8;)if((e.nodeType!==1||e.nodeName!=="INPUT"||e.type!=="hidden")&&!t||(e=Ft(e.nextSibling),e===null))return null;return e}function Du(e){return e.data==="$?"||e.data==="$~"}function Ru(e){return e.data==="$!"||e.data==="$?"&&e.ownerDocument.readyState!=="loading"}function Gw(e,t){var a=e.ownerDocument;if(e.data==="$~")e._reactRetry=t;else if(e.data!=="$?"||a.readyState!=="loading")t();else{var o=function(){t(),a.removeEventListener("DOMContentLoaded",o)};a.addEventListener("DOMContentLoaded",o),e._reactRetry=o}}function Ft(e){for(;e!=null;e=e.nextSibling){var t=e.nodeType;if(t===1||t===3)break;if(t===8){if(t=e.data,t==="$"||t==="$!"||t==="$?"||t==="$~"||t==="&"||t==="F!"||t==="F")break;if(t==="/$"||t==="/&")return null}}return e}var ku=null;function wg(e){e=e.nextSibling;for(var t=0;e;){if(e.nodeType===8){var a=e.data;if(a==="/$"||a==="/&"){if(t===0)return Ft(e.nextSibling);t--}else a!=="$"&&a!=="$!"&&a!=="$?"&&a!=="$~"&&a!=="&"||t++}e=e.nextSibling}return null}function Sg(e){e=e.previousSibling;for(var t=0;e;){if(e.nodeType===8){var a=e.data;if(a==="$"||a==="$!"||a==="$?"||a==="$~"||a==="&"){if(t===0)return e;t--}else a!=="/$"&&a!=="/&"||t++}e=e.previousSibling}return null}function Tg(e,t,a){switch(t=vr(a),e){case"html":if(e=t.documentElement,!e)throw Error(r(452));return e;case"head":if(e=t.head,!e)throw Error(r(453));return e;case"body":if(e=t.body,!e)throw Error(r(454));return e;default:throw Error(r(451))}}function Bs(e){for(var t=e.attributes;t.length;)e.removeAttributeNode(t[0]);Nl(e)}var Ht=new Map,Cg=new Set;function br(e){return typeof e.getRootNode=="function"?e.getRootNode():e.nodeType===9?e:e.ownerDocument}var kn=Y.d;Y.d={f:Yw,r:Kw,D:Xw,C:Ww,L:Qw,m:Zw,X:$w,S:Jw,M:eS};function Yw(){var e=kn.f(),t=ur();return e||t}function Kw(e){var t=Xa(e);t!==null&&t.tag===5&&t.type==="form"?qm(t):kn.r(e)}var Ei=typeof document>"u"?null:document;function Ag(e,t,a){var o=Ei;if(o&&typeof t=="string"&&t){var c=Bt(t);c='link[rel="'+e+'"][href="'+c+'"]',typeof a=="string"&&(c+='[crossorigin="'+a+'"]'),Cg.has(c)||(Cg.add(c),e={rel:e,crossOrigin:a,href:t},o.querySelector(c)===null&&(t=o.createElement("link"),lt(t,"link",e),nt(t),o.head.appendChild(t)))}}function Xw(e){kn.D(e),Ag("dns-prefetch",e,null)}function Ww(e,t){kn.C(e,t),Ag("preconnect",e,t)}function Qw(e,t,a){kn.L(e,t,a);var o=Ei;if(o&&e&&t){var c='link[rel="preload"][as="'+Bt(t)+'"]';t==="image"&&a&&a.imageSrcSet?(c+='[imagesrcset="'+Bt(a.imageSrcSet)+'"]',typeof a.imageSizes=="string"&&(c+='[imagesizes="'+Bt(a.imageSizes)+'"]')):c+='[href="'+Bt(e)+'"]';var u=c;switch(t){case"style":u=Mi(e);break;case"script":u=Di(e)}Ht.has(u)||(e=b({rel:"preload",href:t==="image"&&a&&a.imageSrcSet?void 0:e,as:t},a),Ht.set(u,e),o.querySelector(c)!==null||t==="style"&&o.querySelector(Ls(u))||t==="script"&&o.querySelector(Ps(u))||(t=o.createElement("link"),lt(t,"link",e),nt(t),o.head.appendChild(t)))}}function Zw(e,t){kn.m(e,t);var a=Ei;if(a&&e){var o=t&&typeof t.as=="string"?t.as:"script",c='link[rel="modulepreload"][as="'+Bt(o)+'"][href="'+Bt(e)+'"]',u=c;switch(o){case"audioworklet":case"paintworklet":case"serviceworker":case"sharedworker":case"worker":case"script":u=Di(e)}if(!Ht.has(u)&&(e=b({rel:"modulepreload",href:e},t),Ht.set(u,e),a.querySelector(c)===null)){switch(o){case"audioworklet":case"paintworklet":case"serviceworker":case"sharedworker":case"worker":case"script":if(a.querySelector(Ps(u)))return}o=a.createElement("link"),lt(o,"link",e),nt(o),a.head.appendChild(o)}}}function Jw(e,t,a){kn.S(e,t,a);var o=Ei;if(o&&e){var c=Wa(o).hoistableStyles,u=Mi(e);t=t||"default";var g=c.get(u);if(!g){var x={loading:0,preload:null};if(g=o.querySelector(Ls(u)))x.loading=5;else{e=b({rel:"stylesheet",href:e,"data-precedence":t},a),(a=Ht.get(u))&&zu(e,a);var T=g=o.createElement("link");nt(T),lt(T,"link",e),T._p=new Promise(function(j,_){T.onload=j,T.onerror=_}),T.addEventListener("load",function(){x.loading|=1}),T.addEventListener("error",function(){x.loading|=2}),x.loading|=4,xr(g,t,o)}g={type:"stylesheet",instance:g,count:1,state:x},c.set(u,g)}}}function $w(e,t){kn.X(e,t);var a=Ei;if(a&&e){var o=Wa(a).hoistableScripts,c=Di(e),u=o.get(c);u||(u=a.querySelector(Ps(c)),u||(e=b({src:e,async:!0},t),(t=Ht.get(c))&&Nu(e,t),u=a.createElement("script"),nt(u),lt(u,"link",e),a.head.appendChild(u)),u={type:"script",instance:u,count:1,state:null},o.set(c,u))}}function eS(e,t){kn.M(e,t);var a=Ei;if(a&&e){var o=Wa(a).hoistableScripts,c=Di(e),u=o.get(c);u||(u=a.querySelector(Ps(c)),u||(e=b({src:e,async:!0,type:"module"},t),(t=Ht.get(c))&&Nu(e,t),u=a.createElement("script"),nt(u),lt(u,"link",e),a.head.appendChild(u)),u={type:"script",instance:u,count:1,state:null},o.set(c,u))}}function Eg(e,t,a,o){var c=(c=fe.current)?br(c):null;if(!c)throw Error(r(446));switch(e){case"meta":case"title":return null;case"style":return typeof a.precedence=="string"&&typeof a.href=="string"?(t=Mi(a.href),a=Wa(c).hoistableStyles,o=a.get(t),o||(o={type:"style",instance:null,count:0,state:null},a.set(t,o)),o):{type:"void",instance:null,count:0,state:null};case"link":if(a.rel==="stylesheet"&&typeof a.href=="string"&&typeof a.precedence=="string"){e=Mi(a.href);var u=Wa(c).hoistableStyles,g=u.get(e);if(g||(c=c.ownerDocument||c,g={type:"stylesheet",instance:null,count:0,state:{loading:0,preload:null}},u.set(e,g),(u=c.querySelector(Ls(e)))&&!u._p&&(g.instance=u,g.state.loading=5),Ht.has(e)||(a={rel:"preload",as:"style",href:a.href,crossOrigin:a.crossOrigin,integrity:a.integrity,media:a.media,hrefLang:a.hrefLang,referrerPolicy:a.referrerPolicy},Ht.set(e,a),u||tS(c,e,a,g.state))),t&&o===null)throw Error(r(528,""));return g}if(t&&o!==null)throw Error(r(529,""));return null;case"script":return t=a.async,a=a.src,typeof a=="string"&&t&&typeof t!="function"&&typeof t!="symbol"?(t=Di(a),a=Wa(c).hoistableScripts,o=a.get(t),o||(o={type:"script",instance:null,count:0,state:null},a.set(t,o)),o):{type:"void",instance:null,count:0,state:null};default:throw Error(r(444,e))}}function Mi(e){return'href="'+Bt(e)+'"'}function Ls(e){return'link[rel="stylesheet"]['+e+"]"}function Mg(e){return b({},e,{"data-precedence":e.precedence,precedence:null})}function tS(e,t,a,o){e.querySelector('link[rel="preload"][as="style"]['+t+"]")?o.loading=1:(t=e.createElement("link"),o.preload=t,t.addEventListener("load",function(){return o.loading|=1}),t.addEventListener("error",function(){return o.loading|=2}),lt(t,"link",a),nt(t),e.head.appendChild(t))}function Di(e){return'[src="'+Bt(e)+'"]'}function Ps(e){return"script[async]"+e}function Dg(e,t,a){if(t.count++,t.instance===null)switch(t.type){case"style":var o=e.querySelector('style[data-href~="'+Bt(a.href)+'"]');if(o)return t.instance=o,nt(o),o;var c=b({},a,{"data-href":a.href,"data-precedence":a.precedence,href:null,precedence:null});return o=(e.ownerDocument||e).createElement("style"),nt(o),lt(o,"style",c),xr(o,a.precedence,e),t.instance=o;case"stylesheet":c=Mi(a.href);var u=e.querySelector(Ls(c));if(u)return t.state.loading|=4,t.instance=u,nt(u),u;o=Mg(a),(c=Ht.get(c))&&zu(o,c),u=(e.ownerDocument||e).createElement("link"),nt(u);var g=u;return g._p=new Promise(function(x,T){g.onload=x,g.onerror=T}),lt(u,"link",o),t.state.loading|=4,xr(u,a.precedence,e),t.instance=u;case"script":return u=Di(a.src),(c=e.querySelector(Ps(u)))?(t.instance=c,nt(c),c):(o=a,(c=Ht.get(u))&&(o=b({},a),Nu(o,c)),e=e.ownerDocument||e,c=e.createElement("script"),nt(c),lt(c,"link",o),e.head.appendChild(c),t.instance=c);case"void":return null;default:throw Error(r(443,t.type))}else t.type==="stylesheet"&&(t.state.loading&4)===0&&(o=t.instance,t.state.loading|=4,xr(o,a.precedence,e));return t.instance}function xr(e,t,a){for(var o=a.querySelectorAll('link[rel="stylesheet"][data-precedence],style[data-precedence]'),c=o.length?o[o.length-1]:null,u=c,g=0;g<o.length;g++){var x=o[g];if(x.dataset.precedence===t)u=x;else if(u!==c)break}u?u.parentNode.insertBefore(e,u.nextSibling):(t=a.nodeType===9?a.head:a,t.insertBefore(e,t.firstChild))}function zu(e,t){e.crossOrigin==null&&(e.crossOrigin=t.crossOrigin),e.referrerPolicy==null&&(e.referrerPolicy=t.referrerPolicy),e.title==null&&(e.title=t.title)}function Nu(e,t){e.crossOrigin==null&&(e.crossOrigin=t.crossOrigin),e.referrerPolicy==null&&(e.referrerPolicy=t.referrerPolicy),e.integrity==null&&(e.integrity=t.integrity)}var wr=null;function Rg(e,t,a){if(wr===null){var o=new Map,c=wr=new Map;c.set(a,o)}else c=wr,o=c.get(a),o||(o=new Map,c.set(a,o));if(o.has(e))return o;for(o.set(e,null),a=a.getElementsByTagName(e),c=0;c<a.length;c++){var u=a[c];if(!(u[$i]||u[it]||e==="link"&&u.getAttribute("rel")==="stylesheet")&&u.namespaceURI!=="http://www.w3.org/2000/svg"){var g=u.getAttribute(t)||"";g=e+g;var x=o.get(g);x?x.push(u):o.set(g,[u])}}return o}function kg(e,t,a){e=e.ownerDocument||e,e.head.insertBefore(a,t==="title"?e.querySelector("head > title"):null)}function nS(e,t,a){if(a===1||t.itemProp!=null)return!1;switch(e){case"meta":case"title":return!0;case"style":if(typeof t.precedence!="string"||typeof t.href!="string"||t.href==="")break;return!0;case"link":if(typeof t.rel!="string"||typeof t.href!="string"||t.href===""||t.onLoad||t.onError)break;return t.rel==="stylesheet"?(e=t.disabled,typeof t.precedence=="string"&&e==null):!0;case"script":if(t.async&&typeof t.async!="function"&&typeof t.async!="symbol"&&!t.onLoad&&!t.onError&&t.src&&typeof t.src=="string")return!0}return!1}function zg(e){return!(e.type==="stylesheet"&&(e.state.loading&3)===0)}function aS(e,t,a,o){if(a.type==="stylesheet"&&(typeof o.media!="string"||matchMedia(o.media).matches!==!1)&&(a.state.loading&4)===0){if(a.instance===null){var c=Mi(o.href),u=t.querySelector(Ls(c));if(u){t=u._p,t!==null&&typeof t=="object"&&typeof t.then=="function"&&(e.count++,e=Sr.bind(e),t.then(e,e)),a.state.loading|=4,a.instance=u,nt(u);return}u=t.ownerDocument||t,o=Mg(o),(c=Ht.get(c))&&zu(o,c),u=u.createElement("link"),nt(u);var g=u;g._p=new Promise(function(x,T){g.onload=x,g.onerror=T}),lt(u,"link",o),a.instance=u}e.stylesheets===null&&(e.stylesheets=new Map),e.stylesheets.set(a,t),(t=a.state.preload)&&(a.state.loading&3)===0&&(e.count++,a=Sr.bind(e),t.addEventListener("load",a),t.addEventListener("error",a))}}var ju=0;function iS(e,t){return e.stylesheets&&e.count===0&&Cr(e,e.stylesheets),0<e.count||0<e.imgCount?function(a){var o=setTimeout(function(){if(e.stylesheets&&Cr(e,e.stylesheets),e.unsuspend){var u=e.unsuspend;e.unsuspend=null,u()}},6e4+t);0<e.imgBytes&&ju===0&&(ju=62500*Vw());var c=setTimeout(function(){if(e.waitingForImages=!1,e.count===0&&(e.stylesheets&&Cr(e,e.stylesheets),e.unsuspend)){var u=e.unsuspend;e.unsuspend=null,u()}},(e.imgBytes>ju?50:800)+t);return e.unsuspend=a,function(){e.unsuspend=null,clearTimeout(o),clearTimeout(c)}}:null}function Sr(){if(this.count--,this.count===0&&(this.imgCount===0||!this.waitingForImages)){if(this.stylesheets)Cr(this,this.stylesheets);else if(this.unsuspend){var e=this.unsuspend;this.unsuspend=null,e()}}}var Tr=null;function Cr(e,t){e.stylesheets=null,e.unsuspend!==null&&(e.count++,Tr=new Map,t.forEach(sS,e),Tr=null,Sr.call(e))}function sS(e,t){if(!(t.state.loading&4)){var a=Tr.get(e);if(a)var o=a.get(null);else{a=new Map,Tr.set(e,a);for(var c=e.querySelectorAll("link[data-precedence],style[data-precedence]"),u=0;u<c.length;u++){var g=c[u];(g.nodeName==="LINK"||g.getAttribute("media")!=="not all")&&(a.set(g.dataset.precedence,g),o=g)}o&&a.set(null,o)}c=t.instance,g=c.getAttribute("data-precedence"),u=a.get(g)||o,u===o&&a.set(null,c),a.set(g,c),this.count++,o=Sr.bind(this),c.addEventListener("load",o),c.addEventListener("error",o),u?u.parentNode.insertBefore(c,u.nextSibling):(e=e.nodeType===9?e.head:e,e.insertBefore(c,e.firstChild)),t.state.loading|=4}}var Vs={$$typeof:L,Provider:null,Consumer:null,_currentValue:I,_currentValue2:I,_threadCount:0};function oS(e,t,a,o,c,u,g,x,T){this.tag=1,this.containerInfo=e,this.pingCache=this.current=this.pendingChildren=null,this.timeoutHandle=-1,this.callbackNode=this.next=this.pendingContext=this.context=this.cancelPendingCommit=null,this.callbackPriority=0,this.expirationTimes=Dl(-1),this.entangledLanes=this.shellSuspendCounter=this.errorRecoveryDisabledLanes=this.expiredLanes=this.warmLanes=this.pingedLanes=this.suspendedLanes=this.pendingLanes=0,this.entanglements=Dl(0),this.hiddenUpdates=Dl(null),this.identifierPrefix=o,this.onUncaughtError=c,this.onCaughtError=u,this.onRecoverableError=g,this.pooledCache=null,this.pooledCacheLanes=0,this.formState=T,this.incompleteTransitions=new Map}function Ng(e,t,a,o,c,u,g,x,T,j,_,F){return e=new oS(e,t,a,g,T,j,_,F,x),t=1,u===!0&&(t|=24),u=Mt(3,null,null,t),e.current=u,u.stateNode=e,t=fc(),t.refCount++,e.pooledCache=t,t.refCount++,u.memoizedState={element:o,isDehydrated:a,cache:t},gc(u),e}function jg(e){return e?(e=si,e):si}function Og(e,t,a,o,c,u){c=jg(c),o.context===null?o.context=c:o.pendingContext=c,o=Yn(t),o.payload={element:a},u=u===void 0?null:u,u!==null&&(o.callback=u),a=Kn(e,o,t),a!==null&&(St(a,e,t),gs(a,e,t))}function Bg(e,t){if(e=e.memoizedState,e!==null&&e.dehydrated!==null){var a=e.retryLane;e.retryLane=a!==0&&a<t?a:t}}function Ou(e,t){Bg(e,t),(e=e.alternate)&&Bg(e,t)}function Lg(e){if(e.tag===13||e.tag===31){var t=Ca(e,67108864);t!==null&&St(t,e,67108864),Ou(e,67108864)}}function Pg(e){if(e.tag===13||e.tag===31){var t=Nt();t=Rl(t);var a=Ca(e,t);a!==null&&St(a,e,t),Ou(e,t)}}var Ar=!0;function rS(e,t,a,o){var c=V.T;V.T=null;var u=Y.p;try{Y.p=2,Bu(e,t,a,o)}finally{Y.p=u,V.T=c}}function lS(e,t,a,o){var c=V.T;V.T=null;var u=Y.p;try{Y.p=8,Bu(e,t,a,o)}finally{Y.p=u,V.T=c}}function Bu(e,t,a,o){if(Ar){var c=Lu(o);if(c===null)wu(e,t,o,Er,a),_g(e,o);else if(uS(c,e,t,a,o))o.stopPropagation();else if(_g(e,o),t&4&&-1<cS.indexOf(e)){for(;c!==null;){var u=Xa(c);if(u!==null)switch(u.tag){case 3:if(u=u.stateNode,u.current.memoizedState.isDehydrated){var g=ba(u.pendingLanes);if(g!==0){var x=u;for(x.pendingLanes|=2,x.entangledLanes|=2;g;){var T=1<<31-At(g);x.entanglements[1]|=T,g&=~T}sn(u),(Ce&6)===0&&(lr=Tt()+500,Ns(0))}}break;case 31:case 13:x=Ca(u,2),x!==null&&St(x,u,2),ur(),Ou(u,2)}if(u=Lu(o),u===null&&wu(e,t,o,Er,a),u===c)break;c=u}c!==null&&o.stopPropagation()}else wu(e,t,o,null,a)}}function Lu(e){return e=Vl(e),Pu(e)}var Er=null;function Pu(e){if(Er=null,e=Ka(e),e!==null){var t=d(e);if(t===null)e=null;else{var a=t.tag;if(a===13){if(e=f(t),e!==null)return e;e=null}else if(a===31){if(e=h(t),e!==null)return e;e=null}else if(a===3){if(t.stateNode.current.memoizedState.isDehydrated)return t.tag===3?t.stateNode.containerInfo:null;e=null}else t!==e&&(e=null)}}return Er=e,null}function Vg(e){switch(e){case"beforetoggle":case"cancel":case"click":case"close":case"contextmenu":case"copy":case"cut":case"auxclick":case"dblclick":case"dragend":case"dragstart":case"drop":case"focusin":case"focusout":case"input":case"invalid":case"keydown":case"keypress":case"keyup":case"mousedown":case"mouseup":case"paste":case"pause":case"play":case"pointercancel":case"pointerdown":case"pointerup":case"ratechange":case"reset":case"resize":case"seeked":case"submit":case"toggle":case"touchcancel":case"touchend":case"touchstart":case"volumechange":case"change":case"selectionchange":case"textInput":case"compositionstart":case"compositionend":case"compositionupdate":case"beforeblur":case"afterblur":case"beforeinput":case"blur":case"fullscreenchange":case"focus":case"hashchange":case"popstate":case"select":case"selectstart":return 2;case"drag":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"mousemove":case"mouseout":case"mouseover":case"pointermove":case"pointerout":case"pointerover":case"scroll":case"touchmove":case"wheel":case"mouseenter":case"mouseleave":case"pointerenter":case"pointerleave":return 8;case"message":switch(X0()){case Yf:return 2;case Kf:return 8;case po:case W0:return 32;case Xf:return 268435456;default:return 32}default:return 32}}var Vu=!1,ia=null,sa=null,oa=null,_s=new Map,Us=new Map,ra=[],cS="mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset".split(" ");function _g(e,t){switch(e){case"focusin":case"focusout":ia=null;break;case"dragenter":case"dragleave":sa=null;break;case"mouseover":case"mouseout":oa=null;break;case"pointerover":case"pointerout":_s.delete(t.pointerId);break;case"gotpointercapture":case"lostpointercapture":Us.delete(t.pointerId)}}function qs(e,t,a,o,c,u){return e===null||e.nativeEvent!==u?(e={blockedOn:t,domEventName:a,eventSystemFlags:o,nativeEvent:u,targetContainers:[c]},t!==null&&(t=Xa(t),t!==null&&Lg(t)),e):(e.eventSystemFlags|=o,t=e.targetContainers,c!==null&&t.indexOf(c)===-1&&t.push(c),e)}function uS(e,t,a,o,c){switch(t){case"focusin":return ia=qs(ia,e,t,a,o,c),!0;case"dragenter":return sa=qs(sa,e,t,a,o,c),!0;case"mouseover":return oa=qs(oa,e,t,a,o,c),!0;case"pointerover":var u=c.pointerId;return _s.set(u,qs(_s.get(u)||null,e,t,a,o,c)),!0;case"gotpointercapture":return u=c.pointerId,Us.set(u,qs(Us.get(u)||null,e,t,a,o,c)),!0}return!1}function Ug(e){var t=Ka(e.target);if(t!==null){var a=d(t);if(a!==null){if(t=a.tag,t===13){if(t=f(a),t!==null){e.blockedOn=t,eh(e.priority,function(){Pg(a)});return}}else if(t===31){if(t=h(a),t!==null){e.blockedOn=t,eh(e.priority,function(){Pg(a)});return}}else if(t===3&&a.stateNode.current.memoizedState.isDehydrated){e.blockedOn=a.tag===3?a.stateNode.containerInfo:null;return}}}e.blockedOn=null}function Mr(e){if(e.blockedOn!==null)return!1;for(var t=e.targetContainers;0<t.length;){var a=Lu(e.nativeEvent);if(a===null){a=e.nativeEvent;var o=new a.constructor(a.type,a);Pl=o,a.target.dispatchEvent(o),Pl=null}else return t=Xa(a),t!==null&&Lg(t),e.blockedOn=a,!1;t.shift()}return!0}function qg(e,t,a){Mr(e)&&a.delete(t)}function dS(){Vu=!1,ia!==null&&Mr(ia)&&(ia=null),sa!==null&&Mr(sa)&&(sa=null),oa!==null&&Mr(oa)&&(oa=null),_s.forEach(qg),Us.forEach(qg)}function Dr(e,t){e.blockedOn===t&&(e.blockedOn=null,Vu||(Vu=!0,n.unstable_scheduleCallback(n.unstable_NormalPriority,dS)))}var Rr=null;function Fg(e){Rr!==e&&(Rr=e,n.unstable_scheduleCallback(n.unstable_NormalPriority,function(){Rr===e&&(Rr=null);for(var t=0;t<e.length;t+=3){var a=e[t],o=e[t+1],c=e[t+2];if(typeof o!="function"){if(Pu(o||a)===null)continue;break}var u=Xa(a);u!==null&&(e.splice(t,3),t-=3,Lc(u,{pending:!0,data:c,method:a.method,action:o},o,c))}}))}function Ri(e){function t(T){return Dr(T,e)}ia!==null&&Dr(ia,e),sa!==null&&Dr(sa,e),oa!==null&&Dr(oa,e),_s.forEach(t),Us.forEach(t);for(var a=0;a<ra.length;a++){var o=ra[a];o.blockedOn===e&&(o.blockedOn=null)}for(;0<ra.length&&(a=ra[0],a.blockedOn===null);)Ug(a),a.blockedOn===null&&ra.shift();if(a=(e.ownerDocument||e).$$reactFormReplay,a!=null)for(o=0;o<a.length;o+=3){var c=a[o],u=a[o+1],g=c[gt]||null;if(typeof u=="function")g||Fg(a);else if(g){var x=null;if(u&&u.hasAttribute("formAction")){if(c=u,g=u[gt]||null)x=g.formAction;else if(Pu(c)!==null)continue}else x=g.action;typeof x=="function"?a[o+1]=x:(a.splice(o,3),o-=3),Fg(a)}}}function Hg(){function e(u){u.canIntercept&&u.info==="react-transition"&&u.intercept({handler:function(){return new Promise(function(g){return c=g})},focusReset:"manual",scroll:"manual"})}function t(){c!==null&&(c(),c=null),o||setTimeout(a,20)}function a(){if(!o&&!navigation.transition){var u=navigation.currentEntry;u&&u.url!=null&&navigation.navigate(u.url,{state:u.getState(),info:"react-transition",history:"replace"})}}if(typeof navigation=="object"){var o=!1,c=null;return navigation.addEventListener("navigate",e),navigation.addEventListener("navigatesuccess",t),navigation.addEventListener("navigateerror",t),setTimeout(a,100),function(){o=!0,navigation.removeEventListener("navigate",e),navigation.removeEventListener("navigatesuccess",t),navigation.removeEventListener("navigateerror",t),c!==null&&(c(),c=null)}}}function _u(e){this._internalRoot=e}kr.prototype.render=_u.prototype.render=function(e){var t=this._internalRoot;if(t===null)throw Error(r(409));var a=t.current,o=Nt();Og(a,o,e,t,null,null)},kr.prototype.unmount=_u.prototype.unmount=function(){var e=this._internalRoot;if(e!==null){this._internalRoot=null;var t=e.containerInfo;Og(e.current,2,null,e,null,null),ur(),t[Ya]=null}};function kr(e){this._internalRoot=e}kr.prototype.unstable_scheduleHydration=function(e){if(e){var t=$f();e={blockedOn:null,target:e,priority:t};for(var a=0;a<ra.length&&t!==0&&t<ra[a].priority;a++);ra.splice(a,0,e),a===0&&Ug(e)}};var Ig=i.version;if(Ig!=="19.2.3")throw Error(r(527,Ig,"19.2.3"));Y.findDOMNode=function(e){var t=e._reactInternals;if(t===void 0)throw typeof e.render=="function"?Error(r(188)):(e=Object.keys(e).join(","),Error(r(268,e)));return e=m(t),e=e!==null?y(e):null,e=e===null?null:e.stateNode,e};var fS={bundleType:0,version:"19.2.3",rendererPackageName:"react-dom",currentDispatcherRef:V,reconcilerVersion:"19.2.3"};if(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__<"u"){var zr=__REACT_DEVTOOLS_GLOBAL_HOOK__;if(!zr.isDisabled&&zr.supportsFiber)try{Qi=zr.inject(fS),Ct=zr}catch{}}return Hs.createRoot=function(e,t){if(!l(e))throw Error(r(299));var a=!1,o="",c=Zm,u=Jm,g=$m;return t!=null&&(t.unstable_strictMode===!0&&(a=!0),t.identifierPrefix!==void 0&&(o=t.identifierPrefix),t.onUncaughtError!==void 0&&(c=t.onUncaughtError),t.onCaughtError!==void 0&&(u=t.onCaughtError),t.onRecoverableError!==void 0&&(g=t.onRecoverableError)),t=Ng(e,1,!1,null,null,a,o,null,c,u,g,Hg),e[Ya]=t.current,xu(e),new _u(t)},Hs.hydrateRoot=function(e,t,a){if(!l(e))throw Error(r(299));var o=!1,c="",u=Zm,g=Jm,x=$m,T=null;return a!=null&&(a.unstable_strictMode===!0&&(o=!0),a.identifierPrefix!==void 0&&(c=a.identifierPrefix),a.onUncaughtError!==void 0&&(u=a.onUncaughtError),a.onCaughtError!==void 0&&(g=a.onCaughtError),a.onRecoverableError!==void 0&&(x=a.onRecoverableError),a.formState!==void 0&&(T=a.formState)),t=Ng(e,1,!0,t,a??null,o,c,T,u,g,x,Hg),t.context=jg(null),a=t.current,o=Nt(),o=Rl(o),c=Yn(o),c.callback=null,Kn(a,c,o),a=o,t.current.lanes=a,Ji(t,a),sn(t),e[Ya]=t.current,xu(e),new kr(t)},Hs.version="19.2.3",Hs}var ey;function TS(){if(ey)return Fu.exports;ey=1;function n(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(n)}catch(i){console.error(i)}}return n(),Fu.exports=SS(),Fu.exports}var CS=TS();var ty="popstate";function AS(n={}){function i(r,l){let{pathname:d,search:f,hash:h}=r.location;return Td("",{pathname:d,search:f,hash:h},l.state&&l.state.usr||null,l.state&&l.state.key||"default")}function s(r,l){return typeof l=="string"?l:Js(l)}return MS(i,s,null,n)}function Ue(n,i){if(n===!1||n===null||typeof n>"u")throw new Error(i)}function un(n,i){if(!n){typeof console<"u"&&console.warn(i);try{throw new Error(i)}catch{}}}function ES(){return Math.random().toString(36).substring(2,10)}function ny(n,i){return{usr:n.state,key:n.key,idx:i}}function Td(n,i,s=null,r){return{pathname:typeof n=="string"?n:n.pathname,search:"",hash:"",...typeof i=="string"?Hi(i):i,state:s,key:i&&i.key||r||ES()}}function Js({pathname:n="/",search:i="",hash:s=""}){return i&&i!=="?"&&(n+=i.charAt(0)==="?"?i:"?"+i),s&&s!=="#"&&(n+=s.charAt(0)==="#"?s:"#"+s),n}function Hi(n){let i={};if(n){let s=n.indexOf("#");s>=0&&(i.hash=n.substring(s),n=n.substring(0,s));let r=n.indexOf("?");r>=0&&(i.search=n.substring(r),n=n.substring(0,r)),n&&(i.pathname=n)}return i}function MS(n,i,s,r={}){let{window:l=document.defaultView,v5Compat:d=!1}=r,f=l.history,h="POP",p=null,m=y();m==null&&(m=0,f.replaceState({...f.state,idx:m},""));function y(){return(f.state||{idx:null}).idx}function b(){h="POP";let D=y(),z=D==null?null:D-m;m=D,p&&p({action:h,location:A.location,delta:z})}function S(D,z){h="PUSH";let O=Td(A.location,D,z);m=y()+1;let L=ny(O,m),X=A.createHref(O);try{f.pushState(L,"",X)}catch(G){if(G instanceof DOMException&&G.name==="DataCloneError")throw G;l.location.assign(X)}d&&p&&p({action:h,location:A.location,delta:1})}function C(D,z){h="REPLACE";let O=Td(A.location,D,z);m=y();let L=ny(O,m),X=A.createHref(O);f.replaceState(L,"",X),d&&p&&p({action:h,location:A.location,delta:0})}function R(D){return DS(D)}let A={get action(){return h},get location(){return n(l,f)},listen(D){if(p)throw new Error("A history only accepts one active listener");return l.addEventListener(ty,b),p=D,()=>{l.removeEventListener(ty,b),p=null}},createHref(D){return i(l,D)},createURL:R,encodeLocation(D){let z=R(D);return{pathname:z.pathname,search:z.search,hash:z.hash}},push:S,replace:C,go(D){return f.go(D)}};return A}function DS(n,i=!1){let s="http://localhost";typeof window<"u"&&(s=window.location.origin!=="null"?window.location.origin:window.location.href),Ue(s,"No window.location.(origin|href) available to create URL");let r=typeof n=="string"?n:Js(n);return r=r.replace(/ $/,"%20"),!i&&r.startsWith("//")&&(r=s+r),new URL(r,s)}function Gv(n,i,s="/"){return RS(n,i,s,!1)}function RS(n,i,s,r){let l=typeof i=="string"?Hi(i):i,d=jn(l.pathname||"/",s);if(d==null)return null;let f=Yv(n);kS(f);let h=null;for(let p=0;h==null&&p<f.length;++p){let m=qS(d);h=_S(f[p],m,r)}return h}function Yv(n,i=[],s=[],r="",l=!1){let d=(f,h,p=l,m)=>{let y={relativePath:m===void 0?f.path||"":m,caseSensitive:f.caseSensitive===!0,childrenIndex:h,route:f};if(y.relativePath.startsWith("/")){if(!y.relativePath.startsWith(r)&&p)return;Ue(y.relativePath.startsWith(r),`Absolute route path "${y.relativePath}" nested under path "${r}" is not valid. An absolute child route path must start with the combined path of all its parent routes.`),y.relativePath=y.relativePath.slice(r.length)}let b=Nn([r,y.relativePath]),S=s.concat(y);f.children&&f.children.length>0&&(Ue(f.index!==!0,`Index routes must not have child routes. Please remove all child routes from route path "${b}".`),Yv(f.children,i,S,b,p)),!(f.path==null&&!f.index)&&i.push({path:b,score:PS(b,f.index),routesMeta:S})};return n.forEach((f,h)=>{if(f.path===""||!f.path?.includes("?"))d(f,h);else for(let p of Kv(f.path))d(f,h,!0,p)}),i}function Kv(n){let i=n.split("/");if(i.length===0)return[];let[s,...r]=i,l=s.endsWith("?"),d=s.replace(/\?$/,"");if(r.length===0)return l?[d,""]:[d];let f=Kv(r.join("/")),h=[];return h.push(...f.map(p=>p===""?d:[d,p].join("/"))),l&&h.push(...f),h.map(p=>n.startsWith("/")&&p===""?"/":p)}function kS(n){n.sort((i,s)=>i.score!==s.score?s.score-i.score:VS(i.routesMeta.map(r=>r.childrenIndex),s.routesMeta.map(r=>r.childrenIndex)))}var zS=/^:[\w-]+$/,NS=3,jS=2,OS=1,BS=10,LS=-2,ay=n=>n==="*";function PS(n,i){let s=n.split("/"),r=s.length;return s.some(ay)&&(r+=LS),i&&(r+=jS),s.filter(l=>!ay(l)).reduce((l,d)=>l+(zS.test(d)?NS:d===""?OS:BS),r)}function VS(n,i){return n.length===i.length&&n.slice(0,-1).every((r,l)=>r===i[l])?n[n.length-1]-i[i.length-1]:0}function _S(n,i,s=!1){let{routesMeta:r}=n,l={},d="/",f=[];for(let h=0;h<r.length;++h){let p=r[h],m=h===r.length-1,y=d==="/"?i:i.slice(d.length)||"/",b=el({path:p.relativePath,caseSensitive:p.caseSensitive,end:m},y),S=p.route;if(!b&&m&&s&&!r[r.length-1].route.index&&(b=el({path:p.relativePath,caseSensitive:p.caseSensitive,end:!1},y)),!b)return null;Object.assign(l,b.params),f.push({params:l,pathname:Nn([d,b.pathname]),pathnameBase:GS(Nn([d,b.pathnameBase])),route:S}),b.pathnameBase!=="/"&&(d=Nn([d,b.pathnameBase]))}return f}function el(n,i){typeof n=="string"&&(n={path:n,caseSensitive:!1,end:!0});let[s,r]=US(n.path,n.caseSensitive,n.end),l=i.match(s);if(!l)return null;let d=l[0],f=d.replace(/(.)\/+$/,"$1"),h=l.slice(1);return{params:r.reduce((m,{paramName:y,isOptional:b},S)=>{if(y==="*"){let R=h[S]||"";f=d.slice(0,d.length-R.length).replace(/(.)\/+$/,"$1")}const C=h[S];return b&&!C?m[y]=void 0:m[y]=(C||"").replace(/%2F/g,"/"),m},{}),pathname:d,pathnameBase:f,pattern:n}}function US(n,i=!1,s=!0){un(n==="*"||!n.endsWith("*")||n.endsWith("/*"),`Route path "${n}" will be treated as if it were "${n.replace(/\*$/,"/*")}" because the \`*\` character must always follow a \`/\` in the pattern. To get rid of this warning, please change the route path to "${n.replace(/\*$/,"/*")}".`);let r=[],l="^"+n.replace(/\/*\*?$/,"").replace(/^\/*/,"/").replace(/[\\.*+^${}|()[\]]/g,"\\$&").replace(/\/:([\w-]+)(\?)?/g,(f,h,p)=>(r.push({paramName:h,isOptional:p!=null}),p?"/?([^\\/]+)?":"/([^\\/]+)")).replace(/\/([\w-]+)\?(\/|$)/g,"(/$1)?$2");return n.endsWith("*")?(r.push({paramName:"*"}),l+=n==="*"||n==="/*"?"(.*)$":"(?:\\/(.+)|\\/*)$"):s?l+="\\/*$":n!==""&&n!=="/"&&(l+="(?:(?=\\/|$))"),[new RegExp(l,i?void 0:"i"),r]}function qS(n){try{return n.split("/").map(i=>decodeURIComponent(i).replace(/\//g,"%2F")).join("/")}catch(i){return un(!1,`The URL path "${n}" could not be decoded because it is a malformed URL segment. This is probably due to a bad percent encoding (${i}).`),n}}function jn(n,i){if(i==="/")return n;if(!n.toLowerCase().startsWith(i.toLowerCase()))return null;let s=i.endsWith("/")?i.length-1:i.length,r=n.charAt(s);return r&&r!=="/"?null:n.slice(s)||"/"}var FS=/^(?:[a-z][a-z0-9+.-]*:|\/\/)/i;function HS(n,i="/"){let{pathname:s,search:r="",hash:l=""}=typeof n=="string"?Hi(n):n,d;return s?(s=s.replace(/\/\/+/g,"/"),s.startsWith("/")?d=iy(s.substring(1),"/"):d=iy(s,i)):d=i,{pathname:d,search:YS(r),hash:KS(l)}}function iy(n,i){let s=i.replace(/\/+$/,"").split("/");return n.split("/").forEach(l=>{l===".."?s.length>1&&s.pop():l!=="."&&s.push(l)}),s.length>1?s.join("/"):"/"}function Yu(n,i,s,r){return`Cannot include a '${n}' character in a manually specified \`to.${i}\` field [${JSON.stringify(r)}].  Please separate it out to the \`to.${s}\` field. Alternatively you may provide the full path as a string in <Link to="..."> and the router will parse it for you.`}function IS(n){return n.filter((i,s)=>s===0||i.route.path&&i.route.path.length>0)}function Xv(n){let i=IS(n);return i.map((s,r)=>r===i.length-1?s.pathname:s.pathnameBase)}function Wv(n,i,s,r=!1){let l;typeof n=="string"?l=Hi(n):(l={...n},Ue(!l.pathname||!l.pathname.includes("?"),Yu("?","pathname","search",l)),Ue(!l.pathname||!l.pathname.includes("#"),Yu("#","pathname","hash",l)),Ue(!l.search||!l.search.includes("#"),Yu("#","search","hash",l)));let d=n===""||l.pathname==="",f=d?"/":l.pathname,h;if(f==null)h=s;else{let b=i.length-1;if(!r&&f.startsWith("..")){let S=f.split("/");for(;S[0]==="..";)S.shift(),b-=1;l.pathname=S.join("/")}h=b>=0?i[b]:"/"}let p=HS(l,h),m=f&&f!=="/"&&f.endsWith("/"),y=(d||f===".")&&s.endsWith("/");return!p.pathname.endsWith("/")&&(m||y)&&(p.pathname+="/"),p}var Nn=n=>n.join("/").replace(/\/\/+/g,"/"),GS=n=>n.replace(/\/+$/,"").replace(/^\/*/,"/"),YS=n=>!n||n==="?"?"":n.startsWith("?")?n:"?"+n,KS=n=>!n||n==="#"?"":n.startsWith("#")?n:"#"+n,XS=class{constructor(n,i,s,r=!1){this.status=n,this.statusText=i||"",this.internal=r,s instanceof Error?(this.data=s.toString(),this.error=s):this.data=s}};function WS(n){return n!=null&&typeof n.status=="number"&&typeof n.statusText=="string"&&typeof n.internal=="boolean"&&"data"in n}function QS(n){return n.map(i=>i.route.path).filter(Boolean).join("/").replace(/\/\/*/g,"/")||"/"}var Qv=typeof window<"u"&&typeof window.document<"u"&&typeof window.document.createElement<"u";function Zv(n,i){let s=n;if(typeof s!="string"||!FS.test(s))return{absoluteURL:void 0,isExternal:!1,to:s};let r=s,l=!1;if(Qv)try{let d=new URL(window.location.href),f=s.startsWith("//")?new URL(d.protocol+s):new URL(s),h=jn(f.pathname,i);f.origin===d.origin&&h!=null?s=h+f.search+f.hash:l=!0}catch{un(!1,`<Link to="${s}"> contains an invalid URL which will probably break when clicked - please update to a valid URL path.`)}return{absoluteURL:r,isExternal:l,to:s}}Object.getOwnPropertyNames(Object.prototype).sort().join("\0");var Jv=["POST","PUT","PATCH","DELETE"];new Set(Jv);var ZS=["GET",...Jv];new Set(ZS);var Ii=w.createContext(null);Ii.displayName="DataRouter";var ml=w.createContext(null);ml.displayName="DataRouterState";var JS=w.createContext(!1),$v=w.createContext({isTransitioning:!1});$v.displayName="ViewTransition";var $S=w.createContext(new Map);$S.displayName="Fetchers";var eT=w.createContext(null);eT.displayName="Await";var Yt=w.createContext(null);Yt.displayName="Navigation";var ro=w.createContext(null);ro.displayName="Location";var fn=w.createContext({outlet:null,matches:[],isDataRoute:!1});fn.displayName="Route";var af=w.createContext(null);af.displayName="RouteError";var eb="REACT_ROUTER_ERROR",tT="REDIRECT",nT="ROUTE_ERROR_RESPONSE";function aT(n){if(n.startsWith(`${eb}:${tT}:{`))try{let i=JSON.parse(n.slice(28));if(typeof i=="object"&&i&&typeof i.status=="number"&&typeof i.statusText=="string"&&typeof i.location=="string"&&typeof i.reloadDocument=="boolean"&&typeof i.replace=="boolean")return i}catch{}}function iT(n){if(n.startsWith(`${eb}:${nT}:{`))try{let i=JSON.parse(n.slice(40));if(typeof i=="object"&&i&&typeof i.status=="number"&&typeof i.statusText=="string")return new XS(i.status,i.statusText,i.data)}catch{}}function sT(n,{relative:i}={}){Ue(lo(),"useHref() may be used only in the context of a <Router> component.");let{basename:s,navigator:r}=w.useContext(Yt),{hash:l,pathname:d,search:f}=co(n,{relative:i}),h=d;return s!=="/"&&(h=d==="/"?s:Nn([s,d])),r.createHref({pathname:h,search:f,hash:l})}function lo(){return w.useContext(ro)!=null}function Ia(){return Ue(lo(),"useLocation() may be used only in the context of a <Router> component."),w.useContext(ro).location}var tb="You should call navigate() in a React.useEffect(), not when your component is first rendered.";function nb(n){w.useContext(Yt).static||w.useLayoutEffect(n)}function ab(){let{isDataRoute:n}=w.useContext(fn);return n?bT():oT()}function oT(){Ue(lo(),"useNavigate() may be used only in the context of a <Router> component.");let n=w.useContext(Ii),{basename:i,navigator:s}=w.useContext(Yt),{matches:r}=w.useContext(fn),{pathname:l}=Ia(),d=JSON.stringify(Xv(r)),f=w.useRef(!1);return nb(()=>{f.current=!0}),w.useCallback((p,m={})=>{if(un(f.current,tb),!f.current)return;if(typeof p=="number"){s.go(p);return}let y=Wv(p,JSON.parse(d),l,m.relative==="path");n==null&&i!=="/"&&(y.pathname=y.pathname==="/"?i:Nn([i,y.pathname])),(m.replace?s.replace:s.push)(y,m.state,m)},[i,s,d,l,n])}w.createContext(null);function rT(){let{matches:n}=w.useContext(fn),i=n[n.length-1];return i?i.params:{}}function co(n,{relative:i}={}){let{matches:s}=w.useContext(fn),{pathname:r}=Ia(),l=JSON.stringify(Xv(s));return w.useMemo(()=>Wv(n,JSON.parse(l),r,i==="path"),[n,l,r,i])}function lT(n,i){return ib(n,i)}function ib(n,i,s,r,l){Ue(lo(),"useRoutes() may be used only in the context of a <Router> component.");let{navigator:d}=w.useContext(Yt),{matches:f}=w.useContext(fn),h=f[f.length-1],p=h?h.params:{},m=h?h.pathname:"/",y=h?h.pathnameBase:"/",b=h&&h.route;{let O=b&&b.path||"";ob(m,!b||O.endsWith("*")||O.endsWith("*?"),`You rendered descendant <Routes> (or called \`useRoutes()\`) at "${m}" (under <Route path="${O}">) but the parent route path has no trailing "*". This means if you navigate deeper, the parent won't match anymore and therefore the child routes will never render.

Please change the parent <Route path="${O}"> to <Route path="${O==="/"?"*":`${O}/*`}">.`)}let S=Ia(),C;if(i){let O=typeof i=="string"?Hi(i):i;Ue(y==="/"||O.pathname?.startsWith(y),`When overriding the location using \`<Routes location>\` or \`useRoutes(routes, location)\`, the location pathname must begin with the portion of the URL pathname that was matched by all parent routes. The current pathname base is "${y}" but pathname "${O.pathname}" was given in the \`location\` prop.`),C=O}else C=S;let R=C.pathname||"/",A=R;if(y!=="/"){let O=y.replace(/^\//,"").split("/");A="/"+R.replace(/^\//,"").split("/").slice(O.length).join("/")}let D=Gv(n,{pathname:A});un(b||D!=null,`No routes matched location "${C.pathname}${C.search}${C.hash}" `),un(D==null||D[D.length-1].route.element!==void 0||D[D.length-1].route.Component!==void 0||D[D.length-1].route.lazy!==void 0,`Matched leaf route at location "${C.pathname}${C.search}${C.hash}" does not have an element or Component. This means it will render an <Outlet /> with a null value by default resulting in an "empty" page.`);let z=hT(D&&D.map(O=>Object.assign({},O,{params:Object.assign({},p,O.params),pathname:Nn([y,d.encodeLocation?d.encodeLocation(O.pathname.replace(/\?/g,"%3F").replace(/#/g,"%23")).pathname:O.pathname]),pathnameBase:O.pathnameBase==="/"?y:Nn([y,d.encodeLocation?d.encodeLocation(O.pathnameBase.replace(/\?/g,"%3F").replace(/#/g,"%23")).pathname:O.pathnameBase])})),f,s,r,l);return i&&z?w.createElement(ro.Provider,{value:{location:{pathname:"/",search:"",hash:"",state:null,key:"default",...C},navigationType:"POP"}},z):z}function cT(){let n=vT(),i=WS(n)?`${n.status} ${n.statusText}`:n instanceof Error?n.message:JSON.stringify(n),s=n instanceof Error?n.stack:null,r="rgba(200,200,200, 0.5)",l={padding:"0.5rem",backgroundColor:r},d={padding:"2px 4px",backgroundColor:r},f=null;return console.error("Error handled by React Router default ErrorBoundary:",n),f=w.createElement(w.Fragment,null,w.createElement("p",null,"💿 Hey developer 👋"),w.createElement("p",null,"You can provide a way better UX than this when your app throws errors by providing your own ",w.createElement("code",{style:d},"ErrorBoundary")," or"," ",w.createElement("code",{style:d},"errorElement")," prop on your route.")),w.createElement(w.Fragment,null,w.createElement("h2",null,"Unexpected Application Error!"),w.createElement("h3",{style:{fontStyle:"italic"}},i),s?w.createElement("pre",{style:l},s):null,f)}var uT=w.createElement(cT,null),sb=class extends w.Component{constructor(n){super(n),this.state={location:n.location,revalidation:n.revalidation,error:n.error}}static getDerivedStateFromError(n){return{error:n}}static getDerivedStateFromProps(n,i){return i.location!==n.location||i.revalidation!=="idle"&&n.revalidation==="idle"?{error:n.error,location:n.location,revalidation:n.revalidation}:{error:n.error!==void 0?n.error:i.error,location:i.location,revalidation:n.revalidation||i.revalidation}}componentDidCatch(n,i){this.props.onError?this.props.onError(n,i):console.error("React Router caught the following error during render",n)}render(){let n=this.state.error;if(this.context&&typeof n=="object"&&n&&"digest"in n&&typeof n.digest=="string"){const s=iT(n.digest);s&&(n=s)}let i=n!==void 0?w.createElement(fn.Provider,{value:this.props.routeContext},w.createElement(af.Provider,{value:n,children:this.props.component})):this.props.children;return this.context?w.createElement(dT,{error:n},i):i}};sb.contextType=JS;var Ku=new WeakMap;function dT({children:n,error:i}){let{basename:s}=w.useContext(Yt);if(typeof i=="object"&&i&&"digest"in i&&typeof i.digest=="string"){let r=aT(i.digest);if(r){let l=Ku.get(i);if(l)throw l;let d=Zv(r.location,s);if(Qv&&!Ku.get(i))if(d.isExternal||r.reloadDocument)window.location.href=d.absoluteURL||d.to;else{const f=Promise.resolve().then(()=>window.__reactRouterDataRouter.navigate(d.to,{replace:r.replace}));throw Ku.set(i,f),f}return w.createElement("meta",{httpEquiv:"refresh",content:`0;url=${d.absoluteURL||d.to}`})}}return n}function fT({routeContext:n,match:i,children:s}){let r=w.useContext(Ii);return r&&r.static&&r.staticContext&&(i.route.errorElement||i.route.ErrorBoundary)&&(r.staticContext._deepestRenderedBoundaryId=i.route.id),w.createElement(fn.Provider,{value:n},s)}function hT(n,i=[],s=null,r=null,l=null){if(n==null){if(!s)return null;if(s.errors)n=s.matches;else if(i.length===0&&!s.initialized&&s.matches.length>0)n=s.matches;else return null}let d=n,f=s?.errors;if(f!=null){let y=d.findIndex(b=>b.route.id&&f?.[b.route.id]!==void 0);Ue(y>=0,`Could not find a matching route for errors on route IDs: ${Object.keys(f).join(",")}`),d=d.slice(0,Math.min(d.length,y+1))}let h=!1,p=-1;if(s)for(let y=0;y<d.length;y++){let b=d[y];if((b.route.HydrateFallback||b.route.hydrateFallbackElement)&&(p=y),b.route.id){let{loaderData:S,errors:C}=s,R=b.route.loader&&!S.hasOwnProperty(b.route.id)&&(!C||C[b.route.id]===void 0);if(b.route.lazy||R){h=!0,p>=0?d=d.slice(0,p+1):d=[d[0]];break}}}let m=s&&r?(y,b)=>{r(y,{location:s.location,params:s.matches?.[0]?.params??{},unstable_pattern:QS(s.matches),errorInfo:b})}:void 0;return d.reduceRight((y,b,S)=>{let C,R=!1,A=null,D=null;s&&(C=f&&b.route.id?f[b.route.id]:void 0,A=b.route.errorElement||uT,h&&(p<0&&S===0?(ob("route-fallback",!1,"No `HydrateFallback` element provided to render during initial hydration"),R=!0,D=null):p===S&&(R=!0,D=b.route.hydrateFallbackElement||null)));let z=i.concat(d.slice(0,S+1)),O=()=>{let L;return C?L=A:R?L=D:b.route.Component?L=w.createElement(b.route.Component,null):b.route.element?L=b.route.element:L=y,w.createElement(fT,{match:b,routeContext:{outlet:y,matches:z,isDataRoute:s!=null},children:L})};return s&&(b.route.ErrorBoundary||b.route.errorElement||S===0)?w.createElement(sb,{location:s.location,revalidation:s.revalidation,component:A,error:C,children:O(),routeContext:{outlet:null,matches:z,isDataRoute:!0},onError:m}):O()},null)}function sf(n){return`${n} must be used within a data router.  See https://reactrouter.com/en/main/routers/picking-a-router.`}function mT(n){let i=w.useContext(Ii);return Ue(i,sf(n)),i}function pT(n){let i=w.useContext(ml);return Ue(i,sf(n)),i}function gT(n){let i=w.useContext(fn);return Ue(i,sf(n)),i}function of(n){let i=gT(n),s=i.matches[i.matches.length-1];return Ue(s.route.id,`${n} can only be used on routes that contain a unique "id"`),s.route.id}function yT(){return of("useRouteId")}function vT(){let n=w.useContext(af),i=pT("useRouteError"),s=of("useRouteError");return n!==void 0?n:i.errors?.[s]}function bT(){let{router:n}=mT("useNavigate"),i=of("useNavigate"),s=w.useRef(!1);return nb(()=>{s.current=!0}),w.useCallback(async(l,d={})=>{un(s.current,tb),s.current&&(typeof l=="number"?await n.navigate(l):await n.navigate(l,{fromRouteId:i,...d}))},[n,i])}var sy={};function ob(n,i,s){!i&&!sy[n]&&(sy[n]=!0,un(!1,s))}w.memo(xT);function xT({routes:n,future:i,state:s,onError:r}){return ib(n,void 0,s,r,i)}function Cd(n){Ue(!1,"A <Route> is only ever to be used as the child of <Routes> element, never rendered directly. Please wrap your <Route> in a <Routes>.")}function wT({basename:n="/",children:i=null,location:s,navigationType:r="POP",navigator:l,static:d=!1,unstable_useTransitions:f}){Ue(!lo(),"You cannot render a <Router> inside another <Router>. You should never have more than one in your app.");let h=n.replace(/^\/*/,"/"),p=w.useMemo(()=>({basename:h,navigator:l,static:d,unstable_useTransitions:f,future:{}}),[h,l,d,f]);typeof s=="string"&&(s=Hi(s));let{pathname:m="/",search:y="",hash:b="",state:S=null,key:C="default"}=s,R=w.useMemo(()=>{let A=jn(m,h);return A==null?null:{location:{pathname:A,search:y,hash:b,state:S,key:C},navigationType:r}},[h,m,y,b,S,C,r]);return un(R!=null,`<Router basename="${h}"> is not able to match the URL "${m}${y}${b}" because it does not start with the basename, so the <Router> won't render anything.`),R==null?null:w.createElement(Yt.Provider,{value:p},w.createElement(ro.Provider,{children:i,value:R}))}function ST({children:n,location:i}){return lT(Ad(n),i)}function Ad(n,i=[]){let s=[];return w.Children.forEach(n,(r,l)=>{if(!w.isValidElement(r))return;let d=[...i,l];if(r.type===w.Fragment){s.push.apply(s,Ad(r.props.children,d));return}Ue(r.type===Cd,`[${typeof r.type=="string"?r.type:r.type.name}] is not a <Route> component. All component children of <Routes> must be a <Route> or <React.Fragment>`),Ue(!r.props.index||!r.props.children,"An index route cannot have child routes.");let f={id:r.props.id||d.join("-"),caseSensitive:r.props.caseSensitive,element:r.props.element,Component:r.props.Component,index:r.props.index,path:r.props.path,middleware:r.props.middleware,loader:r.props.loader,action:r.props.action,hydrateFallbackElement:r.props.hydrateFallbackElement,HydrateFallback:r.props.HydrateFallback,errorElement:r.props.errorElement,ErrorBoundary:r.props.ErrorBoundary,hasErrorBoundary:r.props.hasErrorBoundary===!0||r.props.ErrorBoundary!=null||r.props.errorElement!=null,shouldRevalidate:r.props.shouldRevalidate,handle:r.props.handle,lazy:r.props.lazy};r.props.children&&(f.children=Ad(r.props.children,d)),s.push(f)}),s}var Hr="get",Ir="application/x-www-form-urlencoded";function pl(n){return typeof HTMLElement<"u"&&n instanceof HTMLElement}function TT(n){return pl(n)&&n.tagName.toLowerCase()==="button"}function CT(n){return pl(n)&&n.tagName.toLowerCase()==="form"}function AT(n){return pl(n)&&n.tagName.toLowerCase()==="input"}function ET(n){return!!(n.metaKey||n.altKey||n.ctrlKey||n.shiftKey)}function MT(n,i){return n.button===0&&(!i||i==="_self")&&!ET(n)}var Nr=null;function DT(){if(Nr===null)try{new FormData(document.createElement("form"),0),Nr=!1}catch{Nr=!0}return Nr}var RT=new Set(["application/x-www-form-urlencoded","multipart/form-data","text/plain"]);function Xu(n){return n!=null&&!RT.has(n)?(un(!1,`"${n}" is not a valid \`encType\` for \`<Form>\`/\`<fetcher.Form>\` and will default to "${Ir}"`),null):n}function kT(n,i){let s,r,l,d,f;if(CT(n)){let h=n.getAttribute("action");r=h?jn(h,i):null,s=n.getAttribute("method")||Hr,l=Xu(n.getAttribute("enctype"))||Ir,d=new FormData(n)}else if(TT(n)||AT(n)&&(n.type==="submit"||n.type==="image")){let h=n.form;if(h==null)throw new Error('Cannot submit a <button> or <input type="submit"> without a <form>');let p=n.getAttribute("formaction")||h.getAttribute("action");if(r=p?jn(p,i):null,s=n.getAttribute("formmethod")||h.getAttribute("method")||Hr,l=Xu(n.getAttribute("formenctype"))||Xu(h.getAttribute("enctype"))||Ir,d=new FormData(h,n),!DT()){let{name:m,type:y,value:b}=n;if(y==="image"){let S=m?`${m}.`:"";d.append(`${S}x`,"0"),d.append(`${S}y`,"0")}else m&&d.append(m,b)}}else{if(pl(n))throw new Error('Cannot submit element that is not <form>, <button>, or <input type="submit|image">');s=Hr,r=null,l=Ir,f=n}return d&&l==="text/plain"&&(f=d,d=void 0),{action:r,method:s.toLowerCase(),encType:l,formData:d,body:f}}Object.getOwnPropertyNames(Object.prototype).sort().join("\0");function rf(n,i){if(n===!1||n===null||typeof n>"u")throw new Error(i)}function zT(n,i,s,r){let l=typeof n=="string"?new URL(n,typeof window>"u"?"server://singlefetch/":window.location.origin):n;return s?l.pathname.endsWith("/")?l.pathname=`${l.pathname}_.${r}`:l.pathname=`${l.pathname}.${r}`:l.pathname==="/"?l.pathname=`_root.${r}`:i&&jn(l.pathname,i)==="/"?l.pathname=`${i.replace(/\/$/,"")}/_root.${r}`:l.pathname=`${l.pathname.replace(/\/$/,"")}.${r}`,l}async function NT(n,i){if(n.id in i)return i[n.id];try{let s=await import(n.module);return i[n.id]=s,s}catch(s){return console.error(`Error loading route module \`${n.module}\`, reloading page...`),console.error(s),window.__reactRouterContext&&window.__reactRouterContext.isSpaMode,window.location.reload(),new Promise(()=>{})}}function jT(n){return n==null?!1:n.href==null?n.rel==="preload"&&typeof n.imageSrcSet=="string"&&typeof n.imageSizes=="string":typeof n.rel=="string"&&typeof n.href=="string"}async function OT(n,i,s){let r=await Promise.all(n.map(async l=>{let d=i.routes[l.route.id];if(d){let f=await NT(d,s);return f.links?f.links():[]}return[]}));return VT(r.flat(1).filter(jT).filter(l=>l.rel==="stylesheet"||l.rel==="preload").map(l=>l.rel==="stylesheet"?{...l,rel:"prefetch",as:"style"}:{...l,rel:"prefetch"}))}function oy(n,i,s,r,l,d){let f=(p,m)=>s[m]?p.route.id!==s[m].route.id:!0,h=(p,m)=>s[m].pathname!==p.pathname||s[m].route.path?.endsWith("*")&&s[m].params["*"]!==p.params["*"];return d==="assets"?i.filter((p,m)=>f(p,m)||h(p,m)):d==="data"?i.filter((p,m)=>{let y=r.routes[p.route.id];if(!y||!y.hasLoader)return!1;if(f(p,m)||h(p,m))return!0;if(p.route.shouldRevalidate){let b=p.route.shouldRevalidate({currentUrl:new URL(l.pathname+l.search+l.hash,window.origin),currentParams:s[0]?.params||{},nextUrl:new URL(n,window.origin),nextParams:p.params,defaultShouldRevalidate:!0});if(typeof b=="boolean")return b}return!0}):[]}function BT(n,i,{includeHydrateFallback:s}={}){return LT(n.map(r=>{let l=i.routes[r.route.id];if(!l)return[];let d=[l.module];return l.clientActionModule&&(d=d.concat(l.clientActionModule)),l.clientLoaderModule&&(d=d.concat(l.clientLoaderModule)),s&&l.hydrateFallbackModule&&(d=d.concat(l.hydrateFallbackModule)),l.imports&&(d=d.concat(l.imports)),d}).flat(1))}function LT(n){return[...new Set(n)]}function PT(n){let i={},s=Object.keys(n).sort();for(let r of s)i[r]=n[r];return i}function VT(n,i){let s=new Set;return new Set(i),n.reduce((r,l)=>{let d=JSON.stringify(PT(l));return s.has(d)||(s.add(d),r.push({key:d,link:l})),r},[])}function rb(){let n=w.useContext(Ii);return rf(n,"You must render this element inside a <DataRouterContext.Provider> element"),n}function _T(){let n=w.useContext(ml);return rf(n,"You must render this element inside a <DataRouterStateContext.Provider> element"),n}var lf=w.createContext(void 0);lf.displayName="FrameworkContext";function lb(){let n=w.useContext(lf);return rf(n,"You must render this element inside a <HydratedRouter> element"),n}function UT(n,i){let s=w.useContext(lf),[r,l]=w.useState(!1),[d,f]=w.useState(!1),{onFocus:h,onBlur:p,onMouseEnter:m,onMouseLeave:y,onTouchStart:b}=i,S=w.useRef(null);w.useEffect(()=>{if(n==="render"&&f(!0),n==="viewport"){let A=z=>{z.forEach(O=>{f(O.isIntersecting)})},D=new IntersectionObserver(A,{threshold:.5});return S.current&&D.observe(S.current),()=>{D.disconnect()}}},[n]),w.useEffect(()=>{if(r){let A=setTimeout(()=>{f(!0)},100);return()=>{clearTimeout(A)}}},[r]);let C=()=>{l(!0)},R=()=>{l(!1),f(!1)};return s?n!=="intent"?[d,S,{}]:[d,S,{onFocus:Is(h,C),onBlur:Is(p,R),onMouseEnter:Is(m,C),onMouseLeave:Is(y,R),onTouchStart:Is(b,C)}]:[!1,S,{}]}function Is(n,i){return s=>{n&&n(s),s.defaultPrevented||i(s)}}function qT({page:n,...i}){let{router:s}=rb(),r=w.useMemo(()=>Gv(s.routes,n,s.basename),[s.routes,n,s.basename]);return r?w.createElement(HT,{page:n,matches:r,...i}):null}function FT(n){let{manifest:i,routeModules:s}=lb(),[r,l]=w.useState([]);return w.useEffect(()=>{let d=!1;return OT(n,i,s).then(f=>{d||l(f)}),()=>{d=!0}},[n,i,s]),r}function HT({page:n,matches:i,...s}){let r=Ia(),{future:l,manifest:d,routeModules:f}=lb(),{basename:h}=rb(),{loaderData:p,matches:m}=_T(),y=w.useMemo(()=>oy(n,i,m,d,r,"data"),[n,i,m,d,r]),b=w.useMemo(()=>oy(n,i,m,d,r,"assets"),[n,i,m,d,r]),S=w.useMemo(()=>{if(n===r.pathname+r.search+r.hash)return[];let A=new Set,D=!1;if(i.forEach(O=>{let L=d.routes[O.route.id];!L||!L.hasLoader||(!y.some(X=>X.route.id===O.route.id)&&O.route.id in p&&f[O.route.id]?.shouldRevalidate||L.hasClientLoader?D=!0:A.add(O.route.id))}),A.size===0)return[];let z=zT(n,h,l.unstable_trailingSlashAwareDataRequests,"data");return D&&A.size>0&&z.searchParams.set("_routes",i.filter(O=>A.has(O.route.id)).map(O=>O.route.id).join(",")),[z.pathname+z.search]},[h,l.unstable_trailingSlashAwareDataRequests,p,r,d,y,i,n,f]),C=w.useMemo(()=>BT(b,d),[b,d]),R=FT(b);return w.createElement(w.Fragment,null,S.map(A=>w.createElement("link",{key:A,rel:"prefetch",as:"fetch",href:A,...s})),C.map(A=>w.createElement("link",{key:A,rel:"modulepreload",href:A,...s})),R.map(({key:A,link:D})=>w.createElement("link",{key:A,nonce:s.nonce,...D,crossOrigin:D.crossOrigin??s.crossOrigin})))}function IT(...n){return i=>{n.forEach(s=>{typeof s=="function"?s(i):s!=null&&(s.current=i)})}}var GT=typeof window<"u"&&typeof window.document<"u"&&typeof window.document.createElement<"u";try{GT&&(window.__reactRouterVersion="7.13.0")}catch{}function YT({basename:n,children:i,unstable_useTransitions:s,window:r}){let l=w.useRef();l.current==null&&(l.current=AS({window:r,v5Compat:!0}));let d=l.current,[f,h]=w.useState({action:d.action,location:d.location}),p=w.useCallback(m=>{s===!1?h(m):w.startTransition(()=>h(m))},[s]);return w.useLayoutEffect(()=>d.listen(p),[d,p]),w.createElement(wT,{basename:n,children:i,location:f.location,navigationType:f.action,navigator:d,unstable_useTransitions:s})}var cb=/^(?:[a-z][a-z0-9+.-]*:|\/\/)/i,ha=w.forwardRef(function({onClick:i,discover:s="render",prefetch:r="none",relative:l,reloadDocument:d,replace:f,state:h,target:p,to:m,preventScrollReset:y,viewTransition:b,unstable_defaultShouldRevalidate:S,...C},R){let{basename:A,unstable_useTransitions:D}=w.useContext(Yt),z=typeof m=="string"&&cb.test(m),O=Zv(m,A);m=O.to;let L=sT(m,{relative:l}),[X,G,Z]=UT(r,C),K=QT(m,{replace:f,state:h,target:p,preventScrollReset:y,relative:l,viewTransition:b,unstable_defaultShouldRevalidate:S,unstable_useTransitions:D});function H(we){i&&i(we),we.defaultPrevented||K(we)}let se=w.createElement("a",{...C,...Z,href:O.absoluteURL||L,onClick:O.isExternal||d?i:H,ref:IT(R,G),target:p,"data-discover":!z&&s==="render"?"true":void 0});return X&&!z?w.createElement(w.Fragment,null,se,w.createElement(qT,{page:L})):se});ha.displayName="Link";var KT=w.forwardRef(function({"aria-current":i="page",caseSensitive:s=!1,className:r="",end:l=!1,style:d,to:f,viewTransition:h,children:p,...m},y){let b=co(f,{relative:m.relative}),S=Ia(),C=w.useContext(ml),{navigator:R,basename:A}=w.useContext(Yt),D=C!=null&&tC(b)&&h===!0,z=R.encodeLocation?R.encodeLocation(b).pathname:b.pathname,O=S.pathname,L=C&&C.navigation&&C.navigation.location?C.navigation.location.pathname:null;s||(O=O.toLowerCase(),L=L?L.toLowerCase():null,z=z.toLowerCase()),L&&A&&(L=jn(L,A)||L);const X=z!=="/"&&z.endsWith("/")?z.length-1:z.length;let G=O===z||!l&&O.startsWith(z)&&O.charAt(X)==="/",Z=L!=null&&(L===z||!l&&L.startsWith(z)&&L.charAt(z.length)==="/"),K={isActive:G,isPending:Z,isTransitioning:D},H=G?i:void 0,se;typeof r=="function"?se=r(K):se=[r,G?"active":null,Z?"pending":null,D?"transitioning":null].filter(Boolean).join(" ");let we=typeof d=="function"?d(K):d;return w.createElement(ha,{...m,"aria-current":H,className:se,ref:y,style:we,to:f,viewTransition:h},typeof p=="function"?p(K):p)});KT.displayName="NavLink";var XT=w.forwardRef(({discover:n="render",fetcherKey:i,navigate:s,reloadDocument:r,replace:l,state:d,method:f=Hr,action:h,onSubmit:p,relative:m,preventScrollReset:y,viewTransition:b,unstable_defaultShouldRevalidate:S,...C},R)=>{let{unstable_useTransitions:A}=w.useContext(Yt),D=$T(),z=eC(h,{relative:m}),O=f.toLowerCase()==="get"?"get":"post",L=typeof h=="string"&&cb.test(h),X=G=>{if(p&&p(G),G.defaultPrevented)return;G.preventDefault();let Z=G.nativeEvent.submitter,K=Z?.getAttribute("formmethod")||f,H=()=>D(Z||G.currentTarget,{fetcherKey:i,method:K,navigate:s,replace:l,state:d,relative:m,preventScrollReset:y,viewTransition:b,unstable_defaultShouldRevalidate:S});A&&s!==!1?w.startTransition(()=>H()):H()};return w.createElement("form",{ref:R,method:O,action:z,onSubmit:r?p:X,...C,"data-discover":!L&&n==="render"?"true":void 0})});XT.displayName="Form";function WT(n){return`${n} must be used within a data router.  See https://reactrouter.com/en/main/routers/picking-a-router.`}function ub(n){let i=w.useContext(Ii);return Ue(i,WT(n)),i}function QT(n,{target:i,replace:s,state:r,preventScrollReset:l,relative:d,viewTransition:f,unstable_defaultShouldRevalidate:h,unstable_useTransitions:p}={}){let m=ab(),y=Ia(),b=co(n,{relative:d});return w.useCallback(S=>{if(MT(S,i)){S.preventDefault();let C=s!==void 0?s:Js(y)===Js(b),R=()=>m(n,{replace:C,state:r,preventScrollReset:l,relative:d,viewTransition:f,unstable_defaultShouldRevalidate:h});p?w.startTransition(()=>R()):R()}},[y,m,b,s,r,i,n,l,d,f,h,p])}var ZT=0,JT=()=>`__${String(++ZT)}__`;function $T(){let{router:n}=ub("useSubmit"),{basename:i}=w.useContext(Yt),s=yT(),r=n.fetch,l=n.navigate;return w.useCallback(async(d,f={})=>{let{action:h,method:p,encType:m,formData:y,body:b}=kT(d,i);if(f.navigate===!1){let S=f.fetcherKey||JT();await r(S,s,f.action||h,{unstable_defaultShouldRevalidate:f.unstable_defaultShouldRevalidate,preventScrollReset:f.preventScrollReset,formData:y,body:b,formMethod:f.method||p,formEncType:f.encType||m,flushSync:f.flushSync})}else await l(f.action||h,{unstable_defaultShouldRevalidate:f.unstable_defaultShouldRevalidate,preventScrollReset:f.preventScrollReset,formData:y,body:b,formMethod:f.method||p,formEncType:f.encType||m,replace:f.replace,state:f.state,fromRouteId:s,flushSync:f.flushSync,viewTransition:f.viewTransition})},[r,l,i,s])}function eC(n,{relative:i}={}){let{basename:s}=w.useContext(Yt),r=w.useContext(fn);Ue(r,"useFormAction must be used inside a RouteContext");let[l]=r.matches.slice(-1),d={...co(n||".",{relative:i})},f=Ia();if(n==null){d.search=f.search;let h=new URLSearchParams(d.search),p=h.getAll("index");if(p.some(y=>y==="")){h.delete("index"),p.filter(b=>b).forEach(b=>h.append("index",b));let y=h.toString();d.search=y?`?${y}`:""}}return(!n||n===".")&&l.route.index&&(d.search=d.search?d.search.replace(/^\?/,"?index&"):"?index"),s!=="/"&&(d.pathname=d.pathname==="/"?s:Nn([s,d.pathname])),Js(d)}function tC(n,{relative:i}={}){let s=w.useContext($v);Ue(s!=null,"`useViewTransitionState` must be used within `react-router-dom`'s `RouterProvider`.  Did you accidentally import `RouterProvider` from `react-router`?");let{basename:r}=ub("useViewTransitionState"),l=co(n,{relative:i});if(!s.isTransitioning)return!1;let d=jn(s.currentLocation.pathname,r)||s.currentLocation.pathname,f=jn(s.nextLocation.pathname,r)||s.nextLocation.pathname;return el(l.pathname,f)!=null||el(l.pathname,d)!=null}var db=Iv();const nC=Hv(db),fb=w.createContext({});function aC(n){const i=w.useRef(null);return i.current===null&&(i.current=n()),i.current}const hb=typeof window<"u",iC=hb?w.useLayoutEffect:w.useEffect,cf=w.createContext(null);function uf(n,i){n.indexOf(i)===-1&&n.push(i)}function tl(n,i){const s=n.indexOf(i);s>-1&&n.splice(s,1)}const dn=(n,i,s)=>s>i?i:s<n?n:s;let df=()=>{};const On={},mb=n=>/^-?(?:\d+(?:\.\d+)?|\.\d+)$/u.test(n);function pb(n){return typeof n=="object"&&n!==null}const gb=n=>/^0[^.\s]+$/u.test(n);function ff(n){let i;return()=>(i===void 0&&(i=n()),i)}const Gt=n=>n,sC=(n,i)=>s=>i(n(s)),uo=(...n)=>n.reduce(sC),$s=(n,i,s)=>{const r=i-n;return r===0?1:(s-n)/r};class hf{constructor(){this.subscriptions=[]}add(i){return uf(this.subscriptions,i),()=>tl(this.subscriptions,i)}notify(i,s,r){const l=this.subscriptions.length;if(l)if(l===1)this.subscriptions[0](i,s,r);else for(let d=0;d<l;d++){const f=this.subscriptions[d];f&&f(i,s,r)}}getSize(){return this.subscriptions.length}clear(){this.subscriptions.length=0}}const Jt=n=>n*1e3,It=n=>n/1e3;function yb(n,i){return i?n*(1e3/i):0}const vb=(n,i,s)=>(((1-3*s+3*i)*n+(3*s-6*i))*n+3*i)*n,oC=1e-7,rC=12;function lC(n,i,s,r,l){let d,f,h=0;do f=i+(s-i)/2,d=vb(f,r,l)-n,d>0?s=f:i=f;while(Math.abs(d)>oC&&++h<rC);return f}function fo(n,i,s,r){if(n===i&&s===r)return Gt;const l=d=>lC(d,0,1,n,s);return d=>d===0||d===1?d:vb(l(d),i,r)}const bb=n=>i=>i<=.5?n(2*i)/2:(2-n(2*(1-i)))/2,xb=n=>i=>1-n(1-i),wb=fo(.33,1.53,.69,.99),mf=xb(wb),Sb=bb(mf),Tb=n=>(n*=2)<1?.5*mf(n):.5*(2-Math.pow(2,-10*(n-1))),pf=n=>1-Math.sin(Math.acos(n)),Cb=xb(pf),Ab=bb(pf),cC=fo(.42,0,1,1),uC=fo(0,0,.58,1),Eb=fo(.42,0,.58,1),dC=n=>Array.isArray(n)&&typeof n[0]!="number",Mb=n=>Array.isArray(n)&&typeof n[0]=="number",fC={linear:Gt,easeIn:cC,easeInOut:Eb,easeOut:uC,circIn:pf,circInOut:Ab,circOut:Cb,backIn:mf,backInOut:Sb,backOut:wb,anticipate:Tb},hC=n=>typeof n=="string",ry=n=>{if(Mb(n)){df(n.length===4);const[i,s,r,l]=n;return fo(i,s,r,l)}else if(hC(n))return fC[n];return n},jr=["setup","read","resolveKeyframes","preUpdate","update","preRender","render","postRender"];function mC(n,i){let s=new Set,r=new Set,l=!1,d=!1;const f=new WeakSet;let h={delta:0,timestamp:0,isProcessing:!1};function p(y){f.has(y)&&(m.schedule(y),n()),y(h)}const m={schedule:(y,b=!1,S=!1)=>{const R=S&&l?s:r;return b&&f.add(y),R.has(y)||R.add(y),y},cancel:y=>{r.delete(y),f.delete(y)},process:y=>{if(h=y,l){d=!0;return}l=!0,[s,r]=[r,s],s.forEach(p),s.clear(),l=!1,d&&(d=!1,m.process(y))}};return m}const pC=40;function Db(n,i){let s=!1,r=!0;const l={delta:0,timestamp:0,isProcessing:!1},d=()=>s=!0,f=jr.reduce((L,X)=>(L[X]=mC(d),L),{}),{setup:h,read:p,resolveKeyframes:m,preUpdate:y,update:b,preRender:S,render:C,postRender:R}=f,A=()=>{const L=On.useManualTiming?l.timestamp:performance.now();s=!1,On.useManualTiming||(l.delta=r?1e3/60:Math.max(Math.min(L-l.timestamp,pC),1)),l.timestamp=L,l.isProcessing=!0,h.process(l),p.process(l),m.process(l),y.process(l),b.process(l),S.process(l),C.process(l),R.process(l),l.isProcessing=!1,s&&i&&(r=!1,n(A))},D=()=>{s=!0,r=!0,l.isProcessing||n(A)};return{schedule:jr.reduce((L,X)=>{const G=f[X];return L[X]=(Z,K=!1,H=!1)=>(s||D(),G.schedule(Z,K,H)),L},{}),cancel:L=>{for(let X=0;X<jr.length;X++)f[jr[X]].cancel(L)},state:l,steps:f}}const{schedule:je,cancel:pa,state:ct,steps:Wu}=Db(typeof requestAnimationFrame<"u"?requestAnimationFrame:Gt,!0);let Gr;function gC(){Gr=void 0}const mt={now:()=>(Gr===void 0&&mt.set(ct.isProcessing||On.useManualTiming?ct.timestamp:performance.now()),Gr),set:n=>{Gr=n,queueMicrotask(gC)}},Rb=n=>i=>typeof i=="string"&&i.startsWith(n),kb=Rb("--"),yC=Rb("var(--"),gf=n=>yC(n)?vC.test(n.split("/*")[0].trim()):!1,vC=/var\(--(?:[\w-]+\s*|[\w-]+\s*,(?:\s*[^)(\s]|\s*\((?:[^)(]|\([^)(]*\))*\))+\s*)\)$/iu;function ly(n){return typeof n!="string"?!1:n.split("/*")[0].includes("var(--")}const Gi={test:n=>typeof n=="number",parse:parseFloat,transform:n=>n},eo={...Gi,transform:n=>dn(0,1,n)},Or={...Gi,default:1},Xs=n=>Math.round(n*1e5)/1e5,yf=/-?(?:\d+(?:\.\d+)?|\.\d+)/gu;function bC(n){return n==null}const xC=/^(?:#[\da-f]{3,8}|(?:rgb|hsl)a?\((?:-?[\d.]+%?[,\s]+){2}-?[\d.]+%?\s*(?:[,/]\s*)?(?:\b\d+(?:\.\d+)?|\.\d+)?%?\))$/iu,vf=(n,i)=>s=>!!(typeof s=="string"&&xC.test(s)&&s.startsWith(n)||i&&!bC(s)&&Object.prototype.hasOwnProperty.call(s,i)),zb=(n,i,s)=>r=>{if(typeof r!="string")return r;const[l,d,f,h]=r.match(yf);return{[n]:parseFloat(l),[i]:parseFloat(d),[s]:parseFloat(f),alpha:h!==void 0?parseFloat(h):1}},wC=n=>dn(0,255,n),Qu={...Gi,transform:n=>Math.round(wC(n))},Ua={test:vf("rgb","red"),parse:zb("red","green","blue"),transform:({red:n,green:i,blue:s,alpha:r=1})=>"rgba("+Qu.transform(n)+", "+Qu.transform(i)+", "+Qu.transform(s)+", "+Xs(eo.transform(r))+")"};function SC(n){let i="",s="",r="",l="";return n.length>5?(i=n.substring(1,3),s=n.substring(3,5),r=n.substring(5,7),l=n.substring(7,9)):(i=n.substring(1,2),s=n.substring(2,3),r=n.substring(3,4),l=n.substring(4,5),i+=i,s+=s,r+=r,l+=l),{red:parseInt(i,16),green:parseInt(s,16),blue:parseInt(r,16),alpha:l?parseInt(l,16)/255:1}}const Ed={test:vf("#"),parse:SC,transform:Ua.transform},ho=n=>({test:i=>typeof i=="string"&&i.endsWith(n)&&i.split(" ").length===1,parse:parseFloat,transform:i=>`${i}${n}`}),ua=ho("deg"),ln=ho("%"),te=ho("px"),TC=ho("vh"),CC=ho("vw"),cy={...ln,parse:n=>ln.parse(n)/100,transform:n=>ln.transform(n*100)},Bi={test:vf("hsl","hue"),parse:zb("hue","saturation","lightness"),transform:({hue:n,saturation:i,lightness:s,alpha:r=1})=>"hsla("+Math.round(n)+", "+ln.transform(Xs(i))+", "+ln.transform(Xs(s))+", "+Xs(eo.transform(r))+")"},Ze={test:n=>Ua.test(n)||Ed.test(n)||Bi.test(n),parse:n=>Ua.test(n)?Ua.parse(n):Bi.test(n)?Bi.parse(n):Ed.parse(n),transform:n=>typeof n=="string"?n:n.hasOwnProperty("red")?Ua.transform(n):Bi.transform(n),getAnimatableNone:n=>{const i=Ze.parse(n);return i.alpha=0,Ze.transform(i)}},AC=/(?:#[\da-f]{3,8}|(?:rgb|hsl)a?\((?:-?[\d.]+%?[,\s]+){2}-?[\d.]+%?\s*(?:[,/]\s*)?(?:\b\d+(?:\.\d+)?|\.\d+)?%?\))/giu;function EC(n){return isNaN(n)&&typeof n=="string"&&(n.match(yf)?.length||0)+(n.match(AC)?.length||0)>0}const Nb="number",jb="color",MC="var",DC="var(",uy="${}",RC=/var\s*\(\s*--(?:[\w-]+\s*|[\w-]+\s*,(?:\s*[^)(\s]|\s*\((?:[^)(]|\([^)(]*\))*\))+\s*)\)|#[\da-f]{3,8}|(?:rgb|hsl)a?\((?:-?[\d.]+%?[,\s]+){2}-?[\d.]+%?\s*(?:[,/]\s*)?(?:\b\d+(?:\.\d+)?|\.\d+)?%?\)|-?(?:\d+(?:\.\d+)?|\.\d+)/giu;function to(n){const i=n.toString(),s=[],r={color:[],number:[],var:[]},l=[];let d=0;const h=i.replace(RC,p=>(Ze.test(p)?(r.color.push(d),l.push(jb),s.push(Ze.parse(p))):p.startsWith(DC)?(r.var.push(d),l.push(MC),s.push(p)):(r.number.push(d),l.push(Nb),s.push(parseFloat(p))),++d,uy)).split(uy);return{values:s,split:h,indexes:r,types:l}}function Ob(n){return to(n).values}function Bb(n){const{split:i,types:s}=to(n),r=i.length;return l=>{let d="";for(let f=0;f<r;f++)if(d+=i[f],l[f]!==void 0){const h=s[f];h===Nb?d+=Xs(l[f]):h===jb?d+=Ze.transform(l[f]):d+=l[f]}return d}}const kC=n=>typeof n=="number"?0:Ze.test(n)?Ze.getAnimatableNone(n):n;function zC(n){const i=Ob(n);return Bb(n)(i.map(kC))}const ga={test:EC,parse:Ob,createTransformer:Bb,getAnimatableNone:zC};function Zu(n,i,s){return s<0&&(s+=1),s>1&&(s-=1),s<1/6?n+(i-n)*6*s:s<1/2?i:s<2/3?n+(i-n)*(2/3-s)*6:n}function NC({hue:n,saturation:i,lightness:s,alpha:r}){n/=360,i/=100,s/=100;let l=0,d=0,f=0;if(!i)l=d=f=s;else{const h=s<.5?s*(1+i):s+i-s*i,p=2*s-h;l=Zu(p,h,n+1/3),d=Zu(p,h,n),f=Zu(p,h,n-1/3)}return{red:Math.round(l*255),green:Math.round(d*255),blue:Math.round(f*255),alpha:r}}function nl(n,i){return s=>s>0?i:n}const _e=(n,i,s)=>n+(i-n)*s,Ju=(n,i,s)=>{const r=n*n,l=s*(i*i-r)+r;return l<0?0:Math.sqrt(l)},jC=[Ed,Ua,Bi],OC=n=>jC.find(i=>i.test(n));function dy(n){const i=OC(n);if(!i)return!1;let s=i.parse(n);return i===Bi&&(s=NC(s)),s}const fy=(n,i)=>{const s=dy(n),r=dy(i);if(!s||!r)return nl(n,i);const l={...s};return d=>(l.red=Ju(s.red,r.red,d),l.green=Ju(s.green,r.green,d),l.blue=Ju(s.blue,r.blue,d),l.alpha=_e(s.alpha,r.alpha,d),Ua.transform(l))},Md=new Set(["none","hidden"]);function BC(n,i){return Md.has(n)?s=>s<=0?n:i:s=>s>=1?i:n}function LC(n,i){return s=>_e(n,i,s)}function bf(n){return typeof n=="number"?LC:typeof n=="string"?gf(n)?nl:Ze.test(n)?fy:_C:Array.isArray(n)?Lb:typeof n=="object"?Ze.test(n)?fy:PC:nl}function Lb(n,i){const s=[...n],r=s.length,l=n.map((d,f)=>bf(d)(d,i[f]));return d=>{for(let f=0;f<r;f++)s[f]=l[f](d);return s}}function PC(n,i){const s={...n,...i},r={};for(const l in s)n[l]!==void 0&&i[l]!==void 0&&(r[l]=bf(n[l])(n[l],i[l]));return l=>{for(const d in r)s[d]=r[d](l);return s}}function VC(n,i){const s=[],r={color:0,var:0,number:0};for(let l=0;l<i.values.length;l++){const d=i.types[l],f=n.indexes[d][r[d]],h=n.values[f]??0;s[l]=h,r[d]++}return s}const _C=(n,i)=>{const s=ga.createTransformer(i),r=to(n),l=to(i);return r.indexes.var.length===l.indexes.var.length&&r.indexes.color.length===l.indexes.color.length&&r.indexes.number.length>=l.indexes.number.length?Md.has(n)&&!l.values.length||Md.has(i)&&!r.values.length?BC(n,i):uo(Lb(VC(r,l),l.values),s):nl(n,i)};function Pb(n,i,s){return typeof n=="number"&&typeof i=="number"&&typeof s=="number"?_e(n,i,s):bf(n)(n,i)}const UC=n=>{const i=({timestamp:s})=>n(s);return{start:(s=!0)=>je.update(i,s),stop:()=>pa(i),now:()=>ct.isProcessing?ct.timestamp:mt.now()}},Vb=(n,i,s=10)=>{let r="";const l=Math.max(Math.round(i/s),2);for(let d=0;d<l;d++)r+=Math.round(n(d/(l-1))*1e4)/1e4+", ";return`linear(${r.substring(0,r.length-2)})`},al=2e4;function xf(n){let i=0;const s=50;let r=n.next(i);for(;!r.done&&i<al;)i+=s,r=n.next(i);return i>=al?1/0:i}function qC(n,i=100,s){const r=s({...n,keyframes:[0,i]}),l=Math.min(xf(r),al);return{type:"keyframes",ease:d=>r.next(l*d).value/i,duration:It(l)}}const FC=5;function _b(n,i,s){const r=Math.max(i-FC,0);return yb(s-n(r),i-r)}const He={stiffness:100,damping:10,mass:1,velocity:0,duration:800,bounce:.3,visualDuration:.3,restSpeed:{granular:.01,default:2},restDelta:{granular:.005,default:.5},minDuration:.01,maxDuration:10,minDamping:.05,maxDamping:1},$u=.001;function HC({duration:n=He.duration,bounce:i=He.bounce,velocity:s=He.velocity,mass:r=He.mass}){let l,d,f=1-i;f=dn(He.minDamping,He.maxDamping,f),n=dn(He.minDuration,He.maxDuration,It(n)),f<1?(l=m=>{const y=m*f,b=y*n,S=y-s,C=Dd(m,f),R=Math.exp(-b);return $u-S/C*R},d=m=>{const b=m*f*n,S=b*s+s,C=Math.pow(f,2)*Math.pow(m,2)*n,R=Math.exp(-b),A=Dd(Math.pow(m,2),f);return(-l(m)+$u>0?-1:1)*((S-C)*R)/A}):(l=m=>{const y=Math.exp(-m*n),b=(m-s)*n+1;return-$u+y*b},d=m=>{const y=Math.exp(-m*n),b=(s-m)*(n*n);return y*b});const h=5/n,p=GC(l,d,h);if(n=Jt(n),isNaN(p))return{stiffness:He.stiffness,damping:He.damping,duration:n};{const m=Math.pow(p,2)*r;return{stiffness:m,damping:f*2*Math.sqrt(r*m),duration:n}}}const IC=12;function GC(n,i,s){let r=s;for(let l=1;l<IC;l++)r=r-n(r)/i(r);return r}function Dd(n,i){return n*Math.sqrt(1-i*i)}const YC=["duration","bounce"],KC=["stiffness","damping","mass"];function hy(n,i){return i.some(s=>n[s]!==void 0)}function XC(n){let i={velocity:He.velocity,stiffness:He.stiffness,damping:He.damping,mass:He.mass,isResolvedFromDuration:!1,...n};if(!hy(n,KC)&&hy(n,YC))if(n.visualDuration){const s=n.visualDuration,r=2*Math.PI/(s*1.2),l=r*r,d=2*dn(.05,1,1-(n.bounce||0))*Math.sqrt(l);i={...i,mass:He.mass,stiffness:l,damping:d}}else{const s=HC(n);i={...i,...s,mass:He.mass},i.isResolvedFromDuration=!0}return i}function il(n=He.visualDuration,i=He.bounce){const s=typeof n!="object"?{visualDuration:n,keyframes:[0,1],bounce:i}:n;let{restSpeed:r,restDelta:l}=s;const d=s.keyframes[0],f=s.keyframes[s.keyframes.length-1],h={done:!1,value:d},{stiffness:p,damping:m,mass:y,duration:b,velocity:S,isResolvedFromDuration:C}=XC({...s,velocity:-It(s.velocity||0)}),R=S||0,A=m/(2*Math.sqrt(p*y)),D=f-d,z=It(Math.sqrt(p/y)),O=Math.abs(D)<5;r||(r=O?He.restSpeed.granular:He.restSpeed.default),l||(l=O?He.restDelta.granular:He.restDelta.default);let L;if(A<1){const G=Dd(z,A);L=Z=>{const K=Math.exp(-A*z*Z);return f-K*((R+A*z*D)/G*Math.sin(G*Z)+D*Math.cos(G*Z))}}else if(A===1)L=G=>f-Math.exp(-z*G)*(D+(R+z*D)*G);else{const G=z*Math.sqrt(A*A-1);L=Z=>{const K=Math.exp(-A*z*Z),H=Math.min(G*Z,300);return f-K*((R+A*z*D)*Math.sinh(H)+G*D*Math.cosh(H))/G}}const X={calculatedDuration:C&&b||null,next:G=>{const Z=L(G);if(C)h.done=G>=b;else{let K=G===0?R:0;A<1&&(K=G===0?Jt(R):_b(L,G,Z));const H=Math.abs(K)<=r,se=Math.abs(f-Z)<=l;h.done=H&&se}return h.value=h.done?f:Z,h},toString:()=>{const G=Math.min(xf(X),al),Z=Vb(K=>X.next(G*K).value,G,30);return G+"ms "+Z},toTransition:()=>{}};return X}il.applyToOptions=n=>{const i=qC(n,100,il);return n.ease=i.ease,n.duration=Jt(i.duration),n.type="keyframes",n};function Rd({keyframes:n,velocity:i=0,power:s=.8,timeConstant:r=325,bounceDamping:l=10,bounceStiffness:d=500,modifyTarget:f,min:h,max:p,restDelta:m=.5,restSpeed:y}){const b=n[0],S={done:!1,value:b},C=H=>h!==void 0&&H<h||p!==void 0&&H>p,R=H=>h===void 0?p:p===void 0||Math.abs(h-H)<Math.abs(p-H)?h:p;let A=s*i;const D=b+A,z=f===void 0?D:f(D);z!==D&&(A=z-b);const O=H=>-A*Math.exp(-H/r),L=H=>z+O(H),X=H=>{const se=O(H),we=L(H);S.done=Math.abs(se)<=m,S.value=S.done?z:we};let G,Z;const K=H=>{C(S.value)&&(G=H,Z=il({keyframes:[S.value,R(S.value)],velocity:_b(L,H,S.value),damping:l,stiffness:d,restDelta:m,restSpeed:y}))};return K(0),{calculatedDuration:null,next:H=>{let se=!1;return!Z&&G===void 0&&(se=!0,X(H),K(H)),G!==void 0&&H>=G?Z.next(H-G):(!se&&X(H),S)}}}function WC(n,i,s){const r=[],l=s||On.mix||Pb,d=n.length-1;for(let f=0;f<d;f++){let h=l(n[f],n[f+1]);if(i){const p=Array.isArray(i)?i[f]||Gt:i;h=uo(p,h)}r.push(h)}return r}function QC(n,i,{clamp:s=!0,ease:r,mixer:l}={}){const d=n.length;if(df(d===i.length),d===1)return()=>i[0];if(d===2&&i[0]===i[1])return()=>i[1];const f=n[0]===n[1];n[0]>n[d-1]&&(n=[...n].reverse(),i=[...i].reverse());const h=WC(i,r,l),p=h.length,m=y=>{if(f&&y<n[0])return i[0];let b=0;if(p>1)for(;b<n.length-2&&!(y<n[b+1]);b++);const S=$s(n[b],n[b+1],y);return h[b](S)};return s?y=>m(dn(n[0],n[d-1],y)):m}function ZC(n,i){const s=n[n.length-1];for(let r=1;r<=i;r++){const l=$s(0,i,r);n.push(_e(s,1,l))}}function JC(n){const i=[0];return ZC(i,n.length-1),i}function $C(n,i){return n.map(s=>s*i)}function eA(n,i){return n.map(()=>i||Eb).splice(0,n.length-1)}function Ws({duration:n=300,keyframes:i,times:s,ease:r="easeInOut"}){const l=dC(r)?r.map(ry):ry(r),d={done:!1,value:i[0]},f=$C(s&&s.length===i.length?s:JC(i),n),h=QC(f,i,{ease:Array.isArray(l)?l:eA(i,l)});return{calculatedDuration:n,next:p=>(d.value=h(p),d.done=p>=n,d)}}const tA=n=>n!==null;function wf(n,{repeat:i,repeatType:s="loop"},r,l=1){const d=n.filter(tA),h=l<0||i&&s!=="loop"&&i%2===1?0:d.length-1;return!h||r===void 0?d[h]:r}const nA={decay:Rd,inertia:Rd,tween:Ws,keyframes:Ws,spring:il};function Ub(n){typeof n.type=="string"&&(n.type=nA[n.type])}class Sf{constructor(){this.updateFinished()}get finished(){return this._finished}updateFinished(){this._finished=new Promise(i=>{this.resolve=i})}notifyFinished(){this.resolve()}then(i,s){return this.finished.then(i,s)}}const aA=n=>n/100;class Tf extends Sf{constructor(i){super(),this.state="idle",this.startTime=null,this.isStopped=!1,this.currentTime=0,this.holdTime=null,this.playbackSpeed=1,this.stop=()=>{const{motionValue:s}=this.options;s&&s.updatedAt!==mt.now()&&this.tick(mt.now()),this.isStopped=!0,this.state!=="idle"&&(this.teardown(),this.options.onStop?.())},this.options=i,this.initAnimation(),this.play(),i.autoplay===!1&&this.pause()}initAnimation(){const{options:i}=this;Ub(i);const{type:s=Ws,repeat:r=0,repeatDelay:l=0,repeatType:d,velocity:f=0}=i;let{keyframes:h}=i;const p=s||Ws;p!==Ws&&typeof h[0]!="number"&&(this.mixKeyframes=uo(aA,Pb(h[0],h[1])),h=[0,100]);const m=p({...i,keyframes:h});d==="mirror"&&(this.mirroredGenerator=p({...i,keyframes:[...h].reverse(),velocity:-f})),m.calculatedDuration===null&&(m.calculatedDuration=xf(m));const{calculatedDuration:y}=m;this.calculatedDuration=y,this.resolvedDuration=y+l,this.totalDuration=this.resolvedDuration*(r+1)-l,this.generator=m}updateTime(i){const s=Math.round(i-this.startTime)*this.playbackSpeed;this.holdTime!==null?this.currentTime=this.holdTime:this.currentTime=s}tick(i,s=!1){const{generator:r,totalDuration:l,mixKeyframes:d,mirroredGenerator:f,resolvedDuration:h,calculatedDuration:p}=this;if(this.startTime===null)return r.next(0);const{delay:m=0,keyframes:y,repeat:b,repeatType:S,repeatDelay:C,type:R,onUpdate:A,finalKeyframe:D}=this.options;this.speed>0?this.startTime=Math.min(this.startTime,i):this.speed<0&&(this.startTime=Math.min(i-l/this.speed,this.startTime)),s?this.currentTime=i:this.updateTime(i);const z=this.currentTime-m*(this.playbackSpeed>=0?1:-1),O=this.playbackSpeed>=0?z<0:z>l;this.currentTime=Math.max(z,0),this.state==="finished"&&this.holdTime===null&&(this.currentTime=l);let L=this.currentTime,X=r;if(b){const H=Math.min(this.currentTime,l)/h;let se=Math.floor(H),we=H%1;!we&&H>=1&&(we=1),we===1&&se--,se=Math.min(se,b+1),se%2&&(S==="reverse"?(we=1-we,C&&(we-=C/h)):S==="mirror"&&(X=f)),L=dn(0,1,we)*h}const G=O?{done:!1,value:y[0]}:X.next(L);d&&(G.value=d(G.value));let{done:Z}=G;!O&&p!==null&&(Z=this.playbackSpeed>=0?this.currentTime>=l:this.currentTime<=0);const K=this.holdTime===null&&(this.state==="finished"||this.state==="running"&&Z);return K&&R!==Rd&&(G.value=wf(y,this.options,D,this.speed)),A&&A(G.value),K&&this.finish(),G}then(i,s){return this.finished.then(i,s)}get duration(){return It(this.calculatedDuration)}get iterationDuration(){const{delay:i=0}=this.options||{};return this.duration+It(i)}get time(){return It(this.currentTime)}set time(i){i=Jt(i),this.currentTime=i,this.startTime===null||this.holdTime!==null||this.playbackSpeed===0?this.holdTime=i:this.driver&&(this.startTime=this.driver.now()-i/this.playbackSpeed),this.driver?.start(!1)}get speed(){return this.playbackSpeed}set speed(i){this.updateTime(mt.now());const s=this.playbackSpeed!==i;this.playbackSpeed=i,s&&(this.time=It(this.currentTime))}play(){if(this.isStopped)return;const{driver:i=UC,startTime:s}=this.options;this.driver||(this.driver=i(l=>this.tick(l))),this.options.onPlay?.();const r=this.driver.now();this.state==="finished"?(this.updateFinished(),this.startTime=r):this.holdTime!==null?this.startTime=r-this.holdTime:this.startTime||(this.startTime=s??r),this.state==="finished"&&this.speed<0&&(this.startTime+=this.calculatedDuration),this.holdTime=null,this.state="running",this.driver.start()}pause(){this.state="paused",this.updateTime(mt.now()),this.holdTime=this.currentTime}complete(){this.state!=="running"&&this.play(),this.state="finished",this.holdTime=null}finish(){this.notifyFinished(),this.teardown(),this.state="finished",this.options.onComplete?.()}cancel(){this.holdTime=null,this.startTime=0,this.tick(0),this.teardown(),this.options.onCancel?.()}teardown(){this.state="idle",this.stopDriver(),this.startTime=this.holdTime=null}stopDriver(){this.driver&&(this.driver.stop(),this.driver=void 0)}sample(i){return this.startTime=0,this.tick(i,!0)}attachTimeline(i){return this.options.allowFlatten&&(this.options.type="keyframes",this.options.ease="linear",this.initAnimation()),this.driver?.stop(),i.observe(this)}}function iA(n){for(let i=1;i<n.length;i++)n[i]??(n[i]=n[i-1])}const qa=n=>n*180/Math.PI,kd=n=>{const i=qa(Math.atan2(n[1],n[0]));return zd(i)},sA={x:4,y:5,translateX:4,translateY:5,scaleX:0,scaleY:3,scale:n=>(Math.abs(n[0])+Math.abs(n[3]))/2,rotate:kd,rotateZ:kd,skewX:n=>qa(Math.atan(n[1])),skewY:n=>qa(Math.atan(n[2])),skew:n=>(Math.abs(n[1])+Math.abs(n[2]))/2},zd=n=>(n=n%360,n<0&&(n+=360),n),my=kd,py=n=>Math.sqrt(n[0]*n[0]+n[1]*n[1]),gy=n=>Math.sqrt(n[4]*n[4]+n[5]*n[5]),oA={x:12,y:13,z:14,translateX:12,translateY:13,translateZ:14,scaleX:py,scaleY:gy,scale:n=>(py(n)+gy(n))/2,rotateX:n=>zd(qa(Math.atan2(n[6],n[5]))),rotateY:n=>zd(qa(Math.atan2(-n[2],n[0]))),rotateZ:my,rotate:my,skewX:n=>qa(Math.atan(n[4])),skewY:n=>qa(Math.atan(n[1])),skew:n=>(Math.abs(n[1])+Math.abs(n[4]))/2};function Nd(n){return n.includes("scale")?1:0}function jd(n,i){if(!n||n==="none")return Nd(i);const s=n.match(/^matrix3d\(([-\d.e\s,]+)\)$/u);let r,l;if(s)r=oA,l=s;else{const h=n.match(/^matrix\(([-\d.e\s,]+)\)$/u);r=sA,l=h}if(!l)return Nd(i);const d=r[i],f=l[1].split(",").map(lA);return typeof d=="function"?d(f):f[d]}const rA=(n,i)=>{const{transform:s="none"}=getComputedStyle(n);return jd(s,i)};function lA(n){return parseFloat(n.trim())}const Yi=["transformPerspective","x","y","z","translateX","translateY","translateZ","scale","scaleX","scaleY","rotate","rotateX","rotateY","rotateZ","skew","skewX","skewY"],Ki=new Set(Yi),yy=n=>n===Gi||n===te,cA=new Set(["x","y","z"]),uA=Yi.filter(n=>!cA.has(n));function dA(n){const i=[];return uA.forEach(s=>{const r=n.getValue(s);r!==void 0&&(i.push([s,r.get()]),r.set(s.startsWith("scale")?1:0))}),i}const fa={width:({x:n},{paddingLeft:i="0",paddingRight:s="0"})=>n.max-n.min-parseFloat(i)-parseFloat(s),height:({y:n},{paddingTop:i="0",paddingBottom:s="0"})=>n.max-n.min-parseFloat(i)-parseFloat(s),top:(n,{top:i})=>parseFloat(i),left:(n,{left:i})=>parseFloat(i),bottom:({y:n},{top:i})=>parseFloat(i)+(n.max-n.min),right:({x:n},{left:i})=>parseFloat(i)+(n.max-n.min),x:(n,{transform:i})=>jd(i,"x"),y:(n,{transform:i})=>jd(i,"y")};fa.translateX=fa.x;fa.translateY=fa.y;const Fa=new Set;let Od=!1,Bd=!1,Ld=!1;function qb(){if(Bd){const n=Array.from(Fa).filter(r=>r.needsMeasurement),i=new Set(n.map(r=>r.element)),s=new Map;i.forEach(r=>{const l=dA(r);l.length&&(s.set(r,l),r.render())}),n.forEach(r=>r.measureInitialState()),i.forEach(r=>{r.render();const l=s.get(r);l&&l.forEach(([d,f])=>{r.getValue(d)?.set(f)})}),n.forEach(r=>r.measureEndState()),n.forEach(r=>{r.suspendedScrollY!==void 0&&window.scrollTo(0,r.suspendedScrollY)})}Bd=!1,Od=!1,Fa.forEach(n=>n.complete(Ld)),Fa.clear()}function Fb(){Fa.forEach(n=>{n.readKeyframes(),n.needsMeasurement&&(Bd=!0)})}function fA(){Ld=!0,Fb(),qb(),Ld=!1}class Cf{constructor(i,s,r,l,d,f=!1){this.state="pending",this.isAsync=!1,this.needsMeasurement=!1,this.unresolvedKeyframes=[...i],this.onComplete=s,this.name=r,this.motionValue=l,this.element=d,this.isAsync=f}scheduleResolve(){this.state="scheduled",this.isAsync?(Fa.add(this),Od||(Od=!0,je.read(Fb),je.resolveKeyframes(qb))):(this.readKeyframes(),this.complete())}readKeyframes(){const{unresolvedKeyframes:i,name:s,element:r,motionValue:l}=this;if(i[0]===null){const d=l?.get(),f=i[i.length-1];if(d!==void 0)i[0]=d;else if(r&&s){const h=r.readValue(s,f);h!=null&&(i[0]=h)}i[0]===void 0&&(i[0]=f),l&&d===void 0&&l.set(i[0])}iA(i)}setFinalKeyframe(){}measureInitialState(){}renderEndStyles(){}measureEndState(){}complete(i=!1){this.state="complete",this.onComplete(this.unresolvedKeyframes,this.finalKeyframe,i),Fa.delete(this)}cancel(){this.state==="scheduled"&&(Fa.delete(this),this.state="pending")}resume(){this.state==="pending"&&this.scheduleResolve()}}const hA=n=>n.startsWith("--");function mA(n,i,s){hA(i)?n.style.setProperty(i,s):n.style[i]=s}const pA=ff(()=>window.ScrollTimeline!==void 0),gA={};function yA(n,i){const s=ff(n);return()=>gA[i]??s()}const Hb=yA(()=>{try{document.createElement("div").animate({opacity:0},{easing:"linear(0, 1)"})}catch{return!1}return!0},"linearEasing"),Ks=([n,i,s,r])=>`cubic-bezier(${n}, ${i}, ${s}, ${r})`,vy={linear:"linear",ease:"ease",easeIn:"ease-in",easeOut:"ease-out",easeInOut:"ease-in-out",circIn:Ks([0,.65,.55,1]),circOut:Ks([.55,0,1,.45]),backIn:Ks([.31,.01,.66,-.59]),backOut:Ks([.33,1.53,.69,.99])};function Ib(n,i){if(n)return typeof n=="function"?Hb()?Vb(n,i):"ease-out":Mb(n)?Ks(n):Array.isArray(n)?n.map(s=>Ib(s,i)||vy.easeOut):vy[n]}function vA(n,i,s,{delay:r=0,duration:l=300,repeat:d=0,repeatType:f="loop",ease:h="easeOut",times:p}={},m=void 0){const y={[i]:s};p&&(y.offset=p);const b=Ib(h,l);Array.isArray(b)&&(y.easing=b);const S={delay:r,duration:l,easing:Array.isArray(b)?"linear":b,fill:"both",iterations:d+1,direction:f==="reverse"?"alternate":"normal"};return m&&(S.pseudoElement=m),n.animate(y,S)}function Gb(n){return typeof n=="function"&&"applyToOptions"in n}function bA({type:n,...i}){return Gb(n)&&Hb()?n.applyToOptions(i):(i.duration??(i.duration=300),i.ease??(i.ease="easeOut"),i)}class Yb extends Sf{constructor(i){if(super(),this.finishedTime=null,this.isStopped=!1,this.manualStartTime=null,!i)return;const{element:s,name:r,keyframes:l,pseudoElement:d,allowFlatten:f=!1,finalKeyframe:h,onComplete:p}=i;this.isPseudoElement=!!d,this.allowFlatten=f,this.options=i,df(typeof i.type!="string");const m=bA(i);this.animation=vA(s,r,l,m,d),m.autoplay===!1&&this.animation.pause(),this.animation.onfinish=()=>{if(this.finishedTime=this.time,!d){const y=wf(l,this.options,h,this.speed);this.updateMotionValue?this.updateMotionValue(y):mA(s,r,y),this.animation.cancel()}p?.(),this.notifyFinished()}}play(){this.isStopped||(this.manualStartTime=null,this.animation.play(),this.state==="finished"&&this.updateFinished())}pause(){this.animation.pause()}complete(){this.animation.finish?.()}cancel(){try{this.animation.cancel()}catch{}}stop(){if(this.isStopped)return;this.isStopped=!0;const{state:i}=this;i==="idle"||i==="finished"||(this.updateMotionValue?this.updateMotionValue():this.commitStyles(),this.isPseudoElement||this.cancel())}commitStyles(){const i=this.options?.element;!this.isPseudoElement&&i?.isConnected&&this.animation.commitStyles?.()}get duration(){const i=this.animation.effect?.getComputedTiming?.().duration||0;return It(Number(i))}get iterationDuration(){const{delay:i=0}=this.options||{};return this.duration+It(i)}get time(){return It(Number(this.animation.currentTime)||0)}set time(i){this.manualStartTime=null,this.finishedTime=null,this.animation.currentTime=Jt(i)}get speed(){return this.animation.playbackRate}set speed(i){i<0&&(this.finishedTime=null),this.animation.playbackRate=i}get state(){return this.finishedTime!==null?"finished":this.animation.playState}get startTime(){return this.manualStartTime??Number(this.animation.startTime)}set startTime(i){this.manualStartTime=this.animation.startTime=i}attachTimeline({timeline:i,observe:s}){return this.allowFlatten&&this.animation.effect?.updateTiming({easing:"linear"}),this.animation.onfinish=null,i&&pA()?(this.animation.timeline=i,Gt):s(this)}}const Kb={anticipate:Tb,backInOut:Sb,circInOut:Ab};function xA(n){return n in Kb}function wA(n){typeof n.ease=="string"&&xA(n.ease)&&(n.ease=Kb[n.ease])}const ed=10;class SA extends Yb{constructor(i){wA(i),Ub(i),super(i),i.startTime!==void 0&&(this.startTime=i.startTime),this.options=i}updateMotionValue(i){const{motionValue:s,onUpdate:r,onComplete:l,element:d,...f}=this.options;if(!s)return;if(i!==void 0){s.set(i);return}const h=new Tf({...f,autoplay:!1}),p=Math.max(ed,mt.now()-this.startTime),m=dn(0,ed,p-ed);s.setWithVelocity(h.sample(Math.max(0,p-m)).value,h.sample(p).value,m),h.stop()}}const by=(n,i)=>i==="zIndex"?!1:!!(typeof n=="number"||Array.isArray(n)||typeof n=="string"&&(ga.test(n)||n==="0")&&!n.startsWith("url("));function TA(n){const i=n[0];if(n.length===1)return!0;for(let s=0;s<n.length;s++)if(n[s]!==i)return!0}function CA(n,i,s,r){const l=n[0];if(l===null)return!1;if(i==="display"||i==="visibility")return!0;const d=n[n.length-1],f=by(l,i),h=by(d,i);return!f||!h?!1:TA(n)||(s==="spring"||Gb(s))&&r}function Pd(n){n.duration=0,n.type="keyframes"}const AA=new Set(["opacity","clipPath","filter","transform"]),EA=ff(()=>Object.hasOwnProperty.call(Element.prototype,"animate"));function MA(n){const{motionValue:i,name:s,repeatDelay:r,repeatType:l,damping:d,type:f}=n;if(!(i?.owner?.current instanceof HTMLElement))return!1;const{onUpdate:p,transformTemplate:m}=i.owner.getProps();return EA()&&s&&AA.has(s)&&(s!=="transform"||!m)&&!p&&!r&&l!=="mirror"&&d!==0&&f!=="inertia"}const DA=40;class RA extends Sf{constructor({autoplay:i=!0,delay:s=0,type:r="keyframes",repeat:l=0,repeatDelay:d=0,repeatType:f="loop",keyframes:h,name:p,motionValue:m,element:y,...b}){super(),this.stop=()=>{this._animation&&(this._animation.stop(),this.stopTimeline?.()),this.keyframeResolver?.cancel()},this.createdAt=mt.now();const S={autoplay:i,delay:s,type:r,repeat:l,repeatDelay:d,repeatType:f,name:p,motionValue:m,element:y,...b},C=y?.KeyframeResolver||Cf;this.keyframeResolver=new C(h,(R,A,D)=>this.onKeyframesResolved(R,A,S,!D),p,m,y),this.keyframeResolver?.scheduleResolve()}onKeyframesResolved(i,s,r,l){this.keyframeResolver=void 0;const{name:d,type:f,velocity:h,delay:p,isHandoff:m,onUpdate:y}=r;this.resolvedAt=mt.now(),CA(i,d,f,h)||((On.instantAnimations||!p)&&y?.(wf(i,r,s)),i[0]=i[i.length-1],Pd(r),r.repeat=0);const S={startTime:l?this.resolvedAt?this.resolvedAt-this.createdAt>DA?this.resolvedAt:this.createdAt:this.createdAt:void 0,finalKeyframe:s,...r,keyframes:i},C=!m&&MA(S),R=S.motionValue?.owner?.current,A=C?new SA({...S,element:R}):new Tf(S);A.finished.then(()=>{this.notifyFinished()}).catch(Gt),this.pendingTimeline&&(this.stopTimeline=A.attachTimeline(this.pendingTimeline),this.pendingTimeline=void 0),this._animation=A}get finished(){return this._animation?this.animation.finished:this._finished}then(i,s){return this.finished.finally(i).then(()=>{})}get animation(){return this._animation||(this.keyframeResolver?.resume(),fA()),this._animation}get duration(){return this.animation.duration}get iterationDuration(){return this.animation.iterationDuration}get time(){return this.animation.time}set time(i){this.animation.time=i}get speed(){return this.animation.speed}get state(){return this.animation.state}set speed(i){this.animation.speed=i}get startTime(){return this.animation.startTime}attachTimeline(i){return this._animation?this.stopTimeline=this.animation.attachTimeline(i):this.pendingTimeline=i,()=>this.stop()}play(){this.animation.play()}pause(){this.animation.pause()}complete(){this.animation.complete()}cancel(){this._animation&&this.animation.cancel(),this.keyframeResolver?.cancel()}}function Xb(n,i,s,r=0,l=1){const d=Array.from(n).sort((m,y)=>m.sortNodePosition(y)).indexOf(i),f=n.size,h=(f-1)*r;return typeof s=="function"?s(d,f):l===1?d*r:h-d*r}const kA=/^var\(--(?:([\w-]+)|([\w-]+), ?([a-zA-Z\d ()%#.,-]+))\)/u;function zA(n){const i=kA.exec(n);if(!i)return[,];const[,s,r,l]=i;return[`--${s??r}`,l]}function Wb(n,i,s=1){const[r,l]=zA(n);if(!r)return;const d=window.getComputedStyle(i).getPropertyValue(r);if(d){const f=d.trim();return mb(f)?parseFloat(f):f}return gf(l)?Wb(l,i,s+1):l}const NA={type:"spring",stiffness:500,damping:25,restSpeed:10},jA=n=>({type:"spring",stiffness:550,damping:n===0?2*Math.sqrt(550):30,restSpeed:10}),OA={type:"keyframes",duration:.8},BA={type:"keyframes",ease:[.25,.1,.35,1],duration:.3},LA=(n,{keyframes:i})=>i.length>2?OA:Ki.has(n)?n.startsWith("scale")?jA(i[1]):NA:BA,PA=n=>n!==null;function VA(n,{repeat:i,repeatType:s="loop"},r){const l=n.filter(PA),d=i&&s!=="loop"&&i%2===1?0:l.length-1;return l[d]}function Qb(n,i){if(n?.inherit&&i){const{inherit:s,...r}=n;return{...i,...r}}return n}function Af(n,i){const s=n?.[i]??n?.default??n;return s!==n?Qb(s,n):s}function _A({when:n,delay:i,delayChildren:s,staggerChildren:r,staggerDirection:l,repeat:d,repeatType:f,repeatDelay:h,from:p,elapsed:m,...y}){return!!Object.keys(y).length}const Ef=(n,i,s,r={},l,d)=>f=>{const h=Af(r,n)||{},p=h.delay||r.delay||0;let{elapsed:m=0}=r;m=m-Jt(p);const y={keyframes:Array.isArray(s)?s:[null,s],ease:"easeOut",velocity:i.getVelocity(),...h,delay:-m,onUpdate:S=>{i.set(S),h.onUpdate&&h.onUpdate(S)},onComplete:()=>{f(),h.onComplete&&h.onComplete()},name:n,motionValue:i,element:d?void 0:l};_A(h)||Object.assign(y,LA(n,y)),y.duration&&(y.duration=Jt(y.duration)),y.repeatDelay&&(y.repeatDelay=Jt(y.repeatDelay)),y.from!==void 0&&(y.keyframes[0]=y.from);let b=!1;if((y.type===!1||y.duration===0&&!y.repeatDelay)&&(Pd(y),y.delay===0&&(b=!0)),(On.instantAnimations||On.skipAnimations||l?.shouldSkipAnimations)&&(b=!0,Pd(y),y.delay=0),y.allowFlatten=!h.type&&!h.ease,b&&!d&&i.get()!==void 0){const S=VA(y.keyframes,h);if(S!==void 0){je.update(()=>{y.onUpdate(S),y.onComplete()});return}}return h.isSync?new Tf(y):new RA(y)};function xy(n){const i=[{},{}];return n?.values.forEach((s,r)=>{i[0][r]=s.get(),i[1][r]=s.getVelocity()}),i}function Mf(n,i,s,r){if(typeof i=="function"){const[l,d]=xy(r);i=i(s!==void 0?s:n.custom,l,d)}if(typeof i=="string"&&(i=n.variants&&n.variants[i]),typeof i=="function"){const[l,d]=xy(r);i=i(s!==void 0?s:n.custom,l,d)}return i}function Ui(n,i,s){const r=n.getProps();return Mf(r,i,s!==void 0?s:r.custom,n)}const Zb=new Set(["width","height","top","left","right","bottom",...Yi]),wy=30,UA=n=>!isNaN(parseFloat(n));class qA{constructor(i,s={}){this.canTrackVelocity=null,this.events={},this.updateAndNotify=r=>{const l=mt.now();if(this.updatedAt!==l&&this.setPrevFrameValue(),this.prev=this.current,this.setCurrent(r),this.current!==this.prev&&(this.events.change?.notify(this.current),this.dependents))for(const d of this.dependents)d.dirty()},this.hasAnimated=!1,this.setCurrent(i),this.owner=s.owner}setCurrent(i){this.current=i,this.updatedAt=mt.now(),this.canTrackVelocity===null&&i!==void 0&&(this.canTrackVelocity=UA(this.current))}setPrevFrameValue(i=this.current){this.prevFrameValue=i,this.prevUpdatedAt=this.updatedAt}onChange(i){return this.on("change",i)}on(i,s){this.events[i]||(this.events[i]=new hf);const r=this.events[i].add(s);return i==="change"?()=>{r(),je.read(()=>{this.events.change.getSize()||this.stop()})}:r}clearListeners(){for(const i in this.events)this.events[i].clear()}attach(i,s){this.passiveEffect=i,this.stopPassiveEffect=s}set(i){this.passiveEffect?this.passiveEffect(i,this.updateAndNotify):this.updateAndNotify(i)}setWithVelocity(i,s,r){this.set(s),this.prev=void 0,this.prevFrameValue=i,this.prevUpdatedAt=this.updatedAt-r}jump(i,s=!0){this.updateAndNotify(i),this.prev=i,this.prevUpdatedAt=this.prevFrameValue=void 0,s&&this.stop(),this.stopPassiveEffect&&this.stopPassiveEffect()}dirty(){this.events.change?.notify(this.current)}addDependent(i){this.dependents||(this.dependents=new Set),this.dependents.add(i)}removeDependent(i){this.dependents&&this.dependents.delete(i)}get(){return this.current}getPrevious(){return this.prev}getVelocity(){const i=mt.now();if(!this.canTrackVelocity||this.prevFrameValue===void 0||i-this.updatedAt>wy)return 0;const s=Math.min(this.updatedAt-this.prevUpdatedAt,wy);return yb(parseFloat(this.current)-parseFloat(this.prevFrameValue),s)}start(i){return this.stop(),new Promise(s=>{this.hasAnimated=!0,this.animation=i(s),this.events.animationStart&&this.events.animationStart.notify()}).then(()=>{this.events.animationComplete&&this.events.animationComplete.notify(),this.clearAnimation()})}stop(){this.animation&&(this.animation.stop(),this.events.animationCancel&&this.events.animationCancel.notify()),this.clearAnimation()}isAnimating(){return!!this.animation}clearAnimation(){delete this.animation}destroy(){this.dependents?.clear(),this.events.destroy?.notify(),this.clearListeners(),this.stop(),this.stopPassiveEffect&&this.stopPassiveEffect()}}function Fi(n,i){return new qA(n,i)}const Vd=n=>Array.isArray(n);function FA(n,i,s){n.hasValue(i)?n.getValue(i).set(s):n.addValue(i,Fi(s))}function HA(n){return Vd(n)?n[n.length-1]||0:n}function IA(n,i){const s=Ui(n,i);let{transitionEnd:r={},transition:l={},...d}=s||{};d={...d,...r};for(const f in d){const h=HA(d[f]);FA(n,f,h)}}const ft=n=>!!(n&&n.getVelocity);function GA(n){return!!(ft(n)&&n.add)}function _d(n,i){const s=n.getValue("willChange");if(GA(s))return s.add(i);if(!s&&On.WillChange){const r=new On.WillChange("auto");n.addValue("willChange",r),r.add(i)}}function Df(n){return n.replace(/([A-Z])/g,i=>`-${i.toLowerCase()}`)}const YA="framerAppearId",Jb="data-"+Df(YA);function $b(n){return n.props[Jb]}function KA({protectedKeys:n,needsAnimating:i},s){const r=n.hasOwnProperty(s)&&i[s]!==!0;return i[s]=!1,r}function ex(n,i,{delay:s=0,transitionOverride:r,type:l}={}){let{transition:d,transitionEnd:f,...h}=i;const p=n.getDefaultTransition();d=d?Qb(d,p):p;const m=d?.reduceMotion;r&&(d=r);const y=[],b=l&&n.animationState&&n.animationState.getState()[l];for(const S in h){const C=n.getValue(S,n.latestValues[S]??null),R=h[S];if(R===void 0||b&&KA(b,S))continue;const A={delay:s,...Af(d||{},S)},D=C.get();if(D!==void 0&&!C.isAnimating&&!Array.isArray(R)&&R===D&&!A.velocity)continue;let z=!1;if(window.MotionHandoffAnimation){const X=$b(n);if(X){const G=window.MotionHandoffAnimation(X,S,je);G!==null&&(A.startTime=G,z=!0)}}_d(n,S);const O=m??n.shouldReduceMotion;C.start(Ef(S,C,R,O&&Zb.has(S)?{type:!1}:A,n,z));const L=C.animation;L&&y.push(L)}if(f){const S=()=>je.update(()=>{f&&IA(n,f)});y.length?Promise.all(y).then(S):S()}return y}function Ud(n,i,s={}){const r=Ui(n,i,s.type==="exit"?n.presenceContext?.custom:void 0);let{transition:l=n.getDefaultTransition()||{}}=r||{};s.transitionOverride&&(l=s.transitionOverride);const d=r?()=>Promise.all(ex(n,r,s)):()=>Promise.resolve(),f=n.variantChildren&&n.variantChildren.size?(p=0)=>{const{delayChildren:m=0,staggerChildren:y,staggerDirection:b}=l;return XA(n,i,p,m,y,b,s)}:()=>Promise.resolve(),{when:h}=l;if(h){const[p,m]=h==="beforeChildren"?[d,f]:[f,d];return p().then(()=>m())}else return Promise.all([d(),f(s.delay)])}function XA(n,i,s=0,r=0,l=0,d=1,f){const h=[];for(const p of n.variantChildren)p.notify("AnimationStart",i),h.push(Ud(p,i,{...f,delay:s+(typeof r=="function"?0:r)+Xb(n.variantChildren,p,r,l,d)}).then(()=>p.notify("AnimationComplete",i)));return Promise.all(h)}function WA(n,i,s={}){n.notify("AnimationStart",i);let r;if(Array.isArray(i)){const l=i.map(d=>Ud(n,d,s));r=Promise.all(l)}else if(typeof i=="string")r=Ud(n,i,s);else{const l=typeof i=="function"?Ui(n,i,s.custom):i;r=Promise.all(ex(n,l,s))}return r.then(()=>{n.notify("AnimationComplete",i)})}const QA={test:n=>n==="auto",parse:n=>n},tx=n=>i=>i.test(n),nx=[Gi,te,ln,ua,CC,TC,QA],Sy=n=>nx.find(tx(n));function ZA(n){return typeof n=="number"?n===0:n!==null?n==="none"||n==="0"||gb(n):!0}const JA=new Set(["brightness","contrast","saturate","opacity"]);function $A(n){const[i,s]=n.slice(0,-1).split("(");if(i==="drop-shadow")return n;const[r]=s.match(yf)||[];if(!r)return n;const l=s.replace(r,"");let d=JA.has(i)?1:0;return r!==s&&(d*=100),i+"("+d+l+")"}const e2=/\b([a-z-]*)\(.*?\)/gu,qd={...ga,getAnimatableNone:n=>{const i=n.match(e2);return i?i.map($A).join(" "):n}},Ty={...Gi,transform:Math.round},t2={rotate:ua,rotateX:ua,rotateY:ua,rotateZ:ua,scale:Or,scaleX:Or,scaleY:Or,scaleZ:Or,skew:ua,skewX:ua,skewY:ua,distance:te,translateX:te,translateY:te,translateZ:te,x:te,y:te,z:te,perspective:te,transformPerspective:te,opacity:eo,originX:cy,originY:cy,originZ:te},Rf={borderWidth:te,borderTopWidth:te,borderRightWidth:te,borderBottomWidth:te,borderLeftWidth:te,borderRadius:te,borderTopLeftRadius:te,borderTopRightRadius:te,borderBottomRightRadius:te,borderBottomLeftRadius:te,width:te,maxWidth:te,height:te,maxHeight:te,top:te,right:te,bottom:te,left:te,inset:te,insetBlock:te,insetBlockStart:te,insetBlockEnd:te,insetInline:te,insetInlineStart:te,insetInlineEnd:te,padding:te,paddingTop:te,paddingRight:te,paddingBottom:te,paddingLeft:te,paddingBlock:te,paddingBlockStart:te,paddingBlockEnd:te,paddingInline:te,paddingInlineStart:te,paddingInlineEnd:te,margin:te,marginTop:te,marginRight:te,marginBottom:te,marginLeft:te,marginBlock:te,marginBlockStart:te,marginBlockEnd:te,marginInline:te,marginInlineStart:te,marginInlineEnd:te,fontSize:te,backgroundPositionX:te,backgroundPositionY:te,...t2,zIndex:Ty,fillOpacity:eo,strokeOpacity:eo,numOctaves:Ty},n2={...Rf,color:Ze,backgroundColor:Ze,outlineColor:Ze,fill:Ze,stroke:Ze,borderColor:Ze,borderTopColor:Ze,borderRightColor:Ze,borderBottomColor:Ze,borderLeftColor:Ze,filter:qd,WebkitFilter:qd},ax=n=>n2[n];function ix(n,i){let s=ax(n);return s!==qd&&(s=ga),s.getAnimatableNone?s.getAnimatableNone(i):void 0}const a2=new Set(["auto","none","0"]);function i2(n,i,s){let r=0,l;for(;r<n.length&&!l;){const d=n[r];typeof d=="string"&&!a2.has(d)&&to(d).values.length&&(l=n[r]),r++}if(l&&s)for(const d of i)n[d]=ix(s,l)}class s2 extends Cf{constructor(i,s,r,l,d){super(i,s,r,l,d,!0)}readKeyframes(){const{unresolvedKeyframes:i,element:s,name:r}=this;if(!s||!s.current)return;super.readKeyframes();for(let y=0;y<i.length;y++){let b=i[y];if(typeof b=="string"&&(b=b.trim(),gf(b))){const S=Wb(b,s.current);S!==void 0&&(i[y]=S),y===i.length-1&&(this.finalKeyframe=b)}}if(this.resolveNoneKeyframes(),!Zb.has(r)||i.length!==2)return;const[l,d]=i,f=Sy(l),h=Sy(d),p=ly(l),m=ly(d);if(p!==m&&fa[r]){this.needsMeasurement=!0;return}if(f!==h)if(yy(f)&&yy(h))for(let y=0;y<i.length;y++){const b=i[y];typeof b=="string"&&(i[y]=parseFloat(b))}else fa[r]&&(this.needsMeasurement=!0)}resolveNoneKeyframes(){const{unresolvedKeyframes:i,name:s}=this,r=[];for(let l=0;l<i.length;l++)(i[l]===null||ZA(i[l]))&&r.push(l);r.length&&i2(i,r,s)}measureInitialState(){const{element:i,unresolvedKeyframes:s,name:r}=this;if(!i||!i.current)return;r==="height"&&(this.suspendedScrollY=window.pageYOffset),this.measuredOrigin=fa[r](i.measureViewportBox(),window.getComputedStyle(i.current)),s[0]=this.measuredOrigin;const l=s[s.length-1];l!==void 0&&i.getValue(r,l).jump(l,!1)}measureEndState(){const{element:i,name:s,unresolvedKeyframes:r}=this;if(!i||!i.current)return;const l=i.getValue(s);l&&l.jump(this.measuredOrigin,!1);const d=r.length-1,f=r[d];r[d]=fa[s](i.measureViewportBox(),window.getComputedStyle(i.current)),f!==null&&this.finalKeyframe===void 0&&(this.finalKeyframe=f),this.removedTransforms?.length&&this.removedTransforms.forEach(([h,p])=>{i.getValue(h).set(p)}),this.resolveNoneKeyframes()}}const o2=new Set(["opacity","clipPath","filter","transform"]);function sx(n,i,s){if(n==null)return[];if(n instanceof EventTarget)return[n];if(typeof n=="string"){let r=document;const l=s?.[n]??r.querySelectorAll(n);return l?Array.from(l):[]}return Array.from(n).filter(r=>r!=null)}const ox=(n,i)=>i&&typeof n=="number"?i.transform(n):n;function r2(n){return pb(n)&&"offsetHeight"in n}const{schedule:kf}=Db(queueMicrotask,!1),Zt={x:!1,y:!1};function rx(){return Zt.x||Zt.y}function l2(n){return n==="x"||n==="y"?Zt[n]?null:(Zt[n]=!0,()=>{Zt[n]=!1}):Zt.x||Zt.y?null:(Zt.x=Zt.y=!0,()=>{Zt.x=Zt.y=!1})}function lx(n,i){const s=sx(n),r=new AbortController,l={passive:!0,...i,signal:r.signal};return[s,l,()=>r.abort()]}function c2(n){return!(n.pointerType==="touch"||rx())}function u2(n,i,s={}){const[r,l,d]=lx(n,s);return r.forEach(f=>{let h=!1,p=!1,m;const y=()=>{f.removeEventListener("pointerleave",R)},b=D=>{m&&(m(D),m=void 0),y()},S=D=>{h=!1,window.removeEventListener("pointerup",S),window.removeEventListener("pointercancel",S),p&&(p=!1,b(D))},C=()=>{h=!0,window.addEventListener("pointerup",S,l),window.addEventListener("pointercancel",S,l)},R=D=>{if(D.pointerType!=="touch"){if(h){p=!0;return}b(D)}},A=D=>{if(!c2(D))return;p=!1;const z=i(f,D);typeof z=="function"&&(m=z,f.addEventListener("pointerleave",R,l))};f.addEventListener("pointerenter",A,l),f.addEventListener("pointerdown",C,l)}),d}const cx=(n,i)=>i?n===i?!0:cx(n,i.parentElement):!1,zf=n=>n.pointerType==="mouse"?typeof n.button!="number"||n.button<=0:n.isPrimary!==!1,d2=new Set(["BUTTON","INPUT","SELECT","TEXTAREA","A"]);function f2(n){return d2.has(n.tagName)||n.isContentEditable===!0}const h2=new Set(["INPUT","SELECT","TEXTAREA"]);function m2(n){return h2.has(n.tagName)||n.isContentEditable===!0}const Yr=new WeakSet;function Cy(n){return i=>{i.key==="Enter"&&n(i)}}function td(n,i){n.dispatchEvent(new PointerEvent("pointer"+i,{isPrimary:!0,bubbles:!0}))}const p2=(n,i)=>{const s=n.currentTarget;if(!s)return;const r=Cy(()=>{if(Yr.has(s))return;td(s,"down");const l=Cy(()=>{td(s,"up")}),d=()=>td(s,"cancel");s.addEventListener("keyup",l,i),s.addEventListener("blur",d,i)});s.addEventListener("keydown",r,i),s.addEventListener("blur",()=>s.removeEventListener("keydown",r),i)};function Ay(n){return zf(n)&&!rx()}const Ey=new WeakSet;function g2(n,i,s={}){const[r,l,d]=lx(n,s),f=h=>{const p=h.currentTarget;if(!Ay(h)||Ey.has(h))return;Yr.add(p),s.stopPropagation&&Ey.add(h);const m=i(p,h),y=(C,R)=>{window.removeEventListener("pointerup",b),window.removeEventListener("pointercancel",S),Yr.has(p)&&Yr.delete(p),Ay(C)&&typeof m=="function"&&m(C,{success:R})},b=C=>{y(C,p===window||p===document||s.useGlobalTarget||cx(p,C.target))},S=C=>{y(C,!1)};window.addEventListener("pointerup",b,l),window.addEventListener("pointercancel",S,l)};return r.forEach(h=>{(s.useGlobalTarget?window:h).addEventListener("pointerdown",f,l),r2(h)&&(h.addEventListener("focus",m=>p2(m,l)),!f2(h)&&!h.hasAttribute("tabindex")&&(h.tabIndex=0))}),d}function Nf(n){return pb(n)&&"ownerSVGElement"in n}const Kr=new WeakMap;let Xr;const ux=(n,i,s)=>(r,l)=>l&&l[0]?l[0][n+"Size"]:Nf(r)&&"getBBox"in r?r.getBBox()[i]:r[s],y2=ux("inline","width","offsetWidth"),v2=ux("block","height","offsetHeight");function b2({target:n,borderBoxSize:i}){Kr.get(n)?.forEach(s=>{s(n,{get width(){return y2(n,i)},get height(){return v2(n,i)}})})}function x2(n){n.forEach(b2)}function w2(){typeof ResizeObserver>"u"||(Xr=new ResizeObserver(x2))}function S2(n,i){Xr||w2();const s=sx(n);return s.forEach(r=>{let l=Kr.get(r);l||(l=new Set,Kr.set(r,l)),l.add(i),Xr?.observe(r)}),()=>{s.forEach(r=>{const l=Kr.get(r);l?.delete(i),l?.size||Xr?.unobserve(r)})}}const Wr=new Set;let Li;function T2(){Li=()=>{const n={get width(){return window.innerWidth},get height(){return window.innerHeight}};Wr.forEach(i=>i(n))},window.addEventListener("resize",Li)}function C2(n){return Wr.add(n),Li||T2(),()=>{Wr.delete(n),!Wr.size&&typeof Li=="function"&&(window.removeEventListener("resize",Li),Li=void 0)}}function My(n,i){return typeof n=="function"?C2(n):S2(n,i)}function A2(n){return Nf(n)&&n.tagName==="svg"}const E2=[...nx,Ze,ga],M2=n=>E2.find(tx(n)),Dy=()=>({translate:0,scale:1,origin:0,originPoint:0}),Pi=()=>({x:Dy(),y:Dy()}),Ry=()=>({min:0,max:0}),et=()=>({x:Ry(),y:Ry()}),D2=new WeakMap;function gl(n){return n!==null&&typeof n=="object"&&typeof n.start=="function"}function no(n){return typeof n=="string"||Array.isArray(n)}const jf=["animate","whileInView","whileFocus","whileHover","whileTap","whileDrag","exit"],Of=["initial",...jf];function yl(n){return gl(n.animate)||Of.some(i=>no(n[i]))}function dx(n){return!!(yl(n)||n.variants)}function R2(n,i,s){for(const r in i){const l=i[r],d=s[r];if(ft(l))n.addValue(r,l);else if(ft(d))n.addValue(r,Fi(l,{owner:n}));else if(d!==l)if(n.hasValue(r)){const f=n.getValue(r);f.liveStyle===!0?f.jump(l):f.hasAnimated||f.set(l)}else{const f=n.getStaticValue(r);n.addValue(r,Fi(f!==void 0?f:l,{owner:n}))}}for(const r in s)i[r]===void 0&&n.removeValue(r);return i}const Fd={current:null},fx={current:!1},k2=typeof window<"u";function z2(){if(fx.current=!0,!!k2)if(window.matchMedia){const n=window.matchMedia("(prefers-reduced-motion)"),i=()=>Fd.current=n.matches;n.addEventListener("change",i),i()}else Fd.current=!1}const ky=["AnimationStart","AnimationComplete","Update","BeforeLayoutMeasure","LayoutMeasure","LayoutAnimationStart","LayoutAnimationComplete"];let sl={};function hx(n){sl=n}function N2(){return sl}class j2{scrapeMotionValuesFromProps(i,s,r){return{}}constructor({parent:i,props:s,presenceContext:r,reducedMotionConfig:l,skipAnimations:d,blockInitialAnimation:f,visualState:h},p={}){this.current=null,this.children=new Set,this.isVariantNode=!1,this.isControllingVariants=!1,this.shouldReduceMotion=null,this.shouldSkipAnimations=!1,this.values=new Map,this.KeyframeResolver=Cf,this.features={},this.valueSubscriptions=new Map,this.prevMotionValues={},this.hasBeenMounted=!1,this.events={},this.propEventSubscriptions={},this.notifyUpdate=()=>this.notify("Update",this.latestValues),this.render=()=>{this.current&&(this.triggerBuild(),this.renderInstance(this.current,this.renderState,this.props.style,this.projection))},this.renderScheduledAt=0,this.scheduleRender=()=>{const C=mt.now();this.renderScheduledAt<C&&(this.renderScheduledAt=C,je.render(this.render,!1,!0))};const{latestValues:m,renderState:y}=h;this.latestValues=m,this.baseTarget={...m},this.initialValues=s.initial?{...m}:{},this.renderState=y,this.parent=i,this.props=s,this.presenceContext=r,this.depth=i?i.depth+1:0,this.reducedMotionConfig=l,this.skipAnimationsConfig=d,this.options=p,this.blockInitialAnimation=!!f,this.isControllingVariants=yl(s),this.isVariantNode=dx(s),this.isVariantNode&&(this.variantChildren=new Set),this.manuallyAnimateOnMount=!!(i&&i.current);const{willChange:b,...S}=this.scrapeMotionValuesFromProps(s,{},this);for(const C in S){const R=S[C];m[C]!==void 0&&ft(R)&&R.set(m[C])}}mount(i){if(this.hasBeenMounted)for(const s in this.initialValues)this.values.get(s)?.jump(this.initialValues[s]),this.latestValues[s]=this.initialValues[s];this.current=i,D2.set(i,this),this.projection&&!this.projection.instance&&this.projection.mount(i),this.parent&&this.isVariantNode&&!this.isControllingVariants&&(this.removeFromVariantTree=this.parent.addVariantChild(this)),this.values.forEach((s,r)=>this.bindToMotionValue(r,s)),this.reducedMotionConfig==="never"?this.shouldReduceMotion=!1:this.reducedMotionConfig==="always"?this.shouldReduceMotion=!0:(fx.current||z2(),this.shouldReduceMotion=Fd.current),this.shouldSkipAnimations=this.skipAnimationsConfig??!1,this.parent?.addChild(this),this.update(this.props,this.presenceContext),this.hasBeenMounted=!0}unmount(){this.projection&&this.projection.unmount(),pa(this.notifyUpdate),pa(this.render),this.valueSubscriptions.forEach(i=>i()),this.valueSubscriptions.clear(),this.removeFromVariantTree&&this.removeFromVariantTree(),this.parent?.removeChild(this);for(const i in this.events)this.events[i].clear();for(const i in this.features){const s=this.features[i];s&&(s.unmount(),s.isMounted=!1)}this.current=null}addChild(i){this.children.add(i),this.enteringChildren??(this.enteringChildren=new Set),this.enteringChildren.add(i)}removeChild(i){this.children.delete(i),this.enteringChildren&&this.enteringChildren.delete(i)}bindToMotionValue(i,s){if(this.valueSubscriptions.has(i)&&this.valueSubscriptions.get(i)(),s.accelerate&&o2.has(i)&&this.current instanceof HTMLElement){const{factory:f,keyframes:h,times:p,ease:m,duration:y}=s.accelerate,b=new Yb({element:this.current,name:i,keyframes:h,times:p,ease:m,duration:Jt(y)}),S=f(b);this.valueSubscriptions.set(i,()=>{S(),b.cancel()});return}const r=Ki.has(i);r&&this.onBindTransform&&this.onBindTransform();const l=s.on("change",f=>{this.latestValues[i]=f,this.props.onUpdate&&je.preRender(this.notifyUpdate),r&&this.projection&&(this.projection.isTransformDirty=!0),this.scheduleRender()});let d;typeof window<"u"&&window.MotionCheckAppearSync&&(d=window.MotionCheckAppearSync(this,i,s)),this.valueSubscriptions.set(i,()=>{l(),d&&d(),s.owner&&s.stop()})}sortNodePosition(i){return!this.current||!this.sortInstanceNodePosition||this.type!==i.type?0:this.sortInstanceNodePosition(this.current,i.current)}updateFeatures(){let i="animation";for(i in sl){const s=sl[i];if(!s)continue;const{isEnabled:r,Feature:l}=s;if(!this.features[i]&&l&&r(this.props)&&(this.features[i]=new l(this)),this.features[i]){const d=this.features[i];d.isMounted?d.update():(d.mount(),d.isMounted=!0)}}}triggerBuild(){this.build(this.renderState,this.latestValues,this.props)}measureViewportBox(){return this.current?this.measureInstanceViewportBox(this.current,this.props):et()}getStaticValue(i){return this.latestValues[i]}setStaticValue(i,s){this.latestValues[i]=s}update(i,s){(i.transformTemplate||this.props.transformTemplate)&&this.scheduleRender(),this.prevProps=this.props,this.props=i,this.prevPresenceContext=this.presenceContext,this.presenceContext=s;for(let r=0;r<ky.length;r++){const l=ky[r];this.propEventSubscriptions[l]&&(this.propEventSubscriptions[l](),delete this.propEventSubscriptions[l]);const d="on"+l,f=i[d];f&&(this.propEventSubscriptions[l]=this.on(l,f))}this.prevMotionValues=R2(this,this.scrapeMotionValuesFromProps(i,this.prevProps||{},this),this.prevMotionValues),this.handleChildMotionValue&&this.handleChildMotionValue()}getProps(){return this.props}getVariant(i){return this.props.variants?this.props.variants[i]:void 0}getDefaultTransition(){return this.props.transition}getTransformPagePoint(){return this.props.transformPagePoint}getClosestVariantNode(){return this.isVariantNode?this:this.parent?this.parent.getClosestVariantNode():void 0}addVariantChild(i){const s=this.getClosestVariantNode();if(s)return s.variantChildren&&s.variantChildren.add(i),()=>s.variantChildren.delete(i)}addValue(i,s){const r=this.values.get(i);s!==r&&(r&&this.removeValue(i),this.bindToMotionValue(i,s),this.values.set(i,s),this.latestValues[i]=s.get())}removeValue(i){this.values.delete(i);const s=this.valueSubscriptions.get(i);s&&(s(),this.valueSubscriptions.delete(i)),delete this.latestValues[i],this.removeValueFromRenderState(i,this.renderState)}hasValue(i){return this.values.has(i)}getValue(i,s){if(this.props.values&&this.props.values[i])return this.props.values[i];let r=this.values.get(i);return r===void 0&&s!==void 0&&(r=Fi(s===null?void 0:s,{owner:this}),this.addValue(i,r)),r}readValue(i,s){let r=this.latestValues[i]!==void 0||!this.current?this.latestValues[i]:this.getBaseTargetFromProps(this.props,i)??this.readValueFromInstance(this.current,i,this.options);return r!=null&&(typeof r=="string"&&(mb(r)||gb(r))?r=parseFloat(r):!M2(r)&&ga.test(s)&&(r=ix(i,s)),this.setBaseTarget(i,ft(r)?r.get():r)),ft(r)?r.get():r}setBaseTarget(i,s){this.baseTarget[i]=s}getBaseTarget(i){const{initial:s}=this.props;let r;if(typeof s=="string"||typeof s=="object"){const d=Mf(this.props,s,this.presenceContext?.custom);d&&(r=d[i])}if(s&&r!==void 0)return r;const l=this.getBaseTargetFromProps(this.props,i);return l!==void 0&&!ft(l)?l:this.initialValues[i]!==void 0&&r===void 0?void 0:this.baseTarget[i]}on(i,s){return this.events[i]||(this.events[i]=new hf),this.events[i].add(s)}notify(i,...s){this.events[i]&&this.events[i].notify(...s)}scheduleRenderMicrotask(){kf.render(this.render)}}class mx extends j2{constructor(){super(...arguments),this.KeyframeResolver=s2}sortInstanceNodePosition(i,s){return i.compareDocumentPosition(s)&2?1:-1}getBaseTargetFromProps(i,s){const r=i.style;return r?r[s]:void 0}removeValueFromRenderState(i,{vars:s,style:r}){delete s[i],delete r[i]}handleChildMotionValue(){this.childSubscription&&(this.childSubscription(),delete this.childSubscription);const{children:i}=this.props;ft(i)&&(this.childSubscription=i.on("change",s=>{this.current&&(this.current.textContent=`${s}`)}))}}class ya{constructor(i){this.isMounted=!1,this.node=i}update(){}}function px({top:n,left:i,right:s,bottom:r}){return{x:{min:i,max:s},y:{min:n,max:r}}}function O2({x:n,y:i}){return{top:i.min,right:n.max,bottom:i.max,left:n.min}}function B2(n,i){if(!i)return n;const s=i({x:n.left,y:n.top}),r=i({x:n.right,y:n.bottom});return{top:s.y,left:s.x,bottom:r.y,right:r.x}}function nd(n){return n===void 0||n===1}function Hd({scale:n,scaleX:i,scaleY:s}){return!nd(n)||!nd(i)||!nd(s)}function _a(n){return Hd(n)||gx(n)||n.z||n.rotate||n.rotateX||n.rotateY||n.skewX||n.skewY}function gx(n){return zy(n.x)||zy(n.y)}function zy(n){return n&&n!=="0%"}function ol(n,i,s){const r=n-s,l=i*r;return s+l}function Ny(n,i,s,r,l){return l!==void 0&&(n=ol(n,l,r)),ol(n,s,r)+i}function Id(n,i=0,s=1,r,l){n.min=Ny(n.min,i,s,r,l),n.max=Ny(n.max,i,s,r,l)}function yx(n,{x:i,y:s}){Id(n.x,i.translate,i.scale,i.originPoint),Id(n.y,s.translate,s.scale,s.originPoint)}const jy=.999999999999,Oy=1.0000000000001;function L2(n,i,s,r=!1){const l=s.length;if(!l)return;i.x=i.y=1;let d,f;for(let h=0;h<l;h++){d=s[h],f=d.projectionDelta;const{visualElement:p}=d.options;p&&p.props.style&&p.props.style.display==="contents"||(r&&d.options.layoutScroll&&d.scroll&&d!==d.root&&_i(n,{x:-d.scroll.offset.x,y:-d.scroll.offset.y}),f&&(i.x*=f.x.scale,i.y*=f.y.scale,yx(n,f)),r&&_a(d.latestValues)&&_i(n,d.latestValues))}i.x<Oy&&i.x>jy&&(i.x=1),i.y<Oy&&i.y>jy&&(i.y=1)}function Vi(n,i){n.min=n.min+i,n.max=n.max+i}function By(n,i,s,r,l=.5){const d=_e(n.min,n.max,l);Id(n,i,s,d,r)}function _i(n,i){By(n.x,i.x,i.scaleX,i.scale,i.originX),By(n.y,i.y,i.scaleY,i.scale,i.originY)}function vx(n,i){return px(B2(n.getBoundingClientRect(),i))}function P2(n,i,s){const r=vx(n,s),{scroll:l}=i;return l&&(Vi(r.x,l.offset.x),Vi(r.y,l.offset.y)),r}const V2={x:"translateX",y:"translateY",z:"translateZ",transformPerspective:"perspective"},_2=Yi.length;function U2(n,i,s){let r="",l=!0;for(let d=0;d<_2;d++){const f=Yi[d],h=n[f];if(h===void 0)continue;let p=!0;if(typeof h=="number")p=h===(f.startsWith("scale")?1:0);else{const m=parseFloat(h);p=f.startsWith("scale")?m===1:m===0}if(!p||s){const m=ox(h,Rf[f]);if(!p){l=!1;const y=V2[f]||f;r+=`${y}(${m}) `}s&&(i[f]=m)}}return r=r.trim(),s?r=s(i,l?"":r):l&&(r="none"),r}function Bf(n,i,s){const{style:r,vars:l,transformOrigin:d}=n;let f=!1,h=!1;for(const p in i){const m=i[p];if(Ki.has(p)){f=!0;continue}else if(kb(p)){l[p]=m;continue}else{const y=ox(m,Rf[p]);p.startsWith("origin")?(h=!0,d[p]=y):r[p]=y}}if(i.transform||(f||s?r.transform=U2(i,n.transform,s):r.transform&&(r.transform="none")),h){const{originX:p="50%",originY:m="50%",originZ:y=0}=d;r.transformOrigin=`${p} ${m} ${y}`}}function bx(n,{style:i,vars:s},r,l){const d=n.style;let f;for(f in i)d[f]=i[f];l?.applyProjectionStyles(d,r);for(f in s)d.setProperty(f,s[f])}function Ly(n,i){return i.max===i.min?0:n/(i.max-i.min)*100}const Gs={correct:(n,i)=>{if(!i.target)return n;if(typeof n=="string")if(te.test(n))n=parseFloat(n);else return n;const s=Ly(n,i.target.x),r=Ly(n,i.target.y);return`${s}% ${r}%`}},q2={correct:(n,{treeScale:i,projectionDelta:s})=>{const r=n,l=ga.parse(n);if(l.length>5)return r;const d=ga.createTransformer(n),f=typeof l[0]!="number"?1:0,h=s.x.scale*i.x,p=s.y.scale*i.y;l[0+f]/=h,l[1+f]/=p;const m=_e(h,p,.5);return typeof l[2+f]=="number"&&(l[2+f]/=m),typeof l[3+f]=="number"&&(l[3+f]/=m),d(l)}},Gd={borderRadius:{...Gs,applyTo:["borderTopLeftRadius","borderTopRightRadius","borderBottomLeftRadius","borderBottomRightRadius"]},borderTopLeftRadius:Gs,borderTopRightRadius:Gs,borderBottomLeftRadius:Gs,borderBottomRightRadius:Gs,boxShadow:q2};function xx(n,{layout:i,layoutId:s}){return Ki.has(n)||n.startsWith("origin")||(i||s!==void 0)&&(!!Gd[n]||n==="opacity")}function Lf(n,i,s){const r=n.style,l=i?.style,d={};if(!r)return d;for(const f in r)(ft(r[f])||l&&ft(l[f])||xx(f,n)||s?.getValue(f)?.liveStyle!==void 0)&&(d[f]=r[f]);return d}function F2(n){return window.getComputedStyle(n)}class H2 extends mx{constructor(){super(...arguments),this.type="html",this.renderInstance=bx}readValueFromInstance(i,s){if(Ki.has(s))return this.projection?.isProjecting?Nd(s):rA(i,s);{const r=F2(i),l=(kb(s)?r.getPropertyValue(s):r[s])||0;return typeof l=="string"?l.trim():l}}measureInstanceViewportBox(i,{transformPagePoint:s}){return vx(i,s)}build(i,s,r){Bf(i,s,r.transformTemplate)}scrapeMotionValuesFromProps(i,s,r){return Lf(i,s,r)}}const I2={offset:"stroke-dashoffset",array:"stroke-dasharray"},G2={offset:"strokeDashoffset",array:"strokeDasharray"};function Y2(n,i,s=1,r=0,l=!0){n.pathLength=1;const d=l?I2:G2;n[d.offset]=`${-r}`,n[d.array]=`${i} ${s}`}const K2=["offsetDistance","offsetPath","offsetRotate","offsetAnchor"];function wx(n,{attrX:i,attrY:s,attrScale:r,pathLength:l,pathSpacing:d=1,pathOffset:f=0,...h},p,m,y){if(Bf(n,h,m),p){n.style.viewBox&&(n.attrs.viewBox=n.style.viewBox);return}n.attrs=n.style,n.style={};const{attrs:b,style:S}=n;b.transform&&(S.transform=b.transform,delete b.transform),(S.transform||b.transformOrigin)&&(S.transformOrigin=b.transformOrigin??"50% 50%",delete b.transformOrigin),S.transform&&(S.transformBox=y?.transformBox??"fill-box",delete b.transformBox);for(const C of K2)b[C]!==void 0&&(S[C]=b[C],delete b[C]);i!==void 0&&(b.x=i),s!==void 0&&(b.y=s),r!==void 0&&(b.scale=r),l!==void 0&&Y2(b,l,d,f,!1)}const Sx=new Set(["baseFrequency","diffuseConstant","kernelMatrix","kernelUnitLength","keySplines","keyTimes","limitingConeAngle","markerHeight","markerWidth","numOctaves","targetX","targetY","surfaceScale","specularConstant","specularExponent","stdDeviation","tableValues","viewBox","gradientTransform","pathLength","startOffset","textLength","lengthAdjust"]),Tx=n=>typeof n=="string"&&n.toLowerCase()==="svg";function X2(n,i,s,r){bx(n,i,void 0,r);for(const l in i.attrs)n.setAttribute(Sx.has(l)?l:Df(l),i.attrs[l])}function Cx(n,i,s){const r=Lf(n,i,s);for(const l in n)if(ft(n[l])||ft(i[l])){const d=Yi.indexOf(l)!==-1?"attr"+l.charAt(0).toUpperCase()+l.substring(1):l;r[d]=n[l]}return r}class W2 extends mx{constructor(){super(...arguments),this.type="svg",this.isSVGTag=!1,this.measureInstanceViewportBox=et}getBaseTargetFromProps(i,s){return i[s]}readValueFromInstance(i,s){if(Ki.has(s)){const r=ax(s);return r&&r.default||0}return s=Sx.has(s)?s:Df(s),i.getAttribute(s)}scrapeMotionValuesFromProps(i,s,r){return Cx(i,s,r)}build(i,s,r){wx(i,s,this.isSVGTag,r.transformTemplate,r.style)}renderInstance(i,s,r,l){X2(i,s,r,l)}mount(i){this.isSVGTag=Tx(i.tagName),super.mount(i)}}const Q2=Of.length;function Ax(n){if(!n)return;if(!n.isControllingVariants){const s=n.parent?Ax(n.parent)||{}:{};return n.props.initial!==void 0&&(s.initial=n.props.initial),s}const i={};for(let s=0;s<Q2;s++){const r=Of[s],l=n.props[r];(no(l)||l===!1)&&(i[r]=l)}return i}function Ex(n,i){if(!Array.isArray(i))return!1;const s=i.length;if(s!==n.length)return!1;for(let r=0;r<s;r++)if(i[r]!==n[r])return!1;return!0}const Z2=[...jf].reverse(),J2=jf.length;function $2(n){return i=>Promise.all(i.map(({animation:s,options:r})=>WA(n,s,r)))}function eE(n){let i=$2(n),s=Py(),r=!0;const l=p=>(m,y)=>{const b=Ui(n,y,p==="exit"?n.presenceContext?.custom:void 0);if(b){const{transition:S,transitionEnd:C,...R}=b;m={...m,...R,...C}}return m};function d(p){i=p(n)}function f(p){const{props:m}=n,y=Ax(n.parent)||{},b=[],S=new Set;let C={},R=1/0;for(let D=0;D<J2;D++){const z=Z2[D],O=s[z],L=m[z]!==void 0?m[z]:y[z],X=no(L),G=z===p?O.isActive:null;G===!1&&(R=D);let Z=L===y[z]&&L!==m[z]&&X;if(Z&&r&&n.manuallyAnimateOnMount&&(Z=!1),O.protectedKeys={...C},!O.isActive&&G===null||!L&&!O.prevProp||gl(L)||typeof L=="boolean")continue;if(z==="exit"&&O.isActive&&G!==!0){O.prevResolvedValues&&(C={...C,...O.prevResolvedValues});continue}const K=tE(O.prevProp,L);let H=K||z===p&&O.isActive&&!Z&&X||D>R&&X,se=!1;const we=Array.isArray(L)?L:[L];let Oe=we.reduce(l(z),{});G===!1&&(Oe={});const{prevResolvedValues:Be={}}=O,jt={...Be,...Oe},ut=Y=>{H=!0,S.has(Y)&&(se=!0,S.delete(Y)),O.needsAnimating[Y]=!0;const I=n.getValue(Y);I&&(I.liveStyle=!1)};for(const Y in jt){const I=Oe[Y],he=Be[Y];if(C.hasOwnProperty(Y))continue;let pe=!1;Vd(I)&&Vd(he)?pe=!Ex(I,he):pe=I!==he,pe?I!=null?ut(Y):S.add(Y):I!==void 0&&S.has(Y)?ut(Y):O.protectedKeys[Y]=!0}O.prevProp=L,O.prevResolvedValues=Oe,O.isActive&&(C={...C,...Oe}),r&&n.blockInitialAnimation&&(H=!1);const Ie=Z&&K;H&&(!Ie||se)&&b.push(...we.map(Y=>{const I={type:z};if(typeof Y=="string"&&r&&!Ie&&n.manuallyAnimateOnMount&&n.parent){const{parent:he}=n,pe=Ui(he,Y);if(he.enteringChildren&&pe){const{delayChildren:M}=pe.transition||{};I.delay=Xb(he.enteringChildren,n,M)}}return{animation:Y,options:I}}))}if(S.size){const D={};if(typeof m.initial!="boolean"){const z=Ui(n,Array.isArray(m.initial)?m.initial[0]:m.initial);z&&z.transition&&(D.transition=z.transition)}S.forEach(z=>{const O=n.getBaseTarget(z),L=n.getValue(z);L&&(L.liveStyle=!0),D[z]=O??null}),b.push({animation:D})}let A=!!b.length;return r&&(m.initial===!1||m.initial===m.animate)&&!n.manuallyAnimateOnMount&&(A=!1),r=!1,A?i(b):Promise.resolve()}function h(p,m){if(s[p].isActive===m)return Promise.resolve();n.variantChildren?.forEach(b=>b.animationState?.setActive(p,m)),s[p].isActive=m;const y=f(p);for(const b in s)s[b].protectedKeys={};return y}return{animateChanges:f,setActive:h,setAnimateFunction:d,getState:()=>s,reset:()=>{s=Py()}}}function tE(n,i){return typeof i=="string"?i!==n:Array.isArray(i)?!Ex(i,n):!1}function Pa(n=!1){return{isActive:n,protectedKeys:{},needsAnimating:{},prevResolvedValues:{}}}function Py(){return{animate:Pa(!0),whileInView:Pa(),whileHover:Pa(),whileTap:Pa(),whileDrag:Pa(),whileFocus:Pa(),exit:Pa()}}function Vy(n,i){n.min=i.min,n.max=i.max}function Qt(n,i){Vy(n.x,i.x),Vy(n.y,i.y)}function _y(n,i){n.translate=i.translate,n.scale=i.scale,n.originPoint=i.originPoint,n.origin=i.origin}const Mx=1e-4,nE=1-Mx,aE=1+Mx,Dx=.01,iE=0-Dx,sE=0+Dx;function pt(n){return n.max-n.min}function oE(n,i,s){return Math.abs(n-i)<=s}function Uy(n,i,s,r=.5){n.origin=r,n.originPoint=_e(i.min,i.max,n.origin),n.scale=pt(s)/pt(i),n.translate=_e(s.min,s.max,n.origin)-n.originPoint,(n.scale>=nE&&n.scale<=aE||isNaN(n.scale))&&(n.scale=1),(n.translate>=iE&&n.translate<=sE||isNaN(n.translate))&&(n.translate=0)}function Qs(n,i,s,r){Uy(n.x,i.x,s.x,r?r.originX:void 0),Uy(n.y,i.y,s.y,r?r.originY:void 0)}function qy(n,i,s){n.min=s.min+i.min,n.max=n.min+pt(i)}function rE(n,i,s){qy(n.x,i.x,s.x),qy(n.y,i.y,s.y)}function Fy(n,i,s){n.min=i.min-s.min,n.max=n.min+pt(i)}function rl(n,i,s){Fy(n.x,i.x,s.x),Fy(n.y,i.y,s.y)}function Hy(n,i,s,r,l){return n-=i,n=ol(n,1/s,r),l!==void 0&&(n=ol(n,1/l,r)),n}function lE(n,i=0,s=1,r=.5,l,d=n,f=n){if(ln.test(i)&&(i=parseFloat(i),i=_e(f.min,f.max,i/100)-f.min),typeof i!="number")return;let h=_e(d.min,d.max,r);n===d&&(h-=i),n.min=Hy(n.min,i,s,h,l),n.max=Hy(n.max,i,s,h,l)}function Iy(n,i,[s,r,l],d,f){lE(n,i[s],i[r],i[l],i.scale,d,f)}const cE=["x","scaleX","originX"],uE=["y","scaleY","originY"];function Gy(n,i,s,r){Iy(n.x,i,cE,s?s.x:void 0,r?r.x:void 0),Iy(n.y,i,uE,s?s.y:void 0,r?r.y:void 0)}function Yy(n){return n.translate===0&&n.scale===1}function Rx(n){return Yy(n.x)&&Yy(n.y)}function Ky(n,i){return n.min===i.min&&n.max===i.max}function dE(n,i){return Ky(n.x,i.x)&&Ky(n.y,i.y)}function Xy(n,i){return Math.round(n.min)===Math.round(i.min)&&Math.round(n.max)===Math.round(i.max)}function kx(n,i){return Xy(n.x,i.x)&&Xy(n.y,i.y)}function Wy(n){return pt(n.x)/pt(n.y)}function Qy(n,i){return n.translate===i.translate&&n.scale===i.scale&&n.originPoint===i.originPoint}function on(n){return[n("x"),n("y")]}function fE(n,i,s){let r="";const l=n.x.translate/i.x,d=n.y.translate/i.y,f=s?.z||0;if((l||d||f)&&(r=`translate3d(${l}px, ${d}px, ${f}px) `),(i.x!==1||i.y!==1)&&(r+=`scale(${1/i.x}, ${1/i.y}) `),s){const{transformPerspective:m,rotate:y,rotateX:b,rotateY:S,skewX:C,skewY:R}=s;m&&(r=`perspective(${m}px) ${r}`),y&&(r+=`rotate(${y}deg) `),b&&(r+=`rotateX(${b}deg) `),S&&(r+=`rotateY(${S}deg) `),C&&(r+=`skewX(${C}deg) `),R&&(r+=`skewY(${R}deg) `)}const h=n.x.scale*i.x,p=n.y.scale*i.y;return(h!==1||p!==1)&&(r+=`scale(${h}, ${p})`),r||"none"}const zx=["TopLeft","TopRight","BottomLeft","BottomRight"],hE=zx.length,Zy=n=>typeof n=="string"?parseFloat(n):n,Jy=n=>typeof n=="number"||te.test(n);function mE(n,i,s,r,l,d){l?(n.opacity=_e(0,s.opacity??1,pE(r)),n.opacityExit=_e(i.opacity??1,0,gE(r))):d&&(n.opacity=_e(i.opacity??1,s.opacity??1,r));for(let f=0;f<hE;f++){const h=`border${zx[f]}Radius`;let p=$y(i,h),m=$y(s,h);if(p===void 0&&m===void 0)continue;p||(p=0),m||(m=0),p===0||m===0||Jy(p)===Jy(m)?(n[h]=Math.max(_e(Zy(p),Zy(m),r),0),(ln.test(m)||ln.test(p))&&(n[h]+="%")):n[h]=m}(i.rotate||s.rotate)&&(n.rotate=_e(i.rotate||0,s.rotate||0,r))}function $y(n,i){return n[i]!==void 0?n[i]:n.borderRadius}const pE=Nx(0,.5,Cb),gE=Nx(.5,.95,Gt);function Nx(n,i,s){return r=>r<n?0:r>i?1:s($s(n,i,r))}function yE(n,i,s){const r=ft(n)?n:Fi(n);return r.start(Ef("",r,i,s)),r.animation}function ao(n,i,s,r={passive:!0}){return n.addEventListener(i,s,r),()=>n.removeEventListener(i,s)}const vE=(n,i)=>n.depth-i.depth;class bE{constructor(){this.children=[],this.isDirty=!1}add(i){uf(this.children,i),this.isDirty=!0}remove(i){tl(this.children,i),this.isDirty=!0}forEach(i){this.isDirty&&this.children.sort(vE),this.isDirty=!1,this.children.forEach(i)}}function xE(n,i){const s=mt.now(),r=({timestamp:l})=>{const d=l-s;d>=i&&(pa(r),n(d-i))};return je.setup(r,!0),()=>pa(r)}function Qr(n){return ft(n)?n.get():n}class wE{constructor(){this.members=[]}add(i){uf(this.members,i);for(let s=this.members.length-1;s>=0;s--){const r=this.members[s];if(r===i||r===this.lead||r===this.prevLead)continue;const l=r.instance;l&&l.isConnected===!1&&r.isPresent!==!1&&!r.snapshot&&tl(this.members,r)}i.scheduleRender()}remove(i){if(tl(this.members,i),i===this.prevLead&&(this.prevLead=void 0),i===this.lead){const s=this.members[this.members.length-1];s&&this.promote(s)}}relegate(i){const s=this.members.findIndex(l=>i===l);if(s===0)return!1;let r;for(let l=s;l>=0;l--){const d=this.members[l],f=d.instance;if(d.isPresent!==!1&&(!f||f.isConnected!==!1)){r=d;break}}return r?(this.promote(r),!0):!1}promote(i,s){const r=this.lead;if(i!==r&&(this.prevLead=r,this.lead=i,i.show(),r)){r.instance&&r.scheduleRender(),i.scheduleRender();const l=r.options.layoutDependency,d=i.options.layoutDependency;if(!(l!==void 0&&d!==void 0&&l===d)){const p=r.instance;p&&p.isConnected===!1&&!r.snapshot||(i.resumeFrom=r,s&&(i.resumeFrom.preserveOpacity=!0),r.snapshot&&(i.snapshot=r.snapshot,i.snapshot.latestValues=r.animationValues||r.latestValues),i.root&&i.root.isUpdating&&(i.isLayoutDirty=!0))}const{crossfade:h}=i.options;h===!1&&r.hide()}}exitAnimationComplete(){this.members.forEach(i=>{const{options:s,resumingFrom:r}=i;s.onExitComplete&&s.onExitComplete(),r&&r.options.onExitComplete&&r.options.onExitComplete()})}scheduleRender(){this.members.forEach(i=>{i.instance&&i.scheduleRender(!1)})}removeLeadSnapshot(){this.lead&&this.lead.snapshot&&(this.lead.snapshot=void 0)}}const Zr={hasAnimatedSinceResize:!0,hasEverUpdated:!1},ad=["","X","Y","Z"],SE=1e3;let TE=0;function id(n,i,s,r){const{latestValues:l}=i;l[n]&&(s[n]=l[n],i.setStaticValue(n,0),r&&(r[n]=0))}function jx(n){if(n.hasCheckedOptimisedAppear=!0,n.root===n)return;const{visualElement:i}=n.options;if(!i)return;const s=$b(i);if(window.MotionHasOptimisedAnimation(s,"transform")){const{layout:l,layoutId:d}=n.options;window.MotionCancelOptimisedAnimation(s,"transform",je,!(l||d))}const{parent:r}=n;r&&!r.hasCheckedOptimisedAppear&&jx(r)}function Ox({attachResizeListener:n,defaultParent:i,measureScroll:s,checkIsScrollRoot:r,resetTransform:l}){return class{constructor(f={},h=i?.()){this.id=TE++,this.animationId=0,this.animationCommitId=0,this.children=new Set,this.options={},this.isTreeAnimating=!1,this.isAnimationBlocked=!1,this.isLayoutDirty=!1,this.isProjectionDirty=!1,this.isSharedProjectionDirty=!1,this.isTransformDirty=!1,this.updateManuallyBlocked=!1,this.updateBlockedByResize=!1,this.isUpdating=!1,this.isSVG=!1,this.needsReset=!1,this.shouldResetTransform=!1,this.hasCheckedOptimisedAppear=!1,this.treeScale={x:1,y:1},this.eventHandlers=new Map,this.hasTreeAnimated=!1,this.layoutVersion=0,this.updateScheduled=!1,this.scheduleUpdate=()=>this.update(),this.projectionUpdateScheduled=!1,this.checkUpdateFailed=()=>{this.isUpdating&&(this.isUpdating=!1,this.clearAllSnapshots())},this.updateProjection=()=>{this.projectionUpdateScheduled=!1,this.nodes.forEach(EE),this.nodes.forEach(kE),this.nodes.forEach(zE),this.nodes.forEach(ME)},this.resolvedRelativeTargetAt=0,this.linkedParentVersion=0,this.hasProjected=!1,this.isVisible=!0,this.animationProgress=0,this.sharedNodes=new Map,this.latestValues=f,this.root=h?h.root||h:this,this.path=h?[...h.path,h]:[],this.parent=h,this.depth=h?h.depth+1:0;for(let p=0;p<this.path.length;p++)this.path[p].shouldResetTransform=!0;this.root===this&&(this.nodes=new bE)}addEventListener(f,h){return this.eventHandlers.has(f)||this.eventHandlers.set(f,new hf),this.eventHandlers.get(f).add(h)}notifyListeners(f,...h){const p=this.eventHandlers.get(f);p&&p.notify(...h)}hasListeners(f){return this.eventHandlers.has(f)}mount(f){if(this.instance)return;this.isSVG=Nf(f)&&!A2(f),this.instance=f;const{layoutId:h,layout:p,visualElement:m}=this.options;if(m&&!m.current&&m.mount(f),this.root.nodes.add(this),this.parent&&this.parent.children.add(this),this.root.hasTreeAnimated&&(p||h)&&(this.isLayoutDirty=!0),n){let y,b=0;const S=()=>this.root.updateBlockedByResize=!1;je.read(()=>{b=window.innerWidth}),n(f,()=>{const C=window.innerWidth;C!==b&&(b=C,this.root.updateBlockedByResize=!0,y&&y(),y=xE(S,250),Zr.hasAnimatedSinceResize&&(Zr.hasAnimatedSinceResize=!1,this.nodes.forEach(nv)))})}h&&this.root.registerSharedNode(h,this),this.options.animate!==!1&&m&&(h||p)&&this.addEventListener("didUpdate",({delta:y,hasLayoutChanged:b,hasRelativeLayoutChanged:S,layout:C})=>{if(this.isTreeAnimationBlocked()){this.target=void 0,this.relativeTarget=void 0;return}const R=this.options.transition||m.getDefaultTransition()||LE,{onLayoutAnimationStart:A,onLayoutAnimationComplete:D}=m.getProps(),z=!this.targetLayout||!kx(this.targetLayout,C),O=!b&&S;if(this.options.layoutRoot||this.resumeFrom||O||b&&(z||!this.currentAnimation)){this.resumeFrom&&(this.resumingFrom=this.resumeFrom,this.resumingFrom.resumingFrom=void 0);const L={...Af(R,"layout"),onPlay:A,onComplete:D};(m.shouldReduceMotion||this.options.layoutRoot)&&(L.delay=0,L.type=!1),this.startAnimation(L),this.setAnimationOrigin(y,O)}else b||nv(this),this.isLead()&&this.options.onExitComplete&&this.options.onExitComplete();this.targetLayout=C})}unmount(){this.options.layoutId&&this.willUpdate(),this.root.nodes.remove(this);const f=this.getStack();f&&f.remove(this),this.parent&&this.parent.children.delete(this),this.instance=void 0,this.eventHandlers.clear(),pa(this.updateProjection)}blockUpdate(){this.updateManuallyBlocked=!0}unblockUpdate(){this.updateManuallyBlocked=!1}isUpdateBlocked(){return this.updateManuallyBlocked||this.updateBlockedByResize}isTreeAnimationBlocked(){return this.isAnimationBlocked||this.parent&&this.parent.isTreeAnimationBlocked()||!1}startUpdate(){this.isUpdateBlocked()||(this.isUpdating=!0,this.nodes&&this.nodes.forEach(NE),this.animationId++)}getTransformTemplate(){const{visualElement:f}=this.options;return f&&f.getProps().transformTemplate}willUpdate(f=!0){if(this.root.hasTreeAnimated=!0,this.root.isUpdateBlocked()){this.options.onExitComplete&&this.options.onExitComplete();return}if(window.MotionCancelOptimisedAnimation&&!this.hasCheckedOptimisedAppear&&jx(this),!this.root.isUpdating&&this.root.startUpdate(),this.isLayoutDirty)return;this.isLayoutDirty=!0;for(let y=0;y<this.path.length;y++){const b=this.path[y];b.shouldResetTransform=!0,b.updateScroll("snapshot"),b.options.layoutRoot&&b.willUpdate(!1)}const{layoutId:h,layout:p}=this.options;if(h===void 0&&!p)return;const m=this.getTransformTemplate();this.prevTransformTemplateValue=m?m(this.latestValues,""):void 0,this.updateSnapshot(),f&&this.notifyListeners("willUpdate")}update(){if(this.updateScheduled=!1,this.isUpdateBlocked()){this.unblockUpdate(),this.clearAllSnapshots(),this.nodes.forEach(ev);return}if(this.animationId<=this.animationCommitId){this.nodes.forEach(tv);return}this.animationCommitId=this.animationId,this.isUpdating?(this.isUpdating=!1,this.nodes.forEach(RE),this.nodes.forEach(CE),this.nodes.forEach(AE)):this.nodes.forEach(tv),this.clearAllSnapshots();const h=mt.now();ct.delta=dn(0,1e3/60,h-ct.timestamp),ct.timestamp=h,ct.isProcessing=!0,Wu.update.process(ct),Wu.preRender.process(ct),Wu.render.process(ct),ct.isProcessing=!1}didUpdate(){this.updateScheduled||(this.updateScheduled=!0,kf.read(this.scheduleUpdate))}clearAllSnapshots(){this.nodes.forEach(DE),this.sharedNodes.forEach(jE)}scheduleUpdateProjection(){this.projectionUpdateScheduled||(this.projectionUpdateScheduled=!0,je.preRender(this.updateProjection,!1,!0))}scheduleCheckAfterUnmount(){je.postRender(()=>{this.isLayoutDirty?this.root.didUpdate():this.root.checkUpdateFailed()})}updateSnapshot(){this.snapshot||!this.instance||(this.snapshot=this.measure(),this.snapshot&&!pt(this.snapshot.measuredBox.x)&&!pt(this.snapshot.measuredBox.y)&&(this.snapshot=void 0))}updateLayout(){if(!this.instance||(this.updateScroll(),!(this.options.alwaysMeasureLayout&&this.isLead())&&!this.isLayoutDirty))return;if(this.resumeFrom&&!this.resumeFrom.instance)for(let p=0;p<this.path.length;p++)this.path[p].updateScroll();const f=this.layout;this.layout=this.measure(!1),this.layoutVersion++,this.layoutCorrected=et(),this.isLayoutDirty=!1,this.projectionDelta=void 0,this.notifyListeners("measure",this.layout.layoutBox);const{visualElement:h}=this.options;h&&h.notify("LayoutMeasure",this.layout.layoutBox,f?f.layoutBox:void 0)}updateScroll(f="measure"){let h=!!(this.options.layoutScroll&&this.instance);if(this.scroll&&this.scroll.animationId===this.root.animationId&&this.scroll.phase===f&&(h=!1),h&&this.instance){const p=r(this.instance);this.scroll={animationId:this.root.animationId,phase:f,isRoot:p,offset:s(this.instance),wasRoot:this.scroll?this.scroll.isRoot:p}}}resetTransform(){if(!l)return;const f=this.isLayoutDirty||this.shouldResetTransform||this.options.alwaysMeasureLayout,h=this.projectionDelta&&!Rx(this.projectionDelta),p=this.getTransformTemplate(),m=p?p(this.latestValues,""):void 0,y=m!==this.prevTransformTemplateValue;f&&this.instance&&(h||_a(this.latestValues)||y)&&(l(this.instance,m),this.shouldResetTransform=!1,this.scheduleRender())}measure(f=!0){const h=this.measurePageBox();let p=this.removeElementScroll(h);return f&&(p=this.removeTransform(p)),PE(p),{animationId:this.root.animationId,measuredBox:h,layoutBox:p,latestValues:{},source:this.id}}measurePageBox(){const{visualElement:f}=this.options;if(!f)return et();const h=f.measureViewportBox();if(!(this.scroll?.wasRoot||this.path.some(VE))){const{scroll:m}=this.root;m&&(Vi(h.x,m.offset.x),Vi(h.y,m.offset.y))}return h}removeElementScroll(f){const h=et();if(Qt(h,f),this.scroll?.wasRoot)return h;for(let p=0;p<this.path.length;p++){const m=this.path[p],{scroll:y,options:b}=m;m!==this.root&&y&&b.layoutScroll&&(y.wasRoot&&Qt(h,f),Vi(h.x,y.offset.x),Vi(h.y,y.offset.y))}return h}applyTransform(f,h=!1){const p=et();Qt(p,f);for(let m=0;m<this.path.length;m++){const y=this.path[m];!h&&y.options.layoutScroll&&y.scroll&&y!==y.root&&_i(p,{x:-y.scroll.offset.x,y:-y.scroll.offset.y}),_a(y.latestValues)&&_i(p,y.latestValues)}return _a(this.latestValues)&&_i(p,this.latestValues),p}removeTransform(f){const h=et();Qt(h,f);for(let p=0;p<this.path.length;p++){const m=this.path[p];if(!m.instance||!_a(m.latestValues))continue;Hd(m.latestValues)&&m.updateSnapshot();const y=et(),b=m.measurePageBox();Qt(y,b),Gy(h,m.latestValues,m.snapshot?m.snapshot.layoutBox:void 0,y)}return _a(this.latestValues)&&Gy(h,this.latestValues),h}setTargetDelta(f){this.targetDelta=f,this.root.scheduleUpdateProjection(),this.isProjectionDirty=!0}setOptions(f){this.options={...this.options,...f,crossfade:f.crossfade!==void 0?f.crossfade:!0}}clearMeasurements(){this.scroll=void 0,this.layout=void 0,this.snapshot=void 0,this.prevTransformTemplateValue=void 0,this.targetDelta=void 0,this.target=void 0,this.isLayoutDirty=!1}forceRelativeParentToResolveTarget(){this.relativeParent&&this.relativeParent.resolvedRelativeTargetAt!==ct.timestamp&&this.relativeParent.resolveTargetDelta(!0)}resolveTargetDelta(f=!1){const h=this.getLead();this.isProjectionDirty||(this.isProjectionDirty=h.isProjectionDirty),this.isTransformDirty||(this.isTransformDirty=h.isTransformDirty),this.isSharedProjectionDirty||(this.isSharedProjectionDirty=h.isSharedProjectionDirty);const p=!!this.resumingFrom||this!==h;if(!(f||p&&this.isSharedProjectionDirty||this.isProjectionDirty||this.parent?.isProjectionDirty||this.attemptToResolveRelativeTarget||this.root.updateBlockedByResize))return;const{layout:y,layoutId:b}=this.options;if(!this.layout||!(y||b))return;this.resolvedRelativeTargetAt=ct.timestamp;const S=this.getClosestProjectingParent();S&&this.linkedParentVersion!==S.layoutVersion&&!S.options.layoutRoot&&this.removeRelativeTarget(),!this.targetDelta&&!this.relativeTarget&&(S&&S.layout?this.createRelativeTarget(S,this.layout.layoutBox,S.layout.layoutBox):this.removeRelativeTarget()),!(!this.relativeTarget&&!this.targetDelta)&&(this.target||(this.target=et(),this.targetWithTransforms=et()),this.relativeTarget&&this.relativeTargetOrigin&&this.relativeParent&&this.relativeParent.target?(this.forceRelativeParentToResolveTarget(),rE(this.target,this.relativeTarget,this.relativeParent.target)):this.targetDelta?(this.resumingFrom?this.target=this.applyTransform(this.layout.layoutBox):Qt(this.target,this.layout.layoutBox),yx(this.target,this.targetDelta)):Qt(this.target,this.layout.layoutBox),this.attemptToResolveRelativeTarget&&(this.attemptToResolveRelativeTarget=!1,S&&!!S.resumingFrom==!!this.resumingFrom&&!S.options.layoutScroll&&S.target&&this.animationProgress!==1?this.createRelativeTarget(S,this.target,S.target):this.relativeParent=this.relativeTarget=void 0))}getClosestProjectingParent(){if(!(!this.parent||Hd(this.parent.latestValues)||gx(this.parent.latestValues)))return this.parent.isProjecting()?this.parent:this.parent.getClosestProjectingParent()}isProjecting(){return!!((this.relativeTarget||this.targetDelta||this.options.layoutRoot)&&this.layout)}createRelativeTarget(f,h,p){this.relativeParent=f,this.linkedParentVersion=f.layoutVersion,this.forceRelativeParentToResolveTarget(),this.relativeTarget=et(),this.relativeTargetOrigin=et(),rl(this.relativeTargetOrigin,h,p),Qt(this.relativeTarget,this.relativeTargetOrigin)}removeRelativeTarget(){this.relativeParent=this.relativeTarget=void 0}calcProjection(){const f=this.getLead(),h=!!this.resumingFrom||this!==f;let p=!0;if((this.isProjectionDirty||this.parent?.isProjectionDirty)&&(p=!1),h&&(this.isSharedProjectionDirty||this.isTransformDirty)&&(p=!1),this.resolvedRelativeTargetAt===ct.timestamp&&(p=!1),p)return;const{layout:m,layoutId:y}=this.options;if(this.isTreeAnimating=!!(this.parent&&this.parent.isTreeAnimating||this.currentAnimation||this.pendingAnimation),this.isTreeAnimating||(this.targetDelta=this.relativeTarget=void 0),!this.layout||!(m||y))return;Qt(this.layoutCorrected,this.layout.layoutBox);const b=this.treeScale.x,S=this.treeScale.y;L2(this.layoutCorrected,this.treeScale,this.path,h),f.layout&&!f.target&&(this.treeScale.x!==1||this.treeScale.y!==1)&&(f.target=f.layout.layoutBox,f.targetWithTransforms=et());const{target:C}=f;if(!C){this.prevProjectionDelta&&(this.createProjectionDeltas(),this.scheduleRender());return}!this.projectionDelta||!this.prevProjectionDelta?this.createProjectionDeltas():(_y(this.prevProjectionDelta.x,this.projectionDelta.x),_y(this.prevProjectionDelta.y,this.projectionDelta.y)),Qs(this.projectionDelta,this.layoutCorrected,C,this.latestValues),(this.treeScale.x!==b||this.treeScale.y!==S||!Qy(this.projectionDelta.x,this.prevProjectionDelta.x)||!Qy(this.projectionDelta.y,this.prevProjectionDelta.y))&&(this.hasProjected=!0,this.scheduleRender(),this.notifyListeners("projectionUpdate",C))}hide(){this.isVisible=!1}show(){this.isVisible=!0}scheduleRender(f=!0){if(this.options.visualElement?.scheduleRender(),f){const h=this.getStack();h&&h.scheduleRender()}this.resumingFrom&&!this.resumingFrom.instance&&(this.resumingFrom=void 0)}createProjectionDeltas(){this.prevProjectionDelta=Pi(),this.projectionDelta=Pi(),this.projectionDeltaWithTransform=Pi()}setAnimationOrigin(f,h=!1){const p=this.snapshot,m=p?p.latestValues:{},y={...this.latestValues},b=Pi();(!this.relativeParent||!this.relativeParent.options.layoutRoot)&&(this.relativeTarget=this.relativeTargetOrigin=void 0),this.attemptToResolveRelativeTarget=!h;const S=et(),C=p?p.source:void 0,R=this.layout?this.layout.source:void 0,A=C!==R,D=this.getStack(),z=!D||D.members.length<=1,O=!!(A&&!z&&this.options.crossfade===!0&&!this.path.some(BE));this.animationProgress=0;let L;this.mixTargetDelta=X=>{const G=X/1e3;av(b.x,f.x,G),av(b.y,f.y,G),this.setTargetDelta(b),this.relativeTarget&&this.relativeTargetOrigin&&this.layout&&this.relativeParent&&this.relativeParent.layout&&(rl(S,this.layout.layoutBox,this.relativeParent.layout.layoutBox),OE(this.relativeTarget,this.relativeTargetOrigin,S,G),L&&dE(this.relativeTarget,L)&&(this.isProjectionDirty=!1),L||(L=et()),Qt(L,this.relativeTarget)),A&&(this.animationValues=y,mE(y,m,this.latestValues,G,O,z)),this.root.scheduleUpdateProjection(),this.scheduleRender(),this.animationProgress=G},this.mixTargetDelta(this.options.layoutRoot?1e3:0)}startAnimation(f){this.notifyListeners("animationStart"),this.currentAnimation?.stop(),this.resumingFrom?.currentAnimation?.stop(),this.pendingAnimation&&(pa(this.pendingAnimation),this.pendingAnimation=void 0),this.pendingAnimation=je.update(()=>{Zr.hasAnimatedSinceResize=!0,this.motionValue||(this.motionValue=Fi(0)),this.currentAnimation=yE(this.motionValue,[0,1e3],{...f,velocity:0,isSync:!0,onUpdate:h=>{this.mixTargetDelta(h),f.onUpdate&&f.onUpdate(h)},onStop:()=>{},onComplete:()=>{f.onComplete&&f.onComplete(),this.completeAnimation()}}),this.resumingFrom&&(this.resumingFrom.currentAnimation=this.currentAnimation),this.pendingAnimation=void 0})}completeAnimation(){this.resumingFrom&&(this.resumingFrom.currentAnimation=void 0,this.resumingFrom.preserveOpacity=void 0);const f=this.getStack();f&&f.exitAnimationComplete(),this.resumingFrom=this.currentAnimation=this.animationValues=void 0,this.notifyListeners("animationComplete")}finishAnimation(){this.currentAnimation&&(this.mixTargetDelta&&this.mixTargetDelta(SE),this.currentAnimation.stop()),this.completeAnimation()}applyTransformsToTarget(){const f=this.getLead();let{targetWithTransforms:h,target:p,layout:m,latestValues:y}=f;if(!(!h||!p||!m)){if(this!==f&&this.layout&&m&&Bx(this.options.animationType,this.layout.layoutBox,m.layoutBox)){p=this.target||et();const b=pt(this.layout.layoutBox.x);p.x.min=f.target.x.min,p.x.max=p.x.min+b;const S=pt(this.layout.layoutBox.y);p.y.min=f.target.y.min,p.y.max=p.y.min+S}Qt(h,p),_i(h,y),Qs(this.projectionDeltaWithTransform,this.layoutCorrected,h,y)}}registerSharedNode(f,h){this.sharedNodes.has(f)||this.sharedNodes.set(f,new wE),this.sharedNodes.get(f).add(h);const m=h.options.initialPromotionConfig;h.promote({transition:m?m.transition:void 0,preserveFollowOpacity:m&&m.shouldPreserveFollowOpacity?m.shouldPreserveFollowOpacity(h):void 0})}isLead(){const f=this.getStack();return f?f.lead===this:!0}getLead(){const{layoutId:f}=this.options;return f?this.getStack()?.lead||this:this}getPrevLead(){const{layoutId:f}=this.options;return f?this.getStack()?.prevLead:void 0}getStack(){const{layoutId:f}=this.options;if(f)return this.root.sharedNodes.get(f)}promote({needsReset:f,transition:h,preserveFollowOpacity:p}={}){const m=this.getStack();m&&m.promote(this,p),f&&(this.projectionDelta=void 0,this.needsReset=!0),h&&this.setOptions({transition:h})}relegate(){const f=this.getStack();return f?f.relegate(this):!1}resetSkewAndRotation(){const{visualElement:f}=this.options;if(!f)return;let h=!1;const{latestValues:p}=f;if((p.z||p.rotate||p.rotateX||p.rotateY||p.rotateZ||p.skewX||p.skewY)&&(h=!0),!h)return;const m={};p.z&&id("z",f,m,this.animationValues);for(let y=0;y<ad.length;y++)id(`rotate${ad[y]}`,f,m,this.animationValues),id(`skew${ad[y]}`,f,m,this.animationValues);f.render();for(const y in m)f.setStaticValue(y,m[y]),this.animationValues&&(this.animationValues[y]=m[y]);f.scheduleRender()}applyProjectionStyles(f,h){if(!this.instance||this.isSVG)return;if(!this.isVisible){f.visibility="hidden";return}const p=this.getTransformTemplate();if(this.needsReset){this.needsReset=!1,f.visibility="",f.opacity="",f.pointerEvents=Qr(h?.pointerEvents)||"",f.transform=p?p(this.latestValues,""):"none";return}const m=this.getLead();if(!this.projectionDelta||!this.layout||!m.target){this.options.layoutId&&(f.opacity=this.latestValues.opacity!==void 0?this.latestValues.opacity:1,f.pointerEvents=Qr(h?.pointerEvents)||""),this.hasProjected&&!_a(this.latestValues)&&(f.transform=p?p({},""):"none",this.hasProjected=!1);return}f.visibility="";const y=m.animationValues||m.latestValues;this.applyTransformsToTarget();let b=fE(this.projectionDeltaWithTransform,this.treeScale,y);p&&(b=p(y,b)),f.transform=b;const{x:S,y:C}=this.projectionDelta;f.transformOrigin=`${S.origin*100}% ${C.origin*100}% 0`,m.animationValues?f.opacity=m===this?y.opacity??this.latestValues.opacity??1:this.preserveOpacity?this.latestValues.opacity:y.opacityExit:f.opacity=m===this?y.opacity!==void 0?y.opacity:"":y.opacityExit!==void 0?y.opacityExit:0;for(const R in Gd){if(y[R]===void 0)continue;const{correct:A,applyTo:D,isCSSVariable:z}=Gd[R],O=b==="none"?y[R]:A(y[R],m);if(D){const L=D.length;for(let X=0;X<L;X++)f[D[X]]=O}else z?this.options.visualElement.renderState.vars[R]=O:f[R]=O}this.options.layoutId&&(f.pointerEvents=m===this?Qr(h?.pointerEvents)||"":"none")}clearSnapshot(){this.resumeFrom=this.snapshot=void 0}resetTree(){this.root.nodes.forEach(f=>f.currentAnimation?.stop()),this.root.nodes.forEach(ev),this.root.sharedNodes.clear()}}}function CE(n){n.updateLayout()}function AE(n){const i=n.resumeFrom?.snapshot||n.snapshot;if(n.isLead()&&n.layout&&i&&n.hasListeners("didUpdate")){const{layoutBox:s,measuredBox:r}=n.layout,{animationType:l}=n.options,d=i.source!==n.layout.source;l==="size"?on(y=>{const b=d?i.measuredBox[y]:i.layoutBox[y],S=pt(b);b.min=s[y].min,b.max=b.min+S}):Bx(l,i.layoutBox,s)&&on(y=>{const b=d?i.measuredBox[y]:i.layoutBox[y],S=pt(s[y]);b.max=b.min+S,n.relativeTarget&&!n.currentAnimation&&(n.isProjectionDirty=!0,n.relativeTarget[y].max=n.relativeTarget[y].min+S)});const f=Pi();Qs(f,s,i.layoutBox);const h=Pi();d?Qs(h,n.applyTransform(r,!0),i.measuredBox):Qs(h,s,i.layoutBox);const p=!Rx(f);let m=!1;if(!n.resumeFrom){const y=n.getClosestProjectingParent();if(y&&!y.resumeFrom){const{snapshot:b,layout:S}=y;if(b&&S){const C=et();rl(C,i.layoutBox,b.layoutBox);const R=et();rl(R,s,S.layoutBox),kx(C,R)||(m=!0),y.options.layoutRoot&&(n.relativeTarget=R,n.relativeTargetOrigin=C,n.relativeParent=y)}}}n.notifyListeners("didUpdate",{layout:s,snapshot:i,delta:h,layoutDelta:f,hasLayoutChanged:p,hasRelativeLayoutChanged:m})}else if(n.isLead()){const{onExitComplete:s}=n.options;s&&s()}n.options.transition=void 0}function EE(n){n.parent&&(n.isProjecting()||(n.isProjectionDirty=n.parent.isProjectionDirty),n.isSharedProjectionDirty||(n.isSharedProjectionDirty=!!(n.isProjectionDirty||n.parent.isProjectionDirty||n.parent.isSharedProjectionDirty)),n.isTransformDirty||(n.isTransformDirty=n.parent.isTransformDirty))}function ME(n){n.isProjectionDirty=n.isSharedProjectionDirty=n.isTransformDirty=!1}function DE(n){n.clearSnapshot()}function ev(n){n.clearMeasurements()}function tv(n){n.isLayoutDirty=!1}function RE(n){const{visualElement:i}=n.options;i&&i.getProps().onBeforeLayoutMeasure&&i.notify("BeforeLayoutMeasure"),n.resetTransform()}function nv(n){n.finishAnimation(),n.targetDelta=n.relativeTarget=n.target=void 0,n.isProjectionDirty=!0}function kE(n){n.resolveTargetDelta()}function zE(n){n.calcProjection()}function NE(n){n.resetSkewAndRotation()}function jE(n){n.removeLeadSnapshot()}function av(n,i,s){n.translate=_e(i.translate,0,s),n.scale=_e(i.scale,1,s),n.origin=i.origin,n.originPoint=i.originPoint}function iv(n,i,s,r){n.min=_e(i.min,s.min,r),n.max=_e(i.max,s.max,r)}function OE(n,i,s,r){iv(n.x,i.x,s.x,r),iv(n.y,i.y,s.y,r)}function BE(n){return n.animationValues&&n.animationValues.opacityExit!==void 0}const LE={duration:.45,ease:[.4,0,.1,1]},sv=n=>typeof navigator<"u"&&navigator.userAgent&&navigator.userAgent.toLowerCase().includes(n),ov=sv("applewebkit/")&&!sv("chrome/")?Math.round:Gt;function rv(n){n.min=ov(n.min),n.max=ov(n.max)}function PE(n){rv(n.x),rv(n.y)}function Bx(n,i,s){return n==="position"||n==="preserve-aspect"&&!oE(Wy(i),Wy(s),.2)}function VE(n){return n!==n.root&&n.scroll?.wasRoot}const _E=Ox({attachResizeListener:(n,i)=>ao(n,"resize",i),measureScroll:()=>({x:document.documentElement.scrollLeft||document.body?.scrollLeft||0,y:document.documentElement.scrollTop||document.body?.scrollTop||0}),checkIsScrollRoot:()=>!0}),sd={current:void 0},Lx=Ox({measureScroll:n=>({x:n.scrollLeft,y:n.scrollTop}),defaultParent:()=>{if(!sd.current){const n=new _E({});n.mount(window),n.setOptions({layoutScroll:!0}),sd.current=n}return sd.current},resetTransform:(n,i)=>{n.style.transform=i!==void 0?i:"none"},checkIsScrollRoot:n=>window.getComputedStyle(n).position==="fixed"}),Px=w.createContext({transformPagePoint:n=>n,isStatic:!1,reducedMotion:"never"});function UE(n=!0){const i=w.useContext(cf);if(i===null)return[!0,null];const{isPresent:s,onExitComplete:r,register:l}=i,d=w.useId();w.useEffect(()=>{if(n)return l(d)},[n]);const f=w.useCallback(()=>n&&r&&r(d),[d,r,n]);return!s&&r?[!1,f]:[!0]}const Vx=w.createContext({strict:!1}),lv={animation:["animate","variants","whileHover","whileTap","exit","whileInView","whileFocus","whileDrag"],exit:["exit"],drag:["drag","dragControls"],focus:["whileFocus"],hover:["whileHover","onHoverStart","onHoverEnd"],tap:["whileTap","onTap","onTapStart","onTapCancel"],pan:["onPan","onPanStart","onPanSessionStart","onPanEnd"],inView:["whileInView","onViewportEnter","onViewportLeave"],layout:["layout","layoutId"]};let cv=!1;function qE(){if(cv)return;const n={};for(const i in lv)n[i]={isEnabled:s=>lv[i].some(r=>!!s[r])};hx(n),cv=!0}function _x(){return qE(),N2()}function FE(n){const i=_x();for(const s in n)i[s]={...i[s],...n[s]};hx(i)}const HE=new Set(["animate","exit","variants","initial","style","values","variants","transition","transformTemplate","custom","inherit","onBeforeLayoutMeasure","onAnimationStart","onAnimationComplete","onUpdate","onDragStart","onDrag","onDragEnd","onMeasureDragConstraints","onDirectionLock","onDragTransitionEnd","_dragX","_dragY","onHoverStart","onHoverEnd","onViewportEnter","onViewportLeave","globalTapTarget","propagate","ignoreStrict","viewport"]);function ll(n){return n.startsWith("while")||n.startsWith("drag")&&n!=="draggable"||n.startsWith("layout")||n.startsWith("onTap")||n.startsWith("onPan")||n.startsWith("onLayout")||HE.has(n)}let Ux=n=>!ll(n);function IE(n){typeof n=="function"&&(Ux=i=>i.startsWith("on")?!ll(i):n(i))}try{IE(require("@emotion/is-prop-valid").default)}catch{}function GE(n,i,s){const r={};for(const l in n)l==="values"&&typeof n.values=="object"||(Ux(l)||s===!0&&ll(l)||!i&&!ll(l)||n.draggable&&l.startsWith("onDrag"))&&(r[l]=n[l]);return r}const vl=w.createContext({});function YE(n,i){if(yl(n)){const{initial:s,animate:r}=n;return{initial:s===!1||no(s)?s:void 0,animate:no(r)?r:void 0}}return n.inherit!==!1?i:{}}function KE(n){const{initial:i,animate:s}=YE(n,w.useContext(vl));return w.useMemo(()=>({initial:i,animate:s}),[uv(i),uv(s)])}function uv(n){return Array.isArray(n)?n.join(" "):n}const Pf=()=>({style:{},transform:{},transformOrigin:{},vars:{}});function qx(n,i,s){for(const r in i)!ft(i[r])&&!xx(r,s)&&(n[r]=i[r])}function XE({transformTemplate:n},i){return w.useMemo(()=>{const s=Pf();return Bf(s,i,n),Object.assign({},s.vars,s.style)},[i])}function WE(n,i){const s=n.style||{},r={};return qx(r,s,n),Object.assign(r,XE(n,i)),r}function QE(n,i){const s={},r=WE(n,i);return n.drag&&n.dragListener!==!1&&(s.draggable=!1,r.userSelect=r.WebkitUserSelect=r.WebkitTouchCallout="none",r.touchAction=n.drag===!0?"none":`pan-${n.drag==="x"?"y":"x"}`),n.tabIndex===void 0&&(n.onTap||n.onTapStart||n.whileTap)&&(s.tabIndex=0),s.style=r,s}const Fx=()=>({...Pf(),attrs:{}});function ZE(n,i,s,r){const l=w.useMemo(()=>{const d=Fx();return wx(d,i,Tx(r),n.transformTemplate,n.style),{...d.attrs,style:{...d.style}}},[i]);if(n.style){const d={};qx(d,n.style,n),l.style={...d,...l.style}}return l}const JE=["animate","circle","defs","desc","ellipse","g","image","line","filter","marker","mask","metadata","path","pattern","polygon","polyline","rect","stop","switch","symbol","svg","text","tspan","use","view"];function Vf(n){return typeof n!="string"||n.includes("-")?!1:!!(JE.indexOf(n)>-1||/[A-Z]/u.test(n))}function $E(n,i,s,{latestValues:r},l,d=!1,f){const p=(f??Vf(n)?ZE:QE)(i,r,l,n),m=GE(i,typeof n=="string",d),y=n!==w.Fragment?{...m,...p,ref:s}:{},{children:b}=i,S=w.useMemo(()=>ft(b)?b.get():b,[b]);return w.createElement(n,{...y,children:S})}function eM({scrapeMotionValuesFromProps:n,createRenderState:i},s,r,l){return{latestValues:tM(s,r,l,n),renderState:i()}}function tM(n,i,s,r){const l={},d=r(n,{});for(const S in d)l[S]=Qr(d[S]);let{initial:f,animate:h}=n;const p=yl(n),m=dx(n);i&&m&&!p&&n.inherit!==!1&&(f===void 0&&(f=i.initial),h===void 0&&(h=i.animate));let y=s?s.initial===!1:!1;y=y||f===!1;const b=y?h:f;if(b&&typeof b!="boolean"&&!gl(b)){const S=Array.isArray(b)?b:[b];for(let C=0;C<S.length;C++){const R=Mf(n,S[C]);if(R){const{transitionEnd:A,transition:D,...z}=R;for(const O in z){let L=z[O];if(Array.isArray(L)){const X=y?L.length-1:0;L=L[X]}L!==null&&(l[O]=L)}for(const O in A)l[O]=A[O]}}}return l}const Hx=n=>(i,s)=>{const r=w.useContext(vl),l=w.useContext(cf),d=()=>eM(n,i,r,l);return s?d():aC(d)},nM=Hx({scrapeMotionValuesFromProps:Lf,createRenderState:Pf}),aM=Hx({scrapeMotionValuesFromProps:Cx,createRenderState:Fx}),iM=Symbol.for("motionComponentSymbol");function sM(n,i,s){const r=w.useRef(s);w.useInsertionEffect(()=>{r.current=s});const l=w.useRef(null);return w.useCallback(d=>{d&&n.onMount?.(d),i&&(d?i.mount(d):i.unmount());const f=r.current;if(typeof f=="function")if(d){const h=f(d);typeof h=="function"&&(l.current=h)}else l.current?(l.current(),l.current=null):f(d);else f&&(f.current=d)},[i])}const Ix=w.createContext({});function Oi(n){return n&&typeof n=="object"&&Object.prototype.hasOwnProperty.call(n,"current")}function oM(n,i,s,r,l,d){const{visualElement:f}=w.useContext(vl),h=w.useContext(Vx),p=w.useContext(cf),m=w.useContext(Px),y=m.reducedMotion,b=m.skipAnimations,S=w.useRef(null),C=w.useRef(!1);r=r||h.renderer,!S.current&&r&&(S.current=r(n,{visualState:i,parent:f,props:s,presenceContext:p,blockInitialAnimation:p?p.initial===!1:!1,reducedMotionConfig:y,skipAnimations:b,isSVG:d}),C.current&&S.current&&(S.current.manuallyAnimateOnMount=!0));const R=S.current,A=w.useContext(Ix);R&&!R.projection&&l&&(R.type==="html"||R.type==="svg")&&rM(S.current,s,l,A);const D=w.useRef(!1);w.useInsertionEffect(()=>{R&&D.current&&R.update(s,p)});const z=s[Jb],O=w.useRef(!!z&&!window.MotionHandoffIsComplete?.(z)&&window.MotionHasOptimisedAnimation?.(z));return iC(()=>{C.current=!0,R&&(D.current=!0,window.MotionIsMounted=!0,R.updateFeatures(),R.scheduleRenderMicrotask(),O.current&&R.animationState&&R.animationState.animateChanges())}),w.useEffect(()=>{R&&(!O.current&&R.animationState&&R.animationState.animateChanges(),O.current&&(queueMicrotask(()=>{window.MotionHandoffMarkAsComplete?.(z)}),O.current=!1),R.enteringChildren=void 0)}),R}function rM(n,i,s,r){const{layoutId:l,layout:d,drag:f,dragConstraints:h,layoutScroll:p,layoutRoot:m,layoutCrossfade:y}=i;n.projection=new s(n.latestValues,i["data-framer-portal-id"]?void 0:Gx(n.parent)),n.projection.setOptions({layoutId:l,layout:d,alwaysMeasureLayout:!!f||h&&Oi(h),visualElement:n,animationType:typeof d=="string"?d:"both",initialPromotionConfig:r,crossfade:y,layoutScroll:p,layoutRoot:m})}function Gx(n){if(n)return n.options.allowProjection!==!1?n.projection:Gx(n.parent)}function od(n,{forwardMotionProps:i=!1,type:s}={},r,l){r&&FE(r);const d=s?s==="svg":Vf(n),f=d?aM:nM;function h(m,y){let b;const S={...w.useContext(Px),...m,layoutId:lM(m)},{isStatic:C}=S,R=KE(m),A=f(m,C);if(!C&&hb){cM();const D=uM(S);b=D.MeasureLayout,R.visualElement=oM(n,A,S,l,D.ProjectionNode,d)}return v.jsxs(vl.Provider,{value:R,children:[b&&R.visualElement?v.jsx(b,{visualElement:R.visualElement,...S}):null,$E(n,m,sM(A,R.visualElement,y),A,C,i,d)]})}h.displayName=`motion.${typeof n=="string"?n:`create(${n.displayName??n.name??""})`}`;const p=w.forwardRef(h);return p[iM]=n,p}function lM({layoutId:n}){const i=w.useContext(fb).id;return i&&n!==void 0?i+"-"+n:n}function cM(n,i){w.useContext(Vx).strict}function uM(n){const i=_x(),{drag:s,layout:r}=i;if(!s&&!r)return{};const l={...s,...r};return{MeasureLayout:s?.isEnabled(n)||r?.isEnabled(n)?l.MeasureLayout:void 0,ProjectionNode:l.ProjectionNode}}function dM(n,i){if(typeof Proxy>"u")return od;const s=new Map,r=(d,f)=>od(d,f,n,i),l=(d,f)=>r(d,f);return new Proxy(l,{get:(d,f)=>f==="create"?r:(s.has(f)||s.set(f,od(f,void 0,n,i)),s.get(f))})}const fM=(n,i)=>i.isSVG??Vf(n)?new W2(i):new H2(i,{allowProjection:n!==w.Fragment});class hM extends ya{constructor(i){super(i),i.animationState||(i.animationState=eE(i))}updateAnimationControlsSubscription(){const{animate:i}=this.node.getProps();gl(i)&&(this.unmountControls=i.subscribe(this.node))}mount(){this.updateAnimationControlsSubscription()}update(){const{animate:i}=this.node.getProps(),{animate:s}=this.node.prevProps||{};i!==s&&this.updateAnimationControlsSubscription()}unmount(){this.node.animationState.reset(),this.unmountControls?.()}}let mM=0;class pM extends ya{constructor(){super(...arguments),this.id=mM++}update(){if(!this.node.presenceContext)return;const{isPresent:i,onExitComplete:s}=this.node.presenceContext,{isPresent:r}=this.node.prevPresenceContext||{};if(!this.node.animationState||i===r)return;const l=this.node.animationState.setActive("exit",!i);s&&!i&&l.then(()=>{s(this.id)})}mount(){const{register:i,onExitComplete:s}=this.node.presenceContext||{};s&&s(this.id),i&&(this.unmount=i(this.id))}unmount(){}}const gM={animation:{Feature:hM},exit:{Feature:pM}};function mo(n){return{point:{x:n.pageX,y:n.pageY}}}const yM=n=>i=>zf(i)&&n(i,mo(i));function Zs(n,i,s,r){return ao(n,i,yM(s),r)}const Yx=({current:n})=>n?n.ownerDocument.defaultView:null,dv=(n,i)=>Math.abs(n-i);function vM(n,i){const s=dv(n.x,i.x),r=dv(n.y,i.y);return Math.sqrt(s**2+r**2)}const fv=new Set(["auto","scroll"]);class Kx{constructor(i,s,{transformPagePoint:r,contextWindow:l=window,dragSnapToOrigin:d=!1,distanceThreshold:f=3,element:h}={}){if(this.startEvent=null,this.lastMoveEvent=null,this.lastMoveEventInfo=null,this.handlers={},this.contextWindow=window,this.scrollPositions=new Map,this.removeScrollListeners=null,this.onElementScroll=C=>{this.handleScroll(C.target)},this.onWindowScroll=()=>{this.handleScroll(window)},this.updatePoint=()=>{if(!(this.lastMoveEvent&&this.lastMoveEventInfo))return;const C=ld(this.lastMoveEventInfo,this.history),R=this.startEvent!==null,A=vM(C.offset,{x:0,y:0})>=this.distanceThreshold;if(!R&&!A)return;const{point:D}=C,{timestamp:z}=ct;this.history.push({...D,timestamp:z});const{onStart:O,onMove:L}=this.handlers;R||(O&&O(this.lastMoveEvent,C),this.startEvent=this.lastMoveEvent),L&&L(this.lastMoveEvent,C)},this.handlePointerMove=(C,R)=>{this.lastMoveEvent=C,this.lastMoveEventInfo=rd(R,this.transformPagePoint),je.update(this.updatePoint,!0)},this.handlePointerUp=(C,R)=>{this.end();const{onEnd:A,onSessionEnd:D,resumeAnimation:z}=this.handlers;if((this.dragSnapToOrigin||!this.startEvent)&&z&&z(),!(this.lastMoveEvent&&this.lastMoveEventInfo))return;const O=ld(C.type==="pointercancel"?this.lastMoveEventInfo:rd(R,this.transformPagePoint),this.history);this.startEvent&&A&&A(C,O),D&&D(C,O)},!zf(i))return;this.dragSnapToOrigin=d,this.handlers=s,this.transformPagePoint=r,this.distanceThreshold=f,this.contextWindow=l||window;const p=mo(i),m=rd(p,this.transformPagePoint),{point:y}=m,{timestamp:b}=ct;this.history=[{...y,timestamp:b}];const{onSessionStart:S}=s;S&&S(i,ld(m,this.history)),this.removeListeners=uo(Zs(this.contextWindow,"pointermove",this.handlePointerMove),Zs(this.contextWindow,"pointerup",this.handlePointerUp),Zs(this.contextWindow,"pointercancel",this.handlePointerUp)),h&&this.startScrollTracking(h)}startScrollTracking(i){let s=i.parentElement;for(;s;){const r=getComputedStyle(s);(fv.has(r.overflowX)||fv.has(r.overflowY))&&this.scrollPositions.set(s,{x:s.scrollLeft,y:s.scrollTop}),s=s.parentElement}this.scrollPositions.set(window,{x:window.scrollX,y:window.scrollY}),window.addEventListener("scroll",this.onElementScroll,{capture:!0,passive:!0}),window.addEventListener("scroll",this.onWindowScroll,{passive:!0}),this.removeScrollListeners=()=>{window.removeEventListener("scroll",this.onElementScroll,{capture:!0}),window.removeEventListener("scroll",this.onWindowScroll)}}handleScroll(i){const s=this.scrollPositions.get(i);if(!s)return;const r=i===window,l=r?{x:window.scrollX,y:window.scrollY}:{x:i.scrollLeft,y:i.scrollTop},d={x:l.x-s.x,y:l.y-s.y};d.x===0&&d.y===0||(r?this.lastMoveEventInfo&&(this.lastMoveEventInfo.point.x+=d.x,this.lastMoveEventInfo.point.y+=d.y):this.history.length>0&&(this.history[0].x-=d.x,this.history[0].y-=d.y),this.scrollPositions.set(i,l),je.update(this.updatePoint,!0))}updateHandlers(i){this.handlers=i}end(){this.removeListeners&&this.removeListeners(),this.removeScrollListeners&&this.removeScrollListeners(),this.scrollPositions.clear(),pa(this.updatePoint)}}function rd(n,i){return i?{point:i(n.point)}:n}function hv(n,i){return{x:n.x-i.x,y:n.y-i.y}}function ld({point:n},i){return{point:n,delta:hv(n,Xx(i)),offset:hv(n,bM(i)),velocity:xM(i,.1)}}function bM(n){return n[0]}function Xx(n){return n[n.length-1]}function xM(n,i){if(n.length<2)return{x:0,y:0};let s=n.length-1,r=null;const l=Xx(n);for(;s>=0&&(r=n[s],!(l.timestamp-r.timestamp>Jt(i)));)s--;if(!r)return{x:0,y:0};r===n[0]&&n.length>2&&l.timestamp-r.timestamp>Jt(i)*2&&(r=n[1]);const d=It(l.timestamp-r.timestamp);if(d===0)return{x:0,y:0};const f={x:(l.x-r.x)/d,y:(l.y-r.y)/d};return f.x===1/0&&(f.x=0),f.y===1/0&&(f.y=0),f}function wM(n,{min:i,max:s},r){return i!==void 0&&n<i?n=r?_e(i,n,r.min):Math.max(n,i):s!==void 0&&n>s&&(n=r?_e(s,n,r.max):Math.min(n,s)),n}function mv(n,i,s){return{min:i!==void 0?n.min+i:void 0,max:s!==void 0?n.max+s-(n.max-n.min):void 0}}function SM(n,{top:i,left:s,bottom:r,right:l}){return{x:mv(n.x,s,l),y:mv(n.y,i,r)}}function pv(n,i){let s=i.min-n.min,r=i.max-n.max;return i.max-i.min<n.max-n.min&&([s,r]=[r,s]),{min:s,max:r}}function TM(n,i){return{x:pv(n.x,i.x),y:pv(n.y,i.y)}}function CM(n,i){let s=.5;const r=pt(n),l=pt(i);return l>r?s=$s(i.min,i.max-r,n.min):r>l&&(s=$s(n.min,n.max-l,i.min)),dn(0,1,s)}function AM(n,i){const s={};return i.min!==void 0&&(s.min=i.min-n.min),i.max!==void 0&&(s.max=i.max-n.min),s}const Yd=.35;function EM(n=Yd){return n===!1?n=0:n===!0&&(n=Yd),{x:gv(n,"left","right"),y:gv(n,"top","bottom")}}function gv(n,i,s){return{min:yv(n,i),max:yv(n,s)}}function yv(n,i){return typeof n=="number"?n:n[i]||0}const MM=new WeakMap;class DM{constructor(i){this.openDragLock=null,this.isDragging=!1,this.currentDirection=null,this.originPoint={x:0,y:0},this.constraints=!1,this.hasMutatedConstraints=!1,this.elastic=et(),this.latestPointerEvent=null,this.latestPanInfo=null,this.visualElement=i}start(i,{snapToCursor:s=!1,distanceThreshold:r}={}){const{presenceContext:l}=this.visualElement;if(l&&l.isPresent===!1)return;const d=b=>{s&&this.snapToCursor(mo(b).point),this.stopAnimation()},f=(b,S)=>{const{drag:C,dragPropagation:R,onDragStart:A}=this.getProps();if(C&&!R&&(this.openDragLock&&this.openDragLock(),this.openDragLock=l2(C),!this.openDragLock))return;this.latestPointerEvent=b,this.latestPanInfo=S,this.isDragging=!0,this.currentDirection=null,this.resolveConstraints(),this.visualElement.projection&&(this.visualElement.projection.isAnimationBlocked=!0,this.visualElement.projection.target=void 0),on(z=>{let O=this.getAxisMotionValue(z).get()||0;if(ln.test(O)){const{projection:L}=this.visualElement;if(L&&L.layout){const X=L.layout.layoutBox[z];X&&(O=pt(X)*(parseFloat(O)/100))}}this.originPoint[z]=O}),A&&je.update(()=>A(b,S),!1,!0),_d(this.visualElement,"transform");const{animationState:D}=this.visualElement;D&&D.setActive("whileDrag",!0)},h=(b,S)=>{this.latestPointerEvent=b,this.latestPanInfo=S;const{dragPropagation:C,dragDirectionLock:R,onDirectionLock:A,onDrag:D}=this.getProps();if(!C&&!this.openDragLock)return;const{offset:z}=S;if(R&&this.currentDirection===null){this.currentDirection=kM(z),this.currentDirection!==null&&A&&A(this.currentDirection);return}this.updateAxis("x",S.point,z),this.updateAxis("y",S.point,z),this.visualElement.render(),D&&je.update(()=>D(b,S),!1,!0)},p=(b,S)=>{this.latestPointerEvent=b,this.latestPanInfo=S,this.stop(b,S),this.latestPointerEvent=null,this.latestPanInfo=null},m=()=>{const{dragSnapToOrigin:b}=this.getProps();(b||this.constraints)&&this.startAnimation({x:0,y:0})},{dragSnapToOrigin:y}=this.getProps();this.panSession=new Kx(i,{onSessionStart:d,onStart:f,onMove:h,onSessionEnd:p,resumeAnimation:m},{transformPagePoint:this.visualElement.getTransformPagePoint(),dragSnapToOrigin:y,distanceThreshold:r,contextWindow:Yx(this.visualElement),element:this.visualElement.current})}stop(i,s){const r=i||this.latestPointerEvent,l=s||this.latestPanInfo,d=this.isDragging;if(this.cancel(),!d||!l||!r)return;const{velocity:f}=l;this.startAnimation(f);const{onDragEnd:h}=this.getProps();h&&je.postRender(()=>h(r,l))}cancel(){this.isDragging=!1;const{projection:i,animationState:s}=this.visualElement;i&&(i.isAnimationBlocked=!1),this.endPanSession();const{dragPropagation:r}=this.getProps();!r&&this.openDragLock&&(this.openDragLock(),this.openDragLock=null),s&&s.setActive("whileDrag",!1)}endPanSession(){this.panSession&&this.panSession.end(),this.panSession=void 0}updateAxis(i,s,r){const{drag:l}=this.getProps();if(!r||!Br(i,l,this.currentDirection))return;const d=this.getAxisMotionValue(i);let f=this.originPoint[i]+r[i];this.constraints&&this.constraints[i]&&(f=wM(f,this.constraints[i],this.elastic[i])),d.set(f)}resolveConstraints(){const{dragConstraints:i,dragElastic:s}=this.getProps(),r=this.visualElement.projection&&!this.visualElement.projection.layout?this.visualElement.projection.measure(!1):this.visualElement.projection?.layout,l=this.constraints;i&&Oi(i)?this.constraints||(this.constraints=this.resolveRefConstraints()):i&&r?this.constraints=SM(r.layoutBox,i):this.constraints=!1,this.elastic=EM(s),l!==this.constraints&&!Oi(i)&&r&&this.constraints&&!this.hasMutatedConstraints&&on(d=>{this.constraints!==!1&&this.getAxisMotionValue(d)&&(this.constraints[d]=AM(r.layoutBox[d],this.constraints[d]))})}resolveRefConstraints(){const{dragConstraints:i,onMeasureDragConstraints:s}=this.getProps();if(!i||!Oi(i))return!1;const r=i.current,{projection:l}=this.visualElement;if(!l||!l.layout)return!1;const d=P2(r,l.root,this.visualElement.getTransformPagePoint());let f=TM(l.layout.layoutBox,d);if(s){const h=s(O2(f));this.hasMutatedConstraints=!!h,h&&(f=px(h))}return f}startAnimation(i){const{drag:s,dragMomentum:r,dragElastic:l,dragTransition:d,dragSnapToOrigin:f,onDragTransitionEnd:h}=this.getProps(),p=this.constraints||{},m=on(y=>{if(!Br(y,s,this.currentDirection))return;let b=p&&p[y]||{};f&&(b={min:0,max:0});const S=l?200:1e6,C=l?40:1e7,R={type:"inertia",velocity:r?i[y]:0,bounceStiffness:S,bounceDamping:C,timeConstant:750,restDelta:1,restSpeed:10,...d,...b};return this.startAxisValueAnimation(y,R)});return Promise.all(m).then(h)}startAxisValueAnimation(i,s){const r=this.getAxisMotionValue(i);return _d(this.visualElement,i),r.start(Ef(i,r,0,s,this.visualElement,!1))}stopAnimation(){on(i=>this.getAxisMotionValue(i).stop())}getAxisMotionValue(i){const s=`_drag${i.toUpperCase()}`,r=this.visualElement.getProps(),l=r[s];return l||this.visualElement.getValue(i,(r.initial?r.initial[i]:void 0)||0)}snapToCursor(i){on(s=>{const{drag:r}=this.getProps();if(!Br(s,r,this.currentDirection))return;const{projection:l}=this.visualElement,d=this.getAxisMotionValue(s);if(l&&l.layout){const{min:f,max:h}=l.layout.layoutBox[s],p=d.get()||0;d.set(i[s]-_e(f,h,.5)+p)}})}scalePositionWithinConstraints(){if(!this.visualElement.current)return;const{drag:i,dragConstraints:s}=this.getProps(),{projection:r}=this.visualElement;if(!Oi(s)||!r||!this.constraints)return;this.stopAnimation();const l={x:0,y:0};on(f=>{const h=this.getAxisMotionValue(f);if(h&&this.constraints!==!1){const p=h.get();l[f]=CM({min:p,max:p},this.constraints[f])}});const{transformTemplate:d}=this.visualElement.getProps();this.visualElement.current.style.transform=d?d({},""):"none",r.root&&r.root.updateScroll(),r.updateLayout(),this.constraints=!1,this.resolveConstraints(),on(f=>{if(!Br(f,i,null))return;const h=this.getAxisMotionValue(f),{min:p,max:m}=this.constraints[f];h.set(_e(p,m,l[f]))}),this.visualElement.render()}addListeners(){if(!this.visualElement.current)return;MM.set(this.visualElement,this);const i=this.visualElement.current,s=Zs(i,"pointerdown",m=>{const{drag:y,dragListener:b=!0}=this.getProps(),S=m.target,C=S!==i&&m2(S);y&&b&&!C&&this.start(m)});let r;const l=()=>{const{dragConstraints:m}=this.getProps();Oi(m)&&m.current&&(this.constraints=this.resolveRefConstraints(),r||(r=RM(i,m.current,()=>this.scalePositionWithinConstraints())))},{projection:d}=this.visualElement,f=d.addEventListener("measure",l);d&&!d.layout&&(d.root&&d.root.updateScroll(),d.updateLayout()),je.read(l);const h=ao(window,"resize",()=>this.scalePositionWithinConstraints()),p=d.addEventListener("didUpdate",(({delta:m,hasLayoutChanged:y})=>{this.isDragging&&y&&(on(b=>{const S=this.getAxisMotionValue(b);S&&(this.originPoint[b]+=m[b].translate,S.set(S.get()+m[b].translate))}),this.visualElement.render())}));return()=>{h(),s(),f(),p&&p(),r&&r()}}getProps(){const i=this.visualElement.getProps(),{drag:s=!1,dragDirectionLock:r=!1,dragPropagation:l=!1,dragConstraints:d=!1,dragElastic:f=Yd,dragMomentum:h=!0}=i;return{...i,drag:s,dragDirectionLock:r,dragPropagation:l,dragConstraints:d,dragElastic:f,dragMomentum:h}}}function vv(n){let i=!0;return()=>{if(i){i=!1;return}n()}}function RM(n,i,s){const r=My(n,vv(s)),l=My(i,vv(s));return()=>{r(),l()}}function Br(n,i,s){return(i===!0||i===n)&&(s===null||s===n)}function kM(n,i=10){let s=null;return Math.abs(n.y)>i?s="y":Math.abs(n.x)>i&&(s="x"),s}class zM extends ya{constructor(i){super(i),this.removeGroupControls=Gt,this.removeListeners=Gt,this.controls=new DM(i)}mount(){const{dragControls:i}=this.node.getProps();i&&(this.removeGroupControls=i.subscribe(this.controls)),this.removeListeners=this.controls.addListeners()||Gt}update(){const{dragControls:i}=this.node.getProps(),{dragControls:s}=this.node.prevProps||{};i!==s&&(this.removeGroupControls(),i&&(this.removeGroupControls=i.subscribe(this.controls)))}unmount(){this.removeGroupControls(),this.removeListeners(),this.controls.isDragging||this.controls.endPanSession()}}const cd=n=>(i,s)=>{n&&je.update(()=>n(i,s),!1,!0)};class NM extends ya{constructor(){super(...arguments),this.removePointerDownListener=Gt}onPointerDown(i){this.session=new Kx(i,this.createPanHandlers(),{transformPagePoint:this.node.getTransformPagePoint(),contextWindow:Yx(this.node)})}createPanHandlers(){const{onPanSessionStart:i,onPanStart:s,onPan:r,onPanEnd:l}=this.node.getProps();return{onSessionStart:cd(i),onStart:cd(s),onMove:cd(r),onEnd:(d,f)=>{delete this.session,l&&je.postRender(()=>l(d,f))}}}mount(){this.removePointerDownListener=Zs(this.node.current,"pointerdown",i=>this.onPointerDown(i))}update(){this.session&&this.session.updateHandlers(this.createPanHandlers())}unmount(){this.removePointerDownListener(),this.session&&this.session.end()}}let ud=!1;class jM extends w.Component{componentDidMount(){const{visualElement:i,layoutGroup:s,switchLayoutGroup:r,layoutId:l}=this.props,{projection:d}=i;d&&(s.group&&s.group.add(d),r&&r.register&&l&&r.register(d),ud&&d.root.didUpdate(),d.addEventListener("animationComplete",()=>{this.safeToRemove()}),d.setOptions({...d.options,layoutDependency:this.props.layoutDependency,onExitComplete:()=>this.safeToRemove()})),Zr.hasEverUpdated=!0}getSnapshotBeforeUpdate(i){const{layoutDependency:s,visualElement:r,drag:l,isPresent:d}=this.props,{projection:f}=r;return f&&(f.isPresent=d,i.layoutDependency!==s&&f.setOptions({...f.options,layoutDependency:s}),ud=!0,l||i.layoutDependency!==s||s===void 0||i.isPresent!==d?f.willUpdate():this.safeToRemove(),i.isPresent!==d&&(d?f.promote():f.relegate()||je.postRender(()=>{const h=f.getStack();(!h||!h.members.length)&&this.safeToRemove()}))),null}componentDidUpdate(){const{projection:i}=this.props.visualElement;i&&(i.root.didUpdate(),kf.postRender(()=>{!i.currentAnimation&&i.isLead()&&this.safeToRemove()}))}componentWillUnmount(){const{visualElement:i,layoutGroup:s,switchLayoutGroup:r}=this.props,{projection:l}=i;ud=!0,l&&(l.scheduleCheckAfterUnmount(),s&&s.group&&s.group.remove(l),r&&r.deregister&&r.deregister(l))}safeToRemove(){const{safeToRemove:i}=this.props;i&&i()}render(){return null}}function Wx(n){const[i,s]=UE(),r=w.useContext(fb);return v.jsx(jM,{...n,layoutGroup:r,switchLayoutGroup:w.useContext(Ix),isPresent:i,safeToRemove:s})}const OM={pan:{Feature:NM},drag:{Feature:zM,ProjectionNode:Lx,MeasureLayout:Wx}};function bv(n,i,s){const{props:r}=n;n.animationState&&r.whileHover&&n.animationState.setActive("whileHover",s==="Start");const l="onHover"+s,d=r[l];d&&je.postRender(()=>d(i,mo(i)))}class BM extends ya{mount(){const{current:i}=this.node;i&&(this.unmount=u2(i,(s,r)=>(bv(this.node,r,"Start"),l=>bv(this.node,l,"End"))))}unmount(){}}class LM extends ya{constructor(){super(...arguments),this.isActive=!1}onFocus(){let i=!1;try{i=this.node.current.matches(":focus-visible")}catch{i=!0}!i||!this.node.animationState||(this.node.animationState.setActive("whileFocus",!0),this.isActive=!0)}onBlur(){!this.isActive||!this.node.animationState||(this.node.animationState.setActive("whileFocus",!1),this.isActive=!1)}mount(){this.unmount=uo(ao(this.node.current,"focus",()=>this.onFocus()),ao(this.node.current,"blur",()=>this.onBlur()))}unmount(){}}function xv(n,i,s){const{props:r}=n;if(n.current instanceof HTMLButtonElement&&n.current.disabled)return;n.animationState&&r.whileTap&&n.animationState.setActive("whileTap",s==="Start");const l="onTap"+(s==="End"?"":s),d=r[l];d&&je.postRender(()=>d(i,mo(i)))}class PM extends ya{mount(){const{current:i}=this.node;if(!i)return;const{globalTapTarget:s,propagate:r}=this.node.props;this.unmount=g2(i,(l,d)=>(xv(this.node,d,"Start"),(f,{success:h})=>xv(this.node,f,h?"End":"Cancel")),{useGlobalTarget:s,stopPropagation:r?.tap===!1})}unmount(){}}const Kd=new WeakMap,dd=new WeakMap,VM=n=>{const i=Kd.get(n.target);i&&i(n)},_M=n=>{n.forEach(VM)};function UM({root:n,...i}){const s=n||document;dd.has(s)||dd.set(s,{});const r=dd.get(s),l=JSON.stringify(i);return r[l]||(r[l]=new IntersectionObserver(_M,{root:n,...i})),r[l]}function qM(n,i,s){const r=UM(i);return Kd.set(n,s),r.observe(n),()=>{Kd.delete(n),r.unobserve(n)}}const FM={some:0,all:1};class HM extends ya{constructor(){super(...arguments),this.hasEnteredView=!1,this.isInView=!1}startObserver(){this.unmount();const{viewport:i={}}=this.node.getProps(),{root:s,margin:r,amount:l="some",once:d}=i,f={root:s?s.current:void 0,rootMargin:r,threshold:typeof l=="number"?l:FM[l]},h=p=>{const{isIntersecting:m}=p;if(this.isInView===m||(this.isInView=m,d&&!m&&this.hasEnteredView))return;m&&(this.hasEnteredView=!0),this.node.animationState&&this.node.animationState.setActive("whileInView",m);const{onViewportEnter:y,onViewportLeave:b}=this.node.getProps(),S=m?y:b;S&&S(p)};return qM(this.node.current,f,h)}mount(){this.startObserver()}update(){if(typeof IntersectionObserver>"u")return;const{props:i,prevProps:s}=this.node;["amount","margin","root"].some(IM(i,s))&&this.startObserver()}unmount(){}}function IM({viewport:n={}},{viewport:i={}}={}){return s=>n[s]!==i[s]}const GM={inView:{Feature:HM},tap:{Feature:PM},focus:{Feature:LM},hover:{Feature:BM}},YM={layout:{ProjectionNode:Lx,MeasureLayout:Wx}},KM={...gM,...GM,...OM,...YM},ue=dM(KM,fM);const XM=n=>n.replace(/([a-z0-9])([A-Z])/g,"$1-$2").toLowerCase(),WM=n=>n.replace(/^([A-Z])|[\s-_]+(\w)/g,(i,s,r)=>r?r.toUpperCase():s.toLowerCase()),wv=n=>{const i=WM(n);return i.charAt(0).toUpperCase()+i.slice(1)},Qx=(...n)=>n.filter((i,s,r)=>!!i&&i.trim()!==""&&r.indexOf(i)===s).join(" ").trim(),QM=n=>{for(const i in n)if(i.startsWith("aria-")||i==="role"||i==="title")return!0};var ZM={xmlns:"http://www.w3.org/2000/svg",width:24,height:24,viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:2,strokeLinecap:"round",strokeLinejoin:"round"};const JM=w.forwardRef(({color:n="currentColor",size:i=24,strokeWidth:s=2,absoluteStrokeWidth:r,className:l="",children:d,iconNode:f,...h},p)=>w.createElement("svg",{ref:p,...ZM,width:i,height:i,stroke:n,strokeWidth:r?Number(s)*24/Number(i):s,className:Qx("lucide",l),...!d&&!QM(h)&&{"aria-hidden":"true"},...h},[...f.map(([m,y])=>w.createElement(m,y)),...Array.isArray(d)?d:[d]]));const Ae=(n,i)=>{const s=w.forwardRef(({className:r,...l},d)=>w.createElement(JM,{ref:d,iconNode:i,className:Qx(`lucide-${XM(wv(n))}`,`lucide-${n}`,r),...l}));return s.displayName=wv(n),s};const $M=[["path",{d:"m12 19-7-7 7-7",key:"1l729n"}],["path",{d:"M19 12H5",key:"x3x0zl"}]],fd=Ae("arrow-left",$M);const eD=[["path",{d:"M5 12h14",key:"1ays0h"}],["path",{d:"m12 5 7 7-7 7",key:"xquz4c"}]],io=Ae("arrow-right",eD);const tD=[["path",{d:"m15.477 12.89 1.515 8.526a.5.5 0 0 1-.81.47l-3.58-2.687a1 1 0 0 0-1.197 0l-3.586 2.686a.5.5 0 0 1-.81-.469l1.514-8.526",key:"1yiouv"}],["circle",{cx:"12",cy:"8",r:"6",key:"1vp47v"}]],nD=Ae("award",tD);const aD=[["path",{d:"M12 7v14",key:"1akyts"}],["path",{d:"M3 18a1 1 0 0 1-1-1V4a1 1 0 0 1 1-1h5a4 4 0 0 1 4 4 4 4 0 0 1 4-4h5a1 1 0 0 1 1 1v13a1 1 0 0 1-1 1h-6a3 3 0 0 0-3 3 3 3 0 0 0-3-3z",key:"ruj8y"}]],iD=Ae("book-open",aD);const sD=[["path",{d:"m19 21-7-4-7 4V5a2 2 0 0 1 2-2h10a2 2 0 0 1 2 2v16z",key:"1fy3hk"}]],oD=Ae("bookmark",sD);const rD=[["path",{d:"M12 18V5",key:"adv99a"}],["path",{d:"M15 13a4.17 4.17 0 0 1-3-4 4.17 4.17 0 0 1-3 4",key:"1e3is1"}],["path",{d:"M17.598 6.5A3 3 0 1 0 12 5a3 3 0 1 0-5.598 1.5",key:"1gqd8o"}],["path",{d:"M17.997 5.125a4 4 0 0 1 2.526 5.77",key:"iwvgf7"}],["path",{d:"M18 18a4 4 0 0 0 2-7.464",key:"efp6ie"}],["path",{d:"M19.967 17.483A4 4 0 1 1 12 18a4 4 0 1 1-7.967-.517",key:"1gq6am"}],["path",{d:"M6 18a4 4 0 0 1-2-7.464",key:"k1g0md"}],["path",{d:"M6.003 5.125a4 4 0 0 0-2.526 5.77",key:"q97ue3"}]],lD=Ae("brain",rD);const cD=[["path",{d:"M16 20V4a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v16",key:"jecpp"}],["rect",{width:"20",height:"14",x:"2",y:"6",rx:"2",key:"i6l2r4"}]],uD=Ae("briefcase",cD);const dD=[["rect",{width:"16",height:"20",x:"4",y:"2",rx:"2",key:"1nb95v"}],["line",{x1:"8",x2:"16",y1:"6",y2:"6",key:"x4nwl0"}],["line",{x1:"16",x2:"16",y1:"14",y2:"18",key:"wjye3r"}],["path",{d:"M16 10h.01",key:"1m94wz"}],["path",{d:"M12 10h.01",key:"1nrarc"}],["path",{d:"M8 10h.01",key:"19clt8"}],["path",{d:"M12 14h.01",key:"1etili"}],["path",{d:"M8 14h.01",key:"6423bh"}],["path",{d:"M12 18h.01",key:"mhygvu"}],["path",{d:"M8 18h.01",key:"lrp35t"}]],fD=Ae("calculator",dD);const hD=[["path",{d:"M8 2v4",key:"1cmpym"}],["path",{d:"M16 2v4",key:"4m81vk"}],["rect",{width:"18",height:"18",x:"3",y:"4",rx:"2",key:"1hopcy"}],["path",{d:"M3 10h18",key:"8toen8"}]],cl=Ae("calendar",hD);const mD=[["path",{d:"M3 3v16a2 2 0 0 0 2 2h16",key:"c24i48"}],["path",{d:"M18 17V9",key:"2bz60n"}],["path",{d:"M13 17V5",key:"1frdt8"}],["path",{d:"M8 17v-3",key:"17ska0"}]],pD=Ae("chart-column",mD);const gD=[["path",{d:"M21 12c.552 0 1.005-.449.95-.998a10 10 0 0 0-8.953-8.951c-.55-.055-.998.398-.998.95v8a1 1 0 0 0 1 1z",key:"pzmjnu"}],["path",{d:"M21.21 15.89A10 10 0 1 1 8 2.83",key:"k2fpak"}]],yD=Ae("chart-pie",gD);const vD=[["path",{d:"M20 6 9 17l-5-5",key:"1gmf2c"}]],bD=Ae("check",vD);const xD=[["path",{d:"m6 9 6 6 6-6",key:"qrunsl"}]],wD=Ae("chevron-down",xD);const SD=[["path",{d:"M12 6v6l4 2",key:"mmk7yg"}],["circle",{cx:"12",cy:"12",r:"10",key:"1mglay"}]],Xd=Ae("clock",SD);const TD=[["path",{d:"m6 14 1.5-2.9A2 2 0 0 1 9.24 10H20a2 2 0 0 1 1.94 2.5l-1.54 6a2 2 0 0 1-1.95 1.5H4a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h3.9a2 2 0 0 1 1.69.9l.81 1.2a2 2 0 0 0 1.67.9H18a2 2 0 0 1 2 2v2",key:"usdka0"}]],CD=Ae("folder-open",TD);const AD=[["path",{d:"M10 20a1 1 0 0 0 .553.895l2 1A1 1 0 0 0 14 21v-7a2 2 0 0 1 .517-1.341L21.74 4.67A1 1 0 0 0 21 3H3a1 1 0 0 0-.742 1.67l7.225 7.989A2 2 0 0 1 10 14z",key:"sc7q7i"}]],ED=Ae("funnel",AD);const MD=[["rect",{width:"20",height:"20",x:"2",y:"2",rx:"5",ry:"5",key:"2e1cvw"}],["path",{d:"M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z",key:"9exkf1"}],["line",{x1:"17.5",x2:"17.51",y1:"6.5",y2:"6.5",key:"r4j83e"}]],DD=Ae("instagram",MD);const RD=[["path",{d:"M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z",key:"c2jq9f"}],["rect",{width:"4",height:"12",x:"2",y:"9",key:"mk3on5"}],["circle",{cx:"4",cy:"4",r:"2",key:"bt5ra8"}]],kD=Ae("linkedin",RD);const zD=[["path",{d:"m22 7-8.991 5.727a2 2 0 0 1-2.009 0L2 7",key:"132q7q"}],["rect",{x:"2",y:"4",width:"20",height:"16",rx:"2",key:"izxlao"}]],Zx=Ae("mail",zD);const ND=[["path",{d:"M4 5h16",key:"1tepv9"}],["path",{d:"M4 12h16",key:"1lakjw"}],["path",{d:"M4 19h16",key:"1djgab"}]],jD=Ae("menu",ND);const OD=[["path",{d:"M13.832 16.568a1 1 0 0 0 1.213-.303l.355-.465A2 2 0 0 1 17 15h3a2 2 0 0 1 2 2v3a2 2 0 0 1-2 2A18 18 0 0 1 2 4a2 2 0 0 1 2-2h3a2 2 0 0 1 2 2v3a2 2 0 0 1-.8 1.6l-.468.351a1 1 0 0 0-.292 1.233 14 14 0 0 0 6.392 6.384",key:"9njp5v"}]],BD=Ae("phone",OD);const LD=[["path",{d:"M5 5a2 2 0 0 1 3.008-1.728l11.997 6.998a2 2 0 0 1 .003 3.458l-12 7A2 2 0 0 1 5 19z",key:"10ikf1"}]],PD=Ae("play",LD);const VD=[["path",{d:"M16 3a2 2 0 0 0-2 2v6a2 2 0 0 0 2 2 1 1 0 0 1 1 1v1a2 2 0 0 1-2 2 1 1 0 0 0-1 1v2a1 1 0 0 0 1 1 6 6 0 0 0 6-6V5a2 2 0 0 0-2-2z",key:"rib7q0"}],["path",{d:"M5 3a2 2 0 0 0-2 2v6a2 2 0 0 0 2 2 1 1 0 0 1 1 1v1a2 2 0 0 1-2 2 1 1 0 0 0-1 1v2a1 1 0 0 0 1 1 6 6 0 0 0 6-6V5a2 2 0 0 0-2-2z",key:"1ymkrd"}]],_D=Ae("quote",VD);const UD=[["path",{d:"M3 12a9 9 0 0 1 9-9 9.75 9.75 0 0 1 6.74 2.74L21 8",key:"v9h5vc"}],["path",{d:"M21 3v5h-5",key:"1q7to0"}],["path",{d:"M21 12a9 9 0 0 1-9 9 9.75 9.75 0 0 1-6.74-2.74L3 16",key:"3uifl3"}],["path",{d:"M8 16H3v5",key:"1cv678"}]],qD=Ae("refresh-cw",UD);const FD=[["circle",{cx:"18",cy:"5",r:"3",key:"gq8acd"}],["circle",{cx:"6",cy:"12",r:"3",key:"w7nqdw"}],["circle",{cx:"18",cy:"19",r:"3",key:"1xt0gg"}],["line",{x1:"8.59",x2:"15.42",y1:"13.51",y2:"17.49",key:"47mynk"}],["line",{x1:"15.41",x2:"8.59",y1:"6.51",y2:"10.49",key:"1n3mei"}]],HD=Ae("share-2",FD);const ID=[["circle",{cx:"12",cy:"12",r:"10",key:"1mglay"}],["circle",{cx:"12",cy:"12",r:"6",key:"1vlfrh"}],["circle",{cx:"12",cy:"12",r:"2",key:"1c9p78"}]],GD=Ae("target",ID);const YD=[["path",{d:"M16 7h6v6",key:"box55l"}],["path",{d:"m22 7-8.5 8.5-5-5L2 17",key:"1t1m79"}]],Jx=Ae("trending-up",YD);const KD=[["path",{d:"M19 21v-2a4 4 0 0 0-4-4H9a4 4 0 0 0-4 4v2",key:"975kel"}],["circle",{cx:"12",cy:"7",r:"4",key:"17ys0d"}]],Wd=Ae("user",KD);const XD=[["path",{d:"M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2",key:"1yyitq"}],["path",{d:"M16 3.128a4 4 0 0 1 0 7.744",key:"16gr8j"}],["path",{d:"M22 21v-2a4 4 0 0 0-3-3.87",key:"kshegd"}],["circle",{cx:"9",cy:"7",r:"4",key:"nufk8"}]],$x=Ae("users",XD);const WD=[["path",{d:"M18 6 6 18",key:"1bl5f8"}],["path",{d:"m6 6 12 12",key:"d8bk6v"}]],e0=Ae("x",WD);const QD=[["path",{d:"M4 14a1 1 0 0 1-.78-1.63l9.9-10.2a.5.5 0 0 1 .86.46l-1.92 6.02A1 1 0 0 0 13 10h7a1 1 0 0 1 .78 1.63l-9.9 10.2a.5.5 0 0 1-.86-.46l1.92-6.02A1 1 0 0 0 11 14z",key:"1xq2db"}]],ZD=Ae("zap",QD);function Sv(n,i){if(typeof n=="function")return n(i);n!=null&&(n.current=i)}function bl(...n){return i=>{let s=!1;const r=n.map(l=>{const d=Sv(l,i);return!s&&typeof d=="function"&&(s=!0),d});if(s)return()=>{for(let l=0;l<r.length;l++){const d=r[l];typeof d=="function"?d():Sv(n[l],null)}}}}function Ga(...n){return w.useCallback(bl(...n),n)}var JD=Symbol.for("react.lazy"),ul=nf[" use ".trim().toString()];function $D(n){return typeof n=="object"&&n!==null&&"then"in n}function t0(n){return n!=null&&typeof n=="object"&&"$$typeof"in n&&n.$$typeof===JD&&"_payload"in n&&$D(n._payload)}function eR(n){const i=nR(n),s=w.forwardRef((r,l)=>{let{children:d,...f}=r;t0(d)&&typeof ul=="function"&&(d=ul(d._payload));const h=w.Children.toArray(d),p=h.find(iR);if(p){const m=p.props.children,y=h.map(b=>b===p?w.Children.count(m)>1?w.Children.only(null):w.isValidElement(m)?m.props.children:null:b);return v.jsx(i,{...f,ref:l,children:w.isValidElement(m)?w.cloneElement(m,void 0,y):null})}return v.jsx(i,{...f,ref:l,children:d})});return s.displayName=`${n}.Slot`,s}var tR=eR("Slot");function nR(n){const i=w.forwardRef((s,r)=>{let{children:l,...d}=s;if(t0(l)&&typeof ul=="function"&&(l=ul(l._payload)),w.isValidElement(l)){const f=oR(l),h=sR(d,l.props);return l.type!==w.Fragment&&(h.ref=r?bl(r,f):f),w.cloneElement(l,h)}return w.Children.count(l)>1?w.Children.only(null):null});return i.displayName=`${n}.SlotClone`,i}var aR=Symbol("radix.slottable");function iR(n){return w.isValidElement(n)&&typeof n.type=="function"&&"__radixId"in n.type&&n.type.__radixId===aR}function sR(n,i){const s={...i};for(const r in i){const l=n[r],d=i[r];/^on[A-Z]/.test(r)?l&&d?s[r]=(...h)=>{const p=d(...h);return l(...h),p}:l&&(s[r]=l):r==="style"?s[r]={...l,...d}:r==="className"&&(s[r]=[l,d].filter(Boolean).join(" "))}return{...n,...s}}function oR(n){let i=Object.getOwnPropertyDescriptor(n.props,"ref")?.get,s=i&&"isReactWarning"in i&&i.isReactWarning;return s?n.ref:(i=Object.getOwnPropertyDescriptor(n,"ref")?.get,s=i&&"isReactWarning"in i&&i.isReactWarning,s?n.props.ref:n.props.ref||n.ref)}function n0(n){var i,s,r="";if(typeof n=="string"||typeof n=="number")r+=n;else if(typeof n=="object")if(Array.isArray(n)){var l=n.length;for(i=0;i<l;i++)n[i]&&(s=n0(n[i]))&&(r&&(r+=" "),r+=s)}else for(s in n)n[s]&&(r&&(r+=" "),r+=s);return r}function a0(){for(var n,i,s=0,r="",l=arguments.length;s<l;s++)(n=arguments[s])&&(i=n0(n))&&(r&&(r+=" "),r+=i);return r}const Tv=n=>typeof n=="boolean"?`${n}`:n===0?"0":n,Cv=a0,rR=(n,i)=>s=>{var r;if(i?.variants==null)return Cv(n,s?.class,s?.className);const{variants:l,defaultVariants:d}=i,f=Object.keys(l).map(m=>{const y=s?.[m],b=d?.[m];if(y===null)return null;const S=Tv(y)||Tv(b);return l[m][S]}),h=s&&Object.entries(s).reduce((m,y)=>{let[b,S]=y;return S===void 0||(m[b]=S),m},{}),p=i==null||(r=i.compoundVariants)===null||r===void 0?void 0:r.reduce((m,y)=>{let{class:b,className:S,...C}=y;return Object.entries(C).every(R=>{let[A,D]=R;return Array.isArray(D)?D.includes({...d,...h}[A]):{...d,...h}[A]===D})?[...m,b,S]:m},[]);return Cv(n,f,p,s?.class,s?.className)},lR=(n,i)=>{const s=new Array(n.length+i.length);for(let r=0;r<n.length;r++)s[r]=n[r];for(let r=0;r<i.length;r++)s[n.length+r]=i[r];return s},cR=(n,i)=>({classGroupId:n,validator:i}),i0=(n=new Map,i=null,s)=>({nextPart:n,validators:i,classGroupId:s}),dl="-",Av=[],uR="arbitrary..",dR=n=>{const i=hR(n),{conflictingClassGroups:s,conflictingClassGroupModifiers:r}=n;return{getClassGroupId:f=>{if(f.startsWith("[")&&f.endsWith("]"))return fR(f);const h=f.split(dl),p=h[0]===""&&h.length>1?1:0;return s0(h,p,i)},getConflictingClassGroupIds:(f,h)=>{if(h){const p=r[f],m=s[f];return p?m?lR(m,p):p:m||Av}return s[f]||Av}}},s0=(n,i,s)=>{if(n.length-i===0)return s.classGroupId;const l=n[i],d=s.nextPart.get(l);if(d){const m=s0(n,i+1,d);if(m)return m}const f=s.validators;if(f===null)return;const h=i===0?n.join(dl):n.slice(i).join(dl),p=f.length;for(let m=0;m<p;m++){const y=f[m];if(y.validator(h))return y.classGroupId}},fR=n=>n.slice(1,-1).indexOf(":")===-1?void 0:(()=>{const i=n.slice(1,-1),s=i.indexOf(":"),r=i.slice(0,s);return r?uR+r:void 0})(),hR=n=>{const{theme:i,classGroups:s}=n;return mR(s,i)},mR=(n,i)=>{const s=i0();for(const r in n){const l=n[r];_f(l,s,r,i)}return s},_f=(n,i,s,r)=>{const l=n.length;for(let d=0;d<l;d++){const f=n[d];pR(f,i,s,r)}},pR=(n,i,s,r)=>{if(typeof n=="string"){gR(n,i,s);return}if(typeof n=="function"){yR(n,i,s,r);return}vR(n,i,s,r)},gR=(n,i,s)=>{const r=n===""?i:o0(i,n);r.classGroupId=s},yR=(n,i,s,r)=>{if(bR(n)){_f(n(r),i,s,r);return}i.validators===null&&(i.validators=[]),i.validators.push(cR(s,n))},vR=(n,i,s,r)=>{const l=Object.entries(n),d=l.length;for(let f=0;f<d;f++){const[h,p]=l[f];_f(p,o0(i,h),s,r)}},o0=(n,i)=>{let s=n;const r=i.split(dl),l=r.length;for(let d=0;d<l;d++){const f=r[d];let h=s.nextPart.get(f);h||(h=i0(),s.nextPart.set(f,h)),s=h}return s},bR=n=>"isThemeGetter"in n&&n.isThemeGetter===!0,xR=n=>{if(n<1)return{get:()=>{},set:()=>{}};let i=0,s=Object.create(null),r=Object.create(null);const l=(d,f)=>{s[d]=f,i++,i>n&&(i=0,r=s,s=Object.create(null))};return{get(d){let f=s[d];if(f!==void 0)return f;if((f=r[d])!==void 0)return l(d,f),f},set(d,f){d in s?s[d]=f:l(d,f)}}},Qd="!",Ev=":",wR=[],Mv=(n,i,s,r,l)=>({modifiers:n,hasImportantModifier:i,baseClassName:s,maybePostfixModifierPosition:r,isExternal:l}),SR=n=>{const{prefix:i,experimentalParseClassName:s}=n;let r=l=>{const d=[];let f=0,h=0,p=0,m;const y=l.length;for(let A=0;A<y;A++){const D=l[A];if(f===0&&h===0){if(D===Ev){d.push(l.slice(p,A)),p=A+1;continue}if(D==="/"){m=A;continue}}D==="["?f++:D==="]"?f--:D==="("?h++:D===")"&&h--}const b=d.length===0?l:l.slice(p);let S=b,C=!1;b.endsWith(Qd)?(S=b.slice(0,-1),C=!0):b.startsWith(Qd)&&(S=b.slice(1),C=!0);const R=m&&m>p?m-p:void 0;return Mv(d,C,S,R)};if(i){const l=i+Ev,d=r;r=f=>f.startsWith(l)?d(f.slice(l.length)):Mv(wR,!1,f,void 0,!0)}if(s){const l=r;r=d=>s({className:d,parseClassName:l})}return r},TR=n=>{const i=new Map;return n.orderSensitiveModifiers.forEach((s,r)=>{i.set(s,1e6+r)}),s=>{const r=[];let l=[];for(let d=0;d<s.length;d++){const f=s[d],h=f[0]==="[",p=i.has(f);h||p?(l.length>0&&(l.sort(),r.push(...l),l=[]),r.push(f)):l.push(f)}return l.length>0&&(l.sort(),r.push(...l)),r}},CR=n=>({cache:xR(n.cacheSize),parseClassName:SR(n),sortModifiers:TR(n),...dR(n)}),AR=/\s+/,ER=(n,i)=>{const{parseClassName:s,getClassGroupId:r,getConflictingClassGroupIds:l,sortModifiers:d}=i,f=[],h=n.trim().split(AR);let p="";for(let m=h.length-1;m>=0;m-=1){const y=h[m],{isExternal:b,modifiers:S,hasImportantModifier:C,baseClassName:R,maybePostfixModifierPosition:A}=s(y);if(b){p=y+(p.length>0?" "+p:p);continue}let D=!!A,z=r(D?R.substring(0,A):R);if(!z){if(!D){p=y+(p.length>0?" "+p:p);continue}if(z=r(R),!z){p=y+(p.length>0?" "+p:p);continue}D=!1}const O=S.length===0?"":S.length===1?S[0]:d(S).join(":"),L=C?O+Qd:O,X=L+z;if(f.indexOf(X)>-1)continue;f.push(X);const G=l(z,D);for(let Z=0;Z<G.length;++Z){const K=G[Z];f.push(L+K)}p=y+(p.length>0?" "+p:p)}return p},MR=(...n)=>{let i=0,s,r,l="";for(;i<n.length;)(s=n[i++])&&(r=r0(s))&&(l&&(l+=" "),l+=r);return l},r0=n=>{if(typeof n=="string")return n;let i,s="";for(let r=0;r<n.length;r++)n[r]&&(i=r0(n[r]))&&(s&&(s+=" "),s+=i);return s},DR=(n,...i)=>{let s,r,l,d;const f=p=>{const m=i.reduce((y,b)=>b(y),n());return s=CR(m),r=s.cache.get,l=s.cache.set,d=h,h(p)},h=p=>{const m=r(p);if(m)return m;const y=ER(p,s);return l(p,y),y};return d=f,(...p)=>d(MR(...p))},RR=[],$e=n=>{const i=s=>s[n]||RR;return i.isThemeGetter=!0,i},l0=/^\[(?:(\w[\w-]*):)?(.+)\]$/i,c0=/^\((?:(\w[\w-]*):)?(.+)\)$/i,kR=/^\d+\/\d+$/,zR=/^(\d+(\.\d+)?)?(xs|sm|md|lg|xl)$/,NR=/\d+(%|px|r?em|[sdl]?v([hwib]|min|max)|pt|pc|in|cm|mm|cap|ch|ex|r?lh|cq(w|h|i|b|min|max))|\b(calc|min|max|clamp)\(.+\)|^0$/,jR=/^(rgba?|hsla?|hwb|(ok)?(lab|lch)|color-mix)\(.+\)$/,OR=/^(inset_)?-?((\d+)?\.?(\d+)[a-z]+|0)_-?((\d+)?\.?(\d+)[a-z]+|0)/,BR=/^(url|image|image-set|cross-fade|element|(repeating-)?(linear|radial|conic)-gradient)\(.+\)$/,ki=n=>kR.test(n),me=n=>!!n&&!Number.isNaN(Number(n)),ca=n=>!!n&&Number.isInteger(Number(n)),hd=n=>n.endsWith("%")&&me(n.slice(0,-1)),zn=n=>zR.test(n),LR=()=>!0,PR=n=>NR.test(n)&&!jR.test(n),u0=()=>!1,VR=n=>OR.test(n),_R=n=>BR.test(n),UR=n=>!$(n)&&!ee(n),qR=n=>Xi(n,h0,u0),$=n=>l0.test(n),Va=n=>Xi(n,m0,PR),md=n=>Xi(n,YR,me),Dv=n=>Xi(n,d0,u0),FR=n=>Xi(n,f0,_R),Lr=n=>Xi(n,p0,VR),ee=n=>c0.test(n),Ys=n=>Wi(n,m0),HR=n=>Wi(n,KR),Rv=n=>Wi(n,d0),IR=n=>Wi(n,h0),GR=n=>Wi(n,f0),Pr=n=>Wi(n,p0,!0),Xi=(n,i,s)=>{const r=l0.exec(n);return r?r[1]?i(r[1]):s(r[2]):!1},Wi=(n,i,s=!1)=>{const r=c0.exec(n);return r?r[1]?i(r[1]):s:!1},d0=n=>n==="position"||n==="percentage",f0=n=>n==="image"||n==="url",h0=n=>n==="length"||n==="size"||n==="bg-size",m0=n=>n==="length",YR=n=>n==="number",KR=n=>n==="family-name",p0=n=>n==="shadow",XR=()=>{const n=$e("color"),i=$e("font"),s=$e("text"),r=$e("font-weight"),l=$e("tracking"),d=$e("leading"),f=$e("breakpoint"),h=$e("container"),p=$e("spacing"),m=$e("radius"),y=$e("shadow"),b=$e("inset-shadow"),S=$e("text-shadow"),C=$e("drop-shadow"),R=$e("blur"),A=$e("perspective"),D=$e("aspect"),z=$e("ease"),O=$e("animate"),L=()=>["auto","avoid","all","avoid-page","page","left","right","column"],X=()=>["center","top","bottom","left","right","top-left","left-top","top-right","right-top","bottom-right","right-bottom","bottom-left","left-bottom"],G=()=>[...X(),ee,$],Z=()=>["auto","hidden","clip","visible","scroll"],K=()=>["auto","contain","none"],H=()=>[ee,$,p],se=()=>[ki,"full","auto",...H()],we=()=>[ca,"none","subgrid",ee,$],Oe=()=>["auto",{span:["full",ca,ee,$]},ca,ee,$],Be=()=>[ca,"auto",ee,$],jt=()=>["auto","min","max","fr",ee,$],ut=()=>["start","end","center","between","around","evenly","stretch","baseline","center-safe","end-safe"],Ie=()=>["start","end","center","stretch","center-safe","end-safe"],V=()=>["auto",...H()],Y=()=>[ki,"auto","full","dvw","dvh","lvw","lvh","svw","svh","min","max","fit",...H()],I=()=>[n,ee,$],he=()=>[...X(),Rv,Dv,{position:[ee,$]}],pe=()=>["no-repeat",{repeat:["","x","y","space","round"]}],M=()=>["auto","cover","contain",IR,qR,{size:[ee,$]}],q=()=>[hd,Ys,Va],W=()=>["","none","full",m,ee,$],Q=()=>["",me,Ys,Va],re=()=>["solid","dashed","dotted","double"],fe=()=>["normal","multiply","screen","overlay","darken","lighten","color-dodge","color-burn","hard-light","soft-light","difference","exclusion","hue","saturation","color","luminosity"],oe=()=>[me,hd,Rv,Dv],tt=()=>["","none",R,ee,$],Ne=()=>["none",me,ee,$],en=()=>["none",me,ee,$],Ln=()=>[me,ee,$],Pn=()=>[ki,"full",...H()];return{cacheSize:500,theme:{animate:["spin","ping","pulse","bounce"],aspect:["video"],blur:[zn],breakpoint:[zn],color:[LR],container:[zn],"drop-shadow":[zn],ease:["in","out","in-out"],font:[UR],"font-weight":["thin","extralight","light","normal","medium","semibold","bold","extrabold","black"],"inset-shadow":[zn],leading:["none","tight","snug","normal","relaxed","loose"],perspective:["dramatic","near","normal","midrange","distant","none"],radius:[zn],shadow:[zn],spacing:["px",me],text:[zn],"text-shadow":[zn],tracking:["tighter","tight","normal","wide","wider","widest"]},classGroups:{aspect:[{aspect:["auto","square",ki,$,ee,D]}],container:["container"],columns:[{columns:[me,$,ee,h]}],"break-after":[{"break-after":L()}],"break-before":[{"break-before":L()}],"break-inside":[{"break-inside":["auto","avoid","avoid-page","avoid-column"]}],"box-decoration":[{"box-decoration":["slice","clone"]}],box:[{box:["border","content"]}],display:["block","inline-block","inline","flex","inline-flex","table","inline-table","table-caption","table-cell","table-column","table-column-group","table-footer-group","table-header-group","table-row-group","table-row","flow-root","grid","inline-grid","contents","list-item","hidden"],sr:["sr-only","not-sr-only"],float:[{float:["right","left","none","start","end"]}],clear:[{clear:["left","right","both","none","start","end"]}],isolation:["isolate","isolation-auto"],"object-fit":[{object:["contain","cover","fill","none","scale-down"]}],"object-position":[{object:G()}],overflow:[{overflow:Z()}],"overflow-x":[{"overflow-x":Z()}],"overflow-y":[{"overflow-y":Z()}],overscroll:[{overscroll:K()}],"overscroll-x":[{"overscroll-x":K()}],"overscroll-y":[{"overscroll-y":K()}],position:["static","fixed","absolute","relative","sticky"],inset:[{inset:se()}],"inset-x":[{"inset-x":se()}],"inset-y":[{"inset-y":se()}],start:[{start:se()}],end:[{end:se()}],top:[{top:se()}],right:[{right:se()}],bottom:[{bottom:se()}],left:[{left:se()}],visibility:["visible","invisible","collapse"],z:[{z:[ca,"auto",ee,$]}],basis:[{basis:[ki,"full","auto",h,...H()]}],"flex-direction":[{flex:["row","row-reverse","col","col-reverse"]}],"flex-wrap":[{flex:["nowrap","wrap","wrap-reverse"]}],flex:[{flex:[me,ki,"auto","initial","none",$]}],grow:[{grow:["",me,ee,$]}],shrink:[{shrink:["",me,ee,$]}],order:[{order:[ca,"first","last","none",ee,$]}],"grid-cols":[{"grid-cols":we()}],"col-start-end":[{col:Oe()}],"col-start":[{"col-start":Be()}],"col-end":[{"col-end":Be()}],"grid-rows":[{"grid-rows":we()}],"row-start-end":[{row:Oe()}],"row-start":[{"row-start":Be()}],"row-end":[{"row-end":Be()}],"grid-flow":[{"grid-flow":["row","col","dense","row-dense","col-dense"]}],"auto-cols":[{"auto-cols":jt()}],"auto-rows":[{"auto-rows":jt()}],gap:[{gap:H()}],"gap-x":[{"gap-x":H()}],"gap-y":[{"gap-y":H()}],"justify-content":[{justify:[...ut(),"normal"]}],"justify-items":[{"justify-items":[...Ie(),"normal"]}],"justify-self":[{"justify-self":["auto",...Ie()]}],"align-content":[{content:["normal",...ut()]}],"align-items":[{items:[...Ie(),{baseline:["","last"]}]}],"align-self":[{self:["auto",...Ie(),{baseline:["","last"]}]}],"place-content":[{"place-content":ut()}],"place-items":[{"place-items":[...Ie(),"baseline"]}],"place-self":[{"place-self":["auto",...Ie()]}],p:[{p:H()}],px:[{px:H()}],py:[{py:H()}],ps:[{ps:H()}],pe:[{pe:H()}],pt:[{pt:H()}],pr:[{pr:H()}],pb:[{pb:H()}],pl:[{pl:H()}],m:[{m:V()}],mx:[{mx:V()}],my:[{my:V()}],ms:[{ms:V()}],me:[{me:V()}],mt:[{mt:V()}],mr:[{mr:V()}],mb:[{mb:V()}],ml:[{ml:V()}],"space-x":[{"space-x":H()}],"space-x-reverse":["space-x-reverse"],"space-y":[{"space-y":H()}],"space-y-reverse":["space-y-reverse"],size:[{size:Y()}],w:[{w:[h,"screen",...Y()]}],"min-w":[{"min-w":[h,"screen","none",...Y()]}],"max-w":[{"max-w":[h,"screen","none","prose",{screen:[f]},...Y()]}],h:[{h:["screen","lh",...Y()]}],"min-h":[{"min-h":["screen","lh","none",...Y()]}],"max-h":[{"max-h":["screen","lh",...Y()]}],"font-size":[{text:["base",s,Ys,Va]}],"font-smoothing":["antialiased","subpixel-antialiased"],"font-style":["italic","not-italic"],"font-weight":[{font:[r,ee,md]}],"font-stretch":[{"font-stretch":["ultra-condensed","extra-condensed","condensed","semi-condensed","normal","semi-expanded","expanded","extra-expanded","ultra-expanded",hd,$]}],"font-family":[{font:[HR,$,i]}],"fvn-normal":["normal-nums"],"fvn-ordinal":["ordinal"],"fvn-slashed-zero":["slashed-zero"],"fvn-figure":["lining-nums","oldstyle-nums"],"fvn-spacing":["proportional-nums","tabular-nums"],"fvn-fraction":["diagonal-fractions","stacked-fractions"],tracking:[{tracking:[l,ee,$]}],"line-clamp":[{"line-clamp":[me,"none",ee,md]}],leading:[{leading:[d,...H()]}],"list-image":[{"list-image":["none",ee,$]}],"list-style-position":[{list:["inside","outside"]}],"list-style-type":[{list:["disc","decimal","none",ee,$]}],"text-alignment":[{text:["left","center","right","justify","start","end"]}],"placeholder-color":[{placeholder:I()}],"text-color":[{text:I()}],"text-decoration":["underline","overline","line-through","no-underline"],"text-decoration-style":[{decoration:[...re(),"wavy"]}],"text-decoration-thickness":[{decoration:[me,"from-font","auto",ee,Va]}],"text-decoration-color":[{decoration:I()}],"underline-offset":[{"underline-offset":[me,"auto",ee,$]}],"text-transform":["uppercase","lowercase","capitalize","normal-case"],"text-overflow":["truncate","text-ellipsis","text-clip"],"text-wrap":[{text:["wrap","nowrap","balance","pretty"]}],indent:[{indent:H()}],"vertical-align":[{align:["baseline","top","middle","bottom","text-top","text-bottom","sub","super",ee,$]}],whitespace:[{whitespace:["normal","nowrap","pre","pre-line","pre-wrap","break-spaces"]}],break:[{break:["normal","words","all","keep"]}],wrap:[{wrap:["break-word","anywhere","normal"]}],hyphens:[{hyphens:["none","manual","auto"]}],content:[{content:["none",ee,$]}],"bg-attachment":[{bg:["fixed","local","scroll"]}],"bg-clip":[{"bg-clip":["border","padding","content","text"]}],"bg-origin":[{"bg-origin":["border","padding","content"]}],"bg-position":[{bg:he()}],"bg-repeat":[{bg:pe()}],"bg-size":[{bg:M()}],"bg-image":[{bg:["none",{linear:[{to:["t","tr","r","br","b","bl","l","tl"]},ca,ee,$],radial:["",ee,$],conic:[ca,ee,$]},GR,FR]}],"bg-color":[{bg:I()}],"gradient-from-pos":[{from:q()}],"gradient-via-pos":[{via:q()}],"gradient-to-pos":[{to:q()}],"gradient-from":[{from:I()}],"gradient-via":[{via:I()}],"gradient-to":[{to:I()}],rounded:[{rounded:W()}],"rounded-s":[{"rounded-s":W()}],"rounded-e":[{"rounded-e":W()}],"rounded-t":[{"rounded-t":W()}],"rounded-r":[{"rounded-r":W()}],"rounded-b":[{"rounded-b":W()}],"rounded-l":[{"rounded-l":W()}],"rounded-ss":[{"rounded-ss":W()}],"rounded-se":[{"rounded-se":W()}],"rounded-ee":[{"rounded-ee":W()}],"rounded-es":[{"rounded-es":W()}],"rounded-tl":[{"rounded-tl":W()}],"rounded-tr":[{"rounded-tr":W()}],"rounded-br":[{"rounded-br":W()}],"rounded-bl":[{"rounded-bl":W()}],"border-w":[{border:Q()}],"border-w-x":[{"border-x":Q()}],"border-w-y":[{"border-y":Q()}],"border-w-s":[{"border-s":Q()}],"border-w-e":[{"border-e":Q()}],"border-w-t":[{"border-t":Q()}],"border-w-r":[{"border-r":Q()}],"border-w-b":[{"border-b":Q()}],"border-w-l":[{"border-l":Q()}],"divide-x":[{"divide-x":Q()}],"divide-x-reverse":["divide-x-reverse"],"divide-y":[{"divide-y":Q()}],"divide-y-reverse":["divide-y-reverse"],"border-style":[{border:[...re(),"hidden","none"]}],"divide-style":[{divide:[...re(),"hidden","none"]}],"border-color":[{border:I()}],"border-color-x":[{"border-x":I()}],"border-color-y":[{"border-y":I()}],"border-color-s":[{"border-s":I()}],"border-color-e":[{"border-e":I()}],"border-color-t":[{"border-t":I()}],"border-color-r":[{"border-r":I()}],"border-color-b":[{"border-b":I()}],"border-color-l":[{"border-l":I()}],"divide-color":[{divide:I()}],"outline-style":[{outline:[...re(),"none","hidden"]}],"outline-offset":[{"outline-offset":[me,ee,$]}],"outline-w":[{outline:["",me,Ys,Va]}],"outline-color":[{outline:I()}],shadow:[{shadow:["","none",y,Pr,Lr]}],"shadow-color":[{shadow:I()}],"inset-shadow":[{"inset-shadow":["none",b,Pr,Lr]}],"inset-shadow-color":[{"inset-shadow":I()}],"ring-w":[{ring:Q()}],"ring-w-inset":["ring-inset"],"ring-color":[{ring:I()}],"ring-offset-w":[{"ring-offset":[me,Va]}],"ring-offset-color":[{"ring-offset":I()}],"inset-ring-w":[{"inset-ring":Q()}],"inset-ring-color":[{"inset-ring":I()}],"text-shadow":[{"text-shadow":["none",S,Pr,Lr]}],"text-shadow-color":[{"text-shadow":I()}],opacity:[{opacity:[me,ee,$]}],"mix-blend":[{"mix-blend":[...fe(),"plus-darker","plus-lighter"]}],"bg-blend":[{"bg-blend":fe()}],"mask-clip":[{"mask-clip":["border","padding","content","fill","stroke","view"]},"mask-no-clip"],"mask-composite":[{mask:["add","subtract","intersect","exclude"]}],"mask-image-linear-pos":[{"mask-linear":[me]}],"mask-image-linear-from-pos":[{"mask-linear-from":oe()}],"mask-image-linear-to-pos":[{"mask-linear-to":oe()}],"mask-image-linear-from-color":[{"mask-linear-from":I()}],"mask-image-linear-to-color":[{"mask-linear-to":I()}],"mask-image-t-from-pos":[{"mask-t-from":oe()}],"mask-image-t-to-pos":[{"mask-t-to":oe()}],"mask-image-t-from-color":[{"mask-t-from":I()}],"mask-image-t-to-color":[{"mask-t-to":I()}],"mask-image-r-from-pos":[{"mask-r-from":oe()}],"mask-image-r-to-pos":[{"mask-r-to":oe()}],"mask-image-r-from-color":[{"mask-r-from":I()}],"mask-image-r-to-color":[{"mask-r-to":I()}],"mask-image-b-from-pos":[{"mask-b-from":oe()}],"mask-image-b-to-pos":[{"mask-b-to":oe()}],"mask-image-b-from-color":[{"mask-b-from":I()}],"mask-image-b-to-color":[{"mask-b-to":I()}],"mask-image-l-from-pos":[{"mask-l-from":oe()}],"mask-image-l-to-pos":[{"mask-l-to":oe()}],"mask-image-l-from-color":[{"mask-l-from":I()}],"mask-image-l-to-color":[{"mask-l-to":I()}],"mask-image-x-from-pos":[{"mask-x-from":oe()}],"mask-image-x-to-pos":[{"mask-x-to":oe()}],"mask-image-x-from-color":[{"mask-x-from":I()}],"mask-image-x-to-color":[{"mask-x-to":I()}],"mask-image-y-from-pos":[{"mask-y-from":oe()}],"mask-image-y-to-pos":[{"mask-y-to":oe()}],"mask-image-y-from-color":[{"mask-y-from":I()}],"mask-image-y-to-color":[{"mask-y-to":I()}],"mask-image-radial":[{"mask-radial":[ee,$]}],"mask-image-radial-from-pos":[{"mask-radial-from":oe()}],"mask-image-radial-to-pos":[{"mask-radial-to":oe()}],"mask-image-radial-from-color":[{"mask-radial-from":I()}],"mask-image-radial-to-color":[{"mask-radial-to":I()}],"mask-image-radial-shape":[{"mask-radial":["circle","ellipse"]}],"mask-image-radial-size":[{"mask-radial":[{closest:["side","corner"],farthest:["side","corner"]}]}],"mask-image-radial-pos":[{"mask-radial-at":X()}],"mask-image-conic-pos":[{"mask-conic":[me]}],"mask-image-conic-from-pos":[{"mask-conic-from":oe()}],"mask-image-conic-to-pos":[{"mask-conic-to":oe()}],"mask-image-conic-from-color":[{"mask-conic-from":I()}],"mask-image-conic-to-color":[{"mask-conic-to":I()}],"mask-mode":[{mask:["alpha","luminance","match"]}],"mask-origin":[{"mask-origin":["border","padding","content","fill","stroke","view"]}],"mask-position":[{mask:he()}],"mask-repeat":[{mask:pe()}],"mask-size":[{mask:M()}],"mask-type":[{"mask-type":["alpha","luminance"]}],"mask-image":[{mask:["none",ee,$]}],filter:[{filter:["","none",ee,$]}],blur:[{blur:tt()}],brightness:[{brightness:[me,ee,$]}],contrast:[{contrast:[me,ee,$]}],"drop-shadow":[{"drop-shadow":["","none",C,Pr,Lr]}],"drop-shadow-color":[{"drop-shadow":I()}],grayscale:[{grayscale:["",me,ee,$]}],"hue-rotate":[{"hue-rotate":[me,ee,$]}],invert:[{invert:["",me,ee,$]}],saturate:[{saturate:[me,ee,$]}],sepia:[{sepia:["",me,ee,$]}],"backdrop-filter":[{"backdrop-filter":["","none",ee,$]}],"backdrop-blur":[{"backdrop-blur":tt()}],"backdrop-brightness":[{"backdrop-brightness":[me,ee,$]}],"backdrop-contrast":[{"backdrop-contrast":[me,ee,$]}],"backdrop-grayscale":[{"backdrop-grayscale":["",me,ee,$]}],"backdrop-hue-rotate":[{"backdrop-hue-rotate":[me,ee,$]}],"backdrop-invert":[{"backdrop-invert":["",me,ee,$]}],"backdrop-opacity":[{"backdrop-opacity":[me,ee,$]}],"backdrop-saturate":[{"backdrop-saturate":[me,ee,$]}],"backdrop-sepia":[{"backdrop-sepia":["",me,ee,$]}],"border-collapse":[{border:["collapse","separate"]}],"border-spacing":[{"border-spacing":H()}],"border-spacing-x":[{"border-spacing-x":H()}],"border-spacing-y":[{"border-spacing-y":H()}],"table-layout":[{table:["auto","fixed"]}],caption:[{caption:["top","bottom"]}],transition:[{transition:["","all","colors","opacity","shadow","transform","none",ee,$]}],"transition-behavior":[{transition:["normal","discrete"]}],duration:[{duration:[me,"initial",ee,$]}],ease:[{ease:["linear","initial",z,ee,$]}],delay:[{delay:[me,ee,$]}],animate:[{animate:["none",O,ee,$]}],backface:[{backface:["hidden","visible"]}],perspective:[{perspective:[A,ee,$]}],"perspective-origin":[{"perspective-origin":G()}],rotate:[{rotate:Ne()}],"rotate-x":[{"rotate-x":Ne()}],"rotate-y":[{"rotate-y":Ne()}],"rotate-z":[{"rotate-z":Ne()}],scale:[{scale:en()}],"scale-x":[{"scale-x":en()}],"scale-y":[{"scale-y":en()}],"scale-z":[{"scale-z":en()}],"scale-3d":["scale-3d"],skew:[{skew:Ln()}],"skew-x":[{"skew-x":Ln()}],"skew-y":[{"skew-y":Ln()}],transform:[{transform:[ee,$,"","none","gpu","cpu"]}],"transform-origin":[{origin:G()}],"transform-style":[{transform:["3d","flat"]}],translate:[{translate:Pn()}],"translate-x":[{"translate-x":Pn()}],"translate-y":[{"translate-y":Pn()}],"translate-z":[{"translate-z":Pn()}],"translate-none":["translate-none"],accent:[{accent:I()}],appearance:[{appearance:["none","auto"]}],"caret-color":[{caret:I()}],"color-scheme":[{scheme:["normal","dark","light","light-dark","only-dark","only-light"]}],cursor:[{cursor:["auto","default","pointer","wait","text","move","help","not-allowed","none","context-menu","progress","cell","crosshair","vertical-text","alias","copy","no-drop","grab","grabbing","all-scroll","col-resize","row-resize","n-resize","e-resize","s-resize","w-resize","ne-resize","nw-resize","se-resize","sw-resize","ew-resize","ns-resize","nesw-resize","nwse-resize","zoom-in","zoom-out",ee,$]}],"field-sizing":[{"field-sizing":["fixed","content"]}],"pointer-events":[{"pointer-events":["auto","none"]}],resize:[{resize:["none","","y","x"]}],"scroll-behavior":[{scroll:["auto","smooth"]}],"scroll-m":[{"scroll-m":H()}],"scroll-mx":[{"scroll-mx":H()}],"scroll-my":[{"scroll-my":H()}],"scroll-ms":[{"scroll-ms":H()}],"scroll-me":[{"scroll-me":H()}],"scroll-mt":[{"scroll-mt":H()}],"scroll-mr":[{"scroll-mr":H()}],"scroll-mb":[{"scroll-mb":H()}],"scroll-ml":[{"scroll-ml":H()}],"scroll-p":[{"scroll-p":H()}],"scroll-px":[{"scroll-px":H()}],"scroll-py":[{"scroll-py":H()}],"scroll-ps":[{"scroll-ps":H()}],"scroll-pe":[{"scroll-pe":H()}],"scroll-pt":[{"scroll-pt":H()}],"scroll-pr":[{"scroll-pr":H()}],"scroll-pb":[{"scroll-pb":H()}],"scroll-pl":[{"scroll-pl":H()}],"snap-align":[{snap:["start","end","center","align-none"]}],"snap-stop":[{snap:["normal","always"]}],"snap-type":[{snap:["none","x","y","both"]}],"snap-strictness":[{snap:["mandatory","proximity"]}],touch:[{touch:["auto","none","manipulation"]}],"touch-x":[{"touch-pan":["x","left","right"]}],"touch-y":[{"touch-pan":["y","up","down"]}],"touch-pz":["touch-pinch-zoom"],select:[{select:["none","text","all","auto"]}],"will-change":[{"will-change":["auto","scroll","contents","transform",ee,$]}],fill:[{fill:["none",...I()]}],"stroke-w":[{stroke:[me,Ys,Va,md]}],stroke:[{stroke:["none",...I()]}],"forced-color-adjust":[{"forced-color-adjust":["auto","none"]}]},conflictingClassGroups:{overflow:["overflow-x","overflow-y"],overscroll:["overscroll-x","overscroll-y"],inset:["inset-x","inset-y","start","end","top","right","bottom","left"],"inset-x":["right","left"],"inset-y":["top","bottom"],flex:["basis","grow","shrink"],gap:["gap-x","gap-y"],p:["px","py","ps","pe","pt","pr","pb","pl"],px:["pr","pl"],py:["pt","pb"],m:["mx","my","ms","me","mt","mr","mb","ml"],mx:["mr","ml"],my:["mt","mb"],size:["w","h"],"font-size":["leading"],"fvn-normal":["fvn-ordinal","fvn-slashed-zero","fvn-figure","fvn-spacing","fvn-fraction"],"fvn-ordinal":["fvn-normal"],"fvn-slashed-zero":["fvn-normal"],"fvn-figure":["fvn-normal"],"fvn-spacing":["fvn-normal"],"fvn-fraction":["fvn-normal"],"line-clamp":["display","overflow"],rounded:["rounded-s","rounded-e","rounded-t","rounded-r","rounded-b","rounded-l","rounded-ss","rounded-se","rounded-ee","rounded-es","rounded-tl","rounded-tr","rounded-br","rounded-bl"],"rounded-s":["rounded-ss","rounded-es"],"rounded-e":["rounded-se","rounded-ee"],"rounded-t":["rounded-tl","rounded-tr"],"rounded-r":["rounded-tr","rounded-br"],"rounded-b":["rounded-br","rounded-bl"],"rounded-l":["rounded-tl","rounded-bl"],"border-spacing":["border-spacing-x","border-spacing-y"],"border-w":["border-w-x","border-w-y","border-w-s","border-w-e","border-w-t","border-w-r","border-w-b","border-w-l"],"border-w-x":["border-w-r","border-w-l"],"border-w-y":["border-w-t","border-w-b"],"border-color":["border-color-x","border-color-y","border-color-s","border-color-e","border-color-t","border-color-r","border-color-b","border-color-l"],"border-color-x":["border-color-r","border-color-l"],"border-color-y":["border-color-t","border-color-b"],translate:["translate-x","translate-y","translate-none"],"translate-none":["translate","translate-x","translate-y","translate-z"],"scroll-m":["scroll-mx","scroll-my","scroll-ms","scroll-me","scroll-mt","scroll-mr","scroll-mb","scroll-ml"],"scroll-mx":["scroll-mr","scroll-ml"],"scroll-my":["scroll-mt","scroll-mb"],"scroll-p":["scroll-px","scroll-py","scroll-ps","scroll-pe","scroll-pt","scroll-pr","scroll-pb","scroll-pl"],"scroll-px":["scroll-pr","scroll-pl"],"scroll-py":["scroll-pt","scroll-pb"],touch:["touch-x","touch-y","touch-pz"],"touch-x":["touch"],"touch-y":["touch"],"touch-pz":["touch"]},conflictingClassGroupModifiers:{"font-size":["leading"]},orderSensitiveModifiers:["*","**","after","backdrop","before","details-content","file","first-letter","first-line","marker","placeholder","selection"]}},WR=DR(XR);function Uf(...n){return WR(a0(n))}const QR=rR("inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-md text-sm font-medium transition-all disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none [&_svg:not([class*='size-'])]:size-4 shrink-0 [&_svg]:shrink-0 outline-none focus-visible:border-ring focus-visible:ring-ring/50 focus-visible:ring-[3px] aria-invalid:ring-destructive/20 dark:aria-invalid:ring-destructive/40 aria-invalid:border-destructive",{variants:{variant:{default:"bg-primary text-primary-foreground hover:bg-primary/90",destructive:"bg-destructive text-white hover:bg-destructive/90 focus-visible:ring-destructive/20 dark:focus-visible:ring-destructive/40 dark:bg-destructive/60",outline:"border bg-background shadow-xs hover:bg-accent hover:text-accent-foreground dark:bg-input/30 dark:border-input dark:hover:bg-input/50",secondary:"bg-secondary text-secondary-foreground hover:bg-secondary/80",ghost:"hover:bg-accent hover:text-accent-foreground dark:hover:bg-accent/50",link:"text-primary underline-offset-4 hover:underline"},size:{default:"h-9 px-4 py-2 has-[>svg]:px-3",sm:"h-8 rounded-md gap-1.5 px-3 has-[>svg]:px-2.5",lg:"h-10 rounded-md px-6 has-[>svg]:px-4",icon:"size-9","icon-sm":"size-8","icon-lg":"size-10"}},defaultVariants:{variant:"default",size:"default"}});function cn({className:n,variant:i="default",size:s="default",asChild:r=!1,...l}){const d=r?tR:"button";return v.jsx(d,{"code-path":"src/components/ui/button.tsx:52:5","data-slot":"button","data-variant":i,"data-size":s,className:Uf(QR({variant:i,size:s,className:n})),...l})}function ma(n,i,{checkForDefaultPrevented:s=!0}={}){return function(l){if(n?.(l),s===!1||!l.defaultPrevented)return i?.(l)}}function ZR(n,i){const s=w.createContext(i),r=d=>{const{children:f,...h}=d,p=w.useMemo(()=>h,Object.values(h));return v.jsx(s.Provider,{value:p,children:f})};r.displayName=n+"Provider";function l(d){const f=w.useContext(s);if(f)return f;if(i!==void 0)return i;throw new Error(`\`${d}\` must be used within \`${n}\``)}return[r,l]}function JR(n,i=[]){let s=[];function r(d,f){const h=w.createContext(f),p=s.length;s=[...s,f];const m=b=>{const{scope:S,children:C,...R}=b,A=S?.[n]?.[p]||h,D=w.useMemo(()=>R,Object.values(R));return v.jsx(A.Provider,{value:D,children:C})};m.displayName=d+"Provider";function y(b,S){const C=S?.[n]?.[p]||h,R=w.useContext(C);if(R)return R;if(f!==void 0)return f;throw new Error(`\`${b}\` must be used within \`${d}\``)}return[m,y]}const l=()=>{const d=s.map(f=>w.createContext(f));return function(h){const p=h?.[n]||d;return w.useMemo(()=>({[`__scope${n}`]:{...h,[n]:p}}),[h,p])}};return l.scopeName=n,[r,$R(l,...i)]}function $R(...n){const i=n[0];if(n.length===1)return i;const s=()=>{const r=n.map(l=>({useScope:l(),scopeName:l.scopeName}));return function(d){const f=r.reduce((h,{useScope:p,scopeName:m})=>{const b=p(d)[`__scope${m}`];return{...h,...b}},{});return w.useMemo(()=>({[`__scope${i.scopeName}`]:f}),[f])}};return s.scopeName=i.scopeName,s}var so=globalThis?.document?w.useLayoutEffect:()=>{},ek=nf[" useId ".trim().toString()]||(()=>{}),tk=0;function pd(n){const[i,s]=w.useState(ek());return so(()=>{s(r=>r??String(tk++))},[n]),n||(i?`radix-${i}`:"")}var nk=nf[" useInsertionEffect ".trim().toString()]||so;function ak({prop:n,defaultProp:i,onChange:s=()=>{},caller:r}){const[l,d,f]=ik({defaultProp:i,onChange:s}),h=n!==void 0,p=h?n:l;{const y=w.useRef(n!==void 0);w.useEffect(()=>{const b=y.current;b!==h&&console.warn(`${r} is changing from ${b?"controlled":"uncontrolled"} to ${h?"controlled":"uncontrolled"}. Components should not switch from controlled to uncontrolled (or vice versa). Decide between using a controlled or uncontrolled value for the lifetime of the component.`),y.current=h},[h,r])}const m=w.useCallback(y=>{if(h){const b=sk(y)?y(n):y;b!==n&&f.current?.(b)}else d(y)},[h,n,d,f]);return[p,m]}function ik({defaultProp:n,onChange:i}){const[s,r]=w.useState(n),l=w.useRef(s),d=w.useRef(i);return nk(()=>{d.current=i},[i]),w.useEffect(()=>{l.current!==s&&(d.current?.(s),l.current=s)},[s,l]),[s,r,d]}function sk(n){return typeof n=="function"}function ok(n){const i=rk(n),s=w.forwardRef((r,l)=>{const{children:d,...f}=r,h=w.Children.toArray(d),p=h.find(ck);if(p){const m=p.props.children,y=h.map(b=>b===p?w.Children.count(m)>1?w.Children.only(null):w.isValidElement(m)?m.props.children:null:b);return v.jsx(i,{...f,ref:l,children:w.isValidElement(m)?w.cloneElement(m,void 0,y):null})}return v.jsx(i,{...f,ref:l,children:d})});return s.displayName=`${n}.Slot`,s}function rk(n){const i=w.forwardRef((s,r)=>{const{children:l,...d}=s;if(w.isValidElement(l)){const f=dk(l),h=uk(d,l.props);return l.type!==w.Fragment&&(h.ref=r?bl(r,f):f),w.cloneElement(l,h)}return w.Children.count(l)>1?w.Children.only(null):null});return i.displayName=`${n}.SlotClone`,i}var lk=Symbol("radix.slottable");function ck(n){return w.isValidElement(n)&&typeof n.type=="function"&&"__radixId"in n.type&&n.type.__radixId===lk}function uk(n,i){const s={...i};for(const r in i){const l=n[r],d=i[r];/^on[A-Z]/.test(r)?l&&d?s[r]=(...h)=>{const p=d(...h);return l(...h),p}:l&&(s[r]=l):r==="style"?s[r]={...l,...d}:r==="className"&&(s[r]=[l,d].filter(Boolean).join(" "))}return{...n,...s}}function dk(n){let i=Object.getOwnPropertyDescriptor(n.props,"ref")?.get,s=i&&"isReactWarning"in i&&i.isReactWarning;return s?n.ref:(i=Object.getOwnPropertyDescriptor(n,"ref")?.get,s=i&&"isReactWarning"in i&&i.isReactWarning,s?n.props.ref:n.props.ref||n.ref)}var fk=["a","button","div","form","h2","h3","img","input","label","li","nav","ol","p","select","span","svg","ul"],Bn=fk.reduce((n,i)=>{const s=ok(`Primitive.${i}`),r=w.forwardRef((l,d)=>{const{asChild:f,...h}=l,p=f?s:i;return typeof window<"u"&&(window[Symbol.for("radix-ui")]=!0),v.jsx(p,{...h,ref:d})});return r.displayName=`Primitive.${i}`,{...n,[i]:r}},{});function hk(n,i){n&&db.flushSync(()=>n.dispatchEvent(i))}function oo(n){const i=w.useRef(n);return w.useEffect(()=>{i.current=n}),w.useMemo(()=>(...s)=>i.current?.(...s),[])}function mk(n,i=globalThis?.document){const s=oo(n);w.useEffect(()=>{const r=l=>{l.key==="Escape"&&s(l)};return i.addEventListener("keydown",r,{capture:!0}),()=>i.removeEventListener("keydown",r,{capture:!0})},[s,i])}var pk="DismissableLayer",Zd="dismissableLayer.update",gk="dismissableLayer.pointerDownOutside",yk="dismissableLayer.focusOutside",kv,g0=w.createContext({layers:new Set,layersWithOutsidePointerEventsDisabled:new Set,branches:new Set}),y0=w.forwardRef((n,i)=>{const{disableOutsidePointerEvents:s=!1,onEscapeKeyDown:r,onPointerDownOutside:l,onFocusOutside:d,onInteractOutside:f,onDismiss:h,...p}=n,m=w.useContext(g0),[y,b]=w.useState(null),S=y?.ownerDocument??globalThis?.document,[,C]=w.useState({}),R=Ga(i,K=>b(K)),A=Array.from(m.layers),[D]=[...m.layersWithOutsidePointerEventsDisabled].slice(-1),z=A.indexOf(D),O=y?A.indexOf(y):-1,L=m.layersWithOutsidePointerEventsDisabled.size>0,X=O>=z,G=xk(K=>{const H=K.target,se=[...m.branches].some(we=>we.contains(H));!X||se||(l?.(K),f?.(K),K.defaultPrevented||h?.())},S),Z=wk(K=>{const H=K.target;[...m.branches].some(we=>we.contains(H))||(d?.(K),f?.(K),K.defaultPrevented||h?.())},S);return mk(K=>{O===m.layers.size-1&&(r?.(K),!K.defaultPrevented&&h&&(K.preventDefault(),h()))},S),w.useEffect(()=>{if(y)return s&&(m.layersWithOutsidePointerEventsDisabled.size===0&&(kv=S.body.style.pointerEvents,S.body.style.pointerEvents="none"),m.layersWithOutsidePointerEventsDisabled.add(y)),m.layers.add(y),zv(),()=>{s&&m.layersWithOutsidePointerEventsDisabled.size===1&&(S.body.style.pointerEvents=kv)}},[y,S,s,m]),w.useEffect(()=>()=>{y&&(m.layers.delete(y),m.layersWithOutsidePointerEventsDisabled.delete(y),zv())},[y,m]),w.useEffect(()=>{const K=()=>C({});return document.addEventListener(Zd,K),()=>document.removeEventListener(Zd,K)},[]),v.jsx(Bn.div,{...p,ref:R,style:{pointerEvents:L?X?"auto":"none":void 0,...n.style},onFocusCapture:ma(n.onFocusCapture,Z.onFocusCapture),onBlurCapture:ma(n.onBlurCapture,Z.onBlurCapture),onPointerDownCapture:ma(n.onPointerDownCapture,G.onPointerDownCapture)})});y0.displayName=pk;var vk="DismissableLayerBranch",bk=w.forwardRef((n,i)=>{const s=w.useContext(g0),r=w.useRef(null),l=Ga(i,r);return w.useEffect(()=>{const d=r.current;if(d)return s.branches.add(d),()=>{s.branches.delete(d)}},[s.branches]),v.jsx(Bn.div,{...n,ref:l})});bk.displayName=vk;function xk(n,i=globalThis?.document){const s=oo(n),r=w.useRef(!1),l=w.useRef(()=>{});return w.useEffect(()=>{const d=h=>{if(h.target&&!r.current){let p=function(){v0(gk,s,m,{discrete:!0})};const m={originalEvent:h};h.pointerType==="touch"?(i.removeEventListener("click",l.current),l.current=p,i.addEventListener("click",l.current,{once:!0})):p()}else i.removeEventListener("click",l.current);r.current=!1},f=window.setTimeout(()=>{i.addEventListener("pointerdown",d)},0);return()=>{window.clearTimeout(f),i.removeEventListener("pointerdown",d),i.removeEventListener("click",l.current)}},[i,s]),{onPointerDownCapture:()=>r.current=!0}}function wk(n,i=globalThis?.document){const s=oo(n),r=w.useRef(!1);return w.useEffect(()=>{const l=d=>{d.target&&!r.current&&v0(yk,s,{originalEvent:d},{discrete:!1})};return i.addEventListener("focusin",l),()=>i.removeEventListener("focusin",l)},[i,s]),{onFocusCapture:()=>r.current=!0,onBlurCapture:()=>r.current=!1}}function zv(){const n=new CustomEvent(Zd);document.dispatchEvent(n)}function v0(n,i,s,{discrete:r}){const l=s.originalEvent.target,d=new CustomEvent(n,{bubbles:!1,cancelable:!0,detail:s});i&&l.addEventListener(n,i,{once:!0}),r?hk(l,d):l.dispatchEvent(d)}var gd="focusScope.autoFocusOnMount",yd="focusScope.autoFocusOnUnmount",Nv={bubbles:!1,cancelable:!0},Sk="FocusScope",b0=w.forwardRef((n,i)=>{const{loop:s=!1,trapped:r=!1,onMountAutoFocus:l,onUnmountAutoFocus:d,...f}=n,[h,p]=w.useState(null),m=oo(l),y=oo(d),b=w.useRef(null),S=Ga(i,A=>p(A)),C=w.useRef({paused:!1,pause(){this.paused=!0},resume(){this.paused=!1}}).current;w.useEffect(()=>{if(r){let A=function(L){if(C.paused||!h)return;const X=L.target;h.contains(X)?b.current=X:da(b.current,{select:!0})},D=function(L){if(C.paused||!h)return;const X=L.relatedTarget;X!==null&&(h.contains(X)||da(b.current,{select:!0}))},z=function(L){if(document.activeElement===document.body)for(const G of L)G.removedNodes.length>0&&da(h)};document.addEventListener("focusin",A),document.addEventListener("focusout",D);const O=new MutationObserver(z);return h&&O.observe(h,{childList:!0,subtree:!0}),()=>{document.removeEventListener("focusin",A),document.removeEventListener("focusout",D),O.disconnect()}}},[r,h,C.paused]),w.useEffect(()=>{if(h){Ov.add(C);const A=document.activeElement;if(!h.contains(A)){const z=new CustomEvent(gd,Nv);h.addEventListener(gd,m),h.dispatchEvent(z),z.defaultPrevented||(Tk(Dk(x0(h)),{select:!0}),document.activeElement===A&&da(h))}return()=>{h.removeEventListener(gd,m),setTimeout(()=>{const z=new CustomEvent(yd,Nv);h.addEventListener(yd,y),h.dispatchEvent(z),z.defaultPrevented||da(A??document.body,{select:!0}),h.removeEventListener(yd,y),Ov.remove(C)},0)}}},[h,m,y,C]);const R=w.useCallback(A=>{if(!s&&!r||C.paused)return;const D=A.key==="Tab"&&!A.altKey&&!A.ctrlKey&&!A.metaKey,z=document.activeElement;if(D&&z){const O=A.currentTarget,[L,X]=Ck(O);L&&X?!A.shiftKey&&z===X?(A.preventDefault(),s&&da(L,{select:!0})):A.shiftKey&&z===L&&(A.preventDefault(),s&&da(X,{select:!0})):z===O&&A.preventDefault()}},[s,r,C.paused]);return v.jsx(Bn.div,{tabIndex:-1,...f,ref:S,onKeyDown:R})});b0.displayName=Sk;function Tk(n,{select:i=!1}={}){const s=document.activeElement;for(const r of n)if(da(r,{select:i}),document.activeElement!==s)return}function Ck(n){const i=x0(n),s=jv(i,n),r=jv(i.reverse(),n);return[s,r]}function x0(n){const i=[],s=document.createTreeWalker(n,NodeFilter.SHOW_ELEMENT,{acceptNode:r=>{const l=r.tagName==="INPUT"&&r.type==="hidden";return r.disabled||r.hidden||l?NodeFilter.FILTER_SKIP:r.tabIndex>=0?NodeFilter.FILTER_ACCEPT:NodeFilter.FILTER_SKIP}});for(;s.nextNode();)i.push(s.currentNode);return i}function jv(n,i){for(const s of n)if(!Ak(s,{upTo:i}))return s}function Ak(n,{upTo:i}){if(getComputedStyle(n).visibility==="hidden")return!0;for(;n;){if(i!==void 0&&n===i)return!1;if(getComputedStyle(n).display==="none")return!0;n=n.parentElement}return!1}function Ek(n){return n instanceof HTMLInputElement&&"select"in n}function da(n,{select:i=!1}={}){if(n&&n.focus){const s=document.activeElement;n.focus({preventScroll:!0}),n!==s&&Ek(n)&&i&&n.select()}}var Ov=Mk();function Mk(){let n=[];return{add(i){const s=n[0];i!==s&&s?.pause(),n=Bv(n,i),n.unshift(i)},remove(i){n=Bv(n,i),n[0]?.resume()}}}function Bv(n,i){const s=[...n],r=s.indexOf(i);return r!==-1&&s.splice(r,1),s}function Dk(n){return n.filter(i=>i.tagName!=="A")}var Rk="Portal",w0=w.forwardRef((n,i)=>{const{container:s,...r}=n,[l,d]=w.useState(!1);so(()=>d(!0),[]);const f=s||l&&globalThis?.document?.body;return f?nC.createPortal(v.jsx(Bn.div,{...r,ref:i}),f):null});w0.displayName=Rk;function kk(n,i){return w.useReducer((s,r)=>i[s][r]??s,n)}var xl=n=>{const{present:i,children:s}=n,r=zk(i),l=typeof s=="function"?s({present:r.isPresent}):w.Children.only(s),d=Ga(r.ref,Nk(l));return typeof s=="function"||r.isPresent?w.cloneElement(l,{ref:d}):null};xl.displayName="Presence";function zk(n){const[i,s]=w.useState(),r=w.useRef(null),l=w.useRef(n),d=w.useRef("none"),f=n?"mounted":"unmounted",[h,p]=kk(f,{mounted:{UNMOUNT:"unmounted",ANIMATION_OUT:"unmountSuspended"},unmountSuspended:{MOUNT:"mounted",ANIMATION_END:"unmounted"},unmounted:{MOUNT:"mounted"}});return w.useEffect(()=>{const m=Vr(r.current);d.current=h==="mounted"?m:"none"},[h]),so(()=>{const m=r.current,y=l.current;if(y!==n){const S=d.current,C=Vr(m);n?p("MOUNT"):C==="none"||m?.display==="none"?p("UNMOUNT"):p(y&&S!==C?"ANIMATION_OUT":"UNMOUNT"),l.current=n}},[n,p]),so(()=>{if(i){let m;const y=i.ownerDocument.defaultView??window,b=C=>{const A=Vr(r.current).includes(CSS.escape(C.animationName));if(C.target===i&&A&&(p("ANIMATION_END"),!l.current)){const D=i.style.animationFillMode;i.style.animationFillMode="forwards",m=y.setTimeout(()=>{i.style.animationFillMode==="forwards"&&(i.style.animationFillMode=D)})}},S=C=>{C.target===i&&(d.current=Vr(r.current))};return i.addEventListener("animationstart",S),i.addEventListener("animationcancel",b),i.addEventListener("animationend",b),()=>{y.clearTimeout(m),i.removeEventListener("animationstart",S),i.removeEventListener("animationcancel",b),i.removeEventListener("animationend",b)}}else p("ANIMATION_END")},[i,p]),{isPresent:["mounted","unmountSuspended"].includes(h),ref:w.useCallback(m=>{r.current=m?getComputedStyle(m):null,s(m)},[])}}function Vr(n){return n?.animationName||"none"}function Nk(n){let i=Object.getOwnPropertyDescriptor(n.props,"ref")?.get,s=i&&"isReactWarning"in i&&i.isReactWarning;return s?n.ref:(i=Object.getOwnPropertyDescriptor(n,"ref")?.get,s=i&&"isReactWarning"in i&&i.isReactWarning,s?n.props.ref:n.props.ref||n.ref)}var vd=0;function jk(){w.useEffect(()=>{const n=document.querySelectorAll("[data-radix-focus-guard]");return document.body.insertAdjacentElement("afterbegin",n[0]??Lv()),document.body.insertAdjacentElement("beforeend",n[1]??Lv()),vd++,()=>{vd===1&&document.querySelectorAll("[data-radix-focus-guard]").forEach(i=>i.remove()),vd--}},[])}function Lv(){const n=document.createElement("span");return n.setAttribute("data-radix-focus-guard",""),n.tabIndex=0,n.style.outline="none",n.style.opacity="0",n.style.position="fixed",n.style.pointerEvents="none",n}var rn=function(){return rn=Object.assign||function(i){for(var s,r=1,l=arguments.length;r<l;r++){s=arguments[r];for(var d in s)Object.prototype.hasOwnProperty.call(s,d)&&(i[d]=s[d])}return i},rn.apply(this,arguments)};function S0(n,i){var s={};for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&i.indexOf(r)<0&&(s[r]=n[r]);if(n!=null&&typeof Object.getOwnPropertySymbols=="function")for(var l=0,r=Object.getOwnPropertySymbols(n);l<r.length;l++)i.indexOf(r[l])<0&&Object.prototype.propertyIsEnumerable.call(n,r[l])&&(s[r[l]]=n[r[l]]);return s}function Ok(n,i,s){if(s||arguments.length===2)for(var r=0,l=i.length,d;r<l;r++)(d||!(r in i))&&(d||(d=Array.prototype.slice.call(i,0,r)),d[r]=i[r]);return n.concat(d||Array.prototype.slice.call(i))}var Jr="right-scroll-bar-position",$r="width-before-scroll-bar",Bk="with-scroll-bars-hidden",Lk="--removed-body-scroll-bar-size";function bd(n,i){return typeof n=="function"?n(i):n&&(n.current=i),n}function Pk(n,i){var s=w.useState(function(){return{value:n,callback:i,facade:{get current(){return s.value},set current(r){var l=s.value;l!==r&&(s.value=r,s.callback(r,l))}}}})[0];return s.callback=i,s.facade}var Vk=typeof window<"u"?w.useLayoutEffect:w.useEffect,Pv=new WeakMap;function _k(n,i){var s=Pk(null,function(r){return n.forEach(function(l){return bd(l,r)})});return Vk(function(){var r=Pv.get(s);if(r){var l=new Set(r),d=new Set(n),f=s.current;l.forEach(function(h){d.has(h)||bd(h,null)}),d.forEach(function(h){l.has(h)||bd(h,f)})}Pv.set(s,n)},[n]),s}function Uk(n){return n}function qk(n,i){i===void 0&&(i=Uk);var s=[],r=!1,l={read:function(){if(r)throw new Error("Sidecar: could not `read` from an `assigned` medium. `read` could be used only with `useMedium`.");return s.length?s[s.length-1]:n},useMedium:function(d){var f=i(d,r);return s.push(f),function(){s=s.filter(function(h){return h!==f})}},assignSyncMedium:function(d){for(r=!0;s.length;){var f=s;s=[],f.forEach(d)}s={push:function(h){return d(h)},filter:function(){return s}}},assignMedium:function(d){r=!0;var f=[];if(s.length){var h=s;s=[],h.forEach(d),f=s}var p=function(){var y=f;f=[],y.forEach(d)},m=function(){return Promise.resolve().then(p)};m(),s={push:function(y){f.push(y),m()},filter:function(y){return f=f.filter(y),s}}}};return l}function Fk(n){n===void 0&&(n={});var i=qk(null);return i.options=rn({async:!0,ssr:!1},n),i}var T0=function(n){var i=n.sideCar,s=S0(n,["sideCar"]);if(!i)throw new Error("Sidecar: please provide `sideCar` property to import the right car");var r=i.read();if(!r)throw new Error("Sidecar medium not found");return w.createElement(r,rn({},s))};T0.isSideCarExport=!0;function Hk(n,i){return n.useMedium(i),T0}var C0=Fk(),xd=function(){},wl=w.forwardRef(function(n,i){var s=w.useRef(null),r=w.useState({onScrollCapture:xd,onWheelCapture:xd,onTouchMoveCapture:xd}),l=r[0],d=r[1],f=n.forwardProps,h=n.children,p=n.className,m=n.removeScrollBar,y=n.enabled,b=n.shards,S=n.sideCar,C=n.noRelative,R=n.noIsolation,A=n.inert,D=n.allowPinchZoom,z=n.as,O=z===void 0?"div":z,L=n.gapMode,X=S0(n,["forwardProps","children","className","removeScrollBar","enabled","shards","sideCar","noRelative","noIsolation","inert","allowPinchZoom","as","gapMode"]),G=S,Z=_k([s,i]),K=rn(rn({},X),l);return w.createElement(w.Fragment,null,y&&w.createElement(G,{sideCar:C0,removeScrollBar:m,shards:b,noRelative:C,noIsolation:R,inert:A,setCallbacks:d,allowPinchZoom:!!D,lockRef:s,gapMode:L}),f?w.cloneElement(w.Children.only(h),rn(rn({},K),{ref:Z})):w.createElement(O,rn({},K,{className:p,ref:Z}),h))});wl.defaultProps={enabled:!0,removeScrollBar:!0,inert:!1};wl.classNames={fullWidth:$r,zeroRight:Jr};var Ik=function(){if(typeof __webpack_nonce__<"u")return __webpack_nonce__};function Gk(){if(!document)return null;var n=document.createElement("style");n.type="text/css";var i=Ik();return i&&n.setAttribute("nonce",i),n}function Yk(n,i){n.styleSheet?n.styleSheet.cssText=i:n.appendChild(document.createTextNode(i))}function Kk(n){var i=document.head||document.getElementsByTagName("head")[0];i.appendChild(n)}var Xk=function(){var n=0,i=null;return{add:function(s){n==0&&(i=Gk())&&(Yk(i,s),Kk(i)),n++},remove:function(){n--,!n&&i&&(i.parentNode&&i.parentNode.removeChild(i),i=null)}}},Wk=function(){var n=Xk();return function(i,s){w.useEffect(function(){return n.add(i),function(){n.remove()}},[i&&s])}},A0=function(){var n=Wk(),i=function(s){var r=s.styles,l=s.dynamic;return n(r,l),null};return i},Qk={left:0,top:0,right:0,gap:0},wd=function(n){return parseInt(n||"",10)||0},Zk=function(n){var i=window.getComputedStyle(document.body),s=i[n==="padding"?"paddingLeft":"marginLeft"],r=i[n==="padding"?"paddingTop":"marginTop"],l=i[n==="padding"?"paddingRight":"marginRight"];return[wd(s),wd(r),wd(l)]},Jk=function(n){if(n===void 0&&(n="margin"),typeof window>"u")return Qk;var i=Zk(n),s=document.documentElement.clientWidth,r=window.innerWidth;return{left:i[0],top:i[1],right:i[2],gap:Math.max(0,r-s+i[2]-i[0])}},$k=A0(),qi="data-scroll-locked",ez=function(n,i,s,r){var l=n.left,d=n.top,f=n.right,h=n.gap;return s===void 0&&(s="margin"),`
  .`.concat(Bk,` {
   overflow: hidden `).concat(r,`;
   padding-right: `).concat(h,"px ").concat(r,`;
  }
  body[`).concat(qi,`] {
    overflow: hidden `).concat(r,`;
    overscroll-behavior: contain;
    `).concat([i&&"position: relative ".concat(r,";"),s==="margin"&&`
    padding-left: `.concat(l,`px;
    padding-top: `).concat(d,`px;
    padding-right: `).concat(f,`px;
    margin-left:0;
    margin-top:0;
    margin-right: `).concat(h,"px ").concat(r,`;
    `),s==="padding"&&"padding-right: ".concat(h,"px ").concat(r,";")].filter(Boolean).join(""),`
  }
  
  .`).concat(Jr,` {
    right: `).concat(h,"px ").concat(r,`;
  }
  
  .`).concat($r,` {
    margin-right: `).concat(h,"px ").concat(r,`;
  }
  
  .`).concat(Jr," .").concat(Jr,` {
    right: 0 `).concat(r,`;
  }
  
  .`).concat($r," .").concat($r,` {
    margin-right: 0 `).concat(r,`;
  }
  
  body[`).concat(qi,`] {
    `).concat(Lk,": ").concat(h,`px;
  }
`)},Vv=function(){var n=parseInt(document.body.getAttribute(qi)||"0",10);return isFinite(n)?n:0},tz=function(){w.useEffect(function(){return document.body.setAttribute(qi,(Vv()+1).toString()),function(){var n=Vv()-1;n<=0?document.body.removeAttribute(qi):document.body.setAttribute(qi,n.toString())}},[])},nz=function(n){var i=n.noRelative,s=n.noImportant,r=n.gapMode,l=r===void 0?"margin":r;tz();var d=w.useMemo(function(){return Jk(l)},[l]);return w.createElement($k,{styles:ez(d,!i,l,s?"":"!important")})},Jd=!1;if(typeof window<"u")try{var _r=Object.defineProperty({},"passive",{get:function(){return Jd=!0,!0}});window.addEventListener("test",_r,_r),window.removeEventListener("test",_r,_r)}catch{Jd=!1}var zi=Jd?{passive:!1}:!1,az=function(n){return n.tagName==="TEXTAREA"},E0=function(n,i){if(!(n instanceof Element))return!1;var s=window.getComputedStyle(n);return s[i]!=="hidden"&&!(s.overflowY===s.overflowX&&!az(n)&&s[i]==="visible")},iz=function(n){return E0(n,"overflowY")},sz=function(n){return E0(n,"overflowX")},_v=function(n,i){var s=i.ownerDocument,r=i;do{typeof ShadowRoot<"u"&&r instanceof ShadowRoot&&(r=r.host);var l=M0(n,r);if(l){var d=D0(n,r),f=d[1],h=d[2];if(f>h)return!0}r=r.parentNode}while(r&&r!==s.body);return!1},oz=function(n){var i=n.scrollTop,s=n.scrollHeight,r=n.clientHeight;return[i,s,r]},rz=function(n){var i=n.scrollLeft,s=n.scrollWidth,r=n.clientWidth;return[i,s,r]},M0=function(n,i){return n==="v"?iz(i):sz(i)},D0=function(n,i){return n==="v"?oz(i):rz(i)},lz=function(n,i){return n==="h"&&i==="rtl"?-1:1},cz=function(n,i,s,r,l){var d=lz(n,window.getComputedStyle(i).direction),f=d*r,h=s.target,p=i.contains(h),m=!1,y=f>0,b=0,S=0;do{if(!h)break;var C=D0(n,h),R=C[0],A=C[1],D=C[2],z=A-D-d*R;(R||z)&&M0(n,h)&&(b+=z,S+=R);var O=h.parentNode;h=O&&O.nodeType===Node.DOCUMENT_FRAGMENT_NODE?O.host:O}while(!p&&h!==document.body||p&&(i.contains(h)||i===h));return(y&&Math.abs(b)<1||!y&&Math.abs(S)<1)&&(m=!0),m},Ur=function(n){return"changedTouches"in n?[n.changedTouches[0].clientX,n.changedTouches[0].clientY]:[0,0]},Uv=function(n){return[n.deltaX,n.deltaY]},qv=function(n){return n&&"current"in n?n.current:n},uz=function(n,i){return n[0]===i[0]&&n[1]===i[1]},dz=function(n){return`
  .block-interactivity-`.concat(n,` {pointer-events: none;}
  .allow-interactivity-`).concat(n,` {pointer-events: all;}
`)},fz=0,Ni=[];function hz(n){var i=w.useRef([]),s=w.useRef([0,0]),r=w.useRef(),l=w.useState(fz++)[0],d=w.useState(A0)[0],f=w.useRef(n);w.useEffect(function(){f.current=n},[n]),w.useEffect(function(){if(n.inert){document.body.classList.add("block-interactivity-".concat(l));var A=Ok([n.lockRef.current],(n.shards||[]).map(qv),!0).filter(Boolean);return A.forEach(function(D){return D.classList.add("allow-interactivity-".concat(l))}),function(){document.body.classList.remove("block-interactivity-".concat(l)),A.forEach(function(D){return D.classList.remove("allow-interactivity-".concat(l))})}}},[n.inert,n.lockRef.current,n.shards]);var h=w.useCallback(function(A,D){if("touches"in A&&A.touches.length===2||A.type==="wheel"&&A.ctrlKey)return!f.current.allowPinchZoom;var z=Ur(A),O=s.current,L="deltaX"in A?A.deltaX:O[0]-z[0],X="deltaY"in A?A.deltaY:O[1]-z[1],G,Z=A.target,K=Math.abs(L)>Math.abs(X)?"h":"v";if("touches"in A&&K==="h"&&Z.type==="range")return!1;var H=window.getSelection(),se=H&&H.anchorNode,we=se?se===Z||se.contains(Z):!1;if(we)return!1;var Oe=_v(K,Z);if(!Oe)return!0;if(Oe?G=K:(G=K==="v"?"h":"v",Oe=_v(K,Z)),!Oe)return!1;if(!r.current&&"changedTouches"in A&&(L||X)&&(r.current=G),!G)return!0;var Be=r.current||G;return cz(Be,D,A,Be==="h"?L:X)},[]),p=w.useCallback(function(A){var D=A;if(!(!Ni.length||Ni[Ni.length-1]!==d)){var z="deltaY"in D?Uv(D):Ur(D),O=i.current.filter(function(G){return G.name===D.type&&(G.target===D.target||D.target===G.shadowParent)&&uz(G.delta,z)})[0];if(O&&O.should){D.cancelable&&D.preventDefault();return}if(!O){var L=(f.current.shards||[]).map(qv).filter(Boolean).filter(function(G){return G.contains(D.target)}),X=L.length>0?h(D,L[0]):!f.current.noIsolation;X&&D.cancelable&&D.preventDefault()}}},[]),m=w.useCallback(function(A,D,z,O){var L={name:A,delta:D,target:z,should:O,shadowParent:mz(z)};i.current.push(L),setTimeout(function(){i.current=i.current.filter(function(X){return X!==L})},1)},[]),y=w.useCallback(function(A){s.current=Ur(A),r.current=void 0},[]),b=w.useCallback(function(A){m(A.type,Uv(A),A.target,h(A,n.lockRef.current))},[]),S=w.useCallback(function(A){m(A.type,Ur(A),A.target,h(A,n.lockRef.current))},[]);w.useEffect(function(){return Ni.push(d),n.setCallbacks({onScrollCapture:b,onWheelCapture:b,onTouchMoveCapture:S}),document.addEventListener("wheel",p,zi),document.addEventListener("touchmove",p,zi),document.addEventListener("touchstart",y,zi),function(){Ni=Ni.filter(function(A){return A!==d}),document.removeEventListener("wheel",p,zi),document.removeEventListener("touchmove",p,zi),document.removeEventListener("touchstart",y,zi)}},[]);var C=n.removeScrollBar,R=n.inert;return w.createElement(w.Fragment,null,R?w.createElement(d,{styles:dz(l)}):null,C?w.createElement(nz,{noRelative:n.noRelative,gapMode:n.gapMode}):null)}function mz(n){for(var i=null;n!==null;)n instanceof ShadowRoot&&(i=n.host,n=n.host),n=n.parentNode;return i}const pz=Hk(C0,hz);var R0=w.forwardRef(function(n,i){return w.createElement(wl,rn({},n,{ref:i,sideCar:pz}))});R0.classNames=wl.classNames;var gz=function(n){if(typeof document>"u")return null;var i=Array.isArray(n)?n[0]:n;return i.ownerDocument.body},ji=new WeakMap,qr=new WeakMap,Fr={},Sd=0,k0=function(n){return n&&(n.host||k0(n.parentNode))},yz=function(n,i){return i.map(function(s){if(n.contains(s))return s;var r=k0(s);return r&&n.contains(r)?r:(console.error("aria-hidden",s,"in not contained inside",n,". Doing nothing"),null)}).filter(function(s){return!!s})},vz=function(n,i,s,r){var l=yz(i,Array.isArray(n)?n:[n]);Fr[s]||(Fr[s]=new WeakMap);var d=Fr[s],f=[],h=new Set,p=new Set(l),m=function(b){!b||h.has(b)||(h.add(b),m(b.parentNode))};l.forEach(m);var y=function(b){!b||p.has(b)||Array.prototype.forEach.call(b.children,function(S){if(h.has(S))y(S);else try{var C=S.getAttribute(r),R=C!==null&&C!=="false",A=(ji.get(S)||0)+1,D=(d.get(S)||0)+1;ji.set(S,A),d.set(S,D),f.push(S),A===1&&R&&qr.set(S,!0),D===1&&S.setAttribute(s,"true"),R||S.setAttribute(r,"true")}catch(z){console.error("aria-hidden: cannot operate on ",S,z)}})};return y(i),h.clear(),Sd++,function(){f.forEach(function(b){var S=ji.get(b)-1,C=d.get(b)-1;ji.set(b,S),d.set(b,C),S||(qr.has(b)||b.removeAttribute(r),qr.delete(b)),C||b.removeAttribute(s)}),Sd--,Sd||(ji=new WeakMap,ji=new WeakMap,qr=new WeakMap,Fr={})}},bz=function(n,i,s){s===void 0&&(s="data-aria-hidden");var r=Array.from(Array.isArray(n)?n:[n]),l=gz(n);return l?(r.push.apply(r,Array.from(l.querySelectorAll("[aria-live], script"))),vz(r,l,s,"aria-hidden")):function(){return null}};function xz(n){const i=wz(n),s=w.forwardRef((r,l)=>{const{children:d,...f}=r,h=w.Children.toArray(d),p=h.find(Tz);if(p){const m=p.props.children,y=h.map(b=>b===p?w.Children.count(m)>1?w.Children.only(null):w.isValidElement(m)?m.props.children:null:b);return v.jsx(i,{...f,ref:l,children:w.isValidElement(m)?w.cloneElement(m,void 0,y):null})}return v.jsx(i,{...f,ref:l,children:d})});return s.displayName=`${n}.Slot`,s}function wz(n){const i=w.forwardRef((s,r)=>{const{children:l,...d}=s;if(w.isValidElement(l)){const f=Az(l),h=Cz(d,l.props);return l.type!==w.Fragment&&(h.ref=r?bl(r,f):f),w.cloneElement(l,h)}return w.Children.count(l)>1?w.Children.only(null):null});return i.displayName=`${n}.SlotClone`,i}var Sz=Symbol("radix.slottable");function Tz(n){return w.isValidElement(n)&&typeof n.type=="function"&&"__radixId"in n.type&&n.type.__radixId===Sz}function Cz(n,i){const s={...i};for(const r in i){const l=n[r],d=i[r];/^on[A-Z]/.test(r)?l&&d?s[r]=(...h)=>{const p=d(...h);return l(...h),p}:l&&(s[r]=l):r==="style"?s[r]={...l,...d}:r==="className"&&(s[r]=[l,d].filter(Boolean).join(" "))}return{...n,...s}}function Az(n){let i=Object.getOwnPropertyDescriptor(n.props,"ref")?.get,s=i&&"isReactWarning"in i&&i.isReactWarning;return s?n.ref:(i=Object.getOwnPropertyDescriptor(n,"ref")?.get,s=i&&"isReactWarning"in i&&i.isReactWarning,s?n.props.ref:n.props.ref||n.ref)}var Sl="Dialog",[z0]=JR(Sl),[Ez,$t]=z0(Sl),N0=n=>{const{__scopeDialog:i,children:s,open:r,defaultOpen:l,onOpenChange:d,modal:f=!0}=n,h=w.useRef(null),p=w.useRef(null),[m,y]=ak({prop:r,defaultProp:l??!1,onChange:d,caller:Sl});return v.jsx(Ez,{scope:i,triggerRef:h,contentRef:p,contentId:pd(),titleId:pd(),descriptionId:pd(),open:m,onOpenChange:y,onOpenToggle:w.useCallback(()=>y(b=>!b),[y]),modal:f,children:s})};N0.displayName=Sl;var j0="DialogTrigger",O0=w.forwardRef((n,i)=>{const{__scopeDialog:s,...r}=n,l=$t(j0,s),d=Ga(i,l.triggerRef);return v.jsx(Bn.button,{type:"button","aria-haspopup":"dialog","aria-expanded":l.open,"aria-controls":l.contentId,"data-state":Hf(l.open),...r,ref:d,onClick:ma(n.onClick,l.onOpenToggle)})});O0.displayName=j0;var qf="DialogPortal",[Mz,B0]=z0(qf,{forceMount:void 0}),L0=n=>{const{__scopeDialog:i,forceMount:s,children:r,container:l}=n,d=$t(qf,i);return v.jsx(Mz,{scope:i,forceMount:s,children:w.Children.map(r,f=>v.jsx(xl,{present:s||d.open,children:v.jsx(w0,{asChild:!0,container:l,children:f})}))})};L0.displayName=qf;var fl="DialogOverlay",P0=w.forwardRef((n,i)=>{const s=B0(fl,n.__scopeDialog),{forceMount:r=s.forceMount,...l}=n,d=$t(fl,n.__scopeDialog);return d.modal?v.jsx(xl,{present:r||d.open,children:v.jsx(Rz,{...l,ref:i})}):null});P0.displayName=fl;var Dz=xz("DialogOverlay.RemoveScroll"),Rz=w.forwardRef((n,i)=>{const{__scopeDialog:s,...r}=n,l=$t(fl,s);return v.jsx(R0,{as:Dz,allowPinchZoom:!0,shards:[l.contentRef],children:v.jsx(Bn.div,{"data-state":Hf(l.open),...r,ref:i,style:{pointerEvents:"auto",...r.style}})})}),Ha="DialogContent",V0=w.forwardRef((n,i)=>{const s=B0(Ha,n.__scopeDialog),{forceMount:r=s.forceMount,...l}=n,d=$t(Ha,n.__scopeDialog);return v.jsx(xl,{present:r||d.open,children:d.modal?v.jsx(kz,{...l,ref:i}):v.jsx(zz,{...l,ref:i})})});V0.displayName=Ha;var kz=w.forwardRef((n,i)=>{const s=$t(Ha,n.__scopeDialog),r=w.useRef(null),l=Ga(i,s.contentRef,r);return w.useEffect(()=>{const d=r.current;if(d)return bz(d)},[]),v.jsx(_0,{...n,ref:l,trapFocus:s.open,disableOutsidePointerEvents:!0,onCloseAutoFocus:ma(n.onCloseAutoFocus,d=>{d.preventDefault(),s.triggerRef.current?.focus()}),onPointerDownOutside:ma(n.onPointerDownOutside,d=>{const f=d.detail.originalEvent,h=f.button===0&&f.ctrlKey===!0;(f.button===2||h)&&d.preventDefault()}),onFocusOutside:ma(n.onFocusOutside,d=>d.preventDefault())})}),zz=w.forwardRef((n,i)=>{const s=$t(Ha,n.__scopeDialog),r=w.useRef(!1),l=w.useRef(!1);return v.jsx(_0,{...n,ref:i,trapFocus:!1,disableOutsidePointerEvents:!1,onCloseAutoFocus:d=>{n.onCloseAutoFocus?.(d),d.defaultPrevented||(r.current||s.triggerRef.current?.focus(),d.preventDefault()),r.current=!1,l.current=!1},onInteractOutside:d=>{n.onInteractOutside?.(d),d.defaultPrevented||(r.current=!0,d.detail.originalEvent.type==="pointerdown"&&(l.current=!0));const f=d.target;s.triggerRef.current?.contains(f)&&d.preventDefault(),d.detail.originalEvent.type==="focusin"&&l.current&&d.preventDefault()}})}),_0=w.forwardRef((n,i)=>{const{__scopeDialog:s,trapFocus:r,onOpenAutoFocus:l,onCloseAutoFocus:d,...f}=n,h=$t(Ha,s),p=w.useRef(null),m=Ga(i,p);return jk(),v.jsxs(v.Fragment,{children:[v.jsx(b0,{asChild:!0,loop:!0,trapped:r,onMountAutoFocus:l,onUnmountAutoFocus:d,children:v.jsx(y0,{role:"dialog",id:h.contentId,"aria-describedby":h.descriptionId,"aria-labelledby":h.titleId,"data-state":Hf(h.open),...f,ref:m,onDismiss:()=>h.onOpenChange(!1)})}),v.jsxs(v.Fragment,{children:[v.jsx(Oz,{titleId:h.titleId}),v.jsx(Lz,{contentRef:p,descriptionId:h.descriptionId})]})]})}),Ff="DialogTitle",Nz=w.forwardRef((n,i)=>{const{__scopeDialog:s,...r}=n,l=$t(Ff,s);return v.jsx(Bn.h2,{id:l.titleId,...r,ref:i})});Nz.displayName=Ff;var U0="DialogDescription",jz=w.forwardRef((n,i)=>{const{__scopeDialog:s,...r}=n,l=$t(U0,s);return v.jsx(Bn.p,{id:l.descriptionId,...r,ref:i})});jz.displayName=U0;var q0="DialogClose",F0=w.forwardRef((n,i)=>{const{__scopeDialog:s,...r}=n,l=$t(q0,s);return v.jsx(Bn.button,{type:"button",...r,ref:i,onClick:ma(n.onClick,()=>l.onOpenChange(!1))})});F0.displayName=q0;function Hf(n){return n?"open":"closed"}var H0="DialogTitleWarning",[m3,I0]=ZR(H0,{contentName:Ha,titleName:Ff,docsSlug:"dialog"}),Oz=({titleId:n})=>{const i=I0(H0),s=`\`${i.contentName}\` requires a \`${i.titleName}\` for the component to be accessible for screen reader users.

If you want to hide the \`${i.titleName}\`, you can wrap it with our VisuallyHidden component.

For more information, see https://radix-ui.com/primitives/docs/components/${i.docsSlug}`;return w.useEffect(()=>{n&&(document.getElementById(n)||console.error(s))},[s,n]),null},Bz="DialogDescriptionWarning",Lz=({contentRef:n,descriptionId:i})=>{const r=`Warning: Missing \`Description\` or \`aria-describedby={undefined}\` for {${I0(Bz).contentName}}.`;return w.useEffect(()=>{const l=n.current?.getAttribute("aria-describedby");i&&l&&(document.getElementById(i)||console.warn(r))},[r,n,i]),null},Pz=N0,Vz=O0,_z=L0,Uz=P0,qz=V0,Fz=F0;function Hz({...n}){return v.jsx(Pz,{"code-path":"src/components/ui/sheet.tsx:8:10","data-slot":"sheet",...n})}function Iz({...n}){return v.jsx(Vz,{"code-path":"src/components/ui/sheet.tsx:14:10","data-slot":"sheet-trigger",...n})}function Gz({...n}){return v.jsx(_z,{"code-path":"src/components/ui/sheet.tsx:26:10","data-slot":"sheet-portal",...n})}function Yz({className:n,...i}){return v.jsx(Uz,{"code-path":"src/components/ui/sheet.tsx:34:5","data-slot":"sheet-overlay",className:Uf("data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 fixed inset-0 z-50 bg-black/50",n),...i})}function Kz({className:n,children:i,side:s="right",...r}){return v.jsxs(Gz,{"code-path":"src/components/ui/sheet.tsx:54:5",children:[v.jsx(Yz,{"code-path":"src/components/ui/sheet.tsx:55:7"}),v.jsxs(qz,{"code-path":"src/components/ui/sheet.tsx:56:7","data-slot":"sheet-content",className:Uf("bg-background data-[state=open]:animate-in data-[state=closed]:animate-out fixed z-50 flex flex-col gap-4 shadow-lg transition ease-in-out data-[state=closed]:duration-300 data-[state=open]:duration-500",s==="right"&&"data-[state=closed]:slide-out-to-right data-[state=open]:slide-in-from-right inset-y-0 right-0 h-full w-3/4 border-l sm:max-w-sm",s==="left"&&"data-[state=closed]:slide-out-to-left data-[state=open]:slide-in-from-left inset-y-0 left-0 h-full w-3/4 border-r sm:max-w-sm",s==="top"&&"data-[state=closed]:slide-out-to-top data-[state=open]:slide-in-from-top inset-x-0 top-0 h-auto border-b",s==="bottom"&&"data-[state=closed]:slide-out-to-bottom data-[state=open]:slide-in-from-bottom inset-x-0 bottom-0 h-auto border-t",n),...r,children:[i,v.jsxs(Fz,{"code-path":"src/components/ui/sheet.tsx:73:9",className:"ring-offset-background focus:ring-ring data-[state=open]:bg-secondary absolute top-4 right-4 rounded-xs opacity-70 transition-opacity hover:opacity-100 focus:ring-2 focus:ring-offset-2 focus:outline-hidden disabled:pointer-events-none",children:[v.jsx(e0,{"code-path":"src/components/ui/sheet.tsx:74:11",className:"size-4"}),v.jsx("span",{"code-path":"src/components/ui/sheet.tsx:75:11",className:"sr-only",children:"Close"})]})]})]})}const $d=()=>{const[n,i]=w.useState(!1);w.useEffect(()=>{const l=()=>{i(window.scrollY>50)};return window.addEventListener("scroll",l,{passive:!0}),()=>window.removeEventListener("scroll",l)},[]);const s=[{name:"Home",href:"#home"},{name:"Services",href:"#services"},{name:"About",href:"#about"},{name:"Blog",href:"#blog"},{name:"Contact",href:"#contact"}],r=l=>{const d=document.querySelector(l);d&&d.scrollIntoView({behavior:"smooth"})};return v.jsx(ue.header,{"code-path":"src/sections/Navigation.tsx:35:5",initial:{y:-100},animate:{y:0},transition:{duration:.6,ease:[.25,.46,.45,.94]},className:`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${n?"bg-dark-blue/95 backdrop-blur-md shadow-lg":"bg-transparent"}`,children:v.jsx("div",{"code-path":"src/sections/Navigation.tsx:45:7",className:"max-w-[1200px] mx-auto px-4 sm:px-6 lg:px-8",children:v.jsxs("div",{"code-path":"src/sections/Navigation.tsx:46:9",className:"flex items-center justify-between h-32",children:[v.jsx("a",{"code-path":"src/sections/Navigation.tsx:48:11",href:"#home",onClick:l=>{l.preventDefault(),r("#home")},className:"flex items-center",children:v.jsx("img",{"code-path":"src/sections/Navigation.tsx:56:13",src:"/images/facts-logo-inverted.png",alt:"FACTS Consulting",className:"h-48 w-auto"})}),v.jsxs("nav",{"code-path":"src/sections/Navigation.tsx:64:11",className:"hidden md:flex items-center gap-8",children:[s.map(l=>v.jsx("a",{"code-path":"src/sections/Navigation.tsx:66:15",href:l.href,onClick:d=>{d.preventDefault(),r(l.href)},className:"text-text-secondary hover:text-accent-gold transition-colors duration-200 text-sm font-medium",children:l.name},l.name)),v.jsx(cn,{"code-path":"src/sections/Navigation.tsx:78:13",onClick:()=>window.open("https://calendly.com/bobkatz","_blank"),className:"bg-accent-gold text-dark-blue hover:bg-accent-gold-hover font-semibold px-6",children:"Schedule Consultation"})]}),v.jsxs(Hz,{"code-path":"src/sections/Navigation.tsx:87:11",children:[v.jsx(Iz,{"code-path":"src/sections/Navigation.tsx:88:13",asChild:!0,className:"md:hidden",children:v.jsx(cn,{"code-path":"src/sections/Navigation.tsx:89:15",variant:"ghost",size:"icon",className:"text-white",children:v.jsx(jD,{"code-path":"src/sections/Navigation.tsx:90:17",className:"h-6 w-6"})})}),v.jsx(Kz,{"code-path":"src/sections/Navigation.tsx:93:13",side:"right",className:"bg-dark-blue border-card-bg w-[280px]",children:v.jsxs("div",{"code-path":"src/sections/Navigation.tsx:94:15",className:"flex flex-col gap-8 mt-8",children:[s.map(l=>v.jsx("a",{"code-path":"src/sections/Navigation.tsx:96:19",href:l.href,onClick:d=>{d.preventDefault(),r(l.href)},className:"text-white hover:text-accent-gold transition-colors duration-200 text-lg font-medium",children:l.name},l.name)),v.jsx(cn,{"code-path":"src/sections/Navigation.tsx:108:17",onClick:()=>window.open("https://calendly.com/bobkatz","_blank"),className:"bg-accent-gold text-dark-blue hover:bg-accent-gold-hover font-semibold w-full",children:"Schedule Consultation"})]})})]})]})})})},Xz=()=>{const n={hidden:{opacity:0},visible:{opacity:1,transition:{staggerChildren:.15,delayChildren:.3}}},i={hidden:{opacity:0,y:40},visible:{opacity:1,y:0,transition:{duration:.8,ease:[.25,.46,.45,.94]}}},s=r=>{const l=document.querySelector(r);l&&l.scrollIntoView({behavior:"smooth"})};return v.jsxs("section",{"code-path":"src/sections/Hero.tsx:37:5",id:"home",className:"relative min-h-screen flex items-center bg-dark-blue overflow-hidden",children:[v.jsx("div",{"code-path":"src/sections/Hero.tsx:42:7",className:"absolute inset-0 bg-gradient-to-br from-dark-blue via-dark-blue to-navy"}),v.jsx("div",{"code-path":"src/sections/Hero.tsx:45:7",className:"absolute top-20 right-10 w-72 h-72 bg-accent-gold/5 rounded-full blur-3xl"}),v.jsx("div",{"code-path":"src/sections/Hero.tsx:46:7",className:"absolute bottom-20 left-10 w-96 h-96 bg-accent-gold/3 rounded-full blur-3xl"}),v.jsx("div",{"code-path":"src/sections/Hero.tsx:48:7",className:"relative z-10 max-w-[1200px] mx-auto px-4 sm:px-6 lg:px-8 py-32",children:v.jsxs("div",{"code-path":"src/sections/Hero.tsx:49:9",className:"grid lg:grid-cols-2 gap-12 items-center",children:[v.jsxs(ue.div,{"code-path":"src/sections/Hero.tsx:51:11",variants:n,initial:"hidden",animate:"visible",className:"max-w-xl",children:[v.jsxs(ue.div,{"code-path":"src/sections/Hero.tsx:57:13",variants:i,className:"flex items-center gap-2 mb-6",children:[v.jsx("span",{"code-path":"src/sections/Hero.tsx:61:15",className:"w-8 h-[2px] bg-accent-gold"}),v.jsx("span",{"code-path":"src/sections/Hero.tsx:62:15",className:"text-accent-gold text-sm font-medium tracking-wider uppercase",children:"Strategic Consulting"})]}),v.jsxs(ue.h1,{"code-path":"src/sections/Hero.tsx:67:13",variants:i,className:"text-4xl sm:text-5xl lg:text-6xl font-bold text-white leading-tight mb-6",children:["Transform Your Business with"," ",v.jsx("span",{"code-path":"src/sections/Hero.tsx:72:15",className:"text-accent-gold",children:"FACTS"})]}),v.jsxs(ue.p,{"code-path":"src/sections/Hero.tsx:75:13",variants:i,className:"text-lg text-text-secondary mb-4",children:[v.jsx("span",{"code-path":"src/sections/Hero.tsx:79:15",className:"text-accent-gold font-semibold",children:"F"}),"inance |"," ",v.jsx("span",{"code-path":"src/sections/Hero.tsx:80:15",className:"text-accent-gold font-semibold",children:"A"}),"nalytics |"," ",v.jsx("span",{"code-path":"src/sections/Hero.tsx:81:15",className:"text-accent-gold font-semibold",children:"C"}),"onsulting |"," ",v.jsx("span",{"code-path":"src/sections/Hero.tsx:82:15",className:"text-accent-gold font-semibold",children:"T"}),"ransformation"," ",v.jsx("span",{"code-path":"src/sections/Hero.tsx:83:15",className:"text-accent-gold font-semibold",children:"S"}),"ervices"]}),v.jsx(ue.p,{"code-path":"src/sections/Hero.tsx:86:13",variants:i,className:"text-text-secondary text-lg leading-relaxed mb-8",children:"Strategic financial guidance, data-driven analytics, and transformational consulting to help your business reduce costs, improve performance, and achieve sustainable growth."}),v.jsxs(ue.div,{"code-path":"src/sections/Hero.tsx:95:13",variants:i,className:"flex flex-wrap gap-4",children:[v.jsxs(cn,{"code-path":"src/sections/Hero.tsx:99:15",onClick:()=>window.open("https://calendly.com/bobkatz","_blank"),className:"bg-accent-gold text-dark-blue hover:bg-accent-gold-hover font-semibold px-8 py-6 text-base animate-pulse-glow",children:["Schedule a Consultation",v.jsx(io,{"code-path":"src/sections/Hero.tsx:104:17",className:"ml-2 h-5 w-5"})]}),v.jsx(cn,{"code-path":"src/sections/Hero.tsx:106:15",onClick:()=>s("#services"),variant:"outline",className:"border-2 border-accent-gold text-accent-gold hover:bg-accent-gold/10 font-semibold px-8 py-6 text-base",children:"Explore Our Services"})]})]}),v.jsxs(ue.div,{"code-path":"src/sections/Hero.tsx:117:11",initial:{opacity:0,scale:.95},animate:{opacity:1,scale:1},transition:{duration:1,delay:.5,ease:[.25,.46,.45,.94]},className:"relative hidden lg:block",children:[v.jsxs("div",{"code-path":"src/sections/Hero.tsx:123:13",className:"relative rounded-2xl overflow-hidden shadow-2xl",children:[v.jsx("img",{"code-path":"src/sections/Hero.tsx:124:15",src:"/images/hero-visual.jpg",alt:"Business Transformation",className:"w-full h-auto object-cover"}),v.jsx("div",{"code-path":"src/sections/Hero.tsx:129:15",className:"absolute inset-0 bg-gradient-to-t from-dark-blue/30 to-transparent"})]}),v.jsxs(ue.div,{"code-path":"src/sections/Hero.tsx:133:13",initial:{opacity:0,y:20},animate:{opacity:1,y:0},transition:{duration:.8,delay:1},className:"absolute -bottom-6 -left-6 bg-card-bg border border-accent-gold/20 rounded-xl p-6 shadow-card",children:[v.jsx("div",{"code-path":"src/sections/Hero.tsx:139:15",className:"text-3xl font-bold text-accent-gold",children:"150+"}),v.jsx("div",{"code-path":"src/sections/Hero.tsx:140:15",className:"text-text-secondary text-sm",children:"Clients Served"})]})]})]})}),v.jsx(ue.div,{"code-path":"src/sections/Hero.tsx:147:7",initial:{opacity:0},animate:{opacity:1},transition:{delay:1.5},className:"absolute bottom-8 left-1/2 -translate-x-1/2",children:v.jsxs(ue.div,{"code-path":"src/sections/Hero.tsx:153:9",animate:{y:[0,10,0]},transition:{duration:2,repeat:1/0,ease:"easeInOut"},className:"flex flex-col items-center gap-2 cursor-pointer",onClick:()=>s("#pillars"),children:[v.jsx("span",{"code-path":"src/sections/Hero.tsx:159:11",className:"text-text-secondary text-sm",children:"Scroll to explore"}),v.jsx(wD,{"code-path":"src/sections/Hero.tsx:160:11",className:"w-5 h-5 text-accent-gold"})]})})]})},Wz=({icon:n,title:i,description:s,index:r})=>v.jsxs(ue.div,{"code-path":"src/sections/FactsPillars.tsx:13:5",initial:{opacity:0,y:30},whileInView:{opacity:1,y:0},viewport:{once:!0,margin:"-50px"},transition:{duration:.6,delay:r*.1,ease:[.25,.46,.45,.94]},whileHover:{y:-8},className:"group bg-white rounded-2xl p-8 shadow-card hover:shadow-card-hover transition-all duration-300 will-change-transform",children:[v.jsx(ue.div,{"code-path":"src/sections/FactsPillars.tsx:25:7",className:"w-14 h-14 bg-dark-blue rounded-xl flex items-center justify-center mb-6 group-hover:bg-accent-gold transition-colors duration-300",whileHover:{scale:1.1},transition:{duration:.2},children:v.jsx("div",{"code-path":"src/sections/FactsPillars.tsx:30:9",className:"text-accent-gold group-hover:text-dark-blue transition-colors duration-300",children:n})}),v.jsx("h3",{"code-path":"src/sections/FactsPillars.tsx:35:7",className:"text-xl font-semibold text-dark-blue mb-3",children:i}),v.jsx("p",{"code-path":"src/sections/FactsPillars.tsx:39:7",className:"text-gray-600 leading-relaxed",children:s})]}),Qz=()=>{const n=[{icon:v.jsx(Jx,{"code-path":"src/sections/FactsPillars.tsx:49:13",className:"w-7 h-7"}),title:"Finance",description:"Strategic financial planning, FP&A, treasury management, and accounting optimization to strengthen your financial foundation."},{icon:v.jsx(pD,{"code-path":"src/sections/FactsPillars.tsx:55:13",className:"w-7 h-7"}),title:"Analytics",description:"Data-driven insights, predictive analytics, and business intelligence to inform strategic decision-making."},{icon:v.jsx($x,{"code-path":"src/sections/FactsPillars.tsx:61:13",className:"w-7 h-7"}),title:"Consulting",description:"Expert advisory services for operational excellence, risk management, and sustainable business growth."},{icon:v.jsx(qD,{"code-path":"src/sections/FactsPillars.tsx:67:13",className:"w-7 h-7"}),title:"Transformation",description:"End-to-end digital transformation, process reengineering, and change management for the modern enterprise."}];return v.jsx("section",{"code-path":"src/sections/FactsPillars.tsx:75:5",id:"pillars",className:"py-24 bg-light-bg",children:v.jsxs("div",{"code-path":"src/sections/FactsPillars.tsx:76:7",className:"max-w-[1200px] mx-auto px-4 sm:px-6 lg:px-8",children:[v.jsxs(ue.div,{"code-path":"src/sections/FactsPillars.tsx:78:9",initial:{opacity:0,y:30},whileInView:{opacity:1,y:0},viewport:{once:!0},transition:{duration:.6,ease:[.25,.46,.45,.94]},className:"text-center mb-16",children:[v.jsxs("div",{"code-path":"src/sections/FactsPillars.tsx:85:11",className:"flex items-center justify-center gap-2 mb-4",children:[v.jsx("span",{"code-path":"src/sections/FactsPillars.tsx:86:13",className:"w-8 h-[2px] bg-accent-gold"}),v.jsx("span",{"code-path":"src/sections/FactsPillars.tsx:87:13",className:"text-accent-gold text-sm font-medium tracking-wider uppercase",children:"Our Expertise"}),v.jsx("span",{"code-path":"src/sections/FactsPillars.tsx:90:13",className:"w-8 h-[2px] bg-accent-gold"})]}),v.jsx("h2",{"code-path":"src/sections/FactsPillars.tsx:93:11",className:"text-3xl sm:text-4xl font-bold text-dark-blue mb-4",children:"The FACTS Advantage"}),v.jsx("p",{"code-path":"src/sections/FactsPillars.tsx:97:11",className:"text-gray-600 text-lg max-w-2xl mx-auto",children:"We bring together four core disciplines to deliver comprehensive solutions that drive measurable business results."})]}),v.jsx("div",{"code-path":"src/sections/FactsPillars.tsx:104:9",className:"grid sm:grid-cols-2 lg:grid-cols-4 gap-6",children:n.map((i,s)=>v.jsx(Wz,{"code-path":"src/sections/FactsPillars.tsx:106:13",icon:i.icon,title:i.title,description:i.description,index:s},i.title))})]})})},Zz=({icon:n,title:i,description:s,features:r,index:l})=>v.jsxs(ue.div,{"code-path":"src/sections/Services.tsx:14:5",initial:{opacity:0,y:30},whileInView:{opacity:1,y:0},viewport:{once:!0,margin:"-50px"},transition:{duration:.6,delay:l*.15,ease:[.25,.46,.45,.94]},whileHover:{y:-4},className:"group bg-card-bg rounded-2xl p-8 border border-transparent hover:border-accent-gold/30 transition-all duration-300 will-change-transform",children:[v.jsx("div",{"code-path":"src/sections/Services.tsx:26:7",className:"w-12 h-12 bg-accent-gold/10 rounded-xl flex items-center justify-center mb-6 group-hover:bg-accent-gold/20 transition-colors duration-300",children:v.jsx("div",{"code-path":"src/sections/Services.tsx:27:9",className:"text-accent-gold",children:n})}),v.jsx("h3",{"code-path":"src/sections/Services.tsx:30:7",className:"text-xl font-semibold text-white mb-3",children:i}),v.jsx("p",{"code-path":"src/sections/Services.tsx:34:7",className:"text-text-secondary mb-6 leading-relaxed",children:s}),v.jsx("ul",{"code-path":"src/sections/Services.tsx:38:7",className:"space-y-3",children:r.map((d,f)=>v.jsxs("li",{"code-path":"src/sections/Services.tsx:40:11",className:"flex items-start gap-3",children:[v.jsx(bD,{"code-path":"src/sections/Services.tsx:41:13",className:"w-5 h-5 text-accent-gold flex-shrink-0 mt-0.5"}),v.jsx("span",{"code-path":"src/sections/Services.tsx:42:13",className:"text-text-secondary text-sm",children:d})]},f))})]}),Jz=()=>{const n=[{icon:v.jsx(fD,{"code-path":"src/sections/Services.tsx:53:13",className:"w-6 h-6"}),title:"Financial Advisory",description:"Expert guidance for complex financial challenges and strategic planning.",features:["CFO Advisory Services","Financial Planning & Analysis","Treasury Management","M&A Support"]},{icon:v.jsx(yD,{"code-path":"src/sections/Services.tsx:59:13",className:"w-6 h-6"}),title:"Data Analytics",description:"Transform data into actionable business intelligence and insights.",features:["Business Intelligence","Predictive Analytics","Data Visualization","Performance Metrics"]},{icon:v.jsx(uD,{"code-path":"src/sections/Services.tsx:65:13",className:"w-6 h-6"}),title:"Business Consulting",description:"Strategic consulting to drive operational excellence and growth.",features:["Process Optimization","Risk Management","Compliance Advisory","Strategic Planning"]},{icon:v.jsx(ZD,{"code-path":"src/sections/Services.tsx:71:13",className:"w-6 h-6"}),title:"Digital Transformation",description:"Modernize your operations for the digital age with cutting-edge solutions.",features:["ERP Implementation","Automation & RPA","Change Management","Technology Strategy"]},{icon:v.jsx(lD,{"code-path":"src/sections/Services.tsx:77:13",className:"w-6 h-6"}),title:"AI Services",description:"Leverage artificial intelligence to automate processes and gain competitive insights.",features:["AI Strategy & Roadmap","Machine Learning Implementation","Process Automation","Intelligent Analytics"]},{icon:v.jsx(iD,{"code-path":"src/sections/Services.tsx:83:13",className:"w-6 h-6"}),title:"Accounting Services",description:"Accurate, timely, and compliant financial reporting and bookkeeping.",features:["Bookkeeping","Financial Reporting","Audit Support","GAAP/IFRS Compliance"]}];return v.jsx("section",{"code-path":"src/sections/Services.tsx:91:5",id:"services",className:"py-24 bg-dark-blue",children:v.jsxs("div",{"code-path":"src/sections/Services.tsx:92:7",className:"max-w-[1200px] mx-auto px-4 sm:px-6 lg:px-8",children:[v.jsxs(ue.div,{"code-path":"src/sections/Services.tsx:94:9",initial:{opacity:0,y:30},whileInView:{opacity:1,y:0},viewport:{once:!0},transition:{duration:.6,ease:[.25,.46,.45,.94]},className:"text-center mb-16",children:[v.jsxs("div",{"code-path":"src/sections/Services.tsx:101:11",className:"flex items-center justify-center gap-2 mb-4",children:[v.jsx("span",{"code-path":"src/sections/Services.tsx:102:13",className:"w-8 h-[2px] bg-accent-gold"}),v.jsx("span",{"code-path":"src/sections/Services.tsx:103:13",className:"text-accent-gold text-sm font-medium tracking-wider uppercase",children:"What We Offer"}),v.jsx("span",{"code-path":"src/sections/Services.tsx:106:13",className:"w-8 h-[2px] bg-accent-gold"})]}),v.jsx("h2",{"code-path":"src/sections/Services.tsx:109:11",className:"text-3xl sm:text-4xl font-bold text-white mb-4",children:"Our Services"}),v.jsx("p",{"code-path":"src/sections/Services.tsx:113:11",className:"text-text-secondary text-lg max-w-2xl mx-auto",children:"Comprehensive solutions tailored to your business needs, delivered by experienced professionals with a track record of success."})]}),v.jsx("div",{"code-path":"src/sections/Services.tsx:120:9",className:"grid sm:grid-cols-2 lg:grid-cols-3 gap-6",children:n.map((i,s)=>v.jsx(Zz,{"code-path":"src/sections/Services.tsx:122:13",icon:i.icon,title:i.title,description:i.description,features:i.features,index:s},i.title))})]})})},$z=()=>{const[n,i]=w.useState(!1);return v.jsxs("section",{"code-path":"src/sections/VideoSection.tsx:9:5",className:"py-24 bg-dark-blue relative overflow-hidden",children:[v.jsx("div",{"code-path":"src/sections/VideoSection.tsx:11:7",className:"absolute top-0 right-0 w-96 h-96 bg-accent-gold/5 rounded-full blur-3xl"}),v.jsx("div",{"code-path":"src/sections/VideoSection.tsx:12:7",className:"absolute bottom-0 left-0 w-72 h-72 bg-accent-gold/3 rounded-full blur-3xl"}),v.jsxs("div",{"code-path":"src/sections/VideoSection.tsx:14:7",className:"max-w-[1200px] mx-auto px-4 sm:px-6 lg:px-8 relative z-10",children:[v.jsxs(ue.div,{"code-path":"src/sections/VideoSection.tsx:16:9",initial:{opacity:0,y:30},whileInView:{opacity:1,y:0},viewport:{once:!0},transition:{duration:.6,ease:[.25,.46,.45,.94]},className:"text-center mb-12",children:[v.jsxs("div",{"code-path":"src/sections/VideoSection.tsx:23:11",className:"flex items-center justify-center gap-2 mb-4",children:[v.jsx("span",{"code-path":"src/sections/VideoSection.tsx:24:13",className:"w-8 h-[2px] bg-accent-gold"}),v.jsx("span",{"code-path":"src/sections/VideoSection.tsx:25:13",className:"text-accent-gold text-sm font-medium tracking-wider uppercase",children:"Learn More"}),v.jsx("span",{"code-path":"src/sections/VideoSection.tsx:28:13",className:"w-8 h-[2px] bg-accent-gold"})]}),v.jsx("h2",{"code-path":"src/sections/VideoSection.tsx:31:11",className:"text-3xl sm:text-4xl font-bold text-white mb-4",children:"See How FACTS Can Transform Your Business"}),v.jsx("p",{"code-path":"src/sections/VideoSection.tsx:35:11",className:"text-text-secondary text-lg max-w-2xl mx-auto",children:"Watch our explainer video to understand how our comprehensive approach to finance, analytics, consulting, and transformation delivers results."})]}),v.jsxs(ue.div,{"code-path":"src/sections/VideoSection.tsx:42:9",initial:{opacity:0,scale:.95},whileInView:{opacity:1,scale:1},viewport:{once:!0},transition:{duration:.6,delay:.2,ease:[.25,.46,.45,.94]},className:"relative max-w-4xl mx-auto",children:[v.jsx("div",{"code-path":"src/sections/VideoSection.tsx:49:11",className:"relative rounded-2xl overflow-hidden shadow-2xl border border-accent-gold/20",children:n?v.jsxs("div",{"code-path":"src/sections/VideoSection.tsx:89:15",className:"relative aspect-video bg-navy",children:[v.jsx("iframe",{"code-path":"src/sections/VideoSection.tsx:91:17",width:"100%",height:"100%",src:"https://www.youtube.com/embed/VvI1cPaXksM?autoplay=1",title:"FACTS Consulting Explainer Video",frameBorder:"0",allow:"accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture",allowFullScreen:!0,className:"absolute inset-0"}),v.jsx("button",{"code-path":"src/sections/VideoSection.tsx:103:17",onClick:()=>i(!1),className:"absolute top-4 right-4 w-10 h-10 bg-dark-blue/80 rounded-full flex items-center justify-center text-white hover:bg-dark-blue transition-colors z-10",children:v.jsx(e0,{"code-path":"src/sections/VideoSection.tsx:107:19",className:"w-5 h-5"})})]}):v.jsxs("div",{"code-path":"src/sections/VideoSection.tsx:52:15",className:"relative aspect-video bg-navy",children:[v.jsx("img",{"code-path":"src/sections/VideoSection.tsx:54:17",src:"/images/analytics-visual.jpg",alt:"Video thumbnail",className:"w-full h-full object-cover opacity-60"}),v.jsx("div",{"code-path":"src/sections/VideoSection.tsx:61:17",className:"absolute inset-0 bg-gradient-to-t from-dark-blue/80 via-dark-blue/40 to-transparent"}),v.jsx("div",{"code-path":"src/sections/VideoSection.tsx:64:17",className:"absolute inset-0 flex items-center justify-center",children:v.jsx(ue.button,{"code-path":"src/sections/VideoSection.tsx:65:19",whileHover:{scale:1.1},whileTap:{scale:.95},onClick:()=>i(!0),className:"w-20 h-20 bg-accent-gold rounded-full flex items-center justify-center shadow-lg hover:shadow-accent-gold/30 transition-shadow duration-300",children:v.jsx(PD,{"code-path":"src/sections/VideoSection.tsx:71:21",className:"w-8 h-8 text-dark-blue ml-1",fill:"currentColor"})})}),v.jsxs("div",{"code-path":"src/sections/VideoSection.tsx:76:17",className:"absolute bottom-6 left-6 right-6",children:[v.jsxs("div",{"code-path":"src/sections/VideoSection.tsx:77:19",className:"flex items-center gap-3 mb-2",children:[v.jsx("span",{"code-path":"src/sections/VideoSection.tsx:78:21",className:"px-3 py-1 bg-accent-gold/20 rounded-full text-accent-gold text-xs font-medium",children:"Explainer Video"}),v.jsx("span",{"code-path":"src/sections/VideoSection.tsx:81:21",className:"text-text-secondary text-sm",children:"2:30 min"})]}),v.jsx("h3",{"code-path":"src/sections/VideoSection.tsx:83:19",className:"text-white text-xl font-semibold",children:"The FACTS Approach to Business Transformation"})]})]})}),v.jsx(ue.div,{"code-path":"src/sections/VideoSection.tsx:114:11",initial:{opacity:0,y:20},whileInView:{opacity:1,y:0},viewport:{once:!0},transition:{duration:.5,delay:.4},className:"grid sm:grid-cols-3 gap-6 mt-8",children:[{title:"Our Process",desc:"How we work with clients"},{title:"Success Stories",desc:"Real results from real businesses"},{title:"Get Started",desc:"Your journey with FACTS"}].map((s,r)=>v.jsxs("div",{"code-path":"src/sections/VideoSection.tsx:126:15",className:"bg-card-bg rounded-xl p-6 border border-accent-gold/10 text-center",children:[v.jsx("h4",{"code-path":"src/sections/VideoSection.tsx:130:17",className:"text-white font-semibold mb-1",children:s.title}),v.jsx("p",{"code-path":"src/sections/VideoSection.tsx:131:17",className:"text-text-secondary text-sm",children:s.desc})]},r))})]})]})]})},e3=({end:n,duration:i=2e3,start:s=0})=>{const[r,l]=w.useState(s),[d,f]=w.useState(!1),h=w.useRef(null),p=w.useRef(!1);return w.useEffect(()=>{const m=new IntersectionObserver(([y])=>{y.isIntersecting&&!p.current&&(f(!0),p.current=!0)},{threshold:.3});return h.current&&m.observe(h.current),()=>m.disconnect()},[]),w.useEffect(()=>{if(!d)return;let m,y;const b=S=>{m||(m=S);const C=Math.min((S-m)/i,1),R=1-Math.pow(1-C,3),A=Math.floor(s+(n-s)*R);l(A),C<1&&(y=requestAnimationFrame(b))};return y=requestAnimationFrame(b),()=>cancelAnimationFrame(y)},[d,n,i,s]),{count:r,ref:h}},t3=({value:n,suffix:i="",label:s})=>{const{count:r,ref:l}=e3({end:n,duration:2e3});return v.jsxs("div",{"code-path":"src/components/StatCounter.tsx:13:5",ref:l,className:"text-center",children:[v.jsxs("div",{"code-path":"src/components/StatCounter.tsx:14:7",className:"text-4xl sm:text-5xl font-bold text-accent-gold mb-2",children:[r,i]}),v.jsx("div",{"code-path":"src/components/StatCounter.tsx:18:7",className:"text-text-secondary text-sm",children:s})]})},n3=()=>{const n=[{icon:v.jsx(nD,{"code-path":"src/sections/WhyChooseUs.tsx:8:13",className:"w-5 h-5"}),text:"Industry-specialized knowledge"},{icon:v.jsx($x,{"code-path":"src/sections/WhyChooseUs.tsx:12:13",className:"w-5 h-5"}),text:"People-first approach"},{icon:v.jsx(GD,{"code-path":"src/sections/WhyChooseUs.tsx:16:13",className:"w-5 h-5"}),text:"Outcome-driven solutions"},{icon:v.jsx(Jx,{"code-path":"src/sections/WhyChooseUs.tsx:20:13",className:"w-5 h-5"}),text:"Proven track record"}],i=[{value:150,suffix:"+",label:"Clients Served"},{value:500,suffix:"+",label:"Projects Completed"},{value:25,suffix:"+",label:"Years Experience"},{value:98,suffix:"%",label:"Client Satisfaction"}];return v.jsx("section",{"code-path":"src/sections/WhyChooseUs.tsx:33:5",id:"about",className:"py-24 bg-navy",children:v.jsxs("div",{"code-path":"src/sections/WhyChooseUs.tsx:34:7",className:"max-w-[1200px] mx-auto px-4 sm:px-6 lg:px-8",children:[v.jsxs("div",{"code-path":"src/sections/WhyChooseUs.tsx:36:9",className:"grid lg:grid-cols-2 gap-8 mb-16",children:[v.jsx(ue.div,{"code-path":"src/sections/WhyChooseUs.tsx:38:11",initial:{opacity:0,x:-30},whileInView:{opacity:1,x:0},viewport:{once:!0},transition:{duration:.6,ease:[.25,.46,.45,.94]},className:"relative",children:v.jsxs("div",{"code-path":"src/sections/WhyChooseUs.tsx:45:13",className:"relative rounded-2xl overflow-hidden shadow-card",children:[v.jsx("img",{"code-path":"src/sections/WhyChooseUs.tsx:46:15",src:"/images/team-meeting.jpg",alt:"FACTS Consulting Team",className:"w-full h-64 object-cover"}),v.jsx("div",{"code-path":"src/sections/WhyChooseUs.tsx:51:15",className:"absolute inset-0 bg-gradient-to-t from-dark-blue/60 to-transparent"}),v.jsxs("div",{"code-path":"src/sections/WhyChooseUs.tsx:52:15",className:"absolute bottom-4 left-4",children:[v.jsx("span",{"code-path":"src/sections/WhyChooseUs.tsx:53:17",className:"px-3 py-1 bg-accent-gold/20 rounded-full text-accent-gold text-xs font-medium",children:"Our Team"}),v.jsx("p",{"code-path":"src/sections/WhyChooseUs.tsx:56:17",className:"text-white text-sm mt-1",children:"Expert consultants at work"})]})]})}),v.jsx(ue.div,{"code-path":"src/sections/WhyChooseUs.tsx:62:11",initial:{opacity:0,x:30},whileInView:{opacity:1,x:0},viewport:{once:!0},transition:{duration:.6,ease:[.25,.46,.45,.94]},className:"relative",children:v.jsxs("div",{"code-path":"src/sections/WhyChooseUs.tsx:69:13",className:"relative rounded-2xl overflow-hidden shadow-card",children:[v.jsx("img",{"code-path":"src/sections/WhyChooseUs.tsx:70:15",src:"/images/partnership.jpg",alt:"Business Partnership",className:"w-full h-64 object-cover"}),v.jsx("div",{"code-path":"src/sections/WhyChooseUs.tsx:75:15",className:"absolute inset-0 bg-gradient-to-t from-dark-blue/60 to-transparent"}),v.jsxs("div",{"code-path":"src/sections/WhyChooseUs.tsx:76:15",className:"absolute bottom-4 left-4",children:[v.jsx("span",{"code-path":"src/sections/WhyChooseUs.tsx:77:17",className:"px-3 py-1 bg-accent-gold/20 rounded-full text-accent-gold text-xs font-medium",children:"Partnership"}),v.jsx("p",{"code-path":"src/sections/WhyChooseUs.tsx:80:17",className:"text-white text-sm mt-1",children:"Building lasting relationships"})]})]})})]}),v.jsxs("div",{"code-path":"src/sections/WhyChooseUs.tsx:87:9",className:"grid lg:grid-cols-2 gap-16 items-center",children:[v.jsxs(ue.div,{"code-path":"src/sections/WhyChooseUs.tsx:89:11",initial:{opacity:0,y:30},whileInView:{opacity:1,y:0},viewport:{once:!0},transition:{duration:.6,ease:[.25,.46,.45,.94]},children:[v.jsxs("div",{"code-path":"src/sections/WhyChooseUs.tsx:95:13",className:"flex items-center gap-2 mb-4",children:[v.jsx("span",{"code-path":"src/sections/WhyChooseUs.tsx:96:15",className:"w-8 h-[2px] bg-accent-gold"}),v.jsx("span",{"code-path":"src/sections/WhyChooseUs.tsx:97:15",className:"text-accent-gold text-sm font-medium tracking-wider uppercase",children:"Why FACTS"})]}),v.jsx("h2",{"code-path":"src/sections/WhyChooseUs.tsx:102:13",className:"text-3xl sm:text-4xl font-bold text-white mb-6",children:"Why Choose FACTS?"}),v.jsx("p",{"code-path":"src/sections/WhyChooseUs.tsx:106:13",className:"text-text-secondary text-lg leading-relaxed mb-8",children:"We combine deep industry expertise with innovative approaches to deliver measurable results. Our team of seasoned professionals brings decades of experience across finance, analytics, and transformation."}),v.jsx("div",{"code-path":"src/sections/WhyChooseUs.tsx:112:13",className:"space-y-4",children:n.map((s,r)=>v.jsxs(ue.div,{"code-path":"src/sections/WhyChooseUs.tsx:114:17",initial:{opacity:0,x:-20},whileInView:{opacity:1,x:0},viewport:{once:!0},transition:{duration:.4,delay:r*.1,ease:[.25,.46,.45,.94]},className:"flex items-center gap-4",children:[v.jsx("div",{"code-path":"src/sections/WhyChooseUs.tsx:126:19",className:"w-10 h-10 bg-accent-gold/10 rounded-lg flex items-center justify-center flex-shrink-0",children:v.jsx("div",{"code-path":"src/sections/WhyChooseUs.tsx:127:21",className:"text-accent-gold",children:s.icon})}),v.jsx("span",{"code-path":"src/sections/WhyChooseUs.tsx:129:19",className:"text-white font-medium",children:s.text})]},r))})]}),v.jsx(ue.div,{"code-path":"src/sections/WhyChooseUs.tsx:136:11",initial:{opacity:0,y:30},whileInView:{opacity:1,y:0},viewport:{once:!0},transition:{duration:.6,ease:[.25,.46,.45,.94]},className:"grid grid-cols-2 gap-6",children:i.map((s,r)=>v.jsx(ue.div,{"code-path":"src/sections/WhyChooseUs.tsx:144:15",initial:{opacity:0,y:20},whileInView:{opacity:1,y:0},viewport:{once:!0},transition:{duration:.5,delay:r*.1,ease:[.25,.46,.45,.94]},className:"bg-card-bg rounded-2xl p-6 border border-accent-gold/10 text-center",children:v.jsx(t3,{"code-path":"src/sections/WhyChooseUs.tsx:156:17",value:s.value,suffix:s.suffix,label:s.label})},s.label))})]})]})})},a3=({quote:n,author:i,role:s,index:r})=>v.jsxs(ue.div,{"code-path":"src/sections/Testimonials.tsx:13:5",initial:{opacity:0,y:30},whileInView:{opacity:1,y:0},viewport:{once:!0,margin:"-50px"},transition:{duration:.6,delay:r*.15,ease:[.25,.46,.45,.94]},whileHover:{y:-4},className:"bg-white rounded-2xl p-8 shadow-card hover:shadow-card-hover transition-all duration-300 will-change-transform",children:[v.jsx("div",{"code-path":"src/sections/Testimonials.tsx:25:7",className:"w-12 h-12 bg-accent-gold/10 rounded-xl flex items-center justify-center mb-6",children:v.jsx(_D,{"code-path":"src/sections/Testimonials.tsx:26:9",className:"w-6 h-6 text-accent-gold"})}),v.jsxs("p",{"code-path":"src/sections/Testimonials.tsx:29:7",className:"text-gray-700 leading-relaxed mb-6 text-lg",children:['"',n,'"']}),v.jsxs("div",{"code-path":"src/sections/Testimonials.tsx:33:7",className:"flex items-center gap-4",children:[v.jsx("div",{"code-path":"src/sections/Testimonials.tsx:34:9",className:"w-12 h-12 bg-dark-blue rounded-full flex items-center justify-center",children:v.jsx("span",{"code-path":"src/sections/Testimonials.tsx:35:11",className:"text-accent-gold font-semibold text-lg",children:i.split(" ").map(l=>l[0]).join("")})}),v.jsxs("div",{"code-path":"src/sections/Testimonials.tsx:39:9",children:[v.jsx("div",{"code-path":"src/sections/Testimonials.tsx:40:11",className:"font-semibold text-dark-blue",children:i}),v.jsx("div",{"code-path":"src/sections/Testimonials.tsx:41:11",className:"text-gray-500 text-sm",children:s})]})]})]}),i3=()=>{const n=[{quote:"FACTS transformed our financial operations, reducing month-end close time by 60% and improving reporting accuracy dramatically.",author:"Sarah Mitchell",role:"CFO, TechVentures Inc."},{quote:"Their analytics expertise helped us uncover insights that drove a 25% increase in operational efficiency.",author:"Michael Chen",role:"COO, Global Manufacturing Co."},{quote:"The team's strategic guidance was instrumental in our successful acquisition and integration process.",author:"Jennifer Rodriguez",role:"CEO, Healthcare Solutions Group"}];return v.jsx("section",{"code-path":"src/sections/Testimonials.tsx:71:5",className:"py-24 bg-light-bg",children:v.jsxs("div",{"code-path":"src/sections/Testimonials.tsx:72:7",className:"max-w-[1200px] mx-auto px-4 sm:px-6 lg:px-8",children:[v.jsxs(ue.div,{"code-path":"src/sections/Testimonials.tsx:74:9",initial:{opacity:0,y:30},whileInView:{opacity:1,y:0},viewport:{once:!0},transition:{duration:.6,ease:[.25,.46,.45,.94]},className:"text-center mb-16",children:[v.jsxs("div",{"code-path":"src/sections/Testimonials.tsx:81:11",className:"flex items-center justify-center gap-2 mb-4",children:[v.jsx("span",{"code-path":"src/sections/Testimonials.tsx:82:13",className:"w-8 h-[2px] bg-accent-gold"}),v.jsx("span",{"code-path":"src/sections/Testimonials.tsx:83:13",className:"text-accent-gold text-sm font-medium tracking-wider uppercase",children:"Testimonials"}),v.jsx("span",{"code-path":"src/sections/Testimonials.tsx:86:13",className:"w-8 h-[2px] bg-accent-gold"})]}),v.jsx("h2",{"code-path":"src/sections/Testimonials.tsx:89:11",className:"text-3xl sm:text-4xl font-bold text-dark-blue mb-4",children:"What Our Clients Say"}),v.jsx("p",{"code-path":"src/sections/Testimonials.tsx:93:11",className:"text-gray-600 text-lg max-w-2xl mx-auto",children:"Trusted by businesses across industries to deliver results that matter."})]}),v.jsx("div",{"code-path":"src/sections/Testimonials.tsx:99:9",className:"grid md:grid-cols-2 lg:grid-cols-3 gap-6",children:n.map((i,s)=>v.jsx(a3,{"code-path":"src/sections/Testimonials.tsx:101:13",quote:i.quote,author:i.author,role:i.role,index:s},i.author))})]})})},Fv=({post:n,index:i,featured:s=!1})=>{const r=l=>new Date(l).toLocaleDateString("en-US",{month:"short",day:"numeric",year:"numeric"});return s?v.jsx(ue.article,{"code-path":"src/components/BlogCard.tsx:24:7",initial:{opacity:0,y:30},whileInView:{opacity:1,y:0},viewport:{once:!0},transition:{duration:.6,delay:i*.1,ease:[.25,.46,.45,.94]},className:"group bg-white rounded-2xl overflow-hidden shadow-card hover:shadow-card-hover transition-all duration-300 will-change-transform",children:v.jsx(ha,{"code-path":"src/components/BlogCard.tsx:35:9",to:`/blog/${n.slug}`,className:"block",children:v.jsxs("div",{"code-path":"src/components/BlogCard.tsx:36:11",className:"grid md:grid-cols-2",children:[v.jsxs("div",{"code-path":"src/components/BlogCard.tsx:37:13",className:"relative h-64 md:h-full overflow-hidden",children:[v.jsx("img",{"code-path":"src/components/BlogCard.tsx:38:15",src:n.image,alt:n.title,className:"w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"}),v.jsx("div",{"code-path":"src/components/BlogCard.tsx:43:15",className:"absolute top-4 left-4",children:v.jsx("span",{"code-path":"src/components/BlogCard.tsx:44:17",className:"px-3 py-1 bg-accent-gold text-dark-blue text-xs font-semibold rounded-full",children:n.category})})]}),v.jsxs("div",{"code-path":"src/components/BlogCard.tsx:49:13",className:"p-8 flex flex-col justify-center",children:[v.jsxs("div",{"code-path":"src/components/BlogCard.tsx:50:15",className:"flex items-center gap-4 text-sm text-gray-500 mb-4",children:[v.jsxs("span",{"code-path":"src/components/BlogCard.tsx:51:17",className:"flex items-center gap-1",children:[v.jsx(cl,{"code-path":"src/components/BlogCard.tsx:52:19",className:"w-4 h-4"}),r(n.date)]}),v.jsxs("span",{"code-path":"src/components/BlogCard.tsx:55:17",className:"flex items-center gap-1",children:[v.jsx(Xd,{"code-path":"src/components/BlogCard.tsx:56:19",className:"w-4 h-4"}),n.readTime]})]}),v.jsx("h3",{"code-path":"src/components/BlogCard.tsx:60:15",className:"text-2xl font-bold text-dark-blue mb-3 group-hover:text-accent-gold transition-colors duration-200",children:n.title}),v.jsx("p",{"code-path":"src/components/BlogCard.tsx:63:15",className:"text-gray-600 mb-6 line-clamp-3",children:n.excerpt}),v.jsxs("div",{"code-path":"src/components/BlogCard.tsx:66:15",className:"flex items-center justify-between mt-auto",children:[v.jsxs("span",{"code-path":"src/components/BlogCard.tsx:67:17",className:"flex items-center gap-2 text-sm text-gray-500",children:[v.jsx(Wd,{"code-path":"src/components/BlogCard.tsx:68:19",className:"w-4 h-4"}),n.author]}),v.jsxs("span",{"code-path":"src/components/BlogCard.tsx:71:17",className:"flex items-center gap-2 text-accent-gold font-semibold group/btn",children:["Read More",v.jsx(io,{"code-path":"src/components/BlogCard.tsx:73:19",className:"w-4 h-4 group-hover/btn:translate-x-1 transition-transform"})]})]})]})]})})}):v.jsx(ue.article,{"code-path":"src/components/BlogCard.tsx:84:5",initial:{opacity:0,y:30},whileInView:{opacity:1,y:0},viewport:{once:!0},transition:{duration:.6,delay:i*.1,ease:[.25,.46,.45,.94]},whileHover:{y:-4},className:"group bg-white rounded-2xl overflow-hidden shadow-card hover:shadow-card-hover transition-all duration-300 will-change-transform",children:v.jsxs(ha,{"code-path":"src/components/BlogCard.tsx:96:7",to:`/blog/${n.slug}`,className:"block",children:[v.jsxs("div",{"code-path":"src/components/BlogCard.tsx:97:9",className:"relative h-48 overflow-hidden",children:[v.jsx("img",{"code-path":"src/components/BlogCard.tsx:98:11",src:n.image,alt:n.title,className:"w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"}),v.jsx("div",{"code-path":"src/components/BlogCard.tsx:103:11",className:"absolute top-4 left-4",children:v.jsx("span",{"code-path":"src/components/BlogCard.tsx:104:13",className:"px-3 py-1 bg-accent-gold text-dark-blue text-xs font-semibold rounded-full",children:n.category})})]}),v.jsxs("div",{"code-path":"src/components/BlogCard.tsx:109:9",className:"p-6",children:[v.jsxs("div",{"code-path":"src/components/BlogCard.tsx:110:11",className:"flex items-center gap-4 text-sm text-gray-500 mb-3",children:[v.jsxs("span",{"code-path":"src/components/BlogCard.tsx:111:13",className:"flex items-center gap-1",children:[v.jsx(cl,{"code-path":"src/components/BlogCard.tsx:112:15",className:"w-4 h-4"}),r(n.date)]}),v.jsxs("span",{"code-path":"src/components/BlogCard.tsx:115:13",className:"flex items-center gap-1",children:[v.jsx(Xd,{"code-path":"src/components/BlogCard.tsx:116:15",className:"w-4 h-4"}),n.readTime]})]}),v.jsx("h3",{"code-path":"src/components/BlogCard.tsx:120:11",className:"text-lg font-bold text-dark-blue mb-2 group-hover:text-accent-gold transition-colors duration-200 line-clamp-2",children:n.title}),v.jsx("p",{"code-path":"src/components/BlogCard.tsx:123:11",className:"text-gray-600 text-sm mb-4 line-clamp-2",children:n.excerpt}),v.jsxs("div",{"code-path":"src/components/BlogCard.tsx:126:11",className:"flex items-center justify-between",children:[v.jsxs("span",{"code-path":"src/components/BlogCard.tsx:127:13",className:"flex items-center gap-1 text-xs text-gray-500",children:[v.jsx(Wd,{"code-path":"src/components/BlogCard.tsx:128:15",className:"w-3 h-3"}),n.author]}),v.jsxs("span",{"code-path":"src/components/BlogCard.tsx:131:13",className:"flex items-center gap-1 text-accent-gold text-sm font-semibold group/btn",children:["Read",v.jsx(io,{"code-path":"src/components/BlogCard.tsx:133:15",className:"w-3 h-3 group-hover/btn:translate-x-1 transition-transform"})]})]})]})]})})},hl=[{id:"1",title:"Navigating the Post-Financial Crisis Landscape: A CFO's Guide",excerpt:"Key strategies for financial recovery and building resilient financial operations in the aftermath of the 2008 crisis.",content:`The global financial crisis of 2008 fundamentally changed how businesses approach financial management. As we move through 2010, CFOs face a landscape marked by increased regulatory scrutiny, tighter credit markets, and stakeholders demanding greater transparency. This article explores the essential strategies for navigating this new environment.

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

The key is to approach AI not as a technology to be adopted, but as a capability to be developed—one that requires ongoing investment, learning, and adaptation.`,author:"Dr. Catherine Lee, AI Futurist",date:"2026-01-20",category:"AI",image:"/images/hero-visual.jpg",readTime:"8 min",slug:"future-of-ai-trends"}],s3=n=>hl.find(i=>i.slug===n),o3=n=>hl.filter(i=>i.category===n),r3=()=>["Finance","Analytics","Consulting","Transformation","AI"],l3=()=>{const[n,i]=w.useState(null),[s,r]=w.useState(null),l=r3(),d=w.useMemo(()=>{const y=new Set(hl.map(b=>new Date(b.date).getFullYear()));return Array.from(y).sort((b,S)=>S-b)},[]),f=w.useMemo(()=>{let y=[...hl];return n&&(y=y.filter(b=>b.category===n)),s&&(y=y.filter(b=>new Date(b.date).getFullYear()===s)),y},[n,s]),h=f[0],p=f.slice(1,4),m=y=>new Date(y).toLocaleDateString("en-US",{month:"short",day:"numeric",year:"numeric"});return v.jsx("section",{"code-path":"src/sections/Blog.tsx:43:5",id:"blog",className:"py-24 bg-light-bg",children:v.jsxs("div",{"code-path":"src/sections/Blog.tsx:44:7",className:"max-w-[1200px] mx-auto px-4 sm:px-6 lg:px-8",children:[v.jsxs(ue.div,{"code-path":"src/sections/Blog.tsx:46:9",initial:{opacity:0,y:30},whileInView:{opacity:1,y:0},viewport:{once:!0},transition:{duration:.6,ease:[.25,.46,.45,.94]},className:"text-center mb-12",children:[v.jsxs("div",{"code-path":"src/sections/Blog.tsx:53:11",className:"flex items-center justify-center gap-2 mb-4",children:[v.jsx("span",{"code-path":"src/sections/Blog.tsx:54:13",className:"w-8 h-[2px] bg-accent-gold"}),v.jsx("span",{"code-path":"src/sections/Blog.tsx:55:13",className:"text-accent-gold text-sm font-medium tracking-wider uppercase",children:"Insights & Resources"}),v.jsx("span",{"code-path":"src/sections/Blog.tsx:58:13",className:"w-8 h-[2px] bg-accent-gold"})]}),v.jsx("h2",{"code-path":"src/sections/Blog.tsx:61:11",className:"text-3xl sm:text-4xl font-bold text-dark-blue mb-4",children:"Latest from Our Blog"}),v.jsx("p",{"code-path":"src/sections/Blog.tsx:65:11",className:"text-gray-600 text-lg max-w-2xl mx-auto",children:"Expert insights, industry trends, and practical advice to help your business thrive."})]}),v.jsxs(ue.div,{"code-path":"src/sections/Blog.tsx:71:9",initial:{opacity:0,y:20},whileInView:{opacity:1,y:0},viewport:{once:!0},transition:{duration:.5,delay:.2},className:"mb-12",children:[v.jsxs("div",{"code-path":"src/sections/Blog.tsx:78:11",className:"flex items-center gap-2 mb-4 text-dark-blue",children:[v.jsx(ED,{"code-path":"src/sections/Blog.tsx:79:13",className:"w-5 h-5"}),v.jsx("span",{"code-path":"src/sections/Blog.tsx:80:13",className:"font-semibold",children:"Filter Articles"})]}),v.jsxs("div",{"code-path":"src/sections/Blog.tsx:84:11",className:"mb-6",children:[v.jsxs("div",{"code-path":"src/sections/Blog.tsx:85:13",className:"flex items-center gap-2 mb-3 text-gray-600",children:[v.jsx(CD,{"code-path":"src/sections/Blog.tsx:86:15",className:"w-4 h-4"}),v.jsx("span",{"code-path":"src/sections/Blog.tsx:87:15",className:"text-sm font-medium",children:"By Service Category"})]}),v.jsxs("div",{"code-path":"src/sections/Blog.tsx:89:13",className:"flex flex-wrap gap-2",children:[v.jsx("button",{"code-path":"src/sections/Blog.tsx:90:15",onClick:()=>i(null),className:`px-4 py-2 rounded-full text-sm font-medium transition-all duration-200 ${n===null?"bg-accent-gold text-dark-blue":"bg-white border border-gray-200 text-gray-600 hover:border-accent-gold hover:text-accent-gold"}`,children:"All Categories"}),l.map(y=>v.jsx("button",{"code-path":"src/sections/Blog.tsx:101:17",onClick:()=>i(y),className:`px-4 py-2 rounded-full text-sm font-medium transition-all duration-200 ${n===y?"bg-accent-gold text-dark-blue":"bg-white border border-gray-200 text-gray-600 hover:border-accent-gold hover:text-accent-gold"}`,children:y},y))]})]}),v.jsxs("div",{"code-path":"src/sections/Blog.tsx:117:11",children:[v.jsxs("div",{"code-path":"src/sections/Blog.tsx:118:13",className:"flex items-center gap-2 mb-3 text-gray-600",children:[v.jsx(cl,{"code-path":"src/sections/Blog.tsx:119:15",className:"w-4 h-4"}),v.jsx("span",{"code-path":"src/sections/Blog.tsx:120:15",className:"text-sm font-medium",children:"By Year"})]}),v.jsxs("div",{"code-path":"src/sections/Blog.tsx:122:13",className:"flex flex-wrap gap-2",children:[v.jsx("button",{"code-path":"src/sections/Blog.tsx:123:15",onClick:()=>r(null),className:`px-4 py-2 rounded-full text-sm font-medium transition-all duration-200 ${s===null?"bg-accent-gold text-dark-blue":"bg-white border border-gray-200 text-gray-600 hover:border-accent-gold hover:text-accent-gold"}`,children:"All Years"}),d.map(y=>v.jsx("button",{"code-path":"src/sections/Blog.tsx:134:17",onClick:()=>r(y),className:`px-4 py-2 rounded-full text-sm font-medium transition-all duration-200 ${s===y?"bg-accent-gold text-dark-blue":"bg-white border border-gray-200 text-gray-600 hover:border-accent-gold hover:text-accent-gold"}`,children:y},y))]})]}),v.jsxs("div",{"code-path":"src/sections/Blog.tsx:150:11",className:"mt-4 text-gray-500 text-sm",children:["Showing ",f.length," article",f.length!==1?"s":"",n&&` in ${n}`,s&&` from ${s}`]})]}),h&&v.jsx("div",{"code-path":"src/sections/Blog.tsx:159:11",className:"mb-8",children:v.jsx(Fv,{"code-path":"src/sections/Blog.tsx:160:13",post:h,index:0,featured:!0})}),p.length>0&&v.jsx("div",{"code-path":"src/sections/Blog.tsx:166:11",className:"grid md:grid-cols-3 gap-6 mb-12",children:p.map((y,b)=>v.jsx(Fv,{"code-path":"src/sections/Blog.tsx:168:15",post:y,index:b+1},y.id))}),f.length>4&&v.jsxs(ue.div,{"code-path":"src/sections/Blog.tsx:175:11",initial:{opacity:0,y:20},whileInView:{opacity:1,y:0},viewport:{once:!0},transition:{duration:.5,delay:.3},className:"mt-12",children:[v.jsx("h3",{"code-path":"src/sections/Blog.tsx:182:13",className:"text-xl font-bold text-dark-blue mb-6",children:"More Articles"}),v.jsx("div",{"code-path":"src/sections/Blog.tsx:185:13",className:"space-y-4",children:f.slice(4).map((y,b)=>v.jsx(ue.article,{"code-path":"src/sections/Blog.tsx:187:17",initial:{opacity:0,y:20},whileInView:{opacity:1,y:0},viewport:{once:!0},transition:{duration:.4,delay:b*.05},className:"bg-white rounded-xl p-6 shadow-card hover:shadow-card-hover transition-all duration-300",children:v.jsx(ha,{"code-path":"src/sections/Blog.tsx:195:19",to:`/blog/${y.slug}`,className:"block",children:v.jsxs("div",{"code-path":"src/sections/Blog.tsx:196:21",className:"flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4",children:[v.jsxs("div",{"code-path":"src/sections/Blog.tsx:197:23",className:"flex-1",children:[v.jsxs("div",{"code-path":"src/sections/Blog.tsx:198:25",className:"flex items-center gap-3 mb-2",children:[v.jsx("span",{"code-path":"src/sections/Blog.tsx:199:27",className:"px-3 py-1 bg-accent-gold/10 text-accent-gold text-xs font-semibold rounded-full",children:y.category}),v.jsx("span",{"code-path":"src/sections/Blog.tsx:202:27",className:"text-gray-400 text-sm",children:m(y.date)}),v.jsx("span",{"code-path":"src/sections/Blog.tsx:203:27",className:"text-gray-400 text-sm",children:y.readTime})]}),v.jsx("h4",{"code-path":"src/sections/Blog.tsx:205:25",className:"text-lg font-semibold text-dark-blue group-hover:text-accent-gold transition-colors",children:y.title}),v.jsx("p",{"code-path":"src/sections/Blog.tsx:208:25",className:"text-gray-600 text-sm mt-1 line-clamp-2",children:y.excerpt})]}),v.jsxs("span",{"code-path":"src/sections/Blog.tsx:212:23",className:"inline-flex items-center gap-1 px-4 py-2 border border-accent-gold text-accent-gold text-sm font-medium rounded-lg hover:bg-accent-gold hover:text-dark-blue transition-colors shrink-0",children:["Read",v.jsx(io,{"code-path":"src/sections/Blog.tsx:214:25",className:"ml-1 h-4 w-4"})]})]})})},y.id))})]}),f.length===0&&v.jsxs("div",{"code-path":"src/sections/Blog.tsx:226:11",className:"text-center py-12",children:[v.jsx("p",{"code-path":"src/sections/Blog.tsx:227:13",className:"text-gray-500 text-lg",children:"No articles found for the selected filters."}),v.jsx(cn,{"code-path":"src/sections/Blog.tsx:230:13",onClick:()=>{i(null),r(null)},variant:"outline",className:"mt-4 border-accent-gold text-accent-gold hover:bg-accent-gold hover:text-dark-blue",children:"Clear Filters"})]})]})})},c3=()=>v.jsxs("section",{"code-path":"src/sections/CTA.tsx:7:5",id:"contact",className:"py-24 relative overflow-hidden",children:[v.jsx("div",{"code-path":"src/sections/CTA.tsx:12:7",className:"absolute inset-0 bg-gradient-to-br from-dark-blue via-navy to-dark-blue"}),v.jsx("div",{"code-path":"src/sections/CTA.tsx:15:7",className:"absolute top-0 left-1/4 w-96 h-96 bg-accent-gold/5 rounded-full blur-3xl"}),v.jsx("div",{"code-path":"src/sections/CTA.tsx:16:7",className:"absolute bottom-0 right-1/4 w-72 h-72 bg-accent-gold/3 rounded-full blur-3xl"}),v.jsx("div",{"code-path":"src/sections/CTA.tsx:18:7",className:"relative z-10 max-w-[1200px] mx-auto px-4 sm:px-6 lg:px-8",children:v.jsxs(ue.div,{"code-path":"src/sections/CTA.tsx:19:9",initial:{opacity:0,y:30},whileInView:{opacity:1,y:0},viewport:{once:!0},transition:{duration:.6,ease:[.25,.46,.45,.94]},className:"text-center max-w-3xl mx-auto",children:[v.jsxs("div",{"code-path":"src/sections/CTA.tsx:26:11",className:"flex items-center justify-center gap-2 mb-4",children:[v.jsx("span",{"code-path":"src/sections/CTA.tsx:27:13",className:"w-8 h-[2px] bg-accent-gold"}),v.jsx("span",{"code-path":"src/sections/CTA.tsx:28:13",className:"text-accent-gold text-sm font-medium tracking-wider uppercase",children:"Get Started"}),v.jsx("span",{"code-path":"src/sections/CTA.tsx:31:13",className:"w-8 h-[2px] bg-accent-gold"})]}),v.jsx("h2",{"code-path":"src/sections/CTA.tsx:34:11",className:"text-3xl sm:text-4xl lg:text-5xl font-bold text-white mb-6",children:"Ready to Transform Your Business?"}),v.jsx("p",{"code-path":"src/sections/CTA.tsx:38:11",className:"text-text-secondary text-lg mb-10 leading-relaxed",children:"Let's discuss how FACTS can help you achieve your goals. Schedule a consultation with our team of experts and discover the difference strategic consulting can make."}),v.jsxs("div",{"code-path":"src/sections/CTA.tsx:44:11",className:"flex flex-wrap justify-center gap-4",children:[v.jsxs(cn,{"code-path":"src/sections/CTA.tsx:45:13",onClick:()=>window.open("https://calendly.com/bobkatz","_blank"),className:"bg-accent-gold text-dark-blue hover:bg-accent-gold-hover font-semibold px-8 py-6 text-base animate-pulse-glow",children:["Schedule a Consultation",v.jsx(io,{"code-path":"src/sections/CTA.tsx:50:15",className:"ml-2 h-5 w-5"})]}),v.jsxs(cn,{"code-path":"src/sections/CTA.tsx:52:13",onClick:()=>window.location.href="mailto:info@factsconsulting.com",variant:"outline",className:"border-2 border-accent-gold text-accent-gold hover:bg-accent-gold/10 font-semibold px-8 py-6 text-base",children:[v.jsx(Zx,{"code-path":"src/sections/CTA.tsx:57:15",className:"mr-2 h-5 w-5"}),"Contact Us"]})]})]})})]}),ef=()=>{const n=r=>{const l=document.querySelector(r);l&&l.scrollIntoView({behavior:"smooth"})},i=[{name:"Home",href:"#home"},{name:"About Us",href:"#about"},{name:"Services",href:"#services"},{name:"Contact",href:"#contact"}],s=["Financial Advisory","Data Analytics","Business Consulting","Digital Transformation"];return v.jsxs("footer",{"code-path":"src/sections/Footer.tsx:27:5",className:"bg-dark-blue border-t border-accent-gold/10",children:[v.jsx("div",{"code-path":"src/sections/Footer.tsx:28:7",className:"max-w-[1200px] mx-auto px-4 sm:px-6 lg:px-8 py-16",children:v.jsxs("div",{"code-path":"src/sections/Footer.tsx:29:9",className:"grid sm:grid-cols-2 lg:grid-cols-4 gap-10",children:[v.jsxs(ue.div,{"code-path":"src/sections/Footer.tsx:31:11",initial:{opacity:0,y:20},whileInView:{opacity:1,y:0},viewport:{once:!0},transition:{duration:.5},className:"lg:col-span-1",children:[v.jsx("a",{"code-path":"src/sections/Footer.tsx:38:13",href:"#home",onClick:r=>{r.preventDefault(),n("#home")},className:"flex items-center gap-4 mb-4",children:v.jsx("img",{"code-path":"src/sections/Footer.tsx:39:15",src:"/images/facts-logo-inverted.png",alt:"FACTS",className:"h-48 w-auto"})}),v.jsx("p",{"code-path":"src/sections/Footer.tsx:45:13",className:"text-text-secondary text-sm mb-2",children:"Finance | Analytics | Consulting | Transformation Services"}),v.jsx("p",{"code-path":"src/sections/Footer.tsx:48:13",className:"text-text-secondary text-sm leading-relaxed",children:"Strategic consulting partner for financial transformation and business growth."})]}),v.jsxs(ue.div,{"code-path":"src/sections/Footer.tsx:54:11",initial:{opacity:0,y:20},whileInView:{opacity:1,y:0},viewport:{once:!0},transition:{duration:.5,delay:.1},children:[v.jsx("h4",{"code-path":"src/sections/Footer.tsx:60:13",className:"text-white font-semibold mb-4",children:"Quick Links"}),v.jsx("ul",{"code-path":"src/sections/Footer.tsx:61:13",className:"space-y-3",children:i.map(r=>v.jsx("li",{"code-path":"src/sections/Footer.tsx:63:17",children:v.jsx("a",{"code-path":"src/sections/Footer.tsx:64:19",href:r.href,onClick:l=>{l.preventDefault(),n(r.href)},className:"text-text-secondary hover:text-accent-gold transition-colors duration-200 text-sm",children:r.name})},r.name))})]}),v.jsxs(ue.div,{"code-path":"src/sections/Footer.tsx:77:11",initial:{opacity:0,y:20},whileInView:{opacity:1,y:0},viewport:{once:!0},transition:{duration:.5,delay:.2},children:[v.jsx("h4",{"code-path":"src/sections/Footer.tsx:83:13",className:"text-white font-semibold mb-4",children:"Services"}),v.jsx("ul",{"code-path":"src/sections/Footer.tsx:84:13",className:"space-y-3",children:s.map(r=>v.jsx("li",{"code-path":"src/sections/Footer.tsx:86:17",children:v.jsx("span",{"code-path":"src/sections/Footer.tsx:87:19",className:"text-text-secondary text-sm",children:r})},r))})]}),v.jsxs(ue.div,{"code-path":"src/sections/Footer.tsx:94:11",initial:{opacity:0,y:20},whileInView:{opacity:1,y:0},viewport:{once:!0},transition:{duration:.5,delay:.3},children:[v.jsx("h4",{"code-path":"src/sections/Footer.tsx:100:13",className:"text-white font-semibold mb-4",children:"Contact"}),v.jsxs("ul",{"code-path":"src/sections/Footer.tsx:101:13",className:"space-y-3",children:[v.jsx("li",{"code-path":"src/sections/Footer.tsx:102:15",children:v.jsxs("a",{"code-path":"src/sections/Footer.tsx:103:17",href:"mailto:info@factsconsulting.com",className:"text-text-secondary hover:text-accent-gold transition-colors duration-200 text-sm flex items-center gap-2",children:[v.jsx(Zx,{"code-path":"src/sections/Footer.tsx:107:19",className:"w-4 h-4"}),"info@factsconsulting.com"]})}),v.jsx("li",{"code-path":"src/sections/Footer.tsx:111:15",children:v.jsxs("a",{"code-path":"src/sections/Footer.tsx:112:17",href:"tel:+15551234567",className:"text-text-secondary hover:text-accent-gold transition-colors duration-200 text-sm flex items-center gap-2",children:[v.jsx(BD,{"code-path":"src/sections/Footer.tsx:116:19",className:"w-4 h-4"}),"(555) 123-4567"]})})]}),v.jsxs("div",{"code-path":"src/sections/Footer.tsx:123:13",className:"flex items-center gap-4 mt-6",children:[v.jsx("a",{"code-path":"src/sections/Footer.tsx:124:15",href:"https://www.linkedin.com",target:"_blank",rel:"noopener noreferrer",className:"w-10 h-10 bg-card-bg rounded-lg flex items-center justify-center text-text-secondary hover:text-accent-gold hover:bg-accent-gold/10 transition-all duration-200",children:v.jsx(kD,{"code-path":"src/sections/Footer.tsx:130:17",className:"w-5 h-5"})}),v.jsx("a",{"code-path":"src/sections/Footer.tsx:132:15",href:"https://www.instagram.com/factservicesfirm",target:"_blank",rel:"noopener noreferrer",className:"w-10 h-10 bg-card-bg rounded-lg flex items-center justify-center text-text-secondary hover:text-accent-gold hover:bg-accent-gold/10 transition-all duration-200",children:v.jsx(DD,{"code-path":"src/sections/Footer.tsx:138:17",className:"w-5 h-5"})})]})]})]})}),v.jsx("div",{"code-path":"src/sections/Footer.tsx:146:7",className:"border-t border-accent-gold/10",children:v.jsx("div",{"code-path":"src/sections/Footer.tsx:147:9",className:"max-w-[1200px] mx-auto px-4 sm:px-6 lg:px-8 py-6",children:v.jsxs("div",{"code-path":"src/sections/Footer.tsx:148:11",className:"flex flex-col sm:flex-row justify-between items-center gap-4",children:[v.jsx("p",{"code-path":"src/sections/Footer.tsx:149:13",className:"text-text-secondary text-sm",children:"© 2025 FACTS Consulting. All rights reserved."}),v.jsx("p",{"code-path":"src/sections/Footer.tsx:152:13",className:"text-text-secondary text-sm",children:"Made with precision and expertise"})]})})})]})},u3=()=>{const{slug:n}=rT(),i=ab(),s=n?s3(n):void 0;if(!s)return v.jsxs("div",{"code-path":"src/pages/BlogArticle.tsx:16:7",className:"min-h-screen bg-light-bg",children:[v.jsx($d,{"code-path":"src/pages/BlogArticle.tsx:17:9"}),v.jsx("main",{"code-path":"src/pages/BlogArticle.tsx:18:9",className:"pt-32 pb-24",children:v.jsxs("div",{"code-path":"src/pages/BlogArticle.tsx:19:11",className:"max-w-[1200px] mx-auto px-4 sm:px-6 lg:px-8 text-center",children:[v.jsx("h1",{"code-path":"src/pages/BlogArticle.tsx:20:13",className:"text-3xl font-bold text-dark-blue mb-4",children:"Article Not Found"}),v.jsx("p",{"code-path":"src/pages/BlogArticle.tsx:21:13",className:"text-gray-600 mb-8",children:"The article you're looking for doesn't exist."}),v.jsxs(cn,{"code-path":"src/pages/BlogArticle.tsx:22:13",onClick:()=>i("/#blog"),className:"bg-accent-gold text-dark-blue hover:bg-accent-gold-hover",children:[v.jsx(fd,{"code-path":"src/pages/BlogArticle.tsx:23:15",className:"mr-2 h-4 w-4"}),"Back to Blog"]})]})}),v.jsx(ef,{"code-path":"src/pages/BlogArticle.tsx:28:9"})]});const r=o3(s.category).filter(f=>f.id!==s.id).slice(0,3),l=f=>new Date(f).toLocaleDateString("en-US",{month:"long",day:"numeric",year:"numeric"}),d=f=>f.split(`

`).map((h,p)=>{if(h.startsWith("## "))return`<h2 class="text-2xl font-bold text-dark-blue mt-8 mb-4" key="${p}">${h.replace("## ","")}</h2>`;if(h.startsWith("### "))return`<h3 class="text-xl font-semibold text-dark-blue mt-6 mb-3" key="${p}">${h.replace("### ","")}</h3>`;if(h.startsWith("- ")){const m=h.split(`
`).map(y=>y.replace("- ",""));return`<ul class="list-disc list-inside mb-4 text-gray-700 space-y-1" key="${p}">${m.map(y=>`<li>${y}</li>`).join("")}</ul>`}return h.startsWith("**")&&h.endsWith("**")?`<p class="font-semibold text-dark-blue mb-4" key="${p}">${h.replace(/\*\*/g,"")}</p>`:`<p class="mb-4 text-gray-700 leading-relaxed" key="${p}">${h}</p>`}).join("");return v.jsxs("div",{"code-path":"src/pages/BlogArticle.tsx:70:5",className:"min-h-screen bg-light-bg",children:[v.jsx($d,{"code-path":"src/pages/BlogArticle.tsx:71:7"}),v.jsxs("main",{"code-path":"src/pages/BlogArticle.tsx:73:7",className:"pt-24 pb-24",children:[v.jsxs("div",{"code-path":"src/pages/BlogArticle.tsx:75:9",className:"relative bg-dark-blue py-16 mb-12",children:[v.jsx("div",{"code-path":"src/pages/BlogArticle.tsx:76:11",className:"absolute inset-0 bg-gradient-to-br from-dark-blue via-navy to-dark-blue"}),v.jsx("div",{"code-path":"src/pages/BlogArticle.tsx:77:11",className:"absolute top-0 right-0 w-96 h-96 bg-accent-gold/5 rounded-full blur-3xl"}),v.jsx("div",{"code-path":"src/pages/BlogArticle.tsx:79:11",className:"relative z-10 max-w-[1200px] mx-auto px-4 sm:px-6 lg:px-8",children:v.jsxs(ue.div,{"code-path":"src/pages/BlogArticle.tsx:80:13",initial:{opacity:0,y:20},animate:{opacity:1,y:0},transition:{duration:.5},children:[v.jsxs(ha,{"code-path":"src/pages/BlogArticle.tsx:85:15",to:"/#blog",className:"inline-flex items-center text-text-secondary hover:text-accent-gold transition-colors mb-6",children:[v.jsx(fd,{"code-path":"src/pages/BlogArticle.tsx:89:17",className:"mr-2 h-4 w-4"}),"Back to Blog"]}),v.jsxs("div",{"code-path":"src/pages/BlogArticle.tsx:93:15",className:"flex items-center gap-3 mb-4",children:[v.jsx("span",{"code-path":"src/pages/BlogArticle.tsx:94:17",className:"px-3 py-1 bg-accent-gold text-dark-blue text-sm font-semibold rounded-full",children:s.category}),v.jsxs("span",{"code-path":"src/pages/BlogArticle.tsx:97:17",className:"flex items-center gap-1 text-text-secondary text-sm",children:[v.jsx(cl,{"code-path":"src/pages/BlogArticle.tsx:98:19",className:"h-4 w-4"}),l(s.date)]}),v.jsxs("span",{"code-path":"src/pages/BlogArticle.tsx:101:17",className:"flex items-center gap-1 text-text-secondary text-sm",children:[v.jsx(Xd,{"code-path":"src/pages/BlogArticle.tsx:102:19",className:"h-4 w-4"}),s.readTime]})]}),v.jsx("h1",{"code-path":"src/pages/BlogArticle.tsx:107:15",className:"text-3xl sm:text-4xl lg:text-5xl font-bold text-white mb-6 max-w-4xl",children:s.title}),v.jsxs("div",{"code-path":"src/pages/BlogArticle.tsx:111:15",className:"flex items-center gap-4",children:[v.jsx("div",{"code-path":"src/pages/BlogArticle.tsx:112:17",className:"w-12 h-12 bg-accent-gold rounded-full flex items-center justify-center",children:v.jsx("span",{"code-path":"src/pages/BlogArticle.tsx:113:19",className:"text-dark-blue font-bold text-lg",children:s.author.split(" ").map(f=>f[0]).join("").slice(0,2)})}),v.jsx("div",{"code-path":"src/pages/BlogArticle.tsx:117:17",children:v.jsxs("div",{"code-path":"src/pages/BlogArticle.tsx:118:19",className:"flex items-center gap-2 text-white",children:[v.jsx(Wd,{"code-path":"src/pages/BlogArticle.tsx:119:21",className:"h-4 w-4"}),v.jsx("span",{"code-path":"src/pages/BlogArticle.tsx:120:21",className:"font-medium",children:s.author})]})})]})]})})]}),v.jsx("div",{"code-path":"src/pages/BlogArticle.tsx:129:9",className:"max-w-[1200px] mx-auto px-4 sm:px-6 lg:px-8",children:v.jsxs("div",{"code-path":"src/pages/BlogArticle.tsx:130:11",className:"grid lg:grid-cols-3 gap-12",children:[v.jsxs(ue.div,{"code-path":"src/pages/BlogArticle.tsx:132:13",className:"lg:col-span-2",initial:{opacity:0,y:20},animate:{opacity:1,y:0},transition:{duration:.5,delay:.2},children:[v.jsx("div",{"code-path":"src/pages/BlogArticle.tsx:139:15",className:"rounded-2xl overflow-hidden mb-8 shadow-card",children:v.jsx("img",{"code-path":"src/pages/BlogArticle.tsx:140:17",src:s.image,alt:s.title,className:"w-full h-64 sm:h-80 object-cover"})}),v.jsx("article",{"code-path":"src/pages/BlogArticle.tsx:148:15",className:"prose prose-lg max-w-none",dangerouslySetInnerHTML:{__html:d(s.content)}}),v.jsx("div",{"code-path":"src/pages/BlogArticle.tsx:154:15",className:"mt-12 pt-8 border-t border-gray-200",children:v.jsxs("div",{"code-path":"src/pages/BlogArticle.tsx:155:17",className:"flex items-center justify-between",children:[v.jsxs("div",{"code-path":"src/pages/BlogArticle.tsx:156:19",className:"flex items-center gap-4",children:[v.jsx("span",{"code-path":"src/pages/BlogArticle.tsx:157:21",className:"text-gray-600 font-medium",children:"Share this article:"}),v.jsxs("div",{"code-path":"src/pages/BlogArticle.tsx:158:21",className:"flex gap-2",children:[v.jsx("button",{"code-path":"src/pages/BlogArticle.tsx:159:23",className:"w-10 h-10 bg-card-bg rounded-lg flex items-center justify-center text-text-secondary hover:text-accent-gold hover:bg-accent-gold/10 transition-all",children:v.jsx(HD,{"code-path":"src/pages/BlogArticle.tsx:160:25",className:"h-5 w-5"})}),v.jsx("button",{"code-path":"src/pages/BlogArticle.tsx:162:23",className:"w-10 h-10 bg-card-bg rounded-lg flex items-center justify-center text-text-secondary hover:text-accent-gold hover:bg-accent-gold/10 transition-all",children:v.jsx(oD,{"code-path":"src/pages/BlogArticle.tsx:163:25",className:"h-5 w-5"})})]})]}),v.jsxs(cn,{"code-path":"src/pages/BlogArticle.tsx:167:19",onClick:()=>i("/#blog"),variant:"outline",className:"border-accent-gold text-accent-gold hover:bg-accent-gold hover:text-dark-blue",children:[v.jsx(fd,{"code-path":"src/pages/BlogArticle.tsx:172:21",className:"mr-2 h-4 w-4"}),"Back to Blog"]})]})})]}),v.jsxs(ue.div,{"code-path":"src/pages/BlogArticle.tsx:180:13",className:"lg:col-span-1",initial:{opacity:0,y:20},animate:{opacity:1,y:0},transition:{duration:.5,delay:.3},children:[r.length>0&&v.jsxs("div",{"code-path":"src/pages/BlogArticle.tsx:188:17",className:"bg-white rounded-2xl p-6 shadow-card mb-6",children:[v.jsxs("h3",{"code-path":"src/pages/BlogArticle.tsx:189:19",className:"text-lg font-bold text-dark-blue mb-4",children:["More in ",s.category]}),v.jsx("div",{"code-path":"src/pages/BlogArticle.tsx:192:19",className:"space-y-4",children:r.map(f=>v.jsxs(ha,{"code-path":"src/pages/BlogArticle.tsx:194:23",to:`/blog/${f.slug}`,className:"block group",children:[v.jsx("h4",{"code-path":"src/pages/BlogArticle.tsx:199:25",className:"text-sm font-medium text-dark-blue group-hover:text-accent-gold transition-colors line-clamp-2",children:f.title}),v.jsxs("p",{"code-path":"src/pages/BlogArticle.tsx:202:25",className:"text-xs text-gray-500 mt-1",children:[l(f.date)," • ",f.readTime]})]},f.id))})]}),v.jsxs("div",{"code-path":"src/pages/BlogArticle.tsx:212:15",className:"bg-white rounded-2xl p-6 shadow-card",children:[v.jsx("h3",{"code-path":"src/pages/BlogArticle.tsx:213:17",className:"text-lg font-bold text-dark-blue mb-4",children:"Browse by Category"}),v.jsx("div",{"code-path":"src/pages/BlogArticle.tsx:216:17",className:"flex flex-wrap gap-2",children:["Finance","Analytics","Consulting","Transformation","AI"].map(f=>v.jsx(ha,{"code-path":"src/pages/BlogArticle.tsx:218:21",to:"/#blog",className:`px-3 py-1 rounded-full text-sm transition-all ${f===s.category?"bg-accent-gold text-dark-blue":"bg-gray-100 text-gray-600 hover:bg-accent-gold/20 hover:text-accent-gold"}`,children:f},f))})]})]})]})})]}),v.jsx(ef,{"code-path":"src/pages/BlogArticle.tsx:237:7"})]})};function d3(){return v.jsxs(v.Fragment,{children:[v.jsx($d,{"code-path":"src/App.tsx:18:7"}),v.jsxs("main",{"code-path":"src/App.tsx:19:7",children:[v.jsx(Xz,{"code-path":"src/App.tsx:20:9"}),v.jsx(Qz,{"code-path":"src/App.tsx:21:9"}),v.jsx(Jz,{"code-path":"src/App.tsx:22:9"}),v.jsx($z,{"code-path":"src/App.tsx:23:9"}),v.jsx(n3,{"code-path":"src/App.tsx:24:9"}),v.jsx(i3,{"code-path":"src/App.tsx:25:9"}),v.jsx(l3,{"code-path":"src/App.tsx:26:9"}),v.jsx(c3,{"code-path":"src/App.tsx:27:9"})]}),v.jsx(ef,{"code-path":"src/App.tsx:29:7"})]})}function f3(){return v.jsx(YT,{"code-path":"src/App.tsx:36:5",children:v.jsxs(ST,{"code-path":"src/App.tsx:37:7",children:[v.jsx(Cd,{"code-path":"src/App.tsx:38:9",path:"/",element:v.jsx(d3,{"code-path":"src/App.tsx:38:34"})}),v.jsx(Cd,{"code-path":"src/App.tsx:39:9",path:"/blog/:slug",element:v.jsx(u3,{"code-path":"src/App.tsx:39:44"})})]})})}CS.createRoot(document.getElementById("root")).render(v.jsx(w.StrictMode,{"code-path":"src/main.tsx:7:3",children:v.jsx(f3,{"code-path":"src/main.tsx:8:5"})}));
