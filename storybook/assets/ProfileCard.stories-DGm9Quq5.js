import{a as m}from"./DocumentationLayout-7ASonCf3.js";import"./iframe-xPoOMcH3.js";import{P as g}from"./ProfileCard-FzVzgCQY.js";import{A as _}from"./AppSessionData-B326GsEd.js";import"./UserCircleIcon-Du-T8wMQ.js";import"./InformationCircleIcon-CfrvHqs3.js";const{expect:o}=__STORYBOOK_MODULE_TEST__,w={component:g,title:"Feedback/Profile/Card",decorators:[m],tags:["autodocs"]},l={..._},t={args:l,parameters:{viewport:{defaultViewport:"full"}},play:async({canvas:e,userEvent:p})=>{await o(e.getByTestId("profile-card__name-text")).toHaveTextContent("John Doe"),await o(e.getByTestId("profile-card__email-text")).toHaveTextContent("john.doe@gmail.com"),p.click(e.getByTestId("profile-card__logout-button"))}},a={args:{...l,name:"",email:""},play:async({canvas:e})=>{await o(e.getByTestId("profile-card__name-text")).not.toHaveTextContent(/./),await o(e.getByTestId("profile-card__email-text")).not.toHaveTextContent(/./)}};var n,r,s;t.parameters={...t.parameters,docs:{...(n=t.parameters)==null?void 0:n.docs,source:{originalSource:`{
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
}`,...(s=(r=t.parameters)==null?void 0:r.docs)==null?void 0:s.source}}};var i,c,d;a.parameters={...a.parameters,docs:{...(i=a.parameters)==null?void 0:i.docs,source:{originalSource:`{
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
}`,...(d=(c=a.parameters)==null?void 0:c.docs)==null?void 0:d.source}}};const B=["WithData","Loading"];export{a as Loading,t as WithData,B as __namedExportsOrder,w as default};
//# sourceMappingURL=ProfileCard.stories-DGm9Quq5.js.map
