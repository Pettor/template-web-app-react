import{w as u,u as t,e as a}from"./index-BM0gtWul.js";import{b as I}from"./DocumentationLayout-CaF55Pd3.js";import"./jsx-runtime-D_zvdyIk.js";import{S as h}from"./SignUpForm-DWLZF-Ik.js";import"./index.esm-CBUmS8RG.js";import"./index-CtQTiInQ.js";import"./_commonjsHelpers-Cpj98o6Y.js";import"./index-DJW_MaEJ.js";import"./ButtonLoading-BsvVZM4L.js";import"./clsx-B-dksMZM.js";import"./Modal-B3f_6-yX.js";import"./index-D9WrIkEy.js";import"./Toast-99C2H297.js";import"./ToastNotifier-BGnXCfzV.js";import"./StorybookNavbarContentComponent-DFfGeHrl.js";import"./BasicLayout-BYo8Ed5F.js";import"./Logo-BdjsM1M9.js";import"./LogoFull-Ja5zr25l.js";import"./InputField-4pzCmL9X.js";import"./Drawer-BfJATBvs.js";import"./index-mIcdu3ve.js";import"./StorybookNavbarComponent-bcWqTQPW.js";import"./StorybookTableContentComponent-CvAsvn1j.js";import"./chunk-LSEVNFON-G8OzWBoO.js";const Q={component:h,title:"Forms/Sign Up",decorators:[I]},p={loading:!1,onSubmit:()=>console.log("onSubmit")},n={args:p},r={args:p,play:async({canvasElement:s})=>{const e=u(s);await t.type(e.getByTestId("sign-up-form__username-input"),"username"),await t.type(e.getByTestId("sign-up-form__firstname-input"),"john"),await t.type(e.getByTestId("sign-up-form__lastname-input"),"doe"),await t.type(e.getByTestId("sign-up-form__email-input"),"email@provider.com"),await t.type(e.getByTestId("sign-up-form__phonenumber-input"),"1234567890"),await t.type(e.getByTestId("sign-up-form__password-input"),"password"),await t.type(e.getByTestId("sign-up-form__confirmpassword-input"),"password"),await t.click(e.getByTestId("sign-up-form__submit-button")),await a(e.getByTestId("sign-up-form__username-input")).toHaveValue("username"),await a(e.getByTestId("sign-up-form__firstname-input")).toHaveValue("john"),await a(e.getByTestId("sign-up-form__username-input")).toHaveValue("username"),await a(e.getByTestId("sign-up-form__lastname-input")).toHaveValue("doe"),await a(e.getByTestId("sign-up-form__email-input")).toHaveValue("email@provider.com"),await a(e.getByTestId("sign-up-form__phonenumber-input")).toHaveValue("1234567890"),await a(e.getByTestId("sign-up-form__password-input")).toHaveValue("password"),await a(e.getByTestId("sign-up-form__confirmpassword-input")).toHaveValue("password")}},o={args:p,play:async({canvasElement:s})=>{const e=u(s);await t.click(e.getByTestId("sign-up-form__submit-button")),await a(e.getByText("We need to call you something")).toBeInTheDocument(),await a(e.getByText("Email is required")).toBeInTheDocument(),await a(e.getByText("Password is required")).toBeInTheDocument(),await a(e.getByText("Password must be confirmed")).toBeInTheDocument()}},i={args:p,play:async({canvasElement:s})=>{const e=u(s);await t.type(e.getByTestId("sign-up-form__username-input"),"username"),await t.type(e.getByTestId("sign-up-form__email-input"),"email@provider.com"),await t.type(e.getByTestId("sign-up-form__password-input"),"short"),await t.type(e.getByTestId("sign-up-form__confirmpassword-input"),"short"),await t.click(e.getByTestId("sign-up-form__submit-button")),await a(e.getByText("Password is too short - should be 8 chars minimum")).toBeInTheDocument()}};var m,c,g;n.parameters={...n.parameters,docs:{...(m=n.parameters)==null?void 0:m.docs,source:{originalSource:`{
  args: defaultArgs
}`,...(g=(c=n.parameters)==null?void 0:c.docs)==null?void 0:g.source}}};var d,y,_;r.parameters={...r.parameters,docs:{...(d=r.parameters)==null?void 0:d.docs,source:{originalSource:`{
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
}`,...(_=(y=r.parameters)==null?void 0:y.docs)==null?void 0:_.source}}};var w,v,l;o.parameters={...o.parameters,docs:{...(w=o.parameters)==null?void 0:w.docs,source:{originalSource:`{
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
}`,...(l=(v=o.parameters)==null?void 0:v.docs)==null?void 0:l.source}}};var f,B,T;i.parameters={...i.parameters,docs:{...(f=i.parameters)==null?void 0:f.docs,source:{originalSource:`{
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
}`,...(T=(B=i.parameters)==null?void 0:B.docs)==null?void 0:T.source}}};const R=["Standard","Success","MissingFields","IncorrectPassword"];export{i as IncorrectPassword,o as MissingFields,n as Standard,r as Success,R as __namedExportsOrder,Q as default};
//# sourceMappingURL=SignUpForm.stories-DOUduPfs.js.map
