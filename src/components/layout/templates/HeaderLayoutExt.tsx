import AppMenu from "../menu/AppMenu";
import AppMenuContent from "../menu/content/AppMenuContentExt";
import HeaderLayout, { HeaderLayoutProps } from "./HeaderLayout";

const HeaderLayoutExt = (props: HeaderLayoutProps) => {
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
