import type { Meta, StoryObj } from "@storybook/react";
import { CommonDecorator } from "storybook-package";
import type { ToastProps as Props } from "./Toast";
import { Toast as Component } from "./Toast";

const meta: Meta<typeof Component> = {
  component: Component,
  decorators: [CommonDecorator],
  title: "Shared/Actions/Toast",
  tags: ["autodocs"],
};

export default meta;
type Story = StoryObj<typeof meta>;

const defaultArgs = {
  severity: "info",
  message: "This is a test message",
  positionX: "center",
  positionY: "top",
} satisfies Props;

export const Standard: Story = {
  args: defaultArgs,
};

export const Success: Story = {
  args: {
    ...defaultArgs,
    severity: "success",
  },
};

export const Warning: Story = {
  args: {
    ...defaultArgs,
    severity: "warning",
  },
};

export const Error: Story = {
  args: {
    ...defaultArgs,
    severity: "error",
  },
};

export const WithClose: Story = {
  args: {
    ...defaultArgs,
    onClose: () => console.log("onClose"),
  },
};
