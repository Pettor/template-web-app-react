import * as React from "react";
import { ComponentMeta, ComponentStory } from "@storybook/react";
import { ContainerDecorator } from "../../../stories/decorators/ContainerDecorator";
import SignUpForm from "./SignUpForm";

export default {
  component: SignUpForm,
  title: "Forms/SignUp",
  decorators: [ContainerDecorator],
} as ComponentMeta<typeof SignUpForm>;

const Template: ComponentStory<typeof SignUpForm> = (args) => <SignUpForm {...args} />;

export const Default = Template.bind({});
Default.args = {
  open: true,
};
