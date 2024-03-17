import type { ReactElement } from "react";
import {
  UserCircleIcon,
  InformationCircleIcon,
  Cog8ToothIcon,
  ArrowLeftStartOnRectangleIcon,
} from "@heroicons/react/20/solid";
import { useIntl } from "react-intl";
import type { AppSessionContent } from "~/classes/app-session/AppSessionContent";

export interface ProfileCardProps extends AppSessionContent {}

export function ProfileCard({ name, email, onAbout, onLogout }: ProfileCardProps): ReactElement {
  const intl = useIntl();

  return (
    <div className="card w-screen bg-base-100 shadow-xl dark:bg-base-200 sm:w-80">
      <div className="card-body rounded-xl shadow-inner dark:bg-none">
        <span className="text-xl font-semibold">Personal</span>
        <div className="mt-2 flex flex-row items-center justify-center gap-4 py-2">
          <div className="flex h-full items-center justify-center">
            <UserCircleIcon className="full-neutral h-8 w-8 dark:fill-neutral-content" />
          </div>
          <div className="flex min-w-0 flex-1 flex-col gap-2">
            <span className="h-5 truncate" data-testid="profile-card__name-text">
              {name ? name : <div className="skeleton h-full" />}
            </span>
            <span className="h-5 truncate" data-testid="profile-card__email-text">
              {email ? email : <div className="skeleton h-full" />}
            </span>
          </div>
        </div>
        <div className="divider m-0" />
        <ul className="menu gap-2 rounded-box p-0">
          <li>
            <button onClick={onAbout} data-testid="profile-card__info-button">
              <InformationCircleIcon className="h-5 w-5" />
              <span className="text-base">
                {intl.formatMessage({
                  description: "ProfileCard - Info",
                  defaultMessage: "About",
                  id: "NfKNqH",
                })}
              </span>
            </button>
          </li>
          <li>
            <button onClick={onLogout} data-testid="profile-card__settings-button">
              <Cog8ToothIcon className="h-5 w-5" />
              <span className="text-base">
                {intl.formatMessage({
                  description: "ProfileCard - Settings",
                  defaultMessage: "Settings",
                  id: "uZ3xat",
                })}
              </span>
            </button>
          </li>
          <li>
            <button onClick={onLogout} data-testid="profile-card__logout-button">
              <ArrowLeftStartOnRectangleIcon className="h-5 w-5" />
              <span className="text-base">
                {intl.formatMessage({
                  description: "ProfileCard - Logout",
                  defaultMessage: "Logout",
                  id: "bXlo7I",
                })}
              </span>
            </button>
          </li>
        </ul>
      </div>
    </div>
  );
}
