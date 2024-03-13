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
      footer
      backgrouncClassName="absolute inset-0 h-full w-full bg-white dark:bg-black bg-[radial-gradient(#e5e7eb_1px,transparent_1px)] dark:bg-[radial-gradient(#46464645_1px,transparent_1px)] [background-size:16px_16px] [mask-image:radial-gradient(ellipse_50%_50%_at_50%_50%,#000_60%,transparent_100%)]"
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
              <span
                className="inline-block bg-gradient-to-r from-primary to-secondary bg-clip-text text-4xl font-bold text-transparent md:text-5xl
                  lg:text-7xl"
              >
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
              <p className="py-6 text-xl">Highly opinionated and optimized using Turborepo, React and TailwindCSS.</p>
              <div className="divider divider-vertical" />
            </div>
          </div>
        </div>
        <div className="grid grid-cols-1 gap-4 md:grid-cols-3">
          <div className="card bg-base-200 bg-opacity-20 shadow-inner">
            <div className="card-body glass rounded-xl dark:bg-none">
              <h2 className="card-title">React</h2>
              <p>If a dog chews shoes whose shoes does he choose?</p>
              <div className="card-actions justify-end">
                <button className="btn btn-primary">Buy Now</button>
              </div>
            </div>
          </div>
          <div className="card bg-base-200 bg-opacity-20 shadow-inner">
            <div className="card-body glass rounded-xl dark:bg-none">
              <h2 className="card-title">Turborepo</h2>
              <p>If a dog chews shoes whose shoes does he choose?</p>
              <div className="card-actions justify-end">
                <button className="btn btn-primary">Buy Now</button>
              </div>
            </div>
          </div>
          <div className="card bg-base-200 bg-opacity-20 shadow-inner">
            <div className="card-body glass rounded-xl dark:bg-none">
              <h2 className="card-title">Tailwind + DaisyUI</h2>
              <p>If a dog chews shoes whose shoes does he choose?</p>
              <div className="card-actions justify-end">
                <button className="btn btn-primary">Buy Now</button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </HeaderLayout>
  );
}
