import{C as n}from"./DocumentationLayout-BbGaX74R.js";import"./iframe-BrlSpEe-.js";import{T as c}from"./Toast-AYUEDBYG.js";import"./clsx-B-dksMZM.js";const p={component:c,decorators:[n],title:"Shared/Actions/Toast",tags:["autodocs"]},r={severity:"info",message:"This is a test message",positionX:"center",positionY:"top"},s={args:r},e={args:{...r,severity:"success"}},o={args:{...r,severity:"warning"}},a={args:{...r,severity:"error"}},t={args:{...r,onClose:()=>console.log("onClose")}};s.parameters={...s.parameters,docs:{...s.parameters?.docs,source:{originalSource:`{
  args: defaultArgs
}`,...s.parameters?.docs?.source}}};e.parameters={...e.parameters,docs:{...e.parameters?.docs,source:{originalSource:`{
  args: {
    ...defaultArgs,
    severity: "success"
  }
}`,...e.parameters?.docs?.source}}};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`{
  args: {
    ...defaultArgs,
    severity: "warning"
  }
}`,...o.parameters?.docs?.source}}};a.parameters={...a.parameters,docs:{...a.parameters?.docs,source:{originalSource:`{
  args: {
    ...defaultArgs,
    severity: "error"
  }
}`,...a.parameters?.docs?.source}}};t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:`{
  args: {
    ...defaultArgs,
    onClose: () => console.log("onClose")
  }
}`,...t.parameters?.docs?.source}}};const u=["Standard","Success","Warning","Error","WithClose"];export{a as Error,s as Standard,e as Success,o as Warning,t as WithClose,u as __namedExportsOrder,p as default};
