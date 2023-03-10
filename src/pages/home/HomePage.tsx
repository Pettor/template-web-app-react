import { ReactElement } from "react";
import Avatar from "@mui/material/Avatar";
import ProfileCardExt from "../../app/ext/profile/ProfileCardExt";
import ThemeToggleExt from "../../app/ext/theme-toggle/ThemeToggleExt";
import HomeView from "../../components/views/home/HomeView";

const headerComponents = [
  {
    key: "header__theme-toggle",
    component: <ThemeToggleExt />,
  },
  {
    key: "header__profile-card",
    component: {
      icon: <Avatar sx={{ width: 24, height: 24 }} />,
      MenuNode: <ProfileCardExt />,
    },
  },
];

export default function HomePage(): ReactElement {
  return <HomeView headerComponents={headerComponents} />;
}
