import type { Meta, StoryObj } from "@storybook/react";
import Component from "./ProfileCardResponsive";
import CenterDecorator from "~/stories/decorators/CenterDecorator";

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
