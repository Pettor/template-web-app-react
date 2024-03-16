import type { Meta, StoryObj } from "@storybook/react";
import { ThemeSwitch as Component } from "./ThemeSwitch";
import type { ThemeSwitchProps as ComponentProps } from "./ThemeSwitch";

const meta = {
  component: Component,
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
  title: "Actions/Theme/Switch",
} satisfies Meta<typeof Component>;

export default meta;
type Story = StoryObj<typeof meta>;

const defaultArgs = {
  mode: "light",
  onSwitch: () => console.log("Switched"),
} satisfies ComponentProps;

export const Light = {
  args: defaultArgs,
} satisfies Story;

export const Dark = {
  args: {
    ...defaultArgs,
    mode: "dark",
  },
} satisfies Story;
