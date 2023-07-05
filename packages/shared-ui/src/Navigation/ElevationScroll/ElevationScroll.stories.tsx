import type { ReactElement } from "react";
import { Box } from "@mui/material";
import type { BoxProps } from "@mui/material/Box";
import type { Meta, StoryObj } from "@storybook/react";
import { ContentComponent } from "storybook-base";
import { ElevationScroll as Component } from "./ElevationScroll";
import type { ElevationScrollProps as Props } from "./ElevationScroll";

const meta = {
  component: Component,
  title: "Navigation/Scrolling",
} satisfies Meta<typeof Component>;

export default meta;
type Story = StoryObj<typeof meta>;

function render(args: Props<React.Attributes>): ReactElement {
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
