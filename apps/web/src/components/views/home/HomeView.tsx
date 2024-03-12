import type { ReactElement } from "react";
import { useIntl } from "react-intl";
import { HeaderLayout, type HeaderLayoutProps } from "shared-ui";

export interface HomeViewProps extends Omit<HeaderLayoutProps, "title" | "children"> {}

export function HomeView({ ...headerProps }: HomeViewProps): ReactElement {
  const intl = useIntl();

  return (
    <HeaderLayout
      title={intl.formatMessage({
        description: "HomeView - Title",
        defaultMessage: "Home",
        id: "/UNGRI",
      })}
      {...headerProps}
    >
      <div className="flex flex-1 flex-col">
        <div className="hero">
          <div className="hero-content text-center">
            <div className="max-w-screen-md">
              <span className="inline-block text-4xl font-bold md:text-5xl lg:text-7xl">
                {intl.formatMessage({
                  description: "HomeView - Header title ending",
                  defaultMessage: "Welcome to",
                  id: "1/+0+G",
                })}
                &nbsp;
              </span>
              <span className="inline-block bg-gradient-to-r from-primary to-secondary bg-clip-text text-4xl font-bold text-transparent md:text-5xl lg:text-7xl">
                {intl.formatMessage({
                  description: "HomeView - Header title start",
                  defaultMessage: "React",
                  id: "oAy59O",
                })}
              </span>
              <span className="inline-block text-4xl font-bold md:text-5xl lg:text-7xl">
                {intl.formatMessage({
                  description: "HomeView - Header title ending",
                  defaultMessage: "Template",
                  id: "ojp/AE",
                })}
              </span>
              <p className="py-6 text-lg">Optimized using Turborepo, React and TailwindCSS.</p>
              <button className="btn btn-primary">Get Started</button>
            </div>
          </div>
        </div>
      </div>
    </HeaderLayout>
  );
}
