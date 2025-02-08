import{w as p,u as a,e as s}from"./index-BWUooFYP.js";import{b as x}from"./DocumentationLayout-Y1bzoHMz.js";import"./jsx-runtime-Cf8x2fCZ.js";import{L as h}from"./LoginForm-Dt6F8ybw.js";import"./index-yBjzXJbu.js";import"./index.esm-j2opUZ0r.js";import"./index-DYAwP31-.js";import"./_commonjsHelpers-BosuxZz1.js";import"./index-Bp9CRMyg.js";import"./ButtonLoading-CQ_8rNP9.js";import"./clsx-B-dksMZM.js";import"./Modal-8KF-LmY5.js";import"./index-D9WrIkEy.js";import"./Toast-CR1qz1UP.js";import"./ToastNotifier-DS_YutQe.js";import"./Navbar-DVbG2Mbl.js";import"./BasicLayout-DmACyxSB.js";import"./Logo-DHfADt94.js";import"./LogoFull-D7FNlH2y.js";import"./InputField-B8d0msWU.js";import"./Drawer-BKR-v1Hj.js";import"./index-BoL89-kC.js";import"./EnvelopeIcon-BvLPPxPm.js";const Y={component:h,title:"Forms/Login",decorators:[x]},n={loading:!1,onSubmit:()=>console.log("onSubmit")},o={args:n},r={args:n,play:async({canvasElement:e})=>{const t=p(e);await a.type(t.getByTestId("login-form__email-input"),"email@provider.com"),await a.type(t.getByTestId("login-form__password-input"),"password"),await a.click(t.getByTestId("login-form__submit-button")),await s(t.getByTestId("login-form__email-input")).toHaveValue("email@provider.com"),await s(t.getByTestId("login-form__password-input")).toHaveValue("password")}},i={args:n,play:async({canvasElement:e})=>{const t=p(e);await a.type(t.getByTestId("login-form__password-input"),"password"),await a.click(t.getByTestId("login-form__submit-button")),await s(t.getByText("Email is required")).toBeInTheDocument()}},c={args:n,play:async({canvasElement:e})=>{const t=p(e);await a.type(t.getByTestId("login-form__email-input"),"incorrect"),await a.type(t.getByTestId("login-form__password-input"),"password"),await a.click(t.getByTestId("login-form__submit-button")),await s(t.getByText("Email must be valid")).toBeInTheDocument()}},m={args:n,play:async({canvasElement:e})=>{const t=p(e);await a.type(t.getByTestId("login-form__email-input"),"email@provider.com"),await a.click(t.getByTestId("login-form__submit-button")),await s(t.getByText("Password is required")).toBeInTheDocument()}};var l,d,u;o.parameters={...o.parameters,docs:{...(l=o.parameters)==null?void 0:l.docs,source:{originalSource:`{
  args: defaultArgs
} satisfies Story`,...(u=(d=o.parameters)==null?void 0:d.docs)==null?void 0:u.source}}};var g,y,v;r.parameters={...r.parameters,docs:{...(g=r.parameters)==null?void 0:g.docs,source:{originalSource:`{
  args: defaultArgs,
  play: async ({
    canvasElement
  }) => {
    const canvas = within(canvasElement);
    await userEvent.type(canvas.getByTestId("login-form__email-input"), "email@provider.com");
    await userEvent.type(canvas.getByTestId("login-form__password-input"), "password");
    await userEvent.click(canvas.getByTestId("login-form__submit-button"));
    await expect(canvas.getByTestId("login-form__email-input")).toHaveValue("email@provider.com");
    await expect(canvas.getByTestId("login-form__password-input")).toHaveValue("password");
  }
} satisfies Story`,...(v=(y=r.parameters)==null?void 0:y.docs)==null?void 0:v.source}}};var w,_,f;i.parameters={...i.parameters,docs:{...(w=i.parameters)==null?void 0:w.docs,source:{originalSource:`{
  args: defaultArgs,
  play: async ({
    canvasElement
  }) => {
    const canvas = within(canvasElement);
    await userEvent.type(canvas.getByTestId("login-form__password-input"), "password");
    await userEvent.click(canvas.getByTestId("login-form__submit-button"));
    await expect(canvas.getByText("Email is required")).toBeInTheDocument();
  }
} satisfies Story`,...(f=(_=i.parameters)==null?void 0:_.docs)==null?void 0:f.source}}};var B,T,I;c.parameters={...c.parameters,docs:{...(B=c.parameters)==null?void 0:B.docs,source:{originalSource:`{
  args: defaultArgs,
  play: async ({
    canvasElement
  }) => {
    const canvas = within(canvasElement);
    await userEvent.type(canvas.getByTestId("login-form__email-input"), "incorrect");
    await userEvent.type(canvas.getByTestId("login-form__password-input"), "password");
    await userEvent.click(canvas.getByTestId("login-form__submit-button"));
    await expect(canvas.getByText("Email must be valid")).toBeInTheDocument();
  }
} satisfies Story`,...(I=(T=c.parameters)==null?void 0:T.docs)==null?void 0:I.source}}};var E,b,S;m.parameters={...m.parameters,docs:{...(E=m.parameters)==null?void 0:E.docs,source:{originalSource:`{
  args: defaultArgs,
  play: async ({
    canvasElement
  }) => {
    const canvas = within(canvasElement);
    await userEvent.type(canvas.getByTestId("login-form__email-input"), "email@provider.com");
    await userEvent.click(canvas.getByTestId("login-form__submit-button"));
    await expect(canvas.getByText("Password is required")).toBeInTheDocument();
  }
} satisfies Story`,...(S=(b=m.parameters)==null?void 0:b.docs)==null?void 0:S.source}}};const Z=["Standard","Success","EmailMissing","EmailInvalid","PasswordMissing"];export{c as EmailInvalid,i as EmailMissing,m as PasswordMissing,o as Standard,r as Success,Z as __namedExportsOrder,Y as default};
//# sourceMappingURL=LoginForm.stories-Plk0v06F.js.map
