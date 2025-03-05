import { type ReactElement } from "react";
import { UseMediaQuery } from "react-package";
import type { NavbarProps } from "ui-package";
import type { Subtract } from "utility-types";
import { AppNavbarDesktop, type AppbarDesktopProps } from "../appbar-desktop";
import { AppbarPhone, type AppbarPhoneProps } from "../appbar-phone";
import type { IAppSocialLinks } from "~/classes/app-social-links/IAppSocialLinks";

export interface AppbarProps extends Pick<NavbarProps, "title">, IAppSocialLinks {
  appbarDesktopProps: Subtract<Omit<AppbarDesktopProps, "title">, IAppSocialLinks>;
  appbarPhoneProps: Subtract<Omit<AppbarPhoneProps, "title">, IAppSocialLinks>;
}

export function Appbar({ appbarDesktopProps, appbarPhoneProps, ...navbarProps }: AppbarProps): ReactElement {
  const { matches } = UseMediaQuery("md");

  if (matches) {
    return <AppNavbarDesktop {...navbarProps} {...appbarDesktopProps} />;
  }

  return <AppbarPhone {...navbarProps} {...appbarPhoneProps} />;
}
