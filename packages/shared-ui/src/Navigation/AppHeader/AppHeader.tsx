import type { ReactElement, ReactNode } from "react";
import { UserCircleIcon } from "@heroicons/react/20/solid";
import { ProfileCard, ThemeSwitch } from "Components";
import { Logo } from "Components/Logo";
import { useThemeSwitcher } from "Components/ThemeSwitch/UseThemeSwitcher";
import { GithubIcon, LinkedInIcon } from "Icons";

export interface AppHeaderProps {
  title: string;
  components?: ReactNode;
  onGithubClick: () => void;
  onLinkedInClick: () => void;
}

export function AppHeader({ title, onGithubClick, onLinkedInClick }: AppHeaderProps): ReactElement {
  const themeProps = useThemeSwitcher();

  return (
    <div className="glass navbar bg-opacity-55 p-0 dark:bg-opacity-100 dark:bg-none ">
      <div className="container navbar min-h-0 p-0">
        <div className="navbar-start h-full">
          <Logo size="small" />
          <span className="text-2xl font-semibold">{title}</span>
        </div>
        <div className="navbar-end h-8">
          <div className="dropdown dropdown-end">
            <div className="flex items-center">
              <div tabIndex={0} role="button" className="avatar btn btn-circle btn-ghost btn-sm">
                <div className="w-8 rounded-full">
                  <UserCircleIcon />
                </div>
              </div>
            </div>
            <ul tabIndex={0} className="dropdown-content">
              <ProfileCard />
            </ul>
          </div>
          <div className="divider divider-horizontal mx-2" />
          <div>
            <ThemeSwitch {...themeProps} />
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
      </div>
    </div>
  );
}
