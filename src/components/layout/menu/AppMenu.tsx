import Menu from "@mui/material/Menu";
import { MenuOptions } from "./MenuOptions";

function AppMenu({ open, anchorEl, handleClose, children }: MenuOptions): JSX.Element {
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

export default AppMenu;
