import type { ReactElement, ReactNode } from "react";
import { Logo } from "../../Layout";

export interface NavbarProps {
  title: string;
  centerElement?: ReactNode;
  endElement?: ReactNode;
}

export function Navbar({ title, centerElement, endElement }: NavbarProps): ReactElement {
  return (
    <div className="glass navbar bg-opacity-55 dark:bg-opacity-100 p-0 dark:bg-none">
      <div className="navbar container mx-auto min-h-0 p-0">
        <div className="navbar-start h-full">
          <Logo size="small" />
          <span className="text-base font-semibold md:text-2xl">{title}</span>
        </div>
        <div className="navbar-center h-8">{centerElement}</div>
        <div className="navbar-end h-8">{endElement}</div>
      </div>
    </div>
  );
}
