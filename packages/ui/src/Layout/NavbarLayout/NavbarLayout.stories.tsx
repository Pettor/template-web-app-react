import type { Meta, StoryObj } from "@storybook/react";
import { StorybookNavbarComponent } from "Storybook/Components/StorybookNavbarComponent";
import { StorybookTableContentComponent } from "Storybook/Components/StorybookTableContentComponent";
import { NavbarLayout as Component } from "./NavbarLayout";
import type { NavbarLayoutProps, NavbarLayoutProps as Props } from "./NavbarLayout";

const meta = {
  component: Component,
  title: "Shared/Layout",
  parameters: {
    layout: "fullscreen",
  },
} satisfies Meta<typeof Component>;

export default meta;
type Story = StoryObj<typeof meta>;

const defaultArgs = {
  navbarElement: <StorybookNavbarComponent />,
  onGithubClick: () => console.log("onGithubClick"),
  onLinkedInClick: () => console.log("onLinkedInClick"),
} satisfies NavbarLayoutProps;

function render(args: Props) {
  return (
    <Component {...args}>
      <StorybookTableContentComponent />
    </Component>
  );
}

export const NavbarLayout = {
  args: defaultArgs,
  render,
} satisfies Story;
