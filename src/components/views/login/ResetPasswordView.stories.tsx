import { ComponentMeta, ComponentStory } from "@storybook/react";
import ResetPasswordView from "./ResetPasswordView";

export default {
  component: ResetPasswordView,
  title: "Views/Login",
} as ComponentMeta<typeof ResetPasswordView>;

const Template: ComponentStory<typeof ResetPasswordView> = (args) => {
  return <ResetPasswordView {...args} />;
};

export const ResetPassword = Template.bind({});
ResetPassword.args = {};
