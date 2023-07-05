import type { Meta, StoryObj } from "@storybook/react";
import { ProfileCardResponsive } from "Library/ProfileCardResponsive";
import type { AppMenuResponsiveProps as Props } from "./AppMenuResponsive";
import { AppMenuResponsive as Component } from "./AppMenuResponsive";

const meta = {
  component: Component,
  title: "Navigation/Menu",
} satisfies Meta<typeof Component>;

export default meta;
type Story = StoryObj<typeof meta>;

function render(args: Props) {
  return (
    <Component {...args}>
      <ProfileCardResponsive />
    </Component>
  );
}

export const Responsive = {
  args: {
    open: true,
    anchorEl: null,
  },
  render,
} satisfies Story;
