import Box from "@mui/material/Box";
import type { Meta, StoryObj } from "@storybook/react";
import Component from "./CardModal";

const meta = {
  component: Component,
  title: "Layout/Modal/Card",
} satisfies Meta<typeof Component>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Card = {
  args: {
    open: true,
    title: "Card Modal",
    date: new Date(Date.now()),
  },
  render: (args) => (
    <Component {...args}>
      <Box>This is content test</Box>
    </Component>
  ),
} satisfies Story;
