import type { ReactElement } from "react";
import type { NavbarLayoutProps } from "ui-package";
import { NavbarLayout } from "ui-package";
import type { AppbarProps } from "../navigation/appbar";
import { Appbar } from "../navigation/appbar";

export interface AppbarLayoutProps extends AppbarProps, Omit<NavbarLayoutProps, "navbarElement"> {}

export function AppbarLayout(props: AppbarLayoutProps): ReactElement {
  return <NavbarLayout navbarElement={<Appbar {...props} />} {...props} />;
}
