import { ComponentMeta, ComponentStory } from "@storybook/react";
import { ContainerDecorator } from "../../../stories/decorators/ContainerDecorator";
import ResetPasswordForm from "./ResetPasswordForm";

export default {
  component: ResetPasswordForm,
  title: "Forms/ResetPassword",
  decorators: [ContainerDecorator],
} as ComponentMeta<typeof ResetPasswordForm>;

const Template: ComponentStory<typeof ResetPasswordForm> = (args) => <ResetPasswordForm {...args} />;

export const Default = Template.bind({});
Default.args = {
  open: true,
};
