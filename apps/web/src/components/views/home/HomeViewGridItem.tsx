import type { StyledComponent } from "@emotion/styled";
import { Box } from "@mui/material";
import type { BoxProps } from "@mui/material";
import { styled } from "@mui/material/styles";

export const HomeViewGridItem: StyledComponent<BoxProps> = styled(Box)(({ theme }) => ({
  ...theme.typography.body2,
  height: "100%",
  padding: theme.spacing(4),
  textAlign: "left",
  color: theme.palette.text.secondary,
  background: `${theme.palette.background.paper}ba`,
  borderRadius: "12px",
}));
