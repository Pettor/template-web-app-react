import type { Meta, StoryObj } from "@storybook/react";
import { TableContentComponent } from "Storybook/TableContentComponent";
import { BasicLayout as Component } from "./BasicLayout";

const meta = {
  component: Component,
  title: "Shared/Layout",
} satisfies Meta<typeof Component>;

export default meta;
type Story = StoryObj<typeof meta>;

export const BasicLayout = {
  args: {
    children: <TableContentComponent />,
  },
} satisfies Story;
