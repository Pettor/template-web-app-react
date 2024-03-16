import type { Meta, StoryObj } from "@storybook/react";
import { CommonDecorator } from "storybook-base";
import type { ToastProps as Props } from "./Toast";
import { Toast as Component } from "./Toast";

const meta = {
  component: Component,
  decorators: [CommonDecorator],
  title: "Shared/Actions/Toast",
  tags: ["autodocs"],
} satisfies Meta<typeof Component>;

export default meta;
type Story = StoryObj<typeof meta>;

const defaultArgs = {
  severity: "info",
  message: "This is a test message",
  positionX: "center",
  positionY: "top",
} satisfies Props;

export const Standard = {
  args: defaultArgs,
} satisfies Story;

export const Success = {
  args: {
    ...defaultArgs,
    severity: "success",
  },
} satisfies Story;

export const Warning = {
  args: {
    ...defaultArgs,
    severity: "warning",
  },
} satisfies Story;

export const Error = {
  args: {
    ...defaultArgs,
    severity: "error",
  },
} satisfies Story;

export const WithClose = {
  args: {
    ...defaultArgs,
    onClose: () => console.log("onClose"),
  },
};
