import type { ReactElement } from "react";
import { XMarkIcon } from "@heroicons/react/20/solid";
import { useIntl } from "react-intl";
import { BasicLayout, BlueFadeBackground, GridBackground } from "ui-package";
import { AboutDetails, type AboutDetailsProps } from "~/components/feedback/about-details/AboutDetails";

export interface AboutViewProps extends AboutDetailsProps {
  onBack: () => void;
}

export function AboutView({ onBack, ...aboutProps }: AboutViewProps): ReactElement {
  const intl = useIntl();

  return (
    <BasicLayout
      className="dark:bg-base-300/70"
      backgroundElement={
        <>
          <BlueFadeBackground />
          <GridBackground />
        </>
      }
    >
      <div className="hero">
        <div className="hero-content w-full flex-col lg:flex-row-reverse">
          <div className="card bg-base-100 min-h-[550px] w-full shrink-0 shadow-2xl sm:w-[550px]">
            <div className="card-body">
              <div className="card-actions justify-end">
                <button
                  className="btn btn-square btn-sm"
                  onClick={onBack}
                  title={intl.formatMessage({
                    description: "AboutView - Back button title",
                    defaultMessage: "Back",
                    id: "72q+Ui",
                  })}
                  aria-label={intl.formatMessage({
                    description: "AboutView - Back button aria label",
                    defaultMessage: "Back",
                    id: "ZTBga3",
                  })}
                >
                  <XMarkIcon className="h-6 w-6" />
                </button>
              </div>
              <AboutDetails {...aboutProps} />
            </div>
          </div>
        </div>
      </div>
    </BasicLayout>
  );
}
