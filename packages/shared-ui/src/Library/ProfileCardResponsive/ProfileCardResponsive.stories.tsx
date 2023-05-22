import type { Meta, StoryObj } from "@storybook/react";
import { CenterDecorator } from "storybook-base";
import { ProfileCardResponsive as Component } from "./ProfileCardResponsive";

const meta = {
  component: Component,
  title: "Library/Card/Profile",
  decorators: [CenterDecorator],
  tags: ["autodocs"],
} satisfies Meta<typeof Component>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Responsive = {
  args: {
    name: "John Doe",
    email: "john.doe@gmail.com",
  },
} satisfies Story;
