import type { ReactElement } from "react";
import AvatarIcon from "@mui/icons-material/AccountCircle";
import GithubIcon from "@mui/icons-material/GitHub";
import { IconButton } from "@mui/material";
import ProfileCardExt from "~/app/ext/profile-card/ProfileCardExt";
import ThemeToggleExt from "~/app/ext/theme-toggle/ThemeToggleExt";
import IconMenuButton from "~/components/library/icon-menu-button/IconMenuButton";
import AppHeaderGroup from "~/components/navigation/app-header-group/AppHeaderGroup";
import HomeView from "~/components/views/home/HomeView";

export default function HomePage(): ReactElement {
  function handleGithubClick(): void {
    window.open("https://github.com/Pettor/template-web-app-react", "_blank", "noreferrer");
  }

  return (
    <HomeView
      headerComponents={
        <>
          <AppHeaderGroup dividerStyle="right">
            <ThemeToggleExt />
          </AppHeaderGroup>
          <AppHeaderGroup dividerStyle="none">
            <IconMenuButton icon={<AvatarIcon />}>
              <ProfileCardExt />
            </IconMenuButton>
            <IconButton onClick={handleGithubClick}>
              <GithubIcon />
            </IconButton>
          </AppHeaderGroup>
        </>
      }
    />
  );
}
