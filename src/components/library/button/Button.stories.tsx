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
  args: {
    variant: "contained",
  },
  render: (args) => <Component {...args}>Button</Component>,
} satisfies Story;

export const Outlined = {
  args: {
    variant: "outlined",
  },
  render: (args) => <Component {...args}>Button</Component>,
} satisfies Story;

export const Text = {
  args: {
    variant: "text",
  },
  render: (args) => <Component {...args}>Button</Component>,
} satisfies Story;
