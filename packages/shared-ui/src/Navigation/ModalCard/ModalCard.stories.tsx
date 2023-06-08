import type { ComponentProps } from "react";
import { Box } from "@mui/material";
import type { Meta, StoryObj } from "@storybook/react";
import { ModalCard as Component } from "./ModalCard";

const meta = {
  component: Component,
  title: "Navigation/Modal/Card",
} satisfies Meta<typeof Component>;

export default meta;
type Story = StoryObj<typeof meta>;

function render(args: ComponentProps<typeof Component>) {
  return (
    <Component {...args}>
      <Box>This is content test</Box>
    </Component>
  );
}

export const Card = {
  args: {
    open: true,
    title: "Card Modal",
    date: new Date(Date.now()),
  },
  render,
} satisfies Story;
