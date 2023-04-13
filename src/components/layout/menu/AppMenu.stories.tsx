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
  args: {
    open: true,
    anchorEl: null,
  },
  render: (args) => (
    <Component {...args}>
      <MenuItem>Content</MenuItem>
    </Component>
  ),
} satisfies Story;

export const WithProfileCard = {
  args: {
    open: true,
    anchorEl: null,
  },
  render: (args) => (
    <Component {...args}>
      <ProfileCardResponsive />
    </Component>
  ),
} satisfies Story;
