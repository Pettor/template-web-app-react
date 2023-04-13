import type { Meta, StoryObj } from "@storybook/react";
import Component from "./ForgotPasswordForm";
import ContainerDecorator from "~/stories/decorators/ContainerDecorator";

const meta = {
  component: Component,
  title: "Forms/Forgot Password",
  decorators: [ContainerDecorator],
} satisfies Meta<typeof Component>;

export default meta;
type Story = StoryObj<typeof meta>;

export const ForgotPassword = {
  args: {
    error: "",
    loading: false,
    onSubmit: () => console.log("onSubmit"),
  },
} satisfies Story;
