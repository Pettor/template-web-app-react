import type { Meta, StoryObj } from "@storybook/react";
import CommonDecorator from "../../stories/decorators/CommonDecorator";
import Component from "./PwaOfflineDialog";

const meta = {
  component: Component,
  title: "Pwa/OfflineDialog",
  decorators: [CommonDecorator],
} satisfies Meta;

export default meta;
type Story = StoryObj<typeof meta>;

export const OfflineDialog = {
  args: {
    open: true,
  },
} satisfies Story;
