import type { Meta, StoryObj } from "@storybook/react";
import type { ButtonLoadingProps as Props } from "./ButtonLoading";
import { ButtonLoading as Component } from "./ButtonLoading";

const meta = {
  component: Component,
  title: "Shared/Actions/Button",
} satisfies Meta<typeof Component>;

export default meta;
type Story = StoryObj<typeof meta>;

const defaultArgs = {
  className: "btn btn-primary",
  loading: false,
  children: <div>This is content test</div>,
} satisfies Props;

export const Loading = {
  args: defaultArgs,
} satisfies Story;
