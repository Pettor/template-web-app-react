import type { Meta, StoryObj } from "@storybook/react";
import { AppNavbarDesktop as Component } from "./AppbarDesktop";
import type { AppbarDesktopProps as Props } from "./AppbarDesktop";
import { AppbarDesktopData } from "~/storybook/data/AppbarData";

const meta = {
  component: Component,
  title: "Navigation/Appbar",
  parameters: {
    layout: "fullscreen",
  },
} satisfies Meta<typeof Component>;

export default meta;
type Story = StoryObj<typeof meta>;

const defaultArgs = {
  ...AppbarDesktopData,
} satisfies Props;

export const Desktop = {
  args: defaultArgs,
} satisfies Story;
