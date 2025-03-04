import type { Meta, StoryObj } from "@storybook/react";
import { StorybookNavbarContentComponent } from "Storybook/Components/StorybookNavbarContentComponent";
import { Navbar as Component } from "./Navbar";
import type { NavbarProps as Props } from "./Navbar";

const meta = {
  component: Component,
  title: "Shared/Navigation/Navbar",
  parameters: {
    layout: "fullscreen",
  },
} satisfies Meta<typeof Component>;

export default meta;
type Story = StoryObj<typeof meta>;

const defaultArgs = {
  title: "This is a Header",
} satisfies Props;

export const Standard = {
  args: defaultArgs,
} satisfies Story;

export const WithComponents = {
  args: {
    ...defaultArgs,
    endElement: <StorybookNavbarContentComponent />,
  },
  parameters: { viewport: { defaultViewport: "full" } },
} satisfies Story;
