import type { Meta, StoryObj } from "@storybook/react";
import Component from "./AppHeaderDivider";

const meta = {
  component: Component,
  title: "Layout/Header",
} satisfies Meta<typeof Component>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Divider = {} satisfies Story;
