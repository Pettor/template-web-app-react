import { expect } from "@storybook/jest";
import type { Meta, StoryObj } from "@storybook/react";
import { within } from "@storybook/testing-library";
import { ContainerDecorator } from "storybook-base";
import { ForgotPasswordForm as Component } from "./ForgotPasswordForm";

const meta = {
  component: Component,
  title: "Forms/Forgot Password",
  decorators: [ContainerDecorator],
} satisfies Meta<typeof Component>;

export default meta;
type Story = StoryObj<typeof meta>;

export const ForgotPassword: Story = {
  args: {
    error: "",
    loading: false,
    onSubmit: () => console.log("onSubmit"),
  },
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement);
    expect(canvas.getByText("Button")).toBeInTheDocument();
  },
} satisfies Story;
