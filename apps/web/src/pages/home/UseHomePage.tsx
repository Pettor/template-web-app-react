import { ProfileCardModule } from "~/components/modules/profile-card/ProfileCardModule";
import type { HomeViewProps } from "~/components/views/home/HomeView";

export function useHomePage(githubLink: string, linkedInLink: string): HomeViewProps {
  return {
    onGithubClick: () => window.open(githubLink, "_blank", "noreferrer"),
    onLinkedInClick: () => window.open(linkedInLink, "_blank", "noreferrer"),
    profileCardElement: <ProfileCardModule />,
  };
}
