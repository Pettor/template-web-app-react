import type { Meta, StoryObj } from "@storybook/react";
import { CommonDecorator } from "storybook-base";
import { PwaUpdateDialog as Component } from "./PwaUpdateDialog";

const meta = {
  component: Component,
  title: "Navigation/Pwa",
  decorators: [CommonDecorator],
} satisfies Meta;

export default meta;
type Story = StoryObj<typeof meta>;

export const UpdateDialog = {
  args: {
    appName: "AppName",
    open: true,
    onUpdate: () => {
      console.log("Refresh");
    },
  },
} satisfies Story;
