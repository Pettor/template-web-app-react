import{b as m}from"./DocumentationLayout-BbGaX74R.js";import"./iframe-BrlSpEe-.js";import{F as n}from"./ForgotPasswordForm-CyJ0Z06j.js";import"./index.esm-BkldTltq.js";import"./ButtonLoading-Bejj5Mi-.js";import"./clsx-B-dksMZM.js";import"./Modal-pfpEtClB.js";import"./index-D9WrIkEy.js";import"./Toast-AYUEDBYG.js";import"./ToastNotifier-B5zCHlFR.js";import"./StorybookNavbarContentComponent-DCVW26y0.js";import"./BasicLayout-CARtf233.js";import"./Logo-BOagy_0U.js";import"./LogoFull-DicLI17i.js";import"./InputField-CFxoqDez.js";import"./Drawer-Bg9-v4yb.js";import"./index-DVP9tCcL.js";import"./StorybookNavbarComponent-CTJfuYiP.js";import"./StorybookTableContentComponent-BYr0C2sA.js";import"./chunk-KZPPZA2C-rvBpA5M9.js";import"./EnvelopeIcon-D4-uF6nT.js";const{expect:i}=__STORYBOOK_MODULE_TEST__,A={component:n,title:"Forms/Forgot Password",decorators:[m]},s={loading:!1,onSubmit:()=>console.log("onSubmit")},r={args:s},a={args:s,play:async({canvas:t,userEvent:o})=>{await o.type(t.getByTestId("forgot-password-form__email-input"),"email@provider.com"),await o.click(t.getByTestId("forgot-password-form__submit-button")),await i(t.getByTestId("forgot-password-form__email-input")).toHaveValue("email@provider.com")}},e={args:s,play:async({canvas:t,userEvent:o})=>{await o.type(t.getByTestId("forgot-password-form__email-input"),"incorrect"),await o.click(t.getByTestId("forgot-password-form__submit-button")),await i(t.getByText("Email must be valid")).toBeInTheDocument}};r.parameters={...r.parameters,docs:{...r.parameters?.docs,source:{originalSource:`{
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
