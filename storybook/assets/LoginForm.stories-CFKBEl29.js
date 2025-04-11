import{w as p,u as a,e as s}from"./index-BM0gtWul.js";import{b as S}from"./DocumentationLayout-CaF55Pd3.js";import"./jsx-runtime-D_zvdyIk.js";import{L as h}from"./LoginForm-DZVcAfbW.js";import"./index.esm-Dlxk2dPZ.js";import"./index-n-xcLTj3.js";import"./_commonjsHelpers-Cpj98o6Y.js";import"./index-C8XO7OkU.js";import"./ButtonLoading-BsvVZM4L.js";import"./clsx-B-dksMZM.js";import"./Modal-DHSmGRM_.js";import"./index-D9WrIkEy.js";import"./Toast-99C2H297.js";import"./ToastNotifier-DvJaMPfu.js";import"./StorybookNavbarContentComponent-DFfGeHrl.js";import"./BasicLayout-BYo8Ed5F.js";import"./Logo-BdjsM1M9.js";import"./LogoFull-Ja5zr25l.js";import"./InputField-BUg6Nxh6.js";import"./Drawer-DKCfGrIf.js";import"./index-CzfdDWUY.js";import"./StorybookNavbarComponent-BenTm0_W.js";import"./StorybookTableContentComponent-CvAsvn1j.js";import"./chunk-LSEVNFON-G8OzWBoO.js";import"./EnvelopeIcon-BKZmQnah.js";const $={component:h,title:"Forms/Login",decorators:[S]},n={loading:!1,onSubmit:()=>console.log("onSubmit")},o={args:n},r={args:n,play:async({canvasElement:e})=>{const t=p(e);await a.type(t.getByTestId("login-form__email-input"),"email@provider.com"),await a.type(t.getByTestId("login-form__password-input"),"password"),await a.click(t.getByTestId("login-form__submit-button")),await s(t.getByTestId("login-form__email-input")).toHaveValue("email@provider.com"),await s(t.getByTestId("login-form__password-input")).toHaveValue("password")}},i={args:n,play:async({canvasElement:e})=>{const t=p(e);await a.type(t.getByTestId("login-form__password-input"),"password"),await a.click(t.getByTestId("login-form__submit-button")),await s(t.getByText("Email is required")).toBeInTheDocument()}},c={args:n,play:async({canvasElement:e})=>{const t=p(e);await a.type(t.getByTestId("login-form__email-input"),"incorrect"),await a.type(t.getByTestId("login-form__password-input"),"password"),await a.click(t.getByTestId("login-form__submit-button")),await s(t.getByText("Email must be valid")).toBeInTheDocument()}},m={args:n,play:async({canvasElement:e})=>{const t=p(e);await a.type(t.getByTestId("login-form__email-input"),"email@provider.com"),await a.click(t.getByTestId("login-form__submit-button")),await s(t.getByText("Password is required")).toBeInTheDocument()}};var l,d,u;o.parameters={...o.parameters,docs:{...(l=o.parameters)==null?void 0:l.docs,source:{originalSource:`{
  args: defaultArgs
}`,...(u=(d=o.parameters)==null?void 0:d.docs)==null?void 0:u.source}}};var g,y,v;r.parameters={...r.parameters,docs:{...(g=r.parameters)==null?void 0:g.docs,source:{originalSource:`{
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
}`,...(I=(T=c.parameters)==null?void 0:T.docs)==null?void 0:I.source}}};var E,b,x;m.parameters={...m.parameters,docs:{...(E=m.parameters)==null?void 0:E.docs,source:{originalSource:`{
  args: defaultArgs,
  play: async ({
    canvasElement
  }) => {
    const canvas = within(canvasElement);
    await userEvent.type(canvas.getByTestId("login-form__email-input"), "email@provider.com");
    await userEvent.click(canvas.getByTestId("login-form__submit-button"));
    await expect(canvas.getByText("Password is required")).toBeInTheDocument();
  }
}`,...(x=(b=m.parameters)==null?void 0:b.docs)==null?void 0:x.source}}};const tt=["Standard","Success","EmailMissing","EmailInvalid","PasswordMissing"];export{c as EmailInvalid,i as EmailMissing,m as PasswordMissing,o as Standard,r as Success,tt as __namedExportsOrder,$ as default};
//# sourceMappingURL=LoginForm.stories-CFKBEl29.js.map
