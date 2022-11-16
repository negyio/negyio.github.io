"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[176],{3905:(e,t,n)=>{n.d(t,{Zo:()=>p,kt:()=>d});var r=n(7294);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function a(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},i=Object.keys(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var s=r.createContext({}),u=function(e){var t=r.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):a(a({},t),e)),n},p=function(e){var t=u(e.components);return r.createElement(s.Provider,{value:t},e.children)},c={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},m=r.forwardRef((function(e,t){var n=e.components,o=e.mdxType,i=e.originalType,s=e.parentName,p=l(e,["components","mdxType","originalType","parentName"]),m=u(n),d=o,h=m["".concat(s,".").concat(d)]||m[d]||c[d]||i;return n?r.createElement(h,a(a({ref:t},p),{},{components:n})):r.createElement(h,a({ref:t},p))}));function d(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var i=n.length,a=new Array(i);a[0]=m;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l.mdxType="string"==typeof e?e:o,a[1]=l;for(var u=2;u<i;u++)a[u]=n[u];return r.createElement.apply(null,a)}return r.createElement.apply(null,n)}m.displayName="MDXCreateElement"},8587:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>s,contentTitle:()=>a,default:()=>c,frontMatter:()=>i,metadata:()=>l,toc:()=>u});var r=n(7462),o=(n(7294),n(3905));const i={title:"Version 0.1.2",description:"Announce version 0.1.2",slug:"version-0-1-2",authors:["tbrand"]},a="Version 0.1.2 released!",l={permalink:"/blog/version-0-1-2",source:"@site/blog/2022-11-10-version-0-1-2/index.md",title:"Version 0.1.2",description:"Announce version 0.1.2",date:"2022-11-10T00:00:00.000Z",formattedDate:"November 10, 2022",tags:[],readingTime:1.11,hasTruncateMarker:!0,authors:[{name:"Taichiro Suzuki",title:"Founder of Negy",url:"https://github.com/tbrand",imageURL:"https://github.com/tbrand.png",key:"tbrand"}],frontMatter:{title:"Version 0.1.2",description:"Announce version 0.1.2",slug:"version-0-1-2",authors:["tbrand"]},nextItem:{title:"Version 0.1.1",permalink:"/blog/version-0-1-1"}},s={authorsImageUrls:[void 0]},u=[{value:"New features",id:"new-features",level:2},{value:"Negy doesn&#39;t support http anymore!",id:"negy-doesnt-support-http-anymore",level:3},{value:"Filtering nodes by network name!",id:"filtering-nodes-by-network-name",level:3},{value:"Display removing reason on node pool",id:"display-removing-reason-on-node-pool",level:3},{value:"Node sends context at once",id:"node-sends-context-at-once",level:3},{value:"Document Improvement",id:"document-improvement",level:2},{value:"Others",id:"others",level:2}],p={toc:u};function c(e){let{components:t,...n}=e;return(0,o.kt)("wrapper",(0,r.Z)({},p,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("p",null,"Today I'm excited to announce Negy's new version 0.1.2!"),(0,o.kt)("h2",{id:"new-features"},"New features"),(0,o.kt)("h3",{id:"negy-doesnt-support-http-anymore"},"Negy doesn't support http anymore!"),(0,o.kt)("p",null,"Actually there is no modification for this dicision but Negy was not support ",(0,o.kt)("inlineCode",{parentName:"p"},"http")," at the beginning. I considered how Negy support the ",(0,o.kt)("inlineCode",{parentName:"p"},"http")," as proxy, but instead, support ",(0,o.kt)("inlineCode",{parentName:"p"},"https")," only. That's because the real world web pages basically support ",(0,o.kt)("inlineCode",{parentName:"p"},"https")," and Negy should focus on it."),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"https://github.com/negyio/negy/issues/27"},"https://github.com/negyio/negy/issues/27"))),(0,o.kt)("h3",{id:"filtering-nodes-by-network-name"},"Filtering nodes by network name!"),(0,o.kt)("p",null,'This is a first step of the long journey. Currently Negy support the filtering by "original" network name. In the near future, this will be more abstract. (Thanks ',(0,o.kt)("a",{parentName:"p",href:"https://github.com/Darth-Ness"},"Darth-Ness"),"!)"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"https://github.com/negyio/negy/pull/26"},"https://github.com/negyio/negy/pull/26"))),(0,o.kt)("h3",{id:"display-removing-reason-on-node-pool"},"Display removing reason on node pool"),(0,o.kt)("p",null,"For the debugging reason, node pool now shows removing reason. This does not weaken security."),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"https://github.com/negyio/negy/pull/30"},"https://github.com/negyio/negy/pull/30"))),(0,o.kt)("h3",{id:"node-sends-context-at-once"},"Node sends context at once"),(0,o.kt)("p",null,"Previously, node send its context twice. First, send its public key, and then, send its version. But this makes unstable behaviour. The bug was reported by ",(0,o.kt)("a",{parentName:"p",href:"https://github.com/I2rys"},"Trac3D1y"),"."),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"https://github.com/negyio/negy/issues/31"},"https://github.com/negyio/negy/issues/31")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"https://github.com/negyio/negy/pull/32"},"https://github.com/negyio/negy/pull/32"))),(0,o.kt)("h2",{id:"document-improvement"},"Document Improvement"),(0,o.kt)("p",null,"There are several document improvement"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"https://negy.io/docs/contribution/development_contribution/#by-building-source-code"},"Create Negy's full network by building source code"))),(0,o.kt)("h2",{id:"others"},"Others"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"Negy got new icon!"),(0,o.kt)("li",{parentName:"ul"},"31 stars on ",(0,o.kt)("a",{parentName:"li",href:"https://github.com/negyio/negy"},"GitHub")),(0,o.kt)("li",{parentName:"ul"},"46 upvotes and 63 followers on ",(0,o.kt)("a",{parentName:"li",href:"https://www.producthunt.com/posts/negy"},"ProductHunt")),(0,o.kt)("li",{parentName:"ul"},"5.3k views on ",(0,o.kt)("a",{parentName:"li",href:"https://www.reddit.com/r/onions/comments/y9o0ic/negy_im_building_a_proxy_that_conceals_your/"},"reddit r/onions")),(0,o.kt)("li",{parentName:"ul"},"3.8k views on ",(0,o.kt)("a",{parentName:"li",href:"https://www.reddit.com/r/rust/comments/yccpoi/negy_next_generation_anonymous_internet/"},"reddit r/rust")),(0,o.kt)("li",{parentName:"ul"},"16 followers on ",(0,o.kt)("a",{parentName:"li",href:"https://twitter.com/negyio"},"Twitter"))))}c.isMDXComponent=!0}}]);