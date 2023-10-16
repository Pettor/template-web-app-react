import type { Meta, StoryObj } from "@storybook/react";
import { AppHeader as Component } from "./AppHeader";
import type { AppHeaderProps } from "./AppHeader";

const meta = {
  component: Component,
  title: "Navigation/Header",
} satisfies Meta<typeof Component>;

export default meta;
type Story = StoryObj<typeof meta>;

const defaultArgs = {
  title: "This is a Header",
} satisfies AppHeaderProps;

export const AppHeader = {
  args: defaultArgs,
} satisfies Story;
