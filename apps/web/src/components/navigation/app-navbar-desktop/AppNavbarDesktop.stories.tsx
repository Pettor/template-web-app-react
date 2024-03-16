import type { Meta, StoryObj } from "@storybook/react";
import { AppNavbarDesktop as Component } from "./AppNavbarDesktop";
import type { AppNavbarDesktopProps as Props } from "./AppNavbarDesktop";
import { NavbarDesktopData } from "~/storybook/data/NavbarData";

const meta = {
  component: Component,
  title: "Navigation/Navbar",
  parameters: {
    layout: "fullscreen",
  },
} satisfies Meta<typeof Component>;

export default meta;
type Story = StoryObj<typeof meta>;

const defaultArgs = {
  ...NavbarDesktopData,
} satisfies Props;

export const Desktop = {
  args: defaultArgs,
} satisfies Story;
