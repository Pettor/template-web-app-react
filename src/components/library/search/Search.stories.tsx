import { Meta, StoryObj } from "@storybook/react";
import CommonDecorator from "../../../stories/decorators/CommonDecorator";
import Component from "./Search";

const meta = {
  component: Component,
  title: "Library/Search",
  decorators: [CommonDecorator],
  tags: ["autodocs"],
} satisfies Meta<typeof Component>;

export default meta;
type Story = StoryObj<typeof meta>;

export const FullWidth = {} satisfies Story;

export const MaxWidth = {
  args: {
    maxWidth: "sm",
  },
} satisfies Story;
