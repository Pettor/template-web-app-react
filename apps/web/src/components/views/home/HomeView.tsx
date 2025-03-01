import type { ReactElement } from "react";
import clsx from "clsx";
import { useIntl } from "react-intl";
import { BlueFadeBackground } from "ui-package";
import daisyuiImgSrc from "~/assets/images/logo/daisyui.png";
import githubImgSrc from "~/assets/images/logo/github.png";
import mocksServerImgSrc from "~/assets/images/logo/mocks-server.png";
import netImgSrc from "~/assets/images/logo/net.png";
import playwrightImgSrc from "~/assets/images/logo/playwright.png";
import reactImgSrc from "~/assets/images/logo/react.png";
import storybookImgSrc from "~/assets/images/logo/storybook.png";
import turborepoImgSrc from "~/assets/images/logo/turborepo.png";
import type { IAppSocialLinks } from "~/classes/app-social-links/IAppSocialLinks";
import { AppbarLayout } from "~/components/layout/AppbarLayout";
import { type AppbarProps } from "~/components/navigation/appbar";

export interface HomeViewProps {
  appSocialLinkProps: IAppSocialLinks;
  appNavbarProps: Omit<AppbarProps, "title" | "onGithubClick" | "onLinkedInClick">;
  onGotoClick(href: string): void;
}

function GridItem({
  title,
  imageSrc,
  description,
  invertColor,
  onClick,
}: {
  title: string;
  imageSrc: string;
  description: string;
  invertColor?: boolean;
  onClick?(): void;
}): ReactElement {
  const intl = useIntl();

  return (
    <div className="card bg-base-300 bg-opacity-20 shadow-inner transition-colors hover:bg-neutral-content/70 dark:hover:bg-neutral/40">
      <div className="card-body glass min-h-56 rounded-xl dark:bg-none">
        <h2 className="card-title">
          {imageSrc && (
            <img className={clsx(invertColor ? "dark:invert" : "", "mask mask-squircle h-6 w-6")} src={imageSrc} />
          )}
          {title}
        </h2>
        <div className="divider m-0" />
        <p>{description}</p>
        {onClick && (
          <div className="card-actions justify-end">
            <button className="btn btn-primary" onClick={onClick}>
              {intl.formatMessage({
                description: "HomeView - Turborepo goto button",
                defaultMessage: "Goto",
                id: "UU8qy5",
              })}
            </button>
          </div>
        )}
      </div>
    </div>
  );
}

export function HomeView({ appNavbarProps, appSocialLinkProps, onGotoClick }: HomeViewProps): ReactElement {
  const intl = useIntl();

  return (
    <AppbarLayout
      {...appNavbarProps}
      {...appSocialLinkProps}
      title={intl.formatMessage({
        description: "HomeView - Navbar title",
        defaultMessage: "Home",
        id: "A82TU4",
      })}
      footer
      backgroundElement={<BlueFadeBackground />}
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
              <span className="inline-block bg-gradient-to-r from-primary to-secondary bg-clip-text text-4xl font-bold text-transparent md:text-5xl lg:text-7xl">
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
            imageSrc={reactImgSrc}
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
            onClick={() => onGotoClick("https://react.dev/")}
          />
          <GridItem
            imageSrc={turborepoImgSrc}
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
            onClick={() => onGotoClick("https://turbo.build/repo")}
          />
          <GridItem
            imageSrc={daisyuiImgSrc}
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
            onClick={() => onGotoClick("https://daisyui.com/")}
          />
          <GridItem
            imageSrc={storybookImgSrc}
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
            onClick={() => onGotoClick("https://storybook.js.org/")}
          />
          <GridItem
            imageSrc={playwrightImgSrc}
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
            onClick={() => onGotoClick("https://playwright.dev/")}
          />
          <GridItem
            invertColor
            imageSrc={githubImgSrc}
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
            onClick={() => onGotoClick("https://github.com/features/actions")}
          />
          <GridItem
            imageSrc={netImgSrc}
            title={intl.formatMessage({
              description: "HomeView - C# Backend title",
              defaultMessage: ".NET 8 Backend Available",
              id: "Jav64H",
            })}
            description={intl.formatMessage({
              description: "HomeView - C# Backend description",
              defaultMessage: "C# backend template available fully integrated with React template.",
              id: "+TvD1+",
            })}
            onClick={() => onGotoClick("https://github.com/Pettor/template-web-api-dotnet")}
          />
          <GridItem
            imageSrc={mocksServerImgSrc}
            title={intl.formatMessage({
              description: "HomeView - Mock api title",
              defaultMessage: "Mock Api Server",
              id: "g20cB6",
            })}
            description={intl.formatMessage({
              description: "HomeView - Mock api description",
              defaultMessage:
                "Mock API server using Mocks Server for frontend development and quickly iterate Api design.",
              id: "RX2GId",
            })}
            onClick={() => onGotoClick("https://mocks-server.org/")}
          />
        </div>
      </div>
    </AppbarLayout>
  );
}
