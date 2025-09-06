import{b as p}from"./DocumentationLayout-Cm4VZaS8.js";import"./iframe-BUrpZTC8.js";import{S as u}from"./SignUpForm-BxGqQuAB.js";import"./preload-helper-D9Z9MdNV.js";import"./index.esm-BQ4Y4HLR.js";import"./ButtonLoading-Cyn6c8T3.js";import"./clsx-B-dksMZM.js";import"./Modal-CtKol1Yl.js";import"./index-D9WrIkEy.js";import"./Toast-CG404bCP.js";import"./ToastNotifier-C2O5cqxC.js";import"./StorybookNavbarContentComponent-vQ5puYhG.js";import"./BasicLayout-BNYJtu6U.js";import"./Logo-tSCg1WHM.js";import"./LogoFull-B7bcKucG.js";import"./InputField-Dx15XDaV.js";import"./Drawer-BXVON29h.js";import"./index-COADeKQK.js";import"./StorybookNavbarComponent-5auVJ2jj.js";import"./StorybookTableContentComponent-B24aJwzA.js";import"./chunk-4X5ZEQ5K-DKZdp5Hc.js";const{expect:a,waitFor:m}=__STORYBOOK_MODULE_TEST__,k={component:u,title:"Forms/Sign Up",decorators:[p]},i={loading:!1,onSubmit:()=>console.log("onSubmit")},s={args:i},n={args:i,play:async({canvas:e,userEvent:t})=>{await t.type(e.getByTestId("sign-up-form__username-input"),"username"),await t.type(e.getByTestId("sign-up-form__firstname-input"),"john"),await t.type(e.getByTestId("sign-up-form__lastname-input"),"doe"),await t.type(e.getByTestId("sign-up-form__email-input"),"email@provider.com"),await t.type(e.getByTestId("sign-up-form__phonenumber-input"),"1234567890"),await t.type(e.getByTestId("sign-up-form__password-input"),"password"),await t.type(e.getByTestId("sign-up-form__confirmpassword-input"),"password"),await t.click(e.getByTestId("sign-up-form__submit-button")),await a(e.getByTestId("sign-up-form__username-input")).toHaveValue("username"),await a(e.getByTestId("sign-up-form__firstname-input")).toHaveValue("john"),await a(e.getByTestId("sign-up-form__username-input")).toHaveValue("username"),await a(e.getByTestId("sign-up-form__lastname-input")).toHaveValue("doe"),await a(e.getByTestId("sign-up-form__email-input")).toHaveValue("email@provider.com"),await a(e.getByTestId("sign-up-form__phonenumber-input")).toHaveValue("1234567890"),await a(e.getByTestId("sign-up-form__password-input")).toHaveValue("password"),await a(e.getByTestId("sign-up-form__confirmpassword-input")).toHaveValue("password")}},o={args:i,play:async({canvas:e,userEvent:t})=>{await t.click(e.getByTestId("sign-up-form__submit-button")),m(async()=>{await a(e.getByText("We need to call you something")).toBeInTheDocument(),await a(e.getByText("Email is required")).toBeInTheDocument(),await a(e.getByText("Password is required")).toBeInTheDocument(),await a(e.getByText("Password must be confirmed")).toBeInTheDocument()})}},r={args:i,play:async({canvas:e,userEvent:t})=>{await t.type(e.getByTestId("sign-up-form__username-input"),"username"),await t.type(e.getByTestId("sign-up-form__email-input"),"email@provider.com"),await t.type(e.getByTestId("sign-up-form__password-input"),"short"),await t.type(e.getByTestId("sign-up-form__confirmpassword-input"),"short"),await t.click(e.getByTestId("sign-up-form__submit-button")),await a(e.getByText("Password is too short - should be 8 chars minimum")).toBeInTheDocument()}};s.parameters={...s.parameters,docs:{...s.parameters?.docs,source:{originalSource:`{
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
}`,...r.parameters?.docs?.source}}};const F=["Standard","Success","MissingFields","IncorrectPassword"];export{r as IncorrectPassword,o as MissingFields,s as Standard,n as Success,F as __namedExportsOrder,k as default};
