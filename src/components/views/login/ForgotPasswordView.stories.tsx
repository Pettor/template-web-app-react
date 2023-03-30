import type { Meta, StoryObj } from "@storybook/react";
import Component from "./ForgotPasswordView";

const meta = {
  component: Component,
  title: "Views/Login",
} satisfies Meta<typeof Component>;

export default meta;
type Story = StoryObj<typeof meta>;

export const ForgotPassword = {
  args: {
    appName: "My App",
    resetForm: {
      error: "",
      loading: false,
      onSubmit: () => console.log("onSubmit"),
    },
  },
} satisfies Story;
