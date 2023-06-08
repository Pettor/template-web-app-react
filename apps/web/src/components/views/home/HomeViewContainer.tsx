import type { StyledComponent } from "@emotion/styled";
import { Box } from "@mui/material";
import type { BoxProps } from "@mui/material";
import { styled } from "@mui/material/styles";

export const HomeViewContainer: StyledComponent<BoxProps> = styled(Box)(({ theme }) => ({
  padding: theme.spacing(2),
  position: "relative",
  width: "100%",
  overflow: "auto",
}));
