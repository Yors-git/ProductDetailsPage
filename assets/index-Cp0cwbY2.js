(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const i of document.querySelectorAll('link[rel="modulepreload"]'))r(i);new MutationObserver(i=>{for(const o of i)if(o.type==="childList")for(const l of o.addedNodes)l.tagName==="LINK"&&l.rel==="modulepreload"&&r(l)}).observe(document,{childList:!0,subtree:!0});function n(i){const o={};return i.integrity&&(o.integrity=i.integrity),i.referrerPolicy&&(o.referrerPolicy=i.referrerPolicy),i.crossOrigin==="use-credentials"?o.credentials="include":i.crossOrigin==="anonymous"?o.credentials="omit":o.credentials="same-origin",o}function r(i){if(i.ep)return;i.ep=!0;const o=n(i);fetch(i.href,o)}})();function Sf(e){return e&&e.__esModule&&Object.prototype.hasOwnProperty.call(e,"default")?e.default:e}var Aa={exports:{}},eo={},Da={exports:{}},O={};/**
 * @license React
 * react.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Rr=Symbol.for("react.element"),jf=Symbol.for("react.portal"),Ef=Symbol.for("react.fragment"),_f=Symbol.for("react.strict_mode"),$f=Symbol.for("react.profiler"),zf=Symbol.for("react.provider"),Pf=Symbol.for("react.context"),Nf=Symbol.for("react.forward_ref"),Tf=Symbol.for("react.suspense"),Lf=Symbol.for("react.memo"),Mf=Symbol.for("react.lazy"),ou=Symbol.iterator;function Rf(e){return e===null||typeof e!="object"?null:(e=ou&&e[ou]||e["@@iterator"],typeof e=="function"?e:null)}var Fa={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},Ba=Object.assign,Ua={};function Fn(e,t,n){this.props=e,this.context=t,this.refs=Ua,this.updater=n||Fa}Fn.prototype.isReactComponent={};Fn.prototype.setState=function(e,t){if(typeof e!="object"&&typeof e!="function"&&e!=null)throw Error("setState(...): takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,e,t,"setState")};Fn.prototype.forceUpdate=function(e){this.updater.enqueueForceUpdate(this,e,"forceUpdate")};function Ha(){}Ha.prototype=Fn.prototype;function os(e,t,n){this.props=e,this.context=t,this.refs=Ua,this.updater=n||Fa}var ls=os.prototype=new Ha;ls.constructor=os;Ba(ls,Fn.prototype);ls.isPureReactComponent=!0;var lu=Array.isArray,Va=Object.prototype.hasOwnProperty,ss={current:null},Ga={key:!0,ref:!0,__self:!0,__source:!0};function Wa(e,t,n){var r,i={},o=null,l=null;if(t!=null)for(r in t.ref!==void 0&&(l=t.ref),t.key!==void 0&&(o=""+t.key),t)Va.call(t,r)&&!Ga.hasOwnProperty(r)&&(i[r]=t[r]);var s=arguments.length-2;if(s===1)i.children=n;else if(1<s){for(var u=Array(s),d=0;d<s;d++)u[d]=arguments[d+2];i.children=u}if(e&&e.defaultProps)for(r in s=e.defaultProps,s)i[r]===void 0&&(i[r]=s[r]);return{$$typeof:Rr,type:e,key:o,ref:l,props:i,_owner:ss.current}}function If(e,t){return{$$typeof:Rr,type:e.type,key:t,ref:e.ref,props:e.props,_owner:e._owner}}function us(e){return typeof e=="object"&&e!==null&&e.$$typeof===Rr}function Of(e){var t={"=":"=0",":":"=2"};return"$"+e.replace(/[=:]/g,function(n){return t[n]})}var su=/\/+/g;function Eo(e,t){return typeof e=="object"&&e!==null&&e.key!=null?Of(""+e.key):t.toString(36)}function ai(e,t,n,r,i){var o=typeof e;(o==="undefined"||o==="boolean")&&(e=null);var l=!1;if(e===null)l=!0;else switch(o){case"string":case"number":l=!0;break;case"object":switch(e.$$typeof){case Rr:case jf:l=!0}}if(l)return l=e,i=i(l),e=r===""?"."+Eo(l,0):r,lu(i)?(n="",e!=null&&(n=e.replace(su,"$&/")+"/"),ai(i,t,n,"",function(d){return d})):i!=null&&(us(i)&&(i=If(i,n+(!i.key||l&&l.key===i.key?"":(""+i.key).replace(su,"$&/")+"/")+e)),t.push(i)),1;if(l=0,r=r===""?".":r+":",lu(e))for(var s=0;s<e.length;s++){o=e[s];var u=r+Eo(o,s);l+=ai(o,t,n,u,i)}else if(u=Rf(e),typeof u=="function")for(e=u.call(e),s=0;!(o=e.next()).done;)o=o.value,u=r+Eo(o,s++),l+=ai(o,t,n,u,i);else if(o==="object")throw t=String(e),Error("Objects are not valid as a React child (found: "+(t==="[object Object]"?"object with keys {"+Object.keys(e).join(", ")+"}":t)+"). If you meant to render a collection of children, use an array instead.");return l}function Hr(e,t,n){if(e==null)return e;var r=[],i=0;return ai(e,r,"","",function(o){return t.call(n,o,i++)}),r}function Af(e){if(e._status===-1){var t=e._result;t=t(),t.then(function(n){(e._status===0||e._status===-1)&&(e._status=1,e._result=n)},function(n){(e._status===0||e._status===-1)&&(e._status=2,e._result=n)}),e._status===-1&&(e._status=0,e._result=t)}if(e._status===1)return e._result.default;throw e._result}var me={current:null},ci={transition:null},Df={ReactCurrentDispatcher:me,ReactCurrentBatchConfig:ci,ReactCurrentOwner:ss};O.Children={map:Hr,forEach:function(e,t,n){Hr(e,function(){t.apply(this,arguments)},n)},count:function(e){var t=0;return Hr(e,function(){t++}),t},toArray:function(e){return Hr(e,function(t){return t})||[]},only:function(e){if(!us(e))throw Error("React.Children.only expected to receive a single React element child.");return e}};O.Component=Fn;O.Fragment=Ef;O.Profiler=$f;O.PureComponent=os;O.StrictMode=_f;O.Suspense=Tf;O.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=Df;O.cloneElement=function(e,t,n){if(e==null)throw Error("React.cloneElement(...): The argument must be a React element, but you passed "+e+".");var r=Ba({},e.props),i=e.key,o=e.ref,l=e._owner;if(t!=null){if(t.ref!==void 0&&(o=t.ref,l=ss.current),t.key!==void 0&&(i=""+t.key),e.type&&e.type.defaultProps)var s=e.type.defaultProps;for(u in t)Va.call(t,u)&&!Ga.hasOwnProperty(u)&&(r[u]=t[u]===void 0&&s!==void 0?s[u]:t[u])}var u=arguments.length-2;if(u===1)r.children=n;else if(1<u){s=Array(u);for(var d=0;d<u;d++)s[d]=arguments[d+2];r.children=s}return{$$typeof:Rr,type:e.type,key:i,ref:o,props:r,_owner:l}};O.createContext=function(e){return e={$$typeof:Pf,_currentValue:e,_currentValue2:e,_threadCount:0,Provider:null,Consumer:null,_defaultValue:null,_globalName:null},e.Provider={$$typeof:zf,_context:e},e.Consumer=e};O.createElement=Wa;O.createFactory=function(e){var t=Wa.bind(null,e);return t.type=e,t};O.createRef=function(){return{current:null}};O.forwardRef=function(e){return{$$typeof:Nf,render:e}};O.isValidElement=us;O.lazy=function(e){return{$$typeof:Mf,_payload:{_status:-1,_result:e},_init:Af}};O.memo=function(e,t){return{$$typeof:Lf,type:e,compare:t===void 0?null:t}};O.startTransition=function(e){var t=ci.transition;ci.transition={};try{e()}finally{ci.transition=t}};O.unstable_act=function(){throw Error("act(...) is not supported in production builds of React.")};O.useCallback=function(e,t){return me.current.useCallback(e,t)};O.useContext=function(e){return me.current.useContext(e)};O.useDebugValue=function(){};O.useDeferredValue=function(e){return me.current.useDeferredValue(e)};O.useEffect=function(e,t){return me.current.useEffect(e,t)};O.useId=function(){return me.current.useId()};O.useImperativeHandle=function(e,t,n){return me.current.useImperativeHandle(e,t,n)};O.useInsertionEffect=function(e,t){return me.current.useInsertionEffect(e,t)};O.useLayoutEffect=function(e,t){return me.current.useLayoutEffect(e,t)};O.useMemo=function(e,t){return me.current.useMemo(e,t)};O.useReducer=function(e,t,n){return me.current.useReducer(e,t,n)};O.useRef=function(e){return me.current.useRef(e)};O.useState=function(e){return me.current.useState(e)};O.useSyncExternalStore=function(e,t,n){return me.current.useSyncExternalStore(e,t,n)};O.useTransition=function(){return me.current.useTransition()};O.version="18.2.0";Da.exports=O;var tn=Da.exports;const _n=Sf(tn);/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Ff=tn,Bf=Symbol.for("react.element"),Uf=Symbol.for("react.fragment"),Hf=Object.prototype.hasOwnProperty,Vf=Ff.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,Gf={key:!0,ref:!0,__self:!0,__source:!0};function Qa(e,t,n){var r,i={},o=null,l=null;n!==void 0&&(o=""+n),t.key!==void 0&&(o=""+t.key),t.ref!==void 0&&(l=t.ref);for(r in t)Hf.call(t,r)&&!Gf.hasOwnProperty(r)&&(i[r]=t[r]);if(e&&e.defaultProps)for(r in t=e.defaultProps,t)i[r]===void 0&&(i[r]=t[r]);return{$$typeof:Bf,type:e,key:o,ref:l,props:i,_owner:Vf.current}}eo.Fragment=Uf;eo.jsx=Qa;eo.jsxs=Qa;Aa.exports=eo;var a=Aa.exports,ol={},Za={exports:{}},Ne={},Ka={exports:{}},Ya={};/**
 * @license React
 * scheduler.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */(function(e){function t($,N){var L=$.length;$.push(N);e:for(;0<L;){var B=L-1>>>1,U=$[B];if(0<i(U,N))$[B]=N,$[L]=U,L=B;else break e}}function n($){return $.length===0?null:$[0]}function r($){if($.length===0)return null;var N=$[0],L=$.pop();if(L!==N){$[0]=L;e:for(var B=0,U=$.length,Dt=U>>>1;B<Dt;){var Fe=2*(B+1)-1,ft=$[Fe],je=Fe+1,et=$[je];if(0>i(ft,L))je<U&&0>i(et,ft)?($[B]=et,$[je]=L,B=je):($[B]=ft,$[Fe]=L,B=Fe);else if(je<U&&0>i(et,L))$[B]=et,$[je]=L,B=je;else break e}}return N}function i($,N){var L=$.sortIndex-N.sortIndex;return L!==0?L:$.id-N.id}if(typeof performance=="object"&&typeof performance.now=="function"){var o=performance;e.unstable_now=function(){return o.now()}}else{var l=Date,s=l.now();e.unstable_now=function(){return l.now()-s}}var u=[],d=[],g=1,m=null,h=3,w=!1,k=!1,j=!1,R=typeof setTimeout=="function"?setTimeout:null,f=typeof clearTimeout=="function"?clearTimeout:null,c=typeof setImmediate<"u"?setImmediate:null;typeof navigator<"u"&&navigator.scheduling!==void 0&&navigator.scheduling.isInputPending!==void 0&&navigator.scheduling.isInputPending.bind(navigator.scheduling);function p($){for(var N=n(d);N!==null;){if(N.callback===null)r(d);else if(N.startTime<=$)r(d),N.sortIndex=N.expirationTime,t(u,N);else break;N=n(d)}}function x($){if(j=!1,p($),!k)if(n(u)!==null)k=!0,Vn(_);else{var N=n(d);N!==null&&At(x,N.startTime-$)}}function _($,N){k=!1,j&&(j=!1,f(P),P=-1),w=!0;var L=h;try{for(p(N),m=n(u);m!==null&&(!(m.expirationTime>N)||$&&!Se());){var B=m.callback;if(typeof B=="function"){m.callback=null,h=m.priorityLevel;var U=B(m.expirationTime<=N);N=e.unstable_now(),typeof U=="function"?m.callback=U:m===n(u)&&r(u),p(N)}else r(u);m=n(u)}if(m!==null)var Dt=!0;else{var Fe=n(d);Fe!==null&&At(x,Fe.startTime-N),Dt=!1}return Dt}finally{m=null,h=L,w=!1}}var E=!1,C=null,P=-1,H=5,I=-1;function Se(){return!(e.unstable_now()-I<H)}function It(){if(C!==null){var $=e.unstable_now();I=$;var N=!0;try{N=C(!0,$)}finally{N?Ot():(E=!1,C=null)}}else E=!1}var Ot;if(typeof c=="function")Ot=function(){c(It)};else if(typeof MessageChannel<"u"){var Br=new MessageChannel,So=Br.port2;Br.port1.onmessage=It,Ot=function(){So.postMessage(null)}}else Ot=function(){R(It,0)};function Vn($){C=$,E||(E=!0,Ot())}function At($,N){P=R(function(){$(e.unstable_now())},N)}e.unstable_IdlePriority=5,e.unstable_ImmediatePriority=1,e.unstable_LowPriority=4,e.unstable_NormalPriority=3,e.unstable_Profiling=null,e.unstable_UserBlockingPriority=2,e.unstable_cancelCallback=function($){$.callback=null},e.unstable_continueExecution=function(){k||w||(k=!0,Vn(_))},e.unstable_forceFrameRate=function($){0>$||125<$?console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"):H=0<$?Math.floor(1e3/$):5},e.unstable_getCurrentPriorityLevel=function(){return h},e.unstable_getFirstCallbackNode=function(){return n(u)},e.unstable_next=function($){switch(h){case 1:case 2:case 3:var N=3;break;default:N=h}var L=h;h=N;try{return $()}finally{h=L}},e.unstable_pauseExecution=function(){},e.unstable_requestPaint=function(){},e.unstable_runWithPriority=function($,N){switch($){case 1:case 2:case 3:case 4:case 5:break;default:$=3}var L=h;h=$;try{return N()}finally{h=L}},e.unstable_scheduleCallback=function($,N,L){var B=e.unstable_now();switch(typeof L=="object"&&L!==null?(L=L.delay,L=typeof L=="number"&&0<L?B+L:B):L=B,$){case 1:var U=-1;break;case 2:U=250;break;case 5:U=1073741823;break;case 4:U=1e4;break;default:U=5e3}return U=L+U,$={id:g++,callback:N,priorityLevel:$,startTime:L,expirationTime:U,sortIndex:-1},L>B?($.sortIndex=L,t(d,$),n(u)===null&&$===n(d)&&(j?(f(P),P=-1):j=!0,At(x,L-B))):($.sortIndex=U,t(u,$),k||w||(k=!0,Vn(_))),$},e.unstable_shouldYield=Se,e.unstable_wrapCallback=function($){var N=h;return function(){var L=h;h=N;try{return $.apply(this,arguments)}finally{h=L}}}})(Ya);Ka.exports=Ya;var Wf=Ka.exports;/**
 * @license React
 * react-dom.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Xa=tn,Pe=Wf;function S(e){for(var t="https://reactjs.org/docs/error-decoder.html?invariant="+e,n=1;n<arguments.length;n++)t+="&args[]="+encodeURIComponent(arguments[n]);return"Minified React error #"+e+"; visit "+t+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}var Ja=new Set,mr={};function nn(e,t){$n(e,t),$n(e+"Capture",t)}function $n(e,t){for(mr[e]=t,e=0;e<t.length;e++)Ja.add(t[e])}var st=!(typeof window>"u"||typeof window.document>"u"||typeof window.document.createElement>"u"),ll=Object.prototype.hasOwnProperty,Qf=/^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/,uu={},au={};function Zf(e){return ll.call(au,e)?!0:ll.call(uu,e)?!1:Qf.test(e)?au[e]=!0:(uu[e]=!0,!1)}function Kf(e,t,n,r){if(n!==null&&n.type===0)return!1;switch(typeof t){case"function":case"symbol":return!0;case"boolean":return r?!1:n!==null?!n.acceptsBooleans:(e=e.toLowerCase().slice(0,5),e!=="data-"&&e!=="aria-");default:return!1}}function Yf(e,t,n,r){if(t===null||typeof t>"u"||Kf(e,t,n,r))return!0;if(r)return!1;if(n!==null)switch(n.type){case 3:return!t;case 4:return t===!1;case 5:return isNaN(t);case 6:return isNaN(t)||1>t}return!1}function ge(e,t,n,r,i,o,l){this.acceptsBooleans=t===2||t===3||t===4,this.attributeName=r,this.attributeNamespace=i,this.mustUseProperty=n,this.propertyName=e,this.type=t,this.sanitizeURL=o,this.removeEmptyString=l}var ue={};"children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style".split(" ").forEach(function(e){ue[e]=new ge(e,0,!1,e,null,!1,!1)});[["acceptCharset","accept-charset"],["className","class"],["htmlFor","for"],["httpEquiv","http-equiv"]].forEach(function(e){var t=e[0];ue[t]=new ge(t,1,!1,e[1],null,!1,!1)});["contentEditable","draggable","spellCheck","value"].forEach(function(e){ue[e]=new ge(e,2,!1,e.toLowerCase(),null,!1,!1)});["autoReverse","externalResourcesRequired","focusable","preserveAlpha"].forEach(function(e){ue[e]=new ge(e,2,!1,e,null,!1,!1)});"allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture disableRemotePlayback formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope".split(" ").forEach(function(e){ue[e]=new ge(e,3,!1,e.toLowerCase(),null,!1,!1)});["checked","multiple","muted","selected"].forEach(function(e){ue[e]=new ge(e,3,!0,e,null,!1,!1)});["capture","download"].forEach(function(e){ue[e]=new ge(e,4,!1,e,null,!1,!1)});["cols","rows","size","span"].forEach(function(e){ue[e]=new ge(e,6,!1,e,null,!1,!1)});["rowSpan","start"].forEach(function(e){ue[e]=new ge(e,5,!1,e.toLowerCase(),null,!1,!1)});var as=/[\-:]([a-z])/g;function cs(e){return e[1].toUpperCase()}"accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height".split(" ").forEach(function(e){var t=e.replace(as,cs);ue[t]=new ge(t,1,!1,e,null,!1,!1)});"xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type".split(" ").forEach(function(e){var t=e.replace(as,cs);ue[t]=new ge(t,1,!1,e,"http://www.w3.org/1999/xlink",!1,!1)});["xml:base","xml:lang","xml:space"].forEach(function(e){var t=e.replace(as,cs);ue[t]=new ge(t,1,!1,e,"http://www.w3.org/XML/1998/namespace",!1,!1)});["tabIndex","crossOrigin"].forEach(function(e){ue[e]=new ge(e,1,!1,e.toLowerCase(),null,!1,!1)});ue.xlinkHref=new ge("xlinkHref",1,!1,"xlink:href","http://www.w3.org/1999/xlink",!0,!1);["src","href","action","formAction"].forEach(function(e){ue[e]=new ge(e,1,!1,e.toLowerCase(),null,!0,!0)});function ds(e,t,n,r){var i=ue.hasOwnProperty(t)?ue[t]:null;(i!==null?i.type!==0:r||!(2<t.length)||t[0]!=="o"&&t[0]!=="O"||t[1]!=="n"&&t[1]!=="N")&&(Yf(t,n,i,r)&&(n=null),r||i===null?Zf(t)&&(n===null?e.removeAttribute(t):e.setAttribute(t,""+n)):i.mustUseProperty?e[i.propertyName]=n===null?i.type===3?!1:"":n:(t=i.attributeName,r=i.attributeNamespace,n===null?e.removeAttribute(t):(i=i.type,n=i===3||i===4&&n===!0?"":""+n,r?e.setAttributeNS(r,t,n):e.setAttribute(t,n))))}var dt=Xa.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED,Vr=Symbol.for("react.element"),sn=Symbol.for("react.portal"),un=Symbol.for("react.fragment"),fs=Symbol.for("react.strict_mode"),sl=Symbol.for("react.profiler"),qa=Symbol.for("react.provider"),ba=Symbol.for("react.context"),ps=Symbol.for("react.forward_ref"),ul=Symbol.for("react.suspense"),al=Symbol.for("react.suspense_list"),hs=Symbol.for("react.memo"),gt=Symbol.for("react.lazy"),ec=Symbol.for("react.offscreen"),cu=Symbol.iterator;function Wn(e){return e===null||typeof e!="object"?null:(e=cu&&e[cu]||e["@@iterator"],typeof e=="function"?e:null)}var X=Object.assign,_o;function er(e){if(_o===void 0)try{throw Error()}catch(n){var t=n.stack.trim().match(/\n( *(at )?)/);_o=t&&t[1]||""}return`
`+_o+e}var $o=!1;function zo(e,t){if(!e||$o)return"";$o=!0;var n=Error.prepareStackTrace;Error.prepareStackTrace=void 0;try{if(t)if(t=function(){throw Error()},Object.defineProperty(t.prototype,"props",{set:function(){throw Error()}}),typeof Reflect=="object"&&Reflect.construct){try{Reflect.construct(t,[])}catch(d){var r=d}Reflect.construct(e,[],t)}else{try{t.call()}catch(d){r=d}e.call(t.prototype)}else{try{throw Error()}catch(d){r=d}e()}}catch(d){if(d&&r&&typeof d.stack=="string"){for(var i=d.stack.split(`
`),o=r.stack.split(`
`),l=i.length-1,s=o.length-1;1<=l&&0<=s&&i[l]!==o[s];)s--;for(;1<=l&&0<=s;l--,s--)if(i[l]!==o[s]){if(l!==1||s!==1)do if(l--,s--,0>s||i[l]!==o[s]){var u=`
`+i[l].replace(" at new "," at ");return e.displayName&&u.includes("<anonymous>")&&(u=u.replace("<anonymous>",e.displayName)),u}while(1<=l&&0<=s);break}}}finally{$o=!1,Error.prepareStackTrace=n}return(e=e?e.displayName||e.name:"")?er(e):""}function Xf(e){switch(e.tag){case 5:return er(e.type);case 16:return er("Lazy");case 13:return er("Suspense");case 19:return er("SuspenseList");case 0:case 2:case 15:return e=zo(e.type,!1),e;case 11:return e=zo(e.type.render,!1),e;case 1:return e=zo(e.type,!0),e;default:return""}}function cl(e){if(e==null)return null;if(typeof e=="function")return e.displayName||e.name||null;if(typeof e=="string")return e;switch(e){case un:return"Fragment";case sn:return"Portal";case sl:return"Profiler";case fs:return"StrictMode";case ul:return"Suspense";case al:return"SuspenseList"}if(typeof e=="object")switch(e.$$typeof){case ba:return(e.displayName||"Context")+".Consumer";case qa:return(e._context.displayName||"Context")+".Provider";case ps:var t=e.render;return e=e.displayName,e||(e=t.displayName||t.name||"",e=e!==""?"ForwardRef("+e+")":"ForwardRef"),e;case hs:return t=e.displayName||null,t!==null?t:cl(e.type)||"Memo";case gt:t=e._payload,e=e._init;try{return cl(e(t))}catch{}}return null}function Jf(e){var t=e.type;switch(e.tag){case 24:return"Cache";case 9:return(t.displayName||"Context")+".Consumer";case 10:return(t._context.displayName||"Context")+".Provider";case 18:return"DehydratedFragment";case 11:return e=t.render,e=e.displayName||e.name||"",t.displayName||(e!==""?"ForwardRef("+e+")":"ForwardRef");case 7:return"Fragment";case 5:return t;case 4:return"Portal";case 3:return"Root";case 6:return"Text";case 16:return cl(t);case 8:return t===fs?"StrictMode":"Mode";case 22:return"Offscreen";case 12:return"Profiler";case 21:return"Scope";case 13:return"Suspense";case 19:return"SuspenseList";case 25:return"TracingMarker";case 1:case 0:case 17:case 2:case 14:case 15:if(typeof t=="function")return t.displayName||t.name||null;if(typeof t=="string")return t}return null}function Nt(e){switch(typeof e){case"boolean":case"number":case"string":case"undefined":return e;case"object":return e;default:return""}}function tc(e){var t=e.type;return(e=e.nodeName)&&e.toLowerCase()==="input"&&(t==="checkbox"||t==="radio")}function qf(e){var t=tc(e)?"checked":"value",n=Object.getOwnPropertyDescriptor(e.constructor.prototype,t),r=""+e[t];if(!e.hasOwnProperty(t)&&typeof n<"u"&&typeof n.get=="function"&&typeof n.set=="function"){var i=n.get,o=n.set;return Object.defineProperty(e,t,{configurable:!0,get:function(){return i.call(this)},set:function(l){r=""+l,o.call(this,l)}}),Object.defineProperty(e,t,{enumerable:n.enumerable}),{getValue:function(){return r},setValue:function(l){r=""+l},stopTracking:function(){e._valueTracker=null,delete e[t]}}}}function Gr(e){e._valueTracker||(e._valueTracker=qf(e))}function nc(e){if(!e)return!1;var t=e._valueTracker;if(!t)return!0;var n=t.getValue(),r="";return e&&(r=tc(e)?e.checked?"true":"false":e.value),e=r,e!==n?(t.setValue(e),!0):!1}function _i(e){if(e=e||(typeof document<"u"?document:void 0),typeof e>"u")return null;try{return e.activeElement||e.body}catch{return e.body}}function dl(e,t){var n=t.checked;return X({},t,{defaultChecked:void 0,defaultValue:void 0,value:void 0,checked:n??e._wrapperState.initialChecked})}function du(e,t){var n=t.defaultValue==null?"":t.defaultValue,r=t.checked!=null?t.checked:t.defaultChecked;n=Nt(t.value!=null?t.value:n),e._wrapperState={initialChecked:r,initialValue:n,controlled:t.type==="checkbox"||t.type==="radio"?t.checked!=null:t.value!=null}}function rc(e,t){t=t.checked,t!=null&&ds(e,"checked",t,!1)}function fl(e,t){rc(e,t);var n=Nt(t.value),r=t.type;if(n!=null)r==="number"?(n===0&&e.value===""||e.value!=n)&&(e.value=""+n):e.value!==""+n&&(e.value=""+n);else if(r==="submit"||r==="reset"){e.removeAttribute("value");return}t.hasOwnProperty("value")?pl(e,t.type,n):t.hasOwnProperty("defaultValue")&&pl(e,t.type,Nt(t.defaultValue)),t.checked==null&&t.defaultChecked!=null&&(e.defaultChecked=!!t.defaultChecked)}function fu(e,t,n){if(t.hasOwnProperty("value")||t.hasOwnProperty("defaultValue")){var r=t.type;if(!(r!=="submit"&&r!=="reset"||t.value!==void 0&&t.value!==null))return;t=""+e._wrapperState.initialValue,n||t===e.value||(e.value=t),e.defaultValue=t}n=e.name,n!==""&&(e.name=""),e.defaultChecked=!!e._wrapperState.initialChecked,n!==""&&(e.name=n)}function pl(e,t,n){(t!=="number"||_i(e.ownerDocument)!==e)&&(n==null?e.defaultValue=""+e._wrapperState.initialValue:e.defaultValue!==""+n&&(e.defaultValue=""+n))}var tr=Array.isArray;function wn(e,t,n,r){if(e=e.options,t){t={};for(var i=0;i<n.length;i++)t["$"+n[i]]=!0;for(n=0;n<e.length;n++)i=t.hasOwnProperty("$"+e[n].value),e[n].selected!==i&&(e[n].selected=i),i&&r&&(e[n].defaultSelected=!0)}else{for(n=""+Nt(n),t=null,i=0;i<e.length;i++){if(e[i].value===n){e[i].selected=!0,r&&(e[i].defaultSelected=!0);return}t!==null||e[i].disabled||(t=e[i])}t!==null&&(t.selected=!0)}}function hl(e,t){if(t.dangerouslySetInnerHTML!=null)throw Error(S(91));return X({},t,{value:void 0,defaultValue:void 0,children:""+e._wrapperState.initialValue})}function pu(e,t){var n=t.value;if(n==null){if(n=t.children,t=t.defaultValue,n!=null){if(t!=null)throw Error(S(92));if(tr(n)){if(1<n.length)throw Error(S(93));n=n[0]}t=n}t==null&&(t=""),n=t}e._wrapperState={initialValue:Nt(n)}}function ic(e,t){var n=Nt(t.value),r=Nt(t.defaultValue);n!=null&&(n=""+n,n!==e.value&&(e.value=n),t.defaultValue==null&&e.defaultValue!==n&&(e.defaultValue=n)),r!=null&&(e.defaultValue=""+r)}function hu(e){var t=e.textContent;t===e._wrapperState.initialValue&&t!==""&&t!==null&&(e.value=t)}function oc(e){switch(e){case"svg":return"http://www.w3.org/2000/svg";case"math":return"http://www.w3.org/1998/Math/MathML";default:return"http://www.w3.org/1999/xhtml"}}function ml(e,t){return e==null||e==="http://www.w3.org/1999/xhtml"?oc(t):e==="http://www.w3.org/2000/svg"&&t==="foreignObject"?"http://www.w3.org/1999/xhtml":e}var Wr,lc=function(e){return typeof MSApp<"u"&&MSApp.execUnsafeLocalFunction?function(t,n,r,i){MSApp.execUnsafeLocalFunction(function(){return e(t,n,r,i)})}:e}(function(e,t){if(e.namespaceURI!=="http://www.w3.org/2000/svg"||"innerHTML"in e)e.innerHTML=t;else{for(Wr=Wr||document.createElement("div"),Wr.innerHTML="<svg>"+t.valueOf().toString()+"</svg>",t=Wr.firstChild;e.firstChild;)e.removeChild(e.firstChild);for(;t.firstChild;)e.appendChild(t.firstChild)}});function gr(e,t){if(t){var n=e.firstChild;if(n&&n===e.lastChild&&n.nodeType===3){n.nodeValue=t;return}}e.textContent=t}var or={animationIterationCount:!0,aspectRatio:!0,borderImageOutset:!0,borderImageSlice:!0,borderImageWidth:!0,boxFlex:!0,boxFlexGroup:!0,boxOrdinalGroup:!0,columnCount:!0,columns:!0,flex:!0,flexGrow:!0,flexPositive:!0,flexShrink:!0,flexNegative:!0,flexOrder:!0,gridArea:!0,gridRow:!0,gridRowEnd:!0,gridRowSpan:!0,gridRowStart:!0,gridColumn:!0,gridColumnEnd:!0,gridColumnSpan:!0,gridColumnStart:!0,fontWeight:!0,lineClamp:!0,lineHeight:!0,opacity:!0,order:!0,orphans:!0,tabSize:!0,widows:!0,zIndex:!0,zoom:!0,fillOpacity:!0,floodOpacity:!0,stopOpacity:!0,strokeDasharray:!0,strokeDashoffset:!0,strokeMiterlimit:!0,strokeOpacity:!0,strokeWidth:!0},bf=["Webkit","ms","Moz","O"];Object.keys(or).forEach(function(e){bf.forEach(function(t){t=t+e.charAt(0).toUpperCase()+e.substring(1),or[t]=or[e]})});function sc(e,t,n){return t==null||typeof t=="boolean"||t===""?"":n||typeof t!="number"||t===0||or.hasOwnProperty(e)&&or[e]?(""+t).trim():t+"px"}function uc(e,t){e=e.style;for(var n in t)if(t.hasOwnProperty(n)){var r=n.indexOf("--")===0,i=sc(n,t[n],r);n==="float"&&(n="cssFloat"),r?e.setProperty(n,i):e[n]=i}}var ep=X({menuitem:!0},{area:!0,base:!0,br:!0,col:!0,embed:!0,hr:!0,img:!0,input:!0,keygen:!0,link:!0,meta:!0,param:!0,source:!0,track:!0,wbr:!0});function gl(e,t){if(t){if(ep[e]&&(t.children!=null||t.dangerouslySetInnerHTML!=null))throw Error(S(137,e));if(t.dangerouslySetInnerHTML!=null){if(t.children!=null)throw Error(S(60));if(typeof t.dangerouslySetInnerHTML!="object"||!("__html"in t.dangerouslySetInnerHTML))throw Error(S(61))}if(t.style!=null&&typeof t.style!="object")throw Error(S(62))}}function xl(e,t){if(e.indexOf("-")===-1)return typeof t.is=="string";switch(e){case"annotation-xml":case"color-profile":case"font-face":case"font-face-src":case"font-face-uri":case"font-face-format":case"font-face-name":case"missing-glyph":return!1;default:return!0}}var vl=null;function ms(e){return e=e.target||e.srcElement||window,e.correspondingUseElement&&(e=e.correspondingUseElement),e.nodeType===3?e.parentNode:e}var yl=null,kn=null,Cn=null;function mu(e){if(e=Ar(e)){if(typeof yl!="function")throw Error(S(280));var t=e.stateNode;t&&(t=oo(t),yl(e.stateNode,e.type,t))}}function ac(e){kn?Cn?Cn.push(e):Cn=[e]:kn=e}function cc(){if(kn){var e=kn,t=Cn;if(Cn=kn=null,mu(e),t)for(e=0;e<t.length;e++)mu(t[e])}}function dc(e,t){return e(t)}function fc(){}var Po=!1;function pc(e,t,n){if(Po)return e(t,n);Po=!0;try{return dc(e,t,n)}finally{Po=!1,(kn!==null||Cn!==null)&&(fc(),cc())}}function xr(e,t){var n=e.stateNode;if(n===null)return null;var r=oo(n);if(r===null)return null;n=r[t];e:switch(t){case"onClick":case"onClickCapture":case"onDoubleClick":case"onDoubleClickCapture":case"onMouseDown":case"onMouseDownCapture":case"onMouseMove":case"onMouseMoveCapture":case"onMouseUp":case"onMouseUpCapture":case"onMouseEnter":(r=!r.disabled)||(e=e.type,r=!(e==="button"||e==="input"||e==="select"||e==="textarea")),e=!r;break e;default:e=!1}if(e)return null;if(n&&typeof n!="function")throw Error(S(231,t,typeof n));return n}var wl=!1;if(st)try{var Qn={};Object.defineProperty(Qn,"passive",{get:function(){wl=!0}}),window.addEventListener("test",Qn,Qn),window.removeEventListener("test",Qn,Qn)}catch{wl=!1}function tp(e,t,n,r,i,o,l,s,u){var d=Array.prototype.slice.call(arguments,3);try{t.apply(n,d)}catch(g){this.onError(g)}}var lr=!1,$i=null,zi=!1,kl=null,np={onError:function(e){lr=!0,$i=e}};function rp(e,t,n,r,i,o,l,s,u){lr=!1,$i=null,tp.apply(np,arguments)}function ip(e,t,n,r,i,o,l,s,u){if(rp.apply(this,arguments),lr){if(lr){var d=$i;lr=!1,$i=null}else throw Error(S(198));zi||(zi=!0,kl=d)}}function rn(e){var t=e,n=e;if(e.alternate)for(;t.return;)t=t.return;else{e=t;do t=e,t.flags&4098&&(n=t.return),e=t.return;while(e)}return t.tag===3?n:null}function hc(e){if(e.tag===13){var t=e.memoizedState;if(t===null&&(e=e.alternate,e!==null&&(t=e.memoizedState)),t!==null)return t.dehydrated}return null}function gu(e){if(rn(e)!==e)throw Error(S(188))}function op(e){var t=e.alternate;if(!t){if(t=rn(e),t===null)throw Error(S(188));return t!==e?null:e}for(var n=e,r=t;;){var i=n.return;if(i===null)break;var o=i.alternate;if(o===null){if(r=i.return,r!==null){n=r;continue}break}if(i.child===o.child){for(o=i.child;o;){if(o===n)return gu(i),e;if(o===r)return gu(i),t;o=o.sibling}throw Error(S(188))}if(n.return!==r.return)n=i,r=o;else{for(var l=!1,s=i.child;s;){if(s===n){l=!0,n=i,r=o;break}if(s===r){l=!0,r=i,n=o;break}s=s.sibling}if(!l){for(s=o.child;s;){if(s===n){l=!0,n=o,r=i;break}if(s===r){l=!0,r=o,n=i;break}s=s.sibling}if(!l)throw Error(S(189))}}if(n.alternate!==r)throw Error(S(190))}if(n.tag!==3)throw Error(S(188));return n.stateNode.current===n?e:t}function mc(e){return e=op(e),e!==null?gc(e):null}function gc(e){if(e.tag===5||e.tag===6)return e;for(e=e.child;e!==null;){var t=gc(e);if(t!==null)return t;e=e.sibling}return null}var xc=Pe.unstable_scheduleCallback,xu=Pe.unstable_cancelCallback,lp=Pe.unstable_shouldYield,sp=Pe.unstable_requestPaint,q=Pe.unstable_now,up=Pe.unstable_getCurrentPriorityLevel,gs=Pe.unstable_ImmediatePriority,vc=Pe.unstable_UserBlockingPriority,Pi=Pe.unstable_NormalPriority,ap=Pe.unstable_LowPriority,yc=Pe.unstable_IdlePriority,to=null,qe=null;function cp(e){if(qe&&typeof qe.onCommitFiberRoot=="function")try{qe.onCommitFiberRoot(to,e,void 0,(e.current.flags&128)===128)}catch{}}var Ge=Math.clz32?Math.clz32:pp,dp=Math.log,fp=Math.LN2;function pp(e){return e>>>=0,e===0?32:31-(dp(e)/fp|0)|0}var Qr=64,Zr=4194304;function nr(e){switch(e&-e){case 1:return 1;case 2:return 2;case 4:return 4;case 8:return 8;case 16:return 16;case 32:return 32;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return e&4194240;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return e&130023424;case 134217728:return 134217728;case 268435456:return 268435456;case 536870912:return 536870912;case 1073741824:return 1073741824;default:return e}}function Ni(e,t){var n=e.pendingLanes;if(n===0)return 0;var r=0,i=e.suspendedLanes,o=e.pingedLanes,l=n&268435455;if(l!==0){var s=l&~i;s!==0?r=nr(s):(o&=l,o!==0&&(r=nr(o)))}else l=n&~i,l!==0?r=nr(l):o!==0&&(r=nr(o));if(r===0)return 0;if(t!==0&&t!==r&&!(t&i)&&(i=r&-r,o=t&-t,i>=o||i===16&&(o&4194240)!==0))return t;if(r&4&&(r|=n&16),t=e.entangledLanes,t!==0)for(e=e.entanglements,t&=r;0<t;)n=31-Ge(t),i=1<<n,r|=e[n],t&=~i;return r}function hp(e,t){switch(e){case 1:case 2:case 4:return t+250;case 8:case 16:case 32:case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return t+5e3;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return-1;case 134217728:case 268435456:case 536870912:case 1073741824:return-1;default:return-1}}function mp(e,t){for(var n=e.suspendedLanes,r=e.pingedLanes,i=e.expirationTimes,o=e.pendingLanes;0<o;){var l=31-Ge(o),s=1<<l,u=i[l];u===-1?(!(s&n)||s&r)&&(i[l]=hp(s,t)):u<=t&&(e.expiredLanes|=s),o&=~s}}function Cl(e){return e=e.pendingLanes&-1073741825,e!==0?e:e&1073741824?1073741824:0}function wc(){var e=Qr;return Qr<<=1,!(Qr&4194240)&&(Qr=64),e}function No(e){for(var t=[],n=0;31>n;n++)t.push(e);return t}function Ir(e,t,n){e.pendingLanes|=t,t!==536870912&&(e.suspendedLanes=0,e.pingedLanes=0),e=e.eventTimes,t=31-Ge(t),e[t]=n}function gp(e,t){var n=e.pendingLanes&~t;e.pendingLanes=t,e.suspendedLanes=0,e.pingedLanes=0,e.expiredLanes&=t,e.mutableReadLanes&=t,e.entangledLanes&=t,t=e.entanglements;var r=e.eventTimes;for(e=e.expirationTimes;0<n;){var i=31-Ge(n),o=1<<i;t[i]=0,r[i]=-1,e[i]=-1,n&=~o}}function xs(e,t){var n=e.entangledLanes|=t;for(e=e.entanglements;n;){var r=31-Ge(n),i=1<<r;i&t|e[r]&t&&(e[r]|=t),n&=~i}}var F=0;function kc(e){return e&=-e,1<e?4<e?e&268435455?16:536870912:4:1}var Cc,vs,Sc,jc,Ec,Sl=!1,Kr=[],Ct=null,St=null,jt=null,vr=new Map,yr=new Map,vt=[],xp="mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset submit".split(" ");function vu(e,t){switch(e){case"focusin":case"focusout":Ct=null;break;case"dragenter":case"dragleave":St=null;break;case"mouseover":case"mouseout":jt=null;break;case"pointerover":case"pointerout":vr.delete(t.pointerId);break;case"gotpointercapture":case"lostpointercapture":yr.delete(t.pointerId)}}function Zn(e,t,n,r,i,o){return e===null||e.nativeEvent!==o?(e={blockedOn:t,domEventName:n,eventSystemFlags:r,nativeEvent:o,targetContainers:[i]},t!==null&&(t=Ar(t),t!==null&&vs(t)),e):(e.eventSystemFlags|=r,t=e.targetContainers,i!==null&&t.indexOf(i)===-1&&t.push(i),e)}function vp(e,t,n,r,i){switch(t){case"focusin":return Ct=Zn(Ct,e,t,n,r,i),!0;case"dragenter":return St=Zn(St,e,t,n,r,i),!0;case"mouseover":return jt=Zn(jt,e,t,n,r,i),!0;case"pointerover":var o=i.pointerId;return vr.set(o,Zn(vr.get(o)||null,e,t,n,r,i)),!0;case"gotpointercapture":return o=i.pointerId,yr.set(o,Zn(yr.get(o)||null,e,t,n,r,i)),!0}return!1}function _c(e){var t=Ht(e.target);if(t!==null){var n=rn(t);if(n!==null){if(t=n.tag,t===13){if(t=hc(n),t!==null){e.blockedOn=t,Ec(e.priority,function(){Sc(n)});return}}else if(t===3&&n.stateNode.current.memoizedState.isDehydrated){e.blockedOn=n.tag===3?n.stateNode.containerInfo:null;return}}}e.blockedOn=null}function di(e){if(e.blockedOn!==null)return!1;for(var t=e.targetContainers;0<t.length;){var n=jl(e.domEventName,e.eventSystemFlags,t[0],e.nativeEvent);if(n===null){n=e.nativeEvent;var r=new n.constructor(n.type,n);vl=r,n.target.dispatchEvent(r),vl=null}else return t=Ar(n),t!==null&&vs(t),e.blockedOn=n,!1;t.shift()}return!0}function yu(e,t,n){di(e)&&n.delete(t)}function yp(){Sl=!1,Ct!==null&&di(Ct)&&(Ct=null),St!==null&&di(St)&&(St=null),jt!==null&&di(jt)&&(jt=null),vr.forEach(yu),yr.forEach(yu)}function Kn(e,t){e.blockedOn===t&&(e.blockedOn=null,Sl||(Sl=!0,Pe.unstable_scheduleCallback(Pe.unstable_NormalPriority,yp)))}function wr(e){function t(i){return Kn(i,e)}if(0<Kr.length){Kn(Kr[0],e);for(var n=1;n<Kr.length;n++){var r=Kr[n];r.blockedOn===e&&(r.blockedOn=null)}}for(Ct!==null&&Kn(Ct,e),St!==null&&Kn(St,e),jt!==null&&Kn(jt,e),vr.forEach(t),yr.forEach(t),n=0;n<vt.length;n++)r=vt[n],r.blockedOn===e&&(r.blockedOn=null);for(;0<vt.length&&(n=vt[0],n.blockedOn===null);)_c(n),n.blockedOn===null&&vt.shift()}var Sn=dt.ReactCurrentBatchConfig,Ti=!0;function wp(e,t,n,r){var i=F,o=Sn.transition;Sn.transition=null;try{F=1,ys(e,t,n,r)}finally{F=i,Sn.transition=o}}function kp(e,t,n,r){var i=F,o=Sn.transition;Sn.transition=null;try{F=4,ys(e,t,n,r)}finally{F=i,Sn.transition=o}}function ys(e,t,n,r){if(Ti){var i=jl(e,t,n,r);if(i===null)Bo(e,t,r,Li,n),vu(e,r);else if(vp(i,e,t,n,r))r.stopPropagation();else if(vu(e,r),t&4&&-1<xp.indexOf(e)){for(;i!==null;){var o=Ar(i);if(o!==null&&Cc(o),o=jl(e,t,n,r),o===null&&Bo(e,t,r,Li,n),o===i)break;i=o}i!==null&&r.stopPropagation()}else Bo(e,t,r,null,n)}}var Li=null;function jl(e,t,n,r){if(Li=null,e=ms(r),e=Ht(e),e!==null)if(t=rn(e),t===null)e=null;else if(n=t.tag,n===13){if(e=hc(t),e!==null)return e;e=null}else if(n===3){if(t.stateNode.current.memoizedState.isDehydrated)return t.tag===3?t.stateNode.containerInfo:null;e=null}else t!==e&&(e=null);return Li=e,null}function $c(e){switch(e){case"cancel":case"click":case"close":case"contextmenu":case"copy":case"cut":case"auxclick":case"dblclick":case"dragend":case"dragstart":case"drop":case"focusin":case"focusout":case"input":case"invalid":case"keydown":case"keypress":case"keyup":case"mousedown":case"mouseup":case"paste":case"pause":case"play":case"pointercancel":case"pointerdown":case"pointerup":case"ratechange":case"reset":case"resize":case"seeked":case"submit":case"touchcancel":case"touchend":case"touchstart":case"volumechange":case"change":case"selectionchange":case"textInput":case"compositionstart":case"compositionend":case"compositionupdate":case"beforeblur":case"afterblur":case"beforeinput":case"blur":case"fullscreenchange":case"focus":case"hashchange":case"popstate":case"select":case"selectstart":return 1;case"drag":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"mousemove":case"mouseout":case"mouseover":case"pointermove":case"pointerout":case"pointerover":case"scroll":case"toggle":case"touchmove":case"wheel":case"mouseenter":case"mouseleave":case"pointerenter":case"pointerleave":return 4;case"message":switch(up()){case gs:return 1;case vc:return 4;case Pi:case ap:return 16;case yc:return 536870912;default:return 16}default:return 16}}var wt=null,ws=null,fi=null;function zc(){if(fi)return fi;var e,t=ws,n=t.length,r,i="value"in wt?wt.value:wt.textContent,o=i.length;for(e=0;e<n&&t[e]===i[e];e++);var l=n-e;for(r=1;r<=l&&t[n-r]===i[o-r];r++);return fi=i.slice(e,1<r?1-r:void 0)}function pi(e){var t=e.keyCode;return"charCode"in e?(e=e.charCode,e===0&&t===13&&(e=13)):e=t,e===10&&(e=13),32<=e||e===13?e:0}function Yr(){return!0}function wu(){return!1}function Te(e){function t(n,r,i,o,l){this._reactName=n,this._targetInst=i,this.type=r,this.nativeEvent=o,this.target=l,this.currentTarget=null;for(var s in e)e.hasOwnProperty(s)&&(n=e[s],this[s]=n?n(o):o[s]);return this.isDefaultPrevented=(o.defaultPrevented!=null?o.defaultPrevented:o.returnValue===!1)?Yr:wu,this.isPropagationStopped=wu,this}return X(t.prototype,{preventDefault:function(){this.defaultPrevented=!0;var n=this.nativeEvent;n&&(n.preventDefault?n.preventDefault():typeof n.returnValue!="unknown"&&(n.returnValue=!1),this.isDefaultPrevented=Yr)},stopPropagation:function(){var n=this.nativeEvent;n&&(n.stopPropagation?n.stopPropagation():typeof n.cancelBubble!="unknown"&&(n.cancelBubble=!0),this.isPropagationStopped=Yr)},persist:function(){},isPersistent:Yr}),t}var Bn={eventPhase:0,bubbles:0,cancelable:0,timeStamp:function(e){return e.timeStamp||Date.now()},defaultPrevented:0,isTrusted:0},ks=Te(Bn),Or=X({},Bn,{view:0,detail:0}),Cp=Te(Or),To,Lo,Yn,no=X({},Or,{screenX:0,screenY:0,clientX:0,clientY:0,pageX:0,pageY:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,getModifierState:Cs,button:0,buttons:0,relatedTarget:function(e){return e.relatedTarget===void 0?e.fromElement===e.srcElement?e.toElement:e.fromElement:e.relatedTarget},movementX:function(e){return"movementX"in e?e.movementX:(e!==Yn&&(Yn&&e.type==="mousemove"?(To=e.screenX-Yn.screenX,Lo=e.screenY-Yn.screenY):Lo=To=0,Yn=e),To)},movementY:function(e){return"movementY"in e?e.movementY:Lo}}),ku=Te(no),Sp=X({},no,{dataTransfer:0}),jp=Te(Sp),Ep=X({},Or,{relatedTarget:0}),Mo=Te(Ep),_p=X({},Bn,{animationName:0,elapsedTime:0,pseudoElement:0}),$p=Te(_p),zp=X({},Bn,{clipboardData:function(e){return"clipboardData"in e?e.clipboardData:window.clipboardData}}),Pp=Te(zp),Np=X({},Bn,{data:0}),Cu=Te(Np),Tp={Esc:"Escape",Spacebar:" ",Left:"ArrowLeft",Up:"ArrowUp",Right:"ArrowRight",Down:"ArrowDown",Del:"Delete",Win:"OS",Menu:"ContextMenu",Apps:"ContextMenu",Scroll:"ScrollLock",MozPrintableKey:"Unidentified"},Lp={8:"Backspace",9:"Tab",12:"Clear",13:"Enter",16:"Shift",17:"Control",18:"Alt",19:"Pause",20:"CapsLock",27:"Escape",32:" ",33:"PageUp",34:"PageDown",35:"End",36:"Home",37:"ArrowLeft",38:"ArrowUp",39:"ArrowRight",40:"ArrowDown",45:"Insert",46:"Delete",112:"F1",113:"F2",114:"F3",115:"F4",116:"F5",117:"F6",118:"F7",119:"F8",120:"F9",121:"F10",122:"F11",123:"F12",144:"NumLock",145:"ScrollLock",224:"Meta"},Mp={Alt:"altKey",Control:"ctrlKey",Meta:"metaKey",Shift:"shiftKey"};function Rp(e){var t=this.nativeEvent;return t.getModifierState?t.getModifierState(e):(e=Mp[e])?!!t[e]:!1}function Cs(){return Rp}var Ip=X({},Or,{key:function(e){if(e.key){var t=Tp[e.key]||e.key;if(t!=="Unidentified")return t}return e.type==="keypress"?(e=pi(e),e===13?"Enter":String.fromCharCode(e)):e.type==="keydown"||e.type==="keyup"?Lp[e.keyCode]||"Unidentified":""},code:0,location:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,repeat:0,locale:0,getModifierState:Cs,charCode:function(e){return e.type==="keypress"?pi(e):0},keyCode:function(e){return e.type==="keydown"||e.type==="keyup"?e.keyCode:0},which:function(e){return e.type==="keypress"?pi(e):e.type==="keydown"||e.type==="keyup"?e.keyCode:0}}),Op=Te(Ip),Ap=X({},no,{pointerId:0,width:0,height:0,pressure:0,tangentialPressure:0,tiltX:0,tiltY:0,twist:0,pointerType:0,isPrimary:0}),Su=Te(Ap),Dp=X({},Or,{touches:0,targetTouches:0,changedTouches:0,altKey:0,metaKey:0,ctrlKey:0,shiftKey:0,getModifierState:Cs}),Fp=Te(Dp),Bp=X({},Bn,{propertyName:0,elapsedTime:0,pseudoElement:0}),Up=Te(Bp),Hp=X({},no,{deltaX:function(e){return"deltaX"in e?e.deltaX:"wheelDeltaX"in e?-e.wheelDeltaX:0},deltaY:function(e){return"deltaY"in e?e.deltaY:"wheelDeltaY"in e?-e.wheelDeltaY:"wheelDelta"in e?-e.wheelDelta:0},deltaZ:0,deltaMode:0}),Vp=Te(Hp),Gp=[9,13,27,32],Ss=st&&"CompositionEvent"in window,sr=null;st&&"documentMode"in document&&(sr=document.documentMode);var Wp=st&&"TextEvent"in window&&!sr,Pc=st&&(!Ss||sr&&8<sr&&11>=sr),ju=" ",Eu=!1;function Nc(e,t){switch(e){case"keyup":return Gp.indexOf(t.keyCode)!==-1;case"keydown":return t.keyCode!==229;case"keypress":case"mousedown":case"focusout":return!0;default:return!1}}function Tc(e){return e=e.detail,typeof e=="object"&&"data"in e?e.data:null}var an=!1;function Qp(e,t){switch(e){case"compositionend":return Tc(t);case"keypress":return t.which!==32?null:(Eu=!0,ju);case"textInput":return e=t.data,e===ju&&Eu?null:e;default:return null}}function Zp(e,t){if(an)return e==="compositionend"||!Ss&&Nc(e,t)?(e=zc(),fi=ws=wt=null,an=!1,e):null;switch(e){case"paste":return null;case"keypress":if(!(t.ctrlKey||t.altKey||t.metaKey)||t.ctrlKey&&t.altKey){if(t.char&&1<t.char.length)return t.char;if(t.which)return String.fromCharCode(t.which)}return null;case"compositionend":return Pc&&t.locale!=="ko"?null:t.data;default:return null}}var Kp={color:!0,date:!0,datetime:!0,"datetime-local":!0,email:!0,month:!0,number:!0,password:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0};function _u(e){var t=e&&e.nodeName&&e.nodeName.toLowerCase();return t==="input"?!!Kp[e.type]:t==="textarea"}function Lc(e,t,n,r){ac(r),t=Mi(t,"onChange"),0<t.length&&(n=new ks("onChange","change",null,n,r),e.push({event:n,listeners:t}))}var ur=null,kr=null;function Yp(e){Vc(e,0)}function ro(e){var t=fn(e);if(nc(t))return e}function Xp(e,t){if(e==="change")return t}var Mc=!1;if(st){var Ro;if(st){var Io="oninput"in document;if(!Io){var $u=document.createElement("div");$u.setAttribute("oninput","return;"),Io=typeof $u.oninput=="function"}Ro=Io}else Ro=!1;Mc=Ro&&(!document.documentMode||9<document.documentMode)}function zu(){ur&&(ur.detachEvent("onpropertychange",Rc),kr=ur=null)}function Rc(e){if(e.propertyName==="value"&&ro(kr)){var t=[];Lc(t,kr,e,ms(e)),pc(Yp,t)}}function Jp(e,t,n){e==="focusin"?(zu(),ur=t,kr=n,ur.attachEvent("onpropertychange",Rc)):e==="focusout"&&zu()}function qp(e){if(e==="selectionchange"||e==="keyup"||e==="keydown")return ro(kr)}function bp(e,t){if(e==="click")return ro(t)}function e0(e,t){if(e==="input"||e==="change")return ro(t)}function t0(e,t){return e===t&&(e!==0||1/e===1/t)||e!==e&&t!==t}var Ze=typeof Object.is=="function"?Object.is:t0;function Cr(e,t){if(Ze(e,t))return!0;if(typeof e!="object"||e===null||typeof t!="object"||t===null)return!1;var n=Object.keys(e),r=Object.keys(t);if(n.length!==r.length)return!1;for(r=0;r<n.length;r++){var i=n[r];if(!ll.call(t,i)||!Ze(e[i],t[i]))return!1}return!0}function Pu(e){for(;e&&e.firstChild;)e=e.firstChild;return e}function Nu(e,t){var n=Pu(e);e=0;for(var r;n;){if(n.nodeType===3){if(r=e+n.textContent.length,e<=t&&r>=t)return{node:n,offset:t-e};e=r}e:{for(;n;){if(n.nextSibling){n=n.nextSibling;break e}n=n.parentNode}n=void 0}n=Pu(n)}}function Ic(e,t){return e&&t?e===t?!0:e&&e.nodeType===3?!1:t&&t.nodeType===3?Ic(e,t.parentNode):"contains"in e?e.contains(t):e.compareDocumentPosition?!!(e.compareDocumentPosition(t)&16):!1:!1}function Oc(){for(var e=window,t=_i();t instanceof e.HTMLIFrameElement;){try{var n=typeof t.contentWindow.location.href=="string"}catch{n=!1}if(n)e=t.contentWindow;else break;t=_i(e.document)}return t}function js(e){var t=e&&e.nodeName&&e.nodeName.toLowerCase();return t&&(t==="input"&&(e.type==="text"||e.type==="search"||e.type==="tel"||e.type==="url"||e.type==="password")||t==="textarea"||e.contentEditable==="true")}function n0(e){var t=Oc(),n=e.focusedElem,r=e.selectionRange;if(t!==n&&n&&n.ownerDocument&&Ic(n.ownerDocument.documentElement,n)){if(r!==null&&js(n)){if(t=r.start,e=r.end,e===void 0&&(e=t),"selectionStart"in n)n.selectionStart=t,n.selectionEnd=Math.min(e,n.value.length);else if(e=(t=n.ownerDocument||document)&&t.defaultView||window,e.getSelection){e=e.getSelection();var i=n.textContent.length,o=Math.min(r.start,i);r=r.end===void 0?o:Math.min(r.end,i),!e.extend&&o>r&&(i=r,r=o,o=i),i=Nu(n,o);var l=Nu(n,r);i&&l&&(e.rangeCount!==1||e.anchorNode!==i.node||e.anchorOffset!==i.offset||e.focusNode!==l.node||e.focusOffset!==l.offset)&&(t=t.createRange(),t.setStart(i.node,i.offset),e.removeAllRanges(),o>r?(e.addRange(t),e.extend(l.node,l.offset)):(t.setEnd(l.node,l.offset),e.addRange(t)))}}for(t=[],e=n;e=e.parentNode;)e.nodeType===1&&t.push({element:e,left:e.scrollLeft,top:e.scrollTop});for(typeof n.focus=="function"&&n.focus(),n=0;n<t.length;n++)e=t[n],e.element.scrollLeft=e.left,e.element.scrollTop=e.top}}var r0=st&&"documentMode"in document&&11>=document.documentMode,cn=null,El=null,ar=null,_l=!1;function Tu(e,t,n){var r=n.window===n?n.document:n.nodeType===9?n:n.ownerDocument;_l||cn==null||cn!==_i(r)||(r=cn,"selectionStart"in r&&js(r)?r={start:r.selectionStart,end:r.selectionEnd}:(r=(r.ownerDocument&&r.ownerDocument.defaultView||window).getSelection(),r={anchorNode:r.anchorNode,anchorOffset:r.anchorOffset,focusNode:r.focusNode,focusOffset:r.focusOffset}),ar&&Cr(ar,r)||(ar=r,r=Mi(El,"onSelect"),0<r.length&&(t=new ks("onSelect","select",null,t,n),e.push({event:t,listeners:r}),t.target=cn)))}function Xr(e,t){var n={};return n[e.toLowerCase()]=t.toLowerCase(),n["Webkit"+e]="webkit"+t,n["Moz"+e]="moz"+t,n}var dn={animationend:Xr("Animation","AnimationEnd"),animationiteration:Xr("Animation","AnimationIteration"),animationstart:Xr("Animation","AnimationStart"),transitionend:Xr("Transition","TransitionEnd")},Oo={},Ac={};st&&(Ac=document.createElement("div").style,"AnimationEvent"in window||(delete dn.animationend.animation,delete dn.animationiteration.animation,delete dn.animationstart.animation),"TransitionEvent"in window||delete dn.transitionend.transition);function io(e){if(Oo[e])return Oo[e];if(!dn[e])return e;var t=dn[e],n;for(n in t)if(t.hasOwnProperty(n)&&n in Ac)return Oo[e]=t[n];return e}var Dc=io("animationend"),Fc=io("animationiteration"),Bc=io("animationstart"),Uc=io("transitionend"),Hc=new Map,Lu="abort auxClick cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");function Lt(e,t){Hc.set(e,t),nn(t,[e])}for(var Ao=0;Ao<Lu.length;Ao++){var Do=Lu[Ao],i0=Do.toLowerCase(),o0=Do[0].toUpperCase()+Do.slice(1);Lt(i0,"on"+o0)}Lt(Dc,"onAnimationEnd");Lt(Fc,"onAnimationIteration");Lt(Bc,"onAnimationStart");Lt("dblclick","onDoubleClick");Lt("focusin","onFocus");Lt("focusout","onBlur");Lt(Uc,"onTransitionEnd");$n("onMouseEnter",["mouseout","mouseover"]);$n("onMouseLeave",["mouseout","mouseover"]);$n("onPointerEnter",["pointerout","pointerover"]);$n("onPointerLeave",["pointerout","pointerover"]);nn("onChange","change click focusin focusout input keydown keyup selectionchange".split(" "));nn("onSelect","focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" "));nn("onBeforeInput",["compositionend","keypress","textInput","paste"]);nn("onCompositionEnd","compositionend focusout keydown keypress keyup mousedown".split(" "));nn("onCompositionStart","compositionstart focusout keydown keypress keyup mousedown".split(" "));nn("onCompositionUpdate","compositionupdate focusout keydown keypress keyup mousedown".split(" "));var rr="abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),l0=new Set("cancel close invalid load scroll toggle".split(" ").concat(rr));function Mu(e,t,n){var r=e.type||"unknown-event";e.currentTarget=n,ip(r,t,void 0,e),e.currentTarget=null}function Vc(e,t){t=(t&4)!==0;for(var n=0;n<e.length;n++){var r=e[n],i=r.event;r=r.listeners;e:{var o=void 0;if(t)for(var l=r.length-1;0<=l;l--){var s=r[l],u=s.instance,d=s.currentTarget;if(s=s.listener,u!==o&&i.isPropagationStopped())break e;Mu(i,s,d),o=u}else for(l=0;l<r.length;l++){if(s=r[l],u=s.instance,d=s.currentTarget,s=s.listener,u!==o&&i.isPropagationStopped())break e;Mu(i,s,d),o=u}}}if(zi)throw e=kl,zi=!1,kl=null,e}function G(e,t){var n=t[Tl];n===void 0&&(n=t[Tl]=new Set);var r=e+"__bubble";n.has(r)||(Gc(t,e,2,!1),n.add(r))}function Fo(e,t,n){var r=0;t&&(r|=4),Gc(n,e,r,t)}var Jr="_reactListening"+Math.random().toString(36).slice(2);function Sr(e){if(!e[Jr]){e[Jr]=!0,Ja.forEach(function(n){n!=="selectionchange"&&(l0.has(n)||Fo(n,!1,e),Fo(n,!0,e))});var t=e.nodeType===9?e:e.ownerDocument;t===null||t[Jr]||(t[Jr]=!0,Fo("selectionchange",!1,t))}}function Gc(e,t,n,r){switch($c(t)){case 1:var i=wp;break;case 4:i=kp;break;default:i=ys}n=i.bind(null,t,n,e),i=void 0,!wl||t!=="touchstart"&&t!=="touchmove"&&t!=="wheel"||(i=!0),r?i!==void 0?e.addEventListener(t,n,{capture:!0,passive:i}):e.addEventListener(t,n,!0):i!==void 0?e.addEventListener(t,n,{passive:i}):e.addEventListener(t,n,!1)}function Bo(e,t,n,r,i){var o=r;if(!(t&1)&&!(t&2)&&r!==null)e:for(;;){if(r===null)return;var l=r.tag;if(l===3||l===4){var s=r.stateNode.containerInfo;if(s===i||s.nodeType===8&&s.parentNode===i)break;if(l===4)for(l=r.return;l!==null;){var u=l.tag;if((u===3||u===4)&&(u=l.stateNode.containerInfo,u===i||u.nodeType===8&&u.parentNode===i))return;l=l.return}for(;s!==null;){if(l=Ht(s),l===null)return;if(u=l.tag,u===5||u===6){r=o=l;continue e}s=s.parentNode}}r=r.return}pc(function(){var d=o,g=ms(n),m=[];e:{var h=Hc.get(e);if(h!==void 0){var w=ks,k=e;switch(e){case"keypress":if(pi(n)===0)break e;case"keydown":case"keyup":w=Op;break;case"focusin":k="focus",w=Mo;break;case"focusout":k="blur",w=Mo;break;case"beforeblur":case"afterblur":w=Mo;break;case"click":if(n.button===2)break e;case"auxclick":case"dblclick":case"mousedown":case"mousemove":case"mouseup":case"mouseout":case"mouseover":case"contextmenu":w=ku;break;case"drag":case"dragend":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"dragstart":case"drop":w=jp;break;case"touchcancel":case"touchend":case"touchmove":case"touchstart":w=Fp;break;case Dc:case Fc:case Bc:w=$p;break;case Uc:w=Up;break;case"scroll":w=Cp;break;case"wheel":w=Vp;break;case"copy":case"cut":case"paste":w=Pp;break;case"gotpointercapture":case"lostpointercapture":case"pointercancel":case"pointerdown":case"pointermove":case"pointerout":case"pointerover":case"pointerup":w=Su}var j=(t&4)!==0,R=!j&&e==="scroll",f=j?h!==null?h+"Capture":null:h;j=[];for(var c=d,p;c!==null;){p=c;var x=p.stateNode;if(p.tag===5&&x!==null&&(p=x,f!==null&&(x=xr(c,f),x!=null&&j.push(jr(c,x,p)))),R)break;c=c.return}0<j.length&&(h=new w(h,k,null,n,g),m.push({event:h,listeners:j}))}}if(!(t&7)){e:{if(h=e==="mouseover"||e==="pointerover",w=e==="mouseout"||e==="pointerout",h&&n!==vl&&(k=n.relatedTarget||n.fromElement)&&(Ht(k)||k[ut]))break e;if((w||h)&&(h=g.window===g?g:(h=g.ownerDocument)?h.defaultView||h.parentWindow:window,w?(k=n.relatedTarget||n.toElement,w=d,k=k?Ht(k):null,k!==null&&(R=rn(k),k!==R||k.tag!==5&&k.tag!==6)&&(k=null)):(w=null,k=d),w!==k)){if(j=ku,x="onMouseLeave",f="onMouseEnter",c="mouse",(e==="pointerout"||e==="pointerover")&&(j=Su,x="onPointerLeave",f="onPointerEnter",c="pointer"),R=w==null?h:fn(w),p=k==null?h:fn(k),h=new j(x,c+"leave",w,n,g),h.target=R,h.relatedTarget=p,x=null,Ht(g)===d&&(j=new j(f,c+"enter",k,n,g),j.target=p,j.relatedTarget=R,x=j),R=x,w&&k)t:{for(j=w,f=k,c=0,p=j;p;p=on(p))c++;for(p=0,x=f;x;x=on(x))p++;for(;0<c-p;)j=on(j),c--;for(;0<p-c;)f=on(f),p--;for(;c--;){if(j===f||f!==null&&j===f.alternate)break t;j=on(j),f=on(f)}j=null}else j=null;w!==null&&Ru(m,h,w,j,!1),k!==null&&R!==null&&Ru(m,R,k,j,!0)}}e:{if(h=d?fn(d):window,w=h.nodeName&&h.nodeName.toLowerCase(),w==="select"||w==="input"&&h.type==="file")var _=Xp;else if(_u(h))if(Mc)_=e0;else{_=qp;var E=Jp}else(w=h.nodeName)&&w.toLowerCase()==="input"&&(h.type==="checkbox"||h.type==="radio")&&(_=bp);if(_&&(_=_(e,d))){Lc(m,_,n,g);break e}E&&E(e,h,d),e==="focusout"&&(E=h._wrapperState)&&E.controlled&&h.type==="number"&&pl(h,"number",h.value)}switch(E=d?fn(d):window,e){case"focusin":(_u(E)||E.contentEditable==="true")&&(cn=E,El=d,ar=null);break;case"focusout":ar=El=cn=null;break;case"mousedown":_l=!0;break;case"contextmenu":case"mouseup":case"dragend":_l=!1,Tu(m,n,g);break;case"selectionchange":if(r0)break;case"keydown":case"keyup":Tu(m,n,g)}var C;if(Ss)e:{switch(e){case"compositionstart":var P="onCompositionStart";break e;case"compositionend":P="onCompositionEnd";break e;case"compositionupdate":P="onCompositionUpdate";break e}P=void 0}else an?Nc(e,n)&&(P="onCompositionEnd"):e==="keydown"&&n.keyCode===229&&(P="onCompositionStart");P&&(Pc&&n.locale!=="ko"&&(an||P!=="onCompositionStart"?P==="onCompositionEnd"&&an&&(C=zc()):(wt=g,ws="value"in wt?wt.value:wt.textContent,an=!0)),E=Mi(d,P),0<E.length&&(P=new Cu(P,e,null,n,g),m.push({event:P,listeners:E}),C?P.data=C:(C=Tc(n),C!==null&&(P.data=C)))),(C=Wp?Qp(e,n):Zp(e,n))&&(d=Mi(d,"onBeforeInput"),0<d.length&&(g=new Cu("onBeforeInput","beforeinput",null,n,g),m.push({event:g,listeners:d}),g.data=C))}Vc(m,t)})}function jr(e,t,n){return{instance:e,listener:t,currentTarget:n}}function Mi(e,t){for(var n=t+"Capture",r=[];e!==null;){var i=e,o=i.stateNode;i.tag===5&&o!==null&&(i=o,o=xr(e,n),o!=null&&r.unshift(jr(e,o,i)),o=xr(e,t),o!=null&&r.push(jr(e,o,i))),e=e.return}return r}function on(e){if(e===null)return null;do e=e.return;while(e&&e.tag!==5);return e||null}function Ru(e,t,n,r,i){for(var o=t._reactName,l=[];n!==null&&n!==r;){var s=n,u=s.alternate,d=s.stateNode;if(u!==null&&u===r)break;s.tag===5&&d!==null&&(s=d,i?(u=xr(n,o),u!=null&&l.unshift(jr(n,u,s))):i||(u=xr(n,o),u!=null&&l.push(jr(n,u,s)))),n=n.return}l.length!==0&&e.push({event:t,listeners:l})}var s0=/\r\n?/g,u0=/\u0000|\uFFFD/g;function Iu(e){return(typeof e=="string"?e:""+e).replace(s0,`
`).replace(u0,"")}function qr(e,t,n){if(t=Iu(t),Iu(e)!==t&&n)throw Error(S(425))}function Ri(){}var $l=null,zl=null;function Pl(e,t){return e==="textarea"||e==="noscript"||typeof t.children=="string"||typeof t.children=="number"||typeof t.dangerouslySetInnerHTML=="object"&&t.dangerouslySetInnerHTML!==null&&t.dangerouslySetInnerHTML.__html!=null}var Nl=typeof setTimeout=="function"?setTimeout:void 0,a0=typeof clearTimeout=="function"?clearTimeout:void 0,Ou=typeof Promise=="function"?Promise:void 0,c0=typeof queueMicrotask=="function"?queueMicrotask:typeof Ou<"u"?function(e){return Ou.resolve(null).then(e).catch(d0)}:Nl;function d0(e){setTimeout(function(){throw e})}function Uo(e,t){var n=t,r=0;do{var i=n.nextSibling;if(e.removeChild(n),i&&i.nodeType===8)if(n=i.data,n==="/$"){if(r===0){e.removeChild(i),wr(t);return}r--}else n!=="$"&&n!=="$?"&&n!=="$!"||r++;n=i}while(n);wr(t)}function Et(e){for(;e!=null;e=e.nextSibling){var t=e.nodeType;if(t===1||t===3)break;if(t===8){if(t=e.data,t==="$"||t==="$!"||t==="$?")break;if(t==="/$")return null}}return e}function Au(e){e=e.previousSibling;for(var t=0;e;){if(e.nodeType===8){var n=e.data;if(n==="$"||n==="$!"||n==="$?"){if(t===0)return e;t--}else n==="/$"&&t++}e=e.previousSibling}return null}var Un=Math.random().toString(36).slice(2),Je="__reactFiber$"+Un,Er="__reactProps$"+Un,ut="__reactContainer$"+Un,Tl="__reactEvents$"+Un,f0="__reactListeners$"+Un,p0="__reactHandles$"+Un;function Ht(e){var t=e[Je];if(t)return t;for(var n=e.parentNode;n;){if(t=n[ut]||n[Je]){if(n=t.alternate,t.child!==null||n!==null&&n.child!==null)for(e=Au(e);e!==null;){if(n=e[Je])return n;e=Au(e)}return t}e=n,n=e.parentNode}return null}function Ar(e){return e=e[Je]||e[ut],!e||e.tag!==5&&e.tag!==6&&e.tag!==13&&e.tag!==3?null:e}function fn(e){if(e.tag===5||e.tag===6)return e.stateNode;throw Error(S(33))}function oo(e){return e[Er]||null}var Ll=[],pn=-1;function Mt(e){return{current:e}}function Q(e){0>pn||(e.current=Ll[pn],Ll[pn]=null,pn--)}function V(e,t){pn++,Ll[pn]=e.current,e.current=t}var Tt={},fe=Mt(Tt),we=Mt(!1),Xt=Tt;function zn(e,t){var n=e.type.contextTypes;if(!n)return Tt;var r=e.stateNode;if(r&&r.__reactInternalMemoizedUnmaskedChildContext===t)return r.__reactInternalMemoizedMaskedChildContext;var i={},o;for(o in n)i[o]=t[o];return r&&(e=e.stateNode,e.__reactInternalMemoizedUnmaskedChildContext=t,e.__reactInternalMemoizedMaskedChildContext=i),i}function ke(e){return e=e.childContextTypes,e!=null}function Ii(){Q(we),Q(fe)}function Du(e,t,n){if(fe.current!==Tt)throw Error(S(168));V(fe,t),V(we,n)}function Wc(e,t,n){var r=e.stateNode;if(t=t.childContextTypes,typeof r.getChildContext!="function")return n;r=r.getChildContext();for(var i in r)if(!(i in t))throw Error(S(108,Jf(e)||"Unknown",i));return X({},n,r)}function Oi(e){return e=(e=e.stateNode)&&e.__reactInternalMemoizedMergedChildContext||Tt,Xt=fe.current,V(fe,e),V(we,we.current),!0}function Fu(e,t,n){var r=e.stateNode;if(!r)throw Error(S(169));n?(e=Wc(e,t,Xt),r.__reactInternalMemoizedMergedChildContext=e,Q(we),Q(fe),V(fe,e)):Q(we),V(we,n)}var rt=null,lo=!1,Ho=!1;function Qc(e){rt===null?rt=[e]:rt.push(e)}function h0(e){lo=!0,Qc(e)}function Rt(){if(!Ho&&rt!==null){Ho=!0;var e=0,t=F;try{var n=rt;for(F=1;e<n.length;e++){var r=n[e];do r=r(!0);while(r!==null)}rt=null,lo=!1}catch(i){throw rt!==null&&(rt=rt.slice(e+1)),xc(gs,Rt),i}finally{F=t,Ho=!1}}return null}var hn=[],mn=0,Ai=null,Di=0,Le=[],Me=0,Jt=null,it=1,ot="";function Bt(e,t){hn[mn++]=Di,hn[mn++]=Ai,Ai=e,Di=t}function Zc(e,t,n){Le[Me++]=it,Le[Me++]=ot,Le[Me++]=Jt,Jt=e;var r=it;e=ot;var i=32-Ge(r)-1;r&=~(1<<i),n+=1;var o=32-Ge(t)+i;if(30<o){var l=i-i%5;o=(r&(1<<l)-1).toString(32),r>>=l,i-=l,it=1<<32-Ge(t)+i|n<<i|r,ot=o+e}else it=1<<o|n<<i|r,ot=e}function Es(e){e.return!==null&&(Bt(e,1),Zc(e,1,0))}function _s(e){for(;e===Ai;)Ai=hn[--mn],hn[mn]=null,Di=hn[--mn],hn[mn]=null;for(;e===Jt;)Jt=Le[--Me],Le[Me]=null,ot=Le[--Me],Le[Me]=null,it=Le[--Me],Le[Me]=null}var ze=null,$e=null,Z=!1,Ve=null;function Kc(e,t){var n=Re(5,null,null,0);n.elementType="DELETED",n.stateNode=t,n.return=e,t=e.deletions,t===null?(e.deletions=[n],e.flags|=16):t.push(n)}function Bu(e,t){switch(e.tag){case 5:var n=e.type;return t=t.nodeType!==1||n.toLowerCase()!==t.nodeName.toLowerCase()?null:t,t!==null?(e.stateNode=t,ze=e,$e=Et(t.firstChild),!0):!1;case 6:return t=e.pendingProps===""||t.nodeType!==3?null:t,t!==null?(e.stateNode=t,ze=e,$e=null,!0):!1;case 13:return t=t.nodeType!==8?null:t,t!==null?(n=Jt!==null?{id:it,overflow:ot}:null,e.memoizedState={dehydrated:t,treeContext:n,retryLane:1073741824},n=Re(18,null,null,0),n.stateNode=t,n.return=e,e.child=n,ze=e,$e=null,!0):!1;default:return!1}}function Ml(e){return(e.mode&1)!==0&&(e.flags&128)===0}function Rl(e){if(Z){var t=$e;if(t){var n=t;if(!Bu(e,t)){if(Ml(e))throw Error(S(418));t=Et(n.nextSibling);var r=ze;t&&Bu(e,t)?Kc(r,n):(e.flags=e.flags&-4097|2,Z=!1,ze=e)}}else{if(Ml(e))throw Error(S(418));e.flags=e.flags&-4097|2,Z=!1,ze=e}}}function Uu(e){for(e=e.return;e!==null&&e.tag!==5&&e.tag!==3&&e.tag!==13;)e=e.return;ze=e}function br(e){if(e!==ze)return!1;if(!Z)return Uu(e),Z=!0,!1;var t;if((t=e.tag!==3)&&!(t=e.tag!==5)&&(t=e.type,t=t!=="head"&&t!=="body"&&!Pl(e.type,e.memoizedProps)),t&&(t=$e)){if(Ml(e))throw Yc(),Error(S(418));for(;t;)Kc(e,t),t=Et(t.nextSibling)}if(Uu(e),e.tag===13){if(e=e.memoizedState,e=e!==null?e.dehydrated:null,!e)throw Error(S(317));e:{for(e=e.nextSibling,t=0;e;){if(e.nodeType===8){var n=e.data;if(n==="/$"){if(t===0){$e=Et(e.nextSibling);break e}t--}else n!=="$"&&n!=="$!"&&n!=="$?"||t++}e=e.nextSibling}$e=null}}else $e=ze?Et(e.stateNode.nextSibling):null;return!0}function Yc(){for(var e=$e;e;)e=Et(e.nextSibling)}function Pn(){$e=ze=null,Z=!1}function $s(e){Ve===null?Ve=[e]:Ve.push(e)}var m0=dt.ReactCurrentBatchConfig;function Ue(e,t){if(e&&e.defaultProps){t=X({},t),e=e.defaultProps;for(var n in e)t[n]===void 0&&(t[n]=e[n]);return t}return t}var Fi=Mt(null),Bi=null,gn=null,zs=null;function Ps(){zs=gn=Bi=null}function Ns(e){var t=Fi.current;Q(Fi),e._currentValue=t}function Il(e,t,n){for(;e!==null;){var r=e.alternate;if((e.childLanes&t)!==t?(e.childLanes|=t,r!==null&&(r.childLanes|=t)):r!==null&&(r.childLanes&t)!==t&&(r.childLanes|=t),e===n)break;e=e.return}}function jn(e,t){Bi=e,zs=gn=null,e=e.dependencies,e!==null&&e.firstContext!==null&&(e.lanes&t&&(ve=!0),e.firstContext=null)}function Oe(e){var t=e._currentValue;if(zs!==e)if(e={context:e,memoizedValue:t,next:null},gn===null){if(Bi===null)throw Error(S(308));gn=e,Bi.dependencies={lanes:0,firstContext:e}}else gn=gn.next=e;return t}var Vt=null;function Ts(e){Vt===null?Vt=[e]:Vt.push(e)}function Xc(e,t,n,r){var i=t.interleaved;return i===null?(n.next=n,Ts(t)):(n.next=i.next,i.next=n),t.interleaved=n,at(e,r)}function at(e,t){e.lanes|=t;var n=e.alternate;for(n!==null&&(n.lanes|=t),n=e,e=e.return;e!==null;)e.childLanes|=t,n=e.alternate,n!==null&&(n.childLanes|=t),n=e,e=e.return;return n.tag===3?n.stateNode:null}var xt=!1;function Ls(e){e.updateQueue={baseState:e.memoizedState,firstBaseUpdate:null,lastBaseUpdate:null,shared:{pending:null,interleaved:null,lanes:0},effects:null}}function Jc(e,t){e=e.updateQueue,t.updateQueue===e&&(t.updateQueue={baseState:e.baseState,firstBaseUpdate:e.firstBaseUpdate,lastBaseUpdate:e.lastBaseUpdate,shared:e.shared,effects:e.effects})}function lt(e,t){return{eventTime:e,lane:t,tag:0,payload:null,callback:null,next:null}}function _t(e,t,n){var r=e.updateQueue;if(r===null)return null;if(r=r.shared,A&2){var i=r.pending;return i===null?t.next=t:(t.next=i.next,i.next=t),r.pending=t,at(e,n)}return i=r.interleaved,i===null?(t.next=t,Ts(r)):(t.next=i.next,i.next=t),r.interleaved=t,at(e,n)}function hi(e,t,n){if(t=t.updateQueue,t!==null&&(t=t.shared,(n&4194240)!==0)){var r=t.lanes;r&=e.pendingLanes,n|=r,t.lanes=n,xs(e,n)}}function Hu(e,t){var n=e.updateQueue,r=e.alternate;if(r!==null&&(r=r.updateQueue,n===r)){var i=null,o=null;if(n=n.firstBaseUpdate,n!==null){do{var l={eventTime:n.eventTime,lane:n.lane,tag:n.tag,payload:n.payload,callback:n.callback,next:null};o===null?i=o=l:o=o.next=l,n=n.next}while(n!==null);o===null?i=o=t:o=o.next=t}else i=o=t;n={baseState:r.baseState,firstBaseUpdate:i,lastBaseUpdate:o,shared:r.shared,effects:r.effects},e.updateQueue=n;return}e=n.lastBaseUpdate,e===null?n.firstBaseUpdate=t:e.next=t,n.lastBaseUpdate=t}function Ui(e,t,n,r){var i=e.updateQueue;xt=!1;var o=i.firstBaseUpdate,l=i.lastBaseUpdate,s=i.shared.pending;if(s!==null){i.shared.pending=null;var u=s,d=u.next;u.next=null,l===null?o=d:l.next=d,l=u;var g=e.alternate;g!==null&&(g=g.updateQueue,s=g.lastBaseUpdate,s!==l&&(s===null?g.firstBaseUpdate=d:s.next=d,g.lastBaseUpdate=u))}if(o!==null){var m=i.baseState;l=0,g=d=u=null,s=o;do{var h=s.lane,w=s.eventTime;if((r&h)===h){g!==null&&(g=g.next={eventTime:w,lane:0,tag:s.tag,payload:s.payload,callback:s.callback,next:null});e:{var k=e,j=s;switch(h=t,w=n,j.tag){case 1:if(k=j.payload,typeof k=="function"){m=k.call(w,m,h);break e}m=k;break e;case 3:k.flags=k.flags&-65537|128;case 0:if(k=j.payload,h=typeof k=="function"?k.call(w,m,h):k,h==null)break e;m=X({},m,h);break e;case 2:xt=!0}}s.callback!==null&&s.lane!==0&&(e.flags|=64,h=i.effects,h===null?i.effects=[s]:h.push(s))}else w={eventTime:w,lane:h,tag:s.tag,payload:s.payload,callback:s.callback,next:null},g===null?(d=g=w,u=m):g=g.next=w,l|=h;if(s=s.next,s===null){if(s=i.shared.pending,s===null)break;h=s,s=h.next,h.next=null,i.lastBaseUpdate=h,i.shared.pending=null}}while(!0);if(g===null&&(u=m),i.baseState=u,i.firstBaseUpdate=d,i.lastBaseUpdate=g,t=i.shared.interleaved,t!==null){i=t;do l|=i.lane,i=i.next;while(i!==t)}else o===null&&(i.shared.lanes=0);bt|=l,e.lanes=l,e.memoizedState=m}}function Vu(e,t,n){if(e=t.effects,t.effects=null,e!==null)for(t=0;t<e.length;t++){var r=e[t],i=r.callback;if(i!==null){if(r.callback=null,r=n,typeof i!="function")throw Error(S(191,i));i.call(r)}}}var qc=new Xa.Component().refs;function Ol(e,t,n,r){t=e.memoizedState,n=n(r,t),n=n==null?t:X({},t,n),e.memoizedState=n,e.lanes===0&&(e.updateQueue.baseState=n)}var so={isMounted:function(e){return(e=e._reactInternals)?rn(e)===e:!1},enqueueSetState:function(e,t,n){e=e._reactInternals;var r=he(),i=zt(e),o=lt(r,i);o.payload=t,n!=null&&(o.callback=n),t=_t(e,o,i),t!==null&&(We(t,e,i,r),hi(t,e,i))},enqueueReplaceState:function(e,t,n){e=e._reactInternals;var r=he(),i=zt(e),o=lt(r,i);o.tag=1,o.payload=t,n!=null&&(o.callback=n),t=_t(e,o,i),t!==null&&(We(t,e,i,r),hi(t,e,i))},enqueueForceUpdate:function(e,t){e=e._reactInternals;var n=he(),r=zt(e),i=lt(n,r);i.tag=2,t!=null&&(i.callback=t),t=_t(e,i,r),t!==null&&(We(t,e,r,n),hi(t,e,r))}};function Gu(e,t,n,r,i,o,l){return e=e.stateNode,typeof e.shouldComponentUpdate=="function"?e.shouldComponentUpdate(r,o,l):t.prototype&&t.prototype.isPureReactComponent?!Cr(n,r)||!Cr(i,o):!0}function bc(e,t,n){var r=!1,i=Tt,o=t.contextType;return typeof o=="object"&&o!==null?o=Oe(o):(i=ke(t)?Xt:fe.current,r=t.contextTypes,o=(r=r!=null)?zn(e,i):Tt),t=new t(n,o),e.memoizedState=t.state!==null&&t.state!==void 0?t.state:null,t.updater=so,e.stateNode=t,t._reactInternals=e,r&&(e=e.stateNode,e.__reactInternalMemoizedUnmaskedChildContext=i,e.__reactInternalMemoizedMaskedChildContext=o),t}function Wu(e,t,n,r){e=t.state,typeof t.componentWillReceiveProps=="function"&&t.componentWillReceiveProps(n,r),typeof t.UNSAFE_componentWillReceiveProps=="function"&&t.UNSAFE_componentWillReceiveProps(n,r),t.state!==e&&so.enqueueReplaceState(t,t.state,null)}function Al(e,t,n,r){var i=e.stateNode;i.props=n,i.state=e.memoizedState,i.refs=qc,Ls(e);var o=t.contextType;typeof o=="object"&&o!==null?i.context=Oe(o):(o=ke(t)?Xt:fe.current,i.context=zn(e,o)),i.state=e.memoizedState,o=t.getDerivedStateFromProps,typeof o=="function"&&(Ol(e,t,o,n),i.state=e.memoizedState),typeof t.getDerivedStateFromProps=="function"||typeof i.getSnapshotBeforeUpdate=="function"||typeof i.UNSAFE_componentWillMount!="function"&&typeof i.componentWillMount!="function"||(t=i.state,typeof i.componentWillMount=="function"&&i.componentWillMount(),typeof i.UNSAFE_componentWillMount=="function"&&i.UNSAFE_componentWillMount(),t!==i.state&&so.enqueueReplaceState(i,i.state,null),Ui(e,n,i,r),i.state=e.memoizedState),typeof i.componentDidMount=="function"&&(e.flags|=4194308)}function Xn(e,t,n){if(e=n.ref,e!==null&&typeof e!="function"&&typeof e!="object"){if(n._owner){if(n=n._owner,n){if(n.tag!==1)throw Error(S(309));var r=n.stateNode}if(!r)throw Error(S(147,e));var i=r,o=""+e;return t!==null&&t.ref!==null&&typeof t.ref=="function"&&t.ref._stringRef===o?t.ref:(t=function(l){var s=i.refs;s===qc&&(s=i.refs={}),l===null?delete s[o]:s[o]=l},t._stringRef=o,t)}if(typeof e!="string")throw Error(S(284));if(!n._owner)throw Error(S(290,e))}return e}function ei(e,t){throw e=Object.prototype.toString.call(t),Error(S(31,e==="[object Object]"?"object with keys {"+Object.keys(t).join(", ")+"}":e))}function Qu(e){var t=e._init;return t(e._payload)}function ed(e){function t(f,c){if(e){var p=f.deletions;p===null?(f.deletions=[c],f.flags|=16):p.push(c)}}function n(f,c){if(!e)return null;for(;c!==null;)t(f,c),c=c.sibling;return null}function r(f,c){for(f=new Map;c!==null;)c.key!==null?f.set(c.key,c):f.set(c.index,c),c=c.sibling;return f}function i(f,c){return f=Pt(f,c),f.index=0,f.sibling=null,f}function o(f,c,p){return f.index=p,e?(p=f.alternate,p!==null?(p=p.index,p<c?(f.flags|=2,c):p):(f.flags|=2,c)):(f.flags|=1048576,c)}function l(f){return e&&f.alternate===null&&(f.flags|=2),f}function s(f,c,p,x){return c===null||c.tag!==6?(c=Yo(p,f.mode,x),c.return=f,c):(c=i(c,p),c.return=f,c)}function u(f,c,p,x){var _=p.type;return _===un?g(f,c,p.props.children,x,p.key):c!==null&&(c.elementType===_||typeof _=="object"&&_!==null&&_.$$typeof===gt&&Qu(_)===c.type)?(x=i(c,p.props),x.ref=Xn(f,c,p),x.return=f,x):(x=wi(p.type,p.key,p.props,null,f.mode,x),x.ref=Xn(f,c,p),x.return=f,x)}function d(f,c,p,x){return c===null||c.tag!==4||c.stateNode.containerInfo!==p.containerInfo||c.stateNode.implementation!==p.implementation?(c=Xo(p,f.mode,x),c.return=f,c):(c=i(c,p.children||[]),c.return=f,c)}function g(f,c,p,x,_){return c===null||c.tag!==7?(c=Zt(p,f.mode,x,_),c.return=f,c):(c=i(c,p),c.return=f,c)}function m(f,c,p){if(typeof c=="string"&&c!==""||typeof c=="number")return c=Yo(""+c,f.mode,p),c.return=f,c;if(typeof c=="object"&&c!==null){switch(c.$$typeof){case Vr:return p=wi(c.type,c.key,c.props,null,f.mode,p),p.ref=Xn(f,null,c),p.return=f,p;case sn:return c=Xo(c,f.mode,p),c.return=f,c;case gt:var x=c._init;return m(f,x(c._payload),p)}if(tr(c)||Wn(c))return c=Zt(c,f.mode,p,null),c.return=f,c;ei(f,c)}return null}function h(f,c,p,x){var _=c!==null?c.key:null;if(typeof p=="string"&&p!==""||typeof p=="number")return _!==null?null:s(f,c,""+p,x);if(typeof p=="object"&&p!==null){switch(p.$$typeof){case Vr:return p.key===_?u(f,c,p,x):null;case sn:return p.key===_?d(f,c,p,x):null;case gt:return _=p._init,h(f,c,_(p._payload),x)}if(tr(p)||Wn(p))return _!==null?null:g(f,c,p,x,null);ei(f,p)}return null}function w(f,c,p,x,_){if(typeof x=="string"&&x!==""||typeof x=="number")return f=f.get(p)||null,s(c,f,""+x,_);if(typeof x=="object"&&x!==null){switch(x.$$typeof){case Vr:return f=f.get(x.key===null?p:x.key)||null,u(c,f,x,_);case sn:return f=f.get(x.key===null?p:x.key)||null,d(c,f,x,_);case gt:var E=x._init;return w(f,c,p,E(x._payload),_)}if(tr(x)||Wn(x))return f=f.get(p)||null,g(c,f,x,_,null);ei(c,x)}return null}function k(f,c,p,x){for(var _=null,E=null,C=c,P=c=0,H=null;C!==null&&P<p.length;P++){C.index>P?(H=C,C=null):H=C.sibling;var I=h(f,C,p[P],x);if(I===null){C===null&&(C=H);break}e&&C&&I.alternate===null&&t(f,C),c=o(I,c,P),E===null?_=I:E.sibling=I,E=I,C=H}if(P===p.length)return n(f,C),Z&&Bt(f,P),_;if(C===null){for(;P<p.length;P++)C=m(f,p[P],x),C!==null&&(c=o(C,c,P),E===null?_=C:E.sibling=C,E=C);return Z&&Bt(f,P),_}for(C=r(f,C);P<p.length;P++)H=w(C,f,P,p[P],x),H!==null&&(e&&H.alternate!==null&&C.delete(H.key===null?P:H.key),c=o(H,c,P),E===null?_=H:E.sibling=H,E=H);return e&&C.forEach(function(Se){return t(f,Se)}),Z&&Bt(f,P),_}function j(f,c,p,x){var _=Wn(p);if(typeof _!="function")throw Error(S(150));if(p=_.call(p),p==null)throw Error(S(151));for(var E=_=null,C=c,P=c=0,H=null,I=p.next();C!==null&&!I.done;P++,I=p.next()){C.index>P?(H=C,C=null):H=C.sibling;var Se=h(f,C,I.value,x);if(Se===null){C===null&&(C=H);break}e&&C&&Se.alternate===null&&t(f,C),c=o(Se,c,P),E===null?_=Se:E.sibling=Se,E=Se,C=H}if(I.done)return n(f,C),Z&&Bt(f,P),_;if(C===null){for(;!I.done;P++,I=p.next())I=m(f,I.value,x),I!==null&&(c=o(I,c,P),E===null?_=I:E.sibling=I,E=I);return Z&&Bt(f,P),_}for(C=r(f,C);!I.done;P++,I=p.next())I=w(C,f,P,I.value,x),I!==null&&(e&&I.alternate!==null&&C.delete(I.key===null?P:I.key),c=o(I,c,P),E===null?_=I:E.sibling=I,E=I);return e&&C.forEach(function(It){return t(f,It)}),Z&&Bt(f,P),_}function R(f,c,p,x){if(typeof p=="object"&&p!==null&&p.type===un&&p.key===null&&(p=p.props.children),typeof p=="object"&&p!==null){switch(p.$$typeof){case Vr:e:{for(var _=p.key,E=c;E!==null;){if(E.key===_){if(_=p.type,_===un){if(E.tag===7){n(f,E.sibling),c=i(E,p.props.children),c.return=f,f=c;break e}}else if(E.elementType===_||typeof _=="object"&&_!==null&&_.$$typeof===gt&&Qu(_)===E.type){n(f,E.sibling),c=i(E,p.props),c.ref=Xn(f,E,p),c.return=f,f=c;break e}n(f,E);break}else t(f,E);E=E.sibling}p.type===un?(c=Zt(p.props.children,f.mode,x,p.key),c.return=f,f=c):(x=wi(p.type,p.key,p.props,null,f.mode,x),x.ref=Xn(f,c,p),x.return=f,f=x)}return l(f);case sn:e:{for(E=p.key;c!==null;){if(c.key===E)if(c.tag===4&&c.stateNode.containerInfo===p.containerInfo&&c.stateNode.implementation===p.implementation){n(f,c.sibling),c=i(c,p.children||[]),c.return=f,f=c;break e}else{n(f,c);break}else t(f,c);c=c.sibling}c=Xo(p,f.mode,x),c.return=f,f=c}return l(f);case gt:return E=p._init,R(f,c,E(p._payload),x)}if(tr(p))return k(f,c,p,x);if(Wn(p))return j(f,c,p,x);ei(f,p)}return typeof p=="string"&&p!==""||typeof p=="number"?(p=""+p,c!==null&&c.tag===6?(n(f,c.sibling),c=i(c,p),c.return=f,f=c):(n(f,c),c=Yo(p,f.mode,x),c.return=f,f=c),l(f)):n(f,c)}return R}var Nn=ed(!0),td=ed(!1),Dr={},be=Mt(Dr),_r=Mt(Dr),$r=Mt(Dr);function Gt(e){if(e===Dr)throw Error(S(174));return e}function Ms(e,t){switch(V($r,t),V(_r,e),V(be,Dr),e=t.nodeType,e){case 9:case 11:t=(t=t.documentElement)?t.namespaceURI:ml(null,"");break;default:e=e===8?t.parentNode:t,t=e.namespaceURI||null,e=e.tagName,t=ml(t,e)}Q(be),V(be,t)}function Tn(){Q(be),Q(_r),Q($r)}function nd(e){Gt($r.current);var t=Gt(be.current),n=ml(t,e.type);t!==n&&(V(_r,e),V(be,n))}function Rs(e){_r.current===e&&(Q(be),Q(_r))}var K=Mt(0);function Hi(e){for(var t=e;t!==null;){if(t.tag===13){var n=t.memoizedState;if(n!==null&&(n=n.dehydrated,n===null||n.data==="$?"||n.data==="$!"))return t}else if(t.tag===19&&t.memoizedProps.revealOrder!==void 0){if(t.flags&128)return t}else if(t.child!==null){t.child.return=t,t=t.child;continue}if(t===e)break;for(;t.sibling===null;){if(t.return===null||t.return===e)return null;t=t.return}t.sibling.return=t.return,t=t.sibling}return null}var Vo=[];function Is(){for(var e=0;e<Vo.length;e++)Vo[e]._workInProgressVersionPrimary=null;Vo.length=0}var mi=dt.ReactCurrentDispatcher,Go=dt.ReactCurrentBatchConfig,qt=0,Y=null,te=null,re=null,Vi=!1,cr=!1,zr=0,g0=0;function ae(){throw Error(S(321))}function Os(e,t){if(t===null)return!1;for(var n=0;n<t.length&&n<e.length;n++)if(!Ze(e[n],t[n]))return!1;return!0}function As(e,t,n,r,i,o){if(qt=o,Y=t,t.memoizedState=null,t.updateQueue=null,t.lanes=0,mi.current=e===null||e.memoizedState===null?w0:k0,e=n(r,i),cr){o=0;do{if(cr=!1,zr=0,25<=o)throw Error(S(301));o+=1,re=te=null,t.updateQueue=null,mi.current=C0,e=n(r,i)}while(cr)}if(mi.current=Gi,t=te!==null&&te.next!==null,qt=0,re=te=Y=null,Vi=!1,t)throw Error(S(300));return e}function Ds(){var e=zr!==0;return zr=0,e}function Ye(){var e={memoizedState:null,baseState:null,baseQueue:null,queue:null,next:null};return re===null?Y.memoizedState=re=e:re=re.next=e,re}function Ae(){if(te===null){var e=Y.alternate;e=e!==null?e.memoizedState:null}else e=te.next;var t=re===null?Y.memoizedState:re.next;if(t!==null)re=t,te=e;else{if(e===null)throw Error(S(310));te=e,e={memoizedState:te.memoizedState,baseState:te.baseState,baseQueue:te.baseQueue,queue:te.queue,next:null},re===null?Y.memoizedState=re=e:re=re.next=e}return re}function Pr(e,t){return typeof t=="function"?t(e):t}function Wo(e){var t=Ae(),n=t.queue;if(n===null)throw Error(S(311));n.lastRenderedReducer=e;var r=te,i=r.baseQueue,o=n.pending;if(o!==null){if(i!==null){var l=i.next;i.next=o.next,o.next=l}r.baseQueue=i=o,n.pending=null}if(i!==null){o=i.next,r=r.baseState;var s=l=null,u=null,d=o;do{var g=d.lane;if((qt&g)===g)u!==null&&(u=u.next={lane:0,action:d.action,hasEagerState:d.hasEagerState,eagerState:d.eagerState,next:null}),r=d.hasEagerState?d.eagerState:e(r,d.action);else{var m={lane:g,action:d.action,hasEagerState:d.hasEagerState,eagerState:d.eagerState,next:null};u===null?(s=u=m,l=r):u=u.next=m,Y.lanes|=g,bt|=g}d=d.next}while(d!==null&&d!==o);u===null?l=r:u.next=s,Ze(r,t.memoizedState)||(ve=!0),t.memoizedState=r,t.baseState=l,t.baseQueue=u,n.lastRenderedState=r}if(e=n.interleaved,e!==null){i=e;do o=i.lane,Y.lanes|=o,bt|=o,i=i.next;while(i!==e)}else i===null&&(n.lanes=0);return[t.memoizedState,n.dispatch]}function Qo(e){var t=Ae(),n=t.queue;if(n===null)throw Error(S(311));n.lastRenderedReducer=e;var r=n.dispatch,i=n.pending,o=t.memoizedState;if(i!==null){n.pending=null;var l=i=i.next;do o=e(o,l.action),l=l.next;while(l!==i);Ze(o,t.memoizedState)||(ve=!0),t.memoizedState=o,t.baseQueue===null&&(t.baseState=o),n.lastRenderedState=o}return[o,r]}function rd(){}function id(e,t){var n=Y,r=Ae(),i=t(),o=!Ze(r.memoizedState,i);if(o&&(r.memoizedState=i,ve=!0),r=r.queue,Fs(sd.bind(null,n,r,e),[e]),r.getSnapshot!==t||o||re!==null&&re.memoizedState.tag&1){if(n.flags|=2048,Nr(9,ld.bind(null,n,r,i,t),void 0,null),oe===null)throw Error(S(349));qt&30||od(n,t,i)}return i}function od(e,t,n){e.flags|=16384,e={getSnapshot:t,value:n},t=Y.updateQueue,t===null?(t={lastEffect:null,stores:null},Y.updateQueue=t,t.stores=[e]):(n=t.stores,n===null?t.stores=[e]:n.push(e))}function ld(e,t,n,r){t.value=n,t.getSnapshot=r,ud(t)&&ad(e)}function sd(e,t,n){return n(function(){ud(t)&&ad(e)})}function ud(e){var t=e.getSnapshot;e=e.value;try{var n=t();return!Ze(e,n)}catch{return!0}}function ad(e){var t=at(e,1);t!==null&&We(t,e,1,-1)}function Zu(e){var t=Ye();return typeof e=="function"&&(e=e()),t.memoizedState=t.baseState=e,e={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:Pr,lastRenderedState:e},t.queue=e,e=e.dispatch=y0.bind(null,Y,e),[t.memoizedState,e]}function Nr(e,t,n,r){return e={tag:e,create:t,destroy:n,deps:r,next:null},t=Y.updateQueue,t===null?(t={lastEffect:null,stores:null},Y.updateQueue=t,t.lastEffect=e.next=e):(n=t.lastEffect,n===null?t.lastEffect=e.next=e:(r=n.next,n.next=e,e.next=r,t.lastEffect=e)),e}function cd(){return Ae().memoizedState}function gi(e,t,n,r){var i=Ye();Y.flags|=e,i.memoizedState=Nr(1|t,n,void 0,r===void 0?null:r)}function uo(e,t,n,r){var i=Ae();r=r===void 0?null:r;var o=void 0;if(te!==null){var l=te.memoizedState;if(o=l.destroy,r!==null&&Os(r,l.deps)){i.memoizedState=Nr(t,n,o,r);return}}Y.flags|=e,i.memoizedState=Nr(1|t,n,o,r)}function Ku(e,t){return gi(8390656,8,e,t)}function Fs(e,t){return uo(2048,8,e,t)}function dd(e,t){return uo(4,2,e,t)}function fd(e,t){return uo(4,4,e,t)}function pd(e,t){if(typeof t=="function")return e=e(),t(e),function(){t(null)};if(t!=null)return e=e(),t.current=e,function(){t.current=null}}function hd(e,t,n){return n=n!=null?n.concat([e]):null,uo(4,4,pd.bind(null,t,e),n)}function Bs(){}function md(e,t){var n=Ae();t=t===void 0?null:t;var r=n.memoizedState;return r!==null&&t!==null&&Os(t,r[1])?r[0]:(n.memoizedState=[e,t],e)}function gd(e,t){var n=Ae();t=t===void 0?null:t;var r=n.memoizedState;return r!==null&&t!==null&&Os(t,r[1])?r[0]:(e=e(),n.memoizedState=[e,t],e)}function xd(e,t,n){return qt&21?(Ze(n,t)||(n=wc(),Y.lanes|=n,bt|=n,e.baseState=!0),t):(e.baseState&&(e.baseState=!1,ve=!0),e.memoizedState=n)}function x0(e,t){var n=F;F=n!==0&&4>n?n:4,e(!0);var r=Go.transition;Go.transition={};try{e(!1),t()}finally{F=n,Go.transition=r}}function vd(){return Ae().memoizedState}function v0(e,t,n){var r=zt(e);if(n={lane:r,action:n,hasEagerState:!1,eagerState:null,next:null},yd(e))wd(t,n);else if(n=Xc(e,t,n,r),n!==null){var i=he();We(n,e,r,i),kd(n,t,r)}}function y0(e,t,n){var r=zt(e),i={lane:r,action:n,hasEagerState:!1,eagerState:null,next:null};if(yd(e))wd(t,i);else{var o=e.alternate;if(e.lanes===0&&(o===null||o.lanes===0)&&(o=t.lastRenderedReducer,o!==null))try{var l=t.lastRenderedState,s=o(l,n);if(i.hasEagerState=!0,i.eagerState=s,Ze(s,l)){var u=t.interleaved;u===null?(i.next=i,Ts(t)):(i.next=u.next,u.next=i),t.interleaved=i;return}}catch{}finally{}n=Xc(e,t,i,r),n!==null&&(i=he(),We(n,e,r,i),kd(n,t,r))}}function yd(e){var t=e.alternate;return e===Y||t!==null&&t===Y}function wd(e,t){cr=Vi=!0;var n=e.pending;n===null?t.next=t:(t.next=n.next,n.next=t),e.pending=t}function kd(e,t,n){if(n&4194240){var r=t.lanes;r&=e.pendingLanes,n|=r,t.lanes=n,xs(e,n)}}var Gi={readContext:Oe,useCallback:ae,useContext:ae,useEffect:ae,useImperativeHandle:ae,useInsertionEffect:ae,useLayoutEffect:ae,useMemo:ae,useReducer:ae,useRef:ae,useState:ae,useDebugValue:ae,useDeferredValue:ae,useTransition:ae,useMutableSource:ae,useSyncExternalStore:ae,useId:ae,unstable_isNewReconciler:!1},w0={readContext:Oe,useCallback:function(e,t){return Ye().memoizedState=[e,t===void 0?null:t],e},useContext:Oe,useEffect:Ku,useImperativeHandle:function(e,t,n){return n=n!=null?n.concat([e]):null,gi(4194308,4,pd.bind(null,t,e),n)},useLayoutEffect:function(e,t){return gi(4194308,4,e,t)},useInsertionEffect:function(e,t){return gi(4,2,e,t)},useMemo:function(e,t){var n=Ye();return t=t===void 0?null:t,e=e(),n.memoizedState=[e,t],e},useReducer:function(e,t,n){var r=Ye();return t=n!==void 0?n(t):t,r.memoizedState=r.baseState=t,e={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:e,lastRenderedState:t},r.queue=e,e=e.dispatch=v0.bind(null,Y,e),[r.memoizedState,e]},useRef:function(e){var t=Ye();return e={current:e},t.memoizedState=e},useState:Zu,useDebugValue:Bs,useDeferredValue:function(e){return Ye().memoizedState=e},useTransition:function(){var e=Zu(!1),t=e[0];return e=x0.bind(null,e[1]),Ye().memoizedState=e,[t,e]},useMutableSource:function(){},useSyncExternalStore:function(e,t,n){var r=Y,i=Ye();if(Z){if(n===void 0)throw Error(S(407));n=n()}else{if(n=t(),oe===null)throw Error(S(349));qt&30||od(r,t,n)}i.memoizedState=n;var o={value:n,getSnapshot:t};return i.queue=o,Ku(sd.bind(null,r,o,e),[e]),r.flags|=2048,Nr(9,ld.bind(null,r,o,n,t),void 0,null),n},useId:function(){var e=Ye(),t=oe.identifierPrefix;if(Z){var n=ot,r=it;n=(r&~(1<<32-Ge(r)-1)).toString(32)+n,t=":"+t+"R"+n,n=zr++,0<n&&(t+="H"+n.toString(32)),t+=":"}else n=g0++,t=":"+t+"r"+n.toString(32)+":";return e.memoizedState=t},unstable_isNewReconciler:!1},k0={readContext:Oe,useCallback:md,useContext:Oe,useEffect:Fs,useImperativeHandle:hd,useInsertionEffect:dd,useLayoutEffect:fd,useMemo:gd,useReducer:Wo,useRef:cd,useState:function(){return Wo(Pr)},useDebugValue:Bs,useDeferredValue:function(e){var t=Ae();return xd(t,te.memoizedState,e)},useTransition:function(){var e=Wo(Pr)[0],t=Ae().memoizedState;return[e,t]},useMutableSource:rd,useSyncExternalStore:id,useId:vd,unstable_isNewReconciler:!1},C0={readContext:Oe,useCallback:md,useContext:Oe,useEffect:Fs,useImperativeHandle:hd,useInsertionEffect:dd,useLayoutEffect:fd,useMemo:gd,useReducer:Qo,useRef:cd,useState:function(){return Qo(Pr)},useDebugValue:Bs,useDeferredValue:function(e){var t=Ae();return te===null?t.memoizedState=e:xd(t,te.memoizedState,e)},useTransition:function(){var e=Qo(Pr)[0],t=Ae().memoizedState;return[e,t]},useMutableSource:rd,useSyncExternalStore:id,useId:vd,unstable_isNewReconciler:!1};function Ln(e,t){try{var n="",r=t;do n+=Xf(r),r=r.return;while(r);var i=n}catch(o){i=`
Error generating stack: `+o.message+`
`+o.stack}return{value:e,source:t,stack:i,digest:null}}function Zo(e,t,n){return{value:e,source:null,stack:n??null,digest:t??null}}function Dl(e,t){try{console.error(t.value)}catch(n){setTimeout(function(){throw n})}}var S0=typeof WeakMap=="function"?WeakMap:Map;function Cd(e,t,n){n=lt(-1,n),n.tag=3,n.payload={element:null};var r=t.value;return n.callback=function(){Qi||(Qi=!0,Kl=r),Dl(e,t)},n}function Sd(e,t,n){n=lt(-1,n),n.tag=3;var r=e.type.getDerivedStateFromError;if(typeof r=="function"){var i=t.value;n.payload=function(){return r(i)},n.callback=function(){Dl(e,t)}}var o=e.stateNode;return o!==null&&typeof o.componentDidCatch=="function"&&(n.callback=function(){Dl(e,t),typeof r!="function"&&($t===null?$t=new Set([this]):$t.add(this));var l=t.stack;this.componentDidCatch(t.value,{componentStack:l!==null?l:""})}),n}function Yu(e,t,n){var r=e.pingCache;if(r===null){r=e.pingCache=new S0;var i=new Set;r.set(t,i)}else i=r.get(t),i===void 0&&(i=new Set,r.set(t,i));i.has(n)||(i.add(n),e=A0.bind(null,e,t,n),t.then(e,e))}function Xu(e){do{var t;if((t=e.tag===13)&&(t=e.memoizedState,t=t!==null?t.dehydrated!==null:!0),t)return e;e=e.return}while(e!==null);return null}function Ju(e,t,n,r,i){return e.mode&1?(e.flags|=65536,e.lanes=i,e):(e===t?e.flags|=65536:(e.flags|=128,n.flags|=131072,n.flags&=-52805,n.tag===1&&(n.alternate===null?n.tag=17:(t=lt(-1,1),t.tag=2,_t(n,t,1))),n.lanes|=1),e)}var j0=dt.ReactCurrentOwner,ve=!1;function pe(e,t,n,r){t.child=e===null?td(t,null,n,r):Nn(t,e.child,n,r)}function qu(e,t,n,r,i){n=n.render;var o=t.ref;return jn(t,i),r=As(e,t,n,r,o,i),n=Ds(),e!==null&&!ve?(t.updateQueue=e.updateQueue,t.flags&=-2053,e.lanes&=~i,ct(e,t,i)):(Z&&n&&Es(t),t.flags|=1,pe(e,t,r,i),t.child)}function bu(e,t,n,r,i){if(e===null){var o=n.type;return typeof o=="function"&&!Ks(o)&&o.defaultProps===void 0&&n.compare===null&&n.defaultProps===void 0?(t.tag=15,t.type=o,jd(e,t,o,r,i)):(e=wi(n.type,null,r,t,t.mode,i),e.ref=t.ref,e.return=t,t.child=e)}if(o=e.child,!(e.lanes&i)){var l=o.memoizedProps;if(n=n.compare,n=n!==null?n:Cr,n(l,r)&&e.ref===t.ref)return ct(e,t,i)}return t.flags|=1,e=Pt(o,r),e.ref=t.ref,e.return=t,t.child=e}function jd(e,t,n,r,i){if(e!==null){var o=e.memoizedProps;if(Cr(o,r)&&e.ref===t.ref)if(ve=!1,t.pendingProps=r=o,(e.lanes&i)!==0)e.flags&131072&&(ve=!0);else return t.lanes=e.lanes,ct(e,t,i)}return Fl(e,t,n,r,i)}function Ed(e,t,n){var r=t.pendingProps,i=r.children,o=e!==null?e.memoizedState:null;if(r.mode==="hidden")if(!(t.mode&1))t.memoizedState={baseLanes:0,cachePool:null,transitions:null},V(vn,_e),_e|=n;else{if(!(n&1073741824))return e=o!==null?o.baseLanes|n:n,t.lanes=t.childLanes=1073741824,t.memoizedState={baseLanes:e,cachePool:null,transitions:null},t.updateQueue=null,V(vn,_e),_e|=e,null;t.memoizedState={baseLanes:0,cachePool:null,transitions:null},r=o!==null?o.baseLanes:n,V(vn,_e),_e|=r}else o!==null?(r=o.baseLanes|n,t.memoizedState=null):r=n,V(vn,_e),_e|=r;return pe(e,t,i,n),t.child}function _d(e,t){var n=t.ref;(e===null&&n!==null||e!==null&&e.ref!==n)&&(t.flags|=512,t.flags|=2097152)}function Fl(e,t,n,r,i){var o=ke(n)?Xt:fe.current;return o=zn(t,o),jn(t,i),n=As(e,t,n,r,o,i),r=Ds(),e!==null&&!ve?(t.updateQueue=e.updateQueue,t.flags&=-2053,e.lanes&=~i,ct(e,t,i)):(Z&&r&&Es(t),t.flags|=1,pe(e,t,n,i),t.child)}function ea(e,t,n,r,i){if(ke(n)){var o=!0;Oi(t)}else o=!1;if(jn(t,i),t.stateNode===null)xi(e,t),bc(t,n,r),Al(t,n,r,i),r=!0;else if(e===null){var l=t.stateNode,s=t.memoizedProps;l.props=s;var u=l.context,d=n.contextType;typeof d=="object"&&d!==null?d=Oe(d):(d=ke(n)?Xt:fe.current,d=zn(t,d));var g=n.getDerivedStateFromProps,m=typeof g=="function"||typeof l.getSnapshotBeforeUpdate=="function";m||typeof l.UNSAFE_componentWillReceiveProps!="function"&&typeof l.componentWillReceiveProps!="function"||(s!==r||u!==d)&&Wu(t,l,r,d),xt=!1;var h=t.memoizedState;l.state=h,Ui(t,r,l,i),u=t.memoizedState,s!==r||h!==u||we.current||xt?(typeof g=="function"&&(Ol(t,n,g,r),u=t.memoizedState),(s=xt||Gu(t,n,s,r,h,u,d))?(m||typeof l.UNSAFE_componentWillMount!="function"&&typeof l.componentWillMount!="function"||(typeof l.componentWillMount=="function"&&l.componentWillMount(),typeof l.UNSAFE_componentWillMount=="function"&&l.UNSAFE_componentWillMount()),typeof l.componentDidMount=="function"&&(t.flags|=4194308)):(typeof l.componentDidMount=="function"&&(t.flags|=4194308),t.memoizedProps=r,t.memoizedState=u),l.props=r,l.state=u,l.context=d,r=s):(typeof l.componentDidMount=="function"&&(t.flags|=4194308),r=!1)}else{l=t.stateNode,Jc(e,t),s=t.memoizedProps,d=t.type===t.elementType?s:Ue(t.type,s),l.props=d,m=t.pendingProps,h=l.context,u=n.contextType,typeof u=="object"&&u!==null?u=Oe(u):(u=ke(n)?Xt:fe.current,u=zn(t,u));var w=n.getDerivedStateFromProps;(g=typeof w=="function"||typeof l.getSnapshotBeforeUpdate=="function")||typeof l.UNSAFE_componentWillReceiveProps!="function"&&typeof l.componentWillReceiveProps!="function"||(s!==m||h!==u)&&Wu(t,l,r,u),xt=!1,h=t.memoizedState,l.state=h,Ui(t,r,l,i);var k=t.memoizedState;s!==m||h!==k||we.current||xt?(typeof w=="function"&&(Ol(t,n,w,r),k=t.memoizedState),(d=xt||Gu(t,n,d,r,h,k,u)||!1)?(g||typeof l.UNSAFE_componentWillUpdate!="function"&&typeof l.componentWillUpdate!="function"||(typeof l.componentWillUpdate=="function"&&l.componentWillUpdate(r,k,u),typeof l.UNSAFE_componentWillUpdate=="function"&&l.UNSAFE_componentWillUpdate(r,k,u)),typeof l.componentDidUpdate=="function"&&(t.flags|=4),typeof l.getSnapshotBeforeUpdate=="function"&&(t.flags|=1024)):(typeof l.componentDidUpdate!="function"||s===e.memoizedProps&&h===e.memoizedState||(t.flags|=4),typeof l.getSnapshotBeforeUpdate!="function"||s===e.memoizedProps&&h===e.memoizedState||(t.flags|=1024),t.memoizedProps=r,t.memoizedState=k),l.props=r,l.state=k,l.context=u,r=d):(typeof l.componentDidUpdate!="function"||s===e.memoizedProps&&h===e.memoizedState||(t.flags|=4),typeof l.getSnapshotBeforeUpdate!="function"||s===e.memoizedProps&&h===e.memoizedState||(t.flags|=1024),r=!1)}return Bl(e,t,n,r,o,i)}function Bl(e,t,n,r,i,o){_d(e,t);var l=(t.flags&128)!==0;if(!r&&!l)return i&&Fu(t,n,!1),ct(e,t,o);r=t.stateNode,j0.current=t;var s=l&&typeof n.getDerivedStateFromError!="function"?null:r.render();return t.flags|=1,e!==null&&l?(t.child=Nn(t,e.child,null,o),t.child=Nn(t,null,s,o)):pe(e,t,s,o),t.memoizedState=r.state,i&&Fu(t,n,!0),t.child}function $d(e){var t=e.stateNode;t.pendingContext?Du(e,t.pendingContext,t.pendingContext!==t.context):t.context&&Du(e,t.context,!1),Ms(e,t.containerInfo)}function ta(e,t,n,r,i){return Pn(),$s(i),t.flags|=256,pe(e,t,n,r),t.child}var Ul={dehydrated:null,treeContext:null,retryLane:0};function Hl(e){return{baseLanes:e,cachePool:null,transitions:null}}function zd(e,t,n){var r=t.pendingProps,i=K.current,o=!1,l=(t.flags&128)!==0,s;if((s=l)||(s=e!==null&&e.memoizedState===null?!1:(i&2)!==0),s?(o=!0,t.flags&=-129):(e===null||e.memoizedState!==null)&&(i|=1),V(K,i&1),e===null)return Rl(t),e=t.memoizedState,e!==null&&(e=e.dehydrated,e!==null)?(t.mode&1?e.data==="$!"?t.lanes=8:t.lanes=1073741824:t.lanes=1,null):(l=r.children,e=r.fallback,o?(r=t.mode,o=t.child,l={mode:"hidden",children:l},!(r&1)&&o!==null?(o.childLanes=0,o.pendingProps=l):o=fo(l,r,0,null),e=Zt(e,r,n,null),o.return=t,e.return=t,o.sibling=e,t.child=o,t.child.memoizedState=Hl(n),t.memoizedState=Ul,e):Us(t,l));if(i=e.memoizedState,i!==null&&(s=i.dehydrated,s!==null))return E0(e,t,l,r,s,i,n);if(o){o=r.fallback,l=t.mode,i=e.child,s=i.sibling;var u={mode:"hidden",children:r.children};return!(l&1)&&t.child!==i?(r=t.child,r.childLanes=0,r.pendingProps=u,t.deletions=null):(r=Pt(i,u),r.subtreeFlags=i.subtreeFlags&14680064),s!==null?o=Pt(s,o):(o=Zt(o,l,n,null),o.flags|=2),o.return=t,r.return=t,r.sibling=o,t.child=r,r=o,o=t.child,l=e.child.memoizedState,l=l===null?Hl(n):{baseLanes:l.baseLanes|n,cachePool:null,transitions:l.transitions},o.memoizedState=l,o.childLanes=e.childLanes&~n,t.memoizedState=Ul,r}return o=e.child,e=o.sibling,r=Pt(o,{mode:"visible",children:r.children}),!(t.mode&1)&&(r.lanes=n),r.return=t,r.sibling=null,e!==null&&(n=t.deletions,n===null?(t.deletions=[e],t.flags|=16):n.push(e)),t.child=r,t.memoizedState=null,r}function Us(e,t){return t=fo({mode:"visible",children:t},e.mode,0,null),t.return=e,e.child=t}function ti(e,t,n,r){return r!==null&&$s(r),Nn(t,e.child,null,n),e=Us(t,t.pendingProps.children),e.flags|=2,t.memoizedState=null,e}function E0(e,t,n,r,i,o,l){if(n)return t.flags&256?(t.flags&=-257,r=Zo(Error(S(422))),ti(e,t,l,r)):t.memoizedState!==null?(t.child=e.child,t.flags|=128,null):(o=r.fallback,i=t.mode,r=fo({mode:"visible",children:r.children},i,0,null),o=Zt(o,i,l,null),o.flags|=2,r.return=t,o.return=t,r.sibling=o,t.child=r,t.mode&1&&Nn(t,e.child,null,l),t.child.memoizedState=Hl(l),t.memoizedState=Ul,o);if(!(t.mode&1))return ti(e,t,l,null);if(i.data==="$!"){if(r=i.nextSibling&&i.nextSibling.dataset,r)var s=r.dgst;return r=s,o=Error(S(419)),r=Zo(o,r,void 0),ti(e,t,l,r)}if(s=(l&e.childLanes)!==0,ve||s){if(r=oe,r!==null){switch(l&-l){case 4:i=2;break;case 16:i=8;break;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:i=32;break;case 536870912:i=268435456;break;default:i=0}i=i&(r.suspendedLanes|l)?0:i,i!==0&&i!==o.retryLane&&(o.retryLane=i,at(e,i),We(r,e,i,-1))}return Zs(),r=Zo(Error(S(421))),ti(e,t,l,r)}return i.data==="$?"?(t.flags|=128,t.child=e.child,t=D0.bind(null,e),i._reactRetry=t,null):(e=o.treeContext,$e=Et(i.nextSibling),ze=t,Z=!0,Ve=null,e!==null&&(Le[Me++]=it,Le[Me++]=ot,Le[Me++]=Jt,it=e.id,ot=e.overflow,Jt=t),t=Us(t,r.children),t.flags|=4096,t)}function na(e,t,n){e.lanes|=t;var r=e.alternate;r!==null&&(r.lanes|=t),Il(e.return,t,n)}function Ko(e,t,n,r,i){var o=e.memoizedState;o===null?e.memoizedState={isBackwards:t,rendering:null,renderingStartTime:0,last:r,tail:n,tailMode:i}:(o.isBackwards=t,o.rendering=null,o.renderingStartTime=0,o.last=r,o.tail=n,o.tailMode=i)}function Pd(e,t,n){var r=t.pendingProps,i=r.revealOrder,o=r.tail;if(pe(e,t,r.children,n),r=K.current,r&2)r=r&1|2,t.flags|=128;else{if(e!==null&&e.flags&128)e:for(e=t.child;e!==null;){if(e.tag===13)e.memoizedState!==null&&na(e,n,t);else if(e.tag===19)na(e,n,t);else if(e.child!==null){e.child.return=e,e=e.child;continue}if(e===t)break e;for(;e.sibling===null;){if(e.return===null||e.return===t)break e;e=e.return}e.sibling.return=e.return,e=e.sibling}r&=1}if(V(K,r),!(t.mode&1))t.memoizedState=null;else switch(i){case"forwards":for(n=t.child,i=null;n!==null;)e=n.alternate,e!==null&&Hi(e)===null&&(i=n),n=n.sibling;n=i,n===null?(i=t.child,t.child=null):(i=n.sibling,n.sibling=null),Ko(t,!1,i,n,o);break;case"backwards":for(n=null,i=t.child,t.child=null;i!==null;){if(e=i.alternate,e!==null&&Hi(e)===null){t.child=i;break}e=i.sibling,i.sibling=n,n=i,i=e}Ko(t,!0,n,null,o);break;case"together":Ko(t,!1,null,null,void 0);break;default:t.memoizedState=null}return t.child}function xi(e,t){!(t.mode&1)&&e!==null&&(e.alternate=null,t.alternate=null,t.flags|=2)}function ct(e,t,n){if(e!==null&&(t.dependencies=e.dependencies),bt|=t.lanes,!(n&t.childLanes))return null;if(e!==null&&t.child!==e.child)throw Error(S(153));if(t.child!==null){for(e=t.child,n=Pt(e,e.pendingProps),t.child=n,n.return=t;e.sibling!==null;)e=e.sibling,n=n.sibling=Pt(e,e.pendingProps),n.return=t;n.sibling=null}return t.child}function _0(e,t,n){switch(t.tag){case 3:$d(t),Pn();break;case 5:nd(t);break;case 1:ke(t.type)&&Oi(t);break;case 4:Ms(t,t.stateNode.containerInfo);break;case 10:var r=t.type._context,i=t.memoizedProps.value;V(Fi,r._currentValue),r._currentValue=i;break;case 13:if(r=t.memoizedState,r!==null)return r.dehydrated!==null?(V(K,K.current&1),t.flags|=128,null):n&t.child.childLanes?zd(e,t,n):(V(K,K.current&1),e=ct(e,t,n),e!==null?e.sibling:null);V(K,K.current&1);break;case 19:if(r=(n&t.childLanes)!==0,e.flags&128){if(r)return Pd(e,t,n);t.flags|=128}if(i=t.memoizedState,i!==null&&(i.rendering=null,i.tail=null,i.lastEffect=null),V(K,K.current),r)break;return null;case 22:case 23:return t.lanes=0,Ed(e,t,n)}return ct(e,t,n)}var Nd,Vl,Td,Ld;Nd=function(e,t){for(var n=t.child;n!==null;){if(n.tag===5||n.tag===6)e.appendChild(n.stateNode);else if(n.tag!==4&&n.child!==null){n.child.return=n,n=n.child;continue}if(n===t)break;for(;n.sibling===null;){if(n.return===null||n.return===t)return;n=n.return}n.sibling.return=n.return,n=n.sibling}};Vl=function(){};Td=function(e,t,n,r){var i=e.memoizedProps;if(i!==r){e=t.stateNode,Gt(be.current);var o=null;switch(n){case"input":i=dl(e,i),r=dl(e,r),o=[];break;case"select":i=X({},i,{value:void 0}),r=X({},r,{value:void 0}),o=[];break;case"textarea":i=hl(e,i),r=hl(e,r),o=[];break;default:typeof i.onClick!="function"&&typeof r.onClick=="function"&&(e.onclick=Ri)}gl(n,r);var l;n=null;for(d in i)if(!r.hasOwnProperty(d)&&i.hasOwnProperty(d)&&i[d]!=null)if(d==="style"){var s=i[d];for(l in s)s.hasOwnProperty(l)&&(n||(n={}),n[l]="")}else d!=="dangerouslySetInnerHTML"&&d!=="children"&&d!=="suppressContentEditableWarning"&&d!=="suppressHydrationWarning"&&d!=="autoFocus"&&(mr.hasOwnProperty(d)?o||(o=[]):(o=o||[]).push(d,null));for(d in r){var u=r[d];if(s=i!=null?i[d]:void 0,r.hasOwnProperty(d)&&u!==s&&(u!=null||s!=null))if(d==="style")if(s){for(l in s)!s.hasOwnProperty(l)||u&&u.hasOwnProperty(l)||(n||(n={}),n[l]="");for(l in u)u.hasOwnProperty(l)&&s[l]!==u[l]&&(n||(n={}),n[l]=u[l])}else n||(o||(o=[]),o.push(d,n)),n=u;else d==="dangerouslySetInnerHTML"?(u=u?u.__html:void 0,s=s?s.__html:void 0,u!=null&&s!==u&&(o=o||[]).push(d,u)):d==="children"?typeof u!="string"&&typeof u!="number"||(o=o||[]).push(d,""+u):d!=="suppressContentEditableWarning"&&d!=="suppressHydrationWarning"&&(mr.hasOwnProperty(d)?(u!=null&&d==="onScroll"&&G("scroll",e),o||s===u||(o=[])):(o=o||[]).push(d,u))}n&&(o=o||[]).push("style",n);var d=o;(t.updateQueue=d)&&(t.flags|=4)}};Ld=function(e,t,n,r){n!==r&&(t.flags|=4)};function Jn(e,t){if(!Z)switch(e.tailMode){case"hidden":t=e.tail;for(var n=null;t!==null;)t.alternate!==null&&(n=t),t=t.sibling;n===null?e.tail=null:n.sibling=null;break;case"collapsed":n=e.tail;for(var r=null;n!==null;)n.alternate!==null&&(r=n),n=n.sibling;r===null?t||e.tail===null?e.tail=null:e.tail.sibling=null:r.sibling=null}}function ce(e){var t=e.alternate!==null&&e.alternate.child===e.child,n=0,r=0;if(t)for(var i=e.child;i!==null;)n|=i.lanes|i.childLanes,r|=i.subtreeFlags&14680064,r|=i.flags&14680064,i.return=e,i=i.sibling;else for(i=e.child;i!==null;)n|=i.lanes|i.childLanes,r|=i.subtreeFlags,r|=i.flags,i.return=e,i=i.sibling;return e.subtreeFlags|=r,e.childLanes=n,t}function $0(e,t,n){var r=t.pendingProps;switch(_s(t),t.tag){case 2:case 16:case 15:case 0:case 11:case 7:case 8:case 12:case 9:case 14:return ce(t),null;case 1:return ke(t.type)&&Ii(),ce(t),null;case 3:return r=t.stateNode,Tn(),Q(we),Q(fe),Is(),r.pendingContext&&(r.context=r.pendingContext,r.pendingContext=null),(e===null||e.child===null)&&(br(t)?t.flags|=4:e===null||e.memoizedState.isDehydrated&&!(t.flags&256)||(t.flags|=1024,Ve!==null&&(Jl(Ve),Ve=null))),Vl(e,t),ce(t),null;case 5:Rs(t);var i=Gt($r.current);if(n=t.type,e!==null&&t.stateNode!=null)Td(e,t,n,r,i),e.ref!==t.ref&&(t.flags|=512,t.flags|=2097152);else{if(!r){if(t.stateNode===null)throw Error(S(166));return ce(t),null}if(e=Gt(be.current),br(t)){r=t.stateNode,n=t.type;var o=t.memoizedProps;switch(r[Je]=t,r[Er]=o,e=(t.mode&1)!==0,n){case"dialog":G("cancel",r),G("close",r);break;case"iframe":case"object":case"embed":G("load",r);break;case"video":case"audio":for(i=0;i<rr.length;i++)G(rr[i],r);break;case"source":G("error",r);break;case"img":case"image":case"link":G("error",r),G("load",r);break;case"details":G("toggle",r);break;case"input":du(r,o),G("invalid",r);break;case"select":r._wrapperState={wasMultiple:!!o.multiple},G("invalid",r);break;case"textarea":pu(r,o),G("invalid",r)}gl(n,o),i=null;for(var l in o)if(o.hasOwnProperty(l)){var s=o[l];l==="children"?typeof s=="string"?r.textContent!==s&&(o.suppressHydrationWarning!==!0&&qr(r.textContent,s,e),i=["children",s]):typeof s=="number"&&r.textContent!==""+s&&(o.suppressHydrationWarning!==!0&&qr(r.textContent,s,e),i=["children",""+s]):mr.hasOwnProperty(l)&&s!=null&&l==="onScroll"&&G("scroll",r)}switch(n){case"input":Gr(r),fu(r,o,!0);break;case"textarea":Gr(r),hu(r);break;case"select":case"option":break;default:typeof o.onClick=="function"&&(r.onclick=Ri)}r=i,t.updateQueue=r,r!==null&&(t.flags|=4)}else{l=i.nodeType===9?i:i.ownerDocument,e==="http://www.w3.org/1999/xhtml"&&(e=oc(n)),e==="http://www.w3.org/1999/xhtml"?n==="script"?(e=l.createElement("div"),e.innerHTML="<script><\/script>",e=e.removeChild(e.firstChild)):typeof r.is=="string"?e=l.createElement(n,{is:r.is}):(e=l.createElement(n),n==="select"&&(l=e,r.multiple?l.multiple=!0:r.size&&(l.size=r.size))):e=l.createElementNS(e,n),e[Je]=t,e[Er]=r,Nd(e,t,!1,!1),t.stateNode=e;e:{switch(l=xl(n,r),n){case"dialog":G("cancel",e),G("close",e),i=r;break;case"iframe":case"object":case"embed":G("load",e),i=r;break;case"video":case"audio":for(i=0;i<rr.length;i++)G(rr[i],e);i=r;break;case"source":G("error",e),i=r;break;case"img":case"image":case"link":G("error",e),G("load",e),i=r;break;case"details":G("toggle",e),i=r;break;case"input":du(e,r),i=dl(e,r),G("invalid",e);break;case"option":i=r;break;case"select":e._wrapperState={wasMultiple:!!r.multiple},i=X({},r,{value:void 0}),G("invalid",e);break;case"textarea":pu(e,r),i=hl(e,r),G("invalid",e);break;default:i=r}gl(n,i),s=i;for(o in s)if(s.hasOwnProperty(o)){var u=s[o];o==="style"?uc(e,u):o==="dangerouslySetInnerHTML"?(u=u?u.__html:void 0,u!=null&&lc(e,u)):o==="children"?typeof u=="string"?(n!=="textarea"||u!=="")&&gr(e,u):typeof u=="number"&&gr(e,""+u):o!=="suppressContentEditableWarning"&&o!=="suppressHydrationWarning"&&o!=="autoFocus"&&(mr.hasOwnProperty(o)?u!=null&&o==="onScroll"&&G("scroll",e):u!=null&&ds(e,o,u,l))}switch(n){case"input":Gr(e),fu(e,r,!1);break;case"textarea":Gr(e),hu(e);break;case"option":r.value!=null&&e.setAttribute("value",""+Nt(r.value));break;case"select":e.multiple=!!r.multiple,o=r.value,o!=null?wn(e,!!r.multiple,o,!1):r.defaultValue!=null&&wn(e,!!r.multiple,r.defaultValue,!0);break;default:typeof i.onClick=="function"&&(e.onclick=Ri)}switch(n){case"button":case"input":case"select":case"textarea":r=!!r.autoFocus;break e;case"img":r=!0;break e;default:r=!1}}r&&(t.flags|=4)}t.ref!==null&&(t.flags|=512,t.flags|=2097152)}return ce(t),null;case 6:if(e&&t.stateNode!=null)Ld(e,t,e.memoizedProps,r);else{if(typeof r!="string"&&t.stateNode===null)throw Error(S(166));if(n=Gt($r.current),Gt(be.current),br(t)){if(r=t.stateNode,n=t.memoizedProps,r[Je]=t,(o=r.nodeValue!==n)&&(e=ze,e!==null))switch(e.tag){case 3:qr(r.nodeValue,n,(e.mode&1)!==0);break;case 5:e.memoizedProps.suppressHydrationWarning!==!0&&qr(r.nodeValue,n,(e.mode&1)!==0)}o&&(t.flags|=4)}else r=(n.nodeType===9?n:n.ownerDocument).createTextNode(r),r[Je]=t,t.stateNode=r}return ce(t),null;case 13:if(Q(K),r=t.memoizedState,e===null||e.memoizedState!==null&&e.memoizedState.dehydrated!==null){if(Z&&$e!==null&&t.mode&1&&!(t.flags&128))Yc(),Pn(),t.flags|=98560,o=!1;else if(o=br(t),r!==null&&r.dehydrated!==null){if(e===null){if(!o)throw Error(S(318));if(o=t.memoizedState,o=o!==null?o.dehydrated:null,!o)throw Error(S(317));o[Je]=t}else Pn(),!(t.flags&128)&&(t.memoizedState=null),t.flags|=4;ce(t),o=!1}else Ve!==null&&(Jl(Ve),Ve=null),o=!0;if(!o)return t.flags&65536?t:null}return t.flags&128?(t.lanes=n,t):(r=r!==null,r!==(e!==null&&e.memoizedState!==null)&&r&&(t.child.flags|=8192,t.mode&1&&(e===null||K.current&1?ne===0&&(ne=3):Zs())),t.updateQueue!==null&&(t.flags|=4),ce(t),null);case 4:return Tn(),Vl(e,t),e===null&&Sr(t.stateNode.containerInfo),ce(t),null;case 10:return Ns(t.type._context),ce(t),null;case 17:return ke(t.type)&&Ii(),ce(t),null;case 19:if(Q(K),o=t.memoizedState,o===null)return ce(t),null;if(r=(t.flags&128)!==0,l=o.rendering,l===null)if(r)Jn(o,!1);else{if(ne!==0||e!==null&&e.flags&128)for(e=t.child;e!==null;){if(l=Hi(e),l!==null){for(t.flags|=128,Jn(o,!1),r=l.updateQueue,r!==null&&(t.updateQueue=r,t.flags|=4),t.subtreeFlags=0,r=n,n=t.child;n!==null;)o=n,e=r,o.flags&=14680066,l=o.alternate,l===null?(o.childLanes=0,o.lanes=e,o.child=null,o.subtreeFlags=0,o.memoizedProps=null,o.memoizedState=null,o.updateQueue=null,o.dependencies=null,o.stateNode=null):(o.childLanes=l.childLanes,o.lanes=l.lanes,o.child=l.child,o.subtreeFlags=0,o.deletions=null,o.memoizedProps=l.memoizedProps,o.memoizedState=l.memoizedState,o.updateQueue=l.updateQueue,o.type=l.type,e=l.dependencies,o.dependencies=e===null?null:{lanes:e.lanes,firstContext:e.firstContext}),n=n.sibling;return V(K,K.current&1|2),t.child}e=e.sibling}o.tail!==null&&q()>Mn&&(t.flags|=128,r=!0,Jn(o,!1),t.lanes=4194304)}else{if(!r)if(e=Hi(l),e!==null){if(t.flags|=128,r=!0,n=e.updateQueue,n!==null&&(t.updateQueue=n,t.flags|=4),Jn(o,!0),o.tail===null&&o.tailMode==="hidden"&&!l.alternate&&!Z)return ce(t),null}else 2*q()-o.renderingStartTime>Mn&&n!==1073741824&&(t.flags|=128,r=!0,Jn(o,!1),t.lanes=4194304);o.isBackwards?(l.sibling=t.child,t.child=l):(n=o.last,n!==null?n.sibling=l:t.child=l,o.last=l)}return o.tail!==null?(t=o.tail,o.rendering=t,o.tail=t.sibling,o.renderingStartTime=q(),t.sibling=null,n=K.current,V(K,r?n&1|2:n&1),t):(ce(t),null);case 22:case 23:return Qs(),r=t.memoizedState!==null,e!==null&&e.memoizedState!==null!==r&&(t.flags|=8192),r&&t.mode&1?_e&1073741824&&(ce(t),t.subtreeFlags&6&&(t.flags|=8192)):ce(t),null;case 24:return null;case 25:return null}throw Error(S(156,t.tag))}function z0(e,t){switch(_s(t),t.tag){case 1:return ke(t.type)&&Ii(),e=t.flags,e&65536?(t.flags=e&-65537|128,t):null;case 3:return Tn(),Q(we),Q(fe),Is(),e=t.flags,e&65536&&!(e&128)?(t.flags=e&-65537|128,t):null;case 5:return Rs(t),null;case 13:if(Q(K),e=t.memoizedState,e!==null&&e.dehydrated!==null){if(t.alternate===null)throw Error(S(340));Pn()}return e=t.flags,e&65536?(t.flags=e&-65537|128,t):null;case 19:return Q(K),null;case 4:return Tn(),null;case 10:return Ns(t.type._context),null;case 22:case 23:return Qs(),null;case 24:return null;default:return null}}var ni=!1,de=!1,P0=typeof WeakSet=="function"?WeakSet:Set,z=null;function xn(e,t){var n=e.ref;if(n!==null)if(typeof n=="function")try{n(null)}catch(r){J(e,t,r)}else n.current=null}function Gl(e,t,n){try{n()}catch(r){J(e,t,r)}}var ra=!1;function N0(e,t){if($l=Ti,e=Oc(),js(e)){if("selectionStart"in e)var n={start:e.selectionStart,end:e.selectionEnd};else e:{n=(n=e.ownerDocument)&&n.defaultView||window;var r=n.getSelection&&n.getSelection();if(r&&r.rangeCount!==0){n=r.anchorNode;var i=r.anchorOffset,o=r.focusNode;r=r.focusOffset;try{n.nodeType,o.nodeType}catch{n=null;break e}var l=0,s=-1,u=-1,d=0,g=0,m=e,h=null;t:for(;;){for(var w;m!==n||i!==0&&m.nodeType!==3||(s=l+i),m!==o||r!==0&&m.nodeType!==3||(u=l+r),m.nodeType===3&&(l+=m.nodeValue.length),(w=m.firstChild)!==null;)h=m,m=w;for(;;){if(m===e)break t;if(h===n&&++d===i&&(s=l),h===o&&++g===r&&(u=l),(w=m.nextSibling)!==null)break;m=h,h=m.parentNode}m=w}n=s===-1||u===-1?null:{start:s,end:u}}else n=null}n=n||{start:0,end:0}}else n=null;for(zl={focusedElem:e,selectionRange:n},Ti=!1,z=t;z!==null;)if(t=z,e=t.child,(t.subtreeFlags&1028)!==0&&e!==null)e.return=t,z=e;else for(;z!==null;){t=z;try{var k=t.alternate;if(t.flags&1024)switch(t.tag){case 0:case 11:case 15:break;case 1:if(k!==null){var j=k.memoizedProps,R=k.memoizedState,f=t.stateNode,c=f.getSnapshotBeforeUpdate(t.elementType===t.type?j:Ue(t.type,j),R);f.__reactInternalSnapshotBeforeUpdate=c}break;case 3:var p=t.stateNode.containerInfo;p.nodeType===1?p.textContent="":p.nodeType===9&&p.documentElement&&p.removeChild(p.documentElement);break;case 5:case 6:case 4:case 17:break;default:throw Error(S(163))}}catch(x){J(t,t.return,x)}if(e=t.sibling,e!==null){e.return=t.return,z=e;break}z=t.return}return k=ra,ra=!1,k}function dr(e,t,n){var r=t.updateQueue;if(r=r!==null?r.lastEffect:null,r!==null){var i=r=r.next;do{if((i.tag&e)===e){var o=i.destroy;i.destroy=void 0,o!==void 0&&Gl(t,n,o)}i=i.next}while(i!==r)}}function ao(e,t){if(t=t.updateQueue,t=t!==null?t.lastEffect:null,t!==null){var n=t=t.next;do{if((n.tag&e)===e){var r=n.create;n.destroy=r()}n=n.next}while(n!==t)}}function Wl(e){var t=e.ref;if(t!==null){var n=e.stateNode;switch(e.tag){case 5:e=n;break;default:e=n}typeof t=="function"?t(e):t.current=e}}function Md(e){var t=e.alternate;t!==null&&(e.alternate=null,Md(t)),e.child=null,e.deletions=null,e.sibling=null,e.tag===5&&(t=e.stateNode,t!==null&&(delete t[Je],delete t[Er],delete t[Tl],delete t[f0],delete t[p0])),e.stateNode=null,e.return=null,e.dependencies=null,e.memoizedProps=null,e.memoizedState=null,e.pendingProps=null,e.stateNode=null,e.updateQueue=null}function Rd(e){return e.tag===5||e.tag===3||e.tag===4}function ia(e){e:for(;;){for(;e.sibling===null;){if(e.return===null||Rd(e.return))return null;e=e.return}for(e.sibling.return=e.return,e=e.sibling;e.tag!==5&&e.tag!==6&&e.tag!==18;){if(e.flags&2||e.child===null||e.tag===4)continue e;e.child.return=e,e=e.child}if(!(e.flags&2))return e.stateNode}}function Ql(e,t,n){var r=e.tag;if(r===5||r===6)e=e.stateNode,t?n.nodeType===8?n.parentNode.insertBefore(e,t):n.insertBefore(e,t):(n.nodeType===8?(t=n.parentNode,t.insertBefore(e,n)):(t=n,t.appendChild(e)),n=n._reactRootContainer,n!=null||t.onclick!==null||(t.onclick=Ri));else if(r!==4&&(e=e.child,e!==null))for(Ql(e,t,n),e=e.sibling;e!==null;)Ql(e,t,n),e=e.sibling}function Zl(e,t,n){var r=e.tag;if(r===5||r===6)e=e.stateNode,t?n.insertBefore(e,t):n.appendChild(e);else if(r!==4&&(e=e.child,e!==null))for(Zl(e,t,n),e=e.sibling;e!==null;)Zl(e,t,n),e=e.sibling}var le=null,He=!1;function ht(e,t,n){for(n=n.child;n!==null;)Id(e,t,n),n=n.sibling}function Id(e,t,n){if(qe&&typeof qe.onCommitFiberUnmount=="function")try{qe.onCommitFiberUnmount(to,n)}catch{}switch(n.tag){case 5:de||xn(n,t);case 6:var r=le,i=He;le=null,ht(e,t,n),le=r,He=i,le!==null&&(He?(e=le,n=n.stateNode,e.nodeType===8?e.parentNode.removeChild(n):e.removeChild(n)):le.removeChild(n.stateNode));break;case 18:le!==null&&(He?(e=le,n=n.stateNode,e.nodeType===8?Uo(e.parentNode,n):e.nodeType===1&&Uo(e,n),wr(e)):Uo(le,n.stateNode));break;case 4:r=le,i=He,le=n.stateNode.containerInfo,He=!0,ht(e,t,n),le=r,He=i;break;case 0:case 11:case 14:case 15:if(!de&&(r=n.updateQueue,r!==null&&(r=r.lastEffect,r!==null))){i=r=r.next;do{var o=i,l=o.destroy;o=o.tag,l!==void 0&&(o&2||o&4)&&Gl(n,t,l),i=i.next}while(i!==r)}ht(e,t,n);break;case 1:if(!de&&(xn(n,t),r=n.stateNode,typeof r.componentWillUnmount=="function"))try{r.props=n.memoizedProps,r.state=n.memoizedState,r.componentWillUnmount()}catch(s){J(n,t,s)}ht(e,t,n);break;case 21:ht(e,t,n);break;case 22:n.mode&1?(de=(r=de)||n.memoizedState!==null,ht(e,t,n),de=r):ht(e,t,n);break;default:ht(e,t,n)}}function oa(e){var t=e.updateQueue;if(t!==null){e.updateQueue=null;var n=e.stateNode;n===null&&(n=e.stateNode=new P0),t.forEach(function(r){var i=F0.bind(null,e,r);n.has(r)||(n.add(r),r.then(i,i))})}}function Be(e,t){var n=t.deletions;if(n!==null)for(var r=0;r<n.length;r++){var i=n[r];try{var o=e,l=t,s=l;e:for(;s!==null;){switch(s.tag){case 5:le=s.stateNode,He=!1;break e;case 3:le=s.stateNode.containerInfo,He=!0;break e;case 4:le=s.stateNode.containerInfo,He=!0;break e}s=s.return}if(le===null)throw Error(S(160));Id(o,l,i),le=null,He=!1;var u=i.alternate;u!==null&&(u.return=null),i.return=null}catch(d){J(i,t,d)}}if(t.subtreeFlags&12854)for(t=t.child;t!==null;)Od(t,e),t=t.sibling}function Od(e,t){var n=e.alternate,r=e.flags;switch(e.tag){case 0:case 11:case 14:case 15:if(Be(t,e),Ke(e),r&4){try{dr(3,e,e.return),ao(3,e)}catch(j){J(e,e.return,j)}try{dr(5,e,e.return)}catch(j){J(e,e.return,j)}}break;case 1:Be(t,e),Ke(e),r&512&&n!==null&&xn(n,n.return);break;case 5:if(Be(t,e),Ke(e),r&512&&n!==null&&xn(n,n.return),e.flags&32){var i=e.stateNode;try{gr(i,"")}catch(j){J(e,e.return,j)}}if(r&4&&(i=e.stateNode,i!=null)){var o=e.memoizedProps,l=n!==null?n.memoizedProps:o,s=e.type,u=e.updateQueue;if(e.updateQueue=null,u!==null)try{s==="input"&&o.type==="radio"&&o.name!=null&&rc(i,o),xl(s,l);var d=xl(s,o);for(l=0;l<u.length;l+=2){var g=u[l],m=u[l+1];g==="style"?uc(i,m):g==="dangerouslySetInnerHTML"?lc(i,m):g==="children"?gr(i,m):ds(i,g,m,d)}switch(s){case"input":fl(i,o);break;case"textarea":ic(i,o);break;case"select":var h=i._wrapperState.wasMultiple;i._wrapperState.wasMultiple=!!o.multiple;var w=o.value;w!=null?wn(i,!!o.multiple,w,!1):h!==!!o.multiple&&(o.defaultValue!=null?wn(i,!!o.multiple,o.defaultValue,!0):wn(i,!!o.multiple,o.multiple?[]:"",!1))}i[Er]=o}catch(j){J(e,e.return,j)}}break;case 6:if(Be(t,e),Ke(e),r&4){if(e.stateNode===null)throw Error(S(162));i=e.stateNode,o=e.memoizedProps;try{i.nodeValue=o}catch(j){J(e,e.return,j)}}break;case 3:if(Be(t,e),Ke(e),r&4&&n!==null&&n.memoizedState.isDehydrated)try{wr(t.containerInfo)}catch(j){J(e,e.return,j)}break;case 4:Be(t,e),Ke(e);break;case 13:Be(t,e),Ke(e),i=e.child,i.flags&8192&&(o=i.memoizedState!==null,i.stateNode.isHidden=o,!o||i.alternate!==null&&i.alternate.memoizedState!==null||(Gs=q())),r&4&&oa(e);break;case 22:if(g=n!==null&&n.memoizedState!==null,e.mode&1?(de=(d=de)||g,Be(t,e),de=d):Be(t,e),Ke(e),r&8192){if(d=e.memoizedState!==null,(e.stateNode.isHidden=d)&&!g&&e.mode&1)for(z=e,g=e.child;g!==null;){for(m=z=g;z!==null;){switch(h=z,w=h.child,h.tag){case 0:case 11:case 14:case 15:dr(4,h,h.return);break;case 1:xn(h,h.return);var k=h.stateNode;if(typeof k.componentWillUnmount=="function"){r=h,n=h.return;try{t=r,k.props=t.memoizedProps,k.state=t.memoizedState,k.componentWillUnmount()}catch(j){J(r,n,j)}}break;case 5:xn(h,h.return);break;case 22:if(h.memoizedState!==null){sa(m);continue}}w!==null?(w.return=h,z=w):sa(m)}g=g.sibling}e:for(g=null,m=e;;){if(m.tag===5){if(g===null){g=m;try{i=m.stateNode,d?(o=i.style,typeof o.setProperty=="function"?o.setProperty("display","none","important"):o.display="none"):(s=m.stateNode,u=m.memoizedProps.style,l=u!=null&&u.hasOwnProperty("display")?u.display:null,s.style.display=sc("display",l))}catch(j){J(e,e.return,j)}}}else if(m.tag===6){if(g===null)try{m.stateNode.nodeValue=d?"":m.memoizedProps}catch(j){J(e,e.return,j)}}else if((m.tag!==22&&m.tag!==23||m.memoizedState===null||m===e)&&m.child!==null){m.child.return=m,m=m.child;continue}if(m===e)break e;for(;m.sibling===null;){if(m.return===null||m.return===e)break e;g===m&&(g=null),m=m.return}g===m&&(g=null),m.sibling.return=m.return,m=m.sibling}}break;case 19:Be(t,e),Ke(e),r&4&&oa(e);break;case 21:break;default:Be(t,e),Ke(e)}}function Ke(e){var t=e.flags;if(t&2){try{e:{for(var n=e.return;n!==null;){if(Rd(n)){var r=n;break e}n=n.return}throw Error(S(160))}switch(r.tag){case 5:var i=r.stateNode;r.flags&32&&(gr(i,""),r.flags&=-33);var o=ia(e);Zl(e,o,i);break;case 3:case 4:var l=r.stateNode.containerInfo,s=ia(e);Ql(e,s,l);break;default:throw Error(S(161))}}catch(u){J(e,e.return,u)}e.flags&=-3}t&4096&&(e.flags&=-4097)}function T0(e,t,n){z=e,Ad(e)}function Ad(e,t,n){for(var r=(e.mode&1)!==0;z!==null;){var i=z,o=i.child;if(i.tag===22&&r){var l=i.memoizedState!==null||ni;if(!l){var s=i.alternate,u=s!==null&&s.memoizedState!==null||de;s=ni;var d=de;if(ni=l,(de=u)&&!d)for(z=i;z!==null;)l=z,u=l.child,l.tag===22&&l.memoizedState!==null?ua(i):u!==null?(u.return=l,z=u):ua(i);for(;o!==null;)z=o,Ad(o),o=o.sibling;z=i,ni=s,de=d}la(e)}else i.subtreeFlags&8772&&o!==null?(o.return=i,z=o):la(e)}}function la(e){for(;z!==null;){var t=z;if(t.flags&8772){var n=t.alternate;try{if(t.flags&8772)switch(t.tag){case 0:case 11:case 15:de||ao(5,t);break;case 1:var r=t.stateNode;if(t.flags&4&&!de)if(n===null)r.componentDidMount();else{var i=t.elementType===t.type?n.memoizedProps:Ue(t.type,n.memoizedProps);r.componentDidUpdate(i,n.memoizedState,r.__reactInternalSnapshotBeforeUpdate)}var o=t.updateQueue;o!==null&&Vu(t,o,r);break;case 3:var l=t.updateQueue;if(l!==null){if(n=null,t.child!==null)switch(t.child.tag){case 5:n=t.child.stateNode;break;case 1:n=t.child.stateNode}Vu(t,l,n)}break;case 5:var s=t.stateNode;if(n===null&&t.flags&4){n=s;var u=t.memoizedProps;switch(t.type){case"button":case"input":case"select":case"textarea":u.autoFocus&&n.focus();break;case"img":u.src&&(n.src=u.src)}}break;case 6:break;case 4:break;case 12:break;case 13:if(t.memoizedState===null){var d=t.alternate;if(d!==null){var g=d.memoizedState;if(g!==null){var m=g.dehydrated;m!==null&&wr(m)}}}break;case 19:case 17:case 21:case 22:case 23:case 25:break;default:throw Error(S(163))}de||t.flags&512&&Wl(t)}catch(h){J(t,t.return,h)}}if(t===e){z=null;break}if(n=t.sibling,n!==null){n.return=t.return,z=n;break}z=t.return}}function sa(e){for(;z!==null;){var t=z;if(t===e){z=null;break}var n=t.sibling;if(n!==null){n.return=t.return,z=n;break}z=t.return}}function ua(e){for(;z!==null;){var t=z;try{switch(t.tag){case 0:case 11:case 15:var n=t.return;try{ao(4,t)}catch(u){J(t,n,u)}break;case 1:var r=t.stateNode;if(typeof r.componentDidMount=="function"){var i=t.return;try{r.componentDidMount()}catch(u){J(t,i,u)}}var o=t.return;try{Wl(t)}catch(u){J(t,o,u)}break;case 5:var l=t.return;try{Wl(t)}catch(u){J(t,l,u)}}}catch(u){J(t,t.return,u)}if(t===e){z=null;break}var s=t.sibling;if(s!==null){s.return=t.return,z=s;break}z=t.return}}var L0=Math.ceil,Wi=dt.ReactCurrentDispatcher,Hs=dt.ReactCurrentOwner,Ie=dt.ReactCurrentBatchConfig,A=0,oe=null,ee=null,se=0,_e=0,vn=Mt(0),ne=0,Tr=null,bt=0,co=0,Vs=0,fr=null,xe=null,Gs=0,Mn=1/0,tt=null,Qi=!1,Kl=null,$t=null,ri=!1,kt=null,Zi=0,pr=0,Yl=null,vi=-1,yi=0;function he(){return A&6?q():vi!==-1?vi:vi=q()}function zt(e){return e.mode&1?A&2&&se!==0?se&-se:m0.transition!==null?(yi===0&&(yi=wc()),yi):(e=F,e!==0||(e=window.event,e=e===void 0?16:$c(e.type)),e):1}function We(e,t,n,r){if(50<pr)throw pr=0,Yl=null,Error(S(185));Ir(e,n,r),(!(A&2)||e!==oe)&&(e===oe&&(!(A&2)&&(co|=n),ne===4&&yt(e,se)),Ce(e,r),n===1&&A===0&&!(t.mode&1)&&(Mn=q()+500,lo&&Rt()))}function Ce(e,t){var n=e.callbackNode;mp(e,t);var r=Ni(e,e===oe?se:0);if(r===0)n!==null&&xu(n),e.callbackNode=null,e.callbackPriority=0;else if(t=r&-r,e.callbackPriority!==t){if(n!=null&&xu(n),t===1)e.tag===0?h0(aa.bind(null,e)):Qc(aa.bind(null,e)),c0(function(){!(A&6)&&Rt()}),n=null;else{switch(kc(r)){case 1:n=gs;break;case 4:n=vc;break;case 16:n=Pi;break;case 536870912:n=yc;break;default:n=Pi}n=Wd(n,Dd.bind(null,e))}e.callbackPriority=t,e.callbackNode=n}}function Dd(e,t){if(vi=-1,yi=0,A&6)throw Error(S(327));var n=e.callbackNode;if(En()&&e.callbackNode!==n)return null;var r=Ni(e,e===oe?se:0);if(r===0)return null;if(r&30||r&e.expiredLanes||t)t=Ki(e,r);else{t=r;var i=A;A|=2;var o=Bd();(oe!==e||se!==t)&&(tt=null,Mn=q()+500,Qt(e,t));do try{I0();break}catch(s){Fd(e,s)}while(!0);Ps(),Wi.current=o,A=i,ee!==null?t=0:(oe=null,se=0,t=ne)}if(t!==0){if(t===2&&(i=Cl(e),i!==0&&(r=i,t=Xl(e,i))),t===1)throw n=Tr,Qt(e,0),yt(e,r),Ce(e,q()),n;if(t===6)yt(e,r);else{if(i=e.current.alternate,!(r&30)&&!M0(i)&&(t=Ki(e,r),t===2&&(o=Cl(e),o!==0&&(r=o,t=Xl(e,o))),t===1))throw n=Tr,Qt(e,0),yt(e,r),Ce(e,q()),n;switch(e.finishedWork=i,e.finishedLanes=r,t){case 0:case 1:throw Error(S(345));case 2:Ut(e,xe,tt);break;case 3:if(yt(e,r),(r&130023424)===r&&(t=Gs+500-q(),10<t)){if(Ni(e,0)!==0)break;if(i=e.suspendedLanes,(i&r)!==r){he(),e.pingedLanes|=e.suspendedLanes&i;break}e.timeoutHandle=Nl(Ut.bind(null,e,xe,tt),t);break}Ut(e,xe,tt);break;case 4:if(yt(e,r),(r&4194240)===r)break;for(t=e.eventTimes,i=-1;0<r;){var l=31-Ge(r);o=1<<l,l=t[l],l>i&&(i=l),r&=~o}if(r=i,r=q()-r,r=(120>r?120:480>r?480:1080>r?1080:1920>r?1920:3e3>r?3e3:4320>r?4320:1960*L0(r/1960))-r,10<r){e.timeoutHandle=Nl(Ut.bind(null,e,xe,tt),r);break}Ut(e,xe,tt);break;case 5:Ut(e,xe,tt);break;default:throw Error(S(329))}}}return Ce(e,q()),e.callbackNode===n?Dd.bind(null,e):null}function Xl(e,t){var n=fr;return e.current.memoizedState.isDehydrated&&(Qt(e,t).flags|=256),e=Ki(e,t),e!==2&&(t=xe,xe=n,t!==null&&Jl(t)),e}function Jl(e){xe===null?xe=e:xe.push.apply(xe,e)}function M0(e){for(var t=e;;){if(t.flags&16384){var n=t.updateQueue;if(n!==null&&(n=n.stores,n!==null))for(var r=0;r<n.length;r++){var i=n[r],o=i.getSnapshot;i=i.value;try{if(!Ze(o(),i))return!1}catch{return!1}}}if(n=t.child,t.subtreeFlags&16384&&n!==null)n.return=t,t=n;else{if(t===e)break;for(;t.sibling===null;){if(t.return===null||t.return===e)return!0;t=t.return}t.sibling.return=t.return,t=t.sibling}}return!0}function yt(e,t){for(t&=~Vs,t&=~co,e.suspendedLanes|=t,e.pingedLanes&=~t,e=e.expirationTimes;0<t;){var n=31-Ge(t),r=1<<n;e[n]=-1,t&=~r}}function aa(e){if(A&6)throw Error(S(327));En();var t=Ni(e,0);if(!(t&1))return Ce(e,q()),null;var n=Ki(e,t);if(e.tag!==0&&n===2){var r=Cl(e);r!==0&&(t=r,n=Xl(e,r))}if(n===1)throw n=Tr,Qt(e,0),yt(e,t),Ce(e,q()),n;if(n===6)throw Error(S(345));return e.finishedWork=e.current.alternate,e.finishedLanes=t,Ut(e,xe,tt),Ce(e,q()),null}function Ws(e,t){var n=A;A|=1;try{return e(t)}finally{A=n,A===0&&(Mn=q()+500,lo&&Rt())}}function en(e){kt!==null&&kt.tag===0&&!(A&6)&&En();var t=A;A|=1;var n=Ie.transition,r=F;try{if(Ie.transition=null,F=1,e)return e()}finally{F=r,Ie.transition=n,A=t,!(A&6)&&Rt()}}function Qs(){_e=vn.current,Q(vn)}function Qt(e,t){e.finishedWork=null,e.finishedLanes=0;var n=e.timeoutHandle;if(n!==-1&&(e.timeoutHandle=-1,a0(n)),ee!==null)for(n=ee.return;n!==null;){var r=n;switch(_s(r),r.tag){case 1:r=r.type.childContextTypes,r!=null&&Ii();break;case 3:Tn(),Q(we),Q(fe),Is();break;case 5:Rs(r);break;case 4:Tn();break;case 13:Q(K);break;case 19:Q(K);break;case 10:Ns(r.type._context);break;case 22:case 23:Qs()}n=n.return}if(oe=e,ee=e=Pt(e.current,null),se=_e=t,ne=0,Tr=null,Vs=co=bt=0,xe=fr=null,Vt!==null){for(t=0;t<Vt.length;t++)if(n=Vt[t],r=n.interleaved,r!==null){n.interleaved=null;var i=r.next,o=n.pending;if(o!==null){var l=o.next;o.next=i,r.next=l}n.pending=r}Vt=null}return e}function Fd(e,t){do{var n=ee;try{if(Ps(),mi.current=Gi,Vi){for(var r=Y.memoizedState;r!==null;){var i=r.queue;i!==null&&(i.pending=null),r=r.next}Vi=!1}if(qt=0,re=te=Y=null,cr=!1,zr=0,Hs.current=null,n===null||n.return===null){ne=1,Tr=t,ee=null;break}e:{var o=e,l=n.return,s=n,u=t;if(t=se,s.flags|=32768,u!==null&&typeof u=="object"&&typeof u.then=="function"){var d=u,g=s,m=g.tag;if(!(g.mode&1)&&(m===0||m===11||m===15)){var h=g.alternate;h?(g.updateQueue=h.updateQueue,g.memoizedState=h.memoizedState,g.lanes=h.lanes):(g.updateQueue=null,g.memoizedState=null)}var w=Xu(l);if(w!==null){w.flags&=-257,Ju(w,l,s,o,t),w.mode&1&&Yu(o,d,t),t=w,u=d;var k=t.updateQueue;if(k===null){var j=new Set;j.add(u),t.updateQueue=j}else k.add(u);break e}else{if(!(t&1)){Yu(o,d,t),Zs();break e}u=Error(S(426))}}else if(Z&&s.mode&1){var R=Xu(l);if(R!==null){!(R.flags&65536)&&(R.flags|=256),Ju(R,l,s,o,t),$s(Ln(u,s));break e}}o=u=Ln(u,s),ne!==4&&(ne=2),fr===null?fr=[o]:fr.push(o),o=l;do{switch(o.tag){case 3:o.flags|=65536,t&=-t,o.lanes|=t;var f=Cd(o,u,t);Hu(o,f);break e;case 1:s=u;var c=o.type,p=o.stateNode;if(!(o.flags&128)&&(typeof c.getDerivedStateFromError=="function"||p!==null&&typeof p.componentDidCatch=="function"&&($t===null||!$t.has(p)))){o.flags|=65536,t&=-t,o.lanes|=t;var x=Sd(o,s,t);Hu(o,x);break e}}o=o.return}while(o!==null)}Hd(n)}catch(_){t=_,ee===n&&n!==null&&(ee=n=n.return);continue}break}while(!0)}function Bd(){var e=Wi.current;return Wi.current=Gi,e===null?Gi:e}function Zs(){(ne===0||ne===3||ne===2)&&(ne=4),oe===null||!(bt&268435455)&&!(co&268435455)||yt(oe,se)}function Ki(e,t){var n=A;A|=2;var r=Bd();(oe!==e||se!==t)&&(tt=null,Qt(e,t));do try{R0();break}catch(i){Fd(e,i)}while(!0);if(Ps(),A=n,Wi.current=r,ee!==null)throw Error(S(261));return oe=null,se=0,ne}function R0(){for(;ee!==null;)Ud(ee)}function I0(){for(;ee!==null&&!lp();)Ud(ee)}function Ud(e){var t=Gd(e.alternate,e,_e);e.memoizedProps=e.pendingProps,t===null?Hd(e):ee=t,Hs.current=null}function Hd(e){var t=e;do{var n=t.alternate;if(e=t.return,t.flags&32768){if(n=z0(n,t),n!==null){n.flags&=32767,ee=n;return}if(e!==null)e.flags|=32768,e.subtreeFlags=0,e.deletions=null;else{ne=6,ee=null;return}}else if(n=$0(n,t,_e),n!==null){ee=n;return}if(t=t.sibling,t!==null){ee=t;return}ee=t=e}while(t!==null);ne===0&&(ne=5)}function Ut(e,t,n){var r=F,i=Ie.transition;try{Ie.transition=null,F=1,O0(e,t,n,r)}finally{Ie.transition=i,F=r}return null}function O0(e,t,n,r){do En();while(kt!==null);if(A&6)throw Error(S(327));n=e.finishedWork;var i=e.finishedLanes;if(n===null)return null;if(e.finishedWork=null,e.finishedLanes=0,n===e.current)throw Error(S(177));e.callbackNode=null,e.callbackPriority=0;var o=n.lanes|n.childLanes;if(gp(e,o),e===oe&&(ee=oe=null,se=0),!(n.subtreeFlags&2064)&&!(n.flags&2064)||ri||(ri=!0,Wd(Pi,function(){return En(),null})),o=(n.flags&15990)!==0,n.subtreeFlags&15990||o){o=Ie.transition,Ie.transition=null;var l=F;F=1;var s=A;A|=4,Hs.current=null,N0(e,n),Od(n,e),n0(zl),Ti=!!$l,zl=$l=null,e.current=n,T0(n),sp(),A=s,F=l,Ie.transition=o}else e.current=n;if(ri&&(ri=!1,kt=e,Zi=i),o=e.pendingLanes,o===0&&($t=null),cp(n.stateNode),Ce(e,q()),t!==null)for(r=e.onRecoverableError,n=0;n<t.length;n++)i=t[n],r(i.value,{componentStack:i.stack,digest:i.digest});if(Qi)throw Qi=!1,e=Kl,Kl=null,e;return Zi&1&&e.tag!==0&&En(),o=e.pendingLanes,o&1?e===Yl?pr++:(pr=0,Yl=e):pr=0,Rt(),null}function En(){if(kt!==null){var e=kc(Zi),t=Ie.transition,n=F;try{if(Ie.transition=null,F=16>e?16:e,kt===null)var r=!1;else{if(e=kt,kt=null,Zi=0,A&6)throw Error(S(331));var i=A;for(A|=4,z=e.current;z!==null;){var o=z,l=o.child;if(z.flags&16){var s=o.deletions;if(s!==null){for(var u=0;u<s.length;u++){var d=s[u];for(z=d;z!==null;){var g=z;switch(g.tag){case 0:case 11:case 15:dr(8,g,o)}var m=g.child;if(m!==null)m.return=g,z=m;else for(;z!==null;){g=z;var h=g.sibling,w=g.return;if(Md(g),g===d){z=null;break}if(h!==null){h.return=w,z=h;break}z=w}}}var k=o.alternate;if(k!==null){var j=k.child;if(j!==null){k.child=null;do{var R=j.sibling;j.sibling=null,j=R}while(j!==null)}}z=o}}if(o.subtreeFlags&2064&&l!==null)l.return=o,z=l;else e:for(;z!==null;){if(o=z,o.flags&2048)switch(o.tag){case 0:case 11:case 15:dr(9,o,o.return)}var f=o.sibling;if(f!==null){f.return=o.return,z=f;break e}z=o.return}}var c=e.current;for(z=c;z!==null;){l=z;var p=l.child;if(l.subtreeFlags&2064&&p!==null)p.return=l,z=p;else e:for(l=c;z!==null;){if(s=z,s.flags&2048)try{switch(s.tag){case 0:case 11:case 15:ao(9,s)}}catch(_){J(s,s.return,_)}if(s===l){z=null;break e}var x=s.sibling;if(x!==null){x.return=s.return,z=x;break e}z=s.return}}if(A=i,Rt(),qe&&typeof qe.onPostCommitFiberRoot=="function")try{qe.onPostCommitFiberRoot(to,e)}catch{}r=!0}return r}finally{F=n,Ie.transition=t}}return!1}function ca(e,t,n){t=Ln(n,t),t=Cd(e,t,1),e=_t(e,t,1),t=he(),e!==null&&(Ir(e,1,t),Ce(e,t))}function J(e,t,n){if(e.tag===3)ca(e,e,n);else for(;t!==null;){if(t.tag===3){ca(t,e,n);break}else if(t.tag===1){var r=t.stateNode;if(typeof t.type.getDerivedStateFromError=="function"||typeof r.componentDidCatch=="function"&&($t===null||!$t.has(r))){e=Ln(n,e),e=Sd(t,e,1),t=_t(t,e,1),e=he(),t!==null&&(Ir(t,1,e),Ce(t,e));break}}t=t.return}}function A0(e,t,n){var r=e.pingCache;r!==null&&r.delete(t),t=he(),e.pingedLanes|=e.suspendedLanes&n,oe===e&&(se&n)===n&&(ne===4||ne===3&&(se&130023424)===se&&500>q()-Gs?Qt(e,0):Vs|=n),Ce(e,t)}function Vd(e,t){t===0&&(e.mode&1?(t=Zr,Zr<<=1,!(Zr&130023424)&&(Zr=4194304)):t=1);var n=he();e=at(e,t),e!==null&&(Ir(e,t,n),Ce(e,n))}function D0(e){var t=e.memoizedState,n=0;t!==null&&(n=t.retryLane),Vd(e,n)}function F0(e,t){var n=0;switch(e.tag){case 13:var r=e.stateNode,i=e.memoizedState;i!==null&&(n=i.retryLane);break;case 19:r=e.stateNode;break;default:throw Error(S(314))}r!==null&&r.delete(t),Vd(e,n)}var Gd;Gd=function(e,t,n){if(e!==null)if(e.memoizedProps!==t.pendingProps||we.current)ve=!0;else{if(!(e.lanes&n)&&!(t.flags&128))return ve=!1,_0(e,t,n);ve=!!(e.flags&131072)}else ve=!1,Z&&t.flags&1048576&&Zc(t,Di,t.index);switch(t.lanes=0,t.tag){case 2:var r=t.type;xi(e,t),e=t.pendingProps;var i=zn(t,fe.current);jn(t,n),i=As(null,t,r,e,i,n);var o=Ds();return t.flags|=1,typeof i=="object"&&i!==null&&typeof i.render=="function"&&i.$$typeof===void 0?(t.tag=1,t.memoizedState=null,t.updateQueue=null,ke(r)?(o=!0,Oi(t)):o=!1,t.memoizedState=i.state!==null&&i.state!==void 0?i.state:null,Ls(t),i.updater=so,t.stateNode=i,i._reactInternals=t,Al(t,r,e,n),t=Bl(null,t,r,!0,o,n)):(t.tag=0,Z&&o&&Es(t),pe(null,t,i,n),t=t.child),t;case 16:r=t.elementType;e:{switch(xi(e,t),e=t.pendingProps,i=r._init,r=i(r._payload),t.type=r,i=t.tag=U0(r),e=Ue(r,e),i){case 0:t=Fl(null,t,r,e,n);break e;case 1:t=ea(null,t,r,e,n);break e;case 11:t=qu(null,t,r,e,n);break e;case 14:t=bu(null,t,r,Ue(r.type,e),n);break e}throw Error(S(306,r,""))}return t;case 0:return r=t.type,i=t.pendingProps,i=t.elementType===r?i:Ue(r,i),Fl(e,t,r,i,n);case 1:return r=t.type,i=t.pendingProps,i=t.elementType===r?i:Ue(r,i),ea(e,t,r,i,n);case 3:e:{if($d(t),e===null)throw Error(S(387));r=t.pendingProps,o=t.memoizedState,i=o.element,Jc(e,t),Ui(t,r,null,n);var l=t.memoizedState;if(r=l.element,o.isDehydrated)if(o={element:r,isDehydrated:!1,cache:l.cache,pendingSuspenseBoundaries:l.pendingSuspenseBoundaries,transitions:l.transitions},t.updateQueue.baseState=o,t.memoizedState=o,t.flags&256){i=Ln(Error(S(423)),t),t=ta(e,t,r,n,i);break e}else if(r!==i){i=Ln(Error(S(424)),t),t=ta(e,t,r,n,i);break e}else for($e=Et(t.stateNode.containerInfo.firstChild),ze=t,Z=!0,Ve=null,n=td(t,null,r,n),t.child=n;n;)n.flags=n.flags&-3|4096,n=n.sibling;else{if(Pn(),r===i){t=ct(e,t,n);break e}pe(e,t,r,n)}t=t.child}return t;case 5:return nd(t),e===null&&Rl(t),r=t.type,i=t.pendingProps,o=e!==null?e.memoizedProps:null,l=i.children,Pl(r,i)?l=null:o!==null&&Pl(r,o)&&(t.flags|=32),_d(e,t),pe(e,t,l,n),t.child;case 6:return e===null&&Rl(t),null;case 13:return zd(e,t,n);case 4:return Ms(t,t.stateNode.containerInfo),r=t.pendingProps,e===null?t.child=Nn(t,null,r,n):pe(e,t,r,n),t.child;case 11:return r=t.type,i=t.pendingProps,i=t.elementType===r?i:Ue(r,i),qu(e,t,r,i,n);case 7:return pe(e,t,t.pendingProps,n),t.child;case 8:return pe(e,t,t.pendingProps.children,n),t.child;case 12:return pe(e,t,t.pendingProps.children,n),t.child;case 10:e:{if(r=t.type._context,i=t.pendingProps,o=t.memoizedProps,l=i.value,V(Fi,r._currentValue),r._currentValue=l,o!==null)if(Ze(o.value,l)){if(o.children===i.children&&!we.current){t=ct(e,t,n);break e}}else for(o=t.child,o!==null&&(o.return=t);o!==null;){var s=o.dependencies;if(s!==null){l=o.child;for(var u=s.firstContext;u!==null;){if(u.context===r){if(o.tag===1){u=lt(-1,n&-n),u.tag=2;var d=o.updateQueue;if(d!==null){d=d.shared;var g=d.pending;g===null?u.next=u:(u.next=g.next,g.next=u),d.pending=u}}o.lanes|=n,u=o.alternate,u!==null&&(u.lanes|=n),Il(o.return,n,t),s.lanes|=n;break}u=u.next}}else if(o.tag===10)l=o.type===t.type?null:o.child;else if(o.tag===18){if(l=o.return,l===null)throw Error(S(341));l.lanes|=n,s=l.alternate,s!==null&&(s.lanes|=n),Il(l,n,t),l=o.sibling}else l=o.child;if(l!==null)l.return=o;else for(l=o;l!==null;){if(l===t){l=null;break}if(o=l.sibling,o!==null){o.return=l.return,l=o;break}l=l.return}o=l}pe(e,t,i.children,n),t=t.child}return t;case 9:return i=t.type,r=t.pendingProps.children,jn(t,n),i=Oe(i),r=r(i),t.flags|=1,pe(e,t,r,n),t.child;case 14:return r=t.type,i=Ue(r,t.pendingProps),i=Ue(r.type,i),bu(e,t,r,i,n);case 15:return jd(e,t,t.type,t.pendingProps,n);case 17:return r=t.type,i=t.pendingProps,i=t.elementType===r?i:Ue(r,i),xi(e,t),t.tag=1,ke(r)?(e=!0,Oi(t)):e=!1,jn(t,n),bc(t,r,i),Al(t,r,i,n),Bl(null,t,r,!0,e,n);case 19:return Pd(e,t,n);case 22:return Ed(e,t,n)}throw Error(S(156,t.tag))};function Wd(e,t){return xc(e,t)}function B0(e,t,n,r){this.tag=e,this.key=n,this.sibling=this.child=this.return=this.stateNode=this.type=this.elementType=null,this.index=0,this.ref=null,this.pendingProps=t,this.dependencies=this.memoizedState=this.updateQueue=this.memoizedProps=null,this.mode=r,this.subtreeFlags=this.flags=0,this.deletions=null,this.childLanes=this.lanes=0,this.alternate=null}function Re(e,t,n,r){return new B0(e,t,n,r)}function Ks(e){return e=e.prototype,!(!e||!e.isReactComponent)}function U0(e){if(typeof e=="function")return Ks(e)?1:0;if(e!=null){if(e=e.$$typeof,e===ps)return 11;if(e===hs)return 14}return 2}function Pt(e,t){var n=e.alternate;return n===null?(n=Re(e.tag,t,e.key,e.mode),n.elementType=e.elementType,n.type=e.type,n.stateNode=e.stateNode,n.alternate=e,e.alternate=n):(n.pendingProps=t,n.type=e.type,n.flags=0,n.subtreeFlags=0,n.deletions=null),n.flags=e.flags&14680064,n.childLanes=e.childLanes,n.lanes=e.lanes,n.child=e.child,n.memoizedProps=e.memoizedProps,n.memoizedState=e.memoizedState,n.updateQueue=e.updateQueue,t=e.dependencies,n.dependencies=t===null?null:{lanes:t.lanes,firstContext:t.firstContext},n.sibling=e.sibling,n.index=e.index,n.ref=e.ref,n}function wi(e,t,n,r,i,o){var l=2;if(r=e,typeof e=="function")Ks(e)&&(l=1);else if(typeof e=="string")l=5;else e:switch(e){case un:return Zt(n.children,i,o,t);case fs:l=8,i|=8;break;case sl:return e=Re(12,n,t,i|2),e.elementType=sl,e.lanes=o,e;case ul:return e=Re(13,n,t,i),e.elementType=ul,e.lanes=o,e;case al:return e=Re(19,n,t,i),e.elementType=al,e.lanes=o,e;case ec:return fo(n,i,o,t);default:if(typeof e=="object"&&e!==null)switch(e.$$typeof){case qa:l=10;break e;case ba:l=9;break e;case ps:l=11;break e;case hs:l=14;break e;case gt:l=16,r=null;break e}throw Error(S(130,e==null?e:typeof e,""))}return t=Re(l,n,t,i),t.elementType=e,t.type=r,t.lanes=o,t}function Zt(e,t,n,r){return e=Re(7,e,r,t),e.lanes=n,e}function fo(e,t,n,r){return e=Re(22,e,r,t),e.elementType=ec,e.lanes=n,e.stateNode={isHidden:!1},e}function Yo(e,t,n){return e=Re(6,e,null,t),e.lanes=n,e}function Xo(e,t,n){return t=Re(4,e.children!==null?e.children:[],e.key,t),t.lanes=n,t.stateNode={containerInfo:e.containerInfo,pendingChildren:null,implementation:e.implementation},t}function H0(e,t,n,r,i){this.tag=t,this.containerInfo=e,this.finishedWork=this.pingCache=this.current=this.pendingChildren=null,this.timeoutHandle=-1,this.callbackNode=this.pendingContext=this.context=null,this.callbackPriority=0,this.eventTimes=No(0),this.expirationTimes=No(-1),this.entangledLanes=this.finishedLanes=this.mutableReadLanes=this.expiredLanes=this.pingedLanes=this.suspendedLanes=this.pendingLanes=0,this.entanglements=No(0),this.identifierPrefix=r,this.onRecoverableError=i,this.mutableSourceEagerHydrationData=null}function Ys(e,t,n,r,i,o,l,s,u){return e=new H0(e,t,n,s,u),t===1?(t=1,o===!0&&(t|=8)):t=0,o=Re(3,null,null,t),e.current=o,o.stateNode=e,o.memoizedState={element:r,isDehydrated:n,cache:null,transitions:null,pendingSuspenseBoundaries:null},Ls(o),e}function V0(e,t,n){var r=3<arguments.length&&arguments[3]!==void 0?arguments[3]:null;return{$$typeof:sn,key:r==null?null:""+r,children:e,containerInfo:t,implementation:n}}function Qd(e){if(!e)return Tt;e=e._reactInternals;e:{if(rn(e)!==e||e.tag!==1)throw Error(S(170));var t=e;do{switch(t.tag){case 3:t=t.stateNode.context;break e;case 1:if(ke(t.type)){t=t.stateNode.__reactInternalMemoizedMergedChildContext;break e}}t=t.return}while(t!==null);throw Error(S(171))}if(e.tag===1){var n=e.type;if(ke(n))return Wc(e,n,t)}return t}function Zd(e,t,n,r,i,o,l,s,u){return e=Ys(n,r,!0,e,i,o,l,s,u),e.context=Qd(null),n=e.current,r=he(),i=zt(n),o=lt(r,i),o.callback=t??null,_t(n,o,i),e.current.lanes=i,Ir(e,i,r),Ce(e,r),e}function po(e,t,n,r){var i=t.current,o=he(),l=zt(i);return n=Qd(n),t.context===null?t.context=n:t.pendingContext=n,t=lt(o,l),t.payload={element:e},r=r===void 0?null:r,r!==null&&(t.callback=r),e=_t(i,t,l),e!==null&&(We(e,i,l,o),hi(e,i,l)),l}function Yi(e){if(e=e.current,!e.child)return null;switch(e.child.tag){case 5:return e.child.stateNode;default:return e.child.stateNode}}function da(e,t){if(e=e.memoizedState,e!==null&&e.dehydrated!==null){var n=e.retryLane;e.retryLane=n!==0&&n<t?n:t}}function Xs(e,t){da(e,t),(e=e.alternate)&&da(e,t)}function G0(){return null}var Kd=typeof reportError=="function"?reportError:function(e){console.error(e)};function Js(e){this._internalRoot=e}ho.prototype.render=Js.prototype.render=function(e){var t=this._internalRoot;if(t===null)throw Error(S(409));po(e,t,null,null)};ho.prototype.unmount=Js.prototype.unmount=function(){var e=this._internalRoot;if(e!==null){this._internalRoot=null;var t=e.containerInfo;en(function(){po(null,e,null,null)}),t[ut]=null}};function ho(e){this._internalRoot=e}ho.prototype.unstable_scheduleHydration=function(e){if(e){var t=jc();e={blockedOn:null,target:e,priority:t};for(var n=0;n<vt.length&&t!==0&&t<vt[n].priority;n++);vt.splice(n,0,e),n===0&&_c(e)}};function qs(e){return!(!e||e.nodeType!==1&&e.nodeType!==9&&e.nodeType!==11)}function mo(e){return!(!e||e.nodeType!==1&&e.nodeType!==9&&e.nodeType!==11&&(e.nodeType!==8||e.nodeValue!==" react-mount-point-unstable "))}function fa(){}function W0(e,t,n,r,i){if(i){if(typeof r=="function"){var o=r;r=function(){var d=Yi(l);o.call(d)}}var l=Zd(t,r,e,0,null,!1,!1,"",fa);return e._reactRootContainer=l,e[ut]=l.current,Sr(e.nodeType===8?e.parentNode:e),en(),l}for(;i=e.lastChild;)e.removeChild(i);if(typeof r=="function"){var s=r;r=function(){var d=Yi(u);s.call(d)}}var u=Ys(e,0,!1,null,null,!1,!1,"",fa);return e._reactRootContainer=u,e[ut]=u.current,Sr(e.nodeType===8?e.parentNode:e),en(function(){po(t,u,n,r)}),u}function go(e,t,n,r,i){var o=n._reactRootContainer;if(o){var l=o;if(typeof i=="function"){var s=i;i=function(){var u=Yi(l);s.call(u)}}po(t,l,e,i)}else l=W0(n,t,e,i,r);return Yi(l)}Cc=function(e){switch(e.tag){case 3:var t=e.stateNode;if(t.current.memoizedState.isDehydrated){var n=nr(t.pendingLanes);n!==0&&(xs(t,n|1),Ce(t,q()),!(A&6)&&(Mn=q()+500,Rt()))}break;case 13:en(function(){var r=at(e,1);if(r!==null){var i=he();We(r,e,1,i)}}),Xs(e,1)}};vs=function(e){if(e.tag===13){var t=at(e,134217728);if(t!==null){var n=he();We(t,e,134217728,n)}Xs(e,134217728)}};Sc=function(e){if(e.tag===13){var t=zt(e),n=at(e,t);if(n!==null){var r=he();We(n,e,t,r)}Xs(e,t)}};jc=function(){return F};Ec=function(e,t){var n=F;try{return F=e,t()}finally{F=n}};yl=function(e,t,n){switch(t){case"input":if(fl(e,n),t=n.name,n.type==="radio"&&t!=null){for(n=e;n.parentNode;)n=n.parentNode;for(n=n.querySelectorAll("input[name="+JSON.stringify(""+t)+'][type="radio"]'),t=0;t<n.length;t++){var r=n[t];if(r!==e&&r.form===e.form){var i=oo(r);if(!i)throw Error(S(90));nc(r),fl(r,i)}}}break;case"textarea":ic(e,n);break;case"select":t=n.value,t!=null&&wn(e,!!n.multiple,t,!1)}};dc=Ws;fc=en;var Q0={usingClientEntryPoint:!1,Events:[Ar,fn,oo,ac,cc,Ws]},qn={findFiberByHostInstance:Ht,bundleType:0,version:"18.2.0",rendererPackageName:"react-dom"},Z0={bundleType:qn.bundleType,version:qn.version,rendererPackageName:qn.rendererPackageName,rendererConfig:qn.rendererConfig,overrideHookState:null,overrideHookStateDeletePath:null,overrideHookStateRenamePath:null,overrideProps:null,overridePropsDeletePath:null,overridePropsRenamePath:null,setErrorHandler:null,setSuspenseHandler:null,scheduleUpdate:null,currentDispatcherRef:dt.ReactCurrentDispatcher,findHostInstanceByFiber:function(e){return e=mc(e),e===null?null:e.stateNode},findFiberByHostInstance:qn.findFiberByHostInstance||G0,findHostInstancesForRefresh:null,scheduleRefresh:null,scheduleRoot:null,setRefreshHandler:null,getCurrentFiber:null,reconcilerVersion:"18.2.0-next-9e3b772b8-20220608"};if(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__<"u"){var ii=__REACT_DEVTOOLS_GLOBAL_HOOK__;if(!ii.isDisabled&&ii.supportsFiber)try{to=ii.inject(Z0),qe=ii}catch{}}Ne.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=Q0;Ne.createPortal=function(e,t){var n=2<arguments.length&&arguments[2]!==void 0?arguments[2]:null;if(!qs(t))throw Error(S(200));return V0(e,t,null,n)};Ne.createRoot=function(e,t){if(!qs(e))throw Error(S(299));var n=!1,r="",i=Kd;return t!=null&&(t.unstable_strictMode===!0&&(n=!0),t.identifierPrefix!==void 0&&(r=t.identifierPrefix),t.onRecoverableError!==void 0&&(i=t.onRecoverableError)),t=Ys(e,1,!1,null,null,n,!1,r,i),e[ut]=t.current,Sr(e.nodeType===8?e.parentNode:e),new Js(t)};Ne.findDOMNode=function(e){if(e==null)return null;if(e.nodeType===1)return e;var t=e._reactInternals;if(t===void 0)throw typeof e.render=="function"?Error(S(188)):(e=Object.keys(e).join(","),Error(S(268,e)));return e=mc(t),e=e===null?null:e.stateNode,e};Ne.flushSync=function(e){return en(e)};Ne.hydrate=function(e,t,n){if(!mo(t))throw Error(S(200));return go(null,e,t,!0,n)};Ne.hydrateRoot=function(e,t,n){if(!qs(e))throw Error(S(405));var r=n!=null&&n.hydratedSources||null,i=!1,o="",l=Kd;if(n!=null&&(n.unstable_strictMode===!0&&(i=!0),n.identifierPrefix!==void 0&&(o=n.identifierPrefix),n.onRecoverableError!==void 0&&(l=n.onRecoverableError)),t=Zd(t,null,e,1,n??null,i,!1,o,l),e[ut]=t.current,Sr(e),r)for(e=0;e<r.length;e++)n=r[e],i=n._getVersion,i=i(n._source),t.mutableSourceEagerHydrationData==null?t.mutableSourceEagerHydrationData=[n,i]:t.mutableSourceEagerHydrationData.push(n,i);return new ho(t)};Ne.render=function(e,t,n){if(!mo(t))throw Error(S(200));return go(null,e,t,!1,n)};Ne.unmountComponentAtNode=function(e){if(!mo(e))throw Error(S(40));return e._reactRootContainer?(en(function(){go(null,null,e,!1,function(){e._reactRootContainer=null,e[ut]=null})}),!0):!1};Ne.unstable_batchedUpdates=Ws;Ne.unstable_renderSubtreeIntoContainer=function(e,t,n,r){if(!mo(n))throw Error(S(200));if(e==null||e._reactInternals===void 0)throw Error(S(38));return go(e,t,n,!1,r)};Ne.version="18.2.0-next-9e3b772b8-20220608";function Yd(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(Yd)}catch(e){console.error(e)}}Yd(),Za.exports=Ne;var K0=Za.exports,pa=K0;ol.createRoot=pa.createRoot,ol.hydrateRoot=pa.hydrateRoot;var ye=function(){return ye=Object.assign||function(t){for(var n,r=1,i=arguments.length;r<i;r++){n=arguments[r];for(var o in n)Object.prototype.hasOwnProperty.call(n,o)&&(t[o]=n[o])}return t},ye.apply(this,arguments)};function Xi(e,t,n){if(n||arguments.length===2)for(var r=0,i=t.length,o;r<i;r++)(o||!(r in t))&&(o||(o=Array.prototype.slice.call(t,0,r)),o[r]=t[r]);return e.concat(o||Array.prototype.slice.call(t))}var W="-ms-",hr="-moz-",D="-webkit-",Xd="comm",xo="rule",bs="decl",Y0="@import",Jd="@keyframes",X0="@layer",qd=Math.abs,eu=String.fromCharCode,ql=Object.assign;function J0(e,t){return ie(e,0)^45?(((t<<2^ie(e,0))<<2^ie(e,1))<<2^ie(e,2))<<2^ie(e,3):0}function bd(e){return e.trim()}function nt(e,t){return(e=t.exec(e))?e[0]:e}function M(e,t,n){return e.replace(t,n)}function ki(e,t,n){return e.indexOf(t,n)}function ie(e,t){return e.charCodeAt(t)|0}function Rn(e,t,n){return e.slice(t,n)}function Xe(e){return e.length}function ef(e){return e.length}function ir(e,t){return t.push(e),e}function q0(e,t){return e.map(t).join("")}function ha(e,t){return e.filter(function(n){return!nt(n,t)})}var vo=1,In=1,tf=0,De=0,b=0,Hn="";function yo(e,t,n,r,i,o,l,s){return{value:e,root:t,parent:n,type:r,props:i,children:o,line:vo,column:In,length:l,return:"",siblings:s}}function mt(e,t){return ql(yo("",null,null,"",null,null,0,e.siblings),e,{length:-e.length},t)}function ln(e){for(;e.root;)e=mt(e.root,{children:[e]});ir(e,e.siblings)}function b0(){return b}function e1(){return b=De>0?ie(Hn,--De):0,In--,b===10&&(In=1,vo--),b}function Qe(){return b=De<tf?ie(Hn,De++):0,In++,b===10&&(In=1,vo++),b}function Kt(){return ie(Hn,De)}function Ci(){return De}function wo(e,t){return Rn(Hn,e,t)}function bl(e){switch(e){case 0:case 9:case 10:case 13:case 32:return 5;case 33:case 43:case 44:case 47:case 62:case 64:case 126:case 59:case 123:case 125:return 4;case 58:return 3;case 34:case 39:case 40:case 91:return 2;case 41:case 93:return 1}return 0}function t1(e){return vo=In=1,tf=Xe(Hn=e),De=0,[]}function n1(e){return Hn="",e}function Jo(e){return bd(wo(De-1,es(e===91?e+2:e===40?e+1:e)))}function r1(e){for(;(b=Kt())&&b<33;)Qe();return bl(e)>2||bl(b)>3?"":" "}function i1(e,t){for(;--t&&Qe()&&!(b<48||b>102||b>57&&b<65||b>70&&b<97););return wo(e,Ci()+(t<6&&Kt()==32&&Qe()==32))}function es(e){for(;Qe();)switch(b){case e:return De;case 34:case 39:e!==34&&e!==39&&es(b);break;case 40:e===41&&es(e);break;case 92:Qe();break}return De}function o1(e,t){for(;Qe()&&e+b!==57;)if(e+b===84&&Kt()===47)break;return"/*"+wo(t,De-1)+"*"+eu(e===47?e:Qe())}function l1(e){for(;!bl(Kt());)Qe();return wo(e,De)}function s1(e){return n1(Si("",null,null,null,[""],e=t1(e),0,[0],e))}function Si(e,t,n,r,i,o,l,s,u){for(var d=0,g=0,m=l,h=0,w=0,k=0,j=1,R=1,f=1,c=0,p="",x=i,_=o,E=r,C=p;R;)switch(k=c,c=Qe()){case 40:if(k!=108&&ie(C,m-1)==58){ki(C+=M(Jo(c),"&","&\f"),"&\f",qd(d?s[d-1]:0))!=-1&&(f=-1);break}case 34:case 39:case 91:C+=Jo(c);break;case 9:case 10:case 13:case 32:C+=r1(k);break;case 92:C+=i1(Ci()-1,7);continue;case 47:switch(Kt()){case 42:case 47:ir(u1(o1(Qe(),Ci()),t,n,u),u);break;default:C+="/"}break;case 123*j:s[d++]=Xe(C)*f;case 125*j:case 59:case 0:switch(c){case 0:case 125:R=0;case 59+g:f==-1&&(C=M(C,/\f/g,"")),w>0&&Xe(C)-m&&ir(w>32?ga(C+";",r,n,m-1,u):ga(M(C," ","")+";",r,n,m-2,u),u);break;case 59:C+=";";default:if(ir(E=ma(C,t,n,d,g,i,s,p,x=[],_=[],m,o),o),c===123)if(g===0)Si(C,t,E,E,x,o,m,s,_);else switch(h===99&&ie(C,3)===110?100:h){case 100:case 108:case 109:case 115:Si(e,E,E,r&&ir(ma(e,E,E,0,0,i,s,p,i,x=[],m,_),_),i,_,m,s,r?x:_);break;default:Si(C,E,E,E,[""],_,0,s,_)}}d=g=w=0,j=f=1,p=C="",m=l;break;case 58:m=1+Xe(C),w=k;default:if(j<1){if(c==123)--j;else if(c==125&&j++==0&&e1()==125)continue}switch(C+=eu(c),c*j){case 38:f=g>0?1:(C+="\f",-1);break;case 44:s[d++]=(Xe(C)-1)*f,f=1;break;case 64:Kt()===45&&(C+=Jo(Qe())),h=Kt(),g=m=Xe(p=C+=l1(Ci())),c++;break;case 45:k===45&&Xe(C)==2&&(j=0)}}return o}function ma(e,t,n,r,i,o,l,s,u,d,g,m){for(var h=i-1,w=i===0?o:[""],k=ef(w),j=0,R=0,f=0;j<r;++j)for(var c=0,p=Rn(e,h+1,h=qd(R=l[j])),x=e;c<k;++c)(x=bd(R>0?w[c]+" "+p:M(p,/&\f/g,w[c])))&&(u[f++]=x);return yo(e,t,n,i===0?xo:s,u,d,g,m)}function u1(e,t,n,r){return yo(e,t,n,Xd,eu(b0()),Rn(e,2,-2),0,r)}function ga(e,t,n,r,i){return yo(e,t,n,bs,Rn(e,0,r),Rn(e,r+1,-1),r,i)}function nf(e,t,n){switch(J0(e,t)){case 5103:return D+"print-"+e+e;case 5737:case 4201:case 3177:case 3433:case 1641:case 4457:case 2921:case 5572:case 6356:case 5844:case 3191:case 6645:case 3005:case 6391:case 5879:case 5623:case 6135:case 4599:case 4855:case 4215:case 6389:case 5109:case 5365:case 5621:case 3829:return D+e+e;case 4789:return hr+e+e;case 5349:case 4246:case 4810:case 6968:case 2756:return D+e+hr+e+W+e+e;case 5936:switch(ie(e,t+11)){case 114:return D+e+W+M(e,/[svh]\w+-[tblr]{2}/,"tb")+e;case 108:return D+e+W+M(e,/[svh]\w+-[tblr]{2}/,"tb-rl")+e;case 45:return D+e+W+M(e,/[svh]\w+-[tblr]{2}/,"lr")+e}case 6828:case 4268:case 2903:return D+e+W+e+e;case 6165:return D+e+W+"flex-"+e+e;case 5187:return D+e+M(e,/(\w+).+(:[^]+)/,D+"box-$1$2"+W+"flex-$1$2")+e;case 5443:return D+e+W+"flex-item-"+M(e,/flex-|-self/g,"")+(nt(e,/flex-|baseline/)?"":W+"grid-row-"+M(e,/flex-|-self/g,""))+e;case 4675:return D+e+W+"flex-line-pack"+M(e,/align-content|flex-|-self/g,"")+e;case 5548:return D+e+W+M(e,"shrink","negative")+e;case 5292:return D+e+W+M(e,"basis","preferred-size")+e;case 6060:return D+"box-"+M(e,"-grow","")+D+e+W+M(e,"grow","positive")+e;case 4554:return D+M(e,/([^-])(transform)/g,"$1"+D+"$2")+e;case 6187:return M(M(M(e,/(zoom-|grab)/,D+"$1"),/(image-set)/,D+"$1"),e,"")+e;case 5495:case 3959:return M(e,/(image-set\([^]*)/,D+"$1$`$1");case 4968:return M(M(e,/(.+:)(flex-)?(.*)/,D+"box-pack:$3"+W+"flex-pack:$3"),/s.+-b[^;]+/,"justify")+D+e+e;case 4200:if(!nt(e,/flex-|baseline/))return W+"grid-column-align"+Rn(e,t)+e;break;case 2592:case 3360:return W+M(e,"template-","")+e;case 4384:case 3616:return n&&n.some(function(r,i){return t=i,nt(r.props,/grid-\w+-end/)})?~ki(e+(n=n[t].value),"span",0)?e:W+M(e,"-start","")+e+W+"grid-row-span:"+(~ki(n,"span",0)?nt(n,/\d+/):+nt(n,/\d+/)-+nt(e,/\d+/))+";":W+M(e,"-start","")+e;case 4896:case 4128:return n&&n.some(function(r){return nt(r.props,/grid-\w+-start/)})?e:W+M(M(e,"-end","-span"),"span ","")+e;case 4095:case 3583:case 4068:case 2532:return M(e,/(.+)-inline(.+)/,D+"$1$2")+e;case 8116:case 7059:case 5753:case 5535:case 5445:case 5701:case 4933:case 4677:case 5533:case 5789:case 5021:case 4765:if(Xe(e)-1-t>6)switch(ie(e,t+1)){case 109:if(ie(e,t+4)!==45)break;case 102:return M(e,/(.+:)(.+)-([^]+)/,"$1"+D+"$2-$3$1"+hr+(ie(e,t+3)==108?"$3":"$2-$3"))+e;case 115:return~ki(e,"stretch",0)?nf(M(e,"stretch","fill-available"),t,n)+e:e}break;case 5152:case 5920:return M(e,/(.+?):(\d+)(\s*\/\s*(span)?\s*(\d+))?(.*)/,function(r,i,o,l,s,u,d){return W+i+":"+o+d+(l?W+i+"-span:"+(s?u:+u-+o)+d:"")+e});case 4949:if(ie(e,t+6)===121)return M(e,":",":"+D)+e;break;case 6444:switch(ie(e,ie(e,14)===45?18:11)){case 120:return M(e,/(.+:)([^;\s!]+)(;|(\s+)?!.+)?/,"$1"+D+(ie(e,14)===45?"inline-":"")+"box$3$1"+D+"$2$3$1"+W+"$2box$3")+e;case 100:return M(e,":",":"+W)+e}break;case 5719:case 2647:case 2135:case 3927:case 2391:return M(e,"scroll-","scroll-snap-")+e}return e}function Ji(e,t){for(var n="",r=0;r<e.length;r++)n+=t(e[r],r,e,t)||"";return n}function a1(e,t,n,r){switch(e.type){case X0:if(e.children.length)break;case Y0:case bs:return e.return=e.return||e.value;case Xd:return"";case Jd:return e.return=e.value+"{"+Ji(e.children,r)+"}";case xo:if(!Xe(e.value=e.props.join(",")))return""}return Xe(n=Ji(e.children,r))?e.return=e.value+"{"+n+"}":""}function c1(e){var t=ef(e);return function(n,r,i,o){for(var l="",s=0;s<t;s++)l+=e[s](n,r,i,o)||"";return l}}function d1(e){return function(t){t.root||(t=t.return)&&e(t)}}function f1(e,t,n,r){if(e.length>-1&&!e.return)switch(e.type){case bs:e.return=nf(e.value,e.length,n);return;case Jd:return Ji([mt(e,{value:M(e.value,"@","@"+D)})],r);case xo:if(e.length)return q0(n=e.props,function(i){switch(nt(i,r=/(::plac\w+|:read-\w+)/)){case":read-only":case":read-write":ln(mt(e,{props:[M(i,/:(read-\w+)/,":"+hr+"$1")]})),ln(mt(e,{props:[i]})),ql(e,{props:ha(n,r)});break;case"::placeholder":ln(mt(e,{props:[M(i,/:(plac\w+)/,":"+D+"input-$1")]})),ln(mt(e,{props:[M(i,/:(plac\w+)/,":"+hr+"$1")]})),ln(mt(e,{props:[M(i,/:(plac\w+)/,W+"input-$1")]})),ln(mt(e,{props:[i]})),ql(e,{props:ha(n,r)});break}return""})}}var p1={animationIterationCount:1,borderImageOutset:1,borderImageSlice:1,borderImageWidth:1,boxFlex:1,boxFlexGroup:1,boxOrdinalGroup:1,columnCount:1,columns:1,flex:1,flexGrow:1,flexPositive:1,flexShrink:1,flexNegative:1,flexOrder:1,gridRow:1,gridRowEnd:1,gridRowSpan:1,gridRowStart:1,gridColumn:1,gridColumnEnd:1,gridColumnSpan:1,gridColumnStart:1,msGridRow:1,msGridRowSpan:1,msGridColumn:1,msGridColumnSpan:1,fontWeight:1,lineHeight:1,opacity:1,order:1,orphans:1,tabSize:1,widows:1,zIndex:1,zoom:1,WebkitLineClamp:1,fillOpacity:1,floodOpacity:1,stopOpacity:1,strokeDasharray:1,strokeDashoffset:1,strokeMiterlimit:1,strokeOpacity:1,strokeWidth:1},Ee={},On=typeof process<"u"&&Ee!==void 0&&(Ee.REACT_APP_SC_ATTR||Ee.SC_ATTR)||"data-styled",rf="active",of="data-styled-version",ko="6.1.8",tu=`/*!sc*/
`,nu=typeof window<"u"&&"HTMLElement"in window,h1=!!(typeof SC_DISABLE_SPEEDY=="boolean"?SC_DISABLE_SPEEDY:typeof process<"u"&&Ee!==void 0&&Ee.REACT_APP_SC_DISABLE_SPEEDY!==void 0&&Ee.REACT_APP_SC_DISABLE_SPEEDY!==""?Ee.REACT_APP_SC_DISABLE_SPEEDY!=="false"&&Ee.REACT_APP_SC_DISABLE_SPEEDY:typeof process<"u"&&Ee!==void 0&&Ee.SC_DISABLE_SPEEDY!==void 0&&Ee.SC_DISABLE_SPEEDY!==""&&Ee.SC_DISABLE_SPEEDY!=="false"&&Ee.SC_DISABLE_SPEEDY),Co=Object.freeze([]),An=Object.freeze({});function m1(e,t,n){return n===void 0&&(n=An),e.theme!==n.theme&&e.theme||t||n.theme}var lf=new Set(["a","abbr","address","area","article","aside","audio","b","base","bdi","bdo","big","blockquote","body","br","button","canvas","caption","cite","code","col","colgroup","data","datalist","dd","del","details","dfn","dialog","div","dl","dt","em","embed","fieldset","figcaption","figure","footer","form","h1","h2","h3","h4","h5","h6","header","hgroup","hr","html","i","iframe","img","input","ins","kbd","keygen","label","legend","li","link","main","map","mark","menu","menuitem","meta","meter","nav","noscript","object","ol","optgroup","option","output","p","param","picture","pre","progress","q","rp","rt","ruby","s","samp","script","section","select","small","source","span","strong","style","sub","summary","sup","table","tbody","td","textarea","tfoot","th","thead","time","tr","track","u","ul","use","var","video","wbr","circle","clipPath","defs","ellipse","foreignObject","g","image","line","linearGradient","marker","mask","path","pattern","polygon","polyline","radialGradient","rect","stop","svg","text","tspan"]),g1=/[!"#$%&'()*+,./:;<=>?@[\\\]^`{|}~-]+/g,x1=/(^-|-$)/g;function xa(e){return e.replace(g1,"-").replace(x1,"")}var v1=/(a)(d)/gi,oi=52,va=function(e){return String.fromCharCode(e+(e>25?39:97))};function ts(e){var t,n="";for(t=Math.abs(e);t>oi;t=t/oi|0)n=va(t%oi)+n;return(va(t%oi)+n).replace(v1,"$1-$2")}var qo,sf=5381,yn=function(e,t){for(var n=t.length;n;)e=33*e^t.charCodeAt(--n);return e},uf=function(e){return yn(sf,e)};function y1(e){return ts(uf(e)>>>0)}function w1(e){return e.displayName||e.name||"Component"}function bo(e){return typeof e=="string"&&!0}var af=typeof Symbol=="function"&&Symbol.for,cf=af?Symbol.for("react.memo"):60115,k1=af?Symbol.for("react.forward_ref"):60112,C1={childContextTypes:!0,contextType:!0,contextTypes:!0,defaultProps:!0,displayName:!0,getDefaultProps:!0,getDerivedStateFromError:!0,getDerivedStateFromProps:!0,mixins:!0,propTypes:!0,type:!0},S1={name:!0,length:!0,prototype:!0,caller:!0,callee:!0,arguments:!0,arity:!0},df={$$typeof:!0,compare:!0,defaultProps:!0,displayName:!0,propTypes:!0,type:!0},j1=((qo={})[k1]={$$typeof:!0,render:!0,defaultProps:!0,displayName:!0,propTypes:!0},qo[cf]=df,qo);function ya(e){return("type"in(t=e)&&t.type.$$typeof)===cf?df:"$$typeof"in e?j1[e.$$typeof]:C1;var t}var E1=Object.defineProperty,_1=Object.getOwnPropertyNames,wa=Object.getOwnPropertySymbols,$1=Object.getOwnPropertyDescriptor,z1=Object.getPrototypeOf,ka=Object.prototype;function ff(e,t,n){if(typeof t!="string"){if(ka){var r=z1(t);r&&r!==ka&&ff(e,r,n)}var i=_1(t);wa&&(i=i.concat(wa(t)));for(var o=ya(e),l=ya(t),s=0;s<i.length;++s){var u=i[s];if(!(u in S1||n&&n[u]||l&&u in l||o&&u in o)){var d=$1(t,u);try{E1(e,u,d)}catch{}}}}return e}function Dn(e){return typeof e=="function"}function ru(e){return typeof e=="object"&&"styledComponentId"in e}function Wt(e,t){return e&&t?"".concat(e," ").concat(t):e||t||""}function Ca(e,t){if(e.length===0)return"";for(var n=e[0],r=1;r<e.length;r++)n+=t?t+e[r]:e[r];return n}function Lr(e){return e!==null&&typeof e=="object"&&e.constructor.name===Object.name&&!("props"in e&&e.$$typeof)}function ns(e,t,n){if(n===void 0&&(n=!1),!n&&!Lr(e)&&!Array.isArray(e))return t;if(Array.isArray(t))for(var r=0;r<t.length;r++)e[r]=ns(e[r],t[r]);else if(Lr(t))for(var r in t)e[r]=ns(e[r],t[r]);return e}function iu(e,t){Object.defineProperty(e,"toString",{value:t})}function Fr(e){for(var t=[],n=1;n<arguments.length;n++)t[n-1]=arguments[n];return new Error("An error occurred. See https://github.com/styled-components/styled-components/blob/main/packages/styled-components/src/utils/errors.md#".concat(e," for more information.").concat(t.length>0?" Args: ".concat(t.join(", ")):""))}var P1=function(){function e(t){this.groupSizes=new Uint32Array(512),this.length=512,this.tag=t}return e.prototype.indexOfGroup=function(t){for(var n=0,r=0;r<t;r++)n+=this.groupSizes[r];return n},e.prototype.insertRules=function(t,n){if(t>=this.groupSizes.length){for(var r=this.groupSizes,i=r.length,o=i;t>=o;)if((o<<=1)<0)throw Fr(16,"".concat(t));this.groupSizes=new Uint32Array(o),this.groupSizes.set(r),this.length=o;for(var l=i;l<o;l++)this.groupSizes[l]=0}for(var s=this.indexOfGroup(t+1),u=(l=0,n.length);l<u;l++)this.tag.insertRule(s,n[l])&&(this.groupSizes[t]++,s++)},e.prototype.clearGroup=function(t){if(t<this.length){var n=this.groupSizes[t],r=this.indexOfGroup(t),i=r+n;this.groupSizes[t]=0;for(var o=r;o<i;o++)this.tag.deleteRule(r)}},e.prototype.getGroup=function(t){var n="";if(t>=this.length||this.groupSizes[t]===0)return n;for(var r=this.groupSizes[t],i=this.indexOfGroup(t),o=i+r,l=i;l<o;l++)n+="".concat(this.tag.getRule(l)).concat(tu);return n},e}(),ji=new Map,qi=new Map,Ei=1,li=function(e){if(ji.has(e))return ji.get(e);for(;qi.has(Ei);)Ei++;var t=Ei++;return ji.set(e,t),qi.set(t,e),t},N1=function(e,t){Ei=t+1,ji.set(e,t),qi.set(t,e)},T1="style[".concat(On,"][").concat(of,'="').concat(ko,'"]'),L1=new RegExp("^".concat(On,'\\.g(\\d+)\\[id="([\\w\\d-]+)"\\].*?"([^"]*)')),M1=function(e,t,n){for(var r,i=n.split(","),o=0,l=i.length;o<l;o++)(r=i[o])&&e.registerName(t,r)},R1=function(e,t){for(var n,r=((n=t.textContent)!==null&&n!==void 0?n:"").split(tu),i=[],o=0,l=r.length;o<l;o++){var s=r[o].trim();if(s){var u=s.match(L1);if(u){var d=0|parseInt(u[1],10),g=u[2];d!==0&&(N1(g,d),M1(e,g,u[3]),e.getTag().insertRules(d,i)),i.length=0}else i.push(s)}}};function I1(){return typeof __webpack_nonce__<"u"?__webpack_nonce__:null}var pf=function(e){var t=document.head,n=e||t,r=document.createElement("style"),i=function(s){var u=Array.from(s.querySelectorAll("style[".concat(On,"]")));return u[u.length-1]}(n),o=i!==void 0?i.nextSibling:null;r.setAttribute(On,rf),r.setAttribute(of,ko);var l=I1();return l&&r.setAttribute("nonce",l),n.insertBefore(r,o),r},O1=function(){function e(t){this.element=pf(t),this.element.appendChild(document.createTextNode("")),this.sheet=function(n){if(n.sheet)return n.sheet;for(var r=document.styleSheets,i=0,o=r.length;i<o;i++){var l=r[i];if(l.ownerNode===n)return l}throw Fr(17)}(this.element),this.length=0}return e.prototype.insertRule=function(t,n){try{return this.sheet.insertRule(n,t),this.length++,!0}catch{return!1}},e.prototype.deleteRule=function(t){this.sheet.deleteRule(t),this.length--},e.prototype.getRule=function(t){var n=this.sheet.cssRules[t];return n&&n.cssText?n.cssText:""},e}(),A1=function(){function e(t){this.element=pf(t),this.nodes=this.element.childNodes,this.length=0}return e.prototype.insertRule=function(t,n){if(t<=this.length&&t>=0){var r=document.createTextNode(n);return this.element.insertBefore(r,this.nodes[t]||null),this.length++,!0}return!1},e.prototype.deleteRule=function(t){this.element.removeChild(this.nodes[t]),this.length--},e.prototype.getRule=function(t){return t<this.length?this.nodes[t].textContent:""},e}(),D1=function(){function e(t){this.rules=[],this.length=0}return e.prototype.insertRule=function(t,n){return t<=this.length&&(this.rules.splice(t,0,n),this.length++,!0)},e.prototype.deleteRule=function(t){this.rules.splice(t,1),this.length--},e.prototype.getRule=function(t){return t<this.length?this.rules[t]:""},e}(),Sa=nu,F1={isServer:!nu,useCSSOMInjection:!h1},hf=function(){function e(t,n,r){t===void 0&&(t=An),n===void 0&&(n={});var i=this;this.options=ye(ye({},F1),t),this.gs=n,this.names=new Map(r),this.server=!!t.isServer,!this.server&&nu&&Sa&&(Sa=!1,function(o){for(var l=document.querySelectorAll(T1),s=0,u=l.length;s<u;s++){var d=l[s];d&&d.getAttribute(On)!==rf&&(R1(o,d),d.parentNode&&d.parentNode.removeChild(d))}}(this)),iu(this,function(){return function(o){for(var l=o.getTag(),s=l.length,u="",d=function(m){var h=function(f){return qi.get(f)}(m);if(h===void 0)return"continue";var w=o.names.get(h),k=l.getGroup(m);if(w===void 0||k.length===0)return"continue";var j="".concat(On,".g").concat(m,'[id="').concat(h,'"]'),R="";w!==void 0&&w.forEach(function(f){f.length>0&&(R+="".concat(f,","))}),u+="".concat(k).concat(j,'{content:"').concat(R,'"}').concat(tu)},g=0;g<s;g++)d(g);return u}(i)})}return e.registerId=function(t){return li(t)},e.prototype.reconstructWithOptions=function(t,n){return n===void 0&&(n=!0),new e(ye(ye({},this.options),t),this.gs,n&&this.names||void 0)},e.prototype.allocateGSInstance=function(t){return this.gs[t]=(this.gs[t]||0)+1},e.prototype.getTag=function(){return this.tag||(this.tag=(t=function(n){var r=n.useCSSOMInjection,i=n.target;return n.isServer?new D1(i):r?new O1(i):new A1(i)}(this.options),new P1(t)));var t},e.prototype.hasNameForId=function(t,n){return this.names.has(t)&&this.names.get(t).has(n)},e.prototype.registerName=function(t,n){if(li(t),this.names.has(t))this.names.get(t).add(n);else{var r=new Set;r.add(n),this.names.set(t,r)}},e.prototype.insertRules=function(t,n,r){this.registerName(t,n),this.getTag().insertRules(li(t),r)},e.prototype.clearNames=function(t){this.names.has(t)&&this.names.get(t).clear()},e.prototype.clearRules=function(t){this.getTag().clearGroup(li(t)),this.clearNames(t)},e.prototype.clearTag=function(){this.tag=void 0},e}(),B1=/&/g,U1=/^\s*\/\/.*$/gm;function mf(e,t){return e.map(function(n){return n.type==="rule"&&(n.value="".concat(t," ").concat(n.value),n.value=n.value.replaceAll(",",",".concat(t," ")),n.props=n.props.map(function(r){return"".concat(t," ").concat(r)})),Array.isArray(n.children)&&n.type!=="@keyframes"&&(n.children=mf(n.children,t)),n})}function H1(e){var t,n,r,i=e===void 0?An:e,o=i.options,l=o===void 0?An:o,s=i.plugins,u=s===void 0?Co:s,d=function(h,w,k){return k.startsWith(n)&&k.endsWith(n)&&k.replaceAll(n,"").length>0?".".concat(t):h},g=u.slice();g.push(function(h){h.type===xo&&h.value.includes("&")&&(h.props[0]=h.props[0].replace(B1,n).replace(r,d))}),l.prefix&&g.push(f1),g.push(a1);var m=function(h,w,k,j){w===void 0&&(w=""),k===void 0&&(k=""),j===void 0&&(j="&"),t=j,n=w,r=new RegExp("\\".concat(n,"\\b"),"g");var R=h.replace(U1,""),f=s1(k||w?"".concat(k," ").concat(w," { ").concat(R," }"):R);l.namespace&&(f=mf(f,l.namespace));var c=[];return Ji(f,c1(g.concat(d1(function(p){return c.push(p)})))),c};return m.hash=u.length?u.reduce(function(h,w){return w.name||Fr(15),yn(h,w.name)},sf).toString():"",m}var V1=new hf,rs=H1(),gf=_n.createContext({shouldForwardProp:void 0,styleSheet:V1,stylis:rs});gf.Consumer;_n.createContext(void 0);function ja(){return tn.useContext(gf)}var G1=function(){function e(t,n){var r=this;this.inject=function(i,o){o===void 0&&(o=rs);var l=r.name+o.hash;i.hasNameForId(r.id,l)||i.insertRules(r.id,l,o(r.rules,l,"@keyframes"))},this.name=t,this.id="sc-keyframes-".concat(t),this.rules=n,iu(this,function(){throw Fr(12,String(r.name))})}return e.prototype.getName=function(t){return t===void 0&&(t=rs),this.name+t.hash},e}(),W1=function(e){return e>="A"&&e<="Z"};function Ea(e){for(var t="",n=0;n<e.length;n++){var r=e[n];if(n===1&&r==="-"&&e[0]==="-")return e;W1(r)?t+="-"+r.toLowerCase():t+=r}return t.startsWith("ms-")?"-"+t:t}var xf=function(e){return e==null||e===!1||e===""},vf=function(e){var t,n,r=[];for(var i in e){var o=e[i];e.hasOwnProperty(i)&&!xf(o)&&(Array.isArray(o)&&o.isCss||Dn(o)?r.push("".concat(Ea(i),":"),o,";"):Lr(o)?r.push.apply(r,Xi(Xi(["".concat(i," {")],vf(o),!1),["}"],!1)):r.push("".concat(Ea(i),": ").concat((t=i,(n=o)==null||typeof n=="boolean"||n===""?"":typeof n!="number"||n===0||t in p1||t.startsWith("--")?String(n).trim():"".concat(n,"px")),";")))}return r};function Yt(e,t,n,r){if(xf(e))return[];if(ru(e))return[".".concat(e.styledComponentId)];if(Dn(e)){if(!Dn(o=e)||o.prototype&&o.prototype.isReactComponent||!t)return[e];var i=e(t);return Yt(i,t,n,r)}var o;return e instanceof G1?n?(e.inject(n,r),[e.getName(r)]):[e]:Lr(e)?vf(e):Array.isArray(e)?Array.prototype.concat.apply(Co,e.map(function(l){return Yt(l,t,n,r)})):[e.toString()]}function Q1(e){for(var t=0;t<e.length;t+=1){var n=e[t];if(Dn(n)&&!ru(n))return!1}return!0}var Z1=uf(ko),K1=function(){function e(t,n,r){this.rules=t,this.staticRulesId="",this.isStatic=(r===void 0||r.isStatic)&&Q1(t),this.componentId=n,this.baseHash=yn(Z1,n),this.baseStyle=r,hf.registerId(n)}return e.prototype.generateAndInjectStyles=function(t,n,r){var i=this.baseStyle?this.baseStyle.generateAndInjectStyles(t,n,r):"";if(this.isStatic&&!r.hash)if(this.staticRulesId&&n.hasNameForId(this.componentId,this.staticRulesId))i=Wt(i,this.staticRulesId);else{var o=Ca(Yt(this.rules,t,n,r)),l=ts(yn(this.baseHash,o)>>>0);if(!n.hasNameForId(this.componentId,l)){var s=r(o,".".concat(l),void 0,this.componentId);n.insertRules(this.componentId,l,s)}i=Wt(i,l),this.staticRulesId=l}else{for(var u=yn(this.baseHash,r.hash),d="",g=0;g<this.rules.length;g++){var m=this.rules[g];if(typeof m=="string")d+=m;else if(m){var h=Ca(Yt(m,t,n,r));u=yn(u,h+g),d+=h}}if(d){var w=ts(u>>>0);n.hasNameForId(this.componentId,w)||n.insertRules(this.componentId,w,r(d,".".concat(w),void 0,this.componentId)),i=Wt(i,w)}}return i},e}(),yf=_n.createContext(void 0);yf.Consumer;var el={};function Y1(e,t,n){var r=ru(e),i=e,o=!bo(e),l=t.attrs,s=l===void 0?Co:l,u=t.componentId,d=u===void 0?function(x,_){var E=typeof x!="string"?"sc":xa(x);el[E]=(el[E]||0)+1;var C="".concat(E,"-").concat(y1(ko+E+el[E]));return _?"".concat(_,"-").concat(C):C}(t.displayName,t.parentComponentId):u,g=t.displayName,m=g===void 0?function(x){return bo(x)?"styled.".concat(x):"Styled(".concat(w1(x),")")}(e):g,h=t.displayName&&t.componentId?"".concat(xa(t.displayName),"-").concat(t.componentId):t.componentId||d,w=r&&i.attrs?i.attrs.concat(s).filter(Boolean):s,k=t.shouldForwardProp;if(r&&i.shouldForwardProp){var j=i.shouldForwardProp;if(t.shouldForwardProp){var R=t.shouldForwardProp;k=function(x,_){return j(x,_)&&R(x,_)}}else k=j}var f=new K1(n,h,r?i.componentStyle:void 0);function c(x,_){return function(E,C,P){var H=E.attrs,I=E.componentStyle,Se=E.defaultProps,It=E.foldedComponentIds,Ot=E.styledComponentId,Br=E.target,So=_n.useContext(yf),Vn=ja(),At=E.shouldForwardProp||Vn.shouldForwardProp,$=m1(C,So,Se)||An,N=function(ft,je,et){for(var Gn,Ft=ye(ye({},je),{className:void 0,theme:et}),jo=0;jo<ft.length;jo+=1){var Ur=Dn(Gn=ft[jo])?Gn(Ft):Gn;for(var pt in Ur)Ft[pt]=pt==="className"?Wt(Ft[pt],Ur[pt]):pt==="style"?ye(ye({},Ft[pt]),Ur[pt]):Ur[pt]}return je.className&&(Ft.className=Wt(Ft.className,je.className)),Ft}(H,C,$),L=N.as||Br,B={};for(var U in N)N[U]===void 0||U[0]==="$"||U==="as"||U==="theme"&&N.theme===$||(U==="forwardedAs"?B.as=N.forwardedAs:At&&!At(U,L)||(B[U]=N[U]));var Dt=function(ft,je){var et=ja(),Gn=ft.generateAndInjectStyles(je,et.styleSheet,et.stylis);return Gn}(I,N),Fe=Wt(It,Ot);return Dt&&(Fe+=" "+Dt),N.className&&(Fe+=" "+N.className),B[bo(L)&&!lf.has(L)?"class":"className"]=Fe,B.ref=P,tn.createElement(L,B)}(p,x,_)}c.displayName=m;var p=_n.forwardRef(c);return p.attrs=w,p.componentStyle=f,p.displayName=m,p.shouldForwardProp=k,p.foldedComponentIds=r?Wt(i.foldedComponentIds,i.styledComponentId):"",p.styledComponentId=h,p.target=r?i.target:e,Object.defineProperty(p,"defaultProps",{get:function(){return this._foldedDefaultProps},set:function(x){this._foldedDefaultProps=r?function(_){for(var E=[],C=1;C<arguments.length;C++)E[C-1]=arguments[C];for(var P=0,H=E;P<H.length;P++)ns(_,H[P],!0);return _}({},i.defaultProps,x):x}}),iu(p,function(){return".".concat(p.styledComponentId)}),o&&ff(p,e,{attrs:!0,componentStyle:!0,displayName:!0,foldedComponentIds:!0,shouldForwardProp:!0,styledComponentId:!0,target:!0}),p}function _a(e,t){for(var n=[e[0]],r=0,i=t.length;r<i;r+=1)n.push(t[r],e[r+1]);return n}var $a=function(e){return Object.assign(e,{isCss:!0})};function bi(e){for(var t=[],n=1;n<arguments.length;n++)t[n-1]=arguments[n];if(Dn(e)||Lr(e))return $a(Yt(_a(Co,Xi([e],t,!0))));var r=e;return t.length===0&&r.length===1&&typeof r[0]=="string"?Yt(r):$a(Yt(_a(r,t)))}function is(e,t,n){if(n===void 0&&(n=An),!t)throw Fr(1,t);var r=function(i){for(var o=[],l=1;l<arguments.length;l++)o[l-1]=arguments[l];return e(t,n,bi.apply(void 0,Xi([i],o,!1)))};return r.attrs=function(i){return is(e,t,ye(ye({},n),{attrs:Array.prototype.concat(n.attrs,i).filter(Boolean)}))},r.withConfig=function(i){return is(e,t,ye(ye({},n),i))},r}var wf=function(e){return is(Y1,e)},y=wf;lf.forEach(function(e){y[e]=wf(e)});const v={white:"#FFF",black:"#000",darkGrey:"#2F333A",red:"#E73C17",darkBlue:"#191919",lightGrey:"#969696",clearGrey:"#F0F0F0",coolGrey:"#F4F5F8",midGrey:"#6F6F6F",backgroundGrey:"#F1F1F1",buttonGrey:"#D9D9D9",shadow:"#0000001A",iconGrey:"#D7D7D7",green:"#12A05C",yellow:"#FF9900",purple:"#7F7CF6",darkBlue50:"#19191980",white50:"#FFFFFF80"},si="Inter",X1="Inconsolata",T={main300:`
    font-family: ${si};
    font-weight: 300;
  `,main400:`
    font-family: ${si};
    font-weight: 400;
  `,main500:`
    font-family: ${si};
    font-weight: 500;
  `,main600:`
    font-family: ${si};
    font-weight: 600;
  `,secondary700:`
    font-family: ${X1};
    font-weight: 700;
  `},J1=y.div`
	--stroke-color: ${v.white};
`,Mr=({color:e,width:t=12,height:n=8})=>a.jsx(J1,{children:a.jsx("svg",{width:t,height:n,viewBox:`0 0 ${t} ${n}`,fill:"none",xmlns:"http://www.w3.org/2000/svg",style:{color:e||"var(--stroke-color)"},children:a.jsx("path",{d:"M1 1.5L6 6.5L11 1.5",stroke:"currentColor","stroke-width":"1.5","stroke-linecap":"round",strokeLinejoin:"round"})})}),q1=y.nav`
	display: flex;
	width: 100%;
	background-color: ${v.darkGrey};
	height: 60px;
	justify-content: space-between;
	@media (max-width: 576px) {
		display: none;
	}
`,b1=y.p`
	color: ${v.white};
	${T.main300};
	line-height: 19.36px;
	margin: 20px 0 0 80px;
	font-size: 16px;
`,eh=y.div`
	display: flex;
	align-items: center;
	margin: 0 40px 0 0;
`,za=y.p`
	color: ${v.white};
	${T.main300};
	line-height: 19.36px;
	font-size: 16px;
	padding-right: 9px;
`,th=y.p`
	color: ${v.white};
	${T.main300};
	line-height: 19.36px;
	font-size: 16px;
	margin: 0 23px;
`,nh=()=>a.jsxs(q1,{children:[a.jsx(b1,{children:"Welcome to Needus & Get the best product"}),a.jsxs(eh,{children:[a.jsx(za,{children:"ENG"}),a.jsx(Mr,{}),a.jsx(th,{children:" | "}),a.jsx(za,{children:"USD"}),a.jsx(Mr,{})]})]}),Pa=({color:e,boxSize:t=24,strokeWidth:n=1.5})=>a.jsxs("svg",{width:t,height:t,viewBox:"0 0 24 24",fill:"none",xmlns:"http://www.w3.org/2000/svg",style:{color:e||v.white},children:[a.jsxs("g",{clipPath:"url(#clip0_36_715)",children:[a.jsx("path",{d:"M10 17C13.866 17 17 13.866 17 10C17 6.13401 13.866 3 10 3C6.13401 3 3 6.13401 3 10C3 13.866 6.13401 17 10 17Z",stroke:"currentColor","stroke-width":n,"stroke-linecap":"round",strokeLinejoin:"round"}),a.jsx("path",{d:"M21 21L15 15",stroke:"currentColor","stroke-width":n,"stroke-linecap":"round",strokeLinejoin:"round"})]}),a.jsx("defs",{children:a.jsx("clipPath",{id:"clip0_36_715",children:a.jsx("rect",{width:"24",height:"24",fill:"currentColor"})})})]}),rh=({color:e})=>a.jsx("svg",{width:"18",height:"14",viewBox:"0 0 18 14",fill:"none",xmlns:"http://www.w3.org/2000/svg",style:{color:e||v.white},children:a.jsx("path",{d:"M0.75 9.75V8.375H17.25V9.75H0.75ZM0.75 4.25H17.25V5.625H0.75V4.25ZM17.25 0.125V1.5H0.75V0.125H17.25ZM0.75 12.5V13.875H17.25V12.5H0.75Z",fill:"currentColor"})}),ih=({color:e})=>a.jsx("svg",{width:"24",height:"24",viewBox:"0 0 24 24",fill:"none",xmlns:"http://www.w3.org/2000/svg",style:{color:e||v.darkBlue},children:a.jsx("path",{d:"M7 3C4.239 3 2 5.216 2 7.95C2 10.157 2.875 15.395 11.488 20.69C11.6423 20.7839 11.8194 20.8335 12 20.8335C12.1806 20.8335 12.3577 20.7839 12.512 20.69C21.125 15.395 22 10.157 22 7.95C22 5.216 19.761 3 17 3C14.239 3 12 6 12 6C12 6 9.761 3 7 3Z",stroke:"currentColor","stroke-width":"2","stroke-linecap":"round",strokeLinejoin:"round"})}),kf=({color:e,size:t=24})=>a.jsx("svg",{width:t,height:t,viewBox:"0 0 24 24",fill:"none",xmlns:"http://www.w3.org/2000/svg",style:{color:e||v.darkBlue},children:a.jsx("path",{d:"M0 2.25C0 2.05109 0.0790176 1.86032 0.21967 1.71967C0.360322 1.57902 0.551088 1.5 0.75 1.5H3C3.1673 1.50005 3.32978 1.55603 3.4616 1.65904C3.59342 1.76205 3.68701 1.90618 3.7275 2.0685L4.335 4.5H21.75C21.8601 4.5001 21.9689 4.52445 22.0685 4.57133C22.1682 4.6182 22.2563 4.68644 22.3266 4.77121C22.3969 4.85597 22.4477 4.95518 22.4753 5.06178C22.5029 5.16838 22.5068 5.27976 22.4865 5.388L20.2365 17.388C20.2043 17.5599 20.1131 17.7151 19.9786 17.8268C19.8442 17.9386 19.6749 17.9998 19.5 18H6C5.82515 17.9998 5.65585 17.9386 5.52137 17.8268C5.38688 17.7151 5.29567 17.5599 5.2635 17.388L3.015 5.4105L2.415 3H0.75C0.551088 3 0.360322 2.92098 0.21967 2.78033C0.0790176 2.63968 0 2.44891 0 2.25ZM4.653 6L6.6225 16.5H18.8775L20.847 6H4.653ZM7.5 18C6.70435 18 5.94129 18.3161 5.37868 18.8787C4.81607 19.4413 4.5 20.2044 4.5 21C4.5 21.7956 4.81607 22.5587 5.37868 23.1213C5.94129 23.6839 6.70435 24 7.5 24C8.29565 24 9.05871 23.6839 9.62132 23.1213C10.1839 22.5587 10.5 21.7956 10.5 21C10.5 20.2044 10.1839 19.4413 9.62132 18.8787C9.05871 18.3161 8.29565 18 7.5 18ZM18 18C17.2044 18 16.4413 18.3161 15.8787 18.8787C15.3161 19.4413 15 20.2044 15 21C15 21.7956 15.3161 22.5587 15.8787 23.1213C16.4413 23.6839 17.2044 24 18 24C18.7957 24 19.5587 23.6839 20.1213 23.1213C20.6839 22.5587 21 21.7956 21 21C21 20.2044 20.6839 19.4413 20.1213 18.8787C19.5587 18.3161 18.7957 18 18 18ZM7.5 19.5C7.89783 19.5 8.27936 19.658 8.56066 19.9393C8.84196 20.2206 9 20.6022 9 21C9 21.3978 8.84196 21.7794 8.56066 22.0607C8.27936 22.342 7.89783 22.5 7.5 22.5C7.10218 22.5 6.72065 22.342 6.43934 22.0607C6.15804 21.7794 6 21.3978 6 21C6 20.6022 6.15804 20.2206 6.43934 19.9393C6.72065 19.658 7.10218 19.5 7.5 19.5ZM18 19.5C18.3978 19.5 18.7794 19.658 19.0607 19.9393C19.342 20.2206 19.5 20.6022 19.5 21C19.5 21.3978 19.342 21.7794 19.0607 22.0607C18.7794 22.342 18.3978 22.5 18 22.5C17.6022 22.5 17.2206 22.342 16.9393 22.0607C16.658 21.7794 16.5 21.3978 16.5 21C16.5 20.6022 16.658 20.2206 16.9393 19.9393C17.2206 19.658 17.6022 19.5 18 19.5Z",fill:"currentColor"})}),oh=y.div`
	background-color: ${v.red};
	border-radius: 100px;
	top: -17px;
	right: -14px;

	${({small:e})=>bi`
		height: ${e?"12px":"30px"};
		width: ${e?"12px":"30px"};
		${e&&"top: -5px"};
		${e&&"right: -1px"};
	`}
	justify-content: center;
	position: absolute;
`,lh=y.p`
  ${T.main600};
  line-height: 19.36px;
  font-size: 16px;
	color: ${v.white};
	text-align: center;
	margin: 5px;
	@media (max-width: 576px) {
    ${T.main500};
    line-height: 8.47px;
    font-size: 7px;
		margin: 2px;
	}
`,Na=({unreadCount:e=0,small:t=!1})=>a.jsx(oh,{small:t,children:a.jsx(lh,{children:e||""})}),sh=({color:e})=>a.jsxs("svg",{width:"20",height:"20",viewBox:"0 0 20 20",fill:"none",xmlns:"http://www.w3.org/2000/svg",style:{color:e||v.black},children:[a.jsxs("g",{"clip-path":"url(#clip0_36_664)",children:[a.jsx("path",{d:"M10 17.5C14.1421 17.5 17.5 14.1421 17.5 10C17.5 5.85786 14.1421 2.5 10 2.5C5.85786 2.5 2.5 5.85786 2.5 10C2.5 14.1421 5.85786 17.5 10 17.5Z",stroke:"currentColor","stroke-width":"0.5","stroke-linecap":"round","stroke-linejoin":"round"}),a.jsx("path",{d:"M10 10.8333C11.3807 10.8333 12.5 9.71396 12.5 8.33325C12.5 6.95254 11.3807 5.83325 10 5.83325C8.61929 5.83325 7.5 6.95254 7.5 8.33325C7.5 9.71396 8.61929 10.8333 10 10.8333Z",stroke:"currentColor","stroke-width":"0.5","stroke-linecap":"round","stroke-linejoin":"round"}),a.jsx("path",{d:"M5.14001 15.7074C5.34627 15.0209 5.76832 14.4192 6.34355 13.9916C6.91878 13.5639 7.61655 13.333 8.33335 13.3333H11.6667C12.3844 13.333 13.083 13.5644 13.6587 13.9931C14.2343 14.4217 14.6562 15.0247 14.8617 15.7124",stroke:"currentColor","stroke-width":"0.5","stroke-linecap":"round","stroke-linejoin":"round"})]}),a.jsx("defs",{children:a.jsx("clipPath",{id:"clip0_36_664",children:a.jsx("rect",{width:"20",height:"20",fill:"white"})})})]}),uh=({color:e})=>a.jsxs("svg",{width:"20",height:"20",viewBox:"0 0 20 20",fill:"none",xmlns:"http://www.w3.org/2000/svg",style:{color:e||v.black},children:[a.jsx("g",{"clip-path":"url(#clip0_36_669)",children:a.jsx("path",{d:"M16.25 11.3101L10 17.5001L3.75003 11.3101M3.75003 11.3101C3.33778 10.9089 3.01306 10.4267 2.79632 9.89393C2.57957 9.36111 2.4755 8.78919 2.49064 8.21418C2.50579 7.63916 2.63983 7.07351 2.88432 6.55285C3.12882 6.03218 3.47847 5.56778 3.91127 5.18888C4.34406 4.80999 4.85061 4.52481 5.39904 4.3513C5.94746 4.17779 6.52587 4.11972 7.09783 4.18073C7.6698 4.24175 8.22294 4.42053 8.72242 4.70582C9.2219 4.99111 9.6569 5.37673 10 5.8384C10.3446 5.38008 10.7801 4.99783 11.2793 4.71557C11.7784 4.43331 12.3304 4.25711 12.9008 4.198C13.4712 4.13889 14.0476 4.19815 14.594 4.37206C15.1404 4.54597 15.645 4.83079 16.0763 5.2087C16.5076 5.58661 16.8562 6.04947 17.1004 6.56831C17.3445 7.08715 17.479 7.6508 17.4953 8.22399C17.5116 8.79718 17.4094 9.36756 17.1951 9.89944C16.9809 10.4313 16.6591 10.9133 16.25 11.3151",stroke:"black","stroke-width":"0.5","stroke-linecap":"round","stroke-linejoin":"round"})}),a.jsx("defs",{children:a.jsx("clipPath",{id:"clip0_36_669",children:a.jsx("rect",{width:"20",height:"20",fill:"white"})})})]}),ah=({color:e})=>a.jsxs("svg",{width:"20",height:"20",viewBox:"0 0 20 20",fill:"none",xmlns:"http://www.w3.org/2000/svg",style:{color:e||v.black},children:[a.jsxs("g",{"clip-path":"url(#clip0_36_672)",children:[a.jsx("path",{d:"M4.99998 17.5001C5.92045 17.5001 6.66665 16.7539 6.66665 15.8334C6.66665 14.9129 5.92045 14.1667 4.99998 14.1667C4.07951 14.1667 3.33331 14.9129 3.33331 15.8334C3.33331 16.7539 4.07951 17.5001 4.99998 17.5001Z",stroke:"black","stroke-width":"0.5","stroke-linecap":"round","stroke-linejoin":"round"}),a.jsx("path",{d:"M14.1667 17.5001C15.0871 17.5001 15.8333 16.7539 15.8333 15.8334C15.8333 14.9129 15.0871 14.1667 14.1667 14.1667C13.2462 14.1667 12.5 14.9129 12.5 15.8334C12.5 16.7539 13.2462 17.5001 14.1667 17.5001Z",stroke:"black","stroke-width":"0.5","stroke-linecap":"round","stroke-linejoin":"round"}),a.jsx("path",{d:"M14.1666 14.1667H4.99998V2.5H3.33331",stroke:"black","stroke-width":"0.5","stroke-linecap":"round","stroke-linejoin":"round"}),a.jsx("path",{d:"M5 4.16675L16.6667 5.00008L15.8333 10.8334H5",stroke:"black","stroke-width":"0.5","stroke-linecap":"round","stroke-linejoin":"round"})]}),a.jsx("defs",{children:a.jsx("clipPath",{id:"clip0_36_672",children:a.jsx("rect",{width:"20",height:"20",fill:"white"})})})]}),ch=y.div`
	display: flex;
	padding: 50px 40px 50px 58px;
	max-height: 150px;
	@media (max-width: 576px) {
		display: grid;
		grid-template-columns: 1fr auto 1fr;
		padding: 0;
		height: 77px;
	}
`,dh=y.p`
	${T.secondary700};
	color: ${v.darkBlue};
	font-size: 48px;
	line-height: 50.35px;
	margin: 0;
	@media (max-width: 576px) {
		${T.main600};
		font-size: 16px;
		line-height: 19.36px;
		margin: 44px auto 0;
	}
`,fh=y.span`
	color: ${v.red};
	@media (max-width: 576px) {
	}
`,ph=y.button`
	display: none;
	@media (max-width: 576px) {
		margin: 27px 16px 0;
		display: block;
		background-color: ${v.red};
		border: none;
		width: 40px;
		height: 40px;
		padding-top: 4px;
	}
`,hh=y.form`
	display: flex;
	flex-direction: row;
	position: relative;
	align-items: center;
	width: fit-content;
	@media (max-width: 576px) {
		display: none;
	}
`,mh=y.input`
	flex-grow: 1;
	background-color: ${v.white};
	border: 1px solid ${v.clearGrey};
	color: ${v.lightGrey};
	${T.main300};
	font-size: 18px;
	padding: 12px 80px 12px 15px;
	height: 76px;
	width: 449px;
	margin-left: 145px;
	box-sizing: border-box;
	@media (max-width: 1200px) {
		margin-left: 40px;
		width: 300px;
	}
`,gh=y.button`
	position: absolute;
	right: 5px;
	top: 50%;
	transform: translateY(-50%);
	height: 66px;
	width: 63px;
	padding: 21px 20px 21px 19px;
	border: none;
	background-color: ${v.darkGrey};
	color: ${v.white};
	font-size: 17px;
`,xh=y.div`
	display: flex;
	align-items: center;
	background-color: ${v.white};
	border: 1px solid ${v.clearGrey};
	padding: 0 28px 0 24px;
	width: 100%;
	max-width: 476px;
	min-width: 200px;
	white-space: nowrap;
	justify-content: space-between;
	box-sizing: border-box;
	@media (max-width: 576px) {
		display: none;
	}
`,tl=y.p`
	${T.main300};
	color: ${v.darkBlue};
	margin: 0;
	padding-right: 9px;
`,Ta=y.div`
	display: flex;
`,vh=y.p`
	color: ${v.clearGrey};
	margin: 0 9px 0 0;
`,yh=y.div`
	display: flex;
	align-items: center;
	margin-left: 39px;
	gap: 17px;
	@media (max-width: 576px) {
		display: none;
	}
`,wh=y.span`
	display: none;
	@media (max-width: 576px) {
		display: flex;
		margin: 44px 16px 0 0;
		justify-content: end;
		gap: 6px;
	}
`,kh=y.div`
	position: relative;
`,Ch=y.span`
	position: relative;
	margin-left: 8px;
`,Sh=()=>a.jsxs(ch,{children:[a.jsx(ph,{children:a.jsx(rh,{})}),a.jsxs(dh,{children:["Needus",a.jsx(fh,{children:"."})]}),a.jsxs(hh,{children:[a.jsx(mh,{placeholder:"Search Products"}),a.jsx(gh,{children:a.jsx(Pa,{})})]}),a.jsxs(xh,{children:[a.jsxs(Ta,{children:[a.jsx(tl,{children:"All Categories"}),a.jsx(Mr,{color:v.darkBlue})]}),a.jsxs(Ta,{children:[a.jsx(tl,{children:"Login"}),a.jsx(vh,{children:" | "}),a.jsx(tl,{children:"Signup"})]})]}),a.jsxs(yh,{children:[a.jsx(ih,{}),a.jsxs(kh,{children:[a.jsx(kf,{}),a.jsx(Na,{unreadCount:6})]})]}),a.jsxs(wh,{children:[a.jsx(Pa,{color:v.black,boxSize:20,"stroke-width":.5}),a.jsx(sh,{}),a.jsx(uh,{}),a.jsxs(Ch,{children:[a.jsx(ah,{}),a.jsx(Na,{unreadCount:6,small:!0})]})]})]}),jh=({color:e})=>a.jsxs("svg",{width:"30",height:"30",viewBox:"0 0 30 30",fill:"none",xmlns:"http://www.w3.org/2000/svg",style:{color:e||v.white},children:[a.jsxs("g",{"clip-path":"url(#clip0_36_725)",children:[a.jsx("path",{d:"M11.25 7.5H25",stroke:"currentColor","stroke-width":"2.5","stroke-linecap":"round","stroke-linejoin":"round"}),a.jsx("path",{d:"M11.25 15H25",stroke:"currentColor","stroke-width":"2.5","stroke-linecap":"round","stroke-linejoin":"round"}),a.jsx("path",{d:"M11.25 22.5H25",stroke:"currentColor","stroke-width":"2.5","stroke-linecap":"round","stroke-linejoin":"round"}),a.jsx("path",{d:"M6.25 7.5V7.5125",stroke:"currentColor","stroke-width":"2.5","stroke-linecap":"round","stroke-linejoin":"round"}),a.jsx("path",{d:"M6.25 15V15.0125",stroke:"currentColor","stroke-width":"2.5","stroke-linecap":"round","stroke-linejoin":"round"}),a.jsx("path",{d:"M6.25 22.5V22.5125",stroke:"currentColor","stroke-width":"2.5","stroke-linecap":"round","stroke-linejoin":"round"})]}),a.jsx("defs",{children:a.jsx("clipPath",{id:"clip0_36_725",children:a.jsx("rect",{width:"30",height:"30",fill:"currentColor"})})})]}),Eh="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACgAAAAoCAYAAACM/rhtAAAACXBIWXMAAAsTAAALEwEAmpwYAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAQbSURBVHgBzZhbaBNpFMfPjJM0l+YySSep1aSX6IrVVlxw98EiLso+7K5sl7XrLruC++A+WJDd9cEHFfVFRcUXQREEBcXrg4giVoXqg9cHLw/ekVaxUgnSUhtaczv+J63TxFw6Np02PxiSzJxzvpPv++Z85xyBxgjX1bnIZPqaXr/+kczm2RSJ1JMo2vBIoGSyn+z2pxSPPySL5Qpt2nRDWLu2jyYCXrLkK/b59rEkdTN+6rpMprfsdB6GXoiMghcsqGSz+Qgc+6DbsVxXefkxnjWrSu+4gh4hDgZbKBzeSQMDNSOaAmNpH2EJj2MpOygUekGtra9wj2njxlq4olAs9g319i7DZ2OGQUkKkyyvEsLhC1QsXFu7DrM2kDELTucVnjOnibdskXTZCAaXssNxJsOGJA1i6f+lYoCR/z8z+parqn6mMcL19ctZFF9m2LTZttJY4FDon882ejvPneunIsHMV2I2H2h2p0yJcyDw95cZIaphQejVjPh8t3nNmnIaJ3jlSju7XNc0+2bzADc363vDub1dwh67kzZzT9njCdA4w9One+DYk7SlvqlP0e9foSkJQpIVZQYZhGob+zqijTd16p+FFQ4cMOGf3NMU/P4NZDBcUbFHG8/huK/6kF9YUZanzV4nL15cQQaDsdxssYycSsHgsvTnYob0+/ctI0/EBL15Q4YTCHgx1shA3d2/55TD+q/OCshu9yEyGCzxwazjUFHWZwopSmvOc9PhOE0Gg4hxKufYPt+6IQGEELzuXTmFoEwGg3iY20GiHp4/XxFxcK+gaFR3djGBuKmz8z+R+vt/oVJlcPB7EdmvYYG4aBB0ROR1IpUqgupcIhGhUiWRiInIgG/RZKK+r/mw26+qDh6mySSZTOZ9FomcFOnduzZ8vZpHucDfGyc4zxTabNeFaPSsKKjFz44dzahxn2QJxeNRMppoNHsM1ZdA4LeMe2opiJNjK1utnVo0r6v7lQwGx+yqrBxg0aL8CTJmXOCWFkWtHWiC4KYmGdXjXynn7PYOKkXY6902XDmeS79fOkE6EhkqZ2X5EpUa3Nj47fDsxVDaGte/GSuog9qGy88TVGpwTc0fWgXZ0NBARoL0/TuEqb0ogo4iZO1BAfSTGhXyyodCMyA/1CAoK9tFRoEmkgXLcxF9l0RWZizLbcia5Swdi6U21RRQZazW+7Axbp2LbAedzr0Fe4Je79kM+erqH1Ip/dDzDjhbTUaRKvat1o5RG5dOZ492fbrnct0drXOhq79XkHi8DHmbZVS5vj639l09/2V5N/S2o4nZU0hNV4d1NBC/LsPRpXkFzObHtHDhamRHUXRbY+TxhIXz57toouB586al9lKupZWkLp45czZNNminTePKys3Yj89whXE9x+bfj66qh4rgI/lBhnVhi+lOAAAAAElFTkSuQmCC",_h=y.div`
	display: flex;
	height: 76px;
	align-items: center;
	flex-grow: 1;
	@media (max-width: 576px) {
		display: none;
	}
`,$h=y.div`
	background-color: ${v.red};
	display: flex;
	align-items: center;
	min-width: 371px;
	flex-grow: 1;
	height: 76px;
	justify-content: center;
	gap: 17px;
`,zh=y.p`
	margin: 0 10px;
	color: ${v.white};
	${T.main500};
	line-height: 29.05;
	font-size: 24px;
  @media (max-width: 1200px) {
		font-size 18px;
	}
`,Ph=y.div`
	background-color: ${v.darkGrey};
	border-right: 1px solid ${v.white};
	display: flex;
	justify-content: space-around;
	align-items: center;
	max-width: 771px;
	flex-grow: 1;
	width: 100%;
	height: 76px;
	padding: 0 88px 0 129px;
	@media (max-width: 1200px) {
		padding: 0 20px;
	}
`,Nh=y.p`
	margin: 0;
	${T.main400};
	font-size: 16px;
	line-height: 19.36px;
`,Th=y.div`
	display: flex;
	align-items: center;
	justify-content: center;
	color: ${v.white};
	gap: 8px;
	margin-right: 20px;
`,Lh=y.div`
	display: flex;
	align-items: center;
	background-color: ${v.darkGrey};
	border-left: 1px solid ${v.white};
	height: 76px;
	min-width: 298px;
	flex-grow: 1;
`,Mh=y.img`
	margin: 0 25px 0 20px;
`,Rh=y.p`
	margin: 0;
	color: ${v.white};
	${T.main300};
	line-height: 18.15px;
	font-size: 15px;
`,Ih=y.p`
	margin: 0;
	color: ${v.white};
	${T.main500};
	line-height: 21.78px;
	font-size: 18px;
`,Oh=["HOME","ABOUT","PRODUCT","PAGES","CONTACT"],Ah=()=>a.jsxs(_h,{children:[a.jsxs($h,{children:[a.jsx(jh,{}),a.jsx(zh,{children:"All Categories"}),a.jsx(Mr,{width:15,height:7.5})]}),a.jsx(Ph,{children:Oh.map((e,t)=>a.jsxs(Th,{children:[a.jsx(Nh,{children:e}),a.jsx(Mr,{})]},t))}),a.jsxs(Lh,{children:[a.jsx(Mh,{src:Eh,alt:"Contact"}),a.jsxs("div",{children:[a.jsx(Rh,{children:"Contact Us 24/7"}),a.jsx(Ih,{children:"+12012987481"})]})]})]}),Dh=y.div`
  display: flex;
  width: 100vw;
  flex-direction: column;
`,Fh=()=>a.jsxs(Dh,{children:[a.jsx(nh,{}),a.jsx(Sh,{}),a.jsx(Ah,{})]}),Bh=y.div`
	background-color: ${v.coolGrey};
	display: flex;
	width: 100vw;
	flex-direction: column;
	height: 256px;
	align-items: center;
	@media (max-width: 576px) {
		height: 72px;
	}
`,Uh=y.h1`
	${T.main500};
	color: ${v.darkBlue};
	line-height: 48.41px;
	font-size: 40px;
	margin: 82px 0 0;
	@media (max-width: 576px) {
    margin: 17px 0 0;
		font-size: 18px;
		line-height: 21.78px;
	}
`,Hh=y.h5`
	${T.main300};
	color: ${v.darkBlue};
	line-height: 32px;
	font-size: 18px;
	letter-spacing: 2px;
  margin: 20px 0 0;
	@media (max-width: 576px) {
		line-height: 12.1px;
		font-size: 10px;
    margin: 5px 0 0;
	}
`,Vh=()=>a.jsxs(Bh,{children:[a.jsx(Uh,{children:"TV COLLECTION"}),a.jsx(Hh,{children:"HOME / PRODUCT / TV COLLECTION"})]}),Gh=({color:e})=>a.jsx("svg",{width:"6",height:"9",viewBox:"0 0 6 9",fill:"none",xmlns:"http://www.w3.org/2000/svg",style:{color:e||v.white},children:a.jsx("path",{d:"M5 0.5L1 4.5L5 8.5",stroke:"white","stroke-linecap":"round","stroke-linejoin":"round"})}),Wh=({color:e})=>a.jsx("svg",{width:"6",height:"9",viewBox:"0 0 6 9",fill:"none",xmlns:"http://www.w3.org/2000/svg",style:{color:e||v.white},children:a.jsx("path",{d:"M1 0.5L5 4.5L1 8.5",stroke:"white","stroke-linecap":"round","stroke-linejoin":"round"})}),Qh=y.div`
	display: flex;
	flex-direction: column;
	align-items: center;
	@media (min-width: 576px) {
		flex-direction: row-reverse;
		justify-content: center;
		align-items: flex-start;
		width: 692px;
		height: 548px;
		margin: 0 0 0 50px;
	}
`,Zh=y.div`
	display: flex;
	width: 300px;
	height: 200px;
	justify-content: center;
	align-items: center;
	margin: 10px 45px 5.8px;
	@media (min-width: 576px) {
		background-color: ${v.backgroundGrey};
		width: 528px;
		height: 548px;
		margin: 0 0 0 12px;
	}
`,Kh=y.img`
	width: 300px;
	height: 200px;
	@media (min-width: 576px) {
		width: 468px;
		height: 310px;
	}
`,Yh=y.div`
	display: flex;
	align-items: center;
	justify-content: space-between;
	width: 353px;
	height: 89px;
	overflow: hidden;
	@media (min-width: 576px) {
		flex-direction: column;
		width: 152px;
		height: 548px;
	}
`,Xh=y.div`
	display: flex;
	width: 83px;
	height: 88px;
	align-items: center;
	justify-content: center;
	border: 1px solid ${v.backgroundGrey};
	@media (min-width: 576px) {
		width: 151px;
		height: 115px;
	}
`,Jh=y.img`
	width: 69px;
	height: 52px;
	@media (min-width: 576px) {
		width: 128px;
		height: 80px;
	}
`,La=y.button`
	display: block;
	width: 20px;
	height: 20px;
	background-color: ${v.red};
	border: none;
	@media (min-width: 576px) {
		display: none;
		margin: 0 5px;
	}
`,qh=y.p`
	margin: 0 0 11px;
	${T.main300};
	line-height: 12.1px;
	font-size: 10px;
	color: ${v.midGrey};
	@media (min-width: 576px) {
		margin: 24px 0 0 12px;
		line-height: 18.15px;
		font-size: 15px;
	}
`,bh=y.div`
	display: flex;
	flex-direction: column;
	align-items: center;
	@media (min-width: 576px) {
		flex-direction: column;
		align-items: start;
	}
`,em=({photos:e})=>{const[t,n]=tn.useState(e[0]),r=e.indexOf(t),o=window.innerWidth<576?e.slice(0,-1):e;return a.jsxs(Qh,{children:[a.jsxs(bh,{children:[a.jsx(Zh,{children:a.jsx(Kh,{src:t})}),a.jsx(qh,{children:"*LG C2 42 (106cm) 4K Smart OLED evo TV"})]}),a.jsxs(Yh,{children:[a.jsx(La,{onClick:()=>{},style:r===0?{backgroundColor:`${v.buttonGrey}`}:{},children:a.jsx(Gh,{})}),o.map((l,s)=>a.jsx(Xh,{onClick:()=>n(l),style:r===s?{border:`1px solid ${v.red}`}:{},children:a.jsx(Jh,{src:l})},s)),a.jsx(La,{onClick:()=>{},style:r===o.length-1?{backgroundColor:`${v.buttonGrey}`}:{},children:a.jsx(Wh,{})})]})]})},tm=({color:e,width:t=16,height:n=18})=>a.jsxs("svg",{width:t,height:n,viewBox:"0 0 16 18",fill:"none",xmlns:"http://www.w3.org/2000/svg",style:{color:e||v.black},children:[a.jsx("g",{"clip-path":"url(#clip0_36_544)",children:a.jsx("path",{d:"M3.33331 9.08997H12.6666",stroke:"black","stroke-with":"0.5","stroke-linecap":"round","stroke-linejoin":"round"})}),a.jsx("defs",{children:a.jsx("clipPath",{id:"clip0_36_544",children:a.jsx("rect",{width:"16",height:"17.7978",fill:"white",transform:"translate(0 0.19104)"})})})]}),nm=({color:e,width:t=16,height:n=18})=>a.jsxs("svg",{width:t,height:n,viewBox:"0 0 16 18",fill:"none",xmlns:"http://www.w3.org/2000/svg",style:{color:e||v.black},children:[a.jsxs("g",{"clip-path":"url(#clip0_36_547)",children:[a.jsx("path",{d:"M8 3.89893V14.2809",stroke:"black","stroke-with":"0.5","stroke-linecap":"round","stroke-linejoin":"round"}),a.jsx("path",{d:"M3.33331 9.08997H12.6666",stroke:"black","stroke-with":"0.5","stroke-linecap":"round","stroke-linejoin":"round"})]}),a.jsx("defs",{children:a.jsx("clipPath",{id:"clip0_36_547",children:a.jsx("rect",{width:"16",height:"17.7978",fill:"white",transform:"translate(0 0.19104)"})})})]}),rm=y.div`
	max-width: 550px;
	display: flex;
	flex-direction: column;
	justify-content: space-between;
	position: fixed;
	width: 100%;
	bottom: 0;
	background-color: white;
	z-index: 10;
	box-sizing: border-box;
	height: 100px;
	padding: 10px 24px 12px 21px;
	box-shadow: 0 -4px 6px -1px ${v.shadow};
	@media (min-width: 576px) {
		box-shadow: none;
		flex-direction: column;
		justify-content: space-between;
		position: relative;
		padding: 20px 0 0;
		margin: 0 20px 0 35px;
		height: fit-content;
	}
`,im=y.div`
	@media (min-width: 576px) {
		order: 1;
		padding-right: 20px;
	}
`,om=y.p`
	margin: 5px 0;
	${T.main300};
	line-height: 12.1px;
	font-size: 10px;
	@media (min-width: 576px) {
		${T.main400};
		line-height: 19.36px;
		font-size: 16px;
	}
`,lm=y.p`
	margin: 5px 0;
	${T.main500};
	line-height: 21.78px;
	font-size: 18px;
	@media (min-width: 576px) {
		${T.main400};
		line-height: 38.73px;
		font-size: 32px;
	}
`,sm=y.span`
	margin: 5px 9px;
	${T.main500};
	line-height: 19.36px;
	font-size: 16px;
	color: ${v.buttonGrey};
	text-decoration: line-through;
	text-decoration-style: solid;
	text-decoration-thickness: 2px;
	@media (min-width: 576px) {
		${T.main400};
		line-height: 29.05px;
		font-size: 24px;
	}
`,um=y.div`
	display: flex;
	align-items: center;
	background-color: ${v.white};
	height: 31px;
	@media (min-width: 576px) {
		height: 60px;
		order: 3;
		justify-content: flex-end;
		flex-grow: 1;
		margin-top: 8px;
	}
`,Ma=y.button`
	border: 1px solid ${v.buttonGrey};
	background-color: ${v.white};
	margin: 0;
	width: 25px;
	height: 100%;
	@media (min-width: 576px) {
		width: 64px;
	}
`,am=y.span`
	${T.main500};
	font-size: 10px;
	line-height: 12.1px;
	border-top: 1px solid ${v.buttonGrey};
	border-bottom: 1px solid ${v.buttonGrey};
	width: 25px;
	height: 100%;
	box-sizing: border-box;
	text-align: center;
	padding: 9px;
	@media (min-width: 576px) {
		width: 74px;
		${T.main400};
		line-height: 38.73px;
		font-size: 32px;
	}
`,cm=y.div`
	display: flex;
	flex-direction: column;
	@media (min-width: 576px) {
		flex-direction: row;
	}
`,Ra=y.button`
	width: 120px;
	height: 30px;
	${({outline:e})=>e?bi`
					background-color: ${v.white};
					border: 1px solid ${v.red};
					color: ${v.red};
			  `:bi`
					background-color: ${v.red};
					border: none;
			  `}

	margin: 0;
	${T.main500};
	font-size: 14px;
	lineheight: 16.94px;
	@media (min-width: 576px) {
		font-size: 18px;
		line-height: 21.78px;
		width: 202px;
		height: 60px;
	}
`,dm=y.div`
	display: flex;
	justify-content: center;
	position: absolute;
	bottom: 10px;
	right: 24px;
	gap: 10px;
	@media (min-width: 576px) {
		order: 2;
		width: auto;
		justify-content: space-between;
		margin-top: 26px;
		position: relative;
		right: 0px;
	}
`,fm=()=>{const e=window.innerWidth<576;return a.jsxs(rm,{children:[a.jsxs(cm,{children:[a.jsxs(im,{children:[a.jsx(om,{children:"USD(incl. of all taxes):"}),a.jsxs(lm,{children:["$600.72",a.jsx(sm,{children:"$800.00"})]})]}),a.jsxs(um,{children:[a.jsx(Ma,{children:a.jsx(tm,{width:e?16:24,height:e?18:24})}),a.jsx(am,{children:"1"}),a.jsx(Ma,{children:a.jsx(nm,{width:e?16:24,height:e?18:24})})]})]}),a.jsxs(dm,{children:[a.jsx(Ra,{children:"Buy Now"}),a.jsx(Ra,{outline:!0,children:"Add to Cart"})]})]})},pm=y.div`
	display: flex;
	flex-wrap: wrap;
	justify-content: space-around;
	height: 75px;
	padding: 10px 0;
	align-items: center;
	border-top: 1px solid ${v.clearGrey};
	border-bottom: 1px solid ${v.clearGrey};
	margin: 20px 0 0;
	@media (min-width: 576px) {
		margin: 27px 0 0;
    padding: 0;
		height: 178px;
	}
`,hm=y.p`
  display: flex;
	${T.main400};
	line-height: 12.1px;
	font-size: 10px;
	width: 30%;
	text-align: center;
	margin: 0;
	@media (min-width: 576px) {
    ${T.main300};
    font-size: 18px;
    line-height: 21.78px;
    text-align: left;
		width: 30%;
		height: 60px;
    align-items: center;
    justify-content: center;
	}
`,mm=({measures:e})=>{const t=window.innerWidth<576;return a.jsx(pm,{children:e.map((n,r)=>a.jsx(hm,{style:{color:r===0?v.red:"inherit",border:r===0&&!t?`1px solid ${v.red}`:"none"},children:n},r))})},gm=y.svg`
  margin: ${({margin:e="3px 6px 4px 0"})=>e};
`,Cf=({color:e,size:t=4,margin:n})=>a.jsx(gm,{width:t,height:t,viewBox:"0 0 4 4",fill:"none",xmlns:"http://www.w3.org/2000/svg",style:{color:e||v.darkBlue},margin:n,children:a.jsx("circle",{cx:"2",cy:"2",r:"2",fill:"currentColor"})}),bn=({color:e,size:t=10})=>a.jsx("svg",{width:t,height:t,viewBox:"0 0 10 10",fill:"none",xmlns:"http://www.w3.org/2000/svg",style:{color:e||v.white},children:a.jsx("path",{d:"M5 0L6.12257 3.45492H9.75528L6.81636 5.59017L7.93893 9.04508L5 6.90983L2.06107 9.04508L3.18364 5.59017L0.244718 3.45492H3.87743L5 0Z",fill:"currentColor"})}),xm="/productdetilspage/assets/tv1sm-B1efzPce.png",vm="/productdetilspage/assets/tv2-1RU9NbZh.png",ym="/productdetilspage/assets/tv3-DxxUCzkm.png",wm="/productdetilspage/assets/tv4-DsvySfex.png",km=[xm,vm,ym,wm],Cm=y.div`
	display: flex;
	flex-direction: column;
	margin: 0;
	@media (min-width: 576px) {
		flex-direction: row;
		margin: 82px 0 0;
	}
`,Sm=y.div`
	margin: 18px 20px 20px;
	max-width: 550px;
	@media (min-width: 576px) {
		margin: 0 20px 30px 35px;
	}
`,nl=y.p`
	margin: 0;
	${T.main400};
	lineheight: 12.1px;
	font-size: 10px;
	@media (min-width: 576px) {
		font-size: 18px;
		lineheight: 21.78px;
	}
`,rl=y.span`
	${T.main500};
	lineheight: 12.1px;
	font-size: 10px;
	@media (min-width: 576px) {
		font-size: 18px;
		lineheight: 21.78px;
	}
`,jm=y.p`
	${T.main500};
	line-height: 16.94px;
	font-size: 14px;
	color: ${v.darkBlue};
	margin: 8px 0 0 0;
	text-transform: uppercase;
	@media (min-width: 576px) {
		margin: 20px 0 0 0;
		line-height: 38.73px;
		font-size: 32px;
	}
`,Em=y.div`
	display: flex;
	margin: 7px 0 12px;
	gap: 4px;
	@media (min-width: 576px) {
		margin: 20px 0;
	}
`,_m=y.ul`
	display: flex;
	flex-direction: column;
	list-style-type: none;
	padding: 0;
	margin: 0;
`,$m=y.li`
	text-align: start;
	margin: 0;
	padding: 0;
	${T.main300};
	font-size: 11px;
	line-height: 13.31px;
	@media (min-width: 576px) {
		font-size: 16px;
		line-height: 19.36px;
		margin: 8px 0;
	}
`,zm=y.div`
	display: flex;
	flex-direction: column;
	@media (min-width: 576px) {
		flex-direction: column;
	}
`,Pm=()=>{const e=window.innerWidth<576,t=["α9 Gen5 AI Processor with AI Picture Pro & AI 4K Upscaling","Pixel Dimming, Perfect Black, 100% Color Fidelity & Color Volume","Hands-free Voice Control, Always Ready","Dolby Vision IQ with Precision Detail, Dolby Atmos, Filmmaker Mode","Eye Comfort Display: Low-Blue Light, Flicker-Free"],n=["106 cm (42)","121 cm (48)","139 cm (55)","164 cm (65)","196 cm (77)","210 cm (83)"];return a.jsxs(Cm,{children:[a.jsx(em,{photos:km}),a.jsxs(zm,{children:[a.jsxs(Sm,{children:[a.jsxs(nl,{children:[a.jsx(rl,{children:"Brand: "}),"LG"]}),a.jsxs(nl,{children:[a.jsx(rl,{children:"Model: "}),"OLED42C2PSA"]}),a.jsxs(nl,{children:[a.jsx(rl,{children:"Availability: "}),"Only 2 in Stock"]}),a.jsx(jm,{children:"LG C2 42 (106cm) 4K Smart OLED evo TV | WebOS | Cinema HDR"}),a.jsxs(Em,{children:[a.jsx(bn,{color:v.red,size:e?10:30}),a.jsx(bn,{color:v.red,size:e?10:30}),a.jsx(bn,{color:v.red,size:e?10:30}),a.jsx(bn,{color:v.red,size:e?10:30}),a.jsx(bn,{color:v.backgroundGrey,size:e?10:30})]}),a.jsx(_m,{children:t.map((r,i)=>a.jsxs($m,{children:[a.jsx(Cf,{size:e?4:8,margin:e?void 0:"0 3px 2px 0"}),r]},i))}),a.jsx(mm,{measures:n})]}),a.jsx(fm,{})]})]})},Nm=y.div`
	display: flex;
	flex-direction: column;
	width: 100%;
	@media (min-width: 576px) {
		margin: 100px 0 0;
	}
`,Tm=y.div`
	display: flex;
	justify-content: center;
	margin-bottom: 6px;
	border-bottom: 0.6px solid ${v.buttonGrey};
  @media (min-width: 576px) {
		gap: 110px;
	}
`,Lm=y.div`
	margin: 0 14px 7px;
	cursor: pointer;
	border-bottom: 2px solid transparent;
	text-transform: capitalize;
	${T.main500};
	font-size: 12px;
	line-height: 14.52px;
	color: ${v.black};
	${({isActive:e})=>e&&`
      border-bottom: 2px solid red;
      margin-bottom: -1px;
    `}
  @media (min-width: 576px) {
		font-size: 22px;
	  line-height: 26.63px;
    margin: 0 100px;
	}
`,Mm=y.div`
	${T.main300};
	line-height: 12.1px;
	font-size: 10px;
	color: ${v.darkBlue};
	height: 130px;
  max-width: 1000px;
  @media (min-width: 576px) {
    line-height: 21.78px;
	  font-size: 18px;
    margin: 0 auto;
  }
`,Rm=y.span`
	color: ${v.red};
`,Im=()=>{const[e,t]=tn.useState(1),r={description:a.jsxs(a.Fragment,{children:[a.jsx("p",{children:"The LG C2 42 (106cm) 4K Smart OLED evo TV is the best all around OLED TV we've tested. Although all OLEDs deliver similar fantastic picture quality, this one stands out for its value because it has many gaming oriented features that are great for gamers."}),a.jsx("p",{children:"*Only 65G2 is shown in the image for example purposes. All 2022 LG OLED models feature eco-friendly packaging."}),a.jsxs("p",{children:["**65C2 Stand model is at a minimum 39% lighter than the C1 series."," ",a.jsx(Rm,{children:"More..."})]})]}),specification:a.jsx("p",{children:"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam iaculis, metus eu rhoncus efficitur, turpis sem tempus massa, id consectetur nunc purus in lectus. Donec non velit a odio volutpat volutpat in in nisi. Maecenas aliquet turpis lacus, id pharetra elit sagittis vel. Ut consectetur nisi quis ullamcorper pellentesque. Integer efficitur interdum nunc, ut elementum nulla. Phasellus feugiat nulla et rhoncus porttitor. Nullam at lectus sed turpis porttitor viverra accumsan hendrerit lorem. Praesent tincidunt nisi at nunc suscipit malesuada."}),reviews:a.jsx("p",{children:"Suspendisse potenti. Sed dapibus bibendum orci, eget semper diam tincidunt eget. Nulla a mi non nulla fermentum molestie. Aenean magna massa, tempus quis risus nec, sollicitudin consectetur mi. Donec dictum nulla sed nulla semper elementum. Nulla dictum ultrices risus, id ornare arcu rutrum vel. Curabitur vestibulum id nisi at pellentesque. Aenean a lacinia tellus. Aliquam iaculis odio sit amet velit laoreet, non feugiat tellus elementum."})},i=Object.keys(r);return a.jsxs(Nm,{children:[a.jsx(Tm,{children:i.map((o,l)=>a.jsx(Lm,{isActive:e===l,onClick:()=>t(l),children:o},l))}),a.jsx(Mm,{children:r[i[e]]})]})},Om=({color:e,width:t=9,height:n=8})=>a.jsx("svg",{width:t,height:n,viewBox:"0 0 9 8",fill:"none",xmlns:"http://www.w3.org/2000/svg",style:{color:e||v.iconGrey},children:a.jsx("path",{d:"M8.51367 1.76954C8.38277 1.46645 8.19403 1.19179 7.95801 0.960944C7.72181 0.729407 7.44332 0.545408 7.1377 0.418952C6.82078 0.287305 6.48087 0.21992 6.1377 0.22071C5.65625 0.22071 5.18652 0.352546 4.77832 0.601569C4.68066 0.66114 4.58789 0.726569 4.5 0.797858C4.41211 0.726569 4.31934 0.66114 4.22168 0.601569C3.81348 0.352546 3.34375 0.22071 2.8623 0.22071C2.51562 0.22071 2.17969 0.287116 1.8623 0.418952C1.55566 0.545905 1.2793 0.728523 1.04199 0.960944C0.805661 1.19153 0.616873 1.46625 0.486328 1.76954C0.350586 2.08497 0.28125 2.41993 0.28125 2.76466C0.28125 3.08985 0.347656 3.42872 0.479492 3.77344C0.589844 4.06153 0.748047 4.36036 0.950195 4.66212C1.27051 5.13966 1.71094 5.6377 2.25781 6.14259C3.16406 6.9795 4.06152 7.55762 4.09961 7.58106L4.33105 7.7295C4.43359 7.79493 4.56543 7.79493 4.66797 7.7295L4.89941 7.58106C4.9375 7.55665 5.83398 6.9795 6.74121 6.14259C7.28809 5.6377 7.72852 5.13966 8.04883 4.66212C8.25098 4.36036 8.41016 4.06153 8.51953 3.77344C8.65137 3.42872 8.71777 3.08985 8.71777 2.76466C8.71875 2.41993 8.64941 2.08497 8.51367 1.76954Z",fill:"currentColor"})}),Am=y.div`
	display: flex;
	justify-content: center;
	flex-direction: column;
	width: 145px;
	height: 227px;
	box-sizing: border-box;
	@media (min-width: 576px) {
		width: 300px;
	}
`,Dm=y.div`
	padding: 0 16px 20px;
	height: 166px;
	position: relative;
	background-color: ${v.clearGrey};
	display: flex;
	flex-direction: column;
	align-items: center;
	justify-content: flex-end;
	@media (min-width: 576px) {
		min-height: 430px;
	}
`,Fm=y.div`
	display: flex;
	min-width: 28px;
	width: fit-content;
	height: 11px;
	padding: 0 3px;
	background-color: ${e=>e.tagColor};
	position: absolute;
	border-radius: 100px;
	top: 9px;
	left: 8px;
	${T.main500};
	line-height: 7.26px;
	font-size: 6px;
	color: ${v.white};
	justify-content: center;
	align-items: center;
	@media (min-width: 576px) {
		min-width: 57px;
		top: 22px;
		left: 23px;
		height: 26px;
		line-height: 14.52px;
		font-size: 12px;
		padding: 0 10px;
	}
`,Bm=y.div`
	position: absolute;
	top: 7px;
	right: 9px;
	width: 20px;
	height: 20px;
	border-radius: 50%;
	border: 1px solid ${v.iconGrey};
	background-color: ${v.clearGrey};
	display: flex;
	justify-content: center;
	align-items: center;
	cursor: pointer;
	@media (min-width: 576px) {
		top: 13px;
		right: 35px;
		width: 60px;
		height: 60px;
	}
`,Um=y.div`
	width: 100px;
	height: 106px;
	display: flex;
	justify-content: center;
	align-items: end;
	padding: 25px 0px;
	@media (min-width: 576px) {
		width: 257px;
		height: 257px;
		padding: 0 0 60px;
	}
`,Hm=y.img`
	width: 100px;
	height: 66px;
	object-fit: cover;
	@media (min-width: 576px) {
		width: 230px;
		height: 145px;
	}
`,Vm=y.button`
	width: 97px;
	height: 25px;
	background-color: ${v.white};
	color: ${v.midGrey};
	border: none;
	padding: 0;
	cursor: pointer;
	${T.main500};
	line-height: 9.68px;
	font-size: 8px;
	align-items: center;
	display: flex;
	justify-content: center;
	gap: 8px;
	@media (min-width: 576px) {
		width: 203px;
		height: 51px;
		margin-bottom: 27px;
		font-size: 18px;
		line-height: 21.78px;
	}
`,Gm=y.div`
	display: flex;
	flex-direction: column;
	text-align: center;
`,Wm=y.p`
	margin: 12px 0 0;
	${T.main400};
	font-size: 10px;
	line-height: 13.31px;
	color: ${v.darkBlue};
	@media (min-width: 576px) {
		margin: 38px 0 0;
		font-size: 20px;
		line-height: 24.2px;
	}
`,Qm=y.p`
	margin: 0;
	${T.main600};
	font-size: 12px;
	line-height: 14.52px;
	color: ${v.darkBlue};
	@media (min-width: 576px) {
		margin: 13px 0 0;
		font-size: 20px;
		line-height: 24.2px;
	}
`,Zm=y.span`
	${T.main600};
	line-height: 12.1px;
	font-size: 10px;
	color: ${v.buttonGrey};
	text-decoration: line-through;
	text-decoration-style: solid;
	text-decoration-thickness: 2px;
	margin: 0 3px 0 6px;
	@media (min-width: 576px) {
    font-size: 20px;
    line-height: 24.2px;
  }
	}
`,Km=({buttonText:e="Add to cart",imageUrl:t,isFavorite:n,onFavoriteToggle:r,tagColor:i,tagText:o,text:l,price:s,offer:u})=>{const d=window.innerWidth<576;return a.jsxs(Am,{children:[a.jsxs(Dm,{children:[a.jsx(Fm,{tagColor:i,children:o}),a.jsx(Bm,{onClick:r,children:a.jsx(Om,{width:d?9:25,height:d?8:22,color:n?v.red:""})}),a.jsx(Um,{children:a.jsx(Hm,{src:t,alt:"Card Image"})}),a.jsxs(Vm,{children:[a.jsx(kf,{size:d?11:18,color:v.midGrey}),e]})]}),a.jsxs(Gm,{children:[a.jsx(Wm,{children:l}),a.jsxs(Qm,{children:[s,u&&a.jsx(Zm,{children:u})]})]})]})},Ym="/productdetilspage/assets/other1-CdV69cfw.png",Xm="/productdetilspage/assets/other2-Dx58oyzj.png",Jm="/productdetilspage/assets/other3-DNkSZrxF.png",qm="/productdetilspage/assets/other4-DrdSzIsz.png",Ia=[{tagText:"NEW",tagColor:v.green,isFavorite:!0,imageUrl:Ym,text:"Sony BRAVIA XR Android TV",price:"$800.22",offer:"$1000.66"},{tagText:"-10%",tagColor:v.red,isFavorite:!1,imageUrl:Xm,text:"Mi P1 Smart Android HD TV",price:"$400.00"},{tagText:"HOT",tagColor:v.yellow,isFavorite:!1,imageUrl:Jm,text:"Konka OLED Android Tv",price:"$700.00"},{tagText:"2 Years Warranty",tagColor:v.purple,isFavorite:!1,imageUrl:qm,text:"TCL Roku Android Tv",price:"$800.00"}],bm=y.div`
	display: flex;
	flex-direction: column;
	width: 100%;
	justify-content: center;
	@media (min-width: 576px) {
		margin: 100px 0 0;
	}
`,eg=y.h4`
	${T.main500};
	line-height: 21.78px;
	font-size: 18px;
	color: ${v.black};
	margin: 10px 0 16px;
	text-align: center;
	@media (min-width: 576px) {
		color: ${v.darkBlue};
		line-height: 38.73px;
		font-size: 32px;
		margin: 10px 0 66px;
	}
`,tg=y.div`
	display: flex;
	gap: 24px;
	justify-content: center;
	align-items: center;
	@media (min-width: 576px) {
		height: 530px;
	}
`,ng=y.div`
	display: flex;
	width: 100%;
	justify-content: center;
	margin: 28px 0 0;
	gap: 6px;
	@media (min-width: 576px) {
		margin: 53px 0 0;
		gap: 8px;
	}
`,rg=()=>{const e=window.innerWidth<576,t=e?Ia.slice(0,-2):Ia;return a.jsxs(bm,{children:[a.jsx(eg,{children:"Related Products"}),a.jsx(tg,{children:t.map(n=>a.jsx(Km,{tagText:n.tagText,tagColor:n.tagColor,onFavoriteToggle:()=>{},isFavorite:n.isFavorite,imageUrl:n.imageUrl,text:n.text,price:n.price,offer:n.offer}))}),a.jsx(ng,{children:Array.from({length:5}).map((n,r)=>a.jsx(Cf,{color:r===0?v.red:v.iconGrey,size:e?6:14},r))})]})},ig=y.section`
	display: flex;
	flex-direction: column;
	margin: 0 20px 0;
	@media (min-width: 576px) {
		margin: 0 20px 0;
	}
`,og=()=>a.jsxs(ig,{children:[a.jsx(Im,{}),a.jsx(rg,{})]}),lg="/productdetilspage/assets/formBG-yDXw9Dk0.jpeg",sg=y.div`
	display: flex;
	width: 100vw;
	height: 169px;
	margin: 58px 0 0;
	flex-direction: column;
	background-image: url(${lg});
	background-size: cover;
	background-repeat: no-repeat;
	background-position: center center;
	box-shadow: inset 0 0 0 1000px ${v.darkBlue50};
	@media (min-width: 576px) {
		height: 120px;
		flex-direction: row;
		justify-content: center;
		gap: 115px;
	}
`,ug=y.form`
	display: flex;
	flex-direction: row;
	align-items: center;
	margin: 0 20px;
	@media (min-width: 576px) {
		flex-direction: row;
	}
`,ag=y.div`
	display: flex;
	flex-direction: column;
	@media (min-width: 576px) {
		justify-content: center;
		align-items: flex-start;
	}
`,cg=y.h5`
	margin: 36px 20px 0;
	color: ${v.white};
	${T.main600};
	font-size: 18px;
	line-height: 21.78px;
	@media (min-width: 576px) {
		font-size: 28px;
		line-height: 33.89px;

		margin: 0;
	}
`,dg=y.p`
	margin: 4px 20px 0;
	color: ${v.white};
	${T.main400};
	font-size: 14px;
	line-height: 16.94px;
	@media (min-width: 576px) {
		font-size: 20px;
		line-height: 23.2px;
		margin-left: 0;
	}
`,fg=y.input`
	background-color: ${v.white};
	color: ${v.midGrey};
	${T.main500};
	font-size: 10px;
	line-height: 12.1;
	padding: 12px 15px;
	border: none;
	border-radius: 1px;
	height: 37px;
	width: 215px;
	margin: 16px 0;
	box-sizing: border-box;
	@media (min-width: 576px) {
		width: 447px;
		height: 73px;
		${T.main400};
		font-size: 20px;
		line-height: 24.2;
		padding: 25px 37px;
	}
`,pg=y.button`
  background-color: ${v.red};
  color: ${v.white};
  width: 100px;
  height: 37px;
  border: none;
	border-radius: 1px;
  padding; 12px 30px;
  ${T.main500};
  font-size: 12px;
  line-height: 14.52px;
  margin: 17px 0px;
  @media (min-width: 576px) {
    width: 268px;
    height: 73px;
    margin: 0;
    ${T.main600};
    font-size: 20px;
    line-height: 24.2px;
  }
`,hg=()=>a.jsxs(sg,{children:[a.jsxs(ag,{children:[a.jsx(cg,{children:"Join our newsletter and get offers"}),a.jsx(dg,{children:"Sign up our newsletter"})]}),a.jsxs(ug,{children:[a.jsx(fg,{placeholder:"Enter your email"}),a.jsx(pg,{children:"SUSCRIBE"})]})]}),mg=({color:e})=>a.jsxs("svg",{width:"40",height:"40",viewBox:"0 0 40 40",fill:"none",xmlns:"http://www.w3.org/2000/svg",style:{color:e||v.white},children:[a.jsx("path",{d:"M20 21.6667C22.7614 21.6667 25 19.4281 25 16.6667C25 13.9053 22.7614 11.6667 20 11.6667C17.2386 11.6667 15 13.9053 15 16.6667C15 19.4281 17.2386 21.6667 20 21.6667Z",stroke:"white","stroke-width":"2","stroke-linecap":"round","stroke-linejoin":"round"}),a.jsx("path",{d:"M20.0001 3.33334C16.4639 3.33334 13.0725 4.7381 10.572 7.23859C8.07151 9.73907 6.66675 13.1305 6.66675 16.6667C6.66675 19.82 7.33675 21.8833 9.16675 24.1667L20.0001 36.6667L30.8334 24.1667C32.6634 21.8833 33.3334 19.82 33.3334 16.6667C33.3334 13.1305 31.9287 9.73907 29.4282 7.23859C26.9277 4.7381 23.5363 3.33334 20.0001 3.33334V3.33334Z",stroke:"white","stroke-width":"2","stroke-linecap":"round","stroke-linejoin":"round"})]}),gg=({color:e})=>a.jsxs("svg",{width:"40",height:"40",viewBox:"0 0 40 40",fill:"none",xmlns:"http://www.w3.org/2000/svg",style:{color:e||v.white},children:[a.jsxs("g",{"clip-path":"url(#clip0_36_956)",children:[a.jsx("path",{d:"M27.7778 4.44446H12.2222C11.6329 4.44446 11.0676 4.67858 10.6509 5.09533C10.2341 5.51208 10 6.07731 10 6.66668V33.3333C10 33.9227 10.2341 34.4879 10.6509 34.9047C11.0676 35.3214 11.6329 35.5556 12.2222 35.5556H27.7778C28.3671 35.5556 28.9324 35.3214 29.3491 34.9047C29.7659 34.4879 30 33.9227 30 33.3333V6.66668C30 6.07731 29.7659 5.51208 29.3491 5.09533C28.9324 4.67858 28.3671 4.44446 27.7778 4.44446ZM12.2222 6.66668H27.7778V26.6667H12.2222V6.66668ZM12.2222 33.3333V28.8889H27.7778V33.3333H12.2222Z",fill:"white"}),a.jsx("path",{d:"M18.8889 30H21.1111V32.2222H18.8889V30Z",fill:"white"})]}),a.jsx("defs",{children:a.jsx("clipPath",{id:"clip0_36_956",children:a.jsx("rect",{width:"40",height:"40",fill:"white"})})})]}),xg=[{title:"INFORMATION",content:["About","Delivery information","Privacy Policy","Sales","Terms & Conditions","EMI Payment"]},{title:"ACCOUNT",content:["My Account","My Orders","Returns","Shipping","Wishlist","Account Details"]},{title:"STORE",content:["Affiliate","Discounts","Sale","Contact","All Collections"]}],vg=y.div`
	display: flex;
	min-height: 253px;
	background-color: ${v.darkGrey};
	flex-direction: column;
	padding: 39px 32px 20px;
	justify-content: space-between;
	@media (min-width: 576px) {
		min-height: 613px;
		padding: 58px 40px 89px 80px;
		position: relative;
	}
`,yg=y.div`
	display: flex;
	flex-direction: column;
	gap: 18px;
	@media (min-width: 576px) {
		flex-direction: row;
	}
`,wg=y.div`
	display: flex;
	flex-direction: column;
	@media (min-width: 576px) {
		margin: 0 24px 29px 80px;
		width: 328px;
	}
`,kg=y.div`
	display: flex;
	flex-direction: column;
	@media (min-width: 576px) {
		margin: 0 0 0 50px;
	}
`,Cg=y.div`
	display: flex;
	flex-direction: column;
	@media (min-width: 576px) {
		margin: 0 0 0 64px;
	}
`,il=y.h4`
	margin: 0;
	${T.main500};
	font-size: 10px;
	line-height: 12.1px;
	color: ${v.white};
	text-decoration: underline;
  @media (min-width: 576px) {
    font-size: 24px;
    line-height: 29.05px;
    text-decoration: none;
`,Oa=y.div`
	display: none;
	@media (min-width: 576px) {
		display: flex;
		flex-direction: column;
	}
`,ui=y.p`
	display: flex;
	align-items: center;
	margin: 29px 0 0;
	color: ${v.white};
	${T.main400};
	font-size: 18px;
	line-height: 30px;
`,Sg=y.ul`
	display: none;
	@media (min-width: 576px) {
		display: flex;
		list-style-type: none;
		flex-direction: column;
		padding: 0;
		margin: 29px 0;
		gap: 13px;
	}
`,jg=y.li`
	${T.main400};
	font-size: 18px;
	line-height: 21.78px;
	color: ${v.white};
`,Eg=y.p`
	${T.main400};
	font-size: 12px;
	line-height: 14.52px;
	color: ${v.white};
	margin: 0;
	text-align: center;
	@media (min-width: 576px) {
		font-size: 15px;
		line-height: 18.15px;
	}
`,_g=y.hr`
	display: none;
	@media (min-width: 576px) {
		display: block;
		position: absolute;
		left: 80px;
		right: 0;
		border: none;
		height: 1px; /* Height of the HR */
		background-color: ${v.white50};
		bottom: 200px;
	}
`,$g=()=>a.jsxs(vg,{children:[a.jsxs(yg,{children:[a.jsxs(wg,{children:[a.jsx(il,{children:"ABOUT US"}),a.jsx(Oa,{children:a.jsx(ui,{children:"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris aliquet lacinia nulla ut laoreet. Quisque ultricies et tortor nec laoreet."})})]}),xg.map((e,t)=>a.jsxs(kg,{children:[a.jsx(il,{children:e.title}),a.jsx(Sg,{children:e.content.map(n=>a.jsx(jg,{children:n}))})]},t)),a.jsxs(Cg,{children:[a.jsx(il,{children:"CONTACT US"}),a.jsxs(Oa,{children:[a.jsx(ui,{children:"If you have any query, please contact us needus24@gmail.com"}),a.jsxs(ui,{children:[a.jsx(mg,{}),"California, USA"]}),a.jsxs(ui,{children:[a.jsx(gg,{}),"+12012987481"]})]})]})]}),a.jsx(_g,{}),a.jsx(Eg,{children:"Copyright 2023 All Right Reserved"})]}),zg=y.div`
	display: flex;
	max-width: 100vw;
	flex-direction: column;
	justify-content: center;
  margin-bottom: 100px;
	@media (min-width: 576px) {
		justify-content: center;
		align-items: center;
    margin-bottom: 0px;
	}
`,Pg=()=>a.jsxs(zg,{children:[a.jsx(Fh,{}),a.jsx(Vh,{}),a.jsx(Pm,{}),a.jsx(og,{}),a.jsx(hg,{}),a.jsx($g,{})]});ol.createRoot(document.getElementById("root")).render(a.jsx(_n.StrictMode,{children:a.jsx(Pg,{})}));
