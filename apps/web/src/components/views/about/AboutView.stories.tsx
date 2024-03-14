import type { Meta, StoryObj } from "@storybook/react";
import { AboutView as Component } from "./AboutView";

const meta = {
  component: Component,
  title: "Views/About",
  parameters: {
    layout: "fullscreen",
  },
} satisfies Meta<typeof Component>;

export default meta;
type Story = StoryObj<typeof meta>;

export const About = {
  args: {
    appName: "My App",
    version: "1.0.0",
    onBack: () => console.log("onBack"),
  },
} satisfies Story;
