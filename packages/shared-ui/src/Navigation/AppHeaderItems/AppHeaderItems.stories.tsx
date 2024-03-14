import type { Meta, StoryObj } from "@storybook/react";
import { DefaultHeaderItemsProps } from "Storybook";
import { AppHeaderItems as Component } from "./AppHeaderItems";

const meta = {
  component: Component,
  title: "Navigation/Header/Items",
} satisfies Meta<typeof Component>;

export default meta;
type Story = StoryObj<typeof meta>;

const defaultArgs = DefaultHeaderItemsProps;

export const Standard = {
  args: defaultArgs,
} satisfies Story;
