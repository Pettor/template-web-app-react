import type { ReactElement } from "react";
import AvatarIcon from "@mui/icons-material/AccountCircle";
import GithubIcon from "@mui/icons-material/GitHub";
import { IconButton } from "@mui/material";
import ProfileCardExt from "~/app/ext/profile/ProfileCardExt";
import ThemeToggleExt from "~/app/ext/theme-toggle/ThemeToggleExt";
import AppHeaderGroup from "~/components/layout/app-header-group/AppHeaderGroup";
import IconMenuButton from "~/components/library/icon-button/IconMenuButton";
import HomeView from "~/components/views/home/HomeView";

export default function HomePage(): ReactElement {
  function handleGithubClick(): void {
    window.open("https://github.com/Pettor/template-web-app-react", "_blank", "noreferrer");
  }

  return (
    <HomeView
      headerComponents={
        <>
          <AppHeaderGroup>
            <ThemeToggleExt />
          </AppHeaderGroup>
          <IconMenuButton icon={<AvatarIcon />}>
            <ProfileCardExt />
          </IconMenuButton>
          <IconButton onClick={handleGithubClick}>
            <GithubIcon />
          </IconButton>
        </>
      }
    />
  );
}
