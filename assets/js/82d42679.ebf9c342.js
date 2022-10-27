"use strict";(self.webpackChunkwiki_docusaurus=self.webpackChunkwiki_docusaurus||[]).push([[8263],{3905:(e,t,r)=>{r.d(t,{Zo:()=>c,kt:()=>m});var n=r(7294);function o(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function a(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function i(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?a(Object(r),!0).forEach((function(t){o(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):a(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function l(e,t){if(null==e)return{};var r,n,o=function(e,t){if(null==e)return{};var r,n,o={},a=Object.keys(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||(o[r]=e[r]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(o[r]=e[r])}return o}var p=n.createContext({}),s=function(e){var t=n.useContext(p),r=t;return e&&(r="function"==typeof e?e(t):i(i({},t),e)),r},c=function(e){var t=s(e.components);return n.createElement(p.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},d=n.forwardRef((function(e,t){var r=e.components,o=e.mdxType,a=e.originalType,p=e.parentName,c=l(e,["components","mdxType","originalType","parentName"]),d=s(r),m=o,g=d["".concat(p,".").concat(m)]||d[m]||u[m]||a;return r?n.createElement(g,i(i({ref:t},c),{},{components:r})):n.createElement(g,i({ref:t},c))}));function m(e,t){var r=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var a=r.length,i=new Array(a);i[0]=d;var l={};for(var p in t)hasOwnProperty.call(t,p)&&(l[p]=t[p]);l.originalType=e,l.mdxType="string"==typeof e?e:o,i[1]=l;for(var s=2;s<a;s++)i[s]=r[s];return n.createElement.apply(null,i)}return n.createElement.apply(null,r)}d.displayName="MDXCreateElement"},7827:(e,t,r)=>{r.r(t),r.d(t,{frontMatter:()=>a,contentTitle:()=>i,metadata:()=>l,toc:()=>p,default:()=>c});var n=r(7462),o=(r(7294),r(3905));const a={id:"postgraphile",title:"Postgraphile Start Notes"},i="Postgraphile start notes",l={unversionedId:"tech-notes/postgraphile",id:"tech-notes/postgraphile",title:"Postgraphile Start Notes",description:"npm i db-migrate db-migrate-pg",source:"@site/docs/tech-notes/postgraphile.md",sourceDirName:"tech-notes",slug:"/tech-notes/postgraphile",permalink:"/yogeshcodes/tech-notes/postgraphile",tags:[],version:"current",frontMatter:{id:"postgraphile",title:"Postgraphile Start Notes"},sidebar:"docs",previous:{title:"tailwind-react-config",permalink:"/yogeshcodes/tech-notes/tailwind-react-config"},next:{title:"Problem Solving Notes",permalink:"/yogeshcodes/tech-notes/problem-solving"}},p=[],s={toc:p};function c(e){let{components:t,...r}=e;return(0,o.kt)("wrapper",(0,n.Z)({},s,r,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"postgraphile-start-notes"},"Postgraphile start notes"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-bash"},"npm i db-migrate db-migrate-pg\n\nnpx db-migrate create create-schema --sql-file\n\n")),(0,o.kt)("p",null,(0,o.kt)("inlineCode",{parentName:"p"},"npm i db-migrate db-migrate-pg")," "),(0,o.kt)("p",null,(0,o.kt)("inlineCode",{parentName:"p"},"npx db-migrate create create-schema --sql-file")," create-schema is a name we can name it anything. \u2014sql-file used to define up and down migrations. The up file will include the new things we want to add to the database. And the down file will define how to remove the things we add in the up file. Down file allowing us to revert the changes made in the up file. "),(0,o.kt)("p",null,(0,o.kt)("inlineCode",{parentName:"p"},"npx db-migrate up")," - apply migration"))}c.isMDXComponent=!0}}]);