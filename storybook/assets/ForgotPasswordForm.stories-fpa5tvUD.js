import{b as m}from"./DocumentationLayout-Cm4VZaS8.js";import"./iframe-BUrpZTC8.js";import{F as n}from"./ForgotPasswordForm-CsWc1T8r.js";import"./preload-helper-D9Z9MdNV.js";import"./index.esm-BQ4Y4HLR.js";import"./ButtonLoading-Cyn6c8T3.js";import"./clsx-B-dksMZM.js";import"./Modal-CtKol1Yl.js";import"./index-D9WrIkEy.js";import"./Toast-CG404bCP.js";import"./ToastNotifier-C2O5cqxC.js";import"./StorybookNavbarContentComponent-vQ5puYhG.js";import"./BasicLayout-BNYJtu6U.js";import"./Logo-tSCg1WHM.js";import"./LogoFull-B7bcKucG.js";import"./InputField-Dx15XDaV.js";import"./Drawer-BXVON29h.js";import"./index-COADeKQK.js";import"./StorybookNavbarComponent-5auVJ2jj.js";import"./StorybookTableContentComponent-B24aJwzA.js";import"./chunk-4X5ZEQ5K-DKZdp5Hc.js";import"./EnvelopeIcon-BZYlLywS.js";const{expect:i}=__STORYBOOK_MODULE_TEST__,D={component:n,title:"Forms/Forgot Password",decorators:[m]},s={loading:!1,onSubmit:()=>console.log("onSubmit")},r={args:s},a={args:s,play:async({canvas:t,userEvent:o})=>{await o.type(t.getByTestId("forgot-password-form__email-input"),"email@provider.com"),await o.click(t.getByTestId("forgot-password-form__submit-button")),await i(t.getByTestId("forgot-password-form__email-input")).toHaveValue("email@provider.com")}},e={args:s,play:async({canvas:t,userEvent:o})=>{await o.type(t.getByTestId("forgot-password-form__email-input"),"incorrect"),await o.click(t.getByTestId("forgot-password-form__submit-button")),await i(t.getByText("Email must be valid")).toBeInTheDocument}};r.parameters={...r.parameters,docs:{...r.parameters?.docs,source:{originalSource:`{
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
