import { ComponentProps, ReactElement } from "react";
import Box from "@mui/material/Box";
import { Meta, StoryObj } from "@storybook/react";
import Component from "./CardModal";

const meta = {
  component: Component,
  title: "Layout/Modal/Card",
} satisfies Meta<typeof Component>;

export default meta;
type Story = StoryObj<typeof meta>;

function Template(args: ComponentProps<typeof Component>): ReactElement {
  return (
    <Component {...args}>
      <Box>This is content test</Box>
    </Component>
  );
}

export const Card = {
  render: Template,
  args: {
    open: true,
    title: "Card Modal",
    date: new Date(Date.now()),
  },
} satisfies Story;
