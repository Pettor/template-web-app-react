import type { Meta, StoryObj } from "@storybook/react";
import { StorybookTableContentComponent } from "Storybook/Components/StorybookTableContentComponent";
import { BasicLayout as Component } from "./BasicLayout";

const meta: Meta<typeof Component> = {
  component: Component,
  title: "Shared/Layout",
};

export default meta;
type Story = StoryObj<typeof meta>;

export const BasicLayout: Story = {
  args: {
    children: <StorybookTableContentComponent />,
  },
};
