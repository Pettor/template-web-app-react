import { ComponentStoryObj } from "@storybook/react";
import CommonDecorator from "../../../../stories/decorators/CommonDecorator";
import Component from "./ThemeToggle";

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
