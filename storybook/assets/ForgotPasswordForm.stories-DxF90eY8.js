import{w,u as e,e as v}from"./index-CsH4ahLp.js";import{b as y}from"./DocumentationLayout-CUyPGn5G.js";import"./jsx-runtime-CKrituN3.js";import{F as _}from"./ForgotPasswordForm-CzADUcH1.js";import"./index-CBqU2yxZ.js";import"./_commonjsHelpers-BosuxZz1.js";import"./index.esm-BqFzvOwb.js";import"./index-CBTNKYuU.js";import"./ButtonLoading-QnSKkREB.js";import"./clsx-B-dksMZM.js";import"./Modal-DRL58BCD.js";import"./index-BHSJTXCl.js";import"./Toast-BBC1S3I-.js";import"./ToastNotifier-CapnbD5w.js";import"./Navbar-Ce8UBZmt.js";import"./BasicLayout-jAjc6lfg.js";import"./Logo-FmSj7YUr.js";import"./LogoFull-ip8Ae-9H.js";import"./InputField-CKUgpGRk.js";import"./Drawer-BlUoDNl6.js";import"./index-DLc5FIae.js";import"./EnvelopeIcon-s5_RsMMm.js";const K={component:_,title:"Forms/Forgot Password",decorators:[y]},n={loading:!1,onSubmit:()=>console.log("onSubmit")},a={args:n},o={args:n,play:async({canvasElement:s})=>{const t=w(s);await e.type(t.getByTestId("forgot-password-form__email-input"),"email@provider.com"),await e.click(t.getByTestId("forgot-password-form__submit-button")),await v(t.getByTestId("forgot-password-form__email-input")).toHaveValue("email@provider.com")}},r={args:n,play:async({canvasElement:s})=>{const t=w(s);await e.type(t.getByTestId("forgot-password-form__email-input"),"incorrect"),await e.click(t.getByTestId("forgot-password-form__submit-button")),await v(t.getByText("Email must be valid")).toBeInTheDocument}};var i,m,c;a.parameters={...a.parameters,docs:{...(i=a.parameters)==null?void 0:i.docs,source:{originalSource:`{
  args: defaultArgs
} satisfies Story`,...(c=(m=a.parameters)==null?void 0:m.docs)==null?void 0:c.source}}};var p,d,u;o.parameters={...o.parameters,docs:{...(p=o.parameters)==null?void 0:p.docs,source:{originalSource:`{
  args: defaultArgs,
  play: async ({
    canvasElement
  }) => {
    const canvas = within(canvasElement);
    await userEvent.type(canvas.getByTestId("forgot-password-form__email-input"), "email@provider.com");
    await userEvent.click(canvas.getByTestId("forgot-password-form__submit-button"));
    await expect(canvas.getByTestId("forgot-password-form__email-input")).toHaveValue("email@provider.com");
  }
} satisfies Story`,...(u=(d=o.parameters)==null?void 0:d.docs)==null?void 0:u.source}}};var l,g,f;r.parameters={...r.parameters,docs:{...(l=r.parameters)==null?void 0:l.docs,source:{originalSource:`{
  args: defaultArgs,
  play: async ({
    canvasElement
  }) => {
    const canvas = within(canvasElement);
    await userEvent.type(canvas.getByTestId("forgot-password-form__email-input"), "incorrect");
    await userEvent.click(canvas.getByTestId("forgot-password-form__submit-button"));
    await expect(canvas.getByText("Email must be valid")).toBeInTheDocument;
  }
} satisfies Story`,...(f=(g=r.parameters)==null?void 0:g.docs)==null?void 0:f.source}}};const L=["Standard","Success","IncorrectEmail"];export{r as IncorrectEmail,a as Standard,o as Success,L as __namedExportsOrder,K as default};
//# sourceMappingURL=ForgotPasswordForm.stories-DxF90eY8.js.map
