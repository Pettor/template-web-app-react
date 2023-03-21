import React from "react";
import SearchIcon from "@mui/icons-material/Search";
import Avatar from "@mui/material/Avatar";
import MenuItem from "@mui/material/MenuItem";
import MenuList from "@mui/material/MenuList";
import type { ComponentStoryObj } from "@storybook/react";
import Search from "../../library/search/Search";
import ThemeToggle from "../../library/toggle/theme-toggle/ThemeToggle";
import Component from "./AppHeaderResponsive";

type Story = ComponentStoryObj<typeof Component>;

export default {
  component: Component,
  title: "Layout/Header",
};

export const Responsive: Story = {
  args: {
    label: "This is a Header",
    headerComponents: [
      {
        key: "search",
        component: {
          mobile: {
            icon: <SearchIcon />,
            onIconClick: () => console.log("onSearch"),
          },
          desktop: <Search maxWidth="200px" />,
        },
      },
      {
        key: "theme-toggle",
        component: {
          desktop: <ThemeToggle defaultMode="light" onToggle={() => console.log("onToggle")} />,
        },
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
};
