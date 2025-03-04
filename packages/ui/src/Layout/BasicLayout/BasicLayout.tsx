import type { ReactElement, ReactNode } from "react";
import clsx from "clsx";

export interface BasicLayoutProps {
  className?: string;
  backgroundElement?: ReactNode;
  children: ReactNode;
}

export function BasicLayout({ className, backgroundElement, children }: BasicLayoutProps): ReactElement {
  return (
    <div className={clsx(className, "flex min-h-screen flex-1")}>
      {backgroundElement}
      <main className="container m-auto">{children}</main>
    </div>
  );
}
