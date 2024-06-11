var H0=Object.defineProperty;var j0=(i,n,t)=>n in i?H0(i,n,{enumerable:!0,configurable:!0,writable:!0,value:t}):i[n]=t;var Ie=(i,n,t)=>(j0(i,typeof n!="symbol"?n+"":n,t),t),z0=(i,n,t)=>{if(!n.has(i))throw TypeError("Cannot "+t)};var ro=(i,n,t)=>{if(n.has(i))throw TypeError("Cannot add the same private member more than once");n instanceof WeakSet?n.add(i):n.set(i,t)};var os=(i,n,t)=>(z0(i,n,"access private method"),t);import{b as As}from"./paths.a_hAqh8P.js";import{S as Re,i as Le,a as ee,t as ae,g as At,c as St,b as Vt,d as li,m as Yt,e as qt}from"./index.DrFCWcHL.js";import{s as Se,e as en,i as Te,d as J,r as Zn,u as af,f as Ne,g as Ce,h as We,a4 as ys,x as et,y as nt,z as tt,R as lr,q as bc,l as Do,m as Io,n as _o,H as Qe,j as dn,G as _t,a as Ao,c as So,U as Q0,V as J0,a7 as wc,o as K0}from"./scheduler.bWWymoXQ.js";function lt(i){return(i==null?void 0:i.length)!==void 0?i:Array.from(i)}function of(i,n){const t={},s={},a={$$scope:1};let l=i.length;for(;l--;){const u=i[l],f=n[l];if(f){for(const d in u)d in f||(s[d]=1);for(const d in f)a[d]||(t[d]=f[d],a[d]=1);i[l]=f}else for(const d in u)a[d]=1}for(const u in s)u in t||(t[u]=void 0);return t}function wD(i){return typeof i=="object"&&i!==null?i:{}}function ho(...i){return"/"+i.flatMap(n=>n.split("/")).filter(n=>!!n).join("/")}function po(i){return i.startsWith("/")||i.startsWith("#")}function lf(i,n){return n.slug(i).replace(/--+/g,"-")}function so(i){let n,t;const s=i[5].default,a=Zn(s,i,i[4],null);let l=[{id:i[1]}],u={};for(let f=0;f<l.length;f+=1)u=af(u,l[f]);return{c(){n=Ne(`h${i[0].depth}`),a&&a.c(),this.h()},l(f){n=Ce(f,(`h${i[0].depth}`||"null").toUpperCase(),{id:!0});var d=We(n);a&&a.l(d),d.forEach(J),this.h()},h(){ys(`h${i[0].depth}`)(n,u)},m(f,d){Te(f,n,d),a&&a.m(n,null),t=!0},p(f,d){a&&a.p&&(!t||d&16)&&et(a,s,f,f[4],t?tt(s,f[4],d,null):nt(f[4]),null),ys(`h${f[0].depth}`)(n,u=of(l,[(!t||d&2)&&{id:f[1]}]))},i(f){t||(ee(a,f),t=!0)},o(f){ae(a,f),t=!1},d(f){f&&J(n),a&&a.d(f)}}}function X0(i){let n=`h${i[0].depth}`,t,s,a=`h${i[0].depth}`&&so(i);return{c(){a&&a.c(),t=en()},l(l){a&&a.l(l),t=en()},m(l,u){a&&a.m(l,u),Te(l,t,u),s=!0},p(l,[u]){`h${l[0].depth}`?n?Se(n,`h${l[0].depth}`)?(a.d(1),a=so(l),n=`h${l[0].depth}`,a.c(),a.m(t.parentNode,t)):a.p(l,u):(a=so(l),n=`h${l[0].depth}`,a.c(),a.m(t.parentNode,t)):n&&(a.d(1),a=null,n=`h${l[0].depth}`)},i(l){s||(ee(a,l),s=!0)},o(l){ae(a,l),s=!1},d(l){l&&J(t),a&&a.d(l)}}}function Z0(i,n,t){let{$$slots:s={},$$scope:a}=n,{token:l}=n,{options:u}=n;const f=void 0;let d;return i.$$set=y=>{"token"in y&&t(0,l=y.token),"options"in y&&t(2,u=y.options),"$$scope"in y&&t(4,a=y.$$scope)},i.$$.update=()=>{i.$$.dirty&5&&t(1,d=lf(l.text,u.slugger))},[l,d,u,f,a,s]}class eT extends Re{constructor(n){super(),Le(this,n,Z0,X0,Se,{token:0,options:2,renderers:3})}get renderers(){return this.$$.ctx[3]}}function nT(i){let n,t;const s=i[4].default,a=Zn(s,i,i[3],null);return{c(){n=Ne("blockquote"),a&&a.c()},l(l){n=Ce(l,"BLOCKQUOTE",{});var u=We(n);a&&a.l(u),u.forEach(J)},m(l,u){Te(l,n,u),a&&a.m(n,null),t=!0},p(l,[u]){a&&a.p&&(!t||u&8)&&et(a,s,l,l[3],t?tt(s,l[3],u,null):nt(l[3]),null)},i(l){t||(ee(a,l),t=!0)},o(l){ae(a,l),t=!1},d(l){l&&J(n),a&&a.d(l)}}}function tT(i,n,t){let{$$slots:s={},$$scope:a}=n;const l=void 0,u=void 0,f=void 0;return i.$$set=d=>{"$$scope"in d&&t(3,a=d.$$scope)},[l,u,f,a,s]}class iT extends Re{constructor(n){super(),Le(this,n,tT,nT,Se,{token:0,options:1,renderers:2})}get token(){return this.$$.ctx[0]}get options(){return this.$$.ctx[1]}get renderers(){return this.$$.ctx[2]}}function Ec(i,n,t){const s=i.slice();return s[3]=n[t],s}function Dc(i){let n,t,s=lt(i[0]),a=[];for(let u=0;u<s.length;u+=1)a[u]=Ic(Ec(i,s,u));const l=u=>ae(a[u],1,1,()=>{a[u]=null});return{c(){for(let u=0;u<a.length;u+=1)a[u].c();n=en()},l(u){for(let f=0;f<a.length;f+=1)a[f].l(u);n=en()},m(u,f){for(let d=0;d<a.length;d+=1)a[d]&&a[d].m(u,f);Te(u,n,f),t=!0},p(u,f){if(f&7){s=lt(u[0]);let d;for(d=0;d<s.length;d+=1){const y=Ec(u,s,d);a[d]?(a[d].p(y,f),ee(a[d],1)):(a[d]=Ic(y),a[d].c(),ee(a[d],1),a[d].m(n.parentNode,n))}for(At(),d=s.length;d<a.length;d+=1)l(d);St()}},i(u){if(!t){for(let f=0;f<s.length;f+=1)ee(a[f]);t=!0}},o(u){a=a.filter(Boolean);for(let f=0;f<a.length;f+=1)ae(a[f]);t=!1},d(u){u&&J(n),lr(a,u)}}}function Ic(i){let n,t;return n=new uf({props:{token:i[3],renderers:i[1],options:i[2]}}),{c(){Vt(n.$$.fragment)},l(s){li(n.$$.fragment,s)},m(s,a){Yt(n,s,a),t=!0},p(s,a){const l={};a&1&&(l.token=s[3]),a&2&&(l.renderers=s[1]),a&4&&(l.options=s[2]),n.$set(l)},i(s){t||(ee(n.$$.fragment,s),t=!0)},o(s){ae(n.$$.fragment,s),t=!1},d(s){qt(n,s)}}}function rT(i){let n,t,s=i[0]&&Dc(i);return{c(){s&&s.c(),n=en()},l(a){s&&s.l(a),n=en()},m(a,l){s&&s.m(a,l),Te(a,n,l),t=!0},p(a,[l]){a[0]?s?(s.p(a,l),l&1&&ee(s,1)):(s=Dc(a),s.c(),ee(s,1),s.m(n.parentNode,n)):s&&(At(),ae(s,1,1,()=>{s=null}),St())},i(a){t||(ee(s),t=!0)},o(a){ae(s),t=!1},d(a){a&&J(n),s&&s.d(a)}}}function sT(i,n,t){let{tokens:s}=n,{renderers:a}=n,{options:l}=n;return i.$$set=u=>{"tokens"in u&&t(0,s=u.tokens),"renderers"in u&&t(1,a=u.renderers),"options"in u&&t(2,l=u.options)},[s,a,l]}class Ss extends Re{constructor(n){super(),Le(this,n,sT,rT,Se,{tokens:0,renderers:1,options:2})}}function _c(i){let n,t,s;var a=i[1][i[0].type];function l(u,f){return{props:{token:u[0],options:u[2],renderers:u[1],$$slots:{default:[lT]},$$scope:{ctx:u}}}}return a&&(n=bc(a,l(i))),{c(){n&&Vt(n.$$.fragment),t=en()},l(u){n&&li(n.$$.fragment,u),t=en()},m(u,f){n&&Yt(n,u,f),Te(u,t,f),s=!0},p(u,f){if(f&3&&a!==(a=u[1][u[0].type])){if(n){At();const d=n;ae(d.$$.fragment,1,0,()=>{qt(d,1)}),St()}a?(n=bc(a,l(u)),Vt(n.$$.fragment),ee(n.$$.fragment,1),Yt(n,t.parentNode,t)):n=null}else if(a){const d={};f&1&&(d.token=u[0]),f&4&&(d.options=u[2]),f&2&&(d.renderers=u[1]),f&15&&(d.$$scope={dirty:f,ctx:u}),n.$set(d)}},i(u){s||(n&&ee(n.$$.fragment,u),s=!0)},o(u){n&&ae(n.$$.fragment,u),s=!1},d(u){u&&J(t),n&&qt(n,u)}}}function aT(i){let n=i[0].raw+"",t;return{c(){t=Do(n)},l(s){t=Io(s,n)},m(s,a){Te(s,t,a)},p(s,a){a&1&&n!==(n=s[0].raw+"")&&_o(t,n)},i:Qe,o:Qe,d(s){s&&J(t)}}}function oT(i){let n,t;return n=new Ss({props:{tokens:i[0].tokens,renderers:i[1],options:i[2]}}),{c(){Vt(n.$$.fragment)},l(s){li(n.$$.fragment,s)},m(s,a){Yt(n,s,a),t=!0},p(s,a){const l={};a&1&&(l.tokens=s[0].tokens),a&2&&(l.renderers=s[1]),a&4&&(l.options=s[2]),n.$set(l)},i(s){t||(ee(n.$$.fragment,s),t=!0)},o(s){ae(n.$$.fragment,s),t=!1},d(s){qt(n,s)}}}function lT(i){let n,t,s,a;const l=[oT,aT],u=[];function f(d,y){return"tokens"in d[0]&&d[0].tokens?0:1}return n=f(i),t=u[n]=l[n](i),{c(){t.c(),s=en()},l(d){t.l(d),s=en()},m(d,y){u[n].m(d,y),Te(d,s,y),a=!0},p(d,y){let v=n;n=f(d),n===v?u[n].p(d,y):(At(),ae(u[v],1,1,()=>{u[v]=null}),St(),t=u[n],t?t.p(d,y):(t=u[n]=l[n](d),t.c()),ee(t,1),t.m(s.parentNode,s))},i(d){a||(ee(t),a=!0)},o(d){ae(t),a=!1},d(d){d&&J(s),u[n].d(d)}}}function uT(i){let n,t,s=i[1][i[0].type]&&_c(i);return{c(){s&&s.c(),n=en()},l(a){s&&s.l(a),n=en()},m(a,l){s&&s.m(a,l),Te(a,n,l),t=!0},p(a,[l]){a[1][a[0].type]?s?(s.p(a,l),l&3&&ee(s,1)):(s=_c(a),s.c(),ee(s,1),s.m(n.parentNode,n)):s&&(At(),ae(s,1,1,()=>{s=null}),St())},i(a){t||(ee(s),t=!0)},o(a){ae(s),t=!1},d(a){a&&J(n),s&&s.d(a)}}}function cT(i,n,t){let{token:s}=n,{renderers:a}=n,{options:l}=n;return i.$$set=u=>{"token"in u&&t(0,s=u.token),"renderers"in u&&t(1,a=u.renderers),"options"in u&&t(2,l=u.options)},[s,a,l]}class uf extends Re{constructor(n){super(),Le(this,n,cT,uT,Se,{token:0,renderers:1,options:2})}}function Ac(i,n,t){const s=i.slice();return s[4]=n[t],s}function Sc(i){let n,t;return n=new uf({props:{token:{...i[4]},options:i[1],renderers:i[2]}}),{c(){Vt(n.$$.fragment)},l(s){li(n.$$.fragment,s)},m(s,a){Yt(n,s,a),t=!0},p(s,a){const l={};a&1&&(l.token={...s[4]}),a&2&&(l.options=s[1]),a&4&&(l.renderers=s[2]),n.$set(l)},i(s){t||(ee(n.$$.fragment,s),t=!0)},o(s){ae(n.$$.fragment,s),t=!1},d(s){qt(n,s)}}}function ao(i){let n,t,s,a=lt(i[0].items),l=[];for(let y=0;y<a.length;y+=1)l[y]=Sc(Ac(i,a,y));const u=y=>ae(l[y],1,1,()=>{l[y]=null});let f=[{start:t=i[0].start||1}],d={};for(let y=0;y<f.length;y+=1)d=af(d,f[y]);return{c(){n=Ne(i[3]);for(let y=0;y<l.length;y+=1)l[y].c();this.h()},l(y){n=Ce(y,(i[3]||"null").toUpperCase(),{start:!0});var v=We(n);for(let w=0;w<l.length;w+=1)l[w].l(v);v.forEach(J),this.h()},h(){ys(i[3])(n,d)},m(y,v){Te(y,n,v);for(let w=0;w<l.length;w+=1)l[w]&&l[w].m(n,null);s=!0},p(y,v){if(v&7){a=lt(y[0].items);let w;for(w=0;w<a.length;w+=1){const N=Ac(y,a,w);l[w]?(l[w].p(N,v),ee(l[w],1)):(l[w]=Sc(N),l[w].c(),ee(l[w],1),l[w].m(n,null))}for(At(),w=a.length;w<l.length;w+=1)u(w);St()}ys(y[3])(n,d=of(f,[(!s||v&1&&t!==(t=y[0].start||1))&&{start:t}]))},i(y){if(!s){for(let v=0;v<a.length;v+=1)ee(l[v]);s=!0}},o(y){l=l.filter(Boolean);for(let v=0;v<l.length;v+=1)ae(l[v]);s=!1},d(y){y&&J(n),lr(l,y)}}}function fT(i){let n=i[3],t,s=i[3]&&ao(i);return{c(){s&&s.c(),t=en()},l(a){s&&s.l(a),t=en()},m(a,l){s&&s.m(a,l),Te(a,t,l)},p(a,[l]){a[3]?n?Se(n,a[3])?(s.d(1),s=ao(a),n=a[3],s.c(),s.m(t.parentNode,t)):s.p(a,l):(s=ao(a),n=a[3],s.c(),s.m(t.parentNode,t)):n&&(s.d(1),s=null,n=a[3])},i:Qe,o(a){ae(s,a)},d(a){a&&J(t),s&&s.d(a)}}}function hT(i,n,t){let{token:s}=n,{options:a}=n,{renderers:l}=n,u;return i.$$set=f=>{"token"in f&&t(0,s=f.token),"options"in f&&t(1,a=f.options),"renderers"in f&&t(2,l=f.renderers)},i.$$.update=()=>{i.$$.dirty&1&&t(3,u=s.ordered?"ol":"ul")},[s,a,l,u]}class dT extends Re{constructor(n){super(),Le(this,n,hT,fT,Se,{token:0,options:1,renderers:2})}}function pT(i){let n,t;const s=i[4].default,a=Zn(s,i,i[3],null);return{c(){n=Ne("li"),a&&a.c()},l(l){n=Ce(l,"LI",{});var u=We(n);a&&a.l(u),u.forEach(J)},m(l,u){Te(l,n,u),a&&a.m(n,null),t=!0},p(l,[u]){a&&a.p&&(!t||u&8)&&et(a,s,l,l[3],t?tt(s,l[3],u,null):nt(l[3]),null)},i(l){t||(ee(a,l),t=!0)},o(l){ae(a,l),t=!1},d(l){l&&J(n),a&&a.d(l)}}}function gT(i,n,t){let{$$slots:s={},$$scope:a}=n;const l=void 0,u=void 0,f=void 0;return i.$$set=d=>{"$$scope"in d&&t(3,a=d.$$scope)},[l,u,f,a,s]}class mT extends Re{constructor(n){super(),Le(this,n,gT,pT,Se,{token:0,options:1,renderers:2})}get token(){return this.$$.ctx[0]}get options(){return this.$$.ctx[1]}get renderers(){return this.$$.ctx[2]}}function yT(i){let n;return{c(){n=Ne("br")},l(t){n=Ce(t,"BR",{})},m(t,s){Te(t,n,s)},p:Qe,i:Qe,o:Qe,d(t){t&&J(n)}}}function vT(i,n,t){return[void 0,void 0,void 0]}class TT extends Re{constructor(n){super(),Le(this,n,vT,yT,Se,{token:0,options:1,renderers:2})}get token(){return this.$$.ctx[0]}get options(){return this.$$.ctx[1]}get renderers(){return this.$$.ctx[2]}}function bT(i){let n,t,s=i[0].text+"",a,l;return{c(){n=Ne("pre"),t=Ne("code"),a=Do(s),this.h()},l(u){n=Ce(u,"PRE",{});var f=We(n);t=Ce(f,"CODE",{class:!0});var d=We(t);a=Io(d,s),d.forEach(J),f.forEach(J),this.h()},h(){dn(t,"class",l=`lang-${i[0].lang}`)},m(u,f){Te(u,n,f),_t(n,t),_t(t,a)},p(u,[f]){f&1&&s!==(s=u[0].text+"")&&_o(a,s),f&1&&l!==(l=`lang-${u[0].lang}`)&&dn(t,"class",l)},i:Qe,o:Qe,d(u){u&&J(n)}}}function wT(i,n,t){let{token:s}=n;const a=void 0,l=void 0;return i.$$set=u=>{"token"in u&&t(0,s=u.token)},[s,a,l]}class ET extends Re{constructor(n){super(),Le(this,n,wT,bT,Se,{token:0,options:1,renderers:2})}get options(){return this.$$.ctx[1]}get renderers(){return this.$$.ctx[2]}}function DT(i){let n,t=i[0].raw.slice(1,i[0].raw.length-1)+"",s;return{c(){n=Ne("code"),s=Do(t)},l(a){n=Ce(a,"CODE",{});var l=We(n);s=Io(l,t),l.forEach(J)},m(a,l){Te(a,n,l),_t(n,s)},p(a,[l]){l&1&&t!==(t=a[0].raw.slice(1,a[0].raw.length-1)+"")&&_o(s,t)},i:Qe,o:Qe,d(a){a&&J(n)}}}function IT(i,n,t){let{token:s}=n;const a=void 0,l=void 0;return i.$$set=u=>{"token"in u&&t(0,s=u.token)},[s,a,l]}class _T extends Re{constructor(n){super(),Le(this,n,IT,DT,Se,{token:0,options:1,renderers:2})}get options(){return this.$$.ctx[1]}get renderers(){return this.$$.ctx[2]}}function kc(i,n,t){const s=i.slice();return s[3]=n[t],s}function Fc(i,n,t){const s=i.slice();return s[6]=n[t],s}function Nc(i,n,t){const s=i.slice();return s[9]=n[t],s}function Cc(i){let n,t,s,a;return t=new Ss({props:{tokens:i[9].tokens,options:i[1],renderers:i[2]}}),{c(){n=Ne("th"),Vt(t.$$.fragment),s=Ao(),this.h()},l(l){n=Ce(l,"TH",{scope:!0});var u=We(n);li(t.$$.fragment,u),s=So(u),u.forEach(J),this.h()},h(){dn(n,"scope","col")},m(l,u){Te(l,n,u),Yt(t,n,null),_t(n,s),a=!0},p(l,u){const f={};u&1&&(f.tokens=l[9].tokens),u&2&&(f.options=l[1]),u&4&&(f.renderers=l[2]),t.$set(f)},i(l){a||(ee(t.$$.fragment,l),a=!0)},o(l){ae(t.$$.fragment,l),a=!1},d(l){l&&J(n),qt(t)}}}function xc(i){let n,t,s;return t=new Ss({props:{tokens:i[6].tokens,options:i[1],renderers:i[2]}}),{c(){n=Ne("td"),Vt(t.$$.fragment)},l(a){n=Ce(a,"TD",{});var l=We(n);li(t.$$.fragment,l),l.forEach(J)},m(a,l){Te(a,n,l),Yt(t,n,null),s=!0},p(a,l){const u={};l&1&&(u.tokens=a[6].tokens),l&2&&(u.options=a[1]),l&4&&(u.renderers=a[2]),t.$set(u)},i(a){s||(ee(t.$$.fragment,a),s=!0)},o(a){ae(t.$$.fragment,a),s=!1},d(a){a&&J(n),qt(t)}}}function Oc(i){let n,t,s,a=lt(i[3]),l=[];for(let f=0;f<a.length;f+=1)l[f]=xc(Fc(i,a,f));const u=f=>ae(l[f],1,1,()=>{l[f]=null});return{c(){n=Ne("tr");for(let f=0;f<l.length;f+=1)l[f].c();t=Ao()},l(f){n=Ce(f,"TR",{});var d=We(n);for(let y=0;y<l.length;y+=1)l[y].l(d);t=So(d),d.forEach(J)},m(f,d){Te(f,n,d);for(let y=0;y<l.length;y+=1)l[y]&&l[y].m(n,null);_t(n,t),s=!0},p(f,d){if(d&7){a=lt(f[3]);let y;for(y=0;y<a.length;y+=1){const v=Fc(f,a,y);l[y]?(l[y].p(v,d),ee(l[y],1)):(l[y]=xc(v),l[y].c(),ee(l[y],1),l[y].m(n,t))}for(At(),y=a.length;y<l.length;y+=1)u(y);St()}},i(f){if(!s){for(let d=0;d<a.length;d+=1)ee(l[d]);s=!0}},o(f){l=l.filter(Boolean);for(let d=0;d<l.length;d+=1)ae(l[d]);s=!1},d(f){f&&J(n),lr(l,f)}}}function AT(i){let n,t,s,a,l,u,f=lt(i[0].header),d=[];for(let C=0;C<f.length;C+=1)d[C]=Cc(Nc(i,f,C));const y=C=>ae(d[C],1,1,()=>{d[C]=null});let v=lt(i[0].rows),w=[];for(let C=0;C<v.length;C+=1)w[C]=Oc(kc(i,v,C));const N=C=>ae(w[C],1,1,()=>{w[C]=null});return{c(){n=Ne("table"),t=Ne("thead"),s=Ne("tr");for(let C=0;C<d.length;C+=1)d[C].c();a=Ao(),l=Ne("tbody");for(let C=0;C<w.length;C+=1)w[C].c()},l(C){n=Ce(C,"TABLE",{});var R=We(n);t=Ce(R,"THEAD",{});var L=We(t);s=Ce(L,"TR",{});var Q=We(s);for(let $e=0;$e<d.length;$e+=1)d[$e].l(Q);Q.forEach(J),L.forEach(J),a=So(R),l=Ce(R,"TBODY",{});var he=We(l);for(let $e=0;$e<w.length;$e+=1)w[$e].l(he);he.forEach(J),R.forEach(J)},m(C,R){Te(C,n,R),_t(n,t),_t(t,s);for(let L=0;L<d.length;L+=1)d[L]&&d[L].m(s,null);_t(n,a),_t(n,l);for(let L=0;L<w.length;L+=1)w[L]&&w[L].m(l,null);u=!0},p(C,[R]){if(R&7){f=lt(C[0].header);let L;for(L=0;L<f.length;L+=1){const Q=Nc(C,f,L);d[L]?(d[L].p(Q,R),ee(d[L],1)):(d[L]=Cc(Q),d[L].c(),ee(d[L],1),d[L].m(s,null))}for(At(),L=f.length;L<d.length;L+=1)y(L);St()}if(R&7){v=lt(C[0].rows);let L;for(L=0;L<v.length;L+=1){const Q=kc(C,v,L);w[L]?(w[L].p(Q,R),ee(w[L],1)):(w[L]=Oc(Q),w[L].c(),ee(w[L],1),w[L].m(l,null))}for(At(),L=v.length;L<w.length;L+=1)N(L);St()}},i(C){if(!u){for(let R=0;R<f.length;R+=1)ee(d[R]);for(let R=0;R<v.length;R+=1)ee(w[R]);u=!0}},o(C){d=d.filter(Boolean);for(let R=0;R<d.length;R+=1)ae(d[R]);w=w.filter(Boolean);for(let R=0;R<w.length;R+=1)ae(w[R]);u=!1},d(C){C&&J(n),lr(d,C),lr(w,C)}}}function ST(i,n,t){let{token:s}=n,{options:a}=n,{renderers:l}=n;return i.$$set=u=>{"token"in u&&t(0,s=u.token),"options"in u&&t(1,a=u.options),"renderers"in u&&t(2,l=u.renderers)},[s,a,l]}class kT extends Re{constructor(n){super(),Le(this,n,ST,AT,Se,{token:0,options:1,renderers:2})}}function FT(i){let n,t=i[0].text+"",s;return{c(){n=new Q0(!1),s=en(),this.h()},l(a){n=J0(a,!1),s=en(),this.h()},h(){n.a=s},m(a,l){n.m(t,a,l),Te(a,s,l)},p(a,[l]){l&1&&t!==(t=a[0].text+"")&&n.p(t)},i:Qe,o:Qe,d(a){a&&(J(s),n.d())}}}function NT(i,n,t){let{token:s}=n;const a=void 0,l=void 0;return i.$$set=u=>{"token"in u&&t(0,s=u.token)},[s,a,l]}class CT extends Re{constructor(n){super(),Le(this,n,NT,FT,Se,{token:0,options:1,renderers:2})}get options(){return this.$$.ctx[1]}get renderers(){return this.$$.ctx[2]}}function xT(i){let n,t;const s=i[4].default,a=Zn(s,i,i[3],null);return{c(){n=Ne("p"),a&&a.c()},l(l){n=Ce(l,"P",{});var u=We(n);a&&a.l(u),u.forEach(J)},m(l,u){Te(l,n,u),a&&a.m(n,null),t=!0},p(l,[u]){a&&a.p&&(!t||u&8)&&et(a,s,l,l[3],t?tt(s,l[3],u,null):nt(l[3]),null)},i(l){t||(ee(a,l),t=!0)},o(l){ae(a,l),t=!1},d(l){l&&J(n),a&&a.d(l)}}}function OT(i,n,t){let{$$slots:s={},$$scope:a}=n;const l=void 0,u=void 0,f=void 0;return i.$$set=d=>{"$$scope"in d&&t(3,a=d.$$scope)},[l,u,f,a,s]}class RT extends Re{constructor(n){super(),Le(this,n,OT,xT,Se,{token:0,options:1,renderers:2})}get token(){return this.$$.ctx[0]}get options(){return this.$$.ctx[1]}get renderers(){return this.$$.ctx[2]}}function LT(i){let n,t,s,a;const l=i[4].default,u=Zn(l,i,i[3],null);return{c(){n=Ne("a"),u&&u.c(),this.h()},l(f){n=Ce(f,"A",{href:!0,title:!0});var d=We(n);u&&u.l(d),d.forEach(J),this.h()},h(){dn(n,"href",t=po(i[0].href)?ho(i[1].baseUrl,i[0].href):i[0].href),dn(n,"title",s=i[0].title)},m(f,d){Te(f,n,d),u&&u.m(n,null),a=!0},p(f,[d]){u&&u.p&&(!a||d&8)&&et(u,l,f,f[3],a?tt(l,f[3],d,null):nt(f[3]),null),(!a||d&3&&t!==(t=po(f[0].href)?ho(f[1].baseUrl,f[0].href):f[0].href))&&dn(n,"href",t),(!a||d&1&&s!==(s=f[0].title))&&dn(n,"title",s)},i(f){a||(ee(u,f),a=!0)},o(f){ae(u,f),a=!1},d(f){f&&J(n),u&&u.d(f)}}}function PT(i,n,t){let{$$slots:s={},$$scope:a}=n,{token:l}=n,{options:u}=n;const f=void 0;return i.$$set=d=>{"token"in d&&t(0,l=d.token),"options"in d&&t(1,u=d.options),"$$scope"in d&&t(3,a=d.$$scope)},[l,u,f,a,s]}class BT extends Re{constructor(n){super(),Le(this,n,PT,LT,Se,{token:0,options:1,renderers:2})}get renderers(){return this.$$.ctx[2]}}function UT(i){let n;const t=i[4].default,s=Zn(t,i,i[3],null);return{c(){s&&s.c()},l(a){s&&s.l(a)},m(a,l){s&&s.m(a,l),n=!0},p(a,[l]){s&&s.p&&(!n||l&8)&&et(s,t,a,a[3],n?tt(t,a[3],l,null):nt(a[3]),null)},i(a){n||(ee(s,a),n=!0)},o(a){ae(s,a),n=!1},d(a){s&&s.d(a)}}}function MT(i,n,t){let{$$slots:s={},$$scope:a}=n;const l=void 0,u=void 0,f=void 0;return i.$$set=d=>{"$$scope"in d&&t(3,a=d.$$scope)},[l,u,f,a,s]}class $T extends Re{constructor(n){super(),Le(this,n,MT,UT,Se,{token:0,options:1,renderers:2})}get token(){return this.$$.ctx[0]}get options(){return this.$$.ctx[1]}get renderers(){return this.$$.ctx[2]}}function GT(i){let n,t;const s=i[4].default,a=Zn(s,i,i[3],null);return{c(){n=Ne("dfn"),a&&a.c()},l(l){n=Ce(l,"DFN",{});var u=We(n);a&&a.l(u),u.forEach(J)},m(l,u){Te(l,n,u),a&&a.m(n,null),t=!0},p(l,[u]){a&&a.p&&(!t||u&8)&&et(a,s,l,l[3],t?tt(s,l[3],u,null):nt(l[3]),null)},i(l){t||(ee(a,l),t=!0)},o(l){ae(a,l),t=!1},d(l){l&&J(n),a&&a.d(l)}}}function WT(i,n,t){let{$$slots:s={},$$scope:a}=n;const l=void 0,u=void 0,f=void 0;return i.$$set=d=>{"$$scope"in d&&t(3,a=d.$$scope)},[l,u,f,a,s]}class VT extends Re{constructor(n){super(),Le(this,n,WT,GT,Se,{token:0,options:1,renderers:2})}get token(){return this.$$.ctx[0]}get options(){return this.$$.ctx[1]}get renderers(){return this.$$.ctx[2]}}function YT(i){let n,t;const s=i[4].default,a=Zn(s,i,i[3],null);return{c(){n=Ne("del"),a&&a.c()},l(l){n=Ce(l,"DEL",{});var u=We(n);a&&a.l(u),u.forEach(J)},m(l,u){Te(l,n,u),a&&a.m(n,null),t=!0},p(l,[u]){a&&a.p&&(!t||u&8)&&et(a,s,l,l[3],t?tt(s,l[3],u,null):nt(l[3]),null)},i(l){t||(ee(a,l),t=!0)},o(l){ae(a,l),t=!1},d(l){l&&J(n),a&&a.d(l)}}}function qT(i,n,t){let{$$slots:s={},$$scope:a}=n;const l=void 0,u=void 0,f=void 0;return i.$$set=d=>{"$$scope"in d&&t(3,a=d.$$scope)},[l,u,f,a,s]}class HT extends Re{constructor(n){super(),Le(this,n,qT,YT,Se,{token:0,options:1,renderers:2})}get token(){return this.$$.ctx[0]}get options(){return this.$$.ctx[1]}get renderers(){return this.$$.ctx[2]}}function jT(i){let n,t;const s=i[4].default,a=Zn(s,i,i[3],null);return{c(){n=Ne("em"),a&&a.c()},l(l){n=Ce(l,"EM",{});var u=We(n);a&&a.l(u),u.forEach(J)},m(l,u){Te(l,n,u),a&&a.m(n,null),t=!0},p(l,[u]){a&&a.p&&(!t||u&8)&&et(a,s,l,l[3],t?tt(s,l[3],u,null):nt(l[3]),null)},i(l){t||(ee(a,l),t=!0)},o(l){ae(a,l),t=!1},d(l){l&&J(n),a&&a.d(l)}}}function zT(i,n,t){let{$$slots:s={},$$scope:a}=n;const l=void 0,u=void 0,f=void 0;return i.$$set=d=>{"$$scope"in d&&t(3,a=d.$$scope)},[l,u,f,a,s]}class QT extends Re{constructor(n){super(),Le(this,n,zT,jT,Se,{token:0,options:1,renderers:2})}get token(){return this.$$.ctx[0]}get options(){return this.$$.ctx[1]}get renderers(){return this.$$.ctx[2]}}function JT(i){let n;return{c(){n=Ne("hr")},l(t){n=Ce(t,"HR",{})},m(t,s){Te(t,n,s)},p:Qe,i:Qe,o:Qe,d(t){t&&J(n)}}}function KT(i,n,t){return[void 0,void 0,void 0]}class XT extends Re{constructor(n){super(),Le(this,n,KT,JT,Se,{token:0,options:1,renderers:2})}get token(){return this.$$.ctx[0]}get options(){return this.$$.ctx[1]}get renderers(){return this.$$.ctx[2]}}function ZT(i){let n,t;const s=i[4].default,a=Zn(s,i,i[3],null);return{c(){n=Ne("strong"),a&&a.c()},l(l){n=Ce(l,"STRONG",{});var u=We(n);a&&a.l(u),u.forEach(J)},m(l,u){Te(l,n,u),a&&a.m(n,null),t=!0},p(l,[u]){a&&a.p&&(!t||u&8)&&et(a,s,l,l[3],t?tt(s,l[3],u,null):nt(l[3]),null)},i(l){t||(ee(a,l),t=!0)},o(l){ae(a,l),t=!1},d(l){l&&J(n),a&&a.d(l)}}}function eb(i,n,t){let{$$slots:s={},$$scope:a}=n;const l=void 0,u=void 0,f=void 0;return i.$$set=d=>{"$$scope"in d&&t(3,a=d.$$scope)},[l,u,f,a,s]}class nb extends Re{constructor(n){super(),Le(this,n,eb,ZT,Se,{token:0,options:1,renderers:2})}get token(){return this.$$.ctx[0]}get options(){return this.$$.ctx[1]}get renderers(){return this.$$.ctx[2]}}function tb(i){let n,t,s,a;return{c(){n=Ne("img"),this.h()},l(l){n=Ce(l,"IMG",{src:!0,title:!0,alt:!0,class:!0}),this.h()},h(){wc(n.src,t=i[0].href)||dn(n,"src",t),dn(n,"title",s=i[0].title),dn(n,"alt",a=i[0].text),dn(n,"class","markdown-image svelte-z38cge")},m(l,u){Te(l,n,u)},p(l,[u]){u&1&&!wc(n.src,t=l[0].href)&&dn(n,"src",t),u&1&&s!==(s=l[0].title)&&dn(n,"title",s),u&1&&a!==(a=l[0].text)&&dn(n,"alt",a)},i:Qe,o:Qe,d(l){l&&J(n)}}}function ib(i,n,t){let{token:s}=n;const a=void 0,l=void 0;return i.$$set=u=>{"token"in u&&t(0,s=u.token)},[s,a,l]}class rb extends Re{constructor(n){super(),Le(this,n,ib,tb,Se,{token:0,options:1,renderers:2})}get options(){return this.$$.ctx[1]}get renderers(){return this.$$.ctx[2]}}function sb(i){let n;const t=i[4].default,s=Zn(t,i,i[3],null);return{c(){s&&s.c()},l(a){s&&s.l(a)},m(a,l){s&&s.m(a,l),n=!0},p(a,[l]){s&&s.p&&(!n||l&8)&&et(s,t,a,a[3],n?tt(t,a[3],l,null):nt(a[3]),null)},i(a){n||(ee(s,a),n=!0)},o(a){ae(s,a),n=!1},d(a){s&&s.d(a)}}}function ab(i,n,t){let{$$slots:s={},$$scope:a}=n;const l=void 0,u=void 0,f=void 0;return i.$$set=d=>{"$$scope"in d&&t(3,a=d.$$scope)},[l,u,f,a,s]}class Rc extends Re{constructor(n){super(),Le(this,n,ab,sb,Se,{token:0,options:1,renderers:2})}get token(){return this.$$.ctx[0]}get options(){return this.$$.ctx[1]}get renderers(){return this.$$.ctx[2]}}function ko(){return{async:!1,breaks:!1,extensions:null,gfm:!0,hooks:null,pedantic:!1,renderer:null,silent:!1,tokenizer:null,walkTokens:null}}let ui=ko();function cf(i){ui=i}const ff=/[&<>"']/,ob=new RegExp(ff.source,"g"),hf=/[<>"']|&(?!(#\d{1,7}|#[Xx][a-fA-F0-9]{1,6}|\w+);)/,lb=new RegExp(hf.source,"g"),ub={"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;","'":"&#39;"},Lc=i=>ub[i];function In(i,n){if(n){if(ff.test(i))return i.replace(ob,Lc)}else if(hf.test(i))return i.replace(lb,Lc);return i}const cb=/&(#(?:\d+)|(?:#x[0-9A-Fa-f]+)|(?:\w+));?/ig;function fb(i){return i.replace(cb,(n,t)=>(t=t.toLowerCase(),t==="colon"?":":t.charAt(0)==="#"?t.charAt(1)==="x"?String.fromCharCode(parseInt(t.substring(2),16)):String.fromCharCode(+t.substring(1)):""))}const hb=/(^|[^\[])\^/g;function ve(i,n){let t=typeof i=="string"?i:i.source;n=n||"";const s={replace:(a,l)=>{let u=typeof l=="string"?l:l.source;return u=u.replace(hb,"$1"),t=t.replace(a,u),s},getRegex:()=>new RegExp(t,n)};return s}function Pc(i){try{i=encodeURI(i).replace(/%25/g,"%")}catch{return null}return i}const sr={exec:()=>null};function Bc(i,n){const t=i.replace(/\|/g,(l,u,f)=>{let d=!1,y=u;for(;--y>=0&&f[y]==="\\";)d=!d;return d?"|":" |"}),s=t.split(/ \|/);let a=0;if(s[0].trim()||s.shift(),s.length>0&&!s[s.length-1].trim()&&s.pop(),n)if(s.length>n)s.splice(n);else for(;s.length<n;)s.push("");for(;a<s.length;a++)s[a]=s[a].trim().replace(/\\\|/g,"|");return s}function ls(i,n,t){const s=i.length;if(s===0)return"";let a=0;for(;a<s;){const l=i.charAt(s-a-1);if(l===n&&!t)a++;else if(l!==n&&t)a++;else break}return i.slice(0,s-a)}function db(i,n){if(i.indexOf(n[1])===-1)return-1;let t=0;for(let s=0;s<i.length;s++)if(i[s]==="\\")s++;else if(i[s]===n[0])t++;else if(i[s]===n[1]&&(t--,t<0))return s;return-1}function Uc(i,n,t,s){const a=n.href,l=n.title?In(n.title):null,u=i[1].replace(/\\([\[\]])/g,"$1");if(i[0].charAt(0)!=="!"){s.state.inLink=!0;const f={type:"link",raw:t,href:a,title:l,text:u,tokens:s.inlineTokens(u)};return s.state.inLink=!1,f}return{type:"image",raw:t,href:a,title:l,text:In(u)}}function pb(i,n){const t=i.match(/^(\s+)(?:```)/);if(t===null)return n;const s=t[1];return n.split(`
`).map(a=>{const l=a.match(/^\s+/);if(l===null)return a;const[u]=l;return u.length>=s.length?a.slice(s.length):a}).join(`
`)}class vs{constructor(n){Ie(this,"options");Ie(this,"rules");Ie(this,"lexer");this.options=n||ui}space(n){const t=this.rules.block.newline.exec(n);if(t&&t[0].length>0)return{type:"space",raw:t[0]}}code(n){const t=this.rules.block.code.exec(n);if(t){const s=t[0].replace(/^ {1,4}/gm,"");return{type:"code",raw:t[0],codeBlockStyle:"indented",text:this.options.pedantic?s:ls(s,`
`)}}}fences(n){const t=this.rules.block.fences.exec(n);if(t){const s=t[0],a=pb(s,t[3]||"");return{type:"code",raw:s,lang:t[2]?t[2].trim().replace(this.rules.inline.anyPunctuation,"$1"):t[2],text:a}}}heading(n){const t=this.rules.block.heading.exec(n);if(t){let s=t[2].trim();if(/#$/.test(s)){const a=ls(s,"#");(this.options.pedantic||!a||/ $/.test(a))&&(s=a.trim())}return{type:"heading",raw:t[0],depth:t[1].length,text:s,tokens:this.lexer.inline(s)}}}hr(n){const t=this.rules.block.hr.exec(n);if(t)return{type:"hr",raw:t[0]}}blockquote(n){const t=this.rules.block.blockquote.exec(n);if(t){const s=ls(t[0].replace(/^ *>[ \t]?/gm,""),`
`),a=this.lexer.state.top;this.lexer.state.top=!0;const l=this.lexer.blockTokens(s);return this.lexer.state.top=a,{type:"blockquote",raw:t[0],tokens:l,text:s}}}list(n){let t=this.rules.block.list.exec(n);if(t){let s=t[1].trim();const a=s.length>1,l={type:"list",raw:"",ordered:a,start:a?+s.slice(0,-1):"",loose:!1,items:[]};s=a?`\\d{1,9}\\${s.slice(-1)}`:`\\${s}`,this.options.pedantic&&(s=a?s:"[*+-]");const u=new RegExp(`^( {0,3}${s})((?:[	 ][^\\n]*)?(?:\\n|$))`);let f="",d="",y=!1;for(;n;){let v=!1;if(!(t=u.exec(n))||this.rules.block.hr.test(n))break;f=t[0],n=n.substring(f.length);let w=t[2].split(`
`,1)[0].replace(/^\t+/,he=>" ".repeat(3*he.length)),N=n.split(`
`,1)[0],C=0;this.options.pedantic?(C=2,d=w.trimStart()):(C=t[2].search(/[^ ]/),C=C>4?1:C,d=w.slice(C),C+=t[1].length);let R=!1;if(!w&&/^ *$/.test(N)&&(f+=N+`
`,n=n.substring(N.length+1),v=!0),!v){const he=new RegExp(`^ {0,${Math.min(3,C-1)}}(?:[*+-]|\\d{1,9}[.)])((?:[ 	][^\\n]*)?(?:\\n|$))`),$e=new RegExp(`^ {0,${Math.min(3,C-1)}}((?:- *){3,}|(?:_ *){3,}|(?:\\* *){3,})(?:\\n+|$)`),Ee=new RegExp(`^ {0,${Math.min(3,C-1)}}(?:\`\`\`|~~~)`),ke=new RegExp(`^ {0,${Math.min(3,C-1)}}#`);for(;n;){const xe=n.split(`
`,1)[0];if(N=xe,this.options.pedantic&&(N=N.replace(/^ {1,4}(?=( {4})*[^ ])/g,"  ")),Ee.test(N)||ke.test(N)||he.test(N)||$e.test(n))break;if(N.search(/[^ ]/)>=C||!N.trim())d+=`
`+N.slice(C);else{if(R||w.search(/[^ ]/)>=4||Ee.test(w)||ke.test(w)||$e.test(w))break;d+=`
`+N}!R&&!N.trim()&&(R=!0),f+=xe+`
`,n=n.substring(xe.length+1),w=N.slice(C)}}l.loose||(y?l.loose=!0:/\n *\n *$/.test(f)&&(y=!0));let L=null,Q;this.options.gfm&&(L=/^\[[ xX]\] /.exec(d),L&&(Q=L[0]!=="[ ] ",d=d.replace(/^\[[ xX]\] +/,""))),l.items.push({type:"list_item",raw:f,task:!!L,checked:Q,loose:!1,text:d,tokens:[]}),l.raw+=f}l.items[l.items.length-1].raw=f.trimEnd(),l.items[l.items.length-1].text=d.trimEnd(),l.raw=l.raw.trimEnd();for(let v=0;v<l.items.length;v++)if(this.lexer.state.top=!1,l.items[v].tokens=this.lexer.blockTokens(l.items[v].text,[]),!l.loose){const w=l.items[v].tokens.filter(C=>C.type==="space"),N=w.length>0&&w.some(C=>/\n.*\n/.test(C.raw));l.loose=N}if(l.loose)for(let v=0;v<l.items.length;v++)l.items[v].loose=!0;return l}}html(n){const t=this.rules.block.html.exec(n);if(t)return{type:"html",block:!0,raw:t[0],pre:t[1]==="pre"||t[1]==="script"||t[1]==="style",text:t[0]}}def(n){const t=this.rules.block.def.exec(n);if(t){const s=t[1].toLowerCase().replace(/\s+/g," "),a=t[2]?t[2].replace(/^<(.*)>$/,"$1").replace(this.rules.inline.anyPunctuation,"$1"):"",l=t[3]?t[3].substring(1,t[3].length-1).replace(this.rules.inline.anyPunctuation,"$1"):t[3];return{type:"def",tag:s,raw:t[0],href:a,title:l}}}table(n){const t=this.rules.block.table.exec(n);if(!t||!/[:|]/.test(t[2]))return;const s=Bc(t[1]),a=t[2].replace(/^\||\| *$/g,"").split("|"),l=t[3]&&t[3].trim()?t[3].replace(/\n[ \t]*$/,"").split(`
`):[],u={type:"table",raw:t[0],header:[],align:[],rows:[]};if(s.length===a.length){for(const f of a)/^ *-+: *$/.test(f)?u.align.push("right"):/^ *:-+: *$/.test(f)?u.align.push("center"):/^ *:-+ *$/.test(f)?u.align.push("left"):u.align.push(null);for(const f of s)u.header.push({text:f,tokens:this.lexer.inline(f)});for(const f of l)u.rows.push(Bc(f,u.header.length).map(d=>({text:d,tokens:this.lexer.inline(d)})));return u}}lheading(n){const t=this.rules.block.lheading.exec(n);if(t)return{type:"heading",raw:t[0],depth:t[2].charAt(0)==="="?1:2,text:t[1],tokens:this.lexer.inline(t[1])}}paragraph(n){const t=this.rules.block.paragraph.exec(n);if(t){const s=t[1].charAt(t[1].length-1)===`
`?t[1].slice(0,-1):t[1];return{type:"paragraph",raw:t[0],text:s,tokens:this.lexer.inline(s)}}}text(n){const t=this.rules.block.text.exec(n);if(t)return{type:"text",raw:t[0],text:t[0],tokens:this.lexer.inline(t[0])}}escape(n){const t=this.rules.inline.escape.exec(n);if(t)return{type:"escape",raw:t[0],text:In(t[1])}}tag(n){const t=this.rules.inline.tag.exec(n);if(t)return!this.lexer.state.inLink&&/^<a /i.test(t[0])?this.lexer.state.inLink=!0:this.lexer.state.inLink&&/^<\/a>/i.test(t[0])&&(this.lexer.state.inLink=!1),!this.lexer.state.inRawBlock&&/^<(pre|code|kbd|script)(\s|>)/i.test(t[0])?this.lexer.state.inRawBlock=!0:this.lexer.state.inRawBlock&&/^<\/(pre|code|kbd|script)(\s|>)/i.test(t[0])&&(this.lexer.state.inRawBlock=!1),{type:"html",raw:t[0],inLink:this.lexer.state.inLink,inRawBlock:this.lexer.state.inRawBlock,block:!1,text:t[0]}}link(n){const t=this.rules.inline.link.exec(n);if(t){const s=t[2].trim();if(!this.options.pedantic&&/^</.test(s)){if(!/>$/.test(s))return;const u=ls(s.slice(0,-1),"\\");if((s.length-u.length)%2===0)return}else{const u=db(t[2],"()");if(u>-1){const d=(t[0].indexOf("!")===0?5:4)+t[1].length+u;t[2]=t[2].substring(0,u),t[0]=t[0].substring(0,d).trim(),t[3]=""}}let a=t[2],l="";if(this.options.pedantic){const u=/^([^'"]*[^\s])\s+(['"])(.*)\2/.exec(a);u&&(a=u[1],l=u[3])}else l=t[3]?t[3].slice(1,-1):"";return a=a.trim(),/^</.test(a)&&(this.options.pedantic&&!/>$/.test(s)?a=a.slice(1):a=a.slice(1,-1)),Uc(t,{href:a&&a.replace(this.rules.inline.anyPunctuation,"$1"),title:l&&l.replace(this.rules.inline.anyPunctuation,"$1")},t[0],this.lexer)}}reflink(n,t){let s;if((s=this.rules.inline.reflink.exec(n))||(s=this.rules.inline.nolink.exec(n))){const a=(s[2]||s[1]).replace(/\s+/g," "),l=t[a.toLowerCase()];if(!l){const u=s[0].charAt(0);return{type:"text",raw:u,text:u}}return Uc(s,l,s[0],this.lexer)}}emStrong(n,t,s=""){let a=this.rules.inline.emStrongLDelim.exec(n);if(!a||a[3]&&s.match(/[\p{L}\p{N}]/u))return;if(!(a[1]||a[2]||"")||!s||this.rules.inline.punctuation.exec(s)){const u=[...a[0]].length-1;let f,d,y=u,v=0;const w=a[0][0]==="*"?this.rules.inline.emStrongRDelimAst:this.rules.inline.emStrongRDelimUnd;for(w.lastIndex=0,t=t.slice(-1*n.length+u);(a=w.exec(t))!=null;){if(f=a[1]||a[2]||a[3]||a[4]||a[5]||a[6],!f)continue;if(d=[...f].length,a[3]||a[4]){y+=d;continue}else if((a[5]||a[6])&&u%3&&!((u+d)%3)){v+=d;continue}if(y-=d,y>0)continue;d=Math.min(d,d+y+v);const N=[...a[0]][0].length,C=n.slice(0,u+a.index+N+d);if(Math.min(u,d)%2){const L=C.slice(1,-1);return{type:"em",raw:C,text:L,tokens:this.lexer.inlineTokens(L)}}const R=C.slice(2,-2);return{type:"strong",raw:C,text:R,tokens:this.lexer.inlineTokens(R)}}}}codespan(n){const t=this.rules.inline.code.exec(n);if(t){let s=t[2].replace(/\n/g," ");const a=/[^ ]/.test(s),l=/^ /.test(s)&&/ $/.test(s);return a&&l&&(s=s.substring(1,s.length-1)),s=In(s,!0),{type:"codespan",raw:t[0],text:s}}}br(n){const t=this.rules.inline.br.exec(n);if(t)return{type:"br",raw:t[0]}}del(n){const t=this.rules.inline.del.exec(n);if(t)return{type:"del",raw:t[0],text:t[2],tokens:this.lexer.inlineTokens(t[2])}}autolink(n){const t=this.rules.inline.autolink.exec(n);if(t){let s,a;return t[2]==="@"?(s=In(t[1]),a="mailto:"+s):(s=In(t[1]),a=s),{type:"link",raw:t[0],text:s,href:a,tokens:[{type:"text",raw:s,text:s}]}}}url(n){var s;let t;if(t=this.rules.inline.url.exec(n)){let a,l;if(t[2]==="@")a=In(t[0]),l="mailto:"+a;else{let u;do u=t[0],t[0]=((s=this.rules.inline._backpedal.exec(t[0]))==null?void 0:s[0])??"";while(u!==t[0]);a=In(t[0]),t[1]==="www."?l="http://"+t[0]:l=t[0]}return{type:"link",raw:t[0],text:a,href:l,tokens:[{type:"text",raw:a,text:a}]}}}inlineText(n){const t=this.rules.inline.text.exec(n);if(t){let s;return this.lexer.state.inRawBlock?s=t[0]:s=In(t[0]),{type:"text",raw:t[0],text:s}}}}const gb=/^(?: *(?:\n|$))+/,mb=/^( {4}[^\n]+(?:\n(?: *(?:\n|$))*)?)+/,yb=/^ {0,3}(`{3,}(?=[^`\n]*(?:\n|$))|~{3,})([^\n]*)(?:\n|$)(?:|([\s\S]*?)(?:\n|$))(?: {0,3}\1[~`]* *(?=\n|$)|$)/,fr=/^ {0,3}((?:-[\t ]*){3,}|(?:_[ \t]*){3,}|(?:\*[ \t]*){3,})(?:\n+|$)/,vb=/^ {0,3}(#{1,6})(?=\s|$)(.*)(?:\n+|$)/,df=/(?:[*+-]|\d{1,9}[.)])/,pf=ve(/^(?!bull )((?:.|\n(?!\s*?\n|bull ))+?)\n {0,3}(=+|-+) *(?:\n+|$)/).replace(/bull/g,df).getRegex(),Fo=/^([^\n]+(?:\n(?!hr|heading|lheading|blockquote|fences|list|html|table| +\n)[^\n]+)*)/,Tb=/^[^\n]+/,No=/(?!\s*\])(?:\\.|[^\[\]\\])+/,bb=ve(/^ {0,3}\[(label)\]: *(?:\n *)?([^<\s][^\s]*|<.*?>)(?:(?: +(?:\n *)?| *\n *)(title))? *(?:\n+|$)/).replace("label",No).replace("title",/(?:"(?:\\"?|[^"\\])*"|'[^'\n]*(?:\n[^'\n]+)*\n?'|\([^()]*\))/).getRegex(),wb=ve(/^( {0,3}bull)([ \t][^\n]+?)?(?:\n|$)/).replace(/bull/g,df).getRegex(),ks="address|article|aside|base|basefont|blockquote|body|caption|center|col|colgroup|dd|details|dialog|dir|div|dl|dt|fieldset|figcaption|figure|footer|form|frame|frameset|h[1-6]|head|header|hr|html|iframe|legend|li|link|main|menu|menuitem|meta|nav|noframes|ol|optgroup|option|p|param|section|source|summary|table|tbody|td|tfoot|th|thead|title|tr|track|ul",Co=/<!--(?!-?>)[\s\S]*?(?:-->|$)/,Eb=ve("^ {0,3}(?:<(script|pre|style|textarea)[\\s>][\\s\\S]*?(?:</\\1>[^\\n]*\\n+|$)|comment[^\\n]*(\\n+|$)|<\\?[\\s\\S]*?(?:\\?>\\n*|$)|<![A-Z][\\s\\S]*?(?:>\\n*|$)|<!\\[CDATA\\[[\\s\\S]*?(?:\\]\\]>\\n*|$)|</?(tag)(?: +|\\n|/?>)[\\s\\S]*?(?:(?:\\n *)+\\n|$)|<(?!script|pre|style|textarea)([a-z][\\w-]*)(?:attribute)*? */?>(?=[ \\t]*(?:\\n|$))[\\s\\S]*?(?:(?:\\n *)+\\n|$)|</(?!script|pre|style|textarea)[a-z][\\w-]*\\s*>(?=[ \\t]*(?:\\n|$))[\\s\\S]*?(?:(?:\\n *)+\\n|$))","i").replace("comment",Co).replace("tag",ks).replace("attribute",/ +[a-zA-Z:_][\w.:-]*(?: *= *"[^"\n]*"| *= *'[^'\n]*'| *= *[^\s"'=<>`]+)?/).getRegex(),gf=ve(Fo).replace("hr",fr).replace("heading"," {0,3}#{1,6}(?:\\s|$)").replace("|lheading","").replace("|table","").replace("blockquote"," {0,3}>").replace("fences"," {0,3}(?:`{3,}(?=[^`\\n]*\\n)|~{3,})[^\\n]*\\n").replace("list"," {0,3}(?:[*+-]|1[.)]) ").replace("html","</?(?:tag)(?: +|\\n|/?>)|<(?:script|pre|style|textarea|!--)").replace("tag",ks).getRegex(),Db=ve(/^( {0,3}> ?(paragraph|[^\n]*)(?:\n|$))+/).replace("paragraph",gf).getRegex(),xo={blockquote:Db,code:mb,def:bb,fences:yb,heading:vb,hr:fr,html:Eb,lheading:pf,list:wb,newline:gb,paragraph:gf,table:sr,text:Tb},Mc=ve("^ *([^\\n ].*)\\n {0,3}((?:\\| *)?:?-+:? *(?:\\| *:?-+:? *)*(?:\\| *)?)(?:\\n((?:(?! *\\n|hr|heading|blockquote|code|fences|list|html).*(?:\\n|$))*)\\n*|$)").replace("hr",fr).replace("heading"," {0,3}#{1,6}(?:\\s|$)").replace("blockquote"," {0,3}>").replace("code"," {4}[^\\n]").replace("fences"," {0,3}(?:`{3,}(?=[^`\\n]*\\n)|~{3,})[^\\n]*\\n").replace("list"," {0,3}(?:[*+-]|1[.)]) ").replace("html","</?(?:tag)(?: +|\\n|/?>)|<(?:script|pre|style|textarea|!--)").replace("tag",ks).getRegex(),Ib={...xo,table:Mc,paragraph:ve(Fo).replace("hr",fr).replace("heading"," {0,3}#{1,6}(?:\\s|$)").replace("|lheading","").replace("table",Mc).replace("blockquote"," {0,3}>").replace("fences"," {0,3}(?:`{3,}(?=[^`\\n]*\\n)|~{3,})[^\\n]*\\n").replace("list"," {0,3}(?:[*+-]|1[.)]) ").replace("html","</?(?:tag)(?: +|\\n|/?>)|<(?:script|pre|style|textarea|!--)").replace("tag",ks).getRegex()},_b={...xo,html:ve(`^ *(?:comment *(?:\\n|\\s*$)|<(tag)[\\s\\S]+?</\\1> *(?:\\n{2,}|\\s*$)|<tag(?:"[^"]*"|'[^']*'|\\s[^'"/>\\s]*)*?/?> *(?:\\n{2,}|\\s*$))`).replace("comment",Co).replace(/tag/g,"(?!(?:a|em|strong|small|s|cite|q|dfn|abbr|data|time|code|var|samp|kbd|sub|sup|i|b|u|mark|ruby|rt|rp|bdi|bdo|span|br|wbr|ins|del|img)\\b)\\w+(?!:|[^\\w\\s@]*@)\\b").getRegex(),def:/^ *\[([^\]]+)\]: *<?([^\s>]+)>?(?: +(["(][^\n]+[")]))? *(?:\n+|$)/,heading:/^(#{1,6})(.*)(?:\n+|$)/,fences:sr,lheading:/^(.+?)\n {0,3}(=+|-+) *(?:\n+|$)/,paragraph:ve(Fo).replace("hr",fr).replace("heading",` *#{1,6} *[^
]`).replace("lheading",pf).replace("|table","").replace("blockquote"," {0,3}>").replace("|fences","").replace("|list","").replace("|html","").replace("|tag","").getRegex()},mf=/^\\([!"#$%&'()*+,\-./:;<=>?@\[\]\\^_`{|}~])/,Ab=/^(`+)([^`]|[^`][\s\S]*?[^`])\1(?!`)/,yf=/^( {2,}|\\)\n(?!\s*$)/,Sb=/^(`+|[^`])(?:(?= {2,}\n)|[\s\S]*?(?:(?=[\\<!\[`*_]|\b_|$)|[^ ](?= {2,}\n)))/,hr="\\p{P}$+<=>`^|~",kb=ve(/^((?![*_])[\spunctuation])/,"u").replace(/punctuation/g,hr).getRegex(),Fb=/\[[^[\]]*?\]\([^\(\)]*?\)|`[^`]*?`|<[^<>]*?>/g,Nb=ve(/^(?:\*+(?:((?!\*)[punct])|[^\s*]))|^_+(?:((?!_)[punct])|([^\s_]))/,"u").replace(/punct/g,hr).getRegex(),Cb=ve("^[^_*]*?__[^_*]*?\\*[^_*]*?(?=__)|[^*]+(?=[^*])|(?!\\*)[punct](\\*+)(?=[\\s]|$)|[^punct\\s](\\*+)(?!\\*)(?=[punct\\s]|$)|(?!\\*)[punct\\s](\\*+)(?=[^punct\\s])|[\\s](\\*+)(?!\\*)(?=[punct])|(?!\\*)[punct](\\*+)(?!\\*)(?=[punct])|[^punct\\s](\\*+)(?=[^punct\\s])","gu").replace(/punct/g,hr).getRegex(),xb=ve("^[^_*]*?\\*\\*[^_*]*?_[^_*]*?(?=\\*\\*)|[^_]+(?=[^_])|(?!_)[punct](_+)(?=[\\s]|$)|[^punct\\s](_+)(?!_)(?=[punct\\s]|$)|(?!_)[punct\\s](_+)(?=[^punct\\s])|[\\s](_+)(?!_)(?=[punct])|(?!_)[punct](_+)(?!_)(?=[punct])","gu").replace(/punct/g,hr).getRegex(),Ob=ve(/\\([punct])/,"gu").replace(/punct/g,hr).getRegex(),Rb=ve(/^<(scheme:[^\s\x00-\x1f<>]*|email)>/).replace("scheme",/[a-zA-Z][a-zA-Z0-9+.-]{1,31}/).replace("email",/[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+(@)[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?(?:\.[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?)+(?![-_])/).getRegex(),Lb=ve(Co).replace("(?:-->|$)","-->").getRegex(),Pb=ve("^comment|^</[a-zA-Z][\\w:-]*\\s*>|^<[a-zA-Z][\\w-]*(?:attribute)*?\\s*/?>|^<\\?[\\s\\S]*?\\?>|^<![a-zA-Z]+\\s[\\s\\S]*?>|^<!\\[CDATA\\[[\\s\\S]*?\\]\\]>").replace("comment",Lb).replace("attribute",/\s+[a-zA-Z:_][\w.:-]*(?:\s*=\s*"[^"]*"|\s*=\s*'[^']*'|\s*=\s*[^\s"'=<>`]+)?/).getRegex(),Ts=/(?:\[(?:\\.|[^\[\]\\])*\]|\\.|`[^`]*`|[^\[\]\\`])*?/,Bb=ve(/^!?\[(label)\]\(\s*(href)(?:\s+(title))?\s*\)/).replace("label",Ts).replace("href",/<(?:\\.|[^\n<>\\])+>|[^\s\x00-\x1f]*/).replace("title",/"(?:\\"?|[^"\\])*"|'(?:\\'?|[^'\\])*'|\((?:\\\)?|[^)\\])*\)/).getRegex(),vf=ve(/^!?\[(label)\]\[(ref)\]/).replace("label",Ts).replace("ref",No).getRegex(),Tf=ve(/^!?\[(ref)\](?:\[\])?/).replace("ref",No).getRegex(),Ub=ve("reflink|nolink(?!\\()","g").replace("reflink",vf).replace("nolink",Tf).getRegex(),Oo={_backpedal:sr,anyPunctuation:Ob,autolink:Rb,blockSkip:Fb,br:yf,code:Ab,del:sr,emStrongLDelim:Nb,emStrongRDelimAst:Cb,emStrongRDelimUnd:xb,escape:mf,link:Bb,nolink:Tf,punctuation:kb,reflink:vf,reflinkSearch:Ub,tag:Pb,text:Sb,url:sr},Mb={...Oo,link:ve(/^!?\[(label)\]\((.*?)\)/).replace("label",Ts).getRegex(),reflink:ve(/^!?\[(label)\]\s*\[([^\]]*)\]/).replace("label",Ts).getRegex()},go={...Oo,escape:ve(mf).replace("])","~|])").getRegex(),url:ve(/^((?:ftp|https?):\/\/|www\.)(?:[a-zA-Z0-9\-]+\.?)+[^\s<]*|^email/,"i").replace("email",/[A-Za-z0-9._+-]+(@)[a-zA-Z0-9-_]+(?:\.[a-zA-Z0-9-_]*[a-zA-Z0-9])+(?![-_])/).getRegex(),_backpedal:/(?:[^?!.,:;*_'"~()&]+|\([^)]*\)|&(?![a-zA-Z0-9]+;$)|[?!.,:;*_'"~)]+(?!$))+/,del:/^(~~?)(?=[^\s~])([\s\S]*?[^\s~])\1(?=[^~]|$)/,text:/^([`~]+|[^`~])(?:(?= {2,}\n)|(?=[a-zA-Z0-9.!#$%&'*+\/=?_`{\|}~-]+@)|[\s\S]*?(?:(?=[\\<!\[`*~_]|\b_|https?:\/\/|ftp:\/\/|www\.|$)|[^ ](?= {2,}\n)|[^a-zA-Z0-9.!#$%&'*+\/=?_`{\|}~-](?=[a-zA-Z0-9.!#$%&'*+\/=?_`{\|}~-]+@)))/},$b={...go,br:ve(yf).replace("{2,}","*").getRegex(),text:ve(go.text).replace("\\b_","\\b_| {2,}\\n").replace(/\{2,\}/g,"*").getRegex()},us={normal:xo,gfm:Ib,pedantic:_b},er={normal:Oo,gfm:go,breaks:$b,pedantic:Mb};class jn{constructor(n){Ie(this,"tokens");Ie(this,"options");Ie(this,"state");Ie(this,"tokenizer");Ie(this,"inlineQueue");this.tokens=[],this.tokens.links=Object.create(null),this.options=n||ui,this.options.tokenizer=this.options.tokenizer||new vs,this.tokenizer=this.options.tokenizer,this.tokenizer.options=this.options,this.tokenizer.lexer=this,this.inlineQueue=[],this.state={inLink:!1,inRawBlock:!1,top:!0};const t={block:us.normal,inline:er.normal};this.options.pedantic?(t.block=us.pedantic,t.inline=er.pedantic):this.options.gfm&&(t.block=us.gfm,this.options.breaks?t.inline=er.breaks:t.inline=er.gfm),this.tokenizer.rules=t}static get rules(){return{block:us,inline:er}}static lex(n,t){return new jn(t).lex(n)}static lexInline(n,t){return new jn(t).inlineTokens(n)}lex(n){n=n.replace(/\r\n|\r/g,`
`),this.blockTokens(n,this.tokens);for(let t=0;t<this.inlineQueue.length;t++){const s=this.inlineQueue[t];this.inlineTokens(s.src,s.tokens)}return this.inlineQueue=[],this.tokens}blockTokens(n,t=[]){this.options.pedantic?n=n.replace(/\t/g,"    ").replace(/^ +$/gm,""):n=n.replace(/^( *)(\t+)/gm,(f,d,y)=>d+"    ".repeat(y.length));let s,a,l,u;for(;n;)if(!(this.options.extensions&&this.options.extensions.block&&this.options.extensions.block.some(f=>(s=f.call({lexer:this},n,t))?(n=n.substring(s.raw.length),t.push(s),!0):!1))){if(s=this.tokenizer.space(n)){n=n.substring(s.raw.length),s.raw.length===1&&t.length>0?t[t.length-1].raw+=`
`:t.push(s);continue}if(s=this.tokenizer.code(n)){n=n.substring(s.raw.length),a=t[t.length-1],a&&(a.type==="paragraph"||a.type==="text")?(a.raw+=`
`+s.raw,a.text+=`
`+s.text,this.inlineQueue[this.inlineQueue.length-1].src=a.text):t.push(s);continue}if(s=this.tokenizer.fences(n)){n=n.substring(s.raw.length),t.push(s);continue}if(s=this.tokenizer.heading(n)){n=n.substring(s.raw.length),t.push(s);continue}if(s=this.tokenizer.hr(n)){n=n.substring(s.raw.length),t.push(s);continue}if(s=this.tokenizer.blockquote(n)){n=n.substring(s.raw.length),t.push(s);continue}if(s=this.tokenizer.list(n)){n=n.substring(s.raw.length),t.push(s);continue}if(s=this.tokenizer.html(n)){n=n.substring(s.raw.length),t.push(s);continue}if(s=this.tokenizer.def(n)){n=n.substring(s.raw.length),a=t[t.length-1],a&&(a.type==="paragraph"||a.type==="text")?(a.raw+=`
`+s.raw,a.text+=`
`+s.raw,this.inlineQueue[this.inlineQueue.length-1].src=a.text):this.tokens.links[s.tag]||(this.tokens.links[s.tag]={href:s.href,title:s.title});continue}if(s=this.tokenizer.table(n)){n=n.substring(s.raw.length),t.push(s);continue}if(s=this.tokenizer.lheading(n)){n=n.substring(s.raw.length),t.push(s);continue}if(l=n,this.options.extensions&&this.options.extensions.startBlock){let f=1/0;const d=n.slice(1);let y;this.options.extensions.startBlock.forEach(v=>{y=v.call({lexer:this},d),typeof y=="number"&&y>=0&&(f=Math.min(f,y))}),f<1/0&&f>=0&&(l=n.substring(0,f+1))}if(this.state.top&&(s=this.tokenizer.paragraph(l))){a=t[t.length-1],u&&a.type==="paragraph"?(a.raw+=`
`+s.raw,a.text+=`
`+s.text,this.inlineQueue.pop(),this.inlineQueue[this.inlineQueue.length-1].src=a.text):t.push(s),u=l.length!==n.length,n=n.substring(s.raw.length);continue}if(s=this.tokenizer.text(n)){n=n.substring(s.raw.length),a=t[t.length-1],a&&a.type==="text"?(a.raw+=`
`+s.raw,a.text+=`
`+s.text,this.inlineQueue.pop(),this.inlineQueue[this.inlineQueue.length-1].src=a.text):t.push(s);continue}if(n){const f="Infinite loop on byte: "+n.charCodeAt(0);if(this.options.silent){console.error(f);break}else throw new Error(f)}}return this.state.top=!0,t}inline(n,t=[]){return this.inlineQueue.push({src:n,tokens:t}),t}inlineTokens(n,t=[]){let s,a,l,u=n,f,d,y;if(this.tokens.links){const v=Object.keys(this.tokens.links);if(v.length>0)for(;(f=this.tokenizer.rules.inline.reflinkSearch.exec(u))!=null;)v.includes(f[0].slice(f[0].lastIndexOf("[")+1,-1))&&(u=u.slice(0,f.index)+"["+"a".repeat(f[0].length-2)+"]"+u.slice(this.tokenizer.rules.inline.reflinkSearch.lastIndex))}for(;(f=this.tokenizer.rules.inline.blockSkip.exec(u))!=null;)u=u.slice(0,f.index)+"["+"a".repeat(f[0].length-2)+"]"+u.slice(this.tokenizer.rules.inline.blockSkip.lastIndex);for(;(f=this.tokenizer.rules.inline.anyPunctuation.exec(u))!=null;)u=u.slice(0,f.index)+"++"+u.slice(this.tokenizer.rules.inline.anyPunctuation.lastIndex);for(;n;)if(d||(y=""),d=!1,!(this.options.extensions&&this.options.extensions.inline&&this.options.extensions.inline.some(v=>(s=v.call({lexer:this},n,t))?(n=n.substring(s.raw.length),t.push(s),!0):!1))){if(s=this.tokenizer.escape(n)){n=n.substring(s.raw.length),t.push(s);continue}if(s=this.tokenizer.tag(n)){n=n.substring(s.raw.length),a=t[t.length-1],a&&s.type==="text"&&a.type==="text"?(a.raw+=s.raw,a.text+=s.text):t.push(s);continue}if(s=this.tokenizer.link(n)){n=n.substring(s.raw.length),t.push(s);continue}if(s=this.tokenizer.reflink(n,this.tokens.links)){n=n.substring(s.raw.length),a=t[t.length-1],a&&s.type==="text"&&a.type==="text"?(a.raw+=s.raw,a.text+=s.text):t.push(s);continue}if(s=this.tokenizer.emStrong(n,u,y)){n=n.substring(s.raw.length),t.push(s);continue}if(s=this.tokenizer.codespan(n)){n=n.substring(s.raw.length),t.push(s);continue}if(s=this.tokenizer.br(n)){n=n.substring(s.raw.length),t.push(s);continue}if(s=this.tokenizer.del(n)){n=n.substring(s.raw.length),t.push(s);continue}if(s=this.tokenizer.autolink(n)){n=n.substring(s.raw.length),t.push(s);continue}if(!this.state.inLink&&(s=this.tokenizer.url(n))){n=n.substring(s.raw.length),t.push(s);continue}if(l=n,this.options.extensions&&this.options.extensions.startInline){let v=1/0;const w=n.slice(1);let N;this.options.extensions.startInline.forEach(C=>{N=C.call({lexer:this},w),typeof N=="number"&&N>=0&&(v=Math.min(v,N))}),v<1/0&&v>=0&&(l=n.substring(0,v+1))}if(s=this.tokenizer.inlineText(l)){n=n.substring(s.raw.length),s.raw.slice(-1)!=="_"&&(y=s.raw.slice(-1)),d=!0,a=t[t.length-1],a&&a.type==="text"?(a.raw+=s.raw,a.text+=s.text):t.push(s);continue}if(n){const v="Infinite loop on byte: "+n.charCodeAt(0);if(this.options.silent){console.error(v);break}else throw new Error(v)}}return t}}class bs{constructor(n){Ie(this,"options");this.options=n||ui}code(n,t,s){var l;const a=(l=(t||"").match(/^\S*/))==null?void 0:l[0];return n=n.replace(/\n$/,"")+`
`,a?'<pre><code class="language-'+In(a)+'">'+(s?n:In(n,!0))+`</code></pre>
`:"<pre><code>"+(s?n:In(n,!0))+`</code></pre>
`}blockquote(n){return`<blockquote>
${n}</blockquote>
`}html(n,t){return n}heading(n,t,s){return`<h${t}>${n}</h${t}>
`}hr(){return`<hr>
`}list(n,t,s){const a=t?"ol":"ul",l=t&&s!==1?' start="'+s+'"':"";return"<"+a+l+`>
`+n+"</"+a+`>
`}listitem(n,t,s){return`<li>${n}</li>
`}checkbox(n){return"<input "+(n?'checked="" ':"")+'disabled="" type="checkbox">'}paragraph(n){return`<p>${n}</p>
`}table(n,t){return t&&(t=`<tbody>${t}</tbody>`),`<table>
<thead>
`+n+`</thead>
`+t+`</table>
`}tablerow(n){return`<tr>
${n}</tr>
`}tablecell(n,t){const s=t.header?"th":"td";return(t.align?`<${s} align="${t.align}">`:`<${s}>`)+n+`</${s}>
`}strong(n){return`<strong>${n}</strong>`}em(n){return`<em>${n}</em>`}codespan(n){return`<code>${n}</code>`}br(){return"<br>"}del(n){return`<del>${n}</del>`}link(n,t,s){const a=Pc(n);if(a===null)return s;n=a;let l='<a href="'+n+'"';return t&&(l+=' title="'+t+'"'),l+=">"+s+"</a>",l}image(n,t,s){const a=Pc(n);if(a===null)return s;n=a;let l=`<img src="${n}" alt="${s}"`;return t&&(l+=` title="${t}"`),l+=">",l}text(n){return n}}class Ro{strong(n){return n}em(n){return n}codespan(n){return n}del(n){return n}html(n){return n}text(n){return n}link(n,t,s){return""+s}image(n,t,s){return""+s}br(){return""}}class ut{constructor(n){Ie(this,"options");Ie(this,"renderer");Ie(this,"textRenderer");this.options=n||ui,this.options.renderer=this.options.renderer||new bs,this.renderer=this.options.renderer,this.renderer.options=this.options,this.textRenderer=new Ro}static parse(n,t){return new ut(t).parse(n)}static parseInline(n,t){return new ut(t).parseInline(n)}parse(n,t=!0){let s="";for(let a=0;a<n.length;a++){const l=n[a];if(this.options.extensions&&this.options.extensions.renderers&&this.options.extensions.renderers[l.type]){const u=l,f=this.options.extensions.renderers[u.type].call({parser:this},u);if(f!==!1||!["space","hr","heading","code","table","blockquote","list","html","paragraph","text"].includes(u.type)){s+=f||"";continue}}switch(l.type){case"space":continue;case"hr":{s+=this.renderer.hr();continue}case"heading":{const u=l;s+=this.renderer.heading(this.parseInline(u.tokens),u.depth,fb(this.parseInline(u.tokens,this.textRenderer)));continue}case"code":{const u=l;s+=this.renderer.code(u.text,u.lang,!!u.escaped);continue}case"table":{const u=l;let f="",d="";for(let v=0;v<u.header.length;v++)d+=this.renderer.tablecell(this.parseInline(u.header[v].tokens),{header:!0,align:u.align[v]});f+=this.renderer.tablerow(d);let y="";for(let v=0;v<u.rows.length;v++){const w=u.rows[v];d="";for(let N=0;N<w.length;N++)d+=this.renderer.tablecell(this.parseInline(w[N].tokens),{header:!1,align:u.align[N]});y+=this.renderer.tablerow(d)}s+=this.renderer.table(f,y);continue}case"blockquote":{const u=l,f=this.parse(u.tokens);s+=this.renderer.blockquote(f);continue}case"list":{const u=l,f=u.ordered,d=u.start,y=u.loose;let v="";for(let w=0;w<u.items.length;w++){const N=u.items[w],C=N.checked,R=N.task;let L="";if(N.task){const Q=this.renderer.checkbox(!!C);y?N.tokens.length>0&&N.tokens[0].type==="paragraph"?(N.tokens[0].text=Q+" "+N.tokens[0].text,N.tokens[0].tokens&&N.tokens[0].tokens.length>0&&N.tokens[0].tokens[0].type==="text"&&(N.tokens[0].tokens[0].text=Q+" "+N.tokens[0].tokens[0].text)):N.tokens.unshift({type:"text",text:Q+" "}):L+=Q+" "}L+=this.parse(N.tokens,y),v+=this.renderer.listitem(L,R,!!C)}s+=this.renderer.list(v,f,d);continue}case"html":{const u=l;s+=this.renderer.html(u.text,u.block);continue}case"paragraph":{const u=l;s+=this.renderer.paragraph(this.parseInline(u.tokens));continue}case"text":{let u=l,f=u.tokens?this.parseInline(u.tokens):u.text;for(;a+1<n.length&&n[a+1].type==="text";)u=n[++a],f+=`
`+(u.tokens?this.parseInline(u.tokens):u.text);s+=t?this.renderer.paragraph(f):f;continue}default:{const u='Token with "'+l.type+'" type was not found.';if(this.options.silent)return console.error(u),"";throw new Error(u)}}}return s}parseInline(n,t){t=t||this.renderer;let s="";for(let a=0;a<n.length;a++){const l=n[a];if(this.options.extensions&&this.options.extensions.renderers&&this.options.extensions.renderers[l.type]){const u=this.options.extensions.renderers[l.type].call({parser:this},l);if(u!==!1||!["escape","html","link","image","strong","em","codespan","br","del","text"].includes(l.type)){s+=u||"";continue}}switch(l.type){case"escape":{const u=l;s+=t.text(u.text);break}case"html":{const u=l;s+=t.html(u.text);break}case"link":{const u=l;s+=t.link(u.href,u.title,this.parseInline(u.tokens,t));break}case"image":{const u=l;s+=t.image(u.href,u.title,u.text);break}case"strong":{const u=l;s+=t.strong(this.parseInline(u.tokens,t));break}case"em":{const u=l;s+=t.em(this.parseInline(u.tokens,t));break}case"codespan":{const u=l;s+=t.codespan(u.text);break}case"br":{s+=t.br();break}case"del":{const u=l;s+=t.del(this.parseInline(u.tokens,t));break}case"text":{const u=l;s+=t.text(u.text);break}default:{const u='Token with "'+l.type+'" type was not found.';if(this.options.silent)return console.error(u),"";throw new Error(u)}}}return s}}class ar{constructor(n){Ie(this,"options");this.options=n||ui}preprocess(n){return n}postprocess(n){return n}processAllTokens(n){return n}}Ie(ar,"passThroughHooks",new Set(["preprocess","postprocess","processAllTokens"]));var cr,mo,_s,bf;class Gb{constructor(...n){ro(this,cr);ro(this,_s);Ie(this,"defaults",ko());Ie(this,"options",this.setOptions);Ie(this,"parse",os(this,cr,mo).call(this,jn.lex,ut.parse));Ie(this,"parseInline",os(this,cr,mo).call(this,jn.lexInline,ut.parseInline));Ie(this,"Parser",ut);Ie(this,"Renderer",bs);Ie(this,"TextRenderer",Ro);Ie(this,"Lexer",jn);Ie(this,"Tokenizer",vs);Ie(this,"Hooks",ar);this.use(...n)}walkTokens(n,t){var a,l;let s=[];for(const u of n)switch(s=s.concat(t.call(this,u)),u.type){case"table":{const f=u;for(const d of f.header)s=s.concat(this.walkTokens(d.tokens,t));for(const d of f.rows)for(const y of d)s=s.concat(this.walkTokens(y.tokens,t));break}case"list":{const f=u;s=s.concat(this.walkTokens(f.items,t));break}default:{const f=u;(l=(a=this.defaults.extensions)==null?void 0:a.childTokens)!=null&&l[f.type]?this.defaults.extensions.childTokens[f.type].forEach(d=>{const y=f[d].flat(1/0);s=s.concat(this.walkTokens(y,t))}):f.tokens&&(s=s.concat(this.walkTokens(f.tokens,t)))}}return s}use(...n){const t=this.defaults.extensions||{renderers:{},childTokens:{}};return n.forEach(s=>{const a={...s};if(a.async=this.defaults.async||a.async||!1,s.extensions&&(s.extensions.forEach(l=>{if(!l.name)throw new Error("extension name required");if("renderer"in l){const u=t.renderers[l.name];u?t.renderers[l.name]=function(...f){let d=l.renderer.apply(this,f);return d===!1&&(d=u.apply(this,f)),d}:t.renderers[l.name]=l.renderer}if("tokenizer"in l){if(!l.level||l.level!=="block"&&l.level!=="inline")throw new Error("extension level must be 'block' or 'inline'");const u=t[l.level];u?u.unshift(l.tokenizer):t[l.level]=[l.tokenizer],l.start&&(l.level==="block"?t.startBlock?t.startBlock.push(l.start):t.startBlock=[l.start]:l.level==="inline"&&(t.startInline?t.startInline.push(l.start):t.startInline=[l.start]))}"childTokens"in l&&l.childTokens&&(t.childTokens[l.name]=l.childTokens)}),a.extensions=t),s.renderer){const l=this.defaults.renderer||new bs(this.defaults);for(const u in s.renderer){if(!(u in l))throw new Error(`renderer '${u}' does not exist`);if(u==="options")continue;const f=u,d=s.renderer[f],y=l[f];l[f]=(...v)=>{let w=d.apply(l,v);return w===!1&&(w=y.apply(l,v)),w||""}}a.renderer=l}if(s.tokenizer){const l=this.defaults.tokenizer||new vs(this.defaults);for(const u in s.tokenizer){if(!(u in l))throw new Error(`tokenizer '${u}' does not exist`);if(["options","rules","lexer"].includes(u))continue;const f=u,d=s.tokenizer[f],y=l[f];l[f]=(...v)=>{let w=d.apply(l,v);return w===!1&&(w=y.apply(l,v)),w}}a.tokenizer=l}if(s.hooks){const l=this.defaults.hooks||new ar;for(const u in s.hooks){if(!(u in l))throw new Error(`hook '${u}' does not exist`);if(u==="options")continue;const f=u,d=s.hooks[f],y=l[f];ar.passThroughHooks.has(u)?l[f]=v=>{if(this.defaults.async)return Promise.resolve(d.call(l,v)).then(N=>y.call(l,N));const w=d.call(l,v);return y.call(l,w)}:l[f]=(...v)=>{let w=d.apply(l,v);return w===!1&&(w=y.apply(l,v)),w}}a.hooks=l}if(s.walkTokens){const l=this.defaults.walkTokens,u=s.walkTokens;a.walkTokens=function(f){let d=[];return d.push(u.call(this,f)),l&&(d=d.concat(l.call(this,f))),d}}this.defaults={...this.defaults,...a}}),this}setOptions(n){return this.defaults={...this.defaults,...n},this}lexer(n,t){return jn.lex(n,t??this.defaults)}parser(n,t){return ut.parse(n,t??this.defaults)}}cr=new WeakSet,mo=function(n,t){return(s,a)=>{const l={...a},u={...this.defaults,...l};this.defaults.async===!0&&l.async===!1&&(u.silent||console.warn("marked(): The async option was set to true by an extension. The async: false option sent to parse will be ignored."),u.async=!0);const f=os(this,_s,bf).call(this,!!u.silent,!!u.async);if(typeof s>"u"||s===null)return f(new Error("marked(): input parameter is undefined or null"));if(typeof s!="string")return f(new Error("marked(): input parameter is of type "+Object.prototype.toString.call(s)+", string expected"));if(u.hooks&&(u.hooks.options=u),u.async)return Promise.resolve(u.hooks?u.hooks.preprocess(s):s).then(d=>n(d,u)).then(d=>u.hooks?u.hooks.processAllTokens(d):d).then(d=>u.walkTokens?Promise.all(this.walkTokens(d,u.walkTokens)).then(()=>d):d).then(d=>t(d,u)).then(d=>u.hooks?u.hooks.postprocess(d):d).catch(f);try{u.hooks&&(s=u.hooks.preprocess(s));let d=n(s,u);u.hooks&&(d=u.hooks.processAllTokens(d)),u.walkTokens&&this.walkTokens(d,u.walkTokens);let y=t(d,u);return u.hooks&&(y=u.hooks.postprocess(y)),y}catch(d){return f(d)}}},_s=new WeakSet,bf=function(n,t){return s=>{if(s.message+=`
Please report this to https://github.com/markedjs/marked.`,n){const a="<p>An error occurred:</p><pre>"+In(s.message+"",!0)+"</pre>";return t?Promise.resolve(a):a}if(t)return Promise.reject(s);throw s}};const ai=new Gb;function ye(i,n){return ai.parse(i,n)}ye.options=ye.setOptions=function(i){return ai.setOptions(i),ye.defaults=ai.defaults,cf(ye.defaults),ye};ye.getDefaults=ko;ye.defaults=ui;ye.use=function(...i){return ai.use(...i),ye.defaults=ai.defaults,cf(ye.defaults),ye};ye.walkTokens=function(i,n){return ai.walkTokens(i,n)};ye.parseInline=ai.parseInline;ye.Parser=ut;ye.parser=ut.parse;ye.Renderer=bs;ye.TextRenderer=Ro;ye.Lexer=jn;ye.lexer=jn.lex;ye.Tokenizer=vs;ye.Hooks=ar;ye.parse=ye;ye.options;ye.setOptions;ye.use;ye.walkTokens;ye.parseInline;ut.parse;jn.lex;const Wb=/[\0-\x1F!-,\.\/:-@\[-\^`\{-\xA9\xAB-\xB4\xB6-\xB9\xBB-\xBF\xD7\xF7\u02C2-\u02C5\u02D2-\u02DF\u02E5-\u02EB\u02ED\u02EF-\u02FF\u0375\u0378\u0379\u037E\u0380-\u0385\u0387\u038B\u038D\u03A2\u03F6\u0482\u0530\u0557\u0558\u055A-\u055F\u0589-\u0590\u05BE\u05C0\u05C3\u05C6\u05C8-\u05CF\u05EB-\u05EE\u05F3-\u060F\u061B-\u061F\u066A-\u066D\u06D4\u06DD\u06DE\u06E9\u06FD\u06FE\u0700-\u070F\u074B\u074C\u07B2-\u07BF\u07F6-\u07F9\u07FB\u07FC\u07FE\u07FF\u082E-\u083F\u085C-\u085F\u086B-\u089F\u08B5\u08C8-\u08D2\u08E2\u0964\u0965\u0970\u0984\u098D\u098E\u0991\u0992\u09A9\u09B1\u09B3-\u09B5\u09BA\u09BB\u09C5\u09C6\u09C9\u09CA\u09CF-\u09D6\u09D8-\u09DB\u09DE\u09E4\u09E5\u09F2-\u09FB\u09FD\u09FF\u0A00\u0A04\u0A0B-\u0A0E\u0A11\u0A12\u0A29\u0A31\u0A34\u0A37\u0A3A\u0A3B\u0A3D\u0A43-\u0A46\u0A49\u0A4A\u0A4E-\u0A50\u0A52-\u0A58\u0A5D\u0A5F-\u0A65\u0A76-\u0A80\u0A84\u0A8E\u0A92\u0AA9\u0AB1\u0AB4\u0ABA\u0ABB\u0AC6\u0ACA\u0ACE\u0ACF\u0AD1-\u0ADF\u0AE4\u0AE5\u0AF0-\u0AF8\u0B00\u0B04\u0B0D\u0B0E\u0B11\u0B12\u0B29\u0B31\u0B34\u0B3A\u0B3B\u0B45\u0B46\u0B49\u0B4A\u0B4E-\u0B54\u0B58-\u0B5B\u0B5E\u0B64\u0B65\u0B70\u0B72-\u0B81\u0B84\u0B8B-\u0B8D\u0B91\u0B96-\u0B98\u0B9B\u0B9D\u0BA0-\u0BA2\u0BA5-\u0BA7\u0BAB-\u0BAD\u0BBA-\u0BBD\u0BC3-\u0BC5\u0BC9\u0BCE\u0BCF\u0BD1-\u0BD6\u0BD8-\u0BE5\u0BF0-\u0BFF\u0C0D\u0C11\u0C29\u0C3A-\u0C3C\u0C45\u0C49\u0C4E-\u0C54\u0C57\u0C5B-\u0C5F\u0C64\u0C65\u0C70-\u0C7F\u0C84\u0C8D\u0C91\u0CA9\u0CB4\u0CBA\u0CBB\u0CC5\u0CC9\u0CCE-\u0CD4\u0CD7-\u0CDD\u0CDF\u0CE4\u0CE5\u0CF0\u0CF3-\u0CFF\u0D0D\u0D11\u0D45\u0D49\u0D4F-\u0D53\u0D58-\u0D5E\u0D64\u0D65\u0D70-\u0D79\u0D80\u0D84\u0D97-\u0D99\u0DB2\u0DBC\u0DBE\u0DBF\u0DC7-\u0DC9\u0DCB-\u0DCE\u0DD5\u0DD7\u0DE0-\u0DE5\u0DF0\u0DF1\u0DF4-\u0E00\u0E3B-\u0E3F\u0E4F\u0E5A-\u0E80\u0E83\u0E85\u0E8B\u0EA4\u0EA6\u0EBE\u0EBF\u0EC5\u0EC7\u0ECE\u0ECF\u0EDA\u0EDB\u0EE0-\u0EFF\u0F01-\u0F17\u0F1A-\u0F1F\u0F2A-\u0F34\u0F36\u0F38\u0F3A-\u0F3D\u0F48\u0F6D-\u0F70\u0F85\u0F98\u0FBD-\u0FC5\u0FC7-\u0FFF\u104A-\u104F\u109E\u109F\u10C6\u10C8-\u10CC\u10CE\u10CF\u10FB\u1249\u124E\u124F\u1257\u1259\u125E\u125F\u1289\u128E\u128F\u12B1\u12B6\u12B7\u12BF\u12C1\u12C6\u12C7\u12D7\u1311\u1316\u1317\u135B\u135C\u1360-\u137F\u1390-\u139F\u13F6\u13F7\u13FE-\u1400\u166D\u166E\u1680\u169B-\u169F\u16EB-\u16ED\u16F9-\u16FF\u170D\u1715-\u171F\u1735-\u173F\u1754-\u175F\u176D\u1771\u1774-\u177F\u17D4-\u17D6\u17D8-\u17DB\u17DE\u17DF\u17EA-\u180A\u180E\u180F\u181A-\u181F\u1879-\u187F\u18AB-\u18AF\u18F6-\u18FF\u191F\u192C-\u192F\u193C-\u1945\u196E\u196F\u1975-\u197F\u19AC-\u19AF\u19CA-\u19CF\u19DA-\u19FF\u1A1C-\u1A1F\u1A5F\u1A7D\u1A7E\u1A8A-\u1A8F\u1A9A-\u1AA6\u1AA8-\u1AAF\u1AC1-\u1AFF\u1B4C-\u1B4F\u1B5A-\u1B6A\u1B74-\u1B7F\u1BF4-\u1BFF\u1C38-\u1C3F\u1C4A-\u1C4C\u1C7E\u1C7F\u1C89-\u1C8F\u1CBB\u1CBC\u1CC0-\u1CCF\u1CD3\u1CFB-\u1CFF\u1DFA\u1F16\u1F17\u1F1E\u1F1F\u1F46\u1F47\u1F4E\u1F4F\u1F58\u1F5A\u1F5C\u1F5E\u1F7E\u1F7F\u1FB5\u1FBD\u1FBF-\u1FC1\u1FC5\u1FCD-\u1FCF\u1FD4\u1FD5\u1FDC-\u1FDF\u1FED-\u1FF1\u1FF5\u1FFD-\u203E\u2041-\u2053\u2055-\u2070\u2072-\u207E\u2080-\u208F\u209D-\u20CF\u20F1-\u2101\u2103-\u2106\u2108\u2109\u2114\u2116-\u2118\u211E-\u2123\u2125\u2127\u2129\u212E\u213A\u213B\u2140-\u2144\u214A-\u214D\u214F-\u215F\u2189-\u24B5\u24EA-\u2BFF\u2C2F\u2C5F\u2CE5-\u2CEA\u2CF4-\u2CFF\u2D26\u2D28-\u2D2C\u2D2E\u2D2F\u2D68-\u2D6E\u2D70-\u2D7E\u2D97-\u2D9F\u2DA7\u2DAF\u2DB7\u2DBF\u2DC7\u2DCF\u2DD7\u2DDF\u2E00-\u2E2E\u2E30-\u3004\u3008-\u3020\u3030\u3036\u3037\u303D-\u3040\u3097\u3098\u309B\u309C\u30A0\u30FB\u3100-\u3104\u3130\u318F-\u319F\u31C0-\u31EF\u3200-\u33FF\u4DC0-\u4DFF\u9FFD-\u9FFF\uA48D-\uA4CF\uA4FE\uA4FF\uA60D-\uA60F\uA62C-\uA63F\uA673\uA67E\uA6F2-\uA716\uA720\uA721\uA789\uA78A\uA7C0\uA7C1\uA7CB-\uA7F4\uA828-\uA82B\uA82D-\uA83F\uA874-\uA87F\uA8C6-\uA8CF\uA8DA-\uA8DF\uA8F8-\uA8FA\uA8FC\uA92E\uA92F\uA954-\uA95F\uA97D-\uA97F\uA9C1-\uA9CE\uA9DA-\uA9DF\uA9FF\uAA37-\uAA3F\uAA4E\uAA4F\uAA5A-\uAA5F\uAA77-\uAA79\uAAC3-\uAADA\uAADE\uAADF\uAAF0\uAAF1\uAAF7-\uAB00\uAB07\uAB08\uAB0F\uAB10\uAB17-\uAB1F\uAB27\uAB2F\uAB5B\uAB6A-\uAB6F\uABEB\uABEE\uABEF\uABFA-\uABFF\uD7A4-\uD7AF\uD7C7-\uD7CA\uD7FC-\uD7FF\uE000-\uF8FF\uFA6E\uFA6F\uFADA-\uFAFF\uFB07-\uFB12\uFB18-\uFB1C\uFB29\uFB37\uFB3D\uFB3F\uFB42\uFB45\uFBB2-\uFBD2\uFD3E-\uFD4F\uFD90\uFD91\uFDC8-\uFDEF\uFDFC-\uFDFF\uFE10-\uFE1F\uFE30-\uFE32\uFE35-\uFE4C\uFE50-\uFE6F\uFE75\uFEFD-\uFF0F\uFF1A-\uFF20\uFF3B-\uFF3E\uFF40\uFF5B-\uFF65\uFFBF-\uFFC1\uFFC8\uFFC9\uFFD0\uFFD1\uFFD8\uFFD9\uFFDD-\uFFFF]|\uD800[\uDC0C\uDC27\uDC3B\uDC3E\uDC4E\uDC4F\uDC5E-\uDC7F\uDCFB-\uDD3F\uDD75-\uDDFC\uDDFE-\uDE7F\uDE9D-\uDE9F\uDED1-\uDEDF\uDEE1-\uDEFF\uDF20-\uDF2C\uDF4B-\uDF4F\uDF7B-\uDF7F\uDF9E\uDF9F\uDFC4-\uDFC7\uDFD0\uDFD6-\uDFFF]|\uD801[\uDC9E\uDC9F\uDCAA-\uDCAF\uDCD4-\uDCD7\uDCFC-\uDCFF\uDD28-\uDD2F\uDD64-\uDDFF\uDF37-\uDF3F\uDF56-\uDF5F\uDF68-\uDFFF]|\uD802[\uDC06\uDC07\uDC09\uDC36\uDC39-\uDC3B\uDC3D\uDC3E\uDC56-\uDC5F\uDC77-\uDC7F\uDC9F-\uDCDF\uDCF3\uDCF6-\uDCFF\uDD16-\uDD1F\uDD3A-\uDD7F\uDDB8-\uDDBD\uDDC0-\uDDFF\uDE04\uDE07-\uDE0B\uDE14\uDE18\uDE36\uDE37\uDE3B-\uDE3E\uDE40-\uDE5F\uDE7D-\uDE7F\uDE9D-\uDEBF\uDEC8\uDEE7-\uDEFF\uDF36-\uDF3F\uDF56-\uDF5F\uDF73-\uDF7F\uDF92-\uDFFF]|\uD803[\uDC49-\uDC7F\uDCB3-\uDCBF\uDCF3-\uDCFF\uDD28-\uDD2F\uDD3A-\uDE7F\uDEAA\uDEAD-\uDEAF\uDEB2-\uDEFF\uDF1D-\uDF26\uDF28-\uDF2F\uDF51-\uDFAF\uDFC5-\uDFDF\uDFF7-\uDFFF]|\uD804[\uDC47-\uDC65\uDC70-\uDC7E\uDCBB-\uDCCF\uDCE9-\uDCEF\uDCFA-\uDCFF\uDD35\uDD40-\uDD43\uDD48-\uDD4F\uDD74\uDD75\uDD77-\uDD7F\uDDC5-\uDDC8\uDDCD\uDDDB\uDDDD-\uDDFF\uDE12\uDE38-\uDE3D\uDE3F-\uDE7F\uDE87\uDE89\uDE8E\uDE9E\uDEA9-\uDEAF\uDEEB-\uDEEF\uDEFA-\uDEFF\uDF04\uDF0D\uDF0E\uDF11\uDF12\uDF29\uDF31\uDF34\uDF3A\uDF45\uDF46\uDF49\uDF4A\uDF4E\uDF4F\uDF51-\uDF56\uDF58-\uDF5C\uDF64\uDF65\uDF6D-\uDF6F\uDF75-\uDFFF]|\uD805[\uDC4B-\uDC4F\uDC5A-\uDC5D\uDC62-\uDC7F\uDCC6\uDCC8-\uDCCF\uDCDA-\uDD7F\uDDB6\uDDB7\uDDC1-\uDDD7\uDDDE-\uDDFF\uDE41-\uDE43\uDE45-\uDE4F\uDE5A-\uDE7F\uDEB9-\uDEBF\uDECA-\uDEFF\uDF1B\uDF1C\uDF2C-\uDF2F\uDF3A-\uDFFF]|\uD806[\uDC3B-\uDC9F\uDCEA-\uDCFE\uDD07\uDD08\uDD0A\uDD0B\uDD14\uDD17\uDD36\uDD39\uDD3A\uDD44-\uDD4F\uDD5A-\uDD9F\uDDA8\uDDA9\uDDD8\uDDD9\uDDE2\uDDE5-\uDDFF\uDE3F-\uDE46\uDE48-\uDE4F\uDE9A-\uDE9C\uDE9E-\uDEBF\uDEF9-\uDFFF]|\uD807[\uDC09\uDC37\uDC41-\uDC4F\uDC5A-\uDC71\uDC90\uDC91\uDCA8\uDCB7-\uDCFF\uDD07\uDD0A\uDD37-\uDD39\uDD3B\uDD3E\uDD48-\uDD4F\uDD5A-\uDD5F\uDD66\uDD69\uDD8F\uDD92\uDD99-\uDD9F\uDDAA-\uDEDF\uDEF7-\uDFAF\uDFB1-\uDFFF]|\uD808[\uDF9A-\uDFFF]|\uD809[\uDC6F-\uDC7F\uDD44-\uDFFF]|[\uD80A\uD80B\uD80E-\uD810\uD812-\uD819\uD824-\uD82B\uD82D\uD82E\uD830-\uD833\uD837\uD839\uD83D\uD83F\uD87B-\uD87D\uD87F\uD885-\uDB3F\uDB41-\uDBFF][\uDC00-\uDFFF]|\uD80D[\uDC2F-\uDFFF]|\uD811[\uDE47-\uDFFF]|\uD81A[\uDE39-\uDE3F\uDE5F\uDE6A-\uDECF\uDEEE\uDEEF\uDEF5-\uDEFF\uDF37-\uDF3F\uDF44-\uDF4F\uDF5A-\uDF62\uDF78-\uDF7C\uDF90-\uDFFF]|\uD81B[\uDC00-\uDE3F\uDE80-\uDEFF\uDF4B-\uDF4E\uDF88-\uDF8E\uDFA0-\uDFDF\uDFE2\uDFE5-\uDFEF\uDFF2-\uDFFF]|\uD821[\uDFF8-\uDFFF]|\uD823[\uDCD6-\uDCFF\uDD09-\uDFFF]|\uD82C[\uDD1F-\uDD4F\uDD53-\uDD63\uDD68-\uDD6F\uDEFC-\uDFFF]|\uD82F[\uDC6B-\uDC6F\uDC7D-\uDC7F\uDC89-\uDC8F\uDC9A-\uDC9C\uDC9F-\uDFFF]|\uD834[\uDC00-\uDD64\uDD6A-\uDD6C\uDD73-\uDD7A\uDD83\uDD84\uDD8C-\uDDA9\uDDAE-\uDE41\uDE45-\uDFFF]|\uD835[\uDC55\uDC9D\uDCA0\uDCA1\uDCA3\uDCA4\uDCA7\uDCA8\uDCAD\uDCBA\uDCBC\uDCC4\uDD06\uDD0B\uDD0C\uDD15\uDD1D\uDD3A\uDD3F\uDD45\uDD47-\uDD49\uDD51\uDEA6\uDEA7\uDEC1\uDEDB\uDEFB\uDF15\uDF35\uDF4F\uDF6F\uDF89\uDFA9\uDFC3\uDFCC\uDFCD]|\uD836[\uDC00-\uDDFF\uDE37-\uDE3A\uDE6D-\uDE74\uDE76-\uDE83\uDE85-\uDE9A\uDEA0\uDEB0-\uDFFF]|\uD838[\uDC07\uDC19\uDC1A\uDC22\uDC25\uDC2B-\uDCFF\uDD2D-\uDD2F\uDD3E\uDD3F\uDD4A-\uDD4D\uDD4F-\uDEBF\uDEFA-\uDFFF]|\uD83A[\uDCC5-\uDCCF\uDCD7-\uDCFF\uDD4C-\uDD4F\uDD5A-\uDFFF]|\uD83B[\uDC00-\uDDFF\uDE04\uDE20\uDE23\uDE25\uDE26\uDE28\uDE33\uDE38\uDE3A\uDE3C-\uDE41\uDE43-\uDE46\uDE48\uDE4A\uDE4C\uDE50\uDE53\uDE55\uDE56\uDE58\uDE5A\uDE5C\uDE5E\uDE60\uDE63\uDE65\uDE66\uDE6B\uDE73\uDE78\uDE7D\uDE7F\uDE8A\uDE9C-\uDEA0\uDEA4\uDEAA\uDEBC-\uDFFF]|\uD83C[\uDC00-\uDD2F\uDD4A-\uDD4F\uDD6A-\uDD6F\uDD8A-\uDFFF]|\uD83E[\uDC00-\uDFEF\uDFFA-\uDFFF]|\uD869[\uDEDE-\uDEFF]|\uD86D[\uDF35-\uDF3F]|\uD86E[\uDC1E\uDC1F]|\uD873[\uDEA2-\uDEAF]|\uD87A[\uDFE1-\uDFFF]|\uD87E[\uDE1E-\uDFFF]|\uD884[\uDF4B-\uDFFF]|\uDB40[\uDC00-\uDCFF\uDDF0-\uDFFF]/g,Vb=Object.hasOwnProperty;class wf{constructor(){this.occurrences,this.reset()}slug(n,t){const s=this;let a=Yb(n,t===!0);const l=a;for(;Vb.call(s.occurrences,a);)s.occurrences[l]++,a=l+"-"+s.occurrences[l];return s.occurrences[a]=0,a}reset(){this.occurrences=Object.create(null)}}function Yb(i,n){return typeof i!="string"?"":(n||(i=i.toLowerCase()),i.replace(Wb,"").replace(/ /g,"-"))}function qb(i){return new jn().lex(i)}const Hb=()=>({heading:eT,blockquote:iT,list:dT,list_item:mT,br:TT,code:ET,codespan:_T,table:kT,html:CT,paragraph:RT,link:BT,text:$T,def:VT,del:HT,em:QT,hr:XT,strong:nb,image:rb,space:Rc,escape:Rc}),jb=()=>({baseUrl:"/",slugger:new wf});function zb(){const i=console.warn;console.warn=n=>{n.includes("unknown prop")||n.includes("unexpected slot")||i(n)},K0(()=>{console.warn=i})}function Qb(i){let n,t;return n=new Ss({props:{tokens:i[0],renderers:i[1],options:i[2]}}),{c(){Vt(n.$$.fragment)},l(s){li(n.$$.fragment,s)},m(s,a){Yt(n,s,a),t=!0},p(s,[a]){const l={};a&1&&(l.tokens=s[0]),a&2&&(l.renderers=s[1]),a&4&&(l.options=s[2]),n.$set(l)},i(s){t||(ee(n.$$.fragment,s),t=!0)},o(s){ae(n.$$.fragment,s),t=!1},d(s){qt(n,s)}}}function Jb(i,n,t){zb();let{source:s}=n,{options:a={}}=n,{renderers:l={}}=n,u,f,d;return i.$$set=y=>{"source"in y&&t(3,s=y.source),"options"in y&&t(4,a=y.options),"renderers"in y&&t(5,l=y.renderers)},i.$$.update=()=>{i.$$.dirty&56&&(t(0,u=qb(s)),t(1,f={...Hb(),...l}),t(2,d={...jb(),...a}))},[u,f,d,s,a,l]}class ED extends Re{constructor(n){super(),Le(this,n,Jb,Qb,Se,{source:3,options:4,renderers:5})}}const dr={joinUrlPaths:ho,isRelative:po,generatePathSegment:lf};var nr=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{};function Kb(i){return i&&i.__esModule&&Object.prototype.hasOwnProperty.call(i,"default")?i.default:i}function cs(){return{convert:i=>i==null||i===""?null:String(i),asString:i=>String(i),type:i=>i.string().optional()}}function $c(i){return{convert:n=>{if(typeof n=="object")return n;if(typeof n=="string"){const t=JSON.parse(n);return typeof t!="object"?null:t}return null},asString:n=>JSON.stringify(n),type:n=>n.record(i(n).optional()).optional()}}function fs(i){return{convert:n=>{if(Array.isArray(n))return n;if(typeof n=="string"){const t=JSON.parse(n);return Array.isArray(t)?t:null}return null},asString:n=>JSON.stringify(n),type:n=>n.array(i(n)).optional()}}function Gc(i){return{convert:n=>n==null||!i.find(t=>t===n)?null:n,asString:n=>String(n),type:n=>n.enum(i).optional()}}function Dn(i,n){const t=s=>n.convert(s[i]);return{name:Xb(i),key:i,asEnv:s=>({[i]:n.asString(s)}),zod:{type:n.type},get:t,getOrDefault:(s,a)=>t(s)??a}}function Xb(i){return i.toLowerCase().replace(/([-_][a-z])/gi,n=>n.toUpperCase().replace("-","").replace("_",""))}var Lo={APP_LOGO:Dn("APP_LOGO",cs()),APP_TITLE:Dn("APP_TITLE",cs()),APP_FAVICON:Dn("APP_FAVICON",cs()),SITE_ROOT:Dn("SITE_ROOT",cs()),SITE_META:Dn("SITE_META",$c(i=>i.string())),CUSTOM_STYLES:Dn("CUSTOM_STYLES",fs(i=>i.string())),FIELDS_SORTING:Dn("FIELDS_SORTING",Gc(["default","alphabetical"])),ARGUMENTS_SORTING:Dn("ARGUMENTS_SORTING",Gc(["default","alphabetical"])),QUERY_GENERATION_FACTORIES:Dn("QUERY_GENERATION_FACTORIES",$c(i=>i.union([i.string(),i.boolean(),i.number(),i.null(),i.record(i.unknown())]))),PAGES:Dn("PAGES",fs(i=>{const n=i.lazy(()=>i.object({title:i.string().min(1),content:i.union([i.array(n),i.string().min(1)])}));return n})),EXTERNAL_LINKS:Dn("EXTERNAL_LINKS",fs(i=>i.object({label:i.string().min(1),href:i.string().min(1),position:i.union([i.literal("header"),i.literal("navigation")]).optional(),kind:i.string().min(1).optional(),group:i.string().min(1).optional()}))),DIRECTIVES:Dn("DIRECTIVES",fs(i=>i.object({name:i.string().min(1),args:i.array(i.string())})))};function Zb(){return{convert:i=>{if(i===null||i===void 0)return null;switch(typeof i){case"boolean":return i;case"string":const n=i.toLowerCase().trim();return n==="true"||n==="t"||n==="1";case"number":return i!==0;default:return null}},asString:i=>String(i),type:i=>i.boolean().optional()}}Dn("MAGIDOC_GENERATE",Zb());var ws={exports:{}};/**
 * @license
 * Lodash <https://lodash.com/>
 * Copyright OpenJS Foundation and other contributors <https://openjsf.org/>
 * Released under MIT license <https://lodash.com/license>
 * Based on Underscore.js 1.8.3 <http://underscorejs.org/LICENSE>
 * Copyright Jeremy Ashkenas, DocumentCloud and Investigative Reporters & Editors
 */ws.exports;(function(i,n){(function(){var t,s="4.17.21",a=200,l="Unsupported core-js use. Try https://npms.io/search?q=ponyfill.",u="Expected a function",f="Invalid `variable` option passed into `_.template`",d="__lodash_hash_undefined__",y=500,v="__lodash_placeholder__",w=1,N=2,C=4,R=1,L=2,Q=1,he=2,$e=4,Ee=8,ke=16,xe=32,nn=64,Je=128,dt=256,x=512,K=30,tn="...",Ct=800,zt=16,mr=1,fi=2,yr=3,rt=1/0,Un=9007199254740991,hi=17976931348623157e292,Qt=NaN,_n=4294967295,A=_n-1,$=_n>>>1,B=[["ary",Je],["bind",Q],["bindKey",he],["curry",Ee],["curryRight",ke],["flip",x],["partial",xe],["partialRight",nn],["rearg",dt]],U="[object Arguments]",de="[object Array]",Pe="[object AsyncFunction]",pe="[object Boolean]",An="[object Date]",Oi="[object DOMException]",xt="[object Error]",Ke="[object Function]",Vo="[object GeneratorFunction]",Mn="[object Map]",Ri="[object Number]",uh="[object Null]",pt="[object Object]",Yo="[object Promise]",ch="[object Proxy]",Li="[object RegExp]",$n="[object Set]",Pi="[object String]",vr="[object Symbol]",fh="[object Undefined]",Bi="[object WeakMap]",hh="[object WeakSet]",Ui="[object ArrayBuffer]",di="[object DataView]",Bs="[object Float32Array]",Us="[object Float64Array]",Ms="[object Int8Array]",$s="[object Int16Array]",Gs="[object Int32Array]",Ws="[object Uint8Array]",Vs="[object Uint8ClampedArray]",Ys="[object Uint16Array]",qs="[object Uint32Array]",dh=/\b__p \+= '';/g,ph=/\b(__p \+=) '' \+/g,gh=/(__e\(.*?\)|\b__t\)) \+\n'';/g,qo=/&(?:amp|lt|gt|quot|#39);/g,Ho=/[&<>"']/g,mh=RegExp(qo.source),yh=RegExp(Ho.source),vh=/<%-([\s\S]+?)%>/g,Th=/<%([\s\S]+?)%>/g,jo=/<%=([\s\S]+?)%>/g,bh=/\.|\[(?:[^[\]]*|(["'])(?:(?!\1)[^\\]|\\.)*?\1)\]/,wh=/^\w*$/,Eh=/[^.[\]]+|\[(?:(-?\d+(?:\.\d+)?)|(["'])((?:(?!\2)[^\\]|\\.)*?)\2)\]|(?=(?:\.|\[\])(?:\.|\[\]|$))/g,Hs=/[\\^$.*+?()[\]{}|]/g,Dh=RegExp(Hs.source),js=/^\s+/,Ih=/\s/,_h=/\{(?:\n\/\* \[wrapped with .+\] \*\/)?\n?/,Ah=/\{\n\/\* \[wrapped with (.+)\] \*/,Sh=/,? & /,kh=/[^\x00-\x2f\x3a-\x40\x5b-\x60\x7b-\x7f]+/g,Fh=/[()=,{}\[\]\/\s]/,Nh=/\\(\\)?/g,Ch=/\$\{([^\\}]*(?:\\.[^\\}]*)*)\}/g,zo=/\w*$/,xh=/^[-+]0x[0-9a-f]+$/i,Oh=/^0b[01]+$/i,Rh=/^\[object .+?Constructor\]$/,Lh=/^0o[0-7]+$/i,Ph=/^(?:0|[1-9]\d*)$/,Bh=/[\xc0-\xd6\xd8-\xf6\xf8-\xff\u0100-\u017f]/g,Tr=/($^)/,Uh=/['\n\r\u2028\u2029\\]/g,br="\\ud800-\\udfff",Mh="\\u0300-\\u036f",$h="\\ufe20-\\ufe2f",Gh="\\u20d0-\\u20ff",Qo=Mh+$h+Gh,Jo="\\u2700-\\u27bf",Ko="a-z\\xdf-\\xf6\\xf8-\\xff",Wh="\\xac\\xb1\\xd7\\xf7",Vh="\\x00-\\x2f\\x3a-\\x40\\x5b-\\x60\\x7b-\\xbf",Yh="\\u2000-\\u206f",qh=" \\t\\x0b\\f\\xa0\\ufeff\\n\\r\\u2028\\u2029\\u1680\\u180e\\u2000\\u2001\\u2002\\u2003\\u2004\\u2005\\u2006\\u2007\\u2008\\u2009\\u200a\\u202f\\u205f\\u3000",Xo="A-Z\\xc0-\\xd6\\xd8-\\xde",Zo="\\ufe0e\\ufe0f",el=Wh+Vh+Yh+qh,zs="['’]",Hh="["+br+"]",nl="["+el+"]",wr="["+Qo+"]",tl="\\d+",jh="["+Jo+"]",il="["+Ko+"]",rl="[^"+br+el+tl+Jo+Ko+Xo+"]",Qs="\\ud83c[\\udffb-\\udfff]",zh="(?:"+wr+"|"+Qs+")",sl="[^"+br+"]",Js="(?:\\ud83c[\\udde6-\\uddff]){2}",Ks="[\\ud800-\\udbff][\\udc00-\\udfff]",pi="["+Xo+"]",al="\\u200d",ol="(?:"+il+"|"+rl+")",Qh="(?:"+pi+"|"+rl+")",ll="(?:"+zs+"(?:d|ll|m|re|s|t|ve))?",ul="(?:"+zs+"(?:D|LL|M|RE|S|T|VE))?",cl=zh+"?",fl="["+Zo+"]?",Jh="(?:"+al+"(?:"+[sl,Js,Ks].join("|")+")"+fl+cl+")*",Kh="\\d*(?:1st|2nd|3rd|(?![123])\\dth)(?=\\b|[A-Z_])",Xh="\\d*(?:1ST|2ND|3RD|(?![123])\\dTH)(?=\\b|[a-z_])",hl=fl+cl+Jh,Zh="(?:"+[jh,Js,Ks].join("|")+")"+hl,ed="(?:"+[sl+wr+"?",wr,Js,Ks,Hh].join("|")+")",nd=RegExp(zs,"g"),td=RegExp(wr,"g"),Xs=RegExp(Qs+"(?="+Qs+")|"+ed+hl,"g"),id=RegExp([pi+"?"+il+"+"+ll+"(?="+[nl,pi,"$"].join("|")+")",Qh+"+"+ul+"(?="+[nl,pi+ol,"$"].join("|")+")",pi+"?"+ol+"+"+ll,pi+"+"+ul,Xh,Kh,tl,Zh].join("|"),"g"),rd=RegExp("["+al+br+Qo+Zo+"]"),sd=/[a-z][A-Z]|[A-Z]{2}[a-z]|[0-9][a-zA-Z]|[a-zA-Z][0-9]|[^a-zA-Z0-9 ]/,ad=["Array","Buffer","DataView","Date","Error","Float32Array","Float64Array","Function","Int8Array","Int16Array","Int32Array","Map","Math","Object","Promise","RegExp","Set","String","Symbol","TypeError","Uint8Array","Uint8ClampedArray","Uint16Array","Uint32Array","WeakMap","_","clearTimeout","isFinite","parseInt","setTimeout"],od=-1,_e={};_e[Bs]=_e[Us]=_e[Ms]=_e[$s]=_e[Gs]=_e[Ws]=_e[Vs]=_e[Ys]=_e[qs]=!0,_e[U]=_e[de]=_e[Ui]=_e[pe]=_e[di]=_e[An]=_e[xt]=_e[Ke]=_e[Mn]=_e[Ri]=_e[pt]=_e[Li]=_e[$n]=_e[Pi]=_e[Bi]=!1;var De={};De[U]=De[de]=De[Ui]=De[di]=De[pe]=De[An]=De[Bs]=De[Us]=De[Ms]=De[$s]=De[Gs]=De[Mn]=De[Ri]=De[pt]=De[Li]=De[$n]=De[Pi]=De[vr]=De[Ws]=De[Vs]=De[Ys]=De[qs]=!0,De[xt]=De[Ke]=De[Bi]=!1;var ld={À:"A",Á:"A",Â:"A",Ã:"A",Ä:"A",Å:"A",à:"a",á:"a",â:"a",ã:"a",ä:"a",å:"a",Ç:"C",ç:"c",Ð:"D",ð:"d",È:"E",É:"E",Ê:"E",Ë:"E",è:"e",é:"e",ê:"e",ë:"e",Ì:"I",Í:"I",Î:"I",Ï:"I",ì:"i",í:"i",î:"i",ï:"i",Ñ:"N",ñ:"n",Ò:"O",Ó:"O",Ô:"O",Õ:"O",Ö:"O",Ø:"O",ò:"o",ó:"o",ô:"o",õ:"o",ö:"o",ø:"o",Ù:"U",Ú:"U",Û:"U",Ü:"U",ù:"u",ú:"u",û:"u",ü:"u",Ý:"Y",ý:"y",ÿ:"y",Æ:"Ae",æ:"ae",Þ:"Th",þ:"th",ß:"ss",Ā:"A",Ă:"A",Ą:"A",ā:"a",ă:"a",ą:"a",Ć:"C",Ĉ:"C",Ċ:"C",Č:"C",ć:"c",ĉ:"c",ċ:"c",č:"c",Ď:"D",Đ:"D",ď:"d",đ:"d",Ē:"E",Ĕ:"E",Ė:"E",Ę:"E",Ě:"E",ē:"e",ĕ:"e",ė:"e",ę:"e",ě:"e",Ĝ:"G",Ğ:"G",Ġ:"G",Ģ:"G",ĝ:"g",ğ:"g",ġ:"g",ģ:"g",Ĥ:"H",Ħ:"H",ĥ:"h",ħ:"h",Ĩ:"I",Ī:"I",Ĭ:"I",Į:"I",İ:"I",ĩ:"i",ī:"i",ĭ:"i",į:"i",ı:"i",Ĵ:"J",ĵ:"j",Ķ:"K",ķ:"k",ĸ:"k",Ĺ:"L",Ļ:"L",Ľ:"L",Ŀ:"L",Ł:"L",ĺ:"l",ļ:"l",ľ:"l",ŀ:"l",ł:"l",Ń:"N",Ņ:"N",Ň:"N",Ŋ:"N",ń:"n",ņ:"n",ň:"n",ŋ:"n",Ō:"O",Ŏ:"O",Ő:"O",ō:"o",ŏ:"o",ő:"o",Ŕ:"R",Ŗ:"R",Ř:"R",ŕ:"r",ŗ:"r",ř:"r",Ś:"S",Ŝ:"S",Ş:"S",Š:"S",ś:"s",ŝ:"s",ş:"s",š:"s",Ţ:"T",Ť:"T",Ŧ:"T",ţ:"t",ť:"t",ŧ:"t",Ũ:"U",Ū:"U",Ŭ:"U",Ů:"U",Ű:"U",Ų:"U",ũ:"u",ū:"u",ŭ:"u",ů:"u",ű:"u",ų:"u",Ŵ:"W",ŵ:"w",Ŷ:"Y",ŷ:"y",Ÿ:"Y",Ź:"Z",Ż:"Z",Ž:"Z",ź:"z",ż:"z",ž:"z",Ĳ:"IJ",ĳ:"ij",Œ:"Oe",œ:"oe",ŉ:"'n",ſ:"s"},ud={"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;","'":"&#39;"},cd={"&amp;":"&","&lt;":"<","&gt;":">","&quot;":'"',"&#39;":"'"},fd={"\\":"\\","'":"'","\n":"n","\r":"r","\u2028":"u2028","\u2029":"u2029"},hd=parseFloat,dd=parseInt,dl=typeof nr=="object"&&nr&&nr.Object===Object&&nr,pd=typeof self=="object"&&self&&self.Object===Object&&self,je=dl||pd||Function("return this")(),Zs=n&&!n.nodeType&&n,Jt=Zs&&!0&&i&&!i.nodeType&&i,pl=Jt&&Jt.exports===Zs,ea=pl&&dl.process,Sn=function(){try{var b=Jt&&Jt.require&&Jt.require("util").types;return b||ea&&ea.binding&&ea.binding("util")}catch{}}(),gl=Sn&&Sn.isArrayBuffer,ml=Sn&&Sn.isDate,yl=Sn&&Sn.isMap,vl=Sn&&Sn.isRegExp,Tl=Sn&&Sn.isSet,bl=Sn&&Sn.isTypedArray;function yn(b,_,I){switch(I.length){case 0:return b.call(_);case 1:return b.call(_,I[0]);case 2:return b.call(_,I[0],I[1]);case 3:return b.call(_,I[0],I[1],I[2])}return b.apply(_,I)}function gd(b,_,I,M){for(var X=-1,fe=b==null?0:b.length;++X<fe;){var Ve=b[X];_(M,Ve,I(Ve),b)}return M}function kn(b,_){for(var I=-1,M=b==null?0:b.length;++I<M&&_(b[I],I,b)!==!1;);return b}function md(b,_){for(var I=b==null?0:b.length;I--&&_(b[I],I,b)!==!1;);return b}function wl(b,_){for(var I=-1,M=b==null?0:b.length;++I<M;)if(!_(b[I],I,b))return!1;return!0}function Ot(b,_){for(var I=-1,M=b==null?0:b.length,X=0,fe=[];++I<M;){var Ve=b[I];_(Ve,I,b)&&(fe[X++]=Ve)}return fe}function Er(b,_){var I=b==null?0:b.length;return!!I&&gi(b,_,0)>-1}function na(b,_,I){for(var M=-1,X=b==null?0:b.length;++M<X;)if(I(_,b[M]))return!0;return!1}function Ae(b,_){for(var I=-1,M=b==null?0:b.length,X=Array(M);++I<M;)X[I]=_(b[I],I,b);return X}function Rt(b,_){for(var I=-1,M=_.length,X=b.length;++I<M;)b[X+I]=_[I];return b}function ta(b,_,I,M){var X=-1,fe=b==null?0:b.length;for(M&&fe&&(I=b[++X]);++X<fe;)I=_(I,b[X],X,b);return I}function yd(b,_,I,M){var X=b==null?0:b.length;for(M&&X&&(I=b[--X]);X--;)I=_(I,b[X],X,b);return I}function ia(b,_){for(var I=-1,M=b==null?0:b.length;++I<M;)if(_(b[I],I,b))return!0;return!1}var vd=ra("length");function Td(b){return b.split("")}function bd(b){return b.match(kh)||[]}function El(b,_,I){var M;return I(b,function(X,fe,Ve){if(_(X,fe,Ve))return M=fe,!1}),M}function Dr(b,_,I,M){for(var X=b.length,fe=I+(M?1:-1);M?fe--:++fe<X;)if(_(b[fe],fe,b))return fe;return-1}function gi(b,_,I){return _===_?xd(b,_,I):Dr(b,Dl,I)}function wd(b,_,I,M){for(var X=I-1,fe=b.length;++X<fe;)if(M(b[X],_))return X;return-1}function Dl(b){return b!==b}function Il(b,_){var I=b==null?0:b.length;return I?aa(b,_)/I:Qt}function ra(b){return function(_){return _==null?t:_[b]}}function sa(b){return function(_){return b==null?t:b[_]}}function _l(b,_,I,M,X){return X(b,function(fe,Ve,be){I=M?(M=!1,fe):_(I,fe,Ve,be)}),I}function Ed(b,_){var I=b.length;for(b.sort(_);I--;)b[I]=b[I].value;return b}function aa(b,_){for(var I,M=-1,X=b.length;++M<X;){var fe=_(b[M]);fe!==t&&(I=I===t?fe:I+fe)}return I}function oa(b,_){for(var I=-1,M=Array(b);++I<b;)M[I]=_(I);return M}function Dd(b,_){return Ae(_,function(I){return[I,b[I]]})}function Al(b){return b&&b.slice(0,Nl(b)+1).replace(js,"")}function vn(b){return function(_){return b(_)}}function la(b,_){return Ae(_,function(I){return b[I]})}function Mi(b,_){return b.has(_)}function Sl(b,_){for(var I=-1,M=b.length;++I<M&&gi(_,b[I],0)>-1;);return I}function kl(b,_){for(var I=b.length;I--&&gi(_,b[I],0)>-1;);return I}function Id(b,_){for(var I=b.length,M=0;I--;)b[I]===_&&++M;return M}var _d=sa(ld),Ad=sa(ud);function Sd(b){return"\\"+fd[b]}function kd(b,_){return b==null?t:b[_]}function mi(b){return rd.test(b)}function Fd(b){return sd.test(b)}function Nd(b){for(var _,I=[];!(_=b.next()).done;)I.push(_.value);return I}function ua(b){var _=-1,I=Array(b.size);return b.forEach(function(M,X){I[++_]=[X,M]}),I}function Fl(b,_){return function(I){return b(_(I))}}function Lt(b,_){for(var I=-1,M=b.length,X=0,fe=[];++I<M;){var Ve=b[I];(Ve===_||Ve===v)&&(b[I]=v,fe[X++]=I)}return fe}function Ir(b){var _=-1,I=Array(b.size);return b.forEach(function(M){I[++_]=M}),I}function Cd(b){var _=-1,I=Array(b.size);return b.forEach(function(M){I[++_]=[M,M]}),I}function xd(b,_,I){for(var M=I-1,X=b.length;++M<X;)if(b[M]===_)return M;return-1}function Od(b,_,I){for(var M=I+1;M--;)if(b[M]===_)return M;return M}function yi(b){return mi(b)?Ld(b):vd(b)}function Gn(b){return mi(b)?Pd(b):Td(b)}function Nl(b){for(var _=b.length;_--&&Ih.test(b.charAt(_)););return _}var Rd=sa(cd);function Ld(b){for(var _=Xs.lastIndex=0;Xs.test(b);)++_;return _}function Pd(b){return b.match(Xs)||[]}function Bd(b){return b.match(id)||[]}var Ud=function b(_){_=_==null?je:vi.defaults(je.Object(),_,vi.pick(je,ad));var I=_.Array,M=_.Date,X=_.Error,fe=_.Function,Ve=_.Math,be=_.Object,ca=_.RegExp,Md=_.String,Fn=_.TypeError,_r=I.prototype,$d=fe.prototype,Ti=be.prototype,Ar=_["__core-js_shared__"],Sr=$d.toString,me=Ti.hasOwnProperty,Gd=0,Cl=function(){var e=/[^.]+$/.exec(Ar&&Ar.keys&&Ar.keys.IE_PROTO||"");return e?"Symbol(src)_1."+e:""}(),kr=Ti.toString,Wd=Sr.call(be),Vd=je._,Yd=ca("^"+Sr.call(me).replace(Hs,"\\$&").replace(/hasOwnProperty|(function).*?(?=\\\()| for .+?(?=\\\])/g,"$1.*?")+"$"),Fr=pl?_.Buffer:t,Pt=_.Symbol,Nr=_.Uint8Array,xl=Fr?Fr.allocUnsafe:t,Cr=Fl(be.getPrototypeOf,be),Ol=be.create,Rl=Ti.propertyIsEnumerable,xr=_r.splice,Ll=Pt?Pt.isConcatSpreadable:t,$i=Pt?Pt.iterator:t,Kt=Pt?Pt.toStringTag:t,Or=function(){try{var e=ti(be,"defineProperty");return e({},"",{}),e}catch{}}(),qd=_.clearTimeout!==je.clearTimeout&&_.clearTimeout,Hd=M&&M.now!==je.Date.now&&M.now,jd=_.setTimeout!==je.setTimeout&&_.setTimeout,Rr=Ve.ceil,Lr=Ve.floor,fa=be.getOwnPropertySymbols,zd=Fr?Fr.isBuffer:t,Pl=_.isFinite,Qd=_r.join,Jd=Fl(be.keys,be),Ye=Ve.max,Xe=Ve.min,Kd=M.now,Xd=_.parseInt,Bl=Ve.random,Zd=_r.reverse,ha=ti(_,"DataView"),Gi=ti(_,"Map"),da=ti(_,"Promise"),bi=ti(_,"Set"),Wi=ti(_,"WeakMap"),Vi=ti(be,"create"),Pr=Wi&&new Wi,wi={},ep=ii(ha),np=ii(Gi),tp=ii(da),ip=ii(bi),rp=ii(Wi),Br=Pt?Pt.prototype:t,Yi=Br?Br.valueOf:t,Ul=Br?Br.toString:t;function p(e){if(Oe(e)&&!Z(e)&&!(e instanceof oe)){if(e instanceof Nn)return e;if(me.call(e,"__wrapped__"))return Mu(e)}return new Nn(e)}var Ei=function(){function e(){}return function(r){if(!Fe(r))return{};if(Ol)return Ol(r);e.prototype=r;var o=new e;return e.prototype=t,o}}();function Ur(){}function Nn(e,r){this.__wrapped__=e,this.__actions__=[],this.__chain__=!!r,this.__index__=0,this.__values__=t}p.templateSettings={escape:vh,evaluate:Th,interpolate:jo,variable:"",imports:{_:p}},p.prototype=Ur.prototype,p.prototype.constructor=p,Nn.prototype=Ei(Ur.prototype),Nn.prototype.constructor=Nn;function oe(e){this.__wrapped__=e,this.__actions__=[],this.__dir__=1,this.__filtered__=!1,this.__iteratees__=[],this.__takeCount__=_n,this.__views__=[]}function sp(){var e=new oe(this.__wrapped__);return e.__actions__=un(this.__actions__),e.__dir__=this.__dir__,e.__filtered__=this.__filtered__,e.__iteratees__=un(this.__iteratees__),e.__takeCount__=this.__takeCount__,e.__views__=un(this.__views__),e}function ap(){if(this.__filtered__){var e=new oe(this);e.__dir__=-1,e.__filtered__=!0}else e=this.clone(),e.__dir__*=-1;return e}function op(){var e=this.__wrapped__.value(),r=this.__dir__,o=Z(e),c=r<0,h=o?e.length:0,g=Tg(0,h,this.__views__),m=g.start,T=g.end,E=T-m,S=c?T:m-1,k=this.__iteratees__,O=k.length,P=0,W=Xe(E,this.__takeCount__);if(!o||!c&&h==E&&W==E)return lu(e,this.__actions__);var j=[];e:for(;E--&&P<W;){S+=r;for(var te=-1,z=e[S];++te<O;){var re=k[te],ue=re.iteratee,wn=re.type,an=ue(z);if(wn==fi)z=an;else if(!an){if(wn==mr)continue e;break e}}j[P++]=z}return j}oe.prototype=Ei(Ur.prototype),oe.prototype.constructor=oe;function Xt(e){var r=-1,o=e==null?0:e.length;for(this.clear();++r<o;){var c=e[r];this.set(c[0],c[1])}}function lp(){this.__data__=Vi?Vi(null):{},this.size=0}function up(e){var r=this.has(e)&&delete this.__data__[e];return this.size-=r?1:0,r}function cp(e){var r=this.__data__;if(Vi){var o=r[e];return o===d?t:o}return me.call(r,e)?r[e]:t}function fp(e){var r=this.__data__;return Vi?r[e]!==t:me.call(r,e)}function hp(e,r){var o=this.__data__;return this.size+=this.has(e)?0:1,o[e]=Vi&&r===t?d:r,this}Xt.prototype.clear=lp,Xt.prototype.delete=up,Xt.prototype.get=cp,Xt.prototype.has=fp,Xt.prototype.set=hp;function gt(e){var r=-1,o=e==null?0:e.length;for(this.clear();++r<o;){var c=e[r];this.set(c[0],c[1])}}function dp(){this.__data__=[],this.size=0}function pp(e){var r=this.__data__,o=Mr(r,e);if(o<0)return!1;var c=r.length-1;return o==c?r.pop():xr.call(r,o,1),--this.size,!0}function gp(e){var r=this.__data__,o=Mr(r,e);return o<0?t:r[o][1]}function mp(e){return Mr(this.__data__,e)>-1}function yp(e,r){var o=this.__data__,c=Mr(o,e);return c<0?(++this.size,o.push([e,r])):o[c][1]=r,this}gt.prototype.clear=dp,gt.prototype.delete=pp,gt.prototype.get=gp,gt.prototype.has=mp,gt.prototype.set=yp;function mt(e){var r=-1,o=e==null?0:e.length;for(this.clear();++r<o;){var c=e[r];this.set(c[0],c[1])}}function vp(){this.size=0,this.__data__={hash:new Xt,map:new(Gi||gt),string:new Xt}}function Tp(e){var r=Kr(this,e).delete(e);return this.size-=r?1:0,r}function bp(e){return Kr(this,e).get(e)}function wp(e){return Kr(this,e).has(e)}function Ep(e,r){var o=Kr(this,e),c=o.size;return o.set(e,r),this.size+=o.size==c?0:1,this}mt.prototype.clear=vp,mt.prototype.delete=Tp,mt.prototype.get=bp,mt.prototype.has=wp,mt.prototype.set=Ep;function Zt(e){var r=-1,o=e==null?0:e.length;for(this.__data__=new mt;++r<o;)this.add(e[r])}function Dp(e){return this.__data__.set(e,d),this}function Ip(e){return this.__data__.has(e)}Zt.prototype.add=Zt.prototype.push=Dp,Zt.prototype.has=Ip;function Wn(e){var r=this.__data__=new gt(e);this.size=r.size}function _p(){this.__data__=new gt,this.size=0}function Ap(e){var r=this.__data__,o=r.delete(e);return this.size=r.size,o}function Sp(e){return this.__data__.get(e)}function kp(e){return this.__data__.has(e)}function Fp(e,r){var o=this.__data__;if(o instanceof gt){var c=o.__data__;if(!Gi||c.length<a-1)return c.push([e,r]),this.size=++o.size,this;o=this.__data__=new mt(c)}return o.set(e,r),this.size=o.size,this}Wn.prototype.clear=_p,Wn.prototype.delete=Ap,Wn.prototype.get=Sp,Wn.prototype.has=kp,Wn.prototype.set=Fp;function Ml(e,r){var o=Z(e),c=!o&&ri(e),h=!o&&!c&&Gt(e),g=!o&&!c&&!h&&Ai(e),m=o||c||h||g,T=m?oa(e.length,Md):[],E=T.length;for(var S in e)(r||me.call(e,S))&&!(m&&(S=="length"||h&&(S=="offset"||S=="parent")||g&&(S=="buffer"||S=="byteLength"||S=="byteOffset")||bt(S,E)))&&T.push(S);return T}function $l(e){var r=e.length;return r?e[Ia(0,r-1)]:t}function Np(e,r){return Xr(un(e),ei(r,0,e.length))}function Cp(e){return Xr(un(e))}function pa(e,r,o){(o!==t&&!Vn(e[r],o)||o===t&&!(r in e))&&yt(e,r,o)}function qi(e,r,o){var c=e[r];(!(me.call(e,r)&&Vn(c,o))||o===t&&!(r in e))&&yt(e,r,o)}function Mr(e,r){for(var o=e.length;o--;)if(Vn(e[o][0],r))return o;return-1}function xp(e,r,o,c){return Bt(e,function(h,g,m){r(c,h,o(h),m)}),c}function Gl(e,r){return e&&at(r,qe(r),e)}function Op(e,r){return e&&at(r,fn(r),e)}function yt(e,r,o){r=="__proto__"&&Or?Or(e,r,{configurable:!0,enumerable:!0,value:o,writable:!0}):e[r]=o}function ga(e,r){for(var o=-1,c=r.length,h=I(c),g=e==null;++o<c;)h[o]=g?t:Qa(e,r[o]);return h}function ei(e,r,o){return e===e&&(o!==t&&(e=e<=o?e:o),r!==t&&(e=e>=r?e:r)),e}function Cn(e,r,o,c,h,g){var m,T=r&w,E=r&N,S=r&C;if(o&&(m=h?o(e,c,h,g):o(e)),m!==t)return m;if(!Fe(e))return e;var k=Z(e);if(k){if(m=wg(e),!T)return un(e,m)}else{var O=Ze(e),P=O==Ke||O==Vo;if(Gt(e))return fu(e,T);if(O==pt||O==U||P&&!h){if(m=E||P?{}:Nu(e),!T)return E?cg(e,Op(m,e)):ug(e,Gl(m,e))}else{if(!De[O])return h?e:{};m=Eg(e,O,T)}}g||(g=new Wn);var W=g.get(e);if(W)return W;g.set(e,m),sc(e)?e.forEach(function(z){m.add(Cn(z,r,o,z,e,g))}):ic(e)&&e.forEach(function(z,re){m.set(re,Cn(z,r,o,re,e,g))});var j=S?E?La:Ra:E?fn:qe,te=k?t:j(e);return kn(te||e,function(z,re){te&&(re=z,z=e[re]),qi(m,re,Cn(z,r,o,re,e,g))}),m}function Rp(e){var r=qe(e);return function(o){return Wl(o,e,r)}}function Wl(e,r,o){var c=o.length;if(e==null)return!c;for(e=be(e);c--;){var h=o[c],g=r[h],m=e[h];if(m===t&&!(h in e)||!g(m))return!1}return!0}function Vl(e,r,o){if(typeof e!="function")throw new Fn(u);return Xi(function(){e.apply(t,o)},r)}function Hi(e,r,o,c){var h=-1,g=Er,m=!0,T=e.length,E=[],S=r.length;if(!T)return E;o&&(r=Ae(r,vn(o))),c?(g=na,m=!1):r.length>=a&&(g=Mi,m=!1,r=new Zt(r));e:for(;++h<T;){var k=e[h],O=o==null?k:o(k);if(k=c||k!==0?k:0,m&&O===O){for(var P=S;P--;)if(r[P]===O)continue e;E.push(k)}else g(r,O,c)||E.push(k)}return E}var Bt=mu(st),Yl=mu(ya,!0);function Lp(e,r){var o=!0;return Bt(e,function(c,h,g){return o=!!r(c,h,g),o}),o}function $r(e,r,o){for(var c=-1,h=e.length;++c<h;){var g=e[c],m=r(g);if(m!=null&&(T===t?m===m&&!bn(m):o(m,T)))var T=m,E=g}return E}function Pp(e,r,o,c){var h=e.length;for(o=ne(o),o<0&&(o=-o>h?0:h+o),c=c===t||c>h?h:ne(c),c<0&&(c+=h),c=o>c?0:oc(c);o<c;)e[o++]=r;return e}function ql(e,r){var o=[];return Bt(e,function(c,h,g){r(c,h,g)&&o.push(c)}),o}function ze(e,r,o,c,h){var g=-1,m=e.length;for(o||(o=Ig),h||(h=[]);++g<m;){var T=e[g];r>0&&o(T)?r>1?ze(T,r-1,o,c,h):Rt(h,T):c||(h[h.length]=T)}return h}var ma=yu(),Hl=yu(!0);function st(e,r){return e&&ma(e,r,qe)}function ya(e,r){return e&&Hl(e,r,qe)}function Gr(e,r){return Ot(r,function(o){return wt(e[o])})}function ni(e,r){r=Mt(r,e);for(var o=0,c=r.length;e!=null&&o<c;)e=e[ot(r[o++])];return o&&o==c?e:t}function jl(e,r,o){var c=r(e);return Z(e)?c:Rt(c,o(e))}function rn(e){return e==null?e===t?fh:uh:Kt&&Kt in be(e)?vg(e):Cg(e)}function va(e,r){return e>r}function Bp(e,r){return e!=null&&me.call(e,r)}function Up(e,r){return e!=null&&r in be(e)}function Mp(e,r,o){return e>=Xe(r,o)&&e<Ye(r,o)}function Ta(e,r,o){for(var c=o?na:Er,h=e[0].length,g=e.length,m=g,T=I(g),E=1/0,S=[];m--;){var k=e[m];m&&r&&(k=Ae(k,vn(r))),E=Xe(k.length,E),T[m]=!o&&(r||h>=120&&k.length>=120)?new Zt(m&&k):t}k=e[0];var O=-1,P=T[0];e:for(;++O<h&&S.length<E;){var W=k[O],j=r?r(W):W;if(W=o||W!==0?W:0,!(P?Mi(P,j):c(S,j,o))){for(m=g;--m;){var te=T[m];if(!(te?Mi(te,j):c(e[m],j,o)))continue e}P&&P.push(j),S.push(W)}}return S}function $p(e,r,o,c){return st(e,function(h,g,m){r(c,o(h),g,m)}),c}function ji(e,r,o){r=Mt(r,e),e=Ru(e,r);var c=e==null?e:e[ot(On(r))];return c==null?t:yn(c,e,o)}function zl(e){return Oe(e)&&rn(e)==U}function Gp(e){return Oe(e)&&rn(e)==Ui}function Wp(e){return Oe(e)&&rn(e)==An}function zi(e,r,o,c,h){return e===r?!0:e==null||r==null||!Oe(e)&&!Oe(r)?e!==e&&r!==r:Vp(e,r,o,c,zi,h)}function Vp(e,r,o,c,h,g){var m=Z(e),T=Z(r),E=m?de:Ze(e),S=T?de:Ze(r);E=E==U?pt:E,S=S==U?pt:S;var k=E==pt,O=S==pt,P=E==S;if(P&&Gt(e)){if(!Gt(r))return!1;m=!0,k=!1}if(P&&!k)return g||(g=new Wn),m||Ai(e)?Su(e,r,o,c,h,g):mg(e,r,E,o,c,h,g);if(!(o&R)){var W=k&&me.call(e,"__wrapped__"),j=O&&me.call(r,"__wrapped__");if(W||j){var te=W?e.value():e,z=j?r.value():r;return g||(g=new Wn),h(te,z,o,c,g)}}return P?(g||(g=new Wn),yg(e,r,o,c,h,g)):!1}function Yp(e){return Oe(e)&&Ze(e)==Mn}function ba(e,r,o,c){var h=o.length,g=h,m=!c;if(e==null)return!g;for(e=be(e);h--;){var T=o[h];if(m&&T[2]?T[1]!==e[T[0]]:!(T[0]in e))return!1}for(;++h<g;){T=o[h];var E=T[0],S=e[E],k=T[1];if(m&&T[2]){if(S===t&&!(E in e))return!1}else{var O=new Wn;if(c)var P=c(S,k,E,e,r,O);if(!(P===t?zi(k,S,R|L,c,O):P))return!1}}return!0}function Ql(e){if(!Fe(e)||Ag(e))return!1;var r=wt(e)?Yd:Rh;return r.test(ii(e))}function qp(e){return Oe(e)&&rn(e)==Li}function Hp(e){return Oe(e)&&Ze(e)==$n}function jp(e){return Oe(e)&&rs(e.length)&&!!_e[rn(e)]}function Jl(e){return typeof e=="function"?e:e==null?hn:typeof e=="object"?Z(e)?Zl(e[0],e[1]):Xl(e):vc(e)}function wa(e){if(!Ki(e))return Jd(e);var r=[];for(var o in be(e))me.call(e,o)&&o!="constructor"&&r.push(o);return r}function zp(e){if(!Fe(e))return Ng(e);var r=Ki(e),o=[];for(var c in e)c=="constructor"&&(r||!me.call(e,c))||o.push(c);return o}function Ea(e,r){return e<r}function Kl(e,r){var o=-1,c=cn(e)?I(e.length):[];return Bt(e,function(h,g,m){c[++o]=r(h,g,m)}),c}function Xl(e){var r=Ba(e);return r.length==1&&r[0][2]?xu(r[0][0],r[0][1]):function(o){return o===e||ba(o,e,r)}}function Zl(e,r){return Ma(e)&&Cu(r)?xu(ot(e),r):function(o){var c=Qa(o,e);return c===t&&c===r?Ja(o,e):zi(r,c,R|L)}}function Wr(e,r,o,c,h){e!==r&&ma(r,function(g,m){if(h||(h=new Wn),Fe(g))Qp(e,r,m,o,Wr,c,h);else{var T=c?c(Ga(e,m),g,m+"",e,r,h):t;T===t&&(T=g),pa(e,m,T)}},fn)}function Qp(e,r,o,c,h,g,m){var T=Ga(e,o),E=Ga(r,o),S=m.get(E);if(S){pa(e,o,S);return}var k=g?g(T,E,o+"",e,r,m):t,O=k===t;if(O){var P=Z(E),W=!P&&Gt(E),j=!P&&!W&&Ai(E);k=E,P||W||j?Z(T)?k=T:Be(T)?k=un(T):W?(O=!1,k=fu(E,!0)):j?(O=!1,k=hu(E,!0)):k=[]:Zi(E)||ri(E)?(k=T,ri(T)?k=lc(T):(!Fe(T)||wt(T))&&(k=Nu(E))):O=!1}O&&(m.set(E,k),h(k,E,c,g,m),m.delete(E)),pa(e,o,k)}function eu(e,r){var o=e.length;if(o)return r+=r<0?o:0,bt(r,o)?e[r]:t}function nu(e,r,o){r.length?r=Ae(r,function(g){return Z(g)?function(m){return ni(m,g.length===1?g[0]:g)}:g}):r=[hn];var c=-1;r=Ae(r,vn(H()));var h=Kl(e,function(g,m,T){var E=Ae(r,function(S){return S(g)});return{criteria:E,index:++c,value:g}});return Ed(h,function(g,m){return lg(g,m,o)})}function Jp(e,r){return tu(e,r,function(o,c){return Ja(e,c)})}function tu(e,r,o){for(var c=-1,h=r.length,g={};++c<h;){var m=r[c],T=ni(e,m);o(T,m)&&Qi(g,Mt(m,e),T)}return g}function Kp(e){return function(r){return ni(r,e)}}function Da(e,r,o,c){var h=c?wd:gi,g=-1,m=r.length,T=e;for(e===r&&(r=un(r)),o&&(T=Ae(e,vn(o)));++g<m;)for(var E=0,S=r[g],k=o?o(S):S;(E=h(T,k,E,c))>-1;)T!==e&&xr.call(T,E,1),xr.call(e,E,1);return e}function iu(e,r){for(var o=e?r.length:0,c=o-1;o--;){var h=r[o];if(o==c||h!==g){var g=h;bt(h)?xr.call(e,h,1):Sa(e,h)}}return e}function Ia(e,r){return e+Lr(Bl()*(r-e+1))}function Xp(e,r,o,c){for(var h=-1,g=Ye(Rr((r-e)/(o||1)),0),m=I(g);g--;)m[c?g:++h]=e,e+=o;return m}function _a(e,r){var o="";if(!e||r<1||r>Un)return o;do r%2&&(o+=e),r=Lr(r/2),r&&(e+=e);while(r);return o}function ie(e,r){return Wa(Ou(e,r,hn),e+"")}function Zp(e){return $l(Si(e))}function eg(e,r){var o=Si(e);return Xr(o,ei(r,0,o.length))}function Qi(e,r,o,c){if(!Fe(e))return e;r=Mt(r,e);for(var h=-1,g=r.length,m=g-1,T=e;T!=null&&++h<g;){var E=ot(r[h]),S=o;if(E==="__proto__"||E==="constructor"||E==="prototype")return e;if(h!=m){var k=T[E];S=c?c(k,E,T):t,S===t&&(S=Fe(k)?k:bt(r[h+1])?[]:{})}qi(T,E,S),T=T[E]}return e}var ru=Pr?function(e,r){return Pr.set(e,r),e}:hn,ng=Or?function(e,r){return Or(e,"toString",{configurable:!0,enumerable:!1,value:Xa(r),writable:!0})}:hn;function tg(e){return Xr(Si(e))}function xn(e,r,o){var c=-1,h=e.length;r<0&&(r=-r>h?0:h+r),o=o>h?h:o,o<0&&(o+=h),h=r>o?0:o-r>>>0,r>>>=0;for(var g=I(h);++c<h;)g[c]=e[c+r];return g}function ig(e,r){var o;return Bt(e,function(c,h,g){return o=r(c,h,g),!o}),!!o}function Vr(e,r,o){var c=0,h=e==null?c:e.length;if(typeof r=="number"&&r===r&&h<=$){for(;c<h;){var g=c+h>>>1,m=e[g];m!==null&&!bn(m)&&(o?m<=r:m<r)?c=g+1:h=g}return h}return Aa(e,r,hn,o)}function Aa(e,r,o,c){var h=0,g=e==null?0:e.length;if(g===0)return 0;r=o(r);for(var m=r!==r,T=r===null,E=bn(r),S=r===t;h<g;){var k=Lr((h+g)/2),O=o(e[k]),P=O!==t,W=O===null,j=O===O,te=bn(O);if(m)var z=c||j;else S?z=j&&(c||P):T?z=j&&P&&(c||!W):E?z=j&&P&&!W&&(c||!te):W||te?z=!1:z=c?O<=r:O<r;z?h=k+1:g=k}return Xe(g,A)}function su(e,r){for(var o=-1,c=e.length,h=0,g=[];++o<c;){var m=e[o],T=r?r(m):m;if(!o||!Vn(T,E)){var E=T;g[h++]=m===0?0:m}}return g}function au(e){return typeof e=="number"?e:bn(e)?Qt:+e}function Tn(e){if(typeof e=="string")return e;if(Z(e))return Ae(e,Tn)+"";if(bn(e))return Ul?Ul.call(e):"";var r=e+"";return r=="0"&&1/e==-rt?"-0":r}function Ut(e,r,o){var c=-1,h=Er,g=e.length,m=!0,T=[],E=T;if(o)m=!1,h=na;else if(g>=a){var S=r?null:pg(e);if(S)return Ir(S);m=!1,h=Mi,E=new Zt}else E=r?[]:T;e:for(;++c<g;){var k=e[c],O=r?r(k):k;if(k=o||k!==0?k:0,m&&O===O){for(var P=E.length;P--;)if(E[P]===O)continue e;r&&E.push(O),T.push(k)}else h(E,O,o)||(E!==T&&E.push(O),T.push(k))}return T}function Sa(e,r){return r=Mt(r,e),e=Ru(e,r),e==null||delete e[ot(On(r))]}function ou(e,r,o,c){return Qi(e,r,o(ni(e,r)),c)}function Yr(e,r,o,c){for(var h=e.length,g=c?h:-1;(c?g--:++g<h)&&r(e[g],g,e););return o?xn(e,c?0:g,c?g+1:h):xn(e,c?g+1:0,c?h:g)}function lu(e,r){var o=e;return o instanceof oe&&(o=o.value()),ta(r,function(c,h){return h.func.apply(h.thisArg,Rt([c],h.args))},o)}function ka(e,r,o){var c=e.length;if(c<2)return c?Ut(e[0]):[];for(var h=-1,g=I(c);++h<c;)for(var m=e[h],T=-1;++T<c;)T!=h&&(g[h]=Hi(g[h]||m,e[T],r,o));return Ut(ze(g,1),r,o)}function uu(e,r,o){for(var c=-1,h=e.length,g=r.length,m={};++c<h;){var T=c<g?r[c]:t;o(m,e[c],T)}return m}function Fa(e){return Be(e)?e:[]}function Na(e){return typeof e=="function"?e:hn}function Mt(e,r){return Z(e)?e:Ma(e,r)?[e]:Uu(ge(e))}var rg=ie;function $t(e,r,o){var c=e.length;return o=o===t?c:o,!r&&o>=c?e:xn(e,r,o)}var cu=qd||function(e){return je.clearTimeout(e)};function fu(e,r){if(r)return e.slice();var o=e.length,c=xl?xl(o):new e.constructor(o);return e.copy(c),c}function Ca(e){var r=new e.constructor(e.byteLength);return new Nr(r).set(new Nr(e)),r}function sg(e,r){var o=r?Ca(e.buffer):e.buffer;return new e.constructor(o,e.byteOffset,e.byteLength)}function ag(e){var r=new e.constructor(e.source,zo.exec(e));return r.lastIndex=e.lastIndex,r}function og(e){return Yi?be(Yi.call(e)):{}}function hu(e,r){var o=r?Ca(e.buffer):e.buffer;return new e.constructor(o,e.byteOffset,e.length)}function du(e,r){if(e!==r){var o=e!==t,c=e===null,h=e===e,g=bn(e),m=r!==t,T=r===null,E=r===r,S=bn(r);if(!T&&!S&&!g&&e>r||g&&m&&E&&!T&&!S||c&&m&&E||!o&&E||!h)return 1;if(!c&&!g&&!S&&e<r||S&&o&&h&&!c&&!g||T&&o&&h||!m&&h||!E)return-1}return 0}function lg(e,r,o){for(var c=-1,h=e.criteria,g=r.criteria,m=h.length,T=o.length;++c<m;){var E=du(h[c],g[c]);if(E){if(c>=T)return E;var S=o[c];return E*(S=="desc"?-1:1)}}return e.index-r.index}function pu(e,r,o,c){for(var h=-1,g=e.length,m=o.length,T=-1,E=r.length,S=Ye(g-m,0),k=I(E+S),O=!c;++T<E;)k[T]=r[T];for(;++h<m;)(O||h<g)&&(k[o[h]]=e[h]);for(;S--;)k[T++]=e[h++];return k}function gu(e,r,o,c){for(var h=-1,g=e.length,m=-1,T=o.length,E=-1,S=r.length,k=Ye(g-T,0),O=I(k+S),P=!c;++h<k;)O[h]=e[h];for(var W=h;++E<S;)O[W+E]=r[E];for(;++m<T;)(P||h<g)&&(O[W+o[m]]=e[h++]);return O}function un(e,r){var o=-1,c=e.length;for(r||(r=I(c));++o<c;)r[o]=e[o];return r}function at(e,r,o,c){var h=!o;o||(o={});for(var g=-1,m=r.length;++g<m;){var T=r[g],E=c?c(o[T],e[T],T,o,e):t;E===t&&(E=e[T]),h?yt(o,T,E):qi(o,T,E)}return o}function ug(e,r){return at(e,Ua(e),r)}function cg(e,r){return at(e,ku(e),r)}function qr(e,r){return function(o,c){var h=Z(o)?gd:xp,g=r?r():{};return h(o,e,H(c,2),g)}}function Di(e){return ie(function(r,o){var c=-1,h=o.length,g=h>1?o[h-1]:t,m=h>2?o[2]:t;for(g=e.length>3&&typeof g=="function"?(h--,g):t,m&&sn(o[0],o[1],m)&&(g=h<3?t:g,h=1),r=be(r);++c<h;){var T=o[c];T&&e(r,T,c,g)}return r})}function mu(e,r){return function(o,c){if(o==null)return o;if(!cn(o))return e(o,c);for(var h=o.length,g=r?h:-1,m=be(o);(r?g--:++g<h)&&c(m[g],g,m)!==!1;);return o}}function yu(e){return function(r,o,c){for(var h=-1,g=be(r),m=c(r),T=m.length;T--;){var E=m[e?T:++h];if(o(g[E],E,g)===!1)break}return r}}function fg(e,r,o){var c=r&Q,h=Ji(e);function g(){var m=this&&this!==je&&this instanceof g?h:e;return m.apply(c?o:this,arguments)}return g}function vu(e){return function(r){r=ge(r);var o=mi(r)?Gn(r):t,c=o?o[0]:r.charAt(0),h=o?$t(o,1).join(""):r.slice(1);return c[e]()+h}}function Ii(e){return function(r){return ta(mc(gc(r).replace(nd,"")),e,"")}}function Ji(e){return function(){var r=arguments;switch(r.length){case 0:return new e;case 1:return new e(r[0]);case 2:return new e(r[0],r[1]);case 3:return new e(r[0],r[1],r[2]);case 4:return new e(r[0],r[1],r[2],r[3]);case 5:return new e(r[0],r[1],r[2],r[3],r[4]);case 6:return new e(r[0],r[1],r[2],r[3],r[4],r[5]);case 7:return new e(r[0],r[1],r[2],r[3],r[4],r[5],r[6])}var o=Ei(e.prototype),c=e.apply(o,r);return Fe(c)?c:o}}function hg(e,r,o){var c=Ji(e);function h(){for(var g=arguments.length,m=I(g),T=g,E=_i(h);T--;)m[T]=arguments[T];var S=g<3&&m[0]!==E&&m[g-1]!==E?[]:Lt(m,E);if(g-=S.length,g<o)return Du(e,r,Hr,h.placeholder,t,m,S,t,t,o-g);var k=this&&this!==je&&this instanceof h?c:e;return yn(k,this,m)}return h}function Tu(e){return function(r,o,c){var h=be(r);if(!cn(r)){var g=H(o,3);r=qe(r),o=function(T){return g(h[T],T,h)}}var m=e(r,o,c);return m>-1?h[g?r[m]:m]:t}}function bu(e){return Tt(function(r){var o=r.length,c=o,h=Nn.prototype.thru;for(e&&r.reverse();c--;){var g=r[c];if(typeof g!="function")throw new Fn(u);if(h&&!m&&Jr(g)=="wrapper")var m=new Nn([],!0)}for(c=m?c:o;++c<o;){g=r[c];var T=Jr(g),E=T=="wrapper"?Pa(g):t;E&&$a(E[0])&&E[1]==(Je|Ee|xe|dt)&&!E[4].length&&E[9]==1?m=m[Jr(E[0])].apply(m,E[3]):m=g.length==1&&$a(g)?m[T]():m.thru(g)}return function(){var S=arguments,k=S[0];if(m&&S.length==1&&Z(k))return m.plant(k).value();for(var O=0,P=o?r[O].apply(this,S):k;++O<o;)P=r[O].call(this,P);return P}})}function Hr(e,r,o,c,h,g,m,T,E,S){var k=r&Je,O=r&Q,P=r&he,W=r&(Ee|ke),j=r&x,te=P?t:Ji(e);function z(){for(var re=arguments.length,ue=I(re),wn=re;wn--;)ue[wn]=arguments[wn];if(W)var an=_i(z),En=Id(ue,an);if(c&&(ue=pu(ue,c,h,W)),g&&(ue=gu(ue,g,m,W)),re-=En,W&&re<S){var Ue=Lt(ue,an);return Du(e,r,Hr,z.placeholder,o,ue,Ue,T,E,S-re)}var Yn=O?o:this,Dt=P?Yn[e]:e;return re=ue.length,T?ue=xg(ue,T):j&&re>1&&ue.reverse(),k&&E<re&&(ue.length=E),this&&this!==je&&this instanceof z&&(Dt=te||Ji(Dt)),Dt.apply(Yn,ue)}return z}function wu(e,r){return function(o,c){return $p(o,e,r(c),{})}}function jr(e,r){return function(o,c){var h;if(o===t&&c===t)return r;if(o!==t&&(h=o),c!==t){if(h===t)return c;typeof o=="string"||typeof c=="string"?(o=Tn(o),c=Tn(c)):(o=au(o),c=au(c)),h=e(o,c)}return h}}function xa(e){return Tt(function(r){return r=Ae(r,vn(H())),ie(function(o){var c=this;return e(r,function(h){return yn(h,c,o)})})})}function zr(e,r){r=r===t?" ":Tn(r);var o=r.length;if(o<2)return o?_a(r,e):r;var c=_a(r,Rr(e/yi(r)));return mi(r)?$t(Gn(c),0,e).join(""):c.slice(0,e)}function dg(e,r,o,c){var h=r&Q,g=Ji(e);function m(){for(var T=-1,E=arguments.length,S=-1,k=c.length,O=I(k+E),P=this&&this!==je&&this instanceof m?g:e;++S<k;)O[S]=c[S];for(;E--;)O[S++]=arguments[++T];return yn(P,h?o:this,O)}return m}function Eu(e){return function(r,o,c){return c&&typeof c!="number"&&sn(r,o,c)&&(o=c=t),r=Et(r),o===t?(o=r,r=0):o=Et(o),c=c===t?r<o?1:-1:Et(c),Xp(r,o,c,e)}}function Qr(e){return function(r,o){return typeof r=="string"&&typeof o=="string"||(r=Rn(r),o=Rn(o)),e(r,o)}}function Du(e,r,o,c,h,g,m,T,E,S){var k=r&Ee,O=k?m:t,P=k?t:m,W=k?g:t,j=k?t:g;r|=k?xe:nn,r&=~(k?nn:xe),r&$e||(r&=~(Q|he));var te=[e,r,h,W,O,j,P,T,E,S],z=o.apply(t,te);return $a(e)&&Lu(z,te),z.placeholder=c,Pu(z,e,r)}function Oa(e){var r=Ve[e];return function(o,c){if(o=Rn(o),c=c==null?0:Xe(ne(c),292),c&&Pl(o)){var h=(ge(o)+"e").split("e"),g=r(h[0]+"e"+(+h[1]+c));return h=(ge(g)+"e").split("e"),+(h[0]+"e"+(+h[1]-c))}return r(o)}}var pg=bi&&1/Ir(new bi([,-0]))[1]==rt?function(e){return new bi(e)}:no;function Iu(e){return function(r){var o=Ze(r);return o==Mn?ua(r):o==$n?Cd(r):Dd(r,e(r))}}function vt(e,r,o,c,h,g,m,T){var E=r&he;if(!E&&typeof e!="function")throw new Fn(u);var S=c?c.length:0;if(S||(r&=~(xe|nn),c=h=t),m=m===t?m:Ye(ne(m),0),T=T===t?T:ne(T),S-=h?h.length:0,r&nn){var k=c,O=h;c=h=t}var P=E?t:Pa(e),W=[e,r,o,c,h,k,O,g,m,T];if(P&&Fg(W,P),e=W[0],r=W[1],o=W[2],c=W[3],h=W[4],T=W[9]=W[9]===t?E?0:e.length:Ye(W[9]-S,0),!T&&r&(Ee|ke)&&(r&=~(Ee|ke)),!r||r==Q)var j=fg(e,r,o);else r==Ee||r==ke?j=hg(e,r,T):(r==xe||r==(Q|xe))&&!h.length?j=dg(e,r,o,c):j=Hr.apply(t,W);var te=P?ru:Lu;return Pu(te(j,W),e,r)}function _u(e,r,o,c){return e===t||Vn(e,Ti[o])&&!me.call(c,o)?r:e}function Au(e,r,o,c,h,g){return Fe(e)&&Fe(r)&&(g.set(r,e),Wr(e,r,t,Au,g),g.delete(r)),e}function gg(e){return Zi(e)?t:e}function Su(e,r,o,c,h,g){var m=o&R,T=e.length,E=r.length;if(T!=E&&!(m&&E>T))return!1;var S=g.get(e),k=g.get(r);if(S&&k)return S==r&&k==e;var O=-1,P=!0,W=o&L?new Zt:t;for(g.set(e,r),g.set(r,e);++O<T;){var j=e[O],te=r[O];if(c)var z=m?c(te,j,O,r,e,g):c(j,te,O,e,r,g);if(z!==t){if(z)continue;P=!1;break}if(W){if(!ia(r,function(re,ue){if(!Mi(W,ue)&&(j===re||h(j,re,o,c,g)))return W.push(ue)})){P=!1;break}}else if(!(j===te||h(j,te,o,c,g))){P=!1;break}}return g.delete(e),g.delete(r),P}function mg(e,r,o,c,h,g,m){switch(o){case di:if(e.byteLength!=r.byteLength||e.byteOffset!=r.byteOffset)return!1;e=e.buffer,r=r.buffer;case Ui:return!(e.byteLength!=r.byteLength||!g(new Nr(e),new Nr(r)));case pe:case An:case Ri:return Vn(+e,+r);case xt:return e.name==r.name&&e.message==r.message;case Li:case Pi:return e==r+"";case Mn:var T=ua;case $n:var E=c&R;if(T||(T=Ir),e.size!=r.size&&!E)return!1;var S=m.get(e);if(S)return S==r;c|=L,m.set(e,r);var k=Su(T(e),T(r),c,h,g,m);return m.delete(e),k;case vr:if(Yi)return Yi.call(e)==Yi.call(r)}return!1}function yg(e,r,o,c,h,g){var m=o&R,T=Ra(e),E=T.length,S=Ra(r),k=S.length;if(E!=k&&!m)return!1;for(var O=E;O--;){var P=T[O];if(!(m?P in r:me.call(r,P)))return!1}var W=g.get(e),j=g.get(r);if(W&&j)return W==r&&j==e;var te=!0;g.set(e,r),g.set(r,e);for(var z=m;++O<E;){P=T[O];var re=e[P],ue=r[P];if(c)var wn=m?c(ue,re,P,r,e,g):c(re,ue,P,e,r,g);if(!(wn===t?re===ue||h(re,ue,o,c,g):wn)){te=!1;break}z||(z=P=="constructor")}if(te&&!z){var an=e.constructor,En=r.constructor;an!=En&&"constructor"in e&&"constructor"in r&&!(typeof an=="function"&&an instanceof an&&typeof En=="function"&&En instanceof En)&&(te=!1)}return g.delete(e),g.delete(r),te}function Tt(e){return Wa(Ou(e,t,Wu),e+"")}function Ra(e){return jl(e,qe,Ua)}function La(e){return jl(e,fn,ku)}var Pa=Pr?function(e){return Pr.get(e)}:no;function Jr(e){for(var r=e.name+"",o=wi[r],c=me.call(wi,r)?o.length:0;c--;){var h=o[c],g=h.func;if(g==null||g==e)return h.name}return r}function _i(e){var r=me.call(p,"placeholder")?p:e;return r.placeholder}function H(){var e=p.iteratee||Za;return e=e===Za?Jl:e,arguments.length?e(arguments[0],arguments[1]):e}function Kr(e,r){var o=e.__data__;return _g(r)?o[typeof r=="string"?"string":"hash"]:o.map}function Ba(e){for(var r=qe(e),o=r.length;o--;){var c=r[o],h=e[c];r[o]=[c,h,Cu(h)]}return r}function ti(e,r){var o=kd(e,r);return Ql(o)?o:t}function vg(e){var r=me.call(e,Kt),o=e[Kt];try{e[Kt]=t;var c=!0}catch{}var h=kr.call(e);return c&&(r?e[Kt]=o:delete e[Kt]),h}var Ua=fa?function(e){return e==null?[]:(e=be(e),Ot(fa(e),function(r){return Rl.call(e,r)}))}:to,ku=fa?function(e){for(var r=[];e;)Rt(r,Ua(e)),e=Cr(e);return r}:to,Ze=rn;(ha&&Ze(new ha(new ArrayBuffer(1)))!=di||Gi&&Ze(new Gi)!=Mn||da&&Ze(da.resolve())!=Yo||bi&&Ze(new bi)!=$n||Wi&&Ze(new Wi)!=Bi)&&(Ze=function(e){var r=rn(e),o=r==pt?e.constructor:t,c=o?ii(o):"";if(c)switch(c){case ep:return di;case np:return Mn;case tp:return Yo;case ip:return $n;case rp:return Bi}return r});function Tg(e,r,o){for(var c=-1,h=o.length;++c<h;){var g=o[c],m=g.size;switch(g.type){case"drop":e+=m;break;case"dropRight":r-=m;break;case"take":r=Xe(r,e+m);break;case"takeRight":e=Ye(e,r-m);break}}return{start:e,end:r}}function bg(e){var r=e.match(Ah);return r?r[1].split(Sh):[]}function Fu(e,r,o){r=Mt(r,e);for(var c=-1,h=r.length,g=!1;++c<h;){var m=ot(r[c]);if(!(g=e!=null&&o(e,m)))break;e=e[m]}return g||++c!=h?g:(h=e==null?0:e.length,!!h&&rs(h)&&bt(m,h)&&(Z(e)||ri(e)))}function wg(e){var r=e.length,o=new e.constructor(r);return r&&typeof e[0]=="string"&&me.call(e,"index")&&(o.index=e.index,o.input=e.input),o}function Nu(e){return typeof e.constructor=="function"&&!Ki(e)?Ei(Cr(e)):{}}function Eg(e,r,o){var c=e.constructor;switch(r){case Ui:return Ca(e);case pe:case An:return new c(+e);case di:return sg(e,o);case Bs:case Us:case Ms:case $s:case Gs:case Ws:case Vs:case Ys:case qs:return hu(e,o);case Mn:return new c;case Ri:case Pi:return new c(e);case Li:return ag(e);case $n:return new c;case vr:return og(e)}}function Dg(e,r){var o=r.length;if(!o)return e;var c=o-1;return r[c]=(o>1?"& ":"")+r[c],r=r.join(o>2?", ":" "),e.replace(_h,`{
/* [wrapped with `+r+`] */
`)}function Ig(e){return Z(e)||ri(e)||!!(Ll&&e&&e[Ll])}function bt(e,r){var o=typeof e;return r=r??Un,!!r&&(o=="number"||o!="symbol"&&Ph.test(e))&&e>-1&&e%1==0&&e<r}function sn(e,r,o){if(!Fe(o))return!1;var c=typeof r;return(c=="number"?cn(o)&&bt(r,o.length):c=="string"&&r in o)?Vn(o[r],e):!1}function Ma(e,r){if(Z(e))return!1;var o=typeof e;return o=="number"||o=="symbol"||o=="boolean"||e==null||bn(e)?!0:wh.test(e)||!bh.test(e)||r!=null&&e in be(r)}function _g(e){var r=typeof e;return r=="string"||r=="number"||r=="symbol"||r=="boolean"?e!=="__proto__":e===null}function $a(e){var r=Jr(e),o=p[r];if(typeof o!="function"||!(r in oe.prototype))return!1;if(e===o)return!0;var c=Pa(o);return!!c&&e===c[0]}function Ag(e){return!!Cl&&Cl in e}var Sg=Ar?wt:io;function Ki(e){var r=e&&e.constructor,o=typeof r=="function"&&r.prototype||Ti;return e===o}function Cu(e){return e===e&&!Fe(e)}function xu(e,r){return function(o){return o==null?!1:o[e]===r&&(r!==t||e in be(o))}}function kg(e){var r=ts(e,function(c){return o.size===y&&o.clear(),c}),o=r.cache;return r}function Fg(e,r){var o=e[1],c=r[1],h=o|c,g=h<(Q|he|Je),m=c==Je&&o==Ee||c==Je&&o==dt&&e[7].length<=r[8]||c==(Je|dt)&&r[7].length<=r[8]&&o==Ee;if(!(g||m))return e;c&Q&&(e[2]=r[2],h|=o&Q?0:$e);var T=r[3];if(T){var E=e[3];e[3]=E?pu(E,T,r[4]):T,e[4]=E?Lt(e[3],v):r[4]}return T=r[5],T&&(E=e[5],e[5]=E?gu(E,T,r[6]):T,e[6]=E?Lt(e[5],v):r[6]),T=r[7],T&&(e[7]=T),c&Je&&(e[8]=e[8]==null?r[8]:Xe(e[8],r[8])),e[9]==null&&(e[9]=r[9]),e[0]=r[0],e[1]=h,e}function Ng(e){var r=[];if(e!=null)for(var o in be(e))r.push(o);return r}function Cg(e){return kr.call(e)}function Ou(e,r,o){return r=Ye(r===t?e.length-1:r,0),function(){for(var c=arguments,h=-1,g=Ye(c.length-r,0),m=I(g);++h<g;)m[h]=c[r+h];h=-1;for(var T=I(r+1);++h<r;)T[h]=c[h];return T[r]=o(m),yn(e,this,T)}}function Ru(e,r){return r.length<2?e:ni(e,xn(r,0,-1))}function xg(e,r){for(var o=e.length,c=Xe(r.length,o),h=un(e);c--;){var g=r[c];e[c]=bt(g,o)?h[g]:t}return e}function Ga(e,r){if(!(r==="constructor"&&typeof e[r]=="function")&&r!="__proto__")return e[r]}var Lu=Bu(ru),Xi=jd||function(e,r){return je.setTimeout(e,r)},Wa=Bu(ng);function Pu(e,r,o){var c=r+"";return Wa(e,Dg(c,Og(bg(c),o)))}function Bu(e){var r=0,o=0;return function(){var c=Kd(),h=zt-(c-o);if(o=c,h>0){if(++r>=Ct)return arguments[0]}else r=0;return e.apply(t,arguments)}}function Xr(e,r){var o=-1,c=e.length,h=c-1;for(r=r===t?c:r;++o<r;){var g=Ia(o,h),m=e[g];e[g]=e[o],e[o]=m}return e.length=r,e}var Uu=kg(function(e){var r=[];return e.charCodeAt(0)===46&&r.push(""),e.replace(Eh,function(o,c,h,g){r.push(h?g.replace(Nh,"$1"):c||o)}),r});function ot(e){if(typeof e=="string"||bn(e))return e;var r=e+"";return r=="0"&&1/e==-rt?"-0":r}function ii(e){if(e!=null){try{return Sr.call(e)}catch{}try{return e+""}catch{}}return""}function Og(e,r){return kn(B,function(o){var c="_."+o[0];r&o[1]&&!Er(e,c)&&e.push(c)}),e.sort()}function Mu(e){if(e instanceof oe)return e.clone();var r=new Nn(e.__wrapped__,e.__chain__);return r.__actions__=un(e.__actions__),r.__index__=e.__index__,r.__values__=e.__values__,r}function Rg(e,r,o){(o?sn(e,r,o):r===t)?r=1:r=Ye(ne(r),0);var c=e==null?0:e.length;if(!c||r<1)return[];for(var h=0,g=0,m=I(Rr(c/r));h<c;)m[g++]=xn(e,h,h+=r);return m}function Lg(e){for(var r=-1,o=e==null?0:e.length,c=0,h=[];++r<o;){var g=e[r];g&&(h[c++]=g)}return h}function Pg(){var e=arguments.length;if(!e)return[];for(var r=I(e-1),o=arguments[0],c=e;c--;)r[c-1]=arguments[c];return Rt(Z(o)?un(o):[o],ze(r,1))}var Bg=ie(function(e,r){return Be(e)?Hi(e,ze(r,1,Be,!0)):[]}),Ug=ie(function(e,r){var o=On(r);return Be(o)&&(o=t),Be(e)?Hi(e,ze(r,1,Be,!0),H(o,2)):[]}),Mg=ie(function(e,r){var o=On(r);return Be(o)&&(o=t),Be(e)?Hi(e,ze(r,1,Be,!0),t,o):[]});function $g(e,r,o){var c=e==null?0:e.length;return c?(r=o||r===t?1:ne(r),xn(e,r<0?0:r,c)):[]}function Gg(e,r,o){var c=e==null?0:e.length;return c?(r=o||r===t?1:ne(r),r=c-r,xn(e,0,r<0?0:r)):[]}function Wg(e,r){return e&&e.length?Yr(e,H(r,3),!0,!0):[]}function Vg(e,r){return e&&e.length?Yr(e,H(r,3),!0):[]}function Yg(e,r,o,c){var h=e==null?0:e.length;return h?(o&&typeof o!="number"&&sn(e,r,o)&&(o=0,c=h),Pp(e,r,o,c)):[]}function $u(e,r,o){var c=e==null?0:e.length;if(!c)return-1;var h=o==null?0:ne(o);return h<0&&(h=Ye(c+h,0)),Dr(e,H(r,3),h)}function Gu(e,r,o){var c=e==null?0:e.length;if(!c)return-1;var h=c-1;return o!==t&&(h=ne(o),h=o<0?Ye(c+h,0):Xe(h,c-1)),Dr(e,H(r,3),h,!0)}function Wu(e){var r=e==null?0:e.length;return r?ze(e,1):[]}function qg(e){var r=e==null?0:e.length;return r?ze(e,rt):[]}function Hg(e,r){var o=e==null?0:e.length;return o?(r=r===t?1:ne(r),ze(e,r)):[]}function jg(e){for(var r=-1,o=e==null?0:e.length,c={};++r<o;){var h=e[r];c[h[0]]=h[1]}return c}function Vu(e){return e&&e.length?e[0]:t}function zg(e,r,o){var c=e==null?0:e.length;if(!c)return-1;var h=o==null?0:ne(o);return h<0&&(h=Ye(c+h,0)),gi(e,r,h)}function Qg(e){var r=e==null?0:e.length;return r?xn(e,0,-1):[]}var Jg=ie(function(e){var r=Ae(e,Fa);return r.length&&r[0]===e[0]?Ta(r):[]}),Kg=ie(function(e){var r=On(e),o=Ae(e,Fa);return r===On(o)?r=t:o.pop(),o.length&&o[0]===e[0]?Ta(o,H(r,2)):[]}),Xg=ie(function(e){var r=On(e),o=Ae(e,Fa);return r=typeof r=="function"?r:t,r&&o.pop(),o.length&&o[0]===e[0]?Ta(o,t,r):[]});function Zg(e,r){return e==null?"":Qd.call(e,r)}function On(e){var r=e==null?0:e.length;return r?e[r-1]:t}function em(e,r,o){var c=e==null?0:e.length;if(!c)return-1;var h=c;return o!==t&&(h=ne(o),h=h<0?Ye(c+h,0):Xe(h,c-1)),r===r?Od(e,r,h):Dr(e,Dl,h,!0)}function nm(e,r){return e&&e.length?eu(e,ne(r)):t}var tm=ie(Yu);function Yu(e,r){return e&&e.length&&r&&r.length?Da(e,r):e}function im(e,r,o){return e&&e.length&&r&&r.length?Da(e,r,H(o,2)):e}function rm(e,r,o){return e&&e.length&&r&&r.length?Da(e,r,t,o):e}var sm=Tt(function(e,r){var o=e==null?0:e.length,c=ga(e,r);return iu(e,Ae(r,function(h){return bt(h,o)?+h:h}).sort(du)),c});function am(e,r){var o=[];if(!(e&&e.length))return o;var c=-1,h=[],g=e.length;for(r=H(r,3);++c<g;){var m=e[c];r(m,c,e)&&(o.push(m),h.push(c))}return iu(e,h),o}function Va(e){return e==null?e:Zd.call(e)}function om(e,r,o){var c=e==null?0:e.length;return c?(o&&typeof o!="number"&&sn(e,r,o)?(r=0,o=c):(r=r==null?0:ne(r),o=o===t?c:ne(o)),xn(e,r,o)):[]}function lm(e,r){return Vr(e,r)}function um(e,r,o){return Aa(e,r,H(o,2))}function cm(e,r){var o=e==null?0:e.length;if(o){var c=Vr(e,r);if(c<o&&Vn(e[c],r))return c}return-1}function fm(e,r){return Vr(e,r,!0)}function hm(e,r,o){return Aa(e,r,H(o,2),!0)}function dm(e,r){var o=e==null?0:e.length;if(o){var c=Vr(e,r,!0)-1;if(Vn(e[c],r))return c}return-1}function pm(e){return e&&e.length?su(e):[]}function gm(e,r){return e&&e.length?su(e,H(r,2)):[]}function mm(e){var r=e==null?0:e.length;return r?xn(e,1,r):[]}function ym(e,r,o){return e&&e.length?(r=o||r===t?1:ne(r),xn(e,0,r<0?0:r)):[]}function vm(e,r,o){var c=e==null?0:e.length;return c?(r=o||r===t?1:ne(r),r=c-r,xn(e,r<0?0:r,c)):[]}function Tm(e,r){return e&&e.length?Yr(e,H(r,3),!1,!0):[]}function bm(e,r){return e&&e.length?Yr(e,H(r,3)):[]}var wm=ie(function(e){return Ut(ze(e,1,Be,!0))}),Em=ie(function(e){var r=On(e);return Be(r)&&(r=t),Ut(ze(e,1,Be,!0),H(r,2))}),Dm=ie(function(e){var r=On(e);return r=typeof r=="function"?r:t,Ut(ze(e,1,Be,!0),t,r)});function Im(e){return e&&e.length?Ut(e):[]}function _m(e,r){return e&&e.length?Ut(e,H(r,2)):[]}function Am(e,r){return r=typeof r=="function"?r:t,e&&e.length?Ut(e,t,r):[]}function Ya(e){if(!(e&&e.length))return[];var r=0;return e=Ot(e,function(o){if(Be(o))return r=Ye(o.length,r),!0}),oa(r,function(o){return Ae(e,ra(o))})}function qu(e,r){if(!(e&&e.length))return[];var o=Ya(e);return r==null?o:Ae(o,function(c){return yn(r,t,c)})}var Sm=ie(function(e,r){return Be(e)?Hi(e,r):[]}),km=ie(function(e){return ka(Ot(e,Be))}),Fm=ie(function(e){var r=On(e);return Be(r)&&(r=t),ka(Ot(e,Be),H(r,2))}),Nm=ie(function(e){var r=On(e);return r=typeof r=="function"?r:t,ka(Ot(e,Be),t,r)}),Cm=ie(Ya);function xm(e,r){return uu(e||[],r||[],qi)}function Om(e,r){return uu(e||[],r||[],Qi)}var Rm=ie(function(e){var r=e.length,o=r>1?e[r-1]:t;return o=typeof o=="function"?(e.pop(),o):t,qu(e,o)});function Hu(e){var r=p(e);return r.__chain__=!0,r}function Lm(e,r){return r(e),e}function Zr(e,r){return r(e)}var Pm=Tt(function(e){var r=e.length,o=r?e[0]:0,c=this.__wrapped__,h=function(g){return ga(g,e)};return r>1||this.__actions__.length||!(c instanceof oe)||!bt(o)?this.thru(h):(c=c.slice(o,+o+(r?1:0)),c.__actions__.push({func:Zr,args:[h],thisArg:t}),new Nn(c,this.__chain__).thru(function(g){return r&&!g.length&&g.push(t),g}))});function Bm(){return Hu(this)}function Um(){return new Nn(this.value(),this.__chain__)}function Mm(){this.__values__===t&&(this.__values__=ac(this.value()));var e=this.__index__>=this.__values__.length,r=e?t:this.__values__[this.__index__++];return{done:e,value:r}}function $m(){return this}function Gm(e){for(var r,o=this;o instanceof Ur;){var c=Mu(o);c.__index__=0,c.__values__=t,r?h.__wrapped__=c:r=c;var h=c;o=o.__wrapped__}return h.__wrapped__=e,r}function Wm(){var e=this.__wrapped__;if(e instanceof oe){var r=e;return this.__actions__.length&&(r=new oe(this)),r=r.reverse(),r.__actions__.push({func:Zr,args:[Va],thisArg:t}),new Nn(r,this.__chain__)}return this.thru(Va)}function Vm(){return lu(this.__wrapped__,this.__actions__)}var Ym=qr(function(e,r,o){me.call(e,o)?++e[o]:yt(e,o,1)});function qm(e,r,o){var c=Z(e)?wl:Lp;return o&&sn(e,r,o)&&(r=t),c(e,H(r,3))}function Hm(e,r){var o=Z(e)?Ot:ql;return o(e,H(r,3))}var jm=Tu($u),zm=Tu(Gu);function Qm(e,r){return ze(es(e,r),1)}function Jm(e,r){return ze(es(e,r),rt)}function Km(e,r,o){return o=o===t?1:ne(o),ze(es(e,r),o)}function ju(e,r){var o=Z(e)?kn:Bt;return o(e,H(r,3))}function zu(e,r){var o=Z(e)?md:Yl;return o(e,H(r,3))}var Xm=qr(function(e,r,o){me.call(e,o)?e[o].push(r):yt(e,o,[r])});function Zm(e,r,o,c){e=cn(e)?e:Si(e),o=o&&!c?ne(o):0;var h=e.length;return o<0&&(o=Ye(h+o,0)),ss(e)?o<=h&&e.indexOf(r,o)>-1:!!h&&gi(e,r,o)>-1}var ey=ie(function(e,r,o){var c=-1,h=typeof r=="function",g=cn(e)?I(e.length):[];return Bt(e,function(m){g[++c]=h?yn(r,m,o):ji(m,r,o)}),g}),ny=qr(function(e,r,o){yt(e,o,r)});function es(e,r){var o=Z(e)?Ae:Kl;return o(e,H(r,3))}function ty(e,r,o,c){return e==null?[]:(Z(r)||(r=r==null?[]:[r]),o=c?t:o,Z(o)||(o=o==null?[]:[o]),nu(e,r,o))}var iy=qr(function(e,r,o){e[o?0:1].push(r)},function(){return[[],[]]});function ry(e,r,o){var c=Z(e)?ta:_l,h=arguments.length<3;return c(e,H(r,4),o,h,Bt)}function sy(e,r,o){var c=Z(e)?yd:_l,h=arguments.length<3;return c(e,H(r,4),o,h,Yl)}function ay(e,r){var o=Z(e)?Ot:ql;return o(e,is(H(r,3)))}function oy(e){var r=Z(e)?$l:Zp;return r(e)}function ly(e,r,o){(o?sn(e,r,o):r===t)?r=1:r=ne(r);var c=Z(e)?Np:eg;return c(e,r)}function uy(e){var r=Z(e)?Cp:tg;return r(e)}function cy(e){if(e==null)return 0;if(cn(e))return ss(e)?yi(e):e.length;var r=Ze(e);return r==Mn||r==$n?e.size:wa(e).length}function fy(e,r,o){var c=Z(e)?ia:ig;return o&&sn(e,r,o)&&(r=t),c(e,H(r,3))}var hy=ie(function(e,r){if(e==null)return[];var o=r.length;return o>1&&sn(e,r[0],r[1])?r=[]:o>2&&sn(r[0],r[1],r[2])&&(r=[r[0]]),nu(e,ze(r,1),[])}),ns=Hd||function(){return je.Date.now()};function dy(e,r){if(typeof r!="function")throw new Fn(u);return e=ne(e),function(){if(--e<1)return r.apply(this,arguments)}}function Qu(e,r,o){return r=o?t:r,r=e&&r==null?e.length:r,vt(e,Je,t,t,t,t,r)}function Ju(e,r){var o;if(typeof r!="function")throw new Fn(u);return e=ne(e),function(){return--e>0&&(o=r.apply(this,arguments)),e<=1&&(r=t),o}}var qa=ie(function(e,r,o){var c=Q;if(o.length){var h=Lt(o,_i(qa));c|=xe}return vt(e,c,r,o,h)}),Ku=ie(function(e,r,o){var c=Q|he;if(o.length){var h=Lt(o,_i(Ku));c|=xe}return vt(r,c,e,o,h)});function Xu(e,r,o){r=o?t:r;var c=vt(e,Ee,t,t,t,t,t,r);return c.placeholder=Xu.placeholder,c}function Zu(e,r,o){r=o?t:r;var c=vt(e,ke,t,t,t,t,t,r);return c.placeholder=Zu.placeholder,c}function ec(e,r,o){var c,h,g,m,T,E,S=0,k=!1,O=!1,P=!0;if(typeof e!="function")throw new Fn(u);r=Rn(r)||0,Fe(o)&&(k=!!o.leading,O="maxWait"in o,g=O?Ye(Rn(o.maxWait)||0,r):g,P="trailing"in o?!!o.trailing:P);function W(Ue){var Yn=c,Dt=h;return c=h=t,S=Ue,m=e.apply(Dt,Yn),m}function j(Ue){return S=Ue,T=Xi(re,r),k?W(Ue):m}function te(Ue){var Yn=Ue-E,Dt=Ue-S,Tc=r-Yn;return O?Xe(Tc,g-Dt):Tc}function z(Ue){var Yn=Ue-E,Dt=Ue-S;return E===t||Yn>=r||Yn<0||O&&Dt>=g}function re(){var Ue=ns();if(z(Ue))return ue(Ue);T=Xi(re,te(Ue))}function ue(Ue){return T=t,P&&c?W(Ue):(c=h=t,m)}function wn(){T!==t&&cu(T),S=0,c=E=h=T=t}function an(){return T===t?m:ue(ns())}function En(){var Ue=ns(),Yn=z(Ue);if(c=arguments,h=this,E=Ue,Yn){if(T===t)return j(E);if(O)return cu(T),T=Xi(re,r),W(E)}return T===t&&(T=Xi(re,r)),m}return En.cancel=wn,En.flush=an,En}var py=ie(function(e,r){return Vl(e,1,r)}),gy=ie(function(e,r,o){return Vl(e,Rn(r)||0,o)});function my(e){return vt(e,x)}function ts(e,r){if(typeof e!="function"||r!=null&&typeof r!="function")throw new Fn(u);var o=function(){var c=arguments,h=r?r.apply(this,c):c[0],g=o.cache;if(g.has(h))return g.get(h);var m=e.apply(this,c);return o.cache=g.set(h,m)||g,m};return o.cache=new(ts.Cache||mt),o}ts.Cache=mt;function is(e){if(typeof e!="function")throw new Fn(u);return function(){var r=arguments;switch(r.length){case 0:return!e.call(this);case 1:return!e.call(this,r[0]);case 2:return!e.call(this,r[0],r[1]);case 3:return!e.call(this,r[0],r[1],r[2])}return!e.apply(this,r)}}function yy(e){return Ju(2,e)}var vy=rg(function(e,r){r=r.length==1&&Z(r[0])?Ae(r[0],vn(H())):Ae(ze(r,1),vn(H()));var o=r.length;return ie(function(c){for(var h=-1,g=Xe(c.length,o);++h<g;)c[h]=r[h].call(this,c[h]);return yn(e,this,c)})}),Ha=ie(function(e,r){var o=Lt(r,_i(Ha));return vt(e,xe,t,r,o)}),nc=ie(function(e,r){var o=Lt(r,_i(nc));return vt(e,nn,t,r,o)}),Ty=Tt(function(e,r){return vt(e,dt,t,t,t,r)});function by(e,r){if(typeof e!="function")throw new Fn(u);return r=r===t?r:ne(r),ie(e,r)}function wy(e,r){if(typeof e!="function")throw new Fn(u);return r=r==null?0:Ye(ne(r),0),ie(function(o){var c=o[r],h=$t(o,0,r);return c&&Rt(h,c),yn(e,this,h)})}function Ey(e,r,o){var c=!0,h=!0;if(typeof e!="function")throw new Fn(u);return Fe(o)&&(c="leading"in o?!!o.leading:c,h="trailing"in o?!!o.trailing:h),ec(e,r,{leading:c,maxWait:r,trailing:h})}function Dy(e){return Qu(e,1)}function Iy(e,r){return Ha(Na(r),e)}function _y(){if(!arguments.length)return[];var e=arguments[0];return Z(e)?e:[e]}function Ay(e){return Cn(e,C)}function Sy(e,r){return r=typeof r=="function"?r:t,Cn(e,C,r)}function ky(e){return Cn(e,w|C)}function Fy(e,r){return r=typeof r=="function"?r:t,Cn(e,w|C,r)}function Ny(e,r){return r==null||Wl(e,r,qe(r))}function Vn(e,r){return e===r||e!==e&&r!==r}var Cy=Qr(va),xy=Qr(function(e,r){return e>=r}),ri=zl(function(){return arguments}())?zl:function(e){return Oe(e)&&me.call(e,"callee")&&!Rl.call(e,"callee")},Z=I.isArray,Oy=gl?vn(gl):Gp;function cn(e){return e!=null&&rs(e.length)&&!wt(e)}function Be(e){return Oe(e)&&cn(e)}function Ry(e){return e===!0||e===!1||Oe(e)&&rn(e)==pe}var Gt=zd||io,Ly=ml?vn(ml):Wp;function Py(e){return Oe(e)&&e.nodeType===1&&!Zi(e)}function By(e){if(e==null)return!0;if(cn(e)&&(Z(e)||typeof e=="string"||typeof e.splice=="function"||Gt(e)||Ai(e)||ri(e)))return!e.length;var r=Ze(e);if(r==Mn||r==$n)return!e.size;if(Ki(e))return!wa(e).length;for(var o in e)if(me.call(e,o))return!1;return!0}function Uy(e,r){return zi(e,r)}function My(e,r,o){o=typeof o=="function"?o:t;var c=o?o(e,r):t;return c===t?zi(e,r,t,o):!!c}function ja(e){if(!Oe(e))return!1;var r=rn(e);return r==xt||r==Oi||typeof e.message=="string"&&typeof e.name=="string"&&!Zi(e)}function $y(e){return typeof e=="number"&&Pl(e)}function wt(e){if(!Fe(e))return!1;var r=rn(e);return r==Ke||r==Vo||r==Pe||r==ch}function tc(e){return typeof e=="number"&&e==ne(e)}function rs(e){return typeof e=="number"&&e>-1&&e%1==0&&e<=Un}function Fe(e){var r=typeof e;return e!=null&&(r=="object"||r=="function")}function Oe(e){return e!=null&&typeof e=="object"}var ic=yl?vn(yl):Yp;function Gy(e,r){return e===r||ba(e,r,Ba(r))}function Wy(e,r,o){return o=typeof o=="function"?o:t,ba(e,r,Ba(r),o)}function Vy(e){return rc(e)&&e!=+e}function Yy(e){if(Sg(e))throw new X(l);return Ql(e)}function qy(e){return e===null}function Hy(e){return e==null}function rc(e){return typeof e=="number"||Oe(e)&&rn(e)==Ri}function Zi(e){if(!Oe(e)||rn(e)!=pt)return!1;var r=Cr(e);if(r===null)return!0;var o=me.call(r,"constructor")&&r.constructor;return typeof o=="function"&&o instanceof o&&Sr.call(o)==Wd}var za=vl?vn(vl):qp;function jy(e){return tc(e)&&e>=-Un&&e<=Un}var sc=Tl?vn(Tl):Hp;function ss(e){return typeof e=="string"||!Z(e)&&Oe(e)&&rn(e)==Pi}function bn(e){return typeof e=="symbol"||Oe(e)&&rn(e)==vr}var Ai=bl?vn(bl):jp;function zy(e){return e===t}function Qy(e){return Oe(e)&&Ze(e)==Bi}function Jy(e){return Oe(e)&&rn(e)==hh}var Ky=Qr(Ea),Xy=Qr(function(e,r){return e<=r});function ac(e){if(!e)return[];if(cn(e))return ss(e)?Gn(e):un(e);if($i&&e[$i])return Nd(e[$i]());var r=Ze(e),o=r==Mn?ua:r==$n?Ir:Si;return o(e)}function Et(e){if(!e)return e===0?e:0;if(e=Rn(e),e===rt||e===-rt){var r=e<0?-1:1;return r*hi}return e===e?e:0}function ne(e){var r=Et(e),o=r%1;return r===r?o?r-o:r:0}function oc(e){return e?ei(ne(e),0,_n):0}function Rn(e){if(typeof e=="number")return e;if(bn(e))return Qt;if(Fe(e)){var r=typeof e.valueOf=="function"?e.valueOf():e;e=Fe(r)?r+"":r}if(typeof e!="string")return e===0?e:+e;e=Al(e);var o=Oh.test(e);return o||Lh.test(e)?dd(e.slice(2),o?2:8):xh.test(e)?Qt:+e}function lc(e){return at(e,fn(e))}function Zy(e){return e?ei(ne(e),-Un,Un):e===0?e:0}function ge(e){return e==null?"":Tn(e)}var ev=Di(function(e,r){if(Ki(r)||cn(r)){at(r,qe(r),e);return}for(var o in r)me.call(r,o)&&qi(e,o,r[o])}),uc=Di(function(e,r){at(r,fn(r),e)}),as=Di(function(e,r,o,c){at(r,fn(r),e,c)}),nv=Di(function(e,r,o,c){at(r,qe(r),e,c)}),tv=Tt(ga);function iv(e,r){var o=Ei(e);return r==null?o:Gl(o,r)}var rv=ie(function(e,r){e=be(e);var o=-1,c=r.length,h=c>2?r[2]:t;for(h&&sn(r[0],r[1],h)&&(c=1);++o<c;)for(var g=r[o],m=fn(g),T=-1,E=m.length;++T<E;){var S=m[T],k=e[S];(k===t||Vn(k,Ti[S])&&!me.call(e,S))&&(e[S]=g[S])}return e}),sv=ie(function(e){return e.push(t,Au),yn(cc,t,e)});function av(e,r){return El(e,H(r,3),st)}function ov(e,r){return El(e,H(r,3),ya)}function lv(e,r){return e==null?e:ma(e,H(r,3),fn)}function uv(e,r){return e==null?e:Hl(e,H(r,3),fn)}function cv(e,r){return e&&st(e,H(r,3))}function fv(e,r){return e&&ya(e,H(r,3))}function hv(e){return e==null?[]:Gr(e,qe(e))}function dv(e){return e==null?[]:Gr(e,fn(e))}function Qa(e,r,o){var c=e==null?t:ni(e,r);return c===t?o:c}function pv(e,r){return e!=null&&Fu(e,r,Bp)}function Ja(e,r){return e!=null&&Fu(e,r,Up)}var gv=wu(function(e,r,o){r!=null&&typeof r.toString!="function"&&(r=kr.call(r)),e[r]=o},Xa(hn)),mv=wu(function(e,r,o){r!=null&&typeof r.toString!="function"&&(r=kr.call(r)),me.call(e,r)?e[r].push(o):e[r]=[o]},H),yv=ie(ji);function qe(e){return cn(e)?Ml(e):wa(e)}function fn(e){return cn(e)?Ml(e,!0):zp(e)}function vv(e,r){var o={};return r=H(r,3),st(e,function(c,h,g){yt(o,r(c,h,g),c)}),o}function Tv(e,r){var o={};return r=H(r,3),st(e,function(c,h,g){yt(o,h,r(c,h,g))}),o}var bv=Di(function(e,r,o){Wr(e,r,o)}),cc=Di(function(e,r,o,c){Wr(e,r,o,c)}),wv=Tt(function(e,r){var o={};if(e==null)return o;var c=!1;r=Ae(r,function(g){return g=Mt(g,e),c||(c=g.length>1),g}),at(e,La(e),o),c&&(o=Cn(o,w|N|C,gg));for(var h=r.length;h--;)Sa(o,r[h]);return o});function Ev(e,r){return fc(e,is(H(r)))}var Dv=Tt(function(e,r){return e==null?{}:Jp(e,r)});function fc(e,r){if(e==null)return{};var o=Ae(La(e),function(c){return[c]});return r=H(r),tu(e,o,function(c,h){return r(c,h[0])})}function Iv(e,r,o){r=Mt(r,e);var c=-1,h=r.length;for(h||(h=1,e=t);++c<h;){var g=e==null?t:e[ot(r[c])];g===t&&(c=h,g=o),e=wt(g)?g.call(e):g}return e}function _v(e,r,o){return e==null?e:Qi(e,r,o)}function Av(e,r,o,c){return c=typeof c=="function"?c:t,e==null?e:Qi(e,r,o,c)}var hc=Iu(qe),dc=Iu(fn);function Sv(e,r,o){var c=Z(e),h=c||Gt(e)||Ai(e);if(r=H(r,4),o==null){var g=e&&e.constructor;h?o=c?new g:[]:Fe(e)?o=wt(g)?Ei(Cr(e)):{}:o={}}return(h?kn:st)(e,function(m,T,E){return r(o,m,T,E)}),o}function kv(e,r){return e==null?!0:Sa(e,r)}function Fv(e,r,o){return e==null?e:ou(e,r,Na(o))}function Nv(e,r,o,c){return c=typeof c=="function"?c:t,e==null?e:ou(e,r,Na(o),c)}function Si(e){return e==null?[]:la(e,qe(e))}function Cv(e){return e==null?[]:la(e,fn(e))}function xv(e,r,o){return o===t&&(o=r,r=t),o!==t&&(o=Rn(o),o=o===o?o:0),r!==t&&(r=Rn(r),r=r===r?r:0),ei(Rn(e),r,o)}function Ov(e,r,o){return r=Et(r),o===t?(o=r,r=0):o=Et(o),e=Rn(e),Mp(e,r,o)}function Rv(e,r,o){if(o&&typeof o!="boolean"&&sn(e,r,o)&&(r=o=t),o===t&&(typeof r=="boolean"?(o=r,r=t):typeof e=="boolean"&&(o=e,e=t)),e===t&&r===t?(e=0,r=1):(e=Et(e),r===t?(r=e,e=0):r=Et(r)),e>r){var c=e;e=r,r=c}if(o||e%1||r%1){var h=Bl();return Xe(e+h*(r-e+hd("1e-"+((h+"").length-1))),r)}return Ia(e,r)}var Lv=Ii(function(e,r,o){return r=r.toLowerCase(),e+(o?pc(r):r)});function pc(e){return Ka(ge(e).toLowerCase())}function gc(e){return e=ge(e),e&&e.replace(Bh,_d).replace(td,"")}function Pv(e,r,o){e=ge(e),r=Tn(r);var c=e.length;o=o===t?c:ei(ne(o),0,c);var h=o;return o-=r.length,o>=0&&e.slice(o,h)==r}function Bv(e){return e=ge(e),e&&yh.test(e)?e.replace(Ho,Ad):e}function Uv(e){return e=ge(e),e&&Dh.test(e)?e.replace(Hs,"\\$&"):e}var Mv=Ii(function(e,r,o){return e+(o?"-":"")+r.toLowerCase()}),$v=Ii(function(e,r,o){return e+(o?" ":"")+r.toLowerCase()}),Gv=vu("toLowerCase");function Wv(e,r,o){e=ge(e),r=ne(r);var c=r?yi(e):0;if(!r||c>=r)return e;var h=(r-c)/2;return zr(Lr(h),o)+e+zr(Rr(h),o)}function Vv(e,r,o){e=ge(e),r=ne(r);var c=r?yi(e):0;return r&&c<r?e+zr(r-c,o):e}function Yv(e,r,o){e=ge(e),r=ne(r);var c=r?yi(e):0;return r&&c<r?zr(r-c,o)+e:e}function qv(e,r,o){return o||r==null?r=0:r&&(r=+r),Xd(ge(e).replace(js,""),r||0)}function Hv(e,r,o){return(o?sn(e,r,o):r===t)?r=1:r=ne(r),_a(ge(e),r)}function jv(){var e=arguments,r=ge(e[0]);return e.length<3?r:r.replace(e[1],e[2])}var zv=Ii(function(e,r,o){return e+(o?"_":"")+r.toLowerCase()});function Qv(e,r,o){return o&&typeof o!="number"&&sn(e,r,o)&&(r=o=t),o=o===t?_n:o>>>0,o?(e=ge(e),e&&(typeof r=="string"||r!=null&&!za(r))&&(r=Tn(r),!r&&mi(e))?$t(Gn(e),0,o):e.split(r,o)):[]}var Jv=Ii(function(e,r,o){return e+(o?" ":"")+Ka(r)});function Kv(e,r,o){return e=ge(e),o=o==null?0:ei(ne(o),0,e.length),r=Tn(r),e.slice(o,o+r.length)==r}function Xv(e,r,o){var c=p.templateSettings;o&&sn(e,r,o)&&(r=t),e=ge(e),r=as({},r,c,_u);var h=as({},r.imports,c.imports,_u),g=qe(h),m=la(h,g),T,E,S=0,k=r.interpolate||Tr,O="__p += '",P=ca((r.escape||Tr).source+"|"+k.source+"|"+(k===jo?Ch:Tr).source+"|"+(r.evaluate||Tr).source+"|$","g"),W="//# sourceURL="+(me.call(r,"sourceURL")?(r.sourceURL+"").replace(/\s/g," "):"lodash.templateSources["+ ++od+"]")+`
`;e.replace(P,function(z,re,ue,wn,an,En){return ue||(ue=wn),O+=e.slice(S,En).replace(Uh,Sd),re&&(T=!0,O+=`' +
__e(`+re+`) +
'`),an&&(E=!0,O+=`';
`+an+`;
__p += '`),ue&&(O+=`' +
((__t = (`+ue+`)) == null ? '' : __t) +
'`),S=En+z.length,z}),O+=`';
`;var j=me.call(r,"variable")&&r.variable;if(!j)O=`with (obj) {
`+O+`
}
`;else if(Fh.test(j))throw new X(f);O=(E?O.replace(dh,""):O).replace(ph,"$1").replace(gh,"$1;"),O="function("+(j||"obj")+`) {
`+(j?"":`obj || (obj = {});
`)+"var __t, __p = ''"+(T?", __e = _.escape":"")+(E?`, __j = Array.prototype.join;
function print() { __p += __j.call(arguments, '') }
`:`;
`)+O+`return __p
}`;var te=yc(function(){return fe(g,W+"return "+O).apply(t,m)});if(te.source=O,ja(te))throw te;return te}function Zv(e){return ge(e).toLowerCase()}function e0(e){return ge(e).toUpperCase()}function n0(e,r,o){if(e=ge(e),e&&(o||r===t))return Al(e);if(!e||!(r=Tn(r)))return e;var c=Gn(e),h=Gn(r),g=Sl(c,h),m=kl(c,h)+1;return $t(c,g,m).join("")}function t0(e,r,o){if(e=ge(e),e&&(o||r===t))return e.slice(0,Nl(e)+1);if(!e||!(r=Tn(r)))return e;var c=Gn(e),h=kl(c,Gn(r))+1;return $t(c,0,h).join("")}function i0(e,r,o){if(e=ge(e),e&&(o||r===t))return e.replace(js,"");if(!e||!(r=Tn(r)))return e;var c=Gn(e),h=Sl(c,Gn(r));return $t(c,h).join("")}function r0(e,r){var o=K,c=tn;if(Fe(r)){var h="separator"in r?r.separator:h;o="length"in r?ne(r.length):o,c="omission"in r?Tn(r.omission):c}e=ge(e);var g=e.length;if(mi(e)){var m=Gn(e);g=m.length}if(o>=g)return e;var T=o-yi(c);if(T<1)return c;var E=m?$t(m,0,T).join(""):e.slice(0,T);if(h===t)return E+c;if(m&&(T+=E.length-T),za(h)){if(e.slice(T).search(h)){var S,k=E;for(h.global||(h=ca(h.source,ge(zo.exec(h))+"g")),h.lastIndex=0;S=h.exec(k);)var O=S.index;E=E.slice(0,O===t?T:O)}}else if(e.indexOf(Tn(h),T)!=T){var P=E.lastIndexOf(h);P>-1&&(E=E.slice(0,P))}return E+c}function s0(e){return e=ge(e),e&&mh.test(e)?e.replace(qo,Rd):e}var a0=Ii(function(e,r,o){return e+(o?" ":"")+r.toUpperCase()}),Ka=vu("toUpperCase");function mc(e,r,o){return e=ge(e),r=o?t:r,r===t?Fd(e)?Bd(e):bd(e):e.match(r)||[]}var yc=ie(function(e,r){try{return yn(e,t,r)}catch(o){return ja(o)?o:new X(o)}}),o0=Tt(function(e,r){return kn(r,function(o){o=ot(o),yt(e,o,qa(e[o],e))}),e});function l0(e){var r=e==null?0:e.length,o=H();return e=r?Ae(e,function(c){if(typeof c[1]!="function")throw new Fn(u);return[o(c[0]),c[1]]}):[],ie(function(c){for(var h=-1;++h<r;){var g=e[h];if(yn(g[0],this,c))return yn(g[1],this,c)}})}function u0(e){return Rp(Cn(e,w))}function Xa(e){return function(){return e}}function c0(e,r){return e==null||e!==e?r:e}var f0=bu(),h0=bu(!0);function hn(e){return e}function Za(e){return Jl(typeof e=="function"?e:Cn(e,w))}function d0(e){return Xl(Cn(e,w))}function p0(e,r){return Zl(e,Cn(r,w))}var g0=ie(function(e,r){return function(o){return ji(o,e,r)}}),m0=ie(function(e,r){return function(o){return ji(e,o,r)}});function eo(e,r,o){var c=qe(r),h=Gr(r,c);o==null&&!(Fe(r)&&(h.length||!c.length))&&(o=r,r=e,e=this,h=Gr(r,qe(r)));var g=!(Fe(o)&&"chain"in o)||!!o.chain,m=wt(e);return kn(h,function(T){var E=r[T];e[T]=E,m&&(e.prototype[T]=function(){var S=this.__chain__;if(g||S){var k=e(this.__wrapped__),O=k.__actions__=un(this.__actions__);return O.push({func:E,args:arguments,thisArg:e}),k.__chain__=S,k}return E.apply(e,Rt([this.value()],arguments))})}),e}function y0(){return je._===this&&(je._=Vd),this}function no(){}function v0(e){return e=ne(e),ie(function(r){return eu(r,e)})}var T0=xa(Ae),b0=xa(wl),w0=xa(ia);function vc(e){return Ma(e)?ra(ot(e)):Kp(e)}function E0(e){return function(r){return e==null?t:ni(e,r)}}var D0=Eu(),I0=Eu(!0);function to(){return[]}function io(){return!1}function _0(){return{}}function A0(){return""}function S0(){return!0}function k0(e,r){if(e=ne(e),e<1||e>Un)return[];var o=_n,c=Xe(e,_n);r=H(r),e-=_n;for(var h=oa(c,r);++o<e;)r(o);return h}function F0(e){return Z(e)?Ae(e,ot):bn(e)?[e]:un(Uu(ge(e)))}function N0(e){var r=++Gd;return ge(e)+r}var C0=jr(function(e,r){return e+r},0),x0=Oa("ceil"),O0=jr(function(e,r){return e/r},1),R0=Oa("floor");function L0(e){return e&&e.length?$r(e,hn,va):t}function P0(e,r){return e&&e.length?$r(e,H(r,2),va):t}function B0(e){return Il(e,hn)}function U0(e,r){return Il(e,H(r,2))}function M0(e){return e&&e.length?$r(e,hn,Ea):t}function $0(e,r){return e&&e.length?$r(e,H(r,2),Ea):t}var G0=jr(function(e,r){return e*r},1),W0=Oa("round"),V0=jr(function(e,r){return e-r},0);function Y0(e){return e&&e.length?aa(e,hn):0}function q0(e,r){return e&&e.length?aa(e,H(r,2)):0}return p.after=dy,p.ary=Qu,p.assign=ev,p.assignIn=uc,p.assignInWith=as,p.assignWith=nv,p.at=tv,p.before=Ju,p.bind=qa,p.bindAll=o0,p.bindKey=Ku,p.castArray=_y,p.chain=Hu,p.chunk=Rg,p.compact=Lg,p.concat=Pg,p.cond=l0,p.conforms=u0,p.constant=Xa,p.countBy=Ym,p.create=iv,p.curry=Xu,p.curryRight=Zu,p.debounce=ec,p.defaults=rv,p.defaultsDeep=sv,p.defer=py,p.delay=gy,p.difference=Bg,p.differenceBy=Ug,p.differenceWith=Mg,p.drop=$g,p.dropRight=Gg,p.dropRightWhile=Wg,p.dropWhile=Vg,p.fill=Yg,p.filter=Hm,p.flatMap=Qm,p.flatMapDeep=Jm,p.flatMapDepth=Km,p.flatten=Wu,p.flattenDeep=qg,p.flattenDepth=Hg,p.flip=my,p.flow=f0,p.flowRight=h0,p.fromPairs=jg,p.functions=hv,p.functionsIn=dv,p.groupBy=Xm,p.initial=Qg,p.intersection=Jg,p.intersectionBy=Kg,p.intersectionWith=Xg,p.invert=gv,p.invertBy=mv,p.invokeMap=ey,p.iteratee=Za,p.keyBy=ny,p.keys=qe,p.keysIn=fn,p.map=es,p.mapKeys=vv,p.mapValues=Tv,p.matches=d0,p.matchesProperty=p0,p.memoize=ts,p.merge=bv,p.mergeWith=cc,p.method=g0,p.methodOf=m0,p.mixin=eo,p.negate=is,p.nthArg=v0,p.omit=wv,p.omitBy=Ev,p.once=yy,p.orderBy=ty,p.over=T0,p.overArgs=vy,p.overEvery=b0,p.overSome=w0,p.partial=Ha,p.partialRight=nc,p.partition=iy,p.pick=Dv,p.pickBy=fc,p.property=vc,p.propertyOf=E0,p.pull=tm,p.pullAll=Yu,p.pullAllBy=im,p.pullAllWith=rm,p.pullAt=sm,p.range=D0,p.rangeRight=I0,p.rearg=Ty,p.reject=ay,p.remove=am,p.rest=by,p.reverse=Va,p.sampleSize=ly,p.set=_v,p.setWith=Av,p.shuffle=uy,p.slice=om,p.sortBy=hy,p.sortedUniq=pm,p.sortedUniqBy=gm,p.split=Qv,p.spread=wy,p.tail=mm,p.take=ym,p.takeRight=vm,p.takeRightWhile=Tm,p.takeWhile=bm,p.tap=Lm,p.throttle=Ey,p.thru=Zr,p.toArray=ac,p.toPairs=hc,p.toPairsIn=dc,p.toPath=F0,p.toPlainObject=lc,p.transform=Sv,p.unary=Dy,p.union=wm,p.unionBy=Em,p.unionWith=Dm,p.uniq=Im,p.uniqBy=_m,p.uniqWith=Am,p.unset=kv,p.unzip=Ya,p.unzipWith=qu,p.update=Fv,p.updateWith=Nv,p.values=Si,p.valuesIn=Cv,p.without=Sm,p.words=mc,p.wrap=Iy,p.xor=km,p.xorBy=Fm,p.xorWith=Nm,p.zip=Cm,p.zipObject=xm,p.zipObjectDeep=Om,p.zipWith=Rm,p.entries=hc,p.entriesIn=dc,p.extend=uc,p.extendWith=as,eo(p,p),p.add=C0,p.attempt=yc,p.camelCase=Lv,p.capitalize=pc,p.ceil=x0,p.clamp=xv,p.clone=Ay,p.cloneDeep=ky,p.cloneDeepWith=Fy,p.cloneWith=Sy,p.conformsTo=Ny,p.deburr=gc,p.defaultTo=c0,p.divide=O0,p.endsWith=Pv,p.eq=Vn,p.escape=Bv,p.escapeRegExp=Uv,p.every=qm,p.find=jm,p.findIndex=$u,p.findKey=av,p.findLast=zm,p.findLastIndex=Gu,p.findLastKey=ov,p.floor=R0,p.forEach=ju,p.forEachRight=zu,p.forIn=lv,p.forInRight=uv,p.forOwn=cv,p.forOwnRight=fv,p.get=Qa,p.gt=Cy,p.gte=xy,p.has=pv,p.hasIn=Ja,p.head=Vu,p.identity=hn,p.includes=Zm,p.indexOf=zg,p.inRange=Ov,p.invoke=yv,p.isArguments=ri,p.isArray=Z,p.isArrayBuffer=Oy,p.isArrayLike=cn,p.isArrayLikeObject=Be,p.isBoolean=Ry,p.isBuffer=Gt,p.isDate=Ly,p.isElement=Py,p.isEmpty=By,p.isEqual=Uy,p.isEqualWith=My,p.isError=ja,p.isFinite=$y,p.isFunction=wt,p.isInteger=tc,p.isLength=rs,p.isMap=ic,p.isMatch=Gy,p.isMatchWith=Wy,p.isNaN=Vy,p.isNative=Yy,p.isNil=Hy,p.isNull=qy,p.isNumber=rc,p.isObject=Fe,p.isObjectLike=Oe,p.isPlainObject=Zi,p.isRegExp=za,p.isSafeInteger=jy,p.isSet=sc,p.isString=ss,p.isSymbol=bn,p.isTypedArray=Ai,p.isUndefined=zy,p.isWeakMap=Qy,p.isWeakSet=Jy,p.join=Zg,p.kebabCase=Mv,p.last=On,p.lastIndexOf=em,p.lowerCase=$v,p.lowerFirst=Gv,p.lt=Ky,p.lte=Xy,p.max=L0,p.maxBy=P0,p.mean=B0,p.meanBy=U0,p.min=M0,p.minBy=$0,p.stubArray=to,p.stubFalse=io,p.stubObject=_0,p.stubString=A0,p.stubTrue=S0,p.multiply=G0,p.nth=nm,p.noConflict=y0,p.noop=no,p.now=ns,p.pad=Wv,p.padEnd=Vv,p.padStart=Yv,p.parseInt=qv,p.random=Rv,p.reduce=ry,p.reduceRight=sy,p.repeat=Hv,p.replace=jv,p.result=Iv,p.round=W0,p.runInContext=b,p.sample=oy,p.size=cy,p.snakeCase=zv,p.some=fy,p.sortedIndex=lm,p.sortedIndexBy=um,p.sortedIndexOf=cm,p.sortedLastIndex=fm,p.sortedLastIndexBy=hm,p.sortedLastIndexOf=dm,p.startCase=Jv,p.startsWith=Kv,p.subtract=V0,p.sum=Y0,p.sumBy=q0,p.template=Xv,p.times=k0,p.toFinite=Et,p.toInteger=ne,p.toLength=oc,p.toLower=Zv,p.toNumber=Rn,p.toSafeInteger=Zy,p.toString=ge,p.toUpper=e0,p.trim=n0,p.trimEnd=t0,p.trimStart=i0,p.truncate=r0,p.unescape=s0,p.uniqueId=N0,p.upperCase=a0,p.upperFirst=Ka,p.each=ju,p.eachRight=zu,p.first=Vu,eo(p,function(){var e={};return st(p,function(r,o){me.call(p.prototype,o)||(e[o]=r)}),e}(),{chain:!1}),p.VERSION=s,kn(["bind","bindKey","curry","curryRight","partial","partialRight"],function(e){p[e].placeholder=p}),kn(["drop","take"],function(e,r){oe.prototype[e]=function(o){o=o===t?1:Ye(ne(o),0);var c=this.__filtered__&&!r?new oe(this):this.clone();return c.__filtered__?c.__takeCount__=Xe(o,c.__takeCount__):c.__views__.push({size:Xe(o,_n),type:e+(c.__dir__<0?"Right":"")}),c},oe.prototype[e+"Right"]=function(o){return this.reverse()[e](o).reverse()}}),kn(["filter","map","takeWhile"],function(e,r){var o=r+1,c=o==mr||o==yr;oe.prototype[e]=function(h){var g=this.clone();return g.__iteratees__.push({iteratee:H(h,3),type:o}),g.__filtered__=g.__filtered__||c,g}}),kn(["head","last"],function(e,r){var o="take"+(r?"Right":"");oe.prototype[e]=function(){return this[o](1).value()[0]}}),kn(["initial","tail"],function(e,r){var o="drop"+(r?"":"Right");oe.prototype[e]=function(){return this.__filtered__?new oe(this):this[o](1)}}),oe.prototype.compact=function(){return this.filter(hn)},oe.prototype.find=function(e){return this.filter(e).head()},oe.prototype.findLast=function(e){return this.reverse().find(e)},oe.prototype.invokeMap=ie(function(e,r){return typeof e=="function"?new oe(this):this.map(function(o){return ji(o,e,r)})}),oe.prototype.reject=function(e){return this.filter(is(H(e)))},oe.prototype.slice=function(e,r){e=ne(e);var o=this;return o.__filtered__&&(e>0||r<0)?new oe(o):(e<0?o=o.takeRight(-e):e&&(o=o.drop(e)),r!==t&&(r=ne(r),o=r<0?o.dropRight(-r):o.take(r-e)),o)},oe.prototype.takeRightWhile=function(e){return this.reverse().takeWhile(e).reverse()},oe.prototype.toArray=function(){return this.take(_n)},st(oe.prototype,function(e,r){var o=/^(?:filter|find|map|reject)|While$/.test(r),c=/^(?:head|last)$/.test(r),h=p[c?"take"+(r=="last"?"Right":""):r],g=c||/^find/.test(r);h&&(p.prototype[r]=function(){var m=this.__wrapped__,T=c?[1]:arguments,E=m instanceof oe,S=T[0],k=E||Z(m),O=function(re){var ue=h.apply(p,Rt([re],T));return c&&P?ue[0]:ue};k&&o&&typeof S=="function"&&S.length!=1&&(E=k=!1);var P=this.__chain__,W=!!this.__actions__.length,j=g&&!P,te=E&&!W;if(!g&&k){m=te?m:new oe(this);var z=e.apply(m,T);return z.__actions__.push({func:Zr,args:[O],thisArg:t}),new Nn(z,P)}return j&&te?e.apply(this,T):(z=this.thru(O),j?c?z.value()[0]:z.value():z)})}),kn(["pop","push","shift","sort","splice","unshift"],function(e){var r=_r[e],o=/^(?:push|sort|unshift)$/.test(e)?"tap":"thru",c=/^(?:pop|shift)$/.test(e);p.prototype[e]=function(){var h=arguments;if(c&&!this.__chain__){var g=this.value();return r.apply(Z(g)?g:[],h)}return this[o](function(m){return r.apply(Z(m)?m:[],h)})}}),st(oe.prototype,function(e,r){var o=p[r];if(o){var c=o.name+"";me.call(wi,c)||(wi[c]=[]),wi[c].push({name:r,func:o})}}),wi[Hr(t,he).name]=[{name:"wrapper",func:t}],oe.prototype.clone=sp,oe.prototype.reverse=ap,oe.prototype.value=op,p.prototype.at=Pm,p.prototype.chain=Bm,p.prototype.commit=Um,p.prototype.next=Mm,p.prototype.plant=Gm,p.prototype.reverse=Wm,p.prototype.toJSON=p.prototype.valueOf=p.prototype.value=Vm,p.prototype.first=p.prototype.head,$i&&(p.prototype[$i]=$m),p},vi=Ud();Jt?((Jt.exports=vi)._=vi,Zs._=vi):je._=vi}).call(nr)})(ws,ws.exports);var ew=ws.exports;const kt=Kb(ew),nw="/api/dev-2.x/graphql-gtfs",tw="https://docs.opentripplanner.org/en/dev-2.x/images/otp-logo.svg",iw='[{"title":"Introduction","content":"\\n# OTP GTFS GraphQL API documentation\\n\\nThis is the static documentation of the OTP GraphQL GTFS API.\\n\\nThe GraphQL endpoint of your instance, which you should point your tooling to, is \\n`http://localhost:8080/otp/gtfs/v1`\\n\\nPlease also check out the interactive API explorer built into every instance and available\\nat http://localhost:8080/graphiql \\n\\n![GraphiQL screenshot](https://docs.opentripplanner.org/en/dev-2.x/images/graphiql.png)\\n\\n## Configuration\\n\\nThis API is activated by default.\\n\\nTo learn how to deactivate it, read the\\n[documentation](https://docs.opentripplanner.org/en/dev-2.x/apis/GTFS-GraphQL-API/).\\n"}]',rw="OTP GTFS GraphQL API",sw='{"Polyline":"<>","GeoJson":"<>","OffsetDateTime":"2024-02-05T18:04:23+01:00"}',aw="true",Ef={SITE_ROOT:nw,APP_LOGO:tw,PAGES:iw,APP_TITLE:rw,QUERY_GENERATION_FACTORIES:sw,MAGIDOC_GENERATE:aw};function DD(i){return i.get(Ef)}function Po(i,n){return i.getOrDefault(Ef,n)}function ce(i,n){if(!!!i)throw new Error(n)}function Ft(i){return typeof i=="object"&&i!==null}function Qn(i,n){if(!!!i)throw new Error(n??"Unexpected invariant triggered.")}const ow=/\r\n|[\n\r]/g;function yo(i,n){let t=0,s=1;for(const a of i.body.matchAll(ow)){if(typeof a.index=="number"||Qn(!1),a.index>=n)break;t=a.index+a[0].length,s+=1}return{line:s,column:n+1-t}}function lw(i){return Df(i.source,yo(i.source,i.start))}function Df(i,n){const t=i.locationOffset.column-1,s="".padStart(t)+i.body,a=n.line-1,l=i.locationOffset.line-1,u=n.line+l,f=n.line===1?t:0,d=n.column+f,y=`${i.name}:${u}:${d}
`,v=s.split(/\r\n|[\n\r]/g),w=v[a];if(w.length>120){const N=Math.floor(d/80),C=d%80,R=[];for(let L=0;L<w.length;L+=80)R.push(w.slice(L,L+80));return y+Wc([[`${u} |`,R[0]],...R.slice(1,N+1).map(L=>["|",L]),["|","^".padStart(C)],["|",R[N+1]]])}return y+Wc([[`${u-1} |`,v[a-1]],[`${u} |`,w],["|","^".padStart(d)],[`${u+1} |`,v[a+1]]])}function Wc(i){const n=i.filter(([s,a])=>a!==void 0),t=Math.max(...n.map(([s])=>s.length));return n.map(([s,a])=>s.padStart(t)+(a?" "+a:"")).join(`
`)}function uw(i){const n=i[0];return n==null||"kind"in n||"length"in n?{nodes:n,source:i[1],positions:i[2],path:i[3],originalError:i[4],extensions:i[5]}:n}class V extends Error{constructor(n,...t){var s,a,l;const{nodes:u,source:f,positions:d,path:y,originalError:v,extensions:w}=uw(t);super(n),this.name="GraphQLError",this.path=y??void 0,this.originalError=v??void 0,this.nodes=Vc(Array.isArray(u)?u:u?[u]:void 0);const N=Vc((s=this.nodes)===null||s===void 0?void 0:s.map(R=>R.loc).filter(R=>R!=null));this.source=f??(N==null||(a=N[0])===null||a===void 0?void 0:a.source),this.positions=d??(N==null?void 0:N.map(R=>R.start)),this.locations=d&&f?d.map(R=>yo(f,R)):N==null?void 0:N.map(R=>yo(R.source,R.start));const C=Ft(v==null?void 0:v.extensions)?v==null?void 0:v.extensions:void 0;this.extensions=(l=w??C)!==null&&l!==void 0?l:Object.create(null),Object.defineProperties(this,{message:{writable:!0,enumerable:!0},name:{enumerable:!1},nodes:{enumerable:!1},source:{enumerable:!1},positions:{enumerable:!1},originalError:{enumerable:!1}}),v!=null&&v.stack?Object.defineProperty(this,"stack",{value:v.stack,writable:!0,configurable:!0}):Error.captureStackTrace?Error.captureStackTrace(this,V):Object.defineProperty(this,"stack",{value:Error().stack,writable:!0,configurable:!0})}get[Symbol.toStringTag](){return"GraphQLError"}toString(){let n=this.message;if(this.nodes)for(const t of this.nodes)t.loc&&(n+=`

`+lw(t.loc));else if(this.source&&this.locations)for(const t of this.locations)n+=`

`+Df(this.source,t);return n}toJSON(){const n={message:this.message};return this.locations!=null&&(n.locations=this.locations),this.path!=null&&(n.path=this.path),this.extensions!=null&&Object.keys(this.extensions).length>0&&(n.extensions=this.extensions),n}}function Vc(i){return i===void 0||i.length===0?void 0:i}function He(i,n,t){return new V(`Syntax Error: ${t}`,{source:i,positions:[n]})}class cw{constructor(n,t,s){this.start=n.start,this.end=t.end,this.startToken=n,this.endToken=t,this.source=s}get[Symbol.toStringTag](){return"Location"}toJSON(){return{start:this.start,end:this.end}}}class If{constructor(n,t,s,a,l,u){this.kind=n,this.start=t,this.end=s,this.line=a,this.column=l,this.value=u,this.prev=null,this.next=null}get[Symbol.toStringTag](){return"Token"}toJSON(){return{kind:this.kind,value:this.value,line:this.line,column:this.column}}}const _f={Name:[],Document:["definitions"],OperationDefinition:["name","variableDefinitions","directives","selectionSet"],VariableDefinition:["variable","type","defaultValue","directives"],Variable:["name"],SelectionSet:["selections"],Field:["alias","name","arguments","directives","selectionSet"],Argument:["name","value"],FragmentSpread:["name","directives"],InlineFragment:["typeCondition","directives","selectionSet"],FragmentDefinition:["name","variableDefinitions","typeCondition","directives","selectionSet"],IntValue:[],FloatValue:[],StringValue:[],BooleanValue:[],NullValue:[],EnumValue:[],ListValue:["values"],ObjectValue:["fields"],ObjectField:["name","value"],Directive:["name","arguments"],NamedType:["name"],ListType:["type"],NonNullType:["type"],SchemaDefinition:["description","directives","operationTypes"],OperationTypeDefinition:["type"],ScalarTypeDefinition:["description","name","directives"],ObjectTypeDefinition:["description","name","interfaces","directives","fields"],FieldDefinition:["description","name","arguments","type","directives"],InputValueDefinition:["description","name","type","defaultValue","directives"],InterfaceTypeDefinition:["description","name","interfaces","directives","fields"],UnionTypeDefinition:["description","name","directives","types"],EnumTypeDefinition:["description","name","directives","values"],EnumValueDefinition:["description","name","directives"],InputObjectTypeDefinition:["description","name","directives","fields"],DirectiveDefinition:["description","name","arguments","locations"],SchemaExtension:["directives","operationTypes"],ScalarTypeExtension:["name","directives"],ObjectTypeExtension:["name","interfaces","directives","fields"],InterfaceTypeExtension:["name","interfaces","directives","fields"],UnionTypeExtension:["name","directives","types"],EnumTypeExtension:["name","directives","values"],InputObjectTypeExtension:["name","directives","fields"]},fw=new Set(Object.keys(_f));function Yc(i){const n=i==null?void 0:i.kind;return typeof n=="string"&&fw.has(n)}var Ln;(function(i){i.QUERY="query",i.MUTATION="mutation",i.SUBSCRIPTION="subscription"})(Ln||(Ln={}));var q;(function(i){i.QUERY="QUERY",i.MUTATION="MUTATION",i.SUBSCRIPTION="SUBSCRIPTION",i.FIELD="FIELD",i.FRAGMENT_DEFINITION="FRAGMENT_DEFINITION",i.FRAGMENT_SPREAD="FRAGMENT_SPREAD",i.INLINE_FRAGMENT="INLINE_FRAGMENT",i.VARIABLE_DEFINITION="VARIABLE_DEFINITION",i.SCHEMA="SCHEMA",i.SCALAR="SCALAR",i.OBJECT="OBJECT",i.FIELD_DEFINITION="FIELD_DEFINITION",i.ARGUMENT_DEFINITION="ARGUMENT_DEFINITION",i.INTERFACE="INTERFACE",i.UNION="UNION",i.ENUM="ENUM",i.ENUM_VALUE="ENUM_VALUE",i.INPUT_OBJECT="INPUT_OBJECT",i.INPUT_FIELD_DEFINITION="INPUT_FIELD_DEFINITION"})(q||(q={}));var D;(function(i){i.NAME="Name",i.DOCUMENT="Document",i.OPERATION_DEFINITION="OperationDefinition",i.VARIABLE_DEFINITION="VariableDefinition",i.SELECTION_SET="SelectionSet",i.FIELD="Field",i.ARGUMENT="Argument",i.FRAGMENT_SPREAD="FragmentSpread",i.INLINE_FRAGMENT="InlineFragment",i.FRAGMENT_DEFINITION="FragmentDefinition",i.VARIABLE="Variable",i.INT="IntValue",i.FLOAT="FloatValue",i.STRING="StringValue",i.BOOLEAN="BooleanValue",i.NULL="NullValue",i.ENUM="EnumValue",i.LIST="ListValue",i.OBJECT="ObjectValue",i.OBJECT_FIELD="ObjectField",i.DIRECTIVE="Directive",i.NAMED_TYPE="NamedType",i.LIST_TYPE="ListType",i.NON_NULL_TYPE="NonNullType",i.SCHEMA_DEFINITION="SchemaDefinition",i.OPERATION_TYPE_DEFINITION="OperationTypeDefinition",i.SCALAR_TYPE_DEFINITION="ScalarTypeDefinition",i.OBJECT_TYPE_DEFINITION="ObjectTypeDefinition",i.FIELD_DEFINITION="FieldDefinition",i.INPUT_VALUE_DEFINITION="InputValueDefinition",i.INTERFACE_TYPE_DEFINITION="InterfaceTypeDefinition",i.UNION_TYPE_DEFINITION="UnionTypeDefinition",i.ENUM_TYPE_DEFINITION="EnumTypeDefinition",i.ENUM_VALUE_DEFINITION="EnumValueDefinition",i.INPUT_OBJECT_TYPE_DEFINITION="InputObjectTypeDefinition",i.DIRECTIVE_DEFINITION="DirectiveDefinition",i.SCHEMA_EXTENSION="SchemaExtension",i.SCALAR_TYPE_EXTENSION="ScalarTypeExtension",i.OBJECT_TYPE_EXTENSION="ObjectTypeExtension",i.INTERFACE_TYPE_EXTENSION="InterfaceTypeExtension",i.UNION_TYPE_EXTENSION="UnionTypeExtension",i.ENUM_TYPE_EXTENSION="EnumTypeExtension",i.INPUT_OBJECT_TYPE_EXTENSION="InputObjectTypeExtension"})(D||(D={}));function vo(i){return i===9||i===32}function ur(i){return i>=48&&i<=57}function Af(i){return i>=97&&i<=122||i>=65&&i<=90}function Bo(i){return Af(i)||i===95}function Sf(i){return Af(i)||ur(i)||i===95}function hw(i){var n;let t=Number.MAX_SAFE_INTEGER,s=null,a=-1;for(let u=0;u<i.length;++u){var l;const f=i[u],d=dw(f);d!==f.length&&(s=(l=s)!==null&&l!==void 0?l:u,a=u,u!==0&&d<t&&(t=d))}return i.map((u,f)=>f===0?u:u.slice(t)).slice((n=s)!==null&&n!==void 0?n:0,a+1)}function dw(i){let n=0;for(;n<i.length&&vo(i.charCodeAt(n));)++n;return n}function pw(i,n){const t=i.replace(/"""/g,'\\"""'),s=t.split(/\r\n|[\n\r]/g),a=s.length===1,l=s.length>1&&s.slice(1).every(C=>C.length===0||vo(C.charCodeAt(0))),u=t.endsWith('\\"""'),f=i.endsWith('"')&&!u,d=i.endsWith("\\"),y=f||d,v=!a||i.length>70||y||l||u;let w="";const N=a&&vo(i.charCodeAt(0));return(v&&!N||l)&&(w+=`
`),w+=t,(v||y)&&(w+=`
`),'"""'+w+'"""'}var F;(function(i){i.SOF="<SOF>",i.EOF="<EOF>",i.BANG="!",i.DOLLAR="$",i.AMP="&",i.PAREN_L="(",i.PAREN_R=")",i.SPREAD="...",i.COLON=":",i.EQUALS="=",i.AT="@",i.BRACKET_L="[",i.BRACKET_R="]",i.BRACE_L="{",i.PIPE="|",i.BRACE_R="}",i.NAME="Name",i.INT="Int",i.FLOAT="Float",i.STRING="String",i.BLOCK_STRING="BlockString",i.COMMENT="Comment"})(F||(F={}));class gw{constructor(n){const t=new If(F.SOF,0,0,0,0);this.source=n,this.lastToken=t,this.token=t,this.line=1,this.lineStart=0}get[Symbol.toStringTag](){return"Lexer"}advance(){return this.lastToken=this.token,this.token=this.lookahead()}lookahead(){let n=this.token;if(n.kind!==F.EOF)do if(n.next)n=n.next;else{const t=yw(this,n.end);n.next=t,t.prev=n,n=t}while(n.kind===F.COMMENT);return n}}function mw(i){return i===F.BANG||i===F.DOLLAR||i===F.AMP||i===F.PAREN_L||i===F.PAREN_R||i===F.SPREAD||i===F.COLON||i===F.EQUALS||i===F.AT||i===F.BRACKET_L||i===F.BRACKET_R||i===F.BRACE_L||i===F.PIPE||i===F.BRACE_R}function Ci(i){return i>=0&&i<=55295||i>=57344&&i<=1114111}function Fs(i,n){return kf(i.charCodeAt(n))&&Ff(i.charCodeAt(n+1))}function kf(i){return i>=55296&&i<=56319}function Ff(i){return i>=56320&&i<=57343}function oi(i,n){const t=i.source.body.codePointAt(n);if(t===void 0)return F.EOF;if(t>=32&&t<=126){const s=String.fromCodePoint(t);return s==='"'?`'"'`:`"${s}"`}return"U+"+t.toString(16).toUpperCase().padStart(4,"0")}function Ge(i,n,t,s,a){const l=i.line,u=1+t-i.lineStart;return new If(n,t,s,l,u,a)}function yw(i,n){const t=i.source.body,s=t.length;let a=n;for(;a<s;){const l=t.charCodeAt(a);switch(l){case 65279:case 9:case 32:case 44:++a;continue;case 10:++a,++i.line,i.lineStart=a;continue;case 13:t.charCodeAt(a+1)===10?a+=2:++a,++i.line,i.lineStart=a;continue;case 35:return vw(i,a);case 33:return Ge(i,F.BANG,a,a+1);case 36:return Ge(i,F.DOLLAR,a,a+1);case 38:return Ge(i,F.AMP,a,a+1);case 40:return Ge(i,F.PAREN_L,a,a+1);case 41:return Ge(i,F.PAREN_R,a,a+1);case 46:if(t.charCodeAt(a+1)===46&&t.charCodeAt(a+2)===46)return Ge(i,F.SPREAD,a,a+3);break;case 58:return Ge(i,F.COLON,a,a+1);case 61:return Ge(i,F.EQUALS,a,a+1);case 64:return Ge(i,F.AT,a,a+1);case 91:return Ge(i,F.BRACKET_L,a,a+1);case 93:return Ge(i,F.BRACKET_R,a,a+1);case 123:return Ge(i,F.BRACE_L,a,a+1);case 124:return Ge(i,F.PIPE,a,a+1);case 125:return Ge(i,F.BRACE_R,a,a+1);case 34:return t.charCodeAt(a+1)===34&&t.charCodeAt(a+2)===34?Iw(i,a):bw(i,a)}if(ur(l)||l===45)return Tw(i,a,l);if(Bo(l))return _w(i,a);throw He(i.source,a,l===39?`Unexpected single quote character ('), did you mean to use a double quote (")?`:Ci(l)||Fs(t,a)?`Unexpected character: ${oi(i,a)}.`:`Invalid character: ${oi(i,a)}.`)}return Ge(i,F.EOF,s,s)}function vw(i,n){const t=i.source.body,s=t.length;let a=n+1;for(;a<s;){const l=t.charCodeAt(a);if(l===10||l===13)break;if(Ci(l))++a;else if(Fs(t,a))a+=2;else break}return Ge(i,F.COMMENT,n,a,t.slice(n+1,a))}function Tw(i,n,t){const s=i.source.body;let a=n,l=t,u=!1;if(l===45&&(l=s.charCodeAt(++a)),l===48){if(l=s.charCodeAt(++a),ur(l))throw He(i.source,a,`Invalid number, unexpected digit after 0: ${oi(i,a)}.`)}else a=oo(i,a,l),l=s.charCodeAt(a);if(l===46&&(u=!0,l=s.charCodeAt(++a),a=oo(i,a,l),l=s.charCodeAt(a)),(l===69||l===101)&&(u=!0,l=s.charCodeAt(++a),(l===43||l===45)&&(l=s.charCodeAt(++a)),a=oo(i,a,l),l=s.charCodeAt(a)),l===46||Bo(l))throw He(i.source,a,`Invalid number, expected digit but got: ${oi(i,a)}.`);return Ge(i,u?F.FLOAT:F.INT,n,a,s.slice(n,a))}function oo(i,n,t){if(!ur(t))throw He(i.source,n,`Invalid number, expected digit but got: ${oi(i,n)}.`);const s=i.source.body;let a=n+1;for(;ur(s.charCodeAt(a));)++a;return a}function bw(i,n){const t=i.source.body,s=t.length;let a=n+1,l=a,u="";for(;a<s;){const f=t.charCodeAt(a);if(f===34)return u+=t.slice(l,a),Ge(i,F.STRING,n,a+1,u);if(f===92){u+=t.slice(l,a);const d=t.charCodeAt(a+1)===117?t.charCodeAt(a+2)===123?ww(i,a):Ew(i,a):Dw(i,a);u+=d.value,a+=d.size,l=a;continue}if(f===10||f===13)break;if(Ci(f))++a;else if(Fs(t,a))a+=2;else throw He(i.source,a,`Invalid character within String: ${oi(i,a)}.`)}throw He(i.source,a,"Unterminated string.")}function ww(i,n){const t=i.source.body;let s=0,a=3;for(;a<12;){const l=t.charCodeAt(n+a++);if(l===125){if(a<5||!Ci(s))break;return{value:String.fromCodePoint(s),size:a}}if(s=s<<4|tr(l),s<0)break}throw He(i.source,n,`Invalid Unicode escape sequence: "${t.slice(n,n+a)}".`)}function Ew(i,n){const t=i.source.body,s=qc(t,n+2);if(Ci(s))return{value:String.fromCodePoint(s),size:6};if(kf(s)&&t.charCodeAt(n+6)===92&&t.charCodeAt(n+7)===117){const a=qc(t,n+8);if(Ff(a))return{value:String.fromCodePoint(s,a),size:12}}throw He(i.source,n,`Invalid Unicode escape sequence: "${t.slice(n,n+6)}".`)}function qc(i,n){return tr(i.charCodeAt(n))<<12|tr(i.charCodeAt(n+1))<<8|tr(i.charCodeAt(n+2))<<4|tr(i.charCodeAt(n+3))}function tr(i){return i>=48&&i<=57?i-48:i>=65&&i<=70?i-55:i>=97&&i<=102?i-87:-1}function Dw(i,n){const t=i.source.body;switch(t.charCodeAt(n+1)){case 34:return{value:'"',size:2};case 92:return{value:"\\",size:2};case 47:return{value:"/",size:2};case 98:return{value:"\b",size:2};case 102:return{value:"\f",size:2};case 110:return{value:`
`,size:2};case 114:return{value:"\r",size:2};case 116:return{value:"	",size:2}}throw He(i.source,n,`Invalid character escape sequence: "${t.slice(n,n+2)}".`)}function Iw(i,n){const t=i.source.body,s=t.length;let a=i.lineStart,l=n+3,u=l,f="";const d=[];for(;l<s;){const y=t.charCodeAt(l);if(y===34&&t.charCodeAt(l+1)===34&&t.charCodeAt(l+2)===34){f+=t.slice(u,l),d.push(f);const v=Ge(i,F.BLOCK_STRING,n,l+3,hw(d).join(`
`));return i.line+=d.length-1,i.lineStart=a,v}if(y===92&&t.charCodeAt(l+1)===34&&t.charCodeAt(l+2)===34&&t.charCodeAt(l+3)===34){f+=t.slice(u,l),u=l+1,l+=4;continue}if(y===10||y===13){f+=t.slice(u,l),d.push(f),y===13&&t.charCodeAt(l+1)===10?l+=2:++l,f="",u=l,a=l;continue}if(Ci(y))++l;else if(Fs(t,l))l+=2;else throw He(i.source,l,`Invalid character within String: ${oi(i,l)}.`)}throw He(i.source,l,"Unterminated string.")}function _w(i,n){const t=i.source.body,s=t.length;let a=n+1;for(;a<s;){const l=t.charCodeAt(a);if(Sf(l))++a;else break}return Ge(i,F.NAME,n,a,t.slice(n,a))}const Aw=10,Nf=2;function Y(i){return Ns(i,[])}function Ns(i,n){switch(typeof i){case"string":return JSON.stringify(i);case"function":return i.name?`[function ${i.name}]`:"[function]";case"object":return Sw(i,n);default:return String(i)}}function Sw(i,n){if(i===null)return"null";if(n.includes(i))return"[Circular]";const t=[...n,i];if(kw(i)){const s=i.toJSON();if(s!==i)return typeof s=="string"?s:Ns(s,t)}else if(Array.isArray(i))return Nw(i,t);return Fw(i,t)}function kw(i){return typeof i.toJSON=="function"}function Fw(i,n){const t=Object.entries(i);return t.length===0?"{}":n.length>Nf?"["+Cw(i)+"]":"{ "+t.map(([a,l])=>a+": "+Ns(l,n)).join(", ")+" }"}function Nw(i,n){if(i.length===0)return"[]";if(n.length>Nf)return"[Array]";const t=Math.min(Aw,i.length),s=i.length-t,a=[];for(let l=0;l<t;++l)a.push(Ns(i[l],n));return s===1?a.push("... 1 more item"):s>1&&a.push(`... ${s} more items`),"["+a.join(", ")+"]"}function Cw(i){const n=Object.prototype.toString.call(i).replace(/^\[object /,"").replace(/]$/,"");if(n==="Object"&&typeof i.constructor=="function"){const t=i.constructor.name;if(typeof t=="string"&&t!=="")return t}return n}const ht=globalThis.process?function(n,t){return n instanceof t}:function(n,t){if(n instanceof t)return!0;if(typeof n=="object"&&n!==null){var s;const a=t.prototype[Symbol.toStringTag],l=Symbol.toStringTag in n?n[Symbol.toStringTag]:(s=n.constructor)===null||s===void 0?void 0:s.name;if(a===l){const u=Y(n);throw new Error(`Cannot use ${a} "${u}" from another module or realm.

Ensure that there is only one instance of "graphql" in the node_modules
directory. If different versions of "graphql" are the dependencies of other
relied on modules, use "resolutions" to ensure only one version is installed.

https://yarnpkg.com/en/docs/selective-version-resolutions

Duplicate "graphql" modules cannot be used at the same time since different
versions may have different capabilities and behavior. The data from one
version used in the function from another could produce confusing and
spurious results.`)}}return!1};class Cf{constructor(n,t="GraphQL request",s={line:1,column:1}){typeof n=="string"||ce(!1,`Body must be a string. Received: ${Y(n)}.`),this.body=n,this.name=t,this.locationOffset=s,this.locationOffset.line>0||ce(!1,"line in locationOffset is 1-indexed and must be positive."),this.locationOffset.column>0||ce(!1,"column in locationOffset is 1-indexed and must be positive.")}get[Symbol.toStringTag](){return"Source"}}function xw(i){return ht(i,Cf)}function Ow(i,n){return new xf(i,n).parseDocument()}function Rw(i,n){const t=new xf(i,n);t.expectToken(F.SOF);const s=t.parseValueLiteral(!1);return t.expectToken(F.EOF),s}class xf{constructor(n,t={}){const s=xw(n)?n:new Cf(n);this._lexer=new gw(s),this._options=t,this._tokenCounter=0}parseName(){const n=this.expectToken(F.NAME);return this.node(n,{kind:D.NAME,value:n.value})}parseDocument(){return this.node(this._lexer.token,{kind:D.DOCUMENT,definitions:this.many(F.SOF,this.parseDefinition,F.EOF)})}parseDefinition(){if(this.peek(F.BRACE_L))return this.parseOperationDefinition();const n=this.peekDescription(),t=n?this._lexer.lookahead():this._lexer.token;if(t.kind===F.NAME){switch(t.value){case"schema":return this.parseSchemaDefinition();case"scalar":return this.parseScalarTypeDefinition();case"type":return this.parseObjectTypeDefinition();case"interface":return this.parseInterfaceTypeDefinition();case"union":return this.parseUnionTypeDefinition();case"enum":return this.parseEnumTypeDefinition();case"input":return this.parseInputObjectTypeDefinition();case"directive":return this.parseDirectiveDefinition()}if(n)throw He(this._lexer.source,this._lexer.token.start,"Unexpected description, descriptions are supported only on type definitions.");switch(t.value){case"query":case"mutation":case"subscription":return this.parseOperationDefinition();case"fragment":return this.parseFragmentDefinition();case"extend":return this.parseTypeSystemExtension()}}throw this.unexpected(t)}parseOperationDefinition(){const n=this._lexer.token;if(this.peek(F.BRACE_L))return this.node(n,{kind:D.OPERATION_DEFINITION,operation:Ln.QUERY,name:void 0,variableDefinitions:[],directives:[],selectionSet:this.parseSelectionSet()});const t=this.parseOperationType();let s;return this.peek(F.NAME)&&(s=this.parseName()),this.node(n,{kind:D.OPERATION_DEFINITION,operation:t,name:s,variableDefinitions:this.parseVariableDefinitions(),directives:this.parseDirectives(!1),selectionSet:this.parseSelectionSet()})}parseOperationType(){const n=this.expectToken(F.NAME);switch(n.value){case"query":return Ln.QUERY;case"mutation":return Ln.MUTATION;case"subscription":return Ln.SUBSCRIPTION}throw this.unexpected(n)}parseVariableDefinitions(){return this.optionalMany(F.PAREN_L,this.parseVariableDefinition,F.PAREN_R)}parseVariableDefinition(){return this.node(this._lexer.token,{kind:D.VARIABLE_DEFINITION,variable:this.parseVariable(),type:(this.expectToken(F.COLON),this.parseTypeReference()),defaultValue:this.expectOptionalToken(F.EQUALS)?this.parseConstValueLiteral():void 0,directives:this.parseConstDirectives()})}parseVariable(){const n=this._lexer.token;return this.expectToken(F.DOLLAR),this.node(n,{kind:D.VARIABLE,name:this.parseName()})}parseSelectionSet(){return this.node(this._lexer.token,{kind:D.SELECTION_SET,selections:this.many(F.BRACE_L,this.parseSelection,F.BRACE_R)})}parseSelection(){return this.peek(F.SPREAD)?this.parseFragment():this.parseField()}parseField(){const n=this._lexer.token,t=this.parseName();let s,a;return this.expectOptionalToken(F.COLON)?(s=t,a=this.parseName()):a=t,this.node(n,{kind:D.FIELD,alias:s,name:a,arguments:this.parseArguments(!1),directives:this.parseDirectives(!1),selectionSet:this.peek(F.BRACE_L)?this.parseSelectionSet():void 0})}parseArguments(n){const t=n?this.parseConstArgument:this.parseArgument;return this.optionalMany(F.PAREN_L,t,F.PAREN_R)}parseArgument(n=!1){const t=this._lexer.token,s=this.parseName();return this.expectToken(F.COLON),this.node(t,{kind:D.ARGUMENT,name:s,value:this.parseValueLiteral(n)})}parseConstArgument(){return this.parseArgument(!0)}parseFragment(){const n=this._lexer.token;this.expectToken(F.SPREAD);const t=this.expectOptionalKeyword("on");return!t&&this.peek(F.NAME)?this.node(n,{kind:D.FRAGMENT_SPREAD,name:this.parseFragmentName(),directives:this.parseDirectives(!1)}):this.node(n,{kind:D.INLINE_FRAGMENT,typeCondition:t?this.parseNamedType():void 0,directives:this.parseDirectives(!1),selectionSet:this.parseSelectionSet()})}parseFragmentDefinition(){const n=this._lexer.token;return this.expectKeyword("fragment"),this._options.allowLegacyFragmentVariables===!0?this.node(n,{kind:D.FRAGMENT_DEFINITION,name:this.parseFragmentName(),variableDefinitions:this.parseVariableDefinitions(),typeCondition:(this.expectKeyword("on"),this.parseNamedType()),directives:this.parseDirectives(!1),selectionSet:this.parseSelectionSet()}):this.node(n,{kind:D.FRAGMENT_DEFINITION,name:this.parseFragmentName(),typeCondition:(this.expectKeyword("on"),this.parseNamedType()),directives:this.parseDirectives(!1),selectionSet:this.parseSelectionSet()})}parseFragmentName(){if(this._lexer.token.value==="on")throw this.unexpected();return this.parseName()}parseValueLiteral(n){const t=this._lexer.token;switch(t.kind){case F.BRACKET_L:return this.parseList(n);case F.BRACE_L:return this.parseObject(n);case F.INT:return this.advanceLexer(),this.node(t,{kind:D.INT,value:t.value});case F.FLOAT:return this.advanceLexer(),this.node(t,{kind:D.FLOAT,value:t.value});case F.STRING:case F.BLOCK_STRING:return this.parseStringLiteral();case F.NAME:switch(this.advanceLexer(),t.value){case"true":return this.node(t,{kind:D.BOOLEAN,value:!0});case"false":return this.node(t,{kind:D.BOOLEAN,value:!1});case"null":return this.node(t,{kind:D.NULL});default:return this.node(t,{kind:D.ENUM,value:t.value})}case F.DOLLAR:if(n)if(this.expectToken(F.DOLLAR),this._lexer.token.kind===F.NAME){const s=this._lexer.token.value;throw He(this._lexer.source,t.start,`Unexpected variable "$${s}" in constant value.`)}else throw this.unexpected(t);return this.parseVariable();default:throw this.unexpected()}}parseConstValueLiteral(){return this.parseValueLiteral(!0)}parseStringLiteral(){const n=this._lexer.token;return this.advanceLexer(),this.node(n,{kind:D.STRING,value:n.value,block:n.kind===F.BLOCK_STRING})}parseList(n){const t=()=>this.parseValueLiteral(n);return this.node(this._lexer.token,{kind:D.LIST,values:this.any(F.BRACKET_L,t,F.BRACKET_R)})}parseObject(n){const t=()=>this.parseObjectField(n);return this.node(this._lexer.token,{kind:D.OBJECT,fields:this.any(F.BRACE_L,t,F.BRACE_R)})}parseObjectField(n){const t=this._lexer.token,s=this.parseName();return this.expectToken(F.COLON),this.node(t,{kind:D.OBJECT_FIELD,name:s,value:this.parseValueLiteral(n)})}parseDirectives(n){const t=[];for(;this.peek(F.AT);)t.push(this.parseDirective(n));return t}parseConstDirectives(){return this.parseDirectives(!0)}parseDirective(n){const t=this._lexer.token;return this.expectToken(F.AT),this.node(t,{kind:D.DIRECTIVE,name:this.parseName(),arguments:this.parseArguments(n)})}parseTypeReference(){const n=this._lexer.token;let t;if(this.expectOptionalToken(F.BRACKET_L)){const s=this.parseTypeReference();this.expectToken(F.BRACKET_R),t=this.node(n,{kind:D.LIST_TYPE,type:s})}else t=this.parseNamedType();return this.expectOptionalToken(F.BANG)?this.node(n,{kind:D.NON_NULL_TYPE,type:t}):t}parseNamedType(){return this.node(this._lexer.token,{kind:D.NAMED_TYPE,name:this.parseName()})}peekDescription(){return this.peek(F.STRING)||this.peek(F.BLOCK_STRING)}parseDescription(){if(this.peekDescription())return this.parseStringLiteral()}parseSchemaDefinition(){const n=this._lexer.token,t=this.parseDescription();this.expectKeyword("schema");const s=this.parseConstDirectives(),a=this.many(F.BRACE_L,this.parseOperationTypeDefinition,F.BRACE_R);return this.node(n,{kind:D.SCHEMA_DEFINITION,description:t,directives:s,operationTypes:a})}parseOperationTypeDefinition(){const n=this._lexer.token,t=this.parseOperationType();this.expectToken(F.COLON);const s=this.parseNamedType();return this.node(n,{kind:D.OPERATION_TYPE_DEFINITION,operation:t,type:s})}parseScalarTypeDefinition(){const n=this._lexer.token,t=this.parseDescription();this.expectKeyword("scalar");const s=this.parseName(),a=this.parseConstDirectives();return this.node(n,{kind:D.SCALAR_TYPE_DEFINITION,description:t,name:s,directives:a})}parseObjectTypeDefinition(){const n=this._lexer.token,t=this.parseDescription();this.expectKeyword("type");const s=this.parseName(),a=this.parseImplementsInterfaces(),l=this.parseConstDirectives(),u=this.parseFieldsDefinition();return this.node(n,{kind:D.OBJECT_TYPE_DEFINITION,description:t,name:s,interfaces:a,directives:l,fields:u})}parseImplementsInterfaces(){return this.expectOptionalKeyword("implements")?this.delimitedMany(F.AMP,this.parseNamedType):[]}parseFieldsDefinition(){return this.optionalMany(F.BRACE_L,this.parseFieldDefinition,F.BRACE_R)}parseFieldDefinition(){const n=this._lexer.token,t=this.parseDescription(),s=this.parseName(),a=this.parseArgumentDefs();this.expectToken(F.COLON);const l=this.parseTypeReference(),u=this.parseConstDirectives();return this.node(n,{kind:D.FIELD_DEFINITION,description:t,name:s,arguments:a,type:l,directives:u})}parseArgumentDefs(){return this.optionalMany(F.PAREN_L,this.parseInputValueDef,F.PAREN_R)}parseInputValueDef(){const n=this._lexer.token,t=this.parseDescription(),s=this.parseName();this.expectToken(F.COLON);const a=this.parseTypeReference();let l;this.expectOptionalToken(F.EQUALS)&&(l=this.parseConstValueLiteral());const u=this.parseConstDirectives();return this.node(n,{kind:D.INPUT_VALUE_DEFINITION,description:t,name:s,type:a,defaultValue:l,directives:u})}parseInterfaceTypeDefinition(){const n=this._lexer.token,t=this.parseDescription();this.expectKeyword("interface");const s=this.parseName(),a=this.parseImplementsInterfaces(),l=this.parseConstDirectives(),u=this.parseFieldsDefinition();return this.node(n,{kind:D.INTERFACE_TYPE_DEFINITION,description:t,name:s,interfaces:a,directives:l,fields:u})}parseUnionTypeDefinition(){const n=this._lexer.token,t=this.parseDescription();this.expectKeyword("union");const s=this.parseName(),a=this.parseConstDirectives(),l=this.parseUnionMemberTypes();return this.node(n,{kind:D.UNION_TYPE_DEFINITION,description:t,name:s,directives:a,types:l})}parseUnionMemberTypes(){return this.expectOptionalToken(F.EQUALS)?this.delimitedMany(F.PIPE,this.parseNamedType):[]}parseEnumTypeDefinition(){const n=this._lexer.token,t=this.parseDescription();this.expectKeyword("enum");const s=this.parseName(),a=this.parseConstDirectives(),l=this.parseEnumValuesDefinition();return this.node(n,{kind:D.ENUM_TYPE_DEFINITION,description:t,name:s,directives:a,values:l})}parseEnumValuesDefinition(){return this.optionalMany(F.BRACE_L,this.parseEnumValueDefinition,F.BRACE_R)}parseEnumValueDefinition(){const n=this._lexer.token,t=this.parseDescription(),s=this.parseEnumValueName(),a=this.parseConstDirectives();return this.node(n,{kind:D.ENUM_VALUE_DEFINITION,description:t,name:s,directives:a})}parseEnumValueName(){if(this._lexer.token.value==="true"||this._lexer.token.value==="false"||this._lexer.token.value==="null")throw He(this._lexer.source,this._lexer.token.start,`${hs(this._lexer.token)} is reserved and cannot be used for an enum value.`);return this.parseName()}parseInputObjectTypeDefinition(){const n=this._lexer.token,t=this.parseDescription();this.expectKeyword("input");const s=this.parseName(),a=this.parseConstDirectives(),l=this.parseInputFieldsDefinition();return this.node(n,{kind:D.INPUT_OBJECT_TYPE_DEFINITION,description:t,name:s,directives:a,fields:l})}parseInputFieldsDefinition(){return this.optionalMany(F.BRACE_L,this.parseInputValueDef,F.BRACE_R)}parseTypeSystemExtension(){const n=this._lexer.lookahead();if(n.kind===F.NAME)switch(n.value){case"schema":return this.parseSchemaExtension();case"scalar":return this.parseScalarTypeExtension();case"type":return this.parseObjectTypeExtension();case"interface":return this.parseInterfaceTypeExtension();case"union":return this.parseUnionTypeExtension();case"enum":return this.parseEnumTypeExtension();case"input":return this.parseInputObjectTypeExtension()}throw this.unexpected(n)}parseSchemaExtension(){const n=this._lexer.token;this.expectKeyword("extend"),this.expectKeyword("schema");const t=this.parseConstDirectives(),s=this.optionalMany(F.BRACE_L,this.parseOperationTypeDefinition,F.BRACE_R);if(t.length===0&&s.length===0)throw this.unexpected();return this.node(n,{kind:D.SCHEMA_EXTENSION,directives:t,operationTypes:s})}parseScalarTypeExtension(){const n=this._lexer.token;this.expectKeyword("extend"),this.expectKeyword("scalar");const t=this.parseName(),s=this.parseConstDirectives();if(s.length===0)throw this.unexpected();return this.node(n,{kind:D.SCALAR_TYPE_EXTENSION,name:t,directives:s})}parseObjectTypeExtension(){const n=this._lexer.token;this.expectKeyword("extend"),this.expectKeyword("type");const t=this.parseName(),s=this.parseImplementsInterfaces(),a=this.parseConstDirectives(),l=this.parseFieldsDefinition();if(s.length===0&&a.length===0&&l.length===0)throw this.unexpected();return this.node(n,{kind:D.OBJECT_TYPE_EXTENSION,name:t,interfaces:s,directives:a,fields:l})}parseInterfaceTypeExtension(){const n=this._lexer.token;this.expectKeyword("extend"),this.expectKeyword("interface");const t=this.parseName(),s=this.parseImplementsInterfaces(),a=this.parseConstDirectives(),l=this.parseFieldsDefinition();if(s.length===0&&a.length===0&&l.length===0)throw this.unexpected();return this.node(n,{kind:D.INTERFACE_TYPE_EXTENSION,name:t,interfaces:s,directives:a,fields:l})}parseUnionTypeExtension(){const n=this._lexer.token;this.expectKeyword("extend"),this.expectKeyword("union");const t=this.parseName(),s=this.parseConstDirectives(),a=this.parseUnionMemberTypes();if(s.length===0&&a.length===0)throw this.unexpected();return this.node(n,{kind:D.UNION_TYPE_EXTENSION,name:t,directives:s,types:a})}parseEnumTypeExtension(){const n=this._lexer.token;this.expectKeyword("extend"),this.expectKeyword("enum");const t=this.parseName(),s=this.parseConstDirectives(),a=this.parseEnumValuesDefinition();if(s.length===0&&a.length===0)throw this.unexpected();return this.node(n,{kind:D.ENUM_TYPE_EXTENSION,name:t,directives:s,values:a})}parseInputObjectTypeExtension(){const n=this._lexer.token;this.expectKeyword("extend"),this.expectKeyword("input");const t=this.parseName(),s=this.parseConstDirectives(),a=this.parseInputFieldsDefinition();if(s.length===0&&a.length===0)throw this.unexpected();return this.node(n,{kind:D.INPUT_OBJECT_TYPE_EXTENSION,name:t,directives:s,fields:a})}parseDirectiveDefinition(){const n=this._lexer.token,t=this.parseDescription();this.expectKeyword("directive"),this.expectToken(F.AT);const s=this.parseName(),a=this.parseArgumentDefs(),l=this.expectOptionalKeyword("repeatable");this.expectKeyword("on");const u=this.parseDirectiveLocations();return this.node(n,{kind:D.DIRECTIVE_DEFINITION,description:t,name:s,arguments:a,repeatable:l,locations:u})}parseDirectiveLocations(){return this.delimitedMany(F.PIPE,this.parseDirectiveLocation)}parseDirectiveLocation(){const n=this._lexer.token,t=this.parseName();if(Object.prototype.hasOwnProperty.call(q,t.value))return t;throw this.unexpected(n)}node(n,t){return this._options.noLocation!==!0&&(t.loc=new cw(n,this._lexer.lastToken,this._lexer.source)),t}peek(n){return this._lexer.token.kind===n}expectToken(n){const t=this._lexer.token;if(t.kind===n)return this.advanceLexer(),t;throw He(this._lexer.source,t.start,`Expected ${Of(n)}, found ${hs(t)}.`)}expectOptionalToken(n){return this._lexer.token.kind===n?(this.advanceLexer(),!0):!1}expectKeyword(n){const t=this._lexer.token;if(t.kind===F.NAME&&t.value===n)this.advanceLexer();else throw He(this._lexer.source,t.start,`Expected "${n}", found ${hs(t)}.`)}expectOptionalKeyword(n){const t=this._lexer.token;return t.kind===F.NAME&&t.value===n?(this.advanceLexer(),!0):!1}unexpected(n){const t=n??this._lexer.token;return He(this._lexer.source,t.start,`Unexpected ${hs(t)}.`)}any(n,t,s){this.expectToken(n);const a=[];for(;!this.expectOptionalToken(s);)a.push(t.call(this));return a}optionalMany(n,t,s){if(this.expectOptionalToken(n)){const a=[];do a.push(t.call(this));while(!this.expectOptionalToken(s));return a}return[]}many(n,t,s){this.expectToken(n);const a=[];do a.push(t.call(this));while(!this.expectOptionalToken(s));return a}delimitedMany(n,t){this.expectOptionalToken(n);const s=[];do s.push(t.call(this));while(this.expectOptionalToken(n));return s}advanceLexer(){const{maxTokens:n}=this._options,t=this._lexer.advance();if(n!==void 0&&t.kind!==F.EOF&&(++this._tokenCounter,this._tokenCounter>n))throw He(this._lexer.source,t.start,`Document contains more that ${n} tokens. Parsing aborted.`)}}function hs(i){const n=i.value;return Of(i.kind)+(n!=null?` "${n}"`:"")}function Of(i){return mw(i)?`"${i}"`:i}const Lw=5;function Cs(i,n){const[t,s]=n?[i,n]:[void 0,i];let a=" Did you mean ";t&&(a+=t+" ");const l=s.map(d=>`"${d}"`);switch(l.length){case 0:return"";case 1:return a+l[0]+"?";case 2:return a+l[0]+" or "+l[1]+"?"}const u=l.slice(0,Lw),f=u.pop();return a+u.join(", ")+", or "+f+"?"}function Hc(i){return i}function Fi(i,n){const t=Object.create(null);for(const s of i)t[n(s)]=s;return t}function si(i,n,t){const s=Object.create(null);for(const a of i)s[n(a)]=t(a);return s}function It(i,n){const t=Object.create(null);for(const s of Object.keys(i))t[s]=n(i[s],s);return t}function Pw(i,n){let t=0,s=0;for(;t<i.length&&s<n.length;){let a=i.charCodeAt(t),l=n.charCodeAt(s);if(ds(a)&&ds(l)){let u=0;do++t,u=u*10+a-To,a=i.charCodeAt(t);while(ds(a)&&u>0);let f=0;do++s,f=f*10+l-To,l=n.charCodeAt(s);while(ds(l)&&f>0);if(u<f)return-1;if(u>f)return 1}else{if(a<l)return-1;if(a>l)return 1;++t,++s}}return i.length-n.length}const To=48,Bw=57;function ds(i){return!isNaN(i)&&To<=i&&i<=Bw}function xs(i,n){const t=Object.create(null),s=new Uw(i),a=Math.floor(i.length*.4)+1;for(const l of n){const u=s.measure(l,a);u!==void 0&&(t[l]=u)}return Object.keys(t).sort((l,u)=>{const f=t[l]-t[u];return f!==0?f:Pw(l,u)})}class Uw{constructor(n){this._input=n,this._inputLowerCase=n.toLowerCase(),this._inputArray=jc(this._inputLowerCase),this._rows=[new Array(n.length+1).fill(0),new Array(n.length+1).fill(0),new Array(n.length+1).fill(0)]}measure(n,t){if(this._input===n)return 0;const s=n.toLowerCase();if(this._inputLowerCase===s)return 1;let a=jc(s),l=this._inputArray;if(a.length<l.length){const v=a;a=l,l=v}const u=a.length,f=l.length;if(u-f>t)return;const d=this._rows;for(let v=0;v<=f;v++)d[0][v]=v;for(let v=1;v<=u;v++){const w=d[(v-1)%3],N=d[v%3];let C=N[0]=v;for(let R=1;R<=f;R++){const L=a[v-1]===l[R-1]?0:1;let Q=Math.min(w[R]+1,N[R-1]+1,w[R-1]+L);if(v>1&&R>1&&a[v-1]===l[R-2]&&a[v-2]===l[R-1]){const he=d[(v-2)%3][R-2];Q=Math.min(Q,he+1)}Q<C&&(C=Q),N[R]=Q}if(C>t)return}const y=d[u%3][f];return y<=t?y:void 0}}function jc(i){const n=i.length,t=new Array(n);for(let s=0;s<n;++s)t[s]=i.charCodeAt(s);return t}function Bn(i){if(i==null)return Object.create(null);if(Object.getPrototypeOf(i)===null)return i;const n=Object.create(null);for(const[t,s]of Object.entries(i))n[t]=s;return n}function Mw(i){return`"${i.replace($w,Gw)}"`}const $w=/[\x00-\x1f\x22\x5c\x7f-\x9f]/g;function Gw(i){return Ww[i.charCodeAt(0)]}const Ww=["\\u0000","\\u0001","\\u0002","\\u0003","\\u0004","\\u0005","\\u0006","\\u0007","\\b","\\t","\\n","\\u000B","\\f","\\r","\\u000E","\\u000F","\\u0010","\\u0011","\\u0012","\\u0013","\\u0014","\\u0015","\\u0016","\\u0017","\\u0018","\\u0019","\\u001A","\\u001B","\\u001C","\\u001D","\\u001E","\\u001F","","",'\\"',"","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","\\\\","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","\\u007F","\\u0080","\\u0081","\\u0082","\\u0083","\\u0084","\\u0085","\\u0086","\\u0087","\\u0088","\\u0089","\\u008A","\\u008B","\\u008C","\\u008D","\\u008E","\\u008F","\\u0090","\\u0091","\\u0092","\\u0093","\\u0094","\\u0095","\\u0096","\\u0097","\\u0098","\\u0099","\\u009A","\\u009B","\\u009C","\\u009D","\\u009E","\\u009F"],ir=Object.freeze({});function Rf(i,n,t=_f){const s=new Map;for(const he of Object.values(D))s.set(he,Lf(n,he));let a,l=Array.isArray(i),u=[i],f=-1,d=[],y=i,v,w;const N=[],C=[];do{f++;const he=f===u.length,$e=he&&d.length!==0;if(he){if(v=C.length===0?void 0:N[N.length-1],y=w,w=C.pop(),$e)if(l){y=y.slice();let ke=0;for(const[xe,nn]of d){const Je=xe-ke;nn===null?(y.splice(Je,1),ke++):y[Je]=nn}}else{y=Object.defineProperties({},Object.getOwnPropertyDescriptors(y));for(const[ke,xe]of d)y[ke]=xe}f=a.index,u=a.keys,d=a.edits,l=a.inArray,a=a.prev}else if(w){if(v=l?f:u[f],y=w[v],y==null)continue;N.push(v)}let Ee;if(!Array.isArray(y)){var R,L;Yc(y)||ce(!1,`Invalid AST Node: ${Y(y)}.`);const ke=he?(R=s.get(y.kind))===null||R===void 0?void 0:R.leave:(L=s.get(y.kind))===null||L===void 0?void 0:L.enter;if(Ee=ke==null?void 0:ke.call(n,y,v,w,N,C),Ee===ir)break;if(Ee===!1){if(!he){N.pop();continue}}else if(Ee!==void 0&&(d.push([v,Ee]),!he))if(Yc(Ee))y=Ee;else{N.pop();continue}}if(Ee===void 0&&$e&&d.push([v,y]),he)N.pop();else{var Q;a={inArray:l,index:f,keys:u,edits:d,prev:a},l=Array.isArray(y),u=l?y:(Q=t[y.kind])!==null&&Q!==void 0?Q:[],f=-1,d=[],w&&C.push(w),w=y}}while(a!==void 0);return d.length!==0?d[d.length-1][1]:i}function Vw(i){const n=new Array(i.length).fill(null),t=Object.create(null);for(const s of Object.values(D)){let a=!1;const l=new Array(i.length).fill(void 0),u=new Array(i.length).fill(void 0);for(let d=0;d<i.length;++d){const{enter:y,leave:v}=Lf(i[d],s);a||(a=y!=null||v!=null),l[d]=y,u[d]=v}if(!a)continue;const f={enter(...d){const y=d[0];for(let w=0;w<i.length;w++)if(n[w]===null){var v;const N=(v=l[w])===null||v===void 0?void 0:v.apply(i[w],d);if(N===!1)n[w]=y;else if(N===ir)n[w]=ir;else if(N!==void 0)return N}},leave(...d){const y=d[0];for(let w=0;w<i.length;w++)if(n[w]===null){var v;const N=(v=u[w])===null||v===void 0?void 0:v.apply(i[w],d);if(N===ir)n[w]=ir;else if(N!==void 0&&N!==!1)return N}else n[w]===y&&(n[w]=null)}};t[s]=f}return t}function Lf(i,n){const t=i[n];return typeof t=="object"?t:typeof t=="function"?{enter:t,leave:void 0}:{enter:i.enter,leave:i.leave}}function ct(i){return Rf(i,qw)}const Yw=80,qw={Name:{leave:i=>i.value},Variable:{leave:i=>"$"+i.name},Document:{leave:i=>G(i.definitions,`

`)},OperationDefinition:{leave(i){const n=le("(",G(i.variableDefinitions,", "),")"),t=G([i.operation,G([i.name,n]),G(i.directives," ")]," ");return(t==="query"?"":t+" ")+i.selectionSet}},VariableDefinition:{leave:({variable:i,type:n,defaultValue:t,directives:s})=>i+": "+n+le(" = ",t)+le(" ",G(s," "))},SelectionSet:{leave:({selections:i})=>qn(i)},Field:{leave({alias:i,name:n,arguments:t,directives:s,selectionSet:a}){const l=le("",i,": ")+n;let u=l+le("(",G(t,", "),")");return u.length>Yw&&(u=l+le(`(
`,ms(G(t,`
`)),`
)`)),G([u,G(s," "),a]," ")}},Argument:{leave:({name:i,value:n})=>i+": "+n},FragmentSpread:{leave:({name:i,directives:n})=>"..."+i+le(" ",G(n," "))},InlineFragment:{leave:({typeCondition:i,directives:n,selectionSet:t})=>G(["...",le("on ",i),G(n," "),t]," ")},FragmentDefinition:{leave:({name:i,typeCondition:n,variableDefinitions:t,directives:s,selectionSet:a})=>`fragment ${i}${le("(",G(t,", "),")")} on ${n} ${le("",G(s," ")," ")}`+a},IntValue:{leave:({value:i})=>i},FloatValue:{leave:({value:i})=>i},StringValue:{leave:({value:i,block:n})=>n?pw(i):Mw(i)},BooleanValue:{leave:({value:i})=>i?"true":"false"},NullValue:{leave:()=>"null"},EnumValue:{leave:({value:i})=>i},ListValue:{leave:({values:i})=>"["+G(i,", ")+"]"},ObjectValue:{leave:({fields:i})=>"{"+G(i,", ")+"}"},ObjectField:{leave:({name:i,value:n})=>i+": "+n},Directive:{leave:({name:i,arguments:n})=>"@"+i+le("(",G(n,", "),")")},NamedType:{leave:({name:i})=>i},ListType:{leave:({type:i})=>"["+i+"]"},NonNullType:{leave:({type:i})=>i+"!"},SchemaDefinition:{leave:({description:i,directives:n,operationTypes:t})=>le("",i,`
`)+G(["schema",G(n," "),qn(t)]," ")},OperationTypeDefinition:{leave:({operation:i,type:n})=>i+": "+n},ScalarTypeDefinition:{leave:({description:i,name:n,directives:t})=>le("",i,`
`)+G(["scalar",n,G(t," ")]," ")},ObjectTypeDefinition:{leave:({description:i,name:n,interfaces:t,directives:s,fields:a})=>le("",i,`
`)+G(["type",n,le("implements ",G(t," & ")),G(s," "),qn(a)]," ")},FieldDefinition:{leave:({description:i,name:n,arguments:t,type:s,directives:a})=>le("",i,`
`)+n+(zc(t)?le(`(
`,ms(G(t,`
`)),`
)`):le("(",G(t,", "),")"))+": "+s+le(" ",G(a," "))},InputValueDefinition:{leave:({description:i,name:n,type:t,defaultValue:s,directives:a})=>le("",i,`
`)+G([n+": "+t,le("= ",s),G(a," ")]," ")},InterfaceTypeDefinition:{leave:({description:i,name:n,interfaces:t,directives:s,fields:a})=>le("",i,`
`)+G(["interface",n,le("implements ",G(t," & ")),G(s," "),qn(a)]," ")},UnionTypeDefinition:{leave:({description:i,name:n,directives:t,types:s})=>le("",i,`
`)+G(["union",n,G(t," "),le("= ",G(s," | "))]," ")},EnumTypeDefinition:{leave:({description:i,name:n,directives:t,values:s})=>le("",i,`
`)+G(["enum",n,G(t," "),qn(s)]," ")},EnumValueDefinition:{leave:({description:i,name:n,directives:t})=>le("",i,`
`)+G([n,G(t," ")]," ")},InputObjectTypeDefinition:{leave:({description:i,name:n,directives:t,fields:s})=>le("",i,`
`)+G(["input",n,G(t," "),qn(s)]," ")},DirectiveDefinition:{leave:({description:i,name:n,arguments:t,repeatable:s,locations:a})=>le("",i,`
`)+"directive @"+n+(zc(t)?le(`(
`,ms(G(t,`
`)),`
)`):le("(",G(t,", "),")"))+(s?" repeatable":"")+" on "+G(a," | ")},SchemaExtension:{leave:({directives:i,operationTypes:n})=>G(["extend schema",G(i," "),qn(n)]," ")},ScalarTypeExtension:{leave:({name:i,directives:n})=>G(["extend scalar",i,G(n," ")]," ")},ObjectTypeExtension:{leave:({name:i,interfaces:n,directives:t,fields:s})=>G(["extend type",i,le("implements ",G(n," & ")),G(t," "),qn(s)]," ")},InterfaceTypeExtension:{leave:({name:i,interfaces:n,directives:t,fields:s})=>G(["extend interface",i,le("implements ",G(n," & ")),G(t," "),qn(s)]," ")},UnionTypeExtension:{leave:({name:i,directives:n,types:t})=>G(["extend union",i,G(n," "),le("= ",G(t," | "))]," ")},EnumTypeExtension:{leave:({name:i,directives:n,values:t})=>G(["extend enum",i,G(n," "),qn(t)]," ")},InputObjectTypeExtension:{leave:({name:i,directives:n,fields:t})=>G(["extend input",i,G(n," "),qn(t)]," ")}};function G(i,n=""){var t;return(t=i==null?void 0:i.filter(s=>s).join(n))!==null&&t!==void 0?t:""}function qn(i){return le(`{
`,ms(G(i,`
`)),`
}`)}function le(i,n,t=""){return n!=null&&n!==""?i+n+t:""}function ms(i){return le("  ",i.replace(/\n/g,`
  `))}function zc(i){var n;return(n=i==null?void 0:i.some(t=>t.includes(`
`)))!==null&&n!==void 0?n:!1}function bo(i,n){switch(i.kind){case D.NULL:return null;case D.INT:return parseInt(i.value,10);case D.FLOAT:return parseFloat(i.value);case D.STRING:case D.ENUM:case D.BOOLEAN:return i.value;case D.LIST:return i.values.map(t=>bo(t,n));case D.OBJECT:return si(i.fields,t=>t.name.value,t=>bo(t.value,n));case D.VARIABLE:return n==null?void 0:n[i.name.value]}}function it(i){if(i!=null||ce(!1,"Must provide name."),typeof i=="string"||ce(!1,"Expected name to be a string."),i.length===0)throw new V("Expected name to be a non-empty string.");for(let n=1;n<i.length;++n)if(!Sf(i.charCodeAt(n)))throw new V(`Names must only contain [_a-zA-Z0-9] but "${i}" does not.`);if(!Bo(i.charCodeAt(0)))throw new V(`Names must start with [_a-zA-Z] but "${i}" does not.`);return i}function Hw(i){if(i==="true"||i==="false"||i==="null")throw new V(`Enum values cannot be named: ${i}`);return it(i)}function Uo(i){return jt(i)||gn(i)||on(i)||Jn(i)||Kn(i)||Xn(i)||ci(i)||mn(i)}function jt(i){return ht(i,Nt)}function gn(i){return ht(i,ft)}function jw(i){if(!gn(i))throw new Error(`Expected ${Y(i)} to be a GraphQL Object type.`);return i}function on(i){return ht(i,Es)}function zw(i){if(!on(i))throw new Error(`Expected ${Y(i)} to be a GraphQL Interface type.`);return i}function Jn(i){return ht(i,Ds)}function Kn(i){return ht(i,Ni)}function Xn(i){return ht(i,Is)}function ci(i){return ht(i,pn)}function mn(i){return ht(i,se)}function Pf(i){return jt(i)||Kn(i)||Xn(i)||Mo(i)&&Pf(i.ofType)}function Bf(i){return jt(i)||gn(i)||on(i)||Jn(i)||Kn(i)||Mo(i)&&Bf(i.ofType)}function Uf(i){return jt(i)||Kn(i)}function Qw(i){return on(i)||Jn(i)}class pn{constructor(n){Uo(n)||ce(!1,`Expected ${Y(n)} to be a GraphQL type.`),this.ofType=n}get[Symbol.toStringTag](){return"GraphQLList"}toString(){return"["+String(this.ofType)+"]"}toJSON(){return this.toString()}}class se{constructor(n){Mf(n)||ce(!1,`Expected ${Y(n)} to be a GraphQL nullable type.`),this.ofType=n}get[Symbol.toStringTag](){return"GraphQLNonNull"}toString(){return String(this.ofType)+"!"}toJSON(){return this.toString()}}function Mo(i){return ci(i)||mn(i)}function Mf(i){return Uo(i)&&!mn(i)}function Jw(i){if(!Mf(i))throw new Error(`Expected ${Y(i)} to be a GraphQL nullable type.`);return i}function ID(i){return jt(i)||gn(i)||on(i)||Jn(i)||Kn(i)||Xn(i)}function Kw(i){if(i){let n=i;for(;Mo(n);)n=n.ofType;return n}}function $f(i){return typeof i=="function"?i():i}function Gf(i){return typeof i=="function"?i():i}class Nt{constructor(n){var t,s,a,l;const u=(t=n.parseValue)!==null&&t!==void 0?t:Hc;this.name=it(n.name),this.description=n.description,this.specifiedByURL=n.specifiedByURL,this.serialize=(s=n.serialize)!==null&&s!==void 0?s:Hc,this.parseValue=u,this.parseLiteral=(a=n.parseLiteral)!==null&&a!==void 0?a:(f,d)=>u(bo(f,d)),this.extensions=Bn(n.extensions),this.astNode=n.astNode,this.extensionASTNodes=(l=n.extensionASTNodes)!==null&&l!==void 0?l:[],n.specifiedByURL==null||typeof n.specifiedByURL=="string"||ce(!1,`${this.name} must provide "specifiedByURL" as a string, but got: ${Y(n.specifiedByURL)}.`),n.serialize==null||typeof n.serialize=="function"||ce(!1,`${this.name} must provide "serialize" function. If this custom Scalar is also used as an input type, ensure "parseValue" and "parseLiteral" functions are also provided.`),n.parseLiteral&&(typeof n.parseValue=="function"&&typeof n.parseLiteral=="function"||ce(!1,`${this.name} must provide both "parseValue" and "parseLiteral" functions.`))}get[Symbol.toStringTag](){return"GraphQLScalarType"}toConfig(){return{name:this.name,description:this.description,specifiedByURL:this.specifiedByURL,serialize:this.serialize,parseValue:this.parseValue,parseLiteral:this.parseLiteral,extensions:this.extensions,astNode:this.astNode,extensionASTNodes:this.extensionASTNodes}}toString(){return this.name}toJSON(){return this.toString()}}class ft{constructor(n){var t;this.name=it(n.name),this.description=n.description,this.isTypeOf=n.isTypeOf,this.extensions=Bn(n.extensions),this.astNode=n.astNode,this.extensionASTNodes=(t=n.extensionASTNodes)!==null&&t!==void 0?t:[],this._fields=()=>Vf(n),this._interfaces=()=>Wf(n),n.isTypeOf==null||typeof n.isTypeOf=="function"||ce(!1,`${this.name} must provide "isTypeOf" as a function, but got: ${Y(n.isTypeOf)}.`)}get[Symbol.toStringTag](){return"GraphQLObjectType"}getFields(){return typeof this._fields=="function"&&(this._fields=this._fields()),this._fields}getInterfaces(){return typeof this._interfaces=="function"&&(this._interfaces=this._interfaces()),this._interfaces}toConfig(){return{name:this.name,description:this.description,interfaces:this.getInterfaces(),fields:qf(this.getFields()),isTypeOf:this.isTypeOf,extensions:this.extensions,astNode:this.astNode,extensionASTNodes:this.extensionASTNodes}}toString(){return this.name}toJSON(){return this.toString()}}function Wf(i){var n;const t=$f((n=i.interfaces)!==null&&n!==void 0?n:[]);return Array.isArray(t)||ce(!1,`${i.name} interfaces must be an Array or a function which returns an Array.`),t}function Vf(i){const n=Gf(i.fields);return ki(n)||ce(!1,`${i.name} fields must be an object with field names as keys or a function which returns such an object.`),It(n,(t,s)=>{var a;ki(t)||ce(!1,`${i.name}.${s} field config must be an object.`),t.resolve==null||typeof t.resolve=="function"||ce(!1,`${i.name}.${s} field resolver must be a function if provided, but got: ${Y(t.resolve)}.`);const l=(a=t.args)!==null&&a!==void 0?a:{};return ki(l)||ce(!1,`${i.name}.${s} args must be an object with argument names as keys.`),{name:it(s),description:t.description,type:t.type,args:Yf(l),resolve:t.resolve,subscribe:t.subscribe,deprecationReason:t.deprecationReason,extensions:Bn(t.extensions),astNode:t.astNode}})}function Yf(i){return Object.entries(i).map(([n,t])=>({name:it(n),description:t.description,type:t.type,defaultValue:t.defaultValue,deprecationReason:t.deprecationReason,extensions:Bn(t.extensions),astNode:t.astNode}))}function ki(i){return Ft(i)&&!Array.isArray(i)}function qf(i){return It(i,n=>({description:n.description,type:n.type,args:Hf(n.args),resolve:n.resolve,subscribe:n.subscribe,deprecationReason:n.deprecationReason,extensions:n.extensions,astNode:n.astNode}))}function Hf(i){return si(i,n=>n.name,n=>({description:n.description,type:n.type,defaultValue:n.defaultValue,deprecationReason:n.deprecationReason,extensions:n.extensions,astNode:n.astNode}))}function Xw(i){return mn(i.type)&&i.defaultValue===void 0}class Es{constructor(n){var t;this.name=it(n.name),this.description=n.description,this.resolveType=n.resolveType,this.extensions=Bn(n.extensions),this.astNode=n.astNode,this.extensionASTNodes=(t=n.extensionASTNodes)!==null&&t!==void 0?t:[],this._fields=Vf.bind(void 0,n),this._interfaces=Wf.bind(void 0,n),n.resolveType==null||typeof n.resolveType=="function"||ce(!1,`${this.name} must provide "resolveType" as a function, but got: ${Y(n.resolveType)}.`)}get[Symbol.toStringTag](){return"GraphQLInterfaceType"}getFields(){return typeof this._fields=="function"&&(this._fields=this._fields()),this._fields}getInterfaces(){return typeof this._interfaces=="function"&&(this._interfaces=this._interfaces()),this._interfaces}toConfig(){return{name:this.name,description:this.description,interfaces:this.getInterfaces(),fields:qf(this.getFields()),resolveType:this.resolveType,extensions:this.extensions,astNode:this.astNode,extensionASTNodes:this.extensionASTNodes}}toString(){return this.name}toJSON(){return this.toString()}}class Ds{constructor(n){var t;this.name=it(n.name),this.description=n.description,this.resolveType=n.resolveType,this.extensions=Bn(n.extensions),this.astNode=n.astNode,this.extensionASTNodes=(t=n.extensionASTNodes)!==null&&t!==void 0?t:[],this._types=Zw.bind(void 0,n),n.resolveType==null||typeof n.resolveType=="function"||ce(!1,`${this.name} must provide "resolveType" as a function, but got: ${Y(n.resolveType)}.`)}get[Symbol.toStringTag](){return"GraphQLUnionType"}getTypes(){return typeof this._types=="function"&&(this._types=this._types()),this._types}toConfig(){return{name:this.name,description:this.description,types:this.getTypes(),resolveType:this.resolveType,extensions:this.extensions,astNode:this.astNode,extensionASTNodes:this.extensionASTNodes}}toString(){return this.name}toJSON(){return this.toString()}}function Zw(i){const n=$f(i.types);return Array.isArray(n)||ce(!1,`Must provide Array of types or a function which returns such an array for Union ${i.name}.`),n}class Ni{constructor(n){var t;this.name=it(n.name),this.description=n.description,this.extensions=Bn(n.extensions),this.astNode=n.astNode,this.extensionASTNodes=(t=n.extensionASTNodes)!==null&&t!==void 0?t:[],this._values=eE(this.name,n.values),this._valueLookup=new Map(this._values.map(s=>[s.value,s])),this._nameLookup=Fi(this._values,s=>s.name)}get[Symbol.toStringTag](){return"GraphQLEnumType"}getValues(){return this._values}getValue(n){return this._nameLookup[n]}serialize(n){const t=this._valueLookup.get(n);if(t===void 0)throw new V(`Enum "${this.name}" cannot represent value: ${Y(n)}`);return t.name}parseValue(n){if(typeof n!="string"){const s=Y(n);throw new V(`Enum "${this.name}" cannot represent non-string value: ${s}.`+ps(this,s))}const t=this.getValue(n);if(t==null)throw new V(`Value "${n}" does not exist in "${this.name}" enum.`+ps(this,n));return t.value}parseLiteral(n,t){if(n.kind!==D.ENUM){const a=ct(n);throw new V(`Enum "${this.name}" cannot represent non-enum value: ${a}.`+ps(this,a),{nodes:n})}const s=this.getValue(n.value);if(s==null){const a=ct(n);throw new V(`Value "${a}" does not exist in "${this.name}" enum.`+ps(this,a),{nodes:n})}return s.value}toConfig(){const n=si(this.getValues(),t=>t.name,t=>({description:t.description,value:t.value,deprecationReason:t.deprecationReason,extensions:t.extensions,astNode:t.astNode}));return{name:this.name,description:this.description,values:n,extensions:this.extensions,astNode:this.astNode,extensionASTNodes:this.extensionASTNodes}}toString(){return this.name}toJSON(){return this.toString()}}function ps(i,n){const t=i.getValues().map(a=>a.name),s=xs(n,t);return Cs("the enum value",s)}function eE(i,n){return ki(n)||ce(!1,`${i} values must be an object with value names as keys.`),Object.entries(n).map(([t,s])=>(ki(s)||ce(!1,`${i}.${t} must refer to an object with a "value" key representing an internal value but got: ${Y(s)}.`),{name:Hw(t),description:s.description,value:s.value!==void 0?s.value:t,deprecationReason:s.deprecationReason,extensions:Bn(s.extensions),astNode:s.astNode}))}class Is{constructor(n){var t;this.name=it(n.name),this.description=n.description,this.extensions=Bn(n.extensions),this.astNode=n.astNode,this.extensionASTNodes=(t=n.extensionASTNodes)!==null&&t!==void 0?t:[],this._fields=nE.bind(void 0,n)}get[Symbol.toStringTag](){return"GraphQLInputObjectType"}getFields(){return typeof this._fields=="function"&&(this._fields=this._fields()),this._fields}toConfig(){const n=It(this.getFields(),t=>({description:t.description,type:t.type,defaultValue:t.defaultValue,deprecationReason:t.deprecationReason,extensions:t.extensions,astNode:t.astNode}));return{name:this.name,description:this.description,fields:n,extensions:this.extensions,astNode:this.astNode,extensionASTNodes:this.extensionASTNodes}}toString(){return this.name}toJSON(){return this.toString()}}function nE(i){const n=Gf(i.fields);return ki(n)||ce(!1,`${i.name} fields must be an object with field names as keys or a function which returns such an object.`),It(n,(t,s)=>(!("resolve"in t)||ce(!1,`${i.name}.${s} field has a resolve property, but Input Types cannot define resolvers.`),{name:it(s),description:t.description,type:t.type,defaultValue:t.defaultValue,deprecationReason:t.deprecationReason,extensions:Bn(t.extensions),astNode:t.astNode}))}const lo=2147483647,uo=-2147483648,tE=new Nt({name:"Int",description:"The `Int` scalar type represents non-fractional signed whole numeric values. Int can represent values between -(2^31) and 2^31 - 1.",serialize(i){const n=pr(i);if(typeof n=="boolean")return n?1:0;let t=n;if(typeof n=="string"&&n!==""&&(t=Number(n)),typeof t!="number"||!Number.isInteger(t))throw new V(`Int cannot represent non-integer value: ${Y(n)}`);if(t>lo||t<uo)throw new V("Int cannot represent non 32-bit signed integer value: "+Y(n));return t},parseValue(i){if(typeof i!="number"||!Number.isInteger(i))throw new V(`Int cannot represent non-integer value: ${Y(i)}`);if(i>lo||i<uo)throw new V(`Int cannot represent non 32-bit signed integer value: ${i}`);return i},parseLiteral(i){if(i.kind!==D.INT)throw new V(`Int cannot represent non-integer value: ${ct(i)}`,{nodes:i});const n=parseInt(i.value,10);if(n>lo||n<uo)throw new V(`Int cannot represent non 32-bit signed integer value: ${i.value}`,{nodes:i});return n}}),iE=new Nt({name:"Float",description:"The `Float` scalar type represents signed double-precision fractional values as specified by [IEEE 754](https://en.wikipedia.org/wiki/IEEE_floating_point).",serialize(i){const n=pr(i);if(typeof n=="boolean")return n?1:0;let t=n;if(typeof n=="string"&&n!==""&&(t=Number(n)),typeof t!="number"||!Number.isFinite(t))throw new V(`Float cannot represent non numeric value: ${Y(n)}`);return t},parseValue(i){if(typeof i!="number"||!Number.isFinite(i))throw new V(`Float cannot represent non numeric value: ${Y(i)}`);return i},parseLiteral(i){if(i.kind!==D.FLOAT&&i.kind!==D.INT)throw new V(`Float cannot represent non numeric value: ${ct(i)}`,i);return parseFloat(i.value)}}),Me=new Nt({name:"String",description:"The `String` scalar type represents textual data, represented as UTF-8 character sequences. The String type is most often used by GraphQL to represent free-form human-readable text.",serialize(i){const n=pr(i);if(typeof n=="string")return n;if(typeof n=="boolean")return n?"true":"false";if(typeof n=="number"&&Number.isFinite(n))return n.toString();throw new V(`String cannot represent value: ${Y(i)}`)},parseValue(i){if(typeof i!="string")throw new V(`String cannot represent a non string value: ${Y(i)}`);return i},parseLiteral(i){if(i.kind!==D.STRING)throw new V(`String cannot represent a non string value: ${ct(i)}`,{nodes:i});return i.value}}),Pn=new Nt({name:"Boolean",description:"The `Boolean` scalar type represents `true` or `false`.",serialize(i){const n=pr(i);if(typeof n=="boolean")return n;if(Number.isFinite(n))return n!==0;throw new V(`Boolean cannot represent a non boolean value: ${Y(n)}`)},parseValue(i){if(typeof i!="boolean")throw new V(`Boolean cannot represent a non boolean value: ${Y(i)}`);return i},parseLiteral(i){if(i.kind!==D.BOOLEAN)throw new V(`Boolean cannot represent a non boolean value: ${ct(i)}`,{nodes:i});return i.value}}),jf=new Nt({name:"ID",description:'The `ID` scalar type represents a unique identifier, often used to refetch an object or as key for a cache. The ID type appears in a JSON response as a String; however, it is not intended to be human-readable. When expected as an input type, any string (such as `"4"`) or integer (such as `4`) input value will be accepted as an ID.',serialize(i){const n=pr(i);if(typeof n=="string")return n;if(Number.isInteger(n))return String(n);throw new V(`ID cannot represent value: ${Y(i)}`)},parseValue(i){if(typeof i=="string")return i;if(typeof i=="number"&&Number.isInteger(i))return i.toString();throw new V(`ID cannot represent value: ${Y(i)}`)},parseLiteral(i){if(i.kind!==D.STRING&&i.kind!==D.INT)throw new V("ID cannot represent a non-string and non-integer value: "+ct(i),{nodes:i});return i.value}}),Os=Object.freeze([Me,tE,iE,Pn,jf]);function rE(i){return Os.some(({name:n})=>i.name===n)}function pr(i){if(Ft(i)){if(typeof i.valueOf=="function"){const n=i.valueOf();if(!Ft(n))return n}if(typeof i.toJSON=="function")return i.toJSON()}return i}function sE(i){return ht(i,Ht)}class Ht{constructor(n){var t,s;this.name=it(n.name),this.description=n.description,this.locations=n.locations,this.isRepeatable=(t=n.isRepeatable)!==null&&t!==void 0?t:!1,this.extensions=Bn(n.extensions),this.astNode=n.astNode,Array.isArray(n.locations)||ce(!1,`@${n.name} locations must be an Array.`);const a=(s=n.args)!==null&&s!==void 0?s:{};Ft(a)&&!Array.isArray(a)||ce(!1,`@${n.name} args must be an object with argument names as keys.`),this.args=Yf(a)}get[Symbol.toStringTag](){return"GraphQLDirective"}toConfig(){return{name:this.name,description:this.description,locations:this.locations,args:Hf(this.args),isRepeatable:this.isRepeatable,extensions:this.extensions,astNode:this.astNode}}toString(){return"@"+this.name}toJSON(){return this.toString()}}const aE=new Ht({name:"include",description:"Directs the executor to include this field or fragment only when the `if` argument is true.",locations:[q.FIELD,q.FRAGMENT_SPREAD,q.INLINE_FRAGMENT],args:{if:{type:new se(Pn),description:"Included when true."}}}),oE=new Ht({name:"skip",description:"Directs the executor to skip this field or fragment when the `if` argument is true.",locations:[q.FIELD,q.FRAGMENT_SPREAD,q.INLINE_FRAGMENT],args:{if:{type:new se(Pn),description:"Skipped when true."}}}),lE="No longer supported",zf=new Ht({name:"deprecated",description:"Marks an element of a GraphQL schema as no longer supported.",locations:[q.FIELD_DEFINITION,q.ARGUMENT_DEFINITION,q.INPUT_FIELD_DEFINITION,q.ENUM_VALUE],args:{reason:{type:Me,description:"Explains why this element was deprecated, usually also including a suggestion for how to access supported similar data. Formatted using the Markdown syntax, as specified by [CommonMark](https://commonmark.org/).",defaultValue:lE}}}),Qf=new Ht({name:"specifiedBy",description:"Exposes a URL that specifies the behavior of this scalar.",locations:[q.SCALAR],args:{url:{type:new se(Me),description:"The URL that specifies the behavior of this scalar."}}}),xi=Object.freeze([aE,oE,zf,Qf]);function uE(i){return typeof i=="object"&&typeof(i==null?void 0:i[Symbol.iterator])=="function"}function rr(i,n){if(mn(n)){const t=rr(i,n.ofType);return(t==null?void 0:t.kind)===D.NULL?null:t}if(i===null)return{kind:D.NULL};if(i===void 0)return null;if(ci(n)){const t=n.ofType;if(uE(i)){const s=[];for(const a of i){const l=rr(a,t);l!=null&&s.push(l)}return{kind:D.LIST,values:s}}return rr(i,t)}if(Xn(n)){if(!Ft(i))return null;const t=[];for(const s of Object.values(n.getFields())){const a=rr(i[s.name],s.type);a&&t.push({kind:D.OBJECT_FIELD,name:{kind:D.NAME,value:s.name},value:a})}return{kind:D.OBJECT,fields:t}}if(Uf(n)){const t=n.serialize(i);if(t==null)return null;if(typeof t=="boolean")return{kind:D.BOOLEAN,value:t};if(typeof t=="number"&&Number.isFinite(t)){const s=String(t);return Qc.test(s)?{kind:D.INT,value:s}:{kind:D.FLOAT,value:s}}if(typeof t=="string")return Kn(n)?{kind:D.ENUM,value:t}:n===jf&&Qc.test(t)?{kind:D.INT,value:t}:{kind:D.STRING,value:t};throw new TypeError(`Cannot convert value to AST: ${Y(t)}.`)}Qn(!1,"Unexpected input type: "+Y(n))}const Qc=/^-?(?:0|[1-9][0-9]*)$/,$o=new ft({name:"__Schema",description:"A GraphQL Schema defines the capabilities of a GraphQL server. It exposes all available types and directives on the server, as well as the entry points for query, mutation, and subscription operations.",fields:()=>({description:{type:Me,resolve:i=>i.description},types:{description:"A list of all types supported by this server.",type:new se(new pn(new se(zn))),resolve(i){return Object.values(i.getTypeMap())}},queryType:{description:"The type that query operations will be rooted at.",type:new se(zn),resolve:i=>i.getQueryType()},mutationType:{description:"If this server supports mutation, the type that mutation operations will be rooted at.",type:zn,resolve:i=>i.getMutationType()},subscriptionType:{description:"If this server support subscription, the type that subscription operations will be rooted at.",type:zn,resolve:i=>i.getSubscriptionType()},directives:{description:"A list of all directives supported by this server.",type:new se(new pn(new se(Jf))),resolve:i=>i.getDirectives()}})}),Jf=new ft({name:"__Directive",description:`A Directive provides a way to describe alternate runtime execution and type validation behavior in a GraphQL document.

In some cases, you need to provide options to alter GraphQL's execution behavior in ways field arguments will not suffice, such as conditionally including or skipping a field. Directives provide this by describing additional information to the executor.`,fields:()=>({name:{type:new se(Me),resolve:i=>i.name},description:{type:Me,resolve:i=>i.description},isRepeatable:{type:new se(Pn),resolve:i=>i.isRepeatable},locations:{type:new se(new pn(new se(Kf))),resolve:i=>i.locations},args:{type:new se(new pn(new se(Rs))),args:{includeDeprecated:{type:Pn,defaultValue:!1}},resolve(i,{includeDeprecated:n}){return n?i.args:i.args.filter(t=>t.deprecationReason==null)}}})}),Kf=new Ni({name:"__DirectiveLocation",description:"A Directive can be adjacent to many parts of the GraphQL language, a __DirectiveLocation describes one such possible adjacencies.",values:{QUERY:{value:q.QUERY,description:"Location adjacent to a query operation."},MUTATION:{value:q.MUTATION,description:"Location adjacent to a mutation operation."},SUBSCRIPTION:{value:q.SUBSCRIPTION,description:"Location adjacent to a subscription operation."},FIELD:{value:q.FIELD,description:"Location adjacent to a field."},FRAGMENT_DEFINITION:{value:q.FRAGMENT_DEFINITION,description:"Location adjacent to a fragment definition."},FRAGMENT_SPREAD:{value:q.FRAGMENT_SPREAD,description:"Location adjacent to a fragment spread."},INLINE_FRAGMENT:{value:q.INLINE_FRAGMENT,description:"Location adjacent to an inline fragment."},VARIABLE_DEFINITION:{value:q.VARIABLE_DEFINITION,description:"Location adjacent to a variable definition."},SCHEMA:{value:q.SCHEMA,description:"Location adjacent to a schema definition."},SCALAR:{value:q.SCALAR,description:"Location adjacent to a scalar definition."},OBJECT:{value:q.OBJECT,description:"Location adjacent to an object type definition."},FIELD_DEFINITION:{value:q.FIELD_DEFINITION,description:"Location adjacent to a field definition."},ARGUMENT_DEFINITION:{value:q.ARGUMENT_DEFINITION,description:"Location adjacent to an argument definition."},INTERFACE:{value:q.INTERFACE,description:"Location adjacent to an interface definition."},UNION:{value:q.UNION,description:"Location adjacent to a union definition."},ENUM:{value:q.ENUM,description:"Location adjacent to an enum definition."},ENUM_VALUE:{value:q.ENUM_VALUE,description:"Location adjacent to an enum value definition."},INPUT_OBJECT:{value:q.INPUT_OBJECT,description:"Location adjacent to an input object type definition."},INPUT_FIELD_DEFINITION:{value:q.INPUT_FIELD_DEFINITION,description:"Location adjacent to an input object field definition."}}}),zn=new ft({name:"__Type",description:"The fundamental unit of any GraphQL Schema is the type. There are many kinds of types in GraphQL as represented by the `__TypeKind` enum.\n\nDepending on the kind of a type, certain fields describe information about that type. Scalar types provide no information beyond a name, description and optional `specifiedByURL`, while Enum types provide their values. Object and Interface types provide the fields they describe. Abstract types, Union and Interface, provide the Object types possible at runtime. List and NonNull types compose other types.",fields:()=>({kind:{type:new se(eh),resolve(i){if(jt(i))return we.SCALAR;if(gn(i))return we.OBJECT;if(on(i))return we.INTERFACE;if(Jn(i))return we.UNION;if(Kn(i))return we.ENUM;if(Xn(i))return we.INPUT_OBJECT;if(ci(i))return we.LIST;if(mn(i))return we.NON_NULL;Qn(!1,`Unexpected type: "${Y(i)}".`)}},name:{type:Me,resolve:i=>"name"in i?i.name:void 0},description:{type:Me,resolve:i=>"description"in i?i.description:void 0},specifiedByURL:{type:Me,resolve:i=>"specifiedByURL"in i?i.specifiedByURL:void 0},fields:{type:new pn(new se(Xf)),args:{includeDeprecated:{type:Pn,defaultValue:!1}},resolve(i,{includeDeprecated:n}){if(gn(i)||on(i)){const t=Object.values(i.getFields());return n?t:t.filter(s=>s.deprecationReason==null)}}},interfaces:{type:new pn(new se(zn)),resolve(i){if(gn(i)||on(i))return i.getInterfaces()}},possibleTypes:{type:new pn(new se(zn)),resolve(i,n,t,{schema:s}){if(Qw(i))return s.getPossibleTypes(i)}},enumValues:{type:new pn(new se(Zf)),args:{includeDeprecated:{type:Pn,defaultValue:!1}},resolve(i,{includeDeprecated:n}){if(Kn(i)){const t=i.getValues();return n?t:t.filter(s=>s.deprecationReason==null)}}},inputFields:{type:new pn(new se(Rs)),args:{includeDeprecated:{type:Pn,defaultValue:!1}},resolve(i,{includeDeprecated:n}){if(Xn(i)){const t=Object.values(i.getFields());return n?t:t.filter(s=>s.deprecationReason==null)}}},ofType:{type:zn,resolve:i=>"ofType"in i?i.ofType:void 0}})}),Xf=new ft({name:"__Field",description:"Object and Interface types are described by a list of Fields, each of which has a name, potentially a list of arguments, and a return type.",fields:()=>({name:{type:new se(Me),resolve:i=>i.name},description:{type:Me,resolve:i=>i.description},args:{type:new se(new pn(new se(Rs))),args:{includeDeprecated:{type:Pn,defaultValue:!1}},resolve(i,{includeDeprecated:n}){return n?i.args:i.args.filter(t=>t.deprecationReason==null)}},type:{type:new se(zn),resolve:i=>i.type},isDeprecated:{type:new se(Pn),resolve:i=>i.deprecationReason!=null},deprecationReason:{type:Me,resolve:i=>i.deprecationReason}})}),Rs=new ft({name:"__InputValue",description:"Arguments provided to Fields or Directives and the input fields of an InputObject are represented as Input Values which describe their type and optionally a default value.",fields:()=>({name:{type:new se(Me),resolve:i=>i.name},description:{type:Me,resolve:i=>i.description},type:{type:new se(zn),resolve:i=>i.type},defaultValue:{type:Me,description:"A GraphQL-formatted string representing the default value for this input value.",resolve(i){const{type:n,defaultValue:t}=i,s=rr(t,n);return s?ct(s):null}},isDeprecated:{type:new se(Pn),resolve:i=>i.deprecationReason!=null},deprecationReason:{type:Me,resolve:i=>i.deprecationReason}})}),Zf=new ft({name:"__EnumValue",description:"One possible value for a given Enum. Enum values are unique values, not a placeholder for a string or numeric value. However an Enum value is returned in a JSON response as a string.",fields:()=>({name:{type:new se(Me),resolve:i=>i.name},description:{type:Me,resolve:i=>i.description},isDeprecated:{type:new se(Pn),resolve:i=>i.deprecationReason!=null},deprecationReason:{type:Me,resolve:i=>i.deprecationReason}})});var we;(function(i){i.SCALAR="SCALAR",i.OBJECT="OBJECT",i.INTERFACE="INTERFACE",i.UNION="UNION",i.ENUM="ENUM",i.INPUT_OBJECT="INPUT_OBJECT",i.LIST="LIST",i.NON_NULL="NON_NULL"})(we||(we={}));const eh=new Ni({name:"__TypeKind",description:"An enum describing what kind of type a given `__Type` is.",values:{SCALAR:{value:we.SCALAR,description:"Indicates this type is a scalar."},OBJECT:{value:we.OBJECT,description:"Indicates this type is an object. `fields` and `interfaces` are valid fields."},INTERFACE:{value:we.INTERFACE,description:"Indicates this type is an interface. `fields`, `interfaces`, and `possibleTypes` are valid fields."},UNION:{value:we.UNION,description:"Indicates this type is a union. `possibleTypes` is a valid field."},ENUM:{value:we.ENUM,description:"Indicates this type is an enum. `enumValues` is a valid field."},INPUT_OBJECT:{value:we.INPUT_OBJECT,description:"Indicates this type is an input object. `inputFields` is a valid field."},LIST:{value:we.LIST,description:"Indicates this type is a list. `ofType` is a valid field."},NON_NULL:{value:we.NON_NULL,description:"Indicates this type is a non-null. `ofType` is a valid field."}}});new se($o);new se(Me);new se(Me);const Ls=Object.freeze([$o,Jf,Kf,zn,Xf,Rs,Zf,eh]);function cE(i){return Ls.some(({name:n})=>i.name===n)}class nh{constructor(n){var t,s;this.__validationErrors=n.assumeValid===!0?[]:void 0,Ft(n)||ce(!1,"Must provide configuration object."),!n.types||Array.isArray(n.types)||ce(!1,`"types" must be Array if provided but got: ${Y(n.types)}.`),!n.directives||Array.isArray(n.directives)||ce(!1,`"directives" must be Array if provided but got: ${Y(n.directives)}.`),this.description=n.description,this.extensions=Bn(n.extensions),this.astNode=n.astNode,this.extensionASTNodes=(t=n.extensionASTNodes)!==null&&t!==void 0?t:[],this._queryType=n.query,this._mutationType=n.mutation,this._subscriptionType=n.subscription,this._directives=(s=n.directives)!==null&&s!==void 0?s:xi;const a=new Set(n.types);if(n.types!=null)for(const l of n.types)a.delete(l),Hn(l,a);this._queryType!=null&&Hn(this._queryType,a),this._mutationType!=null&&Hn(this._mutationType,a),this._subscriptionType!=null&&Hn(this._subscriptionType,a);for(const l of this._directives)if(sE(l))for(const u of l.args)Hn(u.type,a);Hn($o,a),this._typeMap=Object.create(null),this._subTypeMap=Object.create(null),this._implementationsMap=Object.create(null);for(const l of a){if(l==null)continue;const u=l.name;if(u||ce(!1,"One of the provided types for building the Schema is missing a name."),this._typeMap[u]!==void 0)throw new Error(`Schema must contain uniquely named types but contains multiple types named "${u}".`);if(this._typeMap[u]=l,on(l)){for(const f of l.getInterfaces())if(on(f)){let d=this._implementationsMap[f.name];d===void 0&&(d=this._implementationsMap[f.name]={objects:[],interfaces:[]}),d.interfaces.push(l)}}else if(gn(l)){for(const f of l.getInterfaces())if(on(f)){let d=this._implementationsMap[f.name];d===void 0&&(d=this._implementationsMap[f.name]={objects:[],interfaces:[]}),d.objects.push(l)}}}}get[Symbol.toStringTag](){return"GraphQLSchema"}getQueryType(){return this._queryType}getMutationType(){return this._mutationType}getSubscriptionType(){return this._subscriptionType}getRootType(n){switch(n){case Ln.QUERY:return this.getQueryType();case Ln.MUTATION:return this.getMutationType();case Ln.SUBSCRIPTION:return this.getSubscriptionType()}}getTypeMap(){return this._typeMap}getType(n){return this.getTypeMap()[n]}getPossibleTypes(n){return Jn(n)?n.getTypes():this.getImplementations(n).objects}getImplementations(n){const t=this._implementationsMap[n.name];return t??{objects:[],interfaces:[]}}isSubType(n,t){let s=this._subTypeMap[n.name];if(s===void 0){if(s=Object.create(null),Jn(n))for(const a of n.getTypes())s[a.name]=!0;else{const a=this.getImplementations(n);for(const l of a.objects)s[l.name]=!0;for(const l of a.interfaces)s[l.name]=!0}this._subTypeMap[n.name]=s}return s[t.name]!==void 0}getDirectives(){return this._directives}getDirective(n){return this.getDirectives().find(t=>t.name===n)}toConfig(){return{description:this.description,query:this.getQueryType(),mutation:this.getMutationType(),subscription:this.getSubscriptionType(),types:Object.values(this.getTypeMap()),directives:this.getDirectives(),extensions:this.extensions,astNode:this.astNode,extensionASTNodes:this.extensionASTNodes,assumeValid:this.__validationErrors!==void 0}}}function Hn(i,n){const t=Kw(i);if(!n.has(t)){if(n.add(t),Jn(t))for(const s of t.getTypes())Hn(s,n);else if(gn(t)||on(t)){for(const s of t.getInterfaces())Hn(s,n);for(const s of Object.values(t.getFields())){Hn(s.type,n);for(const a of s.args)Hn(a.type,n)}}else if(Xn(t))for(const s of Object.values(t.getFields()))Hn(s.type,n)}return n}function fE(i){return i.kind===D.SCHEMA_DEFINITION||gr(i)||i.kind===D.DIRECTIVE_DEFINITION}function gr(i){return i.kind===D.SCALAR_TYPE_DEFINITION||i.kind===D.OBJECT_TYPE_DEFINITION||i.kind===D.INTERFACE_TYPE_DEFINITION||i.kind===D.UNION_TYPE_DEFINITION||i.kind===D.ENUM_TYPE_DEFINITION||i.kind===D.INPUT_OBJECT_TYPE_DEFINITION}function hE(i){return i.kind===D.SCHEMA_EXTENSION||Go(i)}function Go(i){return i.kind===D.SCALAR_TYPE_EXTENSION||i.kind===D.OBJECT_TYPE_EXTENSION||i.kind===D.INTERFACE_TYPE_EXTENSION||i.kind===D.UNION_TYPE_EXTENSION||i.kind===D.ENUM_TYPE_EXTENSION||i.kind===D.INPUT_OBJECT_TYPE_EXTENSION}function dE(i){const n=Object.create(null),t=i.getSchema(),s=t?t.getDirectives():xi;for(const u of s)n[u.name]=u.args.map(f=>f.name);const a=i.getDocument().definitions;for(const u of a)if(u.kind===D.DIRECTIVE_DEFINITION){var l;const f=(l=u.arguments)!==null&&l!==void 0?l:[];n[u.name.value]=f.map(d=>d.name.value)}return{Directive(u){const f=u.name.value,d=n[f];if(u.arguments&&d)for(const y of u.arguments){const v=y.name.value;if(!d.includes(v)){const w=xs(v,d);i.reportError(new V(`Unknown argument "${v}" on directive "@${f}".`+Cs(w),{nodes:y}))}}return!1}}}function pE(i){const n=Object.create(null),t=i.getSchema(),s=t?t.getDirectives():xi;for(const l of s)n[l.name]=l.locations;const a=i.getDocument().definitions;for(const l of a)l.kind===D.DIRECTIVE_DEFINITION&&(n[l.name.value]=l.locations.map(u=>u.value));return{Directive(l,u,f,d,y){const v=l.name.value,w=n[v];if(!w){i.reportError(new V(`Unknown directive "@${v}".`,{nodes:l}));return}const N=gE(y);N&&!w.includes(N)&&i.reportError(new V(`Directive "@${v}" may not be used on ${N}.`,{nodes:l}))}}}function gE(i){const n=i[i.length-1];switch("kind"in n||Qn(!1),n.kind){case D.OPERATION_DEFINITION:return mE(n.operation);case D.FIELD:return q.FIELD;case D.FRAGMENT_SPREAD:return q.FRAGMENT_SPREAD;case D.INLINE_FRAGMENT:return q.INLINE_FRAGMENT;case D.FRAGMENT_DEFINITION:return q.FRAGMENT_DEFINITION;case D.VARIABLE_DEFINITION:return q.VARIABLE_DEFINITION;case D.SCHEMA_DEFINITION:case D.SCHEMA_EXTENSION:return q.SCHEMA;case D.SCALAR_TYPE_DEFINITION:case D.SCALAR_TYPE_EXTENSION:return q.SCALAR;case D.OBJECT_TYPE_DEFINITION:case D.OBJECT_TYPE_EXTENSION:return q.OBJECT;case D.FIELD_DEFINITION:return q.FIELD_DEFINITION;case D.INTERFACE_TYPE_DEFINITION:case D.INTERFACE_TYPE_EXTENSION:return q.INTERFACE;case D.UNION_TYPE_DEFINITION:case D.UNION_TYPE_EXTENSION:return q.UNION;case D.ENUM_TYPE_DEFINITION:case D.ENUM_TYPE_EXTENSION:return q.ENUM;case D.ENUM_VALUE_DEFINITION:return q.ENUM_VALUE;case D.INPUT_OBJECT_TYPE_DEFINITION:case D.INPUT_OBJECT_TYPE_EXTENSION:return q.INPUT_OBJECT;case D.INPUT_VALUE_DEFINITION:{const t=i[i.length-3];return"kind"in t||Qn(!1),t.kind===D.INPUT_OBJECT_TYPE_DEFINITION?q.INPUT_FIELD_DEFINITION:q.ARGUMENT_DEFINITION}default:Qn(!1,"Unexpected kind: "+Y(n.kind))}}function mE(i){switch(i){case Ln.QUERY:return q.QUERY;case Ln.MUTATION:return q.MUTATION;case Ln.SUBSCRIPTION:return q.SUBSCRIPTION}}function yE(i){const n=i.getSchema(),t=n?n.getTypeMap():Object.create(null),s=Object.create(null);for(const l of i.getDocument().definitions)gr(l)&&(s[l.name.value]=!0);const a=[...Object.keys(t),...Object.keys(s)];return{NamedType(l,u,f,d,y){const v=l.name.value;if(!t[v]&&!s[v]){var w;const N=(w=y[2])!==null&&w!==void 0?w:f,C=N!=null&&vE(N);if(C&&Jc.includes(v))return;const R=xs(v,C?Jc.concat(a):a);i.reportError(new V(`Unknown type "${v}".`+Cs(R),{nodes:l}))}}}}const Jc=[...Os,...Ls].map(i=>i.name);function vE(i){return"kind"in i&&(fE(i)||hE(i))}function TE(i){var n,t,s;const a=i.getSchema(),l=(n=(t=(s=a==null?void 0:a.astNode)!==null&&s!==void 0?s:a==null?void 0:a.getQueryType())!==null&&t!==void 0?t:a==null?void 0:a.getMutationType())!==null&&n!==void 0?n:a==null?void 0:a.getSubscriptionType();let u=0;return{SchemaDefinition(f){if(l){i.reportError(new V("Cannot define a new schema within a schema extension.",{nodes:f}));return}u>0&&i.reportError(new V("Must provide only one schema definition.",{nodes:f})),++u}}}function bE(i){const n=i.getSchema(),t=Object.create(null);for(const a of i.getDocument().definitions)gr(a)&&(t[a.name.value]=a);return{ScalarTypeExtension:s,ObjectTypeExtension:s,InterfaceTypeExtension:s,UnionTypeExtension:s,EnumTypeExtension:s,InputObjectTypeExtension:s};function s(a){const l=a.name.value,u=t[l],f=n==null?void 0:n.getType(l);let d;if(u?d=wE[u.kind]:f&&(d=EE(f)),d){if(d!==a.kind){const y=DE(a.kind);i.reportError(new V(`Cannot extend non-${y} type "${l}".`,{nodes:u?[u,a]:a}))}}else{const y=Object.keys({...t,...n==null?void 0:n.getTypeMap()}),v=xs(l,y);i.reportError(new V(`Cannot extend type "${l}" because it is not defined.`+Cs(v),{nodes:a.name}))}}}const wE={[D.SCALAR_TYPE_DEFINITION]:D.SCALAR_TYPE_EXTENSION,[D.OBJECT_TYPE_DEFINITION]:D.OBJECT_TYPE_EXTENSION,[D.INTERFACE_TYPE_DEFINITION]:D.INTERFACE_TYPE_EXTENSION,[D.UNION_TYPE_DEFINITION]:D.UNION_TYPE_EXTENSION,[D.ENUM_TYPE_DEFINITION]:D.ENUM_TYPE_EXTENSION,[D.INPUT_OBJECT_TYPE_DEFINITION]:D.INPUT_OBJECT_TYPE_EXTENSION};function EE(i){if(jt(i))return D.SCALAR_TYPE_EXTENSION;if(gn(i))return D.OBJECT_TYPE_EXTENSION;if(on(i))return D.INTERFACE_TYPE_EXTENSION;if(Jn(i))return D.UNION_TYPE_EXTENSION;if(Kn(i))return D.ENUM_TYPE_EXTENSION;if(Xn(i))return D.INPUT_OBJECT_TYPE_EXTENSION;Qn(!1,"Unexpected type: "+Y(i))}function DE(i){switch(i){case D.SCALAR_TYPE_EXTENSION:return"scalar";case D.OBJECT_TYPE_EXTENSION:return"object";case D.INTERFACE_TYPE_EXTENSION:return"interface";case D.UNION_TYPE_EXTENSION:return"union";case D.ENUM_TYPE_EXTENSION:return"enum";case D.INPUT_OBJECT_TYPE_EXTENSION:return"input object";default:Qn(!1,"Unexpected kind: "+Y(i))}}function IE(i){var n;const t=Object.create(null),s=i.getSchema(),a=(n=s==null?void 0:s.getDirectives())!==null&&n!==void 0?n:xi;for(const f of a)t[f.name]=Fi(f.args.filter(Xw),d=>d.name);const l=i.getDocument().definitions;for(const f of l)if(f.kind===D.DIRECTIVE_DEFINITION){var u;const d=(u=f.arguments)!==null&&u!==void 0?u:[];t[f.name.value]=Fi(d.filter(_E),y=>y.name.value)}return{Directive:{leave(f){const d=f.name.value,y=t[d];if(y){var v;const w=(v=f.arguments)!==null&&v!==void 0?v:[],N=new Set(w.map(C=>C.name.value));for(const[C,R]of Object.entries(y))if(!N.has(C)){const L=Uo(R.type)?Y(R.type):ct(R.type);i.reportError(new V(`Directive "@${d}" argument "${C}" of type "${L}" is required, but it was not provided.`,{nodes:f}))}}}}}}function _E(i){return i.type.kind===D.NON_NULL_TYPE&&i.defaultValue==null}function Wt(i,n,t){if(i){if(i.kind===D.VARIABLE){i.name.value;return}if(mn(n))return i.kind===D.NULL?void 0:Wt(i,n.ofType,t);if(i.kind===D.NULL)return null;if(ci(n)){const s=n.ofType;if(i.kind===D.LIST){const l=[];for(const u of i.values)if(Kc(u,t)){if(mn(s))return;l.push(null)}else{const f=Wt(u,s,t);if(f===void 0)return;l.push(f)}return l}const a=Wt(i,s,t);return a===void 0?void 0:[a]}if(Xn(n)){if(i.kind!==D.OBJECT)return;const s=Object.create(null),a=Fi(i.fields,l=>l.name.value);for(const l of Object.values(n.getFields())){const u=a[l.name];if(!u||Kc(u.value,t)){if(l.defaultValue!==void 0)s[l.name]=l.defaultValue;else if(mn(l.type))return;continue}const f=Wt(u.value,l.type,t);if(f===void 0)return;s[l.name]=f}return s}if(Uf(n)){let s;try{s=n.parseLiteral(i,t)}catch{return}return s===void 0?void 0:s}Qn(!1,"Unexpected input type: "+Y(n))}}function Kc(i,n){return i.kind===D.VARIABLE&&n==null}function AE(i,n,t){var s;const a={},l=(s=n.arguments)!==null&&s!==void 0?s:[],u=Fi(l,f=>f.name.value);for(const f of i.args){const d=f.name,y=f.type,v=u[d];if(!v){if(f.defaultValue!==void 0)a[d]=f.defaultValue;else if(mn(y))throw new V(`Argument "${d}" of required type "${Y(y)}" was not provided.`,{nodes:n});continue}const w=v.value;let N=w.kind===D.NULL;if(w.kind===D.VARIABLE){const R=w.name.value;{if(f.defaultValue!==void 0)a[d]=f.defaultValue;else if(mn(y))throw new V(`Argument "${d}" of required type "${Y(y)}" was provided the variable "$${R}" which was not provided a runtime value.`,{nodes:w});continue}}if(N&&mn(y))throw new V(`Argument "${d}" of non-null type "${Y(y)}" must not be null.`,{nodes:w});const C=Wt(w,y,t);if(C===void 0)throw new V(`Argument "${d}" has invalid value ${ct(w)}.`,{nodes:w});a[d]=C}return a}function th(i,n,t){var s;const a=(s=n.directives)===null||s===void 0?void 0:s.find(l=>l.name.value===i.name);if(a)return AE(i,a,t)}function ih(i,n){const t=new Map;for(const s of i){const a=n(s),l=t.get(a);l===void 0?t.set(a,[s]):l.push(s)}return t}function SE(i){return{DirectiveDefinition(s){var a;const l=(a=s.arguments)!==null&&a!==void 0?a:[];return t(`@${s.name.value}`,l)},InterfaceTypeDefinition:n,InterfaceTypeExtension:n,ObjectTypeDefinition:n,ObjectTypeExtension:n};function n(s){var a;const l=s.name.value,u=(a=s.fields)!==null&&a!==void 0?a:[];for(const d of u){var f;const y=d.name.value,v=(f=d.arguments)!==null&&f!==void 0?f:[];t(`${l}.${y}`,v)}return!1}function t(s,a){const l=ih(a,u=>u.name.value);for(const[u,f]of l)f.length>1&&i.reportError(new V(`Argument "${s}(${u}:)" can only be defined once.`,{nodes:f.map(d=>d.name)}));return!1}}function kE(i){return{Field:n,Directive:n};function n(t){var s;const a=(s=t.arguments)!==null&&s!==void 0?s:[],l=ih(a,u=>u.name.value);for(const[u,f]of l)f.length>1&&i.reportError(new V(`There can be only one argument named "${u}".`,{nodes:f.map(d=>d.name)}))}}function FE(i){const n=Object.create(null),t=i.getSchema();return{DirectiveDefinition(s){const a=s.name.value;if(t!=null&&t.getDirective(a)){i.reportError(new V(`Directive "@${a}" already exists in the schema. It cannot be redefined.`,{nodes:s.name}));return}return n[a]?i.reportError(new V(`There can be only one directive named "@${a}".`,{nodes:[n[a],s.name]})):n[a]=s.name,!1}}}function NE(i){const n=Object.create(null),t=i.getSchema(),s=t?t.getDirectives():xi;for(const f of s)n[f.name]=!f.isRepeatable;const a=i.getDocument().definitions;for(const f of a)f.kind===D.DIRECTIVE_DEFINITION&&(n[f.name.value]=!f.repeatable);const l=Object.create(null),u=Object.create(null);return{enter(f){if(!("directives"in f)||!f.directives)return;let d;if(f.kind===D.SCHEMA_DEFINITION||f.kind===D.SCHEMA_EXTENSION)d=l;else if(gr(f)||Go(f)){const y=f.name.value;d=u[y],d===void 0&&(u[y]=d=Object.create(null))}else d=Object.create(null);for(const y of f.directives){const v=y.name.value;n[v]&&(d[v]?i.reportError(new V(`The directive "@${v}" can only be used once at this location.`,{nodes:[d[v],y]})):d[v]=y)}}}}function CE(i){const n=i.getSchema(),t=n?n.getTypeMap():Object.create(null),s=Object.create(null);return{EnumTypeDefinition:a,EnumTypeExtension:a};function a(l){var u;const f=l.name.value;s[f]||(s[f]=Object.create(null));const d=(u=l.values)!==null&&u!==void 0?u:[],y=s[f];for(const v of d){const w=v.name.value,N=t[f];Kn(N)&&N.getValue(w)?i.reportError(new V(`Enum value "${f}.${w}" already exists in the schema. It cannot also be defined in this type extension.`,{nodes:v.name})):y[w]?i.reportError(new V(`Enum value "${f}.${w}" can only be defined once.`,{nodes:[y[w],v.name]})):y[w]=v.name}return!1}}function xE(i){const n=i.getSchema(),t=n?n.getTypeMap():Object.create(null),s=Object.create(null);return{InputObjectTypeDefinition:a,InputObjectTypeExtension:a,InterfaceTypeDefinition:a,InterfaceTypeExtension:a,ObjectTypeDefinition:a,ObjectTypeExtension:a};function a(l){var u;const f=l.name.value;s[f]||(s[f]=Object.create(null));const d=(u=l.fields)!==null&&u!==void 0?u:[],y=s[f];for(const v of d){const w=v.name.value;OE(t[f],w)?i.reportError(new V(`Field "${f}.${w}" already exists in the schema. It cannot also be defined in this type extension.`,{nodes:v.name})):y[w]?i.reportError(new V(`Field "${f}.${w}" can only be defined once.`,{nodes:[y[w],v.name]})):y[w]=v.name}return!1}}function OE(i,n){return gn(i)||on(i)||Xn(i)?i.getFields()[n]!=null:!1}function RE(i){const n=[];let t=Object.create(null);return{ObjectValue:{enter(){n.push(t),t=Object.create(null)},leave(){const s=n.pop();s||Qn(!1),t=s}},ObjectField(s){const a=s.name.value;t[a]?i.reportError(new V(`There can be only one input field named "${a}".`,{nodes:[t[a],s.name]})):t[a]=s.name}}}function LE(i){const n=i.getSchema(),t=Object.create(null),s=n?{query:n.getQueryType(),mutation:n.getMutationType(),subscription:n.getSubscriptionType()}:{};return{SchemaDefinition:a,SchemaExtension:a};function a(l){var u;const f=(u=l.operationTypes)!==null&&u!==void 0?u:[];for(const d of f){const y=d.operation,v=t[y];s[y]?i.reportError(new V(`Type for ${y} already defined in the schema. It cannot be redefined.`,{nodes:d})):v?i.reportError(new V(`There can be only one ${y} type in schema.`,{nodes:[v,d]})):t[y]=d}return!1}}function PE(i){const n=Object.create(null),t=i.getSchema();return{ScalarTypeDefinition:s,ObjectTypeDefinition:s,InterfaceTypeDefinition:s,UnionTypeDefinition:s,EnumTypeDefinition:s,InputObjectTypeDefinition:s};function s(a){const l=a.name.value;if(t!=null&&t.getType(l)){i.reportError(new V(`Type "${l}" already exists in the schema. It cannot also be defined in this type definition.`,{nodes:a.name}));return}return n[l]?i.reportError(new V(`There can be only one type named "${l}".`,{nodes:[n[l],a.name]})):n[l]=a.name,!1}}const BE=Object.freeze([TE,LE,PE,CE,xE,SE,FE,yE,pE,NE,bE,dE,kE,RE,IE]);class UE{constructor(n,t){this._ast=n,this._fragments=void 0,this._fragmentSpreads=new Map,this._recursivelyReferencedFragments=new Map,this._onError=t}get[Symbol.toStringTag](){return"ASTValidationContext"}reportError(n){this._onError(n)}getDocument(){return this._ast}getFragment(n){let t;if(this._fragments)t=this._fragments;else{t=Object.create(null);for(const s of this.getDocument().definitions)s.kind===D.FRAGMENT_DEFINITION&&(t[s.name.value]=s);this._fragments=t}return t[n]}getFragmentSpreads(n){let t=this._fragmentSpreads.get(n);if(!t){t=[];const s=[n];let a;for(;a=s.pop();)for(const l of a.selections)l.kind===D.FRAGMENT_SPREAD?t.push(l):l.selectionSet&&s.push(l.selectionSet);this._fragmentSpreads.set(n,t)}return t}getRecursivelyReferencedFragments(n){let t=this._recursivelyReferencedFragments.get(n);if(!t){t=[];const s=Object.create(null),a=[n.selectionSet];let l;for(;l=a.pop();)for(const u of this.getFragmentSpreads(l)){const f=u.name.value;if(s[f]!==!0){s[f]=!0;const d=this.getFragment(f);d&&(t.push(d),a.push(d.selectionSet))}}this._recursivelyReferencedFragments.set(n,t)}return t}}class ME extends UE{constructor(n,t,s){super(n,s),this._schema=t}get[Symbol.toStringTag](){return"SDLValidationContext"}getSchema(){return this._schema}}function $E(i,n,t=BE){const s=[],a=new ME(i,n,u=>{s.push(u)}),l=t.map(u=>u(a));return Rf(i,Vw(l)),s}function GE(i){const n=$E(i);if(n.length!==0)throw new Error(n.map(t=>t.message).join(`

`))}function WE(i,n){Ft(i)&&Ft(i.__schema)||ce(!1,`Invalid or incomplete introspection result. Ensure that you are passing "data" property of introspection response and no "errors" was returned alongside: ${Y(i)}.`);const t=i.__schema,s=si(t.types,x=>x.name,x=>N(x));for(const x of[...Os,...Ls])s[x.name]&&(s[x.name]=x);const a=t.queryType?v(t.queryType):null,l=t.mutationType?v(t.mutationType):null,u=t.subscriptionType?v(t.subscriptionType):null,f=t.directives?t.directives.map(dt):[];return new nh({description:t.description,query:a,mutation:l,subscription:u,types:Object.values(s),directives:f,assumeValid:void 0});function d(x){if(x.kind===we.LIST){const K=x.ofType;if(!K)throw new Error("Decorated type deeper than introspection query.");return new pn(d(K))}if(x.kind===we.NON_NULL){const K=x.ofType;if(!K)throw new Error("Decorated type deeper than introspection query.");const tn=d(K);return new se(Jw(tn))}return y(x)}function y(x){const K=x.name;if(!K)throw new Error(`Unknown type reference: ${Y(x)}.`);const tn=s[K];if(!tn)throw new Error(`Invalid or incomplete schema, unknown type: ${K}. Ensure that a full introspection query is used in order to build a client schema.`);return tn}function v(x){return jw(y(x))}function w(x){return zw(y(x))}function N(x){if(x!=null&&x.name!=null&&x.kind!=null)switch(x.kind){case we.SCALAR:return C(x);case we.OBJECT:return L(x);case we.INTERFACE:return Q(x);case we.UNION:return he(x);case we.ENUM:return $e(x);case we.INPUT_OBJECT:return Ee(x)}const K=Y(x);throw new Error(`Invalid or incomplete introspection result. Ensure that a full introspection query is used in order to build a client schema: ${K}.`)}function C(x){return new Nt({name:x.name,description:x.description,specifiedByURL:x.specifiedByURL})}function R(x){if(x.interfaces===null&&x.kind===we.INTERFACE)return[];if(!x.interfaces){const K=Y(x);throw new Error(`Introspection result missing interfaces: ${K}.`)}return x.interfaces.map(w)}function L(x){return new ft({name:x.name,description:x.description,interfaces:()=>R(x),fields:()=>ke(x)})}function Q(x){return new Es({name:x.name,description:x.description,interfaces:()=>R(x),fields:()=>ke(x)})}function he(x){if(!x.possibleTypes){const K=Y(x);throw new Error(`Introspection result missing possibleTypes: ${K}.`)}return new Ds({name:x.name,description:x.description,types:()=>x.possibleTypes.map(v)})}function $e(x){if(!x.enumValues){const K=Y(x);throw new Error(`Introspection result missing enumValues: ${K}.`)}return new Ni({name:x.name,description:x.description,values:si(x.enumValues,K=>K.name,K=>({description:K.description,deprecationReason:K.deprecationReason}))})}function Ee(x){if(!x.inputFields){const K=Y(x);throw new Error(`Introspection result missing inputFields: ${K}.`)}return new Is({name:x.name,description:x.description,fields:()=>nn(x.inputFields)})}function ke(x){if(!x.fields)throw new Error(`Introspection result missing fields: ${Y(x)}.`);return si(x.fields,K=>K.name,xe)}function xe(x){const K=d(x.type);if(!Bf(K)){const tn=Y(K);throw new Error(`Introspection must provide output type for fields, but received: ${tn}.`)}if(!x.args){const tn=Y(x);throw new Error(`Introspection result missing field args: ${tn}.`)}return{description:x.description,deprecationReason:x.deprecationReason,type:K,args:nn(x.args)}}function nn(x){return si(x,K=>K.name,Je)}function Je(x){const K=d(x.type);if(!Pf(K)){const Ct=Y(K);throw new Error(`Introspection must provide input type for arguments, but received: ${Ct}.`)}const tn=x.defaultValue!=null?Wt(Rw(x.defaultValue),K):void 0;return{description:x.description,type:K,defaultValue:tn,deprecationReason:x.deprecationReason}}function dt(x){if(!x.args){const K=Y(x);throw new Error(`Introspection result missing directive args: ${K}.`)}if(!x.locations){const K=Y(x);throw new Error(`Introspection result missing directive locations: ${K}.`)}return new Ht({name:x.name,description:x.description,isRepeatable:x.isRepeatable,locations:x.locations.slice(),args:nn(x.args)})}}function VE(i,n,t){var s,a,l,u;const f=[],d=Object.create(null),y=[];let v;const w=[];for(const A of n.definitions)if(A.kind===D.SCHEMA_DEFINITION)v=A;else if(A.kind===D.SCHEMA_EXTENSION)w.push(A);else if(gr(A))f.push(A);else if(Go(A)){const $=A.name.value,B=d[$];d[$]=B?B.concat([A]):[A]}else A.kind===D.DIRECTIVE_DEFINITION&&y.push(A);if(Object.keys(d).length===0&&f.length===0&&y.length===0&&w.length===0&&v==null)return i;const N=Object.create(null);for(const A of i.types)N[A.name]=$e(A);for(const A of f){var C;const $=A.name.value;N[$]=(C=Xc[$])!==null&&C!==void 0?C:_n(A)}const R={query:i.query&&Q(i.query),mutation:i.mutation&&Q(i.mutation),subscription:i.subscription&&Q(i.subscription),...v&&tn([v]),...tn(w)};return{description:(s=v)===null||s===void 0||(a=s.description)===null||a===void 0?void 0:a.value,...R,types:Object.values(N),directives:[...i.directives.map(he),...y.map(mr)],extensions:Object.create(null),astNode:(l=v)!==null&&l!==void 0?l:i.astNode,extensionASTNodes:i.extensionASTNodes.concat(w),assumeValid:(u=t==null?void 0:t.assumeValid)!==null&&u!==void 0?u:!1};function L(A){return ci(A)?new pn(L(A.ofType)):mn(A)?new se(L(A.ofType)):Q(A)}function Q(A){return N[A.name]}function he(A){const $=A.toConfig();return new Ht({...$,args:It($.args,K)})}function $e(A){if(cE(A)||rE(A))return A;if(jt(A))return xe(A);if(gn(A))return nn(A);if(on(A))return Je(A);if(Jn(A))return dt(A);if(Kn(A))return ke(A);if(Xn(A))return Ee(A);Qn(!1,"Unexpected type: "+Y(A))}function Ee(A){var $;const B=A.toConfig(),U=($=d[B.name])!==null&&$!==void 0?$:[];return new Is({...B,fields:()=>({...It(B.fields,de=>({...de,type:L(de.type)})),...rt(U)}),extensionASTNodes:B.extensionASTNodes.concat(U)})}function ke(A){var $;const B=A.toConfig(),U=($=d[A.name])!==null&&$!==void 0?$:[];return new Ni({...B,values:{...B.values,...Un(U)},extensionASTNodes:B.extensionASTNodes.concat(U)})}function xe(A){var $;const B=A.toConfig(),U=($=d[B.name])!==null&&$!==void 0?$:[];let de=B.specifiedByURL;for(const pe of U){var Pe;de=(Pe=Zc(pe))!==null&&Pe!==void 0?Pe:de}return new Nt({...B,specifiedByURL:de,extensionASTNodes:B.extensionASTNodes.concat(U)})}function nn(A){var $;const B=A.toConfig(),U=($=d[B.name])!==null&&$!==void 0?$:[];return new ft({...B,interfaces:()=>[...A.getInterfaces().map(Q),...hi(U)],fields:()=>({...It(B.fields,x),...fi(U)}),extensionASTNodes:B.extensionASTNodes.concat(U)})}function Je(A){var $;const B=A.toConfig(),U=($=d[B.name])!==null&&$!==void 0?$:[];return new Es({...B,interfaces:()=>[...A.getInterfaces().map(Q),...hi(U)],fields:()=>({...It(B.fields,x),...fi(U)}),extensionASTNodes:B.extensionASTNodes.concat(U)})}function dt(A){var $;const B=A.toConfig(),U=($=d[B.name])!==null&&$!==void 0?$:[];return new Ds({...B,types:()=>[...A.getTypes().map(Q),...Qt(U)],extensionASTNodes:B.extensionASTNodes.concat(U)})}function x(A){return{...A,type:L(A.type),args:A.args&&It(A.args,K)}}function K(A){return{...A,type:L(A.type)}}function tn(A){const $={};for(const U of A){var B;const de=(B=U.operationTypes)!==null&&B!==void 0?B:[];for(const Pe of de)$[Pe.operation]=Ct(Pe.type)}return $}function Ct(A){var $;const B=A.name.value,U=($=Xc[B])!==null&&$!==void 0?$:N[B];if(U===void 0)throw new Error(`Unknown type: "${B}".`);return U}function zt(A){return A.kind===D.LIST_TYPE?new pn(zt(A.type)):A.kind===D.NON_NULL_TYPE?new se(zt(A.type)):Ct(A)}function mr(A){var $;return new Ht({name:A.name.value,description:($=A.description)===null||$===void 0?void 0:$.value,locations:A.locations.map(({value:B})=>B),isRepeatable:A.repeatable,args:yr(A.arguments),astNode:A})}function fi(A){const $=Object.create(null);for(const de of A){var B;const Pe=(B=de.fields)!==null&&B!==void 0?B:[];for(const pe of Pe){var U;$[pe.name.value]={type:zt(pe.type),description:(U=pe.description)===null||U===void 0?void 0:U.value,args:yr(pe.arguments),deprecationReason:gs(pe),astNode:pe}}}return $}function yr(A){const $=A??[],B=Object.create(null);for(const de of $){var U;const Pe=zt(de.type);B[de.name.value]={type:Pe,description:(U=de.description)===null||U===void 0?void 0:U.value,defaultValue:Wt(de.defaultValue,Pe),deprecationReason:gs(de),astNode:de}}return B}function rt(A){const $=Object.create(null);for(const de of A){var B;const Pe=(B=de.fields)!==null&&B!==void 0?B:[];for(const pe of Pe){var U;const An=zt(pe.type);$[pe.name.value]={type:An,description:(U=pe.description)===null||U===void 0?void 0:U.value,defaultValue:Wt(pe.defaultValue,An),deprecationReason:gs(pe),astNode:pe}}}return $}function Un(A){const $=Object.create(null);for(const de of A){var B;const Pe=(B=de.values)!==null&&B!==void 0?B:[];for(const pe of Pe){var U;$[pe.name.value]={description:(U=pe.description)===null||U===void 0?void 0:U.value,deprecationReason:gs(pe),astNode:pe}}}return $}function hi(A){return A.flatMap($=>{var B,U;return(B=(U=$.interfaces)===null||U===void 0?void 0:U.map(Ct))!==null&&B!==void 0?B:[]})}function Qt(A){return A.flatMap($=>{var B,U;return(B=(U=$.types)===null||U===void 0?void 0:U.map(Ct))!==null&&B!==void 0?B:[]})}function _n(A){var $;const B=A.name.value,U=($=d[B])!==null&&$!==void 0?$:[];switch(A.kind){case D.OBJECT_TYPE_DEFINITION:{var de;const Ke=[A,...U];return new ft({name:B,description:(de=A.description)===null||de===void 0?void 0:de.value,interfaces:()=>hi(Ke),fields:()=>fi(Ke),astNode:A,extensionASTNodes:U})}case D.INTERFACE_TYPE_DEFINITION:{var Pe;const Ke=[A,...U];return new Es({name:B,description:(Pe=A.description)===null||Pe===void 0?void 0:Pe.value,interfaces:()=>hi(Ke),fields:()=>fi(Ke),astNode:A,extensionASTNodes:U})}case D.ENUM_TYPE_DEFINITION:{var pe;const Ke=[A,...U];return new Ni({name:B,description:(pe=A.description)===null||pe===void 0?void 0:pe.value,values:Un(Ke),astNode:A,extensionASTNodes:U})}case D.UNION_TYPE_DEFINITION:{var An;const Ke=[A,...U];return new Ds({name:B,description:(An=A.description)===null||An===void 0?void 0:An.value,types:()=>Qt(Ke),astNode:A,extensionASTNodes:U})}case D.SCALAR_TYPE_DEFINITION:{var Oi;return new Nt({name:B,description:(Oi=A.description)===null||Oi===void 0?void 0:Oi.value,specifiedByURL:Zc(A),astNode:A,extensionASTNodes:U})}case D.INPUT_OBJECT_TYPE_DEFINITION:{var xt;const Ke=[A,...U];return new Is({name:B,description:(xt=A.description)===null||xt===void 0?void 0:xt.value,fields:()=>rt(Ke),astNode:A,extensionASTNodes:U})}}}}const Xc=Fi([...Os,...Ls],i=>i.name);function gs(i){const n=th(zf,i);return n==null?void 0:n.reason}function Zc(i){const n=th(Qf,i);return n==null?void 0:n.url}function YE(i,n){i!=null&&i.kind===D.DOCUMENT||ce(!1,"Must provide valid Document AST."),(n==null?void 0:n.assumeValid)!==!0&&(n==null?void 0:n.assumeValidSDL)!==!0&&GE(i);const s=VE({description:void 0,types:[],directives:[],extensions:Object.create(null),extensionASTNodes:[],assumeValid:!1},i,n);if(s.astNode==null)for(const l of s.types)switch(l.name){case"Query":s.query=l;break;case"Mutation":s.mutation=l;break;case"Subscription":s.subscription=l;break}const a=[...s.directives,...xi.filter(l=>s.directives.every(u=>u.name!==l.name))];return new nh({...s,directives:a})}function qE(i,n){const t=Ow(i,{noLocation:void 0,allowLegacyFragmentVariables:void 0});return YE(t,{assumeValidSDL:void 0,assumeValid:void 0})}const ef=`
"""
Plan accessibilty preferences. This can be expanded to contain preferences for various accessibility use cases
in the future. Currently only generic wheelchair preferences are available.
"""
input AccessibilityPreferencesInput {
  """
  Wheelchair related preferences. Note, currently this is the only accessibility mode that is available.
  """
  wheelchair: WheelchairPreferencesInput
}


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


"""Preferences related to alighting from a transit vehicle."""
input AlightPreferencesInput {
  """What is the required minimum time alighting from a vehicle."""
  slack: Duration
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
Is it possible to arrive to the destination with a rented bicycle and does it
come with an extra cost.
"""
input DestinationBicyclePolicyInput {
  """
  For networks that require station drop-off, should the routing engine offer results that go directly to the destination without dropping off the rental bicycle first.
  """
  allowKeeping: Boolean
  """
  Cost associated with arriving to the destination with a rented bicycle.
  No cost is applied if arriving to the destination after dropping off the rented
  bicycle.
  """
  keepingCost: Cost
}


"""
Is it possible to arrive to the destination with a rented scooter and does it
come with an extra cost.
"""
input DestinationScooterPolicyInput {
  """
  For networks that require station drop-off, should the routing engine offer results that go directly to the destination without dropping off the rental scooter first.
  """
  allowKeeping: Boolean
  """
  Cost associated with arriving to the destination with a rented scooter.
  No cost is applied if arriving to the destination after dropping off the rented
  scooter.
  """
  keepingCost: Cost
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


"""Preferences related to travel with a bicycle."""
input BicyclePreferencesInput {
  """
  A multiplier for how bad cycling is compared to being in transit for equal lengths of time.
  """
  reluctance: Reluctance
  """Walking preferences when walking a bicycle."""
  walk: BicycleWalkPreferencesInput
  """
  Maximum speed on flat ground while riding a bicycle. Note, this speed is higher than
  the average speed will be in itineraries as this is the maximum speed but there are
  factors that slow down cycling such as crossings, intersections and elevation changes.
  """
  speed: Speed
  """What criteria should be used when optimizing a cycling route."""
  optimization: CyclingOptimizationInput
  """Cost of boarding a vehicle with a bicycle."""
  boardCost: Cost
  """Bicycle rental related preferences."""
  rental: BicycleRentalPreferencesInput
  """Bicycle parking related preferences."""
  parking: BicycleParkingPreferencesInput
}


"""
Preferences related to boarding a transit vehicle. Note, board costs for each street mode
can be found under the street mode preferences.
"""
input BoardPreferencesInput {
  """
  A multiplier for how bad waiting at a stop is compared to being in transit for equal lengths of time.
  """
  waitReluctance: Reluctance
  """
  What is the required minimum waiting time at a stop. Setting this value as \`PT0S\`, for example, can lead
  to passenger missing a connection when the vehicle leaves ahead of time or the passenger arrives to the
  stop later than expected.
  """
  slack: Duration
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


"""
Preferences related to traveling on a car (excluding car travel on transit services such as taxi).
"""
input CarPreferencesInput {
  """
  A multiplier for how bad travelling on car is compared to being in transit for equal lengths of time.
  """
  reluctance: Reluctance
  """Car rental related preferences."""
  rental: CarRentalPreferencesInput
  """Car parking related preferences."""
  parking: CarParkingPreferencesInput
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


"""
A static cost that is applied to a certain event or entity. Cost is a positive integer,
for example \`450\`. One cost unit should roughly match a one second travel on transit.
"""
scalar Cost


"""
Coordinate (often referred as coordinates), which is used to specify a location using in the
WGS84 coordinate system.
"""
type Coordinate {
  """Latitude as a WGS84 format number."""
  latitude: CoordinateValue!
  """Longitude as a WGS84 format number."""
  longitude: CoordinateValue!
}


"""
Either a latitude or a longitude as a WGS84 format floating point number.
"""
scalar CoordinateValue @specifiedBy(url: "https://earth-info.nga.mil/?dir=wgs84&action=wgs84")


type Coordinates {
  """Latitude (WGS 84)"""
  lat: Float
  """Longitude (WGS 84)"""
  lon: Float
}


"""Plan date time options. Only one of the values should be defined."""
input PlanDateTimeInput @oneOf {
  """
  Earliest departure date time. The returned itineraries should not
  depart before this instant unless one is using paging to find earlier
  itineraries. Note, it is not currently possible to define both
  \`earliestDeparture\` and \`latestArrival\`.
  """
  earliestDeparture: OffsetDateTime
  """
  Latest arrival time date time. The returned itineraries should not
  arrive to the destination after this instant unless one is using
  paging to find later itineraries. Note, it is not currently possible
  to define both \`earliestDeparture\` and \`latestArrival\`.
  """
  latestArrival: OffsetDateTime
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


"""Feed publisher information"""
type FeedPublisher {
  """Name of feed publisher"""
  name: String!
  """Web address of feed publisher"""
  url: String!
}


"""
A feed provides routing data (stops, routes, timetables, etc.) from one or more public transport agencies.
"""
type Feed {
  """ID of the feed"""
  feedId: String!
  """List of agencies which provide data to this feed"""
  agencies: [Agency]
  "The publisher of the input transit data."
  publisher: FeedPublisher
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


scalar GeoJson @specifiedBy(url: "https://www.rfcreader.com/#rfc7946")


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


"""A coordinate used for a location in a plan query."""
input PlanCoordinateInput {
  """Latitude as a WGS84 format number."""
  latitude: CoordinateValue!
  """Longitude as a WGS84 format number."""
  longitude: CoordinateValue!
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
  stops: String @deprecated(reason: "Not implemented in OTP2.")
  """
  A comma-separated list of banned stop ids. Only itineraries where these stops
  are not travelled through are returned, e.g. if a bus route stops at one of
  these stops, that route will not be used in the itinerary, even if the stop is
  not used for boarding or disembarking the vehicle.
  """
  stopsHard: String @deprecated(reason: "Not implemented in OTP2.")
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


"""
Locale in the format defined in [RFC5646](https://datatracker.ietf.org/doc/html/rfc5646). For example, \`en\` or \`en-US\`.
"""
scalar Locale @specifiedBy(url: "https://www.rfcreader.com/#rfc5646")


"""Preferences for car parking facilities used during the routing."""
input CarParkingPreferencesInput {
  """
  Selection filters to include or exclude parking facilities.
  An empty list will include all facilities in the routing search.
  """
  filters: [ParkingFilter!]
  """
  If \`preferred\` is non-empty, using a parking facility that doesn't contain
  at least one of the preferred conditions, will receive this extra cost and therefore avoided if
  preferred options are available.
  """
  unpreferredCost: Cost
  """
  If non-empty every parking facility that doesn't match this set of conditions will
  receive an extra cost (defined by \`unpreferredCost\`) and therefore avoided.
  """
  preferred: [ParkingFilter!]
}


"""Preferences for bicycle parking facilities used during the routing."""
input BicycleParkingPreferencesInput {
  """
  Selection filters to include or exclude parking facilities.
  An empty list will include all facilities in the routing search.
  """
  filters: [ParkingFilter!]
  """
  If \`preferred\` is non-empty, using a parking facility that doesn't contain
  at least one of the preferred conditions, will receive this extra cost and therefore avoided if
  preferred options are available.
  """
  unpreferredCost: Cost
  """
  If non-empty every parking facility that doesn't match this set of conditions will
  receive an extra cost (defined by \`unpreferredCost\`) and therefore avoided.
  """
  preferred: [ParkingFilter!]
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
Settings that control the behavior of itinerary filtering. **These are advanced settings and
should not be set by a user through user preferences.**
"""
input PlanItineraryFilterInput {
  """
  Itinerary filter debug profile used to control the behaviour of itinerary filters.
  """
  itineraryFilterDebugProfile: ItineraryFilterDebugProfile = OFF
  """
  Pick one itinerary from each group after putting itineraries that are \`85%\` similar together,
  if the given value is \`0.85\`, for example. Itineraries are grouped together based on relative
  the distance of transit travel that is identical between the itineraries (access, egress and
  transfers are ignored). The value must be at least \`0.5\`.
  """
  groupSimilarityKeepOne: Ratio = 0.85
  """
  Pick three itineraries from each group after putting itineraries that are \`68%\` similar together,
  if the given value is \`0.68\`, for example. Itineraries are grouped together based on relative
  the distance of transit travel that is identical between the itineraries (access, egress and
  transfers are ignored). The value must be at least \`0.5\`.
  """
  groupSimilarityKeepThree: Ratio = 0.68
  """
  Of the itineraries grouped to maximum of three itineraries, how much worse can the non-grouped
  legs be compared to the lowest cost. \`2.0\` means that they can be double the cost, and any
  itineraries having a higher cost will be filtered away. Use a value lower than \`1.0\` to turn the
  grouping off.
  """
  groupedOtherThanSameLegsMaxCostMultiplier: Float = 2.0
}


"""
Plan location settings. Location must be set. Label is optional
and used for naming the location.
"""
input PlanLabeledLocationInput {
  """A location that has to be used in an itinerary."""
  location: PlanLocationInput!
  """
  A label that can be attached to the location. This label is then returned with the location
  in the itineraries.
  """
  label: String
}


"""
Plan location. Either a coordinate or a stop location should be defined.
"""
input PlanLocationInput @oneOf {
  """
  Coordinate of the location. Note, either a coordinate or a stop location should be defined.
  """
  coordinate: PlanCoordinateInput
  """
  Stop, station, a group of stop places or multimodal stop place that should be used as
  a location for the search. The trip doesn't have to use the given stop location for a
  transit connection as it's possible to start walking to another stop from the given
  location. If a station or a group of stop places is provided, a stop that makes the most
  sense for the journey is picked as the location within the station or group of stop places.
  """
  stopLocation: PlanStopLocationInput
}


"""Wrapper type for different types of preferences related to plan query."""
input PlanPreferencesInput {
  """
  Street routing preferences used for ingress, egress and transfers. These do not directly affect
  the transit legs but can change how preferable walking or cycling, for example, is compared to
  transit.
  """
  street: PlanStreetPreferencesInput
  """Transit routing preferences used for transit legs."""
  transit: TransitPreferencesInput
  """
  Accessibility preferences that affect both the street and transit routing.
  """
  accessibility: AccessibilityPreferencesInput
}


"""
Stop, station, a group of stop places or multimodal stop place that should be used as
a location for the search. The trip doesn't have to use the given stop location for a
transit connection as it's possible to start walking to another stop from the given
location. If a station or a group of stop places is provided, a stop that makes the most
sense for the journey is picked as the location within the station or group of stop places.
"""
input PlanStopLocationInput {
  """
  ID of the stop, station, a group of stop places or multimodal stop place. Format
  should be \`FeedId:StopLocationId\`.
  """
  stopLocationId: String!
}


"""Mode selections for the plan search."""
input PlanModesInput {
  """Should only the direct search without any transit be done."""
  directOnly: Boolean = false
  """
  Should only the transit search be done and never suggest itineraries that don't
  contain any transit legs.
  """
  transitOnly: Boolean = false
  """
  Street mode that is used when searching for itineraries that don't use any transit.
  If more than one mode is selected, at least one of them must be used but not necessarily all.
  There are modes that automatically also use walking such as the rental modes. To force rental
  to be used, this should only include the rental mode and not \`WALK\` in addition.
  The default access mode is \`WALK\`.
  """
  direct: [PlanDirectMode!]
  """
  Modes for different phases of an itinerary when transit is included. Also
  includes street mode selections related to connecting to the transit network
  and transfers. By default, all transit modes are usable and \`WALK\` is used for
  access, egress and transfers.
  """
  transit: PlanTransitModesInput
}


"""
Modes for different phases of an itinerary when transit is included. Also includes street
mode selections related to connecting to the transit network and transfers.
"""
input PlanTransitModesInput {
  """
  Street mode that is used when searching for access to the transit network from origin.
  If more than one mode is selected, at least one of them must be used but not necessarily all.
  There are modes that automatically also use walking such as the rental modes. To force rental
  to be used, this should only include the rental mode and not \`WALK\` in addition.
  The default access mode is \`WALK\`.
  """
  access: [PlanAccessMode!]
  """
  Street mode that is used when searching for egress to destination from the transit network.
  If more than one mode is selected, at least one of them must be used but not necessarily all.
  There are modes that automatically also use walking such as the rental modes. To force rental
  to be used, this should only include the rental mode and not \`WALK\` in addition.
  The default access mode is \`WALK\`.
  """
  egress: [PlanEgressMode!]
  """
  Street mode that is used when searching for transfers. Selection of only one allowed for now.
  The default transfer mode is \`WALK\`.
  """
  transfer: [PlanTransferMode!]
  """
  Transit modes and reluctances associated with them. Each defined mode can be used in
  an itinerary but doesn't have to be. If direct search is not disabled, there can be an
  itinerary without any transit legs. By default, all transit modes are usable.
  """
  transit: [PlanTransitModePreferenceInput!]
}


"""
Street routing preferences used for ingress, egress and transfers. These do not directly affect
the transit legs but can change how preferable walking or cycling, for example, is compared to
transit.
"""
input PlanStreetPreferencesInput {
  """Cycling related preferences."""
  bicycle: BicyclePreferencesInput
  """Scooter (kick or electrical) related preferences."""
  scooter: ScooterPreferencesInput
  """
  Car related preferences. These are not used for car travel as part of transit, such as
  taxi travel.
  """
  car: CarPreferencesInput
  """
  Walk related preferences. These are not used when walking a bicycle or a scooter as they
  have their own preferences.
  """
  walk: WalkPreferencesInput
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


"""
Relative importance of optimization factors. Only effective for bicycling legs.
Invariant: \`safety + flatness + time == 1\`
"""
input TriangleCyclingFactorsInput {
  """
  Relative importance of cycling safety, but this factor can also include other
  concerns such as convenience and general cyclist preferences by taking into account
  road surface etc.
  """
  safety: Ratio!
  """Relative importance of flat terrain"""
  flatness: Ratio!
  """Relative importance of duration"""
  time: Ratio!
}


"""
Relative importance of optimization factors. Only effective for scooter legs.
Invariant: \`safety + flatness + time == 1\`
"""
input TriangleScooterFactorsInput {
  """
  Relative importance of scooter safety, but this factor can also include other
  concerns such as convenience and general scooter preferences by taking into account
  road surface etc.
  """
  safety: Ratio!
  """Relative importance of flat terrain"""
  flatness: Ratio!
  """Relative importance of duration"""
  time: Ratio!
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
  """Private car trips shared with others."""
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


"""
Transit modes include modes that are used within organized transportation networks
run by public transportation authorities, taxi companies etc.
Equivalent to GTFS route_type or to NeTEx TransportMode.
"""
enum TransitMode {
  AIRPLANE
  BUS
  CABLE_CAR
  COACH
  FERRY
  FUNICULAR
  GONDOLA
  """This includes long or short distance trains."""
  RAIL
  """Subway or metro, depending on the local terminology."""
  SUBWAY
  TRAM
  """Private car trips shared with others."""
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


"""
Information about pagination in a connection. Part of the
[GraphQL Cursor Connections Specification](https://relay.dev/graphql/connections.htm).
"""
type PlanPageInfo {
  """When paginating forwards, are there more items?"""
  hasNextPage: Boolean!
  """When paginating backwards, are there more items?"""
  hasPreviousPage: Boolean!
  """When paginating backwards, the cursor to continue."""
  startCursor: String
  """When paginating forwards, the cursor to continue."""
  endCursor: String
  """The search window that was used for the search in the current page."""
  searchWindowUsed: Duration
}


"""
Street modes that can be used for access to the transit network from origin.
"""
enum PlanAccessMode {
  """
  Cycling to a stop and boarding a vehicle with the bicycle.
  Note, this can include walking when it's needed to walk the bicycle.
  Access can use cycling only if the mode used for transfers
  and egress is also \`BICYCLE\`.
  """
  BICYCLE
  """
  Bicycle rental can use either station based systems or "floating"
  vehicles which are not linked to a rental station. Note, if there are no
  rental options available, access will include only walking. Also, this
  can include walking before picking up or after dropping off the
  bicycle or when it's needed to walk the bicycle.
  """
  BICYCLE_RENTAL
  """
  Starting the itinerary with a bicycle and parking the bicycle to
  a parking location. Note, this can include walking after parking
  the bicycle or when it's needed to walk the bicycle.
  """
  BICYCLE_PARKING
  """
  Car rental can use either station based systems or "floating"
  vehicles which are not linked to a rental station. Note, if there are no
  rental options available, access will include only walking. Also, this
  can include walking before picking up or after dropping off the
  car.
  """
  CAR_RENTAL
  """
  Starting the itinerary with a car and parking the car to a parking location.
  Note, this can include walking after parking the car.
  """
  CAR_PARKING
  """
  Getting dropped off by a car to a location that is accessible with a car.
  Note, this can include walking after the drop-off.
  """
  CAR_DROP_OFF
  """
  Flexible transit. This can include different forms of flexible transit that
  can be defined in GTFS-Flex or in Netex. Note, this can include walking before
  or after the flexible transit leg.
  """
  FLEX
  """
  Scooter rental can use either station based systems or "floating"
  vehicles which are not linked to a rental station. Note, if there are no
  rental options available, access will include only walking. Also, this
  can include walking before picking up or after dropping off the
  scooter.
  """
  SCOOTER_RENTAL
  """Walking to a stop."""
  WALK
}


"""
Street mode that is used when searching for itineraries that don't use any transit.
"""
enum PlanDirectMode {
  """
  Cycling from the origin to the destination. Note, this can include walking
  when it's needed to walk the bicycle.
  """
  BICYCLE
  """
  Bicycle rental can use either station based systems or "floating"
  vehicles which are not linked to a rental station. Note, if there are no
  rental options available, itinerary will include only walking.
  Also, it can include walking before picking up or after dropping off the
  bicycle or when it's needed to walk the bicycle.
  """
  BICYCLE_RENTAL
  """
  Starting the itinerary with a bicycle and parking the bicycle to
  a parking location. Note, this can include walking after parking
  the bicycle or when it's needed to walk the bicycle.
  """
  BICYCLE_PARKING
  """Driving a car from the origin to the destination."""
  CAR
  """
  Car rental can use either station based systems or "floating"
  vehicles which are not linked to a rental station. Note, if there are no
  rental options available, itinerary will include only walking. Also, this
  can include walking before picking up or after dropping off the
  car.
  """
  CAR_RENTAL
  """
  Starting the itinerary with a car and parking the car to a parking location.
  Note, this can include walking after parking the car.
  """
  CAR_PARKING
  """
  Flexible transit. This can include different forms of flexible transit that
  can be defined in GTFS-Flex or in Netex. Note, this can include walking before
  or after the flexible transit leg.
  """
  FLEX
  """
  Scooter rental can use either station based systems or "floating"
  vehicles which are not linked to a rental station. Note, if there are no
  rental options available, itinerary will include only walking. Also, this
  can include walking before picking up or after dropping off the
  scooter.
  """
  SCOOTER_RENTAL
  """
  Walking from the origin to the destination. Note, this can include walking
  when it's needed to walk the bicycle.
  """
  WALK
}


"""
Street modes that can be used for egress from the transit network to destination.
"""
enum PlanEgressMode {
  """
  Cycling from a stop to the destination. Note, this can include walking when
  it's needed to walk the bicycle. Egress can use cycling only if the mode used
  for access and transfers is also \`BICYCLE\`.
  """
  BICYCLE
  """
  Bicycle rental can use either station based systems or "floating"
  vehicles which are not linked to a rental station. Note, if there are no
  rental options available, egress will include only walking. Also, this
  can include walking before picking up or after dropping off the
  bicycle or when it's needed to walk the bicycle.
  """
  BICYCLE_RENTAL
  """
  Car rental can use either station based systems or "floating"
  vehicles which are not linked to a rental station. Note, if there are no
  rental options available, egress will include only walking. Also, this
  can include walking before picking up or after dropping off the
  car.
  """
  CAR_RENTAL
  """
  Getting picked up by a car from a location that is accessible with a car.
  Note, this can include walking before the pickup.
  """
  CAR_PICKUP
  """
  Flexible transit. This can include different forms of flexible transit that
  can be defined in GTFS-Flex or in Netex. Note, this can include walking before
  or after the flexible transit leg.
  """
  FLEX
  """
  Scooter rental can use either station based systems or "floating"
  vehicles which are not linked to a rental station. Note, if there are no
  rental options available, egress will include only walking. Also, this
  can include walking before picking up or after dropping off the
  scooter.
  """
  SCOOTER_RENTAL
  """Walking from a stop to the destination."""
  WALK
}


enum PlanTransferMode {
  """
  Cycling between transit vehicles (typically between stops). Note, this can
  include walking when it's needed to walk the bicycle. Transfers can only use
  cycling if the mode used for access and egress is also \`BICYCLE\`.
  """
  BICYCLE
  """Walking between transit vehicles (typically between stops)."""
  WALK
}


"""Real-time vehicle position"""
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
  """Real-time updated position of vehicles that are serving this pattern."""
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


"""What criteria should be used when optimizing a cycling route."""
input CyclingOptimizationInput @oneOf {
  """Use one of the predefined optimization types."""
  type: CyclingOptimizationType
  """Define optimization by weighing three criteria."""
  triangle: TriangleCyclingFactorsInput
}


"""
Predefined optimization alternatives for bicycling routing. For more customization,
one can use the triangle factors.
"""
enum CyclingOptimizationType {
  """
  Search for routes with the shortest duration while ignoring the cycling safety
  of the streets (the routes should still follow local regulations). Routes can include
  steep streets, if they are the fastest alternatives. This option was previously called
  \`QUICK\`.
  """
  SHORTEST_DURATION
  """
  Emphasize flatness over safety or duration of the route. This option was previously called \`FLAT\`.
  """
  FLAT_STREETS
  """
  Emphasize cycling safety over flatness or duration of the route. Safety can also include other
  concerns such as convenience and general cyclist preferences by taking into account
  road surface etc. This option was previously called \`SAFE\`.
  """
  SAFE_STREETS
  """
  Completely ignore the elevation differences and prefer the streets, that are evaluated
  to be the safest, even more than with the \`SAFE_STREETS\` option.
  Safety can also include other concerns such as convenience and general cyclist preferences
  by taking into account road surface etc. This option was previously called \`GREENWAYS\`.
  """
  SAFEST_STREETS
}


"""What criteria should be used when optimizing a scooter route."""
input ScooterOptimizationInput @oneOf {
  """Use one of the predefined optimization types."""
  type: ScooterOptimizationType
  """Define optimization by weighing three criteria."""
  triangle: TriangleScooterFactorsInput
}


"""
Predefined optimization alternatives for scooter routing. For more customization,
one can use the triangle factors.
"""
enum ScooterOptimizationType {
  """
  Search for routes with the shortest duration while ignoring the scooter safety
  of the streets. The routes should still follow local regulations, but currently scooters
  are only allowed on the same streets as bicycles which might not be accurate for each country
  or with different types of scooters. Routes can include steep streets, if they are
  the fastest alternatives. This option was previously called \`QUICK\`.
  """
  SHORTEST_DURATION
  """
  Emphasize flatness over safety or duration of the route. This option was previously called \`FLAT\`.
  """
  FLAT_STREETS
  """
  Emphasize scooter safety over flatness or duration of the route. Safety can also include other
  concerns such as convenience and general preferences by taking into account road surface etc.
  Note, currently the same criteria is used both for cycling and scooter travel to determine how
  safe streets are for cycling or scooter. This option was previously called \`SAFE\`.
  """
  SAFE_STREETS
  """
  Completely ignore the elevation differences and prefer the streets, that are evaluated
  to be safest for scooters, even more than with the \`SAFE_STREETS\` option.
  Safety can also include other concerns such as convenience and general preferences by taking
  into account road surface etc.  Note, currently the same criteria is used both for cycling and
  scooter travel to determine how safe streets are for cycling or scooter.
  This option was previously called \`GREENWAYS\`.
  """
  SAFEST_STREETS
}


"""
Speed in meters per seconds. Values are positive floating point numbers (for example, 2.34).
"""
scalar Speed


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
  However, it should be noted that real-time updates can change the values, so don't store it for
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
  is delayed and new real-time data is available.
  """
  prevDateTime: Long @deprecated(reason: "Use previousPageCursor instead")
  """
  This is the suggested search time for the "next page" or time window. Insert it together
  with the searchWindowUsed in the request to get a new set of trips following in the
  search-window AFTER the current search. No duplicate trips should be returned, unless a trip
  is delayed and new real-time data is available.
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
Plan (result of an itinerary search) that follows
[GraphQL Cursor Connections Specification](https://relay.dev/graphql/connections.htm).
"""
type PlanConnection {
  """What was the starting point for the itinerary search."""
  searchDateTime: OffsetDateTime
  """Errors faced during the routing search."""
  routingErrors: [RoutingError!]!
  """
  Edges which contain the itineraries. Part of the
  [GraphQL Cursor Connections Specification](https://relay.dev/graphql/connections.htm).
  """
  edges: [PlanEdge]
  """
  Contains cursors to continue the search and the information if there are more itineraries available.
  Part of the [GraphQL Cursor Connections Specification](https://relay.dev/graphql/connections.htm).
  """
  pageInfo: PlanPageInfo!
}


"""
Edge outputted by a plan search. Part of the
[GraphQL Cursor Connections Specification](https://relay.dev/graphql/connections.htm).
"""
type PlanEdge {
  """
  An itinerary suggestion. Part of the
  [GraphQL Cursor Connections Specification](https://relay.dev/graphql/connections.htm).
  """
  node: Itinerary!
  """
  The cursor of the edge. Part of the
  [GraphQL Cursor Connections Specification](https://relay.dev/graphql/connections.htm).
  """
  cursor: String!
}


"""
List of coordinates in an encoded polyline format (see
https://developers.google.com/maps/documentation/utilities/polylinealgorithm).
The value appears in JSON as a string.
"""
scalar Polyline @specifiedBy(url: "https://developers.google.com/maps/documentation/utilities/polylinealgorithm")


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
  """
  Plan (itinerary) search that follows
  [GraphQL Cursor Connections Specification](https://relay.dev/graphql/connections.htm).
  """
  planConnection(
    """
    Datetime of the search. It's possible to either define the earliest departure time
    or the latest arrival time. By default, earliest departure time is set as now.
    """
    dateTime: PlanDateTimeInput
    """
    Duration of the search window. This either starts at the defined earliest departure
    time or ends at the latest arrival time. If this is not provided, a reasonable
    search window is automatically generated. When searching for earlier or later itineraries
    with paging, this search window is no longer used and the new window will be based
    on how many suggestions were returned in the previous search. The new search window can be
    shorter or longer than the original search window. Note, itineraries are returned faster
    with a smaller search window and search window limitation is done mainly for performance reasons.
    
    Setting this parameter makes especially sense if the transportation network is as sparse or dense
    in the whole itinerary search area. Otherwise, letting the system decide what is the search window
    is in combination of using paging can lead to better performance and to getting a more consistent
    number of itineraries in each search.
    """
    searchWindow: Duration
    """
    The origin where the search starts. Usually coordinates but can also be a stop location.
    """
    origin: PlanLabeledLocationInput!
    """
    The destination where the search ends. Usually coordinates but can also be a stop location.
    """
    destination: PlanLabeledLocationInput!
    """
    Street and transit modes used during the search. This also includes options to only return
    an itinerary that contains no transit legs or force transit to be used in all itineraries.
    By default, all transit modes are usable and \`WALK\` is used for direct street suggestions,
    access, egress and transfers.
    """
    modes: PlanModesInput
    """
    Preferences that affect what itineraries are returned. Preferences are split into categories.
    """
    preferences: PlanPreferencesInput
    """
    Settings that control the behavior of itinerary filtering. These are advanced settings and
    should not be set by a user through user preferences.
    """
    itineraryFilter: PlanItineraryFilterInput
    """
    Locale used for translations. Note, there might not necessarily be translations available.
    It's possible and recommended to use the ´accept-language´ header instead of this parameter.
    """
    locale: Locale
    """
    Takes in cursor from a previous search. Used for forward pagination. If earliest departure time
    is used in the original query, the new search then returns itineraries that depart after
    the start time of the last itinerary that was returned, or at the same time if there are multiple
    itinerary options that can depart at that moment in time.
    If latest arrival time is defined, the new search returns itineraries that arrive before the end
    time of the last itinerary that was returned in the previous search, or at the same time if there
    are multiple itinerary options that can arrive at that moment in time. This parameter is part of
    the [GraphQL Cursor Connections Specification](https://relay.dev/graphql/connections.htm) and
    should be used together with the \`first\` parameter.
    """
    after: String
    """
    How many new itineraries should at maximum be returned in either the first search or with
    forward pagination. This parameter is part of the
    [GraphQL Cursor Connections Specification](https://relay.dev/graphql/connections.htm)
    and should be used together with the \`after\` parameter (although \`after\` shouldn't be defined
    in the first search).
    """
    first: Int
    """
    Takes in cursor from a previous search. Used for backwards pagination. If earliest departure time
    is used in the original query, the new search then returns itineraries that depart before that time.
    If latest arrival time is defined, the new search returns itineraries that arrive after that time.
    This parameter is part of the [GraphQL Cursor Connections Specification](https://relay.dev/graphql/connections.htm)
    and should be used together with the \`last\` parameter.
    """
    before: String
    """
    How many new itineraries should at maximum be returned in backwards pagination. It's recommended to
    use the same value as was used for the \`first\` parameter in the original search for optimal
    performance. This parameter is part of the
    [GraphQL Cursor Connections Specification](https://relay.dev/graphql/connections.htm)
    and should be used together with the \`before\` parameter.
    """
    last: Int
  ): PlanConnection @async @deprecated(reason: "Experimental and can include breaking changes, use plan instead")
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
A cost multiplier for how bad something is compared to being in transit for equal lengths of time.
The value should be greater than 0. 1 means neutral and values below 1 mean that something is
preferred over transit.
"""
scalar Reluctance


"""
Preferences related to scooter rental (station based or floating scooter rental).
"""
input ScooterRentalPreferencesInput {
  """
  Is it possible to arrive to the destination with a rented scooter and does it
  come with an extra cost.
  """
  destinationScooterPolicy: DestinationScooterPolicyInput
  """Rental networks which can be potentially used as part of an itinerary."""
  allowedNetworks: [String!]
  """Rental networks which cannot be used as part of an itinerary."""
  bannedNetworks: [String!]
}


"""
Preferences related to car rental (station based or floating car rental).
"""
input CarRentalPreferencesInput {
  """Rental networks which can be potentially used as part of an itinerary."""
  allowedNetworks: [String!]
  """Rental networks which cannot be used as part of an itinerary."""
  bannedNetworks: [String!]
}


"""
Preferences related to bicycle rental (station based or floating bicycle rental).
"""
input BicycleRentalPreferencesInput {
  """
  Is it possible to arrive to the destination with a rented bicycle and does it
  come with an extra cost.
  """
  destinationBicyclePolicy: DestinationBicyclePolicyInput
  """Rental networks which can be potentially used as part of an itinerary."""
  allowedNetworks: [String!]
  """Rental networks which cannot be used as part of an itinerary."""
  bannedNetworks: [String!]
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


"""Preferences related to travel with a scooter (kick or e-scooter)."""
input ScooterPreferencesInput {
  """
  A multiplier for how bad riding a scooter is compared to being in transit
  for equal lengths of time.
  """
  reluctance: Reluctance
  """
  Maximum speed on flat ground while riding a scooter. Note, this speed is higher than
  the average speed will be in itineraries as this is the maximum speed but there are
  factors that slow down the travel such as crossings, intersections and elevation changes.
  """
  speed: Speed
  """What criteria should be used when optimizing a scooter route."""
  optimization: ScooterOptimizationInput
  """Scooter rental related preferences."""
  rental: ScooterRentalPreferencesInput
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
  However, it should be noted that real-time updates can change the values, so don't store it for
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
  Real-time prediction of arrival time. Format: seconds since midnight of the departure date
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
  Real-time prediction of departure time. Format: seconds since midnight of the departure date
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


input TimetablePreferencesInput {
  """
  When false, real-time updates are considered during the routing.
  In practice, when this option is set as true, some of the suggestions might not be
  realistic as the transfers could be invalid due to delays,
  trips can be cancelled or stops can be skipped.
  """
  excludeRealTimeUpdates: Boolean
  """
  When true, departures that have been cancelled ahead of time will be
  included during the routing. This means that an itinerary can include
  a cancelled departure while some other alternative that contains no cancellations
  could be filtered out as the alternative containing a cancellation would normally
  be better.
  """
  includePlannedCancellations: Boolean
  """
  When true, departures that have been cancelled through a real-time feed will be
  included during the routing. This means that an itinerary can include
  a cancelled departure while some other alternative that contains no cancellations
  could be filtered out as the alternative containing a cancellation would normally
  be better. This option can't be set to true while \`includeRealTimeUpdates\` is false.
  """
  includeRealTimeCancellations: Boolean
}


"""
Preferences related to transfers between transit vehicles (typically between stops).
"""
input TransferPreferencesInput {
  """A static cost that is added for each transfer on top of other costs."""
  cost: Cost
  """
  A global minimum transfer time (in seconds) that specifies the minimum amount of time
  that must pass between exiting one transit vehicle and boarding another. This time is
  in addition to time it might take to walk between transit stops. Setting this value
  as \`PT0S\`, for example, can lead to passenger missing a connection when the vehicle leaves
  ahead of time or the passenger arrives to the stop later than expected.
  """
  slack: Duration
  """
  How many additional transfers there can be at maximum compared to the itinerary with the
  least number of transfers.
  """
  maximumAdditionalTransfers: Int
  """How many transfers there can be at maximum in an itinerary."""
  maximumTransfers: Int
}


"""Transit mode and a reluctance associated with it."""
input PlanTransitModePreferenceInput {
  """
  Transit mode that could be (but doesn't have to be) used in an itinerary.
  """
  mode: TransitMode!
  """Costs related to using a transit mode."""
  cost: TransitModePreferenceCostInput
}


"""Costs related to using a transit mode."""
input TransitModePreferenceCostInput {
  """A cost multiplier of transit leg travel time."""
  reluctance: Reluctance!
}


"""Transit routing preferences used for transit legs."""
input TransitPreferencesInput {
  """
  Preferences related to boarding a transit vehicle. Note, board costs for each street mode
  can be found under the street mode preferences.
  """
  board: BoardPreferencesInput
  """Preferences related to alighting from a transit vehicle."""
  alight: AlightPreferencesInput
  """
  Preferences related to transfers between transit vehicles (typically between stops).
  """
  transfer: TransferPreferencesInput
  """Preferences related to cancellations and real-time."""
  timetable: TimetablePreferencesInput
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
  The latest real-time occupancy information for the latest occurance of this
  trip.
  """
  occupancy: TripOccupancy
}


"""
Enable this to attach a system notice to itineraries instead of removing them. This is very
convenient when tuning the itinerary-filter-chain.
"""
enum ItineraryFilterDebugProfile {
  """
  Only return the requested number of itineraries, counting both actual and deleted ones.
  The top \`numItineraries\` using the request sort order is returned. This does not work
  with paging, itineraries after the limit, but inside the search-window are skipped when
  moving to the next page.
  """
  LIMIT_TO_NUMBER_OF_ITINERARIES
  """
  Return all itineraries, including deleted ones, inside the actual search-window used
  (the requested search-window may differ).
  """
  LIMIT_TO_SEARCH_WINDOW
  "List all itineraries, including all deleted itineraries."
  LIST_ALL
  "By default, the debug itinerary filters is turned off."
  OFF
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


"""Preferences for walking a bicycle."""
input BicycleWalkPreferencesInput {
  """
  Maximum walk speed on flat ground. Note, this speed is higher than the average speed
  will be in itineraries as this is the maximum speed but there are
  factors that slow down walking such as crossings, intersections and elevation changes.
  """
  speed: Speed
  """Costs related to walking a bicycle."""
  cost: BicycleWalkPreferencesCostInput
  """
  "
  How long it takes to hop on or off a bicycle when switching to walking the bicycle
  or when getting on the bicycle again. However, this is not applied when getting
  on a rented bicycle for the first time or off the bicycle when returning the bicycle.
  """
  mountDismountTime: Duration
}


"""Costs related to walking a bicycle."""
input BicycleWalkPreferencesCostInput {
  """
  A static cost that is added each time hopping on or off a bicycle to start or end
  bicycle walking. However, this cost is not applied when getting on a rented bicycle
  for the first time or when getting off the bicycle when returning the bicycle.
  """
  mountDismountCost: Cost
  """
  A cost multiplier of bicycle walking travel time. The multiplier is for how bad
  walking the bicycle is compared to being in transit for equal lengths of time.
  """
  reluctance: Reluctance
}


"""
Preferences related to walking (excluding walking a bicycle or a scooter).
"""
input WalkPreferencesInput {
  """
  Maximum walk speed on flat ground. Note, this speed is higher than the average speed
  will be in itineraries as this is the maximum speed but there are
  factors that slow down walking such as crossings, intersections and elevation changes.
  """
  speed: Speed
  """
  A multiplier for how bad walking is compared to being in transit for equal lengths of time.
  """
  reluctance: Reluctance
  """
  Factor for how much the walk safety is considered in routing. Value should be between 0 and 1.
  If the value is set to be 0, safety is ignored.
  """
  safetyFactor: Ratio
  """The cost of boarding a vehicle while walking."""
  boardCost: Cost
}


"""
A fractional multiplier between 0 and 1, for example 0.25. 0 means 0% and 1 means 100%.
"""
scalar Ratio


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


"""
Wheelchair related preferences. Note, this is the only from of accessibilty available
currently and is sometimes is used for other accessibility needs as well.
"""
input WheelchairPreferencesInput {
  """
  Is wheelchair accessibility considered in routing. Note, this does not guarantee
  that the itineraries are wheelchair accessible as there can be data issues.
  """
  enabled: Boolean
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
"""
Exactly one of the fields on an input object must be set and non-null while all others are omitted.
"""
directive @oneOf on INPUT_OBJECT
`;class HE{constructor(n){Ie(this,"mapping");this.mapping=n}getFor(n){return this.mapping.get(n.name)}}var or;(function(i){i.UNION="union",i.ARGUMENT="argument",i.FIELD="field"})(or||(or={}));function jE(i){const n=new Map;return zE(i,t=>{gn(t)&&QE(t,s=>{const a=wo(s.type);co(n,a).references.push({kind:or.FIELD,parent:t,by:s}),JE(s,u=>{const f=wo(u.type);co(n,f).references.push({kind:or.ARGUMENT,field:s,type:t,by:u})})}),Jn(t)&&t.getTypes().forEach(s=>{co(n,s).references.push({kind:or.UNION,by:t})})}),new HE(n)}function zE(i,n){Object.entries(i.getTypeMap()).forEach(([,t])=>{t.name.startsWith("__")||n(t)})}function QE(i,n){Object.entries(i.getFields()).forEach(([,t])=>{n(t)})}function JE(i,n){Object.entries(i.args).forEach(([,t])=>{n(t)})}function co(i,n){let t=i.get(n.name);return t||(t={references:[]},i.set(n.name,t)),t}function wo(i){return mn(i)||ci(i)?wo(i.ofType):i}const ln=uD(),Eo=Po(Lo.DIRECTIVES,[]);var tf;const KE=Ps((tf=ln.getQueryType())==null?void 0:tf.getFields());var rf;const XE=Ps((rf=ln.getMutationType())==null?void 0:rf.getFields());var sf;const ZE=Ps((sf=ln.getSubscriptionType())==null?void 0:sf.getFields()),Wo=kt.keyBy(sh(),i=>i.name.toLocaleLowerCase()),eD=kt.mapValues(Wo,i=>{const n=Eo.find(t=>(t==null?void 0:t.name)===i.name||(t==null?void 0:t.name)==="*");return n?n.args.some(t=>t==="*")?i.args:n.args.map(t=>i.args.find(s=>s.name===t)).filter(t=>!!t):[]}),nD=Ps(ln.getTypeMap()),tD=jE(ln);function Ps(i){return kt.mapKeys(i||{},(n,t)=>t.toLocaleLowerCase())}function iD(){return kt.size(ln.getTypeMap())<=10}function rD(){return[fo("Queries",ln.getQueryType()),fo("Mutations",ln.getMutationType()),fo("Subscriptions",ln.getSubscriptionType()),cD(),oD()].filter(i=>!!i)}function fo(i,n){return aD(i,sD(n))}function sD(i){return kt.sortBy((i==null?void 0:i.getFields())||{},n=>n.name)}function aD(i,n){return n.length===0?null:{type:"menu",title:i,children:n.map(t=>({type:"page",title:t.name,section:i,deprecated:!!t.deprecationReason,href:dr.joinUrlPaths(As,i.toLocaleLowerCase(),t.name)}))}}function oD(){return iD()?null:{type:"menu",title:"Types",children:kt.sortBy(kt.map(ln.getTypeMap()),n=>n.name).filter(n=>!n.name.startsWith("__")).map(n=>({type:"page",title:n.name,section:"Types",href:dr.joinUrlPaths(As,"types",n.name)}))}}function _D(){return!!ln.getQueryType()}function AD(i){return KE[i.toLocaleLowerCase()]}function SD(){return!!ln.getMutationType()}function kD(i){return XE[i.toLocaleLowerCase()]}function FD(){return!!ln.getSubscriptionType()}function ND(i){return ZE[i.toLocaleLowerCase()]}function CD(i){return nD[i.toLocaleLowerCase()]}function lD(i){return Wo[i.toLocaleLowerCase()]}function xD(i){return lD(i.name)!==void 0}function OD(){return kt.size(Wo)>0}function RD(i){return eD[i.name.toLocaleLowerCase()]||[]}function LD(i){if(i)return tD.getFor(i)}function PD(i){return kt.flatMap(i.getFields(),n=>({field:n,possibleDescriptions:rh(n,i)}))}function rh(i,n){return i?i.description?[{description:i.description,from:n}]:gn(n)?n.getInterfaces().flatMap(t=>rh(t.getFields()[i.name],t)):[]:[]}function sh(){return Eo.some(i=>(i==null?void 0:i.name)==="*")?ln.getDirectives().filter(i=>!["include","skip","deprecated","specifiedBy"].includes(i.name)):Eo.filter(i=>!!(i!=null&&i.name)).map(({name:i})=>i?ln.getDirective(i):void 0).filter(i=>!!i)}function uD(){return ef.trim().length===0?WE(JSON.parse(JSON.stringify({__schema:{types:[]}}))):qE(ef)}function cD(){const i=sh();return i.length===0?null:{type:"menu",title:"Directives",children:i.map(n=>({type:"page",title:n.name,href:dr.joinUrlPaths(As,"directives",n.name),section:"Directives"}))}}const BD=Po(Lo.APP_TITLE,"GraphQL Documentation"),ah=hD().concat(rD());pD(ah);const fD=Object.freeze(ah),UD=dD();function hD(){return Po(Lo.PAGES,mD()).filter(n=>!!n).map(n=>lh([],n))}function dD(){const i=gD();if(i)return i.href;throw new Error("No custom pages or query available to use as the root application URL. You need to provide at least one custom page or your schema should contain at least one query/mutation/subscription.")}function pD(i){function n(s,a){for(const l of s){if(l.type==="page"){a(l);continue}l.type==="menu"&&n(l.children,a)}}let t;n(i,s=>{t&&(t.next={title:s.title,section:s.section,href:s.href},s.previous={title:t.title,section:t.section,href:t.href}),t=s})}function gD(){return oh(()=>!0)}function MD(i){return oh(n=>n.href.toLocaleLowerCase()===i.toLocaleLowerCase())}function oh(i){function n(t){for(const s of t){if(s.type==="page"&&i(s))return s;if(s.type==="menu"){const a=n(s.children);if(a)return a}}return null}return n(fD)}function lh(i,n){if(typeof n.content=="string")return{type:"page",title:n.title,content:n.content,href:dr.joinUrlPaths(As,...i,nf(n.title))};const t=i.concat([nf(n.title)]);return{type:"menu",title:n.title,children:n.content.map(s=>({...lh(t,s),section:n.title}))}}function nf(i){return dr.generatePathSegment(i,new wf)}function mD(){return[{title:"Introduction",content:[{title:"Welcome",content:`
        # Welcome 🎉

        [Congratulations!](https://www.youtube.com/watch?v=1Bix44C1EzY) You have successfully created your first Magidoc website.

        Now that you are up and running, you can customize this website even further by providing some configuration inside your [magidoc.mjs ⚙️](https://magidoc.js.org/cli/magidoc-configuration). 
        If you wish to remove or modify this page, have a look at the *customPages* configuration.
        `.split(`
`).map(i=>i.trim()).join(`
`)}]}]}export{_D as A,wf as B,AD as C,FD as D,ND as E,Kw as F,mn as G,ci as H,Mf as I,Uf as J,CD as K,LD as L,PD as M,xD as N,D as O,ID as P,Ss as Q,or as R,uf as S,ED as T,nr as U,Kb as V,kt as _,wD as a,Po as b,jn as c,gn as d,lt as e,on as f,of as g,jt as h,Kn as i,Jn as j,Xn as k,iD as l,ye as m,BD as n,DD as o,fD as p,UD as q,MD as r,ln as s,Lo as t,dr as u,OD as v,lD as w,RD as x,SD as y,kD as z};
