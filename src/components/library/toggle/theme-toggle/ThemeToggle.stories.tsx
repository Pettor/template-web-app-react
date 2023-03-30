import type { Meta, StoryObj } from "@storybook/react";
import Component from "./ThemeToggle";
import CommonDecorator from "~/stories/decorators/CommonDecorator";

const meta = {
  component: Component,
  title: "Library/Toggle/Theme",
  decorators: [CommonDecorator],
  tags: ["autodocs"],
} satisfies Meta<typeof Component>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Light = {
  args: {
    defaultMode: "light",
  },
} satisfies Story;

export const Dark: Story = {
  args: {
    defaultMode: "dark",
  },
  parameters: {
    theming: {
      themeOverride: "dark",
    },
  },
} satisfies Story;
