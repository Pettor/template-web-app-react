import type { ComponentProps, ReactElement } from "react";
import type { Meta, StoryObj } from "@storybook/react";
import ProfileCard from "../../library/profile-card/ProfileCard";
import Component from "./AppMenuMobile";

const meta = {
  component: Component,
  title: "Navigation/Menu",
} satisfies Meta<typeof Component>;

export default meta;
type Story = StoryObj<typeof meta>;

function render(args: ComponentProps<typeof Component>): ReactElement {
  return (
    <Component {...args}>
      <ProfileCard isMobile={true} />
    </Component>
  );
}

export const Mobile = {
  args: {
    open: true,
    anchorEl: null,
  },
  render,
} satisfies Story;
