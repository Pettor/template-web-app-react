import type { ReactElement, ReactNode } from "react";
import { Logo } from "Components/Logo";

export interface AppHeaderProps {
  title: string;
  components?: ReactNode;
}

export function AppHeader({ title }: AppHeaderProps): ReactElement {
  return (
    <div className="glass navbar bg-base-100 bg-opacity-55">
      <div className="container navbar min-h-0 p-0">
        <div className="navbar-start">
          <Logo size="small" />
          <span className="text-2xl font-semibold">{title}</span>
        </div>
        <div className="navbar-end">
          <div className="form-control">
            <input type="text" placeholder="Search" className="input input-bordered w-24 md:w-auto" />
          </div>
          <div className="divider divider-horizontal" />
          <div className="dropdown dropdown-end">
            <div tabIndex={0} role="button" className="avatar btn btn-circle btn-ghost">
              <div className="w-10 rounded-full">
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
