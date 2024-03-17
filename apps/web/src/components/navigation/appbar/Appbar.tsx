import { useMemo, type ReactElement } from "react";
import { UseMediaQuery } from "react-utils";
import type { NavbarProps } from "shared-ui";
import { AppNavbarDesktop, type AppbarDesktopProps } from "../appbar-desktop";
import { AppbarPhone, type AppbarPhoneProps } from "../appbar-phone";

export interface AppbarProps extends Pick<NavbarProps, "title"> {
  appbarDesktopProps: Omit<AppbarDesktopProps, "title">;
  appbarPhoneProps: Omit<AppbarPhoneProps, "title">;
}

export function Appbar({ appbarDesktopProps, appbarPhoneProps, ...navbarProps }: AppbarProps): ReactElement {
  const { matches } = UseMediaQuery("md");

  const navbarElement: ReactElement = useMemo(() => {
    if (matches) {
      return <AppNavbarDesktop {...navbarProps} {...appbarDesktopProps} />;
    }

    return <AppbarPhone {...navbarProps} {...appbarPhoneProps} />;
  }, [appbarDesktopProps, appbarPhoneProps, matches, navbarProps]);

  return <>{navbarElement}</>;
}
