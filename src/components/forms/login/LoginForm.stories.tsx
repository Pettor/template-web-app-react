import { ComponentStoryObj } from "@storybook/react";
import ContainerDecorator from "../../../stories/decorators/ContainerDecorator";
import Component from "./LoginForm";

type Story = ComponentStoryObj<typeof Component>;

export default {
  component: Component,
  title: "Forms/Login",
  decorators: [ContainerDecorator],
};

export const Login: Story = {
  args: {
    open: true,
  },
};
