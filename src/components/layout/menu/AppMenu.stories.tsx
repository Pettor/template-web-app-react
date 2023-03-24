import type { ComponentProps } from "react";
import MenuItem from "@mui/material/MenuItem";
import type { Meta, StoryObj } from "@storybook/react";
import ProfileCardResponsive from "../profile/ProfileCardResponsive";
import Component from "./AppMenu";

const meta = {
  component: Component,
  title: "Layout/Menu",
} satisfies Meta<typeof Component>;

export default meta;
type Story = StoryObj<typeof meta>;

export const WithContent = {
  render: (args: ComponentProps<typeof Component>) => (
    <Component {...args}>
      <MenuItem>Content</MenuItem>
    </Component>
  ),
  args: {
    open: true,
    anchorEl: null,
  },
} satisfies Story;

export const WithProfileCard = {
  render: (args: ComponentProps<typeof Component>) => (
    <Component {...args}>
      <ProfileCardResponsive />
    </Component>
  ),
  args: {
    open: true,
    anchorEl: null,
  },
} satisfies Story;
