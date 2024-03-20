import type { ReactElement } from "react";
import { XMarkIcon } from "@heroicons/react/20/solid";
import { useIntl } from "react-intl";
import { BasicLayout, BlueFadeBackground, GridBackground } from "shared-ui";
import { About, type AboutProps } from "~/components/feedback/about/About";

export interface AboutViewProps extends AboutProps {
  onBack: () => void;
}

export function AboutView({ onBack, ...aboutProps }: AboutViewProps): ReactElement {
  const intl = useIntl();

  return (
    <BasicLayout
      className="dark:bg-base-300"
      backgroundElement={
        <>
          <BlueFadeBackground />
          <GridBackground />
        </>
      }
    >
      <div className="hero">
        <div className="hero-content w-full flex-col lg:flex-row-reverse">
          <div className="card min-h-[550px] w-full shrink-0 bg-base-100 shadow-2xl sm:w-[550px]">
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
              <About {...aboutProps} />
            </div>
          </div>
        </div>
      </div>
    </BasicLayout>
  );
}
