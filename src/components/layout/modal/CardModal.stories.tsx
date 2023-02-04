import React, { ComponentProps } from "react";
import Box from "@mui/material/Box";
import { ComponentStoryObj } from "@storybook/react";
import Component from "./CardModal";

type Story = ComponentStoryObj<typeof Component>;

export default {
  component: Component,
  title: "Layout/Modal/Card",
};

function Template(args: ComponentProps<typeof Component>) {
  return (
    <Component {...args}>
      <Box>This is content test</Box>
    </Component>
  );
}

export const Card: Story = {
  render: Template,
  args: {
    open: true,
    title: "Card Modal",
    date: new Date(Date.now()),
  },
};
