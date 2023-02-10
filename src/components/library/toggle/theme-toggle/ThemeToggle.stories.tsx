import { Meta, StoryObj } from "@storybook/react";
import CommonDecorator from "../../../../stories/decorators/CommonDecorator";
import Component from "./ThemeToggle";

const meta = {
  component: Component,
  title: "Library/Toggle/Theme",
  decorators: [CommonDecorator],
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
} satisfies Story;
