import { ComponentStoryObj } from "@storybook/react";
import ContainerDecorator from "../../../stories/decorators/ContainerDecorator";
import Component from "./ResetPasswordForm";

type Story = ComponentStoryObj<typeof Component>;

export default {
  component: Component,
  title: "Forms/Login",
  decorators: [ContainerDecorator],
};

export const ResetPassword: Story = {
  args: {},
};
