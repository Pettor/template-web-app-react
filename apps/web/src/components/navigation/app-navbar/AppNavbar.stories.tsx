import type { Meta, StoryObj } from "@storybook/react";
import { AppNavbar as Component } from "./AppNavbar";
import type { AppNavbarProps as Props } from "./AppNavbar";
import { NavbarDesktopData, NavbarPhoneData } from "~/storybook/data/NavbarData";

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
  navbarDesktopProps: NavbarDesktopData,
  navbarPhoneProps: NavbarPhoneData,
} satisfies Props;

export const Responsive = {
  args: defaultArgs,
} satisfies Story;
