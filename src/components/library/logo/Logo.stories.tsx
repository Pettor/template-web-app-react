import { Meta, StoryObj } from "@storybook/react";
import Component from "./Logo";

const meta = {
  component: Component,
  title: "Library/Logo",
} satisfies Meta<typeof Component>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Small = {
  args: {
    size: "small",
  },
} satisfies Story;

export const Medium: Story = {
  args: {
    size: "medium",
  },
} satisfies Story;

export const Large: Story = {
  args: {
    size: "large",
  },
} satisfies Story;
