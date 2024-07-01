import{w,u as e,e as v}from"./index-BASH1HpE.js";import{b as y}from"./DocumentationLayout-pQsbP2RF.js";import"./jsx-runtime-Nms4Y4qS.js";import{F as _}from"./ForgotPasswordForm-CrrT6-Eq.js";import"./index-BwDkhjyp.js";import"./_commonjsHelpers-BosuxZz1.js";import"./index.esm-Cfafrgx-.js";import"./index-DvfjBVbr.js";import"./ButtonLoading-G2DfcsO7.js";import"./clsx-B-dksMZM.js";import"./Modal-D4RDNhNs.js";import"./index-BHSJTXCl.js";import"./Toast-B22VD2nS.js";import"./ToastNotifier-HKAfJ5Dg.js";import"./Navbar-1fJ1Bk1R.js";import"./BasicLayout-NvUh2eo8.js";import"./Logo-5R804V44.js";import"./LogoFull-CcvXAH7l.js";import"./InputField-C0mGdLNZ.js";import"./Drawer-ps0C_uIC.js";import"./index-BcEy6LoI.js";import"./EnvelopeIcon-NQkr_NSQ.js";const K={component:_,title:"Forms/Forgot Password",decorators:[y]},n={loading:!1,onSubmit:()=>console.log("onSubmit")},a={args:n},o={args:n,play:async({canvasElement:s})=>{const t=w(s);await e.type(t.getByTestId("forgot-password-form__email-input"),"email@provider.com"),await e.click(t.getByTestId("forgot-password-form__submit-button")),await v(t.getByTestId("forgot-password-form__email-input")).toHaveValue("email@provider.com")}},r={args:n,play:async({canvasElement:s})=>{const t=w(s);await e.type(t.getByTestId("forgot-password-form__email-input"),"incorrect"),await e.click(t.getByTestId("forgot-password-form__submit-button")),await v(t.getByText("Email must be valid")).toBeInTheDocument}};var i,m,c;a.parameters={...a.parameters,docs:{...(i=a.parameters)==null?void 0:i.docs,source:{originalSource:`{
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
} satisfies Story`,...(f=(g=r.parameters)==null?void 0:g.docs)==null?void 0:f.source}}};const L=["Standard","Success","IncorrectEmail"];export{r as IncorrectEmail,a as Standard,o as Success,L as __namedExportsOrder,K as default};
//# sourceMappingURL=ForgotPasswordForm.stories-AL42El2d.js.map
