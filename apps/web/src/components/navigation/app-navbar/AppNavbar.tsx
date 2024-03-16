import { useMemo, type ReactElement } from "react";
import { UseMediaQuery } from "react-utils";
import { AppNavbarDesktop, type AppNavbarDesktopProps } from "../app-navbar-desktop";
import { AppNavbarPhone, type AppNavbarPhoneProps } from "../app-navbar-phone";

export interface AppNavbarProps {
  navbarDesktopProps: AppNavbarDesktopProps;
  navbarPhoneProps: AppNavbarPhoneProps;
}

export function AppNavbar({ navbarDesktopProps, navbarPhoneProps }: AppNavbarProps): ReactElement {
  const { matches } = UseMediaQuery("md");

  const navbarElement: ReactElement = useMemo(() => {
    if (matches) {
      return <AppNavbarDesktop {...navbarDesktopProps} />;
    }

    return <AppNavbarPhone {...navbarPhoneProps} />;
  }, [matches, navbarDesktopProps, navbarPhoneProps]);

  return <>{navbarElement}</>;
}
