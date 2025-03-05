import { type ReactElement } from "react";
import clsx from "clsx";

export interface ToastProps {
  message: string;
  severity: "success" | "error" | "warning" | "info";
  disablePosition?: boolean;
  positionX?: "left" | "center" | "right";
  positionY?: "top" | "bottom";
  onClose?: () => void;
}

export function Toast({ message, severity, positionX, positionY, disablePosition, onClose }: ToastProps): ReactElement {
  const typeClass = (): string => {
    switch (severity) {
      case "success":
        return "alert-success";
      case "error":
        return "alert-error";
      case "warning":
        return "alert-warning";
      case "info":
        return "alert-info";
      default:
        return "alert-info";
    }
  };

  const positionClass = (): string => {
    let x = "end";
    let y = "bottom";

    switch (positionX) {
      case "left":
        x = "start";
        break;
      case "center":
        x = "center";
        break;
      case "right":
        x = "end";
        break;
    }

    switch (positionY) {
      case "top":
        y = "top";
        break;
      case "bottom":
        y = "bottom";
        break;
    }

    return `toast-${x} toast-${y}`;
  };

  return (
    <div className={disablePosition ? "" : clsx(positionClass(), "toast")}>
      <div className={clsx(typeClass(), "alert shadow-md")}>
        <span>{message}</span>
        {onClose && (
          <button className="btn btn-circle btn-ghost btn-sm" onClick={onClose}>
            ✕
          </button>
        )}
      </div>
    </div>
  );
}
