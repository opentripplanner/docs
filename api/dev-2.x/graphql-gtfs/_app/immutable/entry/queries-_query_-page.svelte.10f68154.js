import{S as Q,i as P,s as w,a as u,c as d,h as E,d as m,b as c,e as $,f as _,m as g,t as v,g as y,j as h}from"../chunks/index.2dba5b6d.js";import{F,Q as S}from"../chunks/FieldDetails.4f4abe30.js";import{P as b}from"../chunks/PreviousNextPage.d9f716ba.js";function j(r){let s,f,t,i,n,o;return document.title=s="Query - "+r[0].field.name,t=new F({props:{field:r[0].field,type:S.QUERY}}),n=new b({props:{page:r[0].page}}),{c(){f=u(),d(t.$$.fragment),i=u(),d(n.$$.fragment)},l(e){E("svelte-19yffit",document.head).forEach(m),f=c(e),$(t.$$.fragment,e),i=c(e),$(n.$$.fragment,e)},m(e,a){_(e,f,a),g(t,e,a),_(e,i,a),g(n,e,a),o=!0},p(e,[a]){(!o||a&1)&&s!==(s="Query - "+e[0].field.name)&&(document.title=s);const l={};a&1&&(l.field=e[0].field),t.$set(l);const p={};a&1&&(p.page=e[0].page),n.$set(p)},i(e){o||(v(t.$$.fragment,e),v(n.$$.fragment,e),o=!0)},o(e){y(t.$$.fragment,e),y(n.$$.fragment,e),o=!1},d(e){e&&m(f),h(t,e),e&&m(i),h(n,e)}}}function q(r,s,f){let{data:t}=s;return r.$$set=i=>{"data"in i&&f(0,t=i.data)},[t]}class N extends Q{constructor(s){super(),P(this,s,q,j,w,{data:0})}}export{N as default};