import { ProfileCard } from "../../components/actions/profile-card";
import type { AppbarDesktopProps } from "../../components/navigation/appbar-desktop";
import type { AppbarPhoneProps } from "../../components/navigation/appbar-phone";
import { AppSessionData } from "./AppSessionData";

export const AppbarDesktopData: AppbarDesktopProps = {
  title: "Some Title",
  themeSwitchProps: {
    mode: "light",
    onSwitch: () => console.log("onToggle"),
  },
  profileCardElement: <ProfileCard {...AppSessionData} />,
  onGithubClick: () => console.log("onGithubClick"),
  onLinkedInClick: () => console.log("onLinkedInClick"),
};

export const AppbarPhoneData: AppbarPhoneProps = {
  title: "Some Title",
  appDrawerProps: AppSessionData,
};
