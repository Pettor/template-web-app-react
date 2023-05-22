import type { StyledComponent } from "@emotion/styled";
import { Box } from "@mui/material";
import type { BoxProps } from "@mui/material";
import { styled } from "@mui/material/styles";

export const AppHeaderGroupContainer: StyledComponent<BoxProps> = styled(Box)(() => ({
  display: "flex",
  alignItems: "center",
}));
