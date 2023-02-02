import { ComponentStoryObj } from "@storybook/react";
import Component from "./AppHeader";

type Story = ComponentStoryObj<typeof Component>;

export default {
  component: Component,
  title: "Layout/Header",
};

export const AppHeader: Story = {
  args: {
    label: "This is a Header",
  },
};

export const SubHeader: Story = {
  args: {
    subheader: true,
    label: "This is a SubHeader",
  },
};
