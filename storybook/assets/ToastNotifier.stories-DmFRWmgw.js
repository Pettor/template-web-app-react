import{j as o}from"./iframe-DePnZJLt.js";import{C as e}from"./DocumentationLayout-BXTjmOxg.js";import{T as s,u as n,t as m}from"./ToastNotifier-DglMRguc.js";import"./preload-helper-D9Z9MdNV.js";import"./index-D9WrIkEy.js";import"./Toast-CRm7HbGP.js";import"./clsx-B-dksMZM.js";const b={component:s,decorators:[e],title:"Shared/Actions/Toast/Notifier",tags:["autodocs"]},t={render:r=>{const a=n(m);return o.jsxs("div",{children:[o.jsx("button",{className:"btn btn-primary",onClick:()=>a("This is a test message"),children:"Click me!"}),o.jsx(s,{...r})]})}};t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:`{
  render: args => {
    const addToast = useSetAtom(toastAddAtom);
    return <div>
        <button className="btn btn-primary" onClick={() => addToast("This is a test message")}>
          Click me!
        </button>
        <Component {...args} />
      </div>;
  }
}`,...t.parameters?.docs?.source}}};const x=["Standard"];export{t as Standard,x as __namedExportsOrder,b as default};
