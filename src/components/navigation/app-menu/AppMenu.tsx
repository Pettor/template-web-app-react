import type { ReactElement } from "react";
import Menu from "@mui/material/Menu";
import type { MenuOptions } from "./AppMenuClasses";

interface Props extends MenuOptions {}

export default function AppMenu({ open, anchorEl, handleClose, children }: Props): ReactElement {
  return (
    <Menu
      id="long-menu"
      MenuListProps={{
        "aria-labelledby": "long-button",
        disablePadding: true,
      }}
      anchorEl={anchorEl}
      open={open}
      onClose={handleClose}
      anchorOrigin={{
        vertical: "bottom",
        horizontal: "right",
      }}
      transformOrigin={{
        vertical: "top",
        horizontal: "right",
      }}
    >
      {children}
    </Menu>
  );
}
