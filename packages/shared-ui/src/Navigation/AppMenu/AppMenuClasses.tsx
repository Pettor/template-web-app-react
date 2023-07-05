import type { ReactElement } from "react";

interface IMenuOptions {
  open: boolean;
  anchorEl: HTMLElement | null;
  handleClose: () => void;
  children?: ReactElement | ReactElement[];
}

export type { IMenuOptions };
