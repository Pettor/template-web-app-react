import type { Meta, StoryObj } from "@storybook/react";
import ProfileCard from "../profile/ProfileCard";
import Component from "./AppMenuMobile";

const meta = {
  component: Component,
  title: "Layout/Menu",
} satisfies Meta<typeof Component>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Mobile = {
  args: {
    open: true,
    anchorEl: null,
  },
  render: (args) => (
    <Component {...args}>
      <ProfileCard isMobile={true} />
    </Component>
  ),
} satisfies Story;
