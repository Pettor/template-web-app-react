import type { ReactElement } from "react";
import clsx from "clsx";
import { Logo } from "../Logo/Logo";

export type LogoFullSize = "medium" | "large";

export interface LogoFullProps {
  appName: string;
  size: LogoFullSize;
}

export function LogoFull({ appName, size = "large" }: LogoFullProps): ReactElement {
  return (
    <div className="flex flex-row gap-4">
      <div className="flex items-center">
        <Logo size={size === "large" ? "large" : "medium"} />
      </div>
      <div className="flex items-center">
        <span className={clsx(size === "large" ? "text-6xl" : "text-5xl")}>{appName}</span>
      </div>
    </div>
  );
}
