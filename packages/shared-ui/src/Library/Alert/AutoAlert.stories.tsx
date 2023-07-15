import { expect } from "@storybook/jest";
import type { Meta, StoryObj } from "@storybook/react";
import { userEvent, within } from "@storybook/testing-library";
import { CommonDecorator } from "storybook-base";
import { AutoAlert as Component } from "./AutoAlert";
import type { AutoAlertProps } from "./AutoAlert";

const meta = {
  title: "Library/Alerts",
  component: Component,
  decorators: [CommonDecorator],
  tags: ["autodocs"],
} satisfies Meta<typeof Component>;

export default meta;
type Story = StoryObj<typeof meta>;

const defaultArgs: AutoAlertProps = {
  text: "Info text",
  severity: "info",
};

export const Info = {
  args: defaultArgs,
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

export const CloseAlert: Story = {
  args: defaultArgs,
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement);

    await userEvent.click(canvas.getByTestId("auto-alert__close-button"));

    expect(canvas.getByText("Info text")).not.toBeInTheDocument;
  },
} satisfies Story;
