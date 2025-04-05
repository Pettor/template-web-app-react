import{w as p,e as n,u as g}from"./index-BM0gtWul.js";import{a as v}from"./DocumentationLayout-CaF55Pd3.js";import"./jsx-runtime-D_zvdyIk.js";import{P as u}from"./ProfileCard-D9vRuyyZ.js";import{A as x}from"./AppSessionData-Cz7upSBQ.js";import"./index-C8XO7OkU.js";import"./index-n-xcLTj3.js";import"./_commonjsHelpers-Cpj98o6Y.js";import"./UserCircleIcon-8WQSzu3Y.js";import"./InformationCircleIcon-DT67qKrV.js";const b={component:u,title:"Feedback/Profile/Card",decorators:[v],tags:["autodocs"]},m={...x},e={args:m,parameters:{viewport:{defaultViewport:"full"}},play:async({canvasElement:o})=>{const t=p(o);await n(t.getByTestId("profile-card__name-text")).toHaveTextContent("John Doe"),await n(t.getByTestId("profile-card__email-text")).toHaveTextContent("john.doe@gmail.com"),g.click(t.getByTestId("profile-card__logout-button"))}},a={args:{...m,name:"",email:""},play:async({canvasElement:o})=>{const t=p(o);await n(t.getByTestId("profile-card__name-text")).not.toHaveTextContent(/./),await n(t.getByTestId("profile-card__email-text")).not.toHaveTextContent(/./)}};var r,s,i;e.parameters={...e.parameters,docs:{...(r=e.parameters)==null?void 0:r.docs,source:{originalSource:`{
  args: defaultArgs,
  parameters: {
    viewport: {
      defaultViewport: "full"
    }
  },
  play: async ({
    canvasElement
  }) => {
    const canvas = within(canvasElement);

    // No text should be visible during loading
    await expect(canvas.getByTestId("profile-card__name-text")).toHaveTextContent("John Doe");
    await expect(canvas.getByTestId("profile-card__email-text")).toHaveTextContent("john.doe@gmail.com");
    userEvent.click(canvas.getByTestId("profile-card__logout-button"));
  }
}`,...(i=(s=e.parameters)==null?void 0:s.docs)==null?void 0:i.source}}};var c,l,d;a.parameters={...a.parameters,docs:{...(c=a.parameters)==null?void 0:c.docs,source:{originalSource:`{
  args: {
    ...defaultArgs,
    name: "",
    email: ""
  },
  play: async ({
    canvasElement
  }) => {
    const canvas = within(canvasElement);

    // No text should be visible during loading
    await expect(canvas.getByTestId("profile-card__name-text")).not.toHaveTextContent(/./);
    await expect(canvas.getByTestId("profile-card__email-text")).not.toHaveTextContent(/./);
  }
}`,...(d=(l=a.parameters)==null?void 0:l.docs)==null?void 0:d.source}}};const E=["WithData","Loading"];export{a as Loading,e as WithData,E as __namedExportsOrder,b as default};
//# sourceMappingURL=ProfileCard.stories-C0GB4UPg.js.map
