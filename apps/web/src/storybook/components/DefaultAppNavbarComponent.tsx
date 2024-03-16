import type { ReactElement } from "react";
import { NavbarDesktopData, NavbarPhoneData } from "../data/NavbarData";
import { AppNavbar } from "~/components/navigation/app-navbar";

export function DefaultAppNavbarComponent(): ReactElement {
  return <AppNavbar navbarDesktopProps={NavbarDesktopData} navbarPhoneProps={NavbarPhoneData} />;
}
