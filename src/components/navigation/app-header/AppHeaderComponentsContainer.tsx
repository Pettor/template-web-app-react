import Stack from "@mui/material/Stack";
import { styled } from "@mui/material/styles";
import type { AppHeaderComponentOptions } from "./AppHeaderClasses";

const AppHeaderComponentsContainer = styled(Stack, {
  shouldForwardProp: (prop) => prop !== "flexItem",
})<AppHeaderComponentOptions>(({ flexItem }) => ({
  flex: flexItem ? 1 : "none",
}));

export default AppHeaderComponentsContainer;
