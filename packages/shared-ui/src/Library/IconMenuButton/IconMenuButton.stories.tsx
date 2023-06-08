import type { ComponentProps, ReactElement } from "react";
import SearchIcon from "@mui/icons-material/Search";
import MenuItem from "@mui/material/MenuItem";
import MenuList from "@mui/material/MenuList";
import type { Meta, StoryObj } from "@storybook/react";
import { CommonDecorator } from "storybook-base";
import { IconMenuButton as Component } from "./IconMenuButton";

const meta = {
  title: "Library/Button",
  decorators: [CommonDecorator],
  tags: ["autodocs"],
  argTypes: {
    icon: {
      table: {
        disable: true,
      },
    },
  },
} satisfies Meta<typeof Component>;

export default meta;
type Story = StoryObj<typeof Component>;

function render(args: ComponentProps<typeof Component>): ReactElement {
  return (
    <Component {...args}>
      <MenuList>
        <MenuItem>First</MenuItem>
        <MenuItem>Second</MenuItem>
        <MenuItem>Third</MenuItem>
      </MenuList>
    </Component>
  );
}

export const IconWithSimpleMenu = {
  args: {
    icon: <SearchIcon />,
  },
  render: (args) => (
    <Component {...args}>
      <div>This is an item</div>
    </Component>
  ),
} satisfies Story;

export const IconWithMenuItems = {
  args: {
    icon: <SearchIcon />,
  },
  render,
} satisfies Story;
