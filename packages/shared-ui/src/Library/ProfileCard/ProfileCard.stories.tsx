import { expect } from "@storybook/jest";
import type { Meta, StoryObj } from "@storybook/react";
import { userEvent, within } from "@storybook/testing-library";
import { CenterDecorator } from "storybook-base";
import { ProfileCard as Component } from "./ProfileCard";

const meta = {
  component: Component,
  title: "Library/Card/Profile",
  decorators: [CenterDecorator],
  tags: ["autodocs"],
} satisfies Meta<typeof Component>;

export default meta;
type Story = StoryObj<typeof meta>;

export const WithData: Story = {
  args: {
    name: "John Doe",
    email: "john.doe@gmail.com",
  },
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement);

    // No text should be visible during loading
    await expect(canvas.getByTestId("profile-card__name-text")).toHaveTextContent("John Doe");
    await expect(canvas.getByTestId("profile-card__email-text")).toHaveTextContent("john.doe@gmail.com");

    userEvent.click(canvas.getByTestId("profile-card__logout-button"));
  },
} satisfies Story;

export const Loading: Story = {
  args: {
    name: undefined,
    email: undefined,
  },
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement);

    // No text should be visible during loading
    await expect(canvas.getByTestId("profile-card__name-text")).not.toHaveTextContent(/./);
    await expect(canvas.getByTestId("profile-card__email-text")).not.toHaveTextContent(/./);
  },
} satisfies Story;

export const Mobile = {
  args: {
    name: "John Doe",
    email: "john.doe@gmail.com",
    isMobile: true,
  },
} satisfies Story;
