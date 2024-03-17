import type { ReactElement } from "react";
import { AppNavbarDesktopData, AppNavbarPhoneData } from "../data/AppNavbarData";
import { AppNavbar } from "~/components/navigation/app-navbar";

export function StorybookAppNavbarComponent(): ReactElement {
  return (
    <AppNavbar
      title="Some title"
      appNavbarDesktopProps={AppNavbarDesktopData}
      appNavbarPhoneProps={AppNavbarPhoneData}
    />
  );
}
