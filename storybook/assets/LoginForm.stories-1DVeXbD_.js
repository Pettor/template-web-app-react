import{b as p}from"./DocumentationLayout-Z-rxhEe6.js";import"./iframe-Cysi_-j-.js";import{L as c}from"./LoginForm-Btni-uMc.js";import"./preload-helper-D9Z9MdNV.js";import"./index.esm-CBlfX6je.js";import"./ButtonLoading-CnRyO0EG.js";import"./clsx-B-dksMZM.js";import"./Modal-BS6CwUIS.js";import"./index-D9WrIkEy.js";import"./Toast-a39Wuz9C.js";import"./ToastNotifier-DEcc7MFa.js";import"./StorybookNavbarContentComponent-DP6UlABu.js";import"./BasicLayout-BVQHOiA9.js";import"./Logo-ZNsdOw4J.js";import"./LogoFull-DecW3LFd.js";import"./InputField-2ZEuT5d-.js";import"./Drawer-CL0C3e9n.js";import"./index-qF6L_Gb-.js";import"./StorybookNavbarComponent-B8SSTOY6.js";import"./StorybookTableContentComponent-DDMrB3cL.js";import"./chunk-KZPPZA2C-rvBpA5M9.js";import"./EnvelopeIcon-cOm-iPN2.js";const{expect:a,waitFor:d}=__STORYBOOK_MODULE_TEST__,F={component:c,title:"Forms/Login",decorators:[p]},s={loading:!1,onSubmit:()=>console.log("onSubmit")},o={args:s},r={args:s,play:async({canvas:t,userEvent:e})=>{await e.type(t.getByTestId("login-form__email-input"),"email@provider.com"),await e.type(t.getByTestId("login-form__password-input"),"password"),await e.click(t.getByTestId("login-form__submit-button")),d(async()=>{await a(t.getByTestId("login-form__email-input")).toHaveValue("email@provider.com"),await a(t.getByTestId("login-form__password-input")).toHaveValue("password")})}},i={args:s,play:async({canvas:t,userEvent:e})=>{await e.type(t.getByTestId("login-form__password-input"),"password"),await e.click(t.getByTestId("login-form__submit-button")),await a(t.getByText("Email is required")).toBeInTheDocument()}},n={args:s,play:async({canvas:t,userEvent:e})=>{await e.type(t.getByTestId("login-form__email-input"),"incorrect"),await e.type(t.getByTestId("login-form__password-input"),"password"),await e.click(t.getByTestId("login-form__submit-button")),await a(t.getByText("Email must be valid")).toBeInTheDocument()}},m={args:s,play:async({canvas:t,userEvent:e})=>{await e.type(t.getByTestId("login-form__email-input"),"email@provider.com"),await e.click(t.getByTestId("login-form__submit-button")),await a(t.getByText("Password is required")).toBeInTheDocument()}};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`{
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
