import type { ReactElement, ReactNode } from "react";
import { Logo } from "../../Components";

export interface AppHeaderProps {
  title: string;
  components?: ReactNode;
}

export function AppHeader({ title, components }: AppHeaderProps): ReactElement {
  return (
    <div className="glass navbar bg-opacity-55 p-0 dark:bg-opacity-100 dark:bg-none ">
      <div className="container navbar min-h-0 p-0">
        <div className="navbar-start h-full">
          <Logo size="small" />
          <span className="text-2xl font-semibold">{title}</span>
        </div>
        <div className="navbar-end h-8">{components}</div>
      </div>
    </div>
  );
}
