import{b as m}from"./DocumentationLayout-0sQIwZvZ.js";import"./iframe-VVovpiOi.js";import{F as n}from"./ForgotPasswordForm-D-z4XAqf.js";import"./index.esm-Ce_pxBX3.js";import"./ButtonLoading-DjU4rp3W.js";import"./clsx-B-dksMZM.js";import"./Modal-CurSEfQr.js";import"./index-D9WrIkEy.js";import"./Toast-0xBhZ60E.js";import"./ToastNotifier-DxnQMYpT.js";import"./StorybookNavbarContentComponent-BoVaxqlz.js";import"./BasicLayout-BZl2L6UJ.js";import"./Logo-B0SvQA_I.js";import"./LogoFull-BNJMfdSM.js";import"./InputField-C4Z-J31_.js";import"./Drawer-BYTcXcEU.js";import"./index-CVZl6vnV.js";import"./StorybookNavbarComponent-DR8VE6D3.js";import"./StorybookTableContentComponent-CGzOmVqF.js";import"./chunk-TVFJBHBT-GaUcJ0Yz.js";import"./EnvelopeIcon-ApmMiYDz.js";const{expect:i}=__STORYBOOK_MODULE_TEST__,A={component:n,title:"Forms/Forgot Password",decorators:[m]},s={loading:!1,onSubmit:()=>console.log("onSubmit")},r={args:s},a={args:s,play:async({canvas:t,userEvent:o})=>{await o.type(t.getByTestId("forgot-password-form__email-input"),"email@provider.com"),await o.click(t.getByTestId("forgot-password-form__submit-button")),await i(t.getByTestId("forgot-password-form__email-input")).toHaveValue("email@provider.com")}},e={args:s,play:async({canvas:t,userEvent:o})=>{await o.type(t.getByTestId("forgot-password-form__email-input"),"incorrect"),await o.click(t.getByTestId("forgot-password-form__submit-button")),await i(t.getByText("Email must be valid")).toBeInTheDocument}};r.parameters={...r.parameters,docs:{...r.parameters?.docs,source:{originalSource:`{
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
