import type { ReactElement } from "react";
import { AppbarDesktopData, AppbarPhoneData } from "../data/AppbarData";
import { Appbar } from "~/components/navigation/appbar";

export function StorybookAppbarComponent(): ReactElement {
  return (
    <Appbar
      title="Some title"
      appbarDesktopProps={AppbarDesktopData}
      appbarPhoneProps={AppbarPhoneData}
      onGithubClick={() => console.log("onGithubClick")}
      onLinkedInClick={() => console.log("onLinkedInClick")}
    />
  );
}
