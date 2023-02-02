import React from "react";
import MenuItem from "@mui/material/MenuItem";
import { ComponentStoryObj } from "@storybook/react";
import Component from "./AppMenu";

type Story = ComponentStoryObj<typeof Component>;

export default {
  component: Component,
  title: "Layout/Menu",
};

function Template(args) {
  return (
    <Component {...args}>
      <MenuItem>Content</MenuItem>
    </Component>
  );
}

export const AppMenu: Story = {
  render: Template,
  args: {
    open: true,
  },
};
