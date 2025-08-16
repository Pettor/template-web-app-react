import{b as m}from"./DocumentationLayout-Z-rxhEe6.js";import"./iframe-Cysi_-j-.js";import{F as n}from"./ForgotPasswordForm-Baw5PlMx.js";import"./preload-helper-D9Z9MdNV.js";import"./index.esm-CBlfX6je.js";import"./ButtonLoading-CnRyO0EG.js";import"./clsx-B-dksMZM.js";import"./Modal-BS6CwUIS.js";import"./index-D9WrIkEy.js";import"./Toast-a39Wuz9C.js";import"./ToastNotifier-DEcc7MFa.js";import"./StorybookNavbarContentComponent-DP6UlABu.js";import"./BasicLayout-BVQHOiA9.js";import"./Logo-ZNsdOw4J.js";import"./LogoFull-DecW3LFd.js";import"./InputField-2ZEuT5d-.js";import"./Drawer-CL0C3e9n.js";import"./index-qF6L_Gb-.js";import"./StorybookNavbarComponent-B8SSTOY6.js";import"./StorybookTableContentComponent-DDMrB3cL.js";import"./chunk-KZPPZA2C-rvBpA5M9.js";import"./EnvelopeIcon-cOm-iPN2.js";const{expect:i}=__STORYBOOK_MODULE_TEST__,D={component:n,title:"Forms/Forgot Password",decorators:[m]},s={loading:!1,onSubmit:()=>console.log("onSubmit")},r={args:s},a={args:s,play:async({canvas:t,userEvent:o})=>{await o.type(t.getByTestId("forgot-password-form__email-input"),"email@provider.com"),await o.click(t.getByTestId("forgot-password-form__submit-button")),await i(t.getByTestId("forgot-password-form__email-input")).toHaveValue("email@provider.com")}},e={args:s,play:async({canvas:t,userEvent:o})=>{await o.type(t.getByTestId("forgot-password-form__email-input"),"incorrect"),await o.click(t.getByTestId("forgot-password-form__submit-button")),await i(t.getByText("Email must be valid")).toBeInTheDocument}};r.parameters={...r.parameters,docs:{...r.parameters?.docs,source:{originalSource:`{
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
