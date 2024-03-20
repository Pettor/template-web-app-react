import type { Meta, StoryObj } from "@storybook/react";
import { StorybookTableContentComponent } from "../../../../../packages/shared-ui/src/Storybook/Components/StorybookTableContentComponent";
import { AppbarLayout as Component } from "./AppbarLayout";
import type { AppbarLayoutProps as Props } from "./AppbarLayout";
import { AppbarDesktopData, AppbarPhoneData } from "~/storybook/data/AppbarData";

const meta = {
  component: Component,
  title: "Layout/Appbar Layout",
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
  onGithubClick: (): void => console.log("onGithubClick"),
  onLinkedInClick: (): void => console.log("onLinkedInClick"),
  children: <StorybookTableContentComponent />,
} satisfies Props;

export const AppbarLayout = {
  args: defaultArgs,
} satisfies Story;
