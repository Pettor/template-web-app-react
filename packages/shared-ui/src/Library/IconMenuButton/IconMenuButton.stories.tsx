import type { ReactElement } from "react";
import SearchIcon from "@mui/icons-material/Search";
import MenuItem from "@mui/material/MenuItem";
import MenuList from "@mui/material/MenuList";
import { expect } from "@storybook/jest";
import type { Meta, StoryObj } from "@storybook/react";
import { userEvent, within, screen } from "@storybook/testing-library";
import { sleep } from "react-utils";
import { CommonDecorator } from "storybook-base";
import type { IconMenuButtonProps as Props } from "./IconMenuButton";
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

function render(args: Props): ReactElement {
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

export const IconWithSimpleMenu: Story = {
  args: {
    icon: <SearchIcon />,
  },
  render: (args) => (
    <Component {...args}>
      <div data-testid="item">This is an item</div>
    </Component>
  ),
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement);

    userEvent.click(canvas.getByTestId("icon-menu-button__icon-button"));

    await sleep(500);

    expect(screen.getByText("This is an item")).toBeInTheDocument();
  },
} satisfies Story;

export const IconWithMenuItems = {
  args: {
    icon: <SearchIcon />,
  },
  render,
} satisfies Story;
