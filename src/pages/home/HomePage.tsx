import AppMenu from "../../components/layout/menu/AppMenu";
import AppMenuContent from "../../components/layout/menu/content/AppMenuContentExt";
import ProfileCard from "../../components/layout/profile/ProfileCardExt";
import HomeView from "../../components/views/home/HomeView";

function HomePage() {
  return (
    <HomeView
      headerComponents={{
        Menu: AppMenu,
        MenuNode: <AppMenuContent />,
        ProfileNode: <ProfileCard />,
      }}
    />
  );
}

export default HomePage;
