import type { ReactElement, ReactNode } from "react";
import clsx from "clsx";
import { GithubIcon, LinkedInIcon } from "../../Icons";

export interface HeaderLayoutProps {
  footer?: boolean;
  backgroundElement?: ReactNode;
  navbarElement: ReactNode;
  className?: string;
  onGithubClick: () => void;
  onLinkedInClick: () => void;
  children?: ReactNode;
}

export function HeaderLayout({
  className,
  backgroundElement,
  navbarElement,
  footer,
  onGithubClick,
  onLinkedInClick,
  children,
}: HeaderLayoutProps): ReactElement {
  return (
    <div className="flex min-h-screen flex-col">
      {backgroundElement}
      <div className={clsx(className, "flex flex-1 flex-col")}>
        <div className="sticky top-0 z-40">{navbarElement}</div>
        <div className="flex">
          <div className="container mb-8">
            <div className="navbar" />
            <main className="lg:px-10">{children}</main>
          </div>
        </div>
        <div className="flex flex-1" />
        {footer && (
          <footer className="glass footer footer-center gap-y-2 py-2 text-base-content dark:bg-none lg:p-4">
            <div className="lg:mt-2">
              <p className="text-base font-bold">Made with ☕ by Petter Hancock</p>
              <p>Copyright © 2024 - All right reserved</p>
            </div>
            <nav>
              <div className="grid grid-flow-col gap-2">
                <button className="btn btn-square btn-ghost fill-primary p-2" onClick={onGithubClick}>
                  <GithubIcon />
                </button>
                <button className="btn btn-square btn-ghost fill-primary p-2" onClick={onLinkedInClick}>
                  <LinkedInIcon />
                </button>
              </div>
            </nav>
          </footer>
        )}
      </div>
    </div>
  );
}
