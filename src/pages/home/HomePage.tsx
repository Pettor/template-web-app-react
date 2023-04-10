import type { ReactElement } from "react";
import { useMemo } from "react";
import AvatarIcon from "@mui/icons-material/AccountCircle";
import GithubIcon from "@mui/icons-material/GitHub";
import ProfileCardExt from "~/app/ext/profile/ProfileCardExt";
import ThemeToggleExt from "~/app/ext/theme-toggle/ThemeToggleExt";
import AppHeaderDivider from "~/components/layout/app-header-divider/AppHeaderDivider";
import HomeView from "~/components/views/home/HomeView";

export default function HomePage(): ReactElement {
  function handleGithubClick(): void {
    window.open("https://github.com/Pettor/template-web-app-react", "_blank", "noreferrer");
  }

  const headerComponents = useMemo(() => {
    return [
      {
        key: "header__theme-toggle",
        component: <ThemeToggleExt />,
      },
      {
        key: "header__divider",
        component: <AppHeaderDivider />,
      },
      {
        key: "header__profile-card",
        component: {
          icon: <AvatarIcon />,
          MenuNode: <ProfileCardExt />,
        },
      },
      {
        key: "header__github",
        component: {
          icon: <GithubIcon />,
          onIconClick: handleGithubClick,
        },
      },
    ];
  }, []);

  return <HomeView headerComponents={headerComponents} />;
}
