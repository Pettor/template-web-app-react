import type { Meta, StoryObj } from "@storybook/react";
import { CommonDecorator } from "storybook-base";
import { About as Component } from "./About";
import type { AboutProps as Props } from "./About";

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
} satisfies Props;

export const Standard = {
  args: defaultArgs,
} satisfies Story;
