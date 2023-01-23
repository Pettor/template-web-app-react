import { useCallback } from "react";
import AppMenu from "../../components/layout/menu/AppMenu";
import AppMenuContent from "../../components/layout/menu/content/AppMenuContentExt";
import HomeView from "../../components/views/home/HomeView";
import useApi from "../../libs/api/hooks/UseApi";

interface DemoData {
  data: string;
}

function HomePage() {
  const api = useApi();

  const handleClick = useCallback(async () => {
    const { data } = await api.get<DemoData>("/api/v1/demo");
    console.log(data.data);
  }, []);

  return (
    <HomeView
      injectedMenu={{
        menu: AppMenu,
        menuContent: <AppMenuContent />,
      }}
      onDemoDataClick={handleClick}
    />
  );
}

export default HomePage;
