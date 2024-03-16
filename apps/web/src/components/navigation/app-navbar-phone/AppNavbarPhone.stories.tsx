import type { Meta, StoryObj } from "@storybook/react";
import { FullSizeDecorator } from "storybook-base";
import { AppNavbarPhone as Component } from "./AppNavbarPhone";
import type { AppNavbarPhoneProps as Props } from "./AppNavbarPhone";
import { NavbarPhoneData } from "~/storybook/data/NavbarData";

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
  ...NavbarPhoneData,
} satisfies Props;

export const Phone = {
  args: defaultArgs,
  decorators: [FullSizeDecorator],
} satisfies Story;
