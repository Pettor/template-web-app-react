import React from "react";
import SearchIcon from "@mui/icons-material/Search";
import { MenuList } from "@mui/material";
import Avatar from "@mui/material/Avatar";
import { ComponentStoryObj } from "@storybook/react";
import Search from "../../library/search/Search";
import ThemeToggle from "../../library/toggle/theme-toggle/ThemeToggle";
import AppMenu from "../menu/AppMenu";
import Component from "./AppHeader";

type Story = ComponentStoryObj<typeof Component>;

export default {
  component: Component,
  title: "Layout/Header",
};

export const AppHeader: Story = {
  args: {
    label: "This is a Header",
  },
};

export const CustomComponents: Story = {
  args: {
    isMobile: false,
    subheader: false,
    headerComponents: [
      {
        name: "search",
        icon: <SearchIcon />,
        Node: <Search maxWidth="200px" />,
        responsive: true,
        onIconClick: () => console.log("Search"),
      },
      {
        name: "theme-toggle",
        icon: null,
        Node: <ThemeToggle defaultMode="light" onToggle={() => console.log("onToggle")} />,
        responsive: false,
        onIconClick: () => console.log("Search"),
      },
      {
        name: "avatar",
        icon: <Avatar sx={{ width: 32, height: 32 }} />,
        MenuNode: <MenuList>Hej</MenuList>,
        responsive: false,
      },
    ],
  },
};

export const SubHeader: Story = {
  args: {
    subheader: true,
    label: "This is a SubHeader",
  },
};

export const SubHeaderWithSearch: Story = {
  args: {
    subheader: true,
    headerComponents: [
      {
        name: "Search",
        icon: <SearchIcon />,
        Node: <Search sx={{ display: "flex", flex: 1 }} />,
        responsive: false,
        onIconClick: () => console.log("Search"),
      },
    ],
    headerComponentOptions: {
      flexItem: true,
      fill: true,
    },
  },
};
