import * as React from "react";
import { ComponentMeta, ComponentStory } from "@storybook/react";
import AppHeader from "./AppHeader";

export default {
  component: AppHeader,
  title: "Layout/Header",
} as ComponentMeta<typeof AppHeader>;

const Template: ComponentStory<typeof AppHeader> = (args) => {
  return <AppHeader {...args} />;
};

export const Default = Template.bind({});
Default.args = {
  label: "This is a Header",
};

export const SubHeader = Template.bind({});
SubHeader.args = {
  subheader: true,
  label: "This is a SubHeader",
};
