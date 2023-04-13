import type { ComponentProps, ReactElement } from "react";
import SearchIcon from "@mui/icons-material/Search";
import MenuItem from "@mui/material/MenuItem";
import MenuList from "@mui/material/MenuList";
import type { Meta, StoryObj } from "@storybook/react";
import Component from "./IconMenuButton";
import CommonDecorator from "~/stories/decorators/CommonDecorator";

const meta = {
  title: "Library/Button/IconMenu",
  decorators: [CommonDecorator],
  tags: ["autodocs"],
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

export const SimpleContent = {
  args: {
    icon: <SearchIcon />,
  },
  render: (args) => (
    <Component {...args}>
      <div>This is an item</div>
    </Component>
  ),
} satisfies Story;

export const MenuContent = {
  args: {
    icon: <SearchIcon />,
  },
  render,
} satisfies Story;
