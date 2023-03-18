import type { ComponentStoryObj } from "@storybook/react";
import CommonDecorator from "../../stories/decorators/CommonDecorator";
import Component from "./PwaUpdateDialog";

type Story = ComponentStoryObj<typeof Component>;

export default {
  component: Component,
  title: "Pwa/UpdateDialog",
  decorators: [CommonDecorator],
};

export const UpdateDialog: Story = {
  args: {
    appName: "AppName",
    open: true,
    onUpdate: () => {
      console.log("Refresh");
    },
  },
};
