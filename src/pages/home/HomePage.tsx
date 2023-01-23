import AppMenu from "../../components/layout/menu/AppMenu";
import AppMenuContent from "../../components/layout/menu/content/AppMenuContent";
import HomeView from "../../components/views/home/HomeView";
import useApi from "../../libs/api/hooks/UseApi";

interface DemoData {
  data: string;
}

function HomePage() {
  const api = useApi();

  async function handleDemoDataClick() {
    const { data } = await api.get<DemoData>("/api/v1/demo");
    console.log(data.data);
  }

  return (
    <HomeView
      injectedMenu={{
        menu: AppMenu,
        menuContent: <AppMenuContent />,
      }}
      onDemoDataClick={handleDemoDataClick}
    />
  );
}

export default HomePage;
