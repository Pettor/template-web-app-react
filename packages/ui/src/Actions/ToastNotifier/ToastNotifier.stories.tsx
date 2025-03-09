import type { Meta, StoryObj } from "@storybook/react";
import { useSetAtom } from "jotai";
import { CommonDecorator } from "storybook-package";
import { toastAddAtom } from "./Atoms/ToastAtoms";
import { ToastNotifier as Component } from "./ToastNotifier";

const meta: Meta<typeof Component> = {
  component: Component,
  decorators: [CommonDecorator],
  title: "Shared/Actions/Toast/Notifier",
  tags: ["autodocs"],
};

export default meta;
type Story = StoryObj<typeof meta>;

export const Standard: Story = {
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
};
