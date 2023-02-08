import React from "react";
import Avatar from "@mui/material/Avatar";
import { ComponentStoryObj } from "@storybook/react";
import ProfileCardResponsive from "../../layout/profile/ProfileCardResponsive";
import ThemeToggle from "../../library/toggle/theme-toggle/ThemeToggle";
import Component from "./HomeView";

type Story = ComponentStoryObj<typeof Component>;

export default {
  component: Component,
  title: "Views/Home",
};

export const Home: Story = {
  args: {
    headerComponents: [
      {
        key: "theme-toggle",
        component: <ThemeToggle defaultMode="light" onToggle={() => console.log("onToggle")} />,
      },
      {
        key: "avatar",
        component: {
          icon: <Avatar sx={{ width: 32, height: 32 }} />,
          MenuNode: <ProfileCardResponsive />,
        },
      },
    ],
  },
};
