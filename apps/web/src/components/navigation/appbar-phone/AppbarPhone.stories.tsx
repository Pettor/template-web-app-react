import type { Meta, StoryObj } from "@storybook/react";
import { FullSizeDecorator } from "storybook-base";
import { AppbarPhone as Component } from "./AppbarPhone";
import type { AppbarPhoneProps as Props } from "./AppbarPhone";
import { AppbarPhoneData } from "~/storybook/data/AppbarData";

const meta = {
  component: Component,
  title: "Navigation/Appbar",
  parameters: {
    layout: "fullscreen",
  },
} satisfies Meta<typeof Component>;

export default meta;
type Story = StoryObj<typeof meta>;

const defaultArgs = {
  ...AppbarPhoneData,
} satisfies Props;

export const Phone = {
  args: defaultArgs,
  decorators: [FullSizeDecorator],
} satisfies Story;
