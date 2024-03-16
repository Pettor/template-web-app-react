import { ProfileCard } from "../../components/actions/profile-card";
import type { AppNavbarDesktopProps } from "../../components/navigation/app-navbar-desktop";
import type { AppNavbarPhoneProps } from "../../components/navigation/app-navbar-phone";
import { AppSessionData } from "./AppSessionData";

export const NavbarDesktopData: AppNavbarDesktopProps = {
  title: "Some Title",
  themeSwitchProps: {
    mode: "light",
    onSwitch: () => console.log("onToggle"),
  },
  profileCardElement: <ProfileCard {...AppSessionData} />,
  onGithubClick: () => console.log("onGithubClick"),
  onLinkedInClick: () => console.log("onLinkedInClick"),
};

export const NavbarPhoneData: AppNavbarPhoneProps = {
  title: "Some Title",
  appDrawerProps: {
    ...AppSessionData,
    open: false,
    onClose: () => console.log("onClose"),
  },
};
