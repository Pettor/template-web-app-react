import { ComponentStoryObj } from "@storybook/react";
import CommonDecorator from "../../../stories/decorators/CommonDecorator";
import Component from "./ProfileCard";

type Story = ComponentStoryObj<typeof Component>;

export default {
  component: Component,
  title: "Layout/Profile/Card",
  decorators: [CommonDecorator],
};

export const WithData = {
  args: {
    name: "John Doe",
    email: "john.doe@gmail.com",
  },
};

export const Loading: Story = {
  args: {
    name: undefined,
    email: undefined,
  },
};
