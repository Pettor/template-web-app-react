import{b as m}from"./DocumentationLayout-Cyz-fbDY.js";import"./iframe-D2v7luz4.js";import{F as n}from"./ForgotPasswordForm-D3IYsFb3.js";import"./index.esm-BhPk2sJx.js";import"./ButtonLoading-DXx3SCAQ.js";import"./clsx-B-dksMZM.js";import"./Modal-upctH1qH.js";import"./index-D9WrIkEy.js";import"./Toast-C3qXTLIq.js";import"./ToastNotifier-C3PEvbbH.js";import"./StorybookNavbarContentComponent-lbjuo-0L.js";import"./BasicLayout-DI8A0xOp.js";import"./Logo-l5LtXbTJ.js";import"./LogoFull-B0Ht6Dly.js";import"./InputField-fo3JMrbA.js";import"./Drawer-YeVekm1m.js";import"./index-P_QEV54E.js";import"./StorybookNavbarComponent-D_7eWH5c.js";import"./StorybookTableContentComponent-DpCrplXs.js";import"./chunk-KZPPZA2C-rvBpA5M9.js";import"./EnvelopeIcon-CNbYiGX5.js";const{expect:i}=__STORYBOOK_MODULE_TEST__,A={component:n,title:"Forms/Forgot Password",decorators:[m]},s={loading:!1,onSubmit:()=>console.log("onSubmit")},r={args:s},a={args:s,play:async({canvas:t,userEvent:o})=>{await o.type(t.getByTestId("forgot-password-form__email-input"),"email@provider.com"),await o.click(t.getByTestId("forgot-password-form__submit-button")),await i(t.getByTestId("forgot-password-form__email-input")).toHaveValue("email@provider.com")}},e={args:s,play:async({canvas:t,userEvent:o})=>{await o.type(t.getByTestId("forgot-password-form__email-input"),"incorrect"),await o.click(t.getByTestId("forgot-password-form__submit-button")),await i(t.getByText("Email must be valid")).toBeInTheDocument}};r.parameters={...r.parameters,docs:{...r.parameters?.docs,source:{originalSource:`{
  args: defaultArgs
}`,...r.parameters?.docs?.source}}};a.parameters={...a.parameters,docs:{...a.parameters?.docs,source:{originalSource:`{
  args: defaultArgs,
  play: async ({
    canvas,
    userEvent
  }) => {
    await userEvent.type(canvas.getByTestId("forgot-password-form__email-input"), "email@provider.com");
    await userEvent.click(canvas.getByTestId("forgot-password-form__submit-button"));
    await expect(canvas.getByTestId("forgot-password-form__email-input")).toHaveValue("email@provider.com");
  }
}`,...a.parameters?.docs?.source}}};e.parameters={...e.parameters,docs:{...e.parameters?.docs,source:{originalSource:`{
  args: defaultArgs,
  play: async ({
    canvas,
    userEvent
  }) => {
    await userEvent.type(canvas.getByTestId("forgot-password-form__email-input"), "incorrect");
    await userEvent.click(canvas.getByTestId("forgot-password-form__submit-button"));
    await expect(canvas.getByText("Email must be valid")).toBeInTheDocument;
  }
}`,...e.parameters?.docs?.source}}};const D=["Standard","Success","IncorrectEmail"];export{e as IncorrectEmail,r as Standard,a as Success,D as __namedExportsOrder,A as default};
