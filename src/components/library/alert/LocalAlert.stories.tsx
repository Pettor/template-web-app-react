import { Meta, StoryObj } from "@storybook/react";
import CommonDecorator from "../../../stories/decorators/CommonDecorator";
import Component from "./LocalAlert";

const meta = {
  title: "Library/Alerts",
  component: Component,
  decorators: [CommonDecorator],
} satisfies Meta<typeof Component>;

export default meta;
type Story = StoryObj<typeof meta>;

export const LocalAlert = {
  args: {
    text: "Some error",
  },
} satisfies Story;
