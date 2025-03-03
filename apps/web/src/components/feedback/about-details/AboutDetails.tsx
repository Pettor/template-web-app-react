import type { ReactElement } from "react";
import { useIntl } from "react-intl";

export interface AboutDetailsProps {
  appName: string;
  appVersion: string;
  serverVersion: string;
}

export function AboutDetails({ appName, appVersion, serverVersion }: AboutDetailsProps): ReactElement {
  const intl = useIntl();

  return (
    <div className="items-left flex flex-1 flex-col px-4 md:mt-4">
      <span className="text-3xl font-semibold">
        {intl.formatMessage({
          description: "About - Title",
          defaultMessage: "About",
          id: "2Rm6Lp",
        })}
      </span>
      <div className="divider mt-2" />
      <table className="table-lg table">
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
  );
}
