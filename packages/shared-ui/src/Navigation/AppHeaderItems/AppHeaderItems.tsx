import type { ReactElement, ReactNode } from "react";
import { UserCircleIcon } from "@heroicons/react/20/solid";
import { useIntl } from "react-intl";
import type { ThemeSwitchProps } from "../../Components";
import { ThemeSwitch } from "../../Components";
import { GithubIcon, LinkedInIcon } from "../../Icons";

export interface AppHeaderItemsProps {
  themeSwitchProps: ThemeSwitchProps;
  profileCardElement: ReactNode;
  onGithubClick: () => void;
  onLinkedInClick: () => void;
}

export function AppHeaderItems({
  themeSwitchProps,
  profileCardElement,
  onGithubClick,
  onLinkedInClick,
}: AppHeaderItemsProps): ReactElement {
  const intl = useIntl();

  return (
    <div className="flex flex-row items-center">
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
          {profileCardElement}
        </ul>
      </div>
      <div className="divider divider-horizontal mx-2" />
      <div>
        <ThemeSwitch {...themeSwitchProps} />
      </div>
      <div className="divider divider-horizontal mx-2" />
      <div className="flex items-center gap-2">
        <button
          className="h-10 w-10 fill-neutral p-2 brightness-200 transition-all hover:brightness-75 dark:fill-neutral-content"
          onClick={onGithubClick}
        >
          <GithubIcon />
        </button>
        <button
          className="h-10 w-10 fill-neutral p-2 brightness-200 transition-all hover:brightness-75 dark:fill-neutral-content"
          onClick={onLinkedInClick}
        >
          <LinkedInIcon />
        </button>
      </div>
    </div>
  );
}
