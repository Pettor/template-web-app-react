import Component from "@mui/material/Button";
import type { Meta, StoryObj } from "@storybook/react";
import CommonDecorator from "~/stories/decorators/CommonDecorator";

const meta = {
  title: "Library/Button",
  decorators: [CommonDecorator],
  tags: ["autodocs"],
} satisfies Meta<typeof Component>;

export default meta;
type Story = StoryObj<typeof Component>;

export const Contained = {
  render: (args) => <Component {...args}>Button</Component>,
  args: {
    variant: "contained",
  },
} satisfies Story;

export const Outlined = {
  render: (args) => <Component {...args}>Button</Component>,
  args: {
    variant: "outlined",
  },
} satisfies Story;

export const Text = {
  render: (args) => <Component {...args}>Button</Component>,
  args: {
    variant: "text",
  },
} satisfies Story;
