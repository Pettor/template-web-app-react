import { ReactElement } from "react";
import Avatar from "@mui/material/Avatar";
import ProfileCardExt from "../../components/layout/profile/ProfileCardExt";
import ThemeToggleExt from "../../components/library/toggle/theme-toggle/ThemeToggleExt";
import HomeView from "../../components/views/home/HomeView";

export default function HomePage(): ReactElement {
  return (
    <HomeView
      headerComponents={[
        {
          key: "theme-toggle",
          component: <ThemeToggleExt />,
        },
        {
          key: "avatar",
          component: {
            icon: <Avatar sx={{ width: 32, height: 32 }} />,
            MenuNode: <ProfileCardExt />,
          },
        },
      ]}
    />
  );
}
