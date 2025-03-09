import type { Meta, StoryObj } from "@storybook/react";
import { FullSizeDecorator } from "storybook-package";
import { HomeView as Component } from "./HomeView";
import type { HomeViewProps as Props } from "./HomeView";
import { AppbarDesktopData, AppbarPhoneData } from "~/storybook/data/AppbarData";
import { AppSocialLinksData } from "~/storybook/data/AppSocialLinksData";

const meta: Meta<typeof Component> = {
  component: Component,
  title: "Views/Home",
  parameters: {
    layout: "fullscreen",
  },
  argTypes: {
    appNavbarProps: {
      table: {
        disable: true,
      },
    },
    appSocialLinkProps: {
      table: {
        disable: true,
      },
    },
  },
};

export default meta;
type Story = StoryObj<typeof meta>;

const defaultArgs = {
  appNavbarProps: {
    appbarDesktopProps: AppbarDesktopData,
    appbarPhoneProps: AppbarPhoneData,
  },
  appSocialLinkProps: AppSocialLinksData,
  onGotoClick: (href: string) => console.log(href),
} satisfies Props;

export const Fullscreen: Story = {
  args: defaultArgs,
  decorators: [FullSizeDecorator],
  parameters: { viewport: { defaultViewport: "full" } },
};

export const Phone: Story = {
  args: defaultArgs,
  parameters: { viewport: { defaultViewport: "iphonex" } },
};
