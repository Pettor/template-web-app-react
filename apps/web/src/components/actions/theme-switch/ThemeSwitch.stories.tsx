import type { Meta, StoryObj } from "@storybook/react";
import { ThemeSwitch as Component } from "./ThemeSwitch";
import type { ThemeSwitchProps as ComponentProps } from "./ThemeSwitch";

const meta: Meta<typeof Component> = {
  component: Component,
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
  title: "Actions/Theme/Switch",
};

export default meta;
type Story = StoryObj<typeof meta>;

const defaultArgs = {
  mode: "light",
  onSwitch: () => console.log("Switched"),
} satisfies ComponentProps;

export const Light: Story = {
  args: defaultArgs,
};

export const Dark: Story = {
  args: {
    ...defaultArgs,
    mode: "dark",
  },
};
