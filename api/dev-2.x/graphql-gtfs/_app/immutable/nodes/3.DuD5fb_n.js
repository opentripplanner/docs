import{p as k,f as y}from"../chunks/pages.DJ6KVHi8.js";import{e as C}from"../chunks/index.B-BOSaKS.js";import{s as S,d as m,c as l,h as j,g as d,m as _}from"../chunks/scheduler.aAxNcMmG.js";import{S as q,i as M,d as $,t as h,a as b,m as v,c as w,b as P}from"../chunks/index.Cfvi8ke9.js";import{C as O,P as z}from"../chunks/PreviousNextPage.xSAGIEfN.js";const B=k.length>0,E=({url:n})=>{const t=y(n.pathname);if(!t)throw C(404,"Could not find the page you are looking for");return{page:t}},I=Object.freeze(Object.defineProperty({__proto__:null,load:E,prerender:B},Symbol.toStringTag,{value:"Module"}));function H(n){var c;let t,i,a,s,r,p;return document.title=t=`
    `+((c=n[0].page)!=null&&c.section?`${n[0].page.section} - `:"")+n[0].page.title+`
  `,a=new O({props:{source:n[0].page.content}}),r=new z({props:{page:n[0].page}}),{c(){i=_(),P(a.$$.fragment),s=_(),P(r.$$.fragment)},l(e){j("svelte-sbhnqj",document.head).forEach(m),i=d(e),w(a.$$.fragment,e),s=d(e),w(r.$$.fragment,e)},m(e,o){l(e,i,o),v(a,e,o),l(e,s,o),v(r,e,o),p=!0},p(e,[o]){var u;(!p||o&1)&&t!==(t=`
    `+((u=e[0].page)!=null&&u.section?`${e[0].page.section} - `:"")+e[0].page.title+`
  `)&&(document.title=t);const f={};o&1&&(f.source=e[0].page.content),a.$set(f);const g={};o&1&&(g.page=e[0].page),r.$set(g)},i(e){p||(b(a.$$.fragment,e),b(r.$$.fragment,e),p=!0)},o(e){h(a.$$.fragment,e),h(r.$$.fragment,e),p=!1},d(e){e&&(m(i),m(s)),$(a,e),$(r,e)}}}function N(n,t,i){let{data:a}=t;return n.$$set=s=>{"data"in s&&i(0,a=s.data)},[a]}class J extends q{constructor(t){super(),M(this,t,N,H,S,{data:0})}}export{J as component,I as universal};
