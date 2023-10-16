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
        <div className="flex flex-1 flex-row items-center">
          <span className="from-primary to-secondary inline-block bg-gradient-to-r bg-clip-text text-4xl font-bold text-transparent md:text-5xl lg:text-7xl">
            {intl.formatMessage({
              description: "HomeView - Welcome",
              defaultMessage: "Welcome",
              id: "vlRwrH",
            })}{" "}
          </span>
        </div>
        <span className="text-2xl">
          {intl.formatMessage({
            description: "HomeView - Subheader",
            defaultMessage: "This is the home page",
            id: "MIobVx",
          })}
        </span>
      </div>
    </HeaderLayout>
  );
}
