import { Meta, StoryObj } from "@storybook/react";
import Component from "./LogoFull";

const meta = {
  component: Component,
  title: "Library/Logo",
} satisfies Meta<typeof Component>;

export default meta;
type Story = StoryObj<typeof meta>;

export const FullMedium = {
  args: {
    size: "medium",
  },
} satisfies Story;

export const FullLarge: Story = {
  args: {
    size: "large",
  },
} satisfies Story;
