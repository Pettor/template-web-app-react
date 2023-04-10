import SearchIcon from "@mui/icons-material/Search";
import { MenuList } from "@mui/material";
import Avatar from "@mui/material/Avatar";
import MenuItem from "@mui/material/MenuItem";
import type { Meta, StoryObj } from "@storybook/react";
import Search from "../../library/search/Search";
import ThemeToggle from "../../library/toggle/theme-toggle/ThemeToggle";
import AppHeaderGroup from "../app-header-group/AppHeaderGroup";
import Component from "./AppHeader";
import IconMenuButton from "~/components/library/icon-button/IconMenuButton";
import ResponsiveComponent from "~/components/library/responsive/ResponsiveComponent";

const meta = {
  component: Component,
  title: "Layout/Header",
} satisfies Meta<typeof Component>;

export default meta;
type Story = StoryObj<typeof meta>;

export const AppHeader = {
  args: {
    label: "This is a Header",
  },
} satisfies Story;

export const SubHeader = {
  args: {
    subheader: true,
    label: "This is a SubHeader",
  },
} satisfies Story;

export const SubHeaderWithSearch = {
  args: {
    subheader: true,
    headerComponents: [<Search key="search" width="100%" />],
    headerComponentOptions: {
      flexItem: true,
      fill: true,
    },
  },
} satisfies Story;

export const HeaderComponents = {
  args: {
    isMobile: false,
    subheader: false,
    headerComponents: [
      <ResponsiveComponent
        key="search"
        desktop={<Search maxWidth="200px" />}
        mobile={<IconMenuButton key="search" icon={<SearchIcon />} />}
      />,
      <AppHeaderGroup key="group-1">
        <ThemeToggle key="theme-toggle" defaultMode="light" onToggle={() => console.log("onToggle")} />
      </AppHeaderGroup>,
      <IconMenuButton key="avatar" icon={<Avatar sx={{ width: 32, height: 32 }} />}>
        <MenuList>
          <MenuItem>Content</MenuItem>{" "}
        </MenuList>
      </IconMenuButton>,
    ],
  },
} satisfies Story;
