var TT=Object.defineProperty;var wT=(i,n,t)=>n in i?TT(i,n,{enumerable:!0,configurable:!0,writable:!0,value:t}):i[n]=t;var ve=(i,n,t)=>wT(i,typeof n!="symbol"?n+"":n,t);import{s as Fe,d as J,c as we,q as an,I as Lc,n as nn,b as Lo,l as Po,t as Bo,a2 as yr,D as nt,v as Af,E as tt,F as it,G as rt,ae as Ss,j as Ce,k as qe,o as Oe,f as yn,e as St,g as Uo,m as Mo,ah as DT,ai as ET,ak as Pc,K as IT}from"./scheduler.BRkQt4do.js";import{S as Pe,i as Be,t as ae,a as ee,g as kt,e as Ft,d as jt,b as Ht,m as zt,c as gi}from"./index.BzjUemo1.js";import{b as AT}from"./control.B49Uh3NZ.js";function ct(i){return(i==null?void 0:i.length)!==void 0?i:Array.from(i)}function _f(i,n){const t={},s={},a={$$scope:1};let o=i.length;for(;o--;){const u=i[o],f=n[o];if(f){for(const h in u)h in f||(s[h]=1);for(const h in f)a[h]||(t[h]=f[h],a[h]=1);i[o]=f}else for(const h in u)a[h]=1}for(const u in s)u in t||(t[u]=void 0);return t}function II(i){return typeof i=="object"&&i!==null?i:{}}function Bc(i){let n,t,s;var a=i[1][i[0].type];function o(u,f){return{props:{token:u[0],options:u[2],renderers:u[1],$$slots:{default:[kT]},$$scope:{ctx:u}}}}return a&&(n=Lc(a,o(i))),{c(){n&&Ht(n.$$.fragment),t=an()},l(u){n&&gi(n.$$.fragment,u),t=an()},m(u,f){n&&zt(n,u,f),we(u,t,f),s=!0},p(u,f){if(f&3&&a!==(a=u[1][u[0].type])){if(n){kt();const h=n;ae(h.$$.fragment,1,0,()=>{jt(h,1)}),Ft()}a?(n=Lc(a,o(u)),Ht(n.$$.fragment),ee(n.$$.fragment,1),zt(n,t.parentNode,t)):n=null}else if(a){const h={};f&1&&(h.token=u[0]),f&4&&(h.options=u[2]),f&2&&(h.renderers=u[1]),f&15&&(h.$$scope={dirty:f,ctx:u}),n.$set(h)}},i(u){s||(n&&ee(n.$$.fragment,u),s=!0)},o(u){n&&ae(n.$$.fragment,u),s=!1},d(u){u&&J(t),n&&jt(n,u)}}}function _T(i){let n=i[0].raw+"",t;return{c(){t=Bo(n)},l(s){t=Po(s,n)},m(s,a){we(s,t,a)},p(s,a){a&1&&n!==(n=s[0].raw+"")&&Lo(t,n)},i:nn,o:nn,d(s){s&&J(t)}}}function ST(i){let n,t;return n=new Us({props:{tokens:i[0].tokens,renderers:i[1],options:i[2]}}),{c(){Ht(n.$$.fragment)},l(s){gi(n.$$.fragment,s)},m(s,a){zt(n,s,a),t=!0},p(s,a){const o={};a&1&&(o.tokens=s[0].tokens),a&2&&(o.renderers=s[1]),a&4&&(o.options=s[2]),n.$set(o)},i(s){t||(ee(n.$$.fragment,s),t=!0)},o(s){ae(n.$$.fragment,s),t=!1},d(s){jt(n,s)}}}function kT(i){let n,t,s,a;const o=[ST,_T],u=[];function f(h,m){return"tokens"in h[0]&&h[0].tokens?0:1}return n=f(i),t=u[n]=o[n](i),{c(){t.c(),s=an()},l(h){t.l(h),s=an()},m(h,m){u[n].m(h,m),we(h,s,m),a=!0},p(h,m){let y=n;n=f(h),n===y?u[n].p(h,m):(kt(),ae(u[y],1,1,()=>{u[y]=null}),Ft(),t=u[n],t?t.p(h,m):(t=u[n]=o[n](h),t.c()),ee(t,1),t.m(s.parentNode,s))},i(h){a||(ee(t),a=!0)},o(h){ae(t),a=!1},d(h){h&&J(s),u[n].d(h)}}}function FT(i){let n,t,s=i[1][i[0].type]&&Bc(i);return{c(){s&&s.c(),n=an()},l(a){s&&s.l(a),n=an()},m(a,o){s&&s.m(a,o),we(a,n,o),t=!0},p(a,[o]){a[1][a[0].type]?s?(s.p(a,o),o&3&&ee(s,1)):(s=Bc(a),s.c(),ee(s,1),s.m(n.parentNode,n)):s&&(kt(),ae(s,1,1,()=>{s=null}),Ft())},i(a){t||(ee(s),t=!0)},o(a){ae(s),t=!1},d(a){a&&J(n),s&&s.d(a)}}}function NT(i,n,t){let{token:s}=n,{renderers:a}=n,{options:o}=n;return i.$$set=u=>{"token"in u&&t(0,s=u.token),"renderers"in u&&t(1,a=u.renderers),"options"in u&&t(2,o=u.options)},[s,a,o]}class Sf extends Pe{constructor(n){super(),Be(this,n,NT,FT,Fe,{token:0,renderers:1,options:2})}}function Uc(i,n,t){const s=i.slice();return s[3]=n[t],s}function Mc(i){let n,t,s=ct(i[0]),a=[];for(let u=0;u<s.length;u+=1)a[u]=$c(Uc(i,s,u));const o=u=>ae(a[u],1,1,()=>{a[u]=null});return{c(){for(let u=0;u<a.length;u+=1)a[u].c();n=an()},l(u){for(let f=0;f<a.length;f+=1)a[f].l(u);n=an()},m(u,f){for(let h=0;h<a.length;h+=1)a[h]&&a[h].m(u,f);we(u,n,f),t=!0},p(u,f){if(f&7){s=ct(u[0]);let h;for(h=0;h<s.length;h+=1){const m=Uc(u,s,h);a[h]?(a[h].p(m,f),ee(a[h],1)):(a[h]=$c(m),a[h].c(),ee(a[h],1),a[h].m(n.parentNode,n))}for(kt(),h=s.length;h<a.length;h+=1)o(h);Ft()}},i(u){if(!t){for(let f=0;f<s.length;f+=1)ee(a[f]);t=!0}},o(u){a=a.filter(Boolean);for(let f=0;f<a.length;f+=1)ae(a[f]);t=!1},d(u){u&&J(n),yr(a,u)}}}function $c(i){let n,t;return n=new Sf({props:{token:i[3],renderers:i[1],options:i[2]}}),{c(){Ht(n.$$.fragment)},l(s){gi(n.$$.fragment,s)},m(s,a){zt(n,s,a),t=!0},p(s,a){const o={};a&1&&(o.token=s[3]),a&2&&(o.renderers=s[1]),a&4&&(o.options=s[2]),n.$set(o)},i(s){t||(ee(n.$$.fragment,s),t=!0)},o(s){ae(n.$$.fragment,s),t=!1},d(s){jt(n,s)}}}function CT(i){let n,t,s=i[0]&&Mc(i);return{c(){s&&s.c(),n=an()},l(a){s&&s.l(a),n=an()},m(a,o){s&&s.m(a,o),we(a,n,o),t=!0},p(a,[o]){a[0]?s?(s.p(a,o),o&1&&ee(s,1)):(s=Mc(a),s.c(),ee(s,1),s.m(n.parentNode,n)):s&&(kt(),ae(s,1,1,()=>{s=null}),Ft())},i(a){t||(ee(s),t=!0)},o(a){ae(s),t=!1},d(a){a&&J(n),s&&s.d(a)}}}function OT(i,n,t){let{tokens:s}=n,{renderers:a}=n,{options:o}=n;return i.$$set=u=>{"tokens"in u&&t(0,s=u.tokens),"renderers"in u&&t(1,a=u.renderers),"options"in u&&t(2,o=u.options)},[s,a,o]}class Us extends Pe{constructor(n){super(),Be(this,n,OT,CT,Fe,{tokens:0,renderers:1,options:2})}}function vr(...i){return`/${i.flatMap(n=>n.split("/")).filter(n=>!!n).join("/")}`}function br(i){return i.startsWith("/")||i.startsWith("#")}function kf(i,n){return n.slug(i).replace(/--+/g,"-")}function yo(i){let n,t;const s=i[5].default,a=nt(s,i,i[4],null);let o=[{id:i[1]}],u={};for(let f=0;f<o.length;f+=1)u=Af(u,o[f]);return{c(){n=Oe(`h${i[0].depth}`),a&&a.c(),this.h()},l(f){n=Ce(f,(`h${i[0].depth}`||"null").toUpperCase(),{id:!0});var h=qe(n);a&&a.l(h),h.forEach(J),this.h()},h(){Ss(`h${i[0].depth}`)(n,u)},m(f,h){we(f,n,h),a&&a.m(n,null),t=!0},p(f,h){a&&a.p&&(!t||h&16)&&tt(a,s,f,f[4],t?rt(s,f[4],h,null):it(f[4]),null),Ss(`h${f[0].depth}`)(n,u=_f(o,[(!t||h&2)&&{id:f[1]}]))},i(f){t||(ee(a,f),t=!0)},o(f){ae(a,f),t=!1},d(f){f&&J(n),a&&a.d(f)}}}function RT(i){let n=`h${i[0].depth}`,t,s,a=`h${i[0].depth}`&&yo(i);return{c(){a&&a.c(),t=an()},l(o){a&&a.l(o),t=an()},m(o,u){a&&a.m(o,u),we(o,t,u),s=!0},p(o,[u]){`h${o[0].depth}`?n?Fe(n,`h${o[0].depth}`)?(a.d(1),a=yo(o),n=`h${o[0].depth}`,a.c(),a.m(t.parentNode,t)):a.p(o,u):(a=yo(o),n=`h${o[0].depth}`,a.c(),a.m(t.parentNode,t)):n&&(a.d(1),a=null,n=`h${o[0].depth}`)},i(o){s||(ee(a,o),s=!0)},o(o){ae(a,o),s=!1},d(o){o&&J(t),a&&a.d(o)}}}function xT(i,n,t){let{$$slots:s={},$$scope:a}=n,{token:o}=n,{options:u}=n;const f=void 0;let h;return i.$$set=m=>{"token"in m&&t(0,o=m.token),"options"in m&&t(2,u=m.options),"$$scope"in m&&t(4,a=m.$$scope)},i.$$.update=()=>{i.$$.dirty&5&&t(1,h=kf(o.text,u.slugger))},[o,h,u,f,a,s]}class LT extends Pe{constructor(n){super(),Be(this,n,xT,RT,Fe,{token:0,options:2,renderers:3})}get renderers(){return this.$$.ctx[3]}}function PT(i){let n,t;const s=i[4].default,a=nt(s,i,i[3],null);return{c(){n=Oe("blockquote"),a&&a.c()},l(o){n=Ce(o,"BLOCKQUOTE",{});var u=qe(n);a&&a.l(u),u.forEach(J)},m(o,u){we(o,n,u),a&&a.m(n,null),t=!0},p(o,[u]){a&&a.p&&(!t||u&8)&&tt(a,s,o,o[3],t?rt(s,o[3],u,null):it(o[3]),null)},i(o){t||(ee(a,o),t=!0)},o(o){ae(a,o),t=!1},d(o){o&&J(n),a&&a.d(o)}}}function BT(i,n,t){let{$$slots:s={},$$scope:a}=n;const o=void 0,u=void 0,f=void 0;return i.$$set=h=>{"$$scope"in h&&t(3,a=h.$$scope)},[o,u,f,a,s]}class UT extends Pe{constructor(n){super(),Be(this,n,BT,PT,Fe,{token:0,options:1,renderers:2})}get token(){return this.$$.ctx[0]}get options(){return this.$$.ctx[1]}get renderers(){return this.$$.ctx[2]}}function Gc(i,n,t){const s=i.slice();return s[4]=n[t],s}function Vc(i){let n,t;return n=new Sf({props:{token:{...i[4]},options:i[1],renderers:i[2]}}),{c(){Ht(n.$$.fragment)},l(s){gi(n.$$.fragment,s)},m(s,a){zt(n,s,a),t=!0},p(s,a){const o={};a&1&&(o.token={...s[4]}),a&2&&(o.options=s[1]),a&4&&(o.renderers=s[2]),n.$set(o)},i(s){t||(ee(n.$$.fragment,s),t=!0)},o(s){ae(n.$$.fragment,s),t=!1},d(s){jt(n,s)}}}function vo(i){let n,t,s,a=ct(i[0].items),o=[];for(let m=0;m<a.length;m+=1)o[m]=Vc(Gc(i,a,m));const u=m=>ae(o[m],1,1,()=>{o[m]=null});let f=[{start:t=i[0].start||1}],h={};for(let m=0;m<f.length;m+=1)h=Af(h,f[m]);return{c(){n=Oe(i[3]);for(let m=0;m<o.length;m+=1)o[m].c();this.h()},l(m){n=Ce(m,(i[3]||"null").toUpperCase(),{start:!0});var y=qe(n);for(let b=0;b<o.length;b+=1)o[b].l(y);y.forEach(J),this.h()},h(){Ss(i[3])(n,h)},m(m,y){we(m,n,y);for(let b=0;b<o.length;b+=1)o[b]&&o[b].m(n,null);s=!0},p(m,y){if(y&7){a=ct(m[0].items);let b;for(b=0;b<a.length;b+=1){const O=Gc(m,a,b);o[b]?(o[b].p(O,y),ee(o[b],1)):(o[b]=Vc(O),o[b].c(),ee(o[b],1),o[b].m(n,null))}for(kt(),b=a.length;b<o.length;b+=1)u(b);Ft()}Ss(m[3])(n,h=_f(f,[(!s||y&1&&t!==(t=m[0].start||1))&&{start:t}]))},i(m){if(!s){for(let y=0;y<a.length;y+=1)ee(o[y]);s=!0}},o(m){o=o.filter(Boolean);for(let y=0;y<o.length;y+=1)ae(o[y]);s=!1},d(m){m&&J(n),yr(o,m)}}}function MT(i){let n=i[3],t,s=i[3]&&vo(i);return{c(){s&&s.c(),t=an()},l(a){s&&s.l(a),t=an()},m(a,o){s&&s.m(a,o),we(a,t,o)},p(a,[o]){a[3]?n?Fe(n,a[3])?(s.d(1),s=vo(a),n=a[3],s.c(),s.m(t.parentNode,t)):s.p(a,o):(s=vo(a),n=a[3],s.c(),s.m(t.parentNode,t)):n&&(s.d(1),s=null,n=a[3])},i:nn,o(a){ae(s,a)},d(a){a&&J(t),s&&s.d(a)}}}function $T(i,n,t){let{token:s}=n,{options:a}=n,{renderers:o}=n,u;return i.$$set=f=>{"token"in f&&t(0,s=f.token),"options"in f&&t(1,a=f.options),"renderers"in f&&t(2,o=f.renderers)},i.$$.update=()=>{i.$$.dirty&1&&t(3,u=s.ordered?"ol":"ul")},[s,a,o,u]}class GT extends Pe{constructor(n){super(),Be(this,n,$T,MT,Fe,{token:0,options:1,renderers:2})}}function VT(i){let n,t;const s=i[4].default,a=nt(s,i,i[3],null);return{c(){n=Oe("li"),a&&a.c()},l(o){n=Ce(o,"LI",{});var u=qe(n);a&&a.l(u),u.forEach(J)},m(o,u){we(o,n,u),a&&a.m(n,null),t=!0},p(o,[u]){a&&a.p&&(!t||u&8)&&tt(a,s,o,o[3],t?rt(s,o[3],u,null):it(o[3]),null)},i(o){t||(ee(a,o),t=!0)},o(o){ae(a,o),t=!1},d(o){o&&J(n),a&&a.d(o)}}}function WT(i,n,t){let{$$slots:s={},$$scope:a}=n;const o=void 0,u=void 0,f=void 0;return i.$$set=h=>{"$$scope"in h&&t(3,a=h.$$scope)},[o,u,f,a,s]}class qT extends Pe{constructor(n){super(),Be(this,n,WT,VT,Fe,{token:0,options:1,renderers:2})}get token(){return this.$$.ctx[0]}get options(){return this.$$.ctx[1]}get renderers(){return this.$$.ctx[2]}}function YT(i){let n;return{c(){n=Oe("br")},l(t){n=Ce(t,"BR",{})},m(t,s){we(t,n,s)},p:nn,i:nn,o:nn,d(t){t&&J(n)}}}function jT(i,n,t){return[void 0,void 0,void 0]}class HT extends Pe{constructor(n){super(),Be(this,n,jT,YT,Fe,{token:0,options:1,renderers:2})}get token(){return this.$$.ctx[0]}get options(){return this.$$.ctx[1]}get renderers(){return this.$$.ctx[2]}}function zT(i){let n,t,s=i[0].text+"",a,o;return{c(){n=Oe("pre"),t=Oe("code"),a=Bo(s),this.h()},l(u){n=Ce(u,"PRE",{});var f=qe(n);t=Ce(f,"CODE",{class:!0});var h=qe(t);a=Po(h,s),h.forEach(J),f.forEach(J),this.h()},h(){yn(t,"class",o=`lang-${i[0].lang}`)},m(u,f){we(u,n,f),St(n,t),St(t,a)},p(u,[f]){f&1&&s!==(s=u[0].text+"")&&Lo(a,s),f&1&&o!==(o=`lang-${u[0].lang}`)&&yn(t,"class",o)},i:nn,o:nn,d(u){u&&J(n)}}}function QT(i,n,t){let{token:s}=n;const a=void 0,o=void 0;return i.$$set=u=>{"token"in u&&t(0,s=u.token)},[s,a,o]}class JT extends Pe{constructor(n){super(),Be(this,n,QT,zT,Fe,{token:0,options:1,renderers:2})}get options(){return this.$$.ctx[1]}get renderers(){return this.$$.ctx[2]}}function KT(i){let n,t=i[0].raw.slice(1,i[0].raw.length-1)+"",s;return{c(){n=Oe("code"),s=Bo(t)},l(a){n=Ce(a,"CODE",{});var o=qe(n);s=Po(o,t),o.forEach(J)},m(a,o){we(a,n,o),St(n,s)},p(a,[o]){o&1&&t!==(t=a[0].raw.slice(1,a[0].raw.length-1)+"")&&Lo(s,t)},i:nn,o:nn,d(a){a&&J(n)}}}function XT(i,n,t){let{token:s}=n;const a=void 0,o=void 0;return i.$$set=u=>{"token"in u&&t(0,s=u.token)},[s,a,o]}class ZT extends Pe{constructor(n){super(),Be(this,n,XT,KT,Fe,{token:0,options:1,renderers:2})}get options(){return this.$$.ctx[1]}get renderers(){return this.$$.ctx[2]}}function Wc(i,n,t){const s=i.slice();return s[3]=n[t],s}function qc(i,n,t){const s=i.slice();return s[6]=n[t],s}function Yc(i,n,t){const s=i.slice();return s[9]=n[t],s}function jc(i){let n,t,s,a;return t=new Us({props:{tokens:i[9].tokens,options:i[1],renderers:i[2]}}),{c(){n=Oe("th"),Ht(t.$$.fragment),s=Mo(),this.h()},l(o){n=Ce(o,"TH",{scope:!0});var u=qe(n);gi(t.$$.fragment,u),s=Uo(u),u.forEach(J),this.h()},h(){yn(n,"scope","col")},m(o,u){we(o,n,u),zt(t,n,null),St(n,s),a=!0},p(o,u){const f={};u&1&&(f.tokens=o[9].tokens),u&2&&(f.options=o[1]),u&4&&(f.renderers=o[2]),t.$set(f)},i(o){a||(ee(t.$$.fragment,o),a=!0)},o(o){ae(t.$$.fragment,o),a=!1},d(o){o&&J(n),jt(t)}}}function Hc(i){let n,t,s;return t=new Us({props:{tokens:i[6].tokens,options:i[1],renderers:i[2]}}),{c(){n=Oe("td"),Ht(t.$$.fragment)},l(a){n=Ce(a,"TD",{});var o=qe(n);gi(t.$$.fragment,o),o.forEach(J)},m(a,o){we(a,n,o),zt(t,n,null),s=!0},p(a,o){const u={};o&1&&(u.tokens=a[6].tokens),o&2&&(u.options=a[1]),o&4&&(u.renderers=a[2]),t.$set(u)},i(a){s||(ee(t.$$.fragment,a),s=!0)},o(a){ae(t.$$.fragment,a),s=!1},d(a){a&&J(n),jt(t)}}}function zc(i){let n,t,s,a=ct(i[3]),o=[];for(let f=0;f<a.length;f+=1)o[f]=Hc(qc(i,a,f));const u=f=>ae(o[f],1,1,()=>{o[f]=null});return{c(){n=Oe("tr");for(let f=0;f<o.length;f+=1)o[f].c();t=Mo()},l(f){n=Ce(f,"TR",{});var h=qe(n);for(let m=0;m<o.length;m+=1)o[m].l(h);t=Uo(h),h.forEach(J)},m(f,h){we(f,n,h);for(let m=0;m<o.length;m+=1)o[m]&&o[m].m(n,null);St(n,t),s=!0},p(f,h){if(h&7){a=ct(f[3]);let m;for(m=0;m<a.length;m+=1){const y=qc(f,a,m);o[m]?(o[m].p(y,h),ee(o[m],1)):(o[m]=Hc(y),o[m].c(),ee(o[m],1),o[m].m(n,t))}for(kt(),m=a.length;m<o.length;m+=1)u(m);Ft()}},i(f){if(!s){for(let h=0;h<a.length;h+=1)ee(o[h]);s=!0}},o(f){o=o.filter(Boolean);for(let h=0;h<o.length;h+=1)ae(o[h]);s=!1},d(f){f&&J(n),yr(o,f)}}}function ew(i){let n,t,s,a,o,u,f=ct(i[0].header),h=[];for(let S=0;S<f.length;S+=1)h[S]=jc(Yc(i,f,S));const m=S=>ae(h[S],1,1,()=>{h[S]=null});let y=ct(i[0].rows),b=[];for(let S=0;S<y.length;S+=1)b[S]=zc(Wc(i,y,S));const O=S=>ae(b[S],1,1,()=>{b[S]=null});return{c(){n=Oe("table"),t=Oe("thead"),s=Oe("tr");for(let S=0;S<h.length;S+=1)h[S].c();a=Mo(),o=Oe("tbody");for(let S=0;S<b.length;S+=1)b[S].c()},l(S){n=Ce(S,"TABLE",{});var k=qe(n);t=Ce(k,"THEAD",{});var P=qe(t);s=Ce(P,"TR",{});var Y=qe(s);for(let _e=0;_e<h.length;_e+=1)h[_e].l(Y);Y.forEach(J),P.forEach(J),a=Uo(k),o=Ce(k,"TBODY",{});var ce=qe(o);for(let _e=0;_e<b.length;_e+=1)b[_e].l(ce);ce.forEach(J),k.forEach(J)},m(S,k){we(S,n,k),St(n,t),St(t,s);for(let P=0;P<h.length;P+=1)h[P]&&h[P].m(s,null);St(n,a),St(n,o);for(let P=0;P<b.length;P+=1)b[P]&&b[P].m(o,null);u=!0},p(S,[k]){if(k&7){f=ct(S[0].header);let P;for(P=0;P<f.length;P+=1){const Y=Yc(S,f,P);h[P]?(h[P].p(Y,k),ee(h[P],1)):(h[P]=jc(Y),h[P].c(),ee(h[P],1),h[P].m(s,null))}for(kt(),P=f.length;P<h.length;P+=1)m(P);Ft()}if(k&7){y=ct(S[0].rows);let P;for(P=0;P<y.length;P+=1){const Y=Wc(S,y,P);b[P]?(b[P].p(Y,k),ee(b[P],1)):(b[P]=zc(Y),b[P].c(),ee(b[P],1),b[P].m(o,null))}for(kt(),P=y.length;P<b.length;P+=1)O(P);Ft()}},i(S){if(!u){for(let k=0;k<f.length;k+=1)ee(h[k]);for(let k=0;k<y.length;k+=1)ee(b[k]);u=!0}},o(S){h=h.filter(Boolean);for(let k=0;k<h.length;k+=1)ae(h[k]);b=b.filter(Boolean);for(let k=0;k<b.length;k+=1)ae(b[k]);u=!1},d(S){S&&J(n),yr(h,S),yr(b,S)}}}function nw(i,n,t){let{token:s}=n,{options:a}=n,{renderers:o}=n;return i.$$set=u=>{"token"in u&&t(0,s=u.token),"options"in u&&t(1,a=u.options),"renderers"in u&&t(2,o=u.renderers)},[s,a,o]}class tw extends Pe{constructor(n){super(),Be(this,n,nw,ew,Fe,{token:0,options:1,renderers:2})}}function iw(i){let n,t=i[0].text+"",s;return{c(){n=new ET(!1),s=an(),this.h()},l(a){n=DT(a,!1),s=an(),this.h()},h(){n.a=s},m(a,o){n.m(t,a,o),we(a,s,o)},p(a,[o]){o&1&&t!==(t=a[0].text+"")&&n.p(t)},i:nn,o:nn,d(a){a&&(J(s),n.d())}}}function rw(i,n,t){let{token:s}=n;const a=void 0,o=void 0;return i.$$set=u=>{"token"in u&&t(0,s=u.token)},[s,a,o]}class sw extends Pe{constructor(n){super(),Be(this,n,rw,iw,Fe,{token:0,options:1,renderers:2})}get options(){return this.$$.ctx[1]}get renderers(){return this.$$.ctx[2]}}function aw(i){let n,t;const s=i[4].default,a=nt(s,i,i[3],null);return{c(){n=Oe("p"),a&&a.c()},l(o){n=Ce(o,"P",{});var u=qe(n);a&&a.l(u),u.forEach(J)},m(o,u){we(o,n,u),a&&a.m(n,null),t=!0},p(o,[u]){a&&a.p&&(!t||u&8)&&tt(a,s,o,o[3],t?rt(s,o[3],u,null):it(o[3]),null)},i(o){t||(ee(a,o),t=!0)},o(o){ae(a,o),t=!1},d(o){o&&J(n),a&&a.d(o)}}}function ow(i,n,t){let{$$slots:s={},$$scope:a}=n;const o=void 0,u=void 0,f=void 0;return i.$$set=h=>{"$$scope"in h&&t(3,a=h.$$scope)},[o,u,f,a,s]}class lw extends Pe{constructor(n){super(),Be(this,n,ow,aw,Fe,{token:0,options:1,renderers:2})}get token(){return this.$$.ctx[0]}get options(){return this.$$.ctx[1]}get renderers(){return this.$$.ctx[2]}}function uw(i){let n,t,s,a;const o=i[4].default,u=nt(o,i,i[3],null);return{c(){n=Oe("a"),u&&u.c(),this.h()},l(f){n=Ce(f,"A",{href:!0,title:!0});var h=qe(n);u&&u.l(h),h.forEach(J),this.h()},h(){yn(n,"href",t=br(i[0].href)?vr(i[1].baseUrl,i[0].href):i[0].href),yn(n,"title",s=i[0].title)},m(f,h){we(f,n,h),u&&u.m(n,null),a=!0},p(f,[h]){u&&u.p&&(!a||h&8)&&tt(u,o,f,f[3],a?rt(o,f[3],h,null):it(f[3]),null),(!a||h&3&&t!==(t=br(f[0].href)?vr(f[1].baseUrl,f[0].href):f[0].href))&&yn(n,"href",t),(!a||h&1&&s!==(s=f[0].title))&&yn(n,"title",s)},i(f){a||(ee(u,f),a=!0)},o(f){ae(u,f),a=!1},d(f){f&&J(n),u&&u.d(f)}}}function cw(i,n,t){let{$$slots:s={},$$scope:a}=n,{token:o}=n,{options:u}=n;const f=void 0;return i.$$set=h=>{"token"in h&&t(0,o=h.token),"options"in h&&t(1,u=h.options),"$$scope"in h&&t(3,a=h.$$scope)},[o,u,f,a,s]}class fw extends Pe{constructor(n){super(),Be(this,n,cw,uw,Fe,{token:0,options:1,renderers:2})}get renderers(){return this.$$.ctx[2]}}function hw(i){let n;const t=i[4].default,s=nt(t,i,i[3],null);return{c(){s&&s.c()},l(a){s&&s.l(a)},m(a,o){s&&s.m(a,o),n=!0},p(a,[o]){s&&s.p&&(!n||o&8)&&tt(s,t,a,a[3],n?rt(t,a[3],o,null):it(a[3]),null)},i(a){n||(ee(s,a),n=!0)},o(a){ae(s,a),n=!1},d(a){s&&s.d(a)}}}function dw(i,n,t){let{$$slots:s={},$$scope:a}=n;const o=void 0,u=void 0,f=void 0;return i.$$set=h=>{"$$scope"in h&&t(3,a=h.$$scope)},[o,u,f,a,s]}class pw extends Pe{constructor(n){super(),Be(this,n,dw,hw,Fe,{token:0,options:1,renderers:2})}get token(){return this.$$.ctx[0]}get options(){return this.$$.ctx[1]}get renderers(){return this.$$.ctx[2]}}function gw(i){let n,t;const s=i[4].default,a=nt(s,i,i[3],null);return{c(){n=Oe("dfn"),a&&a.c()},l(o){n=Ce(o,"DFN",{});var u=qe(n);a&&a.l(u),u.forEach(J)},m(o,u){we(o,n,u),a&&a.m(n,null),t=!0},p(o,[u]){a&&a.p&&(!t||u&8)&&tt(a,s,o,o[3],t?rt(s,o[3],u,null):it(o[3]),null)},i(o){t||(ee(a,o),t=!0)},o(o){ae(a,o),t=!1},d(o){o&&J(n),a&&a.d(o)}}}function mw(i,n,t){let{$$slots:s={},$$scope:a}=n;const o=void 0,u=void 0,f=void 0;return i.$$set=h=>{"$$scope"in h&&t(3,a=h.$$scope)},[o,u,f,a,s]}class yw extends Pe{constructor(n){super(),Be(this,n,mw,gw,Fe,{token:0,options:1,renderers:2})}get token(){return this.$$.ctx[0]}get options(){return this.$$.ctx[1]}get renderers(){return this.$$.ctx[2]}}function vw(i){let n,t;const s=i[4].default,a=nt(s,i,i[3],null);return{c(){n=Oe("del"),a&&a.c()},l(o){n=Ce(o,"DEL",{});var u=qe(n);a&&a.l(u),u.forEach(J)},m(o,u){we(o,n,u),a&&a.m(n,null),t=!0},p(o,[u]){a&&a.p&&(!t||u&8)&&tt(a,s,o,o[3],t?rt(s,o[3],u,null):it(o[3]),null)},i(o){t||(ee(a,o),t=!0)},o(o){ae(a,o),t=!1},d(o){o&&J(n),a&&a.d(o)}}}function bw(i,n,t){let{$$slots:s={},$$scope:a}=n;const o=void 0,u=void 0,f=void 0;return i.$$set=h=>{"$$scope"in h&&t(3,a=h.$$scope)},[o,u,f,a,s]}class Tw extends Pe{constructor(n){super(),Be(this,n,bw,vw,Fe,{token:0,options:1,renderers:2})}get token(){return this.$$.ctx[0]}get options(){return this.$$.ctx[1]}get renderers(){return this.$$.ctx[2]}}function ww(i){let n,t;const s=i[4].default,a=nt(s,i,i[3],null);return{c(){n=Oe("em"),a&&a.c()},l(o){n=Ce(o,"EM",{});var u=qe(n);a&&a.l(u),u.forEach(J)},m(o,u){we(o,n,u),a&&a.m(n,null),t=!0},p(o,[u]){a&&a.p&&(!t||u&8)&&tt(a,s,o,o[3],t?rt(s,o[3],u,null):it(o[3]),null)},i(o){t||(ee(a,o),t=!0)},o(o){ae(a,o),t=!1},d(o){o&&J(n),a&&a.d(o)}}}function Dw(i,n,t){let{$$slots:s={},$$scope:a}=n;const o=void 0,u=void 0,f=void 0;return i.$$set=h=>{"$$scope"in h&&t(3,a=h.$$scope)},[o,u,f,a,s]}class Ew extends Pe{constructor(n){super(),Be(this,n,Dw,ww,Fe,{token:0,options:1,renderers:2})}get token(){return this.$$.ctx[0]}get options(){return this.$$.ctx[1]}get renderers(){return this.$$.ctx[2]}}function Iw(i){let n;return{c(){n=Oe("hr")},l(t){n=Ce(t,"HR",{})},m(t,s){we(t,n,s)},p:nn,i:nn,o:nn,d(t){t&&J(n)}}}function Aw(i,n,t){return[void 0,void 0,void 0]}class _w extends Pe{constructor(n){super(),Be(this,n,Aw,Iw,Fe,{token:0,options:1,renderers:2})}get token(){return this.$$.ctx[0]}get options(){return this.$$.ctx[1]}get renderers(){return this.$$.ctx[2]}}function Sw(i){let n,t;const s=i[4].default,a=nt(s,i,i[3],null);return{c(){n=Oe("strong"),a&&a.c()},l(o){n=Ce(o,"STRONG",{});var u=qe(n);a&&a.l(u),u.forEach(J)},m(o,u){we(o,n,u),a&&a.m(n,null),t=!0},p(o,[u]){a&&a.p&&(!t||u&8)&&tt(a,s,o,o[3],t?rt(s,o[3],u,null):it(o[3]),null)},i(o){t||(ee(a,o),t=!0)},o(o){ae(a,o),t=!1},d(o){o&&J(n),a&&a.d(o)}}}function kw(i,n,t){let{$$slots:s={},$$scope:a}=n;const o=void 0,u=void 0,f=void 0;return i.$$set=h=>{"$$scope"in h&&t(3,a=h.$$scope)},[o,u,f,a,s]}class Fw extends Pe{constructor(n){super(),Be(this,n,kw,Sw,Fe,{token:0,options:1,renderers:2})}get token(){return this.$$.ctx[0]}get options(){return this.$$.ctx[1]}get renderers(){return this.$$.ctx[2]}}function Nw(i){let n,t,s,a;return{c(){n=Oe("img"),this.h()},l(o){n=Ce(o,"IMG",{src:!0,title:!0,alt:!0,class:!0}),this.h()},h(){Pc(n.src,t=br(i[0].href)?vr(i[1].baseUrl,i[0].href):i[0].href)||yn(n,"src",t),yn(n,"title",s=i[0].title),yn(n,"alt",a=i[0].text),yn(n,"class","markdown-image svelte-z38cge")},m(o,u){we(o,n,u)},p(o,[u]){u&3&&!Pc(n.src,t=br(o[0].href)?vr(o[1].baseUrl,o[0].href):o[0].href)&&yn(n,"src",t),u&1&&s!==(s=o[0].title)&&yn(n,"title",s),u&1&&a!==(a=o[0].text)&&yn(n,"alt",a)},i:nn,o:nn,d(o){o&&J(n)}}}function Cw(i,n,t){let{token:s}=n,{options:a}=n;const o=void 0;return i.$$set=u=>{"token"in u&&t(0,s=u.token),"options"in u&&t(1,a=u.options)},[s,a,o]}class Ow extends Pe{constructor(n){super(),Be(this,n,Cw,Nw,Fe,{token:0,options:1,renderers:2})}get renderers(){return this.$$.ctx[2]}}function Rw(i){let n;const t=i[4].default,s=nt(t,i,i[3],null);return{c(){s&&s.c()},l(a){s&&s.l(a)},m(a,o){s&&s.m(a,o),n=!0},p(a,[o]){s&&s.p&&(!n||o&8)&&tt(s,t,a,a[3],n?rt(t,a[3],o,null):it(a[3]),null)},i(a){n||(ee(s,a),n=!0)},o(a){ae(s,a),n=!1},d(a){s&&s.d(a)}}}function xw(i,n,t){let{$$slots:s={},$$scope:a}=n;const o=void 0,u=void 0,f=void 0;return i.$$set=h=>{"$$scope"in h&&t(3,a=h.$$scope)},[o,u,f,a,s]}class Qc extends Pe{constructor(n){super(),Be(this,n,xw,Rw,Fe,{token:0,options:1,renderers:2})}get token(){return this.$$.ctx[0]}get options(){return this.$$.ctx[1]}get renderers(){return this.$$.ctx[2]}}const Lw=/[\0-\x1F!-,\.\/:-@\[-\^`\{-\xA9\xAB-\xB4\xB6-\xB9\xBB-\xBF\xD7\xF7\u02C2-\u02C5\u02D2-\u02DF\u02E5-\u02EB\u02ED\u02EF-\u02FF\u0375\u0378\u0379\u037E\u0380-\u0385\u0387\u038B\u038D\u03A2\u03F6\u0482\u0530\u0557\u0558\u055A-\u055F\u0589-\u0590\u05BE\u05C0\u05C3\u05C6\u05C8-\u05CF\u05EB-\u05EE\u05F3-\u060F\u061B-\u061F\u066A-\u066D\u06D4\u06DD\u06DE\u06E9\u06FD\u06FE\u0700-\u070F\u074B\u074C\u07B2-\u07BF\u07F6-\u07F9\u07FB\u07FC\u07FE\u07FF\u082E-\u083F\u085C-\u085F\u086B-\u089F\u08B5\u08C8-\u08D2\u08E2\u0964\u0965\u0970\u0984\u098D\u098E\u0991\u0992\u09A9\u09B1\u09B3-\u09B5\u09BA\u09BB\u09C5\u09C6\u09C9\u09CA\u09CF-\u09D6\u09D8-\u09DB\u09DE\u09E4\u09E5\u09F2-\u09FB\u09FD\u09FF\u0A00\u0A04\u0A0B-\u0A0E\u0A11\u0A12\u0A29\u0A31\u0A34\u0A37\u0A3A\u0A3B\u0A3D\u0A43-\u0A46\u0A49\u0A4A\u0A4E-\u0A50\u0A52-\u0A58\u0A5D\u0A5F-\u0A65\u0A76-\u0A80\u0A84\u0A8E\u0A92\u0AA9\u0AB1\u0AB4\u0ABA\u0ABB\u0AC6\u0ACA\u0ACE\u0ACF\u0AD1-\u0ADF\u0AE4\u0AE5\u0AF0-\u0AF8\u0B00\u0B04\u0B0D\u0B0E\u0B11\u0B12\u0B29\u0B31\u0B34\u0B3A\u0B3B\u0B45\u0B46\u0B49\u0B4A\u0B4E-\u0B54\u0B58-\u0B5B\u0B5E\u0B64\u0B65\u0B70\u0B72-\u0B81\u0B84\u0B8B-\u0B8D\u0B91\u0B96-\u0B98\u0B9B\u0B9D\u0BA0-\u0BA2\u0BA5-\u0BA7\u0BAB-\u0BAD\u0BBA-\u0BBD\u0BC3-\u0BC5\u0BC9\u0BCE\u0BCF\u0BD1-\u0BD6\u0BD8-\u0BE5\u0BF0-\u0BFF\u0C0D\u0C11\u0C29\u0C3A-\u0C3C\u0C45\u0C49\u0C4E-\u0C54\u0C57\u0C5B-\u0C5F\u0C64\u0C65\u0C70-\u0C7F\u0C84\u0C8D\u0C91\u0CA9\u0CB4\u0CBA\u0CBB\u0CC5\u0CC9\u0CCE-\u0CD4\u0CD7-\u0CDD\u0CDF\u0CE4\u0CE5\u0CF0\u0CF3-\u0CFF\u0D0D\u0D11\u0D45\u0D49\u0D4F-\u0D53\u0D58-\u0D5E\u0D64\u0D65\u0D70-\u0D79\u0D80\u0D84\u0D97-\u0D99\u0DB2\u0DBC\u0DBE\u0DBF\u0DC7-\u0DC9\u0DCB-\u0DCE\u0DD5\u0DD7\u0DE0-\u0DE5\u0DF0\u0DF1\u0DF4-\u0E00\u0E3B-\u0E3F\u0E4F\u0E5A-\u0E80\u0E83\u0E85\u0E8B\u0EA4\u0EA6\u0EBE\u0EBF\u0EC5\u0EC7\u0ECE\u0ECF\u0EDA\u0EDB\u0EE0-\u0EFF\u0F01-\u0F17\u0F1A-\u0F1F\u0F2A-\u0F34\u0F36\u0F38\u0F3A-\u0F3D\u0F48\u0F6D-\u0F70\u0F85\u0F98\u0FBD-\u0FC5\u0FC7-\u0FFF\u104A-\u104F\u109E\u109F\u10C6\u10C8-\u10CC\u10CE\u10CF\u10FB\u1249\u124E\u124F\u1257\u1259\u125E\u125F\u1289\u128E\u128F\u12B1\u12B6\u12B7\u12BF\u12C1\u12C6\u12C7\u12D7\u1311\u1316\u1317\u135B\u135C\u1360-\u137F\u1390-\u139F\u13F6\u13F7\u13FE-\u1400\u166D\u166E\u1680\u169B-\u169F\u16EB-\u16ED\u16F9-\u16FF\u170D\u1715-\u171F\u1735-\u173F\u1754-\u175F\u176D\u1771\u1774-\u177F\u17D4-\u17D6\u17D8-\u17DB\u17DE\u17DF\u17EA-\u180A\u180E\u180F\u181A-\u181F\u1879-\u187F\u18AB-\u18AF\u18F6-\u18FF\u191F\u192C-\u192F\u193C-\u1945\u196E\u196F\u1975-\u197F\u19AC-\u19AF\u19CA-\u19CF\u19DA-\u19FF\u1A1C-\u1A1F\u1A5F\u1A7D\u1A7E\u1A8A-\u1A8F\u1A9A-\u1AA6\u1AA8-\u1AAF\u1AC1-\u1AFF\u1B4C-\u1B4F\u1B5A-\u1B6A\u1B74-\u1B7F\u1BF4-\u1BFF\u1C38-\u1C3F\u1C4A-\u1C4C\u1C7E\u1C7F\u1C89-\u1C8F\u1CBB\u1CBC\u1CC0-\u1CCF\u1CD3\u1CFB-\u1CFF\u1DFA\u1F16\u1F17\u1F1E\u1F1F\u1F46\u1F47\u1F4E\u1F4F\u1F58\u1F5A\u1F5C\u1F5E\u1F7E\u1F7F\u1FB5\u1FBD\u1FBF-\u1FC1\u1FC5\u1FCD-\u1FCF\u1FD4\u1FD5\u1FDC-\u1FDF\u1FED-\u1FF1\u1FF5\u1FFD-\u203E\u2041-\u2053\u2055-\u2070\u2072-\u207E\u2080-\u208F\u209D-\u20CF\u20F1-\u2101\u2103-\u2106\u2108\u2109\u2114\u2116-\u2118\u211E-\u2123\u2125\u2127\u2129\u212E\u213A\u213B\u2140-\u2144\u214A-\u214D\u214F-\u215F\u2189-\u24B5\u24EA-\u2BFF\u2C2F\u2C5F\u2CE5-\u2CEA\u2CF4-\u2CFF\u2D26\u2D28-\u2D2C\u2D2E\u2D2F\u2D68-\u2D6E\u2D70-\u2D7E\u2D97-\u2D9F\u2DA7\u2DAF\u2DB7\u2DBF\u2DC7\u2DCF\u2DD7\u2DDF\u2E00-\u2E2E\u2E30-\u3004\u3008-\u3020\u3030\u3036\u3037\u303D-\u3040\u3097\u3098\u309B\u309C\u30A0\u30FB\u3100-\u3104\u3130\u318F-\u319F\u31C0-\u31EF\u3200-\u33FF\u4DC0-\u4DFF\u9FFD-\u9FFF\uA48D-\uA4CF\uA4FE\uA4FF\uA60D-\uA60F\uA62C-\uA63F\uA673\uA67E\uA6F2-\uA716\uA720\uA721\uA789\uA78A\uA7C0\uA7C1\uA7CB-\uA7F4\uA828-\uA82B\uA82D-\uA83F\uA874-\uA87F\uA8C6-\uA8CF\uA8DA-\uA8DF\uA8F8-\uA8FA\uA8FC\uA92E\uA92F\uA954-\uA95F\uA97D-\uA97F\uA9C1-\uA9CE\uA9DA-\uA9DF\uA9FF\uAA37-\uAA3F\uAA4E\uAA4F\uAA5A-\uAA5F\uAA77-\uAA79\uAAC3-\uAADA\uAADE\uAADF\uAAF0\uAAF1\uAAF7-\uAB00\uAB07\uAB08\uAB0F\uAB10\uAB17-\uAB1F\uAB27\uAB2F\uAB5B\uAB6A-\uAB6F\uABEB\uABEE\uABEF\uABFA-\uABFF\uD7A4-\uD7AF\uD7C7-\uD7CA\uD7FC-\uD7FF\uE000-\uF8FF\uFA6E\uFA6F\uFADA-\uFAFF\uFB07-\uFB12\uFB18-\uFB1C\uFB29\uFB37\uFB3D\uFB3F\uFB42\uFB45\uFBB2-\uFBD2\uFD3E-\uFD4F\uFD90\uFD91\uFDC8-\uFDEF\uFDFC-\uFDFF\uFE10-\uFE1F\uFE30-\uFE32\uFE35-\uFE4C\uFE50-\uFE6F\uFE75\uFEFD-\uFF0F\uFF1A-\uFF20\uFF3B-\uFF3E\uFF40\uFF5B-\uFF65\uFFBF-\uFFC1\uFFC8\uFFC9\uFFD0\uFFD1\uFFD8\uFFD9\uFFDD-\uFFFF]|\uD800[\uDC0C\uDC27\uDC3B\uDC3E\uDC4E\uDC4F\uDC5E-\uDC7F\uDCFB-\uDD3F\uDD75-\uDDFC\uDDFE-\uDE7F\uDE9D-\uDE9F\uDED1-\uDEDF\uDEE1-\uDEFF\uDF20-\uDF2C\uDF4B-\uDF4F\uDF7B-\uDF7F\uDF9E\uDF9F\uDFC4-\uDFC7\uDFD0\uDFD6-\uDFFF]|\uD801[\uDC9E\uDC9F\uDCAA-\uDCAF\uDCD4-\uDCD7\uDCFC-\uDCFF\uDD28-\uDD2F\uDD64-\uDDFF\uDF37-\uDF3F\uDF56-\uDF5F\uDF68-\uDFFF]|\uD802[\uDC06\uDC07\uDC09\uDC36\uDC39-\uDC3B\uDC3D\uDC3E\uDC56-\uDC5F\uDC77-\uDC7F\uDC9F-\uDCDF\uDCF3\uDCF6-\uDCFF\uDD16-\uDD1F\uDD3A-\uDD7F\uDDB8-\uDDBD\uDDC0-\uDDFF\uDE04\uDE07-\uDE0B\uDE14\uDE18\uDE36\uDE37\uDE3B-\uDE3E\uDE40-\uDE5F\uDE7D-\uDE7F\uDE9D-\uDEBF\uDEC8\uDEE7-\uDEFF\uDF36-\uDF3F\uDF56-\uDF5F\uDF73-\uDF7F\uDF92-\uDFFF]|\uD803[\uDC49-\uDC7F\uDCB3-\uDCBF\uDCF3-\uDCFF\uDD28-\uDD2F\uDD3A-\uDE7F\uDEAA\uDEAD-\uDEAF\uDEB2-\uDEFF\uDF1D-\uDF26\uDF28-\uDF2F\uDF51-\uDFAF\uDFC5-\uDFDF\uDFF7-\uDFFF]|\uD804[\uDC47-\uDC65\uDC70-\uDC7E\uDCBB-\uDCCF\uDCE9-\uDCEF\uDCFA-\uDCFF\uDD35\uDD40-\uDD43\uDD48-\uDD4F\uDD74\uDD75\uDD77-\uDD7F\uDDC5-\uDDC8\uDDCD\uDDDB\uDDDD-\uDDFF\uDE12\uDE38-\uDE3D\uDE3F-\uDE7F\uDE87\uDE89\uDE8E\uDE9E\uDEA9-\uDEAF\uDEEB-\uDEEF\uDEFA-\uDEFF\uDF04\uDF0D\uDF0E\uDF11\uDF12\uDF29\uDF31\uDF34\uDF3A\uDF45\uDF46\uDF49\uDF4A\uDF4E\uDF4F\uDF51-\uDF56\uDF58-\uDF5C\uDF64\uDF65\uDF6D-\uDF6F\uDF75-\uDFFF]|\uD805[\uDC4B-\uDC4F\uDC5A-\uDC5D\uDC62-\uDC7F\uDCC6\uDCC8-\uDCCF\uDCDA-\uDD7F\uDDB6\uDDB7\uDDC1-\uDDD7\uDDDE-\uDDFF\uDE41-\uDE43\uDE45-\uDE4F\uDE5A-\uDE7F\uDEB9-\uDEBF\uDECA-\uDEFF\uDF1B\uDF1C\uDF2C-\uDF2F\uDF3A-\uDFFF]|\uD806[\uDC3B-\uDC9F\uDCEA-\uDCFE\uDD07\uDD08\uDD0A\uDD0B\uDD14\uDD17\uDD36\uDD39\uDD3A\uDD44-\uDD4F\uDD5A-\uDD9F\uDDA8\uDDA9\uDDD8\uDDD9\uDDE2\uDDE5-\uDDFF\uDE3F-\uDE46\uDE48-\uDE4F\uDE9A-\uDE9C\uDE9E-\uDEBF\uDEF9-\uDFFF]|\uD807[\uDC09\uDC37\uDC41-\uDC4F\uDC5A-\uDC71\uDC90\uDC91\uDCA8\uDCB7-\uDCFF\uDD07\uDD0A\uDD37-\uDD39\uDD3B\uDD3E\uDD48-\uDD4F\uDD5A-\uDD5F\uDD66\uDD69\uDD8F\uDD92\uDD99-\uDD9F\uDDAA-\uDEDF\uDEF7-\uDFAF\uDFB1-\uDFFF]|\uD808[\uDF9A-\uDFFF]|\uD809[\uDC6F-\uDC7F\uDD44-\uDFFF]|[\uD80A\uD80B\uD80E-\uD810\uD812-\uD819\uD824-\uD82B\uD82D\uD82E\uD830-\uD833\uD837\uD839\uD83D\uD83F\uD87B-\uD87D\uD87F\uD885-\uDB3F\uDB41-\uDBFF][\uDC00-\uDFFF]|\uD80D[\uDC2F-\uDFFF]|\uD811[\uDE47-\uDFFF]|\uD81A[\uDE39-\uDE3F\uDE5F\uDE6A-\uDECF\uDEEE\uDEEF\uDEF5-\uDEFF\uDF37-\uDF3F\uDF44-\uDF4F\uDF5A-\uDF62\uDF78-\uDF7C\uDF90-\uDFFF]|\uD81B[\uDC00-\uDE3F\uDE80-\uDEFF\uDF4B-\uDF4E\uDF88-\uDF8E\uDFA0-\uDFDF\uDFE2\uDFE5-\uDFEF\uDFF2-\uDFFF]|\uD821[\uDFF8-\uDFFF]|\uD823[\uDCD6-\uDCFF\uDD09-\uDFFF]|\uD82C[\uDD1F-\uDD4F\uDD53-\uDD63\uDD68-\uDD6F\uDEFC-\uDFFF]|\uD82F[\uDC6B-\uDC6F\uDC7D-\uDC7F\uDC89-\uDC8F\uDC9A-\uDC9C\uDC9F-\uDFFF]|\uD834[\uDC00-\uDD64\uDD6A-\uDD6C\uDD73-\uDD7A\uDD83\uDD84\uDD8C-\uDDA9\uDDAE-\uDE41\uDE45-\uDFFF]|\uD835[\uDC55\uDC9D\uDCA0\uDCA1\uDCA3\uDCA4\uDCA7\uDCA8\uDCAD\uDCBA\uDCBC\uDCC4\uDD06\uDD0B\uDD0C\uDD15\uDD1D\uDD3A\uDD3F\uDD45\uDD47-\uDD49\uDD51\uDEA6\uDEA7\uDEC1\uDEDB\uDEFB\uDF15\uDF35\uDF4F\uDF6F\uDF89\uDFA9\uDFC3\uDFCC\uDFCD]|\uD836[\uDC00-\uDDFF\uDE37-\uDE3A\uDE6D-\uDE74\uDE76-\uDE83\uDE85-\uDE9A\uDEA0\uDEB0-\uDFFF]|\uD838[\uDC07\uDC19\uDC1A\uDC22\uDC25\uDC2B-\uDCFF\uDD2D-\uDD2F\uDD3E\uDD3F\uDD4A-\uDD4D\uDD4F-\uDEBF\uDEFA-\uDFFF]|\uD83A[\uDCC5-\uDCCF\uDCD7-\uDCFF\uDD4C-\uDD4F\uDD5A-\uDFFF]|\uD83B[\uDC00-\uDDFF\uDE04\uDE20\uDE23\uDE25\uDE26\uDE28\uDE33\uDE38\uDE3A\uDE3C-\uDE41\uDE43-\uDE46\uDE48\uDE4A\uDE4C\uDE50\uDE53\uDE55\uDE56\uDE58\uDE5A\uDE5C\uDE5E\uDE60\uDE63\uDE65\uDE66\uDE6B\uDE73\uDE78\uDE7D\uDE7F\uDE8A\uDE9C-\uDEA0\uDEA4\uDEAA\uDEBC-\uDFFF]|\uD83C[\uDC00-\uDD2F\uDD4A-\uDD4F\uDD6A-\uDD6F\uDD8A-\uDFFF]|\uD83E[\uDC00-\uDFEF\uDFFA-\uDFFF]|\uD869[\uDEDE-\uDEFF]|\uD86D[\uDF35-\uDF3F]|\uD86E[\uDC1E\uDC1F]|\uD873[\uDEA2-\uDEAF]|\uD87A[\uDFE1-\uDFFF]|\uD87E[\uDE1E-\uDFFF]|\uD884[\uDF4B-\uDFFF]|\uDB40[\uDC00-\uDCFF\uDDF0-\uDFFF]/g,Pw=Object.hasOwnProperty;class Ff{constructor(){this.occurrences,this.reset()}slug(n,t){const s=this;let a=Bw(n,t===!0);const o=a;for(;Pw.call(s.occurrences,a);)s.occurrences[o]++,a=o+"-"+s.occurrences[o];return s.occurrences[a]=0,a}reset(){this.occurrences=Object.create(null)}}function Bw(i,n){return typeof i!="string"?"":(n||(i=i.toLowerCase()),i.replace(Lw,"").replace(/ /g,"-"))}function $o(){return{async:!1,breaks:!1,extensions:null,gfm:!0,hooks:null,pedantic:!1,renderer:null,silent:!1,tokenizer:null,walkTokens:null}}let mi=$o();function Nf(i){mi=i}const Cf=/[&<>"']/,Uw=new RegExp(Cf.source,"g"),Of=/[<>"']|&(?!(#\d{1,7}|#[Xx][a-fA-F0-9]{1,6}|\w+);)/,Mw=new RegExp(Of.source,"g"),$w={"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;","'":"&#39;"},Jc=i=>$w[i];function Sn(i,n){if(n){if(Cf.test(i))return i.replace(Uw,Jc)}else if(Of.test(i))return i.replace(Mw,Jc);return i}const Gw=/(^|[^\[])\^/g;function Te(i,n){let t=typeof i=="string"?i:i.source;n=n||"";const s={replace:(a,o)=>{let u=typeof o=="string"?o:o.source;return u=u.replace(Gw,"$1"),t=t.replace(a,u),s},getRegex:()=>new RegExp(t,n)};return s}function Kc(i){try{i=encodeURI(i).replace(/%25/g,"%")}catch{return null}return i}const dr={exec:()=>null};function Xc(i,n){const t=i.replace(/\|/g,(o,u,f)=>{let h=!1,m=u;for(;--m>=0&&f[m]==="\\";)h=!h;return h?"|":" |"}),s=t.split(/ \|/);let a=0;if(s[0].trim()||s.shift(),s.length>0&&!s[s.length-1].trim()&&s.pop(),n)if(s.length>n)s.splice(n);else for(;s.length<n;)s.push("");for(;a<s.length;a++)s[a]=s[a].trim().replace(/\\\|/g,"|");return s}function or(i,n,t){const s=i.length;if(s===0)return"";let a=0;for(;a<s&&i.charAt(s-a-1)===n;)a++;return i.slice(0,s-a)}function Vw(i,n){if(i.indexOf(n[1])===-1)return-1;let t=0;for(let s=0;s<i.length;s++)if(i[s]==="\\")s++;else if(i[s]===n[0])t++;else if(i[s]===n[1]&&(t--,t<0))return s;return-1}function Zc(i,n,t,s){const a=n.href,o=n.title?Sn(n.title):null,u=i[1].replace(/\\([\[\]])/g,"$1");if(i[0].charAt(0)!=="!"){s.state.inLink=!0;const f={type:"link",raw:t,href:a,title:o,text:u,tokens:s.inlineTokens(u)};return s.state.inLink=!1,f}return{type:"image",raw:t,href:a,title:o,text:Sn(u)}}function Ww(i,n){const t=i.match(/^(\s+)(?:```)/);if(t===null)return n;const s=t[1];return n.split(`
`).map(a=>{const o=a.match(/^\s+/);if(o===null)return a;const[u]=o;return u.length>=s.length?a.slice(s.length):a}).join(`
`)}class ks{constructor(n){ve(this,"options");ve(this,"rules");ve(this,"lexer");this.options=n||mi}space(n){const t=this.rules.block.newline.exec(n);if(t&&t[0].length>0)return{type:"space",raw:t[0]}}code(n){const t=this.rules.block.code.exec(n);if(t){const s=t[0].replace(/^(?: {1,4}| {0,3}\t)/gm,"");return{type:"code",raw:t[0],codeBlockStyle:"indented",text:this.options.pedantic?s:or(s,`
`)}}}fences(n){const t=this.rules.block.fences.exec(n);if(t){const s=t[0],a=Ww(s,t[3]||"");return{type:"code",raw:s,lang:t[2]?t[2].trim().replace(this.rules.inline.anyPunctuation,"$1"):t[2],text:a}}}heading(n){const t=this.rules.block.heading.exec(n);if(t){let s=t[2].trim();if(/#$/.test(s)){const a=or(s,"#");(this.options.pedantic||!a||/ $/.test(a))&&(s=a.trim())}return{type:"heading",raw:t[0],depth:t[1].length,text:s,tokens:this.lexer.inline(s)}}}hr(n){const t=this.rules.block.hr.exec(n);if(t)return{type:"hr",raw:or(t[0],`
`)}}blockquote(n){const t=this.rules.block.blockquote.exec(n);if(t){let s=or(t[0],`
`).split(`
`),a="",o="";const u=[];for(;s.length>0;){let f=!1;const h=[];let m;for(m=0;m<s.length;m++)if(/^ {0,3}>/.test(s[m]))h.push(s[m]),f=!0;else if(!f)h.push(s[m]);else break;s=s.slice(m);const y=h.join(`
`),b=y.replace(/\n {0,3}((?:=+|-+) *)(?=\n|$)/g,`
    $1`).replace(/^ {0,3}>[ \t]?/gm,"");a=a?`${a}
${y}`:y,o=o?`${o}
${b}`:b;const O=this.lexer.state.top;if(this.lexer.state.top=!0,this.lexer.blockTokens(b,u,!0),this.lexer.state.top=O,s.length===0)break;const S=u[u.length-1];if((S==null?void 0:S.type)==="code")break;if((S==null?void 0:S.type)==="blockquote"){const k=S,P=k.raw+`
`+s.join(`
`),Y=this.blockquote(P);u[u.length-1]=Y,a=a.substring(0,a.length-k.raw.length)+Y.raw,o=o.substring(0,o.length-k.text.length)+Y.text;break}else if((S==null?void 0:S.type)==="list"){const k=S,P=k.raw+`
`+s.join(`
`),Y=this.list(P);u[u.length-1]=Y,a=a.substring(0,a.length-S.raw.length)+Y.raw,o=o.substring(0,o.length-k.raw.length)+Y.raw,s=P.substring(u[u.length-1].raw.length).split(`
`);continue}}return{type:"blockquote",raw:a,tokens:u,text:o}}}list(n){let t=this.rules.block.list.exec(n);if(t){let s=t[1].trim();const a=s.length>1,o={type:"list",raw:"",ordered:a,start:a?+s.slice(0,-1):"",loose:!1,items:[]};s=a?`\\d{1,9}\\${s.slice(-1)}`:`\\${s}`,this.options.pedantic&&(s=a?s:"[*+-]");const u=new RegExp(`^( {0,3}${s})((?:[	 ][^\\n]*)?(?:\\n|$))`);let f=!1;for(;n;){let h=!1,m="",y="";if(!(t=u.exec(n))||this.rules.block.hr.test(n))break;m=t[0],n=n.substring(m.length);let b=t[2].split(`
`,1)[0].replace(/^\t+/,ce=>" ".repeat(3*ce.length)),O=n.split(`
`,1)[0],S=!b.trim(),k=0;if(this.options.pedantic?(k=2,y=b.trimStart()):S?k=t[1].length+1:(k=t[2].search(/[^ ]/),k=k>4?1:k,y=b.slice(k),k+=t[1].length),S&&/^[ \t]*$/.test(O)&&(m+=O+`
`,n=n.substring(O.length+1),h=!0),!h){const ce=new RegExp(`^ {0,${Math.min(3,k-1)}}(?:[*+-]|\\d{1,9}[.)])((?:[ 	][^\\n]*)?(?:\\n|$))`),_e=new RegExp(`^ {0,${Math.min(3,k-1)}}((?:- *){3,}|(?:_ *){3,}|(?:\\* *){3,})(?:\\n+|$)`),ye=new RegExp(`^ {0,${Math.min(3,k-1)}}(?:\`\`\`|~~~)`),Re=new RegExp(`^ {0,${Math.min(3,k-1)}}#`),je=new RegExp(`^ {0,${Math.min(3,k-1)}}<[a-z].*>`,"i");for(;n;){const Qe=n.split(`
`,1)[0];let xe;if(O=Qe,this.options.pedantic?(O=O.replace(/^ {1,4}(?=( {4})*[^ ])/g,"  "),xe=O):xe=O.replace(/\t/g,"    "),ye.test(O)||Re.test(O)||je.test(O)||ce.test(O)||_e.test(O))break;if(xe.search(/[^ ]/)>=k||!O.trim())y+=`
`+xe.slice(k);else{if(S||b.replace(/\t/g,"    ").search(/[^ ]/)>=4||ye.test(b)||Re.test(b)||_e.test(b))break;y+=`
`+O}!S&&!O.trim()&&(S=!0),m+=Qe+`
`,n=n.substring(Qe.length+1),b=xe.slice(k)}}o.loose||(f?o.loose=!0:/\n[ \t]*\n[ \t]*$/.test(m)&&(f=!0));let P=null,Y;this.options.gfm&&(P=/^\[[ xX]\] /.exec(y),P&&(Y=P[0]!=="[ ] ",y=y.replace(/^\[[ xX]\] +/,""))),o.items.push({type:"list_item",raw:m,task:!!P,checked:Y,loose:!1,text:y,tokens:[]}),o.raw+=m}o.items[o.items.length-1].raw=o.items[o.items.length-1].raw.trimEnd(),o.items[o.items.length-1].text=o.items[o.items.length-1].text.trimEnd(),o.raw=o.raw.trimEnd();for(let h=0;h<o.items.length;h++)if(this.lexer.state.top=!1,o.items[h].tokens=this.lexer.blockTokens(o.items[h].text,[]),!o.loose){const m=o.items[h].tokens.filter(b=>b.type==="space"),y=m.length>0&&m.some(b=>/\n.*\n/.test(b.raw));o.loose=y}if(o.loose)for(let h=0;h<o.items.length;h++)o.items[h].loose=!0;return o}}html(n){const t=this.rules.block.html.exec(n);if(t)return{type:"html",block:!0,raw:t[0],pre:t[1]==="pre"||t[1]==="script"||t[1]==="style",text:t[0]}}def(n){const t=this.rules.block.def.exec(n);if(t){const s=t[1].toLowerCase().replace(/\s+/g," "),a=t[2]?t[2].replace(/^<(.*)>$/,"$1").replace(this.rules.inline.anyPunctuation,"$1"):"",o=t[3]?t[3].substring(1,t[3].length-1).replace(this.rules.inline.anyPunctuation,"$1"):t[3];return{type:"def",tag:s,raw:t[0],href:a,title:o}}}table(n){const t=this.rules.block.table.exec(n);if(!t||!/[:|]/.test(t[2]))return;const s=Xc(t[1]),a=t[2].replace(/^\||\| *$/g,"").split("|"),o=t[3]&&t[3].trim()?t[3].replace(/\n[ \t]*$/,"").split(`
`):[],u={type:"table",raw:t[0],header:[],align:[],rows:[]};if(s.length===a.length){for(const f of a)/^ *-+: *$/.test(f)?u.align.push("right"):/^ *:-+: *$/.test(f)?u.align.push("center"):/^ *:-+ *$/.test(f)?u.align.push("left"):u.align.push(null);for(let f=0;f<s.length;f++)u.header.push({text:s[f],tokens:this.lexer.inline(s[f]),header:!0,align:u.align[f]});for(const f of o)u.rows.push(Xc(f,u.header.length).map((h,m)=>({text:h,tokens:this.lexer.inline(h),header:!1,align:u.align[m]})));return u}}lheading(n){const t=this.rules.block.lheading.exec(n);if(t)return{type:"heading",raw:t[0],depth:t[2].charAt(0)==="="?1:2,text:t[1],tokens:this.lexer.inline(t[1])}}paragraph(n){const t=this.rules.block.paragraph.exec(n);if(t){const s=t[1].charAt(t[1].length-1)===`
`?t[1].slice(0,-1):t[1];return{type:"paragraph",raw:t[0],text:s,tokens:this.lexer.inline(s)}}}text(n){const t=this.rules.block.text.exec(n);if(t)return{type:"text",raw:t[0],text:t[0],tokens:this.lexer.inline(t[0])}}escape(n){const t=this.rules.inline.escape.exec(n);if(t)return{type:"escape",raw:t[0],text:Sn(t[1])}}tag(n){const t=this.rules.inline.tag.exec(n);if(t)return!this.lexer.state.inLink&&/^<a /i.test(t[0])?this.lexer.state.inLink=!0:this.lexer.state.inLink&&/^<\/a>/i.test(t[0])&&(this.lexer.state.inLink=!1),!this.lexer.state.inRawBlock&&/^<(pre|code|kbd|script)(\s|>)/i.test(t[0])?this.lexer.state.inRawBlock=!0:this.lexer.state.inRawBlock&&/^<\/(pre|code|kbd|script)(\s|>)/i.test(t[0])&&(this.lexer.state.inRawBlock=!1),{type:"html",raw:t[0],inLink:this.lexer.state.inLink,inRawBlock:this.lexer.state.inRawBlock,block:!1,text:t[0]}}link(n){const t=this.rules.inline.link.exec(n);if(t){const s=t[2].trim();if(!this.options.pedantic&&/^</.test(s)){if(!/>$/.test(s))return;const u=or(s.slice(0,-1),"\\");if((s.length-u.length)%2===0)return}else{const u=Vw(t[2],"()");if(u>-1){const h=(t[0].indexOf("!")===0?5:4)+t[1].length+u;t[2]=t[2].substring(0,u),t[0]=t[0].substring(0,h).trim(),t[3]=""}}let a=t[2],o="";if(this.options.pedantic){const u=/^([^'"]*[^\s])\s+(['"])(.*)\2/.exec(a);u&&(a=u[1],o=u[3])}else o=t[3]?t[3].slice(1,-1):"";return a=a.trim(),/^</.test(a)&&(this.options.pedantic&&!/>$/.test(s)?a=a.slice(1):a=a.slice(1,-1)),Zc(t,{href:a&&a.replace(this.rules.inline.anyPunctuation,"$1"),title:o&&o.replace(this.rules.inline.anyPunctuation,"$1")},t[0],this.lexer)}}reflink(n,t){let s;if((s=this.rules.inline.reflink.exec(n))||(s=this.rules.inline.nolink.exec(n))){const a=(s[2]||s[1]).replace(/\s+/g," "),o=t[a.toLowerCase()];if(!o){const u=s[0].charAt(0);return{type:"text",raw:u,text:u}}return Zc(s,o,s[0],this.lexer)}}emStrong(n,t,s=""){let a=this.rules.inline.emStrongLDelim.exec(n);if(!a||a[3]&&s.match(/[\p{L}\p{N}]/u))return;if(!(a[1]||a[2]||"")||!s||this.rules.inline.punctuation.exec(s)){const u=[...a[0]].length-1;let f,h,m=u,y=0;const b=a[0][0]==="*"?this.rules.inline.emStrongRDelimAst:this.rules.inline.emStrongRDelimUnd;for(b.lastIndex=0,t=t.slice(-1*n.length+u);(a=b.exec(t))!=null;){if(f=a[1]||a[2]||a[3]||a[4]||a[5]||a[6],!f)continue;if(h=[...f].length,a[3]||a[4]){m+=h;continue}else if((a[5]||a[6])&&u%3&&!((u+h)%3)){y+=h;continue}if(m-=h,m>0)continue;h=Math.min(h,h+m+y);const O=[...a[0]][0].length,S=n.slice(0,u+a.index+O+h);if(Math.min(u,h)%2){const P=S.slice(1,-1);return{type:"em",raw:S,text:P,tokens:this.lexer.inlineTokens(P)}}const k=S.slice(2,-2);return{type:"strong",raw:S,text:k,tokens:this.lexer.inlineTokens(k)}}}}codespan(n){const t=this.rules.inline.code.exec(n);if(t){let s=t[2].replace(/\n/g," ");const a=/[^ ]/.test(s),o=/^ /.test(s)&&/ $/.test(s);return a&&o&&(s=s.substring(1,s.length-1)),s=Sn(s,!0),{type:"codespan",raw:t[0],text:s}}}br(n){const t=this.rules.inline.br.exec(n);if(t)return{type:"br",raw:t[0]}}del(n){const t=this.rules.inline.del.exec(n);if(t)return{type:"del",raw:t[0],text:t[2],tokens:this.lexer.inlineTokens(t[2])}}autolink(n){const t=this.rules.inline.autolink.exec(n);if(t){let s,a;return t[2]==="@"?(s=Sn(t[1]),a="mailto:"+s):(s=Sn(t[1]),a=s),{type:"link",raw:t[0],text:s,href:a,tokens:[{type:"text",raw:s,text:s}]}}}url(n){var s;let t;if(t=this.rules.inline.url.exec(n)){let a,o;if(t[2]==="@")a=Sn(t[0]),o="mailto:"+a;else{let u;do u=t[0],t[0]=((s=this.rules.inline._backpedal.exec(t[0]))==null?void 0:s[0])??"";while(u!==t[0]);a=Sn(t[0]),t[1]==="www."?o="http://"+t[0]:o=t[0]}return{type:"link",raw:t[0],text:a,href:o,tokens:[{type:"text",raw:a,text:a}]}}}inlineText(n){const t=this.rules.inline.text.exec(n);if(t){let s;return this.lexer.state.inRawBlock?s=t[0]:s=Sn(t[0]),{type:"text",raw:t[0],text:s}}}}const qw=/^(?:[ \t]*(?:\n|$))+/,Yw=/^((?: {4}| {0,3}\t)[^\n]+(?:\n(?:[ \t]*(?:\n|$))*)?)+/,jw=/^ {0,3}(`{3,}(?=[^`\n]*(?:\n|$))|~{3,})([^\n]*)(?:\n|$)(?:|([\s\S]*?)(?:\n|$))(?: {0,3}\1[~`]* *(?=\n|$)|$)/,Er=/^ {0,3}((?:-[\t ]*){3,}|(?:_[ \t]*){3,}|(?:\*[ \t]*){3,})(?:\n+|$)/,Hw=/^ {0,3}(#{1,6})(?=\s|$)(.*)(?:\n+|$)/,Rf=/(?:[*+-]|\d{1,9}[.)])/,xf=Te(/^(?!bull |blockCode|fences|blockquote|heading|html)((?:.|\n(?!\s*?\n|bull |blockCode|fences|blockquote|heading|html))+?)\n {0,3}(=+|-+) *(?:\n+|$)/).replace(/bull/g,Rf).replace(/blockCode/g,/(?: {4}| {0,3}\t)/).replace(/fences/g,/ {0,3}(?:`{3,}|~{3,})/).replace(/blockquote/g,/ {0,3}>/).replace(/heading/g,/ {0,3}#{1,6}/).replace(/html/g,/ {0,3}<[^\n>]+>\n/).getRegex(),Go=/^([^\n]+(?:\n(?!hr|heading|lheading|blockquote|fences|list|html|table| +\n)[^\n]+)*)/,zw=/^[^\n]+/,Vo=/(?!\s*\])(?:\\.|[^\[\]\\])+/,Qw=Te(/^ {0,3}\[(label)\]: *(?:\n[ \t]*)?([^<\s][^\s]*|<.*?>)(?:(?: +(?:\n[ \t]*)?| *\n[ \t]*)(title))? *(?:\n+|$)/).replace("label",Vo).replace("title",/(?:"(?:\\"?|[^"\\])*"|'[^'\n]*(?:\n[^'\n]+)*\n?'|\([^()]*\))/).getRegex(),Jw=Te(/^( {0,3}bull)([ \t][^\n]+?)?(?:\n|$)/).replace(/bull/g,Rf).getRegex(),Ms="address|article|aside|base|basefont|blockquote|body|caption|center|col|colgroup|dd|details|dialog|dir|div|dl|dt|fieldset|figcaption|figure|footer|form|frame|frameset|h[1-6]|head|header|hr|html|iframe|legend|li|link|main|menu|menuitem|meta|nav|noframes|ol|optgroup|option|p|param|search|section|summary|table|tbody|td|tfoot|th|thead|title|tr|track|ul",Wo=/<!--(?:-?>|[\s\S]*?(?:-->|$))/,Kw=Te("^ {0,3}(?:<(script|pre|style|textarea)[\\s>][\\s\\S]*?(?:</\\1>[^\\n]*\\n+|$)|comment[^\\n]*(\\n+|$)|<\\?[\\s\\S]*?(?:\\?>\\n*|$)|<![A-Z][\\s\\S]*?(?:>\\n*|$)|<!\\[CDATA\\[[\\s\\S]*?(?:\\]\\]>\\n*|$)|</?(tag)(?: +|\\n|/?>)[\\s\\S]*?(?:(?:\\n[ 	]*)+\\n|$)|<(?!script|pre|style|textarea)([a-z][\\w-]*)(?:attribute)*? */?>(?=[ \\t]*(?:\\n|$))[\\s\\S]*?(?:(?:\\n[ 	]*)+\\n|$)|</(?!script|pre|style|textarea)[a-z][\\w-]*\\s*>(?=[ \\t]*(?:\\n|$))[\\s\\S]*?(?:(?:\\n[ 	]*)+\\n|$))","i").replace("comment",Wo).replace("tag",Ms).replace("attribute",/ +[a-zA-Z:_][\w.:-]*(?: *= *"[^"\n]*"| *= *'[^'\n]*'| *= *[^\s"'=<>`]+)?/).getRegex(),Lf=Te(Go).replace("hr",Er).replace("heading"," {0,3}#{1,6}(?:\\s|$)").replace("|lheading","").replace("|table","").replace("blockquote"," {0,3}>").replace("fences"," {0,3}(?:`{3,}(?=[^`\\n]*\\n)|~{3,})[^\\n]*\\n").replace("list"," {0,3}(?:[*+-]|1[.)]) ").replace("html","</?(?:tag)(?: +|\\n|/?>)|<(?:script|pre|style|textarea|!--)").replace("tag",Ms).getRegex(),Xw=Te(/^( {0,3}> ?(paragraph|[^\n]*)(?:\n|$))+/).replace("paragraph",Lf).getRegex(),qo={blockquote:Xw,code:Yw,def:Qw,fences:jw,heading:Hw,hr:Er,html:Kw,lheading:xf,list:Jw,newline:qw,paragraph:Lf,table:dr,text:zw},ef=Te("^ *([^\\n ].*)\\n {0,3}((?:\\| *)?:?-+:? *(?:\\| *:?-+:? *)*(?:\\| *)?)(?:\\n((?:(?! *\\n|hr|heading|blockquote|code|fences|list|html).*(?:\\n|$))*)\\n*|$)").replace("hr",Er).replace("heading"," {0,3}#{1,6}(?:\\s|$)").replace("blockquote"," {0,3}>").replace("code","(?: {4}| {0,3}	)[^\\n]").replace("fences"," {0,3}(?:`{3,}(?=[^`\\n]*\\n)|~{3,})[^\\n]*\\n").replace("list"," {0,3}(?:[*+-]|1[.)]) ").replace("html","</?(?:tag)(?: +|\\n|/?>)|<(?:script|pre|style|textarea|!--)").replace("tag",Ms).getRegex(),Zw={...qo,table:ef,paragraph:Te(Go).replace("hr",Er).replace("heading"," {0,3}#{1,6}(?:\\s|$)").replace("|lheading","").replace("table",ef).replace("blockquote"," {0,3}>").replace("fences"," {0,3}(?:`{3,}(?=[^`\\n]*\\n)|~{3,})[^\\n]*\\n").replace("list"," {0,3}(?:[*+-]|1[.)]) ").replace("html","</?(?:tag)(?: +|\\n|/?>)|<(?:script|pre|style|textarea|!--)").replace("tag",Ms).getRegex()},e0={...qo,html:Te(`^ *(?:comment *(?:\\n|\\s*$)|<(tag)[\\s\\S]+?</\\1> *(?:\\n{2,}|\\s*$)|<tag(?:"[^"]*"|'[^']*'|\\s[^'"/>\\s]*)*?/?> *(?:\\n{2,}|\\s*$))`).replace("comment",Wo).replace(/tag/g,"(?!(?:a|em|strong|small|s|cite|q|dfn|abbr|data|time|code|var|samp|kbd|sub|sup|i|b|u|mark|ruby|rt|rp|bdi|bdo|span|br|wbr|ins|del|img)\\b)\\w+(?!:|[^\\w\\s@]*@)\\b").getRegex(),def:/^ *\[([^\]]+)\]: *<?([^\s>]+)>?(?: +(["(][^\n]+[")]))? *(?:\n+|$)/,heading:/^(#{1,6})(.*)(?:\n+|$)/,fences:dr,lheading:/^(.+?)\n {0,3}(=+|-+) *(?:\n+|$)/,paragraph:Te(Go).replace("hr",Er).replace("heading",` *#{1,6} *[^
]`).replace("lheading",xf).replace("|table","").replace("blockquote"," {0,3}>").replace("|fences","").replace("|list","").replace("|html","").replace("|tag","").getRegex()},Pf=/^\\([!"#$%&'()*+,\-./:;<=>?@\[\]\\^_`{|}~])/,n0=/^(`+)([^`]|[^`][\s\S]*?[^`])\1(?!`)/,Bf=/^( {2,}|\\)\n(?!\s*$)/,t0=/^(`+|[^`])(?:(?= {2,}\n)|[\s\S]*?(?:(?=[\\<!\[`*_]|\b_|$)|[^ ](?= {2,}\n)))/,Ir="\\p{P}\\p{S}",i0=Te(/^((?![*_])[\spunctuation])/,"u").replace(/punctuation/g,Ir).getRegex(),r0=/\[[^[\]]*?\]\([^\(\)]*?\)|`[^`]*?`|<[^<>]*?>/g,s0=Te(/^(?:\*+(?:((?!\*)[punct])|[^\s*]))|^_+(?:((?!_)[punct])|([^\s_]))/,"u").replace(/punct/g,Ir).getRegex(),a0=Te("^[^_*]*?__[^_*]*?\\*[^_*]*?(?=__)|[^*]+(?=[^*])|(?!\\*)[punct](\\*+)(?=[\\s]|$)|[^punct\\s](\\*+)(?!\\*)(?=[punct\\s]|$)|(?!\\*)[punct\\s](\\*+)(?=[^punct\\s])|[\\s](\\*+)(?!\\*)(?=[punct])|(?!\\*)[punct](\\*+)(?!\\*)(?=[punct])|[^punct\\s](\\*+)(?=[^punct\\s])","gu").replace(/punct/g,Ir).getRegex(),o0=Te("^[^_*]*?\\*\\*[^_*]*?_[^_*]*?(?=\\*\\*)|[^_]+(?=[^_])|(?!_)[punct](_+)(?=[\\s]|$)|[^punct\\s](_+)(?!_)(?=[punct\\s]|$)|(?!_)[punct\\s](_+)(?=[^punct\\s])|[\\s](_+)(?!_)(?=[punct])|(?!_)[punct](_+)(?!_)(?=[punct])","gu").replace(/punct/g,Ir).getRegex(),l0=Te(/\\([punct])/,"gu").replace(/punct/g,Ir).getRegex(),u0=Te(/^<(scheme:[^\s\x00-\x1f<>]*|email)>/).replace("scheme",/[a-zA-Z][a-zA-Z0-9+.-]{1,31}/).replace("email",/[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+(@)[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?(?:\.[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?)+(?![-_])/).getRegex(),c0=Te(Wo).replace("(?:-->|$)","-->").getRegex(),f0=Te("^comment|^</[a-zA-Z][\\w:-]*\\s*>|^<[a-zA-Z][\\w-]*(?:attribute)*?\\s*/?>|^<\\?[\\s\\S]*?\\?>|^<![a-zA-Z]+\\s[\\s\\S]*?>|^<!\\[CDATA\\[[\\s\\S]*?\\]\\]>").replace("comment",c0).replace("attribute",/\s+[a-zA-Z:_][\w.:-]*(?:\s*=\s*"[^"]*"|\s*=\s*'[^']*'|\s*=\s*[^\s"'=<>`]+)?/).getRegex(),Fs=/(?:\[(?:\\.|[^\[\]\\])*\]|\\.|`[^`]*`|[^\[\]\\`])*?/,h0=Te(/^!?\[(label)\]\(\s*(href)(?:\s+(title))?\s*\)/).replace("label",Fs).replace("href",/<(?:\\.|[^\n<>\\])+>|[^\s\x00-\x1f]*/).replace("title",/"(?:\\"?|[^"\\])*"|'(?:\\'?|[^'\\])*'|\((?:\\\)?|[^)\\])*\)/).getRegex(),Uf=Te(/^!?\[(label)\]\[(ref)\]/).replace("label",Fs).replace("ref",Vo).getRegex(),Mf=Te(/^!?\[(ref)\](?:\[\])?/).replace("ref",Vo).getRegex(),d0=Te("reflink|nolink(?!\\()","g").replace("reflink",Uf).replace("nolink",Mf).getRegex(),Yo={_backpedal:dr,anyPunctuation:l0,autolink:u0,blockSkip:r0,br:Bf,code:n0,del:dr,emStrongLDelim:s0,emStrongRDelimAst:a0,emStrongRDelimUnd:o0,escape:Pf,link:h0,nolink:Mf,punctuation:i0,reflink:Uf,reflinkSearch:d0,tag:f0,text:t0,url:dr},p0={...Yo,link:Te(/^!?\[(label)\]\((.*?)\)/).replace("label",Fs).getRegex(),reflink:Te(/^!?\[(label)\]\s*\[([^\]]*)\]/).replace("label",Fs).getRegex()},Ao={...Yo,escape:Te(Pf).replace("])","~|])").getRegex(),url:Te(/^((?:ftp|https?):\/\/|www\.)(?:[a-zA-Z0-9\-]+\.?)+[^\s<]*|^email/,"i").replace("email",/[A-Za-z0-9._+-]+(@)[a-zA-Z0-9-_]+(?:\.[a-zA-Z0-9-_]*[a-zA-Z0-9])+(?![-_])/).getRegex(),_backpedal:/(?:[^?!.,:;*_'"~()&]+|\([^)]*\)|&(?![a-zA-Z0-9]+;$)|[?!.,:;*_'"~)]+(?!$))+/,del:/^(~~?)(?=[^\s~])([\s\S]*?[^\s~])\1(?=[^~]|$)/,text:/^([`~]+|[^`~])(?:(?= {2,}\n)|(?=[a-zA-Z0-9.!#$%&'*+\/=?_`{\|}~-]+@)|[\s\S]*?(?:(?=[\\<!\[`*~_]|\b_|https?:\/\/|ftp:\/\/|www\.|$)|[^ ](?= {2,}\n)|[^a-zA-Z0-9.!#$%&'*+\/=?_`{\|}~-](?=[a-zA-Z0-9.!#$%&'*+\/=?_`{\|}~-]+@)))/},g0={...Ao,br:Te(Bf).replace("{2,}","*").getRegex(),text:Te(Ao.text).replace("\\b_","\\b_| {2,}\\n").replace(/\{2,\}/g,"*").getRegex()},bs={normal:qo,gfm:Zw,pedantic:e0},lr={normal:Yo,gfm:Ao,breaks:g0,pedantic:p0};class kn{constructor(n){ve(this,"tokens");ve(this,"options");ve(this,"state");ve(this,"tokenizer");ve(this,"inlineQueue");this.tokens=[],this.tokens.links=Object.create(null),this.options=n||mi,this.options.tokenizer=this.options.tokenizer||new ks,this.tokenizer=this.options.tokenizer,this.tokenizer.options=this.options,this.tokenizer.lexer=this,this.inlineQueue=[],this.state={inLink:!1,inRawBlock:!1,top:!0};const t={block:bs.normal,inline:lr.normal};this.options.pedantic?(t.block=bs.pedantic,t.inline=lr.pedantic):this.options.gfm&&(t.block=bs.gfm,this.options.breaks?t.inline=lr.breaks:t.inline=lr.gfm),this.tokenizer.rules=t}static get rules(){return{block:bs,inline:lr}}static lex(n,t){return new kn(t).lex(n)}static lexInline(n,t){return new kn(t).inlineTokens(n)}lex(n){n=n.replace(/\r\n|\r/g,`
`),this.blockTokens(n,this.tokens);for(let t=0;t<this.inlineQueue.length;t++){const s=this.inlineQueue[t];this.inlineTokens(s.src,s.tokens)}return this.inlineQueue=[],this.tokens}blockTokens(n,t=[],s=!1){this.options.pedantic&&(n=n.replace(/\t/g,"    ").replace(/^ +$/gm,""));let a,o,u;for(;n;)if(!(this.options.extensions&&this.options.extensions.block&&this.options.extensions.block.some(f=>(a=f.call({lexer:this},n,t))?(n=n.substring(a.raw.length),t.push(a),!0):!1))){if(a=this.tokenizer.space(n)){n=n.substring(a.raw.length),a.raw.length===1&&t.length>0?t[t.length-1].raw+=`
`:t.push(a);continue}if(a=this.tokenizer.code(n)){n=n.substring(a.raw.length),o=t[t.length-1],o&&(o.type==="paragraph"||o.type==="text")?(o.raw+=`
`+a.raw,o.text+=`
`+a.text,this.inlineQueue[this.inlineQueue.length-1].src=o.text):t.push(a);continue}if(a=this.tokenizer.fences(n)){n=n.substring(a.raw.length),t.push(a);continue}if(a=this.tokenizer.heading(n)){n=n.substring(a.raw.length),t.push(a);continue}if(a=this.tokenizer.hr(n)){n=n.substring(a.raw.length),t.push(a);continue}if(a=this.tokenizer.blockquote(n)){n=n.substring(a.raw.length),t.push(a);continue}if(a=this.tokenizer.list(n)){n=n.substring(a.raw.length),t.push(a);continue}if(a=this.tokenizer.html(n)){n=n.substring(a.raw.length),t.push(a);continue}if(a=this.tokenizer.def(n)){n=n.substring(a.raw.length),o=t[t.length-1],o&&(o.type==="paragraph"||o.type==="text")?(o.raw+=`
`+a.raw,o.text+=`
`+a.raw,this.inlineQueue[this.inlineQueue.length-1].src=o.text):this.tokens.links[a.tag]||(this.tokens.links[a.tag]={href:a.href,title:a.title});continue}if(a=this.tokenizer.table(n)){n=n.substring(a.raw.length),t.push(a);continue}if(a=this.tokenizer.lheading(n)){n=n.substring(a.raw.length),t.push(a);continue}if(u=n,this.options.extensions&&this.options.extensions.startBlock){let f=1/0;const h=n.slice(1);let m;this.options.extensions.startBlock.forEach(y=>{m=y.call({lexer:this},h),typeof m=="number"&&m>=0&&(f=Math.min(f,m))}),f<1/0&&f>=0&&(u=n.substring(0,f+1))}if(this.state.top&&(a=this.tokenizer.paragraph(u))){o=t[t.length-1],s&&(o==null?void 0:o.type)==="paragraph"?(o.raw+=`
`+a.raw,o.text+=`
`+a.text,this.inlineQueue.pop(),this.inlineQueue[this.inlineQueue.length-1].src=o.text):t.push(a),s=u.length!==n.length,n=n.substring(a.raw.length);continue}if(a=this.tokenizer.text(n)){n=n.substring(a.raw.length),o=t[t.length-1],o&&o.type==="text"?(o.raw+=`
`+a.raw,o.text+=`
`+a.text,this.inlineQueue.pop(),this.inlineQueue[this.inlineQueue.length-1].src=o.text):t.push(a);continue}if(n){const f="Infinite loop on byte: "+n.charCodeAt(0);if(this.options.silent){console.error(f);break}else throw new Error(f)}}return this.state.top=!0,t}inline(n,t=[]){return this.inlineQueue.push({src:n,tokens:t}),t}inlineTokens(n,t=[]){let s,a,o,u=n,f,h,m;if(this.tokens.links){const y=Object.keys(this.tokens.links);if(y.length>0)for(;(f=this.tokenizer.rules.inline.reflinkSearch.exec(u))!=null;)y.includes(f[0].slice(f[0].lastIndexOf("[")+1,-1))&&(u=u.slice(0,f.index)+"["+"a".repeat(f[0].length-2)+"]"+u.slice(this.tokenizer.rules.inline.reflinkSearch.lastIndex))}for(;(f=this.tokenizer.rules.inline.blockSkip.exec(u))!=null;)u=u.slice(0,f.index)+"["+"a".repeat(f[0].length-2)+"]"+u.slice(this.tokenizer.rules.inline.blockSkip.lastIndex);for(;(f=this.tokenizer.rules.inline.anyPunctuation.exec(u))!=null;)u=u.slice(0,f.index)+"++"+u.slice(this.tokenizer.rules.inline.anyPunctuation.lastIndex);for(;n;)if(h||(m=""),h=!1,!(this.options.extensions&&this.options.extensions.inline&&this.options.extensions.inline.some(y=>(s=y.call({lexer:this},n,t))?(n=n.substring(s.raw.length),t.push(s),!0):!1))){if(s=this.tokenizer.escape(n)){n=n.substring(s.raw.length),t.push(s);continue}if(s=this.tokenizer.tag(n)){n=n.substring(s.raw.length),a=t[t.length-1],a&&s.type==="text"&&a.type==="text"?(a.raw+=s.raw,a.text+=s.text):t.push(s);continue}if(s=this.tokenizer.link(n)){n=n.substring(s.raw.length),t.push(s);continue}if(s=this.tokenizer.reflink(n,this.tokens.links)){n=n.substring(s.raw.length),a=t[t.length-1],a&&s.type==="text"&&a.type==="text"?(a.raw+=s.raw,a.text+=s.text):t.push(s);continue}if(s=this.tokenizer.emStrong(n,u,m)){n=n.substring(s.raw.length),t.push(s);continue}if(s=this.tokenizer.codespan(n)){n=n.substring(s.raw.length),t.push(s);continue}if(s=this.tokenizer.br(n)){n=n.substring(s.raw.length),t.push(s);continue}if(s=this.tokenizer.del(n)){n=n.substring(s.raw.length),t.push(s);continue}if(s=this.tokenizer.autolink(n)){n=n.substring(s.raw.length),t.push(s);continue}if(!this.state.inLink&&(s=this.tokenizer.url(n))){n=n.substring(s.raw.length),t.push(s);continue}if(o=n,this.options.extensions&&this.options.extensions.startInline){let y=1/0;const b=n.slice(1);let O;this.options.extensions.startInline.forEach(S=>{O=S.call({lexer:this},b),typeof O=="number"&&O>=0&&(y=Math.min(y,O))}),y<1/0&&y>=0&&(o=n.substring(0,y+1))}if(s=this.tokenizer.inlineText(o)){n=n.substring(s.raw.length),s.raw.slice(-1)!=="_"&&(m=s.raw.slice(-1)),h=!0,a=t[t.length-1],a&&a.type==="text"?(a.raw+=s.raw,a.text+=s.text):t.push(s);continue}if(n){const y="Infinite loop on byte: "+n.charCodeAt(0);if(this.options.silent){console.error(y);break}else throw new Error(y)}}return t}}class Ns{constructor(n){ve(this,"options");ve(this,"parser");this.options=n||mi}space(n){return""}code({text:n,lang:t,escaped:s}){var u;const a=(u=(t||"").match(/^\S*/))==null?void 0:u[0],o=n.replace(/\n$/,"")+`
`;return a?'<pre><code class="language-'+Sn(a)+'">'+(s?o:Sn(o,!0))+`</code></pre>
`:"<pre><code>"+(s?o:Sn(o,!0))+`</code></pre>
`}blockquote({tokens:n}){return`<blockquote>
${this.parser.parse(n)}</blockquote>
`}html({text:n}){return n}heading({tokens:n,depth:t}){return`<h${t}>${this.parser.parseInline(n)}</h${t}>
`}hr(n){return`<hr>
`}list(n){const t=n.ordered,s=n.start;let a="";for(let f=0;f<n.items.length;f++){const h=n.items[f];a+=this.listitem(h)}const o=t?"ol":"ul",u=t&&s!==1?' start="'+s+'"':"";return"<"+o+u+`>
`+a+"</"+o+`>
`}listitem(n){let t="";if(n.task){const s=this.checkbox({checked:!!n.checked});n.loose?n.tokens.length>0&&n.tokens[0].type==="paragraph"?(n.tokens[0].text=s+" "+n.tokens[0].text,n.tokens[0].tokens&&n.tokens[0].tokens.length>0&&n.tokens[0].tokens[0].type==="text"&&(n.tokens[0].tokens[0].text=s+" "+n.tokens[0].tokens[0].text)):n.tokens.unshift({type:"text",raw:s+" ",text:s+" "}):t+=s+" "}return t+=this.parser.parse(n.tokens,!!n.loose),`<li>${t}</li>
`}checkbox({checked:n}){return"<input "+(n?'checked="" ':"")+'disabled="" type="checkbox">'}paragraph({tokens:n}){return`<p>${this.parser.parseInline(n)}</p>
`}table(n){let t="",s="";for(let o=0;o<n.header.length;o++)s+=this.tablecell(n.header[o]);t+=this.tablerow({text:s});let a="";for(let o=0;o<n.rows.length;o++){const u=n.rows[o];s="";for(let f=0;f<u.length;f++)s+=this.tablecell(u[f]);a+=this.tablerow({text:s})}return a&&(a=`<tbody>${a}</tbody>`),`<table>
<thead>
`+t+`</thead>
`+a+`</table>
`}tablerow({text:n}){return`<tr>
${n}</tr>
`}tablecell(n){const t=this.parser.parseInline(n.tokens),s=n.header?"th":"td";return(n.align?`<${s} align="${n.align}">`:`<${s}>`)+t+`</${s}>
`}strong({tokens:n}){return`<strong>${this.parser.parseInline(n)}</strong>`}em({tokens:n}){return`<em>${this.parser.parseInline(n)}</em>`}codespan({text:n}){return`<code>${n}</code>`}br(n){return"<br>"}del({tokens:n}){return`<del>${this.parser.parseInline(n)}</del>`}link({href:n,title:t,tokens:s}){const a=this.parser.parseInline(s),o=Kc(n);if(o===null)return a;n=o;let u='<a href="'+n+'"';return t&&(u+=' title="'+t+'"'),u+=">"+a+"</a>",u}image({href:n,title:t,text:s}){const a=Kc(n);if(a===null)return s;n=a;let o=`<img src="${n}" alt="${s}"`;return t&&(o+=` title="${t}"`),o+=">",o}text(n){return"tokens"in n&&n.tokens?this.parser.parseInline(n.tokens):n.text}}class jo{strong({text:n}){return n}em({text:n}){return n}codespan({text:n}){return n}del({text:n}){return n}html({text:n}){return n}text({text:n}){return n}link({text:n}){return""+n}image({text:n}){return""+n}br(){return""}}class $n{constructor(n){ve(this,"options");ve(this,"renderer");ve(this,"textRenderer");this.options=n||mi,this.options.renderer=this.options.renderer||new Ns,this.renderer=this.options.renderer,this.renderer.options=this.options,this.renderer.parser=this,this.textRenderer=new jo}static parse(n,t){return new $n(t).parse(n)}static parseInline(n,t){return new $n(t).parseInline(n)}parse(n,t=!0){let s="";for(let a=0;a<n.length;a++){const o=n[a];if(this.options.extensions&&this.options.extensions.renderers&&this.options.extensions.renderers[o.type]){const f=o,h=this.options.extensions.renderers[f.type].call({parser:this},f);if(h!==!1||!["space","hr","heading","code","table","blockquote","list","html","paragraph","text"].includes(f.type)){s+=h||"";continue}}const u=o;switch(u.type){case"space":{s+=this.renderer.space(u);continue}case"hr":{s+=this.renderer.hr(u);continue}case"heading":{s+=this.renderer.heading(u);continue}case"code":{s+=this.renderer.code(u);continue}case"table":{s+=this.renderer.table(u);continue}case"blockquote":{s+=this.renderer.blockquote(u);continue}case"list":{s+=this.renderer.list(u);continue}case"html":{s+=this.renderer.html(u);continue}case"paragraph":{s+=this.renderer.paragraph(u);continue}case"text":{let f=u,h=this.renderer.text(f);for(;a+1<n.length&&n[a+1].type==="text";)f=n[++a],h+=`
`+this.renderer.text(f);t?s+=this.renderer.paragraph({type:"paragraph",raw:h,text:h,tokens:[{type:"text",raw:h,text:h}]}):s+=h;continue}default:{const f='Token with "'+u.type+'" type was not found.';if(this.options.silent)return console.error(f),"";throw new Error(f)}}}return s}parseInline(n,t){t=t||this.renderer;let s="";for(let a=0;a<n.length;a++){const o=n[a];if(this.options.extensions&&this.options.extensions.renderers&&this.options.extensions.renderers[o.type]){const f=this.options.extensions.renderers[o.type].call({parser:this},o);if(f!==!1||!["escape","html","link","image","strong","em","codespan","br","del","text"].includes(o.type)){s+=f||"";continue}}const u=o;switch(u.type){case"escape":{s+=t.text(u);break}case"html":{s+=t.html(u);break}case"link":{s+=t.link(u);break}case"image":{s+=t.image(u);break}case"strong":{s+=t.strong(u);break}case"em":{s+=t.em(u);break}case"codespan":{s+=t.codespan(u);break}case"br":{s+=t.br(u);break}case"del":{s+=t.del(u);break}case"text":{s+=t.text(u);break}default:{const f='Token with "'+u.type+'" type was not found.';if(this.options.silent)return console.error(f),"";throw new Error(f)}}}return s}}class pr{constructor(n){ve(this,"options");ve(this,"block");this.options=n||mi}preprocess(n){return n}postprocess(n){return n}processAllTokens(n){return n}provideLexer(){return this.block?kn.lex:kn.lexInline}provideParser(){return this.block?$n.parse:$n.parseInline}}ve(pr,"passThroughHooks",new Set(["preprocess","postprocess","processAllTokens"]));class m0{constructor(...n){ve(this,"defaults",$o());ve(this,"options",this.setOptions);ve(this,"parse",this.parseMarkdown(!0));ve(this,"parseInline",this.parseMarkdown(!1));ve(this,"Parser",$n);ve(this,"Renderer",Ns);ve(this,"TextRenderer",jo);ve(this,"Lexer",kn);ve(this,"Tokenizer",ks);ve(this,"Hooks",pr);this.use(...n)}walkTokens(n,t){var a,o;let s=[];for(const u of n)switch(s=s.concat(t.call(this,u)),u.type){case"table":{const f=u;for(const h of f.header)s=s.concat(this.walkTokens(h.tokens,t));for(const h of f.rows)for(const m of h)s=s.concat(this.walkTokens(m.tokens,t));break}case"list":{const f=u;s=s.concat(this.walkTokens(f.items,t));break}default:{const f=u;(o=(a=this.defaults.extensions)==null?void 0:a.childTokens)!=null&&o[f.type]?this.defaults.extensions.childTokens[f.type].forEach(h=>{const m=f[h].flat(1/0);s=s.concat(this.walkTokens(m,t))}):f.tokens&&(s=s.concat(this.walkTokens(f.tokens,t)))}}return s}use(...n){const t=this.defaults.extensions||{renderers:{},childTokens:{}};return n.forEach(s=>{const a={...s};if(a.async=this.defaults.async||a.async||!1,s.extensions&&(s.extensions.forEach(o=>{if(!o.name)throw new Error("extension name required");if("renderer"in o){const u=t.renderers[o.name];u?t.renderers[o.name]=function(...f){let h=o.renderer.apply(this,f);return h===!1&&(h=u.apply(this,f)),h}:t.renderers[o.name]=o.renderer}if("tokenizer"in o){if(!o.level||o.level!=="block"&&o.level!=="inline")throw new Error("extension level must be 'block' or 'inline'");const u=t[o.level];u?u.unshift(o.tokenizer):t[o.level]=[o.tokenizer],o.start&&(o.level==="block"?t.startBlock?t.startBlock.push(o.start):t.startBlock=[o.start]:o.level==="inline"&&(t.startInline?t.startInline.push(o.start):t.startInline=[o.start]))}"childTokens"in o&&o.childTokens&&(t.childTokens[o.name]=o.childTokens)}),a.extensions=t),s.renderer){const o=this.defaults.renderer||new Ns(this.defaults);for(const u in s.renderer){if(!(u in o))throw new Error(`renderer '${u}' does not exist`);if(["options","parser"].includes(u))continue;const f=u,h=s.renderer[f],m=o[f];o[f]=(...y)=>{let b=h.apply(o,y);return b===!1&&(b=m.apply(o,y)),b||""}}a.renderer=o}if(s.tokenizer){const o=this.defaults.tokenizer||new ks(this.defaults);for(const u in s.tokenizer){if(!(u in o))throw new Error(`tokenizer '${u}' does not exist`);if(["options","rules","lexer"].includes(u))continue;const f=u,h=s.tokenizer[f],m=o[f];o[f]=(...y)=>{let b=h.apply(o,y);return b===!1&&(b=m.apply(o,y)),b}}a.tokenizer=o}if(s.hooks){const o=this.defaults.hooks||new pr;for(const u in s.hooks){if(!(u in o))throw new Error(`hook '${u}' does not exist`);if(["options","block"].includes(u))continue;const f=u,h=s.hooks[f],m=o[f];pr.passThroughHooks.has(u)?o[f]=y=>{if(this.defaults.async)return Promise.resolve(h.call(o,y)).then(O=>m.call(o,O));const b=h.call(o,y);return m.call(o,b)}:o[f]=(...y)=>{let b=h.apply(o,y);return b===!1&&(b=m.apply(o,y)),b}}a.hooks=o}if(s.walkTokens){const o=this.defaults.walkTokens,u=s.walkTokens;a.walkTokens=function(f){let h=[];return h.push(u.call(this,f)),o&&(h=h.concat(o.call(this,f))),h}}this.defaults={...this.defaults,...a}}),this}setOptions(n){return this.defaults={...this.defaults,...n},this}lexer(n,t){return kn.lex(n,t??this.defaults)}parser(n,t){return $n.parse(n,t??this.defaults)}parseMarkdown(n){return(s,a)=>{const o={...a},u={...this.defaults,...o},f=this.onError(!!u.silent,!!u.async);if(this.defaults.async===!0&&o.async===!1)return f(new Error("marked(): The async option was set to true by an extension. Remove async: false from the parse options object to return a Promise."));if(typeof s>"u"||s===null)return f(new Error("marked(): input parameter is undefined or null"));if(typeof s!="string")return f(new Error("marked(): input parameter is of type "+Object.prototype.toString.call(s)+", string expected"));u.hooks&&(u.hooks.options=u,u.hooks.block=n);const h=u.hooks?u.hooks.provideLexer():n?kn.lex:kn.lexInline,m=u.hooks?u.hooks.provideParser():n?$n.parse:$n.parseInline;if(u.async)return Promise.resolve(u.hooks?u.hooks.preprocess(s):s).then(y=>h(y,u)).then(y=>u.hooks?u.hooks.processAllTokens(y):y).then(y=>u.walkTokens?Promise.all(this.walkTokens(y,u.walkTokens)).then(()=>y):y).then(y=>m(y,u)).then(y=>u.hooks?u.hooks.postprocess(y):y).catch(f);try{u.hooks&&(s=u.hooks.preprocess(s));let y=h(s,u);u.hooks&&(y=u.hooks.processAllTokens(y)),u.walkTokens&&this.walkTokens(y,u.walkTokens);let b=m(y,u);return u.hooks&&(b=u.hooks.postprocess(b)),b}catch(y){return f(y)}}}onError(n,t){return s=>{if(s.message+=`
Please report this to https://github.com/markedjs/marked.`,n){const a="<p>An error occurred:</p><pre>"+Sn(s.message+"",!0)+"</pre>";return t?Promise.resolve(a):a}if(t)return Promise.reject(s);throw s}}}const fi=new m0;function be(i,n){return fi.parse(i,n)}be.options=be.setOptions=function(i){return fi.setOptions(i),be.defaults=fi.defaults,Nf(be.defaults),be};be.getDefaults=$o;be.defaults=mi;be.use=function(...i){return fi.use(...i),be.defaults=fi.defaults,Nf(be.defaults),be};be.walkTokens=function(i,n){return fi.walkTokens(i,n)};be.parseInline=fi.parseInline;be.Parser=$n;be.parser=$n.parse;be.Renderer=Ns;be.TextRenderer=jo;be.Lexer=kn;be.lexer=kn.lex;be.Tokenizer=ks;be.Hooks=pr;be.parse=be;be.options;be.setOptions;be.use;be.walkTokens;be.parseInline;$n.parse;kn.lex;function y0(i){return new kn().lex(i)}const v0=()=>({heading:LT,blockquote:UT,list:GT,list_item:qT,br:HT,code:JT,codespan:ZT,table:tw,html:sw,paragraph:lw,link:fw,text:pw,def:yw,del:Tw,em:Ew,hr:_w,strong:Fw,image:Ow,space:Qc,escape:Qc}),b0=()=>({baseUrl:"/",slugger:new Ff});function T0(){const i=console.warn;console.warn=n=>{n.includes("unknown prop")||n.includes("unexpected slot")||i(n)},IT(()=>{console.warn=i})}function w0(i){let n,t;return n=new Us({props:{tokens:i[0],renderers:i[1],options:i[2]}}),{c(){Ht(n.$$.fragment)},l(s){gi(n.$$.fragment,s)},m(s,a){zt(n,s,a),t=!0},p(s,[a]){const o={};a&1&&(o.tokens=s[0]),a&2&&(o.renderers=s[1]),a&4&&(o.options=s[2]),n.$set(o)},i(s){t||(ee(n.$$.fragment,s),t=!0)},o(s){ae(n.$$.fragment,s),t=!1},d(s){jt(n,s)}}}function D0(i,n,t){T0();let{source:s}=n,{options:a={}}=n,{renderers:o={}}=n,u,f,h;return i.$$set=m=>{"source"in m&&t(3,s=m.source),"options"in m&&t(4,a=m.options),"renderers"in m&&t(5,o=m.renderers)},i.$$.update=()=>{i.$$.dirty&56&&(t(0,u=y0(s)),t(1,f={...v0(),...o}),t(2,h={...b0(),...a}))},[u,f,h,s,a,o]}class AI extends Pe{constructor(n){super(),Be(this,n,D0,w0,Fe,{source:3,options:4,renderers:5})}}const Ar={joinUrlPaths:vr,isRelative:br,generatePathSegment:kf};var ur=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{};function E0(i){return i&&i.__esModule&&Object.prototype.hasOwnProperty.call(i,"default")?i.default:i}var Cs={exports:{}};/**
 * @license
 * Lodash <https://lodash.com/>
 * Copyright OpenJS Foundation and other contributors <https://openjsf.org/>
 * Released under MIT license <https://lodash.com/license>
 * Based on Underscore.js 1.8.3 <http://underscorejs.org/LICENSE>
 * Copyright Jeremy Ashkenas, DocumentCloud and Investigative Reporters & Editors
 */Cs.exports;(function(i,n){(function(){var t,s="4.17.21",a=200,o="Unsupported core-js use. Try https://npms.io/search?q=ponyfill.",u="Expected a function",f="Invalid `variable` option passed into `_.template`",h="__lodash_hash_undefined__",m=500,y="__lodash_placeholder__",b=1,O=2,S=4,k=1,P=2,Y=1,ce=2,_e=4,ye=8,Re=16,je=32,Qe=64,xe=128,gt=256,R=512,K=30,on="...",xt=800,Kt=16,kr=1,vi=2,Fr=3,at=1/0,qn=9007199254740991,bi=17976931348623157e292,Xt=NaN,Nn=4294967295,A=Nn-1,V=Nn>>>1,U=[["ary",xe],["bind",Y],["bindKey",ce],["curry",ye],["curryRight",Re],["flip",R],["partial",je],["partialRight",Qe],["rearg",gt]],$="[object Arguments]",de="[object Array]",Ue="[object AsyncFunction]",pe="[object Boolean]",Cn="[object Date]",$i="[object DOMException]",Lt="[object Error]",tn="[object Function]",rl="[object GeneratorFunction]",Yn="[object Map]",Gi="[object Number]",Bh="[object Null]",mt="[object Object]",sl="[object Promise]",Uh="[object Proxy]",Vi="[object RegExp]",jn="[object Set]",Wi="[object String]",Nr="[object Symbol]",Mh="[object Undefined]",qi="[object WeakMap]",$h="[object WeakSet]",Yi="[object ArrayBuffer]",Ti="[object DataView]",Qs="[object Float32Array]",Js="[object Float64Array]",Ks="[object Int8Array]",Xs="[object Int16Array]",Zs="[object Int32Array]",ea="[object Uint8Array]",na="[object Uint8ClampedArray]",ta="[object Uint16Array]",ia="[object Uint32Array]",Gh=/\b__p \+= '';/g,Vh=/\b(__p \+=) '' \+/g,Wh=/(__e\(.*?\)|\b__t\)) \+\n'';/g,al=/&(?:amp|lt|gt|quot|#39);/g,ol=/[&<>"']/g,qh=RegExp(al.source),Yh=RegExp(ol.source),jh=/<%-([\s\S]+?)%>/g,Hh=/<%([\s\S]+?)%>/g,ll=/<%=([\s\S]+?)%>/g,zh=/\.|\[(?:[^[\]]*|(["'])(?:(?!\1)[^\\]|\\.)*?\1)\]/,Qh=/^\w*$/,Jh=/[^.[\]]+|\[(?:(-?\d+(?:\.\d+)?)|(["'])((?:(?!\2)[^\\]|\\.)*?)\2)\]|(?=(?:\.|\[\])(?:\.|\[\]|$))/g,ra=/[\\^$.*+?()[\]{}|]/g,Kh=RegExp(ra.source),sa=/^\s+/,Xh=/\s/,Zh=/\{(?:\n\/\* \[wrapped with .+\] \*\/)?\n?/,ed=/\{\n\/\* \[wrapped with (.+)\] \*/,nd=/,? & /,td=/[^\x00-\x2f\x3a-\x40\x5b-\x60\x7b-\x7f]+/g,id=/[()=,{}\[\]\/\s]/,rd=/\\(\\)?/g,sd=/\$\{([^\\}]*(?:\\.[^\\}]*)*)\}/g,ul=/\w*$/,ad=/^[-+]0x[0-9a-f]+$/i,od=/^0b[01]+$/i,ld=/^\[object .+?Constructor\]$/,ud=/^0o[0-7]+$/i,cd=/^(?:0|[1-9]\d*)$/,fd=/[\xc0-\xd6\xd8-\xf6\xf8-\xff\u0100-\u017f]/g,Cr=/($^)/,hd=/['\n\r\u2028\u2029\\]/g,Or="\\ud800-\\udfff",dd="\\u0300-\\u036f",pd="\\ufe20-\\ufe2f",gd="\\u20d0-\\u20ff",cl=dd+pd+gd,fl="\\u2700-\\u27bf",hl="a-z\\xdf-\\xf6\\xf8-\\xff",md="\\xac\\xb1\\xd7\\xf7",yd="\\x00-\\x2f\\x3a-\\x40\\x5b-\\x60\\x7b-\\xbf",vd="\\u2000-\\u206f",bd=" \\t\\x0b\\f\\xa0\\ufeff\\n\\r\\u2028\\u2029\\u1680\\u180e\\u2000\\u2001\\u2002\\u2003\\u2004\\u2005\\u2006\\u2007\\u2008\\u2009\\u200a\\u202f\\u205f\\u3000",dl="A-Z\\xc0-\\xd6\\xd8-\\xde",pl="\\ufe0e\\ufe0f",gl=md+yd+vd+bd,aa="['’]",Td="["+Or+"]",ml="["+gl+"]",Rr="["+cl+"]",yl="\\d+",wd="["+fl+"]",vl="["+hl+"]",bl="[^"+Or+gl+yl+fl+hl+dl+"]",oa="\\ud83c[\\udffb-\\udfff]",Dd="(?:"+Rr+"|"+oa+")",Tl="[^"+Or+"]",la="(?:\\ud83c[\\udde6-\\uddff]){2}",ua="[\\ud800-\\udbff][\\udc00-\\udfff]",wi="["+dl+"]",wl="\\u200d",Dl="(?:"+vl+"|"+bl+")",Ed="(?:"+wi+"|"+bl+")",El="(?:"+aa+"(?:d|ll|m|re|s|t|ve))?",Il="(?:"+aa+"(?:D|LL|M|RE|S|T|VE))?",Al=Dd+"?",_l="["+pl+"]?",Id="(?:"+wl+"(?:"+[Tl,la,ua].join("|")+")"+_l+Al+")*",Ad="\\d*(?:1st|2nd|3rd|(?![123])\\dth)(?=\\b|[A-Z_])",_d="\\d*(?:1ST|2ND|3RD|(?![123])\\dTH)(?=\\b|[a-z_])",Sl=_l+Al+Id,Sd="(?:"+[wd,la,ua].join("|")+")"+Sl,kd="(?:"+[Tl+Rr+"?",Rr,la,ua,Td].join("|")+")",Fd=RegExp(aa,"g"),Nd=RegExp(Rr,"g"),ca=RegExp(oa+"(?="+oa+")|"+kd+Sl,"g"),Cd=RegExp([wi+"?"+vl+"+"+El+"(?="+[ml,wi,"$"].join("|")+")",Ed+"+"+Il+"(?="+[ml,wi+Dl,"$"].join("|")+")",wi+"?"+Dl+"+"+El,wi+"+"+Il,_d,Ad,yl,Sd].join("|"),"g"),Od=RegExp("["+wl+Or+cl+pl+"]"),Rd=/[a-z][A-Z]|[A-Z]{2}[a-z]|[0-9][a-zA-Z]|[a-zA-Z][0-9]|[^a-zA-Z0-9 ]/,xd=["Array","Buffer","DataView","Date","Error","Float32Array","Float64Array","Function","Int8Array","Int16Array","Int32Array","Map","Math","Object","Promise","RegExp","Set","String","Symbol","TypeError","Uint8Array","Uint8ClampedArray","Uint16Array","Uint32Array","WeakMap","_","clearTimeout","isFinite","parseInt","setTimeout"],Ld=-1,Se={};Se[Qs]=Se[Js]=Se[Ks]=Se[Xs]=Se[Zs]=Se[ea]=Se[na]=Se[ta]=Se[ia]=!0,Se[$]=Se[de]=Se[Yi]=Se[pe]=Se[Ti]=Se[Cn]=Se[Lt]=Se[tn]=Se[Yn]=Se[Gi]=Se[mt]=Se[Vi]=Se[jn]=Se[Wi]=Se[qi]=!1;var Ie={};Ie[$]=Ie[de]=Ie[Yi]=Ie[Ti]=Ie[pe]=Ie[Cn]=Ie[Qs]=Ie[Js]=Ie[Ks]=Ie[Xs]=Ie[Zs]=Ie[Yn]=Ie[Gi]=Ie[mt]=Ie[Vi]=Ie[jn]=Ie[Wi]=Ie[Nr]=Ie[ea]=Ie[na]=Ie[ta]=Ie[ia]=!0,Ie[Lt]=Ie[tn]=Ie[qi]=!1;var Pd={À:"A",Á:"A",Â:"A",Ã:"A",Ä:"A",Å:"A",à:"a",á:"a",â:"a",ã:"a",ä:"a",å:"a",Ç:"C",ç:"c",Ð:"D",ð:"d",È:"E",É:"E",Ê:"E",Ë:"E",è:"e",é:"e",ê:"e",ë:"e",Ì:"I",Í:"I",Î:"I",Ï:"I",ì:"i",í:"i",î:"i",ï:"i",Ñ:"N",ñ:"n",Ò:"O",Ó:"O",Ô:"O",Õ:"O",Ö:"O",Ø:"O",ò:"o",ó:"o",ô:"o",õ:"o",ö:"o",ø:"o",Ù:"U",Ú:"U",Û:"U",Ü:"U",ù:"u",ú:"u",û:"u",ü:"u",Ý:"Y",ý:"y",ÿ:"y",Æ:"Ae",æ:"ae",Þ:"Th",þ:"th",ß:"ss",Ā:"A",Ă:"A",Ą:"A",ā:"a",ă:"a",ą:"a",Ć:"C",Ĉ:"C",Ċ:"C",Č:"C",ć:"c",ĉ:"c",ċ:"c",č:"c",Ď:"D",Đ:"D",ď:"d",đ:"d",Ē:"E",Ĕ:"E",Ė:"E",Ę:"E",Ě:"E",ē:"e",ĕ:"e",ė:"e",ę:"e",ě:"e",Ĝ:"G",Ğ:"G",Ġ:"G",Ģ:"G",ĝ:"g",ğ:"g",ġ:"g",ģ:"g",Ĥ:"H",Ħ:"H",ĥ:"h",ħ:"h",Ĩ:"I",Ī:"I",Ĭ:"I",Į:"I",İ:"I",ĩ:"i",ī:"i",ĭ:"i",į:"i",ı:"i",Ĵ:"J",ĵ:"j",Ķ:"K",ķ:"k",ĸ:"k",Ĺ:"L",Ļ:"L",Ľ:"L",Ŀ:"L",Ł:"L",ĺ:"l",ļ:"l",ľ:"l",ŀ:"l",ł:"l",Ń:"N",Ņ:"N",Ň:"N",Ŋ:"N",ń:"n",ņ:"n",ň:"n",ŋ:"n",Ō:"O",Ŏ:"O",Ő:"O",ō:"o",ŏ:"o",ő:"o",Ŕ:"R",Ŗ:"R",Ř:"R",ŕ:"r",ŗ:"r",ř:"r",Ś:"S",Ŝ:"S",Ş:"S",Š:"S",ś:"s",ŝ:"s",ş:"s",š:"s",Ţ:"T",Ť:"T",Ŧ:"T",ţ:"t",ť:"t",ŧ:"t",Ũ:"U",Ū:"U",Ŭ:"U",Ů:"U",Ű:"U",Ų:"U",ũ:"u",ū:"u",ŭ:"u",ů:"u",ű:"u",ų:"u",Ŵ:"W",ŵ:"w",Ŷ:"Y",ŷ:"y",Ÿ:"Y",Ź:"Z",Ż:"Z",Ž:"Z",ź:"z",ż:"z",ž:"z",Ĳ:"IJ",ĳ:"ij",Œ:"Oe",œ:"oe",ŉ:"'n",ſ:"s"},Bd={"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;","'":"&#39;"},Ud={"&amp;":"&","&lt;":"<","&gt;":">","&quot;":'"',"&#39;":"'"},Md={"\\":"\\","'":"'","\n":"n","\r":"r","\u2028":"u2028","\u2029":"u2029"},$d=parseFloat,Gd=parseInt,kl=typeof ur=="object"&&ur&&ur.Object===Object&&ur,Vd=typeof self=="object"&&self&&self.Object===Object&&self,Ze=kl||Vd||Function("return this")(),fa=n&&!n.nodeType&&n,Zt=fa&&!0&&i&&!i.nodeType&&i,Fl=Zt&&Zt.exports===fa,ha=Fl&&kl.process,On=function(){try{var D=Zt&&Zt.require&&Zt.require("util").types;return D||ha&&ha.binding&&ha.binding("util")}catch{}}(),Nl=On&&On.isArrayBuffer,Cl=On&&On.isDate,Ol=On&&On.isMap,Rl=On&&On.isRegExp,xl=On&&On.isSet,Ll=On&&On.isTypedArray;function Tn(D,_,I){switch(I.length){case 0:return D.call(_);case 1:return D.call(_,I[0]);case 2:return D.call(_,I[0],I[1]);case 3:return D.call(_,I[0],I[1],I[2])}return D.apply(_,I)}function Wd(D,_,I,G){for(var X=-1,he=D==null?0:D.length;++X<he;){var He=D[X];_(G,He,I(He),D)}return G}function Rn(D,_){for(var I=-1,G=D==null?0:D.length;++I<G&&_(D[I],I,D)!==!1;);return D}function qd(D,_){for(var I=D==null?0:D.length;I--&&_(D[I],I,D)!==!1;);return D}function Pl(D,_){for(var I=-1,G=D==null?0:D.length;++I<G;)if(!_(D[I],I,D))return!1;return!0}function Pt(D,_){for(var I=-1,G=D==null?0:D.length,X=0,he=[];++I<G;){var He=D[I];_(He,I,D)&&(he[X++]=He)}return he}function xr(D,_){var I=D==null?0:D.length;return!!I&&Di(D,_,0)>-1}function da(D,_,I){for(var G=-1,X=D==null?0:D.length;++G<X;)if(I(_,D[G]))return!0;return!1}function ke(D,_){for(var I=-1,G=D==null?0:D.length,X=Array(G);++I<G;)X[I]=_(D[I],I,D);return X}function Bt(D,_){for(var I=-1,G=_.length,X=D.length;++I<G;)D[X+I]=_[I];return D}function pa(D,_,I,G){var X=-1,he=D==null?0:D.length;for(G&&he&&(I=D[++X]);++X<he;)I=_(I,D[X],X,D);return I}function Yd(D,_,I,G){var X=D==null?0:D.length;for(G&&X&&(I=D[--X]);X--;)I=_(I,D[X],X,D);return I}function ga(D,_){for(var I=-1,G=D==null?0:D.length;++I<G;)if(_(D[I],I,D))return!0;return!1}var jd=ma("length");function Hd(D){return D.split("")}function zd(D){return D.match(td)||[]}function Bl(D,_,I){var G;return I(D,function(X,he,He){if(_(X,he,He))return G=he,!1}),G}function Lr(D,_,I,G){for(var X=D.length,he=I+(G?1:-1);G?he--:++he<X;)if(_(D[he],he,D))return he;return-1}function Di(D,_,I){return _===_?ap(D,_,I):Lr(D,Ul,I)}function Qd(D,_,I,G){for(var X=I-1,he=D.length;++X<he;)if(G(D[X],_))return X;return-1}function Ul(D){return D!==D}function Ml(D,_){var I=D==null?0:D.length;return I?va(D,_)/I:Xt}function ma(D){return function(_){return _==null?t:_[D]}}function ya(D){return function(_){return D==null?t:D[_]}}function $l(D,_,I,G,X){return X(D,function(he,He,De){I=G?(G=!1,he):_(I,he,He,De)}),I}function Jd(D,_){var I=D.length;for(D.sort(_);I--;)D[I]=D[I].value;return D}function va(D,_){for(var I,G=-1,X=D.length;++G<X;){var he=_(D[G]);he!==t&&(I=I===t?he:I+he)}return I}function ba(D,_){for(var I=-1,G=Array(D);++I<D;)G[I]=_(I);return G}function Kd(D,_){return ke(_,function(I){return[I,D[I]]})}function Gl(D){return D&&D.slice(0,Yl(D)+1).replace(sa,"")}function wn(D){return function(_){return D(_)}}function Ta(D,_){return ke(_,function(I){return D[I]})}function ji(D,_){return D.has(_)}function Vl(D,_){for(var I=-1,G=D.length;++I<G&&Di(_,D[I],0)>-1;);return I}function Wl(D,_){for(var I=D.length;I--&&Di(_,D[I],0)>-1;);return I}function Xd(D,_){for(var I=D.length,G=0;I--;)D[I]===_&&++G;return G}var Zd=ya(Pd),ep=ya(Bd);function np(D){return"\\"+Md[D]}function tp(D,_){return D==null?t:D[_]}function Ei(D){return Od.test(D)}function ip(D){return Rd.test(D)}function rp(D){for(var _,I=[];!(_=D.next()).done;)I.push(_.value);return I}function wa(D){var _=-1,I=Array(D.size);return D.forEach(function(G,X){I[++_]=[X,G]}),I}function ql(D,_){return function(I){return D(_(I))}}function Ut(D,_){for(var I=-1,G=D.length,X=0,he=[];++I<G;){var He=D[I];(He===_||He===y)&&(D[I]=y,he[X++]=I)}return he}function Pr(D){var _=-1,I=Array(D.size);return D.forEach(function(G){I[++_]=G}),I}function sp(D){var _=-1,I=Array(D.size);return D.forEach(function(G){I[++_]=[G,G]}),I}function ap(D,_,I){for(var G=I-1,X=D.length;++G<X;)if(D[G]===_)return G;return-1}function op(D,_,I){for(var G=I+1;G--;)if(D[G]===_)return G;return G}function Ii(D){return Ei(D)?up(D):jd(D)}function Hn(D){return Ei(D)?cp(D):Hd(D)}function Yl(D){for(var _=D.length;_--&&Xh.test(D.charAt(_)););return _}var lp=ya(Ud);function up(D){for(var _=ca.lastIndex=0;ca.test(D);)++_;return _}function cp(D){return D.match(ca)||[]}function fp(D){return D.match(Cd)||[]}var hp=function D(_){_=_==null?Ze:Ai.defaults(Ze.Object(),_,Ai.pick(Ze,xd));var I=_.Array,G=_.Date,X=_.Error,he=_.Function,He=_.Math,De=_.Object,Da=_.RegExp,dp=_.String,xn=_.TypeError,Br=I.prototype,pp=he.prototype,_i=De.prototype,Ur=_["__core-js_shared__"],Mr=pp.toString,me=_i.hasOwnProperty,gp=0,jl=function(){var e=/[^.]+$/.exec(Ur&&Ur.keys&&Ur.keys.IE_PROTO||"");return e?"Symbol(src)_1."+e:""}(),$r=_i.toString,mp=Mr.call(De),yp=Ze._,vp=Da("^"+Mr.call(me).replace(ra,"\\$&").replace(/hasOwnProperty|(function).*?(?=\\\()| for .+?(?=\\\])/g,"$1.*?")+"$"),Gr=Fl?_.Buffer:t,Mt=_.Symbol,Vr=_.Uint8Array,Hl=Gr?Gr.allocUnsafe:t,Wr=ql(De.getPrototypeOf,De),zl=De.create,Ql=_i.propertyIsEnumerable,qr=Br.splice,Jl=Mt?Mt.isConcatSpreadable:t,Hi=Mt?Mt.iterator:t,ei=Mt?Mt.toStringTag:t,Yr=function(){try{var e=si(De,"defineProperty");return e({},"",{}),e}catch{}}(),bp=_.clearTimeout!==Ze.clearTimeout&&_.clearTimeout,Tp=G&&G.now!==Ze.Date.now&&G.now,wp=_.setTimeout!==Ze.setTimeout&&_.setTimeout,jr=He.ceil,Hr=He.floor,Ea=De.getOwnPropertySymbols,Dp=Gr?Gr.isBuffer:t,Kl=_.isFinite,Ep=Br.join,Ip=ql(De.keys,De),ze=He.max,rn=He.min,Ap=G.now,_p=_.parseInt,Xl=He.random,Sp=Br.reverse,Ia=si(_,"DataView"),zi=si(_,"Map"),Aa=si(_,"Promise"),Si=si(_,"Set"),Qi=si(_,"WeakMap"),Ji=si(De,"create"),zr=Qi&&new Qi,ki={},kp=ai(Ia),Fp=ai(zi),Np=ai(Aa),Cp=ai(Si),Op=ai(Qi),Qr=Mt?Mt.prototype:t,Ki=Qr?Qr.valueOf:t,Zl=Qr?Qr.toString:t;function p(e){if(Le(e)&&!Z(e)&&!(e instanceof oe)){if(e instanceof Ln)return e;if(me.call(e,"__wrapped__"))return ec(e)}return new Ln(e)}var Fi=function(){function e(){}return function(r){if(!Ne(r))return{};if(zl)return zl(r);e.prototype=r;var l=new e;return e.prototype=t,l}}();function Jr(){}function Ln(e,r){this.__wrapped__=e,this.__actions__=[],this.__chain__=!!r,this.__index__=0,this.__values__=t}p.templateSettings={escape:jh,evaluate:Hh,interpolate:ll,variable:"",imports:{_:p}},p.prototype=Jr.prototype,p.prototype.constructor=p,Ln.prototype=Fi(Jr.prototype),Ln.prototype.constructor=Ln;function oe(e){this.__wrapped__=e,this.__actions__=[],this.__dir__=1,this.__filtered__=!1,this.__iteratees__=[],this.__takeCount__=Nn,this.__views__=[]}function Rp(){var e=new oe(this.__wrapped__);return e.__actions__=dn(this.__actions__),e.__dir__=this.__dir__,e.__filtered__=this.__filtered__,e.__iteratees__=dn(this.__iteratees__),e.__takeCount__=this.__takeCount__,e.__views__=dn(this.__views__),e}function xp(){if(this.__filtered__){var e=new oe(this);e.__dir__=-1,e.__filtered__=!0}else e=this.clone(),e.__dir__*=-1;return e}function Lp(){var e=this.__wrapped__.value(),r=this.__dir__,l=Z(e),c=r<0,d=l?e.length:0,g=Hg(0,d,this.__views__),v=g.start,T=g.end,E=T-v,F=c?T:v-1,N=this.__iteratees__,x=N.length,B=0,q=rn(E,this.__takeCount__);if(!l||!c&&d==E&&q==E)return Eu(e,this.__actions__);var z=[];e:for(;E--&&B<q;){F+=r;for(var te=-1,Q=e[F];++te<x;){var se=N[te],ue=se.iteratee,In=se.type,cn=ue(Q);if(In==vi)Q=cn;else if(!cn){if(In==kr)continue e;break e}}z[B++]=Q}return z}oe.prototype=Fi(Jr.prototype),oe.prototype.constructor=oe;function ni(e){var r=-1,l=e==null?0:e.length;for(this.clear();++r<l;){var c=e[r];this.set(c[0],c[1])}}function Pp(){this.__data__=Ji?Ji(null):{},this.size=0}function Bp(e){var r=this.has(e)&&delete this.__data__[e];return this.size-=r?1:0,r}function Up(e){var r=this.__data__;if(Ji){var l=r[e];return l===h?t:l}return me.call(r,e)?r[e]:t}function Mp(e){var r=this.__data__;return Ji?r[e]!==t:me.call(r,e)}function $p(e,r){var l=this.__data__;return this.size+=this.has(e)?0:1,l[e]=Ji&&r===t?h:r,this}ni.prototype.clear=Pp,ni.prototype.delete=Bp,ni.prototype.get=Up,ni.prototype.has=Mp,ni.prototype.set=$p;function yt(e){var r=-1,l=e==null?0:e.length;for(this.clear();++r<l;){var c=e[r];this.set(c[0],c[1])}}function Gp(){this.__data__=[],this.size=0}function Vp(e){var r=this.__data__,l=Kr(r,e);if(l<0)return!1;var c=r.length-1;return l==c?r.pop():qr.call(r,l,1),--this.size,!0}function Wp(e){var r=this.__data__,l=Kr(r,e);return l<0?t:r[l][1]}function qp(e){return Kr(this.__data__,e)>-1}function Yp(e,r){var l=this.__data__,c=Kr(l,e);return c<0?(++this.size,l.push([e,r])):l[c][1]=r,this}yt.prototype.clear=Gp,yt.prototype.delete=Vp,yt.prototype.get=Wp,yt.prototype.has=qp,yt.prototype.set=Yp;function vt(e){var r=-1,l=e==null?0:e.length;for(this.clear();++r<l;){var c=e[r];this.set(c[0],c[1])}}function jp(){this.size=0,this.__data__={hash:new ni,map:new(zi||yt),string:new ni}}function Hp(e){var r=us(this,e).delete(e);return this.size-=r?1:0,r}function zp(e){return us(this,e).get(e)}function Qp(e){return us(this,e).has(e)}function Jp(e,r){var l=us(this,e),c=l.size;return l.set(e,r),this.size+=l.size==c?0:1,this}vt.prototype.clear=jp,vt.prototype.delete=Hp,vt.prototype.get=zp,vt.prototype.has=Qp,vt.prototype.set=Jp;function ti(e){var r=-1,l=e==null?0:e.length;for(this.__data__=new vt;++r<l;)this.add(e[r])}function Kp(e){return this.__data__.set(e,h),this}function Xp(e){return this.__data__.has(e)}ti.prototype.add=ti.prototype.push=Kp,ti.prototype.has=Xp;function zn(e){var r=this.__data__=new yt(e);this.size=r.size}function Zp(){this.__data__=new yt,this.size=0}function eg(e){var r=this.__data__,l=r.delete(e);return this.size=r.size,l}function ng(e){return this.__data__.get(e)}function tg(e){return this.__data__.has(e)}function ig(e,r){var l=this.__data__;if(l instanceof yt){var c=l.__data__;if(!zi||c.length<a-1)return c.push([e,r]),this.size=++l.size,this;l=this.__data__=new vt(c)}return l.set(e,r),this.size=l.size,this}zn.prototype.clear=Zp,zn.prototype.delete=eg,zn.prototype.get=ng,zn.prototype.has=tg,zn.prototype.set=ig;function eu(e,r){var l=Z(e),c=!l&&oi(e),d=!l&&!c&&qt(e),g=!l&&!c&&!d&&Ri(e),v=l||c||d||g,T=v?ba(e.length,dp):[],E=T.length;for(var F in e)(r||me.call(e,F))&&!(v&&(F=="length"||d&&(F=="offset"||F=="parent")||g&&(F=="buffer"||F=="byteLength"||F=="byteOffset")||Dt(F,E)))&&T.push(F);return T}function nu(e){var r=e.length;return r?e[Pa(0,r-1)]:t}function rg(e,r){return cs(dn(e),ii(r,0,e.length))}function sg(e){return cs(dn(e))}function _a(e,r,l){(l!==t&&!Qn(e[r],l)||l===t&&!(r in e))&&bt(e,r,l)}function Xi(e,r,l){var c=e[r];(!(me.call(e,r)&&Qn(c,l))||l===t&&!(r in e))&&bt(e,r,l)}function Kr(e,r){for(var l=e.length;l--;)if(Qn(e[l][0],r))return l;return-1}function ag(e,r,l,c){return $t(e,function(d,g,v){r(c,d,l(d),v)}),c}function tu(e,r){return e&&lt(r,Je(r),e)}function og(e,r){return e&&lt(r,gn(r),e)}function bt(e,r,l){r=="__proto__"&&Yr?Yr(e,r,{configurable:!0,enumerable:!0,value:l,writable:!0}):e[r]=l}function Sa(e,r){for(var l=-1,c=r.length,d=I(c),g=e==null;++l<c;)d[l]=g?t:oo(e,r[l]);return d}function ii(e,r,l){return e===e&&(l!==t&&(e=e<=l?e:l),r!==t&&(e=e>=r?e:r)),e}function Pn(e,r,l,c,d,g){var v,T=r&b,E=r&O,F=r&S;if(l&&(v=d?l(e,c,d,g):l(e)),v!==t)return v;if(!Ne(e))return e;var N=Z(e);if(N){if(v=Qg(e),!T)return dn(e,v)}else{var x=sn(e),B=x==tn||x==rl;if(qt(e))return _u(e,T);if(x==mt||x==$||B&&!d){if(v=E||B?{}:Yu(e),!T)return E?Ug(e,og(v,e)):Bg(e,tu(v,e))}else{if(!Ie[x])return d?e:{};v=Jg(e,x,T)}}g||(g=new zn);var q=g.get(e);if(q)return q;g.set(e,v),Tc(e)?e.forEach(function(Q){v.add(Pn(Q,r,l,Q,e,g))}):vc(e)&&e.forEach(function(Q,se){v.set(se,Pn(Q,r,l,se,e,g))});var z=F?E?Ha:ja:E?gn:Je,te=N?t:z(e);return Rn(te||e,function(Q,se){te&&(se=Q,Q=e[se]),Xi(v,se,Pn(Q,r,l,se,e,g))}),v}function lg(e){var r=Je(e);return function(l){return iu(l,e,r)}}function iu(e,r,l){var c=l.length;if(e==null)return!c;for(e=De(e);c--;){var d=l[c],g=r[d],v=e[d];if(v===t&&!(d in e)||!g(v))return!1}return!0}function ru(e,r,l){if(typeof e!="function")throw new xn(u);return sr(function(){e.apply(t,l)},r)}function Zi(e,r,l,c){var d=-1,g=xr,v=!0,T=e.length,E=[],F=r.length;if(!T)return E;l&&(r=ke(r,wn(l))),c?(g=da,v=!1):r.length>=a&&(g=ji,v=!1,r=new ti(r));e:for(;++d<T;){var N=e[d],x=l==null?N:l(N);if(N=c||N!==0?N:0,v&&x===x){for(var B=F;B--;)if(r[B]===x)continue e;E.push(N)}else g(r,x,c)||E.push(N)}return E}var $t=Cu(ot),su=Cu(Fa,!0);function ug(e,r){var l=!0;return $t(e,function(c,d,g){return l=!!r(c,d,g),l}),l}function Xr(e,r,l){for(var c=-1,d=e.length;++c<d;){var g=e[c],v=r(g);if(v!=null&&(T===t?v===v&&!En(v):l(v,T)))var T=v,E=g}return E}function cg(e,r,l,c){var d=e.length;for(l=ne(l),l<0&&(l=-l>d?0:d+l),c=c===t||c>d?d:ne(c),c<0&&(c+=d),c=l>c?0:Dc(c);l<c;)e[l++]=r;return e}function au(e,r){var l=[];return $t(e,function(c,d,g){r(c,d,g)&&l.push(c)}),l}function en(e,r,l,c,d){var g=-1,v=e.length;for(l||(l=Xg),d||(d=[]);++g<v;){var T=e[g];r>0&&l(T)?r>1?en(T,r-1,l,c,d):Bt(d,T):c||(d[d.length]=T)}return d}var ka=Ou(),ou=Ou(!0);function ot(e,r){return e&&ka(e,r,Je)}function Fa(e,r){return e&&ou(e,r,Je)}function Zr(e,r){return Pt(r,function(l){return Et(e[l])})}function ri(e,r){r=Vt(r,e);for(var l=0,c=r.length;e!=null&&l<c;)e=e[ut(r[l++])];return l&&l==c?e:t}function lu(e,r,l){var c=r(e);return Z(e)?c:Bt(c,l(e))}function ln(e){return e==null?e===t?Mh:Bh:ei&&ei in De(e)?jg(e):sm(e)}function Na(e,r){return e>r}function fg(e,r){return e!=null&&me.call(e,r)}function hg(e,r){return e!=null&&r in De(e)}function dg(e,r,l){return e>=rn(r,l)&&e<ze(r,l)}function Ca(e,r,l){for(var c=l?da:xr,d=e[0].length,g=e.length,v=g,T=I(g),E=1/0,F=[];v--;){var N=e[v];v&&r&&(N=ke(N,wn(r))),E=rn(N.length,E),T[v]=!l&&(r||d>=120&&N.length>=120)?new ti(v&&N):t}N=e[0];var x=-1,B=T[0];e:for(;++x<d&&F.length<E;){var q=N[x],z=r?r(q):q;if(q=l||q!==0?q:0,!(B?ji(B,z):c(F,z,l))){for(v=g;--v;){var te=T[v];if(!(te?ji(te,z):c(e[v],z,l)))continue e}B&&B.push(z),F.push(q)}}return F}function pg(e,r,l,c){return ot(e,function(d,g,v){r(c,l(d),g,v)}),c}function er(e,r,l){r=Vt(r,e),e=Qu(e,r);var c=e==null?e:e[ut(Un(r))];return c==null?t:Tn(c,e,l)}function uu(e){return Le(e)&&ln(e)==$}function gg(e){return Le(e)&&ln(e)==Yi}function mg(e){return Le(e)&&ln(e)==Cn}function nr(e,r,l,c,d){return e===r?!0:e==null||r==null||!Le(e)&&!Le(r)?e!==e&&r!==r:yg(e,r,l,c,nr,d)}function yg(e,r,l,c,d,g){var v=Z(e),T=Z(r),E=v?de:sn(e),F=T?de:sn(r);E=E==$?mt:E,F=F==$?mt:F;var N=E==mt,x=F==mt,B=E==F;if(B&&qt(e)){if(!qt(r))return!1;v=!0,N=!1}if(B&&!N)return g||(g=new zn),v||Ri(e)?Vu(e,r,l,c,d,g):qg(e,r,E,l,c,d,g);if(!(l&k)){var q=N&&me.call(e,"__wrapped__"),z=x&&me.call(r,"__wrapped__");if(q||z){var te=q?e.value():e,Q=z?r.value():r;return g||(g=new zn),d(te,Q,l,c,g)}}return B?(g||(g=new zn),Yg(e,r,l,c,d,g)):!1}function vg(e){return Le(e)&&sn(e)==Yn}function Oa(e,r,l,c){var d=l.length,g=d,v=!c;if(e==null)return!g;for(e=De(e);d--;){var T=l[d];if(v&&T[2]?T[1]!==e[T[0]]:!(T[0]in e))return!1}for(;++d<g;){T=l[d];var E=T[0],F=e[E],N=T[1];if(v&&T[2]){if(F===t&&!(E in e))return!1}else{var x=new zn;if(c)var B=c(F,N,E,e,r,x);if(!(B===t?nr(N,F,k|P,c,x):B))return!1}}return!0}function cu(e){if(!Ne(e)||em(e))return!1;var r=Et(e)?vp:ld;return r.test(ai(e))}function bg(e){return Le(e)&&ln(e)==Vi}function Tg(e){return Le(e)&&sn(e)==jn}function wg(e){return Le(e)&&ms(e.length)&&!!Se[ln(e)]}function fu(e){return typeof e=="function"?e:e==null?mn:typeof e=="object"?Z(e)?pu(e[0],e[1]):du(e):Rc(e)}function Ra(e){if(!rr(e))return Ip(e);var r=[];for(var l in De(e))me.call(e,l)&&l!="constructor"&&r.push(l);return r}function Dg(e){if(!Ne(e))return rm(e);var r=rr(e),l=[];for(var c in e)c=="constructor"&&(r||!me.call(e,c))||l.push(c);return l}function xa(e,r){return e<r}function hu(e,r){var l=-1,c=pn(e)?I(e.length):[];return $t(e,function(d,g,v){c[++l]=r(d,g,v)}),c}function du(e){var r=Qa(e);return r.length==1&&r[0][2]?Hu(r[0][0],r[0][1]):function(l){return l===e||Oa(l,e,r)}}function pu(e,r){return Ka(e)&&ju(r)?Hu(ut(e),r):function(l){var c=oo(l,e);return c===t&&c===r?lo(l,e):nr(r,c,k|P)}}function es(e,r,l,c,d){e!==r&&ka(r,function(g,v){if(d||(d=new zn),Ne(g))Eg(e,r,v,l,es,c,d);else{var T=c?c(Za(e,v),g,v+"",e,r,d):t;T===t&&(T=g),_a(e,v,T)}},gn)}function Eg(e,r,l,c,d,g,v){var T=Za(e,l),E=Za(r,l),F=v.get(E);if(F){_a(e,l,F);return}var N=g?g(T,E,l+"",e,r,v):t,x=N===t;if(x){var B=Z(E),q=!B&&qt(E),z=!B&&!q&&Ri(E);N=E,B||q||z?Z(T)?N=T:Me(T)?N=dn(T):q?(x=!1,N=_u(E,!0)):z?(x=!1,N=Su(E,!0)):N=[]:ar(E)||oi(E)?(N=T,oi(T)?N=Ec(T):(!Ne(T)||Et(T))&&(N=Yu(E))):x=!1}x&&(v.set(E,N),d(N,E,c,g,v),v.delete(E)),_a(e,l,N)}function gu(e,r){var l=e.length;if(l)return r+=r<0?l:0,Dt(r,l)?e[r]:t}function mu(e,r,l){r.length?r=ke(r,function(g){return Z(g)?function(v){return ri(v,g.length===1?g[0]:g)}:g}):r=[mn];var c=-1;r=ke(r,wn(H()));var d=hu(e,function(g,v,T){var E=ke(r,function(F){return F(g)});return{criteria:E,index:++c,value:g}});return Jd(d,function(g,v){return Pg(g,v,l)})}function Ig(e,r){return yu(e,r,function(l,c){return lo(e,c)})}function yu(e,r,l){for(var c=-1,d=r.length,g={};++c<d;){var v=r[c],T=ri(e,v);l(T,v)&&tr(g,Vt(v,e),T)}return g}function Ag(e){return function(r){return ri(r,e)}}function La(e,r,l,c){var d=c?Qd:Di,g=-1,v=r.length,T=e;for(e===r&&(r=dn(r)),l&&(T=ke(e,wn(l)));++g<v;)for(var E=0,F=r[g],N=l?l(F):F;(E=d(T,N,E,c))>-1;)T!==e&&qr.call(T,E,1),qr.call(e,E,1);return e}function vu(e,r){for(var l=e?r.length:0,c=l-1;l--;){var d=r[l];if(l==c||d!==g){var g=d;Dt(d)?qr.call(e,d,1):Ma(e,d)}}return e}function Pa(e,r){return e+Hr(Xl()*(r-e+1))}function _g(e,r,l,c){for(var d=-1,g=ze(jr((r-e)/(l||1)),0),v=I(g);g--;)v[c?g:++d]=e,e+=l;return v}function Ba(e,r){var l="";if(!e||r<1||r>qn)return l;do r%2&&(l+=e),r=Hr(r/2),r&&(e+=e);while(r);return l}function ie(e,r){return eo(zu(e,r,mn),e+"")}function Sg(e){return nu(xi(e))}function kg(e,r){var l=xi(e);return cs(l,ii(r,0,l.length))}function tr(e,r,l,c){if(!Ne(e))return e;r=Vt(r,e);for(var d=-1,g=r.length,v=g-1,T=e;T!=null&&++d<g;){var E=ut(r[d]),F=l;if(E==="__proto__"||E==="constructor"||E==="prototype")return e;if(d!=v){var N=T[E];F=c?c(N,E,T):t,F===t&&(F=Ne(N)?N:Dt(r[d+1])?[]:{})}Xi(T,E,F),T=T[E]}return e}var bu=zr?function(e,r){return zr.set(e,r),e}:mn,Fg=Yr?function(e,r){return Yr(e,"toString",{configurable:!0,enumerable:!1,value:co(r),writable:!0})}:mn;function Ng(e){return cs(xi(e))}function Bn(e,r,l){var c=-1,d=e.length;r<0&&(r=-r>d?0:d+r),l=l>d?d:l,l<0&&(l+=d),d=r>l?0:l-r>>>0,r>>>=0;for(var g=I(d);++c<d;)g[c]=e[c+r];return g}function Cg(e,r){var l;return $t(e,function(c,d,g){return l=r(c,d,g),!l}),!!l}function ns(e,r,l){var c=0,d=e==null?c:e.length;if(typeof r=="number"&&r===r&&d<=V){for(;c<d;){var g=c+d>>>1,v=e[g];v!==null&&!En(v)&&(l?v<=r:v<r)?c=g+1:d=g}return d}return Ua(e,r,mn,l)}function Ua(e,r,l,c){var d=0,g=e==null?0:e.length;if(g===0)return 0;r=l(r);for(var v=r!==r,T=r===null,E=En(r),F=r===t;d<g;){var N=Hr((d+g)/2),x=l(e[N]),B=x!==t,q=x===null,z=x===x,te=En(x);if(v)var Q=c||z;else F?Q=z&&(c||B):T?Q=z&&B&&(c||!q):E?Q=z&&B&&!q&&(c||!te):q||te?Q=!1:Q=c?x<=r:x<r;Q?d=N+1:g=N}return rn(g,A)}function Tu(e,r){for(var l=-1,c=e.length,d=0,g=[];++l<c;){var v=e[l],T=r?r(v):v;if(!l||!Qn(T,E)){var E=T;g[d++]=v===0?0:v}}return g}function wu(e){return typeof e=="number"?e:En(e)?Xt:+e}function Dn(e){if(typeof e=="string")return e;if(Z(e))return ke(e,Dn)+"";if(En(e))return Zl?Zl.call(e):"";var r=e+"";return r=="0"&&1/e==-at?"-0":r}function Gt(e,r,l){var c=-1,d=xr,g=e.length,v=!0,T=[],E=T;if(l)v=!1,d=da;else if(g>=a){var F=r?null:Vg(e);if(F)return Pr(F);v=!1,d=ji,E=new ti}else E=r?[]:T;e:for(;++c<g;){var N=e[c],x=r?r(N):N;if(N=l||N!==0?N:0,v&&x===x){for(var B=E.length;B--;)if(E[B]===x)continue e;r&&E.push(x),T.push(N)}else d(E,x,l)||(E!==T&&E.push(x),T.push(N))}return T}function Ma(e,r){return r=Vt(r,e),e=Qu(e,r),e==null||delete e[ut(Un(r))]}function Du(e,r,l,c){return tr(e,r,l(ri(e,r)),c)}function ts(e,r,l,c){for(var d=e.length,g=c?d:-1;(c?g--:++g<d)&&r(e[g],g,e););return l?Bn(e,c?0:g,c?g+1:d):Bn(e,c?g+1:0,c?d:g)}function Eu(e,r){var l=e;return l instanceof oe&&(l=l.value()),pa(r,function(c,d){return d.func.apply(d.thisArg,Bt([c],d.args))},l)}function $a(e,r,l){var c=e.length;if(c<2)return c?Gt(e[0]):[];for(var d=-1,g=I(c);++d<c;)for(var v=e[d],T=-1;++T<c;)T!=d&&(g[d]=Zi(g[d]||v,e[T],r,l));return Gt(en(g,1),r,l)}function Iu(e,r,l){for(var c=-1,d=e.length,g=r.length,v={};++c<d;){var T=c<g?r[c]:t;l(v,e[c],T)}return v}function Ga(e){return Me(e)?e:[]}function Va(e){return typeof e=="function"?e:mn}function Vt(e,r){return Z(e)?e:Ka(e,r)?[e]:Zu(ge(e))}var Og=ie;function Wt(e,r,l){var c=e.length;return l=l===t?c:l,!r&&l>=c?e:Bn(e,r,l)}var Au=bp||function(e){return Ze.clearTimeout(e)};function _u(e,r){if(r)return e.slice();var l=e.length,c=Hl?Hl(l):new e.constructor(l);return e.copy(c),c}function Wa(e){var r=new e.constructor(e.byteLength);return new Vr(r).set(new Vr(e)),r}function Rg(e,r){var l=r?Wa(e.buffer):e.buffer;return new e.constructor(l,e.byteOffset,e.byteLength)}function xg(e){var r=new e.constructor(e.source,ul.exec(e));return r.lastIndex=e.lastIndex,r}function Lg(e){return Ki?De(Ki.call(e)):{}}function Su(e,r){var l=r?Wa(e.buffer):e.buffer;return new e.constructor(l,e.byteOffset,e.length)}function ku(e,r){if(e!==r){var l=e!==t,c=e===null,d=e===e,g=En(e),v=r!==t,T=r===null,E=r===r,F=En(r);if(!T&&!F&&!g&&e>r||g&&v&&E&&!T&&!F||c&&v&&E||!l&&E||!d)return 1;if(!c&&!g&&!F&&e<r||F&&l&&d&&!c&&!g||T&&l&&d||!v&&d||!E)return-1}return 0}function Pg(e,r,l){for(var c=-1,d=e.criteria,g=r.criteria,v=d.length,T=l.length;++c<v;){var E=ku(d[c],g[c]);if(E){if(c>=T)return E;var F=l[c];return E*(F=="desc"?-1:1)}}return e.index-r.index}function Fu(e,r,l,c){for(var d=-1,g=e.length,v=l.length,T=-1,E=r.length,F=ze(g-v,0),N=I(E+F),x=!c;++T<E;)N[T]=r[T];for(;++d<v;)(x||d<g)&&(N[l[d]]=e[d]);for(;F--;)N[T++]=e[d++];return N}function Nu(e,r,l,c){for(var d=-1,g=e.length,v=-1,T=l.length,E=-1,F=r.length,N=ze(g-T,0),x=I(N+F),B=!c;++d<N;)x[d]=e[d];for(var q=d;++E<F;)x[q+E]=r[E];for(;++v<T;)(B||d<g)&&(x[q+l[v]]=e[d++]);return x}function dn(e,r){var l=-1,c=e.length;for(r||(r=I(c));++l<c;)r[l]=e[l];return r}function lt(e,r,l,c){var d=!l;l||(l={});for(var g=-1,v=r.length;++g<v;){var T=r[g],E=c?c(l[T],e[T],T,l,e):t;E===t&&(E=e[T]),d?bt(l,T,E):Xi(l,T,E)}return l}function Bg(e,r){return lt(e,Ja(e),r)}function Ug(e,r){return lt(e,Wu(e),r)}function is(e,r){return function(l,c){var d=Z(l)?Wd:ag,g=r?r():{};return d(l,e,H(c,2),g)}}function Ni(e){return ie(function(r,l){var c=-1,d=l.length,g=d>1?l[d-1]:t,v=d>2?l[2]:t;for(g=e.length>3&&typeof g=="function"?(d--,g):t,v&&un(l[0],l[1],v)&&(g=d<3?t:g,d=1),r=De(r);++c<d;){var T=l[c];T&&e(r,T,c,g)}return r})}function Cu(e,r){return function(l,c){if(l==null)return l;if(!pn(l))return e(l,c);for(var d=l.length,g=r?d:-1,v=De(l);(r?g--:++g<d)&&c(v[g],g,v)!==!1;);return l}}function Ou(e){return function(r,l,c){for(var d=-1,g=De(r),v=c(r),T=v.length;T--;){var E=v[e?T:++d];if(l(g[E],E,g)===!1)break}return r}}function Mg(e,r,l){var c=r&Y,d=ir(e);function g(){var v=this&&this!==Ze&&this instanceof g?d:e;return v.apply(c?l:this,arguments)}return g}function Ru(e){return function(r){r=ge(r);var l=Ei(r)?Hn(r):t,c=l?l[0]:r.charAt(0),d=l?Wt(l,1).join(""):r.slice(1);return c[e]()+d}}function Ci(e){return function(r){return pa(Cc(Nc(r).replace(Fd,"")),e,"")}}function ir(e){return function(){var r=arguments;switch(r.length){case 0:return new e;case 1:return new e(r[0]);case 2:return new e(r[0],r[1]);case 3:return new e(r[0],r[1],r[2]);case 4:return new e(r[0],r[1],r[2],r[3]);case 5:return new e(r[0],r[1],r[2],r[3],r[4]);case 6:return new e(r[0],r[1],r[2],r[3],r[4],r[5]);case 7:return new e(r[0],r[1],r[2],r[3],r[4],r[5],r[6])}var l=Fi(e.prototype),c=e.apply(l,r);return Ne(c)?c:l}}function $g(e,r,l){var c=ir(e);function d(){for(var g=arguments.length,v=I(g),T=g,E=Oi(d);T--;)v[T]=arguments[T];var F=g<3&&v[0]!==E&&v[g-1]!==E?[]:Ut(v,E);if(g-=F.length,g<l)return Uu(e,r,rs,d.placeholder,t,v,F,t,t,l-g);var N=this&&this!==Ze&&this instanceof d?c:e;return Tn(N,this,v)}return d}function xu(e){return function(r,l,c){var d=De(r);if(!pn(r)){var g=H(l,3);r=Je(r),l=function(T){return g(d[T],T,d)}}var v=e(r,l,c);return v>-1?d[g?r[v]:v]:t}}function Lu(e){return wt(function(r){var l=r.length,c=l,d=Ln.prototype.thru;for(e&&r.reverse();c--;){var g=r[c];if(typeof g!="function")throw new xn(u);if(d&&!v&&ls(g)=="wrapper")var v=new Ln([],!0)}for(c=v?c:l;++c<l;){g=r[c];var T=ls(g),E=T=="wrapper"?za(g):t;E&&Xa(E[0])&&E[1]==(xe|ye|je|gt)&&!E[4].length&&E[9]==1?v=v[ls(E[0])].apply(v,E[3]):v=g.length==1&&Xa(g)?v[T]():v.thru(g)}return function(){var F=arguments,N=F[0];if(v&&F.length==1&&Z(N))return v.plant(N).value();for(var x=0,B=l?r[x].apply(this,F):N;++x<l;)B=r[x].call(this,B);return B}})}function rs(e,r,l,c,d,g,v,T,E,F){var N=r&xe,x=r&Y,B=r&ce,q=r&(ye|Re),z=r&R,te=B?t:ir(e);function Q(){for(var se=arguments.length,ue=I(se),In=se;In--;)ue[In]=arguments[In];if(q)var cn=Oi(Q),An=Xd(ue,cn);if(c&&(ue=Fu(ue,c,d,q)),g&&(ue=Nu(ue,g,v,q)),se-=An,q&&se<F){var $e=Ut(ue,cn);return Uu(e,r,rs,Q.placeholder,l,ue,$e,T,E,F-se)}var Jn=x?l:this,At=B?Jn[e]:e;return se=ue.length,T?ue=am(ue,T):z&&se>1&&ue.reverse(),N&&E<se&&(ue.length=E),this&&this!==Ze&&this instanceof Q&&(At=te||ir(At)),At.apply(Jn,ue)}return Q}function Pu(e,r){return function(l,c){return pg(l,e,r(c),{})}}function ss(e,r){return function(l,c){var d;if(l===t&&c===t)return r;if(l!==t&&(d=l),c!==t){if(d===t)return c;typeof l=="string"||typeof c=="string"?(l=Dn(l),c=Dn(c)):(l=wu(l),c=wu(c)),d=e(l,c)}return d}}function qa(e){return wt(function(r){return r=ke(r,wn(H())),ie(function(l){var c=this;return e(r,function(d){return Tn(d,c,l)})})})}function as(e,r){r=r===t?" ":Dn(r);var l=r.length;if(l<2)return l?Ba(r,e):r;var c=Ba(r,jr(e/Ii(r)));return Ei(r)?Wt(Hn(c),0,e).join(""):c.slice(0,e)}function Gg(e,r,l,c){var d=r&Y,g=ir(e);function v(){for(var T=-1,E=arguments.length,F=-1,N=c.length,x=I(N+E),B=this&&this!==Ze&&this instanceof v?g:e;++F<N;)x[F]=c[F];for(;E--;)x[F++]=arguments[++T];return Tn(B,d?l:this,x)}return v}function Bu(e){return function(r,l,c){return c&&typeof c!="number"&&un(r,l,c)&&(l=c=t),r=It(r),l===t?(l=r,r=0):l=It(l),c=c===t?r<l?1:-1:It(c),_g(r,l,c,e)}}function os(e){return function(r,l){return typeof r=="string"&&typeof l=="string"||(r=Mn(r),l=Mn(l)),e(r,l)}}function Uu(e,r,l,c,d,g,v,T,E,F){var N=r&ye,x=N?v:t,B=N?t:v,q=N?g:t,z=N?t:g;r|=N?je:Qe,r&=~(N?Qe:je),r&_e||(r&=-4);var te=[e,r,d,q,x,z,B,T,E,F],Q=l.apply(t,te);return Xa(e)&&Ju(Q,te),Q.placeholder=c,Ku(Q,e,r)}function Ya(e){var r=He[e];return function(l,c){if(l=Mn(l),c=c==null?0:rn(ne(c),292),c&&Kl(l)){var d=(ge(l)+"e").split("e"),g=r(d[0]+"e"+(+d[1]+c));return d=(ge(g)+"e").split("e"),+(d[0]+"e"+(+d[1]-c))}return r(l)}}var Vg=Si&&1/Pr(new Si([,-0]))[1]==at?function(e){return new Si(e)}:po;function Mu(e){return function(r){var l=sn(r);return l==Yn?wa(r):l==jn?sp(r):Kd(r,e(r))}}function Tt(e,r,l,c,d,g,v,T){var E=r&ce;if(!E&&typeof e!="function")throw new xn(u);var F=c?c.length:0;if(F||(r&=-97,c=d=t),v=v===t?v:ze(ne(v),0),T=T===t?T:ne(T),F-=d?d.length:0,r&Qe){var N=c,x=d;c=d=t}var B=E?t:za(e),q=[e,r,l,c,d,N,x,g,v,T];if(B&&im(q,B),e=q[0],r=q[1],l=q[2],c=q[3],d=q[4],T=q[9]=q[9]===t?E?0:e.length:ze(q[9]-F,0),!T&&r&(ye|Re)&&(r&=-25),!r||r==Y)var z=Mg(e,r,l);else r==ye||r==Re?z=$g(e,r,T):(r==je||r==(Y|je))&&!d.length?z=Gg(e,r,l,c):z=rs.apply(t,q);var te=B?bu:Ju;return Ku(te(z,q),e,r)}function $u(e,r,l,c){return e===t||Qn(e,_i[l])&&!me.call(c,l)?r:e}function Gu(e,r,l,c,d,g){return Ne(e)&&Ne(r)&&(g.set(r,e),es(e,r,t,Gu,g),g.delete(r)),e}function Wg(e){return ar(e)?t:e}function Vu(e,r,l,c,d,g){var v=l&k,T=e.length,E=r.length;if(T!=E&&!(v&&E>T))return!1;var F=g.get(e),N=g.get(r);if(F&&N)return F==r&&N==e;var x=-1,B=!0,q=l&P?new ti:t;for(g.set(e,r),g.set(r,e);++x<T;){var z=e[x],te=r[x];if(c)var Q=v?c(te,z,x,r,e,g):c(z,te,x,e,r,g);if(Q!==t){if(Q)continue;B=!1;break}if(q){if(!ga(r,function(se,ue){if(!ji(q,ue)&&(z===se||d(z,se,l,c,g)))return q.push(ue)})){B=!1;break}}else if(!(z===te||d(z,te,l,c,g))){B=!1;break}}return g.delete(e),g.delete(r),B}function qg(e,r,l,c,d,g,v){switch(l){case Ti:if(e.byteLength!=r.byteLength||e.byteOffset!=r.byteOffset)return!1;e=e.buffer,r=r.buffer;case Yi:return!(e.byteLength!=r.byteLength||!g(new Vr(e),new Vr(r)));case pe:case Cn:case Gi:return Qn(+e,+r);case Lt:return e.name==r.name&&e.message==r.message;case Vi:case Wi:return e==r+"";case Yn:var T=wa;case jn:var E=c&k;if(T||(T=Pr),e.size!=r.size&&!E)return!1;var F=v.get(e);if(F)return F==r;c|=P,v.set(e,r);var N=Vu(T(e),T(r),c,d,g,v);return v.delete(e),N;case Nr:if(Ki)return Ki.call(e)==Ki.call(r)}return!1}function Yg(e,r,l,c,d,g){var v=l&k,T=ja(e),E=T.length,F=ja(r),N=F.length;if(E!=N&&!v)return!1;for(var x=E;x--;){var B=T[x];if(!(v?B in r:me.call(r,B)))return!1}var q=g.get(e),z=g.get(r);if(q&&z)return q==r&&z==e;var te=!0;g.set(e,r),g.set(r,e);for(var Q=v;++x<E;){B=T[x];var se=e[B],ue=r[B];if(c)var In=v?c(ue,se,B,r,e,g):c(se,ue,B,e,r,g);if(!(In===t?se===ue||d(se,ue,l,c,g):In)){te=!1;break}Q||(Q=B=="constructor")}if(te&&!Q){var cn=e.constructor,An=r.constructor;cn!=An&&"constructor"in e&&"constructor"in r&&!(typeof cn=="function"&&cn instanceof cn&&typeof An=="function"&&An instanceof An)&&(te=!1)}return g.delete(e),g.delete(r),te}function wt(e){return eo(zu(e,t,ic),e+"")}function ja(e){return lu(e,Je,Ja)}function Ha(e){return lu(e,gn,Wu)}var za=zr?function(e){return zr.get(e)}:po;function ls(e){for(var r=e.name+"",l=ki[r],c=me.call(ki,r)?l.length:0;c--;){var d=l[c],g=d.func;if(g==null||g==e)return d.name}return r}function Oi(e){var r=me.call(p,"placeholder")?p:e;return r.placeholder}function H(){var e=p.iteratee||fo;return e=e===fo?fu:e,arguments.length?e(arguments[0],arguments[1]):e}function us(e,r){var l=e.__data__;return Zg(r)?l[typeof r=="string"?"string":"hash"]:l.map}function Qa(e){for(var r=Je(e),l=r.length;l--;){var c=r[l],d=e[c];r[l]=[c,d,ju(d)]}return r}function si(e,r){var l=tp(e,r);return cu(l)?l:t}function jg(e){var r=me.call(e,ei),l=e[ei];try{e[ei]=t;var c=!0}catch{}var d=$r.call(e);return c&&(r?e[ei]=l:delete e[ei]),d}var Ja=Ea?function(e){return e==null?[]:(e=De(e),Pt(Ea(e),function(r){return Ql.call(e,r)}))}:go,Wu=Ea?function(e){for(var r=[];e;)Bt(r,Ja(e)),e=Wr(e);return r}:go,sn=ln;(Ia&&sn(new Ia(new ArrayBuffer(1)))!=Ti||zi&&sn(new zi)!=Yn||Aa&&sn(Aa.resolve())!=sl||Si&&sn(new Si)!=jn||Qi&&sn(new Qi)!=qi)&&(sn=function(e){var r=ln(e),l=r==mt?e.constructor:t,c=l?ai(l):"";if(c)switch(c){case kp:return Ti;case Fp:return Yn;case Np:return sl;case Cp:return jn;case Op:return qi}return r});function Hg(e,r,l){for(var c=-1,d=l.length;++c<d;){var g=l[c],v=g.size;switch(g.type){case"drop":e+=v;break;case"dropRight":r-=v;break;case"take":r=rn(r,e+v);break;case"takeRight":e=ze(e,r-v);break}}return{start:e,end:r}}function zg(e){var r=e.match(ed);return r?r[1].split(nd):[]}function qu(e,r,l){r=Vt(r,e);for(var c=-1,d=r.length,g=!1;++c<d;){var v=ut(r[c]);if(!(g=e!=null&&l(e,v)))break;e=e[v]}return g||++c!=d?g:(d=e==null?0:e.length,!!d&&ms(d)&&Dt(v,d)&&(Z(e)||oi(e)))}function Qg(e){var r=e.length,l=new e.constructor(r);return r&&typeof e[0]=="string"&&me.call(e,"index")&&(l.index=e.index,l.input=e.input),l}function Yu(e){return typeof e.constructor=="function"&&!rr(e)?Fi(Wr(e)):{}}function Jg(e,r,l){var c=e.constructor;switch(r){case Yi:return Wa(e);case pe:case Cn:return new c(+e);case Ti:return Rg(e,l);case Qs:case Js:case Ks:case Xs:case Zs:case ea:case na:case ta:case ia:return Su(e,l);case Yn:return new c;case Gi:case Wi:return new c(e);case Vi:return xg(e);case jn:return new c;case Nr:return Lg(e)}}function Kg(e,r){var l=r.length;if(!l)return e;var c=l-1;return r[c]=(l>1?"& ":"")+r[c],r=r.join(l>2?", ":" "),e.replace(Zh,`{
/* [wrapped with `+r+`] */
`)}function Xg(e){return Z(e)||oi(e)||!!(Jl&&e&&e[Jl])}function Dt(e,r){var l=typeof e;return r=r??qn,!!r&&(l=="number"||l!="symbol"&&cd.test(e))&&e>-1&&e%1==0&&e<r}function un(e,r,l){if(!Ne(l))return!1;var c=typeof r;return(c=="number"?pn(l)&&Dt(r,l.length):c=="string"&&r in l)?Qn(l[r],e):!1}function Ka(e,r){if(Z(e))return!1;var l=typeof e;return l=="number"||l=="symbol"||l=="boolean"||e==null||En(e)?!0:Qh.test(e)||!zh.test(e)||r!=null&&e in De(r)}function Zg(e){var r=typeof e;return r=="string"||r=="number"||r=="symbol"||r=="boolean"?e!=="__proto__":e===null}function Xa(e){var r=ls(e),l=p[r];if(typeof l!="function"||!(r in oe.prototype))return!1;if(e===l)return!0;var c=za(l);return!!c&&e===c[0]}function em(e){return!!jl&&jl in e}var nm=Ur?Et:mo;function rr(e){var r=e&&e.constructor,l=typeof r=="function"&&r.prototype||_i;return e===l}function ju(e){return e===e&&!Ne(e)}function Hu(e,r){return function(l){return l==null?!1:l[e]===r&&(r!==t||e in De(l))}}function tm(e){var r=ps(e,function(c){return l.size===m&&l.clear(),c}),l=r.cache;return r}function im(e,r){var l=e[1],c=r[1],d=l|c,g=d<(Y|ce|xe),v=c==xe&&l==ye||c==xe&&l==gt&&e[7].length<=r[8]||c==(xe|gt)&&r[7].length<=r[8]&&l==ye;if(!(g||v))return e;c&Y&&(e[2]=r[2],d|=l&Y?0:_e);var T=r[3];if(T){var E=e[3];e[3]=E?Fu(E,T,r[4]):T,e[4]=E?Ut(e[3],y):r[4]}return T=r[5],T&&(E=e[5],e[5]=E?Nu(E,T,r[6]):T,e[6]=E?Ut(e[5],y):r[6]),T=r[7],T&&(e[7]=T),c&xe&&(e[8]=e[8]==null?r[8]:rn(e[8],r[8])),e[9]==null&&(e[9]=r[9]),e[0]=r[0],e[1]=d,e}function rm(e){var r=[];if(e!=null)for(var l in De(e))r.push(l);return r}function sm(e){return $r.call(e)}function zu(e,r,l){return r=ze(r===t?e.length-1:r,0),function(){for(var c=arguments,d=-1,g=ze(c.length-r,0),v=I(g);++d<g;)v[d]=c[r+d];d=-1;for(var T=I(r+1);++d<r;)T[d]=c[d];return T[r]=l(v),Tn(e,this,T)}}function Qu(e,r){return r.length<2?e:ri(e,Bn(r,0,-1))}function am(e,r){for(var l=e.length,c=rn(r.length,l),d=dn(e);c--;){var g=r[c];e[c]=Dt(g,l)?d[g]:t}return e}function Za(e,r){if(!(r==="constructor"&&typeof e[r]=="function")&&r!="__proto__")return e[r]}var Ju=Xu(bu),sr=wp||function(e,r){return Ze.setTimeout(e,r)},eo=Xu(Fg);function Ku(e,r,l){var c=r+"";return eo(e,Kg(c,om(zg(c),l)))}function Xu(e){var r=0,l=0;return function(){var c=Ap(),d=Kt-(c-l);if(l=c,d>0){if(++r>=xt)return arguments[0]}else r=0;return e.apply(t,arguments)}}function cs(e,r){var l=-1,c=e.length,d=c-1;for(r=r===t?c:r;++l<r;){var g=Pa(l,d),v=e[g];e[g]=e[l],e[l]=v}return e.length=r,e}var Zu=tm(function(e){var r=[];return e.charCodeAt(0)===46&&r.push(""),e.replace(Jh,function(l,c,d,g){r.push(d?g.replace(rd,"$1"):c||l)}),r});function ut(e){if(typeof e=="string"||En(e))return e;var r=e+"";return r=="0"&&1/e==-at?"-0":r}function ai(e){if(e!=null){try{return Mr.call(e)}catch{}try{return e+""}catch{}}return""}function om(e,r){return Rn(U,function(l){var c="_."+l[0];r&l[1]&&!xr(e,c)&&e.push(c)}),e.sort()}function ec(e){if(e instanceof oe)return e.clone();var r=new Ln(e.__wrapped__,e.__chain__);return r.__actions__=dn(e.__actions__),r.__index__=e.__index__,r.__values__=e.__values__,r}function lm(e,r,l){(l?un(e,r,l):r===t)?r=1:r=ze(ne(r),0);var c=e==null?0:e.length;if(!c||r<1)return[];for(var d=0,g=0,v=I(jr(c/r));d<c;)v[g++]=Bn(e,d,d+=r);return v}function um(e){for(var r=-1,l=e==null?0:e.length,c=0,d=[];++r<l;){var g=e[r];g&&(d[c++]=g)}return d}function cm(){var e=arguments.length;if(!e)return[];for(var r=I(e-1),l=arguments[0],c=e;c--;)r[c-1]=arguments[c];return Bt(Z(l)?dn(l):[l],en(r,1))}var fm=ie(function(e,r){return Me(e)?Zi(e,en(r,1,Me,!0)):[]}),hm=ie(function(e,r){var l=Un(r);return Me(l)&&(l=t),Me(e)?Zi(e,en(r,1,Me,!0),H(l,2)):[]}),dm=ie(function(e,r){var l=Un(r);return Me(l)&&(l=t),Me(e)?Zi(e,en(r,1,Me,!0),t,l):[]});function pm(e,r,l){var c=e==null?0:e.length;return c?(r=l||r===t?1:ne(r),Bn(e,r<0?0:r,c)):[]}function gm(e,r,l){var c=e==null?0:e.length;return c?(r=l||r===t?1:ne(r),r=c-r,Bn(e,0,r<0?0:r)):[]}function mm(e,r){return e&&e.length?ts(e,H(r,3),!0,!0):[]}function ym(e,r){return e&&e.length?ts(e,H(r,3),!0):[]}function vm(e,r,l,c){var d=e==null?0:e.length;return d?(l&&typeof l!="number"&&un(e,r,l)&&(l=0,c=d),cg(e,r,l,c)):[]}function nc(e,r,l){var c=e==null?0:e.length;if(!c)return-1;var d=l==null?0:ne(l);return d<0&&(d=ze(c+d,0)),Lr(e,H(r,3),d)}function tc(e,r,l){var c=e==null?0:e.length;if(!c)return-1;var d=c-1;return l!==t&&(d=ne(l),d=l<0?ze(c+d,0):rn(d,c-1)),Lr(e,H(r,3),d,!0)}function ic(e){var r=e==null?0:e.length;return r?en(e,1):[]}function bm(e){var r=e==null?0:e.length;return r?en(e,at):[]}function Tm(e,r){var l=e==null?0:e.length;return l?(r=r===t?1:ne(r),en(e,r)):[]}function wm(e){for(var r=-1,l=e==null?0:e.length,c={};++r<l;){var d=e[r];c[d[0]]=d[1]}return c}function rc(e){return e&&e.length?e[0]:t}function Dm(e,r,l){var c=e==null?0:e.length;if(!c)return-1;var d=l==null?0:ne(l);return d<0&&(d=ze(c+d,0)),Di(e,r,d)}function Em(e){var r=e==null?0:e.length;return r?Bn(e,0,-1):[]}var Im=ie(function(e){var r=ke(e,Ga);return r.length&&r[0]===e[0]?Ca(r):[]}),Am=ie(function(e){var r=Un(e),l=ke(e,Ga);return r===Un(l)?r=t:l.pop(),l.length&&l[0]===e[0]?Ca(l,H(r,2)):[]}),_m=ie(function(e){var r=Un(e),l=ke(e,Ga);return r=typeof r=="function"?r:t,r&&l.pop(),l.length&&l[0]===e[0]?Ca(l,t,r):[]});function Sm(e,r){return e==null?"":Ep.call(e,r)}function Un(e){var r=e==null?0:e.length;return r?e[r-1]:t}function km(e,r,l){var c=e==null?0:e.length;if(!c)return-1;var d=c;return l!==t&&(d=ne(l),d=d<0?ze(c+d,0):rn(d,c-1)),r===r?op(e,r,d):Lr(e,Ul,d,!0)}function Fm(e,r){return e&&e.length?gu(e,ne(r)):t}var Nm=ie(sc);function sc(e,r){return e&&e.length&&r&&r.length?La(e,r):e}function Cm(e,r,l){return e&&e.length&&r&&r.length?La(e,r,H(l,2)):e}function Om(e,r,l){return e&&e.length&&r&&r.length?La(e,r,t,l):e}var Rm=wt(function(e,r){var l=e==null?0:e.length,c=Sa(e,r);return vu(e,ke(r,function(d){return Dt(d,l)?+d:d}).sort(ku)),c});function xm(e,r){var l=[];if(!(e&&e.length))return l;var c=-1,d=[],g=e.length;for(r=H(r,3);++c<g;){var v=e[c];r(v,c,e)&&(l.push(v),d.push(c))}return vu(e,d),l}function no(e){return e==null?e:Sp.call(e)}function Lm(e,r,l){var c=e==null?0:e.length;return c?(l&&typeof l!="number"&&un(e,r,l)?(r=0,l=c):(r=r==null?0:ne(r),l=l===t?c:ne(l)),Bn(e,r,l)):[]}function Pm(e,r){return ns(e,r)}function Bm(e,r,l){return Ua(e,r,H(l,2))}function Um(e,r){var l=e==null?0:e.length;if(l){var c=ns(e,r);if(c<l&&Qn(e[c],r))return c}return-1}function Mm(e,r){return ns(e,r,!0)}function $m(e,r,l){return Ua(e,r,H(l,2),!0)}function Gm(e,r){var l=e==null?0:e.length;if(l){var c=ns(e,r,!0)-1;if(Qn(e[c],r))return c}return-1}function Vm(e){return e&&e.length?Tu(e):[]}function Wm(e,r){return e&&e.length?Tu(e,H(r,2)):[]}function qm(e){var r=e==null?0:e.length;return r?Bn(e,1,r):[]}function Ym(e,r,l){return e&&e.length?(r=l||r===t?1:ne(r),Bn(e,0,r<0?0:r)):[]}function jm(e,r,l){var c=e==null?0:e.length;return c?(r=l||r===t?1:ne(r),r=c-r,Bn(e,r<0?0:r,c)):[]}function Hm(e,r){return e&&e.length?ts(e,H(r,3),!1,!0):[]}function zm(e,r){return e&&e.length?ts(e,H(r,3)):[]}var Qm=ie(function(e){return Gt(en(e,1,Me,!0))}),Jm=ie(function(e){var r=Un(e);return Me(r)&&(r=t),Gt(en(e,1,Me,!0),H(r,2))}),Km=ie(function(e){var r=Un(e);return r=typeof r=="function"?r:t,Gt(en(e,1,Me,!0),t,r)});function Xm(e){return e&&e.length?Gt(e):[]}function Zm(e,r){return e&&e.length?Gt(e,H(r,2)):[]}function ey(e,r){return r=typeof r=="function"?r:t,e&&e.length?Gt(e,t,r):[]}function to(e){if(!(e&&e.length))return[];var r=0;return e=Pt(e,function(l){if(Me(l))return r=ze(l.length,r),!0}),ba(r,function(l){return ke(e,ma(l))})}function ac(e,r){if(!(e&&e.length))return[];var l=to(e);return r==null?l:ke(l,function(c){return Tn(r,t,c)})}var ny=ie(function(e,r){return Me(e)?Zi(e,r):[]}),ty=ie(function(e){return $a(Pt(e,Me))}),iy=ie(function(e){var r=Un(e);return Me(r)&&(r=t),$a(Pt(e,Me),H(r,2))}),ry=ie(function(e){var r=Un(e);return r=typeof r=="function"?r:t,$a(Pt(e,Me),t,r)}),sy=ie(to);function ay(e,r){return Iu(e||[],r||[],Xi)}function oy(e,r){return Iu(e||[],r||[],tr)}var ly=ie(function(e){var r=e.length,l=r>1?e[r-1]:t;return l=typeof l=="function"?(e.pop(),l):t,ac(e,l)});function oc(e){var r=p(e);return r.__chain__=!0,r}function uy(e,r){return r(e),e}function fs(e,r){return r(e)}var cy=wt(function(e){var r=e.length,l=r?e[0]:0,c=this.__wrapped__,d=function(g){return Sa(g,e)};return r>1||this.__actions__.length||!(c instanceof oe)||!Dt(l)?this.thru(d):(c=c.slice(l,+l+(r?1:0)),c.__actions__.push({func:fs,args:[d],thisArg:t}),new Ln(c,this.__chain__).thru(function(g){return r&&!g.length&&g.push(t),g}))});function fy(){return oc(this)}function hy(){return new Ln(this.value(),this.__chain__)}function dy(){this.__values__===t&&(this.__values__=wc(this.value()));var e=this.__index__>=this.__values__.length,r=e?t:this.__values__[this.__index__++];return{done:e,value:r}}function py(){return this}function gy(e){for(var r,l=this;l instanceof Jr;){var c=ec(l);c.__index__=0,c.__values__=t,r?d.__wrapped__=c:r=c;var d=c;l=l.__wrapped__}return d.__wrapped__=e,r}function my(){var e=this.__wrapped__;if(e instanceof oe){var r=e;return this.__actions__.length&&(r=new oe(this)),r=r.reverse(),r.__actions__.push({func:fs,args:[no],thisArg:t}),new Ln(r,this.__chain__)}return this.thru(no)}function yy(){return Eu(this.__wrapped__,this.__actions__)}var vy=is(function(e,r,l){me.call(e,l)?++e[l]:bt(e,l,1)});function by(e,r,l){var c=Z(e)?Pl:ug;return l&&un(e,r,l)&&(r=t),c(e,H(r,3))}function Ty(e,r){var l=Z(e)?Pt:au;return l(e,H(r,3))}var wy=xu(nc),Dy=xu(tc);function Ey(e,r){return en(hs(e,r),1)}function Iy(e,r){return en(hs(e,r),at)}function Ay(e,r,l){return l=l===t?1:ne(l),en(hs(e,r),l)}function lc(e,r){var l=Z(e)?Rn:$t;return l(e,H(r,3))}function uc(e,r){var l=Z(e)?qd:su;return l(e,H(r,3))}var _y=is(function(e,r,l){me.call(e,l)?e[l].push(r):bt(e,l,[r])});function Sy(e,r,l,c){e=pn(e)?e:xi(e),l=l&&!c?ne(l):0;var d=e.length;return l<0&&(l=ze(d+l,0)),ys(e)?l<=d&&e.indexOf(r,l)>-1:!!d&&Di(e,r,l)>-1}var ky=ie(function(e,r,l){var c=-1,d=typeof r=="function",g=pn(e)?I(e.length):[];return $t(e,function(v){g[++c]=d?Tn(r,v,l):er(v,r,l)}),g}),Fy=is(function(e,r,l){bt(e,l,r)});function hs(e,r){var l=Z(e)?ke:hu;return l(e,H(r,3))}function Ny(e,r,l,c){return e==null?[]:(Z(r)||(r=r==null?[]:[r]),l=c?t:l,Z(l)||(l=l==null?[]:[l]),mu(e,r,l))}var Cy=is(function(e,r,l){e[l?0:1].push(r)},function(){return[[],[]]});function Oy(e,r,l){var c=Z(e)?pa:$l,d=arguments.length<3;return c(e,H(r,4),l,d,$t)}function Ry(e,r,l){var c=Z(e)?Yd:$l,d=arguments.length<3;return c(e,H(r,4),l,d,su)}function xy(e,r){var l=Z(e)?Pt:au;return l(e,gs(H(r,3)))}function Ly(e){var r=Z(e)?nu:Sg;return r(e)}function Py(e,r,l){(l?un(e,r,l):r===t)?r=1:r=ne(r);var c=Z(e)?rg:kg;return c(e,r)}function By(e){var r=Z(e)?sg:Ng;return r(e)}function Uy(e){if(e==null)return 0;if(pn(e))return ys(e)?Ii(e):e.length;var r=sn(e);return r==Yn||r==jn?e.size:Ra(e).length}function My(e,r,l){var c=Z(e)?ga:Cg;return l&&un(e,r,l)&&(r=t),c(e,H(r,3))}var $y=ie(function(e,r){if(e==null)return[];var l=r.length;return l>1&&un(e,r[0],r[1])?r=[]:l>2&&un(r[0],r[1],r[2])&&(r=[r[0]]),mu(e,en(r,1),[])}),ds=Tp||function(){return Ze.Date.now()};function Gy(e,r){if(typeof r!="function")throw new xn(u);return e=ne(e),function(){if(--e<1)return r.apply(this,arguments)}}function cc(e,r,l){return r=l?t:r,r=e&&r==null?e.length:r,Tt(e,xe,t,t,t,t,r)}function fc(e,r){var l;if(typeof r!="function")throw new xn(u);return e=ne(e),function(){return--e>0&&(l=r.apply(this,arguments)),e<=1&&(r=t),l}}var io=ie(function(e,r,l){var c=Y;if(l.length){var d=Ut(l,Oi(io));c|=je}return Tt(e,c,r,l,d)}),hc=ie(function(e,r,l){var c=Y|ce;if(l.length){var d=Ut(l,Oi(hc));c|=je}return Tt(r,c,e,l,d)});function dc(e,r,l){r=l?t:r;var c=Tt(e,ye,t,t,t,t,t,r);return c.placeholder=dc.placeholder,c}function pc(e,r,l){r=l?t:r;var c=Tt(e,Re,t,t,t,t,t,r);return c.placeholder=pc.placeholder,c}function gc(e,r,l){var c,d,g,v,T,E,F=0,N=!1,x=!1,B=!0;if(typeof e!="function")throw new xn(u);r=Mn(r)||0,Ne(l)&&(N=!!l.leading,x="maxWait"in l,g=x?ze(Mn(l.maxWait)||0,r):g,B="trailing"in l?!!l.trailing:B);function q($e){var Jn=c,At=d;return c=d=t,F=$e,v=e.apply(At,Jn),v}function z($e){return F=$e,T=sr(se,r),N?q($e):v}function te($e){var Jn=$e-E,At=$e-F,xc=r-Jn;return x?rn(xc,g-At):xc}function Q($e){var Jn=$e-E,At=$e-F;return E===t||Jn>=r||Jn<0||x&&At>=g}function se(){var $e=ds();if(Q($e))return ue($e);T=sr(se,te($e))}function ue($e){return T=t,B&&c?q($e):(c=d=t,v)}function In(){T!==t&&Au(T),F=0,c=E=d=T=t}function cn(){return T===t?v:ue(ds())}function An(){var $e=ds(),Jn=Q($e);if(c=arguments,d=this,E=$e,Jn){if(T===t)return z(E);if(x)return Au(T),T=sr(se,r),q(E)}return T===t&&(T=sr(se,r)),v}return An.cancel=In,An.flush=cn,An}var Vy=ie(function(e,r){return ru(e,1,r)}),Wy=ie(function(e,r,l){return ru(e,Mn(r)||0,l)});function qy(e){return Tt(e,R)}function ps(e,r){if(typeof e!="function"||r!=null&&typeof r!="function")throw new xn(u);var l=function(){var c=arguments,d=r?r.apply(this,c):c[0],g=l.cache;if(g.has(d))return g.get(d);var v=e.apply(this,c);return l.cache=g.set(d,v)||g,v};return l.cache=new(ps.Cache||vt),l}ps.Cache=vt;function gs(e){if(typeof e!="function")throw new xn(u);return function(){var r=arguments;switch(r.length){case 0:return!e.call(this);case 1:return!e.call(this,r[0]);case 2:return!e.call(this,r[0],r[1]);case 3:return!e.call(this,r[0],r[1],r[2])}return!e.apply(this,r)}}function Yy(e){return fc(2,e)}var jy=Og(function(e,r){r=r.length==1&&Z(r[0])?ke(r[0],wn(H())):ke(en(r,1),wn(H()));var l=r.length;return ie(function(c){for(var d=-1,g=rn(c.length,l);++d<g;)c[d]=r[d].call(this,c[d]);return Tn(e,this,c)})}),ro=ie(function(e,r){var l=Ut(r,Oi(ro));return Tt(e,je,t,r,l)}),mc=ie(function(e,r){var l=Ut(r,Oi(mc));return Tt(e,Qe,t,r,l)}),Hy=wt(function(e,r){return Tt(e,gt,t,t,t,r)});function zy(e,r){if(typeof e!="function")throw new xn(u);return r=r===t?r:ne(r),ie(e,r)}function Qy(e,r){if(typeof e!="function")throw new xn(u);return r=r==null?0:ze(ne(r),0),ie(function(l){var c=l[r],d=Wt(l,0,r);return c&&Bt(d,c),Tn(e,this,d)})}function Jy(e,r,l){var c=!0,d=!0;if(typeof e!="function")throw new xn(u);return Ne(l)&&(c="leading"in l?!!l.leading:c,d="trailing"in l?!!l.trailing:d),gc(e,r,{leading:c,maxWait:r,trailing:d})}function Ky(e){return cc(e,1)}function Xy(e,r){return ro(Va(r),e)}function Zy(){if(!arguments.length)return[];var e=arguments[0];return Z(e)?e:[e]}function ev(e){return Pn(e,S)}function nv(e,r){return r=typeof r=="function"?r:t,Pn(e,S,r)}function tv(e){return Pn(e,b|S)}function iv(e,r){return r=typeof r=="function"?r:t,Pn(e,b|S,r)}function rv(e,r){return r==null||iu(e,r,Je(r))}function Qn(e,r){return e===r||e!==e&&r!==r}var sv=os(Na),av=os(function(e,r){return e>=r}),oi=uu(function(){return arguments}())?uu:function(e){return Le(e)&&me.call(e,"callee")&&!Ql.call(e,"callee")},Z=I.isArray,ov=Nl?wn(Nl):gg;function pn(e){return e!=null&&ms(e.length)&&!Et(e)}function Me(e){return Le(e)&&pn(e)}function lv(e){return e===!0||e===!1||Le(e)&&ln(e)==pe}var qt=Dp||mo,uv=Cl?wn(Cl):mg;function cv(e){return Le(e)&&e.nodeType===1&&!ar(e)}function fv(e){if(e==null)return!0;if(pn(e)&&(Z(e)||typeof e=="string"||typeof e.splice=="function"||qt(e)||Ri(e)||oi(e)))return!e.length;var r=sn(e);if(r==Yn||r==jn)return!e.size;if(rr(e))return!Ra(e).length;for(var l in e)if(me.call(e,l))return!1;return!0}function hv(e,r){return nr(e,r)}function dv(e,r,l){l=typeof l=="function"?l:t;var c=l?l(e,r):t;return c===t?nr(e,r,t,l):!!c}function so(e){if(!Le(e))return!1;var r=ln(e);return r==Lt||r==$i||typeof e.message=="string"&&typeof e.name=="string"&&!ar(e)}function pv(e){return typeof e=="number"&&Kl(e)}function Et(e){if(!Ne(e))return!1;var r=ln(e);return r==tn||r==rl||r==Ue||r==Uh}function yc(e){return typeof e=="number"&&e==ne(e)}function ms(e){return typeof e=="number"&&e>-1&&e%1==0&&e<=qn}function Ne(e){var r=typeof e;return e!=null&&(r=="object"||r=="function")}function Le(e){return e!=null&&typeof e=="object"}var vc=Ol?wn(Ol):vg;function gv(e,r){return e===r||Oa(e,r,Qa(r))}function mv(e,r,l){return l=typeof l=="function"?l:t,Oa(e,r,Qa(r),l)}function yv(e){return bc(e)&&e!=+e}function vv(e){if(nm(e))throw new X(o);return cu(e)}function bv(e){return e===null}function Tv(e){return e==null}function bc(e){return typeof e=="number"||Le(e)&&ln(e)==Gi}function ar(e){if(!Le(e)||ln(e)!=mt)return!1;var r=Wr(e);if(r===null)return!0;var l=me.call(r,"constructor")&&r.constructor;return typeof l=="function"&&l instanceof l&&Mr.call(l)==mp}var ao=Rl?wn(Rl):bg;function wv(e){return yc(e)&&e>=-qn&&e<=qn}var Tc=xl?wn(xl):Tg;function ys(e){return typeof e=="string"||!Z(e)&&Le(e)&&ln(e)==Wi}function En(e){return typeof e=="symbol"||Le(e)&&ln(e)==Nr}var Ri=Ll?wn(Ll):wg;function Dv(e){return e===t}function Ev(e){return Le(e)&&sn(e)==qi}function Iv(e){return Le(e)&&ln(e)==$h}var Av=os(xa),_v=os(function(e,r){return e<=r});function wc(e){if(!e)return[];if(pn(e))return ys(e)?Hn(e):dn(e);if(Hi&&e[Hi])return rp(e[Hi]());var r=sn(e),l=r==Yn?wa:r==jn?Pr:xi;return l(e)}function It(e){if(!e)return e===0?e:0;if(e=Mn(e),e===at||e===-at){var r=e<0?-1:1;return r*bi}return e===e?e:0}function ne(e){var r=It(e),l=r%1;return r===r?l?r-l:r:0}function Dc(e){return e?ii(ne(e),0,Nn):0}function Mn(e){if(typeof e=="number")return e;if(En(e))return Xt;if(Ne(e)){var r=typeof e.valueOf=="function"?e.valueOf():e;e=Ne(r)?r+"":r}if(typeof e!="string")return e===0?e:+e;e=Gl(e);var l=od.test(e);return l||ud.test(e)?Gd(e.slice(2),l?2:8):ad.test(e)?Xt:+e}function Ec(e){return lt(e,gn(e))}function Sv(e){return e?ii(ne(e),-qn,qn):e===0?e:0}function ge(e){return e==null?"":Dn(e)}var kv=Ni(function(e,r){if(rr(r)||pn(r)){lt(r,Je(r),e);return}for(var l in r)me.call(r,l)&&Xi(e,l,r[l])}),Ic=Ni(function(e,r){lt(r,gn(r),e)}),vs=Ni(function(e,r,l,c){lt(r,gn(r),e,c)}),Fv=Ni(function(e,r,l,c){lt(r,Je(r),e,c)}),Nv=wt(Sa);function Cv(e,r){var l=Fi(e);return r==null?l:tu(l,r)}var Ov=ie(function(e,r){e=De(e);var l=-1,c=r.length,d=c>2?r[2]:t;for(d&&un(r[0],r[1],d)&&(c=1);++l<c;)for(var g=r[l],v=gn(g),T=-1,E=v.length;++T<E;){var F=v[T],N=e[F];(N===t||Qn(N,_i[F])&&!me.call(e,F))&&(e[F]=g[F])}return e}),Rv=ie(function(e){return e.push(t,Gu),Tn(Ac,t,e)});function xv(e,r){return Bl(e,H(r,3),ot)}function Lv(e,r){return Bl(e,H(r,3),Fa)}function Pv(e,r){return e==null?e:ka(e,H(r,3),gn)}function Bv(e,r){return e==null?e:ou(e,H(r,3),gn)}function Uv(e,r){return e&&ot(e,H(r,3))}function Mv(e,r){return e&&Fa(e,H(r,3))}function $v(e){return e==null?[]:Zr(e,Je(e))}function Gv(e){return e==null?[]:Zr(e,gn(e))}function oo(e,r,l){var c=e==null?t:ri(e,r);return c===t?l:c}function Vv(e,r){return e!=null&&qu(e,r,fg)}function lo(e,r){return e!=null&&qu(e,r,hg)}var Wv=Pu(function(e,r,l){r!=null&&typeof r.toString!="function"&&(r=$r.call(r)),e[r]=l},co(mn)),qv=Pu(function(e,r,l){r!=null&&typeof r.toString!="function"&&(r=$r.call(r)),me.call(e,r)?e[r].push(l):e[r]=[l]},H),Yv=ie(er);function Je(e){return pn(e)?eu(e):Ra(e)}function gn(e){return pn(e)?eu(e,!0):Dg(e)}function jv(e,r){var l={};return r=H(r,3),ot(e,function(c,d,g){bt(l,r(c,d,g),c)}),l}function Hv(e,r){var l={};return r=H(r,3),ot(e,function(c,d,g){bt(l,d,r(c,d,g))}),l}var zv=Ni(function(e,r,l){es(e,r,l)}),Ac=Ni(function(e,r,l,c){es(e,r,l,c)}),Qv=wt(function(e,r){var l={};if(e==null)return l;var c=!1;r=ke(r,function(g){return g=Vt(g,e),c||(c=g.length>1),g}),lt(e,Ha(e),l),c&&(l=Pn(l,b|O|S,Wg));for(var d=r.length;d--;)Ma(l,r[d]);return l});function Jv(e,r){return _c(e,gs(H(r)))}var Kv=wt(function(e,r){return e==null?{}:Ig(e,r)});function _c(e,r){if(e==null)return{};var l=ke(Ha(e),function(c){return[c]});return r=H(r),yu(e,l,function(c,d){return r(c,d[0])})}function Xv(e,r,l){r=Vt(r,e);var c=-1,d=r.length;for(d||(d=1,e=t);++c<d;){var g=e==null?t:e[ut(r[c])];g===t&&(c=d,g=l),e=Et(g)?g.call(e):g}return e}function Zv(e,r,l){return e==null?e:tr(e,r,l)}function eb(e,r,l,c){return c=typeof c=="function"?c:t,e==null?e:tr(e,r,l,c)}var Sc=Mu(Je),kc=Mu(gn);function nb(e,r,l){var c=Z(e),d=c||qt(e)||Ri(e);if(r=H(r,4),l==null){var g=e&&e.constructor;d?l=c?new g:[]:Ne(e)?l=Et(g)?Fi(Wr(e)):{}:l={}}return(d?Rn:ot)(e,function(v,T,E){return r(l,v,T,E)}),l}function tb(e,r){return e==null?!0:Ma(e,r)}function ib(e,r,l){return e==null?e:Du(e,r,Va(l))}function rb(e,r,l,c){return c=typeof c=="function"?c:t,e==null?e:Du(e,r,Va(l),c)}function xi(e){return e==null?[]:Ta(e,Je(e))}function sb(e){return e==null?[]:Ta(e,gn(e))}function ab(e,r,l){return l===t&&(l=r,r=t),l!==t&&(l=Mn(l),l=l===l?l:0),r!==t&&(r=Mn(r),r=r===r?r:0),ii(Mn(e),r,l)}function ob(e,r,l){return r=It(r),l===t?(l=r,r=0):l=It(l),e=Mn(e),dg(e,r,l)}function lb(e,r,l){if(l&&typeof l!="boolean"&&un(e,r,l)&&(r=l=t),l===t&&(typeof r=="boolean"?(l=r,r=t):typeof e=="boolean"&&(l=e,e=t)),e===t&&r===t?(e=0,r=1):(e=It(e),r===t?(r=e,e=0):r=It(r)),e>r){var c=e;e=r,r=c}if(l||e%1||r%1){var d=Xl();return rn(e+d*(r-e+$d("1e-"+((d+"").length-1))),r)}return Pa(e,r)}var ub=Ci(function(e,r,l){return r=r.toLowerCase(),e+(l?Fc(r):r)});function Fc(e){return uo(ge(e).toLowerCase())}function Nc(e){return e=ge(e),e&&e.replace(fd,Zd).replace(Nd,"")}function cb(e,r,l){e=ge(e),r=Dn(r);var c=e.length;l=l===t?c:ii(ne(l),0,c);var d=l;return l-=r.length,l>=0&&e.slice(l,d)==r}function fb(e){return e=ge(e),e&&Yh.test(e)?e.replace(ol,ep):e}function hb(e){return e=ge(e),e&&Kh.test(e)?e.replace(ra,"\\$&"):e}var db=Ci(function(e,r,l){return e+(l?"-":"")+r.toLowerCase()}),pb=Ci(function(e,r,l){return e+(l?" ":"")+r.toLowerCase()}),gb=Ru("toLowerCase");function mb(e,r,l){e=ge(e),r=ne(r);var c=r?Ii(e):0;if(!r||c>=r)return e;var d=(r-c)/2;return as(Hr(d),l)+e+as(jr(d),l)}function yb(e,r,l){e=ge(e),r=ne(r);var c=r?Ii(e):0;return r&&c<r?e+as(r-c,l):e}function vb(e,r,l){e=ge(e),r=ne(r);var c=r?Ii(e):0;return r&&c<r?as(r-c,l)+e:e}function bb(e,r,l){return l||r==null?r=0:r&&(r=+r),_p(ge(e).replace(sa,""),r||0)}function Tb(e,r,l){return(l?un(e,r,l):r===t)?r=1:r=ne(r),Ba(ge(e),r)}function wb(){var e=arguments,r=ge(e[0]);return e.length<3?r:r.replace(e[1],e[2])}var Db=Ci(function(e,r,l){return e+(l?"_":"")+r.toLowerCase()});function Eb(e,r,l){return l&&typeof l!="number"&&un(e,r,l)&&(r=l=t),l=l===t?Nn:l>>>0,l?(e=ge(e),e&&(typeof r=="string"||r!=null&&!ao(r))&&(r=Dn(r),!r&&Ei(e))?Wt(Hn(e),0,l):e.split(r,l)):[]}var Ib=Ci(function(e,r,l){return e+(l?" ":"")+uo(r)});function Ab(e,r,l){return e=ge(e),l=l==null?0:ii(ne(l),0,e.length),r=Dn(r),e.slice(l,l+r.length)==r}function _b(e,r,l){var c=p.templateSettings;l&&un(e,r,l)&&(r=t),e=ge(e),r=vs({},r,c,$u);var d=vs({},r.imports,c.imports,$u),g=Je(d),v=Ta(d,g),T,E,F=0,N=r.interpolate||Cr,x="__p += '",B=Da((r.escape||Cr).source+"|"+N.source+"|"+(N===ll?sd:Cr).source+"|"+(r.evaluate||Cr).source+"|$","g"),q="//# sourceURL="+(me.call(r,"sourceURL")?(r.sourceURL+"").replace(/\s/g," "):"lodash.templateSources["+ ++Ld+"]")+`
`;e.replace(B,function(Q,se,ue,In,cn,An){return ue||(ue=In),x+=e.slice(F,An).replace(hd,np),se&&(T=!0,x+=`' +
__e(`+se+`) +
'`),cn&&(E=!0,x+=`';
`+cn+`;
__p += '`),ue&&(x+=`' +
((__t = (`+ue+`)) == null ? '' : __t) +
'`),F=An+Q.length,Q}),x+=`';
`;var z=me.call(r,"variable")&&r.variable;if(!z)x=`with (obj) {
`+x+`
}
`;else if(id.test(z))throw new X(f);x=(E?x.replace(Gh,""):x).replace(Vh,"$1").replace(Wh,"$1;"),x="function("+(z||"obj")+`) {
`+(z?"":`obj || (obj = {});
`)+"var __t, __p = ''"+(T?", __e = _.escape":"")+(E?`, __j = Array.prototype.join;
function print() { __p += __j.call(arguments, '') }
`:`;
`)+x+`return __p
}`;var te=Oc(function(){return he(g,q+"return "+x).apply(t,v)});if(te.source=x,so(te))throw te;return te}function Sb(e){return ge(e).toLowerCase()}function kb(e){return ge(e).toUpperCase()}function Fb(e,r,l){if(e=ge(e),e&&(l||r===t))return Gl(e);if(!e||!(r=Dn(r)))return e;var c=Hn(e),d=Hn(r),g=Vl(c,d),v=Wl(c,d)+1;return Wt(c,g,v).join("")}function Nb(e,r,l){if(e=ge(e),e&&(l||r===t))return e.slice(0,Yl(e)+1);if(!e||!(r=Dn(r)))return e;var c=Hn(e),d=Wl(c,Hn(r))+1;return Wt(c,0,d).join("")}function Cb(e,r,l){if(e=ge(e),e&&(l||r===t))return e.replace(sa,"");if(!e||!(r=Dn(r)))return e;var c=Hn(e),d=Vl(c,Hn(r));return Wt(c,d).join("")}function Ob(e,r){var l=K,c=on;if(Ne(r)){var d="separator"in r?r.separator:d;l="length"in r?ne(r.length):l,c="omission"in r?Dn(r.omission):c}e=ge(e);var g=e.length;if(Ei(e)){var v=Hn(e);g=v.length}if(l>=g)return e;var T=l-Ii(c);if(T<1)return c;var E=v?Wt(v,0,T).join(""):e.slice(0,T);if(d===t)return E+c;if(v&&(T+=E.length-T),ao(d)){if(e.slice(T).search(d)){var F,N=E;for(d.global||(d=Da(d.source,ge(ul.exec(d))+"g")),d.lastIndex=0;F=d.exec(N);)var x=F.index;E=E.slice(0,x===t?T:x)}}else if(e.indexOf(Dn(d),T)!=T){var B=E.lastIndexOf(d);B>-1&&(E=E.slice(0,B))}return E+c}function Rb(e){return e=ge(e),e&&qh.test(e)?e.replace(al,lp):e}var xb=Ci(function(e,r,l){return e+(l?" ":"")+r.toUpperCase()}),uo=Ru("toUpperCase");function Cc(e,r,l){return e=ge(e),r=l?t:r,r===t?ip(e)?fp(e):zd(e):e.match(r)||[]}var Oc=ie(function(e,r){try{return Tn(e,t,r)}catch(l){return so(l)?l:new X(l)}}),Lb=wt(function(e,r){return Rn(r,function(l){l=ut(l),bt(e,l,io(e[l],e))}),e});function Pb(e){var r=e==null?0:e.length,l=H();return e=r?ke(e,function(c){if(typeof c[1]!="function")throw new xn(u);return[l(c[0]),c[1]]}):[],ie(function(c){for(var d=-1;++d<r;){var g=e[d];if(Tn(g[0],this,c))return Tn(g[1],this,c)}})}function Bb(e){return lg(Pn(e,b))}function co(e){return function(){return e}}function Ub(e,r){return e==null||e!==e?r:e}var Mb=Lu(),$b=Lu(!0);function mn(e){return e}function fo(e){return fu(typeof e=="function"?e:Pn(e,b))}function Gb(e){return du(Pn(e,b))}function Vb(e,r){return pu(e,Pn(r,b))}var Wb=ie(function(e,r){return function(l){return er(l,e,r)}}),qb=ie(function(e,r){return function(l){return er(e,l,r)}});function ho(e,r,l){var c=Je(r),d=Zr(r,c);l==null&&!(Ne(r)&&(d.length||!c.length))&&(l=r,r=e,e=this,d=Zr(r,Je(r)));var g=!(Ne(l)&&"chain"in l)||!!l.chain,v=Et(e);return Rn(d,function(T){var E=r[T];e[T]=E,v&&(e.prototype[T]=function(){var F=this.__chain__;if(g||F){var N=e(this.__wrapped__),x=N.__actions__=dn(this.__actions__);return x.push({func:E,args:arguments,thisArg:e}),N.__chain__=F,N}return E.apply(e,Bt([this.value()],arguments))})}),e}function Yb(){return Ze._===this&&(Ze._=yp),this}function po(){}function jb(e){return e=ne(e),ie(function(r){return gu(r,e)})}var Hb=qa(ke),zb=qa(Pl),Qb=qa(ga);function Rc(e){return Ka(e)?ma(ut(e)):Ag(e)}function Jb(e){return function(r){return e==null?t:ri(e,r)}}var Kb=Bu(),Xb=Bu(!0);function go(){return[]}function mo(){return!1}function Zb(){return{}}function eT(){return""}function nT(){return!0}function tT(e,r){if(e=ne(e),e<1||e>qn)return[];var l=Nn,c=rn(e,Nn);r=H(r),e-=Nn;for(var d=ba(c,r);++l<e;)r(l);return d}function iT(e){return Z(e)?ke(e,ut):En(e)?[e]:dn(Zu(ge(e)))}function rT(e){var r=++gp;return ge(e)+r}var sT=ss(function(e,r){return e+r},0),aT=Ya("ceil"),oT=ss(function(e,r){return e/r},1),lT=Ya("floor");function uT(e){return e&&e.length?Xr(e,mn,Na):t}function cT(e,r){return e&&e.length?Xr(e,H(r,2),Na):t}function fT(e){return Ml(e,mn)}function hT(e,r){return Ml(e,H(r,2))}function dT(e){return e&&e.length?Xr(e,mn,xa):t}function pT(e,r){return e&&e.length?Xr(e,H(r,2),xa):t}var gT=ss(function(e,r){return e*r},1),mT=Ya("round"),yT=ss(function(e,r){return e-r},0);function vT(e){return e&&e.length?va(e,mn):0}function bT(e,r){return e&&e.length?va(e,H(r,2)):0}return p.after=Gy,p.ary=cc,p.assign=kv,p.assignIn=Ic,p.assignInWith=vs,p.assignWith=Fv,p.at=Nv,p.before=fc,p.bind=io,p.bindAll=Lb,p.bindKey=hc,p.castArray=Zy,p.chain=oc,p.chunk=lm,p.compact=um,p.concat=cm,p.cond=Pb,p.conforms=Bb,p.constant=co,p.countBy=vy,p.create=Cv,p.curry=dc,p.curryRight=pc,p.debounce=gc,p.defaults=Ov,p.defaultsDeep=Rv,p.defer=Vy,p.delay=Wy,p.difference=fm,p.differenceBy=hm,p.differenceWith=dm,p.drop=pm,p.dropRight=gm,p.dropRightWhile=mm,p.dropWhile=ym,p.fill=vm,p.filter=Ty,p.flatMap=Ey,p.flatMapDeep=Iy,p.flatMapDepth=Ay,p.flatten=ic,p.flattenDeep=bm,p.flattenDepth=Tm,p.flip=qy,p.flow=Mb,p.flowRight=$b,p.fromPairs=wm,p.functions=$v,p.functionsIn=Gv,p.groupBy=_y,p.initial=Em,p.intersection=Im,p.intersectionBy=Am,p.intersectionWith=_m,p.invert=Wv,p.invertBy=qv,p.invokeMap=ky,p.iteratee=fo,p.keyBy=Fy,p.keys=Je,p.keysIn=gn,p.map=hs,p.mapKeys=jv,p.mapValues=Hv,p.matches=Gb,p.matchesProperty=Vb,p.memoize=ps,p.merge=zv,p.mergeWith=Ac,p.method=Wb,p.methodOf=qb,p.mixin=ho,p.negate=gs,p.nthArg=jb,p.omit=Qv,p.omitBy=Jv,p.once=Yy,p.orderBy=Ny,p.over=Hb,p.overArgs=jy,p.overEvery=zb,p.overSome=Qb,p.partial=ro,p.partialRight=mc,p.partition=Cy,p.pick=Kv,p.pickBy=_c,p.property=Rc,p.propertyOf=Jb,p.pull=Nm,p.pullAll=sc,p.pullAllBy=Cm,p.pullAllWith=Om,p.pullAt=Rm,p.range=Kb,p.rangeRight=Xb,p.rearg=Hy,p.reject=xy,p.remove=xm,p.rest=zy,p.reverse=no,p.sampleSize=Py,p.set=Zv,p.setWith=eb,p.shuffle=By,p.slice=Lm,p.sortBy=$y,p.sortedUniq=Vm,p.sortedUniqBy=Wm,p.split=Eb,p.spread=Qy,p.tail=qm,p.take=Ym,p.takeRight=jm,p.takeRightWhile=Hm,p.takeWhile=zm,p.tap=uy,p.throttle=Jy,p.thru=fs,p.toArray=wc,p.toPairs=Sc,p.toPairsIn=kc,p.toPath=iT,p.toPlainObject=Ec,p.transform=nb,p.unary=Ky,p.union=Qm,p.unionBy=Jm,p.unionWith=Km,p.uniq=Xm,p.uniqBy=Zm,p.uniqWith=ey,p.unset=tb,p.unzip=to,p.unzipWith=ac,p.update=ib,p.updateWith=rb,p.values=xi,p.valuesIn=sb,p.without=ny,p.words=Cc,p.wrap=Xy,p.xor=ty,p.xorBy=iy,p.xorWith=ry,p.zip=sy,p.zipObject=ay,p.zipObjectDeep=oy,p.zipWith=ly,p.entries=Sc,p.entriesIn=kc,p.extend=Ic,p.extendWith=vs,ho(p,p),p.add=sT,p.attempt=Oc,p.camelCase=ub,p.capitalize=Fc,p.ceil=aT,p.clamp=ab,p.clone=ev,p.cloneDeep=tv,p.cloneDeepWith=iv,p.cloneWith=nv,p.conformsTo=rv,p.deburr=Nc,p.defaultTo=Ub,p.divide=oT,p.endsWith=cb,p.eq=Qn,p.escape=fb,p.escapeRegExp=hb,p.every=by,p.find=wy,p.findIndex=nc,p.findKey=xv,p.findLast=Dy,p.findLastIndex=tc,p.findLastKey=Lv,p.floor=lT,p.forEach=lc,p.forEachRight=uc,p.forIn=Pv,p.forInRight=Bv,p.forOwn=Uv,p.forOwnRight=Mv,p.get=oo,p.gt=sv,p.gte=av,p.has=Vv,p.hasIn=lo,p.head=rc,p.identity=mn,p.includes=Sy,p.indexOf=Dm,p.inRange=ob,p.invoke=Yv,p.isArguments=oi,p.isArray=Z,p.isArrayBuffer=ov,p.isArrayLike=pn,p.isArrayLikeObject=Me,p.isBoolean=lv,p.isBuffer=qt,p.isDate=uv,p.isElement=cv,p.isEmpty=fv,p.isEqual=hv,p.isEqualWith=dv,p.isError=so,p.isFinite=pv,p.isFunction=Et,p.isInteger=yc,p.isLength=ms,p.isMap=vc,p.isMatch=gv,p.isMatchWith=mv,p.isNaN=yv,p.isNative=vv,p.isNil=Tv,p.isNull=bv,p.isNumber=bc,p.isObject=Ne,p.isObjectLike=Le,p.isPlainObject=ar,p.isRegExp=ao,p.isSafeInteger=wv,p.isSet=Tc,p.isString=ys,p.isSymbol=En,p.isTypedArray=Ri,p.isUndefined=Dv,p.isWeakMap=Ev,p.isWeakSet=Iv,p.join=Sm,p.kebabCase=db,p.last=Un,p.lastIndexOf=km,p.lowerCase=pb,p.lowerFirst=gb,p.lt=Av,p.lte=_v,p.max=uT,p.maxBy=cT,p.mean=fT,p.meanBy=hT,p.min=dT,p.minBy=pT,p.stubArray=go,p.stubFalse=mo,p.stubObject=Zb,p.stubString=eT,p.stubTrue=nT,p.multiply=gT,p.nth=Fm,p.noConflict=Yb,p.noop=po,p.now=ds,p.pad=mb,p.padEnd=yb,p.padStart=vb,p.parseInt=bb,p.random=lb,p.reduce=Oy,p.reduceRight=Ry,p.repeat=Tb,p.replace=wb,p.result=Xv,p.round=mT,p.runInContext=D,p.sample=Ly,p.size=Uy,p.snakeCase=Db,p.some=My,p.sortedIndex=Pm,p.sortedIndexBy=Bm,p.sortedIndexOf=Um,p.sortedLastIndex=Mm,p.sortedLastIndexBy=$m,p.sortedLastIndexOf=Gm,p.startCase=Ib,p.startsWith=Ab,p.subtract=yT,p.sum=vT,p.sumBy=bT,p.template=_b,p.times=tT,p.toFinite=It,p.toInteger=ne,p.toLength=Dc,p.toLower=Sb,p.toNumber=Mn,p.toSafeInteger=Sv,p.toString=ge,p.toUpper=kb,p.trim=Fb,p.trimEnd=Nb,p.trimStart=Cb,p.truncate=Ob,p.unescape=Rb,p.uniqueId=rT,p.upperCase=xb,p.upperFirst=uo,p.each=lc,p.eachRight=uc,p.first=rc,ho(p,function(){var e={};return ot(p,function(r,l){me.call(p.prototype,l)||(e[l]=r)}),e}(),{chain:!1}),p.VERSION=s,Rn(["bind","bindKey","curry","curryRight","partial","partialRight"],function(e){p[e].placeholder=p}),Rn(["drop","take"],function(e,r){oe.prototype[e]=function(l){l=l===t?1:ze(ne(l),0);var c=this.__filtered__&&!r?new oe(this):this.clone();return c.__filtered__?c.__takeCount__=rn(l,c.__takeCount__):c.__views__.push({size:rn(l,Nn),type:e+(c.__dir__<0?"Right":"")}),c},oe.prototype[e+"Right"]=function(l){return this.reverse()[e](l).reverse()}}),Rn(["filter","map","takeWhile"],function(e,r){var l=r+1,c=l==kr||l==Fr;oe.prototype[e]=function(d){var g=this.clone();return g.__iteratees__.push({iteratee:H(d,3),type:l}),g.__filtered__=g.__filtered__||c,g}}),Rn(["head","last"],function(e,r){var l="take"+(r?"Right":"");oe.prototype[e]=function(){return this[l](1).value()[0]}}),Rn(["initial","tail"],function(e,r){var l="drop"+(r?"":"Right");oe.prototype[e]=function(){return this.__filtered__?new oe(this):this[l](1)}}),oe.prototype.compact=function(){return this.filter(mn)},oe.prototype.find=function(e){return this.filter(e).head()},oe.prototype.findLast=function(e){return this.reverse().find(e)},oe.prototype.invokeMap=ie(function(e,r){return typeof e=="function"?new oe(this):this.map(function(l){return er(l,e,r)})}),oe.prototype.reject=function(e){return this.filter(gs(H(e)))},oe.prototype.slice=function(e,r){e=ne(e);var l=this;return l.__filtered__&&(e>0||r<0)?new oe(l):(e<0?l=l.takeRight(-e):e&&(l=l.drop(e)),r!==t&&(r=ne(r),l=r<0?l.dropRight(-r):l.take(r-e)),l)},oe.prototype.takeRightWhile=function(e){return this.reverse().takeWhile(e).reverse()},oe.prototype.toArray=function(){return this.take(Nn)},ot(oe.prototype,function(e,r){var l=/^(?:filter|find|map|reject)|While$/.test(r),c=/^(?:head|last)$/.test(r),d=p[c?"take"+(r=="last"?"Right":""):r],g=c||/^find/.test(r);d&&(p.prototype[r]=function(){var v=this.__wrapped__,T=c?[1]:arguments,E=v instanceof oe,F=T[0],N=E||Z(v),x=function(se){var ue=d.apply(p,Bt([se],T));return c&&B?ue[0]:ue};N&&l&&typeof F=="function"&&F.length!=1&&(E=N=!1);var B=this.__chain__,q=!!this.__actions__.length,z=g&&!B,te=E&&!q;if(!g&&N){v=te?v:new oe(this);var Q=e.apply(v,T);return Q.__actions__.push({func:fs,args:[x],thisArg:t}),new Ln(Q,B)}return z&&te?e.apply(this,T):(Q=this.thru(x),z?c?Q.value()[0]:Q.value():Q)})}),Rn(["pop","push","shift","sort","splice","unshift"],function(e){var r=Br[e],l=/^(?:push|sort|unshift)$/.test(e)?"tap":"thru",c=/^(?:pop|shift)$/.test(e);p.prototype[e]=function(){var d=arguments;if(c&&!this.__chain__){var g=this.value();return r.apply(Z(g)?g:[],d)}return this[l](function(v){return r.apply(Z(v)?v:[],d)})}}),ot(oe.prototype,function(e,r){var l=p[r];if(l){var c=l.name+"";me.call(ki,c)||(ki[c]=[]),ki[c].push({name:r,func:l})}}),ki[rs(t,ce).name]=[{name:"wrapper",func:t}],oe.prototype.clone=Rp,oe.prototype.reverse=xp,oe.prototype.value=Lp,p.prototype.at=cy,p.prototype.chain=fy,p.prototype.commit=hy,p.prototype.next=dy,p.prototype.plant=gy,p.prototype.reverse=my,p.prototype.toJSON=p.prototype.valueOf=p.prototype.value=yy,p.prototype.first=p.prototype.head,Hi&&(p.prototype[Hi]=py),p},Ai=hp();Zt?((Zt.exports=Ai)._=Ai,fa._=Ai):Ze._=Ai}).call(ur)})(Cs,Cs.exports);var I0=Cs.exports;const Nt=E0(I0);function A0(){return{convert:i=>{if(i===null||i===void 0)return null;switch(typeof i){case"boolean":return i;case"string":{const n=i.toLowerCase().trim();return n==="true"||n==="t"||n==="1"}case"number":return i!==0;default:return null}},asString:i=>String(i),type:i=>i.boolean().optional()}}function _n(i,n){const t=s=>n.convert(s[i]);return{name:_0(i),key:i,asEnv:s=>({[i]:n.asString(s)}),zod:{type:n.type},get:t,getOrDefault:(s,a)=>t(s)??a}}function _0(i){return i.toLowerCase().replace(/([-_][a-z])/gi,n=>n.toUpperCase().replace("-","").replace("_",""))}_n("MAGIDOC_GENERATE",A0());function Ts(i){return{convert:n=>{if(Array.isArray(n))return n;if(typeof n=="string"){const t=JSON.parse(n);return Array.isArray(t)?t:null}return null},asString:n=>JSON.stringify(n),type:n=>n.array(i(n)).optional()}}function nf(i){return{convert:n=>{if(typeof n=="object")return n;if(typeof n=="string"){const t=JSON.parse(n);return typeof t!="object"?null:t}return null},asString:n=>JSON.stringify(n),type:n=>n.record(i(n).optional()).optional()}}function ws(){return{convert:i=>i==null||i===""?null:String(i),asString:i=>String(i),type:i=>i.string().optional()}}function tf(i){return{convert:n=>n==null||!i.find(t=>t===n)?null:n,asString:n=>String(n),type:n=>n.enum(i).optional()}}var $s={APP_LOGO:_n("APP_LOGO",ws()),APP_TITLE:_n("APP_TITLE",ws()),APP_FAVICON:_n("APP_FAVICON",ws()),SITE_ROOT:_n("SITE_ROOT",ws()),SITE_META:_n("SITE_META",nf(i=>i.string())),CUSTOM_STYLES:_n("CUSTOM_STYLES",Ts(i=>i.string())),FIELDS_SORTING:_n("FIELDS_SORTING",tf(["default","alphabetical"])),ARGUMENTS_SORTING:_n("ARGUMENTS_SORTING",tf(["default","alphabetical"])),QUERY_GENERATION_FACTORIES:_n("QUERY_GENERATION_FACTORIES",nf(i=>i.union([i.string(),i.boolean(),i.number(),i.null(),i.record(i.unknown())]))),PAGES:_n("PAGES",Ts(i=>{const n=i.lazy(()=>i.object({title:i.string().min(1),content:i.union([i.array(n),i.string().min(1)])}));return n})),EXTERNAL_LINKS:_n("EXTERNAL_LINKS",Ts(i=>i.object({label:i.string().min(1),href:i.string().min(1),position:i.union([i.literal("header"),i.literal("navigation")]).optional(),kind:i.string().min(1).optional(),group:i.string().min(1).optional()}))),DIRECTIVES:_n("DIRECTIVES",Ts(i=>i.object({name:i.string().min(1),args:i.array(i.string())})))};const S0="/api/dev-2.x/graphql-gtfs",k0="https://docs.opentripplanner.org/en/dev-2.x/images/otp-logo.svg",F0='["https://docs.opentripplanner.org/en/dev-2.x/css/magidoc-overrides.css"]',N0='[{"title":"Introduction","content":"\\n# OTP GTFS GraphQL API documentation\\n\\nThis is the static documentation of the OTP GraphQL GTFS API.\\n\\nThe GraphQL endpoint of your instance, which you should point your tooling to, is \\n`http://localhost:8080/otp/gtfs/v1`\\n\\nPlease also check out the interactive API explorer built into every instance and available\\nat http://localhost:8080/graphiql \\n\\n![GraphiQL screenshot](https://docs.opentripplanner.org/en/dev-2.x/images/graphiql.png)\\n\\n## Configuration\\n\\nThis API is activated by default.\\n\\nTo learn how to deactivate it, read the\\n[documentation](https://docs.opentripplanner.org/en/dev-2.x/apis/GTFS-GraphQL-API/).\\n"}]',C0="OTP GTFS GraphQL API",O0='{"Polyline":"<>","GeoJson":"<>","OffsetDateTime":"2024-02-05T18:04:23+01:00","LocalDate":"2024-05-24","Duration":"PT10M","CoordinateValue":19.24,"Reluctance":3.1,"Speed":3.4,"Cost":100,"Ratio":0.25,"Locale":"en"}',R0="true",$f={SITE_ROOT:S0,APP_LOGO:k0,CUSTOM_STYLES:F0,PAGES:N0,APP_TITLE:C0,QUERY_GENERATION_FACTORIES:O0,MAGIDOC_GENERATE:R0};function _I(i){return i.get($f)}function Gs(i,n){return i.getOrDefault($f,n)}function Vs(){return Gs($s.SITE_ROOT,AT)}class x0{constructor(n){ve(this,"mapping");this.mapping=n}getFor(n){return this.mapping.get(n.name)}}var gr;(function(i){i.UNION="union",i.ARGUMENT="argument",i.FIELD="field"})(gr||(gr={}));function fe(i,n){if(!!!i)throw new Error(n)}function Ct(i){return typeof i=="object"&&i!==null}function Zn(i,n){if(!!!i)throw new Error(n??"Unexpected invariant triggered.")}const L0=/\r\n|[\n\r]/g;function _o(i,n){let t=0,s=1;for(const a of i.body.matchAll(L0)){if(typeof a.index=="number"||Zn(!1),a.index>=n)break;t=a.index+a[0].length,s+=1}return{line:s,column:n+1-t}}function P0(i){return Gf(i.source,_o(i.source,i.start))}function Gf(i,n){const t=i.locationOffset.column-1,s="".padStart(t)+i.body,a=n.line-1,o=i.locationOffset.line-1,u=n.line+o,f=n.line===1?t:0,h=n.column+f,m=`${i.name}:${u}:${h}
`,y=s.split(/\r\n|[\n\r]/g),b=y[a];if(b.length>120){const O=Math.floor(h/80),S=h%80,k=[];for(let P=0;P<b.length;P+=80)k.push(b.slice(P,P+80));return m+rf([[`${u} |`,k[0]],...k.slice(1,O+1).map(P=>["|",P]),["|","^".padStart(S)],["|",k[O+1]]])}return m+rf([[`${u-1} |`,y[a-1]],[`${u} |`,b],["|","^".padStart(h)],[`${u+1} |`,y[a+1]]])}function rf(i){const n=i.filter(([s,a])=>a!==void 0),t=Math.max(...n.map(([s])=>s.length));return n.map(([s,a])=>s.padStart(t)+(a?" "+a:"")).join(`
`)}function B0(i){const n=i[0];return n==null||"kind"in n||"length"in n?{nodes:n,source:i[1],positions:i[2],path:i[3],originalError:i[4],extensions:i[5]}:n}class L extends Error{constructor(n,...t){var s,a,o;const{nodes:u,source:f,positions:h,path:m,originalError:y,extensions:b}=B0(t);super(n),this.name="GraphQLError",this.path=m??void 0,this.originalError=y??void 0,this.nodes=sf(Array.isArray(u)?u:u?[u]:void 0);const O=sf((s=this.nodes)===null||s===void 0?void 0:s.map(k=>k.loc).filter(k=>k!=null));this.source=f??(O==null||(a=O[0])===null||a===void 0?void 0:a.source),this.positions=h??(O==null?void 0:O.map(k=>k.start)),this.locations=h&&f?h.map(k=>_o(f,k)):O==null?void 0:O.map(k=>_o(k.source,k.start));const S=Ct(y==null?void 0:y.extensions)?y==null?void 0:y.extensions:void 0;this.extensions=(o=b??S)!==null&&o!==void 0?o:Object.create(null),Object.defineProperties(this,{message:{writable:!0,enumerable:!0},name:{enumerable:!1},nodes:{enumerable:!1},source:{enumerable:!1},positions:{enumerable:!1},originalError:{enumerable:!1}}),y!=null&&y.stack?Object.defineProperty(this,"stack",{value:y.stack,writable:!0,configurable:!0}):Error.captureStackTrace?Error.captureStackTrace(this,L):Object.defineProperty(this,"stack",{value:Error().stack,writable:!0,configurable:!0})}get[Symbol.toStringTag](){return"GraphQLError"}toString(){let n=this.message;if(this.nodes)for(const t of this.nodes)t.loc&&(n+=`

`+P0(t.loc));else if(this.source&&this.locations)for(const t of this.locations)n+=`

`+Gf(this.source,t);return n}toJSON(){const n={message:this.message};return this.locations!=null&&(n.locations=this.locations),this.path!=null&&(n.path=this.path),this.extensions!=null&&Object.keys(this.extensions).length>0&&(n.extensions=this.extensions),n}}function sf(i){return i===void 0||i.length===0?void 0:i}function Ke(i,n,t){return new L(`Syntax Error: ${t}`,{source:i,positions:[n]})}class U0{constructor(n,t,s){this.start=n.start,this.end=t.end,this.startToken=n,this.endToken=t,this.source=s}get[Symbol.toStringTag](){return"Location"}toJSON(){return{start:this.start,end:this.end}}}class Vf{constructor(n,t,s,a,o,u){this.kind=n,this.start=t,this.end=s,this.line=a,this.column=o,this.value=u,this.prev=null,this.next=null}get[Symbol.toStringTag](){return"Token"}toJSON(){return{kind:this.kind,value:this.value,line:this.line,column:this.column}}}const Wf={Name:[],Document:["definitions"],OperationDefinition:["name","variableDefinitions","directives","selectionSet"],VariableDefinition:["variable","type","defaultValue","directives"],Variable:["name"],SelectionSet:["selections"],Field:["alias","name","arguments","directives","selectionSet"],Argument:["name","value"],FragmentSpread:["name","directives"],InlineFragment:["typeCondition","directives","selectionSet"],FragmentDefinition:["name","variableDefinitions","typeCondition","directives","selectionSet"],IntValue:[],FloatValue:[],StringValue:[],BooleanValue:[],NullValue:[],EnumValue:[],ListValue:["values"],ObjectValue:["fields"],ObjectField:["name","value"],Directive:["name","arguments"],NamedType:["name"],ListType:["type"],NonNullType:["type"],SchemaDefinition:["description","directives","operationTypes"],OperationTypeDefinition:["type"],ScalarTypeDefinition:["description","name","directives"],ObjectTypeDefinition:["description","name","interfaces","directives","fields"],FieldDefinition:["description","name","arguments","type","directives"],InputValueDefinition:["description","name","type","defaultValue","directives"],InterfaceTypeDefinition:["description","name","interfaces","directives","fields"],UnionTypeDefinition:["description","name","directives","types"],EnumTypeDefinition:["description","name","directives","values"],EnumValueDefinition:["description","name","directives"],InputObjectTypeDefinition:["description","name","directives","fields"],DirectiveDefinition:["description","name","arguments","locations"],SchemaExtension:["directives","operationTypes"],ScalarTypeExtension:["name","directives"],ObjectTypeExtension:["name","interfaces","directives","fields"],InterfaceTypeExtension:["name","interfaces","directives","fields"],UnionTypeExtension:["name","directives","types"],EnumTypeExtension:["name","directives","values"],InputObjectTypeExtension:["name","directives","fields"]},M0=new Set(Object.keys(Wf));function af(i){const n=i==null?void 0:i.kind;return typeof n=="string"&&M0.has(n)}var Gn;(function(i){i.QUERY="query",i.MUTATION="mutation",i.SUBSCRIPTION="subscription"})(Gn||(Gn={}));var j;(function(i){i.QUERY="QUERY",i.MUTATION="MUTATION",i.SUBSCRIPTION="SUBSCRIPTION",i.FIELD="FIELD",i.FRAGMENT_DEFINITION="FRAGMENT_DEFINITION",i.FRAGMENT_SPREAD="FRAGMENT_SPREAD",i.INLINE_FRAGMENT="INLINE_FRAGMENT",i.VARIABLE_DEFINITION="VARIABLE_DEFINITION",i.SCHEMA="SCHEMA",i.SCALAR="SCALAR",i.OBJECT="OBJECT",i.FIELD_DEFINITION="FIELD_DEFINITION",i.ARGUMENT_DEFINITION="ARGUMENT_DEFINITION",i.INTERFACE="INTERFACE",i.UNION="UNION",i.ENUM="ENUM",i.ENUM_VALUE="ENUM_VALUE",i.INPUT_OBJECT="INPUT_OBJECT",i.INPUT_FIELD_DEFINITION="INPUT_FIELD_DEFINITION"})(j||(j={}));var w;(function(i){i.NAME="Name",i.DOCUMENT="Document",i.OPERATION_DEFINITION="OperationDefinition",i.VARIABLE_DEFINITION="VariableDefinition",i.SELECTION_SET="SelectionSet",i.FIELD="Field",i.ARGUMENT="Argument",i.FRAGMENT_SPREAD="FragmentSpread",i.INLINE_FRAGMENT="InlineFragment",i.FRAGMENT_DEFINITION="FragmentDefinition",i.VARIABLE="Variable",i.INT="IntValue",i.FLOAT="FloatValue",i.STRING="StringValue",i.BOOLEAN="BooleanValue",i.NULL="NullValue",i.ENUM="EnumValue",i.LIST="ListValue",i.OBJECT="ObjectValue",i.OBJECT_FIELD="ObjectField",i.DIRECTIVE="Directive",i.NAMED_TYPE="NamedType",i.LIST_TYPE="ListType",i.NON_NULL_TYPE="NonNullType",i.SCHEMA_DEFINITION="SchemaDefinition",i.OPERATION_TYPE_DEFINITION="OperationTypeDefinition",i.SCALAR_TYPE_DEFINITION="ScalarTypeDefinition",i.OBJECT_TYPE_DEFINITION="ObjectTypeDefinition",i.FIELD_DEFINITION="FieldDefinition",i.INPUT_VALUE_DEFINITION="InputValueDefinition",i.INTERFACE_TYPE_DEFINITION="InterfaceTypeDefinition",i.UNION_TYPE_DEFINITION="UnionTypeDefinition",i.ENUM_TYPE_DEFINITION="EnumTypeDefinition",i.ENUM_VALUE_DEFINITION="EnumValueDefinition",i.INPUT_OBJECT_TYPE_DEFINITION="InputObjectTypeDefinition",i.DIRECTIVE_DEFINITION="DirectiveDefinition",i.SCHEMA_EXTENSION="SchemaExtension",i.SCALAR_TYPE_EXTENSION="ScalarTypeExtension",i.OBJECT_TYPE_EXTENSION="ObjectTypeExtension",i.INTERFACE_TYPE_EXTENSION="InterfaceTypeExtension",i.UNION_TYPE_EXTENSION="UnionTypeExtension",i.ENUM_TYPE_EXTENSION="EnumTypeExtension",i.INPUT_OBJECT_TYPE_EXTENSION="InputObjectTypeExtension"})(w||(w={}));function So(i){return i===9||i===32}function Tr(i){return i>=48&&i<=57}function qf(i){return i>=97&&i<=122||i>=65&&i<=90}function Ho(i){return qf(i)||i===95}function Yf(i){return qf(i)||Tr(i)||i===95}function $0(i){var n;let t=Number.MAX_SAFE_INTEGER,s=null,a=-1;for(let u=0;u<i.length;++u){var o;const f=i[u],h=G0(f);h!==f.length&&(s=(o=s)!==null&&o!==void 0?o:u,a=u,u!==0&&h<t&&(t=h))}return i.map((u,f)=>f===0?u:u.slice(t)).slice((n=s)!==null&&n!==void 0?n:0,a+1)}function G0(i){let n=0;for(;n<i.length&&So(i.charCodeAt(n));)++n;return n}function V0(i,n){const t=i.replace(/"""/g,'\\"""'),s=t.split(/\r\n|[\n\r]/g),a=s.length===1,o=s.length>1&&s.slice(1).every(S=>S.length===0||So(S.charCodeAt(0))),u=t.endsWith('\\"""'),f=i.endsWith('"')&&!u,h=i.endsWith("\\"),m=f||h,y=!a||i.length>70||m||o||u;let b="";const O=a&&So(i.charCodeAt(0));return(y&&!O||o)&&(b+=`
`),b+=t,(y||m)&&(b+=`
`),'"""'+b+'"""'}var C;(function(i){i.SOF="<SOF>",i.EOF="<EOF>",i.BANG="!",i.DOLLAR="$",i.AMP="&",i.PAREN_L="(",i.PAREN_R=")",i.SPREAD="...",i.COLON=":",i.EQUALS="=",i.AT="@",i.BRACKET_L="[",i.BRACKET_R="]",i.BRACE_L="{",i.PIPE="|",i.BRACE_R="}",i.NAME="Name",i.INT="Int",i.FLOAT="Float",i.STRING="String",i.BLOCK_STRING="BlockString",i.COMMENT="Comment"})(C||(C={}));class W0{constructor(n){const t=new Vf(C.SOF,0,0,0,0);this.source=n,this.lastToken=t,this.token=t,this.line=1,this.lineStart=0}get[Symbol.toStringTag](){return"Lexer"}advance(){return this.lastToken=this.token,this.token=this.lookahead()}lookahead(){let n=this.token;if(n.kind!==C.EOF)do if(n.next)n=n.next;else{const t=Y0(this,n.end);n.next=t,t.prev=n,n=t}while(n.kind===C.COMMENT);return n}}function q0(i){return i===C.BANG||i===C.DOLLAR||i===C.AMP||i===C.PAREN_L||i===C.PAREN_R||i===C.SPREAD||i===C.COLON||i===C.EQUALS||i===C.AT||i===C.BRACKET_L||i===C.BRACKET_R||i===C.BRACE_L||i===C.PIPE||i===C.BRACE_R}function Ui(i){return i>=0&&i<=55295||i>=57344&&i<=1114111}function Ws(i,n){return jf(i.charCodeAt(n))&&Hf(i.charCodeAt(n+1))}function jf(i){return i>=55296&&i<=56319}function Hf(i){return i>=56320&&i<=57343}function hi(i,n){const t=i.source.body.codePointAt(n);if(t===void 0)return C.EOF;if(t>=32&&t<=126){const s=String.fromCodePoint(t);return s==='"'?`'"'`:`"${s}"`}return"U+"+t.toString(16).toUpperCase().padStart(4,"0")}function We(i,n,t,s,a){const o=i.line,u=1+t-i.lineStart;return new Vf(n,t,s,o,u,a)}function Y0(i,n){const t=i.source.body,s=t.length;let a=n;for(;a<s;){const o=t.charCodeAt(a);switch(o){case 65279:case 9:case 32:case 44:++a;continue;case 10:++a,++i.line,i.lineStart=a;continue;case 13:t.charCodeAt(a+1)===10?a+=2:++a,++i.line,i.lineStart=a;continue;case 35:return j0(i,a);case 33:return We(i,C.BANG,a,a+1);case 36:return We(i,C.DOLLAR,a,a+1);case 38:return We(i,C.AMP,a,a+1);case 40:return We(i,C.PAREN_L,a,a+1);case 41:return We(i,C.PAREN_R,a,a+1);case 46:if(t.charCodeAt(a+1)===46&&t.charCodeAt(a+2)===46)return We(i,C.SPREAD,a,a+3);break;case 58:return We(i,C.COLON,a,a+1);case 61:return We(i,C.EQUALS,a,a+1);case 64:return We(i,C.AT,a,a+1);case 91:return We(i,C.BRACKET_L,a,a+1);case 93:return We(i,C.BRACKET_R,a,a+1);case 123:return We(i,C.BRACE_L,a,a+1);case 124:return We(i,C.PIPE,a,a+1);case 125:return We(i,C.BRACE_R,a,a+1);case 34:return t.charCodeAt(a+1)===34&&t.charCodeAt(a+2)===34?X0(i,a):z0(i,a)}if(Tr(o)||o===45)return H0(i,a,o);if(Ho(o))return Z0(i,a);throw Ke(i.source,a,o===39?`Unexpected single quote character ('), did you mean to use a double quote (")?`:Ui(o)||Ws(t,a)?`Unexpected character: ${hi(i,a)}.`:`Invalid character: ${hi(i,a)}.`)}return We(i,C.EOF,s,s)}function j0(i,n){const t=i.source.body,s=t.length;let a=n+1;for(;a<s;){const o=t.charCodeAt(a);if(o===10||o===13)break;if(Ui(o))++a;else if(Ws(t,a))a+=2;else break}return We(i,C.COMMENT,n,a,t.slice(n+1,a))}function H0(i,n,t){const s=i.source.body;let a=n,o=t,u=!1;if(o===45&&(o=s.charCodeAt(++a)),o===48){if(o=s.charCodeAt(++a),Tr(o))throw Ke(i.source,a,`Invalid number, unexpected digit after 0: ${hi(i,a)}.`)}else a=bo(i,a,o),o=s.charCodeAt(a);if(o===46&&(u=!0,o=s.charCodeAt(++a),a=bo(i,a,o),o=s.charCodeAt(a)),(o===69||o===101)&&(u=!0,o=s.charCodeAt(++a),(o===43||o===45)&&(o=s.charCodeAt(++a)),a=bo(i,a,o),o=s.charCodeAt(a)),o===46||Ho(o))throw Ke(i.source,a,`Invalid number, expected digit but got: ${hi(i,a)}.`);return We(i,u?C.FLOAT:C.INT,n,a,s.slice(n,a))}function bo(i,n,t){if(!Tr(t))throw Ke(i.source,n,`Invalid number, expected digit but got: ${hi(i,n)}.`);const s=i.source.body;let a=n+1;for(;Tr(s.charCodeAt(a));)++a;return a}function z0(i,n){const t=i.source.body,s=t.length;let a=n+1,o=a,u="";for(;a<s;){const f=t.charCodeAt(a);if(f===34)return u+=t.slice(o,a),We(i,C.STRING,n,a+1,u);if(f===92){u+=t.slice(o,a);const h=t.charCodeAt(a+1)===117?t.charCodeAt(a+2)===123?Q0(i,a):J0(i,a):K0(i,a);u+=h.value,a+=h.size,o=a;continue}if(f===10||f===13)break;if(Ui(f))++a;else if(Ws(t,a))a+=2;else throw Ke(i.source,a,`Invalid character within String: ${hi(i,a)}.`)}throw Ke(i.source,a,"Unterminated string.")}function Q0(i,n){const t=i.source.body;let s=0,a=3;for(;a<12;){const o=t.charCodeAt(n+a++);if(o===125){if(a<5||!Ui(s))break;return{value:String.fromCodePoint(s),size:a}}if(s=s<<4|cr(o),s<0)break}throw Ke(i.source,n,`Invalid Unicode escape sequence: "${t.slice(n,n+a)}".`)}function J0(i,n){const t=i.source.body,s=of(t,n+2);if(Ui(s))return{value:String.fromCodePoint(s),size:6};if(jf(s)&&t.charCodeAt(n+6)===92&&t.charCodeAt(n+7)===117){const a=of(t,n+8);if(Hf(a))return{value:String.fromCodePoint(s,a),size:12}}throw Ke(i.source,n,`Invalid Unicode escape sequence: "${t.slice(n,n+6)}".`)}function of(i,n){return cr(i.charCodeAt(n))<<12|cr(i.charCodeAt(n+1))<<8|cr(i.charCodeAt(n+2))<<4|cr(i.charCodeAt(n+3))}function cr(i){return i>=48&&i<=57?i-48:i>=65&&i<=70?i-55:i>=97&&i<=102?i-87:-1}function K0(i,n){const t=i.source.body;switch(t.charCodeAt(n+1)){case 34:return{value:'"',size:2};case 92:return{value:"\\",size:2};case 47:return{value:"/",size:2};case 98:return{value:"\b",size:2};case 102:return{value:"\f",size:2};case 110:return{value:`
`,size:2};case 114:return{value:"\r",size:2};case 116:return{value:"	",size:2}}throw Ke(i.source,n,`Invalid character escape sequence: "${t.slice(n,n+2)}".`)}function X0(i,n){const t=i.source.body,s=t.length;let a=i.lineStart,o=n+3,u=o,f="";const h=[];for(;o<s;){const m=t.charCodeAt(o);if(m===34&&t.charCodeAt(o+1)===34&&t.charCodeAt(o+2)===34){f+=t.slice(u,o),h.push(f);const y=We(i,C.BLOCK_STRING,n,o+3,$0(h).join(`
`));return i.line+=h.length-1,i.lineStart=a,y}if(m===92&&t.charCodeAt(o+1)===34&&t.charCodeAt(o+2)===34&&t.charCodeAt(o+3)===34){f+=t.slice(u,o),u=o+1,o+=4;continue}if(m===10||m===13){f+=t.slice(u,o),h.push(f),m===13&&t.charCodeAt(o+1)===10?o+=2:++o,f="",u=o,a=o;continue}if(Ui(m))++o;else if(Ws(t,o))o+=2;else throw Ke(i.source,o,`Invalid character within String: ${hi(i,o)}.`)}throw Ke(i.source,o,"Unterminated string.")}function Z0(i,n){const t=i.source.body,s=t.length;let a=n+1;for(;a<s;){const o=t.charCodeAt(a);if(Yf(o))++a;else break}return We(i,C.NAME,n,a,t.slice(n,a))}const eD=10,zf=2;function M(i){return qs(i,[])}function qs(i,n){switch(typeof i){case"string":return JSON.stringify(i);case"function":return i.name?`[function ${i.name}]`:"[function]";case"object":return nD(i,n);default:return String(i)}}function nD(i,n){if(i===null)return"null";if(n.includes(i))return"[Circular]";const t=[...n,i];if(tD(i)){const s=i.toJSON();if(s!==i)return typeof s=="string"?s:qs(s,t)}else if(Array.isArray(i))return rD(i,t);return iD(i,t)}function tD(i){return typeof i.toJSON=="function"}function iD(i,n){const t=Object.entries(i);return t.length===0?"{}":n.length>zf?"["+sD(i)+"]":"{ "+t.map(([a,o])=>a+": "+qs(o,n)).join(", ")+" }"}function rD(i,n){if(i.length===0)return"[]";if(n.length>zf)return"[Array]";const t=Math.min(eD,i.length),s=i.length-t,a=[];for(let o=0;o<t;++o)a.push(qs(i[o],n));return s===1?a.push("... 1 more item"):s>1&&a.push(`... ${s} more items`),"["+a.join(", ")+"]"}function sD(i){const n=Object.prototype.toString.call(i).replace(/^\[object /,"").replace(/]$/,"");if(n==="Object"&&typeof i.constructor=="function"){const t=i.constructor.name;if(typeof t=="string"&&t!=="")return t}return n}const aD=globalThis.process&&!0,pt=aD?function(n,t){return n instanceof t}:function(n,t){if(n instanceof t)return!0;if(typeof n=="object"&&n!==null){var s;const a=t.prototype[Symbol.toStringTag],o=Symbol.toStringTag in n?n[Symbol.toStringTag]:(s=n.constructor)===null||s===void 0?void 0:s.name;if(a===o){const u=M(n);throw new Error(`Cannot use ${a} "${u}" from another module or realm.

Ensure that there is only one instance of "graphql" in the node_modules
directory. If different versions of "graphql" are the dependencies of other
relied on modules, use "resolutions" to ensure only one version is installed.

https://yarnpkg.com/en/docs/selective-version-resolutions

Duplicate "graphql" modules cannot be used at the same time since different
versions may have different capabilities and behavior. The data from one
version used in the function from another could produce confusing and
spurious results.`)}}return!1};class Qf{constructor(n,t="GraphQL request",s={line:1,column:1}){typeof n=="string"||fe(!1,`Body must be a string. Received: ${M(n)}.`),this.body=n,this.name=t,this.locationOffset=s,this.locationOffset.line>0||fe(!1,"line in locationOffset is 1-indexed and must be positive."),this.locationOffset.column>0||fe(!1,"column in locationOffset is 1-indexed and must be positive.")}get[Symbol.toStringTag](){return"Source"}}function oD(i){return pt(i,Qf)}function lD(i,n){return new Jf(i,n).parseDocument()}function uD(i,n){const t=new Jf(i,n);t.expectToken(C.SOF);const s=t.parseValueLiteral(!1);return t.expectToken(C.EOF),s}class Jf{constructor(n,t={}){const s=oD(n)?n:new Qf(n);this._lexer=new W0(s),this._options=t,this._tokenCounter=0}parseName(){const n=this.expectToken(C.NAME);return this.node(n,{kind:w.NAME,value:n.value})}parseDocument(){return this.node(this._lexer.token,{kind:w.DOCUMENT,definitions:this.many(C.SOF,this.parseDefinition,C.EOF)})}parseDefinition(){if(this.peek(C.BRACE_L))return this.parseOperationDefinition();const n=this.peekDescription(),t=n?this._lexer.lookahead():this._lexer.token;if(t.kind===C.NAME){switch(t.value){case"schema":return this.parseSchemaDefinition();case"scalar":return this.parseScalarTypeDefinition();case"type":return this.parseObjectTypeDefinition();case"interface":return this.parseInterfaceTypeDefinition();case"union":return this.parseUnionTypeDefinition();case"enum":return this.parseEnumTypeDefinition();case"input":return this.parseInputObjectTypeDefinition();case"directive":return this.parseDirectiveDefinition()}if(n)throw Ke(this._lexer.source,this._lexer.token.start,"Unexpected description, descriptions are supported only on type definitions.");switch(t.value){case"query":case"mutation":case"subscription":return this.parseOperationDefinition();case"fragment":return this.parseFragmentDefinition();case"extend":return this.parseTypeSystemExtension()}}throw this.unexpected(t)}parseOperationDefinition(){const n=this._lexer.token;if(this.peek(C.BRACE_L))return this.node(n,{kind:w.OPERATION_DEFINITION,operation:Gn.QUERY,name:void 0,variableDefinitions:[],directives:[],selectionSet:this.parseSelectionSet()});const t=this.parseOperationType();let s;return this.peek(C.NAME)&&(s=this.parseName()),this.node(n,{kind:w.OPERATION_DEFINITION,operation:t,name:s,variableDefinitions:this.parseVariableDefinitions(),directives:this.parseDirectives(!1),selectionSet:this.parseSelectionSet()})}parseOperationType(){const n=this.expectToken(C.NAME);switch(n.value){case"query":return Gn.QUERY;case"mutation":return Gn.MUTATION;case"subscription":return Gn.SUBSCRIPTION}throw this.unexpected(n)}parseVariableDefinitions(){return this.optionalMany(C.PAREN_L,this.parseVariableDefinition,C.PAREN_R)}parseVariableDefinition(){return this.node(this._lexer.token,{kind:w.VARIABLE_DEFINITION,variable:this.parseVariable(),type:(this.expectToken(C.COLON),this.parseTypeReference()),defaultValue:this.expectOptionalToken(C.EQUALS)?this.parseConstValueLiteral():void 0,directives:this.parseConstDirectives()})}parseVariable(){const n=this._lexer.token;return this.expectToken(C.DOLLAR),this.node(n,{kind:w.VARIABLE,name:this.parseName()})}parseSelectionSet(){return this.node(this._lexer.token,{kind:w.SELECTION_SET,selections:this.many(C.BRACE_L,this.parseSelection,C.BRACE_R)})}parseSelection(){return this.peek(C.SPREAD)?this.parseFragment():this.parseField()}parseField(){const n=this._lexer.token,t=this.parseName();let s,a;return this.expectOptionalToken(C.COLON)?(s=t,a=this.parseName()):a=t,this.node(n,{kind:w.FIELD,alias:s,name:a,arguments:this.parseArguments(!1),directives:this.parseDirectives(!1),selectionSet:this.peek(C.BRACE_L)?this.parseSelectionSet():void 0})}parseArguments(n){const t=n?this.parseConstArgument:this.parseArgument;return this.optionalMany(C.PAREN_L,t,C.PAREN_R)}parseArgument(n=!1){const t=this._lexer.token,s=this.parseName();return this.expectToken(C.COLON),this.node(t,{kind:w.ARGUMENT,name:s,value:this.parseValueLiteral(n)})}parseConstArgument(){return this.parseArgument(!0)}parseFragment(){const n=this._lexer.token;this.expectToken(C.SPREAD);const t=this.expectOptionalKeyword("on");return!t&&this.peek(C.NAME)?this.node(n,{kind:w.FRAGMENT_SPREAD,name:this.parseFragmentName(),directives:this.parseDirectives(!1)}):this.node(n,{kind:w.INLINE_FRAGMENT,typeCondition:t?this.parseNamedType():void 0,directives:this.parseDirectives(!1),selectionSet:this.parseSelectionSet()})}parseFragmentDefinition(){const n=this._lexer.token;return this.expectKeyword("fragment"),this._options.allowLegacyFragmentVariables===!0?this.node(n,{kind:w.FRAGMENT_DEFINITION,name:this.parseFragmentName(),variableDefinitions:this.parseVariableDefinitions(),typeCondition:(this.expectKeyword("on"),this.parseNamedType()),directives:this.parseDirectives(!1),selectionSet:this.parseSelectionSet()}):this.node(n,{kind:w.FRAGMENT_DEFINITION,name:this.parseFragmentName(),typeCondition:(this.expectKeyword("on"),this.parseNamedType()),directives:this.parseDirectives(!1),selectionSet:this.parseSelectionSet()})}parseFragmentName(){if(this._lexer.token.value==="on")throw this.unexpected();return this.parseName()}parseValueLiteral(n){const t=this._lexer.token;switch(t.kind){case C.BRACKET_L:return this.parseList(n);case C.BRACE_L:return this.parseObject(n);case C.INT:return this.advanceLexer(),this.node(t,{kind:w.INT,value:t.value});case C.FLOAT:return this.advanceLexer(),this.node(t,{kind:w.FLOAT,value:t.value});case C.STRING:case C.BLOCK_STRING:return this.parseStringLiteral();case C.NAME:switch(this.advanceLexer(),t.value){case"true":return this.node(t,{kind:w.BOOLEAN,value:!0});case"false":return this.node(t,{kind:w.BOOLEAN,value:!1});case"null":return this.node(t,{kind:w.NULL});default:return this.node(t,{kind:w.ENUM,value:t.value})}case C.DOLLAR:if(n)if(this.expectToken(C.DOLLAR),this._lexer.token.kind===C.NAME){const s=this._lexer.token.value;throw Ke(this._lexer.source,t.start,`Unexpected variable "$${s}" in constant value.`)}else throw this.unexpected(t);return this.parseVariable();default:throw this.unexpected()}}parseConstValueLiteral(){return this.parseValueLiteral(!0)}parseStringLiteral(){const n=this._lexer.token;return this.advanceLexer(),this.node(n,{kind:w.STRING,value:n.value,block:n.kind===C.BLOCK_STRING})}parseList(n){const t=()=>this.parseValueLiteral(n);return this.node(this._lexer.token,{kind:w.LIST,values:this.any(C.BRACKET_L,t,C.BRACKET_R)})}parseObject(n){const t=()=>this.parseObjectField(n);return this.node(this._lexer.token,{kind:w.OBJECT,fields:this.any(C.BRACE_L,t,C.BRACE_R)})}parseObjectField(n){const t=this._lexer.token,s=this.parseName();return this.expectToken(C.COLON),this.node(t,{kind:w.OBJECT_FIELD,name:s,value:this.parseValueLiteral(n)})}parseDirectives(n){const t=[];for(;this.peek(C.AT);)t.push(this.parseDirective(n));return t}parseConstDirectives(){return this.parseDirectives(!0)}parseDirective(n){const t=this._lexer.token;return this.expectToken(C.AT),this.node(t,{kind:w.DIRECTIVE,name:this.parseName(),arguments:this.parseArguments(n)})}parseTypeReference(){const n=this._lexer.token;let t;if(this.expectOptionalToken(C.BRACKET_L)){const s=this.parseTypeReference();this.expectToken(C.BRACKET_R),t=this.node(n,{kind:w.LIST_TYPE,type:s})}else t=this.parseNamedType();return this.expectOptionalToken(C.BANG)?this.node(n,{kind:w.NON_NULL_TYPE,type:t}):t}parseNamedType(){return this.node(this._lexer.token,{kind:w.NAMED_TYPE,name:this.parseName()})}peekDescription(){return this.peek(C.STRING)||this.peek(C.BLOCK_STRING)}parseDescription(){if(this.peekDescription())return this.parseStringLiteral()}parseSchemaDefinition(){const n=this._lexer.token,t=this.parseDescription();this.expectKeyword("schema");const s=this.parseConstDirectives(),a=this.many(C.BRACE_L,this.parseOperationTypeDefinition,C.BRACE_R);return this.node(n,{kind:w.SCHEMA_DEFINITION,description:t,directives:s,operationTypes:a})}parseOperationTypeDefinition(){const n=this._lexer.token,t=this.parseOperationType();this.expectToken(C.COLON);const s=this.parseNamedType();return this.node(n,{kind:w.OPERATION_TYPE_DEFINITION,operation:t,type:s})}parseScalarTypeDefinition(){const n=this._lexer.token,t=this.parseDescription();this.expectKeyword("scalar");const s=this.parseName(),a=this.parseConstDirectives();return this.node(n,{kind:w.SCALAR_TYPE_DEFINITION,description:t,name:s,directives:a})}parseObjectTypeDefinition(){const n=this._lexer.token,t=this.parseDescription();this.expectKeyword("type");const s=this.parseName(),a=this.parseImplementsInterfaces(),o=this.parseConstDirectives(),u=this.parseFieldsDefinition();return this.node(n,{kind:w.OBJECT_TYPE_DEFINITION,description:t,name:s,interfaces:a,directives:o,fields:u})}parseImplementsInterfaces(){return this.expectOptionalKeyword("implements")?this.delimitedMany(C.AMP,this.parseNamedType):[]}parseFieldsDefinition(){return this.optionalMany(C.BRACE_L,this.parseFieldDefinition,C.BRACE_R)}parseFieldDefinition(){const n=this._lexer.token,t=this.parseDescription(),s=this.parseName(),a=this.parseArgumentDefs();this.expectToken(C.COLON);const o=this.parseTypeReference(),u=this.parseConstDirectives();return this.node(n,{kind:w.FIELD_DEFINITION,description:t,name:s,arguments:a,type:o,directives:u})}parseArgumentDefs(){return this.optionalMany(C.PAREN_L,this.parseInputValueDef,C.PAREN_R)}parseInputValueDef(){const n=this._lexer.token,t=this.parseDescription(),s=this.parseName();this.expectToken(C.COLON);const a=this.parseTypeReference();let o;this.expectOptionalToken(C.EQUALS)&&(o=this.parseConstValueLiteral());const u=this.parseConstDirectives();return this.node(n,{kind:w.INPUT_VALUE_DEFINITION,description:t,name:s,type:a,defaultValue:o,directives:u})}parseInterfaceTypeDefinition(){const n=this._lexer.token,t=this.parseDescription();this.expectKeyword("interface");const s=this.parseName(),a=this.parseImplementsInterfaces(),o=this.parseConstDirectives(),u=this.parseFieldsDefinition();return this.node(n,{kind:w.INTERFACE_TYPE_DEFINITION,description:t,name:s,interfaces:a,directives:o,fields:u})}parseUnionTypeDefinition(){const n=this._lexer.token,t=this.parseDescription();this.expectKeyword("union");const s=this.parseName(),a=this.parseConstDirectives(),o=this.parseUnionMemberTypes();return this.node(n,{kind:w.UNION_TYPE_DEFINITION,description:t,name:s,directives:a,types:o})}parseUnionMemberTypes(){return this.expectOptionalToken(C.EQUALS)?this.delimitedMany(C.PIPE,this.parseNamedType):[]}parseEnumTypeDefinition(){const n=this._lexer.token,t=this.parseDescription();this.expectKeyword("enum");const s=this.parseName(),a=this.parseConstDirectives(),o=this.parseEnumValuesDefinition();return this.node(n,{kind:w.ENUM_TYPE_DEFINITION,description:t,name:s,directives:a,values:o})}parseEnumValuesDefinition(){return this.optionalMany(C.BRACE_L,this.parseEnumValueDefinition,C.BRACE_R)}parseEnumValueDefinition(){const n=this._lexer.token,t=this.parseDescription(),s=this.parseEnumValueName(),a=this.parseConstDirectives();return this.node(n,{kind:w.ENUM_VALUE_DEFINITION,description:t,name:s,directives:a})}parseEnumValueName(){if(this._lexer.token.value==="true"||this._lexer.token.value==="false"||this._lexer.token.value==="null")throw Ke(this._lexer.source,this._lexer.token.start,`${Ds(this._lexer.token)} is reserved and cannot be used for an enum value.`);return this.parseName()}parseInputObjectTypeDefinition(){const n=this._lexer.token,t=this.parseDescription();this.expectKeyword("input");const s=this.parseName(),a=this.parseConstDirectives(),o=this.parseInputFieldsDefinition();return this.node(n,{kind:w.INPUT_OBJECT_TYPE_DEFINITION,description:t,name:s,directives:a,fields:o})}parseInputFieldsDefinition(){return this.optionalMany(C.BRACE_L,this.parseInputValueDef,C.BRACE_R)}parseTypeSystemExtension(){const n=this._lexer.lookahead();if(n.kind===C.NAME)switch(n.value){case"schema":return this.parseSchemaExtension();case"scalar":return this.parseScalarTypeExtension();case"type":return this.parseObjectTypeExtension();case"interface":return this.parseInterfaceTypeExtension();case"union":return this.parseUnionTypeExtension();case"enum":return this.parseEnumTypeExtension();case"input":return this.parseInputObjectTypeExtension()}throw this.unexpected(n)}parseSchemaExtension(){const n=this._lexer.token;this.expectKeyword("extend"),this.expectKeyword("schema");const t=this.parseConstDirectives(),s=this.optionalMany(C.BRACE_L,this.parseOperationTypeDefinition,C.BRACE_R);if(t.length===0&&s.length===0)throw this.unexpected();return this.node(n,{kind:w.SCHEMA_EXTENSION,directives:t,operationTypes:s})}parseScalarTypeExtension(){const n=this._lexer.token;this.expectKeyword("extend"),this.expectKeyword("scalar");const t=this.parseName(),s=this.parseConstDirectives();if(s.length===0)throw this.unexpected();return this.node(n,{kind:w.SCALAR_TYPE_EXTENSION,name:t,directives:s})}parseObjectTypeExtension(){const n=this._lexer.token;this.expectKeyword("extend"),this.expectKeyword("type");const t=this.parseName(),s=this.parseImplementsInterfaces(),a=this.parseConstDirectives(),o=this.parseFieldsDefinition();if(s.length===0&&a.length===0&&o.length===0)throw this.unexpected();return this.node(n,{kind:w.OBJECT_TYPE_EXTENSION,name:t,interfaces:s,directives:a,fields:o})}parseInterfaceTypeExtension(){const n=this._lexer.token;this.expectKeyword("extend"),this.expectKeyword("interface");const t=this.parseName(),s=this.parseImplementsInterfaces(),a=this.parseConstDirectives(),o=this.parseFieldsDefinition();if(s.length===0&&a.length===0&&o.length===0)throw this.unexpected();return this.node(n,{kind:w.INTERFACE_TYPE_EXTENSION,name:t,interfaces:s,directives:a,fields:o})}parseUnionTypeExtension(){const n=this._lexer.token;this.expectKeyword("extend"),this.expectKeyword("union");const t=this.parseName(),s=this.parseConstDirectives(),a=this.parseUnionMemberTypes();if(s.length===0&&a.length===0)throw this.unexpected();return this.node(n,{kind:w.UNION_TYPE_EXTENSION,name:t,directives:s,types:a})}parseEnumTypeExtension(){const n=this._lexer.token;this.expectKeyword("extend"),this.expectKeyword("enum");const t=this.parseName(),s=this.parseConstDirectives(),a=this.parseEnumValuesDefinition();if(s.length===0&&a.length===0)throw this.unexpected();return this.node(n,{kind:w.ENUM_TYPE_EXTENSION,name:t,directives:s,values:a})}parseInputObjectTypeExtension(){const n=this._lexer.token;this.expectKeyword("extend"),this.expectKeyword("input");const t=this.parseName(),s=this.parseConstDirectives(),a=this.parseInputFieldsDefinition();if(s.length===0&&a.length===0)throw this.unexpected();return this.node(n,{kind:w.INPUT_OBJECT_TYPE_EXTENSION,name:t,directives:s,fields:a})}parseDirectiveDefinition(){const n=this._lexer.token,t=this.parseDescription();this.expectKeyword("directive"),this.expectToken(C.AT);const s=this.parseName(),a=this.parseArgumentDefs(),o=this.expectOptionalKeyword("repeatable");this.expectKeyword("on");const u=this.parseDirectiveLocations();return this.node(n,{kind:w.DIRECTIVE_DEFINITION,description:t,name:s,arguments:a,repeatable:o,locations:u})}parseDirectiveLocations(){return this.delimitedMany(C.PIPE,this.parseDirectiveLocation)}parseDirectiveLocation(){const n=this._lexer.token,t=this.parseName();if(Object.prototype.hasOwnProperty.call(j,t.value))return t;throw this.unexpected(n)}node(n,t){return this._options.noLocation!==!0&&(t.loc=new U0(n,this._lexer.lastToken,this._lexer.source)),t}peek(n){return this._lexer.token.kind===n}expectToken(n){const t=this._lexer.token;if(t.kind===n)return this.advanceLexer(),t;throw Ke(this._lexer.source,t.start,`Expected ${Kf(n)}, found ${Ds(t)}.`)}expectOptionalToken(n){return this._lexer.token.kind===n?(this.advanceLexer(),!0):!1}expectKeyword(n){const t=this._lexer.token;if(t.kind===C.NAME&&t.value===n)this.advanceLexer();else throw Ke(this._lexer.source,t.start,`Expected "${n}", found ${Ds(t)}.`)}expectOptionalKeyword(n){const t=this._lexer.token;return t.kind===C.NAME&&t.value===n?(this.advanceLexer(),!0):!1}unexpected(n){const t=n??this._lexer.token;return Ke(this._lexer.source,t.start,`Unexpected ${Ds(t)}.`)}any(n,t,s){this.expectToken(n);const a=[];for(;!this.expectOptionalToken(s);)a.push(t.call(this));return a}optionalMany(n,t,s){if(this.expectOptionalToken(n)){const a=[];do a.push(t.call(this));while(!this.expectOptionalToken(s));return a}return[]}many(n,t,s){this.expectToken(n);const a=[];do a.push(t.call(this));while(!this.expectOptionalToken(s));return a}delimitedMany(n,t){this.expectOptionalToken(n);const s=[];do s.push(t.call(this));while(this.expectOptionalToken(n));return s}advanceLexer(){const{maxTokens:n}=this._options,t=this._lexer.advance();if(n!==void 0&&t.kind!==C.EOF&&(++this._tokenCounter,this._tokenCounter>n))throw Ke(this._lexer.source,t.start,`Document contains more that ${n} tokens. Parsing aborted.`)}}function Ds(i){const n=i.value;return Kf(i.kind)+(n!=null?` "${n}"`:"")}function Kf(i){return q0(i)?`"${i}"`:i}const cD=5;function Qt(i,n){const[t,s]=n?[i,n]:[void 0,i];let a=" Did you mean ";t&&(a+=t+" ");const o=s.map(h=>`"${h}"`);switch(o.length){case 0:return"";case 1:return a+o[0]+"?";case 2:return a+o[0]+" or "+o[1]+"?"}const u=o.slice(0,cD),f=u.pop();return a+u.join(", ")+", or "+f+"?"}function lf(i){return i}function di(i,n){const t=Object.create(null);for(const s of i)t[n(s)]=s;return t}function ui(i,n,t){const s=Object.create(null);for(const a of i)s[n(a)]=t(a);return s}function _t(i,n){const t=Object.create(null);for(const s of Object.keys(i))t[s]=n(i[s],s);return t}function zo(i,n){let t=0,s=0;for(;t<i.length&&s<n.length;){let a=i.charCodeAt(t),o=n.charCodeAt(s);if(Es(a)&&Es(o)){let u=0;do++t,u=u*10+a-ko,a=i.charCodeAt(t);while(Es(a)&&u>0);let f=0;do++s,f=f*10+o-ko,o=n.charCodeAt(s);while(Es(o)&&f>0);if(u<f)return-1;if(u>f)return 1}else{if(a<o)return-1;if(a>o)return 1;++t,++s}}return i.length-n.length}const ko=48,fD=57;function Es(i){return!isNaN(i)&&ko<=i&&i<=fD}function yi(i,n){const t=Object.create(null),s=new hD(i),a=Math.floor(i.length*.4)+1;for(const o of n){const u=s.measure(o,a);u!==void 0&&(t[o]=u)}return Object.keys(t).sort((o,u)=>{const f=t[o]-t[u];return f!==0?f:zo(o,u)})}class hD{constructor(n){this._input=n,this._inputLowerCase=n.toLowerCase(),this._inputArray=uf(this._inputLowerCase),this._rows=[new Array(n.length+1).fill(0),new Array(n.length+1).fill(0),new Array(n.length+1).fill(0)]}measure(n,t){if(this._input===n)return 0;const s=n.toLowerCase();if(this._inputLowerCase===s)return 1;let a=uf(s),o=this._inputArray;if(a.length<o.length){const y=a;a=o,o=y}const u=a.length,f=o.length;if(u-f>t)return;const h=this._rows;for(let y=0;y<=f;y++)h[0][y]=y;for(let y=1;y<=u;y++){const b=h[(y-1)%3],O=h[y%3];let S=O[0]=y;for(let k=1;k<=f;k++){const P=a[y-1]===o[k-1]?0:1;let Y=Math.min(b[k]+1,O[k-1]+1,b[k-1]+P);if(y>1&&k>1&&a[y-1]===o[k-2]&&a[y-2]===o[k-1]){const ce=h[(y-2)%3][k-2];Y=Math.min(Y,ce+1)}Y<S&&(S=Y),O[k]=Y}if(S>t)return}const m=h[u%3][f];return m<=t?m:void 0}}function uf(i){const n=i.length,t=new Array(n);for(let s=0;s<n;++s)t[s]=i.charCodeAt(s);return t}function Wn(i){if(i==null)return Object.create(null);if(Object.getPrototypeOf(i)===null)return i;const n=Object.create(null);for(const[t,s]of Object.entries(i))n[t]=s;return n}function dD(i){return`"${i.replace(pD,gD)}"`}const pD=/[\x00-\x1f\x22\x5c\x7f-\x9f]/g;function gD(i){return mD[i.charCodeAt(0)]}const mD=["\\u0000","\\u0001","\\u0002","\\u0003","\\u0004","\\u0005","\\u0006","\\u0007","\\b","\\t","\\n","\\u000B","\\f","\\r","\\u000E","\\u000F","\\u0010","\\u0011","\\u0012","\\u0013","\\u0014","\\u0015","\\u0016","\\u0017","\\u0018","\\u0019","\\u001A","\\u001B","\\u001C","\\u001D","\\u001E","\\u001F","","",'\\"',"","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","\\\\","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","\\u007F","\\u0080","\\u0081","\\u0082","\\u0083","\\u0084","\\u0085","\\u0086","\\u0087","\\u0088","\\u0089","\\u008A","\\u008B","\\u008C","\\u008D","\\u008E","\\u008F","\\u0090","\\u0091","\\u0092","\\u0093","\\u0094","\\u0095","\\u0096","\\u0097","\\u0098","\\u0099","\\u009A","\\u009B","\\u009C","\\u009D","\\u009E","\\u009F"],fr=Object.freeze({});function Xf(i,n,t=Wf){const s=new Map;for(const ce of Object.values(w))s.set(ce,Zf(n,ce));let a,o=Array.isArray(i),u=[i],f=-1,h=[],m=i,y,b;const O=[],S=[];do{f++;const ce=f===u.length,_e=ce&&h.length!==0;if(ce){if(y=S.length===0?void 0:O[O.length-1],m=b,b=S.pop(),_e)if(o){m=m.slice();let Re=0;for(const[je,Qe]of h){const xe=je-Re;Qe===null?(m.splice(xe,1),Re++):m[xe]=Qe}}else{m=Object.defineProperties({},Object.getOwnPropertyDescriptors(m));for(const[Re,je]of h)m[Re]=je}f=a.index,u=a.keys,h=a.edits,o=a.inArray,a=a.prev}else if(b){if(y=o?f:u[f],m=b[y],m==null)continue;O.push(y)}let ye;if(!Array.isArray(m)){var k,P;af(m)||fe(!1,`Invalid AST Node: ${M(m)}.`);const Re=ce?(k=s.get(m.kind))===null||k===void 0?void 0:k.leave:(P=s.get(m.kind))===null||P===void 0?void 0:P.enter;if(ye=Re==null?void 0:Re.call(n,m,y,b,O,S),ye===fr)break;if(ye===!1){if(!ce){O.pop();continue}}else if(ye!==void 0&&(h.push([y,ye]),!ce))if(af(ye))m=ye;else{O.pop();continue}}if(ye===void 0&&_e&&h.push([y,m]),ce)O.pop();else{var Y;a={inArray:o,index:f,keys:u,edits:h,prev:a},o=Array.isArray(m),u=o?m:(Y=t[m.kind])!==null&&Y!==void 0?Y:[],f=-1,h=[],b&&S.push(b),b=m}}while(a!==void 0);return h.length!==0?h[h.length-1][1]:i}function yD(i){const n=new Array(i.length).fill(null),t=Object.create(null);for(const s of Object.values(w)){let a=!1;const o=new Array(i.length).fill(void 0),u=new Array(i.length).fill(void 0);for(let h=0;h<i.length;++h){const{enter:m,leave:y}=Zf(i[h],s);a||(a=m!=null||y!=null),o[h]=m,u[h]=y}if(!a)continue;const f={enter(...h){const m=h[0];for(let b=0;b<i.length;b++)if(n[b]===null){var y;const O=(y=o[b])===null||y===void 0?void 0:y.apply(i[b],h);if(O===!1)n[b]=m;else if(O===fr)n[b]=fr;else if(O!==void 0)return O}},leave(...h){const m=h[0];for(let b=0;b<i.length;b++)if(n[b]===null){var y;const O=(y=u[b])===null||y===void 0?void 0:y.apply(i[b],h);if(O===fr)n[b]=fr;else if(O!==void 0&&O!==!1)return O}else n[b]===m&&(n[b]=null)}};t[s]=f}return t}function Zf(i,n){const t=i[n];return typeof t=="object"?t:typeof t=="function"?{enter:t,leave:void 0}:{enter:i.enter,leave:i.leave}}function Xe(i){return Xf(i,bD)}const vD=80,bD={Name:{leave:i=>i.value},Variable:{leave:i=>"$"+i.name},Document:{leave:i=>W(i.definitions,`

`)},OperationDefinition:{leave(i){const n=le("(",W(i.variableDefinitions,", "),")"),t=W([i.operation,W([i.name,n]),W(i.directives," ")]," ");return(t==="query"?"":t+" ")+i.selectionSet}},VariableDefinition:{leave:({variable:i,type:n,defaultValue:t,directives:s})=>i+": "+n+le(" = ",t)+le(" ",W(s," "))},SelectionSet:{leave:({selections:i})=>Kn(i)},Field:{leave({alias:i,name:n,arguments:t,directives:s,selectionSet:a}){const o=le("",i,": ")+n;let u=o+le("(",W(t,", "),")");return u.length>vD&&(u=o+le(`(
`,_s(W(t,`
`)),`
)`)),W([u,W(s," "),a]," ")}},Argument:{leave:({name:i,value:n})=>i+": "+n},FragmentSpread:{leave:({name:i,directives:n})=>"..."+i+le(" ",W(n," "))},InlineFragment:{leave:({typeCondition:i,directives:n,selectionSet:t})=>W(["...",le("on ",i),W(n," "),t]," ")},FragmentDefinition:{leave:({name:i,typeCondition:n,variableDefinitions:t,directives:s,selectionSet:a})=>`fragment ${i}${le("(",W(t,", "),")")} on ${n} ${le("",W(s," ")," ")}`+a},IntValue:{leave:({value:i})=>i},FloatValue:{leave:({value:i})=>i},StringValue:{leave:({value:i,block:n})=>n?V0(i):dD(i)},BooleanValue:{leave:({value:i})=>i?"true":"false"},NullValue:{leave:()=>"null"},EnumValue:{leave:({value:i})=>i},ListValue:{leave:({values:i})=>"["+W(i,", ")+"]"},ObjectValue:{leave:({fields:i})=>"{"+W(i,", ")+"}"},ObjectField:{leave:({name:i,value:n})=>i+": "+n},Directive:{leave:({name:i,arguments:n})=>"@"+i+le("(",W(n,", "),")")},NamedType:{leave:({name:i})=>i},ListType:{leave:({type:i})=>"["+i+"]"},NonNullType:{leave:({type:i})=>i+"!"},SchemaDefinition:{leave:({description:i,directives:n,operationTypes:t})=>le("",i,`
`)+W(["schema",W(n," "),Kn(t)]," ")},OperationTypeDefinition:{leave:({operation:i,type:n})=>i+": "+n},ScalarTypeDefinition:{leave:({description:i,name:n,directives:t})=>le("",i,`
`)+W(["scalar",n,W(t," ")]," ")},ObjectTypeDefinition:{leave:({description:i,name:n,interfaces:t,directives:s,fields:a})=>le("",i,`
`)+W(["type",n,le("implements ",W(t," & ")),W(s," "),Kn(a)]," ")},FieldDefinition:{leave:({description:i,name:n,arguments:t,type:s,directives:a})=>le("",i,`
`)+n+(cf(t)?le(`(
`,_s(W(t,`
`)),`
)`):le("(",W(t,", "),")"))+": "+s+le(" ",W(a," "))},InputValueDefinition:{leave:({description:i,name:n,type:t,defaultValue:s,directives:a})=>le("",i,`
`)+W([n+": "+t,le("= ",s),W(a," ")]," ")},InterfaceTypeDefinition:{leave:({description:i,name:n,interfaces:t,directives:s,fields:a})=>le("",i,`
`)+W(["interface",n,le("implements ",W(t," & ")),W(s," "),Kn(a)]," ")},UnionTypeDefinition:{leave:({description:i,name:n,directives:t,types:s})=>le("",i,`
`)+W(["union",n,W(t," "),le("= ",W(s," | "))]," ")},EnumTypeDefinition:{leave:({description:i,name:n,directives:t,values:s})=>le("",i,`
`)+W(["enum",n,W(t," "),Kn(s)]," ")},EnumValueDefinition:{leave:({description:i,name:n,directives:t})=>le("",i,`
`)+W([n,W(t," ")]," ")},InputObjectTypeDefinition:{leave:({description:i,name:n,directives:t,fields:s})=>le("",i,`
`)+W(["input",n,W(t," "),Kn(s)]," ")},DirectiveDefinition:{leave:({description:i,name:n,arguments:t,repeatable:s,locations:a})=>le("",i,`
`)+"directive @"+n+(cf(t)?le(`(
`,_s(W(t,`
`)),`
)`):le("(",W(t,", "),")"))+(s?" repeatable":"")+" on "+W(a," | ")},SchemaExtension:{leave:({directives:i,operationTypes:n})=>W(["extend schema",W(i," "),Kn(n)]," ")},ScalarTypeExtension:{leave:({name:i,directives:n})=>W(["extend scalar",i,W(n," ")]," ")},ObjectTypeExtension:{leave:({name:i,interfaces:n,directives:t,fields:s})=>W(["extend type",i,le("implements ",W(n," & ")),W(t," "),Kn(s)]," ")},InterfaceTypeExtension:{leave:({name:i,interfaces:n,directives:t,fields:s})=>W(["extend interface",i,le("implements ",W(n," & ")),W(t," "),Kn(s)]," ")},UnionTypeExtension:{leave:({name:i,directives:n,types:t})=>W(["extend union",i,W(n," "),le("= ",W(t," | "))]," ")},EnumTypeExtension:{leave:({name:i,directives:n,values:t})=>W(["extend enum",i,W(n," "),Kn(t)]," ")},InputObjectTypeExtension:{leave:({name:i,directives:n,fields:t})=>W(["extend input",i,W(n," "),Kn(t)]," ")}};function W(i,n=""){var t;return(t=i==null?void 0:i.filter(s=>s).join(n))!==null&&t!==void 0?t:""}function Kn(i){return le(`{
`,_s(W(i,`
`)),`
}`)}function le(i,n,t=""){return n!=null&&n!==""?i+n+t:""}function _s(i){return le("  ",i.replace(/\n/g,`
  `))}function cf(i){var n;return(n=i==null?void 0:i.some(t=>t.includes(`
`)))!==null&&n!==void 0?n:!1}function Fo(i,n){switch(i.kind){case w.NULL:return null;case w.INT:return parseInt(i.value,10);case w.FLOAT:return parseFloat(i.value);case w.STRING:case w.ENUM:case w.BOOLEAN:return i.value;case w.LIST:return i.values.map(t=>Fo(t,n));case w.OBJECT:return ui(i.fields,t=>t.name.value,t=>Fo(t.value,n));case w.VARIABLE:return n==null?void 0:n[i.name.value]}}function st(i){if(i!=null||fe(!1,"Must provide name."),typeof i=="string"||fe(!1,"Expected name to be a string."),i.length===0)throw new L("Expected name to be a non-empty string.");for(let n=1;n<i.length;++n)if(!Yf(i.charCodeAt(n)))throw new L(`Names must only contain [_a-zA-Z0-9] but "${i}" does not.`);if(!Ho(i.charCodeAt(0)))throw new L(`Names must start with [_a-zA-Z] but "${i}" does not.`);return i}function TD(i){if(i==="true"||i==="false"||i==="null")throw new L(`Enum values cannot be named: ${i}`);return st(i)}function Qo(i){return Jt(i)||Ye(i)||Ve(i)||Vn(i)||et(i)||vn(i)||bn(i)||Ae(i)}function Jt(i){return pt(i,Ot)}function Ye(i){return pt(i,ht)}function wD(i){if(!Ye(i))throw new Error(`Expected ${M(i)} to be a GraphQL Object type.`);return i}function Ve(i){return pt(i,Os)}function DD(i){if(!Ve(i))throw new Error(`Expected ${M(i)} to be a GraphQL Interface type.`);return i}function Vn(i){return pt(i,Rs)}function et(i){return pt(i,Bi)}function vn(i){return pt(i,xs)}function bn(i){return pt(i,fn)}function Ae(i){return pt(i,re)}function Jo(i){return Jt(i)||et(i)||vn(i)||Ko(i)&&Jo(i.ofType)}function eh(i){return Jt(i)||Ye(i)||Ve(i)||Vn(i)||et(i)||Ko(i)&&eh(i.ofType)}function Pi(i){return Jt(i)||et(i)}function wr(i){return Ye(i)||Ve(i)||Vn(i)}function ci(i){return Ve(i)||Vn(i)}class fn{constructor(n){Qo(n)||fe(!1,`Expected ${M(n)} to be a GraphQL type.`),this.ofType=n}get[Symbol.toStringTag](){return"GraphQLList"}toString(){return"["+String(this.ofType)+"]"}toJSON(){return this.toString()}}class re{constructor(n){nh(n)||fe(!1,`Expected ${M(n)} to be a GraphQL nullable type.`),this.ofType=n}get[Symbol.toStringTag](){return"GraphQLNonNull"}toString(){return String(this.ofType)+"!"}toJSON(){return this.toString()}}function Ko(i){return bn(i)||Ae(i)}function nh(i){return Qo(i)&&!Ae(i)}function ED(i){if(!nh(i))throw new Error(`Expected ${M(i)} to be a GraphQL nullable type.`);return i}function ID(i){if(i)return Ae(i)?i.ofType:i}function SI(i){return Jt(i)||Ye(i)||Ve(i)||Vn(i)||et(i)||vn(i)}function pi(i){if(i){let n=i;for(;Ko(n);)n=n.ofType;return n}}function th(i){return typeof i=="function"?i():i}function ih(i){return typeof i=="function"?i():i}class Ot{constructor(n){var t,s,a,o;const u=(t=n.parseValue)!==null&&t!==void 0?t:lf;this.name=st(n.name),this.description=n.description,this.specifiedByURL=n.specifiedByURL,this.serialize=(s=n.serialize)!==null&&s!==void 0?s:lf,this.parseValue=u,this.parseLiteral=(a=n.parseLiteral)!==null&&a!==void 0?a:(f,h)=>u(Fo(f,h)),this.extensions=Wn(n.extensions),this.astNode=n.astNode,this.extensionASTNodes=(o=n.extensionASTNodes)!==null&&o!==void 0?o:[],n.specifiedByURL==null||typeof n.specifiedByURL=="string"||fe(!1,`${this.name} must provide "specifiedByURL" as a string, but got: ${M(n.specifiedByURL)}.`),n.serialize==null||typeof n.serialize=="function"||fe(!1,`${this.name} must provide "serialize" function. If this custom Scalar is also used as an input type, ensure "parseValue" and "parseLiteral" functions are also provided.`),n.parseLiteral&&(typeof n.parseValue=="function"&&typeof n.parseLiteral=="function"||fe(!1,`${this.name} must provide both "parseValue" and "parseLiteral" functions.`))}get[Symbol.toStringTag](){return"GraphQLScalarType"}toConfig(){return{name:this.name,description:this.description,specifiedByURL:this.specifiedByURL,serialize:this.serialize,parseValue:this.parseValue,parseLiteral:this.parseLiteral,extensions:this.extensions,astNode:this.astNode,extensionASTNodes:this.extensionASTNodes}}toString(){return this.name}toJSON(){return this.toString()}}class ht{constructor(n){var t;this.name=st(n.name),this.description=n.description,this.isTypeOf=n.isTypeOf,this.extensions=Wn(n.extensions),this.astNode=n.astNode,this.extensionASTNodes=(t=n.extensionASTNodes)!==null&&t!==void 0?t:[],this._fields=()=>sh(n),this._interfaces=()=>rh(n),n.isTypeOf==null||typeof n.isTypeOf=="function"||fe(!1,`${this.name} must provide "isTypeOf" as a function, but got: ${M(n.isTypeOf)}.`)}get[Symbol.toStringTag](){return"GraphQLObjectType"}getFields(){return typeof this._fields=="function"&&(this._fields=this._fields()),this._fields}getInterfaces(){return typeof this._interfaces=="function"&&(this._interfaces=this._interfaces()),this._interfaces}toConfig(){return{name:this.name,description:this.description,interfaces:this.getInterfaces(),fields:oh(this.getFields()),isTypeOf:this.isTypeOf,extensions:this.extensions,astNode:this.astNode,extensionASTNodes:this.extensionASTNodes}}toString(){return this.name}toJSON(){return this.toString()}}function rh(i){var n;const t=th((n=i.interfaces)!==null&&n!==void 0?n:[]);return Array.isArray(t)||fe(!1,`${i.name} interfaces must be an Array or a function which returns an Array.`),t}function sh(i){const n=ih(i.fields);return Li(n)||fe(!1,`${i.name} fields must be an object with field names as keys or a function which returns such an object.`),_t(n,(t,s)=>{var a;Li(t)||fe(!1,`${i.name}.${s} field config must be an object.`),t.resolve==null||typeof t.resolve=="function"||fe(!1,`${i.name}.${s} field resolver must be a function if provided, but got: ${M(t.resolve)}.`);const o=(a=t.args)!==null&&a!==void 0?a:{};return Li(o)||fe(!1,`${i.name}.${s} args must be an object with argument names as keys.`),{name:st(s),description:t.description,type:t.type,args:ah(o),resolve:t.resolve,subscribe:t.subscribe,deprecationReason:t.deprecationReason,extensions:Wn(t.extensions),astNode:t.astNode}})}function ah(i){return Object.entries(i).map(([n,t])=>({name:st(n),description:t.description,type:t.type,defaultValue:t.defaultValue,deprecationReason:t.deprecationReason,extensions:Wn(t.extensions),astNode:t.astNode}))}function Li(i){return Ct(i)&&!Array.isArray(i)}function oh(i){return _t(i,n=>({description:n.description,type:n.type,args:lh(n.args),resolve:n.resolve,subscribe:n.subscribe,deprecationReason:n.deprecationReason,extensions:n.extensions,astNode:n.astNode}))}function lh(i){return ui(i,n=>n.name,n=>({description:n.description,type:n.type,defaultValue:n.defaultValue,deprecationReason:n.deprecationReason,extensions:n.extensions,astNode:n.astNode}))}function uh(i){return Ae(i.type)&&i.defaultValue===void 0}class Os{constructor(n){var t;this.name=st(n.name),this.description=n.description,this.resolveType=n.resolveType,this.extensions=Wn(n.extensions),this.astNode=n.astNode,this.extensionASTNodes=(t=n.extensionASTNodes)!==null&&t!==void 0?t:[],this._fields=sh.bind(void 0,n),this._interfaces=rh.bind(void 0,n),n.resolveType==null||typeof n.resolveType=="function"||fe(!1,`${this.name} must provide "resolveType" as a function, but got: ${M(n.resolveType)}.`)}get[Symbol.toStringTag](){return"GraphQLInterfaceType"}getFields(){return typeof this._fields=="function"&&(this._fields=this._fields()),this._fields}getInterfaces(){return typeof this._interfaces=="function"&&(this._interfaces=this._interfaces()),this._interfaces}toConfig(){return{name:this.name,description:this.description,interfaces:this.getInterfaces(),fields:oh(this.getFields()),resolveType:this.resolveType,extensions:this.extensions,astNode:this.astNode,extensionASTNodes:this.extensionASTNodes}}toString(){return this.name}toJSON(){return this.toString()}}class Rs{constructor(n){var t;this.name=st(n.name),this.description=n.description,this.resolveType=n.resolveType,this.extensions=Wn(n.extensions),this.astNode=n.astNode,this.extensionASTNodes=(t=n.extensionASTNodes)!==null&&t!==void 0?t:[],this._types=AD.bind(void 0,n),n.resolveType==null||typeof n.resolveType=="function"||fe(!1,`${this.name} must provide "resolveType" as a function, but got: ${M(n.resolveType)}.`)}get[Symbol.toStringTag](){return"GraphQLUnionType"}getTypes(){return typeof this._types=="function"&&(this._types=this._types()),this._types}toConfig(){return{name:this.name,description:this.description,types:this.getTypes(),resolveType:this.resolveType,extensions:this.extensions,astNode:this.astNode,extensionASTNodes:this.extensionASTNodes}}toString(){return this.name}toJSON(){return this.toString()}}function AD(i){const n=th(i.types);return Array.isArray(n)||fe(!1,`Must provide Array of types or a function which returns such an array for Union ${i.name}.`),n}class Bi{constructor(n){var t;this.name=st(n.name),this.description=n.description,this.extensions=Wn(n.extensions),this.astNode=n.astNode,this.extensionASTNodes=(t=n.extensionASTNodes)!==null&&t!==void 0?t:[],this._values=typeof n.values=="function"?n.values:ff(this.name,n.values),this._valueLookup=null,this._nameLookup=null}get[Symbol.toStringTag](){return"GraphQLEnumType"}getValues(){return typeof this._values=="function"&&(this._values=ff(this.name,this._values())),this._values}getValue(n){return this._nameLookup===null&&(this._nameLookup=di(this.getValues(),t=>t.name)),this._nameLookup[n]}serialize(n){this._valueLookup===null&&(this._valueLookup=new Map(this.getValues().map(s=>[s.value,s])));const t=this._valueLookup.get(n);if(t===void 0)throw new L(`Enum "${this.name}" cannot represent value: ${M(n)}`);return t.name}parseValue(n){if(typeof n!="string"){const s=M(n);throw new L(`Enum "${this.name}" cannot represent non-string value: ${s}.`+Is(this,s))}const t=this.getValue(n);if(t==null)throw new L(`Value "${n}" does not exist in "${this.name}" enum.`+Is(this,n));return t.value}parseLiteral(n,t){if(n.kind!==w.ENUM){const a=Xe(n);throw new L(`Enum "${this.name}" cannot represent non-enum value: ${a}.`+Is(this,a),{nodes:n})}const s=this.getValue(n.value);if(s==null){const a=Xe(n);throw new L(`Value "${a}" does not exist in "${this.name}" enum.`+Is(this,a),{nodes:n})}return s.value}toConfig(){const n=ui(this.getValues(),t=>t.name,t=>({description:t.description,value:t.value,deprecationReason:t.deprecationReason,extensions:t.extensions,astNode:t.astNode}));return{name:this.name,description:this.description,values:n,extensions:this.extensions,astNode:this.astNode,extensionASTNodes:this.extensionASTNodes}}toString(){return this.name}toJSON(){return this.toString()}}function Is(i,n){const t=i.getValues().map(a=>a.name),s=yi(n,t);return Qt("the enum value",s)}function ff(i,n){return Li(n)||fe(!1,`${i} values must be an object with value names as keys.`),Object.entries(n).map(([t,s])=>(Li(s)||fe(!1,`${i}.${t} must refer to an object with a "value" key representing an internal value but got: ${M(s)}.`),{name:TD(t),description:s.description,value:s.value!==void 0?s.value:t,deprecationReason:s.deprecationReason,extensions:Wn(s.extensions),astNode:s.astNode}))}class xs{constructor(n){var t,s;this.name=st(n.name),this.description=n.description,this.extensions=Wn(n.extensions),this.astNode=n.astNode,this.extensionASTNodes=(t=n.extensionASTNodes)!==null&&t!==void 0?t:[],this.isOneOf=(s=n.isOneOf)!==null&&s!==void 0?s:!1,this._fields=_D.bind(void 0,n)}get[Symbol.toStringTag](){return"GraphQLInputObjectType"}getFields(){return typeof this._fields=="function"&&(this._fields=this._fields()),this._fields}toConfig(){const n=_t(this.getFields(),t=>({description:t.description,type:t.type,defaultValue:t.defaultValue,deprecationReason:t.deprecationReason,extensions:t.extensions,astNode:t.astNode}));return{name:this.name,description:this.description,fields:n,extensions:this.extensions,astNode:this.astNode,extensionASTNodes:this.extensionASTNodes,isOneOf:this.isOneOf}}toString(){return this.name}toJSON(){return this.toString()}}function _D(i){const n=ih(i.fields);return Li(n)||fe(!1,`${i.name} fields must be an object with field names as keys or a function which returns such an object.`),_t(n,(t,s)=>(!("resolve"in t)||fe(!1,`${i.name}.${s} field has a resolve property, but Input Types cannot define resolvers.`),{name:st(s),description:t.description,type:t.type,defaultValue:t.defaultValue,deprecationReason:t.deprecationReason,extensions:Wn(t.extensions),astNode:t.astNode}))}function SD(i){return Ae(i.type)&&i.defaultValue===void 0}function mr(i,n,t){return n===t?!0:Ae(t)?Ae(n)?mr(i,n.ofType,t.ofType):!1:Ae(n)?mr(i,n.ofType,t):bn(t)?bn(n)?mr(i,n.ofType,t.ofType):!1:bn(n)?!1:ci(t)&&(Ve(n)||Ye(n))&&i.isSubType(t,n)}function hf(i,n,t){return n===t?!0:ci(n)?ci(t)?i.getPossibleTypes(n).some(s=>i.isSubType(t,s)):i.isSubType(n,t):ci(t)?i.isSubType(t,n):!1}const To=2147483647,wo=-2147483648,kD=new Ot({name:"Int",description:"The `Int` scalar type represents non-fractional signed whole numeric values. Int can represent values between -(2^31) and 2^31 - 1.",serialize(i){const n=_r(i);if(typeof n=="boolean")return n?1:0;let t=n;if(typeof n=="string"&&n!==""&&(t=Number(n)),typeof t!="number"||!Number.isInteger(t))throw new L(`Int cannot represent non-integer value: ${M(n)}`);if(t>To||t<wo)throw new L("Int cannot represent non 32-bit signed integer value: "+M(n));return t},parseValue(i){if(typeof i!="number"||!Number.isInteger(i))throw new L(`Int cannot represent non-integer value: ${M(i)}`);if(i>To||i<wo)throw new L(`Int cannot represent non 32-bit signed integer value: ${i}`);return i},parseLiteral(i){if(i.kind!==w.INT)throw new L(`Int cannot represent non-integer value: ${Xe(i)}`,{nodes:i});const n=parseInt(i.value,10);if(n>To||n<wo)throw new L(`Int cannot represent non 32-bit signed integer value: ${i.value}`,{nodes:i});return n}}),FD=new Ot({name:"Float",description:"The `Float` scalar type represents signed double-precision fractional values as specified by [IEEE 754](https://en.wikipedia.org/wiki/IEEE_floating_point).",serialize(i){const n=_r(i);if(typeof n=="boolean")return n?1:0;let t=n;if(typeof n=="string"&&n!==""&&(t=Number(n)),typeof t!="number"||!Number.isFinite(t))throw new L(`Float cannot represent non numeric value: ${M(n)}`);return t},parseValue(i){if(typeof i!="number"||!Number.isFinite(i))throw new L(`Float cannot represent non numeric value: ${M(i)}`);return i},parseLiteral(i){if(i.kind!==w.FLOAT&&i.kind!==w.INT)throw new L(`Float cannot represent non numeric value: ${Xe(i)}`,i);return parseFloat(i.value)}}),Ge=new Ot({name:"String",description:"The `String` scalar type represents textual data, represented as UTF-8 character sequences. The String type is most often used by GraphQL to represent free-form human-readable text.",serialize(i){const n=_r(i);if(typeof n=="string")return n;if(typeof n=="boolean")return n?"true":"false";if(typeof n=="number"&&Number.isFinite(n))return n.toString();throw new L(`String cannot represent value: ${M(i)}`)},parseValue(i){if(typeof i!="string")throw new L(`String cannot represent a non string value: ${M(i)}`);return i},parseLiteral(i){if(i.kind!==w.STRING)throw new L(`String cannot represent a non string value: ${Xe(i)}`,{nodes:i});return i.value}}),Fn=new Ot({name:"Boolean",description:"The `Boolean` scalar type represents `true` or `false`.",serialize(i){const n=_r(i);if(typeof n=="boolean")return n;if(Number.isFinite(n))return n!==0;throw new L(`Boolean cannot represent a non boolean value: ${M(n)}`)},parseValue(i){if(typeof i!="boolean")throw new L(`Boolean cannot represent a non boolean value: ${M(i)}`);return i},parseLiteral(i){if(i.kind!==w.BOOLEAN)throw new L(`Boolean cannot represent a non boolean value: ${Xe(i)}`,{nodes:i});return i.value}}),ch=new Ot({name:"ID",description:'The `ID` scalar type represents a unique identifier, often used to refetch an object or as key for a cache. The ID type appears in a JSON response as a String; however, it is not intended to be human-readable. When expected as an input type, any string (such as `"4"`) or integer (such as `4`) input value will be accepted as an ID.',serialize(i){const n=_r(i);if(typeof n=="string")return n;if(Number.isInteger(n))return String(n);throw new L(`ID cannot represent value: ${M(i)}`)},parseValue(i){if(typeof i=="string")return i;if(typeof i=="number"&&Number.isInteger(i))return i.toString();throw new L(`ID cannot represent value: ${M(i)}`)},parseLiteral(i){if(i.kind!==w.STRING&&i.kind!==w.INT)throw new L("ID cannot represent a non-string and non-integer value: "+Xe(i),{nodes:i});return i.value}}),Ys=Object.freeze([Ge,kD,FD,Fn,ch]);function ND(i){return Ys.some(({name:n})=>i.name===n)}function _r(i){if(Ct(i)){if(typeof i.valueOf=="function"){const n=i.valueOf();if(!Ct(n))return n}if(typeof i.toJSON=="function")return i.toJSON()}return i}function CD(i){return pt(i,Rt)}class Rt{constructor(n){var t,s;this.name=st(n.name),this.description=n.description,this.locations=n.locations,this.isRepeatable=(t=n.isRepeatable)!==null&&t!==void 0?t:!1,this.extensions=Wn(n.extensions),this.astNode=n.astNode,Array.isArray(n.locations)||fe(!1,`@${n.name} locations must be an Array.`);const a=(s=n.args)!==null&&s!==void 0?s:{};Ct(a)&&!Array.isArray(a)||fe(!1,`@${n.name} args must be an object with argument names as keys.`),this.args=ah(a)}get[Symbol.toStringTag](){return"GraphQLDirective"}toConfig(){return{name:this.name,description:this.description,locations:this.locations,args:lh(this.args),isRepeatable:this.isRepeatable,extensions:this.extensions,astNode:this.astNode}}toString(){return"@"+this.name}toJSON(){return this.toString()}}const fh=new Rt({name:"include",description:"Directs the executor to include this field or fragment only when the `if` argument is true.",locations:[j.FIELD,j.FRAGMENT_SPREAD,j.INLINE_FRAGMENT],args:{if:{type:new re(Fn),description:"Included when true."}}}),hh=new Rt({name:"skip",description:"Directs the executor to skip this field or fragment when the `if` argument is true.",locations:[j.FIELD,j.FRAGMENT_SPREAD,j.INLINE_FRAGMENT],args:{if:{type:new re(Fn),description:"Skipped when true."}}}),OD="No longer supported",dh=new Rt({name:"deprecated",description:"Marks an element of a GraphQL schema as no longer supported.",locations:[j.FIELD_DEFINITION,j.ARGUMENT_DEFINITION,j.INPUT_FIELD_DEFINITION,j.ENUM_VALUE],args:{reason:{type:Ge,description:"Explains why this element was deprecated, usually also including a suggestion for how to access supported similar data. Formatted using the Markdown syntax, as specified by [CommonMark](https://commonmark.org/).",defaultValue:OD}}}),ph=new Rt({name:"specifiedBy",description:"Exposes a URL that specifies the behavior of this scalar.",locations:[j.SCALAR],args:{url:{type:new re(Ge),description:"The URL that specifies the behavior of this scalar."}}}),gh=new Rt({name:"oneOf",description:"Indicates exactly one field must be supplied and this field must not be `null`.",locations:[j.INPUT_OBJECT],args:{}}),Mi=Object.freeze([fh,hh,dh,ph,gh]);function RD(i){return typeof i=="object"&&typeof(i==null?void 0:i[Symbol.iterator])=="function"}function hr(i,n){if(Ae(n)){const t=hr(i,n.ofType);return(t==null?void 0:t.kind)===w.NULL?null:t}if(i===null)return{kind:w.NULL};if(i===void 0)return null;if(bn(n)){const t=n.ofType;if(RD(i)){const s=[];for(const a of i){const o=hr(a,t);o!=null&&s.push(o)}return{kind:w.LIST,values:s}}return hr(i,t)}if(vn(n)){if(!Ct(i))return null;const t=[];for(const s of Object.values(n.getFields())){const a=hr(i[s.name],s.type);a&&t.push({kind:w.OBJECT_FIELD,name:{kind:w.NAME,value:s.name},value:a})}return{kind:w.OBJECT,fields:t}}if(Pi(n)){const t=n.serialize(i);if(t==null)return null;if(typeof t=="boolean")return{kind:w.BOOLEAN,value:t};if(typeof t=="number"&&Number.isFinite(t)){const s=String(t);return df.test(s)?{kind:w.INT,value:s}:{kind:w.FLOAT,value:s}}if(typeof t=="string")return et(n)?{kind:w.ENUM,value:t}:n===ch&&df.test(t)?{kind:w.INT,value:t}:{kind:w.STRING,value:t};throw new TypeError(`Cannot convert value to AST: ${M(t)}.`)}Zn(!1,"Unexpected input type: "+M(n))}const df=/^-?(?:0|[1-9][0-9]*)$/,Xo=new ht({name:"__Schema",description:"A GraphQL Schema defines the capabilities of a GraphQL server. It exposes all available types and directives on the server, as well as the entry points for query, mutation, and subscription operations.",fields:()=>({description:{type:Ge,resolve:i=>i.description},types:{description:"A list of all types supported by this server.",type:new re(new fn(new re(ft))),resolve(i){return Object.values(i.getTypeMap())}},queryType:{description:"The type that query operations will be rooted at.",type:new re(ft),resolve:i=>i.getQueryType()},mutationType:{description:"If this server supports mutation, the type that mutation operations will be rooted at.",type:ft,resolve:i=>i.getMutationType()},subscriptionType:{description:"If this server support subscription, the type that subscription operations will be rooted at.",type:ft,resolve:i=>i.getSubscriptionType()},directives:{description:"A list of all directives supported by this server.",type:new re(new fn(new re(mh))),resolve:i=>i.getDirectives()}})}),mh=new ht({name:"__Directive",description:`A Directive provides a way to describe alternate runtime execution and type validation behavior in a GraphQL document.

In some cases, you need to provide options to alter GraphQL's execution behavior in ways field arguments will not suffice, such as conditionally including or skipping a field. Directives provide this by describing additional information to the executor.`,fields:()=>({name:{type:new re(Ge),resolve:i=>i.name},description:{type:Ge,resolve:i=>i.description},isRepeatable:{type:new re(Fn),resolve:i=>i.isRepeatable},locations:{type:new re(new fn(new re(yh))),resolve:i=>i.locations},args:{type:new re(new fn(new re(js))),args:{includeDeprecated:{type:Fn,defaultValue:!1}},resolve(i,{includeDeprecated:n}){return n?i.args:i.args.filter(t=>t.deprecationReason==null)}}})}),yh=new Bi({name:"__DirectiveLocation",description:"A Directive can be adjacent to many parts of the GraphQL language, a __DirectiveLocation describes one such possible adjacencies.",values:{QUERY:{value:j.QUERY,description:"Location adjacent to a query operation."},MUTATION:{value:j.MUTATION,description:"Location adjacent to a mutation operation."},SUBSCRIPTION:{value:j.SUBSCRIPTION,description:"Location adjacent to a subscription operation."},FIELD:{value:j.FIELD,description:"Location adjacent to a field."},FRAGMENT_DEFINITION:{value:j.FRAGMENT_DEFINITION,description:"Location adjacent to a fragment definition."},FRAGMENT_SPREAD:{value:j.FRAGMENT_SPREAD,description:"Location adjacent to a fragment spread."},INLINE_FRAGMENT:{value:j.INLINE_FRAGMENT,description:"Location adjacent to an inline fragment."},VARIABLE_DEFINITION:{value:j.VARIABLE_DEFINITION,description:"Location adjacent to a variable definition."},SCHEMA:{value:j.SCHEMA,description:"Location adjacent to a schema definition."},SCALAR:{value:j.SCALAR,description:"Location adjacent to a scalar definition."},OBJECT:{value:j.OBJECT,description:"Location adjacent to an object type definition."},FIELD_DEFINITION:{value:j.FIELD_DEFINITION,description:"Location adjacent to a field definition."},ARGUMENT_DEFINITION:{value:j.ARGUMENT_DEFINITION,description:"Location adjacent to an argument definition."},INTERFACE:{value:j.INTERFACE,description:"Location adjacent to an interface definition."},UNION:{value:j.UNION,description:"Location adjacent to a union definition."},ENUM:{value:j.ENUM,description:"Location adjacent to an enum definition."},ENUM_VALUE:{value:j.ENUM_VALUE,description:"Location adjacent to an enum value definition."},INPUT_OBJECT:{value:j.INPUT_OBJECT,description:"Location adjacent to an input object type definition."},INPUT_FIELD_DEFINITION:{value:j.INPUT_FIELD_DEFINITION,description:"Location adjacent to an input object field definition."}}}),ft=new ht({name:"__Type",description:"The fundamental unit of any GraphQL Schema is the type. There are many kinds of types in GraphQL as represented by the `__TypeKind` enum.\n\nDepending on the kind of a type, certain fields describe information about that type. Scalar types provide no information beyond a name, description and optional `specifiedByURL`, while Enum types provide their values. Object and Interface types provide the fields they describe. Abstract types, Union and Interface, provide the Object types possible at runtime. List and NonNull types compose other types.",fields:()=>({kind:{type:new re(Th),resolve(i){if(Jt(i))return Ee.SCALAR;if(Ye(i))return Ee.OBJECT;if(Ve(i))return Ee.INTERFACE;if(Vn(i))return Ee.UNION;if(et(i))return Ee.ENUM;if(vn(i))return Ee.INPUT_OBJECT;if(bn(i))return Ee.LIST;if(Ae(i))return Ee.NON_NULL;Zn(!1,`Unexpected type: "${M(i)}".`)}},name:{type:Ge,resolve:i=>"name"in i?i.name:void 0},description:{type:Ge,resolve:i=>"description"in i?i.description:void 0},specifiedByURL:{type:Ge,resolve:i=>"specifiedByURL"in i?i.specifiedByURL:void 0},fields:{type:new fn(new re(vh)),args:{includeDeprecated:{type:Fn,defaultValue:!1}},resolve(i,{includeDeprecated:n}){if(Ye(i)||Ve(i)){const t=Object.values(i.getFields());return n?t:t.filter(s=>s.deprecationReason==null)}}},interfaces:{type:new fn(new re(ft)),resolve(i){if(Ye(i)||Ve(i))return i.getInterfaces()}},possibleTypes:{type:new fn(new re(ft)),resolve(i,n,t,{schema:s}){if(ci(i))return s.getPossibleTypes(i)}},enumValues:{type:new fn(new re(bh)),args:{includeDeprecated:{type:Fn,defaultValue:!1}},resolve(i,{includeDeprecated:n}){if(et(i)){const t=i.getValues();return n?t:t.filter(s=>s.deprecationReason==null)}}},inputFields:{type:new fn(new re(js)),args:{includeDeprecated:{type:Fn,defaultValue:!1}},resolve(i,{includeDeprecated:n}){if(vn(i)){const t=Object.values(i.getFields());return n?t:t.filter(s=>s.deprecationReason==null)}}},ofType:{type:ft,resolve:i=>"ofType"in i?i.ofType:void 0},isOneOf:{type:Fn,resolve:i=>{if(vn(i))return i.isOneOf}}})}),vh=new ht({name:"__Field",description:"Object and Interface types are described by a list of Fields, each of which has a name, potentially a list of arguments, and a return type.",fields:()=>({name:{type:new re(Ge),resolve:i=>i.name},description:{type:Ge,resolve:i=>i.description},args:{type:new re(new fn(new re(js))),args:{includeDeprecated:{type:Fn,defaultValue:!1}},resolve(i,{includeDeprecated:n}){return n?i.args:i.args.filter(t=>t.deprecationReason==null)}},type:{type:new re(ft),resolve:i=>i.type},isDeprecated:{type:new re(Fn),resolve:i=>i.deprecationReason!=null},deprecationReason:{type:Ge,resolve:i=>i.deprecationReason}})}),js=new ht({name:"__InputValue",description:"Arguments provided to Fields or Directives and the input fields of an InputObject are represented as Input Values which describe their type and optionally a default value.",fields:()=>({name:{type:new re(Ge),resolve:i=>i.name},description:{type:Ge,resolve:i=>i.description},type:{type:new re(ft),resolve:i=>i.type},defaultValue:{type:Ge,description:"A GraphQL-formatted string representing the default value for this input value.",resolve(i){const{type:n,defaultValue:t}=i,s=hr(t,n);return s?Xe(s):null}},isDeprecated:{type:new re(Fn),resolve:i=>i.deprecationReason!=null},deprecationReason:{type:Ge,resolve:i=>i.deprecationReason}})}),bh=new ht({name:"__EnumValue",description:"One possible value for a given Enum. Enum values are unique values, not a placeholder for a string or numeric value. However an Enum value is returned in a JSON response as a string.",fields:()=>({name:{type:new re(Ge),resolve:i=>i.name},description:{type:Ge,resolve:i=>i.description},isDeprecated:{type:new re(Fn),resolve:i=>i.deprecationReason!=null},deprecationReason:{type:Ge,resolve:i=>i.deprecationReason}})});var Ee;(function(i){i.SCALAR="SCALAR",i.OBJECT="OBJECT",i.INTERFACE="INTERFACE",i.UNION="UNION",i.ENUM="ENUM",i.INPUT_OBJECT="INPUT_OBJECT",i.LIST="LIST",i.NON_NULL="NON_NULL"})(Ee||(Ee={}));const Th=new Bi({name:"__TypeKind",description:"An enum describing what kind of type a given `__Type` is.",values:{SCALAR:{value:Ee.SCALAR,description:"Indicates this type is a scalar."},OBJECT:{value:Ee.OBJECT,description:"Indicates this type is an object. `fields` and `interfaces` are valid fields."},INTERFACE:{value:Ee.INTERFACE,description:"Indicates this type is an interface. `fields`, `interfaces`, and `possibleTypes` are valid fields."},UNION:{value:Ee.UNION,description:"Indicates this type is a union. `possibleTypes` is a valid field."},ENUM:{value:Ee.ENUM,description:"Indicates this type is an enum. `enumValues` is a valid field."},INPUT_OBJECT:{value:Ee.INPUT_OBJECT,description:"Indicates this type is an input object. `inputFields` is a valid field."},LIST:{value:Ee.LIST,description:"Indicates this type is a list. `ofType` is a valid field."},NON_NULL:{value:Ee.NON_NULL,description:"Indicates this type is a non-null. `ofType` is a valid field."}}});new re(Xo);new re(Ge);new re(Ge);const Hs=Object.freeze([Xo,mh,yh,ft,vh,js,bh,Th]);function xD(i){return Hs.some(({name:n})=>i.name===n)}class wh{constructor(n){var t,s;this.__validationErrors=n.assumeValid===!0?[]:void 0,Ct(n)||fe(!1,"Must provide configuration object."),!n.types||Array.isArray(n.types)||fe(!1,`"types" must be Array if provided but got: ${M(n.types)}.`),!n.directives||Array.isArray(n.directives)||fe(!1,`"directives" must be Array if provided but got: ${M(n.directives)}.`),this.description=n.description,this.extensions=Wn(n.extensions),this.astNode=n.astNode,this.extensionASTNodes=(t=n.extensionASTNodes)!==null&&t!==void 0?t:[],this._queryType=n.query,this._mutationType=n.mutation,this._subscriptionType=n.subscription,this._directives=(s=n.directives)!==null&&s!==void 0?s:Mi;const a=new Set(n.types);if(n.types!=null)for(const o of n.types)a.delete(o),Xn(o,a);this._queryType!=null&&Xn(this._queryType,a),this._mutationType!=null&&Xn(this._mutationType,a),this._subscriptionType!=null&&Xn(this._subscriptionType,a);for(const o of this._directives)if(CD(o))for(const u of o.args)Xn(u.type,a);Xn(Xo,a),this._typeMap=Object.create(null),this._subTypeMap=Object.create(null),this._implementationsMap=Object.create(null);for(const o of a){if(o==null)continue;const u=o.name;if(u||fe(!1,"One of the provided types for building the Schema is missing a name."),this._typeMap[u]!==void 0)throw new Error(`Schema must contain uniquely named types but contains multiple types named "${u}".`);if(this._typeMap[u]=o,Ve(o)){for(const f of o.getInterfaces())if(Ve(f)){let h=this._implementationsMap[f.name];h===void 0&&(h=this._implementationsMap[f.name]={objects:[],interfaces:[]}),h.interfaces.push(o)}}else if(Ye(o)){for(const f of o.getInterfaces())if(Ve(f)){let h=this._implementationsMap[f.name];h===void 0&&(h=this._implementationsMap[f.name]={objects:[],interfaces:[]}),h.objects.push(o)}}}}get[Symbol.toStringTag](){return"GraphQLSchema"}getQueryType(){return this._queryType}getMutationType(){return this._mutationType}getSubscriptionType(){return this._subscriptionType}getRootType(n){switch(n){case Gn.QUERY:return this.getQueryType();case Gn.MUTATION:return this.getMutationType();case Gn.SUBSCRIPTION:return this.getSubscriptionType()}}getTypeMap(){return this._typeMap}getType(n){return this.getTypeMap()[n]}getPossibleTypes(n){return Vn(n)?n.getTypes():this.getImplementations(n).objects}getImplementations(n){const t=this._implementationsMap[n.name];return t??{objects:[],interfaces:[]}}isSubType(n,t){let s=this._subTypeMap[n.name];if(s===void 0){if(s=Object.create(null),Vn(n))for(const a of n.getTypes())s[a.name]=!0;else{const a=this.getImplementations(n);for(const o of a.objects)s[o.name]=!0;for(const o of a.interfaces)s[o.name]=!0}this._subTypeMap[n.name]=s}return s[t.name]!==void 0}getDirectives(){return this._directives}getDirective(n){return this.getDirectives().find(t=>t.name===n)}toConfig(){return{description:this.description,query:this.getQueryType(),mutation:this.getMutationType(),subscription:this.getSubscriptionType(),types:Object.values(this.getTypeMap()),directives:this.getDirectives(),extensions:this.extensions,astNode:this.astNode,extensionASTNodes:this.extensionASTNodes,assumeValid:this.__validationErrors!==void 0}}}function Xn(i,n){const t=pi(i);if(!n.has(t)){if(n.add(t),Vn(t))for(const s of t.getTypes())Xn(s,n);else if(Ye(t)||Ve(t)){for(const s of t.getInterfaces())Xn(s,n);for(const s of Object.values(t.getFields())){Xn(s.type,n);for(const a of s.args)Xn(a.type,n)}}else if(vn(t))for(const s of Object.values(t.getFields()))Xn(s.type,n)}return n}function dt(i,n){switch(n.kind){case w.LIST_TYPE:{const t=dt(i,n.type);return t&&new fn(t)}case w.NON_NULL_TYPE:{const t=dt(i,n.type);return t&&new re(t)}case w.NAMED_TYPE:return i.getType(n.name.value)}}function LD(i){return i.kind===w.OPERATION_DEFINITION||i.kind===w.FRAGMENT_DEFINITION}function PD(i){return i.kind===w.SCHEMA_DEFINITION||Sr(i)||i.kind===w.DIRECTIVE_DEFINITION}function Sr(i){return i.kind===w.SCALAR_TYPE_DEFINITION||i.kind===w.OBJECT_TYPE_DEFINITION||i.kind===w.INTERFACE_TYPE_DEFINITION||i.kind===w.UNION_TYPE_DEFINITION||i.kind===w.ENUM_TYPE_DEFINITION||i.kind===w.INPUT_OBJECT_TYPE_DEFINITION}function BD(i){return i.kind===w.SCHEMA_EXTENSION||Zo(i)}function Zo(i){return i.kind===w.SCALAR_TYPE_EXTENSION||i.kind===w.OBJECT_TYPE_EXTENSION||i.kind===w.INTERFACE_TYPE_EXTENSION||i.kind===w.UNION_TYPE_EXTENSION||i.kind===w.ENUM_TYPE_EXTENSION||i.kind===w.INPUT_OBJECT_TYPE_EXTENSION}function UD(i){return{Document(n){for(const t of n.definitions)if(!LD(t)){const s=t.kind===w.SCHEMA_DEFINITION||t.kind===w.SCHEMA_EXTENSION?"schema":'"'+t.name.value+'"';i.reportError(new L(`The ${s} definition is not executable.`,{nodes:t}))}return!1}}}function MD(i){return{Field(n){const t=i.getParentType();if(t&&!i.getFieldDef()){const a=i.getSchema(),o=n.name.value;let u=Qt("to use an inline fragment on",$D(a,t,o));u===""&&(u=Qt(GD(t,o))),i.reportError(new L(`Cannot query field "${o}" on type "${t.name}".`+u,{nodes:n}))}}}}function $D(i,n,t){if(!ci(n))return[];const s=new Set,a=Object.create(null);for(const u of i.getPossibleTypes(n))if(u.getFields()[t]){s.add(u),a[u.name]=1;for(const f of u.getInterfaces()){var o;f.getFields()[t]&&(s.add(f),a[f.name]=((o=a[f.name])!==null&&o!==void 0?o:0)+1)}}return[...s].sort((u,f)=>{const h=a[f.name]-a[u.name];return h!==0?h:Ve(u)&&i.isSubType(u,f)?-1:Ve(f)&&i.isSubType(f,u)?1:zo(u.name,f.name)}).map(u=>u.name)}function GD(i,n){if(Ye(i)||Ve(i)){const t=Object.keys(i.getFields());return yi(n,t)}return[]}function VD(i){return{InlineFragment(n){const t=n.typeCondition;if(t){const s=dt(i.getSchema(),t);if(s&&!wr(s)){const a=Xe(t);i.reportError(new L(`Fragment cannot condition on non composite type "${a}".`,{nodes:t}))}}},FragmentDefinition(n){const t=dt(i.getSchema(),n.typeCondition);if(t&&!wr(t)){const s=Xe(n.typeCondition);i.reportError(new L(`Fragment "${n.name.value}" cannot condition on non composite type "${s}".`,{nodes:n.typeCondition}))}}}}function WD(i){return{...Dh(i),Argument(n){const t=i.getArgument(),s=i.getFieldDef(),a=i.getParentType();if(!t&&s&&a){const o=n.name.value,u=s.args.map(h=>h.name),f=yi(o,u);i.reportError(new L(`Unknown argument "${o}" on field "${a.name}.${s.name}".`+Qt(f),{nodes:n}))}}}}function Dh(i){const n=Object.create(null),t=i.getSchema(),s=t?t.getDirectives():Mi;for(const u of s)n[u.name]=u.args.map(f=>f.name);const a=i.getDocument().definitions;for(const u of a)if(u.kind===w.DIRECTIVE_DEFINITION){var o;const f=(o=u.arguments)!==null&&o!==void 0?o:[];n[u.name.value]=f.map(h=>h.name.value)}return{Directive(u){const f=u.name.value,h=n[f];if(u.arguments&&h)for(const m of u.arguments){const y=m.name.value;if(!h.includes(y)){const b=yi(y,h);i.reportError(new L(`Unknown argument "${y}" on directive "@${f}".`+Qt(b),{nodes:m}))}}return!1}}}function Eh(i){const n=Object.create(null),t=i.getSchema(),s=t?t.getDirectives():Mi;for(const o of s)n[o.name]=o.locations;const a=i.getDocument().definitions;for(const o of a)o.kind===w.DIRECTIVE_DEFINITION&&(n[o.name.value]=o.locations.map(u=>u.value));return{Directive(o,u,f,h,m){const y=o.name.value,b=n[y];if(!b){i.reportError(new L(`Unknown directive "@${y}".`,{nodes:o}));return}const O=qD(m);O&&!b.includes(O)&&i.reportError(new L(`Directive "@${y}" may not be used on ${O}.`,{nodes:o}))}}}function qD(i){const n=i[i.length-1];switch("kind"in n||Zn(!1),n.kind){case w.OPERATION_DEFINITION:return YD(n.operation);case w.FIELD:return j.FIELD;case w.FRAGMENT_SPREAD:return j.FRAGMENT_SPREAD;case w.INLINE_FRAGMENT:return j.INLINE_FRAGMENT;case w.FRAGMENT_DEFINITION:return j.FRAGMENT_DEFINITION;case w.VARIABLE_DEFINITION:return j.VARIABLE_DEFINITION;case w.SCHEMA_DEFINITION:case w.SCHEMA_EXTENSION:return j.SCHEMA;case w.SCALAR_TYPE_DEFINITION:case w.SCALAR_TYPE_EXTENSION:return j.SCALAR;case w.OBJECT_TYPE_DEFINITION:case w.OBJECT_TYPE_EXTENSION:return j.OBJECT;case w.FIELD_DEFINITION:return j.FIELD_DEFINITION;case w.INTERFACE_TYPE_DEFINITION:case w.INTERFACE_TYPE_EXTENSION:return j.INTERFACE;case w.UNION_TYPE_DEFINITION:case w.UNION_TYPE_EXTENSION:return j.UNION;case w.ENUM_TYPE_DEFINITION:case w.ENUM_TYPE_EXTENSION:return j.ENUM;case w.ENUM_VALUE_DEFINITION:return j.ENUM_VALUE;case w.INPUT_OBJECT_TYPE_DEFINITION:case w.INPUT_OBJECT_TYPE_EXTENSION:return j.INPUT_OBJECT;case w.INPUT_VALUE_DEFINITION:{const t=i[i.length-3];return"kind"in t||Zn(!1),t.kind===w.INPUT_OBJECT_TYPE_DEFINITION?j.INPUT_FIELD_DEFINITION:j.ARGUMENT_DEFINITION}default:Zn(!1,"Unexpected kind: "+M(n.kind))}}function YD(i){switch(i){case Gn.QUERY:return j.QUERY;case Gn.MUTATION:return j.MUTATION;case Gn.SUBSCRIPTION:return j.SUBSCRIPTION}}function jD(i){return{FragmentSpread(n){const t=n.name.value;i.getFragment(t)||i.reportError(new L(`Unknown fragment "${t}".`,{nodes:n.name}))}}}function Ih(i){const n=i.getSchema(),t=n?n.getTypeMap():Object.create(null),s=Object.create(null);for(const o of i.getDocument().definitions)Sr(o)&&(s[o.name.value]=!0);const a=[...Object.keys(t),...Object.keys(s)];return{NamedType(o,u,f,h,m){const y=o.name.value;if(!t[y]&&!s[y]){var b;const O=(b=m[2])!==null&&b!==void 0?b:f,S=O!=null&&HD(O);if(S&&pf.includes(y))return;const k=yi(y,S?pf.concat(a):a);i.reportError(new L(`Unknown type "${y}".`+Qt(k),{nodes:o}))}}}}const pf=[...Ys,...Hs].map(i=>i.name);function HD(i){return"kind"in i&&(PD(i)||BD(i))}function zD(i){let n=0;return{Document(t){n=t.definitions.filter(s=>s.kind===w.OPERATION_DEFINITION).length},OperationDefinition(t){!t.name&&n>1&&i.reportError(new L("This anonymous operation must be the only defined operation.",{nodes:t}))}}}function QD(i){var n,t,s;const a=i.getSchema(),o=(n=(t=(s=a==null?void 0:a.astNode)!==null&&s!==void 0?s:a==null?void 0:a.getQueryType())!==null&&t!==void 0?t:a==null?void 0:a.getMutationType())!==null&&n!==void 0?n:a==null?void 0:a.getSubscriptionType();let u=0;return{SchemaDefinition(f){if(o){i.reportError(new L("Cannot define a new schema within a schema extension.",{nodes:f}));return}u>0&&i.reportError(new L("Must provide only one schema definition.",{nodes:f})),++u}}}const JD=3;function KD(i){function n(t,s=Object.create(null),a=0){if(t.kind===w.FRAGMENT_SPREAD){const o=t.name.value;if(s[o]===!0)return!1;const u=i.getFragment(o);if(!u)return!1;try{return s[o]=!0,n(u,s,a)}finally{s[o]=void 0}}if(t.kind===w.FIELD&&(t.name.value==="fields"||t.name.value==="interfaces"||t.name.value==="possibleTypes"||t.name.value==="inputFields")&&(a++,a>=JD))return!0;if("selectionSet"in t&&t.selectionSet){for(const o of t.selectionSet.selections)if(n(o,s,a))return!0}return!1}return{Field(t){if((t.name.value==="__schema"||t.name.value==="__type")&&n(t))return i.reportError(new L("Maximum introspection depth exceeded",{nodes:[t]})),!1}}}function XD(i){const n=Object.create(null),t=[],s=Object.create(null);return{OperationDefinition:()=>!1,FragmentDefinition(o){return a(o),!1}};function a(o){if(n[o.name.value])return;const u=o.name.value;n[u]=!0;const f=i.getFragmentSpreads(o.selectionSet);if(f.length!==0){s[u]=t.length;for(const h of f){const m=h.name.value,y=s[m];if(t.push(h),y===void 0){const b=i.getFragment(m);b&&a(b)}else{const b=t.slice(y),O=b.slice(0,-1).map(S=>'"'+S.name.value+'"').join(", ");i.reportError(new L(`Cannot spread fragment "${m}" within itself`+(O!==""?` via ${O}.`:"."),{nodes:b}))}t.pop()}s[u]=void 0}}}function ZD(i){let n=Object.create(null);return{OperationDefinition:{enter(){n=Object.create(null)},leave(t){const s=i.getRecursiveVariableUsages(t);for(const{node:a}of s){const o=a.name.value;n[o]!==!0&&i.reportError(new L(t.name?`Variable "$${o}" is not defined by operation "${t.name.value}".`:`Variable "$${o}" is not defined.`,{nodes:[a,t]}))}}},VariableDefinition(t){n[t.variable.name.value]=!0}}}function eE(i){const n=[],t=[];return{OperationDefinition(s){return n.push(s),!1},FragmentDefinition(s){return t.push(s),!1},Document:{leave(){const s=Object.create(null);for(const a of n)for(const o of i.getRecursivelyReferencedFragments(a))s[o.name.value]=!0;for(const a of t){const o=a.name.value;s[o]!==!0&&i.reportError(new L(`Fragment "${o}" is never used.`,{nodes:a}))}}}}}function nE(i){let n=[];return{OperationDefinition:{enter(){n=[]},leave(t){const s=Object.create(null),a=i.getRecursiveVariableUsages(t);for(const{node:o}of a)s[o.name.value]=!0;for(const o of n){const u=o.variable.name.value;s[u]!==!0&&i.reportError(new L(t.name?`Variable "$${u}" is never used in operation "${t.name.value}".`:`Variable "$${u}" is never used.`,{nodes:o}))}}},VariableDefinition(t){n.push(t)}}}function el(i){switch(i.kind){case w.OBJECT:return{...i,fields:tE(i.fields)};case w.LIST:return{...i,values:i.values.map(el)};case w.INT:case w.FLOAT:case w.STRING:case w.BOOLEAN:case w.NULL:case w.ENUM:case w.VARIABLE:return i}}function tE(i){return i.map(n=>({...n,value:el(n.value)})).sort((n,t)=>zo(n.name.value,t.name.value))}function Ah(i){return Array.isArray(i)?i.map(([n,t])=>`subfields "${n}" conflict because `+Ah(t)).join(" and "):i}function iE(i){const n=new uE,t=new Map;return{SelectionSet(s){const a=rE(i,t,n,i.getParentType(),s);for(const[[o,u],f,h]of a){const m=Ah(u);i.reportError(new L(`Fields "${o}" conflict because ${m}. Use different aliases on the fields to fetch both if this was intentional.`,{nodes:f.concat(h)}))}}}}function rE(i,n,t,s,a){const o=[],[u,f]=Bs(i,n,s,a);if(aE(i,o,n,t,u),f.length!==0)for(let h=0;h<f.length;h++){Ls(i,o,n,t,!1,u,f[h]);for(let m=h+1;m<f.length;m++)Ps(i,o,n,t,!1,f[h],f[m])}return o}function Ls(i,n,t,s,a,o,u){const f=i.getFragment(u);if(!f)return;const[h,m]=Co(i,t,f);if(o!==h){nl(i,n,t,s,a,o,h);for(const y of m)s.has(y,u,a)||(s.add(y,u,a),Ls(i,n,t,s,a,o,y))}}function Ps(i,n,t,s,a,o,u){if(o===u||s.has(o,u,a))return;s.add(o,u,a);const f=i.getFragment(o),h=i.getFragment(u);if(!f||!h)return;const[m,y]=Co(i,t,f),[b,O]=Co(i,t,h);nl(i,n,t,s,a,m,b);for(const S of O)Ps(i,n,t,s,a,o,S);for(const S of y)Ps(i,n,t,s,a,S,u)}function sE(i,n,t,s,a,o,u,f){const h=[],[m,y]=Bs(i,n,a,o),[b,O]=Bs(i,n,u,f);nl(i,h,n,t,s,m,b);for(const S of O)Ls(i,h,n,t,s,m,S);for(const S of y)Ls(i,h,n,t,s,b,S);for(const S of y)for(const k of O)Ps(i,h,n,t,s,S,k);return h}function aE(i,n,t,s,a){for(const[o,u]of Object.entries(a))if(u.length>1)for(let f=0;f<u.length;f++)for(let h=f+1;h<u.length;h++){const m=_h(i,t,s,!1,o,u[f],u[h]);m&&n.push(m)}}function nl(i,n,t,s,a,o,u){for(const[f,h]of Object.entries(o)){const m=u[f];if(m)for(const y of h)for(const b of m){const O=_h(i,t,s,a,f,y,b);O&&n.push(O)}}}function _h(i,n,t,s,a,o,u){const[f,h,m]=o,[y,b,O]=u,S=s||f!==y&&Ye(f)&&Ye(y);if(!S){const _e=h.name.value,ye=b.name.value;if(_e!==ye)return[[a,`"${_e}" and "${ye}" are different fields`],[h],[b]];if(!oE(h,b))return[[a,"they have differing arguments"],[h],[b]]}const k=m==null?void 0:m.type,P=O==null?void 0:O.type;if(k&&P&&No(k,P))return[[a,`they return conflicting types "${M(k)}" and "${M(P)}"`],[h],[b]];const Y=h.selectionSet,ce=b.selectionSet;if(Y&&ce){const _e=sE(i,n,t,S,pi(k),Y,pi(P),ce);return lE(_e,a,h,b)}}function oE(i,n){const t=i.arguments,s=n.arguments;if(t===void 0||t.length===0)return s===void 0||s.length===0;if(s===void 0||s.length===0||t.length!==s.length)return!1;const a=new Map(s.map(({name:o,value:u})=>[o.value,u]));return t.every(o=>{const u=o.value,f=a.get(o.name.value);return f===void 0?!1:gf(u)===gf(f)})}function gf(i){return Xe(el(i))}function No(i,n){return bn(i)?bn(n)?No(i.ofType,n.ofType):!0:bn(n)?!0:Ae(i)?Ae(n)?No(i.ofType,n.ofType):!0:Ae(n)?!0:Pi(i)||Pi(n)?i!==n:!1}function Bs(i,n,t,s){const a=n.get(s);if(a)return a;const o=Object.create(null),u=Object.create(null);Sh(i,t,s,o,u);const f=[o,Object.keys(u)];return n.set(s,f),f}function Co(i,n,t){const s=n.get(t.selectionSet);if(s)return s;const a=dt(i.getSchema(),t.typeCondition);return Bs(i,n,a,t.selectionSet)}function Sh(i,n,t,s,a){for(const o of t.selections)switch(o.kind){case w.FIELD:{const u=o.name.value;let f;(Ye(n)||Ve(n))&&(f=n.getFields()[u]);const h=o.alias?o.alias.value:u;s[h]||(s[h]=[]),s[h].push([n,o,f]);break}case w.FRAGMENT_SPREAD:a[o.name.value]=!0;break;case w.INLINE_FRAGMENT:{const u=o.typeCondition,f=u?dt(i.getSchema(),u):n;Sh(i,f,o.selectionSet,s,a);break}}}function lE(i,n,t,s){if(i.length>0)return[[n,i.map(([a])=>a)],[t,...i.map(([,a])=>a).flat()],[s,...i.map(([,,a])=>a).flat()]]}class uE{constructor(){this._data=new Map}has(n,t,s){var a;const[o,u]=n<t?[n,t]:[t,n],f=(a=this._data.get(o))===null||a===void 0?void 0:a.get(u);return f===void 0?!1:s?!0:s===f}add(n,t,s){const[a,o]=n<t?[n,t]:[t,n],u=this._data.get(a);u===void 0?this._data.set(a,new Map([[o,s]])):u.set(o,s)}}function cE(i){return{InlineFragment(n){const t=i.getType(),s=i.getParentType();if(wr(t)&&wr(s)&&!hf(i.getSchema(),t,s)){const a=M(s),o=M(t);i.reportError(new L(`Fragment cannot be spread here as objects of type "${a}" can never be of type "${o}".`,{nodes:n}))}},FragmentSpread(n){const t=n.name.value,s=fE(i,t),a=i.getParentType();if(s&&a&&!hf(i.getSchema(),s,a)){const o=M(a),u=M(s);i.reportError(new L(`Fragment "${t}" cannot be spread here as objects of type "${o}" can never be of type "${u}".`,{nodes:n}))}}}}function fE(i,n){const t=i.getFragment(n);if(t){const s=dt(i.getSchema(),t.typeCondition);if(wr(s))return s}}function hE(i){const n=i.getSchema(),t=Object.create(null);for(const a of i.getDocument().definitions)Sr(a)&&(t[a.name.value]=a);return{ScalarTypeExtension:s,ObjectTypeExtension:s,InterfaceTypeExtension:s,UnionTypeExtension:s,EnumTypeExtension:s,InputObjectTypeExtension:s};function s(a){const o=a.name.value,u=t[o],f=n==null?void 0:n.getType(o);let h;if(u?h=dE[u.kind]:f&&(h=pE(f)),h){if(h!==a.kind){const m=gE(a.kind);i.reportError(new L(`Cannot extend non-${m} type "${o}".`,{nodes:u?[u,a]:a}))}}else{const m=Object.keys({...t,...n==null?void 0:n.getTypeMap()}),y=yi(o,m);i.reportError(new L(`Cannot extend type "${o}" because it is not defined.`+Qt(y),{nodes:a.name}))}}}const dE={[w.SCALAR_TYPE_DEFINITION]:w.SCALAR_TYPE_EXTENSION,[w.OBJECT_TYPE_DEFINITION]:w.OBJECT_TYPE_EXTENSION,[w.INTERFACE_TYPE_DEFINITION]:w.INTERFACE_TYPE_EXTENSION,[w.UNION_TYPE_DEFINITION]:w.UNION_TYPE_EXTENSION,[w.ENUM_TYPE_DEFINITION]:w.ENUM_TYPE_EXTENSION,[w.INPUT_OBJECT_TYPE_DEFINITION]:w.INPUT_OBJECT_TYPE_EXTENSION};function pE(i){if(Jt(i))return w.SCALAR_TYPE_EXTENSION;if(Ye(i))return w.OBJECT_TYPE_EXTENSION;if(Ve(i))return w.INTERFACE_TYPE_EXTENSION;if(Vn(i))return w.UNION_TYPE_EXTENSION;if(et(i))return w.ENUM_TYPE_EXTENSION;if(vn(i))return w.INPUT_OBJECT_TYPE_EXTENSION;Zn(!1,"Unexpected type: "+M(i))}function gE(i){switch(i){case w.SCALAR_TYPE_EXTENSION:return"scalar";case w.OBJECT_TYPE_EXTENSION:return"object";case w.INTERFACE_TYPE_EXTENSION:return"interface";case w.UNION_TYPE_EXTENSION:return"union";case w.ENUM_TYPE_EXTENSION:return"enum";case w.INPUT_OBJECT_TYPE_EXTENSION:return"input object";default:Zn(!1,"Unexpected kind: "+M(i))}}function mE(i){return{...kh(i),Field:{leave(n){var t;const s=i.getFieldDef();if(!s)return!1;const a=new Set((t=n.arguments)===null||t===void 0?void 0:t.map(o=>o.name.value));for(const o of s.args)if(!a.has(o.name)&&uh(o)){const u=M(o.type);i.reportError(new L(`Field "${s.name}" argument "${o.name}" of type "${u}" is required, but it was not provided.`,{nodes:n}))}}}}}function kh(i){var n;const t=Object.create(null),s=i.getSchema(),a=(n=s==null?void 0:s.getDirectives())!==null&&n!==void 0?n:Mi;for(const f of a)t[f.name]=di(f.args.filter(uh),h=>h.name);const o=i.getDocument().definitions;for(const f of o)if(f.kind===w.DIRECTIVE_DEFINITION){var u;const h=(u=f.arguments)!==null&&u!==void 0?u:[];t[f.name.value]=di(h.filter(yE),m=>m.name.value)}return{Directive:{leave(f){const h=f.name.value,m=t[h];if(m){var y;const b=(y=f.arguments)!==null&&y!==void 0?y:[],O=new Set(b.map(S=>S.name.value));for(const[S,k]of Object.entries(m))if(!O.has(S)){const P=Qo(k.type)?M(k.type):Xe(k.type);i.reportError(new L(`Directive "@${h}" argument "${S}" of type "${P}" is required, but it was not provided.`,{nodes:f}))}}}}}}function yE(i){return i.type.kind===w.NON_NULL_TYPE&&i.defaultValue==null}function vE(i){return{Field(n){const t=i.getType(),s=n.selectionSet;if(t){if(Pi(pi(t))){if(s){const a=n.name.value,o=M(t);i.reportError(new L(`Field "${a}" must not have a selection since type "${o}" has no subfields.`,{nodes:s}))}}else if(!s){const a=n.name.value,o=M(t);i.reportError(new L(`Field "${a}" of type "${o}" must have a selection of subfields. Did you mean "${a} { ... }"?`,{nodes:n}))}}}}}function Yt(i,n,t){if(i){if(i.kind===w.VARIABLE){const s=i.name.value;if(t==null||t[s]===void 0)return;const a=t[s];return a===null&&Ae(n)?void 0:a}if(Ae(n))return i.kind===w.NULL?void 0:Yt(i,n.ofType,t);if(i.kind===w.NULL)return null;if(bn(n)){const s=n.ofType;if(i.kind===w.LIST){const o=[];for(const u of i.values)if(mf(u,t)){if(Ae(s))return;o.push(null)}else{const f=Yt(u,s,t);if(f===void 0)return;o.push(f)}return o}const a=Yt(i,s,t);return a===void 0?void 0:[a]}if(vn(n)){if(i.kind!==w.OBJECT)return;const s=Object.create(null),a=di(i.fields,o=>o.name.value);for(const o of Object.values(n.getFields())){const u=a[o.name];if(!u||mf(u.value,t)){if(o.defaultValue!==void 0)s[o.name]=o.defaultValue;else if(Ae(o.type))return;continue}const f=Yt(u.value,o.type,t);if(f===void 0)return;s[o.name]=f}if(n.isOneOf){const o=Object.keys(s);if(o.length!==1||s[o[0]]===null)return}return s}if(Pi(n)){let s;try{s=n.parseLiteral(i,t)}catch{return}return s===void 0?void 0:s}Zn(!1,"Unexpected input type: "+M(n))}}function mf(i,n){return i.kind===w.VARIABLE&&(n==null||n[i.name.value]===void 0)}function bE(i,n,t){var s;const a={},o=(s=n.arguments)!==null&&s!==void 0?s:[],u=di(o,f=>f.name.value);for(const f of i.args){const h=f.name,m=f.type,y=u[h];if(!y){if(f.defaultValue!==void 0)a[h]=f.defaultValue;else if(Ae(m))throw new L(`Argument "${h}" of required type "${M(m)}" was not provided.`,{nodes:n});continue}const b=y.value;let O=b.kind===w.NULL;if(b.kind===w.VARIABLE){const k=b.name.value;if(t==null||!TE(t,k)){if(f.defaultValue!==void 0)a[h]=f.defaultValue;else if(Ae(m))throw new L(`Argument "${h}" of required type "${M(m)}" was provided the variable "$${k}" which was not provided a runtime value.`,{nodes:b});continue}O=t[k]==null}if(O&&Ae(m))throw new L(`Argument "${h}" of non-null type "${M(m)}" must not be null.`,{nodes:b});const S=Yt(b,m,t);if(S===void 0)throw new L(`Argument "${h}" has invalid value ${Xe(b)}.`,{nodes:b});a[h]=S}return a}function Dr(i,n,t){var s;const a=(s=n.directives)===null||s===void 0?void 0:s.find(o=>o.name.value===i.name);if(a)return bE(i,a,t)}function TE(i,n){return Object.prototype.hasOwnProperty.call(i,n)}function wE(i,n,t,s,a){const o=new Map;return Oo(i,n,t,s,a,o,new Set),o}function Oo(i,n,t,s,a,o,u){for(const f of a.selections)switch(f.kind){case w.FIELD:{if(!Do(t,f))continue;const h=DE(f),m=o.get(h);m!==void 0?m.push(f):o.set(h,[f]);break}case w.INLINE_FRAGMENT:{if(!Do(t,f)||!yf(i,f,s))continue;Oo(i,n,t,s,f.selectionSet,o,u);break}case w.FRAGMENT_SPREAD:{const h=f.name.value;if(u.has(h)||!Do(t,f))continue;u.add(h);const m=n[h];if(!m||!yf(i,m,s))continue;Oo(i,n,t,s,m.selectionSet,o,u);break}}}function Do(i,n){const t=Dr(hh,n,i);if((t==null?void 0:t.if)===!0)return!1;const s=Dr(fh,n,i);return(s==null?void 0:s.if)!==!1}function yf(i,n,t){const s=n.typeCondition;if(!s)return!0;const a=dt(i,s);return a===t?!0:ci(a)?i.isSubType(a,t):!1}function DE(i){return i.alias?i.alias.value:i.name.value}function EE(i){return{OperationDefinition(n){if(n.operation==="subscription"){const t=i.getSchema(),s=t.getSubscriptionType();if(s){const a=n.name?n.name.value:null,o=Object.create(null),u=i.getDocument(),f=Object.create(null);for(const m of u.definitions)m.kind===w.FRAGMENT_DEFINITION&&(f[m.name.value]=m);const h=wE(t,f,o,s,n.selectionSet);if(h.size>1){const b=[...h.values()].slice(1).flat();i.reportError(new L(a!=null?`Subscription "${a}" must select only one top level field.`:"Anonymous Subscription must select only one top level field.",{nodes:b}))}for(const m of h.values())m[0].name.value.startsWith("__")&&i.reportError(new L(a!=null?`Subscription "${a}" must not select an introspection top level field.`:"Anonymous Subscription must not select an introspection top level field.",{nodes:m}))}}}}}function tl(i,n){const t=new Map;for(const s of i){const a=n(s),o=t.get(a);o===void 0?t.set(a,[s]):o.push(s)}return t}function IE(i){return{DirectiveDefinition(s){var a;const o=(a=s.arguments)!==null&&a!==void 0?a:[];return t(`@${s.name.value}`,o)},InterfaceTypeDefinition:n,InterfaceTypeExtension:n,ObjectTypeDefinition:n,ObjectTypeExtension:n};function n(s){var a;const o=s.name.value,u=(a=s.fields)!==null&&a!==void 0?a:[];for(const h of u){var f;const m=h.name.value,y=(f=h.arguments)!==null&&f!==void 0?f:[];t(`${o}.${m}`,y)}return!1}function t(s,a){const o=tl(a,u=>u.name.value);for(const[u,f]of o)f.length>1&&i.reportError(new L(`Argument "${s}(${u}:)" can only be defined once.`,{nodes:f.map(h=>h.name)}));return!1}}function Fh(i){return{Field:n,Directive:n};function n(t){var s;const a=(s=t.arguments)!==null&&s!==void 0?s:[],o=tl(a,u=>u.name.value);for(const[u,f]of o)f.length>1&&i.reportError(new L(`There can be only one argument named "${u}".`,{nodes:f.map(h=>h.name)}))}}function AE(i){const n=Object.create(null),t=i.getSchema();return{DirectiveDefinition(s){const a=s.name.value;if(t!=null&&t.getDirective(a)){i.reportError(new L(`Directive "@${a}" already exists in the schema. It cannot be redefined.`,{nodes:s.name}));return}return n[a]?i.reportError(new L(`There can be only one directive named "@${a}".`,{nodes:[n[a],s.name]})):n[a]=s.name,!1}}}function Nh(i){const n=Object.create(null),t=i.getSchema(),s=t?t.getDirectives():Mi;for(const f of s)n[f.name]=!f.isRepeatable;const a=i.getDocument().definitions;for(const f of a)f.kind===w.DIRECTIVE_DEFINITION&&(n[f.name.value]=!f.repeatable);const o=Object.create(null),u=Object.create(null);return{enter(f){if(!("directives"in f)||!f.directives)return;let h;if(f.kind===w.SCHEMA_DEFINITION||f.kind===w.SCHEMA_EXTENSION)h=o;else if(Sr(f)||Zo(f)){const m=f.name.value;h=u[m],h===void 0&&(u[m]=h=Object.create(null))}else h=Object.create(null);for(const m of f.directives){const y=m.name.value;n[y]&&(h[y]?i.reportError(new L(`The directive "@${y}" can only be used once at this location.`,{nodes:[h[y],m]})):h[y]=m)}}}}function _E(i){const n=i.getSchema(),t=n?n.getTypeMap():Object.create(null),s=Object.create(null);return{EnumTypeDefinition:a,EnumTypeExtension:a};function a(o){var u;const f=o.name.value;s[f]||(s[f]=Object.create(null));const h=(u=o.values)!==null&&u!==void 0?u:[],m=s[f];for(const y of h){const b=y.name.value,O=t[f];et(O)&&O.getValue(b)?i.reportError(new L(`Enum value "${f}.${b}" already exists in the schema. It cannot also be defined in this type extension.`,{nodes:y.name})):m[b]?i.reportError(new L(`Enum value "${f}.${b}" can only be defined once.`,{nodes:[m[b],y.name]})):m[b]=y.name}return!1}}function SE(i){const n=i.getSchema(),t=n?n.getTypeMap():Object.create(null),s=Object.create(null);return{InputObjectTypeDefinition:a,InputObjectTypeExtension:a,InterfaceTypeDefinition:a,InterfaceTypeExtension:a,ObjectTypeDefinition:a,ObjectTypeExtension:a};function a(o){var u;const f=o.name.value;s[f]||(s[f]=Object.create(null));const h=(u=o.fields)!==null&&u!==void 0?u:[],m=s[f];for(const y of h){const b=y.name.value;kE(t[f],b)?i.reportError(new L(`Field "${f}.${b}" already exists in the schema. It cannot also be defined in this type extension.`,{nodes:y.name})):m[b]?i.reportError(new L(`Field "${f}.${b}" can only be defined once.`,{nodes:[m[b],y.name]})):m[b]=y.name}return!1}}function kE(i,n){return Ye(i)||Ve(i)||vn(i)?i.getFields()[n]!=null:!1}function FE(i){const n=Object.create(null);return{OperationDefinition:()=>!1,FragmentDefinition(t){const s=t.name.value;return n[s]?i.reportError(new L(`There can be only one fragment named "${s}".`,{nodes:[n[s],t.name]})):n[s]=t.name,!1}}}function Ch(i){const n=[];let t=Object.create(null);return{ObjectValue:{enter(){n.push(t),t=Object.create(null)},leave(){const s=n.pop();s||Zn(!1),t=s}},ObjectField(s){const a=s.name.value;t[a]?i.reportError(new L(`There can be only one input field named "${a}".`,{nodes:[t[a],s.name]})):t[a]=s.name}}}function NE(i){const n=Object.create(null);return{OperationDefinition(t){const s=t.name;return s&&(n[s.value]?i.reportError(new L(`There can be only one operation named "${s.value}".`,{nodes:[n[s.value],s]})):n[s.value]=s),!1},FragmentDefinition:()=>!1}}function CE(i){const n=i.getSchema(),t=Object.create(null),s=n?{query:n.getQueryType(),mutation:n.getMutationType(),subscription:n.getSubscriptionType()}:{};return{SchemaDefinition:a,SchemaExtension:a};function a(o){var u;const f=(u=o.operationTypes)!==null&&u!==void 0?u:[];for(const h of f){const m=h.operation,y=t[m];s[m]?i.reportError(new L(`Type for ${m} already defined in the schema. It cannot be redefined.`,{nodes:h})):y?i.reportError(new L(`There can be only one ${m} type in schema.`,{nodes:[y,h]})):t[m]=h}return!1}}function OE(i){const n=Object.create(null),t=i.getSchema();return{ScalarTypeDefinition:s,ObjectTypeDefinition:s,InterfaceTypeDefinition:s,UnionTypeDefinition:s,EnumTypeDefinition:s,InputObjectTypeDefinition:s};function s(a){const o=a.name.value;if(t!=null&&t.getType(o)){i.reportError(new L(`Type "${o}" already exists in the schema. It cannot also be defined in this type definition.`,{nodes:a.name}));return}return n[o]?i.reportError(new L(`There can be only one type named "${o}".`,{nodes:[n[o],a.name]})):n[o]=a.name,!1}}function RE(i){return{OperationDefinition(n){var t;const s=(t=n.variableDefinitions)!==null&&t!==void 0?t:[],a=tl(s,o=>o.variable.name.value);for(const[o,u]of a)u.length>1&&i.reportError(new L(`There can be only one variable named "$${o}".`,{nodes:u.map(f=>f.variable.name)}))}}}function xE(i){let n={};return{OperationDefinition:{enter(){n={}}},VariableDefinition(t){n[t.variable.name.value]=t},ListValue(t){const s=ID(i.getParentInputType());if(!bn(s))return li(i,t),!1},ObjectValue(t){const s=pi(i.getInputType());if(!vn(s))return li(i,t),!1;const a=di(t.fields,o=>o.name.value);for(const o of Object.values(s.getFields()))if(!a[o.name]&&SD(o)){const f=M(o.type);i.reportError(new L(`Field "${s.name}.${o.name}" of required type "${f}" was not provided.`,{nodes:t}))}s.isOneOf&&LE(i,t,s,a,n)},ObjectField(t){const s=pi(i.getParentInputType());if(!i.getInputType()&&vn(s)){const o=yi(t.name.value,Object.keys(s.getFields()));i.reportError(new L(`Field "${t.name.value}" is not defined by type "${s.name}".`+Qt(o),{nodes:t}))}},NullValue(t){const s=i.getInputType();Ae(s)&&i.reportError(new L(`Expected value of type "${M(s)}", found ${Xe(t)}.`,{nodes:t}))},EnumValue:t=>li(i,t),IntValue:t=>li(i,t),FloatValue:t=>li(i,t),StringValue:t=>li(i,t),BooleanValue:t=>li(i,t)}}function li(i,n){const t=i.getInputType();if(!t)return;const s=pi(t);if(!Pi(s)){const a=M(t);i.reportError(new L(`Expected value of type "${a}", found ${Xe(n)}.`,{nodes:n}));return}try{if(s.parseLiteral(n,void 0)===void 0){const o=M(t);i.reportError(new L(`Expected value of type "${o}", found ${Xe(n)}.`,{nodes:n}))}}catch(a){const o=M(t);a instanceof L?i.reportError(a):i.reportError(new L(`Expected value of type "${o}", found ${Xe(n)}; `+a.message,{nodes:n,originalError:a}))}}function LE(i,n,t,s,a){var o;const u=Object.keys(s);if(u.length!==1){i.reportError(new L(`OneOf Input Object "${t.name}" must specify exactly one key.`,{nodes:[n]}));return}const h=(o=s[u[0]])===null||o===void 0?void 0:o.value,m=!h||h.kind===w.NULL,y=(h==null?void 0:h.kind)===w.VARIABLE;if(m){i.reportError(new L(`Field "${t.name}.${u[0]}" must be non-null.`,{nodes:[n]}));return}if(y){const b=h.name.value;a[b].type.kind!==w.NON_NULL_TYPE&&i.reportError(new L(`Variable "${b}" must be non-nullable to be used for OneOf Input Object "${t.name}".`,{nodes:[n]}))}}function PE(i){return{VariableDefinition(n){const t=dt(i.getSchema(),n.type);if(t!==void 0&&!Jo(t)){const s=n.variable.name.value,a=Xe(n.type);i.reportError(new L(`Variable "$${s}" cannot be non-input type "${a}".`,{nodes:n.type}))}}}}function BE(i){let n=Object.create(null);return{OperationDefinition:{enter(){n=Object.create(null)},leave(t){const s=i.getRecursiveVariableUsages(t);for(const{node:a,type:o,defaultValue:u}of s){const f=a.name.value,h=n[f];if(h&&o){const m=i.getSchema(),y=dt(m,h.type);if(y&&!UE(m,y,h.defaultValue,o,u)){const b=M(y),O=M(o);i.reportError(new L(`Variable "$${f}" of type "${b}" used in position expecting type "${O}".`,{nodes:[h,a]}))}}}}},VariableDefinition(t){n[t.variable.name.value]=t}}}function UE(i,n,t,s,a){if(Ae(s)&&!Ae(n)){if(!(t!=null&&t.kind!==w.NULL)&&!(a!==void 0))return!1;const f=s.ofType;return mr(i,n,f)}return mr(i,n,s)}const ME=Object.freeze([KD]);Object.freeze([UD,NE,zD,EE,Ih,VD,PE,vE,MD,FE,jD,eE,cE,XD,RE,ZD,nE,Eh,Nh,WD,Fh,xE,mE,BE,iE,Ch,...ME]);const $E=Object.freeze([QD,CE,OE,_E,SE,IE,AE,Ih,Eh,Nh,hE,Dh,Fh,Ch,kh]);class GE{constructor(n,t){this._ast=n,this._fragments=void 0,this._fragmentSpreads=new Map,this._recursivelyReferencedFragments=new Map,this._onError=t}get[Symbol.toStringTag](){return"ASTValidationContext"}reportError(n){this._onError(n)}getDocument(){return this._ast}getFragment(n){let t;if(this._fragments)t=this._fragments;else{t=Object.create(null);for(const s of this.getDocument().definitions)s.kind===w.FRAGMENT_DEFINITION&&(t[s.name.value]=s);this._fragments=t}return t[n]}getFragmentSpreads(n){let t=this._fragmentSpreads.get(n);if(!t){t=[];const s=[n];let a;for(;a=s.pop();)for(const o of a.selections)o.kind===w.FRAGMENT_SPREAD?t.push(o):o.selectionSet&&s.push(o.selectionSet);this._fragmentSpreads.set(n,t)}return t}getRecursivelyReferencedFragments(n){let t=this._recursivelyReferencedFragments.get(n);if(!t){t=[];const s=Object.create(null),a=[n.selectionSet];let o;for(;o=a.pop();)for(const u of this.getFragmentSpreads(o)){const f=u.name.value;if(s[f]!==!0){s[f]=!0;const h=this.getFragment(f);h&&(t.push(h),a.push(h.selectionSet))}}this._recursivelyReferencedFragments.set(n,t)}return t}}class VE extends GE{constructor(n,t,s){super(n,s),this._schema=t}get[Symbol.toStringTag](){return"SDLValidationContext"}getSchema(){return this._schema}}function WE(i,n,t=$E){const s=[],a=new VE(i,n,u=>{s.push(u)}),o=t.map(u=>u(a));return Xf(i,yD(o)),s}function qE(i){const n=WE(i);if(n.length!==0)throw new Error(n.map(t=>t.message).join(`

`))}function YE(i,n){Ct(i)&&Ct(i.__schema)||fe(!1,`Invalid or incomplete introspection result. Ensure that you are passing "data" property of introspection response and no "errors" was returned alongside: ${M(i)}.`);const t=i.__schema,s=ui(t.types,R=>R.name,R=>O(R));for(const R of[...Ys,...Hs])s[R.name]&&(s[R.name]=R);const a=t.queryType?y(t.queryType):null,o=t.mutationType?y(t.mutationType):null,u=t.subscriptionType?y(t.subscriptionType):null,f=t.directives?t.directives.map(gt):[];return new wh({description:t.description,query:a,mutation:o,subscription:u,types:Object.values(s),directives:f,assumeValid:void 0});function h(R){if(R.kind===Ee.LIST){const K=R.ofType;if(!K)throw new Error("Decorated type deeper than introspection query.");return new fn(h(K))}if(R.kind===Ee.NON_NULL){const K=R.ofType;if(!K)throw new Error("Decorated type deeper than introspection query.");const on=h(K);return new re(ED(on))}return m(R)}function m(R){const K=R.name;if(!K)throw new Error(`Unknown type reference: ${M(R)}.`);const on=s[K];if(!on)throw new Error(`Invalid or incomplete schema, unknown type: ${K}. Ensure that a full introspection query is used in order to build a client schema.`);return on}function y(R){return wD(m(R))}function b(R){return DD(m(R))}function O(R){if(R!=null&&R.name!=null&&R.kind!=null)switch(R.kind){case Ee.SCALAR:return S(R);case Ee.OBJECT:return P(R);case Ee.INTERFACE:return Y(R);case Ee.UNION:return ce(R);case Ee.ENUM:return _e(R);case Ee.INPUT_OBJECT:return ye(R)}const K=M(R);throw new Error(`Invalid or incomplete introspection result. Ensure that a full introspection query is used in order to build a client schema: ${K}.`)}function S(R){return new Ot({name:R.name,description:R.description,specifiedByURL:R.specifiedByURL})}function k(R){if(R.interfaces===null&&R.kind===Ee.INTERFACE)return[];if(!R.interfaces){const K=M(R);throw new Error(`Introspection result missing interfaces: ${K}.`)}return R.interfaces.map(b)}function P(R){return new ht({name:R.name,description:R.description,interfaces:()=>k(R),fields:()=>Re(R)})}function Y(R){return new Os({name:R.name,description:R.description,interfaces:()=>k(R),fields:()=>Re(R)})}function ce(R){if(!R.possibleTypes){const K=M(R);throw new Error(`Introspection result missing possibleTypes: ${K}.`)}return new Rs({name:R.name,description:R.description,types:()=>R.possibleTypes.map(y)})}function _e(R){if(!R.enumValues){const K=M(R);throw new Error(`Introspection result missing enumValues: ${K}.`)}return new Bi({name:R.name,description:R.description,values:ui(R.enumValues,K=>K.name,K=>({description:K.description,deprecationReason:K.deprecationReason}))})}function ye(R){if(!R.inputFields){const K=M(R);throw new Error(`Introspection result missing inputFields: ${K}.`)}return new xs({name:R.name,description:R.description,fields:()=>Qe(R.inputFields),isOneOf:R.isOneOf})}function Re(R){if(!R.fields)throw new Error(`Introspection result missing fields: ${M(R)}.`);return ui(R.fields,K=>K.name,je)}function je(R){const K=h(R.type);if(!eh(K)){const on=M(K);throw new Error(`Introspection must provide output type for fields, but received: ${on}.`)}if(!R.args){const on=M(R);throw new Error(`Introspection result missing field args: ${on}.`)}return{description:R.description,deprecationReason:R.deprecationReason,type:K,args:Qe(R.args)}}function Qe(R){return ui(R,K=>K.name,xe)}function xe(R){const K=h(R.type);if(!Jo(K)){const xt=M(K);throw new Error(`Introspection must provide input type for arguments, but received: ${xt}.`)}const on=R.defaultValue!=null?Yt(uD(R.defaultValue),K):void 0;return{description:R.description,type:K,defaultValue:on,deprecationReason:R.deprecationReason}}function gt(R){if(!R.args){const K=M(R);throw new Error(`Introspection result missing directive args: ${K}.`)}if(!R.locations){const K=M(R);throw new Error(`Introspection result missing directive locations: ${K}.`)}return new Rt({name:R.name,description:R.description,isRepeatable:R.isRepeatable,locations:R.locations.slice(),args:Qe(R.args)})}}function jE(i,n,t){var s,a,o,u;const f=[],h=Object.create(null),m=[];let y;const b=[];for(const A of n.definitions)if(A.kind===w.SCHEMA_DEFINITION)y=A;else if(A.kind===w.SCHEMA_EXTENSION)b.push(A);else if(Sr(A))f.push(A);else if(Zo(A)){const V=A.name.value,U=h[V];h[V]=U?U.concat([A]):[A]}else A.kind===w.DIRECTIVE_DEFINITION&&m.push(A);if(Object.keys(h).length===0&&f.length===0&&m.length===0&&b.length===0&&y==null)return i;const O=Object.create(null);for(const A of i.types)O[A.name]=_e(A);for(const A of f){var S;const V=A.name.value;O[V]=(S=vf[V])!==null&&S!==void 0?S:Nn(A)}const k={query:i.query&&Y(i.query),mutation:i.mutation&&Y(i.mutation),subscription:i.subscription&&Y(i.subscription),...y&&on([y]),...on(b)};return{description:(s=y)===null||s===void 0||(a=s.description)===null||a===void 0?void 0:a.value,...k,types:Object.values(O),directives:[...i.directives.map(ce),...m.map(kr)],extensions:Object.create(null),astNode:(o=y)!==null&&o!==void 0?o:i.astNode,extensionASTNodes:i.extensionASTNodes.concat(b),assumeValid:(u=t==null?void 0:t.assumeValid)!==null&&u!==void 0?u:!1};function P(A){return bn(A)?new fn(P(A.ofType)):Ae(A)?new re(P(A.ofType)):Y(A)}function Y(A){return O[A.name]}function ce(A){const V=A.toConfig();return new Rt({...V,args:_t(V.args,K)})}function _e(A){if(xD(A)||ND(A))return A;if(Jt(A))return je(A);if(Ye(A))return Qe(A);if(Ve(A))return xe(A);if(Vn(A))return gt(A);if(et(A))return Re(A);if(vn(A))return ye(A);Zn(!1,"Unexpected type: "+M(A))}function ye(A){var V;const U=A.toConfig(),$=(V=h[U.name])!==null&&V!==void 0?V:[];return new xs({...U,fields:()=>({..._t(U.fields,de=>({...de,type:P(de.type)})),...at($)}),extensionASTNodes:U.extensionASTNodes.concat($)})}function Re(A){var V;const U=A.toConfig(),$=(V=h[A.name])!==null&&V!==void 0?V:[];return new Bi({...U,values:{...U.values,...qn($)},extensionASTNodes:U.extensionASTNodes.concat($)})}function je(A){var V;const U=A.toConfig(),$=(V=h[U.name])!==null&&V!==void 0?V:[];let de=U.specifiedByURL;for(const pe of $){var Ue;de=(Ue=bf(pe))!==null&&Ue!==void 0?Ue:de}return new Ot({...U,specifiedByURL:de,extensionASTNodes:U.extensionASTNodes.concat($)})}function Qe(A){var V;const U=A.toConfig(),$=(V=h[U.name])!==null&&V!==void 0?V:[];return new ht({...U,interfaces:()=>[...A.getInterfaces().map(Y),...bi($)],fields:()=>({..._t(U.fields,R),...vi($)}),extensionASTNodes:U.extensionASTNodes.concat($)})}function xe(A){var V;const U=A.toConfig(),$=(V=h[U.name])!==null&&V!==void 0?V:[];return new Os({...U,interfaces:()=>[...A.getInterfaces().map(Y),...bi($)],fields:()=>({..._t(U.fields,R),...vi($)}),extensionASTNodes:U.extensionASTNodes.concat($)})}function gt(A){var V;const U=A.toConfig(),$=(V=h[U.name])!==null&&V!==void 0?V:[];return new Rs({...U,types:()=>[...A.getTypes().map(Y),...Xt($)],extensionASTNodes:U.extensionASTNodes.concat($)})}function R(A){return{...A,type:P(A.type),args:A.args&&_t(A.args,K)}}function K(A){return{...A,type:P(A.type)}}function on(A){const V={};for(const $ of A){var U;const de=(U=$.operationTypes)!==null&&U!==void 0?U:[];for(const Ue of de)V[Ue.operation]=xt(Ue.type)}return V}function xt(A){var V;const U=A.name.value,$=(V=vf[U])!==null&&V!==void 0?V:O[U];if($===void 0)throw new Error(`Unknown type: "${U}".`);return $}function Kt(A){return A.kind===w.LIST_TYPE?new fn(Kt(A.type)):A.kind===w.NON_NULL_TYPE?new re(Kt(A.type)):xt(A)}function kr(A){var V;return new Rt({name:A.name.value,description:(V=A.description)===null||V===void 0?void 0:V.value,locations:A.locations.map(({value:U})=>U),isRepeatable:A.repeatable,args:Fr(A.arguments),astNode:A})}function vi(A){const V=Object.create(null);for(const de of A){var U;const Ue=(U=de.fields)!==null&&U!==void 0?U:[];for(const pe of Ue){var $;V[pe.name.value]={type:Kt(pe.type),description:($=pe.description)===null||$===void 0?void 0:$.value,args:Fr(pe.arguments),deprecationReason:As(pe),astNode:pe}}}return V}function Fr(A){const V=A??[],U=Object.create(null);for(const de of V){var $;const Ue=Kt(de.type);U[de.name.value]={type:Ue,description:($=de.description)===null||$===void 0?void 0:$.value,defaultValue:Yt(de.defaultValue,Ue),deprecationReason:As(de),astNode:de}}return U}function at(A){const V=Object.create(null);for(const de of A){var U;const Ue=(U=de.fields)!==null&&U!==void 0?U:[];for(const pe of Ue){var $;const Cn=Kt(pe.type);V[pe.name.value]={type:Cn,description:($=pe.description)===null||$===void 0?void 0:$.value,defaultValue:Yt(pe.defaultValue,Cn),deprecationReason:As(pe),astNode:pe}}}return V}function qn(A){const V=Object.create(null);for(const de of A){var U;const Ue=(U=de.values)!==null&&U!==void 0?U:[];for(const pe of Ue){var $;V[pe.name.value]={description:($=pe.description)===null||$===void 0?void 0:$.value,deprecationReason:As(pe),astNode:pe}}}return V}function bi(A){return A.flatMap(V=>{var U,$;return(U=($=V.interfaces)===null||$===void 0?void 0:$.map(xt))!==null&&U!==void 0?U:[]})}function Xt(A){return A.flatMap(V=>{var U,$;return(U=($=V.types)===null||$===void 0?void 0:$.map(xt))!==null&&U!==void 0?U:[]})}function Nn(A){var V;const U=A.name.value,$=(V=h[U])!==null&&V!==void 0?V:[];switch(A.kind){case w.OBJECT_TYPE_DEFINITION:{var de;const tn=[A,...$];return new ht({name:U,description:(de=A.description)===null||de===void 0?void 0:de.value,interfaces:()=>bi(tn),fields:()=>vi(tn),astNode:A,extensionASTNodes:$})}case w.INTERFACE_TYPE_DEFINITION:{var Ue;const tn=[A,...$];return new Os({name:U,description:(Ue=A.description)===null||Ue===void 0?void 0:Ue.value,interfaces:()=>bi(tn),fields:()=>vi(tn),astNode:A,extensionASTNodes:$})}case w.ENUM_TYPE_DEFINITION:{var pe;const tn=[A,...$];return new Bi({name:U,description:(pe=A.description)===null||pe===void 0?void 0:pe.value,values:qn(tn),astNode:A,extensionASTNodes:$})}case w.UNION_TYPE_DEFINITION:{var Cn;const tn=[A,...$];return new Rs({name:U,description:(Cn=A.description)===null||Cn===void 0?void 0:Cn.value,types:()=>Xt(tn),astNode:A,extensionASTNodes:$})}case w.SCALAR_TYPE_DEFINITION:{var $i;return new Ot({name:U,description:($i=A.description)===null||$i===void 0?void 0:$i.value,specifiedByURL:bf(A),astNode:A,extensionASTNodes:$})}case w.INPUT_OBJECT_TYPE_DEFINITION:{var Lt;const tn=[A,...$];return new xs({name:U,description:(Lt=A.description)===null||Lt===void 0?void 0:Lt.value,fields:()=>at(tn),astNode:A,extensionASTNodes:$,isOneOf:HE(A)})}}}}const vf=di([...Ys,...Hs],i=>i.name);function As(i){const n=Dr(dh,i);return n==null?void 0:n.reason}function bf(i){const n=Dr(ph,i);return n==null?void 0:n.url}function HE(i){return!!Dr(gh,i)}function zE(i,n){i!=null&&i.kind===w.DOCUMENT||fe(!1,"Must provide valid Document AST."),(n==null?void 0:n.assumeValid)!==!0&&(n==null?void 0:n.assumeValidSDL)!==!0&&qE(i);const s=jE({description:void 0,types:[],directives:[],extensions:Object.create(null),extensionASTNodes:[],assumeValid:!1},i,n);if(s.astNode==null)for(const o of s.types)switch(o.name){case"Query":s.query=o;break;case"Mutation":s.mutation=o;break;case"Subscription":s.subscription=o;break}const a=[...s.directives,...Mi.filter(o=>s.directives.every(u=>u.name!==o.name))];return new wh({...s,directives:a})}function QE(i,n){const t=lD(i,{noLocation:void 0,allowLegacyFragmentVariables:void 0});return zE(t,{assumeValidSDL:void 0,assumeValid:void 0})}function JE(i){const n=new Map;return KE(i,t=>{Ye(t)&&XE(t,s=>{const a=Ro(s.type);Eo(n,a).references.push({kind:gr.FIELD,parent:t,by:s}),ZE(s,u=>{const f=Ro(u.type);Eo(n,f).references.push({kind:gr.ARGUMENT,field:s,type:t,by:u})})}),Vn(t)&&t.getTypes().forEach(s=>{Eo(n,s).references.push({kind:gr.UNION,by:t})})}),new x0(n)}function KE(i,n){Object.entries(i.getTypeMap()).forEach(([,t])=>{t.name.startsWith("__")||n(t)})}function XE(i,n){Object.entries(i.getFields()).forEach(([,t])=>{n(t)})}function ZE(i,n){Object.entries(i.args).forEach(([,t])=>{n(t)})}function Eo(i,n){let t=i.get(n.name);return t||(t={references:[]},i.set(n.name,t)),t}function Ro(i){return Ae(i)||bn(i)?Ro(i.ofType):i}const Tf=`
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


"Scheduled times for a trip on a service date for a stop location."
union CallScheduledTime = ArrivalDepartureTime | TimeWindow


"Location where a transit vehicle stops at."
union CallStopLocation = Location | LocationGroup | Stop


"Rental place union that represents either a VehicleRentalStation or a RentalVehicle"
union RentalPlace = RentalVehicle | VehicleRentalStation


"A feature for a step"
union StepFeature = Entrance


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
  agency: Agency @deprecated(reason: "Alert can have multiple affected entities now instead of there being duplicate alerts\\nfor different entities. This will return only one of the affected agencies.\\nUse entities instead.") @timingData
  "Alert cause"
  alertCause: AlertCauseType
  "Long description of the alert"
  alertDescriptionText(
    "Returns description with the specified language, if found, otherwise returns the value with some default language."
    language: String
  ): String!
  "Long descriptions of the alert in all different available languages"
  alertDescriptionTextTranslations: [TranslatedString!]! @deprecated(reason: "Use \`alertDescriptionText\` instead. \`accept-language\` header can be used for translations or the \`language\` parameter on the \`alertDescriptionText\` field.") @timingData
  "Alert effect"
  alertEffect: AlertEffectType
  "hashcode from the original GTFS-RT alert"
  alertHash: Int
  "Header of the alert, if available"
  alertHeaderText(
    "Returns header with the specified language, if found, otherwise returns the value with some default language."
    language: String
  ): String
  "Header of the alert in all different available languages"
  alertHeaderTextTranslations: [TranslatedString!]! @deprecated(reason: "Use \`alertHeaderText\` instead. \`accept-language\` header can be used for translations or the \`language\` parameter on the \`alertHeaderText\` field.") @timingData
  "Alert severity level"
  alertSeverityLevel: AlertSeverityLevelType
  "Url with more information"
  alertUrl(
    "Returns URL with the specified language, if found, otherwise returns the value with some default language."
    language: String
  ): String
  "Url with more information in all different available languages"
  alertUrlTranslations: [TranslatedString!]! @deprecated(reason: "Use \`alertUrl\` instead. \`accept-language\` header can be used for translations or the \`language\` parameter on the \`alertUrl\` field.") @timingData
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
  patterns: [Pattern] @deprecated(reason: "This will always return an empty list. Use entities instead.") @timingData
  "Route affected by the disruption"
  route: Route @deprecated(reason: "Alert can have multiple affected entities now instead of there being duplicate alerts\\nfor different entities. This will return only one of the affected routes.\\nUse entities instead.") @timingData
  "Stop affected by the disruption"
  stop: Stop @deprecated(reason: "Alert can have multiple affected entities now instead of there being duplicate alerts\\nfor different entities. This will return only one of the affected stops.\\nUse entities instead.") @timingData
  "Trip affected by the disruption"
  trip: Trip @deprecated(reason: "Alert can have multiple affected entities now instead of there being duplicate alerts\\nfor different entities. This will return only one of the affected trips.\\nUse entities instead.") @timingData
}


"Arrival and departure time (not relative to midnight)."
type ArrivalDepartureTime {
  "Arrival time as an ISO-8601-formatted datetime."
  arrival: OffsetDateTime
  "Departure time as an ISO-8601-formatted datetime."
  departure: OffsetDateTime
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
  state: String @deprecated(reason: "Use operative instead") @timingData
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
  "Maximum duration before travel to make the request."
  maximumBookingNotice: Duration
  "Maximum number of seconds before travel to make the request"
  maximumBookingNoticeSeconds: Long @deprecated(reason: "Use \`maximumBookingNotice\`") @timingData
  "A general message for those booking the service"
  message: String
  "Minimum duration before travel to make the request"
  minimumBookingNotice: Duration
  "Minimum number of seconds before travel to make the request"
  minimumBookingNoticeSeconds: Long @deprecated(reason: "Use \`minimumBookingNotice\`") @timingData
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


"Real-time estimates for arrival and departure times for a stop location."
type CallRealTime {
  "Real-time estimates for the arrival."
  arrival: EstimatedTime
  "Real-time estimates for the departure."
  departure: EstimatedTime
}


"What is scheduled for a trip on a service date for a stop location."
type CallSchedule {
  "Scheduled time for a trip on a service date for a stop location."
  time: CallScheduledTime
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
  gtfsId: String! @deprecated(reason: "Not implemented")
  "Global object ID provided by Relay. This value can be used to refetch this object using **node** query."
  id: ID! @deprecated(reason: "Not implemented")
  "Latitude of the center of this cluster (i.e. average latitude of stops in this cluster)"
  lat: Float! @deprecated(reason: "Not implemented")
  "Longitude of the center of this cluster (i.e. average longitude of stops in this cluster)"
  lon: Float! @deprecated(reason: "Not implemented")
  "Name of the cluster"
  name: String! @deprecated(reason: "Not implemented")
  "List of stops in the cluster"
  stops: [Stop!] @deprecated(reason: "Not implemented")
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


"""
A (possibly discounted) fare product that requires another fare product to be purchased previously
in order to be valid.

For example, when taking the train into a city, you might get a discounted "transfer fare" when
switching to the bus for the second leg.
"""
type DependentFareProduct implements FareProduct {
  "The fare product is _not_ valid without purchasing at least _one_ of"
  dependencies(filter: DependentFareProductFilter = ALL): [FareProduct!]!
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


type Emissions {
  "CO₂ emissions in grams."
  co2: Grams
}


"Station entrance or exit, originating from OSM or GTFS data."
type Entrance {
  "ID of the entrance in the format of \`FeedId:EntranceId\`. If the \`FeedId\` is \`osm\`, the entrance originates from OSM data."
  entranceId: String!
  "Name of the entrance or exit."
  name: String
  "Short text or a number that identifies the entrance or exit for passengers. For example, \`A\` or \`B\`."
  publicCode: String
  "Whether the entrance or exit is accessible by wheelchair"
  wheelchairAccessible: WheelchairBoarding
}


"Real-time estimates for an arrival or departure at a certain place."
type EstimatedTime {
  """
  The delay or "earliness" of the vehicle at a certain place. This estimate can change quite often.
    
  If the vehicle is early then this is a negative duration.
  """
  delay: Duration!
  "The estimate for a call event (such as arrival or departure) at a certain place. This estimate can change quite often."
  time: OffsetDateTime!
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
  endTime: Long @deprecated(reason: "Use \`end\` instead which includes timezone information.") @timingData
  """
  Information about the fares for this itinerary. This is primarily a GTFS Fares V1 interface
  and always returns an empty list. Use the leg's \`fareProducts\` instead.
  """
  fares: [fare] @deprecated(reason: "Use the leg's \`fareProducts\`.") @timingData
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
  startTime: Long @deprecated(reason: "Use \`start\` instead which includes timezone information.") @timingData
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
  arrivalDelay: Int @deprecated(reason: "Use \`start.estimated.delay\` instead.") @timingData
  """
  For transit leg, the offset from the scheduled departure time of the boarding
  stop in this leg, i.e. scheduled time of departure at boarding stop =
  \`startTime - departureDelay\`
  """
  departureDelay: Int @deprecated(reason: "Use \`end.estimated.delay\` instead.") @timingData
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
  endTime: Long @deprecated(reason: "Use \`end.estimated.time\` instead which contains timezone information.") @timingData
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
  An identifier for the leg, which can be used to re-fetch transit leg information, except leg's fare products.
  Re-fetching fails when the underlying transit data no longer exists.
  **Note:** when both id and fare products are queried with [Relay](https://relay.dev/), id should be queried using a suitable GraphQL alias
  such as \`legId: id\`. Relay does not accept different fare product ids in otherwise identical legs.
    
  The identifier is valid for a maximum of 2 years, but sometimes it will fail after a few hours.
  We do not recommend storing IDs for a long time.
  """
  id: String
  """
  Interlines with previous leg.
  This is true when the same vehicle is used for the previous leg as for this leg
  and passenger can stay inside the vehicle.
  """
  interlineWithPreviousLeg: Boolean
  "Whether the destination of this leg (field \`to\`) is one of the intermediate places specified in the query."
  intermediatePlace: Boolean @deprecated(reason: "Not implemented")
  """
  For transit legs, intermediate stops between the Place where the leg
  originates and the Place where the leg ends. For non-transit legs, null.
  """
  intermediatePlaces: [Place] @deprecated(reason: "Use \`leg.stopCalls\` instead")
  """
  For transit legs, intermediate stops between the Place where the leg
  originates and the Place where the leg ends. For non-transit legs, null.
    
  The \`include\` parameter allows filtering of the returned places by stop type. If not provided, the
  field returns all types. An empty list is not permitted.
  """
  intermediateStops(include: [StopType!]): [Stop] @deprecated(reason: "Use \`leg.stopCalls\` instead")
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
  "Previous legs with same origin and destination stops or stations"
  previousLegs(
    """
    Transportation modes for which all stops in the parent station are used as possible destination stops
    for the previous legs. For modes not listed, only the exact destination stop of the leg is considered.
    """
    destinationModesWithParentStation: [TransitMode!]
    """
    The number of alternative legs searched. If fewer than the requested number are found,
    then only the found legs are returned.
    """
    numberOfLegs: Int!
    """
    Transportation modes for which all stops in the parent station are used as possible origin stops
    for the previous legs. For modes not listed, only the exact origin stop of the leg is considered.
    """
    originModesWithParentStation: [TransitMode!]
  ): [Leg!]
  "Whether there is real-time data about this Leg"
  realTime: Boolean
  "State of real-time data"
  realtimeState: RealtimeState
  "Whether this leg is traversed with a rented vehicle."
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
  startTime: Long @deprecated(reason: "Use \`start.estimated.time\` instead which contains timezone information.") @timingData
  "The turn-by-turn navigation instructions."
  steps: [step]
  """
  All the stop calls (stop times) of this _leg_ (but not trip) including the boarding and alighting one.
    
  Non-transit legs return an empty list.
  """
  stopCalls: [StopCall!]!
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


"""
A stop that isn't a fixed point but zone where passengers can board or alight anywhere.

This is mostly used by demand-responsive services.
"""
type Location {
  "The geometry representing the geographic extend of the location."
  geometry: StopGeometries!
  "ÌD of the location in format \`FeedId:LocationId\`"
  gtfsId: String!
  "Optional name of the location."
  name: String
}


"""
A group of fixed stops that is visited in an arbitrary order.

This is mostly used by demand-responsive services.
"""
type LocationGroup {
  "ÌD of the location group in format \`FeedId:LocationGroupId\`"
  gtfsId: String!
  "The stops that are part of the group (cannot be stations)."
  members: [Stop!]!
  "Optional name of the group."
  name: String
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
  arrivalTime: Long! @deprecated(reason: "Use \`arrival\` which includes timezone information.") @timingData
  "The bike parking related to the place"
  bikePark: BikePark @deprecated(reason: "bikePark is deprecated. Use vehicleParking instead.") @timingData
  "The bike rental station related to the place"
  bikeRentalStation: BikeRentalStation @deprecated(reason: "Use vehicleRentalStation and rentalVehicle instead") @timingData
  "The car parking related to the place"
  carPark: CarPark @deprecated(reason: "carPark is deprecated. Use vehicleParking instead.") @timingData
  """
  The time the rider will depart the place. This also includes real-time information
  if available.
  """
  departure: LegTime
  "The time the rider will depart the place. Format: Unix timestamp in milliseconds."
  departureTime: Long! @deprecated(reason: "Use \`departure\` which includes timezone information.") @timingData
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
  vertexType: VertexType @deprecated(reason: "Unmaintained. Use \`stop\`, \`rentalVehicle\`, \`vehicleParking\` or \`vehicleRentalStation\` to tell which type it is.") @timingData
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
  nextDateTime: Long @deprecated(reason: "Use nextPageCursor instead") @timingData
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
  prevDateTime: Long @deprecated(reason: "Use previousPageCursor instead") @timingData
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
  bikePark(id: String!): BikePark @deprecated(reason: "bikePark is deprecated. Use vehicleParking instead.") @timingData
  "Get all bike parks"
  bikeParks: [BikePark] @deprecated(reason: "bikeParks is deprecated. Use vehicleParkings instead.") @timingData
  "Get a single bike rental station based on its ID, i.e. value of field \`stationId\`"
  bikeRentalStation(id: String!): BikeRentalStation @deprecated(reason: "Use rentalVehicle or vehicleRentalStation instead") @timingData
  "Get all bike rental stations"
  bikeRentalStations(
    """
    Return bike rental stations with these ids.
    **Note:** if an id is invalid (or the bike rental station service is unavailable)
    the returned list will contain \`null\` values.
    """
    ids: [String]
  ): [BikeRentalStation] @deprecated(reason: "Use rentalVehicles or vehicleRentalStations instead") @timingData
  """
  Get pages of canceled trips. Planned cancellations are not currently supported. Limiting the number of
  returned trips with either \`first\` or \`last\` is highly recommended since the number of returned trips
  can be really high when there is a strike affecting the transit services, for example. Follows the
  [GraphQL Cursor Connections Specification](https://relay.dev/graphql/connections.htm).
  """
  canceledTrips(
    """
    This parameter is part of the [GraphQL Cursor Connections Specification](https://relay.dev/graphql/connections.htm)
    and should be used together with the \`first\` parameter.
    """
    after: String
    """
    This parameter is part of the [GraphQL Cursor Connections Specification](https://relay.dev/graphql/connections.htm)
    and should be used together with the \`last\` parameter.
    """
    before: String
    """
    Limits how many trips are returned. This parameter is part of the
    [GraphQL Cursor Connections Specification](https://relay.dev/graphql/connections.htm) and can be used together with
    the \`after\` parameter.
    """
    first: Int
    """
    This parameter is part of the [GraphQL Cursor Connections Specification](https://relay.dev/graphql/connections.htm)
    and should be used together with the \`before\` parameter.
    """
    last: Int
  ): TripOnServiceDateConnection
  "Get canceled TripTimes."
  cancelledTripTimes(
    "Feed feedIds (e.g. [\\"HSL\\"])."
    feeds: [String]
    """
    Only canceled trip times that have last stop arrival time at maxArrivalTime
    or before are returned. Format: seconds since midnight of maxDate.
    """
    maxArrivalTime: Int
    "Only canceled trip times scheduled to run on maxDate or before are returned. Format: \\"2019-12-23\\" or \\"20191223\\"."
    maxDate: String
    """
    Only canceled trip times that have first stop departure time at
    maxDepartureTime or before are returned. Format: seconds since midnight of maxDate.
    """
    maxDepartureTime: Int
    """
    Only canceled trip times that have last stop arrival time at minArrivalTime
    or after are returned. Format: seconds since midnight of minDate.
    """
    minArrivalTime: Int
    "Only canceled trip times scheduled to run on minDate or after are returned. Format: \\"2019-12-23\\" or \\"20191223\\"."
    minDate: String
    """
    Only canceled trip times that have first stop departure time at
    minDepartureTime or after are returned. Format: seconds since midnight of minDate.
    """
    minDepartureTime: Int
    "TripPattern codes (e.g. [\\"HSL:1098:1:01\\"])."
    patterns: [String]
    "Route gtfsIds (e.g. [\\"HSL:1098\\"])."
    routes: [String]
    "Trip gtfsIds (e.g. [\\"HSL:1098_20190405_Ma_2_1455\\"])."
    trips: [String]
  ): [Stoptime] @deprecated(reason: "\`cancelledTripTimes\` is not implemented. Use \`canceledTrips\` instead.") @timingData
  "Get a single car park based on its ID, i.e. value of field \`carParkId\`"
  carPark(id: String!): CarPark @deprecated(reason: "carPark is deprecated. Use vehicleParking instead.") @timingData
  "Get all car parks"
  carParks(
    """
    Return car parks with these ids.
    **Note:** if an id is invalid (or the car park service is unavailable) the returned list will contain \`null\` values.
    """
    ids: [String]
  ): [CarPark] @deprecated(reason: "carParks is deprecated. Use vehicleParkings instead.") @timingData
  "Get a single cluster based on its ID, i.e. value of field \`gtfsId\`"
  cluster(id: String!): Cluster @deprecated(reason: "Not implemented")
  "Get all clusters"
  clusters: [Cluster] @deprecated(reason: "Not implemented")
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
  Try refetching the current state of a transit leg using its id.
  This fails when the underlying transit data (mostly IDs) has changed or are no longer available.
  Fare products cannot be refetched using this query.
  """
  leg(id: String!): Leg
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
    "Only include vehicle rental networks that match one of the given network ids."
    filterByNetwork: [String!]
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
  ): placeAtDistanceConnection @async @timingData
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
    intermediatePlaces: [InputCoordinates] @deprecated(reason: "Not implemented")
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
    between transit stops. Default value: 120
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
    preferred: InputPreferred @deprecated(reason: "Not implemented")
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
    startTransitTripId: String @deprecated(reason: "Not implemented")
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
    The list of points the itinerary required to pass through.
    All locations are visited in the order they are listed.
    """
    via: [PlanViaLocationInput!]
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
  ): Plan @async @deprecated(reason: "Use \`planConnection\` instead.") @timingData
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
    time or ends at the latest arrival time. If this is not provided or the value is set as null,
    a reasonable search window is automatically generated. When searching for earlier or later itineraries
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
    "The list of points the itinerary is required to pass through."
    via: [PlanViaLocationInput!]
  ): PlanConnection @async @timingData
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
    ids: [String] @deprecated(reason: "Since it is hard to reason about the ID filter being combined with others in this resolver, it will be moved to a separate one.")
    "Query routes by this name"
    name: String
    """
    Only include routes whose pattern operates on at least one service date specified by this filter.
        
    **Note**: A service date is a technical term useful for transit planning purposes and might not
    correspond to a how a passenger thinks of a calendar date. For example, a night bus running
    on Sunday morning at 1am to 3am, might have the previous Saturday's service date.
    """
    serviceDates: LocalDateRangeInput
    "Only include routes, which use one of these modes"
    transportModes: [Mode]
  ): [Route] @timingData
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
  "Get all rental vehicles within the specified bounding box"
  vehicleRentalsByBbox(
    "Northern bound of the bounding box"
    maximumLatitude: CoordinateValue!
    "Eastern bound of the bounding box"
    maximumLongitude: CoordinateValue!
    "Southern bound of the bounding box"
    minimumLatitude: CoordinateValue!
    "Western bound of the bounding box"
    minimumLongitude: CoordinateValue!
  ): [RentalPlace!]!
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
  "The vehicle should be returned before this deadline."
  availableUntil: OffsetDateTime
  "Fuel or battery status of the rental vehicle"
  fuel: RentalVehicleFuel
  "Global object ID provided by Relay. This value can be used to refetch this object using **node** query."
  id: ID!
  "Latitude of the vehicle (WGS 84)"
  lat: Float
  "Longitude of the vehicle (WGS 84)"
  lon: Float
  "Name of the vehicle"
  name: String!
  "ID of the rental network."
  network: String @deprecated(reason: "Use \`networkId\` from \`rentalNetwork\` instead.") @timingData
  "If true, vehicle is not disabled."
  operative: Boolean
  "The vehicle rental network information. This is referred as system in the GBFS terminology."
  rentalNetwork: VehicleRentalNetwork!
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


"Rental vehicle fuel represent the current status of the battery or fuel of a rental vehicle"
type RentalVehicleFuel {
  "Fuel or battery power remaining in the vehicle. Expressed from 0 to 1."
  percent: Ratio
  "Range in meters that the vehicle can travel with the current charge or fuel."
  range: Int
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
  patterns(
    """
    Filter patterns by the service dates they operate on.
        
    **Note**: A service date is a technical term useful for transit planning purposes and might not
    correspond to a how a passenger thinks of a calendar date. For example, a night bus running
    on Sunday morning at 1am to 3am, might have the previous Saturday's service date.
    """
    serviceDates: LocalDateRangeInput
  ): [Pattern]
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
  cluster: Cluster @deprecated(reason: "Not implemented")
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
  routes(
    """
    Only include routes which are operational on at least one service date specified by this filter.
        
    **Note**: A service date is a technical term useful for transit planning purposes and might not
    correspond to a how a passenger thinks of a calendar date. For example, a night bus running
    on Sunday morning at 1am to 3am, might have the previous Saturday's service date.
    """
    serviceDates: LocalDateRangeInput
  ): [Route!]
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
  vehicleType: Int @deprecated(reason: "Not implemented. Use \`vehicleMode\`.") @timingData
  "Whether wheelchair boarding is possible for at least some of vehicles on this stop"
  wheelchairBoarding: WheelchairBoarding
  "ID of the zone where this stop is located"
  zoneId: String
}


"""
Represents the time or time window when a specific trip on a specific date arrives to and/or departs
from a specific stop location.

This may contain real-time information, if available.
"""
type StopCall {
  "Real-time estimates for arrival and departure times for this stop location."
  realTime: CallRealTime
  "Scheduled arrival and departure times for this stop location."
  schedule: CallSchedule
  "The stop where this arrival/departure happens."
  stopLocation: CallStopLocation!
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
  The sequence of the stop in the trip. This is not required to start from 0 or be consecutive - any
  increasing integer sequence along the stops is valid.
    
  The purpose of this field is to identify the stop within the trip so it can be cross-referenced
  between it and the itinerary. It is safe to cross-reference when done quickly, i.e. within seconds.
  However, it should be noted that real-time updates can change the values, so don't store it for
  longer amounts of time.
    
  Depending on the source data, this might not be the GTFS \`stop_sequence\` but another value, perhaps
  even generated.
  """
  stopPosition: Int
  """
  The position of the stop in the pattern. This is required to start from 0 and be consecutive along
  the pattern, up to n-1 for a pattern with n stops.
    
  The purpose of this field is to identify the position of the stop within the pattern so it can be
  cross-referenced between different trips on the same pattern, as stopPosition can be different
  between trips even within the same pattern.
  """
  stopPositionInPattern: Int!
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


"A time window when a vehicle visits a stop, area or group of stops."
type TimeWindow {
  end: OffsetDateTime!
  start: OffsetDateTime!
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
  """
  Arrival time to the final stop. If the trip does not run on the given date,
  it will return scheduled times from another date. This field is slightly
  confusing and will be deprecated when a better replacement is implemented.
  """
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
  """
  Departure time from the first stop. If the trip does not run on the given date,
  it will return scheduled times from another date. This field is slightly
  confusing and will be deprecated when a better replacement is implemented.
  """
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
  """
  List of times when this trip arrives to or departs from each stop on a given date, or
  today if the date is not given. If the trip does not run on the given date, it will
  return scheduled times from another date. This field is slightly confusing and
  will be deprecated when a better replacement is implemented.
  """
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


"A trip on a specific service date."
type TripOnServiceDate {
  "Information related to trip's scheduled arrival to the final stop location. Can contain real-time information."
  end: StopCall!
  """
  The service date when the trip occurs.
    
  **Note**: A service date is a technical term useful for transit planning purposes and might not
    correspond to a how a passenger thinks of a calendar date. For example, a night bus running
    on Sunday morning at 1am to 3am, might have the previous Saturday's service date.
  """
  serviceDate: LocalDate!
  "Information related to trip's scheduled departure from the first stop location. Can contain real-time information."
  start: StopCall!
  "List of times when this trip arrives to or departs from a stop location and information related to the visit to the stop location."
  stopCalls: [StopCall!]!
  "This trip on service date is an instance of this trip."
  trip: Trip
}


"""
A connection to a list of trips on service dates that follows
[GraphQL Cursor Connections Specification](https://relay.dev/graphql/connections.htm).
"""
type TripOnServiceDateConnection {
  """
  Edges which contain the trips. Part of the
  [GraphQL Cursor Connections Specification](https://relay.dev/graphql/connections.htm).
  """
  edges: [TripOnServiceDateEdge]
  """
  Contains cursors to fetch more pages of trips.
  Part of the [GraphQL Cursor Connections Specification](https://relay.dev/graphql/connections.htm).
  """
  pageInfo: PageInfo!
}


"""
An edge for TripOnServiceDate connection. Part of the
[GraphQL Cursor Connections Specification](https://relay.dev/graphql/connections.htm).
"""
type TripOnServiceDateEdge {
  """
  The cursor of the edge. Part of the
  [GraphQL Cursor Connections Specification](https://relay.dev/graphql/connections.htm).
  """
  cursor: String!
  """
  Trip on a service date as a node. Part of the
  [GraphQL Cursor Connections Specification](https://relay.dev/graphql/connections.htm).
  """
  node: TripOnServiceDate
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
  "When the position of the vehicle was recorded."
  lastUpdate: OffsetDateTime
  "When the position of the vehicle was recorded in seconds since the UNIX epoch."
  lastUpdated: Long @deprecated(reason: "Use \`lastUpdate\` instead.") @timingData
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


"""
Vehicle rental network, which is referred as system in the GBFS terminology. Note, the same operator can operate in multiple
regions either with the same network/system or with a different one. This can contain information about either the rental brand
or about the operator.
"""
type VehicleRentalNetwork {
  """
  ID of the vehicle rental network. In GBFS, this is the \`system_id\` field from the system information, but it can
  be overridden in the configuration to have a different value so this field doesn't necessarily match the source data.
  """
  networkId: String!
  "The rental vehicle operator's network/system URL. In GBFS, this is the \`url\` field from the system information."
  url: String
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
  network: String @deprecated(reason: "Use \`networkId\` from \`rentalNetwork\` instead.") @timingData
  "If true, station is on and in service."
  operative: Boolean
  """
  If true, values of \`vehiclesAvailable\` and \`spacesAvailable\` are updated from a
  real-time source. If false, values of \`vehiclesAvailable\` and \`spacesAvailable\`
  are always the total capacity divided by two.
  """
  realtime: Boolean
  "The vehicle rental network information. This is referred as system in the GBFS terminology."
  rentalNetwork: VehicleRentalNetwork!
  "Platform-specific URLs to begin renting a vehicle from this station."
  rentalUris: VehicleRentalUris
  """
  Number of free spaces currently available on the rental station.
  Note that this value being 0 does not necessarily indicate that vehicles cannot be returned
  to this station, as for example it might be possible to leave the vehicle in the vicinity of
  the rental station, even if the vehicle racks don't have any spaces available.
  See field \`allowDropoffNow\` to know if is currently possible to return a vehicle.
  """
  spacesAvailable: Int @deprecated(reason: "Use \`availableSpaces\` instead, which also contains the space vehicle types") @timingData
  "ID of the vehicle in the format of network:id"
  stationId: String
  """
  Number of vehicles currently available on the rental station.
  See field \`allowPickupNow\` to know if is currently possible to pick up a vehicle.
  """
  vehiclesAvailable: Int @deprecated(reason: "Use \`availableVehicles\` instead, which also contains vehicle types") @timingData
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
  cents: Int @deprecated(reason: "No longer supported") @timingData
  "Components which this fare is composed of"
  components: [fareComponent] @deprecated(reason: "No longer supported") @timingData
  "ISO 4217 currency code"
  currency: String @deprecated(reason: "No longer supported") @timingData
  type: String @deprecated(reason: "No longer supported") @timingData
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
  cents: Int @deprecated(reason: "No longer supported") @timingData
  "ISO 4217 currency code"
  currency: String @deprecated(reason: "No longer supported") @timingData
  "ID of the ticket type. Corresponds to \`fareId\` in **TicketType**."
  fareId: String @deprecated(reason: "No longer supported") @timingData
  "List of routes which use this fare component"
  routes: [Route] @deprecated(reason: "No longer supported") @timingData
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
  "Information about an feature associated with a step e.g. an station entrance or exit"
  feature: StepFeature
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
  affected, for example: All train services are canceled due to technical problems.
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


"""
Dependent fare products can lead to many combinations of fares, however it is often not useful
information to the passenger.

This enum allows filtering of the dependencies.

Since it is recognised that this is not covered well in the specification, it is discussed here:
https://github.com/google/transit/pull/423
"""
enum DependentFareProductFilter {
  "Show all dependencies"
  ALL
  "Show only dependencies where the rider category and medium is the same es the main fare product."
  MATCH_CATEGORY_AND_MEDIUM
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
  BIKE_PARK @deprecated(reason: "Not supported.")
  "Parking lots that contain spaces for cars"
  CAR_PARK @deprecated(reason: "Not supported.")
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
  VIA
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
  Driving to a stop and boarding a vehicle with the car.
  Access can use driving only if the mode used for transfers
  and egress is also \`CAR\`.
  """
  CAR
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
  Driving from a stop to the destination. Egress can use driving only if the mode
  used for access and transfers is also \`CAR\`.
  """
  CAR
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
  """
  Driving between transit vehicles. Transfers can only use driving if the mode
  used for access and egress is also \`CAR\`.
  """
  CAR
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


"""
A direction that is not absolute but rather fuzzy and context-dependent.
It provides the passenger with information what they should do in this step depending on where they
were in the previous one.
"""
enum RelativeDirection {
  CIRCLE_CLOCKWISE
  CIRCLE_COUNTERCLOCKWISE
  """
  Moving straight ahead in one of these cases
    
    - Passing through a crossing or intersection.
    - Passing through a station entrance or exit when it is not know whether the passenger is
      entering or exiting. If it _is_ known then \`ENTER_STATION\`/\`EXIT_STATION\` is used.
      More information about the entrance is in the \`step.feature\` field.
  """
  CONTINUE
  DEPART
  ELEVATOR
  """
  Entering a public transport station. If it's not known if the passenger is entering or exiting
  then \`CONTINUE\` is used.
    
  More information about the entrance is in the \`step.feature\` field.
  """
  ENTER_STATION
  """
  Exiting a public transport station. If it's not known if the passenger is entering or exiting
  then \`CONTINUE\` is used.
    
  More information about the entrance is in the \`step.feature\` field.
  """
  EXIT_STATION
  "Follow the signs indicating a specific location like \\"platform 1\\" or \\"exit B\\"."
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


enum StopType {
  "An area or zone represented by a polygon. Introduced by the GTFS-Flex spec process."
  LOCATION
  "A group of stops. Introduced by the GTFS-Flex spec process."
  LOCATION_GROUP
  "A fixed stop represented by a coordinate."
  STOP
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


"""
An ISO-8601-formatted local date, i.e. \`2024-05-24\` for the 24th of May, 2024.

ISO-8601 allows many different date formats, however only the most common one - \`yyyy-MM-dd\` - is accepted.
"""
scalar LocalDate @specifiedBy(url: "https://www.iso.org/standard/70907.html")


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
  """
  Rental networks which can be potentially used as part of an itinerary. If this field has no default value,
  it means that all networks are allowed unless some are banned with \`bannedNetworks\`.
  """
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
  "Cost of boarding a vehicle with a car."
  boardCost: Cost
  "Car parking related preferences."
  parking: CarParkingPreferencesInput
  "A multiplier for how bad travelling on car is compared to being in transit for equal lengths of time."
  reluctance: Reluctance
  "Car rental related preferences."
  rental: CarRentalPreferencesInput
}


"Preferences related to car rental (station based or floating car rental)."
input CarRentalPreferencesInput {
  """
  Rental networks which can be potentially used as part of an itinerary. If this field has no default value,
  it means that all networks are allowed unless some are banned with \`bannedNetworks\`.
  """
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
  stops: String @deprecated(reason: "Not implemented")
  """
  A comma-separated list of banned stop ids. Only itineraries where these stops
  are not travelled through are returned, e.g. if a bus route stops at one of
  these stops, that route will not be used in the itinerary, even if the stop is
  not used for boarding or disembarking the vehicle.
  """
  stopsHard: String @deprecated(reason: "Not implemented")
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
  "The weight of CARPOOL traverse mode. Values over 1 add cost to carpool travel and values under 1 decrease cost"
  CARPOOL: Float
  "The weight of COACH traverse mode. Values over 1 add cost to coach travel and values under 1 decrease cost"
  COACH: Float
  "The weight of FERRY traverse mode. Values over 1 add cost to ferry travel and values under 1 decrease cost"
  FERRY: Float
  "The weight of FUNICULAR traverse mode. Values over 1 add cost to funicular travel and values under 1 decrease cost"
  FUNICULAR: Float
  "The weight of GONDOLA traverse mode. Values over 1 add cost to gondola travel and values under 1 decrease cost"
  GONDOLA: Float
  "The weight of MONORAIL traverse mode. Values over 1 add cost to monorail travel and values under 1 decrease cost"
  MONORAIL: Float
  "The weight of RAIL traverse mode. Values over 1 add cost to rail travel and values under 1 decrease cost"
  RAIL: Float
  "The weight of SUBWAY traverse mode. Values over 1 add cost to subway travel and values under 1 decrease cost"
  SUBWAY: Float
  "The weight of TAXI traverse mode. Values over 1 add cost to taxi travel and values under 1 decrease cost"
  TAXI: Float
  "The weight of TRAM traverse mode. Values over 1 add cost to tram travel and values under 1 decrease cost"
  TRAM: Float
  "The weight of TROLLEYBUS traverse mode. Values over 1 add cost to trolleybus travel and values under 1 decrease cost"
  TROLLEYBUS: Float
}


input InputPreferred {
  "Not implemented"
  agencies: String
  "Not implemented"
  otherThanPreferredRoutesPenalty: Int
  "Not implemented"
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


"Filters an entity by a date range."
input LocalDateRangeInput {
  """
  **Exclusive** end date of the filter. This means that if you want a time window from Sunday to
  Sunday, \`end\` must be on Monday.
    
  If \`null\` this means that no end filter is applied and all entities that are after or on \`start\`
  are selected.
  """
  end: LocalDate
  """
  **Inclusive** start date of the filter. If \`null\` this means that no \`start\` filter is applied and all
  dates that are before \`end\` are selected.
  """
  start: LocalDate
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
  """
  direct: [PlanDirectMode!]
  "Should only the direct search without any transit be done."
  directOnly: Boolean = false
  """
  Modes for different phases of an itinerary when transit is included. Also
  includes street mode selections related to connecting to the transit network
  and transfers. By default, all transit modes are usable.
  """
  transit: PlanTransitModesInput
  """
  Should only the transit search be done and never suggest itineraries that don't
  contain any transit legs.
  """
  transitOnly: Boolean = false
}


"""
One of the listed stop locations must be visited on-board a transit vehicle or the journey must
alight or board at the location.
"""
input PlanPassThroughViaLocationInput {
  "The label/name of the location. This is pass-through information and is not used in routing."
  label: String
  """
  A list of stop locations. A stop location can be a stop or a station.
  It is enough to visit ONE of the locations listed.
  """
  stopLocationIds: [String!]!
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
  """
  access: [PlanAccessMode!]
  """
  Street mode that is used when searching for egress to destination from the transit network.
  If more than one mode is selected, at least one of them must be used but not necessarily all.
  There are modes that automatically also use walking such as the rental modes. To force rental
  to be used, this should only include the rental mode and not \`WALK\` in addition.
  """
  egress: [PlanEgressMode!]
  "Street mode that is used when searching for transfers. Selection of only one allowed for now."
  transfer: [PlanTransferMode!]
  """
  Transit modes and reluctances associated with them. Each defined mode can be used in
  an itinerary but doesn't have to be. If direct search is not disabled, there can be an
  itinerary without any transit legs. By default, all transit modes are usable.
  """
  transit: [PlanTransitModePreferenceInput!]
}


"""
A via-location is used to specifying a location as an intermediate place the router must
route through. The via-location is either a pass-through-location or a visit-via-location.
"""
input PlanViaLocationInput @oneOf {
  "Board, alight or pass-through(on-board) at the stop location."
  passThrough: PlanPassThroughViaLocationInput
  "Board or alight at a stop location or visit a coordinate."
  visit: PlanVisitViaLocationInput
}


"""
A visit-via-location is a physical visit to one of the stop locations or coordinates listed. An
on-board visit does not count, the traveler must alight or board at the given stop for it to to
be accepted. To visit a coordinate, the traveler must walk(bike or drive) to the closest point
in the street network from a stop and back to another stop to join the transit network.
"""
input PlanVisitViaLocationInput {
  """
  A coordinate to route through. To visit a coordinate, the traveler must walk(bike or drive)
  to the closest point in the street network from a stop and back to another stop to join the transit
  network.
  """
  coordinate: PlanCoordinateInput
  "The label/name of the location. This is pass-through information and is not used in routing."
  label: String
  """
  The minimum wait time is used to force the trip to stay the given duration at the
  via-location before the itinerary is continued.
  """
  minimumWaitTime: Duration = "PT0S"
  """
  A list of stop locations. A stop location can be a stop or a station.
  It is enough to visit ONE of the locations listed.
  """
  stopLocationIds: [String!]
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
  """
  Rental networks which can be potentially used as part of an itinerary. If this field has no default value,
  it means that all networks are allowed unless some are banned with \`bannedNetworks\`.
  """
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
  trips can be canceled or stops can be skipped.
  """
  excludeRealTimeUpdates: Boolean
  """
  When true, departures that have been canceled ahead of time will be
  included during the routing. This means that an itinerary can include
  a canceled departure while some other alternative that contains no cancellations
  could be filtered out as the alternative containing a cancellation would normally
  be better.
  """
  includePlannedCancellations: Boolean
  """
  When true, departures that have been canceled through a real-time feed will be
  included during the routing. This means that an itinerary can include
  a canceled departure while some other alternative that contains no cancellations
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
  A global minimum transfer time that specifies the minimum amount of time that must pass
  between exiting one transit vehicle and boarding another. This time is in addition to
  time it might take to walk between transit stops. Setting this value as \`PT0S\`, for
  example, can lead to passenger missing a connection when the vehicle leaves ahead of time
  or the passenger arrives to the stop later than expected.
  """
  slack: Duration
}


"""
A collection of selectors for what routes/agencies should be included in or excluded from the search.

The \`include\` is always applied to select the initial set, then \`exclude\` to remove elements.
If only \`exclude\` is present, the exclude is applied to the existing set of results.

Therefore, if an entity is both included _and_ excluded the exclusion takes precedence.
"""
input TransitFilterInput {
  """
  A list of selectors for what routes/agencies should be excluded during search.
    
  In order to be excluded, a route/agency has to match with at least one selector.
    
  An empty list or a list containing \`null\` is forbidden.
  """
  exclude: [TransitFilterSelectInput!]
  """
  A list of selectors for what routes/agencies should be allowed during the search.
    
  If route/agency matches with at least one selector it will be included.
    
  An empty list or a list containing \`null\` is forbidden.
  """
  include: [TransitFilterSelectInput!]
}


"""
A list of selectors for including or excluding entities from the routing results. Null
means everything is allowed to be returned and empty lists are not allowed.
"""
input TransitFilterSelectInput @oneOf {
  """
  Set of ids for agencies that should be included in/excluded from the search.
    
  Format: \`FeedId:AgencyId\`
  """
  agencies: [String!]
  """
  Set of ids for routes that should be included in/excluded from the search.
    
  Format: \`FeedId:AgencyId\`
  """
  routes: [String!]
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
  """
  A list of filters for which trips should be included or excluded. A trip will be considered in the
  result if it is included by at least one filter and isn't excluded by another one at the same time.
    
  An empty list of filters or no value means that all trips should be included.
    
  **AND/OR Logic**
    
  Several filters can be defined and form an OR-condition.
    
  The following example means "include all trips with \`F:route1\` _or_ \`F:agency1\`":
    
  \`\`\`
  filters: [
    {
      include: {
        routes: ["F:route1"]
      }
    },
    { 
      include: {
        agencies: ["F:agency1"]
      }
    }
  }]
  \`\`\`
    
  The following example means "include all trips of \`F:agency1\` _and_ exclude \`F:route1\`":
    
  \`\`\`
  filters: [
    {
      include: {
        agencies: ["F:agency1"]
      },
      exclude: {
        routes: ["F:route1"]
      }
    }
  ]
  \`\`\`
    
  Be aware of the following pitfalls:
    - It is easy to construct AND-conditions that can lead to zero results.
    - OR-conditions that have an element which consists of only an exclude are likely to be
      unwanted and may lead to unexpected results.
    
  **Note**: This parameter also interacts with the modes set in \`modes.transit\` by forming
  an AND-condition.
  """
  filters: [TransitFilterInput!]
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
"This directive allows results to be deferred during execution"
directive @defer(
  "Deferred behaviour is controlled by this argument"
  if: Boolean! = true
  "A unique label that represents the fragment being deferred"
  label: String
) on FRAGMENT_SPREAD | INLINE_FRAGMENT
"This directive disables error propagation when a non nullable field returns null for the given operation."
directive @experimental_disableErrorPropagation on QUERY | MUTATION | SUBSCRIPTION
"Add timing data to prometheus, if Actuator API is enabled"
directive @timingData on FIELD_DEFINITION
`,hn=hI(),xo=Gs($s.DIRECTIVES,[]);var Df;const eI=zs((Df=hn.getQueryType())==null?void 0:Df.getFields());var Ef;const nI=zs((Ef=hn.getMutationType())==null?void 0:Ef.getFields());var If;const tI=zs((If=hn.getSubscriptionType())==null?void 0:If.getFields()),il=Nt.keyBy(Rh(),i=>i.name.toLocaleLowerCase()),iI=Nt.mapValues(il,i=>{const n=xo.find(t=>(t==null?void 0:t.name)===i.name||(t==null?void 0:t.name)==="*");return n?n.args.some(t=>t==="*")?i.args:n.args.map(t=>i.args.find(s=>s.name===t)).filter(t=>!!t):[]}),rI=zs(hn.getTypeMap()),sI=JE(hn);function zs(i){return Nt.mapKeys(i||{},(n,t)=>t.toLocaleLowerCase())}function aI(){return Nt.size(hn.getTypeMap())<=10}function oI(){return[Io("Queries",hn.getQueryType()),Io("Mutations",hn.getMutationType()),Io("Subscriptions",hn.getSubscriptionType()),dI(),cI()].filter(i=>!!i)}function Io(i,n){return uI(i,lI(n))}function lI(i){return Nt.sortBy((i==null?void 0:i.getFields())||{},n=>n.name)}function uI(i,n){return n.length===0?null:{type:"menu",title:i,children:n.map(t=>({type:"page",title:t.name,section:i,deprecated:!!t.deprecationReason,href:Ar.joinUrlPaths(Vs(),i.toLocaleLowerCase(),t.name)}))}}function cI(){return aI()?null:{type:"menu",title:"Types",children:Nt.sortBy(Nt.map(hn.getTypeMap()),n=>n.name).filter(n=>!n.name.startsWith("__")).map(n=>({type:"page",title:n.name,section:"Types",href:Ar.joinUrlPaths(Vs(),"types",n.name)}))}}function kI(){return!!hn.getQueryType()}function FI(i){return eI[i.toLocaleLowerCase()]}function NI(){return!!hn.getMutationType()}function CI(i){return nI[i.toLocaleLowerCase()]}function OI(){return!!hn.getSubscriptionType()}function RI(i){return tI[i.toLocaleLowerCase()]}function xI(i){return rI[i.toLocaleLowerCase()]}function fI(i){return il[i.toLocaleLowerCase()]}function LI(i){return fI(i.name)!==void 0}function PI(){return Nt.size(il)>0}function BI(i){return iI[i.name.toLocaleLowerCase()]||[]}function UI(i){if(i)return sI.getFor(i)}function MI(i){return Nt.flatMap(i.getFields(),n=>({field:n,possibleDescriptions:Oh(n,i)}))}function Oh(i,n){return i?i.description?[{description:i.description,from:n}]:Ye(n)?n.getInterfaces().flatMap(t=>Oh(t.getFields()[i.name],t)):[]:[]}function Rh(){return xo.some(i=>(i==null?void 0:i.name)==="*")?hn.getDirectives().filter(i=>!["include","skip","deprecated","specifiedBy"].includes(i.name)):xo.filter(i=>!!(i!=null&&i.name)).map(({name:i})=>i?hn.getDirective(i):void 0).filter(i=>!!i)}function hI(){return Tf.trim().length===0?YE(JSON.parse(JSON.stringify({__schema:{types:[]}}))):QE(Tf)}function dI(){const i=Rh();return i.length===0?null:{type:"menu",title:"Directives",children:i.map(n=>({type:"page",title:n.name,href:Ar.joinUrlPaths(Vs(),"directives",n.name),section:"Directives"}))}}const $I=Gs($s.APP_TITLE,"GraphQL Documentation"),xh=gI().concat(oI());yI(xh);const pI=Object.freeze(xh),GI=mI();function gI(){return Gs($s.PAGES,bI()).filter(n=>!!n).map(n=>Ph([],n))}function mI(){const i=vI();if(i)return i.href;throw new Error("No custom pages or query available to use as the root application URL. You need to provide at least one custom page or your schema should contain at least one query/mutation/subscription.")}function yI(i){function n(s,a){for(const o of s){if(o.type==="page"){a(o);continue}o.type==="menu"&&n(o.children,a)}}let t;n(i,s=>{t&&(t.next={title:s.title,section:s.section,href:s.href},s.previous={title:t.title,section:t.section,href:t.href}),t=s})}function vI(){return Lh(()=>!0)}function VI(i){return Lh(n=>n.href.toLocaleLowerCase()===i.toLocaleLowerCase())}function Lh(i){function n(t){for(const s of t){if(s.type==="page"&&i(s))return s;if(s.type==="menu"){const a=n(s.children);if(a)return a}}return null}return n(pI)}function Ph(i,n){if(typeof n.content=="string")return{type:"page",title:n.title,content:n.content,href:Ar.joinUrlPaths(Vs(),...i,wf(n.title))};const t=i.concat([wf(n.title)]);return{type:"menu",title:n.title,children:n.content.map(s=>({...Ph(t,s),section:n.title}))}}function wf(i){return Ar.generatePathSegment(i,new Ff)}function bI(){return[{title:"Introduction",content:[{title:"Welcome",content:`
        # Welcome 🎉

        [Congratulations!](https://www.youtube.com/watch?v=1Bix44C1EzY) You have successfully created your first Magidoc website.

        Now that you are up and running, you can customize this website even further by providing some configuration inside your [magidoc.mjs ⚙️](https://magidoc.js.org/cli/magidoc-configuration). 
        If you wish to remove or modify this page, have a look at the *customPages* configuration.
        `.split(`
`).map(i=>i.trim()).join(`
`)}]}]}export{E0 as A,aI as B,xI as C,UI as D,Jt as E,et as F,Ve as G,Vn as H,Ye as I,vn as J,w as K,MI as L,pi as M,Pi as N,_I as O,Us as P,Sf as Q,gr as R,AI as S,Ff as T,be as U,kn as V,$I as W,Nt as _,NI as a,kI as b,FI as c,OI as d,RI as e,VI as f,CI as g,GI as h,_f as i,II as j,PI as k,fI as l,BI as m,LI as n,Vs as o,pI as p,ct as q,nh as r,hn as s,bn as t,Ar as u,Ae as v,SI as w,Gs as x,$s as y,ur as z};
