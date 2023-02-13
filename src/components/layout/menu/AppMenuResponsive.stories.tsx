import React from "react";
import { ComponentStoryObj } from "@storybook/react";
import ProfileCardResponsive from "../profile/ProfileCardResponsive";
import Component from "./AppMenuResponsive";

type Story = ComponentStoryObj<typeof Component>;

export default {
  component: Component,
  title: "Layout/Menu",
};

export const Responsive: Story = {
  render: (args) => (
    <Component {...args}>
      <ProfileCardResponsive />
    </Component>
  ),
  args: {
    open: true,
  },
};
