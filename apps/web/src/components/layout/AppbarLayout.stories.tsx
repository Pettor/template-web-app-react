import type { Meta, StoryObj } from "@storybook/react";
import { StorybookTableContentComponent } from "ui-package";
import { AppbarLayout as Component } from "./AppbarLayout";
import type { AppbarLayoutProps as Props } from "./AppbarLayout";
import { AppbarDesktopData, AppbarPhoneData } from "~/storybook/data/AppbarData";

const meta: Meta<typeof Component> = {
  component: Component,
  title: "Layout/Appbar Layout",
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
  onGithubClick: (): void => console.log("onGithubClick"),
  onLinkedInClick: (): void => console.log("onLinkedInClick"),
  children: <StorybookTableContentComponent />,
} satisfies Props;

export const AppbarLayout: Story = {
  args: defaultArgs,
};
