import type { Meta, StoryObj } from "@storybook/react";
import { SignUpView as Component } from "./SignUpView";

const meta = {
  component: Component,
  title: "Views/Sign Up",
  parameters: {
    layout: "fullscreen",
  },
  argTypes: {
    signUpForm: {
      table: {
        disable: true,
      },
    },
  },
} satisfies Meta<typeof Component>;

export default meta;
type Story = StoryObj<typeof meta>;

export const SignUp = {
  args: {
    appName: "My App",
    signUpForm: {
      loading: false,
      onSubmit: () => console.log("onSubmit"),
    },
  },
} satisfies Story;
