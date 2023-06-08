import type { Meta, StoryObj } from "@storybook/react";
import { DefaultHeaderComponents } from "Storybook/Data";
import { AppHeaderResponsive as Component } from "./AppHeaderResponsive";

const meta = {
  component: Component,
  title: "Navigation/Header",
} satisfies Meta<typeof Component>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Responsive = {
  args: {
    label: "This is a Header",
    headerComponents: <DefaultHeaderComponents />,
  },
} satisfies Story;
