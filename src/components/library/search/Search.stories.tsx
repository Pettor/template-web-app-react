import type { ComponentStoryObj } from "@storybook/react";
import Component from "./Search";
import CommonDecorator from "~/stories/decorators/CommonDecorator";

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
