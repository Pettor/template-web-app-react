import type { ReactElement } from "react";
import Divider from "@mui/material/Divider";
import { styled } from "@mui/material/styles";

const StyledDivider = styled(Divider)(() => ({
  borderWidth: "1px",
  borderRight: "none",
  height: "24px",
}));

export default function AppHeaderDivider(): ReactElement {
  return <StyledDivider variant="fullWidth" />;
}
