import LogoutIcon from "@mui/icons-material/Logout";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import MenuItem from "@mui/material/MenuItem";

export interface AppMenuProps {
  handleLogout?: () => void;
}

function AppMenuContent({ handleLogout }: AppMenuProps): JSX.Element {
  return (
    <MenuItem onClick={handleLogout}>
      <ListItemIcon>
        <LogoutIcon fontSize="small" />
      </ListItemIcon>
      <ListItemText>Logout</ListItemText>
    </MenuItem>
  );
}

export default AppMenuContent;
