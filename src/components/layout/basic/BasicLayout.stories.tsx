import type { Meta, StoryObj } from "@storybook/react";
import Component from "./BasicLayout";
import { ContentComponent } from "~/stories/data/ContentData";

const meta = {
  component: Component,
  title: "Layout/Basic",
} satisfies Meta<typeof Component>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Basic = {
  args: {
    children: <ContentComponent />,
  },
} satisfies Story;
