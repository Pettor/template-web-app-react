import { ComponentStoryObj } from "@storybook/react";
import Component from "./SignUpView";

type Story = ComponentStoryObj<typeof Component>;

export default {
  component: Component,
  title: "Views/Login",
};

export const SignUp: Story = {};
