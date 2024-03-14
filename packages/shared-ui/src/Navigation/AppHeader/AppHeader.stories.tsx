import type { Meta, StoryObj } from "@storybook/react";
import { DefaultHeaderComponents } from "Storybook";
import { AppHeader as Component } from "./AppHeader";
import type { AppHeaderProps as Props } from "./AppHeader";

const meta = {
  component: Component,
  title: "Navigation/Header",
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
    components: <DefaultHeaderComponents />,
  },
} satisfies Story;
