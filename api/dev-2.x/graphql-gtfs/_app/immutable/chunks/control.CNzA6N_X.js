var r;const o=((r=globalThis.__sveltekit_hbmp8w)==null?void 0:r.base)??"/api/dev-2.x/graphql-gtfs";var i;const h=((i=globalThis.__sveltekit_hbmp8w)==null?void 0:i.assets)??o;class l{constructor(t,s){this.status=t,typeof s=="string"?this.body={message:s}:s?this.body=s:this.body={message:`Error: ${t}`}}toString(){return JSON.stringify(this.body)}}class c{constructor(t,s){this.status=t,this.location=s}}class n extends Error{constructor(t,s,a){super(a),this.status=t,this.text=s}}export{l as H,c as R,n as S,h as a,o as b};
