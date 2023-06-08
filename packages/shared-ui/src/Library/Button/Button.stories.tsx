import type { ComponentProps } from "react";
import type { Meta, StoryObj } from "@storybook/react";
import { CommonDecorator } from "storybook-base";
import { Button as Component } from "./Button";

const meta = {
  title: "Library/Button",
  decorators: [CommonDecorator],
  tags: ["autodocs"],
} satisfies Meta<typeof Component>;

export default meta;
type Story = StoryObj<typeof Component>;

function render(args: ComponentProps<typeof Component>) {
  return <Component {...args}>Button</Component>;
}

export const Contained = {
  args: {
    variant: "contained",
  },
  render,
} satisfies Story;

export const Outlined = {
  args: {
    variant: "outlined",
  },
  render,
} satisfies Story;

export const Text = {
  args: {
    variant: "text",
  },
  render,
} satisfies Story;
