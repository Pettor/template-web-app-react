import type { ReactElement } from "react";

export function GridBackground(): ReactElement {
  return (
    <div className="bg-base-100 dark:bg-base-300 absolute inset-0 z-[-2] h-full w-full bg-[radial-gradient(#e5e7eb_1px,transparent_1px)] [mask-image:radial-gradient(ellipse_50%_50%_at_50%_50%,#000_60%,transparent_100%)] [background-size:16px_16px] dark:bg-[radial-gradient(#46464645_1px,transparent_1px)]" />
  );
}
