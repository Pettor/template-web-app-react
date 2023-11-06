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

export const SignUp = {
  args: {
    version: "1.0.0",
  },
} satisfies Story;
