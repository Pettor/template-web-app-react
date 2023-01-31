import ContainerDecorator from "../../../stories/decorators/ContainerDecorator";
import Component from "./ResetPasswordForm";

export default {
  component: Component,
  title: "Forms/Login",
  decorators: [ContainerDecorator],
};

export const ResetPassword = {
  args: {
    open: true,
  },
};
