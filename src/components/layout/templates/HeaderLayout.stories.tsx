import Avatar from "@mui/material/Avatar";
import { Meta, StoryObj } from "@storybook/react";
import { ContentComponent } from "../../../stories/data/ContentData";
import ThemeToggle from "../../library/toggle/theme-toggle/ThemeToggle";
import ProfileCardResponsive from "../profile/ProfileCardResponsive";
import Component from "./HeaderLayout";

const meta = {
  component: Component,
  title: "Layout/Templates",
} satisfies Meta<typeof Component>;

export default meta;
type Story = StoryObj<typeof meta>;

export const HeaderLayout = {
  args: {
    headerOptions: {
      label: "This is a Header",
    },
    children: <ContentComponent />,
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
