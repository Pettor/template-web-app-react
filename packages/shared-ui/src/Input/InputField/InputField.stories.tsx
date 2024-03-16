import type { Meta, StoryObj } from "@storybook/react";
import type { InputFieldProps as Props } from "./InputField";
import { InputField as Component } from "./InputField";

const meta = {
  component: Component,
  title: "Shared/Input/Field",
} satisfies Meta<typeof Component>;

export default meta;
type Story = StoryObj<typeof meta>;

const defaultArgs = {
  value: "This is a test",
} satisfies Props;

export const Standard = {
  args: defaultArgs,
} satisfies Story;
