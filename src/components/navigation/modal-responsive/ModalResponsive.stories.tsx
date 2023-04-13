import type { ReactElement } from "react";
import type { ComponentProps } from "react";
import Box from "@mui/material/Box";
import type { Meta, StoryObj } from "@storybook/react";
import Component from "./ModalResponsive";

const meta = {
  component: Component,
  title: "Navigation/Modal/Responsive",
} satisfies Meta<typeof Component>;

export default meta;
type Story = StoryObj<typeof meta>;

function render(args: ComponentProps<typeof Component>): ReactElement {
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
