import{b as _}from"./DocumentationLayout-7ASonCf3.js";import"./iframe-xPoOMcH3.js";import{F as w}from"./ForgotPasswordForm-BV_MvsXn.js";import"./index.esm-Dh3BXQ-T.js";import"./ButtonLoading-CZeeBir4.js";import"./clsx-B-dksMZM.js";import"./Modal-BEIuBGM1.js";import"./index-D9WrIkEy.js";import"./Toast-DZYaL5be.js";import"./ToastNotifier-e3QSRhmt.js";import"./StorybookNavbarContentComponent-DkiwGjxU.js";import"./BasicLayout-CbyF0bYq.js";import"./Logo-CBYUuAqn.js";import"./LogoFull-CJVWlxWf.js";import"./InputField-CPfo3L9C.js";import"./Drawer-C4xIhs9M.js";import"./index-Dl7v4I77.js";import"./StorybookNavbarComponent-CJgC1IRa.js";import"./StorybookTableContentComponent-CLo2IFF4.js";import"./chunk-TVFJBHBT-BUrEn1b-.js";import"./EnvelopeIcon-BoPPN7pO.js";const{expect:f}=__STORYBOOK_MODULE_TEST__,M={component:w,title:"Forms/Forgot Password",decorators:[_]},s={loading:!1,onSubmit:()=>console.log("onSubmit")},r={args:s},a={args:s,play:async({canvas:t,userEvent:o})=>{await o.type(t.getByTestId("forgot-password-form__email-input"),"email@provider.com"),await o.click(t.getByTestId("forgot-password-form__submit-button")),await f(t.getByTestId("forgot-password-form__email-input")).toHaveValue("email@provider.com")}},e={args:s,play:async({canvas:t,userEvent:o})=>{await o.type(t.getByTestId("forgot-password-form__email-input"),"incorrect"),await o.click(t.getByTestId("forgot-password-form__submit-button")),await f(t.getByText("Email must be valid")).toBeInTheDocument}};var i,m,n;r.parameters={...r.parameters,docs:{...(i=r.parameters)==null?void 0:i.docs,source:{originalSource:`{
  args: defaultArgs
}`,...(n=(m=r.parameters)==null?void 0:m.docs)==null?void 0:n.source}}};var p,c,d;a.parameters={...a.parameters,docs:{...(p=a.parameters)==null?void 0:p.docs,source:{originalSource:`{
  args: defaultArgs,
  play: async ({
    canvas,
    userEvent
  }) => {
    await userEvent.type(canvas.getByTestId("forgot-password-form__email-input"), "email@provider.com");
    await userEvent.click(canvas.getByTestId("forgot-password-form__submit-button"));
    await expect(canvas.getByTestId("forgot-password-form__email-input")).toHaveValue("email@provider.com");
  }
}`,...(d=(c=a.parameters)==null?void 0:c.docs)==null?void 0:d.source}}};var u,g,l;e.parameters={...e.parameters,docs:{...(u=e.parameters)==null?void 0:u.docs,source:{originalSource:`{
  args: defaultArgs,
  play: async ({
    canvas,
    userEvent
  }) => {
    await userEvent.type(canvas.getByTestId("forgot-password-form__email-input"), "incorrect");
    await userEvent.click(canvas.getByTestId("forgot-password-form__submit-button"));
    await expect(canvas.getByText("Email must be valid")).toBeInTheDocument;
  }
}`,...(l=(g=e.parameters)==null?void 0:g.docs)==null?void 0:l.source}}};const R=["Standard","Success","IncorrectEmail"];export{e as IncorrectEmail,r as Standard,a as Success,R as __namedExportsOrder,M as default};
//# sourceMappingURL=ForgotPasswordForm.stories-uqWDmU30.js.map
