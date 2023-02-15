import { ComponentStoryObj } from "@storybook/react";
import ContainerDecorator from "../../../stories/decorators/ContainerDecorator";
import Component from "./SignUpForm";

type Story = ComponentStoryObj<typeof Component>;

export default {
  component: Component,
  title: "Forms/Login",
  decorators: [ContainerDecorator],
};

export const SignUp: Story = {
  args: {},
};
