import type { Meta, StoryObj } from "@storybook/react";
import Component from "./LoginView";

const meta = {
  component: Component,
  title: "Views/Login",
} satisfies Meta<typeof Component>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Login = {
  args: {
    appName: "My App",
    loginForm: {
      error: "",
      loading: false,
      onSubmit: () => console.log("onSubmit"),
    },
  },
} satisfies Story;
