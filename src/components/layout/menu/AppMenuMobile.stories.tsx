import type { ComponentProps } from "react";
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
  render: (args: ComponentProps<typeof Component>) => (
    <Component {...args}>
      <ProfileCard isMobile={true} />
    </Component>
  ),
  args: {
    open: true,
    anchorEl: null,
  },
} satisfies Story;
