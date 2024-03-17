import type { Meta, StoryObj } from "@storybook/react";
import { Appbar as Component } from "./Appbar";
import type { AppbarProps as Props } from "./Appbar";
import { AppbarDesktopData, AppbarPhoneData } from "~/storybook/data/AppbarData";

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
  title: "This is a Header",
  appbarDesktopProps: AppbarDesktopData,
  appbarPhoneProps: AppbarPhoneData,
} satisfies Props;

export const Responsive = {
  args: defaultArgs,
} satisfies Story;
