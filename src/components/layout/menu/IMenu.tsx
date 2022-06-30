export interface IMenu {
  open: boolean;
  anchorEl: HTMLElement | null;
  handleClose: () => void;
  children: JSX.Element | JSX.Element[];
}
