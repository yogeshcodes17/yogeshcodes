"use strict";(self.webpackChunkwiki_docusaurus=self.webpackChunkwiki_docusaurus||[]).push([[4517],{3905:(e,r,n)=>{n.d(r,{Zo:()=>u,kt:()=>b});var t=n(7294);function o(e,r,n){return r in e?Object.defineProperty(e,r,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[r]=n,e}function i(e,r){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var t=Object.getOwnPropertySymbols(e);r&&(t=t.filter((function(r){return Object.getOwnPropertyDescriptor(e,r).enumerable}))),n.push.apply(n,t)}return n}function a(e){for(var r=1;r<arguments.length;r++){var n=null!=arguments[r]?arguments[r]:{};r%2?i(Object(n),!0).forEach((function(r){o(e,r,n[r])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(n,r))}))}return e}function s(e,r){if(null==e)return{};var n,t,o=function(e,r){if(null==e)return{};var n,t,o={},i=Object.keys(e);for(t=0;t<i.length;t++)n=i[t],r.indexOf(n)>=0||(o[n]=e[n]);return o}(e,r);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(t=0;t<i.length;t++)n=i[t],r.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var l=t.createContext({}),c=function(e){var r=t.useContext(l),n=r;return e&&(n="function"==typeof e?e(r):a(a({},r),e)),n},u=function(e){var r=c(e.components);return t.createElement(l.Provider,{value:r},e.children)},p={inlineCode:"code",wrapper:function(e){var r=e.children;return t.createElement(t.Fragment,{},r)}},y=t.forwardRef((function(e,r){var n=e.components,o=e.mdxType,i=e.originalType,l=e.parentName,u=s(e,["components","mdxType","originalType","parentName"]),y=c(n),b=o,f=y["".concat(l,".").concat(b)]||y[b]||p[b]||i;return n?t.createElement(f,a(a({ref:r},u),{},{components:n})):t.createElement(f,a({ref:r},u))}));function b(e,r){var n=arguments,o=r&&r.mdxType;if("string"==typeof e||o){var i=n.length,a=new Array(i);a[0]=y;var s={};for(var l in r)hasOwnProperty.call(r,l)&&(s[l]=r[l]);s.originalType=e,s.mdxType="string"==typeof e?e:o,a[1]=s;for(var c=2;c<i;c++)a[c]=n[c];return t.createElement.apply(null,a)}return t.createElement.apply(null,n)}y.displayName="MDXCreateElement"},5030:(e,r,n)=>{n.r(r),n.d(r,{frontMatter:()=>i,contentTitle:()=>a,metadata:()=>s,toc:()=>l,default:()=>u});var t=n(7462),o=(n(7294),n(3905));const i={id:"bubble-sort",title:"Bubble Sort"},a=void 0,s={unversionedId:"algorithms/sorting/bubble-sort",id:"algorithms/sorting/bubble-sort",title:"Bubble Sort",description:"",source:"@site/docs/algorithms/sorting/bubble.md",sourceDirName:"algorithms/sorting",slug:"/algorithms/sorting/bubble-sort",permalink:"/yogeshcodes/algorithms/sorting/bubble-sort",tags:[],version:"current",frontMatter:{id:"bubble-sort",title:"Bubble Sort"},sidebar:"docs",previous:{title:"Binary Searching",permalink:"/yogeshcodes/algorithms/searching/binary-searching"},next:{title:"Insertion Sort",permalink:"/yogeshcodes/algorithms/sorting/insertion-sort"}},l=[],c={toc:l};function u(e){let{components:r,...n}=e;return(0,o.kt)("wrapper",(0,t.Z)({},c,n,{components:r,mdxType:"MDXLayout"}),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-jsx"},"function bubbleSort(array) {\n  // Write your code here.\n    let isSorted = false;\n    let counter = 0;\n    while(!isSorted) {\n        isSorted = true;\n        for(let i = 0; i < array.length - 1 - counter; i++) {\n            if(array[i] > array[i + 1]) {\n                const temp = array[i + 1];\n                array[i+1] = array[i];\n                array[i] = temp;\n                isSorted = false\n            }\n        }\n        counter++   \n    }\n    return array;\n}\n\n5 2 9 3 7 2 1\n\nisSorted = false;\ncounter = 0\n!sorted -> yes\nsorted = yes\ni = 0 i < 6\n5 > 2 no\ni = 1\n2 > 9 no\ni = 2\n9 > 3 yes\n5 2 3 9 7 2 1\nsorted = false\ni = 3\n9 > 7 yes\n5 2 3 7 9 2 1\nsorted = false\ni = 4\n9 > 2 yes\n5 2 3 7 2 9 1\ni = 5\n9 > 1 yes\n5 2 3 7 2 1 9\nsorted = false\ni = 6 \n\n!sorted -> yes\n\nfunction bubbleSort(array) {\n    let sorted = false;\n    let counter = 0;\n    while(!sorted){\n        sorted = true;\n        for(let i = 0; i < array.length - 1 - counter; i++) {\n            if(array[i] > array[i+1]) {\n                let temp = array[i];\n                array[i+1] = array[i];\n                array[i] = temp;\n                sorted = true;\n            }\n        }\n        counter++\n    }\n}\n\n")))}u.isMDXComponent=!0}}]);