import type { Meta, StoryObj } from "@storybook/react";
import { FullSizeDecorator } from "storybook-base";
import { ForgotPasswordView as Component } from "./ForgotPasswordView";
import type { ForgotPasswordViewProps as Props } from "./ForgotPasswordView";

const meta = {
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
} satisfies Meta<typeof Component>;

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

export const Fullscreen = {
  args: defaultArgs,
  decorators: [FullSizeDecorator],
} satisfies Story;

export const Phone = {
  args: defaultArgs,
  parameters: { viewport: { defaultViewport: "iphonex" } },
} satisfies Story;
