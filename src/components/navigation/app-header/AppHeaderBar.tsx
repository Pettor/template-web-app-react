import MuiAppBar from "@mui/material/AppBar";
import { styled } from "@mui/material/styles";

const AppHeaderBar = styled(MuiAppBar)(({ theme }) => ({
  zIndex: theme.zIndex.drawer + 1,
  transition: theme.transitions.create(["background", "box-shadow"], { duration: theme.transitions.duration.short }),
}));

export default AppHeaderBar;
