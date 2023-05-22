interface MenuOptions {
  open: boolean;
  anchorEl: HTMLElement | null;
  handleClose: () => void;
  children?: JSX.Element | JSX.Element[];
}

export type { MenuOptions };
