import type { ReactElement } from "react";
import { UserCircleIcon, ArrowLeftStartOnRectangleIcon } from "@heroicons/react/20/solid";

export interface ProfileCardProps {
  name?: string;
  email?: string;
  onLogout?(): void;
}

export function ProfileCard({ name, email, onLogout }: ProfileCardProps): ReactElement {
  return (
    <div className="card w-screen bg-base-200 shadow-xl sm:w-72">
      <div className="px-8 pt-8">
        <span className="text-xl font-semibold">Personal</span>
        <div className="flex flex-1 flex-row items-center justify-center gap-4 py-2">
          <div className="flex h-full justify-center">
            <UserCircleIcon className="h-8 w-8 fill-neutral" />
          </div>
          <div className="flex flex-1 flex-col gap-2">
            <span className="h-5" data-testid="profile-card__name-text">
              {name ? name : <div className="skeleton h-full bg-neutral-content" />}
            </span>
            <span className="h-5" data-testid="profile-card__email-text">
              {email ? email : <div className="skeleton h-full bg-neutral-content" />}
            </span>
          </div>
        </div>
        <div className="divider" />
      </div>
      <ul className="menu rounded-box px-2 pb-4 pt-0">
        <li>
          <button onClick={onLogout} data-testid="profile-card__logout-button">
            <ArrowLeftStartOnRectangleIcon className="h-5 w-5" />
            <span className="text-base">Logout</span>
          </button>
        </li>
      </ul>
    </div>
  );
}
