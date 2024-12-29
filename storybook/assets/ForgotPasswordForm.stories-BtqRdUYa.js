import{w,u as e,e as v}from"./index-BGLvj4QY.js";import{b as y}from"./DocumentationLayout-CedOLWXF.js";import"./jsx-runtime-BjgbQsUx.js";import{F as _}from"./ForgotPasswordForm-BQRfxw2K.js";import"./index-D2MAbzvX.js";import"./index.esm-C-z-Y77n.js";import"./index-BuiwNHQc.js";import"./_commonjsHelpers-BosuxZz1.js";import"./index-DyofrSk9.js";import"./ButtonLoading-C0jqRLQt.js";import"./clsx-B-dksMZM.js";import"./Modal-9GTEQWGF.js";import"./index-D9WrIkEy.js";import"./Toast-J3NfEDsT.js";import"./ToastNotifier-DaDemGVt.js";import"./Navbar-B1tRDqjg.js";import"./BasicLayout-CXB4JtuN.js";import"./Logo-BQSH3LOB.js";import"./LogoFull-BuhRR9ue.js";import"./InputField-uZHH29kj.js";import"./Drawer-D58q4uVa.js";import"./index-BrIWSjre.js";import"./EnvelopeIcon-BM_lkxQJ.js";const L={component:_,title:"Forms/Forgot Password",decorators:[y]},i={loading:!1,onSubmit:()=>console.log("onSubmit")},a={args:i},o={args:i,play:async({canvasElement:s})=>{const t=w(s);await e.type(t.getByTestId("forgot-password-form__email-input"),"email@provider.com"),await e.click(t.getByTestId("forgot-password-form__submit-button")),await v(t.getByTestId("forgot-password-form__email-input")).toHaveValue("email@provider.com")}},r={args:i,play:async({canvasElement:s})=>{const t=w(s);await e.type(t.getByTestId("forgot-password-form__email-input"),"incorrect"),await e.click(t.getByTestId("forgot-password-form__submit-button")),await v(t.getByText("Email must be valid")).toBeInTheDocument}};var n,m,c;a.parameters={...a.parameters,docs:{...(n=a.parameters)==null?void 0:n.docs,source:{originalSource:`{
  args: defaultArgs
} satisfies Story`,...(c=(m=a.parameters)==null?void 0:m.docs)==null?void 0:c.source}}};var p,d,u;o.parameters={...o.parameters,docs:{...(p=o.parameters)==null?void 0:p.docs,source:{originalSource:`{
  args: defaultArgs,
  play: async ({
    canvasElement
  }) => {
    const canvas = within(canvasElement);
    await userEvent.type(canvas.getByTestId("forgot-password-form__email-input"), "email@provider.com");
    await userEvent.click(canvas.getByTestId("forgot-password-form__submit-button"));
    await expect(canvas.getByTestId("forgot-password-form__email-input")).toHaveValue("email@provider.com");
  }
} satisfies Story`,...(u=(d=o.parameters)==null?void 0:d.docs)==null?void 0:u.source}}};var l,g,f;r.parameters={...r.parameters,docs:{...(l=r.parameters)==null?void 0:l.docs,source:{originalSource:`{
  args: defaultArgs,
  play: async ({
    canvasElement
  }) => {
    const canvas = within(canvasElement);
    await userEvent.type(canvas.getByTestId("forgot-password-form__email-input"), "incorrect");
    await userEvent.click(canvas.getByTestId("forgot-password-form__submit-button"));
    await expect(canvas.getByText("Email must be valid")).toBeInTheDocument;
  }
} satisfies Story`,...(f=(g=r.parameters)==null?void 0:g.docs)==null?void 0:f.source}}};const M=["Standard","Success","IncorrectEmail"];export{r as IncorrectEmail,a as Standard,o as Success,M as __namedExportsOrder,L as default};
//# sourceMappingURL=ForgotPasswordForm.stories-BtqRdUYa.js.map
