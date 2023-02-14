import React from "react";
import Box, { BoxProps } from "@mui/material/Box";
import { ComponentStoryObj } from "@storybook/react";
import { ContentComponent } from "../../../stories/data/ContentData";
import Component from "./ElevationScroll";

type Story = ComponentStoryObj<typeof Component>;

export default {
  component: Component,
  title: "Layout/Scrolling",
};

export const WithContent: Story = {
  render: (args) => (
    <Component {...args}>
      <Box>
        <ContentComponent />
      </Box>
    </Component>
  ),
  args: {
    getProps: (trigger: boolean): BoxProps => ({
      sx: {
        backgroundColor: trigger ? "blue" : "green",
      },
    }),
  },
};
