import type { Meta, StoryObj } from "@storybook/react";
import Component from "./ContainerLayout";
import { ContentComponent } from "~/stories/data/ContentData";

const meta = {
  component: Component,
  title: "Layout/Templates",
} satisfies Meta<typeof Component>;

export default meta;
type Story = StoryObj<typeof meta>;

export const ContainerLayout = {
  args: {
    children: <ContentComponent />,
  },
} satisfies Story;
