"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[53343],{3905:(e,n,r)=>{r.d(n,{Zo:()=>p,kt:()=>b});var t=r(67294);function o(e,n,r){return n in e?Object.defineProperty(e,n,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[n]=r,e}function a(e,n){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var t=Object.getOwnPropertySymbols(e);n&&(t=t.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),r.push.apply(r,t)}return r}function c(e){for(var n=1;n<arguments.length;n++){var r=null!=arguments[n]?arguments[n]:{};n%2?a(Object(r),!0).forEach((function(n){o(e,n,r[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):a(Object(r)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(r,n))}))}return e}function i(e,n){if(null==e)return{};var r,t,o=function(e,n){if(null==e)return{};var r,t,o={},a=Object.keys(e);for(t=0;t<a.length;t++)r=a[t],n.indexOf(r)>=0||(o[r]=e[r]);return o}(e,n);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(t=0;t<a.length;t++)r=a[t],n.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(o[r]=e[r])}return o}var l=t.createContext({}),s=function(e){var n=t.useContext(l),r=n;return e&&(r="function"==typeof e?e(n):c(c({},n),e)),r},p=function(e){var n=s(e.components);return t.createElement(l.Provider,{value:n},e.children)},u={inlineCode:"code",wrapper:function(e){var n=e.children;return t.createElement(t.Fragment,{},n)}},m=t.forwardRef((function(e,n){var r=e.components,o=e.mdxType,a=e.originalType,l=e.parentName,p=i(e,["components","mdxType","originalType","parentName"]),m=s(r),b=o,f=m["".concat(l,".").concat(b)]||m[b]||u[b]||a;return r?t.createElement(f,c(c({ref:n},p),{},{components:r})):t.createElement(f,c({ref:n},p))}));function b(e,n){var r=arguments,o=n&&n.mdxType;if("string"==typeof e||o){var a=r.length,c=new Array(a);c[0]=m;var i={};for(var l in n)hasOwnProperty.call(n,l)&&(i[l]=n[l]);i.originalType=e,i.mdxType="string"==typeof e?e:o,c[1]=i;for(var s=2;s<a;s++)c[s]=r[s];return t.createElement.apply(null,c)}return t.createElement.apply(null,r)}m.displayName="MDXCreateElement"},60129:(e,n,r)=>{r.r(n),r.d(n,{assets:()=>l,contentTitle:()=>c,default:()=>u,frontMatter:()=>a,metadata:()=>i,toc:()=>s});var t=r(87462),o=(r(67294),r(3905));const a={sidebar_label:"ConsoleMessageLocation.columnNumber"},c="ConsoleMessageLocation.columnNumber property",i={unversionedId:"api/puppeteer.consolemessagelocation.columnnumber",id:"api/puppeteer.consolemessagelocation.columnnumber",title:"ConsoleMessageLocation.columnNumber property",description:"0-based column number in the resource if known or undefined otherwise.",source:"@site/../docs/api/puppeteer.consolemessagelocation.columnnumber.md",sourceDirName:"api",slug:"/api/puppeteer.consolemessagelocation.columnnumber",permalink:"/api/puppeteer.consolemessagelocation.columnnumber",draft:!1,tags:[],version:"current",frontMatter:{sidebar_label:"ConsoleMessageLocation.columnNumber"},sidebar:"sidebar",previous:{title:"ConsoleMessageLocation",permalink:"/api/puppeteer.consolemessagelocation"},next:{title:"ConsoleMessageLocation.lineNumber",permalink:"/api/puppeteer.consolemessagelocation.linenumber"}},l={},s=[],p={toc:s};function u(e){let{components:n,...r}=e;return(0,o.kt)("wrapper",(0,t.Z)({},p,r,{components:n,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"consolemessagelocationcolumnnumber-property"},"ConsoleMessageLocation.columnNumber property"),(0,o.kt)("p",null,"0-based column number in the resource if known or ",(0,o.kt)("inlineCode",{parentName:"p"},"undefined")," otherwise."),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"Signature:")),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-typescript"},"interface ConsoleMessageLocation {\n  columnNumber?: number;\n}\n")))}u.isMDXComponent=!0}}]);