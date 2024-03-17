import type { Meta, StoryObj } from "@storybook/react";
import { StorybookTableContentComponent } from "shared-ui";
import { AppNavbarLayout as Component } from "./AppNavbarLayout";
import type { AppNavbarLayoutProps as Props } from "./AppNavbarLayout";
import { AppNavbarDesktopData, AppNavbarPhoneData } from "~/storybook/data/AppNavbarData";

const meta = {
  component: Component,
  title: "Layout/AppNavbar",
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
  onGithubClick: (): void => console.log("onGithubClick"),
  onLinkedInClick: (): void => console.log("onLinkedInClick"),
  children: <StorybookTableContentComponent />,
} satisfies Props;

export const AppNavbarLayout = {
  args: defaultArgs,
} satisfies Story;
