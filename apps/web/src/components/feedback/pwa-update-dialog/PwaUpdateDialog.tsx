import type { ReactElement } from "react";
import { useIntl } from "react-intl";

export interface PwaUpdateDialogProps {
  appName: string;
  open: boolean;
  onUpdate(): void;
}

export function PwaUpdateDialog({ appName, open, onUpdate }: PwaUpdateDialogProps): ReactElement {
  const intl = useIntl();

  return (
    <div className="toast toast-center z-50">
      {open && (
        <div role="alert" className="alert">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            className="stroke-info h-6 w-6 shrink-0"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
            ></path>
          </svg>
          <span>
            {intl.formatMessage(
              {
                description: "PwaUpdateDialog - Update available description",
                defaultMessage: "A new version of {appName} is available",
                id: "Dbak+i",
              },
              {
                appName,
              }
            )}
          </span>
          <div className="flex flex-row gap-2">
            <button className="btn btn-primary btn-sm" onClick={onUpdate}>
              {intl.formatMessage({
                description: "PwaUpdateDialog - Update button",
                defaultMessage: "Update",
                id: "Blpjtp",
              })}
            </button>
            <button className="btn btn-circle btn-ghost btn-sm">✕</button>
          </div>
        </div>
      )}
    </div>
  );
}
