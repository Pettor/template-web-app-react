import { ComponentMeta, ComponentStory } from "@storybook/react";
import LoginView from "./LoginView";

export default {
  component: LoginView,
  title: "Views/Login",
} as ComponentMeta<typeof LoginView>;

const Template: ComponentStory<typeof LoginView> = (args) => {
  return <LoginView {...args} />;
};

export const Default = Template.bind({});
Default.args = {};
