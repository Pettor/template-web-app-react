import type { Meta, StoryObj } from "@storybook/react";
import { userEvent, within, expect } from "@storybook/test";
import { ContainerDecorator } from "storybook-package";
import { ForgotPasswordForm as Component } from "./ForgotPasswordForm";
import type { ForgotPasswordFormProps as Props } from "./ForgotPasswordForm";

const meta: Meta<typeof Component> = {
  component: Component,
  title: "Forms/Forgot Password",
  decorators: [ContainerDecorator],
};

export default meta;
type Story = StoryObj<typeof meta>;

const defaultArgs: Props = {
  loading: false,
  onSubmit: () => console.log("onSubmit"),
};

export const Standard: Story = {
  args: defaultArgs,
};

export const Success: Story = {
  args: defaultArgs,
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement);

    await userEvent.type(canvas.getByTestId("forgot-password-form__email-input"), "email@provider.com");
    await userEvent.click(canvas.getByTestId("forgot-password-form__submit-button"));

    await expect(canvas.getByTestId("forgot-password-form__email-input")).toHaveValue("email@provider.com");
  },
};

export const IncorrectEmail: Story = {
  args: defaultArgs,
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement);

    await userEvent.type(canvas.getByTestId("forgot-password-form__email-input"), "incorrect");
    await userEvent.click(canvas.getByTestId("forgot-password-form__submit-button"));

    await expect(canvas.getByText("Email must be valid")).toBeInTheDocument;
  },
};
