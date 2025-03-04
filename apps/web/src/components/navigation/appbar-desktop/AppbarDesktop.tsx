import type { ReactElement } from "react";
import { UserCircleIcon } from "@heroicons/react/20/solid";
import { useIntl } from "react-intl";
import type { NavbarProps } from "ui-package";
import { Navbar, GithubIcon, LinkedInIcon } from "ui-package";
import type { IAppbar } from "~/classes/appbar/IAppbar";
import { ThemeSwitch } from "~/components/actions/theme-switch/ThemeSwitch";
import { ProfileCard } from "~/components/feedback/profile-card/ProfileCard";

export interface AppbarDesktopProps extends IAppbar, Omit<NavbarProps, "centerElement" | "endElement"> {}

export function AppNavbarDesktop(props: AppbarDesktopProps): ReactElement {
  return <Navbar {...props} endElement={<AppbarDesktopComponents {...props} />} />;
}

function AppbarDesktopComponents({ onGithubClick, onLinkedInClick, ...props }: IAppbar): ReactElement {
  const intl = useIntl();

  return (
    <div className="flex flex-row">
      <div className="flex items-center">
        <div className="dropdown dropdown-end">
          <div className="flex items-center">
            <div
              tabIndex={0}
              role="button"
              className="avatar btn btn-circle btn-ghost btn-sm"
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
              data-testid="home-page__menu-button"
            >
              <div className="w-8 rounded-full">
                <UserCircleIcon />
              </div>
            </div>
          </div>
          <ul tabIndex={0} className="dropdown-content">
            <ProfileCard {...props} />
          </ul>
        </div>
        <div className="divider divider-horizontal mx-2" />
        <div>
          <ThemeSwitch {...props} />
        </div>
        <div className="divider divider-horizontal mx-2" />
        <div className="flex items-center gap-2">
          <button
            className="fill-neutral/60 dark:fill-neutral-content hover:fill-neutral dark:hover:fill-neutral-content/60 h-10 w-10 cursor-pointer p-2 transition-all"
            onClick={onGithubClick}
          >
            <GithubIcon />
          </button>
          <button
            className="fill-neutral/60 dark:fill-neutral-content hover:fill-neutral dark:hover:fill-neutral-content/60 h-10 w-10 cursor-pointer p-2 transition-all"
            onClick={onLinkedInClick}
          >
            <LinkedInIcon />
          </button>
        </div>
      </div>
    </div>
  );
}
