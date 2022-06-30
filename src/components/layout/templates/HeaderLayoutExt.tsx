import AppMenu from "../menu/AppMenu";
import AppMenuContent from "../menu/content/AppMenuContentExt";
import HeaderLayout, { MainLayoutProps } from "./HeaderLayout";

const HeaderLayoutExt = (props: MainLayoutProps) => {
  return (
    <HeaderLayout
      {...props}
      injectedMenu={{
        menu: AppMenu,
        menuContent: <AppMenuContent />,
      }}
    />
  );
};

export default HeaderLayoutExt;
