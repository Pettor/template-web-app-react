import { useMemo, type ReactElement } from "react";
import { Logo } from "../Logo/Logo";

export interface LogoFullProps {
  appName: string;
  size: "small" | "medium" | "large";
}

export function LogoFull({ appName, size = "large" }: LogoFullProps): ReactElement {
  const logoTextClass = useMemo(() => {
    switch (size) {
      case "small":
        return "text-4xl";
      case "medium":
        return "text-5xl";
      case "large":
        return "text-6xl";
    }
  }, [size]);

  return (
    <div className="flex flex-row gap-4">
      <div className="flex items-center">
        <Logo size={size} />
      </div>
      <div className="flex items-center">
        <span className={logoTextClass}>{appName}</span>
      </div>
    </div>
  );
}
