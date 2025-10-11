import{a as s}from"./DocumentationLayout-BXTjmOxg.js";import"./iframe-DePnZJLt.js";import{P as i}from"./ProfileCard-6FWlyJDd.js";import{A as c}from"./AppSessionData-B3yjjJpG.js";import"./preload-helper-D9Z9MdNV.js";import"./UserCircleIcon-DQS5Sow5.js";import"./InformationCircleIcon-BYaY4iEK.js";const{expect:o}=__STORYBOOK_MODULE_TEST__,x={component:i,title:"Feedback/Profile/Card",decorators:[s],tags:["autodocs"]},n={...c},t={args:n,parameters:{viewport:{defaultViewport:"full"}},play:async({canvas:e,userEvent:r})=>{await o(e.getByTestId("profile-card__name-text")).toHaveTextContent("John Doe"),await o(e.getByTestId("profile-card__email-text")).toHaveTextContent("john.doe@gmail.com"),r.click(e.getByTestId("profile-card__logout-button"))}},a={args:{...n,name:"",email:""},play:async({canvas:e})=>{await o(e.getByTestId("profile-card__name-text")).not.toHaveTextContent(/./),await o(e.getByTestId("profile-card__email-text")).not.toHaveTextContent(/./)}};t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:`{
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
}`,...a.parameters?.docs?.source}}};const f=["WithData","Loading"];export{a as Loading,t as WithData,f as __namedExportsOrder,x as default};
