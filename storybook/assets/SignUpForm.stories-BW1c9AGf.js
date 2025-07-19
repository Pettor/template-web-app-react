import{b as p}from"./DocumentationLayout-BbGaX74R.js";import"./iframe-BrlSpEe-.js";import{S as u}from"./SignUpForm-g1xjWJ2y.js";import"./index.esm-BkldTltq.js";import"./ButtonLoading-Bejj5Mi-.js";import"./clsx-B-dksMZM.js";import"./Modal-pfpEtClB.js";import"./index-D9WrIkEy.js";import"./Toast-AYUEDBYG.js";import"./ToastNotifier-B5zCHlFR.js";import"./StorybookNavbarContentComponent-DCVW26y0.js";import"./BasicLayout-CARtf233.js";import"./Logo-BOagy_0U.js";import"./LogoFull-DicLI17i.js";import"./InputField-CFxoqDez.js";import"./Drawer-Bg9-v4yb.js";import"./index-DVP9tCcL.js";import"./StorybookNavbarComponent-CTJfuYiP.js";import"./StorybookTableContentComponent-BYr0C2sA.js";import"./chunk-KZPPZA2C-rvBpA5M9.js";const{expect:a,waitFor:m}=__STORYBOOK_MODULE_TEST__,P={component:u,title:"Forms/Sign Up",decorators:[p]},i={loading:!1,onSubmit:()=>console.log("onSubmit")},s={args:i},n={args:i,play:async({canvas:e,userEvent:t})=>{await t.type(e.getByTestId("sign-up-form__username-input"),"username"),await t.type(e.getByTestId("sign-up-form__firstname-input"),"john"),await t.type(e.getByTestId("sign-up-form__lastname-input"),"doe"),await t.type(e.getByTestId("sign-up-form__email-input"),"email@provider.com"),await t.type(e.getByTestId("sign-up-form__phonenumber-input"),"1234567890"),await t.type(e.getByTestId("sign-up-form__password-input"),"password"),await t.type(e.getByTestId("sign-up-form__confirmpassword-input"),"password"),await t.click(e.getByTestId("sign-up-form__submit-button")),await a(e.getByTestId("sign-up-form__username-input")).toHaveValue("username"),await a(e.getByTestId("sign-up-form__firstname-input")).toHaveValue("john"),await a(e.getByTestId("sign-up-form__username-input")).toHaveValue("username"),await a(e.getByTestId("sign-up-form__lastname-input")).toHaveValue("doe"),await a(e.getByTestId("sign-up-form__email-input")).toHaveValue("email@provider.com"),await a(e.getByTestId("sign-up-form__phonenumber-input")).toHaveValue("1234567890"),await a(e.getByTestId("sign-up-form__password-input")).toHaveValue("password"),await a(e.getByTestId("sign-up-form__confirmpassword-input")).toHaveValue("password")}},o={args:i,play:async({canvas:e,userEvent:t})=>{await t.click(e.getByTestId("sign-up-form__submit-button")),m(async()=>{await a(e.getByText("We need to call you something")).toBeInTheDocument(),await a(e.getByText("Email is required")).toBeInTheDocument(),await a(e.getByText("Password is required")).toBeInTheDocument(),await a(e.getByText("Password must be confirmed")).toBeInTheDocument()})}},r={args:i,play:async({canvas:e,userEvent:t})=>{await t.type(e.getByTestId("sign-up-form__username-input"),"username"),await t.type(e.getByTestId("sign-up-form__email-input"),"email@provider.com"),await t.type(e.getByTestId("sign-up-form__password-input"),"short"),await t.type(e.getByTestId("sign-up-form__confirmpassword-input"),"short"),await t.click(e.getByTestId("sign-up-form__submit-button")),await a(e.getByText("Password is too short - should be 8 chars minimum")).toBeInTheDocument()}};s.parameters={...s.parameters,docs:{...s.parameters?.docs,source:{originalSource:`{
  args: defaultArgs
}`,...s.parameters?.docs?.source}}};n.parameters={...n.parameters,docs:{...n.parameters?.docs,source:{originalSource:`{
  args: defaultArgs,
  play: async ({
    canvas,
    userEvent
  }) => {
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
}`,...n.parameters?.docs?.source}}};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`{
  args: defaultArgs,
  play: async ({
    canvas,
    userEvent
  }) => {
    await userEvent.click(canvas.getByTestId("sign-up-form__submit-button"));
    waitFor(async () => {
      await expect(canvas.getByText("We need to call you something")).toBeInTheDocument();
      await expect(canvas.getByText("Email is required")).toBeInTheDocument();
      await expect(canvas.getByText("Password is required")).toBeInTheDocument();
      await expect(canvas.getByText("Password must be confirmed")).toBeInTheDocument();
    });
  }
}`,...o.parameters?.docs?.source}}};r.parameters={...r.parameters,docs:{...r.parameters?.docs,source:{originalSource:`{
  args: defaultArgs,
  play: async ({
    canvas,
    userEvent
  }) => {
    await userEvent.type(canvas.getByTestId("sign-up-form__username-input"), "username");
    await userEvent.type(canvas.getByTestId("sign-up-form__email-input"), "email@provider.com");
    await userEvent.type(canvas.getByTestId("sign-up-form__password-input"), "short");
    await userEvent.type(canvas.getByTestId("sign-up-form__confirmpassword-input"), "short");
    await userEvent.click(canvas.getByTestId("sign-up-form__submit-button"));
    await expect(canvas.getByText("Password is too short - should be 8 chars minimum")).toBeInTheDocument();
  }
}`,...r.parameters?.docs?.source}}};const k=["Standard","Success","MissingFields","IncorrectPassword"];export{r as IncorrectPassword,o as MissingFields,s as Standard,n as Success,k as __namedExportsOrder,P as default};
