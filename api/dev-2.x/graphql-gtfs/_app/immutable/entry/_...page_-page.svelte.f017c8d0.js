import{S as b,i as P,s as k,a as u,c as g,h as C,d as m,b as $,e as l,f as _,m as d,t as v,g as h,j as w}from"../chunks/index.2dba5b6d.js";import{C as S,P as j}from"../chunks/PreviousNextPage.59399993.js";function q(n){let s,i,t,r,o,p;return document.title=s=`
    `+(n[0].page.section?`${n[0].page.section} - `:"")+n[0].page.title+`
  `,t=new S({props:{source:n[0].page.content}}),o=new j({props:{page:n[0].page}}),{c(){i=u(),g(t.$$.fragment),r=u(),g(o.$$.fragment)},l(e){C("svelte-52tmna",document.head).forEach(m),i=$(e),l(t.$$.fragment,e),r=$(e),l(o.$$.fragment,e)},m(e,a){_(e,i,a),d(t,e,a),_(e,r,a),d(o,e,a),p=!0},p(e,[a]){(!p||a&1)&&s!==(s=`
    `+(e[0].page.section?`${e[0].page.section} - `:"")+e[0].page.title+`
  `)&&(document.title=s);const f={};a&1&&(f.source=e[0].page.content),t.$set(f);const c={};a&1&&(c.page=e[0].page),o.$set(c)},i(e){p||(v(t.$$.fragment,e),v(o.$$.fragment,e),p=!0)},o(e){h(t.$$.fragment,e),h(o.$$.fragment,e),p=!1},d(e){e&&m(i),w(t,e),e&&m(r),w(o,e)}}}function E(n,s,i){let{data:t}=s;return n.$$set=r=>{"data"in r&&i(0,t=r.data)},[t]}class y extends b{constructor(s){super(),P(this,s,E,q,k,{data:0})}}export{y as default};