import{w as u,u as t,e as a}from"./index-BWUooFYP.js";import{b as I}from"./DocumentationLayout-Y1bzoHMz.js";import"./jsx-runtime-Cf8x2fCZ.js";import{S as h}from"./SignUpForm-DYzok_Sq.js";import"./index-yBjzXJbu.js";import"./index.esm-j2opUZ0r.js";import"./index-DYAwP31-.js";import"./_commonjsHelpers-BosuxZz1.js";import"./index-Bp9CRMyg.js";import"./ButtonLoading-CQ_8rNP9.js";import"./clsx-B-dksMZM.js";import"./Modal-8KF-LmY5.js";import"./index-D9WrIkEy.js";import"./Toast-CR1qz1UP.js";import"./ToastNotifier-DS_YutQe.js";import"./Navbar-DVbG2Mbl.js";import"./BasicLayout-DmACyxSB.js";import"./Logo-DHfADt94.js";import"./LogoFull-D7FNlH2y.js";import"./InputField-B8d0msWU.js";import"./Drawer-BKR-v1Hj.js";import"./index-BoL89-kC.js";const L={component:h,title:"Forms/Sign Up",decorators:[I]},p={loading:!1,onSubmit:()=>console.log("onSubmit")},n={args:p},r={args:p,play:async({canvasElement:s})=>{const e=u(s);await t.type(e.getByTestId("sign-up-form__username-input"),"username"),await t.type(e.getByTestId("sign-up-form__firstname-input"),"john"),await t.type(e.getByTestId("sign-up-form__lastname-input"),"doe"),await t.type(e.getByTestId("sign-up-form__email-input"),"email@provider.com"),await t.type(e.getByTestId("sign-up-form__phonenumber-input"),"1234567890"),await t.type(e.getByTestId("sign-up-form__password-input"),"password"),await t.type(e.getByTestId("sign-up-form__confirmpassword-input"),"password"),await t.click(e.getByTestId("sign-up-form__submit-button")),await a(e.getByTestId("sign-up-form__username-input")).toHaveValue("username"),await a(e.getByTestId("sign-up-form__firstname-input")).toHaveValue("john"),await a(e.getByTestId("sign-up-form__username-input")).toHaveValue("username"),await a(e.getByTestId("sign-up-form__lastname-input")).toHaveValue("doe"),await a(e.getByTestId("sign-up-form__email-input")).toHaveValue("email@provider.com"),await a(e.getByTestId("sign-up-form__phonenumber-input")).toHaveValue("1234567890"),await a(e.getByTestId("sign-up-form__password-input")).toHaveValue("password"),await a(e.getByTestId("sign-up-form__confirmpassword-input")).toHaveValue("password")}},i={args:p,play:async({canvasElement:s})=>{const e=u(s);await t.click(e.getByTestId("sign-up-form__submit-button")),await a(e.getByText("We need to call you something")).toBeInTheDocument(),await a(e.getByText("Email is required")).toBeInTheDocument(),await a(e.getByText("Password is required")).toBeInTheDocument(),await a(e.getByText("Password must be confirmed")).toBeInTheDocument()}},o={args:p,play:async({canvasElement:s})=>{const e=u(s);await t.type(e.getByTestId("sign-up-form__username-input"),"username"),await t.type(e.getByTestId("sign-up-form__email-input"),"email@provider.com"),await t.type(e.getByTestId("sign-up-form__password-input"),"short"),await t.type(e.getByTestId("sign-up-form__confirmpassword-input"),"short"),await t.click(e.getByTestId("sign-up-form__submit-button")),await a(e.getByText("Password is too short - should be 8 chars minimum")).toBeInTheDocument()}};var m,c,g;n.parameters={...n.parameters,docs:{...(m=n.parameters)==null?void 0:m.docs,source:{originalSource:`{
  args: defaultArgs
} satisfies Story`,...(g=(c=n.parameters)==null?void 0:c.docs)==null?void 0:g.source}}};var d,y,_;r.parameters={...r.parameters,docs:{...(d=r.parameters)==null?void 0:d.docs,source:{originalSource:`{
  args: defaultArgs,
  play: async ({
    canvasElement
  }) => {
    const canvas = within(canvasElement);
    await userEvent.type(canvas.getByTestId("sign-up-form__username-input"), "username");
    await userEvent.type(canvas.getByTestId("sign-up-form__firstname-input"), "john");
    await userEvent.type(canvas.getByTestId("sign-up-form__lastname-input"), "doe");
    await userEvent.type(canvas.getByTestId("sign-up-form__email-input"), "email@provider.com");
    await userEvent.type(canvas.getByTestId("sign-up-form__phonenumber-input"), "1234567890");
    await userEvent.type(canvas.getByTestId("sign-up-form__password-input"), "password");
    await userEvent.type(canvas.getByTestId("sign-up-form__confirmpassword-input"), "password");
    await userEvent.click(canvas.getByTestId("sign-up-form__submit-button"));
    await expect(canvas.getByTestId("sign-up-form__username-input")).toHaveValue("username");
    await expect(canvas.getByTestId("sign-up-form__firstname-input")).toHaveValue("john");
    await expect(canvas.getByTestId("sign-up-form__username-input")).toHaveValue("username");
    await expect(canvas.getByTestId("sign-up-form__lastname-input")).toHaveValue("doe");
    await expect(canvas.getByTestId("sign-up-form__email-input")).toHaveValue("email@provider.com");
    await expect(canvas.getByTestId("sign-up-form__phonenumber-input")).toHaveValue("1234567890");
    await expect(canvas.getByTestId("sign-up-form__password-input")).toHaveValue("password");
    await expect(canvas.getByTestId("sign-up-form__confirmpassword-input")).toHaveValue("password");
  }
} satisfies Story`,...(_=(y=r.parameters)==null?void 0:y.docs)==null?void 0:_.source}}};var w,v,l;i.parameters={...i.parameters,docs:{...(w=i.parameters)==null?void 0:w.docs,source:{originalSource:`{
  args: defaultArgs,
  play: async ({
    canvasElement
  }) => {
    const canvas = within(canvasElement);
    await userEvent.click(canvas.getByTestId("sign-up-form__submit-button"));
    await expect(canvas.getByText("We need to call you something")).toBeInTheDocument();
    await expect(canvas.getByText("Email is required")).toBeInTheDocument();
    await expect(canvas.getByText("Password is required")).toBeInTheDocument();
    await expect(canvas.getByText("Password must be confirmed")).toBeInTheDocument();
  }
}`,...(l=(v=i.parameters)==null?void 0:v.docs)==null?void 0:l.source}}};var f,B,T;o.parameters={...o.parameters,docs:{...(f=o.parameters)==null?void 0:f.docs,source:{originalSource:`{
  args: defaultArgs,
  play: async ({
    canvasElement
  }) => {
    const canvas = within(canvasElement);
    await userEvent.type(canvas.getByTestId("sign-up-form__username-input"), "username");
    await userEvent.type(canvas.getByTestId("sign-up-form__email-input"), "email@provider.com");
    await userEvent.type(canvas.getByTestId("sign-up-form__password-input"), "short");
    await userEvent.type(canvas.getByTestId("sign-up-form__confirmpassword-input"), "short");
    await userEvent.click(canvas.getByTestId("sign-up-form__submit-button"));
    await expect(canvas.getByText("Password is too short - should be 8 chars minimum")).toBeInTheDocument();
  }
}`,...(T=(B=o.parameters)==null?void 0:B.docs)==null?void 0:T.source}}};const N=["Standard","Success","MissingFields","IncorrectPassword"];export{o as IncorrectPassword,i as MissingFields,n as Standard,r as Success,N as __namedExportsOrder,L as default};
//# sourceMappingURL=SignUpForm.stories-ChCLRN5H.js.map
