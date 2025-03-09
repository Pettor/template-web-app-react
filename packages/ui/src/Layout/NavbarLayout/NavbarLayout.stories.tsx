import type { Meta, StoryObj } from "@storybook/react";
import { StorybookNavbarComponent } from "Storybook/Components/StorybookNavbarComponent";
import { StorybookTableContentComponent } from "Storybook/Components/StorybookTableContentComponent";
import { NavbarLayout as Component } from "./NavbarLayout";
import type { NavbarLayoutProps, NavbarLayoutProps as Props } from "./NavbarLayout";

const meta: Meta<typeof Component> = {
  component: Component,
  title: "Shared/Layout",
  parameters: {
    layout: "fullscreen",
  },
};

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

export const NavbarLayout: Story = {
  args: defaultArgs,
  render,
};
