import { ReactElement } from "react";
import AppMenu from "../../components/layout/menu/AppMenu";
import ProfileCard from "../../components/layout/profile/ProfileCardExt";
import HomeView from "../../components/views/home/HomeView";

export default function HomePage(): ReactElement {
  return (
    <HomeView
      headerComponents={{
        Menu: AppMenu,
        ProfileNode: <ProfileCard />,
      }}
    />
  );
}
