import{W as qe,a1 as se}from"../chunks/index.2dba5b6d.js";import{S as ze,a as Be,I as q,g as Fe,f as He,b as ge,c as ce,s as H,i as we,d as Q,P as Me,e as et}from"../chunks/singletons.da314e94.js";import{b as K}from"../chunks/paths.2fd6796c.js";import{R as Ve,H as ee}from"../chunks/control.e7f5239e.js";function tt(n,o){return n==="/"||o==="ignore"?n:o==="never"?n.endsWith("/")?n.slice(0,-1):n:o==="always"&&!n.endsWith("/")?n+"/":n}function nt(n){return n.split("%25").map(decodeURI).join("%25")}function at(n){for(const o in n)n[o]=decodeURIComponent(n[o]);return n}const rt=["href","pathname","search","searchParams","toString","toJSON"];function ot(n,o){const l=new URL(n);for(const c of rt){let f=l[c];Object.defineProperty(l,c,{get(){return o(),f},enumerable:!0,configurable:!0})}return it(l),l}function it(n){Object.defineProperty(n,"hash",{get(){throw new Error("Cannot access event.url.hash. Consider using `$page.url.hash` inside a component instead")}})}const st="/__data.json";function ct(n){return n.replace(/\/$/,"")+st}function Je(n){try{return JSON.parse(sessionStorage[n])}catch{}}function Ge(n,o){const l=JSON.stringify(o);try{sessionStorage[n]=l}catch{}}function lt(...n){let o=5381;for(const l of n)if(typeof l=="string"){let c=l.length;for(;c;)o=o*33^l.charCodeAt(--c)}else if(ArrayBuffer.isView(l)){const c=new Uint8Array(l.buffer,l.byteOffset,l.byteLength);let f=c.length;for(;f;)o=o*33^c[--f]}else throw new TypeError("value must be a string or TypedArray");return(o>>>0).toString(36)}const le=window.fetch;window.fetch=(n,o)=>((n instanceof Request?n.method:(o==null?void 0:o.method)||"GET")!=="GET"&&te.delete(ve(n)),le(n,o));const te=new Map;function ft(n,o){const l=ve(n,o),c=document.querySelector(l);if(c!=null&&c.textContent){const{body:f,...p}=JSON.parse(c.textContent),R=c.getAttribute("data-ttl");return R&&te.set(l,{body:f,init:p,ttl:1e3*Number(R)}),Promise.resolve(new Response(f,p))}return le(n,o)}function ut(n,o,l){if(te.size>0){const c=ve(n,l),f=te.get(c);if(f){if(performance.now()<f.ttl&&["default","force-cache","only-if-cached",void 0].includes(l==null?void 0:l.cache))return new Response(f.body,f.init);te.delete(c)}}return le(o,l)}function ve(n,o){let c=`script[data-sveltekit-fetched][data-url=${JSON.stringify(n instanceof Request?n.url:n)}]`;if(o!=null&&o.headers||o!=null&&o.body){const f=[];o.headers&&f.push([...new Headers(o.headers)].join(",")),o.body&&(typeof o.body=="string"||ArrayBuffer.isView(o.body))&&f.push(o.body),c+=`[data-hash="${lt(...f)}"]`}return c}const dt=/^(\[)?(\.\.\.)?(\w+)(?:=(\w+))?(\])?$/;function pt(n){const o=[];return{pattern:n==="/"?/^\/$/:new RegExp(`^${mt(n).map(c=>{const f=/^\[\.\.\.(\w+)(?:=(\w+))?\]$/.exec(c);if(f)return o.push({name:f[1],matcher:f[2],optional:!1,rest:!0,chained:!0}),"(?:/(.*))?";const p=/^\[\[(\w+)(?:=(\w+))?\]\]$/.exec(c);if(p)return o.push({name:p[1],matcher:p[2],optional:!0,rest:!1,chained:!0}),"(?:/([^/]+))?";if(!c)return;const R=c.split(/\[(.+?)\](?!\])/);return"/"+R.map((y,w)=>{if(w%2){if(y.startsWith("x+"))return ye(String.fromCharCode(parseInt(y.slice(2),16)));if(y.startsWith("u+"))return ye(String.fromCharCode(...y.slice(2).split("-").map(A=>parseInt(A,16))));const h=dt.exec(y);if(!h)throw new Error(`Invalid param: ${y}. Params and matcher names can only have underscores and alphanumeric characters.`);const[,j,P,E,$]=h;return o.push({name:E,matcher:$,optional:!!j,rest:!!P,chained:P?w===1&&R[0]==="":!1}),P?"(.*?)":j?"([^/]*)?":"([^/]+?)"}return ye(y)}).join("")}).join("")}/?$`),params:o}}function ht(n){return!/^\([^)]+\)$/.test(n)}function mt(n){return n.slice(1).split("/").filter(ht)}function gt(n,o,l){const c={},f=n.slice(1);let p=0;for(let R=0;R<o.length;R+=1){const u=o[R],y=f[R-p];if(u.chained&&u.rest&&p){c[u.name]=f.slice(R-p,R+1).filter(w=>w).join("/"),p=0;continue}if(y===void 0){u.rest&&(c[u.name]="");continue}if(!u.matcher||l[u.matcher](y)){c[u.name]=y;const w=o[R+1],h=f[R+1];w&&!w.rest&&w.optional&&h&&(p=0);continue}if(u.optional&&u.chained){p++;continue}return}if(!p)return c}function ye(n){return n.normalize().replace(/[[\]]/g,"\\$&").replace(/%/g,"%25").replace(/\//g,"%2[Ff]").replace(/\?/g,"%3[Ff]").replace(/#/g,"%23").replace(/[.*+?^${}()|\\]/g,"\\$&")}function wt({nodes:n,server_loads:o,dictionary:l,matchers:c}){const f=new Set(o);return Object.entries(l).map(([u,[y,w,h]])=>{const{pattern:j,params:P}=pt(u),E={id:u,exec:$=>{const A=j.exec($);if(A)return gt(A,P,c)},errors:[1,...h||[]].map($=>n[$]),layouts:[0,...w||[]].map(R),leaf:p(y)};return E.errors.length=E.layouts.length=Math.max(E.errors.length,E.layouts.length),E});function p(u){const y=u<0;return y&&(u=~u),[y,n[u]]}function R(u){return u===void 0?u:[f.has(u),n[u]]}}async function yt(n){var o;for(const l in n)if(typeof((o=n[l])==null?void 0:o.then)=="function")return Object.fromEntries(await Promise.all(Object.entries(n).map(async([c,f])=>[c,await f])));return n}const _t=-1,bt=-2,vt=-3,Et=-4,St=-5,kt=-6;function Rt(n,o){if(typeof n=="number")return f(n,!0);if(!Array.isArray(n)||n.length===0)throw new Error("Invalid input");const l=n,c=Array(l.length);function f(p,R=!1){if(p===_t)return;if(p===vt)return NaN;if(p===Et)return 1/0;if(p===St)return-1/0;if(p===kt)return-0;if(R)throw new Error("Invalid input");if(p in c)return c[p];const u=l[p];if(!u||typeof u!="object")c[p]=u;else if(Array.isArray(u))if(typeof u[0]=="string"){const y=u[0],w=o==null?void 0:o[y];if(w)return c[p]=w(f(u[1]));switch(y){case"Date":c[p]=new Date(u[1]);break;case"Set":const h=new Set;c[p]=h;for(let E=1;E<u.length;E+=1)h.add(f(u[E]));break;case"Map":const j=new Map;c[p]=j;for(let E=1;E<u.length;E+=2)j.set(f(u[E]),f(u[E+1]));break;case"RegExp":c[p]=new RegExp(u[1],u[2]);break;case"Object":c[p]=Object(u[1]);break;case"BigInt":c[p]=BigInt(u[1]);break;case"null":const P=Object.create(null);c[p]=P;for(let E=1;E<u.length;E+=2)P[u[E]]=f(u[E+1]);break;default:throw new Error(`Unknown type ${y}`)}}else{const y=new Array(u.length);c[p]=y;for(let w=0;w<u.length;w+=1){const h=u[w];h!==bt&&(y[w]=f(h))}}else{const y={};c[p]=y;for(const w in u){const h=u[w];y[w]=f(h)}}return c[p]}return f(0)}function Ee(n){const o=new Set(n);function l(c,f){if(c)for(const p in c){if(p[0]==="_"||o.has(p))continue;const R=It(p,f==null?void 0:f.slice(f.lastIndexOf(".")))??`valid exports are ${n.join(", ")}, or anything with a '_' prefix`;throw new Error(`Invalid export '${p}'${f?` in ${f}`:""} (${R})`)}}return l}function It(n,o=".js"){let l=[];if(We.includes(n)&&l.push(`+page${o}`),Ye.includes(n)&&l.push(`+page.server${o}`),Xe.includes(n)&&l.push(`+server${o}`),l.length>0)return`'${n}' is a valid export in ${l.join(" or ")}`}const We=["load","prerender","csr","ssr","trailingSlash","config"],Ye=["load","prerender","csr","ssr","actions","trailingSlash","config"],Xe=["GET","POST","PATCH","PUT","DELETE","OPTIONS","prerender","trailingSlash","config"];Ee(We);Ee(Ye);Ee(Xe);function Lt(n){return n.filter(o=>o!=null)}const z=Je(ze)??{},Z=Je(Be)??{};function _e(n){z[n]=Q()}function At(n,o){var Ne;const l=wt(n),c=n.nodes[0],f=n.nodes[1];c(),f();const p=document.documentElement,R=[],u=[];let y=null;const w={before_navigate:[],after_navigate:[]};let h={branch:[],error:null,url:null},j=!1,P=!1,E=!0,$=!1,A=!1,J=!1,M=!1,F,x=(Ne=history.state)==null?void 0:Ne[q];x||(x=Date.now(),history.replaceState({...history.state,[q]:x},"",location.href));const fe=z[x];fe&&(history.scrollRestoration="manual",scrollTo(fe.x,fe.y));let V,Se,ne;async function ke(){ne=ne||Promise.resolve(),await ne,ne=null;const t=new URL(location.href),e=Y(t,!0);y=null,await Pe(e,t,[])}function Re(t){u.some(e=>e==null?void 0:e.snapshot)&&(Z[t]=u.map(e=>{var r;return(r=e==null?void 0:e.snapshot)==null?void 0:r.capture()}))}function Ie(t){var e;(e=Z[t])==null||e.forEach((r,a)=>{var s,i;(i=(s=u[a])==null?void 0:s.snapshot)==null||i.restore(r)})}function Le(){_e(x),Ge(ze,z),Re(x),Ge(Be,Z)}async function ue(t,{noScroll:e=!1,replaceState:r=!1,keepFocus:a=!1,state:s={},invalidateAll:i=!1},m,d){return typeof t=="string"&&(t=new URL(t,Fe(document))),ie({url:t,scroll:e?Q():null,keepfocus:a,redirect_chain:m,details:{state:s,replaceState:r},nav_token:d,accepted:()=>{i&&(M=!0)},blocked:()=>{},type:"goto"})}async function Ae(t){return y={id:t.id,promise:Ue(t).then(e=>(e.type==="loaded"&&e.state.error&&(y=null),e))},y.promise}async function ae(...t){const r=l.filter(a=>t.some(s=>a.exec(s))).map(a=>Promise.all([...a.layouts,a.leaf].map(s=>s==null?void 0:s[1]())));await Promise.all(r)}async function Pe(t,e,r,a,s,i={},m){var b,g,I;Se=i;let d=t&&await Ue(t);if(!d){if(we(e,K))return await B(e);d=await je(e,{id:null},await X(new Error(`Not found: ${e.pathname}`),{url:e,params:{},route:{id:null}}),404)}if(e=(t==null?void 0:t.url)||e,Se!==i)return!1;if(d.type==="redirect")if(r.length>10||r.includes(e.pathname))d=await re({status:500,error:await X(new Error("Redirect loop"),{url:e,params:{},route:{id:null}}),url:e,route:{id:null}});else return ue(new URL(d.location,e).href,{},[...r,e.pathname],i),!1;else((b=d.props.page)==null?void 0:b.status)>=400&&await H.updated.check()&&await B(e);if(R.length=0,M=!1,$=!0,a&&(_e(a),Re(a)),(g=d.props.page)!=null&&g.url&&d.props.page.url.pathname!==e.pathname&&(e.pathname=(I=d.props.page)==null?void 0:I.url.pathname),s&&s.details){const{details:v}=s,L=v.replaceState?0:1;if(v.state[q]=x+=L,history[v.replaceState?"replaceState":"pushState"](v.state,"",e),!v.replaceState){let k=x+1;for(;Z[k]||z[k];)delete Z[k],delete z[k],k+=1}}if(y=null,P?(h=d.state,d.props.page&&(d.props.page.url=e),F.$set(d.props)):$e(d),s){const{scroll:v,keepfocus:L}=s,{activeElement:k}=document;if(await se(),E){const O=e.hash&&document.getElementById(decodeURIComponent(e.hash.slice(1)));v?scrollTo(v.x,v.y):O?O.scrollIntoView():scrollTo(0,0)}const _=document.activeElement!==k&&document.activeElement!==document.body;!L&&!_&&await be()}else await se();E=!0,d.props.page&&(V=d.props.page),m&&m(),$=!1}function $e(t){var a;h=t.state;const e=document.querySelector("style[data-sveltekit]");e&&e.remove(),V=t.props.page,F=new n.root({target:o,props:{...t.props,stores:H,components:u},hydrate:!0}),Ie(x);const r={from:null,to:{params:h.params,route:{id:((a=h.route)==null?void 0:a.id)??null},url:new URL(location.href)},willUnload:!1,type:"enter"};w.after_navigate.forEach(s=>s(r)),P=!0}async function W({url:t,params:e,branch:r,status:a,error:s,route:i,form:m}){let d="never";for(const k of r)(k==null?void 0:k.slash)!==void 0&&(d=k.slash);t.pathname=tt(t.pathname,d),t.search=t.search;const b={type:"loaded",state:{url:t,params:e,branch:r,error:s,route:i},props:{constructors:Lt(r).map(k=>k.node.component)}};m!==void 0&&(b.props.form=m);let g={},I=!V,v=0;for(let k=0;k<Math.max(r.length,h.branch.length);k+=1){const _=r[k],O=h.branch[k];(_==null?void 0:_.data)!==(O==null?void 0:O.data)&&(I=!0),_&&(g={...g,..._.data},I&&(b.props[`data_${v}`]=g),v+=1)}return(!h.url||t.href!==h.url.href||h.error!==s||m!==void 0&&m!==V.form||I)&&(b.props.page={error:s,params:e,route:{id:(i==null?void 0:i.id)??null},status:a,url:new URL(t),form:m??null,data:I?g:V.data}),b}async function de({loader:t,parent:e,url:r,params:a,route:s,server_data_node:i}){var g,I,v;let m=null;const d={dependencies:new Set,params:new Set,parent:!1,route:!1,url:!1},b=await t();if((g=b.universal)!=null&&g.load){let L=function(..._){for(const O of _){const{href:D}=new URL(O,r);d.dependencies.add(D)}};const k={route:{get id(){return d.route=!0,s.id}},params:new Proxy(a,{get:(_,O)=>(d.params.add(O),_[O])}),data:(i==null?void 0:i.data)??null,url:ot(r,()=>{d.url=!0}),async fetch(_,O){let D;_ instanceof Request?(D=_.url,O={body:_.method==="GET"||_.method==="HEAD"?void 0:await _.blob(),cache:_.cache,credentials:_.credentials,headers:_.headers,integrity:_.integrity,keepalive:_.keepalive,method:_.method,mode:_.mode,redirect:_.redirect,referrer:_.referrer,referrerPolicy:_.referrerPolicy,signal:_.signal,...O}):D=_;const C=new URL(D,r);return L(C.href),C.origin===r.origin&&(D=C.href.slice(r.origin.length)),P?ut(D,C.href,O):ft(D,O)},setHeaders:()=>{},depends:L,parent(){return d.parent=!0,e()}};m=await b.universal.load.call(null,k)??null,m=m?await yt(m):null}return{node:b,loader:t,server:i,universal:(I=b.universal)!=null&&I.load?{type:"data",data:m,uses:d}:null,data:m??(i==null?void 0:i.data)??null,slash:((v=b.universal)==null?void 0:v.trailingSlash)??(i==null?void 0:i.slash)}}function Oe(t,e,r,a,s){if(M)return!0;if(!a)return!1;if(a.parent&&t||a.route&&e||a.url&&r)return!0;for(const i of a.params)if(s[i]!==h.params[i])return!0;for(const i of a.dependencies)if(R.some(m=>m(new URL(i))))return!0;return!1}function pe(t,e){return(t==null?void 0:t.type)==="data"?t:(t==null?void 0:t.type)==="skip"?e??null:null}async function Ue({id:t,invalidating:e,url:r,params:a,route:s}){if((y==null?void 0:y.id)===t)return y.promise;const{errors:i,layouts:m,leaf:d}=s,b=[...m,d];i.forEach(S=>S==null?void 0:S().catch(()=>{})),b.forEach(S=>S==null?void 0:S[1]().catch(()=>{}));let g=null;const I=h.url?t!==h.url.pathname+h.url.search:!1,v=h.route?s.id!==h.route.id:!1;let L=!1;const k=b.map((S,N)=>{var G;const U=h.branch[N],T=!!(S!=null&&S[0])&&((U==null?void 0:U.loader)!==S[1]||Oe(L,v,I,(G=U.server)==null?void 0:G.uses,a));return T&&(L=!0),T});if(k.some(Boolean)){try{g=await Ke(r,k)}catch(S){return re({status:S instanceof ee?S.status:500,error:await X(S,{url:r,params:a,route:{id:s.id}}),url:r,route:s})}if(g.type==="redirect")return g}const _=g==null?void 0:g.nodes;let O=!1;const D=b.map(async(S,N)=>{var he;if(!S)return;const U=h.branch[N],T=_==null?void 0:_[N];if((!T||T.type==="skip")&&S[1]===(U==null?void 0:U.loader)&&!Oe(O,v,I,(he=U.universal)==null?void 0:he.uses,a))return U;if(O=!0,(T==null?void 0:T.type)==="error")throw T;return de({loader:S[1],url:r,params:a,route:s,parent:async()=>{var Ce;const De={};for(let me=0;me<N;me+=1)Object.assign(De,(Ce=await D[me])==null?void 0:Ce.data);return De},server_data_node:pe(T===void 0&&S[0]?{type:"skip"}:T??null,S[0]?U==null?void 0:U.server:void 0)})});for(const S of D)S.catch(()=>{});const C=[];for(let S=0;S<b.length;S+=1)if(b[S])try{C.push(await D[S])}catch(N){if(N instanceof Ve)return{type:"redirect",location:N.location};let U=500,T;if(_!=null&&_.includes(N))U=N.status??U,T=N.error;else if(N instanceof ee)U=N.status,T=N.body;else{if(await H.updated.check())return await B(r);T=await X(N,{params:a,url:r,route:{id:s.id}})}const G=await xe(S,C,i);return G?await W({url:r,params:a,branch:C.slice(0,G.idx).concat(G.node),status:U,error:T,route:s}):await je(r,{id:s.id},T,U)}else C.push(void 0);return await W({url:r,params:a,branch:C,status:200,error:null,route:s,form:e?void 0:null})}async function xe(t,e,r){for(;t--;)if(r[t]){let a=t;for(;!e[a];)a-=1;try{return{idx:a+1,node:{node:await r[t](),loader:r[t],data:{},server:null,universal:null}}}catch{continue}}}async function re({status:t,error:e,url:r,route:a}){const s={};let i=null;if(n.server_loads[0]===0)try{const g=await Ke(r,[!0]);if(g.type!=="data"||g.nodes[0]&&g.nodes[0].type!=="data")throw 0;i=g.nodes[0]??null}catch{(r.origin!==location.origin||r.pathname!==location.pathname||j)&&await B(r)}const d=await de({loader:c,url:r,params:s,route:a,parent:()=>Promise.resolve({}),server_data_node:pe(i)}),b={node:await f(),loader:f,universal:null,server:null,data:null};return await W({url:r,params:s,branch:[d,b],status:t,error:e,route:null})}function Y(t,e){if(we(t,K))return;const r=oe(t);for(const a of l){const s=a.exec(r);if(s)return{id:t.pathname+t.search,invalidating:e,route:a,params:at(s),url:t}}}function oe(t){return nt(t.pathname.slice(K.length)||"/")}function Te({url:t,type:e,intent:r,delta:a}){var d,b;let s=!1;const i={from:{params:h.params,route:{id:((d=h.route)==null?void 0:d.id)??null},url:h.url},to:{params:(r==null?void 0:r.params)??null,route:{id:((b=r==null?void 0:r.route)==null?void 0:b.id)??null},url:t},willUnload:!r,type:e};a!==void 0&&(i.delta=a);const m={...i,cancel:()=>{s=!0}};return A||w.before_navigate.forEach(g=>g(m)),s?null:i}async function ie({url:t,scroll:e,keepfocus:r,redirect_chain:a,details:s,type:i,delta:m,nav_token:d,accepted:b,blocked:g}){const I=Y(t,!1),v=Te({url:t,type:i,delta:m,intent:I});if(!v){g();return}const L=x;b(),A=!0,P&&H.navigating.set(v),await Pe(I,t,a,L,{scroll:e,keepfocus:r,details:s},d,()=>{A=!1,w.after_navigate.forEach(k=>k(v)),H.navigating.set(null)})}async function je(t,e,r,a){return t.origin===location.origin&&t.pathname===location.pathname&&!j?await re({status:a,error:r,url:t,route:e}):await B(t)}function B(t){return location.href=t.href,new Promise(()=>{})}function Qe(){let t;p.addEventListener("mousemove",i=>{const m=i.target;clearTimeout(t),t=setTimeout(()=>{a(m,2)},20)});function e(i){a(i.composedPath()[0],1)}p.addEventListener("mousedown",e),p.addEventListener("touchstart",e,{passive:!0});const r=new IntersectionObserver(i=>{for(const m of i)m.isIntersecting&&(ae(oe(new URL(m.target.href))),r.unobserve(m.target))},{threshold:0});function a(i,m){const d=He(i,p);if(!d)return;const{url:b,external:g,download:I}=ge(d,K);if(g||I)return;const v=ce(d);if(!v.reload)if(m<=v.preload_data){const L=Y(b,!1);L&&Ae(L)}else m<=v.preload_code&&ae(oe(b))}function s(){r.disconnect();for(const i of p.querySelectorAll("a")){const{url:m,external:d,download:b}=ge(i,K);if(d||b)continue;const g=ce(i);g.reload||(g.preload_code===Me.viewport&&r.observe(i),g.preload_code===Me.eager&&ae(oe(m)))}}w.after_navigate.push(s),s()}function X(t,e){return t instanceof ee?t.body:n.hooks.handleError({error:t,event:e})??{message:e.route.id!=null?"Internal Error":"Not Found"}}return{after_navigate:t=>{qe(()=>(w.after_navigate.push(t),()=>{const e=w.after_navigate.indexOf(t);w.after_navigate.splice(e,1)}))},before_navigate:t=>{qe(()=>(w.before_navigate.push(t),()=>{const e=w.before_navigate.indexOf(t);w.before_navigate.splice(e,1)}))},disable_scroll_handling:()=>{($||!P)&&(E=!1)},goto:(t,e={})=>ue(t,e,[]),invalidate:t=>{if(typeof t=="function")R.push(t);else{const{href:e}=new URL(t,location.href);R.push(r=>r.href===e)}return ke()},invalidateAll:()=>(M=!0,ke()),preload_data:async t=>{const e=new URL(t,Fe(document)),r=Y(e,!1);if(!r)throw new Error(`Attempted to preload a URL that does not belong to this app: ${e}`);await Ae(r)},preload_code:ae,apply_action:async t=>{if(t.type==="error"){const e=new URL(location.href),{branch:r,route:a}=h;if(!a)return;const s=await xe(h.branch.length,r,a.errors);if(s){const i=await W({url:e,params:h.params,branch:r.slice(0,s.idx).concat(s.node),status:t.status??500,error:t.error,route:a});h=i.state,F.$set(i.props),se().then(be)}}else t.type==="redirect"?ue(t.location,{invalidateAll:!0},[]):(F.$set({form:null,page:{...V,form:t.data,status:t.status}}),await se(),F.$set({form:t.data}),t.type==="success"&&be())},_start_router:()=>{var t;history.scrollRestoration="manual",addEventListener("beforeunload",e=>{var a;let r=!1;if(Le(),!A){const s={from:{params:h.params,route:{id:((a=h.route)==null?void 0:a.id)??null},url:h.url},to:null,willUnload:!0,type:"leave",cancel:()=>r=!0};w.before_navigate.forEach(i=>i(s))}r?(e.preventDefault(),e.returnValue=""):history.scrollRestoration="auto"}),addEventListener("visibilitychange",()=>{document.visibilityState==="hidden"&&Le()}),(t=navigator.connection)!=null&&t.saveData||Qe(),p.addEventListener("click",e=>{if(e.button||e.which!==1||e.metaKey||e.ctrlKey||e.shiftKey||e.altKey||e.defaultPrevented)return;const r=He(e.composedPath()[0],p);if(!r)return;const{url:a,external:s,target:i,download:m}=ge(r,K);if(!a)return;if(i==="_parent"||i==="_top"){if(window.parent!==window)return}else if(i&&i!=="_self")return;const d=ce(r);if(!(r instanceof SVGAElement)&&a.protocol!==location.protocol&&!(a.protocol==="https:"||a.protocol==="http:")||m)return;if(s||d.reload){Te({url:a,type:"link"})?A=!0:e.preventDefault();return}const[g,I]=a.href.split("#");if(I!==void 0&&g===location.href.split("#")[0]){J=!0,_e(x),h.url=a,H.page.set({...V,url:a}),H.page.notify();return}ie({url:a,scroll:d.noscroll?Q():null,keepfocus:d.keep_focus??!1,redirect_chain:[],details:{state:{},replaceState:d.replace_state??a.href===location.href},accepted:()=>e.preventDefault(),blocked:()=>e.preventDefault(),type:"link"})}),p.addEventListener("submit",e=>{if(e.defaultPrevented)return;const r=HTMLFormElement.prototype.cloneNode.call(e.target),a=e.submitter;if(((a==null?void 0:a.formMethod)||r.method)!=="get")return;const i=new URL((a==null?void 0:a.hasAttribute("formaction"))&&(a==null?void 0:a.formAction)||r.action);if(we(i,K))return;const m=e.target,{keep_focus:d,noscroll:b,reload:g,replace_state:I}=ce(m);if(g)return;e.preventDefault(),e.stopPropagation();const v=new FormData(m),L=a==null?void 0:a.getAttribute("name");L&&v.append(L,(a==null?void 0:a.getAttribute("value"))??""),i.search=new URLSearchParams(v).toString(),ie({url:i,scroll:b?Q():null,keepfocus:d??!1,redirect_chain:[],details:{state:{},replaceState:I??i.href===location.href},nav_token:{},accepted:()=>{},blocked:()=>{},type:"form"})}),addEventListener("popstate",async e=>{var r;if((r=e.state)!=null&&r[q]){if(e.state[q]===x)return;const a=z[e.state[q]];if(h.url.href.split("#")[0]===location.href.split("#")[0]){z[x]=Q(),x=e.state[q],scrollTo(a.x,a.y);return}const s=e.state[q]-x;let i=!1;await ie({url:new URL(location.href),scroll:a,keepfocus:!1,redirect_chain:[],details:null,accepted:()=>{x=e.state[q]},blocked:()=>{history.go(-s),i=!0},type:"popstate",delta:s}),i||Ie(x)}}),addEventListener("hashchange",()=>{J&&(J=!1,history.replaceState({...history.state,[q]:++x},"",location.href))});for(const e of document.querySelectorAll("link"))e.rel==="icon"&&(e.href=e.href);addEventListener("pageshow",e=>{e.persisted&&H.navigating.set(null)})},_hydrate:async({status:t=200,error:e,node_ids:r,params:a,route:s,data:i,form:m})=>{j=!0;const d=new URL(location.href);({params:a={},route:s={id:null}}=Y(d,!1)||{});let b;try{const g=r.map(async(I,v)=>{const L=i[v];return L!=null&&L.uses&&(L.uses=Ze(L.uses)),de({loader:n.nodes[I],url:d,params:a,route:s,parent:async()=>{const k={};for(let _=0;_<v;_+=1)Object.assign(k,(await g[_]).data);return k},server_data_node:pe(L)})});b=await W({url:d,params:a,branch:await Promise.all(g),status:t,error:e,form:m,route:l.find(({id:I})=>I===s.id)??null})}catch(g){if(g instanceof Ve){await B(new URL(g.location,location.href));return}b=await re({status:g instanceof ee?g.status:500,error:await X(g,{url:d,params:a,route:s}),url:d,route:s})}$e(b)}}}async function Ke(n,o){const l=new URL(n);l.pathname=ct(n.pathname),l.searchParams.append("x-sveltekit-invalidated",o.map(f=>f?"1":"").join("_"));const c=await le(l.href);if(!c.ok)throw new ee(c.status,await c.json());return new Promise(async f=>{var h;const p=new Map,R=c.body.getReader(),u=new TextDecoder;function y(j){return Rt(j,{Promise:P=>new Promise((E,$)=>{p.set(P,{fulfil:E,reject:$})})})}let w="";for(;;){const{done:j,value:P}=await R.read();if(j&&!w)break;for(w+=!P&&w?`
`:u.decode(P);;){const E=w.indexOf(`
`);if(E===-1)break;const $=JSON.parse(w.slice(0,E));if(w=w.slice(E+1),$.type==="redirect")return f($);if($.type==="data")(h=$.nodes)==null||h.forEach(A=>{(A==null?void 0:A.type)==="data"&&(A.uses=Ze(A.uses),A.data=y(A.data))}),f($);else if($.type==="chunk"){const{id:A,data:J,error:M}=$,F=p.get(A);p.delete(A),M?F.reject(y(M)):F.fulfil(y(J))}}}})}function Ze(n){return{dependencies:new Set((n==null?void 0:n.dependencies)??[]),params:new Set((n==null?void 0:n.params)??[]),parent:!!(n!=null&&n.parent),route:!!(n!=null&&n.route),url:!!(n!=null&&n.url)}}function be(){const n=document.querySelector("[autofocus]");if(n)n.focus();else{const o=document.body,l=o.getAttribute("tabindex");return o.tabIndex=-1,o.focus({preventScroll:!0}),l!==null?o.setAttribute("tabindex",l):o.removeAttribute("tabindex"),new Promise(c=>{setTimeout(()=>{var f;c((f=getSelection())==null?void 0:f.removeAllRanges())})})}}async function xt(n,o,l){const c=At(n,o);et({client:c}),l?await c._hydrate(l):c.goto(location.href,{replaceState:!0}),c._start_router()}export{xt as start};