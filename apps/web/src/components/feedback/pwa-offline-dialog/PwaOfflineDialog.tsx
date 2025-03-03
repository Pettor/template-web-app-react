import type { ReactElement } from "react";
import { useIntl } from "react-intl";

export interface PwaOfflineDialogProps {
  open: boolean;
  onClose(): void;
}

export function PwaOfflineDialog({ open, onClose }: PwaOfflineDialogProps): ReactElement {
  const intl = useIntl();

  return (
    <div className="toast-left toast z-50">
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
            {intl.formatMessage({
              description: "PwaOfflineDialog- Ready to work offline description",
              defaultMessage: "Ready to work offline",
              id: "HQHLM4",
            })}
          </span>
          <div>
            <button className="btn btn-circle btn-ghost btn-sm" onClick={onClose}>
              ✕
            </button>
          </div>
        </div>
      )}
    </div>
  );
}
