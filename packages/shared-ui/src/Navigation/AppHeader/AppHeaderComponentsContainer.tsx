import type { StyledComponent } from "@emotion/styled";
import { Stack } from "@mui/material";
import type { StackProps } from "@mui/material";
import { styled } from "@mui/material/styles";
import type { AppHeaderComponentOptions } from "./AppHeaderClasses";

export const AppHeaderComponentsContainer: StyledComponent<StackProps & AppHeaderComponentOptions> = styled(Stack, {
  shouldForwardProp: (prop) => prop !== "flexItem",
})<AppHeaderComponentOptions>(({ flexItem }) => ({
  flex: flexItem ? 1 : "none",
}));
