import{g as s,F as m,t as u}from"./model.74c335c3.js";import{b as p}from"./paths.15338dda.js";import{u as c,S as h}from"./_commonjsHelpers.57679180.js";const U=s(u.APP_TITLE,"GraphQL Documentation"),f=y().concat(m());w(f);const d=Object.freeze(f),x=P();function y(){return s(u.PAGES,b()).filter(t=>!!t).map(t=>g([],t))}function P(){const e=v();if(e)return e.href;throw new Error("No custom pages or query available to use as the root application URL. You need to provide at least one custom page or your schema should contain at least one query/mutation/subscription.")}function w(e){function t(o,i){for(const r of o){if(r.type==="page"){i(r);continue}r.type==="menu"&&t(r.children,i)}}let n;t(e,o=>{n&&(n.next={title:o.title,section:o.section,href:o.href},o.previous={title:n.title,section:n.section,href:n.href}),n=o})}function v(){return l(()=>!0)}function E(e){return l(t=>t.href.toLocaleLowerCase()===e.toLocaleLowerCase())}function l(e){function t(n){for(const o of n){if(o.type==="page"&&e(o))return o;if(o.type==="menu"){const i=t(o.children);if(i)return i}}return null}return t(d)}function g(e,t){if(typeof t.content=="string")return{type:"page",title:t.title,content:t.content,href:c.joinUrlPaths(p,...e,a(t.title))};const n=e.concat([a(t.title)]);return{type:"menu",title:t.title,children:t.content.map(o=>({...g(n,o),section:t.title}))}}function a(e){return c.generatePathSegment(e,new h)}function b(){return[{title:"Introduction",content:[{title:"Welcome",content:`
        # Welcome 🎉

        [Congratulations!](https://www.youtube.com/watch?v=1Bix44C1EzY) You have successfully created your first Magidoc website.

        Now that you are up and running, you can customize this website even further by providing some configuration inside your [magidoc.mjs ⚙️](https://magidoc.js.org/cli/magidoc-configuration). 
        If you wish to remove or modify this page, have a look at the *customPages* configuration.
        `.split(`
`).map(e=>e.trim()).join(`
`)}]}]}export{U as a,E as f,x as h,d as p};