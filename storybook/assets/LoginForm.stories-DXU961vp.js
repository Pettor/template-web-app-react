import{b as p}from"./DocumentationLayout-Cm4VZaS8.js";import"./iframe-BUrpZTC8.js";import{L as c}from"./LoginForm-B6SQlWuv.js";import"./preload-helper-D9Z9MdNV.js";import"./index.esm-BQ4Y4HLR.js";import"./ButtonLoading-Cyn6c8T3.js";import"./clsx-B-dksMZM.js";import"./Modal-CtKol1Yl.js";import"./index-D9WrIkEy.js";import"./Toast-CG404bCP.js";import"./ToastNotifier-C2O5cqxC.js";import"./StorybookNavbarContentComponent-vQ5puYhG.js";import"./BasicLayout-BNYJtu6U.js";import"./Logo-tSCg1WHM.js";import"./LogoFull-B7bcKucG.js";import"./InputField-Dx15XDaV.js";import"./Drawer-BXVON29h.js";import"./index-COADeKQK.js";import"./StorybookNavbarComponent-5auVJ2jj.js";import"./StorybookTableContentComponent-B24aJwzA.js";import"./chunk-4X5ZEQ5K-DKZdp5Hc.js";import"./EnvelopeIcon-BZYlLywS.js";const{expect:a,waitFor:d}=__STORYBOOK_MODULE_TEST__,F={component:c,title:"Forms/Login",decorators:[p]},s={loading:!1,onSubmit:()=>console.log("onSubmit")},o={args:s},r={args:s,play:async({canvas:t,userEvent:e})=>{await e.type(t.getByTestId("login-form__email-input"),"email@provider.com"),await e.type(t.getByTestId("login-form__password-input"),"password"),await e.click(t.getByTestId("login-form__submit-button")),d(async()=>{await a(t.getByTestId("login-form__email-input")).toHaveValue("email@provider.com"),await a(t.getByTestId("login-form__password-input")).toHaveValue("password")})}},i={args:s,play:async({canvas:t,userEvent:e})=>{await e.type(t.getByTestId("login-form__password-input"),"password"),await e.click(t.getByTestId("login-form__submit-button")),await a(t.getByText("Email is required")).toBeInTheDocument()}},n={args:s,play:async({canvas:t,userEvent:e})=>{await e.type(t.getByTestId("login-form__email-input"),"incorrect"),await e.type(t.getByTestId("login-form__password-input"),"password"),await e.click(t.getByTestId("login-form__submit-button")),await a(t.getByText("Email must be valid")).toBeInTheDocument()}},m={args:s,play:async({canvas:t,userEvent:e})=>{await e.type(t.getByTestId("login-form__email-input"),"email@provider.com"),await e.click(t.getByTestId("login-form__submit-button")),await a(t.getByText("Password is required")).toBeInTheDocument()}};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`{
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
}`,...m.parameters?.docs?.source}}};const H=["Standard","Success","EmailMissing","EmailInvalid","PasswordMissing"];export{n as EmailInvalid,i as EmailMissing,m as PasswordMissing,o as Standard,r as Success,H as __namedExportsOrder,F as default};
