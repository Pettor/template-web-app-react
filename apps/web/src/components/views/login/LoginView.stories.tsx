import type { Meta, StoryObj } from "@storybook/react";
import { FullSizeDecorator } from "storybook-base";
import { LoginView as Component } from "./LoginView";
import type { LoginViewProps as Props } from "./LoginView";

const meta = {
  component: Component,
  title: "Views/Login",
  parameters: {
    layout: "fullscreen",
  },
  argTypes: {
    loginForm: {
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
  loginForm: {
    loading: false,
    onSubmit: () => console.log("onSubmit"),
  },
  handleForgotPassword: () => console.log("handleForgotPassword"),
  handleSignUp: () => console.log("handleSignUp"),
} satisfies Props;

export const Fullscreen = {
  args: defaultArgs,
  decorators: [FullSizeDecorator],
  parameters: { viewport: { defaultViewport: "full" } },
} satisfies Story;

export const Phone = {
  args: defaultArgs,
  parameters: { viewport: { defaultViewport: "iphonex" } },
} satisfies Story;
