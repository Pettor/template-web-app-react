import type { ReactElement, ReactNode } from "react";
import { ThemeSwitch } from "Components";
import { Logo } from "Components/Logo";
import { useThemeSwitcher } from "Components/ThemeSwitch/UseThemeSwitcher";

export interface AppHeaderProps {
  title: string;
  components?: ReactNode;
}

export function AppHeader({ title }: AppHeaderProps): ReactElement {
  const themeProps = useThemeSwitcher();

  return (
    <div className="glass navbar bg-base-100 bg-opacity-55 p-0 dark:bg-opacity-80 dark:bg-none ">
      <div className="container navbar min-h-0 p-0">
        <div className="navbar-start h-full">
          <Logo size="small" />
          <span className="text-2xl font-semibold">{title}</span>
        </div>
        <div className="navbar-end h-8">
          <div>
            <ThemeSwitch {...themeProps} />
          </div>
          <div className="divider divider-horizontal" />
          <div className="dropdown dropdown-end">
            <div tabIndex={0} role="button" className="avatar btn btn-circle btn-ghost">
              <div className="w-8 rounded-full">
                <img
                  alt="Tailwind CSS Navbar component"
                  src="https://daisyui.com/images/stock/photo-1534528741775-53994a69daeb.jpg"
                />
              </div>
            </div>
            <ul
              tabIndex={0}
              className="menu dropdown-content menu-sm z-[1] mt-3 w-52 rounded-box bg-base-100 p-2 shadow"
            >
              <li>
                <a className="justify-between">
                  Profile
                  <span className="badge">New</span>
                </a>
              </li>
              <li>
                <a>Settings</a>
              </li>
              <li>
                <a>Logout</a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}
