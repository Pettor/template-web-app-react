import{j as De,R as P}from"./index-ZvW-TPdr.js";import{c as He}from"./InputField-BMFLxxTU.js";function Jt({loading:e,children:s,...r}){return De.jsxs("button",{...r,children:[De.jsx("span",{className:He(e?"opacity-100":"opacity-0","loading loading-spinner absolute transition-opacity")}),De.jsx("span",{className:He(e?"opacity-0":"opacity-100","transition-opacity"),children:s})]})}var fe=e=>e.type==="checkbox",te=e=>e instanceof Date,R=e=>e==null;const at=e=>typeof e=="object";var S=e=>!R(e)&&!Array.isArray(e)&&at(e)&&!te(e),Dt=e=>S(e)&&e.target?fe(e.target)?e.target.checked:e.target.value:e,kt=e=>e.substring(0,e.search(/\.\d+(\.|$)/))||e,St=(e,s)=>e.has(kt(s)),Et=e=>{const s=e.constructor&&e.constructor.prototype;return S(s)&&s.hasOwnProperty("isPrototypeOf")},Ee=typeof window<"u"&&typeof window.HTMLElement<"u"&&typeof document<"u";function p(e){let s;const r=Array.isArray(e),a=typeof FileList<"u"?e instanceof FileList:!1;if(e instanceof Date)s=new Date(e);else if(e instanceof Set)s=new Set(e);else if(!(Ee&&(e instanceof Blob||a))&&(r||S(e)))if(s=r?[]:{},!r&&!Et(e))s=e;else for(const u in e)e.hasOwnProperty(u)&&(s[u]=p(e[u]));else return e;return s}var be=e=>Array.isArray(e)?e.filter(Boolean):[],O=e=>e===void 0,y=(e,s,r)=>{if(!s||!S(e))return r;const a=be(s.split(/[,[\].]+?/)).reduce((u,l)=>R(u)?u:u[l],e);return O(a)||a===e?O(e[s])?r:e[s]:a},H=e=>typeof e=="boolean",Oe=e=>/^\w*$/.test(e),nt=e=>be(e.replace(/["|']|\]/g,"").split(/\.|\[/)),m=(e,s,r)=>{let a=-1;const u=Oe(s)?[s]:nt(s),l=u.length,c=l-1;for(;++a<l;){const g=u[a];let x=r;if(a!==c){const D=e[g];x=S(D)||Array.isArray(D)?D:isNaN(+u[a+1])?{}:[]}if(g==="__proto__"||g==="constructor"||g==="prototype")return;e[g]=x,e=e[g]}};const $e={BLUR:"blur",FOCUS_OUT:"focusout"},I={onBlur:"onBlur",onChange:"onChange",onSubmit:"onSubmit",onTouched:"onTouched",all:"all"},Q={max:"max",min:"min",maxLength:"maxLength",minLength:"minLength",pattern:"pattern",required:"required",validate:"validate"};P.createContext(null);var Ot=(e,s,r,a=!0)=>{const u={defaultValues:s._defaultValues};for(const l in e)Object.defineProperty(u,l,{get:()=>{const c=l;return s._proxyFormState[c]!==I.all&&(s._proxyFormState[c]=!a||I.all),e[c]}});return u},$=e=>typeof e=="string",Tt=(e,s,r,a,u)=>$(e)?(a&&s.watch.add(e),y(r,e,u)):Array.isArray(e)?e.map(l=>(a&&s.watch.add(l),y(r,l))):(a&&(s.watchAll=!0),r),lt=(e,s,r,a,u)=>s?{...r[e],types:{...r[e]&&r[e].types?r[e].types:{},[a]:u||!0}}:{},ue=e=>Array.isArray(e)?e:[e],Ke=()=>{let e=[];return{get observers(){return e},next:u=>{for(const l of e)l.next&&l.next(u)},subscribe:u=>(e.push(u),{unsubscribe:()=>{e=e.filter(l=>l!==u)}}),unsubscribe:()=>{e=[]}}},Se=e=>R(e)||!at(e);function G(e,s){if(Se(e)||Se(s))return e===s;if(te(e)&&te(s))return e.getTime()===s.getTime();const r=Object.keys(e),a=Object.keys(s);if(r.length!==a.length)return!1;for(const u of r){const l=e[u];if(!a.includes(u))return!1;if(u!=="ref"){const c=s[u];if(te(l)&&te(c)||S(l)&&S(c)||Array.isArray(l)&&Array.isArray(c)?!G(l,c):l!==c)return!1}}return!0}var U=e=>S(e)&&!Object.keys(e).length,Te=e=>e.type==="file",j=e=>typeof e=="function",he=e=>{if(!Ee)return!1;const s=e?e.ownerDocument:0;return e instanceof(s&&s.defaultView?s.defaultView.HTMLElement:HTMLElement)},ut=e=>e.type==="select-multiple",Le=e=>e.type==="radio",Lt=e=>Le(e)||fe(e),ke=e=>he(e)&&e.isConnected;function Ct(e,s){const r=s.slice(0,-1).length;let a=0;for(;a<r;)e=O(e)?a++:e[s[a++]];return e}function pt(e){for(const s in e)if(e.hasOwnProperty(s)&&!O(e[s]))return!1;return!0}function T(e,s){const r=Array.isArray(s)?s:Oe(s)?[s]:nt(s),a=r.length===1?e:Ct(e,r),u=r.length-1,l=r[u];return a&&delete a[l],u!==0&&(S(a)&&U(a)||Array.isArray(a)&&pt(a))&&T(e,r.slice(0,-1)),e}var ot=e=>{for(const s in e)if(j(e[s]))return!0;return!1};function ge(e,s={}){const r=Array.isArray(e);if(S(e)||r)for(const a in e)Array.isArray(e[a])||S(e[a])&&!ot(e[a])?(s[a]=Array.isArray(e[a])?[]:{},ge(e[a],s[a])):R(e[a])||(s[a]=!0);return s}function ft(e,s,r){const a=Array.isArray(e);if(S(e)||a)for(const u in e)Array.isArray(e[u])||S(e[u])&&!ot(e[u])?O(s)||Se(r[u])?r[u]=Array.isArray(e[u])?ge(e[u],[]):{...ge(e[u])}:ft(e[u],R(s)?{}:s[u],r[u]):r[u]=!G(e[u],s[u]);return r}var ne=(e,s)=>ft(e,s,ge(s));const ze={value:!1,isValid:!1},Ye={value:!0,isValid:!0};var ct=e=>{if(Array.isArray(e)){if(e.length>1){const s=e.filter(r=>r&&r.checked&&!r.disabled).map(r=>r.value);return{value:s,isValid:!!s.length}}return e[0].checked&&!e[0].disabled?e[0].attributes&&!O(e[0].attributes.value)?O(e[0].value)||e[0].value===""?Ye:{value:e[0].value,isValid:!0}:Ye:ze}return ze},dt=(e,{valueAsNumber:s,valueAsDate:r,setValueAs:a})=>O(e)?e:s?e===""?NaN:e&&+e:r&&$(e)?new Date(e):a?a(e):e;const Je={isValid:!1,value:null};var yt=e=>Array.isArray(e)?e.reduce((s,r)=>r&&r.checked&&!r.disabled?{isValid:!0,value:r.value}:s,Je):Je;function Qe(e){const s=e.ref;return Te(s)?s.files:Le(s)?yt(e.refs).value:ut(s)?[...s.selectedOptions].map(({value:r})=>r):fe(s)?ct(e.refs).value:dt(O(s.value)?e.ref.value:s.value,e)}var Ut=(e,s,r,a)=>{const u={};for(const l of e){const c=y(s,l);c&&m(u,l,c._f)}return{criteriaMode:r,names:[...e],fields:u,shouldUseNativeValidation:a}},ve=e=>e instanceof RegExp,le=e=>O(e)?e:ve(e)?e.source:S(e)?ve(e.value)?e.value.source:e.value:e,Xe=e=>({isOnSubmit:!e||e===I.onSubmit,isOnBlur:e===I.onBlur,isOnChange:e===I.onChange,isOnAll:e===I.all,isOnTouch:e===I.onTouched});const Ze="AsyncFunction";var Rt=e=>!!e&&!!e.validate&&!!(j(e.validate)&&e.validate.constructor.name===Ze||S(e.validate)&&Object.values(e.validate).find(s=>s.constructor.name===Ze)),Nt=e=>e.mount&&(e.required||e.min||e.max||e.maxLength||e.minLength||e.pattern||e.validate),Ge=(e,s,r)=>!r&&(s.watchAll||s.watch.has(e)||[...s.watch].some(a=>e.startsWith(a)&&/^\.\w+/.test(e.slice(a.length))));const oe=(e,s,r,a)=>{for(const u of r||Object.keys(e)){const l=y(e,u);if(l){const{_f:c,...g}=l;if(c){if(c.refs&&c.refs[0]&&s(c.refs[0],u)&&!a)return!0;if(c.ref&&s(c.ref,c.name)&&!a)return!0;if(oe(g,s))break}else if(S(g)&&oe(g,s))break}}};function et(e,s,r){const a=y(e,r);if(a||Oe(r))return{error:a,name:r};const u=r.split(".");for(;u.length;){const l=u.join("."),c=y(s,l),g=y(e,l);if(c&&!Array.isArray(c)&&r!==l)return{name:r};if(g&&g.type)return{name:l,error:g};u.pop()}return{name:r}}var Mt=(e,s,r,a)=>{r(e);const{name:u,...l}=e;return U(l)||Object.keys(l).length>=Object.keys(s).length||Object.keys(l).find(c=>s[c]===(!a||I.all))},Bt=(e,s,r)=>!e||!s||e===s||ue(e).some(a=>a&&(r?a===s:a.startsWith(s)||s.startsWith(a))),Pt=(e,s,r,a,u)=>u.isOnAll?!1:!r&&u.isOnTouch?!(s||e):(r?a.isOnBlur:u.isOnBlur)?!e:(r?a.isOnChange:u.isOnChange)?e:!0,It=(e,s)=>!be(y(e,s)).length&&T(e,s),jt=(e,s,r)=>{const a=ue(y(e,r));return m(a,"root",s[r]),m(e,r,a),e},ye=e=>$(e);function tt(e,s,r="validate"){if(ye(e)||Array.isArray(e)&&e.every(ye)||H(e)&&!e)return{type:r,message:ye(e)?e:"",ref:s}}var re=e=>S(e)&&!ve(e)?e:{value:e,message:""},rt=async(e,s,r,a,u,l)=>{const{ref:c,refs:g,required:x,maxLength:D,minLength:b,min:w,max:v,pattern:ce,validate:X,name:N,valueAsNumber:_e,mount:K}=e._f,_=y(r,N);if(!K||s.has(N))return{};const z=g?g[0]:c,Y=A=>{u&&z.reportValidity&&(z.setCustomValidity(H(A)?"":A||""),z.reportValidity())},L={},se=Le(c),ie=fe(c),Ve=se||ie,q=(_e||Te(c))&&O(c.value)&&O(_)||he(c)&&c.value===""||_===""||Array.isArray(_)&&!_.length,ee=lt.bind(null,N,a,L),J=(A,V,k,M=Q.maxLength,B=Q.minLength)=>{const W=A?V:k;L[N]={type:A?M:B,message:W,ref:c,...ee(A?M:B,W)}};if(l?!Array.isArray(_)||!_.length:x&&(!Ve&&(q||R(_))||H(_)&&!_||ie&&!ct(g).isValid||se&&!yt(g).isValid)){const{value:A,message:V}=ye(x)?{value:!!x,message:x}:re(x);if(A&&(L[N]={type:Q.required,message:V,ref:z,...ee(Q.required,V)},!a))return Y(V),L}if(!q&&(!R(w)||!R(v))){let A,V;const k=re(v),M=re(w);if(!R(_)&&!isNaN(_)){const B=c.valueAsNumber||_&&+_;R(k.value)||(A=B>k.value),R(M.value)||(V=B<M.value)}else{const B=c.valueAsDate||new Date(_),W=de=>new Date(new Date().toDateString()+" "+de),Z=c.type=="time",ae=c.type=="week";$(k.value)&&_&&(A=Z?W(_)>W(k.value):ae?_>k.value:B>new Date(k.value)),$(M.value)&&_&&(V=Z?W(_)<W(M.value):ae?_<M.value:B<new Date(M.value))}if((A||V)&&(J(!!A,k.message,M.message,Q.max,Q.min),!a))return Y(L[N].message),L}if((D||b)&&!q&&($(_)||l&&Array.isArray(_))){const A=re(D),V=re(b),k=!R(A.value)&&_.length>+A.value,M=!R(V.value)&&_.length<+V.value;if((k||M)&&(J(k,A.message,V.message),!a))return Y(L[N].message),L}if(ce&&!q&&$(_)){const{value:A,message:V}=re(ce);if(ve(A)&&!_.match(A)&&(L[N]={type:Q.pattern,message:V,ref:c,...ee(Q.pattern,V)},!a))return Y(V),L}if(X){if(j(X)){const A=await X(_,r),V=tt(A,z);if(V&&(L[N]={...V,...ee(Q.validate,V.message)},!a))return Y(V.message),L}else if(S(X)){let A={};for(const V in X){if(!U(A)&&!a)break;const k=tt(await X[V](_,r),z,V);k&&(A={...k,...ee(V,k.message)},Y(k.message),a&&(L[N]=A))}if(!U(A)&&(L[N]={ref:z,...A},!a))return L}}return Y(!0),L};const qt={mode:I.onSubmit,reValidateMode:I.onChange,shouldFocusError:!0};function Wt(e={}){let s={...qt,...e},r={submitCount:0,isDirty:!1,isLoading:j(s.defaultValues),isValidating:!1,isSubmitted:!1,isSubmitting:!1,isSubmitSuccessful:!1,isValid:!1,touchedFields:{},dirtyFields:{},validatingFields:{},errors:s.errors||{},disabled:s.disabled||!1};const a={};let u=S(s.defaultValues)||S(s.values)?p(s.values||s.defaultValues)||{}:{},l=s.shouldUnregister?{}:p(u),c={action:!1,mount:!1,watch:!1},g={mount:new Set,disabled:new Set,unMount:new Set,array:new Set,watch:new Set},x,D=0;const b={isDirty:!1,dirtyFields:!1,validatingFields:!1,touchedFields:!1,isValidating:!1,isValid:!1,errors:!1};let w={...b};const v={array:Ke(),state:Ke()},ce=Xe(s.mode),X=Xe(s.reValidateMode),N=s.criteriaMode===I.all,_e=t=>i=>{clearTimeout(D),D=setTimeout(t,i)},K=async t=>{if(!s.disabled&&(b.isValid||w.isValid||t)){const i=s.resolver?U((await q()).errors):await J(a,!0);i!==r.isValid&&v.state.next({isValid:i})}},_=(t,i)=>{!s.disabled&&(b.isValidating||b.validatingFields||w.isValidating||w.validatingFields)&&((t||Array.from(g.mount)).forEach(n=>{n&&(i?m(r.validatingFields,n,i):T(r.validatingFields,n))}),v.state.next({validatingFields:r.validatingFields,isValidating:!U(r.validatingFields)}))},z=(t,i=[],n,d,f=!0,o=!0)=>{if(d&&n&&!s.disabled){if(c.action=!0,o&&Array.isArray(y(a,t))){const h=n(y(a,t),d.argA,d.argB);f&&m(a,t,h)}if(o&&Array.isArray(y(r.errors,t))){const h=n(y(r.errors,t),d.argA,d.argB);f&&m(r.errors,t,h),It(r.errors,t)}if((b.touchedFields||w.touchedFields)&&o&&Array.isArray(y(r.touchedFields,t))){const h=n(y(r.touchedFields,t),d.argA,d.argB);f&&m(r.touchedFields,t,h)}(b.dirtyFields||w.dirtyFields)&&(r.dirtyFields=ne(u,l)),v.state.next({name:t,isDirty:V(t,i),dirtyFields:r.dirtyFields,errors:r.errors,isValid:r.isValid})}else m(l,t,i)},Y=(t,i)=>{m(r.errors,t,i),v.state.next({errors:r.errors})},L=t=>{r.errors=t,v.state.next({errors:r.errors,isValid:!1})},se=(t,i,n,d)=>{const f=y(a,t);if(f){const o=y(l,t,O(n)?y(u,t):n);O(o)||d&&d.defaultChecked||i?m(l,t,i?o:Qe(f._f)):B(t,o),c.mount&&K()}},ie=(t,i,n,d,f)=>{let o=!1,h=!1;const F={name:t};if(!s.disabled){if(!n||d){(b.isDirty||w.isDirty)&&(h=r.isDirty,r.isDirty=F.isDirty=V(),o=h!==F.isDirty);const E=G(y(u,t),i);h=!!y(r.dirtyFields,t),E?T(r.dirtyFields,t):m(r.dirtyFields,t,!0),F.dirtyFields=r.dirtyFields,o=o||(b.dirtyFields||w.dirtyFields)&&h!==!E}if(n){const E=y(r.touchedFields,t);E||(m(r.touchedFields,t,n),F.touchedFields=r.touchedFields,o=o||(b.touchedFields||w.touchedFields)&&E!==n)}o&&f&&v.state.next(F)}return o?F:{}},Ve=(t,i,n,d)=>{const f=y(r.errors,t),o=(b.isValid||w.isValid)&&H(i)&&r.isValid!==i;if(s.delayError&&n?(x=_e(()=>Y(t,n)),x(s.delayError)):(clearTimeout(D),x=null,n?m(r.errors,t,n):T(r.errors,t)),(n?!G(f,n):f)||!U(d)||o){const h={...d,...o&&H(i)?{isValid:i}:{},errors:r.errors,name:t};r={...r,...h},v.state.next(h)}},q=async t=>{_(t,!0);const i=await s.resolver(l,s.context,Ut(t||g.mount,a,s.criteriaMode,s.shouldUseNativeValidation));return _(t),i},ee=async t=>{const{errors:i}=await q(t);if(t)for(const n of t){const d=y(i,n);d?m(r.errors,n,d):T(r.errors,n)}else r.errors=i;return i},J=async(t,i,n={valid:!0})=>{for(const d in t){const f=t[d];if(f){const{_f:o,...h}=f;if(o){const F=g.array.has(o.name),E=f._f&&Rt(f._f);E&&b.validatingFields&&_([d],!0);const C=await rt(f,g.disabled,l,N,s.shouldUseNativeValidation&&!i,F);if(E&&b.validatingFields&&_([d]),C[o.name]&&(n.valid=!1,i))break;!i&&(y(C,o.name)?F?jt(r.errors,C,o.name):m(r.errors,o.name,C[o.name]):T(r.errors,o.name))}!U(h)&&await J(h,i,n)}}return n.valid},A=()=>{for(const t of g.unMount){const i=y(a,t);i&&(i._f.refs?i._f.refs.every(n=>!ke(n)):!ke(i._f.ref))&&Ae(t)}g.unMount=new Set},V=(t,i)=>!s.disabled&&(t&&i&&m(l,t,i),!G(Ce(),u)),k=(t,i,n)=>Tt(t,g,{...c.mount?l:O(i)?u:$(t)?{[t]:i}:i},n,i),M=t=>be(y(c.mount?l:u,t,s.shouldUnregister?y(u,t,[]):[])),B=(t,i,n={})=>{const d=y(a,t);let f=i;if(d){const o=d._f;o&&(!o.disabled&&m(l,t,dt(i,o)),f=he(o.ref)&&R(i)?"":i,ut(o.ref)?[...o.ref.options].forEach(h=>h.selected=f.includes(h.value)):o.refs?fe(o.ref)?o.refs.length>1?o.refs.forEach(h=>(!h.defaultChecked||!h.disabled)&&(h.checked=Array.isArray(f)?!!f.find(F=>F===h.value):f===h.value)):o.refs[0]&&(o.refs[0].checked=!!f):o.refs.forEach(h=>h.checked=h.value===f):Te(o.ref)?o.ref.value="":(o.ref.value=f,o.ref.type||v.state.next({name:t,values:p(l)})))}(n.shouldDirty||n.shouldTouch)&&ie(t,f,n.shouldTouch,n.shouldDirty,!0),n.shouldValidate&&Fe(t)},W=(t,i,n)=>{for(const d in i){const f=i[d],o=`${t}.${d}`,h=y(a,o);(g.array.has(t)||S(f)||h&&!h._f)&&!te(f)?W(o,f,n):B(o,f,n)}},Z=(t,i,n={})=>{const d=y(a,t),f=g.array.has(t),o=p(i);m(l,t,o),f?(v.array.next({name:t,values:p(l)}),(b.isDirty||b.dirtyFields||w.isDirty||w.dirtyFields)&&n.shouldDirty&&v.state.next({name:t,dirtyFields:ne(u,l),isDirty:V(t,o)})):d&&!d._f&&!R(o)?W(t,o,n):B(t,o,n),Ge(t,g)&&v.state.next({...r}),v.state.next({name:c.mount?t:void 0,values:p(l)})},ae=async t=>{c.mount=!0;const i=t.target;let n=i.name,d=!0;const f=y(a,n),o=h=>{d=Number.isNaN(h)||te(h)&&isNaN(h.getTime())||G(h,y(l,n,h))};if(f){let h,F;const E=i.type?Qe(f._f):Dt(t),C=t.type===$e.BLUR||t.type===$e.FOCUS_OUT,mt=!Nt(f._f)&&!s.resolver&&!y(r.errors,n)&&!f._f.deps||Pt(C,y(r.touchedFields,n),r.isSubmitted,X,ce),xe=Ge(n,g,C);m(l,n,E),C?(f._f.onBlur&&f._f.onBlur(t),x&&x(0)):f._f.onChange&&f._f.onChange(t);const we=ie(n,E,C),xt=!U(we)||xe;if(!C&&v.state.next({name:n,type:t.type,values:p(l)}),mt)return(b.isValid||w.isValid)&&(s.mode==="onBlur"?C&&K():C||K()),xt&&v.state.next({name:n,...xe?{}:we});if(!C&&xe&&v.state.next({...r}),s.resolver){const{errors:qe}=await q([n]);if(o(E),d){const wt=et(r.errors,a,n),We=et(qe,a,wt.name||n);h=We.error,n=We.name,F=U(qe)}}else _([n],!0),h=(await rt(f,g.disabled,l,N,s.shouldUseNativeValidation))[n],_([n]),o(E),d&&(h?F=!1:(b.isValid||w.isValid)&&(F=await J(a,!0)));d&&(f._f.deps&&Fe(f._f.deps),Ve(n,F,h,we))}},de=(t,i)=>{if(y(r.errors,i)&&t.focus)return t.focus(),1},Fe=async(t,i={})=>{let n,d;const f=ue(t);if(s.resolver){const o=await ee(O(t)?t:f);n=U(o),d=t?!f.some(h=>y(o,h)):n}else t?(d=(await Promise.all(f.map(async o=>{const h=y(a,o);return await J(h&&h._f?{[o]:h}:h)}))).every(Boolean),!(!d&&!r.isValid)&&K()):d=n=await J(a);return v.state.next({...!$(t)||(b.isValid||w.isValid)&&n!==r.isValid?{}:{name:t},...s.resolver||!t?{isValid:n}:{},errors:r.errors}),i.shouldFocus&&!d&&oe(a,de,t?f:g.mount),d},Ce=t=>{const i={...c.mount?l:u};return O(t)?i:$(t)?y(i,t):t.map(n=>y(i,n))},pe=(t,i)=>({invalid:!!y((i||r).errors,t),isDirty:!!y((i||r).dirtyFields,t),error:y((i||r).errors,t),isValidating:!!y(r.validatingFields,t),isTouched:!!y((i||r).touchedFields,t)}),gt=t=>{t&&ue(t).forEach(i=>T(r.errors,i)),v.state.next({errors:t?r.errors:{}})},Ue=(t,i,n)=>{const d=(y(a,t,{_f:{}})._f||{}).ref,f=y(r.errors,t)||{},{ref:o,message:h,type:F,...E}=f;m(r.errors,t,{...E,...i,ref:d}),v.state.next({name:t,errors:r.errors,isValid:!1}),n&&n.shouldFocus&&d&&d.focus&&d.focus()},vt=(t,i)=>j(t)?v.state.subscribe({next:n=>t(k(void 0,i),n)}):k(t,i,!0),Re=t=>v.state.subscribe({next:i=>{Bt(t.name,i.name,t.exact)&&Mt(i,t.formState||b,At,t.reRenderRoot)&&t.callback({values:{...l},...r,...i})}}).unsubscribe,bt=t=>(c.mount=!0,w={...w,...t.formState},Re({...t,formState:w})),Ae=(t,i={})=>{for(const n of t?ue(t):g.mount)g.mount.delete(n),g.array.delete(n),i.keepValue||(T(a,n),T(l,n)),!i.keepError&&T(r.errors,n),!i.keepDirty&&T(r.dirtyFields,n),!i.keepTouched&&T(r.touchedFields,n),!i.keepIsValidating&&T(r.validatingFields,n),!s.shouldUnregister&&!i.keepDefaultValue&&T(u,n);v.state.next({values:p(l)}),v.state.next({...r,...i.keepDirty?{isDirty:V()}:{}}),!i.keepIsValid&&K()},Ne=({disabled:t,name:i})=>{(H(t)&&c.mount||t||g.disabled.has(i))&&(t?g.disabled.add(i):g.disabled.delete(i))},me=(t,i={})=>{let n=y(a,t);const d=H(i.disabled)||H(s.disabled);return m(a,t,{...n||{},_f:{...n&&n._f?n._f:{ref:{name:t}},name:t,mount:!0,...i}}),g.mount.add(t),n?Ne({disabled:H(i.disabled)?i.disabled:s.disabled,name:t}):se(t,!0,i.value),{...d?{disabled:i.disabled||s.disabled}:{},...s.progressive?{required:!!i.required,min:le(i.min),max:le(i.max),minLength:le(i.minLength),maxLength:le(i.maxLength),pattern:le(i.pattern)}:{},name:t,onChange:ae,onBlur:ae,ref:f=>{if(f){me(t,i),n=y(a,t);const o=O(f.value)&&f.querySelectorAll&&f.querySelectorAll("input,select,textarea")[0]||f,h=Lt(o),F=n._f.refs||[];if(h?F.find(E=>E===o):o===n._f.ref)return;m(a,t,{_f:{...n._f,...h?{refs:[...F.filter(ke),o,...Array.isArray(y(u,t))?[{}]:[]],ref:{type:o.type,name:t}}:{ref:o}}}),se(t,!1,void 0,o)}else n=y(a,t,{}),n._f&&(n._f.mount=!1),(s.shouldUnregister||i.shouldUnregister)&&!(St(g.array,t)&&c.action)&&g.unMount.add(t)}}},Me=()=>s.shouldFocusError&&oe(a,de,g.mount),_t=t=>{H(t)&&(v.state.next({disabled:t}),oe(a,(i,n)=>{const d=y(a,n);d&&(i.disabled=d._f.disabled||t,Array.isArray(d._f.refs)&&d._f.refs.forEach(f=>{f.disabled=d._f.disabled||t}))},0,!1))},Be=(t,i)=>async n=>{let d;n&&(n.preventDefault&&n.preventDefault(),n.persist&&n.persist());let f=p(l);if(v.state.next({isSubmitting:!0}),s.resolver){const{errors:o,values:h}=await q();r.errors=o,f=h}else await J(a);if(g.disabled.size)for(const o of g.disabled)m(f,o,void 0);if(T(r.errors,"root"),U(r.errors)){v.state.next({errors:{}});try{await t(f,n)}catch(o){d=o}}else i&&await i({...r.errors},n),Me(),setTimeout(Me);if(v.state.next({isSubmitted:!0,isSubmitting:!1,isSubmitSuccessful:U(r.errors)&&!d,submitCount:r.submitCount+1,errors:r.errors}),d)throw d},Vt=(t,i={})=>{y(a,t)&&(O(i.defaultValue)?Z(t,p(y(u,t))):(Z(t,i.defaultValue),m(u,t,p(i.defaultValue))),i.keepTouched||T(r.touchedFields,t),i.keepDirty||(T(r.dirtyFields,t),r.isDirty=i.defaultValue?V(t,p(y(u,t))):V()),i.keepError||(T(r.errors,t),b.isValid&&K()),v.state.next({...r}))},Pe=(t,i={})=>{const n=t?p(t):u,d=p(n),f=U(t),o=f?u:d;if(i.keepDefaultValues||(u=n),!i.keepValues){if(i.keepDirtyValues){const h=new Set([...g.mount,...Object.keys(ne(u,l))]);for(const F of Array.from(h))y(r.dirtyFields,F)?m(o,F,y(l,F)):Z(F,y(o,F))}else{if(Ee&&O(t))for(const h of g.mount){const F=y(a,h);if(F&&F._f){const E=Array.isArray(F._f.refs)?F._f.refs[0]:F._f.ref;if(he(E)){const C=E.closest("form");if(C){C.reset();break}}}}for(const h of g.mount)Z(h,y(o,h))}l=p(o),v.array.next({values:{...o}}),v.state.next({values:{...o}})}g={mount:i.keepDirtyValues?g.mount:new Set,unMount:new Set,array:new Set,disabled:new Set,watch:new Set,watchAll:!1,focus:""},c.mount=!b.isValid||!!i.keepIsValid||!!i.keepDirtyValues,c.watch=!!s.shouldUnregister,v.state.next({submitCount:i.keepSubmitCount?r.submitCount:0,isDirty:f?!1:i.keepDirty?r.isDirty:!!(i.keepDefaultValues&&!G(t,u)),isSubmitted:i.keepIsSubmitted?r.isSubmitted:!1,dirtyFields:f?{}:i.keepDirtyValues?i.keepDefaultValues&&l?ne(u,l):r.dirtyFields:i.keepDefaultValues&&t?ne(u,t):i.keepDirty?r.dirtyFields:{},touchedFields:i.keepTouched?r.touchedFields:{},errors:i.keepErrors?r.errors:{},isSubmitSuccessful:i.keepIsSubmitSuccessful?r.isSubmitSuccessful:!1,isSubmitting:!1})},Ie=(t,i)=>Pe(j(t)?t(l):t,i),Ft=(t,i={})=>{const n=y(a,t),d=n&&n._f;if(d){const f=d.refs?d.refs[0]:d.ref;f.focus&&(f.focus(),i.shouldSelect&&j(f.select)&&f.select())}},At=t=>{r={...r,...t}},je={control:{register:me,unregister:Ae,getFieldState:pe,handleSubmit:Be,setError:Ue,_subscribe:Re,_runSchema:q,_getWatch:k,_getDirty:V,_setValid:K,_setFieldArray:z,_setDisabledField:Ne,_setErrors:L,_getFieldArray:M,_reset:Pe,_resetDefaultValues:()=>j(s.defaultValues)&&s.defaultValues().then(t=>{Ie(t,s.resetOptions),v.state.next({isLoading:!1})}),_removeUnmounted:A,_disableForm:_t,_subjects:v,_proxyFormState:b,get _fields(){return a},get _formValues(){return l},get _state(){return c},set _state(t){c=t},get _defaultValues(){return u},get _names(){return g},set _names(t){g=t},get _formState(){return r},get _options(){return s},set _options(t){s={...s,...t}}},subscribe:bt,trigger:Fe,register:me,handleSubmit:Be,watch:vt,setValue:Z,getValues:Ce,reset:Ie,resetField:Vt,clearErrors:gt,unregister:Ae,setError:Ue,setFocus:Ft,getFieldState:pe};return{...je,formControl:je}}function Qt(e={}){const s=P.useRef(void 0),r=P.useRef(void 0),[a,u]=P.useState({isDirty:!1,isValidating:!1,isLoading:j(e.defaultValues),isSubmitted:!1,isSubmitting:!1,isSubmitSuccessful:!1,isValid:!1,submitCount:0,dirtyFields:{},touchedFields:{},validatingFields:{},errors:e.errors||{},disabled:e.disabled||!1,defaultValues:j(e.defaultValues)?void 0:e.defaultValues});s.current||(s.current={...e.formControl?e.formControl:Wt(e),formState:a},e.formControl&&e.defaultValues&&!j(e.defaultValues)&&e.formControl.reset(e.defaultValues,e.resetOptions));const l=s.current.control;return l._options=e,P.useLayoutEffect(()=>l._subscribe({formState:l._proxyFormState,callback:()=>u({...l._formState}),reRenderRoot:!0}),[l]),P.useEffect(()=>l._disableForm(e.disabled),[l,e.disabled]),P.useEffect(()=>{if(l._proxyFormState.isDirty){const c=l._getDirty();c!==a.isDirty&&l._subjects.state.next({isDirty:c})}},[l,a.isDirty]),P.useEffect(()=>{e.values&&!G(e.values,r.current)?(l._reset(e.values,l._options.resetOptions),r.current=e.values,u(c=>({...c}))):l._resetDefaultValues()},[e.values,l]),P.useEffect(()=>{e.errors&&!U(e.errors)&&l._setErrors(e.errors)},[e.errors,l]),P.useEffect(()=>{l._state.mount||(l._setValid(),l._state.mount=!0),l._state.watch&&(l._state.watch=!1,l._subjects.state.next({...l._formState})),l._removeUnmounted()}),P.useEffect(()=>{e.shouldUnregister&&l._subjects.state.next({values:l._getWatch()})},[e.shouldUnregister,l]),s.current.formState=Ot(a,l),s.current}const st=(e,s,r)=>{if(e&&"reportValidity"in e){const a=y(r,s);e.setCustomValidity(a&&a.message||""),e.reportValidity()}},ht=(e,s)=>{for(const r in s.fields){const a=s.fields[r];a&&a.ref&&"reportValidity"in a.ref?st(a.ref,r,e):a&&a.refs&&a.refs.forEach(u=>st(u,r,e))}},Ht=(e,s)=>{s.shouldUseNativeValidation&&ht(e,s);const r={};for(const a in e){const u=y(s.fields,a),l=Object.assign(e[a]||{},{ref:u&&u.ref});if($t(s.names||Object.keys(e),a)){const c=Object.assign({},y(r,a));m(c,"root",l),m(r,a,c)}else m(r,a,l)}return r},$t=(e,s)=>{const r=it(s);return e.some(a=>it(a).match(`^${r}\\.\\d+`))};function it(e){return e.replace(/\]|\[/g,"")}function Xt(e,s,r){return r===void 0&&(r={}),function(a,u,l){try{return Promise.resolve(function(c,g){try{var x=(s!=null&&s.context,Promise.resolve(e[r.mode==="sync"?"validateSync":"validate"](a,Object.assign({abortEarly:!1},s,{context:u}))).then(function(D){return l.shouldUseNativeValidation&&ht({},l),{values:r.raw?Object.assign({},a):D,errors:{}}}))}catch(D){return g(D)}return x&&x.then?x.then(void 0,g):x}(0,function(c){if(!c.inner)throw c;return{values:{},errors:Ht((g=c,x=!l.shouldUseNativeValidation&&l.criteriaMode==="all",(g.inner||[]).reduce(function(D,b){if(D[b.path]||(D[b.path]={message:b.message,type:b.type}),x){var w=D[b.path].types,v=w&&w[b.type];D[b.path]=lt(b.path,x,D,b.type,v?[].concat(v,b.message):b.message)}return D},{})),l)};var g,x}))}catch(c){return Promise.reject(c)}}}export{Jt as B,Xt as o,Qt as u};
