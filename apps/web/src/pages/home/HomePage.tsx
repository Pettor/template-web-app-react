import type { ReactElement } from "react";
import AvatarIcon from "@mui/icons-material/AccountCircle";
import GithubIcon from "@mui/icons-material/GitHub";
import { IconButton } from "@mui/material";
import { AppHeaderGroup, IconMenuButton } from "shared-ui";
import { useDocumentTitle } from "usehooks-ts";
import { useHomePage } from "./UseHomePage";
import { ProfileCardModule } from "~/components/modules/profile-card/ProfileCardModule";
import { ThemeToggleModule } from "~/components/modules/theme-toggle/ThemeToggleModule";
import { HomeView } from "~/components/views/home/HomeView";

export interface HomePageProps {
  repoUrl: string;
}

export function HomePage({ repoUrl }: HomePageProps): ReactElement {
  useDocumentTitle("Home");
  const { handleGithubClick } = useHomePage(repoUrl);

  return (
    <HomeView
      headerComponents={
        <>
          <AppHeaderGroup dividerStyle="right">
            <ThemeToggleModule />
          </AppHeaderGroup>
          <AppHeaderGroup dividerStyle="none">
            <IconMenuButton icon={<AvatarIcon />} testId="home-page__menu-button">
              <ProfileCardModule />
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
