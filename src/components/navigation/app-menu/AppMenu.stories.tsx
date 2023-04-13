import type { ComponentProps } from "react";
import MenuItem from "@mui/material/MenuItem";
import type { Meta, StoryObj } from "@storybook/react";
import Component from "./AppMenu";

const meta = {
  component: Component,
  title: "Navigation/Menu",
} satisfies Meta<typeof Component>;

export default meta;
type Story = StoryObj<typeof meta>;

function render(args: ComponentProps<typeof Component>) {
  return (
    <Component {...args}>
      <MenuItem>Content</MenuItem>
    </Component>
  );
}

export const WithContent = {
  args: {
    open: true,
    anchorEl: null,
  },
  render,
} satisfies Story;

export const WithProfileCard = {
  args: {
    open: true,
    anchorEl: null,
  },
  render,
} satisfies Story;
