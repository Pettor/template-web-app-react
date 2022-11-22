import AppMenu from "../../layout/menu/AppMenu";
import AppMenuContent from "../../layout/menu/content/AppMenuContentExt";
import HomeView from "./HomeView";

function HomeViewExt() {
  return (
    <HomeView
      injectedMenu={{
        menu: AppMenu,
        menuContent: <AppMenuContent />,
      }}
    />
  );
}

export default HomeViewExt;
