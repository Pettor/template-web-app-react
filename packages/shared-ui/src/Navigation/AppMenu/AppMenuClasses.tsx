import type { ReactElement } from "react";

interface MenuOptions {
  open: boolean;
  anchorEl: HTMLElement | null;
  handleClose: () => void;
  children?: ReactElement | ReactElement[];
}

export type { MenuOptions };
