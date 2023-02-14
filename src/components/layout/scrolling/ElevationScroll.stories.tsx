import Box, { BoxProps } from "@mui/material/Box";
import { Meta, StoryObj } from "@storybook/react";
import { ContentComponent } from "../../../stories/data/ContentData";
import Component from "./ElevationScroll";

const meta = {
  component: Component,
  title: "Layout/Scrolling",
} satisfies Meta<typeof Component>;

export default meta;
type Story = StoryObj<typeof meta>;

export const WithContent = {
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
} satisfies Story;
