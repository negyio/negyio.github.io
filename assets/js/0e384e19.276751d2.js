"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[671],{3905:(e,t,n)=>{n.d(t,{Zo:()=>u,kt:()=>y});var o=n(7294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);t&&(o=o.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,o)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,o,r=function(e,t){if(null==e)return{};var n,o,r={},a=Object.keys(e);for(o=0;o<a.length;o++)n=a[o],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(o=0;o<a.length;o++)n=a[o],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var c=o.createContext({}),l=function(e){var t=o.useContext(c),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},u=function(e){var t=l(e.components);return o.createElement(c.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return o.createElement(o.Fragment,{},t)}},m=o.forwardRef((function(e,t){var n=e.components,r=e.mdxType,a=e.originalType,c=e.parentName,u=s(e,["components","mdxType","originalType","parentName"]),m=l(n),y=r,d=m["".concat(c,".").concat(y)]||m[y]||p[y]||a;return n?o.createElement(d,i(i({ref:t},u),{},{components:n})):o.createElement(d,i({ref:t},u))}));function y(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var a=n.length,i=new Array(a);i[0]=m;var s={};for(var c in t)hasOwnProperty.call(t,c)&&(s[c]=t[c]);s.originalType=e,s.mdxType="string"==typeof e?e:r,i[1]=s;for(var l=2;l<a;l++)i[l]=n[l];return o.createElement.apply(null,i)}return o.createElement.apply(null,n)}m.displayName="MDXCreateElement"},9881:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>c,contentTitle:()=>i,default:()=>p,frontMatter:()=>a,metadata:()=>s,toc:()=>l});var o=n(7462),r=(n(7294),n(3905));const a={sidebar_position:1},i="What's Negy?",s={unversionedId:"intro",id:"intro",title:"What's Negy?",description:"There is no doubt that security on the internet will become more important in the future. Tracking by cookies is the most popular method of tracking at the moment, but Negy believes that routing will also need to be concealed in the near future. The advantage of concealing routing is that, apart from not revealing your identity to the server you are accessing, it can also be hidden from external attackers who are monitoring the network. Negy is a proxy that transparently conceals routing.",source:"@site/docs/intro.md",sourceDirName:".",slug:"/intro",permalink:"/docs/intro",draft:!1,tags:[],version:"current",sidebarPosition:1,frontMatter:{sidebar_position:1},sidebar:"tutorialSidebar",next:{title:"Quick Start",permalink:"/docs/category/quick-start"}},c={},l=[],u={toc:l};function p(e){let{components:t,...n}=e;return(0,r.kt)("wrapper",(0,o.Z)({},u,n,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h1",{id:"whats-negy"},"What's Negy?"),(0,r.kt)("p",null,"There is no doubt that security on the internet will become more important in the future. Tracking by cookies is the most popular method of tracking at the moment, but Negy believes that routing will also need to be concealed in the near future. The advantage of concealing routing is that, apart from not revealing your identity to the server you are accessing, it can also be hidden from external attackers who are monitoring the network. Negy is a proxy that transparently conceals routing."),(0,r.kt)("admonition",{type:"tip"},(0,r.kt)("p",{parentName:"admonition"},"Negy only conceals routing. This means that if you are already logged in or have cookies enabled, the website will know that you are accessing it.")),(0,r.kt)("p",null,"Negy uses a very popular method called proxy to completely conceal routing. Simply put in the settings and the server you are accessing has no way of knowing who is accessing it at network level. It is based on the Tor (The Onion Routing) the most well-known method of routing concealment, and further improves ease of use and portability. Portability is the ease with which the execution environment can be moved from one to another, in other words, the ease of execution. In Negy, all components are containerised, so basically it requires only one command to launch all components. For example, it is even possible to reproduce Negy's full network in your local pc using the command docker-compose. Portability is very important in the long term, as it contributes to the ease of joining the network and ease of development. In addition, Negy is written in Rust, a memory-safe programming language, so unexpected runtime errors and memory vulnerabilities are essentially non-existent."),(0,r.kt)("admonition",{type:"tip"},(0,r.kt)("p",{parentName:"admonition"},"Note that Negy follows the Tor outline in its implementation and is therefore not compatible.")))}p.isMDXComponent=!0}}]);