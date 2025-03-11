import type { Meta, StoryObj } from "@storybook/react";
import type { InputFieldProps as Props } from "./InputField";
import { InputField as Component } from "./InputField";

const meta: Meta<typeof Component> = {
  component: Component,
  title: "Shared/Input/Field",
};

export default meta;
type Story = StoryObj<typeof meta>;

const defaultArgs = {
  value: "This is a test",
} satisfies Props;

export const Standard: Story = {
  args: defaultArgs,
};
