import type { ReactElement } from "react";
import type { NavbarLayoutProps } from "shared-ui";
import { NavbarLayout } from "shared-ui";
import type { AppbarProps } from "../navigation/appbar";
import { Appbar } from "../navigation/appbar";

export interface AppbarLayoutProps extends AppbarProps, Omit<NavbarLayoutProps, "navbarElement"> {}

export function AppbarLayout(props: AppbarLayoutProps): ReactElement {
  return <NavbarLayout navbarElement={<Appbar {...props} />} {...props} />;
}
