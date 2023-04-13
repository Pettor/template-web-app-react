import type { ComponentProps, ReactElement } from "react";
import type { BoxProps } from "@mui/material/Box";
import Box from "@mui/material/Box";
import type { Meta, StoryObj } from "@storybook/react";
import Component from "./ElevationScroll";
import { ContentComponent } from "~/stories/data/ContentData";

const meta = {
  component: Component,
  title: "Navigation/Scrolling",
} satisfies Meta<typeof Component>;

export default meta;
type Story = StoryObj<typeof meta>;

function render(args: ComponentProps<typeof Component>): ReactElement {
  return (
    <Component {...args}>
      <Box>
        <ContentComponent />
      </Box>
    </Component>
  );
}

export const WithContent = {
  args: {
    getProps: (trigger: boolean): BoxProps => ({
      sx: {
        backgroundColor: trigger ? "blue" : "green",
      },
    }),
  },
  render,
} satisfies Story;
