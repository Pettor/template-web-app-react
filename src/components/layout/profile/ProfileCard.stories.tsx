import { ComponentStoryObj } from "@storybook/react";
import Component from "./ProfileCard";
import CenterDecorator from "~/stories/decorators/CenterDecorator";
import PaddingTopDectorator from "~/stories/decorators/PaddingTopDectorator";

type Story = ComponentStoryObj<typeof Component>;

export default {
  component: Component,
  title: "Layout/Profile/Card",
  decorators: [CenterDecorator, PaddingTopDectorator],
};

export const WithData = {
  args: {
    name: "John Doe",
    email: "john.doe@gmail.com",
  },
};

export const Loading: Story = {
  args: {
    name: undefined,
    email: undefined,
  },
};

export const Mobile: Story = {
  args: {
    name: "John Doe",
    email: "john.doe@gmail.com",
    isMobile: true,
  },
};
