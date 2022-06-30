import { ComponentMeta, ComponentStory } from "@storybook/react";
import SignUpView from "./SignUpView";

export default {
  component: SignUpView,
  title: "Views/Login",
} as ComponentMeta<typeof SignUpView>;

const Template: ComponentStory<typeof SignUpView> = (args) => {
  return <SignUpView {...args} />;
};

export const SignUp = Template.bind({});
SignUp.args = {};
