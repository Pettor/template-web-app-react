import type { Meta, StoryObj } from "@storybook/react";
import Component from "./ProfileCard";
import CenterDecorator from "~/stories/decorators/CenterDecorator";

const meta = {
  component: Component,
  title: "Library/Card/Profile",
  decorators: [CenterDecorator],
  tags: ["autodocs"],
} satisfies Meta<typeof Component>;

export default meta;
type Story = StoryObj<typeof meta>;

export const WithData = {
  args: {
    name: "John Doe",
    email: "john.doe@gmail.com",
  },
} satisfies Story;

export const Loading = {
  args: {
    name: undefined,
    email: undefined,
  },
} satisfies Story;

export const Styled = {
  args: {
    name: undefined,
    email: undefined,
  },
} satisfies Story;

export const Mobile = {
  args: {
    name: "John Doe",
    email: "john.doe@gmail.com",
  },
} satisfies Story;
