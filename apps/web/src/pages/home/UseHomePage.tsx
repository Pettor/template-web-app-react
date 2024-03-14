import { AppHeaderItems, useThemeSwitcher } from "shared-ui";
import { ProfileCardModule } from "~/components/modules/profile-card/ProfileCardModule";
import type { HomeViewProps } from "~/components/views/home/HomeView";

export function useHomePage(githubLink: string, linkedInLink: string): HomeViewProps {
  const themeSwitchProps = useThemeSwitcher();

  function handleOnGithubClick(): void {
    window.open(githubLink, "_blank", "noreferrer");
  }

  function handleOnLinkedInClick(): void {
    window.open(linkedInLink, "_blank", "noreferrer");
  }

  return {
    onGithubClick: handleOnGithubClick,
    onLinkedInClick: handleOnLinkedInClick,
    components: (
      <AppHeaderItems
        themeSwitchProps={themeSwitchProps}
        profileCardElement={<ProfileCardModule />}
        onGithubClick={handleOnGithubClick}
        onLinkedInClick={handleOnLinkedInClick}
      />
    ),
  };
}
