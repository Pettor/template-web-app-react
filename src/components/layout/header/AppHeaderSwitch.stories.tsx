import React from "react";
import SearchIcon from "@mui/icons-material/Search";
import { ComponentStoryObj } from "@storybook/react";
import Search from "../../library/search/Search";
import Component from "./AppHeaderSwitch";

type Story = ComponentStoryObj<typeof Component>;

export default {
  component: Component,
  title: "Layout/Header",
};

export const Switch: Story = {
  args: {
    toggle: false,
    firstProps: {
      label: "This is a Header",
      customComponents: [
        {
          name: "Search",
          icon: <SearchIcon />,
          responsive: true,
          onClick: () => console.log("Search"),
        },
      ],
    },
    secondProps: {
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
  },
};
