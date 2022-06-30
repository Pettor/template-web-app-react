import { ComponentMeta, ComponentStory } from "@storybook/react";
import { ContainerDecorator } from "../../../stories/decorators/ContainerDecorator";
import LoginForm from "./LoginForm";

export default {
  component: LoginForm,
  title: "Forms/Login",
  decorators: [ContainerDecorator],
} as ComponentMeta<typeof LoginForm>;

const Template: ComponentStory<typeof LoginForm> = (args) => <LoginForm {...args} />;

export const Default = Template.bind({});
Default.args = {
  open: true,
};
