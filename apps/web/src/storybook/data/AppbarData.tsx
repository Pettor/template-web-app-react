import type { AppbarDesktopProps } from "../../components/navigation/appbar-desktop";
import type { AppbarPhoneProps } from "../../components/navigation/appbar-phone";
import { AppSessionData } from "./AppSessionData";

const AppbarCommonData: AppbarPhoneProps & AppbarDesktopProps = {
  title: "Some Title",
  mode: "light",
  ...AppSessionData,
  onSwitch: () => console.log("onToggle"),
  onGithubClick: () => console.log("onGithubClick"),
  onLinkedInClick: () => console.log("onLinkedInClick"),
};

export const AppbarDesktopData: AppbarDesktopProps = AppbarCommonData;
export const AppbarPhoneData: AppbarPhoneProps = AppbarCommonData;
