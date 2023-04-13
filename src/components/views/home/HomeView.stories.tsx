import type { Meta, StoryObj } from "@storybook/react";
import Component from "./HomeView";
import { DefaultHeaderComponents } from "~/stories/data/HeaderData";

const meta = {
  component: Component,
  title: "Views/Home",
  parameters: {
    layout: "fullscreen",
  },
  argTypes: {
    headerComponents: {
      table: {
        disable: true,
      },
    },
  },
} satisfies Meta<typeof Component>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Home = {
  args: {
    headerComponents: <DefaultHeaderComponents />,
  },
} satisfies Story;
