import type { Meta, StoryObj } from "@storybook/react";
import { AppNavbarDesktop as Component } from "./AppbarDesktop";
import type { AppbarDesktopProps as Props } from "./AppbarDesktop";
import { AppbarDesktopData } from "~/storybook/data/AppbarData";

const meta: Meta<typeof Component> = {
  component: Component,
  title: "Navigation/Appbar",
  parameters: {
    layout: "fullscreen",
  },
};

export default meta;
type Story = StoryObj<typeof meta>;

const defaultArgs = {
  ...AppbarDesktopData,
} satisfies Props;

export const Desktop: Story = {
  args: defaultArgs,
};
