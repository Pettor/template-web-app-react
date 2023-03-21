import React from "react";
import MenuItem from "@mui/material/MenuItem";
import type { ComponentStoryObj } from "@storybook/react";
import ProfileCardResponsive from "../profile/ProfileCardResponsive";
import Component from "./AppMenu";

type Story = ComponentStoryObj<typeof Component>;

export default {
  component: Component,
  title: "Layout/Menu",
};

export const WithContent: Story = {
  render: (args) => (
    <Component {...args}>
      <MenuItem>Content</MenuItem>
    </Component>
  ),
  args: {
    open: true,
  },
};

export const WithProfileCard: Story = {
  render: (args) => (
    <Component {...args}>
      <ProfileCardResponsive />
    </Component>
  ),
  args: {
    open: true,
  },
};
