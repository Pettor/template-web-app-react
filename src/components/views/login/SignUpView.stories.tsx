import { Meta, StoryObj } from "@storybook/react";
import Component from "./SignUpView";

const meta = {
  component: Component,
  title: "Views/Login",
} satisfies Meta<typeof Component>;

export default meta;
type Story = StoryObj<typeof meta>;

export const SignUp = {
  args: {
    signUpForm: {
      open: true,
      error: "",
      loading: false,
      onAlert: () => console.log("onAlert"),
      onSubmit: () => console.log("onSubmit"),
    },
  },
} satisfies Story;
