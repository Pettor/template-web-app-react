import { Meta, StoryObj } from "@storybook/react";
import CenterDecorator from "../../../stories/decorators/CenterDecorator";
import PaddingTopDectorator from "../../../stories/decorators/PaddingTopDectorator";
import Component from "./ProfileCard";

const meta = {
  component: Component,
  title: "Layout/Profile/Card",
  decorators: [CenterDecorator, PaddingTopDectorator],
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

export const Mobile = {
  args: {
    name: "John Doe",
    email: "john.doe@gmail.com",
  },
} satisfies Story;
