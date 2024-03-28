var AT=Object.defineProperty;var NT=(i,n,t)=>n in i?AT(i,n,{enumerable:!0,configurable:!0,writable:!0,value:t}):i[n]=t;var za=(i,n,t)=>(NT(i,typeof n!="symbol"?n+"":n,t),t);import{b as ms}from"./paths.7f5cda0a.js";import{S as Me,i as Be,s as De,e as rn,b as Ee,g as re,d as ce,h as ee,C as et,D as qc,k as Ce,l as Pe,m as qe,ae as us,G as nt,H as tt,I as it,J as jc,v as Et,f as St,a3 as tr,y as Gt,z as si,A as Vt,B as Wt,x as sc,q as ho,r as po,u as go,R as Ke,n as mn,Q as It,a as mo,c as vo,a6 as kT,a7 as xT,ah as ac,o as OT}from"./index.39b8345f.js";function to(...i){return"/"+i.flatMap(n=>n.split("/")).filter(n=>!!n).join("/")}function io(i){return i.startsWith("/")||i.startsWith("#")}function Hc(i,n){return n.slug(i).replace(/--+/g,"-")}function Qa(i){let n,t;const s=i[5].default,a=et(s,i,i[4],null);let l=[{id:i[1]}],c={};for(let h=0;h<l.length;h+=1)c=qc(c,l[h]);return{c(){n=Ce(`h${i[0].depth}`),a&&a.c(),this.h()},l(h){n=Pe(h,(`h${i[0].depth}`||"null").toUpperCase(),{id:!0});var d=qe(n);a&&a.l(d),d.forEach(ee),this.h()},h(){us(`h${i[0].depth}`)(n,c)},m(h,d){Ee(h,n,d),a&&a.m(n,null),t=!0},p(h,d){a&&a.p&&(!t||d&16)&&nt(a,s,h,h[4],t?it(s,h[4],d,null):tt(h[4]),null),us(`h${h[0].depth}`)(n,c=jc(l,[(!t||d&2)&&{id:h[1]}]))},i(h){t||(re(a,h),t=!0)},o(h){ce(a,h),t=!1},d(h){h&&ee(n),a&&a.d(h)}}}function RT(i){let n=`h${i[0].depth}`,t,s,a=`h${i[0].depth}`&&Qa(i);return{c(){a&&a.c(),t=rn()},l(l){a&&a.l(l),t=rn()},m(l,c){a&&a.m(l,c),Ee(l,t,c),s=!0},p(l,[c]){`h${l[0].depth}`?n?De(n,`h${l[0].depth}`)?(a.d(1),a=Qa(l),n=`h${l[0].depth}`,a.c(),a.m(t.parentNode,t)):a.p(l,c):(a=Qa(l),n=`h${l[0].depth}`,a.c(),a.m(t.parentNode,t)):n&&(a.d(1),a=null,n=`h${l[0].depth}`)},i(l){s||(re(a),s=!0)},o(l){ce(a),s=!1},d(l){l&&ee(t),a&&a.d(l)}}}function DT(i,n,t){let{$$slots:s={},$$scope:a}=n,{token:l}=n,{options:c}=n;const h=void 0;let d;return i.$$set=v=>{"token"in v&&t(0,l=v.token),"options"in v&&t(2,c=v.options),"$$scope"in v&&t(4,a=v.$$scope)},i.$$.update=()=>{i.$$.dirty&5&&t(1,d=Hc(l.text,c.slugger))},[l,d,c,h,a,s]}class LT extends Me{constructor(n){super(),Be(this,n,DT,RT,De,{token:0,options:2,renderers:3})}get renderers(){return this.$$.ctx[3]}}function CT(i){let n,t;const s=i[4].default,a=et(s,i,i[3],null);return{c(){n=Ce("blockquote"),a&&a.c()},l(l){n=Pe(l,"BLOCKQUOTE",{});var c=qe(n);a&&a.l(c),c.forEach(ee)},m(l,c){Ee(l,n,c),a&&a.m(n,null),t=!0},p(l,[c]){a&&a.p&&(!t||c&8)&&nt(a,s,l,l[3],t?it(s,l[3],c,null):tt(l[3]),null)},i(l){t||(re(a,l),t=!0)},o(l){ce(a,l),t=!1},d(l){l&&ee(n),a&&a.d(l)}}}function PT(i,n,t){let{$$slots:s={},$$scope:a}=n;const l=void 0,c=void 0,h=void 0;return i.$$set=d=>{"$$scope"in d&&t(3,a=d.$$scope)},[l,c,h,a,s]}class FT extends Me{constructor(n){super(),Be(this,n,PT,CT,De,{token:0,options:1,renderers:2})}get token(){return this.$$.ctx[0]}get options(){return this.$$.ctx[1]}get renderers(){return this.$$.ctx[2]}}function oc(i,n,t){const s=i.slice();return s[3]=n[t],s}function lc(i){let n,t,s=i[0],a=[];for(let c=0;c<s.length;c+=1)a[c]=uc(oc(i,s,c));const l=c=>ce(a[c],1,1,()=>{a[c]=null});return{c(){for(let c=0;c<a.length;c+=1)a[c].c();n=rn()},l(c){for(let h=0;h<a.length;h+=1)a[h].l(c);n=rn()},m(c,h){for(let d=0;d<a.length;d+=1)a[d]&&a[d].m(c,h);Ee(c,n,h),t=!0},p(c,h){if(h&7){s=c[0];let d;for(d=0;d<s.length;d+=1){const v=oc(c,s,d);a[d]?(a[d].p(v,h),re(a[d],1)):(a[d]=uc(v),a[d].c(),re(a[d],1),a[d].m(n.parentNode,n))}for(Et(),d=s.length;d<a.length;d+=1)l(d);St()}},i(c){if(!t){for(let h=0;h<s.length;h+=1)re(a[h]);t=!0}},o(c){a=a.filter(Boolean);for(let h=0;h<a.length;h+=1)ce(a[h]);t=!1},d(c){tr(a,c),c&&ee(n)}}}function uc(i){let n,t;return n=new zc({props:{token:i[3],renderers:i[1],options:i[2]}}),{c(){Gt(n.$$.fragment)},l(s){si(n.$$.fragment,s)},m(s,a){Vt(n,s,a),t=!0},p(s,a){const l={};a&1&&(l.token=s[3]),a&2&&(l.renderers=s[1]),a&4&&(l.options=s[2]),n.$set(l)},i(s){t||(re(n.$$.fragment,s),t=!0)},o(s){ce(n.$$.fragment,s),t=!1},d(s){Wt(n,s)}}}function UT(i){let n,t,s=i[0]&&lc(i);return{c(){s&&s.c(),n=rn()},l(a){s&&s.l(a),n=rn()},m(a,l){s&&s.m(a,l),Ee(a,n,l),t=!0},p(a,[l]){a[0]?s?(s.p(a,l),l&1&&re(s,1)):(s=lc(a),s.c(),re(s,1),s.m(n.parentNode,n)):s&&(Et(),ce(s,1,1,()=>{s=null}),St())},i(a){t||(re(s),t=!0)},o(a){ce(s),t=!1},d(a){s&&s.d(a),a&&ee(n)}}}function MT(i,n,t){let{tokens:s}=n,{renderers:a}=n,{options:l}=n;return i.$$set=c=>{"tokens"in c&&t(0,s=c.tokens),"renderers"in c&&t(1,a=c.renderers),"options"in c&&t(2,l=c.options)},[s,a,l]}class vs extends Me{constructor(n){super(),Be(this,n,MT,UT,De,{tokens:0,renderers:1,options:2})}}function cc(i){let n,t,s;var a=i[1][i[0].type];function l(c){return{props:{token:c[0],options:c[2],renderers:c[1],$$slots:{default:[GT]},$$scope:{ctx:c}}}}return a&&(n=sc(a,l(i))),{c(){n&&Gt(n.$$.fragment),t=rn()},l(c){n&&si(n.$$.fragment,c),t=rn()},m(c,h){n&&Vt(n,c,h),Ee(c,t,h),s=!0},p(c,h){const d={};if(h&1&&(d.token=c[0]),h&4&&(d.options=c[2]),h&2&&(d.renderers=c[1]),h&15&&(d.$$scope={dirty:h,ctx:c}),h&3&&a!==(a=c[1][c[0].type])){if(n){Et();const v=n;ce(v.$$.fragment,1,0,()=>{Wt(v,1)}),St()}a?(n=sc(a,l(c)),Gt(n.$$.fragment),re(n.$$.fragment,1),Vt(n,t.parentNode,t)):n=null}else a&&n.$set(d)},i(c){s||(n&&re(n.$$.fragment,c),s=!0)},o(c){n&&ce(n.$$.fragment,c),s=!1},d(c){c&&ee(t),n&&Wt(n,c)}}}function BT(i){let n=i[0].raw+"",t;return{c(){t=ho(n)},l(s){t=po(s,n)},m(s,a){Ee(s,t,a)},p(s,a){a&1&&n!==(n=s[0].raw+"")&&go(t,n)},i:Ke,o:Ke,d(s){s&&ee(t)}}}function $T(i){let n,t;return n=new vs({props:{tokens:i[0].tokens,renderers:i[1],options:i[2]}}),{c(){Gt(n.$$.fragment)},l(s){si(n.$$.fragment,s)},m(s,a){Vt(n,s,a),t=!0},p(s,a){const l={};a&1&&(l.tokens=s[0].tokens),a&2&&(l.renderers=s[1]),a&4&&(l.options=s[2]),n.$set(l)},i(s){t||(re(n.$$.fragment,s),t=!0)},o(s){ce(n.$$.fragment,s),t=!1},d(s){Wt(n,s)}}}function GT(i){let n,t,s,a;const l=[$T,BT],c=[];function h(d,v){return"tokens"in d[0]&&d[0].tokens?0:1}return n=h(i),t=c[n]=l[n](i),{c(){t.c(),s=rn()},l(d){t.l(d),s=rn()},m(d,v){c[n].m(d,v),Ee(d,s,v),a=!0},p(d,v){let T=n;n=h(d),n===T?c[n].p(d,v):(Et(),ce(c[T],1,1,()=>{c[T]=null}),St(),t=c[n],t?t.p(d,v):(t=c[n]=l[n](d),t.c()),re(t,1),t.m(s.parentNode,s))},i(d){a||(re(t),a=!0)},o(d){ce(t),a=!1},d(d){c[n].d(d),d&&ee(s)}}}function VT(i){let n,t,s=i[1][i[0].type]&&cc(i);return{c(){s&&s.c(),n=rn()},l(a){s&&s.l(a),n=rn()},m(a,l){s&&s.m(a,l),Ee(a,n,l),t=!0},p(a,[l]){a[1][a[0].type]?s?(s.p(a,l),l&3&&re(s,1)):(s=cc(a),s.c(),re(s,1),s.m(n.parentNode,n)):s&&(Et(),ce(s,1,1,()=>{s=null}),St())},i(a){t||(re(s),t=!0)},o(a){ce(s),t=!1},d(a){s&&s.d(a),a&&ee(n)}}}function WT(i,n,t){let{token:s}=n,{renderers:a}=n,{options:l}=n;return i.$$set=c=>{"token"in c&&t(0,s=c.token),"renderers"in c&&t(1,a=c.renderers),"options"in c&&t(2,l=c.options)},[s,a,l]}class zc extends Me{constructor(n){super(),Be(this,n,WT,VT,De,{token:0,renderers:1,options:2})}}function fc(i,n,t){const s=i.slice();return s[4]=n[t],s}function hc(i){let n,t;return n=new zc({props:{token:{...i[4]},options:i[1],renderers:i[2]}}),{c(){Gt(n.$$.fragment)},l(s){si(n.$$.fragment,s)},m(s,a){Vt(n,s,a),t=!0},p(s,a){const l={};a&1&&(l.token={...s[4]}),a&2&&(l.options=s[1]),a&4&&(l.renderers=s[2]),n.$set(l)},i(s){t||(re(n.$$.fragment,s),t=!0)},o(s){ce(n.$$.fragment,s),t=!1},d(s){Wt(n,s)}}}function Ja(i){let n,t,s,a=i[0].items,l=[];for(let v=0;v<a.length;v+=1)l[v]=hc(fc(i,a,v));const c=v=>ce(l[v],1,1,()=>{l[v]=null});let h=[{start:t=i[0].start||1}],d={};for(let v=0;v<h.length;v+=1)d=qc(d,h[v]);return{c(){n=Ce(i[3]);for(let v=0;v<l.length;v+=1)l[v].c();this.h()},l(v){n=Pe(v,(i[3]||"null").toUpperCase(),{start:!0});var T=qe(n);for(let w=0;w<l.length;w+=1)l[w].l(T);T.forEach(ee),this.h()},h(){us(i[3])(n,d)},m(v,T){Ee(v,n,T);for(let w=0;w<l.length;w+=1)l[w]&&l[w].m(n,null);s=!0},p(v,T){if(T&7){a=v[0].items;let w;for(w=0;w<a.length;w+=1){const D=fc(v,a,w);l[w]?(l[w].p(D,T),re(l[w],1)):(l[w]=hc(D),l[w].c(),re(l[w],1),l[w].m(n,null))}for(Et(),w=a.length;w<l.length;w+=1)c(w);St()}us(v[3])(n,d=jc(h,[(!s||T&1&&t!==(t=v[0].start||1))&&{start:t}]))},i(v){if(!s){for(let T=0;T<a.length;T+=1)re(l[T]);s=!0}},o(v){l=l.filter(Boolean);for(let T=0;T<l.length;T+=1)ce(l[T]);s=!1},d(v){v&&ee(n),tr(l,v)}}}function YT(i){let n=i[3],t,s=i[3]&&Ja(i);return{c(){s&&s.c(),t=rn()},l(a){s&&s.l(a),t=rn()},m(a,l){s&&s.m(a,l),Ee(a,t,l)},p(a,[l]){a[3]?n?De(n,a[3])?(s.d(1),s=Ja(a),n=a[3],s.c(),s.m(t.parentNode,t)):s.p(a,l):(s=Ja(a),n=a[3],s.c(),s.m(t.parentNode,t)):n&&(s.d(1),s=null,n=a[3])},i:Ke,o(a){ce(s)},d(a){a&&ee(t),s&&s.d(a)}}}function qT(i,n,t){let{token:s}=n,{options:a}=n,{renderers:l}=n,c;return i.$$set=h=>{"token"in h&&t(0,s=h.token),"options"in h&&t(1,a=h.options),"renderers"in h&&t(2,l=h.renderers)},i.$$.update=()=>{i.$$.dirty&1&&t(3,c=s.ordered?"ol":"ul")},[s,a,l,c]}class jT extends Me{constructor(n){super(),Be(this,n,qT,YT,De,{token:0,options:1,renderers:2})}}function HT(i){let n,t;const s=i[4].default,a=et(s,i,i[3],null);return{c(){n=Ce("li"),a&&a.c()},l(l){n=Pe(l,"LI",{});var c=qe(n);a&&a.l(c),c.forEach(ee)},m(l,c){Ee(l,n,c),a&&a.m(n,null),t=!0},p(l,[c]){a&&a.p&&(!t||c&8)&&nt(a,s,l,l[3],t?it(s,l[3],c,null):tt(l[3]),null)},i(l){t||(re(a,l),t=!0)},o(l){ce(a,l),t=!1},d(l){l&&ee(n),a&&a.d(l)}}}function zT(i,n,t){let{$$slots:s={},$$scope:a}=n;const l=void 0,c=void 0,h=void 0;return i.$$set=d=>{"$$scope"in d&&t(3,a=d.$$scope)},[l,c,h,a,s]}class QT extends Me{constructor(n){super(),Be(this,n,zT,HT,De,{token:0,options:1,renderers:2})}get token(){return this.$$.ctx[0]}get options(){return this.$$.ctx[1]}get renderers(){return this.$$.ctx[2]}}function JT(i){let n;return{c(){n=Ce("br")},l(t){n=Pe(t,"BR",{})},m(t,s){Ee(t,n,s)},p:Ke,i:Ke,o:Ke,d(t){t&&ee(n)}}}function XT(i,n,t){return[void 0,void 0,void 0]}class KT extends Me{constructor(n){super(),Be(this,n,XT,JT,De,{token:0,options:1,renderers:2})}get token(){return this.$$.ctx[0]}get options(){return this.$$.ctx[1]}get renderers(){return this.$$.ctx[2]}}function ZT(i){let n,t,s=i[0].text+"",a,l;return{c(){n=Ce("pre"),t=Ce("code"),a=ho(s),this.h()},l(c){n=Pe(c,"PRE",{});var h=qe(n);t=Pe(h,"CODE",{class:!0});var d=qe(t);a=po(d,s),d.forEach(ee),h.forEach(ee),this.h()},h(){mn(t,"class",l=`lang-${i[0].lang}`)},m(c,h){Ee(c,n,h),It(n,t),It(t,a)},p(c,[h]){h&1&&s!==(s=c[0].text+"")&&go(a,s),h&1&&l!==(l=`lang-${c[0].lang}`)&&mn(t,"class",l)},i:Ke,o:Ke,d(c){c&&ee(n)}}}function eb(i,n,t){let{token:s}=n;const a=void 0,l=void 0;return i.$$set=c=>{"token"in c&&t(0,s=c.token)},[s,a,l]}class nb extends Me{constructor(n){super(),Be(this,n,eb,ZT,De,{token:0,options:1,renderers:2})}get options(){return this.$$.ctx[1]}get renderers(){return this.$$.ctx[2]}}function tb(i){let n,t=i[0].raw.slice(1,i[0].raw.length-1)+"",s;return{c(){n=Ce("code"),s=ho(t)},l(a){n=Pe(a,"CODE",{});var l=qe(n);s=po(l,t),l.forEach(ee)},m(a,l){Ee(a,n,l),It(n,s)},p(a,[l]){l&1&&t!==(t=a[0].raw.slice(1,a[0].raw.length-1)+"")&&go(s,t)},i:Ke,o:Ke,d(a){a&&ee(n)}}}function ib(i,n,t){let{token:s}=n;const a=void 0,l=void 0;return i.$$set=c=>{"token"in c&&t(0,s=c.token)},[s,a,l]}class rb extends Me{constructor(n){super(),Be(this,n,ib,tb,De,{token:0,options:1,renderers:2})}get options(){return this.$$.ctx[1]}get renderers(){return this.$$.ctx[2]}}function dc(i,n,t){const s=i.slice();return s[3]=n[t],s}function pc(i,n,t){const s=i.slice();return s[6]=n[t],s}function gc(i,n,t){const s=i.slice();return s[9]=n[t],s}function mc(i){let n,t,s,a;return t=new vs({props:{tokens:i[9].tokens,options:i[1],renderers:i[2]}}),{c(){n=Ce("th"),Gt(t.$$.fragment),s=mo(),this.h()},l(l){n=Pe(l,"TH",{scope:!0});var c=qe(n);si(t.$$.fragment,c),s=vo(c),c.forEach(ee),this.h()},h(){mn(n,"scope","col")},m(l,c){Ee(l,n,c),Vt(t,n,null),It(n,s),a=!0},p(l,c){const h={};c&1&&(h.tokens=l[9].tokens),c&2&&(h.options=l[1]),c&4&&(h.renderers=l[2]),t.$set(h)},i(l){a||(re(t.$$.fragment,l),a=!0)},o(l){ce(t.$$.fragment,l),a=!1},d(l){l&&ee(n),Wt(t)}}}function vc(i){let n,t,s;return t=new vs({props:{tokens:i[6].tokens,options:i[1],renderers:i[2]}}),{c(){n=Ce("td"),Gt(t.$$.fragment)},l(a){n=Pe(a,"TD",{});var l=qe(n);si(t.$$.fragment,l),l.forEach(ee)},m(a,l){Ee(a,n,l),Vt(t,n,null),s=!0},p(a,l){const c={};l&1&&(c.tokens=a[6].tokens),l&2&&(c.options=a[1]),l&4&&(c.renderers=a[2]),t.$set(c)},i(a){s||(re(t.$$.fragment,a),s=!0)},o(a){ce(t.$$.fragment,a),s=!1},d(a){a&&ee(n),Wt(t)}}}function yc(i){let n,t,s,a=i[3],l=[];for(let h=0;h<a.length;h+=1)l[h]=vc(pc(i,a,h));const c=h=>ce(l[h],1,1,()=>{l[h]=null});return{c(){n=Ce("tr");for(let h=0;h<l.length;h+=1)l[h].c();t=mo()},l(h){n=Pe(h,"TR",{});var d=qe(n);for(let v=0;v<l.length;v+=1)l[v].l(d);t=vo(d),d.forEach(ee)},m(h,d){Ee(h,n,d);for(let v=0;v<l.length;v+=1)l[v]&&l[v].m(n,null);It(n,t),s=!0},p(h,d){if(d&7){a=h[3];let v;for(v=0;v<a.length;v+=1){const T=pc(h,a,v);l[v]?(l[v].p(T,d),re(l[v],1)):(l[v]=vc(T),l[v].c(),re(l[v],1),l[v].m(n,t))}for(Et(),v=a.length;v<l.length;v+=1)c(v);St()}},i(h){if(!s){for(let d=0;d<a.length;d+=1)re(l[d]);s=!0}},o(h){l=l.filter(Boolean);for(let d=0;d<l.length;d+=1)ce(l[d]);s=!1},d(h){h&&ee(n),tr(l,h)}}}function sb(i){let n,t,s,a,l,c,h=i[0].header,d=[];for(let S=0;S<h.length;S+=1)d[S]=mc(gc(i,h,S));const v=S=>ce(d[S],1,1,()=>{d[S]=null});let T=i[0].rows,w=[];for(let S=0;S<T.length;S+=1)w[S]=yc(dc(i,T,S));const D=S=>ce(w[S],1,1,()=>{w[S]=null});return{c(){n=Ce("table"),t=Ce("thead"),s=Ce("tr");for(let S=0;S<d.length;S+=1)d[S].c();a=mo(),l=Ce("tbody");for(let S=0;S<w.length;S+=1)w[S].c()},l(S){n=Pe(S,"TABLE",{});var C=qe(n);t=Pe(C,"THEAD",{});var P=qe(t);s=Pe(P,"TR",{});var X=qe(s);for(let de=0;de<d.length;de+=1)d[de].l(X);X.forEach(ee),P.forEach(ee),a=vo(C),l=Pe(C,"TBODY",{});var z=qe(l);for(let de=0;de<w.length;de+=1)w[de].l(z);z.forEach(ee),C.forEach(ee)},m(S,C){Ee(S,n,C),It(n,t),It(t,s);for(let P=0;P<d.length;P+=1)d[P]&&d[P].m(s,null);It(n,a),It(n,l);for(let P=0;P<w.length;P+=1)w[P]&&w[P].m(l,null);c=!0},p(S,[C]){if(C&7){h=S[0].header;let P;for(P=0;P<h.length;P+=1){const X=gc(S,h,P);d[P]?(d[P].p(X,C),re(d[P],1)):(d[P]=mc(X),d[P].c(),re(d[P],1),d[P].m(s,null))}for(Et(),P=h.length;P<d.length;P+=1)v(P);St()}if(C&7){T=S[0].rows;let P;for(P=0;P<T.length;P+=1){const X=dc(S,T,P);w[P]?(w[P].p(X,C),re(w[P],1)):(w[P]=yc(X),w[P].c(),re(w[P],1),w[P].m(l,null))}for(Et(),P=T.length;P<w.length;P+=1)D(P);St()}},i(S){if(!c){for(let C=0;C<h.length;C+=1)re(d[C]);for(let C=0;C<T.length;C+=1)re(w[C]);c=!0}},o(S){d=d.filter(Boolean);for(let C=0;C<d.length;C+=1)ce(d[C]);w=w.filter(Boolean);for(let C=0;C<w.length;C+=1)ce(w[C]);c=!1},d(S){S&&ee(n),tr(d,S),tr(w,S)}}}function ab(i,n,t){let{token:s}=n,{options:a}=n,{renderers:l}=n;return i.$$set=c=>{"token"in c&&t(0,s=c.token),"options"in c&&t(1,a=c.options),"renderers"in c&&t(2,l=c.renderers)},[s,a,l]}class ob extends Me{constructor(n){super(),Be(this,n,ab,sb,De,{token:0,options:1,renderers:2})}}function lb(i){let n,t=i[0].text+"",s;return{c(){n=new kT(!1),s=rn(),this.h()},l(a){n=xT(a,!1),s=rn(),this.h()},h(){n.a=s},m(a,l){n.m(t,a,l),Ee(a,s,l)},p(a,[l]){l&1&&t!==(t=a[0].text+"")&&n.p(t)},i:Ke,o:Ke,d(a){a&&ee(s),a&&n.d()}}}function ub(i,n,t){let{token:s}=n;const a=void 0,l=void 0;return i.$$set=c=>{"token"in c&&t(0,s=c.token)},[s,a,l]}class cb extends Me{constructor(n){super(),Be(this,n,ub,lb,De,{token:0,options:1,renderers:2})}get options(){return this.$$.ctx[1]}get renderers(){return this.$$.ctx[2]}}function fb(i){let n,t;const s=i[4].default,a=et(s,i,i[3],null);return{c(){n=Ce("p"),a&&a.c()},l(l){n=Pe(l,"P",{});var c=qe(n);a&&a.l(c),c.forEach(ee)},m(l,c){Ee(l,n,c),a&&a.m(n,null),t=!0},p(l,[c]){a&&a.p&&(!t||c&8)&&nt(a,s,l,l[3],t?it(s,l[3],c,null):tt(l[3]),null)},i(l){t||(re(a,l),t=!0)},o(l){ce(a,l),t=!1},d(l){l&&ee(n),a&&a.d(l)}}}function hb(i,n,t){let{$$slots:s={},$$scope:a}=n;const l=void 0,c=void 0,h=void 0;return i.$$set=d=>{"$$scope"in d&&t(3,a=d.$$scope)},[l,c,h,a,s]}class db extends Me{constructor(n){super(),Be(this,n,hb,fb,De,{token:0,options:1,renderers:2})}get token(){return this.$$.ctx[0]}get options(){return this.$$.ctx[1]}get renderers(){return this.$$.ctx[2]}}function pb(i){let n,t,s,a;const l=i[4].default,c=et(l,i,i[3],null);return{c(){n=Ce("a"),c&&c.c(),this.h()},l(h){n=Pe(h,"A",{href:!0,title:!0});var d=qe(n);c&&c.l(d),d.forEach(ee),this.h()},h(){mn(n,"href",t=io(i[0].href)?to(i[1].baseUrl,i[0].href):i[0].href),mn(n,"title",s=i[0].title)},m(h,d){Ee(h,n,d),c&&c.m(n,null),a=!0},p(h,[d]){c&&c.p&&(!a||d&8)&&nt(c,l,h,h[3],a?it(l,h[3],d,null):tt(h[3]),null),(!a||d&3&&t!==(t=io(h[0].href)?to(h[1].baseUrl,h[0].href):h[0].href))&&mn(n,"href",t),(!a||d&1&&s!==(s=h[0].title))&&mn(n,"title",s)},i(h){a||(re(c,h),a=!0)},o(h){ce(c,h),a=!1},d(h){h&&ee(n),c&&c.d(h)}}}function gb(i,n,t){let{$$slots:s={},$$scope:a}=n,{token:l}=n,{options:c}=n;const h=void 0;return i.$$set=d=>{"token"in d&&t(0,l=d.token),"options"in d&&t(1,c=d.options),"$$scope"in d&&t(3,a=d.$$scope)},[l,c,h,a,s]}class mb extends Me{constructor(n){super(),Be(this,n,gb,pb,De,{token:0,options:1,renderers:2})}get renderers(){return this.$$.ctx[2]}}function vb(i){let n;const t=i[4].default,s=et(t,i,i[3],null);return{c(){s&&s.c()},l(a){s&&s.l(a)},m(a,l){s&&s.m(a,l),n=!0},p(a,[l]){s&&s.p&&(!n||l&8)&&nt(s,t,a,a[3],n?it(t,a[3],l,null):tt(a[3]),null)},i(a){n||(re(s,a),n=!0)},o(a){ce(s,a),n=!1},d(a){s&&s.d(a)}}}function yb(i,n,t){let{$$slots:s={},$$scope:a}=n;const l=void 0,c=void 0,h=void 0;return i.$$set=d=>{"$$scope"in d&&t(3,a=d.$$scope)},[l,c,h,a,s]}class Tb extends Me{constructor(n){super(),Be(this,n,yb,vb,De,{token:0,options:1,renderers:2})}get token(){return this.$$.ctx[0]}get options(){return this.$$.ctx[1]}get renderers(){return this.$$.ctx[2]}}function bb(i){let n,t;const s=i[4].default,a=et(s,i,i[3],null);return{c(){n=Ce("dfn"),a&&a.c()},l(l){n=Pe(l,"DFN",{});var c=qe(n);a&&a.l(c),c.forEach(ee)},m(l,c){Ee(l,n,c),a&&a.m(n,null),t=!0},p(l,[c]){a&&a.p&&(!t||c&8)&&nt(a,s,l,l[3],t?it(s,l[3],c,null):tt(l[3]),null)},i(l){t||(re(a,l),t=!0)},o(l){ce(a,l),t=!1},d(l){l&&ee(n),a&&a.d(l)}}}function wb(i,n,t){let{$$slots:s={},$$scope:a}=n;const l=void 0,c=void 0,h=void 0;return i.$$set=d=>{"$$scope"in d&&t(3,a=d.$$scope)},[l,c,h,a,s]}class _b extends Me{constructor(n){super(),Be(this,n,wb,bb,De,{token:0,options:1,renderers:2})}get token(){return this.$$.ctx[0]}get options(){return this.$$.ctx[1]}get renderers(){return this.$$.ctx[2]}}function Ib(i){let n,t;const s=i[4].default,a=et(s,i,i[3],null);return{c(){n=Ce("del"),a&&a.c()},l(l){n=Pe(l,"DEL",{});var c=qe(n);a&&a.l(c),c.forEach(ee)},m(l,c){Ee(l,n,c),a&&a.m(n,null),t=!0},p(l,[c]){a&&a.p&&(!t||c&8)&&nt(a,s,l,l[3],t?it(s,l[3],c,null):tt(l[3]),null)},i(l){t||(re(a,l),t=!0)},o(l){ce(a,l),t=!1},d(l){l&&ee(n),a&&a.d(l)}}}function Eb(i,n,t){let{$$slots:s={},$$scope:a}=n;const l=void 0,c=void 0,h=void 0;return i.$$set=d=>{"$$scope"in d&&t(3,a=d.$$scope)},[l,c,h,a,s]}class Sb extends Me{constructor(n){super(),Be(this,n,Eb,Ib,De,{token:0,options:1,renderers:2})}get token(){return this.$$.ctx[0]}get options(){return this.$$.ctx[1]}get renderers(){return this.$$.ctx[2]}}function Ab(i){let n,t;const s=i[4].default,a=et(s,i,i[3],null);return{c(){n=Ce("em"),a&&a.c()},l(l){n=Pe(l,"EM",{});var c=qe(n);a&&a.l(c),c.forEach(ee)},m(l,c){Ee(l,n,c),a&&a.m(n,null),t=!0},p(l,[c]){a&&a.p&&(!t||c&8)&&nt(a,s,l,l[3],t?it(s,l[3],c,null):tt(l[3]),null)},i(l){t||(re(a,l),t=!0)},o(l){ce(a,l),t=!1},d(l){l&&ee(n),a&&a.d(l)}}}function Nb(i,n,t){let{$$slots:s={},$$scope:a}=n;const l=void 0,c=void 0,h=void 0;return i.$$set=d=>{"$$scope"in d&&t(3,a=d.$$scope)},[l,c,h,a,s]}class kb extends Me{constructor(n){super(),Be(this,n,Nb,Ab,De,{token:0,options:1,renderers:2})}get token(){return this.$$.ctx[0]}get options(){return this.$$.ctx[1]}get renderers(){return this.$$.ctx[2]}}function xb(i){let n;return{c(){n=Ce("hr")},l(t){n=Pe(t,"HR",{})},m(t,s){Ee(t,n,s)},p:Ke,i:Ke,o:Ke,d(t){t&&ee(n)}}}function Ob(i,n,t){return[void 0,void 0,void 0]}class Rb extends Me{constructor(n){super(),Be(this,n,Ob,xb,De,{token:0,options:1,renderers:2})}get token(){return this.$$.ctx[0]}get options(){return this.$$.ctx[1]}get renderers(){return this.$$.ctx[2]}}function Db(i){let n,t;const s=i[4].default,a=et(s,i,i[3],null);return{c(){n=Ce("strong"),a&&a.c()},l(l){n=Pe(l,"STRONG",{});var c=qe(n);a&&a.l(c),c.forEach(ee)},m(l,c){Ee(l,n,c),a&&a.m(n,null),t=!0},p(l,[c]){a&&a.p&&(!t||c&8)&&nt(a,s,l,l[3],t?it(s,l[3],c,null):tt(l[3]),null)},i(l){t||(re(a,l),t=!0)},o(l){ce(a,l),t=!1},d(l){l&&ee(n),a&&a.d(l)}}}function Lb(i,n,t){let{$$slots:s={},$$scope:a}=n;const l=void 0,c=void 0,h=void 0;return i.$$set=d=>{"$$scope"in d&&t(3,a=d.$$scope)},[l,c,h,a,s]}class Cb extends Me{constructor(n){super(),Be(this,n,Lb,Db,De,{token:0,options:1,renderers:2})}get token(){return this.$$.ctx[0]}get options(){return this.$$.ctx[1]}get renderers(){return this.$$.ctx[2]}}function Pb(i){let n,t,s,a;return{c(){n=Ce("img"),this.h()},l(l){n=Pe(l,"IMG",{src:!0,title:!0,alt:!0,class:!0}),this.h()},h(){ac(n.src,t=i[0].href)||mn(n,"src",t),mn(n,"title",s=i[0].title),mn(n,"alt",a=i[0].text),mn(n,"class","markdown-image svelte-z38cge")},m(l,c){Ee(l,n,c)},p(l,[c]){c&1&&!ac(n.src,t=l[0].href)&&mn(n,"src",t),c&1&&s!==(s=l[0].title)&&mn(n,"title",s),c&1&&a!==(a=l[0].text)&&mn(n,"alt",a)},i:Ke,o:Ke,d(l){l&&ee(n)}}}function Fb(i,n,t){let{token:s}=n;const a=void 0,l=void 0;return i.$$set=c=>{"token"in c&&t(0,s=c.token)},[s,a,l]}class Ub extends Me{constructor(n){super(),Be(this,n,Fb,Pb,De,{token:0,options:1,renderers:2})}get options(){return this.$$.ctx[1]}get renderers(){return this.$$.ctx[2]}}function Mb(i){let n;const t=i[4].default,s=et(t,i,i[3],null);return{c(){s&&s.c()},l(a){s&&s.l(a)},m(a,l){s&&s.m(a,l),n=!0},p(a,[l]){s&&s.p&&(!n||l&8)&&nt(s,t,a,a[3],n?it(t,a[3],l,null):tt(a[3]),null)},i(a){n||(re(s,a),n=!0)},o(a){ce(s,a),n=!1},d(a){s&&s.d(a)}}}function Bb(i,n,t){let{$$slots:s={},$$scope:a}=n;const l=void 0,c=void 0,h=void 0;return i.$$set=d=>{"$$scope"in d&&t(3,a=d.$$scope)},[l,c,h,a,s]}class Tc extends Me{constructor(n){super(),Be(this,n,Bb,Mb,De,{token:0,options:1,renderers:2})}get token(){return this.$$.ctx[0]}get options(){return this.$$.ctx[1]}get renderers(){return this.$$.ctx[2]}}function Qc(){return{async:!1,baseUrl:null,breaks:!1,extensions:null,gfm:!0,headerIds:!0,headerPrefix:"",highlight:null,hooks:null,langPrefix:"language-",mangle:!0,pedantic:!1,renderer:null,sanitize:!1,sanitizer:null,silent:!1,smartypants:!1,tokenizer:null,walkTokens:null,xhtml:!1}}let ai=Qc();function $b(i){ai=i}const Jc=/[&<>"']/,Gb=new RegExp(Jc.source,"g"),Xc=/[<>"']|&(?!(#\d{1,7}|#[Xx][a-fA-F0-9]{1,6}|\w+);)/,Vb=new RegExp(Xc.source,"g"),Wb={"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;","'":"&#39;"},bc=i=>Wb[i];function tn(i,n){if(n){if(Jc.test(i))return i.replace(Gb,bc)}else if(Xc.test(i))return i.replace(Vb,bc);return i}const Yb=/&(#(?:\d+)|(?:#x[0-9A-Fa-f]+)|(?:\w+));?/ig;function Kc(i){return i.replace(Yb,(n,t)=>(t=t.toLowerCase(),t==="colon"?":":t.charAt(0)==="#"?t.charAt(1)==="x"?String.fromCharCode(parseInt(t.substring(2),16)):String.fromCharCode(+t.substring(1)):""))}const qb=/(^|[^\[])\^/g;function Ne(i,n){i=typeof i=="string"?i:i.source,n=n||"";const t={replace:(s,a)=>(a=a.source||a,a=a.replace(qb,"$1"),i=i.replace(s,a),t),getRegex:()=>new RegExp(i,n)};return t}const jb=/[^\w:]/g,Hb=/^$|^[a-z][a-z0-9+.-]*:|^[?#]/i;function wc(i,n,t){if(i){let s;try{s=decodeURIComponent(Kc(t)).replace(jb,"").toLowerCase()}catch{return null}if(s.indexOf("javascript:")===0||s.indexOf("vbscript:")===0||s.indexOf("data:")===0)return null}n&&!Hb.test(t)&&(t=Xb(n,t));try{t=encodeURI(t).replace(/%25/g,"%")}catch{return null}return t}const es={},zb=/^[^:]+:\/*[^/]*$/,Qb=/^([^:]+:)[\s\S]*$/,Jb=/^([^:]+:\/*[^/]*)[\s\S]*$/;function Xb(i,n){es[" "+i]||(zb.test(i)?es[" "+i]=i+"/":es[" "+i]=os(i,"/",!0)),i=es[" "+i];const t=i.indexOf(":")===-1;return n.substring(0,2)==="//"?t?n:i.replace(Qb,"$1")+n:n.charAt(0)==="/"?t?n:i.replace(Jb,"$1")+n:i+n}const cs={exec:function(){}};function _c(i,n){const t=i.replace(/\|/g,(l,c,h)=>{let d=!1,v=c;for(;--v>=0&&h[v]==="\\";)d=!d;return d?"|":" |"}),s=t.split(/ \|/);let a=0;if(s[0].trim()||s.shift(),s.length>0&&!s[s.length-1].trim()&&s.pop(),s.length>n)s.splice(n);else for(;s.length<n;)s.push("");for(;a<s.length;a++)s[a]=s[a].trim().replace(/\\\|/g,"|");return s}function os(i,n,t){const s=i.length;if(s===0)return"";let a=0;for(;a<s;){const l=i.charAt(s-a-1);if(l===n&&!t)a++;else if(l!==n&&t)a++;else break}return i.slice(0,s-a)}function Kb(i,n){if(i.indexOf(n[1])===-1)return-1;const t=i.length;let s=0,a=0;for(;a<t;a++)if(i[a]==="\\")a++;else if(i[a]===n[0])s++;else if(i[a]===n[1]&&(s--,s<0))return a;return-1}function Zb(i,n){!i||i.silent||(n&&console.warn("marked(): callback is deprecated since version 5.0.0, should not be used and will be removed in the future. Read more here: https://marked.js.org/using_pro#async"),(i.sanitize||i.sanitizer)&&console.warn("marked(): sanitize and sanitizer parameters are deprecated since version 0.7.0, should not be used and will be removed in the future. Read more here: https://marked.js.org/#/USING_ADVANCED.md#options"),(i.highlight||i.langPrefix!=="language-")&&console.warn("marked(): highlight and langPrefix parameters are deprecated since version 5.0.0, should not be used and will be removed in the future. Instead use https://www.npmjs.com/package/marked-highlight."),i.mangle&&console.warn("marked(): mangle parameter is enabled by default, but is deprecated since version 5.0.0, and will be removed in the future. To clear this warning, install https://www.npmjs.com/package/marked-mangle, or disable by setting `{mangle: false}`."),i.baseUrl&&console.warn("marked(): baseUrl parameter is deprecated since version 5.0.0, should not be used and will be removed in the future. Instead use https://www.npmjs.com/package/marked-base-url."),i.smartypants&&console.warn("marked(): smartypants parameter is deprecated since version 5.0.0, should not be used and will be removed in the future. Instead use https://www.npmjs.com/package/marked-smartypants."),i.xhtml&&console.warn("marked(): xhtml parameter is deprecated since version 5.0.0, should not be used and will be removed in the future. Instead use https://www.npmjs.com/package/marked-xhtml."),(i.headerIds||i.headerPrefix)&&console.warn("marked(): headerIds and headerPrefix parameters enabled by default, but are deprecated since version 5.0.0, and will be removed in the future. To clear this warning, install  https://www.npmjs.com/package/marked-gfm-heading-id, or disable by setting `{headerIds: false}`."))}function Ic(i,n){if(n<1)return"";let t="";for(;n>1;)n&1&&(t+=i),n>>=1,i+=i;return t+i}function Ec(i,n,t,s){const a=n.href,l=n.title?tn(n.title):null,c=i[1].replace(/\\([\[\]])/g,"$1");if(i[0].charAt(0)!=="!"){s.state.inLink=!0;const h={type:"link",raw:t,href:a,title:l,text:c,tokens:s.inlineTokens(c)};return s.state.inLink=!1,h}return{type:"image",raw:t,href:a,title:l,text:tn(c)}}function e0(i,n){const t=i.match(/^(\s+)(?:```)/);if(t===null)return n;const s=t[1];return n.split(`
`).map(a=>{const l=a.match(/^\s+/);if(l===null)return a;const[c]=l;return c.length>=s.length?a.slice(s.length):a}).join(`
`)}class yo{constructor(n){this.options=n||ai}space(n){const t=this.rules.block.newline.exec(n);if(t&&t[0].length>0)return{type:"space",raw:t[0]}}code(n){const t=this.rules.block.code.exec(n);if(t){const s=t[0].replace(/^ {1,4}/gm,"");return{type:"code",raw:t[0],codeBlockStyle:"indented",text:this.options.pedantic?s:os(s,`
`)}}}fences(n){const t=this.rules.block.fences.exec(n);if(t){const s=t[0],a=e0(s,t[3]||"");return{type:"code",raw:s,lang:t[2]?t[2].trim().replace(this.rules.inline._escapes,"$1"):t[2],text:a}}}heading(n){const t=this.rules.block.heading.exec(n);if(t){let s=t[2].trim();if(/#$/.test(s)){const a=os(s,"#");(this.options.pedantic||!a||/ $/.test(a))&&(s=a.trim())}return{type:"heading",raw:t[0],depth:t[1].length,text:s,tokens:this.lexer.inline(s)}}}hr(n){const t=this.rules.block.hr.exec(n);if(t)return{type:"hr",raw:t[0]}}blockquote(n){const t=this.rules.block.blockquote.exec(n);if(t){const s=t[0].replace(/^ *>[ \t]?/gm,""),a=this.lexer.state.top;this.lexer.state.top=!0;const l=this.lexer.blockTokens(s);return this.lexer.state.top=a,{type:"blockquote",raw:t[0],tokens:l,text:s}}}list(n){let t=this.rules.block.list.exec(n);if(t){let s,a,l,c,h,d,v,T,w,D,S,C,P=t[1].trim();const X=P.length>1,z={type:"list",raw:"",ordered:X,start:X?+P.slice(0,-1):"",loose:!1,items:[]};P=X?`\\d{1,9}\\${P.slice(-1)}`:`\\${P}`,this.options.pedantic&&(P=X?P:"[*+-]");const de=new RegExp(`^( {0,3}${P})((?:[	 ][^\\n]*)?(?:\\n|$))`);for(;n&&(C=!1,!(!(t=de.exec(n))||this.rules.block.hr.test(n)));){if(s=t[0],n=n.substring(s.length),T=t[2].split(`
`,1)[0].replace(/^\t+/,ye=>" ".repeat(3*ye.length)),w=n.split(`
`,1)[0],this.options.pedantic?(c=2,S=T.trimLeft()):(c=t[2].search(/[^ ]/),c=c>4?1:c,S=T.slice(c),c+=t[1].length),d=!1,!T&&/^ *$/.test(w)&&(s+=w+`
`,n=n.substring(w.length+1),C=!0),!C){const ye=new RegExp(`^ {0,${Math.min(3,c-1)}}(?:[*+-]|\\d{1,9}[.)])((?:[ 	][^\\n]*)?(?:\\n|$))`),_e=new RegExp(`^ {0,${Math.min(3,c-1)}}((?:- *){3,}|(?:_ *){3,}|(?:\\* *){3,})(?:\\n+|$)`),ke=new RegExp(`^ {0,${Math.min(3,c-1)}}(?:\`\`\`|~~~)`),Fe=new RegExp(`^ {0,${Math.min(3,c-1)}}#`);for(;n&&(D=n.split(`
`,1)[0],w=D,this.options.pedantic&&(w=w.replace(/^ {1,4}(?=( {4})*[^ ])/g,"  ")),!(ke.test(w)||Fe.test(w)||ye.test(w)||_e.test(n)));){if(w.search(/[^ ]/)>=c||!w.trim())S+=`
`+w.slice(c);else{if(d||T.search(/[^ ]/)>=4||ke.test(T)||Fe.test(T)||_e.test(T))break;S+=`
`+w}!d&&!w.trim()&&(d=!0),s+=D+`
`,n=n.substring(D.length+1),T=w.slice(c)}}z.loose||(v?z.loose=!0:/\n *\n *$/.test(s)&&(v=!0)),this.options.gfm&&(a=/^\[[ xX]\] /.exec(S),a&&(l=a[0]!=="[ ] ",S=S.replace(/^\[[ xX]\] +/,""))),z.items.push({type:"list_item",raw:s,task:!!a,checked:l,loose:!1,text:S}),z.raw+=s}z.items[z.items.length-1].raw=s.trimRight(),z.items[z.items.length-1].text=S.trimRight(),z.raw=z.raw.trimRight();const ve=z.items.length;for(h=0;h<ve;h++)if(this.lexer.state.top=!1,z.items[h].tokens=this.lexer.blockTokens(z.items[h].text,[]),!z.loose){const ye=z.items[h].tokens.filter(ke=>ke.type==="space"),_e=ye.length>0&&ye.some(ke=>/\n.*\n/.test(ke.raw));z.loose=_e}if(z.loose)for(h=0;h<ve;h++)z.items[h].loose=!0;return z}}html(n){const t=this.rules.block.html.exec(n);if(t){const s={type:"html",block:!0,raw:t[0],pre:!this.options.sanitizer&&(t[1]==="pre"||t[1]==="script"||t[1]==="style"),text:t[0]};if(this.options.sanitize){const a=this.options.sanitizer?this.options.sanitizer(t[0]):tn(t[0]);s.type="paragraph",s.text=a,s.tokens=this.lexer.inline(a)}return s}}def(n){const t=this.rules.block.def.exec(n);if(t){const s=t[1].toLowerCase().replace(/\s+/g," "),a=t[2]?t[2].replace(/^<(.*)>$/,"$1").replace(this.rules.inline._escapes,"$1"):"",l=t[3]?t[3].substring(1,t[3].length-1).replace(this.rules.inline._escapes,"$1"):t[3];return{type:"def",tag:s,raw:t[0],href:a,title:l}}}table(n){const t=this.rules.block.table.exec(n);if(t){const s={type:"table",header:_c(t[1]).map(a=>({text:a})),align:t[2].replace(/^ *|\| *$/g,"").split(/ *\| */),rows:t[3]&&t[3].trim()?t[3].replace(/\n[ \t]*$/,"").split(`
`):[]};if(s.header.length===s.align.length){s.raw=t[0];let a=s.align.length,l,c,h,d;for(l=0;l<a;l++)/^ *-+: *$/.test(s.align[l])?s.align[l]="right":/^ *:-+: *$/.test(s.align[l])?s.align[l]="center":/^ *:-+ *$/.test(s.align[l])?s.align[l]="left":s.align[l]=null;for(a=s.rows.length,l=0;l<a;l++)s.rows[l]=_c(s.rows[l],s.header.length).map(v=>({text:v}));for(a=s.header.length,c=0;c<a;c++)s.header[c].tokens=this.lexer.inline(s.header[c].text);for(a=s.rows.length,c=0;c<a;c++)for(d=s.rows[c],h=0;h<d.length;h++)d[h].tokens=this.lexer.inline(d[h].text);return s}}}lheading(n){const t=this.rules.block.lheading.exec(n);if(t)return{type:"heading",raw:t[0],depth:t[2].charAt(0)==="="?1:2,text:t[1],tokens:this.lexer.inline(t[1])}}paragraph(n){const t=this.rules.block.paragraph.exec(n);if(t){const s=t[1].charAt(t[1].length-1)===`
`?t[1].slice(0,-1):t[1];return{type:"paragraph",raw:t[0],text:s,tokens:this.lexer.inline(s)}}}text(n){const t=this.rules.block.text.exec(n);if(t)return{type:"text",raw:t[0],text:t[0],tokens:this.lexer.inline(t[0])}}escape(n){const t=this.rules.inline.escape.exec(n);if(t)return{type:"escape",raw:t[0],text:tn(t[1])}}tag(n){const t=this.rules.inline.tag.exec(n);if(t)return!this.lexer.state.inLink&&/^<a /i.test(t[0])?this.lexer.state.inLink=!0:this.lexer.state.inLink&&/^<\/a>/i.test(t[0])&&(this.lexer.state.inLink=!1),!this.lexer.state.inRawBlock&&/^<(pre|code|kbd|script)(\s|>)/i.test(t[0])?this.lexer.state.inRawBlock=!0:this.lexer.state.inRawBlock&&/^<\/(pre|code|kbd|script)(\s|>)/i.test(t[0])&&(this.lexer.state.inRawBlock=!1),{type:this.options.sanitize?"text":"html",raw:t[0],inLink:this.lexer.state.inLink,inRawBlock:this.lexer.state.inRawBlock,block:!1,text:this.options.sanitize?this.options.sanitizer?this.options.sanitizer(t[0]):tn(t[0]):t[0]}}link(n){const t=this.rules.inline.link.exec(n);if(t){const s=t[2].trim();if(!this.options.pedantic&&/^</.test(s)){if(!/>$/.test(s))return;const c=os(s.slice(0,-1),"\\");if((s.length-c.length)%2===0)return}else{const c=Kb(t[2],"()");if(c>-1){const d=(t[0].indexOf("!")===0?5:4)+t[1].length+c;t[2]=t[2].substring(0,c),t[0]=t[0].substring(0,d).trim(),t[3]=""}}let a=t[2],l="";if(this.options.pedantic){const c=/^([^'"]*[^\s])\s+(['"])(.*)\2/.exec(a);c&&(a=c[1],l=c[3])}else l=t[3]?t[3].slice(1,-1):"";return a=a.trim(),/^</.test(a)&&(this.options.pedantic&&!/>$/.test(s)?a=a.slice(1):a=a.slice(1,-1)),Ec(t,{href:a&&a.replace(this.rules.inline._escapes,"$1"),title:l&&l.replace(this.rules.inline._escapes,"$1")},t[0],this.lexer)}}reflink(n,t){let s;if((s=this.rules.inline.reflink.exec(n))||(s=this.rules.inline.nolink.exec(n))){let a=(s[2]||s[1]).replace(/\s+/g," ");if(a=t[a.toLowerCase()],!a){const l=s[0].charAt(0);return{type:"text",raw:l,text:l}}return Ec(s,a,s[0],this.lexer)}}emStrong(n,t,s=""){let a=this.rules.inline.emStrong.lDelim.exec(n);if(!a||a[3]&&s.match(/[\p{L}\p{N}]/u))return;const l=a[1]||a[2]||"";if(!l||l&&(s===""||this.rules.inline.punctuation.exec(s))){const c=a[0].length-1;let h,d,v=c,T=0;const w=a[0][0]==="*"?this.rules.inline.emStrong.rDelimAst:this.rules.inline.emStrong.rDelimUnd;for(w.lastIndex=0,t=t.slice(-1*n.length+c);(a=w.exec(t))!=null;){if(h=a[1]||a[2]||a[3]||a[4]||a[5]||a[6],!h)continue;if(d=h.length,a[3]||a[4]){v+=d;continue}else if((a[5]||a[6])&&c%3&&!((c+d)%3)){T+=d;continue}if(v-=d,v>0)continue;d=Math.min(d,d+v+T);const D=n.slice(0,c+a.index+(a[0].length-h.length)+d);if(Math.min(c,d)%2){const C=D.slice(1,-1);return{type:"em",raw:D,text:C,tokens:this.lexer.inlineTokens(C)}}const S=D.slice(2,-2);return{type:"strong",raw:D,text:S,tokens:this.lexer.inlineTokens(S)}}}}codespan(n){const t=this.rules.inline.code.exec(n);if(t){let s=t[2].replace(/\n/g," ");const a=/[^ ]/.test(s),l=/^ /.test(s)&&/ $/.test(s);return a&&l&&(s=s.substring(1,s.length-1)),s=tn(s,!0),{type:"codespan",raw:t[0],text:s}}}br(n){const t=this.rules.inline.br.exec(n);if(t)return{type:"br",raw:t[0]}}del(n){const t=this.rules.inline.del.exec(n);if(t)return{type:"del",raw:t[0],text:t[2],tokens:this.lexer.inlineTokens(t[2])}}autolink(n,t){const s=this.rules.inline.autolink.exec(n);if(s){let a,l;return s[2]==="@"?(a=tn(this.options.mangle?t(s[1]):s[1]),l="mailto:"+a):(a=tn(s[1]),l=a),{type:"link",raw:s[0],text:a,href:l,tokens:[{type:"text",raw:a,text:a}]}}}url(n,t){let s;if(s=this.rules.inline.url.exec(n)){let a,l;if(s[2]==="@")a=tn(this.options.mangle?t(s[0]):s[0]),l="mailto:"+a;else{let c;do c=s[0],s[0]=this.rules.inline._backpedal.exec(s[0])[0];while(c!==s[0]);a=tn(s[0]),s[1]==="www."?l="http://"+s[0]:l=s[0]}return{type:"link",raw:s[0],text:a,href:l,tokens:[{type:"text",raw:a,text:a}]}}}inlineText(n,t){const s=this.rules.inline.text.exec(n);if(s){let a;return this.lexer.state.inRawBlock?a=this.options.sanitize?this.options.sanitizer?this.options.sanitizer(s[0]):tn(s[0]):s[0]:a=tn(this.options.smartypants?t(s[0]):s[0]),{type:"text",raw:s[0],text:a}}}}const H={newline:/^(?: *(?:\n|$))+/,code:/^( {4}[^\n]+(?:\n(?: *(?:\n|$))*)?)+/,fences:/^ {0,3}(`{3,}(?=[^`\n]*(?:\n|$))|~{3,})([^\n]*)(?:\n|$)(?:|([\s\S]*?)(?:\n|$))(?: {0,3}\1[~`]* *(?=\n|$)|$)/,hr:/^ {0,3}((?:-[\t ]*){3,}|(?:_[ \t]*){3,}|(?:\*[ \t]*){3,})(?:\n+|$)/,heading:/^ {0,3}(#{1,6})(?=\s|$)(.*)(?:\n+|$)/,blockquote:/^( {0,3}> ?(paragraph|[^\n]*)(?:\n|$))+/,list:/^( {0,3}bull)([ \t][^\n]+?)?(?:\n|$)/,html:"^ {0,3}(?:<(script|pre|style|textarea)[\\s>][\\s\\S]*?(?:</\\1>[^\\n]*\\n+|$)|comment[^\\n]*(\\n+|$)|<\\?[\\s\\S]*?(?:\\?>\\n*|$)|<![A-Z][\\s\\S]*?(?:>\\n*|$)|<!\\[CDATA\\[[\\s\\S]*?(?:\\]\\]>\\n*|$)|</?(tag)(?: +|\\n|/?>)[\\s\\S]*?(?:(?:\\n *)+\\n|$)|<(?!script|pre|style|textarea)([a-z][\\w-]*)(?:attribute)*? */?>(?=[ \\t]*(?:\\n|$))[\\s\\S]*?(?:(?:\\n *)+\\n|$)|</(?!script|pre|style|textarea)[a-z][\\w-]*\\s*>(?=[ \\t]*(?:\\n|$))[\\s\\S]*?(?:(?:\\n *)+\\n|$))",def:/^ {0,3}\[(label)\]: *(?:\n *)?([^<\s][^\s]*|<.*?>)(?:(?: +(?:\n *)?| *\n *)(title))? *(?:\n+|$)/,table:cs,lheading:/^((?:.|\n(?!\n))+?)\n {0,3}(=+|-+) *(?:\n+|$)/,_paragraph:/^([^\n]+(?:\n(?!hr|heading|lheading|blockquote|fences|list|html|table| +\n)[^\n]+)*)/,text:/^[^\n]+/};H._label=/(?!\s*\])(?:\\.|[^\[\]\\])+/;H._title=/(?:"(?:\\"?|[^"\\])*"|'[^'\n]*(?:\n[^'\n]+)*\n?'|\([^()]*\))/;H.def=Ne(H.def).replace("label",H._label).replace("title",H._title).getRegex();H.bullet=/(?:[*+-]|\d{1,9}[.)])/;H.listItemStart=Ne(/^( *)(bull) */).replace("bull",H.bullet).getRegex();H.list=Ne(H.list).replace(/bull/g,H.bullet).replace("hr","\\n+(?=\\1?(?:(?:- *){3,}|(?:_ *){3,}|(?:\\* *){3,})(?:\\n+|$))").replace("def","\\n+(?="+H.def.source+")").getRegex();H._tag="address|article|aside|base|basefont|blockquote|body|caption|center|col|colgroup|dd|details|dialog|dir|div|dl|dt|fieldset|figcaption|figure|footer|form|frame|frameset|h[1-6]|head|header|hr|html|iframe|legend|li|link|main|menu|menuitem|meta|nav|noframes|ol|optgroup|option|p|param|section|source|summary|table|tbody|td|tfoot|th|thead|title|tr|track|ul";H._comment=/<!--(?!-?>)[\s\S]*?(?:-->|$)/;H.html=Ne(H.html,"i").replace("comment",H._comment).replace("tag",H._tag).replace("attribute",/ +[a-zA-Z:_][\w.:-]*(?: *= *"[^"\n]*"| *= *'[^'\n]*'| *= *[^\s"'=<>`]+)?/).getRegex();H.paragraph=Ne(H._paragraph).replace("hr",H.hr).replace("heading"," {0,3}#{1,6} ").replace("|lheading","").replace("|table","").replace("blockquote"," {0,3}>").replace("fences"," {0,3}(?:`{3,}(?=[^`\\n]*\\n)|~{3,})[^\\n]*\\n").replace("list"," {0,3}(?:[*+-]|1[.)]) ").replace("html","</?(?:tag)(?: +|\\n|/?>)|<(?:script|pre|style|textarea|!--)").replace("tag",H._tag).getRegex();H.blockquote=Ne(H.blockquote).replace("paragraph",H.paragraph).getRegex();H.normal={...H};H.gfm={...H.normal,table:"^ *([^\\n ].*\\|.*)\\n {0,3}(?:\\| *)?(:?-+:? *(?:\\| *:?-+:? *)*)(?:\\| *)?(?:\\n((?:(?! *\\n|hr|heading|blockquote|code|fences|list|html).*(?:\\n|$))*)\\n*|$)"};H.gfm.table=Ne(H.gfm.table).replace("hr",H.hr).replace("heading"," {0,3}#{1,6} ").replace("blockquote"," {0,3}>").replace("code"," {4}[^\\n]").replace("fences"," {0,3}(?:`{3,}(?=[^`\\n]*\\n)|~{3,})[^\\n]*\\n").replace("list"," {0,3}(?:[*+-]|1[.)]) ").replace("html","</?(?:tag)(?: +|\\n|/?>)|<(?:script|pre|style|textarea|!--)").replace("tag",H._tag).getRegex();H.gfm.paragraph=Ne(H._paragraph).replace("hr",H.hr).replace("heading"," {0,3}#{1,6} ").replace("|lheading","").replace("table",H.gfm.table).replace("blockquote"," {0,3}>").replace("fences"," {0,3}(?:`{3,}(?=[^`\\n]*\\n)|~{3,})[^\\n]*\\n").replace("list"," {0,3}(?:[*+-]|1[.)]) ").replace("html","</?(?:tag)(?: +|\\n|/?>)|<(?:script|pre|style|textarea|!--)").replace("tag",H._tag).getRegex();H.pedantic={...H.normal,html:Ne(`^ *(?:comment *(?:\\n|\\s*$)|<(tag)[\\s\\S]+?</\\1> *(?:\\n{2,}|\\s*$)|<tag(?:"[^"]*"|'[^']*'|\\s[^'"/>\\s]*)*?/?> *(?:\\n{2,}|\\s*$))`).replace("comment",H._comment).replace(/tag/g,"(?!(?:a|em|strong|small|s|cite|q|dfn|abbr|data|time|code|var|samp|kbd|sub|sup|i|b|u|mark|ruby|rt|rp|bdi|bdo|span|br|wbr|ins|del|img)\\b)\\w+(?!:|[^\\w\\s@]*@)\\b").getRegex(),def:/^ *\[([^\]]+)\]: *<?([^\s>]+)>?(?: +(["(][^\n]+[")]))? *(?:\n+|$)/,heading:/^(#{1,6})(.*)(?:\n+|$)/,fences:cs,lheading:/^(.+?)\n {0,3}(=+|-+) *(?:\n+|$)/,paragraph:Ne(H.normal._paragraph).replace("hr",H.hr).replace("heading",` *#{1,6} *[^
]`).replace("lheading",H.lheading).replace("blockquote"," {0,3}>").replace("|fences","").replace("|list","").replace("|html","").getRegex()};const $={escape:/^\\([!"#$%&'()*+,\-./:;<=>?@\[\]\\^_`{|}~])/,autolink:/^<(scheme:[^\s\x00-\x1f<>]*|email)>/,url:cs,tag:"^comment|^</[a-zA-Z][\\w:-]*\\s*>|^<[a-zA-Z][\\w-]*(?:attribute)*?\\s*/?>|^<\\?[\\s\\S]*?\\?>|^<![a-zA-Z]+\\s[\\s\\S]*?>|^<!\\[CDATA\\[[\\s\\S]*?\\]\\]>",link:/^!?\[(label)\]\(\s*(href)(?:\s+(title))?\s*\)/,reflink:/^!?\[(label)\]\[(ref)\]/,nolink:/^!?\[(ref)\](?:\[\])?/,reflinkSearch:"reflink|nolink(?!\\()",emStrong:{lDelim:/^(?:\*+(?:([punct_])|[^\s*]))|^_+(?:([punct*])|([^\s_]))/,rDelimAst:/^(?:[^_*\\]|\\.)*?\_\_(?:[^_*\\]|\\.)*?\*(?:[^_*\\]|\\.)*?(?=\_\_)|(?:[^*\\]|\\.)+(?=[^*])|[punct_](\*+)(?=[\s]|$)|(?:[^punct*_\s\\]|\\.)(\*+)(?=[punct_\s]|$)|[punct_\s](\*+)(?=[^punct*_\s])|[\s](\*+)(?=[punct_])|[punct_](\*+)(?=[punct_])|(?:[^punct*_\s\\]|\\.)(\*+)(?=[^punct*_\s])/,rDelimUnd:/^(?:[^_*\\]|\\.)*?\*\*(?:[^_*\\]|\\.)*?\_(?:[^_*\\]|\\.)*?(?=\*\*)|(?:[^_\\]|\\.)+(?=[^_])|[punct*](\_+)(?=[\s]|$)|(?:[^punct*_\s\\]|\\.)(\_+)(?=[punct*\s]|$)|[punct*\s](\_+)(?=[^punct*_\s])|[\s](\_+)(?=[punct*])|[punct*](\_+)(?=[punct*])/},code:/^(`+)([^`]|[^`][\s\S]*?[^`])\1(?!`)/,br:/^( {2,}|\\)\n(?!\s*$)/,del:cs,text:/^(`+|[^`])(?:(?= {2,}\n)|[\s\S]*?(?:(?=[\\<!\[`*_]|\b_|$)|[^ ](?= {2,}\n)))/,punctuation:/^([\spunctuation])/};$._punctuation="!\"#$%&'()+\\-.,/:;<=>?@\\[\\]`^{|}~";$.punctuation=Ne($.punctuation).replace(/punctuation/g,$._punctuation).getRegex();$.blockSkip=/\[[^\]]*?\]\([^\)]*?\)|`[^`]*?`|<[^>]*?>/g;$.escapedEmSt=/(?:^|[^\\])(?:\\\\)*\\[*_]/g;$._comment=Ne(H._comment).replace("(?:-->|$)","-->").getRegex();$.emStrong.lDelim=Ne($.emStrong.lDelim).replace(/punct/g,$._punctuation).getRegex();$.emStrong.rDelimAst=Ne($.emStrong.rDelimAst,"g").replace(/punct/g,$._punctuation).getRegex();$.emStrong.rDelimUnd=Ne($.emStrong.rDelimUnd,"g").replace(/punct/g,$._punctuation).getRegex();$._escapes=/\\([!"#$%&'()*+,\-./:;<=>?@\[\]\\^_`{|}~])/g;$._scheme=/[a-zA-Z][a-zA-Z0-9+.-]{1,31}/;$._email=/[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+(@)[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?(?:\.[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?)+(?![-_])/;$.autolink=Ne($.autolink).replace("scheme",$._scheme).replace("email",$._email).getRegex();$._attribute=/\s+[a-zA-Z:_][\w.:-]*(?:\s*=\s*"[^"]*"|\s*=\s*'[^']*'|\s*=\s*[^\s"'=<>`]+)?/;$.tag=Ne($.tag).replace("comment",$._comment).replace("attribute",$._attribute).getRegex();$._label=/(?:\[(?:\\.|[^\[\]\\])*\]|\\.|`[^`]*`|[^\[\]\\`])*?/;$._href=/<(?:\\.|[^\n<>\\])+>|[^\s\x00-\x1f]*/;$._title=/"(?:\\"?|[^"\\])*"|'(?:\\'?|[^'\\])*'|\((?:\\\)?|[^)\\])*\)/;$.link=Ne($.link).replace("label",$._label).replace("href",$._href).replace("title",$._title).getRegex();$.reflink=Ne($.reflink).replace("label",$._label).replace("ref",H._label).getRegex();$.nolink=Ne($.nolink).replace("ref",H._label).getRegex();$.reflinkSearch=Ne($.reflinkSearch,"g").replace("reflink",$.reflink).replace("nolink",$.nolink).getRegex();$.normal={...$};$.pedantic={...$.normal,strong:{start:/^__|\*\*/,middle:/^__(?=\S)([\s\S]*?\S)__(?!_)|^\*\*(?=\S)([\s\S]*?\S)\*\*(?!\*)/,endAst:/\*\*(?!\*)/g,endUnd:/__(?!_)/g},em:{start:/^_|\*/,middle:/^()\*(?=\S)([\s\S]*?\S)\*(?!\*)|^_(?=\S)([\s\S]*?\S)_(?!_)/,endAst:/\*(?!\*)/g,endUnd:/_(?!_)/g},link:Ne(/^!?\[(label)\]\((.*?)\)/).replace("label",$._label).getRegex(),reflink:Ne(/^!?\[(label)\]\s*\[([^\]]*)\]/).replace("label",$._label).getRegex()};$.gfm={...$.normal,escape:Ne($.escape).replace("])","~|])").getRegex(),_extended_email:/[A-Za-z0-9._+-]+(@)[a-zA-Z0-9-_]+(?:\.[a-zA-Z0-9-_]*[a-zA-Z0-9])+(?![-_])/,url:/^((?:ftp|https?):\/\/|www\.)(?:[a-zA-Z0-9\-]+\.?)+[^\s<]*|^email/,_backpedal:/(?:[^?!.,:;*_'"~()&]+|\([^)]*\)|&(?![a-zA-Z0-9]+;$)|[?!.,:;*_'"~)]+(?!$))+/,del:/^(~~?)(?=[^\s~])([\s\S]*?[^\s~])\1(?=[^~]|$)/,text:/^([`~]+|[^`~])(?:(?= {2,}\n)|(?=[a-zA-Z0-9.!#$%&'*+\/=?_`{\|}~-]+@)|[\s\S]*?(?:(?=[\\<!\[`*~_]|\b_|https?:\/\/|ftp:\/\/|www\.|$)|[^ ](?= {2,}\n)|[^a-zA-Z0-9.!#$%&'*+\/=?_`{\|}~-](?=[a-zA-Z0-9.!#$%&'*+\/=?_`{\|}~-]+@)))/};$.gfm.url=Ne($.gfm.url,"i").replace("email",$.gfm._extended_email).getRegex();$.breaks={...$.gfm,br:Ne($.br).replace("{2,}","*").getRegex(),text:Ne($.gfm.text).replace("\\b_","\\b_| {2,}\\n").replace(/\{2,\}/g,"*").getRegex()};function n0(i){return i.replace(/---/g,"—").replace(/--/g,"–").replace(/(^|[-\u2014/(\[{"\s])'/g,"$1‘").replace(/'/g,"’").replace(/(^|[-\u2014/(\[{\u2018\s])"/g,"$1“").replace(/"/g,"”").replace(/\.{3}/g,"…")}function Sc(i){let n="",t,s;const a=i.length;for(t=0;t<a;t++)s=i.charCodeAt(t),Math.random()>.5&&(s="x"+s.toString(16)),n+="&#"+s+";";return n}let rr=class ro{constructor(n){this.tokens=[],this.tokens.links=Object.create(null),this.options=n||ai,this.options.tokenizer=this.options.tokenizer||new yo,this.tokenizer=this.options.tokenizer,this.tokenizer.options=this.options,this.tokenizer.lexer=this,this.inlineQueue=[],this.state={inLink:!1,inRawBlock:!1,top:!0};const t={block:H.normal,inline:$.normal};this.options.pedantic?(t.block=H.pedantic,t.inline=$.pedantic):this.options.gfm&&(t.block=H.gfm,this.options.breaks?t.inline=$.breaks:t.inline=$.gfm),this.tokenizer.rules=t}static get rules(){return{block:H,inline:$}}static lex(n,t){return new ro(t).lex(n)}static lexInline(n,t){return new ro(t).inlineTokens(n)}lex(n){n=n.replace(/\r\n|\r/g,`
`),this.blockTokens(n,this.tokens);let t;for(;t=this.inlineQueue.shift();)this.inlineTokens(t.src,t.tokens);return this.tokens}blockTokens(n,t=[]){this.options.pedantic?n=n.replace(/\t/g,"    ").replace(/^ +$/gm,""):n=n.replace(/^( *)(\t+)/gm,(h,d,v)=>d+"    ".repeat(v.length));let s,a,l,c;for(;n;)if(!(this.options.extensions&&this.options.extensions.block&&this.options.extensions.block.some(h=>(s=h.call({lexer:this},n,t))?(n=n.substring(s.raw.length),t.push(s),!0):!1))){if(s=this.tokenizer.space(n)){n=n.substring(s.raw.length),s.raw.length===1&&t.length>0?t[t.length-1].raw+=`
`:t.push(s);continue}if(s=this.tokenizer.code(n)){n=n.substring(s.raw.length),a=t[t.length-1],a&&(a.type==="paragraph"||a.type==="text")?(a.raw+=`
`+s.raw,a.text+=`
`+s.text,this.inlineQueue[this.inlineQueue.length-1].src=a.text):t.push(s);continue}if(s=this.tokenizer.fences(n)){n=n.substring(s.raw.length),t.push(s);continue}if(s=this.tokenizer.heading(n)){n=n.substring(s.raw.length),t.push(s);continue}if(s=this.tokenizer.hr(n)){n=n.substring(s.raw.length),t.push(s);continue}if(s=this.tokenizer.blockquote(n)){n=n.substring(s.raw.length),t.push(s);continue}if(s=this.tokenizer.list(n)){n=n.substring(s.raw.length),t.push(s);continue}if(s=this.tokenizer.html(n)){n=n.substring(s.raw.length),t.push(s);continue}if(s=this.tokenizer.def(n)){n=n.substring(s.raw.length),a=t[t.length-1],a&&(a.type==="paragraph"||a.type==="text")?(a.raw+=`
`+s.raw,a.text+=`
`+s.raw,this.inlineQueue[this.inlineQueue.length-1].src=a.text):this.tokens.links[s.tag]||(this.tokens.links[s.tag]={href:s.href,title:s.title});continue}if(s=this.tokenizer.table(n)){n=n.substring(s.raw.length),t.push(s);continue}if(s=this.tokenizer.lheading(n)){n=n.substring(s.raw.length),t.push(s);continue}if(l=n,this.options.extensions&&this.options.extensions.startBlock){let h=1/0;const d=n.slice(1);let v;this.options.extensions.startBlock.forEach(function(T){v=T.call({lexer:this},d),typeof v=="number"&&v>=0&&(h=Math.min(h,v))}),h<1/0&&h>=0&&(l=n.substring(0,h+1))}if(this.state.top&&(s=this.tokenizer.paragraph(l))){a=t[t.length-1],c&&a.type==="paragraph"?(a.raw+=`
`+s.raw,a.text+=`
`+s.text,this.inlineQueue.pop(),this.inlineQueue[this.inlineQueue.length-1].src=a.text):t.push(s),c=l.length!==n.length,n=n.substring(s.raw.length);continue}if(s=this.tokenizer.text(n)){n=n.substring(s.raw.length),a=t[t.length-1],a&&a.type==="text"?(a.raw+=`
`+s.raw,a.text+=`
`+s.text,this.inlineQueue.pop(),this.inlineQueue[this.inlineQueue.length-1].src=a.text):t.push(s);continue}if(n){const h="Infinite loop on byte: "+n.charCodeAt(0);if(this.options.silent){console.error(h);break}else throw new Error(h)}}return this.state.top=!0,t}inline(n,t=[]){return this.inlineQueue.push({src:n,tokens:t}),t}inlineTokens(n,t=[]){let s,a,l,c=n,h,d,v;if(this.tokens.links){const T=Object.keys(this.tokens.links);if(T.length>0)for(;(h=this.tokenizer.rules.inline.reflinkSearch.exec(c))!=null;)T.includes(h[0].slice(h[0].lastIndexOf("[")+1,-1))&&(c=c.slice(0,h.index)+"["+Ic("a",h[0].length-2)+"]"+c.slice(this.tokenizer.rules.inline.reflinkSearch.lastIndex))}for(;(h=this.tokenizer.rules.inline.blockSkip.exec(c))!=null;)c=c.slice(0,h.index)+"["+Ic("a",h[0].length-2)+"]"+c.slice(this.tokenizer.rules.inline.blockSkip.lastIndex);for(;(h=this.tokenizer.rules.inline.escapedEmSt.exec(c))!=null;)c=c.slice(0,h.index+h[0].length-2)+"++"+c.slice(this.tokenizer.rules.inline.escapedEmSt.lastIndex),this.tokenizer.rules.inline.escapedEmSt.lastIndex--;for(;n;)if(d||(v=""),d=!1,!(this.options.extensions&&this.options.extensions.inline&&this.options.extensions.inline.some(T=>(s=T.call({lexer:this},n,t))?(n=n.substring(s.raw.length),t.push(s),!0):!1))){if(s=this.tokenizer.escape(n)){n=n.substring(s.raw.length),t.push(s);continue}if(s=this.tokenizer.tag(n)){n=n.substring(s.raw.length),a=t[t.length-1],a&&s.type==="text"&&a.type==="text"?(a.raw+=s.raw,a.text+=s.text):t.push(s);continue}if(s=this.tokenizer.link(n)){n=n.substring(s.raw.length),t.push(s);continue}if(s=this.tokenizer.reflink(n,this.tokens.links)){n=n.substring(s.raw.length),a=t[t.length-1],a&&s.type==="text"&&a.type==="text"?(a.raw+=s.raw,a.text+=s.text):t.push(s);continue}if(s=this.tokenizer.emStrong(n,c,v)){n=n.substring(s.raw.length),t.push(s);continue}if(s=this.tokenizer.codespan(n)){n=n.substring(s.raw.length),t.push(s);continue}if(s=this.tokenizer.br(n)){n=n.substring(s.raw.length),t.push(s);continue}if(s=this.tokenizer.del(n)){n=n.substring(s.raw.length),t.push(s);continue}if(s=this.tokenizer.autolink(n,Sc)){n=n.substring(s.raw.length),t.push(s);continue}if(!this.state.inLink&&(s=this.tokenizer.url(n,Sc))){n=n.substring(s.raw.length),t.push(s);continue}if(l=n,this.options.extensions&&this.options.extensions.startInline){let T=1/0;const w=n.slice(1);let D;this.options.extensions.startInline.forEach(function(S){D=S.call({lexer:this},w),typeof D=="number"&&D>=0&&(T=Math.min(T,D))}),T<1/0&&T>=0&&(l=n.substring(0,T+1))}if(s=this.tokenizer.inlineText(l,n0)){n=n.substring(s.raw.length),s.raw.slice(-1)!=="_"&&(v=s.raw.slice(-1)),d=!0,a=t[t.length-1],a&&a.type==="text"?(a.raw+=s.raw,a.text+=s.text):t.push(s);continue}if(n){const T="Infinite loop on byte: "+n.charCodeAt(0);if(this.options.silent){console.error(T);break}else throw new Error(T)}}return t}};class To{constructor(n){this.options=n||ai}code(n,t,s){const a=(t||"").match(/\S*/)[0];if(this.options.highlight){const l=this.options.highlight(n,a);l!=null&&l!==n&&(s=!0,n=l)}return n=n.replace(/\n$/,"")+`
`,a?'<pre><code class="'+this.options.langPrefix+tn(a)+'">'+(s?n:tn(n,!0))+`</code></pre>
`:"<pre><code>"+(s?n:tn(n,!0))+`</code></pre>
`}blockquote(n){return`<blockquote>
${n}</blockquote>
`}html(n,t){return n}heading(n,t,s,a){if(this.options.headerIds){const l=this.options.headerPrefix+a.slug(s);return`<h${t} id="${l}">${n}</h${t}>
`}return`<h${t}>${n}</h${t}>
`}hr(){return this.options.xhtml?`<hr/>
`:`<hr>
`}list(n,t,s){const a=t?"ol":"ul",l=t&&s!==1?' start="'+s+'"':"";return"<"+a+l+`>
`+n+"</"+a+`>
`}listitem(n){return`<li>${n}</li>
`}checkbox(n){return"<input "+(n?'checked="" ':"")+'disabled="" type="checkbox"'+(this.options.xhtml?" /":"")+"> "}paragraph(n){return`<p>${n}</p>
`}table(n,t){return t&&(t=`<tbody>${t}</tbody>`),`<table>
<thead>
`+n+`</thead>
`+t+`</table>
`}tablerow(n){return`<tr>
${n}</tr>
`}tablecell(n,t){const s=t.header?"th":"td";return(t.align?`<${s} align="${t.align}">`:`<${s}>`)+n+`</${s}>
`}strong(n){return`<strong>${n}</strong>`}em(n){return`<em>${n}</em>`}codespan(n){return`<code>${n}</code>`}br(){return this.options.xhtml?"<br/>":"<br>"}del(n){return`<del>${n}</del>`}link(n,t,s){if(n=wc(this.options.sanitize,this.options.baseUrl,n),n===null)return s;let a='<a href="'+n+'"';return t&&(a+=' title="'+t+'"'),a+=">"+s+"</a>",a}image(n,t,s){if(n=wc(this.options.sanitize,this.options.baseUrl,n),n===null)return s;let a=`<img src="${n}" alt="${s}"`;return t&&(a+=` title="${t}"`),a+=this.options.xhtml?"/>":">",a}text(n){return n}}class Zc{strong(n){return n}em(n){return n}codespan(n){return n}del(n){return n}html(n){return n}text(n){return n}link(n,t,s){return""+s}image(n,t,s){return""+s}br(){return""}}class ys{constructor(){this.seen={}}serialize(n){return n.toLowerCase().trim().replace(/<[!\/a-z].*?>/ig,"").replace(/[\u2000-\u206F\u2E00-\u2E7F\\'!"#$%&()*+,./:;<=>?@[\]^`{|}~]/g,"").replace(/\s/g,"-")}getNextSafeSlug(n,t){let s=n,a=0;if(this.seen.hasOwnProperty(s)){a=this.seen[n];do a++,s=n+"-"+a;while(this.seen.hasOwnProperty(s))}return t||(this.seen[n]=a,this.seen[s]=0),s}slug(n,t={}){const s=this.serialize(n);return this.getNextSafeSlug(s,t.dryrun)}}let sr=class so{constructor(n){this.options=n||ai,this.options.renderer=this.options.renderer||new To,this.renderer=this.options.renderer,this.renderer.options=this.options,this.textRenderer=new Zc,this.slugger=new ys}static parse(n,t){return new so(t).parse(n)}static parseInline(n,t){return new so(t).parseInline(n)}parse(n,t=!0){let s="",a,l,c,h,d,v,T,w,D,S,C,P,X,z,de,ve,ye,_e,ke;const Fe=n.length;for(a=0;a<Fe;a++){if(S=n[a],this.options.extensions&&this.options.extensions.renderers&&this.options.extensions.renderers[S.type]&&(ke=this.options.extensions.renderers[S.type].call({parser:this},S),ke!==!1||!["space","hr","heading","code","table","blockquote","list","html","paragraph","text"].includes(S.type))){s+=ke||"";continue}switch(S.type){case"space":continue;case"hr":{s+=this.renderer.hr();continue}case"heading":{s+=this.renderer.heading(this.parseInline(S.tokens),S.depth,Kc(this.parseInline(S.tokens,this.textRenderer)),this.slugger);continue}case"code":{s+=this.renderer.code(S.text,S.lang,S.escaped);continue}case"table":{for(w="",T="",h=S.header.length,l=0;l<h;l++)T+=this.renderer.tablecell(this.parseInline(S.header[l].tokens),{header:!0,align:S.align[l]});for(w+=this.renderer.tablerow(T),D="",h=S.rows.length,l=0;l<h;l++){for(v=S.rows[l],T="",d=v.length,c=0;c<d;c++)T+=this.renderer.tablecell(this.parseInline(v[c].tokens),{header:!1,align:S.align[c]});D+=this.renderer.tablerow(T)}s+=this.renderer.table(w,D);continue}case"blockquote":{D=this.parse(S.tokens),s+=this.renderer.blockquote(D);continue}case"list":{for(C=S.ordered,P=S.start,X=S.loose,h=S.items.length,D="",l=0;l<h;l++)de=S.items[l],ve=de.checked,ye=de.task,z="",de.task&&(_e=this.renderer.checkbox(ve),X?de.tokens.length>0&&de.tokens[0].type==="paragraph"?(de.tokens[0].text=_e+" "+de.tokens[0].text,de.tokens[0].tokens&&de.tokens[0].tokens.length>0&&de.tokens[0].tokens[0].type==="text"&&(de.tokens[0].tokens[0].text=_e+" "+de.tokens[0].tokens[0].text)):de.tokens.unshift({type:"text",text:_e}):z+=_e),z+=this.parse(de.tokens,X),D+=this.renderer.listitem(z,ye,ve);s+=this.renderer.list(D,C,P);continue}case"html":{s+=this.renderer.html(S.text,S.block);continue}case"paragraph":{s+=this.renderer.paragraph(this.parseInline(S.tokens));continue}case"text":{for(D=S.tokens?this.parseInline(S.tokens):S.text;a+1<Fe&&n[a+1].type==="text";)S=n[++a],D+=`
`+(S.tokens?this.parseInline(S.tokens):S.text);s+=t?this.renderer.paragraph(D):D;continue}default:{const An='Token with "'+S.type+'" type was not found.';if(this.options.silent){console.error(An);return}else throw new Error(An)}}}return s}parseInline(n,t){t=t||this.renderer;let s="",a,l,c;const h=n.length;for(a=0;a<h;a++){if(l=n[a],this.options.extensions&&this.options.extensions.renderers&&this.options.extensions.renderers[l.type]&&(c=this.options.extensions.renderers[l.type].call({parser:this},l),c!==!1||!["escape","html","link","image","strong","em","codespan","br","del","text"].includes(l.type))){s+=c||"";continue}switch(l.type){case"escape":{s+=t.text(l.text);break}case"html":{s+=t.html(l.text);break}case"link":{s+=t.link(l.href,l.title,this.parseInline(l.tokens,t));break}case"image":{s+=t.image(l.href,l.title,l.text);break}case"strong":{s+=t.strong(this.parseInline(l.tokens,t));break}case"em":{s+=t.em(this.parseInline(l.tokens,t));break}case"codespan":{s+=t.codespan(l.text);break}case"br":{s+=t.br();break}case"del":{s+=t.del(this.parseInline(l.tokens,t));break}case"text":{s+=t.text(l.text);break}default:{const d='Token with "'+l.type+'" type was not found.';if(this.options.silent){console.error(d);return}else throw new Error(d)}}}return s}};class fs{constructor(n){this.options=n||ai}preprocess(n){return n}postprocess(n){return n}}za(fs,"passThroughHooks",new Set(["preprocess","postprocess"]));function t0(i,n,t){return s=>{if(s.message+=`
Please report this to https://github.com/markedjs/marked.`,i){const a="<p>An error occurred:</p><pre>"+tn(s.message+"",!0)+"</pre>";if(n)return Promise.resolve(a);if(t){t(null,a);return}return a}if(n)return Promise.reject(s);if(t){t(s);return}throw s}}function ef(i,n){return(t,s,a)=>{typeof s=="function"&&(a=s,s=null);const l={...s};s={...J.defaults,...l};const c=t0(s.silent,s.async,a);if(typeof t>"u"||t===null)return c(new Error("marked(): input parameter is undefined or null"));if(typeof t!="string")return c(new Error("marked(): input parameter is of type "+Object.prototype.toString.call(t)+", string expected"));if(Zb(s,a),s.hooks&&(s.hooks.options=s),a){const h=s.highlight;let d;try{s.hooks&&(t=s.hooks.preprocess(t)),d=i(t,s)}catch(w){return c(w)}const v=function(w){let D;if(!w)try{s.walkTokens&&J.walkTokens(d,s.walkTokens),D=n(d,s),s.hooks&&(D=s.hooks.postprocess(D))}catch(S){w=S}return s.highlight=h,w?c(w):a(null,D)};if(!h||h.length<3||(delete s.highlight,!d.length))return v();let T=0;J.walkTokens(d,function(w){w.type==="code"&&(T++,setTimeout(()=>{h(w.text,w.lang,function(D,S){if(D)return v(D);S!=null&&S!==w.text&&(w.text=S,w.escaped=!0),T--,T===0&&v()})},0))}),T===0&&v();return}if(s.async)return Promise.resolve(s.hooks?s.hooks.preprocess(t):t).then(h=>i(h,s)).then(h=>s.walkTokens?Promise.all(J.walkTokens(h,s.walkTokens)).then(()=>h):h).then(h=>n(h,s)).then(h=>s.hooks?s.hooks.postprocess(h):h).catch(c);try{s.hooks&&(t=s.hooks.preprocess(t));const h=i(t,s);s.walkTokens&&J.walkTokens(h,s.walkTokens);let d=n(h,s);return s.hooks&&(d=s.hooks.postprocess(d)),d}catch(h){return c(h)}}}function J(i,n,t){return ef(rr.lex,sr.parse)(i,n,t)}J.options=J.setOptions=function(i){return J.defaults={...J.defaults,...i},$b(J.defaults),J};J.getDefaults=Qc;J.defaults=ai;J.use=function(...i){const n=J.defaults.extensions||{renderers:{},childTokens:{}};i.forEach(t=>{const s={...t};if(s.async=J.defaults.async||s.async||!1,t.extensions&&(t.extensions.forEach(a=>{if(!a.name)throw new Error("extension name required");if(a.renderer){const l=n.renderers[a.name];l?n.renderers[a.name]=function(...c){let h=a.renderer.apply(this,c);return h===!1&&(h=l.apply(this,c)),h}:n.renderers[a.name]=a.renderer}if(a.tokenizer){if(!a.level||a.level!=="block"&&a.level!=="inline")throw new Error("extension level must be 'block' or 'inline'");n[a.level]?n[a.level].unshift(a.tokenizer):n[a.level]=[a.tokenizer],a.start&&(a.level==="block"?n.startBlock?n.startBlock.push(a.start):n.startBlock=[a.start]:a.level==="inline"&&(n.startInline?n.startInline.push(a.start):n.startInline=[a.start]))}a.childTokens&&(n.childTokens[a.name]=a.childTokens)}),s.extensions=n),t.renderer){const a=J.defaults.renderer||new To;for(const l in t.renderer){const c=a[l];a[l]=(...h)=>{let d=t.renderer[l].apply(a,h);return d===!1&&(d=c.apply(a,h)),d}}s.renderer=a}if(t.tokenizer){const a=J.defaults.tokenizer||new yo;for(const l in t.tokenizer){const c=a[l];a[l]=(...h)=>{let d=t.tokenizer[l].apply(a,h);return d===!1&&(d=c.apply(a,h)),d}}s.tokenizer=a}if(t.hooks){const a=J.defaults.hooks||new fs;for(const l in t.hooks){const c=a[l];fs.passThroughHooks.has(l)?a[l]=h=>{if(J.defaults.async)return Promise.resolve(t.hooks[l].call(a,h)).then(v=>c.call(a,v));const d=t.hooks[l].call(a,h);return c.call(a,d)}:a[l]=(...h)=>{let d=t.hooks[l].apply(a,h);return d===!1&&(d=c.apply(a,h)),d}}s.hooks=a}if(t.walkTokens){const a=J.defaults.walkTokens;s.walkTokens=function(l){let c=[];return c.push(t.walkTokens.call(this,l)),a&&(c=c.concat(a.call(this,l))),c}}J.setOptions(s)})};J.walkTokens=function(i,n){let t=[];for(const s of i)switch(t=t.concat(n.call(J,s)),s.type){case"table":{for(const a of s.header)t=t.concat(J.walkTokens(a.tokens,n));for(const a of s.rows)for(const l of a)t=t.concat(J.walkTokens(l.tokens,n));break}case"list":{t=t.concat(J.walkTokens(s.items,n));break}default:J.defaults.extensions&&J.defaults.extensions.childTokens&&J.defaults.extensions.childTokens[s.type]?J.defaults.extensions.childTokens[s.type].forEach(function(a){t=t.concat(J.walkTokens(s[a],n))}):s.tokens&&(t=t.concat(J.walkTokens(s.tokens,n)))}return t};J.parseInline=ef(rr.lexInline,sr.parseInline);J.Parser=sr;J.parser=sr.parse;J.Renderer=To;J.TextRenderer=Zc;J.Lexer=rr;J.lexer=rr.lex;J.Tokenizer=yo;J.Slugger=ys;J.Hooks=fs;J.parse=J;J.options;J.setOptions;J.use;J.walkTokens;J.parseInline;sr.parse;rr.lex;function i0(i){return new J.Lexer().lex(i)}const r0=()=>({heading:LT,blockquote:FT,list:jT,list_item:QT,br:KT,code:nb,codespan:rb,table:ob,html:cb,paragraph:db,link:mb,text:Tb,def:_b,del:Sb,em:kb,hr:Rb,strong:Cb,image:Ub,space:Tc,escape:Tc}),s0=()=>({baseUrl:"/",slugger:new ys});function a0(){const i=console.warn;console.warn=n=>{n.includes("unknown prop")||n.includes("unexpected slot")||i(n)},OT(()=>{console.warn=i})}function o0(i){let n,t;return n=new vs({props:{tokens:i[0],renderers:i[1],options:i[2]}}),{c(){Gt(n.$$.fragment)},l(s){si(n.$$.fragment,s)},m(s,a){Vt(n,s,a),t=!0},p(s,[a]){const l={};a&1&&(l.tokens=s[0]),a&2&&(l.renderers=s[1]),a&4&&(l.options=s[2]),n.$set(l)},i(s){t||(re(n.$$.fragment,s),t=!0)},o(s){ce(n.$$.fragment,s),t=!1},d(s){Wt(n,s)}}}function l0(i,n,t){a0();let{source:s}=n,{options:a={}}=n,{renderers:l={}}=n,c,h,d;return i.$$set=v=>{"source"in v&&t(3,s=v.source),"options"in v&&t(4,a=v.options),"renderers"in v&&t(5,l=v.renderers)},i.$$.update=()=>{i.$$.dirty&56&&(t(0,c=i0(s)),t(1,h={...r0(),...l}),t(2,d={...s0(),...a}))},[c,h,d,s,a,l]}class L_ extends Me{constructor(n){super(),Be(this,n,l0,o0,De,{source:3,options:4,renderers:5})}}const ar={joinUrlPaths:to,isRelative:io,generatePathSegment:Hc};var Xi=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{};function u0(i){return i&&i.__esModule&&Object.prototype.hasOwnProperty.call(i,"default")?i.default:i}function ns(){return{convert:i=>i==null||i===""?null:String(i),asString:i=>String(i),type:i=>i.string().optional()}}function Ac(i){return{convert:n=>{if(typeof n=="object")return n;if(typeof n=="string"){const t=JSON.parse(n);return typeof t!="object"?null:t}return null},asString:n=>JSON.stringify(n),type:n=>n.record(i(n).optional()).optional()}}function ts(i){return{convert:n=>{if(Array.isArray(n))return n;if(typeof n=="string"){const t=JSON.parse(n);return Array.isArray(t)?t:null}return null},asString:n=>JSON.stringify(n),type:n=>n.array(i(n)).optional()}}function Nc(i){return{convert:n=>n==null||!i.find(t=>t===n)?null:n,asString:n=>String(n),type:n=>n.enum(i).optional()}}function Sn(i,n){const t=s=>n.convert(s[i]);return{name:c0(i),key:i,asEnv:s=>({[i]:n.asString(s)}),zod:{type:n.type},get:t,getOrDefault:(s,a)=>t(s)??a}}function c0(i){return i.toLowerCase().replace(/([-_][a-z])/gi,n=>n.toUpperCase().replace("-","").replace("_",""))}var bo={APP_LOGO:Sn("APP_LOGO",ns()),APP_TITLE:Sn("APP_TITLE",ns()),APP_FAVICON:Sn("APP_FAVICON",ns()),SITE_ROOT:Sn("SITE_ROOT",ns()),SITE_META:Sn("SITE_META",Ac(i=>i.string())),CUSTOM_STYLES:Sn("CUSTOM_STYLES",ts(i=>i.string())),FIELDS_SORTING:Sn("FIELDS_SORTING",Nc(["default","alphabetical"])),ARGUMENTS_SORTING:Sn("ARGUMENTS_SORTING",Nc(["default","alphabetical"])),QUERY_GENERATION_FACTORIES:Sn("QUERY_GENERATION_FACTORIES",Ac(i=>i.union([i.string(),i.boolean(),i.number(),i.null(),i.record(i.unknown())]))),PAGES:Sn("PAGES",ts(i=>{const n=i.lazy(()=>i.object({title:i.string().min(1),content:i.union([i.array(n),i.string().min(1)])}));return n})),EXTERNAL_LINKS:Sn("EXTERNAL_LINKS",ts(i=>i.object({label:i.string().min(1),href:i.string().min(1),position:i.union([i.literal("header"),i.literal("navigation")]).optional(),kind:i.string().min(1).optional(),group:i.string().min(1).optional()}))),DIRECTIVES:Sn("DIRECTIVES",ts(i=>i.object({name:i.string().min(1),args:i.array(i.string())})))};function f0(){return{convert:i=>{if(i===null||i===void 0)return null;switch(typeof i){case"boolean":return i;case"string":const n=i.toLowerCase().trim();return n==="true"||n==="t"||n==="1";case"number":return i!==0;default:return null}},asString:i=>String(i),type:i=>i.boolean().optional()}}Sn("MAGIDOC_GENERATE",f0());var hs={exports:{}};/**
 * @license
 * Lodash <https://lodash.com/>
 * Copyright OpenJS Foundation and other contributors <https://openjsf.org/>
 * Released under MIT license <https://lodash.com/license>
 * Based on Underscore.js 1.8.3 <http://underscorejs.org/LICENSE>
 * Copyright Jeremy Ashkenas, DocumentCloud and Investigative Reporters & Editors
 */hs.exports;(function(i,n){(function(){var t,s="4.17.21",a=200,l="Unsupported core-js use. Try https://npms.io/search?q=ponyfill.",c="Expected a function",h="Invalid `variable` option passed into `_.template`",d="__lodash_hash_undefined__",v=500,T="__lodash_placeholder__",w=1,D=2,S=4,C=1,P=2,X=1,z=2,de=4,ve=8,ye=16,_e=32,ke=64,Fe=128,An=256,R=512,ne=30,sn="...",xt=800,jt=16,ur=1,li=2,cr=3,st=1/0,$n=9007199254740991,ui=17976931348623157e292,Ht=0/0,Nn=4294967295,N=Nn-1,G=Nn>>>1,U=[["ary",Fe],["bind",X],["bindKey",z],["curry",ve],["curryRight",ye],["flip",R],["partial",_e],["partialRight",ke],["rearg",An]],M="[object Arguments]",Te="[object Array]",$e="[object AsyncFunction]",be="[object Boolean]",kn="[object Date]",Oi="[object DOMException]",Ot="[object Error]",Ze="[object Function]",ko="[object GeneratorFunction]",Gn="[object Map]",Ri="[object Number]",Wf="[object Null]",ht="[object Object]",xo="[object Promise]",Yf="[object Proxy]",Di="[object RegExp]",Vn="[object Set]",Li="[object String]",fr="[object Symbol]",qf="[object Undefined]",Ci="[object WeakMap]",jf="[object WeakSet]",Pi="[object ArrayBuffer]",ci="[object DataView]",Ns="[object Float32Array]",ks="[object Float64Array]",xs="[object Int8Array]",Os="[object Int16Array]",Rs="[object Int32Array]",Ds="[object Uint8Array]",Ls="[object Uint8ClampedArray]",Cs="[object Uint16Array]",Ps="[object Uint32Array]",Hf=/\b__p \+= '';/g,zf=/\b(__p \+=) '' \+/g,Qf=/(__e\(.*?\)|\b__t\)) \+\n'';/g,Oo=/&(?:amp|lt|gt|quot|#39);/g,Ro=/[&<>"']/g,Jf=RegExp(Oo.source),Xf=RegExp(Ro.source),Kf=/<%-([\s\S]+?)%>/g,Zf=/<%([\s\S]+?)%>/g,Do=/<%=([\s\S]+?)%>/g,eh=/\.|\[(?:[^[\]]*|(["'])(?:(?!\1)[^\\]|\\.)*?\1)\]/,nh=/^\w*$/,th=/[^.[\]]+|\[(?:(-?\d+(?:\.\d+)?)|(["'])((?:(?!\2)[^\\]|\\.)*?)\2)\]|(?=(?:\.|\[\])(?:\.|\[\]|$))/g,Fs=/[\\^$.*+?()[\]{}|]/g,ih=RegExp(Fs.source),Us=/^\s+/,rh=/\s/,sh=/\{(?:\n\/\* \[wrapped with .+\] \*\/)?\n?/,ah=/\{\n\/\* \[wrapped with (.+)\] \*/,oh=/,? & /,lh=/[^\x00-\x2f\x3a-\x40\x5b-\x60\x7b-\x7f]+/g,uh=/[()=,{}\[\]\/\s]/,ch=/\\(\\)?/g,fh=/\$\{([^\\}]*(?:\\.[^\\}]*)*)\}/g,Lo=/\w*$/,hh=/^[-+]0x[0-9a-f]+$/i,dh=/^0b[01]+$/i,ph=/^\[object .+?Constructor\]$/,gh=/^0o[0-7]+$/i,mh=/^(?:0|[1-9]\d*)$/,vh=/[\xc0-\xd6\xd8-\xf6\xf8-\xff\u0100-\u017f]/g,hr=/($^)/,yh=/['\n\r\u2028\u2029\\]/g,dr="\\ud800-\\udfff",Th="\\u0300-\\u036f",bh="\\ufe20-\\ufe2f",wh="\\u20d0-\\u20ff",Co=Th+bh+wh,Po="\\u2700-\\u27bf",Fo="a-z\\xdf-\\xf6\\xf8-\\xff",_h="\\xac\\xb1\\xd7\\xf7",Ih="\\x00-\\x2f\\x3a-\\x40\\x5b-\\x60\\x7b-\\xbf",Eh="\\u2000-\\u206f",Sh=" \\t\\x0b\\f\\xa0\\ufeff\\n\\r\\u2028\\u2029\\u1680\\u180e\\u2000\\u2001\\u2002\\u2003\\u2004\\u2005\\u2006\\u2007\\u2008\\u2009\\u200a\\u202f\\u205f\\u3000",Uo="A-Z\\xc0-\\xd6\\xd8-\\xde",Mo="\\ufe0e\\ufe0f",Bo=_h+Ih+Eh+Sh,Ms="['’]",Ah="["+dr+"]",$o="["+Bo+"]",pr="["+Co+"]",Go="\\d+",Nh="["+Po+"]",Vo="["+Fo+"]",Wo="[^"+dr+Bo+Go+Po+Fo+Uo+"]",Bs="\\ud83c[\\udffb-\\udfff]",kh="(?:"+pr+"|"+Bs+")",Yo="[^"+dr+"]",$s="(?:\\ud83c[\\udde6-\\uddff]){2}",Gs="[\\ud800-\\udbff][\\udc00-\\udfff]",fi="["+Uo+"]",qo="\\u200d",jo="(?:"+Vo+"|"+Wo+")",xh="(?:"+fi+"|"+Wo+")",Ho="(?:"+Ms+"(?:d|ll|m|re|s|t|ve))?",zo="(?:"+Ms+"(?:D|LL|M|RE|S|T|VE))?",Qo=kh+"?",Jo="["+Mo+"]?",Oh="(?:"+qo+"(?:"+[Yo,$s,Gs].join("|")+")"+Jo+Qo+")*",Rh="\\d*(?:1st|2nd|3rd|(?![123])\\dth)(?=\\b|[A-Z_])",Dh="\\d*(?:1ST|2ND|3RD|(?![123])\\dTH)(?=\\b|[a-z_])",Xo=Jo+Qo+Oh,Lh="(?:"+[Nh,$s,Gs].join("|")+")"+Xo,Ch="(?:"+[Yo+pr+"?",pr,$s,Gs,Ah].join("|")+")",Ph=RegExp(Ms,"g"),Fh=RegExp(pr,"g"),Vs=RegExp(Bs+"(?="+Bs+")|"+Ch+Xo,"g"),Uh=RegExp([fi+"?"+Vo+"+"+Ho+"(?="+[$o,fi,"$"].join("|")+")",xh+"+"+zo+"(?="+[$o,fi+jo,"$"].join("|")+")",fi+"?"+jo+"+"+Ho,fi+"+"+zo,Dh,Rh,Go,Lh].join("|"),"g"),Mh=RegExp("["+qo+dr+Co+Mo+"]"),Bh=/[a-z][A-Z]|[A-Z]{2}[a-z]|[0-9][a-zA-Z]|[a-zA-Z][0-9]|[^a-zA-Z0-9 ]/,$h=["Array","Buffer","DataView","Date","Error","Float32Array","Float64Array","Function","Int8Array","Int16Array","Int32Array","Map","Math","Object","Promise","RegExp","Set","String","Symbol","TypeError","Uint8Array","Uint8ClampedArray","Uint16Array","Uint32Array","WeakMap","_","clearTimeout","isFinite","parseInt","setTimeout"],Gh=-1,Oe={};Oe[Ns]=Oe[ks]=Oe[xs]=Oe[Os]=Oe[Rs]=Oe[Ds]=Oe[Ls]=Oe[Cs]=Oe[Ps]=!0,Oe[M]=Oe[Te]=Oe[Pi]=Oe[be]=Oe[ci]=Oe[kn]=Oe[Ot]=Oe[Ze]=Oe[Gn]=Oe[Ri]=Oe[ht]=Oe[Di]=Oe[Vn]=Oe[Li]=Oe[Ci]=!1;var xe={};xe[M]=xe[Te]=xe[Pi]=xe[ci]=xe[be]=xe[kn]=xe[Ns]=xe[ks]=xe[xs]=xe[Os]=xe[Rs]=xe[Gn]=xe[Ri]=xe[ht]=xe[Di]=xe[Vn]=xe[Li]=xe[fr]=xe[Ds]=xe[Ls]=xe[Cs]=xe[Ps]=!0,xe[Ot]=xe[Ze]=xe[Ci]=!1;var Vh={À:"A",Á:"A",Â:"A",Ã:"A",Ä:"A",Å:"A",à:"a",á:"a",â:"a",ã:"a",ä:"a",å:"a",Ç:"C",ç:"c",Ð:"D",ð:"d",È:"E",É:"E",Ê:"E",Ë:"E",è:"e",é:"e",ê:"e",ë:"e",Ì:"I",Í:"I",Î:"I",Ï:"I",ì:"i",í:"i",î:"i",ï:"i",Ñ:"N",ñ:"n",Ò:"O",Ó:"O",Ô:"O",Õ:"O",Ö:"O",Ø:"O",ò:"o",ó:"o",ô:"o",õ:"o",ö:"o",ø:"o",Ù:"U",Ú:"U",Û:"U",Ü:"U",ù:"u",ú:"u",û:"u",ü:"u",Ý:"Y",ý:"y",ÿ:"y",Æ:"Ae",æ:"ae",Þ:"Th",þ:"th",ß:"ss",Ā:"A",Ă:"A",Ą:"A",ā:"a",ă:"a",ą:"a",Ć:"C",Ĉ:"C",Ċ:"C",Č:"C",ć:"c",ĉ:"c",ċ:"c",č:"c",Ď:"D",Đ:"D",ď:"d",đ:"d",Ē:"E",Ĕ:"E",Ė:"E",Ę:"E",Ě:"E",ē:"e",ĕ:"e",ė:"e",ę:"e",ě:"e",Ĝ:"G",Ğ:"G",Ġ:"G",Ģ:"G",ĝ:"g",ğ:"g",ġ:"g",ģ:"g",Ĥ:"H",Ħ:"H",ĥ:"h",ħ:"h",Ĩ:"I",Ī:"I",Ĭ:"I",Į:"I",İ:"I",ĩ:"i",ī:"i",ĭ:"i",į:"i",ı:"i",Ĵ:"J",ĵ:"j",Ķ:"K",ķ:"k",ĸ:"k",Ĺ:"L",Ļ:"L",Ľ:"L",Ŀ:"L",Ł:"L",ĺ:"l",ļ:"l",ľ:"l",ŀ:"l",ł:"l",Ń:"N",Ņ:"N",Ň:"N",Ŋ:"N",ń:"n",ņ:"n",ň:"n",ŋ:"n",Ō:"O",Ŏ:"O",Ő:"O",ō:"o",ŏ:"o",ő:"o",Ŕ:"R",Ŗ:"R",Ř:"R",ŕ:"r",ŗ:"r",ř:"r",Ś:"S",Ŝ:"S",Ş:"S",Š:"S",ś:"s",ŝ:"s",ş:"s",š:"s",Ţ:"T",Ť:"T",Ŧ:"T",ţ:"t",ť:"t",ŧ:"t",Ũ:"U",Ū:"U",Ŭ:"U",Ů:"U",Ű:"U",Ų:"U",ũ:"u",ū:"u",ŭ:"u",ů:"u",ű:"u",ų:"u",Ŵ:"W",ŵ:"w",Ŷ:"Y",ŷ:"y",Ÿ:"Y",Ź:"Z",Ż:"Z",Ž:"Z",ź:"z",ż:"z",ž:"z",Ĳ:"IJ",ĳ:"ij",Œ:"Oe",œ:"oe",ŉ:"'n",ſ:"s"},Wh={"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;","'":"&#39;"},Yh={"&amp;":"&","&lt;":"<","&gt;":">","&quot;":'"',"&#39;":"'"},qh={"\\":"\\","'":"'","\n":"n","\r":"r","\u2028":"u2028","\u2029":"u2029"},jh=parseFloat,Hh=parseInt,Ko=typeof Xi=="object"&&Xi&&Xi.Object===Object&&Xi,zh=typeof self=="object"&&self&&self.Object===Object&&self,Je=Ko||zh||Function("return this")(),Ws=n&&!n.nodeType&&n,zt=Ws&&!0&&i&&!i.nodeType&&i,Zo=zt&&zt.exports===Ws,Ys=Zo&&Ko.process,xn=function(){try{var b=zt&&zt.require&&zt.require("util").types;return b||Ys&&Ys.binding&&Ys.binding("util")}catch{}}(),el=xn&&xn.isArrayBuffer,nl=xn&&xn.isDate,tl=xn&&xn.isMap,il=xn&&xn.isRegExp,rl=xn&&xn.isSet,sl=xn&&xn.isTypedArray;function Tn(b,A,E){switch(E.length){case 0:return b.call(A);case 1:return b.call(A,E[0]);case 2:return b.call(A,E[0],E[1]);case 3:return b.call(A,E[0],E[1],E[2])}return b.apply(A,E)}function Qh(b,A,E,B){for(var te=-1,me=b==null?0:b.length;++te<me;){var je=b[te];A(B,je,E(je),b)}return B}function On(b,A){for(var E=-1,B=b==null?0:b.length;++E<B&&A(b[E],E,b)!==!1;);return b}function Jh(b,A){for(var E=b==null?0:b.length;E--&&A(b[E],E,b)!==!1;);return b}function al(b,A){for(var E=-1,B=b==null?0:b.length;++E<B;)if(!A(b[E],E,b))return!1;return!0}function Rt(b,A){for(var E=-1,B=b==null?0:b.length,te=0,me=[];++E<B;){var je=b[E];A(je,E,b)&&(me[te++]=je)}return me}function gr(b,A){var E=b==null?0:b.length;return!!E&&hi(b,A,0)>-1}function qs(b,A,E){for(var B=-1,te=b==null?0:b.length;++B<te;)if(E(A,b[B]))return!0;return!1}function Re(b,A){for(var E=-1,B=b==null?0:b.length,te=Array(B);++E<B;)te[E]=A(b[E],E,b);return te}function Dt(b,A){for(var E=-1,B=A.length,te=b.length;++E<B;)b[te+E]=A[E];return b}function js(b,A,E,B){var te=-1,me=b==null?0:b.length;for(B&&me&&(E=b[++te]);++te<me;)E=A(E,b[te],te,b);return E}function Xh(b,A,E,B){var te=b==null?0:b.length;for(B&&te&&(E=b[--te]);te--;)E=A(E,b[te],te,b);return E}function Hs(b,A){for(var E=-1,B=b==null?0:b.length;++E<B;)if(A(b[E],E,b))return!0;return!1}var Kh=zs("length");function Zh(b){return b.split("")}function ed(b){return b.match(lh)||[]}function ol(b,A,E){var B;return E(b,function(te,me,je){if(A(te,me,je))return B=me,!1}),B}function mr(b,A,E,B){for(var te=b.length,me=E+(B?1:-1);B?me--:++me<te;)if(A(b[me],me,b))return me;return-1}function hi(b,A,E){return A===A?hd(b,A,E):mr(b,ll,E)}function nd(b,A,E,B){for(var te=E-1,me=b.length;++te<me;)if(B(b[te],A))return te;return-1}function ll(b){return b!==b}function ul(b,A){var E=b==null?0:b.length;return E?Js(b,A)/E:Ht}function zs(b){return function(A){return A==null?t:A[b]}}function Qs(b){return function(A){return b==null?t:b[A]}}function cl(b,A,E,B,te){return te(b,function(me,je,Se){E=B?(B=!1,me):A(E,me,je,Se)}),E}function td(b,A){var E=b.length;for(b.sort(A);E--;)b[E]=b[E].value;return b}function Js(b,A){for(var E,B=-1,te=b.length;++B<te;){var me=A(b[B]);me!==t&&(E=E===t?me:E+me)}return E}function Xs(b,A){for(var E=-1,B=Array(b);++E<b;)B[E]=A(E);return B}function id(b,A){return Re(A,function(E){return[E,b[E]]})}function fl(b){return b&&b.slice(0,gl(b)+1).replace(Us,"")}function bn(b){return function(A){return b(A)}}function Ks(b,A){return Re(A,function(E){return b[E]})}function Fi(b,A){return b.has(A)}function hl(b,A){for(var E=-1,B=b.length;++E<B&&hi(A,b[E],0)>-1;);return E}function dl(b,A){for(var E=b.length;E--&&hi(A,b[E],0)>-1;);return E}function rd(b,A){for(var E=b.length,B=0;E--;)b[E]===A&&++B;return B}var sd=Qs(Vh),ad=Qs(Wh);function od(b){return"\\"+qh[b]}function ld(b,A){return b==null?t:b[A]}function di(b){return Mh.test(b)}function ud(b){return Bh.test(b)}function cd(b){for(var A,E=[];!(A=b.next()).done;)E.push(A.value);return E}function Zs(b){var A=-1,E=Array(b.size);return b.forEach(function(B,te){E[++A]=[te,B]}),E}function pl(b,A){return function(E){return b(A(E))}}function Lt(b,A){for(var E=-1,B=b.length,te=0,me=[];++E<B;){var je=b[E];(je===A||je===T)&&(b[E]=T,me[te++]=E)}return me}function vr(b){var A=-1,E=Array(b.size);return b.forEach(function(B){E[++A]=B}),E}function fd(b){var A=-1,E=Array(b.size);return b.forEach(function(B){E[++A]=[B,B]}),E}function hd(b,A,E){for(var B=E-1,te=b.length;++B<te;)if(b[B]===A)return B;return-1}function dd(b,A,E){for(var B=E+1;B--;)if(b[B]===A)return B;return B}function pi(b){return di(b)?gd(b):Kh(b)}function Wn(b){return di(b)?md(b):Zh(b)}function gl(b){for(var A=b.length;A--&&rh.test(b.charAt(A)););return A}var pd=Qs(Yh);function gd(b){for(var A=Vs.lastIndex=0;Vs.test(b);)++A;return A}function md(b){return b.match(Vs)||[]}function vd(b){return b.match(Uh)||[]}var yd=function b(A){A=A==null?Je:gi.defaults(Je.Object(),A,gi.pick(Je,$h));var E=A.Array,B=A.Date,te=A.Error,me=A.Function,je=A.Math,Se=A.Object,ea=A.RegExp,Td=A.String,Rn=A.TypeError,yr=E.prototype,bd=me.prototype,mi=Se.prototype,Tr=A["__core-js_shared__"],br=bd.toString,Ie=mi.hasOwnProperty,wd=0,ml=function(){var e=/[^.]+$/.exec(Tr&&Tr.keys&&Tr.keys.IE_PROTO||"");return e?"Symbol(src)_1."+e:""}(),wr=mi.toString,_d=br.call(Se),Id=Je._,Ed=ea("^"+br.call(Ie).replace(Fs,"\\$&").replace(/hasOwnProperty|(function).*?(?=\\\()| for .+?(?=\\\])/g,"$1.*?")+"$"),_r=Zo?A.Buffer:t,Ct=A.Symbol,Ir=A.Uint8Array,vl=_r?_r.allocUnsafe:t,Er=pl(Se.getPrototypeOf,Se),yl=Se.create,Tl=mi.propertyIsEnumerable,Sr=yr.splice,bl=Ct?Ct.isConcatSpreadable:t,Ui=Ct?Ct.iterator:t,Qt=Ct?Ct.toStringTag:t,Ar=function(){try{var e=ei(Se,"defineProperty");return e({},"",{}),e}catch{}}(),Sd=A.clearTimeout!==Je.clearTimeout&&A.clearTimeout,Ad=B&&B.now!==Je.Date.now&&B.now,Nd=A.setTimeout!==Je.setTimeout&&A.setTimeout,Nr=je.ceil,kr=je.floor,na=Se.getOwnPropertySymbols,kd=_r?_r.isBuffer:t,wl=A.isFinite,xd=yr.join,Od=pl(Se.keys,Se),He=je.max,en=je.min,Rd=B.now,Dd=A.parseInt,_l=je.random,Ld=yr.reverse,ta=ei(A,"DataView"),Mi=ei(A,"Map"),ia=ei(A,"Promise"),vi=ei(A,"Set"),Bi=ei(A,"WeakMap"),$i=ei(Se,"create"),xr=Bi&&new Bi,yi={},Cd=ni(ta),Pd=ni(Mi),Fd=ni(ia),Ud=ni(vi),Md=ni(Bi),Or=Ct?Ct.prototype:t,Gi=Or?Or.valueOf:t,Il=Or?Or.toString:t;function p(e){if(Ue(e)&&!ie(e)&&!(e instanceof fe)){if(e instanceof Dn)return e;if(Ie.call(e,"__wrapped__"))return Eu(e)}return new Dn(e)}var Ti=function(){function e(){}return function(r){if(!Le(r))return{};if(yl)return yl(r);e.prototype=r;var o=new e;return e.prototype=t,o}}();function Rr(){}function Dn(e,r){this.__wrapped__=e,this.__actions__=[],this.__chain__=!!r,this.__index__=0,this.__values__=t}p.templateSettings={escape:Kf,evaluate:Zf,interpolate:Do,variable:"",imports:{_:p}},p.prototype=Rr.prototype,p.prototype.constructor=p,Dn.prototype=Ti(Rr.prototype),Dn.prototype.constructor=Dn;function fe(e){this.__wrapped__=e,this.__actions__=[],this.__dir__=1,this.__filtered__=!1,this.__iteratees__=[],this.__takeCount__=Nn,this.__views__=[]}function Bd(){var e=new fe(this.__wrapped__);return e.__actions__=hn(this.__actions__),e.__dir__=this.__dir__,e.__filtered__=this.__filtered__,e.__iteratees__=hn(this.__iteratees__),e.__takeCount__=this.__takeCount__,e.__views__=hn(this.__views__),e}function $d(){if(this.__filtered__){var e=new fe(this);e.__dir__=-1,e.__filtered__=!0}else e=this.clone(),e.__dir__*=-1;return e}function Gd(){var e=this.__wrapped__.value(),r=this.__dir__,o=ie(e),u=r<0,f=o?e.length:0,g=Zp(0,f,this.__views__),m=g.start,y=g.end,_=y-m,k=u?y:m-1,x=this.__iteratees__,L=x.length,F=0,W=en(_,this.__takeCount__);if(!o||!u&&f==_&&W==_)return Hl(e,this.__actions__);var K=[];e:for(;_--&&F<W;){k+=r;for(var ae=-1,Z=e[k];++ae<L;){var le=x[ae],pe=le.iteratee,In=le.type,ln=pe(Z);if(In==li)Z=ln;else if(!ln){if(In==ur)continue e;break e}}K[F++]=Z}return K}fe.prototype=Ti(Rr.prototype),fe.prototype.constructor=fe;function Jt(e){var r=-1,o=e==null?0:e.length;for(this.clear();++r<o;){var u=e[r];this.set(u[0],u[1])}}function Vd(){this.__data__=$i?$i(null):{},this.size=0}function Wd(e){var r=this.has(e)&&delete this.__data__[e];return this.size-=r?1:0,r}function Yd(e){var r=this.__data__;if($i){var o=r[e];return o===d?t:o}return Ie.call(r,e)?r[e]:t}function qd(e){var r=this.__data__;return $i?r[e]!==t:Ie.call(r,e)}function jd(e,r){var o=this.__data__;return this.size+=this.has(e)?0:1,o[e]=$i&&r===t?d:r,this}Jt.prototype.clear=Vd,Jt.prototype.delete=Wd,Jt.prototype.get=Yd,Jt.prototype.has=qd,Jt.prototype.set=jd;function dt(e){var r=-1,o=e==null?0:e.length;for(this.clear();++r<o;){var u=e[r];this.set(u[0],u[1])}}function Hd(){this.__data__=[],this.size=0}function zd(e){var r=this.__data__,o=Dr(r,e);if(o<0)return!1;var u=r.length-1;return o==u?r.pop():Sr.call(r,o,1),--this.size,!0}function Qd(e){var r=this.__data__,o=Dr(r,e);return o<0?t:r[o][1]}function Jd(e){return Dr(this.__data__,e)>-1}function Xd(e,r){var o=this.__data__,u=Dr(o,e);return u<0?(++this.size,o.push([e,r])):o[u][1]=r,this}dt.prototype.clear=Hd,dt.prototype.delete=zd,dt.prototype.get=Qd,dt.prototype.has=Jd,dt.prototype.set=Xd;function pt(e){var r=-1,o=e==null?0:e.length;for(this.clear();++r<o;){var u=e[r];this.set(u[0],u[1])}}function Kd(){this.size=0,this.__data__={hash:new Jt,map:new(Mi||dt),string:new Jt}}function Zd(e){var r=Yr(this,e).delete(e);return this.size-=r?1:0,r}function ep(e){return Yr(this,e).get(e)}function np(e){return Yr(this,e).has(e)}function tp(e,r){var o=Yr(this,e),u=o.size;return o.set(e,r),this.size+=o.size==u?0:1,this}pt.prototype.clear=Kd,pt.prototype.delete=Zd,pt.prototype.get=ep,pt.prototype.has=np,pt.prototype.set=tp;function Xt(e){var r=-1,o=e==null?0:e.length;for(this.__data__=new pt;++r<o;)this.add(e[r])}function ip(e){return this.__data__.set(e,d),this}function rp(e){return this.__data__.has(e)}Xt.prototype.add=Xt.prototype.push=ip,Xt.prototype.has=rp;function Yn(e){var r=this.__data__=new dt(e);this.size=r.size}function sp(){this.__data__=new dt,this.size=0}function ap(e){var r=this.__data__,o=r.delete(e);return this.size=r.size,o}function op(e){return this.__data__.get(e)}function lp(e){return this.__data__.has(e)}function up(e,r){var o=this.__data__;if(o instanceof dt){var u=o.__data__;if(!Mi||u.length<a-1)return u.push([e,r]),this.size=++o.size,this;o=this.__data__=new pt(u)}return o.set(e,r),this.size=o.size,this}Yn.prototype.clear=sp,Yn.prototype.delete=ap,Yn.prototype.get=op,Yn.prototype.has=lp,Yn.prototype.set=up;function El(e,r){var o=ie(e),u=!o&&ti(e),f=!o&&!u&&Bt(e),g=!o&&!u&&!f&&Ii(e),m=o||u||f||g,y=m?Xs(e.length,Td):[],_=y.length;for(var k in e)(r||Ie.call(e,k))&&!(m&&(k=="length"||f&&(k=="offset"||k=="parent")||g&&(k=="buffer"||k=="byteLength"||k=="byteOffset")||yt(k,_)))&&y.push(k);return y}function Sl(e){var r=e.length;return r?e[pa(0,r-1)]:t}function cp(e,r){return qr(hn(e),Kt(r,0,e.length))}function fp(e){return qr(hn(e))}function ra(e,r,o){(o!==t&&!qn(e[r],o)||o===t&&!(r in e))&&gt(e,r,o)}function Vi(e,r,o){var u=e[r];(!(Ie.call(e,r)&&qn(u,o))||o===t&&!(r in e))&&gt(e,r,o)}function Dr(e,r){for(var o=e.length;o--;)if(qn(e[o][0],r))return o;return-1}function hp(e,r,o,u){return Pt(e,function(f,g,m){r(u,f,o(f),m)}),u}function Al(e,r){return e&&ot(r,ze(r),e)}function dp(e,r){return e&&ot(r,pn(r),e)}function gt(e,r,o){r=="__proto__"&&Ar?Ar(e,r,{configurable:!0,enumerable:!0,value:o,writable:!0}):e[r]=o}function sa(e,r){for(var o=-1,u=r.length,f=E(u),g=e==null;++o<u;)f[o]=g?t:Ba(e,r[o]);return f}function Kt(e,r,o){return e===e&&(o!==t&&(e=e<=o?e:o),r!==t&&(e=e>=r?e:r)),e}function Ln(e,r,o,u,f,g){var m,y=r&w,_=r&D,k=r&S;if(o&&(m=f?o(e,u,f,g):o(e)),m!==t)return m;if(!Le(e))return e;var x=ie(e);if(x){if(m=ng(e),!y)return hn(e,m)}else{var L=nn(e),F=L==Ze||L==ko;if(Bt(e))return Jl(e,y);if(L==ht||L==M||F&&!f){if(m=_||F?{}:gu(e),!y)return _?Yp(e,dp(m,e)):Wp(e,Al(m,e))}else{if(!xe[L])return f?e:{};m=tg(e,L,y)}}g||(g=new Yn);var W=g.get(e);if(W)return W;g.set(e,m),Yu(e)?e.forEach(function(Z){m.add(Ln(Z,r,o,Z,e,g))}):Vu(e)&&e.forEach(function(Z,le){m.set(le,Ln(Z,r,o,le,e,g))});var K=k?_?Sa:Ea:_?pn:ze,ae=x?t:K(e);return On(ae||e,function(Z,le){ae&&(le=Z,Z=e[le]),Vi(m,le,Ln(Z,r,o,le,e,g))}),m}function pp(e){var r=ze(e);return function(o){return Nl(o,e,r)}}function Nl(e,r,o){var u=o.length;if(e==null)return!u;for(e=Se(e);u--;){var f=o[u],g=r[f],m=e[f];if(m===t&&!(f in e)||!g(m))return!1}return!0}function kl(e,r,o){if(typeof e!="function")throw new Rn(c);return Qi(function(){e.apply(t,o)},r)}function Wi(e,r,o,u){var f=-1,g=gr,m=!0,y=e.length,_=[],k=r.length;if(!y)return _;o&&(r=Re(r,bn(o))),u?(g=qs,m=!1):r.length>=a&&(g=Fi,m=!1,r=new Xt(r));e:for(;++f<y;){var x=e[f],L=o==null?x:o(x);if(x=u||x!==0?x:0,m&&L===L){for(var F=k;F--;)if(r[F]===L)continue e;_.push(x)}else g(r,L,u)||_.push(x)}return _}var Pt=nu(at),xl=nu(oa,!0);function gp(e,r){var o=!0;return Pt(e,function(u,f,g){return o=!!r(u,f,g),o}),o}function Lr(e,r,o){for(var u=-1,f=e.length;++u<f;){var g=e[u],m=r(g);if(m!=null&&(y===t?m===m&&!_n(m):o(m,y)))var y=m,_=g}return _}function mp(e,r,o,u){var f=e.length;for(o=se(o),o<0&&(o=-o>f?0:f+o),u=u===t||u>f?f:se(u),u<0&&(u+=f),u=o>u?0:ju(u);o<u;)e[o++]=r;return e}function Ol(e,r){var o=[];return Pt(e,function(u,f,g){r(u,f,g)&&o.push(u)}),o}function Xe(e,r,o,u,f){var g=-1,m=e.length;for(o||(o=rg),f||(f=[]);++g<m;){var y=e[g];r>0&&o(y)?r>1?Xe(y,r-1,o,u,f):Dt(f,y):u||(f[f.length]=y)}return f}var aa=tu(),Rl=tu(!0);function at(e,r){return e&&aa(e,r,ze)}function oa(e,r){return e&&Rl(e,r,ze)}function Cr(e,r){return Rt(r,function(o){return Tt(e[o])})}function Zt(e,r){r=Ut(r,e);for(var o=0,u=r.length;e!=null&&o<u;)e=e[lt(r[o++])];return o&&o==u?e:t}function Dl(e,r,o){var u=r(e);return ie(e)?u:Dt(u,o(e))}function an(e){return e==null?e===t?qf:Wf:Qt&&Qt in Se(e)?Kp(e):fg(e)}function la(e,r){return e>r}function vp(e,r){return e!=null&&Ie.call(e,r)}function yp(e,r){return e!=null&&r in Se(e)}function Tp(e,r,o){return e>=en(r,o)&&e<He(r,o)}function ua(e,r,o){for(var u=o?qs:gr,f=e[0].length,g=e.length,m=g,y=E(g),_=1/0,k=[];m--;){var x=e[m];m&&r&&(x=Re(x,bn(r))),_=en(x.length,_),y[m]=!o&&(r||f>=120&&x.length>=120)?new Xt(m&&x):t}x=e[0];var L=-1,F=y[0];e:for(;++L<f&&k.length<_;){var W=x[L],K=r?r(W):W;if(W=o||W!==0?W:0,!(F?Fi(F,K):u(k,K,o))){for(m=g;--m;){var ae=y[m];if(!(ae?Fi(ae,K):u(e[m],K,o)))continue e}F&&F.push(K),k.push(W)}}return k}function bp(e,r,o,u){return at(e,function(f,g,m){r(u,o(f),g,m)}),u}function Yi(e,r,o){r=Ut(r,e),e=Tu(e,r);var u=e==null?e:e[lt(Pn(r))];return u==null?t:Tn(u,e,o)}function Ll(e){return Ue(e)&&an(e)==M}function wp(e){return Ue(e)&&an(e)==Pi}function _p(e){return Ue(e)&&an(e)==kn}function qi(e,r,o,u,f){return e===r?!0:e==null||r==null||!Ue(e)&&!Ue(r)?e!==e&&r!==r:Ip(e,r,o,u,qi,f)}function Ip(e,r,o,u,f,g){var m=ie(e),y=ie(r),_=m?Te:nn(e),k=y?Te:nn(r);_=_==M?ht:_,k=k==M?ht:k;var x=_==ht,L=k==ht,F=_==k;if(F&&Bt(e)){if(!Bt(r))return!1;m=!0,x=!1}if(F&&!x)return g||(g=new Yn),m||Ii(e)?hu(e,r,o,u,f,g):Jp(e,r,_,o,u,f,g);if(!(o&C)){var W=x&&Ie.call(e,"__wrapped__"),K=L&&Ie.call(r,"__wrapped__");if(W||K){var ae=W?e.value():e,Z=K?r.value():r;return g||(g=new Yn),f(ae,Z,o,u,g)}}return F?(g||(g=new Yn),Xp(e,r,o,u,f,g)):!1}function Ep(e){return Ue(e)&&nn(e)==Gn}function ca(e,r,o,u){var f=o.length,g=f,m=!u;if(e==null)return!g;for(e=Se(e);f--;){var y=o[f];if(m&&y[2]?y[1]!==e[y[0]]:!(y[0]in e))return!1}for(;++f<g;){y=o[f];var _=y[0],k=e[_],x=y[1];if(m&&y[2]){if(k===t&&!(_ in e))return!1}else{var L=new Yn;if(u)var F=u(k,x,_,e,r,L);if(!(F===t?qi(x,k,C|P,u,L):F))return!1}}return!0}function Cl(e){if(!Le(e)||ag(e))return!1;var r=Tt(e)?Ed:ph;return r.test(ni(e))}function Sp(e){return Ue(e)&&an(e)==Di}function Ap(e){return Ue(e)&&nn(e)==Vn}function Np(e){return Ue(e)&&Xr(e.length)&&!!Oe[an(e)]}function Pl(e){return typeof e=="function"?e:e==null?gn:typeof e=="object"?ie(e)?Ml(e[0],e[1]):Ul(e):ic(e)}function fa(e){if(!zi(e))return Od(e);var r=[];for(var o in Se(e))Ie.call(e,o)&&o!="constructor"&&r.push(o);return r}function kp(e){if(!Le(e))return cg(e);var r=zi(e),o=[];for(var u in e)u=="constructor"&&(r||!Ie.call(e,u))||o.push(u);return o}function ha(e,r){return e<r}function Fl(e,r){var o=-1,u=dn(e)?E(e.length):[];return Pt(e,function(f,g,m){u[++o]=r(f,g,m)}),u}function Ul(e){var r=Na(e);return r.length==1&&r[0][2]?vu(r[0][0],r[0][1]):function(o){return o===e||ca(o,e,r)}}function Ml(e,r){return xa(e)&&mu(r)?vu(lt(e),r):function(o){var u=Ba(o,e);return u===t&&u===r?$a(o,e):qi(r,u,C|P)}}function Pr(e,r,o,u,f){e!==r&&aa(r,function(g,m){if(f||(f=new Yn),Le(g))xp(e,r,m,o,Pr,u,f);else{var y=u?u(Ra(e,m),g,m+"",e,r,f):t;y===t&&(y=g),ra(e,m,y)}},pn)}function xp(e,r,o,u,f,g,m){var y=Ra(e,o),_=Ra(r,o),k=m.get(_);if(k){ra(e,o,k);return}var x=g?g(y,_,o+"",e,r,m):t,L=x===t;if(L){var F=ie(_),W=!F&&Bt(_),K=!F&&!W&&Ii(_);x=_,F||W||K?ie(y)?x=y:Ge(y)?x=hn(y):W?(L=!1,x=Jl(_,!0)):K?(L=!1,x=Xl(_,!0)):x=[]:Ji(_)||ti(_)?(x=y,ti(y)?x=Hu(y):(!Le(y)||Tt(y))&&(x=gu(_))):L=!1}L&&(m.set(_,x),f(x,_,u,g,m),m.delete(_)),ra(e,o,x)}function Bl(e,r){var o=e.length;if(o)return r+=r<0?o:0,yt(r,o)?e[r]:t}function $l(e,r,o){r.length?r=Re(r,function(g){return ie(g)?function(m){return Zt(m,g.length===1?g[0]:g)}:g}):r=[gn];var u=-1;r=Re(r,bn(Q()));var f=Fl(e,function(g,m,y){var _=Re(r,function(k){return k(g)});return{criteria:_,index:++u,value:g}});return td(f,function(g,m){return Vp(g,m,o)})}function Op(e,r){return Gl(e,r,function(o,u){return $a(e,u)})}function Gl(e,r,o){for(var u=-1,f=r.length,g={};++u<f;){var m=r[u],y=Zt(e,m);o(y,m)&&ji(g,Ut(m,e),y)}return g}function Rp(e){return function(r){return Zt(r,e)}}function da(e,r,o,u){var f=u?nd:hi,g=-1,m=r.length,y=e;for(e===r&&(r=hn(r)),o&&(y=Re(e,bn(o)));++g<m;)for(var _=0,k=r[g],x=o?o(k):k;(_=f(y,x,_,u))>-1;)y!==e&&Sr.call(y,_,1),Sr.call(e,_,1);return e}function Vl(e,r){for(var o=e?r.length:0,u=o-1;o--;){var f=r[o];if(o==u||f!==g){var g=f;yt(f)?Sr.call(e,f,1):va(e,f)}}return e}function pa(e,r){return e+kr(_l()*(r-e+1))}function Dp(e,r,o,u){for(var f=-1,g=He(Nr((r-e)/(o||1)),0),m=E(g);g--;)m[u?g:++f]=e,e+=o;return m}function ga(e,r){var o="";if(!e||r<1||r>$n)return o;do r%2&&(o+=e),r=kr(r/2),r&&(e+=e);while(r);return o}function oe(e,r){return Da(yu(e,r,gn),e+"")}function Lp(e){return Sl(Ei(e))}function Cp(e,r){var o=Ei(e);return qr(o,Kt(r,0,o.length))}function ji(e,r,o,u){if(!Le(e))return e;r=Ut(r,e);for(var f=-1,g=r.length,m=g-1,y=e;y!=null&&++f<g;){var _=lt(r[f]),k=o;if(_==="__proto__"||_==="constructor"||_==="prototype")return e;if(f!=m){var x=y[_];k=u?u(x,_,y):t,k===t&&(k=Le(x)?x:yt(r[f+1])?[]:{})}Vi(y,_,k),y=y[_]}return e}var Wl=xr?function(e,r){return xr.set(e,r),e}:gn,Pp=Ar?function(e,r){return Ar(e,"toString",{configurable:!0,enumerable:!1,value:Va(r),writable:!0})}:gn;function Fp(e){return qr(Ei(e))}function Cn(e,r,o){var u=-1,f=e.length;r<0&&(r=-r>f?0:f+r),o=o>f?f:o,o<0&&(o+=f),f=r>o?0:o-r>>>0,r>>>=0;for(var g=E(f);++u<f;)g[u]=e[u+r];return g}function Up(e,r){var o;return Pt(e,function(u,f,g){return o=r(u,f,g),!o}),!!o}function Fr(e,r,o){var u=0,f=e==null?u:e.length;if(typeof r=="number"&&r===r&&f<=G){for(;u<f;){var g=u+f>>>1,m=e[g];m!==null&&!_n(m)&&(o?m<=r:m<r)?u=g+1:f=g}return f}return ma(e,r,gn,o)}function ma(e,r,o,u){var f=0,g=e==null?0:e.length;if(g===0)return 0;r=o(r);for(var m=r!==r,y=r===null,_=_n(r),k=r===t;f<g;){var x=kr((f+g)/2),L=o(e[x]),F=L!==t,W=L===null,K=L===L,ae=_n(L);if(m)var Z=u||K;else k?Z=K&&(u||F):y?Z=K&&F&&(u||!W):_?Z=K&&F&&!W&&(u||!ae):W||ae?Z=!1:Z=u?L<=r:L<r;Z?f=x+1:g=x}return en(g,N)}function Yl(e,r){for(var o=-1,u=e.length,f=0,g=[];++o<u;){var m=e[o],y=r?r(m):m;if(!o||!qn(y,_)){var _=y;g[f++]=m===0?0:m}}return g}function ql(e){return typeof e=="number"?e:_n(e)?Ht:+e}function wn(e){if(typeof e=="string")return e;if(ie(e))return Re(e,wn)+"";if(_n(e))return Il?Il.call(e):"";var r=e+"";return r=="0"&&1/e==-st?"-0":r}function Ft(e,r,o){var u=-1,f=gr,g=e.length,m=!0,y=[],_=y;if(o)m=!1,f=qs;else if(g>=a){var k=r?null:zp(e);if(k)return vr(k);m=!1,f=Fi,_=new Xt}else _=r?[]:y;e:for(;++u<g;){var x=e[u],L=r?r(x):x;if(x=o||x!==0?x:0,m&&L===L){for(var F=_.length;F--;)if(_[F]===L)continue e;r&&_.push(L),y.push(x)}else f(_,L,o)||(_!==y&&_.push(L),y.push(x))}return y}function va(e,r){return r=Ut(r,e),e=Tu(e,r),e==null||delete e[lt(Pn(r))]}function jl(e,r,o,u){return ji(e,r,o(Zt(e,r)),u)}function Ur(e,r,o,u){for(var f=e.length,g=u?f:-1;(u?g--:++g<f)&&r(e[g],g,e););return o?Cn(e,u?0:g,u?g+1:f):Cn(e,u?g+1:0,u?f:g)}function Hl(e,r){var o=e;return o instanceof fe&&(o=o.value()),js(r,function(u,f){return f.func.apply(f.thisArg,Dt([u],f.args))},o)}function ya(e,r,o){var u=e.length;if(u<2)return u?Ft(e[0]):[];for(var f=-1,g=E(u);++f<u;)for(var m=e[f],y=-1;++y<u;)y!=f&&(g[f]=Wi(g[f]||m,e[y],r,o));return Ft(Xe(g,1),r,o)}function zl(e,r,o){for(var u=-1,f=e.length,g=r.length,m={};++u<f;){var y=u<g?r[u]:t;o(m,e[u],y)}return m}function Ta(e){return Ge(e)?e:[]}function ba(e){return typeof e=="function"?e:gn}function Ut(e,r){return ie(e)?e:xa(e,r)?[e]:Iu(we(e))}var Mp=oe;function Mt(e,r,o){var u=e.length;return o=o===t?u:o,!r&&o>=u?e:Cn(e,r,o)}var Ql=Sd||function(e){return Je.clearTimeout(e)};function Jl(e,r){if(r)return e.slice();var o=e.length,u=vl?vl(o):new e.constructor(o);return e.copy(u),u}function wa(e){var r=new e.constructor(e.byteLength);return new Ir(r).set(new Ir(e)),r}function Bp(e,r){var o=r?wa(e.buffer):e.buffer;return new e.constructor(o,e.byteOffset,e.byteLength)}function $p(e){var r=new e.constructor(e.source,Lo.exec(e));return r.lastIndex=e.lastIndex,r}function Gp(e){return Gi?Se(Gi.call(e)):{}}function Xl(e,r){var o=r?wa(e.buffer):e.buffer;return new e.constructor(o,e.byteOffset,e.length)}function Kl(e,r){if(e!==r){var o=e!==t,u=e===null,f=e===e,g=_n(e),m=r!==t,y=r===null,_=r===r,k=_n(r);if(!y&&!k&&!g&&e>r||g&&m&&_&&!y&&!k||u&&m&&_||!o&&_||!f)return 1;if(!u&&!g&&!k&&e<r||k&&o&&f&&!u&&!g||y&&o&&f||!m&&f||!_)return-1}return 0}function Vp(e,r,o){for(var u=-1,f=e.criteria,g=r.criteria,m=f.length,y=o.length;++u<m;){var _=Kl(f[u],g[u]);if(_){if(u>=y)return _;var k=o[u];return _*(k=="desc"?-1:1)}}return e.index-r.index}function Zl(e,r,o,u){for(var f=-1,g=e.length,m=o.length,y=-1,_=r.length,k=He(g-m,0),x=E(_+k),L=!u;++y<_;)x[y]=r[y];for(;++f<m;)(L||f<g)&&(x[o[f]]=e[f]);for(;k--;)x[y++]=e[f++];return x}function eu(e,r,o,u){for(var f=-1,g=e.length,m=-1,y=o.length,_=-1,k=r.length,x=He(g-y,0),L=E(x+k),F=!u;++f<x;)L[f]=e[f];for(var W=f;++_<k;)L[W+_]=r[_];for(;++m<y;)(F||f<g)&&(L[W+o[m]]=e[f++]);return L}function hn(e,r){var o=-1,u=e.length;for(r||(r=E(u));++o<u;)r[o]=e[o];return r}function ot(e,r,o,u){var f=!o;o||(o={});for(var g=-1,m=r.length;++g<m;){var y=r[g],_=u?u(o[y],e[y],y,o,e):t;_===t&&(_=e[y]),f?gt(o,y,_):Vi(o,y,_)}return o}function Wp(e,r){return ot(e,ka(e),r)}function Yp(e,r){return ot(e,du(e),r)}function Mr(e,r){return function(o,u){var f=ie(o)?Qh:hp,g=r?r():{};return f(o,e,Q(u,2),g)}}function bi(e){return oe(function(r,o){var u=-1,f=o.length,g=f>1?o[f-1]:t,m=f>2?o[2]:t;for(g=e.length>3&&typeof g=="function"?(f--,g):t,m&&on(o[0],o[1],m)&&(g=f<3?t:g,f=1),r=Se(r);++u<f;){var y=o[u];y&&e(r,y,u,g)}return r})}function nu(e,r){return function(o,u){if(o==null)return o;if(!dn(o))return e(o,u);for(var f=o.length,g=r?f:-1,m=Se(o);(r?g--:++g<f)&&u(m[g],g,m)!==!1;);return o}}function tu(e){return function(r,o,u){for(var f=-1,g=Se(r),m=u(r),y=m.length;y--;){var _=m[e?y:++f];if(o(g[_],_,g)===!1)break}return r}}function qp(e,r,o){var u=r&X,f=Hi(e);function g(){var m=this&&this!==Je&&this instanceof g?f:e;return m.apply(u?o:this,arguments)}return g}function iu(e){return function(r){r=we(r);var o=di(r)?Wn(r):t,u=o?o[0]:r.charAt(0),f=o?Mt(o,1).join(""):r.slice(1);return u[e]()+f}}function wi(e){return function(r){return js(nc(ec(r).replace(Ph,"")),e,"")}}function Hi(e){return function(){var r=arguments;switch(r.length){case 0:return new e;case 1:return new e(r[0]);case 2:return new e(r[0],r[1]);case 3:return new e(r[0],r[1],r[2]);case 4:return new e(r[0],r[1],r[2],r[3]);case 5:return new e(r[0],r[1],r[2],r[3],r[4]);case 6:return new e(r[0],r[1],r[2],r[3],r[4],r[5]);case 7:return new e(r[0],r[1],r[2],r[3],r[4],r[5],r[6])}var o=Ti(e.prototype),u=e.apply(o,r);return Le(u)?u:o}}function jp(e,r,o){var u=Hi(e);function f(){for(var g=arguments.length,m=E(g),y=g,_=_i(f);y--;)m[y]=arguments[y];var k=g<3&&m[0]!==_&&m[g-1]!==_?[]:Lt(m,_);if(g-=k.length,g<o)return lu(e,r,Br,f.placeholder,t,m,k,t,t,o-g);var x=this&&this!==Je&&this instanceof f?u:e;return Tn(x,this,m)}return f}function ru(e){return function(r,o,u){var f=Se(r);if(!dn(r)){var g=Q(o,3);r=ze(r),o=function(y){return g(f[y],y,f)}}var m=e(r,o,u);return m>-1?f[g?r[m]:m]:t}}function su(e){return vt(function(r){var o=r.length,u=o,f=Dn.prototype.thru;for(e&&r.reverse();u--;){var g=r[u];if(typeof g!="function")throw new Rn(c);if(f&&!m&&Wr(g)=="wrapper")var m=new Dn([],!0)}for(u=m?u:o;++u<o;){g=r[u];var y=Wr(g),_=y=="wrapper"?Aa(g):t;_&&Oa(_[0])&&_[1]==(Fe|ve|_e|An)&&!_[4].length&&_[9]==1?m=m[Wr(_[0])].apply(m,_[3]):m=g.length==1&&Oa(g)?m[y]():m.thru(g)}return function(){var k=arguments,x=k[0];if(m&&k.length==1&&ie(x))return m.plant(x).value();for(var L=0,F=o?r[L].apply(this,k):x;++L<o;)F=r[L].call(this,F);return F}})}function Br(e,r,o,u,f,g,m,y,_,k){var x=r&Fe,L=r&X,F=r&z,W=r&(ve|ye),K=r&R,ae=F?t:Hi(e);function Z(){for(var le=arguments.length,pe=E(le),In=le;In--;)pe[In]=arguments[In];if(W)var ln=_i(Z),En=rd(pe,ln);if(u&&(pe=Zl(pe,u,f,W)),g&&(pe=eu(pe,g,m,W)),le-=En,W&&le<k){var Ve=Lt(pe,ln);return lu(e,r,Br,Z.placeholder,o,pe,Ve,y,_,k-le)}var jn=L?o:this,wt=F?jn[e]:e;return le=pe.length,y?pe=hg(pe,y):K&&le>1&&pe.reverse(),x&&_<le&&(pe.length=_),this&&this!==Je&&this instanceof Z&&(wt=ae||Hi(wt)),wt.apply(jn,pe)}return Z}function au(e,r){return function(o,u){return bp(o,e,r(u),{})}}function $r(e,r){return function(o,u){var f;if(o===t&&u===t)return r;if(o!==t&&(f=o),u!==t){if(f===t)return u;typeof o=="string"||typeof u=="string"?(o=wn(o),u=wn(u)):(o=ql(o),u=ql(u)),f=e(o,u)}return f}}function _a(e){return vt(function(r){return r=Re(r,bn(Q())),oe(function(o){var u=this;return e(r,function(f){return Tn(f,u,o)})})})}function Gr(e,r){r=r===t?" ":wn(r);var o=r.length;if(o<2)return o?ga(r,e):r;var u=ga(r,Nr(e/pi(r)));return di(r)?Mt(Wn(u),0,e).join(""):u.slice(0,e)}function Hp(e,r,o,u){var f=r&X,g=Hi(e);function m(){for(var y=-1,_=arguments.length,k=-1,x=u.length,L=E(x+_),F=this&&this!==Je&&this instanceof m?g:e;++k<x;)L[k]=u[k];for(;_--;)L[k++]=arguments[++y];return Tn(F,f?o:this,L)}return m}function ou(e){return function(r,o,u){return u&&typeof u!="number"&&on(r,o,u)&&(o=u=t),r=bt(r),o===t?(o=r,r=0):o=bt(o),u=u===t?r<o?1:-1:bt(u),Dp(r,o,u,e)}}function Vr(e){return function(r,o){return typeof r=="string"&&typeof o=="string"||(r=Fn(r),o=Fn(o)),e(r,o)}}function lu(e,r,o,u,f,g,m,y,_,k){var x=r&ve,L=x?m:t,F=x?t:m,W=x?g:t,K=x?t:g;r|=x?_e:ke,r&=~(x?ke:_e),r&de||(r&=~(X|z));var ae=[e,r,f,W,L,K,F,y,_,k],Z=o.apply(t,ae);return Oa(e)&&bu(Z,ae),Z.placeholder=u,wu(Z,e,r)}function Ia(e){var r=je[e];return function(o,u){if(o=Fn(o),u=u==null?0:en(se(u),292),u&&wl(o)){var f=(we(o)+"e").split("e"),g=r(f[0]+"e"+(+f[1]+u));return f=(we(g)+"e").split("e"),+(f[0]+"e"+(+f[1]-u))}return r(o)}}var zp=vi&&1/vr(new vi([,-0]))[1]==st?function(e){return new vi(e)}:qa;function uu(e){return function(r){var o=nn(r);return o==Gn?Zs(r):o==Vn?fd(r):id(r,e(r))}}function mt(e,r,o,u,f,g,m,y){var _=r&z;if(!_&&typeof e!="function")throw new Rn(c);var k=u?u.length:0;if(k||(r&=~(_e|ke),u=f=t),m=m===t?m:He(se(m),0),y=y===t?y:se(y),k-=f?f.length:0,r&ke){var x=u,L=f;u=f=t}var F=_?t:Aa(e),W=[e,r,o,u,f,x,L,g,m,y];if(F&&ug(W,F),e=W[0],r=W[1],o=W[2],u=W[3],f=W[4],y=W[9]=W[9]===t?_?0:e.length:He(W[9]-k,0),!y&&r&(ve|ye)&&(r&=~(ve|ye)),!r||r==X)var K=qp(e,r,o);else r==ve||r==ye?K=jp(e,r,y):(r==_e||r==(X|_e))&&!f.length?K=Hp(e,r,o,u):K=Br.apply(t,W);var ae=F?Wl:bu;return wu(ae(K,W),e,r)}function cu(e,r,o,u){return e===t||qn(e,mi[o])&&!Ie.call(u,o)?r:e}function fu(e,r,o,u,f,g){return Le(e)&&Le(r)&&(g.set(r,e),Pr(e,r,t,fu,g),g.delete(r)),e}function Qp(e){return Ji(e)?t:e}function hu(e,r,o,u,f,g){var m=o&C,y=e.length,_=r.length;if(y!=_&&!(m&&_>y))return!1;var k=g.get(e),x=g.get(r);if(k&&x)return k==r&&x==e;var L=-1,F=!0,W=o&P?new Xt:t;for(g.set(e,r),g.set(r,e);++L<y;){var K=e[L],ae=r[L];if(u)var Z=m?u(ae,K,L,r,e,g):u(K,ae,L,e,r,g);if(Z!==t){if(Z)continue;F=!1;break}if(W){if(!Hs(r,function(le,pe){if(!Fi(W,pe)&&(K===le||f(K,le,o,u,g)))return W.push(pe)})){F=!1;break}}else if(!(K===ae||f(K,ae,o,u,g))){F=!1;break}}return g.delete(e),g.delete(r),F}function Jp(e,r,o,u,f,g,m){switch(o){case ci:if(e.byteLength!=r.byteLength||e.byteOffset!=r.byteOffset)return!1;e=e.buffer,r=r.buffer;case Pi:return!(e.byteLength!=r.byteLength||!g(new Ir(e),new Ir(r)));case be:case kn:case Ri:return qn(+e,+r);case Ot:return e.name==r.name&&e.message==r.message;case Di:case Li:return e==r+"";case Gn:var y=Zs;case Vn:var _=u&C;if(y||(y=vr),e.size!=r.size&&!_)return!1;var k=m.get(e);if(k)return k==r;u|=P,m.set(e,r);var x=hu(y(e),y(r),u,f,g,m);return m.delete(e),x;case fr:if(Gi)return Gi.call(e)==Gi.call(r)}return!1}function Xp(e,r,o,u,f,g){var m=o&C,y=Ea(e),_=y.length,k=Ea(r),x=k.length;if(_!=x&&!m)return!1;for(var L=_;L--;){var F=y[L];if(!(m?F in r:Ie.call(r,F)))return!1}var W=g.get(e),K=g.get(r);if(W&&K)return W==r&&K==e;var ae=!0;g.set(e,r),g.set(r,e);for(var Z=m;++L<_;){F=y[L];var le=e[F],pe=r[F];if(u)var In=m?u(pe,le,F,r,e,g):u(le,pe,F,e,r,g);if(!(In===t?le===pe||f(le,pe,o,u,g):In)){ae=!1;break}Z||(Z=F=="constructor")}if(ae&&!Z){var ln=e.constructor,En=r.constructor;ln!=En&&"constructor"in e&&"constructor"in r&&!(typeof ln=="function"&&ln instanceof ln&&typeof En=="function"&&En instanceof En)&&(ae=!1)}return g.delete(e),g.delete(r),ae}function vt(e){return Da(yu(e,t,Nu),e+"")}function Ea(e){return Dl(e,ze,ka)}function Sa(e){return Dl(e,pn,du)}var Aa=xr?function(e){return xr.get(e)}:qa;function Wr(e){for(var r=e.name+"",o=yi[r],u=Ie.call(yi,r)?o.length:0;u--;){var f=o[u],g=f.func;if(g==null||g==e)return f.name}return r}function _i(e){var r=Ie.call(p,"placeholder")?p:e;return r.placeholder}function Q(){var e=p.iteratee||Wa;return e=e===Wa?Pl:e,arguments.length?e(arguments[0],arguments[1]):e}function Yr(e,r){var o=e.__data__;return sg(r)?o[typeof r=="string"?"string":"hash"]:o.map}function Na(e){for(var r=ze(e),o=r.length;o--;){var u=r[o],f=e[u];r[o]=[u,f,mu(f)]}return r}function ei(e,r){var o=ld(e,r);return Cl(o)?o:t}function Kp(e){var r=Ie.call(e,Qt),o=e[Qt];try{e[Qt]=t;var u=!0}catch{}var f=wr.call(e);return u&&(r?e[Qt]=o:delete e[Qt]),f}var ka=na?function(e){return e==null?[]:(e=Se(e),Rt(na(e),function(r){return Tl.call(e,r)}))}:ja,du=na?function(e){for(var r=[];e;)Dt(r,ka(e)),e=Er(e);return r}:ja,nn=an;(ta&&nn(new ta(new ArrayBuffer(1)))!=ci||Mi&&nn(new Mi)!=Gn||ia&&nn(ia.resolve())!=xo||vi&&nn(new vi)!=Vn||Bi&&nn(new Bi)!=Ci)&&(nn=function(e){var r=an(e),o=r==ht?e.constructor:t,u=o?ni(o):"";if(u)switch(u){case Cd:return ci;case Pd:return Gn;case Fd:return xo;case Ud:return Vn;case Md:return Ci}return r});function Zp(e,r,o){for(var u=-1,f=o.length;++u<f;){var g=o[u],m=g.size;switch(g.type){case"drop":e+=m;break;case"dropRight":r-=m;break;case"take":r=en(r,e+m);break;case"takeRight":e=He(e,r-m);break}}return{start:e,end:r}}function eg(e){var r=e.match(ah);return r?r[1].split(oh):[]}function pu(e,r,o){r=Ut(r,e);for(var u=-1,f=r.length,g=!1;++u<f;){var m=lt(r[u]);if(!(g=e!=null&&o(e,m)))break;e=e[m]}return g||++u!=f?g:(f=e==null?0:e.length,!!f&&Xr(f)&&yt(m,f)&&(ie(e)||ti(e)))}function ng(e){var r=e.length,o=new e.constructor(r);return r&&typeof e[0]=="string"&&Ie.call(e,"index")&&(o.index=e.index,o.input=e.input),o}function gu(e){return typeof e.constructor=="function"&&!zi(e)?Ti(Er(e)):{}}function tg(e,r,o){var u=e.constructor;switch(r){case Pi:return wa(e);case be:case kn:return new u(+e);case ci:return Bp(e,o);case Ns:case ks:case xs:case Os:case Rs:case Ds:case Ls:case Cs:case Ps:return Xl(e,o);case Gn:return new u;case Ri:case Li:return new u(e);case Di:return $p(e);case Vn:return new u;case fr:return Gp(e)}}function ig(e,r){var o=r.length;if(!o)return e;var u=o-1;return r[u]=(o>1?"& ":"")+r[u],r=r.join(o>2?", ":" "),e.replace(sh,`{
/* [wrapped with `+r+`] */
`)}function rg(e){return ie(e)||ti(e)||!!(bl&&e&&e[bl])}function yt(e,r){var o=typeof e;return r=r??$n,!!r&&(o=="number"||o!="symbol"&&mh.test(e))&&e>-1&&e%1==0&&e<r}function on(e,r,o){if(!Le(o))return!1;var u=typeof r;return(u=="number"?dn(o)&&yt(r,o.length):u=="string"&&r in o)?qn(o[r],e):!1}function xa(e,r){if(ie(e))return!1;var o=typeof e;return o=="number"||o=="symbol"||o=="boolean"||e==null||_n(e)?!0:nh.test(e)||!eh.test(e)||r!=null&&e in Se(r)}function sg(e){var r=typeof e;return r=="string"||r=="number"||r=="symbol"||r=="boolean"?e!=="__proto__":e===null}function Oa(e){var r=Wr(e),o=p[r];if(typeof o!="function"||!(r in fe.prototype))return!1;if(e===o)return!0;var u=Aa(o);return!!u&&e===u[0]}function ag(e){return!!ml&&ml in e}var og=Tr?Tt:Ha;function zi(e){var r=e&&e.constructor,o=typeof r=="function"&&r.prototype||mi;return e===o}function mu(e){return e===e&&!Le(e)}function vu(e,r){return function(o){return o==null?!1:o[e]===r&&(r!==t||e in Se(o))}}function lg(e){var r=Qr(e,function(u){return o.size===v&&o.clear(),u}),o=r.cache;return r}function ug(e,r){var o=e[1],u=r[1],f=o|u,g=f<(X|z|Fe),m=u==Fe&&o==ve||u==Fe&&o==An&&e[7].length<=r[8]||u==(Fe|An)&&r[7].length<=r[8]&&o==ve;if(!(g||m))return e;u&X&&(e[2]=r[2],f|=o&X?0:de);var y=r[3];if(y){var _=e[3];e[3]=_?Zl(_,y,r[4]):y,e[4]=_?Lt(e[3],T):r[4]}return y=r[5],y&&(_=e[5],e[5]=_?eu(_,y,r[6]):y,e[6]=_?Lt(e[5],T):r[6]),y=r[7],y&&(e[7]=y),u&Fe&&(e[8]=e[8]==null?r[8]:en(e[8],r[8])),e[9]==null&&(e[9]=r[9]),e[0]=r[0],e[1]=f,e}function cg(e){var r=[];if(e!=null)for(var o in Se(e))r.push(o);return r}function fg(e){return wr.call(e)}function yu(e,r,o){return r=He(r===t?e.length-1:r,0),function(){for(var u=arguments,f=-1,g=He(u.length-r,0),m=E(g);++f<g;)m[f]=u[r+f];f=-1;for(var y=E(r+1);++f<r;)y[f]=u[f];return y[r]=o(m),Tn(e,this,y)}}function Tu(e,r){return r.length<2?e:Zt(e,Cn(r,0,-1))}function hg(e,r){for(var o=e.length,u=en(r.length,o),f=hn(e);u--;){var g=r[u];e[u]=yt(g,o)?f[g]:t}return e}function Ra(e,r){if(!(r==="constructor"&&typeof e[r]=="function")&&r!="__proto__")return e[r]}var bu=_u(Wl),Qi=Nd||function(e,r){return Je.setTimeout(e,r)},Da=_u(Pp);function wu(e,r,o){var u=r+"";return Da(e,ig(u,dg(eg(u),o)))}function _u(e){var r=0,o=0;return function(){var u=Rd(),f=jt-(u-o);if(o=u,f>0){if(++r>=xt)return arguments[0]}else r=0;return e.apply(t,arguments)}}function qr(e,r){var o=-1,u=e.length,f=u-1;for(r=r===t?u:r;++o<r;){var g=pa(o,f),m=e[g];e[g]=e[o],e[o]=m}return e.length=r,e}var Iu=lg(function(e){var r=[];return e.charCodeAt(0)===46&&r.push(""),e.replace(th,function(o,u,f,g){r.push(f?g.replace(ch,"$1"):u||o)}),r});function lt(e){if(typeof e=="string"||_n(e))return e;var r=e+"";return r=="0"&&1/e==-st?"-0":r}function ni(e){if(e!=null){try{return br.call(e)}catch{}try{return e+""}catch{}}return""}function dg(e,r){return On(U,function(o){var u="_."+o[0];r&o[1]&&!gr(e,u)&&e.push(u)}),e.sort()}function Eu(e){if(e instanceof fe)return e.clone();var r=new Dn(e.__wrapped__,e.__chain__);return r.__actions__=hn(e.__actions__),r.__index__=e.__index__,r.__values__=e.__values__,r}function pg(e,r,o){(o?on(e,r,o):r===t)?r=1:r=He(se(r),0);var u=e==null?0:e.length;if(!u||r<1)return[];for(var f=0,g=0,m=E(Nr(u/r));f<u;)m[g++]=Cn(e,f,f+=r);return m}function gg(e){for(var r=-1,o=e==null?0:e.length,u=0,f=[];++r<o;){var g=e[r];g&&(f[u++]=g)}return f}function mg(){var e=arguments.length;if(!e)return[];for(var r=E(e-1),o=arguments[0],u=e;u--;)r[u-1]=arguments[u];return Dt(ie(o)?hn(o):[o],Xe(r,1))}var vg=oe(function(e,r){return Ge(e)?Wi(e,Xe(r,1,Ge,!0)):[]}),yg=oe(function(e,r){var o=Pn(r);return Ge(o)&&(o=t),Ge(e)?Wi(e,Xe(r,1,Ge,!0),Q(o,2)):[]}),Tg=oe(function(e,r){var o=Pn(r);return Ge(o)&&(o=t),Ge(e)?Wi(e,Xe(r,1,Ge,!0),t,o):[]});function bg(e,r,o){var u=e==null?0:e.length;return u?(r=o||r===t?1:se(r),Cn(e,r<0?0:r,u)):[]}function wg(e,r,o){var u=e==null?0:e.length;return u?(r=o||r===t?1:se(r),r=u-r,Cn(e,0,r<0?0:r)):[]}function _g(e,r){return e&&e.length?Ur(e,Q(r,3),!0,!0):[]}function Ig(e,r){return e&&e.length?Ur(e,Q(r,3),!0):[]}function Eg(e,r,o,u){var f=e==null?0:e.length;return f?(o&&typeof o!="number"&&on(e,r,o)&&(o=0,u=f),mp(e,r,o,u)):[]}function Su(e,r,o){var u=e==null?0:e.length;if(!u)return-1;var f=o==null?0:se(o);return f<0&&(f=He(u+f,0)),mr(e,Q(r,3),f)}function Au(e,r,o){var u=e==null?0:e.length;if(!u)return-1;var f=u-1;return o!==t&&(f=se(o),f=o<0?He(u+f,0):en(f,u-1)),mr(e,Q(r,3),f,!0)}function Nu(e){var r=e==null?0:e.length;return r?Xe(e,1):[]}function Sg(e){var r=e==null?0:e.length;return r?Xe(e,st):[]}function Ag(e,r){var o=e==null?0:e.length;return o?(r=r===t?1:se(r),Xe(e,r)):[]}function Ng(e){for(var r=-1,o=e==null?0:e.length,u={};++r<o;){var f=e[r];u[f[0]]=f[1]}return u}function ku(e){return e&&e.length?e[0]:t}function kg(e,r,o){var u=e==null?0:e.length;if(!u)return-1;var f=o==null?0:se(o);return f<0&&(f=He(u+f,0)),hi(e,r,f)}function xg(e){var r=e==null?0:e.length;return r?Cn(e,0,-1):[]}var Og=oe(function(e){var r=Re(e,Ta);return r.length&&r[0]===e[0]?ua(r):[]}),Rg=oe(function(e){var r=Pn(e),o=Re(e,Ta);return r===Pn(o)?r=t:o.pop(),o.length&&o[0]===e[0]?ua(o,Q(r,2)):[]}),Dg=oe(function(e){var r=Pn(e),o=Re(e,Ta);return r=typeof r=="function"?r:t,r&&o.pop(),o.length&&o[0]===e[0]?ua(o,t,r):[]});function Lg(e,r){return e==null?"":xd.call(e,r)}function Pn(e){var r=e==null?0:e.length;return r?e[r-1]:t}function Cg(e,r,o){var u=e==null?0:e.length;if(!u)return-1;var f=u;return o!==t&&(f=se(o),f=f<0?He(u+f,0):en(f,u-1)),r===r?dd(e,r,f):mr(e,ll,f,!0)}function Pg(e,r){return e&&e.length?Bl(e,se(r)):t}var Fg=oe(xu);function xu(e,r){return e&&e.length&&r&&r.length?da(e,r):e}function Ug(e,r,o){return e&&e.length&&r&&r.length?da(e,r,Q(o,2)):e}function Mg(e,r,o){return e&&e.length&&r&&r.length?da(e,r,t,o):e}var Bg=vt(function(e,r){var o=e==null?0:e.length,u=sa(e,r);return Vl(e,Re(r,function(f){return yt(f,o)?+f:f}).sort(Kl)),u});function $g(e,r){var o=[];if(!(e&&e.length))return o;var u=-1,f=[],g=e.length;for(r=Q(r,3);++u<g;){var m=e[u];r(m,u,e)&&(o.push(m),f.push(u))}return Vl(e,f),o}function La(e){return e==null?e:Ld.call(e)}function Gg(e,r,o){var u=e==null?0:e.length;return u?(o&&typeof o!="number"&&on(e,r,o)?(r=0,o=u):(r=r==null?0:se(r),o=o===t?u:se(o)),Cn(e,r,o)):[]}function Vg(e,r){return Fr(e,r)}function Wg(e,r,o){return ma(e,r,Q(o,2))}function Yg(e,r){var o=e==null?0:e.length;if(o){var u=Fr(e,r);if(u<o&&qn(e[u],r))return u}return-1}function qg(e,r){return Fr(e,r,!0)}function jg(e,r,o){return ma(e,r,Q(o,2),!0)}function Hg(e,r){var o=e==null?0:e.length;if(o){var u=Fr(e,r,!0)-1;if(qn(e[u],r))return u}return-1}function zg(e){return e&&e.length?Yl(e):[]}function Qg(e,r){return e&&e.length?Yl(e,Q(r,2)):[]}function Jg(e){var r=e==null?0:e.length;return r?Cn(e,1,r):[]}function Xg(e,r,o){return e&&e.length?(r=o||r===t?1:se(r),Cn(e,0,r<0?0:r)):[]}function Kg(e,r,o){var u=e==null?0:e.length;return u?(r=o||r===t?1:se(r),r=u-r,Cn(e,r<0?0:r,u)):[]}function Zg(e,r){return e&&e.length?Ur(e,Q(r,3),!1,!0):[]}function em(e,r){return e&&e.length?Ur(e,Q(r,3)):[]}var nm=oe(function(e){return Ft(Xe(e,1,Ge,!0))}),tm=oe(function(e){var r=Pn(e);return Ge(r)&&(r=t),Ft(Xe(e,1,Ge,!0),Q(r,2))}),im=oe(function(e){var r=Pn(e);return r=typeof r=="function"?r:t,Ft(Xe(e,1,Ge,!0),t,r)});function rm(e){return e&&e.length?Ft(e):[]}function sm(e,r){return e&&e.length?Ft(e,Q(r,2)):[]}function am(e,r){return r=typeof r=="function"?r:t,e&&e.length?Ft(e,t,r):[]}function Ca(e){if(!(e&&e.length))return[];var r=0;return e=Rt(e,function(o){if(Ge(o))return r=He(o.length,r),!0}),Xs(r,function(o){return Re(e,zs(o))})}function Ou(e,r){if(!(e&&e.length))return[];var o=Ca(e);return r==null?o:Re(o,function(u){return Tn(r,t,u)})}var om=oe(function(e,r){return Ge(e)?Wi(e,r):[]}),lm=oe(function(e){return ya(Rt(e,Ge))}),um=oe(function(e){var r=Pn(e);return Ge(r)&&(r=t),ya(Rt(e,Ge),Q(r,2))}),cm=oe(function(e){var r=Pn(e);return r=typeof r=="function"?r:t,ya(Rt(e,Ge),t,r)}),fm=oe(Ca);function hm(e,r){return zl(e||[],r||[],Vi)}function dm(e,r){return zl(e||[],r||[],ji)}var pm=oe(function(e){var r=e.length,o=r>1?e[r-1]:t;return o=typeof o=="function"?(e.pop(),o):t,Ou(e,o)});function Ru(e){var r=p(e);return r.__chain__=!0,r}function gm(e,r){return r(e),e}function jr(e,r){return r(e)}var mm=vt(function(e){var r=e.length,o=r?e[0]:0,u=this.__wrapped__,f=function(g){return sa(g,e)};return r>1||this.__actions__.length||!(u instanceof fe)||!yt(o)?this.thru(f):(u=u.slice(o,+o+(r?1:0)),u.__actions__.push({func:jr,args:[f],thisArg:t}),new Dn(u,this.__chain__).thru(function(g){return r&&!g.length&&g.push(t),g}))});function vm(){return Ru(this)}function ym(){return new Dn(this.value(),this.__chain__)}function Tm(){this.__values__===t&&(this.__values__=qu(this.value()));var e=this.__index__>=this.__values__.length,r=e?t:this.__values__[this.__index__++];return{done:e,value:r}}function bm(){return this}function wm(e){for(var r,o=this;o instanceof Rr;){var u=Eu(o);u.__index__=0,u.__values__=t,r?f.__wrapped__=u:r=u;var f=u;o=o.__wrapped__}return f.__wrapped__=e,r}function _m(){var e=this.__wrapped__;if(e instanceof fe){var r=e;return this.__actions__.length&&(r=new fe(this)),r=r.reverse(),r.__actions__.push({func:jr,args:[La],thisArg:t}),new Dn(r,this.__chain__)}return this.thru(La)}function Im(){return Hl(this.__wrapped__,this.__actions__)}var Em=Mr(function(e,r,o){Ie.call(e,o)?++e[o]:gt(e,o,1)});function Sm(e,r,o){var u=ie(e)?al:gp;return o&&on(e,r,o)&&(r=t),u(e,Q(r,3))}function Am(e,r){var o=ie(e)?Rt:Ol;return o(e,Q(r,3))}var Nm=ru(Su),km=ru(Au);function xm(e,r){return Xe(Hr(e,r),1)}function Om(e,r){return Xe(Hr(e,r),st)}function Rm(e,r,o){return o=o===t?1:se(o),Xe(Hr(e,r),o)}function Du(e,r){var o=ie(e)?On:Pt;return o(e,Q(r,3))}function Lu(e,r){var o=ie(e)?Jh:xl;return o(e,Q(r,3))}var Dm=Mr(function(e,r,o){Ie.call(e,o)?e[o].push(r):gt(e,o,[r])});function Lm(e,r,o,u){e=dn(e)?e:Ei(e),o=o&&!u?se(o):0;var f=e.length;return o<0&&(o=He(f+o,0)),Kr(e)?o<=f&&e.indexOf(r,o)>-1:!!f&&hi(e,r,o)>-1}var Cm=oe(function(e,r,o){var u=-1,f=typeof r=="function",g=dn(e)?E(e.length):[];return Pt(e,function(m){g[++u]=f?Tn(r,m,o):Yi(m,r,o)}),g}),Pm=Mr(function(e,r,o){gt(e,o,r)});function Hr(e,r){var o=ie(e)?Re:Fl;return o(e,Q(r,3))}function Fm(e,r,o,u){return e==null?[]:(ie(r)||(r=r==null?[]:[r]),o=u?t:o,ie(o)||(o=o==null?[]:[o]),$l(e,r,o))}var Um=Mr(function(e,r,o){e[o?0:1].push(r)},function(){return[[],[]]});function Mm(e,r,o){var u=ie(e)?js:cl,f=arguments.length<3;return u(e,Q(r,4),o,f,Pt)}function Bm(e,r,o){var u=ie(e)?Xh:cl,f=arguments.length<3;return u(e,Q(r,4),o,f,xl)}function $m(e,r){var o=ie(e)?Rt:Ol;return o(e,Jr(Q(r,3)))}function Gm(e){var r=ie(e)?Sl:Lp;return r(e)}function Vm(e,r,o){(o?on(e,r,o):r===t)?r=1:r=se(r);var u=ie(e)?cp:Cp;return u(e,r)}function Wm(e){var r=ie(e)?fp:Fp;return r(e)}function Ym(e){if(e==null)return 0;if(dn(e))return Kr(e)?pi(e):e.length;var r=nn(e);return r==Gn||r==Vn?e.size:fa(e).length}function qm(e,r,o){var u=ie(e)?Hs:Up;return o&&on(e,r,o)&&(r=t),u(e,Q(r,3))}var jm=oe(function(e,r){if(e==null)return[];var o=r.length;return o>1&&on(e,r[0],r[1])?r=[]:o>2&&on(r[0],r[1],r[2])&&(r=[r[0]]),$l(e,Xe(r,1),[])}),zr=Ad||function(){return Je.Date.now()};function Hm(e,r){if(typeof r!="function")throw new Rn(c);return e=se(e),function(){if(--e<1)return r.apply(this,arguments)}}function Cu(e,r,o){return r=o?t:r,r=e&&r==null?e.length:r,mt(e,Fe,t,t,t,t,r)}function Pu(e,r){var o;if(typeof r!="function")throw new Rn(c);return e=se(e),function(){return--e>0&&(o=r.apply(this,arguments)),e<=1&&(r=t),o}}var Pa=oe(function(e,r,o){var u=X;if(o.length){var f=Lt(o,_i(Pa));u|=_e}return mt(e,u,r,o,f)}),Fu=oe(function(e,r,o){var u=X|z;if(o.length){var f=Lt(o,_i(Fu));u|=_e}return mt(r,u,e,o,f)});function Uu(e,r,o){r=o?t:r;var u=mt(e,ve,t,t,t,t,t,r);return u.placeholder=Uu.placeholder,u}function Mu(e,r,o){r=o?t:r;var u=mt(e,ye,t,t,t,t,t,r);return u.placeholder=Mu.placeholder,u}function Bu(e,r,o){var u,f,g,m,y,_,k=0,x=!1,L=!1,F=!0;if(typeof e!="function")throw new Rn(c);r=Fn(r)||0,Le(o)&&(x=!!o.leading,L="maxWait"in o,g=L?He(Fn(o.maxWait)||0,r):g,F="trailing"in o?!!o.trailing:F);function W(Ve){var jn=u,wt=f;return u=f=t,k=Ve,m=e.apply(wt,jn),m}function K(Ve){return k=Ve,y=Qi(le,r),x?W(Ve):m}function ae(Ve){var jn=Ve-_,wt=Ve-k,rc=r-jn;return L?en(rc,g-wt):rc}function Z(Ve){var jn=Ve-_,wt=Ve-k;return _===t||jn>=r||jn<0||L&&wt>=g}function le(){var Ve=zr();if(Z(Ve))return pe(Ve);y=Qi(le,ae(Ve))}function pe(Ve){return y=t,F&&u?W(Ve):(u=f=t,m)}function In(){y!==t&&Ql(y),k=0,u=_=f=y=t}function ln(){return y===t?m:pe(zr())}function En(){var Ve=zr(),jn=Z(Ve);if(u=arguments,f=this,_=Ve,jn){if(y===t)return K(_);if(L)return Ql(y),y=Qi(le,r),W(_)}return y===t&&(y=Qi(le,r)),m}return En.cancel=In,En.flush=ln,En}var zm=oe(function(e,r){return kl(e,1,r)}),Qm=oe(function(e,r,o){return kl(e,Fn(r)||0,o)});function Jm(e){return mt(e,R)}function Qr(e,r){if(typeof e!="function"||r!=null&&typeof r!="function")throw new Rn(c);var o=function(){var u=arguments,f=r?r.apply(this,u):u[0],g=o.cache;if(g.has(f))return g.get(f);var m=e.apply(this,u);return o.cache=g.set(f,m)||g,m};return o.cache=new(Qr.Cache||pt),o}Qr.Cache=pt;function Jr(e){if(typeof e!="function")throw new Rn(c);return function(){var r=arguments;switch(r.length){case 0:return!e.call(this);case 1:return!e.call(this,r[0]);case 2:return!e.call(this,r[0],r[1]);case 3:return!e.call(this,r[0],r[1],r[2])}return!e.apply(this,r)}}function Xm(e){return Pu(2,e)}var Km=Mp(function(e,r){r=r.length==1&&ie(r[0])?Re(r[0],bn(Q())):Re(Xe(r,1),bn(Q()));var o=r.length;return oe(function(u){for(var f=-1,g=en(u.length,o);++f<g;)u[f]=r[f].call(this,u[f]);return Tn(e,this,u)})}),Fa=oe(function(e,r){var o=Lt(r,_i(Fa));return mt(e,_e,t,r,o)}),$u=oe(function(e,r){var o=Lt(r,_i($u));return mt(e,ke,t,r,o)}),Zm=vt(function(e,r){return mt(e,An,t,t,t,r)});function ev(e,r){if(typeof e!="function")throw new Rn(c);return r=r===t?r:se(r),oe(e,r)}function nv(e,r){if(typeof e!="function")throw new Rn(c);return r=r==null?0:He(se(r),0),oe(function(o){var u=o[r],f=Mt(o,0,r);return u&&Dt(f,u),Tn(e,this,f)})}function tv(e,r,o){var u=!0,f=!0;if(typeof e!="function")throw new Rn(c);return Le(o)&&(u="leading"in o?!!o.leading:u,f="trailing"in o?!!o.trailing:f),Bu(e,r,{leading:u,maxWait:r,trailing:f})}function iv(e){return Cu(e,1)}function rv(e,r){return Fa(ba(r),e)}function sv(){if(!arguments.length)return[];var e=arguments[0];return ie(e)?e:[e]}function av(e){return Ln(e,S)}function ov(e,r){return r=typeof r=="function"?r:t,Ln(e,S,r)}function lv(e){return Ln(e,w|S)}function uv(e,r){return r=typeof r=="function"?r:t,Ln(e,w|S,r)}function cv(e,r){return r==null||Nl(e,r,ze(r))}function qn(e,r){return e===r||e!==e&&r!==r}var fv=Vr(la),hv=Vr(function(e,r){return e>=r}),ti=Ll(function(){return arguments}())?Ll:function(e){return Ue(e)&&Ie.call(e,"callee")&&!Tl.call(e,"callee")},ie=E.isArray,dv=el?bn(el):wp;function dn(e){return e!=null&&Xr(e.length)&&!Tt(e)}function Ge(e){return Ue(e)&&dn(e)}function pv(e){return e===!0||e===!1||Ue(e)&&an(e)==be}var Bt=kd||Ha,gv=nl?bn(nl):_p;function mv(e){return Ue(e)&&e.nodeType===1&&!Ji(e)}function vv(e){if(e==null)return!0;if(dn(e)&&(ie(e)||typeof e=="string"||typeof e.splice=="function"||Bt(e)||Ii(e)||ti(e)))return!e.length;var r=nn(e);if(r==Gn||r==Vn)return!e.size;if(zi(e))return!fa(e).length;for(var o in e)if(Ie.call(e,o))return!1;return!0}function yv(e,r){return qi(e,r)}function Tv(e,r,o){o=typeof o=="function"?o:t;var u=o?o(e,r):t;return u===t?qi(e,r,t,o):!!u}function Ua(e){if(!Ue(e))return!1;var r=an(e);return r==Ot||r==Oi||typeof e.message=="string"&&typeof e.name=="string"&&!Ji(e)}function bv(e){return typeof e=="number"&&wl(e)}function Tt(e){if(!Le(e))return!1;var r=an(e);return r==Ze||r==ko||r==$e||r==Yf}function Gu(e){return typeof e=="number"&&e==se(e)}function Xr(e){return typeof e=="number"&&e>-1&&e%1==0&&e<=$n}function Le(e){var r=typeof e;return e!=null&&(r=="object"||r=="function")}function Ue(e){return e!=null&&typeof e=="object"}var Vu=tl?bn(tl):Ep;function wv(e,r){return e===r||ca(e,r,Na(r))}function _v(e,r,o){return o=typeof o=="function"?o:t,ca(e,r,Na(r),o)}function Iv(e){return Wu(e)&&e!=+e}function Ev(e){if(og(e))throw new te(l);return Cl(e)}function Sv(e){return e===null}function Av(e){return e==null}function Wu(e){return typeof e=="number"||Ue(e)&&an(e)==Ri}function Ji(e){if(!Ue(e)||an(e)!=ht)return!1;var r=Er(e);if(r===null)return!0;var o=Ie.call(r,"constructor")&&r.constructor;return typeof o=="function"&&o instanceof o&&br.call(o)==_d}var Ma=il?bn(il):Sp;function Nv(e){return Gu(e)&&e>=-$n&&e<=$n}var Yu=rl?bn(rl):Ap;function Kr(e){return typeof e=="string"||!ie(e)&&Ue(e)&&an(e)==Li}function _n(e){return typeof e=="symbol"||Ue(e)&&an(e)==fr}var Ii=sl?bn(sl):Np;function kv(e){return e===t}function xv(e){return Ue(e)&&nn(e)==Ci}function Ov(e){return Ue(e)&&an(e)==jf}var Rv=Vr(ha),Dv=Vr(function(e,r){return e<=r});function qu(e){if(!e)return[];if(dn(e))return Kr(e)?Wn(e):hn(e);if(Ui&&e[Ui])return cd(e[Ui]());var r=nn(e),o=r==Gn?Zs:r==Vn?vr:Ei;return o(e)}function bt(e){if(!e)return e===0?e:0;if(e=Fn(e),e===st||e===-st){var r=e<0?-1:1;return r*ui}return e===e?e:0}function se(e){var r=bt(e),o=r%1;return r===r?o?r-o:r:0}function ju(e){return e?Kt(se(e),0,Nn):0}function Fn(e){if(typeof e=="number")return e;if(_n(e))return Ht;if(Le(e)){var r=typeof e.valueOf=="function"?e.valueOf():e;e=Le(r)?r+"":r}if(typeof e!="string")return e===0?e:+e;e=fl(e);var o=dh.test(e);return o||gh.test(e)?Hh(e.slice(2),o?2:8):hh.test(e)?Ht:+e}function Hu(e){return ot(e,pn(e))}function Lv(e){return e?Kt(se(e),-$n,$n):e===0?e:0}function we(e){return e==null?"":wn(e)}var Cv=bi(function(e,r){if(zi(r)||dn(r)){ot(r,ze(r),e);return}for(var o in r)Ie.call(r,o)&&Vi(e,o,r[o])}),zu=bi(function(e,r){ot(r,pn(r),e)}),Zr=bi(function(e,r,o,u){ot(r,pn(r),e,u)}),Pv=bi(function(e,r,o,u){ot(r,ze(r),e,u)}),Fv=vt(sa);function Uv(e,r){var o=Ti(e);return r==null?o:Al(o,r)}var Mv=oe(function(e,r){e=Se(e);var o=-1,u=r.length,f=u>2?r[2]:t;for(f&&on(r[0],r[1],f)&&(u=1);++o<u;)for(var g=r[o],m=pn(g),y=-1,_=m.length;++y<_;){var k=m[y],x=e[k];(x===t||qn(x,mi[k])&&!Ie.call(e,k))&&(e[k]=g[k])}return e}),Bv=oe(function(e){return e.push(t,fu),Tn(Qu,t,e)});function $v(e,r){return ol(e,Q(r,3),at)}function Gv(e,r){return ol(e,Q(r,3),oa)}function Vv(e,r){return e==null?e:aa(e,Q(r,3),pn)}function Wv(e,r){return e==null?e:Rl(e,Q(r,3),pn)}function Yv(e,r){return e&&at(e,Q(r,3))}function qv(e,r){return e&&oa(e,Q(r,3))}function jv(e){return e==null?[]:Cr(e,ze(e))}function Hv(e){return e==null?[]:Cr(e,pn(e))}function Ba(e,r,o){var u=e==null?t:Zt(e,r);return u===t?o:u}function zv(e,r){return e!=null&&pu(e,r,vp)}function $a(e,r){return e!=null&&pu(e,r,yp)}var Qv=au(function(e,r,o){r!=null&&typeof r.toString!="function"&&(r=wr.call(r)),e[r]=o},Va(gn)),Jv=au(function(e,r,o){r!=null&&typeof r.toString!="function"&&(r=wr.call(r)),Ie.call(e,r)?e[r].push(o):e[r]=[o]},Q),Xv=oe(Yi);function ze(e){return dn(e)?El(e):fa(e)}function pn(e){return dn(e)?El(e,!0):kp(e)}function Kv(e,r){var o={};return r=Q(r,3),at(e,function(u,f,g){gt(o,r(u,f,g),u)}),o}function Zv(e,r){var o={};return r=Q(r,3),at(e,function(u,f,g){gt(o,f,r(u,f,g))}),o}var ey=bi(function(e,r,o){Pr(e,r,o)}),Qu=bi(function(e,r,o,u){Pr(e,r,o,u)}),ny=vt(function(e,r){var o={};if(e==null)return o;var u=!1;r=Re(r,function(g){return g=Ut(g,e),u||(u=g.length>1),g}),ot(e,Sa(e),o),u&&(o=Ln(o,w|D|S,Qp));for(var f=r.length;f--;)va(o,r[f]);return o});function ty(e,r){return Ju(e,Jr(Q(r)))}var iy=vt(function(e,r){return e==null?{}:Op(e,r)});function Ju(e,r){if(e==null)return{};var o=Re(Sa(e),function(u){return[u]});return r=Q(r),Gl(e,o,function(u,f){return r(u,f[0])})}function ry(e,r,o){r=Ut(r,e);var u=-1,f=r.length;for(f||(f=1,e=t);++u<f;){var g=e==null?t:e[lt(r[u])];g===t&&(u=f,g=o),e=Tt(g)?g.call(e):g}return e}function sy(e,r,o){return e==null?e:ji(e,r,o)}function ay(e,r,o,u){return u=typeof u=="function"?u:t,e==null?e:ji(e,r,o,u)}var Xu=uu(ze),Ku=uu(pn);function oy(e,r,o){var u=ie(e),f=u||Bt(e)||Ii(e);if(r=Q(r,4),o==null){var g=e&&e.constructor;f?o=u?new g:[]:Le(e)?o=Tt(g)?Ti(Er(e)):{}:o={}}return(f?On:at)(e,function(m,y,_){return r(o,m,y,_)}),o}function ly(e,r){return e==null?!0:va(e,r)}function uy(e,r,o){return e==null?e:jl(e,r,ba(o))}function cy(e,r,o,u){return u=typeof u=="function"?u:t,e==null?e:jl(e,r,ba(o),u)}function Ei(e){return e==null?[]:Ks(e,ze(e))}function fy(e){return e==null?[]:Ks(e,pn(e))}function hy(e,r,o){return o===t&&(o=r,r=t),o!==t&&(o=Fn(o),o=o===o?o:0),r!==t&&(r=Fn(r),r=r===r?r:0),Kt(Fn(e),r,o)}function dy(e,r,o){return r=bt(r),o===t?(o=r,r=0):o=bt(o),e=Fn(e),Tp(e,r,o)}function py(e,r,o){if(o&&typeof o!="boolean"&&on(e,r,o)&&(r=o=t),o===t&&(typeof r=="boolean"?(o=r,r=t):typeof e=="boolean"&&(o=e,e=t)),e===t&&r===t?(e=0,r=1):(e=bt(e),r===t?(r=e,e=0):r=bt(r)),e>r){var u=e;e=r,r=u}if(o||e%1||r%1){var f=_l();return en(e+f*(r-e+jh("1e-"+((f+"").length-1))),r)}return pa(e,r)}var gy=wi(function(e,r,o){return r=r.toLowerCase(),e+(o?Zu(r):r)});function Zu(e){return Ga(we(e).toLowerCase())}function ec(e){return e=we(e),e&&e.replace(vh,sd).replace(Fh,"")}function my(e,r,o){e=we(e),r=wn(r);var u=e.length;o=o===t?u:Kt(se(o),0,u);var f=o;return o-=r.length,o>=0&&e.slice(o,f)==r}function vy(e){return e=we(e),e&&Xf.test(e)?e.replace(Ro,ad):e}function yy(e){return e=we(e),e&&ih.test(e)?e.replace(Fs,"\\$&"):e}var Ty=wi(function(e,r,o){return e+(o?"-":"")+r.toLowerCase()}),by=wi(function(e,r,o){return e+(o?" ":"")+r.toLowerCase()}),wy=iu("toLowerCase");function _y(e,r,o){e=we(e),r=se(r);var u=r?pi(e):0;if(!r||u>=r)return e;var f=(r-u)/2;return Gr(kr(f),o)+e+Gr(Nr(f),o)}function Iy(e,r,o){e=we(e),r=se(r);var u=r?pi(e):0;return r&&u<r?e+Gr(r-u,o):e}function Ey(e,r,o){e=we(e),r=se(r);var u=r?pi(e):0;return r&&u<r?Gr(r-u,o)+e:e}function Sy(e,r,o){return o||r==null?r=0:r&&(r=+r),Dd(we(e).replace(Us,""),r||0)}function Ay(e,r,o){return(o?on(e,r,o):r===t)?r=1:r=se(r),ga(we(e),r)}function Ny(){var e=arguments,r=we(e[0]);return e.length<3?r:r.replace(e[1],e[2])}var ky=wi(function(e,r,o){return e+(o?"_":"")+r.toLowerCase()});function xy(e,r,o){return o&&typeof o!="number"&&on(e,r,o)&&(r=o=t),o=o===t?Nn:o>>>0,o?(e=we(e),e&&(typeof r=="string"||r!=null&&!Ma(r))&&(r=wn(r),!r&&di(e))?Mt(Wn(e),0,o):e.split(r,o)):[]}var Oy=wi(function(e,r,o){return e+(o?" ":"")+Ga(r)});function Ry(e,r,o){return e=we(e),o=o==null?0:Kt(se(o),0,e.length),r=wn(r),e.slice(o,o+r.length)==r}function Dy(e,r,o){var u=p.templateSettings;o&&on(e,r,o)&&(r=t),e=we(e),r=Zr({},r,u,cu);var f=Zr({},r.imports,u.imports,cu),g=ze(f),m=Ks(f,g),y,_,k=0,x=r.interpolate||hr,L="__p += '",F=ea((r.escape||hr).source+"|"+x.source+"|"+(x===Do?fh:hr).source+"|"+(r.evaluate||hr).source+"|$","g"),W="//# sourceURL="+(Ie.call(r,"sourceURL")?(r.sourceURL+"").replace(/\s/g," "):"lodash.templateSources["+ ++Gh+"]")+`
`;e.replace(F,function(Z,le,pe,In,ln,En){return pe||(pe=In),L+=e.slice(k,En).replace(yh,od),le&&(y=!0,L+=`' +
__e(`+le+`) +
'`),ln&&(_=!0,L+=`';
`+ln+`;
__p += '`),pe&&(L+=`' +
((__t = (`+pe+`)) == null ? '' : __t) +
'`),k=En+Z.length,Z}),L+=`';
`;var K=Ie.call(r,"variable")&&r.variable;if(!K)L=`with (obj) {
`+L+`
}
`;else if(uh.test(K))throw new te(h);L=(_?L.replace(Hf,""):L).replace(zf,"$1").replace(Qf,"$1;"),L="function("+(K||"obj")+`) {
`+(K?"":`obj || (obj = {});
`)+"var __t, __p = ''"+(y?", __e = _.escape":"")+(_?`, __j = Array.prototype.join;
function print() { __p += __j.call(arguments, '') }
`:`;
`)+L+`return __p
}`;var ae=tc(function(){return me(g,W+"return "+L).apply(t,m)});if(ae.source=L,Ua(ae))throw ae;return ae}function Ly(e){return we(e).toLowerCase()}function Cy(e){return we(e).toUpperCase()}function Py(e,r,o){if(e=we(e),e&&(o||r===t))return fl(e);if(!e||!(r=wn(r)))return e;var u=Wn(e),f=Wn(r),g=hl(u,f),m=dl(u,f)+1;return Mt(u,g,m).join("")}function Fy(e,r,o){if(e=we(e),e&&(o||r===t))return e.slice(0,gl(e)+1);if(!e||!(r=wn(r)))return e;var u=Wn(e),f=dl(u,Wn(r))+1;return Mt(u,0,f).join("")}function Uy(e,r,o){if(e=we(e),e&&(o||r===t))return e.replace(Us,"");if(!e||!(r=wn(r)))return e;var u=Wn(e),f=hl(u,Wn(r));return Mt(u,f).join("")}function My(e,r){var o=ne,u=sn;if(Le(r)){var f="separator"in r?r.separator:f;o="length"in r?se(r.length):o,u="omission"in r?wn(r.omission):u}e=we(e);var g=e.length;if(di(e)){var m=Wn(e);g=m.length}if(o>=g)return e;var y=o-pi(u);if(y<1)return u;var _=m?Mt(m,0,y).join(""):e.slice(0,y);if(f===t)return _+u;if(m&&(y+=_.length-y),Ma(f)){if(e.slice(y).search(f)){var k,x=_;for(f.global||(f=ea(f.source,we(Lo.exec(f))+"g")),f.lastIndex=0;k=f.exec(x);)var L=k.index;_=_.slice(0,L===t?y:L)}}else if(e.indexOf(wn(f),y)!=y){var F=_.lastIndexOf(f);F>-1&&(_=_.slice(0,F))}return _+u}function By(e){return e=we(e),e&&Jf.test(e)?e.replace(Oo,pd):e}var $y=wi(function(e,r,o){return e+(o?" ":"")+r.toUpperCase()}),Ga=iu("toUpperCase");function nc(e,r,o){return e=we(e),r=o?t:r,r===t?ud(e)?vd(e):ed(e):e.match(r)||[]}var tc=oe(function(e,r){try{return Tn(e,t,r)}catch(o){return Ua(o)?o:new te(o)}}),Gy=vt(function(e,r){return On(r,function(o){o=lt(o),gt(e,o,Pa(e[o],e))}),e});function Vy(e){var r=e==null?0:e.length,o=Q();return e=r?Re(e,function(u){if(typeof u[1]!="function")throw new Rn(c);return[o(u[0]),u[1]]}):[],oe(function(u){for(var f=-1;++f<r;){var g=e[f];if(Tn(g[0],this,u))return Tn(g[1],this,u)}})}function Wy(e){return pp(Ln(e,w))}function Va(e){return function(){return e}}function Yy(e,r){return e==null||e!==e?r:e}var qy=su(),jy=su(!0);function gn(e){return e}function Wa(e){return Pl(typeof e=="function"?e:Ln(e,w))}function Hy(e){return Ul(Ln(e,w))}function zy(e,r){return Ml(e,Ln(r,w))}var Qy=oe(function(e,r){return function(o){return Yi(o,e,r)}}),Jy=oe(function(e,r){return function(o){return Yi(e,o,r)}});function Ya(e,r,o){var u=ze(r),f=Cr(r,u);o==null&&!(Le(r)&&(f.length||!u.length))&&(o=r,r=e,e=this,f=Cr(r,ze(r)));var g=!(Le(o)&&"chain"in o)||!!o.chain,m=Tt(e);return On(f,function(y){var _=r[y];e[y]=_,m&&(e.prototype[y]=function(){var k=this.__chain__;if(g||k){var x=e(this.__wrapped__),L=x.__actions__=hn(this.__actions__);return L.push({func:_,args:arguments,thisArg:e}),x.__chain__=k,x}return _.apply(e,Dt([this.value()],arguments))})}),e}function Xy(){return Je._===this&&(Je._=Id),this}function qa(){}function Ky(e){return e=se(e),oe(function(r){return Bl(r,e)})}var Zy=_a(Re),eT=_a(al),nT=_a(Hs);function ic(e){return xa(e)?zs(lt(e)):Rp(e)}function tT(e){return function(r){return e==null?t:Zt(e,r)}}var iT=ou(),rT=ou(!0);function ja(){return[]}function Ha(){return!1}function sT(){return{}}function aT(){return""}function oT(){return!0}function lT(e,r){if(e=se(e),e<1||e>$n)return[];var o=Nn,u=en(e,Nn);r=Q(r),e-=Nn;for(var f=Xs(u,r);++o<e;)r(o);return f}function uT(e){return ie(e)?Re(e,lt):_n(e)?[e]:hn(Iu(we(e)))}function cT(e){var r=++wd;return we(e)+r}var fT=$r(function(e,r){return e+r},0),hT=Ia("ceil"),dT=$r(function(e,r){return e/r},1),pT=Ia("floor");function gT(e){return e&&e.length?Lr(e,gn,la):t}function mT(e,r){return e&&e.length?Lr(e,Q(r,2),la):t}function vT(e){return ul(e,gn)}function yT(e,r){return ul(e,Q(r,2))}function TT(e){return e&&e.length?Lr(e,gn,ha):t}function bT(e,r){return e&&e.length?Lr(e,Q(r,2),ha):t}var wT=$r(function(e,r){return e*r},1),_T=Ia("round"),IT=$r(function(e,r){return e-r},0);function ET(e){return e&&e.length?Js(e,gn):0}function ST(e,r){return e&&e.length?Js(e,Q(r,2)):0}return p.after=Hm,p.ary=Cu,p.assign=Cv,p.assignIn=zu,p.assignInWith=Zr,p.assignWith=Pv,p.at=Fv,p.before=Pu,p.bind=Pa,p.bindAll=Gy,p.bindKey=Fu,p.castArray=sv,p.chain=Ru,p.chunk=pg,p.compact=gg,p.concat=mg,p.cond=Vy,p.conforms=Wy,p.constant=Va,p.countBy=Em,p.create=Uv,p.curry=Uu,p.curryRight=Mu,p.debounce=Bu,p.defaults=Mv,p.defaultsDeep=Bv,p.defer=zm,p.delay=Qm,p.difference=vg,p.differenceBy=yg,p.differenceWith=Tg,p.drop=bg,p.dropRight=wg,p.dropRightWhile=_g,p.dropWhile=Ig,p.fill=Eg,p.filter=Am,p.flatMap=xm,p.flatMapDeep=Om,p.flatMapDepth=Rm,p.flatten=Nu,p.flattenDeep=Sg,p.flattenDepth=Ag,p.flip=Jm,p.flow=qy,p.flowRight=jy,p.fromPairs=Ng,p.functions=jv,p.functionsIn=Hv,p.groupBy=Dm,p.initial=xg,p.intersection=Og,p.intersectionBy=Rg,p.intersectionWith=Dg,p.invert=Qv,p.invertBy=Jv,p.invokeMap=Cm,p.iteratee=Wa,p.keyBy=Pm,p.keys=ze,p.keysIn=pn,p.map=Hr,p.mapKeys=Kv,p.mapValues=Zv,p.matches=Hy,p.matchesProperty=zy,p.memoize=Qr,p.merge=ey,p.mergeWith=Qu,p.method=Qy,p.methodOf=Jy,p.mixin=Ya,p.negate=Jr,p.nthArg=Ky,p.omit=ny,p.omitBy=ty,p.once=Xm,p.orderBy=Fm,p.over=Zy,p.overArgs=Km,p.overEvery=eT,p.overSome=nT,p.partial=Fa,p.partialRight=$u,p.partition=Um,p.pick=iy,p.pickBy=Ju,p.property=ic,p.propertyOf=tT,p.pull=Fg,p.pullAll=xu,p.pullAllBy=Ug,p.pullAllWith=Mg,p.pullAt=Bg,p.range=iT,p.rangeRight=rT,p.rearg=Zm,p.reject=$m,p.remove=$g,p.rest=ev,p.reverse=La,p.sampleSize=Vm,p.set=sy,p.setWith=ay,p.shuffle=Wm,p.slice=Gg,p.sortBy=jm,p.sortedUniq=zg,p.sortedUniqBy=Qg,p.split=xy,p.spread=nv,p.tail=Jg,p.take=Xg,p.takeRight=Kg,p.takeRightWhile=Zg,p.takeWhile=em,p.tap=gm,p.throttle=tv,p.thru=jr,p.toArray=qu,p.toPairs=Xu,p.toPairsIn=Ku,p.toPath=uT,p.toPlainObject=Hu,p.transform=oy,p.unary=iv,p.union=nm,p.unionBy=tm,p.unionWith=im,p.uniq=rm,p.uniqBy=sm,p.uniqWith=am,p.unset=ly,p.unzip=Ca,p.unzipWith=Ou,p.update=uy,p.updateWith=cy,p.values=Ei,p.valuesIn=fy,p.without=om,p.words=nc,p.wrap=rv,p.xor=lm,p.xorBy=um,p.xorWith=cm,p.zip=fm,p.zipObject=hm,p.zipObjectDeep=dm,p.zipWith=pm,p.entries=Xu,p.entriesIn=Ku,p.extend=zu,p.extendWith=Zr,Ya(p,p),p.add=fT,p.attempt=tc,p.camelCase=gy,p.capitalize=Zu,p.ceil=hT,p.clamp=hy,p.clone=av,p.cloneDeep=lv,p.cloneDeepWith=uv,p.cloneWith=ov,p.conformsTo=cv,p.deburr=ec,p.defaultTo=Yy,p.divide=dT,p.endsWith=my,p.eq=qn,p.escape=vy,p.escapeRegExp=yy,p.every=Sm,p.find=Nm,p.findIndex=Su,p.findKey=$v,p.findLast=km,p.findLastIndex=Au,p.findLastKey=Gv,p.floor=pT,p.forEach=Du,p.forEachRight=Lu,p.forIn=Vv,p.forInRight=Wv,p.forOwn=Yv,p.forOwnRight=qv,p.get=Ba,p.gt=fv,p.gte=hv,p.has=zv,p.hasIn=$a,p.head=ku,p.identity=gn,p.includes=Lm,p.indexOf=kg,p.inRange=dy,p.invoke=Xv,p.isArguments=ti,p.isArray=ie,p.isArrayBuffer=dv,p.isArrayLike=dn,p.isArrayLikeObject=Ge,p.isBoolean=pv,p.isBuffer=Bt,p.isDate=gv,p.isElement=mv,p.isEmpty=vv,p.isEqual=yv,p.isEqualWith=Tv,p.isError=Ua,p.isFinite=bv,p.isFunction=Tt,p.isInteger=Gu,p.isLength=Xr,p.isMap=Vu,p.isMatch=wv,p.isMatchWith=_v,p.isNaN=Iv,p.isNative=Ev,p.isNil=Av,p.isNull=Sv,p.isNumber=Wu,p.isObject=Le,p.isObjectLike=Ue,p.isPlainObject=Ji,p.isRegExp=Ma,p.isSafeInteger=Nv,p.isSet=Yu,p.isString=Kr,p.isSymbol=_n,p.isTypedArray=Ii,p.isUndefined=kv,p.isWeakMap=xv,p.isWeakSet=Ov,p.join=Lg,p.kebabCase=Ty,p.last=Pn,p.lastIndexOf=Cg,p.lowerCase=by,p.lowerFirst=wy,p.lt=Rv,p.lte=Dv,p.max=gT,p.maxBy=mT,p.mean=vT,p.meanBy=yT,p.min=TT,p.minBy=bT,p.stubArray=ja,p.stubFalse=Ha,p.stubObject=sT,p.stubString=aT,p.stubTrue=oT,p.multiply=wT,p.nth=Pg,p.noConflict=Xy,p.noop=qa,p.now=zr,p.pad=_y,p.padEnd=Iy,p.padStart=Ey,p.parseInt=Sy,p.random=py,p.reduce=Mm,p.reduceRight=Bm,p.repeat=Ay,p.replace=Ny,p.result=ry,p.round=_T,p.runInContext=b,p.sample=Gm,p.size=Ym,p.snakeCase=ky,p.some=qm,p.sortedIndex=Vg,p.sortedIndexBy=Wg,p.sortedIndexOf=Yg,p.sortedLastIndex=qg,p.sortedLastIndexBy=jg,p.sortedLastIndexOf=Hg,p.startCase=Oy,p.startsWith=Ry,p.subtract=IT,p.sum=ET,p.sumBy=ST,p.template=Dy,p.times=lT,p.toFinite=bt,p.toInteger=se,p.toLength=ju,p.toLower=Ly,p.toNumber=Fn,p.toSafeInteger=Lv,p.toString=we,p.toUpper=Cy,p.trim=Py,p.trimEnd=Fy,p.trimStart=Uy,p.truncate=My,p.unescape=By,p.uniqueId=cT,p.upperCase=$y,p.upperFirst=Ga,p.each=Du,p.eachRight=Lu,p.first=ku,Ya(p,function(){var e={};return at(p,function(r,o){Ie.call(p.prototype,o)||(e[o]=r)}),e}(),{chain:!1}),p.VERSION=s,On(["bind","bindKey","curry","curryRight","partial","partialRight"],function(e){p[e].placeholder=p}),On(["drop","take"],function(e,r){fe.prototype[e]=function(o){o=o===t?1:He(se(o),0);var u=this.__filtered__&&!r?new fe(this):this.clone();return u.__filtered__?u.__takeCount__=en(o,u.__takeCount__):u.__views__.push({size:en(o,Nn),type:e+(u.__dir__<0?"Right":"")}),u},fe.prototype[e+"Right"]=function(o){return this.reverse()[e](o).reverse()}}),On(["filter","map","takeWhile"],function(e,r){var o=r+1,u=o==ur||o==cr;fe.prototype[e]=function(f){var g=this.clone();return g.__iteratees__.push({iteratee:Q(f,3),type:o}),g.__filtered__=g.__filtered__||u,g}}),On(["head","last"],function(e,r){var o="take"+(r?"Right":"");fe.prototype[e]=function(){return this[o](1).value()[0]}}),On(["initial","tail"],function(e,r){var o="drop"+(r?"":"Right");fe.prototype[e]=function(){return this.__filtered__?new fe(this):this[o](1)}}),fe.prototype.compact=function(){return this.filter(gn)},fe.prototype.find=function(e){return this.filter(e).head()},fe.prototype.findLast=function(e){return this.reverse().find(e)},fe.prototype.invokeMap=oe(function(e,r){return typeof e=="function"?new fe(this):this.map(function(o){return Yi(o,e,r)})}),fe.prototype.reject=function(e){return this.filter(Jr(Q(e)))},fe.prototype.slice=function(e,r){e=se(e);var o=this;return o.__filtered__&&(e>0||r<0)?new fe(o):(e<0?o=o.takeRight(-e):e&&(o=o.drop(e)),r!==t&&(r=se(r),o=r<0?o.dropRight(-r):o.take(r-e)),o)},fe.prototype.takeRightWhile=function(e){return this.reverse().takeWhile(e).reverse()},fe.prototype.toArray=function(){return this.take(Nn)},at(fe.prototype,function(e,r){var o=/^(?:filter|find|map|reject)|While$/.test(r),u=/^(?:head|last)$/.test(r),f=p[u?"take"+(r=="last"?"Right":""):r],g=u||/^find/.test(r);f&&(p.prototype[r]=function(){var m=this.__wrapped__,y=u?[1]:arguments,_=m instanceof fe,k=y[0],x=_||ie(m),L=function(le){var pe=f.apply(p,Dt([le],y));return u&&F?pe[0]:pe};x&&o&&typeof k=="function"&&k.length!=1&&(_=x=!1);var F=this.__chain__,W=!!this.__actions__.length,K=g&&!F,ae=_&&!W;if(!g&&x){m=ae?m:new fe(this);var Z=e.apply(m,y);return Z.__actions__.push({func:jr,args:[L],thisArg:t}),new Dn(Z,F)}return K&&ae?e.apply(this,y):(Z=this.thru(L),K?u?Z.value()[0]:Z.value():Z)})}),On(["pop","push","shift","sort","splice","unshift"],function(e){var r=yr[e],o=/^(?:push|sort|unshift)$/.test(e)?"tap":"thru",u=/^(?:pop|shift)$/.test(e);p.prototype[e]=function(){var f=arguments;if(u&&!this.__chain__){var g=this.value();return r.apply(ie(g)?g:[],f)}return this[o](function(m){return r.apply(ie(m)?m:[],f)})}}),at(fe.prototype,function(e,r){var o=p[r];if(o){var u=o.name+"";Ie.call(yi,u)||(yi[u]=[]),yi[u].push({name:r,func:o})}}),yi[Br(t,z).name]=[{name:"wrapper",func:t}],fe.prototype.clone=Bd,fe.prototype.reverse=$d,fe.prototype.value=Gd,p.prototype.at=mm,p.prototype.chain=vm,p.prototype.commit=ym,p.prototype.next=Tm,p.prototype.plant=wm,p.prototype.reverse=_m,p.prototype.toJSON=p.prototype.valueOf=p.prototype.value=Im,p.prototype.first=p.prototype.head,Ui&&(p.prototype[Ui]=bm),p},gi=yd();zt?((zt.exports=gi)._=gi,Ws._=gi):Je._=gi}).call(Xi)})(hs,hs.exports);var h0=hs.exports;const At=u0(h0),d0="/api/dev-2.x/graphql-gtfs",p0="https://docs.opentripplanner.org/en/dev-2.x/images/otp-logo.svg",g0='[{"title":"Introduction","content":"\\n# OTP GTFS GraphQL API documentation\\n\\nThis is the static documentation of the OTP GraphQL GTFS API.\\n\\nThe GraphQL endpoint of your instance, which you should point your tooling to, is \\n`http://localhost:8080/otp/gtfs/v1`\\n\\nPlease also check out the interactive API explorer built into every instance and available\\nat http://localhost:8080/graphiql \\n\\n![GraphiQL screenshot](https://docs.opentripplanner.org/en/dev-2.x/images/graphiql.png)\\n\\n## Configuration\\n\\nThis API is activated by default.\\n\\nTo learn how to deactivate it, read the\\n[documentation](https://docs.opentripplanner.org/en/dev-2.x/apis/GTFS-GraphQ-API/).\\n"}]',m0="OTP GTFS GraphQL API",v0='{"Polyline":"<>","GeoJson":"<>","OffsetDateTime":"2024-02-05T18:04:23+01:00"}',y0="true",nf={SITE_ROOT:d0,APP_LOGO:p0,PAGES:g0,APP_TITLE:m0,QUERY_GENERATION_FACTORIES:v0,MAGIDOC_GENERATE:y0};function C_(i){return i.get(nf)}function wo(i,n){return i.getOrDefault(nf,n)}function ge(i,n){if(!!!i)throw new Error(n)}function Nt(i){return typeof i=="object"&&i!==null}function Jn(i,n){if(!!!i)throw new Error(n??"Unexpected invariant triggered.")}const T0=/\r\n|[\n\r]/g;function ao(i,n){let t=0,s=1;for(const a of i.body.matchAll(T0)){if(typeof a.index=="number"||Jn(!1),a.index>=n)break;t=a.index+a[0].length,s+=1}return{line:s,column:n+1-t}}function b0(i){return tf(i.source,ao(i.source,i.start))}function tf(i,n){const t=i.locationOffset.column-1,s="".padStart(t)+i.body,a=n.line-1,l=i.locationOffset.line-1,c=n.line+l,h=n.line===1?t:0,d=n.column+h,v=`${i.name}:${c}:${d}
`,T=s.split(/\r\n|[\n\r]/g),w=T[a];if(w.length>120){const D=Math.floor(d/80),S=d%80,C=[];for(let P=0;P<w.length;P+=80)C.push(w.slice(P,P+80));return v+kc([[`${c} |`,C[0]],...C.slice(1,D+1).map(P=>["|",P]),["|","^".padStart(S)],["|",C[D+1]]])}return v+kc([[`${c-1} |`,T[a-1]],[`${c} |`,w],["|","^".padStart(d)],[`${c+1} |`,T[a+1]]])}function kc(i){const n=i.filter(([s,a])=>a!==void 0),t=Math.max(...n.map(([s])=>s.length));return n.map(([s,a])=>s.padStart(t)+(a?" "+a:"")).join(`
`)}function w0(i){const n=i[0];return n==null||"kind"in n||"length"in n?{nodes:n,source:i[1],positions:i[2],path:i[3],originalError:i[4],extensions:i[5]}:n}class Y extends Error{constructor(n,...t){var s,a,l;const{nodes:c,source:h,positions:d,path:v,originalError:T,extensions:w}=w0(t);super(n),this.name="GraphQLError",this.path=v??void 0,this.originalError=T??void 0,this.nodes=xc(Array.isArray(c)?c:c?[c]:void 0);const D=xc((s=this.nodes)===null||s===void 0?void 0:s.map(C=>C.loc).filter(C=>C!=null));this.source=h??(D==null||(a=D[0])===null||a===void 0?void 0:a.source),this.positions=d??(D==null?void 0:D.map(C=>C.start)),this.locations=d&&h?d.map(C=>ao(h,C)):D==null?void 0:D.map(C=>ao(C.source,C.start));const S=Nt(T==null?void 0:T.extensions)?T==null?void 0:T.extensions:void 0;this.extensions=(l=w??S)!==null&&l!==void 0?l:Object.create(null),Object.defineProperties(this,{message:{writable:!0,enumerable:!0},name:{enumerable:!1},nodes:{enumerable:!1},source:{enumerable:!1},positions:{enumerable:!1},originalError:{enumerable:!1}}),T!=null&&T.stack?Object.defineProperty(this,"stack",{value:T.stack,writable:!0,configurable:!0}):Error.captureStackTrace?Error.captureStackTrace(this,Y):Object.defineProperty(this,"stack",{value:Error().stack,writable:!0,configurable:!0})}get[Symbol.toStringTag](){return"GraphQLError"}toString(){let n=this.message;if(this.nodes)for(const t of this.nodes)t.loc&&(n+=`

`+b0(t.loc));else if(this.source&&this.locations)for(const t of this.locations)n+=`

`+tf(this.source,t);return n}toJSON(){const n={message:this.message};return this.locations!=null&&(n.locations=this.locations),this.path!=null&&(n.path=this.path),this.extensions!=null&&Object.keys(this.extensions).length>0&&(n.extensions=this.extensions),n}}function xc(i){return i===void 0||i.length===0?void 0:i}function Qe(i,n,t){return new Y(`Syntax Error: ${t}`,{source:i,positions:[n]})}class _0{constructor(n,t,s){this.start=n.start,this.end=t.end,this.startToken=n,this.endToken=t,this.source=s}get[Symbol.toStringTag](){return"Location"}toJSON(){return{start:this.start,end:this.end}}}class rf{constructor(n,t,s,a,l,c){this.kind=n,this.start=t,this.end=s,this.line=a,this.column=l,this.value=c,this.prev=null,this.next=null}get[Symbol.toStringTag](){return"Token"}toJSON(){return{kind:this.kind,value:this.value,line:this.line,column:this.column}}}const sf={Name:[],Document:["definitions"],OperationDefinition:["name","variableDefinitions","directives","selectionSet"],VariableDefinition:["variable","type","defaultValue","directives"],Variable:["name"],SelectionSet:["selections"],Field:["alias","name","arguments","directives","selectionSet"],Argument:["name","value"],FragmentSpread:["name","directives"],InlineFragment:["typeCondition","directives","selectionSet"],FragmentDefinition:["name","variableDefinitions","typeCondition","directives","selectionSet"],IntValue:[],FloatValue:[],StringValue:[],BooleanValue:[],NullValue:[],EnumValue:[],ListValue:["values"],ObjectValue:["fields"],ObjectField:["name","value"],Directive:["name","arguments"],NamedType:["name"],ListType:["type"],NonNullType:["type"],SchemaDefinition:["description","directives","operationTypes"],OperationTypeDefinition:["type"],ScalarTypeDefinition:["description","name","directives"],ObjectTypeDefinition:["description","name","interfaces","directives","fields"],FieldDefinition:["description","name","arguments","type","directives"],InputValueDefinition:["description","name","type","defaultValue","directives"],InterfaceTypeDefinition:["description","name","interfaces","directives","fields"],UnionTypeDefinition:["description","name","directives","types"],EnumTypeDefinition:["description","name","directives","values"],EnumValueDefinition:["description","name","directives"],InputObjectTypeDefinition:["description","name","directives","fields"],DirectiveDefinition:["description","name","arguments","locations"],SchemaExtension:["directives","operationTypes"],ScalarTypeExtension:["name","directives"],ObjectTypeExtension:["name","interfaces","directives","fields"],InterfaceTypeExtension:["name","interfaces","directives","fields"],UnionTypeExtension:["name","directives","types"],EnumTypeExtension:["name","directives","values"],InputObjectTypeExtension:["name","directives","fields"]},I0=new Set(Object.keys(sf));function Oc(i){const n=i==null?void 0:i.kind;return typeof n=="string"&&I0.has(n)}var Un;(function(i){i.QUERY="query",i.MUTATION="mutation",i.SUBSCRIPTION="subscription"})(Un||(Un={}));var j;(function(i){i.QUERY="QUERY",i.MUTATION="MUTATION",i.SUBSCRIPTION="SUBSCRIPTION",i.FIELD="FIELD",i.FRAGMENT_DEFINITION="FRAGMENT_DEFINITION",i.FRAGMENT_SPREAD="FRAGMENT_SPREAD",i.INLINE_FRAGMENT="INLINE_FRAGMENT",i.VARIABLE_DEFINITION="VARIABLE_DEFINITION",i.SCHEMA="SCHEMA",i.SCALAR="SCALAR",i.OBJECT="OBJECT",i.FIELD_DEFINITION="FIELD_DEFINITION",i.ARGUMENT_DEFINITION="ARGUMENT_DEFINITION",i.INTERFACE="INTERFACE",i.UNION="UNION",i.ENUM="ENUM",i.ENUM_VALUE="ENUM_VALUE",i.INPUT_OBJECT="INPUT_OBJECT",i.INPUT_FIELD_DEFINITION="INPUT_FIELD_DEFINITION"})(j||(j={}));var I;(function(i){i.NAME="Name",i.DOCUMENT="Document",i.OPERATION_DEFINITION="OperationDefinition",i.VARIABLE_DEFINITION="VariableDefinition",i.SELECTION_SET="SelectionSet",i.FIELD="Field",i.ARGUMENT="Argument",i.FRAGMENT_SPREAD="FragmentSpread",i.INLINE_FRAGMENT="InlineFragment",i.FRAGMENT_DEFINITION="FragmentDefinition",i.VARIABLE="Variable",i.INT="IntValue",i.FLOAT="FloatValue",i.STRING="StringValue",i.BOOLEAN="BooleanValue",i.NULL="NullValue",i.ENUM="EnumValue",i.LIST="ListValue",i.OBJECT="ObjectValue",i.OBJECT_FIELD="ObjectField",i.DIRECTIVE="Directive",i.NAMED_TYPE="NamedType",i.LIST_TYPE="ListType",i.NON_NULL_TYPE="NonNullType",i.SCHEMA_DEFINITION="SchemaDefinition",i.OPERATION_TYPE_DEFINITION="OperationTypeDefinition",i.SCALAR_TYPE_DEFINITION="ScalarTypeDefinition",i.OBJECT_TYPE_DEFINITION="ObjectTypeDefinition",i.FIELD_DEFINITION="FieldDefinition",i.INPUT_VALUE_DEFINITION="InputValueDefinition",i.INTERFACE_TYPE_DEFINITION="InterfaceTypeDefinition",i.UNION_TYPE_DEFINITION="UnionTypeDefinition",i.ENUM_TYPE_DEFINITION="EnumTypeDefinition",i.ENUM_VALUE_DEFINITION="EnumValueDefinition",i.INPUT_OBJECT_TYPE_DEFINITION="InputObjectTypeDefinition",i.DIRECTIVE_DEFINITION="DirectiveDefinition",i.SCHEMA_EXTENSION="SchemaExtension",i.SCALAR_TYPE_EXTENSION="ScalarTypeExtension",i.OBJECT_TYPE_EXTENSION="ObjectTypeExtension",i.INTERFACE_TYPE_EXTENSION="InterfaceTypeExtension",i.UNION_TYPE_EXTENSION="UnionTypeExtension",i.ENUM_TYPE_EXTENSION="EnumTypeExtension",i.INPUT_OBJECT_TYPE_EXTENSION="InputObjectTypeExtension"})(I||(I={}));function oo(i){return i===9||i===32}function ir(i){return i>=48&&i<=57}function af(i){return i>=97&&i<=122||i>=65&&i<=90}function _o(i){return af(i)||i===95}function of(i){return af(i)||ir(i)||i===95}function E0(i){var n;let t=Number.MAX_SAFE_INTEGER,s=null,a=-1;for(let c=0;c<i.length;++c){var l;const h=i[c],d=S0(h);d!==h.length&&(s=(l=s)!==null&&l!==void 0?l:c,a=c,c!==0&&d<t&&(t=d))}return i.map((c,h)=>h===0?c:c.slice(t)).slice((n=s)!==null&&n!==void 0?n:0,a+1)}function S0(i){let n=0;for(;n<i.length&&oo(i.charCodeAt(n));)++n;return n}function A0(i,n){const t=i.replace(/"""/g,'\\"""'),s=t.split(/\r\n|[\n\r]/g),a=s.length===1,l=s.length>1&&s.slice(1).every(S=>S.length===0||oo(S.charCodeAt(0))),c=t.endsWith('\\"""'),h=i.endsWith('"')&&!c,d=i.endsWith("\\"),v=h||d,T=!(n!=null&&n.minimize)&&(!a||i.length>70||v||l||c);let w="";const D=a&&oo(i.charCodeAt(0));return(T&&!D||l)&&(w+=`
`),w+=t,(T||v)&&(w+=`
`),'"""'+w+'"""'}var O;(function(i){i.SOF="<SOF>",i.EOF="<EOF>",i.BANG="!",i.DOLLAR="$",i.AMP="&",i.PAREN_L="(",i.PAREN_R=")",i.SPREAD="...",i.COLON=":",i.EQUALS="=",i.AT="@",i.BRACKET_L="[",i.BRACKET_R="]",i.BRACE_L="{",i.PIPE="|",i.BRACE_R="}",i.NAME="Name",i.INT="Int",i.FLOAT="Float",i.STRING="String",i.BLOCK_STRING="BlockString",i.COMMENT="Comment"})(O||(O={}));class N0{constructor(n){const t=new rf(O.SOF,0,0,0,0);this.source=n,this.lastToken=t,this.token=t,this.line=1,this.lineStart=0}get[Symbol.toStringTag](){return"Lexer"}advance(){return this.lastToken=this.token,this.token=this.lookahead()}lookahead(){let n=this.token;if(n.kind!==O.EOF)do if(n.next)n=n.next;else{const t=x0(this,n.end);n.next=t,t.prev=n,n=t}while(n.kind===O.COMMENT);return n}}function k0(i){return i===O.BANG||i===O.DOLLAR||i===O.AMP||i===O.PAREN_L||i===O.PAREN_R||i===O.SPREAD||i===O.COLON||i===O.EQUALS||i===O.AT||i===O.BRACKET_L||i===O.BRACKET_R||i===O.BRACE_L||i===O.PIPE||i===O.BRACE_R}function ki(i){return i>=0&&i<=55295||i>=57344&&i<=1114111}function Ts(i,n){return lf(i.charCodeAt(n))&&uf(i.charCodeAt(n+1))}function lf(i){return i>=55296&&i<=56319}function uf(i){return i>=56320&&i<=57343}function ri(i,n){const t=i.source.body.codePointAt(n);if(t===void 0)return O.EOF;if(t>=32&&t<=126){const s=String.fromCodePoint(t);return s==='"'?`'"'`:`"${s}"`}return"U+"+t.toString(16).toUpperCase().padStart(4,"0")}function Ye(i,n,t,s,a){const l=i.line,c=1+t-i.lineStart;return new rf(n,t,s,l,c,a)}function x0(i,n){const t=i.source.body,s=t.length;let a=n;for(;a<s;){const l=t.charCodeAt(a);switch(l){case 65279:case 9:case 32:case 44:++a;continue;case 10:++a,++i.line,i.lineStart=a;continue;case 13:t.charCodeAt(a+1)===10?a+=2:++a,++i.line,i.lineStart=a;continue;case 35:return O0(i,a);case 33:return Ye(i,O.BANG,a,a+1);case 36:return Ye(i,O.DOLLAR,a,a+1);case 38:return Ye(i,O.AMP,a,a+1);case 40:return Ye(i,O.PAREN_L,a,a+1);case 41:return Ye(i,O.PAREN_R,a,a+1);case 46:if(t.charCodeAt(a+1)===46&&t.charCodeAt(a+2)===46)return Ye(i,O.SPREAD,a,a+3);break;case 58:return Ye(i,O.COLON,a,a+1);case 61:return Ye(i,O.EQUALS,a,a+1);case 64:return Ye(i,O.AT,a,a+1);case 91:return Ye(i,O.BRACKET_L,a,a+1);case 93:return Ye(i,O.BRACKET_R,a,a+1);case 123:return Ye(i,O.BRACE_L,a,a+1);case 124:return Ye(i,O.PIPE,a,a+1);case 125:return Ye(i,O.BRACE_R,a,a+1);case 34:return t.charCodeAt(a+1)===34&&t.charCodeAt(a+2)===34?F0(i,a):D0(i,a)}if(ir(l)||l===45)return R0(i,a,l);if(_o(l))return U0(i,a);throw Qe(i.source,a,l===39?`Unexpected single quote character ('), did you mean to use a double quote (")?`:ki(l)||Ts(t,a)?`Unexpected character: ${ri(i,a)}.`:`Invalid character: ${ri(i,a)}.`)}return Ye(i,O.EOF,s,s)}function O0(i,n){const t=i.source.body,s=t.length;let a=n+1;for(;a<s;){const l=t.charCodeAt(a);if(l===10||l===13)break;if(ki(l))++a;else if(Ts(t,a))a+=2;else break}return Ye(i,O.COMMENT,n,a,t.slice(n+1,a))}function R0(i,n,t){const s=i.source.body;let a=n,l=t,c=!1;if(l===45&&(l=s.charCodeAt(++a)),l===48){if(l=s.charCodeAt(++a),ir(l))throw Qe(i.source,a,`Invalid number, unexpected digit after 0: ${ri(i,a)}.`)}else a=Xa(i,a,l),l=s.charCodeAt(a);if(l===46&&(c=!0,l=s.charCodeAt(++a),a=Xa(i,a,l),l=s.charCodeAt(a)),(l===69||l===101)&&(c=!0,l=s.charCodeAt(++a),(l===43||l===45)&&(l=s.charCodeAt(++a)),a=Xa(i,a,l),l=s.charCodeAt(a)),l===46||_o(l))throw Qe(i.source,a,`Invalid number, expected digit but got: ${ri(i,a)}.`);return Ye(i,c?O.FLOAT:O.INT,n,a,s.slice(n,a))}function Xa(i,n,t){if(!ir(t))throw Qe(i.source,n,`Invalid number, expected digit but got: ${ri(i,n)}.`);const s=i.source.body;let a=n+1;for(;ir(s.charCodeAt(a));)++a;return a}function D0(i,n){const t=i.source.body,s=t.length;let a=n+1,l=a,c="";for(;a<s;){const h=t.charCodeAt(a);if(h===34)return c+=t.slice(l,a),Ye(i,O.STRING,n,a+1,c);if(h===92){c+=t.slice(l,a);const d=t.charCodeAt(a+1)===117?t.charCodeAt(a+2)===123?L0(i,a):C0(i,a):P0(i,a);c+=d.value,a+=d.size,l=a;continue}if(h===10||h===13)break;if(ki(h))++a;else if(Ts(t,a))a+=2;else throw Qe(i.source,a,`Invalid character within String: ${ri(i,a)}.`)}throw Qe(i.source,a,"Unterminated string.")}function L0(i,n){const t=i.source.body;let s=0,a=3;for(;a<12;){const l=t.charCodeAt(n+a++);if(l===125){if(a<5||!ki(s))break;return{value:String.fromCodePoint(s),size:a}}if(s=s<<4|Ki(l),s<0)break}throw Qe(i.source,n,`Invalid Unicode escape sequence: "${t.slice(n,n+a)}".`)}function C0(i,n){const t=i.source.body,s=Rc(t,n+2);if(ki(s))return{value:String.fromCodePoint(s),size:6};if(lf(s)&&t.charCodeAt(n+6)===92&&t.charCodeAt(n+7)===117){const a=Rc(t,n+8);if(uf(a))return{value:String.fromCodePoint(s,a),size:12}}throw Qe(i.source,n,`Invalid Unicode escape sequence: "${t.slice(n,n+6)}".`)}function Rc(i,n){return Ki(i.charCodeAt(n))<<12|Ki(i.charCodeAt(n+1))<<8|Ki(i.charCodeAt(n+2))<<4|Ki(i.charCodeAt(n+3))}function Ki(i){return i>=48&&i<=57?i-48:i>=65&&i<=70?i-55:i>=97&&i<=102?i-87:-1}function P0(i,n){const t=i.source.body;switch(t.charCodeAt(n+1)){case 34:return{value:'"',size:2};case 92:return{value:"\\",size:2};case 47:return{value:"/",size:2};case 98:return{value:"\b",size:2};case 102:return{value:"\f",size:2};case 110:return{value:`
`,size:2};case 114:return{value:"\r",size:2};case 116:return{value:"	",size:2}}throw Qe(i.source,n,`Invalid character escape sequence: "${t.slice(n,n+2)}".`)}function F0(i,n){const t=i.source.body,s=t.length;let a=i.lineStart,l=n+3,c=l,h="";const d=[];for(;l<s;){const v=t.charCodeAt(l);if(v===34&&t.charCodeAt(l+1)===34&&t.charCodeAt(l+2)===34){h+=t.slice(c,l),d.push(h);const T=Ye(i,O.BLOCK_STRING,n,l+3,E0(d).join(`
`));return i.line+=d.length-1,i.lineStart=a,T}if(v===92&&t.charCodeAt(l+1)===34&&t.charCodeAt(l+2)===34&&t.charCodeAt(l+3)===34){h+=t.slice(c,l),c=l+1,l+=4;continue}if(v===10||v===13){h+=t.slice(c,l),d.push(h),v===13&&t.charCodeAt(l+1)===10?l+=2:++l,h="",c=l,a=l;continue}if(ki(v))++l;else if(Ts(t,l))l+=2;else throw Qe(i.source,l,`Invalid character within String: ${ri(i,l)}.`)}throw Qe(i.source,l,"Unterminated string.")}function U0(i,n){const t=i.source.body,s=t.length;let a=n+1;for(;a<s;){const l=t.charCodeAt(a);if(of(l))++a;else break}return Ye(i,O.NAME,n,a,t.slice(n,a))}const M0=10,cf=2;function q(i){return bs(i,[])}function bs(i,n){switch(typeof i){case"string":return JSON.stringify(i);case"function":return i.name?`[function ${i.name}]`:"[function]";case"object":return B0(i,n);default:return String(i)}}function B0(i,n){if(i===null)return"null";if(n.includes(i))return"[Circular]";const t=[...n,i];if($0(i)){const s=i.toJSON();if(s!==i)return typeof s=="string"?s:bs(s,t)}else if(Array.isArray(i))return V0(i,t);return G0(i,t)}function $0(i){return typeof i.toJSON=="function"}function G0(i,n){const t=Object.entries(i);return t.length===0?"{}":n.length>cf?"["+W0(i)+"]":"{ "+t.map(([a,l])=>a+": "+bs(l,n)).join(", ")+" }"}function V0(i,n){if(i.length===0)return"[]";if(n.length>cf)return"[Array]";const t=Math.min(M0,i.length),s=i.length-t,a=[];for(let l=0;l<t;++l)a.push(bs(i[l],n));return s===1?a.push("... 1 more item"):s>1&&a.push(`... ${s} more items`),"["+a.join(", ")+"]"}function W0(i){const n=Object.prototype.toString.call(i).replace(/^\[object /,"").replace(/]$/,"");if(n==="Object"&&typeof i.constructor=="function"){const t=i.constructor.name;if(typeof t=="string"&&t!=="")return t}return n}const ft=function(n,t){return n instanceof t};class ff{constructor(n,t="GraphQL request",s={line:1,column:1}){typeof n=="string"||ge(!1,`Body must be a string. Received: ${q(n)}.`),this.body=n,this.name=t,this.locationOffset=s,this.locationOffset.line>0||ge(!1,"line in locationOffset is 1-indexed and must be positive."),this.locationOffset.column>0||ge(!1,"column in locationOffset is 1-indexed and must be positive.")}get[Symbol.toStringTag](){return"Source"}}function Y0(i){return ft(i,ff)}function q0(i,n){return new hf(i,n).parseDocument()}function j0(i,n){const t=new hf(i,n);t.expectToken(O.SOF);const s=t.parseValueLiteral(!1);return t.expectToken(O.EOF),s}class hf{constructor(n,t={}){const s=Y0(n)?n:new ff(n);this._lexer=new N0(s),this._options=t,this._tokenCounter=0}parseName(){const n=this.expectToken(O.NAME);return this.node(n,{kind:I.NAME,value:n.value})}parseDocument(){return this.node(this._lexer.token,{kind:I.DOCUMENT,definitions:this.many(O.SOF,this.parseDefinition,O.EOF)})}parseDefinition(){if(this.peek(O.BRACE_L))return this.parseOperationDefinition();const n=this.peekDescription(),t=n?this._lexer.lookahead():this._lexer.token;if(t.kind===O.NAME){switch(t.value){case"schema":return this.parseSchemaDefinition();case"scalar":return this.parseScalarTypeDefinition();case"type":return this.parseObjectTypeDefinition();case"interface":return this.parseInterfaceTypeDefinition();case"union":return this.parseUnionTypeDefinition();case"enum":return this.parseEnumTypeDefinition();case"input":return this.parseInputObjectTypeDefinition();case"directive":return this.parseDirectiveDefinition()}if(n)throw Qe(this._lexer.source,this._lexer.token.start,"Unexpected description, descriptions are supported only on type definitions.");switch(t.value){case"query":case"mutation":case"subscription":return this.parseOperationDefinition();case"fragment":return this.parseFragmentDefinition();case"extend":return this.parseTypeSystemExtension()}}throw this.unexpected(t)}parseOperationDefinition(){const n=this._lexer.token;if(this.peek(O.BRACE_L))return this.node(n,{kind:I.OPERATION_DEFINITION,operation:Un.QUERY,name:void 0,variableDefinitions:[],directives:[],selectionSet:this.parseSelectionSet()});const t=this.parseOperationType();let s;return this.peek(O.NAME)&&(s=this.parseName()),this.node(n,{kind:I.OPERATION_DEFINITION,operation:t,name:s,variableDefinitions:this.parseVariableDefinitions(),directives:this.parseDirectives(!1),selectionSet:this.parseSelectionSet()})}parseOperationType(){const n=this.expectToken(O.NAME);switch(n.value){case"query":return Un.QUERY;case"mutation":return Un.MUTATION;case"subscription":return Un.SUBSCRIPTION}throw this.unexpected(n)}parseVariableDefinitions(){return this.optionalMany(O.PAREN_L,this.parseVariableDefinition,O.PAREN_R)}parseVariableDefinition(){return this.node(this._lexer.token,{kind:I.VARIABLE_DEFINITION,variable:this.parseVariable(),type:(this.expectToken(O.COLON),this.parseTypeReference()),defaultValue:this.expectOptionalToken(O.EQUALS)?this.parseConstValueLiteral():void 0,directives:this.parseConstDirectives()})}parseVariable(){const n=this._lexer.token;return this.expectToken(O.DOLLAR),this.node(n,{kind:I.VARIABLE,name:this.parseName()})}parseSelectionSet(){return this.node(this._lexer.token,{kind:I.SELECTION_SET,selections:this.many(O.BRACE_L,this.parseSelection,O.BRACE_R)})}parseSelection(){return this.peek(O.SPREAD)?this.parseFragment():this.parseField()}parseField(){const n=this._lexer.token,t=this.parseName();let s,a;return this.expectOptionalToken(O.COLON)?(s=t,a=this.parseName()):a=t,this.node(n,{kind:I.FIELD,alias:s,name:a,arguments:this.parseArguments(!1),directives:this.parseDirectives(!1),selectionSet:this.peek(O.BRACE_L)?this.parseSelectionSet():void 0})}parseArguments(n){const t=n?this.parseConstArgument:this.parseArgument;return this.optionalMany(O.PAREN_L,t,O.PAREN_R)}parseArgument(n=!1){const t=this._lexer.token,s=this.parseName();return this.expectToken(O.COLON),this.node(t,{kind:I.ARGUMENT,name:s,value:this.parseValueLiteral(n)})}parseConstArgument(){return this.parseArgument(!0)}parseFragment(){const n=this._lexer.token;this.expectToken(O.SPREAD);const t=this.expectOptionalKeyword("on");return!t&&this.peek(O.NAME)?this.node(n,{kind:I.FRAGMENT_SPREAD,name:this.parseFragmentName(),directives:this.parseDirectives(!1)}):this.node(n,{kind:I.INLINE_FRAGMENT,typeCondition:t?this.parseNamedType():void 0,directives:this.parseDirectives(!1),selectionSet:this.parseSelectionSet()})}parseFragmentDefinition(){const n=this._lexer.token;return this.expectKeyword("fragment"),this._options.allowLegacyFragmentVariables===!0?this.node(n,{kind:I.FRAGMENT_DEFINITION,name:this.parseFragmentName(),variableDefinitions:this.parseVariableDefinitions(),typeCondition:(this.expectKeyword("on"),this.parseNamedType()),directives:this.parseDirectives(!1),selectionSet:this.parseSelectionSet()}):this.node(n,{kind:I.FRAGMENT_DEFINITION,name:this.parseFragmentName(),typeCondition:(this.expectKeyword("on"),this.parseNamedType()),directives:this.parseDirectives(!1),selectionSet:this.parseSelectionSet()})}parseFragmentName(){if(this._lexer.token.value==="on")throw this.unexpected();return this.parseName()}parseValueLiteral(n){const t=this._lexer.token;switch(t.kind){case O.BRACKET_L:return this.parseList(n);case O.BRACE_L:return this.parseObject(n);case O.INT:return this.advanceLexer(),this.node(t,{kind:I.INT,value:t.value});case O.FLOAT:return this.advanceLexer(),this.node(t,{kind:I.FLOAT,value:t.value});case O.STRING:case O.BLOCK_STRING:return this.parseStringLiteral();case O.NAME:switch(this.advanceLexer(),t.value){case"true":return this.node(t,{kind:I.BOOLEAN,value:!0});case"false":return this.node(t,{kind:I.BOOLEAN,value:!1});case"null":return this.node(t,{kind:I.NULL});default:return this.node(t,{kind:I.ENUM,value:t.value})}case O.DOLLAR:if(n)if(this.expectToken(O.DOLLAR),this._lexer.token.kind===O.NAME){const s=this._lexer.token.value;throw Qe(this._lexer.source,t.start,`Unexpected variable "$${s}" in constant value.`)}else throw this.unexpected(t);return this.parseVariable();default:throw this.unexpected()}}parseConstValueLiteral(){return this.parseValueLiteral(!0)}parseStringLiteral(){const n=this._lexer.token;return this.advanceLexer(),this.node(n,{kind:I.STRING,value:n.value,block:n.kind===O.BLOCK_STRING})}parseList(n){const t=()=>this.parseValueLiteral(n);return this.node(this._lexer.token,{kind:I.LIST,values:this.any(O.BRACKET_L,t,O.BRACKET_R)})}parseObject(n){const t=()=>this.parseObjectField(n);return this.node(this._lexer.token,{kind:I.OBJECT,fields:this.any(O.BRACE_L,t,O.BRACE_R)})}parseObjectField(n){const t=this._lexer.token,s=this.parseName();return this.expectToken(O.COLON),this.node(t,{kind:I.OBJECT_FIELD,name:s,value:this.parseValueLiteral(n)})}parseDirectives(n){const t=[];for(;this.peek(O.AT);)t.push(this.parseDirective(n));return t}parseConstDirectives(){return this.parseDirectives(!0)}parseDirective(n){const t=this._lexer.token;return this.expectToken(O.AT),this.node(t,{kind:I.DIRECTIVE,name:this.parseName(),arguments:this.parseArguments(n)})}parseTypeReference(){const n=this._lexer.token;let t;if(this.expectOptionalToken(O.BRACKET_L)){const s=this.parseTypeReference();this.expectToken(O.BRACKET_R),t=this.node(n,{kind:I.LIST_TYPE,type:s})}else t=this.parseNamedType();return this.expectOptionalToken(O.BANG)?this.node(n,{kind:I.NON_NULL_TYPE,type:t}):t}parseNamedType(){return this.node(this._lexer.token,{kind:I.NAMED_TYPE,name:this.parseName()})}peekDescription(){return this.peek(O.STRING)||this.peek(O.BLOCK_STRING)}parseDescription(){if(this.peekDescription())return this.parseStringLiteral()}parseSchemaDefinition(){const n=this._lexer.token,t=this.parseDescription();this.expectKeyword("schema");const s=this.parseConstDirectives(),a=this.many(O.BRACE_L,this.parseOperationTypeDefinition,O.BRACE_R);return this.node(n,{kind:I.SCHEMA_DEFINITION,description:t,directives:s,operationTypes:a})}parseOperationTypeDefinition(){const n=this._lexer.token,t=this.parseOperationType();this.expectToken(O.COLON);const s=this.parseNamedType();return this.node(n,{kind:I.OPERATION_TYPE_DEFINITION,operation:t,type:s})}parseScalarTypeDefinition(){const n=this._lexer.token,t=this.parseDescription();this.expectKeyword("scalar");const s=this.parseName(),a=this.parseConstDirectives();return this.node(n,{kind:I.SCALAR_TYPE_DEFINITION,description:t,name:s,directives:a})}parseObjectTypeDefinition(){const n=this._lexer.token,t=this.parseDescription();this.expectKeyword("type");const s=this.parseName(),a=this.parseImplementsInterfaces(),l=this.parseConstDirectives(),c=this.parseFieldsDefinition();return this.node(n,{kind:I.OBJECT_TYPE_DEFINITION,description:t,name:s,interfaces:a,directives:l,fields:c})}parseImplementsInterfaces(){return this.expectOptionalKeyword("implements")?this.delimitedMany(O.AMP,this.parseNamedType):[]}parseFieldsDefinition(){return this.optionalMany(O.BRACE_L,this.parseFieldDefinition,O.BRACE_R)}parseFieldDefinition(){const n=this._lexer.token,t=this.parseDescription(),s=this.parseName(),a=this.parseArgumentDefs();this.expectToken(O.COLON);const l=this.parseTypeReference(),c=this.parseConstDirectives();return this.node(n,{kind:I.FIELD_DEFINITION,description:t,name:s,arguments:a,type:l,directives:c})}parseArgumentDefs(){return this.optionalMany(O.PAREN_L,this.parseInputValueDef,O.PAREN_R)}parseInputValueDef(){const n=this._lexer.token,t=this.parseDescription(),s=this.parseName();this.expectToken(O.COLON);const a=this.parseTypeReference();let l;this.expectOptionalToken(O.EQUALS)&&(l=this.parseConstValueLiteral());const c=this.parseConstDirectives();return this.node(n,{kind:I.INPUT_VALUE_DEFINITION,description:t,name:s,type:a,defaultValue:l,directives:c})}parseInterfaceTypeDefinition(){const n=this._lexer.token,t=this.parseDescription();this.expectKeyword("interface");const s=this.parseName(),a=this.parseImplementsInterfaces(),l=this.parseConstDirectives(),c=this.parseFieldsDefinition();return this.node(n,{kind:I.INTERFACE_TYPE_DEFINITION,description:t,name:s,interfaces:a,directives:l,fields:c})}parseUnionTypeDefinition(){const n=this._lexer.token,t=this.parseDescription();this.expectKeyword("union");const s=this.parseName(),a=this.parseConstDirectives(),l=this.parseUnionMemberTypes();return this.node(n,{kind:I.UNION_TYPE_DEFINITION,description:t,name:s,directives:a,types:l})}parseUnionMemberTypes(){return this.expectOptionalToken(O.EQUALS)?this.delimitedMany(O.PIPE,this.parseNamedType):[]}parseEnumTypeDefinition(){const n=this._lexer.token,t=this.parseDescription();this.expectKeyword("enum");const s=this.parseName(),a=this.parseConstDirectives(),l=this.parseEnumValuesDefinition();return this.node(n,{kind:I.ENUM_TYPE_DEFINITION,description:t,name:s,directives:a,values:l})}parseEnumValuesDefinition(){return this.optionalMany(O.BRACE_L,this.parseEnumValueDefinition,O.BRACE_R)}parseEnumValueDefinition(){const n=this._lexer.token,t=this.parseDescription(),s=this.parseEnumValueName(),a=this.parseConstDirectives();return this.node(n,{kind:I.ENUM_VALUE_DEFINITION,description:t,name:s,directives:a})}parseEnumValueName(){if(this._lexer.token.value==="true"||this._lexer.token.value==="false"||this._lexer.token.value==="null")throw Qe(this._lexer.source,this._lexer.token.start,`${is(this._lexer.token)} is reserved and cannot be used for an enum value.`);return this.parseName()}parseInputObjectTypeDefinition(){const n=this._lexer.token,t=this.parseDescription();this.expectKeyword("input");const s=this.parseName(),a=this.parseConstDirectives(),l=this.parseInputFieldsDefinition();return this.node(n,{kind:I.INPUT_OBJECT_TYPE_DEFINITION,description:t,name:s,directives:a,fields:l})}parseInputFieldsDefinition(){return this.optionalMany(O.BRACE_L,this.parseInputValueDef,O.BRACE_R)}parseTypeSystemExtension(){const n=this._lexer.lookahead();if(n.kind===O.NAME)switch(n.value){case"schema":return this.parseSchemaExtension();case"scalar":return this.parseScalarTypeExtension();case"type":return this.parseObjectTypeExtension();case"interface":return this.parseInterfaceTypeExtension();case"union":return this.parseUnionTypeExtension();case"enum":return this.parseEnumTypeExtension();case"input":return this.parseInputObjectTypeExtension()}throw this.unexpected(n)}parseSchemaExtension(){const n=this._lexer.token;this.expectKeyword("extend"),this.expectKeyword("schema");const t=this.parseConstDirectives(),s=this.optionalMany(O.BRACE_L,this.parseOperationTypeDefinition,O.BRACE_R);if(t.length===0&&s.length===0)throw this.unexpected();return this.node(n,{kind:I.SCHEMA_EXTENSION,directives:t,operationTypes:s})}parseScalarTypeExtension(){const n=this._lexer.token;this.expectKeyword("extend"),this.expectKeyword("scalar");const t=this.parseName(),s=this.parseConstDirectives();if(s.length===0)throw this.unexpected();return this.node(n,{kind:I.SCALAR_TYPE_EXTENSION,name:t,directives:s})}parseObjectTypeExtension(){const n=this._lexer.token;this.expectKeyword("extend"),this.expectKeyword("type");const t=this.parseName(),s=this.parseImplementsInterfaces(),a=this.parseConstDirectives(),l=this.parseFieldsDefinition();if(s.length===0&&a.length===0&&l.length===0)throw this.unexpected();return this.node(n,{kind:I.OBJECT_TYPE_EXTENSION,name:t,interfaces:s,directives:a,fields:l})}parseInterfaceTypeExtension(){const n=this._lexer.token;this.expectKeyword("extend"),this.expectKeyword("interface");const t=this.parseName(),s=this.parseImplementsInterfaces(),a=this.parseConstDirectives(),l=this.parseFieldsDefinition();if(s.length===0&&a.length===0&&l.length===0)throw this.unexpected();return this.node(n,{kind:I.INTERFACE_TYPE_EXTENSION,name:t,interfaces:s,directives:a,fields:l})}parseUnionTypeExtension(){const n=this._lexer.token;this.expectKeyword("extend"),this.expectKeyword("union");const t=this.parseName(),s=this.parseConstDirectives(),a=this.parseUnionMemberTypes();if(s.length===0&&a.length===0)throw this.unexpected();return this.node(n,{kind:I.UNION_TYPE_EXTENSION,name:t,directives:s,types:a})}parseEnumTypeExtension(){const n=this._lexer.token;this.expectKeyword("extend"),this.expectKeyword("enum");const t=this.parseName(),s=this.parseConstDirectives(),a=this.parseEnumValuesDefinition();if(s.length===0&&a.length===0)throw this.unexpected();return this.node(n,{kind:I.ENUM_TYPE_EXTENSION,name:t,directives:s,values:a})}parseInputObjectTypeExtension(){const n=this._lexer.token;this.expectKeyword("extend"),this.expectKeyword("input");const t=this.parseName(),s=this.parseConstDirectives(),a=this.parseInputFieldsDefinition();if(s.length===0&&a.length===0)throw this.unexpected();return this.node(n,{kind:I.INPUT_OBJECT_TYPE_EXTENSION,name:t,directives:s,fields:a})}parseDirectiveDefinition(){const n=this._lexer.token,t=this.parseDescription();this.expectKeyword("directive"),this.expectToken(O.AT);const s=this.parseName(),a=this.parseArgumentDefs(),l=this.expectOptionalKeyword("repeatable");this.expectKeyword("on");const c=this.parseDirectiveLocations();return this.node(n,{kind:I.DIRECTIVE_DEFINITION,description:t,name:s,arguments:a,repeatable:l,locations:c})}parseDirectiveLocations(){return this.delimitedMany(O.PIPE,this.parseDirectiveLocation)}parseDirectiveLocation(){const n=this._lexer.token,t=this.parseName();if(Object.prototype.hasOwnProperty.call(j,t.value))return t;throw this.unexpected(n)}node(n,t){return this._options.noLocation!==!0&&(t.loc=new _0(n,this._lexer.lastToken,this._lexer.source)),t}peek(n){return this._lexer.token.kind===n}expectToken(n){const t=this._lexer.token;if(t.kind===n)return this.advanceLexer(),t;throw Qe(this._lexer.source,t.start,`Expected ${df(n)}, found ${is(t)}.`)}expectOptionalToken(n){return this._lexer.token.kind===n?(this.advanceLexer(),!0):!1}expectKeyword(n){const t=this._lexer.token;if(t.kind===O.NAME&&t.value===n)this.advanceLexer();else throw Qe(this._lexer.source,t.start,`Expected "${n}", found ${is(t)}.`)}expectOptionalKeyword(n){const t=this._lexer.token;return t.kind===O.NAME&&t.value===n?(this.advanceLexer(),!0):!1}unexpected(n){const t=n??this._lexer.token;return Qe(this._lexer.source,t.start,`Unexpected ${is(t)}.`)}any(n,t,s){this.expectToken(n);const a=[];for(;!this.expectOptionalToken(s);)a.push(t.call(this));return a}optionalMany(n,t,s){if(this.expectOptionalToken(n)){const a=[];do a.push(t.call(this));while(!this.expectOptionalToken(s));return a}return[]}many(n,t,s){this.expectToken(n);const a=[];do a.push(t.call(this));while(!this.expectOptionalToken(s));return a}delimitedMany(n,t){this.expectOptionalToken(n);const s=[];do s.push(t.call(this));while(this.expectOptionalToken(n));return s}advanceLexer(){const{maxTokens:n}=this._options,t=this._lexer.advance();if(n!==void 0&&t.kind!==O.EOF&&(++this._tokenCounter,this._tokenCounter>n))throw Qe(this._lexer.source,t.start,`Document contains more that ${n} tokens. Parsing aborted.`)}}function is(i){const n=i.value;return df(i.kind)+(n!=null?` "${n}"`:"")}function df(i){return k0(i)?`"${i}"`:i}const H0=5;function ws(i,n){const[t,s]=n?[i,n]:[void 0,i];let a=" Did you mean ";t&&(a+=t+" ");const l=s.map(d=>`"${d}"`);switch(l.length){case 0:return"";case 1:return a+l[0]+"?";case 2:return a+l[0]+" or "+l[1]+"?"}const c=l.slice(0,H0),h=c.pop();return a+c.join(", ")+", or "+h+"?"}function Dc(i){return i}function Ai(i,n){const t=Object.create(null);for(const s of i)t[n(s)]=s;return t}function ii(i,n,t){const s=Object.create(null);for(const a of i)s[n(a)]=t(a);return s}function _t(i,n){const t=Object.create(null);for(const s of Object.keys(i))t[s]=n(i[s],s);return t}function z0(i,n){let t=0,s=0;for(;t<i.length&&s<n.length;){let a=i.charCodeAt(t),l=n.charCodeAt(s);if(rs(a)&&rs(l)){let c=0;do++t,c=c*10+a-lo,a=i.charCodeAt(t);while(rs(a)&&c>0);let h=0;do++s,h=h*10+l-lo,l=n.charCodeAt(s);while(rs(l)&&h>0);if(c<h)return-1;if(c>h)return 1}else{if(a<l)return-1;if(a>l)return 1;++t,++s}}return i.length-n.length}const lo=48,Q0=57;function rs(i){return!isNaN(i)&&lo<=i&&i<=Q0}function _s(i,n){const t=Object.create(null),s=new J0(i),a=Math.floor(i.length*.4)+1;for(const l of n){const c=s.measure(l,a);c!==void 0&&(t[l]=c)}return Object.keys(t).sort((l,c)=>{const h=t[l]-t[c];return h!==0?h:z0(l,c)})}class J0{constructor(n){this._input=n,this._inputLowerCase=n.toLowerCase(),this._inputArray=Lc(this._inputLowerCase),this._rows=[new Array(n.length+1).fill(0),new Array(n.length+1).fill(0),new Array(n.length+1).fill(0)]}measure(n,t){if(this._input===n)return 0;const s=n.toLowerCase();if(this._inputLowerCase===s)return 1;let a=Lc(s),l=this._inputArray;if(a.length<l.length){const T=a;a=l,l=T}const c=a.length,h=l.length;if(c-h>t)return;const d=this._rows;for(let T=0;T<=h;T++)d[0][T]=T;for(let T=1;T<=c;T++){const w=d[(T-1)%3],D=d[T%3];let S=D[0]=T;for(let C=1;C<=h;C++){const P=a[T-1]===l[C-1]?0:1;let X=Math.min(w[C]+1,D[C-1]+1,w[C-1]+P);if(T>1&&C>1&&a[T-1]===l[C-2]&&a[T-2]===l[C-1]){const z=d[(T-2)%3][C-2];X=Math.min(X,z+1)}X<S&&(S=X),D[C]=X}if(S>t)return}const v=d[c%3][h];return v<=t?v:void 0}}function Lc(i){const n=i.length,t=new Array(n);for(let s=0;s<n;++s)t[s]=i.charCodeAt(s);return t}function Bn(i){if(i==null)return Object.create(null);if(Object.getPrototypeOf(i)===null)return i;const n=Object.create(null);for(const[t,s]of Object.entries(i))n[t]=s;return n}function X0(i){return`"${i.replace(K0,Z0)}"`}const K0=/[\x00-\x1f\x22\x5c\x7f-\x9f]/g;function Z0(i){return ew[i.charCodeAt(0)]}const ew=["\\u0000","\\u0001","\\u0002","\\u0003","\\u0004","\\u0005","\\u0006","\\u0007","\\b","\\t","\\n","\\u000B","\\f","\\r","\\u000E","\\u000F","\\u0010","\\u0011","\\u0012","\\u0013","\\u0014","\\u0015","\\u0016","\\u0017","\\u0018","\\u0019","\\u001A","\\u001B","\\u001C","\\u001D","\\u001E","\\u001F","","",'\\"',"","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","\\\\","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","\\u007F","\\u0080","\\u0081","\\u0082","\\u0083","\\u0084","\\u0085","\\u0086","\\u0087","\\u0088","\\u0089","\\u008A","\\u008B","\\u008C","\\u008D","\\u008E","\\u008F","\\u0090","\\u0091","\\u0092","\\u0093","\\u0094","\\u0095","\\u0096","\\u0097","\\u0098","\\u0099","\\u009A","\\u009B","\\u009C","\\u009D","\\u009E","\\u009F"],Zi=Object.freeze({});function pf(i,n,t=sf){const s=new Map;for(const z of Object.values(I))s.set(z,gf(n,z));let a,l=Array.isArray(i),c=[i],h=-1,d=[],v=i,T,w;const D=[],S=[];do{h++;const z=h===c.length,de=z&&d.length!==0;if(z){if(T=S.length===0?void 0:D[D.length-1],v=w,w=S.pop(),de)if(l){v=v.slice();let ye=0;for(const[_e,ke]of d){const Fe=_e-ye;ke===null?(v.splice(Fe,1),ye++):v[Fe]=ke}}else{v=Object.defineProperties({},Object.getOwnPropertyDescriptors(v));for(const[ye,_e]of d)v[ye]=_e}h=a.index,c=a.keys,d=a.edits,l=a.inArray,a=a.prev}else if(w){if(T=l?h:c[h],v=w[T],v==null)continue;D.push(T)}let ve;if(!Array.isArray(v)){var C,P;Oc(v)||ge(!1,`Invalid AST Node: ${q(v)}.`);const ye=z?(C=s.get(v.kind))===null||C===void 0?void 0:C.leave:(P=s.get(v.kind))===null||P===void 0?void 0:P.enter;if(ve=ye==null?void 0:ye.call(n,v,T,w,D,S),ve===Zi)break;if(ve===!1){if(!z){D.pop();continue}}else if(ve!==void 0&&(d.push([T,ve]),!z))if(Oc(ve))v=ve;else{D.pop();continue}}if(ve===void 0&&de&&d.push([T,v]),z)D.pop();else{var X;a={inArray:l,index:h,keys:c,edits:d,prev:a},l=Array.isArray(v),c=l?v:(X=t[v.kind])!==null&&X!==void 0?X:[],h=-1,d=[],w&&S.push(w),w=v}}while(a!==void 0);return d.length!==0?d[d.length-1][1]:i}function nw(i){const n=new Array(i.length).fill(null),t=Object.create(null);for(const s of Object.values(I)){let a=!1;const l=new Array(i.length).fill(void 0),c=new Array(i.length).fill(void 0);for(let d=0;d<i.length;++d){const{enter:v,leave:T}=gf(i[d],s);a||(a=v!=null||T!=null),l[d]=v,c[d]=T}if(!a)continue;const h={enter(...d){const v=d[0];for(let w=0;w<i.length;w++)if(n[w]===null){var T;const D=(T=l[w])===null||T===void 0?void 0:T.apply(i[w],d);if(D===!1)n[w]=v;else if(D===Zi)n[w]=Zi;else if(D!==void 0)return D}},leave(...d){const v=d[0];for(let w=0;w<i.length;w++)if(n[w]===null){var T;const D=(T=c[w])===null||T===void 0?void 0:T.apply(i[w],d);if(D===Zi)n[w]=Zi;else if(D!==void 0&&D!==!1)return D}else n[w]===v&&(n[w]=null)}};t[s]=h}return t}function gf(i,n){const t=i[n];return typeof t=="object"?t:typeof t=="function"?{enter:t,leave:void 0}:{enter:i.enter,leave:i.leave}}function ut(i){return pf(i,iw)}const tw=80,iw={Name:{leave:i=>i.value},Variable:{leave:i=>"$"+i.name},Document:{leave:i=>V(i.definitions,`

`)},OperationDefinition:{leave(i){const n=he("(",V(i.variableDefinitions,", "),")"),t=V([i.operation,V([i.name,n]),V(i.directives," ")]," ");return(t==="query"?"":t+" ")+i.selectionSet}},VariableDefinition:{leave:({variable:i,type:n,defaultValue:t,directives:s})=>i+": "+n+he(" = ",t)+he(" ",V(s," "))},SelectionSet:{leave:({selections:i})=>Hn(i)},Field:{leave({alias:i,name:n,arguments:t,directives:s,selectionSet:a}){const l=he("",i,": ")+n;let c=l+he("(",V(t,", "),")");return c.length>tw&&(c=l+he(`(
`,ls(V(t,`
`)),`
)`)),V([c,V(s," "),a]," ")}},Argument:{leave:({name:i,value:n})=>i+": "+n},FragmentSpread:{leave:({name:i,directives:n})=>"..."+i+he(" ",V(n," "))},InlineFragment:{leave:({typeCondition:i,directives:n,selectionSet:t})=>V(["...",he("on ",i),V(n," "),t]," ")},FragmentDefinition:{leave:({name:i,typeCondition:n,variableDefinitions:t,directives:s,selectionSet:a})=>`fragment ${i}${he("(",V(t,", "),")")} on ${n} ${he("",V(s," ")," ")}`+a},IntValue:{leave:({value:i})=>i},FloatValue:{leave:({value:i})=>i},StringValue:{leave:({value:i,block:n})=>n?A0(i):X0(i)},BooleanValue:{leave:({value:i})=>i?"true":"false"},NullValue:{leave:()=>"null"},EnumValue:{leave:({value:i})=>i},ListValue:{leave:({values:i})=>"["+V(i,", ")+"]"},ObjectValue:{leave:({fields:i})=>"{"+V(i,", ")+"}"},ObjectField:{leave:({name:i,value:n})=>i+": "+n},Directive:{leave:({name:i,arguments:n})=>"@"+i+he("(",V(n,", "),")")},NamedType:{leave:({name:i})=>i},ListType:{leave:({type:i})=>"["+i+"]"},NonNullType:{leave:({type:i})=>i+"!"},SchemaDefinition:{leave:({description:i,directives:n,operationTypes:t})=>he("",i,`
`)+V(["schema",V(n," "),Hn(t)]," ")},OperationTypeDefinition:{leave:({operation:i,type:n})=>i+": "+n},ScalarTypeDefinition:{leave:({description:i,name:n,directives:t})=>he("",i,`
`)+V(["scalar",n,V(t," ")]," ")},ObjectTypeDefinition:{leave:({description:i,name:n,interfaces:t,directives:s,fields:a})=>he("",i,`
`)+V(["type",n,he("implements ",V(t," & ")),V(s," "),Hn(a)]," ")},FieldDefinition:{leave:({description:i,name:n,arguments:t,type:s,directives:a})=>he("",i,`
`)+n+(Cc(t)?he(`(
`,ls(V(t,`
`)),`
)`):he("(",V(t,", "),")"))+": "+s+he(" ",V(a," "))},InputValueDefinition:{leave:({description:i,name:n,type:t,defaultValue:s,directives:a})=>he("",i,`
`)+V([n+": "+t,he("= ",s),V(a," ")]," ")},InterfaceTypeDefinition:{leave:({description:i,name:n,interfaces:t,directives:s,fields:a})=>he("",i,`
`)+V(["interface",n,he("implements ",V(t," & ")),V(s," "),Hn(a)]," ")},UnionTypeDefinition:{leave:({description:i,name:n,directives:t,types:s})=>he("",i,`
`)+V(["union",n,V(t," "),he("= ",V(s," | "))]," ")},EnumTypeDefinition:{leave:({description:i,name:n,directives:t,values:s})=>he("",i,`
`)+V(["enum",n,V(t," "),Hn(s)]," ")},EnumValueDefinition:{leave:({description:i,name:n,directives:t})=>he("",i,`
`)+V([n,V(t," ")]," ")},InputObjectTypeDefinition:{leave:({description:i,name:n,directives:t,fields:s})=>he("",i,`
`)+V(["input",n,V(t," "),Hn(s)]," ")},DirectiveDefinition:{leave:({description:i,name:n,arguments:t,repeatable:s,locations:a})=>he("",i,`
`)+"directive @"+n+(Cc(t)?he(`(
`,ls(V(t,`
`)),`
)`):he("(",V(t,", "),")"))+(s?" repeatable":"")+" on "+V(a," | ")},SchemaExtension:{leave:({directives:i,operationTypes:n})=>V(["extend schema",V(i," "),Hn(n)]," ")},ScalarTypeExtension:{leave:({name:i,directives:n})=>V(["extend scalar",i,V(n," ")]," ")},ObjectTypeExtension:{leave:({name:i,interfaces:n,directives:t,fields:s})=>V(["extend type",i,he("implements ",V(n," & ")),V(t," "),Hn(s)]," ")},InterfaceTypeExtension:{leave:({name:i,interfaces:n,directives:t,fields:s})=>V(["extend interface",i,he("implements ",V(n," & ")),V(t," "),Hn(s)]," ")},UnionTypeExtension:{leave:({name:i,directives:n,types:t})=>V(["extend union",i,V(n," "),he("= ",V(t," | "))]," ")},EnumTypeExtension:{leave:({name:i,directives:n,values:t})=>V(["extend enum",i,V(n," "),Hn(t)]," ")},InputObjectTypeExtension:{leave:({name:i,directives:n,fields:t})=>V(["extend input",i,V(n," "),Hn(t)]," ")}};function V(i,n=""){var t;return(t=i==null?void 0:i.filter(s=>s).join(n))!==null&&t!==void 0?t:""}function Hn(i){return he(`{
`,ls(V(i,`
`)),`
}`)}function he(i,n,t=""){return n!=null&&n!==""?i+n+t:""}function ls(i){return he("  ",i.replace(/\n/g,`
  `))}function Cc(i){var n;return(n=i==null?void 0:i.some(t=>t.includes(`
`)))!==null&&n!==void 0?n:!1}function uo(i,n){switch(i.kind){case I.NULL:return null;case I.INT:return parseInt(i.value,10);case I.FLOAT:return parseFloat(i.value);case I.STRING:case I.ENUM:case I.BOOLEAN:return i.value;case I.LIST:return i.values.map(t=>uo(t,n));case I.OBJECT:return ii(i.fields,t=>t.name.value,t=>uo(t.value,n));case I.VARIABLE:return n==null?void 0:n[i.name.value]}}function rt(i){if(i!=null||ge(!1,"Must provide name."),typeof i=="string"||ge(!1,"Expected name to be a string."),i.length===0)throw new Y("Expected name to be a non-empty string.");for(let n=1;n<i.length;++n)if(!of(i.charCodeAt(n)))throw new Y(`Names must only contain [_a-zA-Z0-9] but "${i}" does not.`);if(!_o(i.charCodeAt(0)))throw new Y(`Names must start with [_a-zA-Z] but "${i}" does not.`);return i}function rw(i){if(i==="true"||i==="false"||i==="null")throw new Y(`Enum values cannot be named: ${i}`);return rt(i)}function Io(i){return qt(i)||yn(i)||cn(i)||Xn(i)||Kn(i)||Zn(i)||oi(i)||un(i)}function qt(i){return ft(i,kt)}function yn(i){return ft(i,ct)}function sw(i){if(!yn(i))throw new Error(`Expected ${q(i)} to be a GraphQL Object type.`);return i}function cn(i){return ft(i,ds)}function aw(i){if(!cn(i))throw new Error(`Expected ${q(i)} to be a GraphQL Interface type.`);return i}function Xn(i){return ft(i,ps)}function Kn(i){return ft(i,Ni)}function Zn(i){return ft(i,gs)}function oi(i){return ft(i,vn)}function un(i){return ft(i,ue)}function mf(i){return qt(i)||Kn(i)||Zn(i)||Eo(i)&&mf(i.ofType)}function vf(i){return qt(i)||yn(i)||cn(i)||Xn(i)||Kn(i)||Eo(i)&&vf(i.ofType)}function yf(i){return qt(i)||Kn(i)}function ow(i){return cn(i)||Xn(i)}class vn{constructor(n){Io(n)||ge(!1,`Expected ${q(n)} to be a GraphQL type.`),this.ofType=n}get[Symbol.toStringTag](){return"GraphQLList"}toString(){return"["+String(this.ofType)+"]"}toJSON(){return this.toString()}}class ue{constructor(n){Tf(n)||ge(!1,`Expected ${q(n)} to be a GraphQL nullable type.`),this.ofType=n}get[Symbol.toStringTag](){return"GraphQLNonNull"}toString(){return String(this.ofType)+"!"}toJSON(){return this.toString()}}function Eo(i){return oi(i)||un(i)}function Tf(i){return Io(i)&&!un(i)}function lw(i){if(!Tf(i))throw new Error(`Expected ${q(i)} to be a GraphQL nullable type.`);return i}function P_(i){return qt(i)||yn(i)||cn(i)||Xn(i)||Kn(i)||Zn(i)}function uw(i){if(i){let n=i;for(;Eo(n);)n=n.ofType;return n}}function bf(i){return typeof i=="function"?i():i}function wf(i){return typeof i=="function"?i():i}class kt{constructor(n){var t,s,a,l;const c=(t=n.parseValue)!==null&&t!==void 0?t:Dc;this.name=rt(n.name),this.description=n.description,this.specifiedByURL=n.specifiedByURL,this.serialize=(s=n.serialize)!==null&&s!==void 0?s:Dc,this.parseValue=c,this.parseLiteral=(a=n.parseLiteral)!==null&&a!==void 0?a:(h,d)=>c(uo(h,d)),this.extensions=Bn(n.extensions),this.astNode=n.astNode,this.extensionASTNodes=(l=n.extensionASTNodes)!==null&&l!==void 0?l:[],n.specifiedByURL==null||typeof n.specifiedByURL=="string"||ge(!1,`${this.name} must provide "specifiedByURL" as a string, but got: ${q(n.specifiedByURL)}.`),n.serialize==null||typeof n.serialize=="function"||ge(!1,`${this.name} must provide "serialize" function. If this custom Scalar is also used as an input type, ensure "parseValue" and "parseLiteral" functions are also provided.`),n.parseLiteral&&(typeof n.parseValue=="function"&&typeof n.parseLiteral=="function"||ge(!1,`${this.name} must provide both "parseValue" and "parseLiteral" functions.`))}get[Symbol.toStringTag](){return"GraphQLScalarType"}toConfig(){return{name:this.name,description:this.description,specifiedByURL:this.specifiedByURL,serialize:this.serialize,parseValue:this.parseValue,parseLiteral:this.parseLiteral,extensions:this.extensions,astNode:this.astNode,extensionASTNodes:this.extensionASTNodes}}toString(){return this.name}toJSON(){return this.toString()}}class ct{constructor(n){var t;this.name=rt(n.name),this.description=n.description,this.isTypeOf=n.isTypeOf,this.extensions=Bn(n.extensions),this.astNode=n.astNode,this.extensionASTNodes=(t=n.extensionASTNodes)!==null&&t!==void 0?t:[],this._fields=()=>If(n),this._interfaces=()=>_f(n),n.isTypeOf==null||typeof n.isTypeOf=="function"||ge(!1,`${this.name} must provide "isTypeOf" as a function, but got: ${q(n.isTypeOf)}.`)}get[Symbol.toStringTag](){return"GraphQLObjectType"}getFields(){return typeof this._fields=="function"&&(this._fields=this._fields()),this._fields}getInterfaces(){return typeof this._interfaces=="function"&&(this._interfaces=this._interfaces()),this._interfaces}toConfig(){return{name:this.name,description:this.description,interfaces:this.getInterfaces(),fields:Sf(this.getFields()),isTypeOf:this.isTypeOf,extensions:this.extensions,astNode:this.astNode,extensionASTNodes:this.extensionASTNodes}}toString(){return this.name}toJSON(){return this.toString()}}function _f(i){var n;const t=bf((n=i.interfaces)!==null&&n!==void 0?n:[]);return Array.isArray(t)||ge(!1,`${i.name} interfaces must be an Array or a function which returns an Array.`),t}function If(i){const n=wf(i.fields);return Si(n)||ge(!1,`${i.name} fields must be an object with field names as keys or a function which returns such an object.`),_t(n,(t,s)=>{var a;Si(t)||ge(!1,`${i.name}.${s} field config must be an object.`),t.resolve==null||typeof t.resolve=="function"||ge(!1,`${i.name}.${s} field resolver must be a function if provided, but got: ${q(t.resolve)}.`);const l=(a=t.args)!==null&&a!==void 0?a:{};return Si(l)||ge(!1,`${i.name}.${s} args must be an object with argument names as keys.`),{name:rt(s),description:t.description,type:t.type,args:Ef(l),resolve:t.resolve,subscribe:t.subscribe,deprecationReason:t.deprecationReason,extensions:Bn(t.extensions),astNode:t.astNode}})}function Ef(i){return Object.entries(i).map(([n,t])=>({name:rt(n),description:t.description,type:t.type,defaultValue:t.defaultValue,deprecationReason:t.deprecationReason,extensions:Bn(t.extensions),astNode:t.astNode}))}function Si(i){return Nt(i)&&!Array.isArray(i)}function Sf(i){return _t(i,n=>({description:n.description,type:n.type,args:Af(n.args),resolve:n.resolve,subscribe:n.subscribe,deprecationReason:n.deprecationReason,extensions:n.extensions,astNode:n.astNode}))}function Af(i){return ii(i,n=>n.name,n=>({description:n.description,type:n.type,defaultValue:n.defaultValue,deprecationReason:n.deprecationReason,extensions:n.extensions,astNode:n.astNode}))}function cw(i){return un(i.type)&&i.defaultValue===void 0}class ds{constructor(n){var t;this.name=rt(n.name),this.description=n.description,this.resolveType=n.resolveType,this.extensions=Bn(n.extensions),this.astNode=n.astNode,this.extensionASTNodes=(t=n.extensionASTNodes)!==null&&t!==void 0?t:[],this._fields=If.bind(void 0,n),this._interfaces=_f.bind(void 0,n),n.resolveType==null||typeof n.resolveType=="function"||ge(!1,`${this.name} must provide "resolveType" as a function, but got: ${q(n.resolveType)}.`)}get[Symbol.toStringTag](){return"GraphQLInterfaceType"}getFields(){return typeof this._fields=="function"&&(this._fields=this._fields()),this._fields}getInterfaces(){return typeof this._interfaces=="function"&&(this._interfaces=this._interfaces()),this._interfaces}toConfig(){return{name:this.name,description:this.description,interfaces:this.getInterfaces(),fields:Sf(this.getFields()),resolveType:this.resolveType,extensions:this.extensions,astNode:this.astNode,extensionASTNodes:this.extensionASTNodes}}toString(){return this.name}toJSON(){return this.toString()}}class ps{constructor(n){var t;this.name=rt(n.name),this.description=n.description,this.resolveType=n.resolveType,this.extensions=Bn(n.extensions),this.astNode=n.astNode,this.extensionASTNodes=(t=n.extensionASTNodes)!==null&&t!==void 0?t:[],this._types=fw.bind(void 0,n),n.resolveType==null||typeof n.resolveType=="function"||ge(!1,`${this.name} must provide "resolveType" as a function, but got: ${q(n.resolveType)}.`)}get[Symbol.toStringTag](){return"GraphQLUnionType"}getTypes(){return typeof this._types=="function"&&(this._types=this._types()),this._types}toConfig(){return{name:this.name,description:this.description,types:this.getTypes(),resolveType:this.resolveType,extensions:this.extensions,astNode:this.astNode,extensionASTNodes:this.extensionASTNodes}}toString(){return this.name}toJSON(){return this.toString()}}function fw(i){const n=bf(i.types);return Array.isArray(n)||ge(!1,`Must provide Array of types or a function which returns such an array for Union ${i.name}.`),n}class Ni{constructor(n){var t;this.name=rt(n.name),this.description=n.description,this.extensions=Bn(n.extensions),this.astNode=n.astNode,this.extensionASTNodes=(t=n.extensionASTNodes)!==null&&t!==void 0?t:[],this._values=hw(this.name,n.values),this._valueLookup=new Map(this._values.map(s=>[s.value,s])),this._nameLookup=Ai(this._values,s=>s.name)}get[Symbol.toStringTag](){return"GraphQLEnumType"}getValues(){return this._values}getValue(n){return this._nameLookup[n]}serialize(n){const t=this._valueLookup.get(n);if(t===void 0)throw new Y(`Enum "${this.name}" cannot represent value: ${q(n)}`);return t.name}parseValue(n){if(typeof n!="string"){const s=q(n);throw new Y(`Enum "${this.name}" cannot represent non-string value: ${s}.`+ss(this,s))}const t=this.getValue(n);if(t==null)throw new Y(`Value "${n}" does not exist in "${this.name}" enum.`+ss(this,n));return t.value}parseLiteral(n,t){if(n.kind!==I.ENUM){const a=ut(n);throw new Y(`Enum "${this.name}" cannot represent non-enum value: ${a}.`+ss(this,a),{nodes:n})}const s=this.getValue(n.value);if(s==null){const a=ut(n);throw new Y(`Value "${a}" does not exist in "${this.name}" enum.`+ss(this,a),{nodes:n})}return s.value}toConfig(){const n=ii(this.getValues(),t=>t.name,t=>({description:t.description,value:t.value,deprecationReason:t.deprecationReason,extensions:t.extensions,astNode:t.astNode}));return{name:this.name,description:this.description,values:n,extensions:this.extensions,astNode:this.astNode,extensionASTNodes:this.extensionASTNodes}}toString(){return this.name}toJSON(){return this.toString()}}function ss(i,n){const t=i.getValues().map(a=>a.name),s=_s(n,t);return ws("the enum value",s)}function hw(i,n){return Si(n)||ge(!1,`${i} values must be an object with value names as keys.`),Object.entries(n).map(([t,s])=>(Si(s)||ge(!1,`${i}.${t} must refer to an object with a "value" key representing an internal value but got: ${q(s)}.`),{name:rw(t),description:s.description,value:s.value!==void 0?s.value:t,deprecationReason:s.deprecationReason,extensions:Bn(s.extensions),astNode:s.astNode}))}class gs{constructor(n){var t;this.name=rt(n.name),this.description=n.description,this.extensions=Bn(n.extensions),this.astNode=n.astNode,this.extensionASTNodes=(t=n.extensionASTNodes)!==null&&t!==void 0?t:[],this._fields=dw.bind(void 0,n)}get[Symbol.toStringTag](){return"GraphQLInputObjectType"}getFields(){return typeof this._fields=="function"&&(this._fields=this._fields()),this._fields}toConfig(){const n=_t(this.getFields(),t=>({description:t.description,type:t.type,defaultValue:t.defaultValue,deprecationReason:t.deprecationReason,extensions:t.extensions,astNode:t.astNode}));return{name:this.name,description:this.description,fields:n,extensions:this.extensions,astNode:this.astNode,extensionASTNodes:this.extensionASTNodes}}toString(){return this.name}toJSON(){return this.toString()}}function dw(i){const n=wf(i.fields);return Si(n)||ge(!1,`${i.name} fields must be an object with field names as keys or a function which returns such an object.`),_t(n,(t,s)=>(!("resolve"in t)||ge(!1,`${i.name}.${s} field has a resolve property, but Input Types cannot define resolvers.`),{name:rt(s),description:t.description,type:t.type,defaultValue:t.defaultValue,deprecationReason:t.deprecationReason,extensions:Bn(t.extensions),astNode:t.astNode}))}const Ka=2147483647,Za=-2147483648,pw=new kt({name:"Int",description:"The `Int` scalar type represents non-fractional signed whole numeric values. Int can represent values between -(2^31) and 2^31 - 1.",serialize(i){const n=or(i);if(typeof n=="boolean")return n?1:0;let t=n;if(typeof n=="string"&&n!==""&&(t=Number(n)),typeof t!="number"||!Number.isInteger(t))throw new Y(`Int cannot represent non-integer value: ${q(n)}`);if(t>Ka||t<Za)throw new Y("Int cannot represent non 32-bit signed integer value: "+q(n));return t},parseValue(i){if(typeof i!="number"||!Number.isInteger(i))throw new Y(`Int cannot represent non-integer value: ${q(i)}`);if(i>Ka||i<Za)throw new Y(`Int cannot represent non 32-bit signed integer value: ${i}`);return i},parseLiteral(i){if(i.kind!==I.INT)throw new Y(`Int cannot represent non-integer value: ${ut(i)}`,{nodes:i});const n=parseInt(i.value,10);if(n>Ka||n<Za)throw new Y(`Int cannot represent non 32-bit signed integer value: ${i.value}`,{nodes:i});return n}}),gw=new kt({name:"Float",description:"The `Float` scalar type represents signed double-precision fractional values as specified by [IEEE 754](https://en.wikipedia.org/wiki/IEEE_floating_point).",serialize(i){const n=or(i);if(typeof n=="boolean")return n?1:0;let t=n;if(typeof n=="string"&&n!==""&&(t=Number(n)),typeof t!="number"||!Number.isFinite(t))throw new Y(`Float cannot represent non numeric value: ${q(n)}`);return t},parseValue(i){if(typeof i!="number"||!Number.isFinite(i))throw new Y(`Float cannot represent non numeric value: ${q(i)}`);return i},parseLiteral(i){if(i.kind!==I.FLOAT&&i.kind!==I.INT)throw new Y(`Float cannot represent non numeric value: ${ut(i)}`,i);return parseFloat(i.value)}}),We=new kt({name:"String",description:"The `String` scalar type represents textual data, represented as UTF-8 character sequences. The String type is most often used by GraphQL to represent free-form human-readable text.",serialize(i){const n=or(i);if(typeof n=="string")return n;if(typeof n=="boolean")return n?"true":"false";if(typeof n=="number"&&Number.isFinite(n))return n.toString();throw new Y(`String cannot represent value: ${q(i)}`)},parseValue(i){if(typeof i!="string")throw new Y(`String cannot represent a non string value: ${q(i)}`);return i},parseLiteral(i){if(i.kind!==I.STRING)throw new Y(`String cannot represent a non string value: ${ut(i)}`,{nodes:i});return i.value}}),Mn=new kt({name:"Boolean",description:"The `Boolean` scalar type represents `true` or `false`.",serialize(i){const n=or(i);if(typeof n=="boolean")return n;if(Number.isFinite(n))return n!==0;throw new Y(`Boolean cannot represent a non boolean value: ${q(n)}`)},parseValue(i){if(typeof i!="boolean")throw new Y(`Boolean cannot represent a non boolean value: ${q(i)}`);return i},parseLiteral(i){if(i.kind!==I.BOOLEAN)throw new Y(`Boolean cannot represent a non boolean value: ${ut(i)}`,{nodes:i});return i.value}}),Nf=new kt({name:"ID",description:'The `ID` scalar type represents a unique identifier, often used to refetch an object or as key for a cache. The ID type appears in a JSON response as a String; however, it is not intended to be human-readable. When expected as an input type, any string (such as `"4"`) or integer (such as `4`) input value will be accepted as an ID.',serialize(i){const n=or(i);if(typeof n=="string")return n;if(Number.isInteger(n))return String(n);throw new Y(`ID cannot represent value: ${q(i)}`)},parseValue(i){if(typeof i=="string")return i;if(typeof i=="number"&&Number.isInteger(i))return i.toString();throw new Y(`ID cannot represent value: ${q(i)}`)},parseLiteral(i){if(i.kind!==I.STRING&&i.kind!==I.INT)throw new Y("ID cannot represent a non-string and non-integer value: "+ut(i),{nodes:i});return i.value}}),Is=Object.freeze([We,pw,gw,Mn,Nf]);function mw(i){return Is.some(({name:n})=>i.name===n)}function or(i){if(Nt(i)){if(typeof i.valueOf=="function"){const n=i.valueOf();if(!Nt(n))return n}if(typeof i.toJSON=="function")return i.toJSON()}return i}function vw(i){return ft(i,Yt)}class Yt{constructor(n){var t,s;this.name=rt(n.name),this.description=n.description,this.locations=n.locations,this.isRepeatable=(t=n.isRepeatable)!==null&&t!==void 0?t:!1,this.extensions=Bn(n.extensions),this.astNode=n.astNode,Array.isArray(n.locations)||ge(!1,`@${n.name} locations must be an Array.`);const a=(s=n.args)!==null&&s!==void 0?s:{};Nt(a)&&!Array.isArray(a)||ge(!1,`@${n.name} args must be an object with argument names as keys.`),this.args=Ef(a)}get[Symbol.toStringTag](){return"GraphQLDirective"}toConfig(){return{name:this.name,description:this.description,locations:this.locations,args:Af(this.args),isRepeatable:this.isRepeatable,extensions:this.extensions,astNode:this.astNode}}toString(){return"@"+this.name}toJSON(){return this.toString()}}const yw=new Yt({name:"include",description:"Directs the executor to include this field or fragment only when the `if` argument is true.",locations:[j.FIELD,j.FRAGMENT_SPREAD,j.INLINE_FRAGMENT],args:{if:{type:new ue(Mn),description:"Included when true."}}}),Tw=new Yt({name:"skip",description:"Directs the executor to skip this field or fragment when the `if` argument is true.",locations:[j.FIELD,j.FRAGMENT_SPREAD,j.INLINE_FRAGMENT],args:{if:{type:new ue(Mn),description:"Skipped when true."}}}),bw="No longer supported",kf=new Yt({name:"deprecated",description:"Marks an element of a GraphQL schema as no longer supported.",locations:[j.FIELD_DEFINITION,j.ARGUMENT_DEFINITION,j.INPUT_FIELD_DEFINITION,j.ENUM_VALUE],args:{reason:{type:We,description:"Explains why this element was deprecated, usually also including a suggestion for how to access supported similar data. Formatted using the Markdown syntax, as specified by [CommonMark](https://commonmark.org/).",defaultValue:bw}}}),xf=new Yt({name:"specifiedBy",description:"Exposes a URL that specifies the behavior of this scalar.",locations:[j.SCALAR],args:{url:{type:new ue(We),description:"The URL that specifies the behavior of this scalar."}}}),xi=Object.freeze([yw,Tw,kf,xf]);function ww(i){return typeof i=="object"&&typeof(i==null?void 0:i[Symbol.iterator])=="function"}function er(i,n){if(un(n)){const t=er(i,n.ofType);return(t==null?void 0:t.kind)===I.NULL?null:t}if(i===null)return{kind:I.NULL};if(i===void 0)return null;if(oi(n)){const t=n.ofType;if(ww(i)){const s=[];for(const a of i){const l=er(a,t);l!=null&&s.push(l)}return{kind:I.LIST,values:s}}return er(i,t)}if(Zn(n)){if(!Nt(i))return null;const t=[];for(const s of Object.values(n.getFields())){const a=er(i[s.name],s.type);a&&t.push({kind:I.OBJECT_FIELD,name:{kind:I.NAME,value:s.name},value:a})}return{kind:I.OBJECT,fields:t}}if(yf(n)){const t=n.serialize(i);if(t==null)return null;if(typeof t=="boolean")return{kind:I.BOOLEAN,value:t};if(typeof t=="number"&&Number.isFinite(t)){const s=String(t);return Pc.test(s)?{kind:I.INT,value:s}:{kind:I.FLOAT,value:s}}if(typeof t=="string")return Kn(n)?{kind:I.ENUM,value:t}:n===Nf&&Pc.test(t)?{kind:I.INT,value:t}:{kind:I.STRING,value:t};throw new TypeError(`Cannot convert value to AST: ${q(t)}.`)}Jn(!1,"Unexpected input type: "+q(n))}const Pc=/^-?(?:0|[1-9][0-9]*)$/,So=new ct({name:"__Schema",description:"A GraphQL Schema defines the capabilities of a GraphQL server. It exposes all available types and directives on the server, as well as the entry points for query, mutation, and subscription operations.",fields:()=>({description:{type:We,resolve:i=>i.description},types:{description:"A list of all types supported by this server.",type:new ue(new vn(new ue(Qn))),resolve(i){return Object.values(i.getTypeMap())}},queryType:{description:"The type that query operations will be rooted at.",type:new ue(Qn),resolve:i=>i.getQueryType()},mutationType:{description:"If this server supports mutation, the type that mutation operations will be rooted at.",type:Qn,resolve:i=>i.getMutationType()},subscriptionType:{description:"If this server support subscription, the type that subscription operations will be rooted at.",type:Qn,resolve:i=>i.getSubscriptionType()},directives:{description:"A list of all directives supported by this server.",type:new ue(new vn(new ue(Of))),resolve:i=>i.getDirectives()}})}),Of=new ct({name:"__Directive",description:`A Directive provides a way to describe alternate runtime execution and type validation behavior in a GraphQL document.

In some cases, you need to provide options to alter GraphQL's execution behavior in ways field arguments will not suffice, such as conditionally including or skipping a field. Directives provide this by describing additional information to the executor.`,fields:()=>({name:{type:new ue(We),resolve:i=>i.name},description:{type:We,resolve:i=>i.description},isRepeatable:{type:new ue(Mn),resolve:i=>i.isRepeatable},locations:{type:new ue(new vn(new ue(Rf))),resolve:i=>i.locations},args:{type:new ue(new vn(new ue(Es))),args:{includeDeprecated:{type:Mn,defaultValue:!1}},resolve(i,{includeDeprecated:n}){return n?i.args:i.args.filter(t=>t.deprecationReason==null)}}})}),Rf=new Ni({name:"__DirectiveLocation",description:"A Directive can be adjacent to many parts of the GraphQL language, a __DirectiveLocation describes one such possible adjacencies.",values:{QUERY:{value:j.QUERY,description:"Location adjacent to a query operation."},MUTATION:{value:j.MUTATION,description:"Location adjacent to a mutation operation."},SUBSCRIPTION:{value:j.SUBSCRIPTION,description:"Location adjacent to a subscription operation."},FIELD:{value:j.FIELD,description:"Location adjacent to a field."},FRAGMENT_DEFINITION:{value:j.FRAGMENT_DEFINITION,description:"Location adjacent to a fragment definition."},FRAGMENT_SPREAD:{value:j.FRAGMENT_SPREAD,description:"Location adjacent to a fragment spread."},INLINE_FRAGMENT:{value:j.INLINE_FRAGMENT,description:"Location adjacent to an inline fragment."},VARIABLE_DEFINITION:{value:j.VARIABLE_DEFINITION,description:"Location adjacent to a variable definition."},SCHEMA:{value:j.SCHEMA,description:"Location adjacent to a schema definition."},SCALAR:{value:j.SCALAR,description:"Location adjacent to a scalar definition."},OBJECT:{value:j.OBJECT,description:"Location adjacent to an object type definition."},FIELD_DEFINITION:{value:j.FIELD_DEFINITION,description:"Location adjacent to a field definition."},ARGUMENT_DEFINITION:{value:j.ARGUMENT_DEFINITION,description:"Location adjacent to an argument definition."},INTERFACE:{value:j.INTERFACE,description:"Location adjacent to an interface definition."},UNION:{value:j.UNION,description:"Location adjacent to a union definition."},ENUM:{value:j.ENUM,description:"Location adjacent to an enum definition."},ENUM_VALUE:{value:j.ENUM_VALUE,description:"Location adjacent to an enum value definition."},INPUT_OBJECT:{value:j.INPUT_OBJECT,description:"Location adjacent to an input object type definition."},INPUT_FIELD_DEFINITION:{value:j.INPUT_FIELD_DEFINITION,description:"Location adjacent to an input object field definition."}}}),Qn=new ct({name:"__Type",description:"The fundamental unit of any GraphQL Schema is the type. There are many kinds of types in GraphQL as represented by the `__TypeKind` enum.\n\nDepending on the kind of a type, certain fields describe information about that type. Scalar types provide no information beyond a name, description and optional `specifiedByURL`, while Enum types provide their values. Object and Interface types provide the fields they describe. Abstract types, Union and Interface, provide the Object types possible at runtime. List and NonNull types compose other types.",fields:()=>({kind:{type:new ue(Cf),resolve(i){if(qt(i))return Ae.SCALAR;if(yn(i))return Ae.OBJECT;if(cn(i))return Ae.INTERFACE;if(Xn(i))return Ae.UNION;if(Kn(i))return Ae.ENUM;if(Zn(i))return Ae.INPUT_OBJECT;if(oi(i))return Ae.LIST;if(un(i))return Ae.NON_NULL;Jn(!1,`Unexpected type: "${q(i)}".`)}},name:{type:We,resolve:i=>"name"in i?i.name:void 0},description:{type:We,resolve:i=>"description"in i?i.description:void 0},specifiedByURL:{type:We,resolve:i=>"specifiedByURL"in i?i.specifiedByURL:void 0},fields:{type:new vn(new ue(Df)),args:{includeDeprecated:{type:Mn,defaultValue:!1}},resolve(i,{includeDeprecated:n}){if(yn(i)||cn(i)){const t=Object.values(i.getFields());return n?t:t.filter(s=>s.deprecationReason==null)}}},interfaces:{type:new vn(new ue(Qn)),resolve(i){if(yn(i)||cn(i))return i.getInterfaces()}},possibleTypes:{type:new vn(new ue(Qn)),resolve(i,n,t,{schema:s}){if(ow(i))return s.getPossibleTypes(i)}},enumValues:{type:new vn(new ue(Lf)),args:{includeDeprecated:{type:Mn,defaultValue:!1}},resolve(i,{includeDeprecated:n}){if(Kn(i)){const t=i.getValues();return n?t:t.filter(s=>s.deprecationReason==null)}}},inputFields:{type:new vn(new ue(Es)),args:{includeDeprecated:{type:Mn,defaultValue:!1}},resolve(i,{includeDeprecated:n}){if(Zn(i)){const t=Object.values(i.getFields());return n?t:t.filter(s=>s.deprecationReason==null)}}},ofType:{type:Qn,resolve:i=>"ofType"in i?i.ofType:void 0}})}),Df=new ct({name:"__Field",description:"Object and Interface types are described by a list of Fields, each of which has a name, potentially a list of arguments, and a return type.",fields:()=>({name:{type:new ue(We),resolve:i=>i.name},description:{type:We,resolve:i=>i.description},args:{type:new ue(new vn(new ue(Es))),args:{includeDeprecated:{type:Mn,defaultValue:!1}},resolve(i,{includeDeprecated:n}){return n?i.args:i.args.filter(t=>t.deprecationReason==null)}},type:{type:new ue(Qn),resolve:i=>i.type},isDeprecated:{type:new ue(Mn),resolve:i=>i.deprecationReason!=null},deprecationReason:{type:We,resolve:i=>i.deprecationReason}})}),Es=new ct({name:"__InputValue",description:"Arguments provided to Fields or Directives and the input fields of an InputObject are represented as Input Values which describe their type and optionally a default value.",fields:()=>({name:{type:new ue(We),resolve:i=>i.name},description:{type:We,resolve:i=>i.description},type:{type:new ue(Qn),resolve:i=>i.type},defaultValue:{type:We,description:"A GraphQL-formatted string representing the default value for this input value.",resolve(i){const{type:n,defaultValue:t}=i,s=er(t,n);return s?ut(s):null}},isDeprecated:{type:new ue(Mn),resolve:i=>i.deprecationReason!=null},deprecationReason:{type:We,resolve:i=>i.deprecationReason}})}),Lf=new ct({name:"__EnumValue",description:"One possible value for a given Enum. Enum values are unique values, not a placeholder for a string or numeric value. However an Enum value is returned in a JSON response as a string.",fields:()=>({name:{type:new ue(We),resolve:i=>i.name},description:{type:We,resolve:i=>i.description},isDeprecated:{type:new ue(Mn),resolve:i=>i.deprecationReason!=null},deprecationReason:{type:We,resolve:i=>i.deprecationReason}})});var Ae;(function(i){i.SCALAR="SCALAR",i.OBJECT="OBJECT",i.INTERFACE="INTERFACE",i.UNION="UNION",i.ENUM="ENUM",i.INPUT_OBJECT="INPUT_OBJECT",i.LIST="LIST",i.NON_NULL="NON_NULL"})(Ae||(Ae={}));const Cf=new Ni({name:"__TypeKind",description:"An enum describing what kind of type a given `__Type` is.",values:{SCALAR:{value:Ae.SCALAR,description:"Indicates this type is a scalar."},OBJECT:{value:Ae.OBJECT,description:"Indicates this type is an object. `fields` and `interfaces` are valid fields."},INTERFACE:{value:Ae.INTERFACE,description:"Indicates this type is an interface. `fields`, `interfaces`, and `possibleTypes` are valid fields."},UNION:{value:Ae.UNION,description:"Indicates this type is a union. `possibleTypes` is a valid field."},ENUM:{value:Ae.ENUM,description:"Indicates this type is an enum. `enumValues` is a valid field."},INPUT_OBJECT:{value:Ae.INPUT_OBJECT,description:"Indicates this type is an input object. `inputFields` is a valid field."},LIST:{value:Ae.LIST,description:"Indicates this type is a list. `ofType` is a valid field."},NON_NULL:{value:Ae.NON_NULL,description:"Indicates this type is a non-null. `ofType` is a valid field."}}});new ue(So);new ue(We);new ue(We);const Ss=Object.freeze([So,Of,Rf,Qn,Df,Es,Lf,Cf]);function _w(i){return Ss.some(({name:n})=>i.name===n)}class Pf{constructor(n){var t,s;this.__validationErrors=n.assumeValid===!0?[]:void 0,Nt(n)||ge(!1,"Must provide configuration object."),!n.types||Array.isArray(n.types)||ge(!1,`"types" must be Array if provided but got: ${q(n.types)}.`),!n.directives||Array.isArray(n.directives)||ge(!1,`"directives" must be Array if provided but got: ${q(n.directives)}.`),this.description=n.description,this.extensions=Bn(n.extensions),this.astNode=n.astNode,this.extensionASTNodes=(t=n.extensionASTNodes)!==null&&t!==void 0?t:[],this._queryType=n.query,this._mutationType=n.mutation,this._subscriptionType=n.subscription,this._directives=(s=n.directives)!==null&&s!==void 0?s:xi;const a=new Set(n.types);if(n.types!=null)for(const l of n.types)a.delete(l),zn(l,a);this._queryType!=null&&zn(this._queryType,a),this._mutationType!=null&&zn(this._mutationType,a),this._subscriptionType!=null&&zn(this._subscriptionType,a);for(const l of this._directives)if(vw(l))for(const c of l.args)zn(c.type,a);zn(So,a),this._typeMap=Object.create(null),this._subTypeMap=Object.create(null),this._implementationsMap=Object.create(null);for(const l of a){if(l==null)continue;const c=l.name;if(c||ge(!1,"One of the provided types for building the Schema is missing a name."),this._typeMap[c]!==void 0)throw new Error(`Schema must contain uniquely named types but contains multiple types named "${c}".`);if(this._typeMap[c]=l,cn(l)){for(const h of l.getInterfaces())if(cn(h)){let d=this._implementationsMap[h.name];d===void 0&&(d=this._implementationsMap[h.name]={objects:[],interfaces:[]}),d.interfaces.push(l)}}else if(yn(l)){for(const h of l.getInterfaces())if(cn(h)){let d=this._implementationsMap[h.name];d===void 0&&(d=this._implementationsMap[h.name]={objects:[],interfaces:[]}),d.objects.push(l)}}}}get[Symbol.toStringTag](){return"GraphQLSchema"}getQueryType(){return this._queryType}getMutationType(){return this._mutationType}getSubscriptionType(){return this._subscriptionType}getRootType(n){switch(n){case Un.QUERY:return this.getQueryType();case Un.MUTATION:return this.getMutationType();case Un.SUBSCRIPTION:return this.getSubscriptionType()}}getTypeMap(){return this._typeMap}getType(n){return this.getTypeMap()[n]}getPossibleTypes(n){return Xn(n)?n.getTypes():this.getImplementations(n).objects}getImplementations(n){const t=this._implementationsMap[n.name];return t??{objects:[],interfaces:[]}}isSubType(n,t){let s=this._subTypeMap[n.name];if(s===void 0){if(s=Object.create(null),Xn(n))for(const a of n.getTypes())s[a.name]=!0;else{const a=this.getImplementations(n);for(const l of a.objects)s[l.name]=!0;for(const l of a.interfaces)s[l.name]=!0}this._subTypeMap[n.name]=s}return s[t.name]!==void 0}getDirectives(){return this._directives}getDirective(n){return this.getDirectives().find(t=>t.name===n)}toConfig(){return{description:this.description,query:this.getQueryType(),mutation:this.getMutationType(),subscription:this.getSubscriptionType(),types:Object.values(this.getTypeMap()),directives:this.getDirectives(),extensions:this.extensions,astNode:this.astNode,extensionASTNodes:this.extensionASTNodes,assumeValid:this.__validationErrors!==void 0}}}function zn(i,n){const t=uw(i);if(!n.has(t)){if(n.add(t),Xn(t))for(const s of t.getTypes())zn(s,n);else if(yn(t)||cn(t)){for(const s of t.getInterfaces())zn(s,n);for(const s of Object.values(t.getFields())){zn(s.type,n);for(const a of s.args)zn(a.type,n)}}else if(Zn(t))for(const s of Object.values(t.getFields()))zn(s.type,n)}return n}function Iw(i){return i.kind===I.SCHEMA_DEFINITION||lr(i)||i.kind===I.DIRECTIVE_DEFINITION}function lr(i){return i.kind===I.SCALAR_TYPE_DEFINITION||i.kind===I.OBJECT_TYPE_DEFINITION||i.kind===I.INTERFACE_TYPE_DEFINITION||i.kind===I.UNION_TYPE_DEFINITION||i.kind===I.ENUM_TYPE_DEFINITION||i.kind===I.INPUT_OBJECT_TYPE_DEFINITION}function Ew(i){return i.kind===I.SCHEMA_EXTENSION||Ao(i)}function Ao(i){return i.kind===I.SCALAR_TYPE_EXTENSION||i.kind===I.OBJECT_TYPE_EXTENSION||i.kind===I.INTERFACE_TYPE_EXTENSION||i.kind===I.UNION_TYPE_EXTENSION||i.kind===I.ENUM_TYPE_EXTENSION||i.kind===I.INPUT_OBJECT_TYPE_EXTENSION}function Sw(i){const n=Object.create(null),t=i.getSchema(),s=t?t.getDirectives():xi;for(const c of s)n[c.name]=c.args.map(h=>h.name);const a=i.getDocument().definitions;for(const c of a)if(c.kind===I.DIRECTIVE_DEFINITION){var l;const h=(l=c.arguments)!==null&&l!==void 0?l:[];n[c.name.value]=h.map(d=>d.name.value)}return{Directive(c){const h=c.name.value,d=n[h];if(c.arguments&&d)for(const v of c.arguments){const T=v.name.value;if(!d.includes(T)){const w=_s(T,d);i.reportError(new Y(`Unknown argument "${T}" on directive "@${h}".`+ws(w),{nodes:v}))}}return!1}}}function Aw(i){const n=Object.create(null),t=i.getSchema(),s=t?t.getDirectives():xi;for(const l of s)n[l.name]=l.locations;const a=i.getDocument().definitions;for(const l of a)l.kind===I.DIRECTIVE_DEFINITION&&(n[l.name.value]=l.locations.map(c=>c.value));return{Directive(l,c,h,d,v){const T=l.name.value,w=n[T];if(!w){i.reportError(new Y(`Unknown directive "@${T}".`,{nodes:l}));return}const D=Nw(v);D&&!w.includes(D)&&i.reportError(new Y(`Directive "@${T}" may not be used on ${D}.`,{nodes:l}))}}}function Nw(i){const n=i[i.length-1];switch("kind"in n||Jn(!1),n.kind){case I.OPERATION_DEFINITION:return kw(n.operation);case I.FIELD:return j.FIELD;case I.FRAGMENT_SPREAD:return j.FRAGMENT_SPREAD;case I.INLINE_FRAGMENT:return j.INLINE_FRAGMENT;case I.FRAGMENT_DEFINITION:return j.FRAGMENT_DEFINITION;case I.VARIABLE_DEFINITION:return j.VARIABLE_DEFINITION;case I.SCHEMA_DEFINITION:case I.SCHEMA_EXTENSION:return j.SCHEMA;case I.SCALAR_TYPE_DEFINITION:case I.SCALAR_TYPE_EXTENSION:return j.SCALAR;case I.OBJECT_TYPE_DEFINITION:case I.OBJECT_TYPE_EXTENSION:return j.OBJECT;case I.FIELD_DEFINITION:return j.FIELD_DEFINITION;case I.INTERFACE_TYPE_DEFINITION:case I.INTERFACE_TYPE_EXTENSION:return j.INTERFACE;case I.UNION_TYPE_DEFINITION:case I.UNION_TYPE_EXTENSION:return j.UNION;case I.ENUM_TYPE_DEFINITION:case I.ENUM_TYPE_EXTENSION:return j.ENUM;case I.ENUM_VALUE_DEFINITION:return j.ENUM_VALUE;case I.INPUT_OBJECT_TYPE_DEFINITION:case I.INPUT_OBJECT_TYPE_EXTENSION:return j.INPUT_OBJECT;case I.INPUT_VALUE_DEFINITION:{const t=i[i.length-3];return"kind"in t||Jn(!1),t.kind===I.INPUT_OBJECT_TYPE_DEFINITION?j.INPUT_FIELD_DEFINITION:j.ARGUMENT_DEFINITION}default:Jn(!1,"Unexpected kind: "+q(n.kind))}}function kw(i){switch(i){case Un.QUERY:return j.QUERY;case Un.MUTATION:return j.MUTATION;case Un.SUBSCRIPTION:return j.SUBSCRIPTION}}function xw(i){const n=i.getSchema(),t=n?n.getTypeMap():Object.create(null),s=Object.create(null);for(const l of i.getDocument().definitions)lr(l)&&(s[l.name.value]=!0);const a=[...Object.keys(t),...Object.keys(s)];return{NamedType(l,c,h,d,v){const T=l.name.value;if(!t[T]&&!s[T]){var w;const D=(w=v[2])!==null&&w!==void 0?w:h,S=D!=null&&Ow(D);if(S&&Fc.includes(T))return;const C=_s(T,S?Fc.concat(a):a);i.reportError(new Y(`Unknown type "${T}".`+ws(C),{nodes:l}))}}}}const Fc=[...Is,...Ss].map(i=>i.name);function Ow(i){return"kind"in i&&(Iw(i)||Ew(i))}function Rw(i){var n,t,s;const a=i.getSchema(),l=(n=(t=(s=a==null?void 0:a.astNode)!==null&&s!==void 0?s:a==null?void 0:a.getQueryType())!==null&&t!==void 0?t:a==null?void 0:a.getMutationType())!==null&&n!==void 0?n:a==null?void 0:a.getSubscriptionType();let c=0;return{SchemaDefinition(h){if(l){i.reportError(new Y("Cannot define a new schema within a schema extension.",{nodes:h}));return}c>0&&i.reportError(new Y("Must provide only one schema definition.",{nodes:h})),++c}}}function Dw(i){const n=i.getSchema(),t=Object.create(null);for(const a of i.getDocument().definitions)lr(a)&&(t[a.name.value]=a);return{ScalarTypeExtension:s,ObjectTypeExtension:s,InterfaceTypeExtension:s,UnionTypeExtension:s,EnumTypeExtension:s,InputObjectTypeExtension:s};function s(a){const l=a.name.value,c=t[l],h=n==null?void 0:n.getType(l);let d;if(c?d=Lw[c.kind]:h&&(d=Cw(h)),d){if(d!==a.kind){const v=Pw(a.kind);i.reportError(new Y(`Cannot extend non-${v} type "${l}".`,{nodes:c?[c,a]:a}))}}else{const v=Object.keys({...t,...n==null?void 0:n.getTypeMap()}),T=_s(l,v);i.reportError(new Y(`Cannot extend type "${l}" because it is not defined.`+ws(T),{nodes:a.name}))}}}const Lw={[I.SCALAR_TYPE_DEFINITION]:I.SCALAR_TYPE_EXTENSION,[I.OBJECT_TYPE_DEFINITION]:I.OBJECT_TYPE_EXTENSION,[I.INTERFACE_TYPE_DEFINITION]:I.INTERFACE_TYPE_EXTENSION,[I.UNION_TYPE_DEFINITION]:I.UNION_TYPE_EXTENSION,[I.ENUM_TYPE_DEFINITION]:I.ENUM_TYPE_EXTENSION,[I.INPUT_OBJECT_TYPE_DEFINITION]:I.INPUT_OBJECT_TYPE_EXTENSION};function Cw(i){if(qt(i))return I.SCALAR_TYPE_EXTENSION;if(yn(i))return I.OBJECT_TYPE_EXTENSION;if(cn(i))return I.INTERFACE_TYPE_EXTENSION;if(Xn(i))return I.UNION_TYPE_EXTENSION;if(Kn(i))return I.ENUM_TYPE_EXTENSION;if(Zn(i))return I.INPUT_OBJECT_TYPE_EXTENSION;Jn(!1,"Unexpected type: "+q(i))}function Pw(i){switch(i){case I.SCALAR_TYPE_EXTENSION:return"scalar";case I.OBJECT_TYPE_EXTENSION:return"object";case I.INTERFACE_TYPE_EXTENSION:return"interface";case I.UNION_TYPE_EXTENSION:return"union";case I.ENUM_TYPE_EXTENSION:return"enum";case I.INPUT_OBJECT_TYPE_EXTENSION:return"input object";default:Jn(!1,"Unexpected kind: "+q(i))}}function Fw(i){var n;const t=Object.create(null),s=i.getSchema(),a=(n=s==null?void 0:s.getDirectives())!==null&&n!==void 0?n:xi;for(const h of a)t[h.name]=Ai(h.args.filter(cw),d=>d.name);const l=i.getDocument().definitions;for(const h of l)if(h.kind===I.DIRECTIVE_DEFINITION){var c;const d=(c=h.arguments)!==null&&c!==void 0?c:[];t[h.name.value]=Ai(d.filter(Uw),v=>v.name.value)}return{Directive:{leave(h){const d=h.name.value,v=t[d];if(v){var T;const w=(T=h.arguments)!==null&&T!==void 0?T:[],D=new Set(w.map(S=>S.name.value));for(const[S,C]of Object.entries(v))if(!D.has(S)){const P=Io(C.type)?q(C.type):ut(C.type);i.reportError(new Y(`Directive "@${d}" argument "${S}" of type "${P}" is required, but it was not provided.`,{nodes:h}))}}}}}}function Uw(i){return i.type.kind===I.NON_NULL_TYPE&&i.defaultValue==null}function $t(i,n,t){if(i){if(i.kind===I.VARIABLE){const s=i.name.value;if(t==null||t[s]===void 0)return;const a=t[s];return a===null&&un(n)?void 0:a}if(un(n))return i.kind===I.NULL?void 0:$t(i,n.ofType,t);if(i.kind===I.NULL)return null;if(oi(n)){const s=n.ofType;if(i.kind===I.LIST){const l=[];for(const c of i.values)if(Uc(c,t)){if(un(s))return;l.push(null)}else{const h=$t(c,s,t);if(h===void 0)return;l.push(h)}return l}const a=$t(i,s,t);return a===void 0?void 0:[a]}if(Zn(n)){if(i.kind!==I.OBJECT)return;const s=Object.create(null),a=Ai(i.fields,l=>l.name.value);for(const l of Object.values(n.getFields())){const c=a[l.name];if(!c||Uc(c.value,t)){if(l.defaultValue!==void 0)s[l.name]=l.defaultValue;else if(un(l.type))return;continue}const h=$t(c.value,l.type,t);if(h===void 0)return;s[l.name]=h}return s}if(yf(n)){let s;try{s=n.parseLiteral(i,t)}catch{return}return s===void 0?void 0:s}Jn(!1,"Unexpected input type: "+q(n))}}function Uc(i,n){return i.kind===I.VARIABLE&&(n==null||n[i.name.value]===void 0)}function Mw(i,n,t){var s;const a={},l=(s=n.arguments)!==null&&s!==void 0?s:[],c=Ai(l,h=>h.name.value);for(const h of i.args){const d=h.name,v=h.type,T=c[d];if(!T){if(h.defaultValue!==void 0)a[d]=h.defaultValue;else if(un(v))throw new Y(`Argument "${d}" of required type "${q(v)}" was not provided.`,{nodes:n});continue}const w=T.value;let D=w.kind===I.NULL;if(w.kind===I.VARIABLE){const C=w.name.value;if(t==null||!Bw(t,C)){if(h.defaultValue!==void 0)a[d]=h.defaultValue;else if(un(v))throw new Y(`Argument "${d}" of required type "${q(v)}" was provided the variable "$${C}" which was not provided a runtime value.`,{nodes:w});continue}D=t[C]==null}if(D&&un(v))throw new Y(`Argument "${d}" of non-null type "${q(v)}" must not be null.`,{nodes:w});const S=$t(w,v,t);if(S===void 0)throw new Y(`Argument "${d}" has invalid value ${ut(w)}.`,{nodes:w});a[d]=S}return a}function Ff(i,n,t){var s;const a=(s=n.directives)===null||s===void 0?void 0:s.find(l=>l.name.value===i.name);if(a)return Mw(i,a,t)}function Bw(i,n){return Object.prototype.hasOwnProperty.call(i,n)}function Uf(i,n){const t=new Map;for(const s of i){const a=n(s),l=t.get(a);l===void 0?t.set(a,[s]):l.push(s)}return t}function $w(i){return{DirectiveDefinition(s){var a;const l=(a=s.arguments)!==null&&a!==void 0?a:[];return t(`@${s.name.value}`,l)},InterfaceTypeDefinition:n,InterfaceTypeExtension:n,ObjectTypeDefinition:n,ObjectTypeExtension:n};function n(s){var a;const l=s.name.value,c=(a=s.fields)!==null&&a!==void 0?a:[];for(const d of c){var h;const v=d.name.value,T=(h=d.arguments)!==null&&h!==void 0?h:[];t(`${l}.${v}`,T)}return!1}function t(s,a){const l=Uf(a,c=>c.name.value);for(const[c,h]of l)h.length>1&&i.reportError(new Y(`Argument "${s}(${c}:)" can only be defined once.`,{nodes:h.map(d=>d.name)}));return!1}}function Gw(i){return{Field:n,Directive:n};function n(t){var s;const a=(s=t.arguments)!==null&&s!==void 0?s:[],l=Uf(a,c=>c.name.value);for(const[c,h]of l)h.length>1&&i.reportError(new Y(`There can be only one argument named "${c}".`,{nodes:h.map(d=>d.name)}))}}function Vw(i){const n=Object.create(null),t=i.getSchema();return{DirectiveDefinition(s){const a=s.name.value;if(t!=null&&t.getDirective(a)){i.reportError(new Y(`Directive "@${a}" already exists in the schema. It cannot be redefined.`,{nodes:s.name}));return}return n[a]?i.reportError(new Y(`There can be only one directive named "@${a}".`,{nodes:[n[a],s.name]})):n[a]=s.name,!1}}}function Ww(i){const n=Object.create(null),t=i.getSchema(),s=t?t.getDirectives():xi;for(const h of s)n[h.name]=!h.isRepeatable;const a=i.getDocument().definitions;for(const h of a)h.kind===I.DIRECTIVE_DEFINITION&&(n[h.name.value]=!h.repeatable);const l=Object.create(null),c=Object.create(null);return{enter(h){if(!("directives"in h)||!h.directives)return;let d;if(h.kind===I.SCHEMA_DEFINITION||h.kind===I.SCHEMA_EXTENSION)d=l;else if(lr(h)||Ao(h)){const v=h.name.value;d=c[v],d===void 0&&(c[v]=d=Object.create(null))}else d=Object.create(null);for(const v of h.directives){const T=v.name.value;n[T]&&(d[T]?i.reportError(new Y(`The directive "@${T}" can only be used once at this location.`,{nodes:[d[T],v]})):d[T]=v)}}}}function Yw(i){const n=i.getSchema(),t=n?n.getTypeMap():Object.create(null),s=Object.create(null);return{EnumTypeDefinition:a,EnumTypeExtension:a};function a(l){var c;const h=l.name.value;s[h]||(s[h]=Object.create(null));const d=(c=l.values)!==null&&c!==void 0?c:[],v=s[h];for(const T of d){const w=T.name.value,D=t[h];Kn(D)&&D.getValue(w)?i.reportError(new Y(`Enum value "${h}.${w}" already exists in the schema. It cannot also be defined in this type extension.`,{nodes:T.name})):v[w]?i.reportError(new Y(`Enum value "${h}.${w}" can only be defined once.`,{nodes:[v[w],T.name]})):v[w]=T.name}return!1}}function qw(i){const n=i.getSchema(),t=n?n.getTypeMap():Object.create(null),s=Object.create(null);return{InputObjectTypeDefinition:a,InputObjectTypeExtension:a,InterfaceTypeDefinition:a,InterfaceTypeExtension:a,ObjectTypeDefinition:a,ObjectTypeExtension:a};function a(l){var c;const h=l.name.value;s[h]||(s[h]=Object.create(null));const d=(c=l.fields)!==null&&c!==void 0?c:[],v=s[h];for(const T of d){const w=T.name.value;jw(t[h],w)?i.reportError(new Y(`Field "${h}.${w}" already exists in the schema. It cannot also be defined in this type extension.`,{nodes:T.name})):v[w]?i.reportError(new Y(`Field "${h}.${w}" can only be defined once.`,{nodes:[v[w],T.name]})):v[w]=T.name}return!1}}function jw(i,n){return yn(i)||cn(i)||Zn(i)?i.getFields()[n]!=null:!1}function Hw(i){const n=[];let t=Object.create(null);return{ObjectValue:{enter(){n.push(t),t=Object.create(null)},leave(){const s=n.pop();s||Jn(!1),t=s}},ObjectField(s){const a=s.name.value;t[a]?i.reportError(new Y(`There can be only one input field named "${a}".`,{nodes:[t[a],s.name]})):t[a]=s.name}}}function zw(i){const n=i.getSchema(),t=Object.create(null),s=n?{query:n.getQueryType(),mutation:n.getMutationType(),subscription:n.getSubscriptionType()}:{};return{SchemaDefinition:a,SchemaExtension:a};function a(l){var c;const h=(c=l.operationTypes)!==null&&c!==void 0?c:[];for(const d of h){const v=d.operation,T=t[v];s[v]?i.reportError(new Y(`Type for ${v} already defined in the schema. It cannot be redefined.`,{nodes:d})):T?i.reportError(new Y(`There can be only one ${v} type in schema.`,{nodes:[T,d]})):t[v]=d}return!1}}function Qw(i){const n=Object.create(null),t=i.getSchema();return{ScalarTypeDefinition:s,ObjectTypeDefinition:s,InterfaceTypeDefinition:s,UnionTypeDefinition:s,EnumTypeDefinition:s,InputObjectTypeDefinition:s};function s(a){const l=a.name.value;if(t!=null&&t.getType(l)){i.reportError(new Y(`Type "${l}" already exists in the schema. It cannot also be defined in this type definition.`,{nodes:a.name}));return}return n[l]?i.reportError(new Y(`There can be only one type named "${l}".`,{nodes:[n[l],a.name]})):n[l]=a.name,!1}}const Jw=Object.freeze([Rw,zw,Qw,Yw,qw,$w,Vw,xw,Aw,Ww,Dw,Sw,Gw,Hw,Fw]);class Xw{constructor(n,t){this._ast=n,this._fragments=void 0,this._fragmentSpreads=new Map,this._recursivelyReferencedFragments=new Map,this._onError=t}get[Symbol.toStringTag](){return"ASTValidationContext"}reportError(n){this._onError(n)}getDocument(){return this._ast}getFragment(n){let t;if(this._fragments)t=this._fragments;else{t=Object.create(null);for(const s of this.getDocument().definitions)s.kind===I.FRAGMENT_DEFINITION&&(t[s.name.value]=s);this._fragments=t}return t[n]}getFragmentSpreads(n){let t=this._fragmentSpreads.get(n);if(!t){t=[];const s=[n];let a;for(;a=s.pop();)for(const l of a.selections)l.kind===I.FRAGMENT_SPREAD?t.push(l):l.selectionSet&&s.push(l.selectionSet);this._fragmentSpreads.set(n,t)}return t}getRecursivelyReferencedFragments(n){let t=this._recursivelyReferencedFragments.get(n);if(!t){t=[];const s=Object.create(null),a=[n.selectionSet];let l;for(;l=a.pop();)for(const c of this.getFragmentSpreads(l)){const h=c.name.value;if(s[h]!==!0){s[h]=!0;const d=this.getFragment(h);d&&(t.push(d),a.push(d.selectionSet))}}this._recursivelyReferencedFragments.set(n,t)}return t}}class Kw extends Xw{constructor(n,t,s){super(n,s),this._schema=t}get[Symbol.toStringTag](){return"SDLValidationContext"}getSchema(){return this._schema}}function Zw(i,n,t=Jw){const s=[],a=new Kw(i,n,c=>{s.push(c)}),l=t.map(c=>c(a));return pf(i,nw(l)),s}function e_(i){const n=Zw(i);if(n.length!==0)throw new Error(n.map(t=>t.message).join(`

`))}function n_(i,n){Nt(i)&&Nt(i.__schema)||ge(!1,`Invalid or incomplete introspection result. Ensure that you are passing "data" property of introspection response and no "errors" was returned alongside: ${q(i)}.`);const t=i.__schema,s=ii(t.types,R=>R.name,R=>D(R));for(const R of[...Is,...Ss])s[R.name]&&(s[R.name]=R);const a=t.queryType?T(t.queryType):null,l=t.mutationType?T(t.mutationType):null,c=t.subscriptionType?T(t.subscriptionType):null,h=t.directives?t.directives.map(An):[];return new Pf({description:t.description,query:a,mutation:l,subscription:c,types:Object.values(s),directives:h,assumeValid:n==null?void 0:n.assumeValid});function d(R){if(R.kind===Ae.LIST){const ne=R.ofType;if(!ne)throw new Error("Decorated type deeper than introspection query.");return new vn(d(ne))}if(R.kind===Ae.NON_NULL){const ne=R.ofType;if(!ne)throw new Error("Decorated type deeper than introspection query.");const sn=d(ne);return new ue(lw(sn))}return v(R)}function v(R){const ne=R.name;if(!ne)throw new Error(`Unknown type reference: ${q(R)}.`);const sn=s[ne];if(!sn)throw new Error(`Invalid or incomplete schema, unknown type: ${ne}. Ensure that a full introspection query is used in order to build a client schema.`);return sn}function T(R){return sw(v(R))}function w(R){return aw(v(R))}function D(R){if(R!=null&&R.name!=null&&R.kind!=null)switch(R.kind){case Ae.SCALAR:return S(R);case Ae.OBJECT:return P(R);case Ae.INTERFACE:return X(R);case Ae.UNION:return z(R);case Ae.ENUM:return de(R);case Ae.INPUT_OBJECT:return ve(R)}const ne=q(R);throw new Error(`Invalid or incomplete introspection result. Ensure that a full introspection query is used in order to build a client schema: ${ne}.`)}function S(R){return new kt({name:R.name,description:R.description,specifiedByURL:R.specifiedByURL})}function C(R){if(R.interfaces===null&&R.kind===Ae.INTERFACE)return[];if(!R.interfaces){const ne=q(R);throw new Error(`Introspection result missing interfaces: ${ne}.`)}return R.interfaces.map(w)}function P(R){return new ct({name:R.name,description:R.description,interfaces:()=>C(R),fields:()=>ye(R)})}function X(R){return new ds({name:R.name,description:R.description,interfaces:()=>C(R),fields:()=>ye(R)})}function z(R){if(!R.possibleTypes){const ne=q(R);throw new Error(`Introspection result missing possibleTypes: ${ne}.`)}return new ps({name:R.name,description:R.description,types:()=>R.possibleTypes.map(T)})}function de(R){if(!R.enumValues){const ne=q(R);throw new Error(`Introspection result missing enumValues: ${ne}.`)}return new Ni({name:R.name,description:R.description,values:ii(R.enumValues,ne=>ne.name,ne=>({description:ne.description,deprecationReason:ne.deprecationReason}))})}function ve(R){if(!R.inputFields){const ne=q(R);throw new Error(`Introspection result missing inputFields: ${ne}.`)}return new gs({name:R.name,description:R.description,fields:()=>ke(R.inputFields)})}function ye(R){if(!R.fields)throw new Error(`Introspection result missing fields: ${q(R)}.`);return ii(R.fields,ne=>ne.name,_e)}function _e(R){const ne=d(R.type);if(!vf(ne)){const sn=q(ne);throw new Error(`Introspection must provide output type for fields, but received: ${sn}.`)}if(!R.args){const sn=q(R);throw new Error(`Introspection result missing field args: ${sn}.`)}return{description:R.description,deprecationReason:R.deprecationReason,type:ne,args:ke(R.args)}}function ke(R){return ii(R,ne=>ne.name,Fe)}function Fe(R){const ne=d(R.type);if(!mf(ne)){const xt=q(ne);throw new Error(`Introspection must provide input type for arguments, but received: ${xt}.`)}const sn=R.defaultValue!=null?$t(j0(R.defaultValue),ne):void 0;return{description:R.description,type:ne,defaultValue:sn,deprecationReason:R.deprecationReason}}function An(R){if(!R.args){const ne=q(R);throw new Error(`Introspection result missing directive args: ${ne}.`)}if(!R.locations){const ne=q(R);throw new Error(`Introspection result missing directive locations: ${ne}.`)}return new Yt({name:R.name,description:R.description,isRepeatable:R.isRepeatable,locations:R.locations.slice(),args:ke(R.args)})}}function t_(i,n,t){var s,a,l,c;const h=[],d=Object.create(null),v=[];let T;const w=[];for(const N of n.definitions)if(N.kind===I.SCHEMA_DEFINITION)T=N;else if(N.kind===I.SCHEMA_EXTENSION)w.push(N);else if(lr(N))h.push(N);else if(Ao(N)){const G=N.name.value,U=d[G];d[G]=U?U.concat([N]):[N]}else N.kind===I.DIRECTIVE_DEFINITION&&v.push(N);if(Object.keys(d).length===0&&h.length===0&&v.length===0&&w.length===0&&T==null)return i;const D=Object.create(null);for(const N of i.types)D[N.name]=de(N);for(const N of h){var S;const G=N.name.value;D[G]=(S=Mc[G])!==null&&S!==void 0?S:Nn(N)}const C={query:i.query&&X(i.query),mutation:i.mutation&&X(i.mutation),subscription:i.subscription&&X(i.subscription),...T&&sn([T]),...sn(w)};return{description:(s=T)===null||s===void 0||(a=s.description)===null||a===void 0?void 0:a.value,...C,types:Object.values(D),directives:[...i.directives.map(z),...v.map(ur)],extensions:Object.create(null),astNode:(l=T)!==null&&l!==void 0?l:i.astNode,extensionASTNodes:i.extensionASTNodes.concat(w),assumeValid:(c=t==null?void 0:t.assumeValid)!==null&&c!==void 0?c:!1};function P(N){return oi(N)?new vn(P(N.ofType)):un(N)?new ue(P(N.ofType)):X(N)}function X(N){return D[N.name]}function z(N){const G=N.toConfig();return new Yt({...G,args:_t(G.args,ne)})}function de(N){if(_w(N)||mw(N))return N;if(qt(N))return _e(N);if(yn(N))return ke(N);if(cn(N))return Fe(N);if(Xn(N))return An(N);if(Kn(N))return ye(N);if(Zn(N))return ve(N);Jn(!1,"Unexpected type: "+q(N))}function ve(N){var G;const U=N.toConfig(),M=(G=d[U.name])!==null&&G!==void 0?G:[];return new gs({...U,fields:()=>({..._t(U.fields,Te=>({...Te,type:P(Te.type)})),...st(M)}),extensionASTNodes:U.extensionASTNodes.concat(M)})}function ye(N){var G;const U=N.toConfig(),M=(G=d[N.name])!==null&&G!==void 0?G:[];return new Ni({...U,values:{...U.values,...$n(M)},extensionASTNodes:U.extensionASTNodes.concat(M)})}function _e(N){var G;const U=N.toConfig(),M=(G=d[U.name])!==null&&G!==void 0?G:[];let Te=U.specifiedByURL;for(const be of M){var $e;Te=($e=Bc(be))!==null&&$e!==void 0?$e:Te}return new kt({...U,specifiedByURL:Te,extensionASTNodes:U.extensionASTNodes.concat(M)})}function ke(N){var G;const U=N.toConfig(),M=(G=d[U.name])!==null&&G!==void 0?G:[];return new ct({...U,interfaces:()=>[...N.getInterfaces().map(X),...ui(M)],fields:()=>({..._t(U.fields,R),...li(M)}),extensionASTNodes:U.extensionASTNodes.concat(M)})}function Fe(N){var G;const U=N.toConfig(),M=(G=d[U.name])!==null&&G!==void 0?G:[];return new ds({...U,interfaces:()=>[...N.getInterfaces().map(X),...ui(M)],fields:()=>({..._t(U.fields,R),...li(M)}),extensionASTNodes:U.extensionASTNodes.concat(M)})}function An(N){var G;const U=N.toConfig(),M=(G=d[U.name])!==null&&G!==void 0?G:[];return new ps({...U,types:()=>[...N.getTypes().map(X),...Ht(M)],extensionASTNodes:U.extensionASTNodes.concat(M)})}function R(N){return{...N,type:P(N.type),args:N.args&&_t(N.args,ne)}}function ne(N){return{...N,type:P(N.type)}}function sn(N){const G={};for(const M of N){var U;const Te=(U=M.operationTypes)!==null&&U!==void 0?U:[];for(const $e of Te)G[$e.operation]=xt($e.type)}return G}function xt(N){var G;const U=N.name.value,M=(G=Mc[U])!==null&&G!==void 0?G:D[U];if(M===void 0)throw new Error(`Unknown type: "${U}".`);return M}function jt(N){return N.kind===I.LIST_TYPE?new vn(jt(N.type)):N.kind===I.NON_NULL_TYPE?new ue(jt(N.type)):xt(N)}function ur(N){var G;return new Yt({name:N.name.value,description:(G=N.description)===null||G===void 0?void 0:G.value,locations:N.locations.map(({value:U})=>U),isRepeatable:N.repeatable,args:cr(N.arguments),astNode:N})}function li(N){const G=Object.create(null);for(const Te of N){var U;const $e=(U=Te.fields)!==null&&U!==void 0?U:[];for(const be of $e){var M;G[be.name.value]={type:jt(be.type),description:(M=be.description)===null||M===void 0?void 0:M.value,args:cr(be.arguments),deprecationReason:as(be),astNode:be}}}return G}function cr(N){const G=N??[],U=Object.create(null);for(const Te of G){var M;const $e=jt(Te.type);U[Te.name.value]={type:$e,description:(M=Te.description)===null||M===void 0?void 0:M.value,defaultValue:$t(Te.defaultValue,$e),deprecationReason:as(Te),astNode:Te}}return U}function st(N){const G=Object.create(null);for(const Te of N){var U;const $e=(U=Te.fields)!==null&&U!==void 0?U:[];for(const be of $e){var M;const kn=jt(be.type);G[be.name.value]={type:kn,description:(M=be.description)===null||M===void 0?void 0:M.value,defaultValue:$t(be.defaultValue,kn),deprecationReason:as(be),astNode:be}}}return G}function $n(N){const G=Object.create(null);for(const Te of N){var U;const $e=(U=Te.values)!==null&&U!==void 0?U:[];for(const be of $e){var M;G[be.name.value]={description:(M=be.description)===null||M===void 0?void 0:M.value,deprecationReason:as(be),astNode:be}}}return G}function ui(N){return N.flatMap(G=>{var U,M;return(U=(M=G.interfaces)===null||M===void 0?void 0:M.map(xt))!==null&&U!==void 0?U:[]})}function Ht(N){return N.flatMap(G=>{var U,M;return(U=(M=G.types)===null||M===void 0?void 0:M.map(xt))!==null&&U!==void 0?U:[]})}function Nn(N){var G;const U=N.name.value,M=(G=d[U])!==null&&G!==void 0?G:[];switch(N.kind){case I.OBJECT_TYPE_DEFINITION:{var Te;const Ze=[N,...M];return new ct({name:U,description:(Te=N.description)===null||Te===void 0?void 0:Te.value,interfaces:()=>ui(Ze),fields:()=>li(Ze),astNode:N,extensionASTNodes:M})}case I.INTERFACE_TYPE_DEFINITION:{var $e;const Ze=[N,...M];return new ds({name:U,description:($e=N.description)===null||$e===void 0?void 0:$e.value,interfaces:()=>ui(Ze),fields:()=>li(Ze),astNode:N,extensionASTNodes:M})}case I.ENUM_TYPE_DEFINITION:{var be;const Ze=[N,...M];return new Ni({name:U,description:(be=N.description)===null||be===void 0?void 0:be.value,values:$n(Ze),astNode:N,extensionASTNodes:M})}case I.UNION_TYPE_DEFINITION:{var kn;const Ze=[N,...M];return new ps({name:U,description:(kn=N.description)===null||kn===void 0?void 0:kn.value,types:()=>Ht(Ze),astNode:N,extensionASTNodes:M})}case I.SCALAR_TYPE_DEFINITION:{var Oi;return new kt({name:U,description:(Oi=N.description)===null||Oi===void 0?void 0:Oi.value,specifiedByURL:Bc(N),astNode:N,extensionASTNodes:M})}case I.INPUT_OBJECT_TYPE_DEFINITION:{var Ot;const Ze=[N,...M];return new gs({name:U,description:(Ot=N.description)===null||Ot===void 0?void 0:Ot.value,fields:()=>st(Ze),astNode:N,extensionASTNodes:M})}}}}const Mc=Ai([...Is,...Ss],i=>i.name);function as(i){const n=Ff(kf,i);return n==null?void 0:n.reason}function Bc(i){const n=Ff(xf,i);return n==null?void 0:n.url}function i_(i,n){i!=null&&i.kind===I.DOCUMENT||ge(!1,"Must provide valid Document AST."),(n==null?void 0:n.assumeValid)!==!0&&(n==null?void 0:n.assumeValidSDL)!==!0&&e_(i);const s=t_({description:void 0,types:[],directives:[],extensions:Object.create(null),extensionASTNodes:[],assumeValid:!1},i,n);if(s.astNode==null)for(const l of s.types)switch(l.name){case"Query":s.query=l;break;case"Mutation":s.mutation=l;break;case"Subscription":s.subscription=l;break}const a=[...s.directives,...xi.filter(l=>s.directives.every(c=>c.name!==l.name))];return new Pf({...s,directives:a})}function r_(i,n){const t=q0(i,{noLocation:n==null?void 0:n.noLocation,allowLegacyFragmentVariables:n==null?void 0:n.allowLegacyFragmentVariables});return i_(t,{assumeValidSDL:n==null?void 0:n.assumeValidSDL,assumeValid:n==null?void 0:n.assumeValid})}const $c=`
"""A public transport agency"""
type Agency implements Node {
  """
  Global object ID provided by Relay. This value can be used to refetch this object using **node** query.
  """
  id: ID!
  """Agency feed and id"""
  gtfsId: String!
  """Name of the agency"""
  name: String!
  """URL to the home page of the agency"""
  url: String!
  """ID of the time zone which this agency operates on"""
  timezone: String!
  lang: String
  """Phone number which customers can use to contact this agency"""
  phone: String
  """URL to a web page which has information of fares used by this agency"""
  fareUrl: String
  """List of routes operated by this agency"""
  routes: [Route]
  """
  By default, list of alerts which have an effect on all operations of the agency (e.g. a strike).
  It's also possible to return other relevant alerts through defining types.
  """
  alerts(
    """
    Returns alerts for these types that are relevant for the agency.
    By default only returns alerts that have an effect on all operations of the agency (e.g. a strike).
    """
    types: [AgencyAlertType]
  ): [Alert]
}


"""Entities, which are relevant for an agency and can contain alerts"""
enum AgencyAlertType {
  """Alerts affecting the agency."""
  AGENCY
  """Alerts affecting agency's routes"""
  ROUTES
  """
  Alerts affecting the different route types of the agency.
  Alerts that affect route types on all agencies can be fetched through Feed.
  """
  ROUTE_TYPES
}


"""Alert of a current or upcoming disruption in public transportation"""
type Alert implements Node {
  """
  Global object ID provided by Relay. This value can be used to refetch this object using **node** query.
  """
  id: ID!
  """hashcode from the original GTFS-RT alert"""
  alertHash: Int
  """The feed in which this alert was published"""
  feed: String
  """
  Agency affected by the disruption. Note that this value is present only if the
  disruption has an effect on all operations of the agency (e.g. in case of a strike).
  """
  agency: Agency @deprecated(reason: """
  Alert can have multiple affected entities now instead of there being duplicate alerts
  for different entities. This will return only one of the affected agencies.
  Use entities instead.
  """)
  """Route affected by the disruption"""
  route: Route @deprecated(reason: """
  Alert can have multiple affected entities now instead of there being duplicate alerts
  for different entities. This will return only one of the affected routes.
  Use entities instead.
  """)
  """Trip affected by the disruption"""
  trip: Trip @deprecated(reason: """
  Alert can have multiple affected entities now instead of there being duplicate alerts
  for different entities. This will return only one of the affected trips.
  Use entities instead.
  """)
  """Stop affected by the disruption"""
  stop: Stop @deprecated(reason: """
  Alert can have multiple affected entities now instead of there being duplicate alerts
  for different entities. This will return only one of the affected stops.
  Use entities instead.
  """)
  """Patterns affected by the disruption"""
  patterns: [Pattern] @deprecated(reason: "This will always return an empty list. Use entities instead.")
  """Header of the alert, if available"""
  alertHeaderText: String
  """Header of the alert in all different available languages"""
  alertHeaderTextTranslations: [TranslatedString!]!
  """Long description of the alert"""
  alertDescriptionText: String!
  """Long descriptions of the alert in all different available languages"""
  alertDescriptionTextTranslations: [TranslatedString!]!
  """Url with more information"""
  alertUrl: String
  """Url with more information in all different available languages"""
  alertUrlTranslations: [TranslatedString!]!
  """Alert effect"""
  alertEffect: AlertEffectType
  """Alert cause"""
  alertCause: AlertCauseType
  """Alert severity level"""
  alertSeverityLevel: AlertSeverityLevelType
  """
  Time when this alert comes into effect. Format: Unix timestamp in seconds
  """
  effectiveStartDate: Long
  """
  Time when this alert is not in effect anymore. Format: Unix timestamp in seconds
  """
  effectiveEndDate: Long
  """Entities affected by the disruption."""
  entities: [AlertEntity]
}


"""Cause of a alert"""
enum AlertCauseType {
  """UNKNOWN_CAUSE"""
  UNKNOWN_CAUSE
  """OTHER_CAUSE"""
  OTHER_CAUSE
  """TECHNICAL_PROBLEM"""
  TECHNICAL_PROBLEM
  """STRIKE"""
  STRIKE
  """DEMONSTRATION"""
  DEMONSTRATION
  """ACCIDENT"""
  ACCIDENT
  """HOLIDAY"""
  HOLIDAY
  """WEATHER"""
  WEATHER
  """MAINTENANCE"""
  MAINTENANCE
  """CONSTRUCTION"""
  CONSTRUCTION
  """POLICE_ACTIVITY"""
  POLICE_ACTIVITY
  """MEDICAL_EMERGENCY"""
  MEDICAL_EMERGENCY
}


"""Effect of a alert"""
enum AlertEffectType {
  """NO_SERVICE"""
  NO_SERVICE
  """REDUCED_SERVICE"""
  REDUCED_SERVICE
  """SIGNIFICANT_DELAYS"""
  SIGNIFICANT_DELAYS
  """DETOUR"""
  DETOUR
  """ADDITIONAL_SERVICE"""
  ADDITIONAL_SERVICE
  """MODIFIED_SERVICE"""
  MODIFIED_SERVICE
  """OTHER_EFFECT"""
  OTHER_EFFECT
  """UNKNOWN_EFFECT"""
  UNKNOWN_EFFECT
  """STOP_MOVED"""
  STOP_MOVED
  """NO_EFFECT"""
  NO_EFFECT
  """ACCESSIBILITY_ISSUE"""
  ACCESSIBILITY_ISSUE
}


"""Entity related to an alert"""
union AlertEntity = Agency | Route | Pattern | Stop | Trip | StopOnRoute | StopOnTrip | RouteType | Unknown


"""Severity level of a alert"""
enum AlertSeverityLevelType {
  """Severity of alert is unknown"""
  UNKNOWN_SEVERITY
  """
  Info alerts are used for informational messages that should not have a
  significant effect on user's journey, for example: A single entrance to a
  metro station is temporarily closed.
  """
  INFO
  """
  Warning alerts are used when a single stop or route has a disruption that can
  affect user's journey, for example: All trams on a specific route are running
  with irregular schedules.
  """
  WARNING
  """
  Severe alerts are used when a significant part of public transport services is
  affected, for example: All train services are cancelled due to technical problems.
  """
  SEVERE
}


type OpeningHours {
  """
  OSM-formatted string of the opening hours.
  
  The spec is available at: https://wiki.openstreetmap.org/wiki/Key:opening_hours
  """
  osm: String
  """
  Opening hours for the selected dates using the local time of the parking lot.
  Each date can have multiple time spans.
  
  Note: This is not implemented yet and always returns null.
  """
  dates(
    """
    Opening hours will be returned for these dates. Dates should use YYYYMMDD format.
    """
    dates: [String!]!
  ): [LocalTimeSpanDate]
}


"""Bike park represents a location where bicycles can be parked."""
type BikePark implements Node & PlaceInterface {
  """
  Global object ID provided by Relay. This value can be used to refetch this object using **node** query.
  """
  id: ID!
  """ID of the bike park"""
  bikeParkId: String
  """Name of the bike park"""
  name(
    """
    Returns name with the specified language, if found, otherwise returns with some default language.
    """
    language: String
  ): String!
  """Number of spaces available for bikes"""
  spacesAvailable: Int
  """
  If true, value of \`spacesAvailable\` is updated from a real-time source.
  """
  realtime: Boolean
  """Longitude of the bike park (WGS 84)"""
  lon: Float
  """Latitude of the bike park (WGS 84)"""
  lat: Float
  """
  Source specific tags of the bike park, which describe the available features.
  """
  tags: [String]
  """Opening hours of the parking facility"""
  openingHours: OpeningHours
}


"""
Vehicle parking represents a location where bicycles or cars can be parked.
"""
type VehicleParking implements Node & PlaceInterface {
  """
  Global object ID provided by Relay. This value can be used to refetch this object using **node** query.
  """
  id: ID!
  """ID of the park"""
  vehicleParkingId: String
  """Name of the park"""
  name(
    """
    Returns name with the specified language, if found, otherwise returns with some default language.
    """
    language: String
  ): String!
  """
  If true, value of \`spacesAvailable\` is updated from a real-time source.
  """
  realtime: Boolean
  """Longitude of the bike park (WGS 84)"""
  lon: Float
  """Latitude of the bike park (WGS 84)"""
  lat: Float
  """URL which contains details of this vehicle parking."""
  detailsUrl: String
  """
  URL of an image which may be displayed to the user showing the vehicle parking.
  """
  imageUrl: String
  """
  Source specific tags of the vehicle parking, which describe the available features. For example
  park_and_ride, bike_lockers, or static_osm_data.
  """
  tags: [String]
  """A short translatable note containing details of this vehicle parking."""
  note(
    """
    Returns note with the specified language, if found, otherwise returns with some default language.
    """
    language: String
  ): String
  """
  The state of this vehicle parking.
  Only ones in an OPERATIONAL state may be used for Park and Ride.
  """
  state: VehicleParkingState
  """Does this vehicle parking have spaces (capacity) for bicycles."""
  bicyclePlaces: Boolean
  """
  Does this vehicle parking have spaces (capacity) for either wheelchair accessible (disabled)
  or normal cars.
  """
  anyCarPlaces: Boolean
  """
  Does this vehicle parking have spaces (capacity) for cars excluding wheelchair accessible spaces.
  Use anyCarPlaces to check if any type of car may use this vehicle parking.
  """
  carPlaces: Boolean
  """
  Does this vehicle parking have wheelchair accessible (disabled) car spaces (capacity).
  """
  wheelchairAccessibleCarPlaces: Boolean
  """The capacity (maximum available spaces) of this vehicle parking."""
  capacity: VehicleParkingSpaces
  """The currently available spaces at this vehicle parking."""
  availability: VehicleParkingSpaces
  """Opening hours of the parking facility"""
  openingHours: OpeningHours
}


"""
The state of the vehicle parking. TEMPORARILY_CLOSED and CLOSED are distinct states so that they
may be represented differently to the user.
"""
enum VehicleParkingState {
  """May be used for park and ride."""
  OPERATIONAL
  """Can't be used for park and ride."""
  TEMPORARILY_CLOSED
  """Can't be used for park and ride."""
  CLOSED
}


"""The number of spaces by type. null if unknown."""
type VehicleParkingSpaces {
  """The number of bicycle spaces."""
  bicycleSpaces: Int
  """The number of car spaces."""
  carSpaces: Int
  """The number of wheelchair accessible (disabled) car spaces."""
  wheelchairAccessibleCarSpaces: Int
}


"""
Bike rental station represents a location where users can rent bicycles for a fee.
"""
type BikeRentalStation implements Node & PlaceInterface {
  """
  Global object ID provided by Relay. This value can be used to refetch this object using **node** query.
  """
  id: ID!
  """ID of the bike rental station"""
  stationId: String
  """Name of the bike rental station"""
  name: String!
  """
  Number of bikes currently available on the rental station.
  See field \`allowPickupNow\` to know if is currently possible to pick up a bike.
  """
  bikesAvailable: Int
  """
  Number of free spaces currently available on the rental station.
  Note that this value being 0 does not necessarily indicate that bikes cannot be returned
  to this station, as for example it might be possible to leave the bike in the vicinity of
  the rental station, even if the bike racks don't have any spaces available.
  See field \`allowDropoffNow\` to know if is currently possible to return a bike.
  """
  spacesAvailable: Int
  """
  A description of the current state of this bike rental station, e.g. "Station on"
  """
  state: String @deprecated(reason: "Use operative instead")
  """
  If true, values of \`bikesAvailable\` and \`spacesAvailable\` are updated from a
  real-time source. If false, values of \`bikesAvailable\` and \`spacesAvailable\`
  are always the total capacity divided by two.
  """
  realtime: Boolean
  """
  If true, bikes can be returned to this station if the station has spaces available
  or allows overloading.
  """
  allowDropoff: Boolean
  """
  If true, bikes can be picked up from this station if the station has bikes available.
  """
  allowPickup: Boolean
  """If true, bikes can be currently returned to this station."""
  allowDropoffNow: Boolean
  """If true, bikes can be currently picked up from this station."""
  allowPickupNow: Boolean
  networks: [String]
  """Longitude of the bike rental station (WGS 84)"""
  lon: Float
  """Latitude of the bike rental station (WGS 84)"""
  lat: Float
  """Nominal capacity (number of racks) of the rental station."""
  capacity: Int
  """
  If true, bikes can be returned even if spacesAvailable is zero or bikes > capacity.
  """
  allowOverloading: Boolean
  """Platform-specific URLs to begin renting a bike from this station."""
  rentalUris: BikeRentalStationUris
  """If true, station is on and in service."""
  operative: Boolean
}


"""
Vehicle rental station represents a location where users can rent bicycles etc. for a fee.
"""
type VehicleRentalStation implements Node & PlaceInterface {
  """
  Global object ID provided by Relay. This value can be used to refetch this object using **node** query.
  """
  id: ID!
  """ID of the vehicle in the format of network:id"""
  stationId: String
  """Name of the vehicle rental station"""
  name: String!
  """
  Number of vehicles currently available on the rental station.
  See field \`allowPickupNow\` to know if is currently possible to pick up a vehicle.
  """
  vehiclesAvailable: Int @deprecated(reason: "Use \`availableVehicles\` instead, which also contains vehicle types")
  """
  Number of free spaces currently available on the rental station.
  Note that this value being 0 does not necessarily indicate that vehicles cannot be returned
  to this station, as for example it might be possible to leave the vehicle in the vicinity of
  the rental station, even if the vehicle racks don't have any spaces available.
  See field \`allowDropoffNow\` to know if is currently possible to return a vehicle.
  """
  spacesAvailable: Int @deprecated(reason: "Use \`availableSpaces\` instead, which also contains the space vehicle types")
  """
  Number of vehicles currently available on the rental station, grouped by vehicle type.
  """
  availableVehicles: RentalVehicleEntityCounts
  """
  Number of free spaces currently available on the rental station, grouped by vehicle type.
  """
  availableSpaces: RentalVehicleEntityCounts
  """
  If true, values of \`vehiclesAvailable\` and \`spacesAvailable\` are updated from a
  real-time source. If false, values of \`vehiclesAvailable\` and \`spacesAvailable\`
  are always the total capacity divided by two.
  """
  realtime: Boolean
  """
  If true, vehicles can be returned to this station if the station has spaces available
  or allows overloading.
  """
  allowDropoff: Boolean
  """
  If true, vehicles can be picked up from this station if the station has vehicles available.
  """
  allowPickup: Boolean
  """If true, vehicles can be currently returned to this station."""
  allowDropoffNow: Boolean
  """If true, vehicles can be currently picked up from this station."""
  allowPickupNow: Boolean
  """ID of the rental network."""
  network: String
  """Longitude of the vehicle rental station (WGS 84)"""
  lon: Float
  """Latitude of the vehicle rental station (WGS 84)"""
  lat: Float
  """Nominal capacity (number of racks) of the rental station."""
  capacity: Int
  """
  If true, vehicles can be returned even if spacesAvailable is zero or vehicles > capacity.
  """
  allowOverloading: Boolean
  """Platform-specific URLs to begin renting a vehicle from this station."""
  rentalUris: VehicleRentalUris
  """If true, station is on and in service."""
  operative: Boolean
}


type RentalVehicleEntityCounts {
  """The total number of entities (e.g. vehicles, spaces)."""
  total: Int!
  """The number of entities by type"""
  byType: [RentalVehicleTypeCount!]!
}


type RentalVehicleTypeCount {
  """The type of the rental vehicle (scooter, bicycle, car...)"""
  vehicleType: RentalVehicleType!
  """The number of vehicles of this type"""
  count: Int!
}


"""Rental vehicle represents a vehicle that belongs to a rental network."""
type RentalVehicle implements Node & PlaceInterface {
  """
  Global object ID provided by Relay. This value can be used to refetch this object using **node** query.
  """
  id: ID!
  """ID of the vehicle in the format of network:id"""
  vehicleId: String
  """Name of the vehicle"""
  name: String!
  """If true, vehicle is currently available for renting."""
  allowPickupNow: Boolean
  """ID of the rental network."""
  network: String
  """Longitude of the vehicle (WGS 84)"""
  lon: Float
  """Latitude of the vehicle (WGS 84)"""
  lat: Float
  """Platform-specific URLs to begin the vehicle."""
  rentalUris: VehicleRentalUris
  """If true, vehicle is not disabled."""
  operative: Boolean
  """The type of the rental vehicle (scooter, bicycle, car...)"""
  vehicleType: RentalVehicleType
}


type BikeRentalStationUris {
  """
  A URI that can be passed to an Android app with an {@code android.intent.action.VIEW} Android
  intent to support Android Deep Links.
  May be null if a rental URI does not exist.
  """
  android: String
  """
  A URI that can be used on iOS to launch the rental app for this station.
  May be {@code null} if a rental URI does not exist.
  """
  ios: String
  """
  A URL that can be used by a web browser to show more information about renting a vehicle at
  this station.
  May be {@code null} if a rental URL does not exist.
  """
  web: String
}


type VehicleRentalUris {
  """
  A URI that can be passed to an Android app with an {@code android.intent.action.VIEW} Android
  intent to support Android Deep Links.
  May be null if a rental URI does not exist.
  """
  android: String
  """
  A URI that can be used on iOS to launch the rental app for this rental network.
  May be {@code null} if a rental URI does not exist.
  """
  ios: String
  """
  A URL that can be used by a web browser to show more information about renting a vehicle.
  May be {@code null} if a rental URL does not exist.
  """
  web: String
}


type RentalVehicleType {
  """The vehicle's general form factor"""
  formFactor: FormFactor
  """The primary propulsion type of the vehicle"""
  propulsionType: PropulsionType
}


enum FormFactor {
  """A bicycle"""
  BICYCLE
  """A bicycle with additional space for cargo"""
  CARGO_BICYCLE
  """An automobile"""
  CAR
  """
  A moped that the rider sits on. For a disambiguation see https://github.com/NABSA/gbfs/pull/370#issuecomment-982631989
  """
  MOPED
  """
  A kick scooter that the rider either sits or stands on. Will be deprecated in GBFS v3.0.
  """
  SCOOTER
  """A kick scooter that the rider stands on"""
  SCOOTER_STANDING
  """A kick scooter with a seat"""
  SCOOTER_SEATED
  """A vehicle that doesn't fit into any other category"""
  OTHER
}


enum PropulsionType {
  """Pedal or foot propulsion"""
  HUMAN
  """
  Provides electric motor assist only in combination with human propulsion - no throttle mode
  """
  ELECTRIC_ASSIST
  """Powered by battery-powered electric motor with throttle mode"""
  ELECTRIC
  """Powered by gasoline combustion engine"""
  COMBUSTION
  """Powered by diesel combustion engine"""
  COMBUSTION_DIESEL
  """Powered by combined combustion engine and battery-powered motor"""
  HYBRID
  """
  Powered by combined combustion engine and battery-powered motor with plug-in charging
  """
  PLUG_IN_HYBRID
  """Powered by hydrogen fuel cell powered electric motor"""
  HYDROGEN_FUEL_CELL
}


enum BikesAllowed {
  """There is no bike information for the trip."""
  NO_INFORMATION
  """
  The vehicle being used on this particular trip can accommodate at least one bicycle.
  """
  ALLOWED
  """No bicycles are allowed on this trip."""
  NOT_ALLOWED
}


"""Car park represents a location where cars can be parked."""
type CarPark implements Node & PlaceInterface {
  """
  Global object ID provided by Relay. This value can be used to refetch this object using **node** query.
  """
  id: ID!
  """ID of the car park"""
  carParkId: String
  """Name of the car park"""
  name(
    """
    Returns name with the specified language, if found, otherwise returns with some default language.
    """
    language: String
  ): String!
  """Number of parking spaces at the car park"""
  maxCapacity: Int
  """Number of currently available parking spaces at the car park"""
  spacesAvailable: Int
  """
  If true, value of \`spacesAvailable\` is updated from a real-time source.
  """
  realtime: Boolean
  """Longitude of the car park (WGS 84)"""
  lon: Float
  """Latitude of the car park (WGS 84)"""
  lat: Float
  """
  Source specific tags of the car park, which describe the available features.
  """
  tags: [String]
  """
  Opening hours for the selected dates using the local time of the park.
  Each date can have multiple time spans.
  """
  openingHours: OpeningHours
}


"""Cluster is a list of stops grouped by name and proximity"""
type Cluster implements Node {
  """
  Global object ID provided by Relay. This value can be used to refetch this object using **node** query.
  """
  id: ID!
  """ID of the cluster"""
  gtfsId: String!
  """Name of the cluster"""
  name: String!
  """
  Latitude of the center of this cluster (i.e. average latitude of stops in this cluster)
  """
  lat: Float!
  """
  Longitude of the center of this cluster (i.e. average longitude of stops in this cluster)
  """
  lon: Float!
  """List of stops in the cluster"""
  stops: [Stop!]
}


type Coordinates {
  """Latitude (WGS 84)"""
  lat: Float
  """Longitude (WGS 84)"""
  lon: Float
}


type debugOutput {
  totalTime: Long
  pathCalculationTime: Long
  precalculationTime: Long
  renderingTime: Long
  timedOut: Boolean
}


"""
Departure row is a combination of a pattern and a stop of that pattern.

They are de-duplicated so for each pattern there will only be a single departure row.

This is useful if you want to show a list of stop/pattern combinations but want each pattern to be
listed only once.
"""
type DepartureRow implements Node & PlaceInterface {
  """
  Global object ID provided by Relay. This value can be used to refetch this object using **node** query.
  """
  id: ID!
  """Stop from which the departures leave"""
  stop: Stop
  """Latitude of the stop (WGS 84)"""
  lat: Float
  """Longitude of the stop (WGS 84)"""
  lon: Float
  """Pattern of the departure row"""
  pattern: Pattern
  """Departures of the pattern from the stop"""
  stoptimes(
    """
    Return rows departing after this time. Time format: Unix timestamp in seconds. Default: current time.
    """
    startTime: Long = 0
    """How many seconds ahead to search for departures. Default is one day."""
    timeRange: Int = 86400
    """Maximum number of departures to return."""
    numberOfDepartures: Int = 1
    """If true, only those departures which allow boarding are returned"""
    omitNonPickups: Boolean = false
    """If false, returns also canceled trips"""
    omitCanceled: Boolean = true
  ): [Stoptime]
}


type elevationProfileComponent {
  """The distance from the start of the step, in meters."""
  distance: Float
  """The elevation at this distance, in meters."""
  elevation: Float
}


type Emissions {
  """CO₂ emissions in grams."""
  co2: Grams
}


"""
This type is only here for backwards-compatibility and this API will never return it anymore.
Please use the leg's \`fareProducts\` instead.
"""
type fare {
  type: String @deprecated
  """ISO 4217 currency code"""
  currency: String @deprecated
  """
  Fare price in cents. **Note:** this value is dependent on the currency used,
  as one cent is not necessarily ¹/₁₀₀ of the basic monerary unit.
  """
  cents: Int @deprecated
  """Components which this fare is composed of"""
  components: [fareComponent] @deprecated
}


"""
This type is only here for backwards-compatibility and this API will never return it anymore.
Please use the leg's \`fareProducts\` instead.
"""
type fareComponent {
  """ID of the ticket type. Corresponds to \`fareId\` in **TicketType**."""
  fareId: String @deprecated
  """ISO 4217 currency code"""
  currency: String @deprecated
  """
  Fare price in cents. **Note:** this value is dependent on the currency used,
  as one cent is not necessarily ¹/₁₀₀ of the basic monerary unit.
  """
  cents: Int @deprecated
  """List of routes which use this fare component"""
  routes: [Route] @deprecated
}


"""
A feed provides routing data (stops, routes, timetables, etc.) from one or more public transport agencies.
"""
type Feed {
  """ID of the feed"""
  feedId: String!
  """List of agencies which provide data to this feed"""
  agencies: [Agency]
  """Alerts relevant for the feed."""
  alerts(
    """Returns alerts for these types that are relevant for the feed."""
    types: [FeedAlertType!]
  ): [Alert]
}


"""Entities, which are relevant for a feed and can contain alerts"""
enum FeedAlertType {
  """Alerts affecting the feed's agencies"""
  AGENCIES
  """
  Alerts affecting the route types across the feed.
  There might be alerts that only affect route types within an agency of the feed,
  and those can be fetched through the Agency.
  """
  ROUTE_TYPES
}


enum FilterPlaceType {
  """
  Stops.
  NOTE: if this is selected at the same time as \`STATION\`, stops that have a parent station will not be returned but their parent stations will be returned instead.
  """
  STOP
  """Departure rows"""
  DEPARTURE_ROW
  """Old value for VEHICLE_RENT"""
  BICYCLE_RENT @deprecated(reason: "Use VEHICLE_RENT instead as it's clearer that it also returns rental scooters, cars...")
  """Vehicle (bicycles, scooters, cars ...) rental stations and vehicles"""
  VEHICLE_RENT
  """Parking lots (not rental stations) that contain spaces for bicycles"""
  BIKE_PARK
  """Parking lots that contain spaces for cars"""
  CAR_PARK
  """
  Stations.
  NOTE: if this is selected at the same time as \`STOP\`, stops that have a parent station will not be returned but their parent stations will be returned instead.
  """
  STATION
}


type Geometry {
  """The number of points in the string"""
  length: Int
  """
  List of coordinates of in a Google encoded polyline format (see
  https://developers.google.com/maps/documentation/utilities/polylinealgorithm)
  """
  points: Polyline
}


scalar GeoJson


scalar Grams


type StopGeometries {
  """
  Representation of the stop geometries as GeoJSON (https://geojson.org/)
  """
  geoJson: GeoJson
  """
  Representation of a stop as a series of polylines.
  
  Polygons of flex stops are represented as linear rings (lines where the first and last point are the same).
  
  Proper stops are represented as single point "lines".
  """
  googleEncoded: [Geometry]
}


input InputBanned {
  """A comma-separated list of banned route ids"""
  routes: String
  """A comma-separated list of banned agency ids"""
  agencies: String
  """A comma-separated list of banned trip ids"""
  trips: String
  """
  A comma-separated list of banned stop ids. Note that these stops are only
  banned for boarding and disembarking vehicles — it is possible to get an
  itinerary where a vehicle stops at one of these stops
  """
  stops: String
  """
  A comma-separated list of banned stop ids. Only itineraries where these stops
  are not travelled through are returned, e.g. if a bus route stops at one of
  these stops, that route will not be used in the itinerary, even if the stop is
  not used for boarding or disembarking the vehicle.
  """
  stopsHard: String
}


input InputCoordinates {
  """Latitude of the place (WGS 84)"""
  lat: Float!
  """Longitude of the place (WGS 84)"""
  lon: Float!
  """
  The name of the place. If specified, the place name in results uses this value instead of \`"Origin"\` or \`"Destination"\`
  """
  address: String
  """
  The amount of time, in seconds, to spend at this location before venturing forth.
  """
  locationSlack: Int
}


input InputFilters {
  """Stops to include by GTFS id."""
  stops: [String]
  """Stations to include by GTFS id."""
  stations: [String]
  """Routes to include by GTFS id."""
  routes: [String]
  """Bike rentals to include by id (without network identifier)."""
  bikeRentalStations: [String]
  """Bike parks to include by id."""
  bikeParks: [String]
  """Car parks to include by id."""
  carParks: [String]
}


input InputModeWeight {
  """
  The weight of TRAM traverse mode. Values over 1 add cost to tram travel and values under 1 decrease cost
  """
  TRAM: Float
  """
  The weight of SUBWAY traverse mode. Values over 1 add cost to subway travel and values under 1 decrease cost
  """
  SUBWAY: Float
  """
  The weight of RAIL traverse mode. Values over 1 add cost to rail travel and values under 1 decrease cost
  """
  RAIL: Float
  """
  The weight of BUS traverse mode. Values over 1 add cost to bus travel and values under 1 decrease cost
  """
  BUS: Float
  """
  The weight of FERRY traverse mode. Values over 1 add cost to ferry travel and values under 1 decrease cost
  """
  FERRY: Float
  """
  The weight of CABLE_CAR traverse mode. Values over 1 add cost to cable car travel and values under 1 decrease cost
  """
  CABLE_CAR: Float
  """
  The weight of GONDOLA traverse mode. Values over 1 add cost to gondola travel and values under 1 decrease cost
  """
  GONDOLA: Float
  """
  The weight of FUNICULAR traverse mode. Values over 1 add cost to funicular travel and values under 1 decrease cost
  """
  FUNICULAR: Float
  """
  The weight of AIRPLANE traverse mode. Values over 1 add cost to airplane travel and values under 1 decrease cost
  """
  AIRPLANE: Float
}


input InputPreferred {
  """A comma-separated list of ids of the routes preferred by the user."""
  routes: String
  """A comma-separated list of ids of the agencies preferred by the user."""
  agencies: String
  """
  Penalty added for using every route that is not preferred if user set any
  route as preferred. We return number of seconds that we are willing to wait
  for preferred route.
  """
  otherThanPreferredRoutesPenalty: Int
}


"""Preferences for parking facilities used during the routing."""
input VehicleParkingInput {
  """
  Selection filters to include or exclude parking facilities.
  An empty list will include all facilities in the routing search.
  """
  filters: [ParkingFilter]
  """
  If \`preferred\` is non-empty, using a parking facility that doesn't contain
  at least one of the preferred conditions, will receive this extra cost and therefore avoided if
  preferred options are available.
  """
  unpreferredCost: Int
  """
  If non-empty every parking facility that doesn't match this set of conditions will
  receive an extra cost (defined by \`unpreferredCost\`) and therefore avoided.
  """
  preferred: [ParkingFilter]
}


input ParkingFilterOperation {
  """Filter parking facilities based on their tag"""
  tags: [String]
}


"""
The filter definition to include or exclude parking facilities used during routing.

Logically, the filter algorithm work as follows:

- The starting point is the set of all facilities, lets call it \`A\`.
- Then all \`select\` filters are applied to \`A\`, potentially reducing the number of facilities used.
  Let's call the result of this \`B\`.
  An empty \`select\` will lead to \`A\` being equal to \`B\`.
- Lastly, the \`not\` filters are applied to \`B\`, reducing the set further.
  Lets call this final set \`C\`.
  An empty \`not\` will lead to \`B\` being equal to \`C\`.
- The remaining parking facilities in \`C\` are used for routing.
"""
input ParkingFilter {
  """
  Exclude parking facilities based on their properties.
  
  If empty nothing is excluded from the initial set of facilities but may be filtered down
  further by the \`select\` filter.
  """
  not: [ParkingFilterOperation!]
  """
  Include parking facilities based on their properties.
  
  If empty everything is included from the initial set of facilities but may be filtered down
  further by the \`not\` filter.
  """
  select: [ParkingFilterOperation!]
}


"""
Relative importances of optimization factors. Only effective for bicycling legs.
Invariant: \`timeFactor + slopeFactor + safetyFactor == 1\`
"""
input InputTriangle {
  """Relative importance of safety"""
  safetyFactor: Float
  """Relative importance of flat terrain"""
  slopeFactor: Float
  """Relative importance of duration"""
  timeFactor: Float
}


input InputUnpreferred {
  """A comma-separated list of ids of the routes unpreferred by the user."""
  routes: String
  """A comma-separated list of ids of the agencies unpreferred by the user."""
  agencies: String
  """
  An cost function used to calculate penalty for an unpreferred route/agency. Function should return
  number of seconds that we are willing to wait for unpreferred route/agency.
  String must be of the format:
  \`A + B x\`, where A is fixed penalty and B is a multiplier of transit leg travel time x.
  For example: \`600 + 2.0 x\`
  """
  unpreferredCost: String
  """
  Penalty added for using route that is unpreferred, i.e. number of seconds that we are willing to
  wait for route that is unpreferred.
  
  Deprecated: Use \`unpreferredCost\` instead.
  """
  useUnpreferredRoutesPenalty: Int @deprecated(reason: "Use unpreferredCost instead")
}


enum RoutingErrorCode {
  """
  No transit connection was found between the origin and destination within the operating day or
  the next day, not even sub-optimal ones.
  """
  NO_TRANSIT_CONNECTION
  """
  A transit connection was found, but it was outside the search window. See the metadata for a token
  for retrieving the result outside the search window.
  """
  NO_TRANSIT_CONNECTION_IN_SEARCH_WINDOW
  """
  The date specified is outside the range of data currently loaded into the system as it is too
  far into the future or the past.
  
  The specific date range of the system is configurable by an administrator and also depends on
  the input data provided.
  """
  OUTSIDE_SERVICE_PERIOD
  """
  The coordinates are outside the geographic bounds of the transit and street data currently loaded
  into the system and therefore cannot return any results.
  """
  OUTSIDE_BOUNDS
  """
  The specified location is not close to any streets or transit stops currently loaded into the
  system, even though it is generally within its bounds.
  
  This can happen when there is only transit but no street data coverage at the location in
  question.
  """
  LOCATION_NOT_FOUND
  """
  No stops are reachable from the start or end locations specified.
  
  You can try searching using a different access or egress mode, for example cycling instead of walking,
  increase the walking/cycling/driving speed or have an administrator change the system's configuration
  so that stops further away are considered.
  """
  NO_STOPS_IN_RANGE
  """
  Transit connections were requested and found but because it is easier to just walk all the way
  to the destination they were removed.
  
  If you want to still show the transit results, you need to make walking less desirable by
  increasing the walk reluctance.
  """
  WALKING_BETTER_THAN_TRANSIT
}


enum InputField {
  DATE_TIME
  FROM
  TO
}


"""Description of the reason, why the planner did not return any results"""
type RoutingError {
  """An enum describing the reason"""
  code: RoutingErrorCode!
  """
  An enum describing the field which should be changed, in order for the search to succeed
  """
  inputField: InputField
  """
  A textual description of why the search failed. The clients are expected to have their own translations based on the code, for user visible error messages.
  """
  description: String!
}


"Category of riders a fare product applies to, for example students or pensioners."
type RiderCategory {
  "ID of the category"
  id: String!
  "Human readable name of the category."
  name: String
}


"""
A 'medium' that a fare product applies to, for example cash, 'Oyster Card' or 'DB Navigator App'.
"""
type FareMedium {
  "ID of the medium"
  id: String!
  "Human readable name of the medium."
  name: String
}


"A container for both a fare product (a ticket) and its relationship to the itinerary."
type FareProductUse {
  """
  Represents the use of a single instance of a fare product throughout the itinerary. It can
  be used to cross-reference and de-duplicate fare products that are applicable for more than one
  leg.
  
  If you want to uniquely identify the fare product itself (not its use) use the product's \`id\`.
  
  ### Example: Day pass
  
  The day pass is valid for both legs in the itinerary. It is listed as the applicable \`product\` for each leg,
  and the same FareProductUse id is shown, indicating that only one pass was used/bought.
  
  **Illustration**
  \`\`\`yaml
  itinerary:
    leg1:
      fareProducts:
        id: "AAA" // id of a FareProductUse instance
        product:
          id: "day-pass" // product id
          name: "Day Pass"
    leg2:
      fareProducts:
        id: "AAA" // identical to leg1. the passenger needs to buy ONE pass, not two.
        product:
          id: "day-pass"  // product id
          name: "Day Pass"
  \`\`\`
  
  **It is the responsibility of the API consumers to display the day pass as a product for the
  entire itinerary rather than two day passes!**
  
  ### Example: Several single tickets
  
  If you have two legs and need to buy two single tickets they will appear in each leg with the
  same \`FareProduct.id\` but different \`FareProductUse.id\`.
  
  **Illustration**
  \`\`\`yaml
  itinerary:
    leg1:
      fareProducts:
        id: "AAA" // id of a FareProductUse instance, not product id
        product:
          id: "single-ticket" // product id
          name: "Single Ticket"
    leg2:
      fareProducts:
        id: "BBB" // different to leg1. the passenger needs to buy two single tickets.
        product:
          id: "single-ticket"  // product id
          name: "Single Ticket"
  \`\`\`
  """
  id: String!
  "The purchasable fare product"
  product: FareProduct
}


"A fare product (a ticket) to be bought by a passenger"
interface FareProduct {
  "Identifier for the fare product."
  id: String!
  """
  Human readable name of the product, for example example "Day pass" or "Single ticket".
  """
  name: String!
  "The category of riders this product applies to, for example students or pensioners."
  riderCategory: RiderCategory
  """
  The 'medium' that this product applies to, for example "Oyster Card" or "Berlin Ticket App".
  
  This communicates to riders that a specific way of buying or keeping this product is required.
  """
  medium: FareMedium
}


"""
The standard case of a fare product: it only has a single price to be paid by the passenger
and no discounts are applied.
"""
type DefaultFareProduct implements FareProduct {
  "Identifier for the fare product."
  id: String!
  """
  Human readable name of the product, for example example "Day pass" or "Single ticket".
  """
  name: String!
  "The price of the product"
  price: Money!
  "The category of riders this product applies to, for example students or pensioners."
  riderCategory: RiderCategory
  """
  The 'medium' that this product applies to, for example "Oyster Card" or "Berlin Ticket App".
  
  This communicates to riders that a specific way of buying or keeping this product is required.
  """
  medium: FareMedium
}


type Itinerary {
  "Time when the user leaves from the origin."
  start: OffsetDateTime
  "Time when the user leaves arrives at the destination."
  end: OffsetDateTime
  """Duration of the trip on this itinerary, in seconds."""
  duration: Long
  """Generalized cost of the itinerary. Used for debugging search results."""
  generalizedCost: Int
  """How much time is spent waiting for transit to arrive, in seconds."""
  waitingTime: Long
  """How much time is spent walking, in seconds."""
  walkTime: Long
  """How far the user has to walk, in meters."""
  walkDistance: Float
  """Emissions of this itinerary per traveler."""
  emissionsPerPerson: Emissions
  """
  A list of Legs. Each Leg is either a walking (cycling, car) portion of the
  itinerary, or a transit leg on a particular vehicle. So a itinerary where the
  user walks to the Q train, transfers to the 6, then walks to their
  destination, has four legs.
  """
  legs: [Leg]!
  """
  How much elevation is gained, in total, over the course of the itinerary, in meters.
  """
  elevationGained: Float
  """
  How much elevation is lost, in total, over the course of the itinerary, in meters.
  """
  elevationLost: Float
  """Does the itinerary end without dropping off the rented bicycle:"""
  arrivedAtDestinationWithRentedBicycle: Boolean
  """
  A list of system notices. Contains debug information for itineraries.
  One use-case is to run a routing search with 'debugItineraryFilter: true'.
  This will then tag itineraries instead of removing them from the result.
  This make it possible to inspect the itinerary-filter-chain.
  """
  systemNotices: [SystemNotice]!
  """
  Computes a numeric accessibility score between 0 and 1.
  
  The closer the value is to 1 the better the wheelchair-accessibility of this itinerary is.
  A value of \`null\` means that no score has been computed, not that the leg is inaccessible.
  
  More information is available in the [feature documentation](https://docs.opentripplanner.org/en/dev-2.x/sandbox/IBIAccessibilityScore/).
  """
  accessibilityScore: Float
  """
  How many transfers are part of this itinerary.
  
  Notes:
   - Interlined/stay-seated transfers do not increase this count.
   - Transferring from a flex to a fixed schedule trip and vice versa increases this count.
  """
  numberOfTransfers: Int!
  """
  Information about the fares for this itinerary. This is primarily a GTFS Fares V1 interface
  and always returns an empty list. Use the leg's \`fareProducts\` instead.
  """
  fares: [fare] @deprecated(reason: "Use the leg's \`fareProducts\`.")
  """
  Time when the user leaves from the origin. Format: Unix timestamp in milliseconds.
  """
  startTime: Long @deprecated(reason: "Use \`start\` instead which includes timezone information.")
  """
  Time when the user arrives to the destination. Format: Unix timestamp in milliseconds.
  """
  endTime: Long @deprecated(reason: "Use \`end\` instead which includes timezone information.")
}


"A currency"
type Currency {
  "ISO-4217 currency code, for example \`USD\` or \`EUR\`."
  code: String!
  """
  Fractional digits of this currency. A value of 2 would express that in this currency
  100 minor units make up one major unit.
  
  Expressed more concretely: 100 Euro-cents make up one Euro.
  
  Note: Some currencies don't even have any fractional digits, for example the Japanese Yen.
  
  See also https://en.wikipedia.org/wiki/ISO_4217#Minor_unit_fractions
  """
  digits: Int!
}


"An amount of money."
type Money {
  "The currency of this money amount."
  currency: Currency!
  """
  Money in the major currency unit, so 3.10 USD is represented as \`3.1\`.
  
  If you want to get the minor currency unit (310 cents), multiply with
  (10 to the power of \`currency.digits\`).
  """
  amount: Float!
}


"""
An ISO-8601-formatted duration, i.e. \`PT2H30M\` for 2 hours and 30 minutes.

Negative durations are formatted like \`-PT10M\`.
"""
scalar Duration @specifiedBy(url: "https://docs.oracle.com/en/java/javase/21/docs/api/java.base/java/time/Duration.html#parse(java.lang.CharSequence)")


type RideHailingProvider {
  "The ID of the ride hailing provider."
  id: String!
}


"An estimate for a ride on a hailed vehicle, like an Uber car."
type RideHailingEstimate {
  "The provider of the ride hailing service."
  provider: RideHailingProvider!
  "The lower bound of the price estimate of this ride."
  minPrice: Money!
  "The upper bound of the price estimate of this ride."
  maxPrice: Money!
  "The estimated time it takes for the vehicle to arrive."
  arrival: Duration!
  "The name of the ride, ie. UberX"
  productName: String
}


"""
An ISO-8601-formatted datetime with offset, i.e. \`2023-06-13T14:30+03:00\` for 2:30pm on June 13th 2023 at Helsinki's offset from UTC at that time.

ISO-8601 allows many different formats but OTP will only return the profile specified in RFC3339.
"""
scalar OffsetDateTime @specifiedBy(url: "https://www.rfcreader.com/#rfc3339")


"Real-time estimates for a vehicle at a certain place."
type RealTimeEstimate {
  time: OffsetDateTime!
  """
  The delay or "earliness" of the vehicle at a certain place.
  
  If the vehicle is early then this is a negative duration.
  """
  delay: Duration!
}


"""
Time information about a passenger at a certain place. May contain real-time information if
available.
"""
type LegTime {
  "The scheduled time of the event."
  scheduledTime: OffsetDateTime!
  "The estimated time of the event. If no real-time information is available, this is null."
  estimated: RealTimeEstimate
}


type Leg {
  """
  The time when the leg starts including real-time information, if available.
  """
  start: LegTime!
  """
  The time when the leg ends including real-time information, if available.
  """
  end: LegTime!
  """The mode (e.g. \`WALK\`) used when traversing this leg."""
  mode: Mode
  """The leg's duration in seconds"""
  duration: Float
  """Generalized cost of the leg. Used for debugging search results."""
  generalizedCost: Int
  """The leg's geometry."""
  legGeometry: Geometry
  """
  For transit legs, the transit agency that operates the service used for this leg. For non-transit legs, \`null\`.
  """
  agency: Agency
  """Whether there is real-time data about this Leg"""
  realTime: Boolean
  """State of real-time data"""
  realtimeState: RealtimeState
  """The distance traveled while traversing the leg in meters."""
  distance: Float
  """Whether this leg is a transit leg or not."""
  transitLeg: Boolean
  "Whether this leg is walking with a bike."
  walkingBike: Boolean
  """Whether this leg is traversed with a rented bike."""
  rentedBike: Boolean
  """The Place where the leg originates."""
  from: Place!
  """The Place where the leg ends."""
  to: Place!
  """
  For transit legs, the route that is used for traversing the leg. For non-transit legs, \`null\`.
  """
  route: Route
  """
  For transit legs, the trip that is used for traversing the leg. For non-transit legs, \`null\`.
  """
  trip: Trip
  """
  For transit legs, the service date of the trip. Format: YYYYMMDD. For non-transit legs, null.
  """
  serviceDate: String
  """
  For transit legs, intermediate stops between the Place where the leg
  originates and the Place where the leg ends. For non-transit legs, null.
  """
  intermediateStops: [Stop]
  """
  For transit legs, intermediate stops between the Place where the leg
  originates and the Place where the leg ends. For non-transit legs, null.
  Returns Place type, which has fields for e.g. departure and arrival times
  """
  intermediatePlaces: [Place]
  """
  Whether the destination of this leg (field \`to\`) is one of the intermediate places specified in the query.
  """
  intermediatePlace: Boolean
  "The turn-by-turn navigation instructions."
  steps: [step]
  """
  For transit legs, the headsign that the vehicle shows at the stop where the passenger boards.
  For non-transit legs, null.
  """
  headsign: String
  """
  This is used to indicate if boarding this leg is possible only with special arrangements.
  """
  pickupType: PickupDropoffType
  """
  This is used to indicate if alighting from this leg is possible only with special arrangements.
  """
  dropoffType: PickupDropoffType
  """
  Interlines with previous leg.
  This is true when the same vehicle is used for the previous leg as for this leg
  and passenger can stay inside the vehicle.
  """
  interlineWithPreviousLeg: Boolean
  """
  Special booking information for the drop off stop of this leg if, for example, it needs
  to be booked in advance. This could be due to a flexible or on-demand service.
  """
  dropOffBookingInfo: BookingInfo
  """
  Special booking information for the pick up stop of this leg if, for example, it needs
  to be booked in advance. This could be due to a flexible or on-demand service.
  """
  pickupBookingInfo: BookingInfo
  """Applicable alerts for this leg."""
  alerts: [Alert]
  """Future legs with same origin and destination stops or stations"""
  nextLegs(
    """
    The number of alternative legs searched. If fewer than the requested number are found,
    then only the found legs are returned.
    """
    numberOfLegs: Int!
    """
    Transportation modes for which all stops in the parent station are used as possible origin stops
    for the next legs. For modes not listed, only the exact origin stop of the leg is considered.
    """
    originModesWithParentStation: [TransitMode!]
    """
    Transportation modes for which all stops in the parent station are used as possible destination stops
    for the next legs. For modes not listed, only the exact destination stop of the leg is considered.
    """
    destinationModesWithParentStation: [TransitMode!]
  ): [Leg!]
  "Estimate of a hailed ride like Uber."
  rideHailingEstimate: RideHailingEstimate
  """
  Computes a numeric accessibility score between 0 and 1.
  
  The closer the value is to 1 the better the wheelchair-accessibility of this leg is.
  A value of \`null\` means that no score has been computed, not that the itinerary is inaccessible.
  
  More information is available in the [feature documentation](https://docs.opentripplanner.org/en/dev-2.x/sandbox/IBIAccessibilityScore/).
  """
  accessibilityScore: Float
  """
  Fare products are purchasable tickets which may have an optional fare container or rider
  category that limits who can buy them or how.
  
  Please read the documentation of \`id\` very carefully to learn how a single fare product
  that applies to multiple legs can appear several times.
  """
  fareProducts: [FareProductUse]
  """
  The date and time when this leg begins. Format: Unix timestamp in milliseconds.
  """
  startTime: Long @deprecated(reason: "Use \`start.estimated.time\` instead which contains timezone information.")
  """
  The date and time when this leg ends. Format: Unix timestamp in milliseconds.
  """
  endTime: Long @deprecated(reason: "Use \`end.estimated.time\` instead which contains timezone information.")
  """
  For transit leg, the offset from the scheduled departure time of the boarding
  stop in this leg, i.e. scheduled time of departure at boarding stop =
  \`startTime - departureDelay\`
  """
  departureDelay: Int @deprecated(reason: "Use \`end.estimated.delay\` instead.")
  """
  For transit leg, the offset from the scheduled arrival time of the alighting
  stop in this leg, i.e. scheduled time of arrival at alighting stop = \`endTime
  - arrivalDelay\`
  """
  arrivalDelay: Int @deprecated(reason: "Use \`start.estimated.delay\` instead.")
}


"""A span of time."""
type LocalTimeSpan {
  """The start of the time timespan as seconds from midnight."""
  from: Int!
  """The end of the timespan as seconds from midnight."""
  to: Int!
}


"""
A date using the local timezone of the object that can contain timespans.
"""
type LocalTimeSpanDate {
  """The time spans for this date."""
  timeSpans: [LocalTimeSpan]
  """The date of this time span. Format: YYYYMMDD."""
  date: String!
}


"""Identifies whether this stop represents a stop or station."""
enum LocationType {
  """A location where passengers board or disembark from a transit vehicle."""
  STOP
  """A physical structure or area that contains one or more stop."""
  STATION
  ENTRANCE
}


"""Long type"""
scalar Long


enum Mode {
  """AIRPLANE"""
  AIRPLANE
  """BICYCLE"""
  BICYCLE
  """BUS"""
  BUS
  """CABLE_CAR"""
  CABLE_CAR
  """CAR"""
  CAR
  """COACH"""
  COACH
  """FERRY"""
  FERRY
  """Enables flexible transit for access and egress legs"""
  FLEX
  """Enables flexible transit for access and egress legs"""
  FLEXIBLE @deprecated(reason: "Use FLEX instead")
  """FUNICULAR"""
  FUNICULAR
  """GONDOLA"""
  GONDOLA
  """Only used internally. No use for API users."""
  LEG_SWITCH @deprecated
  """RAIL"""
  RAIL
  """SCOOTER"""
  SCOOTER
  """SUBWAY"""
  SUBWAY
  """TRAM"""
  TRAM
  """"Private car trips shared with others."""
  CARPOOL
  """A taxi, possibly operated by a public transport agency."""
  TAXI
  """A special transport mode, which includes all public transport."""
  TRANSIT
  """WALK"""
  WALK
  "Electric buses that draw power from overhead wires using poles."
  TROLLEYBUS
  "Railway in which the track consists of a single rail or a beam."
  MONORAIL
}


enum TransitMode {
  """AIRPLANE"""
  AIRPLANE
  """BUS"""
  BUS
  """CABLE_CAR"""
  CABLE_CAR
  """COACH"""
  COACH
  """FERRY"""
  FERRY
  """FUNICULAR"""
  FUNICULAR
  """GONDOLA"""
  GONDOLA
  """RAIL"""
  RAIL
  """SUBWAY"""
  SUBWAY
  """TRAM"""
  TRAM
  """"Private car trips shared with others."""
  CARPOOL
  """A taxi, possibly operated by a public transport agency."""
  TAXI
  "Electric buses that draw power from overhead wires using poles."
  TROLLEYBUS
  "Railway in which the track consists of a single rail or a beam."
  MONORAIL
}


"""An object with an ID"""
interface Node {
  """The ID of an object"""
  id: ID!
}


"""Optimization type for bicycling legs"""
enum OptimizeType {
  """Prefer faster routes"""
  QUICK
  """
  Prefer safer routes, i.e. avoid crossing streets and use bike paths when possible
  """
  SAFE
  """Prefer flat terrain"""
  FLAT
  """GREENWAYS"""
  GREENWAYS
  """
  **TRIANGLE** optimization type can be used to set relative preferences of optimization factors. See argument \`triangle\`.
  """
  TRIANGLE
}


"""Information about pagination in a connection."""
type PageInfo {
  """When paginating forwards, are there more items?"""
  hasNextPage: Boolean!
  """When paginating backwards, are there more items?"""
  hasPreviousPage: Boolean!
  """When paginating backwards, the cursor to continue."""
  startCursor: String
  """When paginating forwards, the cursor to continue."""
  endCursor: String
}


"""Realtime vehicle position"""
type VehiclePosition {
  """
  Feed-scoped ID that uniquely identifies the vehicle in the format FeedId:VehicleId
  """
  vehicleId: String
  """
  Human-readable label of the vehicle, eg. a publicly visible number or a license plate
  """
  label: String
  """Latitude of the vehicle"""
  lat: Float
  """Longitude of the vehicle"""
  lon: Float
  """The current stop where the vehicle will be or is currently arriving."""
  stopRelationship: StopRelationship
  """Speed of the vehicle in meters/second"""
  speed: Float
  """
  Bearing, in degrees, clockwise from North, i.e., 0 is North and 90 is East. This can be the
  compass bearing, or the direction towards the next stop or intermediate location.
  """
  heading: Float
  """
  When the position of the vehicle was recorded in seconds since the UNIX epoch.
  """
  lastUpdated: Long
  """Which trip this vehicles runs on."""
  trip: Trip!
}


"""Upcoming or current stop and how close the vehicle is to it."""
type StopRelationship {
  """How close the vehicle is to \`stop\`"""
  status: VehicleStopStatus!
  stop: Stop!
}


"""How close the vehicle is to the stop."""
enum VehicleStopStatus {
  """The vehicle is standing at the stop."""
  STOPPED_AT
  """The vehicle has departed the previous stop and is in transit."""
  IN_TRANSIT_TO
  """
  The vehicle is just about to arrive at the stop (on a stop display, the vehicle symbol typically flashes).
  """
  INCOMING_AT
}


"""
Pattern is sequence of stops used by trips on a specific direction and variant
of a route. Most routes have only two patterns: one for outbound trips and one
for inbound trips
"""
type Pattern implements Node {
  """
  Global object ID provided by Relay. This value can be used to refetch this object using **node** query.
  """
  id: ID!
  """The route this pattern runs on"""
  route: Route!
  """
  Direction of the pattern. Possible values: 0, 1 or -1.
  -1 indicates that the direction is irrelevant, i.e. the route has patterns only in one direction.
  """
  directionId: Int
  """
  Name of the pattern. Pattern name can be just the name of the route or it can
  include details of destination and origin stops.
  """
  name: String
  """ID of the pattern"""
  code: String!
  """Vehicle headsign used by trips of this pattern"""
  headsign: String
  """Trips which run on this pattern"""
  trips: [Trip!]
  """Trips which run on this pattern on the specified date"""
  tripsForDate(
    """Return trips of the pattern active on this date. Format: YYYYMMDD"""
    serviceDate: String
  ): [Trip!]
  """List of stops served by this pattern"""
  stops: [Stop!]
  geometry: [Coordinates]
  """
  Coordinates of the route of this pattern in Google polyline encoded format
  """
  patternGeometry: Geometry
  """
  Hash code of the pattern. This value is stable and not dependent on the
  pattern id, i.e. this value can be used to check whether two patterns are the
  same, even if their ids have changed.
  """
  semanticHash: String
  """
  By default, list of alerts which have directly an effect on just the pattern.
  It's also possible to return other relevant alerts through defining types.
  """
  alerts(
    """
    Returns alerts for these types that are relevant for the pattern.
    By default, list of alerts which have directly an effect on just the pattern.
    """
    types: [PatternAlertType]
  ): [Alert]
  """Realtime-updated position of vehicles that are serving this pattern."""
  vehiclePositions: [VehiclePosition!]
  """Original Trip pattern for changed patterns"""
  originalTripPattern: Pattern
}


"""Entities, which are relevant for a pattern and can contain alerts"""
enum PatternAlertType {
  """Alerts affecting the pattern"""
  PATTERN
  """Alerts affecting the pattern's route's agency"""
  AGENCY
  """Alerts affecting the route that the pattern runs on"""
  ROUTE
  """Alerts affecting the route type of the route that the pattern runs on"""
  ROUTE_TYPE
  """Alerts affecting the trips which run on this pattern"""
  TRIPS
  """Alerts affecting the stops which are on this pattern"""
  STOPS_ON_PATTERN
  """Alerts affecting the stops of the trips which run on this pattern"""
  STOPS_ON_TRIPS
}


enum PickupDropoffType {
  """Regularly scheduled pickup / drop off."""
  SCHEDULED
  """No pickup / drop off available."""
  NONE
  """Must phone agency to arrange pickup / drop off."""
  CALL_AGENCY
  """Must coordinate with driver to arrange pickup / drop off."""
  COORDINATE_WITH_DRIVER
}


"Contact information for booking an on-demand or flexible service."
type ContactInfo {
  "Name of the person to contact"
  contactPerson: String
  "Phone number to contact"
  phoneNumber: String
  "Email to contact"
  eMail: String
  "Fax number to contact"
  faxNumber: String
  "URL containing general information about the service"
  infoUrl: String
  "URL to the booking systems of the service"
  bookingUrl: String
  "Additional notes about the contacting the service provider"
  additionalDetails: String
}


"Temporal restriction for a booking"
type BookingTime {
  "Time of the booking"
  time: String
  "How many days before the booking"
  daysPrior: Int
}


"""
Booking information for a stop time which has special requirements to use, like calling ahead or
using an app.
"""
type BookingInfo {
  "Contact information for reaching the service provider"
  contactInfo: ContactInfo
  "When is the earliest time the service can be booked."
  earliestBookingTime: BookingTime
  "When is the latest time the service can be booked"
  latestBookingTime: BookingTime
  "Minimum number of seconds before travel to make the request"
  minimumBookingNoticeSeconds: Long
  "Maximum number of seconds before travel to make the request"
  maximumBookingNoticeSeconds: Long
  "A general message for those booking the service"
  message: String
  "A message specific to the pick up"
  pickupMessage: String
  "A message specific to the drop off"
  dropOffMessage: String
}


"The board/alight position in between two stops of the pattern of a trip with continuous pickup/drop off."
type PositionBetweenStops {
  "Position of the previous stop in the pattern. Positions are not required to start from 0 or be consecutive."
  previousPosition: Int
  "Position of the next stop in the pattern. Positions are not required to start from 0 or be consecutive."
  nextPosition: Int
}


"Stop position at a specific stop."
type PositionAtStop {
  "Position of the stop in the pattern. Positions are not required to start from 0 or be consecutive."
  position: Int
}


union StopPosition = PositionAtStop | PositionBetweenStops


type Place {
  """
  For transit stops, the name of the stop. For points of interest, the name of the POI.
  """
  name: String
  """
  Type of vertex. (Normal, Bike sharing station, Bike P+R, Transit stop) Mostly
  used for better localization of bike sharing and P+R station names
  """
  vertexType: VertexType
  """Latitude of the place (WGS 84)"""
  lat: Float!
  """Longitude of the place (WGS 84)"""
  lon: Float!
  """
  The time the rider will arrive at the place. This also includes real-time information
  if available.
  """
  arrival: LegTime
  """
  The time the rider will depart the place. This also includes real-time information
  if available.
  """
  departure: LegTime
  """The stop related to the place."""
  stop: Stop
  """
  The position of the stop in the pattern. This is not required to start from 0 or be consecutive - any
  increasing integer sequence along the stops is valid.
  
  The purpose of this field is to identify the stop within the pattern so it can be cross-referenced
  between it and the itinerary. It is safe to cross-reference when done quickly, i.e. within seconds.
  However, it should be noted that realtime updates can change the values, so don't store it for
  longer amounts of time.
  
  Depending on the source data, this might not be the GTFS \`stop_sequence\` but another value, perhaps
  even generated.
  
  The position can be either at a certain stop or in between two for trips where this is possible.
  """
  stopPosition: StopPosition
  """The vehicle rental station related to the place"""
  vehicleRentalStation: VehicleRentalStation
  """The rental vehicle related to the place"""
  rentalVehicle: RentalVehicle
  """The vehicle parking related to the place"""
  vehicleParking: VehicleParking
  """The bike rental station related to the place"""
  bikeRentalStation: BikeRentalStation @deprecated(reason: "Use vehicleRentalStation and rentalVehicle instead")
  """The bike parking related to the place"""
  bikePark: BikePark @deprecated(reason: "bikePark is deprecated. Use vehicleParking instead.")
  """The car parking related to the place"""
  carPark: CarPark @deprecated(reason: "carPark is deprecated. Use vehicleParking instead.")
  """
  The time the rider will arrive at the place. Format: Unix timestamp in milliseconds.
  """
  arrivalTime: Long! @deprecated(reason: "Use \`arrival\` which includes timezone information.")
  """
  The time the rider will depart the place. Format: Unix timestamp in milliseconds.
  """
  departureTime: Long! @deprecated(reason: "Use \`departure\` which includes timezone information.")
}


type placeAtDistance implements Node {
  """
  Global object ID provided by Relay. This value can be used to refetch this object using **node** query.
  """
  id: ID!
  place: PlaceInterface
  """Walking distance to the place along streets and paths"""
  distance: Int
}


"""A connection to a list of items."""
type placeAtDistanceConnection {
  edges: [placeAtDistanceEdge]
  pageInfo: PageInfo!
}


"""An edge in a connection."""
type placeAtDistanceEdge {
  """The item at the end of the edge"""
  node: placeAtDistance
  cursor: String!
}


"""Interface for places, e.g. stops, stations, parking areas.."""
interface PlaceInterface {
  id: ID!
  """Latitude of the place (WGS 84)"""
  lat: Float
  """Longitude of the place (WGS 84)"""
  lon: Float
}


type Plan {
  """The time and date of travel. Format: Unix timestamp in milliseconds."""
  date: Long
  """The origin"""
  from: Place!
  """The destination"""
  to: Place!
  """A list of possible itineraries"""
  itineraries: [Itinerary]!
  """A list of possible error messages as enum"""
  messageEnums: [String]!
  """A list of possible error messages in cleartext"""
  messageStrings: [String]!
  """A list of routing errors, and fields which caused them"""
  routingErrors: [RoutingError!]!
  """
  Use the cursor to go to the next "page" of itineraries. Copy the cursor from the last response
  to the pageCursor query parameter and keep the original request as is. This will enable you to
  search for itineraries in the next search-window.
  The cursor based paging only support stepping to the next page, as it does not support jumping.
  This is only usable when public transportation mode(s) are included in the query.
  """
  nextPageCursor: String
  """
  Use the cursor to go to the previous "page" of itineraries. Copy the cursor from the last
  response to the pageCursor query parameter and keep the original request otherwise as is.
  This will enable you to search for itineraries in the previous search-window.
  The cursor based paging only support stepping to the previous page, as it does not support
  jumping.
  This is only usable when public transportation mode(s) are included in the query.
  """
  previousPageCursor: String
  """
  This is the suggested search time for the "previous page" or time window. Insert it together
  with the searchWindowUsed in the request to get a new set of trips preceding in the
  search-window BEFORE the current search. No duplicate trips should be returned, unless a trip
  is delayed and new realtime-data is available.
  """
  prevDateTime: Long @deprecated(reason: "Use previousPageCursor instead")
  """
  This is the suggested search time for the "next page" or time window. Insert it together
  with the searchWindowUsed in the request to get a new set of trips following in the
  search-window AFTER the current search. No duplicate trips should be returned, unless a trip
  is delayed and new realtime-data is available.
  """
  nextDateTime: Long @deprecated(reason: "Use nextPageCursor instead")
  """
  This is the \`searchWindow\` used by the raptor search. It is provided here for debugging
  purpousess.
  
  The unit is seconds.
  """
  searchWindowUsed: Long
  """Information about the timings for the plan generation"""
  debugOutput: debugOutput!
}


"""
List of coordinates in an encoded polyline format (see
https://developers.google.com/maps/documentation/utilities/polylinealgorithm).
The value appears in JSON as a string.
"""
scalar Polyline


"""
Additional qualifier for a transport mode.
Note that qualifiers can only be used with certain transport modes.
"""
enum Qualifier {
  """The vehicle used for transport can be rented"""
  RENT
  """
  ~~HAVE~~
  **Currently not used**
  """
  HAVE @deprecated(reason: "Currently not used")
  """
  The vehicle used must be left to a parking area before continuing the journey.
  This qualifier is usable with transport modes \`CAR\` and \`BICYCLE\`.
  Note that the vehicle is only parked if the journey is continued with public
  transportation (e.g. if only \`CAR\` and \`WALK\` transport modes are allowed to
  be used, the car will not be parked as it is used for the whole journey).
  """
  PARK
  """
  ~~KEEP~~
  **Currently not used**
  """
  KEEP @deprecated(reason: "Currently not used")
  """The user can be picked up by someone else riding a vehicle"""
  PICKUP
  """The user can be dropped off by someone else riding a vehicle"""
  DROPOFF
  """The mode is used for the access part of the search."""
  ACCESS
  """The mode is used for the egress part of the search."""
  EGRESS
  """The mode is used for the direct street search."""
  DIRECT
  """Hailing a ride, for example via an app like Uber."""
  HAIL
}


type QueryType {
  """Fetches an object given its ID"""
  node(
    """The ID of an object"""
    id: ID!
  ): Node
  """Get all available feeds"""
  feeds: [Feed]
  """Get all agencies"""
  agencies: [Agency]
  """Return list of available ticket types"""
  ticketTypes: [TicketType]
  """
  Get a single agency based on agency ID, i.e. value of field \`gtfsId\` (ID format is \`FeedId:StopId\`)
  """
  agency(id: String!): Agency
  """Get all stops"""
  stops(
    """Return stops with these ids"""
    ids: [String]
    """Query stops by this name"""
    name: String
  ): [Stop]
  """Get all stops within the specified bounding box"""
  stopsByBbox(
    """Southern bound of the bounding box"""
    minLat: Float!
    """Western bound of the bounding box"""
    minLon: Float!
    """Northern bound of the bounding box"""
    maxLat: Float!
    """Eastern bound of the bounding box"""
    maxLon: Float!
    """List of feed ids from which stops are returned"""
    feeds: [String!]
  ): [Stop]
  """
  Get all stops within the specified radius from a location. The returned type
  is a Relay connection (see
  https://facebook.github.io/relay/graphql/connections.htm). The stopAtDistance
  type has two values: stop and distance.
  """
  stopsByRadius(
    """Latitude of the location (WGS 84)"""
    lat: Float!
    """Longitude of the location (WGS 84)"""
    lon: Float!
    """
    Radius (in meters) to search for from the specified location. Note that this
    is walking distance along streets and paths rather than a geographic distance.
    """
    radius: Int!
    """List of feed ids from which stops are returned"""
    feeds: [String!]
    before: String
    after: String
    first: Int
    last: Int
  ): stopAtDistanceConnection
  """
  Get all places (stops, stations, etc. with coordinates) within the specified
  radius from a location. The returned type is a Relay connection (see
  https://facebook.github.io/relay/graphql/connections.htm). The placeAtDistance
  type has two fields: place and distance. The search is done by walking so the
  distance is according to the network of walkable streets and paths.
  """
  nearest(
    """Latitude of the location (WGS 84)"""
    lat: Float!
    """Longitude of the location (WGS 84)"""
    lon: Float!
    """
    Maximum distance (in meters) to search for from the specified location. Note
    that this is walking distance along streets and paths rather than a
    geographic distance. Default is 2000m
    """
    maxDistance: Int = 2000
    """
    Maximum number of results. Search is stopped when this limit is reached. Default is 20.
    """
    maxResults: Int = 20
    """
    Only return places that are one of these types, e.g. \`STOP\` or \`VEHICLE_RENT\`
    """
    filterByPlaceTypes: [FilterPlaceType]
    """
    Only return places that are related to one of these transport modes. This
    argument can be used to return e.g. only nearest railway stations or only
    nearest places related to bicycling.
    """
    filterByModes: [Mode]
    """Only include places that match one of the given GTFS ids."""
    filterByIds: InputFilters @deprecated(reason: "Not actively maintained")
    before: String
    after: String
    first: Int
    last: Int
  ): placeAtDistanceConnection @async
  """
  Get a single departure row based on its ID (ID format is \`FeedId:StopId:PatternId\`)
  """
  departureRow(id: String!): DepartureRow
  """
  Get a single stop based on its ID, i.e. value of field \`gtfsId\` (ID format is \`FeedId:StopId\`)
  """
  stop(id: String!): Stop
  """
  Get a single station based on its ID, i.e. value of field \`gtfsId\` (format is \`FeedId:StopId\`)
  """
  station(id: String!): Stop
  """Get all stations"""
  stations(
    """Only return stations that match one of the ids in this list"""
    ids: [String]
    """Query stations by name"""
    name: String
  ): [Stop]
  """Get all routes"""
  routes(
    """Only return routes with these ids"""
    ids: [String]
    """Only return routes with these feedIds"""
    feeds: [String]
    """Query routes by this name"""
    name: String
    """Only include routes, which use one of these modes"""
    transportModes: [Mode]
  ): [Route]
  """
  Get a single route based on its ID, i.e. value of field \`gtfsId\` (format is \`FeedId:RouteId\`)
  """
  route(id: String!): Route
  """Get all trips"""
  trips(
    """Only return trips with these feedIds"""
    feeds: [String]
  ): [Trip]
  """
  Get a single trip based on its ID, i.e. value of field \`gtfsId\` (format is \`FeedId:TripId\`)
  """
  trip(id: String!): Trip
  """
  Finds a trip matching the given parameters. This query type is useful if the
  id of a trip is not known, but other details uniquely identifying the trip are
  available from some source (e.g. MQTT vehicle positions).
  """
  fuzzyTrip(
    """id of the route"""
    route: String!
    """
    Direction of the trip, possible values: 0, 1 or -1.
    -1 indicates that the direction is irrelevant, i.e. in case the route has
    trips only in one direction. See field \`directionId\` of Pattern.
    """
    direction: Int = -1
    """Departure date of the trip, format: YYYY-MM-DD"""
    date: String!
    """
    Departure time of the trip, format: seconds since midnight of the departure date
    """
    time: Int!
  ): Trip
  """Get cancelled TripTimes."""
  cancelledTripTimes(
    """Feed feedIds (e.g. ["HSL"])."""
    feeds: [String]
    """Route gtfsIds (e.g. ["HSL:1098"])."""
    routes: [String]
    """TripPattern codes (e.g. ["HSL:1098:1:01"])."""
    patterns: [String]
    """Trip gtfsIds (e.g. ["HSL:1098_20190405_Ma_2_1455"])."""
    trips: [String]
    """
    Only cancelled trip times scheduled to run on minDate or after are returned. Format: "2019-12-23" or "20191223".
    """
    minDate: String
    """
    Only cancelled trip times scheduled to run on maxDate or before are returned. Format: "2019-12-23" or "20191223".
    """
    maxDate: String
    """
    Only cancelled trip times that have first stop departure time at
    minDepartureTime or after are returned. Format: seconds since midnight of minDate.
    """
    minDepartureTime: Int
    """
    Only cancelled trip times that have first stop departure time at
    maxDepartureTime or before are returned. Format: seconds since midnight of maxDate.
    """
    maxDepartureTime: Int
    """
    Only cancelled trip times that have last stop arrival time at minArrivalTime
    or after are returned. Format: seconds since midnight of minDate.
    """
    minArrivalTime: Int
    """
    Only cancelled trip times that have last stop arrival time at maxArrivalTime
    or before are returned. Format: seconds since midnight of maxDate.
    """
    maxArrivalTime: Int
  ): [Stoptime]
  """Get all patterns"""
  patterns: [Pattern]
  """
  Get a single pattern based on its ID, i.e. value of field \`code\` (format is
  \`FeedId:RouteId:DirectionId:PatternVariantNumber\`)
  """
  pattern(id: String!): Pattern
  """Get all clusters"""
  clusters: [Cluster]
  """Get a single cluster based on its ID, i.e. value of field \`gtfsId\`"""
  cluster(id: String!): Cluster
  """Get all active alerts"""
  alerts(
    """Only return alerts in these feeds"""
    feeds: [String!]
    """Only return alerts with these severity levels"""
    severityLevel: [AlertSeverityLevelType!]
    """Only return alerts with these effects"""
    effect: [AlertEffectType!]
    """Only return alerts with these causes"""
    cause: [AlertCauseType!]
    """Only return alerts affecting these routes"""
    route: [String!]
    """Only return alerts affecting these stops"""
    stop: [String!]
  ): [Alert]
  """Get the time range for which the API has data available"""
  serviceTimeRange: serviceTimeRange
  """Get all bike rental stations"""
  bikeRentalStations(
    """
    Return bike rental stations with these ids.
    **Note:** if an id is invalid (or the bike rental station service is unavailable)
    the returned list will contain \`null\` values.
    """
    ids: [String]
  ): [BikeRentalStation] @deprecated(reason: "Use rentalVehicles or vehicleRentalStations instead")
  """
  Get a single bike rental station based on its ID, i.e. value of field \`stationId\`
  """
  bikeRentalStation(id: String!): BikeRentalStation @deprecated(reason: "Use rentalVehicle or vehicleRentalStation instead")
  """Get all rental vehicles"""
  rentalVehicles(
    """
    Return rental vehicles with these ids, i.e. value of field \`vehicleId\`.
    **Note:** if an id is invalid (or the rental service is unavailable)
    the returned list will contain \`null\` values.
    
    If this is provided all other filters are ignored.
    """
    ids: [String]
    """Return only rental vehicles that have this form factor."""
    formFactors: [FormFactor]
  ): [RentalVehicle]
  """
  Get a single rental vehicle based on its ID, i.e. value of field \`vehicleId\`
  """
  rentalVehicle(id: String!): RentalVehicle
  """Get all vehicle rental stations"""
  vehicleRentalStations(
    """
    Return vehicle rental stations with these ids, i.e. value of field \`stationId\`.
    **Note:** if an id is invalid (or the rental service is unavailable)
    the returned list will contain \`null\` values.
    """
    ids: [String]
  ): [VehicleRentalStation]
  """
  Get a single vehicle rental station based on its ID, i.e. value of field \`stationId\`
  """
  vehicleRentalStation(id: String!): VehicleRentalStation
  """Get all bike parks"""
  bikeParks: [BikePark] @deprecated(reason: "bikeParks is deprecated. Use vehicleParkings instead.")
  """
  Get a single bike park based on its ID, i.e. value of field \`bikeParkId\`
  """
  bikePark(id: String!): BikePark @deprecated(reason: "bikePark is deprecated. Use vehicleParking instead.")
  """Get all car parks"""
  carParks(
    """
    Return car parks with these ids.
    **Note:** if an id is invalid (or the car park service is unavailable) the returned list will contain \`null\` values.
    """
    ids: [String]
  ): [CarPark] @deprecated(reason: "carParks is deprecated. Use vehicleParkings instead.")
  """Get a single car park based on its ID, i.e. value of field \`carParkId\`"""
  carPark(id: String!): CarPark @deprecated(reason: "carPark is deprecated. Use vehicleParking instead.")
  """Get all vehicle parkings"""
  vehicleParkings(
    """
    Return vehicle parkings with these ids.
    **Note:** if an id is invalid (or the vehicle parking service is unavailable)
    the returned list will contain \`null\` values.
    """
    ids: [String]
  ): [VehicleParking]
  """Get a single vehicle parking based on its ID"""
  vehicleParking(id: String!): VehicleParking
  """Needed until https://github.com/facebook/relay/issues/112 is resolved"""
  viewer: QueryType
  """
  Plans an itinerary from point A to point B based on the given arguments
  """
  plan(
    """
    Date of departure or arrival in format YYYY-MM-DD. Default value: current date
    """
    date: String
    """
    Time of departure or arrival in format hh:mm:ss. Default value: current time
    """
    time: String
    """
    The geographical location where the itinerary begins.
    Use either this argument or \`fromPlace\`, but not both.
    """
    from: InputCoordinates
    """
    The geographical location where the itinerary ends.
    Use either this argument or \`toPlace\`, but not both.
    """
    to: InputCoordinates
    """
    The place where the itinerary begins in format \`name::place\`, where \`place\`
    is either a lat,lng pair (e.g. \`Pasila::60.199041,24.932928\`) or a stop id
    (e.g. \`Pasila::HSL:1000202\`).
    Use either this argument or \`from\`, but not both.
    """
    fromPlace: String
    """
    The place where the itinerary ends in format \`name::place\`, where \`place\` is
    either a lat,lng pair (e.g. \`Pasila::60.199041,24.932928\`) or a stop id
    (e.g. \`Pasila::HSL:1000202\`).
    Use either this argument or \`to\`, but not both.
    """
    toPlace: String
    """
    Whether the itinerary must be wheelchair accessible. Default value: false
    """
    wheelchair: Boolean
    """The maximum number of itineraries to return. Default value: 3."""
    numItineraries: Int = 3
    """
    The length of the search-window in seconds. This parameter is optional.
    
    The search-window is defined as the duration between the earliest-departure-time(EDT) and
    the latest-departure-time(LDT). OTP will search for all itineraries in this departure
    window. If \`arriveBy=true\` the \`dateTime\` parameter is the latest-arrival-time, so OTP
    will dynamically calculate the EDT. Using a short search-window is faster than using a
    longer one, but the search duration is not linear. Using a \\"too\\" short search-window will
    waste resources server side, while using a search-window that is too long will be slow.
    
    OTP will dynamically calculate a reasonable value for the search-window, if not provided.
    The calculation comes with a significant overhead (10-20% extra). Whether you should use the
    dynamic calculated value or pass in a value depends on your use-case. For a travel planner
    in a small geographical area, with a dense network of public transportation, a fixed value
    between 40 minutes and 2 hours makes sense. To find the appropriate search-window, adjust
    it so that the number of itineraries on average is around the wanted \`numItineraries\`. Make
    sure you set the \`numItineraries\` to a high number while testing. For a country wide area
    like Norway, using the dynamic search-window is the best.
    
    When paginating, the search-window is calculated using the \`numItineraries\` in the original
    search together with statistics from the search for the last page. This behaviour is
    configured server side, and can not be overridden from the client.
    
    The search-window used is returned to the response metadata as \`searchWindowUsed\` for
    debugging purposes.
    """
    searchWindow: Long
    """
    Use the cursor to get the next or previous page of results.
    The next page is a set of itineraries departing after the last itinerary in this result and
    the previous page is a set of itineraries departing before the first itinerary.
    This is only usable when public transportation mode(s) are included in the query.
    """
    pageCursor: String
    """
    A multiplier for how bad biking is, compared to being in transit for equal
    lengths of time. Default value: 2.0
    """
    bikeReluctance: Float
    """
    A multiplier for how bad walking with a bike is, compared to being in transit for equal
    lengths of time. Default value: 5.0
    """
    bikeWalkingReluctance: Float
    """
    A multiplier for how bad driving is, compared to being in transit for equal
    lengths of time. Default value: 3.0
    """
    carReluctance: Float
    """
    A multiplier for how bad walking is, compared to being in transit for equal
    lengths of time. Empirically, values between 2 and 4 seem to correspond
    well to the concept of not wanting to walk too much without asking for
    totally ridiculous itineraries, but this observation should in no way be
    taken as scientific or definitive. Your mileage may vary. See
    https://github.com/opentripplanner/OpenTripPlanner/issues/4090 for impact on
    performance with high values. Default value: 2.0
    """
    walkReluctance: Float
    """
    How much worse is waiting for a transit vehicle than being on a transit
    vehicle, as a multiplier. The default value treats wait and on-vehicle time
    as the same. It may be tempting to set this higher than walkReluctance (as
    studies often find this kind of preferences among riders) but the planner
    will take this literally and walk down a transit line to avoid waiting at a
    stop. This used to be set less than 1 (0.95) which would make waiting
    offboard preferable to waiting onboard in an interlined trip. That is also
    undesirable. If we only tried the shortest possible transfer at each stop to
    neighboring stop patterns, this problem could disappear. Default value: 1.0.
    """
    waitReluctance: Float
    """
    Max walk speed along streets, in meters per second. Default value: 1.33
    """
    walkSpeed: Float
    """Max bike speed along streets, in meters per second. Default value: 5.0"""
    bikeSpeed: Float
    """Time to get on and off your own bike, in seconds. Default value: 0"""
    bikeSwitchTime: Int
    """
    Cost of getting on and off your own bike. Unit: seconds. Default value: 0
    """
    bikeSwitchCost: Int
    """
    Optimization type for bicycling legs, e.g. prefer flat terrain. Default value: \`QUICK\`
    """
    optimize: OptimizeType
    """
    Triangle optimization parameters for bicycling legs. Only effective when \`optimize\` is set to **TRIANGLE**.
    """
    triangle: InputTriangle
    """
    Whether the itinerary should depart at the specified time (false), or arrive
    to the destination at the specified time (true). Default value: false.
    """
    arriveBy: Boolean
    """
    List of routes and agencies which are given higher preference when planning the itinerary
    """
    preferred: InputPreferred
    """
    List of routes and agencies which are given lower preference when planning the itinerary
    """
    unpreferred: InputUnpreferred
    """
    This prevents unnecessary transfers by adding a cost for boarding a vehicle. Unit: seconds. Default value: 600
    """
    walkBoardCost: Int
    """
    Separate cost for boarding a vehicle with a bicycle, which is more difficult
    than on foot. Unit: seconds. Default value: 600
    """
    bikeBoardCost: Int
    """
    List of routes, trips, agencies and stops which are not used in the itinerary
    """
    banned: InputBanned
    """
    An extra penalty added on transfers (i.e. all boardings except the first
    one). Not to be confused with bikeBoardCost and walkBoardCost, which are the
    cost of boarding a vehicle with and without a bicycle. The boardCosts are
    used to model the 'usual' perceived cost of using a transit vehicle, and the
    transferPenalty is used when a user requests even less transfers. In the
    latter case, we don't actually optimize for fewest transfers, as this can
    lead to absurd results. Consider a trip in New York from Grand Army Plaza
    (the one in Brooklyn) to Kalustyan's at noon. The true lowest transfers
    route is to wait until midnight, when the 4 train runs local the whole way.
    The actual fastest route is the 2/3 to the 4/5 at Nevins to the 6 at Union
    Square, which takes half an hour. Even someone optimizing for fewest
    transfers doesn't want to wait until midnight. Maybe they would be willing
    to walk to 7th Ave and take the Q to Union Square, then transfer to the 6.
    If this takes less than optimize_transfer_penalty seconds, then that's what
    we'll return. Default value: 0.
    """
    transferPenalty: Int
    """
    List of transportation modes that the user is willing to use. Default: \`["WALK","TRANSIT"]\`
    """
    transportModes: [TransportMode]
    """
    The weight multipliers for transit modes. WALK, BICYCLE, CAR, TRANSIT and LEG_SWITCH are not included.
    """
    modeWeight: InputModeWeight
    """
    Debug the itinerary-filter-chain. The filters will mark itineraries as deleted, but does NOT delete them when this is enabled.
    """
    debugItineraryFilter: Boolean
    """
    Whether arriving at the destination with a rented (station) bicycle is allowed without
    dropping it off. Default: false.
    """
    allowKeepingRentedBicycleAtDestination: Boolean
    """
    The cost of arriving at the destination with the rented vehicle, to discourage doing so.
    Default value: 0.
    """
    keepingRentedBicycleAtDestinationCost: Int
    """
    Invariant: \`boardSlack + alightSlack <= transferSlack\`. Default value: 0
    """
    boardSlack: Int
    """
    Invariant: \`boardSlack + alightSlack <= transferSlack\`. Default value: 0
    """
    alightSlack: Int
    """
    A global minimum transfer time (in seconds) that specifies the minimum
    amount of time that must pass between exiting one transit vehicle and
    boarding another. This time is in addition to time it might take to walk
    between transit stops. Default value: 0
    """
    minTransferTime: Int
    """
    Penalty (in seconds) for using a non-preferred transfer. Default value: 180
    """
    nonpreferredTransferPenalty: Int
    """Maximum number of transfers. Default value: 2"""
    maxTransfers: Int
    """
    This argument has currently no effect on which itineraries are returned. Use
    argument \`fromPlace\` to start the itinerary from a specific stop.
    ~~A transit stop that this trip must start from~~
    """
    startTransitStopId: String
    """
    When false, return itineraries using canceled trips. Default value: true.
    """
    omitCanceled: Boolean = true
    """
    When true, real-time updates are ignored during this search. Default value: false
    """
    ignoreRealtimeUpdates: Boolean
    """
    Two-letter language code (ISO 639-1) used for returned text.
    **Note:** only part of the data has translations available and names of
    stops and POIs are returned in their default language. Due to missing
    translations, it is sometimes possible that returned text uses a mixture of two languages.
    """
    locale: String
    """
    List of ticket types that are allowed to be used in itineraries.
    See \`ticketTypes\` query for list of possible ticket types.
    """
    allowedTicketTypes: [String]
    """
    Which vehicle rental networks can be used. By default, all networks are allowed.
    """
    allowedVehicleRentalNetworks: [String]
    """
    Which vehicle rental networks cannot be used. By default, all networks are allowed.
    """
    bannedVehicleRentalNetworks: [String]
    """
    Factor for how much the walk safety is considered in routing. Value should be between 0 and 1.
    If the value is set to be 0, safety is ignored. Default is 1.0.
    """
    walkSafetyFactor: Float
    "Preferences for vehicle parking"
    parking: VehicleParkingInput
    """
    The maximum distance (in meters) the user is willing to walk per walking
    section. If the only transport mode allowed is \`WALK\`, then the value of
    this argument is ignored.
    Default: 2000m
    Maximum value: 15000m
    **Note:** If this argument has a relatively small value and only some
    transport modes are allowed (e.g. \`WALK\` and \`RAIL\`), it is possible to get
    an itinerary which has (useless) back and forth public transport legs to
    avoid walking too long distances.
    """
    maxWalkDistance: Float @deprecated(reason: "Does nothing. Use walkReluctance instead.")
    """
    How much more reluctant is the user to walk on streets with car traffic allowed. Default value: 1.0
    """
    walkOnStreetReluctance: Float @deprecated(reason: "Use \`walkSafetyFactor\` instead")
    """
    How much less bad is waiting at the beginning of the trip (replaces
    \`waitReluctance\` on the first boarding). Default value: 0.4
    """
    waitAtBeginningFactor: Float @deprecated(reason: "Removed in OTP 2, the timetable-view replaces this functionality.")
    """
    This argument has no use for itinerary planning and will be removed later.
    When true, do not use goal direction or stop at the target, build a full SPT. Default value: false.
    """
    batch: Boolean @deprecated(reason: "Removed in OTP 2")
    """Is bike rental allowed? Default value: false"""
    allowBikeRental: Boolean @deprecated(reason: "Rental is specified by modes")
    """
    No effect on itinerary planning, adjust argument \`time\` instead to get later departures.
    ~~The maximum wait time in seconds the user is willing to delay trip start. Only effective in Analyst.~~
    """
    claimInitialWait: Long @deprecated(reason: "Removed in OTP 2")
    """
    **Consider this argument experimental** – setting this argument to true
    causes timeouts and unoptimal routes in many cases.
    When true, reverse optimize (find alternative transportation mode, which
    still arrives to the destination in time) this search on the fly after
    processing each transit leg, rather than reverse-optimizing the entire path
    when it's done. Default value: false.
    """
    reverseOptimizeOnTheFly: Boolean @deprecated(reason: "Removed in OTP 2")
    """
    If true, the remaining weight heuristic is disabled. Currently only
    implemented for the long distance path service.
    """
    disableRemainingWeightHeuristic: Boolean @deprecated(reason: "Removed in OTP 2.2")
    """Whether legs should be compacted by performing a reversed search."""
    compactLegsByReversedSearch: Boolean @deprecated(reason: "Removed in OTP 2")
    """
    Which vehicle rental networks can be used. By default, all networks are allowed.
    """
    allowedBikeRentalNetworks: [String] @deprecated(reason: "Use allowedVehicleRentalNetworks instead")
    """
    The maximum time (in seconds) of pre-transit travel when using
    drive-to-transit (park and ride or kiss and ride). Default value: 1800.
    """
    maxPreTransitTime: Int @deprecated(reason: "Use walkReluctance or future reluctance parameters for other modes")
    """
    How expensive it is to drive a car when car&parking, increase this value to
    make car driving legs shorter. Default value: 1.
    """
    carParkCarLegWeight: Float @deprecated(reason: "Use \`carReluctance\` instead.")
    """Tuning parameter for the search algorithm, mainly useful for testing."""
    heuristicStepsPerMainStep: Int @deprecated(reason: "Removed. Doesn't do anything.")
    """
    How easily bad itineraries are filtered from results. Value 0 (default)
    disables filtering. Itineraries are filtered if they are worse than another
    one in some respect (e.g. more walking) by more than the percentage of
    filtering level, which is calculated by dividing 100% by the value of this
    argument (e.g. \`itineraryFiltering = 0.5\` → 200% worse itineraries are filtered).
    """
    itineraryFiltering: Float @deprecated(reason: "Removed. Doesn't do anything.")
    """An ordered list of intermediate locations to be visited."""
    intermediatePlaces: [InputCoordinates] @deprecated(reason: "Not implemented in OTP2.")
    """
    ID of the trip on which the itinerary starts. This argument can be used to
    plan itineraries when the user is already onboard a vehicle. When using this
    argument, arguments \`time\` and \`from\` should be set based on a vehicle
    position message received from the vehicle running the specified trip.
    **Note:** this argument only takes into account the route and estimated
    travel time of the trip (and therefore arguments \`time\` and \`from\` must be
    used correctly to get meaningful itineraries).
    """
    startTransitTripId: String @deprecated(reason: "Not implemented in OTP2")
  ): Plan @async
}


enum RealtimeState {
  """
  The trip information comes from the GTFS feed, i.e. no real-time update has been applied.
  """
  SCHEDULED
  """
  The trip information has been updated, but the trip pattern stayed the same as the trip pattern of the scheduled trip.
  """
  UPDATED
  """The trip has been canceled by a real-time update."""
  CANCELED
  """
  The trip has been added using a real-time update, i.e. the trip was not present in the GTFS feed.
  """
  ADDED
  """
  The trip information has been updated and resulted in a different trip pattern
  compared to the trip pattern of the scheduled trip.
  """
  MODIFIED
}


"""
Route represents a public transportation service, usually from point A to point
B and *back*, shown to customers under a single name, e.g. bus 550. Routes
contain patterns (see field \`patterns\`), which describe different variants of
the route, e.g. outbound pattern from point A to point B and inbound pattern
from point B to point A.
"""
type Route implements Node {
  """
  Global object ID provided by Relay. This value can be used to refetch this object using **node** query.
  """
  id: ID!
  """ID of the route in format \`FeedId:RouteId\`"""
  gtfsId: String!
  """Agency operating the route"""
  agency: Agency
  """Short name of the route, usually a line number, e.g. 550"""
  shortName: String
  """Long name of the route, e.g. Helsinki-Leppävaara"""
  longName(
    """
    If translated longName is found from gtfs translation.txt and wanted language is not same as
    feed's language then returns wanted translation. Otherwise uses name from routes.txt.
    """
    language: String
  ): String
  """Transport mode of this route, e.g. \`BUS\`"""
  mode: TransitMode
  """
  The raw GTFS route type as a integer. For the list of possible values, see:
  https://developers.google.com/transit/gtfs/reference/#routestxt and
  https://developers.google.com/transit/gtfs/reference/extended-route-types
  """
  type: Int
  desc: String
  url: String
  """
  The color (in hexadecimal format) the agency operating this route would prefer
  to use on UI elements (e.g. polylines on a map) related to this route. This
  value is not available for most routes.
  """
  color: String
  """
  The color (in hexadecimal format) the agency operating this route would prefer
  to use when displaying text related to this route. This value is not available
  for most routes.
  """
  textColor: String
  bikesAllowed: BikesAllowed
  """List of patterns which operate on this route"""
  patterns: [Pattern]
  """List of stops on this route"""
  stops: [Stop]
  """List of trips which operate on this route"""
  trips: [Trip]
  """
  List of alerts which have an effect on the route directly or indirectly.
  By default only alerts directly affecting this route are returned. It's also possible
  to return other relevant alerts through defining types.
  """
  alerts(
    """
    Returns alerts for these types that are relevant for the route.
    By default only returns alerts that directly affect this route.
    """
    types: [RouteAlertType]
  ): [Alert]
  """
  Orders the routes in a way which is useful for presentation to passengers.
  Routes with smaller values should be displayed first.
  
  The value can be any non-negative integer. A null value means that no information was supplied.
  
  This value is passed through from the source data without modification. If multiple feeds
  define sort orders for their routes, they may not be comparable to each other as no agreed scale
  exists.
  
  Two routes may also have the same sort order and clients must decide based on other criteria
  what the actual order is.
  """
  sortOrder: Int
}


"""Entities that are relevant for routes that can contain alerts"""
enum RouteAlertType {
  """Alerts affecting the route's agency."""
  AGENCY
  """Alerts directly affecting the route."""
  ROUTE
  """Alerts affecting the route type of the route."""
  ROUTE_TYPE
  """Alerts affecting the stops that are on the route."""
  STOPS_ON_ROUTE
  """Alerts affecting the route's trips."""
  TRIPS
  """Alerts affecting the stops on some trips of the route."""
  STOPS_ON_TRIPS
  """Alerts affecting route's patterns."""
  PATTERNS
}


"""
Route type entity which covers all agencies if agency is null,
otherwise only relevant for one agency.
"""
type RouteType {
  """
  GTFS Route type.
  For the list of possible values, see:
      https://developers.google.com/transit/gtfs/reference/#routestxt and
      https://developers.google.com/transit/gtfs/reference/extended-route-types
  """
  routeType: Int!
  """A public transport agency"""
  agency: Agency
  """
  The routes which have the defined routeType and belong to the agency, if defined.
  Otherwise all routes of the feed that have the defined routeType.
  """
  routes: [Route]
}


"""Time range for which the API has data available"""
type serviceTimeRange {
  """
  Time from which the API has data available. Format: Unix timestamp in seconds
  """
  start: Long
  """
  Time until which the API has data available. Format: Unix timestamp in seconds
  """
  end: Long
}


"""
Actions to take relative to the current position when engaging a walking/driving step.
"""
enum RelativeDirection {
  DEPART
  HARD_LEFT
  LEFT
  SLIGHTLY_LEFT
  CONTINUE
  SLIGHTLY_RIGHT
  RIGHT
  HARD_RIGHT
  CIRCLE_CLOCKWISE
  CIRCLE_COUNTERCLOCKWISE
  ELEVATOR
  UTURN_LEFT
  UTURN_RIGHT
  ENTER_STATION
  EXIT_STATION
  FOLLOW_SIGNS
}


"""
The cardinal (compass) direction taken when engaging a walking/driving step.
"""
enum AbsoluteDirection {
  NORTH
  NORTHEAST
  EAST
  SOUTHEAST
  SOUTH
  SOUTHWEST
  WEST
  NORTHWEST
}


"""Occupancy status of a vehicle."""
enum OccupancyStatus {
  """Default. There is no occupancy-data on this departure."""
  NO_DATA_AVAILABLE
  """
  The vehicle is considered empty by most measures, and has few or no passengers onboard, but is
  still accepting passengers. There isn't a big difference between this and MANY_SEATS_AVAILABLE
  so it's possible to handle them as the same value, if one wants to limit the number of different
  values.
  SIRI nordic profile: merge these into \`MANY_SEATS_AVAILABLE\`.
  """
  EMPTY
  """
  The vehicle or carriage has a large number of seats available. The amount of free seats out of
  the total seats available to be considered large enough to fall into this category is
  determined at the discretion of the producer. There isn't a big difference between this and
  EMPTY so it's possible to handle them as the same value, if one wants to limit the number of
  different values.
  SIRI nordic profile: more than ~50% of seats available.
  """
  MANY_SEATS_AVAILABLE
  """
  The vehicle or carriage has a small number of seats available. The amount of free seats out of
  the total seats available to be considered small enough to fall into this category is
  determined at the discretion of the producer.
  SIRI nordic profile: less than ~50% of seats available.
  """
  FEW_SEATS_AVAILABLE
  """
  The vehicle or carriage can currently accommodate only standing passengers.
  SIRI nordic profile: less than ~10% of seats available.
  """
  STANDING_ROOM_ONLY
  """
  The vehicle or carriage can currently accommodate only standing passengers and has limited
  space for them. There isn't a big difference between this and FULL so it's possible to handle
  them as the same value, if one wants to limit the number of different values.
  SIRI nordic profile: merge into \`STANDING_ROOM_ONLY\`.
  """
  CRUSHED_STANDING_ROOM_ONLY
  """
  The vehicle is considered full by most measures, but may still be allowing passengers to
  board.
  """
  FULL
  """
  The vehicle or carriage is not accepting passengers.
  SIRI nordic profile: if vehicle/carriage is not in use / unavailable, or passengers are only allowed
  to alight due to e.g. crowding.
  """
  NOT_ACCEPTING_PASSENGERS
}


type step {
  """The distance in meters that this step takes."""
  distance: Float
  """The longitude of the start of the step."""
  lon: Float
  """The latitude of the start of the step."""
  lat: Float
  """The elevation profile as a list of { distance, elevation } values."""
  elevationProfile: [elevationProfileComponent]
  """
  The relative direction (e.g. left or right turn) to take when engaging this step.
  """
  relativeDirection: RelativeDirection
  """
  The cardinal (compass) direction (e.g. north, northeast) taken when engaging this step.
  """
  absoluteDirection: AbsoluteDirection
  """The name of the street, road, or path taken for this step."""
  streetName: String
  """When exiting a highway or traffic circle, the exit name/number."""
  exit: String
  """
  Indicates whether or not a street changes direction at an intersection.
  """
  stayOn: Boolean
  """
  This step is on an open area, such as a plaza or train platform,
  and thus the directions should say something like "cross".
  """
  area: Boolean
  """
  The name of this street was generated by the system, so we should only display it once, and
  generally just display right/left directions
  """
  bogusName: Boolean
  """Is this step walking with a bike?"""
  walkingBike: Boolean
  """A list of alerts (e.g. construction, detours) applicable to the step."""
  alerts: [Alert]
}


"""
Stop can represent either a single public transport stop, where passengers can
board and/or disembark vehicles, or a station, which contains multiple stops.
See field \`locationType\`.
"""
type Stop implements Node & PlaceInterface {
  """
  Global object ID provided by Relay. This value can be used to refetch this object using **node** query.
  """
  id: ID!
  """Returns timetable of the specified pattern at this stop"""
  stopTimesForPattern(
    """Id of the pattern"""
    id: String!
    """
    Return  departures after this time. Format: Unix timestamp in seconds. Default value: current time
    """
    startTime: Long = 0
    """
    Return stoptimes within this time range, starting from \`startTime\`. Unit: Seconds
    """
    timeRange: Int = 86400
    numberOfDepartures: Int = 2
    """If true, only those departures which allow boarding are returned"""
    omitNonPickups: Boolean = false
    """If false, returns also canceled trips"""
    omitCanceled: Boolean = true
  ): [Stoptime]
  """ÌD of the stop in format \`FeedId:StopId\`"""
  gtfsId: String!
  """Name of the stop, e.g. Pasilan asema"""
  name(
    """
    If translated name is found from gtfs translation.txt and wanted language is not same as
    feed's language then returns wanted translation. Otherwise uses name from stops.txt.
    E.g. Swedish name for Pasilan asema is Böle station.
    """
    language: String
  ): String!
  """Latitude of the stop (WGS 84)"""
  lat: Float
  """Longitude of the stop (WGS 84)"""
  lon: Float
  """
  Representations of this stop's geometry. This is mainly interesting for flex stops which can be
  a polygon or a group of stops either consisting of either points or polygons.
  
  Regular fixed-schedule stops return a single point.
  
  Stations (parent stations with child stops) contain a geometry collection with a point for the
  central coordinate plus a convex hull polygon (https://en.wikipedia.org/wiki/Convex_hull) of all
  coordinates of the child stops.
  
  If there are only two child stops then the convex hull is a straight line between the them. If
  there is a single child stop then it's a single point.
  """
  geometries: StopGeometries
  """Stop code which is visible at the stop"""
  code: String
  """Description of the stop, usually a street name"""
  desc(
    """
    If translated description is found from gtfs translation.txt and wanted language is not same as
    feed's language then returns wanted translation. Otherwise uses descriptions from stops.txt.
    """
    language: String
  ): String
  """ID of the zone where this stop is located"""
  zoneId: String
  url(
    """
    If translated url is found from gtfs translation.txt and wanted language is not same as
    feed's language then returns wanted translation. Otherwise uses url from stops.txt.
    """
    language: String
  ): String
  """Identifies whether this stop represents a stop or station."""
  locationType: LocationType
  """
  The station which this stop is part of (or null if this stop is not part of a station)
  """
  parentStation: Stop
  """
  Whether wheelchair boarding is possible for at least some of vehicles on this stop
  """
  wheelchairBoarding: WheelchairBoarding
  direction: String
  timezone: String
  """
  The raw GTFS route type used by routes which pass through this stop. For the
  list of possible values, see:
  https://developers.google.com/transit/gtfs/reference/#routestxt and
  https://developers.google.com/transit/gtfs/reference/extended-route-types
  """
  vehicleType: Int
  """
  Transport mode (e.g. \`BUS\`) used by routes which pass through this stop or
  \`null\` if mode cannot be determined, e.g. in case no routes pass through the stop.
  Note that also other types of vehicles may use the stop, e.g. tram replacement
  buses might use stops which have \`TRAM\` as their mode.
  """
  vehicleMode: Mode
  """
  Identifier of the platform, usually a number. This value is only present for stops that are part of a station
  """
  platformCode: String
  """The cluster which this stop is part of"""
  cluster: Cluster
  """
  Returns all stops that are children of this station (Only applicable for stations)
  """
  stops: [Stop]
  """Routes which pass through this stop"""
  routes: [Route!]
  """Patterns which pass through this stop"""
  patterns: [Pattern]
  """List of nearby stops which can be used for transfers"""
  transfers(
    """
    Maximum distance to the transfer stop. Defaults to unlimited.
    **Note:** only stops that are linked as a transfer stops to this stop are
    returned, i.e. this does not do a query to search for *all* stops within
    radius of \`maxDistance\`.
    """
    maxDistance: Int
  ): [stopAtDistance]
  """Returns list of stoptimes for the specified date"""
  stoptimesForServiceDate(
    """Date in format YYYYMMDD"""
    date: String
    """If true, only those departures which allow boarding are returned"""
    omitNonPickups: Boolean = false
    """If false, returns also canceled trips"""
    omitCanceled: Boolean = false
  ): [StoptimesInPattern]
  """
  Returns list of stoptimes (arrivals and departures) at this stop, grouped by patterns
  """
  stoptimesForPatterns(
    """
    Return departures after this time. Format: Unix timestamp in seconds. Default value: current time
    """
    startTime: Long = 0
    """
    Return stoptimes within this time range, starting from \`startTime\`. Unit: Seconds
    """
    timeRange: Int = 86400
    numberOfDepartures: Int = 5
    """If true, only those departures which allow boarding are returned"""
    omitNonPickups: Boolean = false
    """If false, returns also canceled trips"""
    omitCanceled: Boolean = true
  ): [StoptimesInPattern]
  """Returns list of stoptimes (arrivals and departures) at this stop"""
  stoptimesWithoutPatterns(
    """
    Return departures after this time. Format: Unix timestamp in seconds. Default value: current time
    """
    startTime: Long = 0
    """
    Return stoptimes within this time range, starting from \`startTime\`. Unit: Seconds
    """
    timeRange: Int = 86400
    numberOfDepartures: Int = 5
    """If true, only those departures which allow boarding are returned"""
    omitNonPickups: Boolean = false
    """If false, returns also canceled trips"""
    omitCanceled: Boolean = true
  ): [Stoptime]
  """
  By default, list of alerts which have directly an effect on just the stop.
  It's also possible to return other relevant alerts through defining types.
  """
  alerts(
    """
    Returns alerts for these types that are relevant for the stop.
    By default, list of alerts which have directly an effect on just the stop.
    """
    types: [StopAlertType]
  ): [Alert]
}


"""Entities, which are relevant for a stop and can contain alerts"""
enum StopAlertType {
  """Alerts affecting the stop"""
  STOP
  """Alerts affecting the stop's patterns"""
  PATTERNS
  """Alerts affecting the agencies of the routes going through the stop"""
  AGENCIES_OF_ROUTES
  """Alerts affecting the routes that go through the stop"""
  ROUTES
  """Alerts affecting the trips that go through this stop"""
  TRIPS
  """Alerts affecting the stop on specific routes"""
  STOP_ON_ROUTES
  """Alerts affecting the stop on specific trips"""
  STOP_ON_TRIPS
}


type stopAtDistance implements Node {
  """
  Global object ID provided by Relay. This value can be used to refetch this object using **node** query.
  """
  id: ID!
  stop: Stop
  """Walking distance to the stop along streets and paths"""
  distance: Int
}


"""A connection to a list of items."""
type stopAtDistanceConnection {
  edges: [stopAtDistanceEdge]
  pageInfo: PageInfo!
}


"""An edge in a connection."""
type stopAtDistanceEdge {
  """The item at the end of the edge"""
  node: stopAtDistance
  cursor: String!
}


"""Stop that should (but not guaranteed) to exist on a route."""
type StopOnRoute {
  """
  Stop at the route. It's also possible that the stop is no longer on the route.
  """
  stop: Stop!
  """Route which contains the stop."""
  route: Route!
}


"""Stop that should (but not guaranteed) to exist on a trip."""
type StopOnTrip {
  """
  Stop at the trip. It's also possible that the stop is no longer on the trip.
  """
  stop: Stop!
  """Trip which contains the stop."""
  trip: Trip!
}


"""
Stoptime represents the time when a specific trip arrives to or departs from a specific stop.
"""
type Stoptime {
  """The stop where this arrival/departure happens"""
  stop: Stop
  """
  The sequence of the stop in the pattern. This is not required to start from 0 or be consecutive - any
  increasing integer sequence along the stops is valid.
  
  The purpose of this field is to identify the stop within the pattern so it can be cross-referenced
  between it and the itinerary. It is safe to cross-reference when done quickly, i.e. within seconds.
  However, it should be noted that realtime updates can change the values, so don't store it for
  longer amounts of time.
  
  Depending on the source data, this might not be the GTFS \`stop_sequence\` but another value, perhaps
  even generated.
  """
  stopPosition: Int
  """
  Scheduled arrival time. Format: seconds since midnight of the departure date
  """
  scheduledArrival: Int
  """
  Realtime prediction of arrival time. Format: seconds since midnight of the departure date
  """
  realtimeArrival: Int
  """
  The offset from the scheduled arrival time in seconds. Negative values
  indicate that the trip is running ahead of schedule.
  """
  arrivalDelay: Int
  """
  Scheduled departure time. Format: seconds since midnight of the departure date
  """
  scheduledDeparture: Int
  """
  Realtime prediction of departure time. Format: seconds since midnight of the departure date
  """
  realtimeDeparture: Int
  """
  The offset from the scheduled departure time in seconds. Negative values
  indicate that the trip is running ahead of schedule
  """
  departureDelay: Int
  """
  true, if this stop is used as a time equalization stop. false otherwise.
  """
  timepoint: Boolean
  """true, if this stoptime has real-time data available"""
  realtime: Boolean
  """State of real-time data"""
  realtimeState: RealtimeState
  """
  Whether the vehicle can be boarded at this stop. This field can also be used
  to indicate if boarding is possible only with special arrangements.
  """
  pickupType: PickupDropoffType
  """
  Whether the vehicle can be disembarked at this stop. This field can also be
  used to indicate if disembarkation is possible only with special arrangements.
  """
  dropoffType: PickupDropoffType
  """
  Departure date of the trip. Format: Unix timestamp (local time) in seconds.
  """
  serviceDay: Long
  """Trip which this stoptime is for"""
  trip: Trip
  """
  Vehicle headsign of the trip on this stop. Trip headsigns can change during
  the trip (e.g. on routes which run on loops), so this value should be used
  instead of \`tripHeadsign\` to display the headsign relevant to the user.
  """
  headsign(
    """
    If translated headsign is found from gtfs translation.txt and wanted language is not same as
    feed's language then returns wanted translation. Otherwise uses name from trip_headsign.txt.
    """
    language: String
  ): String
}


"""Stoptimes grouped by pattern"""
type StoptimesInPattern {
  pattern: Pattern
  stoptimes: [Stoptime]
}


"""Describes ticket type"""
type TicketType implements Node {
  """
  Global object ID provided by Relay. This value can be used to refetch this object using **node** query.
  """
  id: ID!
  """
  Ticket type ID in format \`FeedId:TicketTypeId\`. Ticket type IDs are usually
  combination of ticket zones where the ticket is valid.
  """
  fareId: String!
  """Price of the ticket in currency that is specified in \`currency\` field"""
  price: Float
  """ISO 4217 currency code"""
  currency: String
  """
  List of zones where this ticket is valid.
  Corresponds to field \`zoneId\` in **Stop** type.
  """
  zones: [String!]
}


"""Text with language"""
type TranslatedString {
  text: String
  """Two-letter language code (ISO 639-1)"""
  language: String
}


"""Transportation mode which can be used in the itinerary"""
input TransportMode {
  mode: Mode!
  """Optional additional qualifier for transport mode, e.g. \`RENT\`"""
  qualifier: Qualifier
}


"""
Trip is a specific occurance of a pattern, usually identified by route, direction on the route and exact departure time.
"""
type Trip implements Node {
  """
  Global object ID provided by Relay. This value can be used to refetch this object using **node** query.
  """
  id: ID!
  """ID of the trip in format \`FeedId:TripId\`"""
  gtfsId: String!
  """The route the trip is running on"""
  route: Route!
  serviceId: String
  """List of dates when this trip is in service. Format: YYYYMMDD"""
  activeDates: [String]
  tripShortName: String
  """Headsign of the vehicle when running on this trip"""
  tripHeadsign(
    """
    If a translated headsign is found from GTFS translation.txt and wanted language is not same as
    feed's language then returns wanted translation. Otherwise uses name from trip_headsign.txt.
    """
    language: String
  ): String
  """
  Short name of the route this trip is running. See field \`shortName\` of Route.
  """
  routeShortName: String
  """
  Direction code of the trip, i.e. is this the outbound or inbound trip of a
  pattern. Possible values: 0, 1 or \`null\` if the direction is irrelevant, i.e.
  the pattern has trips only in one direction.
  """
  directionId: String
  blockId: String
  shapeId: String
  """Whether the vehicle running this trip can be boarded by a wheelchair"""
  wheelchairAccessible: WheelchairBoarding
  """Whether bikes are allowed on board the vehicle running this trip"""
  bikesAllowed: BikesAllowed
  """The pattern the trip is running on"""
  pattern: Pattern
  """List of stops this trip passes through"""
  stops: [Stop!]!
  """
  Hash code of the trip. This value is stable and not dependent on the trip id.
  """
  semanticHash: String!
  """List of times when this trip arrives to or departs from a stop"""
  stoptimes: [Stoptime]
  """Departure time from the first stop"""
  departureStoptime(
    """
    Date for which the departure time is returned. Format: YYYYMMDD. If this
    argument is not used, field \`serviceDay\` in the stoptime will have a value of 0.
    """
    serviceDate: String
  ): Stoptime
  """Arrival time to the final stop"""
  arrivalStoptime(
    """
    Date for which the arrival time is returned. Format: YYYYMMDD. If this
    argument is not used, field \`serviceDay\` in the stoptime will have a value of 0.
    """
    serviceDate: String
  ): Stoptime
  stoptimesForDate(
    """Date for which stoptimes are returned. Format: YYYYMMDD"""
    serviceDate: String
  ): [Stoptime]
  """List of coordinates of this trip's route"""
  geometry: [[Float]]
  """
  Coordinates of the route of this trip in Google polyline encoded format
  """
  tripGeometry: Geometry
  """
  By default, list of alerts which have directly an effect on just the trip.
  It's also possible to return other relevant alerts through defining types.
  """
  alerts(
    """
    Returns alerts for these types that are relevant for the trip.
    By default, list of alerts which have directly an effect on just the trip.
    """
    types: [TripAlertType]
  ): [Alert]
  """
  The latest realtime occupancy information for the latest occurance of this
  trip.
  """
  occupancy: TripOccupancy
}


"""Entities, which are relevant for a trip and can contain alerts"""
enum TripAlertType {
  """Alerts affecting the trip"""
  TRIP
  """Alerts affecting the trip's pattern"""
  PATTERN
  """Alerts affecting the trip's agency"""
  AGENCY
  """Alerts affecting the trip's route"""
  ROUTE
  """Alerts affecting the route type of the trip's route"""
  ROUTE_TYPE
  """
  Alerts affecting the stops visited on the trip.
  Some of the alerts can only affect the trip or its route on the stop.
  """
  STOPS_ON_TRIP
}


"""
Occupancy of a vehicle on a trip. This should include the most recent occupancy information
available for a trip. Historic data might not be available.
"""
type TripOccupancy {
  """Occupancy information mapped to a limited set of descriptive states."""
  occupancyStatus: OccupancyStatus
}


"""
A system notice is used to tag elements with system information for debugging
or other system related purpose. One use-case is to run a routing search with
'debugItineraryFilter: true'. This will then tag itineraries instead of removing
them from the result. This make it possible to inspect the itinerary-filter-chain.
A SystemNotice only has english text,
because the primary user are technical staff, like testers and developers.
"""
type SystemNotice {
  """Notice's tag"""
  tag: String
  """Notice's description"""
  text: String
}


"""
This is used for alert entities that we don't explicitly handle or they are missing.
"""
type Unknown {
  """Entity's description"""
  description: String
}


enum VertexType {
  """NORMAL"""
  NORMAL
  """TRANSIT"""
  TRANSIT
  """BIKEPARK"""
  BIKEPARK
  """BIKESHARE"""
  BIKESHARE
  """PARKANDRIDE"""
  PARKANDRIDE
}


enum WheelchairBoarding {
  """There is no accessibility information for the stop."""
  NO_INFORMATION
  """
  At least some vehicles at this stop can be boarded by a rider in a wheelchair.
  """
  POSSIBLE
  """Wheelchair boarding is not possible at this stop."""
  NOT_POSSIBLE
}

schema {
  query: QueryType
}
"""
Use an asynchronous data fetcher on a separate thread for this field.

This is useful when adding several queries in the same HTTP request, for example by using a batch: Those
fields annotated with this directive run in parallel.

This is only worth it when the execution is long running, i.e. more than ~50 milliseconds, so this doesn't happen by default.
"""
directive @async on FIELD_DEFINITION
`;class s_{constructor(n){za(this,"mapping");this.mapping=n}getFor(n){return this.mapping.get(n.name)}}var nr;(function(i){i.UNION="union",i.ARGUMENT="argument",i.FIELD="field"})(nr||(nr={}));function a_(i){const n=new Map;return o_(i,t=>{yn(t)&&l_(t,s=>{const a=co(s.type);eo(n,a).references.push({kind:nr.FIELD,parent:t,by:s}),u_(s,c=>{const h=co(c.type);eo(n,h).references.push({kind:nr.ARGUMENT,field:s,type:t,by:c})})}),Xn(t)&&t.getTypes().forEach(s=>{eo(n,s).references.push({kind:nr.UNION,by:t})})}),new s_(n)}function o_(i,n){Object.entries(i.getTypeMap()).forEach(([,t])=>{t.name.startsWith("__")||n(t)})}function l_(i,n){Object.entries(i.getFields()).forEach(([,t])=>{n(t)})}function u_(i,n){Object.entries(i.args).forEach(([,t])=>{n(t)})}function eo(i,n){let t=i.get(n.name);return t||(t={references:[]},i.set(n.name,t)),t}function co(i){return un(i)||oi(i)?co(i.ofType):i}const fn=__(),fo=wo(bo.DIRECTIVES,[]);var Vc;const c_=As((Vc=fn.getQueryType())==null?void 0:Vc.getFields());var Wc;const f_=As((Wc=fn.getMutationType())==null?void 0:Wc.getFields());var Yc;const h_=As((Yc=fn.getSubscriptionType())==null?void 0:Yc.getFields()),No=At.keyBy(Bf(),i=>i.name.toLocaleLowerCase()),d_=At.mapValues(No,i=>{const n=fo.find(t=>(t==null?void 0:t.name)===i.name||(t==null?void 0:t.name)==="*");return n?n.args.some(t=>t==="*")?i.args:n.args.map(t=>i.args.find(s=>s.name===t)).filter(t=>!!t):[]}),p_=As(fn.getTypeMap()),g_=a_(fn);function As(i){return At.mapKeys(i||{},(n,t)=>t.toLocaleLowerCase())}function m_(){return At.size(fn.getTypeMap())<=10}function v_(){return[no("Queries",fn.getQueryType()),no("Mutations",fn.getMutationType()),no("Subscriptions",fn.getSubscriptionType()),I_(),b_()].filter(i=>!!i)}function no(i,n){return T_(i,y_(n))}function y_(i){return At.sortBy((i==null?void 0:i.getFields())||{},n=>n.name)}function T_(i,n){return n.length===0?null:{type:"menu",title:i,children:n.map(t=>({type:"page",title:t.name,section:i,deprecated:!!t.deprecationReason,href:ar.joinUrlPaths(ms,i.toLocaleLowerCase(),t.name)}))}}function b_(){return m_()?null:{type:"menu",title:"Types",children:At.sortBy(At.map(fn.getTypeMap()),n=>n.name).filter(n=>!n.name.startsWith("__")).map(n=>({type:"page",title:n.name,section:"Types",href:ar.joinUrlPaths(ms,"types",n.name)}))}}function F_(){return!!fn.getQueryType()}function U_(i){return c_[i.toLocaleLowerCase()]}function M_(){return!!fn.getMutationType()}function B_(i){return f_[i.toLocaleLowerCase()]}function $_(){return!!fn.getSubscriptionType()}function G_(i){return h_[i.toLocaleLowerCase()]}function V_(i){return p_[i.toLocaleLowerCase()]}function w_(i){return No[i.toLocaleLowerCase()]}function W_(i){return w_(i.name)!==void 0}function Y_(){return At.size(No)>0}function q_(i){return d_[i.name.toLocaleLowerCase()]||[]}function j_(i){if(i)return g_.getFor(i)}function H_(i){return At.flatMap(i.getFields(),n=>({field:n,possibleDescriptions:Mf(n,i)}))}function Mf(i,n){return i?i.description?[{description:i.description,from:n}]:yn(n)?n.getInterfaces().flatMap(t=>Mf(t.getFields()[i.name],t)):[]:[]}function Bf(){return fo.some(i=>(i==null?void 0:i.name)==="*")?fn.getDirectives().filter(i=>!["include","skip","deprecated","specifiedBy"].includes(i.name)):fo.filter(i=>!!(i!=null&&i.name)).map(({name:i})=>i?fn.getDirective(i):void 0).filter(i=>!!i)}function __(){return $c.trim().length===0?n_(JSON.parse(JSON.stringify({__schema:{types:[]}}))):r_($c)}function I_(){const i=Bf();return i.length===0?null:{type:"menu",title:"Directives",children:i.map(n=>({type:"page",title:n.name,href:ar.joinUrlPaths(ms,"directives",n.name),section:"Directives"}))}}const z_=wo(bo.APP_TITLE,"GraphQL Documentation"),$f=S_().concat(v_());N_($f);const E_=Object.freeze($f),Q_=A_();function S_(){return wo(bo.PAGES,x_()).filter(n=>!!n).map(n=>Vf([],n))}function A_(){const i=k_();if(i)return i.href;throw new Error("No custom pages or query available to use as the root application URL. You need to provide at least one custom page or your schema should contain at least one query/mutation/subscription.")}function N_(i){function n(s,a){for(const l of s){if(l.type==="page"){a(l);continue}l.type==="menu"&&n(l.children,a)}}let t;n(i,s=>{t&&(t.next={title:s.title,section:s.section,href:s.href},s.previous={title:t.title,section:t.section,href:t.href}),t=s})}function k_(){return Gf(()=>!0)}function J_(i){return Gf(n=>n.href.toLocaleLowerCase()===i.toLocaleLowerCase())}function Gf(i){function n(t){for(const s of t){if(s.type==="page"&&i(s))return s;if(s.type==="menu"){const a=n(s.children);if(a)return a}}return null}return n(E_)}function Vf(i,n){if(typeof n.content=="string")return{type:"page",title:n.title,content:n.content,href:ar.joinUrlPaths(ms,...i,Gc(n.title))};const t=i.concat([Gc(n.title)]);return{type:"menu",title:n.title,children:n.content.map(s=>({...Vf(t,s),section:n.title}))}}function Gc(i){return ar.generatePathSegment(i,new ys)}function x_(){return[{title:"Introduction",content:[{title:"Welcome",content:`
        # Welcome 🎉

        [Congratulations!](https://www.youtube.com/watch?v=1Bix44C1EzY) You have successfully created your first Magidoc website.

        Now that you are up and running, you can customize this website even further by providing some configuration inside your [magidoc.mjs ⚙️](https://magidoc.js.org/cli/magidoc-configuration). 
        If you wish to remove or modify this page, have a look at the *customPages* configuration.
        `.split(`
`).map(i=>i.trim()).join(`
`)}]}]}export{u0 as A,Xi as B,uw as C,un as D,oi as E,Tf as F,yf as G,V_ as H,j_ as I,H_ as J,W_ as K,I as L,P_ as M,vs as N,zc as O,L_ as P,nr as R,At as _,yn as a,cn as b,qt as c,Xn as d,Zn as e,m_ as f,wo as g,z_ as h,Kn as i,C_ as j,Q_ as k,J_ as l,J as m,Y_ as n,w_ as o,E_ as p,q_ as q,M_ as r,fn as s,bo as t,ar as u,B_ as v,F_ as w,U_ as x,$_ as y,G_ as z};
