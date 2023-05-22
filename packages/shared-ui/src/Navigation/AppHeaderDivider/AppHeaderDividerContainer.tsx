import type { StyledComponent } from "@emotion/styled";
import { Divider } from "@mui/material";
import type { DividerProps } from "@mui/material";
import { styled } from "@mui/material/styles";

export const AppHeaderDividerContainer: StyledComponent<DividerProps> = styled(Divider)(() => ({
  borderWidth: "1px",
  borderRight: "none",
  height: "24px",
}));
