import{w as p,e as n,u as g}from"./index-BGLvj4QY.js";import{a as v}from"./DocumentationLayout-CedOLWXF.js";import"./jsx-runtime-BjgbQsUx.js";import{P as f}from"./ProfileCard-BuLiPDcj.js";import{A as u}from"./AppSessionData-Cz7upSBQ.js";import"./index-D2MAbzvX.js";import"./index-DyofrSk9.js";import"./index-BuiwNHQc.js";import"./_commonjsHelpers-BosuxZz1.js";import"./UserCircleIcon-B55a-hwY.js";import"./InformationCircleIcon-B3Qi8YXb.js";const E={component:f,title:"Feedback/Profile/Card",decorators:[v],tags:["autodocs"]},m={...u},e={args:m,parameters:{viewport:{defaultViewport:"full"}},play:async({canvasElement:o})=>{const t=p(o);await n(t.getByTestId("profile-card__name-text")).toHaveTextContent("John Doe"),await n(t.getByTestId("profile-card__email-text")).toHaveTextContent("john.doe@gmail.com"),g.click(t.getByTestId("profile-card__logout-button"))}},a={args:{...m,name:"",email:""},play:async({canvasElement:o})=>{const t=p(o);await n(t.getByTestId("profile-card__name-text")).not.toHaveTextContent(/./),await n(t.getByTestId("profile-card__email-text")).not.toHaveTextContent(/./)}};var r,s,i;e.parameters={...e.parameters,docs:{...(r=e.parameters)==null?void 0:r.docs,source:{originalSource:`{
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
} satisfies Story`,...(i=(s=e.parameters)==null?void 0:s.docs)==null?void 0:i.source}}};var c,l,d;a.parameters={...a.parameters,docs:{...(c=a.parameters)==null?void 0:c.docs,source:{originalSource:`{
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
} satisfies Story`,...(d=(l=a.parameters)==null?void 0:l.docs)==null?void 0:d.source}}};const D=["WithData","Loading"];export{a as Loading,e as WithData,D as __namedExportsOrder,E as default};
//# sourceMappingURL=ProfileCard.stories-BE0zohFv.js.map
