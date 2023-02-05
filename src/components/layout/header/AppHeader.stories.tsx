import React from "react";
import SearchIcon from "@mui/icons-material/Search";
import { ComponentStoryObj } from "@storybook/react";
import Search from "../../library/search/Search";
import ThemeToggle from "../../library/toggle/theme-toggle/ThemeToggle";
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
    customComponents: [
      {
        name: "search",
        icon: <SearchIcon />,
        Node: <Search maxWidth="200px" />,
        responsive: true,
        onClick: () => console.log("Search"),
      },
      {
        name: "theme-toggle",
        icon: null,
        Node: <ThemeToggle defaultMode="light" onToggle={() => console.log("onToggle")} />,
        responsive: false,
        onClick: () => console.log("Search"),
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
    customComponents: [
      {
        name: "Search",
        icon: <SearchIcon />,
        Node: <Search sx={{ display: "flex", flex: 1 }} />,
        responsive: false,
        onClick: () => console.log("Search"),
      },
    ],
    customComponentOptions: {
      flexItem: true,
      fill: true,
    },
  },
};
