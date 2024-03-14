import type { ReactElement } from "react";

export function GridBackground(): ReactElement {
  return (
    <div
      className="absolute inset-0 h-full w-full bg-base-100 bg-[radial-gradient(#e5e7eb_1px,transparent_1px)] [background-size:16px_16px]
        [mask-image:radial-gradient(ellipse_50%_50%_at_50%_50%,#000_60%,transparent_100%)] dark:bg-base-300
        dark:bg-[radial-gradient(#46464645_1px,transparent_1px)]"
    />
  );
}
