import type { ReactElement } from "react";
import { XMarkIcon } from "@heroicons/react/20/solid";
import { useIntl } from "react-intl";
import { BasicLayout, BlueFadeBackground, GridBackground } from "shared-ui";

export interface AboutViewProps {
  appName: string;
  appVersion: string;
  serverVersion: string;
  onBack: () => void;
}

export function AboutView({ appName, appVersion, serverVersion, onBack }: AboutViewProps): ReactElement {
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
              <div className="items-left flex flex-1 flex-col px-4 md:mt-4">
                <span className="text-3xl font-semibold">About</span>
                <div className="divider mt-2" />
                <table className="table table-lg">
                  <tbody>
                    <tr>
                      <td className="px-0 font-semibold">
                        {intl.formatMessage({
                          description: "AboutView - App name",
                          defaultMessage: "Name:",
                          id: "S5SFCm",
                        })}
                      </td>
                      <td>{appName}</td>
                    </tr>
                    <tr>
                      <td className="pl-0 font-semibold">
                        {intl.formatMessage({
                          description: "AboutView - App version",
                          defaultMessage: "App Version",
                          id: "3kCFcr",
                        })}
                      </td>
                      <td>{appVersion}</td>
                    </tr>
                    <tr>
                      <td className="pl-0 font-semibold">
                        {intl.formatMessage({
                          description: "AboutView - Server version",
                          defaultMessage: "Server version",
                          id: "7klmPZ",
                        })}
                      </td>
                      <td>{serverVersion}</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        </div>
      </div>
    </BasicLayout>
  );
}
