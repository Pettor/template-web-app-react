import React from "react";
import Component from "@mui/material/Button";
import CommonDecorator from "../../../stories/decorators/CommonDecorator";

export default {
  component: Component,
  title: "Library/Button",
  decorators: [CommonDecorator],
};

export const Contained = {
  render: (args) => <Component {...args}>Button</Component>,
  args: {
    variant: "contained",
  },
};

export const Outlined = {
  render: (args) => <Component {...args}>Button</Component>,
  args: {
    variant: "outlined",
  },
};

export const Text = {
  render: (args) => <Component {...args}>Button</Component>,
  args: {
    variant: "text",
  },
};
