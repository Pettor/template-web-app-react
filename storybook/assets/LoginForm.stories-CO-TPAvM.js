import{b as p}from"./DocumentationLayout-Cyz-fbDY.js";import"./iframe-D2v7luz4.js";import{L as c}from"./LoginForm-Cuw5COyH.js";import"./index.esm-BhPk2sJx.js";import"./ButtonLoading-DXx3SCAQ.js";import"./clsx-B-dksMZM.js";import"./Modal-upctH1qH.js";import"./index-D9WrIkEy.js";import"./Toast-C3qXTLIq.js";import"./ToastNotifier-C3PEvbbH.js";import"./StorybookNavbarContentComponent-lbjuo-0L.js";import"./BasicLayout-DI8A0xOp.js";import"./Logo-l5LtXbTJ.js";import"./LogoFull-B0Ht6Dly.js";import"./InputField-fo3JMrbA.js";import"./Drawer-YeVekm1m.js";import"./index-P_QEV54E.js";import"./StorybookNavbarComponent-D_7eWH5c.js";import"./StorybookTableContentComponent-DpCrplXs.js";import"./chunk-KZPPZA2C-rvBpA5M9.js";import"./EnvelopeIcon-CNbYiGX5.js";const{expect:a,waitFor:d}=__STORYBOOK_MODULE_TEST__,q={component:c,title:"Forms/Login",decorators:[p]},s={loading:!1,onSubmit:()=>console.log("onSubmit")},o={args:s},r={args:s,play:async({canvas:t,userEvent:e})=>{await e.type(t.getByTestId("login-form__email-input"),"email@provider.com"),await e.type(t.getByTestId("login-form__password-input"),"password"),await e.click(t.getByTestId("login-form__submit-button")),d(async()=>{await a(t.getByTestId("login-form__email-input")).toHaveValue("email@provider.com"),await a(t.getByTestId("login-form__password-input")).toHaveValue("password")})}},i={args:s,play:async({canvas:t,userEvent:e})=>{await e.type(t.getByTestId("login-form__password-input"),"password"),await e.click(t.getByTestId("login-form__submit-button")),await a(t.getByText("Email is required")).toBeInTheDocument()}},n={args:s,play:async({canvas:t,userEvent:e})=>{await e.type(t.getByTestId("login-form__email-input"),"incorrect"),await e.type(t.getByTestId("login-form__password-input"),"password"),await e.click(t.getByTestId("login-form__submit-button")),await a(t.getByText("Email must be valid")).toBeInTheDocument()}},m={args:s,play:async({canvas:t,userEvent:e})=>{await e.type(t.getByTestId("login-form__email-input"),"email@provider.com"),await e.click(t.getByTestId("login-form__submit-button")),await a(t.getByText("Password is required")).toBeInTheDocument()}};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`{
  args: defaultArgs
}`,...o.parameters?.docs?.source}}};r.parameters={...r.parameters,docs:{...r.parameters?.docs,source:{originalSource:`{
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
} satisfies Story`,...r.parameters?.docs?.source}}};i.parameters={...i.parameters,docs:{...i.parameters?.docs,source:{originalSource:`{
  args: defaultArgs,
  play: async ({
    canvas,
    userEvent
  }) => {
    await userEvent.type(canvas.getByTestId("login-form__password-input"), "password");
    await userEvent.click(canvas.getByTestId("login-form__submit-button"));
    await expect(canvas.getByText("Email is required")).toBeInTheDocument();
  }
} satisfies Story`,...i.parameters?.docs?.source}}};n.parameters={...n.parameters,docs:{...n.parameters?.docs,source:{originalSource:`{
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
}`,...n.parameters?.docs?.source}}};m.parameters={...m.parameters,docs:{...m.parameters?.docs,source:{originalSource:`{
  args: defaultArgs,
  play: async ({
    canvas,
    userEvent
  }) => {
    await userEvent.type(canvas.getByTestId("login-form__email-input"), "email@provider.com");
    await userEvent.click(canvas.getByTestId("login-form__submit-button"));
    await expect(canvas.getByText("Password is required")).toBeInTheDocument();
  }
}`,...m.parameters?.docs?.source}}};const F=["Standard","Success","EmailMissing","EmailInvalid","PasswordMissing"];export{n as EmailInvalid,i as EmailMissing,m as PasswordMissing,o as Standard,r as Success,F as __namedExportsOrder,q as default};
