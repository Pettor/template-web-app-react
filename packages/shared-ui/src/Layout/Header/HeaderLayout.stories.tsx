import type { Meta, StoryObj } from "@storybook/react";
import { NavbarComponent } from "Storybook/NavbarComponent";
import { TableContentComponent } from "Storybook/TableContentComponent";
import { HeaderLayout as Component } from "./HeaderLayout";
import type { HeaderLayoutProps, HeaderLayoutProps as Props } from "./HeaderLayout";

const meta = {
  component: Component,
  title: "Shared/Layout",
  parameters: {
    layout: "fullscreen",
  },
  argTypes: {
    navbarElement: {
      table: {
        disable: true,
      },
    },
  },
} satisfies Meta<typeof Component>;

export default meta;
type Story = StoryObj<typeof meta>;

const defaultArgs = {
  navbarElement: <NavbarComponent />,
  onGithubClick: () => console.log("onGithubClick"),
  onLinkedInClick: () => console.log("onLinkedInClick"),
} satisfies HeaderLayoutProps;

function render(args: Props) {
  return (
    <Component {...args}>
      <TableContentComponent />
    </Component>
  );
}

export const HeaderLayout = {
  args: defaultArgs,
  render,
} satisfies Story;
