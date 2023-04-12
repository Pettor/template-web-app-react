import type { Meta, StoryObj } from "@storybook/react";
import Component from "./HomeView";
import { DefaultHeaderComponents } from "~/stories/data/HeaderData";

const meta = {
  component: Component,
  title: "Views/Home",
} satisfies Meta<typeof Component>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Home = {
  args: {
    headerComponents: <DefaultHeaderComponents />,
  },
} satisfies Story;
