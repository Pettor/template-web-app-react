import{b as m}from"./DocumentationLayout-BXTjmOxg.js";import"./iframe-DePnZJLt.js";import{F as n}from"./ForgotPasswordForm-BE2mJU_q.js";import"./preload-helper-D9Z9MdNV.js";import"./index.esm-BYxWb7Ll.js";import"./ButtonLoading-Cnh_QxOZ.js";import"./clsx-B-dksMZM.js";import"./Modal-07CJRFfQ.js";import"./index-D9WrIkEy.js";import"./Toast-CRm7HbGP.js";import"./ToastNotifier-DglMRguc.js";import"./StorybookNavbarContentComponent-DZ9KkYlY.js";import"./BasicLayout-DZ6myzCZ.js";import"./Logo-YG8JVTJ3.js";import"./LogoFull-YPFk1cGK.js";import"./InputField-DQKjnJYA.js";import"./Drawer-BHepEfhm.js";import"./index-D-6AceKA.js";import"./StorybookNavbarComponent-BmU6hOFB.js";import"./StorybookTableContentComponent-DVFmibA9.js";import"./chunk-4X5ZEQ5K-DKZdp5Hc.js";import"./EnvelopeIcon-Cj69iMs2.js";const{expect:i}=__STORYBOOK_MODULE_TEST__,D={component:n,title:"Forms/Forgot Password",decorators:[m]},s={loading:!1,onSubmit:()=>console.log("onSubmit")},r={args:s},a={args:s,play:async({canvas:t,userEvent:o})=>{await o.type(t.getByTestId("forgot-password-form__email-input"),"email@provider.com"),await o.click(t.getByTestId("forgot-password-form__submit-button")),await i(t.getByTestId("forgot-password-form__email-input")).toHaveValue("email@provider.com")}},e={args:s,play:async({canvas:t,userEvent:o})=>{await o.type(t.getByTestId("forgot-password-form__email-input"),"incorrect"),await o.click(t.getByTestId("forgot-password-form__submit-button")),await i(t.getByText("Email must be valid")).toBeInTheDocument}};r.parameters={...r.parameters,docs:{...r.parameters?.docs,source:{originalSource:`{
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
}`,...e.parameters?.docs?.source}}};const h=["Standard","Success","IncorrectEmail"];export{e as IncorrectEmail,r as Standard,a as Success,h as __namedExportsOrder,D as default};
