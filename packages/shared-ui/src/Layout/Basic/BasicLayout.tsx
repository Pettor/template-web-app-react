import type { ReactElement, ReactNode } from "react";
import clsx from "clsx";

export interface BasicLayoutProps {
  className?: string;
  children: ReactNode;
}

export function BasicLayout({ className, children }: BasicLayoutProps): ReactElement {
  return (
    <div className="container flex items-center justify-center">
      <main className={clsx(className, "w-full")}>{children}</main>
    </div>
  );
}
