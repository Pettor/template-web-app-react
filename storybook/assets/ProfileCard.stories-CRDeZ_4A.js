import{a as s}from"./DocumentationLayout-0sQIwZvZ.js";import"./iframe-VVovpiOi.js";import{P as i}from"./ProfileCard-DO_jMae3.js";import{A as c}from"./AppSessionData-B3yjjJpG.js";import"./UserCircleIcon-BrhD70Rj.js";import"./InformationCircleIcon-BybExV9B.js";const{expect:o}=__STORYBOOK_MODULE_TEST__,u={component:i,title:"Feedback/Profile/Card",decorators:[s],tags:["autodocs"]},n={...c},t={args:n,parameters:{viewport:{defaultViewport:"full"}},play:async({canvas:e,userEvent:r})=>{await o(e.getByTestId("profile-card__name-text")).toHaveTextContent("John Doe"),await o(e.getByTestId("profile-card__email-text")).toHaveTextContent("john.doe@gmail.com"),r.click(e.getByTestId("profile-card__logout-button"))}},a={args:{...n,name:"",email:""},play:async({canvas:e})=>{await o(e.getByTestId("profile-card__name-text")).not.toHaveTextContent(/./),await o(e.getByTestId("profile-card__email-text")).not.toHaveTextContent(/./)}};t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:`{
  args: defaultArgs,
  parameters: {
    viewport: {
      defaultViewport: "full"
    }
  },
  play: async ({
    canvas,
    userEvent
  }) => {
    // No text should be visible during loading
    await expect(canvas.getByTestId("profile-card__name-text")).toHaveTextContent("John Doe");
    await expect(canvas.getByTestId("profile-card__email-text")).toHaveTextContent("john.doe@gmail.com");
    userEvent.click(canvas.getByTestId("profile-card__logout-button"));
  }
}`,...t.parameters?.docs?.source}}};a.parameters={...a.parameters,docs:{...a.parameters?.docs,source:{originalSource:`{
  args: {
    ...defaultArgs,
    name: "",
    email: ""
  },
  play: async ({
    canvas
  }) => {
    // No text should be visible during loading
    await expect(canvas.getByTestId("profile-card__name-text")).not.toHaveTextContent(/./);
    await expect(canvas.getByTestId("profile-card__email-text")).not.toHaveTextContent(/./);
  }
}`,...a.parameters?.docs?.source}}};const x=["WithData","Loading"];export{a as Loading,t as WithData,x as __namedExportsOrder,u as default};
