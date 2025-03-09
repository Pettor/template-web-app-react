import type { Meta, StoryObj } from "@storybook/react";
import { FullSizeDecorator } from "storybook-package";
import { LoginView as Component } from "./LoginView";
import type { LoginViewProps as Props } from "./LoginView";

const meta: Meta<typeof Component> = {
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
};

export default meta;
type Story = StoryObj<typeof meta>;

const defaultArgs = {
  appName: "My App",
  loginForm: {
    loading: false,
    onSubmit: () => console.log("onSubmit"),
  },
  onAbout: () => console.log("onAbout"),
  onForgotPassword: () => console.log("handleForgotPassword"),
  onSignUp: () => console.log("handleSignUp"),
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
