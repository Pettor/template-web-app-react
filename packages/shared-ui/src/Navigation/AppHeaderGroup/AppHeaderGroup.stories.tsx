import type { ComponentProps } from "react";
import type { Meta, StoryObj } from "@storybook/react";
import { AppHeaderGroup as Component } from "./AppHeaderGroup";

const meta = {
  component: Component,
  title: "Navigation/Header/Group",
} satisfies Meta<typeof Component>;

export default meta;
type Story = StoryObj<typeof meta>;

function render(args: ComponentProps<typeof Component>) {
  return (
    <Component {...args}>
      <div>First</div>
      <div>Second</div>
      <div>Third</div>
    </Component>
  );
}

export const BothDivider = {
  args: {
    dividerStyle: "both",
  },
  render,
} satisfies Story;

export const NoDivider = {
  args: {
    dividerStyle: "none",
  },
  render,
} satisfies Story;

export const WithSpacing = {
  args: {
    spacing: 3,
    dividerStyle: "none",
  },
  render,
} satisfies Story;
