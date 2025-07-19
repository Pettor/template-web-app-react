import{j as s}from"./iframe-BrlSpEe-.js";import{C as e}from"./DocumentationLayout-BbGaX74R.js";import{T as o,u as n,t as m}from"./ToastNotifier-B5zCHlFR.js";import"./index-D9WrIkEy.js";import"./Toast-AYUEDBYG.js";import"./clsx-B-dksMZM.js";const T={component:o,decorators:[e],title:"Shared/Actions/Toast/Notifier",tags:["autodocs"]},t={render:r=>{const a=n(m);return s.jsxs("div",{children:[s.jsx("button",{className:"btn btn-primary",onClick:()=>a("This is a test message"),children:"Click me!"}),s.jsx(o,{...r})]})}};t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:`{
  render: args => {
    const addToast = useSetAtom(toastAddAtom);
    return <div>
        <button className="btn btn-primary" onClick={() => addToast("This is a test message")}>
          Click me!
        </button>
        <Component {...args} />
      </div>;
  }
}`,...t.parameters?.docs?.source}}};const b=["Standard"];export{t as Standard,b as __namedExportsOrder,T as default};
