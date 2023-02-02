import React from "react";
import { ComponentStoryObj } from "@storybook/react";
import { ContentComponent } from "../../../stories/data/ContentData";
import AppMenu from "../menu/AppMenu";
import ProfileCardResponsive from "../profile/ProfileCardResponsive";
import Component from "./HeaderLayout";

type Story = ComponentStoryObj<typeof Component>;

export default {
  component: Component,
  title: "Layout/Templates",
};

export const HeaderLayout: Story = {
  args: {
    headerOptions: {
      label: "This is a Header",
    },
    children: <ContentComponent />,
    headerComponents: {
      Menu: AppMenu,
      ProfileNode: <ProfileCardResponsive />,
    },
  },
};
