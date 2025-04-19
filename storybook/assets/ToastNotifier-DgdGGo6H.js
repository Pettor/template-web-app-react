import{j as te}from"./jsx-runtime-D_zvdyIk.js";import{g as le}from"./index-D9WrIkEy.js";import{r as R,R as de}from"./index-F2Fta7eo.js";import{T as ue}from"./Toast-99C2H297.js";const N={},Y=(e,n)=>e.unstable_is?e.unstable_is(n):n===e,Z=e=>"init"in e,G=e=>!!e.write,B=e=>"v"in e||"e"in e,V=e=>{if("e"in e)throw e.e;if((N?"production":void 0)!=="production"&&!("v"in e))throw new Error("[Bug] atom state is not initialized");return e.v},M=new WeakMap,H=e=>{var n;return U(e)&&!!((n=M.get(e))!=null&&n[0])},ae=e=>{const n=M.get(e);n!=null&&n[0]&&(n[0]=!1,n[1].forEach(t=>t()))},ne=(e,n)=>{let t=M.get(e);if(!t){t=[!0,new Set],M.set(e,t);const o=()=>{t[0]=!1};e.then(o,o)}t[1].add(n)},U=e=>typeof(e==null?void 0:e.then)=="function",re=(e,n,t)=>{t.p.has(e)||(t.p.add(e),n.then(()=>{t.p.delete(e)},()=>{t.p.delete(e)}))},K=(e,n,t)=>{const o=t(e),v="v"in o,d=o.v;if(U(n))for(const u of o.d.keys())re(e,n,t(u));o.v=n,delete o.e,(!v||!Object.is(d,o.v))&&(++o.n,U(d)&&ae(d))},m=(e,n,t)=>{var o;const v=new Set;for(const d of((o=t.get(e))==null?void 0:o.t)||[])t.has(d)&&v.add(d);for(const d of n.p)v.add(d);return v},fe=()=>{const e=new Set,n=()=>{e.forEach(t=>t())};return n.add=t=>(e.add(t),()=>{e.delete(t)}),n},q=()=>{const e={},n=new WeakMap,t=o=>{var v,d;(v=n.get(e))==null||v.forEach(u=>u(o)),(d=n.get(o))==null||d.forEach(u=>u())};return t.add=(o,v)=>{const d=o||e,u=(n.has(d)?n:n.set(d,new Set)).get(d);return u.add(v),()=>{u==null||u.delete(v),u.size||n.delete(d)}},t},ve=e=>(e.c||(e.c=q()),e.m||(e.m=q()),e.u||(e.u=q()),e.f||(e.f=fe()),e),he=Symbol(),_e=(e=new WeakMap,n=new WeakMap,t=new WeakMap,o=new Set,v=new Set,d=new Set,u={},_=(h,...g)=>h.read(...g),p=(h,...g)=>h.write(...g),f=(h,g)=>{var E;return(E=h.unstable_onInit)==null?void 0:E.call(h,g)},b=(h,g)=>{var E;return(E=h.onMount)==null?void 0:E.call(h,g)},...A)=>{const h=A[0]||(r=>{if((N?"production":void 0)!=="production"&&!r)throw new Error("Atom is undefined or null");let a=e.get(r);return a||(a={d:new Map,p:new Set,n:0},e.set(r,a),f==null||f(r,$)),a}),g=A[1]||(()=>{const r=[],a=l=>{try{l()}catch(s){r.push(s)}};do{u.f&&a(u.f);const l=new Set,s=l.add.bind(l);o.forEach(i=>{var c;return(c=n.get(i))==null?void 0:c.l.forEach(s)}),o.clear(),d.forEach(s),d.clear(),v.forEach(s),v.clear(),l.forEach(a),o.size&&E()}while(o.size||d.size||v.size);if(r.length)throw new AggregateError(r)}),E=A[2]||(()=>{const r=[],a=new WeakSet,l=new WeakSet,s=Array.from(o);for(;s.length;){const i=s[s.length-1],c=h(i);if(l.has(i)){s.pop();continue}if(a.has(i)){if(t.get(i)===c.n)r.push([i,c]);else if((N?"production":void 0)!=="production"&&t.has(i))throw new Error("[Bug] invalidated atom exists");l.add(i),s.pop();continue}a.add(i);for(const S of m(i,c,n))a.has(S)||s.push(S)}for(let i=r.length-1;i>=0;--i){const[c,S]=r[i];let y=!1;for(const P of S.d.keys())if(P!==c&&o.has(P)){y=!0;break}y&&(T(c),L(c)),t.delete(c)}}),T=A[3]||(r=>{var a;const l=h(r);if(B(l)&&(n.has(r)&&t.get(r)!==l.n||Array.from(l.d).every(([w,O])=>T(w).n===O)))return l;l.d.clear();let s=!0;const i=()=>{n.has(r)&&(L(r),E(),g())},c=w=>{var O;if(Y(r,w)){const X=h(w);if(!B(X))if(Z(w))K(w,w.init,h);else throw new Error("no atom init");return V(X)}const k=T(w);try{return V(k)}finally{l.d.set(w,k.n),H(l.v)&&re(r,l.v,k),(O=n.get(w))==null||O.t.add(r),s||i()}};let S,y;const P={get signal(){return S||(S=new AbortController),S.signal},get setSelf(){return(N?"production":void 0)!=="production"&&!G(r)&&console.warn("setSelf function cannot be used with read-only atom"),!y&&G(r)&&(y=(...w)=>{if((N?"production":void 0)!=="production"&&s&&console.warn("setSelf function cannot be called in sync"),!s)try{return D(r,...w)}finally{E(),g()}}),y}},z=l.n;try{const w=_(r,c,P);return K(r,w,h),U(w)&&(ne(w,()=>S==null?void 0:S.abort()),w.then(i,i)),l}catch(w){return delete l.v,l.e=w,++l.n,l}finally{s=!1,z!==l.n&&t.get(r)===z&&(t.set(r,l.n),o.add(r),(a=u.c)==null||a.call(u,r))}}),J=A[4]||(r=>{const a=[r];for(;a.length;){const l=a.pop(),s=h(l);for(const i of m(l,s,n)){const c=h(i);t.set(i,c.n),a.push(i)}}}),D=A[5]||((r,...a)=>{let l=!0;const s=c=>V(T(c)),i=(c,...S)=>{var y;const P=h(c);try{if(Y(r,c)){if(!Z(c))throw new Error("atom not writable");const z=P.n,w=S[0];K(c,w,h),L(c),z!==P.n&&(o.add(c),(y=u.c)==null||y.call(u,c),J(c));return}else return D(c,...S)}finally{l||(E(),g())}};try{return p(r,s,i,...a)}finally{l=!1}}),L=A[6]||(r=>{var a;const l=h(r),s=n.get(r);if(s&&!H(l.v)){for(const[i,c]of l.d)if(!s.d.has(i)){const S=h(i);W(i).t.add(r),s.d.add(i),c!==S.n&&(o.add(i),(a=u.c)==null||a.call(u,i),J(i))}for(const i of s.d||[])if(!l.d.has(i)){s.d.delete(i);const c=j(i);c==null||c.t.delete(r)}}}),W=A[7]||(r=>{var a;const l=h(r);let s=n.get(r);if(!s){T(r);for(const i of l.d.keys())W(i).t.add(r);if(s={l:new Set,d:new Set(l.d.keys()),t:new Set},n.set(r,s),(a=u.m)==null||a.call(u,r),G(r)){const i=()=>{let c=!0;const S=(...y)=>{try{return D(r,...y)}finally{c||(E(),g())}};try{const y=b(r,S);y&&(s.u=()=>{c=!0;try{y()}finally{c=!1}})}finally{c=!1}};v.add(i)}}return s}),j=A[8]||(r=>{var a;const l=h(r);let s=n.get(r);if(s&&!s.l.size&&!Array.from(s.t).some(i=>{var c;return(c=n.get(i))==null?void 0:c.d.has(r)})){s.u&&d.add(s.u),s=void 0,n.delete(r),(a=u.u)==null||a.call(u,r);for(const i of l.d.keys()){const c=j(i);c==null||c.t.delete(r)}return}return s}),ce=[e,n,t,o,v,d,u,_,p,f,b,h,g,E,T,J,D,L,W,j],$={get:r=>V(T(r)),set:(r,...a)=>{try{return D(r,...a)}finally{E(),g()}},sub:(r,a)=>{const s=W(r).l;return s.add(a),g(),()=>{s.delete(a),j(r),g()}}};return Object.defineProperty($,he,{value:ce}),$},oe=_e,we=ve,ee=ne,Q={};let Se=0;function C(e,n){const t=`atom${++Se}`,o={toString(){return(Q?"production":void 0)!=="production"&&this.debugLabel?t+":"+this.debugLabel:t}};return typeof e=="function"?o.read=e:(o.init=e,o.read=ge,o.write=ye),n&&(o.write=n),o}function ge(e){return e(this)}function ye(e,n,t){return n(this,typeof t=="function"?t(e(this)):t)}const pe=()=>{let e=0;const n=we({}),t=new WeakMap,o=new WeakMap,v=oe(t,o,void 0,void 0,void 0,void 0,n,void 0,(_,p,f,...b)=>e?f(_,...b):_.write(p,f,...b)),d=new Set;return n.m.add(void 0,_=>{d.add(_);const p=t.get(_);p.m=o.get(_)}),n.u.add(void 0,_=>{d.delete(_);const p=t.get(_);delete p.m}),Object.assign(v,{dev4_get_internal_weak_map:()=>t,dev4_get_mounted_atoms:()=>d,dev4_restore_atoms:_=>{const p={read:()=>null,write:(f,b)=>{++e;try{for(const[A,h]of _)"init"in A&&b(A,h)}finally{--e}}};v.set(p)}})};function be(){return(Q?"production":void 0)!=="production"?pe():oe()}let I;function Ee(){return I||(I=be(),(Q?"production":void 0)!=="production"&&(globalThis.__JOTAI_DEFAULT_STORE__||(globalThis.__JOTAI_DEFAULT_STORE__=I),globalThis.__JOTAI_DEFAULT_STORE__!==I&&console.warn("Detected multiple Jotai instances. It may cause unexpected behavior with the default store. https://github.com/pmndrs/jotai/discussions/2044"))),I}const Ae={},Te=R.createContext(void 0);function ie(e){return R.useContext(Te)||Ee()}const se=e=>typeof(e==null?void 0:e.then)=="function",Pe=e=>{e.status="pending",e.then(n=>{e.status="fulfilled",e.value=n},n=>{e.status="rejected",e.reason=n})},Re=de.use||(e=>{if(e.status==="pending")throw e;if(e.status==="fulfilled")return e.value;throw e.status==="rejected"?e.reason:(Pe(e),e)}),F=new WeakMap,De=(e,n)=>{let t=F.get(e);return t||(t=new Promise((o,v)=>{let d=e;const u=f=>b=>{d===f&&o(b)},_=f=>b=>{d===f&&v(b)},p=()=>{try{const f=n();se(f)?(F.set(f,t),d=f,f.then(u(f),_(f)),ee(f,p)):o(f)}catch(f){v(f)}};e.then(u(e),_(e)),ee(e,p)}),F.set(e,t)),t};function Ie(e,n){const t=ie(),[[o,v,d],u]=R.useReducer(f=>{const b=t.get(e);return Object.is(f[0],b)&&f[1]===t&&f[2]===e?f:[b,t,e]},void 0,()=>[t.get(e),t,e]);let _=o;if((v!==t||d!==e)&&(u(),_=t.get(e)),R.useEffect(()=>{const f=t.sub(e,()=>{u()});return u(),f},[t,e,void 0]),R.useDebugValue(_),se(_)){const f=De(_,()=>t.get(e));return Re(f)}return _}function ze(e,n){const t=ie();return R.useCallback((...v)=>{if((Ae?"production":void 0)!=="production"&&!("write"in e))throw new Error("not writable atom");return t.set(e,...v)},[t,e])}const x=C([]);C(e=>e(x).length);const Oe=C(null,(e,n,t)=>{const o=le().randomUUID();n(x,v=>[...v,te.jsx(ue,{message:t,severity:"info",onClose:()=>n(x,d=>[...d.filter(u=>u.key!==o)]),disablePosition:!0},o)])});C(null,(e,n)=>n(x,[]));function Ne(){const e=Ie(x);return te.jsx("div",{className:"stack absolute right-5 bottom-5",children:e})}Ne.__docgenInfo={description:"",methods:[],displayName:"ToastNotifier"};export{Ne as T,Oe as t,ze as u};
//# sourceMappingURL=ToastNotifier-DgdGGo6H.js.map
