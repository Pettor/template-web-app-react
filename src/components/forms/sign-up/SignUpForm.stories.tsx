import type { Meta, StoryObj } from "@storybook/react";
import Component from "./SignUpForm";
import ContainerDecorator from "~/stories/decorators/ContainerDecorator";

const meta = {
  component: Component,
  title: "Forms/Login",
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
