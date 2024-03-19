import type { Meta, StoryObj } from "@storybook/react";
import { FullSizeDecorator } from "storybook-base";
import { AboutView as Component } from "./AboutView";
import type { AboutViewProps as Props } from "./AboutView";

const meta = {
  component: Component,
  title: "Views/About",
  parameters: {
    layout: "fullscreen",
  },
} satisfies Meta<typeof Component>;

export default meta;
type Story = StoryObj<typeof meta>;

const defaultArgs = {
  appName: "My App",
  appVersion: "1.0.0",
  serverVersion: "1.0.0",
  onBack: () => console.log("onBack"),
} satisfies Props;

export const Fullscreen = {
  args: defaultArgs,
  decorators: [FullSizeDecorator],
  parameters: { viewport: { defaultViewport: "full" } },
} satisfies Story;

export const Phone = {
  args: defaultArgs,
  parameters: { viewport: { defaultViewport: "iphonex" } },
} satisfies Story;
