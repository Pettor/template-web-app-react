import { ComponentStoryObj } from "@storybook/react";
import CommonDecorator from "../../stories/decorators/CommonDecorator";
import Component from "./PwaOfflineDialog";

type Story = ComponentStoryObj<typeof Component>;

export default {
  component: Component,
  title: "Pwa/OfflineDialog",
  decorators: [CommonDecorator],
};

export const OfflineDialog: Story = {
  args: {
    open: true,
  },
};
