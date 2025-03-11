import type { Meta, StoryObj } from "@storybook/react";
import { Appbar as Component } from "./Appbar";
import type { AppbarProps as Props } from "./Appbar";
import { AppbarDesktopData, AppbarPhoneData } from "~/storybook/data/AppbarData";
import { AppSocialLinksData } from "~/storybook/data/AppSocialLinksData";

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
  title: "This is a Header",
  appbarDesktopProps: AppbarDesktopData,
  appbarPhoneProps: AppbarPhoneData,
  ...AppSocialLinksData,
} satisfies Props;

export const Responsive: Story = {
  args: defaultArgs,
};
