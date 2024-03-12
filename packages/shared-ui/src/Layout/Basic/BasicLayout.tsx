import type { ReactElement, ReactNode } from "react";
import clsx from "clsx";

export interface BasicLayoutProps {
  className?: string;
  children: ReactNode;
}

export function BasicLayout({ className, children }: BasicLayoutProps): ReactElement {
  return (
    <div className={clsx(className, "flex min-h-screen flex-1")}>
      <main className="container flex flex-1">{children}</main>
    </div>
  );
}
