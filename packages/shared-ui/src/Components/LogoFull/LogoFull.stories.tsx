import type { Meta, StoryObj } from "@storybook/react";
import { LogoFull as Component } from "./LogoFull";

const meta = {
  component: Component,
  title: "Components/Logo/Full",
  tags: ["autodocs"],
} satisfies Meta<typeof Component>;

export default meta;
type Story = StoryObj<typeof meta>;

export const FullMedium = {
  args: {
    appName: "My App",
    size: "medium",
  },
} satisfies Story;

export const FullLarge: Story = {
  args: {
    appName: "My App",
    size: "large",
  },
} satisfies Story;
