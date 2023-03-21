import type { ComponentStoryObj } from "@storybook/react";
import Component from "./ProfileCardResponsive";
import CenterDecorator from "~/stories/decorators/CenterDecorator";
import PaddingTopDectorator from "~/stories/decorators/PaddingTopDectorator";

type Story = ComponentStoryObj<typeof Component>;

export default {
  component: Component,
  title: "Layout/Profile/Card",
  decorators: [CenterDecorator, PaddingTopDectorator],
};

export const Responsive: Story = {
  args: {
    name: "John Doe",
    email: "john.doe@gmail.com",
  },
};
