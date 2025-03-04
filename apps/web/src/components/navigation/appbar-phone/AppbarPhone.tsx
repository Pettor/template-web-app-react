import { useState, type ReactElement } from "react";
import { Bars3Icon } from "@heroicons/react/20/solid";
import { useIntl } from "react-intl";
import type { NavbarProps } from "ui-package";
import { Navbar } from "ui-package";
import { AppDrawer } from "../app-drawer";
import type { IAppSessionContent } from "~/classes/app-session/IAppSessionContent";
import type { IAppbar } from "~/classes/appbar/IAppbar";

export interface AppbarPhoneProps extends IAppbar, Omit<NavbarProps, "open" | "centerElement" | "endElement"> {}

export function AppbarPhone(props: AppbarPhoneProps): ReactElement {
  return <Navbar {...props} endElement={<AppbarPhoneComponents {...props} />} />;
}

function AppbarPhoneComponents(props: IAppSessionContent): ReactElement {
  const intl = useIntl();
  const { onAbout } = props;
  const [openDrawer, setOpenDrawer] = useState(false);

  function handleAbout(): void {
    onAbout();
    setOpenDrawer(false);
  }

  return (
    <div className="flex flex-row">
      <div className="flex flex-1 items-center justify-end gap-2">
        <div className="dropdown">
          <div className="flex items-center">
            <button
              tabIndex={0}
              className="avatar btn btn-square btn-ghost btn-sm"
              title={intl.formatMessage({
                description: "AppHeaderItems - Menu button title",
                defaultMessage: "Menu",
                id: "nO+F5S",
              })}
              aria-label={intl.formatMessage({
                description: "AppHeaderItems - Menu button aria label",
                defaultMessage: "Menu",
                id: "HTZdxY",
              })}
              onClick={() => setOpenDrawer(true)}
              data-testid="home-page__menu-button"
            >
              <Bars3Icon className="h-5 w-5" />
            </button>
          </div>
        </div>
        <AppDrawer {...props} onAbout={handleAbout} open={openDrawer} onClose={() => setOpenDrawer(false)} />
      </div>
    </div>
  );
}
