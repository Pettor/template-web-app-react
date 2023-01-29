import * as React from "react";
import { ComponentMeta, ComponentStory } from "@storybook/react";
import AppMenu from "./AppMenu";
import Box from "@mui/material/Box";
import MenuItem from "@mui/material/MenuItem";

export default {
  component: AppMenu,
  title: "Layout/Menu",
} as ComponentMeta<typeof AppMenu>;

const Template: ComponentStory<typeof AppMenu> = (args) => {
  return (
    <AppMenu {...args}>
      <MenuItem>Content</MenuItem>
    </AppMenu>
  );
};

export const Default = Template.bind({});
Default.args = {
  open: true,
};
