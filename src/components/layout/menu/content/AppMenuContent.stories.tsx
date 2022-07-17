import * as React from "react";
import { ComponentMeta, ComponentStory } from "@storybook/react";
import AppMenuContent from "./AppMenuContent";

export default {
  component: AppMenuContent,
  title: "Layout/Menu/Content",
} as ComponentMeta<typeof AppMenuContent>;

const Template: ComponentStory<typeof AppMenuContent> = (args) => {
  return <AppMenuContent {...args} />;
};

export const Default = Template.bind({});
Default.args = {};
