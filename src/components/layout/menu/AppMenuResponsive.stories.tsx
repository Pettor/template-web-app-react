import type { Meta, StoryObj } from "@storybook/react";
import ProfileCardResponsive from "../profile/ProfileCardResponsive";
import Component from "./AppMenuResponsive";

const meta = {
  component: Component,
  title: "Layout/Menu",
} satisfies Meta<typeof Component>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Responsive = {
  args: {
    open: true,
    anchorEl: null,
  },
  render: (args) => (
    <Component {...args}>
      <ProfileCardResponsive />
    </Component>
  ),
} satisfies Story;
