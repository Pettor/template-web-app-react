import type { Meta, StoryObj } from "@storybook/react";
import Component from "./AppHeaderResponsive";
import { DefaultHeaderComponents } from "~/stories/data/HeaderData";

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
