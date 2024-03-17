import type { Meta, StoryObj } from "@storybook/react";
import { Logo as Component } from "./Logo";

const meta = {
  component: Component,
  title: "Shared/Layout/Logo",
  tags: ["autodocs"],
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
