import type { StyledComponent } from "@emotion/styled";
import { AppBar } from "@mui/material";
import type { AppBarProps } from "@mui/material";
import { styled } from "@mui/material/styles";

export const AppHeaderBar: StyledComponent<AppBarProps> = styled(AppBar)(({ theme }) => ({
  zIndex: theme.zIndex.drawer + 1,
  transition: theme.transitions.create(["background", "box-shadow"], { duration: theme.transitions.duration.short }),
}));
