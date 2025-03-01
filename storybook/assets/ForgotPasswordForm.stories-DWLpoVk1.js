import{w,u as e,e as v}from"./index-BWUooFYP.js";import{b as y}from"./DocumentationLayout-Y1bzoHMz.js";import"./jsx-runtime-Cf8x2fCZ.js";import{F as _}from"./ForgotPasswordForm-D_G5DAxJ.js";import"./index-yBjzXJbu.js";import"./index.esm-j2opUZ0r.js";import"./index-DYAwP31-.js";import"./_commonjsHelpers-BosuxZz1.js";import"./index-Bp9CRMyg.js";import"./ButtonLoading-CQ_8rNP9.js";import"./clsx-B-dksMZM.js";import"./Modal-8KF-LmY5.js";import"./index-D9WrIkEy.js";import"./Toast-CR1qz1UP.js";import"./ToastNotifier-DS_YutQe.js";import"./Navbar-DVbG2Mbl.js";import"./BasicLayout-DmACyxSB.js";import"./Logo-DHfADt94.js";import"./LogoFull-D7FNlH2y.js";import"./InputField-B8d0msWU.js";import"./Drawer-BKR-v1Hj.js";import"./index-BoL89-kC.js";import"./EnvelopeIcon-BvLPPxPm.js";const L={component:_,title:"Forms/Forgot Password",decorators:[y]},i={loading:!1,onSubmit:()=>console.log("onSubmit")},a={args:i},o={args:i,play:async({canvasElement:s})=>{const t=w(s);await e.type(t.getByTestId("forgot-password-form__email-input"),"email@provider.com"),await e.click(t.getByTestId("forgot-password-form__submit-button")),await v(t.getByTestId("forgot-password-form__email-input")).toHaveValue("email@provider.com")}},r={args:i,play:async({canvasElement:s})=>{const t=w(s);await e.type(t.getByTestId("forgot-password-form__email-input"),"incorrect"),await e.click(t.getByTestId("forgot-password-form__submit-button")),await v(t.getByText("Email must be valid")).toBeInTheDocument}};var n,m,c;a.parameters={...a.parameters,docs:{...(n=a.parameters)==null?void 0:n.docs,source:{originalSource:`{
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
//# sourceMappingURL=ForgotPasswordForm.stories-DWLpoVk1.js.map
