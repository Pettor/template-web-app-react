import type { Meta, StoryObj } from "@storybook/react";
import { StorybookNavbarContentComponent } from "Storybook/Components/StorybookNavbarContentComponent";
import { Navbar as Component } from "./Navbar";
import type { NavbarProps as Props } from "./Navbar";

const meta: Meta<typeof Component> = {
  component: Component,
  title: "Shared/Navigation/Navbar",
  parameters: {
    layout: "fullscreen",
  },
};

export default meta;
type Story = StoryObj<typeof meta>;

const defaultArgs = {
  title: "This is a Header",
} satisfies Props;

export const Standard: Story = {
  args: defaultArgs,
};

export const WithComponents: Story = {
  args: {
    ...defaultArgs,
    endElement: <StorybookNavbarContentComponent />,
  },
  parameters: { viewport: { defaultViewport: "full" } },
};
