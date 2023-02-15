import { ComponentStoryObj } from "@storybook/react";
import CommonDecorator from "../../../stories/decorators/CommonDecorator";
import Component from "./LocalAlert";

type Story = ComponentStoryObj<typeof Component>;

export default {
  title: "Library/Alerts",
  component: Component,
  decorators: [CommonDecorator],
};

export const LocalAlert: Story = {
  args: {
    text: "Some error",
  },
};
