import type { Meta, StoryObj } from "@storybook/react";
import { Drawer as Component } from "./Drawer";
import type { DrawerProps as Props } from "./Drawer";

const meta = {
  component: Component,
  title: "Shared/Navigation/Drawer",
  parameters: {
    layout: "fullscreen",
  },
} satisfies Meta<typeof Component>;

export default meta;
type Story = StoryObj<typeof meta>;

const defaultArgs = {
  open: true,
  onClose: () => console.log("onClose"),
  children: (
    <ul className="menu h-full w-full">
      <li>
        <a>Sidebar Item 1</a>
      </li>
      <li>
        <a>Sidebar Item 2</a>
      </li>
    </ul>
  ),
} satisfies Props;

export const Standard = {
  args: defaultArgs,
} satisfies Story;
