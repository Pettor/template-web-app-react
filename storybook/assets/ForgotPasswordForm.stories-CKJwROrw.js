import{w,u as e,e as v}from"./index-CIfn4WAl.js";import{b as y}from"./DocumentationLayout-CaF55Pd3.js";import"./jsx-runtime-D_zvdyIk.js";import{F as _}from"./ForgotPasswordForm-CZLRxvZO.js";import"./index.esm-CmkdH1u_.js";import"./index-F2Fta7eo.js";import"./_commonjsHelpers-Cpj98o6Y.js";import"./index-COWBiyzR.js";import"./ButtonLoading-BsvVZM4L.js";import"./clsx-B-dksMZM.js";import"./Modal-P6cqboxY.js";import"./index-D9WrIkEy.js";import"./Toast-99C2H297.js";import"./ToastNotifier-DgdGGo6H.js";import"./StorybookNavbarContentComponent-C-rBQhJy.js";import"./BasicLayout-BYo8Ed5F.js";import"./Logo-BdjsM1M9.js";import"./LogoFull-Ja5zr25l.js";import"./InputField-Q9yk6IcH.js";import"./Drawer-CeOUtKGF.js";import"./index-D9DPPds7.js";import"./StorybookNavbarComponent-CEJ5_X5G.js";import"./StorybookTableContentComponent-CvAsvn1j.js";import"./chunk-LSEVNFON-G8OzWBoO.js";import"./EnvelopeIcon-kZSFSbkY.js";const N={component:_,title:"Forms/Forgot Password",decorators:[y]},n={loading:!1,onSubmit:()=>console.log("onSubmit")},a={args:n},o={args:n,play:async({canvasElement:s})=>{const t=w(s);await e.type(t.getByTestId("forgot-password-form__email-input"),"email@provider.com"),await e.click(t.getByTestId("forgot-password-form__submit-button")),await v(t.getByTestId("forgot-password-form__email-input")).toHaveValue("email@provider.com")}},r={args:n,play:async({canvasElement:s})=>{const t=w(s);await e.type(t.getByTestId("forgot-password-form__email-input"),"incorrect"),await e.click(t.getByTestId("forgot-password-form__submit-button")),await v(t.getByText("Email must be valid")).toBeInTheDocument}};var i,m,c;a.parameters={...a.parameters,docs:{...(i=a.parameters)==null?void 0:i.docs,source:{originalSource:`{
  args: defaultArgs
}`,...(c=(m=a.parameters)==null?void 0:m.docs)==null?void 0:c.source}}};var p,d,u;o.parameters={...o.parameters,docs:{...(p=o.parameters)==null?void 0:p.docs,source:{originalSource:`{
  args: defaultArgs,
  play: async ({
    canvasElement
  }) => {
    const canvas = within(canvasElement);
    await userEvent.type(canvas.getByTestId("forgot-password-form__email-input"), "email@provider.com");
    await userEvent.click(canvas.getByTestId("forgot-password-form__submit-button"));
    await expect(canvas.getByTestId("forgot-password-form__email-input")).toHaveValue("email@provider.com");
  }
}`,...(u=(d=o.parameters)==null?void 0:d.docs)==null?void 0:u.source}}};var l,g,f;r.parameters={...r.parameters,docs:{...(l=r.parameters)==null?void 0:l.docs,source:{originalSource:`{
  args: defaultArgs,
  play: async ({
    canvasElement
  }) => {
    const canvas = within(canvasElement);
    await userEvent.type(canvas.getByTestId("forgot-password-form__email-input"), "incorrect");
    await userEvent.click(canvas.getByTestId("forgot-password-form__submit-button"));
    await expect(canvas.getByText("Email must be valid")).toBeInTheDocument;
  }
}`,...(f=(g=r.parameters)==null?void 0:g.docs)==null?void 0:f.source}}};const Q=["Standard","Success","IncorrectEmail"];export{r as IncorrectEmail,a as Standard,o as Success,Q as __namedExportsOrder,N as default};
//# sourceMappingURL=ForgotPasswordForm.stories-CKJwROrw.js.map
