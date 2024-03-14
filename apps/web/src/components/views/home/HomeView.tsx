import { type ReactElement } from "react";
import { useIntl } from "react-intl";
import { BlueFadeBackground, HeaderLayout, type HeaderLayoutProps } from "shared-ui";

export interface HomeViewProps extends Omit<HeaderLayoutProps, "title" | "backgroundElement" | "children"> {}

function GridItem({ title, description, goto }: { title: string; description: string; goto: string }): ReactElement {
  return (
    <div
      className="card bg-base-300 hover:bg-neutral-content/70 dark:hover:bg-neutral/40 cursor-pointer transition-colors bg-opacity-20
        shadow-inner"
    >
      <div className="card-body glass rounded-xl dark:bg-none">
        <h2 className="card-title">{title}</h2>
        <div className="divider m-0" />
        <p>{description}</p>
        <div className="card-actions justify-end">
          <button className="btn btn-primary">{goto}</button>
        </div>
      </div>
    </div>
  );
}

export function HomeView({ ...headerProps }: HomeViewProps): ReactElement {
  const intl = useIntl();

  return (
    <HeaderLayout
      title={intl.formatMessage({
        description: "HomeView - Title",
        defaultMessage: "Home",
        id: "/UNGRI",
      })}
      footer
      backgroundElement={<BlueFadeBackground />}
      {...headerProps}
    >
      <div className="flex flex-1 flex-col">
        <div className="hero">
          <div className="hero-content text-center">
            <div className="w-full">
              <span className="inline-block text-4xl font-medium md:text-5xl lg:text-7xl">
                {intl.formatMessage({
                  description: "HomeView - Header title ending",
                  defaultMessage: "Welcome to",
                  id: "1/+0+G",
                })}
                &nbsp;
              </span>
              <span
                className="inline-block bg-gradient-to-r from-primary to-secondary bg-clip-text text-4xl font-bold text-transparent md:text-5xl
                  lg:text-7xl"
              >
                {intl.formatMessage({
                  description: "HomeView - Header title start",
                  defaultMessage: "React",
                  id: "oAy59O",
                })}
                &nbsp;
              </span>
              <span className="inline-block text-4xl font-medium md:text-5xl lg:text-7xl">
                {intl.formatMessage({
                  description: "HomeView - Header title ending",
                  defaultMessage: "Template",
                  id: "ojp/AE",
                })}
              </span>
              <p className="py-6 text-xl">
                {intl.formatMessage({
                  description: "HomeView - Header description",
                  defaultMessage: "Highly opinionated and optimized using Turborepo, React and TailwindCSS.",
                  id: "NlMkKm",
                })}
              </p>
              <div className="divider divider-vertical" />
            </div>
          </div>
        </div>
        <div className="grid grid-cols-1 gap-4 md:grid-cols-3 md:grid-rows-2">
          <GridItem
            title={intl.formatMessage({
              description: "HomeView - React title",
              defaultMessage: "React",
              id: "M9bVgn",
            })}
            description={intl.formatMessage({
              description: "HomeView - React description",
              defaultMessage:
                "React is a JavaScript library for building dynamic, high-performing, user interfaces in single-page applications",
              id: "Loc3Ef",
            })}
            goto={intl.formatMessage({
              description: "HomeView - React goto button",
              defaultMessage: "Goto",
              id: "APfpE8",
            })}
          />
          <GridItem
            title={intl.formatMessage({
              description: "HomeView - Turborepo title",
              defaultMessage: "Turborepo",
              id: "/+IE0C",
            })}
            description={intl.formatMessage({
              description: "HomeView - Turborepo description",
              defaultMessage:
                "TurboRepo is a tool that accelerates software development by managing multiple interdependent repositories as a single unified workspace.",
              id: "5pk6t0",
            })}
            goto={intl.formatMessage({
              description: "HomeView - Turborepo goto button",
              defaultMessage: "Goto",
              id: "UU8qy5",
            })}
          />
          <GridItem
            title={intl.formatMessage({
              description: "HomeView - TailwindCSS + DaisyUI title",
              defaultMessage: "TailwindCSS + DaisyUI",
              id: "y7sgTV",
            })}
            description={intl.formatMessage({
              description: "HomeView - TailwindCSS + DaisyUI description",
              defaultMessage:
                "Tailwind CSS is a utility-first CSS framework for building custom designs quickly, while DaisyUI extends Tailwind CSS with ready-to-use components for faster frontend development.",
              id: "+Bnmz6",
            })}
            goto={intl.formatMessage({
              description: "HomeView - TailwindCSS + DaisyUI goto button",
              defaultMessage: "Goto",
              id: "4X8mfO",
            })}
          />
          <GridItem
            title={intl.formatMessage({
              description: "HomeView - Storybook title",
              defaultMessage: "Storybook",
              id: "0+C6BU",
            })}
            description={intl.formatMessage({
              description: "HomeView - Storybook description",
              defaultMessage:
                "Storybook is a development environment for UI components that allows for isolated development, testing, and showcasing of each component.",
              id: "eHoy5z",
            })}
            goto={intl.formatMessage({
              description: "HomeView - Storybook goto button",
              defaultMessage: "Goto",
              id: "BY1Ju1",
            })}
          />
          <GridItem
            title={intl.formatMessage({
              description: "HomeView - Test title",
              defaultMessage: "Robust Test Framework",
              id: "WGQoF9",
            })}
            description={intl.formatMessage({
              description: "HomeView - Test description",
              defaultMessage:
                "Robust test framework using Playwright, Storybook visual testing and Vitest for unit, integration and end-to-end testing.",
              id: "OACvSV",
            })}
            goto={intl.formatMessage({
              description: "HomeView - React button",
              defaultMessage: "Goto",
              id: "cX7dDa",
            })}
          />
          <GridItem
            title={intl.formatMessage({
              description: "HomeView - Github Actions title",
              defaultMessage: "Github Actions",
              id: "78LkJG",
            })}
            description={intl.formatMessage({
              description: "HomeView - Github Actions description",
              defaultMessage:
                "Github Actions is a CI/CD tool that allows you to automate, customize, and execute your software development workflows right in your repository.",
              id: "BGuERy",
            })}
            goto={intl.formatMessage({
              description: "HomeView - Github Actions button",
              defaultMessage: "Goto",
              id: "wR5VNv",
            })}
          />
        </div>
      </div>
    </HeaderLayout>
  );
}
