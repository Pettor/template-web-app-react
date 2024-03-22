import type { Meta, StoryObj } from "@storybook/react";
import { CommonDecorator } from "storybook-base";
import { AboutDetails as Component } from "./AboutDetails";
import type { AboutDetailsProps as Props } from "./AboutDetails";

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

export const Details = {
  args: defaultArgs,
} satisfies Story;
