import { useAppSessionContent } from "~/classes/app-session/UseAppSessionContent";
import { useAppSocialLinks } from "~/classes/app-social-links/UseAppSocialLinks";
import { useThemeSwitcher } from "~/components/actions/theme-switch";
import { ProfileCardModule } from "~/components/modules/profile-card-module/ProfileCardModule";
import type { HomeViewProps } from "~/components/views/home/HomeView";

export function useHomePage(githubLink: string, linkedInLink: string): HomeViewProps {
  const appSessionProps = useAppSessionContent();
  const themeSwitchProps = useThemeSwitcher();
  const socialLinkProps = useAppSocialLinks(githubLink, linkedInLink);

  return {
    appSocialLinkProps: socialLinkProps,
    appNavbarProps: {
      appbarDesktopProps: {
        ...socialLinkProps,
        themeSwitchProps: themeSwitchProps,
        profileCardElement: <ProfileCardModule />,
      },
      appbarPhoneProps: {
        appDrawerProps: appSessionProps,
      },
    },
  };
}
