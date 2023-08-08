"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[6730],{3905:(e,t,a)=>{a.d(t,{Zo:()=>u,kt:()=>c});var n=a(67294);function r(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function l(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function p(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?l(Object(a),!0).forEach((function(t){r(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):l(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function i(e,t){if(null==e)return{};var a,n,r=function(e,t){if(null==e)return{};var a,n,r={},l=Object.keys(e);for(n=0;n<l.length;n++)a=l[n],t.indexOf(a)>=0||(r[a]=e[a]);return r}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(n=0;n<l.length;n++)a=l[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(r[a]=e[a])}return r}var o=n.createContext({}),d=function(e){var t=n.useContext(o),a=t;return e&&(a="function"==typeof e?e(t):p(p({},t),e)),a},u=function(e){var t=d(e.components);return n.createElement(o.Provider,{value:t},e.children)},m={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},s=n.forwardRef((function(e,t){var a=e.components,r=e.mdxType,l=e.originalType,o=e.parentName,u=i(e,["components","mdxType","originalType","parentName"]),s=d(a),c=r,k=s["".concat(o,".").concat(c)]||s[c]||m[c]||l;return a?n.createElement(k,p(p({ref:t},u),{},{components:a})):n.createElement(k,p({ref:t},u))}));function c(e,t){var a=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var l=a.length,p=new Array(l);p[0]=s;var i={};for(var o in t)hasOwnProperty.call(t,o)&&(i[o]=t[o]);i.originalType=e,i.mdxType="string"==typeof e?e:r,p[1]=i;for(var d=2;d<l;d++)p[d]=a[d];return n.createElement.apply(null,p)}return n.createElement.apply(null,a)}s.displayName="MDXCreateElement"},72370:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>d,contentTitle:()=>i,default:()=>s,frontMatter:()=>p,metadata:()=>o,toc:()=>u});a(67294);var n=a(3905);function r(){return r=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var a=arguments[t];for(var n in a)Object.prototype.hasOwnProperty.call(a,n)&&(e[n]=a[n])}return e},r.apply(this,arguments)}function l(e,t){if(null==e)return{};var a,n,r=function(e,t){if(null==e)return{};var a,n,r={},l=Object.keys(e);for(n=0;n<l.length;n++)a=l[n],t.indexOf(a)>=0||(r[a]=e[a]);return r}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(n=0;n<l.length;n++)a=l[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(r[a]=e[a])}return r}const p={sidebar_label:"PageEmittedEvents"},i="PageEmittedEvents enum",o={unversionedId:"api/puppeteer.pageemittedevents",id:"version-21.0.2/api/puppeteer.pageemittedevents",title:"PageEmittedEvents enum",description:"All the events that a page instance may emit.",source:"@site/versioned_docs/version-21.0.2/api/puppeteer.pageemittedevents.md",sourceDirName:"api",slug:"/api/puppeteer.pageemittedevents",permalink:"/api/puppeteer.pageemittedevents",draft:!1,tags:[],version:"21.0.2",frontMatter:{sidebar_label:"PageEmittedEvents"},sidebar:"api",previous:{title:"Offset",permalink:"/api/puppeteer.offset"},next:{title:"PageEventObject",permalink:"/api/puppeteer.pageeventobject"}},d={},u=[{value:"Signature:",id:"signature",level:4},{value:"Enumeration Members",id:"enumeration-members",level:2}],m={toc:u};function s(e){var{components:t}=e,a=l(e,["components"]);return(0,n.kt)("wrapper",r({},m,a,{components:t,mdxType:"MDXLayout"}),(0,n.kt)("h1",r({},{id:"pageemittedevents-enum"}),"PageEmittedEvents enum"),(0,n.kt)("p",null,"All the events that a page instance may emit."),(0,n.kt)("h4",r({},{id:"signature"}),"Signature:"),(0,n.kt)("pre",null,(0,n.kt)("code",r({parentName:"pre"},{className:"language-typescript"}),"export declare const enum PageEmittedEvents\n")),(0,n.kt)("h2",r({},{id:"enumeration-members"}),"Enumeration Members"),(0,n.kt)("table",null,(0,n.kt)("thead",{parentName:"table"},(0,n.kt)("tr",{parentName:"thead"},(0,n.kt)("th",r({parentName:"tr"},{align:null}),"Member"),(0,n.kt)("th",r({parentName:"tr"},{align:null}),"Value"),(0,n.kt)("th",r({parentName:"tr"},{align:null}),"Description"))),(0,n.kt)("tbody",{parentName:"table"},(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",r({parentName:"tr"},{align:null}),"Close"),(0,n.kt)("td",r({parentName:"tr"},{align:null}),(0,n.kt)("code",null,'"',"close",'"')),(0,n.kt)("td",r({parentName:"tr"},{align:null}),"Emitted when the page closes.")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",r({parentName:"tr"},{align:null}),"Console"),(0,n.kt)("td",r({parentName:"tr"},{align:null}),(0,n.kt)("code",null,'"',"console",'"')),(0,n.kt)("td",r({parentName:"tr"},{align:null}),"Emitted when JavaScript within the page calls one of console API methods, e.g. ",(0,n.kt)("code",null,"console.log")," or ",(0,n.kt)("code",null,"console.dir"),". Also emitted if the page throws an error or a warning.")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",r({parentName:"tr"},{align:null}),"Dialog"),(0,n.kt)("td",r({parentName:"tr"},{align:null}),(0,n.kt)("code",null,'"',"dialog",'"')),(0,n.kt)("td",r({parentName:"tr"},{align:null}),"Emitted when a JavaScript dialog appears, such as ",(0,n.kt)("code",null,"alert"),", ",(0,n.kt)("code",null,"prompt"),", ",(0,n.kt)("code",null,"confirm")," or ",(0,n.kt)("code",null,"beforeunload"),". Puppeteer can respond to the dialog via ",(0,n.kt)("a",r({parentName:"td"},{href:"/api/puppeteer.dialog.accept"}),"Dialog.accept()")," or ",(0,n.kt)("a",r({parentName:"td"},{href:"/api/puppeteer.dialog.dismiss"}),"Dialog.dismiss()"),".")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",r({parentName:"tr"},{align:null}),"DOMContentLoaded"),(0,n.kt)("td",r({parentName:"tr"},{align:null}),(0,n.kt)("code",null,'"',"domcontentloaded",'"')),(0,n.kt)("td",r({parentName:"tr"},{align:null}),"Emitted when the JavaScript ",(0,n.kt)("a",r({parentName:"td"},{href:"https://developer.mozilla.org/en-US/docs/Web/Events/DOMContentLoaded"}),"DOMContentLoaded")," event is dispatched.")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",r({parentName:"tr"},{align:null}),"Error"),(0,n.kt)("td",r({parentName:"tr"},{align:null}),(0,n.kt)("code",null,'"',"error",'"')),(0,n.kt)("td",r({parentName:"tr"},{align:null}),"Emitted when the page crashes. Will contain an ",(0,n.kt)("code",null,"Error"),".")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",r({parentName:"tr"},{align:null}),"FrameAttached"),(0,n.kt)("td",r({parentName:"tr"},{align:null}),(0,n.kt)("code",null,'"',"frameattached",'"')),(0,n.kt)("td",r({parentName:"tr"},{align:null}),"Emitted when a frame is attached. Will contain a ",(0,n.kt)("a",r({parentName:"td"},{href:"/api/puppeteer.frame"}),"Frame"),".")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",r({parentName:"tr"},{align:null}),"FrameDetached"),(0,n.kt)("td",r({parentName:"tr"},{align:null}),(0,n.kt)("code",null,'"',"framedetached",'"')),(0,n.kt)("td",r({parentName:"tr"},{align:null}),"Emitted when a frame is detached. Will contain a ",(0,n.kt)("a",r({parentName:"td"},{href:"/api/puppeteer.frame"}),"Frame"),".")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",r({parentName:"tr"},{align:null}),"FrameNavigated"),(0,n.kt)("td",r({parentName:"tr"},{align:null}),(0,n.kt)("code",null,'"',"framenavigated",'"')),(0,n.kt)("td",r({parentName:"tr"},{align:null}),"Emitted when a frame is navigated to a new URL. Will contain a ",(0,n.kt)("a",r({parentName:"td"},{href:"/api/puppeteer.frame"}),"Frame"),".")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",r({parentName:"tr"},{align:null}),"Load"),(0,n.kt)("td",r({parentName:"tr"},{align:null}),(0,n.kt)("code",null,'"',"load",'"')),(0,n.kt)("td",r({parentName:"tr"},{align:null}),"Emitted when the JavaScript ",(0,n.kt)("a",r({parentName:"td"},{href:"https://developer.mozilla.org/en-US/docs/Web/Events/load"}),"load")," event is dispatched.")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",r({parentName:"tr"},{align:null}),"Metrics"),(0,n.kt)("td",r({parentName:"tr"},{align:null}),(0,n.kt)("code",null,'"',"metrics",'"')),(0,n.kt)("td",r({parentName:"tr"},{align:null}),"Emitted when the JavaScript code makes a call to ",(0,n.kt)("code",null,"console.timeStamp"),". For the list of metrics see ",(0,n.kt)("a",r({parentName:"td"},{href:"/api/puppeteer.page.metrics"}),"page.metrics"),".")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",r({parentName:"tr"},{align:null}),"PageError"),(0,n.kt)("td",r({parentName:"tr"},{align:null}),(0,n.kt)("code",null,'"',"pageerror",'"')),(0,n.kt)("td",r({parentName:"tr"},{align:null}),"Emitted when an uncaught exception happens within the page. Contains an ",(0,n.kt)("code",null,"Error"),".")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",r({parentName:"tr"},{align:null}),"Popup"),(0,n.kt)("td",r({parentName:"tr"},{align:null}),(0,n.kt)("code",null,'"',"popup",'"')),(0,n.kt)("td",r({parentName:"tr"},{align:null}),(0,n.kt)("p",null,"Emitted when the page opens a new tab or window."),(0,n.kt)("p",null,"Contains a ",(0,n.kt)("a",r({parentName:"td"},{href:"/api/puppeteer.page"}),"Page")," corresponding to the popup window."))),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",r({parentName:"tr"},{align:null}),"Request"),(0,n.kt)("td",r({parentName:"tr"},{align:null}),(0,n.kt)("code",null,'"',"request",'"')),(0,n.kt)("td",r({parentName:"tr"},{align:null}),"Emitted when a page issues a request and contains a ",(0,n.kt)("a",r({parentName:"td"},{href:"/api/puppeteer.httprequest"}),"HTTPRequest"),".")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",r({parentName:"tr"},{align:null}),"RequestFailed"),(0,n.kt)("td",r({parentName:"tr"},{align:null}),(0,n.kt)("code",null,'"',"requestfailed",'"')),(0,n.kt)("td",r({parentName:"tr"},{align:null}),(0,n.kt)("p",null,"Emitted when a request fails, for example by timing out."),(0,n.kt)("p",null,"Contains a ",(0,n.kt)("a",r({parentName:"td"},{href:"/api/puppeteer.httprequest"}),"HTTPRequest"),"."))),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",r({parentName:"tr"},{align:null}),"RequestFinished"),(0,n.kt)("td",r({parentName:"tr"},{align:null}),(0,n.kt)("code",null,'"',"requestfinished",'"')),(0,n.kt)("td",r({parentName:"tr"},{align:null}),"Emitted when a request finishes successfully. Contains a ",(0,n.kt)("a",r({parentName:"td"},{href:"/api/puppeteer.httprequest"}),"HTTPRequest"),".")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",r({parentName:"tr"},{align:null}),"RequestServedFromCache"),(0,n.kt)("td",r({parentName:"tr"},{align:null}),(0,n.kt)("code",null,'"',"requestservedfromcache",'"')),(0,n.kt)("td",r({parentName:"tr"},{align:null}),"Emitted when a request ended up loading from cache. Contains a ",(0,n.kt)("a",r({parentName:"td"},{href:"/api/puppeteer.httprequest"}),"HTTPRequest"),".")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",r({parentName:"tr"},{align:null}),"Response"),(0,n.kt)("td",r({parentName:"tr"},{align:null}),(0,n.kt)("code",null,'"',"response",'"')),(0,n.kt)("td",r({parentName:"tr"},{align:null}),"Emitted when a response is received. Contains a ",(0,n.kt)("a",r({parentName:"td"},{href:"/api/puppeteer.httpresponse"}),"HTTPResponse"),".")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",r({parentName:"tr"},{align:null}),"WorkerCreated"),(0,n.kt)("td",r({parentName:"tr"},{align:null}),(0,n.kt)("code",null,'"',"workercreated",'"')),(0,n.kt)("td",r({parentName:"tr"},{align:null}),"Emitted when a dedicated ",(0,n.kt)("a",r({parentName:"td"},{href:"https://developer.mozilla.org/en-US/docs/Web/API/Web_Workers_API"}),"WebWorker")," is spawned by the page.")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",r({parentName:"tr"},{align:null}),"WorkerDestroyed"),(0,n.kt)("td",r({parentName:"tr"},{align:null}),(0,n.kt)("code",null,'"',"workerdestroyed",'"')),(0,n.kt)("td",r({parentName:"tr"},{align:null}),"Emitted when a dedicated ",(0,n.kt)("a",r({parentName:"td"},{href:"https://developer.mozilla.org/en-US/docs/Web/API/Web_Workers_API"}),"WebWorker")," is destroyed by the page.")))))}s.isMDXComponent=!0}}]);