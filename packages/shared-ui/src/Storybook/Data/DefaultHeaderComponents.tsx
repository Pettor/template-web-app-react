import type { ReactElement } from "react";
import { faker } from "@faker-js/faker";
import { ProfileCard } from "../../Components";
import type { AppHeaderItemsProps } from "../../Navigation";
import { AppHeaderItems } from "../../Navigation";

export const DefaultHeaderItemsProps: AppHeaderItemsProps = {
  themeSwitchProps: { mode: "light", onSwitch: () => console.log("onThemeChange") },
  profileCardElement: (
    <ProfileCard
      name={faker.person.fullName()}
      email={faker.internet.email()}
      onAbout={() => console.log("onAbout")}
      onLogout={() => console.log("onLogout")}
    />
  ),

  onGithubClick: () => console.log("onGithubClick"),
  onLinkedInClick: () => console.log("onLinkedInClick"),
};

export function DefaultHeaderComponents(): ReactElement {
  return <AppHeaderItems {...DefaultHeaderItemsProps} />;
}
