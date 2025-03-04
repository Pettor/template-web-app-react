import type { Meta, StoryObj } from "@storybook/react";
import { CommonDecorator } from "storybook-package";
import { AboutModal as Component } from "./AboutModal";
import type { AboutModalProps as Props } from "./AboutModal";

const meta = {
  component: Component,
  title: "Feedback/About",
  decorators: [CommonDecorator],
} satisfies Meta;

export default meta;
type Story = StoryObj<typeof meta>;

const defaultArgs = {
  appName: "My App",
  appVersion: "1.0.0",
  serverVersion: "1.0.0",
  open: true,
  onClose: () => console.log("onClose"),
} satisfies Props;

export const Modal = {
  args: defaultArgs,
} satisfies Story;
