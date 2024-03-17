import type { Meta, StoryObj } from "@storybook/react";
import { AppNavbar as Component } from "./AppNavbar";
import type { AppNavbarProps as Props } from "./AppNavbar";
import { AppNavbarDesktopData, AppNavbarPhoneData } from "~/storybook/data/AppNavbarData";

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
  title: "This is a Header",
  appNavbarDesktopProps: AppNavbarDesktopData,
  appNavbarPhoneProps: AppNavbarPhoneData,
} satisfies Props;

export const Responsive = {
  args: defaultArgs,
} satisfies Story;
