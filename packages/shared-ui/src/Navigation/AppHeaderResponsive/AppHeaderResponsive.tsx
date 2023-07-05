import type { ReactElement } from "react";
import { useMediaQuery } from "@mui/material";
import { useTheme } from "@mui/material/styles";
import type { AppHeaderProps } from "../../Navigation";
import { AppHeader } from "../../Navigation";

export interface AppHeaderResponsiveProps extends Omit<AppHeaderProps, "isMobile"> {}

export function AppHeaderResponsive(props: AppHeaderResponsiveProps): ReactElement {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("sm"));

  return <AppHeader isMobile={isMobile} {...props} />;
}
