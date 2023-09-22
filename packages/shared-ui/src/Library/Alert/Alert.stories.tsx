import { expect } from "@storybook/jest";
import type { Meta, StoryObj } from "@storybook/react";
import { userEvent, waitFor, within } from "@storybook/testing-library";
import { CommonDecorator } from "storybook-base";
import { Alert as Component } from "./Alert";
import type { AutoAlertProps } from "./Alert";

const meta = {
  title: "Library/Alert",
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

    await waitFor(async () => await expect(canvas.getByTestId("auto-alert__container")).not.toBeVisible());
  },
} satisfies Story;

export const TimeoutAlert: Story = {
  args: {
    ...defaultArgs,
    timeout: 1,
  },
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement);

    await waitFor(async () => await expect(canvas.getByTestId("auto-alert__container")).not.toBeVisible());
  },
} satisfies Story;
