import SearchIcon from "@mui/icons-material/Search";
import Avatar from "@mui/material/Avatar";
import MenuItem from "@mui/material/MenuItem";
import MenuList from "@mui/material/MenuList";
import type { Meta, StoryObj } from "@storybook/react";
import Search from "../../library/search/Search";
import ThemeToggle from "../../library/toggle/theme-toggle/ThemeToggle";
import Component from "./AppHeaderResponsive";
import IconMenuButton from "~/components/library/icon-button/IconMenuButton";
import ResponsiveComponent from "~/components/library/responsive/ResponsiveComponent";

const meta = {
  component: Component,
  title: "Layout/Header",
} satisfies Meta<typeof Component>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Responsive = {
  args: {
    label: "This is a Header",
    headerComponents: [
      <ResponsiveComponent
        key="search"
        desktop={<Search maxWidth="200px" />}
        mobile={<IconMenuButton key="search" icon={<SearchIcon />} />}
      />,
      <ThemeToggle key="theme-toggle" defaultMode="light" onToggle={() => console.log("onToggle")} />,
      <IconMenuButton key="avatar" icon={<Avatar sx={{ width: 32, height: 32 }} />}>
        <MenuList>
          <MenuItem>Content</MenuItem>{" "}
        </MenuList>
      </IconMenuButton>,
    ],
  },
} satisfies Story;
