"use strict";(self.webpackChunkwiki_docusaurus=self.webpackChunkwiki_docusaurus||[]).push([[4013],{8665:(e,t,a)=>{a.d(t,{Z:()=>E});var l=a(7294),n=a(6010),s=a(8882),r=a(9960);const c="sidebar_2ahu",i="sidebarItemTitle_2hhb",m="sidebarItemList_2xAf",o="sidebarItem_2UVv",u="sidebarItemLink_1RT6",g="sidebarItemLinkActive_12pM";var d=a(5999);function b(e){let{sidebar:t}=e;return 0===t.items.length?null:l.createElement("nav",{className:(0,n.Z)(c,"thin-scrollbar"),"aria-label":(0,d.I)({id:"theme.blog.sidebar.navAriaLabel",message:"Blog recent posts navigation",description:"The ARIA label for recent posts in the blog sidebar"})},l.createElement("div",{className:(0,n.Z)(i,"margin-bottom--md")},t.title),l.createElement("ul",{className:m},t.items.map((e=>l.createElement("li",{key:e.permalink,className:o},l.createElement(r.Z,{isNavLink:!0,to:e.permalink,className:u,activeClassName:g},e.title))))))}const E=function(e){const{sidebar:t,toc:a,children:r,...c}=e,i=t&&t.items.length>0;return l.createElement(s.Z,c,l.createElement("div",{className:"container margin-vert--lg"},l.createElement("div",{className:"row"},i&&l.createElement("aside",{className:"col col--3"},l.createElement(b,{sidebar:t})),l.createElement("main",{className:(0,n.Z)("col",{"col--7":i,"col--9 col--offset-1":!i}),itemScope:!0,itemType:"http://schema.org/Blog"},r),a&&l.createElement("div",{className:"col col--2"},a))))}},497:(e,t,a)=>{a.r(t),a.d(t,{default:()=>o});var l=a(7294),n=a(8665),s=a(7774),r=a(3810);const c="tag_21yA";function i(e){let{letterEntry:t}=e;return l.createElement("article",null,l.createElement("h2",null,t.letter),l.createElement("ul",{className:"padding--none"},t.tags.map((e=>l.createElement("li",{key:e.permalink,className:c},l.createElement(s.Z,e))))),l.createElement("hr",null))}const m=function(e){let{tags:t}=e;const a=(0,r.PZ)(t);return l.createElement("section",{className:"margin-vert--lg"},a.map((e=>l.createElement(i,{key:e.letter,letterEntry:e}))))};const o=function(e){const{tags:t,sidebar:a}=e,s=(0,r.MA)();return l.createElement(n.Z,{title:s,wrapperClassName:r.kM.wrapper.blogPages,pageClassName:r.kM.page.blogTagsListPage,searchMetadata:{tag:"blog_tags_list"},sidebar:a},l.createElement("h1",null,s),l.createElement(m,{tags:Object.values(t)}))}},7774:(e,t,a)=>{a.d(t,{Z:()=>m});var l=a(7294),n=a(6010),s=a(9960);const r="tag_1Okp",c="tagRegular_3MiF",i="tagWithCount_1HU1";const m=function(e){const{permalink:t,name:a,count:m}=e;return l.createElement(s.Z,{href:t,className:(0,n.Z)(r,{[c]:!m,[i]:m})},a,m&&l.createElement("span",null,m))}}}]);