import type { Meta, StoryObj } from "@storybook/react";
import { CommonDecorator } from "storybook-package";
import { PwaUpdateDialog as Component } from "./PwaUpdateDialog";
import type { PwaUpdateDialogProps as Props } from "./PwaUpdateDialog";

const meta: Meta<typeof Component> = {
  component: Component,
  title: "Feedback/Progressive Web App",
  decorators: [CommonDecorator],
};

export default meta;
type Story = StoryObj<typeof meta>;

const defaultArgs = {
  appName: "AppName",
  open: true,
  onUpdate: () => {
    console.log("Refresh");
  },
} satisfies Props;

export const UpdateDialog: Story = {
  args: defaultArgs,
};
