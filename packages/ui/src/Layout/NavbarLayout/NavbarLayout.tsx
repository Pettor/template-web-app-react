import type { ReactElement, ReactNode } from "react";
import { GithubIcon, LinkedInIcon } from "../../Icons";

export interface NavbarLayoutProps {
  navbarElement: ReactNode;
  footer?: boolean;
  backgroundElement?: ReactNode;
  onGithubClick: () => void;
  onLinkedInClick: () => void;
  children?: ReactNode;
}

export function NavbarLayout({
  backgroundElement,
  navbarElement,
  footer,
  onGithubClick,
  onLinkedInClick,
  children,
}: NavbarLayoutProps): ReactElement {
  return (
    <div className="flex min-h-screen flex-col overflow-x-hidden">
      {backgroundElement}
      <div className="sticky top-0 z-40">{navbarElement}</div>
      <div className="container mb-8">
        <div className="navbar" />
        <main className="flex lg:px-10">{children}</main>
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
  );
}
