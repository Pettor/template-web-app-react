import type { StyledComponent } from "@emotion/styled";
import { Box } from "@mui/material";
import type { BoxProps } from "@mui/material";
import { styled } from "@mui/material/styles";

export const ProfileCardAvatarContainer: StyledComponent<BoxProps> = styled(Box)(() => ({
  display: "flex",
  height: "100%",
  alignItems: "center",
}));
