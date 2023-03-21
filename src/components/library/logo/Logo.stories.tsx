import type { ComponentStoryObj } from "@storybook/react";
import Component from "./Logo";

type Story = ComponentStoryObj<typeof Component>;

export default {
  component: Component,
  title: "Library/Logo",
};

export const Small: Story = {
  args: {
    size: "small",
  },
};

export const Medium: Story = {
  args: {
    size: "medium",
  },
};

export const Large: Story = {
  args: {
    size: "large",
  },
};
