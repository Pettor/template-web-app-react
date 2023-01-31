import React from "react";
import { ContentComponent } from "../../../stories/data/ContentData";
import Component from "./ContainerLayout";

export default {
  component: Component,
  title: "Layout/Templates",
};

export const ContainerLayout = {
  args: {
    children: <ContentComponent />,
  },
};
