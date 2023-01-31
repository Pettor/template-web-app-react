import ContainerDecorator from "../../../stories/decorators/ContainerDecorator";
import Component from "./SignUpForm";

export default {
  component: Component,
  title: "Forms/Login",
  decorators: [ContainerDecorator],
};

export const SignUp = {
  args: {
    open: true,
  },
};
