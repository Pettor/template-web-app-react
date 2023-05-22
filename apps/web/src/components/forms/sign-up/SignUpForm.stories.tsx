import type { Meta, StoryObj } from "@storybook/react";
import { ContainerDecorator } from "storybook-base";
import { SignUpForm as Component } from "./SignUpForm";

const meta = {
  component: Component,
  title: "Forms/Sign Up",
  decorators: [ContainerDecorator],
} satisfies Meta<typeof Component>;

export default meta;
type Story = StoryObj<typeof meta>;

export const SignUp = {
  args: {
    error: "",
    loading: false,
    onSubmit: () => console.log("onSubmit"),
  },
} satisfies Story;
