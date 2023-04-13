import type { BoxProps } from "@mui/material/Box";
import Box from "@mui/material/Box";
import type { Meta, StoryObj } from "@storybook/react";
import Component from "./ElevationScroll";
import { ContentComponent } from "~/stories/data/ContentData";

const meta = {
  component: Component,
  title: "Layout/Scrolling",
} satisfies Meta<typeof Component>;

export default meta;
type Story = StoryObj<typeof meta>;

export const WithContent = {
  args: {
    getProps: (trigger: boolean): BoxProps => ({
      sx: {
        backgroundColor: trigger ? "blue" : "green",
      },
    }),
  },
  render: (args) => (
    <Component {...args}>
      <Box>
        <ContentComponent />
      </Box>
    </Component>
  ),
} satisfies Story;
