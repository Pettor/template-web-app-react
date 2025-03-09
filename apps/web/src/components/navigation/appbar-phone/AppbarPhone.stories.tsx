import type { Meta, StoryObj } from "@storybook/react";
import { FullSizeDecorator } from "storybook-package";
import { AppbarPhone as Component } from "./AppbarPhone";
import type { AppbarPhoneProps as Props } from "./AppbarPhone";
import { AppbarPhoneData } from "~/storybook/data/AppbarData";

const meta: Meta<typeof Component> = {
  component: Component,
  title: "Navigation/Appbar",
  parameters: {
    layout: "fullscreen",
  },
};

export default meta;
type Story = StoryObj<typeof meta>;

const defaultArgs = {
  ...AppbarPhoneData,
} satisfies Props;

export const Phone: Story = {
  args: defaultArgs,
  decorators: [FullSizeDecorator],
};
