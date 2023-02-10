import { Meta, StoryObj } from "@storybook/react";
import ContainerDecorator from "../../../stories/decorators/ContainerDecorator";
import Component from "./SignUpForm";

const meta = {
  component: Component,
  title: "Forms/Login",
  decorators: [ContainerDecorator],
} satisfies Meta<typeof Component>;

export default meta;
type Story = StoryObj<typeof meta>;

export const SignUp = {
  args: {
    open: true,
    error: "",
    loading: false,
    onAlert: () => console.log("onAlert"),
    onSubmit: () => console.log("onSubmit"),
  },
} satisfies Story;
