import { useState, type ReactElement } from "react";
import { Bars3Icon } from "@heroicons/react/20/solid";
import { useIntl } from "react-intl";
import type { NavbarProps } from "shared-ui";
import { Navbar } from "shared-ui";
import { AppDrawer, type AppDrawerProps } from "../app-drawer";

interface AppNavbarPhoneComponentsProps {
  appDrawerProps: Omit<AppDrawerProps, "open" | "onClose">;
}

export interface AppNavbarPhoneProps
  extends AppNavbarPhoneComponentsProps,
    Omit<NavbarProps, "open" | "centerElement" | "endElement"> {}

export function AppNavbarPhone(props: AppNavbarPhoneProps): ReactElement {
  return <Navbar {...props} endElement={<AppNavbarDesktopComponents {...props} />} />;
}

function AppNavbarDesktopComponents({ appDrawerProps }: AppNavbarPhoneComponentsProps): ReactElement {
  const intl = useIntl();
  const [openDrawer, setOpenDrawer] = useState(false);

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
        <AppDrawer {...appDrawerProps} open={openDrawer} onClose={() => setOpenDrawer(false)} />
      </div>
    </div>
  );
}
