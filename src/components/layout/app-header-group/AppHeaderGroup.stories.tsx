import type { Meta, StoryObj } from "@storybook/react";
import Component from "./AppHeaderGroup";

const meta = {
  component: Component,
  title: "Layout/Header/Group",
} satisfies Meta<typeof Component>;

export default meta;
type Story = StoryObj<typeof meta>;

export const BothDivider = {
  args: {
    dividerStyle: "both",
  },
  render: (args) => (
    <Component {...args}>
      <div>Something</div>
    </Component>
  ),
} satisfies Story;
