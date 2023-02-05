import React from "react";
import SearchIcon from "@mui/icons-material/Search";
import { ComponentStoryObj } from "@storybook/react";
import Search from "../../library/search/Search";
import Component from "./AppHeaderResponsive";

type Story = ComponentStoryObj<typeof Component>;

export default {
  component: Component,
  title: "Layout/Header",
};

export const Responsive: Story = {
  args: {
    label: "This is a Header",
    customComponents: [
      {
        name: "Search",
        icon: <SearchIcon />,
        Node: <Search />,
        responsive: true,
        onClick: () => console.log("Search"),
      },
    ],
  },
};
