import{S as y,i as M,s as T,a as u,c as d,h as w,d as m,b as c,e as $,f as _,m as g,t as h,g as v,j as P}from"../chunks/index.8755cf72.js";import{F,Q as N}from"../chunks/FieldDetails.c5dc01f9.js";import{P as Q}from"../chunks/PreviousNextPage.92c46868.js";function S(o){let n,r,t,i,s,f;return document.title=n="Mutation - "+o[0].field.name,t=new F({props:{field:o[0].field,type:N.MUTATION}}),s=new Q({props:{page:o[0].page}}),{c(){r=u(),d(t.$$.fragment),i=u(),d(s.$$.fragment)},l(e){w("svelte-1ha51ns",document.head).forEach(m),r=c(e),$(t.$$.fragment,e),i=c(e),$(s.$$.fragment,e)},m(e,a){_(e,r,a),g(t,e,a),_(e,i,a),g(s,e,a),f=!0},p(e,[a]){(!f||a&1)&&n!==(n="Mutation - "+e[0].field.name)&&(document.title=n);const l={};a&1&&(l.field=e[0].field),t.$set(l);const p={};a&1&&(p.page=e[0].page),s.$set(p)},i(e){f||(h(t.$$.fragment,e),h(s.$$.fragment,e),f=!0)},o(e){v(t.$$.fragment,e),v(s.$$.fragment,e),f=!1},d(e){e&&m(r),P(t,e),e&&m(i),P(s,e)}}}function b(o,n,r){let{data:t}=n;return o.$$set=i=>{"data"in i&&r(0,t=i.data)},[t]}class A extends y{constructor(n){super(),M(this,n,b,S,T,{data:0})}}export{A as default};
