import Menu from "@mui/material/Menu";
import { IMenu } from "./IMenu";

const AppMenu = ({ open, anchorEl, handleClose, children }: IMenu): JSX.Element => (
  <Menu
    id="long-menu"
    MenuListProps={{
      "aria-labelledby": "long-button",
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

export default AppMenu;
