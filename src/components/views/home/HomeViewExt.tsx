import AppMenu from "../../layout/menu/AppMenu";
import AppMenuContent from "../../layout/menu/content/AppMenuContent";
import HomeView from "./HomeView";

const HomeViewExt = () => {
  return (
    <HomeView
      injectedMenu={{
        menu: AppMenu,
        menuContent: <AppMenuContent />,
      }}
    />
  );
};

export default HomeViewExt;
