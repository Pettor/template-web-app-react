import ContainerDecorator from "../../../stories/decorators/ContainerDecorator";
import Component from "./LoginForm";

export default {
  component: Component,
  title: "Forms/Login",
  decorators: [ContainerDecorator],
};

export const Login = {
  args: {
    open: true,
  },
};
