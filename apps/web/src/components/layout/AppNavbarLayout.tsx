import type { ReactElement } from "react";
import type { NavbarLayoutProps } from "shared-ui";
import { NavbarLayout } from "shared-ui";
import type { AppNavbarProps } from "../navigation/app-navbar";
import { AppNavbar } from "../navigation/app-navbar";

export interface AppNavbarLayoutProps extends AppNavbarProps, Omit<NavbarLayoutProps, "navbarElement"> {}

export function AppNavbarLayout(props: AppNavbarLayoutProps): ReactElement {
  return <NavbarLayout navbarElement={<AppNavbar {...props} />} {...props} />;
}
