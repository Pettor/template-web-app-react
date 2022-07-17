import * as React from "react";
import Button from "@mui/material/Button";
import { ComponentMeta, ComponentStory } from "@storybook/react";
import { CommonDecorator } from "../decorators/CommonDecorator";

export default {
  component: Button,
  title: "Common/Button",
  decorators: [CommonDecorator],
} as ComponentMeta<typeof Button>;

const Template: ComponentStory<typeof Button> = (args) => {
  return <Button {...args}>Button</Button>;
};

export const Default = Template.bind({});
Default.args = {
  variant: "contained",
};
