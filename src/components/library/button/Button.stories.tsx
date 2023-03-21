import React from "react";
import Component from "@mui/material/Button";
import type { ComponentStoryObj } from "@storybook/react";
import CommonDecorator from "~/stories/decorators/CommonDecorator";

type Story = ComponentStoryObj<typeof Component>;

export default {
  component: Component,
  title: "Library/Button",
  decorators: [CommonDecorator],
};

export const Contained: Story = {
  render: (args) => <Component {...args}>Button</Component>,
  args: {
    variant: "contained",
  },
};

export const Outlined: Story = {
  render: (args) => <Component {...args}>Button</Component>,
  args: {
    variant: "outlined",
  },
};

export const Text: Story = {
  render: (args) => <Component {...args}>Button</Component>,
  args: {
    variant: "text",
  },
};
