"use strict";(self.webpackChunkwiki_docusaurus=self.webpackChunkwiki_docusaurus||[]).push([[1766],{3905:(n,r,e)=>{e.d(r,{Zo:()=>u,kt:()=>m});var t=e(7294);function o(n,r,e){return r in n?Object.defineProperty(n,r,{value:e,enumerable:!0,configurable:!0,writable:!0}):n[r]=e,n}function i(n,r){var e=Object.keys(n);if(Object.getOwnPropertySymbols){var t=Object.getOwnPropertySymbols(n);r&&(t=t.filter((function(r){return Object.getOwnPropertyDescriptor(n,r).enumerable}))),e.push.apply(e,t)}return e}function a(n){for(var r=1;r<arguments.length;r++){var e=null!=arguments[r]?arguments[r]:{};r%2?i(Object(e),!0).forEach((function(r){o(n,r,e[r])})):Object.getOwnPropertyDescriptors?Object.defineProperties(n,Object.getOwnPropertyDescriptors(e)):i(Object(e)).forEach((function(r){Object.defineProperty(n,r,Object.getOwnPropertyDescriptor(e,r))}))}return n}function s(n,r){if(null==n)return{};var e,t,o=function(n,r){if(null==n)return{};var e,t,o={},i=Object.keys(n);for(t=0;t<i.length;t++)e=i[t],r.indexOf(e)>=0||(o[e]=n[e]);return o}(n,r);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(n);for(t=0;t<i.length;t++)e=i[t],r.indexOf(e)>=0||Object.prototype.propertyIsEnumerable.call(n,e)&&(o[e]=n[e])}return o}var l=t.createContext({}),c=function(n){var r=t.useContext(l),e=r;return n&&(e="function"==typeof n?n(r):a(a({},r),n)),e},u=function(n){var r=c(n.components);return t.createElement(l.Provider,{value:r},n.children)},p={inlineCode:"code",wrapper:function(n){var r=n.children;return t.createElement(t.Fragment,{},r)}},y=t.forwardRef((function(n,r){var e=n.components,o=n.mdxType,i=n.originalType,l=n.parentName,u=s(n,["components","mdxType","originalType","parentName"]),y=c(e),m=o,f=y["".concat(l,".").concat(m)]||y[m]||p[m]||i;return e?t.createElement(f,a(a({ref:r},u),{},{components:e})):t.createElement(f,a({ref:r},u))}));function m(n,r){var e=arguments,o=r&&r.mdxType;if("string"==typeof n||o){var i=e.length,a=new Array(i);a[0]=y;var s={};for(var l in r)hasOwnProperty.call(r,l)&&(s[l]=r[l]);s.originalType=n,s.mdxType="string"==typeof n?n:o,a[1]=s;for(var c=2;c<i;c++)a[c]=e[c];return t.createElement.apply(null,a)}return t.createElement.apply(null,e)}y.displayName="MDXCreateElement"},8751:(n,r,e)=>{e.r(r),e.d(r,{frontMatter:()=>i,contentTitle:()=>a,metadata:()=>s,toc:()=>l,default:()=>u});var t=e(7462),o=(e(7294),e(3905));const i={id:"insertion-sort",title:"Insertion Sort"},a=void 0,s={unversionedId:"algorithms/sorting/insertion-sort",id:"algorithms/sorting/insertion-sort",title:"Insertion Sort",description:"",source:"@site/docs/algorithms/sorting/insertion.md",sourceDirName:"algorithms/sorting",slug:"/algorithms/sorting/insertion-sort",permalink:"/yogeshcodes/algorithms/sorting/insertion-sort",tags:[],version:"current",frontMatter:{id:"insertion-sort",title:"Insertion Sort"},sidebar:"docs",previous:{title:"Bubble Sort",permalink:"/yogeshcodes/algorithms/sorting/bubble-sort"},next:{title:"Merge Sort",permalink:"/yogeshcodes/algorithms/sorting/merge-sort"}},l=[],c={toc:l};function u(n){let{components:r,...e}=n;return(0,o.kt)("wrapper",(0,t.Z)({},c,e,{components:r,mdxType:"MDXLayout"}),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-jsx"},"function insertionSort(array) {\n    for(i = 0; i < array.length; i++) {\n        let j = i;\n        while(j > 0 && array[j] < array[j - 1]) {\n            let temp = array[j];\n            array[j] = array[j-1];\n            array[j-1] = temp;\n            j -= 1;\n        }\n    }\n    return array;\n}\n\n5 3 8 1 5 9 3\n\ni -> 0\nj = 0\nj > 0 no\n\ni -> 1\nj = 1\n1 > 0 yes\n3 < 5 yes\n\n3 5 8 1 5 9 3\n\nj = 0\n0 > 0 no\n\ni -> 2\nj = 2\n2 > 0 yes\n8 < 3 no\n\ni -> 3\nj = 3;\n3 > 0 yes\n1 < 8 yes\n\n3 5 1 8 5 9 3\nj = 2\n2 > 0 && 1 < 5\n\n3 1 5 8 5 9 3\n\nj = 1\n1 > 0 && 1 < 3\n\n1 3 5 8 5 9 3\n\nj = 0\n\nfunction insertionSort(array) {\n    for(let i = 1; i < array.length; i++) {\n        let j = i; \n        while(j > 0 && array[j] < array[j-1]) {\n            let temp = array[j]\n            array[j] = array[j-1]\n            array[j-1] = temp\n            j -= 1;\n        }\n    }\n    return array;\n}\n")))}u.isMDXComponent=!0}}]);