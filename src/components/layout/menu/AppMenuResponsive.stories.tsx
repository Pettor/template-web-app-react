import type { ComponentProps } from "react";
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
  render: (args: ComponentProps<typeof Component>) => (
    <Component {...args}>
      <ProfileCardResponsive />
    </Component>
  ),
  args: {
    open: true,
    anchorEl: null,
  },
} satisfies Story;
