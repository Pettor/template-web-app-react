import type { ReactElement, ReactNode } from "react";
import clsx from "clsx";
import { AppHeader, type AppHeaderProps } from "../../Navigation/AppHeader";

export interface HeaderLayoutProps extends AppHeaderProps {
  className?: string;
  children?: ReactNode;
}

export function HeaderLayout({ className, children, ...headerProps }: HeaderLayoutProps): ReactElement {
  return (
    <div className={clsx(className, "flex flex-col")}>
      <div className="sticky top-0 z-40">
        <AppHeader {...headerProps} />
      </div>
      <div className="flex">
        <div className="container mb-8">
          <div className="navbar" />
          <main className="mt-2 lg:px-10">{children}</main>
        </div>
      </div>
    </div>
  );
}
