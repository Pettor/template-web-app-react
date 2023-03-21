import { ComponentStoryObj } from "@storybook/react";
import Component from "./AutoAlert";
import CommonDecorator from "~/stories/decorators/CommonDecorator";

type Story = ComponentStoryObj<typeof Component>;

export default {
  title: "Library/Alerts",
  component: Component,
  decorators: [CommonDecorator],
};

export const Info: Story = {
  args: {
    text: "Info text",
    severity: "info",
  },
};

export const Success: Story = {
  args: {
    text: "Success text",
    severity: "success",
  },
};

export const Warning: Story = {
  args: {
    text: "Warning text",
    severity: "warning",
  },
};

export const Error: Story = {
  args: {
    text: "Error text",
    severity: "error",
  },
};
