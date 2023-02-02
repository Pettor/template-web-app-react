import { ComponentStoryObj } from "@storybook/react";
import Component from "./HomeView";

type Story = ComponentStoryObj<typeof Component>;

export default {
  component: Component,
  title: "Views/Home",
};

export const Home: Story = {};
