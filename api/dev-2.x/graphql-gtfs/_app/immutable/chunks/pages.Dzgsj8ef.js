var S0=Object.defineProperty;var Uc=i=>{throw TypeError(i)};var k0=(i,n,t)=>n in i?S0(i,n,{enumerable:!0,configurable:!0,writable:!0,value:t}):i[n]=t;var Ee=(i,n,t)=>k0(i,typeof n!="symbol"?n+"":n,t),F0=(i,n,t)=>n.has(i)||Uc("Cannot "+t);var $c=(i,n,t)=>n.has(i)?Uc("Cannot add the same private member more than once"):n instanceof WeakSet?n.add(i):n.set(i,t);var lr=(i,n,t)=>(F0(i,n,"access private method"),t);import{s as Fe,q as sn,l as Te,d as J,I as Mc,t as Uo,j as $o,o as Mo,n as Ze,a2 as br,E as nt,v as Nf,e as Oe,f as Re,g as Ye,ad as Fs,F as tt,G as it,H as rt,k as yn,m as St,b as Go,c as Vo,ah as N0,ai as C0,ak as Gc,K as O0}from"./scheduler.Cv5B47c7.js";import{S as Pe,i as Be,t as ee,g as kt,b as ae,e as Ft,c as Ht,a as mi,m as zt,d as Qt}from"./index.vZbmHwdQ.js";import{b as R0}from"./control.Dk547Exa.js";function ct(i){return(i==null?void 0:i.length)!==void 0?i:Array.from(i)}function Cf(i,n){const t={},a={},s={$$scope:1};let o=i.length;for(;o--;){const u=i[o],f=n[o];if(f){for(const h in u)h in f||(a[h]=1);for(const h in f)s[h]||(t[h]=f[h],s[h]=1);i[o]=f}else for(const h in u)s[h]=1}for(const u in a)u in t||(t[u]=void 0);return t}function RI(i){return typeof i=="object"&&i!==null?i:{}}function Vc(i){let n,t,a;var s=i[1][i[0].type];function o(u,f){return{props:{token:u[0],options:u[2],renderers:u[1],$$slots:{default:[P0]},$$scope:{ctx:u}}}}return s&&(n=Mc(s,o(i))),{c(){n&&Ht(n.$$.fragment),t=sn()},l(u){n&&mi(n.$$.fragment,u),t=sn()},m(u,f){n&&zt(n,u,f),Te(u,t,f),a=!0},p(u,f){if(f&3&&s!==(s=u[1][u[0].type])){if(n){kt();const h=n;ae(h.$$.fragment,1,0,()=>{Qt(h,1)}),Ft()}s?(n=Mc(s,o(u)),Ht(n.$$.fragment),ee(n.$$.fragment,1),zt(n,t.parentNode,t)):n=null}else if(s){const h={};f&1&&(h.token=u[0]),f&4&&(h.options=u[2]),f&2&&(h.renderers=u[1]),f&15&&(h.$$scope={dirty:f,ctx:u}),n.$set(h)}},i(u){a||(n&&ee(n.$$.fragment,u),a=!0)},o(u){n&&ae(n.$$.fragment,u),a=!1},d(u){u&&J(t),n&&Qt(n,u)}}}function x0(i){let n=i[0].raw+"",t;return{c(){t=Uo(n)},l(a){t=$o(a,n)},m(a,s){Te(a,t,s)},p(a,s){s&1&&n!==(n=a[0].raw+"")&&Mo(t,n)},i:Ze,o:Ze,d(a){a&&J(t)}}}function L0(i){let n,t;return n=new Ms({props:{tokens:i[0].tokens,renderers:i[1],options:i[2]}}),{c(){Ht(n.$$.fragment)},l(a){mi(n.$$.fragment,a)},m(a,s){zt(n,a,s),t=!0},p(a,s){const o={};s&1&&(o.tokens=a[0].tokens),s&2&&(o.renderers=a[1]),s&4&&(o.options=a[2]),n.$set(o)},i(a){t||(ee(n.$$.fragment,a),t=!0)},o(a){ae(n.$$.fragment,a),t=!1},d(a){Qt(n,a)}}}function P0(i){let n,t,a,s;const o=[L0,x0],u=[];function f(h,m){return"tokens"in h[0]&&h[0].tokens?0:1}return n=f(i),t=u[n]=o[n](i),{c(){t.c(),a=sn()},l(h){t.l(h),a=sn()},m(h,m){u[n].m(h,m),Te(h,a,m),s=!0},p(h,m){let y=n;n=f(h),n===y?u[n].p(h,m):(kt(),ae(u[y],1,1,()=>{u[y]=null}),Ft(),t=u[n],t?t.p(h,m):(t=u[n]=o[n](h),t.c()),ee(t,1),t.m(a.parentNode,a))},i(h){s||(ee(t),s=!0)},o(h){ae(t),s=!1},d(h){h&&J(a),u[n].d(h)}}}function B0(i){let n,t,a=i[1][i[0].type]&&Vc(i);return{c(){a&&a.c(),n=sn()},l(s){a&&a.l(s),n=sn()},m(s,o){a&&a.m(s,o),Te(s,n,o),t=!0},p(s,[o]){s[1][s[0].type]?a?(a.p(s,o),o&3&&ee(a,1)):(a=Vc(s),a.c(),ee(a,1),a.m(n.parentNode,n)):a&&(kt(),ae(a,1,1,()=>{a=null}),Ft())},i(s){t||(ee(a),t=!0)},o(s){ae(a),t=!1},d(s){s&&J(n),a&&a.d(s)}}}function U0(i,n,t){let{token:a}=n,{renderers:s}=n,{options:o}=n;return i.$$set=u=>{"token"in u&&t(0,a=u.token),"renderers"in u&&t(1,s=u.renderers),"options"in u&&t(2,o=u.options)},[a,s,o]}class Of extends Pe{constructor(n){super(),Be(this,n,U0,B0,Fe,{token:0,renderers:1,options:2})}}function Wc(i,n,t){const a=i.slice();return a[3]=n[t],a}function Yc(i){let n,t,a=ct(i[0]),s=[];for(let u=0;u<a.length;u+=1)s[u]=qc(Wc(i,a,u));const o=u=>ae(s[u],1,1,()=>{s[u]=null});return{c(){for(let u=0;u<s.length;u+=1)s[u].c();n=sn()},l(u){for(let f=0;f<s.length;f+=1)s[f].l(u);n=sn()},m(u,f){for(let h=0;h<s.length;h+=1)s[h]&&s[h].m(u,f);Te(u,n,f),t=!0},p(u,f){if(f&7){a=ct(u[0]);let h;for(h=0;h<a.length;h+=1){const m=Wc(u,a,h);s[h]?(s[h].p(m,f),ee(s[h],1)):(s[h]=qc(m),s[h].c(),ee(s[h],1),s[h].m(n.parentNode,n))}for(kt(),h=a.length;h<s.length;h+=1)o(h);Ft()}},i(u){if(!t){for(let f=0;f<a.length;f+=1)ee(s[f]);t=!0}},o(u){s=s.filter(Boolean);for(let f=0;f<s.length;f+=1)ae(s[f]);t=!1},d(u){u&&J(n),br(s,u)}}}function qc(i){let n,t;return n=new Of({props:{token:i[3],renderers:i[1],options:i[2]}}),{c(){Ht(n.$$.fragment)},l(a){mi(n.$$.fragment,a)},m(a,s){zt(n,a,s),t=!0},p(a,s){const o={};s&1&&(o.token=a[3]),s&2&&(o.renderers=a[1]),s&4&&(o.options=a[2]),n.$set(o)},i(a){t||(ee(n.$$.fragment,a),t=!0)},o(a){ae(n.$$.fragment,a),t=!1},d(a){Qt(n,a)}}}function $0(i){let n,t,a=i[0]&&Yc(i);return{c(){a&&a.c(),n=sn()},l(s){a&&a.l(s),n=sn()},m(s,o){a&&a.m(s,o),Te(s,n,o),t=!0},p(s,[o]){s[0]?a?(a.p(s,o),o&1&&ee(a,1)):(a=Yc(s),a.c(),ee(a,1),a.m(n.parentNode,n)):a&&(kt(),ae(a,1,1,()=>{a=null}),Ft())},i(s){t||(ee(a),t=!0)},o(s){ae(a),t=!1},d(s){s&&J(n),a&&a.d(s)}}}function M0(i,n,t){let{tokens:a}=n,{renderers:s}=n,{options:o}=n;return i.$$set=u=>{"tokens"in u&&t(0,a=u.tokens),"renderers"in u&&t(1,s=u.renderers),"options"in u&&t(2,o=u.options)},[a,s,o]}class Ms extends Pe{constructor(n){super(),Be(this,n,M0,$0,Fe,{tokens:0,renderers:1,options:2})}}function Tr(...i){return`/${i.flatMap(n=>n.split("/")).filter(n=>!!n).join("/")}`}function wr(i){return i.startsWith("/")||i.startsWith("#")}function Rf(i,n){return n.slug(i).replace(/--+/g,"-")}function bo(i){let n,t;const a=i[5].default,s=nt(a,i,i[4],null);let o=[{id:i[1]}],u={};for(let f=0;f<o.length;f+=1)u=Nf(u,o[f]);return{c(){n=Oe(`h${i[0].depth}`),s&&s.c(),this.h()},l(f){n=Re(f,(`h${i[0].depth}`||"null").toUpperCase(),{id:!0});var h=Ye(n);s&&s.l(h),h.forEach(J),this.h()},h(){Fs(`h${i[0].depth}`)(n,u)},m(f,h){Te(f,n,h),s&&s.m(n,null),t=!0},p(f,h){s&&s.p&&(!t||h&16)&&tt(s,a,f,f[4],t?rt(a,f[4],h,null):it(f[4]),null),Fs(`h${f[0].depth}`)(n,u=Cf(o,[(!t||h&2)&&{id:f[1]}]))},i(f){t||(ee(s,f),t=!0)},o(f){ae(s,f),t=!1},d(f){f&&J(n),s&&s.d(f)}}}function G0(i){let n=`h${i[0].depth}`,t,a,s=`h${i[0].depth}`&&bo(i);return{c(){s&&s.c(),t=sn()},l(o){s&&s.l(o),t=sn()},m(o,u){s&&s.m(o,u),Te(o,t,u),a=!0},p(o,[u]){`h${o[0].depth}`?n?Fe(n,`h${o[0].depth}`)?(s.d(1),s=bo(o),n=`h${o[0].depth}`,s.c(),s.m(t.parentNode,t)):s.p(o,u):(s=bo(o),n=`h${o[0].depth}`,s.c(),s.m(t.parentNode,t)):n&&(s.d(1),s=null,n=`h${o[0].depth}`)},i(o){a||(ee(s,o),a=!0)},o(o){ae(s,o),a=!1},d(o){o&&J(t),s&&s.d(o)}}}function V0(i,n,t){let{$$slots:a={},$$scope:s}=n,{token:o}=n,{options:u}=n;const f=void 0;let h;return i.$$set=m=>{"token"in m&&t(0,o=m.token),"options"in m&&t(2,u=m.options),"$$scope"in m&&t(4,s=m.$$scope)},i.$$.update=()=>{i.$$.dirty&5&&t(1,h=Rf(o.text,u.slugger))},[o,h,u,f,s,a]}class W0 extends Pe{constructor(n){super(),Be(this,n,V0,G0,Fe,{token:0,options:2,renderers:3})}get renderers(){return this.$$.ctx[3]}}function Y0(i){let n,t;const a=i[4].default,s=nt(a,i,i[3],null);return{c(){n=Oe("blockquote"),s&&s.c()},l(o){n=Re(o,"BLOCKQUOTE",{});var u=Ye(n);s&&s.l(u),u.forEach(J)},m(o,u){Te(o,n,u),s&&s.m(n,null),t=!0},p(o,[u]){s&&s.p&&(!t||u&8)&&tt(s,a,o,o[3],t?rt(a,o[3],u,null):it(o[3]),null)},i(o){t||(ee(s,o),t=!0)},o(o){ae(s,o),t=!1},d(o){o&&J(n),s&&s.d(o)}}}function q0(i,n,t){let{$$slots:a={},$$scope:s}=n;const o=void 0,u=void 0,f=void 0;return i.$$set=h=>{"$$scope"in h&&t(3,s=h.$$scope)},[o,u,f,s,a]}class j0 extends Pe{constructor(n){super(),Be(this,n,q0,Y0,Fe,{token:0,options:1,renderers:2})}get token(){return this.$$.ctx[0]}get options(){return this.$$.ctx[1]}get renderers(){return this.$$.ctx[2]}}function jc(i,n,t){const a=i.slice();return a[4]=n[t],a}function Hc(i){let n,t;return n=new Of({props:{token:{...i[4]},options:i[1],renderers:i[2]}}),{c(){Ht(n.$$.fragment)},l(a){mi(n.$$.fragment,a)},m(a,s){zt(n,a,s),t=!0},p(a,s){const o={};s&1&&(o.token={...a[4]}),s&2&&(o.options=a[1]),s&4&&(o.renderers=a[2]),n.$set(o)},i(a){t||(ee(n.$$.fragment,a),t=!0)},o(a){ae(n.$$.fragment,a),t=!1},d(a){Qt(n,a)}}}function To(i){let n,t,a,s=ct(i[0].items),o=[];for(let m=0;m<s.length;m+=1)o[m]=Hc(jc(i,s,m));const u=m=>ae(o[m],1,1,()=>{o[m]=null});let f=[{start:t=i[0].start||1}],h={};for(let m=0;m<f.length;m+=1)h=Nf(h,f[m]);return{c(){n=Oe(i[3]);for(let m=0;m<o.length;m+=1)o[m].c();this.h()},l(m){n=Re(m,(i[3]||"null").toUpperCase(),{start:!0});var y=Ye(n);for(let b=0;b<o.length;b+=1)o[b].l(y);y.forEach(J),this.h()},h(){Fs(i[3])(n,h)},m(m,y){Te(m,n,y);for(let b=0;b<o.length;b+=1)o[b]&&o[b].m(n,null);a=!0},p(m,y){if(y&7){s=ct(m[0].items);let b;for(b=0;b<s.length;b+=1){const k=jc(m,s,b);o[b]?(o[b].p(k,y),ee(o[b],1)):(o[b]=Hc(k),o[b].c(),ee(o[b],1),o[b].m(n,null))}for(kt(),b=s.length;b<o.length;b+=1)u(b);Ft()}Fs(m[3])(n,h=Cf(f,[(!a||y&1&&t!==(t=m[0].start||1))&&{start:t}]))},i(m){if(!a){for(let y=0;y<s.length;y+=1)ee(o[y]);a=!0}},o(m){o=o.filter(Boolean);for(let y=0;y<o.length;y+=1)ae(o[y]);a=!1},d(m){m&&J(n),br(o,m)}}}function H0(i){let n=i[3],t,a=i[3]&&To(i);return{c(){a&&a.c(),t=sn()},l(s){a&&a.l(s),t=sn()},m(s,o){a&&a.m(s,o),Te(s,t,o)},p(s,[o]){s[3]?n?Fe(n,s[3])?(a.d(1),a=To(s),n=s[3],a.c(),a.m(t.parentNode,t)):a.p(s,o):(a=To(s),n=s[3],a.c(),a.m(t.parentNode,t)):n&&(a.d(1),a=null,n=s[3])},i:Ze,o(s){ae(a,s)},d(s){s&&J(t),a&&a.d(s)}}}function z0(i,n,t){let{token:a}=n,{options:s}=n,{renderers:o}=n,u;return i.$$set=f=>{"token"in f&&t(0,a=f.token),"options"in f&&t(1,s=f.options),"renderers"in f&&t(2,o=f.renderers)},i.$$.update=()=>{i.$$.dirty&1&&t(3,u=a.ordered?"ol":"ul")},[a,s,o,u]}class Q0 extends Pe{constructor(n){super(),Be(this,n,z0,H0,Fe,{token:0,options:1,renderers:2})}}function J0(i){let n,t;const a=i[4].default,s=nt(a,i,i[3],null);return{c(){n=Oe("li"),s&&s.c()},l(o){n=Re(o,"LI",{});var u=Ye(n);s&&s.l(u),u.forEach(J)},m(o,u){Te(o,n,u),s&&s.m(n,null),t=!0},p(o,[u]){s&&s.p&&(!t||u&8)&&tt(s,a,o,o[3],t?rt(a,o[3],u,null):it(o[3]),null)},i(o){t||(ee(s,o),t=!0)},o(o){ae(s,o),t=!1},d(o){o&&J(n),s&&s.d(o)}}}function K0(i,n,t){let{$$slots:a={},$$scope:s}=n;const o=void 0,u=void 0,f=void 0;return i.$$set=h=>{"$$scope"in h&&t(3,s=h.$$scope)},[o,u,f,s,a]}class X0 extends Pe{constructor(n){super(),Be(this,n,K0,J0,Fe,{token:0,options:1,renderers:2})}get token(){return this.$$.ctx[0]}get options(){return this.$$.ctx[1]}get renderers(){return this.$$.ctx[2]}}function Z0(i){let n;return{c(){n=Oe("br")},l(t){n=Re(t,"BR",{})},m(t,a){Te(t,n,a)},p:Ze,i:Ze,o:Ze,d(t){t&&J(n)}}}function eT(i,n,t){return[void 0,void 0,void 0]}class nT extends Pe{constructor(n){super(),Be(this,n,eT,Z0,Fe,{token:0,options:1,renderers:2})}get token(){return this.$$.ctx[0]}get options(){return this.$$.ctx[1]}get renderers(){return this.$$.ctx[2]}}function tT(i){let n,t,a=i[0].text+"",s,o;return{c(){n=Oe("pre"),t=Oe("code"),s=Uo(a),this.h()},l(u){n=Re(u,"PRE",{});var f=Ye(n);t=Re(f,"CODE",{class:!0});var h=Ye(t);s=$o(h,a),h.forEach(J),f.forEach(J),this.h()},h(){yn(t,"class",o=`lang-${i[0].lang}`)},m(u,f){Te(u,n,f),St(n,t),St(t,s)},p(u,[f]){f&1&&a!==(a=u[0].text+"")&&Mo(s,a),f&1&&o!==(o=`lang-${u[0].lang}`)&&yn(t,"class",o)},i:Ze,o:Ze,d(u){u&&J(n)}}}function iT(i,n,t){let{token:a}=n;const s=void 0,o=void 0;return i.$$set=u=>{"token"in u&&t(0,a=u.token)},[a,s,o]}class rT extends Pe{constructor(n){super(),Be(this,n,iT,tT,Fe,{token:0,options:1,renderers:2})}get options(){return this.$$.ctx[1]}get renderers(){return this.$$.ctx[2]}}function sT(i){let n,t=i[0].raw.slice(1,i[0].raw.length-1)+"",a;return{c(){n=Oe("code"),a=Uo(t)},l(s){n=Re(s,"CODE",{});var o=Ye(n);a=$o(o,t),o.forEach(J)},m(s,o){Te(s,n,o),St(n,a)},p(s,[o]){o&1&&t!==(t=s[0].raw.slice(1,s[0].raw.length-1)+"")&&Mo(a,t)},i:Ze,o:Ze,d(s){s&&J(n)}}}function aT(i,n,t){let{token:a}=n;const s=void 0,o=void 0;return i.$$set=u=>{"token"in u&&t(0,a=u.token)},[a,s,o]}class oT extends Pe{constructor(n){super(),Be(this,n,aT,sT,Fe,{token:0,options:1,renderers:2})}get options(){return this.$$.ctx[1]}get renderers(){return this.$$.ctx[2]}}function zc(i,n,t){const a=i.slice();return a[3]=n[t],a}function Qc(i,n,t){const a=i.slice();return a[6]=n[t],a}function Jc(i,n,t){const a=i.slice();return a[9]=n[t],a}function Kc(i){let n,t,a,s;return t=new Ms({props:{tokens:i[9].tokens,options:i[1],renderers:i[2]}}),{c(){n=Oe("th"),Ht(t.$$.fragment),a=Go(),this.h()},l(o){n=Re(o,"TH",{scope:!0});var u=Ye(n);mi(t.$$.fragment,u),a=Vo(u),u.forEach(J),this.h()},h(){yn(n,"scope","col")},m(o,u){Te(o,n,u),zt(t,n,null),St(n,a),s=!0},p(o,u){const f={};u&1&&(f.tokens=o[9].tokens),u&2&&(f.options=o[1]),u&4&&(f.renderers=o[2]),t.$set(f)},i(o){s||(ee(t.$$.fragment,o),s=!0)},o(o){ae(t.$$.fragment,o),s=!1},d(o){o&&J(n),Qt(t)}}}function Xc(i){let n,t,a;return t=new Ms({props:{tokens:i[6].tokens,options:i[1],renderers:i[2]}}),{c(){n=Oe("td"),Ht(t.$$.fragment)},l(s){n=Re(s,"TD",{});var o=Ye(n);mi(t.$$.fragment,o),o.forEach(J)},m(s,o){Te(s,n,o),zt(t,n,null),a=!0},p(s,o){const u={};o&1&&(u.tokens=s[6].tokens),o&2&&(u.options=s[1]),o&4&&(u.renderers=s[2]),t.$set(u)},i(s){a||(ee(t.$$.fragment,s),a=!0)},o(s){ae(t.$$.fragment,s),a=!1},d(s){s&&J(n),Qt(t)}}}function Zc(i){let n,t,a,s=ct(i[3]),o=[];for(let f=0;f<s.length;f+=1)o[f]=Xc(Qc(i,s,f));const u=f=>ae(o[f],1,1,()=>{o[f]=null});return{c(){n=Oe("tr");for(let f=0;f<o.length;f+=1)o[f].c();t=Go()},l(f){n=Re(f,"TR",{});var h=Ye(n);for(let m=0;m<o.length;m+=1)o[m].l(h);t=Vo(h),h.forEach(J)},m(f,h){Te(f,n,h);for(let m=0;m<o.length;m+=1)o[m]&&o[m].m(n,null);St(n,t),a=!0},p(f,h){if(h&7){s=ct(f[3]);let m;for(m=0;m<s.length;m+=1){const y=Qc(f,s,m);o[m]?(o[m].p(y,h),ee(o[m],1)):(o[m]=Xc(y),o[m].c(),ee(o[m],1),o[m].m(n,t))}for(kt(),m=s.length;m<o.length;m+=1)u(m);Ft()}},i(f){if(!a){for(let h=0;h<s.length;h+=1)ee(o[h]);a=!0}},o(f){o=o.filter(Boolean);for(let h=0;h<o.length;h+=1)ae(o[h]);a=!1},d(f){f&&J(n),br(o,f)}}}function lT(i){let n,t,a,s,o,u,f=ct(i[0].header),h=[];for(let _=0;_<f.length;_+=1)h[_]=Kc(Jc(i,f,_));const m=_=>ae(h[_],1,1,()=>{h[_]=null});let y=ct(i[0].rows),b=[];for(let _=0;_<y.length;_+=1)b[_]=Zc(zc(i,y,_));const k=_=>ae(b[_],1,1,()=>{b[_]=null});return{c(){n=Oe("table"),t=Oe("thead"),a=Oe("tr");for(let _=0;_<h.length;_+=1)h[_].c();s=Go(),o=Oe("tbody");for(let _=0;_<b.length;_+=1)b[_].c()},l(_){n=Re(_,"TABLE",{});var O=Ye(n);t=Re(O,"THEAD",{});var P=Ye(t);a=Re(P,"TR",{});var q=Ye(a);for(let Ae=0;Ae<h.length;Ae+=1)h[Ae].l(q);q.forEach(J),P.forEach(J),s=Vo(O),o=Re(O,"TBODY",{});var ce=Ye(o);for(let Ae=0;Ae<b.length;Ae+=1)b[Ae].l(ce);ce.forEach(J),O.forEach(J)},m(_,O){Te(_,n,O),St(n,t),St(t,a);for(let P=0;P<h.length;P+=1)h[P]&&h[P].m(a,null);St(n,s),St(n,o);for(let P=0;P<b.length;P+=1)b[P]&&b[P].m(o,null);u=!0},p(_,[O]){if(O&7){f=ct(_[0].header);let P;for(P=0;P<f.length;P+=1){const q=Jc(_,f,P);h[P]?(h[P].p(q,O),ee(h[P],1)):(h[P]=Kc(q),h[P].c(),ee(h[P],1),h[P].m(a,null))}for(kt(),P=f.length;P<h.length;P+=1)m(P);Ft()}if(O&7){y=ct(_[0].rows);let P;for(P=0;P<y.length;P+=1){const q=zc(_,y,P);b[P]?(b[P].p(q,O),ee(b[P],1)):(b[P]=Zc(q),b[P].c(),ee(b[P],1),b[P].m(o,null))}for(kt(),P=y.length;P<b.length;P+=1)k(P);Ft()}},i(_){if(!u){for(let O=0;O<f.length;O+=1)ee(h[O]);for(let O=0;O<y.length;O+=1)ee(b[O]);u=!0}},o(_){h=h.filter(Boolean);for(let O=0;O<h.length;O+=1)ae(h[O]);b=b.filter(Boolean);for(let O=0;O<b.length;O+=1)ae(b[O]);u=!1},d(_){_&&J(n),br(h,_),br(b,_)}}}function uT(i,n,t){let{token:a}=n,{options:s}=n,{renderers:o}=n;return i.$$set=u=>{"token"in u&&t(0,a=u.token),"options"in u&&t(1,s=u.options),"renderers"in u&&t(2,o=u.renderers)},[a,s,o]}class cT extends Pe{constructor(n){super(),Be(this,n,uT,lT,Fe,{token:0,options:1,renderers:2})}}function fT(i){let n,t=i[0].text+"",a;return{c(){n=new N0(!1),a=sn(),this.h()},l(s){n=C0(s,!1),a=sn(),this.h()},h(){n.a=a},m(s,o){n.m(t,s,o),Te(s,a,o)},p(s,[o]){o&1&&t!==(t=s[0].text+"")&&n.p(t)},i:Ze,o:Ze,d(s){s&&(J(a),n.d())}}}function hT(i,n,t){let{token:a}=n;const s=void 0,o=void 0;return i.$$set=u=>{"token"in u&&t(0,a=u.token)},[a,s,o]}class dT extends Pe{constructor(n){super(),Be(this,n,hT,fT,Fe,{token:0,options:1,renderers:2})}get options(){return this.$$.ctx[1]}get renderers(){return this.$$.ctx[2]}}function pT(i){let n,t;const a=i[4].default,s=nt(a,i,i[3],null);return{c(){n=Oe("p"),s&&s.c()},l(o){n=Re(o,"P",{});var u=Ye(n);s&&s.l(u),u.forEach(J)},m(o,u){Te(o,n,u),s&&s.m(n,null),t=!0},p(o,[u]){s&&s.p&&(!t||u&8)&&tt(s,a,o,o[3],t?rt(a,o[3],u,null):it(o[3]),null)},i(o){t||(ee(s,o),t=!0)},o(o){ae(s,o),t=!1},d(o){o&&J(n),s&&s.d(o)}}}function gT(i,n,t){let{$$slots:a={},$$scope:s}=n;const o=void 0,u=void 0,f=void 0;return i.$$set=h=>{"$$scope"in h&&t(3,s=h.$$scope)},[o,u,f,s,a]}class mT extends Pe{constructor(n){super(),Be(this,n,gT,pT,Fe,{token:0,options:1,renderers:2})}get token(){return this.$$.ctx[0]}get options(){return this.$$.ctx[1]}get renderers(){return this.$$.ctx[2]}}function yT(i){let n,t,a,s;const o=i[4].default,u=nt(o,i,i[3],null);return{c(){n=Oe("a"),u&&u.c(),this.h()},l(f){n=Re(f,"A",{href:!0,title:!0});var h=Ye(n);u&&u.l(h),h.forEach(J),this.h()},h(){yn(n,"href",t=wr(i[0].href)?Tr(i[1].baseUrl,i[0].href):i[0].href),yn(n,"title",a=i[0].title)},m(f,h){Te(f,n,h),u&&u.m(n,null),s=!0},p(f,[h]){u&&u.p&&(!s||h&8)&&tt(u,o,f,f[3],s?rt(o,f[3],h,null):it(f[3]),null),(!s||h&3&&t!==(t=wr(f[0].href)?Tr(f[1].baseUrl,f[0].href):f[0].href))&&yn(n,"href",t),(!s||h&1&&a!==(a=f[0].title))&&yn(n,"title",a)},i(f){s||(ee(u,f),s=!0)},o(f){ae(u,f),s=!1},d(f){f&&J(n),u&&u.d(f)}}}function vT(i,n,t){let{$$slots:a={},$$scope:s}=n,{token:o}=n,{options:u}=n;const f=void 0;return i.$$set=h=>{"token"in h&&t(0,o=h.token),"options"in h&&t(1,u=h.options),"$$scope"in h&&t(3,s=h.$$scope)},[o,u,f,s,a]}class bT extends Pe{constructor(n){super(),Be(this,n,vT,yT,Fe,{token:0,options:1,renderers:2})}get renderers(){return this.$$.ctx[2]}}function TT(i){let n;const t=i[4].default,a=nt(t,i,i[3],null);return{c(){a&&a.c()},l(s){a&&a.l(s)},m(s,o){a&&a.m(s,o),n=!0},p(s,[o]){a&&a.p&&(!n||o&8)&&tt(a,t,s,s[3],n?rt(t,s[3],o,null):it(s[3]),null)},i(s){n||(ee(a,s),n=!0)},o(s){ae(a,s),n=!1},d(s){a&&a.d(s)}}}function wT(i,n,t){let{$$slots:a={},$$scope:s}=n;const o=void 0,u=void 0,f=void 0;return i.$$set=h=>{"$$scope"in h&&t(3,s=h.$$scope)},[o,u,f,s,a]}class ET extends Pe{constructor(n){super(),Be(this,n,wT,TT,Fe,{token:0,options:1,renderers:2})}get token(){return this.$$.ctx[0]}get options(){return this.$$.ctx[1]}get renderers(){return this.$$.ctx[2]}}function DT(i){let n,t;const a=i[4].default,s=nt(a,i,i[3],null);return{c(){n=Oe("dfn"),s&&s.c()},l(o){n=Re(o,"DFN",{});var u=Ye(n);s&&s.l(u),u.forEach(J)},m(o,u){Te(o,n,u),s&&s.m(n,null),t=!0},p(o,[u]){s&&s.p&&(!t||u&8)&&tt(s,a,o,o[3],t?rt(a,o[3],u,null):it(o[3]),null)},i(o){t||(ee(s,o),t=!0)},o(o){ae(s,o),t=!1},d(o){o&&J(n),s&&s.d(o)}}}function IT(i,n,t){let{$$slots:a={},$$scope:s}=n;const o=void 0,u=void 0,f=void 0;return i.$$set=h=>{"$$scope"in h&&t(3,s=h.$$scope)},[o,u,f,s,a]}class _T extends Pe{constructor(n){super(),Be(this,n,IT,DT,Fe,{token:0,options:1,renderers:2})}get token(){return this.$$.ctx[0]}get options(){return this.$$.ctx[1]}get renderers(){return this.$$.ctx[2]}}function AT(i){let n,t;const a=i[4].default,s=nt(a,i,i[3],null);return{c(){n=Oe("del"),s&&s.c()},l(o){n=Re(o,"DEL",{});var u=Ye(n);s&&s.l(u),u.forEach(J)},m(o,u){Te(o,n,u),s&&s.m(n,null),t=!0},p(o,[u]){s&&s.p&&(!t||u&8)&&tt(s,a,o,o[3],t?rt(a,o[3],u,null):it(o[3]),null)},i(o){t||(ee(s,o),t=!0)},o(o){ae(s,o),t=!1},d(o){o&&J(n),s&&s.d(o)}}}function ST(i,n,t){let{$$slots:a={},$$scope:s}=n;const o=void 0,u=void 0,f=void 0;return i.$$set=h=>{"$$scope"in h&&t(3,s=h.$$scope)},[o,u,f,s,a]}class kT extends Pe{constructor(n){super(),Be(this,n,ST,AT,Fe,{token:0,options:1,renderers:2})}get token(){return this.$$.ctx[0]}get options(){return this.$$.ctx[1]}get renderers(){return this.$$.ctx[2]}}function FT(i){let n,t;const a=i[4].default,s=nt(a,i,i[3],null);return{c(){n=Oe("em"),s&&s.c()},l(o){n=Re(o,"EM",{});var u=Ye(n);s&&s.l(u),u.forEach(J)},m(o,u){Te(o,n,u),s&&s.m(n,null),t=!0},p(o,[u]){s&&s.p&&(!t||u&8)&&tt(s,a,o,o[3],t?rt(a,o[3],u,null):it(o[3]),null)},i(o){t||(ee(s,o),t=!0)},o(o){ae(s,o),t=!1},d(o){o&&J(n),s&&s.d(o)}}}function NT(i,n,t){let{$$slots:a={},$$scope:s}=n;const o=void 0,u=void 0,f=void 0;return i.$$set=h=>{"$$scope"in h&&t(3,s=h.$$scope)},[o,u,f,s,a]}class CT extends Pe{constructor(n){super(),Be(this,n,NT,FT,Fe,{token:0,options:1,renderers:2})}get token(){return this.$$.ctx[0]}get options(){return this.$$.ctx[1]}get renderers(){return this.$$.ctx[2]}}function OT(i){let n;return{c(){n=Oe("hr")},l(t){n=Re(t,"HR",{})},m(t,a){Te(t,n,a)},p:Ze,i:Ze,o:Ze,d(t){t&&J(n)}}}function RT(i,n,t){return[void 0,void 0,void 0]}class xT extends Pe{constructor(n){super(),Be(this,n,RT,OT,Fe,{token:0,options:1,renderers:2})}get token(){return this.$$.ctx[0]}get options(){return this.$$.ctx[1]}get renderers(){return this.$$.ctx[2]}}function LT(i){let n,t;const a=i[4].default,s=nt(a,i,i[3],null);return{c(){n=Oe("strong"),s&&s.c()},l(o){n=Re(o,"STRONG",{});var u=Ye(n);s&&s.l(u),u.forEach(J)},m(o,u){Te(o,n,u),s&&s.m(n,null),t=!0},p(o,[u]){s&&s.p&&(!t||u&8)&&tt(s,a,o,o[3],t?rt(a,o[3],u,null):it(o[3]),null)},i(o){t||(ee(s,o),t=!0)},o(o){ae(s,o),t=!1},d(o){o&&J(n),s&&s.d(o)}}}function PT(i,n,t){let{$$slots:a={},$$scope:s}=n;const o=void 0,u=void 0,f=void 0;return i.$$set=h=>{"$$scope"in h&&t(3,s=h.$$scope)},[o,u,f,s,a]}class BT extends Pe{constructor(n){super(),Be(this,n,PT,LT,Fe,{token:0,options:1,renderers:2})}get token(){return this.$$.ctx[0]}get options(){return this.$$.ctx[1]}get renderers(){return this.$$.ctx[2]}}function UT(i){let n,t,a,s;return{c(){n=Oe("img"),this.h()},l(o){n=Re(o,"IMG",{src:!0,title:!0,alt:!0,class:!0}),this.h()},h(){Gc(n.src,t=wr(i[0].href)?Tr(i[1].baseUrl,i[0].href):i[0].href)||yn(n,"src",t),yn(n,"title",a=i[0].title),yn(n,"alt",s=i[0].text),yn(n,"class","markdown-image svelte-z38cge")},m(o,u){Te(o,n,u)},p(o,[u]){u&3&&!Gc(n.src,t=wr(o[0].href)?Tr(o[1].baseUrl,o[0].href):o[0].href)&&yn(n,"src",t),u&1&&a!==(a=o[0].title)&&yn(n,"title",a),u&1&&s!==(s=o[0].text)&&yn(n,"alt",s)},i:Ze,o:Ze,d(o){o&&J(n)}}}function $T(i,n,t){let{token:a}=n,{options:s}=n;const o=void 0;return i.$$set=u=>{"token"in u&&t(0,a=u.token),"options"in u&&t(1,s=u.options)},[a,s,o]}class MT extends Pe{constructor(n){super(),Be(this,n,$T,UT,Fe,{token:0,options:1,renderers:2})}get renderers(){return this.$$.ctx[2]}}function GT(i){let n;const t=i[4].default,a=nt(t,i,i[3],null);return{c(){a&&a.c()},l(s){a&&a.l(s)},m(s,o){a&&a.m(s,o),n=!0},p(s,[o]){a&&a.p&&(!n||o&8)&&tt(a,t,s,s[3],n?rt(t,s[3],o,null):it(s[3]),null)},i(s){n||(ee(a,s),n=!0)},o(s){ae(a,s),n=!1},d(s){a&&a.d(s)}}}function VT(i,n,t){let{$$slots:a={},$$scope:s}=n;const o=void 0,u=void 0,f=void 0;return i.$$set=h=>{"$$scope"in h&&t(3,s=h.$$scope)},[o,u,f,s,a]}class ef extends Pe{constructor(n){super(),Be(this,n,VT,GT,Fe,{token:0,options:1,renderers:2})}get token(){return this.$$.ctx[0]}get options(){return this.$$.ctx[1]}get renderers(){return this.$$.ctx[2]}}const WT=/[\0-\x1F!-,\.\/:-@\[-\^`\{-\xA9\xAB-\xB4\xB6-\xB9\xBB-\xBF\xD7\xF7\u02C2-\u02C5\u02D2-\u02DF\u02E5-\u02EB\u02ED\u02EF-\u02FF\u0375\u0378\u0379\u037E\u0380-\u0385\u0387\u038B\u038D\u03A2\u03F6\u0482\u0530\u0557\u0558\u055A-\u055F\u0589-\u0590\u05BE\u05C0\u05C3\u05C6\u05C8-\u05CF\u05EB-\u05EE\u05F3-\u060F\u061B-\u061F\u066A-\u066D\u06D4\u06DD\u06DE\u06E9\u06FD\u06FE\u0700-\u070F\u074B\u074C\u07B2-\u07BF\u07F6-\u07F9\u07FB\u07FC\u07FE\u07FF\u082E-\u083F\u085C-\u085F\u086B-\u089F\u08B5\u08C8-\u08D2\u08E2\u0964\u0965\u0970\u0984\u098D\u098E\u0991\u0992\u09A9\u09B1\u09B3-\u09B5\u09BA\u09BB\u09C5\u09C6\u09C9\u09CA\u09CF-\u09D6\u09D8-\u09DB\u09DE\u09E4\u09E5\u09F2-\u09FB\u09FD\u09FF\u0A00\u0A04\u0A0B-\u0A0E\u0A11\u0A12\u0A29\u0A31\u0A34\u0A37\u0A3A\u0A3B\u0A3D\u0A43-\u0A46\u0A49\u0A4A\u0A4E-\u0A50\u0A52-\u0A58\u0A5D\u0A5F-\u0A65\u0A76-\u0A80\u0A84\u0A8E\u0A92\u0AA9\u0AB1\u0AB4\u0ABA\u0ABB\u0AC6\u0ACA\u0ACE\u0ACF\u0AD1-\u0ADF\u0AE4\u0AE5\u0AF0-\u0AF8\u0B00\u0B04\u0B0D\u0B0E\u0B11\u0B12\u0B29\u0B31\u0B34\u0B3A\u0B3B\u0B45\u0B46\u0B49\u0B4A\u0B4E-\u0B54\u0B58-\u0B5B\u0B5E\u0B64\u0B65\u0B70\u0B72-\u0B81\u0B84\u0B8B-\u0B8D\u0B91\u0B96-\u0B98\u0B9B\u0B9D\u0BA0-\u0BA2\u0BA5-\u0BA7\u0BAB-\u0BAD\u0BBA-\u0BBD\u0BC3-\u0BC5\u0BC9\u0BCE\u0BCF\u0BD1-\u0BD6\u0BD8-\u0BE5\u0BF0-\u0BFF\u0C0D\u0C11\u0C29\u0C3A-\u0C3C\u0C45\u0C49\u0C4E-\u0C54\u0C57\u0C5B-\u0C5F\u0C64\u0C65\u0C70-\u0C7F\u0C84\u0C8D\u0C91\u0CA9\u0CB4\u0CBA\u0CBB\u0CC5\u0CC9\u0CCE-\u0CD4\u0CD7-\u0CDD\u0CDF\u0CE4\u0CE5\u0CF0\u0CF3-\u0CFF\u0D0D\u0D11\u0D45\u0D49\u0D4F-\u0D53\u0D58-\u0D5E\u0D64\u0D65\u0D70-\u0D79\u0D80\u0D84\u0D97-\u0D99\u0DB2\u0DBC\u0DBE\u0DBF\u0DC7-\u0DC9\u0DCB-\u0DCE\u0DD5\u0DD7\u0DE0-\u0DE5\u0DF0\u0DF1\u0DF4-\u0E00\u0E3B-\u0E3F\u0E4F\u0E5A-\u0E80\u0E83\u0E85\u0E8B\u0EA4\u0EA6\u0EBE\u0EBF\u0EC5\u0EC7\u0ECE\u0ECF\u0EDA\u0EDB\u0EE0-\u0EFF\u0F01-\u0F17\u0F1A-\u0F1F\u0F2A-\u0F34\u0F36\u0F38\u0F3A-\u0F3D\u0F48\u0F6D-\u0F70\u0F85\u0F98\u0FBD-\u0FC5\u0FC7-\u0FFF\u104A-\u104F\u109E\u109F\u10C6\u10C8-\u10CC\u10CE\u10CF\u10FB\u1249\u124E\u124F\u1257\u1259\u125E\u125F\u1289\u128E\u128F\u12B1\u12B6\u12B7\u12BF\u12C1\u12C6\u12C7\u12D7\u1311\u1316\u1317\u135B\u135C\u1360-\u137F\u1390-\u139F\u13F6\u13F7\u13FE-\u1400\u166D\u166E\u1680\u169B-\u169F\u16EB-\u16ED\u16F9-\u16FF\u170D\u1715-\u171F\u1735-\u173F\u1754-\u175F\u176D\u1771\u1774-\u177F\u17D4-\u17D6\u17D8-\u17DB\u17DE\u17DF\u17EA-\u180A\u180E\u180F\u181A-\u181F\u1879-\u187F\u18AB-\u18AF\u18F6-\u18FF\u191F\u192C-\u192F\u193C-\u1945\u196E\u196F\u1975-\u197F\u19AC-\u19AF\u19CA-\u19CF\u19DA-\u19FF\u1A1C-\u1A1F\u1A5F\u1A7D\u1A7E\u1A8A-\u1A8F\u1A9A-\u1AA6\u1AA8-\u1AAF\u1AC1-\u1AFF\u1B4C-\u1B4F\u1B5A-\u1B6A\u1B74-\u1B7F\u1BF4-\u1BFF\u1C38-\u1C3F\u1C4A-\u1C4C\u1C7E\u1C7F\u1C89-\u1C8F\u1CBB\u1CBC\u1CC0-\u1CCF\u1CD3\u1CFB-\u1CFF\u1DFA\u1F16\u1F17\u1F1E\u1F1F\u1F46\u1F47\u1F4E\u1F4F\u1F58\u1F5A\u1F5C\u1F5E\u1F7E\u1F7F\u1FB5\u1FBD\u1FBF-\u1FC1\u1FC5\u1FCD-\u1FCF\u1FD4\u1FD5\u1FDC-\u1FDF\u1FED-\u1FF1\u1FF5\u1FFD-\u203E\u2041-\u2053\u2055-\u2070\u2072-\u207E\u2080-\u208F\u209D-\u20CF\u20F1-\u2101\u2103-\u2106\u2108\u2109\u2114\u2116-\u2118\u211E-\u2123\u2125\u2127\u2129\u212E\u213A\u213B\u2140-\u2144\u214A-\u214D\u214F-\u215F\u2189-\u24B5\u24EA-\u2BFF\u2C2F\u2C5F\u2CE5-\u2CEA\u2CF4-\u2CFF\u2D26\u2D28-\u2D2C\u2D2E\u2D2F\u2D68-\u2D6E\u2D70-\u2D7E\u2D97-\u2D9F\u2DA7\u2DAF\u2DB7\u2DBF\u2DC7\u2DCF\u2DD7\u2DDF\u2E00-\u2E2E\u2E30-\u3004\u3008-\u3020\u3030\u3036\u3037\u303D-\u3040\u3097\u3098\u309B\u309C\u30A0\u30FB\u3100-\u3104\u3130\u318F-\u319F\u31C0-\u31EF\u3200-\u33FF\u4DC0-\u4DFF\u9FFD-\u9FFF\uA48D-\uA4CF\uA4FE\uA4FF\uA60D-\uA60F\uA62C-\uA63F\uA673\uA67E\uA6F2-\uA716\uA720\uA721\uA789\uA78A\uA7C0\uA7C1\uA7CB-\uA7F4\uA828-\uA82B\uA82D-\uA83F\uA874-\uA87F\uA8C6-\uA8CF\uA8DA-\uA8DF\uA8F8-\uA8FA\uA8FC\uA92E\uA92F\uA954-\uA95F\uA97D-\uA97F\uA9C1-\uA9CE\uA9DA-\uA9DF\uA9FF\uAA37-\uAA3F\uAA4E\uAA4F\uAA5A-\uAA5F\uAA77-\uAA79\uAAC3-\uAADA\uAADE\uAADF\uAAF0\uAAF1\uAAF7-\uAB00\uAB07\uAB08\uAB0F\uAB10\uAB17-\uAB1F\uAB27\uAB2F\uAB5B\uAB6A-\uAB6F\uABEB\uABEE\uABEF\uABFA-\uABFF\uD7A4-\uD7AF\uD7C7-\uD7CA\uD7FC-\uD7FF\uE000-\uF8FF\uFA6E\uFA6F\uFADA-\uFAFF\uFB07-\uFB12\uFB18-\uFB1C\uFB29\uFB37\uFB3D\uFB3F\uFB42\uFB45\uFBB2-\uFBD2\uFD3E-\uFD4F\uFD90\uFD91\uFDC8-\uFDEF\uFDFC-\uFDFF\uFE10-\uFE1F\uFE30-\uFE32\uFE35-\uFE4C\uFE50-\uFE6F\uFE75\uFEFD-\uFF0F\uFF1A-\uFF20\uFF3B-\uFF3E\uFF40\uFF5B-\uFF65\uFFBF-\uFFC1\uFFC8\uFFC9\uFFD0\uFFD1\uFFD8\uFFD9\uFFDD-\uFFFF]|\uD800[\uDC0C\uDC27\uDC3B\uDC3E\uDC4E\uDC4F\uDC5E-\uDC7F\uDCFB-\uDD3F\uDD75-\uDDFC\uDDFE-\uDE7F\uDE9D-\uDE9F\uDED1-\uDEDF\uDEE1-\uDEFF\uDF20-\uDF2C\uDF4B-\uDF4F\uDF7B-\uDF7F\uDF9E\uDF9F\uDFC4-\uDFC7\uDFD0\uDFD6-\uDFFF]|\uD801[\uDC9E\uDC9F\uDCAA-\uDCAF\uDCD4-\uDCD7\uDCFC-\uDCFF\uDD28-\uDD2F\uDD64-\uDDFF\uDF37-\uDF3F\uDF56-\uDF5F\uDF68-\uDFFF]|\uD802[\uDC06\uDC07\uDC09\uDC36\uDC39-\uDC3B\uDC3D\uDC3E\uDC56-\uDC5F\uDC77-\uDC7F\uDC9F-\uDCDF\uDCF3\uDCF6-\uDCFF\uDD16-\uDD1F\uDD3A-\uDD7F\uDDB8-\uDDBD\uDDC0-\uDDFF\uDE04\uDE07-\uDE0B\uDE14\uDE18\uDE36\uDE37\uDE3B-\uDE3E\uDE40-\uDE5F\uDE7D-\uDE7F\uDE9D-\uDEBF\uDEC8\uDEE7-\uDEFF\uDF36-\uDF3F\uDF56-\uDF5F\uDF73-\uDF7F\uDF92-\uDFFF]|\uD803[\uDC49-\uDC7F\uDCB3-\uDCBF\uDCF3-\uDCFF\uDD28-\uDD2F\uDD3A-\uDE7F\uDEAA\uDEAD-\uDEAF\uDEB2-\uDEFF\uDF1D-\uDF26\uDF28-\uDF2F\uDF51-\uDFAF\uDFC5-\uDFDF\uDFF7-\uDFFF]|\uD804[\uDC47-\uDC65\uDC70-\uDC7E\uDCBB-\uDCCF\uDCE9-\uDCEF\uDCFA-\uDCFF\uDD35\uDD40-\uDD43\uDD48-\uDD4F\uDD74\uDD75\uDD77-\uDD7F\uDDC5-\uDDC8\uDDCD\uDDDB\uDDDD-\uDDFF\uDE12\uDE38-\uDE3D\uDE3F-\uDE7F\uDE87\uDE89\uDE8E\uDE9E\uDEA9-\uDEAF\uDEEB-\uDEEF\uDEFA-\uDEFF\uDF04\uDF0D\uDF0E\uDF11\uDF12\uDF29\uDF31\uDF34\uDF3A\uDF45\uDF46\uDF49\uDF4A\uDF4E\uDF4F\uDF51-\uDF56\uDF58-\uDF5C\uDF64\uDF65\uDF6D-\uDF6F\uDF75-\uDFFF]|\uD805[\uDC4B-\uDC4F\uDC5A-\uDC5D\uDC62-\uDC7F\uDCC6\uDCC8-\uDCCF\uDCDA-\uDD7F\uDDB6\uDDB7\uDDC1-\uDDD7\uDDDE-\uDDFF\uDE41-\uDE43\uDE45-\uDE4F\uDE5A-\uDE7F\uDEB9-\uDEBF\uDECA-\uDEFF\uDF1B\uDF1C\uDF2C-\uDF2F\uDF3A-\uDFFF]|\uD806[\uDC3B-\uDC9F\uDCEA-\uDCFE\uDD07\uDD08\uDD0A\uDD0B\uDD14\uDD17\uDD36\uDD39\uDD3A\uDD44-\uDD4F\uDD5A-\uDD9F\uDDA8\uDDA9\uDDD8\uDDD9\uDDE2\uDDE5-\uDDFF\uDE3F-\uDE46\uDE48-\uDE4F\uDE9A-\uDE9C\uDE9E-\uDEBF\uDEF9-\uDFFF]|\uD807[\uDC09\uDC37\uDC41-\uDC4F\uDC5A-\uDC71\uDC90\uDC91\uDCA8\uDCB7-\uDCFF\uDD07\uDD0A\uDD37-\uDD39\uDD3B\uDD3E\uDD48-\uDD4F\uDD5A-\uDD5F\uDD66\uDD69\uDD8F\uDD92\uDD99-\uDD9F\uDDAA-\uDEDF\uDEF7-\uDFAF\uDFB1-\uDFFF]|\uD808[\uDF9A-\uDFFF]|\uD809[\uDC6F-\uDC7F\uDD44-\uDFFF]|[\uD80A\uD80B\uD80E-\uD810\uD812-\uD819\uD824-\uD82B\uD82D\uD82E\uD830-\uD833\uD837\uD839\uD83D\uD83F\uD87B-\uD87D\uD87F\uD885-\uDB3F\uDB41-\uDBFF][\uDC00-\uDFFF]|\uD80D[\uDC2F-\uDFFF]|\uD811[\uDE47-\uDFFF]|\uD81A[\uDE39-\uDE3F\uDE5F\uDE6A-\uDECF\uDEEE\uDEEF\uDEF5-\uDEFF\uDF37-\uDF3F\uDF44-\uDF4F\uDF5A-\uDF62\uDF78-\uDF7C\uDF90-\uDFFF]|\uD81B[\uDC00-\uDE3F\uDE80-\uDEFF\uDF4B-\uDF4E\uDF88-\uDF8E\uDFA0-\uDFDF\uDFE2\uDFE5-\uDFEF\uDFF2-\uDFFF]|\uD821[\uDFF8-\uDFFF]|\uD823[\uDCD6-\uDCFF\uDD09-\uDFFF]|\uD82C[\uDD1F-\uDD4F\uDD53-\uDD63\uDD68-\uDD6F\uDEFC-\uDFFF]|\uD82F[\uDC6B-\uDC6F\uDC7D-\uDC7F\uDC89-\uDC8F\uDC9A-\uDC9C\uDC9F-\uDFFF]|\uD834[\uDC00-\uDD64\uDD6A-\uDD6C\uDD73-\uDD7A\uDD83\uDD84\uDD8C-\uDDA9\uDDAE-\uDE41\uDE45-\uDFFF]|\uD835[\uDC55\uDC9D\uDCA0\uDCA1\uDCA3\uDCA4\uDCA7\uDCA8\uDCAD\uDCBA\uDCBC\uDCC4\uDD06\uDD0B\uDD0C\uDD15\uDD1D\uDD3A\uDD3F\uDD45\uDD47-\uDD49\uDD51\uDEA6\uDEA7\uDEC1\uDEDB\uDEFB\uDF15\uDF35\uDF4F\uDF6F\uDF89\uDFA9\uDFC3\uDFCC\uDFCD]|\uD836[\uDC00-\uDDFF\uDE37-\uDE3A\uDE6D-\uDE74\uDE76-\uDE83\uDE85-\uDE9A\uDEA0\uDEB0-\uDFFF]|\uD838[\uDC07\uDC19\uDC1A\uDC22\uDC25\uDC2B-\uDCFF\uDD2D-\uDD2F\uDD3E\uDD3F\uDD4A-\uDD4D\uDD4F-\uDEBF\uDEFA-\uDFFF]|\uD83A[\uDCC5-\uDCCF\uDCD7-\uDCFF\uDD4C-\uDD4F\uDD5A-\uDFFF]|\uD83B[\uDC00-\uDDFF\uDE04\uDE20\uDE23\uDE25\uDE26\uDE28\uDE33\uDE38\uDE3A\uDE3C-\uDE41\uDE43-\uDE46\uDE48\uDE4A\uDE4C\uDE50\uDE53\uDE55\uDE56\uDE58\uDE5A\uDE5C\uDE5E\uDE60\uDE63\uDE65\uDE66\uDE6B\uDE73\uDE78\uDE7D\uDE7F\uDE8A\uDE9C-\uDEA0\uDEA4\uDEAA\uDEBC-\uDFFF]|\uD83C[\uDC00-\uDD2F\uDD4A-\uDD4F\uDD6A-\uDD6F\uDD8A-\uDFFF]|\uD83E[\uDC00-\uDFEF\uDFFA-\uDFFF]|\uD869[\uDEDE-\uDEFF]|\uD86D[\uDF35-\uDF3F]|\uD86E[\uDC1E\uDC1F]|\uD873[\uDEA2-\uDEAF]|\uD87A[\uDFE1-\uDFFF]|\uD87E[\uDE1E-\uDFFF]|\uD884[\uDF4B-\uDFFF]|\uDB40[\uDC00-\uDCFF\uDDF0-\uDFFF]/g,YT=Object.hasOwnProperty;class xf{constructor(){this.occurrences,this.reset()}slug(n,t){const a=this;let s=qT(n,t===!0);const o=s;for(;YT.call(a.occurrences,s);)a.occurrences[o]++,s=o+"-"+a.occurrences[o];return a.occurrences[s]=0,s}reset(){this.occurrences=Object.create(null)}}function qT(i,n){return typeof i!="string"?"":(n||(i=i.toLowerCase()),i.replace(WT,"").replace(/ /g,"-"))}function Wo(){return{async:!1,breaks:!1,extensions:null,gfm:!0,hooks:null,pedantic:!1,renderer:null,silent:!1,tokenizer:null,walkTokens:null}}let yi=Wo();function Lf(i){yi=i}const Pf=/[&<>"']/,jT=new RegExp(Pf.source,"g"),Bf=/[<>"']|&(?!(#\d{1,7}|#[Xx][a-fA-F0-9]{1,6}|\w+);)/,HT=new RegExp(Bf.source,"g"),zT={"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;","'":"&#39;"},nf=i=>zT[i];function Sn(i,n){if(n){if(Pf.test(i))return i.replace(jT,nf)}else if(Bf.test(i))return i.replace(HT,nf);return i}const QT=/&(#(?:\d+)|(?:#x[0-9A-Fa-f]+)|(?:\w+));?/ig;function JT(i){return i.replace(QT,(n,t)=>(t=t.toLowerCase(),t==="colon"?":":t.charAt(0)==="#"?t.charAt(1)==="x"?String.fromCharCode(parseInt(t.substring(2),16)):String.fromCharCode(+t.substring(1)):""))}const KT=/(^|[^\[])\^/g;function be(i,n){let t=typeof i=="string"?i:i.source;n=n||"";const a={replace:(s,o)=>{let u=typeof o=="string"?o:o.source;return u=u.replace(KT,"$1"),t=t.replace(s,u),a},getRegex:()=>new RegExp(t,n)};return a}function tf(i){try{i=encodeURI(i).replace(/%25/g,"%")}catch{return null}return i}const gr={exec:()=>null};function rf(i,n){const t=i.replace(/\|/g,(o,u,f)=>{let h=!1,m=u;for(;--m>=0&&f[m]==="\\";)h=!h;return h?"|":" |"}),a=t.split(/ \|/);let s=0;if(a[0].trim()||a.shift(),a.length>0&&!a[a.length-1].trim()&&a.pop(),n)if(a.length>n)a.splice(n);else for(;a.length<n;)a.push("");for(;s<a.length;s++)a[s]=a[s].trim().replace(/\\\|/g,"|");return a}function ur(i,n,t){const a=i.length;if(a===0)return"";let s=0;for(;s<a;){const o=i.charAt(a-s-1);if(o===n&&!t)s++;else if(o!==n&&t)s++;else break}return i.slice(0,a-s)}function XT(i,n){if(i.indexOf(n[1])===-1)return-1;let t=0;for(let a=0;a<i.length;a++)if(i[a]==="\\")a++;else if(i[a]===n[0])t++;else if(i[a]===n[1]&&(t--,t<0))return a;return-1}function sf(i,n,t,a){const s=n.href,o=n.title?Sn(n.title):null,u=i[1].replace(/\\([\[\]])/g,"$1");if(i[0].charAt(0)!=="!"){a.state.inLink=!0;const f={type:"link",raw:t,href:s,title:o,text:u,tokens:a.inlineTokens(u)};return a.state.inLink=!1,f}return{type:"image",raw:t,href:s,title:o,text:Sn(u)}}function ZT(i,n){const t=i.match(/^(\s+)(?:```)/);if(t===null)return n;const a=t[1];return n.split(`
`).map(s=>{const o=s.match(/^\s+/);if(o===null)return s;const[u]=o;return u.length>=a.length?s.slice(a.length):s}).join(`
`)}class Ns{constructor(n){Ee(this,"options");Ee(this,"rules");Ee(this,"lexer");this.options=n||yi}space(n){const t=this.rules.block.newline.exec(n);if(t&&t[0].length>0)return{type:"space",raw:t[0]}}code(n){const t=this.rules.block.code.exec(n);if(t){const a=t[0].replace(/^ {1,4}/gm,"");return{type:"code",raw:t[0],codeBlockStyle:"indented",text:this.options.pedantic?a:ur(a,`
`)}}}fences(n){const t=this.rules.block.fences.exec(n);if(t){const a=t[0],s=ZT(a,t[3]||"");return{type:"code",raw:a,lang:t[2]?t[2].trim().replace(this.rules.inline.anyPunctuation,"$1"):t[2],text:s}}}heading(n){const t=this.rules.block.heading.exec(n);if(t){let a=t[2].trim();if(/#$/.test(a)){const s=ur(a,"#");(this.options.pedantic||!s||/ $/.test(s))&&(a=s.trim())}return{type:"heading",raw:t[0],depth:t[1].length,text:a,tokens:this.lexer.inline(a)}}}hr(n){const t=this.rules.block.hr.exec(n);if(t)return{type:"hr",raw:ur(t[0],`
`)}}blockquote(n){const t=this.rules.block.blockquote.exec(n);if(t){let a=ur(t[0],`
`).split(`
`),s="",o="";const u=[];for(;a.length>0;){let f=!1;const h=[];let m;for(m=0;m<a.length;m++)if(/^ {0,3}>/.test(a[m]))h.push(a[m]),f=!0;else if(!f)h.push(a[m]);else break;a=a.slice(m);const y=h.join(`
`),b=y.replace(/\n {0,3}((?:=+|-+) *)(?=\n|$)/g,`
    $1`).replace(/^ {0,3}>[ \t]?/gm,"");s=s?`${s}
${y}`:y,o=o?`${o}
${b}`:b;const k=this.lexer.state.top;if(this.lexer.state.top=!0,this.lexer.blockTokens(b,u,!0),this.lexer.state.top=k,a.length===0)break;const _=u[u.length-1];if((_==null?void 0:_.type)==="code")break;if((_==null?void 0:_.type)==="blockquote"){const O=_,P=O.raw+`
`+a.join(`
`),q=this.blockquote(P);u[u.length-1]=q,s=s.substring(0,s.length-O.raw.length)+q.raw,o=o.substring(0,o.length-O.text.length)+q.text;break}else if((_==null?void 0:_.type)==="list"){const O=_,P=O.raw+`
`+a.join(`
`),q=this.list(P);u[u.length-1]=q,s=s.substring(0,s.length-_.raw.length)+q.raw,o=o.substring(0,o.length-O.raw.length)+q.raw,a=P.substring(u[u.length-1].raw.length).split(`
`);continue}}return{type:"blockquote",raw:s,tokens:u,text:o}}}list(n){let t=this.rules.block.list.exec(n);if(t){let a=t[1].trim();const s=a.length>1,o={type:"list",raw:"",ordered:s,start:s?+a.slice(0,-1):"",loose:!1,items:[]};a=s?`\\d{1,9}\\${a.slice(-1)}`:`\\${a}`,this.options.pedantic&&(a=s?a:"[*+-]");const u=new RegExp(`^( {0,3}${a})((?:[	 ][^\\n]*)?(?:\\n|$))`);let f="",h="",m=!1;for(;n;){let y=!1;if(!(t=u.exec(n))||this.rules.block.hr.test(n))break;f=t[0],n=n.substring(f.length);let b=t[2].split(`
`,1)[0].replace(/^\t+/,ce=>" ".repeat(3*ce.length)),k=n.split(`
`,1)[0],_=0;this.options.pedantic?(_=2,h=b.trimStart()):(_=t[2].search(/[^ ]/),_=_>4?1:_,h=b.slice(_),_+=t[1].length);let O=!1;if(!b&&/^ *$/.test(k)&&(f+=k+`
`,n=n.substring(k.length+1),y=!0),!y){const ce=new RegExp(`^ {0,${Math.min(3,_-1)}}(?:[*+-]|\\d{1,9}[.)])((?:[ 	][^\\n]*)?(?:\\n|$))`),Ae=new RegExp(`^ {0,${Math.min(3,_-1)}}((?:- *){3,}|(?:_ *){3,}|(?:\\* *){3,})(?:\\n+|$)`),me=new RegExp(`^ {0,${Math.min(3,_-1)}}(?:\`\`\`|~~~)`),Ne=new RegExp(`^ {0,${Math.min(3,_-1)}}#`);for(;n;){const xe=n.split(`
`,1)[0];if(k=xe,this.options.pedantic&&(k=k.replace(/^ {1,4}(?=( {4})*[^ ])/g,"  ")),me.test(k)||Ne.test(k)||ce.test(k)||Ae.test(n))break;if(k.search(/[^ ]/)>=_||!k.trim())h+=`
`+k.slice(_);else{if(O||b.search(/[^ ]/)>=4||me.test(b)||Ne.test(b)||Ae.test(b))break;h+=`
`+k}!O&&!k.trim()&&(O=!0),f+=xe+`
`,n=n.substring(xe.length+1),b=k.slice(_)}}o.loose||(m?o.loose=!0:/\n *\n *$/.test(f)&&(m=!0));let P=null,q;this.options.gfm&&(P=/^\[[ xX]\] /.exec(h),P&&(q=P[0]!=="[ ] ",h=h.replace(/^\[[ xX]\] +/,""))),o.items.push({type:"list_item",raw:f,task:!!P,checked:q,loose:!1,text:h,tokens:[]}),o.raw+=f}o.items[o.items.length-1].raw=f.trimEnd(),o.items[o.items.length-1].text=h.trimEnd(),o.raw=o.raw.trimEnd();for(let y=0;y<o.items.length;y++)if(this.lexer.state.top=!1,o.items[y].tokens=this.lexer.blockTokens(o.items[y].text,[]),!o.loose){const b=o.items[y].tokens.filter(_=>_.type==="space"),k=b.length>0&&b.some(_=>/\n.*\n/.test(_.raw));o.loose=k}if(o.loose)for(let y=0;y<o.items.length;y++)o.items[y].loose=!0;return o}}html(n){const t=this.rules.block.html.exec(n);if(t)return{type:"html",block:!0,raw:t[0],pre:t[1]==="pre"||t[1]==="script"||t[1]==="style",text:t[0]}}def(n){const t=this.rules.block.def.exec(n);if(t){const a=t[1].toLowerCase().replace(/\s+/g," "),s=t[2]?t[2].replace(/^<(.*)>$/,"$1").replace(this.rules.inline.anyPunctuation,"$1"):"",o=t[3]?t[3].substring(1,t[3].length-1).replace(this.rules.inline.anyPunctuation,"$1"):t[3];return{type:"def",tag:a,raw:t[0],href:s,title:o}}}table(n){const t=this.rules.block.table.exec(n);if(!t||!/[:|]/.test(t[2]))return;const a=rf(t[1]),s=t[2].replace(/^\||\| *$/g,"").split("|"),o=t[3]&&t[3].trim()?t[3].replace(/\n[ \t]*$/,"").split(`
`):[],u={type:"table",raw:t[0],header:[],align:[],rows:[]};if(a.length===s.length){for(const f of s)/^ *-+: *$/.test(f)?u.align.push("right"):/^ *:-+: *$/.test(f)?u.align.push("center"):/^ *:-+ *$/.test(f)?u.align.push("left"):u.align.push(null);for(let f=0;f<a.length;f++)u.header.push({text:a[f],tokens:this.lexer.inline(a[f]),header:!0,align:u.align[f]});for(const f of o)u.rows.push(rf(f,u.header.length).map((h,m)=>({text:h,tokens:this.lexer.inline(h),header:!1,align:u.align[m]})));return u}}lheading(n){const t=this.rules.block.lheading.exec(n);if(t)return{type:"heading",raw:t[0],depth:t[2].charAt(0)==="="?1:2,text:t[1],tokens:this.lexer.inline(t[1])}}paragraph(n){const t=this.rules.block.paragraph.exec(n);if(t){const a=t[1].charAt(t[1].length-1)===`
`?t[1].slice(0,-1):t[1];return{type:"paragraph",raw:t[0],text:a,tokens:this.lexer.inline(a)}}}text(n){const t=this.rules.block.text.exec(n);if(t)return{type:"text",raw:t[0],text:t[0],tokens:this.lexer.inline(t[0])}}escape(n){const t=this.rules.inline.escape.exec(n);if(t)return{type:"escape",raw:t[0],text:Sn(t[1])}}tag(n){const t=this.rules.inline.tag.exec(n);if(t)return!this.lexer.state.inLink&&/^<a /i.test(t[0])?this.lexer.state.inLink=!0:this.lexer.state.inLink&&/^<\/a>/i.test(t[0])&&(this.lexer.state.inLink=!1),!this.lexer.state.inRawBlock&&/^<(pre|code|kbd|script)(\s|>)/i.test(t[0])?this.lexer.state.inRawBlock=!0:this.lexer.state.inRawBlock&&/^<\/(pre|code|kbd|script)(\s|>)/i.test(t[0])&&(this.lexer.state.inRawBlock=!1),{type:"html",raw:t[0],inLink:this.lexer.state.inLink,inRawBlock:this.lexer.state.inRawBlock,block:!1,text:t[0]}}link(n){const t=this.rules.inline.link.exec(n);if(t){const a=t[2].trim();if(!this.options.pedantic&&/^</.test(a)){if(!/>$/.test(a))return;const u=ur(a.slice(0,-1),"\\");if((a.length-u.length)%2===0)return}else{const u=XT(t[2],"()");if(u>-1){const h=(t[0].indexOf("!")===0?5:4)+t[1].length+u;t[2]=t[2].substring(0,u),t[0]=t[0].substring(0,h).trim(),t[3]=""}}let s=t[2],o="";if(this.options.pedantic){const u=/^([^'"]*[^\s])\s+(['"])(.*)\2/.exec(s);u&&(s=u[1],o=u[3])}else o=t[3]?t[3].slice(1,-1):"";return s=s.trim(),/^</.test(s)&&(this.options.pedantic&&!/>$/.test(a)?s=s.slice(1):s=s.slice(1,-1)),sf(t,{href:s&&s.replace(this.rules.inline.anyPunctuation,"$1"),title:o&&o.replace(this.rules.inline.anyPunctuation,"$1")},t[0],this.lexer)}}reflink(n,t){let a;if((a=this.rules.inline.reflink.exec(n))||(a=this.rules.inline.nolink.exec(n))){const s=(a[2]||a[1]).replace(/\s+/g," "),o=t[s.toLowerCase()];if(!o){const u=a[0].charAt(0);return{type:"text",raw:u,text:u}}return sf(a,o,a[0],this.lexer)}}emStrong(n,t,a=""){let s=this.rules.inline.emStrongLDelim.exec(n);if(!s||s[3]&&a.match(/[\p{L}\p{N}]/u))return;if(!(s[1]||s[2]||"")||!a||this.rules.inline.punctuation.exec(a)){const u=[...s[0]].length-1;let f,h,m=u,y=0;const b=s[0][0]==="*"?this.rules.inline.emStrongRDelimAst:this.rules.inline.emStrongRDelimUnd;for(b.lastIndex=0,t=t.slice(-1*n.length+u);(s=b.exec(t))!=null;){if(f=s[1]||s[2]||s[3]||s[4]||s[5]||s[6],!f)continue;if(h=[...f].length,s[3]||s[4]){m+=h;continue}else if((s[5]||s[6])&&u%3&&!((u+h)%3)){y+=h;continue}if(m-=h,m>0)continue;h=Math.min(h,h+m+y);const k=[...s[0]][0].length,_=n.slice(0,u+s.index+k+h);if(Math.min(u,h)%2){const P=_.slice(1,-1);return{type:"em",raw:_,text:P,tokens:this.lexer.inlineTokens(P)}}const O=_.slice(2,-2);return{type:"strong",raw:_,text:O,tokens:this.lexer.inlineTokens(O)}}}}codespan(n){const t=this.rules.inline.code.exec(n);if(t){let a=t[2].replace(/\n/g," ");const s=/[^ ]/.test(a),o=/^ /.test(a)&&/ $/.test(a);return s&&o&&(a=a.substring(1,a.length-1)),a=Sn(a,!0),{type:"codespan",raw:t[0],text:a}}}br(n){const t=this.rules.inline.br.exec(n);if(t)return{type:"br",raw:t[0]}}del(n){const t=this.rules.inline.del.exec(n);if(t)return{type:"del",raw:t[0],text:t[2],tokens:this.lexer.inlineTokens(t[2])}}autolink(n){const t=this.rules.inline.autolink.exec(n);if(t){let a,s;return t[2]==="@"?(a=Sn(t[1]),s="mailto:"+a):(a=Sn(t[1]),s=a),{type:"link",raw:t[0],text:a,href:s,tokens:[{type:"text",raw:a,text:a}]}}}url(n){var a;let t;if(t=this.rules.inline.url.exec(n)){let s,o;if(t[2]==="@")s=Sn(t[0]),o="mailto:"+s;else{let u;do u=t[0],t[0]=((a=this.rules.inline._backpedal.exec(t[0]))==null?void 0:a[0])??"";while(u!==t[0]);s=Sn(t[0]),t[1]==="www."?o="http://"+t[0]:o=t[0]}return{type:"link",raw:t[0],text:s,href:o,tokens:[{type:"text",raw:s,text:s}]}}}inlineText(n){const t=this.rules.inline.text.exec(n);if(t){let a;return this.lexer.state.inRawBlock?a=t[0]:a=Sn(t[0]),{type:"text",raw:t[0],text:a}}}}const ew=/^(?: *(?:\n|$))+/,nw=/^( {4}[^\n]+(?:\n(?: *(?:\n|$))*)?)+/,tw=/^ {0,3}(`{3,}(?=[^`\n]*(?:\n|$))|~{3,})([^\n]*)(?:\n|$)(?:|([\s\S]*?)(?:\n|$))(?: {0,3}\1[~`]* *(?=\n|$)|$)/,_r=/^ {0,3}((?:-[\t ]*){3,}|(?:_[ \t]*){3,}|(?:\*[ \t]*){3,})(?:\n+|$)/,iw=/^ {0,3}(#{1,6})(?=\s|$)(.*)(?:\n+|$)/,Uf=/(?:[*+-]|\d{1,9}[.)])/,$f=be(/^(?!bull |blockCode|fences|blockquote|heading|html)((?:.|\n(?!\s*?\n|bull |blockCode|fences|blockquote|heading|html))+?)\n {0,3}(=+|-+) *(?:\n+|$)/).replace(/bull/g,Uf).replace(/blockCode/g,/ {4}/).replace(/fences/g,/ {0,3}(?:`{3,}|~{3,})/).replace(/blockquote/g,/ {0,3}>/).replace(/heading/g,/ {0,3}#{1,6}/).replace(/html/g,/ {0,3}<[^\n>]+>\n/).getRegex(),Yo=/^([^\n]+(?:\n(?!hr|heading|lheading|blockquote|fences|list|html|table| +\n)[^\n]+)*)/,rw=/^[^\n]+/,qo=/(?!\s*\])(?:\\.|[^\[\]\\])+/,sw=be(/^ {0,3}\[(label)\]: *(?:\n *)?([^<\s][^\s]*|<.*?>)(?:(?: +(?:\n *)?| *\n *)(title))? *(?:\n+|$)/).replace("label",qo).replace("title",/(?:"(?:\\"?|[^"\\])*"|'[^'\n]*(?:\n[^'\n]+)*\n?'|\([^()]*\))/).getRegex(),aw=be(/^( {0,3}bull)([ \t][^\n]+?)?(?:\n|$)/).replace(/bull/g,Uf).getRegex(),Gs="address|article|aside|base|basefont|blockquote|body|caption|center|col|colgroup|dd|details|dialog|dir|div|dl|dt|fieldset|figcaption|figure|footer|form|frame|frameset|h[1-6]|head|header|hr|html|iframe|legend|li|link|main|menu|menuitem|meta|nav|noframes|ol|optgroup|option|p|param|search|section|summary|table|tbody|td|tfoot|th|thead|title|tr|track|ul",jo=/<!--(?:-?>|[\s\S]*?(?:-->|$))/,ow=be("^ {0,3}(?:<(script|pre|style|textarea)[\\s>][\\s\\S]*?(?:</\\1>[^\\n]*\\n+|$)|comment[^\\n]*(\\n+|$)|<\\?[\\s\\S]*?(?:\\?>\\n*|$)|<![A-Z][\\s\\S]*?(?:>\\n*|$)|<!\\[CDATA\\[[\\s\\S]*?(?:\\]\\]>\\n*|$)|</?(tag)(?: +|\\n|/?>)[\\s\\S]*?(?:(?:\\n *)+\\n|$)|<(?!script|pre|style|textarea)([a-z][\\w-]*)(?:attribute)*? */?>(?=[ \\t]*(?:\\n|$))[\\s\\S]*?(?:(?:\\n *)+\\n|$)|</(?!script|pre|style|textarea)[a-z][\\w-]*\\s*>(?=[ \\t]*(?:\\n|$))[\\s\\S]*?(?:(?:\\n *)+\\n|$))","i").replace("comment",jo).replace("tag",Gs).replace("attribute",/ +[a-zA-Z:_][\w.:-]*(?: *= *"[^"\n]*"| *= *'[^'\n]*'| *= *[^\s"'=<>`]+)?/).getRegex(),Mf=be(Yo).replace("hr",_r).replace("heading"," {0,3}#{1,6}(?:\\s|$)").replace("|lheading","").replace("|table","").replace("blockquote"," {0,3}>").replace("fences"," {0,3}(?:`{3,}(?=[^`\\n]*\\n)|~{3,})[^\\n]*\\n").replace("list"," {0,3}(?:[*+-]|1[.)]) ").replace("html","</?(?:tag)(?: +|\\n|/?>)|<(?:script|pre|style|textarea|!--)").replace("tag",Gs).getRegex(),lw=be(/^( {0,3}> ?(paragraph|[^\n]*)(?:\n|$))+/).replace("paragraph",Mf).getRegex(),Ho={blockquote:lw,code:nw,def:sw,fences:tw,heading:iw,hr:_r,html:ow,lheading:$f,list:aw,newline:ew,paragraph:Mf,table:gr,text:rw},af=be("^ *([^\\n ].*)\\n {0,3}((?:\\| *)?:?-+:? *(?:\\| *:?-+:? *)*(?:\\| *)?)(?:\\n((?:(?! *\\n|hr|heading|blockquote|code|fences|list|html).*(?:\\n|$))*)\\n*|$)").replace("hr",_r).replace("heading"," {0,3}#{1,6}(?:\\s|$)").replace("blockquote"," {0,3}>").replace("code"," {4}[^\\n]").replace("fences"," {0,3}(?:`{3,}(?=[^`\\n]*\\n)|~{3,})[^\\n]*\\n").replace("list"," {0,3}(?:[*+-]|1[.)]) ").replace("html","</?(?:tag)(?: +|\\n|/?>)|<(?:script|pre|style|textarea|!--)").replace("tag",Gs).getRegex(),uw={...Ho,table:af,paragraph:be(Yo).replace("hr",_r).replace("heading"," {0,3}#{1,6}(?:\\s|$)").replace("|lheading","").replace("table",af).replace("blockquote"," {0,3}>").replace("fences"," {0,3}(?:`{3,}(?=[^`\\n]*\\n)|~{3,})[^\\n]*\\n").replace("list"," {0,3}(?:[*+-]|1[.)]) ").replace("html","</?(?:tag)(?: +|\\n|/?>)|<(?:script|pre|style|textarea|!--)").replace("tag",Gs).getRegex()},cw={...Ho,html:be(`^ *(?:comment *(?:\\n|\\s*$)|<(tag)[\\s\\S]+?</\\1> *(?:\\n{2,}|\\s*$)|<tag(?:"[^"]*"|'[^']*'|\\s[^'"/>\\s]*)*?/?> *(?:\\n{2,}|\\s*$))`).replace("comment",jo).replace(/tag/g,"(?!(?:a|em|strong|small|s|cite|q|dfn|abbr|data|time|code|var|samp|kbd|sub|sup|i|b|u|mark|ruby|rt|rp|bdi|bdo|span|br|wbr|ins|del|img)\\b)\\w+(?!:|[^\\w\\s@]*@)\\b").getRegex(),def:/^ *\[([^\]]+)\]: *<?([^\s>]+)>?(?: +(["(][^\n]+[")]))? *(?:\n+|$)/,heading:/^(#{1,6})(.*)(?:\n+|$)/,fences:gr,lheading:/^(.+?)\n {0,3}(=+|-+) *(?:\n+|$)/,paragraph:be(Yo).replace("hr",_r).replace("heading",` *#{1,6} *[^
]`).replace("lheading",$f).replace("|table","").replace("blockquote"," {0,3}>").replace("|fences","").replace("|list","").replace("|html","").replace("|tag","").getRegex()},Gf=/^\\([!"#$%&'()*+,\-./:;<=>?@\[\]\\^_`{|}~])/,fw=/^(`+)([^`]|[^`][\s\S]*?[^`])\1(?!`)/,Vf=/^( {2,}|\\)\n(?!\s*$)/,hw=/^(`+|[^`])(?:(?= {2,}\n)|[\s\S]*?(?:(?=[\\<!\[`*_]|\b_|$)|[^ ](?= {2,}\n)))/,Ar="\\p{P}\\p{S}",dw=be(/^((?![*_])[\spunctuation])/,"u").replace(/punctuation/g,Ar).getRegex(),pw=/\[[^[\]]*?\]\([^\(\)]*?\)|`[^`]*?`|<[^<>]*?>/g,gw=be(/^(?:\*+(?:((?!\*)[punct])|[^\s*]))|^_+(?:((?!_)[punct])|([^\s_]))/,"u").replace(/punct/g,Ar).getRegex(),mw=be("^[^_*]*?__[^_*]*?\\*[^_*]*?(?=__)|[^*]+(?=[^*])|(?!\\*)[punct](\\*+)(?=[\\s]|$)|[^punct\\s](\\*+)(?!\\*)(?=[punct\\s]|$)|(?!\\*)[punct\\s](\\*+)(?=[^punct\\s])|[\\s](\\*+)(?!\\*)(?=[punct])|(?!\\*)[punct](\\*+)(?!\\*)(?=[punct])|[^punct\\s](\\*+)(?=[^punct\\s])","gu").replace(/punct/g,Ar).getRegex(),yw=be("^[^_*]*?\\*\\*[^_*]*?_[^_*]*?(?=\\*\\*)|[^_]+(?=[^_])|(?!_)[punct](_+)(?=[\\s]|$)|[^punct\\s](_+)(?!_)(?=[punct\\s]|$)|(?!_)[punct\\s](_+)(?=[^punct\\s])|[\\s](_+)(?!_)(?=[punct])|(?!_)[punct](_+)(?!_)(?=[punct])","gu").replace(/punct/g,Ar).getRegex(),vw=be(/\\([punct])/,"gu").replace(/punct/g,Ar).getRegex(),bw=be(/^<(scheme:[^\s\x00-\x1f<>]*|email)>/).replace("scheme",/[a-zA-Z][a-zA-Z0-9+.-]{1,31}/).replace("email",/[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+(@)[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?(?:\.[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?)+(?![-_])/).getRegex(),Tw=be(jo).replace("(?:-->|$)","-->").getRegex(),ww=be("^comment|^</[a-zA-Z][\\w:-]*\\s*>|^<[a-zA-Z][\\w-]*(?:attribute)*?\\s*/?>|^<\\?[\\s\\S]*?\\?>|^<![a-zA-Z]+\\s[\\s\\S]*?>|^<!\\[CDATA\\[[\\s\\S]*?\\]\\]>").replace("comment",Tw).replace("attribute",/\s+[a-zA-Z:_][\w.:-]*(?:\s*=\s*"[^"]*"|\s*=\s*'[^']*'|\s*=\s*[^\s"'=<>`]+)?/).getRegex(),Cs=/(?:\[(?:\\.|[^\[\]\\])*\]|\\.|`[^`]*`|[^\[\]\\`])*?/,Ew=be(/^!?\[(label)\]\(\s*(href)(?:\s+(title))?\s*\)/).replace("label",Cs).replace("href",/<(?:\\.|[^\n<>\\])+>|[^\s\x00-\x1f]*/).replace("title",/"(?:\\"?|[^"\\])*"|'(?:\\'?|[^'\\])*'|\((?:\\\)?|[^)\\])*\)/).getRegex(),Wf=be(/^!?\[(label)\]\[(ref)\]/).replace("label",Cs).replace("ref",qo).getRegex(),Yf=be(/^!?\[(ref)\](?:\[\])?/).replace("ref",qo).getRegex(),Dw=be("reflink|nolink(?!\\()","g").replace("reflink",Wf).replace("nolink",Yf).getRegex(),zo={_backpedal:gr,anyPunctuation:vw,autolink:bw,blockSkip:pw,br:Vf,code:fw,del:gr,emStrongLDelim:gw,emStrongRDelimAst:mw,emStrongRDelimUnd:yw,escape:Gf,link:Ew,nolink:Yf,punctuation:dw,reflink:Wf,reflinkSearch:Dw,tag:ww,text:hw,url:gr},Iw={...zo,link:be(/^!?\[(label)\]\((.*?)\)/).replace("label",Cs).getRegex(),reflink:be(/^!?\[(label)\]\s*\[([^\]]*)\]/).replace("label",Cs).getRegex()},So={...zo,escape:be(Gf).replace("])","~|])").getRegex(),url:be(/^((?:ftp|https?):\/\/|www\.)(?:[a-zA-Z0-9\-]+\.?)+[^\s<]*|^email/,"i").replace("email",/[A-Za-z0-9._+-]+(@)[a-zA-Z0-9-_]+(?:\.[a-zA-Z0-9-_]*[a-zA-Z0-9])+(?![-_])/).getRegex(),_backpedal:/(?:[^?!.,:;*_'"~()&]+|\([^)]*\)|&(?![a-zA-Z0-9]+;$)|[?!.,:;*_'"~)]+(?!$))+/,del:/^(~~?)(?=[^\s~])([\s\S]*?[^\s~])\1(?=[^~]|$)/,text:/^([`~]+|[^`~])(?:(?= {2,}\n)|(?=[a-zA-Z0-9.!#$%&'*+\/=?_`{\|}~-]+@)|[\s\S]*?(?:(?=[\\<!\[`*~_]|\b_|https?:\/\/|ftp:\/\/|www\.|$)|[^ ](?= {2,}\n)|[^a-zA-Z0-9.!#$%&'*+\/=?_`{\|}~-](?=[a-zA-Z0-9.!#$%&'*+\/=?_`{\|}~-]+@)))/},_w={...So,br:be(Vf).replace("{2,}","*").getRegex(),text:be(So.text).replace("\\b_","\\b_| {2,}\\n").replace(/\{2,\}/g,"*").getRegex()},ws={normal:Ho,gfm:uw,pedantic:cw},cr={normal:zo,gfm:So,breaks:_w,pedantic:Iw};class Kn{constructor(n){Ee(this,"tokens");Ee(this,"options");Ee(this,"state");Ee(this,"tokenizer");Ee(this,"inlineQueue");this.tokens=[],this.tokens.links=Object.create(null),this.options=n||yi,this.options.tokenizer=this.options.tokenizer||new Ns,this.tokenizer=this.options.tokenizer,this.tokenizer.options=this.options,this.tokenizer.lexer=this,this.inlineQueue=[],this.state={inLink:!1,inRawBlock:!1,top:!0};const t={block:ws.normal,inline:cr.normal};this.options.pedantic?(t.block=ws.pedantic,t.inline=cr.pedantic):this.options.gfm&&(t.block=ws.gfm,this.options.breaks?t.inline=cr.breaks:t.inline=cr.gfm),this.tokenizer.rules=t}static get rules(){return{block:ws,inline:cr}}static lex(n,t){return new Kn(t).lex(n)}static lexInline(n,t){return new Kn(t).inlineTokens(n)}lex(n){n=n.replace(/\r\n|\r/g,`
`),this.blockTokens(n,this.tokens);for(let t=0;t<this.inlineQueue.length;t++){const a=this.inlineQueue[t];this.inlineTokens(a.src,a.tokens)}return this.inlineQueue=[],this.tokens}blockTokens(n,t=[],a=!1){this.options.pedantic?n=n.replace(/\t/g,"    ").replace(/^ +$/gm,""):n=n.replace(/^( *)(\t+)/gm,(f,h,m)=>h+"    ".repeat(m.length));let s,o,u;for(;n;)if(!(this.options.extensions&&this.options.extensions.block&&this.options.extensions.block.some(f=>(s=f.call({lexer:this},n,t))?(n=n.substring(s.raw.length),t.push(s),!0):!1))){if(s=this.tokenizer.space(n)){n=n.substring(s.raw.length),s.raw.length===1&&t.length>0?t[t.length-1].raw+=`
`:t.push(s);continue}if(s=this.tokenizer.code(n)){n=n.substring(s.raw.length),o=t[t.length-1],o&&(o.type==="paragraph"||o.type==="text")?(o.raw+=`
`+s.raw,o.text+=`
`+s.text,this.inlineQueue[this.inlineQueue.length-1].src=o.text):t.push(s);continue}if(s=this.tokenizer.fences(n)){n=n.substring(s.raw.length),t.push(s);continue}if(s=this.tokenizer.heading(n)){n=n.substring(s.raw.length),t.push(s);continue}if(s=this.tokenizer.hr(n)){n=n.substring(s.raw.length),t.push(s);continue}if(s=this.tokenizer.blockquote(n)){n=n.substring(s.raw.length),t.push(s);continue}if(s=this.tokenizer.list(n)){n=n.substring(s.raw.length),t.push(s);continue}if(s=this.tokenizer.html(n)){n=n.substring(s.raw.length),t.push(s);continue}if(s=this.tokenizer.def(n)){n=n.substring(s.raw.length),o=t[t.length-1],o&&(o.type==="paragraph"||o.type==="text")?(o.raw+=`
`+s.raw,o.text+=`
`+s.raw,this.inlineQueue[this.inlineQueue.length-1].src=o.text):this.tokens.links[s.tag]||(this.tokens.links[s.tag]={href:s.href,title:s.title});continue}if(s=this.tokenizer.table(n)){n=n.substring(s.raw.length),t.push(s);continue}if(s=this.tokenizer.lheading(n)){n=n.substring(s.raw.length),t.push(s);continue}if(u=n,this.options.extensions&&this.options.extensions.startBlock){let f=1/0;const h=n.slice(1);let m;this.options.extensions.startBlock.forEach(y=>{m=y.call({lexer:this},h),typeof m=="number"&&m>=0&&(f=Math.min(f,m))}),f<1/0&&f>=0&&(u=n.substring(0,f+1))}if(this.state.top&&(s=this.tokenizer.paragraph(u))){o=t[t.length-1],a&&(o==null?void 0:o.type)==="paragraph"?(o.raw+=`
`+s.raw,o.text+=`
`+s.text,this.inlineQueue.pop(),this.inlineQueue[this.inlineQueue.length-1].src=o.text):t.push(s),a=u.length!==n.length,n=n.substring(s.raw.length);continue}if(s=this.tokenizer.text(n)){n=n.substring(s.raw.length),o=t[t.length-1],o&&o.type==="text"?(o.raw+=`
`+s.raw,o.text+=`
`+s.text,this.inlineQueue.pop(),this.inlineQueue[this.inlineQueue.length-1].src=o.text):t.push(s);continue}if(n){const f="Infinite loop on byte: "+n.charCodeAt(0);if(this.options.silent){console.error(f);break}else throw new Error(f)}}return this.state.top=!0,t}inline(n,t=[]){return this.inlineQueue.push({src:n,tokens:t}),t}inlineTokens(n,t=[]){let a,s,o,u=n,f,h,m;if(this.tokens.links){const y=Object.keys(this.tokens.links);if(y.length>0)for(;(f=this.tokenizer.rules.inline.reflinkSearch.exec(u))!=null;)y.includes(f[0].slice(f[0].lastIndexOf("[")+1,-1))&&(u=u.slice(0,f.index)+"["+"a".repeat(f[0].length-2)+"]"+u.slice(this.tokenizer.rules.inline.reflinkSearch.lastIndex))}for(;(f=this.tokenizer.rules.inline.blockSkip.exec(u))!=null;)u=u.slice(0,f.index)+"["+"a".repeat(f[0].length-2)+"]"+u.slice(this.tokenizer.rules.inline.blockSkip.lastIndex);for(;(f=this.tokenizer.rules.inline.anyPunctuation.exec(u))!=null;)u=u.slice(0,f.index)+"++"+u.slice(this.tokenizer.rules.inline.anyPunctuation.lastIndex);for(;n;)if(h||(m=""),h=!1,!(this.options.extensions&&this.options.extensions.inline&&this.options.extensions.inline.some(y=>(a=y.call({lexer:this},n,t))?(n=n.substring(a.raw.length),t.push(a),!0):!1))){if(a=this.tokenizer.escape(n)){n=n.substring(a.raw.length),t.push(a);continue}if(a=this.tokenizer.tag(n)){n=n.substring(a.raw.length),s=t[t.length-1],s&&a.type==="text"&&s.type==="text"?(s.raw+=a.raw,s.text+=a.text):t.push(a);continue}if(a=this.tokenizer.link(n)){n=n.substring(a.raw.length),t.push(a);continue}if(a=this.tokenizer.reflink(n,this.tokens.links)){n=n.substring(a.raw.length),s=t[t.length-1],s&&a.type==="text"&&s.type==="text"?(s.raw+=a.raw,s.text+=a.text):t.push(a);continue}if(a=this.tokenizer.emStrong(n,u,m)){n=n.substring(a.raw.length),t.push(a);continue}if(a=this.tokenizer.codespan(n)){n=n.substring(a.raw.length),t.push(a);continue}if(a=this.tokenizer.br(n)){n=n.substring(a.raw.length),t.push(a);continue}if(a=this.tokenizer.del(n)){n=n.substring(a.raw.length),t.push(a);continue}if(a=this.tokenizer.autolink(n)){n=n.substring(a.raw.length),t.push(a);continue}if(!this.state.inLink&&(a=this.tokenizer.url(n))){n=n.substring(a.raw.length),t.push(a);continue}if(o=n,this.options.extensions&&this.options.extensions.startInline){let y=1/0;const b=n.slice(1);let k;this.options.extensions.startInline.forEach(_=>{k=_.call({lexer:this},b),typeof k=="number"&&k>=0&&(y=Math.min(y,k))}),y<1/0&&y>=0&&(o=n.substring(0,y+1))}if(a=this.tokenizer.inlineText(o)){n=n.substring(a.raw.length),a.raw.slice(-1)!=="_"&&(m=a.raw.slice(-1)),h=!0,s=t[t.length-1],s&&s.type==="text"?(s.raw+=a.raw,s.text+=a.text):t.push(a);continue}if(n){const y="Infinite loop on byte: "+n.charCodeAt(0);if(this.options.silent){console.error(y);break}else throw new Error(y)}}return t}}class Os{constructor(n){Ee(this,"options");Ee(this,"parser");this.options=n||yi}space(n){return""}code({text:n,lang:t,escaped:a}){var u;const s=(u=(t||"").match(/^\S*/))==null?void 0:u[0],o=n.replace(/\n$/,"")+`
`;return s?'<pre><code class="language-'+Sn(s)+'">'+(a?o:Sn(o,!0))+`</code></pre>
`:"<pre><code>"+(a?o:Sn(o,!0))+`</code></pre>
`}blockquote({tokens:n}){return`<blockquote>
${this.parser.parse(n)}</blockquote>
`}html({text:n}){return n}heading({tokens:n,depth:t}){return`<h${t}>${this.parser.parseInline(n)}</h${t}>
`}hr(n){return`<hr>
`}list(n){const t=n.ordered,a=n.start;let s="";for(let f=0;f<n.items.length;f++){const h=n.items[f];s+=this.listitem(h)}const o=t?"ol":"ul",u=t&&a!==1?' start="'+a+'"':"";return"<"+o+u+`>
`+s+"</"+o+`>
`}listitem(n){let t="";if(n.task){const a=this.checkbox({checked:!!n.checked});n.loose?n.tokens.length>0&&n.tokens[0].type==="paragraph"?(n.tokens[0].text=a+" "+n.tokens[0].text,n.tokens[0].tokens&&n.tokens[0].tokens.length>0&&n.tokens[0].tokens[0].type==="text"&&(n.tokens[0].tokens[0].text=a+" "+n.tokens[0].tokens[0].text)):n.tokens.unshift({type:"text",raw:a+" ",text:a+" "}):t+=a+" "}return t+=this.parser.parse(n.tokens,!!n.loose),`<li>${t}</li>
`}checkbox({checked:n}){return"<input "+(n?'checked="" ':"")+'disabled="" type="checkbox">'}paragraph({tokens:n}){return`<p>${this.parser.parseInline(n)}</p>
`}table(n){let t="",a="";for(let o=0;o<n.header.length;o++)a+=this.tablecell(n.header[o]);t+=this.tablerow({text:a});let s="";for(let o=0;o<n.rows.length;o++){const u=n.rows[o];a="";for(let f=0;f<u.length;f++)a+=this.tablecell(u[f]);s+=this.tablerow({text:a})}return s&&(s=`<tbody>${s}</tbody>`),`<table>
<thead>
`+t+`</thead>
`+s+`</table>
`}tablerow({text:n}){return`<tr>
${n}</tr>
`}tablecell(n){const t=this.parser.parseInline(n.tokens),a=n.header?"th":"td";return(n.align?`<${a} align="${n.align}">`:`<${a}>`)+t+`</${a}>
`}strong({tokens:n}){return`<strong>${this.parser.parseInline(n)}</strong>`}em({tokens:n}){return`<em>${this.parser.parseInline(n)}</em>`}codespan({text:n}){return`<code>${n}</code>`}br(n){return"<br>"}del({tokens:n}){return`<del>${this.parser.parseInline(n)}</del>`}link({href:n,title:t,tokens:a}){const s=this.parser.parseInline(a),o=tf(n);if(o===null)return s;n=o;let u='<a href="'+n+'"';return t&&(u+=' title="'+t+'"'),u+=">"+s+"</a>",u}image({href:n,title:t,text:a}){const s=tf(n);if(s===null)return a;n=s;let o=`<img src="${n}" alt="${a}"`;return t&&(o+=` title="${t}"`),o+=">",o}text(n){return"tokens"in n&&n.tokens?this.parser.parseInline(n.tokens):n.text}}class Qo{strong({text:n}){return n}em({text:n}){return n}codespan({text:n}){return n}del({text:n}){return n}html({text:n}){return n}text({text:n}){return n}link({text:n}){return""+n}image({text:n}){return""+n}br(){return""}}class ft{constructor(n){Ee(this,"options");Ee(this,"renderer");Ee(this,"textRenderer");this.options=n||yi,this.options.renderer=this.options.renderer||new Os,this.renderer=this.options.renderer,this.renderer.options=this.options,this.renderer.parser=this,this.textRenderer=new Qo}static parse(n,t){return new ft(t).parse(n)}static parseInline(n,t){return new ft(t).parseInline(n)}parse(n,t=!0){let a="";for(let s=0;s<n.length;s++){const o=n[s];if(this.options.extensions&&this.options.extensions.renderers&&this.options.extensions.renderers[o.type]){const f=o,h=this.options.extensions.renderers[f.type].call({parser:this},f);if(h!==!1||!["space","hr","heading","code","table","blockquote","list","html","paragraph","text"].includes(f.type)){a+=h||"";continue}}const u=o;switch(u.type){case"space":{a+=this.renderer.space(u);continue}case"hr":{a+=this.renderer.hr(u);continue}case"heading":{a+=this.renderer.heading(u);continue}case"code":{a+=this.renderer.code(u);continue}case"table":{a+=this.renderer.table(u);continue}case"blockquote":{a+=this.renderer.blockquote(u);continue}case"list":{a+=this.renderer.list(u);continue}case"html":{a+=this.renderer.html(u);continue}case"paragraph":{a+=this.renderer.paragraph(u);continue}case"text":{let f=u,h=this.renderer.text(f);for(;s+1<n.length&&n[s+1].type==="text";)f=n[++s],h+=`
`+this.renderer.text(f);t?a+=this.renderer.paragraph({type:"paragraph",raw:h,text:h,tokens:[{type:"text",raw:h,text:h}]}):a+=h;continue}default:{const f='Token with "'+u.type+'" type was not found.';if(this.options.silent)return console.error(f),"";throw new Error(f)}}}return a}parseInline(n,t){t=t||this.renderer;let a="";for(let s=0;s<n.length;s++){const o=n[s];if(this.options.extensions&&this.options.extensions.renderers&&this.options.extensions.renderers[o.type]){const f=this.options.extensions.renderers[o.type].call({parser:this},o);if(f!==!1||!["escape","html","link","image","strong","em","codespan","br","del","text"].includes(o.type)){a+=f||"";continue}}const u=o;switch(u.type){case"escape":{a+=t.text(u);break}case"html":{a+=t.html(u);break}case"link":{a+=t.link(u);break}case"image":{a+=t.image(u);break}case"strong":{a+=t.strong(u);break}case"em":{a+=t.em(u);break}case"codespan":{a+=t.codespan(u);break}case"br":{a+=t.br(u);break}case"del":{a+=t.del(u);break}case"text":{a+=t.text(u);break}default:{const f='Token with "'+u.type+'" type was not found.';if(this.options.silent)return console.error(f),"";throw new Error(f)}}}return a}}class mr{constructor(n){Ee(this,"options");this.options=n||yi}preprocess(n){return n}postprocess(n){return n}processAllTokens(n){return n}}Ee(mr,"passThroughHooks",new Set(["preprocess","postprocess","processAllTokens"]));var xt,qf,ko,jf;class Aw{constructor(...n){$c(this,xt);Ee(this,"defaults",Wo());Ee(this,"options",this.setOptions);Ee(this,"parse",lr(this,xt,ko).call(this,Kn.lex,ft.parse));Ee(this,"parseInline",lr(this,xt,ko).call(this,Kn.lexInline,ft.parseInline));Ee(this,"Parser",ft);Ee(this,"Renderer",Os);Ee(this,"TextRenderer",Qo);Ee(this,"Lexer",Kn);Ee(this,"Tokenizer",Ns);Ee(this,"Hooks",mr);this.use(...n)}walkTokens(n,t){var s,o;let a=[];for(const u of n)switch(a=a.concat(t.call(this,u)),u.type){case"table":{const f=u;for(const h of f.header)a=a.concat(this.walkTokens(h.tokens,t));for(const h of f.rows)for(const m of h)a=a.concat(this.walkTokens(m.tokens,t));break}case"list":{const f=u;a=a.concat(this.walkTokens(f.items,t));break}default:{const f=u;(o=(s=this.defaults.extensions)==null?void 0:s.childTokens)!=null&&o[f.type]?this.defaults.extensions.childTokens[f.type].forEach(h=>{const m=f[h].flat(1/0);a=a.concat(this.walkTokens(m,t))}):f.tokens&&(a=a.concat(this.walkTokens(f.tokens,t)))}}return a}use(...n){const t=this.defaults.extensions||{renderers:{},childTokens:{}};return n.forEach(a=>{const s={...a};if(s.async=this.defaults.async||s.async||!1,a.extensions&&(a.extensions.forEach(o=>{if(!o.name)throw new Error("extension name required");if("renderer"in o){const u=t.renderers[o.name];u?t.renderers[o.name]=function(...f){let h=o.renderer.apply(this,f);return h===!1&&(h=u.apply(this,f)),h}:t.renderers[o.name]=o.renderer}if("tokenizer"in o){if(!o.level||o.level!=="block"&&o.level!=="inline")throw new Error("extension level must be 'block' or 'inline'");const u=t[o.level];u?u.unshift(o.tokenizer):t[o.level]=[o.tokenizer],o.start&&(o.level==="block"?t.startBlock?t.startBlock.push(o.start):t.startBlock=[o.start]:o.level==="inline"&&(t.startInline?t.startInline.push(o.start):t.startInline=[o.start]))}"childTokens"in o&&o.childTokens&&(t.childTokens[o.name]=o.childTokens)}),s.extensions=t),a.renderer){const o=this.defaults.renderer||new Os(this.defaults);for(const u in a.renderer){if(!(u in o))throw new Error(`renderer '${u}' does not exist`);if(["options","parser"].includes(u))continue;const f=u;let h=a.renderer[f];const m=o[f];o[f]=(...y)=>{a.useNewRenderer||(h=lr(this,xt,qf).call(this,h,f,o));let b=h.apply(o,y);return b===!1&&(b=m.apply(o,y)),b||""}}s.renderer=o}if(a.tokenizer){const o=this.defaults.tokenizer||new Ns(this.defaults);for(const u in a.tokenizer){if(!(u in o))throw new Error(`tokenizer '${u}' does not exist`);if(["options","rules","lexer"].includes(u))continue;const f=u,h=a.tokenizer[f],m=o[f];o[f]=(...y)=>{let b=h.apply(o,y);return b===!1&&(b=m.apply(o,y)),b}}s.tokenizer=o}if(a.hooks){const o=this.defaults.hooks||new mr;for(const u in a.hooks){if(!(u in o))throw new Error(`hook '${u}' does not exist`);if(u==="options")continue;const f=u,h=a.hooks[f],m=o[f];mr.passThroughHooks.has(u)?o[f]=y=>{if(this.defaults.async)return Promise.resolve(h.call(o,y)).then(k=>m.call(o,k));const b=h.call(o,y);return m.call(o,b)}:o[f]=(...y)=>{let b=h.apply(o,y);return b===!1&&(b=m.apply(o,y)),b}}s.hooks=o}if(a.walkTokens){const o=this.defaults.walkTokens,u=a.walkTokens;s.walkTokens=function(f){let h=[];return h.push(u.call(this,f)),o&&(h=h.concat(o.call(this,f))),h}}this.defaults={...this.defaults,...s}}),this}setOptions(n){return this.defaults={...this.defaults,...n},this}lexer(n,t){return Kn.lex(n,t??this.defaults)}parser(n,t){return ft.parse(n,t??this.defaults)}}xt=new WeakSet,qf=function(n,t,a){switch(t){case"heading":return function(s){return!s.type||s.type!==t?n.apply(this,arguments):n.call(this,a.parser.parseInline(s.tokens),s.depth,JT(a.parser.parseInline(s.tokens,a.parser.textRenderer)))};case"code":return function(s){return!s.type||s.type!==t?n.apply(this,arguments):n.call(this,s.text,s.lang,!!s.escaped)};case"table":return function(s){if(!s.type||s.type!==t)return n.apply(this,arguments);let o="",u="";for(let h=0;h<s.header.length;h++)u+=this.tablecell({text:s.header[h].text,tokens:s.header[h].tokens,header:!0,align:s.align[h]});o+=this.tablerow({text:u});let f="";for(let h=0;h<s.rows.length;h++){const m=s.rows[h];u="";for(let y=0;y<m.length;y++)u+=this.tablecell({text:m[y].text,tokens:m[y].tokens,header:!1,align:s.align[y]});f+=this.tablerow({text:u})}return n.call(this,o,f)};case"blockquote":return function(s){if(!s.type||s.type!==t)return n.apply(this,arguments);const o=this.parser.parse(s.tokens);return n.call(this,o)};case"list":return function(s){if(!s.type||s.type!==t)return n.apply(this,arguments);const o=s.ordered,u=s.start,f=s.loose;let h="";for(let m=0;m<s.items.length;m++){const y=s.items[m],b=y.checked,k=y.task;let _="";if(y.task){const O=this.checkbox({checked:!!b});f?y.tokens.length>0&&y.tokens[0].type==="paragraph"?(y.tokens[0].text=O+" "+y.tokens[0].text,y.tokens[0].tokens&&y.tokens[0].tokens.length>0&&y.tokens[0].tokens[0].type==="text"&&(y.tokens[0].tokens[0].text=O+" "+y.tokens[0].tokens[0].text)):y.tokens.unshift({type:"text",text:O+" "}):_+=O+" "}_+=this.parser.parse(y.tokens,f),h+=this.listitem({type:"list_item",raw:_,text:_,task:k,checked:!!b,loose:f,tokens:y.tokens})}return n.call(this,h,o,u)};case"html":return function(s){return!s.type||s.type!==t?n.apply(this,arguments):n.call(this,s.text,s.block)};case"paragraph":return function(s){return!s.type||s.type!==t?n.apply(this,arguments):n.call(this,this.parser.parseInline(s.tokens))};case"escape":return function(s){return!s.type||s.type!==t?n.apply(this,arguments):n.call(this,s.text)};case"link":return function(s){return!s.type||s.type!==t?n.apply(this,arguments):n.call(this,s.href,s.title,this.parser.parseInline(s.tokens))};case"image":return function(s){return!s.type||s.type!==t?n.apply(this,arguments):n.call(this,s.href,s.title,s.text)};case"strong":return function(s){return!s.type||s.type!==t?n.apply(this,arguments):n.call(this,this.parser.parseInline(s.tokens))};case"em":return function(s){return!s.type||s.type!==t?n.apply(this,arguments):n.call(this,this.parser.parseInline(s.tokens))};case"codespan":return function(s){return!s.type||s.type!==t?n.apply(this,arguments):n.call(this,s.text)};case"del":return function(s){return!s.type||s.type!==t?n.apply(this,arguments):n.call(this,this.parser.parseInline(s.tokens))};case"text":return function(s){return!s.type||s.type!==t?n.apply(this,arguments):n.call(this,s.text)}}return n},ko=function(n,t){return(a,s)=>{const o={...s},u={...this.defaults,...o};this.defaults.async===!0&&o.async===!1&&(u.silent||console.warn("marked(): The async option was set to true by an extension. The async: false option sent to parse will be ignored."),u.async=!0);const f=lr(this,xt,jf).call(this,!!u.silent,!!u.async);if(typeof a>"u"||a===null)return f(new Error("marked(): input parameter is undefined or null"));if(typeof a!="string")return f(new Error("marked(): input parameter is of type "+Object.prototype.toString.call(a)+", string expected"));if(u.hooks&&(u.hooks.options=u),u.async)return Promise.resolve(u.hooks?u.hooks.preprocess(a):a).then(h=>n(h,u)).then(h=>u.hooks?u.hooks.processAllTokens(h):h).then(h=>u.walkTokens?Promise.all(this.walkTokens(h,u.walkTokens)).then(()=>h):h).then(h=>t(h,u)).then(h=>u.hooks?u.hooks.postprocess(h):h).catch(f);try{u.hooks&&(a=u.hooks.preprocess(a));let h=n(a,u);u.hooks&&(h=u.hooks.processAllTokens(h)),u.walkTokens&&this.walkTokens(h,u.walkTokens);let m=t(h,u);return u.hooks&&(m=u.hooks.postprocess(m)),m}catch(h){return f(h)}}},jf=function(n,t){return a=>{if(a.message+=`
Please report this to https://github.com/markedjs/marked.`,n){const s="<p>An error occurred:</p><pre>"+Sn(a.message+"",!0)+"</pre>";return t?Promise.resolve(s):s}if(t)return Promise.reject(a);throw a}};const hi=new Aw;function ve(i,n){return hi.parse(i,n)}ve.options=ve.setOptions=function(i){return hi.setOptions(i),ve.defaults=hi.defaults,Lf(ve.defaults),ve};ve.getDefaults=Wo;ve.defaults=yi;ve.use=function(...i){return hi.use(...i),ve.defaults=hi.defaults,Lf(ve.defaults),ve};ve.walkTokens=function(i,n){return hi.walkTokens(i,n)};ve.parseInline=hi.parseInline;ve.Parser=ft;ve.parser=ft.parse;ve.Renderer=Os;ve.TextRenderer=Qo;ve.Lexer=Kn;ve.lexer=Kn.lex;ve.Tokenizer=Ns;ve.Hooks=mr;ve.parse=ve;ve.options;ve.setOptions;ve.use;ve.walkTokens;ve.parseInline;ft.parse;Kn.lex;function Sw(i){return new Kn().lex(i)}const kw=()=>({heading:W0,blockquote:j0,list:Q0,list_item:X0,br:nT,code:rT,codespan:oT,table:cT,html:dT,paragraph:mT,link:bT,text:ET,def:_T,del:kT,em:CT,hr:xT,strong:BT,image:MT,space:ef,escape:ef}),Fw=()=>({baseUrl:"/",slugger:new xf});function Nw(){const i=console.warn;console.warn=n=>{n.includes("unknown prop")||n.includes("unexpected slot")||i(n)},O0(()=>{console.warn=i})}function Cw(i){let n,t;return n=new Ms({props:{tokens:i[0],renderers:i[1],options:i[2]}}),{c(){Ht(n.$$.fragment)},l(a){mi(n.$$.fragment,a)},m(a,s){zt(n,a,s),t=!0},p(a,[s]){const o={};s&1&&(o.tokens=a[0]),s&2&&(o.renderers=a[1]),s&4&&(o.options=a[2]),n.$set(o)},i(a){t||(ee(n.$$.fragment,a),t=!0)},o(a){ae(n.$$.fragment,a),t=!1},d(a){Qt(n,a)}}}function Ow(i,n,t){Nw();let{source:a}=n,{options:s={}}=n,{renderers:o={}}=n,u,f,h;return i.$$set=m=>{"source"in m&&t(3,a=m.source),"options"in m&&t(4,s=m.options),"renderers"in m&&t(5,o=m.renderers)},i.$$.update=()=>{i.$$.dirty&56&&(t(0,u=Sw(a)),t(1,f={...kw(),...o}),t(2,h={...Fw(),...s}))},[u,f,h,a,s,o]}class xI extends Pe{constructor(n){super(),Be(this,n,Ow,Cw,Fe,{source:3,options:4,renderers:5})}}const Sr={joinUrlPaths:Tr,isRelative:wr,generatePathSegment:Rf};var fr=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{};function Rw(i){return i&&i.__esModule&&Object.prototype.hasOwnProperty.call(i,"default")?i.default:i}var Rs={exports:{}};/**
 * @license
 * Lodash <https://lodash.com/>
 * Copyright OpenJS Foundation and other contributors <https://openjsf.org/>
 * Released under MIT license <https://lodash.com/license>
 * Based on Underscore.js 1.8.3 <http://underscorejs.org/LICENSE>
 * Copyright Jeremy Ashkenas, DocumentCloud and Investigative Reporters & Editors
 */Rs.exports;(function(i,n){(function(){var t,a="4.17.21",s=200,o="Unsupported core-js use. Try https://npms.io/search?q=ponyfill.",u="Expected a function",f="Invalid `variable` option passed into `_.template`",h="__lodash_hash_undefined__",m=500,y="__lodash_placeholder__",b=1,k=2,_=4,O=1,P=2,q=1,ce=2,Ae=4,me=8,Ne=16,xe=32,an=64,en=128,gt=256,R=512,K=30,on="...",Lt=800,Xt=16,Nr=1,bi=2,Cr=3,at=1/0,Vn=9007199254740991,Ti=17976931348623157e292,Zt=NaN,Fn=4294967295,A=Fn-1,V=Fn>>>1,U=[["ary",en],["bind",q],["bindKey",ce],["curry",me],["curryRight",Ne],["flip",R],["partial",xe],["partialRight",an],["rearg",gt]],M="[object Arguments]",de="[object Array]",Ue="[object AsyncFunction]",pe="[object Boolean]",Nn="[object Date]",Gi="[object DOMException]",Pt="[object Error]",nn="[object Function]",ol="[object GeneratorFunction]",Wn="[object Map]",Vi="[object Number]",Yh="[object Null]",mt="[object Object]",ll="[object Promise]",qh="[object Proxy]",Wi="[object RegExp]",Yn="[object Set]",Yi="[object String]",Or="[object Symbol]",jh="[object Undefined]",qi="[object WeakMap]",Hh="[object WeakSet]",ji="[object ArrayBuffer]",wi="[object DataView]",Ks="[object Float32Array]",Xs="[object Float64Array]",Zs="[object Int8Array]",ea="[object Int16Array]",na="[object Int32Array]",ta="[object Uint8Array]",ia="[object Uint8ClampedArray]",ra="[object Uint16Array]",sa="[object Uint32Array]",zh=/\b__p \+= '';/g,Qh=/\b(__p \+=) '' \+/g,Jh=/(__e\(.*?\)|\b__t\)) \+\n'';/g,ul=/&(?:amp|lt|gt|quot|#39);/g,cl=/[&<>"']/g,Kh=RegExp(ul.source),Xh=RegExp(cl.source),Zh=/<%-([\s\S]+?)%>/g,ed=/<%([\s\S]+?)%>/g,fl=/<%=([\s\S]+?)%>/g,nd=/\.|\[(?:[^[\]]*|(["'])(?:(?!\1)[^\\]|\\.)*?\1)\]/,td=/^\w*$/,id=/[^.[\]]+|\[(?:(-?\d+(?:\.\d+)?)|(["'])((?:(?!\2)[^\\]|\\.)*?)\2)\]|(?=(?:\.|\[\])(?:\.|\[\]|$))/g,aa=/[\\^$.*+?()[\]{}|]/g,rd=RegExp(aa.source),oa=/^\s+/,sd=/\s/,ad=/\{(?:\n\/\* \[wrapped with .+\] \*\/)?\n?/,od=/\{\n\/\* \[wrapped with (.+)\] \*/,ld=/,? & /,ud=/[^\x00-\x2f\x3a-\x40\x5b-\x60\x7b-\x7f]+/g,cd=/[()=,{}\[\]\/\s]/,fd=/\\(\\)?/g,hd=/\$\{([^\\}]*(?:\\.[^\\}]*)*)\}/g,hl=/\w*$/,dd=/^[-+]0x[0-9a-f]+$/i,pd=/^0b[01]+$/i,gd=/^\[object .+?Constructor\]$/,md=/^0o[0-7]+$/i,yd=/^(?:0|[1-9]\d*)$/,vd=/[\xc0-\xd6\xd8-\xf6\xf8-\xff\u0100-\u017f]/g,Rr=/($^)/,bd=/['\n\r\u2028\u2029\\]/g,xr="\\ud800-\\udfff",Td="\\u0300-\\u036f",wd="\\ufe20-\\ufe2f",Ed="\\u20d0-\\u20ff",dl=Td+wd+Ed,pl="\\u2700-\\u27bf",gl="a-z\\xdf-\\xf6\\xf8-\\xff",Dd="\\xac\\xb1\\xd7\\xf7",Id="\\x00-\\x2f\\x3a-\\x40\\x5b-\\x60\\x7b-\\xbf",_d="\\u2000-\\u206f",Ad=" \\t\\x0b\\f\\xa0\\ufeff\\n\\r\\u2028\\u2029\\u1680\\u180e\\u2000\\u2001\\u2002\\u2003\\u2004\\u2005\\u2006\\u2007\\u2008\\u2009\\u200a\\u202f\\u205f\\u3000",ml="A-Z\\xc0-\\xd6\\xd8-\\xde",yl="\\ufe0e\\ufe0f",vl=Dd+Id+_d+Ad,la="['’]",Sd="["+xr+"]",bl="["+vl+"]",Lr="["+dl+"]",Tl="\\d+",kd="["+pl+"]",wl="["+gl+"]",El="[^"+xr+vl+Tl+pl+gl+ml+"]",ua="\\ud83c[\\udffb-\\udfff]",Fd="(?:"+Lr+"|"+ua+")",Dl="[^"+xr+"]",ca="(?:\\ud83c[\\udde6-\\uddff]){2}",fa="[\\ud800-\\udbff][\\udc00-\\udfff]",Ei="["+ml+"]",Il="\\u200d",_l="(?:"+wl+"|"+El+")",Nd="(?:"+Ei+"|"+El+")",Al="(?:"+la+"(?:d|ll|m|re|s|t|ve))?",Sl="(?:"+la+"(?:D|LL|M|RE|S|T|VE))?",kl=Fd+"?",Fl="["+yl+"]?",Cd="(?:"+Il+"(?:"+[Dl,ca,fa].join("|")+")"+Fl+kl+")*",Od="\\d*(?:1st|2nd|3rd|(?![123])\\dth)(?=\\b|[A-Z_])",Rd="\\d*(?:1ST|2ND|3RD|(?![123])\\dTH)(?=\\b|[a-z_])",Nl=Fl+kl+Cd,xd="(?:"+[kd,ca,fa].join("|")+")"+Nl,Ld="(?:"+[Dl+Lr+"?",Lr,ca,fa,Sd].join("|")+")",Pd=RegExp(la,"g"),Bd=RegExp(Lr,"g"),ha=RegExp(ua+"(?="+ua+")|"+Ld+Nl,"g"),Ud=RegExp([Ei+"?"+wl+"+"+Al+"(?="+[bl,Ei,"$"].join("|")+")",Nd+"+"+Sl+"(?="+[bl,Ei+_l,"$"].join("|")+")",Ei+"?"+_l+"+"+Al,Ei+"+"+Sl,Rd,Od,Tl,xd].join("|"),"g"),$d=RegExp("["+Il+xr+dl+yl+"]"),Md=/[a-z][A-Z]|[A-Z]{2}[a-z]|[0-9][a-zA-Z]|[a-zA-Z][0-9]|[^a-zA-Z0-9 ]/,Gd=["Array","Buffer","DataView","Date","Error","Float32Array","Float64Array","Function","Int8Array","Int16Array","Int32Array","Map","Math","Object","Promise","RegExp","Set","String","Symbol","TypeError","Uint8Array","Uint8ClampedArray","Uint16Array","Uint32Array","WeakMap","_","clearTimeout","isFinite","parseInt","setTimeout"],Vd=-1,Se={};Se[Ks]=Se[Xs]=Se[Zs]=Se[ea]=Se[na]=Se[ta]=Se[ia]=Se[ra]=Se[sa]=!0,Se[M]=Se[de]=Se[ji]=Se[pe]=Se[wi]=Se[Nn]=Se[Pt]=Se[nn]=Se[Wn]=Se[Vi]=Se[mt]=Se[Wi]=Se[Yn]=Se[Yi]=Se[qi]=!1;var Ie={};Ie[M]=Ie[de]=Ie[ji]=Ie[wi]=Ie[pe]=Ie[Nn]=Ie[Ks]=Ie[Xs]=Ie[Zs]=Ie[ea]=Ie[na]=Ie[Wn]=Ie[Vi]=Ie[mt]=Ie[Wi]=Ie[Yn]=Ie[Yi]=Ie[Or]=Ie[ta]=Ie[ia]=Ie[ra]=Ie[sa]=!0,Ie[Pt]=Ie[nn]=Ie[qi]=!1;var Wd={À:"A",Á:"A",Â:"A",Ã:"A",Ä:"A",Å:"A",à:"a",á:"a",â:"a",ã:"a",ä:"a",å:"a",Ç:"C",ç:"c",Ð:"D",ð:"d",È:"E",É:"E",Ê:"E",Ë:"E",è:"e",é:"e",ê:"e",ë:"e",Ì:"I",Í:"I",Î:"I",Ï:"I",ì:"i",í:"i",î:"i",ï:"i",Ñ:"N",ñ:"n",Ò:"O",Ó:"O",Ô:"O",Õ:"O",Ö:"O",Ø:"O",ò:"o",ó:"o",ô:"o",õ:"o",ö:"o",ø:"o",Ù:"U",Ú:"U",Û:"U",Ü:"U",ù:"u",ú:"u",û:"u",ü:"u",Ý:"Y",ý:"y",ÿ:"y",Æ:"Ae",æ:"ae",Þ:"Th",þ:"th",ß:"ss",Ā:"A",Ă:"A",Ą:"A",ā:"a",ă:"a",ą:"a",Ć:"C",Ĉ:"C",Ċ:"C",Č:"C",ć:"c",ĉ:"c",ċ:"c",č:"c",Ď:"D",Đ:"D",ď:"d",đ:"d",Ē:"E",Ĕ:"E",Ė:"E",Ę:"E",Ě:"E",ē:"e",ĕ:"e",ė:"e",ę:"e",ě:"e",Ĝ:"G",Ğ:"G",Ġ:"G",Ģ:"G",ĝ:"g",ğ:"g",ġ:"g",ģ:"g",Ĥ:"H",Ħ:"H",ĥ:"h",ħ:"h",Ĩ:"I",Ī:"I",Ĭ:"I",Į:"I",İ:"I",ĩ:"i",ī:"i",ĭ:"i",į:"i",ı:"i",Ĵ:"J",ĵ:"j",Ķ:"K",ķ:"k",ĸ:"k",Ĺ:"L",Ļ:"L",Ľ:"L",Ŀ:"L",Ł:"L",ĺ:"l",ļ:"l",ľ:"l",ŀ:"l",ł:"l",Ń:"N",Ņ:"N",Ň:"N",Ŋ:"N",ń:"n",ņ:"n",ň:"n",ŋ:"n",Ō:"O",Ŏ:"O",Ő:"O",ō:"o",ŏ:"o",ő:"o",Ŕ:"R",Ŗ:"R",Ř:"R",ŕ:"r",ŗ:"r",ř:"r",Ś:"S",Ŝ:"S",Ş:"S",Š:"S",ś:"s",ŝ:"s",ş:"s",š:"s",Ţ:"T",Ť:"T",Ŧ:"T",ţ:"t",ť:"t",ŧ:"t",Ũ:"U",Ū:"U",Ŭ:"U",Ů:"U",Ű:"U",Ų:"U",ũ:"u",ū:"u",ŭ:"u",ů:"u",ű:"u",ų:"u",Ŵ:"W",ŵ:"w",Ŷ:"Y",ŷ:"y",Ÿ:"Y",Ź:"Z",Ż:"Z",Ž:"Z",ź:"z",ż:"z",ž:"z",Ĳ:"IJ",ĳ:"ij",Œ:"Oe",œ:"oe",ŉ:"'n",ſ:"s"},Yd={"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;","'":"&#39;"},qd={"&amp;":"&","&lt;":"<","&gt;":">","&quot;":'"',"&#39;":"'"},jd={"\\":"\\","'":"'","\n":"n","\r":"r","\u2028":"u2028","\u2029":"u2029"},Hd=parseFloat,zd=parseInt,Cl=typeof fr=="object"&&fr&&fr.Object===Object&&fr,Qd=typeof self=="object"&&self&&self.Object===Object&&self,Ke=Cl||Qd||Function("return this")(),da=n&&!n.nodeType&&n,ei=da&&!0&&i&&!i.nodeType&&i,Ol=ei&&ei.exports===da,pa=Ol&&Cl.process,Cn=function(){try{var E=ei&&ei.require&&ei.require("util").types;return E||pa&&pa.binding&&pa.binding("util")}catch{}}(),Rl=Cn&&Cn.isArrayBuffer,xl=Cn&&Cn.isDate,Ll=Cn&&Cn.isMap,Pl=Cn&&Cn.isRegExp,Bl=Cn&&Cn.isSet,Ul=Cn&&Cn.isTypedArray;function Tn(E,S,I){switch(I.length){case 0:return E.call(S);case 1:return E.call(S,I[0]);case 2:return E.call(S,I[0],I[1]);case 3:return E.call(S,I[0],I[1],I[2])}return E.apply(S,I)}function Jd(E,S,I,G){for(var X=-1,he=E==null?0:E.length;++X<he;){var je=E[X];S(G,je,I(je),E)}return G}function On(E,S){for(var I=-1,G=E==null?0:E.length;++I<G&&S(E[I],I,E)!==!1;);return E}function Kd(E,S){for(var I=E==null?0:E.length;I--&&S(E[I],I,E)!==!1;);return E}function $l(E,S){for(var I=-1,G=E==null?0:E.length;++I<G;)if(!S(E[I],I,E))return!1;return!0}function Bt(E,S){for(var I=-1,G=E==null?0:E.length,X=0,he=[];++I<G;){var je=E[I];S(je,I,E)&&(he[X++]=je)}return he}function Pr(E,S){var I=E==null?0:E.length;return!!I&&Di(E,S,0)>-1}function ga(E,S,I){for(var G=-1,X=E==null?0:E.length;++G<X;)if(I(S,E[G]))return!0;return!1}function ke(E,S){for(var I=-1,G=E==null?0:E.length,X=Array(G);++I<G;)X[I]=S(E[I],I,E);return X}function Ut(E,S){for(var I=-1,G=S.length,X=E.length;++I<G;)E[X+I]=S[I];return E}function ma(E,S,I,G){var X=-1,he=E==null?0:E.length;for(G&&he&&(I=E[++X]);++X<he;)I=S(I,E[X],X,E);return I}function Xd(E,S,I,G){var X=E==null?0:E.length;for(G&&X&&(I=E[--X]);X--;)I=S(I,E[X],X,E);return I}function ya(E,S){for(var I=-1,G=E==null?0:E.length;++I<G;)if(S(E[I],I,E))return!0;return!1}var Zd=va("length");function ep(E){return E.split("")}function np(E){return E.match(ud)||[]}function Ml(E,S,I){var G;return I(E,function(X,he,je){if(S(X,he,je))return G=he,!1}),G}function Br(E,S,I,G){for(var X=E.length,he=I+(G?1:-1);G?he--:++he<X;)if(S(E[he],he,E))return he;return-1}function Di(E,S,I){return S===S?dp(E,S,I):Br(E,Gl,I)}function tp(E,S,I,G){for(var X=I-1,he=E.length;++X<he;)if(G(E[X],S))return X;return-1}function Gl(E){return E!==E}function Vl(E,S){var I=E==null?0:E.length;return I?Ta(E,S)/I:Zt}function va(E){return function(S){return S==null?t:S[E]}}function ba(E){return function(S){return E==null?t:E[S]}}function Wl(E,S,I,G,X){return X(E,function(he,je,we){I=G?(G=!1,he):S(I,he,je,we)}),I}function ip(E,S){var I=E.length;for(E.sort(S);I--;)E[I]=E[I].value;return E}function Ta(E,S){for(var I,G=-1,X=E.length;++G<X;){var he=S(E[G]);he!==t&&(I=I===t?he:I+he)}return I}function wa(E,S){for(var I=-1,G=Array(E);++I<E;)G[I]=S(I);return G}function rp(E,S){return ke(S,function(I){return[I,E[I]]})}function Yl(E){return E&&E.slice(0,zl(E)+1).replace(oa,"")}function wn(E){return function(S){return E(S)}}function Ea(E,S){return ke(S,function(I){return E[I]})}function Hi(E,S){return E.has(S)}function ql(E,S){for(var I=-1,G=E.length;++I<G&&Di(S,E[I],0)>-1;);return I}function jl(E,S){for(var I=E.length;I--&&Di(S,E[I],0)>-1;);return I}function sp(E,S){for(var I=E.length,G=0;I--;)E[I]===S&&++G;return G}var ap=ba(Wd),op=ba(Yd);function lp(E){return"\\"+jd[E]}function up(E,S){return E==null?t:E[S]}function Ii(E){return $d.test(E)}function cp(E){return Md.test(E)}function fp(E){for(var S,I=[];!(S=E.next()).done;)I.push(S.value);return I}function Da(E){var S=-1,I=Array(E.size);return E.forEach(function(G,X){I[++S]=[X,G]}),I}function Hl(E,S){return function(I){return E(S(I))}}function $t(E,S){for(var I=-1,G=E.length,X=0,he=[];++I<G;){var je=E[I];(je===S||je===y)&&(E[I]=y,he[X++]=I)}return he}function Ur(E){var S=-1,I=Array(E.size);return E.forEach(function(G){I[++S]=G}),I}function hp(E){var S=-1,I=Array(E.size);return E.forEach(function(G){I[++S]=[G,G]}),I}function dp(E,S,I){for(var G=I-1,X=E.length;++G<X;)if(E[G]===S)return G;return-1}function pp(E,S,I){for(var G=I+1;G--;)if(E[G]===S)return G;return G}function _i(E){return Ii(E)?mp(E):Zd(E)}function qn(E){return Ii(E)?yp(E):ep(E)}function zl(E){for(var S=E.length;S--&&sd.test(E.charAt(S)););return S}var gp=ba(qd);function mp(E){for(var S=ha.lastIndex=0;ha.test(E);)++S;return S}function yp(E){return E.match(ha)||[]}function vp(E){return E.match(Ud)||[]}var bp=function E(S){S=S==null?Ke:Ai.defaults(Ke.Object(),S,Ai.pick(Ke,Gd));var I=S.Array,G=S.Date,X=S.Error,he=S.Function,je=S.Math,we=S.Object,Ia=S.RegExp,Tp=S.String,Rn=S.TypeError,$r=I.prototype,wp=he.prototype,Si=we.prototype,Mr=S["__core-js_shared__"],Gr=wp.toString,ye=Si.hasOwnProperty,Ep=0,Ql=function(){var e=/[^.]+$/.exec(Mr&&Mr.keys&&Mr.keys.IE_PROTO||"");return e?"Symbol(src)_1."+e:""}(),Vr=Si.toString,Dp=Gr.call(we),Ip=Ke._,_p=Ia("^"+Gr.call(ye).replace(aa,"\\$&").replace(/hasOwnProperty|(function).*?(?=\\\()| for .+?(?=\\\])/g,"$1.*?")+"$"),Wr=Ol?S.Buffer:t,Mt=S.Symbol,Yr=S.Uint8Array,Jl=Wr?Wr.allocUnsafe:t,qr=Hl(we.getPrototypeOf,we),Kl=we.create,Xl=Si.propertyIsEnumerable,jr=$r.splice,Zl=Mt?Mt.isConcatSpreadable:t,zi=Mt?Mt.iterator:t,ni=Mt?Mt.toStringTag:t,Hr=function(){try{var e=ai(we,"defineProperty");return e({},"",{}),e}catch{}}(),Ap=S.clearTimeout!==Ke.clearTimeout&&S.clearTimeout,Sp=G&&G.now!==Ke.Date.now&&G.now,kp=S.setTimeout!==Ke.setTimeout&&S.setTimeout,zr=je.ceil,Qr=je.floor,_a=we.getOwnPropertySymbols,Fp=Wr?Wr.isBuffer:t,eu=S.isFinite,Np=$r.join,Cp=Hl(we.keys,we),He=je.max,tn=je.min,Op=G.now,Rp=S.parseInt,nu=je.random,xp=$r.reverse,Aa=ai(S,"DataView"),Qi=ai(S,"Map"),Sa=ai(S,"Promise"),ki=ai(S,"Set"),Ji=ai(S,"WeakMap"),Ki=ai(we,"create"),Jr=Ji&&new Ji,Fi={},Lp=oi(Aa),Pp=oi(Qi),Bp=oi(Sa),Up=oi(ki),$p=oi(Ji),Kr=Mt?Mt.prototype:t,Xi=Kr?Kr.valueOf:t,tu=Kr?Kr.toString:t;function p(e){if(Le(e)&&!Z(e)&&!(e instanceof oe)){if(e instanceof xn)return e;if(ye.call(e,"__wrapped__"))return ic(e)}return new xn(e)}var Ni=function(){function e(){}return function(r){if(!Ce(r))return{};if(Kl)return Kl(r);e.prototype=r;var l=new e;return e.prototype=t,l}}();function Xr(){}function xn(e,r){this.__wrapped__=e,this.__actions__=[],this.__chain__=!!r,this.__index__=0,this.__values__=t}p.templateSettings={escape:Zh,evaluate:ed,interpolate:fl,variable:"",imports:{_:p}},p.prototype=Xr.prototype,p.prototype.constructor=p,xn.prototype=Ni(Xr.prototype),xn.prototype.constructor=xn;function oe(e){this.__wrapped__=e,this.__actions__=[],this.__dir__=1,this.__filtered__=!1,this.__iteratees__=[],this.__takeCount__=Fn,this.__views__=[]}function Mp(){var e=new oe(this.__wrapped__);return e.__actions__=dn(this.__actions__),e.__dir__=this.__dir__,e.__filtered__=this.__filtered__,e.__iteratees__=dn(this.__iteratees__),e.__takeCount__=this.__takeCount__,e.__views__=dn(this.__views__),e}function Gp(){if(this.__filtered__){var e=new oe(this);e.__dir__=-1,e.__filtered__=!0}else e=this.clone(),e.__dir__*=-1;return e}function Vp(){var e=this.__wrapped__.value(),r=this.__dir__,l=Z(e),c=r<0,d=l?e.length:0,g=em(0,d,this.__views__),v=g.start,T=g.end,D=T-v,F=c?T:v-1,N=this.__iteratees__,x=N.length,B=0,Y=tn(D,this.__takeCount__);if(!l||!c&&d==D&&Y==D)return Au(e,this.__actions__);var z=[];e:for(;D--&&B<Y;){F+=r;for(var te=-1,Q=e[F];++te<x;){var se=N[te],ue=se.iteratee,In=se.type,cn=ue(Q);if(In==bi)Q=cn;else if(!cn){if(In==Nr)continue e;break e}}z[B++]=Q}return z}oe.prototype=Ni(Xr.prototype),oe.prototype.constructor=oe;function ti(e){var r=-1,l=e==null?0:e.length;for(this.clear();++r<l;){var c=e[r];this.set(c[0],c[1])}}function Wp(){this.__data__=Ki?Ki(null):{},this.size=0}function Yp(e){var r=this.has(e)&&delete this.__data__[e];return this.size-=r?1:0,r}function qp(e){var r=this.__data__;if(Ki){var l=r[e];return l===h?t:l}return ye.call(r,e)?r[e]:t}function jp(e){var r=this.__data__;return Ki?r[e]!==t:ye.call(r,e)}function Hp(e,r){var l=this.__data__;return this.size+=this.has(e)?0:1,l[e]=Ki&&r===t?h:r,this}ti.prototype.clear=Wp,ti.prototype.delete=Yp,ti.prototype.get=qp,ti.prototype.has=jp,ti.prototype.set=Hp;function yt(e){var r=-1,l=e==null?0:e.length;for(this.clear();++r<l;){var c=e[r];this.set(c[0],c[1])}}function zp(){this.__data__=[],this.size=0}function Qp(e){var r=this.__data__,l=Zr(r,e);if(l<0)return!1;var c=r.length-1;return l==c?r.pop():jr.call(r,l,1),--this.size,!0}function Jp(e){var r=this.__data__,l=Zr(r,e);return l<0?t:r[l][1]}function Kp(e){return Zr(this.__data__,e)>-1}function Xp(e,r){var l=this.__data__,c=Zr(l,e);return c<0?(++this.size,l.push([e,r])):l[c][1]=r,this}yt.prototype.clear=zp,yt.prototype.delete=Qp,yt.prototype.get=Jp,yt.prototype.has=Kp,yt.prototype.set=Xp;function vt(e){var r=-1,l=e==null?0:e.length;for(this.clear();++r<l;){var c=e[r];this.set(c[0],c[1])}}function Zp(){this.size=0,this.__data__={hash:new ti,map:new(Qi||yt),string:new ti}}function eg(e){var r=fs(this,e).delete(e);return this.size-=r?1:0,r}function ng(e){return fs(this,e).get(e)}function tg(e){return fs(this,e).has(e)}function ig(e,r){var l=fs(this,e),c=l.size;return l.set(e,r),this.size+=l.size==c?0:1,this}vt.prototype.clear=Zp,vt.prototype.delete=eg,vt.prototype.get=ng,vt.prototype.has=tg,vt.prototype.set=ig;function ii(e){var r=-1,l=e==null?0:e.length;for(this.__data__=new vt;++r<l;)this.add(e[r])}function rg(e){return this.__data__.set(e,h),this}function sg(e){return this.__data__.has(e)}ii.prototype.add=ii.prototype.push=rg,ii.prototype.has=sg;function jn(e){var r=this.__data__=new yt(e);this.size=r.size}function ag(){this.__data__=new yt,this.size=0}function og(e){var r=this.__data__,l=r.delete(e);return this.size=r.size,l}function lg(e){return this.__data__.get(e)}function ug(e){return this.__data__.has(e)}function cg(e,r){var l=this.__data__;if(l instanceof yt){var c=l.__data__;if(!Qi||c.length<s-1)return c.push([e,r]),this.size=++l.size,this;l=this.__data__=new vt(c)}return l.set(e,r),this.size=l.size,this}jn.prototype.clear=ag,jn.prototype.delete=og,jn.prototype.get=lg,jn.prototype.has=ug,jn.prototype.set=cg;function iu(e,r){var l=Z(e),c=!l&&li(e),d=!l&&!c&&qt(e),g=!l&&!c&&!d&&xi(e),v=l||c||d||g,T=v?wa(e.length,Tp):[],D=T.length;for(var F in e)(r||ye.call(e,F))&&!(v&&(F=="length"||d&&(F=="offset"||F=="parent")||g&&(F=="buffer"||F=="byteLength"||F=="byteOffset")||Et(F,D)))&&T.push(F);return T}function ru(e){var r=e.length;return r?e[Ua(0,r-1)]:t}function fg(e,r){return hs(dn(e),ri(r,0,e.length))}function hg(e){return hs(dn(e))}function ka(e,r,l){(l!==t&&!Hn(e[r],l)||l===t&&!(r in e))&&bt(e,r,l)}function Zi(e,r,l){var c=e[r];(!(ye.call(e,r)&&Hn(c,l))||l===t&&!(r in e))&&bt(e,r,l)}function Zr(e,r){for(var l=e.length;l--;)if(Hn(e[l][0],r))return l;return-1}function dg(e,r,l,c){return Gt(e,function(d,g,v){r(c,d,l(d),v)}),c}function su(e,r){return e&&lt(r,ze(r),e)}function pg(e,r){return e&&lt(r,gn(r),e)}function bt(e,r,l){r=="__proto__"&&Hr?Hr(e,r,{configurable:!0,enumerable:!0,value:l,writable:!0}):e[r]=l}function Fa(e,r){for(var l=-1,c=r.length,d=I(c),g=e==null;++l<c;)d[l]=g?t:uo(e,r[l]);return d}function ri(e,r,l){return e===e&&(l!==t&&(e=e<=l?e:l),r!==t&&(e=e>=r?e:r)),e}function Ln(e,r,l,c,d,g){var v,T=r&b,D=r&k,F=r&_;if(l&&(v=d?l(e,c,d,g):l(e)),v!==t)return v;if(!Ce(e))return e;var N=Z(e);if(N){if(v=tm(e),!T)return dn(e,v)}else{var x=rn(e),B=x==nn||x==ol;if(qt(e))return Fu(e,T);if(x==mt||x==M||B&&!d){if(v=D||B?{}:zu(e),!T)return D?qg(e,pg(v,e)):Yg(e,su(v,e))}else{if(!Ie[x])return d?e:{};v=im(e,x,T)}}g||(g=new jn);var Y=g.get(e);if(Y)return Y;g.set(e,v),Dc(e)?e.forEach(function(Q){v.add(Ln(Q,r,l,Q,e,g))}):wc(e)&&e.forEach(function(Q,se){v.set(se,Ln(Q,r,l,se,e,g))});var z=F?D?Qa:za:D?gn:ze,te=N?t:z(e);return On(te||e,function(Q,se){te&&(se=Q,Q=e[se]),Zi(v,se,Ln(Q,r,l,se,e,g))}),v}function gg(e){var r=ze(e);return function(l){return au(l,e,r)}}function au(e,r,l){var c=l.length;if(e==null)return!c;for(e=we(e);c--;){var d=l[c],g=r[d],v=e[d];if(v===t&&!(d in e)||!g(v))return!1}return!0}function ou(e,r,l){if(typeof e!="function")throw new Rn(u);return ar(function(){e.apply(t,l)},r)}function er(e,r,l,c){var d=-1,g=Pr,v=!0,T=e.length,D=[],F=r.length;if(!T)return D;l&&(r=ke(r,wn(l))),c?(g=ga,v=!1):r.length>=s&&(g=Hi,v=!1,r=new ii(r));e:for(;++d<T;){var N=e[d],x=l==null?N:l(N);if(N=c||N!==0?N:0,v&&x===x){for(var B=F;B--;)if(r[B]===x)continue e;D.push(N)}else g(r,x,c)||D.push(N)}return D}var Gt=xu(ot),lu=xu(Ca,!0);function mg(e,r){var l=!0;return Gt(e,function(c,d,g){return l=!!r(c,d,g),l}),l}function es(e,r,l){for(var c=-1,d=e.length;++c<d;){var g=e[c],v=r(g);if(v!=null&&(T===t?v===v&&!Dn(v):l(v,T)))var T=v,D=g}return D}function yg(e,r,l,c){var d=e.length;for(l=ne(l),l<0&&(l=-l>d?0:d+l),c=c===t||c>d?d:ne(c),c<0&&(c+=d),c=l>c?0:_c(c);l<c;)e[l++]=r;return e}function uu(e,r){var l=[];return Gt(e,function(c,d,g){r(c,d,g)&&l.push(c)}),l}function Xe(e,r,l,c,d){var g=-1,v=e.length;for(l||(l=sm),d||(d=[]);++g<v;){var T=e[g];r>0&&l(T)?r>1?Xe(T,r-1,l,c,d):Ut(d,T):c||(d[d.length]=T)}return d}var Na=Lu(),cu=Lu(!0);function ot(e,r){return e&&Na(e,r,ze)}function Ca(e,r){return e&&cu(e,r,ze)}function ns(e,r){return Bt(r,function(l){return Dt(e[l])})}function si(e,r){r=Wt(r,e);for(var l=0,c=r.length;e!=null&&l<c;)e=e[ut(r[l++])];return l&&l==c?e:t}function fu(e,r,l){var c=r(e);return Z(e)?c:Ut(c,l(e))}function ln(e){return e==null?e===t?jh:Yh:ni&&ni in we(e)?Zg(e):hm(e)}function Oa(e,r){return e>r}function vg(e,r){return e!=null&&ye.call(e,r)}function bg(e,r){return e!=null&&r in we(e)}function Tg(e,r,l){return e>=tn(r,l)&&e<He(r,l)}function Ra(e,r,l){for(var c=l?ga:Pr,d=e[0].length,g=e.length,v=g,T=I(g),D=1/0,F=[];v--;){var N=e[v];v&&r&&(N=ke(N,wn(r))),D=tn(N.length,D),T[v]=!l&&(r||d>=120&&N.length>=120)?new ii(v&&N):t}N=e[0];var x=-1,B=T[0];e:for(;++x<d&&F.length<D;){var Y=N[x],z=r?r(Y):Y;if(Y=l||Y!==0?Y:0,!(B?Hi(B,z):c(F,z,l))){for(v=g;--v;){var te=T[v];if(!(te?Hi(te,z):c(e[v],z,l)))continue e}B&&B.push(z),F.push(Y)}}return F}function wg(e,r,l,c){return ot(e,function(d,g,v){r(c,l(d),g,v)}),c}function nr(e,r,l){r=Wt(r,e),e=Xu(e,r);var c=e==null?e:e[ut(Bn(r))];return c==null?t:Tn(c,e,l)}function hu(e){return Le(e)&&ln(e)==M}function Eg(e){return Le(e)&&ln(e)==ji}function Dg(e){return Le(e)&&ln(e)==Nn}function tr(e,r,l,c,d){return e===r?!0:e==null||r==null||!Le(e)&&!Le(r)?e!==e&&r!==r:Ig(e,r,l,c,tr,d)}function Ig(e,r,l,c,d,g){var v=Z(e),T=Z(r),D=v?de:rn(e),F=T?de:rn(r);D=D==M?mt:D,F=F==M?mt:F;var N=D==mt,x=F==mt,B=D==F;if(B&&qt(e)){if(!qt(r))return!1;v=!0,N=!1}if(B&&!N)return g||(g=new jn),v||xi(e)?qu(e,r,l,c,d,g):Kg(e,r,D,l,c,d,g);if(!(l&O)){var Y=N&&ye.call(e,"__wrapped__"),z=x&&ye.call(r,"__wrapped__");if(Y||z){var te=Y?e.value():e,Q=z?r.value():r;return g||(g=new jn),d(te,Q,l,c,g)}}return B?(g||(g=new jn),Xg(e,r,l,c,d,g)):!1}function _g(e){return Le(e)&&rn(e)==Wn}function xa(e,r,l,c){var d=l.length,g=d,v=!c;if(e==null)return!g;for(e=we(e);d--;){var T=l[d];if(v&&T[2]?T[1]!==e[T[0]]:!(T[0]in e))return!1}for(;++d<g;){T=l[d];var D=T[0],F=e[D],N=T[1];if(v&&T[2]){if(F===t&&!(D in e))return!1}else{var x=new jn;if(c)var B=c(F,N,D,e,r,x);if(!(B===t?tr(N,F,O|P,c,x):B))return!1}}return!0}function du(e){if(!Ce(e)||om(e))return!1;var r=Dt(e)?_p:gd;return r.test(oi(e))}function Ag(e){return Le(e)&&ln(e)==Wi}function Sg(e){return Le(e)&&rn(e)==Yn}function kg(e){return Le(e)&&vs(e.length)&&!!Se[ln(e)]}function pu(e){return typeof e=="function"?e:e==null?mn:typeof e=="object"?Z(e)?yu(e[0],e[1]):mu(e):Pc(e)}function La(e){if(!sr(e))return Cp(e);var r=[];for(var l in we(e))ye.call(e,l)&&l!="constructor"&&r.push(l);return r}function Fg(e){if(!Ce(e))return fm(e);var r=sr(e),l=[];for(var c in e)c=="constructor"&&(r||!ye.call(e,c))||l.push(c);return l}function Pa(e,r){return e<r}function gu(e,r){var l=-1,c=pn(e)?I(e.length):[];return Gt(e,function(d,g,v){c[++l]=r(d,g,v)}),c}function mu(e){var r=Ka(e);return r.length==1&&r[0][2]?Ju(r[0][0],r[0][1]):function(l){return l===e||xa(l,e,r)}}function yu(e,r){return Za(e)&&Qu(r)?Ju(ut(e),r):function(l){var c=uo(l,e);return c===t&&c===r?co(l,e):tr(r,c,O|P)}}function ts(e,r,l,c,d){e!==r&&Na(r,function(g,v){if(d||(d=new jn),Ce(g))Ng(e,r,v,l,ts,c,d);else{var T=c?c(no(e,v),g,v+"",e,r,d):t;T===t&&(T=g),ka(e,v,T)}},gn)}function Ng(e,r,l,c,d,g,v){var T=no(e,l),D=no(r,l),F=v.get(D);if(F){ka(e,l,F);return}var N=g?g(T,D,l+"",e,r,v):t,x=N===t;if(x){var B=Z(D),Y=!B&&qt(D),z=!B&&!Y&&xi(D);N=D,B||Y||z?Z(T)?N=T:$e(T)?N=dn(T):Y?(x=!1,N=Fu(D,!0)):z?(x=!1,N=Nu(D,!0)):N=[]:or(D)||li(D)?(N=T,li(T)?N=Ac(T):(!Ce(T)||Dt(T))&&(N=zu(D))):x=!1}x&&(v.set(D,N),d(N,D,c,g,v),v.delete(D)),ka(e,l,N)}function vu(e,r){var l=e.length;if(l)return r+=r<0?l:0,Et(r,l)?e[r]:t}function bu(e,r,l){r.length?r=ke(r,function(g){return Z(g)?function(v){return si(v,g.length===1?g[0]:g)}:g}):r=[mn];var c=-1;r=ke(r,wn(H()));var d=gu(e,function(g,v,T){var D=ke(r,function(F){return F(g)});return{criteria:D,index:++c,value:g}});return ip(d,function(g,v){return Wg(g,v,l)})}function Cg(e,r){return Tu(e,r,function(l,c){return co(e,c)})}function Tu(e,r,l){for(var c=-1,d=r.length,g={};++c<d;){var v=r[c],T=si(e,v);l(T,v)&&ir(g,Wt(v,e),T)}return g}function Og(e){return function(r){return si(r,e)}}function Ba(e,r,l,c){var d=c?tp:Di,g=-1,v=r.length,T=e;for(e===r&&(r=dn(r)),l&&(T=ke(e,wn(l)));++g<v;)for(var D=0,F=r[g],N=l?l(F):F;(D=d(T,N,D,c))>-1;)T!==e&&jr.call(T,D,1),jr.call(e,D,1);return e}function wu(e,r){for(var l=e?r.length:0,c=l-1;l--;){var d=r[l];if(l==c||d!==g){var g=d;Et(d)?jr.call(e,d,1):Ga(e,d)}}return e}function Ua(e,r){return e+Qr(nu()*(r-e+1))}function Rg(e,r,l,c){for(var d=-1,g=He(zr((r-e)/(l||1)),0),v=I(g);g--;)v[c?g:++d]=e,e+=l;return v}function $a(e,r){var l="";if(!e||r<1||r>Vn)return l;do r%2&&(l+=e),r=Qr(r/2),r&&(e+=e);while(r);return l}function ie(e,r){return to(Ku(e,r,mn),e+"")}function xg(e){return ru(Li(e))}function Lg(e,r){var l=Li(e);return hs(l,ri(r,0,l.length))}function ir(e,r,l,c){if(!Ce(e))return e;r=Wt(r,e);for(var d=-1,g=r.length,v=g-1,T=e;T!=null&&++d<g;){var D=ut(r[d]),F=l;if(D==="__proto__"||D==="constructor"||D==="prototype")return e;if(d!=v){var N=T[D];F=c?c(N,D,T):t,F===t&&(F=Ce(N)?N:Et(r[d+1])?[]:{})}Zi(T,D,F),T=T[D]}return e}var Eu=Jr?function(e,r){return Jr.set(e,r),e}:mn,Pg=Hr?function(e,r){return Hr(e,"toString",{configurable:!0,enumerable:!1,value:ho(r),writable:!0})}:mn;function Bg(e){return hs(Li(e))}function Pn(e,r,l){var c=-1,d=e.length;r<0&&(r=-r>d?0:d+r),l=l>d?d:l,l<0&&(l+=d),d=r>l?0:l-r>>>0,r>>>=0;for(var g=I(d);++c<d;)g[c]=e[c+r];return g}function Ug(e,r){var l;return Gt(e,function(c,d,g){return l=r(c,d,g),!l}),!!l}function is(e,r,l){var c=0,d=e==null?c:e.length;if(typeof r=="number"&&r===r&&d<=V){for(;c<d;){var g=c+d>>>1,v=e[g];v!==null&&!Dn(v)&&(l?v<=r:v<r)?c=g+1:d=g}return d}return Ma(e,r,mn,l)}function Ma(e,r,l,c){var d=0,g=e==null?0:e.length;if(g===0)return 0;r=l(r);for(var v=r!==r,T=r===null,D=Dn(r),F=r===t;d<g;){var N=Qr((d+g)/2),x=l(e[N]),B=x!==t,Y=x===null,z=x===x,te=Dn(x);if(v)var Q=c||z;else F?Q=z&&(c||B):T?Q=z&&B&&(c||!Y):D?Q=z&&B&&!Y&&(c||!te):Y||te?Q=!1:Q=c?x<=r:x<r;Q?d=N+1:g=N}return tn(g,A)}function Du(e,r){for(var l=-1,c=e.length,d=0,g=[];++l<c;){var v=e[l],T=r?r(v):v;if(!l||!Hn(T,D)){var D=T;g[d++]=v===0?0:v}}return g}function Iu(e){return typeof e=="number"?e:Dn(e)?Zt:+e}function En(e){if(typeof e=="string")return e;if(Z(e))return ke(e,En)+"";if(Dn(e))return tu?tu.call(e):"";var r=e+"";return r=="0"&&1/e==-at?"-0":r}function Vt(e,r,l){var c=-1,d=Pr,g=e.length,v=!0,T=[],D=T;if(l)v=!1,d=ga;else if(g>=s){var F=r?null:Qg(e);if(F)return Ur(F);v=!1,d=Hi,D=new ii}else D=r?[]:T;e:for(;++c<g;){var N=e[c],x=r?r(N):N;if(N=l||N!==0?N:0,v&&x===x){for(var B=D.length;B--;)if(D[B]===x)continue e;r&&D.push(x),T.push(N)}else d(D,x,l)||(D!==T&&D.push(x),T.push(N))}return T}function Ga(e,r){return r=Wt(r,e),e=Xu(e,r),e==null||delete e[ut(Bn(r))]}function _u(e,r,l,c){return ir(e,r,l(si(e,r)),c)}function rs(e,r,l,c){for(var d=e.length,g=c?d:-1;(c?g--:++g<d)&&r(e[g],g,e););return l?Pn(e,c?0:g,c?g+1:d):Pn(e,c?g+1:0,c?d:g)}function Au(e,r){var l=e;return l instanceof oe&&(l=l.value()),ma(r,function(c,d){return d.func.apply(d.thisArg,Ut([c],d.args))},l)}function Va(e,r,l){var c=e.length;if(c<2)return c?Vt(e[0]):[];for(var d=-1,g=I(c);++d<c;)for(var v=e[d],T=-1;++T<c;)T!=d&&(g[d]=er(g[d]||v,e[T],r,l));return Vt(Xe(g,1),r,l)}function Su(e,r,l){for(var c=-1,d=e.length,g=r.length,v={};++c<d;){var T=c<g?r[c]:t;l(v,e[c],T)}return v}function Wa(e){return $e(e)?e:[]}function Ya(e){return typeof e=="function"?e:mn}function Wt(e,r){return Z(e)?e:Za(e,r)?[e]:tc(ge(e))}var $g=ie;function Yt(e,r,l){var c=e.length;return l=l===t?c:l,!r&&l>=c?e:Pn(e,r,l)}var ku=Ap||function(e){return Ke.clearTimeout(e)};function Fu(e,r){if(r)return e.slice();var l=e.length,c=Jl?Jl(l):new e.constructor(l);return e.copy(c),c}function qa(e){var r=new e.constructor(e.byteLength);return new Yr(r).set(new Yr(e)),r}function Mg(e,r){var l=r?qa(e.buffer):e.buffer;return new e.constructor(l,e.byteOffset,e.byteLength)}function Gg(e){var r=new e.constructor(e.source,hl.exec(e));return r.lastIndex=e.lastIndex,r}function Vg(e){return Xi?we(Xi.call(e)):{}}function Nu(e,r){var l=r?qa(e.buffer):e.buffer;return new e.constructor(l,e.byteOffset,e.length)}function Cu(e,r){if(e!==r){var l=e!==t,c=e===null,d=e===e,g=Dn(e),v=r!==t,T=r===null,D=r===r,F=Dn(r);if(!T&&!F&&!g&&e>r||g&&v&&D&&!T&&!F||c&&v&&D||!l&&D||!d)return 1;if(!c&&!g&&!F&&e<r||F&&l&&d&&!c&&!g||T&&l&&d||!v&&d||!D)return-1}return 0}function Wg(e,r,l){for(var c=-1,d=e.criteria,g=r.criteria,v=d.length,T=l.length;++c<v;){var D=Cu(d[c],g[c]);if(D){if(c>=T)return D;var F=l[c];return D*(F=="desc"?-1:1)}}return e.index-r.index}function Ou(e,r,l,c){for(var d=-1,g=e.length,v=l.length,T=-1,D=r.length,F=He(g-v,0),N=I(D+F),x=!c;++T<D;)N[T]=r[T];for(;++d<v;)(x||d<g)&&(N[l[d]]=e[d]);for(;F--;)N[T++]=e[d++];return N}function Ru(e,r,l,c){for(var d=-1,g=e.length,v=-1,T=l.length,D=-1,F=r.length,N=He(g-T,0),x=I(N+F),B=!c;++d<N;)x[d]=e[d];for(var Y=d;++D<F;)x[Y+D]=r[D];for(;++v<T;)(B||d<g)&&(x[Y+l[v]]=e[d++]);return x}function dn(e,r){var l=-1,c=e.length;for(r||(r=I(c));++l<c;)r[l]=e[l];return r}function lt(e,r,l,c){var d=!l;l||(l={});for(var g=-1,v=r.length;++g<v;){var T=r[g],D=c?c(l[T],e[T],T,l,e):t;D===t&&(D=e[T]),d?bt(l,T,D):Zi(l,T,D)}return l}function Yg(e,r){return lt(e,Xa(e),r)}function qg(e,r){return lt(e,ju(e),r)}function ss(e,r){return function(l,c){var d=Z(l)?Jd:dg,g=r?r():{};return d(l,e,H(c,2),g)}}function Ci(e){return ie(function(r,l){var c=-1,d=l.length,g=d>1?l[d-1]:t,v=d>2?l[2]:t;for(g=e.length>3&&typeof g=="function"?(d--,g):t,v&&un(l[0],l[1],v)&&(g=d<3?t:g,d=1),r=we(r);++c<d;){var T=l[c];T&&e(r,T,c,g)}return r})}function xu(e,r){return function(l,c){if(l==null)return l;if(!pn(l))return e(l,c);for(var d=l.length,g=r?d:-1,v=we(l);(r?g--:++g<d)&&c(v[g],g,v)!==!1;);return l}}function Lu(e){return function(r,l,c){for(var d=-1,g=we(r),v=c(r),T=v.length;T--;){var D=v[e?T:++d];if(l(g[D],D,g)===!1)break}return r}}function jg(e,r,l){var c=r&q,d=rr(e);function g(){var v=this&&this!==Ke&&this instanceof g?d:e;return v.apply(c?l:this,arguments)}return g}function Pu(e){return function(r){r=ge(r);var l=Ii(r)?qn(r):t,c=l?l[0]:r.charAt(0),d=l?Yt(l,1).join(""):r.slice(1);return c[e]()+d}}function Oi(e){return function(r){return ma(xc(Rc(r).replace(Pd,"")),e,"")}}function rr(e){return function(){var r=arguments;switch(r.length){case 0:return new e;case 1:return new e(r[0]);case 2:return new e(r[0],r[1]);case 3:return new e(r[0],r[1],r[2]);case 4:return new e(r[0],r[1],r[2],r[3]);case 5:return new e(r[0],r[1],r[2],r[3],r[4]);case 6:return new e(r[0],r[1],r[2],r[3],r[4],r[5]);case 7:return new e(r[0],r[1],r[2],r[3],r[4],r[5],r[6])}var l=Ni(e.prototype),c=e.apply(l,r);return Ce(c)?c:l}}function Hg(e,r,l){var c=rr(e);function d(){for(var g=arguments.length,v=I(g),T=g,D=Ri(d);T--;)v[T]=arguments[T];var F=g<3&&v[0]!==D&&v[g-1]!==D?[]:$t(v,D);if(g-=F.length,g<l)return Gu(e,r,as,d.placeholder,t,v,F,t,t,l-g);var N=this&&this!==Ke&&this instanceof d?c:e;return Tn(N,this,v)}return d}function Bu(e){return function(r,l,c){var d=we(r);if(!pn(r)){var g=H(l,3);r=ze(r),l=function(T){return g(d[T],T,d)}}var v=e(r,l,c);return v>-1?d[g?r[v]:v]:t}}function Uu(e){return wt(function(r){var l=r.length,c=l,d=xn.prototype.thru;for(e&&r.reverse();c--;){var g=r[c];if(typeof g!="function")throw new Rn(u);if(d&&!v&&cs(g)=="wrapper")var v=new xn([],!0)}for(c=v?c:l;++c<l;){g=r[c];var T=cs(g),D=T=="wrapper"?Ja(g):t;D&&eo(D[0])&&D[1]==(en|me|xe|gt)&&!D[4].length&&D[9]==1?v=v[cs(D[0])].apply(v,D[3]):v=g.length==1&&eo(g)?v[T]():v.thru(g)}return function(){var F=arguments,N=F[0];if(v&&F.length==1&&Z(N))return v.plant(N).value();for(var x=0,B=l?r[x].apply(this,F):N;++x<l;)B=r[x].call(this,B);return B}})}function as(e,r,l,c,d,g,v,T,D,F){var N=r&en,x=r&q,B=r&ce,Y=r&(me|Ne),z=r&R,te=B?t:rr(e);function Q(){for(var se=arguments.length,ue=I(se),In=se;In--;)ue[In]=arguments[In];if(Y)var cn=Ri(Q),_n=sp(ue,cn);if(c&&(ue=Ou(ue,c,d,Y)),g&&(ue=Ru(ue,g,v,Y)),se-=_n,Y&&se<F){var Me=$t(ue,cn);return Gu(e,r,as,Q.placeholder,l,ue,Me,T,D,F-se)}var zn=x?l:this,_t=B?zn[e]:e;return se=ue.length,T?ue=dm(ue,T):z&&se>1&&ue.reverse(),N&&D<se&&(ue.length=D),this&&this!==Ke&&this instanceof Q&&(_t=te||rr(_t)),_t.apply(zn,ue)}return Q}function $u(e,r){return function(l,c){return wg(l,e,r(c),{})}}function os(e,r){return function(l,c){var d;if(l===t&&c===t)return r;if(l!==t&&(d=l),c!==t){if(d===t)return c;typeof l=="string"||typeof c=="string"?(l=En(l),c=En(c)):(l=Iu(l),c=Iu(c)),d=e(l,c)}return d}}function ja(e){return wt(function(r){return r=ke(r,wn(H())),ie(function(l){var c=this;return e(r,function(d){return Tn(d,c,l)})})})}function ls(e,r){r=r===t?" ":En(r);var l=r.length;if(l<2)return l?$a(r,e):r;var c=$a(r,zr(e/_i(r)));return Ii(r)?Yt(qn(c),0,e).join(""):c.slice(0,e)}function zg(e,r,l,c){var d=r&q,g=rr(e);function v(){for(var T=-1,D=arguments.length,F=-1,N=c.length,x=I(N+D),B=this&&this!==Ke&&this instanceof v?g:e;++F<N;)x[F]=c[F];for(;D--;)x[F++]=arguments[++T];return Tn(B,d?l:this,x)}return v}function Mu(e){return function(r,l,c){return c&&typeof c!="number"&&un(r,l,c)&&(l=c=t),r=It(r),l===t?(l=r,r=0):l=It(l),c=c===t?r<l?1:-1:It(c),Rg(r,l,c,e)}}function us(e){return function(r,l){return typeof r=="string"&&typeof l=="string"||(r=Un(r),l=Un(l)),e(r,l)}}function Gu(e,r,l,c,d,g,v,T,D,F){var N=r&me,x=N?v:t,B=N?t:v,Y=N?g:t,z=N?t:g;r|=N?xe:an,r&=~(N?an:xe),r&Ae||(r&=~(q|ce));var te=[e,r,d,Y,x,z,B,T,D,F],Q=l.apply(t,te);return eo(e)&&Zu(Q,te),Q.placeholder=c,ec(Q,e,r)}function Ha(e){var r=je[e];return function(l,c){if(l=Un(l),c=c==null?0:tn(ne(c),292),c&&eu(l)){var d=(ge(l)+"e").split("e"),g=r(d[0]+"e"+(+d[1]+c));return d=(ge(g)+"e").split("e"),+(d[0]+"e"+(+d[1]-c))}return r(l)}}var Qg=ki&&1/Ur(new ki([,-0]))[1]==at?function(e){return new ki(e)}:mo;function Vu(e){return function(r){var l=rn(r);return l==Wn?Da(r):l==Yn?hp(r):rp(r,e(r))}}function Tt(e,r,l,c,d,g,v,T){var D=r&ce;if(!D&&typeof e!="function")throw new Rn(u);var F=c?c.length:0;if(F||(r&=~(xe|an),c=d=t),v=v===t?v:He(ne(v),0),T=T===t?T:ne(T),F-=d?d.length:0,r&an){var N=c,x=d;c=d=t}var B=D?t:Ja(e),Y=[e,r,l,c,d,N,x,g,v,T];if(B&&cm(Y,B),e=Y[0],r=Y[1],l=Y[2],c=Y[3],d=Y[4],T=Y[9]=Y[9]===t?D?0:e.length:He(Y[9]-F,0),!T&&r&(me|Ne)&&(r&=~(me|Ne)),!r||r==q)var z=jg(e,r,l);else r==me||r==Ne?z=Hg(e,r,T):(r==xe||r==(q|xe))&&!d.length?z=zg(e,r,l,c):z=as.apply(t,Y);var te=B?Eu:Zu;return ec(te(z,Y),e,r)}function Wu(e,r,l,c){return e===t||Hn(e,Si[l])&&!ye.call(c,l)?r:e}function Yu(e,r,l,c,d,g){return Ce(e)&&Ce(r)&&(g.set(r,e),ts(e,r,t,Yu,g),g.delete(r)),e}function Jg(e){return or(e)?t:e}function qu(e,r,l,c,d,g){var v=l&O,T=e.length,D=r.length;if(T!=D&&!(v&&D>T))return!1;var F=g.get(e),N=g.get(r);if(F&&N)return F==r&&N==e;var x=-1,B=!0,Y=l&P?new ii:t;for(g.set(e,r),g.set(r,e);++x<T;){var z=e[x],te=r[x];if(c)var Q=v?c(te,z,x,r,e,g):c(z,te,x,e,r,g);if(Q!==t){if(Q)continue;B=!1;break}if(Y){if(!ya(r,function(se,ue){if(!Hi(Y,ue)&&(z===se||d(z,se,l,c,g)))return Y.push(ue)})){B=!1;break}}else if(!(z===te||d(z,te,l,c,g))){B=!1;break}}return g.delete(e),g.delete(r),B}function Kg(e,r,l,c,d,g,v){switch(l){case wi:if(e.byteLength!=r.byteLength||e.byteOffset!=r.byteOffset)return!1;e=e.buffer,r=r.buffer;case ji:return!(e.byteLength!=r.byteLength||!g(new Yr(e),new Yr(r)));case pe:case Nn:case Vi:return Hn(+e,+r);case Pt:return e.name==r.name&&e.message==r.message;case Wi:case Yi:return e==r+"";case Wn:var T=Da;case Yn:var D=c&O;if(T||(T=Ur),e.size!=r.size&&!D)return!1;var F=v.get(e);if(F)return F==r;c|=P,v.set(e,r);var N=qu(T(e),T(r),c,d,g,v);return v.delete(e),N;case Or:if(Xi)return Xi.call(e)==Xi.call(r)}return!1}function Xg(e,r,l,c,d,g){var v=l&O,T=za(e),D=T.length,F=za(r),N=F.length;if(D!=N&&!v)return!1;for(var x=D;x--;){var B=T[x];if(!(v?B in r:ye.call(r,B)))return!1}var Y=g.get(e),z=g.get(r);if(Y&&z)return Y==r&&z==e;var te=!0;g.set(e,r),g.set(r,e);for(var Q=v;++x<D;){B=T[x];var se=e[B],ue=r[B];if(c)var In=v?c(ue,se,B,r,e,g):c(se,ue,B,e,r,g);if(!(In===t?se===ue||d(se,ue,l,c,g):In)){te=!1;break}Q||(Q=B=="constructor")}if(te&&!Q){var cn=e.constructor,_n=r.constructor;cn!=_n&&"constructor"in e&&"constructor"in r&&!(typeof cn=="function"&&cn instanceof cn&&typeof _n=="function"&&_n instanceof _n)&&(te=!1)}return g.delete(e),g.delete(r),te}function wt(e){return to(Ku(e,t,ac),e+"")}function za(e){return fu(e,ze,Xa)}function Qa(e){return fu(e,gn,ju)}var Ja=Jr?function(e){return Jr.get(e)}:mo;function cs(e){for(var r=e.name+"",l=Fi[r],c=ye.call(Fi,r)?l.length:0;c--;){var d=l[c],g=d.func;if(g==null||g==e)return d.name}return r}function Ri(e){var r=ye.call(p,"placeholder")?p:e;return r.placeholder}function H(){var e=p.iteratee||po;return e=e===po?pu:e,arguments.length?e(arguments[0],arguments[1]):e}function fs(e,r){var l=e.__data__;return am(r)?l[typeof r=="string"?"string":"hash"]:l.map}function Ka(e){for(var r=ze(e),l=r.length;l--;){var c=r[l],d=e[c];r[l]=[c,d,Qu(d)]}return r}function ai(e,r){var l=up(e,r);return du(l)?l:t}function Zg(e){var r=ye.call(e,ni),l=e[ni];try{e[ni]=t;var c=!0}catch{}var d=Vr.call(e);return c&&(r?e[ni]=l:delete e[ni]),d}var Xa=_a?function(e){return e==null?[]:(e=we(e),Bt(_a(e),function(r){return Xl.call(e,r)}))}:yo,ju=_a?function(e){for(var r=[];e;)Ut(r,Xa(e)),e=qr(e);return r}:yo,rn=ln;(Aa&&rn(new Aa(new ArrayBuffer(1)))!=wi||Qi&&rn(new Qi)!=Wn||Sa&&rn(Sa.resolve())!=ll||ki&&rn(new ki)!=Yn||Ji&&rn(new Ji)!=qi)&&(rn=function(e){var r=ln(e),l=r==mt?e.constructor:t,c=l?oi(l):"";if(c)switch(c){case Lp:return wi;case Pp:return Wn;case Bp:return ll;case Up:return Yn;case $p:return qi}return r});function em(e,r,l){for(var c=-1,d=l.length;++c<d;){var g=l[c],v=g.size;switch(g.type){case"drop":e+=v;break;case"dropRight":r-=v;break;case"take":r=tn(r,e+v);break;case"takeRight":e=He(e,r-v);break}}return{start:e,end:r}}function nm(e){var r=e.match(od);return r?r[1].split(ld):[]}function Hu(e,r,l){r=Wt(r,e);for(var c=-1,d=r.length,g=!1;++c<d;){var v=ut(r[c]);if(!(g=e!=null&&l(e,v)))break;e=e[v]}return g||++c!=d?g:(d=e==null?0:e.length,!!d&&vs(d)&&Et(v,d)&&(Z(e)||li(e)))}function tm(e){var r=e.length,l=new e.constructor(r);return r&&typeof e[0]=="string"&&ye.call(e,"index")&&(l.index=e.index,l.input=e.input),l}function zu(e){return typeof e.constructor=="function"&&!sr(e)?Ni(qr(e)):{}}function im(e,r,l){var c=e.constructor;switch(r){case ji:return qa(e);case pe:case Nn:return new c(+e);case wi:return Mg(e,l);case Ks:case Xs:case Zs:case ea:case na:case ta:case ia:case ra:case sa:return Nu(e,l);case Wn:return new c;case Vi:case Yi:return new c(e);case Wi:return Gg(e);case Yn:return new c;case Or:return Vg(e)}}function rm(e,r){var l=r.length;if(!l)return e;var c=l-1;return r[c]=(l>1?"& ":"")+r[c],r=r.join(l>2?", ":" "),e.replace(ad,`{
/* [wrapped with `+r+`] */
`)}function sm(e){return Z(e)||li(e)||!!(Zl&&e&&e[Zl])}function Et(e,r){var l=typeof e;return r=r??Vn,!!r&&(l=="number"||l!="symbol"&&yd.test(e))&&e>-1&&e%1==0&&e<r}function un(e,r,l){if(!Ce(l))return!1;var c=typeof r;return(c=="number"?pn(l)&&Et(r,l.length):c=="string"&&r in l)?Hn(l[r],e):!1}function Za(e,r){if(Z(e))return!1;var l=typeof e;return l=="number"||l=="symbol"||l=="boolean"||e==null||Dn(e)?!0:td.test(e)||!nd.test(e)||r!=null&&e in we(r)}function am(e){var r=typeof e;return r=="string"||r=="number"||r=="symbol"||r=="boolean"?e!=="__proto__":e===null}function eo(e){var r=cs(e),l=p[r];if(typeof l!="function"||!(r in oe.prototype))return!1;if(e===l)return!0;var c=Ja(l);return!!c&&e===c[0]}function om(e){return!!Ql&&Ql in e}var lm=Mr?Dt:vo;function sr(e){var r=e&&e.constructor,l=typeof r=="function"&&r.prototype||Si;return e===l}function Qu(e){return e===e&&!Ce(e)}function Ju(e,r){return function(l){return l==null?!1:l[e]===r&&(r!==t||e in we(l))}}function um(e){var r=ms(e,function(c){return l.size===m&&l.clear(),c}),l=r.cache;return r}function cm(e,r){var l=e[1],c=r[1],d=l|c,g=d<(q|ce|en),v=c==en&&l==me||c==en&&l==gt&&e[7].length<=r[8]||c==(en|gt)&&r[7].length<=r[8]&&l==me;if(!(g||v))return e;c&q&&(e[2]=r[2],d|=l&q?0:Ae);var T=r[3];if(T){var D=e[3];e[3]=D?Ou(D,T,r[4]):T,e[4]=D?$t(e[3],y):r[4]}return T=r[5],T&&(D=e[5],e[5]=D?Ru(D,T,r[6]):T,e[6]=D?$t(e[5],y):r[6]),T=r[7],T&&(e[7]=T),c&en&&(e[8]=e[8]==null?r[8]:tn(e[8],r[8])),e[9]==null&&(e[9]=r[9]),e[0]=r[0],e[1]=d,e}function fm(e){var r=[];if(e!=null)for(var l in we(e))r.push(l);return r}function hm(e){return Vr.call(e)}function Ku(e,r,l){return r=He(r===t?e.length-1:r,0),function(){for(var c=arguments,d=-1,g=He(c.length-r,0),v=I(g);++d<g;)v[d]=c[r+d];d=-1;for(var T=I(r+1);++d<r;)T[d]=c[d];return T[r]=l(v),Tn(e,this,T)}}function Xu(e,r){return r.length<2?e:si(e,Pn(r,0,-1))}function dm(e,r){for(var l=e.length,c=tn(r.length,l),d=dn(e);c--;){var g=r[c];e[c]=Et(g,l)?d[g]:t}return e}function no(e,r){if(!(r==="constructor"&&typeof e[r]=="function")&&r!="__proto__")return e[r]}var Zu=nc(Eu),ar=kp||function(e,r){return Ke.setTimeout(e,r)},to=nc(Pg);function ec(e,r,l){var c=r+"";return to(e,rm(c,pm(nm(c),l)))}function nc(e){var r=0,l=0;return function(){var c=Op(),d=Xt-(c-l);if(l=c,d>0){if(++r>=Lt)return arguments[0]}else r=0;return e.apply(t,arguments)}}function hs(e,r){var l=-1,c=e.length,d=c-1;for(r=r===t?c:r;++l<r;){var g=Ua(l,d),v=e[g];e[g]=e[l],e[l]=v}return e.length=r,e}var tc=um(function(e){var r=[];return e.charCodeAt(0)===46&&r.push(""),e.replace(id,function(l,c,d,g){r.push(d?g.replace(fd,"$1"):c||l)}),r});function ut(e){if(typeof e=="string"||Dn(e))return e;var r=e+"";return r=="0"&&1/e==-at?"-0":r}function oi(e){if(e!=null){try{return Gr.call(e)}catch{}try{return e+""}catch{}}return""}function pm(e,r){return On(U,function(l){var c="_."+l[0];r&l[1]&&!Pr(e,c)&&e.push(c)}),e.sort()}function ic(e){if(e instanceof oe)return e.clone();var r=new xn(e.__wrapped__,e.__chain__);return r.__actions__=dn(e.__actions__),r.__index__=e.__index__,r.__values__=e.__values__,r}function gm(e,r,l){(l?un(e,r,l):r===t)?r=1:r=He(ne(r),0);var c=e==null?0:e.length;if(!c||r<1)return[];for(var d=0,g=0,v=I(zr(c/r));d<c;)v[g++]=Pn(e,d,d+=r);return v}function mm(e){for(var r=-1,l=e==null?0:e.length,c=0,d=[];++r<l;){var g=e[r];g&&(d[c++]=g)}return d}function ym(){var e=arguments.length;if(!e)return[];for(var r=I(e-1),l=arguments[0],c=e;c--;)r[c-1]=arguments[c];return Ut(Z(l)?dn(l):[l],Xe(r,1))}var vm=ie(function(e,r){return $e(e)?er(e,Xe(r,1,$e,!0)):[]}),bm=ie(function(e,r){var l=Bn(r);return $e(l)&&(l=t),$e(e)?er(e,Xe(r,1,$e,!0),H(l,2)):[]}),Tm=ie(function(e,r){var l=Bn(r);return $e(l)&&(l=t),$e(e)?er(e,Xe(r,1,$e,!0),t,l):[]});function wm(e,r,l){var c=e==null?0:e.length;return c?(r=l||r===t?1:ne(r),Pn(e,r<0?0:r,c)):[]}function Em(e,r,l){var c=e==null?0:e.length;return c?(r=l||r===t?1:ne(r),r=c-r,Pn(e,0,r<0?0:r)):[]}function Dm(e,r){return e&&e.length?rs(e,H(r,3),!0,!0):[]}function Im(e,r){return e&&e.length?rs(e,H(r,3),!0):[]}function _m(e,r,l,c){var d=e==null?0:e.length;return d?(l&&typeof l!="number"&&un(e,r,l)&&(l=0,c=d),yg(e,r,l,c)):[]}function rc(e,r,l){var c=e==null?0:e.length;if(!c)return-1;var d=l==null?0:ne(l);return d<0&&(d=He(c+d,0)),Br(e,H(r,3),d)}function sc(e,r,l){var c=e==null?0:e.length;if(!c)return-1;var d=c-1;return l!==t&&(d=ne(l),d=l<0?He(c+d,0):tn(d,c-1)),Br(e,H(r,3),d,!0)}function ac(e){var r=e==null?0:e.length;return r?Xe(e,1):[]}function Am(e){var r=e==null?0:e.length;return r?Xe(e,at):[]}function Sm(e,r){var l=e==null?0:e.length;return l?(r=r===t?1:ne(r),Xe(e,r)):[]}function km(e){for(var r=-1,l=e==null?0:e.length,c={};++r<l;){var d=e[r];c[d[0]]=d[1]}return c}function oc(e){return e&&e.length?e[0]:t}function Fm(e,r,l){var c=e==null?0:e.length;if(!c)return-1;var d=l==null?0:ne(l);return d<0&&(d=He(c+d,0)),Di(e,r,d)}function Nm(e){var r=e==null?0:e.length;return r?Pn(e,0,-1):[]}var Cm=ie(function(e){var r=ke(e,Wa);return r.length&&r[0]===e[0]?Ra(r):[]}),Om=ie(function(e){var r=Bn(e),l=ke(e,Wa);return r===Bn(l)?r=t:l.pop(),l.length&&l[0]===e[0]?Ra(l,H(r,2)):[]}),Rm=ie(function(e){var r=Bn(e),l=ke(e,Wa);return r=typeof r=="function"?r:t,r&&l.pop(),l.length&&l[0]===e[0]?Ra(l,t,r):[]});function xm(e,r){return e==null?"":Np.call(e,r)}function Bn(e){var r=e==null?0:e.length;return r?e[r-1]:t}function Lm(e,r,l){var c=e==null?0:e.length;if(!c)return-1;var d=c;return l!==t&&(d=ne(l),d=d<0?He(c+d,0):tn(d,c-1)),r===r?pp(e,r,d):Br(e,Gl,d,!0)}function Pm(e,r){return e&&e.length?vu(e,ne(r)):t}var Bm=ie(lc);function lc(e,r){return e&&e.length&&r&&r.length?Ba(e,r):e}function Um(e,r,l){return e&&e.length&&r&&r.length?Ba(e,r,H(l,2)):e}function $m(e,r,l){return e&&e.length&&r&&r.length?Ba(e,r,t,l):e}var Mm=wt(function(e,r){var l=e==null?0:e.length,c=Fa(e,r);return wu(e,ke(r,function(d){return Et(d,l)?+d:d}).sort(Cu)),c});function Gm(e,r){var l=[];if(!(e&&e.length))return l;var c=-1,d=[],g=e.length;for(r=H(r,3);++c<g;){var v=e[c];r(v,c,e)&&(l.push(v),d.push(c))}return wu(e,d),l}function io(e){return e==null?e:xp.call(e)}function Vm(e,r,l){var c=e==null?0:e.length;return c?(l&&typeof l!="number"&&un(e,r,l)?(r=0,l=c):(r=r==null?0:ne(r),l=l===t?c:ne(l)),Pn(e,r,l)):[]}function Wm(e,r){return is(e,r)}function Ym(e,r,l){return Ma(e,r,H(l,2))}function qm(e,r){var l=e==null?0:e.length;if(l){var c=is(e,r);if(c<l&&Hn(e[c],r))return c}return-1}function jm(e,r){return is(e,r,!0)}function Hm(e,r,l){return Ma(e,r,H(l,2),!0)}function zm(e,r){var l=e==null?0:e.length;if(l){var c=is(e,r,!0)-1;if(Hn(e[c],r))return c}return-1}function Qm(e){return e&&e.length?Du(e):[]}function Jm(e,r){return e&&e.length?Du(e,H(r,2)):[]}function Km(e){var r=e==null?0:e.length;return r?Pn(e,1,r):[]}function Xm(e,r,l){return e&&e.length?(r=l||r===t?1:ne(r),Pn(e,0,r<0?0:r)):[]}function Zm(e,r,l){var c=e==null?0:e.length;return c?(r=l||r===t?1:ne(r),r=c-r,Pn(e,r<0?0:r,c)):[]}function ey(e,r){return e&&e.length?rs(e,H(r,3),!1,!0):[]}function ny(e,r){return e&&e.length?rs(e,H(r,3)):[]}var ty=ie(function(e){return Vt(Xe(e,1,$e,!0))}),iy=ie(function(e){var r=Bn(e);return $e(r)&&(r=t),Vt(Xe(e,1,$e,!0),H(r,2))}),ry=ie(function(e){var r=Bn(e);return r=typeof r=="function"?r:t,Vt(Xe(e,1,$e,!0),t,r)});function sy(e){return e&&e.length?Vt(e):[]}function ay(e,r){return e&&e.length?Vt(e,H(r,2)):[]}function oy(e,r){return r=typeof r=="function"?r:t,e&&e.length?Vt(e,t,r):[]}function ro(e){if(!(e&&e.length))return[];var r=0;return e=Bt(e,function(l){if($e(l))return r=He(l.length,r),!0}),wa(r,function(l){return ke(e,va(l))})}function uc(e,r){if(!(e&&e.length))return[];var l=ro(e);return r==null?l:ke(l,function(c){return Tn(r,t,c)})}var ly=ie(function(e,r){return $e(e)?er(e,r):[]}),uy=ie(function(e){return Va(Bt(e,$e))}),cy=ie(function(e){var r=Bn(e);return $e(r)&&(r=t),Va(Bt(e,$e),H(r,2))}),fy=ie(function(e){var r=Bn(e);return r=typeof r=="function"?r:t,Va(Bt(e,$e),t,r)}),hy=ie(ro);function dy(e,r){return Su(e||[],r||[],Zi)}function py(e,r){return Su(e||[],r||[],ir)}var gy=ie(function(e){var r=e.length,l=r>1?e[r-1]:t;return l=typeof l=="function"?(e.pop(),l):t,uc(e,l)});function cc(e){var r=p(e);return r.__chain__=!0,r}function my(e,r){return r(e),e}function ds(e,r){return r(e)}var yy=wt(function(e){var r=e.length,l=r?e[0]:0,c=this.__wrapped__,d=function(g){return Fa(g,e)};return r>1||this.__actions__.length||!(c instanceof oe)||!Et(l)?this.thru(d):(c=c.slice(l,+l+(r?1:0)),c.__actions__.push({func:ds,args:[d],thisArg:t}),new xn(c,this.__chain__).thru(function(g){return r&&!g.length&&g.push(t),g}))});function vy(){return cc(this)}function by(){return new xn(this.value(),this.__chain__)}function Ty(){this.__values__===t&&(this.__values__=Ic(this.value()));var e=this.__index__>=this.__values__.length,r=e?t:this.__values__[this.__index__++];return{done:e,value:r}}function wy(){return this}function Ey(e){for(var r,l=this;l instanceof Xr;){var c=ic(l);c.__index__=0,c.__values__=t,r?d.__wrapped__=c:r=c;var d=c;l=l.__wrapped__}return d.__wrapped__=e,r}function Dy(){var e=this.__wrapped__;if(e instanceof oe){var r=e;return this.__actions__.length&&(r=new oe(this)),r=r.reverse(),r.__actions__.push({func:ds,args:[io],thisArg:t}),new xn(r,this.__chain__)}return this.thru(io)}function Iy(){return Au(this.__wrapped__,this.__actions__)}var _y=ss(function(e,r,l){ye.call(e,l)?++e[l]:bt(e,l,1)});function Ay(e,r,l){var c=Z(e)?$l:mg;return l&&un(e,r,l)&&(r=t),c(e,H(r,3))}function Sy(e,r){var l=Z(e)?Bt:uu;return l(e,H(r,3))}var ky=Bu(rc),Fy=Bu(sc);function Ny(e,r){return Xe(ps(e,r),1)}function Cy(e,r){return Xe(ps(e,r),at)}function Oy(e,r,l){return l=l===t?1:ne(l),Xe(ps(e,r),l)}function fc(e,r){var l=Z(e)?On:Gt;return l(e,H(r,3))}function hc(e,r){var l=Z(e)?Kd:lu;return l(e,H(r,3))}var Ry=ss(function(e,r,l){ye.call(e,l)?e[l].push(r):bt(e,l,[r])});function xy(e,r,l,c){e=pn(e)?e:Li(e),l=l&&!c?ne(l):0;var d=e.length;return l<0&&(l=He(d+l,0)),bs(e)?l<=d&&e.indexOf(r,l)>-1:!!d&&Di(e,r,l)>-1}var Ly=ie(function(e,r,l){var c=-1,d=typeof r=="function",g=pn(e)?I(e.length):[];return Gt(e,function(v){g[++c]=d?Tn(r,v,l):nr(v,r,l)}),g}),Py=ss(function(e,r,l){bt(e,l,r)});function ps(e,r){var l=Z(e)?ke:gu;return l(e,H(r,3))}function By(e,r,l,c){return e==null?[]:(Z(r)||(r=r==null?[]:[r]),l=c?t:l,Z(l)||(l=l==null?[]:[l]),bu(e,r,l))}var Uy=ss(function(e,r,l){e[l?0:1].push(r)},function(){return[[],[]]});function $y(e,r,l){var c=Z(e)?ma:Wl,d=arguments.length<3;return c(e,H(r,4),l,d,Gt)}function My(e,r,l){var c=Z(e)?Xd:Wl,d=arguments.length<3;return c(e,H(r,4),l,d,lu)}function Gy(e,r){var l=Z(e)?Bt:uu;return l(e,ys(H(r,3)))}function Vy(e){var r=Z(e)?ru:xg;return r(e)}function Wy(e,r,l){(l?un(e,r,l):r===t)?r=1:r=ne(r);var c=Z(e)?fg:Lg;return c(e,r)}function Yy(e){var r=Z(e)?hg:Bg;return r(e)}function qy(e){if(e==null)return 0;if(pn(e))return bs(e)?_i(e):e.length;var r=rn(e);return r==Wn||r==Yn?e.size:La(e).length}function jy(e,r,l){var c=Z(e)?ya:Ug;return l&&un(e,r,l)&&(r=t),c(e,H(r,3))}var Hy=ie(function(e,r){if(e==null)return[];var l=r.length;return l>1&&un(e,r[0],r[1])?r=[]:l>2&&un(r[0],r[1],r[2])&&(r=[r[0]]),bu(e,Xe(r,1),[])}),gs=Sp||function(){return Ke.Date.now()};function zy(e,r){if(typeof r!="function")throw new Rn(u);return e=ne(e),function(){if(--e<1)return r.apply(this,arguments)}}function dc(e,r,l){return r=l?t:r,r=e&&r==null?e.length:r,Tt(e,en,t,t,t,t,r)}function pc(e,r){var l;if(typeof r!="function")throw new Rn(u);return e=ne(e),function(){return--e>0&&(l=r.apply(this,arguments)),e<=1&&(r=t),l}}var so=ie(function(e,r,l){var c=q;if(l.length){var d=$t(l,Ri(so));c|=xe}return Tt(e,c,r,l,d)}),gc=ie(function(e,r,l){var c=q|ce;if(l.length){var d=$t(l,Ri(gc));c|=xe}return Tt(r,c,e,l,d)});function mc(e,r,l){r=l?t:r;var c=Tt(e,me,t,t,t,t,t,r);return c.placeholder=mc.placeholder,c}function yc(e,r,l){r=l?t:r;var c=Tt(e,Ne,t,t,t,t,t,r);return c.placeholder=yc.placeholder,c}function vc(e,r,l){var c,d,g,v,T,D,F=0,N=!1,x=!1,B=!0;if(typeof e!="function")throw new Rn(u);r=Un(r)||0,Ce(l)&&(N=!!l.leading,x="maxWait"in l,g=x?He(Un(l.maxWait)||0,r):g,B="trailing"in l?!!l.trailing:B);function Y(Me){var zn=c,_t=d;return c=d=t,F=Me,v=e.apply(_t,zn),v}function z(Me){return F=Me,T=ar(se,r),N?Y(Me):v}function te(Me){var zn=Me-D,_t=Me-F,Bc=r-zn;return x?tn(Bc,g-_t):Bc}function Q(Me){var zn=Me-D,_t=Me-F;return D===t||zn>=r||zn<0||x&&_t>=g}function se(){var Me=gs();if(Q(Me))return ue(Me);T=ar(se,te(Me))}function ue(Me){return T=t,B&&c?Y(Me):(c=d=t,v)}function In(){T!==t&&ku(T),F=0,c=D=d=T=t}function cn(){return T===t?v:ue(gs())}function _n(){var Me=gs(),zn=Q(Me);if(c=arguments,d=this,D=Me,zn){if(T===t)return z(D);if(x)return ku(T),T=ar(se,r),Y(D)}return T===t&&(T=ar(se,r)),v}return _n.cancel=In,_n.flush=cn,_n}var Qy=ie(function(e,r){return ou(e,1,r)}),Jy=ie(function(e,r,l){return ou(e,Un(r)||0,l)});function Ky(e){return Tt(e,R)}function ms(e,r){if(typeof e!="function"||r!=null&&typeof r!="function")throw new Rn(u);var l=function(){var c=arguments,d=r?r.apply(this,c):c[0],g=l.cache;if(g.has(d))return g.get(d);var v=e.apply(this,c);return l.cache=g.set(d,v)||g,v};return l.cache=new(ms.Cache||vt),l}ms.Cache=vt;function ys(e){if(typeof e!="function")throw new Rn(u);return function(){var r=arguments;switch(r.length){case 0:return!e.call(this);case 1:return!e.call(this,r[0]);case 2:return!e.call(this,r[0],r[1]);case 3:return!e.call(this,r[0],r[1],r[2])}return!e.apply(this,r)}}function Xy(e){return pc(2,e)}var Zy=$g(function(e,r){r=r.length==1&&Z(r[0])?ke(r[0],wn(H())):ke(Xe(r,1),wn(H()));var l=r.length;return ie(function(c){for(var d=-1,g=tn(c.length,l);++d<g;)c[d]=r[d].call(this,c[d]);return Tn(e,this,c)})}),ao=ie(function(e,r){var l=$t(r,Ri(ao));return Tt(e,xe,t,r,l)}),bc=ie(function(e,r){var l=$t(r,Ri(bc));return Tt(e,an,t,r,l)}),ev=wt(function(e,r){return Tt(e,gt,t,t,t,r)});function nv(e,r){if(typeof e!="function")throw new Rn(u);return r=r===t?r:ne(r),ie(e,r)}function tv(e,r){if(typeof e!="function")throw new Rn(u);return r=r==null?0:He(ne(r),0),ie(function(l){var c=l[r],d=Yt(l,0,r);return c&&Ut(d,c),Tn(e,this,d)})}function iv(e,r,l){var c=!0,d=!0;if(typeof e!="function")throw new Rn(u);return Ce(l)&&(c="leading"in l?!!l.leading:c,d="trailing"in l?!!l.trailing:d),vc(e,r,{leading:c,maxWait:r,trailing:d})}function rv(e){return dc(e,1)}function sv(e,r){return ao(Ya(r),e)}function av(){if(!arguments.length)return[];var e=arguments[0];return Z(e)?e:[e]}function ov(e){return Ln(e,_)}function lv(e,r){return r=typeof r=="function"?r:t,Ln(e,_,r)}function uv(e){return Ln(e,b|_)}function cv(e,r){return r=typeof r=="function"?r:t,Ln(e,b|_,r)}function fv(e,r){return r==null||au(e,r,ze(r))}function Hn(e,r){return e===r||e!==e&&r!==r}var hv=us(Oa),dv=us(function(e,r){return e>=r}),li=hu(function(){return arguments}())?hu:function(e){return Le(e)&&ye.call(e,"callee")&&!Xl.call(e,"callee")},Z=I.isArray,pv=Rl?wn(Rl):Eg;function pn(e){return e!=null&&vs(e.length)&&!Dt(e)}function $e(e){return Le(e)&&pn(e)}function gv(e){return e===!0||e===!1||Le(e)&&ln(e)==pe}var qt=Fp||vo,mv=xl?wn(xl):Dg;function yv(e){return Le(e)&&e.nodeType===1&&!or(e)}function vv(e){if(e==null)return!0;if(pn(e)&&(Z(e)||typeof e=="string"||typeof e.splice=="function"||qt(e)||xi(e)||li(e)))return!e.length;var r=rn(e);if(r==Wn||r==Yn)return!e.size;if(sr(e))return!La(e).length;for(var l in e)if(ye.call(e,l))return!1;return!0}function bv(e,r){return tr(e,r)}function Tv(e,r,l){l=typeof l=="function"?l:t;var c=l?l(e,r):t;return c===t?tr(e,r,t,l):!!c}function oo(e){if(!Le(e))return!1;var r=ln(e);return r==Pt||r==Gi||typeof e.message=="string"&&typeof e.name=="string"&&!or(e)}function wv(e){return typeof e=="number"&&eu(e)}function Dt(e){if(!Ce(e))return!1;var r=ln(e);return r==nn||r==ol||r==Ue||r==qh}function Tc(e){return typeof e=="number"&&e==ne(e)}function vs(e){return typeof e=="number"&&e>-1&&e%1==0&&e<=Vn}function Ce(e){var r=typeof e;return e!=null&&(r=="object"||r=="function")}function Le(e){return e!=null&&typeof e=="object"}var wc=Ll?wn(Ll):_g;function Ev(e,r){return e===r||xa(e,r,Ka(r))}function Dv(e,r,l){return l=typeof l=="function"?l:t,xa(e,r,Ka(r),l)}function Iv(e){return Ec(e)&&e!=+e}function _v(e){if(lm(e))throw new X(o);return du(e)}function Av(e){return e===null}function Sv(e){return e==null}function Ec(e){return typeof e=="number"||Le(e)&&ln(e)==Vi}function or(e){if(!Le(e)||ln(e)!=mt)return!1;var r=qr(e);if(r===null)return!0;var l=ye.call(r,"constructor")&&r.constructor;return typeof l=="function"&&l instanceof l&&Gr.call(l)==Dp}var lo=Pl?wn(Pl):Ag;function kv(e){return Tc(e)&&e>=-Vn&&e<=Vn}var Dc=Bl?wn(Bl):Sg;function bs(e){return typeof e=="string"||!Z(e)&&Le(e)&&ln(e)==Yi}function Dn(e){return typeof e=="symbol"||Le(e)&&ln(e)==Or}var xi=Ul?wn(Ul):kg;function Fv(e){return e===t}function Nv(e){return Le(e)&&rn(e)==qi}function Cv(e){return Le(e)&&ln(e)==Hh}var Ov=us(Pa),Rv=us(function(e,r){return e<=r});function Ic(e){if(!e)return[];if(pn(e))return bs(e)?qn(e):dn(e);if(zi&&e[zi])return fp(e[zi]());var r=rn(e),l=r==Wn?Da:r==Yn?Ur:Li;return l(e)}function It(e){if(!e)return e===0?e:0;if(e=Un(e),e===at||e===-at){var r=e<0?-1:1;return r*Ti}return e===e?e:0}function ne(e){var r=It(e),l=r%1;return r===r?l?r-l:r:0}function _c(e){return e?ri(ne(e),0,Fn):0}function Un(e){if(typeof e=="number")return e;if(Dn(e))return Zt;if(Ce(e)){var r=typeof e.valueOf=="function"?e.valueOf():e;e=Ce(r)?r+"":r}if(typeof e!="string")return e===0?e:+e;e=Yl(e);var l=pd.test(e);return l||md.test(e)?zd(e.slice(2),l?2:8):dd.test(e)?Zt:+e}function Ac(e){return lt(e,gn(e))}function xv(e){return e?ri(ne(e),-Vn,Vn):e===0?e:0}function ge(e){return e==null?"":En(e)}var Lv=Ci(function(e,r){if(sr(r)||pn(r)){lt(r,ze(r),e);return}for(var l in r)ye.call(r,l)&&Zi(e,l,r[l])}),Sc=Ci(function(e,r){lt(r,gn(r),e)}),Ts=Ci(function(e,r,l,c){lt(r,gn(r),e,c)}),Pv=Ci(function(e,r,l,c){lt(r,ze(r),e,c)}),Bv=wt(Fa);function Uv(e,r){var l=Ni(e);return r==null?l:su(l,r)}var $v=ie(function(e,r){e=we(e);var l=-1,c=r.length,d=c>2?r[2]:t;for(d&&un(r[0],r[1],d)&&(c=1);++l<c;)for(var g=r[l],v=gn(g),T=-1,D=v.length;++T<D;){var F=v[T],N=e[F];(N===t||Hn(N,Si[F])&&!ye.call(e,F))&&(e[F]=g[F])}return e}),Mv=ie(function(e){return e.push(t,Yu),Tn(kc,t,e)});function Gv(e,r){return Ml(e,H(r,3),ot)}function Vv(e,r){return Ml(e,H(r,3),Ca)}function Wv(e,r){return e==null?e:Na(e,H(r,3),gn)}function Yv(e,r){return e==null?e:cu(e,H(r,3),gn)}function qv(e,r){return e&&ot(e,H(r,3))}function jv(e,r){return e&&Ca(e,H(r,3))}function Hv(e){return e==null?[]:ns(e,ze(e))}function zv(e){return e==null?[]:ns(e,gn(e))}function uo(e,r,l){var c=e==null?t:si(e,r);return c===t?l:c}function Qv(e,r){return e!=null&&Hu(e,r,vg)}function co(e,r){return e!=null&&Hu(e,r,bg)}var Jv=$u(function(e,r,l){r!=null&&typeof r.toString!="function"&&(r=Vr.call(r)),e[r]=l},ho(mn)),Kv=$u(function(e,r,l){r!=null&&typeof r.toString!="function"&&(r=Vr.call(r)),ye.call(e,r)?e[r].push(l):e[r]=[l]},H),Xv=ie(nr);function ze(e){return pn(e)?iu(e):La(e)}function gn(e){return pn(e)?iu(e,!0):Fg(e)}function Zv(e,r){var l={};return r=H(r,3),ot(e,function(c,d,g){bt(l,r(c,d,g),c)}),l}function eb(e,r){var l={};return r=H(r,3),ot(e,function(c,d,g){bt(l,d,r(c,d,g))}),l}var nb=Ci(function(e,r,l){ts(e,r,l)}),kc=Ci(function(e,r,l,c){ts(e,r,l,c)}),tb=wt(function(e,r){var l={};if(e==null)return l;var c=!1;r=ke(r,function(g){return g=Wt(g,e),c||(c=g.length>1),g}),lt(e,Qa(e),l),c&&(l=Ln(l,b|k|_,Jg));for(var d=r.length;d--;)Ga(l,r[d]);return l});function ib(e,r){return Fc(e,ys(H(r)))}var rb=wt(function(e,r){return e==null?{}:Cg(e,r)});function Fc(e,r){if(e==null)return{};var l=ke(Qa(e),function(c){return[c]});return r=H(r),Tu(e,l,function(c,d){return r(c,d[0])})}function sb(e,r,l){r=Wt(r,e);var c=-1,d=r.length;for(d||(d=1,e=t);++c<d;){var g=e==null?t:e[ut(r[c])];g===t&&(c=d,g=l),e=Dt(g)?g.call(e):g}return e}function ab(e,r,l){return e==null?e:ir(e,r,l)}function ob(e,r,l,c){return c=typeof c=="function"?c:t,e==null?e:ir(e,r,l,c)}var Nc=Vu(ze),Cc=Vu(gn);function lb(e,r,l){var c=Z(e),d=c||qt(e)||xi(e);if(r=H(r,4),l==null){var g=e&&e.constructor;d?l=c?new g:[]:Ce(e)?l=Dt(g)?Ni(qr(e)):{}:l={}}return(d?On:ot)(e,function(v,T,D){return r(l,v,T,D)}),l}function ub(e,r){return e==null?!0:Ga(e,r)}function cb(e,r,l){return e==null?e:_u(e,r,Ya(l))}function fb(e,r,l,c){return c=typeof c=="function"?c:t,e==null?e:_u(e,r,Ya(l),c)}function Li(e){return e==null?[]:Ea(e,ze(e))}function hb(e){return e==null?[]:Ea(e,gn(e))}function db(e,r,l){return l===t&&(l=r,r=t),l!==t&&(l=Un(l),l=l===l?l:0),r!==t&&(r=Un(r),r=r===r?r:0),ri(Un(e),r,l)}function pb(e,r,l){return r=It(r),l===t?(l=r,r=0):l=It(l),e=Un(e),Tg(e,r,l)}function gb(e,r,l){if(l&&typeof l!="boolean"&&un(e,r,l)&&(r=l=t),l===t&&(typeof r=="boolean"?(l=r,r=t):typeof e=="boolean"&&(l=e,e=t)),e===t&&r===t?(e=0,r=1):(e=It(e),r===t?(r=e,e=0):r=It(r)),e>r){var c=e;e=r,r=c}if(l||e%1||r%1){var d=nu();return tn(e+d*(r-e+Hd("1e-"+((d+"").length-1))),r)}return Ua(e,r)}var mb=Oi(function(e,r,l){return r=r.toLowerCase(),e+(l?Oc(r):r)});function Oc(e){return fo(ge(e).toLowerCase())}function Rc(e){return e=ge(e),e&&e.replace(vd,ap).replace(Bd,"")}function yb(e,r,l){e=ge(e),r=En(r);var c=e.length;l=l===t?c:ri(ne(l),0,c);var d=l;return l-=r.length,l>=0&&e.slice(l,d)==r}function vb(e){return e=ge(e),e&&Xh.test(e)?e.replace(cl,op):e}function bb(e){return e=ge(e),e&&rd.test(e)?e.replace(aa,"\\$&"):e}var Tb=Oi(function(e,r,l){return e+(l?"-":"")+r.toLowerCase()}),wb=Oi(function(e,r,l){return e+(l?" ":"")+r.toLowerCase()}),Eb=Pu("toLowerCase");function Db(e,r,l){e=ge(e),r=ne(r);var c=r?_i(e):0;if(!r||c>=r)return e;var d=(r-c)/2;return ls(Qr(d),l)+e+ls(zr(d),l)}function Ib(e,r,l){e=ge(e),r=ne(r);var c=r?_i(e):0;return r&&c<r?e+ls(r-c,l):e}function _b(e,r,l){e=ge(e),r=ne(r);var c=r?_i(e):0;return r&&c<r?ls(r-c,l)+e:e}function Ab(e,r,l){return l||r==null?r=0:r&&(r=+r),Rp(ge(e).replace(oa,""),r||0)}function Sb(e,r,l){return(l?un(e,r,l):r===t)?r=1:r=ne(r),$a(ge(e),r)}function kb(){var e=arguments,r=ge(e[0]);return e.length<3?r:r.replace(e[1],e[2])}var Fb=Oi(function(e,r,l){return e+(l?"_":"")+r.toLowerCase()});function Nb(e,r,l){return l&&typeof l!="number"&&un(e,r,l)&&(r=l=t),l=l===t?Fn:l>>>0,l?(e=ge(e),e&&(typeof r=="string"||r!=null&&!lo(r))&&(r=En(r),!r&&Ii(e))?Yt(qn(e),0,l):e.split(r,l)):[]}var Cb=Oi(function(e,r,l){return e+(l?" ":"")+fo(r)});function Ob(e,r,l){return e=ge(e),l=l==null?0:ri(ne(l),0,e.length),r=En(r),e.slice(l,l+r.length)==r}function Rb(e,r,l){var c=p.templateSettings;l&&un(e,r,l)&&(r=t),e=ge(e),r=Ts({},r,c,Wu);var d=Ts({},r.imports,c.imports,Wu),g=ze(d),v=Ea(d,g),T,D,F=0,N=r.interpolate||Rr,x="__p += '",B=Ia((r.escape||Rr).source+"|"+N.source+"|"+(N===fl?hd:Rr).source+"|"+(r.evaluate||Rr).source+"|$","g"),Y="//# sourceURL="+(ye.call(r,"sourceURL")?(r.sourceURL+"").replace(/\s/g," "):"lodash.templateSources["+ ++Vd+"]")+`
`;e.replace(B,function(Q,se,ue,In,cn,_n){return ue||(ue=In),x+=e.slice(F,_n).replace(bd,lp),se&&(T=!0,x+=`' +
__e(`+se+`) +
'`),cn&&(D=!0,x+=`';
`+cn+`;
__p += '`),ue&&(x+=`' +
((__t = (`+ue+`)) == null ? '' : __t) +
'`),F=_n+Q.length,Q}),x+=`';
`;var z=ye.call(r,"variable")&&r.variable;if(!z)x=`with (obj) {
`+x+`
}
`;else if(cd.test(z))throw new X(f);x=(D?x.replace(zh,""):x).replace(Qh,"$1").replace(Jh,"$1;"),x="function("+(z||"obj")+`) {
`+(z?"":`obj || (obj = {});
`)+"var __t, __p = ''"+(T?", __e = _.escape":"")+(D?`, __j = Array.prototype.join;
function print() { __p += __j.call(arguments, '') }
`:`;
`)+x+`return __p
}`;var te=Lc(function(){return he(g,Y+"return "+x).apply(t,v)});if(te.source=x,oo(te))throw te;return te}function xb(e){return ge(e).toLowerCase()}function Lb(e){return ge(e).toUpperCase()}function Pb(e,r,l){if(e=ge(e),e&&(l||r===t))return Yl(e);if(!e||!(r=En(r)))return e;var c=qn(e),d=qn(r),g=ql(c,d),v=jl(c,d)+1;return Yt(c,g,v).join("")}function Bb(e,r,l){if(e=ge(e),e&&(l||r===t))return e.slice(0,zl(e)+1);if(!e||!(r=En(r)))return e;var c=qn(e),d=jl(c,qn(r))+1;return Yt(c,0,d).join("")}function Ub(e,r,l){if(e=ge(e),e&&(l||r===t))return e.replace(oa,"");if(!e||!(r=En(r)))return e;var c=qn(e),d=ql(c,qn(r));return Yt(c,d).join("")}function $b(e,r){var l=K,c=on;if(Ce(r)){var d="separator"in r?r.separator:d;l="length"in r?ne(r.length):l,c="omission"in r?En(r.omission):c}e=ge(e);var g=e.length;if(Ii(e)){var v=qn(e);g=v.length}if(l>=g)return e;var T=l-_i(c);if(T<1)return c;var D=v?Yt(v,0,T).join(""):e.slice(0,T);if(d===t)return D+c;if(v&&(T+=D.length-T),lo(d)){if(e.slice(T).search(d)){var F,N=D;for(d.global||(d=Ia(d.source,ge(hl.exec(d))+"g")),d.lastIndex=0;F=d.exec(N);)var x=F.index;D=D.slice(0,x===t?T:x)}}else if(e.indexOf(En(d),T)!=T){var B=D.lastIndexOf(d);B>-1&&(D=D.slice(0,B))}return D+c}function Mb(e){return e=ge(e),e&&Kh.test(e)?e.replace(ul,gp):e}var Gb=Oi(function(e,r,l){return e+(l?" ":"")+r.toUpperCase()}),fo=Pu("toUpperCase");function xc(e,r,l){return e=ge(e),r=l?t:r,r===t?cp(e)?vp(e):np(e):e.match(r)||[]}var Lc=ie(function(e,r){try{return Tn(e,t,r)}catch(l){return oo(l)?l:new X(l)}}),Vb=wt(function(e,r){return On(r,function(l){l=ut(l),bt(e,l,so(e[l],e))}),e});function Wb(e){var r=e==null?0:e.length,l=H();return e=r?ke(e,function(c){if(typeof c[1]!="function")throw new Rn(u);return[l(c[0]),c[1]]}):[],ie(function(c){for(var d=-1;++d<r;){var g=e[d];if(Tn(g[0],this,c))return Tn(g[1],this,c)}})}function Yb(e){return gg(Ln(e,b))}function ho(e){return function(){return e}}function qb(e,r){return e==null||e!==e?r:e}var jb=Uu(),Hb=Uu(!0);function mn(e){return e}function po(e){return pu(typeof e=="function"?e:Ln(e,b))}function zb(e){return mu(Ln(e,b))}function Qb(e,r){return yu(e,Ln(r,b))}var Jb=ie(function(e,r){return function(l){return nr(l,e,r)}}),Kb=ie(function(e,r){return function(l){return nr(e,l,r)}});function go(e,r,l){var c=ze(r),d=ns(r,c);l==null&&!(Ce(r)&&(d.length||!c.length))&&(l=r,r=e,e=this,d=ns(r,ze(r)));var g=!(Ce(l)&&"chain"in l)||!!l.chain,v=Dt(e);return On(d,function(T){var D=r[T];e[T]=D,v&&(e.prototype[T]=function(){var F=this.__chain__;if(g||F){var N=e(this.__wrapped__),x=N.__actions__=dn(this.__actions__);return x.push({func:D,args:arguments,thisArg:e}),N.__chain__=F,N}return D.apply(e,Ut([this.value()],arguments))})}),e}function Xb(){return Ke._===this&&(Ke._=Ip),this}function mo(){}function Zb(e){return e=ne(e),ie(function(r){return vu(r,e)})}var e0=ja(ke),n0=ja($l),t0=ja(ya);function Pc(e){return Za(e)?va(ut(e)):Og(e)}function i0(e){return function(r){return e==null?t:si(e,r)}}var r0=Mu(),s0=Mu(!0);function yo(){return[]}function vo(){return!1}function a0(){return{}}function o0(){return""}function l0(){return!0}function u0(e,r){if(e=ne(e),e<1||e>Vn)return[];var l=Fn,c=tn(e,Fn);r=H(r),e-=Fn;for(var d=wa(c,r);++l<e;)r(l);return d}function c0(e){return Z(e)?ke(e,ut):Dn(e)?[e]:dn(tc(ge(e)))}function f0(e){var r=++Ep;return ge(e)+r}var h0=os(function(e,r){return e+r},0),d0=Ha("ceil"),p0=os(function(e,r){return e/r},1),g0=Ha("floor");function m0(e){return e&&e.length?es(e,mn,Oa):t}function y0(e,r){return e&&e.length?es(e,H(r,2),Oa):t}function v0(e){return Vl(e,mn)}function b0(e,r){return Vl(e,H(r,2))}function T0(e){return e&&e.length?es(e,mn,Pa):t}function w0(e,r){return e&&e.length?es(e,H(r,2),Pa):t}var E0=os(function(e,r){return e*r},1),D0=Ha("round"),I0=os(function(e,r){return e-r},0);function _0(e){return e&&e.length?Ta(e,mn):0}function A0(e,r){return e&&e.length?Ta(e,H(r,2)):0}return p.after=zy,p.ary=dc,p.assign=Lv,p.assignIn=Sc,p.assignInWith=Ts,p.assignWith=Pv,p.at=Bv,p.before=pc,p.bind=so,p.bindAll=Vb,p.bindKey=gc,p.castArray=av,p.chain=cc,p.chunk=gm,p.compact=mm,p.concat=ym,p.cond=Wb,p.conforms=Yb,p.constant=ho,p.countBy=_y,p.create=Uv,p.curry=mc,p.curryRight=yc,p.debounce=vc,p.defaults=$v,p.defaultsDeep=Mv,p.defer=Qy,p.delay=Jy,p.difference=vm,p.differenceBy=bm,p.differenceWith=Tm,p.drop=wm,p.dropRight=Em,p.dropRightWhile=Dm,p.dropWhile=Im,p.fill=_m,p.filter=Sy,p.flatMap=Ny,p.flatMapDeep=Cy,p.flatMapDepth=Oy,p.flatten=ac,p.flattenDeep=Am,p.flattenDepth=Sm,p.flip=Ky,p.flow=jb,p.flowRight=Hb,p.fromPairs=km,p.functions=Hv,p.functionsIn=zv,p.groupBy=Ry,p.initial=Nm,p.intersection=Cm,p.intersectionBy=Om,p.intersectionWith=Rm,p.invert=Jv,p.invertBy=Kv,p.invokeMap=Ly,p.iteratee=po,p.keyBy=Py,p.keys=ze,p.keysIn=gn,p.map=ps,p.mapKeys=Zv,p.mapValues=eb,p.matches=zb,p.matchesProperty=Qb,p.memoize=ms,p.merge=nb,p.mergeWith=kc,p.method=Jb,p.methodOf=Kb,p.mixin=go,p.negate=ys,p.nthArg=Zb,p.omit=tb,p.omitBy=ib,p.once=Xy,p.orderBy=By,p.over=e0,p.overArgs=Zy,p.overEvery=n0,p.overSome=t0,p.partial=ao,p.partialRight=bc,p.partition=Uy,p.pick=rb,p.pickBy=Fc,p.property=Pc,p.propertyOf=i0,p.pull=Bm,p.pullAll=lc,p.pullAllBy=Um,p.pullAllWith=$m,p.pullAt=Mm,p.range=r0,p.rangeRight=s0,p.rearg=ev,p.reject=Gy,p.remove=Gm,p.rest=nv,p.reverse=io,p.sampleSize=Wy,p.set=ab,p.setWith=ob,p.shuffle=Yy,p.slice=Vm,p.sortBy=Hy,p.sortedUniq=Qm,p.sortedUniqBy=Jm,p.split=Nb,p.spread=tv,p.tail=Km,p.take=Xm,p.takeRight=Zm,p.takeRightWhile=ey,p.takeWhile=ny,p.tap=my,p.throttle=iv,p.thru=ds,p.toArray=Ic,p.toPairs=Nc,p.toPairsIn=Cc,p.toPath=c0,p.toPlainObject=Ac,p.transform=lb,p.unary=rv,p.union=ty,p.unionBy=iy,p.unionWith=ry,p.uniq=sy,p.uniqBy=ay,p.uniqWith=oy,p.unset=ub,p.unzip=ro,p.unzipWith=uc,p.update=cb,p.updateWith=fb,p.values=Li,p.valuesIn=hb,p.without=ly,p.words=xc,p.wrap=sv,p.xor=uy,p.xorBy=cy,p.xorWith=fy,p.zip=hy,p.zipObject=dy,p.zipObjectDeep=py,p.zipWith=gy,p.entries=Nc,p.entriesIn=Cc,p.extend=Sc,p.extendWith=Ts,go(p,p),p.add=h0,p.attempt=Lc,p.camelCase=mb,p.capitalize=Oc,p.ceil=d0,p.clamp=db,p.clone=ov,p.cloneDeep=uv,p.cloneDeepWith=cv,p.cloneWith=lv,p.conformsTo=fv,p.deburr=Rc,p.defaultTo=qb,p.divide=p0,p.endsWith=yb,p.eq=Hn,p.escape=vb,p.escapeRegExp=bb,p.every=Ay,p.find=ky,p.findIndex=rc,p.findKey=Gv,p.findLast=Fy,p.findLastIndex=sc,p.findLastKey=Vv,p.floor=g0,p.forEach=fc,p.forEachRight=hc,p.forIn=Wv,p.forInRight=Yv,p.forOwn=qv,p.forOwnRight=jv,p.get=uo,p.gt=hv,p.gte=dv,p.has=Qv,p.hasIn=co,p.head=oc,p.identity=mn,p.includes=xy,p.indexOf=Fm,p.inRange=pb,p.invoke=Xv,p.isArguments=li,p.isArray=Z,p.isArrayBuffer=pv,p.isArrayLike=pn,p.isArrayLikeObject=$e,p.isBoolean=gv,p.isBuffer=qt,p.isDate=mv,p.isElement=yv,p.isEmpty=vv,p.isEqual=bv,p.isEqualWith=Tv,p.isError=oo,p.isFinite=wv,p.isFunction=Dt,p.isInteger=Tc,p.isLength=vs,p.isMap=wc,p.isMatch=Ev,p.isMatchWith=Dv,p.isNaN=Iv,p.isNative=_v,p.isNil=Sv,p.isNull=Av,p.isNumber=Ec,p.isObject=Ce,p.isObjectLike=Le,p.isPlainObject=or,p.isRegExp=lo,p.isSafeInteger=kv,p.isSet=Dc,p.isString=bs,p.isSymbol=Dn,p.isTypedArray=xi,p.isUndefined=Fv,p.isWeakMap=Nv,p.isWeakSet=Cv,p.join=xm,p.kebabCase=Tb,p.last=Bn,p.lastIndexOf=Lm,p.lowerCase=wb,p.lowerFirst=Eb,p.lt=Ov,p.lte=Rv,p.max=m0,p.maxBy=y0,p.mean=v0,p.meanBy=b0,p.min=T0,p.minBy=w0,p.stubArray=yo,p.stubFalse=vo,p.stubObject=a0,p.stubString=o0,p.stubTrue=l0,p.multiply=E0,p.nth=Pm,p.noConflict=Xb,p.noop=mo,p.now=gs,p.pad=Db,p.padEnd=Ib,p.padStart=_b,p.parseInt=Ab,p.random=gb,p.reduce=$y,p.reduceRight=My,p.repeat=Sb,p.replace=kb,p.result=sb,p.round=D0,p.runInContext=E,p.sample=Vy,p.size=qy,p.snakeCase=Fb,p.some=jy,p.sortedIndex=Wm,p.sortedIndexBy=Ym,p.sortedIndexOf=qm,p.sortedLastIndex=jm,p.sortedLastIndexBy=Hm,p.sortedLastIndexOf=zm,p.startCase=Cb,p.startsWith=Ob,p.subtract=I0,p.sum=_0,p.sumBy=A0,p.template=Rb,p.times=u0,p.toFinite=It,p.toInteger=ne,p.toLength=_c,p.toLower=xb,p.toNumber=Un,p.toSafeInteger=xv,p.toString=ge,p.toUpper=Lb,p.trim=Pb,p.trimEnd=Bb,p.trimStart=Ub,p.truncate=$b,p.unescape=Mb,p.uniqueId=f0,p.upperCase=Gb,p.upperFirst=fo,p.each=fc,p.eachRight=hc,p.first=oc,go(p,function(){var e={};return ot(p,function(r,l){ye.call(p.prototype,l)||(e[l]=r)}),e}(),{chain:!1}),p.VERSION=a,On(["bind","bindKey","curry","curryRight","partial","partialRight"],function(e){p[e].placeholder=p}),On(["drop","take"],function(e,r){oe.prototype[e]=function(l){l=l===t?1:He(ne(l),0);var c=this.__filtered__&&!r?new oe(this):this.clone();return c.__filtered__?c.__takeCount__=tn(l,c.__takeCount__):c.__views__.push({size:tn(l,Fn),type:e+(c.__dir__<0?"Right":"")}),c},oe.prototype[e+"Right"]=function(l){return this.reverse()[e](l).reverse()}}),On(["filter","map","takeWhile"],function(e,r){var l=r+1,c=l==Nr||l==Cr;oe.prototype[e]=function(d){var g=this.clone();return g.__iteratees__.push({iteratee:H(d,3),type:l}),g.__filtered__=g.__filtered__||c,g}}),On(["head","last"],function(e,r){var l="take"+(r?"Right":"");oe.prototype[e]=function(){return this[l](1).value()[0]}}),On(["initial","tail"],function(e,r){var l="drop"+(r?"":"Right");oe.prototype[e]=function(){return this.__filtered__?new oe(this):this[l](1)}}),oe.prototype.compact=function(){return this.filter(mn)},oe.prototype.find=function(e){return this.filter(e).head()},oe.prototype.findLast=function(e){return this.reverse().find(e)},oe.prototype.invokeMap=ie(function(e,r){return typeof e=="function"?new oe(this):this.map(function(l){return nr(l,e,r)})}),oe.prototype.reject=function(e){return this.filter(ys(H(e)))},oe.prototype.slice=function(e,r){e=ne(e);var l=this;return l.__filtered__&&(e>0||r<0)?new oe(l):(e<0?l=l.takeRight(-e):e&&(l=l.drop(e)),r!==t&&(r=ne(r),l=r<0?l.dropRight(-r):l.take(r-e)),l)},oe.prototype.takeRightWhile=function(e){return this.reverse().takeWhile(e).reverse()},oe.prototype.toArray=function(){return this.take(Fn)},ot(oe.prototype,function(e,r){var l=/^(?:filter|find|map|reject)|While$/.test(r),c=/^(?:head|last)$/.test(r),d=p[c?"take"+(r=="last"?"Right":""):r],g=c||/^find/.test(r);d&&(p.prototype[r]=function(){var v=this.__wrapped__,T=c?[1]:arguments,D=v instanceof oe,F=T[0],N=D||Z(v),x=function(se){var ue=d.apply(p,Ut([se],T));return c&&B?ue[0]:ue};N&&l&&typeof F=="function"&&F.length!=1&&(D=N=!1);var B=this.__chain__,Y=!!this.__actions__.length,z=g&&!B,te=D&&!Y;if(!g&&N){v=te?v:new oe(this);var Q=e.apply(v,T);return Q.__actions__.push({func:ds,args:[x],thisArg:t}),new xn(Q,B)}return z&&te?e.apply(this,T):(Q=this.thru(x),z?c?Q.value()[0]:Q.value():Q)})}),On(["pop","push","shift","sort","splice","unshift"],function(e){var r=$r[e],l=/^(?:push|sort|unshift)$/.test(e)?"tap":"thru",c=/^(?:pop|shift)$/.test(e);p.prototype[e]=function(){var d=arguments;if(c&&!this.__chain__){var g=this.value();return r.apply(Z(g)?g:[],d)}return this[l](function(v){return r.apply(Z(v)?v:[],d)})}}),ot(oe.prototype,function(e,r){var l=p[r];if(l){var c=l.name+"";ye.call(Fi,c)||(Fi[c]=[]),Fi[c].push({name:r,func:l})}}),Fi[as(t,ce).name]=[{name:"wrapper",func:t}],oe.prototype.clone=Mp,oe.prototype.reverse=Gp,oe.prototype.value=Vp,p.prototype.at=yy,p.prototype.chain=vy,p.prototype.commit=by,p.prototype.next=Ty,p.prototype.plant=Ey,p.prototype.reverse=Dy,p.prototype.toJSON=p.prototype.valueOf=p.prototype.value=Iy,p.prototype.first=p.prototype.head,zi&&(p.prototype[zi]=wy),p},Ai=bp();ei?((ei.exports=Ai)._=Ai,da._=Ai):Ke._=Ai}).call(fr)})(Rs,Rs.exports);var xw=Rs.exports;const Nt=Rw(xw);function Lw(){return{convert:i=>{if(i===null||i===void 0)return null;switch(typeof i){case"boolean":return i;case"string":{const n=i.toLowerCase().trim();return n==="true"||n==="t"||n==="1"}case"number":return i!==0;default:return null}},asString:i=>String(i),type:i=>i.boolean().optional()}}function An(i,n){const t=a=>n.convert(a[i]);return{name:Pw(i),key:i,asEnv:a=>({[i]:n.asString(a)}),zod:{type:n.type},get:t,getOrDefault:(a,s)=>t(a)??s}}function Pw(i){return i.toLowerCase().replace(/([-_][a-z])/gi,n=>n.toUpperCase().replace("-","").replace("_",""))}An("MAGIDOC_GENERATE",Lw());function Es(i){return{convert:n=>{if(Array.isArray(n))return n;if(typeof n=="string"){const t=JSON.parse(n);return Array.isArray(t)?t:null}return null},asString:n=>JSON.stringify(n),type:n=>n.array(i(n)).optional()}}function of(i){return{convert:n=>{if(typeof n=="object")return n;if(typeof n=="string"){const t=JSON.parse(n);return typeof t!="object"?null:t}return null},asString:n=>JSON.stringify(n),type:n=>n.record(i(n).optional()).optional()}}function Ds(){return{convert:i=>i==null||i===""?null:String(i),asString:i=>String(i),type:i=>i.string().optional()}}function lf(i){return{convert:n=>n==null||!i.find(t=>t===n)?null:n,asString:n=>String(n),type:n=>n.enum(i).optional()}}var Vs={APP_LOGO:An("APP_LOGO",Ds()),APP_TITLE:An("APP_TITLE",Ds()),APP_FAVICON:An("APP_FAVICON",Ds()),SITE_ROOT:An("SITE_ROOT",Ds()),SITE_META:An("SITE_META",of(i=>i.string())),CUSTOM_STYLES:An("CUSTOM_STYLES",Es(i=>i.string())),FIELDS_SORTING:An("FIELDS_SORTING",lf(["default","alphabetical"])),ARGUMENTS_SORTING:An("ARGUMENTS_SORTING",lf(["default","alphabetical"])),QUERY_GENERATION_FACTORIES:An("QUERY_GENERATION_FACTORIES",of(i=>i.union([i.string(),i.boolean(),i.number(),i.null(),i.record(i.unknown())]))),PAGES:An("PAGES",Es(i=>{const n=i.lazy(()=>i.object({title:i.string().min(1),content:i.union([i.array(n),i.string().min(1)])}));return n})),EXTERNAL_LINKS:An("EXTERNAL_LINKS",Es(i=>i.object({label:i.string().min(1),href:i.string().min(1),position:i.union([i.literal("header"),i.literal("navigation")]).optional(),kind:i.string().min(1).optional(),group:i.string().min(1).optional()}))),DIRECTIVES:An("DIRECTIVES",Es(i=>i.object({name:i.string().min(1),args:i.array(i.string())})))};const Bw="/api/dev-2.x/graphql-gtfs",Uw="https://docs.opentripplanner.org/en/dev-2.x/images/otp-logo.svg",$w='[{"title":"Introduction","content":"\\n# OTP GTFS GraphQL API documentation\\n\\nThis is the static documentation of the OTP GraphQL GTFS API.\\n\\nThe GraphQL endpoint of your instance, which you should point your tooling to, is \\n`http://localhost:8080/otp/gtfs/v1`\\n\\nPlease also check out the interactive API explorer built into every instance and available\\nat http://localhost:8080/graphiql \\n\\n![GraphiQL screenshot](https://docs.opentripplanner.org/en/dev-2.x/images/graphiql.png)\\n\\n## Configuration\\n\\nThis API is activated by default.\\n\\nTo learn how to deactivate it, read the\\n[documentation](https://docs.opentripplanner.org/en/dev-2.x/apis/GTFS-GraphQL-API/).\\n"}]',Mw="OTP GTFS GraphQL API",Gw='{"Polyline":"<>","GeoJson":"<>","OffsetDateTime":"2024-02-05T18:04:23+01:00","Duration":"PT10M","CoordinateValue":19.24,"Reluctance":3.1,"Speed":3.4,"Cost":100,"Ratio":0.25,"Locale":"en"}',Vw="true",Hf={SITE_ROOT:Bw,APP_LOGO:Uw,PAGES:$w,APP_TITLE:Mw,QUERY_GENERATION_FACTORIES:Gw,MAGIDOC_GENERATE:Vw};function LI(i){return i.get(Hf)}function Ws(i,n){return i.getOrDefault(Hf,n)}function Ys(){return Ws(Vs.SITE_ROOT,R0)}class Ww{constructor(n){Ee(this,"mapping");this.mapping=n}getFor(n){return this.mapping.get(n.name)}}var yr;(function(i){i.UNION="union",i.ARGUMENT="argument",i.FIELD="field"})(yr||(yr={}));function fe(i,n){if(!!!i)throw new Error(n)}function Ct(i){return typeof i=="object"&&i!==null}function Zn(i,n){if(!!!i)throw new Error(n??"Unexpected invariant triggered.")}const Yw=/\r\n|[\n\r]/g;function Fo(i,n){let t=0,a=1;for(const s of i.body.matchAll(Yw)){if(typeof s.index=="number"||Zn(!1),s.index>=n)break;t=s.index+s[0].length,a+=1}return{line:a,column:n+1-t}}function qw(i){return zf(i.source,Fo(i.source,i.start))}function zf(i,n){const t=i.locationOffset.column-1,a="".padStart(t)+i.body,s=n.line-1,o=i.locationOffset.line-1,u=n.line+o,f=n.line===1?t:0,h=n.column+f,m=`${i.name}:${u}:${h}
`,y=a.split(/\r\n|[\n\r]/g),b=y[s];if(b.length>120){const k=Math.floor(h/80),_=h%80,O=[];for(let P=0;P<b.length;P+=80)O.push(b.slice(P,P+80));return m+uf([[`${u} |`,O[0]],...O.slice(1,k+1).map(P=>["|",P]),["|","^".padStart(_)],["|",O[k+1]]])}return m+uf([[`${u-1} |`,y[s-1]],[`${u} |`,b],["|","^".padStart(h)],[`${u+1} |`,y[s+1]]])}function uf(i){const n=i.filter(([a,s])=>s!==void 0),t=Math.max(...n.map(([a])=>a.length));return n.map(([a,s])=>a.padStart(t)+(s?" "+s:"")).join(`
`)}function jw(i){const n=i[0];return n==null||"kind"in n||"length"in n?{nodes:n,source:i[1],positions:i[2],path:i[3],originalError:i[4],extensions:i[5]}:n}class L extends Error{constructor(n,...t){var a,s,o;const{nodes:u,source:f,positions:h,path:m,originalError:y,extensions:b}=jw(t);super(n),this.name="GraphQLError",this.path=m??void 0,this.originalError=y??void 0,this.nodes=cf(Array.isArray(u)?u:u?[u]:void 0);const k=cf((a=this.nodes)===null||a===void 0?void 0:a.map(O=>O.loc).filter(O=>O!=null));this.source=f??(k==null||(s=k[0])===null||s===void 0?void 0:s.source),this.positions=h??(k==null?void 0:k.map(O=>O.start)),this.locations=h&&f?h.map(O=>Fo(f,O)):k==null?void 0:k.map(O=>Fo(O.source,O.start));const _=Ct(y==null?void 0:y.extensions)?y==null?void 0:y.extensions:void 0;this.extensions=(o=b??_)!==null&&o!==void 0?o:Object.create(null),Object.defineProperties(this,{message:{writable:!0,enumerable:!0},name:{enumerable:!1},nodes:{enumerable:!1},source:{enumerable:!1},positions:{enumerable:!1},originalError:{enumerable:!1}}),y!=null&&y.stack?Object.defineProperty(this,"stack",{value:y.stack,writable:!0,configurable:!0}):Error.captureStackTrace?Error.captureStackTrace(this,L):Object.defineProperty(this,"stack",{value:Error().stack,writable:!0,configurable:!0})}get[Symbol.toStringTag](){return"GraphQLError"}toString(){let n=this.message;if(this.nodes)for(const t of this.nodes)t.loc&&(n+=`

`+qw(t.loc));else if(this.source&&this.locations)for(const t of this.locations)n+=`

`+zf(this.source,t);return n}toJSON(){const n={message:this.message};return this.locations!=null&&(n.locations=this.locations),this.path!=null&&(n.path=this.path),this.extensions!=null&&Object.keys(this.extensions).length>0&&(n.extensions=this.extensions),n}}function cf(i){return i===void 0||i.length===0?void 0:i}function Qe(i,n,t){return new L(`Syntax Error: ${t}`,{source:i,positions:[n]})}class Hw{constructor(n,t,a){this.start=n.start,this.end=t.end,this.startToken=n,this.endToken=t,this.source=a}get[Symbol.toStringTag](){return"Location"}toJSON(){return{start:this.start,end:this.end}}}class Qf{constructor(n,t,a,s,o,u){this.kind=n,this.start=t,this.end=a,this.line=s,this.column=o,this.value=u,this.prev=null,this.next=null}get[Symbol.toStringTag](){return"Token"}toJSON(){return{kind:this.kind,value:this.value,line:this.line,column:this.column}}}const Jf={Name:[],Document:["definitions"],OperationDefinition:["name","variableDefinitions","directives","selectionSet"],VariableDefinition:["variable","type","defaultValue","directives"],Variable:["name"],SelectionSet:["selections"],Field:["alias","name","arguments","directives","selectionSet"],Argument:["name","value"],FragmentSpread:["name","directives"],InlineFragment:["typeCondition","directives","selectionSet"],FragmentDefinition:["name","variableDefinitions","typeCondition","directives","selectionSet"],IntValue:[],FloatValue:[],StringValue:[],BooleanValue:[],NullValue:[],EnumValue:[],ListValue:["values"],ObjectValue:["fields"],ObjectField:["name","value"],Directive:["name","arguments"],NamedType:["name"],ListType:["type"],NonNullType:["type"],SchemaDefinition:["description","directives","operationTypes"],OperationTypeDefinition:["type"],ScalarTypeDefinition:["description","name","directives"],ObjectTypeDefinition:["description","name","interfaces","directives","fields"],FieldDefinition:["description","name","arguments","type","directives"],InputValueDefinition:["description","name","type","defaultValue","directives"],InterfaceTypeDefinition:["description","name","interfaces","directives","fields"],UnionTypeDefinition:["description","name","directives","types"],EnumTypeDefinition:["description","name","directives","values"],EnumValueDefinition:["description","name","directives"],InputObjectTypeDefinition:["description","name","directives","fields"],DirectiveDefinition:["description","name","arguments","locations"],SchemaExtension:["directives","operationTypes"],ScalarTypeExtension:["name","directives"],ObjectTypeExtension:["name","interfaces","directives","fields"],InterfaceTypeExtension:["name","interfaces","directives","fields"],UnionTypeExtension:["name","directives","types"],EnumTypeExtension:["name","directives","values"],InputObjectTypeExtension:["name","directives","fields"]},zw=new Set(Object.keys(Jf));function ff(i){const n=i==null?void 0:i.kind;return typeof n=="string"&&zw.has(n)}var $n;(function(i){i.QUERY="query",i.MUTATION="mutation",i.SUBSCRIPTION="subscription"})($n||($n={}));var j;(function(i){i.QUERY="QUERY",i.MUTATION="MUTATION",i.SUBSCRIPTION="SUBSCRIPTION",i.FIELD="FIELD",i.FRAGMENT_DEFINITION="FRAGMENT_DEFINITION",i.FRAGMENT_SPREAD="FRAGMENT_SPREAD",i.INLINE_FRAGMENT="INLINE_FRAGMENT",i.VARIABLE_DEFINITION="VARIABLE_DEFINITION",i.SCHEMA="SCHEMA",i.SCALAR="SCALAR",i.OBJECT="OBJECT",i.FIELD_DEFINITION="FIELD_DEFINITION",i.ARGUMENT_DEFINITION="ARGUMENT_DEFINITION",i.INTERFACE="INTERFACE",i.UNION="UNION",i.ENUM="ENUM",i.ENUM_VALUE="ENUM_VALUE",i.INPUT_OBJECT="INPUT_OBJECT",i.INPUT_FIELD_DEFINITION="INPUT_FIELD_DEFINITION"})(j||(j={}));var w;(function(i){i.NAME="Name",i.DOCUMENT="Document",i.OPERATION_DEFINITION="OperationDefinition",i.VARIABLE_DEFINITION="VariableDefinition",i.SELECTION_SET="SelectionSet",i.FIELD="Field",i.ARGUMENT="Argument",i.FRAGMENT_SPREAD="FragmentSpread",i.INLINE_FRAGMENT="InlineFragment",i.FRAGMENT_DEFINITION="FragmentDefinition",i.VARIABLE="Variable",i.INT="IntValue",i.FLOAT="FloatValue",i.STRING="StringValue",i.BOOLEAN="BooleanValue",i.NULL="NullValue",i.ENUM="EnumValue",i.LIST="ListValue",i.OBJECT="ObjectValue",i.OBJECT_FIELD="ObjectField",i.DIRECTIVE="Directive",i.NAMED_TYPE="NamedType",i.LIST_TYPE="ListType",i.NON_NULL_TYPE="NonNullType",i.SCHEMA_DEFINITION="SchemaDefinition",i.OPERATION_TYPE_DEFINITION="OperationTypeDefinition",i.SCALAR_TYPE_DEFINITION="ScalarTypeDefinition",i.OBJECT_TYPE_DEFINITION="ObjectTypeDefinition",i.FIELD_DEFINITION="FieldDefinition",i.INPUT_VALUE_DEFINITION="InputValueDefinition",i.INTERFACE_TYPE_DEFINITION="InterfaceTypeDefinition",i.UNION_TYPE_DEFINITION="UnionTypeDefinition",i.ENUM_TYPE_DEFINITION="EnumTypeDefinition",i.ENUM_VALUE_DEFINITION="EnumValueDefinition",i.INPUT_OBJECT_TYPE_DEFINITION="InputObjectTypeDefinition",i.DIRECTIVE_DEFINITION="DirectiveDefinition",i.SCHEMA_EXTENSION="SchemaExtension",i.SCALAR_TYPE_EXTENSION="ScalarTypeExtension",i.OBJECT_TYPE_EXTENSION="ObjectTypeExtension",i.INTERFACE_TYPE_EXTENSION="InterfaceTypeExtension",i.UNION_TYPE_EXTENSION="UnionTypeExtension",i.ENUM_TYPE_EXTENSION="EnumTypeExtension",i.INPUT_OBJECT_TYPE_EXTENSION="InputObjectTypeExtension"})(w||(w={}));function No(i){return i===9||i===32}function Er(i){return i>=48&&i<=57}function Kf(i){return i>=97&&i<=122||i>=65&&i<=90}function Jo(i){return Kf(i)||i===95}function Xf(i){return Kf(i)||Er(i)||i===95}function Qw(i){var n;let t=Number.MAX_SAFE_INTEGER,a=null,s=-1;for(let u=0;u<i.length;++u){var o;const f=i[u],h=Jw(f);h!==f.length&&(a=(o=a)!==null&&o!==void 0?o:u,s=u,u!==0&&h<t&&(t=h))}return i.map((u,f)=>f===0?u:u.slice(t)).slice((n=a)!==null&&n!==void 0?n:0,s+1)}function Jw(i){let n=0;for(;n<i.length&&No(i.charCodeAt(n));)++n;return n}function Kw(i,n){const t=i.replace(/"""/g,'\\"""'),a=t.split(/\r\n|[\n\r]/g),s=a.length===1,o=a.length>1&&a.slice(1).every(_=>_.length===0||No(_.charCodeAt(0))),u=t.endsWith('\\"""'),f=i.endsWith('"')&&!u,h=i.endsWith("\\"),m=f||h,y=!s||i.length>70||m||o||u;let b="";const k=s&&No(i.charCodeAt(0));return(y&&!k||o)&&(b+=`
`),b+=t,(y||m)&&(b+=`
`),'"""'+b+'"""'}var C;(function(i){i.SOF="<SOF>",i.EOF="<EOF>",i.BANG="!",i.DOLLAR="$",i.AMP="&",i.PAREN_L="(",i.PAREN_R=")",i.SPREAD="...",i.COLON=":",i.EQUALS="=",i.AT="@",i.BRACKET_L="[",i.BRACKET_R="]",i.BRACE_L="{",i.PIPE="|",i.BRACE_R="}",i.NAME="Name",i.INT="Int",i.FLOAT="Float",i.STRING="String",i.BLOCK_STRING="BlockString",i.COMMENT="Comment"})(C||(C={}));class Xw{constructor(n){const t=new Qf(C.SOF,0,0,0,0);this.source=n,this.lastToken=t,this.token=t,this.line=1,this.lineStart=0}get[Symbol.toStringTag](){return"Lexer"}advance(){return this.lastToken=this.token,this.token=this.lookahead()}lookahead(){let n=this.token;if(n.kind!==C.EOF)do if(n.next)n=n.next;else{const t=eE(this,n.end);n.next=t,t.prev=n,n=t}while(n.kind===C.COMMENT);return n}}function Zw(i){return i===C.BANG||i===C.DOLLAR||i===C.AMP||i===C.PAREN_L||i===C.PAREN_R||i===C.SPREAD||i===C.COLON||i===C.EQUALS||i===C.AT||i===C.BRACKET_L||i===C.BRACKET_R||i===C.BRACE_L||i===C.PIPE||i===C.BRACE_R}function $i(i){return i>=0&&i<=55295||i>=57344&&i<=1114111}function qs(i,n){return Zf(i.charCodeAt(n))&&eh(i.charCodeAt(n+1))}function Zf(i){return i>=55296&&i<=56319}function eh(i){return i>=56320&&i<=57343}function di(i,n){const t=i.source.body.codePointAt(n);if(t===void 0)return C.EOF;if(t>=32&&t<=126){const a=String.fromCodePoint(t);return a==='"'?`'"'`:`"${a}"`}return"U+"+t.toString(16).toUpperCase().padStart(4,"0")}function We(i,n,t,a,s){const o=i.line,u=1+t-i.lineStart;return new Qf(n,t,a,o,u,s)}function eE(i,n){const t=i.source.body,a=t.length;let s=n;for(;s<a;){const o=t.charCodeAt(s);switch(o){case 65279:case 9:case 32:case 44:++s;continue;case 10:++s,++i.line,i.lineStart=s;continue;case 13:t.charCodeAt(s+1)===10?s+=2:++s,++i.line,i.lineStart=s;continue;case 35:return nE(i,s);case 33:return We(i,C.BANG,s,s+1);case 36:return We(i,C.DOLLAR,s,s+1);case 38:return We(i,C.AMP,s,s+1);case 40:return We(i,C.PAREN_L,s,s+1);case 41:return We(i,C.PAREN_R,s,s+1);case 46:if(t.charCodeAt(s+1)===46&&t.charCodeAt(s+2)===46)return We(i,C.SPREAD,s,s+3);break;case 58:return We(i,C.COLON,s,s+1);case 61:return We(i,C.EQUALS,s,s+1);case 64:return We(i,C.AT,s,s+1);case 91:return We(i,C.BRACKET_L,s,s+1);case 93:return We(i,C.BRACKET_R,s,s+1);case 123:return We(i,C.BRACE_L,s,s+1);case 124:return We(i,C.PIPE,s,s+1);case 125:return We(i,C.BRACE_R,s,s+1);case 34:return t.charCodeAt(s+1)===34&&t.charCodeAt(s+2)===34?oE(i,s):iE(i,s)}if(Er(o)||o===45)return tE(i,s,o);if(Jo(o))return lE(i,s);throw Qe(i.source,s,o===39?`Unexpected single quote character ('), did you mean to use a double quote (")?`:$i(o)||qs(t,s)?`Unexpected character: ${di(i,s)}.`:`Invalid character: ${di(i,s)}.`)}return We(i,C.EOF,a,a)}function nE(i,n){const t=i.source.body,a=t.length;let s=n+1;for(;s<a;){const o=t.charCodeAt(s);if(o===10||o===13)break;if($i(o))++s;else if(qs(t,s))s+=2;else break}return We(i,C.COMMENT,n,s,t.slice(n+1,s))}function tE(i,n,t){const a=i.source.body;let s=n,o=t,u=!1;if(o===45&&(o=a.charCodeAt(++s)),o===48){if(o=a.charCodeAt(++s),Er(o))throw Qe(i.source,s,`Invalid number, unexpected digit after 0: ${di(i,s)}.`)}else s=wo(i,s,o),o=a.charCodeAt(s);if(o===46&&(u=!0,o=a.charCodeAt(++s),s=wo(i,s,o),o=a.charCodeAt(s)),(o===69||o===101)&&(u=!0,o=a.charCodeAt(++s),(o===43||o===45)&&(o=a.charCodeAt(++s)),s=wo(i,s,o),o=a.charCodeAt(s)),o===46||Jo(o))throw Qe(i.source,s,`Invalid number, expected digit but got: ${di(i,s)}.`);return We(i,u?C.FLOAT:C.INT,n,s,a.slice(n,s))}function wo(i,n,t){if(!Er(t))throw Qe(i.source,n,`Invalid number, expected digit but got: ${di(i,n)}.`);const a=i.source.body;let s=n+1;for(;Er(a.charCodeAt(s));)++s;return s}function iE(i,n){const t=i.source.body,a=t.length;let s=n+1,o=s,u="";for(;s<a;){const f=t.charCodeAt(s);if(f===34)return u+=t.slice(o,s),We(i,C.STRING,n,s+1,u);if(f===92){u+=t.slice(o,s);const h=t.charCodeAt(s+1)===117?t.charCodeAt(s+2)===123?rE(i,s):sE(i,s):aE(i,s);u+=h.value,s+=h.size,o=s;continue}if(f===10||f===13)break;if($i(f))++s;else if(qs(t,s))s+=2;else throw Qe(i.source,s,`Invalid character within String: ${di(i,s)}.`)}throw Qe(i.source,s,"Unterminated string.")}function rE(i,n){const t=i.source.body;let a=0,s=3;for(;s<12;){const o=t.charCodeAt(n+s++);if(o===125){if(s<5||!$i(a))break;return{value:String.fromCodePoint(a),size:s}}if(a=a<<4|hr(o),a<0)break}throw Qe(i.source,n,`Invalid Unicode escape sequence: "${t.slice(n,n+s)}".`)}function sE(i,n){const t=i.source.body,a=hf(t,n+2);if($i(a))return{value:String.fromCodePoint(a),size:6};if(Zf(a)&&t.charCodeAt(n+6)===92&&t.charCodeAt(n+7)===117){const s=hf(t,n+8);if(eh(s))return{value:String.fromCodePoint(a,s),size:12}}throw Qe(i.source,n,`Invalid Unicode escape sequence: "${t.slice(n,n+6)}".`)}function hf(i,n){return hr(i.charCodeAt(n))<<12|hr(i.charCodeAt(n+1))<<8|hr(i.charCodeAt(n+2))<<4|hr(i.charCodeAt(n+3))}function hr(i){return i>=48&&i<=57?i-48:i>=65&&i<=70?i-55:i>=97&&i<=102?i-87:-1}function aE(i,n){const t=i.source.body;switch(t.charCodeAt(n+1)){case 34:return{value:'"',size:2};case 92:return{value:"\\",size:2};case 47:return{value:"/",size:2};case 98:return{value:"\b",size:2};case 102:return{value:"\f",size:2};case 110:return{value:`
`,size:2};case 114:return{value:"\r",size:2};case 116:return{value:"	",size:2}}throw Qe(i.source,n,`Invalid character escape sequence: "${t.slice(n,n+2)}".`)}function oE(i,n){const t=i.source.body,a=t.length;let s=i.lineStart,o=n+3,u=o,f="";const h=[];for(;o<a;){const m=t.charCodeAt(o);if(m===34&&t.charCodeAt(o+1)===34&&t.charCodeAt(o+2)===34){f+=t.slice(u,o),h.push(f);const y=We(i,C.BLOCK_STRING,n,o+3,Qw(h).join(`
`));return i.line+=h.length-1,i.lineStart=s,y}if(m===92&&t.charCodeAt(o+1)===34&&t.charCodeAt(o+2)===34&&t.charCodeAt(o+3)===34){f+=t.slice(u,o),u=o+1,o+=4;continue}if(m===10||m===13){f+=t.slice(u,o),h.push(f),m===13&&t.charCodeAt(o+1)===10?o+=2:++o,f="",u=o,s=o;continue}if($i(m))++o;else if(qs(t,o))o+=2;else throw Qe(i.source,o,`Invalid character within String: ${di(i,o)}.`)}throw Qe(i.source,o,"Unterminated string.")}function lE(i,n){const t=i.source.body,a=t.length;let s=n+1;for(;s<a;){const o=t.charCodeAt(s);if(Xf(o))++s;else break}return We(i,C.NAME,n,s,t.slice(n,s))}const uE=10,nh=2;function $(i){return js(i,[])}function js(i,n){switch(typeof i){case"string":return JSON.stringify(i);case"function":return i.name?`[function ${i.name}]`:"[function]";case"object":return cE(i,n);default:return String(i)}}function cE(i,n){if(i===null)return"null";if(n.includes(i))return"[Circular]";const t=[...n,i];if(fE(i)){const a=i.toJSON();if(a!==i)return typeof a=="string"?a:js(a,t)}else if(Array.isArray(i))return dE(i,t);return hE(i,t)}function fE(i){return typeof i.toJSON=="function"}function hE(i,n){const t=Object.entries(i);return t.length===0?"{}":n.length>nh?"["+pE(i)+"]":"{ "+t.map(([s,o])=>s+": "+js(o,n)).join(", ")+" }"}function dE(i,n){if(i.length===0)return"[]";if(n.length>nh)return"[Array]";const t=Math.min(uE,i.length),a=i.length-t,s=[];for(let o=0;o<t;++o)s.push(js(i[o],n));return a===1?s.push("... 1 more item"):a>1&&s.push(`... ${a} more items`),"["+s.join(", ")+"]"}function pE(i){const n=Object.prototype.toString.call(i).replace(/^\[object /,"").replace(/]$/,"");if(n==="Object"&&typeof i.constructor=="function"){const t=i.constructor.name;if(typeof t=="string"&&t!=="")return t}return n}const gE=globalThis.process&&!0,pt=gE?function(n,t){return n instanceof t}:function(n,t){if(n instanceof t)return!0;if(typeof n=="object"&&n!==null){var a;const s=t.prototype[Symbol.toStringTag],o=Symbol.toStringTag in n?n[Symbol.toStringTag]:(a=n.constructor)===null||a===void 0?void 0:a.name;if(s===o){const u=$(n);throw new Error(`Cannot use ${s} "${u}" from another module or realm.

Ensure that there is only one instance of "graphql" in the node_modules
directory. If different versions of "graphql" are the dependencies of other
relied on modules, use "resolutions" to ensure only one version is installed.

https://yarnpkg.com/en/docs/selective-version-resolutions

Duplicate "graphql" modules cannot be used at the same time since different
versions may have different capabilities and behavior. The data from one
version used in the function from another could produce confusing and
spurious results.`)}}return!1};class th{constructor(n,t="GraphQL request",a={line:1,column:1}){typeof n=="string"||fe(!1,`Body must be a string. Received: ${$(n)}.`),this.body=n,this.name=t,this.locationOffset=a,this.locationOffset.line>0||fe(!1,"line in locationOffset is 1-indexed and must be positive."),this.locationOffset.column>0||fe(!1,"column in locationOffset is 1-indexed and must be positive.")}get[Symbol.toStringTag](){return"Source"}}function mE(i){return pt(i,th)}function yE(i,n){return new ih(i,n).parseDocument()}function vE(i,n){const t=new ih(i,n);t.expectToken(C.SOF);const a=t.parseValueLiteral(!1);return t.expectToken(C.EOF),a}class ih{constructor(n,t={}){const a=mE(n)?n:new th(n);this._lexer=new Xw(a),this._options=t,this._tokenCounter=0}parseName(){const n=this.expectToken(C.NAME);return this.node(n,{kind:w.NAME,value:n.value})}parseDocument(){return this.node(this._lexer.token,{kind:w.DOCUMENT,definitions:this.many(C.SOF,this.parseDefinition,C.EOF)})}parseDefinition(){if(this.peek(C.BRACE_L))return this.parseOperationDefinition();const n=this.peekDescription(),t=n?this._lexer.lookahead():this._lexer.token;if(t.kind===C.NAME){switch(t.value){case"schema":return this.parseSchemaDefinition();case"scalar":return this.parseScalarTypeDefinition();case"type":return this.parseObjectTypeDefinition();case"interface":return this.parseInterfaceTypeDefinition();case"union":return this.parseUnionTypeDefinition();case"enum":return this.parseEnumTypeDefinition();case"input":return this.parseInputObjectTypeDefinition();case"directive":return this.parseDirectiveDefinition()}if(n)throw Qe(this._lexer.source,this._lexer.token.start,"Unexpected description, descriptions are supported only on type definitions.");switch(t.value){case"query":case"mutation":case"subscription":return this.parseOperationDefinition();case"fragment":return this.parseFragmentDefinition();case"extend":return this.parseTypeSystemExtension()}}throw this.unexpected(t)}parseOperationDefinition(){const n=this._lexer.token;if(this.peek(C.BRACE_L))return this.node(n,{kind:w.OPERATION_DEFINITION,operation:$n.QUERY,name:void 0,variableDefinitions:[],directives:[],selectionSet:this.parseSelectionSet()});const t=this.parseOperationType();let a;return this.peek(C.NAME)&&(a=this.parseName()),this.node(n,{kind:w.OPERATION_DEFINITION,operation:t,name:a,variableDefinitions:this.parseVariableDefinitions(),directives:this.parseDirectives(!1),selectionSet:this.parseSelectionSet()})}parseOperationType(){const n=this.expectToken(C.NAME);switch(n.value){case"query":return $n.QUERY;case"mutation":return $n.MUTATION;case"subscription":return $n.SUBSCRIPTION}throw this.unexpected(n)}parseVariableDefinitions(){return this.optionalMany(C.PAREN_L,this.parseVariableDefinition,C.PAREN_R)}parseVariableDefinition(){return this.node(this._lexer.token,{kind:w.VARIABLE_DEFINITION,variable:this.parseVariable(),type:(this.expectToken(C.COLON),this.parseTypeReference()),defaultValue:this.expectOptionalToken(C.EQUALS)?this.parseConstValueLiteral():void 0,directives:this.parseConstDirectives()})}parseVariable(){const n=this._lexer.token;return this.expectToken(C.DOLLAR),this.node(n,{kind:w.VARIABLE,name:this.parseName()})}parseSelectionSet(){return this.node(this._lexer.token,{kind:w.SELECTION_SET,selections:this.many(C.BRACE_L,this.parseSelection,C.BRACE_R)})}parseSelection(){return this.peek(C.SPREAD)?this.parseFragment():this.parseField()}parseField(){const n=this._lexer.token,t=this.parseName();let a,s;return this.expectOptionalToken(C.COLON)?(a=t,s=this.parseName()):s=t,this.node(n,{kind:w.FIELD,alias:a,name:s,arguments:this.parseArguments(!1),directives:this.parseDirectives(!1),selectionSet:this.peek(C.BRACE_L)?this.parseSelectionSet():void 0})}parseArguments(n){const t=n?this.parseConstArgument:this.parseArgument;return this.optionalMany(C.PAREN_L,t,C.PAREN_R)}parseArgument(n=!1){const t=this._lexer.token,a=this.parseName();return this.expectToken(C.COLON),this.node(t,{kind:w.ARGUMENT,name:a,value:this.parseValueLiteral(n)})}parseConstArgument(){return this.parseArgument(!0)}parseFragment(){const n=this._lexer.token;this.expectToken(C.SPREAD);const t=this.expectOptionalKeyword("on");return!t&&this.peek(C.NAME)?this.node(n,{kind:w.FRAGMENT_SPREAD,name:this.parseFragmentName(),directives:this.parseDirectives(!1)}):this.node(n,{kind:w.INLINE_FRAGMENT,typeCondition:t?this.parseNamedType():void 0,directives:this.parseDirectives(!1),selectionSet:this.parseSelectionSet()})}parseFragmentDefinition(){const n=this._lexer.token;return this.expectKeyword("fragment"),this._options.allowLegacyFragmentVariables===!0?this.node(n,{kind:w.FRAGMENT_DEFINITION,name:this.parseFragmentName(),variableDefinitions:this.parseVariableDefinitions(),typeCondition:(this.expectKeyword("on"),this.parseNamedType()),directives:this.parseDirectives(!1),selectionSet:this.parseSelectionSet()}):this.node(n,{kind:w.FRAGMENT_DEFINITION,name:this.parseFragmentName(),typeCondition:(this.expectKeyword("on"),this.parseNamedType()),directives:this.parseDirectives(!1),selectionSet:this.parseSelectionSet()})}parseFragmentName(){if(this._lexer.token.value==="on")throw this.unexpected();return this.parseName()}parseValueLiteral(n){const t=this._lexer.token;switch(t.kind){case C.BRACKET_L:return this.parseList(n);case C.BRACE_L:return this.parseObject(n);case C.INT:return this.advanceLexer(),this.node(t,{kind:w.INT,value:t.value});case C.FLOAT:return this.advanceLexer(),this.node(t,{kind:w.FLOAT,value:t.value});case C.STRING:case C.BLOCK_STRING:return this.parseStringLiteral();case C.NAME:switch(this.advanceLexer(),t.value){case"true":return this.node(t,{kind:w.BOOLEAN,value:!0});case"false":return this.node(t,{kind:w.BOOLEAN,value:!1});case"null":return this.node(t,{kind:w.NULL});default:return this.node(t,{kind:w.ENUM,value:t.value})}case C.DOLLAR:if(n)if(this.expectToken(C.DOLLAR),this._lexer.token.kind===C.NAME){const a=this._lexer.token.value;throw Qe(this._lexer.source,t.start,`Unexpected variable "$${a}" in constant value.`)}else throw this.unexpected(t);return this.parseVariable();default:throw this.unexpected()}}parseConstValueLiteral(){return this.parseValueLiteral(!0)}parseStringLiteral(){const n=this._lexer.token;return this.advanceLexer(),this.node(n,{kind:w.STRING,value:n.value,block:n.kind===C.BLOCK_STRING})}parseList(n){const t=()=>this.parseValueLiteral(n);return this.node(this._lexer.token,{kind:w.LIST,values:this.any(C.BRACKET_L,t,C.BRACKET_R)})}parseObject(n){const t=()=>this.parseObjectField(n);return this.node(this._lexer.token,{kind:w.OBJECT,fields:this.any(C.BRACE_L,t,C.BRACE_R)})}parseObjectField(n){const t=this._lexer.token,a=this.parseName();return this.expectToken(C.COLON),this.node(t,{kind:w.OBJECT_FIELD,name:a,value:this.parseValueLiteral(n)})}parseDirectives(n){const t=[];for(;this.peek(C.AT);)t.push(this.parseDirective(n));return t}parseConstDirectives(){return this.parseDirectives(!0)}parseDirective(n){const t=this._lexer.token;return this.expectToken(C.AT),this.node(t,{kind:w.DIRECTIVE,name:this.parseName(),arguments:this.parseArguments(n)})}parseTypeReference(){const n=this._lexer.token;let t;if(this.expectOptionalToken(C.BRACKET_L)){const a=this.parseTypeReference();this.expectToken(C.BRACKET_R),t=this.node(n,{kind:w.LIST_TYPE,type:a})}else t=this.parseNamedType();return this.expectOptionalToken(C.BANG)?this.node(n,{kind:w.NON_NULL_TYPE,type:t}):t}parseNamedType(){return this.node(this._lexer.token,{kind:w.NAMED_TYPE,name:this.parseName()})}peekDescription(){return this.peek(C.STRING)||this.peek(C.BLOCK_STRING)}parseDescription(){if(this.peekDescription())return this.parseStringLiteral()}parseSchemaDefinition(){const n=this._lexer.token,t=this.parseDescription();this.expectKeyword("schema");const a=this.parseConstDirectives(),s=this.many(C.BRACE_L,this.parseOperationTypeDefinition,C.BRACE_R);return this.node(n,{kind:w.SCHEMA_DEFINITION,description:t,directives:a,operationTypes:s})}parseOperationTypeDefinition(){const n=this._lexer.token,t=this.parseOperationType();this.expectToken(C.COLON);const a=this.parseNamedType();return this.node(n,{kind:w.OPERATION_TYPE_DEFINITION,operation:t,type:a})}parseScalarTypeDefinition(){const n=this._lexer.token,t=this.parseDescription();this.expectKeyword("scalar");const a=this.parseName(),s=this.parseConstDirectives();return this.node(n,{kind:w.SCALAR_TYPE_DEFINITION,description:t,name:a,directives:s})}parseObjectTypeDefinition(){const n=this._lexer.token,t=this.parseDescription();this.expectKeyword("type");const a=this.parseName(),s=this.parseImplementsInterfaces(),o=this.parseConstDirectives(),u=this.parseFieldsDefinition();return this.node(n,{kind:w.OBJECT_TYPE_DEFINITION,description:t,name:a,interfaces:s,directives:o,fields:u})}parseImplementsInterfaces(){return this.expectOptionalKeyword("implements")?this.delimitedMany(C.AMP,this.parseNamedType):[]}parseFieldsDefinition(){return this.optionalMany(C.BRACE_L,this.parseFieldDefinition,C.BRACE_R)}parseFieldDefinition(){const n=this._lexer.token,t=this.parseDescription(),a=this.parseName(),s=this.parseArgumentDefs();this.expectToken(C.COLON);const o=this.parseTypeReference(),u=this.parseConstDirectives();return this.node(n,{kind:w.FIELD_DEFINITION,description:t,name:a,arguments:s,type:o,directives:u})}parseArgumentDefs(){return this.optionalMany(C.PAREN_L,this.parseInputValueDef,C.PAREN_R)}parseInputValueDef(){const n=this._lexer.token,t=this.parseDescription(),a=this.parseName();this.expectToken(C.COLON);const s=this.parseTypeReference();let o;this.expectOptionalToken(C.EQUALS)&&(o=this.parseConstValueLiteral());const u=this.parseConstDirectives();return this.node(n,{kind:w.INPUT_VALUE_DEFINITION,description:t,name:a,type:s,defaultValue:o,directives:u})}parseInterfaceTypeDefinition(){const n=this._lexer.token,t=this.parseDescription();this.expectKeyword("interface");const a=this.parseName(),s=this.parseImplementsInterfaces(),o=this.parseConstDirectives(),u=this.parseFieldsDefinition();return this.node(n,{kind:w.INTERFACE_TYPE_DEFINITION,description:t,name:a,interfaces:s,directives:o,fields:u})}parseUnionTypeDefinition(){const n=this._lexer.token,t=this.parseDescription();this.expectKeyword("union");const a=this.parseName(),s=this.parseConstDirectives(),o=this.parseUnionMemberTypes();return this.node(n,{kind:w.UNION_TYPE_DEFINITION,description:t,name:a,directives:s,types:o})}parseUnionMemberTypes(){return this.expectOptionalToken(C.EQUALS)?this.delimitedMany(C.PIPE,this.parseNamedType):[]}parseEnumTypeDefinition(){const n=this._lexer.token,t=this.parseDescription();this.expectKeyword("enum");const a=this.parseName(),s=this.parseConstDirectives(),o=this.parseEnumValuesDefinition();return this.node(n,{kind:w.ENUM_TYPE_DEFINITION,description:t,name:a,directives:s,values:o})}parseEnumValuesDefinition(){return this.optionalMany(C.BRACE_L,this.parseEnumValueDefinition,C.BRACE_R)}parseEnumValueDefinition(){const n=this._lexer.token,t=this.parseDescription(),a=this.parseEnumValueName(),s=this.parseConstDirectives();return this.node(n,{kind:w.ENUM_VALUE_DEFINITION,description:t,name:a,directives:s})}parseEnumValueName(){if(this._lexer.token.value==="true"||this._lexer.token.value==="false"||this._lexer.token.value==="null")throw Qe(this._lexer.source,this._lexer.token.start,`${Is(this._lexer.token)} is reserved and cannot be used for an enum value.`);return this.parseName()}parseInputObjectTypeDefinition(){const n=this._lexer.token,t=this.parseDescription();this.expectKeyword("input");const a=this.parseName(),s=this.parseConstDirectives(),o=this.parseInputFieldsDefinition();return this.node(n,{kind:w.INPUT_OBJECT_TYPE_DEFINITION,description:t,name:a,directives:s,fields:o})}parseInputFieldsDefinition(){return this.optionalMany(C.BRACE_L,this.parseInputValueDef,C.BRACE_R)}parseTypeSystemExtension(){const n=this._lexer.lookahead();if(n.kind===C.NAME)switch(n.value){case"schema":return this.parseSchemaExtension();case"scalar":return this.parseScalarTypeExtension();case"type":return this.parseObjectTypeExtension();case"interface":return this.parseInterfaceTypeExtension();case"union":return this.parseUnionTypeExtension();case"enum":return this.parseEnumTypeExtension();case"input":return this.parseInputObjectTypeExtension()}throw this.unexpected(n)}parseSchemaExtension(){const n=this._lexer.token;this.expectKeyword("extend"),this.expectKeyword("schema");const t=this.parseConstDirectives(),a=this.optionalMany(C.BRACE_L,this.parseOperationTypeDefinition,C.BRACE_R);if(t.length===0&&a.length===0)throw this.unexpected();return this.node(n,{kind:w.SCHEMA_EXTENSION,directives:t,operationTypes:a})}parseScalarTypeExtension(){const n=this._lexer.token;this.expectKeyword("extend"),this.expectKeyword("scalar");const t=this.parseName(),a=this.parseConstDirectives();if(a.length===0)throw this.unexpected();return this.node(n,{kind:w.SCALAR_TYPE_EXTENSION,name:t,directives:a})}parseObjectTypeExtension(){const n=this._lexer.token;this.expectKeyword("extend"),this.expectKeyword("type");const t=this.parseName(),a=this.parseImplementsInterfaces(),s=this.parseConstDirectives(),o=this.parseFieldsDefinition();if(a.length===0&&s.length===0&&o.length===0)throw this.unexpected();return this.node(n,{kind:w.OBJECT_TYPE_EXTENSION,name:t,interfaces:a,directives:s,fields:o})}parseInterfaceTypeExtension(){const n=this._lexer.token;this.expectKeyword("extend"),this.expectKeyword("interface");const t=this.parseName(),a=this.parseImplementsInterfaces(),s=this.parseConstDirectives(),o=this.parseFieldsDefinition();if(a.length===0&&s.length===0&&o.length===0)throw this.unexpected();return this.node(n,{kind:w.INTERFACE_TYPE_EXTENSION,name:t,interfaces:a,directives:s,fields:o})}parseUnionTypeExtension(){const n=this._lexer.token;this.expectKeyword("extend"),this.expectKeyword("union");const t=this.parseName(),a=this.parseConstDirectives(),s=this.parseUnionMemberTypes();if(a.length===0&&s.length===0)throw this.unexpected();return this.node(n,{kind:w.UNION_TYPE_EXTENSION,name:t,directives:a,types:s})}parseEnumTypeExtension(){const n=this._lexer.token;this.expectKeyword("extend"),this.expectKeyword("enum");const t=this.parseName(),a=this.parseConstDirectives(),s=this.parseEnumValuesDefinition();if(a.length===0&&s.length===0)throw this.unexpected();return this.node(n,{kind:w.ENUM_TYPE_EXTENSION,name:t,directives:a,values:s})}parseInputObjectTypeExtension(){const n=this._lexer.token;this.expectKeyword("extend"),this.expectKeyword("input");const t=this.parseName(),a=this.parseConstDirectives(),s=this.parseInputFieldsDefinition();if(a.length===0&&s.length===0)throw this.unexpected();return this.node(n,{kind:w.INPUT_OBJECT_TYPE_EXTENSION,name:t,directives:a,fields:s})}parseDirectiveDefinition(){const n=this._lexer.token,t=this.parseDescription();this.expectKeyword("directive"),this.expectToken(C.AT);const a=this.parseName(),s=this.parseArgumentDefs(),o=this.expectOptionalKeyword("repeatable");this.expectKeyword("on");const u=this.parseDirectiveLocations();return this.node(n,{kind:w.DIRECTIVE_DEFINITION,description:t,name:a,arguments:s,repeatable:o,locations:u})}parseDirectiveLocations(){return this.delimitedMany(C.PIPE,this.parseDirectiveLocation)}parseDirectiveLocation(){const n=this._lexer.token,t=this.parseName();if(Object.prototype.hasOwnProperty.call(j,t.value))return t;throw this.unexpected(n)}node(n,t){return this._options.noLocation!==!0&&(t.loc=new Hw(n,this._lexer.lastToken,this._lexer.source)),t}peek(n){return this._lexer.token.kind===n}expectToken(n){const t=this._lexer.token;if(t.kind===n)return this.advanceLexer(),t;throw Qe(this._lexer.source,t.start,`Expected ${rh(n)}, found ${Is(t)}.`)}expectOptionalToken(n){return this._lexer.token.kind===n?(this.advanceLexer(),!0):!1}expectKeyword(n){const t=this._lexer.token;if(t.kind===C.NAME&&t.value===n)this.advanceLexer();else throw Qe(this._lexer.source,t.start,`Expected "${n}", found ${Is(t)}.`)}expectOptionalKeyword(n){const t=this._lexer.token;return t.kind===C.NAME&&t.value===n?(this.advanceLexer(),!0):!1}unexpected(n){const t=n??this._lexer.token;return Qe(this._lexer.source,t.start,`Unexpected ${Is(t)}.`)}any(n,t,a){this.expectToken(n);const s=[];for(;!this.expectOptionalToken(a);)s.push(t.call(this));return s}optionalMany(n,t,a){if(this.expectOptionalToken(n)){const s=[];do s.push(t.call(this));while(!this.expectOptionalToken(a));return s}return[]}many(n,t,a){this.expectToken(n);const s=[];do s.push(t.call(this));while(!this.expectOptionalToken(a));return s}delimitedMany(n,t){this.expectOptionalToken(n);const a=[];do a.push(t.call(this));while(this.expectOptionalToken(n));return a}advanceLexer(){const{maxTokens:n}=this._options,t=this._lexer.advance();if(n!==void 0&&t.kind!==C.EOF&&(++this._tokenCounter,this._tokenCounter>n))throw Qe(this._lexer.source,t.start,`Document contains more that ${n} tokens. Parsing aborted.`)}}function Is(i){const n=i.value;return rh(i.kind)+(n!=null?` "${n}"`:"")}function rh(i){return Zw(i)?`"${i}"`:i}const bE=5;function Jt(i,n){const[t,a]=n?[i,n]:[void 0,i];let s=" Did you mean ";t&&(s+=t+" ");const o=a.map(h=>`"${h}"`);switch(o.length){case 0:return"";case 1:return s+o[0]+"?";case 2:return s+o[0]+" or "+o[1]+"?"}const u=o.slice(0,bE),f=u.pop();return s+u.join(", ")+", or "+f+"?"}function df(i){return i}function pi(i,n){const t=Object.create(null);for(const a of i)t[n(a)]=a;return t}function ci(i,n,t){const a=Object.create(null);for(const s of i)a[n(s)]=t(s);return a}function At(i,n){const t=Object.create(null);for(const a of Object.keys(i))t[a]=n(i[a],a);return t}function Ko(i,n){let t=0,a=0;for(;t<i.length&&a<n.length;){let s=i.charCodeAt(t),o=n.charCodeAt(a);if(_s(s)&&_s(o)){let u=0;do++t,u=u*10+s-Co,s=i.charCodeAt(t);while(_s(s)&&u>0);let f=0;do++a,f=f*10+o-Co,o=n.charCodeAt(a);while(_s(o)&&f>0);if(u<f)return-1;if(u>f)return 1}else{if(s<o)return-1;if(s>o)return 1;++t,++a}}return i.length-n.length}const Co=48,TE=57;function _s(i){return!isNaN(i)&&Co<=i&&i<=TE}function vi(i,n){const t=Object.create(null),a=new wE(i),s=Math.floor(i.length*.4)+1;for(const o of n){const u=a.measure(o,s);u!==void 0&&(t[o]=u)}return Object.keys(t).sort((o,u)=>{const f=t[o]-t[u];return f!==0?f:Ko(o,u)})}class wE{constructor(n){this._input=n,this._inputLowerCase=n.toLowerCase(),this._inputArray=pf(this._inputLowerCase),this._rows=[new Array(n.length+1).fill(0),new Array(n.length+1).fill(0),new Array(n.length+1).fill(0)]}measure(n,t){if(this._input===n)return 0;const a=n.toLowerCase();if(this._inputLowerCase===a)return 1;let s=pf(a),o=this._inputArray;if(s.length<o.length){const y=s;s=o,o=y}const u=s.length,f=o.length;if(u-f>t)return;const h=this._rows;for(let y=0;y<=f;y++)h[0][y]=y;for(let y=1;y<=u;y++){const b=h[(y-1)%3],k=h[y%3];let _=k[0]=y;for(let O=1;O<=f;O++){const P=s[y-1]===o[O-1]?0:1;let q=Math.min(b[O]+1,k[O-1]+1,b[O-1]+P);if(y>1&&O>1&&s[y-1]===o[O-2]&&s[y-2]===o[O-1]){const ce=h[(y-2)%3][O-2];q=Math.min(q,ce+1)}q<_&&(_=q),k[O]=q}if(_>t)return}const m=h[u%3][f];return m<=t?m:void 0}}function pf(i){const n=i.length,t=new Array(n);for(let a=0;a<n;++a)t[a]=i.charCodeAt(a);return t}function Gn(i){if(i==null)return Object.create(null);if(Object.getPrototypeOf(i)===null)return i;const n=Object.create(null);for(const[t,a]of Object.entries(i))n[t]=a;return n}function EE(i){return`"${i.replace(DE,IE)}"`}const DE=/[\x00-\x1f\x22\x5c\x7f-\x9f]/g;function IE(i){return _E[i.charCodeAt(0)]}const _E=["\\u0000","\\u0001","\\u0002","\\u0003","\\u0004","\\u0005","\\u0006","\\u0007","\\b","\\t","\\n","\\u000B","\\f","\\r","\\u000E","\\u000F","\\u0010","\\u0011","\\u0012","\\u0013","\\u0014","\\u0015","\\u0016","\\u0017","\\u0018","\\u0019","\\u001A","\\u001B","\\u001C","\\u001D","\\u001E","\\u001F","","",'\\"',"","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","\\\\","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","\\u007F","\\u0080","\\u0081","\\u0082","\\u0083","\\u0084","\\u0085","\\u0086","\\u0087","\\u0088","\\u0089","\\u008A","\\u008B","\\u008C","\\u008D","\\u008E","\\u008F","\\u0090","\\u0091","\\u0092","\\u0093","\\u0094","\\u0095","\\u0096","\\u0097","\\u0098","\\u0099","\\u009A","\\u009B","\\u009C","\\u009D","\\u009E","\\u009F"],dr=Object.freeze({});function sh(i,n,t=Jf){const a=new Map;for(const ce of Object.values(w))a.set(ce,ah(n,ce));let s,o=Array.isArray(i),u=[i],f=-1,h=[],m=i,y,b;const k=[],_=[];do{f++;const ce=f===u.length,Ae=ce&&h.length!==0;if(ce){if(y=_.length===0?void 0:k[k.length-1],m=b,b=_.pop(),Ae)if(o){m=m.slice();let Ne=0;for(const[xe,an]of h){const en=xe-Ne;an===null?(m.splice(en,1),Ne++):m[en]=an}}else{m=Object.defineProperties({},Object.getOwnPropertyDescriptors(m));for(const[Ne,xe]of h)m[Ne]=xe}f=s.index,u=s.keys,h=s.edits,o=s.inArray,s=s.prev}else if(b){if(y=o?f:u[f],m=b[y],m==null)continue;k.push(y)}let me;if(!Array.isArray(m)){var O,P;ff(m)||fe(!1,`Invalid AST Node: ${$(m)}.`);const Ne=ce?(O=a.get(m.kind))===null||O===void 0?void 0:O.leave:(P=a.get(m.kind))===null||P===void 0?void 0:P.enter;if(me=Ne==null?void 0:Ne.call(n,m,y,b,k,_),me===dr)break;if(me===!1){if(!ce){k.pop();continue}}else if(me!==void 0&&(h.push([y,me]),!ce))if(ff(me))m=me;else{k.pop();continue}}if(me===void 0&&Ae&&h.push([y,m]),ce)k.pop();else{var q;s={inArray:o,index:f,keys:u,edits:h,prev:s},o=Array.isArray(m),u=o?m:(q=t[m.kind])!==null&&q!==void 0?q:[],f=-1,h=[],b&&_.push(b),b=m}}while(s!==void 0);return h.length!==0?h[h.length-1][1]:i}function AE(i){const n=new Array(i.length).fill(null),t=Object.create(null);for(const a of Object.values(w)){let s=!1;const o=new Array(i.length).fill(void 0),u=new Array(i.length).fill(void 0);for(let h=0;h<i.length;++h){const{enter:m,leave:y}=ah(i[h],a);s||(s=m!=null||y!=null),o[h]=m,u[h]=y}if(!s)continue;const f={enter(...h){const m=h[0];for(let b=0;b<i.length;b++)if(n[b]===null){var y;const k=(y=o[b])===null||y===void 0?void 0:y.apply(i[b],h);if(k===!1)n[b]=m;else if(k===dr)n[b]=dr;else if(k!==void 0)return k}},leave(...h){const m=h[0];for(let b=0;b<i.length;b++)if(n[b]===null){var y;const k=(y=u[b])===null||y===void 0?void 0:y.apply(i[b],h);if(k===dr)n[b]=dr;else if(k!==void 0&&k!==!1)return k}else n[b]===m&&(n[b]=null)}};t[a]=f}return t}function ah(i,n){const t=i[n];return typeof t=="object"?t:typeof t=="function"?{enter:t,leave:void 0}:{enter:i.enter,leave:i.leave}}function Je(i){return sh(i,kE)}const SE=80,kE={Name:{leave:i=>i.value},Variable:{leave:i=>"$"+i.name},Document:{leave:i=>W(i.definitions,`

`)},OperationDefinition:{leave(i){const n=le("(",W(i.variableDefinitions,", "),")"),t=W([i.operation,W([i.name,n]),W(i.directives," ")]," ");return(t==="query"?"":t+" ")+i.selectionSet}},VariableDefinition:{leave:({variable:i,type:n,defaultValue:t,directives:a})=>i+": "+n+le(" = ",t)+le(" ",W(a," "))},SelectionSet:{leave:({selections:i})=>Qn(i)},Field:{leave({alias:i,name:n,arguments:t,directives:a,selectionSet:s}){const o=le("",i,": ")+n;let u=o+le("(",W(t,", "),")");return u.length>SE&&(u=o+le(`(
`,ks(W(t,`
`)),`
)`)),W([u,W(a," "),s]," ")}},Argument:{leave:({name:i,value:n})=>i+": "+n},FragmentSpread:{leave:({name:i,directives:n})=>"..."+i+le(" ",W(n," "))},InlineFragment:{leave:({typeCondition:i,directives:n,selectionSet:t})=>W(["...",le("on ",i),W(n," "),t]," ")},FragmentDefinition:{leave:({name:i,typeCondition:n,variableDefinitions:t,directives:a,selectionSet:s})=>`fragment ${i}${le("(",W(t,", "),")")} on ${n} ${le("",W(a," ")," ")}`+s},IntValue:{leave:({value:i})=>i},FloatValue:{leave:({value:i})=>i},StringValue:{leave:({value:i,block:n})=>n?Kw(i):EE(i)},BooleanValue:{leave:({value:i})=>i?"true":"false"},NullValue:{leave:()=>"null"},EnumValue:{leave:({value:i})=>i},ListValue:{leave:({values:i})=>"["+W(i,", ")+"]"},ObjectValue:{leave:({fields:i})=>"{"+W(i,", ")+"}"},ObjectField:{leave:({name:i,value:n})=>i+": "+n},Directive:{leave:({name:i,arguments:n})=>"@"+i+le("(",W(n,", "),")")},NamedType:{leave:({name:i})=>i},ListType:{leave:({type:i})=>"["+i+"]"},NonNullType:{leave:({type:i})=>i+"!"},SchemaDefinition:{leave:({description:i,directives:n,operationTypes:t})=>le("",i,`
`)+W(["schema",W(n," "),Qn(t)]," ")},OperationTypeDefinition:{leave:({operation:i,type:n})=>i+": "+n},ScalarTypeDefinition:{leave:({description:i,name:n,directives:t})=>le("",i,`
`)+W(["scalar",n,W(t," ")]," ")},ObjectTypeDefinition:{leave:({description:i,name:n,interfaces:t,directives:a,fields:s})=>le("",i,`
`)+W(["type",n,le("implements ",W(t," & ")),W(a," "),Qn(s)]," ")},FieldDefinition:{leave:({description:i,name:n,arguments:t,type:a,directives:s})=>le("",i,`
`)+n+(gf(t)?le(`(
`,ks(W(t,`
`)),`
)`):le("(",W(t,", "),")"))+": "+a+le(" ",W(s," "))},InputValueDefinition:{leave:({description:i,name:n,type:t,defaultValue:a,directives:s})=>le("",i,`
`)+W([n+": "+t,le("= ",a),W(s," ")]," ")},InterfaceTypeDefinition:{leave:({description:i,name:n,interfaces:t,directives:a,fields:s})=>le("",i,`
`)+W(["interface",n,le("implements ",W(t," & ")),W(a," "),Qn(s)]," ")},UnionTypeDefinition:{leave:({description:i,name:n,directives:t,types:a})=>le("",i,`
`)+W(["union",n,W(t," "),le("= ",W(a," | "))]," ")},EnumTypeDefinition:{leave:({description:i,name:n,directives:t,values:a})=>le("",i,`
`)+W(["enum",n,W(t," "),Qn(a)]," ")},EnumValueDefinition:{leave:({description:i,name:n,directives:t})=>le("",i,`
`)+W([n,W(t," ")]," ")},InputObjectTypeDefinition:{leave:({description:i,name:n,directives:t,fields:a})=>le("",i,`
`)+W(["input",n,W(t," "),Qn(a)]," ")},DirectiveDefinition:{leave:({description:i,name:n,arguments:t,repeatable:a,locations:s})=>le("",i,`
`)+"directive @"+n+(gf(t)?le(`(
`,ks(W(t,`
`)),`
)`):le("(",W(t,", "),")"))+(a?" repeatable":"")+" on "+W(s," | ")},SchemaExtension:{leave:({directives:i,operationTypes:n})=>W(["extend schema",W(i," "),Qn(n)]," ")},ScalarTypeExtension:{leave:({name:i,directives:n})=>W(["extend scalar",i,W(n," ")]," ")},ObjectTypeExtension:{leave:({name:i,interfaces:n,directives:t,fields:a})=>W(["extend type",i,le("implements ",W(n," & ")),W(t," "),Qn(a)]," ")},InterfaceTypeExtension:{leave:({name:i,interfaces:n,directives:t,fields:a})=>W(["extend interface",i,le("implements ",W(n," & ")),W(t," "),Qn(a)]," ")},UnionTypeExtension:{leave:({name:i,directives:n,types:t})=>W(["extend union",i,W(n," "),le("= ",W(t," | "))]," ")},EnumTypeExtension:{leave:({name:i,directives:n,values:t})=>W(["extend enum",i,W(n," "),Qn(t)]," ")},InputObjectTypeExtension:{leave:({name:i,directives:n,fields:t})=>W(["extend input",i,W(n," "),Qn(t)]," ")}};function W(i,n=""){var t;return(t=i==null?void 0:i.filter(a=>a).join(n))!==null&&t!==void 0?t:""}function Qn(i){return le(`{
`,ks(W(i,`
`)),`
}`)}function le(i,n,t=""){return n!=null&&n!==""?i+n+t:""}function ks(i){return le("  ",i.replace(/\n/g,`
  `))}function gf(i){var n;return(n=i==null?void 0:i.some(t=>t.includes(`
`)))!==null&&n!==void 0?n:!1}function Oo(i,n){switch(i.kind){case w.NULL:return null;case w.INT:return parseInt(i.value,10);case w.FLOAT:return parseFloat(i.value);case w.STRING:case w.ENUM:case w.BOOLEAN:return i.value;case w.LIST:return i.values.map(t=>Oo(t,n));case w.OBJECT:return ci(i.fields,t=>t.name.value,t=>Oo(t.value,n));case w.VARIABLE:return n==null?void 0:n[i.name.value]}}function st(i){if(i!=null||fe(!1,"Must provide name."),typeof i=="string"||fe(!1,"Expected name to be a string."),i.length===0)throw new L("Expected name to be a non-empty string.");for(let n=1;n<i.length;++n)if(!Xf(i.charCodeAt(n)))throw new L(`Names must only contain [_a-zA-Z0-9] but "${i}" does not.`);if(!Jo(i.charCodeAt(0)))throw new L(`Names must start with [_a-zA-Z] but "${i}" does not.`);return i}function FE(i){if(i==="true"||i==="false"||i==="null")throw new L(`Enum values cannot be named: ${i}`);return st(i)}function Xo(i){return Kt(i)||qe(i)||Ve(i)||Mn(i)||et(i)||vn(i)||bn(i)||_e(i)}function Kt(i){return pt(i,Ot)}function qe(i){return pt(i,ht)}function NE(i){if(!qe(i))throw new Error(`Expected ${$(i)} to be a GraphQL Object type.`);return i}function Ve(i){return pt(i,xs)}function CE(i){if(!Ve(i))throw new Error(`Expected ${$(i)} to be a GraphQL Interface type.`);return i}function Mn(i){return pt(i,Ls)}function et(i){return pt(i,Ui)}function vn(i){return pt(i,Ps)}function bn(i){return pt(i,fn)}function _e(i){return pt(i,re)}function Zo(i){return Kt(i)||et(i)||vn(i)||el(i)&&Zo(i.ofType)}function oh(i){return Kt(i)||qe(i)||Ve(i)||Mn(i)||et(i)||el(i)&&oh(i.ofType)}function Bi(i){return Kt(i)||et(i)}function Dr(i){return qe(i)||Ve(i)||Mn(i)}function fi(i){return Ve(i)||Mn(i)}class fn{constructor(n){Xo(n)||fe(!1,`Expected ${$(n)} to be a GraphQL type.`),this.ofType=n}get[Symbol.toStringTag](){return"GraphQLList"}toString(){return"["+String(this.ofType)+"]"}toJSON(){return this.toString()}}class re{constructor(n){lh(n)||fe(!1,`Expected ${$(n)} to be a GraphQL nullable type.`),this.ofType=n}get[Symbol.toStringTag](){return"GraphQLNonNull"}toString(){return String(this.ofType)+"!"}toJSON(){return this.toString()}}function el(i){return bn(i)||_e(i)}function lh(i){return Xo(i)&&!_e(i)}function OE(i){if(!lh(i))throw new Error(`Expected ${$(i)} to be a GraphQL nullable type.`);return i}function RE(i){if(i)return _e(i)?i.ofType:i}function PI(i){return Kt(i)||qe(i)||Ve(i)||Mn(i)||et(i)||vn(i)}function gi(i){if(i){let n=i;for(;el(n);)n=n.ofType;return n}}function uh(i){return typeof i=="function"?i():i}function ch(i){return typeof i=="function"?i():i}class Ot{constructor(n){var t,a,s,o;const u=(t=n.parseValue)!==null&&t!==void 0?t:df;this.name=st(n.name),this.description=n.description,this.specifiedByURL=n.specifiedByURL,this.serialize=(a=n.serialize)!==null&&a!==void 0?a:df,this.parseValue=u,this.parseLiteral=(s=n.parseLiteral)!==null&&s!==void 0?s:(f,h)=>u(Oo(f,h)),this.extensions=Gn(n.extensions),this.astNode=n.astNode,this.extensionASTNodes=(o=n.extensionASTNodes)!==null&&o!==void 0?o:[],n.specifiedByURL==null||typeof n.specifiedByURL=="string"||fe(!1,`${this.name} must provide "specifiedByURL" as a string, but got: ${$(n.specifiedByURL)}.`),n.serialize==null||typeof n.serialize=="function"||fe(!1,`${this.name} must provide "serialize" function. If this custom Scalar is also used as an input type, ensure "parseValue" and "parseLiteral" functions are also provided.`),n.parseLiteral&&(typeof n.parseValue=="function"&&typeof n.parseLiteral=="function"||fe(!1,`${this.name} must provide both "parseValue" and "parseLiteral" functions.`))}get[Symbol.toStringTag](){return"GraphQLScalarType"}toConfig(){return{name:this.name,description:this.description,specifiedByURL:this.specifiedByURL,serialize:this.serialize,parseValue:this.parseValue,parseLiteral:this.parseLiteral,extensions:this.extensions,astNode:this.astNode,extensionASTNodes:this.extensionASTNodes}}toString(){return this.name}toJSON(){return this.toString()}}class ht{constructor(n){var t;this.name=st(n.name),this.description=n.description,this.isTypeOf=n.isTypeOf,this.extensions=Gn(n.extensions),this.astNode=n.astNode,this.extensionASTNodes=(t=n.extensionASTNodes)!==null&&t!==void 0?t:[],this._fields=()=>hh(n),this._interfaces=()=>fh(n),n.isTypeOf==null||typeof n.isTypeOf=="function"||fe(!1,`${this.name} must provide "isTypeOf" as a function, but got: ${$(n.isTypeOf)}.`)}get[Symbol.toStringTag](){return"GraphQLObjectType"}getFields(){return typeof this._fields=="function"&&(this._fields=this._fields()),this._fields}getInterfaces(){return typeof this._interfaces=="function"&&(this._interfaces=this._interfaces()),this._interfaces}toConfig(){return{name:this.name,description:this.description,interfaces:this.getInterfaces(),fields:ph(this.getFields()),isTypeOf:this.isTypeOf,extensions:this.extensions,astNode:this.astNode,extensionASTNodes:this.extensionASTNodes}}toString(){return this.name}toJSON(){return this.toString()}}function fh(i){var n;const t=uh((n=i.interfaces)!==null&&n!==void 0?n:[]);return Array.isArray(t)||fe(!1,`${i.name} interfaces must be an Array or a function which returns an Array.`),t}function hh(i){const n=ch(i.fields);return Pi(n)||fe(!1,`${i.name} fields must be an object with field names as keys or a function which returns such an object.`),At(n,(t,a)=>{var s;Pi(t)||fe(!1,`${i.name}.${a} field config must be an object.`),t.resolve==null||typeof t.resolve=="function"||fe(!1,`${i.name}.${a} field resolver must be a function if provided, but got: ${$(t.resolve)}.`);const o=(s=t.args)!==null&&s!==void 0?s:{};return Pi(o)||fe(!1,`${i.name}.${a} args must be an object with argument names as keys.`),{name:st(a),description:t.description,type:t.type,args:dh(o),resolve:t.resolve,subscribe:t.subscribe,deprecationReason:t.deprecationReason,extensions:Gn(t.extensions),astNode:t.astNode}})}function dh(i){return Object.entries(i).map(([n,t])=>({name:st(n),description:t.description,type:t.type,defaultValue:t.defaultValue,deprecationReason:t.deprecationReason,extensions:Gn(t.extensions),astNode:t.astNode}))}function Pi(i){return Ct(i)&&!Array.isArray(i)}function ph(i){return At(i,n=>({description:n.description,type:n.type,args:gh(n.args),resolve:n.resolve,subscribe:n.subscribe,deprecationReason:n.deprecationReason,extensions:n.extensions,astNode:n.astNode}))}function gh(i){return ci(i,n=>n.name,n=>({description:n.description,type:n.type,defaultValue:n.defaultValue,deprecationReason:n.deprecationReason,extensions:n.extensions,astNode:n.astNode}))}function mh(i){return _e(i.type)&&i.defaultValue===void 0}class xs{constructor(n){var t;this.name=st(n.name),this.description=n.description,this.resolveType=n.resolveType,this.extensions=Gn(n.extensions),this.astNode=n.astNode,this.extensionASTNodes=(t=n.extensionASTNodes)!==null&&t!==void 0?t:[],this._fields=hh.bind(void 0,n),this._interfaces=fh.bind(void 0,n),n.resolveType==null||typeof n.resolveType=="function"||fe(!1,`${this.name} must provide "resolveType" as a function, but got: ${$(n.resolveType)}.`)}get[Symbol.toStringTag](){return"GraphQLInterfaceType"}getFields(){return typeof this._fields=="function"&&(this._fields=this._fields()),this._fields}getInterfaces(){return typeof this._interfaces=="function"&&(this._interfaces=this._interfaces()),this._interfaces}toConfig(){return{name:this.name,description:this.description,interfaces:this.getInterfaces(),fields:ph(this.getFields()),resolveType:this.resolveType,extensions:this.extensions,astNode:this.astNode,extensionASTNodes:this.extensionASTNodes}}toString(){return this.name}toJSON(){return this.toString()}}class Ls{constructor(n){var t;this.name=st(n.name),this.description=n.description,this.resolveType=n.resolveType,this.extensions=Gn(n.extensions),this.astNode=n.astNode,this.extensionASTNodes=(t=n.extensionASTNodes)!==null&&t!==void 0?t:[],this._types=xE.bind(void 0,n),n.resolveType==null||typeof n.resolveType=="function"||fe(!1,`${this.name} must provide "resolveType" as a function, but got: ${$(n.resolveType)}.`)}get[Symbol.toStringTag](){return"GraphQLUnionType"}getTypes(){return typeof this._types=="function"&&(this._types=this._types()),this._types}toConfig(){return{name:this.name,description:this.description,types:this.getTypes(),resolveType:this.resolveType,extensions:this.extensions,astNode:this.astNode,extensionASTNodes:this.extensionASTNodes}}toString(){return this.name}toJSON(){return this.toString()}}function xE(i){const n=uh(i.types);return Array.isArray(n)||fe(!1,`Must provide Array of types or a function which returns such an array for Union ${i.name}.`),n}class Ui{constructor(n){var t;this.name=st(n.name),this.description=n.description,this.extensions=Gn(n.extensions),this.astNode=n.astNode,this.extensionASTNodes=(t=n.extensionASTNodes)!==null&&t!==void 0?t:[],this._values=typeof n.values=="function"?n.values:mf(this.name,n.values),this._valueLookup=null,this._nameLookup=null}get[Symbol.toStringTag](){return"GraphQLEnumType"}getValues(){return typeof this._values=="function"&&(this._values=mf(this.name,this._values())),this._values}getValue(n){return this._nameLookup===null&&(this._nameLookup=pi(this.getValues(),t=>t.name)),this._nameLookup[n]}serialize(n){this._valueLookup===null&&(this._valueLookup=new Map(this.getValues().map(a=>[a.value,a])));const t=this._valueLookup.get(n);if(t===void 0)throw new L(`Enum "${this.name}" cannot represent value: ${$(n)}`);return t.name}parseValue(n){if(typeof n!="string"){const a=$(n);throw new L(`Enum "${this.name}" cannot represent non-string value: ${a}.`+As(this,a))}const t=this.getValue(n);if(t==null)throw new L(`Value "${n}" does not exist in "${this.name}" enum.`+As(this,n));return t.value}parseLiteral(n,t){if(n.kind!==w.ENUM){const s=Je(n);throw new L(`Enum "${this.name}" cannot represent non-enum value: ${s}.`+As(this,s),{nodes:n})}const a=this.getValue(n.value);if(a==null){const s=Je(n);throw new L(`Value "${s}" does not exist in "${this.name}" enum.`+As(this,s),{nodes:n})}return a.value}toConfig(){const n=ci(this.getValues(),t=>t.name,t=>({description:t.description,value:t.value,deprecationReason:t.deprecationReason,extensions:t.extensions,astNode:t.astNode}));return{name:this.name,description:this.description,values:n,extensions:this.extensions,astNode:this.astNode,extensionASTNodes:this.extensionASTNodes}}toString(){return this.name}toJSON(){return this.toString()}}function As(i,n){const t=i.getValues().map(s=>s.name),a=vi(n,t);return Jt("the enum value",a)}function mf(i,n){return Pi(n)||fe(!1,`${i} values must be an object with value names as keys.`),Object.entries(n).map(([t,a])=>(Pi(a)||fe(!1,`${i}.${t} must refer to an object with a "value" key representing an internal value but got: ${$(a)}.`),{name:FE(t),description:a.description,value:a.value!==void 0?a.value:t,deprecationReason:a.deprecationReason,extensions:Gn(a.extensions),astNode:a.astNode}))}class Ps{constructor(n){var t,a;this.name=st(n.name),this.description=n.description,this.extensions=Gn(n.extensions),this.astNode=n.astNode,this.extensionASTNodes=(t=n.extensionASTNodes)!==null&&t!==void 0?t:[],this.isOneOf=(a=n.isOneOf)!==null&&a!==void 0?a:!1,this._fields=LE.bind(void 0,n)}get[Symbol.toStringTag](){return"GraphQLInputObjectType"}getFields(){return typeof this._fields=="function"&&(this._fields=this._fields()),this._fields}toConfig(){const n=At(this.getFields(),t=>({description:t.description,type:t.type,defaultValue:t.defaultValue,deprecationReason:t.deprecationReason,extensions:t.extensions,astNode:t.astNode}));return{name:this.name,description:this.description,fields:n,extensions:this.extensions,astNode:this.astNode,extensionASTNodes:this.extensionASTNodes,isOneOf:this.isOneOf}}toString(){return this.name}toJSON(){return this.toString()}}function LE(i){const n=ch(i.fields);return Pi(n)||fe(!1,`${i.name} fields must be an object with field names as keys or a function which returns such an object.`),At(n,(t,a)=>(!("resolve"in t)||fe(!1,`${i.name}.${a} field has a resolve property, but Input Types cannot define resolvers.`),{name:st(a),description:t.description,type:t.type,defaultValue:t.defaultValue,deprecationReason:t.deprecationReason,extensions:Gn(t.extensions),astNode:t.astNode}))}function PE(i){return _e(i.type)&&i.defaultValue===void 0}function vr(i,n,t){return n===t?!0:_e(t)?_e(n)?vr(i,n.ofType,t.ofType):!1:_e(n)?vr(i,n.ofType,t):bn(t)?bn(n)?vr(i,n.ofType,t.ofType):!1:bn(n)?!1:fi(t)&&(Ve(n)||qe(n))&&i.isSubType(t,n)}function yf(i,n,t){return n===t?!0:fi(n)?fi(t)?i.getPossibleTypes(n).some(a=>i.isSubType(t,a)):i.isSubType(n,t):fi(t)?i.isSubType(t,n):!1}const Eo=2147483647,Do=-2147483648,BE=new Ot({name:"Int",description:"The `Int` scalar type represents non-fractional signed whole numeric values. Int can represent values between -(2^31) and 2^31 - 1.",serialize(i){const n=kr(i);if(typeof n=="boolean")return n?1:0;let t=n;if(typeof n=="string"&&n!==""&&(t=Number(n)),typeof t!="number"||!Number.isInteger(t))throw new L(`Int cannot represent non-integer value: ${$(n)}`);if(t>Eo||t<Do)throw new L("Int cannot represent non 32-bit signed integer value: "+$(n));return t},parseValue(i){if(typeof i!="number"||!Number.isInteger(i))throw new L(`Int cannot represent non-integer value: ${$(i)}`);if(i>Eo||i<Do)throw new L(`Int cannot represent non 32-bit signed integer value: ${i}`);return i},parseLiteral(i){if(i.kind!==w.INT)throw new L(`Int cannot represent non-integer value: ${Je(i)}`,{nodes:i});const n=parseInt(i.value,10);if(n>Eo||n<Do)throw new L(`Int cannot represent non 32-bit signed integer value: ${i.value}`,{nodes:i});return n}}),UE=new Ot({name:"Float",description:"The `Float` scalar type represents signed double-precision fractional values as specified by [IEEE 754](https://en.wikipedia.org/wiki/IEEE_floating_point).",serialize(i){const n=kr(i);if(typeof n=="boolean")return n?1:0;let t=n;if(typeof n=="string"&&n!==""&&(t=Number(n)),typeof t!="number"||!Number.isFinite(t))throw new L(`Float cannot represent non numeric value: ${$(n)}`);return t},parseValue(i){if(typeof i!="number"||!Number.isFinite(i))throw new L(`Float cannot represent non numeric value: ${$(i)}`);return i},parseLiteral(i){if(i.kind!==w.FLOAT&&i.kind!==w.INT)throw new L(`Float cannot represent non numeric value: ${Je(i)}`,i);return parseFloat(i.value)}}),Ge=new Ot({name:"String",description:"The `String` scalar type represents textual data, represented as UTF-8 character sequences. The String type is most often used by GraphQL to represent free-form human-readable text.",serialize(i){const n=kr(i);if(typeof n=="string")return n;if(typeof n=="boolean")return n?"true":"false";if(typeof n=="number"&&Number.isFinite(n))return n.toString();throw new L(`String cannot represent value: ${$(i)}`)},parseValue(i){if(typeof i!="string")throw new L(`String cannot represent a non string value: ${$(i)}`);return i},parseLiteral(i){if(i.kind!==w.STRING)throw new L(`String cannot represent a non string value: ${Je(i)}`,{nodes:i});return i.value}}),kn=new Ot({name:"Boolean",description:"The `Boolean` scalar type represents `true` or `false`.",serialize(i){const n=kr(i);if(typeof n=="boolean")return n;if(Number.isFinite(n))return n!==0;throw new L(`Boolean cannot represent a non boolean value: ${$(n)}`)},parseValue(i){if(typeof i!="boolean")throw new L(`Boolean cannot represent a non boolean value: ${$(i)}`);return i},parseLiteral(i){if(i.kind!==w.BOOLEAN)throw new L(`Boolean cannot represent a non boolean value: ${Je(i)}`,{nodes:i});return i.value}}),yh=new Ot({name:"ID",description:'The `ID` scalar type represents a unique identifier, often used to refetch an object or as key for a cache. The ID type appears in a JSON response as a String; however, it is not intended to be human-readable. When expected as an input type, any string (such as `"4"`) or integer (such as `4`) input value will be accepted as an ID.',serialize(i){const n=kr(i);if(typeof n=="string")return n;if(Number.isInteger(n))return String(n);throw new L(`ID cannot represent value: ${$(i)}`)},parseValue(i){if(typeof i=="string")return i;if(typeof i=="number"&&Number.isInteger(i))return i.toString();throw new L(`ID cannot represent value: ${$(i)}`)},parseLiteral(i){if(i.kind!==w.STRING&&i.kind!==w.INT)throw new L("ID cannot represent a non-string and non-integer value: "+Je(i),{nodes:i});return i.value}}),Hs=Object.freeze([Ge,BE,UE,kn,yh]);function $E(i){return Hs.some(({name:n})=>i.name===n)}function kr(i){if(Ct(i)){if(typeof i.valueOf=="function"){const n=i.valueOf();if(!Ct(n))return n}if(typeof i.toJSON=="function")return i.toJSON()}return i}function ME(i){return pt(i,Rt)}class Rt{constructor(n){var t,a;this.name=st(n.name),this.description=n.description,this.locations=n.locations,this.isRepeatable=(t=n.isRepeatable)!==null&&t!==void 0?t:!1,this.extensions=Gn(n.extensions),this.astNode=n.astNode,Array.isArray(n.locations)||fe(!1,`@${n.name} locations must be an Array.`);const s=(a=n.args)!==null&&a!==void 0?a:{};Ct(s)&&!Array.isArray(s)||fe(!1,`@${n.name} args must be an object with argument names as keys.`),this.args=dh(s)}get[Symbol.toStringTag](){return"GraphQLDirective"}toConfig(){return{name:this.name,description:this.description,locations:this.locations,args:gh(this.args),isRepeatable:this.isRepeatable,extensions:this.extensions,astNode:this.astNode}}toString(){return"@"+this.name}toJSON(){return this.toString()}}const vh=new Rt({name:"include",description:"Directs the executor to include this field or fragment only when the `if` argument is true.",locations:[j.FIELD,j.FRAGMENT_SPREAD,j.INLINE_FRAGMENT],args:{if:{type:new re(kn),description:"Included when true."}}}),bh=new Rt({name:"skip",description:"Directs the executor to skip this field or fragment when the `if` argument is true.",locations:[j.FIELD,j.FRAGMENT_SPREAD,j.INLINE_FRAGMENT],args:{if:{type:new re(kn),description:"Skipped when true."}}}),GE="No longer supported",Th=new Rt({name:"deprecated",description:"Marks an element of a GraphQL schema as no longer supported.",locations:[j.FIELD_DEFINITION,j.ARGUMENT_DEFINITION,j.INPUT_FIELD_DEFINITION,j.ENUM_VALUE],args:{reason:{type:Ge,description:"Explains why this element was deprecated, usually also including a suggestion for how to access supported similar data. Formatted using the Markdown syntax, as specified by [CommonMark](https://commonmark.org/).",defaultValue:GE}}}),wh=new Rt({name:"specifiedBy",description:"Exposes a URL that specifies the behavior of this scalar.",locations:[j.SCALAR],args:{url:{type:new re(Ge),description:"The URL that specifies the behavior of this scalar."}}}),Eh=new Rt({name:"oneOf",description:"Indicates exactly one field must be supplied and this field must not be `null`.",locations:[j.INPUT_OBJECT],args:{}}),Mi=Object.freeze([vh,bh,Th,wh,Eh]);function VE(i){return typeof i=="object"&&typeof(i==null?void 0:i[Symbol.iterator])=="function"}function pr(i,n){if(_e(n)){const t=pr(i,n.ofType);return(t==null?void 0:t.kind)===w.NULL?null:t}if(i===null)return{kind:w.NULL};if(i===void 0)return null;if(bn(n)){const t=n.ofType;if(VE(i)){const a=[];for(const s of i){const o=pr(s,t);o!=null&&a.push(o)}return{kind:w.LIST,values:a}}return pr(i,t)}if(vn(n)){if(!Ct(i))return null;const t=[];for(const a of Object.values(n.getFields())){const s=pr(i[a.name],a.type);s&&t.push({kind:w.OBJECT_FIELD,name:{kind:w.NAME,value:a.name},value:s})}return{kind:w.OBJECT,fields:t}}if(Bi(n)){const t=n.serialize(i);if(t==null)return null;if(typeof t=="boolean")return{kind:w.BOOLEAN,value:t};if(typeof t=="number"&&Number.isFinite(t)){const a=String(t);return vf.test(a)?{kind:w.INT,value:a}:{kind:w.FLOAT,value:a}}if(typeof t=="string")return et(n)?{kind:w.ENUM,value:t}:n===yh&&vf.test(t)?{kind:w.INT,value:t}:{kind:w.STRING,value:t};throw new TypeError(`Cannot convert value to AST: ${$(t)}.`)}Zn(!1,"Unexpected input type: "+$(n))}const vf=/^-?(?:0|[1-9][0-9]*)$/,nl=new ht({name:"__Schema",description:"A GraphQL Schema defines the capabilities of a GraphQL server. It exposes all available types and directives on the server, as well as the entry points for query, mutation, and subscription operations.",fields:()=>({description:{type:Ge,resolve:i=>i.description},types:{description:"A list of all types supported by this server.",type:new re(new fn(new re(Xn))),resolve(i){return Object.values(i.getTypeMap())}},queryType:{description:"The type that query operations will be rooted at.",type:new re(Xn),resolve:i=>i.getQueryType()},mutationType:{description:"If this server supports mutation, the type that mutation operations will be rooted at.",type:Xn,resolve:i=>i.getMutationType()},subscriptionType:{description:"If this server support subscription, the type that subscription operations will be rooted at.",type:Xn,resolve:i=>i.getSubscriptionType()},directives:{description:"A list of all directives supported by this server.",type:new re(new fn(new re(Dh))),resolve:i=>i.getDirectives()}})}),Dh=new ht({name:"__Directive",description:`A Directive provides a way to describe alternate runtime execution and type validation behavior in a GraphQL document.

In some cases, you need to provide options to alter GraphQL's execution behavior in ways field arguments will not suffice, such as conditionally including or skipping a field. Directives provide this by describing additional information to the executor.`,fields:()=>({name:{type:new re(Ge),resolve:i=>i.name},description:{type:Ge,resolve:i=>i.description},isRepeatable:{type:new re(kn),resolve:i=>i.isRepeatable},locations:{type:new re(new fn(new re(Ih))),resolve:i=>i.locations},args:{type:new re(new fn(new re(zs))),args:{includeDeprecated:{type:kn,defaultValue:!1}},resolve(i,{includeDeprecated:n}){return n?i.args:i.args.filter(t=>t.deprecationReason==null)}}})}),Ih=new Ui({name:"__DirectiveLocation",description:"A Directive can be adjacent to many parts of the GraphQL language, a __DirectiveLocation describes one such possible adjacencies.",values:{QUERY:{value:j.QUERY,description:"Location adjacent to a query operation."},MUTATION:{value:j.MUTATION,description:"Location adjacent to a mutation operation."},SUBSCRIPTION:{value:j.SUBSCRIPTION,description:"Location adjacent to a subscription operation."},FIELD:{value:j.FIELD,description:"Location adjacent to a field."},FRAGMENT_DEFINITION:{value:j.FRAGMENT_DEFINITION,description:"Location adjacent to a fragment definition."},FRAGMENT_SPREAD:{value:j.FRAGMENT_SPREAD,description:"Location adjacent to a fragment spread."},INLINE_FRAGMENT:{value:j.INLINE_FRAGMENT,description:"Location adjacent to an inline fragment."},VARIABLE_DEFINITION:{value:j.VARIABLE_DEFINITION,description:"Location adjacent to a variable definition."},SCHEMA:{value:j.SCHEMA,description:"Location adjacent to a schema definition."},SCALAR:{value:j.SCALAR,description:"Location adjacent to a scalar definition."},OBJECT:{value:j.OBJECT,description:"Location adjacent to an object type definition."},FIELD_DEFINITION:{value:j.FIELD_DEFINITION,description:"Location adjacent to a field definition."},ARGUMENT_DEFINITION:{value:j.ARGUMENT_DEFINITION,description:"Location adjacent to an argument definition."},INTERFACE:{value:j.INTERFACE,description:"Location adjacent to an interface definition."},UNION:{value:j.UNION,description:"Location adjacent to a union definition."},ENUM:{value:j.ENUM,description:"Location adjacent to an enum definition."},ENUM_VALUE:{value:j.ENUM_VALUE,description:"Location adjacent to an enum value definition."},INPUT_OBJECT:{value:j.INPUT_OBJECT,description:"Location adjacent to an input object type definition."},INPUT_FIELD_DEFINITION:{value:j.INPUT_FIELD_DEFINITION,description:"Location adjacent to an input object field definition."}}}),Xn=new ht({name:"__Type",description:"The fundamental unit of any GraphQL Schema is the type. There are many kinds of types in GraphQL as represented by the `__TypeKind` enum.\n\nDepending on the kind of a type, certain fields describe information about that type. Scalar types provide no information beyond a name, description and optional `specifiedByURL`, while Enum types provide their values. Object and Interface types provide the fields they describe. Abstract types, Union and Interface, provide the Object types possible at runtime. List and NonNull types compose other types.",fields:()=>({kind:{type:new re(Sh),resolve(i){if(Kt(i))return De.SCALAR;if(qe(i))return De.OBJECT;if(Ve(i))return De.INTERFACE;if(Mn(i))return De.UNION;if(et(i))return De.ENUM;if(vn(i))return De.INPUT_OBJECT;if(bn(i))return De.LIST;if(_e(i))return De.NON_NULL;Zn(!1,`Unexpected type: "${$(i)}".`)}},name:{type:Ge,resolve:i=>"name"in i?i.name:void 0},description:{type:Ge,resolve:i=>"description"in i?i.description:void 0},specifiedByURL:{type:Ge,resolve:i=>"specifiedByURL"in i?i.specifiedByURL:void 0},fields:{type:new fn(new re(_h)),args:{includeDeprecated:{type:kn,defaultValue:!1}},resolve(i,{includeDeprecated:n}){if(qe(i)||Ve(i)){const t=Object.values(i.getFields());return n?t:t.filter(a=>a.deprecationReason==null)}}},interfaces:{type:new fn(new re(Xn)),resolve(i){if(qe(i)||Ve(i))return i.getInterfaces()}},possibleTypes:{type:new fn(new re(Xn)),resolve(i,n,t,{schema:a}){if(fi(i))return a.getPossibleTypes(i)}},enumValues:{type:new fn(new re(Ah)),args:{includeDeprecated:{type:kn,defaultValue:!1}},resolve(i,{includeDeprecated:n}){if(et(i)){const t=i.getValues();return n?t:t.filter(a=>a.deprecationReason==null)}}},inputFields:{type:new fn(new re(zs)),args:{includeDeprecated:{type:kn,defaultValue:!1}},resolve(i,{includeDeprecated:n}){if(vn(i)){const t=Object.values(i.getFields());return n?t:t.filter(a=>a.deprecationReason==null)}}},ofType:{type:Xn,resolve:i=>"ofType"in i?i.ofType:void 0},isOneOf:{type:kn,resolve:i=>{if(vn(i))return i.isOneOf}}})}),_h=new ht({name:"__Field",description:"Object and Interface types are described by a list of Fields, each of which has a name, potentially a list of arguments, and a return type.",fields:()=>({name:{type:new re(Ge),resolve:i=>i.name},description:{type:Ge,resolve:i=>i.description},args:{type:new re(new fn(new re(zs))),args:{includeDeprecated:{type:kn,defaultValue:!1}},resolve(i,{includeDeprecated:n}){return n?i.args:i.args.filter(t=>t.deprecationReason==null)}},type:{type:new re(Xn),resolve:i=>i.type},isDeprecated:{type:new re(kn),resolve:i=>i.deprecationReason!=null},deprecationReason:{type:Ge,resolve:i=>i.deprecationReason}})}),zs=new ht({name:"__InputValue",description:"Arguments provided to Fields or Directives and the input fields of an InputObject are represented as Input Values which describe their type and optionally a default value.",fields:()=>({name:{type:new re(Ge),resolve:i=>i.name},description:{type:Ge,resolve:i=>i.description},type:{type:new re(Xn),resolve:i=>i.type},defaultValue:{type:Ge,description:"A GraphQL-formatted string representing the default value for this input value.",resolve(i){const{type:n,defaultValue:t}=i,a=pr(t,n);return a?Je(a):null}},isDeprecated:{type:new re(kn),resolve:i=>i.deprecationReason!=null},deprecationReason:{type:Ge,resolve:i=>i.deprecationReason}})}),Ah=new ht({name:"__EnumValue",description:"One possible value for a given Enum. Enum values are unique values, not a placeholder for a string or numeric value. However an Enum value is returned in a JSON response as a string.",fields:()=>({name:{type:new re(Ge),resolve:i=>i.name},description:{type:Ge,resolve:i=>i.description},isDeprecated:{type:new re(kn),resolve:i=>i.deprecationReason!=null},deprecationReason:{type:Ge,resolve:i=>i.deprecationReason}})});var De;(function(i){i.SCALAR="SCALAR",i.OBJECT="OBJECT",i.INTERFACE="INTERFACE",i.UNION="UNION",i.ENUM="ENUM",i.INPUT_OBJECT="INPUT_OBJECT",i.LIST="LIST",i.NON_NULL="NON_NULL"})(De||(De={}));const Sh=new Ui({name:"__TypeKind",description:"An enum describing what kind of type a given `__Type` is.",values:{SCALAR:{value:De.SCALAR,description:"Indicates this type is a scalar."},OBJECT:{value:De.OBJECT,description:"Indicates this type is an object. `fields` and `interfaces` are valid fields."},INTERFACE:{value:De.INTERFACE,description:"Indicates this type is an interface. `fields`, `interfaces`, and `possibleTypes` are valid fields."},UNION:{value:De.UNION,description:"Indicates this type is a union. `possibleTypes` is a valid field."},ENUM:{value:De.ENUM,description:"Indicates this type is an enum. `enumValues` is a valid field."},INPUT_OBJECT:{value:De.INPUT_OBJECT,description:"Indicates this type is an input object. `inputFields` is a valid field."},LIST:{value:De.LIST,description:"Indicates this type is a list. `ofType` is a valid field."},NON_NULL:{value:De.NON_NULL,description:"Indicates this type is a non-null. `ofType` is a valid field."}}});new re(nl);new re(Ge);new re(Ge);const Qs=Object.freeze([nl,Dh,Ih,Xn,_h,zs,Ah,Sh]);function WE(i){return Qs.some(({name:n})=>i.name===n)}class kh{constructor(n){var t,a;this.__validationErrors=n.assumeValid===!0?[]:void 0,Ct(n)||fe(!1,"Must provide configuration object."),!n.types||Array.isArray(n.types)||fe(!1,`"types" must be Array if provided but got: ${$(n.types)}.`),!n.directives||Array.isArray(n.directives)||fe(!1,`"directives" must be Array if provided but got: ${$(n.directives)}.`),this.description=n.description,this.extensions=Gn(n.extensions),this.astNode=n.astNode,this.extensionASTNodes=(t=n.extensionASTNodes)!==null&&t!==void 0?t:[],this._queryType=n.query,this._mutationType=n.mutation,this._subscriptionType=n.subscription,this._directives=(a=n.directives)!==null&&a!==void 0?a:Mi;const s=new Set(n.types);if(n.types!=null)for(const o of n.types)s.delete(o),Jn(o,s);this._queryType!=null&&Jn(this._queryType,s),this._mutationType!=null&&Jn(this._mutationType,s),this._subscriptionType!=null&&Jn(this._subscriptionType,s);for(const o of this._directives)if(ME(o))for(const u of o.args)Jn(u.type,s);Jn(nl,s),this._typeMap=Object.create(null),this._subTypeMap=Object.create(null),this._implementationsMap=Object.create(null);for(const o of s){if(o==null)continue;const u=o.name;if(u||fe(!1,"One of the provided types for building the Schema is missing a name."),this._typeMap[u]!==void 0)throw new Error(`Schema must contain uniquely named types but contains multiple types named "${u}".`);if(this._typeMap[u]=o,Ve(o)){for(const f of o.getInterfaces())if(Ve(f)){let h=this._implementationsMap[f.name];h===void 0&&(h=this._implementationsMap[f.name]={objects:[],interfaces:[]}),h.interfaces.push(o)}}else if(qe(o)){for(const f of o.getInterfaces())if(Ve(f)){let h=this._implementationsMap[f.name];h===void 0&&(h=this._implementationsMap[f.name]={objects:[],interfaces:[]}),h.objects.push(o)}}}}get[Symbol.toStringTag](){return"GraphQLSchema"}getQueryType(){return this._queryType}getMutationType(){return this._mutationType}getSubscriptionType(){return this._subscriptionType}getRootType(n){switch(n){case $n.QUERY:return this.getQueryType();case $n.MUTATION:return this.getMutationType();case $n.SUBSCRIPTION:return this.getSubscriptionType()}}getTypeMap(){return this._typeMap}getType(n){return this.getTypeMap()[n]}getPossibleTypes(n){return Mn(n)?n.getTypes():this.getImplementations(n).objects}getImplementations(n){const t=this._implementationsMap[n.name];return t??{objects:[],interfaces:[]}}isSubType(n,t){let a=this._subTypeMap[n.name];if(a===void 0){if(a=Object.create(null),Mn(n))for(const s of n.getTypes())a[s.name]=!0;else{const s=this.getImplementations(n);for(const o of s.objects)a[o.name]=!0;for(const o of s.interfaces)a[o.name]=!0}this._subTypeMap[n.name]=a}return a[t.name]!==void 0}getDirectives(){return this._directives}getDirective(n){return this.getDirectives().find(t=>t.name===n)}toConfig(){return{description:this.description,query:this.getQueryType(),mutation:this.getMutationType(),subscription:this.getSubscriptionType(),types:Object.values(this.getTypeMap()),directives:this.getDirectives(),extensions:this.extensions,astNode:this.astNode,extensionASTNodes:this.extensionASTNodes,assumeValid:this.__validationErrors!==void 0}}}function Jn(i,n){const t=gi(i);if(!n.has(t)){if(n.add(t),Mn(t))for(const a of t.getTypes())Jn(a,n);else if(qe(t)||Ve(t)){for(const a of t.getInterfaces())Jn(a,n);for(const a of Object.values(t.getFields())){Jn(a.type,n);for(const s of a.args)Jn(s.type,n)}}else if(vn(t))for(const a of Object.values(t.getFields()))Jn(a.type,n)}return n}function dt(i,n){switch(n.kind){case w.LIST_TYPE:{const t=dt(i,n.type);return t&&new fn(t)}case w.NON_NULL_TYPE:{const t=dt(i,n.type);return t&&new re(t)}case w.NAMED_TYPE:return i.getType(n.name.value)}}function YE(i){return i.kind===w.OPERATION_DEFINITION||i.kind===w.FRAGMENT_DEFINITION}function qE(i){return i.kind===w.SCHEMA_DEFINITION||Fr(i)||i.kind===w.DIRECTIVE_DEFINITION}function Fr(i){return i.kind===w.SCALAR_TYPE_DEFINITION||i.kind===w.OBJECT_TYPE_DEFINITION||i.kind===w.INTERFACE_TYPE_DEFINITION||i.kind===w.UNION_TYPE_DEFINITION||i.kind===w.ENUM_TYPE_DEFINITION||i.kind===w.INPUT_OBJECT_TYPE_DEFINITION}function jE(i){return i.kind===w.SCHEMA_EXTENSION||tl(i)}function tl(i){return i.kind===w.SCALAR_TYPE_EXTENSION||i.kind===w.OBJECT_TYPE_EXTENSION||i.kind===w.INTERFACE_TYPE_EXTENSION||i.kind===w.UNION_TYPE_EXTENSION||i.kind===w.ENUM_TYPE_EXTENSION||i.kind===w.INPUT_OBJECT_TYPE_EXTENSION}function HE(i){return{Document(n){for(const t of n.definitions)if(!YE(t)){const a=t.kind===w.SCHEMA_DEFINITION||t.kind===w.SCHEMA_EXTENSION?"schema":'"'+t.name.value+'"';i.reportError(new L(`The ${a} definition is not executable.`,{nodes:t}))}return!1}}}function zE(i){return{Field(n){const t=i.getParentType();if(t&&!i.getFieldDef()){const s=i.getSchema(),o=n.name.value;let u=Jt("to use an inline fragment on",QE(s,t,o));u===""&&(u=Jt(JE(t,o))),i.reportError(new L(`Cannot query field "${o}" on type "${t.name}".`+u,{nodes:n}))}}}}function QE(i,n,t){if(!fi(n))return[];const a=new Set,s=Object.create(null);for(const u of i.getPossibleTypes(n))if(u.getFields()[t]){a.add(u),s[u.name]=1;for(const f of u.getInterfaces()){var o;f.getFields()[t]&&(a.add(f),s[f.name]=((o=s[f.name])!==null&&o!==void 0?o:0)+1)}}return[...a].sort((u,f)=>{const h=s[f.name]-s[u.name];return h!==0?h:Ve(u)&&i.isSubType(u,f)?-1:Ve(f)&&i.isSubType(f,u)?1:Ko(u.name,f.name)}).map(u=>u.name)}function JE(i,n){if(qe(i)||Ve(i)){const t=Object.keys(i.getFields());return vi(n,t)}return[]}function KE(i){return{InlineFragment(n){const t=n.typeCondition;if(t){const a=dt(i.getSchema(),t);if(a&&!Dr(a)){const s=Je(t);i.reportError(new L(`Fragment cannot condition on non composite type "${s}".`,{nodes:t}))}}},FragmentDefinition(n){const t=dt(i.getSchema(),n.typeCondition);if(t&&!Dr(t)){const a=Je(n.typeCondition);i.reportError(new L(`Fragment "${n.name.value}" cannot condition on non composite type "${a}".`,{nodes:n.typeCondition}))}}}}function XE(i){return{...Fh(i),Argument(n){const t=i.getArgument(),a=i.getFieldDef(),s=i.getParentType();if(!t&&a&&s){const o=n.name.value,u=a.args.map(h=>h.name),f=vi(o,u);i.reportError(new L(`Unknown argument "${o}" on field "${s.name}.${a.name}".`+Jt(f),{nodes:n}))}}}}function Fh(i){const n=Object.create(null),t=i.getSchema(),a=t?t.getDirectives():Mi;for(const u of a)n[u.name]=u.args.map(f=>f.name);const s=i.getDocument().definitions;for(const u of s)if(u.kind===w.DIRECTIVE_DEFINITION){var o;const f=(o=u.arguments)!==null&&o!==void 0?o:[];n[u.name.value]=f.map(h=>h.name.value)}return{Directive(u){const f=u.name.value,h=n[f];if(u.arguments&&h)for(const m of u.arguments){const y=m.name.value;if(!h.includes(y)){const b=vi(y,h);i.reportError(new L(`Unknown argument "${y}" on directive "@${f}".`+Jt(b),{nodes:m}))}}return!1}}}function Nh(i){const n=Object.create(null),t=i.getSchema(),a=t?t.getDirectives():Mi;for(const o of a)n[o.name]=o.locations;const s=i.getDocument().definitions;for(const o of s)o.kind===w.DIRECTIVE_DEFINITION&&(n[o.name.value]=o.locations.map(u=>u.value));return{Directive(o,u,f,h,m){const y=o.name.value,b=n[y];if(!b){i.reportError(new L(`Unknown directive "@${y}".`,{nodes:o}));return}const k=ZE(m);k&&!b.includes(k)&&i.reportError(new L(`Directive "@${y}" may not be used on ${k}.`,{nodes:o}))}}}function ZE(i){const n=i[i.length-1];switch("kind"in n||Zn(!1),n.kind){case w.OPERATION_DEFINITION:return eD(n.operation);case w.FIELD:return j.FIELD;case w.FRAGMENT_SPREAD:return j.FRAGMENT_SPREAD;case w.INLINE_FRAGMENT:return j.INLINE_FRAGMENT;case w.FRAGMENT_DEFINITION:return j.FRAGMENT_DEFINITION;case w.VARIABLE_DEFINITION:return j.VARIABLE_DEFINITION;case w.SCHEMA_DEFINITION:case w.SCHEMA_EXTENSION:return j.SCHEMA;case w.SCALAR_TYPE_DEFINITION:case w.SCALAR_TYPE_EXTENSION:return j.SCALAR;case w.OBJECT_TYPE_DEFINITION:case w.OBJECT_TYPE_EXTENSION:return j.OBJECT;case w.FIELD_DEFINITION:return j.FIELD_DEFINITION;case w.INTERFACE_TYPE_DEFINITION:case w.INTERFACE_TYPE_EXTENSION:return j.INTERFACE;case w.UNION_TYPE_DEFINITION:case w.UNION_TYPE_EXTENSION:return j.UNION;case w.ENUM_TYPE_DEFINITION:case w.ENUM_TYPE_EXTENSION:return j.ENUM;case w.ENUM_VALUE_DEFINITION:return j.ENUM_VALUE;case w.INPUT_OBJECT_TYPE_DEFINITION:case w.INPUT_OBJECT_TYPE_EXTENSION:return j.INPUT_OBJECT;case w.INPUT_VALUE_DEFINITION:{const t=i[i.length-3];return"kind"in t||Zn(!1),t.kind===w.INPUT_OBJECT_TYPE_DEFINITION?j.INPUT_FIELD_DEFINITION:j.ARGUMENT_DEFINITION}default:Zn(!1,"Unexpected kind: "+$(n.kind))}}function eD(i){switch(i){case $n.QUERY:return j.QUERY;case $n.MUTATION:return j.MUTATION;case $n.SUBSCRIPTION:return j.SUBSCRIPTION}}function nD(i){return{FragmentSpread(n){const t=n.name.value;i.getFragment(t)||i.reportError(new L(`Unknown fragment "${t}".`,{nodes:n.name}))}}}function Ch(i){const n=i.getSchema(),t=n?n.getTypeMap():Object.create(null),a=Object.create(null);for(const o of i.getDocument().definitions)Fr(o)&&(a[o.name.value]=!0);const s=[...Object.keys(t),...Object.keys(a)];return{NamedType(o,u,f,h,m){const y=o.name.value;if(!t[y]&&!a[y]){var b;const k=(b=m[2])!==null&&b!==void 0?b:f,_=k!=null&&tD(k);if(_&&bf.includes(y))return;const O=vi(y,_?bf.concat(s):s);i.reportError(new L(`Unknown type "${y}".`+Jt(O),{nodes:o}))}}}}const bf=[...Hs,...Qs].map(i=>i.name);function tD(i){return"kind"in i&&(qE(i)||jE(i))}function iD(i){let n=0;return{Document(t){n=t.definitions.filter(a=>a.kind===w.OPERATION_DEFINITION).length},OperationDefinition(t){!t.name&&n>1&&i.reportError(new L("This anonymous operation must be the only defined operation.",{nodes:t}))}}}function rD(i){var n,t,a;const s=i.getSchema(),o=(n=(t=(a=s==null?void 0:s.astNode)!==null&&a!==void 0?a:s==null?void 0:s.getQueryType())!==null&&t!==void 0?t:s==null?void 0:s.getMutationType())!==null&&n!==void 0?n:s==null?void 0:s.getSubscriptionType();let u=0;return{SchemaDefinition(f){if(o){i.reportError(new L("Cannot define a new schema within a schema extension.",{nodes:f}));return}u>0&&i.reportError(new L("Must provide only one schema definition.",{nodes:f})),++u}}}const sD=3;function aD(i){function n(t,a=Object.create(null),s=0){if(t.kind===w.FRAGMENT_SPREAD){const o=t.name.value;if(a[o]===!0)return!1;const u=i.getFragment(o);if(!u)return!1;try{return a[o]=!0,n(u,a,s)}finally{a[o]=void 0}}if(t.kind===w.FIELD&&(t.name.value==="fields"||t.name.value==="interfaces"||t.name.value==="possibleTypes"||t.name.value==="inputFields")&&(s++,s>=sD))return!0;if("selectionSet"in t&&t.selectionSet){for(const o of t.selectionSet.selections)if(n(o,a,s))return!0}return!1}return{Field(t){if((t.name.value==="__schema"||t.name.value==="__type")&&n(t))return i.reportError(new L("Maximum introspection depth exceeded",{nodes:[t]})),!1}}}function oD(i){const n=Object.create(null),t=[],a=Object.create(null);return{OperationDefinition:()=>!1,FragmentDefinition(o){return s(o),!1}};function s(o){if(n[o.name.value])return;const u=o.name.value;n[u]=!0;const f=i.getFragmentSpreads(o.selectionSet);if(f.length!==0){a[u]=t.length;for(const h of f){const m=h.name.value,y=a[m];if(t.push(h),y===void 0){const b=i.getFragment(m);b&&s(b)}else{const b=t.slice(y),k=b.slice(0,-1).map(_=>'"'+_.name.value+'"').join(", ");i.reportError(new L(`Cannot spread fragment "${m}" within itself`+(k!==""?` via ${k}.`:"."),{nodes:b}))}t.pop()}a[u]=void 0}}}function lD(i){let n=Object.create(null);return{OperationDefinition:{enter(){n=Object.create(null)},leave(t){const a=i.getRecursiveVariableUsages(t);for(const{node:s}of a){const o=s.name.value;n[o]!==!0&&i.reportError(new L(t.name?`Variable "$${o}" is not defined by operation "${t.name.value}".`:`Variable "$${o}" is not defined.`,{nodes:[s,t]}))}}},VariableDefinition(t){n[t.variable.name.value]=!0}}}function uD(i){const n=[],t=[];return{OperationDefinition(a){return n.push(a),!1},FragmentDefinition(a){return t.push(a),!1},Document:{leave(){const a=Object.create(null);for(const s of n)for(const o of i.getRecursivelyReferencedFragments(s))a[o.name.value]=!0;for(const s of t){const o=s.name.value;a[o]!==!0&&i.reportError(new L(`Fragment "${o}" is never used.`,{nodes:s}))}}}}}function cD(i){let n=[];return{OperationDefinition:{enter(){n=[]},leave(t){const a=Object.create(null),s=i.getRecursiveVariableUsages(t);for(const{node:o}of s)a[o.name.value]=!0;for(const o of n){const u=o.variable.name.value;a[u]!==!0&&i.reportError(new L(t.name?`Variable "$${u}" is never used in operation "${t.name.value}".`:`Variable "$${u}" is never used.`,{nodes:o}))}}},VariableDefinition(t){n.push(t)}}}function il(i){switch(i.kind){case w.OBJECT:return{...i,fields:fD(i.fields)};case w.LIST:return{...i,values:i.values.map(il)};case w.INT:case w.FLOAT:case w.STRING:case w.BOOLEAN:case w.NULL:case w.ENUM:case w.VARIABLE:return i}}function fD(i){return i.map(n=>({...n,value:il(n.value)})).sort((n,t)=>Ko(n.name.value,t.name.value))}function Oh(i){return Array.isArray(i)?i.map(([n,t])=>`subfields "${n}" conflict because `+Oh(t)).join(" and "):i}function hD(i){const n=new vD,t=new Map;return{SelectionSet(a){const s=dD(i,t,n,i.getParentType(),a);for(const[[o,u],f,h]of s){const m=Oh(u);i.reportError(new L(`Fields "${o}" conflict because ${m}. Use different aliases on the fields to fetch both if this was intentional.`,{nodes:f.concat(h)}))}}}}function dD(i,n,t,a,s){const o=[],[u,f]=$s(i,n,a,s);if(gD(i,o,n,t,u),f.length!==0)for(let h=0;h<f.length;h++){Bs(i,o,n,t,!1,u,f[h]);for(let m=h+1;m<f.length;m++)Us(i,o,n,t,!1,f[h],f[m])}return o}function Bs(i,n,t,a,s,o,u){const f=i.getFragment(u);if(!f)return;const[h,m]=xo(i,t,f);if(o!==h){rl(i,n,t,a,s,o,h);for(const y of m)a.has(y,u,s)||(a.add(y,u,s),Bs(i,n,t,a,s,o,y))}}function Us(i,n,t,a,s,o,u){if(o===u||a.has(o,u,s))return;a.add(o,u,s);const f=i.getFragment(o),h=i.getFragment(u);if(!f||!h)return;const[m,y]=xo(i,t,f),[b,k]=xo(i,t,h);rl(i,n,t,a,s,m,b);for(const _ of k)Us(i,n,t,a,s,o,_);for(const _ of y)Us(i,n,t,a,s,_,u)}function pD(i,n,t,a,s,o,u,f){const h=[],[m,y]=$s(i,n,s,o),[b,k]=$s(i,n,u,f);rl(i,h,n,t,a,m,b);for(const _ of k)Bs(i,h,n,t,a,m,_);for(const _ of y)Bs(i,h,n,t,a,b,_);for(const _ of y)for(const O of k)Us(i,h,n,t,a,_,O);return h}function gD(i,n,t,a,s){for(const[o,u]of Object.entries(s))if(u.length>1)for(let f=0;f<u.length;f++)for(let h=f+1;h<u.length;h++){const m=Rh(i,t,a,!1,o,u[f],u[h]);m&&n.push(m)}}function rl(i,n,t,a,s,o,u){for(const[f,h]of Object.entries(o)){const m=u[f];if(m)for(const y of h)for(const b of m){const k=Rh(i,t,a,s,f,y,b);k&&n.push(k)}}}function Rh(i,n,t,a,s,o,u){const[f,h,m]=o,[y,b,k]=u,_=a||f!==y&&qe(f)&&qe(y);if(!_){const Ae=h.name.value,me=b.name.value;if(Ae!==me)return[[s,`"${Ae}" and "${me}" are different fields`],[h],[b]];if(!mD(h,b))return[[s,"they have differing arguments"],[h],[b]]}const O=m==null?void 0:m.type,P=k==null?void 0:k.type;if(O&&P&&Ro(O,P))return[[s,`they return conflicting types "${$(O)}" and "${$(P)}"`],[h],[b]];const q=h.selectionSet,ce=b.selectionSet;if(q&&ce){const Ae=pD(i,n,t,_,gi(O),q,gi(P),ce);return yD(Ae,s,h,b)}}function mD(i,n){const t=i.arguments,a=n.arguments;if(t===void 0||t.length===0)return a===void 0||a.length===0;if(a===void 0||a.length===0||t.length!==a.length)return!1;const s=new Map(a.map(({name:o,value:u})=>[o.value,u]));return t.every(o=>{const u=o.value,f=s.get(o.name.value);return f===void 0?!1:Tf(u)===Tf(f)})}function Tf(i){return Je(il(i))}function Ro(i,n){return bn(i)?bn(n)?Ro(i.ofType,n.ofType):!0:bn(n)?!0:_e(i)?_e(n)?Ro(i.ofType,n.ofType):!0:_e(n)?!0:Bi(i)||Bi(n)?i!==n:!1}function $s(i,n,t,a){const s=n.get(a);if(s)return s;const o=Object.create(null),u=Object.create(null);xh(i,t,a,o,u);const f=[o,Object.keys(u)];return n.set(a,f),f}function xo(i,n,t){const a=n.get(t.selectionSet);if(a)return a;const s=dt(i.getSchema(),t.typeCondition);return $s(i,n,s,t.selectionSet)}function xh(i,n,t,a,s){for(const o of t.selections)switch(o.kind){case w.FIELD:{const u=o.name.value;let f;(qe(n)||Ve(n))&&(f=n.getFields()[u]);const h=o.alias?o.alias.value:u;a[h]||(a[h]=[]),a[h].push([n,o,f]);break}case w.FRAGMENT_SPREAD:s[o.name.value]=!0;break;case w.INLINE_FRAGMENT:{const u=o.typeCondition,f=u?dt(i.getSchema(),u):n;xh(i,f,o.selectionSet,a,s);break}}}function yD(i,n,t,a){if(i.length>0)return[[n,i.map(([s])=>s)],[t,...i.map(([,s])=>s).flat()],[a,...i.map(([,,s])=>s).flat()]]}class vD{constructor(){this._data=new Map}has(n,t,a){var s;const[o,u]=n<t?[n,t]:[t,n],f=(s=this._data.get(o))===null||s===void 0?void 0:s.get(u);return f===void 0?!1:a?!0:a===f}add(n,t,a){const[s,o]=n<t?[n,t]:[t,n],u=this._data.get(s);u===void 0?this._data.set(s,new Map([[o,a]])):u.set(o,a)}}function bD(i){return{InlineFragment(n){const t=i.getType(),a=i.getParentType();if(Dr(t)&&Dr(a)&&!yf(i.getSchema(),t,a)){const s=$(a),o=$(t);i.reportError(new L(`Fragment cannot be spread here as objects of type "${s}" can never be of type "${o}".`,{nodes:n}))}},FragmentSpread(n){const t=n.name.value,a=TD(i,t),s=i.getParentType();if(a&&s&&!yf(i.getSchema(),a,s)){const o=$(s),u=$(a);i.reportError(new L(`Fragment "${t}" cannot be spread here as objects of type "${o}" can never be of type "${u}".`,{nodes:n}))}}}}function TD(i,n){const t=i.getFragment(n);if(t){const a=dt(i.getSchema(),t.typeCondition);if(Dr(a))return a}}function wD(i){const n=i.getSchema(),t=Object.create(null);for(const s of i.getDocument().definitions)Fr(s)&&(t[s.name.value]=s);return{ScalarTypeExtension:a,ObjectTypeExtension:a,InterfaceTypeExtension:a,UnionTypeExtension:a,EnumTypeExtension:a,InputObjectTypeExtension:a};function a(s){const o=s.name.value,u=t[o],f=n==null?void 0:n.getType(o);let h;if(u?h=ED[u.kind]:f&&(h=DD(f)),h){if(h!==s.kind){const m=ID(s.kind);i.reportError(new L(`Cannot extend non-${m} type "${o}".`,{nodes:u?[u,s]:s}))}}else{const m=Object.keys({...t,...n==null?void 0:n.getTypeMap()}),y=vi(o,m);i.reportError(new L(`Cannot extend type "${o}" because it is not defined.`+Jt(y),{nodes:s.name}))}}}const ED={[w.SCALAR_TYPE_DEFINITION]:w.SCALAR_TYPE_EXTENSION,[w.OBJECT_TYPE_DEFINITION]:w.OBJECT_TYPE_EXTENSION,[w.INTERFACE_TYPE_DEFINITION]:w.INTERFACE_TYPE_EXTENSION,[w.UNION_TYPE_DEFINITION]:w.UNION_TYPE_EXTENSION,[w.ENUM_TYPE_DEFINITION]:w.ENUM_TYPE_EXTENSION,[w.INPUT_OBJECT_TYPE_DEFINITION]:w.INPUT_OBJECT_TYPE_EXTENSION};function DD(i){if(Kt(i))return w.SCALAR_TYPE_EXTENSION;if(qe(i))return w.OBJECT_TYPE_EXTENSION;if(Ve(i))return w.INTERFACE_TYPE_EXTENSION;if(Mn(i))return w.UNION_TYPE_EXTENSION;if(et(i))return w.ENUM_TYPE_EXTENSION;if(vn(i))return w.INPUT_OBJECT_TYPE_EXTENSION;Zn(!1,"Unexpected type: "+$(i))}function ID(i){switch(i){case w.SCALAR_TYPE_EXTENSION:return"scalar";case w.OBJECT_TYPE_EXTENSION:return"object";case w.INTERFACE_TYPE_EXTENSION:return"interface";case w.UNION_TYPE_EXTENSION:return"union";case w.ENUM_TYPE_EXTENSION:return"enum";case w.INPUT_OBJECT_TYPE_EXTENSION:return"input object";default:Zn(!1,"Unexpected kind: "+$(i))}}function _D(i){return{...Lh(i),Field:{leave(n){var t;const a=i.getFieldDef();if(!a)return!1;const s=new Set((t=n.arguments)===null||t===void 0?void 0:t.map(o=>o.name.value));for(const o of a.args)if(!s.has(o.name)&&mh(o)){const u=$(o.type);i.reportError(new L(`Field "${a.name}" argument "${o.name}" of type "${u}" is required, but it was not provided.`,{nodes:n}))}}}}}function Lh(i){var n;const t=Object.create(null),a=i.getSchema(),s=(n=a==null?void 0:a.getDirectives())!==null&&n!==void 0?n:Mi;for(const f of s)t[f.name]=pi(f.args.filter(mh),h=>h.name);const o=i.getDocument().definitions;for(const f of o)if(f.kind===w.DIRECTIVE_DEFINITION){var u;const h=(u=f.arguments)!==null&&u!==void 0?u:[];t[f.name.value]=pi(h.filter(AD),m=>m.name.value)}return{Directive:{leave(f){const h=f.name.value,m=t[h];if(m){var y;const b=(y=f.arguments)!==null&&y!==void 0?y:[],k=new Set(b.map(_=>_.name.value));for(const[_,O]of Object.entries(m))if(!k.has(_)){const P=Xo(O.type)?$(O.type):Je(O.type);i.reportError(new L(`Directive "@${h}" argument "${_}" of type "${P}" is required, but it was not provided.`,{nodes:f}))}}}}}}function AD(i){return i.type.kind===w.NON_NULL_TYPE&&i.defaultValue==null}function SD(i){return{Field(n){const t=i.getType(),a=n.selectionSet;if(t){if(Bi(gi(t))){if(a){const s=n.name.value,o=$(t);i.reportError(new L(`Field "${s}" must not have a selection since type "${o}" has no subfields.`,{nodes:a}))}}else if(!a){const s=n.name.value,o=$(t);i.reportError(new L(`Field "${s}" of type "${o}" must have a selection of subfields. Did you mean "${s} { ... }"?`,{nodes:n}))}}}}}function jt(i,n,t){if(i){if(i.kind===w.VARIABLE){const a=i.name.value;if(t==null||t[a]===void 0)return;const s=t[a];return s===null&&_e(n)?void 0:s}if(_e(n))return i.kind===w.NULL?void 0:jt(i,n.ofType,t);if(i.kind===w.NULL)return null;if(bn(n)){const a=n.ofType;if(i.kind===w.LIST){const o=[];for(const u of i.values)if(wf(u,t)){if(_e(a))return;o.push(null)}else{const f=jt(u,a,t);if(f===void 0)return;o.push(f)}return o}const s=jt(i,a,t);return s===void 0?void 0:[s]}if(vn(n)){if(i.kind!==w.OBJECT)return;const a=Object.create(null),s=pi(i.fields,o=>o.name.value);for(const o of Object.values(n.getFields())){const u=s[o.name];if(!u||wf(u.value,t)){if(o.defaultValue!==void 0)a[o.name]=o.defaultValue;else if(_e(o.type))return;continue}const f=jt(u.value,o.type,t);if(f===void 0)return;a[o.name]=f}if(n.isOneOf){const o=Object.keys(a);if(o.length!==1||a[o[0]]===null)return}return a}if(Bi(n)){let a;try{a=n.parseLiteral(i,t)}catch{return}return a===void 0?void 0:a}Zn(!1,"Unexpected input type: "+$(n))}}function wf(i,n){return i.kind===w.VARIABLE&&(n==null||n[i.name.value]===void 0)}function kD(i,n,t){var a;const s={},o=(a=n.arguments)!==null&&a!==void 0?a:[],u=pi(o,f=>f.name.value);for(const f of i.args){const h=f.name,m=f.type,y=u[h];if(!y){if(f.defaultValue!==void 0)s[h]=f.defaultValue;else if(_e(m))throw new L(`Argument "${h}" of required type "${$(m)}" was not provided.`,{nodes:n});continue}const b=y.value;let k=b.kind===w.NULL;if(b.kind===w.VARIABLE){const O=b.name.value;if(t==null||!FD(t,O)){if(f.defaultValue!==void 0)s[h]=f.defaultValue;else if(_e(m))throw new L(`Argument "${h}" of required type "${$(m)}" was provided the variable "$${O}" which was not provided a runtime value.`,{nodes:b});continue}k=t[O]==null}if(k&&_e(m))throw new L(`Argument "${h}" of non-null type "${$(m)}" must not be null.`,{nodes:b});const _=jt(b,m,t);if(_===void 0)throw new L(`Argument "${h}" has invalid value ${Je(b)}.`,{nodes:b});s[h]=_}return s}function Ir(i,n,t){var a;const s=(a=n.directives)===null||a===void 0?void 0:a.find(o=>o.name.value===i.name);if(s)return kD(i,s,t)}function FD(i,n){return Object.prototype.hasOwnProperty.call(i,n)}function ND(i,n,t,a,s){const o=new Map;return Lo(i,n,t,a,s,o,new Set),o}function Lo(i,n,t,a,s,o,u){for(const f of s.selections)switch(f.kind){case w.FIELD:{if(!Io(t,f))continue;const h=CD(f),m=o.get(h);m!==void 0?m.push(f):o.set(h,[f]);break}case w.INLINE_FRAGMENT:{if(!Io(t,f)||!Ef(i,f,a))continue;Lo(i,n,t,a,f.selectionSet,o,u);break}case w.FRAGMENT_SPREAD:{const h=f.name.value;if(u.has(h)||!Io(t,f))continue;u.add(h);const m=n[h];if(!m||!Ef(i,m,a))continue;Lo(i,n,t,a,m.selectionSet,o,u);break}}}function Io(i,n){const t=Ir(bh,n,i);if((t==null?void 0:t.if)===!0)return!1;const a=Ir(vh,n,i);return(a==null?void 0:a.if)!==!1}function Ef(i,n,t){const a=n.typeCondition;if(!a)return!0;const s=dt(i,a);return s===t?!0:fi(s)?i.isSubType(s,t):!1}function CD(i){return i.alias?i.alias.value:i.name.value}function OD(i){return{OperationDefinition(n){if(n.operation==="subscription"){const t=i.getSchema(),a=t.getSubscriptionType();if(a){const s=n.name?n.name.value:null,o=Object.create(null),u=i.getDocument(),f=Object.create(null);for(const m of u.definitions)m.kind===w.FRAGMENT_DEFINITION&&(f[m.name.value]=m);const h=ND(t,f,o,a,n.selectionSet);if(h.size>1){const b=[...h.values()].slice(1).flat();i.reportError(new L(s!=null?`Subscription "${s}" must select only one top level field.`:"Anonymous Subscription must select only one top level field.",{nodes:b}))}for(const m of h.values())m[0].name.value.startsWith("__")&&i.reportError(new L(s!=null?`Subscription "${s}" must not select an introspection top level field.`:"Anonymous Subscription must not select an introspection top level field.",{nodes:m}))}}}}}function sl(i,n){const t=new Map;for(const a of i){const s=n(a),o=t.get(s);o===void 0?t.set(s,[a]):o.push(a)}return t}function RD(i){return{DirectiveDefinition(a){var s;const o=(s=a.arguments)!==null&&s!==void 0?s:[];return t(`@${a.name.value}`,o)},InterfaceTypeDefinition:n,InterfaceTypeExtension:n,ObjectTypeDefinition:n,ObjectTypeExtension:n};function n(a){var s;const o=a.name.value,u=(s=a.fields)!==null&&s!==void 0?s:[];for(const h of u){var f;const m=h.name.value,y=(f=h.arguments)!==null&&f!==void 0?f:[];t(`${o}.${m}`,y)}return!1}function t(a,s){const o=sl(s,u=>u.name.value);for(const[u,f]of o)f.length>1&&i.reportError(new L(`Argument "${a}(${u}:)" can only be defined once.`,{nodes:f.map(h=>h.name)}));return!1}}function Ph(i){return{Field:n,Directive:n};function n(t){var a;const s=(a=t.arguments)!==null&&a!==void 0?a:[],o=sl(s,u=>u.name.value);for(const[u,f]of o)f.length>1&&i.reportError(new L(`There can be only one argument named "${u}".`,{nodes:f.map(h=>h.name)}))}}function xD(i){const n=Object.create(null),t=i.getSchema();return{DirectiveDefinition(a){const s=a.name.value;if(t!=null&&t.getDirective(s)){i.reportError(new L(`Directive "@${s}" already exists in the schema. It cannot be redefined.`,{nodes:a.name}));return}return n[s]?i.reportError(new L(`There can be only one directive named "@${s}".`,{nodes:[n[s],a.name]})):n[s]=a.name,!1}}}function Bh(i){const n=Object.create(null),t=i.getSchema(),a=t?t.getDirectives():Mi;for(const f of a)n[f.name]=!f.isRepeatable;const s=i.getDocument().definitions;for(const f of s)f.kind===w.DIRECTIVE_DEFINITION&&(n[f.name.value]=!f.repeatable);const o=Object.create(null),u=Object.create(null);return{enter(f){if(!("directives"in f)||!f.directives)return;let h;if(f.kind===w.SCHEMA_DEFINITION||f.kind===w.SCHEMA_EXTENSION)h=o;else if(Fr(f)||tl(f)){const m=f.name.value;h=u[m],h===void 0&&(u[m]=h=Object.create(null))}else h=Object.create(null);for(const m of f.directives){const y=m.name.value;n[y]&&(h[y]?i.reportError(new L(`The directive "@${y}" can only be used once at this location.`,{nodes:[h[y],m]})):h[y]=m)}}}}function LD(i){const n=i.getSchema(),t=n?n.getTypeMap():Object.create(null),a=Object.create(null);return{EnumTypeDefinition:s,EnumTypeExtension:s};function s(o){var u;const f=o.name.value;a[f]||(a[f]=Object.create(null));const h=(u=o.values)!==null&&u!==void 0?u:[],m=a[f];for(const y of h){const b=y.name.value,k=t[f];et(k)&&k.getValue(b)?i.reportError(new L(`Enum value "${f}.${b}" already exists in the schema. It cannot also be defined in this type extension.`,{nodes:y.name})):m[b]?i.reportError(new L(`Enum value "${f}.${b}" can only be defined once.`,{nodes:[m[b],y.name]})):m[b]=y.name}return!1}}function PD(i){const n=i.getSchema(),t=n?n.getTypeMap():Object.create(null),a=Object.create(null);return{InputObjectTypeDefinition:s,InputObjectTypeExtension:s,InterfaceTypeDefinition:s,InterfaceTypeExtension:s,ObjectTypeDefinition:s,ObjectTypeExtension:s};function s(o){var u;const f=o.name.value;a[f]||(a[f]=Object.create(null));const h=(u=o.fields)!==null&&u!==void 0?u:[],m=a[f];for(const y of h){const b=y.name.value;BD(t[f],b)?i.reportError(new L(`Field "${f}.${b}" already exists in the schema. It cannot also be defined in this type extension.`,{nodes:y.name})):m[b]?i.reportError(new L(`Field "${f}.${b}" can only be defined once.`,{nodes:[m[b],y.name]})):m[b]=y.name}return!1}}function BD(i,n){return qe(i)||Ve(i)||vn(i)?i.getFields()[n]!=null:!1}function UD(i){const n=Object.create(null);return{OperationDefinition:()=>!1,FragmentDefinition(t){const a=t.name.value;return n[a]?i.reportError(new L(`There can be only one fragment named "${a}".`,{nodes:[n[a],t.name]})):n[a]=t.name,!1}}}function Uh(i){const n=[];let t=Object.create(null);return{ObjectValue:{enter(){n.push(t),t=Object.create(null)},leave(){const a=n.pop();a||Zn(!1),t=a}},ObjectField(a){const s=a.name.value;t[s]?i.reportError(new L(`There can be only one input field named "${s}".`,{nodes:[t[s],a.name]})):t[s]=a.name}}}function $D(i){const n=Object.create(null);return{OperationDefinition(t){const a=t.name;return a&&(n[a.value]?i.reportError(new L(`There can be only one operation named "${a.value}".`,{nodes:[n[a.value],a]})):n[a.value]=a),!1},FragmentDefinition:()=>!1}}function MD(i){const n=i.getSchema(),t=Object.create(null),a=n?{query:n.getQueryType(),mutation:n.getMutationType(),subscription:n.getSubscriptionType()}:{};return{SchemaDefinition:s,SchemaExtension:s};function s(o){var u;const f=(u=o.operationTypes)!==null&&u!==void 0?u:[];for(const h of f){const m=h.operation,y=t[m];a[m]?i.reportError(new L(`Type for ${m} already defined in the schema. It cannot be redefined.`,{nodes:h})):y?i.reportError(new L(`There can be only one ${m} type in schema.`,{nodes:[y,h]})):t[m]=h}return!1}}function GD(i){const n=Object.create(null),t=i.getSchema();return{ScalarTypeDefinition:a,ObjectTypeDefinition:a,InterfaceTypeDefinition:a,UnionTypeDefinition:a,EnumTypeDefinition:a,InputObjectTypeDefinition:a};function a(s){const o=s.name.value;if(t!=null&&t.getType(o)){i.reportError(new L(`Type "${o}" already exists in the schema. It cannot also be defined in this type definition.`,{nodes:s.name}));return}return n[o]?i.reportError(new L(`There can be only one type named "${o}".`,{nodes:[n[o],s.name]})):n[o]=s.name,!1}}function VD(i){return{OperationDefinition(n){var t;const a=(t=n.variableDefinitions)!==null&&t!==void 0?t:[],s=sl(a,o=>o.variable.name.value);for(const[o,u]of s)u.length>1&&i.reportError(new L(`There can be only one variable named "$${o}".`,{nodes:u.map(f=>f.variable.name)}))}}}function WD(i){let n={};return{OperationDefinition:{enter(){n={}}},VariableDefinition(t){n[t.variable.name.value]=t},ListValue(t){const a=RE(i.getParentInputType());if(!bn(a))return ui(i,t),!1},ObjectValue(t){const a=gi(i.getInputType());if(!vn(a))return ui(i,t),!1;const s=pi(t.fields,o=>o.name.value);for(const o of Object.values(a.getFields()))if(!s[o.name]&&PE(o)){const f=$(o.type);i.reportError(new L(`Field "${a.name}.${o.name}" of required type "${f}" was not provided.`,{nodes:t}))}a.isOneOf&&YD(i,t,a,s,n)},ObjectField(t){const a=gi(i.getParentInputType());if(!i.getInputType()&&vn(a)){const o=vi(t.name.value,Object.keys(a.getFields()));i.reportError(new L(`Field "${t.name.value}" is not defined by type "${a.name}".`+Jt(o),{nodes:t}))}},NullValue(t){const a=i.getInputType();_e(a)&&i.reportError(new L(`Expected value of type "${$(a)}", found ${Je(t)}.`,{nodes:t}))},EnumValue:t=>ui(i,t),IntValue:t=>ui(i,t),FloatValue:t=>ui(i,t),StringValue:t=>ui(i,t),BooleanValue:t=>ui(i,t)}}function ui(i,n){const t=i.getInputType();if(!t)return;const a=gi(t);if(!Bi(a)){const s=$(t);i.reportError(new L(`Expected value of type "${s}", found ${Je(n)}.`,{nodes:n}));return}try{if(a.parseLiteral(n,void 0)===void 0){const o=$(t);i.reportError(new L(`Expected value of type "${o}", found ${Je(n)}.`,{nodes:n}))}}catch(s){const o=$(t);s instanceof L?i.reportError(s):i.reportError(new L(`Expected value of type "${o}", found ${Je(n)}; `+s.message,{nodes:n,originalError:s}))}}function YD(i,n,t,a,s){var o;const u=Object.keys(a);if(u.length!==1){i.reportError(new L(`OneOf Input Object "${t.name}" must specify exactly one key.`,{nodes:[n]}));return}const h=(o=a[u[0]])===null||o===void 0?void 0:o.value,m=!h||h.kind===w.NULL,y=(h==null?void 0:h.kind)===w.VARIABLE;if(m){i.reportError(new L(`Field "${t.name}.${u[0]}" must be non-null.`,{nodes:[n]}));return}if(y){const b=h.name.value;s[b].type.kind!==w.NON_NULL_TYPE&&i.reportError(new L(`Variable "${b}" must be non-nullable to be used for OneOf Input Object "${t.name}".`,{nodes:[n]}))}}function qD(i){return{VariableDefinition(n){const t=dt(i.getSchema(),n.type);if(t!==void 0&&!Zo(t)){const a=n.variable.name.value,s=Je(n.type);i.reportError(new L(`Variable "$${a}" cannot be non-input type "${s}".`,{nodes:n.type}))}}}}function jD(i){let n=Object.create(null);return{OperationDefinition:{enter(){n=Object.create(null)},leave(t){const a=i.getRecursiveVariableUsages(t);for(const{node:s,type:o,defaultValue:u}of a){const f=s.name.value,h=n[f];if(h&&o){const m=i.getSchema(),y=dt(m,h.type);if(y&&!HD(m,y,h.defaultValue,o,u)){const b=$(y),k=$(o);i.reportError(new L(`Variable "$${f}" of type "${b}" used in position expecting type "${k}".`,{nodes:[h,s]}))}}}}},VariableDefinition(t){n[t.variable.name.value]=t}}}function HD(i,n,t,a,s){if(_e(a)&&!_e(n)){if(!(t!=null&&t.kind!==w.NULL)&&!(s!==void 0))return!1;const f=a.ofType;return vr(i,n,f)}return vr(i,n,a)}const zD=Object.freeze([aD]);Object.freeze([HE,$D,iD,OD,Ch,KE,qD,SD,zE,UD,nD,uD,bD,oD,VD,lD,cD,Nh,Bh,XE,Ph,WD,_D,jD,hD,Uh,...zD]);const QD=Object.freeze([rD,MD,GD,LD,PD,RD,xD,Ch,Nh,Bh,wD,Fh,Ph,Uh,Lh]);class JD{constructor(n,t){this._ast=n,this._fragments=void 0,this._fragmentSpreads=new Map,this._recursivelyReferencedFragments=new Map,this._onError=t}get[Symbol.toStringTag](){return"ASTValidationContext"}reportError(n){this._onError(n)}getDocument(){return this._ast}getFragment(n){let t;if(this._fragments)t=this._fragments;else{t=Object.create(null);for(const a of this.getDocument().definitions)a.kind===w.FRAGMENT_DEFINITION&&(t[a.name.value]=a);this._fragments=t}return t[n]}getFragmentSpreads(n){let t=this._fragmentSpreads.get(n);if(!t){t=[];const a=[n];let s;for(;s=a.pop();)for(const o of s.selections)o.kind===w.FRAGMENT_SPREAD?t.push(o):o.selectionSet&&a.push(o.selectionSet);this._fragmentSpreads.set(n,t)}return t}getRecursivelyReferencedFragments(n){let t=this._recursivelyReferencedFragments.get(n);if(!t){t=[];const a=Object.create(null),s=[n.selectionSet];let o;for(;o=s.pop();)for(const u of this.getFragmentSpreads(o)){const f=u.name.value;if(a[f]!==!0){a[f]=!0;const h=this.getFragment(f);h&&(t.push(h),s.push(h.selectionSet))}}this._recursivelyReferencedFragments.set(n,t)}return t}}class KD extends JD{constructor(n,t,a){super(n,a),this._schema=t}get[Symbol.toStringTag](){return"SDLValidationContext"}getSchema(){return this._schema}}function XD(i,n,t=QD){const a=[],s=new KD(i,n,u=>{a.push(u)}),o=t.map(u=>u(s));return sh(i,AE(o)),a}function ZD(i){const n=XD(i);if(n.length!==0)throw new Error(n.map(t=>t.message).join(`

`))}function eI(i,n){Ct(i)&&Ct(i.__schema)||fe(!1,`Invalid or incomplete introspection result. Ensure that you are passing "data" property of introspection response and no "errors" was returned alongside: ${$(i)}.`);const t=i.__schema,a=ci(t.types,R=>R.name,R=>k(R));for(const R of[...Hs,...Qs])a[R.name]&&(a[R.name]=R);const s=t.queryType?y(t.queryType):null,o=t.mutationType?y(t.mutationType):null,u=t.subscriptionType?y(t.subscriptionType):null,f=t.directives?t.directives.map(gt):[];return new kh({description:t.description,query:s,mutation:o,subscription:u,types:Object.values(a),directives:f,assumeValid:void 0});function h(R){if(R.kind===De.LIST){const K=R.ofType;if(!K)throw new Error("Decorated type deeper than introspection query.");return new fn(h(K))}if(R.kind===De.NON_NULL){const K=R.ofType;if(!K)throw new Error("Decorated type deeper than introspection query.");const on=h(K);return new re(OE(on))}return m(R)}function m(R){const K=R.name;if(!K)throw new Error(`Unknown type reference: ${$(R)}.`);const on=a[K];if(!on)throw new Error(`Invalid or incomplete schema, unknown type: ${K}. Ensure that a full introspection query is used in order to build a client schema.`);return on}function y(R){return NE(m(R))}function b(R){return CE(m(R))}function k(R){if(R!=null&&R.name!=null&&R.kind!=null)switch(R.kind){case De.SCALAR:return _(R);case De.OBJECT:return P(R);case De.INTERFACE:return q(R);case De.UNION:return ce(R);case De.ENUM:return Ae(R);case De.INPUT_OBJECT:return me(R)}const K=$(R);throw new Error(`Invalid or incomplete introspection result. Ensure that a full introspection query is used in order to build a client schema: ${K}.`)}function _(R){return new Ot({name:R.name,description:R.description,specifiedByURL:R.specifiedByURL})}function O(R){if(R.interfaces===null&&R.kind===De.INTERFACE)return[];if(!R.interfaces){const K=$(R);throw new Error(`Introspection result missing interfaces: ${K}.`)}return R.interfaces.map(b)}function P(R){return new ht({name:R.name,description:R.description,interfaces:()=>O(R),fields:()=>Ne(R)})}function q(R){return new xs({name:R.name,description:R.description,interfaces:()=>O(R),fields:()=>Ne(R)})}function ce(R){if(!R.possibleTypes){const K=$(R);throw new Error(`Introspection result missing possibleTypes: ${K}.`)}return new Ls({name:R.name,description:R.description,types:()=>R.possibleTypes.map(y)})}function Ae(R){if(!R.enumValues){const K=$(R);throw new Error(`Introspection result missing enumValues: ${K}.`)}return new Ui({name:R.name,description:R.description,values:ci(R.enumValues,K=>K.name,K=>({description:K.description,deprecationReason:K.deprecationReason}))})}function me(R){if(!R.inputFields){const K=$(R);throw new Error(`Introspection result missing inputFields: ${K}.`)}return new Ps({name:R.name,description:R.description,fields:()=>an(R.inputFields),isOneOf:R.isOneOf})}function Ne(R){if(!R.fields)throw new Error(`Introspection result missing fields: ${$(R)}.`);return ci(R.fields,K=>K.name,xe)}function xe(R){const K=h(R.type);if(!oh(K)){const on=$(K);throw new Error(`Introspection must provide output type for fields, but received: ${on}.`)}if(!R.args){const on=$(R);throw new Error(`Introspection result missing field args: ${on}.`)}return{description:R.description,deprecationReason:R.deprecationReason,type:K,args:an(R.args)}}function an(R){return ci(R,K=>K.name,en)}function en(R){const K=h(R.type);if(!Zo(K)){const Lt=$(K);throw new Error(`Introspection must provide input type for arguments, but received: ${Lt}.`)}const on=R.defaultValue!=null?jt(vE(R.defaultValue),K):void 0;return{description:R.description,type:K,defaultValue:on,deprecationReason:R.deprecationReason}}function gt(R){if(!R.args){const K=$(R);throw new Error(`Introspection result missing directive args: ${K}.`)}if(!R.locations){const K=$(R);throw new Error(`Introspection result missing directive locations: ${K}.`)}return new Rt({name:R.name,description:R.description,isRepeatable:R.isRepeatable,locations:R.locations.slice(),args:an(R.args)})}}function nI(i,n,t){var a,s,o,u;const f=[],h=Object.create(null),m=[];let y;const b=[];for(const A of n.definitions)if(A.kind===w.SCHEMA_DEFINITION)y=A;else if(A.kind===w.SCHEMA_EXTENSION)b.push(A);else if(Fr(A))f.push(A);else if(tl(A)){const V=A.name.value,U=h[V];h[V]=U?U.concat([A]):[A]}else A.kind===w.DIRECTIVE_DEFINITION&&m.push(A);if(Object.keys(h).length===0&&f.length===0&&m.length===0&&b.length===0&&y==null)return i;const k=Object.create(null);for(const A of i.types)k[A.name]=Ae(A);for(const A of f){var _;const V=A.name.value;k[V]=(_=Df[V])!==null&&_!==void 0?_:Fn(A)}const O={query:i.query&&q(i.query),mutation:i.mutation&&q(i.mutation),subscription:i.subscription&&q(i.subscription),...y&&on([y]),...on(b)};return{description:(a=y)===null||a===void 0||(s=a.description)===null||s===void 0?void 0:s.value,...O,types:Object.values(k),directives:[...i.directives.map(ce),...m.map(Nr)],extensions:Object.create(null),astNode:(o=y)!==null&&o!==void 0?o:i.astNode,extensionASTNodes:i.extensionASTNodes.concat(b),assumeValid:(u=t==null?void 0:t.assumeValid)!==null&&u!==void 0?u:!1};function P(A){return bn(A)?new fn(P(A.ofType)):_e(A)?new re(P(A.ofType)):q(A)}function q(A){return k[A.name]}function ce(A){const V=A.toConfig();return new Rt({...V,args:At(V.args,K)})}function Ae(A){if(WE(A)||$E(A))return A;if(Kt(A))return xe(A);if(qe(A))return an(A);if(Ve(A))return en(A);if(Mn(A))return gt(A);if(et(A))return Ne(A);if(vn(A))return me(A);Zn(!1,"Unexpected type: "+$(A))}function me(A){var V;const U=A.toConfig(),M=(V=h[U.name])!==null&&V!==void 0?V:[];return new Ps({...U,fields:()=>({...At(U.fields,de=>({...de,type:P(de.type)})),...at(M)}),extensionASTNodes:U.extensionASTNodes.concat(M)})}function Ne(A){var V;const U=A.toConfig(),M=(V=h[A.name])!==null&&V!==void 0?V:[];return new Ui({...U,values:{...U.values,...Vn(M)},extensionASTNodes:U.extensionASTNodes.concat(M)})}function xe(A){var V;const U=A.toConfig(),M=(V=h[U.name])!==null&&V!==void 0?V:[];let de=U.specifiedByURL;for(const pe of M){var Ue;de=(Ue=If(pe))!==null&&Ue!==void 0?Ue:de}return new Ot({...U,specifiedByURL:de,extensionASTNodes:U.extensionASTNodes.concat(M)})}function an(A){var V;const U=A.toConfig(),M=(V=h[U.name])!==null&&V!==void 0?V:[];return new ht({...U,interfaces:()=>[...A.getInterfaces().map(q),...Ti(M)],fields:()=>({...At(U.fields,R),...bi(M)}),extensionASTNodes:U.extensionASTNodes.concat(M)})}function en(A){var V;const U=A.toConfig(),M=(V=h[U.name])!==null&&V!==void 0?V:[];return new xs({...U,interfaces:()=>[...A.getInterfaces().map(q),...Ti(M)],fields:()=>({...At(U.fields,R),...bi(M)}),extensionASTNodes:U.extensionASTNodes.concat(M)})}function gt(A){var V;const U=A.toConfig(),M=(V=h[U.name])!==null&&V!==void 0?V:[];return new Ls({...U,types:()=>[...A.getTypes().map(q),...Zt(M)],extensionASTNodes:U.extensionASTNodes.concat(M)})}function R(A){return{...A,type:P(A.type),args:A.args&&At(A.args,K)}}function K(A){return{...A,type:P(A.type)}}function on(A){const V={};for(const M of A){var U;const de=(U=M.operationTypes)!==null&&U!==void 0?U:[];for(const Ue of de)V[Ue.operation]=Lt(Ue.type)}return V}function Lt(A){var V;const U=A.name.value,M=(V=Df[U])!==null&&V!==void 0?V:k[U];if(M===void 0)throw new Error(`Unknown type: "${U}".`);return M}function Xt(A){return A.kind===w.LIST_TYPE?new fn(Xt(A.type)):A.kind===w.NON_NULL_TYPE?new re(Xt(A.type)):Lt(A)}function Nr(A){var V;return new Rt({name:A.name.value,description:(V=A.description)===null||V===void 0?void 0:V.value,locations:A.locations.map(({value:U})=>U),isRepeatable:A.repeatable,args:Cr(A.arguments),astNode:A})}function bi(A){const V=Object.create(null);for(const de of A){var U;const Ue=(U=de.fields)!==null&&U!==void 0?U:[];for(const pe of Ue){var M;V[pe.name.value]={type:Xt(pe.type),description:(M=pe.description)===null||M===void 0?void 0:M.value,args:Cr(pe.arguments),deprecationReason:Ss(pe),astNode:pe}}}return V}function Cr(A){const V=A??[],U=Object.create(null);for(const de of V){var M;const Ue=Xt(de.type);U[de.name.value]={type:Ue,description:(M=de.description)===null||M===void 0?void 0:M.value,defaultValue:jt(de.defaultValue,Ue),deprecationReason:Ss(de),astNode:de}}return U}function at(A){const V=Object.create(null);for(const de of A){var U;const Ue=(U=de.fields)!==null&&U!==void 0?U:[];for(const pe of Ue){var M;const Nn=Xt(pe.type);V[pe.name.value]={type:Nn,description:(M=pe.description)===null||M===void 0?void 0:M.value,defaultValue:jt(pe.defaultValue,Nn),deprecationReason:Ss(pe),astNode:pe}}}return V}function Vn(A){const V=Object.create(null);for(const de of A){var U;const Ue=(U=de.values)!==null&&U!==void 0?U:[];for(const pe of Ue){var M;V[pe.name.value]={description:(M=pe.description)===null||M===void 0?void 0:M.value,deprecationReason:Ss(pe),astNode:pe}}}return V}function Ti(A){return A.flatMap(V=>{var U,M;return(U=(M=V.interfaces)===null||M===void 0?void 0:M.map(Lt))!==null&&U!==void 0?U:[]})}function Zt(A){return A.flatMap(V=>{var U,M;return(U=(M=V.types)===null||M===void 0?void 0:M.map(Lt))!==null&&U!==void 0?U:[]})}function Fn(A){var V;const U=A.name.value,M=(V=h[U])!==null&&V!==void 0?V:[];switch(A.kind){case w.OBJECT_TYPE_DEFINITION:{var de;const nn=[A,...M];return new ht({name:U,description:(de=A.description)===null||de===void 0?void 0:de.value,interfaces:()=>Ti(nn),fields:()=>bi(nn),astNode:A,extensionASTNodes:M})}case w.INTERFACE_TYPE_DEFINITION:{var Ue;const nn=[A,...M];return new xs({name:U,description:(Ue=A.description)===null||Ue===void 0?void 0:Ue.value,interfaces:()=>Ti(nn),fields:()=>bi(nn),astNode:A,extensionASTNodes:M})}case w.ENUM_TYPE_DEFINITION:{var pe;const nn=[A,...M];return new Ui({name:U,description:(pe=A.description)===null||pe===void 0?void 0:pe.value,values:Vn(nn),astNode:A,extensionASTNodes:M})}case w.UNION_TYPE_DEFINITION:{var Nn;const nn=[A,...M];return new Ls({name:U,description:(Nn=A.description)===null||Nn===void 0?void 0:Nn.value,types:()=>Zt(nn),astNode:A,extensionASTNodes:M})}case w.SCALAR_TYPE_DEFINITION:{var Gi;return new Ot({name:U,description:(Gi=A.description)===null||Gi===void 0?void 0:Gi.value,specifiedByURL:If(A),astNode:A,extensionASTNodes:M})}case w.INPUT_OBJECT_TYPE_DEFINITION:{var Pt;const nn=[A,...M];return new Ps({name:U,description:(Pt=A.description)===null||Pt===void 0?void 0:Pt.value,fields:()=>at(nn),astNode:A,extensionASTNodes:M,isOneOf:tI(A)})}}}}const Df=pi([...Hs,...Qs],i=>i.name);function Ss(i){const n=Ir(Th,i);return n==null?void 0:n.reason}function If(i){const n=Ir(wh,i);return n==null?void 0:n.url}function tI(i){return!!Ir(Eh,i)}function iI(i,n){i!=null&&i.kind===w.DOCUMENT||fe(!1,"Must provide valid Document AST."),(n==null?void 0:n.assumeValid)!==!0&&(n==null?void 0:n.assumeValidSDL)!==!0&&ZD(i);const a=nI({description:void 0,types:[],directives:[],extensions:Object.create(null),extensionASTNodes:[],assumeValid:!1},i,n);if(a.astNode==null)for(const o of a.types)switch(o.name){case"Query":a.query=o;break;case"Mutation":a.mutation=o;break;case"Subscription":a.subscription=o;break}const s=[...a.directives,...Mi.filter(o=>a.directives.every(u=>u.name!==o.name))];return new kh({...a,directives:s})}function rI(i,n){const t=yE(i,{noLocation:void 0,allowLegacyFragmentVariables:void 0});return iI(t,{assumeValidSDL:void 0,assumeValid:void 0})}function sI(i){const n=new Map;return aI(i,t=>{qe(t)&&oI(t,a=>{const s=Po(a.type);_o(n,s).references.push({kind:yr.FIELD,parent:t,by:a}),lI(a,u=>{const f=Po(u.type);_o(n,f).references.push({kind:yr.ARGUMENT,field:a,type:t,by:u})})}),Mn(t)&&t.getTypes().forEach(a=>{_o(n,a).references.push({kind:yr.UNION,by:t})})}),new Ww(n)}function aI(i,n){Object.entries(i.getTypeMap()).forEach(([,t])=>{t.name.startsWith("__")||n(t)})}function oI(i,n){Object.entries(i.getFields()).forEach(([,t])=>{n(t)})}function lI(i,n){Object.entries(i.args).forEach(([,t])=>{n(t)})}function _o(i,n){let t=i.get(n.name);return t||(t={references:[]},i.set(n.name,t)),t}function Po(i){return _e(i)||bn(i)?Po(i.ofType):i}const _f=`
"A fare product (a ticket) to be bought by a passenger"
interface FareProduct {
  "Identifier for the fare product."
  id: String!
  """
  The 'medium' that this product applies to, for example "Oyster Card" or "Berlin Ticket App".
    
  This communicates to riders that a specific way of buying or keeping this product is required.
  """
  medium: FareMedium
  "Human readable name of the product, for example example \\"Day pass\\" or \\"Single ticket\\"."
  name: String!
  "The category of riders this product applies to, for example students or pensioners."
  riderCategory: RiderCategory
}


"An object with an ID"
interface Node {
  "The ID of an object"
  id: ID!
}


"Interface for places, e.g. stops, stations, parking areas.."
interface PlaceInterface {
  id: ID!
  "Latitude of the place (WGS 84)"
  lat: Float
  "Longitude of the place (WGS 84)"
  lon: Float
}


"Entity related to an alert"
union AlertEntity = Agency | Pattern | Route | RouteType | Stop | StopOnRoute | StopOnTrip | Trip | Unknown


union StopPosition = PositionAtStop | PositionBetweenStops


"A public transport agency"
type Agency implements Node {
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
  "URL to a web page which has information of fares used by this agency"
  fareUrl: String
  "Agency feed and id"
  gtfsId: String!
  "Global object ID provided by Relay. This value can be used to refetch this object using **node** query."
  id: ID!
  lang: String
  "Name of the agency"
  name: String!
  "Phone number which customers can use to contact this agency"
  phone: String
  "List of routes operated by this agency"
  routes: [Route]
  "ID of the time zone which this agency operates on"
  timezone: String!
  "URL to the home page of the agency"
  url: String!
}


"Alert of a current or upcoming disruption in public transportation"
type Alert implements Node {
  """
  Agency affected by the disruption. Note that this value is present only if the
  disruption has an effect on all operations of the agency (e.g. in case of a strike).
  """
  agency: Agency @deprecated(reason: "Alert can have multiple affected entities now instead of there being duplicate alerts\\nfor different entities. This will return only one of the affected agencies.\\nUse entities instead.")
  "Alert cause"
  alertCause: AlertCauseType
  "Long description of the alert"
  alertDescriptionText: String!
  "Long descriptions of the alert in all different available languages"
  alertDescriptionTextTranslations: [TranslatedString!]!
  "Alert effect"
  alertEffect: AlertEffectType
  "hashcode from the original GTFS-RT alert"
  alertHash: Int
  "Header of the alert, if available"
  alertHeaderText: String
  "Header of the alert in all different available languages"
  alertHeaderTextTranslations: [TranslatedString!]!
  "Alert severity level"
  alertSeverityLevel: AlertSeverityLevelType
  "Url with more information"
  alertUrl: String
  "Url with more information in all different available languages"
  alertUrlTranslations: [TranslatedString!]!
  "Time when this alert is not in effect anymore. Format: Unix timestamp in seconds"
  effectiveEndDate: Long
  "Time when this alert comes into effect. Format: Unix timestamp in seconds"
  effectiveStartDate: Long
  "Entities affected by the disruption."
  entities: [AlertEntity]
  "The feed in which this alert was published"
  feed: String
  "Global object ID provided by Relay. This value can be used to refetch this object using **node** query."
  id: ID!
  "Patterns affected by the disruption"
  patterns: [Pattern] @deprecated(reason: "This will always return an empty list. Use entities instead.")
  "Route affected by the disruption"
  route: Route @deprecated(reason: "Alert can have multiple affected entities now instead of there being duplicate alerts\\nfor different entities. This will return only one of the affected routes.\\nUse entities instead.")
  "Stop affected by the disruption"
  stop: Stop @deprecated(reason: "Alert can have multiple affected entities now instead of there being duplicate alerts\\nfor different entities. This will return only one of the affected stops.\\nUse entities instead.")
  "Trip affected by the disruption"
  trip: Trip @deprecated(reason: "Alert can have multiple affected entities now instead of there being duplicate alerts\\nfor different entities. This will return only one of the affected trips.\\nUse entities instead.")
}


"Bike park represents a location where bicycles can be parked."
type BikePark implements Node & PlaceInterface {
  "ID of the bike park"
  bikeParkId: String
  "Global object ID provided by Relay. This value can be used to refetch this object using **node** query."
  id: ID!
  "Latitude of the bike park (WGS 84)"
  lat: Float
  "Longitude of the bike park (WGS 84)"
  lon: Float
  "Name of the bike park"
  name(
    "Returns name with the specified language, if found, otherwise returns with some default language."
    language: String
  ): String!
  "Opening hours of the parking facility"
  openingHours: OpeningHours
  "If true, value of \`spacesAvailable\` is updated from a real-time source."
  realtime: Boolean
  "Number of spaces available for bikes"
  spacesAvailable: Int
  "Source specific tags of the bike park, which describe the available features."
  tags: [String]
}


"Bike rental station represents a location where users can rent bicycles for a fee."
type BikeRentalStation implements Node & PlaceInterface {
  """
  If true, bikes can be returned to this station if the station has spaces available
  or allows overloading.
  """
  allowDropoff: Boolean
  "If true, bikes can be currently returned to this station."
  allowDropoffNow: Boolean
  "If true, bikes can be returned even if spacesAvailable is zero or bikes > capacity."
  allowOverloading: Boolean
  "If true, bikes can be picked up from this station if the station has bikes available."
  allowPickup: Boolean
  "If true, bikes can be currently picked up from this station."
  allowPickupNow: Boolean
  """
  Number of bikes currently available on the rental station.
  See field \`allowPickupNow\` to know if is currently possible to pick up a bike.
  """
  bikesAvailable: Int
  "Nominal capacity (number of racks) of the rental station."
  capacity: Int
  "Global object ID provided by Relay. This value can be used to refetch this object using **node** query."
  id: ID!
  "Latitude of the bike rental station (WGS 84)"
  lat: Float
  "Longitude of the bike rental station (WGS 84)"
  lon: Float
  "Name of the bike rental station"
  name: String!
  networks: [String]
  "If true, station is on and in service."
  operative: Boolean
  """
  If true, values of \`bikesAvailable\` and \`spacesAvailable\` are updated from a
  real-time source. If false, values of \`bikesAvailable\` and \`spacesAvailable\`
  are always the total capacity divided by two.
  """
  realtime: Boolean
  "Platform-specific URLs to begin renting a bike from this station."
  rentalUris: BikeRentalStationUris
  """
  Number of free spaces currently available on the rental station.
  Note that this value being 0 does not necessarily indicate that bikes cannot be returned
  to this station, as for example it might be possible to leave the bike in the vicinity of
  the rental station, even if the bike racks don't have any spaces available.
  See field \`allowDropoffNow\` to know if is currently possible to return a bike.
  """
  spacesAvailable: Int
  "A description of the current state of this bike rental station, e.g. \\"Station on\\""
  state: String @deprecated(reason: "Use operative instead")
  "ID of the bike rental station"
  stationId: String
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


"""
Booking information for a stop time which has special requirements to use, like calling ahead or
using an app.
"""
type BookingInfo {
  "Contact information for reaching the service provider"
  contactInfo: ContactInfo
  "A message specific to the drop off"
  dropOffMessage: String
  "When is the earliest time the service can be booked."
  earliestBookingTime: BookingTime
  "When is the latest time the service can be booked"
  latestBookingTime: BookingTime
  "Maximum number of seconds before travel to make the request"
  maximumBookingNoticeSeconds: Long
  "A general message for those booking the service"
  message: String
  "Minimum number of seconds before travel to make the request"
  minimumBookingNoticeSeconds: Long
  "A message specific to the pick up"
  pickupMessage: String
}


"Temporal restriction for a booking"
type BookingTime {
  "How many days before the booking"
  daysPrior: Int
  "Time of the booking"
  time: String
}


"Car park represents a location where cars can be parked."
type CarPark implements Node & PlaceInterface {
  "ID of the car park"
  carParkId: String
  "Global object ID provided by Relay. This value can be used to refetch this object using **node** query."
  id: ID!
  "Latitude of the car park (WGS 84)"
  lat: Float
  "Longitude of the car park (WGS 84)"
  lon: Float
  "Number of parking spaces at the car park"
  maxCapacity: Int
  "Name of the car park"
  name(
    "Returns name with the specified language, if found, otherwise returns with some default language."
    language: String
  ): String!
  """
  Opening hours for the selected dates using the local time of the park.
  Each date can have multiple time spans.
  """
  openingHours: OpeningHours
  "If true, value of \`spacesAvailable\` is updated from a real-time source."
  realtime: Boolean
  "Number of currently available parking spaces at the car park"
  spacesAvailable: Int
  "Source specific tags of the car park, which describe the available features."
  tags: [String]
}


"Cluster is a list of stops grouped by name and proximity"
type Cluster implements Node {
  "ID of the cluster"
  gtfsId: String!
  "Global object ID provided by Relay. This value can be used to refetch this object using **node** query."
  id: ID!
  "Latitude of the center of this cluster (i.e. average latitude of stops in this cluster)"
  lat: Float!
  "Longitude of the center of this cluster (i.e. average longitude of stops in this cluster)"
  lon: Float!
  "Name of the cluster"
  name: String!
  "List of stops in the cluster"
  stops: [Stop!]
}


"Contact information for booking an on-demand or flexible service."
type ContactInfo {
  "Additional notes about the contacting the service provider"
  additionalDetails: String
  "URL to the booking systems of the service"
  bookingUrl: String
  "Name of the person to contact"
  contactPerson: String
  "Email to contact"
  eMail: String
  "Fax number to contact"
  faxNumber: String
  "URL containing general information about the service"
  infoUrl: String
  "Phone number to contact"
  phoneNumber: String
}


"""
Coordinate (often referred as coordinates), which is used to specify a location using in the
WGS84 coordinate system.
"""
type Coordinate {
  "Latitude as a WGS84 format number."
  latitude: CoordinateValue!
  "Longitude as a WGS84 format number."
  longitude: CoordinateValue!
}


type Coordinates {
  "Latitude (WGS 84)"
  lat: Float
  "Longitude (WGS 84)"
  lon: Float
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


"""
The standard case of a fare product: it only has a single price to be paid by the passenger
and no discounts are applied.
"""
type DefaultFareProduct implements FareProduct {
  "Identifier for the fare product."
  id: String!
  """
  The 'medium' that this product applies to, for example "Oyster Card" or "Berlin Ticket App".
    
  This communicates to riders that a specific way of buying or keeping this product is required.
  """
  medium: FareMedium
  "Human readable name of the product, for example example \\"Day pass\\" or \\"Single ticket\\"."
  name: String!
  "The price of the product"
  price: Money!
  "The category of riders this product applies to, for example students or pensioners."
  riderCategory: RiderCategory
}


"""
Departure row is a combination of a pattern and a stop of that pattern.

They are de-duplicated so for each pattern there will only be a single departure row.

This is useful if you want to show a list of stop/pattern combinations but want each pattern to be
listed only once.
"""
type DepartureRow implements Node & PlaceInterface {
  "Global object ID provided by Relay. This value can be used to refetch this object using **node** query."
  id: ID!
  "Latitude of the stop (WGS 84)"
  lat: Float
  "Longitude of the stop (WGS 84)"
  lon: Float
  "Pattern of the departure row"
  pattern: Pattern
  "Stop from which the departures leave"
  stop: Stop
  "Departures of the pattern from the stop"
  stoptimes(
    "Maximum number of departures to return."
    numberOfDepartures: Int = 1
    "If false, returns also canceled trips"
    omitCanceled: Boolean = true
    "If true, only those departures which allow boarding are returned"
    omitNonPickups: Boolean = false
    "Return rows departing after this time. Time format: Unix timestamp in seconds. Default: current time."
    startTime: Long = 0
    "How many seconds ahead to search for departures. Default is one day."
    timeRange: Int = 86400
  ): [Stoptime]
}


type Emissions {
  "CO₂ emissions in grams."
  co2: Grams
}


"A 'medium' that a fare product applies to, for example cash, 'Oyster Card' or 'DB Navigator App'."
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


"A feed provides routing data (stops, routes, timetables, etc.) from one or more public transport agencies."
type Feed {
  "List of agencies which provide data to this feed"
  agencies: [Agency]
  "Alerts relevant for the feed."
  alerts(
    "Returns alerts for these types that are relevant for the feed."
    types: [FeedAlertType!]
  ): [Alert]
  "ID of the feed"
  feedId: String!
  "The publisher of the input transit data."
  publisher: FeedPublisher
}


"Feed publisher information"
type FeedPublisher {
  "Name of feed publisher"
  name: String!
  "Web address of feed publisher"
  url: String!
}


type Geometry {
  "The number of points in the string"
  length: Int
  """
  List of coordinates of in a Google encoded polyline format (see
  https://developers.google.com/maps/documentation/utilities/polylinealgorithm)
  """
  points: Polyline
}


type Itinerary {
  """
  Computes a numeric accessibility score between 0 and 1.
    
  The closer the value is to 1 the better the wheelchair-accessibility of this itinerary is.
  A value of \`null\` means that no score has been computed, not that the leg is inaccessible.
    
  More information is available in the [feature documentation](https://docs.opentripplanner.org/en/dev-2.x/sandbox/IBIAccessibilityScore/).
  """
  accessibilityScore: Float
  "Does the itinerary end without dropping off the rented bicycle:"
  arrivedAtDestinationWithRentedBicycle: Boolean
  "Duration of the trip on this itinerary, in seconds."
  duration: Long
  "How much elevation is gained, in total, over the course of the itinerary, in meters."
  elevationGained: Float
  "How much elevation is lost, in total, over the course of the itinerary, in meters."
  elevationLost: Float
  "Emissions of this itinerary per traveler."
  emissionsPerPerson: Emissions
  "Time when the user leaves arrives at the destination."
  end: OffsetDateTime
  "Time when the user arrives to the destination. Format: Unix timestamp in milliseconds."
  endTime: Long @deprecated(reason: "Use \`end\` instead which includes timezone information.")
  """
  Information about the fares for this itinerary. This is primarily a GTFS Fares V1 interface
  and always returns an empty list. Use the leg's \`fareProducts\` instead.
  """
  fares: [fare] @deprecated(reason: "Use the leg's \`fareProducts\`.")
  "Generalized cost of the itinerary. Used for debugging search results."
  generalizedCost: Int
  """
  A list of Legs. Each Leg is either a walking (cycling, car) portion of the
  itinerary, or a transit leg on a particular vehicle. So a itinerary where the
  user walks to the Q train, transfers to the 6, then walks to their
  destination, has four legs.
  """
  legs: [Leg]!
  """
  How many transfers are part of this itinerary.
    
  Notes:
   - Interlined/stay-seated transfers do not increase this count.
   - Transferring from a flex to a fixed schedule trip and vice versa increases this count.
  """
  numberOfTransfers: Int!
  "Time when the user leaves from the origin."
  start: OffsetDateTime
  "Time when the user leaves from the origin. Format: Unix timestamp in milliseconds."
  startTime: Long @deprecated(reason: "Use \`start\` instead which includes timezone information.")
  """
  A list of system notices. Contains debug information for itineraries.
  One use-case is to run a routing search with 'debugItineraryFilter: true'.
  This will then tag itineraries instead of removing them from the result.
  This make it possible to inspect the itinerary-filter-chain.
  """
  systemNotices: [SystemNotice]!
  "How much time is spent waiting for transit to arrive, in seconds."
  waitingTime: Long
  "How far the user has to walk, in meters."
  walkDistance: Float
  "How much time is spent walking, in seconds."
  walkTime: Long
}


type Leg {
  """
  Computes a numeric accessibility score between 0 and 1.
    
  The closer the value is to 1 the better the wheelchair-accessibility of this leg is.
  A value of \`null\` means that no score has been computed, not that the itinerary is inaccessible.
    
  More information is available in the [feature documentation](https://docs.opentripplanner.org/en/dev-2.x/sandbox/IBIAccessibilityScore/).
  """
  accessibilityScore: Float
  "For transit legs, the transit agency that operates the service used for this leg. For non-transit legs, \`null\`."
  agency: Agency
  "Applicable alerts for this leg."
  alerts: [Alert]
  """
  For transit leg, the offset from the scheduled arrival time of the alighting
  stop in this leg, i.e. scheduled time of arrival at alighting stop = \`endTime
  - arrivalDelay\`
  """
  arrivalDelay: Int @deprecated(reason: "Use \`start.estimated.delay\` instead.")
  """
  For transit leg, the offset from the scheduled departure time of the boarding
  stop in this leg, i.e. scheduled time of departure at boarding stop =
  \`startTime - departureDelay\`
  """
  departureDelay: Int @deprecated(reason: "Use \`end.estimated.delay\` instead.")
  "The distance traveled while traversing the leg in meters."
  distance: Float
  """
  Special booking information for the drop off stop of this leg if, for example, it needs
  to be booked in advance. This could be due to a flexible or on-demand service.
  """
  dropOffBookingInfo: BookingInfo
  "This is used to indicate if alighting from this leg is possible only with special arrangements."
  dropoffType: PickupDropoffType
  "The leg's duration in seconds"
  duration: Float
  "The time when the leg ends including real-time information, if available."
  end: LegTime!
  "The date and time when this leg ends. Format: Unix timestamp in milliseconds."
  endTime: Long @deprecated(reason: "Use \`end.estimated.time\` instead which contains timezone information.")
  """
  Fare products are purchasable tickets which may have an optional fare container or rider
  category that limits who can buy them or how.
    
  Please read the documentation of \`id\` very carefully to learn how a single fare product
  that applies to multiple legs can appear several times.
  """
  fareProducts: [FareProductUse]
  "The Place where the leg originates."
  from: Place!
  "Generalized cost of the leg. Used for debugging search results."
  generalizedCost: Int
  """
  For transit legs, the headsign that the vehicle shows at the stop where the passenger boards.
  For non-transit legs, null.
  """
  headsign: String
  """
  Interlines with previous leg.
  This is true when the same vehicle is used for the previous leg as for this leg
  and passenger can stay inside the vehicle.
  """
  interlineWithPreviousLeg: Boolean
  "Whether the destination of this leg (field \`to\`) is one of the intermediate places specified in the query."
  intermediatePlace: Boolean
  """
  For transit legs, intermediate stops between the Place where the leg
  originates and the Place where the leg ends. For non-transit legs, null.
  Returns Place type, which has fields for e.g. departure and arrival times
  """
  intermediatePlaces: [Place]
  """
  For transit legs, intermediate stops between the Place where the leg
  originates and the Place where the leg ends. For non-transit legs, null.
  """
  intermediateStops: [Stop]
  "The leg's geometry."
  legGeometry: Geometry
  "The mode (e.g. \`WALK\`) used when traversing this leg."
  mode: Mode
  "Future legs with same origin and destination stops or stations"
  nextLegs(
    """
    Transportation modes for which all stops in the parent station are used as possible destination stops
    for the next legs. For modes not listed, only the exact destination stop of the leg is considered.
    """
    destinationModesWithParentStation: [TransitMode!]
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
  ): [Leg!]
  """
  Special booking information for the pick up stop of this leg if, for example, it needs
  to be booked in advance. This could be due to a flexible or on-demand service.
  """
  pickupBookingInfo: BookingInfo
  "This is used to indicate if boarding this leg is possible only with special arrangements."
  pickupType: PickupDropoffType
  "Whether there is real-time data about this Leg"
  realTime: Boolean
  "State of real-time data"
  realtimeState: RealtimeState
  "Whether this leg is traversed with a rented bike."
  rentedBike: Boolean
  "Estimate of a hailed ride like Uber."
  rideHailingEstimate: RideHailingEstimate
  "For transit legs, the route that is used for traversing the leg. For non-transit legs, \`null\`."
  route: Route
  "For transit legs, the service date of the trip. Format: YYYYMMDD. For non-transit legs, null."
  serviceDate: String
  "The time when the leg starts including real-time information, if available."
  start: LegTime!
  "The date and time when this leg begins. Format: Unix timestamp in milliseconds."
  startTime: Long @deprecated(reason: "Use \`start.estimated.time\` instead which contains timezone information.")
  "The turn-by-turn navigation instructions."
  steps: [step]
  "The Place where the leg ends."
  to: Place!
  "Whether this leg is a transit leg or not."
  transitLeg: Boolean
  "For transit legs, the trip that is used for traversing the leg. For non-transit legs, \`null\`."
  trip: Trip
  "Whether this leg is walking with a bike."
  walkingBike: Boolean
}


"""
Time information about a passenger at a certain place. May contain real-time information if
available.
"""
type LegTime {
  "The estimated time of the event. If no real-time information is available, this is null."
  estimated: RealTimeEstimate
  "The scheduled time of the event."
  scheduledTime: OffsetDateTime!
}


"A span of time."
type LocalTimeSpan {
  "The start of the time timespan as seconds from midnight."
  from: Int!
  "The end of the timespan as seconds from midnight."
  to: Int!
}


"A date using the local timezone of the object that can contain timespans."
type LocalTimeSpanDate {
  "The date of this time span. Format: YYYYMMDD."
  date: String!
  "The time spans for this date."
  timeSpans: [LocalTimeSpan]
}


"An amount of money."
type Money {
  """
  Money in the major currency unit, so 3.10 USD is represented as \`3.1\`.
    
  If you want to get the minor currency unit (310 cents), multiply with
  (10 to the power of \`currency.digits\`).
  """
  amount: Float!
  "The currency of this money amount."
  currency: Currency!
}


type OpeningHours {
  """
  Opening hours for the selected dates using the local time of the parking lot.
  Each date can have multiple time spans.
    
  Note: This is not implemented yet and always returns null.
  """
  dates(
    "Opening hours will be returned for these dates. Dates should use YYYYMMDD format."
    dates: [String!]!
  ): [LocalTimeSpanDate]
  """
  OSM-formatted string of the opening hours.
    
  The spec is available at: https://wiki.openstreetmap.org/wiki/Key:opening_hours
  """
  osm: String
}


"Information about pagination in a connection."
type PageInfo {
  "When paginating forwards, the cursor to continue."
  endCursor: String
  "When paginating forwards, are there more items?"
  hasNextPage: Boolean!
  "When paginating backwards, are there more items?"
  hasPreviousPage: Boolean!
  "When paginating backwards, the cursor to continue."
  startCursor: String
}


"""
Pattern is sequence of stops used by trips on a specific direction and variant
of a route. Most routes have only two patterns: one for outbound trips and one
for inbound trips
"""
type Pattern implements Node {
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
  "ID of the pattern"
  code: String!
  """
  Direction of the pattern. Possible values: 0, 1 or -1.
  -1 indicates that the direction is irrelevant, i.e. the route has patterns only in one direction.
  """
  directionId: Int
  geometry: [Coordinates]
  "Vehicle headsign used by trips of this pattern"
  headsign: String
  "Global object ID provided by Relay. This value can be used to refetch this object using **node** query."
  id: ID!
  """
  Name of the pattern. Pattern name can be just the name of the route or it can
  include details of destination and origin stops.
  """
  name: String
  "Original Trip pattern for changed patterns"
  originalTripPattern: Pattern
  "Coordinates of the route of this pattern in Google polyline encoded format"
  patternGeometry: Geometry
  "The route this pattern runs on"
  route: Route!
  """
  Hash code of the pattern. This value is stable and not dependent on the
  pattern id, i.e. this value can be used to check whether two patterns are the
  same, even if their ids have changed.
  """
  semanticHash: String
  "List of stops served by this pattern"
  stops: [Stop!]
  "Trips which run on this pattern"
  trips: [Trip!]
  "Trips which run on this pattern on the specified date"
  tripsForDate(
    "Return trips of the pattern active on this date. Format: YYYYMMDD"
    serviceDate: String
  ): [Trip!]
  "Real-time updated position of vehicles that are serving this pattern."
  vehiclePositions: [VehiclePosition!]
}


type Place {
  """
  The time the rider will arrive at the place. This also includes real-time information
  if available.
  """
  arrival: LegTime
  "The time the rider will arrive at the place. Format: Unix timestamp in milliseconds."
  arrivalTime: Long! @deprecated(reason: "Use \`arrival\` which includes timezone information.")
  "The bike parking related to the place"
  bikePark: BikePark @deprecated(reason: "bikePark is deprecated. Use vehicleParking instead.")
  "The bike rental station related to the place"
  bikeRentalStation: BikeRentalStation @deprecated(reason: "Use vehicleRentalStation and rentalVehicle instead")
  "The car parking related to the place"
  carPark: CarPark @deprecated(reason: "carPark is deprecated. Use vehicleParking instead.")
  """
  The time the rider will depart the place. This also includes real-time information
  if available.
  """
  departure: LegTime
  "The time the rider will depart the place. Format: Unix timestamp in milliseconds."
  departureTime: Long! @deprecated(reason: "Use \`departure\` which includes timezone information.")
  "Latitude of the place (WGS 84)"
  lat: Float!
  "Longitude of the place (WGS 84)"
  lon: Float!
  "For transit stops, the name of the stop. For points of interest, the name of the POI."
  name: String
  "The rental vehicle related to the place"
  rentalVehicle: RentalVehicle
  "The stop related to the place."
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
  "The vehicle parking related to the place"
  vehicleParking: VehicleParking
  "The vehicle rental station related to the place"
  vehicleRentalStation: VehicleRentalStation
  """
  Type of vertex. (Normal, Bike sharing station, Bike P+R, Transit stop) Mostly
  used for better localization of bike sharing and P+R station names
  """
  vertexType: VertexType
}


type Plan {
  "The time and date of travel. Format: Unix timestamp in milliseconds."
  date: Long
  "Information about the timings for the plan generation"
  debugOutput: debugOutput!
  "The origin"
  from: Place!
  "A list of possible itineraries"
  itineraries: [Itinerary]!
  "A list of possible error messages as enum"
  messageEnums: [String]!
  "A list of possible error messages in cleartext"
  messageStrings: [String]!
  """
  This is the suggested search time for the "next page" or time window. Insert it together
  with the searchWindowUsed in the request to get a new set of trips following in the
  search-window AFTER the current search. No duplicate trips should be returned, unless a trip
  is delayed and new real-time data is available.
  """
  nextDateTime: Long @deprecated(reason: "Use nextPageCursor instead")
  """
  Use the cursor to go to the next "page" of itineraries. Copy the cursor from the last response
  to the pageCursor query parameter and keep the original request as is. This will enable you to
  search for itineraries in the next search-window.
  The cursor based paging only support stepping to the next page, as it does not support jumping.
  This is only usable when public transportation mode(s) are included in the query.
  """
  nextPageCursor: String
  """
  This is the suggested search time for the "previous page" or time window. Insert it together
  with the searchWindowUsed in the request to get a new set of trips preceding in the
  search-window BEFORE the current search. No duplicate trips should be returned, unless a trip
  is delayed and new real-time data is available.
  """
  prevDateTime: Long @deprecated(reason: "Use previousPageCursor instead")
  """
  Use the cursor to go to the previous "page" of itineraries. Copy the cursor from the last
  response to the pageCursor query parameter and keep the original request otherwise as is.
  This will enable you to search for itineraries in the previous search-window.
  The cursor based paging only support stepping to the previous page, as it does not support
  jumping.
  This is only usable when public transportation mode(s) are included in the query.
  """
  previousPageCursor: String
  "A list of routing errors, and fields which caused them"
  routingErrors: [RoutingError!]!
  """
  This is the \`searchWindow\` used by the raptor search. It is provided here for debugging
  purpousess.
    
  The unit is seconds.
  """
  searchWindowUsed: Long
  "The destination"
  to: Place!
}


"""
Plan (result of an itinerary search) that follows
[GraphQL Cursor Connections Specification](https://relay.dev/graphql/connections.htm).
"""
type PlanConnection {
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
  "Errors faced during the routing search."
  routingErrors: [RoutingError!]!
  "What was the starting point for the itinerary search."
  searchDateTime: OffsetDateTime
}


"""
Edge outputted by a plan search. Part of the
[GraphQL Cursor Connections Specification](https://relay.dev/graphql/connections.htm).
"""
type PlanEdge {
  """
  The cursor of the edge. Part of the
  [GraphQL Cursor Connections Specification](https://relay.dev/graphql/connections.htm).
  """
  cursor: String!
  """
  An itinerary suggestion. Part of the
  [GraphQL Cursor Connections Specification](https://relay.dev/graphql/connections.htm).
  """
  node: Itinerary!
}


"""
Information about pagination in a connection. Part of the
[GraphQL Cursor Connections Specification](https://relay.dev/graphql/connections.htm).
"""
type PlanPageInfo {
  "When paginating forwards, the cursor to continue."
  endCursor: String
  "When paginating forwards, are there more items?"
  hasNextPage: Boolean!
  "When paginating backwards, are there more items?"
  hasPreviousPage: Boolean!
  "The search window that was used for the search in the current page."
  searchWindowUsed: Duration
  "When paginating backwards, the cursor to continue."
  startCursor: String
}


"Stop position at a specific stop."
type PositionAtStop {
  "Position of the stop in the pattern. Positions are not required to start from 0 or be consecutive."
  position: Int
}


"The board/alight position in between two stops of the pattern of a trip with continuous pickup/drop off."
type PositionBetweenStops {
  "Position of the next stop in the pattern. Positions are not required to start from 0 or be consecutive."
  nextPosition: Int
  "Position of the previous stop in the pattern. Positions are not required to start from 0 or be consecutive."
  previousPosition: Int
}


type QueryType {
  "Get all agencies"
  agencies: [Agency]
  "Get a single agency based on agency ID, i.e. value of field \`gtfsId\` (ID format is \`FeedId:StopId\`)"
  agency(id: String!): Agency
  "Get all active alerts"
  alerts(
    "Only return alerts with these causes"
    cause: [AlertCauseType!]
    "Only return alerts with these effects"
    effect: [AlertEffectType!]
    "Only return alerts in these feeds"
    feeds: [String!]
    "Only return alerts affecting these routes"
    route: [String!]
    "Only return alerts with these severity levels"
    severityLevel: [AlertSeverityLevelType!]
    "Only return alerts affecting these stops"
    stop: [String!]
  ): [Alert]
  "Get a single bike park based on its ID, i.e. value of field \`bikeParkId\`"
  bikePark(id: String!): BikePark @deprecated(reason: "bikePark is deprecated. Use vehicleParking instead.")
  "Get all bike parks"
  bikeParks: [BikePark] @deprecated(reason: "bikeParks is deprecated. Use vehicleParkings instead.")
  "Get a single bike rental station based on its ID, i.e. value of field \`stationId\`"
  bikeRentalStation(id: String!): BikeRentalStation @deprecated(reason: "Use rentalVehicle or vehicleRentalStation instead")
  "Get all bike rental stations"
  bikeRentalStations(
    """
    Return bike rental stations with these ids.
    **Note:** if an id is invalid (or the bike rental station service is unavailable)
    the returned list will contain \`null\` values.
    """
    ids: [String]
  ): [BikeRentalStation] @deprecated(reason: "Use rentalVehicles or vehicleRentalStations instead")
  "Get cancelled TripTimes."
  cancelledTripTimes(
    "Feed feedIds (e.g. [\\"HSL\\"])."
    feeds: [String]
    """
    Only cancelled trip times that have last stop arrival time at maxArrivalTime
    or before are returned. Format: seconds since midnight of maxDate.
    """
    maxArrivalTime: Int
    "Only cancelled trip times scheduled to run on maxDate or before are returned. Format: \\"2019-12-23\\" or \\"20191223\\"."
    maxDate: String
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
    "Only cancelled trip times scheduled to run on minDate or after are returned. Format: \\"2019-12-23\\" or \\"20191223\\"."
    minDate: String
    """
    Only cancelled trip times that have first stop departure time at
    minDepartureTime or after are returned. Format: seconds since midnight of minDate.
    """
    minDepartureTime: Int
    "TripPattern codes (e.g. [\\"HSL:1098:1:01\\"])."
    patterns: [String]
    "Route gtfsIds (e.g. [\\"HSL:1098\\"])."
    routes: [String]
    "Trip gtfsIds (e.g. [\\"HSL:1098_20190405_Ma_2_1455\\"])."
    trips: [String]
  ): [Stoptime]
  "Get a single car park based on its ID, i.e. value of field \`carParkId\`"
  carPark(id: String!): CarPark @deprecated(reason: "carPark is deprecated. Use vehicleParking instead.")
  "Get all car parks"
  carParks(
    """
    Return car parks with these ids.
    **Note:** if an id is invalid (or the car park service is unavailable) the returned list will contain \`null\` values.
    """
    ids: [String]
  ): [CarPark] @deprecated(reason: "carParks is deprecated. Use vehicleParkings instead.")
  "Get a single cluster based on its ID, i.e. value of field \`gtfsId\`"
  cluster(id: String!): Cluster
  "Get all clusters"
  clusters: [Cluster]
  "Get a single departure row based on its ID (ID format is \`FeedId:StopId:PatternId\`)"
  departureRow(id: String!): DepartureRow
  "Get all available feeds"
  feeds: [Feed]
  """
  Finds a trip matching the given parameters. This query type is useful if the
  id of a trip is not known, but other details uniquely identifying the trip are
  available from some source (e.g. MQTT vehicle positions).
  """
  fuzzyTrip(
    "Departure date of the trip, format: YYYY-MM-DD"
    date: String!
    """
    Direction of the trip, possible values: 0, 1 or -1.
    -1 indicates that the direction is irrelevant, i.e. in case the route has
    trips only in one direction. See field \`directionId\` of Pattern.
    """
    direction: Int = -1
    "id of the route"
    route: String!
    "Departure time of the trip, format: seconds since midnight of the departure date"
    time: Int!
  ): Trip
  """
  Get all places (stops, stations, etc. with coordinates) within the specified
  radius from a location. The returned type is a Relay connection (see
  https://facebook.github.io/relay/graphql/connections.htm). The placeAtDistance
  type has two fields: place and distance. The search is done by walking so the
  distance is according to the network of walkable streets and paths.
  """
  nearest(
    after: String
    before: String
    "Only include places that match one of the given GTFS ids."
    filterByIds: InputFilters @deprecated(reason: "Not actively maintained")
    """
    Only return places that are related to one of these transport modes. This
    argument can be used to return e.g. only nearest railway stations or only
    nearest places related to bicycling.
    """
    filterByModes: [Mode]
    "Only return places that are one of these types, e.g. \`STOP\` or \`VEHICLE_RENT\`"
    filterByPlaceTypes: [FilterPlaceType]
    first: Int
    last: Int
    "Latitude of the location (WGS 84)"
    lat: Float!
    "Longitude of the location (WGS 84)"
    lon: Float!
    """
    Maximum distance (in meters) to search for from the specified location. Note
    that this is walking distance along streets and paths rather than a
    geographic distance. Default is 2000m
    """
    maxDistance: Int = 2000
    "Maximum number of results. Search is stopped when this limit is reached. Default is 20."
    maxResults: Int = 20
  ): placeAtDistanceConnection @async
  "Fetches an object given its ID"
  node(
    "The ID of an object"
    id: ID!
  ): Node
  """
  Get a single pattern based on its ID, i.e. value of field \`code\` (format is
  \`FeedId:RouteId:DirectionId:PatternVariantNumber\`)
  """
  pattern(id: String!): Pattern
  "Get all patterns"
  patterns: [Pattern]
  "Plans an itinerary from point A to point B based on the given arguments"
  plan(
    "Invariant: \`boardSlack + alightSlack <= transferSlack\`. Default value: 0"
    alightSlack: Int
    "Is bike rental allowed? Default value: false"
    allowBikeRental: Boolean @deprecated(reason: "Rental is specified by modes")
    """
    Whether arriving at the destination with a rented (station) bicycle is allowed without
    dropping it off. Default: false.
    """
    allowKeepingRentedBicycleAtDestination: Boolean
    "Which vehicle rental networks can be used. By default, all networks are allowed."
    allowedBikeRentalNetworks: [String] @deprecated(reason: "Use allowedVehicleRentalNetworks instead")
    """
    List of ticket types that are allowed to be used in itineraries.
    See \`ticketTypes\` query for list of possible ticket types.
    """
    allowedTicketTypes: [String]
    "Which vehicle rental networks can be used. By default, all networks are allowed."
    allowedVehicleRentalNetworks: [String]
    """
    Whether the itinerary should depart at the specified time (false), or arrive
    to the destination at the specified time (true). Default value: false.
    """
    arriveBy: Boolean
    "List of routes, trips, agencies and stops which are not used in the itinerary"
    banned: InputBanned
    "Which vehicle rental networks cannot be used. By default, all networks are allowed."
    bannedVehicleRentalNetworks: [String]
    """
    This argument has no use for itinerary planning and will be removed later.
    When true, do not use goal direction or stop at the target, build a full SPT. Default value: false.
    """
    batch: Boolean @deprecated(reason: "Removed in OTP 2")
    """
    Separate cost for boarding a vehicle with a bicycle, which is more difficult
    than on foot. Unit: seconds. Default value: 600
    """
    bikeBoardCost: Int
    """
    A multiplier for how bad biking is, compared to being in transit for equal
    lengths of time. Default value: 2.0
    """
    bikeReluctance: Float
    "Max bike speed along streets, in meters per second. Default value: 5.0"
    bikeSpeed: Float
    "Cost of getting on and off your own bike. Unit: seconds. Default value: 0"
    bikeSwitchCost: Int
    "Time to get on and off your own bike, in seconds. Default value: 0"
    bikeSwitchTime: Int
    """
    A multiplier for how bad walking with a bike is, compared to being in transit for equal
    lengths of time. Default value: 5.0
    """
    bikeWalkingReluctance: Float
    "Invariant: \`boardSlack + alightSlack <= transferSlack\`. Default value: 0"
    boardSlack: Int
    """
    How expensive it is to drive a car when car&parking, increase this value to
    make car driving legs shorter. Default value: 1.
    """
    carParkCarLegWeight: Float @deprecated(reason: "Use \`carReluctance\` instead.")
    """
    A multiplier for how bad driving is, compared to being in transit for equal
    lengths of time. Default value: 3.0
    """
    carReluctance: Float
    """
    No effect on itinerary planning, adjust argument \`time\` instead to get later departures.
    ~~The maximum wait time in seconds the user is willing to delay trip start. Only effective in Analyst.~~
    """
    claimInitialWait: Long @deprecated(reason: "Removed in OTP 2")
    "Whether legs should be compacted by performing a reversed search."
    compactLegsByReversedSearch: Boolean @deprecated(reason: "Removed in OTP 2")
    "Date of departure or arrival in format YYYY-MM-DD. Default value: current date"
    date: String
    "Debug the itinerary-filter-chain. The filters will mark itineraries as deleted, but does NOT delete them when this is enabled."
    debugItineraryFilter: Boolean
    """
    If true, the remaining weight heuristic is disabled. Currently only
    implemented for the long distance path service.
    """
    disableRemainingWeightHeuristic: Boolean @deprecated(reason: "Removed in OTP 2.2")
    """
    The geographical location where the itinerary begins.
    Use either this argument or \`fromPlace\`, but not both.
    """
    from: InputCoordinates
    """
    The place where the itinerary begins in format \`name::place\`, where \`place\`
    is either a lat,lng pair (e.g. \`Pasila::60.199041,24.932928\`) or a stop id
    (e.g. \`Pasila::HSL:1000202\`).
    Use either this argument or \`from\`, but not both.
    """
    fromPlace: String
    "Tuning parameter for the search algorithm, mainly useful for testing."
    heuristicStepsPerMainStep: Int @deprecated(reason: "Removed. Doesn't do anything.")
    "When true, real-time updates are ignored during this search. Default value: false"
    ignoreRealtimeUpdates: Boolean
    "An ordered list of intermediate locations to be visited."
    intermediatePlaces: [InputCoordinates] @deprecated(reason: "Not implemented in OTP2.")
    """
    How easily bad itineraries are filtered from results. Value 0 (default)
    disables filtering. Itineraries are filtered if they are worse than another
    one in some respect (e.g. more walking) by more than the percentage of
    filtering level, which is calculated by dividing 100% by the value of this
    argument (e.g. \`itineraryFiltering = 0.5\` → 200% worse itineraries are filtered).
    """
    itineraryFiltering: Float @deprecated(reason: "Removed. Doesn't do anything.")
    """
    The cost of arriving at the destination with the rented vehicle, to discourage doing so.
    Default value: 0.
    """
    keepingRentedBicycleAtDestinationCost: Int
    """
    Two-letter language code (ISO 639-1) used for returned text.
    **Note:** only part of the data has translations available and names of
    stops and POIs are returned in their default language. Due to missing
    translations, it is sometimes possible that returned text uses a mixture of two languages.
    """
    locale: String
    """
    The maximum time (in seconds) of pre-transit travel when using
    drive-to-transit (park and ride or kiss and ride). Default value: 1800.
    """
    maxPreTransitTime: Int @deprecated(reason: "Use walkReluctance or future reluctance parameters for other modes")
    "Maximum number of transfers. Default value: 2"
    maxTransfers: Int
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
    A global minimum transfer time (in seconds) that specifies the minimum
    amount of time that must pass between exiting one transit vehicle and
    boarding another. This time is in addition to time it might take to walk
    between transit stops. Default value: 0
    """
    minTransferTime: Int
    "The weight multipliers for transit modes. WALK, BICYCLE, CAR, TRANSIT and LEG_SWITCH are not included."
    modeWeight: InputModeWeight
    "Penalty (in seconds) for using a non-preferred transfer. Default value: 180"
    nonpreferredTransferPenalty: Int
    "The maximum number of itineraries to return. Default value: 3."
    numItineraries: Int = 3
    "When false, return itineraries using canceled trips. Default value: true."
    omitCanceled: Boolean = true
    "Optimization type for bicycling legs, e.g. prefer flat terrain. Default value: \`QUICK\`"
    optimize: OptimizeType
    """
    Use the cursor to get the next or previous page of results.
    The next page is a set of itineraries departing after the last itinerary in this result and
    the previous page is a set of itineraries departing before the first itinerary.
    This is only usable when public transportation mode(s) are included in the query.
    """
    pageCursor: String
    "Preferences for vehicle parking"
    parking: VehicleParkingInput
    "List of routes and agencies which are given higher preference when planning the itinerary"
    preferred: InputPreferred
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
    This argument has currently no effect on which itineraries are returned. Use
    argument \`fromPlace\` to start the itinerary from a specific stop.
    ~~A transit stop that this trip must start from~~
    """
    startTransitStopId: String
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
    "Time of departure or arrival in format hh:mm:ss. Default value: current time"
    time: String
    """
    The geographical location where the itinerary ends.
    Use either this argument or \`toPlace\`, but not both.
    """
    to: InputCoordinates
    """
    The place where the itinerary ends in format \`name::place\`, where \`place\` is
    either a lat,lng pair (e.g. \`Pasila::60.199041,24.932928\`) or a stop id
    (e.g. \`Pasila::HSL:1000202\`).
    Use either this argument or \`to\`, but not both.
    """
    toPlace: String
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
    "List of transportation modes that the user is willing to use. Default: \`[\\"WALK\\",\\"TRANSIT\\"]\`"
    transportModes: [TransportMode]
    "Triangle optimization parameters for bicycling legs. Only effective when \`optimize\` is set to **TRIANGLE**."
    triangle: InputTriangle
    "List of routes and agencies which are given lower preference when planning the itinerary"
    unpreferred: InputUnpreferred
    """
    How much less bad is waiting at the beginning of the trip (replaces
    \`waitReluctance\` on the first boarding). Default value: 0.4
    """
    waitAtBeginningFactor: Float @deprecated(reason: "Removed in OTP 2, the timetable-view replaces this functionality.")
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
    "This prevents unnecessary transfers by adding a cost for boarding a vehicle. Unit: seconds. Default value: 600"
    walkBoardCost: Int
    "How much more reluctant is the user to walk on streets with car traffic allowed. Default value: 1.0"
    walkOnStreetReluctance: Float @deprecated(reason: "Use \`walkSafetyFactor\` instead")
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
    Factor for how much the walk safety is considered in routing. Value should be between 0 and 1.
    If the value is set to be 0, safety is ignored. Default is 1.0.
    """
    walkSafetyFactor: Float
    "Max walk speed along streets, in meters per second. Default value: 1.33"
    walkSpeed: Float
    "Whether the itinerary must be wheelchair accessible. Default value: false"
    wheelchair: Boolean
  ): Plan @async
  """
  Plan (itinerary) search that follows
  [GraphQL Cursor Connections Specification](https://relay.dev/graphql/connections.htm).
  """
  planConnection(
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
    Takes in cursor from a previous search. Used for backwards pagination. If earliest departure time
    is used in the original query, the new search then returns itineraries that depart before that time.
    If latest arrival time is defined, the new search returns itineraries that arrive after that time.
    This parameter is part of the [GraphQL Cursor Connections Specification](https://relay.dev/graphql/connections.htm)
    and should be used together with the \`last\` parameter.
    """
    before: String
    """
    Datetime of the search. It's possible to either define the earliest departure time
    or the latest arrival time. By default, earliest departure time is set as now.
    """
    dateTime: PlanDateTimeInput
    "The destination where the search ends. Usually coordinates but can also be a stop location."
    destination: PlanLabeledLocationInput!
    """
    How many new itineraries should at maximum be returned in either the first search or with
    forward pagination. This parameter is part of the
    [GraphQL Cursor Connections Specification](https://relay.dev/graphql/connections.htm)
    and should be used together with the \`after\` parameter (although \`after\` shouldn't be defined
    in the first search).
    """
    first: Int
    """
    Settings that control the behavior of itinerary filtering. These are advanced settings and
    should not be set by a user through user preferences.
    """
    itineraryFilter: PlanItineraryFilterInput
    """
    How many new itineraries should at maximum be returned in backwards pagination. It's recommended to
    use the same value as was used for the \`first\` parameter in the original search for optimal
    performance. This parameter is part of the
    [GraphQL Cursor Connections Specification](https://relay.dev/graphql/connections.htm)
    and should be used together with the \`before\` parameter.
    """
    last: Int
    """
    Locale used for translations. Note, there might not necessarily be translations available.
    It's possible and recommended to use the ´accept-language´ header instead of this parameter.
    """
    locale: Locale
    """
    Street and transit modes used during the search. This also includes options to only return
    an itinerary that contains no transit legs or force transit to be used in all itineraries.
    By default, all transit modes are usable and \`WALK\` is used for direct street suggestions,
    access, egress and transfers.
    """
    modes: PlanModesInput
    "The origin where the search starts. Usually coordinates but can also be a stop location."
    origin: PlanLabeledLocationInput!
    "Preferences that affect what itineraries are returned. Preferences are split into categories."
    preferences: PlanPreferencesInput
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
  ): PlanConnection @async @deprecated(reason: "Experimental and can include breaking changes, use plan instead")
  "Get a single rental vehicle based on its ID, i.e. value of field \`vehicleId\`"
  rentalVehicle(id: String!): RentalVehicle
  "Get all rental vehicles"
  rentalVehicles(
    "Return only rental vehicles that have this form factor."
    formFactors: [FormFactor]
    """
    Return rental vehicles with these ids, i.e. value of field \`vehicleId\`.
    **Note:** if an id is invalid (or the rental service is unavailable)
    the returned list will contain \`null\` values.
        
    If this is provided all other filters are ignored.
    """
    ids: [String]
  ): [RentalVehicle]
  "Get a single route based on its ID, i.e. value of field \`gtfsId\` (format is \`FeedId:RouteId\`)"
  route(id: String!): Route
  "Get all routes"
  routes(
    "Only return routes with these feedIds"
    feeds: [String]
    "Only return routes with these ids"
    ids: [String]
    "Query routes by this name"
    name: String
    "Only include routes, which use one of these modes"
    transportModes: [Mode]
  ): [Route]
  "Get the time range for which the API has data available"
  serviceTimeRange: serviceTimeRange
  "Get a single station based on its ID, i.e. value of field \`gtfsId\` (format is \`FeedId:StopId\`)"
  station(id: String!): Stop
  "Get all stations"
  stations(
    "Only return stations that match one of the ids in this list"
    ids: [String]
    "Query stations by name"
    name: String
  ): [Stop]
  "Get a single stop based on its ID, i.e. value of field \`gtfsId\` (ID format is \`FeedId:StopId\`)"
  stop(id: String!): Stop
  "Get all stops"
  stops(
    "Return stops with these ids"
    ids: [String]
    "Query stops by this name"
    name: String
  ): [Stop]
  "Get all stops within the specified bounding box"
  stopsByBbox(
    "List of feed ids from which stops are returned"
    feeds: [String!]
    "Northern bound of the bounding box"
    maxLat: Float!
    "Eastern bound of the bounding box"
    maxLon: Float!
    "Southern bound of the bounding box"
    minLat: Float!
    "Western bound of the bounding box"
    minLon: Float!
  ): [Stop]
  """
  Get all stops within the specified radius from a location. The returned type
  is a Relay connection (see
  https://facebook.github.io/relay/graphql/connections.htm). The stopAtDistance
  type has two values: stop and distance.
  """
  stopsByRadius(
    after: String
    before: String
    "List of feed ids from which stops are returned"
    feeds: [String!]
    first: Int
    last: Int
    "Latitude of the location (WGS 84)"
    lat: Float!
    "Longitude of the location (WGS 84)"
    lon: Float!
    """
    Radius (in meters) to search for from the specified location. Note that this
    is walking distance along streets and paths rather than a geographic distance.
    """
    radius: Int!
  ): stopAtDistanceConnection
  "Return list of available ticket types"
  ticketTypes: [TicketType]
  "Get a single trip based on its ID, i.e. value of field \`gtfsId\` (format is \`FeedId:TripId\`)"
  trip(id: String!): Trip
  "Get all trips"
  trips(
    "Only return trips with these feedIds"
    feeds: [String]
  ): [Trip]
  "Get a single vehicle parking based on its ID"
  vehicleParking(id: String!): VehicleParking
  "Get all vehicle parkings"
  vehicleParkings(
    """
    Return vehicle parkings with these ids.
    **Note:** if an id is invalid (or the vehicle parking service is unavailable)
    the returned list will contain \`null\` values.
    """
    ids: [String]
  ): [VehicleParking]
  "Get a single vehicle rental station based on its ID, i.e. value of field \`stationId\`"
  vehicleRentalStation(id: String!): VehicleRentalStation
  "Get all vehicle rental stations"
  vehicleRentalStations(
    """
    Return vehicle rental stations with these ids, i.e. value of field \`stationId\`.
    **Note:** if an id is invalid (or the rental service is unavailable)
    the returned list will contain \`null\` values.
    """
    ids: [String]
  ): [VehicleRentalStation]
  "Needed until https://github.com/facebook/relay/issues/112 is resolved"
  viewer: QueryType
}


"Real-time estimates for a vehicle at a certain place."
type RealTimeEstimate {
  """
  The delay or "earliness" of the vehicle at a certain place.
    
  If the vehicle is early then this is a negative duration.
  """
  delay: Duration!
  time: OffsetDateTime!
}


"Rental vehicle represents a vehicle that belongs to a rental network."
type RentalVehicle implements Node & PlaceInterface {
  "If true, vehicle is currently available for renting."
  allowPickupNow: Boolean
  "Global object ID provided by Relay. This value can be used to refetch this object using **node** query."
  id: ID!
  "Latitude of the vehicle (WGS 84)"
  lat: Float
  "Longitude of the vehicle (WGS 84)"
  lon: Float
  "Name of the vehicle"
  name: String!
  "ID of the rental network."
  network: String
  "If true, vehicle is not disabled."
  operative: Boolean
  "Platform-specific URLs to begin the vehicle."
  rentalUris: VehicleRentalUris
  "ID of the vehicle in the format of network:id"
  vehicleId: String
  "The type of the rental vehicle (scooter, bicycle, car...)"
  vehicleType: RentalVehicleType
}


type RentalVehicleEntityCounts {
  "The number of entities by type"
  byType: [RentalVehicleTypeCount!]!
  "The total number of entities (e.g. vehicles, spaces)."
  total: Int!
}


type RentalVehicleType {
  "The vehicle's general form factor"
  formFactor: FormFactor
  "The primary propulsion type of the vehicle"
  propulsionType: PropulsionType
}


type RentalVehicleTypeCount {
  "The number of vehicles of this type"
  count: Int!
  "The type of the rental vehicle (scooter, bicycle, car...)"
  vehicleType: RentalVehicleType!
}


"An estimate for a ride on a hailed vehicle, like an Uber car."
type RideHailingEstimate {
  "The estimated time it takes for the vehicle to arrive."
  arrival: Duration!
  "The upper bound of the price estimate of this ride."
  maxPrice: Money!
  "The lower bound of the price estimate of this ride."
  minPrice: Money!
  "The name of the ride, ie. UberX"
  productName: String
  "The provider of the ride hailing service."
  provider: RideHailingProvider!
}


type RideHailingProvider {
  "The ID of the ride hailing provider."
  id: String!
}


"Category of riders a fare product applies to, for example students or pensioners."
type RiderCategory {
  "ID of the category"
  id: String!
  "Human readable name of the category."
  name: String
}


"""
Route represents a public transportation service, usually from point A to point
B and *back*, shown to customers under a single name, e.g. bus 550. Routes
contain patterns (see field \`patterns\`), which describe different variants of
the route, e.g. outbound pattern from point A to point B and inbound pattern
from point B to point A.
"""
type Route implements Node {
  "Agency operating the route"
  agency: Agency
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
  bikesAllowed: BikesAllowed
  """
  The color (in hexadecimal format) the agency operating this route would prefer
  to use on UI elements (e.g. polylines on a map) related to this route. This
  value is not available for most routes.
  """
  color: String
  desc: String
  "ID of the route in format \`FeedId:RouteId\`"
  gtfsId: String!
  "Global object ID provided by Relay. This value can be used to refetch this object using **node** query."
  id: ID!
  "Long name of the route, e.g. Helsinki-Leppävaara"
  longName(
    """
    If translated longName is found from gtfs translation.txt and wanted language is not same as
    feed's language then returns wanted translation. Otherwise uses name from routes.txt.
    """
    language: String
  ): String
  "Transport mode of this route, e.g. \`BUS\`"
  mode: TransitMode
  "List of patterns which operate on this route"
  patterns: [Pattern]
  "Short name of the route, usually a line number, e.g. 550"
  shortName: String
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
  "List of stops on this route"
  stops: [Stop]
  """
  The color (in hexadecimal format) the agency operating this route would prefer
  to use when displaying text related to this route. This value is not available
  for most routes.
  """
  textColor: String
  "List of trips which operate on this route"
  trips: [Trip]
  """
  The raw GTFS route type as a integer. For the list of possible values, see:
  https://developers.google.com/transit/gtfs/reference/#routestxt and
  https://developers.google.com/transit/gtfs/reference/extended-route-types
  """
  type: Int
  url: String
}


"""
Route type entity which covers all agencies if agency is null,
otherwise only relevant for one agency.
"""
type RouteType {
  "A public transport agency"
  agency: Agency
  """
  GTFS Route type.
  For the list of possible values, see:
      https://developers.google.com/transit/gtfs/reference/#routestxt and
      https://developers.google.com/transit/gtfs/reference/extended-route-types
  """
  routeType: Int!
  """
  The routes which have the defined routeType and belong to the agency, if defined.
  Otherwise all routes of the feed that have the defined routeType.
  """
  routes: [Route]
}


"Description of the reason, why the planner did not return any results"
type RoutingError {
  "An enum describing the reason"
  code: RoutingErrorCode!
  "A textual description of why the search failed. The clients are expected to have their own translations based on the code, for user visible error messages."
  description: String!
  "An enum describing the field which should be changed, in order for the search to succeed"
  inputField: InputField
}


"""
Stop can represent either a single public transport stop, where passengers can
board and/or disembark vehicles, or a station, which contains multiple stops.
See field \`locationType\`.
"""
type Stop implements Node & PlaceInterface {
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
  "The cluster which this stop is part of"
  cluster: Cluster
  "Stop code which is visible at the stop"
  code: String
  "Description of the stop, usually a street name"
  desc(
    """
    If translated description is found from gtfs translation.txt and wanted language is not same as
    feed's language then returns wanted translation. Otherwise uses descriptions from stops.txt.
    """
    language: String
  ): String
  direction: String
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
  "ÌD of the stop in format \`FeedId:StopId\`"
  gtfsId: String!
  "Global object ID provided by Relay. This value can be used to refetch this object using **node** query."
  id: ID!
  "Latitude of the stop (WGS 84)"
  lat: Float
  "Identifies whether this stop represents a stop or station."
  locationType: LocationType
  "Longitude of the stop (WGS 84)"
  lon: Float
  "Name of the stop, e.g. Pasilan asema"
  name(
    """
    If translated name is found from gtfs translation.txt and wanted language is not same as
    feed's language then returns wanted translation. Otherwise uses name from stops.txt.
    E.g. Swedish name for Pasilan asema is Böle station.
    """
    language: String
  ): String!
  "The station which this stop is part of (or null if this stop is not part of a station)"
  parentStation: Stop
  "Patterns which pass through this stop"
  patterns: [Pattern]
  "Identifier of the platform, usually a number. This value is only present for stops that are part of a station"
  platformCode: String
  "Routes which pass through this stop"
  routes: [Route!]
  "Returns timetable of the specified pattern at this stop"
  stopTimesForPattern(
    "Id of the pattern"
    id: String!
    numberOfDepartures: Int = 2
    "If false, returns also canceled trips"
    omitCanceled: Boolean = true
    "If true, only those departures which allow boarding are returned"
    omitNonPickups: Boolean = false
    "Return  departures after this time. Format: Unix timestamp in seconds. Default value: current time"
    startTime: Long = 0
    "Return stoptimes within this time range, starting from \`startTime\`. Unit: Seconds"
    timeRange: Int = 86400
  ): [Stoptime]
  "Returns all stops that are children of this station (Only applicable for stations)"
  stops: [Stop]
  "Returns list of stoptimes (arrivals and departures) at this stop, grouped by patterns"
  stoptimesForPatterns(
    numberOfDepartures: Int = 5
    "If false, returns also canceled trips"
    omitCanceled: Boolean = true
    "If true, only those departures which allow boarding are returned"
    omitNonPickups: Boolean = false
    "Return departures after this time. Format: Unix timestamp in seconds. Default value: current time"
    startTime: Long = 0
    "Return stoptimes within this time range, starting from \`startTime\`. Unit: Seconds"
    timeRange: Int = 86400
  ): [StoptimesInPattern]
  "Returns list of stoptimes for the specified date"
  stoptimesForServiceDate(
    "Date in format YYYYMMDD"
    date: String
    "If false, returns also canceled trips"
    omitCanceled: Boolean = false
    "If true, only those departures which allow boarding are returned"
    omitNonPickups: Boolean = false
  ): [StoptimesInPattern]
  "Returns list of stoptimes (arrivals and departures) at this stop"
  stoptimesWithoutPatterns(
    numberOfDepartures: Int = 5
    "If false, returns also canceled trips"
    omitCanceled: Boolean = true
    "If true, only those departures which allow boarding are returned"
    omitNonPickups: Boolean = false
    "Return departures after this time. Format: Unix timestamp in seconds. Default value: current time"
    startTime: Long = 0
    "Return stoptimes within this time range, starting from \`startTime\`. Unit: Seconds"
    timeRange: Int = 86400
  ): [Stoptime]
  timezone: String
  "List of nearby stops which can be used for transfers"
  transfers(
    """
    Maximum distance to the transfer stop. Defaults to unlimited.
    **Note:** only stops that are linked as a transfer stops to this stop are
    returned, i.e. this does not do a query to search for *all* stops within
    radius of \`maxDistance\`.
    """
    maxDistance: Int
  ): [stopAtDistance]
  url(
    """
    If translated url is found from gtfs translation.txt and wanted language is not same as
    feed's language then returns wanted translation. Otherwise uses url from stops.txt.
    """
    language: String
  ): String
  """
  Transport mode (e.g. \`BUS\`) used by routes which pass through this stop or
  \`null\` if mode cannot be determined, e.g. in case no routes pass through the stop.
  Note that also other types of vehicles may use the stop, e.g. tram replacement
  buses might use stops which have \`TRAM\` as their mode.
  """
  vehicleMode: Mode
  """
  The raw GTFS route type used by routes which pass through this stop. For the
  list of possible values, see:
  https://developers.google.com/transit/gtfs/reference/#routestxt and
  https://developers.google.com/transit/gtfs/reference/extended-route-types
  """
  vehicleType: Int
  "Whether wheelchair boarding is possible for at least some of vehicles on this stop"
  wheelchairBoarding: WheelchairBoarding
  "ID of the zone where this stop is located"
  zoneId: String
}


type StopGeometries {
  "Representation of the stop geometries as GeoJSON (https://geojson.org/)"
  geoJson: GeoJson
  """
  Representation of a stop as a series of polylines.
    
  Polygons of flex stops are represented as linear rings (lines where the first and last point are the same).
    
  Proper stops are represented as single point "lines".
  """
  googleEncoded: [Geometry]
}


"Stop that should (but not guaranteed) to exist on a route."
type StopOnRoute {
  "Route which contains the stop."
  route: Route!
  "Stop at the route. It's also possible that the stop is no longer on the route."
  stop: Stop!
}


"Stop that should (but not guaranteed) to exist on a trip."
type StopOnTrip {
  "Stop at the trip. It's also possible that the stop is no longer on the trip."
  stop: Stop!
  "Trip which contains the stop."
  trip: Trip!
}


"Upcoming or current stop and how close the vehicle is to it."
type StopRelationship {
  "How close the vehicle is to \`stop\`"
  status: VehicleStopStatus!
  stop: Stop!
}


"Stoptime represents the time when a specific trip arrives to or departs from a specific stop."
type Stoptime {
  """
  The offset from the scheduled arrival time in seconds. Negative values
  indicate that the trip is running ahead of schedule.
  """
  arrivalDelay: Int
  """
  The offset from the scheduled departure time in seconds. Negative values
  indicate that the trip is running ahead of schedule
  """
  departureDelay: Int
  """
  Whether the vehicle can be disembarked at this stop. This field can also be
  used to indicate if disembarkation is possible only with special arrangements.
  """
  dropoffType: PickupDropoffType
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
  """
  Whether the vehicle can be boarded at this stop. This field can also be used
  to indicate if boarding is possible only with special arrangements.
  """
  pickupType: PickupDropoffType
  "true, if this stoptime has real-time data available"
  realtime: Boolean
  "Real-time prediction of arrival time. Format: seconds since midnight of the departure date"
  realtimeArrival: Int
  "Real-time prediction of departure time. Format: seconds since midnight of the departure date"
  realtimeDeparture: Int
  "State of real-time data"
  realtimeState: RealtimeState
  "Scheduled arrival time. Format: seconds since midnight of the departure date"
  scheduledArrival: Int
  "Scheduled departure time. Format: seconds since midnight of the departure date"
  scheduledDeparture: Int
  "Departure date of the trip. Format: Unix timestamp (local time) in seconds."
  serviceDay: Long
  "The stop where this arrival/departure happens"
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
  "true, if this stop is used as a time equalization stop. false otherwise."
  timepoint: Boolean
  "Trip which this stoptime is for"
  trip: Trip
}


"Stoptimes grouped by pattern"
type StoptimesInPattern {
  pattern: Pattern
  stoptimes: [Stoptime]
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
  "Notice's tag"
  tag: String
  "Notice's description"
  text: String
}


"Describes ticket type"
type TicketType implements Node {
  "ISO 4217 currency code"
  currency: String
  """
  Ticket type ID in format \`FeedId:TicketTypeId\`. Ticket type IDs are usually
  combination of ticket zones where the ticket is valid.
  """
  fareId: String!
  "Global object ID provided by Relay. This value can be used to refetch this object using **node** query."
  id: ID!
  "Price of the ticket in currency that is specified in \`currency\` field"
  price: Float
  """
  List of zones where this ticket is valid.
  Corresponds to field \`zoneId\` in **Stop** type.
  """
  zones: [String!]
}


"Text with language"
type TranslatedString {
  "Two-letter language code (ISO 639-1)"
  language: String
  text: String
}


"Trip is a specific occurance of a pattern, usually identified by route, direction on the route and exact departure time."
type Trip implements Node {
  "List of dates when this trip is in service. Format: YYYYMMDD"
  activeDates: [String]
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
  "Arrival time to the final stop"
  arrivalStoptime(
    """
    Date for which the arrival time is returned. Format: YYYYMMDD. If this
    argument is not used, field \`serviceDay\` in the stoptime will have a value of 0.
    """
    serviceDate: String
  ): Stoptime
  "Whether bikes are allowed on board the vehicle running this trip"
  bikesAllowed: BikesAllowed
  blockId: String
  "Departure time from the first stop"
  departureStoptime(
    """
    Date for which the departure time is returned. Format: YYYYMMDD. If this
    argument is not used, field \`serviceDay\` in the stoptime will have a value of 0.
    """
    serviceDate: String
  ): Stoptime
  """
  Direction code of the trip, i.e. is this the outbound or inbound trip of a
  pattern. Possible values: 0, 1 or \`null\` if the direction is irrelevant, i.e.
  the pattern has trips only in one direction.
  """
  directionId: String
  "List of coordinates of this trip's route"
  geometry: [[Float]]
  "ID of the trip in format \`FeedId:TripId\`"
  gtfsId: String!
  "Global object ID provided by Relay. This value can be used to refetch this object using **node** query."
  id: ID!
  """
  The latest real-time occupancy information for the latest occurance of this
  trip.
  """
  occupancy: TripOccupancy
  "The pattern the trip is running on"
  pattern: Pattern
  "The route the trip is running on"
  route: Route!
  "Short name of the route this trip is running. See field \`shortName\` of Route."
  routeShortName: String
  "Hash code of the trip. This value is stable and not dependent on the trip id."
  semanticHash: String!
  serviceId: String
  shapeId: String
  "List of stops this trip passes through"
  stops: [Stop!]!
  "List of times when this trip arrives to or departs from a stop"
  stoptimes: [Stoptime]
  stoptimesForDate(
    "Date for which stoptimes are returned. Format: YYYYMMDD"
    serviceDate: String
  ): [Stoptime]
  "Coordinates of the route of this trip in Google polyline encoded format"
  tripGeometry: Geometry
  "Headsign of the vehicle when running on this trip"
  tripHeadsign(
    """
    If a translated headsign is found from GTFS translation.txt and wanted language is not same as
    feed's language then returns wanted translation. Otherwise uses name from trip_headsign.txt.
    """
    language: String
  ): String
  tripShortName: String
  "Whether the vehicle running this trip can be boarded by a wheelchair"
  wheelchairAccessible: WheelchairBoarding
}


"""
Occupancy of a vehicle on a trip. This should include the most recent occupancy information
available for a trip. Historic data might not be available.
"""
type TripOccupancy {
  "Occupancy information mapped to a limited set of descriptive states."
  occupancyStatus: OccupancyStatus
}


"This is used for alert entities that we don't explicitly handle or they are missing."
type Unknown {
  "Entity's description"
  description: String
}


"Vehicle parking represents a location where bicycles or cars can be parked."
type VehicleParking implements Node & PlaceInterface {
  """
  Does this vehicle parking have spaces (capacity) for either wheelchair accessible (disabled)
  or normal cars.
  """
  anyCarPlaces: Boolean
  "The currently available spaces at this vehicle parking."
  availability: VehicleParkingSpaces
  "Does this vehicle parking have spaces (capacity) for bicycles."
  bicyclePlaces: Boolean
  "The capacity (maximum available spaces) of this vehicle parking."
  capacity: VehicleParkingSpaces
  """
  Does this vehicle parking have spaces (capacity) for cars excluding wheelchair accessible spaces.
  Use anyCarPlaces to check if any type of car may use this vehicle parking.
  """
  carPlaces: Boolean
  "URL which contains details of this vehicle parking."
  detailsUrl: String
  "Global object ID provided by Relay. This value can be used to refetch this object using **node** query."
  id: ID!
  "URL of an image which may be displayed to the user showing the vehicle parking."
  imageUrl: String
  "Latitude of the bike park (WGS 84)"
  lat: Float
  "Longitude of the bike park (WGS 84)"
  lon: Float
  "Name of the park"
  name(
    "Returns name with the specified language, if found, otherwise returns with some default language."
    language: String
  ): String!
  "A short translatable note containing details of this vehicle parking."
  note(
    "Returns note with the specified language, if found, otherwise returns with some default language."
    language: String
  ): String
  "Opening hours of the parking facility"
  openingHours: OpeningHours
  "If true, value of \`spacesAvailable\` is updated from a real-time source."
  realtime: Boolean
  """
  The state of this vehicle parking.
  Only ones in an OPERATIONAL state may be used for Park and Ride.
  """
  state: VehicleParkingState
  """
  Source specific tags of the vehicle parking, which describe the available features. For example
  park_and_ride, bike_lockers, or static_osm_data.
  """
  tags: [String]
  "ID of the park"
  vehicleParkingId: String
  "Does this vehicle parking have wheelchair accessible (disabled) car spaces (capacity)."
  wheelchairAccessibleCarPlaces: Boolean
}


"The number of spaces by type. null if unknown."
type VehicleParkingSpaces {
  "The number of bicycle spaces."
  bicycleSpaces: Int
  "The number of car spaces."
  carSpaces: Int
  "The number of wheelchair accessible (disabled) car spaces."
  wheelchairAccessibleCarSpaces: Int
}


"Real-time vehicle position"
type VehiclePosition {
  """
  Bearing, in degrees, clockwise from North, i.e., 0 is North and 90 is East. This can be the
  compass bearing, or the direction towards the next stop or intermediate location.
  """
  heading: Float
  "Human-readable label of the vehicle, eg. a publicly visible number or a license plate"
  label: String
  "When the position of the vehicle was recorded in seconds since the UNIX epoch."
  lastUpdated: Long
  "Latitude of the vehicle"
  lat: Float
  "Longitude of the vehicle"
  lon: Float
  "Speed of the vehicle in meters/second"
  speed: Float
  "The current stop where the vehicle will be or is currently arriving."
  stopRelationship: StopRelationship
  "Which trip this vehicles runs on."
  trip: Trip!
  "Feed-scoped ID that uniquely identifies the vehicle in the format FeedId:VehicleId"
  vehicleId: String
}


"Vehicle rental station represents a location where users can rent bicycles etc. for a fee."
type VehicleRentalStation implements Node & PlaceInterface {
  """
  If true, vehicles can be returned to this station if the station has spaces available
  or allows overloading.
  """
  allowDropoff: Boolean
  "If true, vehicles can be currently returned to this station."
  allowDropoffNow: Boolean
  "If true, vehicles can be returned even if spacesAvailable is zero or vehicles > capacity."
  allowOverloading: Boolean
  "If true, vehicles can be picked up from this station if the station has vehicles available."
  allowPickup: Boolean
  "If true, vehicles can be currently picked up from this station."
  allowPickupNow: Boolean
  "Number of free spaces currently available on the rental station, grouped by vehicle type."
  availableSpaces: RentalVehicleEntityCounts
  "Number of vehicles currently available on the rental station, grouped by vehicle type."
  availableVehicles: RentalVehicleEntityCounts
  "Nominal capacity (number of racks) of the rental station."
  capacity: Int
  "Global object ID provided by Relay. This value can be used to refetch this object using **node** query."
  id: ID!
  "Latitude of the vehicle rental station (WGS 84)"
  lat: Float
  "Longitude of the vehicle rental station (WGS 84)"
  lon: Float
  "Name of the vehicle rental station"
  name: String!
  "ID of the rental network."
  network: String
  "If true, station is on and in service."
  operative: Boolean
  """
  If true, values of \`vehiclesAvailable\` and \`spacesAvailable\` are updated from a
  real-time source. If false, values of \`vehiclesAvailable\` and \`spacesAvailable\`
  are always the total capacity divided by two.
  """
  realtime: Boolean
  "Platform-specific URLs to begin renting a vehicle from this station."
  rentalUris: VehicleRentalUris
  """
  Number of free spaces currently available on the rental station.
  Note that this value being 0 does not necessarily indicate that vehicles cannot be returned
  to this station, as for example it might be possible to leave the vehicle in the vicinity of
  the rental station, even if the vehicle racks don't have any spaces available.
  See field \`allowDropoffNow\` to know if is currently possible to return a vehicle.
  """
  spacesAvailable: Int @deprecated(reason: "Use \`availableSpaces\` instead, which also contains the space vehicle types")
  "ID of the vehicle in the format of network:id"
  stationId: String
  """
  Number of vehicles currently available on the rental station.
  See field \`allowPickupNow\` to know if is currently possible to pick up a vehicle.
  """
  vehiclesAvailable: Int @deprecated(reason: "Use \`availableVehicles\` instead, which also contains vehicle types")
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


type debugOutput {
  pathCalculationTime: Long
  precalculationTime: Long
  renderingTime: Long
  timedOut: Boolean
  totalTime: Long
}


type elevationProfileComponent {
  "The distance from the start of the step, in meters."
  distance: Float
  "The elevation at this distance, in meters."
  elevation: Float
}


"""
This type is only here for backwards-compatibility and this API will never return it anymore.
Please use the leg's \`fareProducts\` instead.
"""
type fare {
  """
  Fare price in cents. **Note:** this value is dependent on the currency used,
  as one cent is not necessarily ¹/₁₀₀ of the basic monerary unit.
  """
  cents: Int @deprecated(reason: "No longer supported")
  "Components which this fare is composed of"
  components: [fareComponent] @deprecated(reason: "No longer supported")
  "ISO 4217 currency code"
  currency: String @deprecated(reason: "No longer supported")
  type: String @deprecated(reason: "No longer supported")
}


"""
This type is only here for backwards-compatibility and this API will never return it anymore.
Please use the leg's \`fareProducts\` instead.
"""
type fareComponent {
  """
  Fare price in cents. **Note:** this value is dependent on the currency used,
  as one cent is not necessarily ¹/₁₀₀ of the basic monerary unit.
  """
  cents: Int @deprecated(reason: "No longer supported")
  "ISO 4217 currency code"
  currency: String @deprecated(reason: "No longer supported")
  "ID of the ticket type. Corresponds to \`fareId\` in **TicketType**."
  fareId: String @deprecated(reason: "No longer supported")
  "List of routes which use this fare component"
  routes: [Route] @deprecated(reason: "No longer supported")
}


type placeAtDistance implements Node {
  "Walking distance to the place along streets and paths"
  distance: Int
  "Global object ID provided by Relay. This value can be used to refetch this object using **node** query."
  id: ID!
  place: PlaceInterface
}


"A connection to a list of items."
type placeAtDistanceConnection {
  edges: [placeAtDistanceEdge]
  pageInfo: PageInfo!
}


"An edge in a connection."
type placeAtDistanceEdge {
  cursor: String!
  "The item at the end of the edge"
  node: placeAtDistance
}


"Time range for which the API has data available"
type serviceTimeRange {
  "Time until which the API has data available. Format: Unix timestamp in seconds"
  end: Long
  "Time from which the API has data available. Format: Unix timestamp in seconds"
  start: Long
}


type step {
  "The cardinal (compass) direction (e.g. north, northeast) taken when engaging this step."
  absoluteDirection: AbsoluteDirection
  "A list of alerts (e.g. construction, detours) applicable to the step."
  alerts: [Alert]
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
  "The distance in meters that this step takes."
  distance: Float
  "The elevation profile as a list of { distance, elevation } values."
  elevationProfile: [elevationProfileComponent]
  "When exiting a highway or traffic circle, the exit name/number."
  exit: String
  "The latitude of the start of the step."
  lat: Float
  "The longitude of the start of the step."
  lon: Float
  "The relative direction (e.g. left or right turn) to take when engaging this step."
  relativeDirection: RelativeDirection
  "Indicates whether or not a street changes direction at an intersection."
  stayOn: Boolean
  "The name of the street, road, or path taken for this step."
  streetName: String
  "Is this step walking with a bike?"
  walkingBike: Boolean
}


type stopAtDistance implements Node {
  "Walking distance to the stop along streets and paths"
  distance: Int
  "Global object ID provided by Relay. This value can be used to refetch this object using **node** query."
  id: ID!
  stop: Stop
}


"A connection to a list of items."
type stopAtDistanceConnection {
  edges: [stopAtDistanceEdge]
  pageInfo: PageInfo!
}


"An edge in a connection."
type stopAtDistanceEdge {
  cursor: String!
  "The item at the end of the edge"
  node: stopAtDistance
}


"The cardinal (compass) direction taken when engaging a walking/driving step."
enum AbsoluteDirection {
  EAST
  NORTH
  NORTHEAST
  NORTHWEST
  SOUTH
  SOUTHEAST
  SOUTHWEST
  WEST
}


"Entities, which are relevant for an agency and can contain alerts"
enum AgencyAlertType {
  "Alerts affecting the agency."
  AGENCY
  "Alerts affecting agency's routes"
  ROUTES
  """
  Alerts affecting the different route types of the agency.
  Alerts that affect route types on all agencies can be fetched through Feed.
  """
  ROUTE_TYPES
}


"Cause of a alert"
enum AlertCauseType {
  "ACCIDENT"
  ACCIDENT
  "CONSTRUCTION"
  CONSTRUCTION
  "DEMONSTRATION"
  DEMONSTRATION
  "HOLIDAY"
  HOLIDAY
  "MAINTENANCE"
  MAINTENANCE
  "MEDICAL_EMERGENCY"
  MEDICAL_EMERGENCY
  "OTHER_CAUSE"
  OTHER_CAUSE
  "POLICE_ACTIVITY"
  POLICE_ACTIVITY
  "STRIKE"
  STRIKE
  "TECHNICAL_PROBLEM"
  TECHNICAL_PROBLEM
  "UNKNOWN_CAUSE"
  UNKNOWN_CAUSE
  "WEATHER"
  WEATHER
}


"Effect of a alert"
enum AlertEffectType {
  "ACCESSIBILITY_ISSUE"
  ACCESSIBILITY_ISSUE
  "ADDITIONAL_SERVICE"
  ADDITIONAL_SERVICE
  "DETOUR"
  DETOUR
  "MODIFIED_SERVICE"
  MODIFIED_SERVICE
  "NO_EFFECT"
  NO_EFFECT
  "NO_SERVICE"
  NO_SERVICE
  "OTHER_EFFECT"
  OTHER_EFFECT
  "REDUCED_SERVICE"
  REDUCED_SERVICE
  "SIGNIFICANT_DELAYS"
  SIGNIFICANT_DELAYS
  "STOP_MOVED"
  STOP_MOVED
  "UNKNOWN_EFFECT"
  UNKNOWN_EFFECT
}


"Severity level of a alert"
enum AlertSeverityLevelType {
  """
  Info alerts are used for informational messages that should not have a
  significant effect on user's journey, for example: A single entrance to a
  metro station is temporarily closed.
  """
  INFO
  """
  Severe alerts are used when a significant part of public transport services is
  affected, for example: All train services are cancelled due to technical problems.
  """
  SEVERE
  "Severity of alert is unknown"
  UNKNOWN_SEVERITY
  """
  Warning alerts are used when a single stop or route has a disruption that can
  affect user's journey, for example: All trams on a specific route are running
  with irregular schedules.
  """
  WARNING
}


enum BikesAllowed {
  "The vehicle being used on this particular trip can accommodate at least one bicycle."
  ALLOWED
  "No bicycles are allowed on this trip."
  NOT_ALLOWED
  "There is no bike information for the trip."
  NO_INFORMATION
}


"""
Predefined optimization alternatives for bicycling routing. For more customization,
one can use the triangle factors.
"""
enum CyclingOptimizationType {
  "Emphasize flatness over safety or duration of the route. This option was previously called \`FLAT\`."
  FLAT_STREETS
  """
  Completely ignore the elevation differences and prefer the streets, that are evaluated
  to be the safest, even more than with the \`SAFE_STREETS\` option.
  Safety can also include other concerns such as convenience and general cyclist preferences
  by taking into account road surface etc. This option was previously called \`GREENWAYS\`.
  """
  SAFEST_STREETS
  """
  Emphasize cycling safety over flatness or duration of the route. Safety can also include other
  concerns such as convenience and general cyclist preferences by taking into account
  road surface etc. This option was previously called \`SAFE\`.
  """
  SAFE_STREETS
  """
  Search for routes with the shortest duration while ignoring the cycling safety
  of the streets (the routes should still follow local regulations). Routes can include
  steep streets, if they are the fastest alternatives. This option was previously called
  \`QUICK\`.
  """
  SHORTEST_DURATION
}


"Entities, which are relevant for a feed and can contain alerts"
enum FeedAlertType {
  "Alerts affecting the feed's agencies"
  AGENCIES
  """
  Alerts affecting the route types across the feed.
  There might be alerts that only affect route types within an agency of the feed,
  and those can be fetched through the Agency.
  """
  ROUTE_TYPES
}


enum FilterPlaceType {
  "Old value for VEHICLE_RENT"
  BICYCLE_RENT @deprecated(reason: "Use VEHICLE_RENT instead as it's clearer that it also returns rental scooters, cars...")
  "Parking lots (not rental stations) that contain spaces for bicycles"
  BIKE_PARK
  "Parking lots that contain spaces for cars"
  CAR_PARK
  "Departure rows"
  DEPARTURE_ROW
  """
  Stations.
  NOTE: if this is selected at the same time as \`STOP\`, stops that have a parent station will not be returned but their parent stations will be returned instead.
  """
  STATION
  """
  Stops.
  NOTE: if this is selected at the same time as \`STATION\`, stops that have a parent station will not be returned but their parent stations will be returned instead.
  """
  STOP
  "Vehicle (bicycles, scooters, cars ...) rental stations and vehicles"
  VEHICLE_RENT
}


enum FormFactor {
  "A bicycle"
  BICYCLE
  "An automobile"
  CAR
  "A bicycle with additional space for cargo"
  CARGO_BICYCLE
  "A moped that the rider sits on. For a disambiguation see https://github.com/NABSA/gbfs/pull/370#issuecomment-982631989"
  MOPED
  "A vehicle that doesn't fit into any other category"
  OTHER
  "A kick scooter that the rider either sits or stands on. Will be deprecated in GBFS v3.0."
  SCOOTER
  "A kick scooter with a seat"
  SCOOTER_SEATED
  "A kick scooter that the rider stands on"
  SCOOTER_STANDING
}


enum InputField {
  DATE_TIME
  FROM
  TO
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


"Identifies whether this stop represents a stop or station."
enum LocationType {
  ENTRANCE
  "A physical structure or area that contains one or more stop."
  STATION
  "A location where passengers board or disembark from a transit vehicle."
  STOP
}


enum Mode {
  "AIRPLANE"
  AIRPLANE
  "BICYCLE"
  BICYCLE
  "BUS"
  BUS
  "CABLE_CAR"
  CABLE_CAR
  "CAR"
  CAR
  "Private car trips shared with others."
  CARPOOL
  "COACH"
  COACH
  "FERRY"
  FERRY
  "Enables flexible transit for access and egress legs"
  FLEX
  "Enables flexible transit for access and egress legs"
  FLEXIBLE @deprecated(reason: "Use FLEX instead")
  "FUNICULAR"
  FUNICULAR
  "GONDOLA"
  GONDOLA
  "Only used internally. No use for API users."
  LEG_SWITCH @deprecated(reason: "No longer supported")
  "Railway in which the track consists of a single rail or a beam."
  MONORAIL
  "RAIL"
  RAIL
  "SCOOTER"
  SCOOTER
  "SUBWAY"
  SUBWAY
  "A taxi, possibly operated by a public transport agency."
  TAXI
  "TRAM"
  TRAM
  "A special transport mode, which includes all public transport."
  TRANSIT
  "Electric buses that draw power from overhead wires using poles."
  TROLLEYBUS
  "WALK"
  WALK
}


"Occupancy status of a vehicle."
enum OccupancyStatus {
  """
  The vehicle or carriage can currently accommodate only standing passengers and has limited
  space for them. There isn't a big difference between this and FULL so it's possible to handle
  them as the same value, if one wants to limit the number of different values.
  SIRI nordic profile: merge into \`STANDING_ROOM_ONLY\`.
  """
  CRUSHED_STANDING_ROOM_ONLY
  """
  The vehicle is considered empty by most measures, and has few or no passengers onboard, but is
  still accepting passengers. There isn't a big difference between this and MANY_SEATS_AVAILABLE
  so it's possible to handle them as the same value, if one wants to limit the number of different
  values.
  SIRI nordic profile: merge these into \`MANY_SEATS_AVAILABLE\`.
  """
  EMPTY
  """
  The vehicle or carriage has a small number of seats available. The amount of free seats out of
  the total seats available to be considered small enough to fall into this category is
  determined at the discretion of the producer.
  SIRI nordic profile: less than ~50% of seats available.
  """
  FEW_SEATS_AVAILABLE
  """
  The vehicle is considered full by most measures, but may still be allowing passengers to
  board.
  """
  FULL
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
  The vehicle or carriage is not accepting passengers.
  SIRI nordic profile: if vehicle/carriage is not in use / unavailable, or passengers are only allowed
  to alight due to e.g. crowding.
  """
  NOT_ACCEPTING_PASSENGERS
  "Default. There is no occupancy-data on this departure."
  NO_DATA_AVAILABLE
  """
  The vehicle or carriage can currently accommodate only standing passengers.
  SIRI nordic profile: less than ~10% of seats available.
  """
  STANDING_ROOM_ONLY
}


"Optimization type for bicycling legs"
enum OptimizeType {
  "Prefer flat terrain"
  FLAT
  "GREENWAYS"
  GREENWAYS
  "Prefer faster routes"
  QUICK
  "Prefer safer routes, i.e. avoid crossing streets and use bike paths when possible"
  SAFE
  "**TRIANGLE** optimization type can be used to set relative preferences of optimization factors. See argument \`triangle\`."
  TRIANGLE
}


"Entities, which are relevant for a pattern and can contain alerts"
enum PatternAlertType {
  "Alerts affecting the pattern's route's agency"
  AGENCY
  "Alerts affecting the pattern"
  PATTERN
  "Alerts affecting the route that the pattern runs on"
  ROUTE
  "Alerts affecting the route type of the route that the pattern runs on"
  ROUTE_TYPE
  "Alerts affecting the stops which are on this pattern"
  STOPS_ON_PATTERN
  "Alerts affecting the stops of the trips which run on this pattern"
  STOPS_ON_TRIPS
  "Alerts affecting the trips which run on this pattern"
  TRIPS
}


enum PickupDropoffType {
  "Must phone agency to arrange pickup / drop off."
  CALL_AGENCY
  "Must coordinate with driver to arrange pickup / drop off."
  COORDINATE_WITH_DRIVER
  "No pickup / drop off available."
  NONE
  "Regularly scheduled pickup / drop off."
  SCHEDULED
}


"Street modes that can be used for access to the transit network from origin."
enum PlanAccessMode {
  """
  Cycling to a stop and boarding a vehicle with the bicycle.
  Note, this can include walking when it's needed to walk the bicycle.
  Access can use cycling only if the mode used for transfers
  and egress is also \`BICYCLE\`.
  """
  BICYCLE
  """
  Starting the itinerary with a bicycle and parking the bicycle to
  a parking location. Note, this can include walking after parking
  the bicycle or when it's needed to walk the bicycle.
  """
  BICYCLE_PARKING
  """
  Bicycle rental can use either station based systems or "floating"
  vehicles which are not linked to a rental station. Note, if there are no
  rental options available, access will include only walking. Also, this
  can include walking before picking up or after dropping off the
  bicycle or when it's needed to walk the bicycle.
  """
  BICYCLE_RENTAL
  """
  Getting dropped off by a car to a location that is accessible with a car.
  Note, this can include walking after the drop-off.
  """
  CAR_DROP_OFF
  """
  Starting the itinerary with a car and parking the car to a parking location.
  Note, this can include walking after parking the car.
  """
  CAR_PARKING
  """
  Car rental can use either station based systems or "floating"
  vehicles which are not linked to a rental station. Note, if there are no
  rental options available, access will include only walking. Also, this
  can include walking before picking up or after dropping off the
  car.
  """
  CAR_RENTAL
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
  "Walking to a stop."
  WALK
}


"Street mode that is used when searching for itineraries that don't use any transit."
enum PlanDirectMode {
  """
  Cycling from the origin to the destination. Note, this can include walking
  when it's needed to walk the bicycle.
  """
  BICYCLE
  """
  Starting the itinerary with a bicycle and parking the bicycle to
  a parking location. Note, this can include walking after parking
  the bicycle or when it's needed to walk the bicycle.
  """
  BICYCLE_PARKING
  """
  Bicycle rental can use either station based systems or "floating"
  vehicles which are not linked to a rental station. Note, if there are no
  rental options available, itinerary will include only walking.
  Also, it can include walking before picking up or after dropping off the
  bicycle or when it's needed to walk the bicycle.
  """
  BICYCLE_RENTAL
  "Driving a car from the origin to the destination."
  CAR
  """
  Starting the itinerary with a car and parking the car to a parking location.
  Note, this can include walking after parking the car.
  """
  CAR_PARKING
  """
  Car rental can use either station based systems or "floating"
  vehicles which are not linked to a rental station. Note, if there are no
  rental options available, itinerary will include only walking. Also, this
  can include walking before picking up or after dropping off the
  car.
  """
  CAR_RENTAL
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


"Street modes that can be used for egress from the transit network to destination."
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
  Getting picked up by a car from a location that is accessible with a car.
  Note, this can include walking before the pickup.
  """
  CAR_PICKUP
  """
  Car rental can use either station based systems or "floating"
  vehicles which are not linked to a rental station. Note, if there are no
  rental options available, egress will include only walking. Also, this
  can include walking before picking up or after dropping off the
  car.
  """
  CAR_RENTAL
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
  "Walking from a stop to the destination."
  WALK
}


enum PlanTransferMode {
  """
  Cycling between transit vehicles (typically between stops). Note, this can
  include walking when it's needed to walk the bicycle. Transfers can only use
  cycling if the mode used for access and egress is also \`BICYCLE\`.
  """
  BICYCLE
  "Walking between transit vehicles (typically between stops)."
  WALK
}


enum PropulsionType {
  "Powered by gasoline combustion engine"
  COMBUSTION
  "Powered by diesel combustion engine"
  COMBUSTION_DIESEL
  "Powered by battery-powered electric motor with throttle mode"
  ELECTRIC
  "Provides electric motor assist only in combination with human propulsion - no throttle mode"
  ELECTRIC_ASSIST
  "Pedal or foot propulsion"
  HUMAN
  "Powered by combined combustion engine and battery-powered motor"
  HYBRID
  "Powered by hydrogen fuel cell powered electric motor"
  HYDROGEN_FUEL_CELL
  "Powered by combined combustion engine and battery-powered motor with plug-in charging"
  PLUG_IN_HYBRID
}


"""
Additional qualifier for a transport mode.
Note that qualifiers can only be used with certain transport modes.
"""
enum Qualifier {
  "The mode is used for the access part of the search."
  ACCESS
  "The mode is used for the direct street search."
  DIRECT
  "The user can be dropped off by someone else riding a vehicle"
  DROPOFF
  "The mode is used for the egress part of the search."
  EGRESS
  "Hailing a ride, for example via an app like Uber."
  HAIL
  """
  ~~HAVE~~
  **Currently not used**
  """
  HAVE @deprecated(reason: "Currently not used")
  """
  ~~KEEP~~
  **Currently not used**
  """
  KEEP @deprecated(reason: "Currently not used")
  """
  The vehicle used must be left to a parking area before continuing the journey.
  This qualifier is usable with transport modes \`CAR\` and \`BICYCLE\`.
  Note that the vehicle is only parked if the journey is continued with public
  transportation (e.g. if only \`CAR\` and \`WALK\` transport modes are allowed to
  be used, the car will not be parked as it is used for the whole journey).
  """
  PARK
  "The user can be picked up by someone else riding a vehicle"
  PICKUP
  "The vehicle used for transport can be rented"
  RENT
}


enum RealtimeState {
  "The trip has been added using a real-time update, i.e. the trip was not present in the GTFS feed."
  ADDED
  "The trip has been canceled by a real-time update."
  CANCELED
  """
  The trip information has been updated and resulted in a different trip pattern
  compared to the trip pattern of the scheduled trip.
  """
  MODIFIED
  "The trip information comes from the GTFS feed, i.e. no real-time update has been applied."
  SCHEDULED
  "The trip information has been updated, but the trip pattern stayed the same as the trip pattern of the scheduled trip."
  UPDATED
}


"Actions to take relative to the current position when engaging a walking/driving step."
enum RelativeDirection {
  CIRCLE_CLOCKWISE
  CIRCLE_COUNTERCLOCKWISE
  CONTINUE
  DEPART
  ELEVATOR
  ENTER_STATION
  EXIT_STATION
  FOLLOW_SIGNS
  HARD_LEFT
  HARD_RIGHT
  LEFT
  RIGHT
  SLIGHTLY_LEFT
  SLIGHTLY_RIGHT
  UTURN_LEFT
  UTURN_RIGHT
}


"Entities that are relevant for routes that can contain alerts"
enum RouteAlertType {
  "Alerts affecting the route's agency."
  AGENCY
  "Alerts affecting route's patterns."
  PATTERNS
  "Alerts directly affecting the route."
  ROUTE
  "Alerts affecting the route type of the route."
  ROUTE_TYPE
  "Alerts affecting the stops that are on the route."
  STOPS_ON_ROUTE
  "Alerts affecting the stops on some trips of the route."
  STOPS_ON_TRIPS
  "Alerts affecting the route's trips."
  TRIPS
}


enum RoutingErrorCode {
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
  The coordinates are outside the geographic bounds of the transit and street data currently loaded
  into the system and therefore cannot return any results.
  """
  OUTSIDE_BOUNDS
  """
  The date specified is outside the range of data currently loaded into the system as it is too
  far into the future or the past.
    
  The specific date range of the system is configurable by an administrator and also depends on
  the input data provided.
  """
  OUTSIDE_SERVICE_PERIOD
  """
  Transit connections were requested and found but because it is easier to just walk all the way
  to the destination they were removed.
    
  If you want to still show the transit results, you need to make walking less desirable by
  increasing the walk reluctance.
  """
  WALKING_BETTER_THAN_TRANSIT
}


"""
Predefined optimization alternatives for scooter routing. For more customization,
one can use the triangle factors.
"""
enum ScooterOptimizationType {
  "Emphasize flatness over safety or duration of the route. This option was previously called \`FLAT\`."
  FLAT_STREETS
  """
  Completely ignore the elevation differences and prefer the streets, that are evaluated
  to be safest for scooters, even more than with the \`SAFE_STREETS\` option.
  Safety can also include other concerns such as convenience and general preferences by taking
  into account road surface etc.  Note, currently the same criteria is used both for cycling and
  scooter travel to determine how safe streets are for cycling or scooter.
  This option was previously called \`GREENWAYS\`.
  """
  SAFEST_STREETS
  """
  Emphasize scooter safety over flatness or duration of the route. Safety can also include other
  concerns such as convenience and general preferences by taking into account road surface etc.
  Note, currently the same criteria is used both for cycling and scooter travel to determine how
  safe streets are for cycling or scooter. This option was previously called \`SAFE\`.
  """
  SAFE_STREETS
  """
  Search for routes with the shortest duration while ignoring the scooter safety
  of the streets. The routes should still follow local regulations, but currently scooters
  are only allowed on the same streets as bicycles which might not be accurate for each country
  or with different types of scooters. Routes can include steep streets, if they are
  the fastest alternatives. This option was previously called \`QUICK\`.
  """
  SHORTEST_DURATION
}


"Entities, which are relevant for a stop and can contain alerts"
enum StopAlertType {
  "Alerts affecting the agencies of the routes going through the stop"
  AGENCIES_OF_ROUTES
  "Alerts affecting the stop's patterns"
  PATTERNS
  "Alerts affecting the routes that go through the stop"
  ROUTES
  "Alerts affecting the stop"
  STOP
  "Alerts affecting the stop on specific routes"
  STOP_ON_ROUTES
  "Alerts affecting the stop on specific trips"
  STOP_ON_TRIPS
  "Alerts affecting the trips that go through this stop"
  TRIPS
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
  "Private car trips shared with others."
  CARPOOL
  COACH
  FERRY
  FUNICULAR
  GONDOLA
  "Railway in which the track consists of a single rail or a beam."
  MONORAIL
  "This includes long or short distance trains."
  RAIL
  "Subway or metro, depending on the local terminology."
  SUBWAY
  "A taxi, possibly operated by a public transport agency."
  TAXI
  TRAM
  "Electric buses that draw power from overhead wires using poles."
  TROLLEYBUS
}


"Entities, which are relevant for a trip and can contain alerts"
enum TripAlertType {
  "Alerts affecting the trip's agency"
  AGENCY
  "Alerts affecting the trip's pattern"
  PATTERN
  "Alerts affecting the trip's route"
  ROUTE
  "Alerts affecting the route type of the trip's route"
  ROUTE_TYPE
  """
  Alerts affecting the stops visited on the trip.
  Some of the alerts can only affect the trip or its route on the stop.
  """
  STOPS_ON_TRIP
  "Alerts affecting the trip"
  TRIP
}


"""
The state of the vehicle parking. TEMPORARILY_CLOSED and CLOSED are distinct states so that they
may be represented differently to the user.
"""
enum VehicleParkingState {
  "Can't be used for park and ride."
  CLOSED
  "May be used for park and ride."
  OPERATIONAL
  "Can't be used for park and ride."
  TEMPORARILY_CLOSED
}


"How close the vehicle is to the stop."
enum VehicleStopStatus {
  "The vehicle is just about to arrive at the stop (on a stop display, the vehicle symbol typically flashes)."
  INCOMING_AT
  "The vehicle has departed the previous stop and is in transit."
  IN_TRANSIT_TO
  "The vehicle is standing at the stop."
  STOPPED_AT
}


enum VertexType {
  "BIKEPARK"
  BIKEPARK
  "BIKESHARE"
  BIKESHARE
  "NORMAL"
  NORMAL
  "PARKANDRIDE"
  PARKANDRIDE
  "TRANSIT"
  TRANSIT
}


enum WheelchairBoarding {
  "Wheelchair boarding is not possible at this stop."
  NOT_POSSIBLE
  "There is no accessibility information for the stop."
  NO_INFORMATION
  "At least some vehicles at this stop can be boarded by a rider in a wheelchair."
  POSSIBLE
}


"Either a latitude or a longitude as a WGS84 format floating point number."
scalar CoordinateValue @specifiedBy(url: "https://earth-info.nga.mil/?dir=wgs84&action=wgs84")


"""
A static cost that is applied to a certain event or entity. Cost is a positive integer,
for example \`450\`. One cost unit should roughly match a one second travel on transit.
"""
scalar Cost


"Duration in a lenient ISO-8601 duration format. Example P2DT2H12M40S, 2d2h12m40s or 1h"
scalar Duration @specifiedBy(url: "https://docs.oracle.com/en/java/javase/21/docs/api/java.base/java/time/Duration.html#parse(java.lang.CharSequence)")


"Geographic data structures in JSON format. See: https://geojson.org/"
scalar GeoJson @specifiedBy(url: "https://www.rfcreader.com/#rfc7946")


scalar Grams


"A IETF BCP 47 language tag"
scalar Locale @specifiedBy(url: "https://www.rfcreader.com/#rfc5646")


"A 64-bit signed integer"
scalar Long


"""
An ISO-8601-formatted datetime with offset, i.e. \`2023-06-13T14:30+03:00\` for 2:30pm on June 13th 2023 at Helsinki's offset from UTC at that time.

ISO-8601 allows many different formats but OTP will only return the profile specified in RFC3339.
"""
scalar OffsetDateTime @specifiedBy(url: "https://www.rfcreader.com/#rfc3339")


"List of coordinates in an encoded polyline format (see https://developers.google.com/maps/documentation/utilities/polylinealgorithm). The value appears in JSON as a string."
scalar Polyline @specifiedBy(url: "https://developers.google.com/maps/documentation/utilities/polylinealgorithm")


"A fractional multiplier between 0 and 1, for example 0.25. 0 means 0% and 1 means 100%."
scalar Ratio


"""
A cost multiplier for how bad something is compared to being in transit for equal lengths of time.
The value should be greater than 0. 1 means neutral and values below 1 mean that something is
preferred over transit.
"""
scalar Reluctance


"Speed in meters per seconds. Values are positive floating point numbers (for example, 2.34)."
scalar Speed


"""
Plan accessibilty preferences. This can be expanded to contain preferences for various accessibility use cases
in the future. Currently only generic wheelchair preferences are available.
"""
input AccessibilityPreferencesInput {
  "Wheelchair related preferences. Note, currently this is the only accessibility mode that is available."
  wheelchair: WheelchairPreferencesInput
}


"Preferences related to alighting from a transit vehicle."
input AlightPreferencesInput {
  "What is the required minimum time alighting from a vehicle."
  slack: Duration
}


"Preferences for bicycle parking facilities used during the routing."
input BicycleParkingPreferencesInput {
  """
  Selection filters to include or exclude parking facilities.
  An empty list will include all facilities in the routing search.
  """
  filters: [ParkingFilter!]
  """
  If non-empty every parking facility that doesn't match this set of conditions will
  receive an extra cost (defined by \`unpreferredCost\`) and therefore avoided.
  """
  preferred: [ParkingFilter!]
  """
  If \`preferred\` is non-empty, using a parking facility that doesn't contain
  at least one of the preferred conditions, will receive this extra cost and therefore avoided if
  preferred options are available.
  """
  unpreferredCost: Cost
}


"Preferences related to travel with a bicycle."
input BicyclePreferencesInput {
  "Cost of boarding a vehicle with a bicycle."
  boardCost: Cost
  "What criteria should be used when optimizing a cycling route."
  optimization: CyclingOptimizationInput
  "Bicycle parking related preferences."
  parking: BicycleParkingPreferencesInput
  "A multiplier for how bad cycling is compared to being in transit for equal lengths of time."
  reluctance: Reluctance
  "Bicycle rental related preferences."
  rental: BicycleRentalPreferencesInput
  """
  Maximum speed on flat ground while riding a bicycle. Note, this speed is higher than
  the average speed will be in itineraries as this is the maximum speed but there are
  factors that slow down cycling such as crossings, intersections and elevation changes.
  """
  speed: Speed
  "Walking preferences when walking a bicycle."
  walk: BicycleWalkPreferencesInput
}


"Preferences related to bicycle rental (station based or floating bicycle rental)."
input BicycleRentalPreferencesInput {
  "Rental networks which can be potentially used as part of an itinerary."
  allowedNetworks: [String!]
  "Rental networks which cannot be used as part of an itinerary."
  bannedNetworks: [String!]
  """
  Is it possible to arrive to the destination with a rented bicycle and does it
  come with an extra cost.
  """
  destinationBicyclePolicy: DestinationBicyclePolicyInput
}


"Costs related to walking a bicycle."
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


"Preferences for walking a bicycle."
input BicycleWalkPreferencesInput {
  "Costs related to walking a bicycle."
  cost: BicycleWalkPreferencesCostInput
  """
  How long it takes to hop on or off a bicycle when switching to walking the bicycle
  or when getting on the bicycle again. However, this is not applied when getting
  on a rented bicycle for the first time or off the bicycle when returning the bicycle.
  """
  mountDismountTime: Duration
  """
  Maximum walk speed on flat ground. Note, this speed is higher than the average speed
  will be in itineraries as this is the maximum speed but there are
  factors that slow down walking such as crossings, intersections and elevation changes.
  """
  speed: Speed
}


"""
Preferences related to boarding a transit vehicle. Note, board costs for each street mode
can be found under the street mode preferences.
"""
input BoardPreferencesInput {
  """
  What is the required minimum waiting time at a stop. Setting this value as \`PT0S\`, for example, can lead
  to passenger missing a connection when the vehicle leaves ahead of time or the passenger arrives to the
  stop later than expected.
  """
  slack: Duration
  "A multiplier for how bad waiting at a stop is compared to being in transit for equal lengths of time."
  waitReluctance: Reluctance
}


"Preferences for car parking facilities used during the routing."
input CarParkingPreferencesInput {
  """
  Selection filters to include or exclude parking facilities.
  An empty list will include all facilities in the routing search.
  """
  filters: [ParkingFilter!]
  """
  If non-empty every parking facility that doesn't match this set of conditions will
  receive an extra cost (defined by \`unpreferredCost\`) and therefore avoided.
  """
  preferred: [ParkingFilter!]
  """
  If \`preferred\` is non-empty, using a parking facility that doesn't contain
  at least one of the preferred conditions, will receive this extra cost and therefore avoided if
  preferred options are available.
  """
  unpreferredCost: Cost
}


"Preferences related to traveling on a car (excluding car travel on transit services such as taxi)."
input CarPreferencesInput {
  "Car parking related preferences."
  parking: CarParkingPreferencesInput
  "A multiplier for how bad travelling on car is compared to being in transit for equal lengths of time."
  reluctance: Reluctance
  "Car rental related preferences."
  rental: CarRentalPreferencesInput
}


"Preferences related to car rental (station based or floating car rental)."
input CarRentalPreferencesInput {
  "Rental networks which can be potentially used as part of an itinerary."
  allowedNetworks: [String!]
  "Rental networks which cannot be used as part of an itinerary."
  bannedNetworks: [String!]
}


"What criteria should be used when optimizing a cycling route."
input CyclingOptimizationInput @oneOf {
  "Define optimization by weighing three criteria."
  triangle: TriangleCyclingFactorsInput
  "Use one of the predefined optimization types."
  type: CyclingOptimizationType
}


"""
Is it possible to arrive to the destination with a rented bicycle and does it
come with an extra cost.
"""
input DestinationBicyclePolicyInput {
  "For networks that require station drop-off, should the routing engine offer results that go directly to the destination without dropping off the rental bicycle first."
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
  "For networks that require station drop-off, should the routing engine offer results that go directly to the destination without dropping off the rental scooter first."
  allowKeeping: Boolean
  """
  Cost associated with arriving to the destination with a rented scooter.
  No cost is applied if arriving to the destination after dropping off the rented
  scooter.
  """
  keepingCost: Cost
}


input InputBanned {
  "A comma-separated list of banned agency ids"
  agencies: String
  "A comma-separated list of banned route ids"
  routes: String
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
  "A comma-separated list of banned trip ids"
  trips: String
}


input InputCoordinates {
  "The name of the place. If specified, the place name in results uses this value instead of \`\\"Origin\\"\` or \`\\"Destination\\"\`"
  address: String
  "Latitude of the place (WGS 84)"
  lat: Float!
  "The amount of time, in seconds, to spend at this location before venturing forth."
  locationSlack: Int
  "Longitude of the place (WGS 84)"
  lon: Float!
}


input InputFilters {
  "Bike parks to include by id."
  bikeParks: [String]
  "Bike rentals to include by id (without network identifier)."
  bikeRentalStations: [String]
  "Car parks to include by id."
  carParks: [String]
  "Routes to include by GTFS id."
  routes: [String]
  "Stations to include by GTFS id."
  stations: [String]
  "Stops to include by GTFS id."
  stops: [String]
}


input InputModeWeight {
  "The weight of AIRPLANE traverse mode. Values over 1 add cost to airplane travel and values under 1 decrease cost"
  AIRPLANE: Float
  "The weight of BUS traverse mode. Values over 1 add cost to bus travel and values under 1 decrease cost"
  BUS: Float
  "The weight of CABLE_CAR traverse mode. Values over 1 add cost to cable car travel and values under 1 decrease cost"
  CABLE_CAR: Float
  "The weight of FERRY traverse mode. Values over 1 add cost to ferry travel and values under 1 decrease cost"
  FERRY: Float
  "The weight of FUNICULAR traverse mode. Values over 1 add cost to funicular travel and values under 1 decrease cost"
  FUNICULAR: Float
  "The weight of GONDOLA traverse mode. Values over 1 add cost to gondola travel and values under 1 decrease cost"
  GONDOLA: Float
  "The weight of RAIL traverse mode. Values over 1 add cost to rail travel and values under 1 decrease cost"
  RAIL: Float
  "The weight of SUBWAY traverse mode. Values over 1 add cost to subway travel and values under 1 decrease cost"
  SUBWAY: Float
  "The weight of TRAM traverse mode. Values over 1 add cost to tram travel and values under 1 decrease cost"
  TRAM: Float
}


input InputPreferred {
  "A comma-separated list of ids of the agencies preferred by the user."
  agencies: String
  """
  Penalty added for using every route that is not preferred if user set any
  route as preferred. We return number of seconds that we are willing to wait
  for preferred route.
  """
  otherThanPreferredRoutesPenalty: Int
  "A comma-separated list of ids of the routes preferred by the user."
  routes: String
}


"""
Relative importances of optimization factors. Only effective for bicycling legs.
Invariant: \`timeFactor + slopeFactor + safetyFactor == 1\`
"""
input InputTriangle {
  "Relative importance of safety"
  safetyFactor: Float
  "Relative importance of flat terrain"
  slopeFactor: Float
  "Relative importance of duration"
  timeFactor: Float
}


input InputUnpreferred {
  "A comma-separated list of ids of the agencies unpreferred by the user."
  agencies: String
  "A comma-separated list of ids of the routes unpreferred by the user."
  routes: String
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


input ParkingFilterOperation {
  "Filter parking facilities based on their tag"
  tags: [String]
}


"A coordinate used for a location in a plan query."
input PlanCoordinateInput {
  "Latitude as a WGS84 format number."
  latitude: CoordinateValue!
  "Longitude as a WGS84 format number."
  longitude: CoordinateValue!
}


"Plan date time options. Only one of the values should be defined."
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


"""
Settings that control the behavior of itinerary filtering. **These are advanced settings and
should not be set by a user through user preferences.**
"""
input PlanItineraryFilterInput {
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
  "Itinerary filter debug profile used to control the behaviour of itinerary filters."
  itineraryFilterDebugProfile: ItineraryFilterDebugProfile = OFF
}


"""
Plan location settings. Location must be set. Label is optional
and used for naming the location.
"""
input PlanLabeledLocationInput {
  """
  A label that can be attached to the location. This label is then returned with the location
  in the itineraries.
  """
  label: String
  "A location that has to be used in an itinerary."
  location: PlanLocationInput!
}


"Plan location. Either a coordinate or a stop location should be defined."
input PlanLocationInput @oneOf {
  "Coordinate of the location. Note, either a coordinate or a stop location should be defined."
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


"Mode selections for the plan search."
input PlanModesInput {
  """
  Street mode that is used when searching for itineraries that don't use any transit.
  If more than one mode is selected, at least one of them must be used but not necessarily all.
  There are modes that automatically also use walking such as the rental modes. To force rental
  to be used, this should only include the rental mode and not \`WALK\` in addition.
  The default access mode is \`WALK\`.
  """
  direct: [PlanDirectMode!]
  "Should only the direct search without any transit be done."
  directOnly: Boolean = false
  """
  Modes for different phases of an itinerary when transit is included. Also
  includes street mode selections related to connecting to the transit network
  and transfers. By default, all transit modes are usable and \`WALK\` is used for
  access, egress and transfers.
  """
  transit: PlanTransitModesInput
  """
  Should only the transit search be done and never suggest itineraries that don't
  contain any transit legs.
  """
  transitOnly: Boolean = false
}


"Wrapper type for different types of preferences related to plan query."
input PlanPreferencesInput {
  "Accessibility preferences that affect both the street and transit routing."
  accessibility: AccessibilityPreferencesInput
  """
  Street routing preferences used for ingress, egress and transfers. These do not directly affect
  the transit legs but can change how preferable walking or cycling, for example, is compared to
  transit.
  """
  street: PlanStreetPreferencesInput
  "Transit routing preferences used for transit legs."
  transit: TransitPreferencesInput
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


"""
Street routing preferences used for ingress, egress and transfers. These do not directly affect
the transit legs but can change how preferable walking or cycling, for example, is compared to
transit.
"""
input PlanStreetPreferencesInput {
  "Cycling related preferences."
  bicycle: BicyclePreferencesInput
  """
  Car related preferences. These are not used for car travel as part of transit, such as
  taxi travel.
  """
  car: CarPreferencesInput
  "Scooter (kick or electrical) related preferences."
  scooter: ScooterPreferencesInput
  """
  Walk related preferences. These are not used when walking a bicycle or a scooter as they
  have their own preferences.
  """
  walk: WalkPreferencesInput
}


"Transit mode and a reluctance associated with it."
input PlanTransitModePreferenceInput {
  "Costs related to using a transit mode."
  cost: TransitModePreferenceCostInput
  "Transit mode that could be (but doesn't have to be) used in an itinerary."
  mode: TransitMode!
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


"What criteria should be used when optimizing a scooter route."
input ScooterOptimizationInput @oneOf {
  "Define optimization by weighing three criteria."
  triangle: TriangleScooterFactorsInput
  "Use one of the predefined optimization types."
  type: ScooterOptimizationType
}


"Preferences related to travel with a scooter (kick or e-scooter)."
input ScooterPreferencesInput {
  "What criteria should be used when optimizing a scooter route."
  optimization: ScooterOptimizationInput
  """
  A multiplier for how bad riding a scooter is compared to being in transit
  for equal lengths of time.
  """
  reluctance: Reluctance
  "Scooter rental related preferences."
  rental: ScooterRentalPreferencesInput
  """
  Maximum speed on flat ground while riding a scooter. Note, this speed is higher than
  the average speed will be in itineraries as this is the maximum speed but there are
  factors that slow down the travel such as crossings, intersections and elevation changes.
  """
  speed: Speed
}


"Preferences related to scooter rental (station based or floating scooter rental)."
input ScooterRentalPreferencesInput {
  "Rental networks which can be potentially used as part of an itinerary."
  allowedNetworks: [String!]
  "Rental networks which cannot be used as part of an itinerary."
  bannedNetworks: [String!]
  """
  Is it possible to arrive to the destination with a rented scooter and does it
  come with an extra cost.
  """
  destinationScooterPolicy: DestinationScooterPolicyInput
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


"Preferences related to transfers between transit vehicles (typically between stops)."
input TransferPreferencesInput {
  "A static cost that is added for each transfer on top of other costs."
  cost: Cost
  """
  How many additional transfers there can be at maximum compared to the itinerary with the
  least number of transfers.
  """
  maximumAdditionalTransfers: Int
  "How many transfers there can be at maximum in an itinerary."
  maximumTransfers: Int
  """
  A global minimum transfer time (in seconds) that specifies the minimum amount of time
  that must pass between exiting one transit vehicle and boarding another. This time is
  in addition to time it might take to walk between transit stops. Setting this value
  as \`PT0S\`, for example, can lead to passenger missing a connection when the vehicle leaves
  ahead of time or the passenger arrives to the stop later than expected.
  """
  slack: Duration
}


"Costs related to using a transit mode."
input TransitModePreferenceCostInput {
  "A cost multiplier of transit leg travel time."
  reluctance: Reluctance!
}


"Transit routing preferences used for transit legs."
input TransitPreferencesInput {
  "Preferences related to alighting from a transit vehicle."
  alight: AlightPreferencesInput
  """
  Preferences related to boarding a transit vehicle. Note, board costs for each street mode
  can be found under the street mode preferences.
  """
  board: BoardPreferencesInput
  "Preferences related to cancellations and real-time."
  timetable: TimetablePreferencesInput
  "Preferences related to transfers between transit vehicles (typically between stops)."
  transfer: TransferPreferencesInput
}


"Transportation mode which can be used in the itinerary"
input TransportMode {
  mode: Mode!
  "Optional additional qualifier for transport mode, e.g. \`RENT\`"
  qualifier: Qualifier
}


"""
Relative importance of optimization factors. Only effective for bicycling legs.
Invariant: \`safety + flatness + time == 1\`
"""
input TriangleCyclingFactorsInput {
  "Relative importance of flat terrain"
  flatness: Ratio!
  """
  Relative importance of cycling safety, but this factor can also include other
  concerns such as convenience and general cyclist preferences by taking into account
  road surface etc.
  """
  safety: Ratio!
  "Relative importance of duration"
  time: Ratio!
}


"""
Relative importance of optimization factors. Only effective for scooter legs.
Invariant: \`safety + flatness + time == 1\`
"""
input TriangleScooterFactorsInput {
  "Relative importance of flat terrain"
  flatness: Ratio!
  """
  Relative importance of scooter safety, but this factor can also include other
  concerns such as convenience and general scooter preferences by taking into account
  road surface etc.
  """
  safety: Ratio!
  "Relative importance of duration"
  time: Ratio!
}


"Preferences for parking facilities used during the routing."
input VehicleParkingInput {
  """
  Selection filters to include or exclude parking facilities.
  An empty list will include all facilities in the routing search.
  """
  filters: [ParkingFilter]
  """
  If non-empty every parking facility that doesn't match this set of conditions will
  receive an extra cost (defined by \`unpreferredCost\`) and therefore avoided.
  """
  preferred: [ParkingFilter]
  """
  If \`preferred\` is non-empty, using a parking facility that doesn't contain
  at least one of the preferred conditions, will receive this extra cost and therefore avoided if
  preferred options are available.
  """
  unpreferredCost: Int
}


"Preferences related to walking (excluding walking a bicycle or a scooter)."
input WalkPreferencesInput {
  "The cost of boarding a vehicle while walking."
  boardCost: Cost
  "A multiplier for how bad walking is compared to being in transit for equal lengths of time."
  reluctance: Reluctance
  """
  Factor for how much the walk safety is considered in routing. Value should be between 0 and 1.
  If the value is set to be 0, safety is ignored.
  """
  safetyFactor: Ratio
  """
  Maximum walk speed on flat ground. Note, this speed is higher than the average speed
  will be in itineraries as this is the maximum speed but there are
  factors that slow down walking such as crossings, intersections and elevation changes.
  """
  speed: Speed
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
`,hn=wI(),Bo=Ws(Vs.DIRECTIVES,[]);var Sf;const uI=Js((Sf=hn.getQueryType())==null?void 0:Sf.getFields());var kf;const cI=Js((kf=hn.getMutationType())==null?void 0:kf.getFields());var Ff;const fI=Js((Ff=hn.getSubscriptionType())==null?void 0:Ff.getFields()),al=Nt.keyBy(Mh(),i=>i.name.toLocaleLowerCase()),hI=Nt.mapValues(al,i=>{const n=Bo.find(t=>(t==null?void 0:t.name)===i.name||(t==null?void 0:t.name)==="*");return n?n.args.some(t=>t==="*")?i.args:n.args.map(t=>i.args.find(a=>a.name===t)).filter(t=>!!t):[]}),dI=Js(hn.getTypeMap()),pI=sI(hn);function Js(i){return Nt.mapKeys(i||{},(n,t)=>t.toLocaleLowerCase())}function gI(){return Nt.size(hn.getTypeMap())<=10}function mI(){return[Ao("Queries",hn.getQueryType()),Ao("Mutations",hn.getMutationType()),Ao("Subscriptions",hn.getSubscriptionType()),EI(),bI()].filter(i=>!!i)}function Ao(i,n){return vI(i,yI(n))}function yI(i){return Nt.sortBy((i==null?void 0:i.getFields())||{},n=>n.name)}function vI(i,n){return n.length===0?null:{type:"menu",title:i,children:n.map(t=>({type:"page",title:t.name,section:i,deprecated:!!t.deprecationReason,href:Sr.joinUrlPaths(Ys(),i.toLocaleLowerCase(),t.name)}))}}function bI(){return gI()?null:{type:"menu",title:"Types",children:Nt.sortBy(Nt.map(hn.getTypeMap()),n=>n.name).filter(n=>!n.name.startsWith("__")).map(n=>({type:"page",title:n.name,section:"Types",href:Sr.joinUrlPaths(Ys(),"types",n.name)}))}}function BI(){return!!hn.getQueryType()}function UI(i){return uI[i.toLocaleLowerCase()]}function $I(){return!!hn.getMutationType()}function MI(i){return cI[i.toLocaleLowerCase()]}function GI(){return!!hn.getSubscriptionType()}function VI(i){return fI[i.toLocaleLowerCase()]}function WI(i){return dI[i.toLocaleLowerCase()]}function TI(i){return al[i.toLocaleLowerCase()]}function YI(i){return TI(i.name)!==void 0}function qI(){return Nt.size(al)>0}function jI(i){return hI[i.name.toLocaleLowerCase()]||[]}function HI(i){if(i)return pI.getFor(i)}function zI(i){return Nt.flatMap(i.getFields(),n=>({field:n,possibleDescriptions:$h(n,i)}))}function $h(i,n){return i?i.description?[{description:i.description,from:n}]:qe(n)?n.getInterfaces().flatMap(t=>$h(t.getFields()[i.name],t)):[]:[]}function Mh(){return Bo.some(i=>(i==null?void 0:i.name)==="*")?hn.getDirectives().filter(i=>!["include","skip","deprecated","specifiedBy"].includes(i.name)):Bo.filter(i=>!!(i!=null&&i.name)).map(({name:i})=>i?hn.getDirective(i):void 0).filter(i=>!!i)}function wI(){return _f.trim().length===0?eI(JSON.parse(JSON.stringify({__schema:{types:[]}}))):rI(_f)}function EI(){const i=Mh();return i.length===0?null:{type:"menu",title:"Directives",children:i.map(n=>({type:"page",title:n.name,href:Sr.joinUrlPaths(Ys(),"directives",n.name),section:"Directives"}))}}const QI=Ws(Vs.APP_TITLE,"GraphQL Documentation"),Gh=II().concat(mI());AI(Gh);const DI=Object.freeze(Gh),JI=_I();function II(){return Ws(Vs.PAGES,kI()).filter(n=>!!n).map(n=>Wh([],n))}function _I(){const i=SI();if(i)return i.href;throw new Error("No custom pages or query available to use as the root application URL. You need to provide at least one custom page or your schema should contain at least one query/mutation/subscription.")}function AI(i){function n(a,s){for(const o of a){if(o.type==="page"){s(o);continue}o.type==="menu"&&n(o.children,s)}}let t;n(i,a=>{t&&(t.next={title:a.title,section:a.section,href:a.href},a.previous={title:t.title,section:t.section,href:t.href}),t=a})}function SI(){return Vh(()=>!0)}function KI(i){return Vh(n=>n.href.toLocaleLowerCase()===i.toLocaleLowerCase())}function Vh(i){function n(t){for(const a of t){if(a.type==="page"&&i(a))return a;if(a.type==="menu"){const s=n(a.children);if(s)return s}}return null}return n(DI)}function Wh(i,n){if(typeof n.content=="string")return{type:"page",title:n.title,content:n.content,href:Sr.joinUrlPaths(Ys(),...i,Af(n.title))};const t=i.concat([Af(n.title)]);return{type:"menu",title:n.title,children:n.content.map(a=>({...Wh(t,a),section:n.title}))}}function Af(i){return Sr.generatePathSegment(i,new xf)}function kI(){return[{title:"Introduction",content:[{title:"Welcome",content:`
        # Welcome 🎉

        [Congratulations!](https://www.youtube.com/watch?v=1Bix44C1EzY) You have successfully created your first Magidoc website.

        Now that you are up and running, you can customize this website even further by providing some configuration inside your [magidoc.mjs ⚙️](https://magidoc.js.org/cli/magidoc-configuration). 
        If you wish to remove or modify this page, have a look at the *customPages* configuration.
        `.split(`
`).map(i=>i.trim()).join(`
`)}]}]}export{Rw as A,gI as B,WI as C,HI as D,Kt as E,et as F,Ve as G,Mn as H,qe as I,vn as J,w as K,zI as L,gi as M,Bi as N,LI as O,Ms as P,Of as Q,yr as R,xI as S,xf as T,ve as U,Kn as V,QI as W,Nt as _,$I as a,BI as b,UI as c,GI as d,VI as e,KI as f,MI as g,JI as h,Cf as i,RI as j,qI as k,TI as l,jI as m,Ys as n,YI as o,DI as p,ct as q,lh as r,hn as s,bn as t,Sr as u,_e as v,PI as w,Ws as x,Vs as y,fr as z};
