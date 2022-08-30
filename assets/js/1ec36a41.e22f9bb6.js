"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[6325],{3905:(e,t,r)=>{r.d(t,{Zo:()=>c,kt:()=>m});var n=r(7294);function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function o(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function l(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?o(Object(r),!0).forEach((function(t){a(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):o(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function i(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},o=Object.keys(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var s=n.createContext({}),p=function(e){var t=n.useContext(s),r=t;return e&&(r="function"==typeof e?e(t):l(l({},t),e)),r},c=function(e){var t=p(e.components);return n.createElement(s.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},u=n.forwardRef((function(e,t){var r=e.components,a=e.mdxType,o=e.originalType,s=e.parentName,c=i(e,["components","mdxType","originalType","parentName"]),u=p(r),m=a,f=u["".concat(s,".").concat(m)]||u[m]||d[m]||o;return r?n.createElement(f,l(l({ref:t},c),{},{components:r})):n.createElement(f,l({ref:t},c))}));function m(e,t){var r=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=r.length,l=new Array(o);l[0]=u;var i={};for(var s in t)hasOwnProperty.call(t,s)&&(i[s]=t[s]);i.originalType=e,i.mdxType="string"==typeof e?e:a,l[1]=i;for(var p=2;p<o;p++)l[p]=r[p];return n.createElement.apply(null,l)}return n.createElement.apply(null,r)}u.displayName="MDXCreateElement"},240:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>s,contentTitle:()=>l,default:()=>d,frontMatter:()=>o,metadata:()=>i,toc:()=>p});var n=r(7462),a=(r(7294),r(3905));const o={sidebar_position:2},l="Referral Pools",i={unversionedId:"guides/pools",id:"guides/pools",title:"Referral Pools",description:"Referral pools are smart contracts that distribute rewards based on the input received from the oracles. The Refer2Earn Factory generates pool contracts based on rules provided by projects. The contracts generated apply the given rules, distributing rewards to promoters and buyers.",source:"@site/docs/guides/pools.md",sourceDirName:"guides",slug:"/guides/pools",permalink:"/website/docs/guides/pools",draft:!1,tags:[],version:"current",sidebarPosition:2,frontMatter:{sidebar_position:2},sidebar:"tutorialSidebar",previous:{title:"Guides",permalink:"/website/docs/category/guides"},next:{title:"Promote & Earn",permalink:"/website/docs/guides/promote"}},s={},p=[{value:"Create a Referral Pool",id:"create-a-referral-pool",level:2}],c={toc:p};function d(e){let{components:t,...r}=e;return(0,a.kt)("wrapper",(0,n.Z)({},c,r,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"referral-pools"},"Referral Pools"),(0,a.kt)("p",null,"Referral pools are smart contracts that distribute rewards based on the input received from the oracles. The Refer2Earn Factory generates pool contracts based on rules provided by projects. The contracts generated apply the given rules, distributing rewards to promoters and buyers."),(0,a.kt)("p",null,"Rewards are distributed based on on-chain value, meaning that participants will only be rewarded based on events logged on the blockchain. In our case, the events are the transfer (purchase and sale) of tokens."),(0,a.kt)("p",null,"With every block minted, a fixed amount of tokens will be rewarded, this means that promoters and buyers that join early, will earn the highest APR. As more participants join, the APR will reduce."),(0,a.kt)("p",null,"Rewards will continue to be distributed to all those participating in the pool either until the pool is depleted or the participant transfers out (sells) their tokens. This aims to incentivise a HODL mentality."),(0,a.kt)("h2",{id:"create-a-referral-pool"},"Create a Referral Pool"),(0,a.kt)("p",null,"Creating a referral pool is easy!"),(0,a.kt)("table",null,(0,a.kt)("thead",{parentName:"table"},(0,a.kt)("tr",{parentName:"thead"},(0,a.kt)("th",{parentName:"tr",align:null},"#"),(0,a.kt)("th",{parentName:"tr",align:null},"Step"))),(0,a.kt)("tbody",{parentName:"table"},(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"1"),(0,a.kt)("td",{parentName:"tr",align:null},"Go to the ",(0,a.kt)("a",{parentName:"td",href:"https://app.refer2earn.com/my-pools"},"pool page")," on the dapp")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"2"),(0,a.kt)("td",{parentName:"tr",align:null},"Connect your wallet")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"3"),(0,a.kt)("td",{parentName:"tr",align:null},"Choose the token you would like to promote")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"4"),(0,a.kt)("td",{parentName:"tr",align:null},"Configure the pool parameters")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"5"),(0,a.kt)("td",{parentName:"tr",align:null},"Deposit the token amount")))),(0,a.kt)("p",null,"Head over to ",(0,a.kt)("a",{parentName:"p",href:"/docs/guides/promote"},"Promote & Earn")," to create a referral link and start earning from your pool."))}d.isMDXComponent=!0}}]);