import { ComponentStoryObj } from "@storybook/react";
import Component from "./LogoFull";

type Story = ComponentStoryObj<typeof Component>;

export default {
  component: Component,
  title: "Library/Logo",
};

export const FullMedium: Story = {
  args: {
    size: "medium",
  },
};

export const FullLarge: Story = {
  args: {
    size: "large",
  },
};
