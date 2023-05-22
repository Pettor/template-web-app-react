import type { StyledComponent } from "@emotion/styled";
import { Box } from "@mui/material";
import type { BoxProps } from "@mui/material";
import { styled } from "@mui/material/styles";

export const BasicLayoutContainer: StyledComponent<BoxProps> = styled(Box)(({ theme }) => ({
  display: "flex",
  background: theme.palette.background.default,
}));
