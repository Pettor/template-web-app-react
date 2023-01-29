import AppMenu from "../../components/layout/menu/AppMenu";
import AppMenuContent from "../../components/layout/menu/content/AppMenuContentExt";
import ProfileCard from "../../components/layout/profile/ProfileCardExt";
import HomeView from "../../components/views/home/HomeView";
import useApi from "../../libs/api/hooks/UseApi";

interface DemoData {
  data: string;
}

function HomePage() {
  const api = useApi();

  async function handleClick() {
    try {
      const { data } = await api.get<DemoData>("/api/v1/demo");
      console.log(data.data);
    } catch {
      // Ignore this
    }
  }

  return (
    <HomeView
      headerComponents={{
        Menu: AppMenu,
        MenuNode: <AppMenuContent />,
        ProfileNode: <ProfileCard />,
      }}
      onDemoDataClick={handleClick}
    />
  );
}

export default HomePage;
