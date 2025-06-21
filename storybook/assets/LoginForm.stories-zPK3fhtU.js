import{b as E}from"./DocumentationLayout-7ASonCf3.js";import"./iframe-xPoOMcH3.js";import{L as S}from"./LoginForm-Q62fudUY.js";import"./index.esm-Dh3BXQ-T.js";import"./ButtonLoading-CZeeBir4.js";import"./clsx-B-dksMZM.js";import"./Modal-BEIuBGM1.js";import"./index-D9WrIkEy.js";import"./Toast-DZYaL5be.js";import"./ToastNotifier-e3QSRhmt.js";import"./StorybookNavbarContentComponent-DkiwGjxU.js";import"./BasicLayout-CbyF0bYq.js";import"./Logo-CBYUuAqn.js";import"./LogoFull-CJVWlxWf.js";import"./InputField-CPfo3L9C.js";import"./Drawer-C4xIhs9M.js";import"./index-Dl7v4I77.js";import"./StorybookNavbarComponent-CJgC1IRa.js";import"./StorybookTableContentComponent-CLo2IFF4.js";import"./chunk-TVFJBHBT-BUrEn1b-.js";import"./EnvelopeIcon-BoPPN7pO.js";const{expect:a,waitFor:x}=__STORYBOOK_MODULE_TEST__,N={component:S,title:"Forms/Login",decorators:[E]},s={loading:!1,onSubmit:()=>console.log("onSubmit")},o={args:s},r={args:s,play:async({canvas:t,userEvent:e})=>{await e.type(t.getByTestId("login-form__email-input"),"email@provider.com"),await e.type(t.getByTestId("login-form__password-input"),"password"),await e.click(t.getByTestId("login-form__submit-button")),x(async()=>{await a(t.getByTestId("login-form__email-input")).toHaveValue("email@provider.com"),await a(t.getByTestId("login-form__password-input")).toHaveValue("password")})}},i={args:s,play:async({canvas:t,userEvent:e})=>{await e.type(t.getByTestId("login-form__password-input"),"password"),await e.click(t.getByTestId("login-form__submit-button")),await a(t.getByText("Email is required")).toBeInTheDocument()}},n={args:s,play:async({canvas:t,userEvent:e})=>{await e.type(t.getByTestId("login-form__email-input"),"incorrect"),await e.type(t.getByTestId("login-form__password-input"),"password"),await e.click(t.getByTestId("login-form__submit-button")),await a(t.getByText("Email must be valid")).toBeInTheDocument()}},m={args:s,play:async({canvas:t,userEvent:e})=>{await e.type(t.getByTestId("login-form__email-input"),"email@provider.com"),await e.click(t.getByTestId("login-form__submit-button")),await a(t.getByText("Password is required")).toBeInTheDocument()}};var p,c,d;o.parameters={...o.parameters,docs:{...(p=o.parameters)==null?void 0:p.docs,source:{originalSource:`{
  args: defaultArgs
}`,...(d=(c=o.parameters)==null?void 0:c.docs)==null?void 0:d.source}}};var l,g,u;r.parameters={...r.parameters,docs:{...(l=r.parameters)==null?void 0:l.docs,source:{originalSource:`{
  args: defaultArgs,
  play: async ({
    canvas,
    userEvent
  }) => {
    await userEvent.type(canvas.getByTestId("login-form__email-input"), "email@provider.com");
    await userEvent.type(canvas.getByTestId("login-form__password-input"), "password");
    await userEvent.click(canvas.getByTestId("login-form__submit-button"));
    waitFor(async () => {
      await expect(canvas.getByTestId("login-form__email-input")).toHaveValue("email@provider.com");
      await expect(canvas.getByTestId("login-form__password-input")).toHaveValue("password");
    });
  }
} satisfies Story`,...(u=(g=r.parameters)==null?void 0:g.docs)==null?void 0:u.source}}};var y,_,w;i.parameters={...i.parameters,docs:{...(y=i.parameters)==null?void 0:y.docs,source:{originalSource:`{
  args: defaultArgs,
  play: async ({
    canvas,
    userEvent
  }) => {
    await userEvent.type(canvas.getByTestId("login-form__password-input"), "password");
    await userEvent.click(canvas.getByTestId("login-form__submit-button"));
    await expect(canvas.getByText("Email is required")).toBeInTheDocument();
  }
} satisfies Story`,...(w=(_=i.parameters)==null?void 0:_.docs)==null?void 0:w.source}}};var T,B,f;n.parameters={...n.parameters,docs:{...(T=n.parameters)==null?void 0:T.docs,source:{originalSource:`{
  args: defaultArgs,
  play: async ({
    canvas,
    userEvent
  }) => {
    await userEvent.type(canvas.getByTestId("login-form__email-input"), "incorrect");
    await userEvent.type(canvas.getByTestId("login-form__password-input"), "password");
    await userEvent.click(canvas.getByTestId("login-form__submit-button"));
    await expect(canvas.getByText("Email must be valid")).toBeInTheDocument();
  }
}`,...(f=(B=n.parameters)==null?void 0:B.docs)==null?void 0:f.source}}};var I,v,b;m.parameters={...m.parameters,docs:{...(I=m.parameters)==null?void 0:I.docs,source:{originalSource:`{
  args: defaultArgs,
  play: async ({
    canvas,
    userEvent
  }) => {
    await userEvent.type(canvas.getByTestId("login-form__email-input"), "email@provider.com");
    await userEvent.click(canvas.getByTestId("login-form__submit-button"));
    await expect(canvas.getByText("Password is required")).toBeInTheDocument();
  }
}`,...(b=(v=m.parameters)==null?void 0:v.docs)==null?void 0:b.source}}};const Q=["Standard","Success","EmailMissing","EmailInvalid","PasswordMissing"];export{n as EmailInvalid,i as EmailMissing,m as PasswordMissing,o as Standard,r as Success,Q as __namedExportsOrder,N as default};
//# sourceMappingURL=LoginForm.stories-zPK3fhtU.js.map
