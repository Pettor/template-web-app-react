import Avatar from "@mui/material/Avatar";
import type { Meta, StoryObj } from "@storybook/react";
import ProfileCardResponsive from "../../layout/profile/ProfileCardResponsive";
import ThemeToggle from "../../library/toggle/theme-toggle/ThemeToggle";
import Component from "./HomeView";

const meta = {
  component: Component,
  title: "Views/Home",
} satisfies Meta<typeof Component>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Home = {
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
} satisfies Story;
