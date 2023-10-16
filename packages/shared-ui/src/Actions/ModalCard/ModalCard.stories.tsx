import type { Meta, StoryObj } from "@storybook/react";
import type { ModalCardProps as Props } from "./ModalCard";
import { ModalCard as Component } from "./ModalCard";

const meta = {
  component: Component,
  title: "Actions/Modal",
} satisfies Meta<typeof Component>;

export default meta;
type Story = StoryObj<typeof meta>;

const defaultArgs = {
  open: true,
  title: "Card Modal",
  children: <div>This is content test</div>,
  onClose: () => console.log("Closed"),
} satisfies Props;

export const Card = {
  args: defaultArgs,
} satisfies Story;
