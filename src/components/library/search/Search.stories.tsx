import { ComponentStoryObj } from "@storybook/react";
import CommonDecorator from "../../../stories/decorators/CommonDecorator";
import Component from "./Search";

type Story = ComponentStoryObj<typeof Component>;

export default {
  component: Component,
  title: "Library/Search",
  decorators: [CommonDecorator],
};

export const FullWidth: Story = {};

export const MaxWidth: Story = {
  args: {
    maxWidth: "sm",
  },
};
