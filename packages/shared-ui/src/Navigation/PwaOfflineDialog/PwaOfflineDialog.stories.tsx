import type { Meta, StoryObj } from "@storybook/react";
import { CommonDecorator } from "storybook-base";
import { PwaOfflineDialog as Component } from "./PwaOfflineDialog";

const meta = {
  component: Component,
  title: "Navigation/Pwa",
  decorators: [CommonDecorator],
} satisfies Meta;

export default meta;
type Story = StoryObj<typeof meta>;

export const OfflineDialog = {
  args: {
    open: true,
  },
} satisfies Story;
