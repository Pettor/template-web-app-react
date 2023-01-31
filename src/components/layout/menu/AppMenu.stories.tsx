import React from "react";
import MenuItem from "@mui/material/MenuItem";
import Component from "./AppMenu";

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

export const AppMenu = {
  render: Template,
  args: {
    open: true,
  },
};
