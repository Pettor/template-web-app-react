import type { Meta, StoryObj } from "@storybook/react";
import { CommonDecorator } from "storybook-base";
import { PwaOfflineDialog as Component } from "./PwaOfflineDialog";

const meta = {
  component: Component,
  title: "Components/Progressive Web App",
  decorators: [CommonDecorator],
} satisfies Meta;

export default meta;
type Story = StoryObj<typeof meta>;

export const OfflineDialog = {
  args: {
    open: true,
  },
} satisfies Story;
