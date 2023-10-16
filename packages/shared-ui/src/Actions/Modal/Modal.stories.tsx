import type { Meta, StoryObj } from "@storybook/react";
import type { ModalProps as Props } from "./Modal";
import { Modal as Component } from "./Modal";

const meta = {
  component: Component,
  title: "Actions/Modal",
} satisfies Meta<typeof Component>;

export default meta;
type Story = StoryObj<typeof meta>;

const defaultArgs = {
  open: true,
  children: <div>This is content test</div>,
} satisfies Props;

export const Standard = {
  args: defaultArgs,
} satisfies Story;
