import clsx from "clsx";
import type { ReactElement } from "react";
import { useIntl } from "react-intl";

export interface GridItemProps {
  title: string;
  imageSrc: string;
  description: string;
  invertColor?: boolean;
  onClick?(): void;
}

export function GridItem({ title, imageSrc, description, invertColor, onClick }: GridItemProps): ReactElement {
  const intl = useIntl();

  return (
    <div className="card hover:bg-neutral-content/70 dark:hover:bg-neutral/40 transition-colors">
      <div className="card-body glass min-h-56 rounded-xl dark:bg-none">
        <h2 className="card-title">
          {imageSrc && (
            <img className={clsx(invertColor ? "dark:invert" : "", "mask mask-squircle h-6 w-6")} src={imageSrc} />
          )}
          {title}
        </h2>
        <div className="divider m-0" />
        <p>{description}</p>
        {onClick && (
          <div className="card-actions justify-end">
            <button className="btn btn-primary" onClick={onClick}>
              {intl.formatMessage({
                description: "HomeView - Turborepo goto button",
                defaultMessage: "Goto",
                id: "UU8qy5",
              })}
            </button>
          </div>
        )}
      </div>
    </div>
  );
}
