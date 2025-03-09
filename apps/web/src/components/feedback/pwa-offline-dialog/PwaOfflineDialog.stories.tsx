import type { Meta, StoryObj } from "@storybook/react";
import { CommonDecorator } from "storybook-package";
import { PwaOfflineDialog as Component } from "./PwaOfflineDialog";
import type { PwaOfflineDialogProps as Props } from "./PwaOfflineDialog";

const meta: Meta<typeof Component> = {
  component: Component,
  title: "Feedback/Progressive Web App",
  decorators: [CommonDecorator],
};

export default meta;
type Story = StoryObj<typeof meta>;

const defaultArgs: Props = {
  open: true,
  onClose: () => console.log("onClose"),
};

export const OfflineDialog: Story = {
  args: defaultArgs,
};
