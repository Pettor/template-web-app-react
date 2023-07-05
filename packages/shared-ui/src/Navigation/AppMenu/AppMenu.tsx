import type { ReactElement } from "react";
import { Menu } from "@mui/material";
import type { IMenuOptions } from "./AppMenuClasses";

export interface AppMenuProps extends IMenuOptions {}

export function AppMenu({ open, anchorEl, handleClose, children }: AppMenuProps): ReactElement {
  return (
    <Menu
      elevation={8}
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
