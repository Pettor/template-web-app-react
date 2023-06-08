import type { Meta, StoryObj } from "@storybook/react";
import { ContentComponent } from "storybook-base";
import { BasicLayout as Component } from "./BasicLayout";

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
