import { ComponentStoryObj } from "@storybook/react";
import Component from "./LoginView";

type Story = ComponentStoryObj<typeof Component>;

export default {
  component: Component,
  title: "Views/Login",
};

export const Login: Story = {};
