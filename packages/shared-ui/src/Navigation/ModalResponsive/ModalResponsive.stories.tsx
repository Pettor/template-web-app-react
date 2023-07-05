import type { ReactElement } from "react";
import { Box } from "@mui/material";
import type { Meta, StoryObj } from "@storybook/react";
import type { ModalResponsiveProps as Props } from "./ModalResponsive";
import { ModalResponsive as Component } from "./ModalResponsive";

const meta = {
  component: Component,
  title: "Navigation/Modal/Responsive",
} satisfies Meta<typeof Component>;

export default meta;
type Story = StoryObj<typeof meta>;

function render(args: Props): ReactElement {
  return (
    <Component {...args}>
      <Box>This is content test</Box>
    </Component>
  );
}

export const Responsive = {
  args: {
    open: true,
    title: "Card Modal",
  },
  render,
} satisfies Story;
