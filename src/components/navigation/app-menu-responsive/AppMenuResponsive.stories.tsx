import type { ComponentProps } from "react";
import type { Meta, StoryObj } from "@storybook/react";
import Component from "./AppMenuResponsive";
import ProfileCardResponsive from "~/components/library/profile-card-responsive/ProfileCardResponsive";

const meta = {
  component: Component,
  title: "Navigation/Menu",
} satisfies Meta<typeof Component>;

export default meta;
type Story = StoryObj<typeof meta>;

function render(args: ComponentProps<typeof Component>) {
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
