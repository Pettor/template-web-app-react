import type { Meta, StoryObj } from "@storybook/react";
import { ForgotPasswordView as Component } from "./ForgotPasswordView";

const meta = {
  component: Component,
  title: "Views/Forgot Password",
  parameters: {
    layout: "fullscreen",
  },
  argTypes: {
    resetForm: {
      table: {
        disable: true,
      },
    },
  },
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
