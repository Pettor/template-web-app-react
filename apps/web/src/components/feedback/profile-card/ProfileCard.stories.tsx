import type { Meta, StoryObj } from "@storybook/react";
import { userEvent, within, expect } from "@storybook/test";
import { CenterDecorator } from "storybook-base";
import { ProfileCard as Component } from "./ProfileCard";
import type { ProfileCardProps as Props } from "./ProfileCard";
import { AppSessionData } from "~/storybook/data/AppSessionData";

const meta = {
  component: Component,
  title: "Feedback/Profile/Card",
  decorators: [CenterDecorator],
  tags: ["autodocs"],
} satisfies Meta<typeof Component>;

export default meta;
type Story = StoryObj<typeof meta>;

const defaultArgs = {
  ...AppSessionData,
} satisfies Props;

export const WithData: Story = {
  args: defaultArgs,
  parameters: { viewport: { defaultViewport: "full" } },
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
    ...defaultArgs,
    name: "",
    email: "",
  },
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement);

    // No text should be visible during loading
    await expect(canvas.getByTestId("profile-card__name-text")).not.toHaveTextContent(/./);
    await expect(canvas.getByTestId("profile-card__email-text")).not.toHaveTextContent(/./);
  },
} satisfies Story;
