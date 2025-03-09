import type { Meta, StoryObj } from "@storybook/react";
import { userEvent, within, expect } from "@storybook/test";
import { ContainerDecorator } from "storybook-package";
import { LoginForm as Component } from "./LoginForm";
import type { LoginFormProps as Props } from "./LoginForm";

const meta: Meta<typeof Component> = {
  component: Component,
  title: "Forms/Login",
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

    await userEvent.type(canvas.getByTestId("login-form__email-input"), "email@provider.com");
    await userEvent.type(canvas.getByTestId("login-form__password-input"), "password");
    await userEvent.click(canvas.getByTestId("login-form__submit-button"));

    await expect(canvas.getByTestId("login-form__email-input")).toHaveValue("email@provider.com");
    await expect(canvas.getByTestId("login-form__password-input")).toHaveValue("password");
  },
} satisfies Story;

export const EmailMissing: Story = {
  args: defaultArgs,
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement);

    await userEvent.type(canvas.getByTestId("login-form__password-input"), "password");
    await userEvent.click(canvas.getByTestId("login-form__submit-button"));

    await expect(canvas.getByText("Email is required")).toBeInTheDocument();
  },
} satisfies Story;

export const EmailInvalid: Story = {
  args: defaultArgs,
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement);

    await userEvent.type(canvas.getByTestId("login-form__email-input"), "incorrect");
    await userEvent.type(canvas.getByTestId("login-form__password-input"), "password");
    await userEvent.click(canvas.getByTestId("login-form__submit-button"));

    await expect(canvas.getByText("Email must be valid")).toBeInTheDocument();
  },
};

export const PasswordMissing: Story = {
  args: defaultArgs,
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement);

    await userEvent.type(canvas.getByTestId("login-form__email-input"), "email@provider.com");
    await userEvent.click(canvas.getByTestId("login-form__submit-button"));

    await expect(canvas.getByText("Password is required")).toBeInTheDocument();
  },
};
