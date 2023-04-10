import SearchIcon from "@mui/icons-material/Search";
import type { Meta, StoryObj } from "@storybook/react";
import Component from "./IconMenuButton";
import CommonDecorator from "~/stories/decorators/CommonDecorator";

const meta = {
  title: "Library/IconButton",
  decorators: [CommonDecorator],
  tags: ["autodocs"],
} satisfies Meta<typeof Component>;

export default meta;
type Story = StoryObj<typeof Component>;

export const Contained = {
  render: (args) => (
    <Component {...args}>
      <div>This is an item</div>
    </Component>
  ),
  args: {
    icon: <SearchIcon />,
  },
} satisfies Story;
