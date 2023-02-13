import React from "react";
import { ComponentStoryObj } from "@storybook/react";
import ProfileCard from "../profile/ProfileCard";
import Component from "./AppMenuMobile";

type Story = ComponentStoryObj<typeof Component>;

export default {
  component: Component,
  title: "Layout/Menu",
};

export const Mobile: Story = {
  render: (args) => (
    <Component {...args}>
      <ProfileCard isMobile={true} />
    </Component>
  ),
  args: {
    open: true,
  },
};
