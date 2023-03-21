import type { ComponentStoryObj } from "@storybook/react";
import Component from "./SignUpForm";
import ContainerDecorator from "~/stories/decorators/ContainerDecorator";

type Story = ComponentStoryObj<typeof Component>;

export default {
  component: Component,
  title: "Forms/Login",
  decorators: [ContainerDecorator],
};

export const SignUp: Story = {
  args: {},
};
