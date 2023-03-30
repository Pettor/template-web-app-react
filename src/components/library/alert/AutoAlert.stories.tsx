import type { Meta, StoryObj } from "@storybook/react";
import Component from "./AutoAlert";
import CommonDecorator from "~/stories/decorators/CommonDecorator";

const meta = {
  title: "Library/Alerts",
  component: Component,
  decorators: [CommonDecorator],
  tags: ["autodocs"],
} satisfies Meta<typeof Component>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Info = {
  args: {
    text: "Info text",
    severity: "info",
  },
} satisfies Story;

export const Success = {
  args: {
    text: "Success text",
    severity: "success",
  },
} satisfies Story;

export const Warning = {
  args: {
    text: "Warning text",
    severity: "warning",
  },
} satisfies Story;

export const Error = {
  args: {
    text: "Error text",
    severity: "error",
  },
} satisfies Story;
