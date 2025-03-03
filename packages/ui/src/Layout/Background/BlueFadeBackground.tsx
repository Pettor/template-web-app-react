import type { ReactElement } from "react";

export function BlueFadeBackground(): ReactElement {
  return (
    <div className="bg-base-100 absolute top-0 z-[-2] h-full w-full bg-[radial-gradient(ellipse_80%_80%_at_50%_-20%,rgba(120,119,198,0.3),rgba(255,255,255,0))]" />
  );
}
