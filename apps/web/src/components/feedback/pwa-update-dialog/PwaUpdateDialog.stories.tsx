import type { Meta, StoryObj } from "@storybook/react";
import { CommonDecorator } from "storybook-package";
import { PwaUpdateDialog as Component } from "./PwaUpdateDialog";
import type { PwaUpdateDialogProps as Props } from "./PwaUpdateDialog";

const meta = {
  component: Component,
  title: "Feedback/Progressive Web App",
  decorators: [CommonDecorator],
} satisfies Meta;

export default meta;
type Story = StoryObj<typeof meta>;

const defaultArgs = {
  appName: "AppName",
  open: true,
  onUpdate: () => {
    console.log("Refresh");
  },
} satisfies Props;

export const UpdateDialog = {
  args: defaultArgs,
} satisfies Story;
