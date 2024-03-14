import type { Meta, StoryObj } from "@storybook/react";
import { useSetAtom } from "jotai";
import { CommonDecorator } from "storybook-base";
import { toastAddAtom } from "./Atoms/ToastAtoms";
import { ToastNotifier as Component } from "./ToastNotifier";

const meta = {
  component: Component,
  decorators: [CommonDecorator],
  title: "Actions/Toast/Notifier",
  tags: ["autodocs"],
} satisfies Meta<typeof Component>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Standard = {
  render: (args) => {
    const addToast = useSetAtom(toastAddAtom);

    return (
      <div>
        <button className="btn btn-primary" onClick={() => addToast("This is a test message")}>
          Click me!
        </button>
        <Component {...args} />
      </div>
    );
  },
} satisfies Story;
