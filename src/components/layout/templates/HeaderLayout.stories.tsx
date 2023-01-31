import React from "react";
import { MenuItem } from "@mui/material";
import { ContentComponent } from "../../../stories/data/ContentData";
import AppMenu from "../menu/AppMenu";
import Component from "./HeaderLayout";

export default {
  component: Component,
  title: "Layout/Templates",
};

export const HeaderLayout = {
  args: {
    label: "This is a Header",
    children: <ContentComponent />,
    headerComponents: {
      Menu: AppMenu,
      ProfileNode: <MenuItem>Content</MenuItem>,
    },
  },
};
