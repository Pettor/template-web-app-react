import type { Meta, StoryObj } from "@storybook/react";
import { FullSizeDecorator } from "storybook-package";
import { ForgotPasswordView as Component } from "./ForgotPasswordView";
import type { ForgotPasswordViewProps as Props } from "./ForgotPasswordView";

const meta: Meta<typeof Component> = {
  component: Component,
  title: "Views/Forgot Password",
  parameters: {
    layout: "fullscreen",
  },
  argTypes: {
    resetForm: {
      table: {
        disable: true,
      },
    },
  },
};

export default meta;
type Story = StoryObj<typeof meta>;

const defaultArgs = {
  appName: "My App",
  resetForm: {
    loading: false,
    onSubmit: () => console.log("onSubmit"),
  },
  onBack: () => console.log("onBack"),
} satisfies Props;

export const Fullscreen: Story = {
  args: defaultArgs,
  decorators: [FullSizeDecorator],
  parameters: { viewport: { defaultViewport: "full" } },
};

export const Phone: Story = {
  args: defaultArgs,
  parameters: { viewport: { defaultViewport: "iphonex" } },
};
