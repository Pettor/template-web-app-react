import type { ReactElement } from "react";
import AvatarIcon from "@mui/icons-material/AccountCircle";
import GithubIcon from "@mui/icons-material/GitHub";
import { IconButton } from "@mui/material";
import { AppHeaderGroup, IconMenuButton } from "shared-ui";
import { useDocumentTitle } from "usehooks-ts";
import { HomeView } from "~/components/views/home/HomeView";
import { ProfileCardExt } from "~/core/ext/profile-card/ProfileCardExt";
import { ThemeToggleExt } from "~/core/ext/theme-toggle/ThemeToggleExt";

export function HomePage(): ReactElement {
  useDocumentTitle("Home");

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
            <IconMenuButton icon={<AvatarIcon />} testId="home-page__menu-button">
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
