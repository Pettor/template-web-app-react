import { Meta, StoryObj } from "@storybook/react";
import ContainerDecorator from "../../../stories/decorators/ContainerDecorator";
import Component from "./LoginForm";

const meta = {
  component: Component,
  title: "Forms/Login",
  decorators: [ContainerDecorator],
} satisfies Meta<typeof Component>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Login = {
  args: {
    error: "",
    loading: false,
    onSubmit: () => console.log("onSubmit"),
  },
} satisfies Story;
