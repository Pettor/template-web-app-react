import React from "react";
import { ComponentProps } from "react";
import Box from "@mui/material/Box";
import { ComponentStoryObj } from "@storybook/react";
import Component from "./ResponsiveModal";

type Story = ComponentStoryObj<typeof Component>;

export default {
  component: Component,
  title: "Layout/Modal/Responsive",
};

function Template(args: ComponentProps<typeof Component>) {
  return (
    <Component {...args}>
      <Box>This is content test</Box>
    </Component>
  );
}

export const Responsive: Story = {
  render: Template,
  args: {
    open: true,
    title: "Card Modal",
  },
};
