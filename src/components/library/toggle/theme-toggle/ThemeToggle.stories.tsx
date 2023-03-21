import type { ComponentStoryObj } from "@storybook/react";
import Component from "./ThemeToggle";
import CommonDecorator from "~/stories/decorators/CommonDecorator";

type Story = ComponentStoryObj<typeof Component>;

export default {
  component: Component,
  title: "Library/Toggle/Theme",
  decorators: [CommonDecorator],
};

export const Light: Story = {
  args: {
    defaultMode: "light",
  },
};

export const Dark: Story = {
  args: {
    defaultMode: "dark",
  },
};
