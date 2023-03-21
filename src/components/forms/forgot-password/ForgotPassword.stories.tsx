import type { ComponentStoryObj } from "@storybook/react";
import Component from "./ForgotPasswordForm";
import ContainerDecorator from "~/stories/decorators/ContainerDecorator";

type Story = ComponentStoryObj<typeof Component>;

export default {
  component: Component,
  title: "Forms/Login",
  decorators: [ContainerDecorator],
};

export const ResetPassword: Story = {
  args: {},
};
