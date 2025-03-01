import type { ButtonHTMLAttributes, DetailedHTMLProps, ReactElement } from "react";
import clsx from "clsx";

export interface ButtonLoadingProps
  extends DetailedHTMLProps<ButtonHTMLAttributes<HTMLButtonElement>, HTMLButtonElement> {
  loading?: boolean;
}

export function ButtonLoading({ loading, children, ...buttonProps }: ButtonLoadingProps): ReactElement {
  return (
    <button {...buttonProps}>
      <span
        className={clsx(loading ? "opacity-100" : "opacity-0", "loading loading-spinner absolute transition-opacity")}
      />
      <span className={clsx(loading ? "opacity-0" : "opacity-100", "transition-opacity")}>{children}</span>
    </button>
  );
}
