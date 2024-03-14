import type { ReactElement } from "react";
import { XMarkIcon } from "@heroicons/react/20/solid";
import { useIntl } from "react-intl";
import { BasicLayout, BlueFadeBackground, GridBackground } from "shared-ui";

export interface AboutViewProps {
  appName: string;
  version: string;
  onBack: () => void;
}

export function AboutView({ appName, version, onBack }: AboutViewProps): ReactElement {
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
        <div className="hero-content flex-col lg:flex-row-reverse">
          <div className="card w-full shrink-0 bg-base-100 shadow-2xl">
            <div className="card-body min-w-72">
              <div className="card-actions justify-end">
                <button className="btn btn-square btn-sm" onClick={onBack}>
                  <XMarkIcon className="w-6 h-6" />
                </button>
              </div>
              <div className="flex flex-1 flex-col mt-4 items-left">
                <span className="text-3xl font-semibold">About</span>
                <div className="divider mt-2" />
                <table className="table table-lg">
                  <tbody>
                    <tr>
                      <td className="font-semibold px-0">
                        {intl.formatMessage({
                          description: "AboutView - App name",
                          defaultMessage: "Name:",
                          id: "S5SFCm",
                        })}
                      </td>
                      <td>{appName}</td>
                    </tr>
                    <tr>
                      <td className="font-semibold pl-0">
                        {intl.formatMessage({
                          description: "AboutView - App version",
                          defaultMessage: "Version",
                          id: "YlDZGr",
                        })}
                      </td>
                      <td>{version}</td>
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
