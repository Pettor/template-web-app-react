import { useMemo, type ReactElement } from "react";
import { UseMediaQuery } from "react-utils";
import type { NavbarProps } from "shared-ui";
import { AppNavbarDesktop, type AppNavbarDesktopProps } from "../app-navbar-desktop";
import { AppNavbarPhone, type AppNavbarPhoneProps } from "../app-navbar-phone";

export interface AppNavbarProps extends Pick<NavbarProps, "title"> {
  appNavbarDesktopProps: Omit<AppNavbarDesktopProps, "title">;
  appNavbarPhoneProps: Omit<AppNavbarPhoneProps, "title">;
}

export function AppNavbar({
  appNavbarDesktopProps,
  appNavbarPhoneProps,
  ...navbarProps
}: AppNavbarProps): ReactElement {
  const { matches } = UseMediaQuery("md");

  const navbarElement: ReactElement = useMemo(() => {
    if (matches) {
      return <AppNavbarDesktop {...navbarProps} {...appNavbarDesktopProps} />;
    }

    return <AppNavbarPhone {...navbarProps} {...appNavbarPhoneProps} />;
  }, [appNavbarDesktopProps, appNavbarPhoneProps, matches, navbarProps]);

  return <>{navbarElement}</>;
}
