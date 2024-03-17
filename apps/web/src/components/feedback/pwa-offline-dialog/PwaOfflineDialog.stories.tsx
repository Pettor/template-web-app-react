import type { Meta, StoryObj } from "@storybook/react";
import { CommonDecorator } from "storybook-base";
import { PwaOfflineDialog as Component } from "./PwaOfflineDialog";
import type { PwaOfflineDialogProps as Props } from "./PwaOfflineDialog";

const meta = {
  component: Component,
  title: "Feedback/Progressive Web App",
  decorators: [CommonDecorator],
} satisfies Meta;

export default meta;
type Story = StoryObj<typeof meta>;

const defaultArgs = {
  open: true,
  onClose: () => console.log("onClose"),
} satisfies Props;

export const OfflineDialog = {
  args: defaultArgs,
} satisfies Story;
