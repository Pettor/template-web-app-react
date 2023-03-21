import type { ComponentStoryObj } from "@storybook/react";
import Component from "./ForgotPasswordView";

type Story = ComponentStoryObj<typeof Component>;

export default {
  component: Component,
  title: "Views/Login",
};

export const ResetPassword: Story = {};
