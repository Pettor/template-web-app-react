import SearchIcon from "@mui/icons-material/Search";
import { MenuList } from "@mui/material";
import Avatar from "@mui/material/Avatar";
import MenuItem from "@mui/material/MenuItem";
import { Meta, StoryObj } from "@storybook/react";
import Search from "../../library/search/Search";
import ThemeToggle from "../../library/toggle/theme-toggle/ThemeToggle";
import Component from "./AppHeader";
import AppHeaderDivider from "./AppHeaderDivider";

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
    headerComponents: [
      {
        key: "Search",
        component: <Search width="100%" />,
      },
    ],
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
      {
        key: "search",
        component: {
          mobile: {
            icon: <SearchIcon />,
            onIconClick: () => console.log("Search"),
          },
          desktop: <Search maxWidth="200px" />,
        },
      },
      {
        key: "divider 1",
        component: <AppHeaderDivider />,
      },
      {
        key: "theme-toggle",
        component: <ThemeToggle defaultMode="light" onToggle={() => console.log("onToggle")} />,
      },
      {
        key: "divider 2",
        component: <AppHeaderDivider />,
      },
      {
        key: "avatar",
        component: {
          icon: <Avatar sx={{ width: 32, height: 32 }} />,
          MenuNode: (
            <MenuList>
              <MenuItem>Content</MenuItem>
            </MenuList>
          ),
        },
      },
    ],
  },
} satisfies Story;
