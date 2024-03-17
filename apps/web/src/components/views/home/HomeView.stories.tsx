import type { Meta, StoryObj } from "@storybook/react";
import { FullSizeDecorator } from "storybook-base";
import { HomeView as Component } from "./HomeView";
import type { HomeViewProps as Props } from "./HomeView";
import { AppNavbarDesktopData, AppNavbarPhoneData } from "~/storybook/data/AppNavbarData";
import { AppSocialLinksData } from "~/storybook/data/AppSocialLinksData";

const meta = {
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
} satisfies Meta<typeof Component>;

export default meta;
type Story = StoryObj<typeof meta>;

const defaultArgs = {
  appNavbarProps: {
    appNavbarDesktopProps: AppNavbarDesktopData,
    appNavbarPhoneProps: AppNavbarPhoneData,
  },
  appSocialLinkProps: AppSocialLinksData,
} satisfies Props;

export const Fullscreen = {
  args: defaultArgs,
  decorators: [FullSizeDecorator],
  parameters: { viewport: { defaultViewport: "full" } },
} satisfies Story;

export const Phone = {
  args: defaultArgs,
  parameters: { viewport: { defaultViewport: "iphonex" } },
} satisfies Story;
